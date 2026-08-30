var __omnimuxWorkflowCanvas=(()=>{var $N=Object.create;var af=Object.defineProperty;var QN=Object.getOwnPropertyDescriptor;var JN=Object.getOwnPropertyNames;var e3=Object.getPrototypeOf,t3=Object.prototype.hasOwnProperty;var Ga=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},a3=(e,t)=>{for(var a in t)af(e,a,{get:t[a],enumerable:!0})},kw=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of JN(t))!t3.call(e,n)&&n!==a&&af(e,n,{get:()=>t[n],enumerable:!(o=QN(t,n))||o.enumerable});return e};var N=(e,t,a)=>(a=e!=null?$N(e3(e)):{},kw(t||!e||!e.__esModule?af(a,"default",{value:e,enumerable:!0}):a,e)),o3=e=>kw(af({},"__esModule",{value:!0}),e);var Rw=Ga(mt=>{"use strict";function Ug(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<of(n,t))e[o]=t,e[a]=n,a=o;else break e}}function bn(e){return e.length===0?null:e[0]}function rf(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var i=2*(o+1)-1,l=e[i],s=i+1,u=e[s];if(0>of(l,a))s<n&&0>of(u,l)?(e[o]=u,e[s]=a,o=s):(e[o]=l,e[i]=a,o=i);else if(s<n&&0>of(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function of(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}mt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Lw=performance,mt.unstable_now=function(){return Lw.now()}):(Bg=Date,_w=Bg.now(),mt.unstable_now=function(){return Bg.now()-_w});var Lw,Bg,_w,Vn=[],Nr=[],n3=1,Ao=null,va=3,qg=!1,kd=!1,Ld=!1,Vg=!1,Nw=typeof setTimeout=="function"?setTimeout:null,Ew=typeof clearTimeout=="function"?clearTimeout:null,Iw=typeof setImmediate<"u"?setImmediate:null;function nf(e){for(var t=bn(Nr);t!==null;){if(t.callback===null)rf(Nr);else if(t.startTime<=e)rf(Nr),t.sortIndex=t.expirationTime,Ug(Vn,t);else break;t=bn(Nr)}}function Gg(e){if(Ld=!1,nf(e),!kd)if(bn(Vn)!==null)kd=!0,ql||(ql=!0,Ul());else{var t=bn(Nr);t!==null&&jg(Gg,t.startTime-e)}}var ql=!1,_d=-1,Tw=5,Aw=-1;function Dw(){return Vg?!0:!(mt.unstable_now()-Aw<Tw)}function Hg(){if(Vg=!1,ql){var e=mt.unstable_now();Aw=e;var t=!0;try{e:{kd=!1,Ld&&(Ld=!1,Ew(_d),_d=-1),qg=!0;var a=va;try{t:{for(nf(e),Ao=bn(Vn);Ao!==null&&!(Ao.expirationTime>e&&Dw());){var o=Ao.callback;if(typeof o=="function"){Ao.callback=null,va=Ao.priorityLevel;var n=o(Ao.expirationTime<=e);if(e=mt.unstable_now(),typeof n=="function"){Ao.callback=n,nf(e),t=!0;break t}Ao===bn(Vn)&&rf(Vn),nf(e)}else rf(Vn);Ao=bn(Vn)}if(Ao!==null)t=!0;else{var r=bn(Nr);r!==null&&jg(Gg,r.startTime-e),t=!1}}break e}finally{Ao=null,va=a,qg=!1}t=void 0}}finally{t?Ul():ql=!1}}}var Ul;typeof Iw=="function"?Ul=function(){Iw(Hg)}:typeof MessageChannel<"u"?(Fg=new MessageChannel,Mw=Fg.port2,Fg.port1.onmessage=Hg,Ul=function(){Mw.postMessage(null)}):Ul=function(){Nw(Hg,0)};var Fg,Mw;function jg(e,t){_d=Nw(function(){e(mt.unstable_now())},t)}mt.unstable_IdlePriority=5;mt.unstable_ImmediatePriority=1;mt.unstable_LowPriority=4;mt.unstable_NormalPriority=3;mt.unstable_Profiling=null;mt.unstable_UserBlockingPriority=2;mt.unstable_cancelCallback=function(e){e.callback=null};mt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tw=0<e?Math.floor(1e3/e):5};mt.unstable_getCurrentPriorityLevel=function(){return va};mt.unstable_next=function(e){switch(va){case 1:case 2:case 3:var t=3;break;default:t=va}var a=va;va=t;try{return e()}finally{va=a}};mt.unstable_requestPaint=function(){Vg=!0};mt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=va;va=e;try{return t()}finally{va=a}};mt.unstable_scheduleCallback=function(e,t,a){var o=mt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:n3++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Ug(Nr,e),bn(Vn)===null&&e===bn(Nr)&&(Ld?(Ew(_d),_d=-1):Ld=!0,jg(Gg,a-o))):(e.sortIndex=n,Ug(Vn,e),kd||qg||(kd=!0,ql||(ql=!0,Ul()))),e};mt.unstable_shouldYield=Dw;mt.unstable_wrapCallback=function(e){var t=va;return function(){var a=va;va=t;try{return e.apply(this,arguments)}finally{va=a}}}});var zw=Ga((g7,Pw)=>{"use strict";Pw.exports=Rw()});var Ww=Ga(xe=>{"use strict";var Yg=Symbol.for("react.transitional.element"),r3=Symbol.for("react.portal"),i3=Symbol.for("react.fragment"),l3=Symbol.for("react.strict_mode"),s3=Symbol.for("react.profiler"),d3=Symbol.for("react.consumer"),u3=Symbol.for("react.context"),c3=Symbol.for("react.forward_ref"),f3=Symbol.for("react.suspense"),p3=Symbol.for("react.memo"),Uw=Symbol.for("react.lazy"),m3=Symbol.for("react.activity"),Ow=Symbol.iterator;function g3(e){return e===null||typeof e!="object"?null:(e=Ow&&e[Ow]||e["@@iterator"],typeof e=="function"?e:null)}var qw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vw=Object.assign,Gw={};function Gl(e,t,a){this.props=e,this.context=t,this.refs=Gw,this.updater=a||qw}Gl.prototype.isReactComponent={};Gl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jw(){}jw.prototype=Gl.prototype;function Zg(e,t,a){this.props=e,this.context=t,this.refs=Gw,this.updater=a||qw}var Kg=Zg.prototype=new jw;Kg.constructor=Zg;Vw(Kg,Gl.prototype);Kg.isPureReactComponent=!0;var Bw=Array.isArray;function Wg(){}var lt={H:null,A:null,T:null,S:null},Xw=Object.prototype.hasOwnProperty;function $g(e,t,a){var o=a.ref;return{$$typeof:Yg,type:e,key:t,ref:o!==void 0?o:null,props:a}}function h3(e,t){return $g(e.type,t,e.props)}function Qg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yg}function x3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Hw=/\/+/g;function Xg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x3(""+e.key):t.toString(36)}function b3(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Wg,Wg):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Vl(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Yg:case r3:i=!0;break;case Uw:return i=e._init,Vl(i(e._payload),t,a,o,n)}}if(i)return n=n(e),i=o===""?"."+Xg(e,0):o,Bw(n)?(a="",i!=null&&(a=i.replace(Hw,"$&/")+"/"),Vl(n,t,a,"",function(u){return u})):n!=null&&(Qg(n)&&(n=h3(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Hw,"$&/")+"/")+i)),t.push(n)),1;i=0;var l=o===""?".":o+":";if(Bw(e))for(var s=0;s<e.length;s++)o=e[s],r=l+Xg(o,s),i+=Vl(o,t,a,r,n);else if(s=g3(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=l+Xg(o,s++),i+=Vl(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Vl(b3(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function lf(e,t,a){if(e==null)return e;var o=[],n=0;return Vl(e,o,"","",function(r){return t.call(a,r,n++)}),o}function w3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fw=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},y3={map:lf,forEach:function(e,t,a){lf(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return lf(e,function(){t++}),t},toArray:function(e){return lf(e,function(t){return t})||[]},only:function(e){if(!Qg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Activity=m3;xe.Children=y3;xe.Component=Gl;xe.Fragment=i3;xe.Profiler=s3;xe.PureComponent=Zg;xe.StrictMode=l3;xe.Suspense=f3;xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lt;xe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return lt.H.useMemoCache(e)}};xe.cache=function(e){return function(){return e.apply(null,arguments)}};xe.cacheSignal=function(){return null};xe.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=Vw({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!Xw.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var i=Array(r),l=0;l<r;l++)i[l]=arguments[l+2];o.children=i}return $g(e.type,n,o)};xe.createContext=function(e){return e={$$typeof:u3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:d3,_context:e},e};xe.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)Xw.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)n[o]===void 0&&(n[o]=i[o]);return $g(e,r,n)};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:c3,render:e}};xe.isValidElement=Qg;xe.lazy=function(e){return{$$typeof:Uw,_payload:{_status:-1,_result:e},_init:w3}};xe.memo=function(e,t){return{$$typeof:p3,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=lt.T,a={};lt.T=a;try{var o=e(),n=lt.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Wg,Fw)}catch(r){Fw(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),lt.T=t}};xe.unstable_useCacheRefresh=function(){return lt.H.useCacheRefresh()};xe.use=function(e){return lt.H.use(e)};xe.useActionState=function(e,t,a){return lt.H.useActionState(e,t,a)};xe.useCallback=function(e,t){return lt.H.useCallback(e,t)};xe.useContext=function(e){return lt.H.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e,t){return lt.H.useDeferredValue(e,t)};xe.useEffect=function(e,t){return lt.H.useEffect(e,t)};xe.useEffectEvent=function(e){return lt.H.useEffectEvent(e)};xe.useId=function(){return lt.H.useId()};xe.useImperativeHandle=function(e,t,a){return lt.H.useImperativeHandle(e,t,a)};xe.useInsertionEffect=function(e,t){return lt.H.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return lt.H.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return lt.H.useMemo(e,t)};xe.useOptimistic=function(e,t){return lt.H.useOptimistic(e,t)};xe.useReducer=function(e,t,a){return lt.H.useReducer(e,t,a)};xe.useRef=function(e){return lt.H.useRef(e)};xe.useState=function(e){return lt.H.useState(e)};xe.useSyncExternalStore=function(e,t,a){return lt.H.useSyncExternalStore(e,t,a)};xe.useTransition=function(){return lt.H.useTransition()};xe.version="19.2.8"});var $=Ga((x7,Yw)=>{"use strict";Yw.exports=Ww()});var Kw=Ga(Na=>{"use strict";var v3=$();function Zw(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Er(){}var Ma={d:{f:Er,r:function(){throw Error(Zw(522))},D:Er,C:Er,L:Er,m:Er,X:Er,S:Er,M:Er},p:0,findDOMNode:null},C3=Symbol.for("react.portal");function S3(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C3,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var Id=v3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function sf(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Na.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ma;Na.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Zw(299));return S3(e,t,null,a)};Na.flushSync=function(e){var t=Id.T,a=Ma.p;try{if(Id.T=null,Ma.p=2,e)return e()}finally{Id.T=t,Ma.p=a,Ma.d.f()}};Na.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ma.d.C(e,t))};Na.prefetchDNS=function(e){typeof e=="string"&&Ma.d.D(e)};Na.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=sf(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Ma.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Ma.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Na.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=sf(t.as,t.crossOrigin);Ma.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ma.d.M(e)};Na.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=sf(a,t.crossOrigin);Ma.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Na.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=sf(t.as,t.crossOrigin);Ma.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ma.d.m(e)};Na.requestFormReset=function(e){Ma.d.r(e)};Na.unstable_batchedUpdates=function(e,t){return e(t)};Na.useFormState=function(e,t,a){return Id.H.useFormState(e,t,a)};Na.useFormStatus=function(){return Id.H.useHostTransitionStatus()};Na.version="19.2.8"});var Qt=Ga((w7,Qw)=>{"use strict";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(e){console.error(e)}}$w(),Qw.exports=Kw()});var uC=Ga(Dp=>{"use strict";var Xt=zw(),kv=$(),k3=Qt();function X(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Lv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pu(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function _v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jw(e){if(pu(e)!==e)throw Error(X(188))}function L3(e){var t=e.alternate;if(!t){if(t=pu(e),t===null)throw Error(X(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Jw(n),e;if(r===o)return Jw(n),t;r=r.sibling}throw Error(X(188))}if(a.return!==o.return)a=n,o=r;else{for(var i=!1,l=n.child;l;){if(l===a){i=!0,a=n,o=r;break}if(l===o){i=!0,o=n,a=r;break}l=l.sibling}if(!i){for(l=r.child;l;){if(l===a){i=!0,a=r,o=n;break}if(l===o){i=!0,o=r,a=n;break}l=l.sibling}if(!i)throw Error(X(189))}}if(a.alternate!==o)throw Error(X(190))}if(a.tag!==3)throw Error(X(188));return a.stateNode.current===a?e:t}function Mv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Mv(e),t!==null)return t;e=e.sibling}return null}var ut=Object.assign,_3=Symbol.for("react.element"),df=Symbol.for("react.transitional.element"),Pd=Symbol.for("react.portal"),Kl=Symbol.for("react.fragment"),Nv=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),Ev=Symbol.for("react.consumer"),$n=Symbol.for("react.context"),Ix=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),Mx=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),Ph=Symbol.for("react.activity"),I3=Symbol.for("react.memo_cache_sentinel"),ey=Symbol.iterator;function Md(e){return e===null||typeof e!="object"?null:(e=ey&&e[ey]||e["@@iterator"],typeof e=="function"?e:null)}var M3=Symbol.for("react.client.reference");function zh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===M3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kl:return"Fragment";case Ah:return"Profiler";case Nv:return"StrictMode";case Dh:return"Suspense";case Rh:return"SuspenseList";case Ph:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Pd:return"Portal";case $n:return e.displayName||"Context";case Ev:return(e._context.displayName||"Context")+".Consumer";case Ix:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mx:return t=e.displayName||null,t!==null?t:zh(e.type)||"Memo";case Tr:t=e._payload,e=e._init;try{return zh(e(t))}catch{}}return null}var zd=Array.isArray,me=kv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ve=k3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Di={pending:!1,data:null,method:null,action:null},Oh=[],$l=-1;function Sn(e){return{current:e}}function ta(e){0>$l||(e.current=Oh[$l],Oh[$l]=null,$l--)}function tt(e,t){$l++,Oh[$l]=e.current,e.current=t}var Cn=Sn(null),Jd=Sn(null),qr=Sn(null),qf=Sn(null);function Vf(e,t){switch(tt(qr,t),tt(Jd,e),tt(Cn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lv(t),e=K2(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ta(Cn),tt(Cn,e)}function gs(){ta(Cn),ta(Jd),ta(qr)}function Bh(e){e.memoizedState!==null&&tt(qf,e);var t=Cn.current,a=K2(t,e.type);t!==a&&(tt(Jd,e),tt(Cn,a))}function Gf(e){Jd.current===e&&(ta(Cn),ta(Jd)),qf.current===e&&(ta(qf),uu._currentValue=Di)}var Jg,ty;function Ni(e){if(Jg===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Jg=t&&t[1]||"",ty=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jg+e+ty}var eh=!1;function th(e,t){if(!e||eh)return"";eh=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),i=r[0],l=r[1];if(i&&l){var s=i.split(`
`),u=l.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{eh=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ni(a):""}function N3(e,t){switch(e.tag){case 26:case 27:case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return e.child!==t&&t!==null?Ni("Suspense Fallback"):Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return th(e.type,!1);case 11:return th(e.type.render,!1);case 1:return th(e.type,!0);case 31:return Ni("Activity");default:return""}}function ay(e){try{var t="",a=null;do t+=N3(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Hh=Object.prototype.hasOwnProperty,Nx=Xt.unstable_scheduleCallback,ah=Xt.unstable_cancelCallback,E3=Xt.unstable_shouldYield,T3=Xt.unstable_requestPaint,go=Xt.unstable_now,A3=Xt.unstable_getCurrentPriorityLevel,Tv=Xt.unstable_ImmediatePriority,Av=Xt.unstable_UserBlockingPriority,jf=Xt.unstable_NormalPriority,D3=Xt.unstable_LowPriority,Dv=Xt.unstable_IdlePriority,R3=Xt.log,P3=Xt.unstable_setDisableYieldValue,mu=null,ho=null;function Or(e){if(typeof R3=="function"&&P3(e),ho&&typeof ho.setStrictMode=="function")try{ho.setStrictMode(mu,e)}catch{}}var xo=Math.clz32?Math.clz32:B3,z3=Math.log,O3=Math.LN2;function B3(e){return e>>>=0,e===0?32:31-(z3(e)/O3|0)|0}var uf=256,cf=262144,ff=4194304;function Ei(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xp(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=o&134217727;return l!==0?(o=l&~r,o!==0?n=Ei(o):(i&=l,i!==0?n=Ei(i):a||(a=l&~e,a!==0&&(n=Ei(a))))):(l=o&~r,l!==0?n=Ei(l):i!==0?n=Ei(i):a||(a=o&~e,a!==0&&(n=Ei(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function gu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function H3(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(){var e=ff;return ff<<=1,(ff&62914560)===0&&(ff=4194304),e}function oh(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function hu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function F3(e,t,a,o,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=i&~a;0<a;){var d=31-xo(a),f=1<<d;l[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&Pv(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function Pv(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-xo(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zv(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-xo(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function Ov(e,t){var a=t&-t;return a=(a&42)!==0?1:Ex(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ex(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tx(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bv(){var e=Ve.p;return e!==0?e:(e=window.event,e===void 0?32:lC(e.type))}function oy(e,t){var a=Ve.p;try{return Ve.p=e,t()}finally{Ve.p=a}}var ti=Math.random().toString(36).slice(2),ua="__reactFiber$"+ti,Ka="__reactProps$"+ti,_s="__reactContainer$"+ti,Fh="__reactEvents$"+ti,U3="__reactListeners$"+ti,q3="__reactHandles$"+ti,ny="__reactResources$"+ti,xu="__reactMarker$"+ti;function Ax(e){delete e[ua],delete e[Ka],delete e[Fh],delete e[U3],delete e[q3]}function Ql(e){var t=e[ua];if(t)return t;for(var a=e.parentNode;a;){if(t=a[_s]||a[ua]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=fv(e);e!==null;){if(a=e[ua])return a;e=fv(e)}return t}e=a,a=e.parentNode}return null}function Is(e){if(e=e[ua]||e[_s]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Od(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(X(33))}function ss(e){var t=e[ny];return t||(t=e[ny]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ea(e){e[xu]=!0}var Hv=new Set,Fv={};function Vi(e,t){hs(e,t),hs(e+"Capture",t)}function hs(e,t){for(Fv[e]=t,e=0;e<t.length;e++)Hv.add(t[e])}var V3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ry={},iy={};function G3(e){return Hh.call(iy,e)?!0:Hh.call(ry,e)?!1:V3.test(e)?iy[e]=!0:(ry[e]=!0,!1)}function If(e,t,a){if(G3(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function pf(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ro(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j3(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uh(e){if(!e._valueTracker){var t=Uv(e)?"checked":"value";e._valueTracker=j3(e,t,""+e[t])}}function qv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Uv(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Xf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var X3=/[\n"\\]/g;function Oo(e){return e.replace(X3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qh(e,t,a,o,n,r,i,l){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ro(t)):e.value!==""+Ro(t)&&(e.value=""+Ro(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Vh(e,i,Ro(t)):a!=null?Vh(e,i,Ro(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+Ro(l):e.removeAttribute("name")}function Vv(e,t,a,o,n,r,i,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Uh(e);return}a=a!=null?""+Ro(a):"",t=t!=null?""+Ro(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=l?e.checked:!!o,e.defaultChecked=!!o,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Uh(e)}function Vh(e,t,a){t==="number"&&Xf(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ds(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ro(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Gv(e,t,a){if(t!=null&&(t=""+Ro(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ro(a):""}function jv(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(X(92));if(zd(o)){if(1<o.length)throw Error(X(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ro(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Uh(e)}function xs(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var W3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ly(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||W3.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Xv(e,t,a){if(t!=null&&typeof t!="object")throw Error(X(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&ly(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&ly(e,r,t[r])}function Dx(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mf(e){return Z3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qn(){}var Gh=null;function Rx(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,us=null;function sy(e){var t=Is(e);if(t&&(e=t.stateNode)){var a=e[Ka]||null;e:switch(e=t.stateNode,t.type){case"input":if(qh(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oo(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Ka]||null;if(!n)throw Error(X(90));qh(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&qv(o)}break e;case"textarea":Gv(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ds(e,!!a.multiple,t,!1)}}}var nh=!1;function Wv(e,t,a){if(nh)return e(t,a);nh=!0;try{var o=e(t);return o}finally{if(nh=!1,(Jl!==null||us!==null)&&(Np(),Jl&&(t=Jl,e=us,us=Jl=null,sy(t),e)))for(t=0;t<e.length;t++)sy(e[t])}}function eu(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Ka]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(X(231,t,typeof a));return a}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jh=!1;if(or)try{jl={},Object.defineProperty(jl,"passive",{get:function(){jh=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{jh=!1}var jl,Br=null,Px=null,Nf=null;function Yv(){if(Nf)return Nf;var e,t=Px,a=t.length,o,n="value"in Br?Br.value:Br.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(o=1;o<=i&&t[a-o]===n[r-o];o++);return Nf=n.slice(e,1<o?1-o:void 0)}function Ef(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mf(){return!0}function dy(){return!1}function $a(e){function t(a,o,n,r,i){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?mf:dy,this.isPropagationStopped=dy,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mf)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mf)},persist:function(){},isPersistent:mf}),t}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=$a(Gi),bu=ut({},Gi,{view:0,detail:0}),K3=$a(bu),rh,ih,Nd,wp=ut({},bu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zx,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nd&&(Nd&&e.type==="mousemove"?(rh=e.screenX-Nd.screenX,ih=e.screenY-Nd.screenY):ih=rh=0,Nd=e),rh)},movementY:function(e){return"movementY"in e?e.movementY:ih}}),uy=$a(wp),$3=ut({},wp,{dataTransfer:0}),Q3=$a($3),J3=ut({},bu,{relatedTarget:0}),lh=$a(J3),e4=ut({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),t4=$a(e4),a4=ut({},Gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o4=$a(a4),n4=ut({},Gi,{data:0}),cy=$a(n4),r4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l4[e])?!!t[e]:!1}function zx(){return s4}var d4=ut({},bu,{key:function(e){if(e.key){var t=r4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ef(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zx,charCode:function(e){return e.type==="keypress"?Ef(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ef(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u4=$a(d4),c4=ut({},wp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fy=$a(c4),f4=ut({},bu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zx}),p4=$a(f4),m4=ut({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),g4=$a(m4),h4=ut({},wp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x4=$a(h4),b4=ut({},Gi,{newState:0,oldState:0}),w4=$a(b4),y4=[9,13,27,32],Ox=or&&"CompositionEvent"in window,Fd=null;or&&"documentMode"in document&&(Fd=document.documentMode);var v4=or&&"TextEvent"in window&&!Fd,Zv=or&&(!Ox||Fd&&8<Fd&&11>=Fd),py=" ",my=!1;function Kv(e,t){switch(e){case"keyup":return y4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var es=!1;function C4(e,t){switch(e){case"compositionend":return $v(t);case"keypress":return t.which!==32?null:(my=!0,py);case"textInput":return e=t.data,e===py&&my?null:e;default:return null}}function S4(e,t){if(es)return e==="compositionend"||!Ox&&Kv(e,t)?(e=Yv(),Nf=Px=Br=null,es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zv&&t.locale!=="ko"?null:t.data;default:return null}}var k4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k4[e.type]:t==="textarea"}function Qv(e,t,a,o){Jl?us?us.push(o):us=[o]:Jl=o,t=up(t,"onChange"),0<t.length&&(a=new bp("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ud=null,tu=null;function L4(e){W2(e,0)}function yp(e){var t=Od(e);if(qv(t))return e}function hy(e,t){if(e==="change")return t}var Jv=!1;or&&(or?(hf="oninput"in document,hf||(sh=document.createElement("div"),sh.setAttribute("oninput","return;"),hf=typeof sh.oninput=="function"),gf=hf):gf=!1,Jv=gf&&(!document.documentMode||9<document.documentMode));var gf,hf,sh;function xy(){Ud&&(Ud.detachEvent("onpropertychange",e1),tu=Ud=null)}function e1(e){if(e.propertyName==="value"&&yp(tu)){var t=[];Qv(t,tu,e,Rx(e)),Wv(L4,t)}}function _4(e,t,a){e==="focusin"?(xy(),Ud=t,tu=a,Ud.attachEvent("onpropertychange",e1)):e==="focusout"&&xy()}function I4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yp(tu)}function M4(e,t){if(e==="click")return yp(t)}function N4(e,t){if(e==="input"||e==="change")return yp(t)}function E4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wo=typeof Object.is=="function"?Object.is:E4;function au(e,t){if(wo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Hh.call(t,n)||!wo(e[n],t[n]))return!1}return!0}function by(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wy(e,t){var a=by(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=by(a)}}function t1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?t1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function a1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xf(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xf(e.document)}return t}function Bx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var T4=or&&"documentMode"in document&&11>=document.documentMode,ts=null,Xh=null,qd=null,Wh=!1;function yy(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wh||ts==null||ts!==Xf(o)||(o=ts,"selectionStart"in o&&Bx(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qd&&au(qd,o)||(qd=o,o=up(Xh,"onSelect"),0<o.length&&(t=new bp("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=ts)))}function Mi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var as={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionrun:Mi("Transition","TransitionRun"),transitionstart:Mi("Transition","TransitionStart"),transitioncancel:Mi("Transition","TransitionCancel"),transitionend:Mi("Transition","TransitionEnd")},dh={},o1={};or&&(o1=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ji(e){if(dh[e])return dh[e];if(!as[e])return e;var t=as[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in o1)return dh[e]=t[a];return e}var n1=ji("animationend"),r1=ji("animationiteration"),i1=ji("animationstart"),A4=ji("transitionrun"),D4=ji("transitionstart"),R4=ji("transitioncancel"),l1=ji("transitionend"),s1=new Map,Yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yh.push("scrollEnd");function $o(e,t){s1.set(e,t),Vi(t,[e])}var Wf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Do=[],os=0,Hx=0;function vp(){for(var e=os,t=Hx=os=0;t<e;){var a=Do[t];Do[t++]=null;var o=Do[t];Do[t++]=null;var n=Do[t];Do[t++]=null;var r=Do[t];if(Do[t++]=null,o!==null&&n!==null){var i=o.pending;i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n}r!==0&&d1(a,n,r)}}function Cp(e,t,a,o){Do[os++]=e,Do[os++]=t,Do[os++]=a,Do[os++]=o,Hx|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Fx(e,t,a,o){return Cp(e,t,a,o),Yf(e)}function Xi(e,t){return Cp(e,null,null,t),Yf(e)}function d1(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-xo(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function Yf(e){if(50<$d)throw $d=0,gx=null,Error(X(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ns={};function P4(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function po(e,t,a,o){return new P4(e,t,a,o)}function Ux(e){return e=e.prototype,!(!e||!e.isReactComponent)}function er(e,t){var a=e.alternate;return a===null?(a=po(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function u1(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tf(e,t,a,o,n,r){var i=0;if(o=e,typeof e=="function")Ux(e)&&(i=1);else if(typeof e=="string")i=BE(e,a,Cn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ph:return e=po(31,a,t,n),e.elementType=Ph,e.lanes=r,e;case Kl:return Ri(a.children,n,r,t);case Nv:i=8,n|=24;break;case Ah:return e=po(12,a,t,n|2),e.elementType=Ah,e.lanes=r,e;case Dh:return e=po(13,a,t,n),e.elementType=Dh,e.lanes=r,e;case Rh:return e=po(19,a,t,n),e.elementType=Rh,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $n:i=10;break e;case Ev:i=9;break e;case Ix:i=11;break e;case Mx:i=14;break e;case Tr:i=16,o=null;break e}i=29,a=Error(X(130,e===null?"null":typeof e,"")),o=null}return t=po(i,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Ri(e,t,a,o){return e=po(7,e,o,t),e.lanes=a,e}function uh(e,t,a){return e=po(6,e,null,t),e.lanes=a,e}function c1(e){var t=po(18,null,null,0);return t.stateNode=e,t}function ch(e,t,a){return t=po(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vy=new WeakMap;function Bo(e,t){if(typeof e=="object"&&e!==null){var a=vy.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ay(t)},vy.set(e,t),t)}return{value:e,source:t,stack:ay(t)}}var rs=[],is=0,Zf=null,ou=0,Po=[],zo=0,$r=null,wn=1,yn="";function Zn(e,t){rs[is++]=ou,rs[is++]=Zf,Zf=e,ou=t}function f1(e,t,a){Po[zo++]=wn,Po[zo++]=yn,Po[zo++]=$r,$r=e;var o=wn;e=yn;var n=32-xo(o)-1;o&=~(1<<n),a+=1;var r=32-xo(t)+n;if(30<r){var i=n-n%5;r=(o&(1<<i)-1).toString(32),o>>=i,n-=i,wn=1<<32-xo(t)+n|a<<n|o,yn=r+e}else wn=1<<r|a<<n|o,yn=e}function qx(e){e.return!==null&&(Zn(e,1),f1(e,1,0))}function Vx(e){for(;e===Zf;)Zf=rs[--is],rs[is]=null,ou=rs[--is],rs[is]=null;for(;e===$r;)$r=Po[--zo],Po[zo]=null,yn=Po[--zo],Po[zo]=null,wn=Po[--zo],Po[zo]=null}function p1(e,t){Po[zo++]=wn,Po[zo++]=yn,Po[zo++]=$r,wn=t.id,yn=t.overflow,$r=e}var ca=null,dt=null,Pe=!1,Vr=null,Ho=!1,Zh=Error(X(519));function Qr(e){var t=Error(X(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nu(Bo(t,e)),Zh}function Cy(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[ua]=e,t[Ka]=o,a){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(a=0;a<su.length;a++)Ne(su[a],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Vv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),jv(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Z2(t.textContent,a)?(o.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),o.onScroll!=null&&Ne("scroll",t),o.onScrollEnd!=null&&Ne("scrollend",t),o.onClick!=null&&(t.onclick=Qn),t=!0):t=!1,t||Qr(e,!0)}function Sy(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:Ho=!1;return;case 27:case 3:Ho=!0;return;default:ca=ca.return}}function Xl(e){if(e!==ca)return!1;if(!Pe)return Sy(e),Pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yx(e.type,e.memoizedProps)),a=!a),a&&dt&&Qr(e),Sy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));dt=cv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));dt=cv(e)}else t===27?(t=dt,ai(e.type)?(e=kx,kx=null,dt=e):dt=t):dt=ca?Uo(e.stateNode.nextSibling):null;return!0}function Bi(){dt=ca=null,Pe=!1}function fh(){var e=Vr;return e!==null&&(Ya===null?Ya=e:Ya.push.apply(Ya,e),Vr=null),e}function nu(e){Vr===null?Vr=[e]:Vr.push(e)}var Kh=Sn(null),Wi=null,Jn=null;function Dr(e,t,a){tt(Kh,t._currentValue),t._currentValue=a}function tr(e){e._currentValue=Kh.current,ta(Kh)}function $h(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Qh(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var l=r;r=n;for(var s=0;s<t.length;s++)if(l.context===t[s]){r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),$h(r.return,a,e),o||(i=null);break e}r=l.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(X(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),$h(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Ms(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(X(387));if(i=i.memoizedProps,i!==null){var l=n.type;wo(n.pendingProps.value,i.value)||(e!==null?e.push(l):e=[l])}}else if(n===qf.current){if(i=n.alternate,i===null)throw Error(X(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(uu):e=[uu])}n=n.return}e!==null&&Qh(t,e,a,o),t.flags|=262144}function Kf(e){for(e=e.firstContext;e!==null;){if(!wo(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hi(e){Wi=e,Jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return m1(Wi,e)}function xf(e,t){return Wi===null&&Hi(e),m1(e,t)}function m1(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jn===null){if(e===null)throw Error(X(308));Jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jn=Jn.next=t;return a}var z4=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},O4=Xt.unstable_scheduleCallback,B4=Xt.unstable_NormalPriority,zt={$$typeof:$n,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gx(){return{controller:new z4,data:new Map,refCount:0}}function wu(e){e.refCount--,e.refCount===0&&O4(B4,function(){e.controller.abort()})}var Vd=null,Jh=0,bs=0,cs=null;function H4(e,t){if(Vd===null){var a=Vd=[];Jh=0,bs=gb(),cs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Jh++,t.then(ky,ky),t}function ky(){if(--Jh===0&&Vd!==null){cs!==null&&(cs.status="fulfilled");var e=Vd;Vd=null,bs=0,cs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function F4(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var Ly=me.S;me.S=function(e,t){M2=go(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&H4(e,t),Ly!==null&&Ly(e,t)};var Pi=Sn(null);function jx(){var e=Pi.current;return e!==null?e:Qe.pooledCache}function Af(e,t){t===null?tt(Pi,Pi.current):tt(Pi,t.pool)}function g1(){var e=jx();return e===null?null:{parent:zt._currentValue,pool:e}}var Ns=Error(X(460)),Xx=Error(X(474)),Sp=Error(X(542)),$f={then:function(){}};function _y(e){return e=e.status,e==="fulfilled"||e==="rejected"}function h1(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qn,Qn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,My(e),e;default:if(typeof t.status=="string")t.then(Qn,Qn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(X(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,My(e),e}throw zi=t,Ns}}function Ti(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zi=a,Ns):a}}var zi=null;function Iy(){if(zi===null)throw Error(X(459));var e=zi;return zi=null,e}function My(e){if(e===Ns||e===Sp)throw Error(X(483))}var fs=null,ru=0;function bf(e){var t=ru;return ru+=1,fs===null&&(fs=[]),h1(fs,e,t)}function Ed(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wf(e,t){throw t.$$typeof===_3?Error(X(525)):(e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function x1(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=er(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function i(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function l(h,x,m,b){return x===null||x.tag!==6?(x=uh(m,h.mode,b),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,b){var v=m.type;return v===Kl?d(h,x,m.props.children,b,m.key):x!==null&&(x.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tr&&Ti(v)===x.type)?(x=n(x,m.props),Ed(x,m),x.return=h,x):(x=Tf(m.type,m.key,m.props,null,h.mode,b),Ed(x,m),x.return=h,x)}function u(h,x,m,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=ch(m,h.mode,b),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function d(h,x,m,b,v){return x===null||x.tag!==7?(x=Ri(m,h.mode,b,v),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=uh(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case df:return m=Tf(x.type,x.key,x.props,null,h.mode,m),Ed(m,x),m.return=h,m;case Pd:return x=ch(x,h.mode,m),x.return=h,x;case Tr:return x=Ti(x),f(h,x,m)}if(zd(x)||Md(x))return x=Ri(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,bf(x),m);if(x.$$typeof===$n)return f(h,xf(h,x),m);wf(h,x)}return null}function c(h,x,m,b){var v=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return v!==null?null:l(h,x,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case df:return m.key===v?s(h,x,m,b):null;case Pd:return m.key===v?u(h,x,m,b):null;case Tr:return m=Ti(m),c(h,x,m,b)}if(zd(m)||Md(m))return v!==null?null:d(h,x,m,b,null);if(typeof m.then=="function")return c(h,x,bf(m),b);if(m.$$typeof===$n)return c(h,x,xf(h,m),b);wf(h,m)}return null}function p(h,x,m,b,v){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return h=h.get(m)||null,l(x,h,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case df:return h=h.get(b.key===null?m:b.key)||null,s(x,h,b,v);case Pd:return h=h.get(b.key===null?m:b.key)||null,u(x,h,b,v);case Tr:return b=Ti(b),p(h,x,m,b,v)}if(zd(b)||Md(b))return h=h.get(m)||null,d(x,h,b,v,null);if(typeof b.then=="function")return p(h,x,m,bf(b),v);if(b.$$typeof===$n)return p(h,x,m,xf(x,b),v);wf(x,b)}return null}function g(h,x,m,b){for(var v=null,C=null,k=x,S=x=0,_=null;k!==null&&S<m.length;S++){k.index>S?(_=k,k=null):_=k.sibling;var A=c(h,k,m[S],b);if(A===null){k===null&&(k=_);break}e&&k&&A.alternate===null&&t(h,k),x=r(A,x,S),C===null?v=A:C.sibling=A,C=A,k=_}if(S===m.length)return a(h,k),Pe&&Zn(h,S),v;if(k===null){for(;S<m.length;S++)k=f(h,m[S],b),k!==null&&(x=r(k,x,S),C===null?v=k:C.sibling=k,C=k);return Pe&&Zn(h,S),v}for(k=o(k);S<m.length;S++)_=p(k,h,S,m[S],b),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?S:_.key),x=r(_,x,S),C===null?v=_:C.sibling=_,C=_);return e&&k.forEach(function(D){return t(h,D)}),Pe&&Zn(h,S),v}function w(h,x,m,b){if(m==null)throw Error(X(151));for(var v=null,C=null,k=x,S=x=0,_=null,A=m.next();k!==null&&!A.done;S++,A=m.next()){k.index>S?(_=k,k=null):_=k.sibling;var D=c(h,k,A.value,b);if(D===null){k===null&&(k=_);break}e&&k&&D.alternate===null&&t(h,k),x=r(D,x,S),C===null?v=D:C.sibling=D,C=D,k=_}if(A.done)return a(h,k),Pe&&Zn(h,S),v;if(k===null){for(;!A.done;S++,A=m.next())A=f(h,A.value,b),A!==null&&(x=r(A,x,S),C===null?v=A:C.sibling=A,C=A);return Pe&&Zn(h,S),v}for(k=o(k);!A.done;S++,A=m.next())A=p(k,h,S,A.value,b),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?S:A.key),x=r(A,x,S),C===null?v=A:C.sibling=A,C=A);return e&&k.forEach(function(B){return t(h,B)}),Pe&&Zn(h,S),v}function y(h,x,m,b){if(typeof m=="object"&&m!==null&&m.type===Kl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case df:e:{for(var v=m.key;x!==null;){if(x.key===v){if(v=m.type,v===Kl){if(x.tag===7){a(h,x.sibling),b=n(x,m.props.children),b.return=h,h=b;break e}}else if(x.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Tr&&Ti(v)===x.type){a(h,x.sibling),b=n(x,m.props),Ed(b,m),b.return=h,h=b;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Kl?(b=Ri(m.props.children,h.mode,b,m.key),b.return=h,h=b):(b=Tf(m.type,m.key,m.props,null,h.mode,b),Ed(b,m),b.return=h,h=b)}return i(h);case Pd:e:{for(v=m.key;x!==null;){if(x.key===v)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),b=n(x,m.children||[]),b.return=h,h=b;break e}else{a(h,x);break}else t(h,x);x=x.sibling}b=ch(m,h.mode,b),b.return=h,h=b}return i(h);case Tr:return m=Ti(m),y(h,x,m,b)}if(zd(m))return g(h,x,m,b);if(Md(m)){if(v=Md(m),typeof v!="function")throw Error(X(150));return m=v.call(m),w(h,x,m,b)}if(typeof m.then=="function")return y(h,x,bf(m),b);if(m.$$typeof===$n)return y(h,x,xf(h,m),b);wf(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),b=n(x,m),b.return=h,h=b):(a(h,x),b=uh(m,h.mode,b),b.return=h,h=b),i(h)):a(h,x)}return function(h,x,m,b){try{ru=0;var v=y(h,x,m,b);return fs=null,v}catch(k){if(k===Ns||k===Sp)throw k;var C=po(29,k,null,h.mode);return C.lanes=b,C.return=h,C}}}var Fi=x1(!0),b1=x1(!1),Ar=!1;function Wx(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ex(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(qe&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=Yf(e),d1(e,null,a),t}return Cp(e,o,t,a),Yf(e)}function Gd(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,zv(e,a)}}function ph(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var tx=!1;function jd(){if(tx){var e=cs;if(e!==null)throw e}}function Xd(e,t,a,o){tx=!1;var n=e.updateQueue;Ar=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?r=u:i.next=u,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;i=0,d=u=s=null,l=r;do{var c=l.lane&-536870913,p=c!==l.lane;if(p?(De&c)===c:(o&c)===c){c!==0&&c===bs&&(tx=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=e,w=l;c=t;var y=a;switch(w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(y,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,c=typeof g=="function"?g.call(y,f,c):g,c==null)break e;f=ut({},f,c);break e;case 2:Ar=!0}}c=l.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=f):d=d.next=p,i|=c;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;p=l,l=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),ei|=i,e.lanes=i,e.memoizedState=f}}function w1(e,t){if(typeof e!="function")throw Error(X(191,e));e.call(t)}function y1(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)w1(a[e],t)}var ws=Sn(null),Qf=Sn(0);function Ny(e,t){e=lr,tt(Qf,e),tt(ws,t),lr=e|t.baseLanes}function ax(){tt(Qf,lr),tt(ws,ws.current)}function Yx(){lr=Qf.current,ta(ws),ta(Qf)}var yo=Sn(null),Fo=null;function Rr(e){var t=e.alternate;tt(Et,Et.current&1),tt(yo,e),Fo===null&&(t===null||ws.current!==null||t.memoizedState!==null)&&(Fo=e)}function ox(e){tt(Et,Et.current),tt(yo,e),Fo===null&&(Fo=e)}function v1(e){e.tag===22?(tt(Et,Et.current),tt(yo,e),Fo===null&&(Fo=e)):Pr(e)}function Pr(){tt(Et,Et.current),tt(yo,yo.current)}function fo(e){ta(yo),Fo===e&&(Fo=null),ta(Et)}var Et=Sn(0);function Jf(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cx(a)||Sx(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nr=0,we=null,$e=null,Rt=null,ep=!1,ps=!1,Ui=!1,tp=0,iu=0,ms=null,U4=0;function St(){throw Error(X(321))}function Zx(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!wo(e[a],t[a]))return!1;return!0}function Kx(e,t,a,o,n,r){return nr=r,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,me.H=e===null||e.memoizedState===null?Q1:lb,Ui=!1,r=a(o,n),Ui=!1,ps&&(r=S1(t,a,o,n)),C1(e),r}function C1(e){me.H=lu;var t=$e!==null&&$e.next!==null;if(nr=0,Rt=$e=we=null,ep=!1,iu=0,ms=null,t)throw Error(X(300));e===null||Ot||(e=e.dependencies,e!==null&&Kf(e)&&(Ot=!0))}function S1(e,t,a,o){we=e;var n=0;do{if(ps&&(ms=null),iu=0,ps=!1,25<=n)throw Error(X(301));if(n+=1,Rt=$e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}me.H=J1,r=t(a,o)}while(ps);return r}function q4(){var e=me.H,t=e.useState()[0];return t=typeof t.then=="function"?yu(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(we.flags|=1024),t}function $x(){var e=tp!==0;return tp=0,e}function Qx(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Jx(e){if(ep){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ep=!1}nr=0,Rt=$e=we=null,ps=!1,iu=tp=0,ms=null}function Ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?we.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function Tt(){if($e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Rt===null?we.memoizedState:Rt.next;if(t!==null)Rt=t,$e=e;else{if(e===null)throw we.alternate===null?Error(X(467)):Error(X(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Rt===null?we.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function kp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yu(e){var t=iu;return iu+=1,ms===null&&(ms=[]),e=h1(ms,e,t),t=we,(Rt===null?t.memoizedState:Rt.next)===null&&(t=t.alternate,me.H=t===null||t.memoizedState===null?Q1:lb),e}function Lp(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yu(e);if(e.$$typeof===$n)return fa(e)}throw Error(X(438,String(e)))}function eb(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=we.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=kp(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=I3;return t.index++,a}function rr(e,t){return typeof t=="function"?t(e):t}function Df(e){var t=Tt();return tb(t,$e,e)}function tb(e,t,a){var o=e.queue;if(o===null)throw Error(X(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var l=i=null,s=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(De&f)===f:(nr&f)===f){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===bs&&(d=!0);else if((nr&c)===c){u=u.next,c===bs&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=f,i=r):s=s.next=f,we.lanes|=c,ei|=c;f=u.action,Ui&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(l=s=c,i=r):s=s.next=c,we.lanes|=f,ei|=f;u=u.next}while(u!==null&&u!==t);if(s===null?i=r:s.next=l,!wo(r,e.memoizedState)&&(Ot=!0,d&&(a=cs,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function mh(e){var t=Tt(),a=t.queue;if(a===null)throw Error(X(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);wo(r,t.memoizedState)||(Ot=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function k1(e,t,a){var o=we,n=Tt(),r=Pe;if(r){if(a===void 0)throw Error(X(407));a=a()}else a=t();var i=!wo(($e||n).memoizedState,a);if(i&&(n.memoizedState=a,Ot=!0),n=n.queue,ab(I1.bind(null,o,n,e),[e]),n.getSnapshot!==t||i||Rt!==null&&Rt.memoizedState.tag&1){if(o.flags|=2048,ys(9,{destroy:void 0},_1.bind(null,o,n,a,t),null),Qe===null)throw Error(X(349));r||(nr&127)!==0||L1(o,t,a)}return a}function L1(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=kp(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function _1(e,t,a,o){t.value=a,t.getSnapshot=o,M1(t)&&N1(e)}function I1(e,t,a){return a(function(){M1(t)&&N1(e)})}function M1(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!wo(e,a)}catch{return!0}}function N1(e){var t=Xi(e,2);t!==null&&Za(t,e,2)}function nx(e){var t=Ea();if(typeof e=="function"){var a=e;if(e=a(),Ui){Or(!0);try{a()}finally{Or(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t}function E1(e,t,a,o){return e.baseState=a,tb(e,$e,typeof o=="function"?o:rr)}function V4(e,t,a,o,n){if(Ip(e))throw Error(X(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};me.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,T1(t,r)):(r.next=a.next,t.pending=a.next=r)}}function T1(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=me.T,i={};me.T=i;try{var l=a(n,o),s=me.S;s!==null&&s(i,l),Ey(e,t,l)}catch(u){rx(e,t,u)}finally{r!==null&&i.types!==null&&(r.types=i.types),me.T=r}}else try{r=a(n,o),Ey(e,t,r)}catch(u){rx(e,t,u)}}function Ey(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ty(e,t,o)},function(o){return rx(e,t,o)}):Ty(e,t,a)}function Ty(e,t,a){t.status="fulfilled",t.value=a,A1(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,T1(e,a)))}function rx(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,A1(t),t=t.next;while(t!==o)}e.action=null}function A1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function D1(e,t){return t}function Ay(e,t){if(Pe){var a=Qe.formState;if(a!==null){e:{var o=we;if(Pe){if(dt){t:{for(var n=dt,r=Ho;n.nodeType!==8;){if(!r){n=null;break t}if(n=Uo(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){dt=Uo(n.nextSibling),o=n.data==="F!";break e}}Qr(o)}o=!1}o&&(t=a[0])}}return a=Ea(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D1,lastRenderedState:t},a.queue=o,a=Z1.bind(null,we,o),o.dispatch=a,o=nx(!1),r=ib.bind(null,we,!1,o.queue),o=Ea(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=V4.bind(null,we,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function Dy(e){var t=Tt();return R1(t,$e,e)}function R1(e,t,a){if(t=tb(e,t,D1)[0],e=Df(rr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=yu(t)}catch(i){throw i===Ns?Sp:i}else o=t;t=Tt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(we.flags|=2048,ys(9,{destroy:void 0},G4.bind(null,n,a),null)),[o,r,e]}function G4(e,t){e.action=t}function Ry(e){var t=Tt(),a=$e;if(a!==null)return R1(t,a,e);Tt(),t=t.memoizedState,a=Tt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function ys(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=we.updateQueue,t===null&&(t=kp(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function P1(){return Tt().memoizedState}function Rf(e,t,a,o){var n=Ea();we.flags|=e,n.memoizedState=ys(1|t,{destroy:void 0},a,o===void 0?null:o)}function _p(e,t,a,o){var n=Tt();o=o===void 0?null:o;var r=n.memoizedState.inst;$e!==null&&o!==null&&Zx(o,$e.memoizedState.deps)?n.memoizedState=ys(t,r,a,o):(we.flags|=e,n.memoizedState=ys(1|t,r,a,o))}function Py(e,t){Rf(8390656,8,e,t)}function ab(e,t){_p(2048,8,e,t)}function j4(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=kp(),we.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function z1(e){var t=Tt().memoizedState;return j4({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(X(440));return t.impl.apply(void 0,arguments)}}function O1(e,t){return _p(4,2,e,t)}function B1(e,t){return _p(4,4,e,t)}function H1(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function F1(e,t,a){a=a!=null?a.concat([e]):null,_p(4,4,H1.bind(null,t,e),a)}function ob(){}function U1(e,t){var a=Tt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Zx(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function q1(e,t){var a=Tt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Zx(t,o[1]))return o[0];if(o=e(),Ui){Or(!0);try{e()}finally{Or(!1)}}return a.memoizedState=[o,t],o}function nb(e,t,a){return a===void 0||(nr&1073741824)!==0&&(De&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=E2(),we.lanes|=e,ei|=e,a)}function V1(e,t,a,o){return wo(a,t)?a:ws.current!==null?(e=nb(e,a,o),wo(e,t)||(Ot=!0),e):(nr&42)===0||(nr&1073741824)!==0&&(De&261930)===0?(Ot=!0,e.memoizedState=a):(e=E2(),we.lanes|=e,ei|=e,t)}function G1(e,t,a,o,n){var r=Ve.p;Ve.p=r!==0&&8>r?r:8;var i=me.T,l={};me.T=l,ib(e,!1,t,a);try{var s=n(),u=me.S;if(u!==null&&u(l,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=F4(s,o);Wd(e,t,d,bo(e))}else Wd(e,t,o,bo(e))}catch(f){Wd(e,t,{then:function(){},status:"rejected",reason:f},bo())}finally{Ve.p=r,i!==null&&l.types!==null&&(i.types=l.types),me.T=i}}function X4(){}function ix(e,t,a,o){if(e.tag!==5)throw Error(X(476));var n=j1(e).queue;G1(e,n,t,Di,a===null?X4:function(){return X1(e),a(o)})}function j1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Di,baseState:Di,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:Di},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function X1(e){var t=j1(e);t.next===null&&(t=e.alternate.memoizedState),Wd(e,t.next.queue,{},bo())}function rb(){return fa(uu)}function W1(){return Tt().memoizedState}function Y1(){return Tt().memoizedState}function W4(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bo();e=Gr(a);var o=jr(t,e,a);o!==null&&(Za(o,t,a),Gd(o,t,a)),t={cache:Gx()},e.payload=t;return}t=t.return}}function Y4(e,t,a){var o=bo();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ip(e)?K1(t,a):(a=Fx(e,t,a,o),a!==null&&(Za(a,e,o),$1(a,t,o)))}function Z1(e,t,a){var o=bo();Wd(e,t,a,o)}function Wd(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))K1(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,l=r(i,a);if(n.hasEagerState=!0,n.eagerState=l,wo(l,i))return Cp(e,t,n,0),Qe===null&&vp(),!1}catch{}if(a=Fx(e,t,n,o),a!==null)return Za(a,e,o),$1(a,t,o),!0}return!1}function ib(e,t,a,o){if(o={lane:2,revertLane:gb(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ip(e)){if(t)throw Error(X(479))}else t=Fx(e,a,o,2),t!==null&&Za(t,e,2)}function Ip(e){var t=e.alternate;return e===we||t!==null&&t===we}function K1(e,t){ps=ep=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $1(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,zv(e,a)}}var lu={readContext:fa,use:Lp,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};lu.useEffectEvent=St;var Q1={readContext:fa,use:Lp,useCallback:function(e,t){return Ea().memoizedState=[e,t===void 0?null:t],e},useContext:fa,useEffect:Py,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Rf(4194308,4,H1.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Rf(4194308,4,e,t)},useInsertionEffect:function(e,t){Rf(4,2,e,t)},useMemo:function(e,t){var a=Ea();t=t===void 0?null:t;var o=e();if(Ui){Or(!0);try{e()}finally{Or(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ea();if(a!==void 0){var n=a(t);if(Ui){Or(!0);try{a(t)}finally{Or(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Y4.bind(null,we,e),[o.memoizedState,e]},useRef:function(e){var t=Ea();return e={current:e},t.memoizedState=e},useState:function(e){e=nx(e);var t=e.queue,a=Z1.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ob,useDeferredValue:function(e,t){var a=Ea();return nb(a,e,t)},useTransition:function(){var e=nx(!1);return e=G1.bind(null,we,e.queue,!0,!1),Ea().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=we,n=Ea();if(Pe){if(a===void 0)throw Error(X(407));a=a()}else{if(a=t(),Qe===null)throw Error(X(349));(De&127)!==0||L1(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,Py(I1.bind(null,o,r,e),[e]),o.flags|=2048,ys(9,{destroy:void 0},_1.bind(null,o,r,a,t),null),a},useId:function(){var e=Ea(),t=Qe.identifierPrefix;if(Pe){var a=yn,o=wn;a=(o&~(1<<32-xo(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=tp++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=U4++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:rb,useFormState:Ay,useActionState:Ay,useOptimistic:function(e){var t=Ea();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ib.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:eb,useCacheRefresh:function(){return Ea().memoizedState=W4.bind(null,we)},useEffectEvent:function(e){var t=Ea(),a={impl:e};return t.memoizedState=a,function(){if((qe&2)!==0)throw Error(X(440));return a.impl.apply(void 0,arguments)}}},lb={readContext:fa,use:Lp,useCallback:U1,useContext:fa,useEffect:ab,useImperativeHandle:F1,useInsertionEffect:O1,useLayoutEffect:B1,useMemo:q1,useReducer:Df,useRef:P1,useState:function(){return Df(rr)},useDebugValue:ob,useDeferredValue:function(e,t){var a=Tt();return V1(a,$e.memoizedState,e,t)},useTransition:function(){var e=Df(rr)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:yu(e),t]},useSyncExternalStore:k1,useId:W1,useHostTransitionStatus:rb,useFormState:Dy,useActionState:Dy,useOptimistic:function(e,t){var a=Tt();return E1(a,$e,e,t)},useMemoCache:eb,useCacheRefresh:Y1};lb.useEffectEvent=z1;var J1={readContext:fa,use:Lp,useCallback:U1,useContext:fa,useEffect:ab,useImperativeHandle:F1,useInsertionEffect:O1,useLayoutEffect:B1,useMemo:q1,useReducer:mh,useRef:P1,useState:function(){return mh(rr)},useDebugValue:ob,useDeferredValue:function(e,t){var a=Tt();return $e===null?nb(a,e,t):V1(a,$e.memoizedState,e,t)},useTransition:function(){var e=mh(rr)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:yu(e),t]},useSyncExternalStore:k1,useId:W1,useHostTransitionStatus:rb,useFormState:Ry,useActionState:Ry,useOptimistic:function(e,t){var a=Tt();return $e!==null?E1(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:eb,useCacheRefresh:Y1};J1.useEffectEvent=z1;function gh(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:ut({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lx={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=bo(),n=Gr(o);n.payload=t,a!=null&&(n.callback=a),t=jr(e,n,o),t!==null&&(Za(t,e,o),Gd(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=bo(),n=Gr(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=jr(e,n,o),t!==null&&(Za(t,e,o),Gd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bo(),o=Gr(a);o.tag=2,t!=null&&(o.callback=t),t=jr(e,o,a),t!==null&&(Za(t,e,a),Gd(t,e,a))}};function zy(e,t,a,o,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!au(a,o)||!au(n,r):!0}function Oy(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&lx.enqueueReplaceState(t,t.state,null)}function qi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=ut({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function e2(e){Wf(e)}function t2(e){console.error(e)}function a2(e){Wf(e)}function ap(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function By(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function sx(e,t,a){return a=Gr(a),a.tag=3,a.payload={element:null},a.callback=function(){ap(e,t)},a}function o2(e){return e=Gr(e),e.tag=3,e}function n2(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){By(t,a,o)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){By(t,a,o),typeof n!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var l=o.stack;this.componentDidCatch(o.value,{componentStack:l!==null?l:""})})}function Z4(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Ms(t,a,n,!0),a=yo.current,a!==null){switch(a.tag){case 31:case 13:return Fo===null?lp():a.alternate===null&&kt===0&&(kt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===$f?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),_h(e,o,n)),!1;case 22:return a.flags|=65536,o===$f?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),_h(e,o,n)),!1}throw Error(X(435,a.tag))}return _h(e,o,n),lp(),!1}if(Pe)return t=yo.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Zh&&(e=Error(X(422),{cause:o}),nu(Bo(e,a)))):(o!==Zh&&(t=Error(X(423),{cause:o}),nu(Bo(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Bo(o,a),n=sx(e.stateNode,o,n),ph(e,n),kt!==4&&(kt=2)),!1;var r=Error(X(520),{cause:o});if(r=Bo(r,a),Kd===null?Kd=[r]:Kd.push(r),kt!==4&&(kt=2),t===null)return!0;o=Bo(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=sx(a.stateNode,o,e),ph(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Xr===null||!Xr.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=o2(n),n2(n,e,a,o),ph(a,n),!1}a=a.return}while(a!==null);return!1}var sb=Error(X(461)),Ot=!1;function da(e,t,a,o){t.child=e===null?b1(t,null,a,o):Fi(t,e.child,a,o)}function Hy(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var i={};for(var l in o)l!=="ref"&&(i[l]=o[l])}else i=o;return Hi(t),o=Kx(e,t,a,i,r,n),l=$x(),e!==null&&!Ot?(Qx(e,t,n),ir(e,t,n)):(Pe&&l&&qx(t),t.flags|=1,da(e,t,o,n),t.child)}function Fy(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Ux(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,r2(e,t,r,o,n)):(e=Tf(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!db(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:au,a(i,o)&&e.ref===t.ref)return ir(e,t,n)}return t.flags|=1,e=er(r,o),e.ref=t.ref,e.return=t,t.child=e}function r2(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(au(r,o)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=o=r,db(e,n))(e.flags&131072)!==0&&(Ot=!0);else return t.lanes=e.lanes,ir(e,t,n)}return dx(e,t,a,o,n)}function i2(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return Uy(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Af(t,r!==null?r.cachePool:null),r!==null?Ny(t,r):ax(),v1(t);else return o=t.lanes=536870912,Uy(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Af(t,r.cachePool),Ny(t,r),Pr(t),t.memoizedState=null):(e!==null&&Af(t,null),ax(),Pr(t));return da(e,t,n,a),t.child}function Bd(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uy(e,t,a,o,n){var r=jx();return r=r===null?null:{parent:zt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Af(t,null),ax(),v1(t),e!==null&&Ms(e,t,o,!0),t.childLanes=n,null}function Pf(e,t){return t=op({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qy(e,t,a){return Fi(t,e.child,null,a),e=Pf(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function K4(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(o.mode==="hidden")return e=Pf(t,o),t.lanes=536870912,Bd(null,e);if(ox(t),(e=dt)?(e=Q2(e,Ho),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$r!==null?{id:wn,overflow:yn}:null,retryLane:536870912,hydrationErrors:null},a=c1(e),a.return=t,t.child=a,ca=t,dt=null)):e=null,e===null)throw Qr(t);return t.lanes=536870912,null}return Pf(t,o)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(ox(t),n)if(t.flags&256)t.flags&=-257,t=qy(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(X(558));else if(Ot||Ms(e,t,a,!1),n=(a&e.childLanes)!==0,Ot||n){if(o=Qe,o!==null&&(i=Ov(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Xi(e,i),Za(o,e,i),sb;lp(),t=qy(e,t,a)}else e=r.treeContext,dt=Uo(i.nextSibling),ca=t,Pe=!0,Vr=null,Ho=!1,e!==null&&p1(t,e),t=Pf(t,o),t.flags|=4096;return t}return e=er(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zf(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(X(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function dx(e,t,a,o,n){return Hi(t),a=Kx(e,t,a,o,void 0,n),o=$x(),e!==null&&!Ot?(Qx(e,t,n),ir(e,t,n)):(Pe&&o&&qx(t),t.flags|=1,da(e,t,a,n),t.child)}function Vy(e,t,a,o,n,r){return Hi(t),t.updateQueue=null,a=S1(t,o,a,n),C1(e),o=$x(),e!==null&&!Ot?(Qx(e,t,r),ir(e,t,r)):(Pe&&o&&qx(t),t.flags|=1,da(e,t,a,r),t.child)}function Gy(e,t,a,o,n){if(Hi(t),t.stateNode===null){var r=ns,i=a.contextType;typeof i=="object"&&i!==null&&(r=fa(i)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=lx,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Wx(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?fa(i):ns,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(gh(t,a,i,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&lx.enqueueReplaceState(r,r.state,null),Xd(t,o,r,n),jd(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,s=qi(a,l);r.props=s;var u=r.context,d=a.contextType;i=ns,typeof d=="object"&&d!==null&&(i=fa(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||u!==i)&&Oy(t,r,o,i),Ar=!1;var c=t.memoizedState;r.state=c,Xd(t,o,r,n),jd(),u=t.memoizedState,l||c!==u||Ar?(typeof f=="function"&&(gh(t,a,f,o),u=t.memoizedState),(s=Ar||zy(t,a,s,o,c,u,i))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=i,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,ex(e,t),i=t.memoizedProps,d=qi(a,i),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,s=ns,typeof u=="object"&&u!==null&&(s=fa(u)),l=a.getDerivedStateFromProps,(u=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||c!==s)&&Oy(t,r,o,s),Ar=!1,c=t.memoizedState,r.state=c,Xd(t,o,r,n),jd();var p=t.memoizedState;i!==f||c!==p||Ar||e!==null&&e.dependencies!==null&&Kf(e.dependencies)?(typeof l=="function"&&(gh(t,a,l,o),p=t.memoizedState),(d=Ar||zy(t,a,d,o,c,p,s)||e!==null&&e.dependencies!==null&&Kf(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,zf(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Fi(t,e.child,null,n),t.child=Fi(t,null,a,n)):da(e,t,a,n),t.memoizedState=r.state,e=t.child):e=ir(e,t,n),e}function jy(e,t,a,o){return Bi(),t.flags|=256,da(e,t,a,o),t.child}var hh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xh(e){return{baseLanes:e,cachePool:g1()}}function bh(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mo),e}function l2(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(Et.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(n?Rr(t):Pr(t),(e=dt)?(e=Q2(e,Ho),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$r!==null?{id:wn,overflow:yn}:null,retryLane:536870912,hydrationErrors:null},a=c1(e),a.return=t,t.child=a,ca=t,dt=null)):e=null,e===null)throw Qr(t);return Sx(e)?t.lanes=32:t.lanes=536870912,null}var l=o.children;return o=o.fallback,n?(Pr(t),n=t.mode,l=op({mode:"hidden",children:l},n),o=Ri(o,n,a,null),l.return=t,o.return=t,l.sibling=o,t.child=l,o=t.child,o.memoizedState=xh(a),o.childLanes=bh(e,i,a),t.memoizedState=hh,Bd(null,o)):(Rr(t),ux(t,l))}var s=e.memoizedState;if(s!==null&&(l=s.dehydrated,l!==null)){if(r)t.flags&256?(Rr(t),t.flags&=-257,t=wh(e,t,a)):t.memoizedState!==null?(Pr(t),t.child=e.child,t.flags|=128,t=null):(Pr(t),l=o.fallback,n=t.mode,o=op({mode:"visible",children:o.children},n),l=Ri(l,n,a,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,Fi(t,e.child,null,a),o=t.child,o.memoizedState=xh(a),o.childLanes=bh(e,i,a),t.memoizedState=hh,t=Bd(null,o));else if(Rr(t),Sx(l)){if(i=l.nextSibling&&l.nextSibling.dataset,i)var u=i.dgst;i=u,o=Error(X(419)),o.stack="",o.digest=i,nu({value:o,source:null,stack:null}),t=wh(e,t,a)}else if(Ot||Ms(e,t,a,!1),i=(a&e.childLanes)!==0,Ot||i){if(i=Qe,i!==null&&(o=Ov(i,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,Xi(e,o),Za(i,e,o),sb;Cx(l)||lp(),t=wh(e,t,a)}else Cx(l)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,dt=Uo(l.nextSibling),ca=t,Pe=!0,Vr=null,Ho=!1,e!==null&&p1(t,e),t=ux(t,o.children),t.flags|=4096);return t}return n?(Pr(t),l=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=er(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?l=er(u,l):(l=Ri(l,n,a,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,Bd(null,o),o=t.child,l=e.child.memoizedState,l===null?l=xh(a):(n=l.cachePool,n!==null?(s=zt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=g1(),l={baseLanes:l.baseLanes|a,cachePool:n}),o.memoizedState=l,o.childLanes=bh(e,i,a),t.memoizedState=hh,Bd(e.child,o)):(Rr(t),a=e.child,e=a.sibling,a=er(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function ux(e,t){return t=op({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function op(e,t){return e=po(22,e,null,t),e.lanes=0,e}function wh(e,t,a){return Fi(t,e.child,null,a),e=ux(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xy(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),$h(e.return,t,a)}function yh(e,t,a,o,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function s2(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var i=Et.current,l=(i&2)!==0;if(l?(i=i&1|2,t.flags|=128):i&=1,tt(Et,i),da(e,t,o,a),o=Pe?ou:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xy(e,a,t);else if(e.tag===19)Xy(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Jf(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),yh(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Jf(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}yh(t,!0,a,null,r,o);break;case"together":yh(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ir(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ei|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ms(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,a=er(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=er(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function db(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kf(e)))}function $4(e,t,a){switch(t.tag){case 3:Vf(t,t.stateNode.containerInfo),Dr(t,zt,e.memoizedState.cache),Bi();break;case 27:case 5:Bh(t);break;case 4:Vf(t,t.stateNode.containerInfo);break;case 10:Dr(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ox(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Rr(t),t.flags|=128,null):(a&t.child.childLanes)!==0?l2(e,t,a):(Rr(t),e=ir(e,t,a),e!==null?e.sibling:null);Rr(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Ms(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return s2(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(Et,Et.current),o)break;return null;case 22:return t.lanes=0,i2(e,t,a,t.pendingProps);case 24:Dr(t,zt,e.memoizedState.cache)}return ir(e,t,a)}function d2(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ot=!0;else{if(!db(e,a)&&(t.flags&128)===0)return Ot=!1,$4(e,t,a);Ot=(e.flags&131072)!==0}else Ot=!1,Pe&&(t.flags&1048576)!==0&&f1(t,ou,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ti(t.elementType),t.type=e,typeof e=="function")Ux(e)?(o=qi(e,o),t.tag=1,t=Gy(null,t,e,o,a)):(t.tag=0,t=dx(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Ix){t.tag=11,t=Hy(null,t,e,o,a);break e}else if(n===Mx){t.tag=14,t=Fy(null,t,e,o,a);break e}}throw t=zh(e)||e,Error(X(306,t,""))}}return t;case 0:return dx(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=qi(o,t.pendingProps),Gy(e,t,o,n,a);case 3:e:{if(Vf(t,t.stateNode.containerInfo),e===null)throw Error(X(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,ex(e,t),Xd(t,o,null,a);var i=t.memoizedState;if(o=i.cache,Dr(t,zt,o),o!==r.cache&&Qh(t,[zt],a,!0),jd(),o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=jy(e,t,o,a);break e}else if(o!==n){n=Bo(Error(X(424)),t),nu(n),t=jy(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,dt=Uo(e.firstChild),ca=t,Pe=!0,Vr=null,Ho=!0,a=b1(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bi(),o===n){t=ir(e,t,a);break e}da(e,t,o,a)}t=t.child}return t;case 26:return zf(e,t),e===null?(a=mv(t.type,null,t.pendingProps,null))?t.memoizedState=a:Pe||(a=t.type,e=t.pendingProps,o=cp(qr.current).createElement(a),o[ua]=t,o[Ka]=e,pa(o,a,e),ea(o),t.stateNode=o):t.memoizedState=mv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bh(t),e===null&&Pe&&(o=t.stateNode=J2(t.type,t.pendingProps,qr.current),ca=t,Ho=!0,n=dt,ai(t.type)?(kx=n,dt=Uo(o.firstChild)):dt=n),da(e,t,t.pendingProps.children,a),zf(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((n=o=dt)&&(o=LE(o,t.type,t.pendingProps,Ho),o!==null?(t.stateNode=o,ca=t,dt=Uo(o.firstChild),Ho=!1,n=!0):n=!1),n||Qr(t)),Bh(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,yx(n,r)?o=null:i!==null&&yx(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Kx(e,t,q4,null,null,a),uu._currentValue=n),zf(e,t),da(e,t,o,a),t.child;case 6:return e===null&&Pe&&((e=a=dt)&&(a=_E(a,t.pendingProps,Ho),a!==null?(t.stateNode=a,ca=t,dt=null,e=!0):e=!1),e||Qr(t)),null;case 13:return l2(e,t,a);case 4:return Vf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Fi(t,null,o,a):da(e,t,o,a),t.child;case 11:return Hy(e,t,t.type,t.pendingProps,a);case 7:return da(e,t,t.pendingProps,a),t.child;case 8:return da(e,t,t.pendingProps.children,a),t.child;case 12:return da(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Dr(t,t.type,o.value),da(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Hi(t),n=fa(n),o=o(n),t.flags|=1,da(e,t,o,a),t.child;case 14:return Fy(e,t,t.type,t.pendingProps,a);case 15:return r2(e,t,t.type,t.pendingProps,a);case 19:return s2(e,t,a);case 31:return K4(e,t,a);case 22:return i2(e,t,a,t.pendingProps);case 24:return Hi(t),o=fa(zt),e===null?(n=jx(),n===null&&(n=Qe,r=Gx(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Wx(t),Dr(t,zt,n)):((e.lanes&a)!==0&&(ex(e,t),Xd(t,null,null,a),jd()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Dr(t,zt,o)):(o=r.cache,Dr(t,zt,o),o!==n.cache&&Qh(t,[zt],a,!0))),da(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(X(156,t.tag))}function jn(e){e.flags|=4}function vh(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(D2())e.flags|=8192;else throw zi=$f,Xx}else e.flags&=-16777217}function Wy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!aC(t))if(D2())e.flags|=8192;else throw zi=$f,Xx}function yf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Rv():536870912,e.lanes|=t,vs|=t)}function Td(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function Q4(e,t,a){var o=t.pendingProps;switch(Vx(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return st(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),tr(zt),gs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xl(t)?jn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fh())),st(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(jn(t),r!==null?(st(t),Wy(t,r)):(st(t),vh(t,n,null,o,a))):r?r!==e.memoizedState?(jn(t),st(t),Wy(t,r)):(st(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&jn(t),st(t),vh(t,n,e,o,a)),null;case 27:if(Gf(t),a=qr.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&jn(t);else{if(!o){if(t.stateNode===null)throw Error(X(166));return st(t),null}e=Cn.current,Xl(t)?Cy(t,e):(e=J2(n,o,a),t.stateNode=e,jn(t))}return st(t),null;case 5:if(Gf(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&jn(t);else{if(!o){if(t.stateNode===null)throw Error(X(166));return st(t),null}if(r=Cn.current,Xl(t))Cy(t,r);else{var i=cp(qr.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}r[ua]=t,r[Ka]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(pa(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&jn(t)}}return st(t),vh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&jn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(X(166));if(e=qr.current,Xl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=ca,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[ua]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Z2(e.nodeValue,a)),e||Qr(t,!0)}else e=cp(e).createTextNode(o),e[ua]=t,t.stateNode=e}return st(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Xl(t),a!==null){if(e===null){if(!o)throw Error(X(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(557));e[ua]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;st(t),e=!1}else a=fh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if((t.flags&128)!==0)throw Error(X(558))}return st(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Xl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(X(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(X(317));n[ua]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;st(t),n=!1}else n=fh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),yf(t,t.updateQueue),st(t),null);case 4:return gs(),e===null&&hb(t.stateNode.containerInfo),st(t),null;case 10:return tr(t.type),st(t),null;case 19:if(ta(Et),o=t.memoizedState,o===null)return st(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)Td(o,!1);else{if(kt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Jf(e),r!==null){for(t.flags|=128,Td(o,!1),e=r.updateQueue,t.updateQueue=e,yf(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)u1(a,e),a=a.sibling;return tt(Et,Et.current&1|2),Pe&&Zn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&go()>rp&&(t.flags|=128,n=!0,Td(o,!1),t.lanes=4194304)}else{if(!n)if(e=Jf(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,yf(t,e),Td(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Pe)return st(t),null}else 2*go()-o.renderingStartTime>rp&&a!==536870912&&(t.flags|=128,n=!0,Td(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=go(),e.sibling=null,a=Et.current,tt(Et,n?a&1|2:a&1),Pe&&Zn(t,o.treeForkCount),e):(st(t),null);case 22:case 23:return fo(t),Yx(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),a=t.updateQueue,a!==null&&yf(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&ta(Pi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tr(zt),st(t),null;case 25:return null;case 30:return null}throw Error(X(156,t.tag))}function J4(e,t){switch(Vx(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(zt),gs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gf(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(X(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ta(Et),null;case 4:return gs(),null;case 10:return tr(t.type),null;case 22:case 23:return fo(t),Yx(),e!==null&&ta(Pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tr(zt),null;case 25:return null;default:return null}}function u2(e,t){switch(Vx(t),t.tag){case 3:tr(zt),gs();break;case 26:case 27:case 5:Gf(t);break;case 4:gs();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:ta(Et);break;case 10:tr(t.type);break;case 22:case 23:fo(t),Yx(),e!==null&&ta(Pi);break;case 24:tr(zt)}}function vu(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,i=a.inst;o=r(),i.destroy=o}a=a.next}while(a!==n)}}catch(l){Ze(t,t.return,l)}}function Jr(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var i=o.inst,l=i.destroy;if(l!==void 0){i.destroy=void 0,n=t;var s=a,u=l;try{u()}catch(d){Ze(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){Ze(t,t.return,d)}}function c2(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{y1(t,a)}catch(o){Ze(e,e.return,o)}}}function f2(e,t,a){a.props=qi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ze(e,t,o)}}function Yd(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ze(e,t,n)}}function vn(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ze(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ze(e,t,n)}else a.current=null}function p2(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ze(e,e.return,n)}}function Ch(e,t,a){try{var o=e.stateNode;wE(o,e.type,a,t),o[Ka]=t}catch(n){Ze(e,e.return,n)}}function m2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ai(e.type)||e.tag===4}function Sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ai(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cx(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qn));else if(o!==4&&(o===27&&ai(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(cx(e,t,a),e=e.sibling;e!==null;)cx(e,t,a),e=e.sibling}function np(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&ai(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(np(e,t,a),e=e.sibling;e!==null;)np(e,t,a),e=e.sibling}function g2(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);pa(t,o,a),t[ua]=e,t[Ka]=a}catch(r){Ze(e,e.return,r)}}var Kn=!1,Pt=!1,kh=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function eE(e,t){if(e=e.containerInfo,bx=gp,e=a1(e),Bx(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,l=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(l=i+n),f!==r||o!==0&&f.nodeType!==3||(s=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(l=i),c===r&&++d===o&&(s=i),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=l===-1||s===-1?null:{start:l,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(wx={focusedElem:e,selectionRange:a},gp=!1,Jt=t;Jt!==null;)if(t=Jt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Jt=e;else for(;Jt!==null;){switch(t=Jt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=qi(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(w){Ze(a,a.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vx(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vx(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(X(163))}if(e=t.sibling,e!==null){e.return=t.return,Jt=e;break}Jt=t.return}}function h2(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(e,a),o&4&&vu(5,a);break;case 1:if(Wn(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){Ze(a,a.return,i)}else{var n=qi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Ze(a,a.return,i)}}o&64&&c2(a),o&512&&Yd(a,a.return);break;case 3:if(Wn(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{y1(e,t)}catch(i){Ze(a,a.return,i)}}break;case 27:t===null&&o&4&&g2(a);case 26:case 5:Wn(e,a),t===null&&o&4&&p2(a),o&512&&Yd(a,a.return);break;case 12:Wn(e,a);break;case 31:Wn(e,a),o&4&&w2(e,a);break;case 13:Wn(e,a),o&4&&y2(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dE.bind(null,a),IE(e,a))));break;case 22:if(o=a.memoizedState!==null||Kn,!o){t=t!==null&&t.memoizedState!==null||Pt,n=Kn;var r=Pt;Kn=o,(Pt=t)&&!r?Yn(e,a,(a.subtreeFlags&8772)!==0):Wn(e,a),Kn=n,Pt=r}break;case 30:break;default:Wn(e,a)}}function x2(e){var t=e.alternate;t!==null&&(e.alternate=null,x2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ax(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,Wa=!1;function Xn(e,t,a){for(a=a.child;a!==null;)b2(e,t,a),a=a.sibling}function b2(e,t,a){if(ho&&typeof ho.onCommitFiberUnmount=="function")try{ho.onCommitFiberUnmount(mu,a)}catch{}switch(a.tag){case 26:Pt||vn(a,t),Xn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Pt||vn(a,t);var o=gt,n=Wa;ai(a.type)&&(gt=a.stateNode,Wa=!1),Xn(e,t,a),Qd(a.stateNode),gt=o,Wa=n;break;case 5:Pt||vn(a,t);case 6:if(o=gt,n=Wa,gt=null,Xn(e,t,a),gt=o,Wa=n,gt!==null)if(Wa)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(a.stateNode)}catch(r){Ze(a,t,r)}else try{gt.removeChild(a.stateNode)}catch(r){Ze(a,t,r)}break;case 18:gt!==null&&(Wa?(e=gt,dv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ls(e)):dv(gt,a.stateNode));break;case 4:o=gt,n=Wa,gt=a.stateNode.containerInfo,Wa=!0,Xn(e,t,a),gt=o,Wa=n;break;case 0:case 11:case 14:case 15:Jr(2,a,t),Pt||Jr(4,a,t),Xn(e,t,a);break;case 1:Pt||(vn(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&f2(a,t,o)),Xn(e,t,a);break;case 21:Xn(e,t,a);break;case 22:Pt=(o=Pt)||a.memoizedState!==null,Xn(e,t,a),Pt=o;break;default:Xn(e,t,a)}}function w2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ls(e)}catch(a){Ze(t,t.return,a)}}}function y2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ls(e)}catch(a){Ze(t,t.return,a)}}function tE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yy),t;default:throw Error(X(435,e.tag))}}function vf(e,t){var a=tE(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=uE.bind(null,e,o);o.then(n,n)}})}function ja(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(ai(l.type)){gt=l.stateNode,Wa=!1;break e}break;case 5:gt=l.stateNode,Wa=!1;break e;case 3:case 4:gt=l.stateNode.containerInfo,Wa=!0;break e}l=l.return}if(gt===null)throw Error(X(160));b2(r,i,n),gt=null,Wa=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)v2(t,e),t=t.sibling}var Ko=null;function v2(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ja(t,e),Xa(e),o&4&&(Jr(3,e,e.return),vu(3,e),Jr(5,e,e.return));break;case 1:ja(t,e),Xa(e),o&512&&(Pt||a===null||vn(a,a.return)),o&64&&Kn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Ko;if(ja(t,e),Xa(e),o&512&&(Pt||a===null||vn(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[xu]||r[ua]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),pa(r,o,a),r[ua]=e,ea(r),o=r;break e;case"link":var i=hv("link","href",n).get(o+(a.href||""));if(i){for(var l=0;l<i.length;l++)if(r=i[l],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(l,1);break t}}r=n.createElement(o),pa(r,o,a),n.head.appendChild(r);break;case"meta":if(i=hv("meta","content",n).get(o+(a.content||""))){for(l=0;l<i.length;l++)if(r=i[l],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(l,1);break t}}r=n.createElement(o),pa(r,o,a),n.head.appendChild(r);break;default:throw Error(X(468,o))}r[ua]=e,ea(r),o=r}e.stateNode=o}else xv(n,e.type,e.stateNode);else e.stateNode=gv(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?xv(n,e.type,e.stateNode):gv(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ch(e,e.memoizedProps,a.memoizedProps)}break;case 27:ja(t,e),Xa(e),o&512&&(Pt||a===null||vn(a,a.return)),a!==null&&o&4&&Ch(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ja(t,e),Xa(e),o&512&&(Pt||a===null||vn(a,a.return)),e.flags&32){n=e.stateNode;try{xs(n,"")}catch(g){Ze(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,Ch(e,n,a!==null?a.memoizedProps:n)),o&1024&&(kh=!0);break;case 6:if(ja(t,e),Xa(e),o&4){if(e.stateNode===null)throw Error(X(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ze(e,e.return,g)}}break;case 3:if(Hf=null,n=Ko,Ko=fp(t.containerInfo),ja(t,e),Ko=n,Xa(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ls(t.containerInfo)}catch(g){Ze(e,e.return,g)}kh&&(kh=!1,C2(e));break;case 4:o=Ko,Ko=fp(e.stateNode.containerInfo),ja(t,e),Xa(e),Ko=o;break;case 12:ja(t,e),Xa(e);break;case 31:ja(t,e),Xa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 13:ja(t,e),Xa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mp=go()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=Kn,d=Pt;if(Kn=u||n,Pt=d||s,ja(t,e),Pt=d,Kn=u,Xa(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Kn||Pt||Ai(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{l=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){Ze(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){Ze(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?uv(p,!0):uv(s.stateNode,!1)}catch(g){Ze(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,vf(e,a))));break;case 19:ja(t,e),Xa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 30:break;case 21:break;default:ja(t,e),Xa(e)}}function Xa(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(m2(o)){a=o;break}o=o.return}if(a==null)throw Error(X(160));switch(a.tag){case 27:var n=a.stateNode,r=Sh(e);np(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(xs(i,""),a.flags&=-33);var l=Sh(e);np(e,l,i);break;case 3:case 4:var s=a.stateNode.containerInfo,u=Sh(e);cx(e,u,s);break;default:throw Error(X(161))}}catch(d){Ze(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function C2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;C2(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)h2(e,t.alternate,t),t=t.sibling}function Ai(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jr(4,t,t.return),Ai(t);break;case 1:vn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&f2(t,t.return,a),Ai(t);break;case 27:Qd(t.stateNode);case 26:case 5:vn(t,t.return),Ai(t);break;case 22:t.memoizedState===null&&Ai(t);break;case 30:Ai(t);break;default:Ai(t)}e=e.sibling}}function Yn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Yn(n,r,a),vu(4,r);break;case 1:if(Yn(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ze(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var l=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)w1(s[n],l)}catch(u){Ze(o,o.return,u)}}a&&i&64&&c2(r),Yd(r,r.return);break;case 27:g2(r);case 26:case 5:Yn(n,r,a),a&&o===null&&i&4&&p2(r),Yd(r,r.return);break;case 12:Yn(n,r,a);break;case 31:Yn(n,r,a),a&&i&4&&w2(n,r);break;case 13:Yn(n,r,a),a&&i&4&&y2(n,r);break;case 22:r.memoizedState===null&&Yn(n,r,a),Yd(r,r.return);break;case 30:break;default:Yn(n,r,a)}t=t.sibling}}function ub(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wu(a))}function cb(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wu(e))}function Zo(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)S2(e,t,a,o),t=t.sibling}function S2(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Zo(e,t,a,o),n&2048&&vu(9,t);break;case 1:Zo(e,t,a,o);break;case 3:Zo(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wu(e)));break;case 12:if(n&2048){Zo(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,l=r.onPostCommit;typeof l=="function"&&l(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Ze(t,t.return,s)}}else Zo(e,t,a,o);break;case 31:Zo(e,t,a,o);break;case 13:Zo(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?Zo(e,t,a,o):Zd(e,t):r._visibility&2?Zo(e,t,a,o):(r._visibility|=2,Yl(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ub(i,t);break;case 24:Zo(e,t,a,o),n&2048&&cb(t.alternate,t);break;default:Zo(e,t,a,o)}}function Yl(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,l=a,s=o,u=i.flags;switch(i.tag){case 0:case 11:case 15:Yl(r,i,l,s,n),vu(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?Yl(r,i,l,s,n):Zd(r,i):(d._visibility|=2,Yl(r,i,l,s,n)),n&&u&2048&&ub(i.alternate,i);break;case 24:Yl(r,i,l,s,n),n&&u&2048&&cb(i.alternate,i);break;default:Yl(r,i,l,s,n)}t=t.sibling}}function Zd(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:Zd(a,o),n&2048&&ub(o.alternate,o);break;case 24:Zd(a,o),n&2048&&cb(o.alternate,o);break;default:Zd(a,o)}t=t.sibling}}var Hd=8192;function Wl(e,t,a){if(e.subtreeFlags&Hd)for(e=e.child;e!==null;)k2(e,t,a),e=e.sibling}function k2(e,t,a){switch(e.tag){case 26:Wl(e,t,a),e.flags&Hd&&e.memoizedState!==null&&HE(a,Ko,e.memoizedState,e.memoizedProps);break;case 5:Wl(e,t,a);break;case 3:case 4:var o=Ko;Ko=fp(e.stateNode.containerInfo),Wl(e,t,a),Ko=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Hd,Hd=16777216,Wl(e,t,a),Hd=o):Wl(e,t,a));break;default:Wl(e,t,a)}}function L2(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ad(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Jt=o,I2(o,e)}L2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_2(e),e=e.sibling}function _2(e){switch(e.tag){case 0:case 11:case 15:Ad(e),e.flags&2048&&Jr(9,e,e.return);break;case 3:Ad(e);break;case 12:Ad(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Of(e)):Ad(e);break;default:Ad(e)}}function Of(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Jt=o,I2(o,e)}L2(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jr(8,t,t.return),Of(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Of(t));break;default:Of(t)}e=e.sibling}}function I2(e,t){for(;Jt!==null;){var a=Jt;switch(a.tag){case 0:case 11:case 15:Jr(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:wu(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jt=o;else e:for(a=e;Jt!==null;){o=Jt;var n=o.sibling,r=o.return;if(x2(o),o===a){Jt=null;break e}if(n!==null){n.return=r,Jt=n;break e}Jt=r}}}var aE={getCacheForType:function(e){var t=fa(zt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return fa(zt).controller.signal}},oE=typeof WeakMap=="function"?WeakMap:Map,qe=0,Qe=null,Ee=null,De=0,Ye=0,co=null,Hr=!1,Es=!1,fb=!1,lr=0,kt=0,ei=0,Oi=0,pb=0,mo=0,vs=0,Kd=null,Ya=null,fx=!1,Mp=0,M2=0,rp=1/0,ip=null,Xr=null,jt=0,Wr=null,Cs=null,ar=0,px=0,mx=null,N2=null,$d=0,gx=null;function bo(){return(qe&2)!==0&&De!==0?De&-De:me.T!==null?gb():Bv()}function E2(){if(mo===0)if((De&536870912)===0||Pe){var e=cf;cf<<=1,(cf&3932160)===0&&(cf=262144),mo=e}else mo=536870912;return e=yo.current,e!==null&&(e.flags|=32),mo}function Za(e,t,a){(e===Qe&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Ss(e,0),Fr(e,De,mo,!1)),hu(e,a),((qe&2)===0||e!==Qe)&&(e===Qe&&((qe&2)===0&&(Oi|=a),kt===4&&Fr(e,De,mo,!1)),kn(e))}function T2(e,t,a){if((qe&6)!==0)throw Error(X(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||gu(e,t),n=o?iE(e,t):Lh(e,t,!0),r=o;do{if(n===0){Es&&!o&&Fr(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!nE(a)){n=Lh(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var l=e;n=Kd;var s=l.current.memoizedState.isDehydrated;if(s&&(Ss(l,i).flags|=256),i=Lh(l,i,!1),i!==2){if(fb&&!s){l.errorRecoveryDisabledLanes|=r,Oi|=r,n=4;break e}r=Ya,Ya=n,r!==null&&(Ya===null?Ya=r:Ya.push.apply(Ya,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){Ss(e,0),Fr(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(X(345));case 4:if((t&4194048)!==t)break;case 6:Fr(o,t,mo,!Hr);break e;case 2:Ya=null;break;case 3:case 5:break;default:throw Error(X(329))}if((t&62914560)===t&&(n=Mp+300-go(),10<n)){if(Fr(o,t,mo,!Hr),xp(o,0,!0)!==0)break e;ar=t,o.timeoutHandle=$2(Zy.bind(null,o,a,Ya,ip,fx,t,mo,Oi,vs,Hr,r,"Throttled",-0,0),n);break e}Zy(o,a,Ya,ip,fx,t,mo,Oi,vs,Hr,r,null,-0,0)}}break}while(!0);kn(e)}function Zy(e,t,a,o,n,r,i,l,s,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qn},k2(t,r,f);var g=(r&62914560)===r?Mp-go():(r&4194048)===r?M2-go():0;if(g=FE(f,g),g!==null){ar=r,e.cancelPendingCommit=g($y.bind(null,e,t,r,a,o,n,i,l,s,d,f,null,c,p)),Fr(e,r,i,!u);return}}$y(e,t,r,a,o,n,i,l,s)}function nE(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!wo(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t,a,o){t&=~pb,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-xo(n),i=1<<r;o[r]=-1,n&=~i}a!==0&&Pv(e,a,t)}function Np(){return(qe&6)===0?(Cu(0,!1),!1):!0}function mb(){if(Ee!==null){if(Ye===0)var e=Ee.return;else e=Ee,Jn=Wi=null,Jx(e),fs=null,ru=0,e=Ee;for(;e!==null;)u2(e.alternate,e),e=e.return;Ee=null}}function Ss(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,CE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ar=0,mb(),Qe=e,Ee=a=er(e.current,null),De=t,Ye=0,co=null,Hr=!1,Es=gu(e,t),fb=!1,vs=mo=pb=Oi=ei=kt=0,Ya=Kd=null,fx=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-xo(o),r=1<<n;t|=e[n],o&=~r}return lr=t,vp(),a}function A2(e,t){we=null,me.H=lu,t===Ns||t===Sp?(t=Iy(),Ye=3):t===Xx?(t=Iy(),Ye=4):Ye=t===sb?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,co=t,Ee===null&&(kt=1,ap(e,Bo(t,e.current)))}function D2(){var e=yo.current;return e===null?!0:(De&4194048)===De?Fo===null:(De&62914560)===De||(De&536870912)!==0?e===Fo:!1}function R2(){var e=me.H;return me.H=lu,e===null?lu:e}function P2(){var e=me.A;return me.A=aE,e}function lp(){kt=4,Hr||(De&4194048)!==De&&yo.current!==null||(Es=!0),(ei&134217727)===0&&(Oi&134217727)===0||Qe===null||Fr(Qe,De,mo,!1)}function Lh(e,t,a){var o=qe;qe|=2;var n=R2(),r=P2();(Qe!==e||De!==t)&&(ip=null,Ss(e,t)),t=!1;var i=kt;e:do try{if(Ye!==0&&Ee!==null){var l=Ee,s=co;switch(Ye){case 8:mb(),i=6;break e;case 3:case 2:case 9:case 6:yo.current===null&&(t=!0);var u=Ye;if(Ye=0,co=null,ls(e,l,s,u),a&&Es){i=0;break e}break;default:u=Ye,Ye=0,co=null,ls(e,l,s,u)}}rE(),i=kt;break}catch(d){A2(e,d)}while(!0);return t&&e.shellSuspendCounter++,Jn=Wi=null,qe=o,me.H=n,me.A=r,Ee===null&&(Qe=null,De=0,vp()),i}function rE(){for(;Ee!==null;)z2(Ee)}function iE(e,t){var a=qe;qe|=2;var o=R2(),n=P2();Qe!==e||De!==t?(ip=null,rp=go()+500,Ss(e,t)):Es=gu(e,t);e:do try{if(Ye!==0&&Ee!==null){t=Ee;var r=co;t:switch(Ye){case 1:Ye=0,co=null,ls(e,t,r,1);break;case 2:case 9:if(_y(r)){Ye=0,co=null,Ky(t);break}t=function(){Ye!==2&&Ye!==9||Qe!==e||(Ye=7),kn(e)},r.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:_y(r)?(Ye=0,co=null,Ky(t)):(Ye=0,co=null,ls(e,t,r,7));break;case 5:var i=null;switch(Ee.tag){case 26:i=Ee.memoizedState;case 5:case 27:var l=Ee;if(i?aC(i):l.stateNode.complete){Ye=0,co=null;var s=l.sibling;if(s!==null)Ee=s;else{var u=l.return;u!==null?(Ee=u,Ep(u)):Ee=null}break t}}Ye=0,co=null,ls(e,t,r,5);break;case 6:Ye=0,co=null,ls(e,t,r,6);break;case 8:mb(),kt=6;break e;default:throw Error(X(462))}}lE();break}catch(d){A2(e,d)}while(!0);return Jn=Wi=null,me.H=o,me.A=n,qe=a,Ee!==null?0:(Qe=null,De=0,vp(),kt)}function lE(){for(;Ee!==null&&!E3();)z2(Ee)}function z2(e){var t=d2(e.alternate,e,lr);e.memoizedProps=e.pendingProps,t===null?Ep(e):Ee=t}function Ky(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Vy(a,t,t.pendingProps,t.type,void 0,De);break;case 11:t=Vy(a,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:Jx(t);default:u2(a,t),t=Ee=u1(t,lr),t=d2(a,t,lr)}e.memoizedProps=e.pendingProps,t===null?Ep(e):Ee=t}function ls(e,t,a,o){Jn=Wi=null,Jx(t),fs=null,ru=0;var n=t.return;try{if(Z4(e,n,t,a,De)){kt=1,ap(e,Bo(a,e.current)),Ee=null;return}}catch(r){if(n!==null)throw Ee=n,r;kt=1,ap(e,Bo(a,e.current)),Ee=null;return}t.flags&32768?(Pe||o===1?e=!0:Es||(De&536870912)!==0?e=!1:(Hr=e=!0,(o===2||o===9||o===3||o===6)&&(o=yo.current,o!==null&&o.tag===13&&(o.flags|=16384))),O2(t,e)):Ep(t)}function Ep(e){var t=e;do{if((t.flags&32768)!==0){O2(t,Hr);return}e=t.return;var a=Q4(t.alternate,t,lr);if(a!==null){Ee=a;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);kt===0&&(kt=5)}function O2(e,t){do{var a=J4(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);kt=6,Ee=null}function $y(e,t,a,o,n,r,i,l,s){e.cancelPendingCommit=null;do Tp();while(jt!==0);if((qe&6)!==0)throw Error(X(327));if(t!==null){if(t===e.current)throw Error(X(177));if(r=t.lanes|t.childLanes,r|=Hx,F3(e,a,r,i,l,s),e===Qe&&(Ee=Qe=null,De=0),Cs=t,Wr=e,ar=a,px=r,mx=n,N2=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cE(jf,function(){return q2(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=me.T,me.T=null,n=Ve.p,Ve.p=2,i=qe,qe|=4;try{eE(e,t,a)}finally{qe=i,Ve.p=n,me.T=o}}jt=1,B2(),H2(),F2()}}function B2(){if(jt===1){jt=0;var e=Wr,t=Cs,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=me.T,me.T=null;var o=Ve.p;Ve.p=2;var n=qe;qe|=4;try{v2(t,e);var r=wx,i=a1(e.containerInfo),l=r.focusedElem,s=r.selectionRange;if(i!==l&&l&&l.ownerDocument&&t1(l.ownerDocument.documentElement,l)){if(s!==null&&Bx(l)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(d,l.value.length);else{var f=l.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=l.textContent.length,w=Math.min(s.start,g),y=s.end===void 0?w:Math.min(s.end,g);!p.extend&&w>y&&(i=y,y=w,w=i);var h=wy(l,w),x=wy(l,y);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),w>y?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=l;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var b=f[l];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gp=!!bx,wx=bx=null}finally{qe=n,Ve.p=o,me.T=a}}e.current=t,jt=2}}function H2(){if(jt===2){jt=0;var e=Wr,t=Cs,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=me.T,me.T=null;var o=Ve.p;Ve.p=2;var n=qe;qe|=4;try{h2(e,t.alternate,t)}finally{qe=n,Ve.p=o,me.T=a}}jt=3}}function F2(){if(jt===4||jt===3){jt=0,T3();var e=Wr,t=Cs,a=ar,o=N2;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?jt=5:(jt=0,Cs=Wr=null,U2(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Xr=null),Tx(a),t=t.stateNode,ho&&typeof ho.onCommitFiberRoot=="function")try{ho.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=me.T,n=Ve.p,Ve.p=2,me.T=null;try{for(var r=e.onRecoverableError,i=0;i<o.length;i++){var l=o[i];r(l.value,{componentStack:l.stack})}}finally{me.T=t,Ve.p=n}}(ar&3)!==0&&Tp(),kn(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===gx?$d++:($d=0,gx=e):$d=0,Cu(0,!1)}}function U2(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wu(t)))}function Tp(){return B2(),H2(),F2(),q2()}function q2(){if(jt!==5)return!1;var e=Wr,t=px;px=0;var a=Tx(ar),o=me.T,n=Ve.p;try{Ve.p=32>a?32:a,me.T=null,a=mx,mx=null;var r=Wr,i=ar;if(jt=0,Cs=Wr=null,ar=0,(qe&6)!==0)throw Error(X(331));var l=qe;if(qe|=4,_2(r.current),S2(r,r.current,i,a),qe=l,Cu(0,!1),ho&&typeof ho.onPostCommitFiberRoot=="function")try{ho.onPostCommitFiberRoot(mu,r)}catch{}return!0}finally{Ve.p=n,me.T=o,U2(e,t)}}function Qy(e,t,a){t=Bo(a,t),t=sx(e.stateNode,t,2),e=jr(e,t,2),e!==null&&(hu(e,2),kn(e))}function Ze(e,t,a){if(e.tag===3)Qy(e,e,a);else for(;t!==null;){if(t.tag===3){Qy(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xr===null||!Xr.has(o))){e=Bo(a,e),a=o2(2),o=jr(t,a,2),o!==null&&(n2(a,o,t,e),hu(o,2),kn(o));break}}t=t.return}}function _h(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new oE;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(fb=!0,n.add(a),e=sE.bind(null,e,t,a),t.then(e,e))}function sE(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(De&a)===a&&(kt===4||kt===3&&(De&62914560)===De&&300>go()-Mp?(qe&2)===0&&Ss(e,0):pb|=a,vs===De&&(vs=0)),kn(e)}function V2(e,t){t===0&&(t=Rv()),e=Xi(e,t),e!==null&&(hu(e,t),kn(e))}function dE(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),V2(e,a)}function uE(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(X(314))}o!==null&&o.delete(t),V2(e,a)}function cE(e,t){return Nx(e,t)}var sp=null,Zl=null,hx=!1,dp=!1,Ih=!1,Ur=0;function kn(e){e!==Zl&&e.next===null&&(Zl===null?sp=Zl=e:Zl=Zl.next=e),dp=!0,hx||(hx=!0,pE())}function Cu(e,t){if(!Ih&&dp){Ih=!0;do for(var a=!1,o=sp;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var i=o.suspendedLanes,l=o.pingedLanes;r=(1<<31-xo(42|e)+1)-1,r&=n&~(i&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Jy(o,r))}else r=De,r=xp(o,o===Qe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||gu(o,r)||(a=!0,Jy(o,r));o=o.next}while(a);Ih=!1}}function fE(){G2()}function G2(){dp=hx=!1;var e=0;Ur!==0&&vE()&&(e=Ur);for(var t=go(),a=null,o=sp;o!==null;){var n=o.next,r=j2(o,t);r===0?(o.next=null,a===null?sp=n:a.next=n,n===null&&(Zl=a)):(a=o,(e!==0||(r&3)!==0)&&(dp=!0)),o=n}jt!==0&&jt!==5||Cu(e,!1),Ur!==0&&(Ur=0)}function j2(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-xo(r),l=1<<i,s=n[i];s===-1?((l&a)===0||(l&o)!==0)&&(n[i]=H3(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}if(t=Qe,a=De,a=xp(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ah(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||gu(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&ah(o),Tx(a)){case 2:case 8:a=Av;break;case 32:a=jf;break;case 268435456:a=Dv;break;default:a=jf}return o=X2.bind(null,e),a=Nx(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&ah(o),e.callbackPriority=2,e.callbackNode=null,2}function X2(e,t){if(jt!==0&&jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Tp()&&e.callbackNode!==a)return null;var o=De;return o=xp(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(T2(e,o,t),j2(e,go()),e.callbackNode!=null&&e.callbackNode===a?X2.bind(null,e):null)}function Jy(e,t){if(Tp())return null;T2(e,t,!0)}function pE(){SE(function(){(qe&6)!==0?Nx(Tv,fE):G2()})}function gb(){if(Ur===0){var e=bs;e===0&&(e=uf,uf<<=1,(uf&261888)===0&&(uf=256)),Ur=e}return Ur}function ev(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mf(""+e)}function tv(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function mE(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=ev((n[Ka]||null).action),i=o.submitter;i&&(t=(t=i[Ka]||null)?ev(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var l=new bp("action","action",null,o,n);e.push({event:l,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ur!==0){var s=i?tv(n,i):new FormData(n);ix(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(l.preventDefault(),s=i?tv(n,i):new FormData(n),ix(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Cf=0;Cf<Yh.length;Cf++)Sf=Yh[Cf],av=Sf.toLowerCase(),ov=Sf[0].toUpperCase()+Sf.slice(1),$o(av,"on"+ov);var Sf,av,ov,Cf;$o(n1,"onAnimationEnd");$o(r1,"onAnimationIteration");$o(i1,"onAnimationStart");$o("dblclick","onDoubleClick");$o("focusin","onFocus");$o("focusout","onBlur");$o(A4,"onTransitionRun");$o(D4,"onTransitionStart");$o(R4,"onTransitionCancel");$o(l1,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function W2(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){Wf(d)}n.currentTarget=null,r=s}else for(i=0;i<o.length;i++){if(l=o[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=u;try{r(n)}catch(d){Wf(d)}n.currentTarget=null,r=s}}}}function Ne(e,t){var a=t[Fh];a===void 0&&(a=t[Fh]=new Set);var o=e+"__bubble";a.has(o)||(Y2(t,e,2,!1),a.add(o))}function Mh(e,t,a){var o=0;t&&(o|=4),Y2(a,e,o,t)}var kf="_reactListening"+Math.random().toString(36).slice(2);function hb(e){if(!e[kf]){e[kf]=!0,Hv.forEach(function(a){a!=="selectionchange"&&(gE.has(a)||Mh(a,!1,e),Mh(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kf]||(t[kf]=!0,Mh("selectionchange",!1,t))}}function Y2(e,t,a,o){switch(lC(t)){case 2:var n=VE;break;case 8:n=GE;break;default:n=yb}a=n.bind(null,t,a,e),n=void 0,!jh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Nh(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===n)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;l!==null;){if(i=Ql(l),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){o=r=i;continue e}l=l.parentNode}}o=o.return}Wv(function(){var u=r,d=Rx(a),f=[];e:{var c=s1.get(e);if(c!==void 0){var p=bp,g=e;switch(e){case"keypress":if(Ef(a)===0)break e;case"keydown":case"keyup":p=u4;break;case"focusin":g="focus",p=lh;break;case"focusout":g="blur",p=lh;break;case"beforeblur":case"afterblur":p=lh;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Q3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=p4;break;case n1:case r1:case i1:p=t4;break;case l1:p=g4;break;case"scroll":case"scrollend":p=K3;break;case"wheel":p=x4;break;case"copy":case"cut":case"paste":p=o4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fy;break;case"toggle":case"beforetoggle":p=w4}var w=(t&4)!==0,y=!w&&(e==="scroll"||e==="scrollend"),h=w?c!==null?c+"Capture":null:c;w=[];for(var x=u,m;x!==null;){var b=x;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||h===null||(b=eu(x,h),b!=null&&w.push(du(x,b,m))),y)break;x=x.return}0<w.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:w}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Gh&&(g=a.relatedTarget||a.fromElement)&&(Ql(g)||g[_s]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?Ql(g):null,g!==null&&(y=pu(g),w=g.tag,g!==y||w!==5&&w!==27&&w!==6)&&(g=null)):(p=null,g=u),p!==g)){if(w=uy,b="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=fy,b="onPointerLeave",h="onPointerEnter",x="pointer"),y=p==null?c:Od(p),m=g==null?c:Od(g),c=new w(b,x+"leave",p,a,d),c.target=y,c.relatedTarget=m,b=null,Ql(d)===u&&(w=new w(h,x+"enter",g,a,d),w.target=m,w.relatedTarget=y,b=w),y=b,p&&g)t:{for(w=hE,h=p,x=g,m=0,b=h;b;b=w(b))m++;b=0;for(var v=x;v;v=w(v))b++;for(;0<m-b;)h=w(h),m--;for(;0<b-m;)x=w(x),b--;for(;m--;){if(h===x||x!==null&&h===x.alternate){w=h;break t}h=w(h),x=w(x)}w=null}else w=null;p!==null&&nv(f,c,p,w,!1),g!==null&&y!==null&&nv(f,y,g,w,!0)}}e:{if(c=u?Od(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=hy;else if(gy(c))if(Jv)C=N4;else{C=I4;var k=_4}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Dx(u.elementType)&&(C=hy):C=M4;if(C&&(C=C(e,u))){Qv(f,C,a,d);break e}k&&k(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Vh(c,"number",c.value)}switch(k=u?Od(u):window,e){case"focusin":(gy(k)||k.contentEditable==="true")&&(ts=k,Xh=u,qd=null);break;case"focusout":qd=Xh=ts=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,yy(f,a,d);break;case"selectionchange":if(T4)break;case"keydown":case"keyup":yy(f,a,d)}var S;if(Ox)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else es?Kv(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Zv&&a.locale!=="ko"&&(es||_!=="onCompositionStart"?_==="onCompositionEnd"&&es&&(S=Yv()):(Br=d,Px="value"in Br?Br.value:Br.textContent,es=!0)),k=up(u,_),0<k.length&&(_=new cy(_,e,null,a,d),f.push({event:_,listeners:k}),S?_.data=S:(S=$v(a),S!==null&&(_.data=S)))),(S=v4?C4(e,a):S4(e,a))&&(_=up(u,"onBeforeInput"),0<_.length&&(k=new cy("onBeforeInput","beforeinput",null,a,d),f.push({event:k,listeners:_}),k.data=S)),mE(f,e,u,a,d)}W2(f,t)})}function du(e,t,a){return{instance:e,listener:t,currentTarget:a}}function up(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=eu(e,a),n!=null&&o.unshift(du(e,n,r)),n=eu(e,t),n!=null&&o.push(du(e,n,r))),e.tag===3)return o;e=e.return}return[]}function hE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nv(e,t,a,o,n){for(var r=t._reactName,i=[];a!==null&&a!==o;){var l=a,s=l.alternate,u=l.stateNode;if(l=l.tag,s!==null&&s===o)break;l!==5&&l!==26&&l!==27||u===null||(s=u,n?(u=eu(a,r),u!=null&&i.unshift(du(a,u,s))):n||(u=eu(a,r),u!=null&&i.push(du(a,u,s)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var xE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function rv(e){return(typeof e=="string"?e:""+e).replace(xE,`
`).replace(bE,"")}function Z2(e,t){return t=rv(t),rv(e)===t}function Ke(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||xs(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&xs(e,""+o);break;case"className":pf(e,"class",o);break;case"tabIndex":pf(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":pf(e,a,o);break;case"style":Xv(e,o,r);break;case"data":if(t!=="object"){pf(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Mf(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ke(e,t,"name",n.name,n,null),Ke(e,t,"formEncType",n.formEncType,n,null),Ke(e,t,"formMethod",n.formMethod,n,null),Ke(e,t,"formTarget",n.formTarget,n,null)):(Ke(e,t,"encType",n.encType,n,null),Ke(e,t,"method",n.method,n,null),Ke(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Mf(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qn);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(X(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(X(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Mf(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),If(e,"popover",o);break;case"xlinkActuate":Gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":If(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Y3.get(a)||a,If(e,a,o))}}function xx(e,t,a,o,n,r){switch(a){case"style":Xv(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(X(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(X(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xs(e,o):(typeof o=="number"||typeof o=="bigint")&&xs(e,""+o);break;case"onScroll":o!=null&&Ne("scroll",e);break;case"onScrollEnd":o!=null&&Ne("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Ka]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):If(e,a,o)}}}function pa(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:Ke(e,t,r,i,a,null)}}n&&Ke(e,t,"srcSet",a.srcSet,a,null),o&&Ke(e,t,"src",a.src,a,null);return;case"input":Ne("invalid",e);var l=r=i=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":i=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(X(137,t));break;default:Ke(e,t,o,d,a,null)}}Vv(e,r,l,s,u,i,n,!1);return;case"select":Ne("invalid",e),o=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(l=a[n],l!=null))switch(n){case"value":r=l;break;case"defaultValue":i=l;break;case"multiple":o=l;default:Ke(e,t,n,l,a,null)}t=r,a=i,e.multiple=!!o,t!=null?ds(e,!!o,t,!1):a!=null&&ds(e,!!o,a,!0);return;case"textarea":Ne("invalid",e),r=n=o=null;for(i in a)if(a.hasOwnProperty(i)&&(l=a[i],l!=null))switch(i){case"value":o=l;break;case"defaultValue":n=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(X(91));break;default:Ke(e,t,i,l,a,null)}jv(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ke(e,t,s,o,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(o=0;o<su.length;o++)Ne(su[o],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:Ke(e,t,u,o,a,null)}return;default:if(Dx(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&xx(e,t,d,o,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(o=a[l],o!=null&&Ke(e,t,l,o,a,null))}function wE(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,l=null,s=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Ke(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(X(137,t));break;default:p!==f&&Ke(e,t,c,p,o,f)}}qh(e,i,l,s,u,d,r,n);return;case"select":p=i=l=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Ke(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":l=r;break;case"multiple":i=r;default:r!==s&&Ke(e,t,n,r,o,s)}t=l,a=i,o=p,c!=null?ds(e,!!a,c,!1):!!o!=!!a&&(t!=null?ds(e,!!a,t,!0):ds(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(l in a)if(n=a[l],a.hasOwnProperty(l)&&n!=null&&!o.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Ke(e,t,l,null,o,n)}for(i in o)if(n=o[i],r=a[i],o.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(X(91));break;default:n!==r&&Ke(e,t,i,n,o,r)}Gv(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ke(e,t,g,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Ke(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w)&&Ke(e,t,w,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(X(137,t));break;default:Ke(e,t,u,c,o,p)}return;default:if(Dx(t)){for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!==void 0&&!o.hasOwnProperty(y)&&xx(e,t,y,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||xx(e,t,d,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&Ke(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Ke(e,t,f,c,o,p)}function iv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,i=n.initiatorType,l=n.duration;if(r&&l&&iv(i)){for(i=0,l=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>l)break;var d=s.transferSize,f=s.initiatorType;d&&iv(f)&&(s=s.responseEnd,i+=d*(s<l?1:(l-u)/(s-u)))}if(--o,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bx=null,wx=null;function cp(e){return e.nodeType===9?e:e.ownerDocument}function lv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K2(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yx(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eh=null;function vE(){var e=window.event;return e&&e.type==="popstate"?e===Eh?!1:(Eh=e,!0):(Eh=null,!1)}var $2=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(e){return sv.resolve(null).then(e).catch(kE)}:$2;function kE(e){setTimeout(function(){throw e})}function ai(e){return e==="head"}function dv(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Ls(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Qd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Qd(a);for(var r=a.firstChild;r;){var i=r.nextSibling,l=r.nodeName;r[xu]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&Qd(e.ownerDocument.body);a=n}while(a);Ls(t)}function uv(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function vx(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vx(a),Ax(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function LE(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[xu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Uo(e.nextSibling),e===null)break}return null}function _E(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Uo(e.nextSibling),e===null))return null;return e}function Q2(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Uo(e.nextSibling),e===null))return null;return e}function Cx(e){return e.data==="$?"||e.data==="$~"}function Sx(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function IE(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Uo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var kx=null;function cv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Uo(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function fv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function J2(e,t,a){switch(t=cp(a),e){case"html":if(e=t.documentElement,!e)throw Error(X(452));return e;case"head":if(e=t.head,!e)throw Error(X(453));return e;case"body":if(e=t.body,!e)throw Error(X(454));return e;default:throw Error(X(451))}}function Qd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ax(e)}var qo=new Map,pv=new Set;function fp(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sr=Ve.d;Ve.d={f:ME,r:NE,D:EE,C:TE,L:AE,m:DE,X:PE,S:RE,M:zE};function ME(){var e=sr.f(),t=Np();return e||t}function NE(e){var t=Is(e);t!==null&&t.tag===5&&t.type==="form"?X1(t):sr.r(e)}var Ts=typeof document>"u"?null:document;function eC(e,t,a){var o=Ts;if(o&&typeof t=="string"&&t){var n=Oo(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),pv.has(n)||(pv.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),pa(t,"link",e),ea(t),o.head.appendChild(t)))}}function EE(e){sr.D(e),eC("dns-prefetch",e,null)}function TE(e,t){sr.C(e,t),eC("preconnect",e,t)}function AE(e,t,a){sr.L(e,t,a);var o=Ts;if(o&&e&&t){var n='link[rel="preload"][as="'+Oo(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Oo(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Oo(a.imageSizes)+'"]')):n+='[href="'+Oo(e)+'"]';var r=n;switch(t){case"style":r=ks(e);break;case"script":r=As(e)}qo.has(r)||(e=ut({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qo.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Su(r))||t==="script"&&o.querySelector(ku(r))||(t=o.createElement("link"),pa(t,"link",e),ea(t),o.head.appendChild(t)))}}function DE(e,t){sr.m(e,t);var a=Ts;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Oo(o)+'"][href="'+Oo(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=As(e)}if(!qo.has(r)&&(e=ut({rel:"modulepreload",href:e},t),qo.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ku(r)))return}o=a.createElement("link"),pa(o,"link",e),ea(o),a.head.appendChild(o)}}}function RE(e,t,a){sr.S(e,t,a);var o=Ts;if(o&&e){var n=ss(o).hoistableStyles,r=ks(e);t=t||"default";var i=n.get(r);if(!i){var l={loading:0,preload:null};if(i=o.querySelector(Su(r)))l.loading=5;else{e=ut({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qo.get(r))&&xb(e,a);var s=i=o.createElement("link");ea(s),pa(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Bf(i,t,o)}i={type:"stylesheet",instance:i,count:1,state:l},n.set(r,i)}}}function PE(e,t){sr.X(e,t);var a=Ts;if(a&&e){var o=ss(a).hoistableScripts,n=As(e),r=o.get(n);r||(r=a.querySelector(ku(n)),r||(e=ut({src:e,async:!0},t),(t=qo.get(n))&&bb(e,t),r=a.createElement("script"),ea(r),pa(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function zE(e,t){sr.M(e,t);var a=Ts;if(a&&e){var o=ss(a).hoistableScripts,n=As(e),r=o.get(n);r||(r=a.querySelector(ku(n)),r||(e=ut({src:e,async:!0,type:"module"},t),(t=qo.get(n))&&bb(e,t),r=a.createElement("script"),ea(r),pa(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function mv(e,t,a,o){var n=(n=qr.current)?fp(n):null;if(!n)throw Error(X(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ks(a.href),a=ss(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ks(a.href);var r=ss(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Su(e)))&&!r._p&&(i.instance=r,i.state.loading=5),qo.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qo.set(e,a),r||OE(n,e,a,i.state))),t&&o===null)throw Error(X(528,""));return i}if(t&&o!==null)throw Error(X(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=As(a),a=ss(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(X(444,e))}}function ks(e){return'href="'+Oo(e)+'"'}function Su(e){return'link[rel="stylesheet"]['+e+"]"}function tC(e){return ut({},e,{"data-precedence":e.precedence,precedence:null})}function OE(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),pa(t,"link",a),ea(t),e.head.appendChild(t))}function As(e){return'[src="'+Oo(e)+'"]'}function ku(e){return"script[async]"+e}function gv(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Oo(a.href)+'"]');if(o)return t.instance=o,ea(o),o;var n=ut({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ea(o),pa(o,"style",n),Bf(o,a.precedence,e),t.instance=o;case"stylesheet":n=ks(a.href);var r=e.querySelector(Su(n));if(r)return t.state.loading|=4,t.instance=r,ea(r),r;o=tC(a),(n=qo.get(n))&&xb(o,n),r=(e.ownerDocument||e).createElement("link"),ea(r);var i=r;return i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),pa(r,"link",o),t.state.loading|=4,Bf(r,a.precedence,e),t.instance=r;case"script":return r=As(a.src),(n=e.querySelector(ku(r)))?(t.instance=n,ea(n),n):(o=a,(n=qo.get(r))&&(o=ut({},a),bb(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),ea(n),pa(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(X(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Bf(o,a.precedence,e));return t.instance}function Bf(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,i=0;i<o.length;i++){var l=o[i];if(l.dataset.precedence===t)r=l;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function xb(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bb(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hf=null;function hv(e,t,a){if(Hf===null){var o=new Map,n=Hf=new Map;n.set(a,o)}else n=Hf,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[xu]||r[ua]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var l=o.get(i);l?l.push(r):o.set(i,[r])}}return o}function xv(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function BE(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function aC(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function HE(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ks(o.href),r=t.querySelector(Su(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pp.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ea(r);return}r=t.ownerDocument||t,o=tC(o),(n=qo.get(n))&&xb(o,n),r=r.createElement("link"),ea(r);var i=r;i._p=new Promise(function(l,s){i.onload=l,i.onerror=s}),pa(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pp.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Th=0;function FE(e,t){return e.stylesheets&&e.count===0&&Ff(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ff(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Th===0&&(Th=62500*yE());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ff(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Th?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function pp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ff(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mp=null;function Ff(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mp=new Map,t.forEach(UE,e),mp=null,pp.call(e))}function UE(e,t){if(!(t.state.loading&4)){var a=mp.get(e);if(a)var o=a.get(null);else{a=new Map,mp.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),o=i)}o&&a.set(null,o)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||o,r===o&&a.set(null,n),a.set(i,n),this.count++,o=pp.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var uu={$$typeof:$n,Provider:null,Consumer:null,_currentValue:Di,_currentValue2:Di,_threadCount:0};function qE(e,t,a,o,n,r,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oh(0),this.hiddenUpdates=oh(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function oC(e,t,a,o,n,r,i,l,s,u,d,f){return e=new qE(e,t,a,i,s,u,d,f,l),t=1,r===!0&&(t|=24),r=po(3,null,null,t),e.current=r,r.stateNode=e,t=Gx(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Wx(r),e}function nC(e){return e?(e=ns,e):ns}function rC(e,t,a,o,n,r){n=nC(n),o.context===null?o.context=n:o.pendingContext=n,o=Gr(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=jr(e,o,t),a!==null&&(Za(a,e,t),Gd(a,e,t))}function bv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function wb(e,t){bv(e,t),(e=e.alternate)&&bv(e,t)}function iC(e){if(e.tag===13||e.tag===31){var t=Xi(e,67108864);t!==null&&Za(t,e,67108864),wb(e,67108864)}}function wv(e){if(e.tag===13||e.tag===31){var t=bo();t=Ex(t);var a=Xi(e,t);a!==null&&Za(a,e,t),wb(e,t)}}var gp=!0;function VE(e,t,a,o){var n=me.T;me.T=null;var r=Ve.p;try{Ve.p=2,yb(e,t,a,o)}finally{Ve.p=r,me.T=n}}function GE(e,t,a,o){var n=me.T;me.T=null;var r=Ve.p;try{Ve.p=8,yb(e,t,a,o)}finally{Ve.p=r,me.T=n}}function yb(e,t,a,o){if(gp){var n=Lx(o);if(n===null)Nh(e,t,o,hp,a),yv(e,o);else if(XE(n,e,t,a,o))o.stopPropagation();else if(yv(e,o),t&4&&-1<jE.indexOf(e)){for(;n!==null;){var r=Is(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Ei(r.pendingLanes);if(i!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-xo(i);l.entanglements[1]|=s,i&=~s}kn(r),(qe&6)===0&&(rp=go()+500,Cu(0,!1))}}break;case 31:case 13:l=Xi(r,2),l!==null&&Za(l,r,2),Np(),wb(r,2)}if(r=Lx(o),r===null&&Nh(e,t,o,hp,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Nh(e,t,o,null,a)}}function Lx(e){return e=Rx(e),vb(e)}var hp=null;function vb(e){if(hp=null,e=Ql(e),e!==null){var t=pu(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=_v(t),e!==null)return e;e=null}else if(a===31){if(e=Iv(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hp=e,null}function lC(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A3()){case Tv:return 2;case Av:return 8;case jf:case D3:return 32;case Dv:return 268435456;default:return 32}default:return 32}}var _x=!1,Yr=null,Zr=null,Kr=null,cu=new Map,fu=new Map,zr=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yv(e,t){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":cu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(t.pointerId)}}function Dd(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Is(t),t!==null&&iC(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function XE(e,t,a,o,n){switch(t){case"focusin":return Yr=Dd(Yr,e,t,a,o,n),!0;case"dragenter":return Zr=Dd(Zr,e,t,a,o,n),!0;case"mouseover":return Kr=Dd(Kr,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return cu.set(r,Dd(cu.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,fu.set(r,Dd(fu.get(r)||null,e,t,a,o,n)),!0}return!1}function sC(e){var t=Ql(e.target);if(t!==null){var a=pu(t);if(a!==null){if(t=a.tag,t===13){if(t=_v(a),t!==null){e.blockedOn=t,oy(e.priority,function(){wv(a)});return}}else if(t===31){if(t=Iv(a),t!==null){e.blockedOn=t,oy(e.priority,function(){wv(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lx(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gh=o,a.target.dispatchEvent(o),Gh=null}else return t=Is(a),t!==null&&iC(t),e.blockedOn=a,!1;t.shift()}return!0}function vv(e,t,a){Uf(e)&&a.delete(t)}function WE(){_x=!1,Yr!==null&&Uf(Yr)&&(Yr=null),Zr!==null&&Uf(Zr)&&(Zr=null),Kr!==null&&Uf(Kr)&&(Kr=null),cu.forEach(vv),fu.forEach(vv)}function Lf(e,t){e.blockedOn===t&&(e.blockedOn=null,_x||(_x=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,WE)))}var _f=null;function Cv(e){_f!==e&&(_f=e,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,function(){_f===e&&(_f=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(vb(o||a)===null)continue;break}var r=Is(a);r!==null&&(e.splice(t,3),t-=3,ix(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Ls(e){function t(s){return Lf(s,e)}Yr!==null&&Lf(Yr,e),Zr!==null&&Lf(Zr,e),Kr!==null&&Lf(Kr,e),cu.forEach(t),fu.forEach(t);for(var a=0;a<zr.length;a++){var o=zr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<zr.length&&(a=zr[0],a.blockedOn===null);)sC(a),a.blockedOn===null&&zr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],i=n[Ka]||null;if(typeof r=="function")i||Cv(a);else if(i){var l=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[Ka]||null)l=i.formAction;else if(vb(n)!==null)continue}else l=i.action;typeof l=="function"?a[o+1]=l:(a.splice(o,3),o-=3),Cv(a)}}}function dC(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Cb(e){this._internalRoot=e}Ap.prototype.render=Cb.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));var a=t.current,o=bo();rC(a,o,e,t,null,null)};Ap.prototype.unmount=Cb.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rC(e.current,2,null,e,null,null),Np(),t[_s]=null}};function Ap(e){this._internalRoot=e}Ap.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bv();e={blockedOn:null,target:e,priority:t};for(var a=0;a<zr.length&&t!==0&&t<zr[a].priority;a++);zr.splice(a,0,e),a===0&&sC(e)}};var Sv=kv.version;if(Sv!=="19.2.8")throw Error(X(527,Sv,"19.2.8"));Ve.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=L3(t),e=e!==null?Mv(e):null,e=e===null?null:e.stateNode,e};var YE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:me,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Rd=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Rd.isDisabled&&Rd.supportsFiber))try{mu=Rd.inject(YE),ho=Rd}catch{}var Rd;Dp.createRoot=function(e,t){if(!Lv(e))throw Error(X(299));var a=!1,o="",n=e2,r=t2,i=a2;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oC(e,1,!1,null,null,a,o,null,n,r,i,dC),e[_s]=t.current,hb(e),new Cb(t)};Dp.hydrateRoot=function(e,t,a){if(!Lv(e))throw Error(X(299));var o=!1,n="",r=e2,i=t2,l=a2,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=oC(e,1,!0,t,a??null,o,n,s,r,i,l,dC),t.context=nC(null),a=t.current,o=bo(),o=Ex(o),n=Gr(o),n.callback=null,jr(a,n,o),a=o,t.current.lanes=a,hu(t,a),kn(t),e[_s]=t.current,hb(e),new Ap(t)};Dp.version="19.2.8"});var Sb=Ga((v7,fC)=>{"use strict";function cC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cC)}catch(e){console.error(e)}}cC(),fC.exports=uC()});var mC=Ga(Rp=>{"use strict";var ZE=Symbol.for("react.transitional.element"),KE=Symbol.for("react.fragment");function pC(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:ZE,type:e,key:o,ref:t!==void 0?t:null,props:a}}Rp.Fragment=KE;Rp.jsx=pC;Rp.jsxs=pC});var j=Ga((S7,gC)=>{"use strict";gC.exports=mC()});var Jk=Ga(Qk=>{"use strict";var Ys=$();function G6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var j6=typeof Object.is=="function"?Object.is:G6,X6=Ys.useState,W6=Ys.useEffect,Y6=Ys.useLayoutEffect,Z6=Ys.useDebugValue;function K6(e,t){var a=t(),o=X6({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return Y6(function(){n.value=a,n.getSnapshot=t,f0(n)&&r({inst:n})},[e,a,t]),W6(function(){return f0(n)&&r({inst:n}),e(function(){f0(n)&&r({inst:n})})},[e]),Z6(a),a}function f0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!j6(e,a)}catch{return!0}}function $6(e,t){return t()}var Q6=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$6:K6;Qk.useSyncExternalStore=Ys.useSyncExternalStore!==void 0?Ys.useSyncExternalStore:Q6});var tL=Ga((hV,eL)=>{"use strict";eL.exports=Jk()});var oL=Ga(aL=>{"use strict";var Lm=$(),J6=tL();function e8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var t8=typeof Object.is=="function"?Object.is:e8,a8=J6.useSyncExternalStore,o8=Lm.useRef,n8=Lm.useEffect,r8=Lm.useMemo,i8=Lm.useDebugValue;aL.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=o8(null);if(r.current===null){var i={hasValue:!1,value:null};r.current=i}else i=r.current;r=r8(function(){function s(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&i.hasValue){var g=i.value;if(n(g,p))return f=g}return f=p}if(g=f,t8(d,p))return g;var w=o(p);return n!==void 0&&n(g,w)?(d=p,g):(d=p,f=w)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var l=a8(e,r[0],r[1]);return n8(function(){i.hasValue=!0,i.value=l},[l]),i8(l),l}});var rL=Ga((bV,nL)=>{"use strict";nL.exports=oL()});var f7={};a3(f7,{mountCanvas:()=>d7,unmountCanvas:()=>c7,updateCanvas:()=>u7});var MN=N(Sb(),1);var wd=N($(),1);var Ce=N($(),1);var q=N(j()),V=N($());function Lt(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=Lt(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var $E={value:()=>{}};function xC(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new Pp(a)}function Pp(e){this._=e}function QE(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}Pp.prototype=xC.prototype={constructor:Pp,on:function(e,t){var a=this._,o=QE(e+"",a),n,r=-1,i=o.length;if(arguments.length<2){for(;++r<i;)if((n=(e=o[r]).type)&&(n=JE(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<i;)if(n=(e=o[r]).type)a[n]=hC(a[n],e.name,t);else if(t==null)for(n in a)a[n]=hC(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new Pp(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function JE(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function hC(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=$E,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Yi=xC;var zp="http://www.w3.org/1999/xhtml",kb={svg:"http://www.w3.org/2000/svg",xhtml:zp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function dr(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),kb.hasOwnProperty(t)?{space:kb[t],local:e}:e}function eT(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===zp&&t.documentElement.namespaceURI===zp?t.createElement(e):t.createElementNS(a,e)}}function tT(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Op(e){var t=dr(e);return(t.local?tT:eT)(t)}function aT(){}function Zi(e){return e==null?aT:function(){return this.querySelector(e)}}function bC(e){typeof e!="function"&&(e=Zi(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=new Array(i),s,u,d=0;d<i;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),l[d]=u);return new _t(o,this._parents)}function Lb(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function oT(){return[]}function Lu(e){return e==null?oT:function(){return this.querySelectorAll(e)}}function nT(e){return function(){return Lb(e.apply(this,arguments))}}function wC(e){typeof e=="function"?e=nT(e):e=Lu(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var i=t[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&(o.push(e.call(s,s.__data__,u,i)),n.push(s));return new _t(o,n)}function _u(e){return function(){return this.matches(e)}}function Bp(e){return function(t){return t.matches(e)}}var rT=Array.prototype.find;function iT(e){return function(){return rT.call(this.children,e)}}function lT(){return this.firstElementChild}function yC(e){return this.select(e==null?lT:iT(typeof e=="function"?e:Bp(e)))}var sT=Array.prototype.filter;function dT(){return Array.from(this.children)}function uT(e){return function(){return sT.call(this.children,e)}}function vC(e){return this.selectAll(e==null?dT:uT(typeof e=="function"?e:Bp(e)))}function CC(e){typeof e!="function"&&(e=_u(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new _t(o,this._parents)}function Hp(e){return new Array(e.length)}function SC(){return new _t(this._enter||this._groups.map(Hp),this._parents)}function Iu(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Iu.prototype={constructor:Iu,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function kC(e){return function(){return e}}function cT(e,t,a,o,n,r){for(var i=0,l,s=t.length,u=r.length;i<u;++i)(l=t[i])?(l.__data__=r[i],o[i]=l):a[i]=new Iu(e,r[i]);for(;i<s;++i)(l=t[i])&&(n[i]=l)}function fT(e,t,a,o,n,r,i){var l,s,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(l=0;l<d;++l)(s=t[l])&&(c[l]=p=i.call(s,s.__data__,l,t)+"",u.has(p)?n[l]=s:u.set(p,s));for(l=0;l<f;++l)p=i.call(e,r[l],l,r)+"",(s=u.get(p))?(o[l]=s,s.__data__=r[l],u.delete(p)):a[l]=new Iu(e,r[l]);for(l=0;l<d;++l)(s=t[l])&&u.get(c[l])===s&&(n[l]=s)}function pT(e){return e.__data__}function LC(e,t){if(!arguments.length)return Array.from(this,pT);var a=t?fT:cT,o=this._parents,n=this._groups;typeof e!="function"&&(e=kC(e));for(var r=n.length,i=new Array(r),l=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=mT(e.call(d,d&&d.__data__,u,o)),g=p.length,w=l[u]=new Array(g),y=i[u]=new Array(g),h=s[u]=new Array(c);a(d,f,w,y,h,p,t);for(var x=0,m=0,b,v;x<g;++x)if(b=w[x]){for(x>=m&&(m=x+1);!(v=y[m])&&++m<g;);b._next=v||null}}return i=new _t(i,o),i._enter=l,i._exit=s,i}function mT(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function _C(){return new _t(this._exit||this._groups.map(Hp),this._parents)}function IC(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function MC(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,i=Math.min(n,r),l=new Array(n),s=0;s<i;++s)for(var u=a[s],d=o[s],f=u.length,c=l[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;s<n;++s)l[s]=a[s];return new _t(l,this._parents)}function NC(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],i;--n>=0;)(i=o[n])&&(r&&i.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(i,r),r=i);return this}function EC(e){e||(e=gT);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var i=a[r],l=i.length,s=n[r]=new Array(l),u,d=0;d<l;++d)(u=i[d])&&(s[d]=u);s.sort(t)}return new _t(n,this._parents).order()}function gT(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function TC(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function AC(){return Array.from(this)}function DC(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var i=o[n];if(i)return i}return null}function RC(){let e=0;for(let t of this)++e;return e}function PC(){return!this.node()}function zC(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,i=n.length,l;r<i;++r)(l=n[r])&&e.call(l,l.__data__,r,n);return this}function hT(e){return function(){this.removeAttribute(e)}}function xT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function bT(e,t){return function(){this.setAttribute(e,t)}}function wT(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function yT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function vT(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function OC(e,t){var a=dr(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?xT:hT:typeof t=="function"?a.local?vT:yT:a.local?wT:bT)(a,t))}function Fp(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function CT(e){return function(){this.style.removeProperty(e)}}function ST(e,t,a){return function(){this.style.setProperty(e,t,a)}}function kT(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function BC(e,t,a){return arguments.length>1?this.each((t==null?CT:typeof t=="function"?kT:ST)(e,t,a??"")):oi(this.node(),e)}function oi(e,t){return e.style.getPropertyValue(t)||Fp(e).getComputedStyle(e,null).getPropertyValue(t)}function LT(e){return function(){delete this[e]}}function _T(e,t){return function(){this[e]=t}}function IT(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function HC(e,t){return arguments.length>1?this.each((t==null?LT:typeof t=="function"?IT:_T)(e,t)):this.node()[e]}function FC(e){return e.trim().split(/^|\s+/)}function _b(e){return e.classList||new UC(e)}function UC(e){this._node=e,this._names=FC(e.getAttribute("class")||"")}UC.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function qC(e,t){for(var a=_b(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function VC(e,t){for(var a=_b(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function MT(e){return function(){qC(this,e)}}function NT(e){return function(){VC(this,e)}}function ET(e,t){return function(){(t.apply(this,arguments)?qC:VC)(this,e)}}function GC(e,t){var a=FC(e+"");if(arguments.length<2){for(var o=_b(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?ET:t?MT:NT)(a,t))}function TT(){this.textContent=""}function AT(e){return function(){this.textContent=e}}function DT(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function jC(e){return arguments.length?this.each(e==null?TT:(typeof e=="function"?DT:AT)(e)):this.node().textContent}function RT(){this.innerHTML=""}function PT(e){return function(){this.innerHTML=e}}function zT(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function XC(e){return arguments.length?this.each(e==null?RT:(typeof e=="function"?zT:PT)(e)):this.node().innerHTML}function OT(){this.nextSibling&&this.parentNode.appendChild(this)}function WC(){return this.each(OT)}function BT(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function YC(){return this.each(BT)}function ZC(e){var t=typeof e=="function"?e:Op(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function HT(){return null}function KC(e,t){var a=typeof e=="function"?e:Op(e),o=t==null?HT:typeof t=="function"?t:Zi(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function FT(){var e=this.parentNode;e&&e.removeChild(this)}function $C(){return this.each(FT)}function UT(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function qT(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function QC(e){return this.select(e?qT:UT)}function JC(e){return arguments.length?this.property("__data__",e):this.node().__data__}function VT(e){return function(t){e.call(this,t,this.__data__)}}function GT(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function jT(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function XT(e,t,a){return function(){var o=this.__on,n,r=VT(t);if(o){for(var i=0,l=o.length;i<l;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function eS(e,t,a){var o=GT(e+""),n,r=o.length,i;if(arguments.length<2){var l=this.node().__on;if(l){for(var s=0,u=l.length,d;s<u;++s)for(n=0,d=l[s];n<r;++n)if((i=o[n]).type===d.type&&i.name===d.name)return d.value}return}for(l=t?XT:jT,n=0;n<r;++n)this.each(l(o[n],t,a));return this}function tS(e,t,a){var o=Fp(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function WT(e,t){return function(){return tS(this,e,t)}}function YT(e,t){return function(){return tS(this,e,t.apply(this,arguments))}}function aS(e,t){return this.each((typeof t=="function"?YT:WT)(e,t))}function*oS(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,i;n<r;++n)(i=o[n])&&(yield i)}var Ib=[null];function _t(e,t){this._groups=e,this._parents=t}function nS(){return new _t([[document.documentElement]],Ib)}function ZT(){return this}_t.prototype=nS.prototype={constructor:_t,select:bC,selectAll:wC,selectChild:yC,selectChildren:vC,filter:CC,data:LC,enter:SC,exit:_C,join:IC,merge:MC,selection:ZT,order:NC,sort:EC,call:TC,nodes:AC,node:DC,size:RC,empty:PC,each:zC,attr:OC,style:BC,property:HC,classed:GC,text:jC,html:XC,raise:WC,lower:YC,append:ZC,insert:KC,remove:$C,clone:QC,datum:JC,on:eS,dispatch:aS,[Symbol.iterator]:oS};var ur=nS;function aa(e){return typeof e=="string"?new _t([[document.querySelector(e)]],[document.documentElement]):new _t([[e]],Ib)}function rS(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ta(e,t){if(e=rS(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var iS={passive:!1},Ki={capture:!0,passive:!1};function Up(e){e.stopImmediatePropagation()}function ni(e){e.preventDefault(),e.stopImmediatePropagation()}function Mu(e){var t=e.document.documentElement,a=aa(e).on("dragstart.drag",ni,Ki);"onselectstart"in t?a.on("selectstart.drag",ni,Ki):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Nu(e,t){var a=e.document.documentElement,o=aa(e).on("dragstart.drag",null);t&&(o.on("click.drag",ni,Ki),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var Eu=e=>()=>e;function Tu(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:i,y:l,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Tu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function KT(e){return!e.ctrlKey&&!e.button}function $T(){return this.parentNode}function QT(e,t){return t??{x:e.x,y:e.y}}function JT(){return navigator.maxTouchPoints||"ontouchstart"in this}function qp(){var e=KT,t=$T,a=QT,o=JT,n={},r=Yi("start","drag","end"),i=0,l,s,u,d,f=0;function c(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",h,iS).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,v){if(!(d||!e.call(this,b,v))){var C=m(this,t.call(this,b,v),b,v,"mouse");C&&(aa(b.view).on("mousemove.drag",g,Ki).on("mouseup.drag",w,Ki),Mu(b.view),Up(b),u=!1,l=b.clientX,s=b.clientY,C("start",b))}}function g(b){if(ni(b),!u){var v=b.clientX-l,C=b.clientY-s;u=v*v+C*C>f}n.mouse("drag",b)}function w(b){aa(b.view).on("mousemove.drag mouseup.drag",null),Nu(b.view,u),ni(b),n.mouse("end",b)}function y(b,v){if(e.call(this,b,v)){var C=b.changedTouches,k=t.call(this,b,v),S=C.length,_,A;for(_=0;_<S;++_)(A=m(this,k,b,v,C[_].identifier,C[_]))&&(Up(b),A("start",b,C[_]))}}function h(b){var v=b.changedTouches,C=v.length,k,S;for(k=0;k<C;++k)(S=n[v[k].identifier])&&(ni(b),S("drag",b,v[k]))}function x(b){var v=b.changedTouches,C=v.length,k,S;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),k=0;k<C;++k)(S=n[v[k].identifier])&&(Up(b),S("end",b,v[k]))}function m(b,v,C,k,S,_){var A=r.copy(),D=Ta(_||C,v),B,U,L;if((L=a.call(b,new Tu("beforestart",{sourceEvent:C,target:c,identifier:S,active:i,x:D[0],y:D[1],dx:0,dy:0,dispatch:A}),k))!=null)return B=L.x-D[0]||0,U=L.y-D[1]||0,function E(T,M,P){var O=D,R;switch(T){case"start":n[S]=E,R=i++;break;case"end":delete n[S],--i;case"drag":D=Ta(P||M,v),R=i;break}A.call(T,b,new Tu(T,{sourceEvent:M,subject:L,target:c,identifier:S,active:R,x:D[0]+B,y:D[1]+U,dx:D[0]-O[0],dy:D[1]-O[1],dispatch:A}),k)}}return c.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Eu(!!b),c):e},c.container=function(b){return arguments.length?(t=typeof b=="function"?b:Eu(b),c):t},c.subject=function(b){return arguments.length?(a=typeof b=="function"?b:Eu(b),c):a},c.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:Eu(!!b),c):o},c.on=function(){var b=r.on.apply(r,arguments);return b===r?c:b},c.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,c):Math.sqrt(f)},c}function Vp(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Mb(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Ru(){}var Au=.7,Xp=1/Au,Ds="\\s*([+-]?\\d+)\\s*",Du="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ln="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",eA=/^#([0-9a-f]{3,8})$/,tA=new RegExp(`^rgb\\(${Ds},${Ds},${Ds}\\)$`),aA=new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`),oA=new RegExp(`^rgba\\(${Ds},${Ds},${Ds},${Du}\\)$`),nA=new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${Du}\\)$`),rA=new RegExp(`^hsl\\(${Du},${Ln},${Ln}\\)$`),iA=new RegExp(`^hsla\\(${Du},${Ln},${Ln},${Du}\\)$`),lS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Vp(Ru,Jo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:sS,formatHex:sS,formatHex8:lA,formatHsl:sA,formatRgb:dS,toString:dS});function sS(){return this.rgb().formatHex()}function lA(){return this.rgb().formatHex8()}function sA(){return gS(this).formatHsl()}function dS(){return this.rgb().formatRgb()}function Jo(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=eA.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?uS(t):a===3?new Qa(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Gp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Gp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=tA.exec(e))?new Qa(t[1],t[2],t[3],1):(t=aA.exec(e))?new Qa(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=oA.exec(e))?Gp(t[1],t[2],t[3],t[4]):(t=nA.exec(e))?Gp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=rA.exec(e))?pS(t[1],t[2]/100,t[3]/100,1):(t=iA.exec(e))?pS(t[1],t[2]/100,t[3]/100,t[4]):lS.hasOwnProperty(e)?uS(lS[e]):e==="transparent"?new Qa(NaN,NaN,NaN,0):null}function uS(e){return new Qa(e>>16&255,e>>8&255,e&255,1)}function Gp(e,t,a,o){return o<=0&&(e=t=a=NaN),new Qa(e,t,a,o)}function dA(e){return e instanceof Ru||(e=Jo(e)),e?(e=e.rgb(),new Qa(e.r,e.g,e.b,e.opacity)):new Qa}function Rs(e,t,a,o){return arguments.length===1?dA(e):new Qa(e,t,a,o??1)}function Qa(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}Vp(Qa,Rs,Mb(Ru,{brighter(e){return e=e==null?Xp:Math.pow(Xp,e),new Qa(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Au:Math.pow(Au,e),new Qa(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Qa(Qi(this.r),Qi(this.g),Qi(this.b),Wp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:cS,formatHex:cS,formatHex8:uA,formatRgb:fS,toString:fS}));function cS(){return`#${$i(this.r)}${$i(this.g)}${$i(this.b)}`}function uA(){return`#${$i(this.r)}${$i(this.g)}${$i(this.b)}${$i((isNaN(this.opacity)?1:this.opacity)*255)}`}function fS(){let e=Wp(this.opacity);return`${e===1?"rgb(":"rgba("}${Qi(this.r)}, ${Qi(this.g)}, ${Qi(this.b)}${e===1?")":`, ${e})`}`}function Wp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Qi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function $i(e){return e=Qi(e),(e<16?"0":"")+e.toString(16)}function pS(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new Qo(e,t,a,o)}function gS(e){if(e instanceof Qo)return new Qo(e.h,e.s,e.l,e.opacity);if(e instanceof Ru||(e=Jo(e)),!e)return new Qo;if(e instanceof Qo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),i=NaN,l=r-n,s=(r+n)/2;return l?(t===r?i=(a-o)/l+(a<o)*6:a===r?i=(o-t)/l+2:i=(t-a)/l+4,l/=s<.5?r+n:2-r-n,i*=60):l=s>0&&s<1?0:i,new Qo(i,l,s,e.opacity)}function hS(e,t,a,o){return arguments.length===1?gS(e):new Qo(e,t,a,o??1)}function Qo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}Vp(Qo,hS,Mb(Ru,{brighter(e){return e=e==null?Xp:Math.pow(Xp,e),new Qo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Au:Math.pow(Au,e),new Qo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new Qa(Nb(e>=240?e-240:e+120,n,o),Nb(e,n,o),Nb(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Qo(mS(this.h),jp(this.s),jp(this.l),Wp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Wp(this.opacity);return`${e===1?"hsl(":"hsla("}${mS(this.h)}, ${jp(this.s)*100}%, ${jp(this.l)*100}%${e===1?")":`, ${e})`}`}}));function mS(e){return e=(e||0)%360,e<0?e+360:e}function jp(e){return Math.max(0,Math.min(1,e||0))}function Nb(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Eb(e,t,a,o,n){var r=e*e,i=r*e;return((1-3*e+3*r-i)*t+(4-6*r+3*i)*a+(1+3*e+3*r-3*i)*o+i*n)/6}function xS(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],i=o>0?e[o-1]:2*n-r,l=o<t-1?e[o+2]:2*r-n;return Eb((a-o/t)*t,i,n,r,l)}}function bS(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],i=e[(o+1)%t],l=e[(o+2)%t];return Eb((a-o/t)*t,n,r,i,l)}}var Pu=e=>()=>e;function cA(e,t){return function(a){return e+a*t}}function fA(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function wS(e){return(e=+e)==1?Yp:function(t,a){return a-t?fA(t,a,e):Pu(isNaN(t)?a:t)}}function Yp(e,t){var a=t-e;return a?cA(e,a):Pu(isNaN(e)?t:e)}var Ji=(function e(t){var a=wS(t);function o(n,r){var i=a((n=Rs(n)).r,(r=Rs(r)).r),l=a(n.g,r.g),s=a(n.b,r.b),u=Yp(n.opacity,r.opacity);return function(d){return n.r=i(d),n.g=l(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function yS(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),i,l;for(i=0;i<a;++i)l=Rs(t[i]),o[i]=l.r||0,n[i]=l.g||0,r[i]=l.b||0;return o=e(o),n=e(n),r=e(r),l.opacity=1,function(s){return l.r=o(s),l.g=n(s),l.b=r(s),l+""}}}var pA=yS(xS),mA=yS(bS);function vS(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function CS(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function SS(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),i;for(i=0;i<o;++i)n[i]=cr(e[i],t[i]);for(;i<a;++i)r[i]=t[i];return function(l){for(i=0;i<o;++i)r[i]=n[i](l);return r}}function kS(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Aa(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function LS(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=cr(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Ab=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Tb=new RegExp(Ab.source,"g");function gA(e){return function(){return e}}function hA(e){return function(t){return e(t)+""}}function zu(e,t){var a=Ab.lastIndex=Tb.lastIndex=0,o,n,r,i=-1,l=[],s=[];for(e=e+"",t=t+"";(o=Ab.exec(e))&&(n=Tb.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),l[i]?l[i]+=r:l[++i]=r),(o=o[0])===(n=n[0])?l[i]?l[i]+=n:l[++i]=n:(l[++i]=null,s.push({i,x:Aa(o,n)})),a=Tb.lastIndex;return a<t.length&&(r=t.slice(a),l[i]?l[i]+=r:l[++i]=r),l.length<2?s[0]?hA(s[0].x):gA(t):(t=s.length,function(u){for(var d=0,f;d<t;++d)l[(f=s[d]).i]=f.x(u);return l.join("")})}function cr(e,t){var a=typeof t,o;return t==null||a==="boolean"?Pu(t):(a==="number"?Aa:a==="string"?(o=Jo(t))?(t=o,Ji):zu:t instanceof Jo?Ji:t instanceof Date?kS:CS(t)?vS:Array.isArray(t)?SS:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?LS:Aa)(e,t)}var _S=180/Math.PI,Zp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Db(e,t,a,o,n,r){var i,l,s;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(l=Math.sqrt(a*a+o*o))&&(a/=l,o/=l,s/=l),e*o<t*a&&(e=-e,t=-t,s=-s,i=-i),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*_S,skewX:Math.atan(s)*_S,scaleX:i,scaleY:l}}var Kp;function IS(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Zp:Db(t.a,t.b,t.c,t.d,t.e,t.f)}function MS(e){return e==null?Zp:(Kp||(Kp=document.createElementNS("http://www.w3.org/2000/svg","g")),Kp.setAttribute("transform",e),(e=Kp.transform.baseVal.consolidate())?(e=e.matrix,Db(e.a,e.b,e.c,e.d,e.e,e.f)):Zp)}function NS(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push("translate(",null,t,null,a);g.push({i:w-4,x:Aa(u,f)},{i:w-2,x:Aa(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function i(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Aa(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function l(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Aa(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function s(u,d,f,c,p,g){if(u!==f||d!==c){var w=p.push(n(p)+"scale(",null,",",null,")");g.push({i:w-4,x:Aa(u,f)},{i:w-2,x:Aa(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),i(u.rotate,d.rotate,f,c),l(u.skewX,d.skewX,f,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,w=c.length,y;++g<w;)f[(y=c[g]).i]=y.x(p);return f.join("")}}}var Rb=NS(IS,"px, ","px)","deg)"),Pb=NS(MS,", ",")",")");var xA=1e-12;function ES(e){return((e=Math.exp(e))+1/e)/2}function bA(e){return((e=Math.exp(e))-1/e)/2}function wA(e){return((e=Math.exp(2*e))-1)/(e+1)}var el=(function e(t,a,o){function n(r,i){var l=r[0],s=r[1],u=r[2],d=i[0],f=i[1],c=i[2],p=d-l,g=f-s,w=p*p+g*g,y,h;if(w<xA)h=Math.log(c/u)/t,y=function(k){return[l+k*p,s+k*g,u*Math.exp(t*k*h)]};else{var x=Math.sqrt(w),m=(c*c-u*u+o*w)/(2*u*a*x),b=(c*c-u*u-o*w)/(2*c*a*x),v=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(b*b+1)-b);h=(C-v)/t,y=function(k){var S=k*h,_=ES(v),A=u/(a*x)*(_*wA(t*S+v)-bA(v));return[l+A*p,s+A*g,u*_/ES(t*S+v)]}}return y.duration=h*1e3*t/Math.SQRT2,y}return n.rho=function(r){var i=Math.max(.001,+r),l=i*i,s=l*l;return e(i,l,s)},n})(Math.SQRT2,2,4);var Ps=0,Bu=0,Ou=0,AS=1e3,$p,Hu,Qp=0,tl=0,Jp=0,Fu=typeof performance=="object"&&performance.now?performance:Date,DS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function qu(){return tl||(DS(yA),tl=Fu.now()+Jp)}function yA(){tl=0}function Uu(){this._call=this._time=this._next=null}Uu.prototype=em.prototype={constructor:Uu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?qu():+a)+(t==null?0:+t),!this._next&&Hu!==this&&(Hu?Hu._next=this:$p=this,Hu=this),this._call=e,this._time=a,zb()},stop:function(){this._call&&(this._call=null,this._time=1/0,zb())}};function em(e,t,a){var o=new Uu;return o.restart(e,t,a),o}function RS(){qu(),++Ps;for(var e=$p,t;e;)(t=tl-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ps}function TS(){tl=(Qp=Fu.now())+Jp,Ps=Bu=0;try{RS()}finally{Ps=0,CA(),tl=0}}function vA(){var e=Fu.now(),t=e-Qp;t>AS&&(Jp-=t,Qp=e)}function CA(){for(var e,t=$p,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:$p=a);Hu=e,zb(o)}function zb(e){if(!Ps){Bu&&(Bu=clearTimeout(Bu));var t=e-tl;t>24?(e<1/0&&(Bu=setTimeout(TS,e-Fu.now()-Jp)),Ou&&(Ou=clearInterval(Ou))):(Ou||(Qp=Fu.now(),Ou=setInterval(vA,AS)),Ps=1,DS(TS))}}function tm(e,t,a){var o=new Uu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var SA=Yi("start","end","cancel","interrupt"),kA=[],OS=0,PS=1,om=2,am=3,zS=4,nm=5,Vu=6;function ri(e,t,a,o,n,r){var i=e.__transition;if(!i)e.__transition={};else if(a in i)return;LA(e,a,{name:t,index:o,group:n,on:SA,tween:kA,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:OS})}function Gu(e,t){var a=Wt(e,t);if(a.state>OS)throw new Error("too late; already scheduled");return a}function ma(e,t){var a=Wt(e,t);if(a.state>am)throw new Error("too late; already running");return a}function Wt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function LA(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=em(r,0,a.time);function r(u){a.state=PS,a.timer.restart(i,a.delay,a.time),a.delay<=u&&i(u-a.delay)}function i(u){var d,f,c,p;if(a.state!==PS)return s();for(d in o)if(p=o[d],p.name===a.name){if(p.state===am)return tm(i);p.state===zS?(p.state=Vu,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=Vu,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(tm(function(){a.state===am&&(a.state=zS,a.timer.restart(l,a.delay,a.time),l(u))}),a.state=om,a.on.call("start",e,e.__data__,a.index,a.group),a.state===om){for(a.state=am,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function l(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=nm,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===nm&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=Vu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function al(e,t){var a=e.__transition,o,n,r=!0,i;if(a){t=t==null?null:t+"";for(i in a){if((o=a[i]).name!==t){r=!1;continue}n=o.state>om&&o.state<nm,o.state=Vu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[i]}r&&delete e.__transition}}function BS(e){return this.each(function(){al(this,e)})}function _A(e,t){var a,o;return function(){var n=ma(this,e),r=n.tween;if(r!==a){o=a=r;for(var i=0,l=o.length;i<l;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function IA(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=ma(this,e),i=r.tween;if(i!==o){n=(o=i).slice();for(var l={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=l;break}s===u&&n.push(l)}r.tween=n}}function HS(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=Wt(this.node(),a).tween,n=0,r=o.length,i;n<r;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?_A:IA)(a,e,t))}function zs(e,t,a){var o=e._id;return e.each(function(){var n=ma(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return Wt(n,o).value[t]}}function rm(e,t){var a;return(typeof t=="number"?Aa:t instanceof Jo?Ji:(a=Jo(t))?(t=a,Ji):zu)(e,t)}function MA(e){return function(){this.removeAttribute(e)}}function NA(e){return function(){this.removeAttributeNS(e.space,e.local)}}function EA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttribute(e);return i===n?null:i===o?r:r=t(o=i,a)}}function TA(e,t,a){var o,n=a+"",r;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?r:r=t(o=i,a)}}function AA(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttribute(e):(i=this.getAttribute(e),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function DA(e,t,a){var o,n,r;return function(){var i,l=a(this),s;return l==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),s=l+"",i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l)))}}function FS(e,t){var a=dr(e),o=a==="transform"?Pb:rm;return this.attrTween(e,typeof t=="function"?(a.local?DA:AA)(a,o,zs(this,"attr."+e,t)):t==null?(a.local?NA:MA)(a):(a.local?TA:EA)(a,o,t))}function RA(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function PA(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function zA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&PA(e,r)),a}return n._value=t,n}function OA(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&RA(e,r)),a}return n._value=t,n}function US(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=dr(e);return this.tween(a,(o.local?zA:OA)(o,t))}function BA(e,t){return function(){Gu(this,e).delay=+t.apply(this,arguments)}}function HA(e,t){return t=+t,function(){Gu(this,e).delay=t}}function qS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?BA:HA)(t,e)):Wt(this.node(),t).delay}function FA(e,t){return function(){ma(this,e).duration=+t.apply(this,arguments)}}function UA(e,t){return t=+t,function(){ma(this,e).duration=t}}function VS(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?FA:UA)(t,e)):Wt(this.node(),t).duration}function qA(e,t){if(typeof t!="function")throw new Error;return function(){ma(this,e).ease=t}}function GS(e){var t=this._id;return arguments.length?this.each(qA(t,e)):Wt(this.node(),t).ease}function VA(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;ma(this,e).ease=a}}function jS(e){if(typeof e!="function")throw new Error;return this.each(VA(this._id,e))}function XS(e){typeof e!="function"&&(e=_u(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],i=r.length,l=o[n]=[],s,u=0;u<i;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&l.push(s);return new Da(o,this._parents,this._name,this._id)}function WS(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),i=new Array(o),l=0;l<r;++l)for(var s=t[l],u=a[l],d=s.length,f=i[l]=new Array(d),c,p=0;p<d;++p)(c=s[p]||u[p])&&(f[p]=c);for(;l<o;++l)i[l]=t[l];return new Da(i,this._parents,this._name,this._id)}function GA(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function jA(e,t,a){var o,n,r=GA(t)?Gu:ma;return function(){var i=r(this,e),l=i.on;l!==o&&(n=(o=l).copy()).on(t,a),i.on=n}}function YS(e,t){var a=this._id;return arguments.length<2?Wt(this.node(),a).on.on(e):this.each(jA(a,e,t))}function XA(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function ZS(){return this.on("end.remove",XA(this._id))}function KS(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Zi(e));for(var o=this._groups,n=o.length,r=new Array(n),i=0;i<n;++i)for(var l=o[i],s=l.length,u=r[i]=new Array(s),d,f,c=0;c<s;++c)(d=l[c])&&(f=e.call(d,d.__data__,c,l))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,ri(u[c],t,a,c,u,Wt(d,a)));return new Da(r,this._parents,t,a)}function $S(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Lu(e));for(var o=this._groups,n=o.length,r=[],i=[],l=0;l<n;++l)for(var s=o[l],u=s.length,d,f=0;f<u;++f)if(d=s[f]){for(var c=e.call(d,d.__data__,f,s),p,g=Wt(d,a),w=0,y=c.length;w<y;++w)(p=c[w])&&ri(p,t,a,w,c,g);r.push(c),i.push(d)}return new Da(r,i,t,a)}var WA=ur.prototype.constructor;function QS(){return new WA(this._groups,this._parents)}function YA(e,t){var a,o,n;return function(){var r=oi(this,e),i=(this.style.removeProperty(e),oi(this,e));return r===i?null:r===a&&i===o?n:n=t(a=r,o=i)}}function JS(e){return function(){this.style.removeProperty(e)}}function ZA(e,t,a){var o,n=a+"",r;return function(){var i=oi(this,e);return i===n?null:i===o?r:r=t(o=i,a)}}function KA(e,t,a){var o,n,r;return function(){var i=oi(this,e),l=a(this),s=l+"";return l==null&&(s=l=(this.style.removeProperty(e),oi(this,e))),i===s?null:i===o&&s===n?r:(n=s,r=t(o=i,l))}}function $A(e,t){var a,o,n,r="style."+t,i="end."+r,l;return function(){var s=ma(this,e),u=s.on,d=s.value[r]==null?l||(l=JS(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(i,n=d),s.on=o}}function ek(e,t,a){var o=(e+="")=="transform"?Rb:rm;return t==null?this.styleTween(e,YA(e,o)).on("end.style."+e,JS(e)):typeof t=="function"?this.styleTween(e,KA(e,o,zs(this,"style."+e,t))).each($A(this._id,e)):this.styleTween(e,ZA(e,o,t),a).on("end.style."+e,null)}function QA(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function JA(e,t,a){var o,n;function r(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&QA(e,i,a)),o}return r._value=t,r}function tk(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,JA(e,t,a??""))}function e6(e){return function(){this.textContent=e}}function t6(e){return function(){var t=e(this);this.textContent=t??""}}function ak(e){return this.tween("text",typeof e=="function"?t6(zs(this,"text",e)):e6(e==null?"":e+""))}function a6(e){return function(t){this.textContent=e.call(this,t)}}function o6(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&a6(n)),t}return o._value=e,o}function ok(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,o6(e))}function nk(){for(var e=this._name,t=this._id,a=im(),o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)if(s=i[u]){var d=Wt(s,t);ri(s,e,a,u,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Da(o,this._parents,e,a)}function rk(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,i){var l={value:i},s={value:function(){--n===0&&r()}};a.each(function(){var u=ma(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),u.on=t}),n===0&&r()})}var n6=0;function Da(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function ik(e){return ur().transition(e)}function im(){return++n6}var fr=ur.prototype;Da.prototype=ik.prototype={constructor:Da,select:KS,selectAll:$S,selectChild:fr.selectChild,selectChildren:fr.selectChildren,filter:XS,merge:WS,selection:QS,transition:nk,call:fr.call,nodes:fr.nodes,node:fr.node,size:fr.size,empty:fr.empty,each:fr.each,on:YS,attr:FS,attrTween:US,style:ek,styleTween:tk,text:ak,textTween:ok,remove:ZS,tween:HS,delay:qS,duration:VS,ease:GS,easeVarying:jS,end:rk,[Symbol.iterator]:fr[Symbol.iterator]};function lm(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var r6={time:null,delay:0,duration:250,ease:lm};function i6(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function lk(e){var t,a;e instanceof Da?(t=e._id,e=e._name):(t=im(),(a=r6).time=qu(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var i=o[r],l=i.length,s,u=0;u<l;++u)(s=i[u])&&ri(s,e,t,u,i,a||i6(s,t));return new Da(o,this._parents,e,t)}ur.prototype.interrupt=BS;ur.prototype.transition=lk;var ju=e=>()=>e;function Ob(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function en(e,t,a){this.k=e,this.x=t,this.y=a}en.prototype={constructor:en,scale:function(e){return e===1?this:new en(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new en(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ol=new en(1,0,0);Xu.prototype=en.prototype;function Xu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return ol;return e.__zoom}function sm(e){e.stopImmediatePropagation()}function Os(e){e.preventDefault(),e.stopImmediatePropagation()}function l6(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function s6(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function sk(){return this.__zoom||ol}function d6(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function u6(){return navigator.maxTouchPoints||"ontouchstart"in this}function c6(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],i=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i))}function dm(){var e=l6,t=s6,a=c6,o=d6,n=u6,r=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],l=250,s=el,u=Yi("start","zoom","end"),d,f,c,p=500,g=150,w=0,y=10;function h(L){L.property("__zoom",sk).on("wheel.zoom",S,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",A).filter(n).on("touchstart.zoom",D).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,E,T,M){var P=L.selection?L.selection():L;P.property("__zoom",sk),L!==P?v(L,E,T,M):P.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},h.scaleBy=function(L,E,T,M){h.scaleTo(L,function(){var P=this.__zoom.k,O=typeof E=="function"?E.apply(this,arguments):E;return P*O},T,M)},h.scaleTo=function(L,E,T,M){h.transform(L,function(){var P=t.apply(this,arguments),O=this.__zoom,R=T==null?b(P):typeof T=="function"?T.apply(this,arguments):T,H=O.invert(R),I=typeof E=="function"?E.apply(this,arguments):E;return a(m(x(O,I),R,H),P,i)},T,M)},h.translateBy=function(L,E,T,M){h.transform(L,function(){return a(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof T=="function"?T.apply(this,arguments):T),t.apply(this,arguments),i)},null,M)},h.translateTo=function(L,E,T,M,P){h.transform(L,function(){var O=t.apply(this,arguments),R=this.__zoom,H=M==null?b(O):typeof M=="function"?M.apply(this,arguments):M;return a(ol.translate(H[0],H[1]).scale(R.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof T=="function"?-T.apply(this,arguments):-T),O,i)},M,P)};function x(L,E){return E=Math.max(r[0],Math.min(r[1],E)),E===L.k?L:new en(E,L.x,L.y)}function m(L,E,T){var M=E[0]-T[0]*L.k,P=E[1]-T[1]*L.k;return M===L.x&&P===L.y?L:new en(L.k,M,P)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function v(L,E,T,M){L.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var P=this,O=arguments,R=C(P,O).event(M),H=t.apply(P,O),I=T==null?b(H):typeof T=="function"?T.apply(P,O):T,F=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),W=P.__zoom,K=typeof E=="function"?E.apply(P,O):E,ee=s(W.invert(I).concat(F/W.k),K.invert(I).concat(F/K.k));return function(Q){if(Q===1)Q=K;else{var G=ee(Q),te=F/G[2];Q=new en(te,I[0]-G[0]*te,I[1]-G[1]*te)}R.zoom(null,Q)}})}function C(L,E,T){return!T&&L.__zooming||new k(L,E)}function k(L,E){this.that=L,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,E),this.taps=0}k.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,E){return this.mouse&&L!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var E=aa(this.that).datum();u.call(L,this.that,new Ob(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),E)}};function S(L,...E){if(!e.apply(this,arguments))return;var T=C(this,E).event(L),M=this.__zoom,P=Math.max(r[0],Math.min(r[1],M.k*Math.pow(2,o.apply(this,arguments)))),O=Ta(L);if(T.wheel)(T.mouse[0][0]!==O[0]||T.mouse[0][1]!==O[1])&&(T.mouse[1]=M.invert(T.mouse[0]=O)),clearTimeout(T.wheel);else{if(M.k===P)return;T.mouse=[O,M.invert(O)],al(this),T.start()}Os(L),T.wheel=setTimeout(R,g),T.zoom("mouse",a(m(x(M,P),T.mouse[0],T.mouse[1]),T.extent,i));function R(){T.wheel=null,T.end()}}function _(L,...E){if(c||!e.apply(this,arguments))return;var T=L.currentTarget,M=C(this,E,!0).event(L),P=aa(L.view).on("mousemove.zoom",I,!0).on("mouseup.zoom",F,!0),O=Ta(L,T),R=L.clientX,H=L.clientY;Mu(L.view),sm(L),M.mouse=[O,this.__zoom.invert(O)],al(this),M.start();function I(W){if(Os(W),!M.moved){var K=W.clientX-R,ee=W.clientY-H;M.moved=K*K+ee*ee>w}M.event(W).zoom("mouse",a(m(M.that.__zoom,M.mouse[0]=Ta(W,T),M.mouse[1]),M.extent,i))}function F(W){P.on("mousemove.zoom mouseup.zoom",null),Nu(W.view,M.moved),Os(W),M.event(W).end()}}function A(L,...E){if(e.apply(this,arguments)){var T=this.__zoom,M=Ta(L.changedTouches?L.changedTouches[0]:L,this),P=T.invert(M),O=T.k*(L.shiftKey?.5:2),R=a(m(x(T,O),M,P),t.apply(this,E),i);Os(L),l>0?aa(this).transition().duration(l).call(v,R,M,L):aa(this).call(h.transform,R,M,L)}}function D(L,...E){if(e.apply(this,arguments)){var T=L.touches,M=T.length,P=C(this,E,L.changedTouches.length===M).event(L),O,R,H,I;for(sm(L),R=0;R<M;++R)H=T[R],I=Ta(H,this),I=[I,this.__zoom.invert(I),H.identifier],P.touch0?!P.touch1&&P.touch0[2]!==I[2]&&(P.touch1=I,P.taps=0):(P.touch0=I,O=!0,P.taps=1+!!d);d&&(d=clearTimeout(d)),O&&(P.taps<2&&(f=I[0],d=setTimeout(function(){d=null},p)),al(this),P.start())}}function B(L,...E){if(this.__zooming){var T=C(this,E).event(L),M=L.changedTouches,P=M.length,O,R,H,I;for(Os(L),O=0;O<P;++O)R=M[O],H=Ta(R,this),T.touch0&&T.touch0[2]===R.identifier?T.touch0[0]=H:T.touch1&&T.touch1[2]===R.identifier&&(T.touch1[0]=H);if(R=T.that.__zoom,T.touch1){var F=T.touch0[0],W=T.touch0[1],K=T.touch1[0],ee=T.touch1[1],Q=(Q=K[0]-F[0])*Q+(Q=K[1]-F[1])*Q,G=(G=ee[0]-W[0])*G+(G=ee[1]-W[1])*G;R=x(R,Math.sqrt(Q/G)),H=[(F[0]+K[0])/2,(F[1]+K[1])/2],I=[(W[0]+ee[0])/2,(W[1]+ee[1])/2]}else if(T.touch0)H=T.touch0[0],I=T.touch0[1];else return;T.zoom("touch",a(m(R,H,I),T.extent,i))}}function U(L,...E){if(this.__zooming){var T=C(this,E).event(L),M=L.changedTouches,P=M.length,O,R;for(sm(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),O=0;O<P;++O)R=M[O],T.touch0&&T.touch0[2]===R.identifier?delete T.touch0:T.touch1&&T.touch1[2]===R.identifier&&delete T.touch1;if(T.touch1&&!T.touch0&&(T.touch0=T.touch1,delete T.touch1),T.touch0)T.touch0[1]=this.__zoom.invert(T.touch0[0]);else if(T.end(),T.taps===2&&(R=Ta(R,this),Math.hypot(f[0]-R[0],f[1]-R[1])<y)){var H=aa(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:ju(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:ju(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:ju(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:ju([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(i[0][0]=+L[0][0],i[1][0]=+L[1][0],i[0][1]=+L[0][1],i[1][1]=+L[1][1],h):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(l=+L,h):l},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(w=(L=+L)*L,h):Math.sqrt(w)},h.tapDistance=function(L){return arguments.length?(y=+L,h):y},h}var vo={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Us=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],qb=["Enter"," ","Escape"],Vb={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},di;(function(e){e.Strict="strict",e.Loose="loose"})(di||(di={}));var tn;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(tn||(tn={}));var pr;(function(e){e.Partial="partial",e.Full="full"})(pr||(pr={}));var Gb={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},_n;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(_n||(_n={}));var Hs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Hs||(Hs={}));var ie;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ie||(ie={}));var dk={[ie.Left]:ie.Right,[ie.Right]:ie.Left,[ie.Top]:ie.Bottom,[ie.Bottom]:ie.Top};function jb(e){return e===null?null:e?"valid":"invalid"}var Xb=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Ck=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Wb=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Yb=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Yu=(e,t=[0,0])=>{let{width:a,height:o}=jo(e),n=e.origin??t,r=a*n[0],i=o*n[1];return{x:e.position.x-r,y:e.position.y-i}},Zb=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let i=typeof r=="string",l=!t.nodeLookup&&!i?r:void 0;return t.nodeLookup&&(l=i?t.nodeLookup.get(r):Wb(r)?r:t.nodeLookup.get(r.id)),l?(a=!0,gm(n,fm(l,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?hm(o):{x:0,y:0,width:0,height:0}},qs=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=gm(a,fm(n)),o=!0)}),o?hm(a):{x:0,y:0,width:0,height:0}},pm=(e,t,[a,o,n]=[0,0,1],r=!1,i=!1)=>{let l=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:w=!1}=c;if(i&&!g||w)continue;let y=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x,y:m}=c.internals.positionAbsolute,b=Ik(l,s,u,d,x,m,y,h),v=y*h,C=r&&b>0;(!c.internals.handleBounds||C||b>=v||c.dragging)&&f.push(c)}return f},Sk=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function f6(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:i,height:l}=jo(n);r=i>0&&l>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function kk({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},i){if(e.size===0)return!0;let l=f6(e,i),s=qs(l),u=Ku(s,t,a,i?.minZoom??n,i?.maxZoom??r,i?.padding??.1);return await o.setViewport(u,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function Kb({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let i=a.get(e),l=i.parentId?a.get(i.parentId):void 0,{x:s,y:u}=l?l.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,f=i.extent||n;if(i.extent==="parent"&&!i.expandParent)if(!l)r?.("005",vo.error005());else{let{width:p,height:g}=jo(l);p&&g&&(f=[[s,u],[s+p,u+g]])}else l&&il(i.extent)&&(f=[[i.extent[0][0]+s,i.extent[0][1]+u],[i.extent[1][0]+s,i.extent[1][1]+u]]);let c=il(f)?nl(t,f,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&r?.("015",vo.error015()),{position:{x:c.x-s+(i.measured.width??0)*d[0],y:c.y-u+(i.measured.height??0)*d[1]},positionAbsolute:c}}async function Lk({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),i=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&i.find(w=>w.id===c.parentId);(p||g)&&i.push(c)}let l=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=Sk(i,s);for(let c of s)l.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:i};let f=await n({nodes:i,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:i}:{edges:[],nodes:[]}:f}var Fs=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),nl=(e={x:0,y:0},t,a)=>({x:Fs(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Fs(e.y,t[0][1],t[1][1]-(a?.height??0))});function _k(e,t,a){let{width:o,height:n}=jo(a),{x:r,y:i}=a.internals.positionAbsolute;return nl(e,[[r,i],[r+o,i+n]],t)}var uk=(e,t,a)=>e<t?Fs(Math.abs(e-t),1,t)/t:e>a?-Fs(Math.abs(e-a),1,t)/t:0,mm=(e,t,a=15,o=40)=>{let n=uk(e.x,o,t.width-o)*a,r=uk(e.y,o,t.height-o)*a;return[n,r]},gm=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ub=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),hm=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Vs=(e,t=[0,0])=>{let{x:a,y:o}=Wb(e)?e.internals.positionAbsolute:Yu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},fm=(e,t=[0,0])=>{let{x:a,y:o}=Wb(e)?e.internals.positionAbsolute:Yu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},$b=(e,t)=>hm(gm(Ub(e),Ub(t))),Ik=(e,t,a,o,n,r,i,l)=>{let s=Math.max(0,Math.min(e+a,n+i)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+l)-Math.max(t,r));return Math.ceil(s*u)},Zu=(e,t)=>Ik(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Qb=e=>Vo(e.width)&&Vo(e.height)&&Vo(e.x)&&Vo(e.y),Vo=e=>!isNaN(e)&&isFinite(e),Jb=(e,t)=>(a,o)=>{},Gs=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),js=({x:e,y:t},[a,o,n],r=!1,i=[1,1])=>{let l={x:(e-a)/n,y:(t-o)/n};return r?Gs(l,i):l},rl=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Bs(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function p6(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Bs(e,a),n=Bs(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Bs(e.top??e.y??0,a),n=Bs(e.bottom??e.y??0,a),r=Bs(e.left??e.x??0,t),i=Bs(e.right??e.x??0,t);return{top:o,right:i,bottom:n,left:r,x:r+i,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function m6(e,t,a,o,n,r){let{x:i,y:l}=rl(e,[t,a,o]),{x:s,y:u}=rl({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,f=r-u;return{left:Math.floor(i),top:Math.floor(l),right:Math.floor(d),bottom:Math.floor(f)}}var Ku=(e,t,a,o,n,r)=>{let i=p6(r,t,a),l=(t-i.x)/e.width,s=(a-i.y)/e.height,u=Math.min(l,s),d=Fs(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,w=m6(e,p,g,d,t,a),y={left:Math.min(w.left-i.left,0),top:Math.min(w.top-i.top,0),right:Math.min(w.right-i.right,0),bottom:Math.min(w.bottom-i.bottom,0)};return{x:p-y.left+y.right,y:g-y.top+y.bottom,zoom:d}},Xs=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function il(e){return e!=null&&e!=="parent"}function jo(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function e0(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function t0(e,t={width:0,height:0},a,o,n){let r={...e},i=o.get(a);if(i){let l=i.origin||n;r.x+=i.internals.positionAbsolute.x-(t.width??0)*l[0],r.y+=i.internals.positionAbsolute.y-(t.height??0)*l[1]}return r}function a0(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function Mk(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function Nk(e){return{...Vb,...e||{}}}function Wu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:i}=Go(e),l=js({x:r-(n?.left??0),y:i-(n?.top??0)},o),{x:s,y:u}=a?Gs(l,t):l;return{xSnapped:s,ySnapped:u,...l}}var xm=e=>({width:e.offsetWidth,height:e.offsetHeight}),o0=e=>e?.getRootNode?.()||window?.document,g6=["INPUT","SELECT","TEXTAREA"];function n0(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:g6.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var r0=e=>"clientX"in e,Go=(e,t)=>{let a=r0(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},ck=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(i=>{let l=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:n,position:i.getAttribute("data-handlepos"),x:(l.left-a.left)/o,y:(l.top-a.top)/o,...xm(i)}})};function bm({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:i,targetControlY:l}){let s=e*.125+n*.375+i*.375+a*.125,u=t*.125+r*.375+l*.375+o*.125,d=Math.abs(s-e),f=Math.abs(u-t);return[s,u,d,f]}function um(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function fk({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ie.Left:return[t-um(t-o,r),a];case ie.Right:return[t+um(o-t,r),a];case ie.Top:return[t,a-um(a-n,r)];case ie.Bottom:return[t,a+um(n-a,r)]}}function Ws({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,curvature:i=.25}){let[l,s]=fk({pos:a,x1:e,y1:t,x2:o,y2:n,c:i}),[u,d]=fk({pos:r,x1:o,y1:n,x2:e,y2:t,c:i}),[f,c,p,g]=bm({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${l},${s} ${u},${d} ${o},${n}`,f,c,p,g]}function i0({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,i=Math.abs(o-t)/2,l=o<t?o+i:o-i;return[r,l,n,i]}function Ek({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let i=n&&a?o+1e3:o,l=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return i+l}function Tk({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=gm(fm(e),fm(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let i={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Zu(i,hm(r))>0}var h6=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,x6=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),Ak=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",vo.error006()),t;let o=a.getEdgeId||h6,n;return Xb(e)?n={...e}:n={...e,id:o(e)},x6(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function wm({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,i,l]=i0({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,i,l]}var pk={[ie.Left]:{x:-1,y:0},[ie.Right]:{x:1,y:0},[ie.Top]:{x:0,y:-1},[ie.Bottom]:{x:0,y:1}},b6=({source:e,sourcePosition:t=ie.Bottom,target:a})=>t===ie.Left||t===ie.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},mk=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function w6({source:e,sourcePosition:t=ie.Bottom,target:a,targetPosition:o=ie.Top,center:n,offset:r,stepPosition:i}){let l=pk[t],s=pk[o],u={x:e.x+l.x*r,y:e.y+l.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},f=b6({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],w,y,h={x:0,y:0},x={x:0,y:0},[,,m,b]=i0({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(l[c]*s[c]===-1){c==="x"?(w=n.x??u.x+(d.x-u.x)*i,y=n.y??(u.y+d.y)/2):(w=n.x??(u.x+d.x)/2,y=n.y??u.y+(d.y-u.y)*i);let S=[{x:w,y:u.y},{x:w,y:d.y}],_=[{x:u.x,y},{x:d.x,y}];l[c]===p?g=c==="x"?S:_:g=c==="x"?_:S}else{let S=[{x:u.x,y:d.y}],_=[{x:d.x,y:u.y}];if(c==="x"?g=l.x===p?_:S:g=l.y===p?S:_,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let E=Math.min(r-1,r-L);l[c]===p?h[c]=(u[c]>e[c]?-1:1)*E:x[c]=(d[c]>a[c]?-1:1)*E}}if(t!==o){let L=c==="x"?"y":"x",E=l[c]===s[L],T=u[L]>d[L],M=u[L]<d[L];(l[c]===1&&(!E&&T||E&&M)||l[c]!==1&&(!E&&M||E&&T))&&(g=c==="x"?S:_)}let A={x:u.x+h.x,y:u.y+h.y},D={x:d.x+x.x,y:d.y+x.y},B=Math.max(Math.abs(A.x-g[0].x),Math.abs(D.x-g[0].x)),U=Math.max(Math.abs(A.y-g[0].y),Math.abs(D.y-g[0].y));B>=U?(w=(A.x+D.x)/2,y=g[0].y):(w=g[0].x,y=(A.y+D.y)/2)}let v={x:u.x+h.x,y:u.y+h.y},C={x:d.x+x.x,y:d.y+x.y};return[[e,...v.x!==g[0].x||v.y!==g[0].y?[v]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],w,y,m,b]}function y6(e,t,a,o){let n=Math.min(mk(e,t)/2,mk(t,a)/2,o),{x:r,y:i}=t;if(e.x===r&&r===a.x||e.y===i&&i===a.y)return`L${r} ${i}`;if(e.y===i){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${i}Q ${r},${i} ${r},${i+n*d}`}let l=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${i+n*s}Q ${r},${i} ${r+n*l},${i}`}function $u({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top,borderRadius:i=5,centerX:l,centerY:s,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,w]=w6({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:l,y:s},offset:u,stepPosition:d}),y=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)y+=y6(f[h-1],f[h],f[h+1],i);return y+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[y,c,p,g,w]}function gk(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Dk(e){let{sourceNode:t,targetNode:a}=e;if(!gk(t)||!gk(a))return null;let o=t.internals.handleBounds||hk(t.handles),n=a.internals.handleBounds||hk(a.handles),r=xk(o?.source??[],e.sourceHandle),i=xk(e.connectionMode===di.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!i)return e.onError?.("008",vo.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let l=r?.position||ie.Bottom,s=i?.position||ie.Top,u=ui(t,r,l),d=ui(a,i,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:l,targetPosition:s}}function hk(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function ui(e,t,a=ie.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:l}=t??jo(e);if(o)return{x:n+i/2,y:r+l/2};switch(t?.position??a){case ie.Top:return{x:n+i/2,y:r};case ie.Right:return{x:n+i,y:r+l/2};case ie.Bottom:return{x:n+i/2,y:r+l};case ie.Left:return{x:n,y:r+l/2}}}function xk(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function ym(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Rk(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((i,l)=>([l.markerStart||o,l.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=ym(s,t);r.has(u)||(i.push({id:u,color:s.color||a,...s}),r.add(u))}}),i),[]).sort((i,l)=>i.id.localeCompare(l.id))}var Pk=1e3,v6=10,l0={nodeOrigin:[0,0],nodeExtent:Us,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},C6={...l0,checkEquality:!0};function s0(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function zk(e,t,a){let o=s0(l0,a);for(let n of e.values())if(n.parentId)u0(n,e,t,o);else{let r=Yu(n,o.nodeOrigin),i=il(n.extent)?n.extent:o.nodeExtent,l=nl(r,i,jo(n));n.internals.positionAbsolute=l}}function S6(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function d0(e){return e==="manual"}function vm(e,t,a,o={}){let n=s0(C6,o),r={i:0},i=new Map(t),l=n?.elevateNodesOnSelect&&!d0(n.zIndexMode)?Pk:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=i.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=Yu(d,n.nodeOrigin),p=il(d.extent)?d.extent:n.nodeExtent,g=nl(c,p,jo(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:S6(d,f),z:Ok(d,l,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),d.parentId&&u0(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function k6(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function u0(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:i,nodeExtent:l,zIndexMode:s}=s0(l0,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}k6(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*v6),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!d0(s)?Pk:0,{x:c,y:p,z:g}=L6(e,d,i,l,f,s),{positionAbsolute:w}=e.internals,y=c!==w.x||p!==w.y;(y||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:c,y:p}:w,z:g}})}function Ok(e,t,a){let o=Vo(e.zIndex)?e.zIndex:0;return d0(a)?o:o+(e.selected?t:0)}function L6(e,t,a,o,n,r){let{x:i,y:l}=t.internals.positionAbsolute,s=jo(e),u=Yu(e,a),d=il(e.extent)?nl(u,e.extent,s):u,f=nl({x:i+d.x,y:l+d.y},o,s);e.extent==="parent"&&(f=_k(f,s,t));let c=Ok(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Cm(e,t,a,o=[0,0]){let n=[],r=new Map;for(let i of e){let l=t.get(i.parentId);if(!l)continue;let s=r.get(i.parentId)?.expandedRect??Vs(l),u=$b(s,i.rect);r.set(i.parentId,{expandedRect:u,parent:l})}return r.size>0&&r.forEach(({expandedRect:i,parent:l},s)=>{let u=l.internals.positionAbsolute,d=jo(l),f=l.origin??o,c=i.x<u.x?Math.round(Math.abs(u.x-i.x)):0,p=i.y<u.y?Math.round(Math.abs(u.y-i.y)):0,g=Math.max(d.width,Math.round(i.width)),w=Math.max(d.height,Math.round(i.height)),y=(g-d.width)*f[0],h=(w-d.height)*f[1];(c>0||p>0||y||h)&&(n.push({id:s,type:"position",position:{x:l.position.x-c+y,y:l.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+c,y:x.position.y+p}})})),(d.width<i.width||d.height<i.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-y:0),height:w+(p?f[1]*p-h:0)}})}),n}function Bk(e,t,a,o,n,r,i){let l=o?.querySelector(".xyflow__viewport"),s=!1;if(!l)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(l),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let w=xm(p.nodeElement),y=g.measured.width!==w.width||g.measured.height!==w.height;if(!!(w.width&&w.height&&(y||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=il(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(b=_k(b,w,C))}else m&&(b=nl(b,m,w));let v={...g,measured:w,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:ck("source",p.nodeElement,x,f,g.id),target:ck("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,v),g.parentId&&u0(v,t,a,{nodeOrigin:n,zIndexMode:i}),s=!0,y&&(u.push({id:g.id,type:"dimensions",dimensions:w}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:Vs(v,n)}))}}if(c.length>0){let p=Cm(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function Hk({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!i&&(i.x!==a[0]||i.y!==a[1]||i.k!==a[2])}function bk(e,t,a,o,n,r){let i=n,l=o.get(i)||new Map;o.set(i,l.set(a,t)),i=`${n}-${e}`;let s=o.get(i)||new Map;if(o.set(i,s.set(a,t)),r){i=`${n}-${e}-${r}`;let u=o.get(i)||new Map;o.set(i,u.set(a,t))}}function c0(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:i=null,targetHandle:l=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:i,targetHandle:l},u=`${n}-${i}--${r}-${l}`,d=`${r}-${l}--${n}-${i}`;bk("source",s,d,e,n,i),bk("target",s,u,e,r,l),t.set(o.id,o)}}function Fk(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:Fk(a,t):!1}function wk(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function _6(e,t,a,o){let n=new Map;for(let[r,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!Fk(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let l=e.get(r);l&&n.set(r,{id:r,position:l.position||{x:0,y:0},distance:{x:a.x-l.internals.positionAbsolute.x,y:a.y-l.internals.positionAbsolute.y},extent:l.extent,parentId:l.parentId,origin:l.origin,expandParent:l.expandParent,internals:{positionAbsolute:l.internals.positionAbsolute||{x:0,y:0}},measured:{width:l.measured.width??0,height:l.measured.height??0}})}return n}function Bb({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[i,l]of t){let s=a.get(i)?.internals.userNode;s&&n.push({...s,position:l.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function I6({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},i=Gs(r,t);return{x:i.x-r.x,y:i.y-r.y}}function Uk({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},i=0,l=new Map,s=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,w=null;function y({noDragClassName:x,handleSelector:m,domNode:b,isSelectable:v,nodeId:C,nodeClickDistance:k=0}){c=aa(b);function S({x:B,y:U}){let{nodeLookup:L,nodeExtent:E,snapGrid:T,snapToGrid:M,nodeOrigin:P,onNodeDrag:O,onSelectionDrag:R,onError:H,updateNodePositions:I}=t();r={x:B,y:U};let F=!1,W=l.size>1,K=W&&E?Ub(qs(l)):null,ee=W&&M?I6({dragItems:l,snapGrid:T,x:B,y:U}):null;for(let[Q,G]of l){if(!L.has(Q))continue;let te={x:B-G.distance.x,y:U-G.distance.y};M&&(te=ee?{x:Math.round(te.x+ee.x),y:Math.round(te.y+ee.y)}:Gs(te,T));let ne=null;if(W&&E&&!G.extent&&K){let{positionAbsolute:ue}=G.internals,be=ue.x-K.x+E[0][0],ke=ue.x+G.measured.width-K.x2+E[1][0],Oe=ue.y-K.y+E[0][1],yt=ue.y+G.measured.height-K.y2+E[1][1];ne=[[be,Oe],[ke,yt]]}let{position:fe,positionAbsolute:re}=Kb({nodeId:Q,nextPosition:te,nodeLookup:L,nodeExtent:ne||E,nodeOrigin:P,onError:H});F=F||G.position.x!==fe.x||G.position.y!==fe.y,G.position=fe,G.internals.positionAbsolute=re}if(g=g||F,!!F&&(I(l,!0),w&&(o||O||!C&&R))){let[Q,G]=Bb({nodeId:C,dragItems:l,nodeLookup:L});o?.(w,l,Q,G),O?.(w,Q,G),C||R?.(w,G)}}async function _(){if(!d)return;let{transform:B,panBy:U,autoPanSpeed:L,autoPanOnNodeDrag:E}=t();if(!E){s=!1,cancelAnimationFrame(i);return}let[T,M]=mm(u,d,L);(T!==0||M!==0)&&(r.x=(r.x??0)-T/B[2],r.y=(r.y??0)-M/B[2],await U({x:T,y:M})&&S(r)),i=requestAnimationFrame(_)}function A(B){let{nodeLookup:U,multiSelectionActive:L,nodesDraggable:E,transform:T,snapGrid:M,snapToGrid:P,selectNodesOnDrag:O,onNodeDragStart:R,onSelectionDragStart:H,unselectNodesAndEdges:I}=t();f=!0,(!O||!v)&&!L&&C&&(U.get(C)?.selected||I()),v&&O&&C&&e?.(C);let F=Wu(B.sourceEvent,{transform:T,snapGrid:M,snapToGrid:P,containerBounds:d});if(r=F,l=_6(U,E,F,C),l.size>0&&(a||R||!C&&H)){let[W,K]=Bb({nodeId:C,dragItems:l,nodeLookup:U});a?.(B.sourceEvent,l,W,K),R?.(B.sourceEvent,W,K),C||H?.(B.sourceEvent,K)}}let D=qp().clickDistance(k).on("start",B=>{let{domNode:U,nodeDragThreshold:L,transform:E,snapGrid:T,snapToGrid:M}=t();d=U?.getBoundingClientRect()||null,p=!1,g=!1,w=B.sourceEvent,L===0&&A(B),r=Wu(B.sourceEvent,{transform:E,snapGrid:T,snapToGrid:M,containerBounds:d}),u=Go(B.sourceEvent,d)}).on("drag",B=>{let{autoPanOnNodeDrag:U,transform:L,snapGrid:E,snapToGrid:T,nodeDragThreshold:M,nodeLookup:P}=t(),O=Wu(B.sourceEvent,{transform:L,snapGrid:E,snapToGrid:T,containerBounds:d});if(w=B.sourceEvent,(B.sourceEvent.type==="touchmove"&&B.sourceEvent.touches.length>1||C&&!P.has(C))&&(p=!0),!p){if(!s&&U&&f&&(s=!0,_()),!f){let R=Go(B.sourceEvent,d),H=R.x-u.x,I=R.y-u.y;Math.sqrt(H*H+I*I)>M&&A(B)}(r.x!==O.xSnapped||r.y!==O.ySnapped)&&l&&f&&(u=Go(B.sourceEvent,d),S(O))}}).on("end",B=>{if(!f||p){p&&l.size>0&&t().updateNodePositions(l,!1);return}if(s=!1,f=!1,cancelAnimationFrame(i),l.size>0){let{nodeLookup:U,updateNodePositions:L,onNodeDragStop:E,onSelectionDragStop:T}=t();if(g&&(L(l,!1),g=!1),n||E||!C&&T){let[M,P]=Bb({nodeId:C,dragItems:l,nodeLookup:U,dragging:!1});n?.(B.sourceEvent,l,M,P),E?.(B.sourceEvent,M,P),C||T?.(B.sourceEvent,P)}}}).filter(B=>{let U=B.target;return!B.button&&(!x||!wk(U,`.${x}`,b))&&(!m||wk(U,m,b))});c.call(D)}function h(){c?.on(".drag",null)}return{update:y,destroy:h}}function M6(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Zu(n,Vs(r))>0&&o.push(r);return o}var N6=250;function E6(e,t,a,o){let n=[],r=1/0,i=M6(e,a,t+N6);for(let l of i){let s=[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=ui(l,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let l=o.type==="source"?"target":"source";return n.find(s=>s.type===l)??n[0]}return n[0]}function qk(e,t,a,o,n,r=!1){let i=o.get(e);if(!i)return null;let l=n==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],s=(a?l?.find(u=>u.id===a):l?.[0])??null;return s&&r?{...s,...ui(i,s,s.position,!0)}:s}function Vk(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function T6(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var Gk=()=>!0;function A6(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:i,domNode:l,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:w,onConnectEnd:y,isValidConnection:h=Gk,onReconnectEnd:x,updateConnection:m,getTransform:b,getFromHandle:v,autoPanSpeed:C,dragThreshold:k=1,handleDomNode:S}){let _=o0(e.target),A=0,D,{x:B,y:U}=Go(e),L=Vk(r,S),E=l?.getBoundingClientRect(),T=!1;if(!E||!L)return;let M=qk(n,L,o,s,t);if(!M)return;let P=Go(e,E),O=!1,R=null,H=!1,I=null;function F(){if(!d||!E)return;let[fe,re]=mm(P,E,C);c({x:fe,y:re}),A=requestAnimationFrame(F)}let W={...M,nodeId:n,type:L,position:M.position},K=s.get(n),Q={inProgress:!0,isValid:null,from:ui(K,W,ie.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:K,to:P,toHandle:null,toPosition:dk[W.position],toNode:null,pointer:P};function G(){T=!0,m(Q),g?.(e,{nodeId:n,handleId:o,handleType:L})}k===0&&G();function te(fe){if(!T){let{x:yt,y:vt}=Go(fe),so=yt-B,ae=vt-U;if(!(so*so+ae*ae>k*k))return;G()}if(!v()||!W){ne(fe);return}let re=b();P=Go(fe,E),D=E6(js(P,re,!1,[1,1]),a,s,W),O||(F(),O=!0);let ue=jk(fe,{handle:D,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:i?"target":"source",isValidConnection:h,doc:_,lib:u,flowId:f,nodeLookup:s});I=ue.handleDomNode,R=ue.connection,H=T6(!!D,ue.isValid);let be=s.get(n),ke=be?ui(be,W,ie.Left,!0):Q.from,Oe={...Q,from:ke,isValid:H,to:ue.toHandle&&H?rl({x:ue.toHandle.x,y:ue.toHandle.y},re):P,toHandle:ue.toHandle,toPosition:H&&ue.toHandle?ue.toHandle.position:dk[W.position],toNode:ue.toHandle?s.get(ue.toHandle.nodeId):null,pointer:P};m(Oe),Q=Oe}function ne(fe){if(!("touches"in fe&&fe.touches.length>0)){if(T){(D||I)&&R&&H&&w?.(R);let{inProgress:re,...ue}=Q,be={...ue,toPosition:Q.toHandle?Q.toPosition:null};y?.(fe,be),r&&x?.(fe,be)}p(),cancelAnimationFrame(A),O=!1,H=!1,R=null,I=null,_.removeEventListener("mousemove",te),_.removeEventListener("mouseup",ne),_.removeEventListener("touchmove",te),_.removeEventListener("touchend",ne)}}_.addEventListener("mousemove",te),_.addEventListener("mouseup",ne),_.addEventListener("touchmove",te),_.addEventListener("touchend",ne)}function jk(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:i,lib:l,flowId:s,isValidConnection:u=Gk,nodeLookup:d}){let f=r==="target",c=t?i.querySelector(`.${l}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Go(e),w=i.elementFromPoint(p,g),y=w?.classList.contains(`${l}-flow__handle`)?w:c,h={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let x=Vk(void 0,y),m=y.getAttribute("data-nodeid"),b=y.getAttribute("data-handleid"),v=y.classList.contains("connectable"),C=y.classList.contains("connectableend");if(!m||!x)return h;let k={source:f?m:o,sourceHandle:f?b:n,target:f?o:m,targetHandle:f?n:b};h.connection=k;let _=v&&C&&(a===di.Strict?f&&x==="source"||!f&&x==="target":m!==o||b!==n);h.isValid=_&&u(k),h.toHandle=qk(m,x,b,d,a,!0)}return h}var Sm={onPointerDown:A6,isValid:jk};function Xk({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=aa(e);function r({translateExtent:l,width:s,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),v=m.sourceEvent.ctrlKey&&Xs()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,k=b[2]*Math.pow(2,C*v);t.scaleTo(k)},w=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(w=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let v=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[v[0]-w[0],v[1]-w[1]];w=v;let k=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),S={x:b[0]-C[0]*k,y:b[1]-C[1]*k},_=[[0,0],[s,u]];t.setViewportConstrained({x:S.x,y:S.y,zoom:b[2]},_,l)},x=dm().on("start",y).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(x,{})}function i(){n.on("zoom",null)}return{update:r,destroy:i,pointer:Ta}}var km=e=>({x:e.x,y:e.y,zoom:e.k}),Hb=({x:e,y:t,zoom:a})=>ol.translate(e,t).scale(a),si=(e,t)=>e.target.closest(`.${t}`),Wk=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),D6=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Fb=(e,t=0,a=D6,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},Yk=e=>{let t=e.ctrlKey&&Xs()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function R6({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:i,onPanZoomStart:l,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(si(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&i){let y=Ta(d),h=Yk(d),x=f*Math.pow(2,h);o.scaleTo(a,x,y,d);return}let c=d.deltaMode===1?20:1,p=n===tn.Vertical?0:d.deltaX*c,g=n===tn.Horizontal?0:d.deltaY*c;!Xs()&&d.shiftKey&&n!==tn.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let w=km(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,w):(e.isPanScrolling=!0,l?.(d,w)),e.panScrollTimeout=setTimeout(()=>{u?.(d,w),e.isPanScrolling=!1},150)}}function P6({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",i=!t&&r&&!o.ctrlKey,l=si(o,e);if(o.ctrlKey&&r&&l&&o.preventDefault(),i||l)return null;o.preventDefault(),a.call(this,o,n)}}function z6({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=km(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function O6({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&Wk(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,km(r.transform))}}function B6({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&Wk(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&r(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let l=km(i.transform);e.prevViewport=l,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(i.sourceEvent,l)},a?150:0)}}}function H6({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:l,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,w=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(si(c,`${d}-flow__node`)||si(c,`${d}-flow__edge`)||si(c,`${d}-flow__selection`)||si(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!i&&!o||l||f&&!w||si(c,s)&&w||si(c,u)&&(!w||r&&w&&!t)||!o&&c.ctrlKey&&w)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&w||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let y=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||w||e)&&y}}function Zk({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:i,onPanZoomEnd:l,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(U=>{let L=U[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=dm().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=aa(e).call(p);b({x:n.x,y:n.y,zoom:Fs(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let w=g.on("wheel.zoom"),y=g.on("dblclick.zoom");p.wheelDelta(Yk);async function h(U,L){return g?new Promise(E=>{p?.interpolate(L?.interpolate==="linear"?cr:el).transform(Fb(g,L?.duration,L?.ease,()=>E(!0)),U)}):!1}function x({noWheelClassName:U,noPanClassName:L,onPaneContextMenu:E,userSelectionActive:T,panOnScroll:M,panOnDrag:P,panOnScrollMode:O,panOnScrollSpeed:R,preventScrolling:H,zoomOnPinch:I,zoomOnScroll:F,zoomOnDoubleClick:W,panActivationKeyPressed:K=!1,zoomActivationKeyPressed:ee,lib:Q,onTransformChange:G,connectionInProgress:te,paneClickDistance:ne,selectionOnDrag:fe}){T&&!u.isZoomingOrPanning&&m();let re=M&&!ee&&!T;p.clickDistance(fe?1/0:!Vo(ne)||ne<0?0:ne);let ue=re?R6({zoomPanValues:u,noWheelClassName:U,d3Selection:g,d3Zoom:p,panOnScrollMode:O,panOnScrollSpeed:R,zoomOnPinch:I,onPanZoomStart:i,onPanZoom:r,onPanZoomEnd:l}):P6({noWheelClassName:U,preventScrolling:H,d3ZoomHandler:w});g.on("wheel.zoom",ue,{passive:!1});let be=z6({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:i});p.on("start",be);let ke=O6({zoomPanValues:u,panOnDrag:P,onPaneContextMenu:!!E,onPanZoom:r,onTransformChange:G});p.on("zoom",ke);let Oe=B6({zoomPanValues:u,panOnDrag:P,panOnScroll:M,onPaneContextMenu:E,onPanZoomEnd:l,onDraggingChange:s});p.on("end",Oe);let yt=H6({panActivationKeyPressed:K,zoomActivationKeyPressed:ee,panOnDrag:P,zoomOnScroll:F,panOnScroll:M,zoomOnDoubleClick:W,zoomOnPinch:I,userSelectionActive:T,noPanClassName:L,noWheelClassName:U,lib:Q,connectionInProgress:te});p.filter(yt),W?g.on("dblclick.zoom",y):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(U,L,E){let T=Hb(U),M=p?.constrain()(T,L,E);return M&&await h(M),M}async function v(U,L){let E=Hb(U);return await h(E,L),E}function C(U){if(g){let L=Hb(U),E=g.property("__zoom");(E.k!==U.zoom||E.x!==U.x||E.y!==U.y)&&p?.transform(g,L,null,{sync:!0})}}function k(){let U=g?Xu(g.node()):{x:0,y:0,k:1};return{x:U.x,y:U.y,zoom:U.k}}async function S(U,L){return g?new Promise(E=>{p?.interpolate(L?.interpolate==="linear"?cr:el).scaleTo(Fb(g,L?.duration,L?.ease,()=>E(!0)),U)}):!1}async function _(U,L){return g?new Promise(E=>{p?.interpolate(L?.interpolate==="linear"?cr:el).scaleBy(Fb(g,L?.duration,L?.ease,()=>E(!0)),U)}):!1}function A(U){p?.scaleExtent(U)}function D(U){p?.translateExtent(U)}function B(U){let L=!Vo(U)||U<0?0:U;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:v,setViewportConstrained:b,getViewport:k,scaleTo:S,scaleBy:_,setScaleExtent:A,setTranslateExtent:D,syncViewport:C,setClickDistance:B}}var ci;(function(e){e.Line="line",e.Handle="handle"})(ci||(ci={}));function F6({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let i=e-t,l=a-o,s=[i>0?1:i<0?-1:0,l>0?1:l<0?-1:0];return i&&n&&(s[0]=s[0]*-1),l&&r&&(s[1]=s[1]*-1),s}function yk(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function ii(e,t){return Math.max(0,t-e)}function li(e,t){return Math.max(0,e-t)}function cm(e,t,a){return Math.max(0,t-e,e-a)}function vk(e,t){return e?!t:t}function U6(e,t,a,o,n,r,i,l){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:w,maxWidth:y,minHeight:h,maxHeight:x}=o,{x:m,y:b,width:v,height:C,aspectRatio:k}=e,S=Math.floor(d?p-e.pointerX:0),_=Math.floor(f?g-e.pointerY:0),A=v+(s?-S:S),D=C+(u?-_:_),B=-r[0]*v,U=-r[1]*C,L=cm(A,w,y),E=cm(D,h,x);if(i){let P=0,O=0;s&&S<0?P=ii(m+S+B,i[0][0]):!s&&S>0&&(P=li(m+A+B,i[1][0])),u&&_<0?O=ii(b+_+U,i[0][1]):!u&&_>0&&(O=li(b+D+U,i[1][1])),L=Math.max(L,P),E=Math.max(E,O)}if(l){let P=0,O=0;s&&S>0?P=li(m+S,l[0][0]):!s&&S<0&&(P=ii(m+A,l[1][0])),u&&_>0?O=li(b+_,l[0][1]):!u&&_<0&&(O=ii(b+D,l[1][1])),L=Math.max(L,P),E=Math.max(E,O)}if(n){if(d){let P=cm(A/k,h,x)*k;if(L=Math.max(L,P),i){let O=0;!s&&!u||s&&!u&&c?O=li(b+U+A/k,i[1][1])*k:O=ii(b+U+(s?S:-S)/k,i[0][1])*k,L=Math.max(L,O)}if(l){let O=0;!s&&!u||s&&!u&&c?O=ii(b+A/k,l[1][1])*k:O=li(b+(s?S:-S)/k,l[0][1])*k,L=Math.max(L,O)}}if(f){let P=cm(D*k,w,y)/k;if(E=Math.max(E,P),i){let O=0;!s&&!u||u&&!s&&c?O=li(m+D*k+B,i[1][0])/k:O=ii(m+(u?_:-_)*k+B,i[0][0])/k,E=Math.max(E,O)}if(l){let O=0;!s&&!u||u&&!s&&c?O=ii(m+D*k,l[1][0])/k:O=li(m+(u?_:-_)*k,l[0][0])/k,E=Math.max(E,O)}}}_=_+(_<0?E:-E),S=S+(S<0?L:-L),n&&(c?A>D*k?_=(vk(s,u)?-S:S)/k:S=(vk(s,u)?-_:_)*k:d?(_=S/k,u=s):(S=_*k,s=u));let T=s?m+S:m,M=u?b+_:b;return{width:v+(s?-S:S),height:C+(u?-_:_),x:r[0]*S*(s?-1:1)+T,y:r[1]*_*(u?-1:1)+M}}var Kk={width:0,height:0,x:0,y:0},q6={...Kk,pointerX:0,pointerY:0,aspectRatio:1};function V6(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,i=e.measured.height??0,l=a[0]*r,s=a[1]*i;return[[o-l,n-s],[o+r-l,n+i-s]]}function $k({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=aa(e),i={controlDirection:yk("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function l({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:w,shouldResize:y}){let h={...Kk},x={...q6};i={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:yk(u)};let m,b=null,v=[],C,k,S,_=!1,A=qp().on("start",D=>{let{nodeLookup:B,transform:U,snapGrid:L,snapToGrid:E,nodeOrigin:T,paneDomNode:M}=a();if(m=B.get(t),!m)return;b=M?.getBoundingClientRect()??null;let{xSnapped:P,ySnapped:O}=Wu(D.sourceEvent,{transform:U,snapGrid:L,snapToGrid:E,containerBounds:b});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:P,pointerY:O,aspectRatio:h.width/h.height},C=void 0,k=il(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=B.get(m.parentId)),C&&m.extent==="parent"&&(k=[[0,0],[C.measured.width,C.measured.height]]),v=[],S=void 0;for(let[R,H]of B)if(H.parentId===t&&(v.push({id:R,position:{...H.position},extent:H.extent}),H.extent==="parent"||H.expandParent)){let I=V6(H,m,H.origin??T);S?S=[[Math.min(I[0][0],S[0][0]),Math.min(I[0][1],S[0][1])],[Math.max(I[1][0],S[1][0]),Math.max(I[1][1],S[1][1])]]:S=I}p?.(D,{...h})}).on("drag",D=>{let{transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:E}=a(),T=Wu(D.sourceEvent,{transform:B,snapGrid:U,snapToGrid:L,containerBounds:b}),M=[];if(!m)return;let{x:P,y:O,width:R,height:H}=h,I={},F=m.origin??E,{width:W,height:K,x:ee,y:Q}=U6(x,i.controlDirection,T,i.boundaries,i.keepAspectRatio,F,k,S),G=W!==R,te=K!==H,ne=ee!==P&&G,fe=Q!==O&&te;if(!ne&&!fe&&!G&&!te)return;if((ne||fe||F[0]===1||F[1]===1)&&(I.x=ne?ee:h.x,I.y=fe?Q:h.y,h.x=I.x,h.y=I.y,v.length>0)){let ke=ee-P,Oe=Q-O;for(let yt of v)yt.position={x:yt.position.x-ke+F[0]*(W-R),y:yt.position.y-Oe+F[1]*(K-H)},M.push(yt)}if((G||te)&&(I.width=G&&(!i.resizeDirection||i.resizeDirection==="horizontal")?W:h.width,I.height=te&&(!i.resizeDirection||i.resizeDirection==="vertical")?K:h.height,h.width=I.width,h.height=I.height),C&&m.expandParent){let ke=F[0]*(I.width??0);I.x&&I.x<ke&&(h.x=ke,x.x=x.x-(I.x-ke));let Oe=F[1]*(I.height??0);I.y&&I.y<Oe&&(h.y=Oe,x.y=x.y-(I.y-Oe))}let re=F6({width:h.width,prevWidth:R,height:h.height,prevHeight:H,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),ue={...h,direction:re};y?.(D,ue)!==!1&&(_=!0,g?.(D,ue),o(I,M))}).on("end",D=>{_&&(w?.(D,{...h}),n?.({...h}),_=!1)});r.call(A)}function s(){r.on(".drag",null)}return{update:l,destroy:s}}var uL=N($(),1),cL=N(rL(),1);var lL={},iL=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(lL.env?lL.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},sL=e=>e?iL(e):iL;var{useDebugValue:l8}=uL.default,{useSyncExternalStoreWithSelector:s8}=cL.default,d8=e=>e;function p0(e,t=d8,a){let o=s8(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return l8(o),o}var dL=(e,t)=>{let a=sL(e),o=(n,r=t)=>p0(a,n,r);return Object.assign(o,a),o},fL=(e,t)=>e?dL(e,t):dL;function Je(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var u8=N(Qt()),Nm=(0,V.createContext)(null),c8=Nm.Provider,HL=vo.error001("react");function _e(e,t){let a=(0,V.useContext)(Nm);if(a===null)throw new Error(HL);return p0(a,e,t)}function ct(){let e=(0,V.useContext)(Nm);if(e===null)throw new Error(HL);return(0,V.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var pL={display:"none"},f8={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},FL="react-flow__node-desc",UL="react-flow__edge-desc",p8="react-flow__aria-live",m8=e=>e.ariaLiveMessage,g8=e=>e.ariaLabelConfig;function h8({rfId:e}){let t=_e(m8);return(0,q.jsx)("div",{id:`${p8}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:f8,children:t})}function x8({rfId:e,disableKeyboardA11y:t}){let a=_e(g8);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{id:`${FL}-${e}`,style:pL,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,q.jsx)("div",{id:`${UL}-${e}`,style:pL,children:a["edge.a11yDescription.default"]}),!t&&(0,q.jsx)(h8,{rfId:e})]})}var Em=(0,V.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let i=`${e}`.split("-");return(0,q.jsx)("div",{className:Lt(["react-flow__panel",a,...i]),style:o,ref:r,...n,children:t})});Em.displayName="Panel";var mL="https://reactflow.dev?utm_source=attribution";function b8({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,q.jsx)(Em,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${mL}`,children:(0,q.jsx)("a",{href:mL,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var w8=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},_m=e=>e.id;function y8(e,t){return Je(e.selectedNodes.map(_m),t.selectedNodes.map(_m))&&Je(e.selectedEdges.map(_m),t.selectedEdges.map(_m))}function v8({onSelectionChange:e}){let t=ct(),{selectedNodes:a,selectedEdges:o}=_e(w8,y8);return(0,V.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var C8=e=>!!e.onSelectionChangeHandlers;function S8({onSelectionChange:e}){let t=_e(C8);return e||t?(0,q.jsx)(v8,{onSelectionChange:e}):null}var qL=[0,0],k8={x:0,y:0,zoom:1},L8=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],gL=[...L8,"rfId"],_8=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),hL={translateExtent:Us,nodeOrigin:qL,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function I8(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:i,reset:l,setDefaultNodesAndEdges:s}=_e(_8,Je),u=ct();(0,V.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=hL,l()}),[]);let d=(0,V.useRef)(hL);return(0,V.useEffect)(()=>{for(let f of gL){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?i(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:Nk(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},gL.map(f=>e[f])),null}function xL(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function M8(e){let[t,a]=(0,V.useState)(e==="system"?null:e);return(0,V.useEffect)(()=>{if(e!=="system"){a(e);return}let o=xL(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:xL()?.matches?"dark":"light"}var bL=typeof document<"u"?document:null;function Qu(e=null,t={target:bL,actInsideInputWithModifier:!0}){let[a,o]=(0,V.useState)(!1),n=(0,V.useRef)(!1),r=(0,V.useRef)(new Set([])),[i,l]=(0,V.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,V.useEffect)(()=>{let s=t?.target??bL,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&n0(p))return!1;let w=yL(p.code,l);if(r.current.add(p[w]),wL(i,r.current,!1)){let y=p.composedPath?.()?.[0]||p.target,h=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=yL(p.code,l);wL(i,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function wL(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function yL(e,t){return t.includes(e)?"code":"key"}var N8=()=>{let e=ct();return(0,V.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:i,panZoom:l}=e.getState(),s=Ku(t,o,n,r,i,a?.padding??.1);return l?(await l.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:i}=e.getState();if(!i)return t;let{x:l,y:s}=i.getBoundingClientRect(),u={x:t.x-l,y:t.y-s},d=a.snapGrid??n,f=a.snapToGrid??r;return js(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),i=rl(t,a);return{x:i.x+n,y:i.y+r}}}),[])};function VL(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let i=o.get(r.id);i?i.push(r):o.set(r.id,[r])}for(let r of t){let i=o.get(r.id);if(!i){a.push(r);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){a.push({...i[0].item});continue}let l={...r};for(let s of i)E8(s,l);a.push(l)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function E8(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function x0(e,t){return VL(e,t)}function b0(e,t){return VL(e,t)}function ll(e,t){return{id:e,type:"select",selected:t}}function Zs(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let i=t.has(n);!(r.selected===void 0&&!i)&&r.selected!==i&&(a&&(r.selected=i),o.push(ll(r.id,i)))}return o}function vL({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let i=t.get(r.id),l=i?.internals?.userNode??i;l!==void 0&&l!==r&&a.push({id:r.id,item:r,type:"replace"}),l===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function CL(e){return{id:e.id,type:"remove"}}var T8=Jb("React Flow","https://reactflow.dev/");function A8(e,t,a={}){return Ak(e,t,{...a,onError:a.onError??T8})}var SL=e=>Ck(e),D8=e=>Xb(e);function GL(e){return(0,V.forwardRef)(e)}var jL=typeof window<"u"?V.useLayoutEffect:V.useEffect;function kL(e){let[t,a]=(0,V.useState)(BigInt(0)),[o]=(0,V.useState)(()=>R8(()=>a(n=>n+BigInt(1))));return jL(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function R8(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var XL=(0,V.createContext)(null);function P8({children:e}){let t=ct(),a=(0,V.useCallback)(l=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),w=s;for(let h of l)w=typeof h=="function"?h(w):h;let y=vL({items:w,lookup:c});for(let h of g.values())y=h(y);d&&u(w),y.length>0?f?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=kL(a),n=(0,V.useCallback)(l=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let g of l)p=typeof g=="function"?g(p):g;d?u(p):f&&f(vL({items:p,lookup:c}))},[]),r=kL(n),i=(0,V.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,q.jsx)(XL.Provider,{value:i,children:e})}function z8(){let e=(0,V.useContext)(XL);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var O8=e=>!!e.panZoom;function Ca(){let e=N8(),t=ct(),a=z8(),o=_e(O8),n=(0,V.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),i=f=>{a.nodeQueue.push(f)},l=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=SL(f)?f:c.get(f.id),w=g.parentId?t0(g.position,g.measured,g.parentId,c,p):g.position,y={...g,position:w,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Vs(y)},u=(f,c,p={replace:!1})=>{i(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&SL(y)?y:{...w,...y}}return w}))},d=(f,c,p={replace:!1})=>{l(g=>g.map(w=>{if(w.id===f){let y=typeof c=="function"?c(w):c;return p.replace&&D8(y)?y:{...w,...y}}return w}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:i,setEdges:l,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,w,y]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y:w,zoom:y}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:w,onEdgesDelete:y,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:v,edges:C}=await Lk({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:b}),k=C.length>0,S=v.length>0;if(k){let _=C.map(CL);y?.(C),x(_)}if(S){let _=v.map(CL);w?.(v),h(_)}return(S||k)&&m?.({nodes:v,edges:C}),{deletedNodes:v,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=Qb(f),w=g?f:s(f),y=p!==void 0;return w?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=Vs(y?h:x),b=Zu(m,w);return c&&b>0||b>=m.width*m.height||b>=w.width*w.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let w=Qb(f)?f:s(f);if(!w)return!1;let y=Zu(w,c);return p&&y>0||y>=c.width*c.height||y>=w.width*w.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let w=typeof c=="function"?c(g):c;return p.replace?{...g,data:w}:{...g,data:{...g.data,...w}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Zb(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??Mk();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,V.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var LL=e=>e.selected,B8=typeof window<"u"?window:void 0;function H8({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=ct(),{deleteElements:o}=Ca(),n=Qu(e,{actInsideInputWithModifier:!1}),r=Qu(t,{target:B8});(0,V.useEffect)(()=>{if(n){let{edges:i,nodes:l}=a.getState();o({nodes:l.filter(LL),edges:i.filter(LL)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,V.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function F8(e){let t=ct();(0,V.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=xm(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",vo.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Tm={position:"absolute",width:"100%",height:"100%",top:0,left:0},U8=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function q8({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:i=tn.Free,zoomOnDoubleClick:l=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:w,noWheelClassName:y,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:v}){let C=ct(),k=(0,V.useRef)(null),{userSelectionActive:S,lib:_,connectionInProgress:A}=_e(U8,Je),D=Qu(p),B=(0,V.useRef)();F8(k);let U=(0,V.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[x,m]);return(0,V.useEffect)(()=>{if(k.current){B.current=Zk({domNode:k.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:M=>C.setState(P=>P.paneDragging===M?P:{paneDragging:M}),onPanZoomStart:(M,P)=>{let{onViewportChangeStart:O,onMoveStart:R}=C.getState();R?.(M,P),O?.(P)},onPanZoom:(M,P)=>{let{onViewportChange:O,onMove:R}=C.getState();R?.(M,P),O?.(P)},onPanZoomEnd:(M,P)=>{let{onViewportChangeEnd:O,onMoveEnd:R}=C.getState();R?.(M,P),O?.(P)}});let{x:L,y:E,zoom:T}=B.current.getViewport();return C.setState({panZoom:B.current,transform:[L,E,T],domNode:k.current.closest(".react-flow")}),()=>{B.current?.destroy()}}},[]),(0,V.useEffect)(()=>{B.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:l,panOnDrag:s,zoomActivationKeyPressed:D,preventScrolling:g,noPanClassName:h,userSelectionActive:S,noWheelClassName:y,lib:_,onTransformChange:U,connectionInProgress:A,selectionOnDrag:v,paneClickDistance:b})},[e,t,a,o,n,r,i,l,s,D,g,h,S,y,_,U,A,v,b]),(0,q.jsx)("div",{className:"react-flow__renderer",ref:k,style:Tm,children:w})}var V8=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function G8(){let{userSelectionActive:e,userSelectionRect:t}=_e(V8,Je);return e&&t?(0,q.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var m0=(e,t)=>a=>{a.target===t.current&&e?.(a)},j8=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function X8({isSelecting:e,selectionKeyPressed:t,selectionMode:a=pr.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:i,onSelectionStart:l,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:w}){let y=(0,V.useRef)(0),h=ct(),{userSelectionActive:x,elementsSelectable:m,dragging:b,panBy:v,autoPanSpeed:C}=_e(j8,Je),k=m&&(e||x),S=(0,V.useRef)(null),_=(0,V.useRef)(),A=(0,V.useRef)(new Set),D=(0,V.useRef)(new Set),B=(0,V.useRef)(!1),U=(0,V.useRef)(!1),L=(0,V.useRef)({x:0,y:0}),E=(0,V.useRef)(!1),T=G=>{if(U.current||B.current||h.getState().connection.inProgress){U.current=!1,B.current=!1;return}u?.(G),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},M=G=>{if(Array.isArray(o)&&o?.includes(2)){G.preventDefault();return}d?.(G)},P=f?G=>f(G):void 0,O=G=>{U.current&&(G.stopPropagation(),U.current=!1)},R=G=>{if(G.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:te,transform:ne}=h.getState();if(_.current=te?.getBoundingClientRect(),!_.current)return;let fe=G.target===S.current;if(!fe&&!!G.target.closest(".nokey")||!e||!(i&&fe||t)||G.button!==0||!G.isPrimary)return;G.target?.setPointerCapture?.(G.pointerId),U.current=!1;let{x:be,y:ke}=Go(G.nativeEvent,_.current),Oe=js({x:be,y:ke},ne);h.setState({userSelectionRect:{width:0,height:0,startX:Oe.x,startY:Oe.y,x:be,y:ke}}),fe||(G.stopPropagation(),G.preventDefault())};function H(G,te){let{userSelectionRect:ne}=h.getState();if(!ne)return;let{transform:fe,nodeLookup:re,edgeLookup:ue,connectionLookup:be,triggerNodeChanges:ke,triggerEdgeChanges:Oe,defaultEdgeOptions:yt}=h.getState(),vt={x:ne.startX,y:ne.startY},{x:so,y:ae}=rl(vt,fe),Me={startX:vt.x,startY:vt.y,x:G<so?G:so,y:te<ae?te:ae,width:Math.abs(G-so),height:Math.abs(te-ae)},it=A.current,Ct=D.current;A.current=new Set(pm(re,Me,fe,a===pr.Partial,!0).map($t=>$t.id)),D.current=new Set;let He=yt?.selectable??!0;for(let $t of A.current){let Nt=be.get($t);if(Nt)for(let{edgeId:Va}of Nt.values()){let qn=ue.get(Va);qn&&(qn.selectable??He)&&D.current.add(Va)}}if(!a0(it,A.current)){let $t=Zs(re,A.current,!0);ke($t)}if(!a0(Ct,D.current)){let $t=Zs(ue,D.current);Oe($t)}h.setState({userSelectionRect:Me,userSelectionActive:!0,nodesSelectionActive:!1})}function I(){if(!n||!_.current)return;let[G,te]=mm(L.current,_.current,C);v({x:G,y:te}).then(ne=>{if(!U.current||!ne){y.current=requestAnimationFrame(I);return}let{x:fe,y:re}=L.current;H(fe,re),y.current=requestAnimationFrame(I)})}let F=()=>{cancelAnimationFrame(y.current),y.current=0,E.current=!1};(0,V.useEffect)(()=>()=>F(),[]);let W=G=>{let{userSelectionRect:te,transform:ne,resetSelectedElements:fe}=h.getState();if(!_.current||!te)return;let{x:re,y:ue}=Go(G.nativeEvent,_.current);L.current={x:re,y:ue};let be=rl({x:te.startX,y:te.startY},ne);if(!U.current){let ke=t?0:r;if(Math.hypot(re-be.x,ue-be.y)<=ke)return;fe(),l?.(G)}U.current=!0,E.current||(I(),E.current=!0),H(re,ue)},K=G=>{if(!k){G.target===S.current&&h.getState().connection.inProgress&&(B.current=!0);return}G.button===0&&(G.target?.releasePointerCapture?.(G.pointerId),!x&&G.target===S.current&&h.getState().userSelectionRect&&T?.(G),h.setState({userSelectionActive:!1,userSelectionRect:null}),U.current&&(s?.(G),h.setState({nodesSelectionActive:A.current.size>0})),F())},ee=G=>{G.target?.releasePointerCapture?.(G.pointerId),F()},Q=o===!0||Array.isArray(o)&&o.includes(0);return(0,q.jsxs)("div",{className:Lt(["react-flow__pane",{draggable:Q,dragging:b,selection:e}]),onClick:k?void 0:m0(T,S),onContextMenu:m0(M,S),onWheel:m0(P,S),onPointerEnter:k?void 0:c,onPointerMove:k?W:p,onPointerUp:K,onPointerCancel:k?ee:void 0,onPointerDownCapture:k?R:void 0,onClickCapture:k?O:void 0,onPointerLeave:g,ref:S,style:Tm,children:[w,(0,q.jsx)(G8,{})]})}function h0({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:i,nodeLookup:l,onError:s}=t.getState(),u=l.get(e);if(!u){s?.("012",vo.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&i)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function WL({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:i}){let l=ct(),[s,u]=(0,V.useState)(!1),d=(0,V.useRef)();return(0,V.useEffect)(()=>{if(!t)return d.current=Uk({getStoreItems:()=>l.getState(),onNodeMouseDown:f=>{h0({id:f,store:l,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,l,e]),(0,V.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:i})},[a,o,t,r,e,n,i]),s}var W8=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function YL(){let e=ct();return(0,V.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:i,onError:l,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=W8(i),p=n?r[0]:5,g=n?r[1]:5,w=a.direction.x*p*a.factor,y=a.direction.y*g*a.factor;for(let[,h]of u){if(!c(h))continue;let x={x:h.internals.positionAbsolute.x+w,y:h.internals.positionAbsolute.y+y};n&&(x=Gs(x,r));let{position:m,positionAbsolute:b}=Kb({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:l});h.position=m,h.internals.positionAbsolute=b,f.set(h.id,h)}s(f)},[])}var w0=(0,V.createContext)(null),Y8=w0.Provider;w0.Consumer;var ZL=()=>(0,V.useContext)(w0),Z8=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),KL=(0,V.createContext)(null);function K8({children:e}){let t=_e(Z8,Je);return(0,q.jsx)(KL.Provider,{value:t,children:e})}function $8(){let e=(0,V.useContext)(KL);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var Q8={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},J8=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:i}=o,{fromHandle:l,toHandle:s,isValid:u}=i;if(!l&&!n)return Q8;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:l?.nodeId===e&&l?.id===t&&l?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===di.Strict?l?.type!==a:e!==l?.nodeId||t!==l?.id,connectionInProcess:!!l,clickConnectionInProcess:!!n,valid:d&&u}};function eD({type:e="source",position:t=ie.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:i,onConnect:l,children:s,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=i||null,w=e==="target",y=ct(),h=ZL(),{connectOnClick:x,noPanClassName:m,rfId:b}=$8(),{connectingFrom:v,connectingTo:C,clickConnecting:k,isPossibleEndHandle:S,connectionInProcess:_,clickConnectionInProcess:A,valid:D}=_e(J8(h,g,e),Je);h||y.getState().onError?.("010",vo.error010());let B=E=>{let{defaultEdgeOptions:T,onConnect:M,hasDefaultEdges:P}=y.getState(),O={...T,...E};if(P){let{edges:R,setEdges:H,onError:I}=y.getState();H(A8(O,R,{onError:I}))}M?.(O),l?.(O)},U=E=>{if(!h)return;let T=r0(E.nativeEvent);if(n&&(T&&E.button===0||!T)){let M=y.getState();Sm.onPointerDown(E.nativeEvent,{handleDomNode:E.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:w,handleId:g,nodeId:h,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...P)=>y.getState().onConnectEnd?.(...P),updateConnection:M.updateConnection,onConnect:B,isValidConnection:a||((...P)=>y.getState().isValidConnection?.(...P)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}T?d?.(E):f?.(E)},L=E=>{let{onClickConnectStart:T,onClickConnectEnd:M,connectionClickStartHandle:P,connectionMode:O,isValidConnection:R,lib:H,rfId:I,nodeLookup:F,connection:W}=y.getState();if(!h||!P&&!n)return;if(!P){T?.(E.nativeEvent,{nodeId:h,handleId:g,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let K=o0(E.target),ee=a||R,{connection:Q,isValid:G}=Sm.isValid(E.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:O,fromNodeId:P.nodeId,fromHandleId:P.id||null,fromType:P.type,isValidConnection:ee,flowId:I,doc:K,lib:H,nodeLookup:F});G&&Q&&B(Q);let te=structuredClone(W);delete te.inProgress,te.toPosition=te.toHandle?te.toHandle.position:null,M?.(E,te),y.setState({connectionClickStartHandle:null})};return(0,q.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${b}-${h}-${g}-${e}`,className:Lt(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!w,target:w,connectable:o,connectablestart:n,connectableend:r,clickconnecting:k,connectingfrom:v,connectingto:C,valid:D,connectionindicator:o&&(!_||S)&&(_||A?r:n)}]),onMouseDown:U,onTouchStart:U,onClick:x?L:void 0,ref:p,...c,children:s})}var Ks=(0,V.memo)(GL(eD));function tD({data:e,isConnectable:t,sourcePosition:a=ie.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[e?.label,(0,q.jsx)(Ks,{type:"source",position:a,isConnectable:t})]})}function aD({data:e,isConnectable:t,targetPosition:a=ie.Top,sourcePosition:o=ie.Bottom}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ks,{type:"target",position:a,isConnectable:t}),e?.label,(0,q.jsx)(Ks,{type:"source",position:o,isConnectable:t})]})}function oD(){return null}function nD({data:e,isConnectable:t,targetPosition:a=ie.Top}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ks,{type:"target",position:a,isConnectable:t}),e?.label]})}var Mm={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},_L={input:tD,default:aD,output:nD,group:oD};function rD(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var iD=e=>{let{width:t,height:a,x:o,y:n}=qs(e.nodeLookup,{filter:r=>!!r.selected});return{width:Vo(t)?t:null,height:Vo(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function lD({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=ct(),{width:n,height:r,transformString:i,userSelectionActive:l}=_e(iD,Je),s=YL(),u=(0,V.useRef)(null);(0,V.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!l&&n!==null&&r!==null;if(WL({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(w=>w.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Mm,p.key)&&(p.preventDefault(),s({direction:Mm[p.key],factor:p.shiftKey?4:1}))};return(0,q.jsx)("div",{className:Lt(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,q.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var IL=typeof window<"u"?window:void 0,sD=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function $L({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,paneClickDistance:l,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:w,zoomActivationKeyCode:y,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:S,autoPanOnSelection:_,defaultViewport:A,translateExtent:D,minZoom:B,maxZoom:U,preventScrolling:L,onSelectionContextMenu:E,noWheelClassName:T,noPanClassName:M,disableKeyboardA11y:P,onViewportChange:O,isControlledViewport:R}){let{nodesSelectionActive:H,userSelectionActive:I}=_e(sD,Je),F=Qu(u,{target:IL}),W=Qu(w,{target:IL}),K=W||S,ee=W||b,Q=d&&K!==!0,G=F||I||Q;return H8({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,q.jsx)(q8,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:ee,panActivationKeyPressed:W,panOnScrollSpeed:v,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:!F&&K,defaultViewport:A,translateExtent:D,minZoom:B,maxZoom:U,zoomActivationKeyCode:y,preventScrolling:L,noWheelClassName:T,noPanClassName:M,onViewportChange:O,isControlledViewport:R,paneClickDistance:l,selectionOnDrag:Q,children:(0,q.jsxs)(X8,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:i,panOnDrag:K,autoPanOnSelection:_,isSelecting:!!G,selectionMode:f,selectionKeyPressed:F,paneClickDistance:l,selectionOnDrag:Q,children:[e,H&&(0,q.jsx)(lD,{onSelectionContextMenu:E,noPanClassName:M,disableKeyboardA11y:P})]})})}$L.displayName="FlowRenderer";var dD=(0,V.memo)($L),uD=e=>t=>e?pm(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function cD(e){return _e((0,V.useCallback)(uD(e),[e]),Je)}var fD=e=>e.updateNodeInternals;function pD(){let e=_e(fD),[t]=(0,V.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,V.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function mD({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=ct(),r=(0,V.useRef)(null),i=(0,V.useRef)(null),l=(0,V.useRef)(e.sourcePosition),s=(0,V.useRef)(e.targetPosition),u=(0,V.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,V.useEffect)(()=>{r.current&&!e.hidden&&(!d||i.current!==r.current)&&(i.current&&o?.unobserve(i.current),o?.observe(r.current),i.current=r.current)},[d,e.hidden]),(0,V.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,V.useEffect)(()=>{if(r.current){let f=u.current!==t,c=l.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(u.current=t,l.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function gD({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:i,nodesDraggable:l,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:w,nodeTypes:y,nodeClickDistance:h,onError:x}){let{node:m,internals:b,isParent:v}=_e(G=>{let te=G.nodeLookup.get(e),ne=G.parentLookup.has(e);return{node:te,internals:te.internals,isParent:ne}},Je),C=m.type||"default",k=y?.[C]||_L[C];k===void 0&&(x?.("003",vo.error003(C)),C="default",k=y?.default||_L.default);let S=!!(m.draggable||l&&typeof m.draggable>"u"),_=!!(m.selectable||s&&typeof m.selectable>"u"),A=!!(m.connectable||u&&typeof m.connectable>"u"),D=!!(m.focusable||d&&typeof m.focusable>"u"),B=ct(),U=e0(m),L=mD({node:m,nodeType:C,hasDimensions:U,resizeObserver:f}),E=WL({nodeRef:L,disabled:m.hidden||!S,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:_,nodeClickDistance:h}),T=YL();if(m.hidden)return null;let M=jo(m),P=rD(m),O=_||S||t||a||o||n,R=a?G=>a(G,{...b.userNode}):void 0,H=o?G=>o(G,{...b.userNode}):void 0,I=n?G=>n(G,{...b.userNode}):void 0,F=r?G=>r(G,{...b.userNode}):void 0,W=i?G=>i(G,{...b.userNode}):void 0,K=G=>{let{selectNodesOnDrag:te,nodeDragThreshold:ne}=B.getState();_&&(!te||!S||ne>0)&&h0({id:e,store:B,nodeRef:L}),t&&t(G,{...b.userNode})},ee=G=>{if(!(n0(G.nativeEvent)||g)){if(qb.includes(G.key)&&_){let te=G.key==="Escape";h0({id:e,store:B,unselect:te,nodeRef:L})}else if(S&&m.selected&&Object.prototype.hasOwnProperty.call(Mm,G.key)){G.preventDefault();let{ariaLabelConfig:te}=B.getState();B.setState({ariaLiveMessage:te["node.a11yDescription.ariaLiveMessage"]({direction:G.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),T({direction:Mm[G.key],factor:G.shiftKey?4:1})}}},Q=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:G,width:te,height:ne,autoPanOnNodeFocus:fe,setCenter:re}=B.getState();if(!fe)return;pm(new Map([[e,m]]),{x:0,y:0,width:te,height:ne},G,!0).length>0||re(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:G[2]})};return(0,q.jsx)("div",{className:Lt(["react-flow__node",`react-flow__node-${C}`,{[p]:S},m.className,{selected:m.selected,selectable:_,parent:v,draggable:S,dragging:E}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:O?"all":"none",visibility:U?"visible":"hidden",...m.style,...P},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:R,onMouseMove:H,onMouseLeave:I,onContextMenu:F,onClick:K,onDoubleClick:W,onKeyDown:D?ee:void 0,tabIndex:D?0:void 0,onFocus:D?Q:void 0,role:m.ariaRole??(D?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${FL}-${w}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,q.jsx)(Y8,{value:e,children:(0,q.jsx)(k,{id:e,data:m.data,type:C,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:_,draggable:S,deletable:m.deletable??!0,isConnectable:A,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:E,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...M})})})}var hD=(0,V.memo)(gD),xD=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function QL(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=_e(xD,Je),r=cD(e.onlyRenderVisibleElements),i=pD();return(0,q.jsx)("div",{className:"react-flow__nodes",style:Tm,children:r.map(l=>(0,q.jsx)(hD,{id:l,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},l))})}QL.displayName="NodeRenderer";var bD=(0,V.memo)(QL);function wD(e){return _e((0,V.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),i=a.nodeLookup.get(n.target);r&&i&&Tk({sourceNode:r,targetNode:i,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Je)}var yD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,q.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},vD=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,q.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},ML={[Hs.Arrow]:yD,[Hs.ArrowClosed]:vD};function CD(e){let t=ct();return(0,V.useMemo)(()=>Object.prototype.hasOwnProperty.call(ML,e)?ML[e]:(t.getState().onError?.("009",vo.error009(e)),null),[e])}var SD=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:i,orient:l="auto-start-reverse"})=>{let s=CD(t);return s?(0,q.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:l,refX:"0",refY:"0",children:(0,q.jsx)(s,{color:a,strokeWidth:i})}):null},JL=({defaultColor:e,rfId:t})=>{let a=_e(r=>r.edges),o=_e(r=>r.defaultEdgeOptions),n=(0,V.useMemo)(()=>Rk(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,q.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,q.jsx)("defs",{children:n.map(r=>(0,q.jsx)(SD,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};JL.displayName="MarkerDefinitions";var kD=(0,V.memo)(JL);function e_({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:i=[2,4],labelBgBorderRadius:l=2,children:s,className:u,...d}){let[f,c]=(0,V.useState)({x:1,y:0,width:0,height:0}),p=Lt(["react-flow__edge-textwrapper",u]),g=(0,V.useRef)(null);return(0,V.useEffect)(()=>{if(g.current){let w=g.current.getBBox();c({x:w.x,y:w.y,width:w.width,height:w.height})}},[a]),a?(0,q.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,q.jsx)("rect",{width:f.width+2*i[0],x:-i[0],y:-i[1],height:f.height+2*i[1],className:"react-flow__edge-textbg",style:r,rx:l,ry:l}),(0,q.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}e_.displayName="EdgeText";var LD=(0,V.memo)(e_);function $s({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("path",{...d,d:e,fill:"none",className:Lt(["react-flow__edge-path",d.className])}),u?(0,q.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Vo(t)&&Vo(a)?(0,q.jsx)(LD,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:i,labelBgPadding:l,labelBgBorderRadius:s}):null]})}function NL({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ie.Left||e===ie.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function t_({sourceX:e,sourceY:t,sourcePosition:a=ie.Bottom,targetX:o,targetY:n,targetPosition:r=ie.Top}){let[i,l]=NL({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=NL({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=bm({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:l,targetControlX:s,targetControlY:u});return[`M${e},${t} C${i},${l} ${s},${u} ${o},${n}`,d,f,c,p]}function a_(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i,targetPosition:l,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})=>{let[x,m,b]=t_({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l}),v=e.isInternal?void 0:t;return(0,q.jsx)($s,{id:v,path:x,labelX:m,labelY:b,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:h})})}var _D=a_({isInternal:!1}),o_=a_({isInternal:!0});_D.displayName="SimpleBezierEdge";o_.displayName="SimpleBezierEdgeInternal";function n_(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ie.Bottom,targetPosition:g=ie.Top,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:x})=>{let[m,b,v]=$u({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,q.jsx)($s,{id:C,path:m,labelX:b,labelY:v,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:w,markerStart:y,interactionWidth:x})})}var r_=n_({isInternal:!1}),i_=n_({isInternal:!0});r_.displayName="SmoothStepEdge";i_.displayName="SmoothStepEdgeInternal";function l_(e){return(0,V.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,q.jsx)(r_,{...a,id:o,pathOptions:(0,V.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var ID=l_({isInternal:!1}),s_=l_({isInternal:!0});ID.displayName="StepEdge";s_.displayName="StepEdgeInternal";function d_(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})=>{let[y,h,x]=wm({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,q.jsx)($s,{id:m,path:y,labelX:h,labelY:x,label:i,labelStyle:l,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:w})})}var MD=d_({isInternal:!1}),u_=d_({isInternal:!0});MD.displayName="StraightEdge";u_.displayName="StraightEdgeInternal";function c_(e){return(0,V.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:i=ie.Bottom,targetPosition:l=ie.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,pathOptions:h,interactionWidth:x})=>{let[m,b,v]=Ws({sourceX:a,sourceY:o,sourcePosition:i,targetX:n,targetY:r,targetPosition:l,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,q.jsx)($s,{id:C,path:m,labelX:b,labelY:v,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:w,markerStart:y,interactionWidth:x})})}var ND=c_({isInternal:!1}),f_=c_({isInternal:!0});ND.displayName="BezierEdge";f_.displayName="BezierEdgeInternal";var EL={default:f_,straight:u_,step:s_,smoothstep:i_,simplebezier:o_},TL={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},ED=(e,t,a)=>a===ie.Left?e-t:a===ie.Right?e+t:e,TD=(e,t,a)=>a===ie.Top?e-t:a===ie.Bottom?e+t:e,AL="react-flow__edgeupdater";function DL({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:i,type:l}){return(0,q.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:i,className:Lt([AL,`${AL}-${l}`]),cx:ED(t,o,e),cy:TD(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function AD({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=ct(),w=(b,v)=>{if(b.button!==0)return;let{autoPanOnConnect:C,domNode:k,connectionMode:S,connectionRadius:_,lib:A,onConnectStart:D,cancelConnection:B,nodeLookup:U,rfId:L,panBy:E,updateConnection:T}=g.getState(),M=v.type==="target",P=(H,I)=>{c(!1),f?.(H,a,v.type,I)},O=H=>u?.(a,H),R=(H,I)=>{c(!0),d?.(b,a,v.type),D?.(H,I)};Sm.onPointerDown(b.nativeEvent,{autoPanOnConnect:C,connectionMode:S,connectionRadius:_,domNode:k,handleId:v.id,nodeId:v.nodeId,nodeLookup:U,isTarget:M,edgeUpdaterType:v.type,lib:A,flowId:L,cancelConnection:B,panBy:E,isValidConnection:(...H)=>g.getState().isValidConnection?.(...H)??!0,onConnect:O,onConnectStart:R,onConnectEnd:(...H)=>g.getState().onConnectEnd?.(...H),onReconnectEnd:P,updateConnection:T,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},y=b=>w(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=b=>w(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,q.jsxs)(q.Fragment,{children:[(e===!0||e==="source")&&(0,q.jsx)(DL,{position:l,centerX:o,centerY:n,radius:t,onMouseDown:y,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,q.jsx)(DL,{position:s,centerX:r,centerY:i,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function DD({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:w,noPanClassName:y,onError:h,disableKeyboardA11y:x}){let m=_e(re=>re.edgeLookup.get(e)),b=_e(re=>re.defaultEdgeOptions);m=b?{...b,...m}:m;let v=m.type||"default",C=w?.[v]||EL[v];C===void 0&&(h?.("011",vo.error011(v)),v="default",C=w?.default||EL.default);let k=!!(m.focusable||t&&typeof m.focusable>"u"),S=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),_=!!(m.selectable||o&&typeof m.selectable>"u"),A=(0,V.useRef)(null),[D,B]=(0,V.useState)(!1),[U,L]=(0,V.useState)(!1),E=ct(),{zIndex:T=m.zIndex,sourceX:M,sourceY:P,targetX:O,targetY:R,sourcePosition:H,targetPosition:I}=_e((0,V.useCallback)(re=>{let ue=re.nodeLookup.get(m.source),be=re.nodeLookup.get(m.target);if(!ue||!be)return TL;let ke=Dk({id:e,sourceNode:ue,targetNode:be,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:re.connectionMode,onError:h}),Oe=Ek({selected:m.selected,zIndex:m.zIndex,sourceNode:ue,targetNode:be,elevateOnSelect:re.elevateEdgesOnSelect,zIndexMode:re.zIndexMode});return{...ke||TL,zIndex:Oe}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Je),F=(0,V.useMemo)(()=>m.markerStart?`url('#${ym(m.markerStart,g)}')`:void 0,[m.markerStart,g]),W=(0,V.useMemo)(()=>m.markerEnd?`url('#${ym(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||M===null||P===null||O===null||R===null)return null;let K=re=>{let{addSelectedEdges:ue,unselectNodesAndEdges:be,multiSelectionActive:ke}=E.getState();_&&(E.setState({nodesSelectionActive:!1}),m.selected&&ke?(be({nodes:[],edges:[m]}),A.current?.blur()):ue([e])),n&&n(re,m)},ee=r?re=>{r(re,{...m})}:void 0,Q=i?re=>{i(re,{...m})}:void 0,G=l?re=>{l(re,{...m})}:void 0,te=s?re=>{s(re,{...m})}:void 0,ne=u?re=>{u(re,{...m})}:void 0,fe=re=>{if(!x&&qb.includes(re.key)&&_){let{unselectNodesAndEdges:ue,addSelectedEdges:be}=E.getState();re.key==="Escape"?(A.current?.blur(),ue({edges:[m]})):be([e])}};return(0,q.jsx)("svg",{style:{zIndex:T},children:(0,q.jsxs)("g",{className:Lt(["react-flow__edge",`react-flow__edge-${v}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!_&&!n,updating:D,selectable:_}]),onClick:K,onDoubleClick:ee,onContextMenu:Q,onMouseEnter:G,onMouseMove:te,onMouseLeave:ne,onKeyDown:k?fe:void 0,tabIndex:k?0:void 0,role:m.ariaRole??(k?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":k?`${UL}-${g}`:void 0,ref:A,...m.domAttributes,children:[!U&&(0,q.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:_,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:P,targetX:O,targetY:R,sourcePosition:H,targetPosition:I,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:F,markerEnd:W,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),S&&(0,q.jsx)(AD,{edge:m,isReconnectable:S,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:M,sourceY:P,targetX:O,targetY:R,sourcePosition:H,targetPosition:I,setUpdateHover:B,setReconnecting:L})]})})}var RD=(0,V.memo)(DD),PD=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function p_({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:i,onEdgeMouseEnter:l,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:w}){let{edgesFocusable:y,edgesReconnectable:h,elementsSelectable:x,onError:m}=_e(PD,Je),b=wD(t);return(0,q.jsxs)("div",{className:"react-flow__edges",children:[(0,q.jsx)(kD,{defaultColor:e,rfId:a}),b.map(v=>(0,q.jsx)(RD,{id:v,edgesFocusable:y,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:i,onMouseEnter:l,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:w},v))]})}p_.displayName="EdgeRenderer";var zD=(0,V.memo)(p_),RL=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function OD({children:e}){let t=ct(),a=(0,V.useRef)(null),[o]=(0,V.useState)(()=>t.getState().transform);return jL(()=>{let n=null,r=()=>{let i=t.getState().transform;n&&i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]||(n=i,a.current&&(a.current.style.transform=RL(i)))};return r(),t.subscribe(r)},[t]),(0,q.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:RL(o)},children:e})}function BD(e){let t=Ca(),a=(0,V.useRef)(!1);(0,V.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var HD=e=>e.panZoom?.syncViewport;function FD(e){let t=_e(HD),a=ct();return(0,V.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function PL(e){return e.connection.inProgress?{...e.connection,to:js(e.connection.to,e.transform)}:{...e.connection}}function UD(e){return e?a=>{let o=PL(a);return e(o)}:PL}function y0(e){let t=UD(e);return _e(t,Je)}var qD=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function VD({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:i,isValid:l,inProgress:s}=_e(qD,Je);return!(r&&n&&s)?null:(0,q.jsx)("svg",{style:e,width:r,height:i,className:"react-flow__connectionline react-flow__container",children:(0,q.jsx)("g",{className:Lt(["react-flow__connection",jb(l)]),children:(0,q.jsx)(m_,{style:t,type:a,CustomComponent:o,isValid:l})})})}var m_=({style:e,type:t=_n.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:i,fromHandle:l,fromPosition:s,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=y0();if(!n)return;if(a)return(0,q.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:l,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:jb(o),toNode:d,toHandle:f,pointer:p});let g="",w={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case _n.Bezier:[g]=Ws(w);break;case _n.SimpleBezier:[g]=t_(w);break;case _n.Step:[g]=$u({...w,borderRadius:0});break;case _n.SmoothStep:[g]=$u(w);break;default:[g]=wm(w)}return(0,q.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};m_.displayName="ConnectionLine";var GD={};function zL(e=GD){let t=(0,V.useRef)(e),a=ct();(0,V.useEffect)(()=>{},[e])}function jD(){let e=ct(),t=(0,V.useRef)(!1);(0,V.useEffect)(()=>{},[])}function g_({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:i,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:w,connectionLineComponent:y,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:k,deleteKeyCode:S,onlyRenderVisibleElements:_,elementsSelectable:A,defaultViewport:D,translateExtent:B,minZoom:U,maxZoom:L,preventScrolling:E,defaultMarkerColor:T,zoomOnScroll:M,zoomOnPinch:P,panOnScroll:O,panOnScrollSpeed:R,panOnScrollMode:H,zoomOnDoubleClick:I,panOnDrag:F,autoPanOnSelection:W,onPaneClick:K,onPaneMouseEnter:ee,onPaneMouseMove:Q,onPaneMouseLeave:G,onPaneScroll:te,onPaneContextMenu:ne,paneClickDistance:fe,nodeClickDistance:re,onEdgeContextMenu:ue,onEdgeMouseEnter:be,onEdgeMouseMove:ke,onEdgeMouseLeave:Oe,reconnectRadius:yt,onReconnect:vt,onReconnectStart:so,onReconnectEnd:ae,noDragClassName:Me,noWheelClassName:it,noPanClassName:Ct,disableKeyboardA11y:He,nodeExtent:$t,rfId:Nt,viewport:Va,onViewportChange:qn,nodesDraggable:yd}){return zL(e),zL(t),jD(),BD(a),FD(Va),(0,q.jsx)(dD,{onPaneClick:K,onPaneMouseEnter:ee,onPaneMouseMove:Q,onPaneMouseLeave:G,onPaneContextMenu:ne,onPaneScroll:te,paneClickDistance:fe,deleteKeyCode:S,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:v,panActivationKeyCode:C,zoomActivationKeyCode:k,elementsSelectable:A,zoomOnScroll:M,zoomOnPinch:P,zoomOnDoubleClick:I,panOnScroll:O,panOnScrollSpeed:R,panOnScrollMode:H,panOnDrag:F,autoPanOnSelection:W,defaultViewport:D,translateExtent:B,minZoom:U,maxZoom:L,onSelectionContextMenu:f,preventScrolling:E,noDragClassName:Me,noWheelClassName:it,noPanClassName:Ct,disableKeyboardA11y:He,onViewportChange:qn,isControlledViewport:!!Va,children:(0,q.jsxs)(OD,{children:[(0,q.jsx)(zD,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:i,onReconnect:vt,onReconnectStart:so,onReconnectEnd:ae,onlyRenderVisibleElements:_,onEdgeContextMenu:ue,onEdgeMouseEnter:be,onEdgeMouseMove:ke,onEdgeMouseLeave:Oe,reconnectRadius:yt,defaultMarkerColor:T,noPanClassName:Ct,disableKeyboardA11y:He,rfId:Nt}),(0,q.jsx)(VD,{style:w,type:g,component:y,containerStyle:h}),(0,q.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,q.jsx)(bD,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:l,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:re,onlyRenderVisibleElements:_,noPanClassName:Ct,noDragClassName:Me,disableKeyboardA11y:He,nodeExtent:$t,rfId:Nt,nodesDraggable:yd}),(0,q.jsx)("div",{className:"react-flow__viewport-portal"})]})})}g_.displayName="GraphView";var XD=(0,V.memo)(g_),WD=Jb("React Flow","https://reactflow.dev/"),OL=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,w=new Map,y=new Map,h=o??t??[],x=a??e??[],m=d??[0,0],b=f??Us;c0(w,y,h);let{nodesInitialized:v}=vm(x,p,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:c}),C=[0,0,1];if(i&&n&&r){let k=qs(p,{filter:D=>!!((D.width||D.initialWidth)&&(D.height||D.initialHeight))}),{x:S,y:_,zoom:A}=Ku(k,n,r,s,u,l?.padding??.1);C=[S,_,A]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:x,nodesInitialized:v,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:y,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:Us,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:di.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:l,fitViewResolver:null,connection:{...Gb},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:WD,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Vb,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},YD=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>fL((p,g)=>{async function w(){let{nodeLookup:y,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:b,height:v,minZoom:C,maxZoom:k}=g();h&&(await kk({nodes:y,width:b,height:v,panZoom:h,minZoom:C,maxZoom:k},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...OL({nodes:e,edges:t,width:n,height:r,fitView:i,fitViewOptions:l,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:y=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:v,fitViewQueued:C,zIndexMode:k,nodesSelectionActive:S}=g(),{nodesInitialized:_,hasSelectedNodes:A}=vm(y,h,x,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:k}),D=S&&A;C&&_?(w(),p({nodes:y,nodesInitialized:_,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:D})):p({nodes:y,nodesInitialized:_,nodesSelectionActive:D})},setEdges:y=>{let{connectionLookup:h,edgeLookup:x}=g();c0(h,x,y),p({edges:y})},setDefaultNodesAndEdges:(y,h)=>{if(y){let{setNodes:x}=g();x(y),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:b,nodeOrigin:v,nodeExtent:C,debug:k,fitViewQueued:S,zIndexMode:_}=g(),{changes:A,updatedInternals:D}=Bk(y,x,m,b,v,C,_);D&&(zk(x,m,{nodeOrigin:v,nodeExtent:C,zIndexMode:_}),S?(w(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),A?.length>0&&(k&&console.log("React Flow: trigger node changes",A),h?.(A)))},updateNodePositions:(y,h=!1)=>{let x=[],m=[],{nodeLookup:b,triggerNodeChanges:v,connection:C,updateConnection:k,onNodesChangeMiddlewareMap:S}=g();for(let[_,A]of y){let D=b.get(_),B=!!(D?.expandParent&&D?.parentId&&A?.position),U={id:_,type:"position",position:B?{x:Math.max(0,A.position.x),y:Math.max(0,A.position.y)}:A.position,dragging:h};if(D&&C.inProgress&&C.fromNode.id===D.id){let L=ui(D,C.fromHandle,ie.Left,!0);k({...C,from:L})}B&&D.parentId&&x.push({id:_,parentId:D.parentId,rect:{...A.internals.positionAbsolute,width:A.measured.width??0,height:A.measured.height??0}}),m.push(U)}if(x.length>0){let{parentLookup:_,nodeOrigin:A}=g(),D=Cm(x,b,_,A);m.push(...D)}for(let _ of S.values())m=_(m);v(m)},triggerNodeChanges:y=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:b,debug:v}=g();if(y?.length){if(b){let C=x0(y,m);x(C)}v&&console.log("React Flow: trigger node changes",y),h?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:b,debug:v}=g();if(y?.length){if(b){let C=b0(y,m);x(C)}v&&console.log("React Flow: trigger edge changes",y),h?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:v}=g();if(h){let C=y.map(k=>ll(k,!0));b(C);return}b(Zs(m,new Set([...y]),!0)),v(Zs(x))},addSelectedEdges:y=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:v}=g();if(h){let C=y.map(k=>ll(k,!0));v(C);return}v(Zs(x,new Set([...y]))),b(Zs(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:b,triggerNodeChanges:v,triggerEdgeChanges:C}=g(),k=y||m,S=h||x,_=[];for(let D of k){if(!D.selected)continue;let B=b.get(D.id);B&&(B.selected=!1),_.push(ll(D.id,!1))}let A=[];for(let D of S)D.selected&&A.push(ll(D.id,!1));v(_),C(A)},setMinZoom:y=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([y,x]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,y]),p({maxZoom:y})},setTranslateExtent:y=>{g().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let v=h.reduce((k,S)=>S.selected?[...k,ll(S.id,!1)]:k,[]),C=y.reduce((k,S)=>S.selected?[...k,ll(S.id,!1)]:k,[]);x(v),m(C)},setNodeExtent:y=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:v,nodeExtent:C,zIndexMode:k}=g();y[0][0]===C[0][0]&&y[0][1]===C[0][1]&&y[1][0]===C[1][0]&&y[1][1]===C[1][1]||(vm(h,x,m,{nodeOrigin:b,nodeExtent:y,elevateNodesOnSelect:v,checkEquality:!1,zIndexMode:k}),p({nodeExtent:y}))},panBy:y=>{let{transform:h,width:x,height:m,panZoom:b,translateExtent:v}=g();return Hk({delta:y,panZoom:b,transform:h,translateExtent:v,width:x,height:m})},setCenter:async(y,h,x)=>{let{width:m,height:b,maxZoom:v,panZoom:C}=g();if(!C)return!1;let k=typeof x?.zoom<"u"?x.zoom:v;return await C.setViewport({x:m/2-y*k,y:b/2-h*k,zoom:k},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Gb}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...OL()})}},Object.is);function v0({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:i,initialMaxZoom:l,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,V.useState)(()=>YD({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:i,maxZoom:l,fitViewOptions:s,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,q.jsx)(c8,{value:g,children:(0,q.jsx)(P8,{children:(0,q.jsx)(K8,{children:p})})})}function ZD({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:i,fitView:l,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,V.useContext)(Nm)?(0,q.jsx)(q.Fragment,{children:e}):(0,q.jsx)(v0,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:i,fitView:l,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var KD={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function $D({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:i,onNodeClick:l,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:v,onNodeDoubleClick:C,onNodeDragStart:k,onNodeDrag:S,onNodeDragStop:_,onNodesDelete:A,onEdgesDelete:D,onDelete:B,onSelectionChange:U,onSelectionDragStart:L,onSelectionDrag:E,onSelectionDragStop:T,onSelectionContextMenu:M,onSelectionStart:P,onSelectionEnd:O,onBeforeDelete:R,connectionMode:H,connectionLineType:I=_n.Bezier,connectionLineStyle:F,connectionLineComponent:W,connectionLineContainerStyle:K,deleteKeyCode:ee="Backspace",selectionKeyCode:Q="Shift",selectionOnDrag:G=!1,selectionMode:te=pr.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:fe=Xs()?"Meta":"Control",zoomActivationKeyCode:re=Xs()?"Meta":"Control",snapToGrid:ue,snapGrid:be,onlyRenderVisibleElements:ke=!1,selectNodesOnDrag:Oe,nodesDraggable:yt,autoPanOnNodeFocus:vt,nodesConnectable:so,nodesFocusable:ae,nodeOrigin:Me=qL,edgesFocusable:it,edgesReconnectable:Ct,elementsSelectable:He=!0,defaultViewport:$t=k8,minZoom:Nt=.5,maxZoom:Va=2,translateExtent:qn=Us,preventScrolling:yd=!0,nodeExtent:vd,defaultMarkerColor:Cd="#b1b1b7",zoomOnScroll:wg=!0,zoomOnPinch:yg=!0,panOnScroll:tf=!1,panOnScrollSpeed:vg=.5,panOnScrollMode:Bl=tn.Free,zoomOnDoubleClick:Cg=!0,panOnDrag:Sg=!0,onPaneClick:kg,onPaneMouseEnter:Sd,onPaneMouseMove:Lg,onPaneMouseLeave:_g,onPaneScroll:Hl,onPaneContextMenu:Ig,paneClickDistance:Mg=1,nodeClickDistance:Ng=0,children:Eg,onReconnect:Tg,onReconnectStart:Ag,onReconnectEnd:Z,onEdgeContextMenu:de,onEdgeDoubleClick:Le,onEdgeMouseEnter:Re,onEdgeMouseMove:Vt,onEdgeMouseLeave:je,reconnectRadius:We=10,onNodesChange:Gt,onEdgesChange:bt,noDragClassName:sa="nodrag",noWheelClassName:uo="nowheel",noPanClassName:Mr="nopan",fitView:Dt,fitViewOptions:xn,connectOnClick:Fl,attributionPosition:Dg,proOptions:Rg,defaultEdgeOptions:Pg,elevateNodesOnSelect:zg=!0,elevateEdgesOnSelect:NN=!1,disableKeyboardA11y:ww=!1,autoPanOnConnect:EN,autoPanOnNodeDrag:TN,autoPanOnSelection:AN=!0,autoPanSpeed:DN,connectionRadius:RN,isValidConnection:PN,onError:zN,style:ON,id:yw,nodeDragThreshold:BN,connectionDragThreshold:HN,viewport:FN,onViewportChange:UN,width:qN,height:VN,colorMode:GN="light",debug:jN,onScroll:vw,ariaLabelConfig:XN,zIndexMode:Cw="basic",...WN},YN){let Og=yw||"1",ZN=M8(GN),KN=(0,V.useCallback)(Sw=>{Sw.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),vw?.(Sw)},[vw]);return(0,q.jsx)("div",{"data-testid":"rf__wrapper",...WN,onScroll:KN,style:{...ON,...KD},ref:YN,className:Lt(["react-flow",n,ZN]),id:yw,role:"application",children:(0,q.jsxs)(ZD,{nodes:e,edges:t,width:qN,height:VN,fitView:Dt,fitViewOptions:xn,minZoom:Nt,maxZoom:Va,nodeOrigin:Me,nodeExtent:vd,zIndexMode:Cw,children:[(0,q.jsx)(I8,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:w,onClickConnectStart:y,onClickConnectEnd:h,nodesDraggable:yt,autoPanOnNodeFocus:vt,nodesConnectable:so,nodesFocusable:ae,edgesFocusable:it,edgesReconnectable:Ct,elementsSelectable:He,elevateNodesOnSelect:zg,elevateEdgesOnSelect:NN,minZoom:Nt,maxZoom:Va,nodeExtent:vd,onNodesChange:Gt,onEdgesChange:bt,snapToGrid:ue,snapGrid:be,connectionMode:H,translateExtent:qn,connectOnClick:Fl,defaultEdgeOptions:Pg,fitView:Dt,fitViewOptions:xn,onNodesDelete:A,onEdgesDelete:D,onDelete:B,onNodeDragStart:k,onNodeDrag:S,onNodeDragStop:_,onSelectionDrag:E,onSelectionDragStart:L,onSelectionDragStop:T,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:Mr,nodeOrigin:Me,rfId:Og,autoPanOnConnect:EN,autoPanOnNodeDrag:TN,autoPanSpeed:DN,onError:zN,connectionRadius:RN,isValidConnection:PN,selectNodesOnDrag:Oe,nodeDragThreshold:BN,connectionDragThreshold:HN,onBeforeDelete:R,debug:jN,ariaLabelConfig:XN,zIndexMode:Cw}),(0,q.jsx)(XD,{onInit:u,onNodeClick:l,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:v,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:i,connectionLineType:I,connectionLineStyle:F,connectionLineComponent:W,connectionLineContainerStyle:K,selectionKeyCode:Q,selectionOnDrag:G,selectionMode:te,deleteKeyCode:ee,multiSelectionKeyCode:fe,panActivationKeyCode:ne,zoomActivationKeyCode:re,onlyRenderVisibleElements:ke,defaultViewport:$t,translateExtent:qn,minZoom:Nt,maxZoom:Va,preventScrolling:yd,zoomOnScroll:wg,zoomOnPinch:yg,zoomOnDoubleClick:Cg,panOnScroll:tf,panOnScrollSpeed:vg,panOnScrollMode:Bl,panOnDrag:Sg,autoPanOnSelection:AN,onPaneClick:kg,onPaneMouseEnter:Sd,onPaneMouseMove:Lg,onPaneMouseLeave:_g,onPaneScroll:Hl,onPaneContextMenu:Ig,paneClickDistance:Mg,nodeClickDistance:Ng,onSelectionContextMenu:M,onSelectionStart:P,onSelectionEnd:O,onReconnect:Tg,onReconnectStart:Ag,onReconnectEnd:Z,onEdgeContextMenu:de,onEdgeDoubleClick:Le,onEdgeMouseEnter:Re,onEdgeMouseMove:Vt,onEdgeMouseLeave:je,reconnectRadius:We,defaultMarkerColor:Cd,noDragClassName:sa,noWheelClassName:uo,noPanClassName:Mr,rfId:Og,disableKeyboardA11y:ww,nodeExtent:vd,viewport:FN,onViewportChange:UN,nodesDraggable:yt}),(0,q.jsx)(S8,{onSelectionChange:U}),Eg,(0,q.jsx)(b8,{proOptions:Rg,position:Dg}),(0,q.jsx)(x8,{rfId:Og,disableKeyboardA11y:ww})]})})}var h_=GL($D);var QD=e=>e.nodes;function x_(){return _e(QD,Je)}var JD=e=>e.edges;function b_(){return _e(JD,Je)}var eR=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function Ja(){return _e(eR,Je)}var zV=vo.error014();function tR({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,q.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Lt(["react-flow__background-pattern",a,o])})}function aR({radius:e,className:t}){return(0,q.jsx)("circle",{cx:e,cy:e,r:e,className:Lt(["react-flow__background-pattern","dots",t])})}var In;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(In||(In={}));var oR={[In.Dots]:1,[In.Lines]:1,[In.Cross]:6},nR=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function w_({id:e,variant:t=In.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:i,bgColor:l,style:s,className:u,patternClassName:d}){let f=(0,V.useRef)(null),{transform:c,patternId:p}=_e(nR,Je),g=o||oR[t],w=t===In.Dots,y=t===In.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],b=Array.isArray(r)?r:[r,r],v=y?[m,m]:x,C=[b[0]*c[2]+v[0]/2,b[1]*c[2]+v[1]/2],k=`${p}${e||""}`;return(0,q.jsxs)("svg",{className:Lt(["react-flow__background",u]),style:{...s,...Tm,"--xy-background-color-props":l,"--xy-background-pattern-color-props":i},ref:f,"data-testid":"rf__background",children:[(0,q.jsx)("pattern",{id:k,x:c[0]%x[0],y:c[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:w?(0,q.jsx)(aR,{radius:m/2,className:d}):(0,q.jsx)(tR,{dimensions:v,lineWidth:n,variant:t,className:d})}),(0,q.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${k})`})]})}w_.displayName="Background";var y_=(0,V.memo)(w_);function rR(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,q.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function iR(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,q.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function lR(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,q.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function sR(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function dR(){return(0,q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,q.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Im({children:e,className:t,...a}){return(0,q.jsx)("button",{type:"button",className:Lt(["react-flow__controls-button",t]),...a,children:e})}var uR=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function v_({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:i,onFitView:l,onInteractiveChange:s,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=ct(),{isInteractive:w,minZoomReached:y,maxZoomReached:h,ariaLabelConfig:x}=_e(uR,Je),{zoomIn:m,zoomOut:b,fitView:v}=Ca(),C=()=>{m(),r?.()},k=()=>{b(),i?.()},S=()=>{v(n),l?.()},_=()=>{g.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),s?.(!w)};return(0,q.jsxs)(Em,{className:Lt(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Im,{onClick:C,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,q.jsx)(rR,{})}),(0,q.jsx)(Im,{onClick:k,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:y,children:(0,q.jsx)(iR,{})})]}),a&&(0,q.jsx)(Im,{className:"react-flow__controls-fitview",onClick:S,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,q.jsx)(lR,{})}),o&&(0,q.jsx)(Im,{className:"react-flow__controls-interactive",onClick:_,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:w?(0,q.jsx)(dR,{}):(0,q.jsx)(sR,{})}),d]})}v_.displayName="Controls";var OV=(0,V.memo)(v_);function cR({id:e,x:t,y:a,width:o,height:n,style:r,color:i,strokeColor:l,strokeWidth:s,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:w}=r||{},y=i||g||w;return(0,q.jsx)("rect",{className:Lt(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:y,stroke:l,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var fR=(0,V.memo)(cR),pR=e=>e.nodes.map(t=>t.id),g0=e=>e instanceof Function?e:()=>e;function mR({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=fR,onClick:i}){let l=_e(pR,Je),s=g0(t),u=g0(e),d=g0(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,q.jsx)(q.Fragment,{children:l.map(c=>(0,q.jsx)(hR,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:i,shapeRendering:f},c))})}function gR({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:i,NodeComponent:l,onClick:s}){let{node:u,x:d,y:f,width:c,height:p}=_e(g=>{let w=g.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};let y=w.internals.userNode,{x:h,y:x}=w.internals.positionAbsolute,{width:m,height:b}=jo(y);return{node:y,x:h,y:x,width:m,height:b}},Je);return!u||u.hidden||!e0(u)?null:(0,q.jsx)(l,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:i,onClick:s,id:u.id})}var hR=(0,V.memo)(gR),xR=(0,V.memo)(mR),bR=200,wR=150,yR=e=>!e.hidden,vR=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?$b(qs(e.nodeLookup,{filter:yR}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},BL=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,CR=(e,t)=>BL(e.viewBB,t.viewBB)&&BL(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,SR="react-flow__minimap-desc";function C_({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:l,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:w=!1,zoomable:y=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:b=5}){let v=ct(),C=(0,V.useRef)(null),{boundingRect:k,viewBB:S,rfId:_,panZoom:A,translateExtent:D,flowWidth:B,flowHeight:U,ariaLabelConfig:L}=_e(vR,CR),E=e?.width??bR,T=e?.height??wR,M=k.width/E,P=k.height/T,O=Math.max(M,P),R=O*E,H=O*T,I=b*O,F=k.x-(R-k.width)/2-I,W=k.y-(H-k.height)/2-I,K=R+I*2,ee=H+I*2,Q=`${SR}-${_}`,G=(0,V.useRef)(0),te=(0,V.useRef)();G.current=O,(0,V.useEffect)(()=>{if(C.current&&A)return te.current=Xk({domNode:C.current,panZoom:A,getTransform:()=>v.getState().transform,getViewScale:()=>G.current}),()=>{te.current?.destroy()}},[A]),(0,V.useEffect)(()=>{te.current?.update({translateExtent:D,width:B,height:U,inversePan:x,pannable:w,zoomStep:m,zoomable:y})},[w,y,x,m,D,B,U]);let ne=p?ue=>{let[be,ke]=te.current?.pointer(ue)||[0,0];p(ue,{x:be,y:ke})}:void 0,fe=g?(0,V.useCallback)((ue,be)=>{let ke=v.getState().nodeLookup.get(be).internals.userNode;g(ue,ke)},[]):void 0,re=h??L["minimap.ariaLabel"];return(0,q.jsx)(Em,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*O:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:Lt(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,q.jsxs)("svg",{width:E,height:T,viewBox:`${F} ${W} ${K} ${ee}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":Q,ref:C,onClick:ne,children:[re&&(0,q.jsx)("title",{id:Q,children:re}),(0,q.jsx)(xR,{onClick:fe,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:i,nodeComponent:l}),(0,q.jsx)("path",{className:"react-flow__minimap-mask",d:`M${F-I},${W-I}h${K+I*2}v${ee+I*2}h${-K-I*2}z
        M${S.x},${S.y}h${S.width}v${S.height}h${-S.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}C_.displayName="MiniMap";var S_=(0,V.memo)(C_),kR=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,LR={[ci.Line]:"right",[ci.Handle]:"bottom-right"};function _R({nodeId:e,position:t,variant:a=ci.Handle,className:o,style:n=void 0,children:r,color:i,minWidth:l=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:w,onResize:y,onResizeEnd:h}){let x=ZL(),m=typeof e=="string"?e:x,b=ct(),v=(0,V.useRef)(null),C=a===ci.Handle,k=_e((0,V.useCallback)(kR(C&&p),[C,p]),Je),S=(0,V.useRef)(null),_=t??LR[a];(0,V.useEffect)(()=>{if(!(!v.current||!m))return S.current||(S.current=$k({domNode:v.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:D,transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:E,domNode:T}=b.getState();return{nodeLookup:D,transform:B,snapGrid:U,snapToGrid:L,nodeOrigin:E,paneDomNode:T}},onChange:(D,B)=>{let{triggerNodeChanges:U,nodeLookup:L,parentLookup:E,nodeOrigin:T}=b.getState(),M=[],P={x:D.x,y:D.y},O=L.get(m);if(O&&O.expandParent&&O.parentId){let R=O.origin??T,H=D.width??O.measured.width??0,I=D.height??O.measured.height??0,F={id:O.id,parentId:O.parentId,rect:{width:H,height:I,...t0({x:D.x??O.position.x,y:D.y??O.position.y},{width:H,height:I},O.parentId,L,R)}},W=Cm([F],L,E,T);M.push(...W),P.x=D.x?Math.max(R[0]*H,D.x):void 0,P.y=D.y?Math.max(R[1]*I,D.y):void 0}if(P.x!==void 0&&P.y!==void 0){let R={id:m,type:"position",position:{...P}};M.push(R)}if(D.width!==void 0&&D.height!==void 0){let H={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:D.width,height:D.height}};M.push(H)}for(let R of B){let H={...R,type:"position"};M.push(H)}U(M)},onEnd:({width:D,height:B})=>{let U={id:m,type:"dimensions",resizing:!1,dimensions:{width:D,height:B}};b.getState().triggerNodeChanges([U])}})),S.current.update({controlPosition:_,boundaries:{minWidth:l,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:w,onResize:y,onResizeEnd:h,shouldResize:g}),()=>{S.current?.destroy()}},[_,l,s,u,d,f,w,y,h,g]);let A=_.split("-");return(0,q.jsx)("div",{className:Lt(["react-flow__resize-control","nodrag",...A,a,o]),ref:v,style:{...n,scale:k,...i&&{[C?"backgroundColor":"borderColor"]:i}},children:r})}var BV=(0,V.memo)(_R);var to=N($(),1),N_=N(Qt(),1);var Rm=N($(),1);var Am=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var k_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var L_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var C0=e=>{let t=L_(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Ju=N($(),1);var Dm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var __=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Qs=N($(),1);var IR=(0,Qs.createContext)({});var I_=()=>(0,Qs.useContext)(IR);var M_=(0,Ju.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:i,...l},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=I_()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,Ju.createElement)("svg",{ref:s,...Dm,width:t??u??Dm.width,height:t??u??Dm.height,stroke:e??c,strokeWidth:g,className:Am("lucide",p,n),...!r&&!__(l)&&{"aria-hidden":"true"},...l},[...i.map(([w,y])=>(0,Ju.createElement)(w,y)),...Array.isArray(r)?r:[r]])});var z=(e,t)=>{let a=(0,Rm.forwardRef)(({className:o,...n},r)=>(0,Rm.createElement)(M_,{ref:r,iconNode:t,className:Am(`lucide-${k_(C0(e))}`,`lucide-${e}`,o),...n}));return a.displayName=C0(e),a};var MR=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],sl=z("align-horizontal-distribute-center",MR);var NR=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],dl=z("align-vertical-distribute-center",NR);var ER=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ec=z("arrow-left",ER);var TR=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ul=z("arrow-up",TR);var AR=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],cl=z("audio-lines",AR);var DR=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],tc=z("bookmark",DR);var RR=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],ac=z("calendar",RR);var PR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bt=z("check",PR);var zR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ga=z("chevron-down",zR);var OR=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mr=z("chevron-right",OR);var BR=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],oc=z("chevron-left",BR);var HR=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],nc=z("chevron-up",HR);var FR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],fi=z("circle-alert",FR);var UR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pi=z("circle-check",UR);var qR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],an=z("circle-question-mark",qR);var VR=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],rc=z("clapperboard",VR);var GR=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],eo=z("cloud-upload",GR);var jR=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],mi=z("copy",jR);var XR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Mn=z("crosshair",XR);var WR=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],fl=z("download",WR);var YR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],gi=z("ellipsis",YR);var ZR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ic=z("external-link",ZR);var KR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],lc=z("eye-off",KR);var $R=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],sc=z("eye",$R);var QR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],gr=z("file-code",QR);var JR=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],Nn=z("file-pen",JR);var eP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],dc=z("file-spreadsheet",eP);var tP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Sa=z("file-text",tP);var aP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],uc=z("file-up",aP);var oP=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],cc=z("files",oP);var nP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],oa=z("film",nP);var rP=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],pl=z("folder-input",rP);var iP=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],fc=z("folder-open",iP);var lP=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ml=z("folder-plus",lP);var sP=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Co=z("folder",sP);var dP=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],hi=z("funnel",dP);var uP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],So=z("grid-3x3",uP);var cP=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],pc=z("grip-vertical",cP);var fP=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Js=z("hand",fP);var pP=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],mc=z("hard-drive",pP);var mP=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],gc=z("hash",mP);var gP=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],hr=z("image-plus",gP);var hP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ra=z("image",hP);var xP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],hc=z("info",xP);var bP=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],xc=z("keyboard",bP);var wP=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ha=z("layers",wP);var yP=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Pa=z("layout-grid",yP);var vP=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],bc=z("list-tree",vP);var CP=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],xr=z("list",CP);var SP=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xi=z("loader-circle",SP);var kP=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],wc=z("map",kP);var LP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],En=z("maximize-2",LP);var _P=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],yc=z("maximize",_P);var IP=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],gl=z("message-square",IP);var MP=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],hl=z("mic",MP);var NP=[["path",{d:"M5 12h14",key:"1ays0h"}]],vc=z("minus",NP);var EP=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ed=z("mouse-pointer",EP);var TP=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ka=z("music",TP);var AP=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",key:"28k6lz"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],xl=z("package-plus",AP);var DP=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Cc=z("paperclip",DP);var RP=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Sc=z("pause",RP);var PP=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Tn=z("pen-line",PP);var zP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],An=z("pen",zP);var OP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],bl=z("pencil",OP);var BP=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],kc=z("person-standing",BP);var HP=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],za=z("play",HP);var FP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ft=z("plus",FP);var UP=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],Lc=z("redo-2",UP);var qP=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],br=z("refresh-cw",qP);var VP=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],_c=z("rotate-ccw",VP);var GP=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],on=z("search",GP);var jP=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Ic=z("settings-2",jP);var XP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],wl=z("sliders-horizontal",XP);var WP=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],It=z("sparkles",WP);var YP=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],bi=z("square-split-vertical",YP);var ZP=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],ko=z("table",ZP);var KP=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Mc=z("tag",KP);var $P=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],wi=z("text-align-justify",$P);var QP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Lo=z("trash-2",QP);var JP=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yi=z("triangle-alert",JP);var ez=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],wr=z("type",ez);var tz=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Nc=z("undo-2",tz);var az=[["rect",{x:"11",y:"14",width:"10",height:"7",rx:"2",key:"nfm8rk"}],["rect",{x:"3",y:"3",width:"10",height:"7",rx:"2",key:"1ljebb"}]],Ec=z("ungroup",az);var oz=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],yl=z("unlink",oz);var nz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],vl=z("upload",nz);var rz=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],nn=z("video",rz);var iz=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],Tc=z("waypoints",iz);var lz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xa=z("x",lz);var na=N(j(),1);function ao({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:i,variant:l="pill"}){let[s,u]=(0,to.useState)(!1),d=(0,to.useRef)(null),f=(0,to.useRef)(null),[c,p]=(0,to.useState)({top:0,left:0,placement:"bottom"}),g=(0,to.useMemo)(()=>t.find(m=>m.value===e),[t,e]),w=(0,to.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),b=window.innerHeight,v=Math.min(t.length*34+16,260),k=b-m.bottom<v&&m.top>v,S=k?m.top-6:m.bottom+6,_=r?m.width:void 0;p({top:S,left:m.left,width:_,placement:k?"top":"bottom"})},[t.length,r]);(0,to.useEffect)(()=>{if(!s)return;w();let m=C=>{let k=C.target;d.current?.contains(k)||f.current?.contains(k)||u(!1)},b=C=>{C.key==="Escape"&&u(!1)},v=()=>{w()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",v,!0),window.addEventListener("resize",w),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",v,!0),window.removeEventListener("resize",w)}},[s,w]);let y=(0,to.useCallback)(m=>{m.stopPropagation(),!n&&u(b=>!b)},[n]),h=(0,to.useCallback)((m,b)=>{b||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${l}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,na.jsxs)(na.Fragment,{children:[(0,na.jsxs)("button",{ref:d,type:"button",className:x,disabled:n,onClick:y,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,na.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:i??String(e??"")}),(0,na.jsx)(ga,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,N_.createPortal)((0,na.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,na.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,v=!!m.subtitle||!!m.badge||!!m.icon;return(0,na.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${v?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,na.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,na.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,na.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,na.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,na.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,na.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,na.jsx)(Bt,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Dn=N($(),1),E_=N(Qt(),1),rn=N(j(),1),Ac=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,i]=(0,Dn.useState)(!1),l=(0,Dn.useRef)(null),s=(0,Dn.useRef)(null),[u,d]=(0,Dn.useState)({left:0}),f=(0,Dn.useCallback)(()=>{if(!l.current)return;let p=l.current.getBoundingClientRect(),g=a.startsWith("top"),w=a.endsWith("Right"),y=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=w?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:y,bottom:h,left:x})},[a]);(0,Dn.useEffect)(()=>{if(!r)return;f();let p=w=>{let y=w.target;l.current?.contains(y)||s.current?.contains(y)||i(!1)},g=w=>{w.key==="Escape"&&i(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),i(g=>!g)};return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)("div",{ref:l,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,E_.createPortal)((0,rn.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,rn.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,rn.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),i(!1))},children:[p.icon?(0,rn.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,rn.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var T_=N($(),1),S0=N(j(),1),k0=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:i,className:l=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,T_.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,S0.jsx)("div",{className:`wf-custom-slider ${l}`,style:i,children:(0,S0.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var A_=N($(),1),D_=N(Qt(),1);var Rn=N(j(),1),ln=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:i,children:l})=>((0,A_.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,D_.createPortal)((0,Rn.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Rn.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,Rn.jsxs)("div",{className:"wf-modal-header",children:[(0,Rn.jsx)("div",{className:"wf-modal-title",children:a}),(0,Rn.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Rn.jsx)(xa,{size:16})})]}),(0,Rn.jsx)("div",{className:["wf-modal-body",i].filter(Boolean).join(" "),children:l}),o?(0,Rn.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var zm=N($(),1),R_=N(Sb(),1);var Cl=N(j(),1),Dc=null,sz=()=>{let[e,t]=(0,zm.useState)([]);return(0,zm.useEffect)(()=>(Dc=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{Dc=null}),[]),e.length===0?null:(0,Cl.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=hc,n="#60a5fa";return a.type==="success"?(o=pi,n="#34d399"):a.type==="warning"?(o=yi,n="#fb923c"):a.type==="error"&&(o=fi,n="#f87171"),(0,Cl.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Cl.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Cl.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function dz(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,R_.createRoot)(t).render((0,Cl.jsx)(sz,{}))}function Pm(e,t,a=2500){dz();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;Dc?Dc({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{Dc?.({id:o,type:e,content:t,durationMs:a})},50)}var Y={success:(e,t)=>Pm("success",e,t),warning:(e,t)=>Pm("warning",e,t),error:(e,t)=>Pm("error",e,t),info:(e,t)=>Pm("info",e,t)};var P_=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,l={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,l);return l},z_=(e=>e?P_(e):P_);var Rc=N($(),1);var uz=e=>e;function cz(e,t=uz){let a=Rc.default.useSyncExternalStore(e.subscribe,Rc.default.useCallback(()=>t(e.getState()),[e,t]),Rc.default.useCallback(()=>t(e.getInitialState()),[e,t]));return Rc.default.useDebugValue(a),a}var O_=e=>{let t=z_(e),a=o=>cz(t,o);return Object.assign(a,t),a},td=(e=>e?O_(e):O_);var q_=N($(),1);var B_=e=>Symbol.iterator in e,H_=e=>"entries"in e,F_=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},fz=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function U_(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:B_(e)&&B_(t)?H_(e)&&H_(t)?F_(e,t):fz(e,t):F_({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function V_(e){let t=q_.default.useRef(void 0);return a=>{let o=e(a);return U_(t.current,o)?t.current:t.current=o}}var j_={stroke:"#b1b1b7",strokeWidth:2},Om={type:"animated",style:j_,animated:!1};function G_(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function pz(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function X_(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:pz(e),...Om,...e,data:{...t,createdAt:a},animated:e.animated??Om.animated,style:{...j_,...e.style??{}},sourceHandle:G_(e.sourceHandle),targetHandle:G_(e.targetHandle)}}var W_={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},mz={text:"text-editor",image:"text-to-image",video:"video-generation",audio:"text-to-audio"};var Y_={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function Pc(e,t){return{label:"",materialType:e,status:"empty",selectedTool:mz[e],params:{},failStrategy:"abort",...t}}function Sl(e){return e.nodeKind==="generate"||e.nodeKind==="import"?e.nodeKind:e.selectedTool==="import"?"import":"generate"}var gz={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function Z_(e){return gz[e]??[]}function hz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,i=a.content,l=a.generatedContent,s=!1;return o==="text"?s=!!(i?.trim()||l):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function xz(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let i=W_[n];if(i)for(let l of i){let s=Y_[l];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function Bm(e,t){let a=hz(e),o=xz(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function Hm(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(l=>l.source===e.source&&l.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(l=>l.id===e.source),n=t.find(l=>l.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!Bm(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,i=[n];for(;i.length>0;){let l=i.shift();if(!(!l||r.has(l.id))){r.add(l.id);for(let s of Yb(l,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};i.push(s)}}}return{valid:!0}}function Fm(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function bz(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function K_(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return Fm(e,"rejected","duplicate_node");a.add(d.id)}let o=bz([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return Fm(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return Fm(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),i=new Set(t.removeNodeIds??[]),l=o.filter(d=>!i.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!i.has(d.source)&&!i.has(d.target))];for(let d of t.addEdges??[]){let f=X_(d),c=Hm(f,l,u);if(!c.valid)return Fm(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:l,edges:u,status:"allowed"}}function $_(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var Um=!1,qm=!1;function Vm(){Um=!0}function Q_(){qm=!0,Um=!1}function J_(){Um=!1,qm=!1}function wz(){qm=!1}function L0(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function _0(e,t){return{nodes:e.slice(),edges:t.slice()}}function zc(e,t){return t||(qm&&e===0?"reset":Um&&e===0?"user-delete":"autosave")}function Gm(e){let t=_0(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:L0({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(wz(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}function oo(e){return e>0?1/e:1}function e5(e,t,a,o,n){return n||o==="import"?!1:!!e&&!t&&a!=="running"}function t5(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var yz=32,vz=350,Cz=280;function Sz(e){let t=e.data||{},a=t.materialType||(e.type==="material"?"text":void 0),o=vz,n=Cz,r=0;e.type==="material"||a?(r=28,a==="text"?(o=350,n=500):a==="image"?(o=350,n=350):a==="video"?(o=350,n=280):a==="audio"&&(o=350,n=150)):e.type==="table"?(r=28,o=380,n=280):e.type==="video_composition"?(r=28,o=350,n=440):e.type==="group"&&(o=400,n=300,r=0);let i=typeof e.measured?.width=="number"&&e.measured.width>0?e.measured.width:typeof e.width=="number"&&e.width>0?e.width:typeof t.nodeWidth=="number"&&t.nodeWidth>0?t.nodeWidth:o,l=typeof e.measured?.height=="number"&&e.measured.height>0?e.measured.height:typeof e.height=="number"&&e.height>0?e.height:typeof t.nodeHeight=="number"&&t.nodeHeight>0?t.nodeHeight:n;return{width:i,height:l,headerOffset:r}}function Oc(e,t=yz,a){if(!e||e.length===0)return{x:0,y:0,width:400,height:300,minWidth:200,minHeight:150};let o=a?.includeHeaderOffset??!0,n=1/0,r=1/0,i=-1/0,l=-1/0;for(let c of e){let p=c.position.x,g=c.position.y,{width:w,height:y,headerOffset:h}=Sz(c),x=o?g-h:g;p<n&&(n=p),x<r&&(r=x),p+w>i&&(i=p+w),g+y>l&&(l=g+y)}let s=n-t,u=r-t,d=Math.max(120,i-n+t*2),f=Math.max(80,l-r+t*2);return{x:s,y:u,width:d,height:f,minWidth:d,minHeight:f}}function kz(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Lz(e,t){return{x:e.x+t.x,y:e.y+t.y}}function a5(e,t,a,o){let{x:n,y:r,width:i,height:l}=t,{dx:s,dy:u}=a;switch(e){case"se":{i=Math.max(o.minWidth,i+s),l=Math.max(o.minHeight,l+u);break}case"e":{i=Math.max(o.minWidth,i+s);break}case"s":{l=Math.max(o.minHeight,l+u);break}case"nw":{let d=i-s;d>=o.minWidth?(n+=s,i=d):(n+=i-o.minWidth,i=o.minWidth);let f=l-u;f>=o.minHeight?(r+=u,l=f):(r+=l-o.minHeight,l=o.minHeight);break}case"w":{let d=i-s;d>=o.minWidth?(n+=s,i=d):(n+=i-o.minWidth,i=o.minWidth);break}case"n":{let d=l-u;d>=o.minHeight?(r+=u,l=d):(r+=l-o.minHeight,l=o.minHeight);break}case"ne":{i=Math.max(o.minWidth,i+s);let d=l-u;d>=o.minHeight?(r+=u,l=d):(r+=l-o.minHeight,l=o.minHeight);break}case"sw":{l=Math.max(o.minHeight,l+u);let d=i-s;d>=o.minWidth?(n+=s,i=d):(n+=i-o.minWidth,i=o.minWidth);break}}return{x:n,y:r,width:i,height:l}}function o5(e,t,a){let o=a>0?a:1;return{dx:e/o,dy:t/o}}function ad(e,t){return e.filter(a=>a.parentId===t&&a.type!=="group").map(a=>a.id)}function n5(e,t,a="\u65B0\u5EFA\u7EC4",o="#3b82f6"){let n=e.filter(d=>t.includes(d.id)&&d.type!=="group"&&!d.parentId);if(n.length<2)return null;let r=Oc(n,32),i=`group_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,l={id:i,type:"group",position:{x:r.x,y:r.y},width:r.width,height:r.height,selected:!0,style:{width:r.width,height:r.height,zIndex:0},data:{title:a,color:o,minWidth:r.minWidth,minHeight:r.minHeight,padding:32,nodeIds:n.map(d=>d.id)}},s=new Set(n.map(d=>d.id)),u=e.map(d=>{if(!s.has(d.id)||d.type==="group")return d;let f=kz(d.position,{x:r.x,y:r.y});return{...d,parentId:i,position:f,selected:!1,extent:"parent"}});return{groupId:i,nodes:[l,...u]}}function r5(e,t){let a=e.find(n=>n.id===t&&n.type==="group");if(!a)return null;let o=a.position;return e.filter(n=>n.id!==t).map(n=>{if(n.parentId!==t)return n;let r=Lz(n.position,o),{parentId:i,extent:l,...s}=n;return{...s,position:r,selected:!0}})}var _z=50,Iz=300;function Bc(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Oa={current:null,lastPushAt:0},oe=td()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&Vm(),e({nodes:x0(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:b0(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&Vm();let o=t(),n=K_({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(i=>!o.edges.some(l=>l.id===i.id));return $_(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&Vm(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},groupNodes:(a,o="\u65B0\u5EFA\u7EC4",n="#3b82f6")=>{let r=n5(t().nodes,a,o,n);return r?(e({nodes:r.nodes,selectedElement:{type:"node",id:r.groupId}}),r.groupId):null},ungroup:a=>{let o=r5(t().nodes,a);o&&e({nodes:o,selectedElement:{type:"none",id:null}})},resizeGroup:(a,o)=>{let n=t().nodes,r=n.find(u=>u.id===a&&u.type==="group");if(!r)return;let i=o.x-r.position.x,l=o.y-r.position.y,s=n.map(u=>u.id===a?{...u,position:{x:o.x,y:o.y},width:o.width,height:o.height,style:{...u.style,width:o.width,height:o.height}}:u.parentId===a&&(i!==0||l!==0)?{...u,position:{x:u.position.x-i,y:u.position.y-l}}:u);e({nodes:s})},hydrateGraph:(a,o)=>{J_(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Oa.current=Bc(a,o),Oa.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Bc(t().nodes,t().edges);if(Oa.current&&Oa.current.sig===a.sig)return;let o=Date.now();if(Oa.current&&o-Oa.lastPushAt>=Iz){let n=Oa.current;e(r=>({past:[...r.past,n].slice(-_z),future:[]})),Oa.lastPushAt=o}Oa.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Bc(o,n);Oa.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...l.future,i]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let i=Bc(o,n);Oa.current=r,e(l=>({nodes:r.nodes,edges:r.edges,past:[...l.past,i],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Oa.current=Bc(a,o),Oa.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{Q_(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Oa.current=null,Oa.lastPushAt=0}})),i5=()=>oe(V_(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var l5=()=>oe(e=>e.past.length>0),s5=()=>oe(e=>e.future.length>0),od=()=>oe(e=>e.nodes.filter(t=>t.selected&&t.type!=="group").length>=2);var S5=N($(),1);var d5={total:0,completed:0,running:0,pending:0,percentage:0},at=td()(e=>({executionId:null,status:"idle",error:null,progress:d5,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:d5,nodeStatuses:{}})}));var u5=N($(),1),c5="(prefers-reduced-motion: reduce)";function Mz(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(c5);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function Nz(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(c5).matches}function f5(){return(0,u5.useSyncExternalStore)(Mz,Nz)}var _o=N($(),1),Ba=N(j(),1),Ez=108,h5=64,Tz=186,p5=h5+Tz,I0=8,m5=.9,Az=3,g5=.16,Dz=.98,Rz=({pathD:e,startPoint:t,endPoint:a,duration:o,delay:n=0,reverse:r=!1,className:i})=>{let s=(0,_o.useId)().replace(/[^a-zA-Z0-9_-]/g,""),u=`beam-comet-glow-${s}`,d=`beam-flow-${s}`,f=`beam-breathe-${s}`,c=(0,_o.useMemo)(()=>{if(t&&a){let b=a.x-t.x,v=a.y-t.y;return Math.max(250,Math.hypot(b,v)*1.15)}return 250},[t,a]),p=(0,_o.useRef)(null),[g,w]=(0,_o.useState)(c);(0,_o.useEffect)(()=>{if(p.current)try{let b=p.current.getTotalLength();Number.isFinite(b)&&b>0&&w(b)}catch{}},[e]);let{segments:y,calculatedDuration:h,periodPx:x}=(0,_o.useMemo)(()=>{let b=g>0?g:c,v=Math.max(1,Math.round(b/p5)),C=b/v,S=C*(h5/p5)/I0,_=o??Math.max(.5,C/Ez);return{segments:Array.from({length:I0},(D,B)=>{let U=B/(I0-1),L=U**1.4,E=m5+(Az-m5)*L,T=E+1.4,M=g5+(Dz-g5)*L,P=-(B*(_/C)*S);return{index:B,progress:U,taperedProgress:L,coreWidth:E,haloWidth:T,opacity:M,dashArray:`${S} ${C-S}`,timeDelay:n+P}}),calculatedDuration:_,periodPx:C}},[g,c,o,n]),m=`
    @keyframes ${d} {
      from { stroke-dashoffset: ${r?-x:0}px; }
      to { stroke-dashoffset: ${r?0:-x}px; }
    }
    @keyframes ${f} {
      0%, 100% { opacity: 0.88; }
      50% { opacity: 1.0; }
    }
  `;return(0,Ba.jsxs)("g",{className:i,pointerEvents:"none",children:[(0,Ba.jsxs)("defs",{children:[(0,Ba.jsx)("style",{children:m}),(0,Ba.jsxs)("filter",{id:u,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[(0,Ba.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.8",result:"blur"}),(0,Ba.jsxs)("feMerge",{children:[(0,Ba.jsx)("feMergeNode",{in:"blur"}),(0,Ba.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,Ba.jsx)("path",{ref:p,d:e,fill:"none",stroke:"none"}),(0,Ba.jsx)("g",{style:{animation:`${f} 1.6s ease-in-out infinite`},children:y.map(b=>{let v=b.index>=5;return(0,Ba.jsxs)("g",{children:[v&&(0,Ba.jsx)("path",{d:e,stroke:"var(--wb-beam-glow, #10B981)",strokeWidth:b.haloWidth,strokeLinecap:"round",strokeDasharray:b.dashArray,fill:"none",filter:`url(#${u})`,opacity:b.opacity*.75,style:{animation:`${d} ${h}s linear ${b.timeDelay}s infinite`,willChange:"stroke-dashoffset"}}),(0,Ba.jsx)("path",{d:e,stroke:b.index===7?"var(--wb-beam-start, #D4FF38)":"var(--wb-beam-end, #10B981)",strokeWidth:b.coreWidth,strokeLinecap:"round",strokeDasharray:b.dashArray,fill:"none",opacity:b.opacity,filter:b.index===7?`url(#${u})`:void 0,style:{animation:`${d} ${h}s linear ${b.timeDelay}s infinite`,willChange:"stroke-dashoffset"}})]},b.index)})})]})},x5=(0,_o.memo)(Rz);var Hc=N($(),1);var y5=N($(),1);var Pz={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.type.import_asset":"\u5BFC\u5165\u7D20\u6750","node.type.group":"\u7EC4","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.replace":"\u66FF\u6362","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165\u7D20\u6750","pill.importImage":"\u5BFC\u5165\u7D20\u6750","pill.importVideo":"\u5BFC\u5165\u7D20\u6750","pill.importAudio":"\u5BFC\u5165\u7D20\u6750","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u652F\u6301\u56FE\u7247 / \u89C6\u9891 / \u97F3\u9891\uFF0C\u62D6\u62FD\u6216\u70B9\u51FB\u5BFC\u5165\u7D20\u6750","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u4EC5\u652F\u6301\u66FF\u6362\u672C\u5730\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u751F\u6210","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.import_asset":"\u5BFC\u5165\u7D20\u6750","toolbar.add.import_assetDesc":"\u5BFC\u5165\u672C\u5730\u56FE\u7247\u3001\u89C6\u9891\u6216\u97F3\u9891\u6587\u4EF6","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","toolbar.insertTemplate":"\u63D2\u5165\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateLabel":"\u6A21\u677F","toolbar.insertTemplateEmpty":"\u8FD8\u6CA1\u6709\u53EF\u63D2\u5165\u7684\u5DE5\u4F5C\u6D41\u6A21\u677F","toolbar.insertTemplateNodes":"{count} \u4E2A\u8282\u70B9","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","clip.exportedToNode":"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.importOk":"\u5DF2\u5BFC\u5165\u7D20\u6750","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002","group.defaultTitle":"\u65B0\u5EFA\u7EC4","group.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","group.colorTitle":"\u9009\u62E9\u7EC4\u4E3B\u9898\u8272","group.layout":"\u5E03\u5C40","group.layoutTitle":"\u7EC4\u5185\u8282\u70B9\u81EA\u52A8\u5E03\u5C40","group.layoutHorizontal":"\u6C34\u5E73\u6392\u5217","group.layoutVertical":"\u5782\u76F4\u6392\u5217","group.layoutGrid":"\u7F51\u683C\u6392\u5217","group.layoutGridCompact":"\u7F51\u683C\u7D27\u51D1\u6392\u5217","group.execute":"\u6574\u7EC4\u6267\u884C","group.executeTitle":"\u72EC\u7ACB\u8FD0\u884C\u8BE5\u7EC4\u5185\u6240\u6709\u8282\u70B9","group.createWorkflow":"\u521B\u5EFA\u5DE5\u4F5C\u6D41","group.createWorkflowTitle":"\u5BFC\u51FA\u4E3A\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","group.ungroup":"\u89E3\u7EC4","group.ungroupTitle":"\u89E3\u9664\u5F53\u524D\u5206\u7EC4","group.float.createAsset":"\u521B\u5EFA\u8D44\u4EA7","group.float.createAssetTitle":"\u4FDD\u5B58\u9009\u4E2D\u8282\u70B9\u751F\u6210\u7269\u81F3\u8D44\u4EA7\u5E93","group.float.group":"\u6253\u7EC4","group.float.groupTitle":"\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4 (Cmd + G)","group.float.layoutTitle":"\u6392\u5217\u9009\u4E2D\u8282\u70B9","group.toast.grouped":"\u5DF2\u5C06\u9009\u4E2D\u8282\u70B9\u6253\u5305\u6210\u7EC4","group.toast.ungrouped":"\u5DF2\u89E3\u9664\u5206\u7EC4","group.toast.layout":"\u5DF2\u5B8C\u6210\u5E03\u5C40\u6392\u5217","group.toast.execute":"\u5DF2\u5F00\u59CB\u6574\u7EC4\u6267\u884C","template.modal.title":"\u521B\u5EFA\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.name":"\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.namePlaceholder":"\u4F8B\u5982\uFF1A\u591C\u666F\u4EBA\u50CF\u7CBE\u4FEE\u5DE5\u4F5C\u6D41","template.modal.defaultName":"\u65B0\u5EFA\u5DE5\u4F5C\u6D41\u6A21\u677F","template.modal.description":"\u529F\u80FD\u63CF\u8FF0","template.modal.descriptionPlaceholder":"\u7B80\u8981\u8BF4\u660E\u8BE5\u5DE5\u4F5C\u6D41\u7684\u529F\u80FD\u3001\u8F93\u5165\u8981\u6C42\u4E0E\u8F93\u51FA\u6548\u679C...","template.modal.tags":"\u5206\u7C7B\u6807\u7B7E","template.modal.tagsPlaceholder":"\u7528\u9017\u53F7\u5206\u9694\u6807\u7B7E","template.modal.defaultTags":"\u5B50\u56FE, \u53EF\u590D\u7528","template.modal.hint":"\u5305\u542B {count} \u4E2A\u8282\u70B9\u7684\u62D3\u6251\u4E0E\u53C2\u6570\u5C06\u88AB\u5C01\u88C5\u4E3A JSON \u6A21\u677F\uFF0C\u53EF\u63D2\u5165\u4EFB\u610F\u5F53\u524D\u753B\u5E03\u590D\u7528\u3002","template.modal.cancel":"\u53D6\u6D88","template.modal.submit":"\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.saving":"\u4FDD\u5B58\u4E2D...","template.modal.nameRequired":"\u8BF7\u8F93\u5165\u5DE5\u4F5C\u6D41\u540D\u79F0","template.modal.saved":"\u5DE5\u4F5C\u6D41\u300C{name}\u300D\u5DF2\u4FDD\u5B58\u5230\u6A21\u677F\u5E93","template.modal.failed":"\u521B\u5EFA\u5DE5\u4F5C\u6D41\u5931\u8D25","template.missingGroup":"\u7F3A\u5C11\u5206\u7EC4","template.toast.inserted":"\u5DF2\u63D2\u5165\u6A21\u677F\u300C{name}\u300D","template.toast.loadFailed":"\u8BFB\u53D6\u6A21\u677F\u5931\u8D25","asset.modal.title":"\u6279\u91CF\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93","asset.modal.name":"\u8D44\u4EA7\u540D\u79F0","asset.modal.defaultName":"\u753B\u5E03\u4EA7\u7269","asset.modal.category":"\u8D44\u4EA7\u7C7B\u522B","asset.modal.files":"\u5F85\u5165\u5E93\u672C\u5730\u6587\u4EF6\uFF08{count} \u9879\uFF09","asset.modal.empty":"\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u8DEF\u5F84\u3002\u8FDC\u7A0B\u9884\u89C8\u6216 blob \u4E0D\u4F1A\u5199\u5165\u8D44\u4EA7\u5E93\u3002","asset.modal.tags":"\u6807\u7B7E","asset.modal.tagsPlaceholder":"\u9017\u53F7\u5206\u9694\u6807\u7B7E","asset.modal.defaultTags":"AIGC, \u5DE5\u4F5C\u6D41\u751F\u6210","asset.modal.cancel":"\u53D6\u6D88","asset.modal.submit":"\u786E\u8BA4\u5199\u5165\u8D44\u4EA7\u5E93","asset.modal.saving":"\u4FDD\u5B58\u4E2D...","asset.modal.noFiles":"\u6240\u9009\u8282\u70B9\u6CA1\u6709\u53EF\u5165\u5E93\u7684\u672C\u5730\u6587\u4EF6\u8DEF\u5F84","asset.modal.nameRequired":"\u8BF7\u8F93\u5165\u8D44\u4EA7\u540D\u79F0","asset.modal.saved":"\u5DF2\u5199\u5165\u8D44\u4EA7\u5E93\uFF1A{name}","asset.modal.failed":"\u4FDD\u5B58\u5230\u8D44\u4EA7\u5E93\u5931\u8D25","asset.scope.character":"\u89D2\u8272 (Character)","asset.scope.scene":"\u573A\u666F (Scene)","asset.scope.prop":"\u9053\u5177 (Prop)","asset.scope.style":"\u98CE\u683C\u5305 (Style)","asset.scope.knowledge":"\u77E5\u8BC6\u5305 (Knowledge)","asset.scope.custom":"\u81EA\u5B9A\u4E49\u7D20\u6750 (Custom)"},b5=Pz;var zz={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.type.import_asset":"Import Asset","node.type.group":"Group","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.replace":"Replace","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import Asset","pill.importImage":"Import Asset","pill.importVideo":"Import Asset","pill.importAudio":"Import Asset","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Supports image / video / audio. Drop or click to import asset","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import asset nodes only support replacing local files, not generation","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.import_asset":"Import Asset","toolbar.add.import_assetDesc":"Import local image, video, or audio files","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","toolbar.insertTemplate":"Insert workflow template","toolbar.insertTemplateLabel":"Templates","toolbar.insertTemplateEmpty":"No reusable workflow templates yet","toolbar.insertTemplateNodes":"{count} nodes","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","clip.exportedToNode":"Video node generated and linked to canvas","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.importOk":"Asset imported","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker.","group.defaultTitle":"New group","group.renameHint":"Double-click to rename","group.colorTitle":"Choose group color","group.layout":"Layout","group.layoutTitle":"Auto-layout nodes in this group","group.layoutHorizontal":"Arrange horizontally","group.layoutVertical":"Arrange vertically","group.layoutGrid":"Arrange as grid","group.layoutGridCompact":"Compact grid","group.execute":"Run group","group.executeTitle":"Run every node in this group","group.createWorkflow":"Create workflow","group.createWorkflowTitle":"Export as a reusable workflow template","group.ungroup":"Ungroup","group.ungroupTitle":"Ungroup the selected nodes","group.float.createAsset":"Create asset","group.float.createAssetTitle":"Save selected outputs to the asset library","group.float.group":"Group","group.float.groupTitle":"Group selected nodes (Cmd + G)","group.float.layoutTitle":"Arrange selected nodes","group.toast.grouped":"Selected nodes grouped","group.toast.ungrouped":"Group removed","group.toast.layout":"Layout applied","group.toast.execute":"Group execution started","template.modal.title":"Create reusable workflow template","template.modal.name":"Workflow name","template.modal.namePlaceholder":"e.g. Night portrait retouch workflow","template.modal.defaultName":"New workflow template","template.modal.description":"Description","template.modal.descriptionPlaceholder":"What this workflow does, expected inputs, and outputs...","template.modal.tags":"Tags","template.modal.tagsPlaceholder":"Comma-separated tags","template.modal.defaultTags":"subgraph, reusable","template.modal.hint":"Topology and params of {count} nodes will be saved as JSON and can be inserted into any canvas.","template.modal.cancel":"Cancel","template.modal.submit":"Save to template library","template.modal.saving":"Saving...","template.modal.nameRequired":"Enter a workflow name","template.modal.saved":"Workflow \u201C{name}\u201D saved to the template library","template.modal.failed":"Failed to create workflow","template.missingGroup":"Missing group","template.toast.inserted":"Inserted template \u201C{name}\u201D","template.toast.loadFailed":"Failed to load template","asset.modal.title":"Save to asset library","asset.modal.name":"Asset name","asset.modal.defaultName":"Canvas output","asset.modal.category":"Asset type","asset.modal.files":"Local files to ingest ({count})","asset.modal.empty":"No local paths to ingest. Remote previews and blobs are skipped.","asset.modal.tags":"Tags","asset.modal.tagsPlaceholder":"Comma-separated tags","asset.modal.defaultTags":"AIGC, workflow","asset.modal.cancel":"Cancel","asset.modal.submit":"Write to asset library","asset.modal.saving":"Saving...","asset.modal.noFiles":"Selected nodes have no ingestible local file path","asset.modal.nameRequired":"Enter an asset name","asset.modal.saved":"Wrote to asset library: {name}","asset.modal.failed":"Failed to save to asset library","asset.scope.character":"Character","asset.scope.scene":"Scene","asset.scope.prop":"Prop","asset.scope.style":"Style pack","asset.scope.knowledge":"Knowledge pack","asset.scope.custom":"Custom"},w5=zz;var M0={zh:b5,en:w5},jm="zh",N0=new Set;function Oz(e){return N0.add(e),()=>N0.delete(e)}function Bz(){return jm}function v5(e){let t=e==="en"?"en":"zh";if(t!==jm){jm=t;for(let a of N0)a()}}function kl(e){return M0[jm][e]??M0.zh[e]??M0.en[e]??e}function se(){return(0,y5.useSyncExternalStore)(Oz,Bz),kl}var Wm=N(j(),1),Xm=28,Hz=({edgeId:e,x:t,y:a})=>{let o=se(),n=oe(l=>l.applyCanvasInputMutation),r=(0,Hc.useCallback)(l=>{l.preventDefault(),l.stopPropagation()},[]),i=(0,Hc.useCallback)(l=>{l.preventDefault(),l.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,Wm.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-Xm/2,y:a-Xm/2,width:Xm,height:Xm,children:(0,Wm.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:i,children:(0,Wm.jsx)(yl,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},C5=(0,Hc.memo)(Hz);var nd=N(j(),1),Fz=({id:e,source:t,target:a,sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s,selected:u,animated:d,data:f,style:c})=>{let[p,g,w]=Ws({sourceX:o,sourceY:n,targetX:r,targetY:i,sourcePosition:l,targetPosition:s}),y=oe(C=>{let k=C.selectedElement.id;return k&&(k===t||k===a)?!0:C.nodes.some(S=>S.selected&&(S.id===t||S.id===a))}),h=at(C=>C.nodeStatuses[a]==="running"),x=u===!0,m=d===!0||f&&typeof f=="object"&&f.flowing===!0,b=y||x||h||m,v=f5();return(0,nd.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,nd.jsx)($s,{id:e,path:p,style:c}),b&&!v&&(0,nd.jsx)(x5,{pathD:p,startPoint:{x:o,y:n},endPoint:{x:r,y:i},duration:h?.8:void 0}),(0,nd.jsx)(C5,{edgeId:e,x:g,y:w})]})},E0=(0,S5.memo)(Fz);var Ll=N($(),1);function ye(e){e.stopPropagation()}function T0(e){e.preventDefault(),e.stopPropagation()}var ge=N(j(),1),Uz=[{type:"import_asset",Icon:eo,color:"#38bdf8",bg:"rgba(56, 189, 248, 0.16)"},{type:"text",Icon:Sa,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:hr,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:nn,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:ka,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:ko,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:oa,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],qz=({onAddNode:e,pointerMode:t="select",onPointerModeChange:a,onOpenAssets:o,onOpenHelp:n,isAddMenuOpen:r,onToggleAddMenu:i,isAssetsOpen:l=!1,templates:s=[],onInsertTemplate:u})=>{let d=se(),[f,c]=(0,Ll.useState)(!1),[p,g]=(0,Ll.useState)(!1),w=r!==void 0?r:f,y=i||(()=>c(m=>!m)),h=(0,Ll.useCallback)(m=>{e(m),i?i():c(!1)},[e,i]),x=[{key:"select",icon:(0,ge.jsx)(ed,{size:18}),label:d("toolbar.selectMode"),onClick:()=>a?.("select")},{key:"pan",icon:(0,ge.jsx)(Js,{size:18}),label:d("toolbar.panMode"),onClick:()=>a?.("pan")}];return(0,ge.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:ye,onMouseDown:ye,children:[(0,ge.jsxs)("div",{style:{position:"relative"},children:[(0,ge.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${w?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:y,onContextMenu:T0,title:d("toolbar.addNode"),children:(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(ft,{size:24})})}),w&&(0,ge.jsx)("div",{className:"wf-dock-add-popover",children:Uz.map(m=>(0,ge.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:T0,children:[(0,ge.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,ge.jsx)(m.Icon,{size:18})}),(0,ge.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,ge.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,ge.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,ge.jsx)("div",{className:"wf-canvas-toolbar__divider"}),u&&(0,ge.jsxs)("div",{style:{position:"relative"},children:[(0,ge.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>g(m=>!m),title:d("toolbar.insertTemplate"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(gr,{size:20})}),(0,ge.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.insertTemplateLabel")})]}),p&&(0,ge.jsx)("div",{className:"wf-dock-add-popover wf-template-picker",children:s.length===0?(0,ge.jsx)("div",{className:"wf-template-picker__empty",children:d("toolbar.insertTemplateEmpty")}):s.map(m=>(0,ge.jsxs)("button",{type:"button",className:"wf-template-picker__item",onClick:()=>{u(m.id),g(!1)},children:[(0,ge.jsx)("span",{children:m.name}),(0,ge.jsx)("span",{className:"wf-template-picker__meta",children:d("toolbar.insertTemplateNodes").replace("{count}",String(m.nodeCount))})]},m.id))})]}),(0,ge.jsx)(Ac,{items:x,selectedKeys:[t],placement:"topCenter",children:(0,ge.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(t==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:t==="select"?(0,ge.jsx)(ed,{size:20}):(0,ge.jsx)(Js,{size:20})}),(0,ge.jsx)(nc,{size:14,style:{opacity:.6,marginLeft:2}})]})}),(0,ge.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${l?"wf-canvas-toolbar__item--active":""}`,onClick:o,title:d("toolbar.assets"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(fc,{size:20})}),(0,ge.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),n&&(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ge.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:n,title:d("toolbar.help"),children:[(0,ge.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ge.jsx)(an,{size:20})}),(0,ge.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},k5=(0,Ll.memo)(qz);var rd=N($(),1);var ve=N(j(),1),Vz={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},Gz=e=>Math.round(e.transform[2]*100),jz=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:i,onResumeExecution:l,onCancelExecution:s,onResetExecution:u})=>{let d=se(),{zoomIn:f,zoomOut:c,fitView:p}=Ca(),g=_e(Gz),w=at(A=>A.status),y=at(A=>A.progress),h=at(A=>A.error),x=w==="pending"||w==="running",m=w==="paused",b=w==="completed"||w==="error"||w==="cancelled",v=y.total>0,C=(0,rd.useCallback)(()=>{p({duration:250,padding:.1})},[p]),k=(0,rd.useCallback)(()=>{f({duration:150})},[f]),S=(0,rd.useCallback)(()=>{c({duration:150})},[c]),_=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,ve.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:ye,onMouseDown:ye,children:[r&&(x||m||b&&u?(0,ve.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[x||m?(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${w}`,children:[d(Vz[w]),v&&` (${y.completed}/${y.total})`]}),x?(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:i,title:d("exec.pauseTitle"),children:(0,ve.jsx)(Sc,{size:14})}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:l,title:d("exec.resumeTitle"),children:(0,ve.jsx)(za,{size:14})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,ve.jsx)(xa,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(za,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&u&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,ve.jsx)(_c,{size:14})})]}):(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,ve.jsx)(za,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,ve.jsx)(yc,{size:15})}),(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:d("header.zoomOut"),children:(0,ve.jsx)(vc,{size:15})}),(0,ve.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:k,title:d("header.zoomIn"),children:(0,ve.jsx)(ft,{size:15})})]}),(0,ve.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,ve.jsx)(Pa,{size:15})}),(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,ve.jsx)(Tc,{size:15})}),(0,ve.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,ve.jsx)(wc,{size:15})}),n&&(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ve.jsx)(Ac,{items:_,selectedKeys:[o],placement:"bottomRight",children:(0,ve.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,ve.jsx)(bi,{size:15})})})]})]})]})},L5=(0,rd.memo)(jz);var _a=N($(),1);var At="/omnimux-workflow";var Mt={manifest:`${At}/api/manifest`,canvasJs:`${At}/canvas.js`,workspaces:`${At}/api/workspaces`,workspace:e=>`${At}/api/workspaces/${e}`,workspaceVersion:e=>`${At}/api/workspaces/${e}/version`,workspaceAssets:e=>`${At}/api/workspaces/${e}/assets`,workspaceAssetsMkdir:e=>`${At}/api/workspaces/${e}/assets/mkdir`,workspaceAssetsIndex:e=>`${At}/api/workspaces/${e}/assets/index`,capabilities:`${At}/api/capabilities`,media:`${At}/media`,pick:`${At}/api/pick`,localFile:`${At}/api/local-file`,localFileProbe:`${At}/api/local-file/probe`,executions:e=>`${At}/api/workspaces/${e}/executions`,execution:(e,t)=>`${At}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${At}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${At}/api/workspaces/${e}/executions/${t}/events`,templates:`${At}/api/templates`,template:e=>`${At}/api/templates/${e}`};async function Yt(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body),signal:t.signal}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function _5(){return Yt(Mt.capabilities)}function I5(e,t){return Yt(Mt.workspaces,{method:"POST",body:{name:e,id:t}})}function Fc(e){return Yt(Mt.workspace(encodeURIComponent(e)))}function M5(e){return Yt(Mt.workspaceVersion(encodeURIComponent(e)))}function N5(e,t){return Yt(Mt.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function E5(e,t={}){return Yt(Mt.executions(encodeURIComponent(e)),{method:"POST",body:t})}function T5(e){return Yt(Mt.executions(encodeURIComponent(e)))}function A5(e,t){return Yt(Mt.execution(encodeURIComponent(e),encodeURIComponent(t)))}function D5(e,t){return Yt(Mt.workspaceAssets(encodeURIComponent(e)),{signal:t})}function R5(e,t){return Yt(Mt.workspaceAssets(encodeURIComponent(e)),{method:"PUT",body:t})}function P5(e,t){return Yt(Mt.workspaceAssetsMkdir(encodeURIComponent(e)),{method:"POST",body:t})}function z5(e,t){return Yt(Mt.workspaceAssetsIndex(encodeURIComponent(e)),{method:"POST",body:t})}function Pn(){return Yt(Mt.pick,{method:"POST",body:{kind:"file"}})}function O5(e){return Yt(Mt.localFileProbe,{method:"POST",body:{paths:e}})}function B5(e,t,a){return Yt(Mt.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var Xz=["character","scene","style","prop","knowledge","custom"],_l={character:"\u89D2\u8272",scene:"\u573A\u666F",style:"\u98CE\u683C\u5305",prop:"\u9053\u5177",knowledge:"\u77E5\u8BC6\u5305",custom:"\u81EA\u5B9A\u4E49"},A0=[{id:"all",label:"\u5168\u90E8"},{id:"character",label:_l.character},{id:"scene",label:_l.scene},{id:"style",label:_l.style},{id:"prop",label:_l.prop},{id:"knowledge",label:_l.knowledge},{id:"custom",label:_l.custom}];function Wz(e){return typeof e=="string"&&Xz.includes(e)?e:"custom"}function H5(e,t){let a=new URLSearchParams({id:e});return t&&a.set("file",t),`/omnimux/assets/library/preview?${a.toString()}`}function Yz(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.trim()!==""):[]}function D0(e){let t=typeof e.id=="string"&&e.id.trim()!==""?e.id:"",a=typeof e.name=="string"&&e.name.trim()!==""?e.name:"\u672A\u547D\u540D\u4E3B\u4F53",o=Wz(e.type),n=_l[o],r=Array.isArray(e.files)?e.files:[],i=e.cover&&typeof e.cover.id=="string"&&e.cover.id||(typeof e.cover_file_id=="string"?e.cover_file_id:"")||(typeof r[0]?.id=="string"?r[0].id:""),l=t&&i?H5(t,i):"",s=r.map(c=>t&&typeof c.id=="string"?H5(t,c.id):"").filter(c=>c!=="").slice(0,4),u=Yz(e.tags).filter(c=>c!==n),d=typeof e.updatedAt=="number"?e.updatedAt:typeof e.updated_at=="string"&&Date.parse(e.updated_at)||0,f=r.map(c=>{let p=typeof c.real_path=="string"?c.real_path.trim():"",g=typeof c.original_name=="string"?c.original_name.trim():"",w=typeof c.id=="string"?c.id:"";return!p&&!w&&!g?null:{...w?{id:w}:{},...p?{real_path:p}:{},...g?{original_name:g}:{}}}).filter(c=>!!c);return{id:t,name:a,avatar:l,itemCount:r.length,tags:[n,...u],updatedAt:d,previewUrls:s.length>0?s:l?[l]:[],type:o,...f.length>0?{files:f}:{}}}function Ym(e){if(!e.ok){let o=e.body?.error;return e.status===501||o==="picker-unsupported"?{kind:"unsupported"}:{kind:"error",message:e.body?.message||e.body?.error||`HTTP ${String(e.status)}`}}let t=e.body?.paths,a=Array.isArray(t)?t.filter(o=>typeof o=="string"&&o.trim()!==""):typeof e.body?.path=="string"&&e.body.path.trim()!==""?[e.body.path]:[];return a.length===0?{kind:"cancel"}:{kind:"ok",paths:a}}function Zz(){return globalThis.fetch.bind(globalThis)}async function R0(e){try{let t=await e.json();if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{}return{}}function Uc(e={}){let t=e.fetch??Zz();async function a(r={},i){try{let l=new URLSearchParams;r.type&&r.type!=="all"&&l.set("type",r.type),r.q&&l.set("q",r.q);let s=l.toString()?`?${l.toString()}`:"",u=await t(`/omnimux/assets/library${s}`,{method:"GET",signal:i}),d=await R0(u);if(!u.ok)return{ok:!1,status:u.status,subjects:[],error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let c=(Array.isArray(d.assets)?d.assets:[]).filter(p=>!!p&&typeof p=="object").map(p=>D0(p)).filter(p=>p.id!=="");return{ok:!0,status:u.status,subjects:c}}catch(l){return i?.aborted||l instanceof Error&&l.name==="AbortError"?{ok:!1,status:0,subjects:[],error:"aborted"}:{ok:!1,status:0,subjects:[],error:"network"}}}async function o(r,i="custom",l){try{let s={name:r,type:i};Array.isArray(l)&&l.length>0&&(s.files=l);let u=await t("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),d=await R0(u);if(!u.ok)return{ok:!1,status:u.status,subject:null,error:typeof d.error=="string"?d.error:`HTTP ${String(u.status)}`};let f=d.asset&&typeof d.asset=="object"?d.asset:{name:r,type:i};return{ok:!0,status:u.status,subject:D0(f)}}catch{return{ok:!1,status:0,subject:null,error:"network"}}}async function n(r){try{let i=await t("/omnimux/assets/pick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:r})}),l=await R0(i),s=Ym({ok:i.ok,status:i.status,body:{error:typeof l.error=="string"?l.error:void 0,message:typeof l.message=="string"?l.message:void 0,path:typeof l.path=="string"||l.path===null?l.path:null,paths:Array.isArray(l.paths)?l.paths:[]}});return{ok:i.ok,status:i.status,interpretation:s}}catch{return{ok:!1,status:0,interpretation:{kind:"error",message:"network"}}}}return{listLibrary:a,createLibraryAsset:o,pickAssets:n}}var TK=Uc();function sn(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}function U5(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ha(e){return typeof e=="string"?e.trim():""}function q5(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function Kz(e){return typeof e=="string"&&e.startsWith("blob:")}function dn(e){let t=Ha(e);if(!(!t||Kz(t)))return t}function $z(e){return U5(e.data)?e.data:{}}function V5(e){return Ha(e.realPath)||Ha(e.real_path)}function F5(e){return Array.isArray(e.mediaAssets)?e.mediaAssets:void 0}function Qz(e){if(e)for(let t of e){let a=dn(t?.url);if(a)return a}}function Jz(e,t){let a=Ha(t.materialType||t.mediaType).toLowerCase();if(a==="image"||a==="video"||a==="audio"||a==="text")return a;let o=Ha(e.type).toLowerCase();return o==="table"?"table":o==="video_composition"?"video_composition":o==="group"?"group":o.includes("video")||o.includes("clip")?"video":o.includes("image")||o==="media"?"image":o.includes("audio")||o.includes("sound")||o.includes("voice")?"audio":o.includes("prompt")||o.includes("text")||o.includes("script")||o==="note"?"text":o||"doc"}function e9(e,t){let a=e==="image"||e==="video"||e==="audio"||e==="text"?e:e==="video_composition"?"video":void 0,o=Ha(t.mediaUrl)||void 0,n=a?sn(a,F5(t),o):void 0;return dn(n)||dn(t.previewUrl)||dn(t.imageUrl)||dn(t.outputUrl)||dn(t.coverUrl)||dn(t.mediaUrl)||dn(t.outputVideoUrl)||dn(t.thumbnailUrl)||Qz(F5(t))}function t9(e){let t=q5(e.rowCount);if(t!==void 0&&t>0||Array.isArray(e.rows)&&e.rows.length>0)return!0;let a=U5(e.document)?e.document:null;return!!(a&&Array.isArray(a.rows)&&a.rows.length>0)}function a9(e,t,a){let o=V5(t);return e==="image"||e==="video"||e==="audio"?!!(o||a):e==="text"?!!(Ha(t.content)||Ha(t.generatedContent)):e==="table"?t9(t):e==="video_composition"?!!(dn(t.outputVideoUrl)||dn(t.thumbnailUrl)):!1}function o9(e,t,a){return Ha(a.originalName)||Ha(a.label)||Ha(a.title)||Ha(a.name)||`${e} #${t.slice(-4)}`}function n9(e){let t=Ha(e.status).toLowerCase();return t==="generating"?"generating":t==="completed"||t==="success"?"success":t==="failed"||t==="error"?"error":"idle"}function r9(e){if(!Array.isArray(e.tags))return;let t=e.tags.filter(a=>typeof a=="string"&&a.trim().length>0);return t.length>0?t:void 0}function i9(e){let t=Ha(e.id);if(!t)return null;let a=$z(e),o=Jz(e,a),n=e9(o,a);if(!a9(o,a,n))return null;let r=V5(a),i=q5(a.updatedAt)??0,l=Sl(a),s=l==="import"?"":Ha(a.prompt),u={id:t,name:o9(o,t,a),type:o,status:n9(a),nodeKind:l,updatedAt:i};n&&(u.previewUrl=n),r&&(u.real_path=r),s&&(u.prompt=s);let d=r9(a);return d&&(u.tags=d),u}function G5(e){if(!Array.isArray(e)||e.length===0)return[];let t=[];for(let a of e){if(!a||typeof a!="object")continue;let o=i9(a);o&&t.push(o)}return t}var Zm=N($(),1),j5=N(Qt(),1);var yr=N(j(),1),P0=["image","video","audio","text","other"],l9=[{id:"all",label:"\u5168\u90E8"},{id:"image",label:"\u56FE\u7247"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"},{id:"text",label:"\u6587\u672C"},{id:"other",label:"\u5176\u4ED6"}],X5=({isOpen:e,anchorRect:t,selectedTypes:a,onChange:o,onClose:n})=>{let r=(0,Zm.useRef)(null);if((0,Zm.useEffect)(()=>{if(!e)return;let f=p=>{r.current&&!r.current.contains(p.target)&&n()},c=p=>{p.key==="Escape"&&n()};return document.addEventListener("mousedown",f,!0),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",f,!0),document.removeEventListener("keydown",c)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-160),s=a.length===0||P0.every(f=>a.includes(f)),u=f=>f==="all"?s:s?!0:a.includes(f),d=f=>{if(f==="all"){o(s?["__none__"]:[]);return}if(s){let p=P0.filter(g=>g!==f);o(p);return}let c;a.includes("__none__")?c=[f]:a.includes(f)?(c=a.filter(p=>p!==f),c.length===0&&(c=["__none__"])):c=[...a.filter(p=>p!=="__none__"),f],P0.every(p=>c.includes(p))?o([]):o(c)};return(0,j5.createPortal)((0,yr.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"140px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:f=>f.stopPropagation(),children:(0,yr.jsx)("div",{className:"wf-popover-body",children:l9.map(f=>{let c=u(f.id);return(0,yr.jsx)("div",{className:`wf-popover-item ${c?"wf-popover-item--selected":""}`,onClick:()=>d(f.id),children:(0,yr.jsxs)("div",{className:"wf-popover-item-left",children:[(0,yr.jsx)("div",{className:`wf-popover-check-circle ${c?"wf-popover-check-circle--checked":""}`,children:c&&(0,yr.jsx)(Bt,{size:10,strokeWidth:3})}),(0,yr.jsx)("span",{className:"wf-popover-item-label",children:f.label})]})},f.id)})})}),document.body)};var Km=N($(),1),W5=N(Qt(),1);var vi=N(j(),1),z0=[{id:"person",name:"\u4EBA\u7269",color:"#f87171"},{id:"scene",name:"\u573A\u666F",color:"#fb923c"},{id:"draft",name:"\u5F85\u5B9A\u7248",color:"#facc15"},{id:"final",name:"\u6700\u7EC8\u7248",color:"#4ade80"},{id:"prop",name:"\u9053\u5177",color:"#38bdf8"},{id:"voice",name:"\u97F3\u8272",color:"#c084fc"},{id:"costume",name:"\u670D\u88C5",color:"#818cf8"}],Y5=({isOpen:e,anchorRect:t,selectedTags:a,onChange:o,onClose:n})=>{let r=(0,Km.useRef)(null);if((0,Km.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-150),s=u=>{a.includes(u)?o(a.filter(d=>d!==u)):o([...a,u])};return(0,W5.createPortal)((0,vi.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"136px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:u=>u.stopPropagation(),children:(0,vi.jsx)("div",{className:"wf-popover-body",children:z0.map(u=>{let d=a.includes(u.id);return(0,vi.jsx)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>s(u.id),children:(0,vi.jsxs)("div",{className:"wf-popover-item-left",children:[(0,vi.jsx)("span",{className:"wf-popover-tag-dot",style:{backgroundColor:u.color}}),(0,vi.jsx)("span",{className:"wf-popover-item-label",children:u.name})]})},u.id)})})}),document.body)};var $m=N($(),1),Z5=N(Qt(),1);var Fa=N(j(),1),K5=({isOpen:e,anchorRect:t,sortOrder:a,timeRange:o,onSortChange:n,onRangeChange:r,onClose:i})=>{let l=(0,$m.useRef)(null);if((0,$m.useEffect)(()=>{if(!e)return;let d=c=>{l.current&&!l.current.contains(c.target)&&i()},f=c=>{c.key==="Escape"&&i()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",f)}},[e,i]),!e||!t)return null;let s=t.bottom+6,u=Math.min(t.left,window.innerWidth-160);return(0,Z5.createPortal)((0,Fa.jsxs)("div",{ref:l,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${u}px`,width:"145px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:d=>d.stopPropagation(),children:[(0,Fa.jsxs)("div",{className:"wf-popover-body",children:[(0,Fa.jsxs)("div",{className:`wf-popover-item ${a==="desc"?"wf-popover-item--selected":""}`,onClick:()=>n("desc"),children:[(0,Fa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65B0\u4F18\u5148"}),a==="desc"&&(0,Fa.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]}),(0,Fa.jsxs)("div",{className:`wf-popover-item ${a==="asc"?"wf-popover-item--selected":""}`,onClick:()=>n("asc"),children:[(0,Fa.jsx)("span",{className:"wf-popover-item-label",children:"\u6700\u65E7\u4F18\u5148"}),a==="asc"&&(0,Fa.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]})]}),(0,Fa.jsx)("div",{className:"wf-popover-divider"}),(0,Fa.jsx)("div",{className:"wf-popover-body",children:[{id:"all",label:"\u5168\u90E8"},{id:"today",label:"\u4ECA\u5929"},{id:"7d",label:"\u8FD1 7 \u5929"},{id:"30d",label:"\u8FD1 30 \u5929"},{id:"custom",label:"\u81EA\u5B9A\u4E49"}].map(d=>{let f=o===d.id;return(0,Fa.jsxs)("div",{className:`wf-popover-item ${f?"wf-popover-item--selected":""}`,onClick:()=>r(d.id),children:[(0,Fa.jsx)("span",{className:"wf-popover-item-label",children:d.label}),f&&(0,Fa.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]},d.id)})})]}),document.body)};var Qm=N($(),1),$5=N(Qt(),1);var Il=N(j(),1),Q5=({isOpen:e,anchorRect:t,sortValue:a,onChange:o,onClose:n})=>{let r=(0,Qm.useRef)(null);if((0,Qm.useEffect)(()=>{if(!e)return;let u=f=>{r.current&&!r.current.contains(f.target)&&n()},d=f=>{f.key==="Escape"&&n()};return document.addEventListener("mousedown",u,!0),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("keydown",d)}},[e,n]),!e||!t)return null;let i=t.bottom+6,l=Math.min(t.left,window.innerWidth-180),s=[{id:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{id:"name",label:"\u540D\u79F0 A-Z"},{id:"count",label:"\u7D20\u6750\u6570\u91CF"}];return(0,$5.createPortal)((0,Il.jsx)("div",{ref:r,className:"wf-popover-portal nodrag nopan",style:{position:"fixed",top:`${i}px`,left:`${l}px`,width:"160px",zIndex:9999},onMouseDown:ye,onPointerDown:ye,onClick:u=>u.stopPropagation(),children:(0,Il.jsx)("div",{className:"wf-popover-body",children:s.map(u=>{let d=a===u.id;return(0,Il.jsxs)("div",{className:`wf-popover-item ${d?"wf-popover-item--selected":""}`,onClick:()=>{o(u.id),n()},children:[(0,Il.jsx)("span",{className:"wf-popover-item-label",children:u.label}),d&&(0,Il.jsx)(Bt,{size:14,className:"wf-popover-item-check"})]},u.id)})})}),document.body)};var Jm=N($(),1),J5=N(Qt(),1);var pe=N(j(),1),eI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,Jm.useRef)(null);if((0,Jm.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=220,s=440,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,J5.createPortal)((0,pe.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:ye,onPointerDown:ye,onClick:c=>c.stopPropagation(),children:[(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,pe.jsx)(Mn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7A"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-dialog"),children:[(0,pe.jsx)(gl,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u5BF9\u8BDD"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-subjects"),children:[(0,pe.jsx)(It,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("save-to-assets"),children:[(0,pe.jsx)(tc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5B58\u5230\u9879\u76EE\u8D44\u4EA7"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("focus-in-canvas"),children:[(0,pe.jsx)(Mn,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("open-preview"),children:[(0,pe.jsx)(ic,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u6253\u5F00"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318O"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,pe.jsx)(Co,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5728\u8BBF\u8FBE\u4E2D\u663E\u793A"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318\u21E7R"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-path"),children:[(0,pe.jsx)(mi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u8DEF\u5F84"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("copy-file"),children:[(0,pe.jsx)(mi,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u6587\u4EF6"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318C"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("duplicate"),children:[(0,pe.jsx)(cc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u590D\u5236\u526F\u672C"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"\u2318D"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("toggle-tree-view"),children:[(0,pe.jsx)(bc,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE"})]}),(0,pe.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,pe.jsx)(An,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Enter"})]}),(0,pe.jsx)("div",{className:"wf-context-menu-divider"}),(0,pe.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,pe.jsx)(Lo,{size:14,className:"wf-context-menu-icon"}),(0,pe.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"}),(0,pe.jsx)("span",{className:"wf-context-menu-shortcut",children:"Backspace"})]})]}),document.body)};var eg=N($(),1),tI=N(Qt(),1);var Zt=N(j(),1),aI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,eg.useRef)(null);if((0,eg.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=220,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,tI.createPortal)((0,Zt.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:ye,onPointerDown:ye,onClick:c=>c.stopPropagation(),children:[(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-canvas"),children:[(0,Zt.jsx)(Ra,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230\u753B\u5E03"})]}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("add-to-agent"),children:[(0,Zt.jsx)(gl,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u6DFB\u52A0\u5230 agent"})]}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,Zt.jsx)(Co,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,Zt.jsx)(pl,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,Zt.jsx)("div",{className:"wf-context-menu-divider"}),(0,Zt.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,Zt.jsx)(Lo,{size:14,className:"wf-context-menu-icon"}),(0,Zt.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var tg=N($(),1),oI=N(Qt(),1);var La=N(j(),1),nI=({isOpen:e,x:t,y:a,item:o,onAction:n,onClose:r})=>{let i=(0,tg.useRef)(null);if((0,tg.useEffect)(()=>{if(!e)return;let c=g=>{i.current&&!i.current.contains(g.target)&&r()},p=g=>{g.key==="Escape"&&r()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[e,r]),!e||!o)return null;let l=190,s=180,u=Math.min(t,window.innerWidth-l-10),d=Math.min(a,window.innerHeight-s-10),f=c=>{n(c,o),r()};return(0,oI.createPortal)((0,La.jsxs)("div",{ref:i,className:"wf-context-menu-portal nodrag nopan",style:{position:"fixed",top:`${Math.max(10,d)}px`,left:`${Math.max(10,u)}px`,width:`${l}px`,zIndex:1e4},onMouseDown:ye,onPointerDown:ye,onClick:c=>c.stopPropagation(),children:[(0,La.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("reveal-in-finder"),children:[(0,La.jsx)(Co,{size:14,className:"wf-context-menu-icon"}),(0,La.jsx)("span",{className:"wf-context-menu-label",children:"\u5728 Finder \u4E2D\u6253\u5F00"})]}),(0,La.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("rename"),children:[(0,La.jsx)(An,{size:14,className:"wf-context-menu-icon"}),(0,La.jsx)("span",{className:"wf-context-menu-label",children:"\u91CD\u547D\u540D"})]}),(0,La.jsxs)("div",{className:"wf-context-menu-item",onClick:()=>f("move-to"),children:[(0,La.jsx)(pl,{size:14,className:"wf-context-menu-icon"}),(0,La.jsx)("span",{className:"wf-context-menu-label",children:"\u79FB\u52A8\u5230..."})]}),(0,La.jsx)("div",{className:"wf-context-menu-divider"}),(0,La.jsxs)("div",{className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>f("delete"),children:[(0,La.jsx)(Lo,{size:14,className:"wf-context-menu-icon"}),(0,La.jsx)("span",{className:"wf-context-menu-label",children:"\u5220\u9664"})]})]}),document.body)};var Io=N($(),1);var le=N(j(),1),O0=1440*60*1e3;function s9(e,t){if(t==="all"||t==="custom")return!0;let a=Date.now()-e;return t==="today"?a<=O0:t==="7d"?a<=7*O0:t==="30d"?a<=30*O0:!0}var d9={person:["person","\u4EBA\u7269","character","\u89D2\u8272"],scene:["scene","\u573A\u666F","background","\u5E95\u56FE"],draft:["draft","\u5F85\u5B9A\u7248"],final:["final","\u6700\u7EC8\u7248"],prop:["prop","\u9053\u5177"],voice:["voice","\u97F3\u8272","audio-cue","\u97F3\u6548"],costume:["costume","\u670D\u88C5"]};function u9(e,t){if(t.length===0)return!0;let a=`${e.name} ${e.prompt||""} ${(e.tags||[]).join(" ")}`.toLowerCase();return t.some(o=>{let n=z0.find(i=>i.id===o);return[...d9[o]||[o],n?.name||""].filter(Boolean).map(i=>i.toLowerCase()).some(i=>a.includes(i))})}function c9(e,t){if(t.length===0)return!0;if(t.includes("__none__"))return!1;let a=new Set([e]);return(e==="text"||e==="table"||e==="doc")&&(a.add("text"),a.add("doc")),e==="video_composition"&&a.add("video"),["image","video","audio","text","doc","table","video_composition"].includes(e)||a.add("other"),t.some(o=>a.has(o))}var rI=({nodes:e,searchQuery:t,onSearchChange:a,onFocusNode:o,onContextMenu:n,onHoverItem:r,onRefresh:i,viewMode:l,onViewModeChange:s})=>{let[u,d]=(0,Io.useState)(""),f=t!==void 0?t:u,c=R=>{d(R),a?.(R)},[p,g]=(0,Io.useState)("tree"),w=l??p,y=R=>{g(R),s?.(R)},[h,x]=(0,Io.useState)(null),[m,b]=(0,Io.useState)({types:[],tags:[],timeRange:"all",sortOrder:"desc"}),[v,C]=(0,Io.useState)(!1),[k,S]=(0,Io.useState)(!1),[_,A]=(0,Io.useState)(!1),[D,B]=(0,Io.useState)(null),[U,L]=(0,Io.useState)(null),[E,T]=(0,Io.useState)(null),M=R=>{switch(R){case"image":return(0,le.jsx)(Ra,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,le.jsx)(oa,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,le.jsx)(ka,{size:14,style:{color:"#a855f7",flexShrink:0}});case"text":case"doc":return(0,le.jsx)(Sa,{size:14,style:{color:"#10b981",flexShrink:0}});default:return(0,le.jsx)(It,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},P=(0,Io.useMemo)(()=>{let R=e.filter(H=>{if(f.trim()){let I=f.toLowerCase();if(!(H.name.toLowerCase().includes(I)||H.prompt&&H.prompt.toLowerCase().includes(I)))return!1}return!(!c9(H.type,m.types)||!u9(H,m.tags)||!s9(H.updatedAt||0,m.timeRange))});return R.sort((H,I)=>m.sortOrder==="desc"?(I.updatedAt||0)-(H.updatedAt||0):(H.updatedAt||0)-(I.updatedAt||0)),R},[e,f,m]),O=R=>H=>{H.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-canvas-node",nodeId:R.id})),H.dataTransfer.effectAllowed="move"};return(0,le.jsxs)("div",{className:"wf-canvas-tab-view-compact",children:[(0,le.jsxs)("div",{className:"wf-assets-toolbar-compact",children:[(0,le.jsxs)("div",{className:"wf-search-row-compact",children:[(0,le.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,le.jsx)(on,{size:13,className:"wf-search-icon"}),(0,le.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u6587\u4EF6",value:f,onChange:R=>c(R.target.value)})]}),(0,le.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>y("tree"),children:(0,le.jsx)(xr,{size:13})}),(0,le.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${w==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>y("grid"),children:(0,le.jsx)(Pa,{size:13})})]}),(0,le.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u753B\u5E03\u7D20\u6750",onClick:i,children:(0,le.jsx)(br,{size:13})})]}),(0,le.jsxs)("div",{className:"wf-filter-chips-row-compact",children:[(0,le.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,le.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.types.length>0?"active":""}`,onClick:R=>{B(R.currentTarget.getBoundingClientRect()),C(H=>!H),S(!1),A(!1)},children:[(0,le.jsx)("span",{children:m.types.length>0?`\u7C7B\u578B (${m.types.includes("__none__")?0:m.types.length})`:"\u7C7B\u578B"}),(0,le.jsx)(ga,{size:11})]})}),(0,le.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,le.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.tags.length>0?"active":""}`,onClick:R=>{L(R.currentTarget.getBoundingClientRect()),S(H=>!H),C(!1),A(!1)},children:[(0,le.jsx)("span",{children:m.tags.length>0?`\u6807\u7B7E (${m.tags.length})`:"\u6807\u7B7E"}),(0,le.jsx)(ga,{size:11})]})}),(0,le.jsx)("div",{className:"wf-filter-dropdown-wrapper-compact",children:(0,le.jsxs)("button",{type:"button",className:`wf-filter-dropdown-btn-compact ${m.timeRange!=="all"||m.sortOrder==="asc"?"active":""}`,onClick:R=>{T(R.currentTarget.getBoundingClientRect()),A(H=>!H),C(!1),S(!1)},children:[(0,le.jsx)("span",{children:"\u65F6\u95F4"}),(0,le.jsx)(ga,{size:11})]})})]})]}),(0,le.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:e.length===0?(0,le.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,le.jsx)(ha,{size:24,className:"wf-assets-empty-icon"}),(0,le.jsx)("div",{className:"wf-assets-empty-title",children:"\u753B\u5E03\u6682\u65E0\u7D20\u6750"}),(0,le.jsx)("div",{className:"wf-assets-empty-subtitle",children:"\u8BF7\u5BFC\u5165\u6587\u4EF6\u6216\u6DFB\u52A0\u8282\u70B9\u5E76\u751F\u6210"})]}):P.length===0?(0,le.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,le.jsx)(ha,{size:24,className:"wf-assets-empty-icon"}),(0,le.jsx)("div",{className:"wf-assets-empty-title",children:"\u5F53\u524D\u753B\u5E03\u6682\u65E0\u5339\u914D\u7D20\u6750"})]}):w==="tree"?(0,le.jsx)("div",{className:"wf-tree-list-container-compact",children:P.map(R=>{let H=h===R.id;return(0,le.jsxs)("div",{"data-id":R.id,className:`wf-tree-item-compact ${H?"selected":""}`,draggable:!0,onDragStart:O(R),onClick:()=>{x(R.id),o(R.id)},onContextMenu:I=>{I.preventDefault(),x(R.id),n(I,R)},onMouseEnter:I=>r(R,I),onMouseLeave:()=>r(null),children:[R.previewUrl?(0,le.jsx)("img",{src:R.previewUrl,alt:R.name,className:"wf-tree-file-thumb-compact"}):(0,le.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:M(R.type)}),(0,le.jsx)("span",{className:"wf-tree-name-compact",title:R.name,children:R.name}),R.nodeKind?(0,le.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${R.nodeKind}`,children:R.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null,(0,le.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:I=>{I.stopPropagation(),o(R.id)},children:(0,le.jsx)(Mn,{size:12})})]},R.id)})}):(0,le.jsx)("div",{className:"wf-grid-view-container-compact",children:P.map(R=>(0,le.jsxs)("div",{"data-id":R.id,className:"wf-grid-card-compact",draggable:!0,onDragStart:O(R),onClick:()=>{x(R.id),o(R.id)},onContextMenu:H=>{H.preventDefault(),n(H,R)},onMouseEnter:H=>r(R,H),onMouseLeave:()=>r(null),children:[(0,le.jsx)("div",{className:"wf-grid-card-thumb-compact",children:R.previewUrl?(0,le.jsx)("img",{src:R.previewUrl,alt:R.name}):M(R.type)}),(0,le.jsxs)("div",{className:"wf-grid-card-meta-compact",children:[(0,le.jsx)("div",{className:"wf-grid-card-title-compact",title:R.name,children:R.name}),R.nodeKind?(0,le.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${R.nodeKind}`,children:R.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]})]},R.id))})}),(0,le.jsx)(X5,{isOpen:v,anchorRect:D,selectedTypes:m.types,onChange:R=>b(H=>({...H,types:R})),onClose:()=>C(!1)}),(0,le.jsx)(Y5,{isOpen:k,anchorRect:U,selectedTags:m.tags,onChange:R=>b(H=>({...H,tags:R})),onClose:()=>S(!1)}),(0,le.jsx)(K5,{isOpen:_,anchorRect:E,sortOrder:m.sortOrder,timeRange:m.timeRange,onSortChange:R=>b(H=>({...H,sortOrder:R})),onRangeChange:R=>b(H=>({...H,timeRange:R})),onClose:()=>A(!1)})]})};var qc=N($(),1);var ce=N(j(),1),iI=({assets:e,onOpenSubjects:t,onContextMenu:a,onHoverItem:o,onImportFiles:n,onCreateFolder:r,onInsertToCanvas:i,onRefresh:l})=>{let[s,u]=(0,qc.useState)("tree"),[d,f]=(0,qc.useState)(""),[c,p]=(0,qc.useState)(null),[g,w]=(0,qc.useState)({}),y=v=>{w(C=>({...C,[v]:!C[v]}))},h=v=>{switch(v){case"image":return(0,ce.jsx)(Ra,{size:14,style:{color:"#3b82f6",flexShrink:0}});case"video":return(0,ce.jsx)(oa,{size:14,style:{color:"#8b5cf6",flexShrink:0}});case"audio":return(0,ce.jsx)(ka,{size:14,style:{color:"#a855f7",flexShrink:0}});case"doc":return(0,ce.jsx)(Sa,{size:14,style:{color:"#10b981",flexShrink:0}});case"folder":return(0,ce.jsx)(Co,{size:14,style:{color:"#f59e0b",flexShrink:0}});default:return(0,ce.jsx)(It,{size:14,style:{color:"#60a5fa",flexShrink:0}})}},x=e.filter(v=>{if(d.trim()){let C=d.toLowerCase();if(!(v.name.toLowerCase().includes(C)||v.tags&&v.tags.some(S=>S.toLowerCase().includes(C))))return!1}return!0}),m=v=>x.filter(C=>(C.parentId??null)===v),b=(v,C)=>{let k=[];for(let S of m(v)){let _=S.type==="folder",A=_&&(g[S.id]??C===0),D=c===S.id;k.push((0,ce.jsxs)("div",{className:`wf-tree-item-compact ${D?"selected":""}`,style:{paddingLeft:`${8+C*14}px`},"data-asset-id":S.id,"data-parent-id":S.parentId??"",draggable:!_,onDragStart:B=>{_||(B.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:S})),B.dataTransfer.effectAllowed="copy")},onClick:()=>{p(S.id),_&&y(S.id)},onDoubleClick:()=>{_||i(S)},onContextMenu:B=>{B.preventDefault(),p(S.id),a(B,S,_)},onMouseEnter:B=>o(S,B),onMouseLeave:()=>o(null),children:[_?(0,ce.jsx)("span",{className:"wf-tree-folder-arrow-compact",children:A?(0,ce.jsx)(ga,{size:11}):(0,ce.jsx)(mr,{size:11})}):null,S.previewUrl?(0,ce.jsx)("img",{src:S.previewUrl,alt:S.name,className:"wf-tree-file-thumb-compact"}):(0,ce.jsx)("div",{className:"wf-tree-file-icon-box-compact",children:h(S.type)}),(0,ce.jsx)("span",{className:"wf-tree-name-compact",title:S.name,children:S.name}),!_&&(0,ce.jsx)("div",{className:"wf-item-locate-icon-compact",title:"\u5728\u753B\u5E03\u5B9A\u4F4D",onClick:B=>{B.stopPropagation(),i(S)},children:(0,ce.jsx)(Mn,{size:12})})]},S.id)),_&&A&&k.push(...b(S.id,C+1))}return k};return(0,ce.jsxs)("div",{className:"wf-project-assets-view-compact",children:[(0,ce.jsxs)("div",{className:"wf-subject-hero-card-compact",onClick:t,children:[(0,ce.jsxs)("div",{className:"wf-subject-hero-left-compact",children:[(0,ce.jsx)(It,{size:14,style:{color:"var(--wb-accent, #3b82f6)"}}),(0,ce.jsx)("span",{className:"wf-subject-hero-name-compact",children:"\u4E3B\u4F53\u5E93"})]}),(0,ce.jsx)(mr,{size:14,className:"wf-subject-hero-arrow"})]}),(0,ce.jsx)("div",{className:"wf-assets-toolbar-compact",children:(0,ce.jsxs)("div",{className:"wf-search-row-compact",children:[(0,ce.jsxs)("div",{className:"wf-search-input-wrapper-compact",children:[(0,ce.jsx)(on,{size:13,className:"wf-search-icon"}),(0,ce.jsx)("input",{type:"text",className:"wf-search-input-compact",placeholder:"\u641C\u7D22\u9879\u76EE\u8D44\u4EA7",value:d,onChange:v=>f(v.target.value)})]}),(0,ce.jsxs)("div",{className:"wf-view-mode-toggle-compact",children:[(0,ce.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="tree"?"active":""}`,title:"\u5217\u8868\u89C6\u56FE",onClick:()=>u("tree"),children:(0,ce.jsx)(xr,{size:13})}),(0,ce.jsx)("button",{type:"button",className:`wf-view-mode-btn-compact ${s==="grid"?"active":""}`,title:"\u7F51\u683C\u89C6\u56FE",onClick:()=>u("grid"),children:(0,ce.jsx)(Pa,{size:13})})]}),(0,ce.jsx)("button",{type:"button",className:"wf-view-mode-btn-compact",title:"\u5237\u65B0\u9879\u76EE\u8D44\u4EA7",onClick:l,children:(0,ce.jsx)(br,{size:13})})]})}),(0,ce.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:x.length===0?(0,ce.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,ce.jsx)(ha,{size:24,className:"wf-assets-empty-icon"}),(0,ce.jsx)("div",{className:"wf-assets-empty-title",children:"\u6682\u65E0\u7D20\u6750\u6587\u4EF6"})]}):s==="tree"?(0,ce.jsx)("div",{className:"wf-tree-list-container-compact",children:b(null,0)}):(0,ce.jsx)("div",{className:"wf-grid-view-container-compact",children:x.map(v=>(0,ce.jsxs)("div",{className:"wf-grid-card-compact",draggable:v.type!=="folder",onDragStart:C=>{v.type!=="folder"&&(C.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:v})),C.dataTransfer.effectAllowed="copy")},onClick:()=>p(v.id),onDoubleClick:()=>{v.type!=="folder"&&i(v)},onContextMenu:C=>{C.preventDefault(),p(v.id),a(C,v,v.type==="folder")},onMouseEnter:C=>o(v,C),onMouseLeave:()=>o(null),children:[(0,ce.jsxs)("div",{className:"wf-grid-card-thumb-compact",children:[v.previewUrl?(0,ce.jsx)("img",{src:v.previewUrl,alt:v.name}):h(v.type),v.duration&&(0,ce.jsx)("span",{className:"wf-grid-card-duration-compact",children:v.duration})]}),(0,ce.jsx)("div",{className:"wf-grid-card-meta-compact",children:(0,ce.jsx)("div",{className:"wf-grid-card-title-compact",title:v.name,children:v.name})})]},v.id))})}),(0,ce.jsxs)("div",{className:"wf-assets-bottom-bar-compact",children:[(0,ce.jsxs)("button",{type:"button",className:"wf-assets-action-secondary-btn-compact",onClick:r,children:[(0,ce.jsx)(ml,{size:13}),(0,ce.jsx)("span",{children:"\u65B0\u5EFA\u6587\u4EF6\u5939"})]}),(0,ce.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",onClick:n,children:[(0,ce.jsx)(ul,{size:13}),(0,ce.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})]})]})};var id=N($(),1);var Ie=N(j(),1),lI=({subjects:e,error:t,onBack:a,onSelectSubject:o,onCreateSubject:n})=>{let[r,i]=(0,id.useState)(""),[l,s]=(0,id.useState)("all"),[u,d]=(0,id.useState)("recent"),[f,c]=(0,id.useState)(!1),[p,g]=(0,id.useState)(null),w=x=>{g(x.currentTarget.getBoundingClientRect()),c(m=>!m)},y=e.filter(x=>{if(l!=="all")if(x.type){if(x.type!==l)return!1}else{let b=A0.find(v=>v.id===l);if(b&&b.id!=="all"&&!x.tags.some(C=>C===b.label))return!1}if(!r.trim())return!0;let m=r.toLowerCase();return x.name.toLowerCase().includes(m)||x.tags.some(b=>b.toLowerCase().includes(m))}).sort((x,m)=>u==="recent"?m.updatedAt-x.updatedAt:u==="name"?x.name.localeCompare(m.name):u==="count"?m.itemCount-x.itemCount:0);return(0,Ie.jsxs)("div",{className:"wf-subject-view-compact",children:[(0,Ie.jsxs)("div",{className:"wf-subject-nav-header-compact",children:[(0,Ie.jsxs)("button",{type:"button",className:"wf-subject-nav-back-btn-compact",onClick:a,children:[(0,Ie.jsx)(ec,{size:13}),(0,Ie.jsx)("span",{children:"\u4E3B\u4F53\u5E93"})]}),(0,Ie.jsxs)("button",{type:"button",className:"wf-subject-sort-dropdown-btn-compact",onClick:w,children:[(0,Ie.jsx)(wl,{size:11}),(0,Ie.jsx)("span",{children:(()=>{switch(u){case"recent":return"\u6700\u8FD1\u66F4\u65B0";case"name":return"\u540D\u79F0 A-Z";case"count":return"\u7D20\u6750\u6570\u91CF";default:return"\u6392\u5E8F"}})()}),(0,Ie.jsx)(ga,{size:11})]})]}),(0,Ie.jsxs)("div",{className:"wf-subject-toolbar-compact",children:[(0,Ie.jsxs)("div",{className:"wf-subject-search-input-wrapper-compact",children:[(0,Ie.jsx)(on,{size:13,className:"wf-search-icon"}),(0,Ie.jsx)("input",{type:"text",className:"wf-subject-search-input-compact",placeholder:"\u641C\u7D22\u4E3B\u4F53\u540D\u79F0\u6216\u6807\u7B7E...",value:r,onChange:x=>i(x.target.value)})]}),(0,Ie.jsx)("div",{className:"wf-subject-pills-row-compact",children:A0.map(x=>(0,Ie.jsx)("button",{type:"button",className:`wf-subject-pill-compact ${l===x.id?"active":""}`,onClick:()=>s(x.id),children:x.label},x.id))})]}),(0,Ie.jsx)("div",{className:"wf-drawer-content-scroll-compact",children:y.length===0?(0,Ie.jsxs)("div",{className:"wf-assets-empty-state-compact",children:[(0,Ie.jsx)(It,{size:24,className:"wf-assets-empty-icon"}),(0,Ie.jsx)("div",{className:"wf-assets-empty-title",children:t?"\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528":e.length===0?"\u6682\u65E0\u4E3B\u4F53":"\u672A\u627E\u5230\u5339\u914D\u7684\u4E3B\u4F53"})]}):(0,Ie.jsx)("div",{className:"wf-subject-grid-compact",children:y.map(x=>(0,Ie.jsxs)("div",{className:"wf-subject-card-compact",draggable:!0,title:x.files?.some(m=>m.real_path)?x.name:"\u65E0\u672C\u5730\u6587\u4EF6\uFF0C\u65E0\u6CD5\u5165\u753B\u5E03",onDragStart:m=>{let b=(x.files||[]).find(v=>v.real_path);m.dataTransfer.setData("application/json",JSON.stringify({type:"omnimux-asset",asset:{id:x.id,name:b?.original_name||x.name,real_path:b?.real_path,files:x.files}})),m.dataTransfer.effectAllowed="copy"},onClick:()=>o(x),children:[(0,Ie.jsxs)("div",{className:"wf-subject-card-cover-compact",children:[x.avatar?(0,Ie.jsx)("img",{src:x.avatar,alt:x.name,className:"wf-subject-card-img-compact"}):(0,Ie.jsx)("div",{className:"wf-subject-card-placeholder-compact",children:(0,Ie.jsx)(It,{size:20})}),(0,Ie.jsxs)("span",{className:"wf-subject-card-count-badge-compact",children:[(0,Ie.jsx)(ha,{size:10})," ",x.itemCount," \u9879"]})]}),(0,Ie.jsxs)("div",{className:"wf-subject-card-info-compact",children:[(0,Ie.jsx)("div",{className:"wf-subject-card-name-compact",title:x.name,children:x.name}),(0,Ie.jsx)("div",{className:"wf-subject-card-tags-compact",children:x.tags.slice(0,3).map((m,b)=>(0,Ie.jsx)("span",{className:"wf-subject-card-tag-compact",children:m},b))})]})]},x.id))})}),(0,Ie.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,Ie.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:n,children:[(0,Ie.jsx)(ft,{size:13}),(0,Ie.jsx)("span",{children:"\u65B0\u5EFA\u4E3B\u4F53"})]})}),(0,Ie.jsx)(Q5,{isOpen:f,anchorRect:p,sortValue:u,onChange:x=>d(x),onClose:()=>c(!1)})]})};var sI=N($(),1),dI=N(Qt(),1);var Be=N(j(),1),uI=({isOpen:e,x:t,y:a,item:o})=>{let n=(0,sI.useRef)(null);if(!e||!o)return null;let r=260,i=290,l=t+15;l+r>window.innerWidth-10&&(l=t-r-15);let s=a-20;s+i>window.innerHeight-10&&(s=window.innerHeight-i-10),s<10&&(s=10);let u="nodeKind"in o?o:null,d=u?null:o,f=o.updatedAt?new Date(o.updatedAt).toLocaleDateString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"2026-08-28 14:30";return(0,dI.createPortal)((0,Be.jsxs)("div",{ref:n,className:"wf-hover-inspector-portal nodrag nopan",style:{position:"fixed",top:`${s}px`,left:`${l}px`,width:`${r}px`,zIndex:10001,pointerEvents:"none"},children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-preview",children:[o.previewUrl?(0,Be.jsx)("img",{src:o.previewUrl,alt:o.name,className:"wf-hover-inspector-img"}):(0,Be.jsx)("div",{className:"wf-hover-inspector-placeholder",children:(0,Be.jsx)(It,{size:28,className:"wf-hover-inspector-placeholder-icon"})}),d?.duration&&(0,Be.jsx)("span",{className:"wf-hover-inspector-duration",children:d.duration})]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-content",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-title",title:o.name,children:[o.name,u?.nodeKind?(0,Be.jsx)("span",{className:`wf-node-kind-badge wf-node-kind-badge--${u.nodeKind}`,children:u.nodeKind==="import"?"\u5BFC\u5165":"\u751F\u6210"}):null]}),(0,Be.jsxs)("div",{className:"wf-hover-inspector-grid",children:[(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(ac,{size:12})," \u66F4\u65B0\u65F6\u95F4"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:f})]}),d?.resolution&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(En,{size:12})," \u5206\u8FA8\u7387"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:d.resolution})]}),d?.size&&(0,Be.jsxs)("div",{className:"wf-hover-inspector-row",children:[(0,Be.jsxs)("span",{className:"wf-hover-inspector-label",children:[(0,Be.jsx)(mc,{size:12})," \u6587\u4EF6\u5927\u5C0F"]}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value",children:d.size})]}),u?.nodeKind==="import"&&u.real_path?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"\u672C\u5730\u8DEF\u5F84"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",title:u.real_path,children:u.real_path})]}):null,u?.nodeKind!=="import"&&u?.prompt?(0,Be.jsxs)("div",{className:"wf-hover-inspector-row wf-hover-inspector-row--full",children:[(0,Be.jsx)("span",{className:"wf-hover-inspector-label",children:"Prompt"}),(0,Be.jsx)("span",{className:"wf-hover-inspector-value wf-hover-inspector-value--prompt",children:u.prompt})]}):null]}),d?.tags&&d.tags.length>0&&(0,Be.jsx)("div",{className:"wf-hover-inspector-tags",children:d.tags.map((c,p)=>(0,Be.jsxs)("span",{className:"wf-hover-inspector-tag",children:[(0,Be.jsx)(Mc,{size:10})," ",c]},p))})]})]}),document.body)};var Ht=N($(),1);var f9=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),p9=new Set(["mp4","webm","mov","mkv","avi","m4v"]),m9=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),g9={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function cI(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function Vc(e){return g9[cI(e)]}function fI(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=cI(e);return f9.has(o)?"image":p9.has(o)?"video":m9.has(o)?"audio":null}function ld(e){return typeof e=="string"&&e.startsWith("blob:")}function un(e){return`${At}/api/local-file?path=${encodeURIComponent(e)}`}function pI(e){if(typeof e!="string"||e.length===0)return null;try{let t=new URL(e,"http://127.0.0.1");if(!t.pathname.endsWith("/api/local-file"))return null;let a=t.searchParams.get("path");return a&&a.length>0?a:null}catch{return null}}function B0(e){return!e||e.includes("\0")?!1:e.startsWith("/")?!0:/^[a-zA-Z]:[\\/]/.test(e)}function ag(e){let t=un(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||Vc(e.name)||Vc(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function mI(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let i=a.get(r);return i?i.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=un(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function gI(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var h9=1;function Gc(){return{schemaVersion:h9,rev:0,folders:[],items:[]}}function hI(e,t,a){let o=new Set([a]),n=!0;for(;n;){n=!1;for(let r of e){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}for(let r of t){let i=r.parentId;i&&o.has(i)&&!o.has(r.id)&&(o.add(r.id),n=!0)}}return[...o]}function x9(e,t){return{id:e.id,name:e.name,type:"folder",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,itemCount:t}}function b9(e){return{id:e.id,name:e.name,type:e.type,fileExt:e.name.split(".").pop()?.toUpperCase()||"FILE",parentId:e.parentId,real_path:e.real_path,updatedAt:e.updatedAt,previewUrl:un(e.real_path)}}function xI(e){let t=new Map;for(let n of e.folders)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);for(let n of e.items)n.parentId&&t.set(n.parentId,(t.get(n.parentId)??0)+1);let a=e.folders.map(n=>x9(n,t.get(n.id)??0)),o=e.items.map(b9);return[...a,...o]}function bI(e){let[t,a]=(0,Ht.useState)(Gc),[o,n]=(0,Ht.useState)(!1),[r,i]=(0,Ht.useState)(null),l=(0,Ht.useRef)(t);l.current=t;let s=(0,Ht.useCallback)(async(x,m)=>{n(!0),i(null);try{let b=await D5(x,m);if(m.aborted)return;if(!b.ok||!b.body.assets){i(b.body.error||b.body.message||`HTTP ${String(b.status)}`),a(Gc());return}a(b.body.assets)}catch(b){if(m.aborted)return;i(b instanceof Error?b.message:String(b)),a(Gc())}finally{m.aborted||n(!1)}},[]);(0,Ht.useEffect)(()=>{if(!e){a(Gc()),i(null);return}let x=new AbortController;return s(e,x.signal),()=>x.abort()},[e,s]);let u=(0,Ht.useCallback)(x=>{a(x),i(null)},[]),d=(0,Ht.useCallback)(async(x,m)=>{if(!e)return!1;let b=await P5(e,{name:x,parentId:m??null,expectedRev:l.current.rev});return!b.ok||!b.body.assets?(i(b.body.error||b.body.message||"mkdir failed"),!1):(u(b.body.assets),!0)},[u,e]),f=(0,Ht.useCallback)(async(x,m)=>{if(!e)return!1;let b=await z5(e,{paths:x,parentId:m??null,expectedRev:l.current.rev});return!b.ok||!b.body.assets?(i(b.body.error||b.body.message||"index failed"),!1):(u(b.body.assets),!0)},[u,e]),c=(0,Ht.useCallback)(async x=>{if(!e)return!1;let m=await R5(e,{expectedRev:l.current.rev,folders:x.folders,items:x.items});return!m.ok||!m.body.assets?(i(m.body.error||m.body.message||"save failed"),!1):(u(m.body.assets),!0)},[u,e]),p=(0,Ht.useCallback)(async(x,m)=>{let b=l.current;return c({folders:b.folders.map(v=>v.id===x?{...v,name:m,updatedAt:Date.now()}:v),items:b.items})},[c]),g=(0,Ht.useCallback)(async(x,m)=>{let b=l.current;return c({folders:b.folders.map(v=>v.id===x?{...v,parentId:m,updatedAt:Date.now()}:v),items:b.items.map(v=>v.id===x?{...v,parentId:m,updatedAt:Date.now()}:v)})},[c]),w=(0,Ht.useCallback)(async x=>{let m=l.current,b=new Set(hI(m.folders,m.items,x));return c({folders:m.folders.filter(v=>!b.has(v.id)),items:m.items.filter(v=>!b.has(v.id))})},[c]),y=(0,Ht.useCallback)(async()=>{e&&await s(e,new AbortController().signal)},[s,e]),h=(0,Ht.useMemo)(()=>xI(t),[t]);return{document:t,assets:h,loading:o,error:r,refresh:y,mkdir:d,indexPaths:f,persist:c,renameFolder:p,moveNode:g,deleteNode:w}}var vr=N($(),1);var wI=Uc();function yI(e){let[t,a]=(0,vr.useState)([]),[o,n]=(0,vr.useState)(!1),[r,i]=(0,vr.useState)(null),l=(0,vr.useCallback)(async(u={},d)=>{n(!0);try{let f=await wI.listLibrary(u,d);if(d?.aborted||f.error==="aborted")return;if(!f.ok){i(f.error||"library-unavailable"),a([]);return}i(null),a(f.subjects)}finally{d?.aborted||n(!1)}},[]);(0,vr.useEffect)(()=>{if(!e)return;let u=new AbortController;return l({},u.signal),()=>u.abort()},[e,l]);let s=(0,vr.useCallback)(async(u,d)=>{let f=await wI.createLibraryAsset(u,"custom",d);return!f.ok||!f.subject?(i(f.error||"create-failed"),null):(a(c=>[f.subject,...c]),i(null),f.subject)},[]);return{subjects:t,loading:o,error:r,refresh:l,createSubject:s}}var wt=N(j(),1),w9=Uc();function y9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function v9(e){let t=e.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(t)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(t)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(t)?"audio":"doc"}function vI(e){if(e.kind!=="cancel"){if(e.kind==="unsupported"){Y.warning("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668");return}Y.error(e.kind==="error"&&e.message||"\u9009\u62E9\u6587\u4EF6\u5931\u8D25")}}var C9=({isOpen:e,onClose:t,onInsertAsset:a,nodes:o,onFocusNode:n,workspaceId:r})=>{let[i,l]=(0,_a.useState)("canvas"),[s,u]=(0,_a.useState)("normal"),[d,f]=(0,_a.useState)("tree"),[c,p]=(0,_a.useState)(320),[g,w]=(0,_a.useState)(!1),y=(0,_a.useMemo)(()=>G5(o),[o]),h=bI(r??null),x=yI(e&&s==="subject-library"),[m,b]=(0,_a.useState)({visible:!1,x:0,y:0,targetType:"canvas-item"}),[v,C]=(0,_a.useState)({visible:!1,x:0,y:0}),k=(0,_a.useRef)(null);(0,_a.useEffect)(()=>()=>{k.current&&(clearTimeout(k.current),k.current=null)},[]);let S=(0,_a.useCallback)(I=>{I.preventDefault(),w(!0);let F=I.clientX,W=c,K=Q=>{let G=Math.max(260,Math.min(500,W-(Q.clientX-F)));p(G)},ee=()=>{w(!1),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",ee)};window.addEventListener("mousemove",K),window.addEventListener("mouseup",ee)},[c]),_=I=>{if(n)n(I);else{let F=document.getElementById(I)||document.querySelector(`[data-id="${I}"]`);F&&(F.scrollIntoView({behavior:"smooth",block:"center"}),F.classList.add("highlight-pulse"),setTimeout(()=>F.classList.remove("highlight-pulse"),1800))}},A=(I,F)=>{if(k.current&&(clearTimeout(k.current),k.current=null),!I||!F){C({visible:!1,x:0,y:0});return}let{clientX:W,clientY:K}=F;k.current=setTimeout(()=>{C({visible:!0,x:W,y:K,item:I})},300)},D=(I,F)=>{b({visible:!0,x:I.clientX,y:I.clientY,targetType:"canvas-item",targetItem:F})},B=(I,F,W)=>{b({visible:!0,x:I.clientX,y:I.clientY,targetType:W?"asset-folder":"asset-item",targetItem:F})},U=I=>I.real_path||I.name,L=(I,F)=>{let K=`[${F==="canvas"?"\u7D20\u6750\u5F15\u7528":"\u9879\u76EE\u8D44\u4EA7\u5F15\u7528"}: ${I.name}]`;navigator.clipboard?.writeText(K),window.dispatchEvent(new CustomEvent("omnimux:insert-chat",{detail:{text:K,name:I.name,previewUrl:I.previewUrl,path:I.real_path}})),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u5BF9\u8BDD\uFF1A${I.name}`)},E=I=>{let F=U(I);navigator.clipboard?.writeText(F),window.dispatchEvent(new CustomEvent("omnimux:reveal-in-finder",{detail:{path:F,name:I.name}})),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF0C\u53EF\u5728\u8BBF\u8FBE\u4E2D\u5B9A\u4F4D\uFF1A${F}`)},T=(I,F)=>{switch(I){case"add-to-canvas":case"focus-in-canvas":_(F.id),Y.info("\u5DF2\u5728\u753B\u5E03\u4E2D\u5B9A\u4F4D");break;case"add-to-dialog":case"add-to-chat":L(F,"canvas");break;case"add-to-subjects":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}let W=F.name.replace(/\.[^/.]+$/,"")||F.name;x.createSubject(W,[{real_path:F.real_path,original_name:F.name}]).then(K=>{K?Y.success(`\u5DF2\u6DFB\u52A0\u5230\u4E3B\u4F53\u5E93\uFF1A${K.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528")});break}case"save-to-assets":{if(!F.real_path||F.real_path.startsWith("blob:")){Y.warning("\u65E0\u6CD5\u7D22\u5F15\u6B64\u6587\u4EF6\uFF08\u65E0\u672C\u5730\u8DEF\u5F84\uFF09");break}h.indexPaths([F.real_path]).then(W=>{W?Y.success(`\u5DF2\u5B58\u5230\u9879\u76EE\u8D44\u4EA7\uFF1A${F.name}`):Y.error("\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")});break}case"open-preview":F.previewUrl?(window.open(F.previewUrl,"_blank","noopener,noreferrer"),Y.success("\u5DF2\u6253\u5F00\u9884\u89C8")):Y.warning("\u5F53\u524D\u7D20\u6750\u6682\u65E0\u9884\u89C8");break;case"reveal-in-finder":E(F);break;case"copy-path":navigator.clipboard?.writeText(U(F)),Y.success(`\u5DF2\u590D\u5236\u8DEF\u5F84\uFF1A${U(F)}`);break;case"copy-file":navigator.clipboard?.writeText(F.name),Y.success(`\u5DF2\u590D\u5236\u6587\u4EF6\u540D\uFF1A${F.name}`);break;case"duplicate":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u590D\u5236\u8282\u70B9");break;case"toggle-tree-view":f(W=>W==="tree"?"grid":"tree"),Y.success(d==="tree"?"\u5DF2\u5207\u6362\u5230\u7F51\u683C\u89C6\u56FE":"\u5DF2\u5207\u6362\u5230\u6811\u5F62\u89C6\u56FE");break;case"rename":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u91CD\u547D\u540D\u8282\u70B9");break;case"delete":Y.info("\u8BF7\u5728\u753B\u5E03\u4E0A\u5220\u9664\u8282\u70B9");break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},M=(I,F)=>{switch(I){case"add-to-canvas":a?.(F),Y.success(`\u5DF2\u6DFB\u52A0\u5230\u753B\u5E03\uFF1A${F.name}`);break;case"add-to-agent":case"add-to-chat":L(F,"asset");break;case"reveal-in-finder":E(F);break;case"move-to":{let W=h.assets.filter(Q=>Q.type==="folder"&&Q.id!==F.id),K=W.map(Q=>Q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${K}\uFF09\uFF1A`,W[0]?.name||"");if(ee&&ee.trim()){let Q=W.find(G=>G.name===ee.trim());h.moveNode(F.id,Q?.id??null).then(G=>{G?Y.success(`\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(W=>{W?Y.success(`\u5DF2\u5220\u9664\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},P=(I,F)=>{switch(I){case"reveal-in-finder":E(F);break;case"rename":{let W=prompt("\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF1A",F.name);W&&W.trim()&&h.renameFolder(F.id,W.trim()).then(K=>{K?Y.success("\u6587\u4EF6\u5939\u5DF2\u91CD\u547D\u540D"):Y.error("\u91CD\u547D\u540D\u5931\u8D25")});break}case"move-to":{let W=h.assets.filter(Q=>Q.type==="folder"&&Q.id!==F.id),K=W.map(Q=>Q.name).join(" / ")||"\u6839\u76EE\u5F55",ee=prompt(`\u79FB\u52A8\u81F3\u76EE\u6807\u6587\u4EF6\u5939\uFF08${K}\uFF09\uFF1A`,W[0]?.name||"");if(ee&&ee.trim()){let Q=W.find(G=>G.name===ee.trim());h.moveNode(F.id,Q?.id??null).then(G=>{G?Y.success(`\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u5230\uFF1A${ee.trim()}`):Y.error("\u79FB\u52A8\u5931\u8D25")})}break}case"delete":h.deleteNode(F.id).then(W=>{W?Y.success(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939\uFF1A${F.name}`):Y.error("\u5220\u9664\u5931\u8D25")});break;default:Y.warning(`\u672A\u8BC6\u522B\u7684\u83DC\u5355\u52A8\u4F5C\uFF1A${I}`);break}},O=async()=>{let I=await Pn(),F=Ym(I);if(F.kind!=="ok"){vI(F);return}for(let W of F.paths){let K=y9(W);a?.({id:W,name:K,type:v9(K),real_path:W})}Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6\u5230\u753B\u5E03`)},R=async()=>{let F=(await w9.pickAssets("file")).interpretation;if(F.kind!=="ok"){vI(F);return}await h.indexPaths(F.paths)?Y.success(`\u5DF2\u5BFC\u5165 ${String(F.paths.length)} \u4E2A\u6587\u4EF6`):Y.error(h.error||"\u5199\u5165\u9879\u76EE\u8D44\u4EA7\u5931\u8D25")},H=()=>{let I=prompt("\u8BF7\u8F93\u5165\u65B0\u6587\u4EF6\u5939\u540D\u79F0\uFF1A","\u65B0\u5EFA\u7D20\u6750\u6587\u4EF6\u5939");!I||!I.trim()||h.mkdir(I.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939\uFF1A${I.trim()}`):Y.error(h.error||"\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25")})};return e?(0,wt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:`${c}px`},onPointerDown:ye,onMouseDown:ye,onClick:I=>I.stopPropagation(),children:[(0,wt.jsx)("div",{className:`wf-drawer-resize-handle ${g?"resizing":""}`,onMouseDown:S}),(0,wt.jsxs)("div",{className:"wf-drawer-header-compact",children:[(0,wt.jsxs)("div",{className:"wf-segmented-switch-compact",children:[(0,wt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="canvas"&&s==="normal"?"active":""}`,onClick:()=>{l("canvas"),u("normal")},children:"\u753B\u5E03"}),(0,wt.jsx)("button",{type:"button",className:`wf-segmented-tab-compact ${i==="assets"||s==="subject-library"?"active":""}`,onClick:()=>{l("assets")},children:"\u8D44\u4EA7"})]}),(0,wt.jsx)("button",{type:"button",className:"wf-drawer-close-btn-compact",onClick:t,title:"\u5173\u95ED\u62BD\u5C49 (Esc / A)",children:(0,wt.jsx)(xa,{size:14})})]}),(0,wt.jsx)("div",{className:"wf-drawer-body",children:s==="subject-library"?(0,wt.jsx)(lI,{subjects:x.subjects,error:x.error,onBack:()=>u("normal"),onSelectSubject:()=>{},onCreateSubject:()=>{let I=prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u4F53\u540D\u79F0\uFF1A","\u65B0\u4E3B\u4F53");!I||!I.trim()||x.createSubject(I.trim()).then(F=>{F?Y.success(`\u5DF2\u65B0\u5EFA\u4E3B\u4F53\uFF1A${F.name}`):Y.warning("\u4E3B\u4F53\u5E93\u6682\u4E0D\u53EF\u7528\uFF0C\u672A\u80FD\u521B\u5EFA")})}}):i==="canvas"?(0,wt.jsxs)("div",{className:"wf-drawer-tab-canvas-wrap",children:[(0,wt.jsx)(rI,{nodes:y,onFocusNode:_,onContextMenu:D,onHoverItem:A,viewMode:d,onViewModeChange:f,onRefresh:()=>{Y.success("\u5DF2\u5237\u65B0\u753B\u5E03\u7D20\u6750")}}),(0,wt.jsx)("div",{className:"wf-assets-bottom-bar-compact",children:(0,wt.jsxs)("button",{type:"button",className:"wf-assets-action-primary-btn-compact",style:{width:"100%"},onClick:()=>{O()},children:[(0,wt.jsx)(ul,{size:13}),(0,wt.jsx)("span",{children:"\u5BFC\u5165\u6587\u4EF6"})]})})]}):(0,wt.jsx)(iI,{assets:h.assets,onOpenSubjects:()=>u("subject-library"),onContextMenu:B,onHoverItem:A,onImportFiles:()=>{R()},onCreateFolder:H,onInsertToCanvas:I=>a?.(I),onRefresh:()=>{h.refresh().then(()=>Y.success("\u5DF2\u5237\u65B0\u9879\u76EE\u8D44\u4EA7"))}})}),(0,wt.jsx)(uI,{isOpen:v.visible,x:v.x,y:v.y,item:v.item||null}),(0,wt.jsx)(eI,{isOpen:m.visible&&m.targetType==="canvas-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:T,onClose:()=>b(I=>({...I,visible:!1}))}),(0,wt.jsx)(aI,{isOpen:m.visible&&m.targetType==="asset-item",x:m.x,y:m.y,item:m.targetItem||null,onAction:M,onClose:()=>b(I=>({...I,visible:!1}))}),(0,wt.jsx)(nI,{isOpen:m.visible&&m.targetType==="asset-folder",x:m.x,y:m.y,item:m.targetItem||null,onAction:P,onClose:()=>b(I=>({...I,visible:!1}))})]}):null},CI=C9;var ra=N(j(),1),S9=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],k9=({isOpen:e,onClose:t})=>e?(0,ra.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:ye,onMouseDown:ye,onClick:t,children:(0,ra.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,ra.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,ra.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,ra.jsx)(xc,{size:18}),(0,ra.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,ra.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,ra.jsx)(xa,{size:16})})]}),(0,ra.jsx)("div",{className:"wf-shortcuts-modal__body",children:S9.map(a=>(0,ra.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,ra.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,ra.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,ra.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,ra.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,ra.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,i)=>(0,ra.jsx)("kbd",{className:"wf-kbd",children:r},i))})]},n))})]},a.title))})]})}):null,SI=k9;var Xo=N($(),1),_I=N(Qt(),1);var ia=N(j(),1),kI=278,Nl=12,L9=8,H0=160,Ml=18,_9={AudioLines:(0,ia.jsx)(cl,{size:Ml}),ImageGen:(0,ia.jsx)(hr,{size:Ml}),Mic:(0,ia.jsx)(hl,{size:Ml}),PersonStanding:(0,ia.jsx)(kc,{size:Ml}),TextGen:(0,ia.jsx)(wr,{size:Ml}),VideoGen:(0,ia.jsx)(nn,{size:Ml})},I9={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function LI(e){return e?I9[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function M9(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-kI:e;return Math.min(Math.max(Nl,o),Math.max(Nl,a-kI-Nl))}var N9=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:i,align:l="start"})=>{let s=(0,Xo.useRef)(null),[u,d]=(0,Xo.useState)({left:t,top:a,maxHeight:H0});(0,Xo.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?H0:window.innerHeight,p=M9(t,l),g=a+L9,w=Math.max(Nl,c-Nl-H0),y=Math.min(Math.max(Nl,g),w);d({left:p,top:y,maxHeight:Math.max(0,c-y-Nl)})},[l,e,t,a]),(0,Xo.useEffect)(()=>{if(!e)return;let c=g=>{s.current&&!s.current.contains(g.target)&&i()},p=g=>{g.key==="Escape"&&i()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[i,e]);let f=(0,Xo.useMemo)(()=>n.map(c=>(0,ia.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,ia.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,ia.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:LI(c.icon).bg,color:LI(c.icon).color},children:_9[c.icon]??(0,ia.jsx)(It,{size:Ml})}):null,(0,ia.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,ia.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,ia.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,_I.createPortal)((0,ia.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,ia.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,ia.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},og=(0,Xo.memo)(N9);var Wo=N($(),1),II=N(Qt(),1);var Xe=N(j(),1),E9=210,T9=230,A9=260,D9=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:i,canUndo:l=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,Wo.useRef)(null),[c,p]=(0,Wo.useState)("main"),g=se();(0,Wo.useEffect)(()=>{a&&p("main")},[a]),(0,Wo.useEffect)(()=>{if(!a)return;let b=C=>{f.current&&!f.current.contains(C.target)&&n()},v=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",v)}},[a,n]);let w=(0,Wo.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"import-asset",label:g("toolbar.add.import_asset"),icon:(0,Xe.jsx)(eo,{size:15})},{action:"open-add-node",label:g("menu.addNode"),icon:(0,Xe.jsx)(ft,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!l},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,l,s,u,d,g]),y=(0,Wo.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Xe.jsx)(wr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Xe.jsx)(Ra,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Xe.jsx)(nn,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Xe.jsx)(cl,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,Xe.jsx)(ko,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,Xe.jsx)(oa,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?T9:E9,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-A9-8);return(0,II.createPortal)((0,Xe.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:b=>b.preventDefault(),children:c==="main"?w.map(b=>(0,Xe.jsxs)(Wo.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,Xe.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,Xe.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Xe.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:v=>{v.stopPropagation(),b.action==="open-add-node"?p("add-node"):r(b.action,o)},children:[b.icon?(0,Xe.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,Xe.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,Xe.jsx)(mr,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,Xe.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,Xe.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Xe.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Xe.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),p("main")},title:g("menu.back"),children:(0,Xe.jsx)(oc,{size:16})}),(0,Xe.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Xe.jsx)("div",{className:"wf-add-node-menu__list",children:y.map(b=>(0,Xe.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:v=>{v.stopPropagation(),i?.(b.type),n()},children:[(0,Xe.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,Xe.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,Xe.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,Xe.jsx)(mr,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},MI=D9;var NI=N($(),1),EI=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:i=!1,onUndo:l,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:w,onCategoryKey:y,onGroupSelected:h,onUngroupSelected:x,isAssetsOpen:m=!1,enabled:b=!0})=>{(0,NI.useEffect)(()=>{if(!b)return;let v=C=>{let k=C.target;if(["INPUT","TEXTAREA"].includes(k.tagName)||k.isContentEditable)return;let S=C.metaKey||C.ctrlKey,_=C.key.toLowerCase();if(!S&&m&&/^[1-6]$/.test(C.key)){C.preventDefault(),y?.(parseInt(C.key,10));return}if(!S&&_==="a"){C.preventDefault(),u?.();return}if(!S&&_==="v"){C.preventDefault(),p?.("select");return}if(!S&&_==="h"){C.preventDefault(),p?.("pan");return}if(!S&&_==="n"){C.preventDefault(),c?.();return}if(!S&&_==="m"){C.preventDefault(),f?.();return}if(C.key==="?"||C.shiftKey&&C.key==="/"){C.preventDefault(),d?.();return}if(S&&C.key==="1"){C.preventDefault(),g?.();return}if(S&&C.key==="0"){C.preventDefault(),w?.();return}if((C.key==="Delete"||C.key==="Backspace")&&i&&!S){C.preventDefault(),o?.();return}if(C.key==="Escape"){C.preventDefault(),m?u?.():i&&n?.();return}if(S&&_==="g"&&C.shiftKey){C.preventDefault(),x?.();return}if(S&&_==="g"&&!C.shiftKey){C.preventDefault(),h?.();return}if(S&&_==="d"&&i){C.preventDefault(),r?.();return}if(S&&_==="c"&&!C.shiftKey){C.preventDefault(),e?.();return}if(S&&_==="v"){C.preventDefault(),t?.();return}if(S&&_==="a"){C.preventDefault(),a?.();return}if(S&&_==="z"&&!C.shiftKey){C.preventDefault(),l?.();return}S&&_==="z"&&C.shiftKey&&(C.preventDefault(),s?.())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[b,e,t,a,o,n,r,i,l,s,u,d,f,c,p,g,w,y,h,x,m])};var cn=N($(),1);function ng(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function TI(e,t,a){return F0(e,t,a).valid}function F0(e,t,a){let o=Hm(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var U0={minZoom:.23,maxZoom:1.29,defaultZoom:1},R9={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},AI={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},P9={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},z9={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},DI={portrait:R9,square:AI,video_landscape:P9,audio_compact:z9};function q0(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function RI(e){return DI[q0(e)]}function PI(e,t){let a=DI[t]||AI;return Math.round(e/a.aspectRatio)}function zn(e){return RI(e).default.width}function sd(e){return RI(e).default.height}function rg(e,t,a){let o=Pc(e,{nodeKind:"generate",status:"empty",nodeWidth:zn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function V0(e="image",t={x:0,y:0},a){let o=Pc(e,{nodeKind:"import",selectedTool:"import",status:"empty",nodeWidth:zn(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function dd(e,t,a){return{nodes:[rg(e,t,a)],edges:[]}}function G0(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function O9(e,t){return`${e}-${t}`}function ig(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function lg(e){return Z_(e).map(t=>{let a=String(t.targetTool);return{key:O9(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function zI(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var B9={visible:!1,x:0,y:0,options:[]};function OI(e){let t=se(),{screenToFlowPosition:a}=Ca(),o=oe(p=>p.applyCanvasInputMutation),n=(0,cn.useRef)(e?.onReject);n.current=e?.onReject;let[r,i]=(0,cn.useState)(B9),l=(0,cn.useRef)(null),s=(0,cn.useRef)(null),u=(0,cn.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){l.current=null;return}let w=oe.getState().nodes.find(h=>h.id===g.nodeId),y=w?.data?.materialType;if(!w||!y){l.current=null;return}l.current={nodeId:g.nodeId,materialType:y}},[]),d=(0,cn.useCallback)((p,g)=>{let w=g.fromNode?.id??null,y=g.toNode?.id??null,h=l.current,x=h?lg(h.materialType):[],m=null;if(!g.isValid&&w&&y){let v=oe.getState(),C=F0({source:w,target:y,sourceHandle:null,targetHandle:null},v.nodes,v.edges);m=C.valid?null:t(ng(C.reasonCode))}let b=zI({isValid:g.isValid??null,fromNodeId:w,toNodeId:y,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),Y.warning(b.reason),l.current=null;return}if(b.type==="menu"&&h){let v="changedTouches"in p?p.changedTouches[0]:p;if(!v){l.current=null;return}let{clientX:C,clientY:k}=v;s.current=a({x:C,y:k}),i({visible:!0,x:C,y:k,options:x.map(S=>({key:S.key,label:t(S.labelKey),description:t(S.descKey),icon:S.icon}))});return}l.current=null},[a,t]),f=(0,cn.useCallback)(p=>{let g=l.current,w=s.current,y=ig(p);if(g&&w&&y){let h=dd(y.targetMaterialType,w),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}i(h=>({...h,visible:!1})),l.current=null,s.current=null},[o]),c=(0,cn.useCallback)(()=>{i(p=>({...p,visible:!1})),l.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var On=N($(),1);var ba=[];for(let e=0;e<256;++e)ba.push((e+256).toString(16).slice(1));function BI(e,t=0){return(ba[e[t+0]]+ba[e[t+1]]+ba[e[t+2]]+ba[e[t+3]]+"-"+ba[e[t+4]]+ba[e[t+5]]+"-"+ba[e[t+6]]+ba[e[t+7]]+"-"+ba[e[t+8]]+ba[e[t+9]]+"-"+ba[e[t+10]]+ba[e[t+11]]+ba[e[t+12]]+ba[e[t+13]]+ba[e[t+14]]+ba[e[t+15]]).toLowerCase()}var j0,H9=new Uint8Array(16);function X0(){if(!j0){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");j0=crypto.getRandomValues.bind(crypto)}return j0(H9)}var F9=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),W0={randomUUID:F9};function U9(e,t,a){e=e||{};let o=e.random??e.rng?.()??X0();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return BI(o)}function q9(e,t,a){return W0.randomUUID&&!t&&!e?W0.randomUUID():U9(e,t,a)}var sg=q9;function HI(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function V9(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function FI(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=V9(o),i,l;if(t)i=t.x,l=t.y;else{let f=a?50:30;i=r.x+f,l=r.y+f}let s=new Map,u=o.map(f=>{let c=sg();return s.set(f.id,c),{...f,id:c,position:{x:i+(f.position.x-r.x),y:l+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:sg(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:i,y:l}}}function UI(e,t){let a=(0,On.useRef)({nodes:[],edges:[]}),o=(0,On.useRef)(null),n=a.current.nodes.length>0,r=(0,On.useCallback)(()=>{let f=oe.getState(),c=HI(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),i=(0,On.useCallback)(f=>{let c=FI(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=oe.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),l=(0,On.useCallback)(()=>{r(),i()},[r,i]),s=(0,On.useCallback)(()=>{let f=oe.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,On.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,On.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:i,duplicateSelectedNodes:l,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var Bn=N($(),1);function qI(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:i,selectAllNodes:l,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,Bn.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),w=(0,Bn.useCallback)((C,k)=>{C.preventDefault();let S={type:"pane"};k?S={type:"node",nodeId:k.id}:oe.getState().nodes.filter(A=>A.selected).length>1&&(S={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:S})},[]),y=(0,Bn.useCallback)((C,k)=>{w(C,k)},[w]),h=(0,Bn.useCallback)(C=>{w(C)},[w]),x=(0,Bn.useCallback)(C=>{w(C)},[w]),m=(0,Bn.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),b=(0,Bn.useCallback)((C,k)=>{let S=t({x:p.x,y:p.y});switch(C){case"import-asset":c?.("import_asset",S);break;case"copy":{if(k.type==="node"){let A=oe.getState().nodes.find(D=>D.id===k.nodeId);A&&!A.selected&&(s(),a(D=>D.map(B=>B.id===k.nodeId?{...B,selected:!0}:B)))}o();break}case"paste":n(S);break;case"duplicate":r();break;case"delete":{if(k.type==="node"){let _=oe.getState();_.nodes.find(D=>D.id===k.nodeId)?.selected?i():_.applyCanvasInputMutation({removeNodeIds:[k.nodeId]})}else i();break}case"undo":u();break;case"redo":d();break;case"select-all":l();break;case"execute-selection":{let _=oe.getState().nodes.filter(A=>A.selected).map(A=>A.id);_.length>0&&f?.(_);break}case"execute-node":{k.type==="node"&&f?.([k.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,i,u,d,l,m,f,c]),v=(0,Bn.useCallback)(C=>{let k=t({x:p.x,y:p.y});c?.(C,k),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:y,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:v}}function G9(e,t){if(!t||!Array.isArray(e))return{focused:!1};let a=e.find(o=>o.id===t);return a?{focused:!0,nodeId:a.id,x:a.position.x+100,y:a.position.y+100,zoom:1,duration:800}:{focused:!1}}function Y0(e){let t=G9(e.nodes,e.nodeId);return t.focused?(e.setCenter(t.x,t.y,{zoom:t.zoom,duration:t.duration}),e.setNodes(a=>a.map(o=>({...o,selected:o.id===e.nodeId}))),!0):!1}function jc(e){let t=e.path;return typeof t=="string"?t:""}function j9(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function Ci(e,t={}){if(!e)return null;let a=t.name||j9(e),o=t.mime||Vc(a)||Vc(e)||"",n=fI(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:un(e)}:null}function Si(e){let t=[];for(let a of e){let o=Ci(a);o&&t.push(o)}return t}function Z0(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Hn(e){return typeof e=="string"?e.trim():""}function VI(e){if(!Array.isArray(e.files)||e.files.length===0)return null;let t=e.files[0];return Z0(t)?t:null}function X9(e){if(!Z0(e))return"";let t=Hn(e.real_path)||Hn(e.realPath);if(t)return t;let a=VI(e);return a?Hn(a.real_path)||Hn(a.realPath)||Hn(a.path):""}function W9(e){let t=Hn(e.name)||Hn(e.originalName)||Hn(e.title);if(t)return t;let a=VI(e);return a&&(Hn(a.original_name)||Hn(a.name))||void 0}function GI(e){let t=X9(e);if(!t)return{ok:!1,reason:"needPath"};let a=Z0(e)?{name:W9(e)}:{},o=Ci(t,a);return o?{ok:!0,draft:o}:{ok:!1,reason:"unsupported"}}var dg=["image","video","audio"],Y9=80,Z9=40,K0=40;function WI(e){return!!e&&typeof e=="object"}function YI(e){return WI(e.data)?e.data:{}}function ZI(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function KI(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function K9(e){let t=e.dimensions;if(WI(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function $9(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function Q9(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function $I(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function J9(e,t){if(!dg.includes(e))return!1;if(sn(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function QI(e,t,a){let o=$I(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let i=YI(r),l=ZI(i.materialType);if(!l||!J9(l,i))continue;let s=$9(i,r.id),u=K9(i);n.push({nodeId:r.id,materialType:l,title:s,previewUrl:sn(l,i.mediaAssets,typeof i.mediaUrl=="string"?i.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:Q9(i,s,r.id,u),width:u.width,height:u.height})}return n}function JI(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function jI(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function XI(e,t){return Bm(e,t)}function ug(e){return ag({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function eO(e,t,a){let o=zn(a),n=sd(a);return{x:e.position.x-o-Y9,y:e.position.y+t*(n+Z9)}}function tO(e){return ZI(YI(e).materialType)}function eM(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(w=>w.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let i=$I(e.edges,e.targetNodeId),l=new Set(i);for(let w of e.selectedCanvasNodeIds){if(w===e.targetNodeId){t.push({id:w,reason:"self"});continue}if(i.has(w)||l.has(w)){t.push({id:w,reason:"already_connected"});continue}let y=e.nodes.find(h=>h.id===w);if(!y){t.push({id:w,reason:"missing"});continue}if(!XI(y,r)){t.push({id:w,reason:"type_contract"});continue}a.push(jI(w,e.targetNodeId)),l.add(w)}let s=e.localFiles.filter(w=>!w.realPath||!dg.includes(w.materialType)?(t.push({id:w.id,reason:"unsupported"}),!1):!0),u=tO(r),d=s[0],f=!!u&&dg.includes(u)&&!!d&&d.materialType===u,c=0,p=f?s.slice(1):s;f&&d&&n.push({nodeId:e.targetNodeId,data:ug(d)});for(let w of p){let y=eO(r,c,w.materialType),h=rg(w.materialType,y,{...ug(w),label:w.name.replace(/\.[^.]+$/,"")||w.name});if(!XI(h,r)){t.push({id:w.id,reason:"type_contract"});continue}o.push(h),a.push(jI(h.id,e.targetNodeId)),l.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}function tM(e,t){return e.filter(a=>!a.realPath||!dg.includes(a.materialType)?(t.push({id:a.id,reason:"unsupported"}),!1):!0)}function aM(e,t,a=!1){let o=V0(e.materialType,t,{...ug(e),label:e.name.replace(/\.[^.]+$/,"")||e.name});return a?{...o,selected:!0}:o}function $0(e){let t=[],a=tM(e.files,t),o=[],n=e.origin.y;return a.forEach((r,i)=>{let l=sd(r.materialType);o.push(aM(r,{x:e.origin.x,y:n},i===a.length-1)),n+=l+K0}),{hasWork:o.length>0,rejected:t,addNodes:o.length>0?o:void 0}}function Xc(e){let t=[],a=e.nodes.find(s=>s.id===e.targetNodeId);if(!a)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let o=tM(e.files,t),n=o[0];if(!n)return{hasWork:!1,rejected:t};let r=[{nodeId:e.targetNodeId,data:{...ug(n),materialType:n.materialType,nodeKind:"import",selectedTool:"import",nodeWidth:zn(n.materialType),nodeHeight:sd(n.materialType),label:n.name.replace(/\.[^.]+$/,"")||n.name}}],i=[],l=a.position.y+sd(n.materialType)+K0;return o.slice(1).forEach((s,u,d)=>{let f=sd(s.materialType);i.push(aM(s,{x:a.position.x,y:l},u===d.length-1)),l+=f+K0}),{hasWork:!0,rejected:t,nodePatches:r,addNodes:i.length>0?i:void 0}}var aO=N($(),1),Q0=new Map;function Wc(e){Q0.set(e.type,e)}function oM(){let e={};for(let[t,a]of Q0)e[t]=a.component;return e}function nM(e,t,a){let o=Q0.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var ht=N($(),1);var ot=N($(),1);function rM(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var fn=N(j(),1),oO=4,nO=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=se(),[i,l]=(0,ot.useState)(!1),[s,u]=(0,ot.useState)(!1),[d,f]=(0,ot.useState)(null),c=(0,ot.useRef)(null),p=(0,ot.useRef)(null),g=(0,ot.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),w=e==="left",y=a==="plus"&&!!o&&o.length>0,h=y0(M=>M.inProgress),{screenToFlowPosition:x}=Ca(),m=(0,ot.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,ot.useEffect)(()=>{if(a!=="plus"){m();return}let M=c.current,P=p.current;if(!M||!P)return;let O=R=>{if(s)return;let H=M.getBoundingClientRect(),I=H.left+H.width/2,F=H.top+H.height/2,{x:W,y:K}=rM(e,R.clientX-I,R.clientY-F);P.style.setProperty("--wf-handle-offset-x",`${W}px`),P.style.setProperty("--wf-handle-offset-y",`${K}px`)};return M.addEventListener("pointermove",O),()=>{M.removeEventListener("pointermove",O)}},[s,m,e,a]),(0,ot.useEffect)(()=>{if(!s){m(),f(null);return}let M=()=>{let P=c.current;if(!P)return;let O=P.getBoundingClientRect();f({x:w?O.right:O.left,y:O.bottom})};return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[s,w,m]);let b=(0,ot.useCallback)(()=>{l(!0)},[]),v=(0,ot.useCallback)(()=>{l(!1),m()},[m]),C=(0,ot.useCallback)(M=>{let P=c.current;!P||M===null||typeof P.hasPointerCapture!="function"||typeof P.releasePointerCapture!="function"||!P.hasPointerCapture(M)||P.releasePointerCapture(M)},[]),k=(0,ot.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),S=(0,ot.useCallback)(M=>{M.button===0&&(typeof M.currentTarget.setPointerCapture=="function"&&M.currentTarget.setPointerCapture(M.pointerId),g.current.pointerId=M.pointerId,g.current.startX=M.clientX,g.current.startY=M.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),_=(0,ot.useCallback)(M=>{if(g.current.pointerId!==M.pointerId)return;Math.hypot(M.clientX-g.current.startX,M.clientY-g.current.startY)>=oO&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),A=(0,ot.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),k())},[k]),D=(0,ot.useCallback)(M=>{g.current.pointerId===M.pointerId&&(g.current.suppressClick=!1,k())},[k]),B=(0,ot.useCallback)(M=>{if(M.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}y&&u(P=>!P)},[y]),U=(0,ot.useCallback)(()=>{let M=d;if(!M){let P=c.current;if(!P)return;let O=P.getBoundingClientRect();M={x:w?O.right:O.left,y:O.bottom}}return{screenPosition:M,flowPosition:x(M)}},[w,d,x]),L=(0,ot.useCallback)(M=>{n?.(M,U()),u(!1)},[n,U]),E=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",i?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),T={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,fn.jsxs)(Ks,{id:w?"in":"out",type:w?"target":"source",position:w?ie.Left:ie.Right,isConnectable:!0,className:E,style:T,children:[(0,fn.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,fn.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,fn.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,fn.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:v,onPointerDown:S,onPointerMove:_,onPointerUp:A,onPointerCancel:D,onClick:B,children:(0,fn.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,fn.jsx)("div",{className:"wf-handle__plus-button",children:(0,fn.jsx)(ft,{size:24,strokeWidth:2.5})})})}):null,y&&d?(0,fn.jsx)(og,{visible:s,x:d.x,y:d.y,align:w?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Cr=(0,ot.memo)(nO);var pn=N($(),1);var ud=N(j(),1),iM=({children:e,borderRadius:t="inherit",className:a="",style:o={}})=>(0,ud.jsxs)("div",{className:`wf-organic-shimmer-container ${a}`,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,...o},children:[(0,ud.jsx)("div",{className:"wf-organic-shimmer-track"}),(0,ud.jsx)("div",{className:"wf-organic-shimmer-glow"}),e?(0,ud.jsx)("div",{style:{position:"relative",zIndex:2,width:"100%",height:"100%"},children:e}):null]});var wa=N(j(),1);function rO(e){let t=se();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var iO=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:i="",transitionDuration:l=400})=>{let s=se(),u=(0,pn.useRef)(e),[d,f]=(0,pn.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,pn.useState)(1),[g,w]=(0,pn.useState)(e==="completed"?1:0),[y,h]=(0,pn.useState)(e==="pending"||e==="generating");(0,pn.useEffect)(()=>{let B=u.current;if(u.current=e,(B==="pending"||B==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),w(1)});let U=setTimeout(()=>{f("complete"),h(!1)},l+50);return()=>clearTimeout(U)}B==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),w(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),w(0),f("idle")),e==="failed"&&(h(!1),f("idle")),B===e&&e==="completed"&&(f("complete"),w(1),h(!1))},[e,l]);let x=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",v=s(e==="pending"?"node.preparing":"node.generating"),C=rO(a),k=(0,pn.useCallback)(()=>({transition:`opacity ${l}ms ease-out`}),[l]),S=`wf-gsc__box--${t}`,_=()=>(0,wa.jsx)("div",{className:"wf-gsc__skeleton",style:{...k(),opacity:c},children:(0,wa.jsx)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${S}`,children:(0,wa.jsx)(iM,{borderRadius:"inherit",children:(0,wa.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,wa.jsx)("span",{className:"wf-gsc__progress-text",children:v})})})})}),A=()=>(0,wa.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${S} ${i}`,children:[(0,wa.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,wa.jsx)(xa,{size:24})}),(0,wa.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),C?(0,wa.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,wa.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,wa.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,wa.jsx)(br,{size:14}),s("node.regenerate")]}):null]}),D=B=>(0,wa.jsx)("div",{className:`${i} ${B?"wf-gsc__content--blur":""}`,style:{...k(),opacity:g},children:r});return(0,wa.jsxs)("div",{className:`wf-gsc ${x?S:""} ${i}`,children:[(x||y)&&_(),m&&A(),(b||d==="crossfading")&&D(d==="crossfading")]})},Yc=iO;var Ft=N($(),1);var ki=N(j(),1),lM=24,sM=30,dM={text:Sa,image:hr,video:nn,audio:ka,table:ko,video_composition:oa,import_asset:eo},lO=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=se(),i=t?r(`node.type.${t}`):"\u8282\u70B9",l=e||i,{zoom:s}=Ja(),[u,d]=(0,Ft.useState)(!1),[f,c]=(0,Ft.useState)(l),p=(0,Ft.useRef)(null),g=(0,Ft.useMemo)(()=>oo(s),[s]);(0,Ft.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,Ft.useEffect)(()=>{u||c(l)},[l,u]);let w=(0,Ft.useCallback)(C=>{C.stopPropagation(),d(!0),c(l)},[l]),y=(0,Ft.useCallback)(()=>{let k=f.trim()||i;d(!1),k!==e&&o&&o(k)},[f,i,e,o]),h=(0,Ft.useCallback)(()=>{d(!1),c(l)},[l]),x=(0,Ft.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),y()):C.key==="Escape"&&(C.preventDefault(),h())},[y,h]),m=(0,Ft.useCallback)(C=>{let k=C.target.value;k.length<=sM&&c(k)},[]),b=()=>{if(a)return Ft.default.isValidElement(a)?a:(0,ki.jsx)(a,{size:14});let C=(t in dM?dM[t]:null)||Sa;return(0,ki.jsx)(C,{size:14})};return(0,ki.jsxs)("div",{className:"wf-node-header",style:{top:-(lM+4*g),height:lM,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,ki.jsx)("span",{className:"wf-node-header__icon",children:b()}),u?(0,ki.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:y,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:sM}):(0,ki.jsx)("span",{onDoubleClick:w,className:"wf-node-header__label",title:l.length>20?l:r("node.renameHint"),children:l}),n]})},cd=(0,Ft.memo)(lO);var cg=N($(),1);var Fn=N(j(),1),sO=({executionStatus:e,status:t})=>{let a=se();return(0,cg.useMemo)(()=>{switch(e){case"running":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,Fn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},fg=(0,cg.memo)(sO);var El=N($(),1);var Zc=N(j(),1);var dO=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,status:n,isMissing:r,onMediaSizeChange:i})=>{let l=(0,El.useMemo)(()=>sn(e,t,a),[e,t,a]),s=(0,El.useCallback)(d=>{let f=d.currentTarget;f.naturalWidth>0&&f.naturalHeight>0&&i?.(f.naturalWidth,f.naturalHeight)},[i]),u=(0,El.useCallback)(d=>{let f=d.currentTarget;f.videoWidth>0&&f.videoHeight>0&&i?.(f.videoWidth,f.videoHeight)},[i]);if(n==="offline"||r||!l)return null;switch(e){case"image":return(0,Zc.jsx)("img",{src:l,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:s});case"video":return(0,Zc.jsx)("video",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:u});case"audio":return(0,Zc.jsx)("div",{className:"wf-media-preview__audio",children:(0,Zc.jsx)("audio",{src:l,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},uM=(0,El.memo)(dO);var cM=N($(),1);var Fe=N(j(),1),uO=({materialType:e,nodeKind:t="generate",onApplyPreset:a,onStartEdit:o})=>{let n=se();return t==="import"?(0,Fe.jsxs)("div",{className:"wf-node-empty wf-node-empty--import-kind",children:[(0,Fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Fe.jsx)(eo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})}),(0,Fe.jsx)("div",{className:"wf-node-empty__try-label",children:n("panel.dropToImport")})]}):e==="text"?(0,Fe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Fe.jsx)(Sa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Fe.jsx)("div",{className:"wf-node-empty__try-label",children:n("pills.tryLabel")}),(0,Fe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:r=>r.stopPropagation(),children:[(0,Fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:o,children:[(0,Fe.jsx)(Tn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Fe.jsx)("span",{children:n("pills.writePrompt")})]}),(0,Fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("script"),children:[(0,Fe.jsx)(rc,{size:14,className:"wf-node-empty__pill-icon"}),(0,Fe.jsx)("span",{children:n("pills.scriptGen")})]}),(0,Fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("planning"),children:[(0,Fe.jsx)(Nn,{size:14,className:"wf-node-empty__pill-icon"}),(0,Fe.jsx)("span",{children:n("pills.planningGen")})]}),(0,Fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>a?.("prompt"),children:[(0,Fe.jsx)(It,{size:14,className:"wf-node-empty__pill-icon"}),(0,Fe.jsx)("span",{children:n("pills.promptExpand")})]})]})]}):e==="image"?(0,Fe.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Fe.jsx)(Ra,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Fe.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Fe.jsx)(za,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Fe.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Fe.jsx)(ka,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},pg=(0,cM.memo)(uO);var Li=N($(),1);var la=N(j(),1),cO=({materialType:e,nodeKind:t="generate",selected:a,onOpenResourcePicker:o,onStartTextEdit:n,onCopyText:r,onSplitText:i})=>{let l=se(),{zoom:s}=Ja(),[u,d]=Li.default.useState(!1),f=(0,Li.useMemo)(()=>oo(s),[s]),c=(0,Li.useCallback)(()=>{r&&(r(),d(!0),setTimeout(()=>d(!1),1500))},[r]),p=30;return t==="generate"&&e!=="text"?null:(0,la.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(p*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,la.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,la.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:n,title:l("pill.textEdit"),children:[(0,la.jsx)(Nn,{size:13,className:"wf-floating-top-pill__icon"}),(0,la.jsx)("span",{children:l("pill.textEdit")})]}),(0,la.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,la.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:c,title:l("pill.copy"),children:u?(0,la.jsx)(Bt,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,la.jsx)(mi,{size:13,className:"wf-floating-top-pill__icon"})}),(0,la.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,la.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:i,title:l("pill.structureSplit"),children:(0,la.jsx)(ha,{size:13,className:"wf-floating-top-pill__icon"})})]}):t==="import"?(0,la.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,la.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,children:[(0,la.jsx)(vl,{size:13,className:"wf-floating-top-pill__icon"}),(0,la.jsx)("span",{children:l("pill.import")})]})}):null})},fM=(0,Li.memo)(cO);var fd=N($(),1);var pM=N($(),1),mM=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function fO(e,t,a=mM){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function gM({refs:e,excludeSelectors:t=mM,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,pM.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],i=d=>{let f=d.target;fO(f,r.map(c=>c.current),t)&&a()},l=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",i),document.addEventListener("keydown",l)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",i),document.removeEventListener("keydown",l)}},[e,t,a,o,n])}var J0=N(j(),1),pO=480,mO=({children:e,onClose:t,width:a=pO})=>{let{zoom:o}=Ja(),n=(0,fd.useRef)(null),r=(0,fd.useMemo)(()=>oo(o),[o]);return gM({refs:n,onClose:t}),(0,J0.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:i=>i.stopPropagation(),children:(0,J0.jsx)("div",{className:"wf-panel-shell__card",children:e})})},hM=(0,fd.memo)(mO);var Mo=N($(),1);var xM=N($(),1),pd=N(j(),1),ew={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>',suno:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FF3366"/><path d="M12 6v8.5a2.5 2.5 0 1 1-2-2.45V8h5v4.5a2.5 2.5 0 1 1-2-2.45V6h-1z" fill="white"/></svg>'},gO=[{brand:"suno",regex:/(^suno|\bsuno\b)/i},{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function hO(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(ew[t])return t;for(let a of gO)if(a.regex.test(t))return a.brand;return null}var bM=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let i=(0,xM.useMemo)(()=>t&&ew[t.toLowerCase()]?t.toLowerCase():hO(e),[t,e]),l=i?ew[i]:null;if(!l){if(r)return(0,pd.jsx)(pd.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,pd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,pd.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${i} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:l.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var wM=N($(),1);function yM(e){let t=x_(),a=b_();return(0,wM.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let i=r.data||{},l=sn(i.materialType,i.mediaAssets,i.mediaUrl),s=i.content||i.generatedContent||"",u=!!(l||i.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:i.label||r.id,materialType:i.materialType||"image",url:l,hasMedia:u,textContent:s}]}),[t,a,e])}var vM=N($(),1),CM="wf_capabilities_catalog_v1",xO={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{duration:{options:[{value:30,label:"30s"},{value:60,label:"60s"},{value:120,label:"120s"}],defaultValue:60,unit:"s"},voice:{options:[{value:"alloy",label:"Alloy"},{value:"echo",label:"Echo"},{value:"fable",label:"Fable"},{value:"onyx",label:"Onyx"},{value:"nova",label:"Nova"},{value:"shimmer",label:"Shimmer"}],defaultValue:"alloy"}},text:{}};function Kc(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(CM);return e?JSON.parse(e):null}catch{return null}}function SM(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(CM,JSON.stringify(e))}catch{}}function kM(e,t,a){return(0,vM.useMemo)(()=>{let n=(a??Kc())?.[e]??[],r=n.find(S=>S.id===t)??n[0],i=xO[e]??{},l=r?.parameters??i,s=l.aspectRatio?.options&&l.aspectRatio.options.length>0?l.aspectRatio.options:i.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=l.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=S=>S?s.some(_=>_.value===S):!1,f=l.duration?.options&&l.duration.options.length>0?l.duration.options:i.duration?.options??[{value:5,label:"5s"}],c=l.duration?.defaultValue??f[0]?.value??5,p=S=>typeof S!="number"?!1:f.some(_=>_.value===S),g=l.resolution?.options??[],w=l.resolution?.defaultValue??g[0]?.value??"",y=l.quality?.options??[],h=l.quality?.defaultValue??y[0]?.value??"",x=!!l.sound?.supported,m=!!l.sound?.defaultValue,b=l.voice?.options??[],v=l.voice?.defaultValue??b[0]?.value??"",C=!!l.instrumental?.supported,k=!!l.instrumental?.defaultValue;return{schema:l,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:w,qualityOptions:y,defaultQuality:h,hasSoundSupport:x,defaultSound:m,voiceOptions:b,defaultVoice:v,hasInstrumentalSupport:C,defaultInstrumental:k}},[e,t,a])}var LM=N($(),1);var Sr=N(j(),1),bO=({onClick:e,disabled:t,isGenerating:a})=>{let o=se();return(0,Sr.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,Sr.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,Sr.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,Sr.jsx)(xi,{size:14,className:"wf-generate-btn__spin"}):(0,Sr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,Sr.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,Sr.jsx)("path",{d:"M12 19V5"})]})})]})},_M=(0,LM.memo)(bO);var J=N(j(),1);function wO(e){let t=(0,J.jsx)(bM,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var yO=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:i})=>{let l=se(),{materialType:s,selectedTool:u,params:d,prompt:f}=t,c=Sl(t),[p,g]=(0,Mo.useState)(!1),[w,y]=(0,Mo.useState)(!1),h=yM(e);if(c==="import")return(0,J.jsx)("div",{className:"wf-config-panel wf-config-panel--import",children:(0,J.jsxs)("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,J.jsx)("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--wb-text-secondary)"},children:l("panel.hintImportNode")}),!!t.realPath&&(0,J.jsx)("span",{style:{fontSize:"11px",color:"var(--wb-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"240px"},title:String(t.realPath),children:String(t.realPath).split("/").pop()})]}),i&&(0,J.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",style:{padding:"4px 10px",height:"28px"},onClick:i,children:(0,J.jsx)("span",{children:l("node.replace")})})]})});let x=u==="text-to-music"?"music":"speech",m=(0,Mo.useCallback)(I=>{o({selectedTool:I==="music"?"text-to-music":"text-to-audio"})},[o]),b=(0,Mo.useMemo)(()=>{let I=a?.[s]??[];return I.length===0&&(s==="text"?I=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?I=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?I=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(I=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),I.map(F=>{let W=wO(F.id),K=W.icon,ee=F.badge??W.badge,Q=F.subtitle??W.subtitle;return{value:F.id,label:F.label,triggerLabel:(0,J.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[K?(0,J.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:K}):null,(0,J.jsx)("span",{children:F.label})]}),icon:K,badge:ee,subtitle:Q}})},[a,s]),v=typeof d.model=="string"?d.model:b[0]?.value,{aspectRatioOptions:C,defaultAspectRatio:k,isAspectRatioValid:S,durationOptions:_,defaultDuration:A,isDurationValid:D,resolutionOptions:B,defaultResolution:U}=kM(s,v,a),L=(0,Mo.useCallback)((I,F)=>{o({params:{...d,[I]:F}})},[o,d]),E=(0,Mo.useCallback)(I=>{let ee=((a??Kc())?.[s]??[]).find(G=>G.id===I)?.parameters,Q={...d,model:I};d.aspectRatio&&ee?.aspectRatio?.options&&(ee.aspectRatio.options.some(te=>te.value===d.aspectRatio)||(Q.aspectRatio=ee.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&ee?.duration?.options&&(ee.duration.options.some(te=>te.value===d.duration)||(Q.duration=ee.duration.defaultValue||ee.duration.options[0]?.value||5)),d.resolution&&ee?.resolution?.options?ee.resolution.options.some(te=>te.value===d.resolution)||(Q.resolution=ee.resolution.defaultValue||ee.resolution.options[0]?.value):d.resolution&&ee&&!ee.resolution?.options&&delete Q.resolution,o({params:Q})},[a,s,o,d]),T=(0,Mo.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),M=(0,Mo.useMemo)(()=>{switch(s){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(x==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[s,x,l]),P=typeof d.aspectRatio=="string"&&S(d.aspectRatio)?d.aspectRatio:k,O=typeof d.duration=="number"&&D(d.duration)?d.duration:A,R=I=>!!I&&B.some(F=>F.value===I),H=typeof d.resolution=="string"&&R(d.resolution)?d.resolution:U;return(0,J.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,J.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,J.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("speech"),children:[(0,J.jsx)(hl,{size:13}),(0,J.jsx)("span",{children:l("panel.audioGen")})]}),(0,J.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${x==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>m("music"),children:[(0,J.jsx)(ka,{size:13}),(0,J.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,J.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,J.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[h.length>0||i?(0,J.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[h.map(I=>(0,J.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${I.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${I.label} (${I.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[I.url&&I.materialType==="image"?(0,J.jsx)("img",{src:I.url,alt:I.label,className:"wf-config-panel__ref-thumb-media"}):I.url&&I.materialType==="video"?(0,J.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,J.jsx)("video",{src:I.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,J.jsx)(za,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):I.materialType==="audio"?(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,J.jsx)(ka,{size:13})}):I.materialType==="text"?(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,J.jsx)(Sa,{size:13})}):(0,J.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,J.jsx)(Ra,{size:13})}),I.hasMedia&&(0,J.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},I.nodeId)),i?(0,J.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:i,title:l("picker.addRef"),children:(0,J.jsx)(ft,{size:14})}):null]}):(0,J.jsx)("span",{}),(0,J.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>g(!0),title:l("header.fitView"),children:(0,J.jsx)(En,{size:13})})]}),(0,J.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:M,rows:3,onChange:I=>o({prompt:I.target.value})}),(0,J.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",T]})]}),(0,J.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,J.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,J.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--model",value:v,options:b,popupMatchSelectWidth:!1,onChange:I=>E(I)}),s==="image"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,J.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:P,options:C,popupMatchSelectWidth:!1,onChange:I=>L("aspectRatio",I)})})]}),s==="video"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,J.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:P,options:C,popupMatchSelectWidth:!1,onChange:I=>L("aspectRatio",I)}),(0,J.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,J.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:O,options:_,popupMatchSelectWidth:!1,onChange:I=>L("duration",I)}),B.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,J.jsx)(ao,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:H,options:B,popupMatchSelectWidth:!1,onChange:I=>L("resolution",I)})]})]})]}),s==="audio"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,J.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!w),title:l("panel.advanced"),children:(0,J.jsx)(wl,{size:13})})]})]}),(0,J.jsx)("div",{className:"wf-config-panel__action-group",children:(0,J.jsx)(_M,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),w&&(0,J.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,J.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,J.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,J.jsx)(k0,{style:{flex:1},min:1,max:s==="video"?20:60,value:O,onChange:I=>L("duration",I)})]})}),(0,J.jsx)(ln,{title:l("panel.promptPlaceholder"),open:p,onCancel:()=>g(!1),width:680,children:(0,J.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:M,rows:10,onChange:I=>o({prompt:I.target.value})})})]})},IM=(0,Mo.memo)(yO);var no=N($(),1);var Tl=N($(),1);var Se=N(j(),1);function mg(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var vO=({items:e,selectedIds:t,onToggle:a})=>{let o=se(),[n,r]=(0,Tl.useState)(""),[i,l]=(0,Tl.useState)("all"),[s,u]=(0,Tl.useState)("grid"),d=(0,Tl.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,Tl.useMemo)(()=>JI(e,n,i),[e,n,i]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,Se.jsxs)("div",{className:"wf-picker-pane",children:[(0,Se.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,Se.jsxs)("label",{className:"wf-picker-search",children:[(0,Se.jsx)(on,{size:14,className:"wf-picker-search__icon"}),(0,Se.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,Se.jsx)(ao,{className:"wf-picker-filter",variant:"standard",value:i,options:d,onChange:p=>l(p)}),(0,Se.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,Se.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,Se.jsx)(Pa,{size:14})}),(0,Se.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,Se.jsx)(xr,{size:14})})]})]}),f.length===0?(0,Se.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,Se.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,Se.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,Se.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,Se.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,Se.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,Se.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(mg(p.materialType))}),p.alreadyConnected?(0,Se.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,Se.jsx)(Bt,{size:11}),o("picker.added")]}):(0,Se.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,Se.jsx)(Bt,{size:11}):null})]}),(0,Se.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,Se.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,Se.jsx)("span",{className:"wf-picker-type-tag",children:o(mg(p.materialType))})]})]},p.nodeId)})}):(0,Se.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,Se.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,Se.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,Se.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,Se.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,Se.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(mg(p.materialType))})}),(0,Se.jsxs)("div",{className:"wf-picker-row__body",children:[(0,Se.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,Se.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(mg(p.materialType))]})]}),p.alreadyConnected?(0,Se.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,Se.jsx)(Bt,{size:11}),o("picker.added")]}):(0,Se.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,Se.jsx)(Bt,{size:11}):null})]},p.nodeId)})})]})},MM=vO;var Al=N($(),1);var Ut=N(j(),1),CO=({files:e,onAddFiles:t,onRemove:a})=>{let o=se(),[n,r]=(0,Al.useState)(!1),i=(0,Al.useCallback)(d=>{let f=Si(d);f.length>0&&t(f),f.length<d.length&&Y.warning(o("picker.unsupported")),d.length>0&&f.length===0&&Y.warning(o("picker.unsupported"))},[t,o]),l=(0,Al.useCallback)(async()=>{let d=await Pn();if(!d.ok){d.body.error==="picker-unsupported"?Y.warning(o("picker.needPath")):Y.error(o("picker.pickFailed"));return}let f=d.body.paths??[];f.length!==0&&i(f)},[i,o]),s=(0,Al.useCallback)(d=>{let f=Array.from(d),c=[],p=0,g=0;for(let w of f){let y=jc(w);if(!y){p+=1;continue}let h=Ci(y,{name:w.name,mime:w.type,size:w.size});h?c.push(h):g+=1}c.length>0&&t(c),p>0&&Y.warning(o("picker.needPath")),g>0&&Y.warning(o("picker.unsupported"))},[t,o]),u=(0,Al.useCallback)(d=>{d.preventDefault(),d.stopPropagation(),r(!1),d.dataTransfer.files?.length&&s(d.dataTransfer.files)},[s]);return(0,Ut.jsxs)("div",{className:"wf-picker-pane",children:[(0,Ut.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{l()},onDragOver:d=>{d.preventDefault(),d.stopPropagation(),r(!0)},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r(!1)},onDrop:u,children:[(0,Ut.jsx)(vl,{size:22,className:"wf-picker-dropzone__icon"}),(0,Ut.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,Ut.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,Ut.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,Ut.jsx)(uc,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,Ut.jsx)("ul",{className:"wf-picker-file-list",children:e.map(d=>{let f=d.previewUrl||un(d.realPath);return(0,Ut.jsxs)("li",{className:"wf-picker-file-item",children:[(0,Ut.jsx)("div",{className:"wf-picker-file-item__thumb",children:d.materialType==="image"?(0,Ut.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):d.materialType==="video"?(0,Ut.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,Ut.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,Ut.jsxs)("div",{className:"wf-picker-row__body",children:[(0,Ut.jsx)("span",{className:"wf-picker-card__name",children:d.name}),(0,Ut.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${d.materialType}`),d.size?` \xB7 ${KI(d.size)}`:""]})]}),(0,Ut.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(d.id),title:o("picker.removeFile"),children:(0,Ut.jsx)(Lo,{size:14})})]},d.id)})}):null]})},NM=CO;var mn=N(j(),1),SO=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=se(),i=oe(k=>k.nodes),l=oe(k=>k.edges),[s,u]=(0,no.useState)(a),[d,f]=(0,no.useState)([]),[c,p]=(0,no.useState)([]),g=(0,no.useMemo)(()=>QI(i,l,t),[i,l,t]);(0,no.useEffect)(()=>{e&&(u(a),f([]),p([]))},[e,a]);let w=(0,no.useCallback)(()=>{p([]),o()},[o]),y=(0,no.useCallback)((k,S)=>{S||f(_=>_.includes(k)?_.filter(A=>A!==k):[..._,k])},[]),h=(0,no.useCallback)(k=>{p(S=>[...S,...k])},[]),x=(0,no.useCallback)(k=>{p(S=>S.filter(_=>_.id!==k))},[]),b=d.filter(k=>{let S=g.find(_=>_.nodeId===k);return S&&!S.alreadyConnected}).length+c.length,v=(0,no.useCallback)(()=>{if(b===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,b,d]),C=(0,mn.jsxs)("div",{className:"wf-picker-footer",children:[(0,mn.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:w,children:r("picker.cancel")}),(0,mn.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:b===0,onClick:v,children:[r("picker.use")," ",b," ",r("picker.items")]})]});return(0,mn.jsxs)(ln,{open:e,onCancel:w,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,mn.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,mn.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,mn.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,mn.jsx)(MM,{items:g,selectedIds:d,onToggle:y}):(0,mn.jsx)(NM,{files:c,onAddFiles:h,onRemove:x})]})},gg=SO;var Un=N($(),1);function EM(e){let t=se(),[a,o]=(0,Un.useState)(!1),[n,r]=(0,Un.useState)("canvas"),i=(0,Un.useCallback)((c="canvas")=>{r(c),o(!0)},[]),l=(0,Un.useCallback)(()=>{o(!1)},[]),s=(0,Un.useCallback)(c=>{let p=oe.getState(),g=eM({nodes:p.nodes,edges:p.edges,targetNodeId:e,selectedCanvasNodeIds:c.selectedCanvasNodeIds,localFiles:c.localFiles});return g.hasWork?p.applyCanvasInputMutation({addNodes:g.addNodes,addEdges:g.addEdges,nodePatches:g.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(g.rejected.length>0?Y.warning(t("picker.commitPartial")):Y.success(t("picker.commitOk")),o(!1),!0):(Y.warning(t("picker.commitEmpty")),!1)},[e,t]),u=(0,Un.useCallback)(async()=>{let c=await Pn();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=Si(p);if(g.length===0)return Y.warning(t("picker.unsupported")),!1;let w=oe.getState(),y=Xc({nodes:w.nodes,targetNodeId:e,files:g});return y.hasWork?w.applyCanvasInputMutation({addNodes:y.addNodes,nodePatches:y.nodePatches}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("picker.importOk")),!0):(Y.warning(t("picker.unsupported")),!1)},[e,t]),d=(0,Un.useCallback)(async()=>{let c=await Pn();if(!c.ok)return c.body.error==="picker-unsupported"?Y.warning(t("picker.needPath")):Y.error(t("picker.pickFailed")),!1;let p=c.body.paths??[];if(p.length===0)return!1;let g=Si(p);return g.length===0?(Y.warning(t("picker.unsupported")),!1):s({selectedCanvasNodeIds:[],localFiles:g})},[s,t]),f=(0,Un.useCallback)(async c=>{let p=await Pn();if(!p.ok)return Y.error(t("picker.pickFailed")),!1;let g=p.body.path;if(!g)return!1;let y=Si([g])[0];if(!y||y.materialType!==c)return Y.warning(t("picker.unsupported")),!1;let h=ag({realPath:y.realPath,name:y.name,materialType:y.materialType,mime:y.mime,size:y.size});return oe.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:h}]}).status!=="allowed"?(Y.error(t("picker.commitFailed")),!1):(Y.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:i,closePicker:l,importLocalFiles:d,fillImportNode:u,relinkLocalFile:f,commit:s}}var ze=N(j(),1),kO=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:i,content:l,mediaUrl:s,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[w,y]=(0,ht.useState)(!1),[h,x]=(0,ht.useState)(!1),[m,b]=(0,ht.useState)(!1),[v,C]=(0,ht.useState)(!1),[k,S]=(0,ht.useState)(null),{setNodes:_}=Ca(),A=at(ae=>ae.status==="pending"||ae.status==="running"),D=od(),B=o.nodeWidth??zn(n),U=q0(n),L=PI(B,U),E=k??o.nodeHeight??L,T=(0,ht.useCallback)(ae=>{_(Me=>Me.map(it=>it.id===e?{...it,data:{...it.data,...ae}}:it))},[e,_]),M=(0,ht.useCallback)((ae,Me)=>{if(ae>0&&Me>0){let it=ae/Me,Ct=Math.max(80,Math.min(800,Math.round(B/it)));S(Ct),o.nodeHeight!==Ct&&T({nodeHeight:Ct})}},[o.nodeHeight,B,T]),P=(0,ht.useCallback)(()=>{if(Sl(o)==="generate"){let Me=o.selectedTool;(!Me||Me==="text-editor")&&T({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]})}at.getState().startNodeExecution?.(e)},[e,n,o,T]),O=se(),R=oe(ae=>ae.applyCanvasInputMutation),H=EM(e),I=Sl(o),F=(0,ht.useMemo)(()=>lg(n).map(ae=>({key:ae.key,label:O(ae.labelKey),description:O(ae.descKey),icon:ae.icon})),[n,O]),W=(0,ht.useCallback)((ae,Me)=>{let it=ig(ae),Ct=Me?.flowPosition;if(!it||!Ct)return;let He=dd(it.targetMaterialType,Ct),$t=He.nodes[0];$t&&R({addNodes:He.nodes,addEdges:[{source:e,sourceHandle:"out",target:$t.id,targetHandle:"in"}]})},[R,e]),K=u||l||"",ee=(0,ht.useCallback)(ae=>{if(n==="text"){let Me="";ae==="script"?Me=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:ae==="planning"?Me=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:ae==="prompt"?Me=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:ae==="storyboard"&&(Me=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),T({prompt:Me,selectedTool:"text-to-text"})}},[n,T]),Q=(0,ht.useCallback)(ae=>{let Me=jc(ae);if(!Me){Y.warning(O("picker.needPath"));return}let it=Ci(Me,{name:ae.name,mime:ae.type,size:ae.size});if(!it){Y.warning(O("picker.unsupported"));return}let Ct=oe.getState(),He=Xc({nodes:Ct.nodes,targetNodeId:e,files:[it]});if(!He.hasWork){Y.warning(O("picker.unsupported"));return}R({addNodes:He.addNodes,nodePatches:He.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[R,e,O]),G=(0,ht.useCallback)(ae=>{I==="import"&&(ae.preventDefault(),ae.stopPropagation(),x(!0))},[I]),te=(0,ht.useCallback)(ae=>{I==="import"&&(ae.preventDefault(),ae.stopPropagation(),x(!1))},[I]),ne=(0,ht.useCallback)(ae=>{if(I!=="import")return;ae.preventDefault(),ae.stopPropagation(),x(!1);let Me=Array.from(ae.dataTransfer.files??[]);if(Me.length===1){Q(Me[0]);return}let it=Me.map(Nt=>{let Va=jc(Nt);return Va?Ci(Va,{name:Nt.name,mime:Nt.type,size:Nt.size}):null}).filter(Nt=>!!Nt);if(it.length===0){Me.length>0&&Y.warning(O("picker.needPath"));return}let Ct=oe.getState(),He=Xc({nodes:Ct.nodes,targetNodeId:e,files:it});if(!He.hasWork){Y.warning(O("picker.unsupported"));return}R({addNodes:He.addNodes,nodePatches:He.nodePatches}).status!=="allowed"&&Y.error(O("picker.commitFailed"))},[R,Q,e,I,O]),fe=(0,ht.useCallback)(()=>{K&&navigator.clipboard.writeText(K).catch(()=>{})},[K]),re=(0,ht.useCallback)(()=>{if(!K)return;let ae=K.split(`

`).filter(Me=>Me.trim().length>0);ae.length>1&&T({content:ae.join(`
---
`)})},[K,T]);(0,ht.useEffect)(()=>{a||(b(!1),C(!1))},[a]);let ue=e5(a,m,f,I,D),be=r==="offline"||o.isMissing===!0,ke=sn(n,p,s),Oe=be?null:t5(f,r,!!ke),yt=n==="video"?"video":n==="audio"?"audio":"square";return(0,ze.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:B},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:[!D&&(w||a)&&(n==="text"||I==="import"&&!ke&&!be)&&(0,ze.jsx)(fM,{materialType:n,nodeKind:I,selected:a,onOpenResourcePicker:()=>{H.fillImportNode()},onStartTextEdit:()=>C(!0),onCopyText:fe,onSplitText:re}),(0,ze.jsx)(Cr,{side:"left",nodeHovered:w}),(0,ze.jsx)(cd,{label:i,materialType:I==="import"?"import_asset":n,onLabelChange:ae=>T({label:ae}),trailing:(0,ze.jsx)(fg,{executionStatus:f,status:r})}),(0,ze.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:B,height:E,position:"relative"},onDragOver:G,onDragLeave:te,onDrop:ne,children:[I==="import"&&!!ke&&!be&&(0,ze.jsx)("button",{type:"button",className:"wf-material-node__replace-btn nodrag nopan",onClick:ae=>{ae.stopPropagation(),H.fillImportNode()},title:O("node.replace"),children:O("node.replace")}),a&&(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ze.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ze.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:K||v?(0,ze.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${v?" nodrag":""}`,readOnly:!v,value:K,placeholder:O("node.textPlaceholder"),autoFocus:v,onMouseDown:ae=>{v||ae.preventDefault()},onDoubleClick:ae=>{ae.stopPropagation(),C(!0),ae.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:ae=>T({content:ae.target.value,status:ae.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ze.jsx)(pg,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:ee})}),n!=="text"&&be&&(0,ze.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,ze.jsx)(yl,{size:22,className:"wf-media-offline__icon"}),(0,ze.jsx)("div",{className:"wf-media-offline__title",children:O("node.offline")}),(0,ze.jsx)("div",{className:"wf-media-offline__hint",children:O("node.offlineHint")}),(0,ze.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{H.relinkLocalFile(n)},children:O("node.relink")})]}),n!=="text"&&!be&&(Oe?(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(Yc,{status:Oe,loadingAspectRatio:yt,errorMessage:c??d,taskId:o.taskId,onRetry:P,children:ke?(0,ze.jsx)(uM,{materialType:n,mediaAssets:p,mediaUrl:s,label:i,status:r,isMissing:o.isMissing===!0,onMediaSizeChange:M}):(0,ze.jsx)(pg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:ee})})}):(0,ze.jsx)("div",{className:"wf-material-node__media",children:(0,ze.jsx)(pg,{materialType:n,nodeKind:o.nodeKind??(o.selectedTool==="import"?"import":"generate"),onApplyPreset:ee})})),n==="text"&&(d||c)&&(0,ze.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),ue&&(0,ze.jsx)(hM,{onClose:()=>b(!0),children:(0,ze.jsx)(IM,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:T,onGenerate:P,execBusy:A,onOpenResourcePicker:I==="import"?()=>{H.fillImportNode()}:()=>H.openPicker("canvas")})}),(0,ze.jsx)(Cr,{side:"right",nodeHovered:w,options:F,onSelect:W}),(0,ze.jsx)(gg,{open:H.open,nodeId:e,initialTab:H.initialTab,onCancel:H.closePicker,onCommit:H.commit})]})},TM=(0,ht.memo)(kO);var AM={type:"material",component:TM,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>Pc("text",{status:"empty",nodeWidth:zn("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var md=N($(),1);var tw=50;function Dl(e){return JSON.parse(JSON.stringify(e))}var LO={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Ia=td((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Dl(o)].slice(-tw),redoStack:[]}};return{document:LO,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Dl(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:Dl(i),undoStack:l,redoStack:[...r,Dl(n)].slice(-tw)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let i=o[o.length-1];if(!i)return;let l=o.slice(0,-1);e({document:Dl(i),redoStack:l,undoStack:[...r,Dl(n)].slice(-tw)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let i=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:i.title,initialType:i.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:i}=t(),l=i.rows[o];if(!l)return;let s=a(i),u=[...i.rows],d={...l,cells:[...l.cells]};d.cells[n]=r,u[o]=d,e({document:{...i,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),i=o||n.columns.map(l=>l.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:i}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),i=n.rows.filter((l,s)=>s!==o);e({document:{...n,rows:i},...r})},addColumn:(o,n,r=240)=>{let{document:i}=t(),l=a(i),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=i.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...i,columns:[...i.columns,s],rows:u},...l})},updateColumn:(o,n,r)=>{let{document:i}=t(),l=i.columns[o];if(!l)return;let s=a(i),u=[...i.columns];u[o]={...l,title:n,type:r},e({document:{...i,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),i=n.columns.filter((s,u)=>u!==o),l=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:i,rows:l},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let i=a(n),l=[...n.columns];l[o]={...r,visible:!r.visible},e({document:{...n,columns:l},...i})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let l=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:d},...l})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Dl(o),undoStack:[],redoStack:[]})}});var he=N(j(),1),DM=380,_O=280,RM=(0,md.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Ia(),[i,l]=(0,md.useState)(!1),{zoom:s}=Ja(),u=(0,md.useMemo)(()=>oo(s),[s]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C",g=!od()&&(i||a);return(0,he.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:DM},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[g&&(0,he.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,he.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,he.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:w=>{w.stopPropagation(),r()},children:[(0,he.jsx)(ft,{size:14}),(0,he.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,he.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:w=>{w.stopPropagation(),n()},children:[(0,he.jsx)(En,{size:13}),(0,he.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,he.jsx)(Cr,{side:"left",nodeHovered:i}),(0,he.jsx)(cd,{label:c,materialType:"table"}),(0,he.jsxs)("div",{className:"wf-material-node__card",style:{width:DM,height:_O},onDoubleClick:()=>n(),children:[a&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,he.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,he.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,he.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,he.jsx)(ko,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,he.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,he.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:w=>w.stopPropagation(),children:[(0,he.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,he.jsx)(ft,{size:14,className:"wf-node-empty__pill-icon"}),(0,he.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,he.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,he.jsx)(En,{size:13,className:"wf-node-empty__pill-icon"}),(0,he.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,he.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,he.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,he.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,he.jsx)(dc,{size:14}),(0,he.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,he.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,he.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((w,y)=>{let h=w.cells[0],x=typeof h=="string"&&h?h:typeof h=="number"?String(h):Array.isArray(h)&&h.length>0?`\u{1F4CE} \u9644\u4EF6 (${h.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,he.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,he.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:x}),(0,he.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,he.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,he.jsx)(Cr,{side:"right",nodeHovered:i})]})});var PM={type:"table",component:RM,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var _i=N($(),1);var ro=N($(),1);var No=N(j(),1),IO=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:i,nodeWidth:l,nodeHeight:s,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:w,onLeftHandleSelect:y,onFileDrop:h,onFilesDrop:x,onDragOver:m,onDragLeave:b,onDrop:v,onMouseEnter:C,onMouseLeave:k,onCardClick:S,onCardDoubleClick:_,renderFloatingPill:A,renderHeader:D,children:B,renderConfigPanel:U})=>{let[L,E]=(0,ro.useState)(!1),[T,M]=(0,ro.useState)(!1),P=od(),{zoom:O}=Ja(),R=(0,ro.useMemo)(()=>oo(O),[O]),H=(0,ro.useMemo)(()=>({inverseScale:R,hovered:L,selected:t&&!P,isMultiSelected:P}),[R,L,t,P]),I=(0,ro.useCallback)(ne=>{E(!0),C?.(ne)},[C]),F=(0,ro.useCallback)(ne=>{E(!1),k?.(ne)},[k]),W=(0,ro.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!0),m?.(ne)},[m]),K=(0,ro.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1),b?.(ne)},[b]),ee=(0,ro.useCallback)(ne=>{ne.preventDefault(),ne.stopPropagation(),M(!1);let fe=ne.dataTransfer.files;fe&&fe.length>0&&(x?.(fe),fe[0]&&h?.(fe[0])),v?.(ne)},[v,h,x]),Q=P?null:typeof A=="function"?A(H):A,G=typeof D=="function"?D(H):D,te=P?null:typeof U=="function"?U(H):U;return(0,No.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:l,...n},onMouseEnter:I,onMouseLeave:F,"data-node-id":e,children:[Q,u&&(0,No.jsx)(Cr,{side:"left",nodeHovered:L,variant:f,options:w,onSelect:y}),G,(0,No.jsxs)("div",{className:`wf-material-node__card ${T?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:l,height:s,...r},"data-node-type":i,onClick:S,onDoubleClick:_,onDragOver:W,onDragLeave:K,onDrop:ee,children:[t&&(0,No.jsxs)(No.Fragment,{children:[(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,No.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),B]}),te,d&&(0,No.jsx)(Cr,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},zM=(0,ro.memo)(IO);var Rl=N($(),1);var kr=N(j(),1),MO=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:i}=Ja(),l=(0,Rl.useMemo)(()=>oo(i),[i]),s=a??l,u=d=>d?Rl.default.isValidElement(d)?d:(0,kr.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,kr.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,kr.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,kr.jsxs)(Rl.default.Fragment,{children:[f>0&&(0,kr.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,kr.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,kr.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},OM=(0,Rl.memo)(MO);var hg=N($(),1);var io=N(j(),1),NO=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:i,className:l="",style:s})=>{let u=se(),d=(f,c,p)=>f?hg.default.isValidElement(f)?f:(0,io.jsx)(f,{size:c,className:p}):null;return(0,io.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${l}`.trim(),style:s,children:[(e||t)&&(0,io.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,io.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,io.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,io.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,io.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,io.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,io.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,io.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,io.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,io.jsx)("span",{children:f.label})]},f.key)})}),i]})},BM=(0,hg.memo)(NO);var Pl=N($(),1);function HM(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function FM(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function UM(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function qM(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function VM(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var nt=N(j(),1),EO=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:i,onDownload:l})=>{let s=se(),[u,d]=(0,Pl.useState)(!1),f=(0,Pl.useCallback)(g=>{g.stopPropagation(),d(w=>!w)},[]),c=(0,Pl.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,nt.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,nt.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,nt.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":s("clip.openEditorTitle"),children:[t?(0,nt.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,nt.jsx)("span",{className:"wf-vc-result__fallback",children:(0,nt.jsx)(oa,{size:36,strokeWidth:1.5})}),(0,nt.jsx)("span",{className:"wf-vc-result__play",children:(0,nt.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,nt.jsx)(za,{size:22,fill:"currentColor"})})})]});return(0,nt.jsxs)("div",{className:"wf-vc-result",children:[p,(0,nt.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,nt.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,nt.jsx)("dt",{children:s("clip.duration")}),(0,nt.jsx)("dd",{className:"wf-vc-result__mono",children:UM(a)})]}),(0,nt.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,nt.jsx)("dt",{children:s("clip.resolution")}),(0,nt.jsx)("dd",{className:"wf-vc-result__mono",children:qM(o,n)})]})]}),(0,nt.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,nt.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:g=>{g.stopPropagation(),i?.()},children:[(0,nt.jsx)(bl,{size:14}),(0,nt.jsx)("span",{children:s("clip.reEdit")})]}),(0,nt.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:g=>{g.stopPropagation(),l?.()},disabled:!e,title:e?s("clip.downloadTitle"):void 0,children:[(0,nt.jsx)(fl,{size:14}),(0,nt.jsx)("span",{children:s("clip.download")})]})]})]})},GM=(0,Pl.memo)(EO);var jM="omnimux-clip-open",aw="omnimux-clip-save",ow="omnimux-clip-close",nw="omnimux-clip-progress";function XM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function WM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function YM(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var Ua=N(j(),1),ZM=350,TO=440;function KM(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Eo(e){return typeof e=="string"&&e.trim()?e:void 0}function rw(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function AO(e){return Eo(e.mediaUrl)||Eo(e.outputVideoUrl)||Eo(e.path)||Eo(e.url)||Eo(e.real_path)||Eo(e.filePath)}function DO(e){let{nodes:t,edges:a}=oe.getState(),o=[],n=[],r=[],i=[];for(let l of a){if(l.target!==e)continue;let s=t.find(g=>g.id===l.source);if(!s)continue;let u=KM(s.data)?s.data:{},d=Eo(u.materialType)||(s.type==="material"?void 0:s.type),f=Eo(u.label)||Eo(u.title)||s.id,c=AO(u)||"",p=rw(u.duration)??rw(u.outputDurationMs)??rw(u.durationMs);if(d==="video"||s.type==="video_composition"){let g=c||Eo(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=Eo(u.content)||Eo(u.generatedContent)||Eo(u.prompt);g&&i.push({text:g,startTimeMs:i.reduce((w,y)=>w+y.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:i}}function RO(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function PO(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var zO=({id:e,data:t,selected:a})=>{let o=KM(t)?t:{},n=oe(w=>w.setNodes),r=oe(w=>w.setEdges),i=se(),l=o.status??"idle",s=!!o.outputVideoUrl,u=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||i("node.type.video_composition"),f=FM(l,s),c=(0,_i.useCallback)(w=>{n(y=>y.map(h=>h.id===e?{...h,data:{...h.data,...w}}:h))},[e,n]);(0,_i.useEffect)(()=>{if(typeof window>"u")return;let w=x=>{let m=x instanceof CustomEvent?x.detail:void 0;if(!XM(m)||m.nodeId&&m.nodeId!==e)return;let b=m.output;if(c({schema:m.schema,projectId:m.projectId||o.projectId,outputVideoUrl:b?.videoPath,thumbnailUrl:b?.thumbnailPath,outputThumbnailUrl:b?.thumbnailPath,outputDurationMs:b?.durationMs,outputWidth:b?.width,outputHeight:b?.height,status:b?.videoPath?"completed":"idle",renderProgress:b?.videoPath?100:void 0,errorMessage:void 0}),b?.videoPath&&m.createDownstreamNode){let C=oe.getState().nodes,S=C.find(A=>A.id===e)?.position||{x:0,y:0};if(!C.some(A=>A.type==="material"&&A.data?.realPath===b.videoPath)){let A=`node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,D={x:S.x+ZM+80,y:S.y},B={id:A,type:"material",position:D,selected:!0,data:{materialType:"video",label:`${o.title||o.label||i("node.type.video_composition")}_\u6210\u7247`,status:"ready",selectedTool:"import",realPath:b.videoPath,mediaUrl:b.videoPath,thumbnailUrl:b.thumbnailPath,duration:b.durationMs?Math.round(b.durationMs/1e3):void 0,size:{width:b.width||1920,height:b.height||1080}}},L={id:`edge_${e}_${A}`,source:e,target:A,sourceHandle:"output",targetHandle:"input"};n(E=>[...E.map(T=>({...T,selected:!1})),B]),r(E=>[...E,L]),Y.success(i("clip.exportedToNode")||"\u5DF2\u751F\u6210\u89C6\u9891\u8282\u70B9\u5E76\u8FDE\u63A5\u5230\u753B\u5E03")}}},y=x=>{let m=x instanceof CustomEvent?x.detail:void 0;if(!YM(m)||m.nodeId&&m.nodeId!==e)return;let b=m.status??"rendering";c({status:b,renderProgress:m.renderProgress})},h=x=>{let m=x instanceof CustomEvent?x.detail:void 0;WM(m)&&(m.nodeId&&m.nodeId!==e||o.status==="editing"&&c({status:s?"completed":"idle"}))};return window.addEventListener(aw,w),window.addEventListener(nw,y),window.addEventListener(ow,h),()=>{window.removeEventListener(aw,w),window.removeEventListener(nw,y),window.removeEventListener(ow,h)}},[s,e,o.projectId,o.status,c]);let p=(0,_i.useCallback)(()=>{if(typeof window>"u")return;let w=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,y={source:"canvas",nodeId:e,nodeTitle:d,projectId:w,draftSchema:o.schema,upstreamInputs:DO(e)};c({status:"editing",projectId:w}),window.dispatchEvent(new CustomEvent(jM,{detail:y,bubbles:!0})),window.setTimeout(()=>{RO()||Y.warning(i("clip.needPlugin"))},400)},[e,o.projectId,o.schema,i,d,c]),g=(0,_i.useCallback)(()=>{let w=o.outputVideoUrl;if(!w)return;let y=document.createElement("a");y.href=w,y.download=`${VM(d)}.mp4`,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove()},[o.outputVideoUrl,d]);return(0,Ua.jsxs)(zM,{id:e,selected:a,nodeWidth:ZM,nodeHeight:TO,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:w=>{w.stopPropagation(),p()},renderFloatingPill:({hovered:w,selected:y})=>{if(!w&&!y||!s)return null;let h=[{key:"download_video",label:i("clip.download"),icon:fl,onClick:g,title:i("clip.downloadTitle")}];return(0,Ua.jsx)(OM,{actions:h})},renderHeader:()=>(0,Ua.jsx)(cd,{label:d,materialType:"video_composition",customIcon:(0,Ua.jsx)(oa,{size:14}),onLabelChange:w=>c({label:w,title:w}),trailing:(0,Ua.jsx)(fg,{status:HM(l)})}),children:[f==="result"&&(0,Ua.jsx)(GM,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:u,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:p,onDownload:g}),f==="rendering"&&(0,Ua.jsx)("div",{className:"wf-material-node__media",children:(0,Ua.jsx)(Yc,{status:"generating",loadingAspectRatio:"video",children:null})}),f==="error"&&(0,Ua.jsx)("div",{className:"wf-material-node__media",children:(0,Ua.jsx)(Yc,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:p,children:null})}),f==="launcher"&&(0,Ua.jsx)(BM,{mainIcon:(0,Ua.jsx)(oa,{size:36,strokeWidth:1.5}),secondaryIcon:(0,Ua.jsx)(ha,{size:14}),title:i("clip.launcherTitle"),blurb:i("clip.launcherBlurb"),actions:[{key:"open_clip",label:i("clip.openClip"),icon:bl,onClick:()=>p()}]})]})},$M={type:"video_composition",component:(0,_i.memo)(zO),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>PO(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var To=N($(),1);var Yo=N($(),1);var Te=N(j(),1),OO=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#64748b"],iw=(0,Yo.memo)(({groupColor:e,onExecuteGroup:t,onCreateWorkflow:a,onUngroup:o,onLayout:n,onColorChange:r})=>{let i=se(),{zoom:l}=Ja(),s=(0,Yo.useMemo)(()=>oo(l),[l]),[u,d]=(0,Yo.useState)(!1),[f,c]=(0,Yo.useState)(!1),p=(0,Yo.useRef)(null),g=(0,Yo.useRef)(null);return(0,Yo.useEffect)(()=>{function w(y){p.current&&!p.current.contains(y.target)&&d(!1),g.current&&!g.current.contains(y.target)&&c(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),(0,Te.jsx)("div",{className:"wf-floating-top-pill wf-group-topbar nodrag nopan nowheel",onPointerDown:ye,onMouseDown:ye,style:{top:-(14*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",left:"50%","--wf-group-accent":e},children:(0,Te.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Te.jsxs)("div",{style:{position:"relative"},ref:g,children:[(0,Te.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>c(w=>!w),title:i("group.colorTitle"),children:(0,Te.jsx)("div",{className:"wf-group-topbar__swatch",style:{backgroundColor:e}})}),f&&(0,Te.jsx)("div",{className:"wf-group-topbar__palette",children:OO.map(w=>(0,Te.jsx)("button",{type:"button",className:`wf-group-topbar__palette-dot ${e===w?"is-active":""}`,style:{backgroundColor:w},onClick:()=>{r(w),c(!1)}},w))})]}),(0,Te.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Te.jsxs)("div",{style:{position:"relative"},ref:p,children:[(0,Te.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>d(w=>!w),title:i("group.layoutTitle"),children:[(0,Te.jsx)(Pa,{size:13,className:"wf-floating-top-pill__icon"}),(0,Te.jsx)("span",{children:i("group.layout")}),(0,Te.jsx)(ga,{size:12,className:"wf-floating-top-pill__icon"})]}),u&&(0,Te.jsxs)("div",{className:"wf-group-topbar__menu",style:{left:0,right:"auto"},children:[(0,Te.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("horizontal"),d(!1)},children:[(0,Te.jsx)(sl,{size:13}),(0,Te.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,Te.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("vertical"),d(!1)},children:[(0,Te.jsx)(dl,{size:13}),(0,Te.jsx)("span",{children:i("group.layoutVertical")})]}),(0,Te.jsxs)("button",{type:"button",className:"wf-group-topbar__menu-item",onClick:()=>{n("grid"),d(!1)},children:[(0,Te.jsx)(So,{size:13}),(0,Te.jsx)("span",{children:i("group.layoutGrid")})]})]})]}),(0,Te.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Te.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn wf-floating-top-pill__btn--success",onClick:t,title:i("group.executeTitle"),children:[(0,Te.jsx)(za,{size:12,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}),(0,Te.jsx)("span",{children:i("group.execute")})]}),(0,Te.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Te.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,title:i("group.createWorkflowTitle"),children:[(0,Te.jsx)(gr,{size:13,className:"wf-floating-top-pill__icon"}),(0,Te.jsx)("span",{children:i("group.createWorkflow")})]}),(0,Te.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Te.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:i("group.ungroupTitle"),children:[(0,Te.jsx)(Ec,{size:13,className:"wf-floating-top-pill__icon"}),(0,Te.jsx)("span",{children:i("group.ungroup")})]})]})})});iw.displayName="GroupTopBar";var xg=N($(),1);var lw=N(j(),1),BO=[{direction:"nw",kind:"corner"},{direction:"ne",kind:"corner"},{direction:"se",kind:"corner"},{direction:"sw",kind:"corner"},{direction:"n",kind:"edge"},{direction:"s",kind:"edge"},{direction:"w",kind:"edge"},{direction:"e",kind:"edge"}],sw=(0,xg.memo)(({bounds:e,minAllowed:t,color:a,zoom:o=1,onResize:n})=>{let r=(0,xg.useCallback)((i,l)=>{l.stopPropagation(),l.preventDefault();let s=l.clientX,u=l.clientY,d={...e},f=o,c=g=>{let w=o5(g.clientX-s,g.clientY-u,f),y=a5(i,d,w,t);n(y)},p=()=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",p)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",p)},[e,t,n,o]);return(0,lw.jsx)("div",{className:"wf-group-resize-handles nodrag nopan",onPointerDown:ye,onMouseDown:ye,style:{"--wf-group-accent":a||"var(--wb-accent)"},children:BO.map(i=>(0,lw.jsx)("div",{className:`wf-group-handle wf-group-handle--${i.kind} wf-group-handle--${i.direction}`,onPointerDown:l=>r(i.direction,l),title:i.kind==="corner"?"\u7F29\u653E":i.direction==="n"||i.direction==="s"?"\u5782\u76F4\u8C03\u6574":"\u6C34\u5E73\u8C03\u6574"},i.direction))})});sw.displayName="GroupResizeHandles";var Lr=N(j(),1),dw=(0,To.memo)(({id:e,data:t,selected:a,width:o,height:n})=>{let r=se(),i=t,l=i.title||r("group.defaultTitle"),s=i.color||"var(--wb-accent)",u=i.minWidth||300,d=i.minHeight||200,f=typeof o=="number"&&o>0?o:400,c=typeof n=="number"&&n>0?n:300,[p,g]=(0,To.useState)(!1),[w,y]=(0,To.useState)(l),h=oe(E=>E.ungroup),x=oe(E=>E.resizeGroup),m=oe(E=>E.setNodes),b=oe(E=>E.nodes),v=oe(E=>E.nodes.find(T=>T.id===e)?.position||{x:0,y:0}),{getViewport:C}=Ca(),k=C()?.zoom||1,S=(0,To.useCallback)(()=>{g(!1);let E=w.trim()||r("group.defaultTitle");m(T=>T.map(M=>M.id===e?{...M,data:{...M.data,title:E}}:M))},[e,w,m,r]),_=(0,To.useCallback)(E=>{m(T=>T.map(M=>M.id===e?{...M,data:{...M.data,color:E}}:M))},[e,m]),A=(0,To.useCallback)(E=>{x(e,E)},[e,x]),D=(0,To.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:execute-group",{detail:{groupId:e,nodeIds:ad(b,e)}}))},[e,b]),B=(0,To.useCallback)(()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:create-subworkflow",{detail:{groupId:e,groupTitle:l,nodeIds:ad(b,e)}}))},[e,l,b]),U=(0,To.useCallback)(()=>{h(e)},[e,h]),L=(0,To.useCallback)(E=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:layout-group",{detail:{groupId:e,layoutType:E}}))},[e]);return(0,Lr.jsxs)("div",{className:`wf-group-node ${a?"wf-group-node--selected":""}`,style:{width:`${f}px`,height:`${c}px`,"--wf-group-accent":s},children:[a&&(0,Lr.jsx)(iw,{groupId:e,groupTitle:l,groupColor:s,onExecuteGroup:D,onCreateWorkflow:B,onUngroup:U,onLayout:L,onColorChange:_}),a&&(0,Lr.jsx)(sw,{bounds:{x:v.x,y:v.y,width:f,height:c},minAllowed:{minWidth:u,minHeight:d},color:s,zoom:k,onResize:A}),(0,Lr.jsxs)("div",{className:"wf-group-header",children:[(0,Lr.jsx)("div",{className:"wf-group-header__dot"}),p?(0,Lr.jsx)("input",{type:"text",className:"nodrag nopan wf-group-header__input",value:w,onChange:E=>y(E.target.value),onBlur:S,onKeyDown:E=>{E.key==="Enter"&&S(),E.key==="Escape"&&g(!1)},autoFocus:!0}):(0,Lr.jsx)("span",{className:"wf-group-header__title",onDoubleClick:()=>g(!0),title:r("group.renameHint"),children:l})]})]})});dw.displayName="GroupNode";var QM={type:"group",component:dw,ports:[],defaultData:()=>({title:"",color:"#3b82f6",padding:32,minWidth:300,minHeight:200,nodeIds:[]})};var Ii=N($(),1);var xt=N(j(),1),uw=(0,Ii.memo)(({visible:e,selectedCount:t,position:a,onGroup:o,onCreateAsset:n,onLayout:r})=>{let i=se(),[l,s]=(0,Ii.useState)(!1),u=(0,Ii.useRef)(null);return(0,Ii.useEffect)(()=>{function d(f){u.current&&!u.current.contains(f.target)&&s(!1)}if(l)return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[l]),!e||t<2?null:(0,xt.jsxs)("div",{className:"wf-floating-selection-bar nodrag nopan",onPointerDown:ye,onMouseDown:ye,style:{left:`${a.x}px`,top:`${a.y}px`},children:[(0,xt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:n,title:i("group.float.createAssetTitle"),children:[(0,xt.jsx)(xl,{size:15}),(0,xt.jsx)("span",{children:i("group.float.createAsset")})]}),(0,xt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn wf-floating-selection-bar__btn--accent",onClick:o,title:i("group.float.groupTitle"),children:[(0,xt.jsx)(ml,{size:15}),(0,xt.jsx)("span",{children:i("group.float.group")})]}),(0,xt.jsxs)("div",{style:{position:"relative"},ref:u,children:[(0,xt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__btn",onClick:()=>s(d=>!d),title:i("group.float.layoutTitle"),children:[(0,xt.jsx)(Pa,{size:15}),(0,xt.jsx)("span",{children:i("group.layout")}),(0,xt.jsx)(ga,{size:13})]}),l&&(0,xt.jsxs)("div",{className:"wf-floating-selection-bar__menu",children:[(0,xt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("horizontal"),s(!1)},children:[(0,xt.jsx)(sl,{size:14}),(0,xt.jsx)("span",{children:i("group.layoutHorizontal")})]}),(0,xt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("vertical"),s(!1)},children:[(0,xt.jsx)(dl,{size:14}),(0,xt.jsx)("span",{children:i("group.layoutVertical")})]}),(0,xt.jsxs)("button",{type:"button",className:"wf-floating-selection-bar__menu-item",onClick:()=>{r("grid"),s(!1)},children:[(0,xt.jsx)(So,{size:14}),(0,xt.jsx)("span",{children:i("group.layoutGridCompact")})]})]})]})]})});uw.displayName="FloatingSelectionToolbar";var gn=N($(),1);function JM(e){return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function gd(e){return typeof e=="string"?e.trim():""}function HO(e){let t=gd(e);if(!t||ld(t))return"";let a=pI(t);return a||(B0(t)&&!t.includes("/api/local-file")?t:"")}function eN(e){let t=[],a=new Set;for(let o of e){let n=gd(o.id),r=JM(o.data),i=[r.realPath,r.real_path,r.outputVideoUrl];if(Array.isArray(r.mediaAssets))for(let u of r.mediaAssets){let d=JM(u);i.push(d.path,d.real_path,d.url)}i.push(r.mediaUrl,r.previewUrl);let l="";for(let u of i)if(l=HO(u),l)break;if(!l||a.has(l))continue;a.add(l);let s=gd(r.originalName)||gd(r.title)||gd(r.label)||gd(r.name);t.push({real_path:l,nodeId:n||l,...s?{original_name:s}:{}})}return t}var et=N(j(),1),FO=[{value:"character",key:"asset.scope.character"},{value:"scene",key:"asset.scope.scene"},{value:"prop",key:"asset.scope.prop"},{value:"style",key:"asset.scope.style"},{value:"knowledge",key:"asset.scope.knowledge"},{value:"custom",key:"asset.scope.custom"}],cw=(0,gn.memo)(({isOpen:e,onClose:t,items:a})=>{let o=se(),[n,r]=(0,gn.useState)("character"),[i,l]=(0,gn.useState)(""),[s,u]=(0,gn.useState)(o("asset.modal.defaultTags")),[d,f]=(0,gn.useState)(!1),c=(0,gn.useMemo)(()=>eN(a.map(g=>({id:g.nodeId||g.id,data:{title:g.nodeTitle,label:g.nodeTitle,realPath:g.realPath,previewUrl:g.previewUrl,content:g.content,materialType:g.type}}))),[a]);if((0,gn.useEffect)(()=>{if(!e)return;let g=(a[0]?.nodeTitle||o("asset.modal.defaultName")).slice(0,40);l(g),r("character"),u(o("asset.modal.defaultTags")),f(!1)},[e,a,o]),!e)return null;let p=async g=>{if(g.preventDefault(),c.length===0){Y.error(o("asset.modal.noFiles"));return}let w=i.trim().slice(0,40);if(!w){Y.warning(o("asset.modal.nameRequired"));return}f(!0);try{let y=s.split(/[,，]/).map(v=>v.trim()).filter(Boolean),h=await fetch("/omnimux/assets/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w,type:n,tags:y,files:c.map(v=>({real_path:v.real_path,original_name:v.original_name})),source:"workflow-canvas"})}),x=await h.json().catch(()=>({}));if(!h.ok)throw new Error(x.message||x.error||`HTTP ${h.status}`);let b=(x.asset||{}).name||w;Y.success(o("asset.modal.saved").replace("{name}",b)),t()}catch(y){Y.error(y instanceof Error?y.message:o("asset.modal.failed"))}finally{f(!1)}};return(0,et.jsx)(ln,{open:e,onCancel:t,title:o("asset.modal.title"),width:480,children:(0,et.jsxs)("form",{onSubmit:p,className:"wf-group-modal",children:[(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.name")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:i,onChange:g=>l(g.target.value),placeholder:a[0]?.nodeTitle||o("asset.modal.defaultName"),maxLength:40})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.category")}),(0,et.jsx)("div",{className:"wf-group-modal__scopes",children:FO.map(g=>(0,et.jsxs)("button",{type:"button",className:`wf-group-modal__scope ${n===g.value?"is-active":""}`,onClick:()=>r(g.value),children:[(0,et.jsx)(Co,{size:14}),(0,et.jsx)("span",{children:o(g.key)})]},g.value))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.files").replace("{count}",String(c.length))}),(0,et.jsx)("div",{className:"wf-group-modal__list",children:c.length===0?(0,et.jsx)("div",{className:"wf-group-modal__empty",children:o("asset.modal.empty")}):c.map(g=>(0,et.jsx)("div",{className:"wf-group-modal__row",children:(0,et.jsx)("span",{children:g.original_name||g.nodeId})},g.real_path))})]}),(0,et.jsxs)("div",{children:[(0,et.jsx)("label",{className:"wf-group-modal__label",children:o("asset.modal.tags")}),(0,et.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:s,onChange:g=>u(g.target.value),placeholder:o("asset.modal.tagsPlaceholder")})]}),(0,et.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,et.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:o("asset.modal.cancel")}),(0,et.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:d||c.length===0,children:[(0,et.jsx)(xl,{size:14}),(0,et.jsx)("span",{children:o(d?"asset.modal.saving":"asset.modal.submit")})]})]})]})})});cw.displayName="BatchCreateAssetModal";var _r=N($(),1);var Kt=N(j(),1),fw=(0,_r.memo)(({isOpen:e,onClose:t,defaultTitle:a,nodeCount:o=0,onConfirm:n})=>{let r=se(),i=r("template.modal.defaultName"),[l,s]=(0,_r.useState)(a||i),[u,d]=(0,_r.useState)(""),[f,c]=(0,_r.useState)(r("template.modal.defaultTags")),[p,g]=(0,_r.useState)(!1);if((0,_r.useEffect)(()=>{e&&(s((a||i).trim()||i),d(""),c(r("template.modal.defaultTags")),g(!1))},[e,a,i,r]),!e)return null;let w=async y=>{if(y.preventDefault(),!l.trim()){Y.warning(r("template.modal.nameRequired"));return}g(!0);try{let h=f.split(/[,，]/).map(x=>x.trim()).filter(Boolean);await n({name:l.trim(),description:u.trim(),tags:h}),Y.success(r("template.modal.saved").replace("{name}",l.trim())),t()}catch(h){Y.error(h instanceof Error?h.message:r("template.modal.failed"))}finally{g(!1)}};return(0,Kt.jsx)(ln,{open:e,onCancel:t,title:r("template.modal.title"),width:460,children:(0,Kt.jsxs)("form",{onSubmit:w,className:"wf-group-modal",children:[(0,Kt.jsxs)("div",{children:[(0,Kt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.name")}),(0,Kt.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:l,onChange:y=>s(y.target.value),placeholder:r("template.modal.namePlaceholder"),autoFocus:!0})]}),(0,Kt.jsxs)("div",{children:[(0,Kt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.description")}),(0,Kt.jsx)("textarea",{className:"nodrag nopan wf-group-modal__input",value:u,onChange:y=>d(y.target.value),placeholder:r("template.modal.descriptionPlaceholder"),rows:3})]}),(0,Kt.jsxs)("div",{children:[(0,Kt.jsx)("label",{className:"wf-group-modal__label",children:r("template.modal.tags")}),(0,Kt.jsx)("input",{type:"text",className:"nodrag nopan wf-group-modal__input",value:f,onChange:y=>c(y.target.value),placeholder:r("template.modal.tagsPlaceholder")})]}),(0,Kt.jsx)("div",{className:"wf-group-modal__hint",children:r("template.modal.hint").replace("{count}",String(o))}),(0,Kt.jsxs)("div",{className:"wf-group-modal__actions",children:[(0,Kt.jsx)("button",{type:"button",className:"wf-group-modal__btn",onClick:t,children:r("template.modal.cancel")}),(0,Kt.jsxs)("button",{type:"submit",className:"wf-group-modal__btn wf-group-modal__btn--primary",disabled:p||!l.trim(),children:[(0,Kt.jsx)(gr,{size:14}),(0,Kt.jsx)("span",{children:r(p?"template.modal.saving":"template.modal.submit")})]})]})]})})});fw.displayName="CreateWorkflowModal";function tN(){return Yt(Mt.templates)}function aN(e){return Yt(Mt.templates,{method:"POST",body:e})}function oN(e){return Yt(Mt.template(encodeURIComponent(e)))}function $c(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function nN(e){return!e||typeof e!="object"||Array.isArray(e)?null:{...e}}function pw(e){if(!e||typeof e!="object")return;if(Array.isArray(e)){for(let a of e)pw(a);return}let t=e;for(let a of Object.keys(t)){let o=t[a];ld(o)?delete t[a]:o&&typeof o=="object"&&pw(o)}}function UO(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=un(t);e.mediaUrl=a;let n=(Array.isArray(e.mediaAssets)?e.mediaAssets:[]).map(r=>{let i=nN(r);return i?(i.url=a,i.path=t,i):null}).filter(r=>r!==null);e.mediaAssets=n.length>0?n:[{type:typeof e.materialType=="string"?e.materialType:"image",url:a,path:t}]}else if(ld(e.mediaUrl)&&delete e.mediaUrl,Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{let n=nN(o);return n?(ld(n.url)&&(typeof n.path=="string"&&n.path?n.url=un(n.path):delete n.url),n.url||n.path?n:null):null}).filter(o=>o!==null);a.length===0?delete e.mediaAssets:e.mediaAssets=a}pw(e)}function Qc(e){return e.map(t=>{let a=t,o=$c(a.data);delete o.__catalog,UO(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),a.extent==="parent"&&(n.extent="parent"),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=$c(a.style)),n})}function qO(e){let t=e,a=$c(t.data);delete a.nodeHeight;let{width:o,height:n,...r}=t;return{...r,data:a}}function Jc(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=$c(a.data)),a.style&&typeof a.style=="object"&&(o.style=$c(a.style)),o})}function hn(e,t){return JSON.stringify({nodes:Qc(e).map(qO),edges:Jc(t)})}function mw(e){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function rN(e,t){let a=Array.isArray(e.nodes)?e.nodes:[],o=Array.isArray(e.edges)?e.edges:[],n=Oc(a.map(s=>({position:s.position||{x:0,y:0},width:s.width,height:s.height})),0),r=new Map;for(let s of a)typeof s.id=="string"&&r.set(s.id,mw(s.id));let i=a.map(s=>{let{parentId:u,extent:d,selected:f,...c}=s;return{...c,id:r.get(s.id)||mw(String(s.id||"node")),selected:!1,position:{x:t.x+((s.position?.x??0)-n.x),y:t.y+((s.position?.y??0)-n.y)}}}),l=o.map(s=>{let u=r.get(s.source),d=r.get(s.target);return!u||!d?null:{...s,id:mw(String(s.id||`${u}_${d}`)),source:u,target:d}}).filter(Boolean);return{nodes:i,edges:l}}var pN=N($(),1),mN=N(Qt(),1);var bg=N($(),1),iN=N(Qt(),1);var Ge=N(j(),1),gw=e=>e==="text"?(0,Ge.jsx)(wr,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Ge.jsx)(gc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Ge.jsx)(Cc,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Ge.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),lN=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Ia(),[i,l]=(0,bg.useState)(null);(0,bg.useEffect)(()=>{if(o===null){l(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,Ge.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,Ge.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Ge.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,Ge.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Ge.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Ge.jsx)(pc,{size:14})}),gw(u.type),(0,Ge.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,Ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Ge.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,Ge.jsx)(sc,{size:15}):(0,Ge.jsx)(lc,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Ge.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,x=Math.max(8,c.right-p);l({top:h,left:x}),n(d)}},children:(0,Ge.jsx)(gi,{size:15})})]})]},u.id))}),(0,Ge.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Ge.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Ge.jsx)(ft,{size:14}),(0,Ge.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&i&&typeof document<"u"&&(0,iN.createPortal)((0,Ge.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:i.top,left:i.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,Ge.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,Ge.jsx)(Tn,{size:13}),(0,Ge.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Ge.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,Ge.jsx)(Lo,{size:13}),(0,Ge.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var ya=N(j(),1),VO=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],sN=()=>{let{document:e,setFilterConditions:t}=Ia(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((l,s)=>({value:s,label:l.title||`\u5217 ${s+1}`})),n=(l,s)=>{let u=a.map((d,f)=>f===l?{...d,...s}:d);t(u)},r=()=>{let l=[...a,{columnIndex:0,op:"equals",value:""}];t(l)},i=l=>{let s=a.filter((u,d)=>d!==l);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,ya.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:l=>l.stopPropagation(),children:[(0,ya.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,ya.jsxs)("div",{className:"wf-filter-body",children:[a.map((l,s)=>(0,ya.jsxs)("div",{className:"wf-filter-row",children:[(0,ya.jsx)("div",{style:{width:130,flexShrink:0},children:(0,ya.jsx)(ao,{value:l.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ya.jsx)("div",{style:{width:110,flexShrink:0},children:(0,ya.jsx)(ao,{value:l.op,options:VO,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,ya.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:l.value??"",disabled:l.op==="empty"||l.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,ya.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(s),children:(0,ya.jsx)(xa,{size:15})})]},s)),(0,ya.jsx)("div",{style:{paddingTop:4},children:(0,ya.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,ya.jsx)(ft,{size:14}),(0,ya.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Ir=N(j(),1),GO=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],dN=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Ia(),o=e.rowHeight||"low";return(0,Ir.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Ir.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Ir.jsx)("div",{style:{padding:"6px"},children:GO.map(n=>{let r=o===n.id;return(0,Ir.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Ir.jsx)("span",{children:n.label}),r&&(0,Ir.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Ir.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var Ue=N(j(),1),uN=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:i,canRedo:l,closeStage:s}=Ia(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,Ue.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,Ue.jsx)("div",{className:"wf-stage-topbar__left",children:(0,Ue.jsxs)("div",{className:"wf-stage-title-group",children:[(0,Ue.jsx)(ko,{size:16,className:"wf-stage-title-icon"}),(0,Ue.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,Ue.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,Ue.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ue.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,Ue.jsx)(Ic,{size:15}),(0,Ue.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,Ue.jsx)(lN,{})]}),(0,Ue.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ue.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,Ue.jsx)(hi,{size:15}),(0,Ue.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,Ue.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,Ue.jsx)(sN,{})]}),(0,Ue.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ue.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,Ue.jsx)(wi,{size:15}),(0,Ue.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,Ue.jsx)(dN,{})]}),(0,Ue.jsx)("div",{className:"wf-stage-divider"}),(0,Ue.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,Ue.jsx)(Nc,{size:16})}),(0,Ue.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,Ue.jsx)(Lc,{size:16})}),(0,Ue.jsx)("div",{className:"wf-stage-divider"}),(0,Ue.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,Ue.jsx)(xa,{size:16})})]})]})};var Ae=N(j(),1),cN=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Ia(),n=e.columns.filter(l=>l.visible),i=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Ae.jsx)("div",{className:"wf-grid-container",children:(0,Ae.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,Ae.jsxs)("table",{className:"wf-grid-table",children:[(0,Ae.jsxs)("colgroup",{children:[(0,Ae.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(l=>(0,Ae.jsx)("col",{style:{width:l.width||220,minWidth:120}},l.id)),(0,Ae.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,Ae.jsx)("col",{style:{width:"auto"}})]}),(0,Ae.jsx)("thead",{children:(0,Ae.jsxs)("tr",{children:[(0,Ae.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Ae.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(l=>(0,Ae.jsx)("th",{className:"wf-grid-th",children:(0,Ae.jsxs)("div",{className:"wf-grid-th-content",children:[(0,Ae.jsx)("span",{className:"wf-grid-th-icon",children:gw(l.type)}),(0,Ae.jsx)("span",{className:"wf-grid-th-title",children:l.title})]})},l.id)),(0,Ae.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Ae.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,Ae.jsx)(ft,{size:15})})}),(0,Ae.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,Ae.jsx)("tbody",{children:e.rows.map((l,s)=>(0,Ae.jsxs)("tr",{className:i,children:[(0,Ae.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,Ae.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=l.cells[d];return(0,Ae.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,Ae.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((w,y)=>(0,Ae.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",w.name]},y)),g.length===0&&(0,Ae.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,Ae.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(s,d,g.target.value)})})()},u.id)}),(0,Ae.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,Ae.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,Ae.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,Ae.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,Ae.jsx)(ft,{size:14}),(0,Ae.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var zl=N($(),1);var lo=N(j(),1),jO=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],fN=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Ia(),[n,r]=(0,zl.useState)(e.initialTitle),[i,l]=(0,zl.useState)(e.initialType),s=(0,zl.useRef)(null);(0,zl.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),l(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,i):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,i),t()};return(0,lo.jsx)(ln,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,lo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,lo.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,lo.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,lo.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,lo.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,lo.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,lo.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,lo.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,lo.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,lo.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,lo.jsx)(ao,{value:i,options:jO,onChange:d=>l(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var hd=N(j(),1),gN=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Ia();return(0,pN.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,mN.createPortal)((0,hd.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,hd.jsx)(uN,{}),(0,hd.jsx)(cN,{}),(0,hd.jsx)(fN,{})]}),document.body)};var pt=N(j(),1),hw=class extends Ce.default.Component{constructor(t){super(t),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(t){return{hasError:!0,errorMsg:t.message}}componentDidCatch(t,a){console.error("[AssetsDrawer ErrorBoundary] \u6355\u83B7\u5230\u62BD\u5C49\u6E32\u67D3\u9519\u8BEF:",t,a)}render(){return this.state.hasError?(0,pt.jsxs)("div",{className:"wf-assets-drawer-root nodrag nopan",style:{width:"320px",padding:"16px",color:"#fff",background:"#18181b"},children:[(0,pt.jsx)("div",{style:{fontSize:"13px",fontWeight:600,color:"#ef4444",marginBottom:"8px"},children:"\u8D44\u4EA7\u62BD\u5C49\u52A0\u8F7D\u5F02\u5E38"}),(0,pt.jsx)("div",{style:{fontSize:"11px",color:"#a1a1aa",marginBottom:"12px"},children:this.state.errorMsg||"\u7EC4\u4EF6\u6E32\u67D3\u53D1\u751F\u672A\u77E5\u9519\u8BEF"}),(0,pt.jsx)("button",{type:"button",style:{padding:"4px 12px",borderRadius:"6px",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{this.setState({hasError:!1,errorMsg:""}),this.props.onClose()},children:"\u91CD\u7F6E\u5E76\u5173\u95ED"})]}):this.props.children}};Wc(AM);Wc(PM);Wc($M);Wc(QM);var XO=oM(),WO={default:E0,animated:E0},hN={maxZoom:1},YO={x:0,y:0,zoom:1},ZO=[1,2],KO=96,$O=({catalog:e,workspaceId:t,onExecuteNodeIds:a,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:l})=>{let s=se(),{screenToFlowPosition:u,fitView:d,zoomTo:f,setCenter:c}=Ca(),p=Ca(),{nodes:g,edges:w,onNodesChange:y,onEdgesChange:h}=i5(),x=oe(Z=>Z.applyCanvasInputMutation),m=oe(Z=>Z.setNodes),b=oe(Z=>Z.setSelectedElement),v=oe(Z=>Z.groupNodes),C=oe(Z=>Z.ungroup),k=oe(Z=>Z.pushHistory),S=oe(Z=>Z.undo),_=oe(Z=>Z.redo),A=l5(),D=s5(),[B,U]=(0,Ce.useState)(null),[L,E]=(0,Ce.useState)(!1),[T,M]=(0,Ce.useState)(!1),[P,O]=(0,Ce.useState)(!1),[R,H]=(0,Ce.useState)(!1),[I,F]=(0,Ce.useState)(void 0),[W,K]=(0,Ce.useState)("select"),[ee,Q]=(0,Ce.useState)(!1),[G,te]=(0,Ce.useState)([]),[ne,fe]=(0,Ce.useState)(!1),[re,ue]=(0,Ce.useState)(null),[be,ke]=(0,Ce.useState)([]),Oe=(0,Ce.useRef)(0),yt=(0,Ce.useMemo)(()=>g.some(Z=>Z.selected),[g]),vt=(0,Ce.useMemo)(()=>g.filter(Z=>Z.selected&&Z.type!=="group"),[g]),so=(0,Ce.useMemo)(()=>{if(vt.length<2)return{x:0,y:0};let Z=Oc(vt,0),de=Z.x+Z.width/2,Le=Z.y,Re=p.getViewport?p.getViewport():{x:0,y:0,zoom:1};return{x:Re.x+de*Re.zoom,y:Re.y+Le*Re.zoom}},[vt,p]),ae=(0,Ce.useCallback)(async()=>{let Z=await tN();Z.ok&&ke((Z.body.templates||[]).map(de=>({id:de.id,name:de.name,nodeCount:de.nodeCount})))},[]);(0,Ce.useEffect)(()=>{ae()},[ae]);let Me=(0,Ce.useCallback)(async Z=>{let de=await oN(Z);if(!de.ok||!de.body.template){Y.error(de.body.message||de.body.error||s("template.toast.loadFailed"));return}let Le=u({x:window.innerWidth/2,y:window.innerHeight/2}),Re=rN(de.body.template,Le);x({addNodes:Re.nodes,addEdges:Re.edges}),Y.success(s("template.toast.inserted").replace("{name}",de.body.template.name))},[x,u,s]),it=(0,Ce.useCallback)(()=>{if(vt.length<2)return;v(vt.map(de=>de.id),s("group.defaultTitle"))&&Y.success(s("group.toast.grouped"))},[vt,v,s]),Ct=(0,Ce.useCallback)((Z,de=vt)=>{if(de.length<2)return;let Re=[...de].sort((Dt,xn)=>Dt.position.x-xn.position.x)[0];if(!Re)return;let Vt=Re.position.x,je=Re.position.y,We=40,Gt=Vt,bt=je,sa=Math.ceil(Math.sqrt(de.length)),uo=de.map((Dt,xn)=>{let Fl={...Dt.position},Dg=Dt.width||320,Rg=Dt.height||200;if(Z==="horizontal")Fl={x:Gt,y:je},Gt+=Dg+We;else if(Z==="vertical")Fl={x:Vt,y:bt},bt+=Rg+We;else if(Z==="grid"){let Pg=xn%sa,zg=Math.floor(xn/sa);Fl={x:Vt+Pg*(320+We),y:je+zg*(220+We)}}return{...Dt,position:Fl}}),Mr=new Map(uo.map(Dt=>[Dt.id,Dt]));m(Dt=>Dt.map(xn=>Mr.get(xn.id)||xn)),Y.success(s("group.toast.layout"))},[vt,m,s]);(0,Ce.useEffect)(()=>{let Z=Vt=>{let je=Vt,We=je.detail?.groupId?ad(g,je.detail.groupId):[],Gt=We.length>0?We:je.detail?.nodeIds||[];Gt.length>0&&a&&(a(Gt),Y.success(s("group.toast.execute")))},de=Vt=>{let je=Vt,{groupId:We,layoutType:Gt}=je.detail,bt=g.filter(sa=>sa.parentId===We);bt.length>=2&&Ct(Gt,bt)},Le=Vt=>{let We=Vt.detail?.nodeIds||[],bt=g.filter(sa=>We.includes(sa.id)).map(sa=>{let uo=sa.data||{};return{id:sa.id,nodeId:sa.id,nodeTitle:uo.label||uo.title||uo.name||sa.id,type:uo.materialType||sa.type||"image",previewUrl:uo.previewUrl,content:uo.content,realPath:uo.realPath}});te(bt),Q(!0)},Re=Vt=>{let je=Vt,{groupId:We,groupTitle:Gt}=je.detail,bt=g.filter(sa=>sa.parentId===We);ue({id:We,title:Gt||s("template.modal.defaultName"),nodeCount:bt.length}),fe(!0)};return window.addEventListener("omnimux:workflow:execute-group",Z),window.addEventListener("omnimux:workflow:layout-group",de),window.addEventListener("omnimux:workflow:batch-create-asset",Le),window.addEventListener("omnimux:workflow:create-subworkflow",Re),()=>{window.removeEventListener("omnimux:workflow:execute-group",Z),window.removeEventListener("omnimux:workflow:layout-group",de),window.removeEventListener("omnimux:workflow:batch-create-asset",Le),window.removeEventListener("omnimux:workflow:create-subworkflow",Re)}},[g,a,Ct,s]);let He=UI(m,b),$t=s("menu.generateFromNode"),{menuState:Nt,onConnectStart:Va,onConnectEnd:qn,onMenuSelect:yd,onMenuClose:vd}=OI({onReject:U});(0,Ce.useEffect)(()=>{k()},[g,w,k]);let Cd=(0,Ce.useMemo)(()=>e?g.map(Z=>({...Z,data:{...Z.data,__catalog:e}})):g,[g,e]),wg=(0,Ce.useCallback)(Z=>{let de=x({addEdges:[Z]});if(de.status==="rejected"){let Le=s(ng(de.reasonCode));U(Le),Y.warning(Le)}else U(null)},[x,s]),yg=(0,Ce.useCallback)(Z=>{let de=oe.getState();return TI(Z,de.nodes,de.edges)},[]),tf=(0,Ce.useCallback)(async(Z,de)=>{let Le=Oe.current,Re=de??{x:120+Le%3*420,y:120+Math.floor(Le/3)*360};if(Z==="import_asset"){let je=await Pn();if(!je.ok){je.body.error==="picker-unsupported"?Y.warning(s("picker.needPath")):Y.error(s("picker.pickFailed"));return}let We=je.body.paths??[];if(We.length===0)return;let Gt=Si(We);if(Gt.length===0){Y.warning(s("picker.unsupported"));return}let bt=$0({files:Gt,origin:Re});if(!bt.hasWork||!bt.addNodes?.length)return;if(x({addNodes:bt.addNodes}).status!=="allowed"){Y.error(s("picker.commitFailed"));return}let uo=new Set(bt.addNodes.map(Mr=>Mr.id));m(Mr=>Mr.map(Dt=>uo.has(Dt.id)?Dt:Dt.selected?{...Dt,selected:!1}:Dt)),Oe.current+=bt.addNodes.length,Y.success(s("picker.importOk"));return}if(Z==="table"||Z==="video_composition"){let je=nM(Z,Re,`node_${Z}_${Date.now()}`);if(!je)return;Oe.current+=1,m(We=>G0(We,[{...je,selected:!0}]));return}let Vt=dd(Z,Re);Vt.nodes.length!==0&&(Oe.current+=1,m(je=>G0(je,Vt.nodes)))},[m,x,s]),vg=(0,Ce.useCallback)(Z=>{let de=Z.nodes.map(Re=>Re.id),Le=Z.edges.map(Re=>Re.id);de.length===0&&Le.length===0||x({removeNodeIds:de,removeEdgeIds:Le})},[x]),{menu:Bl,handleNodeContextMenu:Cg,handlePaneContextMenu:Sg,handleSelectionContextMenu:kg,closeMenu:Sd,handleMenuAction:Lg,handleAddNodeFromMenu:_g}=qI({screenToFlowPosition:u,setNodes:m,copySelectedNodes:He.copySelectedNodes,pasteNodes:He.pasteNodes,duplicateSelectedNodes:He.duplicateSelectedNodes,deleteSelectedNodes:He.deleteSelectedNodes,selectAllNodes:He.selectAllNodes,clearSelection:He.clearSelection,undo:S,redo:_,onExecuteNodeIds:a,onAddNode:tf}),Hl=(0,Ce.useCallback)((Z,de)=>{let Le=GI(Z);if(!Le.ok)return Y.warning(s(Le.reason==="unsupported"?"picker.unsupported":"picker.needPath")),!1;let Re=$0({files:[Le.draft],origin:de});if(!Re.hasWork||!Re.addNodes?.length)return Y.warning(s("picker.unsupported")),!1;if(x({addNodes:Re.addNodes}).status!=="allowed")return Y.error(s("picker.commitFailed")),!1;let je=new Set(Re.addNodes.map(Gt=>Gt.id));m(Gt=>Gt.map(bt=>je.has(bt.id)?bt:bt.selected?{...bt,selected:!1}:bt)),Oe.current+=Re.addNodes.length;let We=Re.addNodes[0];return We&&b("node",We.id),Y.success(s("picker.importOk")),!0},[x,m,b,s]),Ig=(0,Ce.useCallback)(Z=>{let de=Oe.current,Le={x:200+de%4*50,y:200+de%4*40};Hl(Z,Le)},[Hl]);EI({onCopy:He.copySelectedNodes,onPaste:()=>He.pasteNodes(),onSelectAll:He.selectAllNodes,onDeleteSelected:He.deleteSelectedNodes,onClearSelection:He.clearSelection,onDuplicate:He.duplicateSelectedNodes,onGroupSelected:it,onUngroupSelected:()=>{let Z=g.find(de=>de.selected&&de.type==="group");Z&&(C(Z.id),Y.success(s("group.toast.ungrouped")))},onUndo:S,onRedo:_,hasSelection:yt,onToggleAssets:()=>M(Z=>!Z),onToggleShortcuts:()=>O(Z=>!Z),onToggleMinimap:()=>E(Z=>!Z),onToggleAddMenu:()=>H(Z=>!Z),onSetPointerMode:Z=>K(Z),onFitView:()=>d(hN),onResetZoom:()=>f(1),onCategoryKey:Z=>{M(!0),F(Z)}});let Mg=(0,Ce.useCallback)((Z,de)=>{b("node",de.id)},[b]),Ng=(0,Ce.useCallback)(()=>{b("none",null),Sd()},[b,Sd]),Eg=(0,Ce.useCallback)(()=>{m(Z=>Z.map((de,Le)=>({...de,position:{x:120+Le%3*440,y:120+Math.floor(Le/3)*360}})))},[m]),Tg=(0,Ce.useCallback)(Z=>{Z.preventDefault(),Z.dataTransfer.dropEffect="copy"},[]),Ag=(0,Ce.useCallback)(Z=>{Z.preventDefault();try{let de=Z.dataTransfer.getData("application/json");if(!de)return;let Le=JSON.parse(de);if(Le?.type==="omnimux-canvas-node"&&typeof Le.nodeId=="string"){Y0({nodes:g,nodeId:Le.nodeId,setCenter:c,setNodes:m});return}if(Le?.type==="omnimux-asset"&&Le.asset){let Re=u({x:Z.clientX,y:Z.clientY});Hl(Le.asset,Re)}}catch(de){console.error("Failed to parse dropped asset",de)}},[u,Hl,g,c,m]);return(0,pt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,pt.jsx)(h_,{nodes:Cd,edges:w,onNodesChange:y,onEdgesChange:h,onConnect:wg,isValidConnection:yg,onConnectStart:Va,onConnectEnd:qn,onNodeClick:Mg,onPaneClick:Ng,onNodeContextMenu:Cg,onPaneContextMenu:Sg,onDragOver:Tg,onDrop:Ag,onSelectionContextMenu:kg,onDelete:vg,nodeTypes:XO,edgeTypes:WO,fitView:!0,fitViewOptions:hN,defaultViewport:YO,minZoom:U0.minZoom,maxZoom:U0.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:W==="pan"?!0:ZO,panOnScroll:!0,panOnScrollMode:tn.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:W==="select",selectionMode:pr.Partial,defaultEdgeOptions:Om,connectOnClick:!1,connectionRadius:KO,onlyRenderVisibleElements:!0,children:(0,pt.jsx)(y_,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:In.Dots})}),(0,pt.jsx)(L5,{isMinimapOpen:L,onToggleMinimap:()=>E(Z=>!Z),onAlignGrid:Eg,onStartExecution:o,onPauseExecution:n,onResumeExecution:r,onCancelExecution:i,onResetExecution:l}),L&&(0,pt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,pt.jsx)(S_,{pannable:!0,zoomable:!0})}),(0,pt.jsx)(k5,{onAddNode:tf,pointerMode:W,onPointerModeChange:K,onOpenAssets:()=>M(Z=>!Z),onOpenHelp:()=>O(Z=>!Z),isAssetsOpen:T,isAddMenuOpen:R,onToggleAddMenu:()=>H(Z=>!Z),templates:be,onInsertTemplate:Z=>{Me(Z)}}),T&&(0,pt.jsx)(hw,{onClose:()=>M(!1),children:(0,pt.jsx)(CI,{isOpen:T,onClose:()=>M(!1),onInsertAsset:Ig,workspaceId:t,nodes:Cd,onFocusNode:Z=>{Y0({nodes:Cd,nodeId:Z,setCenter:c,setNodes:m})}})}),(0,pt.jsx)(SI,{isOpen:P,onClose:()=>O(!1)}),(0,pt.jsx)(uw,{visible:vt.length>=2,selectedCount:vt.length,position:so,onGroup:it,onCreateAsset:()=>{window.dispatchEvent(new CustomEvent("omnimux:workflow:batch-create-asset",{detail:{nodeIds:vt.map(Z=>Z.id)}}))},onLayout:Z=>Ct(Z)}),(0,pt.jsx)(MI,{x:Bl.x,y:Bl.y,visible:Bl.visible,context:Bl.context,onClose:Sd,onAction:Lg,onAddNode:_g,canUndo:A,canRedo:D,hasClipboard:He.hasClipboard,hasSelection:yt}),(0,pt.jsx)(og,{visible:Nt.visible,x:Nt.x,y:Nt.y,title:$t,options:Nt.options,onSelect:yd,onClose:vd}),(0,pt.jsx)(gN,{}),(0,pt.jsx)(cw,{isOpen:ee,onClose:()=>Q(!1),items:G}),(0,pt.jsx)(fw,{isOpen:ne,onClose:()=>{fe(!1),ue(null)},groupId:re?.id,defaultTitle:re?.title,nodeCount:re?.nodeCount,onConfirm:async Z=>{let de=re?.id;if(!de)throw new Error(s("template.missingGroup"));let Le=new Set(ad(g,de)),Re=g.filter(We=>Le.has(We.id)),Vt=w.filter(We=>Le.has(We.source)&&Le.has(We.target)),je=await aN({name:Z.name,description:Z.description,tags:Z.tags,nodes:Qc(Re),edges:Jc(Vt)});if(!je.ok||!je.body.template)throw new Error(je.body.message||je.body.error||s("template.modal.failed"));await ae()}}),B&&(0,pt.jsx)("div",{className:"wf-rejected-toast",children:B})]})},QO=e=>(0,pt.jsx)(v0,{children:(0,pt.jsx)($O,{...e})}),xN=QO;var qt=N($(),1);var bN=new Set(["pending","running","paused"]),JO=new Set(["completed","error","cancelled"]);function xd(e,t){let a=oe.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function wN(e,t){let a=(0,qt.useRef)(null),o=(0,qt.useRef)(e);o.current=e;let n=(0,qt.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,qt.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),i=(0,qt.useCallback)((y,h)=>{at.getState().setExecution({status:y,error:h,progress:{...at.getState().progress,percentage:y==="completed"?100:at.getState().progress.percentage}})},[]),l=(0,qt.useCallback)((y,h)=>{let x;try{x=JSON.parse(h)}catch{return}let m=at.getState();switch(y){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:x.totalNodes??0,completed:0,running:0,pending:x.totalNodes??0,percentage:0}});break}case"node_start":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),xd(x.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:x.progress??m.progress.percentage}});let b=x.output??{},v={executionStatus:"completed",executionError:void 0};if(b.text&&(v.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let C=b.mediaAssets[0];v.mediaAssets=b.mediaAssets,C.type==="image"&&(v.mediaUrl=C.url),v.taskId=`exec-${x.executionId??""}`}xd(x.nodeId,v);break}case"node_error":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),xd(x.nodeId,{executionStatus:"error",executionError:x.error??kl("error.nodeExecutionFailed")});break}case"node_skipped":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"skipped"),xd(x.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{i("completed",null),r();break}case"execution_error":{i("error",x.error??kl("error.executionFailed")),r();break}case"execution_cancelled":{i("cancelled",null),r();break}default:break}},[i,r]),s=(0,qt.useCallback)(y=>{r();let h=o.current;if(!h)return;let x=new EventSource(Mt.executionEvents(encodeURIComponent(h),encodeURIComponent(y)));a.current=x;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)x.addEventListener(b,v=>{l(b,v.data)});x.onerror=()=>{let b=at.getState().status;JO.has(b)&&r()}},[r,l]),u=(0,qt.useCallback)(y=>{let h=at.getState();h.setExecution({executionId:y.id,status:y.status,error:y.error,progress:{total:y.progress.total,completed:y.progress.completed,running:y.progress.running,pending:y.progress.pending,percentage:y.progress.percentage}});for(let[x,m]of Object.entries(y.nodeStates??{})){h.setNodeStatus(x,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let v=y.nodeOutputs?.[x];v&&(v.text&&(b.generatedContent=v.text),v.mediaAssets&&v.mediaAssets.length>0&&(b.mediaAssets=v.mediaAssets,v.mediaAssets[0]&&v.mediaAssets[0].type==="image"&&(b.mediaUrl=v.mediaAssets[0].url))),xd(x,b)}},[]),d=(0,qt.useCallback)(async(y={})=>{let h=o.current;if(!h)return;if(r(),at.getState().resetExecution(),at.getState().setExecution({status:"pending"}),y.mode==="single"&&y.nodeIds&&y.nodeIds[0]&&(at.getState().setNodeStatus(y.nodeIds[0],"pending"),xd(y.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let x=await E5(h,{mode:y.mode??"full",nodeIds:y.nodeIds});if(!x.ok||!x.body.execution){at.getState().setExecution({status:"error",error:x.body.message??kl("error.createExecutionFailed")});return}at.getState().setExecution({executionId:x.body.execution.id}),s(x.body.execution.id)},[r,s]),f=(0,qt.useCallback)(async y=>{let h=o.current,{executionId:x}=at.getState();if(!h||!x)return;let m=await B5(h,x,y);!m.ok&&m.body.message&&at.getState().setExecution({error:m.body.message})},[]),c=(0,qt.useCallback)(()=>f("pause"),[f]),p=(0,qt.useCallback)(()=>f("resume"),[f]),g=(0,qt.useCallback)(()=>f("cancel"),[f]),w=(0,qt.useCallback)(()=>{r(),at.getState().resetExecution()},[r]);return(0,qt.useEffect)(()=>{if(!e)return;let y=!1;return(async()=>{try{let h=await T5(e);if(y||!h.ok)return;let x=(h.body.executions??[]).find(b=>bN.has(b.status));if(!x)return;let m=await A5(e,x.id);if(y||!m.ok||!m.body.execution)return;u(m.body.execution),bN.has(m.body.execution.status)&&s(x.id)}catch{}})(),()=>{y=!0}},[e,u,s]),(0,qt.useEffect)(()=>(at.getState().setStartNodeExecution(h=>{d({mode:"single",nodeIds:[h]})}),()=>{at.getState().setStartNodeExecution(null)}),[d]),(0,qt.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:w}}var Ol=N($(),1);function yN(e={}){let t=e.workspaceId,[a,o]=(0,Ol.useState)({phase:"loading"}),[n,r]=(0,Ol.useState)(()=>Kc()),i=oe(d=>d.hydrateGraph),l=oe(d=>d.resetStore),s=oe(d=>d.nodes.length),u=(0,Ol.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Ol.useEffect)(()=>{let d=!1;o({phase:"loading"});async function f(){let c=oe.getState(),p=gI(c.nodes);if(p.length===0)return;let g=await O5(p);if(d||!g.ok||!Array.isArray(g.body.items))return;let w=mI(c.nodes,g.body.items);!w.some((h,x)=>h!==c.nodes[x])||d||c.setNodes(w)}return(async()=>{try{if(_5().then(g=>{!d&&g.ok&&(r(g.body),SM(g.body))}),!t)return;let c=await Fc(t);if(d)return;if(c.ok&&c.body.workspace){if(i(c.body.workspace.nodes,c.body.workspace.edges),await f(),d)return;o({phase:"ready",workspace:c.body.workspace});return}let p=await I5("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??kl("error.createWorkspaceFailed"));i(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(c){d||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{d=!0,u.current?.(),l()}},[t,i,l]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var rt=N($(),1);function vN(e){return e.localSignature===e.remoteSignature?"adopt":e.localSignature===e.lastSavedSignature?"reload":"conflict"}var e7=1e3,t7=2500,a7=3e3;function bd(){let{nodes:e,edges:t}=oe.getState(),a=_0(e,t);return{nodes:a.nodes,edges:a.edges}}function CN(e,t={}){let a=t.enabled!==!1,[o,n]=(0,rt.useState)("idle"),[r,i]=(0,rt.useState)(!1),l=(0,rt.useRef)(e),s=(0,rt.useRef)(0),u=(0,rt.useRef)(""),d=(0,rt.useRef)(0),f=(0,rt.useRef)(""),c=(0,rt.useRef)(null),p=(0,rt.useRef)(null),g=(0,rt.useRef)(!1),w=(0,rt.useRef)(a);w.current=a;let y=(0,rt.useRef)(t.onSaved);y.current=t.onSaved,(0,rt.useEffect)(()=>{l.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=hn(e.nodes,e.edges),d.current=e.nodes.length,i(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,rt.useCallback)(async S=>{let _=l.current;if(!_){n("error");return}let A=await Fc(_.id);if(!A.ok||!A.body.workspace){n("error");return}let D=A.body.workspace,B=vN({localSignature:hn(S.localNodes,S.localEdges),lastSavedSignature:u.current,remoteSignature:hn(D.nodes,D.edges)});if(s.current=D.version,B==="conflict"){n("conflict");return}u.current=hn(D.nodes,D.edges),d.current=D.nodes.length,B==="reload"&&oe.getState().hydrateGraph(D.nodes,D.edges),i(!1),n("idle"),y.current?.(D)},[]),m=(0,rt.useCallback)(async(S,_,A=!1)=>{let D=l.current;if(!D||!A&&!w.current||g.current)return;let B=Gm({lastSavedNodeCount:d.current,nextNodes:S.nodes,nextEdges:S.edges,cause:_,lastSavedSignature:u.current,nextSignature:hn(S.nodes,S.edges)});if(!B.persist||!B.snapshot)return;let{nodes:U,edges:L}=B.snapshot,E=D.name;g.current=!0,n("saving");try{let T=await N5(D.id,{name:E,nodes:Qc(U),edges:Jc(L),expectedVersion:s.current});if(T.status===409){await x({localNodes:U,localEdges:L});return}T.ok&&T.body.workspace?(s.current=T.body.workspace.version,u.current=hn(U,L),d.current=U.length,i(!1),n("saved"),h(),p.current=setTimeout(()=>{n(M=>M==="saved"?"idle":M)},t7),y.current?.(T.body.workspace)):n("error")}catch{n("error")}finally{g.current=!1}},[x]);(0,rt.useEffect)(()=>{if(!a)return;let S=(A="autosave")=>{if(!l.current||!w.current)return;let B=bd(),L=hn(B.nodes,B.edges)!==u.current;if(i(L),!L){c.current&&(clearTimeout(c.current),c.current=null),n(P=>P==="pending"?"idle":P);return}let E=zc(B.nodes.length,A);if(!L0({lastSavedNodeCount:d.current,nextNodeCount:B.nodes.length,cause:E})){c.current&&(clearTimeout(c.current),c.current=null),i(!1),n(P=>P==="pending"?"idle":P);return}n(P=>P==="saving"||P==="conflict"?P:"pending"),c.current&&clearTimeout(c.current);let T={nodes:B.nodes,edges:B.edges},M=E;c.current=setTimeout(()=>{c.current=null,m(T,M)},e7)},_=oe.subscribe(()=>{S("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[m,a]),(0,rt.useEffect)(()=>{if(!a)return;let S=()=>{if(!w.current||!l.current)return;let A=bd(),D=zc(A.nodes.length,"flush"),B=Gm({lastSavedNodeCount:d.current,nextNodes:A.nodes,nextEdges:A.edges,cause:D,lastSavedSignature:u.current,nextSignature:hn(A.nodes,A.edges)});!B.persist||!B.snapshot||m(B.snapshot,D)};return window.addEventListener("pagehide",S),()=>{window.removeEventListener("pagehide",S),S(),h()}},[m,a]);let b=(0,rt.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let S=bd();await m(S,zc(S.nodes.length,"autosave"))},[m]),v=(0,rt.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!l.current)return;let _=bd(),A="flush",D=Gm({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:A,lastSavedSignature:u.current,nextSignature:hn(_.nodes,_.edges)});!D.persist||!D.snapshot||m(D.snapshot,A,!0)},[m]),C=(0,rt.useCallback)(async()=>{let S=bd();await m(S,zc(S.nodes.length,"autosave"))},[m]),k=(0,rt.useCallback)(async()=>{let S=l.current;if(!S)return;let _=await Fc(S.id);if(!_.ok||!_.body.workspace){n("error");return}let A=_.body.workspace;s.current=A.version,u.current=hn(A.nodes,A.edges),d.current=A.nodes.length,oe.getState().hydrateGraph(A.nodes,A.edges),i(!1),n("idle"),y.current?.(A)},[]);return(0,rt.useEffect)(()=>{if(!a)return;let S=!1,_=async()=>{if(S||!w.current||typeof document<"u"&&document.visibilityState==="hidden")return;let D=l.current;if(!(!D||g.current)){S=!0;try{let B=await M5(D.id);if(!B.ok||typeof B.body.version!="number"||B.body.version<=s.current)return;let U=bd();await x({localNodes:U.nodes,localEdges:U.edges})}catch{}finally{S=!1}}},A=setInterval(()=>{_()},a7);return()=>clearInterval(A)},[a,x]),{status:o,isDirty:r,saveNow:b,flushPendingSave:v,resolveConflict:C,reloadFromServer:k}}var qa=N(j(),1),o7=({locale:e,workspaceId:t})=>{let a=se(),o=(0,wd.useRef)(()=>{}),{boot:n,setBoot:r,catalog:i}=yN({workspaceId:t,beforeReset:()=>{o.current()}});(0,wd.useEffect)(()=>{v5(e)},[e]);let l=n.phase==="ready"?n.workspace:null,s=(0,wd.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=CN(l,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=wN(l?l.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,qa.jsx)("div",{className:"wf-canvas-root",children:(0,qa.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,qa.jsx)("div",{className:"wf-canvas-root",children:(0,qa.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,qa.jsx)("span",{children:n.message}),(0,qa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,qa.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,qa.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,qa.jsx)("span",{children:a("app.conflictBanner")}),(0,qa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,qa.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,qa.jsx)("main",{className:"wf-canvas-main",children:(0,qa.jsx)(xN,{catalog:i,workspaceId:l?.id??null,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},xw=o7;var SN=`/* this gets exported as style.css and can be used for the default theming */
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
`;var kN=`/**
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

`;var LN=`/**
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




`;var _N=`/**
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
`;var s7=[{id:"omnimux-workflow-xyflow-base",css:SN},{id:"omnimux-workflow-theme",css:kN},{id:"omnimux-workflow-components",css:LN},{id:"omnimux-workflow-table-node",css:_N}];function IN(){for(let{id:e,css:t}of s7){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var bw=N(j(),1),ef=new WeakMap;function d7(e,t){if(!e||ef.has(e))return;IN();let a=(0,MN.createRoot)(e);ef.set(e,{root:a,lastProps:t}),a.render((0,bw.jsx)(xw,{...t}))}function u7(e,t){let a=ef.get(e);a&&(a.lastProps=t,a.root.render((0,bw.jsx)(xw,{...t})))}function c7(e){let t=ef.get(e);t&&(t.root.unmount(),ef.delete(e))}return o3(f7);})();
