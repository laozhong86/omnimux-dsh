var __omnimuxWorkflowCanvas=(()=>{var VI=Object.create;var hd=Object.defineProperty;var GI=Object.getOwnPropertyDescriptor;var XI=Object.getOwnPropertyNames;var YI=Object.getPrototypeOf,jI=Object.prototype.hasOwnProperty;var ta=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},ZI=(e,t)=>{for(var a in t)hd(e,a,{get:t[a],enumerable:!0})},Kx=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of XI(t))!jI.call(e,n)&&n!==a&&hd(e,n,{get:()=>t[n],enumerable:!(o=GI(t,n))||o.enumerable});return e};var D=(e,t,a)=>(a=e!=null?VI(YI(e)):{},Kx(t||!e||!e.__esModule?hd(a,"default",{value:e,enumerable:!0}):a,e)),WI=e=>Kx(hd({},"__esModule",{value:!0}),e);var lb=ta(Qe=>{"use strict";function Ep(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<xd(n,t))e[o]=t,e[a]=n,a=o;else break e}}function So(e){return e.length===0?null:e[0]}function yd(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,u=e[s];if(0>xd(i,a))s<n&&0>xd(u,i)?(e[o]=u,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>xd(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function xd(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}Qe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?($x=performance,Qe.unstable_now=function(){return $x.now()}):(Ip=Date,Qx=Ip.now(),Qe.unstable_now=function(){return Ip.now()-Qx});var $x,Ip,Qx,jo=[],En=[],KI=1,Oa=null,Ht=3,Tp=!1,os=!1,ns=!1,Ap=!1,tb=typeof setTimeout=="function"?setTimeout:null,ab=typeof clearTimeout=="function"?clearTimeout:null,Jx=typeof setImmediate<"u"?setImmediate:null;function bd(e){for(var t=So(En);t!==null;){if(t.callback===null)yd(En);else if(t.startTime<=e)yd(En),t.sortIndex=t.expirationTime,Ep(jo,t);else break;t=So(En)}}function Dp(e){if(ns=!1,bd(e),!os)if(So(jo)!==null)os=!0,Al||(Al=!0,Tl());else{var t=So(En);t!==null&&Rp(Dp,t.startTime-e)}}var Al=!1,rs=-1,ob=5,nb=-1;function rb(){return Ap?!0:!(Qe.unstable_now()-nb<ob)}function Mp(){if(Ap=!1,Al){var e=Qe.unstable_now();nb=e;var t=!0;try{e:{os=!1,ns&&(ns=!1,ab(rs),rs=-1),Tp=!0;var a=Ht;try{t:{for(bd(e),Oa=So(jo);Oa!==null&&!(Oa.expirationTime>e&&rb());){var o=Oa.callback;if(typeof o=="function"){Oa.callback=null,Ht=Oa.priorityLevel;var n=o(Oa.expirationTime<=e);if(e=Qe.unstable_now(),typeof n=="function"){Oa.callback=n,bd(e),t=!0;break t}Oa===So(jo)&&yd(jo),bd(e)}else yd(jo);Oa=So(jo)}if(Oa!==null)t=!0;else{var r=So(En);r!==null&&Rp(Dp,r.startTime-e),t=!1}}break e}finally{Oa=null,Ht=a,Tp=!1}t=void 0}}finally{t?Tl():Al=!1}}}var Tl;typeof Jx=="function"?Tl=function(){Jx(Mp)}:typeof MessageChannel<"u"?(Np=new MessageChannel,eb=Np.port2,Np.port1.onmessage=Mp,Tl=function(){eb.postMessage(null)}):Tl=function(){tb(Mp,0)};var Np,eb;function Rp(e,t){rs=tb(function(){e(Qe.unstable_now())},t)}Qe.unstable_IdlePriority=5;Qe.unstable_ImmediatePriority=1;Qe.unstable_LowPriority=4;Qe.unstable_NormalPriority=3;Qe.unstable_Profiling=null;Qe.unstable_UserBlockingPriority=2;Qe.unstable_cancelCallback=function(e){e.callback=null};Qe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ob=0<e?Math.floor(1e3/e):5};Qe.unstable_getCurrentPriorityLevel=function(){return Ht};Qe.unstable_next=function(e){switch(Ht){case 1:case 2:case 3:var t=3;break;default:t=Ht}var a=Ht;Ht=t;try{return e()}finally{Ht=a}};Qe.unstable_requestPaint=function(){Ap=!0};Qe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Ht;Ht=e;try{return t()}finally{Ht=a}};Qe.unstable_scheduleCallback=function(e,t,a){var o=Qe.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:KI++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Ep(En,e),So(jo)===null&&e===So(En)&&(ns?(ab(rs),rs=-1):ns=!0,Rp(Dp,a-o))):(e.sortIndex=n,Ep(jo,e),os||Tp||(os=!0,Al||(Al=!0,Tl()))),e};Qe.unstable_shouldYield=rb;Qe.unstable_wrapCallback=function(e){var t=Ht;return function(){var a=Ht;Ht=t;try{return e.apply(this,arguments)}finally{Ht=a}}}});var sb=ta(($R,ib)=>{"use strict";ib.exports=lb()});var yb=ta(pe=>{"use strict";var Op=Symbol.for("react.transitional.element"),$I=Symbol.for("react.portal"),QI=Symbol.for("react.fragment"),JI=Symbol.for("react.strict_mode"),e5=Symbol.for("react.profiler"),t5=Symbol.for("react.consumer"),a5=Symbol.for("react.context"),o5=Symbol.for("react.forward_ref"),n5=Symbol.for("react.suspense"),r5=Symbol.for("react.memo"),pb=Symbol.for("react.lazy"),l5=Symbol.for("react.activity"),ub=Symbol.iterator;function i5(e){return e===null||typeof e!="object"?null:(e=ub&&e[ub]||e["@@iterator"],typeof e=="function"?e:null)}var mb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gb=Object.assign,hb={};function Rl(e,t,a){this.props=e,this.context=t,this.refs=hb,this.updater=a||mb}Rl.prototype.isReactComponent={};Rl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xb(){}xb.prototype=Rl.prototype;function Bp(e,t,a){this.props=e,this.context=t,this.refs=hb,this.updater=a||mb}var Hp=Bp.prototype=new xb;Hp.constructor=Bp;gb(Hp,Rl.prototype);Hp.isPureReactComponent=!0;var db=Array.isArray;function Pp(){}var Xe={H:null,A:null,T:null,S:null},bb=Object.prototype.hasOwnProperty;function Up(e,t,a){var o=a.ref;return{$$typeof:Op,type:e,key:t,ref:o!==void 0?o:null,props:a}}function s5(e,t){return Up(e.type,t,e.props)}function Fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Op}function u5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var cb=/\/+/g;function zp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u5(""+e.key):t.toString(36)}function d5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Pp,Pp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Dl(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Op:case $I:l=!0;break;case pb:return l=e._init,Dl(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+zp(e,0):o,db(n)?(a="",l!=null&&(a=l.replace(cb,"$&/")+"/"),Dl(n,t,a,"",function(u){return u})):n!=null&&(Fp(n)&&(n=s5(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(cb,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(db(e))for(var s=0;s<e.length;s++)o=e[s],r=i+zp(o,s),l+=Dl(o,t,a,r,n);else if(s=i5(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+zp(o,s++),l+=Dl(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Dl(d5(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function wd(e,t,a){if(e==null)return e;var o=[],n=0;return Dl(e,o,"","",function(r){return t.call(a,r,n++)}),o}function c5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fb=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},f5={map:wd,forEach:function(e,t,a){wd(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return wd(e,function(){t++}),t},toArray:function(e){return wd(e,function(t){return t})||[]},only:function(e){if(!Fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Activity=l5;pe.Children=f5;pe.Component=Rl;pe.Fragment=QI;pe.Profiler=e5;pe.PureComponent=Bp;pe.StrictMode=JI;pe.Suspense=n5;pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xe;pe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Xe.H.useMemoCache(e)}};pe.cache=function(e){return function(){return e.apply(null,arguments)}};pe.cacheSignal=function(){return null};pe.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=gb({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!bb.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return Up(e.type,n,o)};pe.createContext=function(e){return e={$$typeof:a5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:t5,_context:e},e};pe.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)bb.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return Up(e,r,n)};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:o5,render:e}};pe.isValidElement=Fp;pe.lazy=function(e){return{$$typeof:pb,_payload:{_status:-1,_result:e},_init:c5}};pe.memo=function(e,t){return{$$typeof:r5,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Xe.T,a={};Xe.T=a;try{var o=e(),n=Xe.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Pp,fb)}catch(r){fb(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Xe.T=t}};pe.unstable_useCacheRefresh=function(){return Xe.H.useCacheRefresh()};pe.use=function(e){return Xe.H.use(e)};pe.useActionState=function(e,t,a){return Xe.H.useActionState(e,t,a)};pe.useCallback=function(e,t){return Xe.H.useCallback(e,t)};pe.useContext=function(e){return Xe.H.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e,t){return Xe.H.useDeferredValue(e,t)};pe.useEffect=function(e,t){return Xe.H.useEffect(e,t)};pe.useEffectEvent=function(e){return Xe.H.useEffectEvent(e)};pe.useId=function(){return Xe.H.useId()};pe.useImperativeHandle=function(e,t,a){return Xe.H.useImperativeHandle(e,t,a)};pe.useInsertionEffect=function(e,t){return Xe.H.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Xe.H.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Xe.H.useMemo(e,t)};pe.useOptimistic=function(e,t){return Xe.H.useOptimistic(e,t)};pe.useReducer=function(e,t,a){return Xe.H.useReducer(e,t,a)};pe.useRef=function(e){return Xe.H.useRef(e)};pe.useState=function(e){return Xe.H.useState(e)};pe.useSyncExternalStore=function(e,t,a){return Xe.H.useSyncExternalStore(e,t,a)};pe.useTransition=function(){return Xe.H.useTransition()};pe.version="19.2.8"});var J=ta((JR,wb)=>{"use strict";wb.exports=yb()});var Cb=ta(Gt=>{"use strict";var p5=J();function vb(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Tn(){}var Vt={d:{f:Tn,r:function(){throw Error(vb(522))},D:Tn,C:Tn,L:Tn,m:Tn,X:Tn,S:Tn,M:Tn},p:0,findDOMNode:null},m5=Symbol.for("react.portal");function g5(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m5,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var ls=p5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function vd(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vt;Gt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(vb(299));return g5(e,t,null,a)};Gt.flushSync=function(e){var t=ls.T,a=Vt.p;try{if(ls.T=null,Vt.p=2,e)return e()}finally{ls.T=t,Vt.p=a,Vt.d.f()}};Gt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Vt.d.C(e,t))};Gt.prefetchDNS=function(e){typeof e=="string"&&Vt.d.D(e)};Gt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=vd(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Vt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Vt.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Gt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=vd(t.as,t.crossOrigin);Vt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Vt.d.M(e)};Gt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=vd(a,t.crossOrigin);Vt.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Gt.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=vd(t.as,t.crossOrigin);Vt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Vt.d.m(e)};Gt.requestFormReset=function(e){Vt.d.r(e)};Gt.unstable_batchedUpdates=function(e,t){return e(t)};Gt.useFormState=function(e,t,a){return ls.H.useFormState(e,t,a)};Gt.useFormStatus=function(){return ls.H.useHostTransitionStatus()};Gt.version="19.2.8"});var Lo=ta((tz,Lb)=>{"use strict";function Sb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sb)}catch(e){console.error(e)}}Sb(),Lb.exports=Cb()});var Pv=ta(Yc=>{"use strict";var bt=sb(),K0=J(),h5=Lo();function G(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ys(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function J0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _b(e){if(Ys(e)!==e)throw Error(G(188))}function x5(e){var t=e.alternate;if(!t){if(t=Ys(e),t===null)throw Error(G(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return _b(n),e;if(r===o)return _b(n),t;r=r.sibling}throw Error(G(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(G(189))}}if(a.alternate!==o)throw Error(G(190))}if(a.tag!==3)throw Error(G(188));return a.stateNode.current===a?e:t}function ey(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ey(e),t!==null)return t;e=e.sibling}return null}var Ze=Object.assign,b5=Symbol.for("react.element"),Cd=Symbol.for("react.transitional.element"),ms=Symbol.for("react.portal"),Ul=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),vm=Symbol.for("react.profiler"),ay=Symbol.for("react.consumer"),tn=Symbol.for("react.context"),hg=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Sm=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),Lm=Symbol.for("react.activity"),y5=Symbol.for("react.memo_cache_sentinel"),kb=Symbol.iterator;function is(e){return e===null||typeof e!="object"?null:(e=kb&&e[kb]||e["@@iterator"],typeof e=="function"?e:null)}var w5=Symbol.for("react.client.reference");function _m(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w5?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ul:return"Fragment";case vm:return"Profiler";case ty:return"StrictMode";case Cm:return"Suspense";case Sm:return"SuspenseList";case Lm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ms:return"Portal";case tn:return e.displayName||"Context";case ay:return(e._context.displayName||"Context")+".Consumer";case hg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xg:return t=e.displayName||null,t!==null?t:_m(e.type)||"Memo";case An:t=e._payload,e=e._init;try{return _m(e(t))}catch{}}return null}var gs=Array.isArray,le=K0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee=h5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rr={pending:!1,data:null,method:null,action:null},km=[],Fl=-1;function No(e){return{current:e}}function Ct(e){0>Fl||(e.current=km[Fl],km[Fl]=null,Fl--)}function qe(e,t){Fl++,km[Fl]=e.current,e.current=t}var Mo=No(null),As=No(null),Vn=No(null),tc=No(null);function ac(e,t){switch(qe(Vn,t),qe(As,e),qe(Mo,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?D0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=D0(t),e=Cv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ct(Mo),qe(Mo,e)}function ri(){Ct(Mo),Ct(As),Ct(Vn)}function Im(e){e.memoizedState!==null&&qe(tc,e);var t=Mo.current,a=Cv(t,e.type);t!==a&&(qe(As,e),qe(Mo,a))}function oc(e){As.current===e&&(Ct(Mo),Ct(As)),tc.current===e&&(Ct(tc),Vs._currentValue=Rr)}var qp,Ib;function Er(e){if(qp===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);qp=t&&t[1]||"",Ib=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qp+e+Ib}var Vp=!1;function Gp(e,t){if(!e||Vp)return"";Vp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),u=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{Vp=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Er(a):""}function v5(e,t){switch(e.tag){case 26:case 27:case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return e.child!==t&&t!==null?Er("Suspense Fallback"):Er("Suspense");case 19:return Er("SuspenseList");case 0:case 15:return Gp(e.type,!1);case 11:return Gp(e.type.render,!1);case 1:return Gp(e.type,!0);case 31:return Er("Activity");default:return""}}function Mb(e){try{var t="",a=null;do t+=v5(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Mm=Object.prototype.hasOwnProperty,bg=bt.unstable_scheduleCallback,Xp=bt.unstable_cancelCallback,C5=bt.unstable_shouldYield,S5=bt.unstable_requestPaint,va=bt.unstable_now,L5=bt.unstable_getCurrentPriorityLevel,oy=bt.unstable_ImmediatePriority,ny=bt.unstable_UserBlockingPriority,nc=bt.unstable_NormalPriority,_5=bt.unstable_LowPriority,ry=bt.unstable_IdlePriority,k5=bt.log,I5=bt.unstable_setDisableYieldValue,js=null,Ca=null;function Bn(e){if(typeof k5=="function"&&I5(e),Ca&&typeof Ca.setStrictMode=="function")try{Ca.setStrictMode(js,e)}catch{}}var Sa=Math.clz32?Math.clz32:E5,M5=Math.log,N5=Math.LN2;function E5(e){return e>>>=0,e===0?32:31-(M5(e)/N5|0)|0}var Sd=256,Ld=262144,_d=4194304;function Tr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ec(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Tr(o):(l&=i,l!==0?n=Tr(l):a||(a=i&~e,a!==0&&(n=Tr(a))))):(i=o&~r,i!==0?n=Tr(i):l!==0?n=Tr(l):a||(a=o&~e,a!==0&&(n=Tr(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Zs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function T5(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ly(){var e=_d;return _d<<=1,(_d&62914560)===0&&(_d=4194304),e}function Yp(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ws(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function A5(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=l&~a;0<a;){var d=31-Sa(a),f=1<<d;i[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&iy(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function iy(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Sa(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function sy(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Sa(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function uy(e,t){var a=t&-t;return a=(a&42)!==0?1:yg(a),(a&(e.suspendedLanes|t))!==0?0:a}function yg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dy(){var e=Ee.p;return e!==0?e:(e=window.event,e===void 0?32:Dv(e.type))}function Nb(e,t){var a=Ee.p;try{return Ee.p=e,t()}finally{Ee.p=a}}var ar=Math.random().toString(36).slice(2),Et="__reactFiber$"+ar,ia="__reactProps$"+ar,hi="__reactContainer$"+ar,Nm="__reactEvents$"+ar,D5="__reactListeners$"+ar,R5="__reactHandles$"+ar,Eb="__reactResources$"+ar,Ks="__reactMarker$"+ar;function vg(e){delete e[Et],delete e[ia],delete e[Nm],delete e[D5],delete e[R5]}function ql(e){var t=e[Et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[hi]||a[Et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=B0(e);e!==null;){if(a=e[Et])return a;e=B0(e)}return t}e=a,a=e.parentNode}return null}function xi(e){if(e=e[Et]||e[hi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function hs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(G(33))}function Ql(e){var t=e[Eb];return t||(t=e[Eb]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Ks]=!0}var cy=new Set,fy={};function Gr(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(fy[e]=t,e=0;e<t.length;e++)cy.add(t[e])}var z5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tb={},Ab={};function P5(e){return Mm.call(Ab,e)?!0:Mm.call(Tb,e)?!1:z5.test(e)?Ab[e]=!0:(Tb[e]=!0,!1)}function Ud(e,t,a){if(P5(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function kd(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Zo(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ha(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function py(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O5(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Em(e){if(!e._valueTracker){var t=py(e)?"checked":"value";e._valueTracker=O5(e,t,""+e[t])}}function my(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=py(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function rc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var B5=/[\n"\\]/g;function qa(e){return e.replace(B5,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tm(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ha(t)):e.value!==""+Ha(t)&&(e.value=""+Ha(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Am(e,l,Ha(t)):a!=null?Am(e,l,Ha(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Ha(i):e.removeAttribute("name")}function gy(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Em(e);return}a=a!=null?""+Ha(a):"",t=t!=null?""+Ha(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Em(e)}function Am(e,t,a){t==="number"&&rc(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ha(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function hy(e,t,a){if(t!=null&&(t=""+Ha(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ha(a):""}function xy(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(G(92));if(gs(o)){if(1<o.length)throw Error(G(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ha(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Em(e)}function ii(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var H5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Db(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||H5.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function by(e,t,a){if(t!=null&&typeof t!="object")throw Error(G(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Db(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Db(e,r,t[r])}function Cg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fd(e){return F5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function an(){}var Dm=null;function Sg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,ei=null;function Rb(e){var t=xi(e);if(t&&(e=t.stateNode)){var a=e[ia]||null;e:switch(e=t.stateNode,t.type){case"input":if(Tm(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qa(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[ia]||null;if(!n)throw Error(G(90));Tm(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&my(o)}break e;case"textarea":hy(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Jl(e,!!a.multiple,t,!1)}}}var jp=!1;function yy(e,t,a){if(jp)return e(t,a);jp=!0;try{var o=e(t);return o}finally{if(jp=!1,(Vl!==null||ei!==null)&&(qc(),Vl&&(t=Vl,e=ei,ei=Vl=null,Rb(t),e)))for(t=0;t<e.length;t++)Rb(e[t])}}function Ds(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ia]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(G(231,t,typeof a));return a}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rm=!1;if(sn)try{zl={},Object.defineProperty(zl,"passive",{get:function(){Rm=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{Rm=!1}var zl,Hn=null,Lg=null,qd=null;function wy(){if(qd)return qd;var e,t=Lg,a=t.length,o,n="value"in Hn?Hn.value:Hn.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return qd=n.slice(e,1<o?1-o:void 0)}function Vd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Id(){return!0}function zb(){return!1}function sa(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Id:zb,this.isPropagationStopped=zb,this}return Ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Id)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Id)},persist:function(){},isPersistent:Id}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=sa(Xr),$s=Ze({},Xr,{view:0,detail:0}),q5=sa($s),Zp,Wp,ss,Ac=Ze({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_g,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ss&&(ss&&e.type==="mousemove"?(Zp=e.screenX-ss.screenX,Wp=e.screenY-ss.screenY):Wp=Zp=0,ss=e),Zp)},movementY:function(e){return"movementY"in e?e.movementY:Wp}}),Pb=sa(Ac),V5=Ze({},Ac,{dataTransfer:0}),G5=sa(V5),X5=Ze({},$s,{relatedTarget:0}),Kp=sa(X5),Y5=Ze({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),j5=sa(Y5),Z5=Ze({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W5=sa(Z5),K5=Ze({},Xr,{data:0}),Ob=sa(K5),$5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J5[e])?!!t[e]:!1}function _g(){return eM}var tM=Ze({},$s,{key:function(e){if(e.key){var t=$5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_g,charCode:function(e){return e.type==="keypress"?Vd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aM=sa(tM),oM=Ze({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bb=sa(oM),nM=Ze({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_g}),rM=sa(nM),lM=Ze({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iM=sa(lM),sM=Ze({},Ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uM=sa(sM),dM=Ze({},Xr,{newState:0,oldState:0}),cM=sa(dM),fM=[9,13,27,32],kg=sn&&"CompositionEvent"in window,ys=null;sn&&"documentMode"in document&&(ys=document.documentMode);var pM=sn&&"TextEvent"in window&&!ys,vy=sn&&(!kg||ys&&8<ys&&11>=ys),Hb=" ",Ub=!1;function Cy(e,t){switch(e){case"keyup":return fM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gl=!1;function mM(e,t){switch(e){case"compositionend":return Sy(t);case"keypress":return t.which!==32?null:(Ub=!0,Hb);case"textInput":return e=t.data,e===Hb&&Ub?null:e;default:return null}}function gM(e,t){if(Gl)return e==="compositionend"||!kg&&Cy(e,t)?(e=wy(),qd=Lg=Hn=null,Gl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vy&&t.locale!=="ko"?null:t.data;default:return null}}var hM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hM[e.type]:t==="textarea"}function Ly(e,t,a,o){Vl?ei?ei.push(o):ei=[o]:Vl=o,t=Sc(t,"onChange"),0<t.length&&(a=new Tc("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var ws=null,Rs=null;function xM(e){yv(e,0)}function Dc(e){var t=hs(e);if(my(t))return e}function qb(e,t){if(e==="change")return t}var _y=!1;sn&&(sn?(Nd="oninput"in document,Nd||($p=document.createElement("div"),$p.setAttribute("oninput","return;"),Nd=typeof $p.oninput=="function"),Md=Nd):Md=!1,_y=Md&&(!document.documentMode||9<document.documentMode));var Md,Nd,$p;function Vb(){ws&&(ws.detachEvent("onpropertychange",ky),Rs=ws=null)}function ky(e){if(e.propertyName==="value"&&Dc(Rs)){var t=[];Ly(t,Rs,e,Sg(e)),yy(xM,t)}}function bM(e,t,a){e==="focusin"?(Vb(),ws=t,Rs=a,ws.attachEvent("onpropertychange",ky)):e==="focusout"&&Vb()}function yM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dc(Rs)}function wM(e,t){if(e==="click")return Dc(t)}function vM(e,t){if(e==="input"||e==="change")return Dc(t)}function CM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _a=typeof Object.is=="function"?Object.is:CM;function zs(e,t){if(_a(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Mm.call(t,n)||!_a(e[n],t[n]))return!1}return!0}function Gb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xb(e,t){var a=Gb(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gb(a)}}function Iy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function My(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=rc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=rc(e.document)}return t}function Ig(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var SM=sn&&"documentMode"in document&&11>=document.documentMode,Xl=null,zm=null,vs=null,Pm=!1;function Yb(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pm||Xl==null||Xl!==rc(o)||(o=Xl,"selectionStart"in o&&Ig(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vs&&zs(vs,o)||(vs=o,o=Sc(zm,"onSelect"),0<o.length&&(t=new Tc("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Xl)))}function Nr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yl={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Qp={},Ny={};sn&&(Ny=document.createElement("div").style,"AnimationEvent"in window||(delete Yl.animationend.animation,delete Yl.animationiteration.animation,delete Yl.animationstart.animation),"TransitionEvent"in window||delete Yl.transitionend.transition);function Yr(e){if(Qp[e])return Qp[e];if(!Yl[e])return e;var t=Yl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ny)return Qp[e]=t[a];return e}var Ey=Yr("animationend"),Ty=Yr("animationiteration"),Ay=Yr("animationstart"),LM=Yr("transitionrun"),_M=Yr("transitionstart"),kM=Yr("transitioncancel"),Dy=Yr("transitionend"),Ry=new Map,Om="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Om.push("scrollEnd");function io(e,t){Ry.set(e,t),Gr(t,[e])}var lc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ba=[],jl=0,Mg=0;function Rc(){for(var e=jl,t=Mg=jl=0;t<e;){var a=Ba[t];Ba[t++]=null;var o=Ba[t];Ba[t++]=null;var n=Ba[t];Ba[t++]=null;var r=Ba[t];if(Ba[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&zy(a,n,r)}}function zc(e,t,a,o){Ba[jl++]=e,Ba[jl++]=t,Ba[jl++]=a,Ba[jl++]=o,Mg|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ng(e,t,a,o){return zc(e,t,a,o),ic(e)}function jr(e,t){return zc(e,null,null,t),ic(e)}function zy(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Sa(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function ic(e){if(50<Es)throw Es=0,ng=null,Error(G(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zl={};function IM(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ya(e,t,a,o){return new IM(e,t,a,o)}function Eg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nn(e,t){var a=e.alternate;return a===null?(a=ya(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Py(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gd(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Eg(e)&&(l=1);else if(typeof e=="string")l=E4(e,a,Mo.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Lm:return e=ya(31,a,t,n),e.elementType=Lm,e.lanes=r,e;case Ul:return zr(a.children,n,r,t);case ty:l=8,n|=24;break;case vm:return e=ya(12,a,t,n|2),e.elementType=vm,e.lanes=r,e;case Cm:return e=ya(13,a,t,n),e.elementType=Cm,e.lanes=r,e;case Sm:return e=ya(19,a,t,n),e.elementType=Sm,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tn:l=10;break e;case ay:l=9;break e;case hg:l=11;break e;case xg:l=14;break e;case An:l=16,o=null;break e}l=29,a=Error(G(130,e===null?"null":typeof e,"")),o=null}return t=ya(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function zr(e,t,a,o){return e=ya(7,e,o,t),e.lanes=a,e}function Jp(e,t,a){return e=ya(6,e,null,t),e.lanes=a,e}function Oy(e){var t=ya(18,null,null,0);return t.stateNode=e,t}function em(e,t,a){return t=ya(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jb=new WeakMap;function Va(e,t){if(typeof e=="object"&&e!==null){var a=jb.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Mb(t)},jb.set(e,t),t)}return{value:e,source:t,stack:Mb(t)}}var Wl=[],Kl=0,sc=null,Ps=0,Ua=[],Fa=0,Qn=null,_o=1,ko="";function Jo(e,t){Wl[Kl++]=Ps,Wl[Kl++]=sc,sc=e,Ps=t}function By(e,t,a){Ua[Fa++]=_o,Ua[Fa++]=ko,Ua[Fa++]=Qn,Qn=e;var o=_o;e=ko;var n=32-Sa(o)-1;o&=~(1<<n),a+=1;var r=32-Sa(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,_o=1<<32-Sa(t)+n|a<<n|o,ko=r+e}else _o=1<<r|a<<n|o,ko=e}function Tg(e){e.return!==null&&(Jo(e,1),By(e,1,0))}function Ag(e){for(;e===sc;)sc=Wl[--Kl],Wl[Kl]=null,Ps=Wl[--Kl],Wl[Kl]=null;for(;e===Qn;)Qn=Ua[--Fa],Ua[Fa]=null,ko=Ua[--Fa],Ua[Fa]=null,_o=Ua[--Fa],Ua[Fa]=null}function Hy(e,t){Ua[Fa++]=_o,Ua[Fa++]=ko,Ua[Fa++]=Qn,_o=t.id,ko=t.overflow,Qn=e}var Tt=null,je=null,ke=!1,Gn=null,Ga=!1,Bm=Error(G(519));function Jn(e){var t=Error(G(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Os(Va(t,e)),Bm}function Zb(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Et]=e,t[ia]=o,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<Fs.length;a++)ve(Fs[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),gy(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),xy(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||vv(t.textContent,a)?(o.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),o.onScroll!=null&&ve("scroll",t),o.onScrollEnd!=null&&ve("scrollend",t),o.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Jn(e,!0)}function Wb(e){for(Tt=e.return;Tt;)switch(Tt.tag){case 5:case 31:case 13:Ga=!1;return;case 27:case 3:Ga=!0;return;default:Tt=Tt.return}}function Pl(e){if(e!==Tt)return!1;if(!ke)return Wb(e),ke=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ug(e.type,e.memoizedProps)),a=!a),a&&je&&Jn(e),Wb(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));je=O0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));je=O0(e)}else t===27?(t=je,or(e.type)?(e=pg,pg=null,je=e):je=t):je=Tt?Ya(e.stateNode.nextSibling):null;return!0}function Hr(){je=Tt=null,ke=!1}function tm(){var e=Gn;return e!==null&&(ra===null?ra=e:ra.push.apply(ra,e),Gn=null),e}function Os(e){Gn===null?Gn=[e]:Gn.push(e)}var Hm=No(null),Zr=null,on=null;function Rn(e,t,a){qe(Hm,t._currentValue),t._currentValue=a}function rn(e){e._currentValue=Hm.current,Ct(Hm)}function Um(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Fm(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Um(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(G(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Um(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function bi(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(G(387));if(l=l.memoizedProps,l!==null){var i=n.type;_a(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===tc.current){if(l=n.alternate,l===null)throw Error(G(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Vs):e=[Vs])}n=n.return}e!==null&&Fm(t,e,a,o),t.flags|=262144}function uc(e){for(e=e.firstContext;e!==null;){if(!_a(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ur(e){Zr=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function At(e){return Uy(Zr,e)}function Ed(e,t){return Zr===null&&Ur(e),Uy(e,t)}function Uy(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},on===null){if(e===null)throw Error(G(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return a}var MM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},NM=bt.unstable_scheduleCallback,EM=bt.unstable_NormalPriority,pt={$$typeof:tn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dg(){return{controller:new MM,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&NM(EM,function(){e.controller.abort()})}var Cs=null,qm=0,si=0,ti=null;function TM(e,t){if(Cs===null){var a=Cs=[];qm=0,si=nh(),ti={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qm++,t.then(Kb,Kb),t}function Kb(){if(--qm===0&&Cs!==null){ti!==null&&(ti.status="fulfilled");var e=Cs;Cs=null,si=0,ti=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function AM(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var $b=le.S;le.S=function(e,t){ev=va(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&TM(e,t),$b!==null&&$b(e,t)};var Pr=No(null);function Rg(){var e=Pr.current;return e!==null?e:He.pooledCache}function Xd(e,t){t===null?qe(Pr,Pr.current):qe(Pr,t.pool)}function Fy(){var e=Rg();return e===null?null:{parent:pt._currentValue,pool:e}}var yi=Error(G(460)),zg=Error(G(474)),Pc=Error(G(542)),dc={then:function(){}};function Qb(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qy(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(an,an),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e0(e),e;default:if(typeof t.status=="string")t.then(an,an);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(G(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e0(e),e}throw Or=t,yi}}function Ar(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Or=a,yi):a}}var Or=null;function Jb(){if(Or===null)throw Error(G(459));var e=Or;return Or=null,e}function e0(e){if(e===yi||e===Pc)throw Error(G(483))}var ai=null,Bs=0;function Td(e){var t=Bs;return Bs+=1,ai===null&&(ai=[]),qy(ai,e,t)}function us(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ad(e,t){throw t.$$typeof===b5?Error(G(525)):(e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vy(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=nn(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function i(h,x,m,b){return x===null||x.tag!==6?(x=Jp(m,h.mode,b),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,b){var S=m.type;return S===Ul?d(h,x,m.props.children,b,m.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===An&&Ar(S)===x.type)?(x=n(x,m.props),us(x,m),x.return=h,x):(x=Gd(m.type,m.key,m.props,null,h.mode,b),us(x,m),x.return=h,x)}function u(h,x,m,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=em(m,h.mode,b),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function d(h,x,m,b,S){return x===null||x.tag!==7?(x=zr(m,h.mode,b,S),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Jp(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cd:return m=Gd(x.type,x.key,x.props,null,h.mode,m),us(m,x),m.return=h,m;case ms:return x=em(x,h.mode,m),x.return=h,x;case An:return x=Ar(x),f(h,x,m)}if(gs(x)||is(x))return x=zr(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,Td(x),m);if(x.$$typeof===tn)return f(h,Ed(h,x),m);Ad(h,x)}return null}function c(h,x,m,b){var S=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return S!==null?null:i(h,x,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cd:return m.key===S?s(h,x,m,b):null;case ms:return m.key===S?u(h,x,m,b):null;case An:return m=Ar(m),c(h,x,m,b)}if(gs(m)||is(m))return S!==null?null:d(h,x,m,b,null);if(typeof m.then=="function")return c(h,x,Td(m),b);if(m.$$typeof===tn)return c(h,x,Ed(h,m),b);Ad(h,m)}return null}function p(h,x,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return h=h.get(m)||null,i(x,h,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Cd:return h=h.get(b.key===null?m:b.key)||null,s(x,h,b,S);case ms:return h=h.get(b.key===null?m:b.key)||null,u(x,h,b,S);case An:return b=Ar(b),p(h,x,m,b,S)}if(gs(b)||is(b))return h=h.get(m)||null,d(x,h,b,S,null);if(typeof b.then=="function")return p(h,x,m,Td(b),S);if(b.$$typeof===tn)return p(h,x,m,Ed(x,b),S);Ad(x,b)}return null}function g(h,x,m,b){for(var S=null,C=null,v=x,_=x=0,k=null;v!==null&&_<m.length;_++){v.index>_?(k=v,v=null):k=v.sibling;var T=c(h,v,m[_],b);if(T===null){v===null&&(v=k);break}e&&v&&T.alternate===null&&t(h,v),x=r(T,x,_),C===null?S=T:C.sibling=T,C=T,v=k}if(_===m.length)return a(h,v),ke&&Jo(h,_),S;if(v===null){for(;_<m.length;_++)v=f(h,m[_],b),v!==null&&(x=r(v,x,_),C===null?S=v:C.sibling=v,C=v);return ke&&Jo(h,_),S}for(v=o(v);_<m.length;_++)k=p(v,h,_,m[_],b),k!==null&&(e&&k.alternate!==null&&v.delete(k.key===null?_:k.key),x=r(k,x,_),C===null?S=k:C.sibling=k,C=k);return e&&v.forEach(function(N){return t(h,N)}),ke&&Jo(h,_),S}function y(h,x,m,b){if(m==null)throw Error(G(151));for(var S=null,C=null,v=x,_=x=0,k=null,T=m.next();v!==null&&!T.done;_++,T=m.next()){v.index>_?(k=v,v=null):k=v.sibling;var N=c(h,v,T.value,b);if(N===null){v===null&&(v=k);break}e&&v&&N.alternate===null&&t(h,v),x=r(N,x,_),C===null?S=N:C.sibling=N,C=N,v=k}if(T.done)return a(h,v),ke&&Jo(h,_),S;if(v===null){for(;!T.done;_++,T=m.next())T=f(h,T.value,b),T!==null&&(x=r(T,x,_),C===null?S=T:C.sibling=T,C=T);return ke&&Jo(h,_),S}for(v=o(v);!T.done;_++,T=m.next())T=p(v,h,_,T.value,b),T!==null&&(e&&T.alternate!==null&&v.delete(T.key===null?_:T.key),x=r(T,x,_),C===null?S=T:C.sibling=T,C=T);return e&&v.forEach(function(U){return t(h,U)}),ke&&Jo(h,_),S}function w(h,x,m,b){if(typeof m=="object"&&m!==null&&m.type===Ul&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Cd:e:{for(var S=m.key;x!==null;){if(x.key===S){if(S=m.type,S===Ul){if(x.tag===7){a(h,x.sibling),b=n(x,m.props.children),b.return=h,h=b;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===An&&Ar(S)===x.type){a(h,x.sibling),b=n(x,m.props),us(b,m),b.return=h,h=b;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Ul?(b=zr(m.props.children,h.mode,b,m.key),b.return=h,h=b):(b=Gd(m.type,m.key,m.props,null,h.mode,b),us(b,m),b.return=h,h=b)}return l(h);case ms:e:{for(S=m.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),b=n(x,m.children||[]),b.return=h,h=b;break e}else{a(h,x);break}else t(h,x);x=x.sibling}b=em(m,h.mode,b),b.return=h,h=b}return l(h);case An:return m=Ar(m),w(h,x,m,b)}if(gs(m))return g(h,x,m,b);if(is(m)){if(S=is(m),typeof S!="function")throw Error(G(150));return m=S.call(m),y(h,x,m,b)}if(typeof m.then=="function")return w(h,x,Td(m),b);if(m.$$typeof===tn)return w(h,x,Ed(h,m),b);Ad(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),b=n(x,m),b.return=h,h=b):(a(h,x),b=Jp(m,h.mode,b),b.return=h,h=b),l(h)):a(h,x)}return function(h,x,m,b){try{Bs=0;var S=w(h,x,m,b);return ai=null,S}catch(v){if(v===yi||v===Pc)throw v;var C=ya(29,v,null,h.mode);return C.lanes=b,C.return=h,C}}}var Fr=Vy(!0),Gy=Vy(!1),Dn=!1;function Pg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=ic(e),zy(e,null,a),t}return zc(e,o,t,a),ic(e)}function Ss(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,sy(e,a)}}function am(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Gm=!1;function Ls(){if(Gm){var e=ti;if(e!==null)throw e}}function _s(e,t,a,o){Gm=!1;var n=e.updateQueue;Dn=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;l=0,d=u=s=null,i=r;do{var c=i.lane&-536870913,p=c!==i.lane;if(p?(Le&c)===c:(o&c)===c){c!==0&&c===si&&(Gm=!0),d!==null&&(d=d.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,y=i;c=t;var w=a;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(w,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,c=typeof g=="function"?g.call(w,f,c):g,c==null)break e;f=Ze({},f,c);break e;case 2:Dn=!0}}c=i.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=p,s=f):d=d.next=p,l|=c;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),tr|=l,e.lanes=l,e.memoizedState=f}}function Xy(e,t){if(typeof e!="function")throw Error(G(191,e));e.call(t)}function Yy(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xy(a[e],t)}var ui=No(null),cc=No(0);function t0(e,t){e=fn,qe(cc,e),qe(ui,t),fn=e|t.baseLanes}function Xm(){qe(cc,fn),qe(ui,ui.current)}function Og(){fn=cc.current,Ct(ui),Ct(cc)}var ka=No(null),Xa=null;function zn(e){var t=e.alternate;qe(st,st.current&1),qe(ka,e),Xa===null&&(t===null||ui.current!==null||t.memoizedState!==null)&&(Xa=e)}function Ym(e){qe(st,st.current),qe(ka,e),Xa===null&&(Xa=e)}function jy(e){e.tag===22?(qe(st,st.current),qe(ka,e),Xa===null&&(Xa=e)):Pn(e)}function Pn(){qe(st,st.current),qe(ka,ka.current)}function ba(e){Ct(ka),Xa===e&&(Xa=null),Ct(st)}var st=No(0);function fc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cg(a)||fg(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var un=0,ge=null,Oe=null,ct=null,pc=!1,oi=!1,qr=!1,mc=0,Hs=0,ni=null,DM=0;function ot(){throw Error(G(321))}function Bg(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!_a(e[a],t[a]))return!1;return!0}function Hg(e,t,a,o,n,r){return un=r,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?Lw:Kg,qr=!1,r=a(o,n),qr=!1,oi&&(r=Wy(t,a,o,n)),Zy(e),r}function Zy(e){le.H=Us;var t=Oe!==null&&Oe.next!==null;if(un=0,ct=Oe=ge=null,pc=!1,Hs=0,ni=null,t)throw Error(G(300));e===null||mt||(e=e.dependencies,e!==null&&uc(e)&&(mt=!0))}function Wy(e,t,a,o){ge=e;var n=0;do{if(oi&&(ni=null),Hs=0,oi=!1,25<=n)throw Error(G(301));if(n+=1,ct=Oe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}le.H=_w,r=t(a,o)}while(oi);return r}function RM(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?Js(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ge.flags|=1024),t}function Ug(){var e=mc!==0;return mc=0,e}function Fg(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qg(e){if(pc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pc=!1}un=0,ct=Oe=ge=null,oi=!1,Hs=mc=0,ni=null}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ge.memoizedState=ct=e:ct=ct.next=e,ct}function ut(){if(Oe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=ct===null?ge.memoizedState:ct.next;if(t!==null)ct=t,Oe=e;else{if(e===null)throw ge.alternate===null?Error(G(467)):Error(G(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ct===null?ge.memoizedState=ct=e:ct=ct.next=e}return ct}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(e){var t=Hs;return Hs+=1,ni===null&&(ni=[]),e=qy(ni,e,t),t=ge,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?Lw:Kg),e}function Bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Js(e);if(e.$$typeof===tn)return At(e)}throw Error(G(438,String(e)))}function Vg(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Oc(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=y5;return t.index++,a}function dn(e,t){return typeof t=="function"?t(e):t}function Yd(e){var t=ut();return Gg(t,Oe,e)}function Gg(e,t,a){var o=e.queue;if(o===null)throw Error(G(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Le&f)===f:(un&f)===f){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===si&&(d=!0);else if((un&c)===c){u=u.next,c===si&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=f,l=r):s=s.next=f,ge.lanes|=c,tr|=c;f=u.action,qr&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=c,l=r):s=s.next=c,ge.lanes|=f,tr|=f;u=u.next}while(u!==null&&u!==t);if(s===null?l=r:s.next=i,!_a(r,e.memoizedState)&&(mt=!0,d&&(a=ti,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function om(e){var t=ut(),a=t.queue;if(a===null)throw Error(G(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);_a(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function Ky(e,t,a){var o=ge,n=ut(),r=ke;if(r){if(a===void 0)throw Error(G(407));a=a()}else a=t();var l=!_a((Oe||n).memoizedState,a);if(l&&(n.memoizedState=a,mt=!0),n=n.queue,Xg(Jy.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,di(9,{destroy:void 0},Qy.bind(null,o,n,a,t),null),He===null)throw Error(G(349));r||(un&127)!==0||$y(o,t,a)}return a}function $y(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=Oc(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qy(e,t,a,o){t.value=a,t.getSnapshot=o,ew(t)&&tw(e)}function Jy(e,t,a){return a(function(){ew(t)&&tw(e)})}function ew(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!_a(e,a)}catch{return!0}}function tw(e){var t=jr(e,2);t!==null&&la(t,e,2)}function jm(e){var t=Xt();if(typeof e=="function"){var a=e;if(e=a(),qr){Bn(!0);try{a()}finally{Bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t}function aw(e,t,a,o){return e.baseState=a,Gg(e,Oe,typeof o=="function"?o:dn)}function zM(e,t,a,o,n){if(Uc(e))throw Error(G(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};le.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,ow(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ow(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=le.T,l={};le.T=l;try{var i=a(n,o),s=le.S;s!==null&&s(l,i),a0(e,t,i)}catch(u){Zm(e,t,u)}finally{r!==null&&l.types!==null&&(r.types=l.types),le.T=r}}else try{r=a(n,o),a0(e,t,r)}catch(u){Zm(e,t,u)}}function a0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){o0(e,t,o)},function(o){return Zm(e,t,o)}):o0(e,t,a)}function o0(e,t,a){t.status="fulfilled",t.value=a,nw(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ow(e,a)))}function Zm(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,nw(t),t=t.next;while(t!==o)}e.action=null}function nw(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rw(e,t){return t}function n0(e,t){if(ke){var a=He.formState;if(a!==null){e:{var o=ge;if(ke){if(je){t:{for(var n=je,r=Ga;n.nodeType!==8;){if(!r){n=null;break t}if(n=Ya(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){je=Ya(n.nextSibling),o=n.data==="F!";break e}}Jn(o)}o=!1}o&&(t=a[0])}}return a=Xt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rw,lastRenderedState:t},a.queue=o,a=vw.bind(null,ge,o),o.dispatch=a,o=jm(!1),r=Wg.bind(null,ge,!1,o.queue),o=Xt(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=zM.bind(null,ge,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function r0(e){var t=ut();return lw(t,Oe,e)}function lw(e,t,a){if(t=Gg(e,t,rw)[0],e=Yd(dn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Js(t)}catch(l){throw l===yi?Pc:l}else o=t;t=ut();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ge.flags|=2048,di(9,{destroy:void 0},PM.bind(null,n,a),null)),[o,r,e]}function PM(e,t){e.action=t}function l0(e){var t=ut(),a=Oe;if(a!==null)return lw(t,a,e);ut(),t=t.memoizedState,a=ut();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function di(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ge.updateQueue,t===null&&(t=Oc(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function iw(){return ut().memoizedState}function jd(e,t,a,o){var n=Xt();ge.flags|=e,n.memoizedState=di(1|t,{destroy:void 0},a,o===void 0?null:o)}function Hc(e,t,a,o){var n=ut();o=o===void 0?null:o;var r=n.memoizedState.inst;Oe!==null&&o!==null&&Bg(o,Oe.memoizedState.deps)?n.memoizedState=di(t,r,a,o):(ge.flags|=e,n.memoizedState=di(1|t,r,a,o))}function i0(e,t){jd(8390656,8,e,t)}function Xg(e,t){Hc(2048,8,e,t)}function OM(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=Oc(),ge.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function sw(e){var t=ut().memoizedState;return OM({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(G(440));return t.impl.apply(void 0,arguments)}}function uw(e,t){return Hc(4,2,e,t)}function dw(e,t){return Hc(4,4,e,t)}function cw(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fw(e,t,a){a=a!=null?a.concat([e]):null,Hc(4,4,cw.bind(null,t,e),a)}function Yg(){}function pw(e,t){var a=ut();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Bg(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function mw(e,t){var a=ut();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Bg(t,o[1]))return o[0];if(o=e(),qr){Bn(!0);try{e()}finally{Bn(!1)}}return a.memoizedState=[o,t],o}function jg(e,t,a){return a===void 0||(un&1073741824)!==0&&(Le&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=av(),ge.lanes|=e,tr|=e,a)}function gw(e,t,a,o){return _a(a,t)?a:ui.current!==null?(e=jg(e,a,o),_a(e,t)||(mt=!0),e):(un&42)===0||(un&1073741824)!==0&&(Le&261930)===0?(mt=!0,e.memoizedState=a):(e=av(),ge.lanes|=e,tr|=e,t)}function hw(e,t,a,o,n){var r=Ee.p;Ee.p=r!==0&&8>r?r:8;var l=le.T,i={};le.T=i,Wg(e,!1,t,a);try{var s=n(),u=le.S;if(u!==null&&u(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=AM(s,o);ks(e,t,d,La(e))}else ks(e,t,o,La(e))}catch(f){ks(e,t,{then:function(){},status:"rejected",reason:f},La())}finally{Ee.p=r,l!==null&&i.types!==null&&(l.types=i.types),le.T=l}}function BM(){}function Wm(e,t,a,o){if(e.tag!==5)throw Error(G(476));var n=xw(e).queue;hw(e,n,t,Rr,a===null?BM:function(){return bw(e),a(o)})}function xw(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Rr,baseState:Rr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:Rr},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bw(e){var t=xw(e);t.next===null&&(t=e.alternate.memoizedState),ks(e,t.next.queue,{},La())}function Zg(){return At(Vs)}function yw(){return ut().memoizedState}function ww(){return ut().memoizedState}function HM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=La();e=Xn(a);var o=Yn(t,e,a);o!==null&&(la(o,t,a),Ss(o,t,a)),t={cache:Dg()},e.payload=t;return}t=t.return}}function UM(e,t,a){var o=La();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Uc(e)?Cw(t,a):(a=Ng(e,t,a,o),a!==null&&(la(a,e,o),Sw(a,t,o)))}function vw(e,t,a){var o=La();ks(e,t,a,o)}function ks(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uc(e))Cw(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,_a(i,l))return zc(e,t,n,0),He===null&&Rc(),!1}catch{}if(a=Ng(e,t,n,o),a!==null)return la(a,e,o),Sw(a,t,o),!0}return!1}function Wg(e,t,a,o){if(o={lane:2,revertLane:nh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Uc(e)){if(t)throw Error(G(479))}else t=Ng(e,a,o,2),t!==null&&la(t,e,2)}function Uc(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Cw(e,t){oi=pc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sw(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,sy(e,a)}}var Us={readContext:At,use:Bc,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};Us.useEffectEvent=ot;var Lw={readContext:At,use:Bc,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:i0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,jd(4194308,4,cw.bind(null,t,e),a)},useLayoutEffect:function(e,t){return jd(4194308,4,e,t)},useInsertionEffect:function(e,t){jd(4,2,e,t)},useMemo:function(e,t){var a=Xt();t=t===void 0?null:t;var o=e();if(qr){Bn(!0);try{e()}finally{Bn(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Xt();if(a!==void 0){var n=a(t);if(qr){Bn(!0);try{a(t)}finally{Bn(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=UM.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:function(e){e=jm(e);var t=e.queue,a=vw.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Yg,useDeferredValue:function(e,t){var a=Xt();return jg(a,e,t)},useTransition:function(){var e=jm(!1);return e=hw.bind(null,ge,e.queue,!0,!1),Xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ge,n=Xt();if(ke){if(a===void 0)throw Error(G(407));a=a()}else{if(a=t(),He===null)throw Error(G(349));(Le&127)!==0||$y(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,i0(Jy.bind(null,o,r,e),[e]),o.flags|=2048,di(9,{destroy:void 0},Qy.bind(null,o,r,a,t),null),a},useId:function(){var e=Xt(),t=He.identifierPrefix;if(ke){var a=ko,o=_o;a=(o&~(1<<32-Sa(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=mc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=DM++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zg,useFormState:n0,useActionState:n0,useOptimistic:function(e){var t=Xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Wg.bind(null,ge,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vg,useCacheRefresh:function(){return Xt().memoizedState=HM.bind(null,ge)},useEffectEvent:function(e){var t=Xt(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(G(440));return a.impl.apply(void 0,arguments)}}},Kg={readContext:At,use:Bc,useCallback:pw,useContext:At,useEffect:Xg,useImperativeHandle:fw,useInsertionEffect:uw,useLayoutEffect:dw,useMemo:mw,useReducer:Yd,useRef:iw,useState:function(){return Yd(dn)},useDebugValue:Yg,useDeferredValue:function(e,t){var a=ut();return gw(a,Oe.memoizedState,e,t)},useTransition:function(){var e=Yd(dn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Js(e),t]},useSyncExternalStore:Ky,useId:yw,useHostTransitionStatus:Zg,useFormState:r0,useActionState:r0,useOptimistic:function(e,t){var a=ut();return aw(a,Oe,e,t)},useMemoCache:Vg,useCacheRefresh:ww};Kg.useEffectEvent=sw;var _w={readContext:At,use:Bc,useCallback:pw,useContext:At,useEffect:Xg,useImperativeHandle:fw,useInsertionEffect:uw,useLayoutEffect:dw,useMemo:mw,useReducer:om,useRef:iw,useState:function(){return om(dn)},useDebugValue:Yg,useDeferredValue:function(e,t){var a=ut();return Oe===null?jg(a,e,t):gw(a,Oe.memoizedState,e,t)},useTransition:function(){var e=om(dn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Js(e),t]},useSyncExternalStore:Ky,useId:yw,useHostTransitionStatus:Zg,useFormState:l0,useActionState:l0,useOptimistic:function(e,t){var a=ut();return Oe!==null?aw(a,Oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vg,useCacheRefresh:ww};_w.useEffectEvent=sw;function nm(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ze({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Km={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=La(),n=Xn(o);n.payload=t,a!=null&&(n.callback=a),t=Yn(e,n,o),t!==null&&(la(t,e,o),Ss(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=La(),n=Xn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Yn(e,n,o),t!==null&&(la(t,e,o),Ss(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=La(),o=Xn(a);o.tag=2,t!=null&&(o.callback=t),t=Yn(e,o,a),t!==null&&(la(t,e,a),Ss(t,e,a))}};function s0(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!zs(a,o)||!zs(n,r):!0}function u0(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Km.enqueueReplaceState(t,t.state,null)}function Vr(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ze({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function kw(e){lc(e)}function Iw(e){console.error(e)}function Mw(e){lc(e)}function gc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function d0(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function $m(e,t,a){return a=Xn(a),a.tag=3,a.payload={element:null},a.callback=function(){gc(e,t)},a}function Nw(e){return e=Xn(e),e.tag=3,e}function Ew(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){d0(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){d0(t,a,o),typeof n!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function FM(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&bi(t,a,n,!0),a=ka.current,a!==null){switch(a.tag){case 31:case 13:return Xa===null?wc():a.alternate===null&&nt===0&&(nt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===dc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),gm(e,o,n)),!1;case 22:return a.flags|=65536,o===dc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),gm(e,o,n)),!1}throw Error(G(435,a.tag))}return gm(e,o,n),wc(),!1}if(ke)return t=ka.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Bm&&(e=Error(G(422),{cause:o}),Os(Va(e,a)))):(o!==Bm&&(t=Error(G(423),{cause:o}),Os(Va(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Va(o,a),n=$m(e.stateNode,o,n),am(e,n),nt!==4&&(nt=2)),!1;var r=Error(G(520),{cause:o});if(r=Va(r,a),Ns===null?Ns=[r]:Ns.push(r),nt!==4&&(nt=2),t===null)return!0;o=Va(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=$m(a.stateNode,o,e),am(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Nw(n),Ew(n,e,a,o),am(a,n),!1}a=a.return}while(a!==null);return!1}var $g=Error(G(461)),mt=!1;function Nt(e,t,a,o){t.child=e===null?Gy(t,null,a,o):Fr(t,e.child,a,o)}function c0(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return Ur(t),o=Hg(e,t,a,l,r,n),i=Ug(),e!==null&&!mt?(Fg(e,t,n),cn(e,t,n)):(ke&&i&&Tg(t),t.flags|=1,Nt(e,t,o,n),t.child)}function f0(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Eg(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Tw(e,t,r,o,n)):(e=Gd(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Qg(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:zs,a(l,o)&&e.ref===t.ref)return cn(e,t,n)}return t.flags|=1,e=nn(r,o),e.ref=t.ref,e.return=t,t.child=e}function Tw(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(zs(r,o)&&e.ref===t.ref)if(mt=!1,t.pendingProps=o=r,Qg(e,n))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,cn(e,t,n)}return Qm(e,t,a,o,n)}function Aw(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return p0(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xd(t,r!==null?r.cachePool:null),r!==null?t0(t,r):Xm(),jy(t);else return o=t.lanes=536870912,p0(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Xd(t,r.cachePool),t0(t,r),Pn(t),t.memoizedState=null):(e!==null&&Xd(t,null),Xm(),Pn(t));return Nt(e,t,n,a),t.child}function xs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function p0(e,t,a,o,n){var r=Rg();return r=r===null?null:{parent:pt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Xd(t,null),Xm(),jy(t),e!==null&&bi(e,t,o,!0),t.childLanes=n,null}function Zd(e,t){return t=hc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function m0(e,t,a){return Fr(t,e.child,null,a),e=Zd(t,t.pendingProps),e.flags|=2,ba(t),t.memoizedState=null,e}function qM(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ke){if(o.mode==="hidden")return e=Zd(t,o),t.lanes=536870912,xs(null,e);if(Ym(t),(e=je)?(e=Lv(e,Ga),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:_o,overflow:ko}:null,retryLane:536870912,hydrationErrors:null},a=Oy(e),a.return=t,t.child=a,Tt=t,je=null)):e=null,e===null)throw Jn(t);return t.lanes=536870912,null}return Zd(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(Ym(t),n)if(t.flags&256)t.flags&=-257,t=m0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(G(558));else if(mt||bi(e,t,a,!1),n=(a&e.childLanes)!==0,mt||n){if(o=He,o!==null&&(l=uy(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,jr(e,l),la(o,e,l),$g;wc(),t=m0(e,t,a)}else e=r.treeContext,je=Ya(l.nextSibling),Tt=t,ke=!0,Gn=null,Ga=!1,e!==null&&Hy(t,e),t=Zd(t,o),t.flags|=4096;return t}return e=nn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wd(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(G(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Qm(e,t,a,o,n){return Ur(t),a=Hg(e,t,a,o,void 0,n),o=Ug(),e!==null&&!mt?(Fg(e,t,n),cn(e,t,n)):(ke&&o&&Tg(t),t.flags|=1,Nt(e,t,a,n),t.child)}function g0(e,t,a,o,n,r){return Ur(t),t.updateQueue=null,a=Wy(t,o,a,n),Zy(e),o=Ug(),e!==null&&!mt?(Fg(e,t,r),cn(e,t,r)):(ke&&o&&Tg(t),t.flags|=1,Nt(e,t,a,r),t.child)}function h0(e,t,a,o,n){if(Ur(t),t.stateNode===null){var r=Zl,l=a.contextType;typeof l=="object"&&l!==null&&(r=At(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Km,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Pg(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?At(l):Zl,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(nm(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Km.enqueueReplaceState(r,r.state,null),_s(t,o,r,n),Ls(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=Vr(a,i);r.props=s;var u=r.context,d=a.contextType;l=Zl,typeof d=="object"&&d!==null&&(l=At(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||u!==l)&&u0(t,r,o,l),Dn=!1;var c=t.memoizedState;r.state=c,_s(t,o,r,n),Ls(),u=t.memoizedState,i||c!==u||Dn?(typeof f=="function"&&(nm(t,a,f,o),u=t.memoizedState),(s=Dn||s0(t,a,s,o,c,u,l))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Vm(e,t),l=t.memoizedProps,d=Vr(a,l),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,s=Zl,typeof u=="object"&&u!==null&&(s=At(u)),i=a.getDerivedStateFromProps,(u=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==f||c!==s)&&u0(t,r,o,s),Dn=!1,c=t.memoizedState,r.state=c,_s(t,o,r,n),Ls();var p=t.memoizedState;l!==f||c!==p||Dn||e!==null&&e.dependencies!==null&&uc(e.dependencies)?(typeof i=="function"&&(nm(t,a,i,o),p=t.memoizedState),(d=Dn||s0(t,a,d,o,c,p,s)||e!==null&&e.dependencies!==null&&uc(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Wd(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Fr(t,e.child,null,n),t.child=Fr(t,null,a,n)):Nt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=cn(e,t,n),e}function x0(e,t,a,o){return Hr(),t.flags|=256,Nt(e,t,a,o),t.child}var rm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lm(e){return{baseLanes:e,cachePool:Fy()}}function im(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wa),e}function Dw(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(ke){if(n?zn(t):Pn(t),(e=je)?(e=Lv(e,Ga),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:_o,overflow:ko}:null,retryLane:536870912,hydrationErrors:null},a=Oy(e),a.return=t,t.child=a,Tt=t,je=null)):e=null,e===null)throw Jn(t);return fg(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(Pn(t),n=t.mode,i=hc({mode:"hidden",children:i},n),o=zr(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=lm(a),o.childLanes=im(e,l,a),t.memoizedState=rm,xs(null,o)):(zn(t),Jm(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(zn(t),t.flags&=-257,t=sm(e,t,a)):t.memoizedState!==null?(Pn(t),t.child=e.child,t.flags|=128,t=null):(Pn(t),i=o.fallback,n=t.mode,o=hc({mode:"visible",children:o.children},n),i=zr(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Fr(t,e.child,null,a),o=t.child,o.memoizedState=lm(a),o.childLanes=im(e,l,a),t.memoizedState=rm,t=xs(null,o));else if(zn(t),fg(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var u=l.dgst;l=u,o=Error(G(419)),o.stack="",o.digest=l,Os({value:o,source:null,stack:null}),t=sm(e,t,a)}else if(mt||bi(e,t,a,!1),l=(a&e.childLanes)!==0,mt||l){if(l=He,l!==null&&(o=uy(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,jr(e,o),la(l,e,o),$g;cg(i)||wc(),t=sm(e,t,a)}else cg(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,je=Ya(i.nextSibling),Tt=t,ke=!0,Gn=null,Ga=!1,e!==null&&Hy(t,e),t=Jm(t,o.children),t.flags|=4096);return t}return n?(Pn(t),i=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=nn(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?i=nn(u,i):(i=zr(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,xs(null,o),o=t.child,i=e.child.memoizedState,i===null?i=lm(a):(n=i.cachePool,n!==null?(s=pt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Fy(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=im(e,l,a),t.memoizedState=rm,xs(e.child,o)):(zn(t),a=e.child,e=a.sibling,a=nn(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function Jm(e,t){return t=hc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hc(e,t){return e=ya(22,e,null,t),e.lanes=0,e}function sm(e,t,a){return Fr(t,e.child,null,a),e=Jm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b0(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Um(e.return,t,a)}function um(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Rw(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=st.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,qe(st,l),Nt(e,t,o,a),o=ke?Ps:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,a,t);else if(e.tag===19)b0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&fc(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),um(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&fc(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}um(t,!0,a,null,r,o);break;case"together":um(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function cn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(bi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,a=nn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=nn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Qg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&uc(e)))}function VM(e,t,a){switch(t.tag){case 3:ac(t,t.stateNode.containerInfo),Rn(t,pt,e.memoizedState.cache),Hr();break;case 27:case 5:Im(t);break;case 4:ac(t,t.stateNode.containerInfo);break;case 10:Rn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ym(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(zn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Dw(e,t,a):(zn(t),e=cn(e,t,a),e!==null?e.sibling:null);zn(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(bi(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Rw(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),qe(st,st.current),o)break;return null;case 22:return t.lanes=0,Aw(e,t,a,t.pendingProps);case 24:Rn(t,pt,e.memoizedState.cache)}return cn(e,t,a)}function zw(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Qg(e,a)&&(t.flags&128)===0)return mt=!1,VM(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,ke&&(t.flags&1048576)!==0&&By(t,Ps,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ar(t.elementType),t.type=e,typeof e=="function")Eg(e)?(o=Vr(e,o),t.tag=1,t=h0(null,t,e,o,a)):(t.tag=0,t=Qm(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===hg){t.tag=11,t=c0(null,t,e,o,a);break e}else if(n===xg){t.tag=14,t=f0(null,t,e,o,a);break e}}throw t=_m(e)||e,Error(G(306,t,""))}}return t;case 0:return Qm(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Vr(o,t.pendingProps),h0(e,t,o,n,a);case 3:e:{if(ac(t,t.stateNode.containerInfo),e===null)throw Error(G(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Vm(e,t),_s(t,o,null,a);var l=t.memoizedState;if(o=l.cache,Rn(t,pt,o),o!==r.cache&&Fm(t,[pt],a,!0),Ls(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=x0(e,t,o,a);break e}else if(o!==n){n=Va(Error(G(424)),t),Os(n),t=x0(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=Ya(e.firstChild),Tt=t,ke=!0,Gn=null,Ga=!0,a=Gy(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hr(),o===n){t=cn(e,t,a);break e}Nt(e,t,o,a)}t=t.child}return t;case 26:return Wd(e,t),e===null?(a=U0(t.type,null,t.pendingProps,null))?t.memoizedState=a:ke||(a=t.type,e=t.pendingProps,o=Lc(Vn.current).createElement(a),o[Et]=t,o[ia]=e,Dt(o,a,e),vt(o),t.stateNode=o):t.memoizedState=U0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Im(t),e===null&&ke&&(o=t.stateNode=_v(t.type,t.pendingProps,Vn.current),Tt=t,Ga=!0,n=je,or(t.type)?(pg=n,je=Ya(o.firstChild)):je=n),Nt(e,t,t.pendingProps.children,a),Wd(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ke&&((n=o=je)&&(o=x4(o,t.type,t.pendingProps,Ga),o!==null?(t.stateNode=o,Tt=t,je=Ya(o.firstChild),Ga=!1,n=!0):n=!1),n||Jn(t)),Im(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,ug(n,r)?o=null:l!==null&&ug(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=Hg(e,t,RM,null,null,a),Vs._currentValue=n),Wd(e,t),Nt(e,t,o,a),t.child;case 6:return e===null&&ke&&((e=a=je)&&(a=b4(a,t.pendingProps,Ga),a!==null?(t.stateNode=a,Tt=t,je=null,e=!0):e=!1),e||Jn(t)),null;case 13:return Dw(e,t,a);case 4:return ac(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Fr(t,null,o,a):Nt(e,t,o,a),t.child;case 11:return c0(e,t,t.type,t.pendingProps,a);case 7:return Nt(e,t,t.pendingProps,a),t.child;case 8:return Nt(e,t,t.pendingProps.children,a),t.child;case 12:return Nt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Rn(t,t.type,o.value),Nt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Ur(t),n=At(n),o=o(n),t.flags|=1,Nt(e,t,o,a),t.child;case 14:return f0(e,t,t.type,t.pendingProps,a);case 15:return Tw(e,t,t.type,t.pendingProps,a);case 19:return Rw(e,t,a);case 31:return qM(e,t,a);case 22:return Aw(e,t,a,t.pendingProps);case 24:return Ur(t),o=At(pt),e===null?(n=Rg(),n===null&&(n=He,r=Dg(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Pg(t),Rn(t,pt,n)):((e.lanes&a)!==0&&(Vm(e,t),_s(t,null,null,a),Ls()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Rn(t,pt,o)):(o=r.cache,Rn(t,pt,o),o!==n.cache&&Fm(t,[pt],a,!0))),Nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(G(156,t.tag))}function Wo(e){e.flags|=4}function dm(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(rv())e.flags|=8192;else throw Or=dc,zg}else e.flags&=-16777217}function y0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mv(t))if(rv())e.flags|=8192;else throw Or=dc,zg}function Dd(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ly():536870912,e.lanes|=t,ci|=t)}function ds(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function GM(e,t,a){var o=t.pendingProps;switch(Ag(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),rn(pt),ri(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pl(t)?Wo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tm())),Ye(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Wo(t),r!==null?(Ye(t),y0(t,r)):(Ye(t),dm(t,n,null,o,a))):r?r!==e.memoizedState?(Wo(t),Ye(t),y0(t,r)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Wo(t),Ye(t),dm(t,n,e,o,a)),null;case 27:if(oc(t),a=Vn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Wo(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}e=Mo.current,Pl(t)?Zb(t,e):(e=_v(n,o,a),t.stateNode=e,Wo(t))}return Ye(t),null;case 5:if(oc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Wo(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}if(r=Mo.current,Pl(t))Zb(t,r);else{var l=Lc(Vn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[Et]=t,r[ia]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Dt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Wo(t)}}return Ye(t),dm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Wo(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(G(166));if(e=Vn.current,Pl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Tt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Et]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||vv(e.nodeValue,a)),e||Jn(t,!0)}else e=Lc(e).createTextNode(o),e[Et]=t,t.stateNode=e}return Ye(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Pl(t),a!==null){if(e===null){if(!o)throw Error(G(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(557));e[Et]=t}else Hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else a=tm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ba(t),t):(ba(t),null);if((t.flags&128)!==0)throw Error(G(558))}return Ye(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Pl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(G(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(G(317));n[Et]=t}else Hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),n=!1}else n=tm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ba(t),t):(ba(t),null)}return ba(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Dd(t,t.updateQueue),Ye(t),null);case 4:return ri(),e===null&&rh(t.stateNode.containerInfo),Ye(t),null;case 10:return rn(t.type),Ye(t),null;case 19:if(Ct(st),o=t.memoizedState,o===null)return Ye(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)ds(o,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=fc(e),r!==null){for(t.flags|=128,ds(o,!1),e=r.updateQueue,t.updateQueue=e,Dd(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Py(a,e),a=a.sibling;return qe(st,st.current&1|2),ke&&Jo(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&va()>bc&&(t.flags|=128,n=!0,ds(o,!1),t.lanes=4194304)}else{if(!n)if(e=fc(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Dd(t,e),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!ke)return Ye(t),null}else 2*va()-o.renderingStartTime>bc&&a!==536870912&&(t.flags|=128,n=!0,ds(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=va(),e.sibling=null,a=st.current,qe(st,n?a&1|2:a&1),ke&&Jo(t,o.treeForkCount),e):(Ye(t),null);case 22:case 23:return ba(t),Og(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),a=t.updateQueue,a!==null&&Dd(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&Ct(Pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),rn(pt),Ye(t),null;case 25:return null;case 30:return null}throw Error(G(156,t.tag))}function XM(e,t){switch(Ag(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(pt),ri(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oc(t),null;case 31:if(t.memoizedState!==null){if(ba(t),t.alternate===null)throw Error(G(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ba(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ct(st),null;case 4:return ri(),null;case 10:return rn(t.type),null;case 22:case 23:return ba(t),Og(),e!==null&&Ct(Pr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return rn(pt),null;case 25:return null;default:return null}}function Pw(e,t){switch(Ag(t),t.tag){case 3:rn(pt),ri();break;case 26:case 27:case 5:oc(t);break;case 4:ri();break;case 31:t.memoizedState!==null&&ba(t);break;case 13:ba(t);break;case 19:Ct(st);break;case 10:rn(t.type);break;case 22:case 23:ba(t),Og(),e!==null&&Ct(Pr);break;case 24:rn(pt)}}function eu(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){De(t,t.return,i)}}function er(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,u=i;try{u()}catch(d){De(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){De(t,t.return,d)}}function Ow(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yy(t,a)}catch(o){De(e,e.return,o)}}}function Bw(e,t,a){a.props=Vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){De(e,t,o)}}function Is(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){De(e,t,n)}}function Io(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){De(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){De(e,t,n)}else a.current=null}function Hw(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){De(e,e.return,n)}}function cm(e,t,a){try{var o=e.stateNode;c4(o,e.type,a,t),o[ia]=t}catch(n){De(e,e.return,n)}}function Uw(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&or(e.type)||e.tag===4}function fm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&or(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eg(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=an));else if(o!==4&&(o===27&&or(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(eg(e,t,a),e=e.sibling;e!==null;)eg(e,t,a),e=e.sibling}function xc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&or(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xc(e,t,a),e=e.sibling;e!==null;)xc(e,t,a),e=e.sibling}function Fw(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Dt(t,o,a),t[Et]=e,t[ia]=a}catch(r){De(e,e.return,r)}}var en=!1,ft=!1,pm=!1,w0=typeof WeakSet=="function"?WeakSet:Set,wt=null;function YM(e,t){if(e=e.containerInfo,ig=Mc,e=My(e),Ig(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(i=l+n),f!==r||o!==0&&f.nodeType!==3||(s=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(i=l),c===r&&++d===o&&(s=l),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(sg={focusedElem:e,selectionRange:a},Mc=!1,wt=t;wt!==null;)if(t=wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,wt=e;else for(;wt!==null;){switch(t=wt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Vr(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(y){De(a,a.return,y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)dg(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dg(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(G(163))}if(e=t.sibling,e!==null){e.return=t.return,wt=e;break}wt=t.return}}function qw(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$o(e,a),o&4&&eu(5,a);break;case 1:if($o(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){De(a,a.return,l)}else{var n=Vr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){De(a,a.return,l)}}o&64&&Ow(a),o&512&&Is(a,a.return);break;case 3:if($o(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yy(e,t)}catch(l){De(a,a.return,l)}}break;case 27:t===null&&o&4&&Fw(a);case 26:case 5:$o(e,a),t===null&&o&4&&Hw(a),o&512&&Is(a,a.return);break;case 12:$o(e,a);break;case 31:$o(e,a),o&4&&Xw(e,a);break;case 13:$o(e,a),o&4&&Yw(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=t4.bind(null,a),y4(e,a))));break;case 22:if(o=a.memoizedState!==null||en,!o){t=t!==null&&t.memoizedState!==null||ft,n=en;var r=ft;en=o,(ft=t)&&!r?Qo(e,a,(a.subtreeFlags&8772)!==0):$o(e,a),en=n,ft=r}break;case 30:break;default:$o(e,a)}}function Vw(e){var t=e.alternate;t!==null&&(e.alternate=null,Vw(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,na=!1;function Ko(e,t,a){for(a=a.child;a!==null;)Gw(e,t,a),a=a.sibling}function Gw(e,t,a){if(Ca&&typeof Ca.onCommitFiberUnmount=="function")try{Ca.onCommitFiberUnmount(js,a)}catch{}switch(a.tag){case 26:ft||Io(a,t),Ko(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ft||Io(a,t);var o=Je,n=na;or(a.type)&&(Je=a.stateNode,na=!1),Ko(e,t,a),Ts(a.stateNode),Je=o,na=n;break;case 5:ft||Io(a,t);case 6:if(o=Je,n=na,Je=null,Ko(e,t,a),Je=o,na=n,Je!==null)if(na)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(r){De(a,t,r)}else try{Je.removeChild(a.stateNode)}catch(r){De(a,t,r)}break;case 18:Je!==null&&(na?(e=Je,z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gi(e)):z0(Je,a.stateNode));break;case 4:o=Je,n=na,Je=a.stateNode.containerInfo,na=!0,Ko(e,t,a),Je=o,na=n;break;case 0:case 11:case 14:case 15:er(2,a,t),ft||er(4,a,t),Ko(e,t,a);break;case 1:ft||(Io(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Bw(a,t,o)),Ko(e,t,a);break;case 21:Ko(e,t,a);break;case 22:ft=(o=ft)||a.memoizedState!==null,Ko(e,t,a),ft=o;break;default:Ko(e,t,a)}}function Xw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gi(e)}catch(a){De(t,t.return,a)}}}function Yw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(a){De(t,t.return,a)}}function jM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new w0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new w0),t;default:throw Error(G(435,e.tag))}}function Rd(e,t){var a=jM(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=a4.bind(null,e,o);o.then(n,n)}})}function aa(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(or(i.type)){Je=i.stateNode,na=!1;break e}break;case 5:Je=i.stateNode,na=!1;break e;case 3:case 4:Je=i.stateNode.containerInfo,na=!0;break e}i=i.return}if(Je===null)throw Error(G(160));Gw(r,l,n),Je=null,na=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jw(t,e),t=t.sibling}var lo=null;function jw(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:aa(t,e),oa(e),o&4&&(er(3,e,e.return),eu(3,e),er(5,e,e.return));break;case 1:aa(t,e),oa(e),o&512&&(ft||a===null||Io(a,a.return)),o&64&&en&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=lo;if(aa(t,e),oa(e),o&512&&(ft||a===null||Io(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Ks]||r[Et]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Dt(r,o,a),r[Et]=e,vt(r),o=r;break e;case"link":var l=q0("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),Dt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=q0("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),Dt(r,o,a),n.head.appendChild(r);break;default:throw Error(G(468,o))}r[Et]=e,vt(r),o=r}e.stateNode=o}else V0(n,e.type,e.stateNode);else e.stateNode=F0(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?V0(n,e.type,e.stateNode):F0(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cm(e,e.memoizedProps,a.memoizedProps)}break;case 27:aa(t,e),oa(e),o&512&&(ft||a===null||Io(a,a.return)),a!==null&&o&4&&cm(e,e.memoizedProps,a.memoizedProps);break;case 5:if(aa(t,e),oa(e),o&512&&(ft||a===null||Io(a,a.return)),e.flags&32){n=e.stateNode;try{ii(n,"")}catch(g){De(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,cm(e,n,a!==null?a.memoizedProps:n)),o&1024&&(pm=!0);break;case 6:if(aa(t,e),oa(e),o&4){if(e.stateNode===null)throw Error(G(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){De(e,e.return,g)}}break;case 3:if(Qd=null,n=lo,lo=_c(t.containerInfo),aa(t,e),lo=n,oa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(g){De(e,e.return,g)}pm&&(pm=!1,Zw(e));break;case 4:o=lo,lo=_c(e.stateNode.containerInfo),aa(t,e),oa(e),lo=o;break;case 12:aa(t,e),oa(e);break;case 31:aa(t,e),oa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rd(e,o)));break;case 13:aa(t,e),oa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fc=va()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rd(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=en,d=ft;if(en=u||n,ft=d||s,aa(t,e),ft=d,en=u,oa(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||en||ft||Dr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;i.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){De(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){De(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?P0(p,!0):P0(s.stateNode,!1)}catch(g){De(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Rd(e,a))));break;case 19:aa(t,e),oa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rd(e,o)));break;case 30:break;case 21:break;default:aa(t,e),oa(e)}}function oa(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Uw(o)){a=o;break}o=o.return}if(a==null)throw Error(G(160));switch(a.tag){case 27:var n=a.stateNode,r=fm(e);xc(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(ii(l,""),a.flags&=-33);var i=fm(e);xc(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,u=fm(e);eg(e,u,s);break;default:throw Error(G(161))}}catch(d){De(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zw(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zw(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $o(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qw(e,t.alternate,t),t=t.sibling}function Dr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:er(4,t,t.return),Dr(t);break;case 1:Io(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Bw(t,t.return,a),Dr(t);break;case 27:Ts(t.stateNode);case 26:case 5:Io(t,t.return),Dr(t);break;case 22:t.memoizedState===null&&Dr(t);break;case 30:Dr(t);break;default:Dr(t)}e=e.sibling}}function Qo(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:Qo(n,r,a),eu(4,r);break;case 1:if(Qo(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){De(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Xy(s[n],i)}catch(u){De(o,o.return,u)}}a&&l&64&&Ow(r),Is(r,r.return);break;case 27:Fw(r);case 26:case 5:Qo(n,r,a),a&&o===null&&l&4&&Hw(r),Is(r,r.return);break;case 12:Qo(n,r,a);break;case 31:Qo(n,r,a),a&&l&4&&Xw(n,r);break;case 13:Qo(n,r,a),a&&l&4&&Yw(n,r);break;case 22:r.memoizedState===null&&Qo(n,r,a),Is(r,r.return);break;case 30:break;default:Qo(n,r,a)}t=t.sibling}}function Jg(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qs(a))}function eh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qs(e))}function ro(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ww(e,t,a,o),t=t.sibling}function Ww(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:ro(e,t,a,o),n&2048&&eu(9,t);break;case 1:ro(e,t,a,o);break;case 3:ro(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qs(e)));break;case 12:if(n&2048){ro(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){De(t,t.return,s)}}else ro(e,t,a,o);break;case 31:ro(e,t,a,o);break;case 13:ro(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?ro(e,t,a,o):Ms(e,t):r._visibility&2?ro(e,t,a,o):(r._visibility|=2,Bl(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Jg(l,t);break;case 24:ro(e,t,a,o),n&2048&&eh(t.alternate,t);break;default:ro(e,t,a,o)}}function Bl(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,u=l.flags;switch(l.tag){case 0:case 11:case 15:Bl(r,l,i,s,n),eu(8,l);break;case 23:break;case 22:var d=l.stateNode;l.memoizedState!==null?d._visibility&2?Bl(r,l,i,s,n):Ms(r,l):(d._visibility|=2,Bl(r,l,i,s,n)),n&&u&2048&&Jg(l.alternate,l);break;case 24:Bl(r,l,i,s,n),n&&u&2048&&eh(l.alternate,l);break;default:Bl(r,l,i,s,n)}t=t.sibling}}function Ms(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:Ms(a,o),n&2048&&Jg(o.alternate,o);break;case 24:Ms(a,o),n&2048&&eh(o.alternate,o);break;default:Ms(a,o)}t=t.sibling}}var bs=8192;function Ol(e,t,a){if(e.subtreeFlags&bs)for(e=e.child;e!==null;)Kw(e,t,a),e=e.sibling}function Kw(e,t,a){switch(e.tag){case 26:Ol(e,t,a),e.flags&bs&&e.memoizedState!==null&&T4(a,lo,e.memoizedState,e.memoizedProps);break;case 5:Ol(e,t,a);break;case 3:case 4:var o=lo;lo=_c(e.stateNode.containerInfo),Ol(e,t,a),lo=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bs,bs=16777216,Ol(e,t,a),bs=o):Ol(e,t,a));break;default:Ol(e,t,a)}}function $w(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];wt=o,Jw(o,e)}$w(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qw(e),e=e.sibling}function Qw(e){switch(e.tag){case 0:case 11:case 15:cs(e),e.flags&2048&&er(9,e,e.return);break;case 3:cs(e);break;case 12:cs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Kd(e)):cs(e);break;default:cs(e)}}function Kd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];wt=o,Jw(o,e)}$w(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:er(8,t,t.return),Kd(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Kd(t));break;default:Kd(t)}e=e.sibling}}function Jw(e,t){for(;wt!==null;){var a=wt;switch(a.tag){case 0:case 11:case 15:er(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wt=o;else e:for(a=e;wt!==null;){o=wt;var n=o.sibling,r=o.return;if(Vw(o),o===a){wt=null;break e}if(n!==null){n.return=r,wt=n;break e}wt=r}}}var ZM={getCacheForType:function(e){var t=At(pt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return At(pt).controller.signal}},WM=typeof WeakMap=="function"?WeakMap:Map,Ne=0,He=null,Ce=null,Le=0,Ae=0,xa=null,Un=!1,wi=!1,th=!1,fn=0,nt=0,tr=0,Br=0,ah=0,wa=0,ci=0,Ns=null,ra=null,tg=!1,Fc=0,ev=0,bc=1/0,yc=null,jn=null,xt=0,Zn=null,fi=null,ln=0,ag=0,og=null,tv=null,Es=0,ng=null;function La(){return(Ne&2)!==0&&Le!==0?Le&-Le:le.T!==null?nh():dy()}function av(){if(wa===0)if((Le&536870912)===0||ke){var e=Ld;Ld<<=1,(Ld&3932160)===0&&(Ld=262144),wa=e}else wa=536870912;return e=ka.current,e!==null&&(e.flags|=32),wa}function la(e,t,a){(e===He&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(pi(e,0),Fn(e,Le,wa,!1)),Ws(e,a),((Ne&2)===0||e!==He)&&(e===He&&((Ne&2)===0&&(Br|=a),nt===4&&Fn(e,Le,wa,!1)),Eo(e))}function ov(e,t,a){if((Ne&6)!==0)throw Error(G(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Zs(e,t),n=o?QM(e,t):mm(e,t,!0),r=o;do{if(n===0){wi&&!o&&Fn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!KM(a)){n=mm(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Ns;var s=i.current.memoizedState.isDehydrated;if(s&&(pi(i,l).flags|=256),l=mm(i,l,!1),l!==2){if(th&&!s){i.errorRecoveryDisabledLanes|=r,Br|=r,n=4;break e}r=ra,ra=n,r!==null&&(ra===null?ra=r:ra.push.apply(ra,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){pi(e,0),Fn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(G(345));case 4:if((t&4194048)!==t)break;case 6:Fn(o,t,wa,!Un);break e;case 2:ra=null;break;case 3:case 5:break;default:throw Error(G(329))}if((t&62914560)===t&&(n=Fc+300-va(),10<n)){if(Fn(o,t,wa,!Un),Ec(o,0,!0)!==0)break e;ln=t,o.timeoutHandle=Sv(v0.bind(null,o,a,ra,yc,tg,t,wa,Br,ci,Un,r,"Throttled",-0,0),n);break e}v0(o,a,ra,yc,tg,t,wa,Br,ci,Un,r,null,-0,0)}}break}while(!0);Eo(e)}function v0(e,t,a,o,n,r,l,i,s,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Kw(t,r,f);var g=(r&62914560)===r?Fc-va():(r&4194048)===r?ev-va():0;if(g=A4(f,g),g!==null){ln=r,e.cancelPendingCommit=g(S0.bind(null,e,t,r,a,o,n,l,i,s,d,f,null,c,p)),Fn(e,r,l,!u);return}}S0(e,t,r,a,o,n,l,i,s)}function KM(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!_a(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fn(e,t,a,o){t&=~ah,t&=~Br,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-Sa(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&iy(e,a,t)}function qc(){return(Ne&6)===0?(tu(0,!1),!1):!0}function oh(){if(Ce!==null){if(Ae===0)var e=Ce.return;else e=Ce,on=Zr=null,qg(e),ai=null,Bs=0,e=Ce;for(;e!==null;)Pw(e.alternate,e),e=e.return;Ce=null}}function pi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,m4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ln=0,oh(),He=e,Ce=a=nn(e.current,null),Le=t,Ae=0,xa=null,Un=!1,wi=Zs(e,t),th=!1,ci=wa=ah=Br=tr=nt=0,ra=Ns=null,tg=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-Sa(o),r=1<<n;t|=e[n],o&=~r}return fn=t,Rc(),a}function nv(e,t){ge=null,le.H=Us,t===yi||t===Pc?(t=Jb(),Ae=3):t===zg?(t=Jb(),Ae=4):Ae=t===$g?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xa=t,Ce===null&&(nt=1,gc(e,Va(t,e.current)))}function rv(){var e=ka.current;return e===null?!0:(Le&4194048)===Le?Xa===null:(Le&62914560)===Le||(Le&536870912)!==0?e===Xa:!1}function lv(){var e=le.H;return le.H=Us,e===null?Us:e}function iv(){var e=le.A;return le.A=ZM,e}function wc(){nt=4,Un||(Le&4194048)!==Le&&ka.current!==null||(wi=!0),(tr&134217727)===0&&(Br&134217727)===0||He===null||Fn(He,Le,wa,!1)}function mm(e,t,a){var o=Ne;Ne|=2;var n=lv(),r=iv();(He!==e||Le!==t)&&(yc=null,pi(e,t)),t=!1;var l=nt;e:do try{if(Ae!==0&&Ce!==null){var i=Ce,s=xa;switch(Ae){case 8:oh(),l=6;break e;case 3:case 2:case 9:case 6:ka.current===null&&(t=!0);var u=Ae;if(Ae=0,xa=null,$l(e,i,s,u),a&&wi){l=0;break e}break;default:u=Ae,Ae=0,xa=null,$l(e,i,s,u)}}$M(),l=nt;break}catch(d){nv(e,d)}while(!0);return t&&e.shellSuspendCounter++,on=Zr=null,Ne=o,le.H=n,le.A=r,Ce===null&&(He=null,Le=0,Rc()),l}function $M(){for(;Ce!==null;)sv(Ce)}function QM(e,t){var a=Ne;Ne|=2;var o=lv(),n=iv();He!==e||Le!==t?(yc=null,bc=va()+500,pi(e,t)):wi=Zs(e,t);e:do try{if(Ae!==0&&Ce!==null){t=Ce;var r=xa;t:switch(Ae){case 1:Ae=0,xa=null,$l(e,t,r,1);break;case 2:case 9:if(Qb(r)){Ae=0,xa=null,C0(t);break}t=function(){Ae!==2&&Ae!==9||He!==e||(Ae=7),Eo(e)},r.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Qb(r)?(Ae=0,xa=null,C0(t)):(Ae=0,xa=null,$l(e,t,r,7));break;case 5:var l=null;switch(Ce.tag){case 26:l=Ce.memoizedState;case 5:case 27:var i=Ce;if(l?Mv(l):i.stateNode.complete){Ae=0,xa=null;var s=i.sibling;if(s!==null)Ce=s;else{var u=i.return;u!==null?(Ce=u,Vc(u)):Ce=null}break t}}Ae=0,xa=null,$l(e,t,r,5);break;case 6:Ae=0,xa=null,$l(e,t,r,6);break;case 8:oh(),nt=6;break e;default:throw Error(G(462))}}JM();break}catch(d){nv(e,d)}while(!0);return on=Zr=null,le.H=o,le.A=n,Ne=a,Ce!==null?0:(He=null,Le=0,Rc(),nt)}function JM(){for(;Ce!==null&&!C5();)sv(Ce)}function sv(e){var t=zw(e.alternate,e,fn);e.memoizedProps=e.pendingProps,t===null?Vc(e):Ce=t}function C0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=g0(a,t,t.pendingProps,t.type,void 0,Le);break;case 11:t=g0(a,t,t.pendingProps,t.type.render,t.ref,Le);break;case 5:qg(t);default:Pw(a,t),t=Ce=Py(t,fn),t=zw(a,t,fn)}e.memoizedProps=e.pendingProps,t===null?Vc(e):Ce=t}function $l(e,t,a,o){on=Zr=null,qg(t),ai=null,Bs=0;var n=t.return;try{if(FM(e,n,t,a,Le)){nt=1,gc(e,Va(a,e.current)),Ce=null;return}}catch(r){if(n!==null)throw Ce=n,r;nt=1,gc(e,Va(a,e.current)),Ce=null;return}t.flags&32768?(ke||o===1?e=!0:wi||(Le&536870912)!==0?e=!1:(Un=e=!0,(o===2||o===9||o===3||o===6)&&(o=ka.current,o!==null&&o.tag===13&&(o.flags|=16384))),uv(t,e)):Vc(t)}function Vc(e){var t=e;do{if((t.flags&32768)!==0){uv(t,Un);return}e=t.return;var a=GM(t.alternate,t,fn);if(a!==null){Ce=a;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);nt===0&&(nt=5)}function uv(e,t){do{var a=XM(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);nt=6,Ce=null}function S0(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do Gc();while(xt!==0);if((Ne&6)!==0)throw Error(G(327));if(t!==null){if(t===e.current)throw Error(G(177));if(r=t.lanes|t.childLanes,r|=Mg,A5(e,a,r,l,i,s),e===He&&(Ce=He=null,Le=0),fi=t,Zn=e,ln=a,ag=r,og=n,tv=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,o4(nc,function(){return mv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=le.T,le.T=null,n=Ee.p,Ee.p=2,l=Ne,Ne|=4;try{YM(e,t,a)}finally{Ne=l,Ee.p=n,le.T=o}}xt=1,dv(),cv(),fv()}}function dv(){if(xt===1){xt=0;var e=Zn,t=fi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=le.T,le.T=null;var o=Ee.p;Ee.p=2;var n=Ne;Ne|=4;try{jw(t,e);var r=sg,l=My(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&Iy(i.ownerDocument.documentElement,i)){if(s!==null&&Ig(i)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(d,i.value.length);else{var f=i.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=i.textContent.length,y=Math.min(s.start,g),w=s.end===void 0?y:Math.min(s.end,g);!p.extend&&y>w&&(l=w,w=y,y=l);var h=Xb(i,y),x=Xb(i,w);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),y>w?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=i;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<f.length;i++){var b=f[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Mc=!!ig,sg=ig=null}finally{Ne=n,Ee.p=o,le.T=a}}e.current=t,xt=2}}function cv(){if(xt===2){xt=0;var e=Zn,t=fi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var o=Ee.p;Ee.p=2;var n=Ne;Ne|=4;try{qw(e,t.alternate,t)}finally{Ne=n,Ee.p=o,le.T=a}}xt=3}}function fv(){if(xt===4||xt===3){xt=0,S5();var e=Zn,t=fi,a=ln,o=tv;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,fi=Zn=null,pv(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(jn=null),wg(a),t=t.stateNode,Ca&&typeof Ca.onCommitFiberRoot=="function")try{Ca.onCommitFiberRoot(js,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=le.T,n=Ee.p,Ee.p=2,le.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{le.T=t,Ee.p=n}}(ln&3)!==0&&Gc(),Eo(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===ng?Es++:(Es=0,ng=e):Es=0,tu(0,!1)}}function pv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qs(t)))}function Gc(){return dv(),cv(),fv(),mv()}function mv(){if(xt!==5)return!1;var e=Zn,t=ag;ag=0;var a=wg(ln),o=le.T,n=Ee.p;try{Ee.p=32>a?32:a,le.T=null,a=og,og=null;var r=Zn,l=ln;if(xt=0,fi=Zn=null,ln=0,(Ne&6)!==0)throw Error(G(331));var i=Ne;if(Ne|=4,Qw(r.current),Ww(r,r.current,l,a),Ne=i,tu(0,!1),Ca&&typeof Ca.onPostCommitFiberRoot=="function")try{Ca.onPostCommitFiberRoot(js,r)}catch{}return!0}finally{Ee.p=n,le.T=o,pv(e,t)}}function L0(e,t,a){t=Va(a,t),t=$m(e.stateNode,t,2),e=Yn(e,t,2),e!==null&&(Ws(e,2),Eo(e))}function De(e,t,a){if(e.tag===3)L0(e,e,a);else for(;t!==null;){if(t.tag===3){L0(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(jn===null||!jn.has(o))){e=Va(a,e),a=Nw(2),o=Yn(t,a,2),o!==null&&(Ew(a,o,t,e),Ws(o,2),Eo(o));break}}t=t.return}}function gm(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new WM;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(th=!0,n.add(a),e=e4.bind(null,e,t,a),t.then(e,e))}function e4(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(Le&a)===a&&(nt===4||nt===3&&(Le&62914560)===Le&&300>va()-Fc?(Ne&2)===0&&pi(e,0):ah|=a,ci===Le&&(ci=0)),Eo(e)}function gv(e,t){t===0&&(t=ly()),e=jr(e,t),e!==null&&(Ws(e,t),Eo(e))}function t4(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),gv(e,a)}function a4(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(G(314))}o!==null&&o.delete(t),gv(e,a)}function o4(e,t){return bg(e,t)}var vc=null,Hl=null,rg=!1,Cc=!1,hm=!1,qn=0;function Eo(e){e!==Hl&&e.next===null&&(Hl===null?vc=Hl=e:Hl=Hl.next=e),Cc=!0,rg||(rg=!0,r4())}function tu(e,t){if(!hm&&Cc){hm=!0;do for(var a=!1,o=vc;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-Sa(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,_0(o,r))}else r=Le,r=Ec(o,o===He?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Zs(o,r)||(a=!0,_0(o,r));o=o.next}while(a);hm=!1}}function n4(){hv()}function hv(){Cc=rg=!1;var e=0;qn!==0&&p4()&&(e=qn);for(var t=va(),a=null,o=vc;o!==null;){var n=o.next,r=xv(o,t);r===0?(o.next=null,a===null?vc=n:a.next=n,n===null&&(Hl=a)):(a=o,(e!==0||(r&3)!==0)&&(Cc=!0)),o=n}xt!==0&&xt!==5||tu(e,!1),qn!==0&&(qn=0)}function xv(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-Sa(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=T5(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=He,a=Le,a=Ec(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xp(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Xp(o),wg(a)){case 2:case 8:a=ny;break;case 32:a=nc;break;case 268435456:a=ry;break;default:a=nc}return o=bv.bind(null,e),a=bg(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Xp(o),e.callbackPriority=2,e.callbackNode=null,2}function bv(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gc()&&e.callbackNode!==a)return null;var o=Le;return o=Ec(e,e===He?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ov(e,o,t),xv(e,va()),e.callbackNode!=null&&e.callbackNode===a?bv.bind(null,e):null)}function _0(e,t){if(Gc())return null;ov(e,t,!0)}function r4(){g4(function(){(Ne&6)!==0?bg(oy,n4):hv()})}function nh(){if(qn===0){var e=si;e===0&&(e=Sd,Sd<<=1,(Sd&261888)===0&&(Sd=256)),qn=e}return qn}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fd(""+e)}function I0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function l4(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=k0((n[ia]||null).action),l=o.submitter;l&&(t=(t=l[ia]||null)?k0(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new Tc("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qn!==0){var s=l?I0(n,l):new FormData(n);Wm(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?I0(n,l):new FormData(n),Wm(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(zd=0;zd<Om.length;zd++)Pd=Om[zd],M0=Pd.toLowerCase(),N0=Pd[0].toUpperCase()+Pd.slice(1),io(M0,"on"+N0);var Pd,M0,N0,zd;io(Ey,"onAnimationEnd");io(Ty,"onAnimationIteration");io(Ay,"onAnimationStart");io("dblclick","onDoubleClick");io("focusin","onFocus");io("focusout","onBlur");io(LM,"onTransitionRun");io(_M,"onTransitionStart");io(kM,"onTransitionCancel");io(Dy,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fs));function yv(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(d){lc(d)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(d){lc(d)}n.currentTarget=null,r=s}}}}function ve(e,t){var a=t[Nm];a===void 0&&(a=t[Nm]=new Set);var o=e+"__bubble";a.has(o)||(wv(t,e,2,!1),a.add(o))}function xm(e,t,a){var o=0;t&&(o|=4),wv(a,e,o,t)}var Od="_reactListening"+Math.random().toString(36).slice(2);function rh(e){if(!e[Od]){e[Od]=!0,cy.forEach(function(a){a!=="selectionchange"&&(i4.has(a)||xm(a,!1,e),xm(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Od]||(t[Od]=!0,xm("selectionchange",!1,t))}}function wv(e,t,a,o){switch(Dv(t)){case 2:var n=z4;break;case 8:n=P4;break;default:n=uh}a=n.bind(null,t,a,e),n=void 0,!Rm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function bm(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=ql(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}yy(function(){var u=r,d=Sg(a),f=[];e:{var c=Ry.get(e);if(c!==void 0){var p=Tc,g=e;switch(e){case"keypress":if(Vd(a)===0)break e;case"keydown":case"keyup":p=aM;break;case"focusin":g="focus",p=Kp;break;case"focusout":g="blur",p=Kp;break;case"beforeblur":case"afterblur":p=Kp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=G5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rM;break;case Ey:case Ty:case Ay:p=j5;break;case Dy:p=iM;break;case"scroll":case"scrollend":p=q5;break;case"wheel":p=uM;break;case"copy":case"cut":case"paste":p=W5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bb;break;case"toggle":case"beforetoggle":p=cM}var y=(t&4)!==0,w=!y&&(e==="scroll"||e==="scrollend"),h=y?c!==null?c+"Capture":null:c;y=[];for(var x=u,m;x!==null;){var b=x;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||h===null||(b=Ds(x,h),b!=null&&y.push(qs(x,b,m))),w)break;x=x.return}0<y.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:y}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Dm&&(g=a.relatedTarget||a.fromElement)&&(ql(g)||g[hi]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?ql(g):null,g!==null&&(w=Ys(g),y=g.tag,g!==w||y!==5&&y!==27&&y!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Pb,b="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Bb,b="onPointerLeave",h="onPointerEnter",x="pointer"),w=p==null?c:hs(p),m=g==null?c:hs(g),c=new y(b,x+"leave",p,a,d),c.target=w,c.relatedTarget=m,b=null,ql(d)===u&&(y=new y(h,x+"enter",g,a,d),y.target=m,y.relatedTarget=w,b=y),w=b,p&&g)t:{for(y=s4,h=p,x=g,m=0,b=h;b;b=y(b))m++;b=0;for(var S=x;S;S=y(S))b++;for(;0<m-b;)h=y(h),m--;for(;0<b-m;)x=y(x),b--;for(;m--;){if(h===x||x!==null&&h===x.alternate){y=h;break t}h=y(h),x=y(x)}y=null}else y=null;p!==null&&E0(f,c,p,y,!1),g!==null&&w!==null&&E0(f,w,g,y,!0)}}e:{if(c=u?hs(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=qb;else if(Fb(c))if(_y)C=vM;else{C=yM;var v=bM}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Cg(u.elementType)&&(C=qb):C=wM;if(C&&(C=C(e,u))){Ly(f,C,a,d);break e}v&&v(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Am(c,"number",c.value)}switch(v=u?hs(u):window,e){case"focusin":(Fb(v)||v.contentEditable==="true")&&(Xl=v,zm=u,vs=null);break;case"focusout":vs=zm=Xl=null;break;case"mousedown":Pm=!0;break;case"contextmenu":case"mouseup":case"dragend":Pm=!1,Yb(f,a,d);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":Yb(f,a,d)}var _;if(kg)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Gl?Cy(e,a)&&(k="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(k="onCompositionStart");k&&(vy&&a.locale!=="ko"&&(Gl||k!=="onCompositionStart"?k==="onCompositionEnd"&&Gl&&(_=wy()):(Hn=d,Lg="value"in Hn?Hn.value:Hn.textContent,Gl=!0)),v=Sc(u,k),0<v.length&&(k=new Ob(k,e,null,a,d),f.push({event:k,listeners:v}),_?k.data=_:(_=Sy(a),_!==null&&(k.data=_)))),(_=pM?mM(e,a):gM(e,a))&&(k=Sc(u,"onBeforeInput"),0<k.length&&(v=new Ob("onBeforeInput","beforeinput",null,a,d),f.push({event:v,listeners:k}),v.data=_)),l4(f,e,u,a,d)}yv(f,t)})}function qs(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Sc(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Ds(e,a),n!=null&&o.unshift(qs(e,n,r)),n=Ds(e,t),n!=null&&o.push(qs(e,n,r))),e.tag===3)return o;e=e.return}return[]}function s4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function E0(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,u=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||u===null||(s=u,n?(u=Ds(a,r),u!=null&&l.unshift(qs(a,u,s))):n||(u=Ds(a,r),u!=null&&l.push(qs(a,u,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var u4=/\r\n?/g,d4=/\u0000|\uFFFD/g;function T0(e){return(typeof e=="string"?e:""+e).replace(u4,`
`).replace(d4,"")}function vv(e,t){return t=T0(t),T0(e)===t}function Pe(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ii(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ii(e,""+o);break;case"className":kd(e,"class",o);break;case"tabIndex":kd(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kd(e,a,o);break;case"style":by(e,o,r);break;case"data":if(t!=="object"){kd(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Fd(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Pe(e,t,"name",n.name,n,null),Pe(e,t,"formEncType",n.formEncType,n,null),Pe(e,t,"formMethod",n.formMethod,n,null),Pe(e,t,"formTarget",n.formTarget,n,null)):(Pe(e,t,"encType",n.encType,n,null),Pe(e,t,"method",n.method,n,null),Pe(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Fd(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=an);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Fd(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ud(e,"popover",o);break;case"xlinkActuate":Zo(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zo(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zo(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zo(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zo(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zo(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zo(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zo(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zo(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ud(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=U5.get(a)||a,Ud(e,a,o))}}function lg(e,t,a,o,n,r){switch(a){case"style":by(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ii(e,o):(typeof o=="number"||typeof o=="bigint")&&ii(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=an);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[ia]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ud(e,a,o)}}}function Dt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:Pe(e,t,r,l,a,null)}}n&&Pe(e,t,"srcSet",a.srcSet,a,null),o&&Pe(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var i=r=l=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":l=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(G(137,t));break;default:Pe(e,t,o,d,a,null)}}gy(e,r,i,s,u,l,n,!1);return;case"select":ve("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:Pe(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?Jl(e,!!o,t,!1):a!=null&&Jl(e,!!o,a,!0);return;case"textarea":ve("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(G(91));break;default:Pe(e,t,l,i,a,null)}xy(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Pe(e,t,s,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Fs.length;o++)ve(Fs[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:Pe(e,t,u,o,a,null)}return;default:if(Cg(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&lg(e,t,d,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Pe(e,t,i,o,a,null))}function c4(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Pe(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":l=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(G(137,t));break;default:p!==f&&Pe(e,t,c,p,o,f)}}Tm(e,l,i,s,u,d,r,n);return;case"select":p=l=i=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Pe(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&Pe(e,t,n,r,o,s)}t=i,a=l,o=p,c!=null?Jl(e,!!a,c,!1):!!o!=!!a&&(t!=null?Jl(e,!!a,t,!0):Jl(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Pe(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(G(91));break;default:n!==r&&Pe(e,t,l,n,o,r)}hy(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Pe(e,t,g,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Pe(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!=null&&!o.hasOwnProperty(y)&&Pe(e,t,y,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(G(137,t));break;default:Pe(e,t,u,c,o,p)}return;default:if(Cg(t)){for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!==void 0&&!o.hasOwnProperty(w)&&lg(e,t,w,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||lg(e,t,d,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&Pe(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Pe(e,t,f,c,o,p)}function A0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&A0(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>i)break;var d=s.transferSize,f=s.initiatorType;d&&A0(f)&&(s=s.responseEnd,l+=d*(s<i?1:(i-u)/(s-u)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ig=null,sg=null;function Lc(e){return e.nodeType===9?e:e.ownerDocument}function D0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ug(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ym=null;function p4(){var e=window.event;return e&&e.type==="popstate"?e===ym?!1:(ym=e,!0):(ym=null,!1)}var Sv=typeof setTimeout=="function"?setTimeout:void 0,m4=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,g4=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(e){return R0.resolve(null).then(e).catch(h4)}:Sv;function h4(e){setTimeout(function(){throw e})}function or(e){return e==="head"}function z0(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),gi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ts(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ts(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[Ks]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&Ts(e.ownerDocument.body);a=n}while(a);gi(t)}function P0(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function dg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dg(a),vg(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function x4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ks])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ya(e.nextSibling),e===null)break}return null}function b4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ya(e.nextSibling),e===null))return null;return e}function Lv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ya(e.nextSibling),e===null))return null;return e}function cg(e){return e.data==="$?"||e.data==="$~"}function fg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function y4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ya(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pg=null;function O0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ya(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function B0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function _v(e,t,a){switch(t=Lc(a),e){case"html":if(e=t.documentElement,!e)throw Error(G(452));return e;case"head":if(e=t.head,!e)throw Error(G(453));return e;case"body":if(e=t.body,!e)throw Error(G(454));return e;default:throw Error(G(451))}}function Ts(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vg(e)}var ja=new Map,H0=new Set;function _c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pn=Ee.d;Ee.d={f:w4,r:v4,D:C4,C:S4,L:L4,m:_4,X:I4,S:k4,M:M4};function w4(){var e=pn.f(),t=qc();return e||t}function v4(e){var t=xi(e);t!==null&&t.tag===5&&t.type==="form"?bw(t):pn.r(e)}var vi=typeof document>"u"?null:document;function kv(e,t,a){var o=vi;if(o&&typeof t=="string"&&t){var n=qa(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),H0.has(n)||(H0.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Dt(t,"link",e),vt(t),o.head.appendChild(t)))}}function C4(e){pn.D(e),kv("dns-prefetch",e,null)}function S4(e,t){pn.C(e,t),kv("preconnect",e,t)}function L4(e,t,a){pn.L(e,t,a);var o=vi;if(o&&e&&t){var n='link[rel="preload"][as="'+qa(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+qa(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+qa(a.imageSizes)+'"]')):n+='[href="'+qa(e)+'"]';var r=n;switch(t){case"style":r=mi(e);break;case"script":r=Ci(e)}ja.has(r)||(e=Ze({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ja.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(au(r))||t==="script"&&o.querySelector(ou(r))||(t=o.createElement("link"),Dt(t,"link",e),vt(t),o.head.appendChild(t)))}}function _4(e,t){pn.m(e,t);var a=vi;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+qa(o)+'"][href="'+qa(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ci(e)}if(!ja.has(r)&&(e=Ze({rel:"modulepreload",href:e},t),ja.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ou(r)))return}o=a.createElement("link"),Dt(o,"link",e),vt(o),a.head.appendChild(o)}}}function k4(e,t,a){pn.S(e,t,a);var o=vi;if(o&&e){var n=Ql(o).hoistableStyles,r=mi(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(au(r)))i.loading=5;else{e=Ze({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ja.get(r))&&lh(e,a);var s=l=o.createElement("link");vt(s),Dt(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,$d(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function I4(e,t){pn.X(e,t);var a=vi;if(a&&e){var o=Ql(a).hoistableScripts,n=Ci(e),r=o.get(n);r||(r=a.querySelector(ou(n)),r||(e=Ze({src:e,async:!0},t),(t=ja.get(n))&&ih(e,t),r=a.createElement("script"),vt(r),Dt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function M4(e,t){pn.M(e,t);var a=vi;if(a&&e){var o=Ql(a).hoistableScripts,n=Ci(e),r=o.get(n);r||(r=a.querySelector(ou(n)),r||(e=Ze({src:e,async:!0,type:"module"},t),(t=ja.get(n))&&ih(e,t),r=a.createElement("script"),vt(r),Dt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function U0(e,t,a,o){var n=(n=Vn.current)?_c(n):null;if(!n)throw Error(G(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=mi(a.href),a=Ql(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mi(a.href);var r=Ql(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(au(e)))&&!r._p&&(l.instance=r,l.state.loading=5),ja.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ja.set(e,a),r||N4(n,e,a,l.state))),t&&o===null)throw Error(G(528,""));return l}if(t&&o!==null)throw Error(G(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(a),a=Ql(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(G(444,e))}}function mi(e){return'href="'+qa(e)+'"'}function au(e){return'link[rel="stylesheet"]['+e+"]"}function Iv(e){return Ze({},e,{"data-precedence":e.precedence,precedence:null})}function N4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Dt(t,"link",a),vt(t),e.head.appendChild(t))}function Ci(e){return'[src="'+qa(e)+'"]'}function ou(e){return"script[async]"+e}function F0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+qa(a.href)+'"]');if(o)return t.instance=o,vt(o),o;var n=Ze({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),Dt(o,"style",n),$d(o,a.precedence,e),t.instance=o;case"stylesheet":n=mi(a.href);var r=e.querySelector(au(n));if(r)return t.state.loading|=4,t.instance=r,vt(r),r;o=Iv(a),(n=ja.get(n))&&lh(o,n),r=(e.ownerDocument||e).createElement("link"),vt(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Dt(r,"link",o),t.state.loading|=4,$d(r,a.precedence,e),t.instance=r;case"script":return r=Ci(a.src),(n=e.querySelector(ou(r)))?(t.instance=n,vt(n),n):(o=a,(n=ja.get(r))&&(o=Ze({},a),ih(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),vt(n),Dt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(G(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,$d(o,a.precedence,e));return t.instance}function $d(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function lh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ih(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qd=null;function q0(e,t,a){if(Qd===null){var o=new Map,n=Qd=new Map;n.set(a,o)}else n=Qd,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Ks]||r[Et]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function V0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function E4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function T4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=mi(o.href),r=t.querySelector(au(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=kc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,vt(r);return}r=t.ownerDocument||t,o=Iv(o),(n=ja.get(n))&&lh(o,n),r=r.createElement("link"),vt(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Dt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=kc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var wm=0;function A4(e,t){return e.stylesheets&&e.count===0&&Jd(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Jd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&wm===0&&(wm=62500*f4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jd(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>wm?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function kc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ic=null;function Jd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ic=new Map,t.forEach(D4,e),Ic=null,kc.call(e))}function D4(e,t){if(!(t.state.loading&4)){var a=Ic.get(e);if(a)var o=a.get(null);else{a=new Map,Ic.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=kc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Vs={$$typeof:tn,Provider:null,Consumer:null,_currentValue:Rr,_currentValue2:Rr,_threadCount:0};function R4(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yp(0),this.hiddenUpdates=Yp(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Nv(e,t,a,o,n,r,l,i,s,u,d,f){return e=new R4(e,t,a,l,s,u,d,f,i),t=1,r===!0&&(t|=24),r=ya(3,null,null,t),e.current=r,r.stateNode=e,t=Dg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Pg(r),e}function Ev(e){return e?(e=Zl,e):Zl}function Tv(e,t,a,o,n,r){n=Ev(n),o.context===null?o.context=n:o.pendingContext=n,o=Xn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Yn(e,o,t),a!==null&&(la(a,e,t),Ss(a,e,t))}function G0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function sh(e,t){G0(e,t),(e=e.alternate)&&G0(e,t)}function Av(e){if(e.tag===13||e.tag===31){var t=jr(e,67108864);t!==null&&la(t,e,67108864),sh(e,67108864)}}function X0(e){if(e.tag===13||e.tag===31){var t=La();t=yg(t);var a=jr(e,t);a!==null&&la(a,e,t),sh(e,t)}}var Mc=!0;function z4(e,t,a,o){var n=le.T;le.T=null;var r=Ee.p;try{Ee.p=2,uh(e,t,a,o)}finally{Ee.p=r,le.T=n}}function P4(e,t,a,o){var n=le.T;le.T=null;var r=Ee.p;try{Ee.p=8,uh(e,t,a,o)}finally{Ee.p=r,le.T=n}}function uh(e,t,a,o){if(Mc){var n=mg(o);if(n===null)bm(e,t,o,Nc,a),Y0(e,o);else if(B4(n,e,t,a,o))o.stopPropagation();else if(Y0(e,o),t&4&&-1<O4.indexOf(e)){for(;n!==null;){var r=xi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Tr(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-Sa(l);i.entanglements[1]|=s,l&=~s}Eo(r),(Ne&6)===0&&(bc=va()+500,tu(0,!1))}}break;case 31:case 13:i=jr(r,2),i!==null&&la(i,r,2),qc(),sh(r,2)}if(r=mg(o),r===null&&bm(e,t,o,Nc,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else bm(e,t,o,null,a)}}function mg(e){return e=Sg(e),dh(e)}var Nc=null;function dh(e){if(Nc=null,e=ql(e),e!==null){var t=Ys(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Q0(t),e!==null)return e;e=null}else if(a===31){if(e=J0(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nc=e,null}function Dv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L5()){case oy:return 2;case ny:return 8;case nc:case _5:return 32;case ry:return 268435456;default:return 32}default:return 32}}var gg=!1,Wn=null,Kn=null,$n=null,Gs=new Map,Xs=new Map,On=[],O4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Gs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(t.pointerId)}}function fs(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=xi(t),t!==null&&Av(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function B4(e,t,a,o,n){switch(t){case"focusin":return Wn=fs(Wn,e,t,a,o,n),!0;case"dragenter":return Kn=fs(Kn,e,t,a,o,n),!0;case"mouseover":return $n=fs($n,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return Gs.set(r,fs(Gs.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Xs.set(r,fs(Xs.get(r)||null,e,t,a,o,n)),!0}return!1}function Rv(e){var t=ql(e.target);if(t!==null){var a=Ys(t);if(a!==null){if(t=a.tag,t===13){if(t=Q0(a),t!==null){e.blockedOn=t,Nb(e.priority,function(){X0(a)});return}}else if(t===31){if(t=J0(a),t!==null){e.blockedOn=t,Nb(e.priority,function(){X0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mg(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Dm=o,a.target.dispatchEvent(o),Dm=null}else return t=xi(a),t!==null&&Av(t),e.blockedOn=a,!1;t.shift()}return!0}function j0(e,t,a){ec(e)&&a.delete(t)}function H4(){gg=!1,Wn!==null&&ec(Wn)&&(Wn=null),Kn!==null&&ec(Kn)&&(Kn=null),$n!==null&&ec($n)&&($n=null),Gs.forEach(j0),Xs.forEach(j0)}function Bd(e,t){e.blockedOn===t&&(e.blockedOn=null,gg||(gg=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,H4)))}var Hd=null;function Z0(e){Hd!==e&&(Hd=e,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,function(){Hd===e&&(Hd=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(dh(o||a)===null)continue;break}var r=xi(a);r!==null&&(e.splice(t,3),t-=3,Wm(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function gi(e){function t(s){return Bd(s,e)}Wn!==null&&Bd(Wn,e),Kn!==null&&Bd(Kn,e),$n!==null&&Bd($n,e),Gs.forEach(t),Xs.forEach(t);for(var a=0;a<On.length;a++){var o=On[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<On.length&&(a=On[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&On.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[ia]||null;if(typeof r=="function")l||Z0(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[ia]||null)i=l.formAction;else if(dh(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),Z0(a)}}}function zv(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ch(e){this._internalRoot=e}Xc.prototype.render=ch.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));var a=t.current,o=La();Tv(a,o,e,t,null,null)};Xc.prototype.unmount=ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tv(e.current,2,null,e,null,null),qc(),t[hi]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=dy();e={blockedOn:null,target:e,priority:t};for(var a=0;a<On.length&&t!==0&&t<On[a].priority;a++);On.splice(a,0,e),a===0&&Rv(e)}};var W0=K0.version;if(W0!=="19.2.8")throw Error(G(527,W0,"19.2.8"));Ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=x5(t),e=e!==null?ey(e):null,e=e===null?null:e.stateNode,e};var U4={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ps=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ps.isDisabled&&ps.supportsFiber))try{js=ps.inject(U4),Ca=ps}catch{}var ps;Yc.createRoot=function(e,t){if(!$0(e))throw Error(G(299));var a=!1,o="",n=kw,r=Iw,l=Mw;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Nv(e,1,!1,null,null,a,o,null,n,r,l,zv),e[hi]=t.current,rh(e),new ch(t)};Yc.hydrateRoot=function(e,t,a){if(!$0(e))throw Error(G(299));var o=!1,n="",r=kw,l=Iw,i=Mw,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Nv(e,1,!0,t,a??null,o,n,s,r,l,i,zv),t.context=Ev(null),a=t.current,o=La(),o=yg(o),n=Xn(o),n.callback=null,Yn(a,n,o),a=o,t.current.lanes=a,Ws(t,a),Eo(t),e[hi]=t.current,rh(e),new Xc(t)};Yc.version="19.2.8"});var fh=ta((oz,Bv)=>{"use strict";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(e){console.error(e)}}Ov(),Bv.exports=Pv()});var Uv=ta(jc=>{"use strict";var F4=Symbol.for("react.transitional.element"),q4=Symbol.for("react.fragment");function Hv(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:F4,type:e,key:o,ref:t!==void 0?t:null,props:a}}jc.Fragment=q4;jc.jsx=Hv;jc.jsxs=Hv});var X=ta((rz,Fv)=>{"use strict";Fv.exports=Uv()});var _C=ta(LC=>{"use strict";var Bi=J();function P3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O3=typeof Object.is=="function"?Object.is:P3,B3=Bi.useState,H3=Bi.useEffect,U3=Bi.useLayoutEffect,F3=Bi.useDebugValue;function q3(e,t){var a=t(),o=B3({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return U3(function(){n.value=a,n.getSnapshot=t,tx(n)&&r({inst:n})},[e,a,t]),H3(function(){return tx(n)&&r({inst:n}),e(function(){tx(n)&&r({inst:n})})},[e]),F3(a),a}function tx(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!O3(e,a)}catch{return!0}}function V3(e,t){return t()}var G3=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?V3:q3;LC.useSyncExternalStore=Bi.useSyncExternalStore!==void 0?Bi.useSyncExternalStore:G3});var IC=ta((QB,kC)=>{"use strict";kC.exports=_C()});var NC=ta(MC=>{"use strict";var Hf=J(),X3=IC();function Y3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j3=typeof Object.is=="function"?Object.is:Y3,Z3=X3.useSyncExternalStore,W3=Hf.useRef,K3=Hf.useEffect,$3=Hf.useMemo,Q3=Hf.useDebugValue;MC.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=W3(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=$3(function(){function s(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&l.hasValue){var g=l.value;if(n(g,p))return f=g}return f=p}if(g=f,j3(d,p))return g;var y=o(p);return n!==void 0&&n(g,y)?(d=p,g):(d=p,f=y)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var i=Z3(e,r[0],r[1]);return K3(function(){l.hasValue=!0,l.value=i},[i]),Q3(i),i}});var TC=ta((eH,EC)=>{"use strict";EC.exports=NC()});var ZR={};ZI(ZR,{mountCanvas:()=>XR,unmountCanvas:()=>jR,updateCanvas:()=>YR});var Fk=D(fh(),1);var as=D(J(),1);var tt=D(J(),1);var P=D(X()),B=D(J());function rt(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=rt(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var V4={value:()=>{}};function Vv(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new Zc(a)}function Zc(e){this._=e}function G4(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}Zc.prototype=Vv.prototype={constructor:Zc,on:function(e,t){var a=this._,o=G4(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=X4(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=qv(a[n],e.name,t);else if(t==null)for(n in a)a[n]=qv(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new Zc(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function X4(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function qv(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=V4,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Wr=Vv;var Wc="http://www.w3.org/1999/xhtml",ph={svg:"http://www.w3.org/2000/svg",xhtml:Wc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function mn(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),ph.hasOwnProperty(t)?{space:ph[t],local:e}:e}function Y4(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Wc&&t.documentElement.namespaceURI===Wc?t.createElement(e):t.createElementNS(a,e)}}function j4(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Kc(e){var t=mn(e);return(t.local?j4:Y4)(t)}function Z4(){}function Kr(e){return e==null?Z4:function(){return this.querySelector(e)}}function Gv(e){typeof e!="function"&&(e=Kr(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,u,d=0;d<l;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),i[d]=u);return new lt(o,this._parents)}function mh(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function W4(){return[]}function nu(e){return e==null?W4:function(){return this.querySelectorAll(e)}}function K4(e){return function(){return mh(e.apply(this,arguments))}}function Xv(e){typeof e=="function"?e=K4(e):e=nu(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&(o.push(e.call(s,s.__data__,u,l)),n.push(s));return new lt(o,n)}function ru(e){return function(){return this.matches(e)}}function $c(e){return function(t){return t.matches(e)}}var $4=Array.prototype.find;function Q4(e){return function(){return $4.call(this.children,e)}}function J4(){return this.firstElementChild}function Yv(e){return this.select(e==null?J4:Q4(typeof e=="function"?e:$c(e)))}var eN=Array.prototype.filter;function tN(){return Array.from(this.children)}function aN(e){return function(){return eN.call(this.children,e)}}function jv(e){return this.selectAll(e==null?tN:aN(typeof e=="function"?e:$c(e)))}function Zv(e){typeof e!="function"&&(e=ru(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new lt(o,this._parents)}function Qc(e){return new Array(e.length)}function Wv(){return new lt(this._enter||this._groups.map(Qc),this._parents)}function lu(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}lu.prototype={constructor:lu,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Kv(e){return function(){return e}}function oN(e,t,a,o,n,r){for(var l=0,i,s=t.length,u=r.length;l<u;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new lu(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function nN(e,t,a,o,n,r,l){var i,s,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(i=0;i<d;++i)(s=t[i])&&(c[i]=p=l.call(s,s.__data__,i,t)+"",u.has(p)?n[i]=s:u.set(p,s));for(i=0;i<f;++i)p=l.call(e,r[i],i,r)+"",(s=u.get(p))?(o[i]=s,s.__data__=r[i],u.delete(p)):a[i]=new lu(e,r[i]);for(i=0;i<d;++i)(s=t[i])&&u.get(c[i])===s&&(n[i]=s)}function rN(e){return e.__data__}function $v(e,t){if(!arguments.length)return Array.from(this,rN);var a=t?nN:oN,o=this._parents,n=this._groups;typeof e!="function"&&(e=Kv(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=lN(e.call(d,d&&d.__data__,u,o)),g=p.length,y=i[u]=new Array(g),w=l[u]=new Array(g),h=s[u]=new Array(c);a(d,f,y,w,h,p,t);for(var x=0,m=0,b,S;x<g;++x)if(b=y[x]){for(x>=m&&(m=x+1);!(S=w[m])&&++m<g;);b._next=S||null}}return l=new lt(l,o),l._enter=i,l._exit=s,l}function lN(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Qv(){return new lt(this._exit||this._groups.map(Qc),this._parents)}function Jv(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function e1(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var u=a[s],d=o[s],f=u.length,c=i[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;s<n;++s)i[s]=a[s];return new lt(i,this._parents)}function t1(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function a1(e){e||(e=iN);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),u,d=0;d<i;++d)(u=l[d])&&(s[d]=u);s.sort(t)}return new lt(n,this._parents).order()}function iN(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function o1(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function n1(){return Array.from(this)}function r1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function l1(){let e=0;for(let t of this)++e;return e}function i1(){return!this.node()}function s1(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function sN(e){return function(){this.removeAttribute(e)}}function uN(e){return function(){this.removeAttributeNS(e.space,e.local)}}function dN(e,t){return function(){this.setAttribute(e,t)}}function cN(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function fN(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function pN(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function u1(e,t){var a=mn(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?uN:sN:typeof t=="function"?a.local?pN:fN:a.local?cN:dN)(a,t))}function Jc(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function mN(e){return function(){this.style.removeProperty(e)}}function gN(e,t,a){return function(){this.style.setProperty(e,t,a)}}function hN(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function d1(e,t,a){return arguments.length>1?this.each((t==null?mN:typeof t=="function"?hN:gN)(e,t,a??"")):nr(this.node(),e)}function nr(e,t){return e.style.getPropertyValue(t)||Jc(e).getComputedStyle(e,null).getPropertyValue(t)}function xN(e){return function(){delete this[e]}}function bN(e,t){return function(){this[e]=t}}function yN(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function c1(e,t){return arguments.length>1?this.each((t==null?xN:typeof t=="function"?yN:bN)(e,t)):this.node()[e]}function f1(e){return e.trim().split(/^|\s+/)}function gh(e){return e.classList||new p1(e)}function p1(e){this._node=e,this._names=f1(e.getAttribute("class")||"")}p1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function m1(e,t){for(var a=gh(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function g1(e,t){for(var a=gh(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function wN(e){return function(){m1(this,e)}}function vN(e){return function(){g1(this,e)}}function CN(e,t){return function(){(t.apply(this,arguments)?m1:g1)(this,e)}}function h1(e,t){var a=f1(e+"");if(arguments.length<2){for(var o=gh(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?CN:t?wN:vN)(a,t))}function SN(){this.textContent=""}function LN(e){return function(){this.textContent=e}}function _N(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function x1(e){return arguments.length?this.each(e==null?SN:(typeof e=="function"?_N:LN)(e)):this.node().textContent}function kN(){this.innerHTML=""}function IN(e){return function(){this.innerHTML=e}}function MN(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function b1(e){return arguments.length?this.each(e==null?kN:(typeof e=="function"?MN:IN)(e)):this.node().innerHTML}function NN(){this.nextSibling&&this.parentNode.appendChild(this)}function y1(){return this.each(NN)}function EN(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function w1(){return this.each(EN)}function v1(e){var t=typeof e=="function"?e:Kc(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function TN(){return null}function C1(e,t){var a=typeof e=="function"?e:Kc(e),o=t==null?TN:typeof t=="function"?t:Kr(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function AN(){var e=this.parentNode;e&&e.removeChild(this)}function S1(){return this.each(AN)}function DN(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function RN(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function L1(e){return this.select(e?RN:DN)}function _1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function zN(e){return function(t){e.call(this,t,this.__data__)}}function PN(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function ON(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function BN(e,t,a){return function(){var o=this.__on,n,r=zN(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function k1(e,t,a){var o=PN(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,u=i.length,d;s<u;++s)for(n=0,d=i[s];n<r;++n)if((l=o[n]).type===d.type&&l.name===d.name)return d.value}return}for(i=t?BN:ON,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function I1(e,t,a){var o=Jc(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function HN(e,t){return function(){return I1(this,e,t)}}function UN(e,t){return function(){return I1(this,e,t.apply(this,arguments))}}function M1(e,t){return this.each((typeof t=="function"?UN:HN)(e,t))}function*N1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var hh=[null];function lt(e,t){this._groups=e,this._parents=t}function E1(){return new lt([[document.documentElement]],hh)}function FN(){return this}lt.prototype=E1.prototype={constructor:lt,select:Gv,selectAll:Xv,selectChild:Yv,selectChildren:jv,filter:Zv,data:$v,enter:Wv,exit:Qv,join:Jv,merge:e1,selection:FN,order:t1,sort:a1,call:o1,nodes:n1,node:r1,size:l1,empty:i1,each:s1,attr:u1,style:d1,property:c1,classed:h1,text:x1,html:b1,raise:y1,lower:w1,append:v1,insert:C1,remove:S1,clone:L1,datum:_1,on:k1,dispatch:M1,[Symbol.iterator]:N1};var gn=E1;function St(e){return typeof e=="string"?new lt([[document.querySelector(e)]],[document.documentElement]):new lt([[e]],hh)}function T1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Yt(e,t){if(e=T1(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var A1={passive:!1},$r={capture:!0,passive:!1};function ef(e){e.stopImmediatePropagation()}function rr(e){e.preventDefault(),e.stopImmediatePropagation()}function iu(e){var t=e.document.documentElement,a=St(e).on("dragstart.drag",rr,$r);"onselectstart"in t?a.on("selectstart.drag",rr,$r):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function su(e,t){var a=e.document.documentElement,o=St(e).on("dragstart.drag",null);t&&(o.on("click.drag",rr,$r),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var uu=e=>()=>e;function du(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}du.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function qN(e){return!e.ctrlKey&&!e.button}function VN(){return this.parentNode}function GN(e,t){return t??{x:e.x,y:e.y}}function XN(){return navigator.maxTouchPoints||"ontouchstart"in this}function tf(){var e=qN,t=VN,a=GN,o=XN,n={},r=Wr("start","drag","end"),l=0,i,s,u,d,f=0;function c(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",h,A1).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,S){if(!(d||!e.call(this,b,S))){var C=m(this,t.call(this,b,S),b,S,"mouse");C&&(St(b.view).on("mousemove.drag",g,$r).on("mouseup.drag",y,$r),iu(b.view),ef(b),u=!1,i=b.clientX,s=b.clientY,C("start",b))}}function g(b){if(rr(b),!u){var S=b.clientX-i,C=b.clientY-s;u=S*S+C*C>f}n.mouse("drag",b)}function y(b){St(b.view).on("mousemove.drag mouseup.drag",null),su(b.view,u),rr(b),n.mouse("end",b)}function w(b,S){if(e.call(this,b,S)){var C=b.changedTouches,v=t.call(this,b,S),_=C.length,k,T;for(k=0;k<_;++k)(T=m(this,v,b,S,C[k].identifier,C[k]))&&(ef(b),T("start",b,C[k]))}}function h(b){var S=b.changedTouches,C=S.length,v,_;for(v=0;v<C;++v)(_=n[S[v].identifier])&&(rr(b),_("drag",b,S[v]))}function x(b){var S=b.changedTouches,C=S.length,v,_;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),v=0;v<C;++v)(_=n[S[v].identifier])&&(ef(b),_("end",b,S[v]))}function m(b,S,C,v,_,k){var T=r.copy(),N=Yt(k||C,S),U,O,L;if((L=a.call(b,new du("beforestart",{sourceEvent:C,target:c,identifier:_,active:l,x:N[0],y:N[1],dx:0,dy:0,dispatch:T}),v))!=null)return U=L.x-N[0]||0,O=L.y-N[1]||0,function M(E,I,A){var z=N,V;switch(E){case"start":n[_]=M,V=l++;break;case"end":delete n[_],--l;case"drag":N=Yt(A||I,S),V=l;break}T.call(E,b,new du(E,{sourceEvent:I,subject:L,target:c,identifier:_,active:V,x:N[0]+U,y:N[1]+O,dx:N[0]-z[0],dy:N[1]-z[1],dispatch:T}),v)}}return c.filter=function(b){return arguments.length?(e=typeof b=="function"?b:uu(!!b),c):e},c.container=function(b){return arguments.length?(t=typeof b=="function"?b:uu(b),c):t},c.subject=function(b){return arguments.length?(a=typeof b=="function"?b:uu(b),c):a},c.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:uu(!!b),c):o},c.on=function(){var b=r.on.apply(r,arguments);return b===r?c:b},c.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,c):Math.sqrt(f)},c}function af(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function xh(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function pu(){}var cu=.7,rf=1/cu,Si="\\s*([+-]?\\d+)\\s*",fu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",To="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",YN=/^#([0-9a-f]{3,8})$/,jN=new RegExp(`^rgb\\(${Si},${Si},${Si}\\)$`),ZN=new RegExp(`^rgb\\(${To},${To},${To}\\)$`),WN=new RegExp(`^rgba\\(${Si},${Si},${Si},${fu}\\)$`),KN=new RegExp(`^rgba\\(${To},${To},${To},${fu}\\)$`),$N=new RegExp(`^hsl\\(${fu},${To},${To}\\)$`),QN=new RegExp(`^hsla\\(${fu},${To},${To},${fu}\\)$`),D1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};af(pu,uo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:R1,formatHex:R1,formatHex8:JN,formatHsl:eE,formatRgb:z1,toString:z1});function R1(){return this.rgb().formatHex()}function JN(){return this.rgb().formatHex8()}function eE(){return F1(this).formatHsl()}function z1(){return this.rgb().formatRgb()}function uo(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=YN.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?P1(t):a===3?new ua(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?of(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?of(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=jN.exec(e))?new ua(t[1],t[2],t[3],1):(t=ZN.exec(e))?new ua(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=WN.exec(e))?of(t[1],t[2],t[3],t[4]):(t=KN.exec(e))?of(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=$N.exec(e))?H1(t[1],t[2]/100,t[3]/100,1):(t=QN.exec(e))?H1(t[1],t[2]/100,t[3]/100,t[4]):D1.hasOwnProperty(e)?P1(D1[e]):e==="transparent"?new ua(NaN,NaN,NaN,0):null}function P1(e){return new ua(e>>16&255,e>>8&255,e&255,1)}function of(e,t,a,o){return o<=0&&(e=t=a=NaN),new ua(e,t,a,o)}function tE(e){return e instanceof pu||(e=uo(e)),e?(e=e.rgb(),new ua(e.r,e.g,e.b,e.opacity)):new ua}function Li(e,t,a,o){return arguments.length===1?tE(e):new ua(e,t,a,o??1)}function ua(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}af(ua,Li,xh(pu,{brighter(e){return e=e==null?rf:Math.pow(rf,e),new ua(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?cu:Math.pow(cu,e),new ua(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ua(Jr(this.r),Jr(this.g),Jr(this.b),lf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:O1,formatHex:O1,formatHex8:aE,formatRgb:B1,toString:B1}));function O1(){return`#${Qr(this.r)}${Qr(this.g)}${Qr(this.b)}`}function aE(){return`#${Qr(this.r)}${Qr(this.g)}${Qr(this.b)}${Qr((isNaN(this.opacity)?1:this.opacity)*255)}`}function B1(){let e=lf(this.opacity);return`${e===1?"rgb(":"rgba("}${Jr(this.r)}, ${Jr(this.g)}, ${Jr(this.b)}${e===1?")":`, ${e})`}`}function lf(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Jr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qr(e){return e=Jr(e),(e<16?"0":"")+e.toString(16)}function H1(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new so(e,t,a,o)}function F1(e){if(e instanceof so)return new so(e.h,e.s,e.l,e.opacity);if(e instanceof pu||(e=uo(e)),!e)return new so;if(e instanceof so)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new so(l,i,s,e.opacity)}function q1(e,t,a,o){return arguments.length===1?F1(e):new so(e,t,a,o??1)}function so(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}af(so,q1,xh(pu,{brighter(e){return e=e==null?rf:Math.pow(rf,e),new so(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?cu:Math.pow(cu,e),new so(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new ua(bh(e>=240?e-240:e+120,n,o),bh(e,n,o),bh(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new so(U1(this.h),nf(this.s),nf(this.l),lf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=lf(this.opacity);return`${e===1?"hsl(":"hsla("}${U1(this.h)}, ${nf(this.s)*100}%, ${nf(this.l)*100}%${e===1?")":`, ${e})`}`}}));function U1(e){return e=(e||0)%360,e<0?e+360:e}function nf(e){return Math.max(0,Math.min(1,e||0))}function bh(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function yh(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function V1(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return yh((a-o/t)*t,l,n,r,i)}}function G1(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return yh((a-o/t)*t,n,r,l,i)}}var mu=e=>()=>e;function oE(e,t){return function(a){return e+a*t}}function nE(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function X1(e){return(e=+e)==1?sf:function(t,a){return a-t?nE(t,a,e):mu(isNaN(t)?a:t)}}function sf(e,t){var a=t-e;return a?oE(e,a):mu(isNaN(e)?t:e)}var el=(function e(t){var a=X1(t);function o(n,r){var l=a((n=Li(n)).r,(r=Li(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),u=sf(n.opacity,r.opacity);return function(d){return n.r=l(d),n.g=i(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function Y1(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=Li(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var rE=Y1(V1),lE=Y1(G1);function j1(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function Z1(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function W1(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=hn(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function K1(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function jt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function $1(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=hn(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var vh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wh=new RegExp(vh.source,"g");function iE(e){return function(){return e}}function sE(e){return function(t){return e(t)+""}}function gu(e,t){var a=vh.lastIndex=wh.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=vh.exec(e))&&(n=wh.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:jt(o,n)})),a=wh.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?sE(s[0].x):iE(t):(t=s.length,function(u){for(var d=0,f;d<t;++d)i[(f=s[d]).i]=f.x(u);return i.join("")})}function hn(e,t){var a=typeof t,o;return t==null||a==="boolean"?mu(t):(a==="number"?jt:a==="string"?(o=uo(t))?(t=o,el):gu:t instanceof uo?el:t instanceof Date?K1:Z1(t)?j1:Array.isArray(t)?W1:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?$1:jt)(e,t)}var Q1=180/Math.PI,uf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ch(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*Q1,skewX:Math.atan(s)*Q1,scaleX:l,scaleY:i}}var df;function J1(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?uf:Ch(t.a,t.b,t.c,t.d,t.e,t.f)}function e2(e){return e==null?uf:(df||(df=document.createElementNS("http://www.w3.org/2000/svg","g")),df.setAttribute("transform",e),(e=df.transform.baseVal.consolidate())?(e=e.matrix,Ch(e.a,e.b,e.c,e.d,e.e,e.f)):uf)}function t2(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var y=p.push("translate(",null,t,null,a);g.push({i:y-4,x:jt(u,f)},{i:y-2,x:jt(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function l(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:jt(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function i(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:jt(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function s(u,d,f,c,p,g){if(u!==f||d!==c){var y=p.push(n(p)+"scale(",null,",",null,")");g.push({i:y-4,x:jt(u,f)},{i:y-2,x:jt(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),l(u.rotate,d.rotate,f,c),i(u.skewX,d.skewX,f,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,y=c.length,w;++g<y;)f[(w=c[g]).i]=w.x(p);return f.join("")}}}var Sh=t2(J1,"px, ","px)","deg)"),Lh=t2(e2,", ",")",")");var uE=1e-12;function a2(e){return((e=Math.exp(e))+1/e)/2}function dE(e){return((e=Math.exp(e))-1/e)/2}function cE(e){return((e=Math.exp(2*e))-1)/(e+1)}var tl=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],u=r[2],d=l[0],f=l[1],c=l[2],p=d-i,g=f-s,y=p*p+g*g,w,h;if(y<uE)h=Math.log(c/u)/t,w=function(v){return[i+v*p,s+v*g,u*Math.exp(t*v*h)]};else{var x=Math.sqrt(y),m=(c*c-u*u+o*y)/(2*u*a*x),b=(c*c-u*u-o*y)/(2*c*a*x),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(b*b+1)-b);h=(C-S)/t,w=function(v){var _=v*h,k=a2(S),T=u/(a*x)*(k*cE(t*_+S)-dE(S));return[i+T*p,s+T*g,u*k/a2(t*_+S)]}}return w.duration=h*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var _i=0,xu=0,hu=0,n2=1e3,cf,bu,ff=0,al=0,pf=0,yu=typeof performance=="object"&&performance.now?performance:Date,r2=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function vu(){return al||(r2(fE),al=yu.now()+pf)}function fE(){al=0}function wu(){this._call=this._time=this._next=null}wu.prototype=mf.prototype={constructor:wu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?vu():+a)+(t==null?0:+t),!this._next&&bu!==this&&(bu?bu._next=this:cf=this,bu=this),this._call=e,this._time=a,_h()},stop:function(){this._call&&(this._call=null,this._time=1/0,_h())}};function mf(e,t,a){var o=new wu;return o.restart(e,t,a),o}function l2(){vu(),++_i;for(var e=cf,t;e;)(t=al-e._time)>=0&&e._call.call(void 0,t),e=e._next;--_i}function o2(){al=(ff=yu.now())+pf,_i=xu=0;try{l2()}finally{_i=0,mE(),al=0}}function pE(){var e=yu.now(),t=e-ff;t>n2&&(pf-=t,ff=e)}function mE(){for(var e,t=cf,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:cf=a);bu=e,_h(o)}function _h(e){if(!_i){xu&&(xu=clearTimeout(xu));var t=e-al;t>24?(e<1/0&&(xu=setTimeout(o2,e-yu.now()-pf)),hu&&(hu=clearInterval(hu))):(hu||(ff=yu.now(),hu=setInterval(pE,n2)),_i=1,r2(o2))}}function gf(e,t,a){var o=new wu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var gE=Wr("start","end","cancel","interrupt"),hE=[],u2=0,i2=1,xf=2,hf=3,s2=4,bf=5,Cu=6;function lr(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;xE(e,a,{name:t,index:o,group:n,on:gE,tween:hE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:u2})}function Su(e,t){var a=yt(e,t);if(a.state>u2)throw new Error("too late; already scheduled");return a}function Rt(e,t){var a=yt(e,t);if(a.state>hf)throw new Error("too late; already running");return a}function yt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function xE(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=mf(r,0,a.time);function r(u){a.state=i2,a.timer.restart(l,a.delay,a.time),a.delay<=u&&l(u-a.delay)}function l(u){var d,f,c,p;if(a.state!==i2)return s();for(d in o)if(p=o[d],p.name===a.name){if(p.state===hf)return gf(l);p.state===s2?(p.state=Cu,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=Cu,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(gf(function(){a.state===hf&&(a.state=s2,a.timer.restart(i,a.delay,a.time),i(u))}),a.state=xf,a.on.call("start",e,e.__data__,a.index,a.group),a.state===xf){for(a.state=hf,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function i(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=bf,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===bf&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=Cu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function ol(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>xf&&o.state<bf,o.state=Cu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function d2(e){return this.each(function(){ol(this,e)})}function bE(e,t){var a,o;return function(){var n=Rt(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function yE(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=Rt(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=i;break}s===u&&n.push(i)}r.tween=n}}function c2(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=yt(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?bE:yE)(a,e,t))}function ki(e,t,a){var o=e._id;return e.each(function(){var n=Rt(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return yt(n,o).value[t]}}function yf(e,t){var a;return(typeof t=="number"?jt:t instanceof uo?el:(a=uo(t))?(t=a,el):gu)(e,t)}function wE(e){return function(){this.removeAttribute(e)}}function vE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function CE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function SE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function LE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function _E(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function f2(e,t){var a=mn(e),o=a==="transform"?Lh:yf;return this.attrTween(e,typeof t=="function"?(a.local?_E:LE)(a,o,ki(this,"attr."+e,t)):t==null?(a.local?vE:wE)(a):(a.local?SE:CE)(a,o,t))}function kE(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function IE(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function ME(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&IE(e,r)),a}return n._value=t,n}function NE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&kE(e,r)),a}return n._value=t,n}function p2(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=mn(e);return this.tween(a,(o.local?ME:NE)(o,t))}function EE(e,t){return function(){Su(this,e).delay=+t.apply(this,arguments)}}function TE(e,t){return t=+t,function(){Su(this,e).delay=t}}function m2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?EE:TE)(t,e)):yt(this.node(),t).delay}function AE(e,t){return function(){Rt(this,e).duration=+t.apply(this,arguments)}}function DE(e,t){return t=+t,function(){Rt(this,e).duration=t}}function g2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?AE:DE)(t,e)):yt(this.node(),t).duration}function RE(e,t){if(typeof t!="function")throw new Error;return function(){Rt(this,e).ease=t}}function h2(e){var t=this._id;return arguments.length?this.each(RE(t,e)):yt(this.node(),t).ease}function zE(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;Rt(this,e).ease=a}}function x2(e){if(typeof e!="function")throw new Error;return this.each(zE(this._id,e))}function b2(e){typeof e!="function"&&(e=ru(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new Zt(o,this._parents,this._name,this._id)}function y2(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],u=a[i],d=s.length,f=l[i]=new Array(d),c,p=0;p<d;++p)(c=s[p]||u[p])&&(f[p]=c);for(;i<o;++i)l[i]=t[i];return new Zt(l,this._parents,this._name,this._id)}function PE(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function OE(e,t,a){var o,n,r=PE(t)?Su:Rt;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function w2(e,t){var a=this._id;return arguments.length<2?yt(this.node(),a).on.on(e):this.each(OE(a,e,t))}function BE(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function v2(){return this.on("end.remove",BE(this._id))}function C2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Kr(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,u=r[l]=new Array(s),d,f,c=0;c<s;++c)(d=i[c])&&(f=e.call(d,d.__data__,c,i))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,lr(u[c],t,a,c,u,yt(d,a)));return new Zt(r,this._parents,t,a)}function S2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=nu(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],u=s.length,d,f=0;f<u;++f)if(d=s[f]){for(var c=e.call(d,d.__data__,f,s),p,g=yt(d,a),y=0,w=c.length;y<w;++y)(p=c[y])&&lr(p,t,a,y,c,g);r.push(c),l.push(d)}return new Zt(r,l,t,a)}var HE=gn.prototype.constructor;function L2(){return new HE(this._groups,this._parents)}function UE(e,t){var a,o,n;return function(){var r=nr(this,e),l=(this.style.removeProperty(e),nr(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function _2(e){return function(){this.style.removeProperty(e)}}function FE(e,t,a){var o,n=a+"",r;return function(){var l=nr(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function qE(e,t,a){var o,n,r;return function(){var l=nr(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),nr(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function VE(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=Rt(this,e),u=s.on,d=s.value[r]==null?i||(i=_2(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(l,n=d),s.on=o}}function k2(e,t,a){var o=(e+="")=="transform"?Sh:yf;return t==null?this.styleTween(e,UE(e,o)).on("end.style."+e,_2(e)):typeof t=="function"?this.styleTween(e,qE(e,o,ki(this,"style."+e,t))).each(VE(this._id,e)):this.styleTween(e,FE(e,o,t),a).on("end.style."+e,null)}function GE(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function XE(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&GE(e,l,a)),o}return r._value=t,r}function I2(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,XE(e,t,a??""))}function YE(e){return function(){this.textContent=e}}function jE(e){return function(){var t=e(this);this.textContent=t??""}}function M2(e){return this.tween("text",typeof e=="function"?jE(ki(this,"text",e)):YE(e==null?"":e+""))}function ZE(e){return function(t){this.textContent=e.call(this,t)}}function WE(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&ZE(n)),t}return o._value=e,o}function N2(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,WE(e))}function E2(){for(var e=this._name,t=this._id,a=wf(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)if(s=l[u]){var d=yt(s,t);lr(s,e,a,u,l,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Zt(o,this._parents,e,a)}function T2(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var u=Rt(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),u.on=t}),n===0&&r()})}var KE=0;function Zt(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function A2(e){return gn().transition(e)}function wf(){return++KE}var xn=gn.prototype;Zt.prototype=A2.prototype={constructor:Zt,select:C2,selectAll:S2,selectChild:xn.selectChild,selectChildren:xn.selectChildren,filter:b2,merge:y2,selection:L2,transition:E2,call:xn.call,nodes:xn.nodes,node:xn.node,size:xn.size,empty:xn.empty,each:xn.each,on:w2,attr:f2,attrTween:p2,style:k2,styleTween:I2,text:M2,textTween:N2,remove:v2,tween:c2,delay:m2,duration:g2,ease:h2,easeVarying:x2,end:T2,[Symbol.iterator]:xn[Symbol.iterator]};function vf(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var $E={time:null,delay:0,duration:250,ease:vf};function QE(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function D2(e){var t,a;e instanceof Zt?(t=e._id,e=e._name):(t=wf(),(a=$E).time=vu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&lr(s,e,t,u,l,a||QE(s,t));return new Zt(o,this._parents,e,t)}gn.prototype.interrupt=d2;gn.prototype.transition=D2;var Lu=e=>()=>e;function kh(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function co(e,t,a){this.k=e,this.x=t,this.y=a}co.prototype={constructor:co,scale:function(e){return e===1?this:new co(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new co(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var nl=new co(1,0,0);_u.prototype=co.prototype;function _u(e){for(;!e.__zoom;)if(!(e=e.parentNode))return nl;return e.__zoom}function Cf(e){e.stopImmediatePropagation()}function Ii(e){e.preventDefault(),e.stopImmediatePropagation()}function JE(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function e3(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function R2(){return this.__zoom||nl}function t3(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function a3(){return navigator.maxTouchPoints||"ontouchstart"in this}function o3(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function Sf(){var e=JE,t=e3,a=o3,o=t3,n=a3,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=tl,u=Wr("start","zoom","end"),d,f,c,p=500,g=150,y=0,w=10;function h(L){L.property("__zoom",R2).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",k).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",N).on("touchmove.zoom",U).on("touchend.zoom touchcancel.zoom",O).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,M,E,I){var A=L.selection?L.selection():L;A.property("__zoom",R2),L!==A?S(L,M,E,I):A.interrupt().each(function(){C(this,arguments).event(I).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},h.scaleBy=function(L,M,E,I){h.scaleTo(L,function(){var A=this.__zoom.k,z=typeof M=="function"?M.apply(this,arguments):M;return A*z},E,I)},h.scaleTo=function(L,M,E,I){h.transform(L,function(){var A=t.apply(this,arguments),z=this.__zoom,V=E==null?b(A):typeof E=="function"?E.apply(this,arguments):E,R=z.invert(V),F=typeof M=="function"?M.apply(this,arguments):M;return a(m(x(z,F),V,R),A,l)},E,I)},h.translateBy=function(L,M,E,I){h.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),l)},null,I)},h.translateTo=function(L,M,E,I,A){h.transform(L,function(){var z=t.apply(this,arguments),V=this.__zoom,R=I==null?b(z):typeof I=="function"?I.apply(this,arguments):I;return a(nl.translate(R[0],R[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof E=="function"?-E.apply(this,arguments):-E),z,l)},I,A)};function x(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new co(M,L.x,L.y)}function m(L,M,E){var I=M[0]-E[0]*L.k,A=M[1]-E[1]*L.k;return I===L.x&&A===L.y?L:new co(L.k,I,A)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function S(L,M,E,I){L.on("start.zoom",function(){C(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(I).end()}).tween("zoom",function(){var A=this,z=arguments,V=C(A,z).event(I),R=t.apply(A,z),F=E==null?b(R):typeof E=="function"?E.apply(A,z):E,Z=Math.max(R[1][0]-R[0][0],R[1][1]-R[0][1]),K=A.__zoom,W=typeof M=="function"?M.apply(A,z):M,ne=s(K.invert(F).concat(Z/K.k),W.invert(F).concat(Z/W.k));return function(ee){if(ee===1)ee=W;else{var q=ne(ee),Y=Z/q[2];ee=new co(Y,F[0]-q[0]*Y,F[1]-q[1]*Y)}V.zoom(null,ee)}})}function C(L,M,E){return!E&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=St(this.that).datum();u.call(L,this.that,new kh(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var E=C(this,M).event(L),I=this.__zoom,A=Math.max(r[0],Math.min(r[1],I.k*Math.pow(2,o.apply(this,arguments)))),z=Yt(L);if(E.wheel)(E.mouse[0][0]!==z[0]||E.mouse[0][1]!==z[1])&&(E.mouse[1]=I.invert(E.mouse[0]=z)),clearTimeout(E.wheel);else{if(I.k===A)return;E.mouse=[z,I.invert(z)],ol(this),E.start()}Ii(L),E.wheel=setTimeout(V,g),E.zoom("mouse",a(m(x(I,A),E.mouse[0],E.mouse[1]),E.extent,l));function V(){E.wheel=null,E.end()}}function k(L,...M){if(c||!e.apply(this,arguments))return;var E=L.currentTarget,I=C(this,M,!0).event(L),A=St(L.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",Z,!0),z=Yt(L,E),V=L.clientX,R=L.clientY;iu(L.view),Cf(L),I.mouse=[z,this.__zoom.invert(z)],ol(this),I.start();function F(K){if(Ii(K),!I.moved){var W=K.clientX-V,ne=K.clientY-R;I.moved=W*W+ne*ne>y}I.event(K).zoom("mouse",a(m(I.that.__zoom,I.mouse[0]=Yt(K,E),I.mouse[1]),I.extent,l))}function Z(K){A.on("mousemove.zoom mouseup.zoom",null),su(K.view,I.moved),Ii(K),I.event(K).end()}}function T(L,...M){if(e.apply(this,arguments)){var E=this.__zoom,I=Yt(L.changedTouches?L.changedTouches[0]:L,this),A=E.invert(I),z=E.k*(L.shiftKey?.5:2),V=a(m(x(E,z),I,A),t.apply(this,M),l);Ii(L),i>0?St(this).transition().duration(i).call(S,V,I,L):St(this).call(h.transform,V,I,L)}}function N(L,...M){if(e.apply(this,arguments)){var E=L.touches,I=E.length,A=C(this,M,L.changedTouches.length===I).event(L),z,V,R,F;for(Cf(L),V=0;V<I;++V)R=E[V],F=Yt(R,this),F=[F,this.__zoom.invert(F),R.identifier],A.touch0?!A.touch1&&A.touch0[2]!==F[2]&&(A.touch1=F,A.taps=0):(A.touch0=F,z=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),z&&(A.taps<2&&(f=F[0],d=setTimeout(function(){d=null},p)),ol(this),A.start())}}function U(L,...M){if(this.__zooming){var E=C(this,M).event(L),I=L.changedTouches,A=I.length,z,V,R,F;for(Ii(L),z=0;z<A;++z)V=I[z],R=Yt(V,this),E.touch0&&E.touch0[2]===V.identifier?E.touch0[0]=R:E.touch1&&E.touch1[2]===V.identifier&&(E.touch1[0]=R);if(V=E.that.__zoom,E.touch1){var Z=E.touch0[0],K=E.touch0[1],W=E.touch1[0],ne=E.touch1[1],ee=(ee=W[0]-Z[0])*ee+(ee=W[1]-Z[1])*ee,q=(q=ne[0]-K[0])*q+(q=ne[1]-K[1])*q;V=x(V,Math.sqrt(ee/q)),R=[(Z[0]+W[0])/2,(Z[1]+W[1])/2],F=[(K[0]+ne[0])/2,(K[1]+ne[1])/2]}else if(E.touch0)R=E.touch0[0],F=E.touch0[1];else return;E.zoom("touch",a(m(V,R,F),E.extent,l))}}function O(L,...M){if(this.__zooming){var E=C(this,M).event(L),I=L.changedTouches,A=I.length,z,V;for(Cf(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),z=0;z<A;++z)V=I[z],E.touch0&&E.touch0[2]===V.identifier?delete E.touch0:E.touch1&&E.touch1[2]===V.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(V=Yt(V,this),Math.hypot(f[0]-V[0],f[1]-V[1])<w)){var R=St(this).on("dblclick.zoom");R&&R.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:Lu(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:Lu(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:Lu(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:Lu([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],h):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(i=+L,h):i},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(y=(L=+L)*L,h):Math.sqrt(y)},h.tapDistance=function(L){return arguments.length?(w=+L,h):w},h}var Ia={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Ti=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Th=["Enter"," ","Escape"],Ah={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},dr;(function(e){e.Strict="strict",e.Loose="loose"})(dr||(dr={}));var fo;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(fo||(fo={}));var bn;(function(e){e.Partial="partial",e.Full="full"})(bn||(bn={}));var Dh={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},Ao;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Ao||(Ao={}));var Ni;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ni||(Ni={}));var ae;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ae||(ae={}));var z2={[ae.Left]:ae.Right,[ae.Right]:ae.Left,[ae.Top]:ae.Bottom,[ae.Bottom]:ae.Top};function Rh(e){return e===null?null:e?"valid":"invalid"}var zh=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Z2=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Ph=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Oh=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Iu=(e,t=[0,0])=>{let{width:a,height:o}=Ka(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Bh=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):Ph(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,Nf(n,kf(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Ef(o):{x:0,y:0,width:0,height:0}},Ai=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Nf(a,kf(n)),o=!0)}),o?Ef(a):{x:0,y:0,width:0,height:0}},If=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:y=!1}=c;if(l&&!g||y)continue;let w=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x,y:m}=c.internals.positionAbsolute,b=J2(i,s,u,d,x,m,w,h),S=w*h,C=r&&b>0;(!c.internals.handleBounds||C||b>=S||c.dragging)&&f.push(c)}return f},W2=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function n3(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=Ka(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function K2({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=n3(e,l),s=Ai(i),u=Nu(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(u,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function Hh({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:u}=i?i.internals.positionAbsolute:{x:0,y:0},d=l.origin??o,f=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",Ia.error005());else{let{width:p,height:g}=Ka(i);p&&g&&(f=[[s,u],[s+p,u+g]])}else i&&il(l.extent)&&(f=[[l.extent[0][0]+s,l.extent[0][1]+u],[l.extent[1][0]+s,l.extent[1][1]+u]]);let c=il(f)?rl(t,f,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",Ia.error015()),{position:{x:c.x-s+(l.measured.width??0)*d[0],y:c.y-u+(l.measured.height??0)*d[1]},positionAbsolute:c}}async function $2({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),l=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&l.find(y=>y.id===c.parentId);(p||g)&&l.push(c)}let i=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=W2(l,s);for(let c of s)i.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:l};let f=await n({nodes:l,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:l}:{edges:[],nodes:[]}:f}var Ei=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),rl=(e={x:0,y:0},t,a)=>({x:Ei(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Ei(e.y,t[0][1],t[1][1]-(a?.height??0))});function Q2(e,t,a){let{width:o,height:n}=Ka(a),{x:r,y:l}=a.internals.positionAbsolute;return rl(e,[[r,l],[r+o,l+n]],t)}var P2=(e,t,a)=>e<t?Ei(Math.abs(e-t),1,t)/t:e>a?-Ei(Math.abs(e-a),1,t)/t:0,Mf=(e,t,a=15,o=40)=>{let n=P2(e.x,o,t.width-o)*a,r=P2(e.y,o,t.height-o)*a;return[n,r]},Nf=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Eh=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Ef=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Di=(e,t=[0,0])=>{let{x:a,y:o}=Ph(e)?e.internals.positionAbsolute:Iu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},kf=(e,t=[0,0])=>{let{x:a,y:o}=Ph(e)?e.internals.positionAbsolute:Iu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Uh=(e,t)=>Ef(Nf(Eh(e),Eh(t))),J2=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*u)},Mu=(e,t)=>J2(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Fh=e=>Za(e.width)&&Za(e.height)&&Za(e.x)&&Za(e.y),Za=e=>!isNaN(e)&&isFinite(e),qh=(e,t)=>(a,o)=>{},Ri=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),zi=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?Ri(i,l):i},ll=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Mi(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function r3(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Mi(e,a),n=Mi(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Mi(e.top??e.y??0,a),n=Mi(e.bottom??e.y??0,a),r=Mi(e.left??e.x??0,t),l=Mi(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function l3(e,t,a,o,n,r){let{x:l,y:i}=ll(e,[t,a,o]),{x:s,y:u}=ll({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,f=r-u;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(d),bottom:Math.floor(f)}}var Nu=(e,t,a,o,n,r)=>{let l=r3(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,u=Math.min(i,s),d=Ei(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,y=l3(e,p,g,d,t,a),w={left:Math.min(y.left-l.left,0),top:Math.min(y.top-l.top,0),right:Math.min(y.right-l.right,0),bottom:Math.min(y.bottom-l.bottom,0)};return{x:p-w.left+w.right,y:g-w.top+w.bottom,zoom:d}},Pi=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function il(e){return e!=null&&e!=="parent"}function Ka(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Vh(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Gh(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function Xh(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function eC(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function tC(e){return{...Ah,...e||{}}}function ku(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=Wa(e),i=zi({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:u}=a?Ri(i,t):i;return{xSnapped:s,ySnapped:u,...i}}var Tf=e=>({width:e.offsetWidth,height:e.offsetHeight}),Yh=e=>e?.getRootNode?.()||window?.document,i3=["INPUT","SELECT","TEXTAREA"];function jh(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:i3.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Zh=e=>"clientX"in e,Wa=(e,t)=>{let a=Zh(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},O2=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,...Tf(l)}})};function Af({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,u=t*.125+r*.375+i*.375+o*.125,d=Math.abs(s-e),f=Math.abs(u-t);return[s,u,d,f]}function Lf(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function B2({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ae.Left:return[t-Lf(t-o,r),a];case ae.Right:return[t+Lf(o-t,r),a];case ae.Top:return[t,a-Lf(a-n,r)];case ae.Bottom:return[t,a+Lf(n-a,r)]}}function Oi({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,curvature:l=.25}){let[i,s]=B2({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[u,d]=B2({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[f,c,p,g]=Af({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${i},${s} ${u},${d} ${o},${n}`,f,c,p,g]}function Wh({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function aC({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function oC({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Nf(kf(e),kf(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Mu(l,Ef(r))>0}var s3=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,u3=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),nC=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Ia.error006()),t;let o=a.getEdgeId||s3,n;return zh(e)?n={...e}:n={...e,id:o(e)},u3(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Df({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=Wh({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var H2={[ae.Left]:{x:-1,y:0},[ae.Right]:{x:1,y:0},[ae.Top]:{x:0,y:-1},[ae.Bottom]:{x:0,y:1}},d3=({source:e,sourcePosition:t=ae.Bottom,target:a})=>t===ae.Left||t===ae.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},U2=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function c3({source:e,sourcePosition:t=ae.Bottom,target:a,targetPosition:o=ae.Top,center:n,offset:r,stepPosition:l}){let i=H2[t],s=H2[o],u={x:e.x+i.x*r,y:e.y+i.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},f=d3({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],y,w,h={x:0,y:0},x={x:0,y:0},[,,m,b]=Wh({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[c]*s[c]===-1){c==="x"?(y=n.x??u.x+(d.x-u.x)*l,w=n.y??(u.y+d.y)/2):(y=n.x??(u.x+d.x)/2,w=n.y??u.y+(d.y-u.y)*l);let _=[{x:y,y:u.y},{x:y,y:d.y}],k=[{x:u.x,y:w},{x:d.x,y:w}];i[c]===p?g=c==="x"?_:k:g=c==="x"?k:_}else{let _=[{x:u.x,y:d.y}],k=[{x:d.x,y:u.y}];if(c==="x"?g=i.x===p?k:_:g=i.y===p?_:k,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let M=Math.min(r-1,r-L);i[c]===p?h[c]=(u[c]>e[c]?-1:1)*M:x[c]=(d[c]>a[c]?-1:1)*M}}if(t!==o){let L=c==="x"?"y":"x",M=i[c]===s[L],E=u[L]>d[L],I=u[L]<d[L];(i[c]===1&&(!M&&E||M&&I)||i[c]!==1&&(!M&&I||M&&E))&&(g=c==="x"?_:k)}let T={x:u.x+h.x,y:u.y+h.y},N={x:d.x+x.x,y:d.y+x.y},U=Math.max(Math.abs(T.x-g[0].x),Math.abs(N.x-g[0].x)),O=Math.max(Math.abs(T.y-g[0].y),Math.abs(N.y-g[0].y));U>=O?(y=(T.x+N.x)/2,w=g[0].y):(y=g[0].x,w=(T.y+N.y)/2)}let S={x:u.x+h.x,y:u.y+h.y},C={x:d.x+x.x,y:d.y+x.y};return[[e,...S.x!==g[0].x||S.y!==g[0].y?[S]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],y,w,m,b]}function f3(e,t,a,o){let n=Math.min(U2(e,t)/2,U2(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${l}Q ${r},${l} ${r},${l+n*d}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function Eu({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,borderRadius:l=5,centerX:i,centerY:s,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,y]=c3({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:u,stepPosition:d}),w=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)w+=f3(f[h-1],f[h],f[h+1],l);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,c,p,g,y]}function F2(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function rC(e){let{sourceNode:t,targetNode:a}=e;if(!F2(t)||!F2(a))return null;let o=t.internals.handleBounds||q2(t.handles),n=a.internals.handleBounds||q2(a.handles),r=V2(o?.source??[],e.sourceHandle),l=V2(e.connectionMode===dr.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",Ia.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||ae.Bottom,s=l?.position||ae.Top,u=cr(t,r,i),d=cr(a,l,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:i,targetPosition:s}}function q2(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function cr(e,t,a=ae.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??Ka(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case ae.Top:return{x:n+l/2,y:r};case ae.Right:return{x:n+l,y:r+i/2};case ae.Bottom:return{x:n+l/2,y:r+i};case ae.Left:return{x:n,y:r+i/2}}}function V2(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Rf(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function lC(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Rf(s,t);r.has(u)||(l.push({id:u,color:s.color||a,...s}),r.add(u))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var iC=1e3,p3=10,Kh={nodeOrigin:[0,0],nodeExtent:Ti,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},m3={...Kh,checkEquality:!0};function $h(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function sC(e,t,a){let o=$h(Kh,a);for(let n of e.values())if(n.parentId)Jh(n,e,t,o);else{let r=Iu(n,o.nodeOrigin),l=il(n.extent)?n.extent:o.nodeExtent,i=rl(r,l,Ka(n));n.internals.positionAbsolute=i}}function g3(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function Qh(e){return e==="manual"}function zf(e,t,a,o={}){let n=$h(m3,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!Qh(n.zIndexMode)?iC:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=l.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=Iu(d,n.nodeOrigin),p=il(d.extent)?d.extent:n.nodeExtent,g=rl(c,p,Ka(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:g3(d,f),z:uC(d,i,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),d.parentId&&Jh(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function h3(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Jh(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=$h(Kh,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}h3(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*p3),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!Qh(s)?iC:0,{x:c,y:p,z:g}=x3(e,d,l,i,f,s),{positionAbsolute:y}=e.internals,w=c!==y.x||p!==y.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:c,y:p}:y,z:g}})}function uC(e,t,a){let o=Za(e.zIndex)?e.zIndex:0;return Qh(a)?o:o+(e.selected?t:0)}function x3(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=Ka(e),u=Iu(e,a),d=il(e.extent)?rl(u,e.extent,s):u,f=rl({x:l+d.x,y:i+d.y},o,s);e.extent==="parent"&&(f=Q2(f,s,t));let c=uC(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Pf(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??Di(i),u=Uh(s,l.rect);r.set(l.parentId,{expandedRect:u,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let u=i.internals.positionAbsolute,d=Ka(i),f=i.origin??o,c=l.x<u.x?Math.round(Math.abs(u.x-l.x)):0,p=l.y<u.y?Math.round(Math.abs(u.y-l.y)):0,g=Math.max(d.width,Math.round(l.width)),y=Math.max(d.height,Math.round(l.height)),w=(g-d.width)*f[0],h=(y-d.height)*f[1];(c>0||p>0||w||h)&&(n.push({id:s,type:"position",position:{x:i.position.x-c+w,y:i.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+c,y:x.position.y+p}})})),(d.width<l.width||d.height<l.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-w:0),height:y+(p?f[1]*p-h:0)}})}),n}function dC(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(i),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let y=Tf(p.nodeElement),w=g.measured.width!==y.width||g.measured.height!==y.height;if(!!(y.width&&y.height&&(w||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=il(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(b=Q2(b,y,C))}else m&&(b=rl(b,m,y));let S={...g,measured:y,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:O2("source",p.nodeElement,x,f,g.id),target:O2("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,S),g.parentId&&Jh(S,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(u.push({id:g.id,type:"dimensions",dimensions:y}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:Di(S,n)}))}}if(c.length>0){let p=Pf(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function cC({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function G2(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let u=o.get(l)||new Map;o.set(l,u.set(a,t))}}function ex(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},u=`${n}-${l}--${r}-${i}`,d=`${r}-${i}--${n}-${l}`;G2("source",s,d,e,n,l),G2("target",s,u,e,r,i),t.set(o.id,o)}}function fC(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:fC(a,t):!1}function X2(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function b3(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!fC(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function Ih({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function y3({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=Ri(r,t);return{x:l.x-r.x,y:l.y-r.y}}function pC({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,y=null;function w({noDragClassName:x,handleSelector:m,domNode:b,isSelectable:S,nodeId:C,nodeClickDistance:v=0}){c=St(b);function _({x:U,y:O}){let{nodeLookup:L,nodeExtent:M,snapGrid:E,snapToGrid:I,nodeOrigin:A,onNodeDrag:z,onSelectionDrag:V,onError:R,updateNodePositions:F}=t();r={x:U,y:O};let Z=!1,K=i.size>1,W=K&&M?Eh(Ai(i)):null,ne=K&&I?y3({dragItems:i,snapGrid:E,x:U,y:O}):null;for(let[ee,q]of i){if(!L.has(ee))continue;let Y={x:U-q.distance.x,y:O-q.distance.y};I&&(Y=ne?{x:Math.round(Y.x+ne.x),y:Math.round(Y.y+ne.y)}:Ri(Y,E));let re=null;if(K&&M&&!q.extent&&W){let{positionAbsolute:oe}=q.internals,be=oe.x-W.x+M[0][0],we=oe.x+q.measured.width-W.x2+M[1][0],j=oe.y-W.y+M[0][1],me=oe.y+q.measured.height-W.y2+M[1][1];re=[[be,j],[we,me]]}let{position:ie,positionAbsolute:te}=Hh({nodeId:ee,nextPosition:Y,nodeLookup:L,nodeExtent:re||M,nodeOrigin:A,onError:R});Z=Z||q.position.x!==ie.x||q.position.y!==ie.y,q.position=ie,q.internals.positionAbsolute=te}if(g=g||Z,!!Z&&(F(i,!0),y&&(o||z||!C&&V))){let[ee,q]=Ih({nodeId:C,dragItems:i,nodeLookup:L});o?.(y,i,ee,q),z?.(y,ee,q),C||V?.(y,q)}}async function k(){if(!d)return;let{transform:U,panBy:O,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[E,I]=Mf(u,d,L);(E!==0||I!==0)&&(r.x=(r.x??0)-E/U[2],r.y=(r.y??0)-I/U[2],await O({x:E,y:I})&&_(r)),l=requestAnimationFrame(k)}function T(U){let{nodeLookup:O,multiSelectionActive:L,nodesDraggable:M,transform:E,snapGrid:I,snapToGrid:A,selectNodesOnDrag:z,onNodeDragStart:V,onSelectionDragStart:R,unselectNodesAndEdges:F}=t();f=!0,(!z||!S)&&!L&&C&&(O.get(C)?.selected||F()),S&&z&&C&&e?.(C);let Z=ku(U.sourceEvent,{transform:E,snapGrid:I,snapToGrid:A,containerBounds:d});if(r=Z,i=b3(O,M,Z,C),i.size>0&&(a||V||!C&&R)){let[K,W]=Ih({nodeId:C,dragItems:i,nodeLookup:O});a?.(U.sourceEvent,i,K,W),V?.(U.sourceEvent,K,W),C||R?.(U.sourceEvent,W)}}let N=tf().clickDistance(v).on("start",U=>{let{domNode:O,nodeDragThreshold:L,transform:M,snapGrid:E,snapToGrid:I}=t();d=O?.getBoundingClientRect()||null,p=!1,g=!1,y=U.sourceEvent,L===0&&T(U),r=ku(U.sourceEvent,{transform:M,snapGrid:E,snapToGrid:I,containerBounds:d}),u=Wa(U.sourceEvent,d)}).on("drag",U=>{let{autoPanOnNodeDrag:O,transform:L,snapGrid:M,snapToGrid:E,nodeDragThreshold:I,nodeLookup:A}=t(),z=ku(U.sourceEvent,{transform:L,snapGrid:M,snapToGrid:E,containerBounds:d});if(y=U.sourceEvent,(U.sourceEvent.type==="touchmove"&&U.sourceEvent.touches.length>1||C&&!A.has(C))&&(p=!0),!p){if(!s&&O&&f&&(s=!0,k()),!f){let V=Wa(U.sourceEvent,d),R=V.x-u.x,F=V.y-u.y;Math.sqrt(R*R+F*F)>I&&T(U)}(r.x!==z.xSnapped||r.y!==z.ySnapped)&&i&&f&&(u=Wa(U.sourceEvent,d),_(z))}}).on("end",U=>{if(!f||p){p&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,f=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:O,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:E}=t();if(g&&(L(i,!1),g=!1),n||M||!C&&E){let[I,A]=Ih({nodeId:C,dragItems:i,nodeLookup:O,dragging:!1});n?.(U.sourceEvent,i,I,A),M?.(U.sourceEvent,I,A),C||E?.(U.sourceEvent,A)}}}).filter(U=>{let O=U.target;return!U.button&&(!x||!X2(O,`.${x}`,b))&&(!m||X2(O,m,b))});c.call(N)}function h(){c?.on(".drag",null)}return{update:w,destroy:h}}function w3(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Mu(n,Di(r))>0&&o.push(r);return o}var v3=250;function C3(e,t,a,o){let n=[],r=1/0,l=w3(e,a,t+v3);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=cr(i,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function mC(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(u=>u.id===a):i?.[0])??null;return s&&r?{...s,...cr(l,s,s.position,!0)}:s}function gC(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function S3(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var hC=()=>!0;function L3(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:y,onConnectEnd:w,isValidConnection:h=hC,onReconnectEnd:x,updateConnection:m,getTransform:b,getFromHandle:S,autoPanSpeed:C,dragThreshold:v=1,handleDomNode:_}){let k=Yh(e.target),T=0,N,{x:U,y:O}=Wa(e),L=gC(r,_),M=i?.getBoundingClientRect(),E=!1;if(!M||!L)return;let I=mC(n,L,o,s,t);if(!I)return;let A=Wa(e,M),z=!1,V=null,R=!1,F=null;function Z(){if(!d||!M)return;let[ie,te]=Mf(A,M,C);c({x:ie,y:te}),T=requestAnimationFrame(Z)}let K={...I,nodeId:n,type:L,position:I.position},W=s.get(n),ee={inProgress:!0,isValid:null,from:cr(W,K,ae.Left,!0),fromHandle:K,fromPosition:K.position,fromNode:W,to:A,toHandle:null,toPosition:z2[K.position],toNode:null,pointer:A};function q(){E=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&q();function Y(ie){if(!E){let{x:me,y:_e}=Wa(ie),it=me-U,qt=_e-O;if(!(it*it+qt*qt>v*v))return;q()}if(!S()||!K){re(ie);return}let te=b();A=Wa(ie,M),N=C3(zi(A,te,!1,[1,1]),a,s,K),z||(Z(),z=!0);let oe=xC(ie,{handle:N,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:h,doc:k,lib:u,flowId:f,nodeLookup:s});F=oe.handleDomNode,V=oe.connection,R=S3(!!N,oe.isValid);let be=s.get(n),we=be?cr(be,K,ae.Left,!0):ee.from,j={...ee,from:we,isValid:R,to:oe.toHandle&&R?ll({x:oe.toHandle.x,y:oe.toHandle.y},te):A,toHandle:oe.toHandle,toPosition:R&&oe.toHandle?oe.toHandle.position:z2[K.position],toNode:oe.toHandle?s.get(oe.toHandle.nodeId):null,pointer:A};m(j),ee=j}function re(ie){if(!("touches"in ie&&ie.touches.length>0)){if(E){(N||F)&&V&&R&&y?.(V);let{inProgress:te,...oe}=ee,be={...oe,toPosition:ee.toHandle?ee.toPosition:null};w?.(ie,be),r&&x?.(ie,be)}p(),cancelAnimationFrame(T),z=!1,R=!1,V=null,F=null,k.removeEventListener("mousemove",Y),k.removeEventListener("mouseup",re),k.removeEventListener("touchmove",Y),k.removeEventListener("touchend",re)}}k.addEventListener("mousemove",Y),k.addEventListener("mouseup",re),k.addEventListener("touchmove",Y),k.addEventListener("touchend",re)}function xC(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:u=hC,nodeLookup:d}){let f=r==="target",c=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Wa(e),y=l.elementFromPoint(p,g),w=y?.classList.contains(`${i}-flow__handle`)?y:c,h={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let x=gC(void 0,w),m=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),S=w.classList.contains("connectable"),C=w.classList.contains("connectableend");if(!m||!x)return h;let v={source:f?m:o,sourceHandle:f?b:n,target:f?o:m,targetHandle:f?n:b};h.connection=v;let k=S&&C&&(a===dr.Strict?f&&x==="source"||!f&&x==="target":m!==o||b!==n);h.isValid=k&&u(v),h.toHandle=mC(m,x,b,d,a,!0)}return h}var Of={onPointerDown:L3,isValid:xC};function bC({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=St(e);function r({translateExtent:i,width:s,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),S=m.sourceEvent.ctrlKey&&Pi()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,v=b[2]*Math.pow(2,C*S);t.scaleTo(v)},y=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(y=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-y[0],S[1]-y[1]];y=S;let v=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),_={x:b[0]-C[0]*v,y:b[1]-C[1]*v},k=[[0,0],[s,u]];t.setViewportConstrained({x:_.x,y:_.y,zoom:b[2]},k,i)},x=Sf().on("start",w).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(x,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:Yt}}var Bf=e=>({x:e.x,y:e.y,zoom:e.k}),Mh=({x:e,y:t,zoom:a})=>nl.translate(e,t).scale(a),ur=(e,t)=>e.target.closest(`.${t}`),yC=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),_3=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Nh=(e,t=0,a=_3,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},wC=e=>{let t=e.ctrlKey&&Pi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function k3({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(ur(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&l){let w=Yt(d),h=wC(d),x=f*Math.pow(2,h);o.scaleTo(a,x,w,d);return}let c=d.deltaMode===1?20:1,p=n===fo.Vertical?0:d.deltaX*c,g=n===fo.Horizontal?0:d.deltaY*c;!Pi()&&d.shiftKey&&n!==fo.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let y=Bf(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,y):(e.isPanScrolling=!0,i?.(d,y)),e.panScrollTimeout=setTimeout(()=>{u?.(d,y),e.isPanScrolling=!1},150)}}function I3({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=ur(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function M3({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Bf(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function N3({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&yC(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Bf(r.transform))}}function E3({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&yC(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=Bf(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function T3({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,y=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(ur(c,`${d}-flow__node`)||ur(c,`${d}-flow__edge`)||ur(c,`${d}-flow__selection`)||ur(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!l&&!o||i||f&&!y||ur(c,s)&&y||ur(c,u)&&(!y||r&&y&&!t)||!o&&c.ctrlKey&&y)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&y||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||y||e)&&w}}function vC({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(O=>{let L=O[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=Sf().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=St(e).call(p);b({x:n.x,y:n.y,zoom:Ei(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let y=g.on("wheel.zoom"),w=g.on("dblclick.zoom");p.wheelDelta(wC);async function h(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?hn:tl).transform(Nh(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}function x({noWheelClassName:O,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:E,panOnScroll:I,panOnDrag:A,panOnScrollMode:z,panOnScrollSpeed:V,preventScrolling:R,zoomOnPinch:F,zoomOnScroll:Z,zoomOnDoubleClick:K,panActivationKeyPressed:W=!1,zoomActivationKeyPressed:ne,lib:ee,onTransformChange:q,connectionInProgress:Y,paneClickDistance:re,selectionOnDrag:ie}){E&&!u.isZoomingOrPanning&&m();let te=I&&!ne&&!E;p.clickDistance(ie?1/0:!Za(re)||re<0?0:re);let oe=te?k3({zoomPanValues:u,noWheelClassName:O,d3Selection:g,d3Zoom:p,panOnScrollMode:z,panOnScrollSpeed:V,zoomOnPinch:F,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):I3({noWheelClassName:O,preventScrolling:R,d3ZoomHandler:y});g.on("wheel.zoom",oe,{passive:!1});let be=M3({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:l});p.on("start",be);let we=N3({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:q});p.on("zoom",we);let j=E3({zoomPanValues:u,panOnDrag:A,panOnScroll:I,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});p.on("end",j);let me=T3({panActivationKeyPressed:W,zoomActivationKeyPressed:ne,panOnDrag:A,zoomOnScroll:Z,panOnScroll:I,zoomOnDoubleClick:K,zoomOnPinch:F,userSelectionActive:E,noPanClassName:L,noWheelClassName:O,lib:ee,connectionInProgress:Y});p.filter(me),K?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(O,L,M){let E=Mh(O),I=p?.constrain()(E,L,M);return I&&await h(I),I}async function S(O,L){let M=Mh(O);return await h(M,L),M}function C(O){if(g){let L=Mh(O),M=g.property("__zoom");(M.k!==O.zoom||M.x!==O.x||M.y!==O.y)&&p?.transform(g,L,null,{sync:!0})}}function v(){let O=g?_u(g.node()):{x:0,y:0,k:1};return{x:O.x,y:O.y,zoom:O.k}}async function _(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?hn:tl).scaleTo(Nh(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}async function k(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?hn:tl).scaleBy(Nh(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}function T(O){p?.scaleExtent(O)}function N(O){p?.translateExtent(O)}function U(O){let L=!Za(O)||O<0?0:O;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:S,setViewportConstrained:b,getViewport:v,scaleTo:_,scaleBy:k,setScaleExtent:T,setTranslateExtent:N,syncViewport:C,setClickDistance:U}}var fr;(function(e){e.Line="line",e.Handle="handle"})(fr||(fr={}));function A3({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function Y2(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function ir(e,t){return Math.max(0,t-e)}function sr(e,t){return Math.max(0,e-t)}function _f(e,t,a){return Math.max(0,t-e,e-a)}function j2(e,t){return e?!t:t}function D3(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:y,maxWidth:w,minHeight:h,maxHeight:x}=o,{x:m,y:b,width:S,height:C,aspectRatio:v}=e,_=Math.floor(d?p-e.pointerX:0),k=Math.floor(f?g-e.pointerY:0),T=S+(s?-_:_),N=C+(u?-k:k),U=-r[0]*S,O=-r[1]*C,L=_f(T,y,w),M=_f(N,h,x);if(l){let A=0,z=0;s&&_<0?A=ir(m+_+U,l[0][0]):!s&&_>0&&(A=sr(m+T+U,l[1][0])),u&&k<0?z=ir(b+k+O,l[0][1]):!u&&k>0&&(z=sr(b+N+O,l[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(i){let A=0,z=0;s&&_>0?A=sr(m+_,i[0][0]):!s&&_<0&&(A=ir(m+T,i[1][0])),u&&k>0?z=sr(b+k,i[0][1]):!u&&k<0&&(z=ir(b+N,i[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(n){if(d){let A=_f(T/v,h,x)*v;if(L=Math.max(L,A),l){let z=0;!s&&!u||s&&!u&&c?z=sr(b+O+T/v,l[1][1])*v:z=ir(b+O+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,z)}if(i){let z=0;!s&&!u||s&&!u&&c?z=ir(b+T/v,i[1][1])*v:z=sr(b+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,z)}}if(f){let A=_f(N*v,y,w)/v;if(M=Math.max(M,A),l){let z=0;!s&&!u||u&&!s&&c?z=sr(m+N*v+U,l[1][0])/v:z=ir(m+(u?k:-k)*v+U,l[0][0])/v,M=Math.max(M,z)}if(i){let z=0;!s&&!u||u&&!s&&c?z=ir(m+N*v,i[1][0])/v:z=sr(m+(u?k:-k)*v,i[0][0])/v,M=Math.max(M,z)}}}k=k+(k<0?M:-M),_=_+(_<0?L:-L),n&&(c?T>N*v?k=(j2(s,u)?-_:_)/v:_=(j2(s,u)?-k:k)*v:d?(k=_/v,u=s):(_=k*v,s=u));let E=s?m+_:m,I=u?b+k:b;return{width:S+(s?-_:_),height:C+(u?-k:k),x:r[0]*_*(s?-1:1)+E,y:r[1]*k*(u?-1:1)+I}}var CC={width:0,height:0,x:0,y:0},R3={...CC,pointerX:0,pointerY:0,aspectRatio:1};function z3(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function SC({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=St(e),l={controlDirection:Y2("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:y,shouldResize:w}){let h={...CC},x={...R3};l={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:Y2(u)};let m,b=null,S=[],C,v,_,k=!1,T=tf().on("start",N=>{let{nodeLookup:U,transform:O,snapGrid:L,snapToGrid:M,nodeOrigin:E,paneDomNode:I}=a();if(m=U.get(t),!m)return;b=I?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:z}=ku(N.sourceEvent,{transform:O,snapGrid:L,snapToGrid:M,containerBounds:b});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:A,pointerY:z,aspectRatio:h.width/h.height},C=void 0,v=il(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=U.get(m.parentId)),C&&m.extent==="parent"&&(v=[[0,0],[C.measured.width,C.measured.height]]),S=[],_=void 0;for(let[V,R]of U)if(R.parentId===t&&(S.push({id:V,position:{...R.position},extent:R.extent}),R.extent==="parent"||R.expandParent)){let F=z3(R,m,R.origin??E);_?_=[[Math.min(F[0][0],_[0][0]),Math.min(F[0][1],_[0][1])],[Math.max(F[1][0],_[1][0]),Math.max(F[1][1],_[1][1])]]:_=F}p?.(N,{...h})}).on("drag",N=>{let{transform:U,snapGrid:O,snapToGrid:L,nodeOrigin:M}=a(),E=ku(N.sourceEvent,{transform:U,snapGrid:O,snapToGrid:L,containerBounds:b}),I=[];if(!m)return;let{x:A,y:z,width:V,height:R}=h,F={},Z=m.origin??M,{width:K,height:W,x:ne,y:ee}=D3(x,l.controlDirection,E,l.boundaries,l.keepAspectRatio,Z,v,_),q=K!==V,Y=W!==R,re=ne!==A&&q,ie=ee!==z&&Y;if(!re&&!ie&&!q&&!Y)return;if((re||ie||Z[0]===1||Z[1]===1)&&(F.x=re?ne:h.x,F.y=ie?ee:h.y,h.x=F.x,h.y=F.y,S.length>0)){let we=ne-A,j=ee-z;for(let me of S)me.position={x:me.position.x-we+Z[0]*(K-V),y:me.position.y-j+Z[1]*(W-R)},I.push(me)}if((q||Y)&&(F.width=q&&(!l.resizeDirection||l.resizeDirection==="horizontal")?K:h.width,F.height=Y&&(!l.resizeDirection||l.resizeDirection==="vertical")?W:h.height,h.width=F.width,h.height=F.height),C&&m.expandParent){let we=Z[0]*(F.width??0);F.x&&F.x<we&&(h.x=we,x.x=x.x-(F.x-we));let j=Z[1]*(F.height??0);F.y&&F.y<j&&(h.y=j,x.y=x.y-(F.y-j))}let te=A3({width:h.width,prevWidth:V,height:h.height,prevHeight:R,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),oe={...h,direction:te};w?.(N,oe)!==!1&&(k=!0,g?.(N,oe),o(F,I))}).on("end",N=>{k&&(y?.(N,{...h}),n?.({...h}),k=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var PC=D(J(),1),OC=D(TC(),1);var DC={},AC=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(DC.env?DC.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},RC=e=>e?AC(e):AC;var{useDebugValue:J3}=PC.default,{useSyncExternalStoreWithSelector:eT}=OC.default,tT=e=>e;function ax(e,t=tT,a){let o=eT(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return J3(o),o}var zC=(e,t)=>{let a=RC(e),o=(n,r=t)=>ax(a,n,r);return Object.assign(o,a),o},BC=(e,t)=>e?zC(e,t):zC;function Ue(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var aT=D(Lo()),Vf=(0,B.createContext)(null),oT=Vf.Provider,cS=Ia.error001("react");function ye(e,t){let a=(0,B.useContext)(Vf);if(a===null)throw new Error(cS);return ax(a,e,t)}function We(){let e=(0,B.useContext)(Vf);if(e===null)throw new Error(cS);return(0,B.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var HC={display:"none"},nT={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},fS="react-flow__node-desc",pS="react-flow__edge-desc",rT="react-flow__aria-live",lT=e=>e.ariaLiveMessage,iT=e=>e.ariaLabelConfig;function sT({rfId:e}){let t=ye(lT);return(0,P.jsx)("div",{id:`${rT}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:nT,children:t})}function uT({rfId:e,disableKeyboardA11y:t}){let a=ye(iT);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{id:`${fS}-${e}`,style:HC,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,P.jsx)("div",{id:`${pS}-${e}`,style:HC,children:a["edge.a11yDescription.default"]}),!t&&(0,P.jsx)(sT,{rfId:e})]})}var Gf=(0,B.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,P.jsx)("div",{className:rt(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});Gf.displayName="Panel";var UC="https://reactflow.dev?utm_source=attribution";function dT({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,P.jsx)(Gf,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${UC}`,children:(0,P.jsx)("a",{href:UC,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var cT=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Uf=e=>e.id;function fT(e,t){return Ue(e.selectedNodes.map(Uf),t.selectedNodes.map(Uf))&&Ue(e.selectedEdges.map(Uf),t.selectedEdges.map(Uf))}function pT({onSelectionChange:e}){let t=We(),{selectedNodes:a,selectedEdges:o}=ye(cT,fT);return(0,B.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var mT=e=>!!e.onSelectionChangeHandlers;function gT({onSelectionChange:e}){let t=ye(mT);return e||t?(0,P.jsx)(pT,{onSelectionChange:e}):null}var mS=[0,0],hT={x:0,y:0,zoom:1},xT=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],FC=[...xT,"rfId"],bT=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),qC={translateExtent:Ti,nodeOrigin:mS,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function yT(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=ye(bT,Ue),u=We();(0,B.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=qC,i()}),[]);let d=(0,B.useRef)(qC);return(0,B.useEffect)(()=>{for(let f of FC){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?l(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:tC(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},FC.map(f=>e[f])),null}function VC(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function wT(e){let[t,a]=(0,B.useState)(e==="system"?null:e);return(0,B.useEffect)(()=>{if(e!=="system"){a(e);return}let o=VC(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:VC()?.matches?"dark":"light"}var GC=typeof document<"u"?document:null;function Tu(e=null,t={target:GC,actInsideInputWithModifier:!0}){let[a,o]=(0,B.useState)(!1),n=(0,B.useRef)(!1),r=(0,B.useRef)(new Set([])),[l,i]=(0,B.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,B.useEffect)(()=>{let s=t?.target??GC,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&jh(p))return!1;let y=YC(p.code,i);if(r.current.add(p[y]),XC(l,r.current,!1)){let w=p.composedPath?.()?.[0]||p.target,h=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=YC(p.code,i);XC(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function XC(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function YC(e,t){return t.includes(e)?"code":"key"}var vT=()=>{let e=We();return(0,B.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Nu(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),u={x:t.x-i,y:t.y-s},d=a.snapGrid??n,f=a.snapToGrid??r;return zi(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=ll(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function gS(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)CT(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function CT(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function lx(e,t){return gS(e,t)}function ix(e,t){return gS(e,t)}function sl(e,t){return{id:e,type:"select",selected:t}}function Hi(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(sl(r.id,l)))}return o}function jC({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function ZC(e){return{id:e.id,type:"remove"}}var ST=qh("React Flow","https://reactflow.dev/");function LT(e,t,a={}){return nC(e,t,{...a,onError:a.onError??ST})}var WC=e=>Z2(e),_T=e=>zh(e);function hS(e){return(0,B.forwardRef)(e)}var xS=typeof window<"u"?B.useLayoutEffect:B.useEffect;function KC(e){let[t,a]=(0,B.useState)(BigInt(0)),[o]=(0,B.useState)(()=>kT(()=>a(n=>n+BigInt(1))));return xS(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function kT(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var bS=(0,B.createContext)(null);function IT({children:e}){let t=We(),a=(0,B.useCallback)(i=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),y=s;for(let h of i)y=typeof h=="function"?h(y):h;let w=jC({items:y,lookup:c});for(let h of g.values())w=h(w);d&&u(y),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=KC(a),n=(0,B.useCallback)(i=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let g of i)p=typeof g=="function"?g(p):g;d?u(p):f&&f(jC({items:p,lookup:c}))},[]),r=KC(n),l=(0,B.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,P.jsx)(bS.Provider,{value:l,children:e})}function MT(){let e=(0,B.useContext)(bS);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var NT=e=>!!e.panZoom;function Ma(){let e=vT(),t=We(),a=MT(),o=ye(NT),n=(0,B.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),l=f=>{a.nodeQueue.push(f)},i=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=WC(f)?f:c.get(f.id),y=g.parentId?Gh(g.position,g.measured,g.parentId,c,p):g.position,w={...g,position:y,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Di(w)},u=(f,c,p={replace:!1})=>{l(g=>g.map(y=>{if(y.id===f){let w=typeof c=="function"?c(y):c;return p.replace&&WC(w)?w:{...y,...w}}return y}))},d=(f,c,p={replace:!1})=>{i(g=>g.map(y=>{if(y.id===f){let w=typeof c=="function"?c(y):c;return p.replace&&_T(w)?w:{...y,...w}}return y}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:l,setEdges:i,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,y,w]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y,zoom:w}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:y,onEdgesDelete:w,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:S,edges:C}=await $2({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:b}),v=C.length>0,_=S.length>0;if(v){let k=C.map(ZC);w?.(C),x(k)}if(_){let k=S.map(ZC);y?.(S),h(k)}return(_||v)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=Fh(f),y=g?f:s(f),w=p!==void 0;return y?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=Di(w?h:x),b=Mu(m,y);return c&&b>0||b>=m.width*m.height||b>=y.width*y.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let y=Fh(f)?f:s(f);if(!y)return!1;let w=Mu(y,c);return p&&w>0||w>=c.width*c.height||w>=y.width*y.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let y=typeof c=="function"?c(g):c;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let y=typeof c=="function"?c(g):c;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Bh(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??eC();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,B.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var $C=e=>e.selected,ET=typeof window<"u"?window:void 0;function TT({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=We(),{deleteElements:o}=Ma(),n=Tu(e,{actInsideInputWithModifier:!1}),r=Tu(t,{target:ET});(0,B.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter($C),edges:l.filter($C)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,B.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function AT(e){let t=We();(0,B.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Tf(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ia.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Xf={position:"absolute",width:"100%",height:"100%",top:0,left:0},DT=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function RT({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=fo.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:y,noWheelClassName:w,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:S}){let C=We(),v=(0,B.useRef)(null),{userSelectionActive:_,lib:k,connectionInProgress:T}=ye(DT,Ue),N=Tu(p),U=(0,B.useRef)();AT(v);let O=(0,B.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[x,m]);return(0,B.useEffect)(()=>{if(v.current){U.current=vC({domNode:v.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:I=>C.setState(A=>A.paneDragging===I?A:{paneDragging:I}),onPanZoomStart:(I,A)=>{let{onViewportChangeStart:z,onMoveStart:V}=C.getState();V?.(I,A),z?.(A)},onPanZoom:(I,A)=>{let{onViewportChange:z,onMove:V}=C.getState();V?.(I,A),z?.(A)},onPanZoomEnd:(I,A)=>{let{onViewportChangeEnd:z,onMoveEnd:V}=C.getState();V?.(I,A),z?.(A)}});let{x:L,y:M,zoom:E}=U.current.getViewport();return C.setState({panZoom:U.current,transform:[L,M,E],domNode:v.current.closest(".react-flow")}),()=>{U.current?.destroy()}}},[]),(0,B.useEffect)(()=>{U.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:N,preventScrolling:g,noPanClassName:h,userSelectionActive:_,noWheelClassName:w,lib:k,onTransformChange:O,connectionInProgress:T,selectionOnDrag:S,paneClickDistance:b})},[e,t,a,o,n,r,l,i,s,N,g,h,_,w,k,O,T,S,b]),(0,P.jsx)("div",{className:"react-flow__renderer",ref:v,style:Xf,children:y})}var zT=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function PT(){let{userSelectionActive:e,userSelectionRect:t}=ye(zT,Ue);return e&&t?(0,P.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var ox=(e,t)=>a=>{a.target===t.current&&e?.(a)},OT=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function BT({isSelecting:e,selectionKeyPressed:t,selectionMode:a=bn.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:y}){let w=(0,B.useRef)(0),h=We(),{userSelectionActive:x,elementsSelectable:m,dragging:b,panBy:S,autoPanSpeed:C}=ye(OT,Ue),v=m&&(e||x),_=(0,B.useRef)(null),k=(0,B.useRef)(),T=(0,B.useRef)(new Set),N=(0,B.useRef)(new Set),U=(0,B.useRef)(!1),O=(0,B.useRef)(!1),L=(0,B.useRef)({x:0,y:0}),M=(0,B.useRef)(!1),E=q=>{if(O.current||U.current||h.getState().connection.inProgress){O.current=!1,U.current=!1;return}u?.(q),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},I=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}d?.(q)},A=f?q=>f(q):void 0,z=q=>{O.current&&(q.stopPropagation(),O.current=!1)},V=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Y,transform:re}=h.getState();if(k.current=Y?.getBoundingClientRect(),!k.current)return;let ie=q.target===_.current;if(!ie&&!!q.target.closest(".nokey")||!e||!(l&&ie||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),O.current=!1;let{x:be,y:we}=Wa(q.nativeEvent,k.current),j=zi({x:be,y:we},re);h.setState({userSelectionRect:{width:0,height:0,startX:j.x,startY:j.y,x:be,y:we}}),ie||(q.stopPropagation(),q.preventDefault())};function R(q,Y){let{userSelectionRect:re}=h.getState();if(!re)return;let{transform:ie,nodeLookup:te,edgeLookup:oe,connectionLookup:be,triggerNodeChanges:we,triggerEdgeChanges:j,defaultEdgeOptions:me}=h.getState(),_e={x:re.startX,y:re.startY},{x:it,y:qt}=ll(_e,ie),ea={startX:_e.x,startY:_e.y,x:q<it?q:it,y:Y<qt?Y:qt,width:Math.abs(q-it),height:Math.abs(Y-qt)},Ir=T.current,Xo=N.current;T.current=new Set(If(te,ea,ie,a===bn.Partial,!0).map(ha=>ha.id)),N.current=new Set;let Yo=me?.selectable??!0;for(let ha of T.current){let $=be.get(ha);if($)for(let{edgeId:Fe}of $.values()){let at=oe.get(Fe);at&&(at.selectable??Yo)&&N.current.add(Fe)}}if(!Xh(Ir,T.current)){let ha=Hi(te,T.current,!0);we(ha)}if(!Xh(Xo,N.current)){let ha=Hi(oe,N.current);j(ha)}h.setState({userSelectionRect:ea,userSelectionActive:!0,nodesSelectionActive:!1})}function F(){if(!n||!k.current)return;let[q,Y]=Mf(L.current,k.current,C);S({x:q,y:Y}).then(re=>{if(!O.current||!re){w.current=requestAnimationFrame(F);return}let{x:ie,y:te}=L.current;R(ie,te),w.current=requestAnimationFrame(F)})}let Z=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,B.useEffect)(()=>()=>Z(),[]);let K=q=>{let{userSelectionRect:Y,transform:re,resetSelectedElements:ie}=h.getState();if(!k.current||!Y)return;let{x:te,y:oe}=Wa(q.nativeEvent,k.current);L.current={x:te,y:oe};let be=ll({x:Y.startX,y:Y.startY},re);if(!O.current){let we=t?0:r;if(Math.hypot(te-be.x,oe-be.y)<=we)return;ie(),i?.(q)}O.current=!0,M.current||(F(),M.current=!0),R(te,oe)},W=q=>{if(!v){q.target===_.current&&h.getState().connection.inProgress&&(U.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!x&&q.target===_.current&&h.getState().userSelectionRect&&E?.(q),h.setState({userSelectionActive:!1,userSelectionRect:null}),O.current&&(s?.(q),h.setState({nodesSelectionActive:T.current.size>0})),Z())},ne=q=>{q.target?.releasePointerCapture?.(q.pointerId),Z()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,P.jsxs)("div",{className:rt(["react-flow__pane",{draggable:ee,dragging:b,selection:e}]),onClick:v?void 0:ox(E,_),onContextMenu:ox(I,_),onWheel:ox(A,_),onPointerEnter:v?void 0:c,onPointerMove:v?K:p,onPointerUp:W,onPointerCancel:v?ne:void 0,onPointerDownCapture:v?V:void 0,onClickCapture:v?z:void 0,onPointerLeave:g,ref:_,style:Xf,children:[y,(0,P.jsx)(PT,{})]})}function rx({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),u=i.get(e);if(!u){s?.("012",Ia.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&l)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function yS({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=We(),[s,u]=(0,B.useState)(!1),d=(0,B.useRef)();return(0,B.useEffect)(()=>{if(!t)return d.current=pC({getStoreItems:()=>i.getState(),onNodeMouseDown:f=>{rx({id:f,store:i,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,i,e]),(0,B.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var HT=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function wS(){let e=We();return(0,B.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=HT(l),p=n?r[0]:5,g=n?r[1]:5,y=a.direction.x*p*a.factor,w=a.direction.y*g*a.factor;for(let[,h]of u){if(!c(h))continue;let x={x:h.internals.positionAbsolute.x+y,y:h.internals.positionAbsolute.y+w};n&&(x=Ri(x,r));let{position:m,positionAbsolute:b}=Hh({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:i});h.position=m,h.internals.positionAbsolute=b,f.set(h.id,h)}s(f)},[])}var sx=(0,B.createContext)(null),UT=sx.Provider;sx.Consumer;var vS=()=>(0,B.useContext)(sx),FT=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),CS=(0,B.createContext)(null);function qT({children:e}){let t=ye(FT,Ue);return(0,P.jsx)(CS.Provider,{value:t,children:e})}function VT(){let e=(0,B.useContext)(CS);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var GT={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},XT=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:u}=l;if(!i&&!n)return GT;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===dr.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:d&&u}};function YT({type:e="source",position:t=ae.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=l||null,y=e==="target",w=We(),h=vS(),{connectOnClick:x,noPanClassName:m,rfId:b}=VT(),{connectingFrom:S,connectingTo:C,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:k,clickConnectionInProcess:T,valid:N}=ye(XT(h,g,e),Ue);h||w.getState().onError?.("010",Ia.error010());let U=M=>{let{defaultEdgeOptions:E,onConnect:I,hasDefaultEdges:A}=w.getState(),z={...E,...M};if(A){let{edges:V,setEdges:R,onError:F}=w.getState();R(LT(z,V,{onError:F}))}I?.(z),i?.(z)},O=M=>{if(!h)return;let E=Zh(M.nativeEvent);if(n&&(E&&M.button===0||!E)){let I=w.getState();Of.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:g,nodeId:h,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...A)=>w.getState().onConnectEnd?.(...A),updateConnection:I.updateConnection,onConnect:U,isValidConnection:a||((...A)=>w.getState().isValidConnection?.(...A)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}E?d?.(M):f?.(M)},L=M=>{let{onClickConnectStart:E,onClickConnectEnd:I,connectionClickStartHandle:A,connectionMode:z,isValidConnection:V,lib:R,rfId:F,nodeLookup:Z,connection:K}=w.getState();if(!h||!A&&!n)return;if(!A){E?.(M.nativeEvent,{nodeId:h,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let W=Yh(M.target),ne=a||V,{connection:ee,isValid:q}=Of.isValid(M.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:z,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:ne,flowId:F,doc:W,lib:R,nodeLookup:Z});q&&ee&&U(ee);let Y=structuredClone(K);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,I?.(M,Y),w.setState({connectionClickStartHandle:null})};return(0,P.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${b}-${h}-${g}-${e}`,className:rt(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!y,target:y,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:S,connectingto:C,valid:N,connectionindicator:o&&(!k||_)&&(k||T?r:n)}]),onMouseDown:O,onTouchStart:O,onClick:x?L:void 0,ref:p,...c,children:s})}var Ui=(0,B.memo)(hS(YT));function jT({data:e,isConnectable:t,sourcePosition:a=ae.Bottom}){return(0,P.jsxs)(P.Fragment,{children:[e?.label,(0,P.jsx)(Ui,{type:"source",position:a,isConnectable:t})]})}function ZT({data:e,isConnectable:t,targetPosition:a=ae.Top,sourcePosition:o=ae.Bottom}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ui,{type:"target",position:a,isConnectable:t}),e?.label,(0,P.jsx)(Ui,{type:"source",position:o,isConnectable:t})]})}function WT(){return null}function KT({data:e,isConnectable:t,targetPosition:a=ae.Top}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ui,{type:"target",position:a,isConnectable:t}),e?.label]})}var qf={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},QC={input:jT,default:ZT,output:KT,group:WT};function $T(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var QT=e=>{let{width:t,height:a,x:o,y:n}=Ai(e.nodeLookup,{filter:r=>!!r.selected});return{width:Za(t)?t:null,height:Za(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function JT({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=We(),{width:n,height:r,transformString:l,userSelectionActive:i}=ye(QT,Ue),s=wS(),u=(0,B.useRef)(null);(0,B.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!i&&n!==null&&r!==null;if(yS({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(y=>y.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(qf,p.key)&&(p.preventDefault(),s({direction:qf[p.key],factor:p.shiftKey?4:1}))};return(0,P.jsx)("div",{className:rt(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,P.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var JC=typeof window<"u"?window:void 0,e6=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function SS({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:y,zoomActivationKeyCode:w,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:k,defaultViewport:T,translateExtent:N,minZoom:U,maxZoom:O,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:E,noPanClassName:I,disableKeyboardA11y:A,onViewportChange:z,isControlledViewport:V}){let{nodesSelectionActive:R,userSelectionActive:F}=ye(e6,Ue),Z=Tu(u,{target:JC}),K=Tu(y,{target:JC}),W=K||_,ne=K||b,ee=d&&W!==!0,q=Z||F||ee;return TT({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,P.jsx)(RT,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:ne,panActivationKeyPressed:K,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:!Z&&W,defaultViewport:T,translateExtent:N,minZoom:U,maxZoom:O,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:E,noPanClassName:I,onViewportChange:z,isControlledViewport:V,paneClickDistance:i,selectionOnDrag:ee,children:(0,P.jsxs)(BT,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:W,autoPanOnSelection:k,isSelecting:!!q,selectionMode:f,selectionKeyPressed:Z,paneClickDistance:i,selectionOnDrag:ee,children:[e,R&&(0,P.jsx)(JT,{onSelectionContextMenu:M,noPanClassName:I,disableKeyboardA11y:A})]})})}SS.displayName="FlowRenderer";var t6=(0,B.memo)(SS),a6=e=>t=>e?If(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function o6(e){return ye((0,B.useCallback)(a6(e),[e]),Ue)}var n6=e=>e.updateNodeInternals;function r6(){let e=ye(n6),[t]=(0,B.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,B.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function l6({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=We(),r=(0,B.useRef)(null),l=(0,B.useRef)(null),i=(0,B.useRef)(e.sourcePosition),s=(0,B.useRef)(e.targetPosition),u=(0,B.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,B.useEffect)(()=>{r.current&&!e.hidden&&(!d||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[d,e.hidden]),(0,B.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,B.useEffect)(()=>{if(r.current){let f=u.current!==t,c=i.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(u.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function i6({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:y,nodeTypes:w,nodeClickDistance:h,onError:x}){let{node:m,internals:b,isParent:S}=ye(q=>{let Y=q.nodeLookup.get(e),re=q.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:re}},Ue),C=m.type||"default",v=w?.[C]||QC[C];v===void 0&&(x?.("003",Ia.error003(C)),C="default",v=w?.default||QC.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),k=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),N=!!(m.focusable||d&&typeof m.focusable>"u"),U=We(),O=Vh(m),L=l6({node:m,nodeType:C,hasDimensions:O,resizeObserver:f}),M=yS({nodeRef:L,disabled:m.hidden||!_,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:k,nodeClickDistance:h}),E=wS();if(m.hidden)return null;let I=Ka(m),A=$T(m),z=k||_||t||a||o||n,V=a?q=>a(q,{...b.userNode}):void 0,R=o?q=>o(q,{...b.userNode}):void 0,F=n?q=>n(q,{...b.userNode}):void 0,Z=r?q=>r(q,{...b.userNode}):void 0,K=l?q=>l(q,{...b.userNode}):void 0,W=q=>{let{selectNodesOnDrag:Y,nodeDragThreshold:re}=U.getState();k&&(!Y||!_||re>0)&&rx({id:e,store:U,nodeRef:L}),t&&t(q,{...b.userNode})},ne=q=>{if(!(jh(q.nativeEvent)||g)){if(Th.includes(q.key)&&k){let Y=q.key==="Escape";rx({id:e,store:U,unselect:Y,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(qf,q.key)){q.preventDefault();let{ariaLabelConfig:Y}=U.getState();U.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),E({direction:qf[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:Y,height:re,autoPanOnNodeFocus:ie,setCenter:te}=U.getState();if(!ie)return;If(new Map([[e,m]]),{x:0,y:0,width:Y,height:re},q,!0).length>0||te(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:q[2]})};return(0,P.jsx)("div",{className:rt(["react-flow__node",`react-flow__node-${C}`,{[p]:_},m.className,{selected:m.selected,selectable:k,parent:S,draggable:_,dragging:M}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:z?"all":"none",visibility:O?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:R,onMouseLeave:F,onContextMenu:Z,onClick:W,onDoubleClick:K,onKeyDown:N?ne:void 0,tabIndex:N?0:void 0,onFocus:N?ee:void 0,role:m.ariaRole??(N?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${fS}-${y}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,P.jsx)(UT,{value:e,children:(0,P.jsx)(v,{id:e,data:m.data,type:C,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:k,draggable:_,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...I})})})}var s6=(0,B.memo)(i6),u6=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function LS(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=ye(u6,Ue),r=o6(e.onlyRenderVisibleElements),l=r6();return(0,P.jsx)("div",{className:"react-flow__nodes",style:Xf,children:r.map(i=>(0,P.jsx)(s6,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}LS.displayName="NodeRenderer";var d6=(0,B.memo)(LS);function c6(e){return ye((0,B.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&oC({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ue)}var f6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,P.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},p6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,P.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},eS={[Ni.Arrow]:f6,[Ni.ArrowClosed]:p6};function m6(e){let t=We();return(0,B.useMemo)(()=>Object.prototype.hasOwnProperty.call(eS,e)?eS[e]:(t.getState().onError?.("009",Ia.error009(e)),null),[e])}var g6=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=m6(t);return s?(0,P.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,P.jsx)(s,{color:a,strokeWidth:l})}):null},_S=({defaultColor:e,rfId:t})=>{let a=ye(r=>r.edges),o=ye(r=>r.defaultEdgeOptions),n=(0,B.useMemo)(()=>lC(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,P.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,P.jsx)("defs",{children:n.map(r=>(0,P.jsx)(g6,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};_S.displayName="MarkerDefinitions";var h6=(0,B.memo)(_S);function kS({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:u,...d}){let[f,c]=(0,B.useState)({x:1,y:0,width:0,height:0}),p=rt(["react-flow__edge-textwrapper",u]),g=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(g.current){let y=g.current.getBBox();c({x:y.x,y:y.y,width:y.width,height:y.height})}},[a]),a?(0,P.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,P.jsx)("rect",{width:f.width+2*l[0],x:-l[0],y:-l[1],height:f.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,P.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}kS.displayName="EdgeText";var x6=(0,B.memo)(kS);function pr({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("path",{...d,d:e,fill:"none",className:rt(["react-flow__edge-path",d.className])}),u?(0,P.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Za(t)&&Za(a)?(0,P.jsx)(x6,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function tS({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ae.Left||e===ae.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function IS({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top}){let[l,i]=tS({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=tS({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=Af({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:u});return[`M${e},${t} C${l},${i} ${s},${u} ${o},${n}`,d,f,c,p]}function MS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})=>{let[x,m,b]=IS({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),S=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:S,path:x,labelX:m,labelY:b,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})})}var b6=MS({isInternal:!1}),NS=MS({isInternal:!0});b6.displayName="SimpleBezierEdge";NS.displayName="SimpleBezierEdgeInternal";function ES(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ae.Bottom,targetPosition:g=ae.Top,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,S]=Eu({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:C,path:m,labelX:b,labelY:S,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:y,markerStart:w,interactionWidth:x})})}var TS=ES({isInternal:!1}),AS=ES({isInternal:!0});TS.displayName="SmoothStepEdge";AS.displayName="SmoothStepEdgeInternal";function DS(e){return(0,B.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,P.jsx)(TS,{...a,id:o,pathOptions:(0,B.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var y6=DS({isInternal:!1}),RS=DS({isInternal:!0});y6.displayName="StepEdge";RS.displayName="StepEdgeInternal";function zS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:y})=>{let[w,h,x]=Df({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:m,path:w,labelX:h,labelY:x,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:y})})}var w6=zS({isInternal:!1}),PS=zS({isInternal:!0});w6.displayName="StraightEdge";PS.displayName="StraightEdgeInternal";function OS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=ae.Bottom,targetPosition:i=ae.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,S]=Oi({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:C,path:m,labelX:b,labelY:S,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:x})})}var v6=OS({isInternal:!1}),BS=OS({isInternal:!0});v6.displayName="BezierEdge";BS.displayName="BezierEdgeInternal";var aS={default:BS,straight:PS,step:RS,smoothstep:AS,simplebezier:NS},oS={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},C6=(e,t,a)=>a===ae.Left?e-t:a===ae.Right?e+t:e,S6=(e,t,a)=>a===ae.Top?e-t:a===ae.Bottom?e+t:e,nS="react-flow__edgeupdater";function rS({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,P.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:rt([nS,`${nS}-${i}`]),cx:C6(t,o,e),cy:S6(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function L6({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=We(),y=(b,S)=>{if(b.button!==0)return;let{autoPanOnConnect:C,domNode:v,connectionMode:_,connectionRadius:k,lib:T,onConnectStart:N,cancelConnection:U,nodeLookup:O,rfId:L,panBy:M,updateConnection:E}=g.getState(),I=S.type==="target",A=(R,F)=>{c(!1),f?.(R,a,S.type,F)},z=R=>u?.(a,R),V=(R,F)=>{c(!0),d?.(b,a,S.type),N?.(R,F)};Of.onPointerDown(b.nativeEvent,{autoPanOnConnect:C,connectionMode:_,connectionRadius:k,domNode:v,handleId:S.id,nodeId:S.nodeId,nodeLookup:O,isTarget:I,edgeUpdaterType:S.type,lib:T,flowId:L,cancelConnection:U,panBy:M,isValidConnection:(...R)=>g.getState().isValidConnection?.(...R)??!0,onConnect:z,onConnectStart:V,onConnectEnd:(...R)=>g.getState().onConnectEnd?.(...R),onReconnectEnd:A,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>y(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=b=>y(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,P.jsxs)(P.Fragment,{children:[(e===!0||e==="source")&&(0,P.jsx)(rS,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,P.jsx)(rS,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function _6({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:y,noPanClassName:w,onError:h,disableKeyboardA11y:x}){let m=ye(te=>te.edgeLookup.get(e)),b=ye(te=>te.defaultEdgeOptions);m=b?{...b,...m}:m;let S=m.type||"default",C=y?.[S]||aS[S];C===void 0&&(h?.("011",Ia.error011(S)),S="default",C=y?.default||aS.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),k=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,B.useRef)(null),[N,U]=(0,B.useState)(!1),[O,L]=(0,B.useState)(!1),M=We(),{zIndex:E=m.zIndex,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:R,targetPosition:F}=ye((0,B.useCallback)(te=>{let oe=te.nodeLookup.get(m.source),be=te.nodeLookup.get(m.target);if(!oe||!be)return oS;let we=rC({id:e,sourceNode:oe,targetNode:be,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:te.connectionMode,onError:h}),j=aC({selected:m.selected,zIndex:m.zIndex,sourceNode:oe,targetNode:be,elevateOnSelect:te.elevateEdgesOnSelect,zIndexMode:te.zIndexMode});return{...we||oS,zIndex:j}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Ue),Z=(0,B.useMemo)(()=>m.markerStart?`url('#${Rf(m.markerStart,g)}')`:void 0,[m.markerStart,g]),K=(0,B.useMemo)(()=>m.markerEnd?`url('#${Rf(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||I===null||A===null||z===null||V===null)return null;let W=te=>{let{addSelectedEdges:oe,unselectNodesAndEdges:be,multiSelectionActive:we}=M.getState();k&&(M.setState({nodesSelectionActive:!1}),m.selected&&we?(be({nodes:[],edges:[m]}),T.current?.blur()):oe([e])),n&&n(te,m)},ne=r?te=>{r(te,{...m})}:void 0,ee=l?te=>{l(te,{...m})}:void 0,q=i?te=>{i(te,{...m})}:void 0,Y=s?te=>{s(te,{...m})}:void 0,re=u?te=>{u(te,{...m})}:void 0,ie=te=>{if(!x&&Th.includes(te.key)&&k){let{unselectNodesAndEdges:oe,addSelectedEdges:be}=M.getState();te.key==="Escape"?(T.current?.blur(),oe({edges:[m]})):be([e])}};return(0,P.jsx)("svg",{style:{zIndex:E},children:(0,P.jsxs)("g",{className:rt(["react-flow__edge",`react-flow__edge-${S}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!k&&!n,updating:N,selectable:k}]),onClick:W,onDoubleClick:ne,onContextMenu:ee,onMouseEnter:q,onMouseMove:Y,onMouseLeave:re,onKeyDown:v?ie:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${pS}-${g}`:void 0,ref:T,...m.domAttributes,children:[!O&&(0,P.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:k,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:R,targetPosition:F,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Z,markerEnd:K,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,P.jsx)(L6,{edge:m,isReconnectable:_,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:R,targetPosition:F,setUpdateHover:U,setReconnecting:L})]})})}var k6=(0,B.memo)(_6),I6=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function HS({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:y}){let{edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,onError:m}=ye(I6,Ue),b=c6(t);return(0,P.jsxs)("div",{className:"react-flow__edges",children:[(0,P.jsx)(h6,{defaultColor:e,rfId:a}),b.map(S=>(0,P.jsx)(k6,{id:S,edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:y},S))]})}HS.displayName="EdgeRenderer";var M6=(0,B.memo)(HS),lS=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function N6({children:e}){let t=We(),a=(0,B.useRef)(null),[o]=(0,B.useState)(()=>t.getState().transform);return xS(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=lS(l)))};return r(),t.subscribe(r)},[t]),(0,P.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:lS(o)},children:e})}function E6(e){let t=Ma(),a=(0,B.useRef)(!1);(0,B.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var T6=e=>e.panZoom?.syncViewport;function A6(e){let t=ye(T6),a=We();return(0,B.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function iS(e){return e.connection.inProgress?{...e.connection,to:zi(e.connection.to,e.transform)}:{...e.connection}}function D6(e){return e?a=>{let o=iS(a);return e(o)}:iS}function ux(e){let t=D6(e);return ye(t,Ue)}var R6=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function z6({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=ye(R6,Ue);return!(r&&n&&s)?null:(0,P.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,P.jsx)("g",{className:rt(["react-flow__connection",Rh(i)]),children:(0,P.jsx)(US,{style:t,type:a,CustomComponent:o,isValid:i})})})}var US=({style:e,type:t=Ao.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=ux();if(!n)return;if(a)return(0,P.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:Rh(o),toNode:d,toHandle:f,pointer:p});let g="",y={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case Ao.Bezier:[g]=Oi(y);break;case Ao.SimpleBezier:[g]=IS(y);break;case Ao.Step:[g]=Eu({...y,borderRadius:0});break;case Ao.SmoothStep:[g]=Eu(y);break;default:[g]=Df(y)}return(0,P.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};US.displayName="ConnectionLine";var P6={};function sS(e=P6){let t=(0,B.useRef)(e),a=We();(0,B.useEffect)(()=>{},[e])}function O6(){let e=We(),t=(0,B.useRef)(!1);(0,B.useEffect)(()=>{},[])}function FS({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:y,connectionLineComponent:w,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:k,elementsSelectable:T,defaultViewport:N,translateExtent:U,minZoom:O,maxZoom:L,preventScrolling:M,defaultMarkerColor:E,zoomOnScroll:I,zoomOnPinch:A,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:R,zoomOnDoubleClick:F,panOnDrag:Z,autoPanOnSelection:K,onPaneClick:W,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:Y,onPaneContextMenu:re,paneClickDistance:ie,nodeClickDistance:te,onEdgeContextMenu:oe,onEdgeMouseEnter:be,onEdgeMouseMove:we,onEdgeMouseLeave:j,reconnectRadius:me,onReconnect:_e,onReconnectStart:it,onReconnectEnd:qt,noDragClassName:ea,noWheelClassName:Ir,noPanClassName:Xo,disableKeyboardA11y:Yo,nodeExtent:ha,rfId:$,viewport:Fe,onViewportChange:at,nodesDraggable:Pa}){return sS(e),sS(t),O6(),E6(a),A6(Fe),(0,P.jsx)(t6,{onPaneClick:W,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:re,onPaneScroll:Y,paneClickDistance:ie,deleteKeyCode:_,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,elementsSelectable:T,zoomOnScroll:I,zoomOnPinch:A,zoomOnDoubleClick:F,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:R,panOnDrag:Z,autoPanOnSelection:K,defaultViewport:N,translateExtent:U,minZoom:O,maxZoom:L,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:ea,noWheelClassName:Ir,noPanClassName:Xo,disableKeyboardA11y:Yo,onViewportChange:at,isControlledViewport:!!Fe,children:(0,P.jsxs)(N6,{children:[(0,P.jsx)(M6,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:_e,onReconnectStart:it,onReconnectEnd:qt,onlyRenderVisibleElements:k,onEdgeContextMenu:oe,onEdgeMouseEnter:be,onEdgeMouseMove:we,onEdgeMouseLeave:j,reconnectRadius:me,defaultMarkerColor:E,noPanClassName:Xo,disableKeyboardA11y:Yo,rfId:$}),(0,P.jsx)(z6,{style:y,type:g,component:w,containerStyle:h}),(0,P.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,P.jsx)(d6,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:te,onlyRenderVisibleElements:k,noPanClassName:Xo,noDragClassName:ea,disableKeyboardA11y:Yo,nodeExtent:ha,rfId:$,nodesDraggable:Pa}),(0,P.jsx)("div",{className:"react-flow__viewport-portal"})]})})}FS.displayName="GraphView";var B6=(0,B.memo)(FS),H6=qh("React Flow","https://reactflow.dev/"),uS=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,y=new Map,w=new Map,h=o??t??[],x=a??e??[],m=d??[0,0],b=f??Ti;ex(y,w,h);let{nodesInitialized:S}=zf(x,p,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:c}),C=[0,0,1];if(l&&n&&r){let v=Ai(p,{filter:N=>!!((N.width||N.initialWidth)&&(N.height||N.initialHeight))}),{x:_,y:k,zoom:T}=Nu(v,n,r,s,u,i?.padding??.1);C=[_,k,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:x,nodesInitialized:S,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:w,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:Ti,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:dr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...Dh},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:H6,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Ah,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},U6=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>BC((p,g)=>{async function y(){let{nodeLookup:w,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:b,height:S,minZoom:C,maxZoom:v}=g();h&&(await K2({nodes:w,width:b,height:S,panZoom:h,minZoom:C,maxZoom:v},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...uS({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:w=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,fitViewQueued:C,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:k,hasSelectedNodes:T}=zf(w,h,x,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:v}),N=_&&T;C&&k?(y(),p({nodes:w,nodesInitialized:k,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:N})):p({nodes:w,nodesInitialized:k,nodesSelectionActive:N})},setEdges:w=>{let{connectionLookup:h,edgeLookup:x}=g();ex(h,x,w),p({edges:w})},setDefaultNodesAndEdges:(w,h)=>{if(w){let{setNodes:x}=g();x(w),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:b,nodeOrigin:S,nodeExtent:C,debug:v,fitViewQueued:_,zIndexMode:k}=g(),{changes:T,updatedInternals:N}=dC(w,x,m,b,S,C,k);N&&(sC(x,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:k}),_?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(v&&console.log("React Flow: trigger node changes",T),h?.(T)))},updateNodePositions:(w,h=!1)=>{let x=[],m=[],{nodeLookup:b,triggerNodeChanges:S,connection:C,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[k,T]of w){let N=b.get(k),U=!!(N?.expandParent&&N?.parentId&&T?.position),O={id:k,type:"position",position:U?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:h};if(N&&C.inProgress&&C.fromNode.id===N.id){let L=cr(N,C.fromHandle,ae.Left,!0);v({...C,from:L})}U&&N.parentId&&x.push({id:k,parentId:N.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(O)}if(x.length>0){let{parentLookup:k,nodeOrigin:T}=g(),N=Pf(x,b,k,T);m.push(...N)}for(let k of _.values())m=k(m);S(m)},triggerNodeChanges:w=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:b,debug:S}=g();if(w?.length){if(b){let C=lx(w,m);x(C)}S&&console.log("React Flow: trigger node changes",w),h?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:b,debug:S}=g();if(w?.length){if(b){let C=ix(w,m);x(C)}S&&console.log("React Flow: trigger edge changes",w),h?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>sl(v,!0));b(C);return}b(Hi(m,new Set([...w]),!0)),S(Hi(x))},addSelectedEdges:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>sl(v,!0));S(C);return}S(Hi(x,new Set([...w]))),b(Hi(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:b,triggerNodeChanges:S,triggerEdgeChanges:C}=g(),v=w||m,_=h||x,k=[];for(let N of v){if(!N.selected)continue;let U=b.get(N.id);U&&(U.selected=!1),k.push(sl(N.id,!1))}let T=[];for(let N of _)N.selected&&T.push(sl(N.id,!1));S(k),C(T)},setMinZoom:w=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([w,x]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,w]),p({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let S=h.reduce((v,_)=>_.selected?[...v,sl(_.id,!1)]:v,[]),C=w.reduce((v,_)=>_.selected?[...v,sl(_.id,!1)]:v,[]);x(S),m(C)},setNodeExtent:w=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:v}=g();w[0][0]===C[0][0]&&w[0][1]===C[0][1]&&w[1][0]===C[1][0]&&w[1][1]===C[1][1]||(zf(h,x,m,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:v}),p({nodeExtent:w}))},panBy:w=>{let{transform:h,width:x,height:m,panZoom:b,translateExtent:S}=g();return cC({delta:w,panZoom:b,transform:h,translateExtent:S,width:x,height:m})},setCenter:async(w,h,x)=>{let{width:m,height:b,maxZoom:S,panZoom:C}=g();if(!C)return!1;let v=typeof x?.zoom<"u"?x.zoom:S;return await C.setViewport({x:m/2-w*v,y:b/2-h*v,zoom:v},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Dh}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...uS()})}},Object.is);function dx({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,B.useState)(()=>U6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,P.jsx)(oT,{value:g,children:(0,P.jsx)(IT,{children:(0,P.jsx)(qT,{children:p})})})}function F6({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,B.useContext)(Vf)?(0,P.jsx)(P.Fragment,{children:e}):(0,P.jsx)(dx,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var q6={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function V6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onNodesDelete:T,onEdgesDelete:N,onDelete:U,onSelectionChange:O,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:E,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onBeforeDelete:V,connectionMode:R,connectionLineType:F=Ao.Bezier,connectionLineStyle:Z,connectionLineComponent:K,connectionLineContainerStyle:W,deleteKeyCode:ne="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:Y=bn.Full,panActivationKeyCode:re="Space",multiSelectionKeyCode:ie=Pi()?"Meta":"Control",zoomActivationKeyCode:te=Pi()?"Meta":"Control",snapToGrid:oe,snapGrid:be,onlyRenderVisibleElements:we=!1,selectNodesOnDrag:j,nodesDraggable:me,autoPanOnNodeFocus:_e,nodesConnectable:it,nodesFocusable:qt,nodeOrigin:ea=mS,edgesFocusable:Ir,edgesReconnectable:Xo,elementsSelectable:Yo=!0,defaultViewport:ha=hT,minZoom:$=.5,maxZoom:Fe=2,translateExtent:at=Ti,preventScrolling:Pa=!0,nodeExtent:Mr,defaultMarkerColor:Co="#b1b1b7",zoomOnScroll:_p=!0,zoomOnPinch:qk=!0,panOnScroll:Vk=!1,panOnScrollSpeed:Gk=.5,panOnScrollMode:Xk=fo.Free,zoomOnDoubleClick:Yk=!0,panOnDrag:jk=!0,onPaneClick:Zk,onPaneMouseEnter:Wk,onPaneMouseMove:Kk,onPaneMouseLeave:$k,onPaneScroll:Qk,onPaneContextMenu:Jk,paneClickDistance:eI=1,nodeClickDistance:tI=0,children:aI,onReconnect:oI,onReconnectStart:nI,onReconnectEnd:rI,onEdgeContextMenu:lI,onEdgeDoubleClick:iI,onEdgeMouseEnter:sI,onEdgeMouseMove:uI,onEdgeMouseLeave:dI,reconnectRadius:cI=10,onNodesChange:fI,onEdgesChange:pI,noDragClassName:mI="nodrag",noWheelClassName:gI="nowheel",noPanClassName:qx="nopan",fitView:Vx,fitViewOptions:Gx,connectOnClick:hI,attributionPosition:xI,proOptions:bI,defaultEdgeOptions:yI,elevateNodesOnSelect:wI=!0,elevateEdgesOnSelect:vI=!1,disableKeyboardA11y:Xx=!1,autoPanOnConnect:CI,autoPanOnNodeDrag:SI,autoPanOnSelection:LI=!0,autoPanSpeed:_I,connectionRadius:kI,isValidConnection:II,onError:MI,style:NI,id:Yx,nodeDragThreshold:EI,connectionDragThreshold:TI,viewport:AI,onViewportChange:DI,width:RI,height:zI,colorMode:PI="light",debug:OI,onScroll:jx,ariaLabelConfig:BI,zIndexMode:Zx="basic",...HI},UI){let kp=Yx||"1",FI=wT(PI),qI=(0,B.useCallback)(Wx=>{Wx.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),jx?.(Wx)},[jx]);return(0,P.jsx)("div",{"data-testid":"rf__wrapper",...HI,onScroll:qI,style:{...NI,...q6},ref:UI,className:rt(["react-flow",n,FI]),id:Yx,role:"application",children:(0,P.jsxs)(F6,{nodes:e,edges:t,width:RI,height:zI,fitView:Vx,fitViewOptions:Gx,minZoom:$,maxZoom:Fe,nodeOrigin:ea,nodeExtent:Mr,zIndexMode:Zx,children:[(0,P.jsx)(yT,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,nodesDraggable:me,autoPanOnNodeFocus:_e,nodesConnectable:it,nodesFocusable:qt,edgesFocusable:Ir,edgesReconnectable:Xo,elementsSelectable:Yo,elevateNodesOnSelect:wI,elevateEdgesOnSelect:vI,minZoom:$,maxZoom:Fe,nodeExtent:Mr,onNodesChange:fI,onEdgesChange:pI,snapToGrid:oe,snapGrid:be,connectionMode:R,translateExtent:at,connectOnClick:hI,defaultEdgeOptions:yI,fitView:Vx,fitViewOptions:Gx,onNodesDelete:T,onEdgesDelete:N,onDelete:U,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:E,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:qx,nodeOrigin:ea,rfId:kp,autoPanOnConnect:CI,autoPanOnNodeDrag:SI,autoPanSpeed:_I,onError:MI,connectionRadius:kI,isValidConnection:II,selectNodesOnDrag:j,nodeDragThreshold:EI,connectionDragThreshold:TI,onBeforeDelete:V,debug:OI,ariaLabelConfig:BI,zIndexMode:Zx}),(0,P.jsx)(B6,{onInit:u,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:l,connectionLineType:F,connectionLineStyle:Z,connectionLineComponent:K,connectionLineContainerStyle:W,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:Y,deleteKeyCode:ne,multiSelectionKeyCode:ie,panActivationKeyCode:re,zoomActivationKeyCode:te,onlyRenderVisibleElements:we,defaultViewport:ha,translateExtent:at,minZoom:$,maxZoom:Fe,preventScrolling:Pa,zoomOnScroll:_p,zoomOnPinch:qk,zoomOnDoubleClick:Yk,panOnScroll:Vk,panOnScrollSpeed:Gk,panOnScrollMode:Xk,panOnDrag:jk,autoPanOnSelection:LI,onPaneClick:Zk,onPaneMouseEnter:Wk,onPaneMouseMove:Kk,onPaneMouseLeave:$k,onPaneScroll:Qk,onPaneContextMenu:Jk,paneClickDistance:eI,nodeClickDistance:tI,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onReconnect:oI,onReconnectStart:nI,onReconnectEnd:rI,onEdgeContextMenu:lI,onEdgeDoubleClick:iI,onEdgeMouseEnter:sI,onEdgeMouseMove:uI,onEdgeMouseLeave:dI,reconnectRadius:cI,defaultMarkerColor:Co,noDragClassName:mI,noWheelClassName:gI,noPanClassName:qx,rfId:kp,disableKeyboardA11y:Xx,nodeExtent:Mr,viewport:AI,onViewportChange:DI,nodesDraggable:me}),(0,P.jsx)(gT,{onSelectionChange:O}),aI,(0,P.jsx)(dT,{proOptions:bI,position:xI}),(0,P.jsx)(uT,{rfId:kp,disableKeyboardA11y:Xx})]})})}var qS=hS(V6);var G6=e=>e.nodes;function VS(){return ye(G6,Ue)}var X6=e=>e.edges;function GS(){return ye(X6,Ue)}var Y6=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function $a(){return ye(Y6,Ue)}var bH=Ia.error014();function j6({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,P.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:rt(["react-flow__background-pattern",a,o])})}function Z6({radius:e,className:t}){return(0,P.jsx)("circle",{cx:e,cy:e,r:e,className:rt(["react-flow__background-pattern","dots",t])})}var Do;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Do||(Do={}));var W6={[Do.Dots]:1,[Do.Lines]:1,[Do.Cross]:6},K6=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function XS({id:e,variant:t=Do.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:u,patternClassName:d}){let f=(0,B.useRef)(null),{transform:c,patternId:p}=ye(K6,Ue),g=o||W6[t],y=t===Do.Dots,w=t===Do.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],b=Array.isArray(r)?r:[r,r],S=w?[m,m]:x,C=[b[0]*c[2]+S[0]/2,b[1]*c[2]+S[1]/2],v=`${p}${e||""}`;return(0,P.jsxs)("svg",{className:rt(["react-flow__background",u]),style:{...s,...Xf,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:f,"data-testid":"rf__background",children:[(0,P.jsx)("pattern",{id:v,x:c[0]%x[0],y:c[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:y?(0,P.jsx)(Z6,{radius:m/2,className:d}):(0,P.jsx)(j6,{dimensions:S,lineWidth:n,variant:t,className:d})}),(0,P.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}XS.displayName="Background";var YS=(0,B.memo)(XS);function $6(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,P.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Q6(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,P.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function J6(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,P.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function eA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,P.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function tA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,P.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Ff({children:e,className:t,...a}){return(0,P.jsx)("button",{type:"button",className:rt(["react-flow__controls-button",t]),...a,children:e})}var aA=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function jS({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=We(),{isInteractive:y,minZoomReached:w,maxZoomReached:h,ariaLabelConfig:x}=ye(aA,Ue),{zoomIn:m,zoomOut:b,fitView:S}=Ma(),C=()=>{m(),r?.()},v=()=>{b(),l?.()},_=()=>{S(n),i?.()},k=()=>{g.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),s?.(!y)};return(0,P.jsxs)(Gf,{className:rt(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ff,{onClick:C,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,P.jsx)($6,{})}),(0,P.jsx)(Ff,{onClick:v,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:w,children:(0,P.jsx)(Q6,{})})]}),a&&(0,P.jsx)(Ff,{className:"react-flow__controls-fitview",onClick:_,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,P.jsx)(J6,{})}),o&&(0,P.jsx)(Ff,{className:"react-flow__controls-interactive",onClick:k,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:y?(0,P.jsx)(tA,{}):(0,P.jsx)(eA,{})}),d]})}jS.displayName="Controls";var yH=(0,B.memo)(jS);function oA({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:y}=r||{},w=l||g||y;return(0,P.jsx)("rect",{className:rt(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var nA=(0,B.memo)(oA),rA=e=>e.nodes.map(t=>t.id),nx=e=>e instanceof Function?e:()=>e;function lA({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=nA,onClick:l}){let i=ye(rA,Ue),s=nx(t),u=nx(e),d=nx(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,P.jsx)(P.Fragment,{children:i.map(c=>(0,P.jsx)(sA,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:f},c))})}function iA({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:u,x:d,y:f,width:c,height:p}=ye(g=>{let y=g.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let w=y.internals.userNode,{x:h,y:x}=y.internals.positionAbsolute,{width:m,height:b}=Ka(w);return{node:w,x:h,y:x,width:m,height:b}},Ue);return!u||u.hidden||!Vh(u)?null:(0,P.jsx)(i,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:l,onClick:s,id:u.id})}var sA=(0,B.memo)(iA),uA=(0,B.memo)(lA),dA=200,cA=150,fA=e=>!e.hidden,pA=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Uh(Ai(e.nodeLookup,{filter:fA}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},dS=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,mA=(e,t)=>dS(e.viewBB,t.viewBB)&&dS(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,gA="react-flow__minimap-desc";function ZS({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:y=!1,zoomable:w=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:b=5}){let S=We(),C=(0,B.useRef)(null),{boundingRect:v,viewBB:_,rfId:k,panZoom:T,translateExtent:N,flowWidth:U,flowHeight:O,ariaLabelConfig:L}=ye(pA,mA),M=e?.width??dA,E=e?.height??cA,I=v.width/M,A=v.height/E,z=Math.max(I,A),V=z*M,R=z*E,F=b*z,Z=v.x-(V-v.width)/2-F,K=v.y-(R-v.height)/2-F,W=V+F*2,ne=R+F*2,ee=`${gA}-${k}`,q=(0,B.useRef)(0),Y=(0,B.useRef)();q.current=z,(0,B.useEffect)(()=>{if(C.current&&T)return Y.current=bC({domNode:C.current,panZoom:T,getTransform:()=>S.getState().transform,getViewScale:()=>q.current}),()=>{Y.current?.destroy()}},[T]),(0,B.useEffect)(()=>{Y.current?.update({translateExtent:N,width:U,height:O,inversePan:x,pannable:y,zoomStep:m,zoomable:w})},[y,w,x,m,N,U,O]);let re=p?oe=>{let[be,we]=Y.current?.pointer(oe)||[0,0];p(oe,{x:be,y:we})}:void 0,ie=g?(0,B.useCallback)((oe,be)=>{let we=S.getState().nodeLookup.get(be).internals.userNode;g(oe,we)},[]):void 0,te=h??L["minimap.ariaLabel"];return(0,P.jsx)(Gf,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*z:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:rt(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,P.jsxs)("svg",{width:M,height:E,viewBox:`${Z} ${K} ${W} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:C,onClick:re,children:[te&&(0,P.jsx)("title",{id:ee,children:te}),(0,P.jsx)(uA,{onClick:ie,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,P.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Z-F},${K-F}h${W+F*2}v${ne+F*2}h${-W-F*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}ZS.displayName="MiniMap";var WS=(0,B.memo)(ZS),hA=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,xA={[fr.Line]:"right",[fr.Handle]:"bottom-right"};function bA({nodeId:e,position:t,variant:a=fr.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:y,onResize:w,onResizeEnd:h}){let x=vS(),m=typeof e=="string"?e:x,b=We(),S=(0,B.useRef)(null),C=a===fr.Handle,v=ye((0,B.useCallback)(hA(C&&p),[C,p]),Ue),_=(0,B.useRef)(null),k=t??xA[a];(0,B.useEffect)(()=>{if(!(!S.current||!m))return _.current||(_.current=SC({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:N,transform:U,snapGrid:O,snapToGrid:L,nodeOrigin:M,domNode:E}=b.getState();return{nodeLookup:N,transform:U,snapGrid:O,snapToGrid:L,nodeOrigin:M,paneDomNode:E}},onChange:(N,U)=>{let{triggerNodeChanges:O,nodeLookup:L,parentLookup:M,nodeOrigin:E}=b.getState(),I=[],A={x:N.x,y:N.y},z=L.get(m);if(z&&z.expandParent&&z.parentId){let V=z.origin??E,R=N.width??z.measured.width??0,F=N.height??z.measured.height??0,Z={id:z.id,parentId:z.parentId,rect:{width:R,height:F,...Gh({x:N.x??z.position.x,y:N.y??z.position.y},{width:R,height:F},z.parentId,L,V)}},K=Pf([Z],L,M,E);I.push(...K),A.x=N.x?Math.max(V[0]*R,N.x):void 0,A.y=N.y?Math.max(V[1]*F,N.y):void 0}if(A.x!==void 0&&A.y!==void 0){let V={id:m,type:"position",position:{...A}};I.push(V)}if(N.width!==void 0&&N.height!==void 0){let R={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:N.width,height:N.height}};I.push(R)}for(let V of U){let R={...V,type:"position"};I.push(R)}O(I)},onEnd:({width:N,height:U})=>{let O={id:m,type:"dimensions",resizing:!1,dimensions:{width:N,height:U}};b.getState().triggerNodeChanges([O])}})),_.current.update({controlPosition:k,boundaries:{minWidth:i,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:y,onResize:w,onResizeEnd:h,shouldResize:g}),()=>{_.current?.destroy()}},[k,i,s,u,d,f,y,w,h,g]);let T=k.split("-");return(0,P.jsx)("div",{className:rt(["react-flow__resize-control","nodrag",...T,a,o]),ref:S,style:{...n,scale:v,...l&&{[C?"backgroundColor":"borderColor"]:l}},children:r})}var wH=(0,B.memo)(bA);var da=D(J(),1),tL=D(Lo(),1);var Zf=D(J(),1);var Yf=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var KS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var $S=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var cx=e=>{let t=$S(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Au=D(J(),1);var jf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var QS=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Fi=D(J(),1);var yA=(0,Fi.createContext)({});var JS=()=>(0,Fi.useContext)(yA);var eL=(0,Au.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=JS()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,Au.createElement)("svg",{ref:s,...jf,width:t??u??jf.width,height:t??u??jf.height,stroke:e??c,strokeWidth:g,className:Yf("lucide",p,n),...!r&&!QS(i)&&{"aria-hidden":"true"},...i},[...l.map(([y,w])=>(0,Au.createElement)(y,w)),...Array.isArray(r)?r:[r]])});var H=(e,t)=>{let a=(0,Zf.forwardRef)(({className:o,...n},r)=>(0,Zf.createElement)(eL,{ref:r,iconNode:t,className:Yf(`lucide-${KS(cx(e))}`,`lucide-${e}`,o),...n}));return a.displayName=cx(e),a};var wA=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],ul=H("audio-lines",wA);var vA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qa=H("check",vA);var CA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Du=H("chevron-down",CA);var SA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qi=H("chevron-right",SA);var LA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ru=H("chevron-left",LA);var _A=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],zu=H("chevron-up",_A);var kA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],mr=H("circle-alert",kA);var IA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gr=H("circle-check",IA);var MA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],po=H("circle-question-mark",MA);var NA=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Pu=H("clapperboard",NA);var EA=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ou=H("copy",EA);var TA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Vi=H("download",TA);var AA=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],hr=H("ellipsis",AA);var DA=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Bu=H("eye-off",DA);var RA=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hu=H("eye",RA);var zA=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],Ro=H("file-pen",zA);var PA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Uu=H("file-spreadsheet",PA);var OA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Wt=H("file-text",OA);var BA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],Fu=H("file-up",BA);var HA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Kt=H("film",HA);var UA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],qu=H("folder-open",UA);var FA=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],xr=H("folder",FA);var qA=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],br=H("funnel",qA);var VA=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Vu=H("grip-vertical",VA);var GA=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Gi=H("hand",GA);var XA=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Gu=H("hash",XA);var YA=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],yn=H("image-plus",YA);var jA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],mo=H("image",jA);var ZA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Xu=H("info",ZA);var WA=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Yu=H("keyboard",WA);var KA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zo=H("layers",KA);var $A=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],dl=H("layout-grid",$A);var QA=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],ju=H("list",QA);var JA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],yr=H("loader-circle",JA);var e8=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Zu=H("map",e8);var t8=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],wr=H("maximize-2",t8);var a8=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Wu=H("maximize",a8);var o8=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],cl=H("mic",o8);var n8=[["path",{d:"M5 12h14",key:"1ays0h"}]],Ku=H("minus",n8);var r8=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Xi=H("mouse-pointer",r8);var l8=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ja=H("music",l8);var i8=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],$u=H("paperclip",i8);var s8=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Qu=H("pause",s8);var u8=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Po=H("pen-line",u8);var d8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],fl=H("pencil",d8);var c8=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],Ju=H("person-standing",c8);var f8=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Na=H("play",f8);var p8=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ke=H("plus",p8);var m8=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],pl=H("redo-2",m8);var g8=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],vr=H("refresh-cw",g8);var h8=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ed=H("rotate-ccw",h8);var x8=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ml=H("search",x8);var b8=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],td=H("settings-2",b8);var y8=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],ad=H("sliders-horizontal",y8);var w8=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ea=H("sparkles",w8);var v8=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Cr=H("square-split-vertical",v8);var C8=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Ta=H("table",C8);var S8=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],od=H("tag",S8);var L8=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],Sr=H("text-align-justify",L8);var _8=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],gl=H("trash-2",_8);var k8=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Lr=H("triangle-alert",k8);var I8=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],wn=H("type",I8);var M8=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],hl=H("undo-2",M8);var N8=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],nd=H("unlink",N8);var E8=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],xl=H("upload",E8);var T8=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],go=H("video",T8);var A8=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],rd=H("waypoints",A8);var D8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lt=H("x",D8);var _t=D(X(),1);function ca({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,u]=(0,da.useState)(!1),d=(0,da.useRef)(null),f=(0,da.useRef)(null),[c,p]=(0,da.useState)({top:0,left:0,placement:"bottom"}),g=(0,da.useMemo)(()=>t.find(m=>m.value===e),[t,e]),y=(0,da.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),b=window.innerHeight,S=Math.min(t.length*34+16,260),v=b-m.bottom<S&&m.top>S,_=v?m.top-6:m.bottom+6,k=r?m.width:void 0;p({top:_,left:m.left,width:k,placement:v?"top":"bottom"})},[t.length,r]);(0,da.useEffect)(()=>{if(!s)return;y();let m=C=>{let v=C.target;d.current?.contains(v)||f.current?.contains(v)||u(!1)},b=C=>{C.key==="Escape"&&u(!1)},S=()=>{y()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",S,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",y)}},[s,y]);let w=(0,da.useCallback)(m=>{m.stopPropagation(),!n&&u(b=>!b)},[n]),h=(0,da.useCallback)((m,b)=>{b||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,_t.jsxs)(_t.Fragment,{children:[(0,_t.jsxs)("button",{ref:d,type:"button",className:x,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,_t.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,_t.jsx)(Du,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,tL.createPortal)((0,_t.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,_t.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,S=!!m.subtitle||!!m.badge||!!m.icon;return(0,_t.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${S?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,_t.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,_t.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,_t.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,_t.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,_t.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,_t.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,_t.jsx)(Qa,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Oo=D(J(),1),aL=D(Lo(),1),ho=D(X(),1),ld=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,Oo.useState)(!1),i=(0,Oo.useRef)(null),s=(0,Oo.useRef)(null),[u,d]=(0,Oo.useState)({left:0}),f=(0,Oo.useCallback)(()=>{if(!i.current)return;let p=i.current.getBoundingClientRect(),g=a.startsWith("top"),y=a.endsWith("Right"),w=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=y?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:w,bottom:h,left:x})},[a]);(0,Oo.useEffect)(()=>{if(!r)return;f();let p=y=>{let w=y.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=y=>{y.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),l(g=>!g)};return(0,ho.jsxs)(ho.Fragment,{children:[(0,ho.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,aL.createPortal)((0,ho.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,ho.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,ho.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),l(!1))},children:[p.icon?(0,ho.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,ho.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var oL=D(J(),1),fx=D(X(),1),px=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,oL.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,fx.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,fx.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var nL=D(J(),1),rL=D(Lo(),1);var Bo=D(X(),1),bl=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:l,children:i})=>((0,nL.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,rL.createPortal)((0,Bo.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Bo.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,Bo.jsxs)("div",{className:"wf-modal-header",children:[(0,Bo.jsx)("div",{className:"wf-modal-title",children:a}),(0,Bo.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Bo.jsx)(Lt,{size:16})})]}),(0,Bo.jsx)("div",{className:["wf-modal-body",l].filter(Boolean).join(" "),children:i}),o?(0,Bo.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Kf=D(J(),1),lL=D(fh(),1);var yl=D(X(),1),id=null,R8=()=>{let[e,t]=(0,Kf.useState)([]);return(0,Kf.useEffect)(()=>(id=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{id=null}),[]),e.length===0?null:(0,yl.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=Xu,n="#60a5fa";return a.type==="success"?(o=gr,n="#34d399"):a.type==="warning"?(o=Lr,n="#fb923c"):a.type==="error"&&(o=mr,n="#f87171"),(0,yl.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,yl.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,yl.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function z8(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,lL.createRoot)(t).render((0,yl.jsx)(R8,{}))}function Wf(e,t,a=2500){z8();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;id?id({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{id?.({id:o,type:e,content:t,durationMs:a})},50)}var $t={success:(e,t)=>Wf("success",e,t),warning:(e,t)=>Wf("warning",e,t),error:(e,t)=>Wf("error",e,t),info:(e,t)=>Wf("info",e,t)};var iL=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,i);return i},sL=(e=>e?iL(e):iL);var sd=D(J(),1);var P8=e=>e;function O8(e,t=P8){let a=sd.default.useSyncExternalStore(e.subscribe,sd.default.useCallback(()=>t(e.getState()),[e,t]),sd.default.useCallback(()=>t(e.getInitialState()),[e,t]));return sd.default.useDebugValue(a),a}var uL=e=>{let t=sL(e),a=o=>O8(t,o);return Object.assign(a,t),a},Yi=(e=>e?uL(e):uL);var mL=D(J(),1);var dL=e=>Symbol.iterator in e,cL=e=>"entries"in e,fL=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},B8=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function pL(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:dL(e)&&dL(t)?cL(e)&&cL(t)?fL(e,t):B8(e,t):fL({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function gL(e){let t=mL.default.useRef(void 0);return a=>{let o=e(a);return pL(t.current,o)?t.current:t.current=o}}var xL={stroke:"#b1b1b7",strokeWidth:2},$f={type:"animated",style:xL,animated:!1};function hL(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function H8(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function bL(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:H8(e),...$f,...e,data:{...t,createdAt:a},animated:e.animated??$f.animated,style:{...xL,...e.style??{}},sourceHandle:hL(e.sourceHandle),targetHandle:hL(e.targetHandle)}}var yL={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},U8={text:"text-editor",image:"import",video:"import",audio:"import"};var wL={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Qf(e,t){return{label:"",materialType:e,status:"empty",selectedTool:U8[e],params:{},failStrategy:"abort",...t}}var F8={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function vL(e){return F8[e]??[]}function q8(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function V8(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=yL[n];if(l)for(let i of l){let s=wL[i];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function Jf(e,t){let a=q8(e),o=V8(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function ep(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!Jf(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of Oh(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function tp(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function G8(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function CL(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return tp(e,"rejected","duplicate_node");a.add(d.id)}let o=G8([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return tp(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return tp(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(d=>!l.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!l.has(d.source)&&!l.has(d.target))];for(let d of t.addEdges??[]){let f=bL(d),c=ep(f,i,u);if(!c.valid)return tp(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:i,edges:u,status:"allowed"}}function SL(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var ap=!1,op=!1;function np(){ap=!0}function LL(){op=!0,ap=!1}function _L(){ap=!1,op=!1}function X8(){op=!1}function mx(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function gx(e,t){return{nodes:e.slice(),edges:t.slice()}}function ud(e,t){return t||(op&&e===0?"reset":ap&&e===0?"user-delete":"autosave")}function rp(e){let t=gx(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:mx({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(X8(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var Y8=50,j8=300;function dd(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Qt={current:null,lastPushAt:0},se=Yi()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&np(),e({nodes:lx(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:ix(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&np();let o=t(),n=CL({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return SL(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&np(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{_L(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Qt.current=dd(a,o),Qt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=dd(t().nodes,t().edges);if(Qt.current&&Qt.current.sig===a.sig)return;let o=Date.now();if(Qt.current&&o-Qt.lastPushAt>=j8){let n=Qt.current;e(r=>({past:[...r.past,n].slice(-Y8),future:[]})),Qt.lastPushAt=o}Qt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=dd(o,n);Qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=dd(o,n);Qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Qt.current=dd(a,o),Qt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{LL(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Qt.current=null,Qt.lastPushAt=0}})),kL=()=>se(gL(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var IL=()=>se(e=>e.past.length>0),ML=()=>se(e=>e.future.length>0);var BL=D(J(),1);var NL={total:0,completed:0,running:0,pending:0,percentage:0},Ve=Yi()(e=>({executionId:null,status:"idle",error:null,progress:NL,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:NL,nodeStatuses:{}})}));var EL=D(J(),1),TL="(prefers-reduced-motion: reduce)";function Z8(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(TL);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function W8(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(TL).matches}function AL(){return(0,EL.useSyncExternalStore)(Z8,W8)}var Ho=D(J(),1),Ut=D(X(),1),K8=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:u})=>{let f=(0,Ho.useId)().replace(/:/g,""),c=`${f}-glow`,p=`${f}-grad`,g=`beam-flow-${f}`,y=(0,Ho.useRef)(null),[w,h]=(0,Ho.useState)(0);(0,Ho.useEffect)(()=>{y.current&&h(y.current.getTotalLength())},[e]);let{dashSize:x,gapSize:m,offsetRange:b}=(0,Ho.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,k=_*(1/3),T=_*(2/3);return{dashSize:k,gapSize:T,offsetRange:_}},[w]),S=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-b:0}px; }
            to { stroke-dashoffset: ${s?0:-b}px; }
        }
    `;return(0,Ut.jsxs)("g",{className:u,children:[(0,Ut.jsxs)("defs",{children:[(0,Ut.jsx)("style",{children:S}),(0,Ut.jsxs)("filter",{id:c,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,Ut.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,Ut.jsxs)("feMerge",{children:[(0,Ut.jsx)("feMergeNode",{in:"blur"}),(0,Ut.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,Ut.jsxs)("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",children:[(0,Ut.jsx)("stop",{offset:"0%",stopColor:n}),(0,Ut.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,Ut.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,Ut.jsx)("path",{ref:y,d:e,fill:"none",stroke:"none"}),w>0&&(0,Ut.jsx)("path",{d:e,stroke:`url(#${p})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${x} ${m}`,fill:"none",filter:`url(#${c})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},DL=K8;var cd=D(J(),1);var PL=D(J(),1);var $8={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u4E0A\u4F20","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25"},RL=$8;var Q8={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local upload","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources"},zL=Q8;var hx={zh:RL,en:zL},lp="zh",xx=new Set;function J8(e){return xx.add(e),()=>xx.delete(e)}function eD(){return lp}function OL(e){let t=e==="en"?"en":"zh";if(t!==lp){lp=t;for(let a of xx)a()}}function vn(e){return hx[lp][e]??hx.zh[e]??hx.en[e]??e}function ue(){return(0,PL.useSyncExternalStore)(J8,eD),vn}var sp=D(X(),1),ip=28,tD=({edgeId:e,x:t,y:a})=>{let o=ue(),n=se(i=>i.applyCanvasInputMutation),r=(0,cd.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,cd.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,sp.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-ip/2,y:a-ip/2,width:ip,height:ip,children:(0,sp.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,sp.jsx)(nd,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},up=(0,cd.memo)(tD);var eo=D(X(),1),aD=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[u,d,f]=Oi({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),c=Ve(w=>w.nodeStatuses[s]==="running"),p=AL(),g=i?"var(--wb-accent)":"var(--wb-edge)",y=i?2.5:2;return c&&p?(0,eo.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,eo.jsx)(pr,{id:e,path:u,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:y}}),(0,eo.jsx)(up,{edgeId:e,x:d,y:f})]}):c?(0,eo.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,eo.jsx)(pr,{id:e,path:u,style:{stroke:g,strokeWidth:y,opacity:0}}),(0,eo.jsx)(DL,{pathD:u,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:y}),(0,eo.jsx)(up,{edgeId:e,x:d,y:f})]}):(0,eo.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,eo.jsx)(pr,{id:e,path:u,style:{stroke:g,strokeWidth:y}}),(0,eo.jsx)(up,{edgeId:e,x:d,y:f})]})},HL=(0,BL.memo)(aD);var ji=D(J(),1);function to(e){e.stopPropagation()}function bx(e){e.preventDefault(),e.stopPropagation()}var ce=D(X(),1),oD=[{type:"text",Icon:Wt,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:yn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:go,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:Ja,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Ta,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:Kt,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],nD=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:d,isAssetsOpen:f=!1})=>{let c=ue(),[p,g]=(0,ji.useState)(!1),y=u!==void 0?u:p,w=d||(()=>g(m=>!m)),h=(0,ji.useCallback)(m=>{e(m),d?d():g(!1)},[e,d]),x=[{key:"select",icon:(0,ce.jsx)(Xi,{size:15}),label:c("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,ce.jsx)(Gi,{size:15}),label:c("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,ce.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:to,onMouseDown:to,children:[(0,ce.jsxs)("div",{style:{position:"relative"},children:[(0,ce.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${y?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:bx,title:c("toolbar.addNode"),children:(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(Ke,{size:20})})}),y&&(0,ce.jsx)("div",{className:"wf-dock-add-popover",children:oD.map(m=>(0,ce.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:bx,children:[(0,ce.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,ce.jsx)(m.Icon,{size:18})}),(0,ce.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,ce.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,ce.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ce.jsx)(ld,{items:x,selectedKeys:[r],placement:"topCenter",children:(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,ce.jsx)(Xi,{size:16}):(0,ce.jsx)(Gi,{size:16})}),(0,ce.jsx)(zu,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,ce.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:c("toolbar.assets"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(qu,{size:17})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(hl,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(pl,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(po,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},UL=(0,ji.memo)(nD);var Zi=D(J(),1);var he=D(X(),1),rD={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},lD=e=>Math.round(e.transform[2]*100),iD=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:u})=>{let d=ue(),{zoomIn:f,zoomOut:c,fitView:p}=Ma(),g=ye(lD),y=Ve(T=>T.status),w=Ve(T=>T.progress),h=Ve(T=>T.error),x=y==="pending"||y==="running",m=y==="paused",b=y==="completed"||y==="error"||y==="cancelled",S=w.total>0,C=(0,Zi.useCallback)(()=>{p({duration:250,padding:.1})},[p]),v=(0,Zi.useCallback)(()=>{f({duration:150})},[f]),_=(0,Zi.useCallback)(()=>{c({duration:150})},[c]),k=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,he.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:to,onMouseDown:to,children:[r&&(x||m||b&&u?(0,he.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[x||m?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${y}`,children:[d(rD[y]),S&&` (${w.completed}/${w.total})`]}),x?(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:d("exec.pauseTitle"),children:(0,he.jsx)(Qu,{size:14})}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:d("exec.resumeTitle"),children:(0,he.jsx)(Na,{size:14})}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,he.jsx)(Lt,{size:14})})]}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,he.jsx)(Na,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&u&&(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,he.jsx)(ed,{size:14})})]}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,he.jsx)(Na,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,he.jsxs)("div",{className:"wf-header-capsule",children:[(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,he.jsx)(Wu,{size:15})}),(0,he.jsx)("div",{className:"wf-header-capsule__divider"}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:d("header.zoomOut"),children:(0,he.jsx)(Ku,{size:15})}),(0,he.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:d("header.zoomIn"),children:(0,he.jsx)(Ke,{size:15})})]}),(0,he.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,he.jsx)(dl,{size:15})}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,he.jsx)(rd,{size:15})}),(0,he.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,he.jsx)(Zu,{size:15})}),n&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{className:"wf-header-capsule__divider"}),(0,he.jsx)(ld,{items:k,selectedKeys:[o],placement:"bottomRight",children:(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,he.jsx)(Cr,{size:15})})})]})]})]})},FL=(0,Zi.memo)(iD);var Uo=D(J(),1);var de=D(X(),1),sD=[{key:"all",label:"\u5168\u90E8",icon:xr},{key:"character",label:"\u89D2\u8272 (1)",icon:Ea},{key:"scene",label:"\u573A\u666F (2)",icon:mo},{key:"prop",label:"\u9053\u5177 (3)",icon:od},{key:"style",label:"\u98CE\u683C (4)",icon:Ea},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:Wt},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:xr},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:Kt}],uD=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,Uo.useState)(o),[i,s]=(0,Uo.useState)(""),[u,d]=(0,Uo.useState)([]),[f,c]=(0,Uo.useState)(!1),[p,g]=(0,Uo.useState)(null),y=(0,Uo.useCallback)(async()=>{c(!0),g(null);try{let x=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${x}`),b=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(b=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let S=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(S=_.artifacts.map(k=>({id:k.id,name:k.name||k.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:k.prompt||k.agent,real_path:k.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(k.id)}`,tags:[k.type||"artifact"],updatedAt:k.createdAt})))}}let C=[...b,...S];d(C)}catch(x){g(x.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{c(!1)}},[r]);(0,Uo.useEffect)(()=>{e&&y()},[e,y]);let w=x=>{l(x),n?.(x)},h=u.filter(x=>{if(!i.trim())return!0;let m=i.toLowerCase();return x.name.toLowerCase().includes(m)||x.description&&x.description.toLowerCase().includes(m)||x.tags&&x.tags.some(b=>b.toLowerCase().includes(m))});return e?(0,de.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:to,onMouseDown:to,onClick:x=>x.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,de.jsx)(xr,{size:18}),(0,de.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,de.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:y,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,de.jsx)(vr,{size:14,className:f?"wf-spin":""})}),(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,de.jsx)(Lt,{size:16})})]})]}),(0,de.jsx)("div",{className:"wf-assets-drawer__categories",children:sD.map(x=>{let m=x.icon,b=r===x.key;return(0,de.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${b?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(x.key),children:[(0,de.jsx)(m,{size:13}),(0,de.jsx)("span",{children:x.label})]},x.key)})}),(0,de.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,de.jsx)(ml,{size:14,className:"wf-assets-drawer__search-icon"}),(0,de.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:x=>s(x.target.value)}),i&&(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,de.jsx)(Lt,{size:12})})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__body",children:[f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(vr,{size:20,className:"wf-spin"}),(0,de.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),p&&!f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,de.jsx)("span",{children:p}),(0,de.jsx)("button",{type:"button",onClick:y,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!f&&!p&&h.length===0&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(xr,{size:32,strokeWidth:1.2}),(0,de.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,de.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!f&&!p&&h.length>0&&(0,de.jsx)("div",{className:"wf-assets-drawer__grid",children:h.map(x=>(0,de.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(x),title:`\u70B9\u51FB\u5C06\u300C${x.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,de.jsxs)("div",{className:"wf-assets-card__preview",children:[x.type==="scene"||x.type==="character"||x.type==="artifacts"?(0,de.jsx)("img",{src:x.previewUrl,alt:x.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,de.jsx)(Wt,{size:24,className:"wf-assets-card__file-icon"}),(0,de.jsx)("span",{className:"wf-assets-card__type-tag",children:x.type})]}),(0,de.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,de.jsx)("div",{className:"wf-assets-card__name",children:x.name}),x.description&&(0,de.jsx)("div",{className:"wf-assets-card__desc",children:x.description})]}),(0,de.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(x)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,de.jsx)(Ke,{size:14}),(0,de.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},x.id))})]})]}):null},qL=uD;var kt=D(X(),1),dD=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],cD=({isOpen:e,onClose:t})=>e?(0,kt.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:to,onMouseDown:to,onClick:t,children:(0,kt.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,kt.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,kt.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,kt.jsx)(Yu,{size:18}),(0,kt.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,kt.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,kt.jsx)(Lt,{size:16})})]}),(0,kt.jsx)("div",{className:"wf-shortcuts-modal__body",children:dD.map(a=>(0,kt.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,kt.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,kt.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,kt.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,kt.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,kt.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,kt.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,VL=cD;var ao=D(J(),1),YL=D(Lo(),1);var It=D(X(),1),GL=278,vl=12,fD=8,yx=160,wl=18,pD={AudioLines:(0,It.jsx)(ul,{size:wl}),ImageGen:(0,It.jsx)(yn,{size:wl}),Mic:(0,It.jsx)(cl,{size:wl}),PersonStanding:(0,It.jsx)(Ju,{size:wl}),TextGen:(0,It.jsx)(wn,{size:wl}),VideoGen:(0,It.jsx)(go,{size:wl})},mD={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function XL(e){return e?mD[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function gD(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-GL:e;return Math.min(Math.max(vl,o),Math.max(vl,a-GL-vl))}var hD=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,ao.useRef)(null),[u,d]=(0,ao.useState)({left:t,top:a,maxHeight:yx});(0,ao.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?yx:window.innerHeight,p=gD(t,i),g=a+fD,y=Math.max(vl,c-vl-yx),w=Math.min(Math.max(vl,g),y);d({left:p,top:w,maxHeight:Math.max(0,c-w-vl)})},[i,e,t,a]),(0,ao.useEffect)(()=>{if(!e)return;let c=g=>{s.current&&!s.current.contains(g.target)&&l()},p=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[l,e]);let f=(0,ao.useMemo)(()=>n.map(c=>(0,It.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,It.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,It.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:XL(c.icon).bg,color:XL(c.icon).color},children:pD[c.icon]??(0,It.jsx)(Ea,{size:wl})}):null,(0,It.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,It.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,It.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,YL.createPortal)((0,It.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,It.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,It.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},dp=(0,ao.memo)(hD);var oo=D(J(),1),jL=D(Lo(),1);var Re=D(X(),1),xD=210,bD=230,yD=260,wD=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,oo.useRef)(null),[c,p]=(0,oo.useState)("main"),g=ue();(0,oo.useEffect)(()=>{a&&p("main")},[a]),(0,oo.useEffect)(()=>{if(!a)return;let b=C=>{f.current&&!f.current.contains(C.target)&&n()},S=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",S)}},[a,n]);let y=(0,oo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,Re.jsx)(Ke,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,u,d,g]),w=(0,oo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Re.jsx)(wn,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Re.jsx)(mo,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Re.jsx)(go,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Re.jsx)(ul,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,Re.jsx)(Ta,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,Re.jsx)(Kt,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?bD:xD,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-yD-8);return(0,jL.createPortal)((0,Re.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:b=>b.preventDefault(),children:c==="main"?y.map(b=>(0,Re.jsxs)(oo.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Re.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:S=>{S.stopPropagation(),b.action==="open-add-node"?p("add-node"):r(b.action,o)},children:[b.icon?(0,Re.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,Re.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,Re.jsx)(qi,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,Re.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,Re.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Re.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Re.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),p("main")},title:g("menu.back"),children:(0,Re.jsx)(Ru,{size:16})}),(0,Re.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Re.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(b=>(0,Re.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:S=>{S.stopPropagation(),l?.(b.type),n()},children:[(0,Re.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,Re.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,Re.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,Re.jsx)(qi,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},ZL=wD;var WL=D(J(),1),KL=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:y,onCategoryKey:w,isAssetsOpen:h=!1,enabled:x=!0})=>{(0,WL.useEffect)(()=>{if(!x)return;let m=b=>{let S=b.target;if(["INPUT","TEXTAREA"].includes(S.tagName)||S.isContentEditable)return;let C=b.metaKey||b.ctrlKey,v=b.key.toLowerCase();if(!C&&h&&/^[1-6]$/.test(b.key)){b.preventDefault(),w?.(parseInt(b.key,10));return}if(!C&&v==="a"){b.preventDefault(),u?.();return}if(!C&&v==="v"){b.preventDefault(),p?.("select");return}if(!C&&v==="h"){b.preventDefault(),p?.("pan");return}if(!C&&v==="n"){b.preventDefault(),c?.();return}if(!C&&v==="m"){b.preventDefault(),f?.();return}if(b.key==="?"||b.shiftKey&&b.key==="/"){b.preventDefault(),d?.();return}if(C&&b.key==="1"){b.preventDefault(),g?.();return}if(C&&b.key==="0"){b.preventDefault(),y?.();return}if((b.key==="Delete"||b.key==="Backspace")&&l&&!C){b.preventDefault(),o?.();return}if(b.key==="Escape"){b.preventDefault(),h?u?.():l&&n?.();return}if(C&&v==="d"&&l){b.preventDefault(),r?.();return}if(C&&v==="c"&&!b.shiftKey){b.preventDefault(),e?.();return}if(C&&v==="v"){b.preventDefault(),t?.();return}if(C&&v==="a"){b.preventDefault(),a?.();return}if(C&&v==="z"&&!b.shiftKey){b.preventDefault(),i?.();return}C&&v==="z"&&b.shiftKey&&(b.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,e,t,a,o,n,r,l,i,s,u,d,f,c,p,g,y,w,h])};var xo=D(J(),1);function cp(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function $L(e,t,a){return wx(e,t,a).valid}function wx(e,t,a){let o=ep(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var vx={minZoom:.23,maxZoom:1.29,defaultZoom:1},vD={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},QL={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},CD={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},SD={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},JL={portrait:vD,square:QL,video_landscape:CD,audio_compact:SD};function Cx(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function e_(e){return JL[Cx(e)]}function t_(e,t){let a=JL[t]||QL;return Math.round(e/a.aspectRatio)}function _r(e){return e_(e).default.width}function a_(e){return e_(e).default.height}function fp(e,t,a){let o=Qf(e,{status:"empty",nodeWidth:_r(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function Cl(e,t,a){return{nodes:[fp(e,t,a)],edges:[]}}function Sx(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function LD(e,t){return`${e}-${t}`}function pp(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function mp(e){return vL(e).map(t=>{let a=String(t.targetTool);return{key:LD(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function o_(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var _D={visible:!1,x:0,y:0,options:[]};function n_(e){let t=ue(),{screenToFlowPosition:a}=Ma(),o=se(p=>p.applyCanvasInputMutation),n=(0,xo.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,xo.useState)(_D),i=(0,xo.useRef)(null),s=(0,xo.useRef)(null),u=(0,xo.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let y=se.getState().nodes.find(h=>h.id===g.nodeId),w=y?.data?.materialType;if(!y||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),d=(0,xo.useCallback)((p,g)=>{let y=g.fromNode?.id??null,w=g.toNode?.id??null,h=i.current,x=h?mp(h.materialType):[],m=null;if(!g.isValid&&y&&w){let S=se.getState(),C=wx({source:y,target:w,sourceHandle:null,targetHandle:null},S.nodes,S.edges);m=C.valid?null:t(cp(C.reasonCode))}let b=o_({isValid:g.isValid??null,fromNodeId:y,toNodeId:w,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),$t.warning(b.reason),i.current=null;return}if(b.type==="menu"&&h){let S="changedTouches"in p?p.changedTouches[0]:p;if(!S){i.current=null;return}let{clientX:C,clientY:v}=S;s.current=a({x:C,y:v}),l({visible:!0,x:C,y:v,options:x.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),f=(0,xo.useCallback)(p=>{let g=i.current,y=s.current,w=pp(p);if(g&&y&&w){let h=Cl(w.targetMaterialType,y),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}l(h=>({...h,visible:!1})),i.current=null,s.current=null},[o]),c=(0,xo.useCallback)(()=>{l(p=>({...p,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var Fo=D(J(),1);var zt=[];for(let e=0;e<256;++e)zt.push((e+256).toString(16).slice(1));function r_(e,t=0){return(zt[e[t+0]]+zt[e[t+1]]+zt[e[t+2]]+zt[e[t+3]]+"-"+zt[e[t+4]]+zt[e[t+5]]+"-"+zt[e[t+6]]+zt[e[t+7]]+"-"+zt[e[t+8]]+zt[e[t+9]]+"-"+zt[e[t+10]]+zt[e[t+11]]+zt[e[t+12]]+zt[e[t+13]]+zt[e[t+14]]+zt[e[t+15]]).toLowerCase()}var Lx,kD=new Uint8Array(16);function _x(){if(!Lx){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Lx=crypto.getRandomValues.bind(crypto)}return Lx(kD)}var ID=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),kx={randomUUID:ID};function MD(e,t,a){e=e||{};let o=e.random??e.rng?.()??_x();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return r_(o)}function ND(e,t,a){return kx.randomUUID&&!t&&!e?kx.randomUUID():MD(e,t,a)}var gp=ND;function l_(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function ED(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function i_(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=ED(o),l,i;if(t)l=t.x,i=t.y;else{let f=a?50:30;l=r.x+f,i=r.y+f}let s=new Map,u=o.map(f=>{let c=gp();return s.set(f.id,c),{...f,id:c,position:{x:l+(f.position.x-r.x),y:i+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:gp(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:l,y:i}}}function s_(e,t){let a=(0,Fo.useRef)({nodes:[],edges:[]}),o=(0,Fo.useRef)(null),n=a.current.nodes.length>0,r=(0,Fo.useCallback)(()=>{let f=se.getState(),c=l_(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),l=(0,Fo.useCallback)(f=>{let c=i_(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=se.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,Fo.useCallback)(()=>{r(),l()},[r,l]),s=(0,Fo.useCallback)(()=>{let f=se.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,Fo.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,Fo.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var qo=D(J(),1);function u_(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,qo.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),y=(0,qo.useCallback)((C,v)=>{C.preventDefault();let _={type:"pane"};v?_={type:"node",nodeId:v.id}:se.getState().nodes.filter(T=>T.selected).length>1&&(_={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:_})},[]),w=(0,qo.useCallback)((C,v)=>{y(C,v)},[y]),h=(0,qo.useCallback)(C=>{y(C)},[y]),x=(0,qo.useCallback)(C=>{y(C)},[y]),m=(0,qo.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),b=(0,qo.useCallback)((C,v)=>{let _=t({x:p.x,y:p.y});switch(C){case"copy":{if(v.type==="node"){let T=se.getState().nodes.find(N=>N.id===v.nodeId);T&&!T.selected&&(s(),a(N=>N.map(U=>U.id===v.nodeId?{...U,selected:!0}:U)))}o();break}case"paste":n(_);break;case"duplicate":r();break;case"delete":{if(v.type==="node"){let k=se.getState();k.nodes.find(N=>N.id===v.nodeId)?.selected?l():k.applyCanvasInputMutation({removeNodeIds:[v.nodeId]})}else l();break}case"undo":u();break;case"redo":d();break;case"select-all":i();break;case"execute-selection":{let k=se.getState().nodes.filter(T=>T.selected).map(T=>T.id);k.length>0&&f?.(k);break}case"execute-node":{v.type==="node"&&f?.([v.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,l,u,d,i,m,f]),S=(0,qo.useCallback)(C=>{let v=t({x:p.x,y:p.y});c?.(C,v),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:w,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:S}}var TD=D(J(),1),Ix=new Map;function hp(e){Ix.set(e.type,e)}function d_(){let e={};for(let[t,a]of Ix)e[t]=a.component;return e}function c_(e,t,a){let o=Ix.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var et=D(J(),1);var Ge=D(J(),1);function f_(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var bo=D(X(),1),AD=4,DD=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=ue(),[l,i]=(0,Ge.useState)(!1),[s,u]=(0,Ge.useState)(!1),[d,f]=(0,Ge.useState)(null),c=(0,Ge.useRef)(null),p=(0,Ge.useRef)(null),g=(0,Ge.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),y=e==="left",w=a==="plus"&&!!o&&o.length>0,h=ux(I=>I.inProgress),{screenToFlowPosition:x}=Ma(),m=(0,Ge.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Ge.useEffect)(()=>{if(a!=="plus"){m();return}let I=c.current,A=p.current;if(!I||!A)return;let z=V=>{if(s)return;let R=I.getBoundingClientRect(),F=R.left+R.width/2,Z=R.top+R.height/2,{x:K,y:W}=f_(e,V.clientX-F,V.clientY-Z);A.style.setProperty("--wf-handle-offset-x",`${K}px`),A.style.setProperty("--wf-handle-offset-y",`${W}px`)};return I.addEventListener("pointermove",z),()=>{I.removeEventListener("pointermove",z)}},[s,m,e,a]),(0,Ge.useEffect)(()=>{if(!s){m(),f(null);return}let I=()=>{let A=c.current;if(!A)return;let z=A.getBoundingClientRect();f({x:y?z.right:z.left,y:z.bottom})};return I(),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),()=>{window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)}},[s,y,m]);let b=(0,Ge.useCallback)(()=>{i(!0)},[]),S=(0,Ge.useCallback)(()=>{i(!1),m()},[m]),C=(0,Ge.useCallback)(I=>{let A=c.current;!A||I===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(I)||A.releasePointerCapture(I)},[]),v=(0,Ge.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),_=(0,Ge.useCallback)(I=>{I.button===0&&(typeof I.currentTarget.setPointerCapture=="function"&&I.currentTarget.setPointerCapture(I.pointerId),g.current.pointerId=I.pointerId,g.current.startX=I.clientX,g.current.startY=I.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),k=(0,Ge.useCallback)(I=>{if(g.current.pointerId!==I.pointerId)return;Math.hypot(I.clientX-g.current.startX,I.clientY-g.current.startY)>=AD&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),T=(0,Ge.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),N=(0,Ge.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.suppressClick=!1,v())},[v]),U=(0,Ge.useCallback)(I=>{if(I.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&u(A=>!A)},[w]),O=(0,Ge.useCallback)(()=>{let I=d;if(!I){let A=c.current;if(!A)return;let z=A.getBoundingClientRect();I={x:y?z.right:z.left,y:z.bottom}}return{screenPosition:I,flowPosition:x(I)}},[y,d,x]),L=(0,Ge.useCallback)(I=>{n?.(I,O()),u(!1)},[n,O]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,bo.jsxs)(Ui,{id:y?"in":"out",type:y?"target":"source",position:y?ae.Left:ae.Right,isConnectable:!0,className:M,style:E,children:[(0,bo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,bo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,bo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,bo.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:S,onPointerDown:_,onPointerMove:k,onPointerUp:T,onPointerCancel:N,onClick:U,children:(0,bo.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,bo.jsx)("div",{className:"wf-handle__plus-button",children:(0,bo.jsx)(Ke,{size:24,strokeWidth:2.5})})})}):null,w&&d?(0,bo.jsx)(dp,{visible:s,x:d.x,y:d.y,align:y?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Cn=(0,Ge.memo)(DD);var yo=D(J(),1);var Pt=D(X(),1);function RD(e){let t=ue();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var zD=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=ue(),u=(0,yo.useRef)(e),[d,f]=(0,yo.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,yo.useState)(1),[g,y]=(0,yo.useState)(e==="completed"?1:0),[w,h]=(0,yo.useState)(e==="pending"||e==="generating");(0,yo.useEffect)(()=>{let U=u.current;if(u.current=e,(U==="pending"||U==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),y(1)});let O=setTimeout(()=>{f("complete"),h(!1)},i+50);return()=>clearTimeout(O)}U==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),y(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),y(0),f("idle")),e==="failed"&&(h(!1),f("idle")),U===e&&e==="completed"&&(f("complete"),y(1),h(!1))},[e,i]);let x=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",S=s(e==="pending"?"node.preparing":"node.generating"),C=RD(a),v=(0,yo.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,k=()=>(0,Pt.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:c},children:(0,Pt.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,Pt.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,Pt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,Pt.jsx)("span",{className:"wf-gsc__progress-text",children:S})})]})}),T=()=>(0,Pt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,Pt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,Pt.jsx)(Lt,{size:24})}),(0,Pt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),C?(0,Pt.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,Pt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,Pt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,Pt.jsx)(vr,{size:14}),s("node.regenerate")]}):null]}),N=U=>(0,Pt.jsx)("div",{className:`${l} ${U?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,Pt.jsxs)("div",{className:`wf-gsc ${x?_:""} ${l}`,children:[(x||w)&&k(),m&&T(),(b||d==="crossfading")&&N(d==="crossfading")]})},p_=zD;var gt=D(J(),1);function no(e){return e>0?1/e:1}function m_(e,t,a){return!!e&&!t&&a!=="running"}function g_(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var kr=D(X(),1),h_=24,x_=30,b_={text:Wt,image:yn,video:go,audio:Ja,table:Ta,video_composition:Kt},PD=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=ue(),l=t?r(`node.type.${t}`):"\u8282\u70B9",i=e||l,{zoom:s}=$a(),[u,d]=(0,gt.useState)(!1),[f,c]=(0,gt.useState)(i),p=(0,gt.useRef)(null),g=(0,gt.useMemo)(()=>no(s),[s]);(0,gt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,gt.useEffect)(()=>{u||c(i)},[i,u]);let y=(0,gt.useCallback)(C=>{C.stopPropagation(),d(!0),c(i)},[i]),w=(0,gt.useCallback)(()=>{let v=f.trim()||l;d(!1),v!==e&&o&&o(v)},[f,l,e,o]),h=(0,gt.useCallback)(()=>{d(!1),c(i)},[i]),x=(0,gt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),w()):C.key==="Escape"&&(C.preventDefault(),h())},[w,h]),m=(0,gt.useCallback)(C=>{let v=C.target.value;v.length<=x_&&c(v)},[]),b=()=>{if(a)return gt.default.isValidElement(a)?a:(0,kr.jsx)(a,{size:14});let C=(t in b_?b_[t]:null)||Wt;return(0,kr.jsx)(C,{size:14})};return(0,kr.jsxs)("div",{className:"wf-node-header",style:{top:-(h_+4*g),height:h_,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,kr.jsx)("span",{className:"wf-node-header__icon",children:b()}),u?(0,kr.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:w,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:x_}):(0,kr.jsx)("span",{onDoubleClick:y,className:"wf-node-header__label",title:i.length>20?i:r("node.renameHint"),children:i}),n]})},Wi=(0,gt.memo)(PD);var xp=D(J(),1);var Sn=D(X(),1),OD=({executionStatus:e,status:t})=>{let a=ue();return(0,xp.useMemo)(()=>{switch(e){case"running":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});default:return null}},[e,t,a])},bp=(0,xp.memo)(OD);var Sl=D(J(),1);function Ln(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var fd=D(X(),1);var BD=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,Sl.useMemo)(()=>Ln(e,t,a),[e,t,a]),l=(0,Sl.useCallback)(s=>{let u=s.currentTarget;u.naturalWidth>0&&u.naturalHeight>0&&n?.(u.naturalWidth,u.naturalHeight)},[n]),i=(0,Sl.useCallback)(s=>{let u=s.currentTarget;u.videoWidth>0&&u.videoHeight>0&&n?.(u.videoWidth,u.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,fd.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,fd.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,fd.jsx)("div",{className:"wf-media-preview__audio",children:(0,fd.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},y_=(0,Sl.memo)(BD);var w_=D(J(),1);var Be=D(X(),1),HD=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=ue();return e==="text"?(0,Be.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(Wt,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Be.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,Be.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,Be.jsx)(Po,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.writePrompt")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,Be.jsx)(Pu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.scriptGen")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,Be.jsx)(Ro,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.planningGen")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,Be.jsx)(Ea,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(mo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(Na,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(Ja,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},yp=(0,w_.memo)(HD);var _n=D(J(),1);var Mt=D(X(),1),UD=({materialType:e,selected:t,onOpenResourcePicker:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=ue(),{zoom:i}=$a(),[s,u]=_n.default.useState(!1),d=(0,_n.useMemo)(()=>no(i),[i]),f=(0,_n.useCallback)(()=>{n&&(n(),u(!0),setTimeout(()=>u(!1),1500))},[n]),c=(0,_n.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,Mt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*d),transform:`translate(-50%, -100%) scale(${d})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,Mt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Mt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,Mt.jsx)(Ro,{size:13,className:"wf-floating-top-pill__icon"}),(0,Mt.jsx)("span",{children:l("pill.textEdit")})]}),(0,Mt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Mt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:f,title:l("pill.copy"),children:s?(0,Mt.jsx)(Qa,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Mt.jsx)(Ou,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Mt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Mt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,Mt.jsx)(zo,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,Mt.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Mt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,children:[(0,Mt.jsx)(xl,{size:13,className:"wf-floating-top-pill__icon"}),(0,Mt.jsx)("span",{children:c})]})})})},v_=(0,_n.memo)(UD);var Ki=D(J(),1);var C_=D(J(),1),S_=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function FD(e,t,a=S_){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function L_({refs:e,excludeSelectors:t=S_,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,C_.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=d=>{let f=d.target;FD(f,r.map(c=>c.current),t)&&a()},i=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var Mx=D(X(),1),qD=480,VD=({children:e,onClose:t,width:a=qD})=>{let{zoom:o}=$a(),n=(0,Ki.useRef)(null),r=(0,Ki.useMemo)(()=>no(o),[o]);return L_({refs:n,onClose:t}),(0,Mx.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,Mx.jsx)("div",{className:"wf-panel-shell__card",children:e})})},__=(0,Ki.memo)(VD);var Aa=D(J(),1);var k_=D(J(),1),$i=D(X(),1),Nx={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},GD=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function XD(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Nx[t])return t;for(let a of GD)if(a.regex.test(t))return a.brand;return null}var I_=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,k_.useMemo)(()=>t&&Nx[t.toLowerCase()]?t.toLowerCase():XD(e),[t,e]),i=l?Nx[l]:null;if(!i){if(r)return(0,$i.jsx)($i.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,$i.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,$i.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var M_=D(J(),1);function N_(e){let t=VS(),a=GS();return(0,M_.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let l=r.data||{},i=Ln(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",u=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:u,textContent:s}]}),[t,a,e])}var E_=D(J(),1),T_="wf_capabilities_catalog_v1",YD={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function pd(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(T_);return e?JSON.parse(e):null}catch{return null}}function A_(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(T_,JSON.stringify(e))}catch{}}function D_(e,t,a){return(0,E_.useMemo)(()=>{let n=(a??pd())?.[e]??[],r=n.find(b=>b.id===t)??n[0],l=YD[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=b=>b?s.some(S=>S.value===b):!1,f=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],c=i.duration?.defaultValue??f[0]?.value??5,p=b=>typeof b!="number"?!1:f.some(S=>S.value===b),g=i.resolution?.options??[],y=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],h=i.quality?.defaultValue??w[0]?.value??"",x=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:y,qualityOptions:w,defaultQuality:h,hasSoundSupport:x,defaultSound:m}},[e,t,a])}var R_=D(J(),1);var kn=D(X(),1),jD=({onClick:e,disabled:t,isGenerating:a})=>{let o=ue();return(0,kn.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,kn.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,kn.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,kn.jsx)(yr,{size:14,className:"wf-generate-btn__spin"}):(0,kn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,kn.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,kn.jsx)("path",{d:"M12 19V5"})]})})]})},z_=(0,R_.memo)(jD);var Q=D(X(),1);function ZD(e){let t=(0,Q.jsx)(I_,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var WD=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:l})=>{let i=ue(),{materialType:s,selectedTool:u,params:d,prompt:f}=t,[c,p]=(0,Aa.useState)(!1),[g,y]=(0,Aa.useState)(!1),w=N_(e),h=u==="text-to-music"?"music":"speech",x=(0,Aa.useCallback)(R=>{o({selectedTool:R==="music"?"text-to-music":"text-to-audio"})},[o]),m=(0,Aa.useMemo)(()=>{let R=a?.[s]??[];return R.length===0&&(s==="text"?R=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?R=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?R=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(R=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),R.map(F=>{let Z=ZD(F.id),K=Z.icon,W=F.badge??Z.badge,ne=F.subtitle??Z.subtitle;return{value:F.id,label:F.label,triggerLabel:(0,Q.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[K?(0,Q.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:K}):null,(0,Q.jsx)("span",{children:F.label})]}),icon:K,badge:W,subtitle:ne}})},[a,s]),b=typeof d.model=="string"?d.model:m[0]?.value,{aspectRatioOptions:S,defaultAspectRatio:C,isAspectRatioValid:v,durationOptions:_,defaultDuration:k,isDurationValid:T,resolutionOptions:N,defaultResolution:U}=D_(s,b,a),O=(0,Aa.useCallback)((R,F)=>{o({params:{...d,[R]:F}})},[o,d]),L=(0,Aa.useCallback)(R=>{let W=((a??pd())?.[s]??[]).find(ee=>ee.id===R)?.parameters,ne={...d,model:R};d.aspectRatio&&W?.aspectRatio?.options&&(W.aspectRatio.options.some(q=>q.value===d.aspectRatio)||(ne.aspectRatio=W.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&W?.duration?.options&&(W.duration.options.some(q=>q.value===d.duration)||(ne.duration=W.duration.defaultValue||W.duration.options[0]?.value||5)),d.resolution&&W?.resolution?.options?W.resolution.options.some(q=>q.value===d.resolution)||(ne.resolution=W.resolution.defaultValue||W.resolution.options[0]?.value):d.resolution&&W&&!W.resolution?.options&&delete ne.resolution,o({params:ne})},[a,s,o,d]),M=(0,Aa.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),E=(0,Aa.useMemo)(()=>{switch(s){case"text":return i("panel.textPromptPlaceholder");case"image":return i("panel.imagePromptPlaceholder");case"video":return i("panel.videoPromptPlaceholder");case"audio":return i(h==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return i("panel.promptPlaceholder")}},[s,h,i]),I=typeof d.aspectRatio=="string"&&v(d.aspectRatio)?d.aspectRatio:C,A=typeof d.duration=="number"&&T(d.duration)?d.duration:k,z=R=>!!R&&N.some(F=>F.value===R),V=typeof d.resolution=="string"&&z(d.resolution)?d.resolution:U;return(0,Q.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,Q.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${h==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>x("speech"),children:[(0,Q.jsx)(cl,{size:13}),(0,Q.jsx)("span",{children:i("panel.audioGen")})]}),(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${h==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>x("music"),children:[(0,Q.jsx)(Ja,{size:13}),(0,Q.jsx)("span",{children:i("panel.musicGen")})]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[w.length>0||l?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[w.map(R=>(0,Q.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${R.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${R.label} (${R.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[R.url&&R.materialType==="image"?(0,Q.jsx)("img",{src:R.url,alt:R.label,className:"wf-config-panel__ref-thumb-media"}):R.url&&R.materialType==="video"?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,Q.jsx)("video",{src:R.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,Q.jsx)(Na,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):R.materialType==="audio"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,Q.jsx)(Ja,{size:13})}):R.materialType==="text"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,Q.jsx)(Wt,{size:13})}):(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,Q.jsx)(mo,{size:13})}),R.hasMedia&&(0,Q.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},R.nodeId)),l?(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:l,title:i("picker.addRef"),children:(0,Q.jsx)(Ke,{size:14})}):null]}):(0,Q.jsx)("span",{}),(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>p(!0),title:i("header.fitView"),children:(0,Q.jsx)(wr,{size:13})})]}),(0,Q.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:E,rows:3,onChange:R=>o({prompt:R.target.value})}),(0,Q.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",M]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,Q.jsx)(ca,{className:"wf-param-bar__select wf-param-bar__select--model",value:b,options:m,popupMatchSelectWidth:!1,onChange:R=>L(R)}),s==="image"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,Q.jsx)(ca,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:R=>O("aspectRatio",R)})})]}),s==="video"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,Q.jsx)(ca,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:R=>O("aspectRatio",R)}),(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(ca,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:_,popupMatchSelectWidth:!1,onChange:R=>O("duration",R)}),N.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(ca,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:V,options:N,popupMatchSelectWidth:!1,onChange:R=>O("resolution",R)})]})]})]}),s==="audio"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!g),title:i("panel.advanced"),children:(0,Q.jsx)(ad,{size:13})})]})]}),(0,Q.jsx)("div",{className:"wf-config-panel__action-group",children:(0,Q.jsx)(z_,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),g&&(0,Q.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,Q.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,Q.jsx)("span",{className:"wf-config-panel__advanced-label",children:i("panel.duration")}),(0,Q.jsx)(px,{style:{flex:1},min:1,max:s==="video"?20:60,value:A,onChange:R=>O("duration",R)})]})}),(0,Q.jsx)(bl,{title:i("panel.promptPlaceholder"),open:c,onCancel:()=>p(!1),width:680,children:(0,Q.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:E,rows:10,onChange:R=>o({prompt:R.target.value})})})]})},P_=(0,Aa.memo)(WD);var fa=D(J(),1);var Ex=["image","video","audio"],KD=80,$D=40;function U_(e){return!!e&&typeof e=="object"}function F_(e){return U_(e.data)?e.data:{}}function q_(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function QD(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function V_(e,t=""){let a=(e||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=QD(t);return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(o)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(o)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(o)?"audio":null}function G_(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function JD(e){let t=e.dimensions;if(U_(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function eR(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function tR(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function X_(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function aR(e,t){if(!Ex.includes(e))return!1;if(Ln(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function Y_(e,t,a){let o=X_(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let l=F_(r),i=q_(l.materialType);if(!i||!aR(i,l))continue;let s=eR(l,r.id),u=JD(l);n.push({nodeId:r.id,materialType:i,title:s,previewUrl:Ln(i,l.mediaAssets,typeof l.mediaUrl=="string"?l.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:tR(l,s,r.id,u),width:u.width,height:u.height})}return n}function j_(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function O_(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function B_(e,t){return Jf(e,t)}function H_(e){return{mediaUrl:e.objectUrl,status:"ready",content:e.name,mediaAssets:[{type:e.materialType,url:e.objectUrl}]}}function oR(e,t,a){let o=_r(a),n=a_(a);return{x:e.position.x-o-KD,y:e.position.y+t*(n+$D)}}function nR(e){return q_(F_(e).materialType)}function Z_(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(y=>y.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let l=X_(e.edges,e.targetNodeId),i=new Set(l);for(let y of e.selectedCanvasNodeIds){if(y===e.targetNodeId){t.push({id:y,reason:"self"});continue}if(l.has(y)||i.has(y)){t.push({id:y,reason:"already_connected"});continue}let w=e.nodes.find(h=>h.id===y);if(!w){t.push({id:y,reason:"missing"});continue}if(!B_(w,r)){t.push({id:y,reason:"type_contract"});continue}a.push(O_(y,e.targetNodeId)),i.add(y)}let s=e.localFiles.filter(y=>!y.objectUrl||!Ex.includes(y.materialType)?(t.push({id:y.id,reason:"unsupported"}),!1):!0),u=nR(r),d=s[0],f=!!u&&Ex.includes(u)&&!!d&&d.materialType===u,c=0,p=f?s.slice(1):s;f&&d&&n.push({nodeId:e.targetNodeId,data:H_(d)});for(let y of p){let w=oR(r,c,y.materialType),h=fp(y.materialType,w,{...H_(y),label:y.name.replace(/\.[^.]+$/,"")||y.name});if(!B_(h,r)){t.push({id:y.id,reason:"type_contract"});continue}o.push(h),a.push(O_(h.id,e.targetNodeId)),i.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}var Ll=D(J(),1);var xe=D(X(),1);function wp(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var rR=({items:e,selectedIds:t,onToggle:a})=>{let o=ue(),[n,r]=(0,Ll.useState)(""),[l,i]=(0,Ll.useState)("all"),[s,u]=(0,Ll.useState)("grid"),d=(0,Ll.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,Ll.useMemo)(()=>j_(e,n,l),[e,n,l]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,xe.jsxs)("div",{className:"wf-picker-pane",children:[(0,xe.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,xe.jsxs)("label",{className:"wf-picker-search",children:[(0,xe.jsx)(ml,{size:14,className:"wf-picker-search__icon"}),(0,xe.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,xe.jsx)(ca,{className:"wf-picker-filter",variant:"standard",value:l,options:d,onChange:p=>i(p)}),(0,xe.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,xe.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,xe.jsx)(dl,{size:14})}),(0,xe.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,xe.jsx)(ju,{size:14})})]})]}),f.length===0?(0,xe.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,xe.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,xe.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,xe.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,xe.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,xe.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,xe.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(wp(p.materialType))}),p.alreadyConnected?(0,xe.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,xe.jsx)(Qa,{size:11}),o("picker.added")]}):(0,xe.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,xe.jsx)(Qa,{size:11}):null})]}),(0,xe.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,xe.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,xe.jsx)("span",{className:"wf-picker-type-tag",children:o(wp(p.materialType))})]})]},p.nodeId)})}):(0,xe.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,xe.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,xe.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,xe.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,xe.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,xe.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(wp(p.materialType))})}),(0,xe.jsxs)("div",{className:"wf-picker-row__body",children:[(0,xe.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,xe.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(wp(p.materialType))]})]}),p.alreadyConnected?(0,xe.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,xe.jsx)(Qa,{size:11}),o("picker.added")]}):(0,xe.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,xe.jsx)(Qa,{size:11}):null})]},p.nodeId)})})]})},W_=rR;var _l=D(J(),1);var dt=D(X(),1);function lR(e){let t=V_(e.type,e.name);return t?{id:`${e.name}-${e.size}-${e.lastModified}-${Math.random().toString(36).slice(2,8)}`,name:e.name,mime:e.type,size:e.size,objectUrl:URL.createObjectURL(e),materialType:t}:null}var iR=({files:e,onAddFiles:t,onRemove:a})=>{let o=ue(),n=(0,_l.useRef)(null),[r,l]=(0,_l.useState)(!1),i=(0,_l.useCallback)(u=>{let d=Array.from(u),f=[],c=0;for(let p of d){let g=lR(p);g?f.push(g):c+=1}f.length>0&&t(f),c>0&&$t.warning(o("picker.unsupported"))},[t,o]),s=(0,_l.useCallback)(u=>{u.preventDefault(),u.stopPropagation(),l(!1),u.dataTransfer.files?.length&&i(u.dataTransfer.files)},[i]);return(0,dt.jsxs)("div",{className:"wf-picker-pane",children:[(0,dt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${r?"wf-picker-dropzone--active":""}`,onClick:()=>n.current?.click(),onDragOver:u=>{u.preventDefault(),u.stopPropagation(),l(!0)},onDragLeave:u=>{u.preventDefault(),u.stopPropagation(),l(!1)},onDrop:s,children:[(0,dt.jsx)(xl,{size:22,className:"wf-picker-dropzone__icon"}),(0,dt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,dt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,dt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,dt.jsx)(Fu,{size:14}),o("picker.chooseFiles")]})]}),(0,dt.jsx)("input",{ref:n,type:"file",multiple:!0,accept:"image/*,video/*,audio/*",className:"wf-picker-file-input",onChange:u=>{u.target.files?.length&&i(u.target.files),u.target.value=""}}),e.length>0?(0,dt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(u=>(0,dt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,dt.jsx)("div",{className:"wf-picker-file-item__thumb",children:u.materialType==="image"?(0,dt.jsx)("img",{src:u.objectUrl,alt:"",className:"wf-picker-card__media"}):u.materialType==="video"?(0,dt.jsx)("video",{src:u.objectUrl,className:"wf-picker-card__media",muted:!0}):(0,dt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,dt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,dt.jsx)("span",{className:"wf-picker-card__name",children:u.name}),(0,dt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${u.materialType}`),u.size?` \xB7 ${G_(u.size)}`:""]})]}),(0,dt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(u.id),title:o("picker.removeFile"),children:(0,dt.jsx)(gl,{size:14})})]},u.id))}):null]})},K_=iR;var wo=D(X(),1),sR=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=ue(),l=se(v=>v.nodes),i=se(v=>v.edges),[s,u]=(0,fa.useState)(a),[d,f]=(0,fa.useState)([]),[c,p]=(0,fa.useState)([]),g=(0,fa.useMemo)(()=>Y_(l,i,t),[l,i,t]);(0,fa.useEffect)(()=>{e&&(u(a),f([]),p(v=>{for(let _ of v)URL.revokeObjectURL(_.objectUrl);return[]}))},[e,a]);let y=(0,fa.useCallback)(()=>{p(v=>{for(let _ of v)URL.revokeObjectURL(_.objectUrl);return[]}),o()},[o]),w=(0,fa.useCallback)((v,_)=>{_||f(k=>k.includes(v)?k.filter(T=>T!==v):[...k,v])},[]),h=(0,fa.useCallback)(v=>{p(_=>[..._,...v])},[]),x=(0,fa.useCallback)(v=>{p(_=>{let k=_.filter(N=>N.id!==v),T=_.find(N=>N.id===v);return T&&URL.revokeObjectURL(T.objectUrl),k})},[]),b=d.filter(v=>{let _=g.find(k=>k.nodeId===v);return _&&!_.alreadyConnected}).length+c.length,S=(0,fa.useCallback)(()=>{if(b===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,b,d]),C=(0,wo.jsxs)("div",{className:"wf-picker-footer",children:[(0,wo.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:y,children:r("picker.cancel")}),(0,wo.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:b===0,onClick:S,children:[r("picker.use")," ",b," ",r("picker.items")]})]});return(0,wo.jsxs)(bl,{open:e,onCancel:y,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,wo.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,wo.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,wo.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,wo.jsx)(W_,{items:g,selectedIds:d,onToggle:w}):(0,wo.jsx)(K_,{files:c,onAddFiles:h,onRemove:x})]})},vp=sR;var kl=D(J(),1);function $_(e){let t=ue(),[a,o]=(0,kl.useState)(!1),[n,r]=(0,kl.useState)("canvas"),l=(0,kl.useCallback)((u="canvas")=>{r(u),o(!0)},[]),i=(0,kl.useCallback)(()=>{o(!1)},[]),s=(0,kl.useCallback)(u=>{let d=se.getState(),f=Z_({nodes:d.nodes,edges:d.edges,targetNodeId:e,selectedCanvasNodeIds:u.selectedCanvasNodeIds,localFiles:u.localFiles});return f.hasWork?d.applyCanvasInputMutation({addNodes:f.addNodes,addEdges:f.addEdges,nodePatches:f.nodePatches}).status!=="allowed"?($t.error(t("picker.commitFailed")),!1):(f.rejected.length>0?$t.warning(t("picker.commitPartial")):$t.success(t("picker.commitOk")),o(!1),!0):($t.warning(t("picker.commitEmpty")),!1)},[e,t]);return{open:a,initialTab:n,openPicker:l,closePicker:i,commit:s}}var ze=D(X(),1),uR=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[y,w]=(0,et.useState)(!1),[h,x]=(0,et.useState)(!1),[m,b]=(0,et.useState)(!1),[S,C]=(0,et.useState)(!1),[v,_]=(0,et.useState)(null),{setNodes:k}=Ma(),T=Ve(j=>j.status==="pending"||j.status==="running"),N=o.nodeWidth??_r(n),U=Cx(n),O=t_(N,U),L=v??o.nodeHeight??O,M=(0,et.useCallback)(j=>{k(me=>me.map(_e=>_e.id===e?{..._e,data:{..._e.data,...j}}:_e))},[e,k]),E=(0,et.useCallback)((j,me)=>{if(j>0&&me>0){let _e=j/me,it=Math.max(80,Math.min(800,Math.round(N/_e)));_(it),o.nodeHeight!==it&&M({nodeHeight:it})}},[o.nodeHeight,N,M]),I=(0,et.useCallback)(()=>{let j=o.selectedTool;(!j||j==="text-editor"||j==="import")&&M({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]}),Ve.getState().startNodeExecution?.(e)},[e,n,o.selectedTool,M]),A=ue(),z=se(j=>j.applyCanvasInputMutation),V=$_(e),R=(0,et.useMemo)(()=>mp(n).map(j=>({key:j.key,label:A(j.labelKey),description:A(j.descKey),icon:j.icon})),[n,A]),F=(0,et.useCallback)((j,me)=>{let _e=pp(j),it=me?.flowPosition;if(!_e||!it)return;let qt=Cl(_e.targetMaterialType,it),ea=qt.nodes[0];ea&&z({addNodes:qt.nodes,addEdges:[{source:e,sourceHandle:"out",target:ea.id,targetHandle:"in"}]})},[z,e]),Z=u||i||"",K=(0,et.useCallback)(j=>{if(n==="text"){let me="";j==="script"?me=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:j==="planning"?me=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:j==="prompt"?me=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:j==="storyboard"&&(me=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({prompt:me,selectedTool:"text-to-text"})}},[n,M]),W=(0,et.useCallback)(j=>{let me=URL.createObjectURL(j);if(j.type.startsWith("image/")){let _e=new Image;_e.src=me,_e.onload=()=>{_e.naturalWidth>0&&_e.naturalHeight>0&&E(_e.naturalWidth,_e.naturalHeight)}}else if(j.type.startsWith("video/")){let _e=document.createElement("video");_e.src=me,_e.onloadedmetadata=()=>{_e.videoWidth>0&&_e.videoHeight>0&&E(_e.videoWidth,_e.videoHeight)}}M({mediaUrl:me,status:"ready",content:j.name})},[E,M]),ne=(0,et.useCallback)(j=>{j.preventDefault(),j.stopPropagation(),x(!0)},[]),ee=(0,et.useCallback)(j=>{j.preventDefault(),j.stopPropagation(),x(!1)},[]),q=(0,et.useCallback)(j=>{j.preventDefault(),j.stopPropagation(),x(!1);let me=j.dataTransfer.files?.[0];me&&W(me)},[W]),Y=(0,et.useCallback)(()=>{Z&&navigator.clipboard.writeText(Z).catch(()=>{})},[Z]),re=(0,et.useCallback)(()=>{if(!Z)return;let j=Z.split(`

`).filter(me=>me.trim().length>0);j.length>1&&M({content:j.join(`
---
`)})},[Z,M]);(0,et.useEffect)(()=>{a||(b(!1),C(!1))},[a]);let ie=m_(a,m,f),te=Ln(n,p,s),oe=g_(f,r,!!te),be=n==="video"?"video":n==="audio"?"audio":"square";return(0,ze.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:N},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(y||a)&&(0,ze.jsx)(v_,{materialType:n,selected:a,onOpenResourcePicker:()=>V.openPicker("local"),onStartTextEdit:()=>C(!0),onCopyText:Y,onSplitText:re}),(0,ze.jsx)(Cn,{side:"left",nodeHovered:y}),(0,ze.jsx)(Wi,{label:l,materialType:n,onLabelChange:j=>M({label:j}),trailing:(0,ze.jsx)(bp,{executionStatus:f,status:r})}),(0,ze.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:N,height:L},onDragOver:ne,onDragLeave:ee,onDrop:q,children:[a&&(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ze.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:Z||S?(0,ze.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${S?" nodrag":""}`,readOnly:!S,value:Z,placeholder:A("node.textPlaceholder"),autoFocus:S,onMouseDown:j=>{S||j.preventDefault()},onDoubleClick:j=>{j.stopPropagation(),C(!0),j.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:j=>M({content:j.target.value,status:j.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ze.jsx)(yp,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:K})}),n!=="text"&&(oe?(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(p_,{status:oe,loadingAspectRatio:be,errorMessage:c??d,taskId:o.taskId,onRetry:I,children:te?(0,ze.jsx)(y_,{materialType:n,mediaAssets:p,mediaUrl:s,label:l,onMediaSizeChange:E}):(0,ze.jsx)(yp,{materialType:n,onApplyPreset:K})})}):(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(yp,{materialType:n,onApplyPreset:K})})),n==="text"&&(d||c)&&(0,ze.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ie&&(0,ze.jsx)(__,{onClose:()=>b(!0),children:(0,ze.jsx)(P_,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:I,execBusy:T,onOpenResourcePicker:()=>V.openPicker("canvas")})}),(0,ze.jsx)(Cn,{side:"right",nodeHovered:y,options:R,onSelect:F}),(0,ze.jsx)(vp,{open:V.open,nodeId:e,initialTab:V.initialTab,onCancel:V.closePicker,onCommit:V.commit})]})},Q_=(0,et.memo)(uR);var J_={type:"material",component:Q_,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Qf("text",{status:"empty",nodeWidth:_r("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var Qi=D(J(),1);var Tx=50;function Il(e){return JSON.parse(JSON.stringify(e))}var dR={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Ft=Yi((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Il(o)].slice(-Tx),redoStack:[]}};return{document:dR,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Il(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Il(l),undoStack:i,redoStack:[...r,Il(n)].slice(-Tx)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Il(l),redoStack:i,undoStack:[...r,Il(n)].slice(-Tx)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let l=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:l.title,initialType:l.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:l}=t(),i=l.rows[o];if(!i)return;let s=a(l),u=[...l.rows],d={...i,cells:[...i.cells]};d.cells[n]=r,u[o]=d,e({document:{...l,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),l=o||n.columns.map(i=>i.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:l}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),l=n.rows.filter((i,s)=>s!==o);e({document:{...n,rows:l},...r})},addColumn:(o,n,r=240)=>{let{document:l}=t(),i=a(l),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=l.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...l,columns:[...l.columns,s],rows:u},...i})},updateColumn:(o,n,r)=>{let{document:l}=t(),i=l.columns[o];if(!i)return;let s=a(l),u=[...l.columns];u[o]={...i,title:n,type:r},e({document:{...l,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),l=n.columns.filter((s,u)=>u!==o),i=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:l,rows:i},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let l=a(n),i=[...n.columns];i[o]={...r,visible:!r.visible},e({document:{...n,columns:i},...l})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let i=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:d},...i})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Il(o),undoStack:[],redoStack:[]})}});var fe=D(X(),1),ek=380,cR=280,tk=(0,Qi.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Ft(),[l,i]=(0,Qi.useState)(!1),{zoom:s}=$a(),u=(0,Qi.useMemo)(()=>no(s),[s]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,fe.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:ek},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(l||a)&&(0,fe.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,fe.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,fe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:g=>{g.stopPropagation(),r()},children:[(0,fe.jsx)(Ke,{size:14}),(0,fe.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:g=>{g.stopPropagation(),n()},children:[(0,fe.jsx)(wr,{size:13}),(0,fe.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,fe.jsx)(Cn,{side:"left",nodeHovered:l}),(0,fe.jsx)(Wi,{label:c,materialType:"table"}),(0,fe.jsxs)("div",{className:"wf-material-node__card",style:{width:ek,height:cR},onDoubleClick:()=>n(),children:[a&&(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,fe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,fe.jsx)(Ta,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,fe.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,fe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:g=>g.stopPropagation(),children:[(0,fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,fe.jsx)(Ke,{size:14,className:"wf-node-empty__pill-icon"}),(0,fe.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,fe.jsx)(wr,{size:13,className:"wf-node-empty__pill-icon"}),(0,fe.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,fe.jsx)(Uu,{size:14}),(0,fe.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,fe.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,fe.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((g,y)=>{let w=g.cells[0],h=typeof w=="string"&&w?w:typeof w=="number"?String(w):Array.isArray(w)&&w.length>0?`\u{1F4CE} \u9644\u4EF6 (${w.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,fe.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,fe.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:h}),(0,fe.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,fe.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,fe.jsx)(Cn,{side:"right",nodeHovered:l})]})});var ak={type:"table",component:tk,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var Vo=D(J(),1);var pa=D(J(),1);var Da=D(X(),1),fR=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:l,nodeWidth:i,nodeHeight:s,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:y,onLeftHandleSelect:w,onFileDrop:h,onFilesDrop:x,onDragOver:m,onDragLeave:b,onDrop:S,onMouseEnter:C,onMouseLeave:v,onCardClick:_,onCardDoubleClick:k,renderFloatingPill:T,renderHeader:N,children:U,renderConfigPanel:O})=>{let[L,M]=(0,pa.useState)(!1),[E,I]=(0,pa.useState)(!1),{zoom:A}=$a(),z=(0,pa.useMemo)(()=>no(A),[A]),V=(0,pa.useMemo)(()=>({inverseScale:z,hovered:L,selected:t}),[z,L,t]),R=(0,pa.useCallback)(Y=>{M(!0),C?.(Y)},[C]),F=(0,pa.useCallback)(Y=>{M(!1),v?.(Y)},[v]),Z=(0,pa.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!0),m?.(Y)},[m]),K=(0,pa.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!1),b?.(Y)},[b]),W=(0,pa.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!1);let re=Y.dataTransfer.files;re&&re.length>0&&(x?.(re),re[0]&&h?.(re[0])),S?.(Y)},[S,h,x]),ne=typeof T=="function"?T(V):T,ee=typeof N=="function"?N(V):N,q=typeof O=="function"?O(V):O;return(0,Da.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:i,...n},onMouseEnter:R,onMouseLeave:F,"data-node-id":e,children:[ne,u&&(0,Da.jsx)(Cn,{side:"left",nodeHovered:L,variant:f,options:y,onSelect:w}),ee,(0,Da.jsxs)("div",{className:`wf-material-node__card ${E?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:i,height:s,...r},"data-node-type":l,onClick:_,onDoubleClick:k,onDragOver:Z,onDragLeave:K,onDrop:W,children:[t&&(0,Da.jsxs)(Da.Fragment,{children:[(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),U]}),q,d&&(0,Da.jsx)(Cn,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},ok=(0,pa.memo)(fR);var Ml=D(J(),1);var In=D(X(),1),pR=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:l}=$a(),i=(0,Ml.useMemo)(()=>no(l),[l]),s=a??i,u=d=>d?Ml.default.isValidElement(d)?d:(0,In.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,In.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,In.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,In.jsxs)(Ml.default.Fragment,{children:[f>0&&(0,In.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,In.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,In.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},nk=(0,Ml.memo)(pR);var Cp=D(J(),1);var ma=D(X(),1),mR=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:l,className:i="",style:s})=>{let u=ue(),d=(f,c,p)=>f?Cp.default.isValidElement(f)?f:(0,ma.jsx)(f,{size:c,className:p}):null;return(0,ma.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${i}`.trim(),style:s,children:[(e||t)&&(0,ma.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,ma.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,ma.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,ma.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,ma.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,ma.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,ma.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,ma.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,ma.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,ma.jsx)("span",{children:f.label})]},f.key)})}),l]})},rk=(0,Cp.memo)(mR);var lk="omnimux-clip-open",Ax="omnimux-clip-save",Dx="omnimux-clip-close",Rx="omnimux-clip-progress";function ik(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function sk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function uk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var Ie=D(X(),1),gR=350,hR=440;function dk(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Ra(e){return typeof e=="string"&&e.trim()?e:void 0}function zx(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function xR(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function bR(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function yR(e){return Ra(e.mediaUrl)||Ra(e.outputVideoUrl)||Ra(e.path)||Ra(e.url)||Ra(e.real_path)||Ra(e.filePath)}function wR(e){let{nodes:t,edges:a}=se.getState(),o=[],n=[],r=[],l=[];for(let i of a){if(i.target!==e)continue;let s=t.find(g=>g.id===i.source);if(!s)continue;let u=dk(s.data)?s.data:{},d=Ra(u.materialType)||(s.type==="material"?void 0:s.type),f=Ra(u.label)||Ra(u.title)||s.id,c=yR(u)||"",p=zx(u.duration)??zx(u.outputDurationMs)??zx(u.durationMs);if(d==="video"||s.type==="video_composition"){let g=c||Ra(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=Ra(u.content)||Ra(u.generatedContent)||Ra(u.prompt);g&&l.push({text:g,startTimeMs:l.reduce((y,w)=>y+w.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:l}}function vR(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function CR(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var SR=({id:e,data:t,selected:a})=>{let o=dk(t)?t:{},n=se(y=>y.setNodes),r=ue(),[l,i]=(0,Vo.useState)(!1),s=o.status??"idle",u=!!o.outputVideoUrl,d=o.thumbnailUrl||o.outputThumbnailUrl,f=o.title||o.label||r("node.type.video_composition"),c=(0,Vo.useCallback)(y=>{n(w=>w.map(h=>h.id===e?{...h,data:{...h.data,...y}}:h))},[e,n]);(0,Vo.useEffect)(()=>{if(typeof window>"u")return;let y=x=>{let m=x instanceof CustomEvent?x.detail:void 0;if(!ik(m)||m.nodeId&&m.nodeId!==e)return;let b=m.output;c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:b?.videoPath,thumbnailUrl:b?.thumbnailPath,outputThumbnailUrl:b?.thumbnailPath,outputDurationMs:b?.durationMs,outputWidth:b?.width,outputHeight:b?.height,status:b?.videoPath?"completed":"idle",renderProgress:b?.videoPath?100:void 0,errorMessage:void 0})},w=x=>{let m=x instanceof CustomEvent?x.detail:void 0;if(!uk(m)||m.nodeId&&m.nodeId!==e)return;let b=m.status??"rendering";c({status:b,renderProgress:m.renderProgress})},h=x=>{let m=x instanceof CustomEvent?x.detail:void 0;sk(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:u?"completed":"idle"}))};return window.addEventListener(Ax,y),window.addEventListener(Rx,w),window.addEventListener(Dx,h),()=>{window.removeEventListener(Ax,y),window.removeEventListener(Rx,w),window.removeEventListener(Dx,h)}},[u,e,o.projectId,o.status,c]);let p=(0,Vo.useCallback)(()=>{if(typeof window>"u")return;let y=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,w={source:"canvas",nodeId:e,nodeTitle:f,projectId:y,draftSchema:o.schema,upstreamInputs:wR(e)};c({status:"editing",projectId:y}),window.dispatchEvent(new CustomEvent(lk,{detail:w,bubbles:!0})),window.setTimeout(()=>{vR()||$t.warning(r("clip.needPlugin"))},400)},[e,o.projectId,o.schema,r,f,c]),g=(0,Vo.useCallback)(y=>{y.stopPropagation();let w=o.outputVideoUrl;if(!w)return;let h=document.createElement("a");h.href=w,h.download=`${LR(f)}.mp4`,h.rel="noopener",document.body.appendChild(h),h.click(),h.remove()},[o.outputVideoUrl,f]);return(0,Ie.jsx)(ok,{id:e,selected:a,nodeWidth:gR,nodeHeight:hR,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:y=>{y.stopPropagation(),p()},renderFloatingPill:({hovered:y,selected:w})=>{if(!y&&!w)return null;let h=[{key:"open_clip",label:"\u6253\u5F00\u526A\u8F91",icon:fl,variant:"primary",onClick:x=>{x.stopPropagation(),p()},title:"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668"}];return u&&h.push({key:"download_video",label:"\u4E0B\u8F7D",icon:Vi,onClick:g,title:"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891"}),(0,Ie.jsx)(nk,{actions:h})},renderHeader:()=>(0,Ie.jsx)(Wi,{label:f,materialType:"video_composition",customIcon:(0,Ie.jsx)(Kt,{size:14}),onLabelChange:y=>c({label:y,title:y}),trailing:(0,Ie.jsx)(bp,{status:s==="completed"?"completed":s==="rendering"||s==="editing"?"generating":s==="error"?"failed":"empty"})}),children:u?(0,Ie.jsxs)("div",{className:"wf-clip-launcher__result",children:[(0,Ie.jsx)("div",{className:"wf-clip-launcher__preview nodrag nopan",style:{position:"relative",cursor:"pointer"},onClick:y=>{y.stopPropagation(),i(!l)},children:l&&o.outputVideoUrl?(0,Ie.jsx)("video",{src:o.outputVideoUrl,controls:!0,autoPlay:!0,className:"wf-clip-launcher__thumb",style:{width:"100%",height:"100%",objectFit:"contain"}}):d?(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("img",{src:d,alt:"",className:"wf-clip-launcher__thumb"}),(0,Ie.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)"},children:(0,Ie.jsx)(Na,{size:28,color:"#fff",fill:"#fff"})})]}):(0,Ie.jsx)("div",{className:"wf-clip-launcher__thumb-fallback",children:(0,Ie.jsx)(Kt,{size:36})})}),(0,Ie.jsxs)("dl",{className:"wf-clip-launcher__meta",children:[(0,Ie.jsxs)("div",{children:[(0,Ie.jsx)("dt",{children:"\u65F6\u957F"}),(0,Ie.jsx)("dd",{children:xR(o.outputDurationMs)})]}),(0,Ie.jsxs)("div",{children:[(0,Ie.jsx)("dt",{children:"\u5206\u8FA8\u7387"}),(0,Ie.jsx)("dd",{children:bR(o.outputWidth,o.outputHeight)})]})]}),(0,Ie.jsxs)("div",{className:"wf-clip-launcher__actions nodrag nopan",children:[(0,Ie.jsxs)("button",{type:"button",className:"wf-clip-launcher__btn wf-clip-launcher__btn--primary",onClick:y=>{y.stopPropagation(),p()},children:[(0,Ie.jsx)(fl,{size:14}),(0,Ie.jsx)("span",{children:"\u91CD\u65B0\u7F16\u8F91"})]}),(0,Ie.jsxs)("button",{type:"button",className:"wf-clip-launcher__btn",onClick:g,children:[(0,Ie.jsx)(Vi,{size:14}),(0,Ie.jsx)("span",{children:"\u4E0B\u8F7D"})]})]})]}):(0,Ie.jsx)(rk,{mainIcon:(0,Ie.jsx)(Kt,{size:36,strokeWidth:1.5}),secondaryIcon:(0,Ie.jsx)(zo,{size:14}),blurb:"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002",actions:[{key:"open_clip",label:"\u6253\u5F00\u89C6\u9891\u526A\u8F91",icon:fl,variant:"primary",onClick:()=>p()}]})})};function LR(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var ck={type:"video_composition",component:(0,Vo.memo)(SR),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>CR(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var yk=D(J(),1),wk=D(Lo(),1);var Sp=D(J(),1),fk=D(Lo(),1);var Te=D(X(),1),Px=e=>e==="text"?(0,Te.jsx)(wn,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Te.jsx)(Gu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Te.jsx)($u,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Te.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),pk=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Ft(),[l,i]=(0,Sp.useState)(null);(0,Sp.useEffect)(()=>{if(o===null){i(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,Te.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,Te.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Te.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,Te.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Te.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Te.jsx)(Vu,{size:14})}),Px(u.type),(0,Te.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,Te.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Te.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,Te.jsx)(Hu,{size:15}):(0,Te.jsx)(Bu,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Te.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,x=Math.max(8,c.right-p);i({top:h,left:x}),n(d)}},children:(0,Te.jsx)(hr,{size:15})})]})]},u.id))}),(0,Te.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Te.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Te.jsx)(Ke,{size:14}),(0,Te.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&l&&typeof document<"u"&&(0,fk.createPortal)((0,Te.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:l.top,left:l.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,Te.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,Te.jsx)(Po,{size:13}),(0,Te.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Te.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,Te.jsx)(gl,{size:13}),(0,Te.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var Ot=D(X(),1),_R=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],mk=()=>{let{document:e,setFilterConditions:t}=Ft(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((i,s)=>({value:s,label:i.title||`\u5217 ${s+1}`})),n=(i,s)=>{let u=a.map((d,f)=>f===i?{...d,...s}:d);t(u)},r=()=>{let i=[...a,{columnIndex:0,op:"equals",value:""}];t(i)},l=i=>{let s=a.filter((u,d)=>d!==i);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,Ot.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:i=>i.stopPropagation(),children:[(0,Ot.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,Ot.jsxs)("div",{className:"wf-filter-body",children:[a.map((i,s)=>(0,Ot.jsxs)("div",{className:"wf-filter-row",children:[(0,Ot.jsx)("div",{style:{width:130,flexShrink:0},children:(0,Ot.jsx)(ca,{value:i.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ot.jsx)("div",{style:{width:110,flexShrink:0},children:(0,Ot.jsx)(ca,{value:i.op,options:_R,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ot.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:i.value??"",disabled:i.op==="empty"||i.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,Ot.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>l(s),children:(0,Ot.jsx)(Lt,{size:15})})]},s)),(0,Ot.jsx)("div",{style:{paddingTop:4},children:(0,Ot.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,Ot.jsx)(Ke,{size:14}),(0,Ot.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Mn=D(X(),1),kR=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],gk=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Ft(),o=e.rowHeight||"low";return(0,Mn.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Mn.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Mn.jsx)("div",{style:{padding:"6px"},children:kR.map(n=>{let r=o===n.id;return(0,Mn.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Mn.jsx)("span",{children:n.label}),r&&(0,Mn.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Mn.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var Me=D(X(),1),hk=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:l,canRedo:i,closeStage:s}=Ft(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,Me.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,Me.jsx)("div",{className:"wf-stage-topbar__left",children:(0,Me.jsxs)("div",{className:"wf-stage-title-group",children:[(0,Me.jsx)(Ta,{size:16,className:"wf-stage-title-icon"}),(0,Me.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,Me.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,Me.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Me.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,Me.jsx)(td,{size:15}),(0,Me.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,Me.jsx)(pk,{})]}),(0,Me.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Me.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,Me.jsx)(br,{size:15}),(0,Me.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,Me.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,Me.jsx)(mk,{})]}),(0,Me.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Me.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,Me.jsx)(Sr,{size:15}),(0,Me.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,Me.jsx)(gk,{})]}),(0,Me.jsx)("div",{className:"wf-stage-divider"}),(0,Me.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,Me.jsx)(hl,{size:16})}),(0,Me.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,Me.jsx)(pl,{size:16})}),(0,Me.jsx)("div",{className:"wf-stage-divider"}),(0,Me.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,Me.jsx)(Lt,{size:16})})]})]})};var Se=D(X(),1),xk=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Ft(),n=e.columns.filter(i=>i.visible),l=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Se.jsx)("div",{className:"wf-grid-container",children:(0,Se.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,Se.jsxs)("table",{className:"wf-grid-table",children:[(0,Se.jsxs)("colgroup",{children:[(0,Se.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(i=>(0,Se.jsx)("col",{style:{width:i.width||220,minWidth:120}},i.id)),(0,Se.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,Se.jsx)("col",{style:{width:"auto"}})]}),(0,Se.jsx)("thead",{children:(0,Se.jsxs)("tr",{children:[(0,Se.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Se.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(i=>(0,Se.jsx)("th",{className:"wf-grid-th",children:(0,Se.jsxs)("div",{className:"wf-grid-th-content",children:[(0,Se.jsx)("span",{className:"wf-grid-th-icon",children:Px(i.type)}),(0,Se.jsx)("span",{className:"wf-grid-th-title",children:i.title})]})},i.id)),(0,Se.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Se.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,Se.jsx)(Ke,{size:15})})}),(0,Se.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,Se.jsx)("tbody",{children:e.rows.map((i,s)=>(0,Se.jsxs)("tr",{className:l,children:[(0,Se.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,Se.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=i.cells[d];return(0,Se.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,Se.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((y,w)=>(0,Se.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",y.name]},w)),g.length===0&&(0,Se.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,Se.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(s,d,g.target.value)})})()},u.id)}),(0,Se.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,Se.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,Se.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,Se.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,Se.jsx)(Ke,{size:14}),(0,Se.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Nl=D(J(),1);var ga=D(X(),1),IR=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],bk=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Ft(),[n,r]=(0,Nl.useState)(e.initialTitle),[l,i]=(0,Nl.useState)(e.initialType),s=(0,Nl.useRef)(null);(0,Nl.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),i(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,l):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,l),t()};return(0,ga.jsx)(bl,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,ga.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,ga.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,ga.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,ga.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,ga.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,ga.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,ga.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,ga.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,ga.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,ga.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,ga.jsx)(ca,{value:l,options:IR,onChange:d=>i(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var Ji=D(X(),1),vk=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Ft();return(0,yk.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,wk.createPortal)((0,Ji.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,Ji.jsx)(hk,{}),(0,Ji.jsx)(xk,{}),(0,Ji.jsx)(bk,{})]}),document.body)};var Bt=D(X(),1);hp(J_);hp(ak);hp(ck);var MR=d_(),NR={animated:HL},Ck={maxZoom:1},ER={x:0,y:0,zoom:1},TR=[1,2],AR=96,DR=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:u}=Ma(),{nodes:d,edges:f,onNodesChange:c,onEdgesChange:p}=kL(),g=se($=>$.applyCanvasInputMutation),y=se($=>$.setNodes),w=se($=>$.setSelectedElement),h=se($=>$.pushHistory),x=se($=>$.undo),m=se($=>$.redo),b=IL(),S=ML(),[C,v]=(0,tt.useState)(null),[_,k]=(0,tt.useState)(!1),[T,N]=(0,tt.useState)(!1),[U,O]=(0,tt.useState)(!1),[L,M]=(0,tt.useState)(!1),[E,I]=(0,tt.useState)(void 0),[A,z]=(0,tt.useState)("select"),V=(0,tt.useRef)(0),R=(0,tt.useMemo)(()=>d.some($=>$.selected),[d]),F=s_(y,w),Z=ue(),K=Z("menu.generateFromNode"),{menuState:W,onConnectStart:ne,onConnectEnd:ee,onMenuSelect:q,onMenuClose:Y}=n_({onReject:v});(0,tt.useEffect)(()=>{h()},[d,f,h]);let re=(0,tt.useMemo)(()=>e?d.map($=>({...$,data:{...$.data,__catalog:e}})):d,[d,e]),ie=(0,tt.useCallback)($=>{let Fe=g({addEdges:[$]});if(Fe.status==="rejected"){let at=Z(cp(Fe.reasonCode));v(at),$t.warning(at)}else v(null)},[g,Z]),te=(0,tt.useCallback)($=>{let Fe=se.getState();return $L($,Fe.nodes,Fe.edges)},[]),oe=(0,tt.useCallback)(($,Fe)=>{let at=V.current,Pa=Fe??{x:120+at%3*420,y:120+Math.floor(at/3)*360};if($==="table"||$==="video_composition"){let Co=c_($,Pa,`node_${$}_${Date.now()}`);if(!Co)return;V.current+=1,y(_p=>Sx(_p,[{...Co,selected:!0}]));return}let Mr=Cl($,Pa);Mr.nodes.length!==0&&(V.current+=1,y(Co=>Sx(Co,Mr.nodes)))},[y]),be=(0,tt.useCallback)($=>{let Fe=$.nodes.map(Pa=>Pa.id),at=$.edges.map(Pa=>Pa.id);Fe.length===0&&at.length===0||g({removeNodeIds:Fe,removeEdgeIds:at})},[g]),{menu:we,handleNodeContextMenu:j,handlePaneContextMenu:me,handleSelectionContextMenu:_e,closeMenu:it,handleMenuAction:qt,handleAddNodeFromMenu:ea}=u_({screenToFlowPosition:i,setNodes:y,copySelectedNodes:F.copySelectedNodes,pasteNodes:F.pasteNodes,duplicateSelectedNodes:F.duplicateSelectedNodes,deleteSelectedNodes:F.deleteSelectedNodes,selectAllNodes:F.selectAllNodes,clearSelection:F.clearSelection,undo:x,redo:m,onExecuteNodeIds:t,onAddNode:oe}),Ir=(0,tt.useCallback)($=>{let Fe=$.type==="video"?"video":$.type==="image"?"image":"text",at=V.current++,Pa={x:200+at%4*50,y:200+at%4*40},Co=Cl(Fe,Pa,{title:$.name,content:$.path,previewUrl:$.previewUrl,status:"ready"}).nodes[0];Co&&(g({addNodes:[Co]}),w("node",Co.id),$t.success(Z("toolbar.assets")+": "+$.name))},[g,w,Z]);KL({onCopy:F.copySelectedNodes,onPaste:()=>F.pasteNodes(),onSelectAll:F.selectAllNodes,onDeleteSelected:F.deleteSelectedNodes,onClearSelection:F.clearSelection,onDuplicate:F.duplicateSelectedNodes,onUndo:x,onRedo:m,hasSelection:R,onToggleAssets:()=>N($=>!$),onToggleShortcuts:()=>O($=>!$),onToggleMinimap:()=>k($=>!$),onToggleAddMenu:()=>M($=>!$),onSetPointerMode:$=>z($),onFitView:()=>s(Ck),onResetZoom:()=>u(1),onCategoryKey:$=>{N(!0),I($)}});let Xo=(0,tt.useCallback)(($,Fe)=>{w("node",Fe.id)},[w]),Yo=(0,tt.useCallback)(()=>{w("none",null),it()},[w,it]),ha=(0,tt.useCallback)(()=>{y($=>$.map((Fe,at)=>({...Fe,position:{x:120+at%3*440,y:120+Math.floor(at/3)*360}})))},[y]);return(0,Bt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Bt.jsx)(qS,{nodes:re,edges:f,onNodesChange:c,onEdgesChange:p,onConnect:ie,isValidConnection:te,onConnectStart:ne,onConnectEnd:ee,onNodeClick:Xo,onPaneClick:Yo,onNodeContextMenu:j,onPaneContextMenu:me,onSelectionContextMenu:_e,onDelete:be,nodeTypes:MR,edgeTypes:NR,fitView:!0,fitViewOptions:Ck,defaultViewport:ER,minZoom:vx.minZoom,maxZoom:vx.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:A==="pan"?!0:TR,panOnScroll:!0,panOnScrollMode:fo.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:A==="select",selectionMode:bn.Partial,defaultEdgeOptions:$f,connectOnClick:!1,connectionRadius:AR,onlyRenderVisibleElements:!0,children:(0,Bt.jsx)(YS,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:Do.Dots})}),(0,Bt.jsx)(FL,{isMinimapOpen:_,onToggleMinimap:()=>k($=>!$),onAlignGrid:ha,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Bt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Bt.jsx)(WS,{pannable:!0,zoomable:!0})}),(0,Bt.jsx)(UL,{onAddNode:oe,onUndo:x,onRedo:m,canUndo:b,canRedo:S,pointerMode:A,onPointerModeChange:z,onToggleAssets:()=>N($=>!$),onToggleShortcuts:()=>O($=>!$),isAssetsOpen:T,isShortcutsOpen:U,isAddMenuOpen:L,onToggleAddMenu:()=>M($=>!$)}),(0,Bt.jsx)(qL,{isOpen:T,onClose:()=>N(!1),onInsertAsset:Ir,selectedCategoryIndex:E}),(0,Bt.jsx)(VL,{isOpen:U,onClose:()=>O(!1)}),(0,Bt.jsx)(ZL,{x:we.x,y:we.y,visible:we.visible,context:we.context,onClose:it,onAction:qt,onAddNode:ea,canUndo:b,canRedo:S,hasClipboard:F.hasClipboard,hasSelection:R}),(0,Bt.jsx)(dp,{visible:W.visible,x:W.x,y:W.y,title:K,options:W.options,onSelect:q,onClose:Y}),(0,Bt.jsx)(vk,{}),C&&(0,Bt.jsx)("div",{className:"wf-rejected-toast",children:C})]})},RR=e=>(0,Bt.jsx)(dx,{children:(0,Bt.jsx)(DR,{...e})}),Sk=RR;var ht=D(J(),1);var vo="/omnimux-workflow";var za={manifest:`${vo}/api/manifest`,canvasJs:`${vo}/canvas.js`,workspaces:`${vo}/api/workspaces`,workspace:e=>`${vo}/api/workspaces/${e}`,workspaceVersion:e=>`${vo}/api/workspaces/${e}/version`,capabilities:`${vo}/api/capabilities`,media:`${vo}/media`,executions:e=>`${vo}/api/workspaces/${e}/executions`,execution:(e,t)=>`${vo}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${vo}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${vo}/api/workspaces/${e}/executions/${t}/events`};async function Go(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function Lk(){return Go(za.capabilities)}function _k(){return Go(za.workspaces)}function Ox(e,t){return Go(za.workspaces,{method:"POST",body:{name:e,id:t}})}function md(e){return Go(za.workspace(encodeURIComponent(e)))}function kk(e){return Go(za.workspaceVersion(encodeURIComponent(e)))}function Ik(e,t){return Go(za.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function Mk(e,t={}){return Go(za.executions(encodeURIComponent(e)),{method:"POST",body:t})}function Nk(e){return Go(za.executions(encodeURIComponent(e)))}function Ek(e,t){return Go(za.execution(encodeURIComponent(e),encodeURIComponent(t)))}function Tk(e,t,a){return Go(za.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var Ak=new Set(["pending","running","paused"]),zR=new Set(["completed","error","cancelled"]);function es(e,t){let a=se.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function Dk(e,t){let a=(0,ht.useRef)(null),o=(0,ht.useRef)(e);o.current=e;let n=(0,ht.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,ht.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),l=(0,ht.useCallback)((w,h)=>{Ve.getState().setExecution({status:w,error:h,progress:{...Ve.getState().progress,percentage:w==="completed"?100:Ve.getState().progress.percentage}})},[]),i=(0,ht.useCallback)((w,h)=>{let x;try{x=JSON.parse(h)}catch{return}let m=Ve.getState();switch(w){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:x.totalNodes??0,completed:0,running:0,pending:x.totalNodes??0,percentage:0}});break}case"node_start":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),es(x.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:x.progress??m.progress.percentage}});let b=x.output??{},S={executionStatus:"completed",executionError:void 0};if(b.text&&(S.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let C=b.mediaAssets[0];S.mediaAssets=b.mediaAssets,C.type==="image"&&(S.mediaUrl=C.url),S.taskId=`exec-${x.executionId??""}`}es(x.nodeId,S);break}case"node_error":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),es(x.nodeId,{executionStatus:"error",executionError:x.error??vn("error.nodeExecutionFailed")});break}case"node_skipped":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"skipped"),es(x.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{l("completed",null),r();break}case"execution_error":{l("error",x.error??vn("error.executionFailed")),r();break}case"execution_cancelled":{l("cancelled",null),r();break}default:break}},[l,r]),s=(0,ht.useCallback)(w=>{r();let h=o.current;if(!h)return;let x=new EventSource(za.executionEvents(encodeURIComponent(h),encodeURIComponent(w)));a.current=x;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)x.addEventListener(b,S=>{i(b,S.data)});x.onerror=()=>{let b=Ve.getState().status;zR.has(b)&&r()}},[r,i]),u=(0,ht.useCallback)(w=>{let h=Ve.getState();h.setExecution({executionId:w.id,status:w.status,error:w.error,progress:{total:w.progress.total,completed:w.progress.completed,running:w.progress.running,pending:w.progress.pending,percentage:w.progress.percentage}});for(let[x,m]of Object.entries(w.nodeStates??{})){h.setNodeStatus(x,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let S=w.nodeOutputs?.[x];S&&(S.text&&(b.generatedContent=S.text),S.mediaAssets&&S.mediaAssets.length>0&&(b.mediaAssets=S.mediaAssets,S.mediaAssets[0]&&S.mediaAssets[0].type==="image"&&(b.mediaUrl=S.mediaAssets[0].url))),es(x,b)}},[]),d=(0,ht.useCallback)(async(w={})=>{let h=o.current;if(!h)return;if(r(),Ve.getState().resetExecution(),Ve.getState().setExecution({status:"pending"}),w.mode==="single"&&w.nodeIds&&w.nodeIds[0]&&(Ve.getState().setNodeStatus(w.nodeIds[0],"pending"),es(w.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let x=await Mk(h,{mode:w.mode??"full",nodeIds:w.nodeIds});if(!x.ok||!x.body.execution){Ve.getState().setExecution({status:"error",error:x.body.message??vn("error.createExecutionFailed")});return}Ve.getState().setExecution({executionId:x.body.execution.id}),s(x.body.execution.id)},[r,s]),f=(0,ht.useCallback)(async w=>{let h=o.current,{executionId:x}=Ve.getState();if(!h||!x)return;let m=await Tk(h,x,w);!m.ok&&m.body.message&&Ve.getState().setExecution({error:m.body.message})},[]),c=(0,ht.useCallback)(()=>f("pause"),[f]),p=(0,ht.useCallback)(()=>f("resume"),[f]),g=(0,ht.useCallback)(()=>f("cancel"),[f]),y=(0,ht.useCallback)(()=>{r(),Ve.getState().resetExecution()},[r]);return(0,ht.useEffect)(()=>{if(!e)return;let w=!1;return(async()=>{try{let h=await Nk(e);if(w||!h.ok)return;let x=(h.body.executions??[]).find(b=>Ak.has(b.status));if(!x)return;let m=await Ek(e,x.id);if(w||!m.ok||!m.body.execution)return;u(m.body.execution),Ak.has(m.body.execution.status)&&s(x.id)}catch{}})(),()=>{w=!0}},[e,u,s]),(0,ht.useEffect)(()=>(Ve.getState().setStartNodeExecution(h=>{d({mode:"single",nodeIds:[h]})}),()=>{Ve.getState().setStartNodeExecution(null)}),[d]),(0,ht.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:y}}var El=D(J(),1);function Rk(e={}){let t=e.workspaceId,[a,o]=(0,El.useState)({phase:"loading"}),[n,r]=(0,El.useState)(()=>pd()),l=se(d=>d.hydrateGraph),i=se(d=>d.resetStore),s=se(d=>d.nodes.length),u=(0,El.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,El.useEffect)(()=>{let d=!1;return o({phase:"loading"}),(async()=>{try{if(Lk().then(g=>{!d&&g.ok&&(r(g.body),A_(g.body))}),t){let g=await md(t);if(d)return;if(g.ok&&g.body.workspace){l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace});return}let y=await Ox("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!y.ok||!y.body.workspace)throw new Error(y.body.message??vn("error.createWorkspaceFailed"));l(y.body.workspace.nodes,y.body.workspace.edges),o({phase:"ready",workspace:y.body.workspace});return}let f=await _k();if(d)return;let c=f.body.workspaces?.[0]?.id;if(!c){let g=await Ox("\u6211\u7684\u5DE5\u4F5C\u6D41");if(d)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??vn("error.createWorkspaceFailed"));c=g.body.workspace.id}let p=await md(c);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??vn("error.loadWorkspaceFailed"));l(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(f){d||o({phase:"error",message:f instanceof Error?f.message:String(f)})}})(),()=>{d=!0,u.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var $e=D(J(),1);function Lp(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function Bx(e){return e.map(t=>{let a=t,o=Lp(a.data);delete o.__catalog;let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=Lp(a.style)),n})}function Hx(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=Lp(a.data)),a.style&&typeof a.style=="object"&&(o.style=Lp(a.style)),o})}function Nn(e,t){return JSON.stringify({nodes:Bx(e),edges:Hx(t)})}var PR=1e3,OR=2500,BR=3e3;function ts(){let{nodes:e,edges:t}=se.getState(),a=gx(e,t);return{nodes:a.nodes,edges:a.edges}}function zk(e,t={}){let a=t.enabled!==!1,[o,n]=(0,$e.useState)("idle"),[r,l]=(0,$e.useState)(!1),i=(0,$e.useRef)(e),s=(0,$e.useRef)(0),u=(0,$e.useRef)(""),d=(0,$e.useRef)(0),f=(0,$e.useRef)(""),c=(0,$e.useRef)(null),p=(0,$e.useRef)(null),g=(0,$e.useRef)(!1),y=(0,$e.useRef)(a);y.current=a;let w=(0,$e.useRef)(t.onSaved);w.current=t.onSaved,(0,$e.useEffect)(()=>{i.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=Nn(e.nodes,e.edges),d.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,$e.useCallback)(async(v,_,k=!1)=>{let T=i.current;if(!T||!k&&!y.current||g.current)return;let N=rp({lastSavedNodeCount:d.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:u.current,nextSignature:Nn(v.nodes,v.edges)});if(!N.persist||!N.snapshot)return;let{nodes:U,edges:O}=N.snapshot,L=T.name;g.current=!0,n("saving");try{let M=await Ik(T.id,{name:L,nodes:Bx(U),edges:Hx(O),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,u.current=Nn(U,O),d.current=U.length,l(!1),n("saved"),h(),p.current=setTimeout(()=>{n(E=>E==="saved"?"idle":E)},OR),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,$e.useEffect)(()=>{if(!a)return;let v=(k="autosave")=>{if(!i.current||!y.current)return;let N=ts(),O=Nn(N.nodes,N.edges)!==u.current;if(l(O),!O){c.current&&(clearTimeout(c.current),c.current=null),n(I=>I==="pending"?"idle":I);return}let L=ud(N.nodes.length,k);if(!mx({lastSavedNodeCount:d.current,nextNodeCount:N.nodes.length,cause:L})){c.current&&(clearTimeout(c.current),c.current=null),l(!1),n(I=>I==="pending"?"idle":I);return}n(I=>I==="saving"||I==="conflict"?I:"pending"),c.current&&clearTimeout(c.current);let M={nodes:N.nodes,edges:N.edges},E=L;c.current=setTimeout(()=>{c.current=null,x(M,E)},PR)},_=se.subscribe(()=>{v("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[x,a]),(0,$e.useEffect)(()=>{if(!a)return;let v=()=>{if(!y.current||!i.current)return;let k=ts(),T=ud(k.nodes.length,"flush"),N=rp({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:T,lastSavedSignature:u.current,nextSignature:Nn(k.nodes,k.edges)});!N.persist||!N.snapshot||x(N.snapshot,T)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),h()}},[x,a]);let m=(0,$e.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let v=ts();await x(v,ud(v.nodes.length,"autosave"))},[x]),b=(0,$e.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!i.current)return;let _=ts(),k="flush",T=rp({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:k,lastSavedSignature:u.current,nextSignature:Nn(_.nodes,_.edges)});!T.persist||!T.snapshot||x(T.snapshot,k,!0)},[x]),S=(0,$e.useCallback)(async()=>{let v=ts();await x(v,ud(v.nodes.length,"autosave"))},[x]),C=(0,$e.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await md(v.id);if(!_.ok||!_.body.workspace){n("error");return}let k=_.body.workspace;s.current=k.version,u.current=Nn(k.nodes,k.edges),d.current=k.nodes.length,se.getState().hydrateGraph(k.nodes,k.edges),l(!1),n("idle"),w.current?.(k)},[]);return(0,$e.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!y.current||typeof document<"u"&&document.visibilityState==="hidden")return;let T=i.current;if(!(!T||g.current)){v=!0;try{let N=await kk(T.id);if(!N.ok||typeof N.body.version!="number"||N.body.version<=s.current)return;let U=ts();if(Nn(U.nodes,U.edges)!==u.current){s.current=N.body.version,n("conflict");return}await C()}catch{}finally{v=!1}}},k=setInterval(()=>{_()},BR);return()=>clearInterval(k)},[a,C]),{status:o,isDirty:r,saveNow:m,flushPendingSave:b,resolveConflict:S,reloadFromServer:C}}var Jt=D(X(),1),HR=({locale:e,workspaceId:t})=>{let a=ue(),o=(0,as.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=Rk({workspaceId:t,beforeReset:()=>{o.current()}});(0,as.useEffect)(()=>{OL(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=(0,as.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=zk(i,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=Dk(i?i.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,Jt.jsx)("div",{className:"wf-canvas-root",children:(0,Jt.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Jt.jsx)("div",{className:"wf-canvas-root",children:(0,Jt.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Jt.jsx)("span",{children:n.message}),(0,Jt.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Jt.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,Jt.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Jt.jsx)("span",{children:a("app.conflictBanner")}),(0,Jt.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Jt.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Jt.jsx)("main",{className:"wf-canvas-main",children:(0,Jt.jsx)(Sk,{catalog:l,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},Ux=HR;var Pk=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Ok=`/**
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

`;var Bk=`/**
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
  max-width: 200px;
  margin-top: 4px;
}

.wf-node-launcher-state__pill-btn {
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border, var(--wb-border, rgba(255, 255, 255, 0.12)));
  background: var(--dsw-alias-bg-elevated, var(--wb-surface, #1a1a1c));
  color: var(--dsw-alias-label-primary, var(--wb-text-primary, inherit));
  font-size: 12px;
  font-weight: 550;
  cursor: pointer;
  transition: all 150ms ease;
}

.wf-node-launcher-state__pill-btn:hover {
  background: color-mix(in srgb, var(--dsw-alias-bg-elevated, var(--wb-surface-raised, #252528)) 90%, #fff 10%);
  border-color: var(--dsw-alias-border-focus, var(--wb-border-strong, rgba(255, 255, 255, 0.24)));
  transform: translateY(-1px);
}

.wf-node-launcher-state__pill-btn--primary {
  background: var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6));
  border-color: transparent;
  color: var(--dsw-alias-on-primary, #fff);
  box-shadow: 0 2px 8px color-mix(in srgb, var(--dsw-alias-control-primary, #5b68f6) 35%, transparent);
}

.wf-node-launcher-state__pill-btn--primary:hover {
  background: color-mix(in srgb, var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6)) 88%, #fff 12%);
  border-color: transparent;
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

.wf-clip-launcher__result {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wf-clip-launcher__preview {
  flex: 1 1 auto;
  min-height: 180px;
  border-radius: 8px;
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
  transition: all 150ms ease;
}

.wf-clip-launcher__btn:hover {
  background: color-mix(in srgb, var(--dsw-alias-bg-elevated, var(--wb-surface-raised, #252528)) 90%, #fff 10%);
  border-color: var(--dsw-alias-border-focus, var(--wb-border-strong, rgba(255, 255, 255, 0.24)));
}

.wf-clip-launcher__btn--primary {
  background: var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6));
  border-color: transparent;
  color: var(--dsw-alias-on-primary, #fff);
}

.wf-clip-launcher__btn--primary:hover {
  background: color-mix(in srgb, var(--dsw-alias-control-primary, var(--wb-accent, #5b68f6)) 88%, #fff 12%);
  border-color: transparent;
}




`;var Hk=`/**
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
`;var GR=[{id:"omnimux-workflow-xyflow-base",css:Pk},{id:"omnimux-workflow-theme",css:Ok},{id:"omnimux-workflow-components",css:Bk},{id:"omnimux-workflow-table-node",css:Hk}];function Uk(){for(let{id:e,css:t}of GR){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Fx=D(X(),1),gd=new WeakMap;function XR(e,t){if(!e||gd.has(e))return;Uk();let a=(0,Fk.createRoot)(e);gd.set(e,{root:a,lastProps:t}),a.render((0,Fx.jsx)(Ux,{...t}))}function YR(e,t){let a=gd.get(e);a&&(a.lastProps=t,a.root.render((0,Fx.jsx)(Ux,{...t})))}function jR(e){let t=gd.get(e);t&&(t.root.unmount(),gd.delete(e))}return WI(ZR);})();
