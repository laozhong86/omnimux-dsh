var __omnimuxWorkflowCanvas=(()=>{var s3=Object.create;var Ld=Object.defineProperty;var l3=Object.getOwnPropertyDescriptor;var d3=Object.getOwnPropertyNames;var u3=Object.getPrototypeOf,c3=Object.prototype.hasOwnProperty;var f3=(e,t,a)=>t in e?Ld(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var ja=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},p3=(e,t)=>{for(var a in t)Ld(e,a,{get:t[a],enumerable:!0})},Iw=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of d3(t))!c3.call(e,n)&&n!==a&&Ld(e,n,{get:()=>t[n],enumerable:!(o=l3(t,n))||o.enumerable});return e};var I=(e,t,a)=>(a=e!=null?s3(u3(e)):{},Iw(t||!e||!e.__esModule?Ld(a,"default",{value:e,enumerable:!0}):a,e)),m3=e=>Iw(Ld({},"__esModule",{value:!0}),e);var zg=(e,t,a)=>f3(e,typeof t!="symbol"?t+"":t,a);var Ow=ja(ht=>{"use strict";function Fg(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<nf(n,t))e[o]=t,e[a]=n,a=o;else break e}}function xn(e){return e.length===0?null:e[0]}function sf(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,s=e[i],l=i+1,u=e[l];if(0>nf(s,a))l<n&&0>nf(u,s)?(e[o]=u,e[l]=a,o=l):(e[o]=s,e[i]=a,o=i);else if(l<n&&0>nf(u,a))e[o]=u,e[l]=a,o=l;else break e}}return t}function nf(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}ht.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Mw=performance,ht.unstable_now=function(){return Mw.now()}):(Og=Date,Nw=Og.now(),ht.unstable_now=function(){return Og.now()-Nw});var Mw,Og,Nw,Vn=[],Nr=[],g3=1,To=null,va=3,Ug=!1,_d=!1,Id=!1,qg=!1,Aw=typeof setTimeout=="function"?setTimeout:null,Dw=typeof clearTimeout=="function"?clearTimeout:null,Ew=typeof setImmediate<"u"?setImmediate:null;function rf(e){for(var t=xn(Nr);t!==null;){if(t.callback===null)sf(Nr);else if(t.startTime<=e)sf(Nr),t.sortIndex=t.expirationTime,Fg(Vn,t);else break;t=xn(Nr)}}function Vg(e){if(Id=!1,rf(e),!_d)if(xn(Vn)!==null)_d=!0,Us||(Us=!0,Fs());else{var t=xn(Nr);t!==null&&Gg(Vg,t.startTime-e)}}var Us=!1,Md=-1,Rw=5,Pw=-1;function zw(){return qg?!0:!(ht.unstable_now()-Pw<Rw)}function Hg(){if(qg=!1,Us){var e=ht.unstable_now();Pw=e;var t=!0;try{e:{_d=!1,Id&&(Id=!1,Dw(Md),Md=-1),Ug=!0;var a=va;try{t:{for(rf(e),To=xn(Vn);To!==null&&!(To.expirationTime>e&&zw());){var o=To.callback;if(typeof o=="function"){To.callback=null,va=To.priorityLevel;var n=o(To.expirationTime<=e);if(e=ht.unstable_now(),typeof n=="function"){To.callback=n,rf(e),t=!0;break t}To===xn(Vn)&&sf(Vn),rf(e)}else sf(Vn);To=xn(Vn)}if(To!==null)t=!0;else{var r=xn(Nr);r!==null&&Gg(Vg,r.startTime-e),t=!1}}break e}finally{To=null,va=a,Ug=!1}t=void 0}}finally{t?Fs():Us=!1}}}var Fs;typeof Ew=="function"?Fs=function(){Ew(Hg)}:typeof MessageChannel<"u"?(Bg=new MessageChannel,Tw=Bg.port2,Bg.port1.onmessage=Hg,Fs=function(){Tw.postMessage(null)}):Fs=function(){Aw(Hg,0)};var Bg,Tw;function Gg(e,t){Md=Aw(function(){e(ht.unstable_now())},t)}ht.unstable_IdlePriority=5;ht.unstable_ImmediatePriority=1;ht.unstable_LowPriority=4;ht.unstable_NormalPriority=3;ht.unstable_Profiling=null;ht.unstable_UserBlockingPriority=2;ht.unstable_cancelCallback=function(e){e.callback=null};ht.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rw=0<e?Math.floor(1e3/e):5};ht.unstable_getCurrentPriorityLevel=function(){return va};ht.unstable_next=function(e){switch(va){case 1:case 2:case 3:var t=3;break;default:t=va}var a=va;va=t;try{return e()}finally{va=a}};ht.unstable_requestPaint=function(){qg=!0};ht.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=va;va=e;try{return t()}finally{va=a}};ht.unstable_scheduleCallback=function(e,t,a){var o=ht.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:g3++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Fg(Nr,e),xn(Vn)===null&&e===xn(Nr)&&(Id?(Dw(Md),Md=-1):Id=!0,Gg(Vg,a-o))):(e.sortIndex=n,Fg(Vn,e),_d||Ug||(_d=!0,Us||(Us=!0,Fs()))),e};ht.unstable_shouldYield=zw;ht.unstable_wrapCallback=function(e){var t=va;return function(){var a=va;va=t;try{return e.apply(this,arguments)}finally{va=a}}}});var Bw=ja((T7,Hw)=>{"use strict";Hw.exports=Ow()});var Zw=ja(be=>{"use strict";var Wg=Symbol.for("react.transitional.element"),h3=Symbol.for("react.portal"),x3=Symbol.for("react.fragment"),b3=Symbol.for("react.strict_mode"),w3=Symbol.for("react.profiler"),y3=Symbol.for("react.consumer"),v3=Symbol.for("react.context"),C3=Symbol.for("react.forward_ref"),S3=Symbol.for("react.suspense"),k3=Symbol.for("react.memo"),Gw=Symbol.for("react.lazy"),L3=Symbol.for("react.activity"),Fw=Symbol.iterator;function _3(e){return e===null||typeof e!="object"?null:(e=Fw&&e[Fw]||e["@@iterator"],typeof e=="function"?e:null)}var jw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xw=Object.assign,Ww={};function Vs(e,t,a){this.props=e,this.context=t,this.refs=Ww,this.updater=a||jw}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yw(){}Yw.prototype=Vs.prototype;function Yg(e,t,a){this.props=e,this.context=t,this.refs=Ww,this.updater=a||jw}var Kg=Yg.prototype=new Yw;Kg.constructor=Yg;Xw(Kg,Vs.prototype);Kg.isPureReactComponent=!0;var Uw=Array.isArray;function Xg(){}var st={H:null,A:null,T:null,S:null},Kw=Object.prototype.hasOwnProperty;function Zg(e,t,a){var o=a.ref;return{$$typeof:Wg,type:e,key:t,ref:o!==void 0?o:null,props:a}}function I3(e,t){return Zg(e.type,t,e.props)}function $g(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wg}function M3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var qw=/\/+/g;function jg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M3(""+e.key):t.toString(36)}function N3(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Xg,Xg):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qs(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Wg:case h3:i=!0;break;case Gw:return i=e._init,qs(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+jg(e,0):o,Uw(n)?(a="",i!=null&&(a=i.replace(qw,"$&/")+"/"),qs(n,t,a,"",function(u){return u})):n!=null&&($g(n)&&(n=I3(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(qw,"$&/")+"/")+i)),t.push(n)),1;i=0;var s=o===""?".":o+":";if(Uw(e))for(var l=0;l<e.length;l++)o=e[l],r=s+jg(o,l),i+=qs(o,t,a,r,n);else if(l=_3(e),typeof l=="function")for(e=l.call(e),l=0;!(o=e.next()).done;)o=o.value,r=s+jg(o,l++),i+=qs(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return qs(N3(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function lf(e,t,a){if(e==null)return e;var o=[],n=0;return qs(e,o,"","",function(r){return t.call(a,r,n++)}),o}function E3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vw=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},T3={map:lf,forEach:function(e,t,a){lf(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return lf(e,function(){t++}),t},toArray:function(e){return lf(e,function(t){return t})||[]},only:function(e){if(!$g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};be.Activity=L3;be.Children=T3;be.Component=Vs;be.Fragment=x3;be.Profiler=w3;be.PureComponent=Yg;be.StrictMode=b3;be.Suspense=S3;be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st;be.__COMPILER_RUNTIME={__proto__:null,c:function(e){return st.H.useMemoCache(e)}};be.cache=function(e){return function(){return e.apply(null,arguments)}};be.cacheSignal=function(){return null};be.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=Xw({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!Kw.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),s=0;s<r;s++)i[s]=arguments[s+2];o.children=i}return Zg(e.type,n,o)};be.createContext=function(e){return e={$$typeof:v3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:y3,_context:e},e};be.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)Kw.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];n.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return Zg(e,r,n)};be.createRef=function(){return{current:null}};be.forwardRef=function(e){return{$$typeof:C3,render:e}};be.isValidElement=$g;be.lazy=function(e){return{$$typeof:Gw,_payload:{_status:-1,_result:e},_init:E3}};be.memo=function(e,t){return{$$typeof:k3,type:e,compare:t===void 0?null:t}};be.startTransition=function(e){var t=st.T,a={};st.T=a;try{var o=e(),n=st.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Xg,Vw)}catch(r){Vw(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),st.T=t}};be.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()};be.use=function(e){return st.H.use(e)};be.useActionState=function(e,t,a){return st.H.useActionState(e,t,a)};be.useCallback=function(e,t){return st.H.useCallback(e,t)};be.useContext=function(e){return st.H.useContext(e)};be.useDebugValue=function(){};be.useDeferredValue=function(e,t){return st.H.useDeferredValue(e,t)};be.useEffect=function(e,t){return st.H.useEffect(e,t)};be.useEffectEvent=function(e){return st.H.useEffectEvent(e)};be.useId=function(){return st.H.useId()};be.useImperativeHandle=function(e,t,a){return st.H.useImperativeHandle(e,t,a)};be.useInsertionEffect=function(e,t){return st.H.useInsertionEffect(e,t)};be.useLayoutEffect=function(e,t){return st.H.useLayoutEffect(e,t)};be.useMemo=function(e,t){return st.H.useMemo(e,t)};be.useOptimistic=function(e,t){return st.H.useOptimistic(e,t)};be.useReducer=function(e,t,a){return st.H.useReducer(e,t,a)};be.useRef=function(e){return st.H.useRef(e)};be.useState=function(e){return st.H.useState(e)};be.useSyncExternalStore=function(e,t,a){return st.H.useSyncExternalStore(e,t,a)};be.useTransition=function(){return st.H.useTransition()};be.version="19.2.8"});var J=ja((D7,$w)=>{"use strict";$w.exports=Zw()});var Jw=ja(Da=>{"use strict";var A3=J();function Qw(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Er(){}var Aa={d:{f:Er,r:function(){throw Error(Qw(522))},D:Er,C:Er,L:Er,m:Er,X:Er,S:Er,M:Er},p:0,findDOMNode:null},D3=Symbol.for("react.portal");function R3(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D3,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Nd=A3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function df(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Da.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Aa;Da.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Qw(299));return R3(e,t,null,a)};Da.flushSync=function(e){var t=Nd.T,a=Aa.p;try{if(Nd.T=null,Aa.p=2,e)return e()}finally{Nd.T=t,Aa.p=a,Aa.d.f()}};Da.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Aa.d.C(e,t))};Da.prefetchDNS=function(e){typeof e=="string"&&Aa.d.D(e)};Da.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=df(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Aa.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Aa.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Da.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=df(t.as,t.crossOrigin);Aa.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Aa.d.M(e)};Da.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=df(a,t.crossOrigin);Aa.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Da.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=df(t.as,t.crossOrigin);Aa.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Aa.d.m(e)};Da.requestFormReset=function(e){Aa.d.r(e)};Da.unstable_batchedUpdates=function(e,t){return e(t)};Da.useFormState=function(e,t,a){return Nd.H.useFormState(e,t,a)};Da.useFormStatus=function(){return Nd.H.useHostTransitionStatus()};Da.version="19.2.8"});var ea=ja((P7,ty)=>{"use strict";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(e){console.error(e)}}ey(),ty.exports=Jw()});var pC=ja(Rp=>{"use strict";var jt=Bw(),Iv=J(),P3=ea();function W(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Nv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ev(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ay(e){if(gu(e)!==e)throw Error(W(188))}function z3(e){var t=e.alternate;if(!t){if(t=gu(e),t===null)throw Error(W(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return ay(n),e;if(r===o)return ay(n),t;r=r.sibling}throw Error(W(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,s=n.child;s;){if(s===a){i=!0,a=n,o=r;break}if(s===o){i=!0,o=n,a=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===a){i=!0,a=r,o=n;break}if(s===o){i=!0,o=r,a=n;break}s=s.sibling}if(!i)throw Error(W(189))}}if(a.alternate!==o)throw Error(W(190))}if(a.tag!==3)throw Error(W(188));return a.stateNode.current===a?e:t}function Tv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Tv(e),t!==null)return t;e=e.sibling}return null}var ut=Object.assign,O3=Symbol.for("react.element"),uf=Symbol.for("react.transitional.element"),Od=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),Av=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Dv=Symbol.for("react.consumer"),$n=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),Ix=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),Rh=Symbol.for("react.activity"),H3=Symbol.for("react.memo_cache_sentinel"),oy=Symbol.iterator;function Ed(e){return e===null||typeof e!="object"?null:(e=oy&&e[oy]||e["@@iterator"],typeof e=="function"?e:null)}var B3=Symbol.for("react.client.reference");function Ph(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ks:return"Fragment";case Th:return"Profiler";case Av:return"StrictMode";case Ah:return"Suspense";case Dh:return"SuspenseList";case Rh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Od:return"Portal";case $n:return e.displayName||"Context";case Dv:return(e._context.displayName||"Context")+".Consumer";case _x:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ix:return t=e.displayName||null,t!==null?t:Ph(e.type)||"Memo";case Tr:t=e._payload,e=e._init;try{return Ph(e(t))}catch{}}return null}var Hd=Array.isArray,me=Iv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ge=P3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Di={pending:!1,data:null,method:null,action:null},zh=[],Zs=-1;function Cn(e){return{current:e}}function oa(e){0>Zs||(e.current=zh[Zs],zh[Zs]=null,Zs--)}function at(e,t){Zs++,zh[Zs]=e.current,e.current=t}var vn=Cn(null),tu=Cn(null),qr=Cn(null),Vf=Cn(null);function Gf(e,t){switch(at(qr,t),at(tu,e),at(vn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?uv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=uv(t),e=J2(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}oa(vn),at(vn,e)}function ml(){oa(vn),oa(tu),oa(qr)}function Oh(e){e.memoizedState!==null&&at(Vf,e);var t=vn.current,a=J2(t,e.type);t!==a&&(at(tu,e),at(vn,a))}function jf(e){tu.current===e&&(oa(vn),oa(tu)),Vf.current===e&&(oa(Vf),fu._currentValue=Di)}var Qg,ny;function Ni(e){if(Qg===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qg=t&&t[1]||"",ny=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qg+e+ny}var Jg=!1;function eh(e,t){if(!e||Jg)return"";Jg=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],s=r[1];if(i&&s){var l=i.split(`
`),u=s.split(`
`);for(n=o=0;o<l.length&&!l[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===l.length||n===u.length)for(o=l.length-1,n=u.length-1;1<=o&&0<=n&&l[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(l[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||l[o]!==u[n]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{Jg=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ni(a):""}function F3(e,t){switch(e.tag){case 26:case 27:case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return e.child!==t&&t!==null?Ni("Suspense Fallback"):Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return eh(e.type,!1);case 11:return eh(e.type.render,!1);case 1:return eh(e.type,!0);case 31:return Ni("Activity");default:return""}}function ry(e){try{var t="",a=null;do t+=F3(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Hh=Object.prototype.hasOwnProperty,Mx=jt.unstable_scheduleCallback,th=jt.unstable_cancelCallback,U3=jt.unstable_shouldYield,q3=jt.unstable_requestPaint,mo=jt.unstable_now,V3=jt.unstable_getCurrentPriorityLevel,Rv=jt.unstable_ImmediatePriority,Pv=jt.unstable_UserBlockingPriority,Xf=jt.unstable_NormalPriority,G3=jt.unstable_LowPriority,zv=jt.unstable_IdlePriority,j3=jt.log,X3=jt.unstable_setDisableYieldValue,hu=null,go=null;function Or(e){if(typeof j3=="function"&&X3(e),go&&typeof go.setStrictMode=="function")try{go.setStrictMode(hu,e)}catch{}}var ho=Math.clz32?Math.clz32:K3,W3=Math.log,Y3=Math.LN2;function K3(e){return e>>>=0,e===0?32:31-(W3(e)/Y3|0)|0}var cf=256,ff=262144,pf=4194304;function Ei(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bp(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=o&134217727;return s!==0?(o=s&~r,o!==0?n=Ei(o):(i&=s,i!==0?n=Ei(i):a||(a=s&~e,a!==0&&(n=Ei(a))))):(s=o&~r,s!==0?n=Ei(s):i!==0?n=Ei(i):a||(a=o&~e,a!==0&&(n=Ei(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function xu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Z3(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ov(){var e=pf;return pf<<=1,(pf&62914560)===0&&(pf=4194304),e}function ah(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function bu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $3(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-ho(a),f=1<<d;s[d]=0,l[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&Hv(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function Hv(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ho(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Bv(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-ho(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function Fv(e,t){var a=t&-t;return a=(a&42)!==0?1:Nx(a),(a&(e.suspendedLanes|t))!==0?0:a}function Nx(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ex(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uv(){var e=Ge.p;return e!==0?e:(e=window.event,e===void 0?32:uC(e.type))}function iy(e,t){var a=Ge.p;try{return Ge.p=e,t()}finally{Ge.p=a}}var ti=Math.random().toString(36).slice(2),ua="__reactFiber$"+ti,$a="__reactProps$"+ti,Ll="__reactContainer$"+ti,Bh="__reactEvents$"+ti,Q3="__reactListeners$"+ti,J3="__reactHandles$"+ti,sy="__reactResources$"+ti,wu="__reactMarker$"+ti;function Tx(e){delete e[ua],delete e[$a],delete e[Bh],delete e[Q3],delete e[J3]}function $s(e){var t=e[ua];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ll]||a[ua]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=gv(e);e!==null;){if(a=e[ua])return a;e=gv(e)}return t}e=a,a=e.parentNode}return null}function _l(e){if(e=e[ua]||e[Ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(W(33))}function sl(e){var t=e[sy];return t||(t=e[sy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function aa(e){e[wu]=!0}var qv=new Set,Vv={};function Vi(e,t){gl(e,t),gl(e+"Capture",t)}function gl(e,t){for(Vv[e]=t,e=0;e<t.length;e++)qv.add(t[e])}var e4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ly={},dy={};function t4(e){return Hh.call(dy,e)?!0:Hh.call(ly,e)?!1:e4.test(e)?dy[e]=!0:(ly[e]=!0,!1)}function Mf(e,t,a){if(t4(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function mf(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Do(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function a4(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fh(e){if(!e._valueTracker){var t=Gv(e)?"checked":"value";e._valueTracker=a4(e,t,""+e[t])}}function jv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Gv(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Wf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o4=/[\n"\\]/g;function zo(e){return e.replace(o4,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uh(e,t,a,o,n,r,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Do(t)):e.value!==""+Do(t)&&(e.value=""+Do(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?qh(e,i,Do(t)):a!=null?qh(e,i,Do(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Do(s):e.removeAttribute("name")}function Xv(e,t,a,o,n,r,i,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Fh(e);return}a=a!=null?""+Do(a):"",t=t!=null?""+Do(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=s?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Fh(e)}function qh(e,t,a){t==="number"&&Wf(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Do(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Wv(e,t,a){if(t!=null&&(t=""+Do(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Do(a):""}function Yv(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(W(92));if(Hd(o)){if(1<o.length)throw Error(W(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Do(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Fh(e)}function hl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var n4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uy(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||n4.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Kv(e,t,a){if(t!=null&&typeof t!="object")throw Error(W(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&uy(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&uy(e,r,t[r])}function Ax(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var r4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nf(e){return i4.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qn(){}var Vh=null;function Dx(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,dl=null;function cy(e){var t=_l(e);if(t&&(e=t.stateNode)){var a=e[$a]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uh(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zo(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[$a]||null;if(!n)throw Error(W(90));Uh(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&jv(o)}break e;case"textarea":Wv(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var oh=!1;function Zv(e,t,a){if(oh)return e(t,a);oh=!0;try{var o=e(t);return o}finally{if(oh=!1,(Qs!==null||dl!==null)&&(Ep(),Qs&&(t=Qs,e=dl,dl=Qs=null,cy(t),e)))for(t=0;t<e.length;t++)cy(e[t])}}function au(e,t){var a=e.stateNode;if(a===null)return null;var o=a[$a]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(W(231,t,typeof a));return a}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gh=!1;if(or)try{Gs={},Object.defineProperty(Gs,"passive",{get:function(){Gh=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Gh=!1}var Gs,Hr=null,Rx=null,Ef=null;function $v(){if(Ef)return Ef;var e,t=Rx,a=t.length,o,n="value"in Hr?Hr.value:Hr.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Ef=n.slice(e,1<o?1-o:void 0)}function Tf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gf(){return!0}function fy(){return!1}function Qa(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?gf:fy,this.isPropagationStopped=fy,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gf)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gf)},persist:function(){},isPersistent:gf}),t}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Qa(Gi),yu=ut({},Gi,{view:0,detail:0}),s4=Qa(yu),nh,rh,Td,yp=ut({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Px,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Td&&(Td&&e.type==="mousemove"?(nh=e.screenX-Td.screenX,rh=e.screenY-Td.screenY):rh=nh=0,Td=e),nh)},movementY:function(e){return"movementY"in e?e.movementY:rh}}),py=Qa(yp),l4=ut({},yp,{dataTransfer:0}),d4=Qa(l4),u4=ut({},yu,{relatedTarget:0}),ih=Qa(u4),c4=ut({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),f4=Qa(c4),p4=ut({},Gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m4=Qa(p4),g4=ut({},Gi,{data:0}),my=Qa(g4),h4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b4[e])?!!t[e]:!1}function Px(){return w4}var y4=ut({},yu,{key:function(e){if(e.key){var t=h4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Px,charCode:function(e){return e.type==="keypress"?Tf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v4=Qa(y4),C4=ut({},yp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gy=Qa(C4),S4=ut({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Px}),k4=Qa(S4),L4=ut({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_4=Qa(L4),I4=ut({},yp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),M4=Qa(I4),N4=ut({},Gi,{newState:0,oldState:0}),E4=Qa(N4),T4=[9,13,27,32],zx=or&&"CompositionEvent"in window,qd=null;or&&"documentMode"in document&&(qd=document.documentMode);var A4=or&&"TextEvent"in window&&!qd,Qv=or&&(!zx||qd&&8<qd&&11>=qd),hy=" ",xy=!1;function Jv(e,t){switch(e){case"keyup":return T4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function D4(e,t){switch(e){case"compositionend":return e1(t);case"keypress":return t.which!==32?null:(xy=!0,hy);case"textInput":return e=t.data,e===hy&&xy?null:e;default:return null}}function R4(e,t){if(Js)return e==="compositionend"||!zx&&Jv(e,t)?(e=$v(),Ef=Rx=Hr=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qv&&t.locale!=="ko"?null:t.data;default:return null}}var P4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function by(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P4[e.type]:t==="textarea"}function t1(e,t,a,o){Qs?dl?dl.push(o):dl=[o]:Qs=o,t=cp(t,"onChange"),0<t.length&&(a=new wp("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Vd=null,ou=null;function z4(e){Z2(e,0)}function vp(e){var t=Bd(e);if(jv(t))return e}function wy(e,t){if(e==="change")return t}var a1=!1;or&&(or?(xf="oninput"in document,xf||(sh=document.createElement("div"),sh.setAttribute("oninput","return;"),xf=typeof sh.oninput=="function"),hf=xf):hf=!1,a1=hf&&(!document.documentMode||9<document.documentMode));var hf,xf,sh;function yy(){Vd&&(Vd.detachEvent("onpropertychange",o1),ou=Vd=null)}function o1(e){if(e.propertyName==="value"&&vp(ou)){var t=[];t1(t,ou,e,Dx(e)),Zv(z4,t)}}function O4(e,t,a){e==="focusin"?(yy(),Vd=t,ou=a,Vd.attachEvent("onpropertychange",o1)):e==="focusout"&&yy()}function H4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vp(ou)}function B4(e,t){if(e==="click")return vp(t)}function F4(e,t){if(e==="input"||e==="change")return vp(t)}function U4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bo=typeof Object.is=="function"?Object.is:U4;function nu(e,t){if(bo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Hh.call(t,n)||!bo(e[n],t[n]))return!1}return!0}function vy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cy(e,t){var a=vy(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vy(a)}}function n1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wf(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wf(e.document)}return t}function Ox(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var q4=or&&"documentMode"in document&&11>=document.documentMode,el=null,jh=null,Gd=null,Xh=!1;function Sy(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xh||el==null||el!==Wf(o)||(o=el,"selectionStart"in o&&Ox(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gd&&nu(Gd,o)||(Gd=o,o=cp(jh,"onSelect"),0<o.length&&(t=new wp("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=el)))}function Mi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionrun:Mi("Transition","TransitionRun"),transitionstart:Mi("Transition","TransitionStart"),transitioncancel:Mi("Transition","TransitionCancel"),transitionend:Mi("Transition","TransitionEnd")},lh={},i1={};or&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function ji(e){if(lh[e])return lh[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in i1)return lh[e]=t[a];return e}var s1=ji("animationend"),l1=ji("animationiteration"),d1=ji("animationstart"),V4=ji("transitionrun"),G4=ji("transitionstart"),j4=ji("transitioncancel"),u1=ji("transitionend"),c1=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function Zo(e,t){c1.set(e,t),Vi(t,[e])}var Yf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ao=[],al=0,Hx=0;function Cp(){for(var e=al,t=Hx=al=0;t<e;){var a=Ao[t];Ao[t++]=null;var o=Ao[t];Ao[t++]=null;var n=Ao[t];Ao[t++]=null;var r=Ao[t];if(Ao[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&f1(a,n,r)}}function Sp(e,t,a,o){Ao[al++]=e,Ao[al++]=t,Ao[al++]=a,Ao[al++]=o,Hx|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bx(e,t,a,o){return Sp(e,t,a,o),Kf(e)}function Xi(e,t){return Sp(e,null,null,t),Kf(e)}function f1(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ho(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function Kf(e){if(50<Jd)throw Jd=0,mx=null,Error(W(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function X4(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fo(e,t,a,o){return new X4(e,t,a,o)}function Fx(e){return e=e.prototype,!(!e||!e.isReactComponent)}function er(e,t){var a=e.alternate;return a===null?(a=fo(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function p1(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Af(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")Fx(e)&&(i=1);else if(typeof e=="string")i=KE(e,a,vn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Rh:return e=fo(31,a,t,n),e.elementType=Rh,e.lanes=r,e;case Ks:return Ri(a.children,n,r,t);case Av:i=8,n|=24;break;case Th:return e=fo(12,a,t,n|2),e.elementType=Th,e.lanes=r,e;case Ah:return e=fo(13,a,t,n),e.elementType=Ah,e.lanes=r,e;case Dh:return e=fo(19,a,t,n),e.elementType=Dh,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $n:i=10;break e;case Dv:i=9;break e;case _x:i=11;break e;case Ix:i=14;break e;case Tr:i=16,o=null;break e}i=29,a=Error(W(130,e===null?"null":typeof e,"")),o=null}return t=fo(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Ri(e,t,a,o){return e=fo(7,e,o,t),e.lanes=a,e}function dh(e,t,a){return e=fo(6,e,null,t),e.lanes=a,e}function m1(e){var t=fo(18,null,null,0);return t.stateNode=e,t}function uh(e,t,a){return t=fo(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ky=new WeakMap;function Oo(e,t){if(typeof e=="object"&&e!==null){var a=ky.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ry(t)},ky.set(e,t),t)}return{value:e,source:t,stack:ry(t)}}var nl=[],rl=0,Zf=null,ru=0,Ro=[],Po=0,$r=null,bn=1,wn="";function Kn(e,t){nl[rl++]=ru,nl[rl++]=Zf,Zf=e,ru=t}function g1(e,t,a){Ro[Po++]=bn,Ro[Po++]=wn,Ro[Po++]=$r,$r=e;var o=bn;e=wn;var n=32-ho(o)-1;o&=~(1<<n),a+=1;var r=32-ho(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,bn=1<<32-ho(t)+n|a<<n|o,wn=r+e}else bn=1<<r|a<<n|o,wn=e}function Ux(e){e.return!==null&&(Kn(e,1),g1(e,1,0))}function qx(e){for(;e===Zf;)Zf=nl[--rl],nl[rl]=null,ru=nl[--rl],nl[rl]=null;for(;e===$r;)$r=Ro[--Po],Ro[Po]=null,wn=Ro[--Po],Ro[Po]=null,bn=Ro[--Po],Ro[Po]=null}function h1(e,t){Ro[Po++]=bn,Ro[Po++]=wn,Ro[Po++]=$r,bn=t.id,wn=t.overflow,$r=e}var ca=null,dt=null,Pe=!1,Vr=null,Ho=!1,Yh=Error(W(519));function Qr(e){var t=Error(W(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw iu(Oo(t,e)),Yh}function Ly(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[ua]=e,t[$a]=o,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<uu.length;a++)Ee(uu[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),Xv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Yv(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Q2(t.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),o.onScroll!=null&&Ee("scroll",t),o.onScrollEnd!=null&&Ee("scrollend",t),o.onClick!=null&&(t.onclick=Qn),t=!0):t=!1,t||Qr(e,!0)}function _y(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:Ho=!1;return;case 27:case 3:Ho=!0;return;default:ca=ca.return}}function js(e){if(e!==ca)return!1;if(!Pe)return _y(e),Pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wx(e.type,e.memoizedProps)),a=!a),a&&dt&&Qr(e),_y(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));dt=mv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));dt=mv(e)}else t===27?(t=dt,ai(e.type)?(e=Sx,Sx=null,dt=e):dt=t):dt=ca?Fo(e.stateNode.nextSibling):null;return!0}function Hi(){dt=ca=null,Pe=!1}function ch(){var e=Vr;return e!==null&&(Ka===null?Ka=e:Ka.push.apply(Ka,e),Vr=null),e}function iu(e){Vr===null?Vr=[e]:Vr.push(e)}var Kh=Cn(null),Wi=null,Jn=null;function Dr(e,t,a){at(Kh,t._currentValue),t._currentValue=a}function tr(e){e._currentValue=Kh.current,oa(Kh)}function Zh(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function $h(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=n;for(var l=0;l<t.length;l++)if(s.context===t[l]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Zh(r.return,a,e),o||(i=null);break e}r=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(W(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Zh(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Il(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(W(387));if(i=i.memoizedProps,i!==null){var s=n.type;bo(n.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(n===Vf.current){if(i=n.alternate,i===null)throw Error(W(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(fu):e=[fu])}n=n.return}e!==null&&$h(t,e,a,o),t.flags|=262144}function $f(e){for(e=e.firstContext;e!==null;){if(!bo(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bi(e){Wi=e,Jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return x1(Wi,e)}function bf(e,t){return Wi===null&&Bi(e),x1(e,t)}function x1(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jn===null){if(e===null)throw Error(W(308));Jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jn=Jn.next=t;return a}var W4=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Y4=jt.unstable_scheduleCallback,K4=jt.unstable_NormalPriority,Ot={$$typeof:$n,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vx(){return{controller:new W4,data:new Map,refCount:0}}function vu(e){e.refCount--,e.refCount===0&&Y4(K4,function(){e.controller.abort()})}var jd=null,Qh=0,xl=0,ul=null;function Z4(e,t){if(jd===null){var a=jd=[];Qh=0,xl=mb(),ul={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qh++,t.then(Iy,Iy),t}function Iy(){if(--Qh===0&&jd!==null){ul!==null&&(ul.status="fulfilled");var e=jd;jd=null,xl=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $4(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var My=me.S;me.S=function(e,t){T2=mo(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Z4(e,t),My!==null&&My(e,t)};var Pi=Cn(null);function Gx(){var e=Pi.current;return e!==null?e:Qe.pooledCache}function Df(e,t){t===null?at(Pi,Pi.current):at(Pi,t.pool)}function b1(){var e=Gx();return e===null?null:{parent:Ot._currentValue,pool:e}}var Ml=Error(W(460)),jx=Error(W(474)),kp=Error(W(542)),Qf={then:function(){}};function Ny(e){return e=e.status,e==="fulfilled"||e==="rejected"}function w1(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qn,Qn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e;default:if(typeof t.status=="string")t.then(Qn,Qn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(W(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ty(e),e}throw zi=t,Ml}}function Ti(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zi=a,Ml):a}}var zi=null;function Ey(){if(zi===null)throw Error(W(459));var e=zi;return zi=null,e}function Ty(e){if(e===Ml||e===kp)throw Error(W(483))}var cl=null,su=0;function wf(e){var t=su;return su+=1,cl===null&&(cl=[]),w1(cl,e,t)}function Ad(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yf(e,t){throw t.$$typeof===O3?Error(W(525)):(e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function y1(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=er(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function i(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function s(h,x,m,b){return x===null||x.tag!==6?(x=dh(m,h.mode,b),x.return=h,x):(x=n(x,m),x.return=h,x)}function l(h,x,m,b){var v=m.type;return v===Ks?d(h,x,m.props.children,b,m.key):x!==null&&(x.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tr&&Ti(v)===x.type)?(x=n(x,m.props),Ad(x,m),x.return=h,x):(x=Af(m.type,m.key,m.props,null,h.mode,b),Ad(x,m),x.return=h,x)}function u(h,x,m,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=uh(m,h.mode,b),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function d(h,x,m,b,v){return x===null||x.tag!==7?(x=Ri(m,h.mode,b,v),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=dh(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uf:return m=Af(x.type,x.key,x.props,null,h.mode,m),Ad(m,x),m.return=h,m;case Od:return x=uh(x,h.mode,m),x.return=h,x;case Tr:return x=Ti(x),f(h,x,m)}if(Hd(x)||Ed(x))return x=Ri(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,wf(x),m);if(x.$$typeof===$n)return f(h,bf(h,x),m);yf(h,x)}return null}function c(h,x,m,b){var v=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return v!==null?null:s(h,x,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uf:return m.key===v?l(h,x,m,b):null;case Od:return m.key===v?u(h,x,m,b):null;case Tr:return m=Ti(m),c(h,x,m,b)}if(Hd(m)||Ed(m))return v!==null?null:d(h,x,m,b,null);if(typeof m.then=="function")return c(h,x,wf(m),b);if(m.$$typeof===$n)return c(h,x,bf(h,m),b);yf(h,m)}return null}function p(h,x,m,b,v){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return h=h.get(m)||null,s(x,h,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case uf:return h=h.get(b.key===null?m:b.key)||null,l(x,h,b,v);case Od:return h=h.get(b.key===null?m:b.key)||null,u(x,h,b,v);case Tr:return b=Ti(b),p(h,x,m,b,v)}if(Hd(b)||Ed(b))return h=h.get(m)||null,d(x,h,b,v,null);if(typeof b.then=="function")return p(h,x,m,wf(b),v);if(b.$$typeof===$n)return p(h,x,m,bf(x,b),v);yf(x,b)}return null}function g(h,x,m,b){for(var v=null,C=null,S=x,k=x=0,_=null;S!==null&&k<m.length;k++){S.index>k?(_=S,S=null):_=S.sibling;var T=c(h,S,m[k],b);if(T===null){S===null&&(S=_);break}e&&S&&T.alternate===null&&t(h,S),x=r(T,x,k),C===null?v=T:C.sibling=T,C=T,S=_}if(k===m.length)return a(h,S),Pe&&Kn(h,k),v;if(S===null){for(;k<m.length;k++)S=f(h,m[k],b),S!==null&&(x=r(S,x,k),C===null?v=S:C.sibling=S,C=S);return Pe&&Kn(h,k),v}for(S=o(S);k<m.length;k++)_=p(S,h,k,m[k],b),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?k:_.key),x=r(_,x,k),C===null?v=_:C.sibling=_,C=_);return e&&S.forEach(function(R){return t(h,R)}),Pe&&Kn(h,k),v}function w(h,x,m,b){if(m==null)throw Error(W(151));for(var v=null,C=null,S=x,k=x=0,_=null,T=m.next();S!==null&&!T.done;k++,T=m.next()){S.index>k?(_=S,S=null):_=S.sibling;var R=c(h,S,T.value,b);if(R===null){S===null&&(S=_);break}e&&S&&R.alternate===null&&t(h,S),x=r(R,x,k),C===null?v=R:C.sibling=R,C=R,S=_}if(T.done)return a(h,S),Pe&&Kn(h,k),v;if(S===null){for(;!T.done;k++,T=m.next())T=f(h,T.value,b),T!==null&&(x=r(T,x,k),C===null?v=T:C.sibling=T,C=T);return Pe&&Kn(h,k),v}for(S=o(S);!T.done;k++,T=m.next())T=p(S,h,k,T.value,b),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?k:T.key),x=r(T,x,k),C===null?v=T:C.sibling=T,C=T);return e&&S.forEach(function(H){return t(h,H)}),Pe&&Kn(h,k),v}function y(h,x,m,b){if(typeof m=="object"&&m!==null&&m.type===Ks&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case uf:e:{for(var v=m.key;x!==null;){if(x.key===v){if(v=m.type,v===Ks){if(x.tag===7){a(h,x.sibling),b=n(x,m.props.children),b.return=h,h=b;break e}}else if(x.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tr&&Ti(v)===x.type){a(h,x.sibling),b=n(x,m.props),Ad(b,m),b.return=h,h=b;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Ks?(b=Ri(m.props.children,h.mode,b,m.key),b.return=h,h=b):(b=Af(m.type,m.key,m.props,null,h.mode,b),Ad(b,m),b.return=h,h=b)}return i(h);case Od:e:{for(v=m.key;x!==null;){if(x.key===v)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),b=n(x,m.children||[]),b.return=h,h=b;break e}else{a(h,x);break}else t(h,x);x=x.sibling}b=uh(m,h.mode,b),b.return=h,h=b}return i(h);case Tr:return m=Ti(m),y(h,x,m,b)}if(Hd(m))return g(h,x,m,b);if(Ed(m)){if(v=Ed(m),typeof v!="function")throw Error(W(150));return m=v.call(m),w(h,x,m,b)}if(typeof m.then=="function")return y(h,x,wf(m),b);if(m.$$typeof===$n)return y(h,x,bf(h,m),b);yf(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),b=n(x,m),b.return=h,h=b):(a(h,x),b=dh(m,h.mode,b),b.return=h,h=b),i(h)):a(h,x)}return function(h,x,m,b){try{su=0;var v=y(h,x,m,b);return cl=null,v}catch(S){if(S===Ml||S===kp)throw S;var C=fo(29,S,null,h.mode);return C.lanes=b,C.return=h,C}}}var Fi=y1(!0),v1=y1(!1),Ar=!1;function Xx(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=Kf(e),f1(e,null,a),t}return Sp(e,o,t,a),Kf(e)}function Xd(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Bv(e,a)}}function fh(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ex=!1;function Wd(){if(ex){var e=ul;if(e!==null)throw e}}function Yd(e,t,a,o){ex=!1;var n=e.updateQueue;Ar=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?r=u:i.next=u,i=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(r!==null){var f=n.baseState;i=0,d=u=l=null,s=r;do{var c=s.lane&-536870913,p=c!==s.lane;if(p?(Re&c)===c:(o&c)===c){c!==0&&c===xl&&(ex=!0),d!==null&&(d=d.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var g=e,w=s;c=t;var y=a;switch(w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(y,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,c=typeof g=="function"?g.call(y,f,c):g,c==null)break e;f=ut({},f,c);break e;case 2:Ar=!0}}c=s.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,i|=c;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;p=s,s=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),ei|=i,e.lanes=i,e.memoizedState=f}}function C1(e,t){if(typeof e!="function")throw Error(W(191,e));e.call(t)}function S1(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)C1(a[e],t)}var bl=Cn(null),Jf=Cn(0);function Ay(e,t){e=sr,at(Jf,e),at(bl,t),sr=e|t.baseLanes}function tx(){at(Jf,sr),at(bl,bl.current)}function Wx(){sr=Jf.current,oa(bl),oa(Jf)}var wo=Cn(null),Bo=null;function Rr(e){var t=e.alternate;at(Tt,Tt.current&1),at(wo,e),Bo===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(Bo=e)}function ax(e){at(Tt,Tt.current),at(wo,e),Bo===null&&(Bo=e)}function k1(e){e.tag===22?(at(Tt,Tt.current),at(wo,e),Bo===null&&(Bo=e)):Pr(e)}function Pr(){at(Tt,Tt.current),at(wo,wo.current)}function co(e){oa(wo),Bo===e&&(Bo=null),oa(Tt)}var Tt=Cn(0);function ep(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vx(a)||Cx(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nr=0,ye=null,$e=null,Pt=null,tp=!1,fl=!1,Ui=!1,ap=0,lu=0,pl=null,Q4=0;function kt(){throw Error(W(321))}function Yx(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!bo(e[a],t[a]))return!1;return!0}function Kx(e,t,a,o,n,r){return nr=r,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,me.H=e===null||e.memoizedState===null?t2:ib,Ui=!1,r=a(o,n),Ui=!1,fl&&(r=_1(t,a,o,n)),L1(e),r}function L1(e){me.H=du;var t=$e!==null&&$e.next!==null;if(nr=0,Pt=$e=ye=null,tp=!1,lu=0,pl=null,t)throw Error(W(300));e===null||Ht||(e=e.dependencies,e!==null&&$f(e)&&(Ht=!0))}function _1(e,t,a,o){ye=e;var n=0;do{if(fl&&(pl=null),lu=0,fl=!1,25<=n)throw Error(W(301));if(n+=1,Pt=$e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}me.H=a2,r=t(a,o)}while(fl);return r}function J4(){var e=me.H,t=e.useState()[0];return t=typeof t.then=="function"?Cu(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(ye.flags|=1024),t}function Zx(){var e=ap!==0;return ap=0,e}function $x(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Qx(e){if(tp){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tp=!1}nr=0,Pt=$e=ye=null,fl=!1,lu=ap=0,pl=null}function Ra(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ye.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function At(){if($e===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Pt===null?ye.memoizedState:Pt.next;if(t!==null)Pt=t,$e=e;else{if(e===null)throw ye.alternate===null?Error(W(467)):Error(W(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Pt===null?ye.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function Lp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cu(e){var t=lu;return lu+=1,pl===null&&(pl=[]),e=w1(pl,e,t),t=ye,(Pt===null?t.memoizedState:Pt.next)===null&&(t=t.alternate,me.H=t===null||t.memoizedState===null?t2:ib),e}function _p(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cu(e);if(e.$$typeof===$n)return fa(e)}throw Error(W(438,String(e)))}function Jx(e){var t=null,a=ye.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Lp(),ye.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=H3;return t.index++,a}function rr(e,t){return typeof t=="function"?t(e):t}function Rf(e){var t=At();return eb(t,$e,e)}function eb(e,t,a){var o=e.queue;if(o===null)throw Error(W(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var s=i=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Re&f)===f:(nr&f)===f){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===xl&&(d=!0);else if((nr&c)===c){u=u.next,c===xl&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=f,i=r):l=l.next=f,ye.lanes|=c,ei|=c;f=u.action,Ui&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=c,i=r):l=l.next=c,ye.lanes|=f,ei|=f;u=u.next}while(u!==null&&u!==t);if(l===null?i=r:l.next=s,!bo(r,e.memoizedState)&&(Ht=!0,d&&(a=ul,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=l,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ph(e){var t=At(),a=t.queue;if(a===null)throw Error(W(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);bo(r,t.memoizedState)||(Ht=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function I1(e,t,a){var o=ye,n=At(),r=Pe;if(r){if(a===void 0)throw Error(W(407));a=a()}else a=t();var i=!bo(($e||n).memoizedState,a);if(i&&(n.memoizedState=a,Ht=!0),n=n.queue,tb(E1.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||Pt!==null&&Pt.memoizedState.tag&1){if(o.flags|=2048,wl(9,{destroy:void 0},N1.bind(null,o,n,a,t),null),Qe===null)throw Error(W(349));r||(nr&127)!==0||M1(o,t,a)}return a}function M1(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ye.updateQueue,t===null?(t=Lp(),ye.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function N1(e,t,a,o){t.value=a,t.getSnapshot=o,T1(t)&&A1(e)}function E1(e,t,a){return a(function(){T1(t)&&A1(e)})}function T1(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!bo(e,a)}catch{return!0}}function A1(e){var t=Xi(e,2);t!==null&&Za(t,e,2)}function ox(e){var t=Ra();if(typeof e=="function"){var a=e;if(e=a(),Ui){Or(!0);try{a()}finally{Or(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t}function D1(e,t,a,o){return e.baseState=a,eb(e,$e,typeof o=="function"?o:rr)}function eE(e,t,a,o,n){if(Mp(e))throw Error(W(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};me.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,R1(t,r)):(r.next=a.next,t.pending=a.next=r)}}function R1(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=me.T,i={};me.T=i;try{var s=a(n,o),l=me.S;l!==null&&l(i,s),Dy(e,t,s)}catch(u){nx(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),me.T=r}}else try{r=a(n,o),Dy(e,t,r)}catch(u){nx(e,t,u)}}function Dy(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ry(e,t,o)},function(o){return nx(e,t,o)}):Ry(e,t,a)}function Ry(e,t,a){t.status="fulfilled",t.value=a,P1(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,R1(e,a)))}function nx(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,P1(t),t=t.next;while(t!==o)}e.action=null}function P1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function z1(e,t){return t}function Py(e,t){if(Pe){var a=Qe.formState;if(a!==null){e:{var o=ye;if(Pe){if(dt){t:{for(var n=dt,r=Ho;n.nodeType!==8;){if(!r){n=null;break t}if(n=Fo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){dt=Fo(n.nextSibling),o=n.data==="F!";break e}}Qr(o)}o=!1}o&&(t=a[0])}}return a=Ra(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z1,lastRenderedState:t},a.queue=o,a=Q1.bind(null,ye,o),o.dispatch=a,o=ox(!1),r=rb.bind(null,ye,!1,o.queue),o=Ra(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=eE.bind(null,ye,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function zy(e){var t=At();return O1(t,$e,e)}function O1(e,t,a){if(t=eb(e,t,z1)[0],e=Rf(rr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Cu(t)}catch(i){throw i===Ml?kp:i}else o=t;t=At();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ye.flags|=2048,wl(9,{destroy:void 0},tE.bind(null,n,a),null)),[o,r,e]}function tE(e,t){e.action=t}function Oy(e){var t=At(),a=$e;if(a!==null)return O1(t,a,e);At(),t=t.memoizedState,a=At();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function wl(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ye.updateQueue,t===null&&(t=Lp(),ye.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function H1(){return At().memoizedState}function Pf(e,t,a,o){var n=Ra();ye.flags|=e,n.memoizedState=wl(1|t,{destroy:void 0},a,o===void 0?null:o)}function Ip(e,t,a,o){var n=At();o=o===void 0?null:o;var r=n.memoizedState.inst;$e!==null&&o!==null&&Yx(o,$e.memoizedState.deps)?n.memoizedState=wl(t,r,a,o):(ye.flags|=e,n.memoizedState=wl(1|t,r,a,o))}function Hy(e,t){Pf(8390656,8,e,t)}function tb(e,t){Ip(2048,8,e,t)}function aE(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=Lp(),ye.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function B1(e){var t=At().memoizedState;return aE({ref:t,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(W(440));return t.impl.apply(void 0,arguments)}}function F1(e,t){return Ip(4,2,e,t)}function U1(e,t){return Ip(4,4,e,t)}function q1(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function V1(e,t,a){a=a!=null?a.concat([e]):null,Ip(4,4,q1.bind(null,t,e),a)}function ab(){}function G1(e,t){var a=At();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Yx(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function j1(e,t){var a=At();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Yx(t,o[1]))return o[0];if(o=e(),Ui){Or(!0);try{e()}finally{Or(!1)}}return a.memoizedState=[o,t],o}function ob(e,t,a){return a===void 0||(nr&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=D2(),ye.lanes|=e,ei|=e,a)}function X1(e,t,a,o){return bo(a,t)?a:bl.current!==null?(e=ob(e,a,o),bo(e,t)||(Ht=!0),e):(nr&42)===0||(nr&1073741824)!==0&&(Re&261930)===0?(Ht=!0,e.memoizedState=a):(e=D2(),ye.lanes|=e,ei|=e,t)}function W1(e,t,a,o,n){var r=Ge.p;Ge.p=r!==0&&8>r?r:8;var i=me.T,s={};me.T=s,rb(e,!1,t,a);try{var l=n(),u=me.S;if(u!==null&&u(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=$4(l,o);Kd(e,t,d,xo(e))}else Kd(e,t,o,xo(e))}catch(f){Kd(e,t,{then:function(){},status:"rejected",reason:f},xo())}finally{Ge.p=r,i!==null&&s.types!==null&&(i.types=s.types),me.T=i}}function oE(){}function rx(e,t,a,o){if(e.tag!==5)throw Error(W(476));var n=Y1(e).queue;W1(e,n,t,Di,a===null?oE:function(){return K1(e),a(o)})}function Y1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Di,baseState:Di,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:Di},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function K1(e){var t=Y1(e);t.next===null&&(t=e.alternate.memoizedState),Kd(e,t.next.queue,{},xo())}function nb(){return fa(fu)}function Z1(){return At().memoizedState}function $1(){return At().memoizedState}function nE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xo();e=Gr(a);var o=jr(t,e,a);o!==null&&(Za(o,t,a),Xd(o,t,a)),t={cache:Vx()},e.payload=t;return}t=t.return}}function rE(e,t,a){var o=xo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mp(e)?J1(t,a):(a=Bx(e,t,a,o),a!==null&&(Za(a,e,o),e2(a,t,o)))}function Q1(e,t,a){var o=xo();Kd(e,t,a,o)}function Kd(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))J1(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,s=r(i,a);if(n.hasEagerState=!0,n.eagerState=s,bo(s,i))return Sp(e,t,n,0),Qe===null&&Cp(),!1}catch{}if(a=Bx(e,t,n,o),a!==null)return Za(a,e,o),e2(a,t,o),!0}return!1}function rb(e,t,a,o){if(o={lane:2,revertLane:mb(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Mp(e)){if(t)throw Error(W(479))}else t=Bx(e,a,o,2),t!==null&&Za(t,e,2)}function Mp(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function J1(e,t){fl=tp=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function e2(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Bv(e,a)}}var du={readContext:fa,use:_p,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};du.useEffectEvent=kt;var t2={readContext:fa,use:_p,useCallback:function(e,t){return Ra().memoizedState=[e,t===void 0?null:t],e},useContext:fa,useEffect:Hy,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Pf(4194308,4,q1.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Pf(4194308,4,e,t)},useInsertionEffect:function(e,t){Pf(4,2,e,t)},useMemo:function(e,t){var a=Ra();t=t===void 0?null:t;var o=e();if(Ui){Or(!0);try{e()}finally{Or(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ra();if(a!==void 0){var n=a(t);if(Ui){Or(!0);try{a(t)}finally{Or(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=rE.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var t=Ra();return e={current:e},t.memoizedState=e},useState:function(e){e=ox(e);var t=e.queue,a=Q1.bind(null,ye,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ab,useDeferredValue:function(e,t){var a=Ra();return ob(a,e,t)},useTransition:function(){var e=ox(!1);return e=W1.bind(null,ye,e.queue,!0,!1),Ra().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ye,n=Ra();if(Pe){if(a===void 0)throw Error(W(407));a=a()}else{if(a=t(),Qe===null)throw Error(W(349));(Re&127)!==0||M1(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,Hy(E1.bind(null,o,r,e),[e]),o.flags|=2048,wl(9,{destroy:void 0},N1.bind(null,o,r,a,t),null),a},useId:function(){var e=Ra(),t=Qe.identifierPrefix;if(Pe){var a=wn,o=bn;a=(o&~(1<<32-ho(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ap++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Q4++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nb,useFormState:Py,useActionState:Py,useOptimistic:function(e){var t=Ra();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=rb.bind(null,ye,!0,a),a.dispatch=t,[e,t]},useMemoCache:Jx,useCacheRefresh:function(){return Ra().memoizedState=nE.bind(null,ye)},useEffectEvent:function(e){var t=Ra(),a={impl:e};return t.memoizedState=a,function(){if((Ve&2)!==0)throw Error(W(440));return a.impl.apply(void 0,arguments)}}},ib={readContext:fa,use:_p,useCallback:G1,useContext:fa,useEffect:tb,useImperativeHandle:V1,useInsertionEffect:F1,useLayoutEffect:U1,useMemo:j1,useReducer:Rf,useRef:H1,useState:function(){return Rf(rr)},useDebugValue:ab,useDeferredValue:function(e,t){var a=At();return X1(a,$e.memoizedState,e,t)},useTransition:function(){var e=Rf(rr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:Cu(e),t]},useSyncExternalStore:I1,useId:Z1,useHostTransitionStatus:nb,useFormState:zy,useActionState:zy,useOptimistic:function(e,t){var a=At();return D1(a,$e,e,t)},useMemoCache:Jx,useCacheRefresh:$1};ib.useEffectEvent=B1;var a2={readContext:fa,use:_p,useCallback:G1,useContext:fa,useEffect:tb,useImperativeHandle:V1,useInsertionEffect:F1,useLayoutEffect:U1,useMemo:j1,useReducer:ph,useRef:H1,useState:function(){return ph(rr)},useDebugValue:ab,useDeferredValue:function(e,t){var a=At();return $e===null?ob(a,e,t):X1(a,$e.memoizedState,e,t)},useTransition:function(){var e=ph(rr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:Cu(e),t]},useSyncExternalStore:I1,useId:Z1,useHostTransitionStatus:nb,useFormState:Oy,useActionState:Oy,useOptimistic:function(e,t){var a=At();return $e!==null?D1(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Jx,useCacheRefresh:$1};a2.useEffectEvent=B1;function mh(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:ut({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ix={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=xo(),n=Gr(o);n.payload=t,a!=null&&(n.callback=a),t=jr(e,n,o),t!==null&&(Za(t,e,o),Xd(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=xo(),n=Gr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=jr(e,n,o),t!==null&&(Za(t,e,o),Xd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xo(),o=Gr(a);o.tag=2,t!=null&&(o.callback=t),t=jr(e,o,a),t!==null&&(Za(t,e,a),Xd(t,e,a))}};function By(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!nu(a,o)||!nu(n,r):!0}function Fy(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&ix.enqueueReplaceState(t,t.state,null)}function qi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=ut({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function o2(e){Yf(e)}function n2(e){console.error(e)}function r2(e){Yf(e)}function op(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Uy(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function sx(e,t,a){return a=Gr(a),a.tag=3,a.payload={element:null},a.callback=function(){op(e,t)},a}function i2(e){return e=Gr(e),e.tag=3,e}function s2(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){Uy(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Uy(t,a,o),typeof n!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var s=o.stack;this.componentDidCatch(o.value,{componentStack:s!==null?s:""})})}function iE(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Il(t,a,n,!0),a=wo.current,a!==null){switch(a.tag){case 31:case 13:return Bo===null?lp():a.alternate===null&&Lt===0&&(Lt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Qf?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Lh(e,o,n)),!1;case 22:return a.flags|=65536,o===Qf?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Lh(e,o,n)),!1}throw Error(W(435,a.tag))}return Lh(e,o,n),lp(),!1}if(Pe)return t=wo.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Yh&&(e=Error(W(422),{cause:o}),iu(Oo(e,a)))):(o!==Yh&&(t=Error(W(423),{cause:o}),iu(Oo(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Oo(o,a),n=sx(e.stateNode,o,n),fh(e,n),Lt!==4&&(Lt=2)),!1;var r=Error(W(520),{cause:o});if(r=Oo(r,a),Qd===null?Qd=[r]:Qd.push(r),Lt!==4&&(Lt=2),t===null)return!0;o=Oo(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=sx(a.stateNode,o,e),fh(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Xr===null||!Xr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=i2(n),s2(n,e,a,o),fh(a,n),!1}a=a.return}while(a!==null);return!1}var sb=Error(W(461)),Ht=!1;function da(e,t,a,o){t.child=e===null?v1(t,null,a,o):Fi(t,e.child,a,o)}function qy(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var s in o)s!=="ref"&&(i[s]=o[s])}else i=o;return Bi(t),o=Kx(e,t,a,i,r,n),s=Zx(),e!==null&&!Ht?($x(e,t,n),ir(e,t,n)):(Pe&&s&&Ux(t),t.flags|=1,da(e,t,o,n),t.child)}function Vy(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Fx(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,l2(e,t,r,o,n)):(e=Af(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!lb(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:nu,a(i,o)&&e.ref===t.ref)return ir(e,t,n)}return t.flags|=1,e=er(r,o),e.ref=t.ref,e.return=t,t.child=e}function l2(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(nu(r,o)&&e.ref===t.ref)if(Ht=!1,t.pendingProps=o=r,lb(e,n))(e.flags&131072)!==0&&(Ht=!0);else return t.lanes=e.lanes,ir(e,t,n)}return lx(e,t,a,o,n)}function d2(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return Gy(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Df(t,r!==null?r.cachePool:null),r!==null?Ay(t,r):tx(),k1(t);else return o=t.lanes=536870912,Gy(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Df(t,r.cachePool),Ay(t,r),Pr(t),t.memoizedState=null):(e!==null&&Df(t,null),tx(),Pr(t));return da(e,t,n,a),t.child}function Fd(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gy(e,t,a,o,n){var r=Gx();return r=r===null?null:{parent:Ot._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Df(t,null),tx(),k1(t),e!==null&&Il(e,t,o,!0),t.childLanes=n,null}function zf(e,t){return t=np({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jy(e,t,a){return Fi(t,e.child,null,a),e=zf(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function sE(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(o.mode==="hidden")return e=zf(t,o),t.lanes=536870912,Fd(null,e);if(ax(t),(e=dt)?(e=tC(e,Ho),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$r!==null?{id:bn,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},a=m1(e),a.return=t,t.child=a,ca=t,dt=null)):e=null,e===null)throw Qr(t);return t.lanes=536870912,null}return zf(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(ax(t),n)if(t.flags&256)t.flags&=-257,t=jy(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(W(558));else if(Ht||Il(e,t,a,!1),n=(a&e.childLanes)!==0,Ht||n){if(o=Qe,o!==null&&(i=Fv(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Xi(e,i),Za(o,e,i),sb;lp(),t=jy(e,t,a)}else e=r.treeContext,dt=Fo(i.nextSibling),ca=t,Pe=!0,Vr=null,Ho=!1,e!==null&&h1(t,e),t=zf(t,o),t.flags|=4096;return t}return e=er(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Of(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(W(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function lx(e,t,a,o,n){return Bi(t),a=Kx(e,t,a,o,void 0,n),o=Zx(),e!==null&&!Ht?($x(e,t,n),ir(e,t,n)):(Pe&&o&&Ux(t),t.flags|=1,da(e,t,a,n),t.child)}function Xy(e,t,a,o,n,r){return Bi(t),t.updateQueue=null,a=_1(t,o,a,n),L1(e),o=Zx(),e!==null&&!Ht?($x(e,t,r),ir(e,t,r)):(Pe&&o&&Ux(t),t.flags|=1,da(e,t,a,r),t.child)}function Wy(e,t,a,o,n){if(Bi(t),t.stateNode===null){var r=ol,i=a.contextType;typeof i=="object"&&i!==null&&(r=fa(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ix,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Xx(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?fa(i):ol,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(mh(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&ix.enqueueReplaceState(r,r.state,null),Yd(t,o,r,n),Wd(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,l=qi(a,s);r.props=l;var u=r.context,d=a.contextType;i=ol,typeof d=="object"&&d!==null&&(i=fa(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||u!==i)&&Fy(t,r,o,i),Ar=!1;var c=t.memoizedState;r.state=c,Yd(t,o,r,n),Wd(),u=t.memoizedState,s||c!==u||Ar?(typeof f=="function"&&(mh(t,a,f,o),u=t.memoizedState),(l=Ar||By(t,a,l,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Jh(e,t),i=t.memoizedProps,d=qi(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,l=ol,typeof u=="object"&&u!==null&&(l=fa(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==l)&&Fy(t,r,o,l),Ar=!1,c=t.memoizedState,r.state=c,Yd(t,o,r,n),Wd();var p=t.memoizedState;i!==f||c!==p||Ar||e!==null&&e.dependencies!==null&&$f(e.dependencies)?(typeof s=="function"&&(mh(t,a,s,o),p=t.memoizedState),(d=Ar||By(t,a,d,o,c,p,l)||e!==null&&e.dependencies!==null&&$f(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=l,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Of(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Fi(t,e.child,null,n),t.child=Fi(t,null,a,n)):da(e,t,a,n),t.memoizedState=r.state,e=t.child):e=ir(e,t,n),e}function Yy(e,t,a,o){return Hi(),t.flags|=256,da(e,t,a,o),t.child}var gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hh(e){return{baseLanes:e,cachePool:b1()}}function xh(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=po),e}function u2(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(n?Rr(t):Pr(t),(e=dt)?(e=tC(e,Ho),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$r!==null?{id:bn,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},a=m1(e),a.return=t,t.child=a,ca=t,dt=null)):e=null,e===null)throw Qr(t);return Cx(e)?t.lanes=32:t.lanes=536870912,null}var s=o.children;return o=o.fallback,n?(Pr(t),n=t.mode,s=np({mode:"hidden",children:s},n),o=Ri(o,n,a,null),s.return=t,o.return=t,s.sibling=o,t.child=s,o=t.child,o.memoizedState=hh(a),o.childLanes=xh(e,i,a),t.memoizedState=gh,Fd(null,o)):(Rr(t),dx(t,s))}var l=e.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(r)t.flags&256?(Rr(t),t.flags&=-257,t=bh(e,t,a)):t.memoizedState!==null?(Pr(t),t.child=e.child,t.flags|=128,t=null):(Pr(t),s=o.fallback,n=t.mode,o=np({mode:"visible",children:o.children},n),s=Ri(s,n,a,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,Fi(t,e.child,null,a),o=t.child,o.memoizedState=hh(a),o.childLanes=xh(e,i,a),t.memoizedState=gh,t=Fd(null,o));else if(Rr(t),Cx(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(W(419)),o.stack="",o.digest=i,iu({value:o,source:null,stack:null}),t=bh(e,t,a)}else if(Ht||Il(e,t,a,!1),i=(a&e.childLanes)!==0,Ht||i){if(i=Qe,i!==null&&(o=Fv(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Xi(e,o),Za(i,e,o),sb;vx(s)||lp(),t=bh(e,t,a)}else vx(s)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,dt=Fo(s.nextSibling),ca=t,Pe=!0,Vr=null,Ho=!1,e!==null&&h1(t,e),t=dx(t,o.children),t.flags|=4096);return t}return n?(Pr(t),s=o.fallback,n=t.mode,l=e.child,u=l.sibling,o=er(l,{mode:"hidden",children:o.children}),o.subtreeFlags=l.subtreeFlags&65011712,u!==null?s=er(u,s):(s=Ri(s,n,a,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,Fd(null,o),o=t.child,s=e.child.memoizedState,s===null?s=hh(a):(n=s.cachePool,n!==null?(l=Ot._currentValue,n=n.parent!==l?{parent:l,pool:l}:n):n=b1(),s={baseLanes:s.baseLanes|a,cachePool:n}),o.memoizedState=s,o.childLanes=xh(e,i,a),t.memoizedState=gh,Fd(e.child,o)):(Rr(t),a=e.child,e=a.sibling,a=er(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function dx(e,t){return t=np({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function np(e,t){return e=fo(22,e,null,t),e.lanes=0,e}function bh(e,t,a){return Fi(t,e.child,null,a),e=dx(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ky(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Zh(e.return,t,a)}function wh(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function c2(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=Tt.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,at(Tt,i),da(e,t,o,a),o=Pe?ru:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ky(e,a,t);else if(e.tag===19)Ky(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ep(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),wh(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ep(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}wh(t,!0,a,null,r,o);break;case"together":wh(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ir(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ei|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Il(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,a=er(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=er(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function lb(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$f(e)))}function lE(e,t,a){switch(t.tag){case 3:Gf(t,t.stateNode.containerInfo),Dr(t,Ot,e.memoizedState.cache),Hi();break;case 27:case 5:Oh(t);break;case 4:Gf(t,t.stateNode.containerInfo);break;case 10:Dr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ax(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Rr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?u2(e,t,a):(Rr(t),e=ir(e,t,a),e!==null?e.sibling:null);Rr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Il(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return c2(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),at(Tt,Tt.current),o)break;return null;case 22:return t.lanes=0,d2(e,t,a,t.pendingProps);case 24:Dr(t,Ot,e.memoizedState.cache)}return ir(e,t,a)}function f2(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ht=!0;else{if(!lb(e,a)&&(t.flags&128)===0)return Ht=!1,lE(e,t,a);Ht=(e.flags&131072)!==0}else Ht=!1,Pe&&(t.flags&1048576)!==0&&g1(t,ru,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ti(t.elementType),t.type=e,typeof e=="function")Fx(e)?(o=qi(e,o),t.tag=1,t=Wy(null,t,e,o,a)):(t.tag=0,t=lx(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===_x){t.tag=11,t=qy(null,t,e,o,a);break e}else if(n===Ix){t.tag=14,t=Vy(null,t,e,o,a);break e}}throw t=Ph(e)||e,Error(W(306,t,""))}}return t;case 0:return lx(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=qi(o,t.pendingProps),Wy(e,t,o,n,a);case 3:e:{if(Gf(t,t.stateNode.containerInfo),e===null)throw Error(W(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Jh(e,t),Yd(t,o,null,a);var i=t.memoizedState;if(o=i.cache,Dr(t,Ot,o),o!==r.cache&&$h(t,[Ot],a,!0),Wd(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Yy(e,t,o,a);break e}else if(o!==n){n=Oo(Error(W(424)),t),iu(n),t=Yy(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,dt=Fo(e.firstChild),ca=t,Pe=!0,Vr=null,Ho=!0,a=v1(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hi(),o===n){t=ir(e,t,a);break e}da(e,t,o,a)}t=t.child}return t;case 26:return Of(e,t),e===null?(a=xv(t.type,null,t.pendingProps,null))?t.memoizedState=a:Pe||(a=t.type,e=t.pendingProps,o=fp(qr.current).createElement(a),o[ua]=t,o[$a]=e,pa(o,a,e),aa(o),t.stateNode=o):t.memoizedState=xv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oh(t),e===null&&Pe&&(o=t.stateNode=aC(t.type,t.pendingProps,qr.current),ca=t,Ho=!0,n=dt,ai(t.type)?(Sx=n,dt=Fo(o.firstChild)):dt=n),da(e,t,t.pendingProps.children,a),Of(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((n=o=dt)&&(o=zE(o,t.type,t.pendingProps,Ho),o!==null?(t.stateNode=o,ca=t,dt=Fo(o.firstChild),Ho=!1,n=!0):n=!1),n||Qr(t)),Oh(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,wx(n,r)?o=null:i!==null&&wx(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Kx(e,t,J4,null,null,a),fu._currentValue=n),Of(e,t),da(e,t,o,a),t.child;case 6:return e===null&&Pe&&((e=a=dt)&&(a=OE(a,t.pendingProps,Ho),a!==null?(t.stateNode=a,ca=t,dt=null,e=!0):e=!1),e||Qr(t)),null;case 13:return u2(e,t,a);case 4:return Gf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Fi(t,null,o,a):da(e,t,o,a),t.child;case 11:return qy(e,t,t.type,t.pendingProps,a);case 7:return da(e,t,t.pendingProps,a),t.child;case 8:return da(e,t,t.pendingProps.children,a),t.child;case 12:return da(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Dr(t,t.type,o.value),da(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Bi(t),n=fa(n),o=o(n),t.flags|=1,da(e,t,o,a),t.child;case 14:return Vy(e,t,t.type,t.pendingProps,a);case 15:return l2(e,t,t.type,t.pendingProps,a);case 19:return c2(e,t,a);case 31:return sE(e,t,a);case 22:return d2(e,t,a,t.pendingProps);case 24:return Bi(t),o=fa(Ot),e===null?(n=Gx(),n===null&&(n=Qe,r=Vx(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Xx(t),Dr(t,Ot,n)):((e.lanes&a)!==0&&(Jh(e,t),Yd(t,null,null,a),Wd()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Dr(t,Ot,o)):(o=r.cache,Dr(t,Ot,o),o!==n.cache&&$h(t,[Ot],a,!0))),da(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(W(156,t.tag))}function jn(e){e.flags|=4}function yh(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(z2())e.flags|=8192;else throw zi=Qf,jx}else e.flags&=-16777217}function Zy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rC(t))if(z2())e.flags|=8192;else throw zi=Qf,jx}function vf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ov():536870912,e.lanes|=t,yl|=t)}function Dd(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function dE(e,t,a){var o=t.pendingProps;switch(qx(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),tr(Ot),ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(t)?jn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ch())),lt(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(jn(t),r!==null?(lt(t),Zy(t,r)):(lt(t),yh(t,n,null,o,a))):r?r!==e.memoizedState?(jn(t),lt(t),Zy(t,r)):(lt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&jn(t),lt(t),yh(t,n,e,o,a)),null;case 27:if(jf(t),a=qr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&jn(t);else{if(!o){if(t.stateNode===null)throw Error(W(166));return lt(t),null}e=vn.current,js(t)?Ly(t,e):(e=aC(n,o,a),t.stateNode=e,jn(t))}return lt(t),null;case 5:if(jf(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&jn(t);else{if(!o){if(t.stateNode===null)throw Error(W(166));return lt(t),null}if(r=vn.current,js(t))Ly(t,r);else{var i=fp(qr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[ua]=t,r[$a]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(pa(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&jn(t)}}return lt(t),yh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&jn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(W(166));if(e=qr.current,js(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=ca,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[ua]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Q2(e.nodeValue,a)),e||Qr(t,!0)}else e=fp(e).createTextNode(o),e[ua]=t,t.stateNode=e}return lt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=js(t),a!==null){if(e===null){if(!o)throw Error(W(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(557));e[ua]=t}else Hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),e=!1}else a=ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if((t.flags&128)!==0)throw Error(W(558))}return lt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=js(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(W(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(W(317));n[ua]=t}else Hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),n=!1}else n=ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(co(t),t):(co(t),null)}return co(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),vf(t,t.updateQueue),lt(t),null);case 4:return ml(),e===null&&gb(t.stateNode.containerInfo),lt(t),null;case 10:return tr(t.type),lt(t),null;case 19:if(oa(Tt),o=t.memoizedState,o===null)return lt(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)Dd(o,!1);else{if(Lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=ep(e),r!==null){for(t.flags|=128,Dd(o,!1),e=r.updateQueue,t.updateQueue=e,vf(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)p1(a,e),a=a.sibling;return at(Tt,Tt.current&1|2),Pe&&Kn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&mo()>ip&&(t.flags|=128,n=!0,Dd(o,!1),t.lanes=4194304)}else{if(!n)if(e=ep(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,vf(t,e),Dd(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Pe)return lt(t),null}else 2*mo()-o.renderingStartTime>ip&&a!==536870912&&(t.flags|=128,n=!0,Dd(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=mo(),e.sibling=null,a=Tt.current,at(Tt,n?a&1|2:a&1),Pe&&Kn(t,o.treeForkCount),e):(lt(t),null);case 22:case 23:return co(t),Wx(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),a=t.updateQueue,a!==null&&vf(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&oa(Pi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tr(Ot),lt(t),null;case 25:return null;case 30:return null}throw Error(W(156,t.tag))}function uE(e,t){switch(qx(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(Ot),ml(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jf(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(W(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oa(Tt),null;case 4:return ml(),null;case 10:return tr(t.type),null;case 22:case 23:return co(t),Wx(),e!==null&&oa(Pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tr(Ot),null;case 25:return null;default:return null}}function p2(e,t){switch(qx(t),t.tag){case 3:tr(Ot),ml();break;case 26:case 27:case 5:jf(t);break;case 4:ml();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:oa(Tt);break;case 10:tr(t.type);break;case 22:case 23:co(t),Wx(),e!==null&&oa(Pi);break;case 24:tr(Ot)}}function Su(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(s){Ke(t,t.return,s)}}function Jr(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=t;var l=a,u=s;try{u()}catch(d){Ke(n,l,d)}}}o=o.next}while(o!==r)}}catch(d){Ke(t,t.return,d)}}function m2(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{S1(t,a)}catch(o){Ke(e,e.return,o)}}}function g2(e,t,a){a.props=qi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ke(e,t,o)}}function Zd(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ke(e,t,n)}}function yn(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ke(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ke(e,t,n)}else a.current=null}function h2(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ke(e,e.return,n)}}function vh(e,t,a){try{var o=e.stateNode;EE(o,e.type,a,t),o[$a]=t}catch(n){Ke(e,e.return,n)}}function x2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ai(e.type)||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||x2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ai(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ux(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qn));else if(o!==4&&(o===27&&ai(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ux(e,t,a),e=e.sibling;e!==null;)ux(e,t,a),e=e.sibling}function rp(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&ai(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(rp(e,t,a),e=e.sibling;e!==null;)rp(e,t,a),e=e.sibling}function b2(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);pa(t,o,a),t[ua]=e,t[$a]=a}catch(r){Ke(e,e.return,r)}}var Zn=!1,zt=!1,Sh=!1,$y=typeof WeakSet=="function"?WeakSet:Set,ta=null;function cE(e,t){if(e=e.containerInfo,xx=hp,e=r1(e),Ox(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,s=-1,l=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(s=i+n),f!==r||o!==0&&f.nodeType!==3||(l=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(s=i),c===r&&++d===o&&(l=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=s===-1||l===-1?null:{start:s,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(bx={focusedElem:e,selectionRange:a},hp=!1,ta=t;ta!==null;)if(t=ta,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ta=e;else for(;ta!==null;){switch(t=ta,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=qi(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){Ke(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yx(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yx(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(W(163))}if(e=t.sibling,e!==null){e.return=t.return,ta=e;break}ta=t.return}}function w2(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(e,a),o&4&&Su(5,a);break;case 1:if(Wn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){Ke(a,a.return,i)}else{var n=qi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Ke(a,a.return,i)}}o&64&&m2(a),o&512&&Zd(a,a.return);break;case 3:if(Wn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{S1(e,t)}catch(i){Ke(a,a.return,i)}}break;case 27:t===null&&o&4&&b2(a);case 26:case 5:Wn(e,a),t===null&&o&4&&h2(a),o&512&&Zd(a,a.return);break;case 12:Wn(e,a);break;case 31:Wn(e,a),o&4&&C2(e,a);break;case 13:Wn(e,a),o&4&&S2(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yE.bind(null,a),HE(e,a))));break;case 22:if(o=a.memoizedState!==null||Zn,!o){t=t!==null&&t.memoizedState!==null||zt,n=Zn;var r=zt;Zn=o,(zt=t)&&!r?Yn(e,a,(a.subtreeFlags&8772)!==0):Wn(e,a),Zn=n,zt=r}break;case 30:break;default:Wn(e,a)}}function y2(e){var t=e.alternate;t!==null&&(e.alternate=null,y2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tx(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xt=null,Ya=!1;function Xn(e,t,a){for(a=a.child;a!==null;)v2(e,t,a),a=a.sibling}function v2(e,t,a){if(go&&typeof go.onCommitFiberUnmount=="function")try{go.onCommitFiberUnmount(hu,a)}catch{}switch(a.tag){case 26:zt||yn(a,t),Xn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:zt||yn(a,t);var o=xt,n=Ya;ai(a.type)&&(xt=a.stateNode,Ya=!1),Xn(e,t,a),eu(a.stateNode),xt=o,Ya=n;break;case 5:zt||yn(a,t);case 6:if(o=xt,n=Ya,xt=null,Xn(e,t,a),xt=o,Ya=n,xt!==null)if(Ya)try{(xt.nodeType===9?xt.body:xt.nodeName==="HTML"?xt.ownerDocument.body:xt).removeChild(a.stateNode)}catch(r){Ke(a,t,r)}else try{xt.removeChild(a.stateNode)}catch(r){Ke(a,t,r)}break;case 18:xt!==null&&(Ya?(e=xt,fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),kl(e)):fv(xt,a.stateNode));break;case 4:o=xt,n=Ya,xt=a.stateNode.containerInfo,Ya=!0,Xn(e,t,a),xt=o,Ya=n;break;case 0:case 11:case 14:case 15:Jr(2,a,t),zt||Jr(4,a,t),Xn(e,t,a);break;case 1:zt||(yn(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&g2(a,t,o)),Xn(e,t,a);break;case 21:Xn(e,t,a);break;case 22:zt=(o=zt)||a.memoizedState!==null,Xn(e,t,a),zt=o;break;default:Xn(e,t,a)}}function C2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kl(e)}catch(a){Ke(t,t.return,a)}}}function S2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(a){Ke(t,t.return,a)}}function fE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $y),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $y),t;default:throw Error(W(435,e.tag))}}function Cf(e,t){var a=fE(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=vE.bind(null,e,o);o.then(n,n)}})}function Xa(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 27:if(ai(s.type)){xt=s.stateNode,Ya=!1;break e}break;case 5:xt=s.stateNode,Ya=!1;break e;case 3:case 4:xt=s.stateNode.containerInfo,Ya=!0;break e}s=s.return}if(xt===null)throw Error(W(160));v2(r,i,n),xt=null,Ya=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)k2(t,e),t=t.sibling}var Ko=null;function k2(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xa(t,e),Wa(e),o&4&&(Jr(3,e,e.return),Su(3,e),Jr(5,e,e.return));break;case 1:Xa(t,e),Wa(e),o&512&&(zt||a===null||yn(a,a.return)),o&64&&Zn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Ko;if(Xa(t,e),Wa(e),o&512&&(zt||a===null||yn(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[wu]||r[ua]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),pa(r,o,a),r[ua]=e,aa(r),o=r;break e;case"link":var i=wv("link","href",n).get(o+(a.href||""));if(i){for(var s=0;s<i.length;s++)if(r=i[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(s,1);break t}}r=n.createElement(o),pa(r,o,a),n.head.appendChild(r);break;case"meta":if(i=wv("meta","content",n).get(o+(a.content||""))){for(s=0;s<i.length;s++)if(r=i[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(s,1);break t}}r=n.createElement(o),pa(r,o,a),n.head.appendChild(r);break;default:throw Error(W(468,o))}r[ua]=e,aa(r),o=r}e.stateNode=o}else yv(n,e.type,e.stateNode);else e.stateNode=bv(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?yv(n,e.type,e.stateNode):bv(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vh(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xa(t,e),Wa(e),o&512&&(zt||a===null||yn(a,a.return)),a!==null&&o&4&&vh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xa(t,e),Wa(e),o&512&&(zt||a===null||yn(a,a.return)),e.flags&32){n=e.stateNode;try{hl(n,"")}catch(g){Ke(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,vh(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Sh=!0);break;case 6:if(Xa(t,e),Wa(e),o&4){if(e.stateNode===null)throw Error(W(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ke(e,e.return,g)}}break;case 3:if(Ff=null,n=Ko,Ko=pp(t.containerInfo),Xa(t,e),Ko=n,Wa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{kl(t.containerInfo)}catch(g){Ke(e,e.return,g)}Sh&&(Sh=!1,L2(e));break;case 4:o=Ko,Ko=pp(e.stateNode.containerInfo),Xa(t,e),Wa(e),Ko=o;break;case 12:Xa(t,e),Wa(e);break;case 31:Xa(t,e),Wa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 13:Xa(t,e),Wa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Np=mo()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 22:n=e.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=Zn,d=zt;if(Zn=u||n,zt=d||l,Xa(t,e),zt=d,Zn=u,Wa(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||l||Zn||zt||Ai(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){l=a=t;try{if(r=l.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=l.stateNode;var f=l.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;s.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){Ke(l,l.return,g)}}}else if(t.tag===6){if(a===null){l=t;try{l.stateNode.nodeValue=n?"":l.memoizedProps}catch(g){Ke(l,l.return,g)}}}else if(t.tag===18){if(a===null){l=t;try{var p=l.stateNode;n?pv(p,!0):pv(l.stateNode,!1)}catch(g){Ke(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Cf(e,a))));break;case 19:Xa(t,e),Wa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 30:break;case 21:break;default:Xa(t,e),Wa(e)}}function Wa(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(x2(o)){a=o;break}o=o.return}if(a==null)throw Error(W(160));switch(a.tag){case 27:var n=a.stateNode,r=Ch(e);rp(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(hl(i,""),a.flags&=-33);var s=Ch(e);rp(e,s,i);break;case 3:case 4:var l=a.stateNode.containerInfo,u=Ch(e);ux(e,u,l);break;default:throw Error(W(161))}}catch(d){Ke(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;L2(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)w2(e,t.alternate,t),t=t.sibling}function Ai(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jr(4,t,t.return),Ai(t);break;case 1:yn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&g2(t,t.return,a),Ai(t);break;case 27:eu(t.stateNode);case 26:case 5:yn(t,t.return),Ai(t);break;case 22:t.memoizedState===null&&Ai(t);break;case 30:Ai(t);break;default:Ai(t)}e=e.sibling}}function Yn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Yn(n,r,a),Su(4,r);break;case 1:if(Yn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ke(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var s=o.stateNode;try{var l=n.shared.hiddenCallbacks;if(l!==null)for(n.shared.hiddenCallbacks=null,n=0;n<l.length;n++)C1(l[n],s)}catch(u){Ke(o,o.return,u)}}a&&i&64&&m2(r),Zd(r,r.return);break;case 27:b2(r);case 26:case 5:Yn(n,r,a),a&&o===null&&i&4&&h2(r),Zd(r,r.return);break;case 12:Yn(n,r,a);break;case 31:Yn(n,r,a),a&&i&4&&C2(n,r);break;case 13:Yn(n,r,a),a&&i&4&&S2(n,r);break;case 22:r.memoizedState===null&&Yn(n,r,a),Zd(r,r.return);break;case 30:break;default:Yn(n,r,a)}t=t.sibling}}function db(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vu(a))}function ub(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vu(e))}function Yo(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_2(e,t,a,o),t=t.sibling}function _2(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Yo(e,t,a,o),n&2048&&Su(9,t);break;case 1:Yo(e,t,a,o);break;case 3:Yo(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vu(e)));break;case 12:if(n&2048){Yo(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,s=r.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ke(t,t.return,l)}}else Yo(e,t,a,o);break;case 31:Yo(e,t,a,o);break;case 13:Yo(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Yo(e,t,a,o):$d(e,t):r._visibility&2?Yo(e,t,a,o):(r._visibility|=2,Ws(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&db(i,t);break;case 24:Yo(e,t,a,o),n&2048&&ub(t.alternate,t);break;default:Yo(e,t,a,o)}}function Ws(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,s=a,l=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ws(r,i,s,l,n),Su(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?Ws(r,i,s,l,n):$d(r,i):(d._visibility|=2,Ws(r,i,s,l,n)),n&&u&2048&&db(i.alternate,i);break;case 24:Ws(r,i,s,l,n),n&&u&2048&&ub(i.alternate,i);break;default:Ws(r,i,s,l,n)}t=t.sibling}}function $d(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:$d(a,o),n&2048&&db(o.alternate,o);break;case 24:$d(a,o),n&2048&&ub(o.alternate,o);break;default:$d(a,o)}t=t.sibling}}var Ud=8192;function Xs(e,t,a){if(e.subtreeFlags&Ud)for(e=e.child;e!==null;)I2(e,t,a),e=e.sibling}function I2(e,t,a){switch(e.tag){case 26:Xs(e,t,a),e.flags&Ud&&e.memoizedState!==null&&ZE(a,Ko,e.memoizedState,e.memoizedProps);break;case 5:Xs(e,t,a);break;case 3:case 4:var o=Ko;Ko=pp(e.stateNode.containerInfo),Xs(e,t,a),Ko=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ud,Ud=16777216,Xs(e,t,a),Ud=o):Xs(e,t,a));break;default:Xs(e,t,a)}}function M2(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ta=o,E2(o,e)}M2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)N2(e),e=e.sibling}function N2(e){switch(e.tag){case 0:case 11:case 15:Rd(e),e.flags&2048&&Jr(9,e,e.return);break;case 3:Rd(e);break;case 12:Rd(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hf(e)):Rd(e);break;default:Rd(e)}}function Hf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ta=o,E2(o,e)}M2(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jr(8,t,t.return),Hf(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Hf(t));break;default:Hf(t)}e=e.sibling}}function E2(e,t){for(;ta!==null;){var a=ta;switch(a.tag){case 0:case 11:case 15:Jr(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vu(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ta=o;else e:for(a=e;ta!==null;){o=ta;var n=o.sibling,r=o.return;if(y2(o),o===a){ta=null;break e}if(n!==null){n.return=r,ta=n;break e}ta=r}}}var pE={getCacheForType:function(e){var t=fa(Ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return fa(Ot).controller.signal}},mE=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Qe=null,Te=null,Re=0,Ye=0,uo=null,Br=!1,Nl=!1,cb=!1,sr=0,Lt=0,ei=0,Oi=0,fb=0,po=0,yl=0,Qd=null,Ka=null,cx=!1,Np=0,T2=0,ip=1/0,sp=null,Xr=null,Gt=0,Wr=null,vl=null,ar=0,fx=0,px=null,A2=null,Jd=0,mx=null;function xo(){return(Ve&2)!==0&&Re!==0?Re&-Re:me.T!==null?mb():Uv()}function D2(){if(po===0)if((Re&536870912)===0||Pe){var e=ff;ff<<=1,(ff&3932160)===0&&(ff=262144),po=e}else po=536870912;return e=wo.current,e!==null&&(e.flags|=32),po}function Za(e,t,a){(e===Qe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),Fr(e,Re,po,!1)),bu(e,a),((Ve&2)===0||e!==Qe)&&(e===Qe&&((Ve&2)===0&&(Oi|=a),Lt===4&&Fr(e,Re,po,!1)),Sn(e))}function R2(e,t,a){if((Ve&6)!==0)throw Error(W(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||xu(e,t),n=o?xE(e,t):kh(e,t,!0),r=o;do{if(n===0){Nl&&!o&&Fr(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!gE(a)){n=kh(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var s=e;n=Qd;var l=s.current.memoizedState.isDehydrated;if(l&&(Cl(s,i).flags|=256),i=kh(s,i,!1),i!==2){if(cb&&!l){s.errorRecoveryDisabledLanes|=r,Oi|=r,n=4;break e}r=Ka,Ka=n,r!==null&&(Ka===null?Ka=r:Ka.push.apply(Ka,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){Cl(e,0),Fr(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(W(345));case 4:if((t&4194048)!==t)break;case 6:Fr(o,t,po,!Br);break e;case 2:Ka=null;break;case 3:case 5:break;default:throw Error(W(329))}if((t&62914560)===t&&(n=Np+300-mo(),10<n)){if(Fr(o,t,po,!Br),bp(o,0,!0)!==0)break e;ar=t,o.timeoutHandle=eC(Qy.bind(null,o,a,Ka,sp,cx,t,po,Oi,yl,Br,r,"Throttled",-0,0),n);break e}Qy(o,a,Ka,sp,cx,t,po,Oi,yl,Br,r,null,-0,0)}}break}while(!0);Sn(e)}function Qy(e,t,a,o,n,r,i,s,l,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qn},I2(t,r,f);var g=(r&62914560)===r?Np-mo():(r&4194048)===r?T2-mo():0;if(g=$E(f,g),g!==null){ar=r,e.cancelPendingCommit=g(ev.bind(null,e,t,r,a,o,n,i,s,l,d,f,null,c,p)),Fr(e,r,i,!u);return}}ev(e,t,r,a,o,n,i,s,l)}function gE(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!bo(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t,a,o){t&=~fb,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-ho(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&Hv(e,a,t)}function Ep(){return(Ve&6)===0?(ku(0,!1),!1):!0}function pb(){if(Te!==null){if(Ye===0)var e=Te.return;else e=Te,Jn=Wi=null,Qx(e),cl=null,su=0,e=Te;for(;e!==null;)p2(e.alternate,e),e=e.return;Te=null}}function Cl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,DE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ar=0,pb(),Qe=e,Te=a=er(e.current,null),Re=t,Ye=0,uo=null,Br=!1,Nl=xu(e,t),cb=!1,yl=po=fb=Oi=ei=Lt=0,Ka=Qd=null,cx=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-ho(o),r=1<<n;t|=e[n],o&=~r}return sr=t,Cp(),a}function P2(e,t){ye=null,me.H=du,t===Ml||t===kp?(t=Ey(),Ye=3):t===jx?(t=Ey(),Ye=4):Ye=t===sb?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,uo=t,Te===null&&(Lt=1,op(e,Oo(t,e.current)))}function z2(){var e=wo.current;return e===null?!0:(Re&4194048)===Re?Bo===null:(Re&62914560)===Re||(Re&536870912)!==0?e===Bo:!1}function O2(){var e=me.H;return me.H=du,e===null?du:e}function H2(){var e=me.A;return me.A=pE,e}function lp(){Lt=4,Br||(Re&4194048)!==Re&&wo.current!==null||(Nl=!0),(ei&134217727)===0&&(Oi&134217727)===0||Qe===null||Fr(Qe,Re,po,!1)}function kh(e,t,a){var o=Ve;Ve|=2;var n=O2(),r=H2();(Qe!==e||Re!==t)&&(sp=null,Cl(e,t)),t=!1;var i=Lt;e:do try{if(Ye!==0&&Te!==null){var s=Te,l=uo;switch(Ye){case 8:pb(),i=6;break e;case 3:case 2:case 9:case 6:wo.current===null&&(t=!0);var u=Ye;if(Ye=0,uo=null,il(e,s,l,u),a&&Nl){i=0;break e}break;default:u=Ye,Ye=0,uo=null,il(e,s,l,u)}}hE(),i=Lt;break}catch(d){P2(e,d)}while(!0);return t&&e.shellSuspendCounter++,Jn=Wi=null,Ve=o,me.H=n,me.A=r,Te===null&&(Qe=null,Re=0,Cp()),i}function hE(){for(;Te!==null;)B2(Te)}function xE(e,t){var a=Ve;Ve|=2;var o=O2(),n=H2();Qe!==e||Re!==t?(sp=null,ip=mo()+500,Cl(e,t)):Nl=xu(e,t);e:do try{if(Ye!==0&&Te!==null){t=Te;var r=uo;t:switch(Ye){case 1:Ye=0,uo=null,il(e,t,r,1);break;case 2:case 9:if(Ny(r)){Ye=0,uo=null,Jy(t);break}t=function(){Ye!==2&&Ye!==9||Qe!==e||(Ye=7),Sn(e)},r.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Ny(r)?(Ye=0,uo=null,Jy(t)):(Ye=0,uo=null,il(e,t,r,7));break;case 5:var i=null;switch(Te.tag){case 26:i=Te.memoizedState;case 5:case 27:var s=Te;if(i?rC(i):s.stateNode.complete){Ye=0,uo=null;var l=s.sibling;if(l!==null)Te=l;else{var u=s.return;u!==null?(Te=u,Tp(u)):Te=null}break t}}Ye=0,uo=null,il(e,t,r,5);break;case 6:Ye=0,uo=null,il(e,t,r,6);break;case 8:pb(),Lt=6;break e;default:throw Error(W(462))}}bE();break}catch(d){P2(e,d)}while(!0);return Jn=Wi=null,me.H=o,me.A=n,Ve=a,Te!==null?0:(Qe=null,Re=0,Cp(),Lt)}function bE(){for(;Te!==null&&!U3();)B2(Te)}function B2(e){var t=f2(e.alternate,e,sr);e.memoizedProps=e.pendingProps,t===null?Tp(e):Te=t}function Jy(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Xy(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Xy(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Qx(t);default:p2(a,t),t=Te=p1(t,sr),t=f2(a,t,sr)}e.memoizedProps=e.pendingProps,t===null?Tp(e):Te=t}function il(e,t,a,o){Jn=Wi=null,Qx(t),cl=null,su=0;var n=t.return;try{if(iE(e,n,t,a,Re)){Lt=1,op(e,Oo(a,e.current)),Te=null;return}}catch(r){if(n!==null)throw Te=n,r;Lt=1,op(e,Oo(a,e.current)),Te=null;return}t.flags&32768?(Pe||o===1?e=!0:Nl||(Re&536870912)!==0?e=!1:(Br=e=!0,(o===2||o===9||o===3||o===6)&&(o=wo.current,o!==null&&o.tag===13&&(o.flags|=16384))),F2(t,e)):Tp(t)}function Tp(e){var t=e;do{if((t.flags&32768)!==0){F2(t,Br);return}e=t.return;var a=dE(t.alternate,t,sr);if(a!==null){Te=a;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Lt===0&&(Lt=5)}function F2(e,t){do{var a=uE(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);Lt=6,Te=null}function ev(e,t,a,o,n,r,i,s,l){e.cancelPendingCommit=null;do Ap();while(Gt!==0);if((Ve&6)!==0)throw Error(W(327));if(t!==null){if(t===e.current)throw Error(W(177));if(r=t.lanes|t.childLanes,r|=Hx,$3(e,a,r,i,s,l),e===Qe&&(Te=Qe=null,Re=0),vl=t,Wr=e,ar=a,fx=r,px=n,A2=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CE(Xf,function(){return j2(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=me.T,me.T=null,n=Ge.p,Ge.p=2,i=Ve,Ve|=4;try{cE(e,t,a)}finally{Ve=i,Ge.p=n,me.T=o}}Gt=1,U2(),q2(),V2()}}function U2(){if(Gt===1){Gt=0;var e=Wr,t=vl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=me.T,me.T=null;var o=Ge.p;Ge.p=2;var n=Ve;Ve|=4;try{k2(t,e);var r=bx,i=r1(e.containerInfo),s=r.focusedElem,l=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&n1(s.ownerDocument.documentElement,s)){if(l!==null&&Ox(s)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(d,s.value.length);else{var f=s.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=s.textContent.length,w=Math.min(l.start,g),y=l.end===void 0?w:Math.min(l.end,g);!p.extend&&w>y&&(i=y,y=w,w=i);var h=Cy(s,w),x=Cy(s,y);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),w>y?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=s;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<f.length;s++){var b=f[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}hp=!!xx,bx=xx=null}finally{Ve=n,Ge.p=o,me.T=a}}e.current=t,Gt=2}}function q2(){if(Gt===2){Gt=0;var e=Wr,t=vl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=me.T,me.T=null;var o=Ge.p;Ge.p=2;var n=Ve;Ve|=4;try{w2(e,t.alternate,t)}finally{Ve=n,Ge.p=o,me.T=a}}Gt=3}}function V2(){if(Gt===4||Gt===3){Gt=0,q3();var e=Wr,t=vl,a=ar,o=A2;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Gt=5:(Gt=0,vl=Wr=null,G2(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Xr=null),Ex(a),t=t.stateNode,go&&typeof go.onCommitFiberRoot=="function")try{go.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=me.T,n=Ge.p,Ge.p=2,me.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var s=o[i];r(s.value,{componentStack:s.stack})}}finally{me.T=t,Ge.p=n}}(ar&3)!==0&&Ap(),Sn(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===mx?Jd++:(Jd=0,mx=e):Jd=0,ku(0,!1)}}function G2(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vu(t)))}function Ap(){return U2(),q2(),V2(),j2()}function j2(){if(Gt!==5)return!1;var e=Wr,t=fx;fx=0;var a=Ex(ar),o=me.T,n=Ge.p;try{Ge.p=32>a?32:a,me.T=null,a=px,px=null;var r=Wr,i=ar;if(Gt=0,vl=Wr=null,ar=0,(Ve&6)!==0)throw Error(W(331));var s=Ve;if(Ve|=4,N2(r.current),_2(r,r.current,i,a),Ve=s,ku(0,!1),go&&typeof go.onPostCommitFiberRoot=="function")try{go.onPostCommitFiberRoot(hu,r)}catch{}return!0}finally{Ge.p=n,me.T=o,G2(e,t)}}function tv(e,t,a){t=Oo(a,t),t=sx(e.stateNode,t,2),e=jr(e,t,2),e!==null&&(bu(e,2),Sn(e))}function Ke(e,t,a){if(e.tag===3)tv(e,e,a);else for(;t!==null;){if(t.tag===3){tv(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xr===null||!Xr.has(o))){e=Oo(a,e),a=i2(2),o=jr(t,a,2),o!==null&&(s2(a,o,t,e),bu(o,2),Sn(o));break}}t=t.return}}function Lh(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new mE;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(cb=!0,n.add(a),e=wE.bind(null,e,t,a),t.then(e,e))}function wE(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Re&a)===a&&(Lt===4||Lt===3&&(Re&62914560)===Re&&300>mo()-Np?(Ve&2)===0&&Cl(e,0):fb|=a,yl===Re&&(yl=0)),Sn(e)}function X2(e,t){t===0&&(t=Ov()),e=Xi(e,t),e!==null&&(bu(e,t),Sn(e))}function yE(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),X2(e,a)}function vE(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(W(314))}o!==null&&o.delete(t),X2(e,a)}function CE(e,t){return Mx(e,t)}var dp=null,Ys=null,gx=!1,up=!1,_h=!1,Ur=0;function Sn(e){e!==Ys&&e.next===null&&(Ys===null?dp=Ys=e:Ys=Ys.next=e),up=!0,gx||(gx=!0,kE())}function ku(e,t){if(!_h&&up){_h=!0;do for(var a=!1,o=dp;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,s=o.pingedLanes;r=(1<<31-ho(42|e)+1)-1,r&=n&~(i&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,av(o,r))}else r=Re,r=bp(o,o===Qe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||xu(o,r)||(a=!0,av(o,r));o=o.next}while(a);_h=!1}}function SE(){W2()}function W2(){up=gx=!1;var e=0;Ur!==0&&AE()&&(e=Ur);for(var t=mo(),a=null,o=dp;o!==null;){var n=o.next,r=Y2(o,t);r===0?(o.next=null,a===null?dp=n:a.next=n,n===null&&(Ys=a)):(a=o,(e!==0||(r&3)!==0)&&(up=!0)),o=n}Gt!==0&&Gt!==5||ku(e,!1),Ur!==0&&(Ur=0)}function Y2(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-ho(r),s=1<<i,l=n[i];l===-1?((s&a)===0||(s&o)!==0)&&(n[i]=Z3(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}if(t=Qe,a=Re,a=bp(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&th(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xu(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&th(o),Ex(a)){case 2:case 8:a=Pv;break;case 32:a=Xf;break;case 268435456:a=zv;break;default:a=Xf}return o=K2.bind(null,e),a=Mx(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&th(o),e.callbackPriority=2,e.callbackNode=null,2}function K2(e,t){if(Gt!==0&&Gt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ap()&&e.callbackNode!==a)return null;var o=Re;return o=bp(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(R2(e,o,t),Y2(e,mo()),e.callbackNode!=null&&e.callbackNode===a?K2.bind(null,e):null)}function av(e,t){if(Ap())return null;R2(e,t,!0)}function kE(){RE(function(){(Ve&6)!==0?Mx(Rv,SE):W2()})}function mb(){if(Ur===0){var e=xl;e===0&&(e=cf,cf<<=1,(cf&261888)===0&&(cf=256)),Ur=e}return Ur}function ov(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Nf(""+e)}function nv(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function LE(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=ov((n[$a]||null).action),i=o.submitter;i&&(t=(t=i[$a]||null)?ov(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var s=new wp("action","action",null,o,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ur!==0){var l=i?nv(n,i):new FormData(n);rx(a,{pending:!0,data:l,method:n.method,action:r},null,l)}}else typeof r=="function"&&(s.preventDefault(),l=i?nv(n,i):new FormData(n),rx(a,{pending:!0,data:l,method:n.method,action:r},r,l))},currentTarget:n}]})}}for(Sf=0;Sf<Wh.length;Sf++)kf=Wh[Sf],rv=kf.toLowerCase(),iv=kf[0].toUpperCase()+kf.slice(1),Zo(rv,"on"+iv);var kf,rv,iv,Sf;Zo(s1,"onAnimationEnd");Zo(l1,"onAnimationIteration");Zo(d1,"onAnimationStart");Zo("dblclick","onDoubleClick");Zo("focusin","onFocus");Zo("focusout","onBlur");Zo(V4,"onTransitionRun");Zo(G4,"onTransitionStart");Zo(j4,"onTransitionCancel");Zo(u1,"onTransitionEnd");gl("onMouseEnter",["mouseout","mouseover"]);gl("onMouseLeave",["mouseout","mouseover"]);gl("onPointerEnter",["pointerout","pointerover"]);gl("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_E=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function Z2(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(d){Yf(d)}n.currentTarget=null,r=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(d){Yf(d)}n.currentTarget=null,r=l}}}}function Ee(e,t){var a=t[Bh];a===void 0&&(a=t[Bh]=new Set);var o=e+"__bubble";a.has(o)||($2(t,e,2,!1),a.add(o))}function Ih(e,t,a){var o=0;t&&(o|=4),$2(a,e,o,t)}var Lf="_reactListening"+Math.random().toString(36).slice(2);function gb(e){if(!e[Lf]){e[Lf]=!0,qv.forEach(function(a){a!=="selectionchange"&&(_E.has(a)||Ih(a,!1,e),Ih(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lf]||(t[Lf]=!0,Ih("selectionchange",!1,t))}}function $2(e,t,a,o){switch(uC(t)){case 2:var n=eT;break;case 8:n=tT;break;default:n=wb}a=n.bind(null,t,a,e),n=void 0,!Gh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Mh(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=$s(s),i===null)return;if(l=i.tag,l===5||l===6||l===26||l===27){o=r=i;continue e}s=s.parentNode}}o=o.return}Zv(function(){var u=r,d=Dx(a),f=[];e:{var c=c1.get(e);if(c!==void 0){var p=wp,g=e;switch(e){case"keypress":if(Tf(a)===0)break e;case"keydown":case"keyup":p=v4;break;case"focusin":g="focus",p=ih;break;case"focusout":g="blur",p=ih;break;case"beforeblur":case"afterblur":p=ih;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=py;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=d4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=k4;break;case s1:case l1:case d1:p=f4;break;case u1:p=_4;break;case"scroll":case"scrollend":p=s4;break;case"wheel":p=M4;break;case"copy":case"cut":case"paste":p=m4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gy;break;case"toggle":case"beforetoggle":p=E4}var w=(t&4)!==0,y=!w&&(e==="scroll"||e==="scrollend"),h=w?c!==null?c+"Capture":null:c;w=[];for(var x=u,m;x!==null;){var b=x;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||h===null||(b=au(x,h),b!=null&&w.push(cu(x,b,m))),y)break;x=x.return}0<w.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Vh&&(g=a.relatedTarget||a.fromElement)&&($s(g)||g[Ll]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?$s(g):null,g!==null&&(y=gu(g),w=g.tag,g!==y||w!==5&&w!==27&&w!==6)&&(g=null)):(p=null,g=u),p!==g)){if(w=py,b="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=gy,b="onPointerLeave",h="onPointerEnter",x="pointer"),y=p==null?c:Bd(p),m=g==null?c:Bd(g),c=new w(b,x+"leave",p,a,d),c.target=y,c.relatedTarget=m,b=null,$s(d)===u&&(w=new w(h,x+"enter",g,a,d),w.target=m,w.relatedTarget=y,b=w),y=b,p&&g)t:{for(w=IE,h=p,x=g,m=0,b=h;b;b=w(b))m++;b=0;for(var v=x;v;v=w(v))b++;for(;0<m-b;)h=w(h),m--;for(;0<b-m;)x=w(x),b--;for(;m--;){if(h===x||x!==null&&h===x.alternate){w=h;break t}h=w(h),x=w(x)}w=null}else w=null;p!==null&&sv(f,c,p,w,!1),g!==null&&y!==null&&sv(f,y,g,w,!0)}}e:{if(c=u?Bd(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=wy;else if(by(c))if(a1)C=F4;else{C=H4;var S=O4}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Ax(u.elementType)&&(C=wy):C=B4;if(C&&(C=C(e,u))){t1(f,C,a,d);break e}S&&S(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&qh(c,"number",c.value)}switch(S=u?Bd(u):window,e){case"focusin":(by(S)||S.contentEditable==="true")&&(el=S,jh=u,Gd=null);break;case"focusout":Gd=jh=el=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,Sy(f,a,d);break;case"selectionchange":if(q4)break;case"keydown":case"keyup":Sy(f,a,d)}var k;if(zx)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Js?Jv(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Qv&&a.locale!=="ko"&&(Js||_!=="onCompositionStart"?_==="onCompositionEnd"&&Js&&(k=$v()):(Hr=d,Rx="value"in Hr?Hr.value:Hr.textContent,Js=!0)),S=cp(u,_),0<S.length&&(_=new my(_,e,null,a,d),f.push({event:_,listeners:S}),k?_.data=k:(k=e1(a),k!==null&&(_.data=k)))),(k=A4?D4(e,a):R4(e,a))&&(_=cp(u,"onBeforeInput"),0<_.length&&(S=new my("onBeforeInput","beforeinput",null,a,d),f.push({event:S,listeners:_}),S.data=k)),LE(f,e,u,a,d)}Z2(f,t)})}function cu(e,t,a){return{instance:e,listener:t,currentTarget:a}}function cp(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=au(e,a),n!=null&&o.unshift(cu(e,n,r)),n=au(e,t),n!=null&&o.push(cu(e,n,r))),e.tag===3)return o;e=e.return}return[]}function IE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sv(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var s=a,l=s.alternate,u=s.stateNode;if(s=s.tag,l!==null&&l===o)break;s!==5&&s!==26&&s!==27||u===null||(l=u,n?(u=au(a,r),u!=null&&i.unshift(cu(a,u,l))):n||(u=au(a,r),u!=null&&i.push(cu(a,u,l)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var ME=/\r\n?/g,NE=/\u0000|\uFFFD/g;function lv(e){return(typeof e=="string"?e:""+e).replace(ME,`
`).replace(NE,"")}function Q2(e,t){return t=lv(t),lv(e)===t}function Ze(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||hl(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&hl(e,""+o);break;case"className":mf(e,"class",o);break;case"tabIndex":mf(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":mf(e,a,o);break;case"style":Kv(e,o,r);break;case"data":if(t!=="object"){mf(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Nf(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ze(e,t,"name",n.name,n,null),Ze(e,t,"formEncType",n.formEncType,n,null),Ze(e,t,"formMethod",n.formMethod,n,null),Ze(e,t,"formTarget",n.formTarget,n,null)):(Ze(e,t,"encType",n.encType,n,null),Ze(e,t,"method",n.method,n,null),Ze(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Nf(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qn);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(W(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(W(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Nf(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Mf(e,"popover",o);break;case"xlinkActuate":Gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Mf(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=r4.get(a)||a,Mf(e,a,o))}}function hx(e,t,a,o,n,r){switch(a){case"style":Kv(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(W(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(W(60));e.innerHTML=a}}break;case"children":typeof o=="string"?hl(e,o):(typeof o=="number"||typeof o=="bigint")&&hl(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[$a]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Mf(e,a,o)}}}function pa(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:Ze(e,t,r,i,a,null)}}n&&Ze(e,t,"srcSet",a.srcSet,a,null),o&&Ze(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var s=r=i=n=null,l=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(W(137,t));break;default:Ze(e,t,o,d,a,null)}}Xv(e,r,s,l,u,i,n,!1);return;case"select":Ee("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":o=s;default:Ze(e,t,n,s,a,null)}t=r,a=i,e.multiple=!!o,t!=null?ll(e,!!o,t,!1):a!=null&&ll(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":o=s;break;case"defaultValue":n=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(W(91));break;default:Ze(e,t,i,s,a,null)}Yv(e,o,n,r);return;case"option":for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null)&&(l==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ze(e,t,l,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<uu.length;o++)Ee(uu[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:Ze(e,t,u,o,a,null)}return;default:if(Ax(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&hx(e,t,d,o,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null&&Ze(e,t,s,o,a,null))}function EE(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,s=null,l=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:o.hasOwnProperty(p)||Ze(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(W(137,t));break;default:p!==f&&Ze(e,t,c,p,o,f)}}Uh(e,i,s,l,u,d,r,n);return;case"select":p=i=s=c=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:o.hasOwnProperty(r)||Ze(e,t,r,null,o,l)}for(n in o)if(r=o[n],l=a[n],o.hasOwnProperty(n)&&(r!=null||l!=null))switch(n){case"value":c=r;break;case"defaultValue":s=r;break;case"multiple":i=r;default:r!==l&&Ze(e,t,n,r,o,l)}t=s,a=i,o=p,c!=null?ll(e,!!a,c,!1):!!o!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!o.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ze(e,t,s,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(W(91));break;default:n!==r&&Ze(e,t,i,n,o,r)}Wv(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ze(e,t,g,null,o,c));for(l in o)c=o[l],p=a[l],o.hasOwnProperty(l)&&c!==p&&(c!=null||p!=null)&&(l==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Ze(e,t,l,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&Ze(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(W(137,t));break;default:Ze(e,t,u,c,o,p)}return;default:if(Ax(t)){for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!==void 0&&!o.hasOwnProperty(y)&&hx(e,t,y,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||hx(e,t,d,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&Ze(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Ze(e,t,f,c,o,p)}function dv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,s=n.duration;if(r&&s&&dv(i)){for(i=0,s=n.responseEnd,o+=1;o<a.length;o++){var l=a[o],u=l.startTime;if(u>s)break;var d=l.transferSize,f=l.initiatorType;d&&dv(f)&&(l=l.responseEnd,i+=d*(l<s?1:(s-u)/(l-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xx=null,bx=null;function fp(e){return e.nodeType===9?e:e.ownerDocument}function uv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J2(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wx(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nh=null;function AE(){var e=window.event;return e&&e.type==="popstate"?e===Nh?!1:(Nh=e,!0):(Nh=null,!1)}var eC=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(e){return cv.resolve(null).then(e).catch(PE)}:eC;function PE(e){setTimeout(function(){throw e})}function ai(e){return e==="head"}function fv(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),kl(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")eu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,eu(a);for(var r=a.firstChild;r;){var i=r.nextSibling,s=r.nodeName;r[wu]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&eu(e.ownerDocument.body);a=n}while(a);kl(t)}function pv(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function yx(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yx(a),Tx(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zE(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Fo(e.nextSibling),e===null)break}return null}function OE(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Fo(e.nextSibling),e===null))return null;return e}function tC(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Fo(e.nextSibling),e===null))return null;return e}function vx(e){return e.data==="$?"||e.data==="$~"}function Cx(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HE(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Fo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sx=null;function mv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Fo(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function gv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function aC(e,t,a){switch(t=fp(a),e){case"html":if(e=t.documentElement,!e)throw Error(W(452));return e;case"head":if(e=t.head,!e)throw Error(W(453));return e;case"body":if(e=t.body,!e)throw Error(W(454));return e;default:throw Error(W(451))}}function eu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tx(e)}var Uo=new Map,hv=new Set;function pp(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var lr=Ge.d;Ge.d={f:BE,r:FE,D:UE,C:qE,L:VE,m:GE,X:XE,S:jE,M:WE};function BE(){var e=lr.f(),t=Ep();return e||t}function FE(e){var t=_l(e);t!==null&&t.tag===5&&t.type==="form"?K1(t):lr.r(e)}var El=typeof document>"u"?null:document;function oC(e,t,a){var o=El;if(o&&typeof t=="string"&&t){var n=zo(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),hv.has(n)||(hv.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),pa(t,"link",e),aa(t),o.head.appendChild(t)))}}function UE(e){lr.D(e),oC("dns-prefetch",e,null)}function qE(e,t){lr.C(e,t),oC("preconnect",e,t)}function VE(e,t,a){lr.L(e,t,a);var o=El;if(o&&e&&t){var n='link[rel="preload"][as="'+zo(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+zo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+zo(a.imageSizes)+'"]')):n+='[href="'+zo(e)+'"]';var r=n;switch(t){case"style":r=Sl(e);break;case"script":r=Tl(e)}Uo.has(r)||(e=ut({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Uo.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Lu(r))||t==="script"&&o.querySelector(_u(r))||(t=o.createElement("link"),pa(t,"link",e),aa(t),o.head.appendChild(t)))}}function GE(e,t){lr.m(e,t);var a=El;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zo(o)+'"][href="'+zo(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Tl(e)}if(!Uo.has(r)&&(e=ut({rel:"modulepreload",href:e},t),Uo.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_u(r)))return}o=a.createElement("link"),pa(o,"link",e),aa(o),a.head.appendChild(o)}}}function jE(e,t,a){lr.S(e,t,a);var o=El;if(o&&e){var n=sl(o).hoistableStyles,r=Sl(e);t=t||"default";var i=n.get(r);if(!i){var s={loading:0,preload:null};if(i=o.querySelector(Lu(r)))s.loading=5;else{e=ut({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Uo.get(r))&&hb(e,a);var l=i=o.createElement("link");aa(l),pa(l,"link",e),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Bf(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(r,i)}}}function XE(e,t){lr.X(e,t);var a=El;if(a&&e){var o=sl(a).hoistableScripts,n=Tl(e),r=o.get(n);r||(r=a.querySelector(_u(n)),r||(e=ut({src:e,async:!0},t),(t=Uo.get(n))&&xb(e,t),r=a.createElement("script"),aa(r),pa(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function WE(e,t){lr.M(e,t);var a=El;if(a&&e){var o=sl(a).hoistableScripts,n=Tl(e),r=o.get(n);r||(r=a.querySelector(_u(n)),r||(e=ut({src:e,async:!0,type:"module"},t),(t=Uo.get(n))&&xb(e,t),r=a.createElement("script"),aa(r),pa(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function xv(e,t,a,o){var n=(n=qr.current)?pp(n):null;if(!n)throw Error(W(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Sl(a.href),a=sl(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sl(a.href);var r=sl(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Lu(e)))&&!r._p&&(i.instance=r,i.state.loading=5),Uo.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Uo.set(e,a),r||YE(n,e,a,i.state))),t&&o===null)throw Error(W(528,""));return i}if(t&&o!==null)throw Error(W(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=sl(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(W(444,e))}}function Sl(e){return'href="'+zo(e)+'"'}function Lu(e){return'link[rel="stylesheet"]['+e+"]"}function nC(e){return ut({},e,{"data-precedence":e.precedence,precedence:null})}function YE(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),pa(t,"link",a),aa(t),e.head.appendChild(t))}function Tl(e){return'[src="'+zo(e)+'"]'}function _u(e){return"script[async]"+e}function bv(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+zo(a.href)+'"]');if(o)return t.instance=o,aa(o),o;var n=ut({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),aa(o),pa(o,"style",n),Bf(o,a.precedence,e),t.instance=o;case"stylesheet":n=Sl(a.href);var r=e.querySelector(Lu(n));if(r)return t.state.loading|=4,t.instance=r,aa(r),r;o=nC(a),(n=Uo.get(n))&&hb(o,n),r=(e.ownerDocument||e).createElement("link"),aa(r);var i=r;return i._p=new Promise(function(s,l){i.onload=s,i.onerror=l}),pa(r,"link",o),t.state.loading|=4,Bf(r,a.precedence,e),t.instance=r;case"script":return r=Tl(a.src),(n=e.querySelector(_u(r)))?(t.instance=n,aa(n),n):(o=a,(n=Uo.get(r))&&(o=ut({},a),xb(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),aa(n),pa(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(W(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Bf(o,a.precedence,e));return t.instance}function Bf(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var s=o[i];if(s.dataset.precedence===t)r=s;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function hb(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xb(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ff=null;function wv(e,t,a){if(Ff===null){var o=new Map,n=Ff=new Map;n.set(a,o)}else n=Ff,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[wu]||r[ua]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var s=o.get(i);s?s.push(r):o.set(i,[r])}}return o}function yv(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function KE(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rC(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ZE(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Sl(o.href),r=t.querySelector(Lu(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=mp.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,aa(r);return}r=t.ownerDocument||t,o=nC(o),(n=Uo.get(n))&&hb(o,n),r=r.createElement("link"),aa(r);var i=r;i._p=new Promise(function(s,l){i.onload=s,i.onerror=l}),pa(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mp.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Eh=0;function $E(e,t){return e.stylesheets&&e.count===0&&Uf(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Uf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Eh===0&&(Eh=62500*TE());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Uf(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Eh?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function mp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gp=null;function Uf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gp=new Map,t.forEach(QE,e),gp=null,mp.call(e))}function QE(e,t){if(!(t.state.loading&4)){var a=gp.get(e);if(a)var o=a.get(null);else{a=new Map,gp.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=mp.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var fu={$$typeof:$n,Provider:null,Consumer:null,_currentValue:Di,_currentValue2:Di,_threadCount:0};function JE(e,t,a,o,n,r,i,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ah(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ah(0),this.hiddenUpdates=ah(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function iC(e,t,a,o,n,r,i,s,l,u,d,f){return e=new JE(e,t,a,i,l,u,d,f,s),t=1,r===!0&&(t|=24),r=fo(3,null,null,t),e.current=r,r.stateNode=e,t=Vx(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Xx(r),e}function sC(e){return e?(e=ol,e):ol}function lC(e,t,a,o,n,r){n=sC(n),o.context===null?o.context=n:o.pendingContext=n,o=Gr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=jr(e,o,t),a!==null&&(Za(a,e,t),Xd(a,e,t))}function vv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function bb(e,t){vv(e,t),(e=e.alternate)&&vv(e,t)}function dC(e){if(e.tag===13||e.tag===31){var t=Xi(e,67108864);t!==null&&Za(t,e,67108864),bb(e,67108864)}}function Cv(e){if(e.tag===13||e.tag===31){var t=xo();t=Nx(t);var a=Xi(e,t);a!==null&&Za(a,e,t),bb(e,t)}}var hp=!0;function eT(e,t,a,o){var n=me.T;me.T=null;var r=Ge.p;try{Ge.p=2,wb(e,t,a,o)}finally{Ge.p=r,me.T=n}}function tT(e,t,a,o){var n=me.T;me.T=null;var r=Ge.p;try{Ge.p=8,wb(e,t,a,o)}finally{Ge.p=r,me.T=n}}function wb(e,t,a,o){if(hp){var n=kx(o);if(n===null)Mh(e,t,o,xp,a),Sv(e,o);else if(oT(n,e,t,a,o))o.stopPropagation();else if(Sv(e,o),t&4&&-1<aT.indexOf(e)){for(;n!==null;){var r=_l(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Ei(r.pendingLanes);if(i!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var l=1<<31-ho(i);s.entanglements[1]|=l,i&=~l}Sn(r),(Ve&6)===0&&(ip=mo()+500,ku(0,!1))}}break;case 31:case 13:s=Xi(r,2),s!==null&&Za(s,r,2),Ep(),bb(r,2)}if(r=kx(o),r===null&&Mh(e,t,o,xp,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Mh(e,t,o,null,a)}}function kx(e){return e=Dx(e),yb(e)}var xp=null;function yb(e){if(xp=null,e=$s(e),e!==null){var t=gu(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Nv(t),e!==null)return e;e=null}else if(a===31){if(e=Ev(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xp=e,null}function uC(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V3()){case Rv:return 2;case Pv:return 8;case Xf:case G3:return 32;case zv:return 268435456;default:return 32}default:return 32}}var Lx=!1,Yr=null,Kr=null,Zr=null,pu=new Map,mu=new Map,zr=[],aT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,t){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":pu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(t.pointerId)}}function Pd(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=_l(t),t!==null&&dC(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function oT(e,t,a,o,n){switch(t){case"focusin":return Yr=Pd(Yr,e,t,a,o,n),!0;case"dragenter":return Kr=Pd(Kr,e,t,a,o,n),!0;case"mouseover":return Zr=Pd(Zr,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return pu.set(r,Pd(pu.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,mu.set(r,Pd(mu.get(r)||null,e,t,a,o,n)),!0}return!1}function cC(e){var t=$s(e.target);if(t!==null){var a=gu(t);if(a!==null){if(t=a.tag,t===13){if(t=Nv(a),t!==null){e.blockedOn=t,iy(e.priority,function(){Cv(a)});return}}else if(t===31){if(t=Ev(a),t!==null){e.blockedOn=t,iy(e.priority,function(){Cv(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=kx(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Vh=o,a.target.dispatchEvent(o),Vh=null}else return t=_l(a),t!==null&&dC(t),e.blockedOn=a,!1;t.shift()}return!0}function kv(e,t,a){qf(e)&&a.delete(t)}function nT(){Lx=!1,Yr!==null&&qf(Yr)&&(Yr=null),Kr!==null&&qf(Kr)&&(Kr=null),Zr!==null&&qf(Zr)&&(Zr=null),pu.forEach(kv),mu.forEach(kv)}function _f(e,t){e.blockedOn===t&&(e.blockedOn=null,Lx||(Lx=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,nT)))}var If=null;function Lv(e){If!==e&&(If=e,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,function(){If===e&&(If=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(yb(o||a)===null)continue;break}var r=_l(a);r!==null&&(e.splice(t,3),t-=3,rx(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function kl(e){function t(l){return _f(l,e)}Yr!==null&&_f(Yr,e),Kr!==null&&_f(Kr,e),Zr!==null&&_f(Zr,e),pu.forEach(t),mu.forEach(t);for(var a=0;a<zr.length;a++){var o=zr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<zr.length&&(a=zr[0],a.blockedOn===null);)cC(a),a.blockedOn===null&&zr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[$a]||null;if(typeof r=="function")i||Lv(a);else if(i){var s=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[$a]||null)s=i.formAction;else if(yb(n)!==null)continue}else s=i.action;typeof s=="function"?a[o+1]=s:(a.splice(o,3),o-=3),Lv(a)}}}function fC(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function vb(e){this._internalRoot=e}Dp.prototype.render=vb.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));var a=t.current,o=xo();lC(a,o,e,t,null,null)};Dp.prototype.unmount=vb.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lC(e.current,2,null,e,null,null),Ep(),t[Ll]=null}};function Dp(e){this._internalRoot=e}Dp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uv();e={blockedOn:null,target:e,priority:t};for(var a=0;a<zr.length&&t!==0&&t<zr[a].priority;a++);zr.splice(a,0,e),a===0&&cC(e)}};var _v=Iv.version;if(_v!=="19.2.8")throw Error(W(527,_v,"19.2.8"));Ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=z3(t),e=e!==null?Tv(e):null,e=e===null?null:e.stateNode,e};var rT={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:me,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(zd=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zd.isDisabled&&zd.supportsFiber))try{hu=zd.inject(rT),go=zd}catch{}var zd;Rp.createRoot=function(e,t){if(!Mv(e))throw Error(W(299));var a=!1,o="",n=o2,r=n2,i=r2;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=iC(e,1,!1,null,null,a,o,null,n,r,i,fC),e[Ll]=t.current,gb(e),new vb(t)};Rp.hydrateRoot=function(e,t,a){if(!Mv(e))throw Error(W(299));var o=!1,n="",r=o2,i=n2,s=r2,l=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),t=iC(e,1,!0,t,a??null,o,n,l,r,i,s,fC),t.context=sC(null),a=t.current,o=xo(),o=Nx(o),n=Gr(o),n.callback=null,jr(a,n,o),a=o,t.current.lanes=a,bu(t,a),Sn(t),e[Ll]=t.current,gb(e),new Dp(t)};Rp.version="19.2.8"});var Cb=ja((O7,gC)=>{"use strict";function mC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mC)}catch(e){console.error(e)}}mC(),gC.exports=pC()});var xC=ja(Pp=>{"use strict";var iT=Symbol.for("react.transitional.element"),sT=Symbol.for("react.fragment");function hC(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:iT,type:e,key:o,ref:t!==void 0?t:null,props:a}}Pp.Fragment=sT;Pp.jsx=hC;Pp.jsxs=hC});var X=ja((B7,bC)=>{"use strict";bC.exports=xC()});var aL=ja(tL=>{"use strict";var Wl=J();function t8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a8=typeof Object.is=="function"?Object.is:t8,o8=Wl.useState,n8=Wl.useEffect,r8=Wl.useLayoutEffect,i8=Wl.useDebugValue;function s8(e,t){var a=t(),o=o8({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return r8(function(){n.value=a,n.getSnapshot=t,c0(n)&&r({inst:n})},[e,a,t]),n8(function(){return c0(n)&&r({inst:n}),e(function(){c0(n)&&r({inst:n})})},[e]),i8(a),a}function c0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!a8(e,a)}catch{return!0}}function l8(e,t){return t()}var d8=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?l8:s8;tL.useSyncExternalStore=Wl.useSyncExternalStore!==void 0?Wl.useSyncExternalStore:d8});var nL=ja((AV,oL)=>{"use strict";oL.exports=aL()});var iL=ja(rL=>{"use strict";var _m=J(),u8=nL();function c8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var f8=typeof Object.is=="function"?Object.is:c8,p8=u8.useSyncExternalStore,m8=_m.useRef,g8=_m.useEffect,h8=_m.useMemo,x8=_m.useDebugValue;rL.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=m8(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=h8(function(){function l(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var g=i.value;if(n(g,p))return f=g}return f=p}if(g=f,f8(d,p))return g;var w=o(p);return n!==void 0&&n(g,w)?(d=p,g):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return l(t())},c===null?void 0:function(){return l(c())}]},[t,a,o,n]);var s=p8(e,r[0],r[1]);return g8(function(){i.hasValue=!0,i.value=s},[s]),x8(s),s}});var lL=ja((RV,sL)=>{"use strict";sL.exports=iL()});var M7={};p3(M7,{mountCanvas:()=>L7,unmountCanvas:()=>I7,updateCanvas:()=>_7});var DN=I(Cb(),1);var yd=I(J(),1);var Ce=I(J(),1);var V=I(X()),G=I(J());function _t(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=_t(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var lT={value:()=>{}};function yC(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new zp(a)}function zp(e){this._=e}function dT(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}zp.prototype=yC.prototype={constructor:zp,on:function(e,t){var a=this._,o=dT(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=uT(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=wC(a[n],e.name,t);else if(t==null)for(n in a)a[n]=wC(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new zp(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function uT(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function wC(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=lT,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Yi=yC;var Op="http://www.w3.org/1999/xhtml",Sb={svg:"http://www.w3.org/2000/svg",xhtml:Op,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function dr(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),Sb.hasOwnProperty(t)?{space:Sb[t],local:e}:e}function cT(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Op&&t.documentElement.namespaceURI===Op?t.createElement(e):t.createElementNS(a,e)}}function fT(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Hp(e){var t=dr(e);return(t.local?fT:cT)(t)}function pT(){}function Ki(e){return e==null?pT:function(){return this.querySelector(e)}}function vC(e){typeof e!="function"&&(e=Ki(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=new Array(i),l,u,d=0;d<i;++d)(l=r[d])&&(u=e.call(l,l.__data__,d,r))&&("__data__"in l&&(u.__data__=l.__data__),s[d]=u);return new It(o,this._parents)}function kb(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function mT(){return[]}function Iu(e){return e==null?mT:function(){return this.querySelectorAll(e)}}function gT(e){return function(){return kb(e.apply(this,arguments))}}function CC(e){typeof e=="function"?e=gT(e):e=Iu(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],s=i.length,l,u=0;u<s;++u)(l=i[u])&&(o.push(e.call(l,l.__data__,u,i)),n.push(l));return new It(o,n)}function Mu(e){return function(){return this.matches(e)}}function Bp(e){return function(t){return t.matches(e)}}var hT=Array.prototype.find;function xT(e){return function(){return hT.call(this.children,e)}}function bT(){return this.firstElementChild}function SC(e){return this.select(e==null?bT:xT(typeof e=="function"?e:Bp(e)))}var wT=Array.prototype.filter;function yT(){return Array.from(this.children)}function vT(e){return function(){return wT.call(this.children,e)}}function kC(e){return this.selectAll(e==null?yT:vT(typeof e=="function"?e:Bp(e)))}function LC(e){typeof e!="function"&&(e=Mu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=[],l,u=0;u<i;++u)(l=r[u])&&e.call(l,l.__data__,u,r)&&s.push(l);return new It(o,this._parents)}function Fp(e){return new Array(e.length)}function _C(){return new It(this._enter||this._groups.map(Fp),this._parents)}function Nu(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Nu.prototype={constructor:Nu,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function IC(e){return function(){return e}}function CT(e,t,a,o,n,r){for(var i=0,s,l=t.length,u=r.length;i<u;++i)(s=t[i])?(s.__data__=r[i],o[i]=s):a[i]=new Nu(e,r[i]);for(;i<l;++i)(s=t[i])&&(n[i]=s)}function ST(e,t,a,o,n,r,i){var s,l,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(s=0;s<d;++s)(l=t[s])&&(c[s]=p=i.call(l,l.__data__,s,t)+"",u.has(p)?n[s]=l:u.set(p,l));for(s=0;s<f;++s)p=i.call(e,r[s],s,r)+"",(l=u.get(p))?(o[s]=l,l.__data__=r[s],u.delete(p)):a[s]=new Nu(e,r[s]);for(s=0;s<d;++s)(l=t[s])&&u.get(c[s])===l&&(n[s]=l)}function kT(e){return e.__data__}function MC(e,t){if(!arguments.length)return Array.from(this,kT);var a=t?ST:CT,o=this._parents,n=this._groups;typeof e!="function"&&(e=IC(e));for(var r=n.length,i=new Array(r),s=new Array(r),l=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=LT(e.call(d,d&&d.__data__,u,o)),g=p.length,w=s[u]=new Array(g),y=i[u]=new Array(g),h=l[u]=new Array(c);a(d,f,w,y,h,p,t);for(var x=0,m=0,b,v;x<g;++x)if(b=w[x]){for(x>=m&&(m=x+1);!(v=y[m])&&++m<g;);b._next=v||null}}return i=new It(i,o),i._enter=s,i._exit=l,i}function LT(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function NC(){return new It(this._exit||this._groups.map(Fp),this._parents)}function EC(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function TC(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),s=new Array(n),l=0;l<i;++l)for(var u=a[l],d=o[l],f=u.length,c=s[l]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;l<n;++l)s[l]=a[l];return new It(s,this._parents)}function AC(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function DC(e){e||(e=_T);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],s=i.length,l=n[r]=new Array(s),u,d=0;d<s;++d)(u=i[d])&&(l[d]=u);l.sort(t)}return new It(n,this._parents).order()}function _T(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function RC(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function PC(){return Array.from(this)}function zC(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function OC(){let e=0;for(let t of this)++e;return e}function HC(){return!this.node()}function BC(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,s;r<i;++r)(s=n[r])&&e.call(s,s.__data__,r,n);return this}function IT(e){return function(){this.removeAttribute(e)}}function MT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function NT(e,t){return function(){this.setAttribute(e,t)}}function ET(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function TT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function AT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function FC(e,t){var a=dr(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?MT:IT:typeof t=="function"?a.local?AT:TT:a.local?ET:NT)(a,t))}function Up(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function DT(e){return function(){this.style.removeProperty(e)}}function RT(e,t,a){return function(){this.style.setProperty(e,t,a)}}function PT(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function UC(e,t,a){return arguments.length>1?this.each((t==null?DT:typeof t=="function"?PT:RT)(e,t,a??"")):oi(this.node(),e)}function oi(e,t){return e.style.getPropertyValue(t)||Up(e).getComputedStyle(e,null).getPropertyValue(t)}function zT(e){return function(){delete this[e]}}function OT(e,t){return function(){this[e]=t}}function HT(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function qC(e,t){return arguments.length>1?this.each((t==null?zT:typeof t=="function"?HT:OT)(e,t)):this.node()[e]}function VC(e){return e.trim().split(/^|\s+/)}function Lb(e){return e.classList||new GC(e)}function GC(e){this._node=e,this._names=VC(e.getAttribute("class")||"")}GC.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function jC(e,t){for(var a=Lb(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function XC(e,t){for(var a=Lb(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function BT(e){return function(){jC(this,e)}}function FT(e){return function(){XC(this,e)}}function UT(e,t){return function(){(t.apply(this,arguments)?jC:XC)(this,e)}}function WC(e,t){var a=VC(e+"");if(arguments.length<2){for(var o=Lb(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?UT:t?BT:FT)(a,t))}function qT(){this.textContent=""}function VT(e){return function(){this.textContent=e}}function GT(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function YC(e){return arguments.length?this.each(e==null?qT:(typeof e=="function"?GT:VT)(e)):this.node().textContent}function jT(){this.innerHTML=""}function XT(e){return function(){this.innerHTML=e}}function WT(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function KC(e){return arguments.length?this.each(e==null?jT:(typeof e=="function"?WT:XT)(e)):this.node().innerHTML}function YT(){this.nextSibling&&this.parentNode.appendChild(this)}function ZC(){return this.each(YT)}function KT(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function $C(){return this.each(KT)}function QC(e){var t=typeof e=="function"?e:Hp(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ZT(){return null}function JC(e,t){var a=typeof e=="function"?e:Hp(e),o=t==null?ZT:typeof t=="function"?t:Ki(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function $T(){var e=this.parentNode;e&&e.removeChild(this)}function eS(){return this.each($T)}function QT(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function JT(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function tS(e){return this.select(e?JT:QT)}function aS(e){return arguments.length?this.property("__data__",e):this.node().__data__}function eA(e){return function(t){e.call(this,t,this.__data__)}}function tA(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function aA(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function oA(e,t,a){return function(){var o=this.__on,n,r=eA(t);if(o){for(var i=0,s=o.length;i<s;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function oS(e,t,a){var o=tA(e+""),n,r=o.length,i;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,u=s.length,d;l<u;++l)for(n=0,d=s[l];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(s=t?oA:aA,n=0;n<r;++n)this.each(s(o[n],t,a));return this}function nS(e,t,a){var o=Up(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function nA(e,t){return function(){return nS(this,e,t)}}function rA(e,t){return function(){return nS(this,e,t.apply(this,arguments))}}function rS(e,t){return this.each((typeof t=="function"?rA:nA)(e,t))}function*iS(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var _b=[null];function It(e,t){this._groups=e,this._parents=t}function sS(){return new It([[document.documentElement]],_b)}function iA(){return this}It.prototype=sS.prototype={constructor:It,select:vC,selectAll:CC,selectChild:SC,selectChildren:kC,filter:LC,data:MC,enter:_C,exit:NC,join:EC,merge:TC,selection:iA,order:AC,sort:DC,call:RC,nodes:PC,node:zC,size:OC,empty:HC,each:BC,attr:FC,style:UC,property:qC,classed:WC,text:YC,html:KC,raise:ZC,lower:$C,append:QC,insert:JC,remove:eS,clone:tS,datum:aS,on:oS,dispatch:rS,[Symbol.iterator]:iS};var ur=sS;function na(e){return typeof e=="string"?new It([[document.querySelector(e)]],[document.documentElement]):new It([[e]],_b)}function lS(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Pa(e,t){if(e=lS(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var dS={passive:!1},Zi={capture:!0,passive:!1};function qp(e){e.stopImmediatePropagation()}function ni(e){e.preventDefault(),e.stopImmediatePropagation()}function Eu(e){var t=e.document.documentElement,a=na(e).on("dragstart.drag",ni,Zi);"onselectstart"in t?a.on("selectstart.drag",ni,Zi):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Tu(e,t){var a=e.document.documentElement,o=na(e).on("dragstart.drag",null);t&&(o.on("click.drag",ni,Zi),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var Au=e=>()=>e;function Du(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:s,dx:l,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Du.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function sA(e){return!e.ctrlKey&&!e.button}function lA(){return this.parentNode}function dA(e,t){return t??{x:e.x,y:e.y}}function uA(){return navigator.maxTouchPoints||"ontouchstart"in this}function Vp(){var e=sA,t=lA,a=dA,o=uA,n={},r=Yi("start","drag","end"),i=0,s,l,u,d,f=0;function c(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",h,dS).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,v){if(!(d||!e.call(this,b,v))){var C=m(this,t.call(this,b,v),b,v,"mouse");C&&(na(b.view).on("mousemove.drag",g,Zi).on("mouseup.drag",w,Zi),Eu(b.view),qp(b),u=!1,s=b.clientX,l=b.clientY,C("start",b))}}function g(b){if(ni(b),!u){var v=b.clientX-s,C=b.clientY-l;u=v*v+C*C>f}n.mouse("drag",b)}function w(b){na(b.view).on("mousemove.drag mouseup.drag",null),Tu(b.view,u),ni(b),n.mouse("end",b)}function y(b,v){if(e.call(this,b,v)){var C=b.changedTouches,S=t.call(this,b,v),k=C.length,_,T;for(_=0;_<k;++_)(T=m(this,S,b,v,C[_].identifier,C[_]))&&(qp(b),T("start",b,C[_]))}}function h(b){var v=b.changedTouches,C=v.length,S,k;for(S=0;S<C;++S)(k=n[v[S].identifier])&&(ni(b),k("drag",b,v[S]))}function x(b){var v=b.changedTouches,C=v.length,S,k;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),S=0;S<C;++S)(k=n[v[S].identifier])&&(qp(b),k("end",b,v[S]))}function m(b,v,C,S,k,_){var T=r.copy(),R=Pa(_||C,v),H,U,L;if((L=a.call(b,new Du("beforestart",{sourceEvent:C,target:c,identifier:k,active:i,x:R[0],y:R[1],dx:0,dy:0,dispatch:T}),S))!=null)return H=L.x-R[0]||0,U=L.y-R[1]||0,function N(E,M,A){var O=R,D;switch(E){case"start":n[k]=N,D=i++;break;case"end":delete n[k],--i;case"drag":R=Pa(A||M,v),D=i;break}T.call(E,b,new Du(E,{sourceEvent:M,subject:L,target:c,identifier:k,active:D,x:R[0]+H,y:R[1]+U,dx:R[0]-O[0],dy:R[1]-O[1],dispatch:T}),S)}}return c.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Au(!!b),c):e},c.container=function(b){return arguments.length?(t=typeof b=="function"?b:Au(b),c):t},c.subject=function(b){return arguments.length?(a=typeof b=="function"?b:Au(b),c):a},c.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:Au(!!b),c):o},c.on=function(){var b=r.on.apply(r,arguments);return b===r?c:b},c.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,c):Math.sqrt(f)},c}function Gp(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Ib(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function zu(){}var Ru=.7,Wp=1/Ru,Al="\\s*([+-]?\\d+)\\s*",Pu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",kn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",cA=/^#([0-9a-f]{3,8})$/,fA=new RegExp(`^rgb\\(${Al},${Al},${Al}\\)$`),pA=new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`),mA=new RegExp(`^rgba\\(${Al},${Al},${Al},${Pu}\\)$`),gA=new RegExp(`^rgba\\(${kn},${kn},${kn},${Pu}\\)$`),hA=new RegExp(`^hsl\\(${Pu},${kn},${kn}\\)$`),xA=new RegExp(`^hsla\\(${Pu},${kn},${kn},${Pu}\\)$`),uS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Gp(zu,Qo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:cS,formatHex:cS,formatHex8:bA,formatHsl:wA,formatRgb:fS,toString:fS});function cS(){return this.rgb().formatHex()}function bA(){return this.rgb().formatHex8()}function wA(){return bS(this).formatHsl()}function fS(){return this.rgb().formatRgb()}function Qo(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=cA.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?pS(t):a===3?new Ja(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?jp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?jp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=fA.exec(e))?new Ja(t[1],t[2],t[3],1):(t=pA.exec(e))?new Ja(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=mA.exec(e))?jp(t[1],t[2],t[3],t[4]):(t=gA.exec(e))?jp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=hA.exec(e))?hS(t[1],t[2]/100,t[3]/100,1):(t=xA.exec(e))?hS(t[1],t[2]/100,t[3]/100,t[4]):uS.hasOwnProperty(e)?pS(uS[e]):e==="transparent"?new Ja(NaN,NaN,NaN,0):null}function pS(e){return new Ja(e>>16&255,e>>8&255,e&255,1)}function jp(e,t,a,o){return o<=0&&(e=t=a=NaN),new Ja(e,t,a,o)}function yA(e){return e instanceof zu||(e=Qo(e)),e?(e=e.rgb(),new Ja(e.r,e.g,e.b,e.opacity)):new Ja}function Dl(e,t,a,o){return arguments.length===1?yA(e):new Ja(e,t,a,o??1)}function Ja(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}Gp(Ja,Dl,Ib(zu,{brighter(e){return e=e==null?Wp:Math.pow(Wp,e),new Ja(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ru:Math.pow(Ru,e),new Ja(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ja(Qi(this.r),Qi(this.g),Qi(this.b),Yp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mS,formatHex:mS,formatHex8:vA,formatRgb:gS,toString:gS}));function mS(){return`#${$i(this.r)}${$i(this.g)}${$i(this.b)}`}function vA(){return`#${$i(this.r)}${$i(this.g)}${$i(this.b)}${$i((isNaN(this.opacity)?1:this.opacity)*255)}`}function gS(){let e=Yp(this.opacity);return`${e===1?"rgb(":"rgba("}${Qi(this.r)}, ${Qi(this.g)}, ${Qi(this.b)}${e===1?")":`, ${e})`}`}function Yp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Qi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function $i(e){return e=Qi(e),(e<16?"0":"")+e.toString(16)}function hS(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new $o(e,t,a,o)}function bS(e){if(e instanceof $o)return new $o(e.h,e.s,e.l,e.opacity);if(e instanceof zu||(e=Qo(e)),!e)return new $o;if(e instanceof $o)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,s=r-n,l=(r+n)/2;return s?(t===r?i=(a-o)/s+(a<o)*6:a===r?i=(o-t)/s+2:i=(t-a)/s+4,s/=l<.5?r+n:2-r-n,i*=60):s=l>0&&l<1?0:i,new $o(i,s,l,e.opacity)}function wS(e,t,a,o){return arguments.length===1?bS(e):new $o(e,t,a,o??1)}function $o(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}Gp($o,wS,Ib(zu,{brighter(e){return e=e==null?Wp:Math.pow(Wp,e),new $o(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ru:Math.pow(Ru,e),new $o(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Ja(Mb(e>=240?e-240:e+120,n,o),Mb(e,n,o),Mb(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new $o(xS(this.h),Xp(this.s),Xp(this.l),Yp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Yp(this.opacity);return`${e===1?"hsl(":"hsla("}${xS(this.h)}, ${Xp(this.s)*100}%, ${Xp(this.l)*100}%${e===1?")":`, ${e})`}`}}));function xS(e){return e=(e||0)%360,e<0?e+360:e}function Xp(e){return Math.max(0,Math.min(1,e||0))}function Mb(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Nb(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function yS(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,s=o<t-1?e[o+2]:2*r-n;return Nb((a-o/t)*t,i,n,r,s)}}function vS(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],s=e[(o+2)%t];return Nb((a-o/t)*t,n,r,i,s)}}var Ou=e=>()=>e;function CA(e,t){return function(a){return e+a*t}}function SA(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function CS(e){return(e=+e)==1?Kp:function(t,a){return a-t?SA(t,a,e):Ou(isNaN(t)?a:t)}}function Kp(e,t){var a=t-e;return a?CA(e,a):Ou(isNaN(e)?t:e)}var Ji=(function e(t){var a=CS(t);function o(n,r){var i=a((n=Dl(n)).r,(r=Dl(r)).r),s=a(n.g,r.g),l=a(n.b,r.b),u=Kp(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=s(d),n.b=l(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function SS(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,s;for(i=0;i<a;++i)s=Dl(t[i]),o[i]=s.r||0,n[i]=s.g||0,r[i]=s.b||0;return o=e(o),n=e(n),r=e(r),s.opacity=1,function(l){return s.r=o(l),s.g=n(l),s.b=r(l),s+""}}}var kA=SS(yS),LA=SS(vS);function kS(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function LS(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _S(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=cr(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(s){for(i=0;i<o;++i)r[i]=n[i](s);return r}}function IS(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function za(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function MS(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=cr(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Tb=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Eb=new RegExp(Tb.source,"g");function _A(e){return function(){return e}}function IA(e){return function(t){return e(t)+""}}function Hu(e,t){var a=Tb.lastIndex=Eb.lastIndex=0,o,n,r,i=-1,s=[],l=[];for(e=e+"",t=t+"";(o=Tb.exec(e))&&(n=Eb.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),s[i]?s[i]+=r:s[++i]=r),(o=o[0])===(n=n[0])?s[i]?s[i]+=n:s[++i]=n:(s[++i]=null,l.push({i,x:za(o,n)})),a=Eb.lastIndex;return a<t.length&&(r=t.slice(a),s[i]?s[i]+=r:s[++i]=r),s.length<2?l[0]?IA(l[0].x):_A(t):(t=l.length,function(u){for(var d=0,f;d<t;++d)s[(f=l[d]).i]=f.x(u);return s.join("")})}function cr(e,t){var a=typeof t,o;return t==null||a==="boolean"?Ou(t):(a==="number"?za:a==="string"?(o=Qo(t))?(t=o,Ji):Hu:t instanceof Qo?Ji:t instanceof Date?IS:LS(t)?kS:Array.isArray(t)?_S:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?MS:za)(e,t)}var NS=180/Math.PI,Zp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ab(e,t,a,o,n,r){var i,s,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*a+t*o)&&(a-=e*l,o-=t*l),(s=Math.sqrt(a*a+o*o))&&(a/=s,o/=s,l/=s),e*o<t*a&&(e=-e,t=-t,l=-l,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*NS,skewX:Math.atan(l)*NS,scaleX:i,scaleY:s}}var $p;function ES(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Zp:Ab(t.a,t.b,t.c,t.d,t.e,t.f)}function TS(e){return e==null?Zp:($p||($p=document.createElementNS("http://www.w3.org/2000/svg","g")),$p.setAttribute("transform",e),(e=$p.transform.baseVal.consolidate())?(e=e.matrix,Ab(e.a,e.b,e.c,e.d,e.e,e.f)):Zp)}function AS(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);g.push({i:w-4,x:za(u,f)},{i:w-2,x:za(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:za(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function s(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:za(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function l(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");g.push({i:w-4,x:za(u,f)},{i:w-2,x:za(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),s(u.skewX,d.skewX,f,c),l(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,w=c.length,y;++g<w;)f[(y=c[g]).i]=y.x(p);return f.join("")}}}var Db=AS(ES,"px, ","px)","deg)"),Rb=AS(TS,", ",")",")");var MA=1e-12;function DS(e){return((e=Math.exp(e))+1/e)/2}function NA(e){return((e=Math.exp(e))-1/e)/2}function EA(e){return((e=Math.exp(2*e))-1)/(e+1)}var es=(function e(t,a,o){function n(r,i){var s=r[0],l=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-s,g=f-l,w=p*p+g*g,y,h;if(w<MA)h=Math.log(c/u)/t,y=function(S){return[s+S*p,l+S*g,u*Math.exp(t*S*h)]};else{var x=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*x),b=(c*c-u*u-o*w)/(2*c*a*x),v=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(b*b+1)-b);h=(C-v)/t,y=function(S){var k=S*h,_=DS(v),T=u/(a*x)*(_*EA(t*k+v)-NA(v));return[s+T*p,l+T*g,u*_/DS(t*k+v)]}}return y.duration=h*1e3*t/Math.SQRT2,y}return n.rho=function(r){var i=Math.max(.001,+r),s=i*i,l=s*s;return e(i,s,l)},n})(Math.SQRT2,2,4);var Rl=0,Fu=0,Bu=0,PS=1e3,Qp,Uu,Jp=0,ts=0,em=0,qu=typeof performance=="object"&&performance.now?performance:Date,zS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Gu(){return ts||(zS(TA),ts=qu.now()+em)}function TA(){ts=0}function Vu(){this._call=this._time=this._next=null}Vu.prototype=tm.prototype={constructor:Vu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?Gu():+a)+(t==null?0:+t),!this._next&&Uu!==this&&(Uu?Uu._next=this:Qp=this,Uu=this),this._call=e,this._time=a,Pb()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pb())}};function tm(e,t,a){var o=new Vu;return o.restart(e,t,a),o}function OS(){Gu(),++Rl;for(var e=Qp,t;e;)(t=ts-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Rl}function RS(){ts=(Jp=qu.now())+em,Rl=Fu=0;try{OS()}finally{Rl=0,DA(),ts=0}}function AA(){var e=qu.now(),t=e-Jp;t>PS&&(em-=t,Jp=e)}function DA(){for(var e,t=Qp,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:Qp=a);Uu=e,Pb(o)}function Pb(e){if(!Rl){Fu&&(Fu=clearTimeout(Fu));var t=e-ts;t>24?(e<1/0&&(Fu=setTimeout(RS,e-qu.now()-em)),Bu&&(Bu=clearInterval(Bu))):(Bu||(Jp=qu.now(),Bu=setInterval(AA,PS)),Rl=1,zS(RS))}}function am(e,t,a){var o=new Vu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var RA=Yi("start","end","cancel","interrupt"),PA=[],FS=0,HS=1,nm=2,om=3,BS=4,rm=5,ju=6;function ri(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;zA(e,a,{name:t,index:o,group:n,on:RA,tween:PA,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:FS})}function Xu(e,t){var a=Xt(e,t);if(a.state>FS)throw new Error("too late; already scheduled");return a}function ma(e,t){var a=Xt(e,t);if(a.state>om)throw new Error("too late; already running");return a}function Xt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function zA(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=tm(r,0,a.time);function r(u){a.state=HS,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==HS)return l();for(d in o)if(p=o[d],p.name===a.name){if(p.state===om)return am(i);p.state===BS?(p.state=ju,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=ju,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(am(function(){a.state===om&&(a.state=BS,a.timer.restart(s,a.delay,a.time),s(u))}),a.state=nm,a.on.call("start",e,e.__data__,a.index,a.group),a.state===nm){for(a.state=om,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function s(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(l),a.state=rm,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===rm&&(a.on.call("end",e,e.__data__,a.index,a.group),l())}function l(){a.state=ju,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function as(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>nm&&o.state<rm,o.state=ju,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function US(e){return this.each(function(){as(this,e)})}function OA(e,t){var a,o;return function(){var n=ma(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,s=o.length;i<s;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function HA(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=ma(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var s={name:t,value:a},l=0,u=n.length;l<u;++l)if(n[l].name===t){n[l]=s;break}l===u&&n.push(s)}r.tween=n}}function qS(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Xt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?OA:HA)(a,e,t))}function Pl(e,t,a){var o=e._id;return e.each(function(){var n=ma(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Xt(n,o).value[t]}}function im(e,t){var a;return(typeof t=="number"?za:t instanceof Qo?Ji:(a=Qo(t))?(t=a,Ji):Hu)(e,t)}function BA(e){return function(){this.removeAttribute(e)}}function FA(e){return function(){this.removeAttributeNS(e.space,e.local)}}function UA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function qA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function VA(e,t,a){var o,n,r;return function(){var i,s=a(this),l;return s==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=s+"",i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s)))}}function GA(e,t,a){var o,n,r;return function(){var i,s=a(this),l;return s==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=s+"",i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s)))}}function VS(e,t){var a=dr(e),o=a==="transform"?Rb:im;return this.attrTween(e,typeof t=="function"?(a.local?GA:VA)(a,o,Pl(this,"attr."+e,t)):t==null?(a.local?FA:BA)(a):(a.local?qA:UA)(a,o,t))}function jA(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function XA(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function WA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&XA(e,r)),a}return n._value=t,n}function YA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&jA(e,r)),a}return n._value=t,n}function GS(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=dr(e);return this.tween(a,(o.local?WA:YA)(o,t))}function KA(e,t){return function(){Xu(this,e).delay=+t.apply(this,arguments)}}function ZA(e,t){return t=+t,function(){Xu(this,e).delay=t}}function jS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?KA:ZA)(t,e)):Xt(this.node(),t).delay}function $A(e,t){return function(){ma(this,e).duration=+t.apply(this,arguments)}}function QA(e,t){return t=+t,function(){ma(this,e).duration=t}}function XS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?$A:QA)(t,e)):Xt(this.node(),t).duration}function JA(e,t){if(typeof t!="function")throw new Error;return function(){ma(this,e).ease=t}}function WS(e){var t=this._id;return arguments.length?this.each(JA(t,e)):Xt(this.node(),t).ease}function e6(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;ma(this,e).ease=a}}function YS(e){if(typeof e!="function")throw new Error;return this.each(e6(this._id,e))}function KS(e){typeof e!="function"&&(e=Mu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,s=o[n]=[],l,u=0;u<i;++u)(l=r[u])&&e.call(l,l.__data__,u,r)&&s.push(l);return new Oa(o,this._parents,this._name,this._id)}function ZS(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),s=0;s<r;++s)for(var l=t[s],u=a[s],d=l.length,f=i[s]=new Array(d),c,p=0;p<d;++p)(c=l[p]||u[p])&&(f[p]=c);for(;s<o;++s)i[s]=t[s];return new Oa(i,this._parents,this._name,this._id)}function t6(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function a6(e,t,a){var o,n,r=t6(t)?Xu:ma;return function(){var i=r(this,e),s=i.on;s!==o&&(n=(o=s).copy()).on(t,a),i.on=n}}function $S(e,t){var a=this._id;return arguments.length<2?Xt(this.node(),a).on.on(e):this.each(a6(a,e,t))}function o6(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function QS(){return this.on("end.remove",o6(this._id))}function JS(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Ki(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var s=o[i],l=s.length,u=r[i]=new Array(l),d,f,c=0;c<l;++c)(d=s[c])&&(f=e.call(d,d.__data__,c,s))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,ri(u[c],t,a,c,u,Xt(d,a)));return new Oa(r,this._parents,t,a)}function ek(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Iu(e));for(var o=this._groups,n=o.length,r=[],i=[],s=0;s<n;++s)for(var l=o[s],u=l.length,d,f=0;f<u;++f)if(d=l[f]){for(var c=e.call(d,d.__data__,f,l),p,g=Xt(d,a),w=0,y=c.length;w<y;++w)(p=c[w])&&ri(p,t,a,w,c,g);r.push(c),i.push(d)}return new Oa(r,i,t,a)}var n6=ur.prototype.constructor;function tk(){return new n6(this._groups,this._parents)}function r6(e,t){var a,o,n;return function(){var r=oi(this,e),i=(this.style.removeProperty(e),oi(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function ak(e){return function(){this.style.removeProperty(e)}}function i6(e,t,a){var o,n=a+"",r;return function(){var i=oi(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function s6(e,t,a){var o,n,r;return function(){var i=oi(this,e),s=a(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(e),oi(this,e))),i===l?null:i===o&&l===n?r:(n=l,r=t(o=i,s))}}function l6(e,t){var a,o,n,r="style."+t,i="end."+r,s;return function(){var l=ma(this,e),u=l.on,d=l.value[r]==null?s||(s=ak(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),l.on=o}}function ok(e,t,a){var o=(e+="")=="transform"?Db:im;return t==null?this.styleTween(e,r6(e,o)).on("end.style."+e,ak(e)):typeof t=="function"?this.styleTween(e,s6(e,o,Pl(this,"style."+e,t))).each(l6(this._id,e)):this.styleTween(e,i6(e,o,t),a).on("end.style."+e,null)}function d6(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function u6(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&d6(e,i,a)),o}return r._value=t,r}function nk(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,u6(e,t,a??""))}function c6(e){return function(){this.textContent=e}}function f6(e){return function(){var t=e(this);this.textContent=t??""}}function rk(e){return this.tween("text",typeof e=="function"?f6(Pl(this,"text",e)):c6(e==null?"":e+""))}function p6(e){return function(t){this.textContent=e.call(this,t)}}function m6(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&p6(n)),t}return o._value=e,o}function ik(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,m6(e))}function sk(){for(var e=this._name,t=this._id,a=sm(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],s=i.length,l,u=0;u<s;++u)if(l=i[u]){var d=Xt(l,t);ri(l,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Oa(o,this._parents,e,a)}function lk(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var s={value:i},l={value:function(){--n===0&&r()}};a.each(function(){var u=ma(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),u.on=t}),n===0&&r()})}var g6=0;function Oa(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function dk(e){return ur().transition(e)}function sm(){return++g6}var fr=ur.prototype;Oa.prototype=dk.prototype={constructor:Oa,select:JS,selectAll:ek,selectChild:fr.selectChild,selectChildren:fr.selectChildren,filter:KS,merge:ZS,selection:tk,transition:sk,call:fr.call,nodes:fr.nodes,node:fr.node,size:fr.size,empty:fr.empty,each:fr.each,on:$S,attr:VS,attrTween:GS,style:ok,styleTween:nk,text:rk,textTween:ik,remove:QS,tween:qS,delay:jS,duration:XS,ease:WS,easeVarying:YS,end:lk,[Symbol.iterator]:fr[Symbol.iterator]};function lm(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var h6={time:null,delay:0,duration:250,ease:lm};function x6(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function uk(e){var t,a;e instanceof Oa?(t=e._id,e=e._name):(t=sm(),(a=h6).time=Gu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],s=i.length,l,u=0;u<s;++u)(l=i[u])&&ri(l,e,t,u,i,a||x6(l,t));return new Oa(o,this._parents,e,t)}ur.prototype.interrupt=US;ur.prototype.transition=uk;var Wu=e=>()=>e;function zb(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function Jo(e,t,a){this.k=e,this.x=t,this.y=a}Jo.prototype={constructor:Jo,scale:function(e){return e===1?this:new Jo(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Jo(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var os=new Jo(1,0,0);Yu.prototype=Jo.prototype;function Yu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return os;return e.__zoom}function dm(e){e.stopImmediatePropagation()}function zl(e){e.preventDefault(),e.stopImmediatePropagation()}function b6(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function w6(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ck(){return this.__zoom||os}function y6(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function v6(){return navigator.maxTouchPoints||"ontouchstart"in this}function C6(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function um(){var e=b6,t=w6,a=C6,o=y6,n=v6,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],s=250,l=es,u=Yi("start","zoom","end"),d,f,c,p=500,g=150,w=0,y=10;function h(L){L.property("__zoom",ck).on("wheel.zoom",k,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",R).on("touchmove.zoom",H).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,N,E,M){var A=L.selection?L.selection():L;A.property("__zoom",ck),L!==A?v(L,N,E,M):A.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},h.scaleBy=function(L,N,E,M){h.scaleTo(L,function(){var A=this.__zoom.k,O=typeof N=="function"?N.apply(this,arguments):N;return A*O},E,M)},h.scaleTo=function(L,N,E,M){h.transform(L,function(){var A=t.apply(this,arguments),O=this.__zoom,D=E==null?b(A):typeof E=="function"?E.apply(this,arguments):E,B=O.invert(D),z=typeof N=="function"?N.apply(this,arguments):N;return a(m(x(O,z),D,B),A,i)},E,M)},h.translateBy=function(L,N,E,M){h.transform(L,function(){return a(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),i)},null,M)},h.translateTo=function(L,N,E,M,A){h.transform(L,function(){var O=t.apply(this,arguments),D=this.__zoom,B=M==null?b(O):typeof M=="function"?M.apply(this,arguments):M;return a(os.translate(B[0],B[1]).scale(D.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof E=="function"?-E.apply(this,arguments):-E),O,i)},M,A)};function x(L,N){return N=Math.max(r[0],Math.min(r[1],N)),N===L.k?L:new Jo(N,L.x,L.y)}function m(L,N,E){var M=N[0]-E[0]*L.k,A=N[1]-E[1]*L.k;return M===L.x&&A===L.y?L:new Jo(L.k,M,A)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function v(L,N,E,M){L.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var A=this,O=arguments,D=C(A,O).event(M),B=t.apply(A,O),z=E==null?b(B):typeof E=="function"?E.apply(A,O):E,j=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),F=A.__zoom,K=typeof N=="function"?N.apply(A,O):N,$=l(F.invert(z).concat(j/F.k),K.invert(z).concat(j/K.k));return function(ee){if(ee===1)ee=K;else{var q=$(ee),Q=j/q[2];ee=new Jo(Q,z[0]-q[0]*Q,z[1]-q[1]*Q)}D.zoom(null,ee)}})}function C(L,N,E){return!E&&L.__zooming||new S(L,N)}function S(L,N){this.that=L,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,N),this.taps=0}S.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,N){return this.mouse&&L!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var N=na(this.that).datum();u.call(L,this.that,new zb(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),N)}};function k(L,...N){if(!e.apply(this,arguments))return;var E=C(this,N).event(L),M=this.__zoom,A=Math.max(r[0],Math.min(r[1],M.k*Math.pow(2,o.apply(this,arguments)))),O=Pa(L);if(E.wheel)(E.mouse[0][0]!==O[0]||E.mouse[0][1]!==O[1])&&(E.mouse[1]=M.invert(E.mouse[0]=O)),clearTimeout(E.wheel);else{if(M.k===A)return;E.mouse=[O,M.invert(O)],as(this),E.start()}zl(L),E.wheel=setTimeout(D,g),E.zoom("mouse",a(m(x(M,A),E.mouse[0],E.mouse[1]),E.extent,i));function D(){E.wheel=null,E.end()}}function _(L,...N){if(c||!e.apply(this,arguments))return;var E=L.currentTarget,M=C(this,N,!0).event(L),A=na(L.view).on("mousemove.zoom",z,!0).on("mouseup.zoom",j,!0),O=Pa(L,E),D=L.clientX,B=L.clientY;Eu(L.view),dm(L),M.mouse=[O,this.__zoom.invert(O)],as(this),M.start();function z(F){if(zl(F),!M.moved){var K=F.clientX-D,$=F.clientY-B;M.moved=K*K+$*$>w}M.event(F).zoom("mouse",a(m(M.that.__zoom,M.mouse[0]=Pa(F,E),M.mouse[1]),M.extent,i))}function j(F){A.on("mousemove.zoom mouseup.zoom",null),Tu(F.view,M.moved),zl(F),M.event(F).end()}}function T(L,...N){if(e.apply(this,arguments)){var E=this.__zoom,M=Pa(L.changedTouches?L.changedTouches[0]:L,this),A=E.invert(M),O=E.k*(L.shiftKey?.5:2),D=a(m(x(E,O),M,A),t.apply(this,N),i);zl(L),s>0?na(this).transition().duration(s).call(v,D,M,L):na(this).call(h.transform,D,M,L)}}function R(L,...N){if(e.apply(this,arguments)){var E=L.touches,M=E.length,A=C(this,N,L.changedTouches.length===M).event(L),O,D,B,z;for(dm(L),D=0;D<M;++D)B=E[D],z=Pa(B,this),z=[z,this.__zoom.invert(z),B.identifier],A.touch0?!A.touch1&&A.touch0[2]!==z[2]&&(A.touch1=z,A.taps=0):(A.touch0=z,O=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),O&&(A.taps<2&&(f=z[0],d=setTimeout(function(){d=null},p)),as(this),A.start())}}function H(L,...N){if(this.__zooming){var E=C(this,N).event(L),M=L.changedTouches,A=M.length,O,D,B,z;for(zl(L),O=0;O<A;++O)D=M[O],B=Pa(D,this),E.touch0&&E.touch0[2]===D.identifier?E.touch0[0]=B:E.touch1&&E.touch1[2]===D.identifier&&(E.touch1[0]=B);if(D=E.that.__zoom,E.touch1){var j=E.touch0[0],F=E.touch0[1],K=E.touch1[0],$=E.touch1[1],ee=(ee=K[0]-j[0])*ee+(ee=K[1]-j[1])*ee,q=(q=$[0]-F[0])*q+(q=$[1]-F[1])*q;D=x(D,Math.sqrt(ee/q)),B=[(j[0]+K[0])/2,(j[1]+K[1])/2],z=[(F[0]+$[0])/2,(F[1]+$[1])/2]}else if(E.touch0)B=E.touch0[0],z=E.touch0[1];else return;E.zoom("touch",a(m(D,B,z),E.extent,i))}}function U(L,...N){if(this.__zooming){var E=C(this,N).event(L),M=L.changedTouches,A=M.length,O,D;for(dm(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),O=0;O<A;++O)D=M[O],E.touch0&&E.touch0[2]===D.identifier?delete E.touch0:E.touch1&&E.touch1[2]===D.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(D=Pa(D,this),Math.hypot(f[0]-D[0],f[1]-D[1])<y)){var B=na(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:Wu(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:Wu(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:Wu(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:Wu([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(i[0][0]=+L[0][0],i[1][0]=+L[1][0],i[0][1]=+L[0][1],i[1][1]=+L[1][1],h):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(s=+L,h):s},h.interpolate=function(L){return arguments.length?(l=L,h):l},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(w=(L=+L)*L,h):Math.sqrt(w)},h.tapDistance=function(L){return arguments.length?(y=+L,h):y},h}var yo={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Fl=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Ub=["Enter"," ","Escape"],qb={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},di;(function(e){e.Strict="strict",e.Loose="loose"})(di||(di={}));var en;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(en||(en={}));var pr;(function(e){e.Partial="partial",e.Full="full"})(pr||(pr={}));var Vb={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},Ln;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Ln||(Ln={}));var Hl;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Hl||(Hl={}));var ie;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ie||(ie={}));var fk={[ie.Left]:ie.Right,[ie.Right]:ie.Left,[ie.Top]:ie.Bottom,[ie.Bottom]:ie.Top};function Gb(e){return e===null?null:e?"valid":"invalid"}var jb=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Lk=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Xb=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Wb=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Zu=(e,t=[0,0])=>{let{width:a,height:o}=Go(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Yb=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",s=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(s=i?t.nodeLookup.get(r):Xb(r)?r:t.nodeLookup.get(r.id)),s?(a=!0,hm(n,pm(s,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?xm(o):{x:0,y:0,width:0,height:0}},Ul=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=hm(a,pm(n)),o=!0)}),o?xm(a):{x:0,y:0,width:0,height:0}},mm=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let s=(t.x-a)/n,l=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:w=!1}=c;if(i&&!g||w)continue;let y=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x,y:m}=c.internals.positionAbsolute,b=Ek(s,l,u,d,x,m,y,h),v=y*h,C=r&&b>0;(!c.internals.handleBounds||C||b>=v||c.dragging)&&f.push(c)}return f},_k=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function S6(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:s}=Go(n);r=i>0&&s>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function Ik({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let s=S6(e,i),l=Ul(s),u=Qu(l,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function Kb({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),s=i.parentId?a.get(i.parentId):void 0,{x:l,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!s)r?.("005",yo.error005());else{let{width:p,height:g}=Go(s);p&&g&&(f=[[l,u],[l+p,u+g]])}else s&&is(i.extent)&&(f=[[i.extent[0][0]+l,i.extent[0][1]+u],[i.extent[1][0]+l,i.extent[1][1]+u]]);let c=is(f)?ns(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",yo.error015()),{position:{x:c.x-l+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function Mk({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||g)&&i.push(c)}let s=new Set(t.map(c=>c.id)),l=o.filter(c=>c.deletable!==!1),d=_k(i,l);for(let c of l)s.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var Bl=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),ns=(e={x:0,y:0},t,a)=>({x:Bl(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Bl(e.y,t[0][1],t[1][1]-(a?.height??0))});function Nk(e,t,a){let{width:o,height:n}=Go(a),{x:r,y:i}=a.internals.positionAbsolute;return ns(e,[[r,i],[r+o,i+n]],t)}var pk=(e,t,a)=>e<t?Bl(Math.abs(e-t),1,t)/t:e>a?-Bl(Math.abs(e-a),1,t)/t:0,gm=(e,t,a=15,o=40)=>{let n=pk(e.x,o,t.width-o)*a,r=pk(e.y,o,t.height-o)*a;return[n,r]},hm=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Fb=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),xm=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),ql=(e,t=[0,0])=>{let{x:a,y:o}=Xb(e)?e.internals.positionAbsolute:Zu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},pm=(e,t=[0,0])=>{let{x:a,y:o}=Xb(e)?e.internals.positionAbsolute:Zu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Zb=(e,t)=>xm(hm(Fb(e),Fb(t))),Ek=(e,t,a,o,n,r,i,s)=>{let l=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+s)-Math.max(t,r));return Math.ceil(l*u)},$u=(e,t)=>Ek(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),$b=e=>qo(e.width)&&qo(e.height)&&qo(e.x)&&qo(e.y),qo=e=>!isNaN(e)&&isFinite(e),Qb=(e,t)=>(a,o)=>{},Vl=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Gl=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let s={x:(e-a)/n,y:(t-o)/n};return r?Vl(s,i):s},rs=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Ol(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function k6(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Ol(e,a),n=Ol(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Ol(e.top??e.y??0,a),n=Ol(e.bottom??e.y??0,a),r=Ol(e.left??e.x??0,t),i=Ol(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function L6(e,t,a,o,n,r){let{x:i,y:s}=rs(e,[t,a,o]),{x:l,y:u}=rs({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-l,f=r-u;return{left:Math.floor(i),top:Math.floor(s),right:Math.floor(d),bottom:Math.floor(f)}}var Qu=(e,t,a,o,n,r)=>{let i=k6(r,t,a),s=(t-i.x)/e.width,l=(a-i.y)/e.height,u=Math.min(s,l),d=Bl(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,w=L6(e,p,g,d,t,a),y={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-y.left+y.right,y:g-y.top+y.bottom,zoom:d}},jl=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function is(e){return e!=null&&e!=="parent"}function Go(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Jb(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function e0(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let s=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*s[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*s[1]}return r}function t0(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function Tk(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function Ak(e){return{...qb,...e||{}}}function Ku(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=Vo(e),s=Gl({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:l,y:u}=a?Vl(s,t):s;return{xSnapped:l,ySnapped:u,...s}}var bm=e=>({width:e.offsetWidth,height:e.offsetHeight}),a0=e=>e?.getRootNode?.()||window?.document,_6=["INPUT","SELECT","TEXTAREA"];function o0(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:_6.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var n0=e=>"clientX"in e,Vo=(e,t)=>{let a=n0(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},mk=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let s=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(s.left-a.left)/o,y:(s.top-a.top)/o,...bm(i)}})};function wm({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:s}){let l=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+s*.375+o*.125,d=Math.abs(l-e),f=Math.abs(u-t);return[l,u,d,f]}function cm(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function gk({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ie.Left:return[t-cm(t-o,r),a];case ie.Right:return[t+cm(o-t,r),a];case ie.Top:return[t,a-cm(a-n,r)];case ie.Bottom:return[t,a+cm(n-a,r)]}}function Xl({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,curvature:i=.25}){let[s,l]=gk({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=gk({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,g]=wm({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:s,sourceControlY:l,targetControlX:u,targetControlY:d});return[`M${e},${t} C${s},${l} ${u},${d} ${o},${n}`,f,c,p,g]}function r0({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,s=o<t?o+i:o-i;return[r,s,n,i]}function Dk({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,s=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+s}function Rk({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=hm(pm(e),pm(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return $u(i,xm(r))>0}var I6=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,M6=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),Pk=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",yo.error006()),t;let o=a.getEdgeId||I6,n;return jb(e)?n={...e}:n={...e,id:o(e)},M6(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function ym({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,s]=r0({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,s]}var hk={[ie.Left]:{x:-1,y:0},[ie.Right]:{x:1,y:0},[ie.Top]:{x:0,y:-1},[ie.Bottom]:{x:0,y:1}},N6=({source:e,sourcePosition:t=ie.Bottom,target:a})=>t===ie.Left||t===ie.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},xk=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function E6({source:e,sourcePosition:t=ie.Bottom,target:a,targetPosition:o=ie.Top,center:n,offset:r,stepPosition:i}){let s=hk[t],l=hk[o],u={x:e.x+s.x*r,y:e.y+s.y*r},d={x:a.x+l.x*r,y:a.y+l.y*r},f=N6({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],w,y,h={x:0,y:0},x={x:0,y:0},[,,m,b]=r0({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(s[c]*l[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,y=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,y=n.y??u.y+(d.y-u.y)*i);let k=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y},{x:d.x,y}];s[c]===p?g=c==="x"?k:_:g=c==="x"?_:k}else{let k=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?g=s.x===p?_:k:g=s.y===p?k:_,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let N=Math.min(r-1,r-L);s[c]===p?h[c]=(u[c]>e[c]?-1:1)*N:x[c]=(d[c]>a[c]?-1:1)*N}}if(t!==o){let L=c==="x"?"y":"x",N=s[c]===l[L],E=u[L]>d[L],M=u[L]<d[L];(s[c]===1&&(!N&&E||N&&M)||s[c]!==1&&(!N&&M||N&&E))&&(g=c==="x"?k:_)}let T={x:u.x+h.x,y:u.y+h.y},R={x:d.x+x.x,y:d.y+x.y},H=Math.max(Math.abs(T.x-g[0].x),Math.abs(R.x-g[0].x)),U=Math.max(Math.abs(T.y-g[0].y),Math.abs(R.y-g[0].y));H>=U?(w=(T.x+R.x)/2,y=g[0].y):(w=g[0].x,y=(T.y+R.y)/2)}let v={x:u.x+h.x,y:u.y+h.y},C={x:d.x+x.x,y:d.y+x.y};return[[e,...v.x!==g[0].x||v.y!==g[0].y?[v]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],w,y,m,b]}function T6(e,t,a,o){let n=Math.min(xk(e,t)/2,xk(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let s=e.x<a.x?1:-1,l=e.y<a.y?-1:1;return`L ${r},${i+n*l}Q ${r},${i} ${r+n*s},${i}`}function Ju({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,borderRadius:i=5,centerX:s,centerY:l,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,w]=E6({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:s,y:l},offset:u,stepPosition:d}),y=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)y+=T6(f[h-1],f[h],f[h+1],i);return y+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[y,c,p,g,w]}function bk(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function zk(e){let{sourceNode:t,targetNode:a}=e;if(!bk(t)||!bk(a))return null;let o=t.internals.handleBounds||wk(t.handles),n=a.internals.handleBounds||wk(a.handles),r=yk(o?.source??[],e.sourceHandle),i=yk(e.connectionMode===di.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",yo.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=r?.position||ie.Bottom,l=i?.position||ie.Top,u=ui(t,r,s),d=ui(a,i,l);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:s,targetPosition:l}}function wk(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function ui(e,t,a=ie.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:s}=t??Go(e);if(o)return{x:n+i/2,y:r+s/2};switch(t?.position??a){case ie.Top:return{x:n+i/2,y:r};case ie.Right:return{x:n+i,y:r+s/2};case ie.Bottom:return{x:n+i/2,y:r+s};case ie.Left:return{x:n,y:r+s/2}}}function yk(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function vm(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Ok(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,s)=>([s.markerStart||o,s.markerEnd||n].forEach(l=>{if(l&&typeof l=="object"){let u=vm(l,t);r.has(u)||(i.push({id:u,color:l.color||a,...l}),r.add(u))}}),i),[]).sort((i,s)=>i.id.localeCompare(s.id))}var Hk=1e3,A6=10,i0={nodeOrigin:[0,0],nodeExtent:Fl,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},D6={...i0,checkEquality:!0};function s0(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function Bk(e,t,a){let o=s0(i0,a);for(let n of e.values())if(n.parentId)d0(n,e,t,o);else{let r=Zu(n,o.nodeOrigin),i=is(n.extent)?n.extent:o.nodeExtent,s=ns(r,i,Go(n));n.internals.positionAbsolute=s}}function R6(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function l0(e){return e==="manual"}function Cm(e,t,a,o={}){let n=s0(D6,o),r={i:0},i=new Map(t),s=n?.elevateNodesOnSelect&&!l0(n.zIndexMode)?Hk:0,l=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=Zu(d,n.nodeOrigin),p=is(d.extent)?d.extent:n.nodeExtent,g=ns(c,p,Go(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:R6(d,f),z:Fk(d,s,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(l=!1),d.parentId&&d0(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:l,hasSelectedNodes:u}}function P6(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function d0(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:s,zIndexMode:l}=s0(i0,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}P6(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&l==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*A6),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!l0(l)?Hk:0,{x:c,y:p,z:g}=z6(e,d,i,s,f,l),{positionAbsolute:w}=e.internals,y=c!==w.x||p!==w.y;(y||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:c,y:p}:w,z:g}})}function Fk(e,t,a){let o=qo(e.zIndex)?e.zIndex:0;return l0(a)?o:o+(e.selected?t:0)}function z6(e,t,a,o,n,r){let{x:i,y:s}=t.internals.positionAbsolute,l=Go(e),u=Zu(e,a),d=is(e.extent)?ns(u,e.extent,l):u,f=ns({x:i+d.x,y:s+d.y},o,l);e.extent==="parent"&&(f=Nk(f,l,t));let c=Fk(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Sm(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let s=t.get(i.parentId);if(!s)continue;let l=r.get(i.parentId)?.expandedRect??ql(s),u=Zb(l,i.rect);r.set(i.parentId,{expandedRect:u,parent:s})}return r.size>0&&r.forEach(({expandedRect:i,parent:s},l)=>{let u=s.internals.positionAbsolute,d=Go(s),f=s.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,g=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),y=(g-d.width)*f[0],h=(w-d.height)*f[1];(c>0||p>0||y||h)&&(n.push({id:l,type:"position",position:{x:s.position.x-c+y,y:s.position.y-p+h}}),a.get(l)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+c,y:x.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:l,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-y:0),height:w+(p?f[1]*p-h:0)}})}),n}function Uk(e,t,a,o,n,r,i){let s=o?.querySelector(".xyflow__viewport"),l=!1;if(!s)return{changes:[],updatedInternals:l};let u=[],d=window.getComputedStyle(s),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),l=!0;continue}let w=bm(p.nodeElement),y=g.measured.width!==w.width||g.measured.height!==w.height;if(!!(w.width&&w.height&&(y||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=is(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(b=Nk(b,w,C))}else m&&(b=ns(b,m,w));let v={...g,measured:w,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:mk("source",p.nodeElement,x,f,g.id),target:mk("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,v),g.parentId&&d0(v,t,a,{nodeOrigin:n,zIndexMode:i}),l=!0,y&&(u.push({id:g.id,type:"dimensions",dimensions:w}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:ql(v,n)}))}}if(c.length>0){let p=Sm(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:l}}async function qk({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function vk(e,t,a,o,n,r){let i=n,s=o.get(i)||new Map;o.set(i,s.set(a,t)),i=`${n}-${e}`;let l=o.get(i)||new Map;if(o.set(i,l.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function u0(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:s=null}=o,l={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:s},u=`${n}-${i}--${r}-${s}`,d=`${r}-${s}--${n}-${i}`;vk("source",l,d,e,n,i),vk("target",l,u,e,r,s),t.set(o.id,o)}}function Vk(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:Vk(a,t):!1}function Ck(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function O6(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!Vk(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let s=e.get(r);s&&n.set(r,{id:r,position:s.position||{x:0,y:0},distance:{x:a.x-s.internals.positionAbsolute.x,y:a.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return n}function Ob({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,s]of t){let l=a.get(i)?.internals.userNode;l&&n.push({...l,position:s.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function H6({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=Vl(r,t);return{x:i.x-r.x,y:i.y-r.y}}function Gk({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,s=new Map,l=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,w=null;function y({noDragClassName:x,handleSelector:m,domNode:b,isSelectable:v,nodeId:C,nodeClickDistance:S=0}){c=na(b);function k({x:H,y:U}){let{nodeLookup:L,nodeExtent:N,snapGrid:E,snapToGrid:M,nodeOrigin:A,onNodeDrag:O,onSelectionDrag:D,onError:B,updateNodePositions:z}=t();r={x:H,y:U};let j=!1,F=s.size>1,K=F&&N?Fb(Ul(s)):null,$=F&&M?H6({dragItems:s,snapGrid:E,x:H,y:U}):null;for(let[ee,q]of s){if(!L.has(ee))continue;let Q={x:H-q.distance.x,y:U-q.distance.y};M&&(Q=$?{x:Math.round(Q.x+$.x),y:Math.round(Q.y+$.y)}:Vl(Q,E));let ne=null;if(F&&N&&!q.extent&&K){let{positionAbsolute:ce}=q.internals,we=ce.x-K.x+N[0][0],_e=ce.x+q.measured.width-K.x2+N[1][0],Oe=ce.y-K.y+N[0][1],vt=ce.y+q.measured.height-K.y2+N[1][1];ne=[[we,Oe],[_e,vt]]}let{position:de,positionAbsolute:re}=Kb({nodeId:ee,nextPosition:Q,nodeLookup:L,nodeExtent:ne||N,nodeOrigin:A,onError:B});j=j||q.position.x!==de.x||q.position.y!==de.y,q.position=de,q.internals.positionAbsolute=re}if(g=g||j,!!j&&(z(s,!0),w&&(o||O||!C&&D))){let[ee,q]=Ob({nodeId:C,dragItems:s,nodeLookup:L});o?.(w,s,ee,q),O?.(w,ee,q),C||D?.(w,q)}}async function _(){if(!d)return;let{transform:H,panBy:U,autoPanSpeed:L,autoPanOnNodeDrag:N}=t();if(!N){l=!1,cancelAnimationFrame(i);return}let[E,M]=gm(u,d,L);(E!==0||M!==0)&&(r.x=(r.x??0)-E/H[2],r.y=(r.y??0)-M/H[2],await U({x:E,y:M})&&k(r)),i=requestAnimationFrame(_)}function T(H){let{nodeLookup:U,multiSelectionActive:L,nodesDraggable:N,transform:E,snapGrid:M,snapToGrid:A,selectNodesOnDrag:O,onNodeDragStart:D,onSelectionDragStart:B,unselectNodesAndEdges:z}=t();f=!0,(!O||!v)&&!L&&C&&(U.get(C)?.selected||z()),v&&O&&C&&e?.(C);let j=Ku(H.sourceEvent,{transform:E,snapGrid:M,snapToGrid:A,containerBounds:d});if(r=j,s=O6(U,N,j,C),s.size>0&&(a||D||!C&&B)){let[F,K]=Ob({nodeId:C,dragItems:s,nodeLookup:U});a?.(H.sourceEvent,s,F,K),D?.(H.sourceEvent,F,K),C||B?.(H.sourceEvent,K)}}let R=Vp().clickDistance(S).on("start",H=>{let{domNode:U,nodeDragThreshold:L,transform:N,snapGrid:E,snapToGrid:M}=t();d=U?.getBoundingClientRect()||null,p=!1,g=!1,w=H.sourceEvent,L===0&&T(H),r=Ku(H.sourceEvent,{transform:N,snapGrid:E,snapToGrid:M,containerBounds:d}),u=Vo(H.sourceEvent,d)}).on("drag",H=>{let{autoPanOnNodeDrag:U,transform:L,snapGrid:N,snapToGrid:E,nodeDragThreshold:M,nodeLookup:A}=t(),O=Ku(H.sourceEvent,{transform:L,snapGrid:N,snapToGrid:E,containerBounds:d});if(w=H.sourceEvent,(H.sourceEvent.type==="touchmove"&&H.sourceEvent.touches.length>1||C&&!A.has(C))&&(p=!0),!p){if(!l&&U&&f&&(l=!0,_()),!f){let D=Vo(H.sourceEvent,d),B=D.x-u.x,z=D.y-u.y;Math.sqrt(B*B+z*z)>M&&T(H)}(r.x!==O.xSnapped||r.y!==O.ySnapped)&&s&&f&&(u=Vo(H.sourceEvent,d),k(O))}}).on("end",H=>{if(!f||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(l=!1,f=!1,cancelAnimationFrame(i),s.size>0){let{nodeLookup:U,updateNodePositions:L,onNodeDragStop:N,onSelectionDragStop:E}=t();if(g&&(L(s,!1),g=!1),n||N||!C&&E){let[M,A]=Ob({nodeId:C,dragItems:s,nodeLookup:U,dragging:!1});n?.(H.sourceEvent,s,M,A),N?.(H.sourceEvent,M,A),C||E?.(H.sourceEvent,A)}}}).filter(H=>{let U=H.target;return!H.button&&(!x||!Ck(U,`.${x}`,b))&&(!m||Ck(U,m,b))});c.call(R)}function h(){c?.on(".drag",null)}return{update:y,destroy:h}}function B6(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())$u(n,ql(r))>0&&o.push(r);return o}var F6=250;function U6(e,t,a,o){let n=[],r=1/0,i=B6(e,a,t+F6);for(let s of i){let l=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of l){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=ui(s,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let s=o.type==="source"?"target":"source";return n.find(l=>l.type===s)??n[0]}return n[0]}function jk(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let s=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],l=(a?s?.find(u=>u.id===a):s?.[0])??null;return l&&r?{...l,...ui(i,l,l.position,!0)}:l}function Xk(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function q6(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var Wk=()=>!0;function V6(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:s,nodeLookup:l,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:w,onConnectEnd:y,isValidConnection:h=Wk,onReconnectEnd:x,updateConnection:m,getTransform:b,getFromHandle:v,autoPanSpeed:C,dragThreshold:S=1,handleDomNode:k}){let _=a0(e.target),T=0,R,{x:H,y:U}=Vo(e),L=Xk(r,k),N=s?.getBoundingClientRect(),E=!1;if(!N||!L)return;let M=jk(n,L,o,l,t);if(!M)return;let A=Vo(e,N),O=!1,D=null,B=!1,z=null;function j(){if(!d||!N)return;let[de,re]=gm(A,N,C);c({x:de,y:re}),T=requestAnimationFrame(j)}let F={...M,nodeId:n,type:L,position:M.position},K=l.get(n),ee={inProgress:!0,isValid:null,from:ui(K,F,ie.Left,!0),fromHandle:F,fromPosition:F.position,fromNode:K,to:A,toHandle:null,toPosition:fk[F.position],toNode:null,pointer:A};function q(){E=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}S===0&&q();function Q(de){if(!E){let{x:vt,y:Ct}=Vo(de),lo=vt-H,oe=Ct-U;if(!(lo*lo+oe*oe>S*S))return;q()}if(!v()||!F){ne(de);return}let re=b();A=Vo(de,N),R=U6(Gl(A,re,!1,[1,1]),a,l,F),O||(j(),O=!0);let ce=Yk(de,{handle:R,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:h,doc:_,lib:u,flowId:f,nodeLookup:l});z=ce.handleDomNode,D=ce.connection,B=q6(!!R,ce.isValid);let we=l.get(n),_e=we?ui(we,F,ie.Left,!0):ee.from,Oe={...ee,from:_e,isValid:B,to:ce.toHandle&&B?rs({x:ce.toHandle.x,y:ce.toHandle.y},re):A,toHandle:ce.toHandle,toPosition:B&&ce.toHandle?ce.toHandle.position:fk[F.position],toNode:ce.toHandle?l.get(ce.toHandle.nodeId):null,pointer:A};m(Oe),ee=Oe}function ne(de){if(!("touches"in de&&de.touches.length>0)){if(E){(R||z)&&D&&B&&w?.(D);let{inProgress:re,...ce}=ee,we={...ce,toPosition:ee.toHandle?ee.toPosition:null};y?.(de,we),r&&x?.(de,we)}p(),cancelAnimationFrame(T),O=!1,B=!1,D=null,z=null,_.removeEventListener("mousemove",Q),_.removeEventListener("mouseup",ne),_.removeEventListener("touchmove",Q),_.removeEventListener("touchend",ne)}}_.addEventListener("mousemove",Q),_.addEventListener("mouseup",ne),_.addEventListener("touchmove",Q),_.addEventListener("touchend",ne)}function Yk(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:s,flowId:l,isValidConnection:u=Wk,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${s}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Vo(e),w=i.elementFromPoint(p,g),y=w?.classList.contains(`${s}-flow__handle`)?w:c,h={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let x=Xk(void 0,y),m=y.getAttribute("data-nodeid"),b=y.getAttribute("data-handleid"),v=y.classList.contains("connectable"),C=y.classList.contains("connectableend");if(!m||!x)return h;let S={source:f?m:o,sourceHandle:f?b:n,target:f?o:m,targetHandle:f?n:b};h.connection=S;let _=v&&C&&(a===di.Strict?f&&x==="source"||!f&&x==="target":m!==o||b!==n);h.isValid=_&&u(S),h.toHandle=jk(m,x,b,d,a,!0)}return h}var km={onPointerDown:V6,isValid:Yk};function Kk({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=na(e);function r({translateExtent:s,width:l,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),v=m.sourceEvent.ctrlKey&&jl()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,S=b[2]*Math.pow(2,C*v);t.scaleTo(S)},w=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let v=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[v[0]-w[0],v[1]-w[1]];w=v;let S=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),k={x:b[0]-C[0]*S,y:b[1]-C[1]*S},_=[[0,0],[l,u]];t.setViewportConstrained({x:k.x,y:k.y,zoom:b[2]},_,s)},x=um().on("start",y).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(x,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:Pa}}var Lm=e=>({x:e.x,y:e.y,zoom:e.k}),Hb=({x:e,y:t,zoom:a})=>os.translate(e,t).scale(a),li=(e,t)=>e.target.closest(`.${t}`),Zk=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),G6=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Bb=(e,t=0,a=G6,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},$k=e=>{let t=e.ctrlKey&&jl()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function j6({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:s,onPanZoom:l,onPanZoomEnd:u}){return d=>{if(li(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let y=Pa(d),h=$k(d),x=f*Math.pow(2,h);o.scaleTo(a,x,y,d);return}let c=d.deltaMode===1?20:1,p=n===en.Vertical?0:d.deltaX*c,g=n===en.Horizontal?0:d.deltaY*c;!jl()&&d.shiftKey&&n!==en.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let w=Lm(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?l?.(d,w):(e.isPanScrolling=!0,s?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function X6({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,s=li(o,e);if(o.ctrlKey&&r&&s&&o.preventDefault(),i||s)return null;o.preventDefault(),a.call(this,o,n)}}function W6({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Lm(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function Y6({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&Zk(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Lm(r.transform))}}function K6({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&Zk(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let s=Lm(i.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,s)},a?150:0)}}}function Z6({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:s,noWheelClassName:l,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(li(c,`${d}-flow__node`)||li(c,`${d}-flow__edge`)||li(c,`${d}-flow__selection`)||li(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||s||f&&!w||li(c,l)&&w||li(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let y=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&y}}function Qk({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:s,onDraggingChange:l}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(U=>{let L=U[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=um().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=na(e).call(p);b({x:n.x,y:n.y,zoom:Bl(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=g.on("wheel.zoom"),y=g.on("dblclick.zoom");p.wheelDelta($k);async function h(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?cr:es).transform(Bb(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function x({noWheelClassName:U,noPanClassName:L,onPaneContextMenu:N,userSelectionActive:E,panOnScroll:M,panOnDrag:A,panOnScrollMode:O,panOnScrollSpeed:D,preventScrolling:B,zoomOnPinch:z,zoomOnScroll:j,zoomOnDoubleClick:F,panActivationKeyPressed:K=!1,zoomActivationKeyPressed:$,lib:ee,onTransformChange:q,connectionInProgress:Q,paneClickDistance:ne,selectionOnDrag:de}){E&&!u.isZoomingOrPanning&&m();let re=M&&!$&&!E;p.clickDistance(de?1/0:!qo(ne)||ne<0?0:ne);let ce=re?j6({zoomPanValues:u,noWheelClassName:U,d3Selection:g,d3Zoom:p,panOnScrollMode:O,panOnScrollSpeed:D,zoomOnPinch:z,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:s}):X6({noWheelClassName:U,preventScrolling:B,d3ZoomHandler:w});g.on("wheel.zoom",ce,{passive:!1});let we=W6({zoomPanValues:u,onDraggingChange:l,onPanZoomStart:i});p.on("start",we);let _e=Y6({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!N,onPanZoom:r,onTransformChange:q});p.on("zoom",_e);let Oe=K6({zoomPanValues:u,panOnDrag:A,panOnScroll:M,onPaneContextMenu:N,onPanZoomEnd:s,onDraggingChange:l});p.on("end",Oe);let vt=Z6({panActivationKeyPressed:K,zoomActivationKeyPressed:$,panOnDrag:A,zoomOnScroll:j,panOnScroll:M,zoomOnDoubleClick:F,zoomOnPinch:z,userSelectionActive:E,noPanClassName:L,noWheelClassName:U,lib:ee,connectionInProgress:Q});p.filter(vt),F?g.on("dblclick.zoom",y):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(U,L,N){let E=Hb(U),M=p?.constrain()(E,L,N);return M&&await h(M),M}async function v(U,L){let N=Hb(U);return await h(N,L),N}function C(U){if(g){let L=Hb(U),N=g.property("__zoom");(N.k!==U.zoom||N.x!==U.x||N.y!==U.y)&&p?.transform(g,L,null,{sync:!0})}}function S(){let U=g?Yu(g.node()):{x:0,y:0,k:1};return{x:U.x,y:U.y,zoom:U.k}}async function k(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?cr:es).scaleTo(Bb(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}async function _(U,L){return g?new Promise(N=>{p?.interpolate(L?.interpolate==="linear"?cr:es).scaleBy(Bb(g,L?.duration,L?.ease,()=>N(!0)),U)}):!1}function T(U){p?.scaleExtent(U)}function R(U){p?.translateExtent(U)}function H(U){let L=!qo(U)||U<0?0:U;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:v,setViewportConstrained:b,getViewport:S,scaleTo:k,scaleBy:_,setScaleExtent:T,setTranslateExtent:R,syncViewport:C,setClickDistance:H}}var ci;(function(e){e.Line="line",e.Handle="handle"})(ci||(ci={}));function $6({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,s=a-o,l=[i>0?1:i<0?-1:0,s>0?1:s<0?-1:0];return i&&n&&(l[0]=l[0]*-1),s&&r&&(l[1]=l[1]*-1),l}function Sk(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function ii(e,t){return Math.max(0,t-e)}function si(e,t){return Math.max(0,e-t)}function fm(e,t,a){return Math.max(0,t-e,e-a)}function kk(e,t){return e?!t:t}function Q6(e,t,a,o,n,r,i,s){let{affectsX:l,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:w,maxWidth:y,minHeight:h,maxHeight:x}=o,{x:m,y:b,width:v,height:C,aspectRatio:S}=e,k=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?g-e.pointerY:0),T=v+(l?-k:k),R=C+(u?-_:_),H=-r[0]*v,U=-r[1]*C,L=fm(T,w,y),N=fm(R,h,x);if(i){let A=0,O=0;l&&k<0?A=ii(m+k+H,i[0][0]):!l&&k>0&&(A=si(m+T+H,i[1][0])),u&&_<0?O=ii(b+_+U,i[0][1]):!u&&_>0&&(O=si(b+R+U,i[1][1])),L=Math.max(L,A),N=Math.max(N,O)}if(s){let A=0,O=0;l&&k>0?A=si(m+k,s[0][0]):!l&&k<0&&(A=ii(m+T,s[1][0])),u&&_>0?O=si(b+_,s[0][1]):!u&&_<0&&(O=ii(b+R,s[1][1])),L=Math.max(L,A),N=Math.max(N,O)}if(n){if(d){let A=fm(T/S,h,x)*S;if(L=Math.max(L,A),i){let O=0;!l&&!u||l&&!u&&c?O=si(b+U+T/S,i[1][1])*S:O=ii(b+U+(l?k:-k)/S,i[0][1])*S,L=Math.max(L,O)}if(s){let O=0;!l&&!u||l&&!u&&c?O=ii(b+T/S,s[1][1])*S:O=si(b+(l?k:-k)/S,s[0][1])*S,L=Math.max(L,O)}}if(f){let A=fm(R*S,w,y)/S;if(N=Math.max(N,A),i){let O=0;!l&&!u||u&&!l&&c?O=si(m+R*S+H,i[1][0])/S:O=ii(m+(u?_:-_)*S+H,i[0][0])/S,N=Math.max(N,O)}if(s){let O=0;!l&&!u||u&&!l&&c?O=ii(m+R*S,s[1][0])/S:O=si(m+(u?_:-_)*S,s[0][0])/S,N=Math.max(N,O)}}}_=_+(_<0?N:-N),k=k+(k<0?L:-L),n&&(c?T>R*S?_=(kk(l,u)?-k:k)/S:k=(kk(l,u)?-_:_)*S:d?(_=k/S,u=l):(k=_*S,l=u));let E=l?m+k:m,M=u?b+_:b;return{width:v+(l?-k:k),height:C+(u?-_:_),x:r[0]*k*(l?-1:1)+E,y:r[1]*_*(u?-1:1)+M}}var Jk={width:0,height:0,x:0,y:0},J6={...Jk,pointerX:0,pointerY:0,aspectRatio:1};function e8(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,s=a[0]*r,l=a[1]*i;return[[o-s,n-l],[o+r-s,n+i-l]]}function eL({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=na(e),i={controlDirection:Sk("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:w,shouldResize:y}){let h={...Jk},x={...J6};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:Sk(u)};let m,b=null,v=[],C,S,k,_=!1,T=Vp().on("start",R=>{let{nodeLookup:H,transform:U,snapGrid:L,snapToGrid:N,nodeOrigin:E,paneDomNode:M}=a();if(m=H.get(t),!m)return;b=M?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:O}=Ku(R.sourceEvent,{transform:U,snapGrid:L,snapToGrid:N,containerBounds:b});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:A,pointerY:O,aspectRatio:h.width/h.height},C=void 0,S=is(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=H.get(m.parentId)),C&&m.extent==="parent"&&(S=[[0,0],[C.measured.width,C.measured.height]]),v=[],k=void 0;for(let[D,B]of H)if(B.parentId===t&&(v.push({id:D,position:{...B.position},extent:B.extent}),B.extent==="parent"||B.expandParent)){let z=e8(B,m,B.origin??E);k?k=[[Math.min(z[0][0],k[0][0]),Math.min(z[0][1],k[0][1])],[Math.max(z[1][0],k[1][0]),Math.max(z[1][1],k[1][1])]]:k=z}p?.(R,{...h})}).on("drag",R=>{let{transform:H,snapGrid:U,snapToGrid:L,nodeOrigin:N}=a(),E=Ku(R.sourceEvent,{transform:H,snapGrid:U,snapToGrid:L,containerBounds:b}),M=[];if(!m)return;let{x:A,y:O,width:D,height:B}=h,z={},j=m.origin??N,{width:F,height:K,x:$,y:ee}=Q6(x,i.controlDirection,E,i.boundaries,i.keepAspectRatio,j,S,k),q=F!==D,Q=K!==B,ne=$!==A&&q,de=ee!==O&&Q;if(!ne&&!de&&!q&&!Q)return;if((ne||de||j[0]===1||j[1]===1)&&(z.x=ne?$:h.x,z.y=de?ee:h.y,h.x=z.x,h.y=z.y,v.length>0)){let _e=$-A,Oe=ee-O;for(let vt of v)vt.position={x:vt.position.x-_e+j[0]*(F-D),y:vt.position.y-Oe+j[1]*(K-B)},M.push(vt)}if((q||Q)&&(z.width=q&&(!i.resizeDirection||i.resizeDirection==="horizontal")?F:h.width,z.height=Q&&(!i.resizeDirection||i.resizeDirection==="vertical")?K:h.height,h.width=z.width,h.height=z.height),C&&m.expandParent){let _e=j[0]*(z.width??0);z.x&&z.x<_e&&(h.x=_e,x.x=x.x-(z.x-_e));let Oe=j[1]*(z.height??0);z.y&&z.y<Oe&&(h.y=Oe,x.y=x.y-(z.y-Oe))}let re=$6({width:h.width,prevWidth:D,height:h.height,prevHeight:B,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),ce={...h,direction:re};y?.(R,ce)!==!1&&(_=!0,g?.(R,ce),o(z,M))}).on("end",R=>{_&&(w?.(R,{...h}),n?.({...h}),_=!1)});r.call(T)}function l(){r.on(".drag",null)}return{update:s,destroy:l}}var pL=I(J(),1),mL=I(lL(),1);var uL={},dL=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(uL.env?uL.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,l);return l},cL=e=>e?dL(e):dL;var{useDebugValue:b8}=pL.default,{useSyncExternalStoreWithSelector:w8}=mL.default,y8=e=>e;function f0(e,t=y8,a){let o=w8(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return b8(o),o}var fL=(e,t)=>{let a=cL(e),o=(n,r=t)=>f0(a,n,r);return Object.assign(o,a),o},gL=(e,t)=>e?fL(e,t):fL;function Je(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var v8=I(ea()),Em=(0,G.createContext)(null),C8=Em.Provider,qL=yo.error001("react");function Me(e,t){let a=(0,G.useContext)(Em);if(a===null)throw new Error(qL);return f0(a,e,t)}function ct(){let e=(0,G.useContext)(Em);if(e===null)throw new Error(qL);return(0,G.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var hL={display:"none"},S8={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},VL="react-flow__node-desc",GL="react-flow__edge-desc",k8="react-flow__aria-live",L8=e=>e.ariaLiveMessage,_8=e=>e.ariaLabelConfig;function I8({rfId:e}){let t=Me(L8);return(0,V.jsx)("div",{id:`${k8}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:S8,children:t})}function M8({rfId:e,disableKeyboardA11y:t}){let a=Me(_8);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{id:`${VL}-${e}`,style:hL,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,V.jsx)("div",{id:`${GL}-${e}`,style:hL,children:a["edge.a11yDescription.default"]}),!t&&(0,V.jsx)(I8,{rfId:e})]})}var Tm=(0,G.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,V.jsx)("div",{className:_t(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Tm.displayName="Panel";var xL="https://reactflow.dev?utm_source=attribution";function N8({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,V.jsx)(Tm,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${xL}`,children:(0,V.jsx)("a",{href:xL,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var E8=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Im=e=>e.id;function T8(e,t){return Je(e.selectedNodes.map(Im),t.selectedNodes.map(Im))&&Je(e.selectedEdges.map(Im),t.selectedEdges.map(Im))}function A8({onSelectionChange:e}){let t=ct(),{selectedNodes:a,selectedEdges:o}=Me(E8,T8);return(0,G.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var D8=e=>!!e.onSelectionChangeHandlers;function R8({onSelectionChange:e}){let t=Me(D8);return e||t?(0,V.jsx)(A8,{onSelectionChange:e}):null}var jL=[0,0],P8={x:0,y:0,zoom:1},z8=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],bL=[...z8,"rfId"],O8=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),wL={translateExtent:Fl,nodeOrigin:jL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function H8(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:s,setDefaultNodesAndEdges:l}=Me(O8,Je),u=ct();(0,G.useEffect)(()=>(l(e.defaultNodes,e.defaultEdges),()=>{d.current=wL,s()}),[]);let d=(0,G.useRef)(wL);return(0,G.useEffect)(()=>{for(let f of bL){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:Ak(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},bL.map(f=>e[f])),null}function yL(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function B8(e){let[t,a]=(0,G.useState)(e==="system"?null:e);return(0,G.useEffect)(()=>{if(e!=="system"){a(e);return}let o=yL(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:yL()?.matches?"dark":"light"}var vL=typeof document<"u"?document:null;function ec(e=null,t={target:vL,actInsideInputWithModifier:!0}){let[a,o]=(0,G.useState)(!1),n=(0,G.useRef)(!1),r=(0,G.useRef)(new Set([])),[i,s]=(0,G.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,G.useEffect)(()=>{let l=t?.target??vL,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&o0(p))return!1;let w=SL(p.code,s);if(r.current.add(p[w]),CL(i,r.current,!1)){let y=p.composedPath?.()?.[0]||p.target,h=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=SL(p.code,s);CL(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return l?.addEventListener("keydown",d),l?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{l?.removeEventListener("keydown",d),l?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function CL(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function SL(e,t){return t.includes(e)?"code":"key"}var F8=()=>{let e=ct();return(0,G.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:s}=e.getState(),l=Qu(t,o,n,r,i,a?.padding??.1);return s?(await s.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:s,y:l}=i.getBoundingClientRect(),u={x:t.x-s,y:t.y-l},d=a.snapGrid??n,f=a.snapToGrid??r;return Gl(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=rs(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function XL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let s={...r};for(let l of i)U8(l,s);a.push(s)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function U8(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function h0(e,t){return XL(e,t)}function x0(e,t){return XL(e,t)}function ss(e,t){return{id:e,type:"select",selected:t}}function Yl(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(ss(r.id,i)))}return o}function kL({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),s=i?.internals?.userNode??i;s!==void 0&&s!==r&&a.push({id:r.id,item:r,type:"replace"}),s===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function LL(e){return{id:e.id,type:"remove"}}var q8=Qb("React Flow","https://reactflow.dev/");function V8(e,t,a={}){return Pk(e,t,{...a,onError:a.onError??q8})}var _L=e=>Lk(e),G8=e=>jb(e);function WL(e){return(0,G.forwardRef)(e)}var YL=typeof window<"u"?G.useLayoutEffect:G.useEffect;function IL(e){let[t,a]=(0,G.useState)(BigInt(0)),[o]=(0,G.useState)(()=>j8(()=>a(n=>n+BigInt(1))));return YL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function j8(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var KL=(0,G.createContext)(null);function X8({children:e}){let t=ct(),a=(0,G.useCallback)(s=>{let{nodes:l=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),w=l;for(let h of s)w=typeof h=="function"?h(w):h;let y=kL({items:w,lookup:c});for(let h of g.values())y=h(y);d&&u(w),y.length>0?f?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=IL(a),n=(0,G.useCallback)(s=>{let{edges:l=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=l;for(let g of s)p=typeof g=="function"?g(p):g;d?u(p):f&&f(kL({items:p,lookup:c}))},[]),r=IL(n),i=(0,G.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,V.jsx)(KL.Provider,{value:i,children:e})}function W8(){let e=(0,G.useContext)(KL);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var Y8=e=>!!e.panZoom;function Ca(){let e=F8(),t=ct(),a=W8(),o=Me(Y8),n=(0,G.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},s=f=>{a.edgeQueue.push(f)},l=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=_L(f)?f:c.get(f.id),w=g.parentId?e0(g.position,g.measured,g.parentId,c,p):g.position,y={...g,position:w,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return ql(y)},u=(f,c,p={replace:!1})=>{i(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&_L(y)?y:{...w,...y}}return w}))},d=(f,c,p={replace:!1})=>{s(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&G8(y)?y:{...w,...y}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:s,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,w,y]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y:w,zoom:y}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:w,onEdgesDelete:y,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:v,edges:C}=await Mk({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:b}),S=C.length>0,k=v.length>0;if(S){let _=C.map(LL);y?.(C),x(_)}if(k){let _=v.map(LL);w?.(v),h(_)}return(k||S)&&m?.({nodes:v,edges:C}),{deletedNodes:v,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=$b(f),w=g?f:l(f),y=p!==void 0;return w?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=ql(y?h:x),b=$u(m,w);return c&&b>0||b>=m.width*m.height||b>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=$b(f)?f:l(f);if(!w)return!1;let y=$u(w,c);return p&&y>0||y>=c.width*c.height||y>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Yb(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??Tk();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,G.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var ML=e=>e.selected,K8=typeof window<"u"?window:void 0;function Z8({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=ct(),{deleteElements:o}=Ca(),n=ec(e,{actInsideInputWithModifier:!1}),r=ec(t,{target:K8});(0,G.useEffect)(()=>{if(n){let{edges:i,nodes:s}=a.getState();o({nodes:s.filter(ML),edges:i.filter(ML)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,G.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function $8(e){let t=ct();(0,G.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=bm(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",yo.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Am={position:"absolute",width:"100%",height:"100%",top:0,left:0},Q8=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function J8({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=en.Free,zoomOnDoubleClick:s=!0,panOnDrag:l=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:w,noWheelClassName:y,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:v}){let C=ct(),S=(0,G.useRef)(null),{userSelectionActive:k,lib:_,connectionInProgress:T}=Me(Q8,Je),R=ec(p),H=(0,G.useRef)();$8(S);let U=(0,G.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[x,m]);return(0,G.useEffect)(()=>{if(S.current){H.current=Qk({domNode:S.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:M=>C.setState(A=>A.paneDragging===M?A:{paneDragging:M}),onPanZoomStart:(M,A)=>{let{onViewportChangeStart:O,onMoveStart:D}=C.getState();D?.(M,A),O?.(A)},onPanZoom:(M,A)=>{let{onViewportChange:O,onMove:D}=C.getState();D?.(M,A),O?.(A)},onPanZoomEnd:(M,A)=>{let{onViewportChangeEnd:O,onMoveEnd:D}=C.getState();D?.(M,A),O?.(A)}});let{x:L,y:N,zoom:E}=H.current.getViewport();return C.setState({panZoom:H.current,transform:[L,N,E],domNode:S.current.closest(".react-flow")}),()=>{H.current?.destroy()}}},[]),(0,G.useEffect)(()=>{H.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:s,panOnDrag:l,zoomActivationKeyPressed:R,preventScrolling:g,noPanClassName:h,userSelectionActive:k,noWheelClassName:y,lib:_,onTransformChange:U,connectionInProgress:T,selectionOnDrag:v,paneClickDistance:b})},[e,t,a,o,n,r,i,s,l,R,g,h,k,y,_,U,T,v,b]),(0,V.jsx)("div",{className:"react-flow__renderer",ref:S,style:Am,children:w})}var eD=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function tD(){let{userSelectionActive:e,userSelectionRect:t}=Me(eD,Je);return e&&t?(0,V.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var p0=(e,t)=>a=>{a.target===t.current&&e?.(a)},aD=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function oD({isSelecting:e,selectionKeyPressed:t,selectionMode:a=pr.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:s,onSelectionEnd:l,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:w}){let y=(0,G.useRef)(0),h=ct(),{userSelectionActive:x,elementsSelectable:m,dragging:b,panBy:v,autoPanSpeed:C}=Me(aD,Je),S=m&&(e||x),k=(0,G.useRef)(null),_=(0,G.useRef)(),T=(0,G.useRef)(new Set),R=(0,G.useRef)(new Set),H=(0,G.useRef)(!1),U=(0,G.useRef)(!1),L=(0,G.useRef)({x:0,y:0}),N=(0,G.useRef)(!1),E=q=>{if(U.current||H.current||h.getState().connection.inProgress){U.current=!1,H.current=!1;return}u?.(q),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},M=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}d?.(q)},A=f?q=>f(q):void 0,O=q=>{U.current&&(q.stopPropagation(),U.current=!1)},D=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Q,transform:ne}=h.getState();if(_.current=Q?.getBoundingClientRect(),!_.current)return;let de=q.target===k.current;if(!de&&!!q.target.closest(".nokey")||!e||!(i&&de||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),U.current=!1;let{x:we,y:_e}=Vo(q.nativeEvent,_.current),Oe=Gl({x:we,y:_e},ne);h.setState({userSelectionRect:{width:0,height:0,startX:Oe.x,startY:Oe.y,x:we,y:_e}}),de||(q.stopPropagation(),q.preventDefault())};function B(q,Q){let{userSelectionRect:ne}=h.getState();if(!ne)return;let{transform:de,nodeLookup:re,edgeLookup:ce,connectionLookup:we,triggerNodeChanges:_e,triggerEdgeChanges:Oe,defaultEdgeOptions:vt}=h.getState(),Ct={x:ne.startX,y:ne.startY},{x:lo,y:oe}=rs(Ct,de),Ie={startX:Ct.x,startY:Ct.y,x:q<lo?q:lo,y:Q<oe?Q:oe,width:Math.abs(q-lo),height:Math.abs(Q-oe)},it=T.current,St=R.current;T.current=new Set(mm(re,Ie,de,a===pr.Partial,!0).map(Qt=>Qt.id)),R.current=new Set;let Fe=vt?.selectable??!0;for(let Qt of T.current){let Et=we.get(Qt);if(Et)for(let{edgeId:Ga}of Et.values()){let qn=ce.get(Ga);qn&&(qn.selectable??Fe)&&R.current.add(Ga)}}if(!t0(it,T.current)){let Qt=Yl(re,T.current,!0);_e(Qt)}if(!t0(St,R.current)){let Qt=Yl(ce,R.current);Oe(Qt)}h.setState({userSelectionRect:Ie,userSelectionActive:!0,nodesSelectionActive:!1})}function z(){if(!n||!_.current)return;let[q,Q]=gm(L.current,_.current,C);v({x:q,y:Q}).then(ne=>{if(!U.current||!ne){y.current=requestAnimationFrame(z);return}let{x:de,y:re}=L.current;B(de,re),y.current=requestAnimationFrame(z)})}let j=()=>{cancelAnimationFrame(y.current),y.current=0,N.current=!1};(0,G.useEffect)(()=>()=>j(),[]);let F=q=>{let{userSelectionRect:Q,transform:ne,resetSelectedElements:de}=h.getState();if(!_.current||!Q)return;let{x:re,y:ce}=Vo(q.nativeEvent,_.current);L.current={x:re,y:ce};let we=rs({x:Q.startX,y:Q.startY},ne);if(!U.current){let _e=t?0:r;if(Math.hypot(re-we.x,ce-we.y)<=_e)return;de(),s?.(q)}U.current=!0,N.current||(z(),N.current=!0),B(re,ce)},K=q=>{if(!S){q.target===k.current&&h.getState().connection.inProgress&&(H.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!x&&q.target===k.current&&h.getState().userSelectionRect&&E?.(q),h.setState({userSelectionActive:!1,userSelectionRect:null}),U.current&&(l?.(q),h.setState({nodesSelectionActive:T.current.size>0})),j())},$=q=>{q.target?.releasePointerCapture?.(q.pointerId),j()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,V.jsxs)("div",{className:_t(["react-flow__pane",{draggable:ee,dragging:b,selection:e}]),onClick:S?void 0:p0(E,k),onContextMenu:p0(M,k),onWheel:p0(A,k),onPointerEnter:S?void 0:c,onPointerMove:S?F:p,onPointerUp:K,onPointerCancel:S?$:void 0,onPointerDownCapture:S?D:void 0,onClickCapture:S?O:void 0,onPointerLeave:g,ref:k,style:Am,children:[w,(0,V.jsx)(tD,{})]})}function g0({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:s,onError:l}=t.getState(),u=s.get(e);if(!u){l?.("012",yo.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function ZL({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let s=ct(),[l,u]=(0,G.useState)(!1),d=(0,G.useRef)();return(0,G.useEffect)(()=>{if(!t)return d.current=Gk({getStoreItems:()=>s.getState(),onNodeMouseDown:f=>{g0({id:f,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,s,e]),(0,G.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),l}var nD=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function $L(){let e=ct();return(0,G.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:s,updateNodePositions:l,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=nD(i),p=n?r[0]:5,g=n?r[1]:5,w=a.direction.x*p*a.factor,y=a.direction.y*g*a.factor;for(let[,h]of u){if(!c(h))continue;let x={x:h.internals.positionAbsolute.x+w,y:h.internals.positionAbsolute.y+y};n&&(x=Vl(x,r));let{position:m,positionAbsolute:b}=Kb({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:s});h.position=m,h.internals.positionAbsolute=b,f.set(h.id,h)}l(f)},[])}var b0=(0,G.createContext)(null),rD=b0.Provider;b0.Consumer;var QL=()=>(0,G.useContext)(b0),iD=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),JL=(0,G.createContext)(null);function sD({children:e}){let t=Me(iD,Je);return(0,V.jsx)(JL.Provider,{value:t,children:e})}function lD(){let e=(0,G.useContext)(JL);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var dD={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},uD=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:s,toHandle:l,isValid:u}=i;if(!s&&!n)return dD;let d=l?.nodeId===e&&l?.id===t&&l?.type===a;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===di.Strict?s?.type!==a:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!n,valid:d&&u}};function cD({type:e="source",position:t=ie.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:s,children:l,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=i||null,w=e==="target",y=ct(),h=QL(),{connectOnClick:x,noPanClassName:m,rfId:b}=lD(),{connectingFrom:v,connectingTo:C,clickConnecting:S,isPossibleEndHandle:k,connectionInProcess:_,clickConnectionInProcess:T,valid:R}=Me(uD(h,g,e),Je);h||y.getState().onError?.("010",yo.error010());let H=N=>{let{defaultEdgeOptions:E,onConnect:M,hasDefaultEdges:A}=y.getState(),O={...E,...N};if(A){let{edges:D,setEdges:B,onError:z}=y.getState();B(V8(O,D,{onError:z}))}M?.(O),s?.(O)},U=N=>{if(!h)return;let E=n0(N.nativeEvent);if(n&&(E&&N.button===0||!E)){let M=y.getState();km.onPointerDown(N.nativeEvent,{handleDomNode:N.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:w,handleId:g,nodeId:h,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...A)=>y.getState().onConnectEnd?.(...A),updateConnection:M.updateConnection,onConnect:H,isValidConnection:a||((...A)=>y.getState().isValidConnection?.(...A)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}E?d?.(N):f?.(N)},L=N=>{let{onClickConnectStart:E,onClickConnectEnd:M,connectionClickStartHandle:A,connectionMode:O,isValidConnection:D,lib:B,rfId:z,nodeLookup:j,connection:F}=y.getState();if(!h||!A&&!n)return;if(!A){E?.(N.nativeEvent,{nodeId:h,handleId:g,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let K=a0(N.target),$=a||D,{connection:ee,isValid:q}=km.isValid(N.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:O,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:$,flowId:z,doc:K,lib:B,nodeLookup:j});q&&ee&&H(ee);let Q=structuredClone(F);delete Q.inProgress,Q.toPosition=Q.toHandle?Q.toHandle.position:null,M?.(N,Q),y.setState({connectionClickStartHandle:null})};return(0,V.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${b}-${h}-${g}-${e}`,className:_t(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:S,connectingfrom:v,connectingto:C,valid:R,connectionindicator:o&&(!_||k)&&(_||T?r:n)}]),onMouseDown:U,onTouchStart:U,onClick:x?L:void 0,ref:p,...c,children:l})}var Kl=(0,G.memo)(WL(cD));function fD({data:e,isConnectable:t,sourcePosition:a=ie.Bottom}){return(0,V.jsxs)(V.Fragment,{children:[e?.label,(0,V.jsx)(Kl,{type:"source",position:a,isConnectable:t})]})}function pD({data:e,isConnectable:t,targetPosition:a=ie.Top,sourcePosition:o=ie.Bottom}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Kl,{type:"target",position:a,isConnectable:t}),e?.label,(0,V.jsx)(Kl,{type:"source",position:o,isConnectable:t})]})}function mD(){return null}function gD({data:e,isConnectable:t,targetPosition:a=ie.Top}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Kl,{type:"target",position:a,isConnectable:t}),e?.label]})}var Nm={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},NL={input:fD,default:pD,output:gD,group:mD};function hD(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var xD=e=>{let{width:t,height:a,x:o,y:n}=Ul(e.nodeLookup,{filter:r=>!!r.selected});return{width:qo(t)?t:null,height:qo(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function bD({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=ct(),{width:n,height:r,transformString:i,userSelectionActive:s}=Me(xD,Je),l=$L(),u=(0,G.useRef)(null);(0,G.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!s&&n!==null&&r!==null;if(ZL({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(w=>w.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Nm,p.key)&&(p.preventDefault(),l({direction:Nm[p.key],factor:p.shiftKey?4:1}))};return(0,V.jsx)("div",{className:_t(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,V.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var EL=typeof window<"u"?window:void 0,wD=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function e_({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:s,deleteKeyCode:l,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:w,zoomActivationKeyCode:y,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:k,autoPanOnSelection:_,defaultViewport:T,translateExtent:R,minZoom:H,maxZoom:U,preventScrolling:L,onSelectionContextMenu:N,noWheelClassName:E,noPanClassName:M,disableKeyboardA11y:A,onViewportChange:O,isControlledViewport:D}){let{nodesSelectionActive:B,userSelectionActive:z}=Me(wD,Je),j=ec(u,{target:EL}),F=ec(w,{target:EL}),K=F||k,$=F||b,ee=d&&K!==!0,q=j||z||ee;return Z8({deleteKeyCode:l,multiSelectionKeyCode:g}),(0,V.jsx)(J8,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:$,panActivationKeyPressed:F,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:S,panOnDrag:!j&&K,defaultViewport:T,translateExtent:R,minZoom:H,maxZoom:U,zoomActivationKeyCode:y,preventScrolling:L,noWheelClassName:E,noPanClassName:M,onViewportChange:O,isControlledViewport:D,paneClickDistance:s,selectionOnDrag:ee,children:(0,V.jsxs)(oD,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:K,autoPanOnSelection:_,isSelecting:!!q,selectionMode:f,selectionKeyPressed:j,paneClickDistance:s,selectionOnDrag:ee,children:[e,B&&(0,V.jsx)(bD,{onSelectionContextMenu:N,noPanClassName:M,disableKeyboardA11y:A})]})})}e_.displayName="FlowRenderer";var yD=(0,G.memo)(e_),vD=e=>t=>e?mm(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function CD(e){return Me((0,G.useCallback)(vD(e),[e]),Je)}var SD=e=>e.updateNodeInternals;function kD(){let e=Me(SD),[t]=(0,G.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,G.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function LD({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=ct(),r=(0,G.useRef)(null),i=(0,G.useRef)(null),s=(0,G.useRef)(e.sourcePosition),l=(0,G.useRef)(e.targetPosition),u=(0,G.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,G.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,G.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,G.useEffect)(()=>{if(r.current){let f=u.current!==t,c=s.current!==e.sourcePosition,p=l.current!==e.targetPosition;(f||c||p)&&(u.current=t,s.current=e.sourcePosition,l.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function _D({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:s,elementsSelectable:l,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:w,nodeTypes:y,nodeClickDistance:h,onError:x}){let{node:m,internals:b,isParent:v}=Me(q=>{let Q=q.nodeLookup.get(e),ne=q.parentLookup.has(e);return{node:Q,internals:Q.internals,isParent:ne}},Je),C=m.type||"default",S=y?.[C]||NL[C];S===void 0&&(x?.("003",yo.error003(C)),C="default",S=y?.default||NL.default);let k=!!(m.draggable||s&&typeof m.draggable>"u"),_=!!(m.selectable||l&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||d&&typeof m.focusable>"u"),H=ct(),U=Jb(m),L=LD({node:m,nodeType:C,hasDimensions:U,resizeObserver:f}),N=ZL({nodeRef:L,disabled:m.hidden||!k,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:h}),E=$L();if(m.hidden)return null;let M=Go(m),A=hD(m),O=_||k||t||a||o||n,D=a?q=>a(q,{...b.userNode}):void 0,B=o?q=>o(q,{...b.userNode}):void 0,z=n?q=>n(q,{...b.userNode}):void 0,j=r?q=>r(q,{...b.userNode}):void 0,F=i?q=>i(q,{...b.userNode}):void 0,K=q=>{let{selectNodesOnDrag:Q,nodeDragThreshold:ne}=H.getState();_&&(!Q||!k||ne>0)&&g0({id:e,store:H,nodeRef:L}),t&&t(q,{...b.userNode})},$=q=>{if(!(o0(q.nativeEvent)||g)){if(Ub.includes(q.key)&&_){let Q=q.key==="Escape";g0({id:e,store:H,unselect:Q,nodeRef:L})}else if(k&&m.selected&&Object.prototype.hasOwnProperty.call(Nm,q.key)){q.preventDefault();let{ariaLabelConfig:Q}=H.getState();H.setState({ariaLiveMessage:Q["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),E({direction:Nm[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:Q,height:ne,autoPanOnNodeFocus:de,setCenter:re}=H.getState();if(!de)return;mm(new Map([[e,m]]),{x:0,y:0,width:Q,height:ne},q,!0).length>0||re(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:q[2]})};return(0,V.jsx)("div",{className:_t(["react-flow__node",`react-flow__node-${C}`,{[p]:k},m.className,{selected:m.selected,selectable:_,parent:v,draggable:k,dragging:N}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:O?"all":"none",visibility:U?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:D,onMouseMove:B,onMouseLeave:z,onContextMenu:j,onClick:K,onDoubleClick:F,onKeyDown:R?$:void 0,tabIndex:R?0:void 0,onFocus:R?ee:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${VL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,V.jsx)(rD,{value:e,children:(0,V.jsx)(S,{id:e,data:m.data,type:C,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:k,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:N,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...M})})})}var ID=(0,G.memo)(_D),MD=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function t_(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=Me(MD,Je),r=CD(e.onlyRenderVisibleElements),i=kD();return(0,V.jsx)("div",{className:"react-flow__nodes",style:Am,children:r.map(s=>(0,V.jsx)(ID,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},s))})}t_.displayName="NodeRenderer";var ND=(0,G.memo)(t_);function ED(e){return Me((0,G.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&Rk({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Je)}var TD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,V.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},AD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,V.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},TL={[Hl.Arrow]:TD,[Hl.ArrowClosed]:AD};function DD(e){let t=ct();return(0,G.useMemo)(()=>Object.prototype.hasOwnProperty.call(TL,e)?TL[e]:(t.getState().onError?.("009",yo.error009(e)),null),[e])}var RD=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:s="auto-start-reverse"})=>{let l=DD(t);return l?(0,V.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:s,refX:"0",refY:"0",children:(0,V.jsx)(l,{color:a,strokeWidth:i})}):null},a_=({defaultColor:e,rfId:t})=>{let a=Me(r=>r.edges),o=Me(r=>r.defaultEdgeOptions),n=(0,G.useMemo)(()=>Ok(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,V.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,V.jsx)("defs",{children:n.map(r=>(0,V.jsx)(RD,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};a_.displayName="MarkerDefinitions";var PD=(0,G.memo)(a_);function o_({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:s=2,children:l,className:u,...d}){let[f,c]=(0,G.useState)({x:1,y:0,width:0,height:0}),p=_t(["react-flow__edge-textwrapper",u]),g=(0,G.useRef)(null);return(0,G.useEffect)(()=>{if(g.current){let w=g.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,V.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,V.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:s,ry:s}),(0,V.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),l]}):null}o_.displayName="EdgeText";var zD=(0,G.memo)(o_);function Zl({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:s,labelBgBorderRadius:l,interactionWidth:u=20,...d}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("path",{...d,d:e,fill:"none",className:_t(["react-flow__edge-path",d.className])}),u?(0,V.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&qo(t)&&qo(a)?(0,V.jsx)(zD,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:s,labelBgBorderRadius:l}):null]})}function AL({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ie.Left||e===ie.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function n_({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top}){let[i,s]=AL({pos:a,x1:e,y1:t,x2:o,y2:n}),[l,u]=AL({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=wm({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:l,targetControlY:u});return[`M${e},${t} C${i},${s} ${l},${u} ${o},${n}`,d,f,c,p]}function r_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:s,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})=>{let[x,m,b]=n_({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:s}),v=e.isInternal?void 0:t;return(0,V.jsx)(Zl,{id:v,path:x,labelX:m,labelY:b,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})})}var OD=r_({isInternal:!1}),i_=r_({isInternal:!0});OD.displayName="SimpleBezierEdge";i_.displayName="SimpleBezierEdgeInternal";function s_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ie.Bottom,targetPosition:g=ie.Top,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:x})=>{let[m,b,v]=Ju({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,V.jsx)(Zl,{id:C,path:m,labelX:b,labelY:v,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:y,interactionWidth:x})})}var l_=s_({isInternal:!1}),d_=s_({isInternal:!0});l_.displayName="SmoothStepEdge";d_.displayName="SmoothStepEdgeInternal";function u_(e){return(0,G.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,V.jsx)(l_,{...a,id:o,pathOptions:(0,G.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var HD=u_({isInternal:!1}),c_=u_({isInternal:!0});HD.displayName="StepEdge";c_.displayName="StepEdgeInternal";function f_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})=>{let[y,h,x]=ym({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,V.jsx)(Zl,{id:m,path:y,labelX:h,labelY:x,label:i,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})})}var BD=f_({isInternal:!1}),p_=f_({isInternal:!0});BD.displayName="StraightEdge";p_.displayName="StraightEdgeInternal";function m_(e){return(0,G.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=ie.Bottom,targetPosition:s=ie.Top,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:x})=>{let[m,b,v]=Xl({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:s,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,V.jsx)(Zl,{id:C,path:m,labelX:b,labelY:v,label:l,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:x})})}var FD=m_({isInternal:!1}),g_=m_({isInternal:!0});FD.displayName="BezierEdge";g_.displayName="BezierEdgeInternal";var DL={default:g_,straight:p_,step:c_,smoothstep:d_,simplebezier:i_},RL={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},UD=(e,t,a)=>a===ie.Left?e-t:a===ie.Right?e+t:e,qD=(e,t,a)=>a===ie.Top?e-t:a===ie.Bottom?e+t:e,PL="react-flow__edgeupdater";function zL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:s}){return(0,V.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:_t([PL,`${PL}-${s}`]),cx:UD(t,o,e),cy:qD(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function VD({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=ct(),w=(b,v)=>{if(b.button!==0)return;let{autoPanOnConnect:C,domNode:S,connectionMode:k,connectionRadius:_,lib:T,onConnectStart:R,cancelConnection:H,nodeLookup:U,rfId:L,panBy:N,updateConnection:E}=g.getState(),M=v.type==="target",A=(B,z)=>{c(!1),f?.(B,a,v.type,z)},O=B=>u?.(a,B),D=(B,z)=>{c(!0),d?.(b,a,v.type),R?.(B,z)};km.onPointerDown(b.nativeEvent,{autoPanOnConnect:C,connectionMode:k,connectionRadius:_,domNode:S,handleId:v.id,nodeId:v.nodeId,nodeLookup:U,isTarget:M,edgeUpdaterType:v.type,lib:T,flowId:L,cancelConnection:H,panBy:N,isValidConnection:(...B)=>g.getState().isValidConnection?.(...B)??!0,onConnect:O,onConnectStart:D,onConnectEnd:(...B)=>g.getState().onConnectEnd?.(...B),onReconnectEnd:A,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},y=b=>w(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=b=>w(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,V.jsxs)(V.Fragment,{children:[(e===!0||e==="source")&&(0,V.jsx)(zL,{position:s,centerX:o,centerY:n,radius:t,onMouseDown:y,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,V.jsx)(zL,{position:l,centerX:r,centerY:i,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function GD({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:w,noPanClassName:y,onError:h,disableKeyboardA11y:x}){let m=Me(re=>re.edgeLookup.get(e)),b=Me(re=>re.defaultEdgeOptions);m=b?{...b,...m}:m;let v=m.type||"default",C=w?.[v]||DL[v];C===void 0&&(h?.("011",yo.error011(v)),v="default",C=w?.default||DL.default);let S=!!(m.focusable||t&&typeof m.focusable>"u"),k=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,G.useRef)(null),[R,H]=(0,G.useState)(!1),[U,L]=(0,G.useState)(!1),N=ct(),{zIndex:E=m.zIndex,sourceX:M,sourceY:A,targetX:O,targetY:D,sourcePosition:B,targetPosition:z}=Me((0,G.useCallback)(re=>{let ce=re.nodeLookup.get(m.source),we=re.nodeLookup.get(m.target);if(!ce||!we)return RL;let _e=zk({id:e,sourceNode:ce,targetNode:we,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:re.connectionMode,onError:h}),Oe=Dk({selected:m.selected,zIndex:m.zIndex,sourceNode:ce,targetNode:we,elevateOnSelect:re.elevateEdgesOnSelect,zIndexMode:re.zIndexMode});return{..._e||RL,zIndex:Oe}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Je),j=(0,G.useMemo)(()=>m.markerStart?`url('#${vm(m.markerStart,g)}')`:void 0,[m.markerStart,g]),F=(0,G.useMemo)(()=>m.markerEnd?`url('#${vm(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||M===null||A===null||O===null||D===null)return null;let K=re=>{let{addSelectedEdges:ce,unselectNodesAndEdges:we,multiSelectionActive:_e}=N.getState();_&&(N.setState({nodesSelectionActive:!1}),m.selected&&_e?(we({nodes:[],edges:[m]}),T.current?.blur()):ce([e])),n&&n(re,m)},$=r?re=>{r(re,{...m})}:void 0,ee=i?re=>{i(re,{...m})}:void 0,q=s?re=>{s(re,{...m})}:void 0,Q=l?re=>{l(re,{...m})}:void 0,ne=u?re=>{u(re,{...m})}:void 0,de=re=>{if(!x&&Ub.includes(re.key)&&_){let{unselectNodesAndEdges:ce,addSelectedEdges:we}=N.getState();re.key==="Escape"?(T.current?.blur(),ce({edges:[m]})):we([e])}};return(0,V.jsx)("svg",{style:{zIndex:E},children:(0,V.jsxs)("g",{className:_t(["react-flow__edge",`react-flow__edge-${v}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:R,selectable:_}]),onClick:K,onDoubleClick:$,onContextMenu:ee,onMouseEnter:q,onMouseMove:Q,onMouseLeave:ne,onKeyDown:S?de:void 0,tabIndex:S?0:void 0,role:m.ariaRole??(S?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":S?`${GL}-${g}`:void 0,ref:T,...m.domAttributes,children:[!U&&(0,V.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:A,targetX:O,targetY:D,sourcePosition:B,targetPosition:z,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:j,markerEnd:F,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),k&&(0,V.jsx)(VD,{edge:m,isReconnectable:k,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:M,sourceY:A,targetX:O,targetY:D,sourcePosition:B,targetPosition:z,setUpdateHover:H,setReconnecting:L})]})})}var jD=(0,G.memo)(GD),XD=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function h_({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:s,onEdgeMouseMove:l,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:w}){let{edgesFocusable:y,edgesReconnectable:h,elementsSelectable:x,onError:m}=Me(XD,Je),b=ED(t);return(0,V.jsxs)("div",{className:"react-flow__edges",children:[(0,V.jsx)(PD,{defaultColor:e,rfId:a}),b.map(v=>(0,V.jsx)(jD,{id:v,edgesFocusable:y,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},v))]})}h_.displayName="EdgeRenderer";var WD=(0,G.memo)(h_),OL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function YD({children:e}){let t=ct(),a=(0,G.useRef)(null),[o]=(0,G.useState)(()=>t.getState().transform);return YL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=OL(i)))};return r(),t.subscribe(r)},[t]),(0,V.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:OL(o)},children:e})}function KD(e){let t=Ca(),a=(0,G.useRef)(!1);(0,G.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var ZD=e=>e.panZoom?.syncViewport;function $D(e){let t=Me(ZD),a=ct();return(0,G.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function HL(e){return e.connection.inProgress?{...e.connection,to:Gl(e.connection.to,e.transform)}:{...e.connection}}function QD(e){return e?a=>{let o=HL(a);return e(o)}:HL}function w0(e){let t=QD(e);return Me(t,Je)}var JD=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function eR({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:s,inProgress:l}=Me(JD,Je);return!(r&&n&&l)?null:(0,V.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,V.jsx)("g",{className:_t(["react-flow__connection",Gb(s)]),children:(0,V.jsx)(x_,{style:t,type:a,CustomComponent:o,isValid:s})})})}var x_=({style:e,type:t=Ln.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:s,fromPosition:l,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=w0();if(!n)return;if(a)return(0,V.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:s,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:l,toPosition:c,connectionStatus:Gb(o),toNode:d,toHandle:f,pointer:p});let g="",w={sourceX:r.x,sourceY:r.y,sourcePosition:l,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case Ln.Bezier:[g]=Xl(w);break;case Ln.SimpleBezier:[g]=n_(w);break;case Ln.Step:[g]=Ju({...w,borderRadius:0});break;case Ln.SmoothStep:[g]=Ju(w);break;default:[g]=ym(w)}return(0,V.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};x_.displayName="ConnectionLine";var tR={};function BL(e=tR){let t=(0,G.useRef)(e),a=ct();(0,G.useEffect)(()=>{},[e])}function aR(){let e=ct(),t=(0,G.useRef)(!1);(0,G.useEffect)(()=>{},[])}function b_({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:w,connectionLineComponent:y,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,deleteKeyCode:k,onlyRenderVisibleElements:_,elementsSelectable:T,defaultViewport:R,translateExtent:H,minZoom:U,maxZoom:L,preventScrolling:N,defaultMarkerColor:E,zoomOnScroll:M,zoomOnPinch:A,panOnScroll:O,panOnScrollSpeed:D,panOnScrollMode:B,zoomOnDoubleClick:z,panOnDrag:j,autoPanOnSelection:F,onPaneClick:K,onPaneMouseEnter:$,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:Q,onPaneContextMenu:ne,paneClickDistance:de,nodeClickDistance:re,onEdgeContextMenu:ce,onEdgeMouseEnter:we,onEdgeMouseMove:_e,onEdgeMouseLeave:Oe,reconnectRadius:vt,onReconnect:Ct,onReconnectStart:lo,onReconnectEnd:oe,noDragClassName:Ie,noWheelClassName:it,noPanClassName:St,disableKeyboardA11y:Fe,nodeExtent:Qt,rfId:Et,viewport:Ga,onViewportChange:qn,nodesDraggable:vd}){return BL(e),BL(t),aR(),KD(a),$D(Ga),(0,V.jsx)(yD,{onPaneClick:K,onPaneMouseEnter:$,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:ne,onPaneScroll:Q,paneClickDistance:de,deleteKeyCode:k,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:S,elementsSelectable:T,zoomOnScroll:M,zoomOnPinch:A,zoomOnDoubleClick:z,panOnScroll:O,panOnScrollSpeed:D,panOnScrollMode:B,panOnDrag:j,autoPanOnSelection:F,defaultViewport:R,translateExtent:H,minZoom:U,maxZoom:L,onSelectionContextMenu:f,preventScrolling:N,noDragClassName:Ie,noWheelClassName:it,noPanClassName:St,disableKeyboardA11y:Fe,onViewportChange:qn,isControlledViewport:!!Ga,children:(0,V.jsxs)(YD,{children:[(0,V.jsx)(WD,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:Ct,onReconnectStart:lo,onReconnectEnd:oe,onlyRenderVisibleElements:_,onEdgeContextMenu:ce,onEdgeMouseEnter:we,onEdgeMouseMove:_e,onEdgeMouseLeave:Oe,reconnectRadius:vt,defaultMarkerColor:E,noPanClassName:St,disableKeyboardA11y:Fe,rfId:Et}),(0,V.jsx)(eR,{style:w,type:g,component:y,containerStyle:h}),(0,V.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,V.jsx)(ND,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:re,onlyRenderVisibleElements:_,noPanClassName:St,noDragClassName:Ie,disableKeyboardA11y:Fe,nodeExtent:Qt,rfId:Et,nodesDraggable:vd}),(0,V.jsx)("div",{className:"react-flow__viewport-portal"})]})})}b_.displayName="GraphView";var oR=(0,G.memo)(b_),nR=Qb("React Flow","https://reactflow.dev/"),FL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,w=new Map,y=new Map,h=o??t??[],x=a??e??[],m=d??[0,0],b=f??Fl;u0(w,y,h);let{nodesInitialized:v}=Cm(x,p,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:c}),C=[0,0,1];if(i&&n&&r){let S=Ul(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:k,y:_,zoom:T}=Qu(S,n,r,l,u,s?.padding??.1);C=[k,_,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:x,nodesInitialized:v,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:y,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:l,maxZoom:u,translateExtent:Fl,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:di.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Vb},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:nR,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:qb,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},rR=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>gL((p,g)=>{async function w(){let{nodeLookup:y,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:b,height:v,minZoom:C,maxZoom:S}=g();h&&(await Ik({nodes:y,width:b,height:v,panZoom:h,minZoom:C,maxZoom:S},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...FL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:y=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:v,fitViewQueued:C,zIndexMode:S,nodesSelectionActive:k}=g(),{nodesInitialized:_,hasSelectedNodes:T}=Cm(y,h,x,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),R=k&&T;C&&_?(w(),p({nodes:y,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:R})):p({nodes:y,nodesInitialized:_,nodesSelectionActive:R})},setEdges:y=>{let{connectionLookup:h,edgeLookup:x}=g();u0(h,x,y),p({edges:y})},setDefaultNodesAndEdges:(y,h)=>{if(y){let{setNodes:x}=g();x(y),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:b,nodeOrigin:v,nodeExtent:C,debug:S,fitViewQueued:k,zIndexMode:_}=g(),{changes:T,updatedInternals:R}=Uk(y,x,m,b,v,C,_);R&&(Bk(x,m,{nodeOrigin:v,nodeExtent:C,zIndexMode:_}),k?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(S&&console.log("React Flow: trigger node changes",T),h?.(T)))},updateNodePositions:(y,h=!1)=>{let x=[],m=[],{nodeLookup:b,triggerNodeChanges:v,connection:C,updateConnection:S,onNodesChangeMiddlewareMap:k}=g();for(let[_,T]of y){let R=b.get(_),H=!!(R?.expandParent&&R?.parentId&&T?.position),U={id:_,type:"position",position:H?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:h};if(R&&C.inProgress&&C.fromNode.id===R.id){let L=ui(R,C.fromHandle,ie.Left,!0);S({...C,from:L})}H&&R.parentId&&x.push({id:_,parentId:R.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(U)}if(x.length>0){let{parentLookup:_,nodeOrigin:T}=g(),R=Sm(x,b,_,T);m.push(...R)}for(let _ of k.values())m=_(m);v(m)},triggerNodeChanges:y=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:b,debug:v}=g();if(y?.length){if(b){let C=h0(y,m);x(C)}v&&console.log("React Flow: trigger node changes",y),h?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:b,debug:v}=g();if(y?.length){if(b){let C=x0(y,m);x(C)}v&&console.log("React Flow: trigger edge changes",y),h?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:v}=g();if(h){let C=y.map(S=>ss(S,!0));b(C);return}b(Yl(m,new Set([...y]),!0)),v(Yl(x))},addSelectedEdges:y=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:v}=g();if(h){let C=y.map(S=>ss(S,!0));v(C);return}v(Yl(x,new Set([...y]))),b(Yl(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:b,triggerNodeChanges:v,triggerEdgeChanges:C}=g(),S=y||m,k=h||x,_=[];for(let R of S){if(!R.selected)continue;let H=b.get(R.id);H&&(H.selected=!1),_.push(ss(R.id,!1))}let T=[];for(let R of k)R.selected&&T.push(ss(R.id,!1));v(_),C(T)},setMinZoom:y=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([y,x]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,y]),p({maxZoom:y})},setTranslateExtent:y=>{g().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let v=h.reduce((S,k)=>k.selected?[...S,ss(k.id,!1)]:S,[]),C=y.reduce((S,k)=>k.selected?[...S,ss(k.id,!1)]:S,[]);x(v),m(C)},setNodeExtent:y=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:v,nodeExtent:C,zIndexMode:S}=g();y[0][0]===C[0][0]&&y[0][1]===C[0][1]&&y[1][0]===C[1][0]&&y[1][1]===C[1][1]||(Cm(h,x,m,{nodeOrigin:b,nodeExtent:y,elevateNodesOnSelect:v,checkEquality:!1,zIndexMode:S}),p({nodeExtent:y}))},panBy:y=>{let{transform:h,width:x,height:m,panZoom:b,translateExtent:v}=g();return qk({delta:y,panZoom:b,transform:h,translateExtent:v,width:x,height:m})},setCenter:async(y,h,x)=>{let{width:m,height:b,maxZoom:v,panZoom:C}=g();if(!C)return!1;let S=typeof x?.zoom<"u"?x.zoom:v;return await C.setViewport({x:m/2-y*S,y:b/2-h*S,zoom:S},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Vb}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...FL()})}},Object.is);function y0({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:s,initialFitViewOptions:l,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,G.useState)(()=>rR({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:s,fitViewOptions:l,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,V.jsx)(C8,{value:g,children:(0,V.jsx)(X8,{children:(0,V.jsx)(sD,{children:p})})})}function iR({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:s,fitViewOptions:l,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,G.useContext)(Em)?(0,V.jsx)(V.Fragment,{children:e}):(0,V.jsx)(y0,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:s,initialFitViewOptions:l,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var sR={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function lR({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:s,onEdgeClick:l,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:v,onNodeDoubleClick:C,onNodeDragStart:S,onNodeDrag:k,onNodeDragStop:_,onNodesDelete:T,onEdgesDelete:R,onDelete:H,onSelectionChange:U,onSelectionDragStart:L,onSelectionDrag:N,onSelectionDragStop:E,onSelectionContextMenu:M,onSelectionStart:A,onSelectionEnd:O,onBeforeDelete:D,connectionMode:B,connectionLineType:z=Ln.Bezier,connectionLineStyle:j,connectionLineComponent:F,connectionLineContainerStyle:K,deleteKeyCode:$="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:Q=pr.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:de=jl()?"Meta":"Control",zoomActivationKeyCode:re=jl()?"Meta":"Control",snapToGrid:ce,snapGrid:we,onlyRenderVisibleElements:_e=!1,selectNodesOnDrag:Oe,nodesDraggable:vt,autoPanOnNodeFocus:Ct,nodesConnectable:lo,nodesFocusable:oe,nodeOrigin:Ie=jL,edgesFocusable:it,edgesReconnectable:St,elementsSelectable:Fe=!0,defaultViewport:Qt=P8,minZoom:Et=.5,maxZoom:Ga=2,translateExtent:qn=Fl,preventScrolling:vd=!0,nodeExtent:Cd,defaultMarkerColor:Sd="#b1b1b7",zoomOnScroll:vg=!0,zoomOnPinch:Cg=!0,panOnScroll:of=!1,panOnScrollSpeed:Sg=.5,panOnScrollMode:Os=en.Free,zoomOnDoubleClick:kg=!0,panOnDrag:Lg=!0,onPaneClick:_g,onPaneMouseEnter:kd,onPaneMouseMove:Ig,onPaneMouseLeave:Mg,onPaneScroll:Hs,onPaneContextMenu:Ng,paneClickDistance:Eg=1,nodeClickDistance:Tg=0,children:Ag,onReconnect:Dg,onReconnectStart:Rg,onReconnectEnd:Z,onEdgeContextMenu:ue,onEdgeDoubleClick:ke,onEdgeMouseEnter:Le,onEdgeMouseMove:mt,onEdgeMouseLeave:Xe,reconnectRadius:He=10,onNodesChange:Rt,onEdgesChange:tt,noDragClassName:gt="nodrag",noWheelClassName:Jt="nowheel",noPanClassName:Bs="nopan",fitView:Mr,fitViewOptions:vw,connectOnClick:RN,attributionPosition:PN,proOptions:zN,defaultEdgeOptions:ON,elevateNodesOnSelect:HN=!0,elevateEdgesOnSelect:BN=!1,disableKeyboardA11y:Cw=!1,autoPanOnConnect:FN,autoPanOnNodeDrag:UN,autoPanOnSelection:qN=!0,autoPanSpeed:VN,connectionRadius:GN,isValidConnection:jN,onError:XN,style:WN,id:Sw,nodeDragThreshold:YN,connectionDragThreshold:KN,viewport:ZN,onViewportChange:$N,width:QN,height:JN,colorMode:e3="light",debug:t3,onScroll:kw,ariaLabelConfig:a3,zIndexMode:Lw="basic",...o3},n3){let Pg=Sw||"1",r3=B8(e3),i3=(0,G.useCallback)(_w=>{_w.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),kw?.(_w)},[kw]);return(0,V.jsx)("div",{"data-testid":"rf__wrapper",...o3,onScroll:i3,style:{...WN,...sR},ref:n3,className:_t(["react-flow",n,r3]),id:Sw,role:"application",children:(0,V.jsxs)(iR,{nodes:e,edges:t,width:QN,height:JN,fitView:Mr,fitViewOptions:vw,minZoom:Et,maxZoom:Ga,nodeOrigin:Ie,nodeExtent:Cd,zIndexMode:Lw,children:[(0,V.jsx)(H8,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,nodesDraggable:vt,autoPanOnNodeFocus:Ct,nodesConnectable:lo,nodesFocusable:oe,edgesFocusable:it,edgesReconnectable:St,elementsSelectable:Fe,elevateNodesOnSelect:HN,elevateEdgesOnSelect:BN,minZoom:Et,maxZoom:Ga,nodeExtent:Cd,onNodesChange:Rt,onEdgesChange:tt,snapToGrid:ce,snapGrid:we,connectionMode:B,translateExtent:qn,connectOnClick:RN,defaultEdgeOptions:ON,fitView:Mr,fitViewOptions:vw,onNodesDelete:T,onEdgesDelete:R,onDelete:H,onNodeDragStart:S,onNodeDrag:k,onNodeDragStop:_,onSelectionDrag:N,onSelectionDragStart:L,onSelectionDragStop:E,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:Bs,nodeOrigin:Ie,rfId:Pg,autoPanOnConnect:FN,autoPanOnNodeDrag:UN,autoPanSpeed:VN,onError:XN,connectionRadius:GN,isValidConnection:jN,selectNodesOnDrag:Oe,nodeDragThreshold:YN,connectionDragThreshold:KN,onBeforeDelete:D,debug:t3,ariaLabelConfig:a3,zIndexMode:Lw}),(0,V.jsx)(oR,{onInit:u,onNodeClick:s,onEdgeClick:l,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:v,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:i,connectionLineType:z,connectionLineStyle:j,connectionLineComponent:F,connectionLineContainerStyle:K,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:Q,deleteKeyCode:$,multiSelectionKeyCode:de,panActivationKeyCode:ne,zoomActivationKeyCode:re,onlyRenderVisibleElements:_e,defaultViewport:Qt,translateExtent:qn,minZoom:Et,maxZoom:Ga,preventScrolling:vd,zoomOnScroll:vg,zoomOnPinch:Cg,zoomOnDoubleClick:kg,panOnScroll:of,panOnScrollSpeed:Sg,panOnScrollMode:Os,panOnDrag:Lg,autoPanOnSelection:qN,onPaneClick:_g,onPaneMouseEnter:kd,onPaneMouseMove:Ig,onPaneMouseLeave:Mg,onPaneScroll:Hs,onPaneContextMenu:Ng,paneClickDistance:Eg,nodeClickDistance:Tg,onSelectionContextMenu:M,onSelectionStart:A,onSelectionEnd:O,onReconnect:Dg,onReconnectStart:Rg,onReconnectEnd:Z,onEdgeContextMenu:ue,onEdgeDoubleClick:ke,onEdgeMouseEnter:Le,onEdgeMouseMove:mt,onEdgeMouseLeave:Xe,reconnectRadius:He,defaultMarkerColor:Sd,noDragClassName:gt,noWheelClassName:Jt,noPanClassName:Bs,rfId:Pg,disableKeyboardA11y:Cw,nodeExtent:Cd,viewport:ZN,onViewportChange:$N,nodesDraggable:vt}),(0,V.jsx)(R8,{onSelectionChange:U}),Ag,(0,V.jsx)(N8,{proOptions:zN,position:PN}),(0,V.jsx)(M8,{rfId:Pg,disableKeyboardA11y:Cw})]})})}var w_=WL(lR);var dR=e=>e.nodes;function y_(){return Me(dR,Je)}var uR=e=>e.edges;function v_(){return Me(uR,Je)}var cR=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function Sa(){return Me(cR,Je)}var QV=yo.error014();function fR({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,V.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_t(["react-flow__background-pattern",a,o])})}function pR({radius:e,className:t}){return(0,V.jsx)("circle",{cx:e,cy:e,r:e,className:_t(["react-flow__background-pattern","dots",t])})}var _n;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(_n||(_n={}));var mR={[_n.Dots]:1,[_n.Lines]:1,[_n.Cross]:6},gR=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function C_({id:e,variant:t=_n.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:s,style:l,className:u,patternClassName:d}){let f=(0,G.useRef)(null),{transform:c,patternId:p}=Me(gR,Je),g=o||mR[t],w=t===_n.Dots,y=t===_n.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],b=Array.isArray(r)?r:[r,r],v=y?[m,m]:x,C=[b[0]*c[2]+v[0]/2,b[1]*c[2]+v[1]/2],S=`${p}${e||""}`;return(0,V.jsxs)("svg",{className:_t(["react-flow__background",u]),style:{...l,...Am,"--xy-background-color-props":s,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,V.jsx)("pattern",{id:S,x:c[0]%x[0],y:c[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:w?(0,V.jsx)(pR,{radius:m/2,className:d}):(0,V.jsx)(fR,{dimensions:v,lineWidth:n,variant:t,className:d})}),(0,V.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${S})`})]})}C_.displayName="Background";var S_=(0,G.memo)(C_);function hR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,V.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function xR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,V.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function bR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,V.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function wR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,V.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function yR(){return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,V.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Mm({children:e,className:t,...a}){return(0,V.jsx)("button",{type:"button",className:_t(["react-flow__controls-button",t]),...a,children:e})}var vR=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function k_({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:s,onInteractiveChange:l,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=ct(),{isInteractive:w,minZoomReached:y,maxZoomReached:h,ariaLabelConfig:x}=Me(vR,Je),{zoomIn:m,zoomOut:b,fitView:v}=Ca(),C=()=>{m(),r?.()},S=()=>{b(),i?.()},k=()=>{v(n),s?.()},_=()=>{g.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),l?.(!w)};return(0,V.jsxs)(Tm,{className:_t(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Mm,{onClick:C,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,V.jsx)(hR,{})}),(0,V.jsx)(Mm,{onClick:S,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:y,children:(0,V.jsx)(xR,{})})]}),a&&(0,V.jsx)(Mm,{className:"react-flow__controls-fitview",onClick:k,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,V.jsx)(bR,{})}),o&&(0,V.jsx)(Mm,{className:"react-flow__controls-interactive",onClick:_,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:w?(0,V.jsx)(yR,{}):(0,V.jsx)(wR,{})}),d]})}k_.displayName="Controls";var JV=(0,G.memo)(k_);function CR({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:s,strokeWidth:l,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:w}=r||{},y=i||g||w;return(0,V.jsx)("rect",{className:_t(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:y,stroke:s,strokeWidth:l},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var SR=(0,G.memo)(CR),kR=e=>e.nodes.map(t=>t.id),m0=e=>e instanceof Function?e:()=>e;function LR({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=SR,onClick:i}){let s=Me(kR,Je),l=m0(t),u=m0(e),d=m0(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,V.jsx)(V.Fragment,{children:s.map(c=>(0,V.jsx)(IR,{id:c,nodeColorFunc:l,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function _R({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:s,onClick:l}){let{node:u,x:d,y:f,width:c,height:p}=Me(g=>{let w=g.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let y=w.internals.userNode,{x:h,y:x}=w.internals.positionAbsolute,{width:m,height:b}=Go(y);return{node:y,x:h,y:x,width:m,height:b}},Je);return!u||u.hidden||!Jb(u)?null:(0,V.jsx)(s,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:l,id:u.id})}var IR=(0,G.memo)(_R),MR=(0,G.memo)(LR),NR=200,ER=150,TR=e=>!e.hidden,AR=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Zb(Ul(e.nodeLookup,{filter:TR}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},UL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,DR=(e,t)=>UL(e.viewBB,t.viewBB)&&UL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,RR="react-flow__minimap-desc";function L_({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:s,bgColor:l,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:w=!1,zoomable:y=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:b=5}){let v=ct(),C=(0,G.useRef)(null),{boundingRect:S,viewBB:k,rfId:_,panZoom:T,translateExtent:R,flowWidth:H,flowHeight:U,ariaLabelConfig:L}=Me(AR,DR),N=e?.width??NR,E=e?.height??ER,M=S.width/N,A=S.height/E,O=Math.max(M,A),D=O*N,B=O*E,z=b*O,j=S.x-(D-S.width)/2-z,F=S.y-(B-S.height)/2-z,K=D+z*2,$=B+z*2,ee=`${RR}-${_}`,q=(0,G.useRef)(0),Q=(0,G.useRef)();q.current=O,(0,G.useEffect)(()=>{if(C.current&&T)return Q.current=Kk({domNode:C.current,panZoom:T,getTransform:()=>v.getState().transform,getViewScale:()=>q.current}),()=>{Q.current?.destroy()}},[T]),(0,G.useEffect)(()=>{Q.current?.update({translateExtent:R,width:H,height:U,inversePan:x,pannable:w,zoomStep:m,zoomable:y})},[w,y,x,m,R,H,U]);let ne=p?ce=>{let[we,_e]=Q.current?.pointer(ce)||[0,0];p(ce,{x:we,y:_e})}:void 0,de=g?(0,G.useCallback)((ce,we)=>{let _e=v.getState().nodeLookup.get(we).internals.userNode;g(ce,_e)},[]):void 0,re=h??L["minimap.ariaLabel"];return(0,V.jsx)(Tm,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*O:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:_t(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,V.jsxs)("svg",{width:N,height:E,viewBox:`${j} ${F} ${K} ${$}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:C,onClick:ne,children:[re&&(0,V.jsx)("title",{id:ee,children:re}),(0,V.jsx)(MR,{onClick:de,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:s}),(0,V.jsx)("path",{className:"react-flow__minimap-mask",d:`M${j-z},${F-z}h${K+z*2}v${$+z*2}h${-K-z*2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}L_.displayName="MiniMap";var __=(0,G.memo)(L_),PR=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,zR={[ci.Line]:"right",[ci.Handle]:"bottom-right"};function OR({nodeId:e,position:t,variant:a=ci.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:s=10,minHeight:l=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:w,onResize:y,onResizeEnd:h}){let x=QL(),m=typeof e=="string"?e:x,b=ct(),v=(0,G.useRef)(null),C=a===ci.Handle,S=Me((0,G.useCallback)(PR(C&&p),[C,p]),Je),k=(0,G.useRef)(null),_=t??zR[a];(0,G.useEffect)(()=>{if(!(!v.current||!m))return k.current||(k.current=eL({domNode:v.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:H,snapGrid:U,snapToGrid:L,nodeOrigin:N,domNode:E}=b.getState();return{nodeLookup:R,transform:H,snapGrid:U,snapToGrid:L,nodeOrigin:N,paneDomNode:E}},onChange:(R,H)=>{let{triggerNodeChanges:U,nodeLookup:L,parentLookup:N,nodeOrigin:E}=b.getState(),M=[],A={x:R.x,y:R.y},O=L.get(m);if(O&&O.expandParent&&O.parentId){let D=O.origin??E,B=R.width??O.measured.width??0,z=R.height??O.measured.height??0,j={id:O.id,parentId:O.parentId,rect:{width:B,height:z,...e0({x:R.x??O.position.x,y:R.y??O.position.y},{width:B,height:z},O.parentId,L,D)}},F=Sm([j],L,N,E);M.push(...F),A.x=R.x?Math.max(D[0]*B,R.x):void 0,A.y=R.y?Math.max(D[1]*z,R.y):void 0}if(A.x!==void 0&&A.y!==void 0){let D={id:m,type:"position",position:{...A}};M.push(D)}if(R.width!==void 0&&R.height!==void 0){let B={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};M.push(B)}for(let D of H){let B={...D,type:"position"};M.push(B)}U(M)},onEnd:({width:R,height:H})=>{let U={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:H}};b.getState().triggerNodeChanges([U])}})),k.current.update({controlPosition:_,boundaries:{minWidth:s,minHeight:l,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:y,onResizeEnd:h,shouldResize:g}),()=>{k.current?.destroy()}},[_,s,l,u,d,f,w,y,h,g]);let T=_.split("-");return(0,V.jsx)("div",{className:_t(["react-flow__resize-control","nodrag",...T,a,o]),ref:v,style:{...n,scale:S,...i&&{[C?"backgroundColor":"borderColor"]:i}},children:r})}var eG=(0,G.memo)(OR);var to=I(J(),1),A_=I(ea(),1);var Pm=I(J(),1);var Dm=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var I_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var M_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var v0=e=>{let t=M_(e);return t.charAt(0).toUpperCase()+t.slice(1)};var tc=I(J(),1);var Rm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var N_=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var $l=I(J(),1);var HR=(0,$l.createContext)({});var E_=()=>(0,$l.useContext)(HR);var T_=(0,tc.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...s},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=E_()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,tc.createElement)("svg",{ref:l,...Rm,width:t??u??Rm.width,height:t??u??Rm.height,stroke:e??c,strokeWidth:g,className:Dm("lucide",p,n),...!r&&!N_(s)&&{"aria-hidden":"true"},...s},[...i.map(([w,y])=>(0,tc.createElement)(w,y)),...Array.isArray(r)?r:[r]])});var P=(e,t)=>{let a=(0,Pm.forwardRef)(({className:o,...n},r)=>(0,Pm.createElement)(T_,{ref:r,iconNode:t,className:Dm(`lucide-${I_(v0(e))}`,`lucide-${e}`,o),...n}));return a.displayName=v0(e),a};var BR=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],ls=P("align-horizontal-distribute-center",BR);var FR=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],ds=P("align-vertical-distribute-center",FR);var UR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ac=P("arrow-left",UR);var qR=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],us=P("arrow-up",qR);var VR=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],cs=P("audio-lines",VR);var GR=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],oc=P("bookmark",GR);var jR=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],nc=P("calendar",jR);var XR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bt=P("check",XR);var WR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wt=P("chevron-down",WR);var YR=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mr=P("chevron-right",YR);var KR=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rc=P("chevron-left",KR);var ZR=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],fs=P("chevron-up",ZR);var $R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],fi=P("circle-alert",$R);var QR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pi=P("circle-check",QR);var JR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],tn=P("circle-question-mark",JR);var eP=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],ic=P("clapperboard",eP);var tP=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],eo=P("cloud-upload",tP);var aP=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],mi=P("copy",aP);var oP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],In=P("crosshair",oP);var nP=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],sc=P("download",nP);var rP=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],gi=P("ellipsis",rP);var iP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],lc=P("external-link",iP);var sP=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],dc=P("eye-off",sP);var lP=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],uc=P("eye",lP);var dP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],gr=P("file-code",dP);var uP=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],Mn=P("file-pen",uP);var cP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],cc=P("file-spreadsheet",cP);var fP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ka=P("file-text",fP);var pP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],fc=P("file-up",pP);var mP=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],pc=P("files",mP);var gP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],La=P("film",gP);var hP=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],ps=P("folder-input",hP);var xP=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],mc=P("folder-open",xP);var bP=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ms=P("folder-plus",bP);var wP=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],vo=P("folder",wP);var yP=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],hi=P("funnel",yP);var vP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Co=P("grid-3x3",vP);var CP=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],gc=P("grip-vertical",CP);var SP=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Ql=P("hand",SP);var kP=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],hc=P("hard-drive",kP);var LP=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],xc=P("hash",LP);var _P=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],hr=P("image-plus",_P);var IP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ha=P("image",IP);var MP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],bc=P("info",MP);var NP=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],wc=P("keyboard",NP);var EP=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ga=P("layers",EP);var TP=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Ba=P("layout-grid",TP);var AP=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],yc=P("list-tree",AP);var DP=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],xr=P("list",DP);var RP=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xi=P("loader-circle",RP);var PP=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],vc=P("map",PP);var zP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Nn=P("maximize-2",zP);var OP=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Cc=P("maximize",OP);var HP=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],gs=P("message-square",HP);var BP=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],hs=P("mic",BP);var FP=[["path",{d:"M5 12h14",key:"1ays0h"}]],Sc=P("minus",FP);var UP=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],kc=P("mouse-pointer-click",UP);var qP=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Jl=P("mouse-pointer",qP);var VP=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],_a=P("music",VP);var GP=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",key:"28k6lz"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],xs=P("package-plus",GP);var jP=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Lc=P("paperclip",jP);var XP=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],_c=P("pause",XP);var WP=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],En=P("pen-line",WP);var YP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Tn=P("pen",YP);var KP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Ic=P("pencil",KP);var ZP=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Mc=P("person-standing",ZP);var $P=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],So=P("play",$P);var QP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ft=P("plus",QP);var JP=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],Nc=P("redo-2",JP);var ez=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],br=P("refresh-cw",ez);var tz=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],bs=P("rotate-ccw",tz);var az=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],an=P("search",az);var oz=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Ec=P("settings-2",oz);var nz=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],ws=P("sliders-horizontal",nz);var rz=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mt=P("sparkles",rz);var iz=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],bi=P("square-split-vertical",iz);var sz=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],ko=P("table",sz);var lz=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Tc=P("tag",lz);var dz=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],wi=P("text-align-justify",dz);var uz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Lo=P("trash-2",uz);var cz=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],An=P("triangle-alert",cz);var fz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],wr=P("type",fz);var pz=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Ac=P("undo-2",pz);var mz=[["rect",{x:"11",y:"14",width:"10",height:"7",rx:"2",key:"nfm8rk"}],["rect",{x:"3",y:"3",width:"10",height:"7",rx:"2",key:"1ljebb"}]],Dc=P("ungroup",mz);var gz=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],ys=P("unlink",gz);var hz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],vs=P("upload",hz);var xz=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],on=P("video",xz);var bz=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],Rc=P("waypoints",bz);var wz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ha=P("x",wz);var ra=I(X(),1);function ao({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:s="pill"}){let[l,u]=(0,to.useState)(!1),d=(0,to.useRef)(null),f=(0,to.useRef)(null),[c,p]=(0,to.useState)({top:0,left:0,placement:"bottom"}),g=(0,to.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,to.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),b=window.innerHeight,v=Math.min(t.length*34+16,260),S=b-m.bottom<v&&m.top>v,k=S?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:k,left:m.left,width:_,placement:S?"top":"bottom"})},[t.length,r]);(0,to.useEffect)(()=>{if(!l)return;w();let m=C=>{let S=C.target;d.current?.contains(S)||f.current?.contains(S)||u(!1)},b=C=>{C.key==="Escape"&&u(!1)},v=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",v,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",w)}},[l,w]);let y=(0,to.useCallback)(m=>{m.stopPropagation(),!n&&u(b=>!b)},[n]),h=(0,to.useCallback)((m,b)=>{b||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${s}`,l?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsxs)("button",{ref:d,type:"button",className:x,disabled:n,onClick:y,"aria-haspopup":"listbox","aria-expanded":l,children:[(0,ra.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:i??String(e??"")}),(0,ra.jsx)(Wt,{size:12,className:"wf-custom-select-chevron"})]}),l&&typeof document<"u"?(0,A_.createPortal)((0,ra.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,ra.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,v=!!m.subtitle||!!m.badge||!!m.icon;return(0,ra.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${v?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,ra.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,ra.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,ra.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,ra.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,ra.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,ra.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,ra.jsx)(Bt,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Dn=I(J(),1),D_=I(ea(),1),nn=I(X(),1),Pc=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,Dn.useState)(!1),s=(0,Dn.useRef)(null),l=(0,Dn.useRef)(null),[u,d]=(0,Dn.useState)({left:0}),f=(0,Dn.useCallback)(()=>{if(!s.current)return;let p=s.current.getBoundingClientRect(),g=a.startsWith("top"),w=a.endsWith("Right"),y=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:y,bottom:h,left:x})},[a]);(0,Dn.useEffect)(()=>{if(!r)return;f();let p=w=>{let y=w.target;s.current?.contains(y)||l.current?.contains(y)||i(!1)},g=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(g=>!g)};return(0,nn.jsxs)(nn.Fragment,{children:[(0,nn.jsx)("div",{ref:s,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,D_.createPortal)((0,nn.jsx)("div",{ref:l,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,nn.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,nn.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,nn.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,nn.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var R_=I(J(),1),C0=I(X(),1),S0=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:s=""})=>{let l=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,R_.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,C0.jsx)("div",{className:`wf-custom-slider ${s}`,style:i,children:(0,C0.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${l}%, rgba(255,255,255,0.12) ${l}%, rgba(255,255,255,0.12) 100%)`}})})};var P_=I(J(),1),z_=I(ea(),1);var Rn=I(X(),1),rn=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:s})=>((0,P_.useEffect)(()=>{if(!e)return;let l=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]),!e||typeof document>"u"?null:(0,z_.createPortal)((0,Rn.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Rn.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:l=>l.stopPropagation(),children:[(0,Rn.jsxs)("div",{className:"wf-modal-header",children:[(0,Rn.jsx)("div",{className:"wf-modal-title",children:a}),(0,Rn.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Rn.jsx)(ha,{size:16})})]}),(0,Rn.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:s}),o?(0,Rn.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Om=I(J(),1),O_=I(Cb(),1);var Cs=I(X(),1),zc=null,yz=()=>{let[e,t]=(0,Om.useState)([]);return(0,Om.useEffect)(()=>(zc=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{zc=null}),[]),e.length===0?null:(0,Cs.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=bc,n="#60a5fa";return a.type==="success"?(o=pi,n="#34d399"):a.type==="warning"?(o=An,n="#fb923c"):a.type==="error"&&(o=fi,n="#f87171"),(0,Cs.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Cs.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Cs.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function vz(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,O_.createRoot)(t).render((0,Cs.jsx)(yz,{}))}function zm(e,t,a=2500){vz();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;zc?zc({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{zc?.({id:o,type:e,content:t,durationMs:a})},50)}var Y={success:(e,t)=>zm("success",e,t),warning:(e,t)=>zm("warning",e,t),error:(e,t)=>zm("error",e,t),info:(e,t)=>zm("info",e,t)};var H_=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>l,subscribe:u=>(a.add(u),()=>a.delete(u))},l=t=e(o,n,s);return s},B_=(e=>e?H_(e):H_);var Oc=I(J(),1);var Cz=e=>e;function Sz(e,t=Cz){let a=Oc.default.useSyncExternalStore(e.subscribe,Oc.default.useCallback(()=>t(e.getState()),[e,t]),Oc.default.useCallback(()=>t(e.getInitialState()),[e,t]));return Oc.default.useDebugValue(a),a}var F_=e=>{let t=B_(e),a=o=>Sz(t,o);return Object.assign(a,t),a},ed=(e=>e?F_(e):F_);var j_=I(J(),1);var U_=e=>Symbol.iterator in e,q_=e=>"entries"in e,V_=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},kz=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function G_(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:U_(e)&&U_(t)?q_(e)&&q_(t)?V_(e,t):kz(e,t):V_({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function X_(e){let t=j_.default.useRef(void 0);return a=>{let o=e(a);return G_(t.current,o)?t.current:t.current=o}}var Y_={stroke:"#b1b1b7",strokeWidth:2},Hm={type:"animated",style:Y_,animated:!1};function W_(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function Lz(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function K_(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:Lz(e),...Hm,...e,data:{...t,createdAt:a},animated:e.animated??Hm.animated,style:{...Y_,...e.style??{}},sourceHandle:W_(e.sourceHandle),targetHandle:W_(e.targetHandle)}}var Z_={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},_z={text:"text-editor",image:"text-to-image",video:"video-generation",audio:"text-to-audio"};var $_={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Hc(e,t){return{label:"",materialType:e,status:"empty",selectedTool:_z[e],params:{},failStrategy:"abort",...t}}function Ss(e){return e.nodeKind==="generate"||e.nodeKind==="import"?e.nodeKind:e.selectedTool==="import"?"import":"generate"}var Iz={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function Q_(e){return Iz[e]??[]}function Mz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,s=a.generatedContent,l=!1;return o==="text"?l=!!(i?.trim()||s):o==="image"?l=!!r:l=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:l}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function Nz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=Z_[n];if(i)for(let s of i){let l=$_[s];l&&l.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function Bm(e,t){let a=Mz(e),o=Nz(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function Fm(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(s=>s.source===e.source&&s.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(s=>s.id===e.source),n=t.find(s=>s.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!Bm(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let s=i.shift();if(!(!s||r.has(s.id))){r.add(s.id);for(let l of Wb(s,t,a)){if(l.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(l)}}}return{valid:!0}}function Um(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function Ez(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function J_(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return Um(e,"rejected","duplicate_node");a.add(d.id)}let o=Ez([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return Um(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return Um(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),s=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=K_(d),c=Fm(f,s,u);if(!c.valid)return Um(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:s,edges:u,status:"allowed"}}function e5(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var qm=!1,Vm=!1;function Gm(){qm=!0}function t5(){Vm=!0,qm=!1}function a5(){qm=!1,Vm=!1}function Tz(){Vm=!1}function k0(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function L0(e,t){return{nodes:e.slice(),edges:t.slice()}}function Bc(e,t){return t||(Vm&&e===0?"reset":qm&&e===0?"user-delete":"autosave")}function jm(e){let t=L0(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:k0({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(Tz(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}function Ia(e){return e>0?1/e:1}function n5(e,t,a,o,n){return n||o==="import"?!1:!!e&&!t&&a!=="running"}function r5(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var o5=32,Az=350,Dz=280;function yi(e){let t=e.data||{},a=t.materialType||(e.type==="material"?"text":void 0),o=Az,n=Dz,r=0;e.type==="material"||a?(r=28,a==="text"?(o=350,n=500):a==="image"?(o=350,n=350):a==="video"?(o=350,n=280):a==="audio"&&(o=350,n=150)):e.type==="table"?(r=28,o=380,n=280):e.type==="video_composition"?(r=28,o=350,n=440):e.type==="group"&&(o=400,n=300,r=0);let i=typeof e.measured?.width=="number"&&Number.isFinite(e.measured.width)&&e.measured.width>0?e.measured.width:typeof e.width=="number"&&Number.isFinite(e.width)&&e.width>0?e.width:typeof t.nodeWidth=="number"&&Number.isFinite(t.nodeWidth)&&t.nodeWidth>0?t.nodeWidth:o,s=typeof e.measured?.height=="number"&&Number.isFinite(e.measured.height)&&e.measured.height>0?e.measured.height:typeof e.height=="number"&&Number.isFinite(e.height)&&e.height>0?e.height:typeof t.nodeHeight=="number"&&Number.isFinite(t.nodeHeight)&&t.nodeHeight>0?t.nodeHeight:n;return{width:i,height:s,headerOffset:r}}function td(e,t=o5,a){if(!e||e.length===0)return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let o=a?.includeHeaderOffset??!0,n=1/0,r=1/0,i=-1/0,s=-1/0;for(let p of e){let g=typeof p?.position?.x=="number"&&Number.isFinite(p.position.x)?p.position.x:0,w=typeof p?.position?.y=="number"&&Number.isFinite(p.position.y)?p.position.y:0,{width:y,height:h,headerOffset:x}=yi(p),m=o?w-x:w;g<n&&(n=g),m<r&&(r=m),g+y>i&&(i=g+y),w+h>s&&(s=w+h)}if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(s))return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let l=Number.isFinite(t)&&t>=0?t:o5,u=n-l,d=r-l,f=Math.max(120,i-n+l*2),c=Math.max(80,s-r+l*2);return{x:u,y:d,width:f,height:c,minWidth:f,minHeight:c}}function Rz(e,t){let a=typeof e?.x=="number"&&Number.isFinite(e.x)?e.x:0,o=typeof e?.y=="number"&&Number.isFinite(e.y)?e.y:0,n=typeof t?.x=="number"&&Number.isFinite(t.x)?t.x:0,r=typeof t?.y=="number"&&Number.isFinite(t.y)?t.y:0;return{x:a-n,y:o-r}}function Pz(e,t){let a=typeof e?.x=="number"&&Number.isFinite(e.x)?e.x:0,o=typeof e?.y=="number"&&Number.isFinite(e.y)?e.y:0,n=typeof t?.x=="number"&&Number.isFinite(t.x)?t.x:0,r=typeof t?.y=="number"&&Number.isFinite(t.y)?t.y:0;return{x:a+n,y:o+r}}function i5(e,t,a,o){let{x:n,y:r,width:i,height:s}=t,{dx:l,dy:u}=a;switch(e){case"se":{i=Math.max(o.minWidth,i+l),s=Math.max(o.minHeight,s+u);break}case"e":{i=Math.max(o.minWidth,i+l);break}case"s":{s=Math.max(o.minHeight,s+u);break}case"nw":{let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);let f=s-u;f>=o.minHeight?(r+=u,s=f):(r+=s-o.minHeight,s=o.minHeight);break}case"w":{let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);break}case"n":{let d=s-u;d>=o.minHeight?(r+=u,s=d):(r+=s-o.minHeight,s=o.minHeight);break}case"ne":{i=Math.max(o.minWidth,i+l);let d=s-u;d>=o.minHeight?(r+=u,s=d):(r+=s-o.minHeight,s=o.minHeight);break}case"sw":{s=Math.max(o.minHeight,s+u);let d=i-l;d>=o.minWidth?(n+=l,i=d):(n+=i-o.minWidth,i=o.minWidth);break}}return{x:n,y:r,width:i,height:s}}function s5(e,t,a){let o=a>0?a:1;return{dx:e/o,dy:t/o}}function ad(e,t){return e.filter(a=>a.parentId===t&&a.type!=="group").map(a=>a.id)}var zz=220,Oz=44;function l5(e,t,a,o="#3b82f6"){let n=e.filter(f=>t.includes(f.id)&&f.type!=="group"&&!f.parentId);if(n.length<2)return null;let r=a&&a!=="\u65B0\u5EFA\u7EC4"?a:`\u7F16\u7EC4 ${n.length} \u4E2A\u8282\u70B9`,i=td(n,32),s=`group_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,l={id:s,type:"group",position:{x:i.x,y:i.y},width:i.width,height:i.height,selected:!0,style:{width:i.width,height:i.height,zIndex:0},data:{title:r,color:o,isCollapsed:!1,expandedBounds:{width:i.width,height:i.height},minWidth:i.minWidth,minHeight:i.minHeight,padding:32,nodeIds:n.map(f=>f.id)}},u=new Set(n.map(f=>f.id)),d=e.map(f=>{if(!u.has(f.id)||f.type==="group")return f;let c=Rz(f.position,{x:i.x,y:i.y});return{...f,parentId:s,position:c,selected:!1,extent:"parent"}});return{groupId:s,nodes:[l,...d]}}function d5(e,t){let a=e.find(u=>u.id===t&&u.type==="group");if(!a)return null;let o=a.data||{},r=!!!o.isCollapsed,i=o.expandedBounds||{width:a.width||400,height:a.height||300},s=r?zz:i.width,l=r?Oz:i.height;return e.map(u=>u.id===t?{...u,width:s,height:l,style:{...u.style,width:s,height:l},data:{...o,isCollapsed:r,expandedBounds:r?{width:a.width||i.width,height:a.height||i.height}:i}}:u.parentId===t?{...u,hidden:r}:u)}function u5(e,t){let a=e.find(n=>n.id===t&&n.type==="group");if(!a)return null;let o=a.position;return e.filter(n=>n.id!==t).map(n=>{if(n.parentId!==t)return n;let r=Pz(n.position,o),{parentId:i,extent:s,...l}=n;return{...l,position:r,selected:!0}})}function c5(e,t,a){if(!e||e.length<2)return e||[];let o=typeof a?.gap=="number"?a.gap:40;if(t==="vertical"){let n=[...e].sort((d,f)=>d.position.y-f.position.y),r=Math.min(...e.map(d=>d.position.x)),s=Math.min(...e.map(d=>{let{headerOffset:f}=yi(d);return d.position.y-f})),l=n.map(d=>{let{height:f,headerOffset:c}=yi(d),p=r,g=s+c;return s=g+f+o,{...d,position:{x:p,y:g}}}),u=new Map(l.map(d=>[d.id||"",d]));return e.map(d=>d.id&&u.has(d.id)?u.get(d.id):d)}if(t==="horizontal"){let n=[...e].sort((d,f)=>d.position.x-f.position.x),r=Math.min(...e.map(d=>{let{headerOffset:f}=yi(d);return d.position.y-f})),s=Math.min(...e.map(d=>d.position.x)),l=n.map(d=>{let{width:f,headerOffset:c}=yi(d),p=s,g=r+c;return s=p+f+o,{...d,position:{x:p,y:g}}}),u=new Map(l.map(d=>[d.id||"",d]));return e.map(d=>d.id&&u.has(d.id)?u.get(d.id):d)}if(t==="grid"){let n=a?.columns||Math.min(4,Math.max(2,Math.ceil(Math.sqrt(e.length)))),r=[...e].sort((h,x)=>{let m=h.position.y-x.position.y;return Math.abs(m)>120?m:h.position.x-x.position.x}),i=Math.min(...e.map(h=>h.position.x)),s=Math.min(...e.map(h=>{let{headerOffset:x}=yi(h);return h.position.y-x})),l=Math.ceil(r.length/n),u=new Array(n).fill(0),d=new Array(l).fill(0);r.forEach((h,x)=>{let m=x%n,b=Math.floor(x/n),{width:v,height:C,headerOffset:S}=yi(h),k=C+S;v>u[m]&&(u[m]=v),k>d[b]&&(d[b]=k)});let f=new Array(n).fill(0),c=i;for(let h=0;h<n;h++)f[h]=c,c+=u[h]+o;let p=new Array(l).fill(0),g=s;for(let h=0;h<l;h++)p[h]=g,g+=d[h]+o;let w=r.map((h,x)=>{let m=x%n,b=Math.floor(x/n),{headerOffset:v}=yi(h),C=f[m],S=p[b]+v;return{...h,position:{x:C,y:S}}}),y=new Map(w.map(h=>[h.id||"",h]));return e.map(h=>h.id&&y.has(h.id)?y.get(h.id):h)}return e}var Hz=50,Bz=300;function Fc(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Fa={current:null,lastPushAt:0},ae=ed()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&Gm(),e({nodes:h0(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:x0(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&Gm();let o=t(),n=J_({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(s=>s.id===i.id));return e5(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&Gm(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},groupNodes:(a,o="\u65B0\u5EFA\u7EC4",n="#3b82f6")=>{let r=l5(t().nodes,a,o,n);return r?(e({nodes:r.nodes,selectedElement:{type:"node",id:r.groupId}}),r.groupId):null},ungroup:a=>{let o=u5(t().nodes,a);o&&e({nodes:o,selectedElement:{type:"none",id:null}})},toggleGroupCollapse:a=>{let o=d5(t().nodes,a);o&&e({nodes:o})},resizeGroup:(a,o)=>{let n=t().nodes,r=n.find(u=>u.id===a&&u.type==="group");if(!r)return;let i=o.x-r.position.x,s=o.y-r.position.y,l=n.map(u=>u.id===a?{...u,position:{x:o.x,y:o.y},width:o.width,height:o.height,style:{...u.style,width:o.width,height:o.height}}:u.parentId===a&&(i!==0||s!==0)?{...u,position:{x:u.position.x-i,y:u.position.y-s}}:u);e({nodes:l})},hydrateGraph:(a,o)=>{a5(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Fa.current=Fc(a,o),Fa.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Fc(t().nodes,t().edges);if(Fa.current&&Fa.current.sig===a.sig)return;let o=Date.now();if(Fa.current&&o-Fa.lastPushAt>=Bz){let n=Fa.current;e(r=>({past:[...r.past,n].slice(-Hz),future:[]})),Fa.lastPushAt=o}Fa.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Fc(o,n);Fa.current=r,e(s=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...s.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Fc(o,n);Fa.current=r,e(s=>({nodes:r.nodes,edges:r.edges,past:[...s.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Fa.current=Fc(a,o),Fa.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{t5(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Fa.current=null,Fa.lastPushAt=0}})),f5=()=>ae(X_(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var p5=()=>ae(e=>e.past.length>0),m5=()=>ae(e=>e.future.length>0),od=()=>ae(e=>e.nodes.filter(t=>t.selected&&t.type!=="group").length>=2);var N5=I(J(),1);var g5={total:0,completed:0,running:0,pending:0,percentage:0},ot=ed()(e=>({executionId:null,status:"idle",error:null,progress:g5,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:g5,nodeStatuses:{}})}));var h5=I(J(),1),x5="(prefers-reduced-motion: reduce)";function Fz(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(x5);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function Uz(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(x5).matches}function b5(){return(0,h5.useSyncExternalStore)(Fz,Uz)}var _o=I(J(),1),Ua=I(X(),1),qz=108,C5=64,Vz=186,w5=C5+Vz,_0=8,y5=.9,Gz=3,v5=.16,jz=.98,Xz=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let l=(0,_o.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${l}`,d=`beam-flow-${l}`,f=`beam-breathe-${l}`,c=(0,_o.useMemo)(()=>{if(t&&a){let b=a.x-t.x,v=a.y-t.y;return Math.max(250,Math.hypot(b,v)*1.15)}return 250},[t,a]),p=(0,_o.useRef)(null),[g,w]=(0,_o.useState)(c);(0,_o.useEffect)(()=>{if(p.current)try{let b=p.current.getTotalLength();Number.isFinite(b)&&b>0&&w(b)}catch{}},[e]);let{segments:y,calculatedDuration:h,periodPx:x}=(0,_o.useMemo)(()=>{let b=g>0?g:c,v=Math.max(1,Math.round(b/w5)),C=b/v,k=C*(C5/w5)/_0,_=o??Math.max(.5,C/qz);return{segments:Array.from({length:_0},(R,H)=>{let U=H/(_0-1),L=U**1.4,N=y5+(Gz-y5)*L,E=N+1.4,M=v5+(jz-v5)*L,A=-(H*(_/C)*k);return{index:H,progress:U,taperedProgress:L,coreWidth:N,haloWidth:E,opacity:M,dashArray:`${k} ${C-k}`,timeDelay:n+A}}),calculatedDuration:_,periodPx:C}},[g,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-x:0}px; }
      to { stroke-dashoffset: ${r?0:-x}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,Ua.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,Ua.jsxs)("defs",{children:[(0,Ua.jsx)("style",{children:m}),(0,Ua.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,Ua.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,Ua.jsxs)("feMerge",{children:[(0,Ua.jsx)("feMergeNode",{in:"blur"}),(0,Ua.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,Ua.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,Ua.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:y.map(b=>{let v=b.index>=5;return(0,Ua.jsxs)("g",{children:[v&&(0,Ua.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:b.haloWidth,strokeLinecap:"round",strokeDasharray:b.dashArray,fill:"none",filter:`url(#${u})`,opacity:b.opacity*.75,style:{animation:`${d} ${h}s linear ${b.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,Ua.jsx)("path",{d:e,stroke:b.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:b.coreWidth,strokeLinecap:"round",strokeDasharray:b.dashArray,fill:"none",opacity:b.opacity,filter:b.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${h}s linear ${b.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},b.index)})})]})},S5=(0,_o.memo)(Xz);var Uc=I(J(),1);var _5=I(J(),1);var Wz={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.type.import_asset":"\u5BFC\u5165\u7D20\u6750","node.type.group":"\u7EC4","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.replace":"\u66FF\u6362","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165\u7D20\u6750","pill.importImage":"\u5BFC\u5165\u7D20\u6750","pill.importVideo":"\u5BFC\u5165\u7D20\u6750","pill.importAudio":"\u5BFC\u5165\u7D20\u6750","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u652F\u6301\u56FE\u7247 / \u89C6\u9891 / \u97F3\u9891\uFF0C\u62D6\u62FD\u6216\u70B9\u51FB\u5BFC\u5165\u7D20\u6750","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u4EC5\u652F\u6301\u66FF\u6362\u672C\u5730\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u751F\u6210","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.import_asset":"\u5BFC\u5165\u7D20\u6750","toolbar.add.import_assetDesc":"\u5BFC\u5165\u672C\u5730\u56FE\u7247\u3001\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","toolbar.insertTemplate":"\u63D2\u5165\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateLabel":"\u6A21\u677F","toolbar.insertTemplateEmpty":"\u8FD8\u6CA1\u6709\u53EF\u63D2\u5165\u7684\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateNodes":"{count} \u4E2A\u8282\u70B9","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.importOk":"\u5DF2\u5BFC\u5165\u7D20\u6750","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002","group.defaultTitle":"\u65B0\u5EFA\u7EC4","group.defaultCountTitle":"\u7F16\u7EC4 {count} \u4E2A\u8282\u70B9","group.collapse":"\u6536\u8D77\u5206\u7EC4","group.expand":"\u5C55\u5F00\u5206\u7EC4","group.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","group.colorTitle":"\u9009\u62E9\u7EC4\u4E3B\u9898\u8272","group.layout":"\u5E03\u5C40","group.layoutTitle":"\u7EC4\u5185\u8282\u70B9\u81EA\u52A8\u5E03\u5C40","group.layoutHorizontal":"\u6C34\u5E73\u6392\u5217","group.layoutVertical":"\u5782\u76F4\u6392\u5217","group.layoutGrid":"\u7F51\u683C\u6392\u5217","group.layoutGridCompact":"\u7F51\u683C\u7D27\u51D1\u6392\u5217","group.execute":"\u6574\u7EC4\u6267\u884C","group.executeTitle":"\u72EC\u7ACB\u8FD0\u884C\u8BE5\u7EC4\u5185\u6240\u6709\u8282\u70B9","group.createWorkflow":"\u521B\u5EFA\u5DE5\u4F5C\u6D41","group.createWorkflowTitle":"\u5BFC\u51FA\u4E3A\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","group.ungroup":"\u89E3\u7EC4","group.ungroupTitle":"\u89E3\u9664\u5F53\u524D\u5206\u7EC4","group.float.createAsset":"\u521B\u5EFA\u8D44\u4EA7","group.float.createAssetTitle":"\u4FDD\u5B58\u9009\u4E2D\u8282\u70B9\u751F\u6210\u7269\u81F3\u8D44\u4EA7\u5E93","group.float.group":"\u6253\u7EC4","group.float.groupTitle":"\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4 (Cmd + G)","group.float.layoutTitle":"\u6392\u5217\u9009\u4E2D\u8282\u70B9","group.toast.grouped":"\u5DF2\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4","group.toast.ungrouped":"\u5DF2\u89E3\u9664\u5206\u7EC4","group.toast.layout":"\u5DF2\u5B8C\u6210\u5E03\u5C40\u6392\u5217","group.toast.execute":"\u5DF2\u5F00\u59CB\u6574\u7EC4\u6267\u884C","template.modal.title":"\u521B\u5EFA\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.name":"\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.namePlaceholder":"\u4F8B\u5982\uFF1A\u591C\u666F\u4EBA\u50CF\u7CBE\u4FEE\u5DE5\u4F5C\u6D41","template.modal.defaultName":"\u65B0\u5EFA\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.description":"\u529F\u80FD\u63CF\u8FF0","template.modal.descriptionPlaceholder":"\u7B80\u8981\u8BF4\u660E\u8BE5\u5DE5\u4F5C\u6D41\u7684\u529F\u80FD\u3001\u8F93\u5165\u8981\u6C42\u4E0E\u8F93\u51FA\u6548\u679C...","template.modal.tags":"\u5206\u7C7B\u6807\u7B7E","template.modal.tagsPlaceholder":"\u7528\u9017\u53F7\u5206\u9694\u6807\u7B7E","template.modal.defaultTags":"\u5B50\u56FE, \u53EF\u590D\u7528","template.modal.hint":"\u5305\u542B {count} \u4E2A\u8282\u70B9\u7684\u62D3\u6251\u4E0E\u53C2\u6570\u5C06\u88AB\u5C01\u88C5\u4E3A JSON \u6A21\u677F\uFF0C\u53EF\u63D2\u5165\u4EFB\u610F\u5F53\u524D\u753B\u5E03\u590D\u7528\u3002","template.modal.cancel":"\u53D6\u6D88","template.modal.submit":"\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.saving":"\u4FDD\u5B58\u4E2D...","template.modal.nameRequired":"\u8BF7\u8F93\u5165\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.saved":"\u5DE5\u4F5C\u6D41\u300C{name}\u300D\u5DF2\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.failed":"\u521B\u5EFA\u5DE5\u4F5C\u6D41\u5931\u8D25","template.missingGroup":"\u7F3A\u5C11\u5206\u7EC4","template.toast.inserted":"\u5DF2\u63D2\u5165\u6A21\u677F\u300C{name}\u300D","template.toast.loadFailed":"\u8BFB\u53D6\u6A21\u677F\u5931\u8D25","asset.modal.title":"\u6279\u91CF\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93","asset.modal.name":"\u8D44\u4EA7\u540D\u79F0","asset.modal.defaultName":"\u753B\u5E03\u4EA7\u7269","asset.modal.category":"\u8D44\u4EA7\u7C7B\u522B","asset.modal.files":"\u5F85\u5165\u5E93\u672C\u5730\u6587\u4EF6\uFF08{count} \u9879\uFF09","asset.modal.empty":"\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u8DEF\u5F84\u3002\u8FDC\u7A0B\u9884\u89C8\u6216 blob \u4E0D\u4F1A\u5199\u5165\u8D44\u4EA7\u5E93\u3002","asset.modal.tags":"\u6807\u7B7E","asset.modal.tagsPlaceholder":"\u9017\u53F7\u5206\u9694\u6807\u7B7E","asset.modal.defaultTags":"AIGC, \u5DE5\u4F5C\u6D41\u751F\u6210","asset.modal.cancel":"\u53D6\u6D88","asset.modal.submit":"\u786E\u8BA4\u5199\u5165\u8D44\u4EA7\u5E93","asset.modal.saving":"\u4FDD\u5B58\u4E2D...","asset.modal.noFiles":"\u6240\u9009\u8282\u70B9\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u6587\u4EF6\u8DEF\u5F84","asset.modal.nameRequired":"\u8BF7\u8F93\u5165\u8D44\u4EA7\u540D\u79F0","asset.modal.saved":"\u5DF2\u5199\u5165\u8D44\u4EA7\u5E93\uFF1A{name}","asset.modal.failed":"\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93\u5931\u8D25","asset.scope.character":"\u89D2\u8272 (Character)","asset.scope.scene":"\u573A\u666F (Scene)","asset.scope.prop":"\u9053\u5177 (Prop)","asset.scope.style":"\u98CE\u683C\u5305 (Style)","asset.scope.knowledge":"\u77E5\u8BC6\u5305 (Knowledge)","asset.scope.custom":"\u81EA\u5B9A\u4E49\u7D20\u6750 (Custom)"},k5=Wz;var Yz={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.type.import_asset":"Import Asset","node.type.group":"Group","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.replace":"Replace","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import Asset","pill.importImage":"Import Asset","pill.importVideo":"Import Asset","pill.importAudio":"Import Asset","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Supports image / video / audio. Drop or click to import asset","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import asset nodes only support replacing local files, not generation","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.import_asset":"Import Asset","toolbar.add.import_assetDesc":"Import local image, video, or audio files","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","toolbar.insertTemplate":"Insert workflow template","toolbar.insertTemplateLabel":"Templates","toolbar.insertTemplateEmpty":"No reusable workflow templates yet","toolbar.insertTemplateNodes":"{count} nodes","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.importOk":"Asset imported","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker.","group.defaultTitle":"New group","group.defaultCountTitle":"Group ({count} nodes)","group.collapse":"Collapse group","group.expand":"Expand group","group.renameHint":"Double-click to rename","group.colorTitle":"Choose group color","group.layout":"Layout","group.layoutTitle":"Auto-layout nodes in this group","group.layoutHorizontal":"Arrange horizontally","group.layoutVertical":"Arrange vertically","group.layoutGrid":"Arrange as grid","group.layoutGridCompact":"Compact grid","group.execute":"Run group","group.executeTitle":"Run every node in this group","group.createWorkflow":"Create workflow","group.createWorkflowTitle":"Export as a reusable workflow template","group.ungroup":"Ungroup","group.ungroupTitle":"Ungroup the selected nodes","group.float.createAsset":"Create asset","group.float.createAssetTitle":"Save selected outputs to the asset library","group.float.group":"Group","group.float.groupTitle":"Group selected nodes (Cmd + G)","group.float.layoutTitle":"Arrange selected nodes","group.toast.grouped":"Selected nodes grouped","group.toast.ungrouped":"Group removed","group.toast.layout":"Layout applied","group.toast.execute":"Group execution started","template.modal.title":"Create reusable workflow template","template.modal.name":"Workflow name","template.modal.namePlaceholder":"e.g. Night portrait retouch workflow","template.modal.defaultName":"New workflow template","template.modal.description":"Description","template.modal.descriptionPlaceholder":"What this workflow does, expected inputs, and outputs...","template.modal.tags":"Tags","template.modal.tagsPlaceholder":"Comma-separated tags","template.modal.defaultTags":"subgraph, reusable","template.modal.hint":"Topology and params of {count} nodes will be saved as JSON and can be inserted into any canvas.","template.modal.cancel":"Cancel","template.modal.submit":"Save to template library","template.modal.saving":"Saving...","template.modal.nameRequired":"Enter a workflow name","template.modal.saved":"Workflow \u201C{name}\u201D saved to the template library","template.modal.failed":"Failed to create workflow","template.missingGroup":"Missing group","template.toast.inserted":"Inserted template \u201C{name}\u201D","template.toast.loadFailed":"Failed to load template","asset.modal.title":"Save to asset library","asset.modal.name":"Asset name","asset.modal.defaultName":"Canvas output","asset.modal.category":"Asset type","asset.modal.files":"Local files to ingest ({count})","asset.modal.empty":"No local paths to ingest. Remote previews and blobs are skipped.","asset.modal.tags":"Tags","asset.modal.tagsPlaceholder":"Comma-separated tags","asset.modal.defaultTags":"AIGC, workflow","asset.modal.cancel":"Cancel","asset.modal.submit":"Write to asset library","asset.modal.saving":"Saving...","asset.modal.noFiles":"Selected nodes have no ingestible local file path","asset.modal.nameRequired":"Enter an asset name","asset.modal.saved":"Wrote to asset library: {name}","asset.modal.failed":"Failed to save to asset library","asset.scope.character":"Character","asset.scope.scene":"Scene","asset.scope.prop":"Prop","asset.scope.style":"Style pack","asset.scope.knowledge":"Knowledge pack","asset.scope.custom":"Custom"},L5=Yz;var I0={zh:k5,en:L5},Xm="zh",M0=new Set;function Kz(e){return M0.add(e),()=>M0.delete(e)}function Zz(){return Xm}function I5(e){let t=e==="en"?"en":"zh";if(t!==Xm){Xm=t;for(let a of M0)a()}}function ks(e){return I0[Xm][e]??I0.zh[e]??I0.en[e]??e}function le(){return(0,_5.useSyncExternalStore)(Kz,Zz),ks}var Ym=I(X(),1),Wm=28,$z=({edgeId:e,x:t,y:a})=>{let o=le(),n=ae(s=>s.applyCanvasInputMutation),r=(0,Uc.useCallback)(s=>{s.preventDefault(),s.stopPropagation()},[]),i=(0,Uc.useCallback)(s=>{s.preventDefault(),s.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,Ym.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-Wm/2,y:a-Wm/2,width:Wm,height:Wm,children:(0,Ym.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,Ym.jsx)(ys,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},M5=(0,Uc.memo)($z);var nd=I(X(),1),Qz=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l,selected:u,animated:d,data:f,style:c})=>{let[p,g,w]=Xl({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:s,targetPosition:l}),y=ae(C=>{let S=C.selectedElement.id;return S&&(S===t||S===a)?!0:C.nodes.some(k=>k.selected&&(k.id===t||k.id===a))}),h=ot(C=>C.nodeStatuses[a]==="running"),x=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,b=y||x||h||m,v=b5();return(0,nd.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,nd.jsx)(Zl,{id:e,path:p,style:c}),b&&!v&&(0,nd.jsx)(S5,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:h?.8:void 0}),(0,nd.jsx)(M5,{edgeId:e,x:g,y:w})]})},N0=(0,N5.memo)(Qz);var Ls=I(J(),1);function ge(e){e.stopPropagation()}function E0(e){e.preventDefault(),e.stopPropagation()}var he=I(X(),1),Jz=[{type:"import_asset",Icon:eo,color:"#38bdf8",bg:"rgba(56, 189, 248, 0.16)"},{type:"text",Icon:ka,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:hr,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:on,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:_a,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:ko,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:La,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],e9=({onAddNode:e,pointerMode:t="select",onPointerModeChange:a,onOpenAssets:o,onOpenHelp:n,isAddMenuOpen:r,onToggleAddMenu:i,isAssetsOpen:s=!1,templates:l=[],onInsertTemplate:u})=>{let d=le(),[f,c]=(0,Ls.useState)(!1),[p,g]=(0,Ls.useState)(!1),w=r!==void 0?r:f,y=i||(()=>c(m=>!m)),h=(0,Ls.useCallback)(m=>{e(m),i?i():c(!1)},[e,i]),x=[{key:"select",icon:(0,he.jsx)(Jl,{size:18}),label:d("toolbar.selectMode"),onClick:()=>a?.("select")},{key:"pan",icon:(0,he.jsx)(Ql,{size:18}),label:d("toolbar.panMode"),onClick:()=>a?.("pan")}];return(0,he.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:ge,onMouseDown:ge,children:[(0,he.jsxs)("div",{style:{position:"relative"},children:[(0,he.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:y,onContextMenu:E0,title:d("toolbar.addNode"),children:(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(ft,{size:24})})}),w&&(0,he.jsx)("div",{className:"wf-dock-add-popover",children:Jz.map(m=>(0,he.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:E0,children:[(0,he.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,he.jsx)(m.Icon,{size:18})}),(0,he.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,he.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,he.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,he.jsx)("div",{className:"wf-canvas-toolbar__divider"}),u&&(0,he.jsxs)("div",{style:{position:"relative"},children:[(0,he.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>g(m=>!m),title:d("toolbar.insertTemplate"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(gr,{size:20})}),(0,he.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.insertTemplateLabel")})]}),p&&(0,he.jsx)("div",{className:"wf-dock-add-popover wf-template-picker",children:l.length===0?(0,he.jsx)("div",{className:"wf-template-picker__empty",children:d("toolbar.insertTemplateEmpty")}):l.map(m=>(0,he.jsxs)("button",{type:"button",className:"wf-template-picker__item",onClick:()=>{u(m.id),g(!1)},children:[(0,he.jsx)("span",{children:m.name}),(0,he.jsx)("span",{className:"wf-template-picker__meta",children:d("toolbar.insertTemplateNodes").replace("{count}",String(m.nodeCount))})]},m.id))})]}),(0,he.jsx)(Pc,{items:x,selectedKeys:[t],placement:"topCenter",children:(0,he.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(t==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:t==="select"?(0,he.jsx)(Jl,{size:20}):(0,he.jsx)(Ql,{size:20})}),(0,he.jsx)(fs,{size:14,style:{opacity:.6,marginLeft:2}})]})}),(0,he.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${s?"wf-canvas-toolbar__item--active":""}`,onClick:o,title:d("toolbar.assets"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(mc,{size:20})}),(0,he.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),n&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,he.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:n,title:d("toolbar.help"),children:[(0,he.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,he.jsx)(tn,{size:20})}),(0,he.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},E5=(0,Ls.memo)(e9);var rd=I(J(),1);var ve=I(X(),1),t9={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},a9=e=>Math.round(e.transform[2]*100),o9=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:s,onCancelExecution:l,onResetExecution:u})=>{let d=le(),{zoomIn:f,zoomOut:c,fitView:p}=Ca(),g=Me(a9),w=ot(T=>T.status),y=ot(T=>T.progress),h=ot(T=>T.error),x=w==="pending"||w==="running",m=w==="paused",b=w==="completed"||w==="error"||w==="cancelled",v=y.total>0,C=(0,rd.useCallback)(()=>{p({duration:250,padding:.1})},[p]),S=(0,rd.useCallback)(()=>{f({duration:150})},[f]),k=(0,rd.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,ve.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:ge,onMouseDown:ge,children:[r&&(x||m||b&&u?(0,ve.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[x||m?(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d(t9[w]),v&&` (${y.completed}/${y.total})`]}),x?(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,ve.jsx)(_c,{size:14})}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:s,title:d("exec.resumeTitle"),children:(0,ve.jsx)(So,{size:14})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:l,title:d("exec.cancelTitle"),children:(0,ve.jsx)(ha,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(So,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&u&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,ve.jsx)(bs,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(So,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,ve.jsx)(Cc,{size:15})}),(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:k,title:d("header.zoomOut"),children:(0,ve.jsx)(Sc,{size:15})}),(0,ve.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:d("header.zoomIn"),children:(0,ve.jsx)(ft,{size:15})})]}),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,ve.jsx)(Ba,{size:15})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,ve.jsx)(Rc,{size:15})}),(0,ve.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,ve.jsx)(vc,{size:15})}),n&&(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)(Pc,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,ve.jsx)(bi,{size:15})})})]})]})]})},T5=(0,rd.memo)(o9);var xa=I(J(),1);var Dt="/omnimux-workflow";var Nt={manifest:`${Dt}/api/manifest`,canvasJs:`${Dt}/canvas.js`,workspaces:`${Dt}/api/workspaces`,workspace:e=>`${Dt}/api/workspaces/${e}`,workspaceVersion:e=>`${Dt}/api/workspaces/${e}/version`,workspaceAssets:e=>`${Dt}/api/workspaces/${e}/assets`,workspaceAssetsMkdir:e=>`${Dt}/api/workspaces/${e}/assets/mkdir`,workspaceAssetsIndex:e=>`${Dt}/api/workspaces/${e}/assets/index`,capabilities:`${Dt}/api/capabilities`,media:`${Dt}/media`,pick:`${Dt}/api/pick`,localFile:`${Dt}/api/local-file`,localFileProbe:`${Dt}/api/local-file/probe`,executions:e=>`${Dt}/api/workspaces/${e}/executions`,execution:(e,t)=>`${Dt}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${Dt}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${Dt}/api/workspaces/${e}/executions/${t}/events`,templates:`${Dt}/api/templates`,template:e=>`${Dt}/api/templates/${e}`};async function Yt(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body),signal:t.signal}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function A5(){return Yt(Nt.capabilities)}function D5(e,t){return Yt(Nt.workspaces,{method:"POST",body:{name:e,id:t}})}function qc(e){return Yt(Nt.workspace(encodeURIComponent(e)))}function R5(e){return Yt(Nt.workspaceVersion(encodeURIComponent(e)))}function P5(e,t){return Yt(Nt.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function z5(e,t={}){return Yt(Nt.executions(encodeURIComponent(e)),{method:"POST",body:t})}function O5(e){return Yt(Nt.executions(encodeURIComponent(e)))}function H5(e,t){return Yt(Nt.execution(encodeURIComponent(e),encodeURIComponent(t)))}function B5(e,t){return Yt(Nt.workspaceAssets(encodeURIComponent(e)),{signal:t})}function F5(e,t){return Yt(Nt.workspaceAssets(encodeURIComponent(e)),{method:"PUT",body:t})}function U5(e,t){return Yt(Nt.workspaceAssetsMkdir(encodeURIComponent(e)),{method:"POST",body:t})}function q5(e,t){return Yt(Nt.workspaceAssetsIndex(encodeURIComponent(e)),{method:"POST",body:t})}function Pn(){return Yt(Nt.pick,{method:"POST",body:{kind:"file"}})}function V5(e){return Yt(Nt.localFileProbe,{method:"POST",body:{paths:e}})}function G5(e,t,a){return Yt(Nt.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var n9=["character","scene","style","prop","knowledge","custom"],_s={character:"\u89D2\u8272",scene:"\u573A\u666F",style:"\u98CE\u683C\u5305",prop:"\u9053\u5177",knowledge:"\u77E5\u8BC6\u5305",custom:"\u81EA\u5B9A\u4E49"},T0=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:_s.character},{id:"scene",label:_s.scene},{id:"style",label:_s.style},{id:"prop",label:_s.prop},{id:"knowledge",label:_s.knowledge},{id:"custom",label:_s.custom}];function r9(e){return typeof e=="string"&&n9.includes(e)?e:"custom"}function j5(e,t){let a=new URLSearchParams({id:e});return t&&a.set("file",t),`/omnimux/assets/library/preview?${a.toString()}`}function i9(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.trim()!==""):[]}function A0(e){let t=typeof e.id=="string"&&e.id.trim()!==""?e.id:"",a=typeof e.name=="string"&&e.name.trim()!==""?e.name:"\u672A\u547D\u540D\u4E3B\u4F53",o=r9(e.type),n=_s[o],r=Array.isArray(e.files)?e.files:[],i=e.cover&&typeof e.cover.id=="string"&&e.cover.id||(typeof e.cover_file_id=="string"?e.cover_file_id:"")||(typeof r[0]?.id=="string"?r[0].id:""),s=t&&i?j5(t,i):"",l=r.map(c=>t&&typeof c.id=="string"?j5(t,c.id):"").filter(c=>c!=="").slice(0,4),u=i9(e.tags).filter(c=>c!==n),d=typeof e.updatedAt=="number"?e.updatedAt:typeof e.updated_at=="string"&&Date.parse(e.updated_at)||0,f=r.map(c=>{let p=typeof c.real_path=="string"?c.real_path.trim():"",g=typeof c.original_name=="string"?c.original_name.trim():"",w=typeof c.id=="string"?c.id:"";return!p&&!w&&!g?null:{...w?{id:w}:{},...p?{real_path:p}:{},...g?{original_name:g}:{}}}).filter(c=>!!c);return{id:t,name:a,avatar:s,itemCount:r.length,tags:[n,...u],updatedAt:d,previewUrls:l.length>0?l:s?[s]:[],type:o,...f.length>0?{files:f}:{}}}function Km(e){if(!e.ok){let o=e.body?.error;return e.status===501||o==="picker-unsupported"?{kind:"unsupported"}:{kind:"error",message:e.body?.message||e.body?.error||`HTTP ${String(e.status)}`}}let t=e.body?.paths,a=Array.isArray(t)?t.filter(o=>typeof o=="string"&&o.trim()!==""):typeof e.body?.path=="string"&&e.body.path.trim()!==""?[e.body.path]:[];return a.length===0?{kind:"cancel"}:{kind:"ok",paths:a}}function s9(){return globalThis.fetch.bind(globalThis)}async function D0(e){try{let t=await e.json();if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{}return{}}function Vc(e={}){let t=e.fetch??s9();async function a(r={},i){try{let s=new URLSearchParams;r.type&&r.type!=="all"&&s.set("type",r.type),r.q&&s.set("q",r.q);let l=s.toString()?`?${s.toString()}`:"",u=await t(`/omnimux/assets/library${l}`,{method:"GET",signal:i}),d=await D0(u);if(!u.ok)return{ok:!1,status:u.status,subjects:[],error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let c=(Array.isArray(d.assets)?d.assets:[]).filter(p=>!!p&&typeof p=="object").map(p=>A0(p)).filter(p=>p.id!=="");return{ok:!0,status:u.status,subjects:c}}catch(s){return i?.aborted||s instanceof Error&&s.name==="AbortError"?{ok:!1,status:0,subjects:[],error:"aborted"}:{ok:!1,status:0,subjects:[],error:"network"}}}async function o(r,i="custom",s){try{let l={name:r,type:i};Array.isArray(s)&&s.length>0&&(l.files=s);let u=await t("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),d=await D0(u);if(!u.ok)return{ok:!1,status:u.status,subject:null,error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let f=d.asset&&typeof d.asset=="object"?d.asset:{name:r,type:i};return{ok:!0,status:u.status,subject:A0(f)}}catch{return{ok:!1,status:0,subject:null,error:"network"}}}async function n(r){try{let i=await t("/omnimux/assets/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:r})}),s=await D0(i),l=Km({ok:i.ok,status:i.status,body:{error:typeof s.error=="string"?s.error:void 0,message:typeof s.message=="string"?s.message:void 0,path:typeof s.path=="string"||s.path===null?s.path:null,paths:Array.isArray(s.paths)?s.paths:[]}});return{ok:i.ok,status:i.status,interpretation:l}}catch{return{ok:!1,status:0,interpretation:{kind:"error",message:"network"}}}}return{listLibrary:a,createLibraryAsset:o,pickAssets:n}}var ZZ=Vc();function sn(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function W5(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function qa(e){return typeof e=="string"?e.trim():""}function Y5(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function l9(e){return typeof e=="string"&&e.startsWith("blob:")}function ln(e){let t=qa(e);if(!(!t||l9(t)))return t}function d9(e){return W5(e.data)?e.data:{}}function K5(e){return qa(e.realPath)||qa(e.real_path)}function X5(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function u9(e){if(e)for(let t of e){let a=ln(t?.url);if(a)return a}}function c9(e,t){let a=qa(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=qa(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function f9(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=qa(t.mediaUrl)||void 0,n=a?sn(a,X5(t),o):void 0;return ln(n)||ln(t.previewUrl)||ln(t.imageUrl)||ln(t.outputUrl)||ln(t.coverUrl)||ln(t.mediaUrl)||ln(t.outputVideoUrl)||ln(t.thumbnailUrl)||u9(X5(t))}function p9(e){let t=Y5(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=W5(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function m9(e,t,a){let o=K5(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(qa(t.content)||qa(t.generatedContent)):e==="table"?p9(t):e==="video_composition"?!!(ln(t.outputVideoUrl)||ln(t.thumbnailUrl)):!1}function g9(e,t,a){return qa(a.originalName)||qa(a.label)||qa(a.title)||qa(a.name)||`${e} #${t.slice(-4)}`}function h9(e){let t=qa(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function x9(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function b9(e){let t=qa(e.id);if(!t)return null;let a=d9(e),o=c9(e,a),n=f9(o,a);if(!m9(o,a,n))return null;let r=K5(a),i=Y5(a.updatedAt)??0,s=Ss(a),l=s==="import"?"":qa(a.prompt),u={id:t,name:g9(o,t,a),type:o,status:h9(a),nodeKind:s,updatedAt:i};n&&(u.previewUrl=n),r&&(u.real_path=r),l&&(u.prompt=l);let d=x9(a);return d&&(u.tags=d),u}function Z5(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=b9(a);o&&t.push(o)}return t}var Zm=I(J(),1),$5=I(ea(),1);var yr=I(X(),1),R0=["image","video","audio","text","other"],w9=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],Q5=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,Zm.useRef)(null);if((0,Zm.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-160),l=a.length===0||R0.every(f=>a.includes(f)),u=f=>f==="all"?l:l?!0:a.includes(f),d=f=>{if(f==="all"){o(l?["__none__"]:[]);return}if(l){let p=R0.filter(g=>g!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],R0.every(p=>c.includes(p))?o([]):o(c)};return(0,$5.createPortal)((0,yr.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"140px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:f=>f.stopPropagation(),children:(0,yr.jsx)("div",{className:"wf-popover-body",children:w9.map(f=>{let c=u(f.id);return(0,yr.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,yr.jsxs)("div",{className:"wf-popover-item-left",children:[(0,yr.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,yr.jsx)(Bt,{size:10,strokeWidth:3})}),(0,yr.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var $m=I(J(),1),J5=I(ea(),1);var vi=I(X(),1),P0=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],eI=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,$m.useRef)(null);if((0,$m.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-150),l=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,J5.createPortal)((0,vi.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"136px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:u=>u.stopPropagation(),children:(0,vi.jsx)("div",{className:"wf-popover-body",children:P0.map(u=>{let d=a.includes(u.id);return(0,vi.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>l(u.id),children:(0,vi.jsxs)("div",{className:"wf-popover-item-left",children:[(0,vi.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,vi.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var Qm=I(J(),1),tI=I(ea(),1);var Va=I(X(),1),aI=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let s=(0,Qm.useRef)(null);if((0,Qm.useEffect)(()=>{if(!e)return;let d=c=>{s.current&&!s.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let l=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,tI.createPortal)((0,Va.jsxs)("div",{ref:s,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${l}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:d=>d.stopPropagation(),children:[(0,Va.jsxs)("div",{className:"wf-popover-body",children:[(0,Va.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,Va.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,Va.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]}),(0,Va.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,Va.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,Va.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]})]}),(0,Va.jsx)("div",{className:"wf-popover-divider"}),(0,Va.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,Va.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,Va.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,Va.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var Jm=I(J(),1),oI=I(ea(),1);var Is=I(X(),1),nI=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,Jm.useRef)(null);if((0,Jm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,s=Math.min(t.left,window.innerWidth-180),l=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,oI.createPortal)((0,Is.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${s}px`,width:"160px",zIndex:9999},onMouseDown:ge,onPointerDown:ge,onClick:u=>u.stopPropagation(),children:(0,Is.jsx)("div",{className:"wf-popover-body",children:l.map(u=>{let d=a===u.id;return(0,Is.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,Is.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,Is.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var eg=I(J(),1),rI=I(ea(),1);var pe=I(X(),1),iI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,eg.useRef)(null);if((0,eg.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=220,l=440,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,rI.createPortal)((0,pe.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ge,onPointerDown:ge,onClick:c=>c.stopPropagation(),children:[(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,pe.jsx)(In,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,pe.jsx)(gs,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,pe.jsx)(Mt,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,pe.jsx)(oc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,pe.jsx)(In,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,pe.jsx)(lc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,pe.jsx)(vo,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,pe.jsx)(mi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,pe.jsx)(mi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,pe.jsx)(pc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,pe.jsx)(yc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,pe.jsx)(Tn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,pe.jsx)(Lo,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var tg=I(J(),1),sI=I(ea(),1);var Kt=I(X(),1),lI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,tg.useRef)(null);if((0,tg.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=190,l=220,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,sI.createPortal)((0,Kt.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ge,onPointerDown:ge,onClick:c=>c.stopPropagation(),children:[(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,Kt.jsx)(Ha,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,Kt.jsx)(gs,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,Kt.jsx)(vo,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,Kt.jsx)(ps,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,Kt.jsx)("div",{className:"wf-context-menu-divider"}),(0,Kt.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,Kt.jsx)(Lo,{size:14,className:"wf-context-menu-icon"}),(0,Kt.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var ag=I(J(),1),dI=I(ea(),1);var Ma=I(X(),1),uI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,ag.useRef)(null);if((0,ag.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let s=190,l=180,u=Math.min(t,window.innerWidth-s-10),d=Math.min(a,window.innerHeight-l-10),f=c=>{n(c,o),r()};return(0,dI.createPortal)((0,Ma.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${s}px`,zIndex:1e4},onMouseDown:ge,onPointerDown:ge,onClick:c=>c.stopPropagation(),children:[(0,Ma.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,Ma.jsx)(vo,{size:14,className:"wf-context-menu-icon"}),(0,Ma.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,Ma.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,Ma.jsx)(Tn,{size:14,className:"wf-context-menu-icon"}),(0,Ma.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,Ma.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,Ma.jsx)(ps,{size:14,className:"wf-context-menu-icon"}),(0,Ma.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,Ma.jsx)("div",{className:"wf-context-menu-divider"}),(0,Ma.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,Ma.jsx)(Lo,{size:14,className:"wf-context-menu-icon"}),(0,Ma.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var Io=I(J(),1);var se=I(X(),1),z0=1440*60*1e3;function y9(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=z0:t==="7d"?a<=7*z0:t==="30d"?a<=30*z0:!0}var v9={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function C9(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=P0.find(i=>i.id===o);return[...v9[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function S9(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var cI=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:s,onViewModeChange:l})=>{let[u,d]=(0,Io.useState)(""),f=t!==void 0?t:u,c=D=>{d(D),a?.(D)},[p,g]=(0,Io.useState)("tree"),w=s??p,y=D=>{g(D),l?.(D)},[h,x]=(0,Io.useState)(null),[m,b]=(0,Io.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[v,C]=(0,Io.useState)(!1),[S,k]=(0,Io.useState)(!1),[_,T]=(0,Io.useState)(!1),[R,H]=(0,Io.useState)(null),[U,L]=(0,Io.useState)(null),[N,E]=(0,Io.useState)(null),M=D=>{switch(D){case"image":return(0,se.jsx)(Ha,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,se.jsx)(La,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,se.jsx)(_a,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,se.jsx)(ka,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,se.jsx)(Mt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},A=(0,Io.useMemo)(()=>{let D=e.filter(B=>{if(f.trim()){let z=f.toLowerCase();if(!(B.name.toLowerCase().includes(z)||B.prompt&&B.prompt.toLowerCase().includes(z)))return!1}return!(!S9(B.type,m.types)||!C9(B,m.tags)||!y9(B.updatedAt||0,m.timeRange))});return D.sort((B,z)=>m.sortOrder==="desc"?(z.updatedAt||0)-(B.updatedAt||0):(B.updatedAt||0)-(z.updatedAt||0)),D},[e,f,m]),O=D=>B=>{B.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-canvas-node",nodeId:D.id})),B.dataTransfer.effectAllowed="move"};return(0,se.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,se.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,se.jsxs)("div",{className:"wf-search-row-compact",children:[(0,se.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,se.jsx)(an,{size:13,className:"wf-search-icon"}),(0,se.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:D=>c(D.target.value)})]}),(0,se.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,se.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>y("tree"),children:(0,se.jsx)(xr,{size:13})}),(0,se.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>y("grid"),children:(0,se.jsx)(Ba,{size:13})})]}),(0,se.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,se.jsx)(br,{size:13})})]}),(0,se.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,se.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,se.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:D=>{H(D.currentTarget.getBoundingClientRect()),C(B=>!B),k(!1),T(!1)},children:[(0,se.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,se.jsx)(Wt,{size:11})]})}),(0,se.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,se.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:D=>{L(D.currentTarget.getBoundingClientRect()),k(B=>!B),C(!1),T(!1)},children:[(0,se.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,se.jsx)(Wt,{size:11})]})}),(0,se.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,se.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:D=>{E(D.currentTarget.getBoundingClientRect()),T(B=>!B),C(!1),k(!1)},children:[(0,se.jsx)("span",{children:"\u65F6\u95F4"}),(0,se.jsx)(Wt,{size:11})]})})]})]}),(0,se.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,se.jsx)(ga,{size:24,className:"wf-assets-empty-icon"}),(0,se.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,se.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):A.length===0?(0,se.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,se.jsx)(ga,{size:24,className:"wf-assets-empty-icon"}),(0,se.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,se.jsx)("div",{className:"wf-tree-list-container-compact",children:A.map(D=>{let B=h===D.id;return(0,se.jsxs)("div",{"data-id":D.id,className:`wf-tree-item-compact ${B?"selected":""}`,draggable:!0,onDragStart:O(D),onClick:()=>{x(D.id),o(D.id)},onContextMenu:z=>{z.preventDefault(),x(D.id),n(z,D)},onMouseEnter:z=>r(D,z),onMouseLeave:()=>r(null),children:[D.previewUrl?(0,se.jsx)("img",{src:D.previewUrl,alt:D.name,className:"wf-tree-file-thumb-compact"}):(0,se.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:M(D.type)}),(0,se.jsx)("span",{className:"wf-tree-name-compact",title:D.name,children:D.name}),D.nodeKind?(0,se.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${D.nodeKind}`,children:D.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null,(0,se.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:z=>{z.stopPropagation(),o(D.id)},children:(0,se.jsx)(In,{size:12})})]},D.id)})}):(0,se.jsx)("div",{className:"wf-grid-view-container-compact",children:A.map(D=>(0,se.jsxs)("div",{"data-id":D.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:O(D),onClick:()=>{x(D.id),o(D.id)},onContextMenu:B=>{B.preventDefault(),n(B,D)},onMouseEnter:B=>r(D,B),onMouseLeave:()=>r(null),children:[(0,se.jsx)("div",{className:"wf-grid-card-thumb-compact",children:D.previewUrl?(0,se.jsx)("img",{src:D.previewUrl,alt:D.name}):M(D.type)}),(0,se.jsxs)("div",{className:"wf-grid-card-meta-compact",children:[(0,se.jsx)("div",{className:"wf-grid-card-title-compact",title:D.name,children:D.name}),D.nodeKind?(0,se.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${D.nodeKind}`,children:D.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]})]},D.id))})}),(0,se.jsx)(Q5,{isOpen:v,anchorRect:R,selectedTypes:m.types,onChange:D=>b(B=>({...B,types:D})),onClose:()=>C(!1)}),(0,se.jsx)(eI,{isOpen:S,anchorRect:U,selectedTags:m.tags,onChange:D=>b(B=>({...B,tags:D})),onClose:()=>k(!1)}),(0,se.jsx)(aI,{isOpen:_,anchorRect:N,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:D=>b(B=>({...B,sortOrder:D})),onRangeChange:D=>b(B=>({...B,timeRange:D})),onClose:()=>T(!1)})]})};var Gc=I(J(),1);var fe=I(X(),1),fI=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:s})=>{let[l,u]=(0,Gc.useState)("tree"),[d,f]=(0,Gc.useState)(""),[c,p]=(0,Gc.useState)(null),[g,w]=(0,Gc.useState)({}),y=v=>{w(C=>({...C,[v]:!C[v]}))},h=v=>{switch(v){case"image":return(0,fe.jsx)(Ha,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,fe.jsx)(La,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,fe.jsx)(_a,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,fe.jsx)(ka,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,fe.jsx)(vo,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,fe.jsx)(Mt,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},x=e.filter(v=>{if(d.trim()){let C=d.toLowerCase();if(!(v.name.toLowerCase().includes(C)||v.tags&&v.tags.some(k=>k.toLowerCase().includes(C))))return!1}return!0}),m=v=>x.filter(C=>(C.parentId??null)===v),b=(v,C)=>{let S=[];for(let k of m(v)){let _=k.type==="folder",T=_&&(g[k.id]??C===0),R=c===k.id;S.push((0,fe.jsxs)("div",{className:`wf-tree-item-compact ${R?"selected":""}`,style:{paddingLeft:`${8+C*14}px`},"data-asset-id":k.id,"data-parent-id":k.parentId??"",draggable:!_,onDragStart:H=>{_||(H.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:k})),H.dataTransfer.effectAllowed="copy")},onClick:()=>{p(k.id),_&&y(k.id)},onDoubleClick:()=>{_||i(k)},onContextMenu:H=>{H.preventDefault(),p(k.id),a(H,k,_)},onMouseEnter:H=>o(k,H),onMouseLeave:()=>o(null),children:[_?(0,fe.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:T?(0,fe.jsx)(Wt,{size:11}):(0,fe.jsx)(mr,{size:11})}):null,k.previewUrl?(0,fe.jsx)("img",{src:k.previewUrl,alt:k.name,className:"wf-tree-file-thumb-compact"}):(0,fe.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:h(k.type)}),(0,fe.jsx)("span",{className:"wf-tree-name-compact",title:k.name,children:k.name}),!_&&(0,fe.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:H=>{H.stopPropagation(),i(k)},children:(0,fe.jsx)(In,{size:12})})]},k.id)),_&&T&&S.push(...b(k.id,C+1))}return S};return(0,fe.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,fe.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,fe.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,fe.jsx)(Mt,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,fe.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,fe.jsx)(mr,{size:14,className:"wf-subject-hero-arrow"})]}),(0,fe.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,fe.jsxs)("div",{className:"wf-search-row-compact",children:[(0,fe.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,fe.jsx)(an,{size:13,className:"wf-search-icon"}),(0,fe.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:v=>f(v.target.value)})]}),(0,fe.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,fe.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${l==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,fe.jsx)(xr,{size:13})}),(0,fe.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${l==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,fe.jsx)(Ba,{size:13})})]}),(0,fe.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:s,children:(0,fe.jsx)(br,{size:13})})]})}),(0,fe.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:x.length===0?(0,fe.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,fe.jsx)(ga,{size:24,className:"wf-assets-empty-icon"}),(0,fe.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):l==="tree"?(0,fe.jsx)("div",{className:"wf-tree-list-container-compact",children:b(null,0)}):(0,fe.jsx)("div",{className:"wf-grid-view-container-compact",children:x.map(v=>(0,fe.jsxs)("div",{className:"wf-grid-card-compact",draggable:v.type!=="folder",onDragStart:C=>{v.type!=="folder"&&(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:v})),C.dataTransfer.effectAllowed="copy")},onClick:()=>p(v.id),onDoubleClick:()=>{v.type!=="folder"&&i(v)},onContextMenu:C=>{C.preventDefault(),p(v.id),a(C,v,v.type==="folder")},onMouseEnter:C=>o(v,C),onMouseLeave:()=>o(null),children:[(0,fe.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[v.previewUrl?(0,fe.jsx)("img",{src:v.previewUrl,alt:v.name}):h(v.type),v.duration&&(0,fe.jsx)("span",{className:"wf-grid-card-duration-compact",children:v.duration})]}),(0,fe.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,fe.jsx)("div",{className:"wf-grid-card-title-compact",title:v.name,children:v.name})})]},v.id))})}),(0,fe.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,fe.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,fe.jsx)(ms,{size:13}),(0,fe.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,fe.jsx)(us,{size:13}),(0,fe.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var id=I(J(),1);var Ne=I(X(),1),pI=({subjects:e,error:t,onBack:a,onSelectSubject:o,onCreateSubject:n})=>{let[r,i]=(0,id.useState)(""),[s,l]=(0,id.useState)("all"),[u,d]=(0,id.useState)("recent"),[f,c]=(0,id.useState)(!1),[p,g]=(0,id.useState)(null),w=x=>{g(x.currentTarget.getBoundingClientRect()),c(m=>!m)},y=e.filter(x=>{if(s!=="all")if(x.type){if(x.type!==s)return!1}else{let b=T0.find(v=>v.id===s);if(b&&b.id!=="all"&&!x.tags.some(C=>C===b.label))return!1}if(!r.trim())return!0;let m=r.toLowerCase();return x.name.toLowerCase().includes(m)||x.tags.some(b=>b.toLowerCase().includes(m))}).sort((x,m)=>u==="recent"?m.updatedAt-x.updatedAt:u==="name"?x.name.localeCompare(m.name):u==="count"?m.itemCount-x.itemCount:0);return(0,Ne.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Ne.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Ne.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:a,children:[(0,Ne.jsx)(ac,{size:13}),(0,Ne.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Ne.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:w,children:[(0,Ne.jsx)(ws,{size:11}),(0,Ne.jsx)("span",{children:(()=>{switch(u){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Ne.jsx)(Wt,{size:11})]})]}),(0,Ne.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Ne.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Ne.jsx)(an,{size:13,className:"wf-search-icon"}),(0,Ne.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:r,onChange:x=>i(x.target.value)})]}),(0,Ne.jsx)("div",{className:"wf-subject-pills-row-compact",children:T0.map(x=>(0,Ne.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${s===x.id?"active":""}`,onClick:()=>l(x.id),children:x.label},x.id))})]}),(0,Ne.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:y.length===0?(0,Ne.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Ne.jsx)(Mt,{size:24,className:"wf-assets-empty-icon"}),(0,Ne.jsx)("div",{className:"wf-assets-empty-title",children:t?"\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528":e.length===0?"\u6682\u65E0\u4E3B\u4F53":"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Ne.jsx)("div",{className:"wf-subject-grid-compact",children:y.map(x=>(0,Ne.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,title:x.files?.some(m=>m.real_path)?x.name:"\u65E0\u672C\u5730\u6587\u4EF6\uFF0C\u65E0\u6CD5\u5165\u753B\u5E03",onDragStart:m=>{let b=(x.files||[]).find(v=>v.real_path);m.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:x.id,name:b?.original_name||x.name,real_path:b?.real_path,files:x.files}})),m.dataTransfer.effectAllowed="copy"},onClick:()=>o(x),children:[(0,Ne.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[x.avatar?(0,Ne.jsx)("img",{src:x.avatar,alt:x.name,className:"wf-subject-card-img-compact"}):(0,Ne.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Ne.jsx)(Mt,{size:20})}),(0,Ne.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Ne.jsx)(ga,{size:10})," ",x.itemCount," \u9879"]})]}),(0,Ne.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Ne.jsx)("div",{className:"wf-subject-card-name-compact",title:x.name,children:x.name}),(0,Ne.jsx)("div",{className:"wf-subject-card-tags-compact",children:x.tags.slice(0,3).map((m,b)=>(0,Ne.jsx)("span",{className:"wf-subject-card-tag-compact",children:m},b))})]})]},x.id))})}),(0,Ne.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Ne.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:n,children:[(0,Ne.jsx)(ft,{size:13}),(0,Ne.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Ne.jsx)(nI,{isOpen:f,anchorRect:p,sortValue:u,onChange:x=>d(x),onClose:()=>c(!1)})]})};var mI=I(J(),1),gI=I(ea(),1);var Be=I(X(),1),hI=({isOpen:e,x:t=0,y:a=0,anchorRect:o,drawerLeft:n,item:r})=>{let i=(0,mI.useRef)(null);if(!e||!r)return null;let s=260,l=i.current?.offsetHeight||290,u,d;o?(u=(n??o.left)-s-8,d=o.top):(u=t-s-15,d=a-20),u<10&&(u=10);let f=window.innerHeight-l-12;d>f&&(d=f),d<12&&(d=12);let c="nodeKind"in r?r:null,p=c?null:r,g=r.updatedAt?new Date(r.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,gI.createPortal)((0,Be.jsxs)("div",{ref:i,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${d}px`,left:`${u}px`,width:`${s}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-preview",children:[r.previewUrl?(0,Be.jsx)("img",{src:r.previewUrl,alt:r.name,className:"wf-hover-inspector-img"}):(0,Be.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Be.jsx)(Mt,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),p?.duration&&(0,Be.jsx)("span",{className:"wf-hover-inspector-duration",children:p.duration})]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-title",title:r.name,children:[r.name,c?.nodeKind?(0,Be.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${c.nodeKind}`,children:c.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(nc,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:g})]}),p?.resolution&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(Nn,{size:12})," \u5206\u8FA8\u7387"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:p.resolution})]}),p?.size&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(hc,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:p.size})]}),c?.nodeKind==="import"&&c.real_path?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"\u672C\u5730\u8DEF\u5F84"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",title:c.real_path,children:c.real_path})]}):null,c?.nodeKind!=="import"&&c?.prompt?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:c.prompt})]}):null]}),p?.tags&&p.tags.length>0&&(0,Be.jsx)("div",{className:"wf-hover-inspector-tags",children:p.tags.map((w,y)=>(0,Be.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Be.jsx)(Tc,{size:10})," ",w]},y))})]})]}),document.body)};var Ft=I(J(),1);var k9=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),L9=new Set(["mp4","webm","mov","mkv","avi","m4v"]),_9=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),I9={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function xI(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function jc(e){return I9[xI(e)]}function bI(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=xI(e);return k9.has(o)?"image":L9.has(o)?"video":_9.has(o)?"audio":null}function sd(e){return typeof e=="string"&&e.startsWith("blob:")}function dn(e){return`${Dt}/api/local-file?path=${encodeURIComponent(e)}`}function wI(e){if(typeof e!="string"||e.length===0)return null;try{let t=new URL(e,"http://127.0.0.1");if(!t.pathname.endsWith("/api/local-file"))return null;let a=t.searchParams.get("path");return a&&a.length>0?a:null}catch{return null}}function O0(e){return!e||e.includes("\0")?!1:e.startsWith("/")?!0:/^[a-zA-Z]:[\\/]/.test(e)}function og(e){let t=dn(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||jc(e.name)||jc(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function yI(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=dn(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function vI(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var M9=1;function Xc(){return{schemaVersion:M9,rev:0,folders:[],items:[]}}function CI(e,t,a){let o=new Set([a]),n=!0;for(;n;){n=!1;for(let r of e){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}for(let r of t){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}}return[...o]}function N9(e,t){return{id:e.id,name:e.name,type:"folder",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,itemCount:t}}function E9(e){return{id:e.id,name:e.name,type:e.type,fileExt:e.name.split(".").pop()?.toUpperCase()||"FILE",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,previewUrl:dn(e.real_path)}}function SI(e){let t=new Map;for(let n of e.folders)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);for(let n of e.items)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);let a=e.folders.map(n=>N9(n,t.get(n.id)??0)),o=e.items.map(E9);return[...a,...o]}function kI(e){let[t,a]=(0,Ft.useState)(Xc),[o,n]=(0,Ft.useState)(!1),[r,i]=(0,Ft.useState)(null),s=(0,Ft.useRef)(t);s.current=t;let l=(0,Ft.useCallback)(async(x,m)=>{n(!0),i(null);try{let b=await B5(x,m);if(m.aborted)return;if(!b.ok||!b.body.assets){i(b.body.error||b.body.message||`HTTP ${String(b.status)}`),a(Xc());return}a(b.body.assets)}catch(b){if(m.aborted)return;i(b instanceof Error?b.message:String(b)),a(Xc())}finally{m.aborted||n(!1)}},[]);(0,Ft.useEffect)(()=>{if(!e){a(Xc()),i(null);return}let x=new AbortController;return l(e,x.signal),()=>x.abort()},[e,l]);let u=(0,Ft.useCallback)(x=>{a(x),i(null)},[]),d=(0,Ft.useCallback)(async(x,m)=>{if(!e)return!1;let b=await U5(e,{name:x,parentId:m??null,expectedRev:s.current.rev});return!b.ok||!b.body.assets?(i(b.body.error||b.body.message||"mkdir failed"),!1):(u(b.body.assets),!0)},[u,e]),f=(0,Ft.useCallback)(async(x,m)=>{if(!e)return!1;let b=await q5(e,{paths:x,parentId:m??null,expectedRev:s.current.rev});return!b.ok||!b.body.assets?(i(b.body.error||b.body.message||"index failed"),!1):(u(b.body.assets),!0)},[u,e]),c=(0,Ft.useCallback)(async x=>{if(!e)return!1;let m=await F5(e,{expectedRev:s.current.rev,folders:x.folders,items:x.items});return!m.ok||!m.body.assets?(i(m.body.error||m.body.message||"save failed"),!1):(u(m.body.assets),!0)},[u,e]),p=(0,Ft.useCallback)(async(x,m)=>{let b=s.current;return c({folders:b.folders.map(v=>v.id===x?{...v,name:m,updatedAt:Date.now()}:v),items:b.items})},[c]),g=(0,Ft.useCallback)(async(x,m)=>{let b=s.current;return c({folders:b.folders.map(v=>v.id===x?{...v,parentId:m,updatedAt:Date.now()}:v),items:b.items.map(v=>v.id===x?{...v,parentId:m,updatedAt:Date.now()}:v)})},[c]),w=(0,Ft.useCallback)(async x=>{let m=s.current,b=new Set(CI(m.folders,m.items,x));return c({folders:m.folders.filter(v=>!b.has(v.id)),items:m.items.filter(v=>!b.has(v.id))})},[c]),y=(0,Ft.useCallback)(async()=>{e&&await l(e,new AbortController().signal)},[l,e]),h=(0,Ft.useMemo)(()=>SI(t),[t]);return{document:t,assets:h,loading:o,error:r,refresh:y,mkdir:d,indexPaths:f,persist:c,renameFolder:p,moveNode:g,deleteNode:w}}var vr=I(J(),1);var LI=Vc();function _I(e){let[t,a]=(0,vr.useState)([]),[o,n]=(0,vr.useState)(!1),[r,i]=(0,vr.useState)(null),s=(0,vr.useCallback)(async(u={},d)=>{n(!0);try{let f=await LI.listLibrary(u,d);if(d?.aborted||f.error==="aborted")return;if(!f.ok){i(f.error||"library-unavailable"),a([]);return}i(null),a(f.subjects)}finally{d?.aborted||n(!1)}},[]);(0,vr.useEffect)(()=>{if(!e)return;let u=new AbortController;return s({},u.signal),()=>u.abort()},[e,s]);let l=(0,vr.useCallback)(async(u,d)=>{let f=await LI.createLibraryAsset(u,"custom",d);return!f.ok||!f.subject?(i(f.error||"create-failed"),null):(a(c=>[f.subject,...c]),i(null),f.subject)},[]);return{subjects:t,loading:o,error:r,refresh:s,createSubject:l}}var yt=I(X(),1),T9=Vc();function A9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function D9(e){let t=e.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(t)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(t)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(t)?"audio":"doc"}function II(e){if(e.kind!=="cancel"){if(e.kind==="unsupported"){Y.warning("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668");return}Y.error(e.kind==="error"&&e.message||"\u9009\u62E9\u6587\u4EF6\u5931\u8D25")}}var R9=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n,workspaceId:r})=>{let[i,s]=(0,xa.useState)("canvas"),[l,u]=(0,xa.useState)("normal"),[d,f]=(0,xa.useState)("tree"),[c,p]=(0,xa.useState)(320),[g,w]=(0,xa.useState)(!1),y=(0,xa.useMemo)(()=>Z5(o),[o]),h=kI(r??null),x=_I(e&&l==="subject-library"),[m,b]=(0,xa.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[v,C]=(0,xa.useState)({visible:!1,x:0,y:0}),S=(0,xa.useRef)(null),k=(0,xa.useRef)(null);(0,xa.useEffect)(()=>()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]);let _=(0,xa.useCallback)(j=>{j.preventDefault(),w(!0);let F=j.clientX,K=c,$=q=>{let Q=Math.max(260,Math.min(500,K-(q.clientX-F)));p(Q)},ee=()=>{w(!1),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",ee)};window.addEventListener("mousemove",$),window.addEventListener("mouseup",ee)},[c]),T=j=>{if(n)n(j);else{let F=document.getElementById(j)||document.querySelector(`[data-id="${j}"]`);F&&(F.scrollIntoView({behavior:"smooth",block:"center"}),F.classList.add("highlight-pulse"),setTimeout(()=>F.classList.remove("highlight-pulse"),1800))}},R=(j,F)=>{if(S.current&&(clearTimeout(S.current),S.current=null),!j||!F){C({visible:!1,x:0,y:0,anchorRect:null,item:null});return}let $=F.currentTarget?.getBoundingClientRect(),ee=$?{top:$.top,bottom:$.bottom,left:$.left,right:$.right,width:$.width,height:$.height}:null,q=k.current?.getBoundingClientRect(),Q=q?q.left:void 0,{clientX:ne,clientY:de}=F;S.current=setTimeout(()=>{C({visible:!0,x:ne,y:de,anchorRect:ee,drawerLeft:Q,item:j})},200)},H=(j,F)=>{b({visible:!0,x:j.clientX,y:j.clientY,targetType:"canvas-item",targetItem:F})},U=(j,F,K)=>{b({visible:!0,x:j.clientX,y:j.clientY,targetType:K?"asset-folder":"asset-item",targetItem:F})},L=j=>j.real_path||j.name,N=(j,F)=>{let $=`[${F==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${j.name}]`;navigator.clipboard?.writeText($),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:$,name:j.name,previewUrl:j.previewUrl,path:j.real_path}})),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${j.name}`)},E=j=>{let F=L(j);navigator.clipboard?.writeText(F),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:F,name:j.name}})),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${F}`)},M=(j,F)=>{switch(j){case"add-to-canvas":case"focus-in-canvas":T(F.id),Y.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":N(F,"canvas");break;case"add-to-subjects":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}let K=F.name.replace(/\.[^/.]+$/,"")||F.name;x.createSubject(K,[{real_path:F.real_path,original_name:F.name}]).then($=>{$?Y.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${$.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528")});break}case"save-to-assets":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}h.indexPaths([F.real_path]).then(K=>{K?Y.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${F.name}`):Y.error("\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")});break}case"open-preview":F.previewUrl?(window.open(F.previewUrl,"_blank","noopener,noreferrer"),Y.success("\u5DF2\u6253\u5F00\u9884\u89C8")):Y.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":E(F);break;case"copy-path":navigator.clipboard?.writeText(L(F)),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${L(F)}`);break;case"copy-file":navigator.clipboard?.writeText(F.name),Y.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${F.name}`);break;case"duplicate":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":f(K=>K==="tree"?"grid":"tree"),Y.success(d==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},A=(j,F)=>{switch(j){case"add-to-canvas":a?.(F),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${F.name}`);break;case"add-to-agent":case"add-to-chat":N(F,"asset");break;case"reveal-in-finder":E(F);break;case"move-to":{let K=h.assets.filter(q=>q.type==="folder"&&q.id!==F.id),$=K.map(q=>q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${$}\uFF09\uFF1A`,K[0]?.name||"");if(ee&&ee.trim()){let q=K.find(Q=>Q.name===ee.trim());h.moveNode(F.id,q?.id??null).then(Q=>{Q?Y.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(K=>{K?Y.success(`\u5DF2\u5220\u9664\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},O=(j,F)=>{switch(j){case"reveal-in-finder":E(F);break;case"rename":{let K=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",F.name);K&&K.trim()&&h.renameFolder(F.id,K.trim()).then($=>{$?Y.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"):Y.error("\u91CD\u547D\u540D\u5931\u8D25")});break}case"move-to":{let K=h.assets.filter(q=>q.type==="folder"&&q.id!==F.id),$=K.map(q=>q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${$}\uFF09\uFF1A`,K[0]?.name||"");if(ee&&ee.trim()){let q=K.find(Q=>Q.name===ee.trim());h.moveNode(F.id,q?.id??null).then(Q=>{Q?Y.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(K=>{K?Y.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${j}`);break}},D=async()=>{let j=await Pn(),F=Km(j);if(F.kind!=="ok"){II(F);return}for(let K of F.paths){let $=A9(K);a?.({id:K,name:$,type:D9($),real_path:K})}Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6\u5230\u753B\u5E03`)},B=async()=>{let F=(await T9.pickAssets("file")).interpretation;if(F.kind!=="ok"){II(F);return}await h.indexPaths(F.paths)?Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6`):Y.error(h.error||"\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")},z=()=>{let j=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");!j||!j.trim()||h.mkdir(j.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${j.trim()}`):Y.error(h.error||"\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25")})};return e?(0,yt.jsxs)("div",{ref:k,className:"wf-assets-drawer-root nodrag nopan",style:{width:`${c}px`},onPointerDown:ge,onMouseDown:ge,onClick:j=>j.stopPropagation(),children:[(0,yt.jsx)("div",{className:`wf-drawer-resize-handle ${g?"resizing":""}`,onMouseDown:_}),(0,yt.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,yt.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,yt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="canvas"&&l==="normal"?"active":""}`,onClick:()=>{s("canvas"),u("normal")},children:"\u753B\u5E03"}),(0,yt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="assets"||l==="subject-library"?"active":""}`,onClick:()=>{s("assets")},children:"\u8D44\u4EA7"})]}),(0,yt.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,yt.jsx)(ha,{size:14})})]}),(0,yt.jsx)("div",{className:"wf-drawer-body",children:l==="subject-library"?(0,yt.jsx)(pI,{subjects:x.subjects,error:x.error,onBack:()=>u("normal"),onSelectSubject:()=>{},onCreateSubject:()=>{let j=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");!j||!j.trim()||x.createSubject(j.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u4E3B\u4F53\uFF1A${F.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528\uFF0C\u672A\u80FD\u521B\u5EFA")})}}):i==="canvas"?(0,yt.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,yt.jsx)(cI,{nodes:y,onFocusNode:T,onContextMenu:H,onHoverItem:R,viewMode:d,onViewModeChange:f,onRefresh:()=>{Y.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,yt.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,yt.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:()=>{D()},children:[(0,yt.jsx)(us,{size:13}),(0,yt.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,yt.jsx)(fI,{assets:h.assets,onOpenSubjects:()=>u("subject-library"),onContextMenu:U,onHoverItem:R,onImportFiles:()=>{B()},onCreateFolder:z,onInsertToCanvas:j=>a?.(j),onRefresh:()=>{h.refresh().then(()=>Y.success("\u5DF2\u5237\u65B0\u9879\u76EE\u8D44\u4EA7"))}})}),(0,yt.jsx)(hI,{isOpen:v.visible,x:v.x,y:v.y,anchorRect:v.anchorRect,drawerLeft:v.drawerLeft,item:v.item||null}),(0,yt.jsx)(iI,{isOpen:m.visible&&m.targetType==="canvas-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:M,onClose:()=>b(j=>({...j,visible:!1}))}),(0,yt.jsx)(lI,{isOpen:m.visible&&m.targetType==="asset-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:A,onClose:()=>b(j=>({...j,visible:!1}))}),(0,yt.jsx)(uI,{isOpen:m.visible&&m.targetType==="asset-folder",x:m.x,y:m.y,item:m.targetItem||null,onAction:O,onClose:()=>b(j=>({...j,visible:!1}))})]}):null},MI=R9;var ia=I(X(),1),P9=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],z9=({isOpen:e,onClose:t})=>e?(0,ia.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:ge,onMouseDown:ge,onClick:t,children:(0,ia.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,ia.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,ia.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,ia.jsx)(wc,{size:18}),(0,ia.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,ia.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,ia.jsx)(ha,{size:16})})]}),(0,ia.jsx)("div",{className:"wf-shortcuts-modal__body",children:P9.map(a=>(0,ia.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,ia.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,ia.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,ia.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,ia.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,ia.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,ia.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,NI=z9;var jo=I(J(),1),AI=I(ea(),1);var sa=I(X(),1),EI=278,Ns=12,O9=8,H0=160,Ms=18,H9={AudioLines:(0,sa.jsx)(cs,{size:Ms}),ImageGen:(0,sa.jsx)(hr,{size:Ms}),Mic:(0,sa.jsx)(hs,{size:Ms}),PersonStanding:(0,sa.jsx)(Mc,{size:Ms}),TextGen:(0,sa.jsx)(wr,{size:Ms}),VideoGen:(0,sa.jsx)(on,{size:Ms})},B9={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function TI(e){return e?B9[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function F9(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-EI:e;return Math.min(Math.max(Ns,o),Math.max(Ns,a-EI-Ns))}var U9=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:s="start"})=>{let l=(0,jo.useRef)(null),[u,d]=(0,jo.useState)({left:t,top:a,maxHeight:H0});(0,jo.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?H0:window.innerHeight,p=F9(t,s),g=a+O9,w=Math.max(Ns,c-Ns-H0),y=Math.min(Math.max(Ns,g),w);d({left:p,top:y,maxHeight:Math.max(0,c-y-Ns)})},[s,e,t,a]),(0,jo.useEffect)(()=>{if(!e)return;let c=g=>{l.current&&!l.current.contains(g.target)&&i()},p=g=>{g.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,jo.useMemo)(()=>n.map(c=>(0,sa.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,sa.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,sa.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:TI(c.icon).bg,color:TI(c.icon).color},children:H9[c.icon]??(0,sa.jsx)(Mt,{size:Ms})}):null,(0,sa.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,sa.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,sa.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,AI.createPortal)((0,sa.jsxs)("div",{ref:l,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,sa.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,sa.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},ng=(0,jo.memo)(U9);var Xo=I(J(),1),DI=I(ea(),1);var We=I(X(),1),q9=210,V9=230,G9=260,j9=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:s=!1,canRedo:l=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,Xo.useRef)(null),[c,p]=(0,Xo.useState)("main"),g=le();(0,Xo.useEffect)(()=>{a&&p("main")},[a]),(0,Xo.useEffect)(()=>{if(!a)return;let b=C=>{f.current&&!f.current.contains(C.target)&&n()},v=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",v)}},[a,n]);let w=(0,Xo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"import-asset",label:g("toolbar.add.import_asset"),icon:(0,We.jsx)(eo,{size:15})},{action:"open-add-node",label:g("menu.addNode"),icon:(0,We.jsx)(ft,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!s},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!l},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,s,l,u,d,g]),y=(0,Xo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,We.jsx)(wr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,We.jsx)(Ha,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,We.jsx)(on,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,We.jsx)(cs,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,We.jsx)(ko,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,We.jsx)(La,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?V9:q9,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-G9-8);return(0,DI.createPortal)((0,We.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:b=>b.preventDefault(),children:c==="main"?w.map(b=>(0,We.jsxs)(Xo.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,We.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,We.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,We.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:v=>{v.stopPropagation(),b.action==="open-add-node"?p("add-node"):r(b.action,o)},children:[b.icon?(0,We.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,We.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,We.jsx)(mr,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,We.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,We.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,We.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,We.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),p("main")},title:g("menu.back"),children:(0,We.jsx)(rc,{size:16})}),(0,We.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,We.jsx)("div",{className:"wf-add-node-menu__list",children:y.map(b=>(0,We.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:v=>{v.stopPropagation(),i?.(b.type),n()},children:[(0,We.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,We.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,We.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,We.jsx)(mr,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},RI=j9;var PI=I(J(),1);function zI(){return typeof navigator>"u"?!0:/Mac|iPhone|iPod|iPad/i.test(navigator.platform)}function X9(e,t=zI()){return t?!!(e.metaKey&&!e.ctrlKey&&!e.altKey):!!(e.ctrlKey&&!e.metaKey&&!e.altKey)}function W9(e,t={},a=zI()){let o=e.target;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return null;let n=X9(e,a),r=!e.metaKey&&!e.ctrlKey&&!e.altKey,i=e.key.toLowerCase(),{hasSelection:s=!1,isAssetsOpen:l=!1}=t;return r&&!e.shiftKey&&l&&/^[1-6]$/.test(e.key)?{type:"category",index:parseInt(e.key,10)}:r&&i==="a"?"toggleAssets":r&&!e.shiftKey&&i==="v"?"pointerSelect":r&&!e.shiftKey&&i==="h"?"pointerPan":r&&!e.shiftKey&&i==="n"?"toggleAddMenu":r&&!e.shiftKey&&i==="m"?"toggleMinimap":r&&(e.key==="?"||e.shiftKey&&e.key==="/")?"toggleShortcuts":n&&!e.shiftKey&&e.key==="1"?"fitView":n&&!e.shiftKey&&e.key==="0"?"resetZoom":r&&!e.shiftKey&&(e.key==="Delete"||e.key==="Backspace")&&s?"deleteSelected":r&&!e.shiftKey&&e.key==="Escape"?"escape":n&&e.shiftKey&&i==="g"?"ungroup":n&&!e.shiftKey&&i==="g"?"group":n&&!e.shiftKey&&i==="d"&&s?"duplicate":n&&!e.shiftKey&&i==="c"?"copy":n&&!e.shiftKey&&i==="v"?"paste":n&&!e.shiftKey&&i==="a"?"selectAll":n&&!e.shiftKey&&i==="z"?"undo":n&&e.shiftKey&&i==="z"?"redo":null}var OI=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:s,onRedo:l,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:w,onCategoryKey:y,onGroupSelected:h,onUngroupSelected:x,isAssetsOpen:m=!1,enabled:b=!0})=>{(0,PI.useEffect)(()=>{if(!b)return;let v=C=>{let S=W9(C,{hasSelection:i,isAssetsOpen:m});if(S){if(C.preventDefault(),typeof S=="object"&&S.type==="category"){y?.(S.index);return}switch(S){case"toggleAssets":u?.();break;case"pointerSelect":p?.("select");break;case"pointerPan":p?.("pan");break;case"toggleAddMenu":c?.();break;case"toggleMinimap":f?.();break;case"toggleShortcuts":d?.();break;case"fitView":g?.();break;case"resetZoom":w?.();break;case"deleteSelected":o?.();break;case"escape":m?u?.():i&&n?.();break;case"ungroup":x?.();break;case"group":h?.();break;case"duplicate":r?.();break;case"copy":e?.();break;case"paste":t?.();break;case"selectAll":a?.();break;case"undo":s?.();break;case"redo":l?.();break}}};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[b,e,t,a,o,n,r,i,s,l,u,d,f,c,p,g,w,y,h,x,m])};var un=I(J(),1);function rg(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function HI(e,t,a){return B0(e,t,a).valid}function B0(e,t,a){let o=Fm(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var F0={minZoom:.23,maxZoom:1.29,defaultZoom:1},Y9={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},BI={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},K9={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},Z9={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},FI={portrait:Y9,square:BI,video_landscape:K9,audio_compact:Z9};function U0(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function UI(e){return FI[U0(e)]}function qI(e,t){let a=FI[t]||BI;return Math.round(e/a.aspectRatio)}function zn(e){return UI(e).default.width}function ld(e){return UI(e).default.height}function ig(e,t,a){let o=Hc(e,{nodeKind:"generate",status:"empty",nodeWidth:zn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function q0(e="image",t={x:0,y:0},a){let o=Hc(e,{nodeKind:"import",selectedTool:"import",status:"empty",nodeWidth:zn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function dd(e,t,a){return{nodes:[ig(e,t,a)],edges:[]}}function V0(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function $9(e,t){return`${e}-${t}`}function sg(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function lg(e){return Q_(e).map(t=>{let a=String(t.targetTool);return{key:$9(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function VI(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var Q9={visible:!1,x:0,y:0,options:[]};function GI(e){let t=le(),{screenToFlowPosition:a}=Ca(),o=ae(p=>p.applyCanvasInputMutation),n=(0,un.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,un.useState)(Q9),s=(0,un.useRef)(null),l=(0,un.useRef)(null),u=(0,un.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){s.current=null;return}let w=ae.getState().nodes.find(h=>h.id===g.nodeId),y=w?.data?.materialType;if(!w||!y){s.current=null;return}s.current={nodeId:g.nodeId,materialType:y}},[]),d=(0,un.useCallback)((p,g)=>{let w=g.fromNode?.id??null,y=g.toNode?.id??null,h=s.current,x=h?lg(h.materialType):[],m=null;if(!g.isValid&&w&&y){let v=ae.getState(),C=B0({source:w,target:y,sourceHandle:null,targetHandle:null},v.nodes,v.edges);m=C.valid?null:t(rg(C.reasonCode))}let b=VI({isValid:g.isValid??null,fromNodeId:w,toNodeId:y,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),Y.warning(b.reason),s.current=null;return}if(b.type==="menu"&&h){let v="changedTouches"in p?p.changedTouches[0]:p;if(!v){s.current=null;return}let{clientX:C,clientY:S}=v;l.current=a({x:C,y:S}),i({visible:!0,x:C,y:S,options:x.map(k=>({key:k.key,label:t(k.labelKey),description:t(k.descKey),icon:k.icon}))});return}s.current=null},[a,t]),f=(0,un.useCallback)(p=>{let g=s.current,w=l.current,y=sg(p);if(g&&w&&y){let h=dd(y.targetMaterialType,w),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}i(h=>({...h,visible:!1})),s.current=null,l.current=null},[o]),c=(0,un.useCallback)(()=>{i(p=>({...p,visible:!1})),s.current=null,l.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var On=I(J(),1);var ba=[];for(let e=0;e<256;++e)ba.push((e+256).toString(16).slice(1));function jI(e,t=0){return(ba[e[t+0]]+ba[e[t+1]]+ba[e[t+2]]+ba[e[t+3]]+"-"+ba[e[t+4]]+ba[e[t+5]]+"-"+ba[e[t+6]]+ba[e[t+7]]+"-"+ba[e[t+8]]+ba[e[t+9]]+"-"+ba[e[t+10]]+ba[e[t+11]]+ba[e[t+12]]+ba[e[t+13]]+ba[e[t+14]]+ba[e[t+15]]).toLowerCase()}var G0,J9=new Uint8Array(16);function j0(){if(!G0){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");G0=crypto.getRandomValues.bind(crypto)}return G0(J9)}var eO=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),X0={randomUUID:eO};function tO(e,t,a){e=e||{};let o=e.random??e.rng?.()??j0();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return jI(o)}function aO(e,t,a){return X0.randomUUID&&!t&&!e?X0.randomUUID():tO(e,t,a)}var dg=aO;function XI(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function oO(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function WI(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=oO(o),i,s;if(t)i=t.x,s=t.y;else{let f=a?50:30;i=r.x+f,s=r.y+f}let l=new Map,u=o.map(f=>{let c=dg();return l.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:s+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:dg(),source:l.get(f.source)||f.source,target:l.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:s}}}function YI(e,t){let a=(0,On.useRef)({nodes:[],edges:[]}),o=(0,On.useRef)(null),n=a.current.nodes.length>0,r=(0,On.useCallback)(()=>{let f=ae.getState(),c=XI(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,On.useCallback)(f=>{let c=WI(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=ae.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),s=(0,On.useCallback)(()=>{r(),i()},[r,i]),l=(0,On.useCallback)(()=>{let f=ae.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,On.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,On.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:s,deleteSelectedNodes:l,selectAllNodes:u,clearSelection:d}}var Hn=I(J(),1);function KI(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:s,clearSelection:l,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,Hn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,Hn.useCallback)((C,S)=>{C.preventDefault();let k={type:"pane"};S?k={type:"node",nodeId:S.id}:ae.getState().nodes.filter(T=>T.selected).length>1&&(k={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:k})},[]),y=(0,Hn.useCallback)((C,S)=>{w(C,S)},[w]),h=(0,Hn.useCallback)(C=>{w(C)},[w]),x=(0,Hn.useCallback)(C=>{w(C)},[w]),m=(0,Hn.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),b=(0,Hn.useCallback)((C,S)=>{let k=t({x:p.x,y:p.y});switch(C){case"import-asset":c?.("import_asset",k);break;case"copy":{if(S.type==="node"){let T=ae.getState().nodes.find(R=>R.id===S.nodeId);T&&!T.selected&&(l(),a(R=>R.map(H=>H.id===S.nodeId?{...H,selected:!0}:H)))}o();break}case"paste":n(k);break;case"duplicate":r();break;case"delete":{if(S.type==="node"){let _=ae.getState();_.nodes.find(R=>R.id===S.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[S.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":s();break;case"execute-selection":{let _=ae.getState().nodes.filter(T=>T.selected).map(T=>T.id);_.length>0&&f?.(_);break}case"execute-node":{S.type==="node"&&f?.([S.nodeId]);break}}m()},[p.x,p.y,t,l,a,o,n,r,i,u,d,s,m,f,c]),v=(0,Hn.useCallback)(C=>{let S=t({x:p.x,y:p.y});c?.(C,S),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:y,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:v}}function nO(e,t){if(!t||!Array.isArray(e))return{focused:!1};let a=e.find(o=>o.id===t);return a?{focused:!0,nodeId:a.id,x:a.position.x+100,y:a.position.y+100,zoom:1,duration:800}:{focused:!1}}function W0(e){let t=nO(e.nodes,e.nodeId);return t.focused?(e.setCenter(t.x,t.y,{zoom:t.zoom,duration:t.duration}),e.setNodes(a=>a.map(o=>({...o,selected:o.id===e.nodeId}))),!0):!1}function Wc(e){let t=e.path;return typeof t=="string"?t:""}function rO(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function Ci(e,t={}){if(!e)return null;let a=t.name||rO(e),o=t.mime||jc(a)||jc(e)||"",n=bI(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:dn(e)}:null}function Si(e){let t=[];for(let a of e){let o=Ci(a);o&&t.push(o)}return t}function Y0(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Bn(e){return typeof e=="string"?e.trim():""}function ZI(e){if(!Array.isArray(e.files)||e.files.length===0)return null;let t=e.files[0];return Y0(t)?t:null}function iO(e){if(!Y0(e))return"";let t=Bn(e.real_path)||Bn(e.realPath);if(t)return t;let a=ZI(e);return a?Bn(a.real_path)||Bn(a.realPath)||Bn(a.path):""}function sO(e){let t=Bn(e.name)||Bn(e.originalName)||Bn(e.title);if(t)return t;let a=ZI(e);return a&&(Bn(a.original_name)||Bn(a.name))||void 0}function $I(e){let t=iO(e);if(!t)return{ok:!1,reason:"needPath"};let a=Y0(e)?{name:sO(e)}:{},o=Ci(t,a);return o?{ok:!0,draft:o}:{ok:!1,reason:"unsupported"}}var ug=["image","video","audio"],lO=80,dO=40,K0=40;function eM(e){return!!e&&typeof e=="object"}function tM(e){return eM(e.data)?e.data:{}}function aM(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function oM(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function uO(e){let t=e.dimensions;if(eM(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function cO(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function fO(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function nM(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function pO(e,t){if(!ug.includes(e))return!1;if(sn(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function rM(e,t,a){let o=nM(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=tM(r),s=aM(i.materialType);if(!s||!pO(s,i))continue;let l=cO(i,r.id),u=uO(i);n.push({nodeId:r.id,materialType:s,title:l,previewUrl:sn(s,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:fO(i,l,r.id,u),width:u.width,height:u.height})}return n}function iM(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function QI(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function JI(e,t){return Bm(e,t)}function cg(e){return og({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function mO(e,t,a){let o=zn(a),n=ld(a);return{x:e.position.x-o-lO,y:e.position.y+t*(n+dO)}}function gO(e){return aM(tM(e).materialType)}function sM(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=nM(e.edges,e.targetNodeId),s=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||s.has(w)){t.push({id:w,reason:"already_connected"});continue}let y=e.nodes.find(h=>h.id===w);if(!y){t.push({id:w,reason:"missing"});continue}if(!JI(y,r)){t.push({id:w,reason:"type_contract"});continue}a.push(QI(w,e.targetNodeId)),s.add(w)}let l=e.localFiles.filter(w=>!w.realPath||!ug.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=gO(r),d=l[0],f=!!u&&ug.includes(u)&&!!d&&d.materialType===u,c=0,p=f?l.slice(1):l;f&&d&&n.push({nodeId:e.targetNodeId,data:cg(d)});for(let w of p){let y=mO(r,c,w.materialType),h=ig(w.materialType,y,{...cg(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!JI(h,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(h),a.push(QI(h.id,e.targetNodeId)),s.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}function lM(e,t){return e.filter(a=>!a.realPath||!ug.includes(a.materialType)?(t.push({id:a.id,reason:"unsupported"}),!1):!0)}function dM(e,t,a=!1){let o=q0(e.materialType,t,{...cg(e),label:e.name.replace(/\.[^.]+$/,"")||e.name});return a?{...o,selected:!0}:o}function Z0(e){let t=[],a=lM(e.files,t),o=[],n=e.origin.y;return a.forEach((r,i)=>{let s=ld(r.materialType);o.push(dM(r,{x:e.origin.x,y:n},i===a.length-1)),n+=s+K0}),{hasWork:o.length>0,rejected:t,addNodes:o.length>0?o:void 0}}function Yc(e){let t=[],a=e.nodes.find(l=>l.id===e.targetNodeId);if(!a)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let o=lM(e.files,t),n=o[0];if(!n)return{hasWork:!1,rejected:t};let r=[{nodeId:e.targetNodeId,data:{...cg(n),materialType:n.materialType,nodeKind:"import",selectedTool:"import",nodeWidth:zn(n.materialType),nodeHeight:ld(n.materialType),label:n.name.replace(/\.[^.]+$/,"")||n.name}}],i=[],s=a.position.y+ld(n.materialType)+K0;return o.slice(1).forEach((l,u,d)=>{let f=ld(l.materialType);i.push(dM(l,{x:a.position.x,y:s},u===d.length-1)),s+=f+K0}),{hasWork:!0,rejected:t,nodePatches:r,addNodes:i.length>0?i:void 0}}var hO=I(J(),1),$0=new Map;function Kc(e){$0.set(e.type,e)}function uM(){let e={};for(let[t,a]of $0)e[t]=a.component;return e}function cM(e,t,a){let o=$0.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var bt=I(J(),1);var nt=I(J(),1);function fM(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var cn=I(X(),1),xO=4,bO=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=le(),[i,s]=(0,nt.useState)(!1),[l,u]=(0,nt.useState)(!1),[d,f]=(0,nt.useState)(null),c=(0,nt.useRef)(null),p=(0,nt.useRef)(null),g=(0,nt.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",y=a==="plus"&&!!o&&o.length>0,h=w0(M=>M.inProgress),{screenToFlowPosition:x}=Ca(),m=(0,nt.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,nt.useEffect)(()=>{if(a!=="plus"){m();return}let M=c.current,A=p.current;if(!M||!A)return;let O=D=>{if(l)return;let B=M.getBoundingClientRect(),z=B.left+B.width/2,j=B.top+B.height/2,{x:F,y:K}=fM(e,D.clientX-z,D.clientY-j);A.style.setProperty("--wf-handle-offset-x",`${F}px`),A.style.setProperty("--wf-handle-offset-y",`${K}px`)};return M.addEventListener("pointermove",O),()=>{M.removeEventListener("pointermove",O)}},[l,m,e,a]),(0,nt.useEffect)(()=>{if(!l){m(),f(null);return}let M=()=>{let A=c.current;if(!A)return;let O=A.getBoundingClientRect();f({x:w?O.right:O.left,y:O.bottom})};return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[l,w,m]);let b=(0,nt.useCallback)(()=>{s(!0)},[]),v=(0,nt.useCallback)(()=>{s(!1),m()},[m]),C=(0,nt.useCallback)(M=>{let A=c.current;!A||M===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(M)||A.releasePointerCapture(M)},[]),S=(0,nt.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),k=(0,nt.useCallback)(M=>{M.button===0&&(typeof M.currentTarget.setPointerCapture=="function"&&M.currentTarget.setPointerCapture(M.pointerId),g.current.pointerId=M.pointerId,g.current.startX=M.clientX,g.current.startY=M.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),_=(0,nt.useCallback)(M=>{if(g.current.pointerId!==M.pointerId)return;Math.hypot(M.clientX-g.current.startX,M.clientY-g.current.startY)>=xO&&(g.current.dragIntent=!0,g.current.suppressClick=!0,l&&u(!1))},[l]),T=(0,nt.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),S())},[S]),R=(0,nt.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.suppressClick=!1,S())},[S]),H=(0,nt.useCallback)(M=>{if(M.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}y&&u(A=>!A)},[y]),U=(0,nt.useCallback)(()=>{let M=d;if(!M){let A=c.current;if(!A)return;let O=A.getBoundingClientRect();M={x:w?O.right:O.left,y:O.bottom}}return{screenPosition:M,flowPosition:x(M)}},[w,d,x]),L=(0,nt.useCallback)(M=>{n?.(M,U()),u(!1)},[n,U]),N=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",l?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,cn.jsxs)(Kl,{id:w?"in":"out",type:w?"target":"source",position:w?ie.Left:ie.Right,isConnectable:!0,className:N,style:E,children:[(0,cn.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,cn.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,cn.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,cn.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:v,onPointerDown:k,onPointerMove:_,onPointerUp:T,onPointerCancel:R,onClick:H,children:(0,cn.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,cn.jsx)("div",{className:"wf-handle__plus-button",children:(0,cn.jsx)(ft,{size:24,strokeWidth:2.5})})})}):null,y&&d?(0,cn.jsx)(ng,{visible:l,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Cr=(0,nt.memo)(bO);var fn=I(J(),1);var ud=I(X(),1),pM=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,ud.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,ud.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,ud.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,ud.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var wa=I(X(),1);function wO(e){let t=le();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var yO=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:s=400})=>{let l=le(),u=(0,fn.useRef)(e),[d,f]=(0,fn.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,fn.useState)(1),[g,w]=(0,fn.useState)(e==="completed"?1:0),[y,h]=(0,fn.useState)(e==="pending"||e==="generating");(0,fn.useEffect)(()=>{let H=u.current;if(u.current=e,(H==="pending"||H==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),w(1)});let U=setTimeout(()=>{f("complete"),h(!1)},s+50);return()=>clearTimeout(U)}H==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),w(0),f("idle")),e==="failed"&&(h(!1),f("idle")),H===e&&e==="completed"&&(f("complete"),w(1),h(!1))},[e,s]);let x=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",v=l(e==="pending"?"node.preparing":"node.generating"),C=wO(a),S=(0,fn.useCallback)(()=>({transition:`opacity ${s}ms ease-out`}),[s]),k=`wf-gsc__box--${t}`,_=()=>(0,wa.jsx)("div",{className:"wf-gsc__skeleton",style:{...S(),opacity:c},children:(0,wa.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${k}`,children:(0,wa.jsx)(pM,{borderRadius:"inherit",children:(0,wa.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,wa.jsx)("span",{className:"wf-gsc__progress-text",children:v})})})})}),T=()=>(0,wa.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${k} ${i}`,children:[(0,wa.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,wa.jsx)(ha,{size:24})}),(0,wa.jsx)("span",{className:"wf-gsc__failed-label",children:l("node.generationFailed")}),C?(0,wa.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,wa.jsxs)("span",{className:"wf-gsc__failed-task",children:[l("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,wa.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,wa.jsx)(br,{size:14}),l("node.regenerate")]}):null]}),R=H=>(0,wa.jsx)("div",{className:`${i} ${H?"wf-gsc__content--blur":""}`,style:{...S(),opacity:g},children:r});return(0,wa.jsxs)("div",{className:`wf-gsc ${x?k:""} ${i}`,children:[(x||y)&&_(),m&&T(),(b||d==="crossfading")&&R(d==="crossfading")]})},Zc=yO;var Ut=I(J(),1);var ki=I(X(),1),mM=24,gM=30,hM={text:ka,image:hr,video:on,audio:_a,table:ko,video_composition:La,import_asset:eo},vO=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=le(),i=t?r(`node.type.${t}`):"\u8282\u70B9",s=e||i,{zoom:l}=Sa(),[u,d]=(0,Ut.useState)(!1),[f,c]=(0,Ut.useState)(s),p=(0,Ut.useRef)(null),g=(0,Ut.useMemo)(()=>Ia(l),[l]);(0,Ut.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,Ut.useEffect)(()=>{u||c(s)},[s,u]);let w=(0,Ut.useCallback)(C=>{C.stopPropagation(),d(!0),c(s)},[s]),y=(0,Ut.useCallback)(()=>{let S=f.trim()||i;d(!1),S!==e&&o&&o(S)},[f,i,e,o]),h=(0,Ut.useCallback)(()=>{d(!1),c(s)},[s]),x=(0,Ut.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),y()):C.key==="Escape"&&(C.preventDefault(),h())},[y,h]),m=(0,Ut.useCallback)(C=>{let S=C.target.value;S.length<=gM&&c(S)},[]),b=()=>{if(a)return Ut.default.isValidElement(a)?a:(0,ki.jsx)(a,{size:14});let C=(t in hM?hM[t]:null)||ka;return(0,ki.jsx)(C,{size:14})};return(0,ki.jsxs)("div",{className:"wf-node-header",style:{top:-(mM+4*g),height:mM,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,ki.jsx)("span",{className:"wf-node-header__icon",children:b()}),u?(0,ki.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:y,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:gM}):(0,ki.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:s.length>20?s:r("node.renameHint"),children:s}),n]})},cd=(0,Ut.memo)(vO);var fg=I(J(),1);var Fn=I(X(),1),CO=({executionStatus:e,status:t})=>{let a=le();return(0,fg.useMemo)(()=>{switch(e){case"running":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},pg=(0,fg.memo)(CO);var Es=I(J(),1);var $c=I(X(),1);var SO=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let s=(0,Es.useMemo)(()=>sn(e,t,a),[e,t,a]),l=(0,Es.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,Es.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!s)return null;switch(e){case"image":return(0,$c.jsx)("img",{src:s,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,$c.jsx)("video",{src:s,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,$c.jsx)("div",{className:"wf-media-preview__audio",children:(0,$c.jsx)("audio",{src:s,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},xM=(0,Es.memo)(SO);var bM=I(J(),1);var Ue=I(X(),1),kO=({materialType:e,nodeKind:t="generate",onApplyPreset:a,onStartEdit:o})=>{let n=le();return t==="import"?(0,Ue.jsxs)("div",{className:"wf-node-empty wf-node-empty--import-kind",children:[(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(eo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})}),(0,Ue.jsx)("div",{className:"wf-node-empty__try-label",children:n("panel.dropToImport")})]}):e==="text"?(0,Ue.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(ka,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Ue.jsx)("div",{className:"wf-node-empty__try-label",children:n("pills.tryLabel")}),(0,Ue.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:r=>r.stopPropagation(),children:[(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:o,children:[(0,Ue.jsx)(En,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.writePrompt")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("script"),children:[(0,Ue.jsx)(ic,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.scriptGen")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("planning"),children:[(0,Ue.jsx)(Mn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.planningGen")})]}),(0,Ue.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("prompt"),children:[(0,Ue.jsx)(Mt,{size:14,className:"wf-node-empty__pill-icon"}),(0,Ue.jsx)("span",{children:n("pills.promptExpand")})]})]})]}):e==="image"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(Ha,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(So,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Ue.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Ue.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Ue.jsx)(_a,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},mg=(0,bM.memo)(kO);var Li=I(J(),1);var la=I(X(),1),LO=({materialType:e,nodeKind:t="generate",selected:a,onOpenResourcePicker:o,onStartTextEdit:n,onCopyText:r,onSplitText:i})=>{let s=le(),{zoom:l}=Sa(),[u,d]=Li.default.useState(!1),f=(0,Li.useMemo)(()=>Ia(l),[l]),c=(0,Li.useCallback)(()=>{r&&(r(),d(!0),setTimeout(()=>d(!1),1500))},[r]),p=30;return t==="generate"&&e!=="text"?null:(0,la.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(p*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,la.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,la.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:n,title:s("pill.textEdit"),children:[(0,la.jsx)(Mn,{size:13,className:"wf-floating-top-pill__icon"}),(0,la.jsx)("span",{children:s("pill.textEdit")})]}),(0,la.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,la.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:c,title:s("pill.copy"),children:u?(0,la.jsx)(Bt,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,la.jsx)(mi,{size:13,className:"wf-floating-top-pill__icon"})}),(0,la.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,la.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:i,title:s("pill.structureSplit"),children:(0,la.jsx)(ga,{size:13,className:"wf-floating-top-pill__icon"})})]}):t==="import"?(0,la.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,la.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,children:[(0,la.jsx)(vs,{size:13,className:"wf-floating-top-pill__icon"}),(0,la.jsx)("span",{children:s("pill.import")})]})}):null})},wM=(0,Li.memo)(LO);var fd=I(J(),1);var yM=I(J(),1),vM=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function _O(e,t,a=vM){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function CM({refs:e,excludeSelectors:t=vM,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,yM.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;_O(f,r.map(c=>c.current),t)&&a()},s=d=>{d.key==="Escape"&&a()},l=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",s)},u=null;return n?u=requestAnimationFrame(l):l(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",s)}},[e,t,a,o,n])}var Q0=I(X(),1),IO=480,MO=({children:e,onClose:t,width:a=IO})=>{let{zoom:o}=Sa(),n=(0,fd.useRef)(null),r=(0,fd.useMemo)(()=>Ia(o),[o]);return CM({refs:n,onClose:t}),(0,Q0.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,Q0.jsx)("div",{className:"wf-panel-shell__card",children:e})})},SM=(0,fd.memo)(MO);var Mo=I(J(),1);var kM=I(J(),1),pd=I(X(),1),J0={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},NO=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function EO(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(J0[t])return t;for(let a of NO)if(a.regex.test(t))return a.brand;return null}var LM=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,kM.useMemo)(()=>t&&J0[t.toLowerCase()]?t.toLowerCase():EO(e),[t,e]),s=i?J0[i]:null;if(!s){if(r)return(0,pd.jsx)(pd.Fragment,{children:r});let l=(e||t||"M").charAt(0).toUpperCase();return(0,pd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:l})}return(0,pd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:s.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var _M=I(J(),1);function IM(e){let t=y_(),a=v_();return(0,_M.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},s=sn(i.materialType,i.mediaAssets,i.mediaUrl),l=i.content||i.generatedContent||"",u=!!(s||i.materialType==="text"&&l.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:s,hasMedia:u,textContent:l}]}),[t,a,e])}var MM=I(J(),1),NM="wf_capabilities_catalog_v1",TO={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function Qc(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(NM);return e?JSON.parse(e):null}catch{return null}}function EM(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(NM,JSON.stringify(e))}catch{}}function TM(e,t,a){return(0,MM.useMemo)(()=>{let o=a??Qc(),n=o&&o[e]?o[e]:[],r=n.find(k=>k.id===t)??n[0],i=TO[e]??{},s=r?.parameters??i,l=s.aspectRatio?.options&&s.aspectRatio.options.length>0?s.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=s.aspectRatio?.defaultValue??l[0]?.value??"16:9",d=k=>k?l.some(_=>_.value===k):!1,f=s.duration?.options&&s.duration.options.length>0?s.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=s.duration?.defaultValue??f[0]?.value??5,p=k=>typeof k!="number"?!1:f.some(_=>_.value===k),g=s.resolution?.options??[],w=s.resolution?.defaultValue??g[0]?.value??"",y=s.quality?.options??[],h=s.quality?.defaultValue??y[0]?.value??"",x=!!s.sound?.supported,m=!!s.sound?.defaultValue,b=s.voice?.options??[],v=s.voice?.defaultValue??b[0]?.value??"",C=!!s.instrumental?.supported,S=!!s.instrumental?.defaultValue;return{schema:s,modelItem:r,aspectRatioOptions:l,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:w,qualityOptions:y,defaultQuality:h,hasSoundSupport:x,defaultSound:m,voiceOptions:b,defaultVoice:v,hasInstrumentalSupport:C,defaultInstrumental:S}},[e,t,a])}var AM=I(J(),1);var Sr=I(X(),1),AO=({onClick:e,disabled:t,isGenerating:a})=>{let o=le();return(0,Sr.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,Sr.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,Sr.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,Sr.jsx)(xi,{size:14,className:"wf-generate-btn__spin"}):(0,Sr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,Sr.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,Sr.jsx)("path",{d:"M12 19V5"})]})})]})},DM=(0,AM.memo)(AO);var te=I(X(),1);function DO(e){let t=(0,te.jsx)(LM,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var RO=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let s=le(),{materialType:l,selectedTool:u,params:d,prompt:f}=t,c=Ss(t),[p,g]=(0,Mo.useState)(!1),[w,y]=(0,Mo.useState)(!1),h=IM(e);if(c==="import")return(0,te.jsx)("div",{className:"wf-config-panel wf-config-panel--import",children:(0,te.jsxs)("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[(0,te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,te.jsx)("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--wb-text-secondary)"},children:s("panel.hintImportNode")}),!!t.realPath&&(0,te.jsx)("span",{style:{fontSize:"11px",color:"var(--wb-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"240px"},title:String(t.realPath),children:String(t.realPath).split("/").pop()})]}),i&&(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",style:{padding:"4px 10px",height:"28px"},onClick:i,children:(0,te.jsx)("span",{children:s("node.replace")})})]})});let x=u==="text-to-music"?"music":"speech",m=(0,Mo.useCallback)(z=>{o({selectedTool:z==="music"?"text-to-music":"text-to-audio"})},[o]),b=(0,Mo.useMemo)(()=>{let z=a?.[l]??[];return z.length===0&&(l==="text"?z=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:l==="image"?z=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:l==="video"?z=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:l==="audio"&&(z=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),z.map(j=>{let F=DO(j.id),K=F.icon,$=j.badge??F.badge,ee=j.subtitle??F.subtitle;return{value:j.id,label:j.label,triggerLabel:(0,te.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[K?(0,te.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:K}):null,(0,te.jsx)("span",{children:j.label})]}),icon:K,badge:$,subtitle:ee}})},[a,l]),v=typeof d.model=="string"?d.model:b[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:S,isAspectRatioValid:k,durationOptions:_,defaultDuration:T,isDurationValid:R,resolutionOptions:H,defaultResolution:U}=TM(l,v,a),L=(0,Mo.useCallback)((z,j)=>{o({params:{...d,[z]:j}})},[o,d]),N=(0,Mo.useCallback)(z=>{let $=((a??Qc())?.[l]??[]).find(q=>q.id===z)?.parameters,ee={...d,model:z};d.aspectRatio&&$?.aspectRatio?.options&&($.aspectRatio.options.some(Q=>Q.value===d.aspectRatio)||(ee.aspectRatio=$.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&$?.duration?.options&&($.duration.options.some(Q=>Q.value===d.duration)||(ee.duration=$.duration.defaultValue||$.duration.options[0]?.value||5)),d.resolution&&$?.resolution?.options?$.resolution.options.some(Q=>Q.value===d.resolution)||(ee.resolution=$.resolution.defaultValue||$.resolution.options[0]?.value):d.resolution&&$&&!$.resolution?.options&&delete ee.resolution,o({params:ee})},[a,l,o,d]),E=(0,Mo.useMemo)(()=>{switch(l){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[l]),M=(0,Mo.useMemo)(()=>{switch(l){case"text":return s("panel.textPromptPlaceholder");case"image":return s("panel.imagePromptPlaceholder");case"video":return s("panel.videoPromptPlaceholder");case"audio":return s(x==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return s("panel.promptPlaceholder")}},[l,x,s]),A=typeof d.aspectRatio=="string"&&k(d.aspectRatio)?d.aspectRatio:S,O=typeof d.duration=="number"&&R(d.duration)?d.duration:T,D=z=>!!z&&H.some(j=>j.value===z),B=typeof d.resolution=="string"&&D(d.resolution)?d.resolution:U;return(0,te.jsxs)("div",{className:"wf-config-panel",children:[l==="audio"&&(0,te.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,te.jsx)(hs,{size:13}),(0,te.jsx)("span",{children:s("panel.audioGen")})]}),(0,te.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,te.jsx)(_a,{size:13}),(0,te.jsx)("span",{children:s("panel.musicGen")})]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,te.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[h.length>0||i?(0,te.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[h.map(z=>(0,te.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${z.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${z.label} (${z.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[z.url&&z.materialType==="image"?(0,te.jsx)("img",{src:z.url,alt:z.label,className:"wf-config-panel__ref-thumb-media"}):z.url&&z.materialType==="video"?(0,te.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,te.jsx)("video",{src:z.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,te.jsx)(So,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):z.materialType==="audio"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,te.jsx)(_a,{size:13})}):z.materialType==="text"?(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,te.jsx)(ka,{size:13})}):(0,te.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,te.jsx)(Ha,{size:13})}),z.hasMedia&&(0,te.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},z.nodeId)),i?(0,te.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:s("picker.addRef"),children:(0,te.jsx)(ft,{size:14})}):null]}):(0,te.jsx)("span",{}),(0,te.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>g(!0),title:s("header.fitView"),children:(0,te.jsx)(Nn,{size:13})})]}),(0,te.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:M,rows:3,onChange:z=>o({prompt:z.target.value})}),(0,te.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",E]})]}),(0,te.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,te.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,te.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--model",value:v,options:b,popupMatchSelectWidth:!1,onChange:z=>N(z)}),l==="image"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,te.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:C,popupMatchSelectWidth:!1,onChange:z=>L("aspectRatio",z)})})]}),l==="video"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,te.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:C,popupMatchSelectWidth:!1,onChange:z=>L("aspectRatio",z)}),(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:O,options:_,popupMatchSelectWidth:!1,onChange:z=>L("duration",z)}),H.length>0&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,te.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:B,options:H,popupMatchSelectWidth:!1,onChange:z=>L("resolution",z)})]})]})]}),l==="audio"&&(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,te.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!w),title:s("panel.advanced"),children:(0,te.jsx)(ws,{size:13})})]})]}),(0,te.jsx)("div",{className:"wf-config-panel__action-group",children:(0,te.jsx)(DM,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),w&&(0,te.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,te.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,te.jsx)("span",{className:"wf-config-panel__advanced-label",children:s("panel.duration")}),(0,te.jsx)(S0,{style:{flex:1},min:1,max:l==="video"?20:60,value:O,onChange:z=>L("duration",z)})]})}),(0,te.jsx)(rn,{title:s("panel.promptPlaceholder"),open:p,onCancel:()=>g(!1),width:680,children:(0,te.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:M,rows:10,onChange:z=>o({prompt:z.target.value})})})]})},RM=(0,Mo.memo)(RO);var oo=I(J(),1);var Ts=I(J(),1);var Se=I(X(),1);function gg(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var PO=({items:e,selectedIds:t,onToggle:a})=>{let o=le(),[n,r]=(0,Ts.useState)(""),[i,s]=(0,Ts.useState)("all"),[l,u]=(0,Ts.useState)("grid"),d=(0,Ts.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,Ts.useMemo)(()=>iM(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,Se.jsxs)("div",{className:"wf-picker-pane",children:[(0,Se.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,Se.jsxs)("label",{className:"wf-picker-search",children:[(0,Se.jsx)(an,{size:14,className:"wf-picker-search__icon"}),(0,Se.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,Se.jsx)(ao,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>s(p)}),(0,Se.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,Se.jsx)("button",{type:"button",className:`wf-picker-view-btn ${l==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":l==="grid",children:(0,Se.jsx)(Ba,{size:14})}),(0,Se.jsx)("button",{type:"button",className:`wf-picker-view-btn ${l==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":l==="list",children:(0,Se.jsx)(xr,{size:14})})]})]}),f.length===0?(0,Se.jsx)("div",{className:"wf-picker-empty",children:o(c)}):l==="grid"?(0,Se.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,Se.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,Se.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,Se.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,Se.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,Se.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(gg(p.materialType))}),p.alreadyConnected?(0,Se.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,Se.jsx)(Bt,{size:11}),o("picker.added")]}):(0,Se.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,Se.jsx)(Bt,{size:11}):null})]}),(0,Se.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,Se.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,Se.jsx)("span",{className:"wf-picker-type-tag",children:o(gg(p.materialType))})]})]},p.nodeId)})}):(0,Se.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,Se.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,Se.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,Se.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,Se.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,Se.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(gg(p.materialType))})}),(0,Se.jsxs)("div",{className:"wf-picker-row__body",children:[(0,Se.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,Se.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(gg(p.materialType))]})]}),p.alreadyConnected?(0,Se.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,Se.jsx)(Bt,{size:11}),o("picker.added")]}):(0,Se.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,Se.jsx)(Bt,{size:11}):null})]},p.nodeId)})})]})},PM=PO;var As=I(J(),1);var qt=I(X(),1),zO=({files:e,onAddFiles:t,onRemove:a})=>{let o=le(),[n,r]=(0,As.useState)(!1),i=(0,As.useCallback)(d=>{let f=Si(d);f.length>0&&t(f),f.length<d.length&&Y.warning(o("picker.unsupported")),d.length>0&&f.length===0&&Y.warning(o("picker.unsupported"))},[t,o]),s=(0,As.useCallback)(async()=>{let d=await Pn();if(!d.ok){d.body.error==="picker-unsupported"?Y.warning(o("picker.needPath")):Y.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),l=(0,As.useCallback)(d=>{let f=Array.from(d),c=[],p=0,g=0;for(let w of f){let y=Wc(w);if(!y){p+=1;continue}let h=Ci(y,{name:w.name,mime:w.type,size:w.size});h?c.push(h):g+=1}c.length>0&&t(c),p>0&&Y.warning(o("picker.needPath")),g>0&&Y.warning(o("picker.unsupported"))},[t,o]),u=(0,As.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&l(d.dataTransfer.files)},[l]);return(0,qt.jsxs)("div",{className:"wf-picker-pane",children:[(0,qt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{s()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,qt.jsx)(vs,{size:22,className:"wf-picker-dropzone__icon"}),(0,qt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,qt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,qt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,qt.jsx)(fc,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,qt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||dn(d.realPath);return(0,qt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,qt.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,qt.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,qt.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,qt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,qt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,qt.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,qt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${oM(d.size)}`:""]})]}),(0,qt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,qt.jsx)(Lo,{size:14})})]},d.id)})}):null]})},zM=zO;var pn=I(X(),1),OO=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=le(),i=ae(S=>S.nodes),s=ae(S=>S.edges),[l,u]=(0,oo.useState)(a),[d,f]=(0,oo.useState)([]),[c,p]=(0,oo.useState)([]),g=(0,oo.useMemo)(()=>rM(i,s,t),[i,s,t]);(0,oo.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,oo.useCallback)(()=>{p([]),o()},[o]),y=(0,oo.useCallback)((S,k)=>{k||f(_=>_.includes(S)?_.filter(T=>T!==S):[..._,S])},[]),h=(0,oo.useCallback)(S=>{p(k=>[...k,...S])},[]),x=(0,oo.useCallback)(S=>{p(k=>k.filter(_=>_.id!==S))},[]),b=d.filter(S=>{let k=g.find(_=>_.nodeId===S);return k&&!k.alreadyConnected}).length+c.length,v=(0,oo.useCallback)(()=>{if(b===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,b,d]),C=(0,pn.jsxs)("div",{className:"wf-picker-footer",children:[(0,pn.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,pn.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:b===0,onClick:v,children:[r("picker.use")," ",b," ",r("picker.items")]})]});return(0,pn.jsxs)(rn,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,pn.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,pn.jsxs)("button",{type:"button",role:"tab","aria-selected":l==="canvas",className:`wf-picker-tab ${l==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,pn.jsx)("button",{type:"button",role:"tab","aria-selected":l==="local",className:`wf-picker-tab ${l==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),l==="canvas"?(0,pn.jsx)(PM,{items:g,selectedIds:d,onToggle:y}):(0,pn.jsx)(zM,{files:c,onAddFiles:h,onRemove:x})]})},hg=OO;var Un=I(J(),1);function OM(e){let t=le(),[a,o]=(0,Un.useState)(!1),[n,r]=(0,Un.useState)("canvas"),i=(0,Un.useCallback)((c="canvas")=>{r(c),o(!0)},[]),s=(0,Un.useCallback)(()=>{o(!1)},[]),l=(0,Un.useCallback)(c=>{let p=ae.getState(),g=sM({nodes:p.nodes,edges:p.edges,targetNodeId:e,selectedCanvasNodeIds:c.selectedCanvasNodeIds,localFiles:c.localFiles});return g.hasWork?p.applyCanvasInputMutation({addNodes:g.addNodes,addEdges:g.addEdges,nodePatches:g.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(g.rejected.length>0?Y.warning(t("picker.commitPartial")):Y.success(t("picker.commitOk")),o(!1),!0):(Y.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,Un.useCallback)(async()=>{let c=await Pn();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=Si(p);if(g.length===0)return Y.warning(t("picker.unsupported")),!1;let w=ae.getState(),y=Yc({nodes:w.nodes,targetNodeId:e,files:g});return y.hasWork?w.applyCanvasInputMutation({addNodes:y.addNodes,nodePatches:y.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("picker.importOk")),!0):(Y.warning(t("picker.unsupported")),!1)},[e,t]),d=(0,Un.useCallback)(async()=>{let c=await Pn();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=Si(p);return g.length===0?(Y.warning(t("picker.unsupported")),!1):l({selectedCanvasNodeIds:[],localFiles:g})},[l,t]),f=(0,Un.useCallback)(async c=>{let p=await Pn();if(!p.ok)return Y.error(t("picker.pickFailed")),!1;let g=p.body.path;if(!g)return!1;let y=Si([g])[0];if(!y||y.materialType!==c)return Y.warning(t("picker.unsupported")),!1;let h=og({realPath:y.realPath,name:y.name,materialType:y.materialType,mime:y.mime,size:y.size});return ae.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:h}]}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:s,importLocalFiles:d,fillImportNode:u,relinkLocalFile:f,commit:l}}var ze=I(X(),1),HO=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:s,mediaUrl:l,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[w,y]=(0,bt.useState)(!1),[h,x]=(0,bt.useState)(!1),[m,b]=(0,bt.useState)(!1),[v,C]=(0,bt.useState)(!1),[S,k]=(0,bt.useState)(null),{setNodes:_}=Ca(),T=ot(oe=>oe.status==="pending"||oe.status==="running"),R=od(),H=o.nodeWidth??zn(n),U=U0(n),L=qI(H,U),N=S??o.nodeHeight??L,E=(0,bt.useCallback)(oe=>{_(Ie=>Ie.map(it=>it.id===e?{...it,data:{...it.data,...oe}}:it))},[e,_]),M=(0,bt.useCallback)((oe,Ie)=>{if(oe>0&&Ie>0){let it=oe/Ie,St=Math.max(80,Math.min(800,Math.round(H/it)));k(St),o.nodeHeight!==St&&E({nodeHeight:St})}},[o.nodeHeight,H,E]),A=(0,bt.useCallback)(()=>{if(Ss(o)==="generate"){let Ie=o.selectedTool;(!Ie||Ie==="text-editor")&&E({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]})}ot.getState().startNodeExecution?.(e)},[e,n,o,E]),O=le(),D=ae(oe=>oe.applyCanvasInputMutation),B=OM(e),z=Ss(o),j=(0,bt.useMemo)(()=>lg(n).map(oe=>({key:oe.key,label:O(oe.labelKey),description:O(oe.descKey),icon:oe.icon})),[n,O]),F=(0,bt.useCallback)((oe,Ie)=>{let it=sg(oe),St=Ie?.flowPosition;if(!it||!St)return;let Fe=dd(it.targetMaterialType,St),Qt=Fe.nodes[0];Qt&&D({addNodes:Fe.nodes,addEdges:[{source:e,sourceHandle:"out",target:Qt.id,targetHandle:"in"}]})},[D,e]),K=u||s||"",$=(0,bt.useCallback)(oe=>{if(n==="text"){let Ie="";oe==="script"?Ie=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:oe==="planning"?Ie=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:oe==="prompt"?Ie=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:oe==="storyboard"&&(Ie=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),E({prompt:Ie,selectedTool:"text-to-text"})}},[n,E]),ee=(0,bt.useCallback)(oe=>{let Ie=Wc(oe);if(!Ie){Y.warning(O("picker.needPath"));return}let it=Ci(Ie,{name:oe.name,mime:oe.type,size:oe.size});if(!it){Y.warning(O("picker.unsupported"));return}let St=ae.getState(),Fe=Yc({nodes:St.nodes,targetNodeId:e,files:[it]});if(!Fe.hasWork){Y.warning(O("picker.unsupported"));return}D({addNodes:Fe.addNodes,nodePatches:Fe.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[D,e,O]),q=(0,bt.useCallback)(oe=>{z==="import"&&(oe.preventDefault(),oe.stopPropagation(),x(!0))},[z]),Q=(0,bt.useCallback)(oe=>{z==="import"&&(oe.preventDefault(),oe.stopPropagation(),x(!1))},[z]),ne=(0,bt.useCallback)(oe=>{if(z!=="import")return;oe.preventDefault(),oe.stopPropagation(),x(!1);let Ie=Array.from(oe.dataTransfer.files??[]);if(Ie.length===1&&Ie[0]){ee(Ie[0]);return}let it=Ie.map(Et=>{let Ga=Wc(Et);return Ga?Ci(Ga,{name:Et.name,mime:Et.type,size:Et.size}):null}).filter(Et=>!!Et);if(it.length===0){Ie.length>0&&Y.warning(O("picker.needPath"));return}let St=ae.getState(),Fe=Yc({nodes:St.nodes,targetNodeId:e,files:it});if(!Fe.hasWork){Y.warning(O("picker.unsupported"));return}D({addNodes:Fe.addNodes,nodePatches:Fe.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[D,ee,e,z,O]),de=(0,bt.useCallback)(()=>{K&&navigator.clipboard.writeText(K).catch(()=>{})},[K]),re=(0,bt.useCallback)(()=>{if(!K)return;let oe=K.split(`

`).filter(Ie=>Ie.trim().length>0);oe.length>1&&E({content:oe.join(`
---
`)})},[K,E]);(0,bt.useEffect)(()=>{a||(b(!1),C(!1))},[a]);let ce=n5(a,m,f,z,R),we=r==="offline"||o.isMissing===!0,_e=sn(n,p,l),Oe=we?null:r5(f,r,!!_e),vt=n==="video"?"video":n==="audio"?"audio":"square";return(0,ze.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:H},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[!R&&(w||a)&&(n==="text"||z==="import"&&!_e&&!we)&&(0,ze.jsx)(wM,{materialType:n,nodeKind:z,selected:a,onOpenResourcePicker:()=>{B.fillImportNode()},onStartTextEdit:()=>C(!0),onCopyText:de,onSplitText:re}),(0,ze.jsx)(Cr,{side:"left",nodeHovered:w}),(0,ze.jsx)(cd,{label:i,materialType:z==="import"?"import_asset":n,onLabelChange:oe=>E({label:oe}),trailing:(0,ze.jsx)(pg,{executionStatus:f,status:r})}),(0,ze.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:H,height:N,position:"relative"},onDragOver:q,onDragLeave:Q,onDrop:ne,children:[z==="import"&&!!_e&&!we&&(0,ze.jsx)("button",{type:"button",className:"wf-material-node__replace-btn nodrag nopan",onClick:oe=>{oe.stopPropagation(),B.fillImportNode()},title:O("node.replace"),children:O("node.replace")}),a&&(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ze.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:K||v?(0,ze.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${v?" nodrag":""}`,readOnly:!v,value:K,placeholder:O("node.textPlaceholder"),autoFocus:v,onMouseDown:oe=>{v||oe.preventDefault()},onDoubleClick:oe=>{oe.stopPropagation(),C(!0),oe.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:oe=>E({content:oe.target.value,status:oe.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ze.jsx)(mg,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:$})}),n!=="text"&&we&&(0,ze.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,ze.jsx)(ys,{size:22,className:"wf-media-offline__icon"}),(0,ze.jsx)("div",{className:"wf-media-offline__title",children:O("node.offline")}),(0,ze.jsx)("div",{className:"wf-media-offline__hint",children:O("node.offlineHint")}),(0,ze.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{B.relinkLocalFile(n)},children:O("node.relink")})]}),n!=="text"&&!we&&(Oe?(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(Zc,{status:Oe,loadingAspectRatio:vt,errorMessage:c??d,taskId:o.taskId,onRetry:A,children:_e?(0,ze.jsx)(xM,{materialType:n,mediaAssets:p,mediaUrl:l,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:M}):(0,ze.jsx)(mg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:$})})}):(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(mg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:$})})),n==="text"&&(d||c)&&(0,ze.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ce&&(0,ze.jsx)(SM,{onClose:()=>b(!0),children:(0,ze.jsx)(RM,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:E,onGenerate:A,execBusy:T,onOpenResourcePicker:z==="import"?()=>{B.fillImportNode()}:()=>B.openPicker("canvas")})}),(0,ze.jsx)(Cr,{side:"right",nodeHovered:w,options:j,onSelect:F}),(0,ze.jsx)(hg,{open:B.open,nodeId:e,initialTab:B.initialTab,onCancel:B.closePicker,onCommit:B.commit})]})},HM=(0,bt.memo)(HO);var BM={type:"material",component:HM,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Hc("text",{status:"empty",nodeWidth:zn("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var md=I(J(),1);var ew=50;function Ds(e){return JSON.parse(JSON.stringify(e))}var BO={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Na=ed((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Ds(o)].slice(-ew),redoStack:[]}};return{document:BO,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Ds(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let s=o.slice(0,-1);e({document:Ds(i),undoStack:s,redoStack:[...r,Ds(n)].slice(-ew)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let s=o.slice(0,-1);e({document:Ds(i),redoStack:s,undoStack:[...r,Ds(n)].slice(-ew)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),s=i.rows[o];if(!s)return;let l=a(i),u=[...i.rows],d={...s,cells:[...s.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...l})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(s=>s.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((s,l)=>l!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),s=a(i),l={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,l],rows:u},...s})},updateColumn:(o,n,r)=>{let{document:i}=t(),s=i.columns[o];if(!s)return;let l=a(i),u=[...i.columns];u[o]={...s,title:n,type:r},e({document:{...i,columns:u},...l})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((l,u)=>u!==o),s=n.rows.map(l=>({...l,cells:l.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:s},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),s=[...n.columns];s[o]={...r,visible:!r.visible},e({document:{...n,columns:s},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let s=a(r),l=[...r.columns],[u]=l.splice(o,1);u&&l.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:l,rows:d},...s})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Ds(o),undoStack:[],redoStack:[]})}});var xe=I(X(),1),FM=380,FO=280,UM=(0,md.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Na(),[i,s]=(0,md.useState)(!1),{zoom:l}=Sa(),u=(0,md.useMemo)(()=>Ia(l),[l]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C",g=!od()&&(i||a);return(0,xe.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:FM},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[g&&(0,xe.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,xe.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,xe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:w=>{w.stopPropagation(),r()},children:[(0,xe.jsx)(ft,{size:14}),(0,xe.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,xe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:w=>{w.stopPropagation(),n()},children:[(0,xe.jsx)(Nn,{size:13}),(0,xe.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,xe.jsx)(Cr,{side:"left",nodeHovered:i}),(0,xe.jsx)(cd,{label:c,materialType:"table"}),(0,xe.jsxs)("div",{className:"wf-material-node__card",style:{width:FM,height:FO},onDoubleClick:()=>n(),children:[a&&(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,xe.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,xe.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,xe.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,xe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,xe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,xe.jsx)(ko,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,xe.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,xe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:w=>w.stopPropagation(),children:[(0,xe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,xe.jsx)(ft,{size:14,className:"wf-node-empty__pill-icon"}),(0,xe.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,xe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,xe.jsx)(Nn,{size:13,className:"wf-node-empty__pill-icon"}),(0,xe.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,xe.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,xe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,xe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,xe.jsx)(cc,{size:14}),(0,xe.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,xe.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,xe.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((w,y)=>{let h=w.cells[0],x=typeof h=="string"&&h?h:typeof h=="number"?String(h):Array.isArray(h)&&h.length>0?`\u{1F4CE} \u9644\u4EF6 (${h.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,xe.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,xe.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:x}),(0,xe.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,xe.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,xe.jsx)(Cr,{side:"right",nodeHovered:i})]})});var qM={type:"table",component:UM,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var Lr=I(J(),1);var no=I(J(),1);var No=I(X(),1),UO=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:s,nodeHeight:l,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:w,onLeftHandleSelect:y,onFileDrop:h,onFilesDrop:x,onDragOver:m,onDragLeave:b,onDrop:v,onMouseEnter:C,onMouseLeave:S,onCardClick:k,onCardDoubleClick:_,renderFloatingPill:T,renderHeader:R,children:H,renderConfigPanel:U})=>{let[L,N]=(0,no.useState)(!1),[E,M]=(0,no.useState)(!1),A=od(),{zoom:O}=Sa(),D=(0,no.useMemo)(()=>Ia(O),[O]),B=(0,no.useMemo)(()=>({inverseScale:D,hovered:L,selected:t&&!A,isMultiSelected:A}),[D,L,t,A]),z=(0,no.useCallback)(ne=>{N(!0),C?.(ne)},[C]),j=(0,no.useCallback)(ne=>{N(!1),S?.(ne)},[S]),F=(0,no.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!0),m?.(ne)},[m]),K=(0,no.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1),b?.(ne)},[b]),$=(0,no.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1);let de=ne.dataTransfer.files;de&&de.length>0&&(x?.(de),de[0]&&h?.(de[0])),v?.(ne)},[v,h,x]),ee=A?null:typeof T=="function"?T(B):T,q=typeof R=="function"?R(B):R,Q=A?null:typeof U=="function"?U(B):U;return(0,No.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:s,...n},onMouseEnter:z,onMouseLeave:j,"data-node-id":e,children:[ee,u&&(0,No.jsx)(Cr,{side:"left",nodeHovered:L,variant:f,options:w,onSelect:y}),q,(0,No.jsxs)("div",{className:`wf-material-node__card ${E?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:s,height:l,...r},"data-node-type":i,onClick:k,onDoubleClick:_,onDragOver:F,onDragLeave:K,onDrop:$,children:[t&&(0,No.jsxs)(No.Fragment,{children:[(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),H]}),Q,d&&(0,No.jsx)(Cr,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},VM=(0,no.memo)(UO);var Rs=I(J(),1);var kr=I(X(),1),qO=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=Sa(),s=(0,Rs.useMemo)(()=>Ia(i),[i]),l=a??s,u=d=>d?Rs.default.isValidElement(d)?d:(0,kr.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,kr.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*l),transform:`translate(-50%, -100%) scale(${l})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,kr.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,kr.jsxs)(Rs.default.Fragment,{children:[f>0&&(0,kr.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,kr.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,kr.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},GM=(0,Rs.memo)(qO);var xg=I(J(),1);var ro=I(X(),1),VO=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:s="",style:l})=>{let u=le(),d=(f,c,p)=>f?xg.default.isValidElement(f)?f:(0,ro.jsx)(f,{size:c,className:p}):null;return(0,ro.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${s}`.trim(),style:l,children:[(e||t)&&(0,ro.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,ro.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,ro.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,ro.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,ro.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,ro.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,ro.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,ro.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,ro.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,ro.jsx)("span",{children:f.label})]},f.key)})}),i]})},jM=(0,xg.memo)(VO);function GO(e,t){return e.find(a=>a.type==="material"&&a.data?.realPath===t)}function jO(e){return e.sourceHandle==="out"&&e.targetHandle==="in"}function XO(e,t,a){return e.filter(o=>o.source===t&&o.target===a)}function XM(e,t){return{id:`edge_${e}_${t}`,source:e,target:t,sourceHandle:"out",targetHandle:"in"}}function tw(e){let t=e.output.videoPath;if(!t)return null;let a=GO(e.currentNodes,t);if(a){let r=XO(e.currentEdges,e.sourceNodeId,a.id);if(r.find(jO))return null;let s=r.map(l=>l.id).filter(l=>typeof l=="string"&&l.length>0);return{addNodes:[],addEdges:[XM(e.sourceNodeId,a.id)],removeEdgeIds:s}}if(e.createIfMissing===!1)return null;let o=e.createNodeId?.()??`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;return{addNodes:[{id:o,type:"material",position:{x:e.sourcePosition.x+e.nodeWidth+80,y:e.sourcePosition.y},selected:!0,data:{materialType:"video",label:`${e.sourceLabel}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:t,mediaUrl:t,thumbnailUrl:e.output.thumbnailPath,duration:e.output.durationMs?Math.round(e.output.durationMs/1e3):void 0,size:{width:e.output.width||1920,height:e.output.height||1080}}}],addEdges:[XM(e.sourceNodeId,o)],removeEdgeIds:[]}}function WM(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function YM(e,t=!1){return e==="error"?"error":e==="rendering"?"rendering":"launcher"}function KM(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var ZM="omnimux-clip-open",aw="omnimux-clip-save",ow="omnimux-clip-close",nw="omnimux-clip-progress";function $M(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function QM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function JM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var io=I(X(),1),rw=350,WO=440;function eN(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Eo(e){return typeof e=="string"&&e.trim()?e:void 0}function iw(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function YO(e){return Eo(e.mediaUrl)||Eo(e.outputVideoUrl)||Eo(e.path)||Eo(e.url)||Eo(e.real_path)||Eo(e.filePath)}function KO(e){let{nodes:t,edges:a}=ae.getState(),o=[],n=[],r=[],i=[];for(let s of a){if(s.target!==e)continue;let l=t.find(g=>g.id===s.source);if(!l)continue;let u=eN(l.data)?l.data:{},d=Eo(u.materialType)||(l.type==="material"?void 0:l.type),f=Eo(u.label)||Eo(u.title)||l.id,c=YO(u)||"",p=iw(u.duration)??iw(u.outputDurationMs)??iw(u.durationMs);if(d==="video"||l.type==="video_composition"){let g=c||Eo(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=Eo(u.content)||Eo(u.generatedContent)||Eo(u.prompt);g&&i.push({text:g,startTimeMs:i.reduce((w,y)=>w+y.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function ZO(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function $O(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var QO=({id:e,data:t,selected:a})=>{let o=eN(t)?t:{},n=ae(g=>g.setNodes),r=ae(g=>g.applyCanvasInputMutation),i=le(),s=o.status??"idle",l=!!o.outputVideoUrl,u=o.title||o.label||i("node.type.video_composition"),d=YM(s,l),f=(0,Lr.useCallback)(g=>{n(w=>w.map(y=>y.id===e?{...y,data:{...y.data,...g}}:y))},[e,n]);(0,Lr.useEffect)(()=>{if(typeof window>"u")return;let g=h=>{let x=h instanceof CustomEvent?h.detail:void 0;if(!$M(x)||x.nodeId&&x.nodeId!==e)return;let m=x.output;if(f({schema:x.schema,projectId:x.projectId||o.projectId,outputVideoUrl:m?.videoPath,thumbnailUrl:m?.thumbnailPath,outputThumbnailUrl:m?.thumbnailPath,outputDurationMs:m?.durationMs,outputWidth:m?.width,outputHeight:m?.height,status:m?.videoPath?"completed":"idle",renderProgress:m?.videoPath?100:void 0,errorMessage:void 0}),m?.videoPath&&x.createDownstreamNode){let b=ae.getState(),v=b.nodes.find(S=>S.id===e),C=tw({sourceNodeId:e,sourcePosition:v?.position||{x:0,y:0},sourceLabel:o.title||o.label||i("node.type.video_composition"),output:m,currentNodes:b.nodes,currentEdges:b.edges,nodeWidth:rw});C&&(r({addNodes:C.addNodes.map(S=>({...S,selected:!0})),addEdges:C.addEdges,removeEdgeIds:C.removeEdgeIds}),Y.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03"))}},w=h=>{let x=h instanceof CustomEvent?h.detail:void 0;if(!JM(x)||x.nodeId&&x.nodeId!==e)return;let m=x.status??"rendering";f({status:m,renderProgress:x.renderProgress})},y=h=>{let x=h instanceof CustomEvent?h.detail:void 0;QM(x)&&(x.nodeId&&x.nodeId!==e||o.status==="editing"&&f({status:l?"completed":"idle"}))};return window.addEventListener(aw,g),window.addEventListener(nw,w),window.addEventListener(ow,y),()=>{window.removeEventListener(aw,g),window.removeEventListener(nw,w),window.removeEventListener(ow,y)}},[r,l,e,o.projectId,o.status,i,f]),(0,Lr.useEffect)(()=>{if(typeof window>"u"||!o.outputVideoUrl)return;let g=ae.getState(),w=g.nodes.find(h=>h.id===e),y=tw({sourceNodeId:e,sourcePosition:w?.position||{x:0,y:0},sourceLabel:o.title||o.label||i("node.type.video_composition"),output:{videoPath:o.outputVideoUrl,thumbnailPath:o.thumbnailUrl||o.outputThumbnailUrl,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight},currentNodes:g.nodes,currentEdges:g.edges,nodeWidth:rw,createIfMissing:!1});y&&r({addEdges:y.addEdges,removeEdgeIds:y.removeEdgeIds})},[r,e,o.label,o.outputDurationMs,o.outputHeight,o.outputThumbnailUrl,o.outputVideoUrl,o.outputWidth,o.thumbnailUrl,o.title,i]);let c=(0,Lr.useCallback)(()=>{if(typeof window>"u")return;let g=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,w={source:"canvas",nodeId:e,nodeTitle:u,projectId:g,draftSchema:o.schema,upstreamInputs:KO(e)};f({status:"editing",projectId:g}),window.dispatchEvent(new CustomEvent(ZM,{detail:w,bubbles:!0})),window.setTimeout(()=>{ZO()||Y.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,u,f]),p=(0,Lr.useCallback)(()=>{let g=o.outputVideoUrl;if(!g)return;let w=document.createElement("a");w.href=g,w.download=`${KM(u)}.mp4`,w.rel="noopener",document.body.appendChild(w),w.click(),w.remove()},[o.outputVideoUrl,u]);return(0,io.jsxs)(VM,{id:e,selected:a,nodeWidth:rw,nodeHeight:WO,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:g=>{g.stopPropagation(),c()},renderFloatingPill:({hovered:g,selected:w})=>{if(!g&&!w||!l)return null;let y=[{key:"download_video",label:i("clip.download"),icon:sc,onClick:p,title:i("clip.downloadTitle")}];return(0,io.jsx)(GM,{actions:y})},renderHeader:()=>(0,io.jsx)(cd,{label:u,materialType:"video_composition",customIcon:(0,io.jsx)(La,{size:14}),onLabelChange:g=>f({label:g,title:g}),trailing:(0,io.jsx)(pg,{status:WM(s)})}),children:[d==="rendering"&&(0,io.jsx)("div",{className:"wf-material-node__media",children:(0,io.jsx)(Zc,{status:"generating",loadingAspectRatio:"video",children:null})}),d==="error"&&(0,io.jsx)("div",{className:"wf-material-node__media",children:(0,io.jsx)(Zc,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:c,children:null})}),d==="launcher"&&(0,io.jsx)(jM,{mainIcon:(0,io.jsx)(La,{size:36,strokeWidth:1.5}),secondaryIcon:(0,io.jsx)(ga,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:Ic,onClick:()=>c()}]})]})},tN={type:"video_composition",component:(0,Lr.memo)(QO),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>$O(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var mn=I(J(),1);var Wo=I(J(),1);var Ae=I(X(),1),JO=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#64748b"],sw=(0,Wo.memo)(({groupColor:e,onExecuteGroup:t,onCreateWorkflow:a,onUngroup:o,onLayout:n,onColorChange:r})=>{let i=le(),{zoom:s}=Sa(),l=(0,Wo.useMemo)(()=>Ia(s),[s]),[u,d]=(0,Wo.useState)(!1),[f,c]=(0,Wo.useState)(!1),p=(0,Wo.useRef)(null),g=(0,Wo.useRef)(null);return(0,Wo.useEffect)(()=>{function w(y){p.current&&!p.current.contains(y.target)&&d(!1),g.current&&!g.current.contains(y.target)&&c(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),(0,Ae.jsx)("div",{className:"wf-floating-top-pill wf-group-topbar nodrag nopan nowheel",onPointerDown:ge,onMouseDown:ge,style:{top:-(12*l),transform:`translate(0, -100%) scale(${l})`,transformOrigin:"bottom left",left:12,"--wf-group-accent":e},children:(0,Ae.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Ae.jsxs)("div",{style:{position:"relative"},ref:g,children:[(0,Ae.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>c(w=>!w),title:i("group.colorTitle"),children:(0,Ae.jsx)("div",{className:"wf-group-topbar__swatch",style:{backgroundColor:e}})}),f&&(0,Ae.jsx)("div",{className:"wf-group-topbar__palette",children:JO.map(w=>(0,Ae.jsx)("button",{type:"button",className:`wf-group-topbar__palette-dot ${e===w?"is-active":""}`,style:{backgroundColor:w},onClick:()=>{r(w),c(!1)}},w))})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("div",{style:{position:"relative"},ref:p,children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>d(w=>!w),title:i("group.layoutTitle"),children:[(0,Ae.jsx)(Ba,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.layout")}),(0,Ae.jsx)(Wt,{size:12,className:"wf-floating-top-pill__icon"})]}),u&&(0,Ae.jsxs)("div",{className:"wf-group-topbar__menu",style:{left:0,right:"auto"},children:[(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("horizontal"),d(!1)},children:[(0,Ae.jsx)(ls,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("vertical"),d(!1)},children:[(0,Ae.jsx)(ds,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutVertical")})]}),(0,Ae.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("grid"),d(!1)},children:[(0,Ae.jsx)(Co,{size:13}),(0,Ae.jsx)("span",{children:i("group.layoutGrid")})]})]})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn wf-floating-top-pill__btn--success",onClick:t,title:i("group.executeTitle"),children:[(0,Ae.jsx)(So,{size:12,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}),(0,Ae.jsx)("span",{children:i("group.execute")})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,title:i("group.createWorkflowTitle"),children:[(0,Ae.jsx)(gr,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.createWorkflow")})]}),(0,Ae.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Ae.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:i("group.ungroupTitle"),children:[(0,Ae.jsx)(Dc,{size:13,className:"wf-floating-top-pill__icon"}),(0,Ae.jsx)("span",{children:i("group.ungroup")})]})]})})});sw.displayName="GroupTopBar";var bg=I(J(),1);var lw=I(X(),1),e7=[{direction:"nw",kind:"corner"},{direction:"ne",kind:"corner"},{direction:"se",kind:"corner"},{direction:"sw",kind:"corner"},{direction:"n",kind:"edge"},{direction:"s",kind:"edge"},{direction:"w",kind:"edge"},{direction:"e",kind:"edge"}],dw=(0,bg.memo)(({bounds:e,minAllowed:t,color:a,zoom:o=1,onResize:n})=>{let r=(0,bg.useCallback)((i,s)=>{s.stopPropagation(),s.preventDefault();let l=s.clientX,u=s.clientY,d={...e},f=o,c=g=>{let w=s5(g.clientX-l,g.clientY-u,f),y=i5(i,d,w,t);n(y)},p=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",p)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",p)},[e,t,n,o]);return(0,lw.jsx)("div",{className:"wf-group-resize-handles nodrag nopan",onPointerDown:ge,onMouseDown:ge,style:{"--wf-group-accent":a||"var(--wb-accent)"},children:e7.map(i=>(0,lw.jsx)("div",{className:`wf-group-handle wf-group-handle--${i.kind} wf-group-handle--${i.direction}`,onPointerDown:s=>r(i.direction,s),title:i.kind==="corner"?"\u7F29\u653E":i.direction==="n"||i.direction==="s"?"\u5782\u76F4\u8C03\u6574":"\u6C34\u5E73\u8C03\u6574"},i.direction))})});dw.displayName="GroupResizeHandles";var Zt=I(J(),1);var _i=I(X(),1),uw=(0,Zt.memo)(({groupId:e,title:t,isCollapsed:a,selected:o,color:n,onToggleCollapse:r,onRename:i,onSelect:s})=>{let l=le(),{zoom:u}=Sa(),d=(0,Zt.useMemo)(()=>Ia(u),[u]),[f,c]=(0,Zt.useState)(!1),[p,g]=(0,Zt.useState)(t),w=(0,Zt.useRef)(null);(0,Zt.useEffect)(()=>{f&&w.current&&(w.current.focus(),w.current.select())},[f]),(0,Zt.useEffect)(()=>{f||g(t)},[t,f]);let y=(0,Zt.useCallback)(C=>{C.stopPropagation(),c(!0),g(t)},[t]),h=(0,Zt.useCallback)(()=>{let S=p.trim()||t||l("group.defaultTitle");c(!1),S!==t&&i(S)},[p,t,i,l]),x=(0,Zt.useCallback)(()=>{c(!1),g(t)},[t]),m=(0,Zt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),h()):C.key==="Escape"&&(C.preventDefault(),x())},[h,x]),b=(0,Zt.useCallback)(C=>{C.stopPropagation(),s()},[s]),v=(0,Zt.useCallback)(C=>{C.stopPropagation(),r()},[r]);return(0,_i.jsxs)("div",{className:`wf-group-header-pill nodrag nopan ${o?"wf-group-header-pill--selected":""}`,onClick:b,onPointerDown:ge,onMouseDown:ge,style:{"--wf-group-accent":n||"var(--wb-accent)",transformOrigin:"top left"},title:l(a?"group.expand":"group.collapse"),children:[(0,_i.jsx)("button",{type:"button",className:"wf-group-header-pill__toggle",onClick:v,title:l(a?"group.expand":"group.collapse"),children:a?(0,_i.jsx)(fs,{size:14}):(0,_i.jsx)(Wt,{size:14})}),f?(0,_i.jsx)("input",{ref:w,type:"text",value:p,onChange:C=>g(C.target.value),onBlur:h,onKeyDown:m,className:"wf-group-header-pill__input nodrag nopan",style:{width:`${Math.max(60,p.length*8+16)}px`},maxLength:40}):(0,_i.jsx)("span",{className:"wf-group-header-pill__title",onDoubleClick:y,title:l("group.renameHint"),children:t})]})});uw.displayName="GroupHeader";var gd=I(X(),1),cw=(0,mn.memo)(({id:e,data:t,selected:a,width:o,height:n})=>{let r=le(),i=t,s=i.title||r("group.defaultTitle"),l=i.color||"var(--wb-accent)",u=!!i.isCollapsed,d=i.minWidth||220,f=i.minHeight||44,c=typeof o=="number"&&o>0?o:400,p=typeof n=="number"&&n>0?n:300,g=ae(N=>N.ungroup),w=ae(N=>N.toggleGroupCollapse),y=ae(N=>N.resizeGroup),h=ae(N=>N.setNodes),x=ae(N=>N.setSelectedElement),m=ae(N=>N.nodes),b=ae(N=>N.nodes.find(E=>E.id===e)?.position||{x:0,y:0}),{getViewport:v}=Ca(),C=v()?.zoom||1,S=(0,mn.useCallback)(N=>{let E=N.trim()||r("group.defaultTitle");h(M=>M.map(A=>A.id===e?{...A,data:{...A.data,title:E}}:A))},[e,h,r]),k=(0,mn.useCallback)(()=>{x("node",e),h(N=>N.map(E=>({...E,selected:E.id===e})))},[e,x,h]),_=(0,mn.useCallback)(N=>{h(E=>E.map(M=>M.id===e?{...M,data:{...M.data,color:N}}:M))},[e,h]),T=(0,mn.useCallback)(N=>{y(e,N)},[e,y]),R=(0,mn.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:execute-group",{detail:{groupId:e,nodeIds:ad(m,e)}}))},[e,m]),H=(0,mn.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:create-subworkflow",{detail:{groupId:e,groupTitle:s,nodeIds:ad(m,e)}}))},[e,s,m]),U=(0,mn.useCallback)(()=>{g(e)},[e,g]),L=(0,mn.useCallback)(N=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:layout-group",{detail:{groupId:e,layoutType:N}}))},[e]);return(0,gd.jsxs)("div",{className:`wf-group-node ${a?"wf-group-node--selected":""} ${u?"wf-group-node--collapsed":""}`,style:{width:`${c}px`,height:`${p}px`,"--wf-group-accent":l},children:[a&&(0,gd.jsx)(sw,{groupId:e,groupTitle:s,groupColor:l,onExecuteGroup:R,onCreateWorkflow:H,onUngroup:U,onLayout:L,onColorChange:_}),a&&!u&&(0,gd.jsx)(dw,{bounds:{x:b.x,y:b.y,width:c,height:p},minAllowed:{minWidth:d,minHeight:f},color:l,zoom:C,onResize:T}),(0,gd.jsx)(uw,{groupId:e,title:s,isCollapsed:u,selected:a,color:l,onToggleCollapse:()=>w(e),onRename:S,onSelect:k})]})});cw.displayName="GroupNode";var aN={type:"group",component:cw,ports:[],defaultData:()=>({title:"",color:"#3b82f6",padding:32,minWidth:300,minHeight:200,nodeIds:[]})};var Ii=I(J(),1);var wt=I(X(),1),fw=(0,Ii.memo)(({visible:e,selectedCount:t,position:a,onGroup:o,onCreateAsset:n,onLayout:r})=>{let i=le(),[s,l]=(0,Ii.useState)(!1),u=(0,Ii.useRef)(null);return(0,Ii.useEffect)(()=>{function d(f){u.current&&!u.current.contains(f.target)&&l(!1)}if(s)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[s]),!e||t<2?null:(0,wt.jsxs)("div",{className:"wf-floating-selection-bar nodrag nopan",onPointerDown:ge,onMouseDown:ge,style:{left:`${a.x}px`,top:`${a.y}px`},children:[(0,wt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:n,title:i("group.float.createAssetTitle"),children:[(0,wt.jsx)(xs,{size:15}),(0,wt.jsx)("span",{children:i("group.float.createAsset")})]}),(0,wt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn wf-floating-selection-bar__btn--accent",onClick:o,title:i("group.float.groupTitle"),children:[(0,wt.jsx)(ms,{size:15}),(0,wt.jsx)("span",{children:i("group.float.group")})]}),(0,wt.jsxs)("div",{style:{position:"relative"},ref:u,children:[(0,wt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:()=>l(d=>!d),title:i("group.float.layoutTitle"),children:[(0,wt.jsx)(Ba,{size:15}),(0,wt.jsx)("span",{children:i("group.layout")}),(0,wt.jsx)(Wt,{size:13})]}),s&&(0,wt.jsxs)("div",{className:"wf-floating-selection-bar__menu",children:[(0,wt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("horizontal"),l(!1)},children:[(0,wt.jsx)(ls,{size:14}),(0,wt.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,wt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("vertical"),l(!1)},children:[(0,wt.jsx)(ds,{size:14}),(0,wt.jsx)("span",{children:i("group.layoutVertical")})]}),(0,wt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("grid"),l(!1)},children:[(0,wt.jsx)(Co,{size:14}),(0,wt.jsx)("span",{children:i("group.layoutGridCompact")})]})]})]})]})});fw.displayName="FloatingSelectionToolbar";var gn=I(J(),1);function oN(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function hd(e){return typeof e=="string"?e.trim():""}function t7(e){let t=hd(e);if(!t||sd(t))return"";let a=wI(t);return a||(O0(t)&&!t.includes("/api/local-file")?t:"")}function nN(e){let t=[],a=new Set;for(let o of e){let n=hd(o.id),r=oN(o.data),i=[r.realPath,r.real_path,r.outputVideoUrl];if(Array.isArray(r.mediaAssets))for(let u of r.mediaAssets){let d=oN(u);i.push(d.path,d.real_path,d.url)}i.push(r.mediaUrl,r.previewUrl);let s="";for(let u of i)if(s=t7(u),s)break;if(!s||a.has(s))continue;a.add(s);let l=hd(r.originalName)||hd(r.title)||hd(r.label)||hd(r.name);t.push({real_path:s,nodeId:n||s,...l?{original_name:l}:{}})}return t}var et=I(X(),1),a7=[{value:"character",key:"asset.scope.character"},{value:"scene",key:"asset.scope.scene"},{value:"prop",key:"asset.scope.prop"},{value:"style",key:"asset.scope.style"},{value:"knowledge",key:"asset.scope.knowledge"},{value:"custom",key:"asset.scope.custom"}],pw=(0,gn.memo)(({isOpen:e,onClose:t,items:a})=>{let o=le(),[n,r]=(0,gn.useState)("character"),[i,s]=(0,gn.useState)(""),[l,u]=(0,gn.useState)(o("asset.modal.defaultTags")),[d,f]=(0,gn.useState)(!1),c=(0,gn.useMemo)(()=>nN(a.map(g=>({id:g.nodeId||g.id,data:{title:g.nodeTitle,label:g.nodeTitle,realPath:g.realPath,previewUrl:g.previewUrl,content:g.content,materialType:g.type}}))),[a]);if((0,gn.useEffect)(()=>{if(!e)return;let g=(a[0]?.nodeTitle||o("asset.modal.defaultName")).slice(0,40);s(g),r("character"),u(o("asset.modal.defaultTags")),f(!1)},[e,a,o]),!e)return null;let p=async g=>{if(g.preventDefault(),c.length===0){Y.error(o("asset.modal.noFiles"));return}let w=i.trim().slice(0,40);if(!w){Y.warning(o("asset.modal.nameRequired"));return}f(!0);try{let y=l.split(/[,，]/).map(v=>v.trim()).filter(Boolean),h=await fetch("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w,type:n,tags:y,files:c.map(v=>({real_path:v.real_path,original_name:v.original_name})),source:"workflow-canvas"})}),x=await h.json().catch(()=>({}));if(!h.ok)throw new Error(x.message||x.error||`HTTP ${h.status}`);let b=(x.asset||{}).name||w;Y.success(o("asset.modal.saved").replace("{name}",b)),t()}catch(y){Y.error(y instanceof Error?y.message:o("asset.modal.failed"))}finally{f(!1)}};return(0,et.jsx)(rn,{open:e,onCancel:t,title:o("asset.modal.title"),width:480,children:(0,et.jsxs)("form",{onSubmit:p,className:"wf-group-modal",children:[(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.name")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:i,onChange:g=>s(g.target.value),placeholder:a[0]?.nodeTitle||o("asset.modal.defaultName"),maxLength:40})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.category")}),(0,et.jsx)("div",{className:"wf-group-modal__scopes",children:a7.map(g=>(0,et.jsxs)("button",{type:"button",className:`wf-group-modal__scope ${n===g.value?"is-active":""}`,onClick:()=>r(g.value),children:[(0,et.jsx)(vo,{size:14}),(0,et.jsx)("span",{children:o(g.key)})]},g.value))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.files").replace("{count}",String(c.length))}),(0,et.jsx)("div",{className:"wf-group-modal__list",children:c.length===0?(0,et.jsx)("div",{className:"wf-group-modal__empty",children:o("asset.modal.empty")}):c.map(g=>(0,et.jsx)("div",{className:"wf-group-modal__row",children:(0,et.jsx)("span",{children:g.original_name||g.nodeId})},g.real_path))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.tags")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:l,onChange:g=>u(g.target.value),placeholder:o("asset.modal.tagsPlaceholder")})]}),(0,et.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,et.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:o("asset.modal.cancel")}),(0,et.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:d||c.length===0,children:[(0,et.jsx)(xs,{size:14}),(0,et.jsx)("span",{children:o(d?"asset.modal.saving":"asset.modal.submit")})]})]})]})})});pw.displayName="BatchCreateAssetModal";var _r=I(J(),1);var $t=I(X(),1),mw=(0,_r.memo)(({isOpen:e,onClose:t,defaultTitle:a,nodeCount:o=0,onConfirm:n})=>{let r=le(),i=r("template.modal.defaultName"),[s,l]=(0,_r.useState)(a||i),[u,d]=(0,_r.useState)(""),[f,c]=(0,_r.useState)(r("template.modal.defaultTags")),[p,g]=(0,_r.useState)(!1);if((0,_r.useEffect)(()=>{e&&(l((a||i).trim()||i),d(""),c(r("template.modal.defaultTags")),g(!1))},[e,a,i,r]),!e)return null;let w=async y=>{if(y.preventDefault(),!s.trim()){Y.warning(r("template.modal.nameRequired"));return}g(!0);try{let h=f.split(/[,，]/).map(x=>x.trim()).filter(Boolean);await n({name:s.trim(),description:u.trim(),tags:h}),Y.success(r("template.modal.saved").replace("{name}",s.trim())),t()}catch(h){Y.error(h instanceof Error?h.message:r("template.modal.failed"))}finally{g(!1)}};return(0,$t.jsx)(rn,{open:e,onCancel:t,title:r("template.modal.title"),width:460,children:(0,$t.jsxs)("form",{onSubmit:w,className:"wf-group-modal",children:[(0,$t.jsxs)("div",{children:[(0,$t.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.name")}),(0,$t.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:s,onChange:y=>l(y.target.value),placeholder:r("template.modal.namePlaceholder"),autoFocus:!0})]}),(0,$t.jsxs)("div",{children:[(0,$t.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.description")}),(0,$t.jsx)("textarea",{className:"nodrag nopan wf-group-modal__input",value:u,onChange:y=>d(y.target.value),placeholder:r("template.modal.descriptionPlaceholder"),rows:3})]}),(0,$t.jsxs)("div",{children:[(0,$t.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.tags")}),(0,$t.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:f,onChange:y=>c(y.target.value),placeholder:r("template.modal.tagsPlaceholder")})]}),(0,$t.jsx)("div",{className:"wf-group-modal__hint",children:r("template.modal.hint").replace("{count}",String(o))}),(0,$t.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,$t.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:r("template.modal.cancel")}),(0,$t.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:p||!s.trim(),children:[(0,$t.jsx)(gr,{size:14}),(0,$t.jsx)("span",{children:r(p?"template.modal.saving":"template.modal.submit")})]})]})]})})});mw.displayName="CreateWorkflowModal";function rN(){return Yt(Nt.templates)}function iN(e){return Yt(Nt.templates,{method:"POST",body:e})}function sN(e){return Yt(Nt.template(encodeURIComponent(e)))}function Jc(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function lN(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function gw(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)gw(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];sd(o)?delete t[a]:o&&typeof o=="object"&&gw(o)}}function o7(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=dn(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=lN(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(sd(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=lN(o);return n?(sd(n.url)&&(typeof n.path=="string"&&n.path?n.url=dn(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}gw(e)}function ef(e){return e.map(t=>{let a=t,o=Jc(a.data);delete o.__catalog,o7(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),a.extent==="parent"&&(n.extent="parent"),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=Jc(a.style)),n})}function n7(e){let t=e,a=Jc(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function tf(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=Jc(a.data)),a.style&&typeof a.style=="object"&&(o.style=Jc(a.style)),o})}function hn(e,t){return JSON.stringify({nodes:ef(e).map(n7),edges:tf(t)})}function hw(e){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function dN(e,t){let a=Array.isArray(e.nodes)?e.nodes:[],o=Array.isArray(e.edges)?e.edges:[],n=td(a.map(l=>({position:l.position||{x:0,y:0},width:l.width,height:l.height})),0),r=new Map;for(let l of a)typeof l.id=="string"&&r.set(l.id,hw(l.id));let i=a.map(l=>{let{parentId:u,extent:d,selected:f,...c}=l;return{...c,id:r.get(l.id)||hw(String(l.id||"node")),selected:!1,position:{x:t.x+((l.position?.x??0)-n.x),y:t.y+((l.position?.y??0)-n.y)}}}),s=o.map(l=>{let u=r.get(l.source),d=r.get(l.target);return!u||!d?null:{...l,id:hw(String(l.id||`${u}_${d}`)),source:u,target:d}}).filter(Boolean);return{nodes:i,edges:s}}var xN=I(J(),1),bN=I(ea(),1);var wg=I(J(),1),uN=I(ea(),1);var je=I(X(),1),xw=e=>e==="text"?(0,je.jsx)(wr,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,je.jsx)(xc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,je.jsx)(Lc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,je.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),cN=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Na(),[i,s]=(0,wg.useState)(null);(0,wg.useEffect)(()=>{if(o===null){s(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let l=o!==null?e.columns[o]:null;return(0,je.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,je.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,je.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,je.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,je.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,je.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,je.jsx)(gc,{size:14})}),xw(u.type),(0,je.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,je.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,je.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,je.jsx)(uc,{size:15}):(0,je.jsx)(dc,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,je.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,x=Math.max(8,c.right-p);s({top:h,left:x}),n(d)}},children:(0,je.jsx)(gi,{size:15})})]})]},u.id))}),(0,je.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,je.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,je.jsx)(ft,{size:14}),(0,je.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&l&&i&&typeof document<"u"&&(0,uN.createPortal)((0,je.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,je.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,je.jsx)(En,{size:13}),(0,je.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,je.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=l;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,je.jsx)(Lo,{size:13}),(0,je.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var ya=I(X(),1),r7=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],fN=()=>{let{document:e,setFilterConditions:t}=Na(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((s,l)=>({value:l,label:s.title||`\u5217 ${l+1}`})),n=(s,l)=>{let u=a.map((d,f)=>f===s?{...d,...l}:d);t(u)},r=()=>{let s=[...a,{columnIndex:0,op:"equals",value:""}];t(s)},i=s=>{let l=a.filter((u,d)=>d!==s);t(l.length===0?[{columnIndex:0,op:"equals",value:""}]:l)};return(0,ya.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:s=>s.stopPropagation(),children:[(0,ya.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,ya.jsxs)("div",{className:"wf-filter-body",children:[a.map((s,l)=>(0,ya.jsxs)("div",{className:"wf-filter-row",children:[(0,ya.jsx)("div",{style:{width:130,flexShrink:0},children:(0,ya.jsx)(ao,{value:s.columnIndex,options:o,onChange:u=>n(l,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ya.jsx)("div",{style:{width:110,flexShrink:0},children:(0,ya.jsx)(ao,{value:s.op,options:r7,onChange:u=>n(l,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ya.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:s.value??"",disabled:s.op==="empty"||s.op==="notEmpty",onChange:u=>n(l,{value:u.target.value})}),(0,ya.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(l),children:(0,ya.jsx)(ha,{size:15})})]},l)),(0,ya.jsx)("div",{style:{paddingTop:4},children:(0,ya.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,ya.jsx)(ft,{size:14}),(0,ya.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Ir=I(X(),1),i7=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],pN=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Na(),o=e.rowHeight||"low";return(0,Ir.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Ir.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Ir.jsx)("div",{style:{padding:"6px"},children:i7.map(n=>{let r=o===n.id;return(0,Ir.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Ir.jsx)("span",{children:n.label}),r&&(0,Ir.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Ir.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var qe=I(X(),1),mN=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:s,closeStage:l}=Na(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,qe.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,qe.jsx)("div",{className:"wf-stage-topbar__left",children:(0,qe.jsxs)("div",{className:"wf-stage-title-group",children:[(0,qe.jsx)(ko,{size:16,className:"wf-stage-title-icon"}),(0,qe.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,qe.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,qe.jsx)(Ec,{size:15}),(0,qe.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,qe.jsx)(cN,{})]}),(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,qe.jsx)(hi,{size:15}),(0,qe.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,qe.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,qe.jsx)(fN,{})]}),(0,qe.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,qe.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,qe.jsx)(wi,{size:15}),(0,qe.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,qe.jsx)(pN,{})]}),(0,qe.jsx)("div",{className:"wf-stage-divider"}),(0,qe.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,qe.jsx)(Ac,{size:16})}),(0,qe.jsx)("button",{type:"button",disabled:!s(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,qe.jsx)(Nc,{size:16})}),(0,qe.jsx)("div",{className:"wf-stage-divider"}),(0,qe.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),l()},children:(0,qe.jsx)(ha,{size:16})})]})]})};var De=I(X(),1),gN=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Na(),n=e.columns.filter(s=>s.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,De.jsx)("div",{className:"wf-grid-container",children:(0,De.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,De.jsxs)("table",{className:"wf-grid-table",children:[(0,De.jsxs)("colgroup",{children:[(0,De.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(s=>(0,De.jsx)("col",{style:{width:s.width||220,minWidth:120}},s.id)),(0,De.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,De.jsx)("col",{style:{width:"auto"}})]}),(0,De.jsx)("thead",{children:(0,De.jsxs)("tr",{children:[(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,De.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(s=>(0,De.jsx)("th",{className:"wf-grid-th",children:(0,De.jsxs)("div",{className:"wf-grid-th-content",children:[(0,De.jsx)("span",{className:"wf-grid-th-icon",children:xw(s.type)}),(0,De.jsx)("span",{className:"wf-grid-th-title",children:s.title})]})},s.id)),(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,De.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,De.jsx)(ft,{size:15})})}),(0,De.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,De.jsx)("tbody",{children:e.rows.map((s,l)=>(0,De.jsxs)("tr",{className:i,children:[(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,De.jsx)("span",{children:l+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=s.cells[d];return(0,De.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,De.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((w,y)=>(0,De.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},y)),g.length===0&&(0,De.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,De.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(l,d,g.target.value)})})()},u.id)}),(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,De.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},l))})]}),(0,De.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,De.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,De.jsx)(ft,{size:14}),(0,De.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Ps=I(J(),1);var so=I(X(),1),s7=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],hN=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Na(),[n,r]=(0,Ps.useState)(e.initialTitle),[i,s]=(0,Ps.useState)(e.initialType),l=(0,Ps.useRef)(null);(0,Ps.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),s(e.initialType),setTimeout(()=>l.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,so.jsx)(rn,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,so.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,so.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,so.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,so.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,so.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,so.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,so.jsx)("input",{ref:l,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,so.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,so.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,so.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,so.jsx)(ao,{value:i,options:s7,onChange:d=>s(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var xd=I(X(),1),wN=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Na();return(0,xN.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,bN.createPortal)((0,xd.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,xd.jsx)(mN,{}),(0,xd.jsx)(gN,{}),(0,xd.jsx)(hN,{})]}),document.body)};var pt=I(X(),1),bw=class extends Ce.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,pt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,pt.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,pt.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,pt.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};Kc(BM);Kc(qM);Kc(tN);Kc(aN);var l7=uM(),d7={default:N0,animated:N0},yN={maxZoom:1},u7={x:0,y:0,zoom:1},c7=[1,2],f7=96,p7=({catalog:e,workspaceId:t,onExecuteNodeIds:a,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:s})=>{let l=le(),{screenToFlowPosition:u,fitView:d,zoomTo:f,setCenter:c}=Ca(),p=Ca(),{nodes:g,edges:w,onNodesChange:y,onEdgesChange:h}=f5(),x=ae(Z=>Z.applyCanvasInputMutation),m=ae(Z=>Z.setNodes),b=ae(Z=>Z.setSelectedElement),v=ae(Z=>Z.groupNodes),C=ae(Z=>Z.ungroup),S=ae(Z=>Z.pushHistory),k=ae(Z=>Z.undo),_=ae(Z=>Z.redo),T=p5(),R=m5(),[H,U]=(0,Ce.useState)(null),[L,N]=(0,Ce.useState)(!1),[E,M]=(0,Ce.useState)(!1),[A,O]=(0,Ce.useState)(!1),[D,B]=(0,Ce.useState)(!1),[z,j]=(0,Ce.useState)(void 0),[F,K]=(0,Ce.useState)("select"),[$,ee]=(0,Ce.useState)(!1),[q,Q]=(0,Ce.useState)([]),[ne,de]=(0,Ce.useState)(!1),[re,ce]=(0,Ce.useState)(null),[we,_e]=(0,Ce.useState)([]),Oe=(0,Ce.useRef)(0),vt=(0,Ce.useMemo)(()=>g.some(Z=>Z.selected),[g]),Ct=(0,Ce.useMemo)(()=>g.filter(Z=>Z.selected&&Z.type!=="group"),[g]),lo=(0,Ce.useMemo)(()=>{if(Ct.length<2)return{x:0,y:0};let Z=td(Ct,0),ue=Z.x+Z.width/2,ke=Z.y,Le=typeof p?.getViewport=="function"?p.getViewport():{x:0,y:0,zoom:1},mt=typeof Le?.zoom=="number"&&Number.isFinite(Le.zoom)&&Le.zoom>0?Le.zoom:1,Xe=typeof Le?.x=="number"&&Number.isFinite(Le.x)?Le.x:0,He=typeof Le?.y=="number"&&Number.isFinite(Le.y)?Le.y:0;return{x:Math.round(Xe+ue*mt),y:Math.round(He+ke*mt)}},[Ct,p]),oe=(0,Ce.useCallback)(async()=>{let Z=await rN();Z.ok&&_e((Z.body.templates||[]).map(ue=>({id:ue.id,name:ue.name,nodeCount:ue.nodeCount})))},[]);(0,Ce.useEffect)(()=>{oe()},[oe]);let Ie=(0,Ce.useCallback)(async Z=>{let ue=await sN(Z);if(!ue.ok||!ue.body.template){Y.error(ue.body.message||ue.body.error||l("template.toast.loadFailed"));return}let ke=u({x:window.innerWidth/2,y:window.innerHeight/2}),Le=dN(ue.body.template,ke);x({addNodes:Le.nodes,addEdges:Le.edges}),Y.success(l("template.toast.inserted").replace("{name}",ue.body.template.name))},[x,u,l]),it=(0,Ce.useCallback)(()=>{if(Ct.length<2)return;v(Ct.map(ue=>ue.id),l("group.defaultTitle"))&&Y.success(l("group.toast.grouped"))},[Ct,v,l]),St=(0,Ce.useCallback)((Z,ue=Ct)=>{if(ue.length<2)return;let ke=c5(ue,Z,{gap:40}),Le=new Map(ke.map(He=>[He.id,He])),mt=ue[0]?.parentId,Xe=!!(mt&&ue.every(He=>He.parentId===mt));m(He=>{let Rt=He.map(tt=>Le.get(tt.id)||tt);if(Xe&&mt){let tt=Rt.filter(gt=>gt.parentId===mt&&gt.type!=="group");if(tt.length>0){let gt=td(tt,32);return Rt.map(Jt=>Jt.id===mt&&Jt.type==="group"?{...Jt,width:gt.width,height:gt.height,style:{...Jt.style||{},width:gt.width,height:gt.height},data:{...Jt.data||{},minWidth:gt.minWidth,minHeight:gt.minHeight}}:Jt)}}return Rt}),Y.success(l("group.toast.layout"))},[Ct,m,l]);(0,Ce.useEffect)(()=>{let Z=mt=>{let Xe=mt,He=Xe.detail?.groupId?ad(g,Xe.detail.groupId):[],Rt=He.length>0?He:Xe.detail?.nodeIds||[];Rt.length>0&&a&&(a(Rt),Y.success(l("group.toast.execute")))},ue=mt=>{let Xe=mt,{groupId:He,layoutType:Rt}=Xe.detail,tt=g.filter(gt=>gt.parentId===He);tt.length>=2&&St(Rt,tt)},ke=mt=>{let He=mt.detail?.nodeIds||[],tt=g.filter(gt=>He.includes(gt.id)).map(gt=>{let Jt=gt.data||{};return{id:gt.id,nodeId:gt.id,nodeTitle:Jt.label||Jt.title||Jt.name||gt.id,type:Jt.materialType||gt.type||"image",previewUrl:Jt.previewUrl,content:Jt.content,realPath:Jt.realPath}});Q(tt),ee(!0)},Le=mt=>{let Xe=mt,{groupId:He,groupTitle:Rt}=Xe.detail,tt=g.filter(gt=>gt.parentId===He);ce({id:He,title:Rt||l("template.modal.defaultName"),nodeCount:tt.length}),de(!0)};return window.addEventListener("omnimux:workflow:execute-group",Z),window.addEventListener("omnimux:workflow:layout-group",ue),window.addEventListener("omnimux:workflow:batch-create-asset",ke),window.addEventListener("omnimux:workflow:create-subworkflow",Le),()=>{window.removeEventListener("omnimux:workflow:execute-group",Z),window.removeEventListener("omnimux:workflow:layout-group",ue),window.removeEventListener("omnimux:workflow:batch-create-asset",ke),window.removeEventListener("omnimux:workflow:create-subworkflow",Le)}},[g,a,St,l]);let Fe=YI(m,b),Qt=l("menu.generateFromNode"),{menuState:Et,onConnectStart:Ga,onConnectEnd:qn,onMenuSelect:vd,onMenuClose:Cd}=GI({onReject:U});(0,Ce.useEffect)(()=>{S()},[g,w,S]);let Sd=(0,Ce.useMemo)(()=>e?g.map(Z=>({...Z,data:{...Z.data,__catalog:e}})):g,[g,e]),vg=(0,Ce.useCallback)(Z=>{let ue=x({addEdges:[Z]});if(ue.status==="rejected"){let ke=l(rg(ue.reasonCode));U(ke),Y.warning(ke)}else U(null)},[x,l]),Cg=(0,Ce.useCallback)(Z=>{let ue=ae.getState();return HI(Z,ue.nodes,ue.edges)},[]),of=(0,Ce.useCallback)(async(Z,ue)=>{let ke=Oe.current,Le=ue??{x:120+ke%3*420,y:120+Math.floor(ke/3)*360};if(Z==="import_asset"){let Xe=await Pn();if(!Xe.ok){Xe.body.error==="picker-unsupported"?Y.warning(l("picker.needPath")):Y.error(l("picker.pickFailed"));return}let He=Xe.body.paths??[];if(He.length===0)return;let Rt=Si(He);if(Rt.length===0){Y.warning(l("picker.unsupported"));return}let tt=Z0({files:Rt,origin:Le});if(!tt.hasWork||!tt.addNodes?.length)return;if(x({addNodes:tt.addNodes}).status!=="allowed"){Y.error(l("picker.commitFailed"));return}let Jt=new Set(tt.addNodes.map(Bs=>Bs.id));m(Bs=>Bs.map(Mr=>Jt.has(Mr.id)?Mr:Mr.selected?{...Mr,selected:!1}:Mr)),Oe.current+=tt.addNodes.length,Y.success(l("picker.importOk"));return}if(Z==="table"||Z==="video_composition"){let Xe=cM(Z,Le,`node_${Z}_${Date.now()}`);if(!Xe)return;Oe.current+=1,m(He=>V0(He,[{...Xe,selected:!0}]));return}let mt=dd(Z,Le);mt.nodes.length!==0&&(Oe.current+=1,m(Xe=>V0(Xe,mt.nodes)))},[m,x,l]),Sg=(0,Ce.useCallback)(Z=>{let ue=Z.nodes.map(Le=>Le.id),ke=Z.edges.map(Le=>Le.id);ue.length===0&&ke.length===0||x({removeNodeIds:ue,removeEdgeIds:ke})},[x]),{menu:Os,handleNodeContextMenu:kg,handlePaneContextMenu:Lg,handleSelectionContextMenu:_g,closeMenu:kd,handleMenuAction:Ig,handleAddNodeFromMenu:Mg}=KI({screenToFlowPosition:u,setNodes:m,copySelectedNodes:Fe.copySelectedNodes,pasteNodes:Fe.pasteNodes,duplicateSelectedNodes:Fe.duplicateSelectedNodes,deleteSelectedNodes:Fe.deleteSelectedNodes,selectAllNodes:Fe.selectAllNodes,clearSelection:Fe.clearSelection,undo:k,redo:_,onExecuteNodeIds:a,onAddNode:of}),Hs=(0,Ce.useCallback)((Z,ue)=>{let ke=$I(Z);if(!ke.ok)return Y.warning(l(ke.reason==="unsupported"?"picker.unsupported":"picker.needPath")),!1;let Le=Z0({files:[ke.draft],origin:ue});if(!Le.hasWork||!Le.addNodes?.length)return Y.warning(l("picker.unsupported")),!1;if(x({addNodes:Le.addNodes}).status!=="allowed")return Y.error(l("picker.commitFailed")),!1;let Xe=new Set(Le.addNodes.map(Rt=>Rt.id));m(Rt=>Rt.map(tt=>Xe.has(tt.id)?tt:tt.selected?{...tt,selected:!1}:tt)),Oe.current+=Le.addNodes.length;let He=Le.addNodes[0];return He&&b("node",He.id),Y.success(l("picker.importOk")),!0},[x,m,b,l]),Ng=(0,Ce.useCallback)(Z=>{let ue=Oe.current,ke={x:200+ue%4*50,y:200+ue%4*40};Hs(Z,ke)},[Hs]);OI({onCopy:Fe.copySelectedNodes,onPaste:()=>Fe.pasteNodes(),onSelectAll:Fe.selectAllNodes,onDeleteSelected:Fe.deleteSelectedNodes,onClearSelection:Fe.clearSelection,onDuplicate:Fe.duplicateSelectedNodes,onGroupSelected:it,onUngroupSelected:()=>{let Z=g.find(ue=>ue.selected&&ue.type==="group");Z&&(C(Z.id),Y.success(l("group.toast.ungrouped")))},onUndo:k,onRedo:_,hasSelection:vt,onToggleAssets:()=>M(Z=>!Z),onToggleShortcuts:()=>O(Z=>!Z),onToggleMinimap:()=>N(Z=>!Z),onToggleAddMenu:()=>B(Z=>!Z),onSetPointerMode:Z=>K(Z),onFitView:()=>d(yN),onResetZoom:()=>f(1),onCategoryKey:Z=>{M(!0),j(Z)}});let Eg=(0,Ce.useCallback)((Z,ue)=>{b("node",ue.id)},[b]),Tg=(0,Ce.useCallback)(()=>{b("none",null),kd()},[b,kd]),Ag=(0,Ce.useCallback)(()=>{m(Z=>Z.map((ue,ke)=>({...ue,position:{x:120+ke%3*440,y:120+Math.floor(ke/3)*360}})))},[m]),Dg=(0,Ce.useCallback)(Z=>{Z.preventDefault(),Z.dataTransfer.dropEffect="copy"},[]),Rg=(0,Ce.useCallback)(Z=>{Z.preventDefault();try{let ue=Z.dataTransfer.getData("application/json");if(!ue)return;let ke=JSON.parse(ue);if(ke?.type==="omnimux-canvas-node"&&typeof ke.nodeId=="string"){W0({nodes:g,nodeId:ke.nodeId,setCenter:c,setNodes:m});return}if(ke?.type==="omnimux-asset"&&ke.asset){let Le=u({x:Z.clientX,y:Z.clientY});Hs(ke.asset,Le)}}catch(ue){console.error("Failed to parse dropped asset",ue)}},[u,Hs,g,c,m]);return(0,pt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,pt.jsx)(w_,{nodes:Sd,edges:w,onNodesChange:y,onEdgesChange:h,onConnect:vg,isValidConnection:Cg,onConnectStart:Ga,onConnectEnd:qn,onNodeClick:Eg,onPaneClick:Tg,onNodeContextMenu:kg,onPaneContextMenu:Lg,onDragOver:Dg,onDrop:Rg,onSelectionContextMenu:_g,onDelete:Sg,nodeTypes:l7,edgeTypes:d7,fitView:!0,fitViewOptions:yN,defaultViewport:u7,minZoom:F0.minZoom,maxZoom:F0.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:F==="pan"?!0:c7,panOnScroll:!0,panOnScrollMode:en.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:F==="select",selectionMode:pr.Partial,defaultEdgeOptions:Hm,connectOnClick:!1,connectionRadius:f7,onlyRenderVisibleElements:!0,children:(0,pt.jsx)(S_,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:_n.Dots})}),(0,pt.jsx)(T5,{isMinimapOpen:L,onToggleMinimap:()=>N(Z=>!Z),onAlignGrid:Ag,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:s}),L&&(0,pt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,pt.jsx)(__,{pannable:!0,zoomable:!0})}),(0,pt.jsx)(E5,{onAddNode:of,pointerMode:F,onPointerModeChange:K,onOpenAssets:()=>M(Z=>!Z),onOpenHelp:()=>O(Z=>!Z),isAssetsOpen:E,isAddMenuOpen:D,onToggleAddMenu:()=>B(Z=>!Z),templates:we,onInsertTemplate:Z=>{Ie(Z)}}),E&&(0,pt.jsx)(bw,{onClose:()=>M(!1),children:(0,pt.jsx)(MI,{isOpen:E,onClose:()=>M(!1),onInsertAsset:Ng,workspaceId:t,nodes:Sd,onFocusNode:Z=>{W0({nodes:Sd,nodeId:Z,setCenter:c,setNodes:m})}})}),(0,pt.jsx)(NI,{isOpen:A,onClose:()=>O(!1)}),(0,pt.jsx)(fw,{visible:Ct.length>=2,selectedCount:Ct.length,position:lo,onGroup:it,onCreateAsset:()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:batch-create-asset",{detail:{nodeIds:Ct.map(Z=>Z.id)}}))},onLayout:Z=>St(Z)}),(0,pt.jsx)(RI,{x:Os.x,y:Os.y,visible:Os.visible,context:Os.context,onClose:kd,onAction:Ig,onAddNode:Mg,canUndo:T,canRedo:R,hasClipboard:Fe.hasClipboard,hasSelection:vt}),(0,pt.jsx)(ng,{visible:Et.visible,x:Et.x,y:Et.y,title:Qt,options:Et.options,onSelect:vd,onClose:Cd}),(0,pt.jsx)(wN,{}),(0,pt.jsx)(pw,{isOpen:$,onClose:()=>ee(!1),items:q}),(0,pt.jsx)(mw,{isOpen:ne,onClose:()=>{de(!1),ce(null)},groupId:re?.id,defaultTitle:re?.title,nodeCount:re?.nodeCount,onConfirm:async Z=>{let ue=re?.id;if(!ue)throw new Error(l("template.missingGroup"));let ke=new Set(ad(g,ue)),Le=g.filter(He=>ke.has(He.id)),mt=w.filter(He=>ke.has(He.source)&&ke.has(He.target)),Xe=await iN({name:Z.name,description:Z.description,tags:Z.tags,nodes:ef(Le),edges:tf(mt)});if(!Xe.ok||!Xe.body.template)throw new Error(Xe.body.message||Xe.body.error||l("template.modal.failed"));await oe()}}),H&&(0,pt.jsx)("div",{className:"wf-rejected-toast",children:H})]})},m7=e=>(0,pt.jsx)(y0,{children:(0,pt.jsx)(p7,{...e})}),vN=m7;var CN=I(J(),1);var Ea=I(X(),1),yg=class extends CN.Component{constructor(a){super(a);zg(this,"handleClearSelectionAndRetry",()=>{try{let a=ae.getState();a.setNodes(o=>o.map(n=>n.selected?{...n,selected:!1}:n)),a.setSelectedElement("none",null)}catch{}this.setState({hasError:!1,error:null,errorInfo:null})});zg(this,"handleReload",()=>{this.props.onReset?this.props.onReset():typeof window<"u"&&window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a,o){console.error("[OmniMux CanvasErrorBoundary] \u6355\u83B7\u5230\u753B\u5E03\u672A\u5904\u7406\u6E32\u67D3\u5F02\u5E38:",a,o),this.setState({errorInfo:o})}render(){if(this.state.hasError){let a=this.state.error?.message||"\u753B\u5E03\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u5F02\u5E38";return(0,Ea.jsx)("div",{className:"wf-canvas-error-boundary nodrag nopan",children:(0,Ea.jsxs)("div",{className:"wf-canvas-error-boundary__card",children:[(0,Ea.jsx)("div",{className:"wf-canvas-error-boundary__icon",children:(0,Ea.jsx)(An,{size:24})}),(0,Ea.jsxs)("div",{className:"wf-canvas-error-boundary__copy",children:[(0,Ea.jsx)("div",{className:"wf-canvas-error-boundary__title",children:"\u753B\u5E03\u5C40\u90E8\u6E32\u67D3\u9047\u5230\u95EE\u9898"}),(0,Ea.jsx)("div",{className:"wf-canvas-error-boundary__message",children:a})]}),(0,Ea.jsxs)("div",{className:"wf-canvas-error-boundary__actions",children:[(0,Ea.jsxs)("button",{type:"button",className:"wf-canvas-error-boundary__btn wf-canvas-error-boundary__btn--ghost",onClick:this.handleClearSelectionAndRetry,children:[(0,Ea.jsx)(kc,{size:14}),(0,Ea.jsx)("span",{children:"\u6E05\u7A7A\u9009\u62E9\u5E76\u91CD\u8BD5"})]}),(0,Ea.jsxs)("button",{type:"button",className:"wf-canvas-error-boundary__btn wf-canvas-error-boundary__btn--primary",onClick:this.handleReload,children:[(0,Ea.jsx)(bs,{size:14}),(0,Ea.jsx)("span",{children:"\u91CD\u65B0\u52A0\u8F7D"})]})]})]})})}return this.props.children}};var Vt=I(J(),1);var SN=new Set(["pending","running","paused"]),g7=new Set(["completed","error","cancelled"]);function bd(e,t){let a=ae.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function kN(e,t){let a=(0,Vt.useRef)(null),o=(0,Vt.useRef)(e);o.current=e;let n=(0,Vt.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,Vt.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,Vt.useCallback)((y,h)=>{ot.getState().setExecution({status:y,error:h,progress:{...ot.getState().progress,percentage:y==="completed"?100:ot.getState().progress.percentage}})},[]),s=(0,Vt.useCallback)((y,h)=>{let x;try{x=JSON.parse(h)}catch{return}let m=ot.getState();switch(y){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:x.totalNodes??0,completed:0,running:0,pending:x.totalNodes??0,percentage:0}});break}case"node_start":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),bd(x.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:x.progress??m.progress.percentage}});let b=x.output??{},v={executionStatus:"completed",executionError:void 0};if(b.text&&(v.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let C=b.mediaAssets[0];v.mediaAssets=b.mediaAssets,C.type==="image"&&(v.mediaUrl=C.url),v.taskId=`exec-${x.executionId??""}`}bd(x.nodeId,v);break}case"node_error":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),bd(x.nodeId,{executionStatus:"error",executionError:x.error??ks("error.nodeExecutionFailed")});break}case"node_skipped":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"skipped"),bd(x.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",x.error??ks("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),l=(0,Vt.useCallback)(y=>{r();let h=o.current;if(!h)return;let x=new EventSource(Nt.executionEvents(encodeURIComponent(h),encodeURIComponent(y)));a.current=x;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)x.addEventListener(b,v=>{s(b,v.data)});x.onerror=()=>{let b=ot.getState().status;g7.has(b)&&r()}},[r,s]),u=(0,Vt.useCallback)(y=>{let h=ot.getState();h.setExecution({executionId:y.id,status:y.status,error:y.error,progress:{total:y.progress.total,completed:y.progress.completed,running:y.progress.running,pending:y.progress.pending,percentage:y.progress.percentage}});for(let[x,m]of Object.entries(y.nodeStates??{})){h.setNodeStatus(x,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let v=y.nodeOutputs?.[x];v&&(v.text&&(b.generatedContent=v.text),v.mediaAssets&&v.mediaAssets.length>0&&(b.mediaAssets=v.mediaAssets,v.mediaAssets[0]&&v.mediaAssets[0].type==="image"&&(b.mediaUrl=v.mediaAssets[0].url))),bd(x,b)}},[]),d=(0,Vt.useCallback)(async(y={})=>{let h=o.current;if(!h)return;if(r(),ot.getState().resetExecution(),ot.getState().setExecution({status:"pending"}),y.mode==="single"&&y.nodeIds&&y.nodeIds[0]&&(ot.getState().setNodeStatus(y.nodeIds[0],"pending"),bd(y.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let x=await z5(h,{mode:y.mode??"full",nodeIds:y.nodeIds});if(!x.ok||!x.body.execution){ot.getState().setExecution({status:"error",error:x.body.message??ks("error.createExecutionFailed")});return}ot.getState().setExecution({executionId:x.body.execution.id}),l(x.body.execution.id)},[r,l]),f=(0,Vt.useCallback)(async y=>{let h=o.current,{executionId:x}=ot.getState();if(!h||!x)return;let m=await G5(h,x,y);!m.ok&&m.body.message&&ot.getState().setExecution({error:m.body.message})},[]),c=(0,Vt.useCallback)(()=>f("pause"),[f]),p=(0,Vt.useCallback)(()=>f("resume"),[f]),g=(0,Vt.useCallback)(()=>f("cancel"),[f]),w=(0,Vt.useCallback)(()=>{r(),ot.getState().resetExecution()},[r]);return(0,Vt.useEffect)(()=>{if(!e)return;let y=!1;return(async()=>{try{let h=await O5(e);if(y||!h.ok)return;let x=(h.body.executions??[]).find(b=>SN.has(b.status));if(!x)return;let m=await H5(e,x.id);if(y||!m.ok||!m.body.execution)return;u(m.body.execution),SN.has(m.body.execution.status)&&l(x.id)}catch{}})(),()=>{y=!0}},[e,u,l]),(0,Vt.useEffect)(()=>(ot.getState().setStartNodeExecution(h=>{d({mode:"single",nodeIds:[h]})}),()=>{ot.getState().setStartNodeExecution(null)}),[d]),(0,Vt.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:w}}var zs=I(J(),1);function LN(e={}){let t=e.workspaceId,[a,o]=(0,zs.useState)({phase:"loading"}),[n,r]=(0,zs.useState)(()=>Qc()),i=ae(d=>d.hydrateGraph),s=ae(d=>d.resetStore),l=ae(d=>d.nodes.length),u=(0,zs.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,zs.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=ae.getState(),p=vI(c.nodes);if(p.length===0)return;let g=await V5(p);if(d||!g.ok||!Array.isArray(g.body.items))return;let w=yI(c.nodes,g.body.items);!w.some((h,x)=>h!==c.nodes[x])||d||c.setNodes(w)}return(async()=>{try{if(A5().then(g=>{!d&&g.ok&&(r(g.body),EM(g.body))}),!t)return;let c=await qc(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await D5("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??ks("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),s()}},[t,i,s]),{boot:a,setBoot:o,catalog:n,nodeCount:l}}var rt=I(J(),1);function _N(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}var h7=1e3,x7=2500,b7=3e3;function wd(){let{nodes:e,edges:t}=ae.getState(),a=L0(e,t);return{nodes:a.nodes,edges:a.edges}}function IN(e,t={}){let a=t.enabled!==!1,[o,n]=(0,rt.useState)("idle"),[r,i]=(0,rt.useState)(!1),s=(0,rt.useRef)(e),l=(0,rt.useRef)(0),u=(0,rt.useRef)(""),d=(0,rt.useRef)(0),f=(0,rt.useRef)(""),c=(0,rt.useRef)(null),p=(0,rt.useRef)(null),g=(0,rt.useRef)(!1),w=(0,rt.useRef)(a);w.current=a;let y=(0,rt.useRef)(t.onSaved);y.current=t.onSaved,(0,rt.useEffect)(()=>{s.current=e,e&&(l.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=hn(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,rt.useCallback)(async k=>{let _=s.current;if(!_){n("error");return}let T=await qc(_.id);if(!T.ok||!T.body.workspace){n("error");return}let R=T.body.workspace,H=_N({localSignature:hn(k.localNodes,k.localEdges),lastSavedSignature:u.current,remoteSignature:hn(R.nodes,R.edges)});if(l.current=R.version,H==="conflict"){n("conflict");return}u.current=hn(R.nodes,R.edges),d.current=R.nodes.length,H==="reload"&&ae.getState().hydrateGraph(R.nodes,R.edges),i(!1),n("idle"),y.current?.(R)},[]),m=(0,rt.useCallback)(async(k,_,T=!1)=>{let R=s.current;if(!R||!T&&!w.current||g.current)return;let H=jm({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:_,lastSavedSignature:u.current,nextSignature:hn(k.nodes,k.edges)});if(!H.persist||!H.snapshot)return;let{nodes:U,edges:L}=H.snapshot,N=R.name;g.current=!0,n("saving");try{let E=await P5(R.id,{name:N,nodes:ef(U),edges:tf(L),expectedVersion:l.current});if(E.status===409){await x({localNodes:U,localEdges:L});return}E.ok&&E.body.workspace?(l.current=E.body.workspace.version,u.current=hn(U,L),d.current=U.length,i(!1),n("saved"),h(),p.current=setTimeout(()=>{n(M=>M==="saved"?"idle":M)},x7),y.current?.(E.body.workspace)):n("error")}catch{n("error")}finally{g.current=!1}},[x]);(0,rt.useEffect)(()=>{if(!a)return;let k=(T="autosave")=>{if(!s.current||!w.current)return;let H=wd(),L=hn(H.nodes,H.edges)!==u.current;if(i(L),!L){c.current&&(clearTimeout(c.current),c.current=null),n(A=>A==="pending"?"idle":A);return}let N=Bc(H.nodes.length,T);if(!k0({lastSavedNodeCount:d.current,nextNodeCount:H.nodes.length,cause:N})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(A=>A==="pending"?"idle":A);return}n(A=>A==="saving"||A==="conflict"?A:"pending"),c.current&&clearTimeout(c.current);let E={nodes:H.nodes,edges:H.edges},M=N;c.current=setTimeout(()=>{c.current=null,m(E,M)},h7)},_=ae.subscribe(()=>{k("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,rt.useEffect)(()=>{if(!a)return;let k=()=>{if(!w.current||!s.current)return;let T=wd(),R=Bc(T.nodes.length,"flush"),H=jm({lastSavedNodeCount:d.current,nextNodes:T.nodes,nextEdges:T.edges,cause:R,lastSavedSignature:u.current,nextSignature:hn(T.nodes,T.edges)});!H.persist||!H.snapshot||m(H.snapshot,R)};return window.addEventListener("pagehide",k),()=>{window.removeEventListener("pagehide",k),k(),h()}},[m,a]);let b=(0,rt.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let k=wd();await m(k,Bc(k.nodes.length,"autosave"))},[m]),v=(0,rt.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!s.current)return;let _=wd(),T="flush",R=jm({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:T,lastSavedSignature:u.current,nextSignature:hn(_.nodes,_.edges)});!R.persist||!R.snapshot||m(R.snapshot,T,!0)},[m]),C=(0,rt.useCallback)(async()=>{let k=wd();await m(k,Bc(k.nodes.length,"autosave"))},[m]),S=(0,rt.useCallback)(async()=>{let k=s.current;if(!k)return;let _=await qc(k.id);if(!_.ok||!_.body.workspace){n("error");return}let T=_.body.workspace;l.current=T.version,u.current=hn(T.nodes,T.edges),d.current=T.nodes.length,ae.getState().hydrateGraph(T.nodes,T.edges),i(!1),n("idle"),y.current?.(T)},[]);return(0,rt.useEffect)(()=>{if(!a)return;let k=!1,_=async()=>{if(k||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let R=s.current;if(!(!R||g.current)){k=!0;try{let H=await R5(R.id);if(!H.ok||typeof H.body.version!="number"||H.body.version<=l.current)return;let U=wd();await x({localNodes:U.nodes,localEdges:U.edges})}catch{}finally{k=!1}}},T=setInterval(()=>{_()},b7);return()=>clearInterval(T)},[a,x]),{status:o,isDirty:r,saveNow:b,flushPendingSave:v,resolveConflict:C,reloadFromServer:S}}var Ta=I(X(),1),w7=({locale:e,workspaceId:t})=>{let a=le(),o=(0,yd.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=LN({workspaceId:t,beforeReset:()=>{o.current()}});(0,yd.useEffect)(()=>{I5(e)},[e]);let s=n.phase==="ready"?n.workspace:null,l=(0,yd.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=IN(s,{onSaved:l,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=kN(s?s.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,Ta.jsx)("div",{className:"wf-canvas-root",children:(0,Ta.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Ta.jsx)("div",{className:"wf-canvas-root",children:(0,Ta.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Ta.jsx)("span",{children:n.message}),(0,Ta.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Ta.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,Ta.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Ta.jsx)("span",{children:a("app.conflictBanner")}),(0,Ta.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Ta.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Ta.jsx)("main",{className:"wf-canvas-main",children:(0,Ta.jsx)(yg,{children:(0,Ta.jsx)(vN,{catalog:i,workspaceId:s?.id??null,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})})]})},ww=w7;var MN=`/* this gets exported as style.css and can be used for the default theming */
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
`;var NN=`/**
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

`;var EN=`/**
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




`;var TN=`/**
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
`;var k7=[{id:"omnimux-workflow-xyflow-base",css:MN},{id:"omnimux-workflow-theme",css:NN},{id:"omnimux-workflow-components",css:EN},{id:"omnimux-workflow-table-node",css:TN}];function AN(){for(let{id:e,css:t}of k7){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var yw=I(X(),1),af=new WeakMap;function L7(e,t){if(!e||af.has(e))return;AN();let a=(0,DN.createRoot)(e);af.set(e,{root:a,lastProps:t}),a.render((0,yw.jsx)(ww,{...t}))}function _7(e,t){let a=af.get(e);a&&(a.lastProps=t,a.root.render((0,yw.jsx)(ww,{...t})))}function I7(e){let t=af.get(e);t&&(t.root.unmount(),af.delete(e))}return m3(M7);})();
