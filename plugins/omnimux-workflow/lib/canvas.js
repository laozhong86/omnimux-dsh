var __omnimuxWorkflowCanvas=(()=>{var $I=Object.create;var yd=Object.defineProperty;var QI=Object.getOwnPropertyDescriptor;var JI=Object.getOwnPropertyNames;var e5=Object.getPrototypeOf,t5=Object.prototype.hasOwnProperty;var aa=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},a5=(e,t)=>{for(var a in t)yd(e,a,{get:t[a],enumerable:!0})},Jx=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of JI(t))!t5.call(e,n)&&n!==a&&yd(e,n,{get:()=>t[n],enumerable:!(o=QI(t,n))||o.enumerable});return e};var R=(e,t,a)=>(a=e!=null?$I(e5(e)):{},Jx(t||!e||!e.__esModule?yd(a,"default",{value:e,enumerable:!0}):a,e)),o5=e=>Jx(yd({},"__esModule",{value:!0}),e);var ub=aa(Qe=>{"use strict";function Rp(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<wd(n,t))e[o]=t,e[a]=n,a=o;else break e}}function Lo(e){return e.length===0?null:e[0]}function Cd(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,u=e[s];if(0>wd(i,a))s<n&&0>wd(u,i)?(e[o]=u,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>wd(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function wd(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}Qe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(eb=performance,Qe.unstable_now=function(){return eb.now()}):(Ep=Date,tb=Ep.now(),Qe.unstable_now=function(){return Ep.now()-tb});var eb,Ep,tb,jo=[],En=[],n5=1,Ba=null,Ht=3,Dp=!1,rs=!1,ls=!1,zp=!1,nb=typeof setTimeout=="function"?setTimeout:null,rb=typeof clearTimeout=="function"?clearTimeout:null,ab=typeof setImmediate<"u"?setImmediate:null;function vd(e){for(var t=Lo(En);t!==null;){if(t.callback===null)Cd(En);else if(t.startTime<=e)Cd(En),t.sortIndex=t.expirationTime,Rp(jo,t);else break;t=Lo(En)}}function Pp(e){if(ls=!1,vd(e),!rs)if(Lo(jo)!==null)rs=!0,zl||(zl=!0,Dl());else{var t=Lo(En);t!==null&&Op(Pp,t.startTime-e)}}var zl=!1,is=-1,lb=5,ib=-1;function sb(){return zp?!0:!(Qe.unstable_now()-ib<lb)}function Tp(){if(zp=!1,zl){var e=Qe.unstable_now();ib=e;var t=!0;try{e:{rs=!1,ls&&(ls=!1,rb(is),is=-1),Dp=!0;var a=Ht;try{t:{for(vd(e),Ba=Lo(jo);Ba!==null&&!(Ba.expirationTime>e&&sb());){var o=Ba.callback;if(typeof o=="function"){Ba.callback=null,Ht=Ba.priorityLevel;var n=o(Ba.expirationTime<=e);if(e=Qe.unstable_now(),typeof n=="function"){Ba.callback=n,vd(e),t=!0;break t}Ba===Lo(jo)&&Cd(jo),vd(e)}else Cd(jo);Ba=Lo(jo)}if(Ba!==null)t=!0;else{var r=Lo(En);r!==null&&Op(Pp,r.startTime-e),t=!1}}break e}finally{Ba=null,Ht=a,Dp=!1}t=void 0}}finally{t?Dl():zl=!1}}}var Dl;typeof ab=="function"?Dl=function(){ab(Tp)}:typeof MessageChannel<"u"?(Ap=new MessageChannel,ob=Ap.port2,Ap.port1.onmessage=Tp,Dl=function(){ob.postMessage(null)}):Dl=function(){nb(Tp,0)};var Ap,ob;function Op(e,t){is=nb(function(){e(Qe.unstable_now())},t)}Qe.unstable_IdlePriority=5;Qe.unstable_ImmediatePriority=1;Qe.unstable_LowPriority=4;Qe.unstable_NormalPriority=3;Qe.unstable_Profiling=null;Qe.unstable_UserBlockingPriority=2;Qe.unstable_cancelCallback=function(e){e.callback=null};Qe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lb=0<e?Math.floor(1e3/e):5};Qe.unstable_getCurrentPriorityLevel=function(){return Ht};Qe.unstable_next=function(e){switch(Ht){case 1:case 2:case 3:var t=3;break;default:t=Ht}var a=Ht;Ht=t;try{return e()}finally{Ht=a}};Qe.unstable_requestPaint=function(){zp=!0};Qe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Ht;Ht=e;try{return t()}finally{Ht=a}};Qe.unstable_scheduleCallback=function(e,t,a){var o=Qe.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:n5++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Rp(En,e),Lo(jo)===null&&e===Lo(En)&&(ls?(rb(is),is=-1):ls=!0,Op(Pp,a-o))):(e.sortIndex=n,Rp(jo,e),rs||Dp||(rs=!0,zl||(zl=!0,Dl()))),e};Qe.unstable_shouldYield=sb;Qe.unstable_wrapCallback=function(e){var t=Ht;return function(){var a=Ht;Ht=t;try{return e.apply(this,arguments)}finally{Ht=a}}}});var cb=aa((oz,db)=>{"use strict";db.exports=ub()});var Cb=aa(pe=>{"use strict";var Up=Symbol.for("react.transitional.element"),r5=Symbol.for("react.portal"),l5=Symbol.for("react.fragment"),i5=Symbol.for("react.strict_mode"),s5=Symbol.for("react.profiler"),u5=Symbol.for("react.consumer"),d5=Symbol.for("react.context"),c5=Symbol.for("react.forward_ref"),f5=Symbol.for("react.suspense"),p5=Symbol.for("react.memo"),hb=Symbol.for("react.lazy"),m5=Symbol.for("react.activity"),fb=Symbol.iterator;function g5(e){return e===null||typeof e!="object"?null:(e=fb&&e[fb]||e["@@iterator"],typeof e=="function"?e:null)}var xb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bb=Object.assign,yb={};function Ol(e,t,a){this.props=e,this.context=t,this.refs=yb,this.updater=a||xb}Ol.prototype.isReactComponent={};Ol.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ol.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wb(){}wb.prototype=Ol.prototype;function Fp(e,t,a){this.props=e,this.context=t,this.refs=yb,this.updater=a||xb}var qp=Fp.prototype=new wb;qp.constructor=Fp;bb(qp,Ol.prototype);qp.isPureReactComponent=!0;var pb=Array.isArray;function Hp(){}var Xe={H:null,A:null,T:null,S:null},vb=Object.prototype.hasOwnProperty;function Vp(e,t,a){var o=a.ref;return{$$typeof:Up,type:e,key:t,ref:o!==void 0?o:null,props:a}}function h5(e,t){return Vp(e.type,t,e.props)}function Gp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Up}function x5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var mb=/\/+/g;function Bp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x5(""+e.key):t.toString(36)}function b5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Hp,Hp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Pl(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Up:case r5:l=!0;break;case hb:return l=e._init,Pl(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+Bp(e,0):o,pb(n)?(a="",l!=null&&(a=l.replace(mb,"$&/")+"/"),Pl(n,t,a,"",function(u){return u})):n!=null&&(Gp(n)&&(n=h5(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(mb,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(pb(e))for(var s=0;s<e.length;s++)o=e[s],r=i+Bp(o,s),l+=Pl(o,t,a,r,n);else if(s=g5(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+Bp(o,s++),l+=Pl(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Pl(b5(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function Sd(e,t,a){if(e==null)return e;var o=[],n=0;return Pl(e,o,"","",function(r){return t.call(a,r,n++)}),o}function y5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gb=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},w5={map:Sd,forEach:function(e,t,a){Sd(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Sd(e,function(){t++}),t},toArray:function(e){return Sd(e,function(t){return t})||[]},only:function(e){if(!Gp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Activity=m5;pe.Children=w5;pe.Component=Ol;pe.Fragment=l5;pe.Profiler=s5;pe.PureComponent=Fp;pe.StrictMode=i5;pe.Suspense=f5;pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Xe;pe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Xe.H.useMemoCache(e)}};pe.cache=function(e){return function(){return e.apply(null,arguments)}};pe.cacheSignal=function(){return null};pe.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=bb({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!vb.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return Vp(e.type,n,o)};pe.createContext=function(e){return e={$$typeof:d5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:u5,_context:e},e};pe.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)vb.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return Vp(e,r,n)};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:c5,render:e}};pe.isValidElement=Gp;pe.lazy=function(e){return{$$typeof:hb,_payload:{_status:-1,_result:e},_init:y5}};pe.memo=function(e,t){return{$$typeof:p5,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Xe.T,a={};Xe.T=a;try{var o=e(),n=Xe.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Hp,gb)}catch(r){gb(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Xe.T=t}};pe.unstable_useCacheRefresh=function(){return Xe.H.useCacheRefresh()};pe.use=function(e){return Xe.H.use(e)};pe.useActionState=function(e,t,a){return Xe.H.useActionState(e,t,a)};pe.useCallback=function(e,t){return Xe.H.useCallback(e,t)};pe.useContext=function(e){return Xe.H.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e,t){return Xe.H.useDeferredValue(e,t)};pe.useEffect=function(e,t){return Xe.H.useEffect(e,t)};pe.useEffectEvent=function(e){return Xe.H.useEffectEvent(e)};pe.useId=function(){return Xe.H.useId()};pe.useImperativeHandle=function(e,t,a){return Xe.H.useImperativeHandle(e,t,a)};pe.useInsertionEffect=function(e,t){return Xe.H.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Xe.H.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Xe.H.useMemo(e,t)};pe.useOptimistic=function(e,t){return Xe.H.useOptimistic(e,t)};pe.useReducer=function(e,t,a){return Xe.H.useReducer(e,t,a)};pe.useRef=function(e){return Xe.H.useRef(e)};pe.useState=function(e){return Xe.H.useState(e)};pe.useSyncExternalStore=function(e,t,a){return Xe.H.useSyncExternalStore(e,t,a)};pe.useTransition=function(){return Xe.H.useTransition()};pe.version="19.2.8"});var J=aa((rz,Sb)=>{"use strict";Sb.exports=Cb()});var _b=aa(Xt=>{"use strict";var v5=J();function Lb(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Tn(){}var Gt={d:{f:Tn,r:function(){throw Error(Lb(522))},D:Tn,C:Tn,L:Tn,m:Tn,X:Tn,S:Tn,M:Tn},p:0,findDOMNode:null},C5=Symbol.for("react.portal");function S5(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C5,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var ss=v5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ld(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Gt;Xt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Lb(299));return S5(e,t,null,a)};Xt.flushSync=function(e){var t=ss.T,a=Gt.p;try{if(ss.T=null,Gt.p=2,e)return e()}finally{ss.T=t,Gt.p=a,Gt.d.f()}};Xt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Gt.d.C(e,t))};Xt.prefetchDNS=function(e){typeof e=="string"&&Gt.d.D(e)};Xt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=Ld(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Gt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Gt.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Xt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Ld(t.as,t.crossOrigin);Gt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Gt.d.M(e)};Xt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=Ld(a,t.crossOrigin);Gt.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Xt.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Ld(t.as,t.crossOrigin);Gt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Gt.d.m(e)};Xt.requestFormReset=function(e){Gt.d.r(e)};Xt.unstable_batchedUpdates=function(e,t){return e(t)};Xt.useFormState=function(e,t,a){return ss.H.useFormState(e,t,a)};Xt.useFormStatus=function(){return ss.H.useHostTransitionStatus()};Xt.version="19.2.8"});var _o=aa((iz,Ib)=>{"use strict";function kb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kb)}catch(e){console.error(e)}}kb(),Ib.exports=_b()});var Hv=aa(Wc=>{"use strict";var bt=cb(),J0=J(),L5=_o();function G(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ey(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zs(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ty(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ay(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mb(e){if(Zs(e)!==e)throw Error(G(188))}function _5(e){var t=e.alternate;if(!t){if(t=Zs(e),t===null)throw Error(G(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Mb(n),e;if(r===o)return Mb(n),t;r=r.sibling}throw Error(G(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(G(189))}}if(a.alternate!==o)throw Error(G(190))}if(a.tag!==3)throw Error(G(188));return a.stateNode.current===a?e:t}function oy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=oy(e),t!==null)return t;e=e.sibling}return null}var Ze=Object.assign,k5=Symbol.for("react.element"),_d=Symbol.for("react.transitional.element"),hs=Symbol.for("react.portal"),Vl=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),Lm=Symbol.for("react.profiler"),ry=Symbol.for("react.consumer"),tn=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),km=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),Im=Symbol.for("react.activity"),I5=Symbol.for("react.memo_cache_sentinel"),Nb=Symbol.iterator;function us(e){return e===null||typeof e!="object"?null:(e=Nb&&e[Nb]||e["@@iterator"],typeof e=="function"?e:null)}var M5=Symbol.for("react.client.reference");function Mm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===M5?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vl:return"Fragment";case Lm:return"Profiler";case ny:return"StrictMode";case _m:return"Suspense";case km:return"SuspenseList";case Im:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case hs:return"Portal";case tn:return e.displayName||"Context";case ry:return(e._context.displayName||"Context")+".Consumer";case yg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wg:return t=e.displayName||null,t!==null?t:Mm(e.type)||"Memo";case An:t=e._payload,e=e._init;try{return Mm(e(t))}catch{}}return null}var xs=Array.isArray,le=J0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne=L5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pr={pending:!1,data:null,method:null,action:null},Nm=[],Gl=-1;function Eo(e){return{current:e}}function Ct(e){0>Gl||(e.current=Nm[Gl],Nm[Gl]=null,Gl--)}function Fe(e,t){Gl++,Nm[Gl]=e.current,e.current=t}var No=Eo(null),Ds=Eo(null),Vn=Eo(null),nc=Eo(null);function rc(e,t){switch(Fe(Vn,t),Fe(Ds,e),Fe(No,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?P0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=P0(t),e=_v(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ct(No),Fe(No,e)}function si(){Ct(No),Ct(Ds),Ct(Vn)}function Em(e){e.memoizedState!==null&&Fe(nc,e);var t=No.current,a=_v(t,e.type);t!==a&&(Fe(Ds,e),Fe(No,a))}function lc(e){Ds.current===e&&(Ct(No),Ct(Ds)),nc.current===e&&(Ct(nc),Xs._currentValue=Pr)}var Xp,Eb;function Ar(e){if(Xp===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xp=t&&t[1]||"",Eb=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xp+e+Eb}var Yp=!1;function jp(e,t){if(!e||Yp)return"";Yp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),u=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=n);break}}}finally{Yp=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ar(a):""}function N5(e,t){switch(e.tag){case 26:case 27:case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return e.child!==t&&t!==null?Ar("Suspense Fallback"):Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 15:return jp(e.type,!1);case 11:return jp(e.type.render,!1);case 1:return jp(e.type,!0);case 31:return Ar("Activity");default:return""}}function Tb(e){try{var t="",a=null;do t+=N5(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tm=Object.prototype.hasOwnProperty,vg=bt.unstable_scheduleCallback,Zp=bt.unstable_cancelCallback,E5=bt.unstable_shouldYield,T5=bt.unstable_requestPaint,Ca=bt.unstable_now,A5=bt.unstable_getCurrentPriorityLevel,ly=bt.unstable_ImmediatePriority,iy=bt.unstable_UserBlockingPriority,ic=bt.unstable_NormalPriority,R5=bt.unstable_LowPriority,sy=bt.unstable_IdlePriority,D5=bt.log,z5=bt.unstable_setDisableYieldValue,Ws=null,Sa=null;function Bn(e){if(typeof D5=="function"&&z5(e),Sa&&typeof Sa.setStrictMode=="function")try{Sa.setStrictMode(Ws,e)}catch{}}var La=Math.clz32?Math.clz32:B5,P5=Math.log,O5=Math.LN2;function B5(e){return e>>>=0,e===0?32:31-(P5(e)/O5|0)|0}var kd=256,Id=262144,Md=4194304;function Rr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rc(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=Rr(o):(l&=i,l!==0?n=Rr(l):a||(a=i&~e,a!==0&&(n=Rr(a))))):(i=o&~r,i!==0?n=Rr(i):l!==0?n=Rr(l):a||(a=o&~e,a!==0&&(n=Rr(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Ks(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function H5(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(){var e=Md;return Md<<=1,(Md&62914560)===0&&(Md=4194304),e}function Wp(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $s(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function U5(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=l&~a;0<a;){var d=31-La(a),f=1<<d;i[d]=0,s[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var p=c[d];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&dy(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function dy(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-La(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function cy(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-La(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function fy(e,t){var a=t&-t;return a=(a&42)!==0?1:Cg(a),(a&(e.suspendedLanes|t))!==0?0:a}function Cg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function py(){var e=Ne.p;return e!==0?e:(e=window.event,e===void 0?32:Pv(e.type))}function Ab(e,t){var a=Ne.p;try{return Ne.p=e,t()}finally{Ne.p=a}}var ar=Math.random().toString(36).slice(2),Et="__reactFiber$"+ar,sa="__reactProps$"+ar,yi="__reactContainer$"+ar,Am="__reactEvents$"+ar,F5="__reactListeners$"+ar,q5="__reactHandles$"+ar,Rb="__reactResources$"+ar,Qs="__reactMarker$"+ar;function Lg(e){delete e[Et],delete e[sa],delete e[Am],delete e[F5],delete e[q5]}function Xl(e){var t=e[Et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yi]||a[Et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=F0(e);e!==null;){if(a=e[Et])return a;e=F0(e)}return t}e=a,a=e.parentNode}return null}function wi(e){if(e=e[Et]||e[yi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(G(33))}function ti(e){var t=e[Rb];return t||(t=e[Rb]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Qs]=!0}var my=new Set,gy={};function Yr(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(gy[e]=t,e=0;e<t.length;e++)my.add(t[e])}var V5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Db={},zb={};function G5(e){return Tm.call(zb,e)?!0:Tm.call(Db,e)?!1:V5.test(e)?zb[e]=!0:(Db[e]=!0,!1)}function Vd(e,t,a){if(G5(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Nd(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Zo(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ua(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X5(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rm(e){if(!e._valueTracker){var t=hy(e)?"checked":"value";e._valueTracker=X5(e,t,""+e[t])}}function xy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=hy(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function sc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Y5=/[\n"\\]/g;function Va(e){return e.replace(Y5,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Dm(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ua(t)):e.value!==""+Ua(t)&&(e.value=""+Ua(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?zm(e,l,Ua(t)):a!=null?zm(e,l,Ua(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Ua(i):e.removeAttribute("name")}function by(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Rm(e);return}a=a!=null?""+Ua(a):"",t=t!=null?""+Ua(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Rm(e)}function zm(e,t,a){t==="number"&&sc(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ua(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function yy(e,t,a){if(t!=null&&(t=""+Ua(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ua(a):""}function wy(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(G(92));if(xs(o)){if(1<o.length)throw Error(G(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ua(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Rm(e)}function di(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var j5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pb(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||j5.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function vy(e,t,a){if(t!=null&&typeof t!="object")throw Error(G(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Pb(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Pb(e,r,t[r])}function _g(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gd(e){return W5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function an(){}var Pm=null;function kg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,oi=null;function Ob(e){var t=wi(e);if(t&&(e=t.stateNode)){var a=e[sa]||null;e:switch(e=t.stateNode,t.type){case"input":if(Dm(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Va(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[sa]||null;if(!n)throw Error(G(90));Dm(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&xy(o)}break e;case"textarea":yy(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ai(e,!!a.multiple,t,!1)}}}var Kp=!1;function Cy(e,t,a){if(Kp)return e(t,a);Kp=!0;try{var o=e(t);return o}finally{if(Kp=!1,(Yl!==null||oi!==null)&&(Xc(),Yl&&(t=Yl,e=oi,oi=Yl=null,Ob(t),e)))for(t=0;t<e.length;t++)Ob(e[t])}}function zs(e,t){var a=e.stateNode;if(a===null)return null;var o=a[sa]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(G(231,t,typeof a));return a}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Om=!1;if(sn)try{Bl={},Object.defineProperty(Bl,"passive",{get:function(){Om=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{Om=!1}var Bl,Hn=null,Ig=null,Xd=null;function Sy(){if(Xd)return Xd;var e,t=Ig,a=t.length,o,n="value"in Hn?Hn.value:Hn.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return Xd=n.slice(e,1<o?1-o:void 0)}function Yd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ed(){return!0}function Bb(){return!1}function ua(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ed:Bb,this.isPropagationStopped=Bb,this}return Ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ed)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ed)},persist:function(){},isPersistent:Ed}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=ua(jr),Js=Ze({},jr,{view:0,detail:0}),K5=ua(Js),$p,Qp,ds,zc=Ze({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ds&&(ds&&e.type==="mousemove"?($p=e.screenX-ds.screenX,Qp=e.screenY-ds.screenY):Qp=$p=0,ds=e),$p)},movementY:function(e){return"movementY"in e?e.movementY:Qp}}),Hb=ua(zc),$5=Ze({},zc,{dataTransfer:0}),Q5=ua($5),J5=Ze({},Js,{relatedTarget:0}),Jp=ua(J5),eM=Ze({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),tM=ua(eM),aM=Ze({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oM=ua(aM),nM=Ze({},jr,{data:0}),Ub=ua(nM),rM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iM[e])?!!t[e]:!1}function Mg(){return sM}var uM=Ze({},Js,{key:function(e){if(e.key){var t=rM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mg,charCode:function(e){return e.type==="keypress"?Yd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dM=ua(uM),cM=Ze({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fb=ua(cM),fM=Ze({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mg}),pM=ua(fM),mM=Ze({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gM=ua(mM),hM=Ze({},zc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xM=ua(hM),bM=Ze({},jr,{newState:0,oldState:0}),yM=ua(bM),wM=[9,13,27,32],Ng=sn&&"CompositionEvent"in window,vs=null;sn&&"documentMode"in document&&(vs=document.documentMode);var vM=sn&&"TextEvent"in window&&!vs,Ly=sn&&(!Ng||vs&&8<vs&&11>=vs),qb=" ",Vb=!1;function _y(e,t){switch(e){case"keyup":return wM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ky(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function CM(e,t){switch(e){case"compositionend":return ky(t);case"keypress":return t.which!==32?null:(Vb=!0,qb);case"textInput":return e=t.data,e===qb&&Vb?null:e;default:return null}}function SM(e,t){if(jl)return e==="compositionend"||!Ng&&_y(e,t)?(e=Sy(),Xd=Ig=Hn=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ly&&t.locale!=="ko"?null:t.data;default:return null}}var LM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!LM[e.type]:t==="textarea"}function Iy(e,t,a,o){Yl?oi?oi.push(o):oi=[o]:Yl=o,t=kc(t,"onChange"),0<t.length&&(a=new Dc("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Cs=null,Ps=null;function _M(e){Cv(e,0)}function Pc(e){var t=bs(e);if(xy(t))return e}function Xb(e,t){if(e==="change")return t}var My=!1;sn&&(sn?(Ad="oninput"in document,Ad||(em=document.createElement("div"),em.setAttribute("oninput","return;"),Ad=typeof em.oninput=="function"),Td=Ad):Td=!1,My=Td&&(!document.documentMode||9<document.documentMode));var Td,Ad,em;function Yb(){Cs&&(Cs.detachEvent("onpropertychange",Ny),Ps=Cs=null)}function Ny(e){if(e.propertyName==="value"&&Pc(Ps)){var t=[];Iy(t,Ps,e,kg(e)),Cy(_M,t)}}function kM(e,t,a){e==="focusin"?(Yb(),Cs=t,Ps=a,Cs.attachEvent("onpropertychange",Ny)):e==="focusout"&&Yb()}function IM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pc(Ps)}function MM(e,t){if(e==="click")return Pc(t)}function NM(e,t){if(e==="input"||e==="change")return Pc(t)}function EM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ka=typeof Object.is=="function"?Object.is:EM;function Os(e,t){if(ka(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Tm.call(t,n)||!ka(e[n],t[n]))return!1}return!0}function jb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zb(e,t){var a=jb(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jb(a)}}function Ey(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ey(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ty(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=sc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=sc(e.document)}return t}function Eg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var TM=sn&&"documentMode"in document&&11>=document.documentMode,Zl=null,Bm=null,Ss=null,Hm=!1;function Wb(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hm||Zl==null||Zl!==sc(o)||(o=Zl,"selectionStart"in o&&Eg(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ss&&Os(Ss,o)||(Ss=o,o=kc(Bm,"onSelect"),0<o.length&&(t=new Dc("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Zl)))}function Tr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Wl={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},tm={},Ay={};sn&&(Ay=document.createElement("div").style,"AnimationEvent"in window||(delete Wl.animationend.animation,delete Wl.animationiteration.animation,delete Wl.animationstart.animation),"TransitionEvent"in window||delete Wl.transitionend.transition);function Zr(e){if(tm[e])return tm[e];if(!Wl[e])return e;var t=Wl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ay)return tm[e]=t[a];return e}var Ry=Zr("animationend"),Dy=Zr("animationiteration"),zy=Zr("animationstart"),AM=Zr("transitionrun"),RM=Zr("transitionstart"),DM=Zr("transitioncancel"),Py=Zr("transitionend"),Oy=new Map,Um="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Um.push("scrollEnd");function so(e,t){Oy.set(e,t),Yr(t,[e])}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ha=[],Kl=0,Tg=0;function Oc(){for(var e=Kl,t=Tg=Kl=0;t<e;){var a=Ha[t];Ha[t++]=null;var o=Ha[t];Ha[t++]=null;var n=Ha[t];Ha[t++]=null;var r=Ha[t];if(Ha[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&By(a,n,r)}}function Bc(e,t,a,o){Ha[Kl++]=e,Ha[Kl++]=t,Ha[Kl++]=a,Ha[Kl++]=o,Tg|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ag(e,t,a,o){return Bc(e,t,a,o),dc(e)}function Wr(e,t){return Bc(e,null,null,t),dc(e)}function By(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-La(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function dc(e){if(50<As)throw As=0,ig=null,Error(G(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $l={};function zM(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wa(e,t,a,o){return new zM(e,t,a,o)}function Rg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nn(e,t){var a=e.alternate;return a===null?(a=wa(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hy(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jd(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Rg(e)&&(l=1);else if(typeof e=="string")l=B4(e,a,No.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Im:return e=wa(31,a,t,n),e.elementType=Im,e.lanes=r,e;case Vl:return Or(a.children,n,r,t);case ny:l=8,n|=24;break;case Lm:return e=wa(12,a,t,n|2),e.elementType=Lm,e.lanes=r,e;case _m:return e=wa(13,a,t,n),e.elementType=_m,e.lanes=r,e;case km:return e=wa(19,a,t,n),e.elementType=km,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tn:l=10;break e;case ry:l=9;break e;case yg:l=11;break e;case wg:l=14;break e;case An:l=16,o=null;break e}l=29,a=Error(G(130,e===null?"null":typeof e,"")),o=null}return t=wa(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Or(e,t,a,o){return e=wa(7,e,o,t),e.lanes=a,e}function am(e,t,a){return e=wa(6,e,null,t),e.lanes=a,e}function Uy(e){var t=wa(18,null,null,0);return t.stateNode=e,t}function om(e,t,a){return t=wa(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kb=new WeakMap;function Ga(e,t){if(typeof e=="object"&&e!==null){var a=Kb.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Tb(t)},Kb.set(e,t),t)}return{value:e,source:t,stack:Tb(t)}}var Ql=[],Jl=0,cc=null,Bs=0,Fa=[],qa=0,Qn=null,ko=1,Io="";function Jo(e,t){Ql[Jl++]=Bs,Ql[Jl++]=cc,cc=e,Bs=t}function Fy(e,t,a){Fa[qa++]=ko,Fa[qa++]=Io,Fa[qa++]=Qn,Qn=e;var o=ko;e=Io;var n=32-La(o)-1;o&=~(1<<n),a+=1;var r=32-La(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,ko=1<<32-La(t)+n|a<<n|o,Io=r+e}else ko=1<<r|a<<n|o,Io=e}function Dg(e){e.return!==null&&(Jo(e,1),Fy(e,1,0))}function zg(e){for(;e===cc;)cc=Ql[--Jl],Ql[Jl]=null,Bs=Ql[--Jl],Ql[Jl]=null;for(;e===Qn;)Qn=Fa[--qa],Fa[qa]=null,Io=Fa[--qa],Fa[qa]=null,ko=Fa[--qa],Fa[qa]=null}function qy(e,t){Fa[qa++]=ko,Fa[qa++]=Io,Fa[qa++]=Qn,ko=t.id,Io=t.overflow,Qn=e}var Tt=null,je=null,ke=!1,Gn=null,Xa=!1,Fm=Error(G(519));function Jn(e){var t=Error(G(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hs(Ga(t,e)),Fm}function $b(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Et]=e,t[sa]=o,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<Vs.length;a++)ve(Vs[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),by(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),wy(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Lv(t.textContent,a)?(o.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),o.onScroll!=null&&ve("scroll",t),o.onScrollEnd!=null&&ve("scrollend",t),o.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Jn(e,!0)}function Qb(e){for(Tt=e.return;Tt;)switch(Tt.tag){case 5:case 31:case 13:Xa=!1;return;case 27:case 3:Xa=!0;return;default:Tt=Tt.return}}function Hl(e){if(e!==Tt)return!1;if(!ke)return Qb(e),ke=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fg(e.type,e.memoizedProps)),a=!a),a&&je&&Jn(e),Qb(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));je=U0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));je=U0(e)}else t===27?(t=je,or(e.type)?(e=hg,hg=null,je=e):je=t):je=Tt?ja(e.stateNode.nextSibling):null;return!0}function Fr(){je=Tt=null,ke=!1}function nm(){var e=Gn;return e!==null&&(la===null?la=e:la.push.apply(la,e),Gn=null),e}function Hs(e){Gn===null?Gn=[e]:Gn.push(e)}var qm=Eo(null),Kr=null,on=null;function Dn(e,t,a){Fe(qm,t._currentValue),t._currentValue=a}function rn(e){e._currentValue=qm.current,Ct(qm)}function Vm(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Gm(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Vm(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(G(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Vm(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function vi(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(G(387));if(l=l.memoizedProps,l!==null){var i=n.type;ka(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===nc.current){if(l=n.alternate,l===null)throw Error(G(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Xs):e=[Xs])}n=n.return}e!==null&&Gm(t,e,a,o),t.flags|=262144}function fc(e){for(e=e.firstContext;e!==null;){if(!ka(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qr(e){Kr=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function At(e){return Vy(Kr,e)}function Rd(e,t){return Kr===null&&qr(e),Vy(e,t)}function Vy(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},on===null){if(e===null)throw Error(G(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return a}var PM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},OM=bt.unstable_scheduleCallback,BM=bt.unstable_NormalPriority,pt={$$typeof:tn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pg(){return{controller:new PM,data:new Map,refCount:0}}function eu(e){e.refCount--,e.refCount===0&&OM(BM,function(){e.controller.abort()})}var Ls=null,Xm=0,ci=0,ni=null;function HM(e,t){if(Ls===null){var a=Ls=[];Xm=0,ci=ih(),ni={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xm++,t.then(Jb,Jb),t}function Jb(){if(--Xm===0&&Ls!==null){ni!==null&&(ni.status="fulfilled");var e=Ls;Ls=null,ci=0,ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function UM(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var e0=le.S;le.S=function(e,t){ov=Ca(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&HM(e,t),e0!==null&&e0(e,t)};var Br=Eo(null);function Og(){var e=Br.current;return e!==null?e:Be.pooledCache}function Zd(e,t){t===null?Fe(Br,Br.current):Fe(Br,t.pool)}function Gy(){var e=Og();return e===null?null:{parent:pt._currentValue,pool:e}}var Ci=Error(G(460)),Bg=Error(G(474)),Hc=Error(G(542)),pc={then:function(){}};function t0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xy(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(an,an),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,o0(e),e;default:if(typeof t.status=="string")t.then(an,an);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(G(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,o0(e),e}throw Hr=t,Ci}}function Dr(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hr=a,Ci):a}}var Hr=null;function a0(){if(Hr===null)throw Error(G(459));var e=Hr;return Hr=null,e}function o0(e){if(e===Ci||e===Hc)throw Error(G(483))}var ri=null,Us=0;function Dd(e){var t=Us;return Us+=1,ri===null&&(ri=[]),Xy(ri,e,t)}function cs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zd(e,t){throw t.$$typeof===k5?Error(G(525)):(e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yy(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=nn(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function i(h,x,m,b){return x===null||x.tag!==6?(x=am(m,h.mode,b),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,b){var S=m.type;return S===Vl?d(h,x,m.props.children,b,m.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===An&&Dr(S)===x.type)?(x=n(x,m.props),cs(x,m),x.return=h,x):(x=jd(m.type,m.key,m.props,null,h.mode,b),cs(x,m),x.return=h,x)}function u(h,x,m,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=om(m,h.mode,b),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function d(h,x,m,b,S){return x===null||x.tag!==7?(x=Or(m,h.mode,b,S),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=am(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _d:return m=jd(x.type,x.key,x.props,null,h.mode,m),cs(m,x),m.return=h,m;case hs:return x=om(x,h.mode,m),x.return=h,x;case An:return x=Dr(x),f(h,x,m)}if(xs(x)||us(x))return x=Or(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,Dd(x),m);if(x.$$typeof===tn)return f(h,Rd(h,x),m);zd(h,x)}return null}function c(h,x,m,b){var S=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return S!==null?null:i(h,x,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _d:return m.key===S?s(h,x,m,b):null;case hs:return m.key===S?u(h,x,m,b):null;case An:return m=Dr(m),c(h,x,m,b)}if(xs(m)||us(m))return S!==null?null:d(h,x,m,b,null);if(typeof m.then=="function")return c(h,x,Dd(m),b);if(m.$$typeof===tn)return c(h,x,Rd(h,m),b);zd(h,m)}return null}function p(h,x,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return h=h.get(m)||null,i(x,h,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _d:return h=h.get(b.key===null?m:b.key)||null,s(x,h,b,S);case hs:return h=h.get(b.key===null?m:b.key)||null,u(x,h,b,S);case An:return b=Dr(b),p(h,x,m,b,S)}if(xs(b)||us(b))return h=h.get(m)||null,d(x,h,b,S,null);if(typeof b.then=="function")return p(h,x,m,Dd(b),S);if(b.$$typeof===tn)return p(h,x,m,Rd(x,b),S);zd(x,b)}return null}function g(h,x,m,b){for(var S=null,C=null,v=x,_=x=0,k=null;v!==null&&_<m.length;_++){v.index>_?(k=v,v=null):k=v.sibling;var T=c(h,v,m[_],b);if(T===null){v===null&&(v=k);break}e&&v&&T.alternate===null&&t(h,v),x=r(T,x,_),C===null?S=T:C.sibling=T,C=T,v=k}if(_===m.length)return a(h,v),ke&&Jo(h,_),S;if(v===null){for(;_<m.length;_++)v=f(h,m[_],b),v!==null&&(x=r(v,x,_),C===null?S=v:C.sibling=v,C=v);return ke&&Jo(h,_),S}for(v=o(v);_<m.length;_++)k=p(v,h,_,m[_],b),k!==null&&(e&&k.alternate!==null&&v.delete(k.key===null?_:k.key),x=r(k,x,_),C===null?S=k:C.sibling=k,C=k);return e&&v.forEach(function(N){return t(h,N)}),ke&&Jo(h,_),S}function y(h,x,m,b){if(m==null)throw Error(G(151));for(var S=null,C=null,v=x,_=x=0,k=null,T=m.next();v!==null&&!T.done;_++,T=m.next()){v.index>_?(k=v,v=null):k=v.sibling;var N=c(h,v,T.value,b);if(N===null){v===null&&(v=k);break}e&&v&&N.alternate===null&&t(h,v),x=r(N,x,_),C===null?S=N:C.sibling=N,C=N,v=k}if(T.done)return a(h,v),ke&&Jo(h,_),S;if(v===null){for(;!T.done;_++,T=m.next())T=f(h,T.value,b),T!==null&&(x=r(T,x,_),C===null?S=T:C.sibling=T,C=T);return ke&&Jo(h,_),S}for(v=o(v);!T.done;_++,T=m.next())T=p(v,h,_,T.value,b),T!==null&&(e&&T.alternate!==null&&v.delete(T.key===null?_:T.key),x=r(T,x,_),C===null?S=T:C.sibling=T,C=T);return e&&v.forEach(function(U){return t(h,U)}),ke&&Jo(h,_),S}function w(h,x,m,b){if(typeof m=="object"&&m!==null&&m.type===Vl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case _d:e:{for(var S=m.key;x!==null;){if(x.key===S){if(S=m.type,S===Vl){if(x.tag===7){a(h,x.sibling),b=n(x,m.props.children),b.return=h,h=b;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===An&&Dr(S)===x.type){a(h,x.sibling),b=n(x,m.props),cs(b,m),b.return=h,h=b;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Vl?(b=Or(m.props.children,h.mode,b,m.key),b.return=h,h=b):(b=jd(m.type,m.key,m.props,null,h.mode,b),cs(b,m),b.return=h,h=b)}return l(h);case hs:e:{for(S=m.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),b=n(x,m.children||[]),b.return=h,h=b;break e}else{a(h,x);break}else t(h,x);x=x.sibling}b=om(m,h.mode,b),b.return=h,h=b}return l(h);case An:return m=Dr(m),w(h,x,m,b)}if(xs(m))return g(h,x,m,b);if(us(m)){if(S=us(m),typeof S!="function")throw Error(G(150));return m=S.call(m),y(h,x,m,b)}if(typeof m.then=="function")return w(h,x,Dd(m),b);if(m.$$typeof===tn)return w(h,x,Rd(h,m),b);zd(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),b=n(x,m),b.return=h,h=b):(a(h,x),b=am(m,h.mode,b),b.return=h,h=b),l(h)):a(h,x)}return function(h,x,m,b){try{Us=0;var S=w(h,x,m,b);return ri=null,S}catch(v){if(v===Ci||v===Hc)throw v;var C=wa(29,v,null,h.mode);return C.lanes=b,C.return=h,C}}}var Vr=Yy(!0),jy=Yy(!1),Rn=!1;function Hg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Me&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=dc(e),By(e,null,a),t}return Bc(e,o,t,a),dc(e)}function _s(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,cy(e,a)}}function rm(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jm=!1;function ks(){if(jm){var e=ni;if(e!==null)throw e}}function Is(e,t,a,o){jm=!1;var n=e.updateQueue;Rn=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;l=0,d=u=s=null,i=r;do{var c=i.lane&-536870913,p=c!==i.lane;if(p?(Le&c)===c:(o&c)===c){c!==0&&c===ci&&(jm=!0),d!==null&&(d=d.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,y=i;c=t;var w=a;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(w,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,c=typeof g=="function"?g.call(w,f,c):g,c==null)break e;f=Ze({},f,c);break e;case 2:Rn=!0}}c=i.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=p,s=f):d=d.next=p,l|=c;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);d===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=d,r===null&&(n.shared.lanes=0),tr|=l,e.lanes=l,e.memoizedState=f}}function Zy(e,t){if(typeof e!="function")throw Error(G(191,e));e.call(t)}function Wy(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zy(a[e],t)}var fi=Eo(null),mc=Eo(0);function n0(e,t){e=fn,Fe(mc,e),Fe(fi,t),fn=e|t.baseLanes}function Zm(){Fe(mc,fn),Fe(fi,fi.current)}function Ug(){fn=mc.current,Ct(fi),Ct(mc)}var Ia=Eo(null),Ya=null;function zn(e){var t=e.alternate;Fe(st,st.current&1),Fe(Ia,e),Ya===null&&(t===null||fi.current!==null||t.memoizedState!==null)&&(Ya=e)}function Wm(e){Fe(st,st.current),Fe(Ia,e),Ya===null&&(Ya=e)}function Ky(e){e.tag===22?(Fe(st,st.current),Fe(Ia,e),Ya===null&&(Ya=e)):Pn(e)}function Pn(){Fe(st,st.current),Fe(Ia,Ia.current)}function ya(e){Ct(Ia),Ya===e&&(Ya=null),Ct(st)}var st=Eo(0);function gc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mg(a)||gg(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var un=0,ge=null,Pe=null,ct=null,hc=!1,li=!1,Gr=!1,xc=0,Fs=0,ii=null,FM=0;function ot(){throw Error(G(321))}function Fg(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ka(e[a],t[a]))return!1;return!0}function qg(e,t,a,o,n,r){return un=r,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?Iw:Jg,Gr=!1,r=a(o,n),Gr=!1,li&&(r=Qy(t,a,o,n)),$y(e),r}function $y(e){le.H=qs;var t=Pe!==null&&Pe.next!==null;if(un=0,ct=Pe=ge=null,hc=!1,Fs=0,ii=null,t)throw Error(G(300));e===null||mt||(e=e.dependencies,e!==null&&fc(e)&&(mt=!0))}function Qy(e,t,a,o){ge=e;var n=0;do{if(li&&(ii=null),Fs=0,li=!1,25<=n)throw Error(G(301));if(n+=1,ct=Pe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}le.H=Mw,r=t(a,o)}while(li);return r}function qM(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?tu(t):t,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ge.flags|=1024),t}function Vg(){var e=xc!==0;return xc=0,e}function Gg(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xg(e){if(hc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hc=!1}un=0,ct=Pe=ge=null,li=!1,Fs=xc=0,ii=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ge.memoizedState=ct=e:ct=ct.next=e,ct}function ut(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=ct===null?ge.memoizedState:ct.next;if(t!==null)ct=t,Pe=e;else{if(e===null)throw ge.alternate===null?Error(G(467)):Error(G(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ct===null?ge.memoizedState=ct=e:ct=ct.next=e}return ct}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tu(e){var t=Fs;return Fs+=1,ii===null&&(ii=[]),e=Xy(ii,e,t),t=ge,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?Iw:Jg),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tu(e);if(e.$$typeof===tn)return At(e)}throw Error(G(438,String(e)))}function Yg(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Uc(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=I5;return t.index++,a}function dn(e,t){return typeof t=="function"?t(e):t}function Wd(e){var t=ut();return jg(t,Pe,e)}function jg(e,t,a){var o=e.queue;if(o===null)throw Error(G(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Le&f)===f:(un&f)===f){var c=u.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ci&&(d=!0);else if((un&c)===c){u=u.next,c===ci&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=f,l=r):s=s.next=f,ge.lanes|=c,tr|=c;f=u.action,Gr&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else c={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=c,l=r):s=s.next=c,ge.lanes|=f,tr|=f;u=u.next}while(u!==null&&u!==t);if(s===null?l=r:s.next=i,!ka(r,e.memoizedState)&&(mt=!0,d&&(a=ni,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function lm(e){var t=ut(),a=t.queue;if(a===null)throw Error(G(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);ka(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function Jy(e,t,a){var o=ge,n=ut(),r=ke;if(r){if(a===void 0)throw Error(G(407));a=a()}else a=t();var l=!ka((Pe||n).memoizedState,a);if(l&&(n.memoizedState=a,mt=!0),n=n.queue,Zg(aw.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,pi(9,{destroy:void 0},tw.bind(null,o,n,a,t),null),Be===null)throw Error(G(349));r||(un&127)!==0||ew(o,t,a)}return a}function ew(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=Uc(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function tw(e,t,a,o){t.value=a,t.getSnapshot=o,ow(t)&&nw(e)}function aw(e,t,a){return a(function(){ow(t)&&nw(e)})}function ow(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ka(e,a)}catch{return!0}}function nw(e){var t=Wr(e,2);t!==null&&ia(t,e,2)}function Km(e){var t=Yt();if(typeof e=="function"){var a=e;if(e=a(),Gr){Bn(!0);try{a()}finally{Bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t}function rw(e,t,a,o){return e.baseState=a,jg(e,Pe,typeof o=="function"?o:dn)}function VM(e,t,a,o,n){if(Vc(e))throw Error(G(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};le.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,lw(t,r)):(r.next=a.next,t.pending=a.next=r)}}function lw(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=le.T,l={};le.T=l;try{var i=a(n,o),s=le.S;s!==null&&s(l,i),r0(e,t,i)}catch(u){$m(e,t,u)}finally{r!==null&&l.types!==null&&(r.types=l.types),le.T=r}}else try{r=a(n,o),r0(e,t,r)}catch(u){$m(e,t,u)}}function r0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){l0(e,t,o)},function(o){return $m(e,t,o)}):l0(e,t,a)}function l0(e,t,a){t.status="fulfilled",t.value=a,iw(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,lw(e,a)))}function $m(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,iw(t),t=t.next;while(t!==o)}e.action=null}function iw(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sw(e,t){return t}function i0(e,t){if(ke){var a=Be.formState;if(a!==null){e:{var o=ge;if(ke){if(je){t:{for(var n=je,r=Xa;n.nodeType!==8;){if(!r){n=null;break t}if(n=ja(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){je=ja(n.nextSibling),o=n.data==="F!";break e}}Jn(o)}o=!1}o&&(t=a[0])}}return a=Yt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sw,lastRenderedState:t},a.queue=o,a=Lw.bind(null,ge,o),o.dispatch=a,o=Km(!1),r=Qg.bind(null,ge,!1,o.queue),o=Yt(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=VM.bind(null,ge,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function s0(e){var t=ut();return uw(t,Pe,e)}function uw(e,t,a){if(t=jg(e,t,sw)[0],e=Wd(dn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=tu(t)}catch(l){throw l===Ci?Hc:l}else o=t;t=ut();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ge.flags|=2048,pi(9,{destroy:void 0},GM.bind(null,n,a),null)),[o,r,e]}function GM(e,t){e.action=t}function u0(e){var t=ut(),a=Pe;if(a!==null)return uw(t,a,e);ut(),t=t.memoizedState,a=ut();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function pi(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ge.updateQueue,t===null&&(t=Uc(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function dw(){return ut().memoizedState}function Kd(e,t,a,o){var n=Yt();ge.flags|=e,n.memoizedState=pi(1|t,{destroy:void 0},a,o===void 0?null:o)}function qc(e,t,a,o){var n=ut();o=o===void 0?null:o;var r=n.memoizedState.inst;Pe!==null&&o!==null&&Fg(o,Pe.memoizedState.deps)?n.memoizedState=pi(t,r,a,o):(ge.flags|=e,n.memoizedState=pi(1|t,r,a,o))}function d0(e,t){Kd(8390656,8,e,t)}function Zg(e,t){qc(2048,8,e,t)}function XM(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=Uc(),ge.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function cw(e){var t=ut().memoizedState;return XM({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(G(440));return t.impl.apply(void 0,arguments)}}function fw(e,t){return qc(4,2,e,t)}function pw(e,t){return qc(4,4,e,t)}function mw(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gw(e,t,a){a=a!=null?a.concat([e]):null,qc(4,4,mw.bind(null,t,e),a)}function Wg(){}function hw(e,t){var a=ut();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Fg(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function xw(e,t){var a=ut();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Fg(t,o[1]))return o[0];if(o=e(),Gr){Bn(!0);try{e()}finally{Bn(!1)}}return a.memoizedState=[o,t],o}function Kg(e,t,a){return a===void 0||(un&1073741824)!==0&&(Le&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=rv(),ge.lanes|=e,tr|=e,a)}function bw(e,t,a,o){return ka(a,t)?a:fi.current!==null?(e=Kg(e,a,o),ka(e,t)||(mt=!0),e):(un&42)===0||(un&1073741824)!==0&&(Le&261930)===0?(mt=!0,e.memoizedState=a):(e=rv(),ge.lanes|=e,tr|=e,t)}function yw(e,t,a,o,n){var r=Ne.p;Ne.p=r!==0&&8>r?r:8;var l=le.T,i={};le.T=i,Qg(e,!1,t,a);try{var s=n(),u=le.S;if(u!==null&&u(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=UM(s,o);Ms(e,t,d,_a(e))}else Ms(e,t,o,_a(e))}catch(f){Ms(e,t,{then:function(){},status:"rejected",reason:f},_a())}finally{Ne.p=r,l!==null&&i.types!==null&&(l.types=i.types),le.T=l}}function YM(){}function Qm(e,t,a,o){if(e.tag!==5)throw Error(G(476));var n=ww(e).queue;yw(e,n,t,Pr,a===null?YM:function(){return vw(e),a(o)})}function ww(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Pr,baseState:Pr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:Pr},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vw(e){var t=ww(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},_a())}function $g(){return At(Xs)}function Cw(){return ut().memoizedState}function Sw(){return ut().memoizedState}function jM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=_a();e=Xn(a);var o=Yn(t,e,a);o!==null&&(ia(o,t,a),_s(o,t,a)),t={cache:Pg()},e.payload=t;return}t=t.return}}function ZM(e,t,a){var o=_a();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vc(e)?_w(t,a):(a=Ag(e,t,a,o),a!==null&&(ia(a,e,o),kw(a,t,o)))}function Lw(e,t,a){var o=_a();Ms(e,t,a,o)}function Ms(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))_w(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,ka(i,l))return Bc(e,t,n,0),Be===null&&Oc(),!1}catch{}if(a=Ag(e,t,n,o),a!==null)return ia(a,e,o),kw(a,t,o),!0}return!1}function Qg(e,t,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vc(e)){if(t)throw Error(G(479))}else t=Ag(e,a,o,2),t!==null&&ia(t,e,2)}function Vc(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function _w(e,t){li=hc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function kw(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,cy(e,a)}}var qs={readContext:At,use:Fc,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};qs.useEffectEvent=ot;var Iw={readContext:At,use:Fc,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:d0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Kd(4194308,4,mw.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Kd(4194308,4,e,t)},useInsertionEffect:function(e,t){Kd(4,2,e,t)},useMemo:function(e,t){var a=Yt();t=t===void 0?null:t;var o=e();if(Gr){Bn(!0);try{e()}finally{Bn(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Yt();if(a!==void 0){var n=a(t);if(Gr){Bn(!0);try{a(t)}finally{Bn(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=ZM.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Km(e);var t=e.queue,a=Lw.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wg,useDeferredValue:function(e,t){var a=Yt();return Kg(a,e,t)},useTransition:function(){var e=Km(!1);return e=yw.bind(null,ge,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ge,n=Yt();if(ke){if(a===void 0)throw Error(G(407));a=a()}else{if(a=t(),Be===null)throw Error(G(349));(Le&127)!==0||ew(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,d0(aw.bind(null,o,r,e),[e]),o.flags|=2048,pi(9,{destroy:void 0},tw.bind(null,o,r,a,t),null),a},useId:function(){var e=Yt(),t=Be.identifierPrefix;if(ke){var a=Io,o=ko;a=(o&~(1<<32-La(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=xc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=FM++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$g,useFormState:i0,useActionState:i0,useOptimistic:function(e){var t=Yt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Qg.bind(null,ge,!0,a),a.dispatch=t,[e,t]},useMemoCache:Yg,useCacheRefresh:function(){return Yt().memoizedState=jM.bind(null,ge)},useEffectEvent:function(e){var t=Yt(),a={impl:e};return t.memoizedState=a,function(){if((Me&2)!==0)throw Error(G(440));return a.impl.apply(void 0,arguments)}}},Jg={readContext:At,use:Fc,useCallback:hw,useContext:At,useEffect:Zg,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:xw,useReducer:Wd,useRef:dw,useState:function(){return Wd(dn)},useDebugValue:Wg,useDeferredValue:function(e,t){var a=ut();return bw(a,Pe.memoizedState,e,t)},useTransition:function(){var e=Wd(dn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:tu(e),t]},useSyncExternalStore:Jy,useId:Cw,useHostTransitionStatus:$g,useFormState:s0,useActionState:s0,useOptimistic:function(e,t){var a=ut();return rw(a,Pe,e,t)},useMemoCache:Yg,useCacheRefresh:Sw};Jg.useEffectEvent=cw;var Mw={readContext:At,use:Fc,useCallback:hw,useContext:At,useEffect:Zg,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:xw,useReducer:lm,useRef:dw,useState:function(){return lm(dn)},useDebugValue:Wg,useDeferredValue:function(e,t){var a=ut();return Pe===null?Kg(a,e,t):bw(a,Pe.memoizedState,e,t)},useTransition:function(){var e=lm(dn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:tu(e),t]},useSyncExternalStore:Jy,useId:Cw,useHostTransitionStatus:$g,useFormState:u0,useActionState:u0,useOptimistic:function(e,t){var a=ut();return Pe!==null?rw(a,Pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yg,useCacheRefresh:Sw};Mw.useEffectEvent=cw;function im(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ze({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jm={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=_a(),n=Xn(o);n.payload=t,a!=null&&(n.callback=a),t=Yn(e,n,o),t!==null&&(ia(t,e,o),_s(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=_a(),n=Xn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Yn(e,n,o),t!==null&&(ia(t,e,o),_s(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=_a(),o=Xn(a);o.tag=2,t!=null&&(o.callback=t),t=Yn(e,o,a),t!==null&&(ia(t,e,a),_s(t,e,a))}};function c0(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!Os(a,o)||!Os(n,r):!0}function f0(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Jm.enqueueReplaceState(t,t.state,null)}function Xr(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ze({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Nw(e){uc(e)}function Ew(e){console.error(e)}function Tw(e){uc(e)}function bc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function p0(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function eg(e,t,a){return a=Xn(a),a.tag=3,a.payload={element:null},a.callback=function(){bc(e,t)},a}function Aw(e){return e=Xn(e),e.tag=3,e}function Rw(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){p0(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){p0(t,a,o),typeof n!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function WM(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&vi(t,a,n,!0),a=Ia.current,a!==null){switch(a.tag){case 31:case 13:return Ya===null?Sc():a.alternate===null&&nt===0&&(nt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===pc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),bm(e,o,n)),!1;case 22:return a.flags|=65536,o===pc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),bm(e,o,n)),!1}throw Error(G(435,a.tag))}return bm(e,o,n),Sc(),!1}if(ke)return t=Ia.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Fm&&(e=Error(G(422),{cause:o}),Hs(Ga(e,a)))):(o!==Fm&&(t=Error(G(423),{cause:o}),Hs(Ga(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Ga(o,a),n=eg(e.stateNode,o,n),rm(e,n),nt!==4&&(nt=2)),!1;var r=Error(G(520),{cause:o});if(r=Ga(r,a),Ts===null?Ts=[r]:Ts.push(r),nt!==4&&(nt=2),t===null)return!0;o=Ga(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=eg(a.stateNode,o,e),rm(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Aw(n),Rw(n,e,a,o),rm(a,n),!1}a=a.return}while(a!==null);return!1}var eh=Error(G(461)),mt=!1;function Nt(e,t,a,o){t.child=e===null?jy(t,null,a,o):Vr(t,e.child,a,o)}function m0(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return qr(t),o=qg(e,t,a,l,r,n),i=Vg(),e!==null&&!mt?(Gg(e,t,n),cn(e,t,n)):(ke&&i&&Dg(t),t.flags|=1,Nt(e,t,o,n),t.child)}function g0(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Rg(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Dw(e,t,r,o,n)):(e=jd(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!th(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(l,o)&&e.ref===t.ref)return cn(e,t,n)}return t.flags|=1,e=nn(r,o),e.ref=t.ref,e.return=t,t.child=e}function Dw(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(Os(r,o)&&e.ref===t.ref)if(mt=!1,t.pendingProps=o=r,th(e,n))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,cn(e,t,n)}return tg(e,t,a,o,n)}function zw(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return h0(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zd(t,r!==null?r.cachePool:null),r!==null?n0(t,r):Zm(),Ky(t);else return o=t.lanes=536870912,h0(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Zd(t,r.cachePool),n0(t,r),Pn(t),t.memoizedState=null):(e!==null&&Zd(t,null),Zm(),Pn(t));return Nt(e,t,n,a),t.child}function ys(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function h0(e,t,a,o,n){var r=Og();return r=r===null?null:{parent:pt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Zd(t,null),Zm(),Ky(t),e!==null&&vi(e,t,o,!0),t.childLanes=n,null}function $d(e,t){return t=yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function x0(e,t,a){return Vr(t,e.child,null,a),e=$d(t,t.pendingProps),e.flags|=2,ya(t),t.memoizedState=null,e}function KM(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ke){if(o.mode==="hidden")return e=$d(t,o),t.lanes=536870912,ys(null,e);if(Wm(t),(e=je)?(e=Iv(e,Xa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:ko,overflow:Io}:null,retryLane:536870912,hydrationErrors:null},a=Uy(e),a.return=t,t.child=a,Tt=t,je=null)):e=null,e===null)throw Jn(t);return t.lanes=536870912,null}return $d(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(Wm(t),n)if(t.flags&256)t.flags&=-257,t=x0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(G(558));else if(mt||vi(e,t,a,!1),n=(a&e.childLanes)!==0,mt||n){if(o=Be,o!==null&&(l=fy(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Wr(e,l),ia(o,e,l),eh;Sc(),t=x0(e,t,a)}else e=r.treeContext,je=ja(l.nextSibling),Tt=t,ke=!0,Gn=null,Xa=!1,e!==null&&qy(t,e),t=$d(t,o),t.flags|=4096;return t}return e=nn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qd(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(G(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function tg(e,t,a,o,n){return qr(t),a=qg(e,t,a,o,void 0,n),o=Vg(),e!==null&&!mt?(Gg(e,t,n),cn(e,t,n)):(ke&&o&&Dg(t),t.flags|=1,Nt(e,t,a,n),t.child)}function b0(e,t,a,o,n,r){return qr(t),t.updateQueue=null,a=Qy(t,o,a,n),$y(e),o=Vg(),e!==null&&!mt?(Gg(e,t,r),cn(e,t,r)):(ke&&o&&Dg(t),t.flags|=1,Nt(e,t,a,r),t.child)}function y0(e,t,a,o,n){if(qr(t),t.stateNode===null){var r=$l,l=a.contextType;typeof l=="object"&&l!==null&&(r=At(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jm,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Hg(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?At(l):$l,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(im(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Jm.enqueueReplaceState(r,r.state,null),Is(t,o,r,n),ks(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=Xr(a,i);r.props=s;var u=r.context,d=a.contextType;l=$l,typeof d=="object"&&d!==null&&(l=At(d));var f=a.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||u!==l)&&f0(t,r,o,l),Rn=!1;var c=t.memoizedState;r.state=c,Is(t,o,r,n),ks(),u=t.memoizedState,i||c!==u||Rn?(typeof f=="function"&&(im(t,a,f,o),u=t.memoizedState),(s=Rn||c0(t,a,s,o,c,u,l))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Ym(e,t),l=t.memoizedProps,d=Xr(a,l),r.props=d,f=t.pendingProps,c=r.context,u=a.contextType,s=$l,typeof u=="object"&&u!==null&&(s=At(u)),i=a.getDerivedStateFromProps,(u=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==f||c!==s)&&f0(t,r,o,s),Rn=!1,c=t.memoizedState,r.state=c,Is(t,o,r,n),ks();var p=t.memoizedState;l!==f||c!==p||Rn||e!==null&&e.dependencies!==null&&fc(e.dependencies)?(typeof i=="function"&&(im(t,a,i,o),p=t.memoizedState),(d=Rn||c0(t,a,d,o,c,p,s)||e!==null&&e.dependencies!==null&&fc(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=d):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,Qd(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Vr(t,e.child,null,n),t.child=Vr(t,null,a,n)):Nt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=cn(e,t,n),e}function w0(e,t,a,o){return Fr(),t.flags|=256,Nt(e,t,a,o),t.child}var sm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function um(e){return{baseLanes:e,cachePool:Gy()}}function dm(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=va),e}function Pw(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(ke){if(n?zn(t):Pn(t),(e=je)?(e=Iv(e,Xa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:ko,overflow:Io}:null,retryLane:536870912,hydrationErrors:null},a=Uy(e),a.return=t,t.child=a,Tt=t,je=null)):e=null,e===null)throw Jn(t);return gg(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(Pn(t),n=t.mode,i=yc({mode:"hidden",children:i},n),o=Or(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=um(a),o.childLanes=dm(e,l,a),t.memoizedState=sm,ys(null,o)):(zn(t),ag(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(zn(t),t.flags&=-257,t=cm(e,t,a)):t.memoizedState!==null?(Pn(t),t.child=e.child,t.flags|=128,t=null):(Pn(t),i=o.fallback,n=t.mode,o=yc({mode:"visible",children:o.children},n),i=Or(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Vr(t,e.child,null,a),o=t.child,o.memoizedState=um(a),o.childLanes=dm(e,l,a),t.memoizedState=sm,t=ys(null,o));else if(zn(t),gg(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var u=l.dgst;l=u,o=Error(G(419)),o.stack="",o.digest=l,Hs({value:o,source:null,stack:null}),t=cm(e,t,a)}else if(mt||vi(e,t,a,!1),l=(a&e.childLanes)!==0,mt||l){if(l=Be,l!==null&&(o=fy(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,Wr(e,o),ia(l,e,o),eh;mg(i)||Sc(),t=cm(e,t,a)}else mg(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,je=ja(i.nextSibling),Tt=t,ke=!0,Gn=null,Xa=!1,e!==null&&qy(t,e),t=ag(t,o.children),t.flags|=4096);return t}return n?(Pn(t),i=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=nn(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?i=nn(u,i):(i=Or(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,ys(null,o),o=t.child,i=e.child.memoizedState,i===null?i=um(a):(n=i.cachePool,n!==null?(s=pt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Gy(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=dm(e,l,a),t.memoizedState=sm,ys(e.child,o)):(zn(t),a=e.child,e=a.sibling,a=nn(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function ag(e,t){return t=yc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yc(e,t){return e=wa(22,e,null,t),e.lanes=0,e}function cm(e,t,a){return Vr(t,e.child,null,a),e=ag(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v0(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Vm(e.return,t,a)}function fm(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Ow(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=st.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,Fe(st,l),Nt(e,t,o,a),o=ke?Bs:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&v0(e,a,t);else if(e.tag===19)v0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&gc(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),fm(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&gc(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}fm(t,!0,a,null,r,o);break;case"together":fm(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function cn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(vi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,a=nn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=nn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function th(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fc(e)))}function $M(e,t,a){switch(t.tag){case 3:rc(t,t.stateNode.containerInfo),Dn(t,pt,e.memoizedState.cache),Fr();break;case 27:case 5:Em(t);break;case 4:rc(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wm(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(zn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Pw(e,t,a):(zn(t),e=cn(e,t,a),e!==null?e.sibling:null);zn(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(vi(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Ow(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Fe(st,st.current),o)break;return null;case 22:return t.lanes=0,zw(e,t,a,t.pendingProps);case 24:Dn(t,pt,e.memoizedState.cache)}return cn(e,t,a)}function Bw(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!th(e,a)&&(t.flags&128)===0)return mt=!1,$M(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,ke&&(t.flags&1048576)!==0&&Fy(t,Bs,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Dr(t.elementType),t.type=e,typeof e=="function")Rg(e)?(o=Xr(e,o),t.tag=1,t=y0(null,t,e,o,a)):(t.tag=0,t=tg(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===yg){t.tag=11,t=m0(null,t,e,o,a);break e}else if(n===wg){t.tag=14,t=g0(null,t,e,o,a);break e}}throw t=Mm(e)||e,Error(G(306,t,""))}}return t;case 0:return tg(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Xr(o,t.pendingProps),y0(e,t,o,n,a);case 3:e:{if(rc(t,t.stateNode.containerInfo),e===null)throw Error(G(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,Ym(e,t),Is(t,o,null,a);var l=t.memoizedState;if(o=l.cache,Dn(t,pt,o),o!==r.cache&&Gm(t,[pt],a,!0),ks(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=w0(e,t,o,a);break e}else if(o!==n){n=Ga(Error(G(424)),t),Hs(n),t=w0(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=ja(e.firstChild),Tt=t,ke=!0,Gn=null,Xa=!0,a=jy(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fr(),o===n){t=cn(e,t,a);break e}Nt(e,t,o,a)}t=t.child}return t;case 26:return Qd(e,t),e===null?(a=V0(t.type,null,t.pendingProps,null))?t.memoizedState=a:ke||(a=t.type,e=t.pendingProps,o=Ic(Vn.current).createElement(a),o[Et]=t,o[sa]=e,Rt(o,a,e),vt(o),t.stateNode=o):t.memoizedState=V0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Em(t),e===null&&ke&&(o=t.stateNode=Mv(t.type,t.pendingProps,Vn.current),Tt=t,Xa=!0,n=je,or(t.type)?(hg=n,je=ja(o.firstChild)):je=n),Nt(e,t,t.pendingProps.children,a),Qd(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ke&&((n=o=je)&&(o=_4(o,t.type,t.pendingProps,Xa),o!==null?(t.stateNode=o,Tt=t,je=ja(o.firstChild),Xa=!1,n=!0):n=!1),n||Jn(t)),Em(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,fg(n,r)?o=null:l!==null&&fg(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=qg(e,t,qM,null,null,a),Xs._currentValue=n),Qd(e,t),Nt(e,t,o,a),t.child;case 6:return e===null&&ke&&((e=a=je)&&(a=k4(a,t.pendingProps,Xa),a!==null?(t.stateNode=a,Tt=t,je=null,e=!0):e=!1),e||Jn(t)),null;case 13:return Pw(e,t,a);case 4:return rc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Vr(t,null,o,a):Nt(e,t,o,a),t.child;case 11:return m0(e,t,t.type,t.pendingProps,a);case 7:return Nt(e,t,t.pendingProps,a),t.child;case 8:return Nt(e,t,t.pendingProps.children,a),t.child;case 12:return Nt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Dn(t,t.type,o.value),Nt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,qr(t),n=At(n),o=o(n),t.flags|=1,Nt(e,t,o,a),t.child;case 14:return g0(e,t,t.type,t.pendingProps,a);case 15:return Dw(e,t,t.type,t.pendingProps,a);case 19:return Ow(e,t,a);case 31:return KM(e,t,a);case 22:return zw(e,t,a,t.pendingProps);case 24:return qr(t),o=At(pt),e===null?(n=Og(),n===null&&(n=Be,r=Pg(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Hg(t),Dn(t,pt,n)):((e.lanes&a)!==0&&(Ym(e,t),Is(t,null,null,a),ks()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Dn(t,pt,o)):(o=r.cache,Dn(t,pt,o),o!==n.cache&&Gm(t,[pt],a,!0))),Nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(G(156,t.tag))}function Wo(e){e.flags|=4}function pm(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(sv())e.flags|=8192;else throw Hr=pc,Bg}else e.flags&=-16777217}function C0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tv(t))if(sv())e.flags|=8192;else throw Hr=pc,Bg}function Pd(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uy():536870912,e.lanes|=t,mi|=t)}function fs(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function QM(e,t,a){var o=t.pendingProps;switch(zg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),rn(pt),si(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?Wo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nm())),Ye(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Wo(t),r!==null?(Ye(t),C0(t,r)):(Ye(t),pm(t,n,null,o,a))):r?r!==e.memoizedState?(Wo(t),Ye(t),C0(t,r)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Wo(t),Ye(t),pm(t,n,e,o,a)),null;case 27:if(lc(t),a=Vn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Wo(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}e=No.current,Hl(t)?$b(t,e):(e=Mv(n,o,a),t.stateNode=e,Wo(t))}return Ye(t),null;case 5:if(lc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Wo(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return Ye(t),null}if(r=No.current,Hl(t))$b(t,r);else{var l=Ic(Vn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[Et]=t,r[sa]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Rt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Wo(t)}}return Ye(t),pm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Wo(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(G(166));if(e=Vn.current,Hl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Tt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[Et]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Lv(e.nodeValue,a)),e||Jn(t,!0)}else e=Ic(e).createTextNode(o),e[Et]=t,t.stateNode=e}return Ye(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Hl(t),a!==null){if(e===null){if(!o)throw Error(G(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(557));e[Et]=t}else Fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else a=nm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ya(t),t):(ya(t),null);if((t.flags&128)!==0)throw Error(G(558))}return Ye(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Hl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(G(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(G(317));n[Et]=t}else Fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),n=!1}else n=nm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ya(t),t):(ya(t),null)}return ya(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Pd(t,t.updateQueue),Ye(t),null);case 4:return si(),e===null&&sh(t.stateNode.containerInfo),Ye(t),null;case 10:return rn(t.type),Ye(t),null;case 19:if(Ct(st),o=t.memoizedState,o===null)return Ye(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)fs(o,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=gc(e),r!==null){for(t.flags|=128,fs(o,!1),e=r.updateQueue,t.updateQueue=e,Pd(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Hy(a,e),a=a.sibling;return Fe(st,st.current&1|2),ke&&Jo(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Ca()>vc&&(t.flags|=128,n=!0,fs(o,!1),t.lanes=4194304)}else{if(!n)if(e=gc(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Pd(t,e),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!ke)return Ye(t),null}else 2*Ca()-o.renderingStartTime>vc&&a!==536870912&&(t.flags|=128,n=!0,fs(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ca(),e.sibling=null,a=st.current,Fe(st,n?a&1|2:a&1),ke&&Jo(t,o.treeForkCount),e):(Ye(t),null);case 22:case 23:return ya(t),Ug(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),a=t.updateQueue,a!==null&&Pd(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&Ct(Br),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),rn(pt),Ye(t),null;case 25:return null;case 30:return null}throw Error(G(156,t.tag))}function JM(e,t){switch(zg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(pt),si(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lc(t),null;case 31:if(t.memoizedState!==null){if(ya(t),t.alternate===null)throw Error(G(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ya(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ct(st),null;case 4:return si(),null;case 10:return rn(t.type),null;case 22:case 23:return ya(t),Ug(),e!==null&&Ct(Br),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return rn(pt),null;case 25:return null;default:return null}}function Hw(e,t){switch(zg(t),t.tag){case 3:rn(pt),si();break;case 26:case 27:case 5:lc(t);break;case 4:si();break;case 31:t.memoizedState!==null&&ya(t);break;case 13:ya(t);break;case 19:Ct(st);break;case 10:rn(t.type);break;case 22:case 23:ya(t),Ug(),e!==null&&Ct(Br);break;case 24:rn(pt)}}function au(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){Ae(t,t.return,i)}}function er(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,u=i;try{u()}catch(d){Ae(n,s,d)}}}o=o.next}while(o!==r)}}catch(d){Ae(t,t.return,d)}}function Uw(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wy(t,a)}catch(o){Ae(e,e.return,o)}}}function Fw(e,t,a){a.props=Xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ae(e,t,o)}}function Ns(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ae(e,t,n)}}function Mo(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ae(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ae(e,t,n)}else a.current=null}function qw(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ae(e,e.return,n)}}function mm(e,t,a){try{var o=e.stateNode;y4(o,e.type,a,t),o[sa]=t}catch(n){Ae(e,e.return,n)}}function Vw(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&or(e.type)||e.tag===4}function gm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&or(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function og(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=an));else if(o!==4&&(o===27&&or(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(og(e,t,a),e=e.sibling;e!==null;)og(e,t,a),e=e.sibling}function wc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&or(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wc(e,t,a),e=e.sibling;e!==null;)wc(e,t,a),e=e.sibling}function Gw(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Rt(t,o,a),t[Et]=e,t[sa]=a}catch(r){Ae(e,e.return,r)}}var en=!1,ft=!1,hm=!1,S0=typeof WeakSet=="function"?WeakSet:Set,wt=null;function e4(e,t){if(e=e.containerInfo,dg=Tc,e=Ty(e),Eg(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(i=l+n),f!==r||o!==0&&f.nodeType!==3||(s=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++u===n&&(i=l),c===r&&++d===o&&(s=l),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(cg={focusedElem:e,selectionRange:a},Tc=!1,wt=t;wt!==null;)if(t=wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,wt=e;else for(;wt!==null;){switch(t=wt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Xr(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(y){Ae(a,a.return,y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)pg(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pg(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(G(163))}if(e=t.sibling,e!==null){e.return=t.return,wt=e;break}wt=t.return}}function Xw(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$o(e,a),o&4&&au(5,a);break;case 1:if($o(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){Ae(a,a.return,l)}else{var n=Xr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Ae(a,a.return,l)}}o&64&&Uw(a),o&512&&Ns(a,a.return);break;case 3:if($o(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wy(e,t)}catch(l){Ae(a,a.return,l)}}break;case 27:t===null&&o&4&&Gw(a);case 26:case 5:$o(e,a),t===null&&o&4&&qw(a),o&512&&Ns(a,a.return);break;case 12:$o(e,a);break;case 31:$o(e,a),o&4&&Zw(e,a);break;case 13:$o(e,a),o&4&&Ww(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=u4.bind(null,a),I4(e,a))));break;case 22:if(o=a.memoizedState!==null||en,!o){t=t!==null&&t.memoizedState!==null||ft,n=en;var r=ft;en=o,(ft=t)&&!r?Qo(e,a,(a.subtreeFlags&8772)!==0):$o(e,a),en=n,ft=r}break;case 30:break;default:$o(e,a)}}function Yw(e){var t=e.alternate;t!==null&&(e.alternate=null,Yw(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,ra=!1;function Ko(e,t,a){for(a=a.child;a!==null;)jw(e,t,a),a=a.sibling}function jw(e,t,a){if(Sa&&typeof Sa.onCommitFiberUnmount=="function")try{Sa.onCommitFiberUnmount(Ws,a)}catch{}switch(a.tag){case 26:ft||Mo(a,t),Ko(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ft||Mo(a,t);var o=Je,n=ra;or(a.type)&&(Je=a.stateNode,ra=!1),Ko(e,t,a),Rs(a.stateNode),Je=o,ra=n;break;case 5:ft||Mo(a,t);case 6:if(o=Je,n=ra,Je=null,Ko(e,t,a),Je=o,ra=n,Je!==null)if(ra)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(r){Ae(a,t,r)}else try{Je.removeChild(a.stateNode)}catch(r){Ae(a,t,r)}break;case 18:Je!==null&&(ra?(e=Je,B0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bi(e)):B0(Je,a.stateNode));break;case 4:o=Je,n=ra,Je=a.stateNode.containerInfo,ra=!0,Ko(e,t,a),Je=o,ra=n;break;case 0:case 11:case 14:case 15:er(2,a,t),ft||er(4,a,t),Ko(e,t,a);break;case 1:ft||(Mo(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fw(a,t,o)),Ko(e,t,a);break;case 21:Ko(e,t,a);break;case 22:ft=(o=ft)||a.memoizedState!==null,Ko(e,t,a),ft=o;break;default:Ko(e,t,a)}}function Zw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bi(e)}catch(a){Ae(t,t.return,a)}}}function Ww(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bi(e)}catch(a){Ae(t,t.return,a)}}function t4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new S0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new S0),t;default:throw Error(G(435,e.tag))}}function Od(e,t){var a=t4(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=d4.bind(null,e,o);o.then(n,n)}})}function oa(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(or(i.type)){Je=i.stateNode,ra=!1;break e}break;case 5:Je=i.stateNode,ra=!1;break e;case 3:case 4:Je=i.stateNode.containerInfo,ra=!0;break e}i=i.return}if(Je===null)throw Error(G(160));jw(r,l,n),Je=null,ra=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kw(t,e),t=t.sibling}var io=null;function Kw(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oa(t,e),na(e),o&4&&(er(3,e,e.return),au(3,e),er(5,e,e.return));break;case 1:oa(t,e),na(e),o&512&&(ft||a===null||Mo(a,a.return)),o&64&&en&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=io;if(oa(t,e),na(e),o&512&&(ft||a===null||Mo(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Qs]||r[Et]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Rt(r,o,a),r[Et]=e,vt(r),o=r;break e;case"link":var l=X0("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),Rt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=X0("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),Rt(r,o,a),n.head.appendChild(r);break;default:throw Error(G(468,o))}r[Et]=e,vt(r),o=r}e.stateNode=o}else Y0(n,e.type,e.stateNode);else e.stateNode=G0(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?Y0(n,e.type,e.stateNode):G0(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mm(e,e.memoizedProps,a.memoizedProps)}break;case 27:oa(t,e),na(e),o&512&&(ft||a===null||Mo(a,a.return)),a!==null&&o&4&&mm(e,e.memoizedProps,a.memoizedProps);break;case 5:if(oa(t,e),na(e),o&512&&(ft||a===null||Mo(a,a.return)),e.flags&32){n=e.stateNode;try{di(n,"")}catch(g){Ae(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,mm(e,n,a!==null?a.memoizedProps:n)),o&1024&&(hm=!0);break;case 6:if(oa(t,e),na(e),o&4){if(e.stateNode===null)throw Error(G(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ae(e,e.return,g)}}break;case 3:if(tc=null,n=io,io=Mc(t.containerInfo),oa(t,e),io=n,na(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(g){Ae(e,e.return,g)}hm&&(hm=!1,$w(e));break;case 4:o=io,io=Mc(e.stateNode.containerInfo),oa(t,e),na(e),io=o;break;case 12:oa(t,e),na(e);break;case 31:oa(t,e),na(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Od(e,o)));break;case 13:oa(t,e),na(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gc=Ca()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Od(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=en,d=ft;if(en=u||n,ft=d||s,oa(t,e),ft=d,en=u,na(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||en||ft||zr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;i.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){Ae(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){Ae(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?H0(p,!0):H0(s.stateNode,!1)}catch(g){Ae(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Od(e,a))));break;case 19:oa(t,e),na(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Od(e,o)));break;case 30:break;case 21:break;default:oa(t,e),na(e)}}function na(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Vw(o)){a=o;break}o=o.return}if(a==null)throw Error(G(160));switch(a.tag){case 27:var n=a.stateNode,r=gm(e);wc(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(di(l,""),a.flags&=-33);var i=gm(e);wc(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,u=gm(e);og(e,u,s);break;default:throw Error(G(161))}}catch(d){Ae(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $w(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$w(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $o(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xw(e,t.alternate,t),t=t.sibling}function zr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:er(4,t,t.return),zr(t);break;case 1:Mo(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fw(t,t.return,a),zr(t);break;case 27:Rs(t.stateNode);case 26:case 5:Mo(t,t.return),zr(t);break;case 22:t.memoizedState===null&&zr(t);break;case 30:zr(t);break;default:zr(t)}e=e.sibling}}function Qo(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:Qo(n,r,a),au(4,r);break;case 1:if(Qo(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ae(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Zy(s[n],i)}catch(u){Ae(o,o.return,u)}}a&&l&64&&Uw(r),Ns(r,r.return);break;case 27:Gw(r);case 26:case 5:Qo(n,r,a),a&&o===null&&l&4&&qw(r),Ns(r,r.return);break;case 12:Qo(n,r,a);break;case 31:Qo(n,r,a),a&&l&4&&Zw(n,r);break;case 13:Qo(n,r,a),a&&l&4&&Ww(n,r);break;case 22:r.memoizedState===null&&Qo(n,r,a),Ns(r,r.return);break;case 30:break;default:Qo(n,r,a)}t=t.sibling}}function ah(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eu(a))}function oh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&eu(e))}function lo(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qw(e,t,a,o),t=t.sibling}function Qw(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:lo(e,t,a,o),n&2048&&au(9,t);break;case 1:lo(e,t,a,o);break;case 3:lo(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&eu(e)));break;case 12:if(n&2048){lo(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Ae(t,t.return,s)}}else lo(e,t,a,o);break;case 31:lo(e,t,a,o);break;case 13:lo(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?lo(e,t,a,o):Es(e,t):r._visibility&2?lo(e,t,a,o):(r._visibility|=2,Fl(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ah(l,t);break;case 24:lo(e,t,a,o),n&2048&&oh(t.alternate,t);break;default:lo(e,t,a,o)}}function Fl(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,u=l.flags;switch(l.tag){case 0:case 11:case 15:Fl(r,l,i,s,n),au(8,l);break;case 23:break;case 22:var d=l.stateNode;l.memoizedState!==null?d._visibility&2?Fl(r,l,i,s,n):Es(r,l):(d._visibility|=2,Fl(r,l,i,s,n)),n&&u&2048&&ah(l.alternate,l);break;case 24:Fl(r,l,i,s,n),n&&u&2048&&oh(l.alternate,l);break;default:Fl(r,l,i,s,n)}t=t.sibling}}function Es(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:Es(a,o),n&2048&&ah(o.alternate,o);break;case 24:Es(a,o),n&2048&&oh(o.alternate,o);break;default:Es(a,o)}t=t.sibling}}var ws=8192;function Ul(e,t,a){if(e.subtreeFlags&ws)for(e=e.child;e!==null;)Jw(e,t,a),e=e.sibling}function Jw(e,t,a){switch(e.tag){case 26:Ul(e,t,a),e.flags&ws&&e.memoizedState!==null&&H4(a,io,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,a);break;case 3:case 4:var o=io;io=Mc(e.stateNode.containerInfo),Ul(e,t,a),io=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ws,ws=16777216,Ul(e,t,a),ws=o):Ul(e,t,a));break;default:Ul(e,t,a)}}function ev(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];wt=o,av(o,e)}ev(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tv(e),e=e.sibling}function tv(e){switch(e.tag){case 0:case 11:case 15:ps(e),e.flags&2048&&er(9,e,e.return);break;case 3:ps(e);break;case 12:ps(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jd(e)):ps(e);break;default:ps(e)}}function Jd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];wt=o,av(o,e)}ev(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:er(8,t,t.return),Jd(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Jd(t));break;default:Jd(t)}e=e.sibling}}function av(e,t){for(;wt!==null;){var a=wt;switch(a.tag){case 0:case 11:case 15:er(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eu(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wt=o;else e:for(a=e;wt!==null;){o=wt;var n=o.sibling,r=o.return;if(Yw(o),o===a){wt=null;break e}if(n!==null){n.return=r,wt=n;break e}wt=r}}}var a4={getCacheForType:function(e){var t=At(pt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return At(pt).controller.signal}},o4=typeof WeakMap=="function"?WeakMap:Map,Me=0,Be=null,Ce=null,Le=0,Te=0,ba=null,Un=!1,Si=!1,nh=!1,fn=0,nt=0,tr=0,Ur=0,rh=0,va=0,mi=0,Ts=null,la=null,ng=!1,Gc=0,ov=0,vc=1/0,Cc=null,jn=null,xt=0,Zn=null,gi=null,ln=0,rg=0,lg=null,nv=null,As=0,ig=null;function _a(){return(Me&2)!==0&&Le!==0?Le&-Le:le.T!==null?ih():py()}function rv(){if(va===0)if((Le&536870912)===0||ke){var e=Id;Id<<=1,(Id&3932160)===0&&(Id=262144),va=e}else va=536870912;return e=Ia.current,e!==null&&(e.flags|=32),va}function ia(e,t,a){(e===Be&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(hi(e,0),Fn(e,Le,va,!1)),$s(e,a),((Me&2)===0||e!==Be)&&(e===Be&&((Me&2)===0&&(Ur|=a),nt===4&&Fn(e,Le,va,!1)),To(e))}function lv(e,t,a){if((Me&6)!==0)throw Error(G(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ks(e,t),n=o?l4(e,t):xm(e,t,!0),r=o;do{if(n===0){Si&&!o&&Fn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!n4(a)){n=xm(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Ts;var s=i.current.memoizedState.isDehydrated;if(s&&(hi(i,l).flags|=256),l=xm(i,l,!1),l!==2){if(nh&&!s){i.errorRecoveryDisabledLanes|=r,Ur|=r,n=4;break e}r=la,la=n,r!==null&&(la===null?la=r:la.push.apply(la,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){hi(e,0),Fn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(G(345));case 4:if((t&4194048)!==t)break;case 6:Fn(o,t,va,!Un);break e;case 2:la=null;break;case 3:case 5:break;default:throw Error(G(329))}if((t&62914560)===t&&(n=Gc+300-Ca(),10<n)){if(Fn(o,t,va,!Un),Rc(o,0,!0)!==0)break e;ln=t,o.timeoutHandle=kv(L0.bind(null,o,a,la,Cc,ng,t,va,Ur,mi,Un,r,"Throttled",-0,0),n);break e}L0(o,a,la,Cc,ng,t,va,Ur,mi,Un,r,null,-0,0)}}break}while(!0);To(e)}function L0(e,t,a,o,n,r,l,i,s,u,d,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Jw(t,r,f);var g=(r&62914560)===r?Gc-Ca():(r&4194048)===r?ov-Ca():0;if(g=U4(f,g),g!==null){ln=r,e.cancelPendingCommit=g(k0.bind(null,e,t,r,a,o,n,l,i,s,d,f,null,c,p)),Fn(e,r,l,!u);return}}k0(e,t,r,a,o,n,l,i,s)}function n4(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!ka(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fn(e,t,a,o){t&=~rh,t&=~Ur,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-La(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&dy(e,a,t)}function Xc(){return(Me&6)===0?(ou(0,!1),!1):!0}function lh(){if(Ce!==null){if(Te===0)var e=Ce.return;else e=Ce,on=Kr=null,Xg(e),ri=null,Us=0,e=Ce;for(;e!==null;)Hw(e.alternate,e),e=e.return;Ce=null}}function hi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,C4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ln=0,lh(),Be=e,Ce=a=nn(e.current,null),Le=t,Te=0,ba=null,Un=!1,Si=Ks(e,t),nh=!1,mi=va=rh=Ur=tr=nt=0,la=Ts=null,ng=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-La(o),r=1<<n;t|=e[n],o&=~r}return fn=t,Oc(),a}function iv(e,t){ge=null,le.H=qs,t===Ci||t===Hc?(t=a0(),Te=3):t===Bg?(t=a0(),Te=4):Te=t===eh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ba=t,Ce===null&&(nt=1,bc(e,Ga(t,e.current)))}function sv(){var e=Ia.current;return e===null?!0:(Le&4194048)===Le?Ya===null:(Le&62914560)===Le||(Le&536870912)!==0?e===Ya:!1}function uv(){var e=le.H;return le.H=qs,e===null?qs:e}function dv(){var e=le.A;return le.A=a4,e}function Sc(){nt=4,Un||(Le&4194048)!==Le&&Ia.current!==null||(Si=!0),(tr&134217727)===0&&(Ur&134217727)===0||Be===null||Fn(Be,Le,va,!1)}function xm(e,t,a){var o=Me;Me|=2;var n=uv(),r=dv();(Be!==e||Le!==t)&&(Cc=null,hi(e,t)),t=!1;var l=nt;e:do try{if(Te!==0&&Ce!==null){var i=Ce,s=ba;switch(Te){case 8:lh(),l=6;break e;case 3:case 2:case 9:case 6:Ia.current===null&&(t=!0);var u=Te;if(Te=0,ba=null,ei(e,i,s,u),a&&Si){l=0;break e}break;default:u=Te,Te=0,ba=null,ei(e,i,s,u)}}r4(),l=nt;break}catch(d){iv(e,d)}while(!0);return t&&e.shellSuspendCounter++,on=Kr=null,Me=o,le.H=n,le.A=r,Ce===null&&(Be=null,Le=0,Oc()),l}function r4(){for(;Ce!==null;)cv(Ce)}function l4(e,t){var a=Me;Me|=2;var o=uv(),n=dv();Be!==e||Le!==t?(Cc=null,vc=Ca()+500,hi(e,t)):Si=Ks(e,t);e:do try{if(Te!==0&&Ce!==null){t=Ce;var r=ba;t:switch(Te){case 1:Te=0,ba=null,ei(e,t,r,1);break;case 2:case 9:if(t0(r)){Te=0,ba=null,_0(t);break}t=function(){Te!==2&&Te!==9||Be!==e||(Te=7),To(e)},r.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:t0(r)?(Te=0,ba=null,_0(t)):(Te=0,ba=null,ei(e,t,r,7));break;case 5:var l=null;switch(Ce.tag){case 26:l=Ce.memoizedState;case 5:case 27:var i=Ce;if(l?Tv(l):i.stateNode.complete){Te=0,ba=null;var s=i.sibling;if(s!==null)Ce=s;else{var u=i.return;u!==null?(Ce=u,Yc(u)):Ce=null}break t}}Te=0,ba=null,ei(e,t,r,5);break;case 6:Te=0,ba=null,ei(e,t,r,6);break;case 8:lh(),nt=6;break e;default:throw Error(G(462))}}i4();break}catch(d){iv(e,d)}while(!0);return on=Kr=null,le.H=o,le.A=n,Me=a,Ce!==null?0:(Be=null,Le=0,Oc(),nt)}function i4(){for(;Ce!==null&&!E5();)cv(Ce)}function cv(e){var t=Bw(e.alternate,e,fn);e.memoizedProps=e.pendingProps,t===null?Yc(e):Ce=t}function _0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=b0(a,t,t.pendingProps,t.type,void 0,Le);break;case 11:t=b0(a,t,t.pendingProps,t.type.render,t.ref,Le);break;case 5:Xg(t);default:Hw(a,t),t=Ce=Hy(t,fn),t=Bw(a,t,fn)}e.memoizedProps=e.pendingProps,t===null?Yc(e):Ce=t}function ei(e,t,a,o){on=Kr=null,Xg(t),ri=null,Us=0;var n=t.return;try{if(WM(e,n,t,a,Le)){nt=1,bc(e,Ga(a,e.current)),Ce=null;return}}catch(r){if(n!==null)throw Ce=n,r;nt=1,bc(e,Ga(a,e.current)),Ce=null;return}t.flags&32768?(ke||o===1?e=!0:Si||(Le&536870912)!==0?e=!1:(Un=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ia.current,o!==null&&o.tag===13&&(o.flags|=16384))),fv(t,e)):Yc(t)}function Yc(e){var t=e;do{if((t.flags&32768)!==0){fv(t,Un);return}e=t.return;var a=QM(t.alternate,t,fn);if(a!==null){Ce=a;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);nt===0&&(nt=5)}function fv(e,t){do{var a=JM(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);nt=6,Ce=null}function k0(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do jc();while(xt!==0);if((Me&6)!==0)throw Error(G(327));if(t!==null){if(t===e.current)throw Error(G(177));if(r=t.lanes|t.childLanes,r|=Tg,U5(e,a,r,l,i,s),e===Be&&(Ce=Be=null,Le=0),gi=t,Zn=e,ln=a,rg=r,lg=n,nv=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c4(ic,function(){return xv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=le.T,le.T=null,n=Ne.p,Ne.p=2,l=Me,Me|=4;try{e4(e,t,a)}finally{Me=l,Ne.p=n,le.T=o}}xt=1,pv(),mv(),gv()}}function pv(){if(xt===1){xt=0;var e=Zn,t=gi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=le.T,le.T=null;var o=Ne.p;Ne.p=2;var n=Me;Me|=4;try{Kw(t,e);var r=cg,l=Ty(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&Ey(i.ownerDocument.documentElement,i)){if(s!==null&&Eg(i)){var u=s.start,d=s.end;if(d===void 0&&(d=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(d,i.value.length);else{var f=i.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=i.textContent.length,y=Math.min(s.start,g),w=s.end===void 0?y:Math.min(s.end,g);!p.extend&&y>w&&(l=w,w=y,y=l);var h=Zb(i,y),x=Zb(i,w);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),y>w?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=i;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<f.length;i++){var b=f[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Tc=!!dg,cg=dg=null}finally{Me=n,Ne.p=o,le.T=a}}e.current=t,xt=2}}function mv(){if(xt===2){xt=0;var e=Zn,t=gi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var o=Ne.p;Ne.p=2;var n=Me;Me|=4;try{Xw(e,t.alternate,t)}finally{Me=n,Ne.p=o,le.T=a}}xt=3}}function gv(){if(xt===4||xt===3){xt=0,T5();var e=Zn,t=gi,a=ln,o=nv;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,gi=Zn=null,hv(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(jn=null),Sg(a),t=t.stateNode,Sa&&typeof Sa.onCommitFiberRoot=="function")try{Sa.onCommitFiberRoot(Ws,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=le.T,n=Ne.p,Ne.p=2,le.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{le.T=t,Ne.p=n}}(ln&3)!==0&&jc(),To(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===ig?As++:(As=0,ig=e):As=0,ou(0,!1)}}function hv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,eu(t)))}function jc(){return pv(),mv(),gv(),xv()}function xv(){if(xt!==5)return!1;var e=Zn,t=rg;rg=0;var a=Sg(ln),o=le.T,n=Ne.p;try{Ne.p=32>a?32:a,le.T=null,a=lg,lg=null;var r=Zn,l=ln;if(xt=0,gi=Zn=null,ln=0,(Me&6)!==0)throw Error(G(331));var i=Me;if(Me|=4,tv(r.current),Qw(r,r.current,l,a),Me=i,ou(0,!1),Sa&&typeof Sa.onPostCommitFiberRoot=="function")try{Sa.onPostCommitFiberRoot(Ws,r)}catch{}return!0}finally{Ne.p=n,le.T=o,hv(e,t)}}function I0(e,t,a){t=Ga(a,t),t=eg(e.stateNode,t,2),e=Yn(e,t,2),e!==null&&($s(e,2),To(e))}function Ae(e,t,a){if(e.tag===3)I0(e,e,a);else for(;t!==null;){if(t.tag===3){I0(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(jn===null||!jn.has(o))){e=Ga(a,e),a=Aw(2),o=Yn(t,a,2),o!==null&&(Rw(a,o,t,e),$s(o,2),To(o));break}}t=t.return}}function bm(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new o4;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(nh=!0,n.add(a),e=s4.bind(null,e,t,a),t.then(e,e))}function s4(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(Le&a)===a&&(nt===4||nt===3&&(Le&62914560)===Le&&300>Ca()-Gc?(Me&2)===0&&hi(e,0):rh|=a,mi===Le&&(mi=0)),To(e)}function bv(e,t){t===0&&(t=uy()),e=Wr(e,t),e!==null&&($s(e,t),To(e))}function u4(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),bv(e,a)}function d4(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(G(314))}o!==null&&o.delete(t),bv(e,a)}function c4(e,t){return vg(e,t)}var Lc=null,ql=null,sg=!1,_c=!1,ym=!1,qn=0;function To(e){e!==ql&&e.next===null&&(ql===null?Lc=ql=e:ql=ql.next=e),_c=!0,sg||(sg=!0,p4())}function ou(e,t){if(!ym&&_c){ym=!0;do for(var a=!1,o=Lc;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-La(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,M0(o,r))}else r=Le,r=Rc(o,o===Be?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Ks(o,r)||(a=!0,M0(o,r));o=o.next}while(a);ym=!1}}function f4(){yv()}function yv(){_c=sg=!1;var e=0;qn!==0&&v4()&&(e=qn);for(var t=Ca(),a=null,o=Lc;o!==null;){var n=o.next,r=wv(o,t);r===0?(o.next=null,a===null?Lc=n:a.next=n,n===null&&(ql=a)):(a=o,(e!==0||(r&3)!==0)&&(_c=!0)),o=n}xt!==0&&xt!==5||ou(e,!1),qn!==0&&(qn=0)}function wv(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-La(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=H5(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=Be,a=Le,a=Rc(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Zp(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ks(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Zp(o),Sg(a)){case 2:case 8:a=iy;break;case 32:a=ic;break;case 268435456:a=sy;break;default:a=ic}return o=vv.bind(null,e),a=vg(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Zp(o),e.callbackPriority=2,e.callbackNode=null,2}function vv(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jc()&&e.callbackNode!==a)return null;var o=Le;return o=Rc(e,e===Be?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(lv(e,o,t),wv(e,Ca()),e.callbackNode!=null&&e.callbackNode===a?vv.bind(null,e):null)}function M0(e,t){if(jc())return null;lv(e,t,!0)}function p4(){S4(function(){(Me&6)!==0?vg(ly,f4):yv()})}function ih(){if(qn===0){var e=ci;e===0&&(e=kd,kd<<=1,(kd&261888)===0&&(kd=256)),qn=e}return qn}function N0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gd(""+e)}function E0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function m4(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=N0((n[sa]||null).action),l=o.submitter;l&&(t=(t=l[sa]||null)?N0(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new Dc("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qn!==0){var s=l?E0(n,l):new FormData(n);Qm(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?E0(n,l):new FormData(n),Qm(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Bd=0;Bd<Um.length;Bd++)Hd=Um[Bd],T0=Hd.toLowerCase(),A0=Hd[0].toUpperCase()+Hd.slice(1),so(T0,"on"+A0);var Hd,T0,A0,Bd;so(Ry,"onAnimationEnd");so(Dy,"onAnimationIteration");so(zy,"onAnimationStart");so("dblclick","onDoubleClick");so("focusin","onFocus");so("focusout","onBlur");so(AM,"onTransitionRun");so(RM,"onTransitionStart");so(DM,"onTransitionCancel");so(Py,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vs));function Cv(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(d){uc(d)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(d){uc(d)}n.currentTarget=null,r=s}}}}function ve(e,t){var a=t[Am];a===void 0&&(a=t[Am]=new Set);var o=e+"__bubble";a.has(o)||(Sv(t,e,2,!1),a.add(o))}function wm(e,t,a){var o=0;t&&(o|=4),Sv(a,e,o,t)}var Ud="_reactListening"+Math.random().toString(36).slice(2);function sh(e){if(!e[Ud]){e[Ud]=!0,my.forEach(function(a){a!=="selectionchange"&&(g4.has(a)||wm(a,!1,e),wm(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ud]||(t[Ud]=!0,wm("selectionchange",!1,t))}}function Sv(e,t,a,o){switch(Pv(t)){case 2:var n=V4;break;case 8:n=G4;break;default:n=fh}a=n.bind(null,t,a,e),n=void 0,!Om||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function vm(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=Xl(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}Cy(function(){var u=r,d=kg(a),f=[];e:{var c=Oy.get(e);if(c!==void 0){var p=Dc,g=e;switch(e){case"keypress":if(Yd(a)===0)break e;case"keydown":case"keyup":p=dM;break;case"focusin":g="focus",p=Jp;break;case"focusout":g="blur",p=Jp;break;case"beforeblur":case"afterblur":p=Jp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Q5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pM;break;case Ry:case Dy:case zy:p=tM;break;case Py:p=gM;break;case"scroll":case"scrollend":p=K5;break;case"wheel":p=xM;break;case"copy":case"cut":case"paste":p=oM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fb;break;case"toggle":case"beforetoggle":p=yM}var y=(t&4)!==0,w=!y&&(e==="scroll"||e==="scrollend"),h=y?c!==null?c+"Capture":null:c;y=[];for(var x=u,m;x!==null;){var b=x;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||h===null||(b=zs(x,h),b!=null&&y.push(Gs(x,b,m))),w)break;x=x.return}0<y.length&&(c=new p(c,g,null,a,d),f.push({event:c,listeners:y}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Pm&&(g=a.relatedTarget||a.fromElement)&&(Xl(g)||g[yi]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?Xl(g):null,g!==null&&(w=Zs(g),y=g.tag,g!==w||y!==5&&y!==27&&y!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Hb,b="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Fb,b="onPointerLeave",h="onPointerEnter",x="pointer"),w=p==null?c:bs(p),m=g==null?c:bs(g),c=new y(b,x+"leave",p,a,d),c.target=w,c.relatedTarget=m,b=null,Xl(d)===u&&(y=new y(h,x+"enter",g,a,d),y.target=m,y.relatedTarget=w,b=y),w=b,p&&g)t:{for(y=h4,h=p,x=g,m=0,b=h;b;b=y(b))m++;b=0;for(var S=x;S;S=y(S))b++;for(;0<m-b;)h=y(h),m--;for(;0<b-m;)x=y(x),b--;for(;m--;){if(h===x||x!==null&&h===x.alternate){y=h;break t}h=y(h),x=y(x)}y=null}else y=null;p!==null&&R0(f,c,p,y,!1),g!==null&&w!==null&&R0(f,w,g,y,!0)}}e:{if(c=u?bs(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=Xb;else if(Gb(c))if(My)C=NM;else{C=IM;var v=kM}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&_g(u.elementType)&&(C=Xb):C=MM;if(C&&(C=C(e,u))){Iy(f,C,a,d);break e}v&&v(e,c,u),e==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&zm(c,"number",c.value)}switch(v=u?bs(u):window,e){case"focusin":(Gb(v)||v.contentEditable==="true")&&(Zl=v,Bm=u,Ss=null);break;case"focusout":Ss=Bm=Zl=null;break;case"mousedown":Hm=!0;break;case"contextmenu":case"mouseup":case"dragend":Hm=!1,Wb(f,a,d);break;case"selectionchange":if(TM)break;case"keydown":case"keyup":Wb(f,a,d)}var _;if(Ng)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else jl?_y(e,a)&&(k="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(k="onCompositionStart");k&&(Ly&&a.locale!=="ko"&&(jl||k!=="onCompositionStart"?k==="onCompositionEnd"&&jl&&(_=Sy()):(Hn=d,Ig="value"in Hn?Hn.value:Hn.textContent,jl=!0)),v=kc(u,k),0<v.length&&(k=new Ub(k,e,null,a,d),f.push({event:k,listeners:v}),_?k.data=_:(_=ky(a),_!==null&&(k.data=_)))),(_=vM?CM(e,a):SM(e,a))&&(k=kc(u,"onBeforeInput"),0<k.length&&(v=new Ub("onBeforeInput","beforeinput",null,a,d),f.push({event:v,listeners:k}),v.data=_)),m4(f,e,u,a,d)}Cv(f,t)})}function Gs(e,t,a){return{instance:e,listener:t,currentTarget:a}}function kc(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=zs(e,a),n!=null&&o.unshift(Gs(e,n,r)),n=zs(e,t),n!=null&&o.push(Gs(e,n,r))),e.tag===3)return o;e=e.return}return[]}function h4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R0(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,u=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||u===null||(s=u,n?(u=zs(a,r),u!=null&&l.unshift(Gs(a,u,s))):n||(u=zs(a,r),u!=null&&l.push(Gs(a,u,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var x4=/\r\n?/g,b4=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(x4,`
`).replace(b4,"")}function Lv(e,t){return t=D0(t),D0(e)===t}function ze(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||di(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&di(e,""+o);break;case"className":Nd(e,"class",o);break;case"tabIndex":Nd(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nd(e,a,o);break;case"style":vy(e,o,r);break;case"data":if(t!=="object"){Nd(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Gd(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Gd(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=an);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Gd(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Vd(e,"popover",o);break;case"xlinkActuate":Zo(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zo(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zo(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zo(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zo(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zo(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zo(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zo(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zo(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Vd(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Z5.get(a)||a,Vd(e,a,o))}}function ug(e,t,a,o,n,r){switch(a){case"style":vy(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"children":typeof o=="string"?di(e,o):(typeof o=="number"||typeof o=="bigint")&&di(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=an);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[sa]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Vd(e,a,o)}}}function Rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:ze(e,t,r,l,a,null)}}n&&ze(e,t,"srcSet",a.srcSet,a,null),o&&ze(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var i=r=l=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"name":n=d;break;case"type":l=d;break;case"checked":s=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":i=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(G(137,t));break;default:ze(e,t,o,d,a,null)}}by(e,r,i,s,u,l,n,!1);return;case"select":ve("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:ze(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?ai(e,!!o,t,!1):a!=null&&ai(e,!!o,a,!0);return;case"textarea":ve("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(G(91));break;default:ze(e,t,l,i,a,null)}wy(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ze(e,t,s,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Vs.length;o++)ve(Vs[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:ze(e,t,u,o,a,null)}return;default:if(_g(t)){for(d in a)a.hasOwnProperty(d)&&(o=a[d],o!==void 0&&ug(e,t,d,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&ze(e,t,i,o,a,null))}function y4(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,u=null,d=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||ze(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":l=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(G(137,t));break;default:p!==f&&ze(e,t,c,p,o,f)}}Dm(e,l,i,s,u,d,r,n);return;case"select":p=l=i=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||ze(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&ze(e,t,n,r,o,s)}t=i,a=l,o=p,c!=null?ai(e,!!a,c,!1):!!o!=!!a&&(t!=null?ai(e,!!a,t,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:ze(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(G(91));break;default:n!==r&&ze(e,t,l,n,o,r)}yy(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:ze(e,t,g,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":ze(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!=null&&!o.hasOwnProperty(y)&&ze(e,t,y,null,o,c);for(u in o)if(c=o[u],p=a[u],o.hasOwnProperty(u)&&c!==p&&(c!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(G(137,t));break;default:ze(e,t,u,c,o,p)}return;default:if(_g(t)){for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!==void 0&&!o.hasOwnProperty(w)&&ug(e,t,w,void 0,o,c);for(d in o)c=o[d],p=a[d],!o.hasOwnProperty(d)||c===p||c===void 0&&p===void 0||ug(e,t,d,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&ze(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||ze(e,t,f,c,o,p)}function z0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function w4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&z0(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>i)break;var d=s.transferSize,f=s.initiatorType;d&&z0(f)&&(s=s.responseEnd,l+=d*(s<i?1:(i-u)/(s-u)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dg=null,cg=null;function Ic(e){return e.nodeType===9?e:e.ownerDocument}function P0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _v(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cm=null;function v4(){var e=window.event;return e&&e.type==="popstate"?e===Cm?!1:(Cm=e,!0):(Cm=null,!1)}var kv=typeof setTimeout=="function"?setTimeout:void 0,C4=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,S4=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(e){return O0.resolve(null).then(e).catch(L4)}:kv;function L4(e){setTimeout(function(){throw e})}function or(e){return e==="head"}function B0(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),bi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Rs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rs(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[Qs]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&Rs(e.ownerDocument.body);a=n}while(a);bi(t)}function H0(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function pg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pg(a),Lg(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ja(e.nextSibling),e===null)break}return null}function k4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ja(e.nextSibling),e===null))return null;return e}function Iv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ja(e.nextSibling),e===null))return null;return e}function mg(e){return e.data==="$?"||e.data==="$~"}function gg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function I4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ja(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hg=null;function U0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ja(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function F0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Mv(e,t,a){switch(t=Ic(a),e){case"html":if(e=t.documentElement,!e)throw Error(G(452));return e;case"head":if(e=t.head,!e)throw Error(G(453));return e;case"body":if(e=t.body,!e)throw Error(G(454));return e;default:throw Error(G(451))}}function Rs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lg(e)}var Za=new Map,q0=new Set;function Mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pn=Ne.d;Ne.d={f:M4,r:N4,D:E4,C:T4,L:A4,m:R4,X:z4,S:D4,M:P4};function M4(){var e=pn.f(),t=Xc();return e||t}function N4(e){var t=wi(e);t!==null&&t.tag===5&&t.type==="form"?vw(t):pn.r(e)}var Li=typeof document>"u"?null:document;function Nv(e,t,a){var o=Li;if(o&&typeof t=="string"&&t){var n=Va(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),q0.has(n)||(q0.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Rt(t,"link",e),vt(t),o.head.appendChild(t)))}}function E4(e){pn.D(e),Nv("dns-prefetch",e,null)}function T4(e,t){pn.C(e,t),Nv("preconnect",e,t)}function A4(e,t,a){pn.L(e,t,a);var o=Li;if(o&&e&&t){var n='link[rel="preload"][as="'+Va(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Va(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Va(a.imageSizes)+'"]')):n+='[href="'+Va(e)+'"]';var r=n;switch(t){case"style":r=xi(e);break;case"script":r=_i(e)}Za.has(r)||(e=Ze({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Za.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(nu(r))||t==="script"&&o.querySelector(ru(r))||(t=o.createElement("link"),Rt(t,"link",e),vt(t),o.head.appendChild(t)))}}function R4(e,t){pn.m(e,t);var a=Li;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Va(o)+'"][href="'+Va(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=_i(e)}if(!Za.has(r)&&(e=Ze({rel:"modulepreload",href:e},t),Za.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ru(r)))return}o=a.createElement("link"),Rt(o,"link",e),vt(o),a.head.appendChild(o)}}}function D4(e,t,a){pn.S(e,t,a);var o=Li;if(o&&e){var n=ti(o).hoistableStyles,r=xi(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(nu(r)))i.loading=5;else{e=Ze({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Za.get(r))&&uh(e,a);var s=l=o.createElement("link");vt(s),Rt(s,"link",e),s._p=new Promise(function(u,d){s.onload=u,s.onerror=d}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,ec(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function z4(e,t){pn.X(e,t);var a=Li;if(a&&e){var o=ti(a).hoistableScripts,n=_i(e),r=o.get(n);r||(r=a.querySelector(ru(n)),r||(e=Ze({src:e,async:!0},t),(t=Za.get(n))&&dh(e,t),r=a.createElement("script"),vt(r),Rt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function P4(e,t){pn.M(e,t);var a=Li;if(a&&e){var o=ti(a).hoistableScripts,n=_i(e),r=o.get(n);r||(r=a.querySelector(ru(n)),r||(e=Ze({src:e,async:!0,type:"module"},t),(t=Za.get(n))&&dh(e,t),r=a.createElement("script"),vt(r),Rt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function V0(e,t,a,o){var n=(n=Vn.current)?Mc(n):null;if(!n)throw Error(G(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xi(a.href),a=ti(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xi(a.href);var r=ti(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(nu(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Za.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Za.set(e,a),r||O4(n,e,a,l.state))),t&&o===null)throw Error(G(528,""));return l}if(t&&o!==null)throw Error(G(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_i(a),a=ti(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(G(444,e))}}function xi(e){return'href="'+Va(e)+'"'}function nu(e){return'link[rel="stylesheet"]['+e+"]"}function Ev(e){return Ze({},e,{"data-precedence":e.precedence,precedence:null})}function O4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Rt(t,"link",a),vt(t),e.head.appendChild(t))}function _i(e){return'[src="'+Va(e)+'"]'}function ru(e){return"script[async]"+e}function G0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Va(a.href)+'"]');if(o)return t.instance=o,vt(o),o;var n=Ze({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),Rt(o,"style",n),ec(o,a.precedence,e),t.instance=o;case"stylesheet":n=xi(a.href);var r=e.querySelector(nu(n));if(r)return t.state.loading|=4,t.instance=r,vt(r),r;o=Ev(a),(n=Za.get(n))&&uh(o,n),r=(e.ownerDocument||e).createElement("link"),vt(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Rt(r,"link",o),t.state.loading|=4,ec(r,a.precedence,e),t.instance=r;case"script":return r=_i(a.src),(n=e.querySelector(ru(r)))?(t.instance=n,vt(n),n):(o=a,(n=Za.get(r))&&(o=Ze({},a),dh(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),vt(n),Rt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(G(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,ec(o,a.precedence,e));return t.instance}function ec(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function uh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function dh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var tc=null;function X0(e,t,a){if(tc===null){var o=new Map,n=tc=new Map;n.set(a,o)}else n=tc,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Qs]||r[Et]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function Y0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function B4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function H4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=xi(o.href),r=t.querySelector(nu(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Nc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,vt(r);return}r=t.ownerDocument||t,o=Ev(o),(n=Za.get(n))&&uh(o,n),r=r.createElement("link"),vt(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Rt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Nc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Sm=0;function U4(e,t){return e.stylesheets&&e.count===0&&ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Sm===0&&(Sm=62500*w4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Sm?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function Nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function ac(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,t.forEach(F4,e),Ec=null,Nc.call(e))}function F4(e,t){if(!(t.state.loading&4)){var a=Ec.get(e);if(a)var o=a.get(null);else{a=new Map,Ec.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=Nc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Xs={$$typeof:tn,Provider:null,Consumer:null,_currentValue:Pr,_currentValue2:Pr,_threadCount:0};function q4(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wp(0),this.hiddenUpdates=Wp(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Av(e,t,a,o,n,r,l,i,s,u,d,f){return e=new q4(e,t,a,l,s,u,d,f,i),t=1,r===!0&&(t|=24),r=wa(3,null,null,t),e.current=r,r.stateNode=e,t=Pg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Hg(r),e}function Rv(e){return e?(e=$l,e):$l}function Dv(e,t,a,o,n,r){n=Rv(n),o.context===null?o.context=n:o.pendingContext=n,o=Xn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Yn(e,o,t),a!==null&&(ia(a,e,t),_s(a,e,t))}function j0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ch(e,t){j0(e,t),(e=e.alternate)&&j0(e,t)}function zv(e){if(e.tag===13||e.tag===31){var t=Wr(e,67108864);t!==null&&ia(t,e,67108864),ch(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var t=_a();t=Cg(t);var a=Wr(e,t);a!==null&&ia(a,e,t),ch(e,t)}}var Tc=!0;function V4(e,t,a,o){var n=le.T;le.T=null;var r=Ne.p;try{Ne.p=2,fh(e,t,a,o)}finally{Ne.p=r,le.T=n}}function G4(e,t,a,o){var n=le.T;le.T=null;var r=Ne.p;try{Ne.p=8,fh(e,t,a,o)}finally{Ne.p=r,le.T=n}}function fh(e,t,a,o){if(Tc){var n=xg(o);if(n===null)vm(e,t,o,Ac,a),W0(e,o);else if(Y4(n,e,t,a,o))o.stopPropagation();else if(W0(e,o),t&4&&-1<X4.indexOf(e)){for(;n!==null;){var r=wi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Rr(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-La(l);i.entanglements[1]|=s,l&=~s}To(r),(Me&6)===0&&(vc=Ca()+500,ou(0,!1))}}break;case 31:case 13:i=Wr(r,2),i!==null&&ia(i,r,2),Xc(),ch(r,2)}if(r=xg(o),r===null&&vm(e,t,o,Ac,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else vm(e,t,o,null,a)}}function xg(e){return e=kg(e),ph(e)}var Ac=null;function ph(e){if(Ac=null,e=Xl(e),e!==null){var t=Zs(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ty(t),e!==null)return e;e=null}else if(a===31){if(e=ay(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ac=e,null}function Pv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A5()){case ly:return 2;case iy:return 8;case ic:case R5:return 32;case sy:return 268435456;default:return 32}default:return 32}}var bg=!1,Wn=null,Kn=null,$n=null,Ys=new Map,js=new Map,On=[],X4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(t.pointerId)}}function ms(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=wi(t),t!==null&&zv(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Y4(e,t,a,o,n){switch(t){case"focusin":return Wn=ms(Wn,e,t,a,o,n),!0;case"dragenter":return Kn=ms(Kn,e,t,a,o,n),!0;case"mouseover":return $n=ms($n,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return Ys.set(r,ms(Ys.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,js.set(r,ms(js.get(r)||null,e,t,a,o,n)),!0}return!1}function Ov(e){var t=Xl(e.target);if(t!==null){var a=Zs(t);if(a!==null){if(t=a.tag,t===13){if(t=ty(a),t!==null){e.blockedOn=t,Ab(e.priority,function(){Z0(a)});return}}else if(t===31){if(t=ay(a),t!==null){e.blockedOn=t,Ab(e.priority,function(){Z0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=xg(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Pm=o,a.target.dispatchEvent(o),Pm=null}else return t=wi(a),t!==null&&zv(t),e.blockedOn=a,!1;t.shift()}return!0}function K0(e,t,a){oc(e)&&a.delete(t)}function j4(){bg=!1,Wn!==null&&oc(Wn)&&(Wn=null),Kn!==null&&oc(Kn)&&(Kn=null),$n!==null&&oc($n)&&($n=null),Ys.forEach(K0),js.forEach(K0)}function Fd(e,t){e.blockedOn===t&&(e.blockedOn=null,bg||(bg=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,j4)))}var qd=null;function $0(e){qd!==e&&(qd=e,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,function(){qd===e&&(qd=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(ph(o||a)===null)continue;break}var r=wi(a);r!==null&&(e.splice(t,3),t-=3,Qm(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function bi(e){function t(s){return Fd(s,e)}Wn!==null&&Fd(Wn,e),Kn!==null&&Fd(Kn,e),$n!==null&&Fd($n,e),Ys.forEach(t),js.forEach(t);for(var a=0;a<On.length;a++){var o=On[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<On.length&&(a=On[0],a.blockedOn===null);)Ov(a),a.blockedOn===null&&On.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[sa]||null;if(typeof r=="function")l||$0(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[sa]||null)i=l.formAction;else if(ph(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),$0(a)}}}function Bv(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function mh(e){this._internalRoot=e}Zc.prototype.render=mh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));var a=t.current,o=_a();Dv(a,o,e,t,null,null)};Zc.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dv(e.current,2,null,e,null,null),Xc(),t[yi]=null}};function Zc(e){this._internalRoot=e}Zc.prototype.unstable_scheduleHydration=function(e){if(e){var t=py();e={blockedOn:null,target:e,priority:t};for(var a=0;a<On.length&&t!==0&&t<On[a].priority;a++);On.splice(a,0,e),a===0&&Ov(e)}};var Q0=J0.version;if(Q0!=="19.2.8")throw Error(G(527,Q0,"19.2.8"));Ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=_5(t),e=e!==null?oy(e):null,e=e===null?null:e.stateNode,e};var Z4={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(gs=__REACT_DEVTOOLS_GLOBAL_HOOK__,!gs.isDisabled&&gs.supportsFiber))try{Ws=gs.inject(Z4),Sa=gs}catch{}var gs;Wc.createRoot=function(e,t){if(!ey(e))throw Error(G(299));var a=!1,o="",n=Nw,r=Ew,l=Tw;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Av(e,1,!1,null,null,a,o,null,n,r,l,Bv),e[yi]=t.current,sh(e),new mh(t)};Wc.hydrateRoot=function(e,t,a){if(!ey(e))throw Error(G(299));var o=!1,n="",r=Nw,l=Ew,i=Tw,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Av(e,1,!0,t,a??null,o,n,s,r,l,i,Bv),t.context=Rv(null),a=t.current,o=_a(),o=Cg(o),n=Xn(o),n.callback=null,Yn(a,n,o),a=o,t.current.lanes=a,$s(t,a),To(t),e[yi]=t.current,sh(e),new Zc(t)};Wc.version="19.2.8"});var gh=aa((uz,Fv)=>{"use strict";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(e){console.error(e)}}Uv(),Fv.exports=Hv()});var Vv=aa(Kc=>{"use strict";var W4=Symbol.for("react.transitional.element"),K4=Symbol.for("react.fragment");function qv(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:W4,type:e,key:o,ref:t!==void 0?t:null,props:a}}Kc.Fragment=K4;Kc.jsx=qv;Kc.jsxs=qv});var X=aa((cz,Gv)=>{"use strict";Gv.exports=Vv()});var MC=aa(IC=>{"use strict";var Fi=J();function G3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var X3=typeof Object.is=="function"?Object.is:G3,Y3=Fi.useState,j3=Fi.useEffect,Z3=Fi.useLayoutEffect,W3=Fi.useDebugValue;function K3(e,t){var a=t(),o=Y3({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return Z3(function(){n.value=a,n.getSnapshot=t,nx(n)&&r({inst:n})},[e,a,t]),j3(function(){return nx(n)&&r({inst:n}),e(function(){nx(n)&&r({inst:n})})},[e]),W3(a),a}function nx(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!X3(e,a)}catch{return!0}}function $3(e,t){return t()}var Q3=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$3:K3;IC.useSyncExternalStore=Fi.useSyncExternalStore!==void 0?Fi.useSyncExternalStore:Q3});var EC=aa((nH,NC)=>{"use strict";NC.exports=MC()});var AC=aa(TC=>{"use strict";var qf=J(),J3=EC();function eT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tT=typeof Object.is=="function"?Object.is:eT,aT=J3.useSyncExternalStore,oT=qf.useRef,nT=qf.useEffect,rT=qf.useMemo,lT=qf.useDebugValue;TC.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=oT(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=rT(function(){function s(p){if(!u){if(u=!0,d=p,p=o(p),n!==void 0&&l.hasValue){var g=l.value;if(n(g,p))return f=g}return f=p}if(g=f,tT(d,p))return g;var y=o(p);return n!==void 0&&n(g,y)?(d=p,g):(d=p,f=y)}var u=!1,d,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var i=aT(e,r[0],r[1]);return nT(function(){l.hasValue=!0,l.value=i},[i]),lT(i),i}});var DC=aa((lH,RC)=>{"use strict";RC.exports=AC()});var ez={};a5(ez,{mountCanvas:()=>$D,unmountCanvas:()=>JD,updateCanvas:()=>QD});var Wk=R(gh(),1);var ns=R(J(),1);var tt=R(J(),1);var P=R(X()),B=R(J());function rt(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=rt(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var $4={value:()=>{}};function Yv(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new $c(a)}function $c(e){this._=e}function Q4(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}$c.prototype=Yv.prototype={constructor:$c,on:function(e,t){var a=this._,o=Q4(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=J4(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=Xv(a[n],e.name,t);else if(t==null)for(n in a)a[n]=Xv(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new $c(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function J4(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function Xv(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=$4,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var $r=Yv;var Qc="http://www.w3.org/1999/xhtml",hh={svg:"http://www.w3.org/2000/svg",xhtml:Qc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function mn(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),hh.hasOwnProperty(t)?{space:hh[t],local:e}:e}function eN(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===Qc&&t.documentElement.namespaceURI===Qc?t.createElement(e):t.createElementNS(a,e)}}function tN(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Jc(e){var t=mn(e);return(t.local?tN:eN)(t)}function aN(){}function Qr(e){return e==null?aN:function(){return this.querySelector(e)}}function jv(e){typeof e!="function"&&(e=Qr(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,u,d=0;d<l;++d)(s=r[d])&&(u=e.call(s,s.__data__,d,r))&&("__data__"in s&&(u.__data__=s.__data__),i[d]=u);return new lt(o,this._parents)}function xh(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function oN(){return[]}function lu(e){return e==null?oN:function(){return this.querySelectorAll(e)}}function nN(e){return function(){return xh(e.apply(this,arguments))}}function Zv(e){typeof e=="function"?e=nN(e):e=lu(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&(o.push(e.call(s,s.__data__,u,l)),n.push(s));return new lt(o,n)}function iu(e){return function(){return this.matches(e)}}function ef(e){return function(t){return t.matches(e)}}var rN=Array.prototype.find;function lN(e){return function(){return rN.call(this.children,e)}}function iN(){return this.firstElementChild}function Wv(e){return this.select(e==null?iN:lN(typeof e=="function"?e:ef(e)))}var sN=Array.prototype.filter;function uN(){return Array.from(this.children)}function dN(e){return function(){return sN.call(this.children,e)}}function Kv(e){return this.selectAll(e==null?uN:dN(typeof e=="function"?e:ef(e)))}function $v(e){typeof e!="function"&&(e=iu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new lt(o,this._parents)}function tf(e){return new Array(e.length)}function Qv(){return new lt(this._enter||this._groups.map(tf),this._parents)}function su(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}su.prototype={constructor:su,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Jv(e){return function(){return e}}function cN(e,t,a,o,n,r){for(var l=0,i,s=t.length,u=r.length;l<u;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new su(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function fN(e,t,a,o,n,r,l){var i,s,u=new Map,d=t.length,f=r.length,c=new Array(d),p;for(i=0;i<d;++i)(s=t[i])&&(c[i]=p=l.call(s,s.__data__,i,t)+"",u.has(p)?n[i]=s:u.set(p,s));for(i=0;i<f;++i)p=l.call(e,r[i],i,r)+"",(s=u.get(p))?(o[i]=s,s.__data__=r[i],u.delete(p)):a[i]=new su(e,r[i]);for(i=0;i<d;++i)(s=t[i])&&u.get(c[i])===s&&(n[i]=s)}function pN(e){return e.__data__}function e1(e,t){if(!arguments.length)return Array.from(this,pN);var a=t?fN:cN,o=this._parents,n=this._groups;typeof e!="function"&&(e=Jv(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),u=0;u<r;++u){var d=o[u],f=n[u],c=f.length,p=mN(e.call(d,d&&d.__data__,u,o)),g=p.length,y=i[u]=new Array(g),w=l[u]=new Array(g),h=s[u]=new Array(c);a(d,f,y,w,h,p,t);for(var x=0,m=0,b,S;x<g;++x)if(b=y[x]){for(x>=m&&(m=x+1);!(S=w[m])&&++m<g;);b._next=S||null}}return l=new lt(l,o),l._enter=i,l._exit=s,l}function mN(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function t1(){return new lt(this._exit||this._groups.map(tf),this._parents)}function a1(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function o1(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var u=a[s],d=o[s],f=u.length,c=i[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||d[g])&&(c[g]=p);for(;s<n;++s)i[s]=a[s];return new lt(i,this._parents)}function n1(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function r1(e){e||(e=gN);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),u,d=0;d<i;++d)(u=l[d])&&(s[d]=u);s.sort(t)}return new lt(n,this._parents).order()}function gN(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function l1(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function i1(){return Array.from(this)}function s1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function u1(){let e=0;for(let t of this)++e;return e}function d1(){return!this.node()}function c1(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function hN(e){return function(){this.removeAttribute(e)}}function xN(e){return function(){this.removeAttributeNS(e.space,e.local)}}function bN(e,t){return function(){this.setAttribute(e,t)}}function yN(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function wN(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function vN(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function f1(e,t){var a=mn(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?xN:hN:typeof t=="function"?a.local?vN:wN:a.local?yN:bN)(a,t))}function af(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function CN(e){return function(){this.style.removeProperty(e)}}function SN(e,t,a){return function(){this.style.setProperty(e,t,a)}}function LN(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function p1(e,t,a){return arguments.length>1?this.each((t==null?CN:typeof t=="function"?LN:SN)(e,t,a??"")):nr(this.node(),e)}function nr(e,t){return e.style.getPropertyValue(t)||af(e).getComputedStyle(e,null).getPropertyValue(t)}function _N(e){return function(){delete this[e]}}function kN(e,t){return function(){this[e]=t}}function IN(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function m1(e,t){return arguments.length>1?this.each((t==null?_N:typeof t=="function"?IN:kN)(e,t)):this.node()[e]}function g1(e){return e.trim().split(/^|\s+/)}function bh(e){return e.classList||new h1(e)}function h1(e){this._node=e,this._names=g1(e.getAttribute("class")||"")}h1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function x1(e,t){for(var a=bh(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function b1(e,t){for(var a=bh(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function MN(e){return function(){x1(this,e)}}function NN(e){return function(){b1(this,e)}}function EN(e,t){return function(){(t.apply(this,arguments)?x1:b1)(this,e)}}function y1(e,t){var a=g1(e+"");if(arguments.length<2){for(var o=bh(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?EN:t?MN:NN)(a,t))}function TN(){this.textContent=""}function AN(e){return function(){this.textContent=e}}function RN(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function w1(e){return arguments.length?this.each(e==null?TN:(typeof e=="function"?RN:AN)(e)):this.node().textContent}function DN(){this.innerHTML=""}function zN(e){return function(){this.innerHTML=e}}function PN(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function v1(e){return arguments.length?this.each(e==null?DN:(typeof e=="function"?PN:zN)(e)):this.node().innerHTML}function ON(){this.nextSibling&&this.parentNode.appendChild(this)}function C1(){return this.each(ON)}function BN(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function S1(){return this.each(BN)}function L1(e){var t=typeof e=="function"?e:Jc(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function HN(){return null}function _1(e,t){var a=typeof e=="function"?e:Jc(e),o=t==null?HN:typeof t=="function"?t:Qr(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function UN(){var e=this.parentNode;e&&e.removeChild(this)}function k1(){return this.each(UN)}function FN(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function qN(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function I1(e){return this.select(e?qN:FN)}function M1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function VN(e){return function(t){e.call(this,t,this.__data__)}}function GN(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function XN(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function YN(e,t,a){return function(){var o=this.__on,n,r=VN(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function N1(e,t,a){var o=GN(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,u=i.length,d;s<u;++s)for(n=0,d=i[s];n<r;++n)if((l=o[n]).type===d.type&&l.name===d.name)return d.value}return}for(i=t?YN:XN,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function E1(e,t,a){var o=af(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function jN(e,t){return function(){return E1(this,e,t)}}function ZN(e,t){return function(){return E1(this,e,t.apply(this,arguments))}}function T1(e,t){return this.each((typeof t=="function"?ZN:jN)(e,t))}function*A1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var yh=[null];function lt(e,t){this._groups=e,this._parents=t}function R1(){return new lt([[document.documentElement]],yh)}function WN(){return this}lt.prototype=R1.prototype={constructor:lt,select:jv,selectAll:Zv,selectChild:Wv,selectChildren:Kv,filter:$v,data:e1,enter:Qv,exit:t1,join:a1,merge:o1,selection:WN,order:n1,sort:r1,call:l1,nodes:i1,node:s1,size:u1,empty:d1,each:c1,attr:f1,style:p1,property:m1,classed:y1,text:w1,html:v1,raise:C1,lower:S1,append:L1,insert:_1,remove:k1,clone:I1,datum:M1,on:N1,dispatch:T1,[Symbol.iterator]:A1};var gn=R1;function St(e){return typeof e=="string"?new lt([[document.querySelector(e)]],[document.documentElement]):new lt([[e]],yh)}function D1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function jt(e,t){if(e=D1(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var z1={passive:!1},Jr={capture:!0,passive:!1};function of(e){e.stopImmediatePropagation()}function rr(e){e.preventDefault(),e.stopImmediatePropagation()}function uu(e){var t=e.document.documentElement,a=St(e).on("dragstart.drag",rr,Jr);"onselectstart"in t?a.on("selectstart.drag",rr,Jr):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function du(e,t){var a=e.document.documentElement,o=St(e).on("dragstart.drag",null);t&&(o.on("click.drag",rr,Jr),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var cu=e=>()=>e;function fu(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}fu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function KN(e){return!e.ctrlKey&&!e.button}function $N(){return this.parentNode}function QN(e,t){return t??{x:e.x,y:e.y}}function JN(){return navigator.maxTouchPoints||"ontouchstart"in this}function nf(){var e=KN,t=$N,a=QN,o=JN,n={},r=$r("start","drag","end"),l=0,i,s,u,d,f=0;function c(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",h,z1).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,S){if(!(d||!e.call(this,b,S))){var C=m(this,t.call(this,b,S),b,S,"mouse");C&&(St(b.view).on("mousemove.drag",g,Jr).on("mouseup.drag",y,Jr),uu(b.view),of(b),u=!1,i=b.clientX,s=b.clientY,C("start",b))}}function g(b){if(rr(b),!u){var S=b.clientX-i,C=b.clientY-s;u=S*S+C*C>f}n.mouse("drag",b)}function y(b){St(b.view).on("mousemove.drag mouseup.drag",null),du(b.view,u),rr(b),n.mouse("end",b)}function w(b,S){if(e.call(this,b,S)){var C=b.changedTouches,v=t.call(this,b,S),_=C.length,k,T;for(k=0;k<_;++k)(T=m(this,v,b,S,C[k].identifier,C[k]))&&(of(b),T("start",b,C[k]))}}function h(b){var S=b.changedTouches,C=S.length,v,_;for(v=0;v<C;++v)(_=n[S[v].identifier])&&(rr(b),_("drag",b,S[v]))}function x(b){var S=b.changedTouches,C=S.length,v,_;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),v=0;v<C;++v)(_=n[S[v].identifier])&&(of(b),_("end",b,S[v]))}function m(b,S,C,v,_,k){var T=r.copy(),N=jt(k||C,S),U,O,L;if((L=a.call(b,new fu("beforestart",{sourceEvent:C,target:c,identifier:_,active:l,x:N[0],y:N[1],dx:0,dy:0,dispatch:T}),v))!=null)return U=L.x-N[0]||0,O=L.y-N[1]||0,function M(E,I,A){var z=N,V;switch(E){case"start":n[_]=M,V=l++;break;case"end":delete n[_],--l;case"drag":N=jt(A||I,S),V=l;break}T.call(E,b,new fu(E,{sourceEvent:I,subject:L,target:c,identifier:_,active:V,x:N[0]+U,y:N[1]+O,dx:N[0]-z[0],dy:N[1]-z[1],dispatch:T}),v)}}return c.filter=function(b){return arguments.length?(e=typeof b=="function"?b:cu(!!b),c):e},c.container=function(b){return arguments.length?(t=typeof b=="function"?b:cu(b),c):t},c.subject=function(b){return arguments.length?(a=typeof b=="function"?b:cu(b),c):a},c.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:cu(!!b),c):o},c.on=function(){var b=r.on.apply(r,arguments);return b===r?c:b},c.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,c):Math.sqrt(f)},c}function rf(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function wh(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function gu(){}var pu=.7,uf=1/pu,ki="\\s*([+-]?\\d+)\\s*",mu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ao="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",eE=/^#([0-9a-f]{3,8})$/,tE=new RegExp(`^rgb\\(${ki},${ki},${ki}\\)$`),aE=new RegExp(`^rgb\\(${Ao},${Ao},${Ao}\\)$`),oE=new RegExp(`^rgba\\(${ki},${ki},${ki},${mu}\\)$`),nE=new RegExp(`^rgba\\(${Ao},${Ao},${Ao},${mu}\\)$`),rE=new RegExp(`^hsl\\(${mu},${Ao},${Ao}\\)$`),lE=new RegExp(`^hsla\\(${mu},${Ao},${Ao},${mu}\\)$`),P1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};rf(gu,co,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:O1,formatHex:O1,formatHex8:iE,formatHsl:sE,formatRgb:B1,toString:B1});function O1(){return this.rgb().formatHex()}function iE(){return this.rgb().formatHex8()}function sE(){return G1(this).formatHsl()}function B1(){return this.rgb().formatRgb()}function co(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=eE.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?H1(t):a===3?new da(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?lf(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?lf(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=tE.exec(e))?new da(t[1],t[2],t[3],1):(t=aE.exec(e))?new da(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=oE.exec(e))?lf(t[1],t[2],t[3],t[4]):(t=nE.exec(e))?lf(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=rE.exec(e))?q1(t[1],t[2]/100,t[3]/100,1):(t=lE.exec(e))?q1(t[1],t[2]/100,t[3]/100,t[4]):P1.hasOwnProperty(e)?H1(P1[e]):e==="transparent"?new da(NaN,NaN,NaN,0):null}function H1(e){return new da(e>>16&255,e>>8&255,e&255,1)}function lf(e,t,a,o){return o<=0&&(e=t=a=NaN),new da(e,t,a,o)}function uE(e){return e instanceof gu||(e=co(e)),e?(e=e.rgb(),new da(e.r,e.g,e.b,e.opacity)):new da}function Ii(e,t,a,o){return arguments.length===1?uE(e):new da(e,t,a,o??1)}function da(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}rf(da,Ii,wh(gu,{brighter(e){return e=e==null?uf:Math.pow(uf,e),new da(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?pu:Math.pow(pu,e),new da(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new da(tl(this.r),tl(this.g),tl(this.b),df(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:U1,formatHex:U1,formatHex8:dE,formatRgb:F1,toString:F1}));function U1(){return`#${el(this.r)}${el(this.g)}${el(this.b)}`}function dE(){return`#${el(this.r)}${el(this.g)}${el(this.b)}${el((isNaN(this.opacity)?1:this.opacity)*255)}`}function F1(){let e=df(this.opacity);return`${e===1?"rgb(":"rgba("}${tl(this.r)}, ${tl(this.g)}, ${tl(this.b)}${e===1?")":`, ${e})`}`}function df(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function tl(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function el(e){return e=tl(e),(e<16?"0":"")+e.toString(16)}function q1(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new uo(e,t,a,o)}function G1(e){if(e instanceof uo)return new uo(e.h,e.s,e.l,e.opacity);if(e instanceof gu||(e=co(e)),!e)return new uo;if(e instanceof uo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new uo(l,i,s,e.opacity)}function X1(e,t,a,o){return arguments.length===1?G1(e):new uo(e,t,a,o??1)}function uo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}rf(uo,X1,wh(gu,{brighter(e){return e=e==null?uf:Math.pow(uf,e),new uo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pu:Math.pow(pu,e),new uo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new da(vh(e>=240?e-240:e+120,n,o),vh(e,n,o),vh(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new uo(V1(this.h),sf(this.s),sf(this.l),df(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=df(this.opacity);return`${e===1?"hsl(":"hsla("}${V1(this.h)}, ${sf(this.s)*100}%, ${sf(this.l)*100}%${e===1?")":`, ${e})`}`}}));function V1(e){return e=(e||0)%360,e<0?e+360:e}function sf(e){return Math.max(0,Math.min(1,e||0))}function vh(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Ch(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function Y1(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return Ch((a-o/t)*t,l,n,r,i)}}function j1(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return Ch((a-o/t)*t,n,r,l,i)}}var hu=e=>()=>e;function cE(e,t){return function(a){return e+a*t}}function fE(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function Z1(e){return(e=+e)==1?cf:function(t,a){return a-t?fE(t,a,e):hu(isNaN(t)?a:t)}}function cf(e,t){var a=t-e;return a?cE(e,a):hu(isNaN(e)?t:e)}var al=(function e(t){var a=Z1(t);function o(n,r){var l=a((n=Ii(n)).r,(r=Ii(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),u=cf(n.opacity,r.opacity);return function(d){return n.r=l(d),n.g=i(d),n.b=s(d),n.opacity=u(d),n+""}}return o.gamma=e,o})(1);function W1(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=Ii(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var pE=W1(Y1),mE=W1(j1);function K1(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function $1(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Q1(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=hn(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function J1(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Zt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function e2(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=hn(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Lh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Sh=new RegExp(Lh.source,"g");function gE(e){return function(){return e}}function hE(e){return function(t){return e(t)+""}}function xu(e,t){var a=Lh.lastIndex=Sh.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=Lh.exec(e))&&(n=Sh.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:Zt(o,n)})),a=Sh.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?hE(s[0].x):gE(t):(t=s.length,function(u){for(var d=0,f;d<t;++d)i[(f=s[d]).i]=f.x(u);return i.join("")})}function hn(e,t){var a=typeof t,o;return t==null||a==="boolean"?hu(t):(a==="number"?Zt:a==="string"?(o=co(t))?(t=o,al):xu:t instanceof co?al:t instanceof Date?J1:$1(t)?K1:Array.isArray(t)?Q1:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?e2:Zt)(e,t)}var t2=180/Math.PI,ff={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function _h(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*t2,skewX:Math.atan(s)*t2,scaleX:l,scaleY:i}}var pf;function a2(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?ff:_h(t.a,t.b,t.c,t.d,t.e,t.f)}function o2(e){return e==null?ff:(pf||(pf=document.createElementNS("http://www.w3.org/2000/svg","g")),pf.setAttribute("transform",e),(e=pf.transform.baseVal.consolidate())?(e=e.matrix,_h(e.a,e.b,e.c,e.d,e.e,e.f)):ff)}function n2(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,d,f,c,p,g){if(u!==f||d!==c){var y=p.push("translate(",null,t,null,a);g.push({i:y-4,x:Zt(u,f)},{i:y-2,x:Zt(d,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function l(u,d,f,c){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Zt(u,d)})):d&&f.push(n(f)+"rotate("+d+o)}function i(u,d,f,c){u!==d?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Zt(u,d)}):d&&f.push(n(f)+"skewX("+d+o)}function s(u,d,f,c,p,g){if(u!==f||d!==c){var y=p.push(n(p)+"scale(",null,",",null,")");g.push({i:y-4,x:Zt(u,f)},{i:y-2,x:Zt(d,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(u,d){var f=[],c=[];return u=e(u),d=e(d),r(u.translateX,u.translateY,d.translateX,d.translateY,f,c),l(u.rotate,d.rotate,f,c),i(u.skewX,d.skewX,f,c),s(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,c),u=d=null,function(p){for(var g=-1,y=c.length,w;++g<y;)f[(w=c[g]).i]=w.x(p);return f.join("")}}}var kh=n2(a2,"px, ","px)","deg)"),Ih=n2(o2,", ",")",")");var xE=1e-12;function r2(e){return((e=Math.exp(e))+1/e)/2}function bE(e){return((e=Math.exp(e))-1/e)/2}function yE(e){return((e=Math.exp(2*e))-1)/(e+1)}var ol=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],u=r[2],d=l[0],f=l[1],c=l[2],p=d-i,g=f-s,y=p*p+g*g,w,h;if(y<xE)h=Math.log(c/u)/t,w=function(v){return[i+v*p,s+v*g,u*Math.exp(t*v*h)]};else{var x=Math.sqrt(y),m=(c*c-u*u+o*y)/(2*u*a*x),b=(c*c-u*u-o*y)/(2*c*a*x),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(b*b+1)-b);h=(C-S)/t,w=function(v){var _=v*h,k=r2(S),T=u/(a*x)*(k*yE(t*_+S)-bE(S));return[i+T*p,s+T*g,u*k/r2(t*_+S)]}}return w.duration=h*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var Mi=0,yu=0,bu=0,i2=1e3,mf,wu,gf=0,nl=0,hf=0,vu=typeof performance=="object"&&performance.now?performance:Date,s2=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Su(){return nl||(s2(wE),nl=vu.now()+hf)}function wE(){nl=0}function Cu(){this._call=this._time=this._next=null}Cu.prototype=xf.prototype={constructor:Cu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?Su():+a)+(t==null?0:+t),!this._next&&wu!==this&&(wu?wu._next=this:mf=this,wu=this),this._call=e,this._time=a,Mh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Mh())}};function xf(e,t,a){var o=new Cu;return o.restart(e,t,a),o}function u2(){Su(),++Mi;for(var e=mf,t;e;)(t=nl-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Mi}function l2(){nl=(gf=vu.now())+hf,Mi=yu=0;try{u2()}finally{Mi=0,CE(),nl=0}}function vE(){var e=vu.now(),t=e-gf;t>i2&&(hf-=t,gf=e)}function CE(){for(var e,t=mf,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:mf=a);wu=e,Mh(o)}function Mh(e){if(!Mi){yu&&(yu=clearTimeout(yu));var t=e-nl;t>24?(e<1/0&&(yu=setTimeout(l2,e-vu.now()-hf)),bu&&(bu=clearInterval(bu))):(bu||(gf=vu.now(),bu=setInterval(vE,i2)),Mi=1,s2(l2))}}function bf(e,t,a){var o=new Cu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var SE=$r("start","end","cancel","interrupt"),LE=[],f2=0,d2=1,wf=2,yf=3,c2=4,vf=5,Lu=6;function lr(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;_E(e,a,{name:t,index:o,group:n,on:SE,tween:LE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:f2})}function _u(e,t){var a=yt(e,t);if(a.state>f2)throw new Error("too late; already scheduled");return a}function Dt(e,t){var a=yt(e,t);if(a.state>yf)throw new Error("too late; already running");return a}function yt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function _E(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=xf(r,0,a.time);function r(u){a.state=d2,a.timer.restart(l,a.delay,a.time),a.delay<=u&&l(u-a.delay)}function l(u){var d,f,c,p;if(a.state!==d2)return s();for(d in o)if(p=o[d],p.name===a.name){if(p.state===yf)return bf(l);p.state===c2?(p.state=Lu,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=Lu,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(bf(function(){a.state===yf&&(a.state=c2,a.timer.restart(i,a.delay,a.time),i(u))}),a.state=wf,a.on.call("start",e,e.__data__,a.index,a.group),a.state===wf){for(a.state=yf,n=new Array(c=a.tween.length),d=0,f=-1;d<c;++d)(p=a.tween[d].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function i(u){for(var d=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=vf,1),f=-1,c=n.length;++f<c;)n[f].call(e,d);a.state===vf&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=Lu,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function rl(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>wf&&o.state<vf,o.state=Lu,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function p2(e){return this.each(function(){rl(this,e)})}function kE(e,t){var a,o;return function(){var n=Dt(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function IE(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=Dt(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=i;break}s===u&&n.push(i)}r.tween=n}}function m2(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=yt(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?kE:IE)(a,e,t))}function Ni(e,t,a){var o=e._id;return e.each(function(){var n=Dt(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return yt(n,o).value[t]}}function Cf(e,t){var a;return(typeof t=="number"?Zt:t instanceof co?al:(a=co(t))?(t=a,al):xu)(e,t)}function ME(e){return function(){this.removeAttribute(e)}}function NE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function EE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function TE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function AE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function RE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function g2(e,t){var a=mn(e),o=a==="transform"?Ih:Cf;return this.attrTween(e,typeof t=="function"?(a.local?RE:AE)(a,o,Ni(this,"attr."+e,t)):t==null?(a.local?NE:ME)(a):(a.local?TE:EE)(a,o,t))}function DE(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function zE(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function PE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&zE(e,r)),a}return n._value=t,n}function OE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&DE(e,r)),a}return n._value=t,n}function h2(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=mn(e);return this.tween(a,(o.local?PE:OE)(o,t))}function BE(e,t){return function(){_u(this,e).delay=+t.apply(this,arguments)}}function HE(e,t){return t=+t,function(){_u(this,e).delay=t}}function x2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?BE:HE)(t,e)):yt(this.node(),t).delay}function UE(e,t){return function(){Dt(this,e).duration=+t.apply(this,arguments)}}function FE(e,t){return t=+t,function(){Dt(this,e).duration=t}}function b2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?UE:FE)(t,e)):yt(this.node(),t).duration}function qE(e,t){if(typeof t!="function")throw new Error;return function(){Dt(this,e).ease=t}}function y2(e){var t=this._id;return arguments.length?this.each(qE(t,e)):yt(this.node(),t).ease}function VE(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;Dt(this,e).ease=a}}function w2(e){if(typeof e!="function")throw new Error;return this.each(VE(this._id,e))}function v2(e){typeof e!="function"&&(e=iu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new Wt(o,this._parents,this._name,this._id)}function C2(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],u=a[i],d=s.length,f=l[i]=new Array(d),c,p=0;p<d;++p)(c=s[p]||u[p])&&(f[p]=c);for(;i<o;++i)l[i]=t[i];return new Wt(l,this._parents,this._name,this._id)}function GE(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function XE(e,t,a){var o,n,r=GE(t)?_u:Dt;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function S2(e,t){var a=this._id;return arguments.length<2?yt(this.node(),a).on.on(e):this.each(XE(a,e,t))}function YE(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function L2(){return this.on("end.remove",YE(this._id))}function _2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=Qr(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,u=r[l]=new Array(s),d,f,c=0;c<s;++c)(d=i[c])&&(f=e.call(d,d.__data__,c,i))&&("__data__"in d&&(f.__data__=d.__data__),u[c]=f,lr(u[c],t,a,c,u,yt(d,a)));return new Wt(r,this._parents,t,a)}function k2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=lu(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],u=s.length,d,f=0;f<u;++f)if(d=s[f]){for(var c=e.call(d,d.__data__,f,s),p,g=yt(d,a),y=0,w=c.length;y<w;++y)(p=c[y])&&lr(p,t,a,y,c,g);r.push(c),l.push(d)}return new Wt(r,l,t,a)}var jE=gn.prototype.constructor;function I2(){return new jE(this._groups,this._parents)}function ZE(e,t){var a,o,n;return function(){var r=nr(this,e),l=(this.style.removeProperty(e),nr(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function M2(e){return function(){this.style.removeProperty(e)}}function WE(e,t,a){var o,n=a+"",r;return function(){var l=nr(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function KE(e,t,a){var o,n,r;return function(){var l=nr(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),nr(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function $E(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=Dt(this,e),u=s.on,d=s.value[r]==null?i||(i=M2(t)):void 0;(u!==a||n!==d)&&(o=(a=u).copy()).on(l,n=d),s.on=o}}function N2(e,t,a){var o=(e+="")=="transform"?kh:Cf;return t==null?this.styleTween(e,ZE(e,o)).on("end.style."+e,M2(e)):typeof t=="function"?this.styleTween(e,KE(e,o,Ni(this,"style."+e,t))).each($E(this._id,e)):this.styleTween(e,WE(e,o,t),a).on("end.style."+e,null)}function QE(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function JE(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&QE(e,l,a)),o}return r._value=t,r}function E2(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,JE(e,t,a??""))}function e3(e){return function(){this.textContent=e}}function t3(e){return function(){var t=e(this);this.textContent=t??""}}function T2(e){return this.tween("text",typeof e=="function"?t3(Ni(this,"text",e)):e3(e==null?"":e+""))}function a3(e){return function(t){this.textContent=e.call(this,t)}}function o3(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&a3(n)),t}return o._value=e,o}function A2(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,o3(e))}function R2(){for(var e=this._name,t=this._id,a=Sf(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)if(s=l[u]){var d=yt(s,t);lr(s,e,a,u,l,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Wt(o,this._parents,e,a)}function D2(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var u=Dt(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),u.on=t}),n===0&&r()})}var n3=0;function Wt(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function z2(e){return gn().transition(e)}function Sf(){return++n3}var xn=gn.prototype;Wt.prototype=z2.prototype={constructor:Wt,select:_2,selectAll:k2,selectChild:xn.selectChild,selectChildren:xn.selectChildren,filter:v2,merge:C2,selection:I2,transition:R2,call:xn.call,nodes:xn.nodes,node:xn.node,size:xn.size,empty:xn.empty,each:xn.each,on:S2,attr:g2,attrTween:h2,style:N2,styleTween:E2,text:T2,textTween:A2,remove:L2,tween:m2,delay:x2,duration:b2,ease:y2,easeVarying:w2,end:D2,[Symbol.iterator]:xn[Symbol.iterator]};function Lf(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var r3={time:null,delay:0,duration:250,ease:Lf};function l3(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function P2(e){var t,a;e instanceof Wt?(t=e._id,e=e._name):(t=Sf(),(a=r3).time=Su(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&lr(s,e,t,u,l,a||l3(s,t));return new Wt(o,this._parents,e,t)}gn.prototype.interrupt=p2;gn.prototype.transition=P2;var ku=e=>()=>e;function Nh(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function fo(e,t,a){this.k=e,this.x=t,this.y=a}fo.prototype={constructor:fo,scale:function(e){return e===1?this:new fo(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new fo(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ll=new fo(1,0,0);Iu.prototype=fo.prototype;function Iu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return ll;return e.__zoom}function _f(e){e.stopImmediatePropagation()}function Ei(e){e.preventDefault(),e.stopImmediatePropagation()}function i3(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function s3(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function O2(){return this.__zoom||ll}function u3(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function d3(){return navigator.maxTouchPoints||"ontouchstart"in this}function c3(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function kf(){var e=i3,t=s3,a=c3,o=u3,n=d3,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=ol,u=$r("start","zoom","end"),d,f,c,p=500,g=150,y=0,w=10;function h(L){L.property("__zoom",O2).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",k).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",N).on("touchmove.zoom",U).on("touchend.zoom touchcancel.zoom",O).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,M,E,I){var A=L.selection?L.selection():L;A.property("__zoom",O2),L!==A?S(L,M,E,I):A.interrupt().each(function(){C(this,arguments).event(I).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},h.scaleBy=function(L,M,E,I){h.scaleTo(L,function(){var A=this.__zoom.k,z=typeof M=="function"?M.apply(this,arguments):M;return A*z},E,I)},h.scaleTo=function(L,M,E,I){h.transform(L,function(){var A=t.apply(this,arguments),z=this.__zoom,V=E==null?b(A):typeof E=="function"?E.apply(this,arguments):E,D=z.invert(V),F=typeof M=="function"?M.apply(this,arguments):M;return a(m(x(z,F),V,D),A,l)},E,I)},h.translateBy=function(L,M,E,I){h.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),l)},null,I)},h.translateTo=function(L,M,E,I,A){h.transform(L,function(){var z=t.apply(this,arguments),V=this.__zoom,D=I==null?b(z):typeof I=="function"?I.apply(this,arguments):I;return a(ll.translate(D[0],D[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof E=="function"?-E.apply(this,arguments):-E),z,l)},I,A)};function x(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new fo(M,L.x,L.y)}function m(L,M,E){var I=M[0]-E[0]*L.k,A=M[1]-E[1]*L.k;return I===L.x&&A===L.y?L:new fo(L.k,I,A)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function S(L,M,E,I){L.on("start.zoom",function(){C(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(I).end()}).tween("zoom",function(){var A=this,z=arguments,V=C(A,z).event(I),D=t.apply(A,z),F=E==null?b(D):typeof E=="function"?E.apply(A,z):E,Z=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),K=A.__zoom,W=typeof M=="function"?M.apply(A,z):M,ne=s(K.invert(F).concat(Z/K.k),W.invert(F).concat(Z/W.k));return function(ee){if(ee===1)ee=W;else{var q=ne(ee),Y=Z/q[2];ee=new fo(Y,F[0]-q[0]*Y,F[1]-q[1]*Y)}V.zoom(null,ee)}})}function C(L,M,E){return!E&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=St(this.that).datum();u.call(L,this.that,new Nh(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var E=C(this,M).event(L),I=this.__zoom,A=Math.max(r[0],Math.min(r[1],I.k*Math.pow(2,o.apply(this,arguments)))),z=jt(L);if(E.wheel)(E.mouse[0][0]!==z[0]||E.mouse[0][1]!==z[1])&&(E.mouse[1]=I.invert(E.mouse[0]=z)),clearTimeout(E.wheel);else{if(I.k===A)return;E.mouse=[z,I.invert(z)],rl(this),E.start()}Ei(L),E.wheel=setTimeout(V,g),E.zoom("mouse",a(m(x(I,A),E.mouse[0],E.mouse[1]),E.extent,l));function V(){E.wheel=null,E.end()}}function k(L,...M){if(c||!e.apply(this,arguments))return;var E=L.currentTarget,I=C(this,M,!0).event(L),A=St(L.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",Z,!0),z=jt(L,E),V=L.clientX,D=L.clientY;uu(L.view),_f(L),I.mouse=[z,this.__zoom.invert(z)],rl(this),I.start();function F(K){if(Ei(K),!I.moved){var W=K.clientX-V,ne=K.clientY-D;I.moved=W*W+ne*ne>y}I.event(K).zoom("mouse",a(m(I.that.__zoom,I.mouse[0]=jt(K,E),I.mouse[1]),I.extent,l))}function Z(K){A.on("mousemove.zoom mouseup.zoom",null),du(K.view,I.moved),Ei(K),I.event(K).end()}}function T(L,...M){if(e.apply(this,arguments)){var E=this.__zoom,I=jt(L.changedTouches?L.changedTouches[0]:L,this),A=E.invert(I),z=E.k*(L.shiftKey?.5:2),V=a(m(x(E,z),I,A),t.apply(this,M),l);Ei(L),i>0?St(this).transition().duration(i).call(S,V,I,L):St(this).call(h.transform,V,I,L)}}function N(L,...M){if(e.apply(this,arguments)){var E=L.touches,I=E.length,A=C(this,M,L.changedTouches.length===I).event(L),z,V,D,F;for(_f(L),V=0;V<I;++V)D=E[V],F=jt(D,this),F=[F,this.__zoom.invert(F),D.identifier],A.touch0?!A.touch1&&A.touch0[2]!==F[2]&&(A.touch1=F,A.taps=0):(A.touch0=F,z=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),z&&(A.taps<2&&(f=F[0],d=setTimeout(function(){d=null},p)),rl(this),A.start())}}function U(L,...M){if(this.__zooming){var E=C(this,M).event(L),I=L.changedTouches,A=I.length,z,V,D,F;for(Ei(L),z=0;z<A;++z)V=I[z],D=jt(V,this),E.touch0&&E.touch0[2]===V.identifier?E.touch0[0]=D:E.touch1&&E.touch1[2]===V.identifier&&(E.touch1[0]=D);if(V=E.that.__zoom,E.touch1){var Z=E.touch0[0],K=E.touch0[1],W=E.touch1[0],ne=E.touch1[1],ee=(ee=W[0]-Z[0])*ee+(ee=W[1]-Z[1])*ee,q=(q=ne[0]-K[0])*q+(q=ne[1]-K[1])*q;V=x(V,Math.sqrt(ee/q)),D=[(Z[0]+W[0])/2,(Z[1]+W[1])/2],F=[(K[0]+ne[0])/2,(K[1]+ne[1])/2]}else if(E.touch0)D=E.touch0[0],F=E.touch0[1];else return;E.zoom("touch",a(m(V,D,F),E.extent,l))}}function O(L,...M){if(this.__zooming){var E=C(this,M).event(L),I=L.changedTouches,A=I.length,z,V;for(_f(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),z=0;z<A;++z)V=I[z],E.touch0&&E.touch0[2]===V.identifier?delete E.touch0:E.touch1&&E.touch1[2]===V.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(V=jt(V,this),Math.hypot(f[0]-V[0],f[1]-V[1])<w)){var D=St(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:ku(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:ku(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:ku(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:ku([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],h):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(i=+L,h):i},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(y=(L=+L)*L,h):Math.sqrt(y)},h.tapDistance=function(L){return arguments.length?(w=+L,h):w},h}var Ma={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Di=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Dh=["Enter"," ","Escape"],zh={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},dr;(function(e){e.Strict="strict",e.Loose="loose"})(dr||(dr={}));var po;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(po||(po={}));var bn;(function(e){e.Partial="partial",e.Full="full"})(bn||(bn={}));var Ph={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},Ro;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Ro||(Ro={}));var Ai;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ai||(Ai={}));var ae;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ae||(ae={}));var B2={[ae.Left]:ae.Right,[ae.Right]:ae.Left,[ae.Top]:ae.Bottom,[ae.Bottom]:ae.Top};function Oh(e){return e===null?null:e?"valid":"invalid"}var Bh=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,$2=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Hh=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Uh=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Nu=(e,t=[0,0])=>{let{width:a,height:o}=$a(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Fh=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):Hh(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,Af(n,Nf(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Rf(o):{x:0,y:0,width:0,height:0}},zi=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Af(a,Nf(n)),o=!0)}),o?Rf(a):{x:0,y:0,width:0,height:0}},Ef=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,d=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:y=!1}=c;if(l&&!g||y)continue;let w=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x,y:m}=c.internals.positionAbsolute,b=aC(i,s,u,d,x,m,w,h),S=w*h,C=r&&b>0;(!c.internals.handleBounds||C||b>=S||c.dragging)&&f.push(c)}return f},Q2=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function f3(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=$a(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function J2({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=f3(e,l),s=zi(i),u=Tu(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(u,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function qh({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:u}=i?i.internals.positionAbsolute:{x:0,y:0},d=l.origin??o,f=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",Ma.error005());else{let{width:p,height:g}=$a(i);p&&g&&(f=[[s,u],[s+p,u+g]])}else i&&ul(l.extent)&&(f=[[l.extent[0][0]+s,l.extent[0][1]+u],[l.extent[1][0]+s,l.extent[1][1]+u]]);let c=ul(f)?il(t,f,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",Ma.error015()),{position:{x:c.x-s+(l.measured.width??0)*d[0],y:c.y-u+(l.measured.height??0)*d[1]},positionAbsolute:c}}async function eC({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),l=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&l.find(y=>y.id===c.parentId);(p||g)&&l.push(c)}let i=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),d=Q2(l,s);for(let c of s)i.has(c.id)&&!d.find(g=>g.id===c.id)&&d.push(c);if(!n)return{edges:d,nodes:l};let f=await n({nodes:l,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:l}:{edges:[],nodes:[]}:f}var Ri=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),il=(e={x:0,y:0},t,a)=>({x:Ri(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Ri(e.y,t[0][1],t[1][1]-(a?.height??0))});function tC(e,t,a){let{width:o,height:n}=$a(a),{x:r,y:l}=a.internals.positionAbsolute;return il(e,[[r,l],[r+o,l+n]],t)}var H2=(e,t,a)=>e<t?Ri(Math.abs(e-t),1,t)/t:e>a?-Ri(Math.abs(e-a),1,t)/t:0,Tf=(e,t,a=15,o=40)=>{let n=H2(e.x,o,t.width-o)*a,r=H2(e.y,o,t.height-o)*a;return[n,r]},Af=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Rh=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Rf=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Pi=(e,t=[0,0])=>{let{x:a,y:o}=Hh(e)?e.internals.positionAbsolute:Nu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Nf=(e,t=[0,0])=>{let{x:a,y:o}=Hh(e)?e.internals.positionAbsolute:Nu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Vh=(e,t)=>Rf(Af(Rh(e),Rh(t))),aC=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*u)},Eu=(e,t)=>aC(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Gh=e=>Wa(e.width)&&Wa(e.height)&&Wa(e.x)&&Wa(e.y),Wa=e=>!isNaN(e)&&isFinite(e),Xh=(e,t)=>(a,o)=>{},Oi=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Bi=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?Oi(i,l):i},sl=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Ti(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function p3(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Ti(e,a),n=Ti(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Ti(e.top??e.y??0,a),n=Ti(e.bottom??e.y??0,a),r=Ti(e.left??e.x??0,t),l=Ti(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function m3(e,t,a,o,n,r){let{x:l,y:i}=sl(e,[t,a,o]),{x:s,y:u}=sl({x:e.x+e.width,y:e.y+e.height},[t,a,o]),d=n-s,f=r-u;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(d),bottom:Math.floor(f)}}var Tu=(e,t,a,o,n,r)=>{let l=p3(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,u=Math.min(i,s),d=Ri(u,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*d,g=a/2-c*d,y=m3(e,p,g,d,t,a),w={left:Math.min(y.left-l.left,0),top:Math.min(y.top-l.top,0),right:Math.min(y.right-l.right,0),bottom:Math.min(y.bottom-l.bottom,0)};return{x:p-w.left+w.right,y:g-w.top+w.bottom,zoom:d}},Hi=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function ul(e){return e!=null&&e!=="parent"}function $a(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Yh(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function jh(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function Zh(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function oC(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function nC(e){return{...zh,...e||{}}}function Mu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=Ka(e),i=Bi({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:u}=a?Oi(i,t):i;return{xSnapped:s,ySnapped:u,...i}}var Df=e=>({width:e.offsetWidth,height:e.offsetHeight}),Wh=e=>e?.getRootNode?.()||window?.document,g3=["INPUT","SELECT","TEXTAREA"];function Kh(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:g3.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var $h=e=>"clientX"in e,Ka=(e,t)=>{let a=$h(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},U2=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,...Df(l)}})};function zf({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,u=t*.125+r*.375+i*.375+o*.125,d=Math.abs(s-e),f=Math.abs(u-t);return[s,u,d,f]}function If(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function F2({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ae.Left:return[t-If(t-o,r),a];case ae.Right:return[t+If(o-t,r),a];case ae.Top:return[t,a-If(a-n,r)];case ae.Bottom:return[t,a+If(n-a,r)]}}function Ui({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,curvature:l=.25}){let[i,s]=F2({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[u,d]=F2({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[f,c,p,g]=zf({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:u,targetControlY:d});return[`M${e},${t} C${i},${s} ${u},${d} ${o},${n}`,f,c,p,g]}function Qh({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function rC({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function lC({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Af(Nf(e),Nf(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Eu(l,Rf(r))>0}var h3=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,x3=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),iC=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Ma.error006()),t;let o=a.getEdgeId||h3,n;return Bh(e)?n={...e}:n={...e,id:o(e)},x3(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Pf({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=Qh({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var q2={[ae.Left]:{x:-1,y:0},[ae.Right]:{x:1,y:0},[ae.Top]:{x:0,y:-1},[ae.Bottom]:{x:0,y:1}},b3=({source:e,sourcePosition:t=ae.Bottom,target:a})=>t===ae.Left||t===ae.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},V2=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function y3({source:e,sourcePosition:t=ae.Bottom,target:a,targetPosition:o=ae.Top,center:n,offset:r,stepPosition:l}){let i=q2[t],s=q2[o],u={x:e.x+i.x*r,y:e.y+i.y*r},d={x:a.x+s.x*r,y:a.y+s.y*r},f=b3({source:u,sourcePosition:t,target:d}),c=f.x!==0?"x":"y",p=f[c],g=[],y,w,h={x:0,y:0},x={x:0,y:0},[,,m,b]=Qh({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[c]*s[c]===-1){c==="x"?(y=n.x??u.x+(d.x-u.x)*l,w=n.y??(u.y+d.y)/2):(y=n.x??(u.x+d.x)/2,w=n.y??u.y+(d.y-u.y)*l);let _=[{x:y,y:u.y},{x:y,y:d.y}],k=[{x:u.x,y:w},{x:d.x,y:w}];i[c]===p?g=c==="x"?_:k:g=c==="x"?k:_}else{let _=[{x:u.x,y:d.y}],k=[{x:d.x,y:u.y}];if(c==="x"?g=i.x===p?k:_:g=i.y===p?_:k,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let M=Math.min(r-1,r-L);i[c]===p?h[c]=(u[c]>e[c]?-1:1)*M:x[c]=(d[c]>a[c]?-1:1)*M}}if(t!==o){let L=c==="x"?"y":"x",M=i[c]===s[L],E=u[L]>d[L],I=u[L]<d[L];(i[c]===1&&(!M&&E||M&&I)||i[c]!==1&&(!M&&I||M&&E))&&(g=c==="x"?_:k)}let T={x:u.x+h.x,y:u.y+h.y},N={x:d.x+x.x,y:d.y+x.y},U=Math.max(Math.abs(T.x-g[0].x),Math.abs(N.x-g[0].x)),O=Math.max(Math.abs(T.y-g[0].y),Math.abs(N.y-g[0].y));U>=O?(y=(T.x+N.x)/2,w=g[0].y):(y=g[0].x,w=(T.y+N.y)/2)}let S={x:u.x+h.x,y:u.y+h.y},C={x:d.x+x.x,y:d.y+x.y};return[[e,...S.x!==g[0].x||S.y!==g[0].y?[S]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],y,w,m,b]}function w3(e,t,a,o){let n=Math.min(V2(e,t)/2,V2(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let u=e.x<a.x?-1:1,d=e.y<a.y?1:-1;return`L ${r+n*u},${l}Q ${r},${l} ${r},${l+n*d}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function Au({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,borderRadius:l=5,centerX:i,centerY:s,offset:u=20,stepPosition:d=.5}){let[f,c,p,g,y]=y3({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:u,stepPosition:d}),w=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)w+=w3(f[h-1],f[h],f[h+1],l);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,c,p,g,y]}function G2(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function sC(e){let{sourceNode:t,targetNode:a}=e;if(!G2(t)||!G2(a))return null;let o=t.internals.handleBounds||X2(t.handles),n=a.internals.handleBounds||X2(a.handles),r=Y2(o?.source??[],e.sourceHandle),l=Y2(e.connectionMode===dr.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",Ma.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||ae.Bottom,s=l?.position||ae.Top,u=cr(t,r,i),d=cr(a,l,s);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:i,targetPosition:s}}function X2(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function cr(e,t,a=ae.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??$a(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case ae.Top:return{x:n+l/2,y:r};case ae.Right:return{x:n+l,y:r+i/2};case ae.Bottom:return{x:n+l/2,y:r+i};case ae.Left:return{x:n,y:r+i/2}}}function Y2(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Of(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function uC(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Of(s,t);r.has(u)||(l.push({id:u,color:s.color||a,...s}),r.add(u))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var dC=1e3,v3=10,Jh={nodeOrigin:[0,0],nodeExtent:Di,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},C3={...Jh,checkEquality:!0};function ex(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function cC(e,t,a){let o=ex(Jh,a);for(let n of e.values())if(n.parentId)ax(n,e,t,o);else{let r=Nu(n,o.nodeOrigin),l=ul(n.extent)?n.extent:o.nodeExtent,i=il(r,l,$a(n));n.internals.positionAbsolute=i}}function S3(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function tx(e){return e==="manual"}function Bf(e,t,a,o={}){let n=ex(C3,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!tx(n.zIndexMode)?dC:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let d of e){let f=l.get(d.id);if(n.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let c=Nu(d,n.nodeOrigin),p=ul(d.extent)?d.extent:n.nodeExtent,g=il(c,p,$a(d));f={...n.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:g,handleBounds:S3(d,f),z:fC(d,i,n.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),d.parentId&&ax(f,t,a,o,r),u||(u=d.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function L3(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function ax(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=ex(Jh,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}L3(e,a),n&&!d.parentId&&d.internals.rootParentIndex===void 0&&s==="auto"&&(d.internals.rootParentIndex=++n.i,d.internals.z=d.internals.z+n.i*v3),n&&d.internals.rootParentIndex!==void 0&&(n.i=d.internals.rootParentIndex);let f=r&&!tx(s)?dC:0,{x:c,y:p,z:g}=_3(e,d,l,i,f,s),{positionAbsolute:y}=e.internals,w=c!==y.x||p!==y.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:c,y:p}:y,z:g}})}function fC(e,t,a){let o=Wa(e.zIndex)?e.zIndex:0;return tx(a)?o:o+(e.selected?t:0)}function _3(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=$a(e),u=Nu(e,a),d=ul(e.extent)?il(u,e.extent,s):u,f=il({x:l+d.x,y:i+d.y},o,s);e.extent==="parent"&&(f=tC(f,s,t));let c=fC(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Hf(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??Pi(i),u=Vh(s,l.rect);r.set(l.parentId,{expandedRect:u,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let u=i.internals.positionAbsolute,d=$a(i),f=i.origin??o,c=l.x<u.x?Math.round(Math.abs(u.x-l.x)):0,p=l.y<u.y?Math.round(Math.abs(u.y-l.y)):0,g=Math.max(d.width,Math.round(l.width)),y=Math.max(d.height,Math.round(l.height)),w=(g-d.width)*f[0],h=(y-d.height)*f[1];(c>0||p>0||w||h)&&(n.push({id:s,type:"position",position:{x:i.position.x-c+w,y:i.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+c,y:x.position.y+p}})})),(d.width<l.width||d.height<l.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-w:0),height:y+(p?f[1]*p-h:0)}})}),n}function pC(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let u=[],d=window.getComputedStyle(i),{m22:f}=new window.DOMMatrixReadOnly(d.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let y=Df(p.nodeElement),w=g.measured.width!==y.width||g.measured.height!==y.height;if(!!(y.width&&y.height&&(w||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=ul(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(b=tC(b,y,C))}else m&&(b=il(b,m,y));let S={...g,measured:y,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:U2("source",p.nodeElement,x,f,g.id),target:U2("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,S),g.parentId&&ax(S,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(u.push({id:g.id,type:"dimensions",dimensions:y}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:Pi(S,n)}))}}if(c.length>0){let p=Hf(c,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function mC({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function j2(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let u=o.get(l)||new Map;o.set(l,u.set(a,t))}}function ox(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},u=`${n}-${l}--${r}-${i}`,d=`${r}-${i}--${n}-${l}`;j2("source",s,d,e,n,l),j2("target",s,u,e,r,i),t.set(o.id,o)}}function gC(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:gC(a,t):!1}function Z2(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function k3(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!gC(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function Eh({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function I3({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=Oi(r,t);return{x:l.x-r.x,y:l.y-r.y}}function hC({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,u={x:0,y:0},d=null,f=!1,c=null,p=!1,g=!1,y=null;function w({noDragClassName:x,handleSelector:m,domNode:b,isSelectable:S,nodeId:C,nodeClickDistance:v=0}){c=St(b);function _({x:U,y:O}){let{nodeLookup:L,nodeExtent:M,snapGrid:E,snapToGrid:I,nodeOrigin:A,onNodeDrag:z,onSelectionDrag:V,onError:D,updateNodePositions:F}=t();r={x:U,y:O};let Z=!1,K=i.size>1,W=K&&M?Rh(zi(i)):null,ne=K&&I?I3({dragItems:i,snapGrid:E,x:U,y:O}):null;for(let[ee,q]of i){if(!L.has(ee))continue;let Y={x:U-q.distance.x,y:O-q.distance.y};I&&(Y=ne?{x:Math.round(Y.x+ne.x),y:Math.round(Y.y+ne.y)}:Oi(Y,E));let re=null;if(K&&M&&!q.extent&&W){let{positionAbsolute:oe}=q.internals,be=oe.x-W.x+M[0][0],we=oe.x+q.measured.width-W.x2+M[1][0],j=oe.y-W.y+M[0][1],me=oe.y+q.measured.height-W.y2+M[1][1];re=[[be,j],[we,me]]}let{position:se,positionAbsolute:te}=qh({nodeId:ee,nextPosition:Y,nodeLookup:L,nodeExtent:re||M,nodeOrigin:A,onError:D});Z=Z||q.position.x!==se.x||q.position.y!==se.y,q.position=se,q.internals.positionAbsolute=te}if(g=g||Z,!!Z&&(F(i,!0),y&&(o||z||!C&&V))){let[ee,q]=Eh({nodeId:C,dragItems:i,nodeLookup:L});o?.(y,i,ee,q),z?.(y,ee,q),C||V?.(y,q)}}async function k(){if(!d)return;let{transform:U,panBy:O,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[E,I]=Tf(u,d,L);(E!==0||I!==0)&&(r.x=(r.x??0)-E/U[2],r.y=(r.y??0)-I/U[2],await O({x:E,y:I})&&_(r)),l=requestAnimationFrame(k)}function T(U){let{nodeLookup:O,multiSelectionActive:L,nodesDraggable:M,transform:E,snapGrid:I,snapToGrid:A,selectNodesOnDrag:z,onNodeDragStart:V,onSelectionDragStart:D,unselectNodesAndEdges:F}=t();f=!0,(!z||!S)&&!L&&C&&(O.get(C)?.selected||F()),S&&z&&C&&e?.(C);let Z=Mu(U.sourceEvent,{transform:E,snapGrid:I,snapToGrid:A,containerBounds:d});if(r=Z,i=k3(O,M,Z,C),i.size>0&&(a||V||!C&&D)){let[K,W]=Eh({nodeId:C,dragItems:i,nodeLookup:O});a?.(U.sourceEvent,i,K,W),V?.(U.sourceEvent,K,W),C||D?.(U.sourceEvent,W)}}let N=nf().clickDistance(v).on("start",U=>{let{domNode:O,nodeDragThreshold:L,transform:M,snapGrid:E,snapToGrid:I}=t();d=O?.getBoundingClientRect()||null,p=!1,g=!1,y=U.sourceEvent,L===0&&T(U),r=Mu(U.sourceEvent,{transform:M,snapGrid:E,snapToGrid:I,containerBounds:d}),u=Ka(U.sourceEvent,d)}).on("drag",U=>{let{autoPanOnNodeDrag:O,transform:L,snapGrid:M,snapToGrid:E,nodeDragThreshold:I,nodeLookup:A}=t(),z=Mu(U.sourceEvent,{transform:L,snapGrid:M,snapToGrid:E,containerBounds:d});if(y=U.sourceEvent,(U.sourceEvent.type==="touchmove"&&U.sourceEvent.touches.length>1||C&&!A.has(C))&&(p=!0),!p){if(!s&&O&&f&&(s=!0,k()),!f){let V=Ka(U.sourceEvent,d),D=V.x-u.x,F=V.y-u.y;Math.sqrt(D*D+F*F)>I&&T(U)}(r.x!==z.xSnapped||r.y!==z.ySnapped)&&i&&f&&(u=Ka(U.sourceEvent,d),_(z))}}).on("end",U=>{if(!f||p){p&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,f=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:O,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:E}=t();if(g&&(L(i,!1),g=!1),n||M||!C&&E){let[I,A]=Eh({nodeId:C,dragItems:i,nodeLookup:O,dragging:!1});n?.(U.sourceEvent,i,I,A),M?.(U.sourceEvent,I,A),C||E?.(U.sourceEvent,A)}}}).filter(U=>{let O=U.target;return!U.button&&(!x||!Z2(O,`.${x}`,b))&&(!m||Z2(O,m,b))});c.call(N)}function h(){c?.on(".drag",null)}return{update:w,destroy:h}}function M3(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Eu(n,Pi(r))>0&&o.push(r);return o}var N3=250;function E3(e,t,a,o){let n=[],r=1/0,l=M3(e,a,t+N3);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:f}=cr(i,u,u.position,!0),c=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...u,x:d,y:f}],r=c):c===r&&n.push({...u,x:d,y:f}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function xC(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(u=>u.id===a):i?.[0])??null;return s&&r?{...s,...cr(l,s,s.position,!0)}:s}function bC(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function T3(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var yC=()=>!0;function A3(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:u,autoPanOnConnect:d,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:y,onConnectEnd:w,isValidConnection:h=yC,onReconnectEnd:x,updateConnection:m,getTransform:b,getFromHandle:S,autoPanSpeed:C,dragThreshold:v=1,handleDomNode:_}){let k=Wh(e.target),T=0,N,{x:U,y:O}=Ka(e),L=bC(r,_),M=i?.getBoundingClientRect(),E=!1;if(!M||!L)return;let I=xC(n,L,o,s,t);if(!I)return;let A=Ka(e,M),z=!1,V=null,D=!1,F=null;function Z(){if(!d||!M)return;let[se,te]=Tf(A,M,C);c({x:se,y:te}),T=requestAnimationFrame(Z)}let K={...I,nodeId:n,type:L,position:I.position},W=s.get(n),ee={inProgress:!0,isValid:null,from:cr(W,K,ae.Left,!0),fromHandle:K,fromPosition:K.position,fromNode:W,to:A,toHandle:null,toPosition:B2[K.position],toNode:null,pointer:A};function q(){E=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&q();function Y(se){if(!E){let{x:me,y:_e}=Ka(se),it=me-U,Vt=_e-O;if(!(it*it+Vt*Vt>v*v))return;q()}if(!S()||!K){re(se);return}let te=b();A=Ka(se,M),N=E3(Bi(A,te,!1,[1,1]),a,s,K),z||(Z(),z=!0);let oe=wC(se,{handle:N,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:h,doc:k,lib:u,flowId:f,nodeLookup:s});F=oe.handleDomNode,V=oe.connection,D=T3(!!N,oe.isValid);let be=s.get(n),we=be?cr(be,K,ae.Left,!0):ee.from,j={...ee,from:we,isValid:D,to:oe.toHandle&&D?sl({x:oe.toHandle.x,y:oe.toHandle.y},te):A,toHandle:oe.toHandle,toPosition:D&&oe.toHandle?oe.toHandle.position:B2[K.position],toNode:oe.toHandle?s.get(oe.toHandle.nodeId):null,pointer:A};m(j),ee=j}function re(se){if(!("touches"in se&&se.touches.length>0)){if(E){(N||F)&&V&&D&&y?.(V);let{inProgress:te,...oe}=ee,be={...oe,toPosition:ee.toHandle?ee.toPosition:null};w?.(se,be),r&&x?.(se,be)}p(),cancelAnimationFrame(T),z=!1,D=!1,V=null,F=null,k.removeEventListener("mousemove",Y),k.removeEventListener("mouseup",re),k.removeEventListener("touchmove",Y),k.removeEventListener("touchend",re)}}k.addEventListener("mousemove",Y),k.addEventListener("mouseup",re),k.addEventListener("touchmove",Y),k.addEventListener("touchend",re)}function wC(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:u=yC,nodeLookup:d}){let f=r==="target",c=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Ka(e),y=l.elementFromPoint(p,g),w=y?.classList.contains(`${i}-flow__handle`)?y:c,h={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let x=bC(void 0,w),m=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),S=w.classList.contains("connectable"),C=w.classList.contains("connectableend");if(!m||!x)return h;let v={source:f?m:o,sourceHandle:f?b:n,target:f?o:m,targetHandle:f?n:b};h.connection=v;let k=S&&C&&(a===dr.Strict?f&&x==="source"||!f&&x==="target":m!==o||b!==n);h.isValid=k&&u(v),h.toHandle=xC(m,x,b,d,a,!0)}return h}var Uf={onPointerDown:A3,isValid:wC};function vC({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=St(e);function r({translateExtent:i,width:s,height:u,zoomStep:d=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),S=m.sourceEvent.ctrlKey&&Hi()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,v=b[2]*Math.pow(2,C*S);t.scaleTo(v)},y=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(y=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-y[0],S[1]-y[1]];y=S;let v=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),_={x:b[0]-C[0]*v,y:b[1]-C[1]*v},k=[[0,0],[s,u]];t.setViewportConstrained({x:_.x,y:_.y,zoom:b[2]},k,i)},x=kf().on("start",w).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(x,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:jt}}var Ff=e=>({x:e.x,y:e.y,zoom:e.k}),Th=({x:e,y:t,zoom:a})=>ll.translate(e,t).scale(a),ur=(e,t)=>e.target.closest(`.${t}`),CC=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),R3=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ah=(e,t=0,a=R3,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},SC=e=>{let t=e.ctrlKey&&Hi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function D3({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:u}){return d=>{if(ur(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(d.ctrlKey&&l){let w=jt(d),h=SC(d),x=f*Math.pow(2,h);o.scaleTo(a,x,w,d);return}let c=d.deltaMode===1?20:1,p=n===po.Vertical?0:d.deltaX*c,g=n===po.Horizontal?0:d.deltaY*c;!Hi()&&d.shiftKey&&n!==po.Vertical&&(p=d.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let y=Ff(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(d,y):(e.isPanScrolling=!0,i?.(d,y)),e.panScrollTimeout=setTimeout(()=>{u?.(d,y),e.isPanScrolling=!1},150)}}function z3({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=ur(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function P3({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Ff(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function O3({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&CC(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Ff(r.transform))}}function B3({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&CC(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=Ff(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function H3({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:u,lib:d,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,y=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(ur(c,`${d}-flow__node`)||ur(c,`${d}-flow__edge`)||ur(c,`${d}-flow__selection`)||ur(c,`${d}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!l&&!o||i||f&&!y||ur(c,s)&&y||ur(c,u)&&(!y||r&&y&&!t)||!o&&c.ctrlKey&&y)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&y||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||y||e)&&w}}function LC({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(O=>{let L=O[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=kf().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=St(e).call(p);b({x:n.x,y:n.y,zoom:Ri(n.zoom,t,a)},[[0,0],[d.width,d.height]],o);let y=g.on("wheel.zoom"),w=g.on("dblclick.zoom");p.wheelDelta(SC);async function h(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?hn:ol).transform(Ah(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}function x({noWheelClassName:O,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:E,panOnScroll:I,panOnDrag:A,panOnScrollMode:z,panOnScrollSpeed:V,preventScrolling:D,zoomOnPinch:F,zoomOnScroll:Z,zoomOnDoubleClick:K,panActivationKeyPressed:W=!1,zoomActivationKeyPressed:ne,lib:ee,onTransformChange:q,connectionInProgress:Y,paneClickDistance:re,selectionOnDrag:se}){E&&!u.isZoomingOrPanning&&m();let te=I&&!ne&&!E;p.clickDistance(se?1/0:!Wa(re)||re<0?0:re);let oe=te?D3({zoomPanValues:u,noWheelClassName:O,d3Selection:g,d3Zoom:p,panOnScrollMode:z,panOnScrollSpeed:V,zoomOnPinch:F,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):z3({noWheelClassName:O,preventScrolling:D,d3ZoomHandler:y});g.on("wheel.zoom",oe,{passive:!1});let be=P3({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:l});p.on("start",be);let we=O3({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:q});p.on("zoom",we);let j=B3({zoomPanValues:u,panOnDrag:A,panOnScroll:I,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});p.on("end",j);let me=H3({panActivationKeyPressed:W,zoomActivationKeyPressed:ne,panOnDrag:A,zoomOnScroll:Z,panOnScroll:I,zoomOnDoubleClick:K,zoomOnPinch:F,userSelectionActive:E,noPanClassName:L,noWheelClassName:O,lib:ee,connectionInProgress:Y});p.filter(me),K?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(O,L,M){let E=Th(O),I=p?.constrain()(E,L,M);return I&&await h(I),I}async function S(O,L){let M=Th(O);return await h(M,L),M}function C(O){if(g){let L=Th(O),M=g.property("__zoom");(M.k!==O.zoom||M.x!==O.x||M.y!==O.y)&&p?.transform(g,L,null,{sync:!0})}}function v(){let O=g?Iu(g.node()):{x:0,y:0,k:1};return{x:O.x,y:O.y,zoom:O.k}}async function _(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?hn:ol).scaleTo(Ah(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}async function k(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?hn:ol).scaleBy(Ah(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}function T(O){p?.scaleExtent(O)}function N(O){p?.translateExtent(O)}function U(O){let L=!Wa(O)||O<0?0:O;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:S,setViewportConstrained:b,getViewport:v,scaleTo:_,scaleBy:k,setScaleExtent:T,setTranslateExtent:N,syncViewport:C,setClickDistance:U}}var fr;(function(e){e.Line="line",e.Handle="handle"})(fr||(fr={}));function U3({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function W2(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function ir(e,t){return Math.max(0,t-e)}function sr(e,t){return Math.max(0,e-t)}function Mf(e,t,a){return Math.max(0,t-e,e-a)}function K2(e,t){return e?!t:t}function F3(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:u}=t,{isHorizontal:d,isVertical:f}=t,c=d&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:y,maxWidth:w,minHeight:h,maxHeight:x}=o,{x:m,y:b,width:S,height:C,aspectRatio:v}=e,_=Math.floor(d?p-e.pointerX:0),k=Math.floor(f?g-e.pointerY:0),T=S+(s?-_:_),N=C+(u?-k:k),U=-r[0]*S,O=-r[1]*C,L=Mf(T,y,w),M=Mf(N,h,x);if(l){let A=0,z=0;s&&_<0?A=ir(m+_+U,l[0][0]):!s&&_>0&&(A=sr(m+T+U,l[1][0])),u&&k<0?z=ir(b+k+O,l[0][1]):!u&&k>0&&(z=sr(b+N+O,l[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(i){let A=0,z=0;s&&_>0?A=sr(m+_,i[0][0]):!s&&_<0&&(A=ir(m+T,i[1][0])),u&&k>0?z=sr(b+k,i[0][1]):!u&&k<0&&(z=ir(b+N,i[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(n){if(d){let A=Mf(T/v,h,x)*v;if(L=Math.max(L,A),l){let z=0;!s&&!u||s&&!u&&c?z=sr(b+O+T/v,l[1][1])*v:z=ir(b+O+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,z)}if(i){let z=0;!s&&!u||s&&!u&&c?z=ir(b+T/v,i[1][1])*v:z=sr(b+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,z)}}if(f){let A=Mf(N*v,y,w)/v;if(M=Math.max(M,A),l){let z=0;!s&&!u||u&&!s&&c?z=sr(m+N*v+U,l[1][0])/v:z=ir(m+(u?k:-k)*v+U,l[0][0])/v,M=Math.max(M,z)}if(i){let z=0;!s&&!u||u&&!s&&c?z=ir(m+N*v,i[1][0])/v:z=sr(m+(u?k:-k)*v,i[0][0])/v,M=Math.max(M,z)}}}k=k+(k<0?M:-M),_=_+(_<0?L:-L),n&&(c?T>N*v?k=(K2(s,u)?-_:_)/v:_=(K2(s,u)?-k:k)*v:d?(k=_/v,u=s):(_=k*v,s=u));let E=s?m+_:m,I=u?b+k:b;return{width:S+(s?-_:_),height:C+(u?-k:k),x:r[0]*_*(s?-1:1)+E,y:r[1]*k*(u?-1:1)+I}}var _C={width:0,height:0,x:0,y:0},q3={..._C,pointerX:0,pointerY:0,aspectRatio:1};function V3(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function kC({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=St(e),l={controlDirection:W2("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:u,boundaries:d,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:y,shouldResize:w}){let h={..._C},x={...q3};l={boundaries:d,resizeDirection:c,keepAspectRatio:f,controlDirection:W2(u)};let m,b=null,S=[],C,v,_,k=!1,T=nf().on("start",N=>{let{nodeLookup:U,transform:O,snapGrid:L,snapToGrid:M,nodeOrigin:E,paneDomNode:I}=a();if(m=U.get(t),!m)return;b=I?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:z}=Mu(N.sourceEvent,{transform:O,snapGrid:L,snapToGrid:M,containerBounds:b});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:A,pointerY:z,aspectRatio:h.width/h.height},C=void 0,v=ul(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=U.get(m.parentId)),C&&m.extent==="parent"&&(v=[[0,0],[C.measured.width,C.measured.height]]),S=[],_=void 0;for(let[V,D]of U)if(D.parentId===t&&(S.push({id:V,position:{...D.position},extent:D.extent}),D.extent==="parent"||D.expandParent)){let F=V3(D,m,D.origin??E);_?_=[[Math.min(F[0][0],_[0][0]),Math.min(F[0][1],_[0][1])],[Math.max(F[1][0],_[1][0]),Math.max(F[1][1],_[1][1])]]:_=F}p?.(N,{...h})}).on("drag",N=>{let{transform:U,snapGrid:O,snapToGrid:L,nodeOrigin:M}=a(),E=Mu(N.sourceEvent,{transform:U,snapGrid:O,snapToGrid:L,containerBounds:b}),I=[];if(!m)return;let{x:A,y:z,width:V,height:D}=h,F={},Z=m.origin??M,{width:K,height:W,x:ne,y:ee}=F3(x,l.controlDirection,E,l.boundaries,l.keepAspectRatio,Z,v,_),q=K!==V,Y=W!==D,re=ne!==A&&q,se=ee!==z&&Y;if(!re&&!se&&!q&&!Y)return;if((re||se||Z[0]===1||Z[1]===1)&&(F.x=re?ne:h.x,F.y=se?ee:h.y,h.x=F.x,h.y=F.y,S.length>0)){let we=ne-A,j=ee-z;for(let me of S)me.position={x:me.position.x-we+Z[0]*(K-V),y:me.position.y-j+Z[1]*(W-D)},I.push(me)}if((q||Y)&&(F.width=q&&(!l.resizeDirection||l.resizeDirection==="horizontal")?K:h.width,F.height=Y&&(!l.resizeDirection||l.resizeDirection==="vertical")?W:h.height,h.width=F.width,h.height=F.height),C&&m.expandParent){let we=Z[0]*(F.width??0);F.x&&F.x<we&&(h.x=we,x.x=x.x-(F.x-we));let j=Z[1]*(F.height??0);F.y&&F.y<j&&(h.y=j,x.y=x.y-(F.y-j))}let te=U3({width:h.width,prevWidth:V,height:h.height,prevHeight:D,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),oe={...h,direction:te};w?.(N,oe)!==!1&&(k=!0,g?.(N,oe),o(F,I))}).on("end",N=>{k&&(y?.(N,{...h}),n?.({...h}),k=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var HC=R(J(),1),UC=R(DC(),1);var PC={},zC=e=>{let t,a=new Set,o=(d,f)=>{let c=typeof d=="function"?d(t):d;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:d=>(a.add(d),()=>a.delete(d)),destroy:()=>{(PC.env?PC.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},OC=e=>e?zC(e):zC;var{useDebugValue:iT}=HC.default,{useSyncExternalStoreWithSelector:sT}=UC.default,uT=e=>e;function rx(e,t=uT,a){let o=sT(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return iT(o),o}var BC=(e,t)=>{let a=OC(e),o=(n,r=t)=>rx(a,n,r);return Object.assign(o,a),o},FC=(e,t)=>e?BC(e,t):BC;function He(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var dT=R(_o()),Yf=(0,B.createContext)(null),cT=Yf.Provider,mS=Ma.error001("react");function ye(e,t){let a=(0,B.useContext)(Yf);if(a===null)throw new Error(mS);return rx(a,e,t)}function We(){let e=(0,B.useContext)(Yf);if(e===null)throw new Error(mS);return(0,B.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var qC={display:"none"},fT={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},gS="react-flow__node-desc",hS="react-flow__edge-desc",pT="react-flow__aria-live",mT=e=>e.ariaLiveMessage,gT=e=>e.ariaLabelConfig;function hT({rfId:e}){let t=ye(mT);return(0,P.jsx)("div",{id:`${pT}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:fT,children:t})}function xT({rfId:e,disableKeyboardA11y:t}){let a=ye(gT);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{id:`${gS}-${e}`,style:qC,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,P.jsx)("div",{id:`${hS}-${e}`,style:qC,children:a["edge.a11yDescription.default"]}),!t&&(0,P.jsx)(hT,{rfId:e})]})}var jf=(0,B.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,P.jsx)("div",{className:rt(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});jf.displayName="Panel";var VC="https://reactflow.dev?utm_source=attribution";function bT({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,P.jsx)(jf,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${VC}`,children:(0,P.jsx)("a",{href:VC,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var yT=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},Vf=e=>e.id;function wT(e,t){return He(e.selectedNodes.map(Vf),t.selectedNodes.map(Vf))&&He(e.selectedEdges.map(Vf),t.selectedEdges.map(Vf))}function vT({onSelectionChange:e}){let t=We(),{selectedNodes:a,selectedEdges:o}=ye(yT,wT);return(0,B.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var CT=e=>!!e.onSelectionChangeHandlers;function ST({onSelectionChange:e}){let t=ye(CT);return e||t?(0,P.jsx)(vT,{onSelectionChange:e}):null}var xS=[0,0],LT={x:0,y:0,zoom:1},_T=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],GC=[..._T,"rfId"],kT=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),XC={translateExtent:Di,nodeOrigin:xS,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function IT(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=ye(kT,He),u=We();(0,B.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{d.current=XC,i()}),[]);let d=(0,B.useRef)(XC);return(0,B.useEffect)(()=>{for(let f of GC){let c=e[f],p=d.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?l(c):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:nC(c)}):f==="fitView"?u.setState({fitViewQueued:c}):f==="fitViewOptions"?u.setState({fitViewOptions:c}):u.setState({[f]:c})))}d.current=e},GC.map(f=>e[f])),null}function YC(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function MT(e){let[t,a]=(0,B.useState)(e==="system"?null:e);return(0,B.useEffect)(()=>{if(e!=="system"){a(e);return}let o=YC(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:YC()?.matches?"dark":"light"}var jC=typeof document<"u"?document:null;function Ru(e=null,t={target:jC,actInsideInputWithModifier:!0}){let[a,o]=(0,B.useState)(!1),n=(0,B.useRef)(!1),r=(0,B.useRef)(new Set([])),[l,i]=(0,B.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((f,c)=>f.concat(...c),[]);return[u,d]}return[[],[]]},[e]);return(0,B.useEffect)(()=>{let s=t?.target??jC,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&Kh(p))return!1;let y=WC(p.code,i);if(r.current.add(p[y]),ZC(l,r.current,!1)){let w=p.composedPath?.()?.[0]||p.target,h=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=WC(p.code,i);ZC(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",d),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",d),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function ZC(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function WC(e,t){return t.includes(e)?"code":"key"}var NT=()=>{let e=We();return(0,B.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Tu(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),u={x:t.x-i,y:t.y-s},d=a.snapGrid??n,f=a.snapToGrid??r;return Bi(u,o,f,d)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=sl(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function bS(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)ET(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function ET(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function ux(e,t){return bS(e,t)}function dx(e,t){return bS(e,t)}function dl(e,t){return{id:e,type:"select",selected:t}}function qi(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(dl(r.id,l)))}return o}function KC({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function $C(e){return{id:e.id,type:"remove"}}var TT=Xh("React Flow","https://reactflow.dev/");function AT(e,t,a={}){return iC(e,t,{...a,onError:a.onError??TT})}var QC=e=>$2(e),RT=e=>Bh(e);function yS(e){return(0,B.forwardRef)(e)}var wS=typeof window<"u"?B.useLayoutEffect:B.useEffect;function JC(e){let[t,a]=(0,B.useState)(BigInt(0)),[o]=(0,B.useState)(()=>DT(()=>a(n=>n+BigInt(1))));return wS(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function DT(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var vS=(0,B.createContext)(null);function zT({children:e}){let t=We(),a=(0,B.useCallback)(i=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:d,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),y=s;for(let h of i)y=typeof h=="function"?h(y):h;let w=KC({items:y,lookup:c});for(let h of g.values())w=h(w);d&&u(y),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=JC(a),n=(0,B.useCallback)(i=>{let{edges:s=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let g of i)p=typeof g=="function"?g(p):g;d?u(p):f&&f(KC({items:p,lookup:c}))},[]),r=JC(n),l=(0,B.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,P.jsx)(vS.Provider,{value:l,children:e})}function PT(){let e=(0,B.useContext)(vS);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var OT=e=>!!e.panZoom;function Na(){let e=NT(),t=We(),a=PT(),o=ye(OT),n=(0,B.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),l=f=>{a.nodeQueue.push(f)},i=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=QC(f)?f:c.get(f.id),y=g.parentId?jh(g.position,g.measured,g.parentId,c,p):g.position,w={...g,position:y,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Pi(w)},u=(f,c,p={replace:!1})=>{l(g=>g.map(y=>{if(y.id===f){let w=typeof c=="function"?c(y):c;return p.replace&&QC(w)?w:{...y,...w}}return y}))},d=(f,c,p={replace:!1})=>{i(g=>g.map(y=>{if(y.id===f){let w=typeof c=="function"?c(y):c;return p.replace&&RT(w)?w:{...y,...w}}return y}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:l,setEdges:i,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,y,w]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y,zoom:w}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:y,onEdgesDelete:w,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:S,edges:C}=await eC({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:b}),v=C.length>0,_=S.length>0;if(v){let k=C.map($C);w?.(C),x(k)}if(_){let k=S.map($C);y?.(S),h(k)}return(_||v)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=Gh(f),y=g?f:s(f),w=p!==void 0;return y?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=Pi(w?h:x),b=Eu(m,y);return c&&b>0||b>=m.width*m.height||b>=y.width*y.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let y=Gh(f)?f:s(f);if(!y)return!1;let w=Eu(y,c);return p&&w>0||w>=c.width*c.height||w>=y.width*y.height},updateNode:u,updateNodeData:(f,c,p={replace:!1})=>{u(f,g=>{let y=typeof c=="function"?c(g):c;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},updateEdge:d,updateEdgeData:(f,c,p={replace:!1})=>{d(f,g=>{let y=typeof c=="function"?c(g):c;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Fh(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??oC();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,B.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var eS=e=>e.selected,BT=typeof window<"u"?window:void 0;function HT({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=We(),{deleteElements:o}=Na(),n=Ru(e,{actInsideInputWithModifier:!1}),r=Ru(t,{target:BT});(0,B.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter(eS),edges:l.filter(eS)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,B.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function UT(e){let t=We();(0,B.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Df(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ma.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Zf={position:"absolute",width:"100%",height:"100%",top:0,left:0},FT=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function qT({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=po.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:d,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:y,noWheelClassName:w,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:S}){let C=We(),v=(0,B.useRef)(null),{userSelectionActive:_,lib:k,connectionInProgress:T}=ye(FT,He),N=Ru(p),U=(0,B.useRef)();UT(v);let O=(0,B.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[x,m]);return(0,B.useEffect)(()=>{if(v.current){U.current=LC({domNode:v.current,minZoom:f,maxZoom:c,translateExtent:d,viewport:u,onDraggingChange:I=>C.setState(A=>A.paneDragging===I?A:{paneDragging:I}),onPanZoomStart:(I,A)=>{let{onViewportChangeStart:z,onMoveStart:V}=C.getState();V?.(I,A),z?.(A)},onPanZoom:(I,A)=>{let{onViewportChange:z,onMove:V}=C.getState();V?.(I,A),z?.(A)},onPanZoomEnd:(I,A)=>{let{onViewportChangeEnd:z,onMoveEnd:V}=C.getState();V?.(I,A),z?.(A)}});let{x:L,y:M,zoom:E}=U.current.getViewport();return C.setState({panZoom:U.current,transform:[L,M,E],domNode:v.current.closest(".react-flow")}),()=>{U.current?.destroy()}}},[]),(0,B.useEffect)(()=>{U.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:N,preventScrolling:g,noPanClassName:h,userSelectionActive:_,noWheelClassName:w,lib:k,onTransformChange:O,connectionInProgress:T,selectionOnDrag:S,paneClickDistance:b})},[e,t,a,o,n,r,l,i,s,N,g,h,_,w,k,O,T,S,b]),(0,P.jsx)("div",{className:"react-flow__renderer",ref:v,style:Zf,children:y})}var VT=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function GT(){let{userSelectionActive:e,userSelectionRect:t}=ye(VT,He);return e&&t?(0,P.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var lx=(e,t)=>a=>{a.target===t.current&&e?.(a)},XT=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function YT({isSelecting:e,selectionKeyPressed:t,selectionMode:a=bn.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:y}){let w=(0,B.useRef)(0),h=We(),{userSelectionActive:x,elementsSelectable:m,dragging:b,panBy:S,autoPanSpeed:C}=ye(XT,He),v=m&&(e||x),_=(0,B.useRef)(null),k=(0,B.useRef)(),T=(0,B.useRef)(new Set),N=(0,B.useRef)(new Set),U=(0,B.useRef)(!1),O=(0,B.useRef)(!1),L=(0,B.useRef)({x:0,y:0}),M=(0,B.useRef)(!1),E=q=>{if(O.current||U.current||h.getState().connection.inProgress){O.current=!1,U.current=!1;return}u?.(q),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},I=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}d?.(q)},A=f?q=>f(q):void 0,z=q=>{O.current&&(q.stopPropagation(),O.current=!1)},V=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Y,transform:re}=h.getState();if(k.current=Y?.getBoundingClientRect(),!k.current)return;let se=q.target===_.current;if(!se&&!!q.target.closest(".nokey")||!e||!(l&&se||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),O.current=!1;let{x:be,y:we}=Ka(q.nativeEvent,k.current),j=Bi({x:be,y:we},re);h.setState({userSelectionRect:{width:0,height:0,startX:j.x,startY:j.y,x:be,y:we}}),se||(q.stopPropagation(),q.preventDefault())};function D(q,Y){let{userSelectionRect:re}=h.getState();if(!re)return;let{transform:se,nodeLookup:te,edgeLookup:oe,connectionLookup:be,triggerNodeChanges:we,triggerEdgeChanges:j,defaultEdgeOptions:me}=h.getState(),_e={x:re.startX,y:re.startY},{x:it,y:Vt}=sl(_e,se),ta={startX:_e.x,startY:_e.y,x:q<it?q:it,y:Y<Vt?Y:Vt,width:Math.abs(q-it),height:Math.abs(Y-Vt)},Nr=T.current,Xo=N.current;T.current=new Set(Ef(te,ta,se,a===bn.Partial,!0).map(xa=>xa.id)),N.current=new Set;let Yo=me?.selectable??!0;for(let xa of T.current){let $=be.get(xa);if($)for(let{edgeId:Ue}of $.values()){let at=oe.get(Ue);at&&(at.selectable??Yo)&&N.current.add(Ue)}}if(!Zh(Nr,T.current)){let xa=qi(te,T.current,!0);we(xa)}if(!Zh(Xo,N.current)){let xa=qi(oe,N.current);j(xa)}h.setState({userSelectionRect:ta,userSelectionActive:!0,nodesSelectionActive:!1})}function F(){if(!n||!k.current)return;let[q,Y]=Tf(L.current,k.current,C);S({x:q,y:Y}).then(re=>{if(!O.current||!re){w.current=requestAnimationFrame(F);return}let{x:se,y:te}=L.current;D(se,te),w.current=requestAnimationFrame(F)})}let Z=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,B.useEffect)(()=>()=>Z(),[]);let K=q=>{let{userSelectionRect:Y,transform:re,resetSelectedElements:se}=h.getState();if(!k.current||!Y)return;let{x:te,y:oe}=Ka(q.nativeEvent,k.current);L.current={x:te,y:oe};let be=sl({x:Y.startX,y:Y.startY},re);if(!O.current){let we=t?0:r;if(Math.hypot(te-be.x,oe-be.y)<=we)return;se(),i?.(q)}O.current=!0,M.current||(F(),M.current=!0),D(te,oe)},W=q=>{if(!v){q.target===_.current&&h.getState().connection.inProgress&&(U.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!x&&q.target===_.current&&h.getState().userSelectionRect&&E?.(q),h.setState({userSelectionActive:!1,userSelectionRect:null}),O.current&&(s?.(q),h.setState({nodesSelectionActive:T.current.size>0})),Z())},ne=q=>{q.target?.releasePointerCapture?.(q.pointerId),Z()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,P.jsxs)("div",{className:rt(["react-flow__pane",{draggable:ee,dragging:b,selection:e}]),onClick:v?void 0:lx(E,_),onContextMenu:lx(I,_),onWheel:lx(A,_),onPointerEnter:v?void 0:c,onPointerMove:v?K:p,onPointerUp:W,onPointerCancel:v?ne:void 0,onPointerDownCapture:v?V:void 0,onClickCapture:v?z:void 0,onPointerLeave:g,ref:_,style:Zf,children:[y,(0,P.jsx)(GT,{})]})}function sx({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),u=i.get(e);if(!u){s?.("012",Ma.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&l)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function CS({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=We(),[s,u]=(0,B.useState)(!1),d=(0,B.useRef)();return(0,B.useEffect)(()=>{if(!t)return d.current=hC({getStoreItems:()=>i.getState(),onNodeMouseDown:f=>{sx({id:f,store:i,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,i,e]),(0,B.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var jT=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function SS(){let e=We();return(0,B.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:u,nodeOrigin:d}=e.getState(),f=new Map,c=jT(l),p=n?r[0]:5,g=n?r[1]:5,y=a.direction.x*p*a.factor,w=a.direction.y*g*a.factor;for(let[,h]of u){if(!c(h))continue;let x={x:h.internals.positionAbsolute.x+y,y:h.internals.positionAbsolute.y+w};n&&(x=Oi(x,r));let{position:m,positionAbsolute:b}=qh({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:i});h.position=m,h.internals.positionAbsolute=b,f.set(h.id,h)}s(f)},[])}var cx=(0,B.createContext)(null),ZT=cx.Provider;cx.Consumer;var LS=()=>(0,B.useContext)(cx),WT=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),_S=(0,B.createContext)(null);function KT({children:e}){let t=ye(WT,He);return(0,P.jsx)(_S.Provider,{value:t,children:e})}function $T(){let e=(0,B.useContext)(_S);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var QT={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},JT=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:u}=l;if(!i&&!n)return QT;let d=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:d,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===dr.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:d&&u}};function e6({type:e="source",position:t=ae.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:u,onMouseDown:d,onTouchStart:f,...c},p){let g=l||null,y=e==="target",w=We(),h=LS(),{connectOnClick:x,noPanClassName:m,rfId:b}=$T(),{connectingFrom:S,connectingTo:C,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:k,clickConnectionInProcess:T,valid:N}=ye(JT(h,g,e),He);h||w.getState().onError?.("010",Ma.error010());let U=M=>{let{defaultEdgeOptions:E,onConnect:I,hasDefaultEdges:A}=w.getState(),z={...E,...M};if(A){let{edges:V,setEdges:D,onError:F}=w.getState();D(AT(z,V,{onError:F}))}I?.(z),i?.(z)},O=M=>{if(!h)return;let E=$h(M.nativeEvent);if(n&&(E&&M.button===0||!E)){let I=w.getState();Uf.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:g,nodeId:h,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...A)=>w.getState().onConnectEnd?.(...A),updateConnection:I.updateConnection,onConnect:U,isValidConnection:a||((...A)=>w.getState().isValidConnection?.(...A)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}E?d?.(M):f?.(M)},L=M=>{let{onClickConnectStart:E,onClickConnectEnd:I,connectionClickStartHandle:A,connectionMode:z,isValidConnection:V,lib:D,rfId:F,nodeLookup:Z,connection:K}=w.getState();if(!h||!A&&!n)return;if(!A){E?.(M.nativeEvent,{nodeId:h,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let W=Wh(M.target),ne=a||V,{connection:ee,isValid:q}=Uf.isValid(M.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:z,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:ne,flowId:F,doc:W,lib:D,nodeLookup:Z});q&&ee&&U(ee);let Y=structuredClone(K);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,I?.(M,Y),w.setState({connectionClickStartHandle:null})};return(0,P.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${b}-${h}-${g}-${e}`,className:rt(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!y,target:y,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:S,connectingto:C,valid:N,connectionindicator:o&&(!k||_)&&(k||T?r:n)}]),onMouseDown:O,onTouchStart:O,onClick:x?L:void 0,ref:p,...c,children:s})}var Vi=(0,B.memo)(yS(e6));function t6({data:e,isConnectable:t,sourcePosition:a=ae.Bottom}){return(0,P.jsxs)(P.Fragment,{children:[e?.label,(0,P.jsx)(Vi,{type:"source",position:a,isConnectable:t})]})}function a6({data:e,isConnectable:t,targetPosition:a=ae.Top,sourcePosition:o=ae.Bottom}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Vi,{type:"target",position:a,isConnectable:t}),e?.label,(0,P.jsx)(Vi,{type:"source",position:o,isConnectable:t})]})}function o6(){return null}function n6({data:e,isConnectable:t,targetPosition:a=ae.Top}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Vi,{type:"target",position:a,isConnectable:t}),e?.label]})}var Xf={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},tS={input:t6,default:a6,output:n6,group:o6};function r6(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var l6=e=>{let{width:t,height:a,x:o,y:n}=zi(e.nodeLookup,{filter:r=>!!r.selected});return{width:Wa(t)?t:null,height:Wa(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function i6({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=We(),{width:n,height:r,transformString:l,userSelectionActive:i}=ye(l6,He),s=SS(),u=(0,B.useRef)(null);(0,B.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let d=!i&&n!==null&&r!==null;if(CS({nodeRef:u,disabled:!d}),!d)return null;let f=e?p=>{let g=o.getState().nodes.filter(y=>y.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Xf,p.key)&&(p.preventDefault(),s({direction:Xf[p.key],factor:p.shiftKey?4:1}))};return(0,P.jsx)("div",{className:rt(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,P.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var aS=typeof window<"u"?window:void 0,s6=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function kS({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:d,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:y,zoomActivationKeyCode:w,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:k,defaultViewport:T,translateExtent:N,minZoom:U,maxZoom:O,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:E,noPanClassName:I,disableKeyboardA11y:A,onViewportChange:z,isControlledViewport:V}){let{nodesSelectionActive:D,userSelectionActive:F}=ye(s6,He),Z=Ru(u,{target:aS}),K=Ru(y,{target:aS}),W=K||_,ne=K||b,ee=d&&W!==!0,q=Z||F||ee;return HT({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,P.jsx)(qT,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:ne,panActivationKeyPressed:K,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:!Z&&W,defaultViewport:T,translateExtent:N,minZoom:U,maxZoom:O,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:E,noPanClassName:I,onViewportChange:z,isControlledViewport:V,paneClickDistance:i,selectionOnDrag:ee,children:(0,P.jsxs)(YT,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:W,autoPanOnSelection:k,isSelecting:!!q,selectionMode:f,selectionKeyPressed:Z,paneClickDistance:i,selectionOnDrag:ee,children:[e,D&&(0,P.jsx)(i6,{onSelectionContextMenu:M,noPanClassName:I,disableKeyboardA11y:A})]})})}kS.displayName="FlowRenderer";var u6=(0,B.memo)(kS),d6=e=>t=>e?Ef(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function c6(e){return ye((0,B.useCallback)(d6(e),[e]),He)}var f6=e=>e.updateNodeInternals;function p6(){let e=ye(f6),[t]=(0,B.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,B.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function m6({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=We(),r=(0,B.useRef)(null),l=(0,B.useRef)(null),i=(0,B.useRef)(e.sourcePosition),s=(0,B.useRef)(e.targetPosition),u=(0,B.useRef)(t),d=a&&!!e.internals.handleBounds;return(0,B.useEffect)(()=>{r.current&&!e.hidden&&(!d||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[d,e.hidden]),(0,B.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,B.useEffect)(()=>{if(r.current){let f=u.current!==t,c=i.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(u.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function g6({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:u,nodesFocusable:d,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:y,nodeTypes:w,nodeClickDistance:h,onError:x}){let{node:m,internals:b,isParent:S}=ye(q=>{let Y=q.nodeLookup.get(e),re=q.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:re}},He),C=m.type||"default",v=w?.[C]||tS[C];v===void 0&&(x?.("003",Ma.error003(C)),C="default",v=w?.default||tS.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),k=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||u&&typeof m.connectable>"u"),N=!!(m.focusable||d&&typeof m.focusable>"u"),U=We(),O=Yh(m),L=m6({node:m,nodeType:C,hasDimensions:O,resizeObserver:f}),M=CS({nodeRef:L,disabled:m.hidden||!_,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:k,nodeClickDistance:h}),E=SS();if(m.hidden)return null;let I=$a(m),A=r6(m),z=k||_||t||a||o||n,V=a?q=>a(q,{...b.userNode}):void 0,D=o?q=>o(q,{...b.userNode}):void 0,F=n?q=>n(q,{...b.userNode}):void 0,Z=r?q=>r(q,{...b.userNode}):void 0,K=l?q=>l(q,{...b.userNode}):void 0,W=q=>{let{selectNodesOnDrag:Y,nodeDragThreshold:re}=U.getState();k&&(!Y||!_||re>0)&&sx({id:e,store:U,nodeRef:L}),t&&t(q,{...b.userNode})},ne=q=>{if(!(Kh(q.nativeEvent)||g)){if(Dh.includes(q.key)&&k){let Y=q.key==="Escape";sx({id:e,store:U,unselect:Y,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(Xf,q.key)){q.preventDefault();let{ariaLabelConfig:Y}=U.getState();U.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),E({direction:Xf[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:Y,height:re,autoPanOnNodeFocus:se,setCenter:te}=U.getState();if(!se)return;Ef(new Map([[e,m]]),{x:0,y:0,width:Y,height:re},q,!0).length>0||te(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:q[2]})};return(0,P.jsx)("div",{className:rt(["react-flow__node",`react-flow__node-${C}`,{[p]:_},m.className,{selected:m.selected,selectable:k,parent:S,draggable:_,dragging:M}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:z?"all":"none",visibility:O?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:D,onMouseLeave:F,onContextMenu:Z,onClick:W,onDoubleClick:K,onKeyDown:N?ne:void 0,tabIndex:N?0:void 0,onFocus:N?ee:void 0,role:m.ariaRole??(N?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${gS}-${y}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,P.jsx)(ZT,{value:e,children:(0,P.jsx)(v,{id:e,data:m.data,type:C,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:k,draggable:_,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...I})})})}var h6=(0,B.memo)(g6),x6=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function IS(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=ye(x6,He),r=c6(e.onlyRenderVisibleElements),l=p6();return(0,P.jsx)("div",{className:"react-flow__nodes",style:Zf,children:r.map(i=>(0,P.jsx)(h6,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}IS.displayName="NodeRenderer";var b6=(0,B.memo)(IS);function y6(e){return ye((0,B.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&lC({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),He)}var w6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,P.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},v6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,P.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},oS={[Ai.Arrow]:w6,[Ai.ArrowClosed]:v6};function C6(e){let t=We();return(0,B.useMemo)(()=>Object.prototype.hasOwnProperty.call(oS,e)?oS[e]:(t.getState().onError?.("009",Ma.error009(e)),null),[e])}var S6=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=C6(t);return s?(0,P.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,P.jsx)(s,{color:a,strokeWidth:l})}):null},MS=({defaultColor:e,rfId:t})=>{let a=ye(r=>r.edges),o=ye(r=>r.defaultEdgeOptions),n=(0,B.useMemo)(()=>uC(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,P.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,P.jsx)("defs",{children:n.map(r=>(0,P.jsx)(S6,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};MS.displayName="MarkerDefinitions";var L6=(0,B.memo)(MS);function NS({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:u,...d}){let[f,c]=(0,B.useState)({x:1,y:0,width:0,height:0}),p=rt(["react-flow__edge-textwrapper",u]),g=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(g.current){let y=g.current.getBBox();c({x:y.x,y:y.y,width:y.width,height:y.height})}},[a]),a?(0,P.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[n&&(0,P.jsx)("rect",{width:f.width+2*l[0],x:-l[0],y:-l[1],height:f.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,P.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}NS.displayName="EdgeText";var _6=(0,B.memo)(NS);function pr({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:u=20,...d}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("path",{...d,d:e,fill:"none",className:rt(["react-flow__edge-path",d.className])}),u?(0,P.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Wa(t)&&Wa(a)?(0,P.jsx)(_6,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function nS({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ae.Left||e===ae.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function ES({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top}){let[l,i]=nS({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=nS({pos:r,x1:o,y1:n,x2:e,y2:t}),[d,f,c,p]=zf({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:u});return[`M${e},${t} C${l},${i} ${s},${u} ${o},${n}`,d,f,c,p]}function TS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})=>{let[x,m,b]=ES({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),S=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:S,path:x,labelX:m,labelY:b,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})})}var k6=TS({isInternal:!1}),AS=TS({isInternal:!0});k6.displayName="SimpleBezierEdge";AS.displayName="SimpleBezierEdgeInternal";function RS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,sourcePosition:p=ae.Bottom,targetPosition:g=ae.Top,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,S]=Au({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:C,path:m,labelX:b,labelY:S,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:y,markerStart:w,interactionWidth:x})})}var DS=RS({isInternal:!1}),zS=RS({isInternal:!0});DS.displayName="SmoothStepEdge";zS.displayName="SmoothStepEdgeInternal";function PS(e){return(0,B.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,P.jsx)(DS,{...a,id:o,pathOptions:(0,B.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var I6=PS({isInternal:!1}),OS=PS({isInternal:!0});I6.displayName="StepEdge";OS.displayName="StepEdgeInternal";function BS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:y})=>{let[w,h,x]=Pf({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:m,path:w,labelX:h,labelY:x,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:y})})}var M6=BS({isInternal:!1}),HS=BS({isInternal:!0});M6.displayName="StraightEdge";HS.displayName="StraightEdgeInternal";function US(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=ae.Bottom,targetPosition:i=ae.Top,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,S]=Ui({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,P.jsx)(pr,{id:C,path:m,labelX:b,labelY:S,label:s,labelStyle:u,labelShowBg:d,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:x})})}var N6=US({isInternal:!1}),FS=US({isInternal:!0});N6.displayName="BezierEdge";FS.displayName="BezierEdgeInternal";var rS={default:FS,straight:HS,step:OS,smoothstep:zS,simplebezier:AS},lS={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},E6=(e,t,a)=>a===ae.Left?e-t:a===ae.Right?e+t:e,T6=(e,t,a)=>a===ae.Top?e-t:a===ae.Bottom?e+t:e,iS="react-flow__edgeupdater";function sS({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,P.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:rt([iS,`${iS}-${i}`]),cx:E6(t,o,e),cy:T6(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function A6({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:u,onReconnectStart:d,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=We(),y=(b,S)=>{if(b.button!==0)return;let{autoPanOnConnect:C,domNode:v,connectionMode:_,connectionRadius:k,lib:T,onConnectStart:N,cancelConnection:U,nodeLookup:O,rfId:L,panBy:M,updateConnection:E}=g.getState(),I=S.type==="target",A=(D,F)=>{c(!1),f?.(D,a,S.type,F)},z=D=>u?.(a,D),V=(D,F)=>{c(!0),d?.(b,a,S.type),N?.(D,F)};Uf.onPointerDown(b.nativeEvent,{autoPanOnConnect:C,connectionMode:_,connectionRadius:k,domNode:v,handleId:S.id,nodeId:S.nodeId,nodeLookup:O,isTarget:I,edgeUpdaterType:S.type,lib:T,flowId:L,cancelConnection:U,panBy:M,isValidConnection:(...D)=>g.getState().isValidConnection?.(...D)??!0,onConnect:z,onConnectStart:V,onConnectEnd:(...D)=>g.getState().onConnectEnd?.(...D),onReconnectEnd:A,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>y(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=b=>y(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,P.jsxs)(P.Fragment,{children:[(e===!0||e==="source")&&(0,P.jsx)(sS,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,P.jsx)(sS,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function R6({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:y,noPanClassName:w,onError:h,disableKeyboardA11y:x}){let m=ye(te=>te.edgeLookup.get(e)),b=ye(te=>te.defaultEdgeOptions);m=b?{...b,...m}:m;let S=m.type||"default",C=y?.[S]||rS[S];C===void 0&&(h?.("011",Ma.error011(S)),S="default",C=y?.default||rS.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),k=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,B.useRef)(null),[N,U]=(0,B.useState)(!1),[O,L]=(0,B.useState)(!1),M=We(),{zIndex:E=m.zIndex,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:F}=ye((0,B.useCallback)(te=>{let oe=te.nodeLookup.get(m.source),be=te.nodeLookup.get(m.target);if(!oe||!be)return lS;let we=sC({id:e,sourceNode:oe,targetNode:be,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:te.connectionMode,onError:h}),j=rC({selected:m.selected,zIndex:m.zIndex,sourceNode:oe,targetNode:be,elevateOnSelect:te.elevateEdgesOnSelect,zIndexMode:te.zIndexMode});return{...we||lS,zIndex:j}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),He),Z=(0,B.useMemo)(()=>m.markerStart?`url('#${Of(m.markerStart,g)}')`:void 0,[m.markerStart,g]),K=(0,B.useMemo)(()=>m.markerEnd?`url('#${Of(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||I===null||A===null||z===null||V===null)return null;let W=te=>{let{addSelectedEdges:oe,unselectNodesAndEdges:be,multiSelectionActive:we}=M.getState();k&&(M.setState({nodesSelectionActive:!1}),m.selected&&we?(be({nodes:[],edges:[m]}),T.current?.blur()):oe([e])),n&&n(te,m)},ne=r?te=>{r(te,{...m})}:void 0,ee=l?te=>{l(te,{...m})}:void 0,q=i?te=>{i(te,{...m})}:void 0,Y=s?te=>{s(te,{...m})}:void 0,re=u?te=>{u(te,{...m})}:void 0,se=te=>{if(!x&&Dh.includes(te.key)&&k){let{unselectNodesAndEdges:oe,addSelectedEdges:be}=M.getState();te.key==="Escape"?(T.current?.blur(),oe({edges:[m]})):be([e])}};return(0,P.jsx)("svg",{style:{zIndex:E},children:(0,P.jsxs)("g",{className:rt(["react-flow__edge",`react-flow__edge-${S}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!k&&!n,updating:N,selectable:k}]),onClick:W,onDoubleClick:ne,onContextMenu:ee,onMouseEnter:q,onMouseMove:Y,onMouseLeave:re,onKeyDown:v?se:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${hS}-${g}`:void 0,ref:T,...m.domAttributes,children:[!O&&(0,P.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:k,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:F,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Z,markerEnd:K,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,P.jsx)(A6,{edge:m,isReconnectable:_,reconnectRadius:d,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:F,setUpdateHover:U,setReconnecting:L})]})})}var D6=(0,B.memo)(R6),z6=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function qS({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:y}){let{edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,onError:m}=ye(z6,He),b=y6(t);return(0,P.jsxs)("div",{className:"react-flow__edges",children:[(0,P.jsx)(L6,{defaultColor:e,rfId:a}),b.map(S=>(0,P.jsx)(D6,{id:S,edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,onClick:d,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:y},S))]})}qS.displayName="EdgeRenderer";var P6=(0,B.memo)(qS),uS=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function O6({children:e}){let t=We(),a=(0,B.useRef)(null),[o]=(0,B.useState)(()=>t.getState().transform);return wS(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=uS(l)))};return r(),t.subscribe(r)},[t]),(0,P.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:uS(o)},children:e})}function B6(e){let t=Na(),a=(0,B.useRef)(!1);(0,B.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var H6=e=>e.panZoom?.syncViewport;function U6(e){let t=ye(H6),a=We();return(0,B.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function dS(e){return e.connection.inProgress?{...e.connection,to:Bi(e.connection.to,e.transform)}:{...e.connection}}function F6(e){return e?a=>{let o=dS(a);return e(o)}:dS}function fx(e){let t=F6(e);return ye(t,He)}var q6=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function V6({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=ye(q6,He);return!(r&&n&&s)?null:(0,P.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,P.jsx)("g",{className:rt(["react-flow__connection",Oh(i)]),children:(0,P.jsx)(VS,{style:t,type:a,CustomComponent:o,isValid:i})})})}var VS=({style:e,type:t=Ro.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:u,toNode:d,toHandle:f,toPosition:c,pointer:p}=fx();if(!n)return;if(a)return(0,P.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:c,connectionStatus:Oh(o),toNode:d,toHandle:f,pointer:p});let g="",y={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:c};switch(t){case Ro.Bezier:[g]=Ui(y);break;case Ro.SimpleBezier:[g]=ES(y);break;case Ro.Step:[g]=Au({...y,borderRadius:0});break;case Ro.SmoothStep:[g]=Au(y);break;default:[g]=Pf(y)}return(0,P.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};VS.displayName="ConnectionLine";var G6={};function cS(e=G6){let t=(0,B.useRef)(e),a=We();(0,B.useEffect)(()=>{},[e])}function X6(){let e=We(),t=(0,B.useRef)(!1);(0,B.useEffect)(()=>{},[])}function GS({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:y,connectionLineComponent:w,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:k,elementsSelectable:T,defaultViewport:N,translateExtent:U,minZoom:O,maxZoom:L,preventScrolling:M,defaultMarkerColor:E,zoomOnScroll:I,zoomOnPinch:A,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:D,zoomOnDoubleClick:F,panOnDrag:Z,autoPanOnSelection:K,onPaneClick:W,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:Y,onPaneContextMenu:re,paneClickDistance:se,nodeClickDistance:te,onEdgeContextMenu:oe,onEdgeMouseEnter:be,onEdgeMouseMove:we,onEdgeMouseLeave:j,reconnectRadius:me,onReconnect:_e,onReconnectStart:it,onReconnectEnd:Vt,noDragClassName:ta,noWheelClassName:Nr,noPanClassName:Xo,disableKeyboardA11y:Yo,nodeExtent:xa,rfId:$,viewport:Ue,onViewportChange:at,nodesDraggable:Oa}){return cS(e),cS(t),X6(),B6(a),U6(Ue),(0,P.jsx)(u6,{onPaneClick:W,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:re,onPaneScroll:Y,paneClickDistance:se,deleteKeyCode:_,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,elementsSelectable:T,zoomOnScroll:I,zoomOnPinch:A,zoomOnDoubleClick:F,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:D,panOnDrag:Z,autoPanOnSelection:K,defaultViewport:N,translateExtent:U,minZoom:O,maxZoom:L,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:ta,noWheelClassName:Nr,noPanClassName:Xo,disableKeyboardA11y:Yo,onViewportChange:at,isControlledViewport:!!Ue,children:(0,P.jsxs)(O6,{children:[(0,P.jsx)(P6,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:_e,onReconnectStart:it,onReconnectEnd:Vt,onlyRenderVisibleElements:k,onEdgeContextMenu:oe,onEdgeMouseEnter:be,onEdgeMouseMove:we,onEdgeMouseLeave:j,reconnectRadius:me,defaultMarkerColor:E,noPanClassName:Xo,disableKeyboardA11y:Yo,rfId:$}),(0,P.jsx)(V6,{style:y,type:g,component:w,containerStyle:h}),(0,P.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,P.jsx)(b6,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:te,onlyRenderVisibleElements:k,noPanClassName:Xo,noDragClassName:ta,disableKeyboardA11y:Yo,nodeExtent:xa,rfId:$,nodesDraggable:Oa}),(0,P.jsx)("div",{className:"react-flow__viewport-portal"})]})})}GS.displayName="GraphView";var Y6=(0,B.memo)(GS),j6=Xh("React Flow","https://reactflow.dev/"),fS=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,y=new Map,w=new Map,h=o??t??[],x=a??e??[],m=d??[0,0],b=f??Di;ox(y,w,h);let{nodesInitialized:S}=Bf(x,p,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:c}),C=[0,0,1];if(l&&n&&r){let v=zi(p,{filter:N=>!!((N.width||N.initialWidth)&&(N.height||N.initialHeight))}),{x:_,y:k,zoom:T}=Tu(v,n,r,s,u,i?.padding??.1);C=[_,k,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:x,nodesInitialized:S,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:w,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:Di,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:dr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...Ph},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:j6,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:zh,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},Z6=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c})=>FC((p,g)=>{async function y(){let{nodeLookup:w,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:b,height:S,minZoom:C,maxZoom:v}=g();h&&(await J2({nodes:w,width:b,height:S,panZoom:h,minZoom:C,maxZoom:v},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...fS({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:d,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:w=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,fitViewQueued:C,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:k,hasSelectedNodes:T}=Bf(w,h,x,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:v}),N=_&&T;C&&k?(y(),p({nodes:w,nodesInitialized:k,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:N})):p({nodes:w,nodesInitialized:k,nodesSelectionActive:N})},setEdges:w=>{let{connectionLookup:h,edgeLookup:x}=g();ox(h,x,w),p({edges:w})},setDefaultNodesAndEdges:(w,h)=>{if(w){let{setNodes:x}=g();x(w),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:b,nodeOrigin:S,nodeExtent:C,debug:v,fitViewQueued:_,zIndexMode:k}=g(),{changes:T,updatedInternals:N}=pC(w,x,m,b,S,C,k);N&&(cC(x,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:k}),_?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(v&&console.log("React Flow: trigger node changes",T),h?.(T)))},updateNodePositions:(w,h=!1)=>{let x=[],m=[],{nodeLookup:b,triggerNodeChanges:S,connection:C,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[k,T]of w){let N=b.get(k),U=!!(N?.expandParent&&N?.parentId&&T?.position),O={id:k,type:"position",position:U?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:h};if(N&&C.inProgress&&C.fromNode.id===N.id){let L=cr(N,C.fromHandle,ae.Left,!0);v({...C,from:L})}U&&N.parentId&&x.push({id:k,parentId:N.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(O)}if(x.length>0){let{parentLookup:k,nodeOrigin:T}=g(),N=Hf(x,b,k,T);m.push(...N)}for(let k of _.values())m=k(m);S(m)},triggerNodeChanges:w=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:b,debug:S}=g();if(w?.length){if(b){let C=ux(w,m);x(C)}S&&console.log("React Flow: trigger node changes",w),h?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:b,debug:S}=g();if(w?.length){if(b){let C=dx(w,m);x(C)}S&&console.log("React Flow: trigger edge changes",w),h?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>dl(v,!0));b(C);return}b(qi(m,new Set([...w]),!0)),S(qi(x))},addSelectedEdges:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>dl(v,!0));S(C);return}S(qi(x,new Set([...w]))),b(qi(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:b,triggerNodeChanges:S,triggerEdgeChanges:C}=g(),v=w||m,_=h||x,k=[];for(let N of v){if(!N.selected)continue;let U=b.get(N.id);U&&(U.selected=!1),k.push(dl(N.id,!1))}let T=[];for(let N of _)N.selected&&T.push(dl(N.id,!1));S(k),C(T)},setMinZoom:w=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([w,x]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,w]),p({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let S=h.reduce((v,_)=>_.selected?[...v,dl(_.id,!1)]:v,[]),C=w.reduce((v,_)=>_.selected?[...v,dl(_.id,!1)]:v,[]);x(S),m(C)},setNodeExtent:w=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:v}=g();w[0][0]===C[0][0]&&w[0][1]===C[0][1]&&w[1][0]===C[1][0]&&w[1][1]===C[1][1]||(Bf(h,x,m,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:v}),p({nodeExtent:w}))},panBy:w=>{let{transform:h,width:x,height:m,panZoom:b,translateExtent:S}=g();return mC({delta:w,panZoom:b,transform:h,translateExtent:S,width:x,height:m})},setCenter:async(w,h,x)=>{let{width:m,height:b,maxZoom:S,panZoom:C}=g();if(!C)return!1;let v=typeof x?.zoom<"u"?x.zoom:S;return await C.setViewport({x:m/2-w*v,y:b/2-h*v,zoom:v},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Ph}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...fS()})}},Object.is);function px({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:u,nodeOrigin:d,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,B.useState)(()=>Z6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:d,nodeExtent:f,zIndexMode:c}));return(0,P.jsx)(cT,{value:g,children:(0,P.jsx)(zT,{children:(0,P.jsx)(KT,{children:p})})})}function W6({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:u,maxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,B.useContext)(Yf)?(0,P.jsx)(P.Fragment,{children:e}):(0,P.jsx)(px,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var K6={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function $6({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:u,onMove:d,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onNodesDelete:T,onEdgesDelete:N,onDelete:U,onSelectionChange:O,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:E,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onBeforeDelete:V,connectionMode:D,connectionLineType:F=Ro.Bezier,connectionLineStyle:Z,connectionLineComponent:K,connectionLineContainerStyle:W,deleteKeyCode:ne="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:Y=bn.Full,panActivationKeyCode:re="Space",multiSelectionKeyCode:se=Hi()?"Meta":"Control",zoomActivationKeyCode:te=Hi()?"Meta":"Control",snapToGrid:oe,snapGrid:be,onlyRenderVisibleElements:we=!1,selectNodesOnDrag:j,nodesDraggable:me,autoPanOnNodeFocus:_e,nodesConnectable:it,nodesFocusable:Vt,nodeOrigin:ta=xS,edgesFocusable:Nr,edgesReconnectable:Xo,elementsSelectable:Yo=!0,defaultViewport:xa=LT,minZoom:$=.5,maxZoom:Ue=2,translateExtent:at=Di,preventScrolling:Oa=!0,nodeExtent:Er,defaultMarkerColor:So="#b1b1b7",zoomOnScroll:Mp=!0,zoomOnPinch:Kk=!0,panOnScroll:$k=!1,panOnScrollSpeed:Qk=.5,panOnScrollMode:Jk=po.Free,zoomOnDoubleClick:eI=!0,panOnDrag:tI=!0,onPaneClick:aI,onPaneMouseEnter:oI,onPaneMouseMove:nI,onPaneMouseLeave:rI,onPaneScroll:lI,onPaneContextMenu:iI,paneClickDistance:sI=1,nodeClickDistance:uI=0,children:dI,onReconnect:cI,onReconnectStart:fI,onReconnectEnd:pI,onEdgeContextMenu:mI,onEdgeDoubleClick:gI,onEdgeMouseEnter:hI,onEdgeMouseMove:xI,onEdgeMouseLeave:bI,reconnectRadius:yI=10,onNodesChange:wI,onEdgesChange:vI,noDragClassName:CI="nodrag",noWheelClassName:SI="nowheel",noPanClassName:Xx="nopan",fitView:Yx,fitViewOptions:jx,connectOnClick:LI,attributionPosition:_I,proOptions:kI,defaultEdgeOptions:II,elevateNodesOnSelect:MI=!0,elevateEdgesOnSelect:NI=!1,disableKeyboardA11y:Zx=!1,autoPanOnConnect:EI,autoPanOnNodeDrag:TI,autoPanOnSelection:AI=!0,autoPanSpeed:RI,connectionRadius:DI,isValidConnection:zI,onError:PI,style:OI,id:Wx,nodeDragThreshold:BI,connectionDragThreshold:HI,viewport:UI,onViewportChange:FI,width:qI,height:VI,colorMode:GI="light",debug:XI,onScroll:Kx,ariaLabelConfig:YI,zIndexMode:$x="basic",...jI},ZI){let Np=Wx||"1",WI=MT(GI),KI=(0,B.useCallback)(Qx=>{Qx.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Kx?.(Qx)},[Kx]);return(0,P.jsx)("div",{"data-testid":"rf__wrapper",...jI,onScroll:KI,style:{...OI,...K6},ref:ZI,className:rt(["react-flow",n,WI]),id:Wx,role:"application",children:(0,P.jsxs)(W6,{nodes:e,edges:t,width:qI,height:VI,fitView:Yx,fitViewOptions:jx,minZoom:$,maxZoom:Ue,nodeOrigin:ta,nodeExtent:Er,zIndexMode:$x,children:[(0,P.jsx)(IT,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,nodesDraggable:me,autoPanOnNodeFocus:_e,nodesConnectable:it,nodesFocusable:Vt,edgesFocusable:Nr,edgesReconnectable:Xo,elementsSelectable:Yo,elevateNodesOnSelect:MI,elevateEdgesOnSelect:NI,minZoom:$,maxZoom:Ue,nodeExtent:Er,onNodesChange:wI,onEdgesChange:vI,snapToGrid:oe,snapGrid:be,connectionMode:D,translateExtent:at,connectOnClick:LI,defaultEdgeOptions:II,fitView:Yx,fitViewOptions:jx,onNodesDelete:T,onEdgesDelete:N,onDelete:U,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:E,onMove:d,onMoveStart:f,onMoveEnd:c,noPanClassName:Xx,nodeOrigin:ta,rfId:Np,autoPanOnConnect:EI,autoPanOnNodeDrag:TI,autoPanSpeed:RI,onError:PI,connectionRadius:DI,isValidConnection:zI,selectNodesOnDrag:j,nodeDragThreshold:BI,connectionDragThreshold:HI,onBeforeDelete:V,debug:XI,ariaLabelConfig:YI,zIndexMode:$x}),(0,P.jsx)(Y6,{onInit:u,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:l,connectionLineType:F,connectionLineStyle:Z,connectionLineComponent:K,connectionLineContainerStyle:W,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:Y,deleteKeyCode:ne,multiSelectionKeyCode:se,panActivationKeyCode:re,zoomActivationKeyCode:te,onlyRenderVisibleElements:we,defaultViewport:xa,translateExtent:at,minZoom:$,maxZoom:Ue,preventScrolling:Oa,zoomOnScroll:Mp,zoomOnPinch:Kk,zoomOnDoubleClick:eI,panOnScroll:$k,panOnScrollSpeed:Qk,panOnScrollMode:Jk,panOnDrag:tI,autoPanOnSelection:AI,onPaneClick:aI,onPaneMouseEnter:oI,onPaneMouseMove:nI,onPaneMouseLeave:rI,onPaneScroll:lI,onPaneContextMenu:iI,paneClickDistance:sI,nodeClickDistance:uI,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onReconnect:cI,onReconnectStart:fI,onReconnectEnd:pI,onEdgeContextMenu:mI,onEdgeDoubleClick:gI,onEdgeMouseEnter:hI,onEdgeMouseMove:xI,onEdgeMouseLeave:bI,reconnectRadius:yI,defaultMarkerColor:So,noDragClassName:CI,noWheelClassName:SI,noPanClassName:Xx,rfId:Np,disableKeyboardA11y:Zx,nodeExtent:Er,viewport:UI,onViewportChange:FI,nodesDraggable:me}),(0,P.jsx)(ST,{onSelectionChange:O}),dI,(0,P.jsx)(bT,{proOptions:kI,position:_I}),(0,P.jsx)(xT,{rfId:Np,disableKeyboardA11y:Zx})]})})}var XS=yS($6);var Q6=e=>e.nodes;function YS(){return ye(Q6,He)}var J6=e=>e.edges;function jS(){return ye(J6,He)}var eA=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function Qa(){return ye(eA,He)}var LH=Ma.error014();function tA({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,P.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:rt(["react-flow__background-pattern",a,o])})}function aA({radius:e,className:t}){return(0,P.jsx)("circle",{cx:e,cy:e,r:e,className:rt(["react-flow__background-pattern","dots",t])})}var Do;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Do||(Do={}));var oA={[Do.Dots]:1,[Do.Lines]:1,[Do.Cross]:6},nA=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function ZS({id:e,variant:t=Do.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:u,patternClassName:d}){let f=(0,B.useRef)(null),{transform:c,patternId:p}=ye(nA,He),g=o||oA[t],y=t===Do.Dots,w=t===Do.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],b=Array.isArray(r)?r:[r,r],S=w?[m,m]:x,C=[b[0]*c[2]+S[0]/2,b[1]*c[2]+S[1]/2],v=`${p}${e||""}`;return(0,P.jsxs)("svg",{className:rt(["react-flow__background",u]),style:{...s,...Zf,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:f,"data-testid":"rf__background",children:[(0,P.jsx)("pattern",{id:v,x:c[0]%x[0],y:c[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:y?(0,P.jsx)(aA,{radius:m/2,className:d}):(0,P.jsx)(tA,{dimensions:S,lineWidth:n,variant:t,className:d})}),(0,P.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}ZS.displayName="Background";var WS=(0,B.memo)(ZS);function rA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,P.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function lA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,P.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function iA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,P.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function sA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,P.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function uA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,P.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Gf({children:e,className:t,...a}){return(0,P.jsx)("button",{type:"button",className:rt(["react-flow__controls-button",t]),...a,children:e})}var dA=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function KS({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:u,children:d,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=We(),{isInteractive:y,minZoomReached:w,maxZoomReached:h,ariaLabelConfig:x}=ye(dA,He),{zoomIn:m,zoomOut:b,fitView:S}=Na(),C=()=>{m(),r?.()},v=()=>{b(),l?.()},_=()=>{S(n),i?.()},k=()=>{g.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),s?.(!y)};return(0,P.jsxs)(jf,{className:rt(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Gf,{onClick:C,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,P.jsx)(rA,{})}),(0,P.jsx)(Gf,{onClick:v,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:w,children:(0,P.jsx)(lA,{})})]}),a&&(0,P.jsx)(Gf,{className:"react-flow__controls-fitview",onClick:_,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,P.jsx)(iA,{})}),o&&(0,P.jsx)(Gf,{className:"react-flow__controls-interactive",onClick:k,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:y?(0,P.jsx)(uA,{}):(0,P.jsx)(sA,{})}),d]})}KS.displayName="Controls";var _H=(0,B.memo)(KS);function cA({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:u,borderRadius:d,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:y}=r||{},w=l||g||y;return(0,P.jsx)("rect",{className:rt(["react-flow__minimap-node",{selected:c},u]),x:t,y:a,rx:d,ry:d,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var fA=(0,B.memo)(cA),pA=e=>e.nodes.map(t=>t.id),ix=e=>e instanceof Function?e:()=>e;function mA({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=fA,onClick:l}){let i=ye(pA,He),s=ix(t),u=ix(e),d=ix(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,P.jsx)(P.Fragment,{children:i.map(c=>(0,P.jsx)(hA,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:f},c))})}function gA({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:u,x:d,y:f,width:c,height:p}=ye(g=>{let y=g.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let w=y.internals.userNode,{x:h,y:x}=y.internals.positionAbsolute,{width:m,height:b}=$a(w);return{node:w,x:h,y:x,width:m,height:b}},He);return!u||u.hidden||!Yh(u)?null:(0,P.jsx)(i,{x:d,y:f,width:c,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:l,onClick:s,id:u.id})}var hA=(0,B.memo)(gA),xA=(0,B.memo)(mA),bA=200,yA=150,wA=e=>!e.hidden,vA=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Vh(zi(e.nodeLookup,{filter:wA}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},pS=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,CA=(e,t)=>pS(e.viewBB,t.viewBB)&&pS(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,SA="react-flow__minimap-desc";function $S({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:u,maskStrokeColor:d,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:y=!1,zoomable:w=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:b=5}){let S=We(),C=(0,B.useRef)(null),{boundingRect:v,viewBB:_,rfId:k,panZoom:T,translateExtent:N,flowWidth:U,flowHeight:O,ariaLabelConfig:L}=ye(vA,CA),M=e?.width??bA,E=e?.height??yA,I=v.width/M,A=v.height/E,z=Math.max(I,A),V=z*M,D=z*E,F=b*z,Z=v.x-(V-v.width)/2-F,K=v.y-(D-v.height)/2-F,W=V+F*2,ne=D+F*2,ee=`${SA}-${k}`,q=(0,B.useRef)(0),Y=(0,B.useRef)();q.current=z,(0,B.useEffect)(()=>{if(C.current&&T)return Y.current=vC({domNode:C.current,panZoom:T,getTransform:()=>S.getState().transform,getViewScale:()=>q.current}),()=>{Y.current?.destroy()}},[T]),(0,B.useEffect)(()=>{Y.current?.update({translateExtent:N,width:U,height:O,inversePan:x,pannable:y,zoomStep:m,zoomable:w})},[y,w,x,m,N,U,O]);let re=p?oe=>{let[be,we]=Y.current?.pointer(oe)||[0,0];p(oe,{x:be,y:we})}:void 0,se=g?(0,B.useCallback)((oe,be)=>{let we=S.getState().nodeLookup.get(be).internals.userNode;g(oe,we)},[]):void 0,te=h??L["minimap.ariaLabel"];return(0,P.jsx)(jf,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*z:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:rt(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,P.jsxs)("svg",{width:M,height:E,viewBox:`${Z} ${K} ${W} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:C,onClick:re,children:[te&&(0,P.jsx)("title",{id:ee,children:te}),(0,P.jsx)(xA,{onClick:se,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,P.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Z-F},${K-F}h${W+F*2}v${ne+F*2}h${-W-F*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}$S.displayName="MiniMap";var QS=(0,B.memo)($S),LA=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,_A={[fr.Line]:"right",[fr.Handle]:"bottom-right"};function kA({nodeId:e,position:t,variant:a=fr.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:y,onResize:w,onResizeEnd:h}){let x=LS(),m=typeof e=="string"?e:x,b=We(),S=(0,B.useRef)(null),C=a===fr.Handle,v=ye((0,B.useCallback)(LA(C&&p),[C,p]),He),_=(0,B.useRef)(null),k=t??_A[a];(0,B.useEffect)(()=>{if(!(!S.current||!m))return _.current||(_.current=kC({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:N,transform:U,snapGrid:O,snapToGrid:L,nodeOrigin:M,domNode:E}=b.getState();return{nodeLookup:N,transform:U,snapGrid:O,snapToGrid:L,nodeOrigin:M,paneDomNode:E}},onChange:(N,U)=>{let{triggerNodeChanges:O,nodeLookup:L,parentLookup:M,nodeOrigin:E}=b.getState(),I=[],A={x:N.x,y:N.y},z=L.get(m);if(z&&z.expandParent&&z.parentId){let V=z.origin??E,D=N.width??z.measured.width??0,F=N.height??z.measured.height??0,Z={id:z.id,parentId:z.parentId,rect:{width:D,height:F,...jh({x:N.x??z.position.x,y:N.y??z.position.y},{width:D,height:F},z.parentId,L,V)}},K=Hf([Z],L,M,E);I.push(...K),A.x=N.x?Math.max(V[0]*D,N.x):void 0,A.y=N.y?Math.max(V[1]*F,N.y):void 0}if(A.x!==void 0&&A.y!==void 0){let V={id:m,type:"position",position:{...A}};I.push(V)}if(N.width!==void 0&&N.height!==void 0){let D={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:N.width,height:N.height}};I.push(D)}for(let V of U){let D={...V,type:"position"};I.push(D)}O(I)},onEnd:({width:N,height:U})=>{let O={id:m,type:"dimensions",resizing:!1,dimensions:{width:N,height:U}};b.getState().triggerNodeChanges([O])}})),_.current.update({controlPosition:k,boundaries:{minWidth:i,minHeight:s,maxWidth:u,maxHeight:d},keepAspectRatio:f,resizeDirection:c,onResizeStart:y,onResize:w,onResizeEnd:h,shouldResize:g}),()=>{_.current?.destroy()}},[k,i,s,u,d,f,y,w,h,g]);let T=k.split("-");return(0,P.jsx)("div",{className:rt(["react-flow__resize-control","nodrag",...T,a,o]),ref:S,style:{...n,scale:v,...l&&{[C?"backgroundColor":"borderColor"]:l}},children:r})}var kH=(0,B.memo)(kA);var ca=R(J(),1),nL=R(_o(),1);var $f=R(J(),1);var Wf=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var JS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var eL=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var mx=e=>{let t=eL(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Du=R(J(),1);var Kf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var tL=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Gi=R(J(),1);var IA=(0,Gi.createContext)({});var aL=()=>(0,Gi.useContext)(IA);var oL=(0,Du.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=aL()??{},g=o??f?Number(a??d)*24/Number(t??u):a??d;return(0,Du.createElement)("svg",{ref:s,...Kf,width:t??u??Kf.width,height:t??u??Kf.height,stroke:e??c,strokeWidth:g,className:Wf("lucide",p,n),...!r&&!tL(i)&&{"aria-hidden":"true"},...i},[...l.map(([y,w])=>(0,Du.createElement)(y,w)),...Array.isArray(r)?r:[r]])});var H=(e,t)=>{let a=(0,$f.forwardRef)(({className:o,...n},r)=>(0,$f.createElement)(oL,{ref:r,iconNode:t,className:Wf(`lucide-${JS(mx(e))}`,`lucide-${e}`,o),...n}));return a.displayName=mx(e),a};var MA=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],cl=H("audio-lines",MA);var NA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ja=H("check",NA);var EA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zu=H("chevron-down",EA);var TA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xi=H("chevron-right",TA);var AA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Pu=H("chevron-left",AA);var RA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ou=H("chevron-up",RA);var DA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],mr=H("circle-alert",DA);var zA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gr=H("circle-check",zA);var PA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mo=H("circle-question-mark",PA);var OA=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Bu=H("clapperboard",OA);var BA=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Hu=H("copy",BA);var HA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],fl=H("download",HA);var UA=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],hr=H("ellipsis",UA);var FA=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Uu=H("eye-off",FA);var qA=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fu=H("eye",qA);var VA=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],zo=H("file-pen",VA);var GA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],qu=H("file-spreadsheet",GA);var XA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kt=H("file-text",XA);var YA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],Vu=H("file-up",YA);var jA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Ut=H("film",jA);var ZA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Gu=H("folder-open",ZA);var WA=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],xr=H("folder",WA);var KA=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],br=H("funnel",KA);var $A=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Xu=H("grip-vertical",$A);var QA=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Yi=H("hand",QA);var JA=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Yu=H("hash",JA);var e8=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],yn=H("image-plus",e8);var t8=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],go=H("image",t8);var a8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ju=H("info",a8);var o8=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Zu=H("keyboard",o8);var n8=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Po=H("layers",n8);var r8=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],pl=H("layout-grid",r8);var l8=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Wu=H("list",l8);var i8=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],yr=H("loader-circle",i8);var s8=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Ku=H("map",s8);var u8=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],wr=H("maximize-2",u8);var d8=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],$u=H("maximize",d8);var c8=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],ml=H("mic",c8);var f8=[["path",{d:"M5 12h14",key:"1ays0h"}]],Qu=H("minus",f8);var p8=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ji=H("mouse-pointer",p8);var m8=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],eo=H("music",m8);var g8=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Ju=H("paperclip",g8);var h8=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ed=H("pause",h8);var x8=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Oo=H("pen-line",x8);var b8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],vr=H("pencil",b8);var y8=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],td=H("person-standing",y8);var w8=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ea=H("play",w8);var v8=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ke=H("plus",v8);var C8=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],gl=H("redo-2",C8);var S8=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Cr=H("refresh-cw",S8);var L8=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ad=H("rotate-ccw",L8);var _8=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hl=H("search",_8);var k8=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],od=H("settings-2",k8);var I8=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],nd=H("sliders-horizontal",I8);var M8=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ta=H("sparkles",M8);var N8=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Sr=H("square-split-vertical",N8);var E8=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Aa=H("table",E8);var T8=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],rd=H("tag",T8);var A8=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],Lr=H("text-align-justify",A8);var R8=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],xl=H("trash-2",R8);var D8=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_r=H("triangle-alert",D8);var z8=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],wn=H("type",z8);var P8=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],bl=H("undo-2",P8);var O8=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],ld=H("unlink",O8);var B8=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],yl=H("upload",B8);var H8=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ho=H("video",H8);var U8=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],id=H("waypoints",U8);var F8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lt=H("x",F8);var _t=R(X(),1);function fa({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,u]=(0,ca.useState)(!1),d=(0,ca.useRef)(null),f=(0,ca.useRef)(null),[c,p]=(0,ca.useState)({top:0,left:0,placement:"bottom"}),g=(0,ca.useMemo)(()=>t.find(m=>m.value===e),[t,e]),y=(0,ca.useCallback)(()=>{if(!d.current)return;let m=d.current.getBoundingClientRect(),b=window.innerHeight,S=Math.min(t.length*34+16,260),v=b-m.bottom<S&&m.top>S,_=v?m.top-6:m.bottom+6,k=r?m.width:void 0;p({top:_,left:m.left,width:k,placement:v?"top":"bottom"})},[t.length,r]);(0,ca.useEffect)(()=>{if(!s)return;y();let m=C=>{let v=C.target;d.current?.contains(v)||f.current?.contains(v)||u(!1)},b=C=>{C.key==="Escape"&&u(!1)},S=()=>{y()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",S,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",y)}},[s,y]);let w=(0,ca.useCallback)(m=>{m.stopPropagation(),!n&&u(b=>!b)},[n]),h=(0,ca.useCallback)((m,b)=>{b||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,_t.jsxs)(_t.Fragment,{children:[(0,_t.jsxs)("button",{ref:d,type:"button",className:x,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,_t.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,_t.jsx)(zu,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,nL.createPortal)((0,_t.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,_t.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,S=!!m.subtitle||!!m.badge||!!m.icon;return(0,_t.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${S?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,_t.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,_t.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,_t.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,_t.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,_t.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,_t.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,_t.jsx)(Ja,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Bo=R(J(),1),rL=R(_o(),1),xo=R(X(),1),sd=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,Bo.useState)(!1),i=(0,Bo.useRef)(null),s=(0,Bo.useRef)(null),[u,d]=(0,Bo.useState)({left:0}),f=(0,Bo.useCallback)(()=>{if(!i.current)return;let p=i.current.getBoundingClientRect(),g=a.startsWith("top"),y=a.endsWith("Right"),w=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=y?p.right-140:Math.max(10,p.left+p.width/2-70);d({top:w,bottom:h,left:x})},[a]);(0,Bo.useEffect)(()=>{if(!r)return;f();let p=y=>{let w=y.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=y=>{y.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),l(g=>!g)};return(0,xo.jsxs)(xo.Fragment,{children:[(0,xo.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,rL.createPortal)((0,xo.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,xo.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,xo.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),l(!1))},children:[p.icon?(0,xo.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,xo.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var lL=R(J(),1),gx=R(X(),1),hx=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,lL.useCallback)(d=>{n(Number(d.target.value))},[n]);return(0,gx.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,gx.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var iL=R(J(),1),sL=R(_o(),1);var Ho=R(X(),1),wl=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:l,children:i})=>((0,iL.useEffect)(()=>{if(!e)return;let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,sL.createPortal)((0,Ho.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Ho.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,Ho.jsxs)("div",{className:"wf-modal-header",children:[(0,Ho.jsx)("div",{className:"wf-modal-title",children:a}),(0,Ho.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Ho.jsx)(Lt,{size:16})})]}),(0,Ho.jsx)("div",{className:["wf-modal-body",l].filter(Boolean).join(" "),children:i}),o?(0,Ho.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var Jf=R(J(),1),uL=R(gh(),1);var vl=R(X(),1),ud=null,q8=()=>{let[e,t]=(0,Jf.useState)([]);return(0,Jf.useEffect)(()=>(ud=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{ud=null}),[]),e.length===0?null:(0,vl.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=ju,n="#60a5fa";return a.type==="success"?(o=gr,n="#34d399"):a.type==="warning"?(o=_r,n="#fb923c"):a.type==="error"&&(o=mr,n="#f87171"),(0,vl.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,vl.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,vl.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function V8(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,uL.createRoot)(t).render((0,vl.jsx)(q8,{}))}function Qf(e,t,a=2500){V8();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;ud?ud({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{ud?.({id:o,type:e,content:t,durationMs:a})},50)}var $t={success:(e,t)=>Qf("success",e,t),warning:(e,t)=>Qf("warning",e,t),error:(e,t)=>Qf("error",e,t),info:(e,t)=>Qf("info",e,t)};var dL=e=>{let t,a=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let c=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,i);return i},cL=(e=>e?dL(e):dL);var dd=R(J(),1);var G8=e=>e;function X8(e,t=G8){let a=dd.default.useSyncExternalStore(e.subscribe,dd.default.useCallback(()=>t(e.getState()),[e,t]),dd.default.useCallback(()=>t(e.getInitialState()),[e,t]));return dd.default.useDebugValue(a),a}var fL=e=>{let t=cL(e),a=o=>X8(t,o);return Object.assign(a,t),a},Zi=(e=>e?fL(e):fL);var xL=R(J(),1);var pL=e=>Symbol.iterator in e,mL=e=>"entries"in e,gL=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},Y8=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function hL(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:pL(e)&&pL(t)?mL(e)&&mL(t)?gL(e,t):Y8(e,t):gL({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function bL(e){let t=xL.default.useRef(void 0);return a=>{let o=e(a);return hL(t.current,o)?t.current:t.current=o}}var wL={stroke:"#b1b1b7",strokeWidth:2},ep={type:"animated",style:wL,animated:!1};function yL(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function j8(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function vL(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:j8(e),...ep,...e,data:{...t,createdAt:a},animated:e.animated??ep.animated,style:{...wL,...e.style??{}},sourceHandle:yL(e.sourceHandle),targetHandle:yL(e.targetHandle)}}var CL={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},Z8={text:"text-editor",image:"import",video:"import",audio:"import"};var SL={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function tp(e,t){return{label:"",materialType:e,status:"empty",selectedTool:Z8[e],params:{},failStrategy:"abort",...t}}var W8={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function LL(e){return W8[e]??[]}function K8(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function $8(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=CL[n];if(l)for(let i of l){let s=SL[i];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function ap(e,t){let a=K8(e),o=$8(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function op(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!ap(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of Uh(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function np(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function Q8(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function _L(e,t){let a=new Set;for(let d of t.addNodes??[]){if(a.has(d.id)||e.nodes.some(f=>f.id===d.id))return np(e,"rejected","duplicate_node");a.add(d.id)}let o=Q8([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return np(e,"rejected","duplicate_node_patch");let n=new Set(o.map(d=>d.id));if((t.nodePatches??[]).some(d=>!n.has(d.nodeId)))return np(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(d=>!l.has(d.id)),u=[...e.edges.filter(d=>!r.has(d.id)&&!l.has(d.source)&&!l.has(d.target))];for(let d of t.addEdges??[]){let f=vL(d),c=op(f,i,u);if(!c.valid)return np(e,"rejected",c.reasonCode??"invalid_connection");u.push(f)}return{nodes:i,edges:u,status:"allowed"}}function kL(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var rp=!1,lp=!1;function ip(){rp=!0}function IL(){lp=!0,rp=!1}function ML(){rp=!1,lp=!1}function J8(){lp=!1}function xx(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function bx(e,t){return{nodes:e.slice(),edges:t.slice()}}function cd(e,t){return t||(lp&&e===0?"reset":rp&&e===0?"user-delete":"autosave")}function sp(e){let t=bx(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:xx({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(J8(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var eR=50,tR=300;function fd(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Qt={current:null,lastPushAt:0},ue=Zi()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&ip(),e({nodes:ux(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:dx(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&ip();let o=t(),n=_L({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return kL(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&ip(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{ML(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Qt.current=fd(a,o),Qt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=fd(t().nodes,t().edges);if(Qt.current&&Qt.current.sig===a.sig)return;let o=Date.now();if(Qt.current&&o-Qt.lastPushAt>=tR){let n=Qt.current;e(r=>({past:[...r.past,n].slice(-eR),future:[]})),Qt.lastPushAt=o}Qt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=fd(o,n);Qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=fd(o,n);Qt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Qt.current=fd(a,o),Qt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{IL(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Qt.current=null,Qt.lastPushAt=0}})),NL=()=>ue(bL(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var EL=()=>ue(e=>e.past.length>0),TL=()=>ue(e=>e.future.length>0);var FL=R(J(),1);var AL={total:0,completed:0,running:0,pending:0,percentage:0},qe=Zi()(e=>({executionId:null,status:"idle",error:null,progress:AL,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:AL,nodeStatuses:{}})}));var RL=R(J(),1),DL="(prefers-reduced-motion: reduce)";function aR(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(DL);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function oR(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(DL).matches}function zL(){return(0,RL.useSyncExternalStore)(aR,oR)}var Uo=R(J(),1),Ft=R(X(),1),nR=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:u})=>{let f=(0,Uo.useId)().replace(/:/g,""),c=`${f}-glow`,p=`${f}-grad`,g=`beam-flow-${f}`,y=(0,Uo.useRef)(null),[w,h]=(0,Uo.useState)(0);(0,Uo.useEffect)(()=>{y.current&&h(y.current.getTotalLength())},[e]);let{dashSize:x,gapSize:m,offsetRange:b}=(0,Uo.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,k=_*(1/3),T=_*(2/3);return{dashSize:k,gapSize:T,offsetRange:_}},[w]),S=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-b:0}px; }
            to { stroke-dashoffset: ${s?0:-b}px; }
        }
    `;return(0,Ft.jsxs)("g",{className:u,children:[(0,Ft.jsxs)("defs",{children:[(0,Ft.jsx)("style",{children:S}),(0,Ft.jsxs)("filter",{id:c,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,Ft.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,Ft.jsxs)("feMerge",{children:[(0,Ft.jsx)("feMergeNode",{in:"blur"}),(0,Ft.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,Ft.jsxs)("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",children:[(0,Ft.jsx)("stop",{offset:"0%",stopColor:n}),(0,Ft.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,Ft.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,Ft.jsx)("path",{ref:y,d:e,fill:"none",stroke:"none"}),w>0&&(0,Ft.jsx)("path",{d:e,stroke:`url(#${p})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${x} ${m}`,fill:"none",filter:`url(#${c})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},PL=nR;var pd=R(J(),1);var HL=R(J(),1);var rR={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u4E0A\u4F20","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25"},OL=rR;var lR={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local upload","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources"},BL=lR;var yx={zh:OL,en:BL},up="zh",wx=new Set;function iR(e){return wx.add(e),()=>wx.delete(e)}function sR(){return up}function UL(e){let t=e==="en"?"en":"zh";if(t!==up){up=t;for(let a of wx)a()}}function vn(e){return yx[up][e]??yx.zh[e]??yx.en[e]??e}function ie(){return(0,HL.useSyncExternalStore)(iR,sR),vn}var cp=R(X(),1),dp=28,uR=({edgeId:e,x:t,y:a})=>{let o=ie(),n=ue(i=>i.applyCanvasInputMutation),r=(0,pd.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,pd.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,cp.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-dp/2,y:a-dp/2,width:dp,height:dp,children:(0,cp.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,cp.jsx)(ld,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},fp=(0,pd.memo)(uR);var to=R(X(),1),dR=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[u,d,f]=Ui({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),c=qe(w=>w.nodeStatuses[s]==="running"),p=zL(),g=i?"var(--wb-accent)":"var(--wb-edge)",y=i?2.5:2;return c&&p?(0,to.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,to.jsx)(pr,{id:e,path:u,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:y}}),(0,to.jsx)(fp,{edgeId:e,x:d,y:f})]}):c?(0,to.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,to.jsx)(pr,{id:e,path:u,style:{stroke:g,strokeWidth:y,opacity:0}}),(0,to.jsx)(PL,{pathD:u,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:y}),(0,to.jsx)(fp,{edgeId:e,x:d,y:f})]}):(0,to.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,to.jsx)(pr,{id:e,path:u,style:{stroke:g,strokeWidth:y}}),(0,to.jsx)(fp,{edgeId:e,x:d,y:f})]})},qL=(0,FL.memo)(dR);var Wi=R(J(),1);function ao(e){e.stopPropagation()}function vx(e){e.preventDefault(),e.stopPropagation()}var ce=R(X(),1),cR=[{type:"text",Icon:Kt,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:yn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:ho,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:eo,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Aa,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:Ut,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],fR=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:d,isAssetsOpen:f=!1})=>{let c=ie(),[p,g]=(0,Wi.useState)(!1),y=u!==void 0?u:p,w=d||(()=>g(m=>!m)),h=(0,Wi.useCallback)(m=>{e(m),d?d():g(!1)},[e,d]),x=[{key:"select",icon:(0,ce.jsx)(ji,{size:15}),label:c("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,ce.jsx)(Yi,{size:15}),label:c("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,ce.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:ao,onMouseDown:ao,children:[(0,ce.jsxs)("div",{style:{position:"relative"},children:[(0,ce.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${y?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:vx,title:c("toolbar.addNode"),children:(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(Ke,{size:20})})}),y&&(0,ce.jsx)("div",{className:"wf-dock-add-popover",children:cR.map(m=>(0,ce.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:vx,children:[(0,ce.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,ce.jsx)(m.Icon,{size:18})}),(0,ce.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,ce.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,ce.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ce.jsx)(sd,{items:x,selectedKeys:[r],placement:"topCenter",children:(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,ce.jsx)(ji,{size:16}):(0,ce.jsx)(Yi,{size:16})}),(0,ce.jsx)(Ou,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,ce.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:c("toolbar.assets"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(Gu,{size:17})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(bl,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(gl,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(mo,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},VL=(0,Wi.memo)(fR);var Ki=R(J(),1);var he=R(X(),1),pR={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},mR=e=>Math.round(e.transform[2]*100),gR=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:u})=>{let d=ie(),{zoomIn:f,zoomOut:c,fitView:p}=Na(),g=ye(mR),y=qe(T=>T.status),w=qe(T=>T.progress),h=qe(T=>T.error),x=y==="pending"||y==="running",m=y==="paused",b=y==="completed"||y==="error"||y==="cancelled",S=w.total>0,C=(0,Ki.useCallback)(()=>{p({duration:250,padding:.1})},[p]),v=(0,Ki.useCallback)(()=>{f({duration:150})},[f]),_=(0,Ki.useCallback)(()=>{c({duration:150})},[c]),k=[{key:"split-left",label:d("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:d("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:d("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:d("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,he.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:ao,onMouseDown:ao,children:[r&&(x||m||b&&u?(0,he.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[x||m?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${y}`,children:[d(pR[y]),S&&` (${w.completed}/${w.total})`]}),x?(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:d("exec.pauseTitle"),children:(0,he.jsx)(ed,{size:14})}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:d("exec.resumeTitle"),children:(0,he.jsx)(Ea,{size:14})}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:d("exec.cancelTitle"),children:(0,he.jsx)(Lt,{size:14})})]}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,he.jsx)(Ea,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&u&&(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:d("exec.resetTitle"),children:(0,he.jsx)(ad,{size:14})})]}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||d("exec.runAll"),"aria-label":d("exec.runAll"),children:(0,he.jsx)(Ea,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,he.jsxs)("div",{className:"wf-header-capsule",children:[(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:d("header.fitView"),children:(0,he.jsx)($u,{size:15})}),(0,he.jsx)("div",{className:"wf-header-capsule__divider"}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:d("header.zoomOut"),children:(0,he.jsx)(Qu,{size:15})}),(0,he.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:d("header.fitView"),children:[g,"%"]}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:d("header.zoomIn"),children:(0,he.jsx)(Ke,{size:15})})]}),(0,he.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:d("header.alignGrid"),children:(0,he.jsx)(pl,{size:15})}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.routingCurved"),children:(0,he.jsx)(id,{size:15})}),(0,he.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:d("header.minimap"),children:(0,he.jsx)(Ku,{size:15})}),n&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{className:"wf-header-capsule__divider"}),(0,he.jsx)(sd,{items:k,selectedKeys:[o],placement:"bottomRight",children:(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:d("header.splitLayout"),children:(0,he.jsx)(Sr,{size:15})})})]})]})]})},GL=(0,Ki.memo)(gR);var Fo=R(J(),1);var de=R(X(),1),hR=[{key:"all",label:"\u5168\u90E8",icon:xr},{key:"character",label:"\u89D2\u8272 (1)",icon:Ta},{key:"scene",label:"\u573A\u666F (2)",icon:go},{key:"prop",label:"\u9053\u5177 (3)",icon:rd},{key:"style",label:"\u98CE\u683C (4)",icon:Ta},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:Kt},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:xr},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:Ut}],xR=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,Fo.useState)(o),[i,s]=(0,Fo.useState)(""),[u,d]=(0,Fo.useState)([]),[f,c]=(0,Fo.useState)(!1),[p,g]=(0,Fo.useState)(null),y=(0,Fo.useCallback)(async()=>{c(!0),g(null);try{let x=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${x}`),b=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(b=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let S=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(S=_.artifacts.map(k=>({id:k.id,name:k.name||k.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:k.prompt||k.agent,real_path:k.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(k.id)}`,tags:[k.type||"artifact"],updatedAt:k.createdAt})))}}let C=[...b,...S];d(C)}catch(x){g(x.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{c(!1)}},[r]);(0,Fo.useEffect)(()=>{e&&y()},[e,y]);let w=x=>{l(x),n?.(x)},h=u.filter(x=>{if(!i.trim())return!0;let m=i.toLowerCase();return x.name.toLowerCase().includes(m)||x.description&&x.description.toLowerCase().includes(m)||x.tags&&x.tags.some(b=>b.toLowerCase().includes(m))});return e?(0,de.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:ao,onMouseDown:ao,onClick:x=>x.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,de.jsx)(xr,{size:18}),(0,de.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,de.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:y,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,de.jsx)(Cr,{size:14,className:f?"wf-spin":""})}),(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,de.jsx)(Lt,{size:16})})]})]}),(0,de.jsx)("div",{className:"wf-assets-drawer__categories",children:hR.map(x=>{let m=x.icon,b=r===x.key;return(0,de.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${b?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(x.key),children:[(0,de.jsx)(m,{size:13}),(0,de.jsx)("span",{children:x.label})]},x.key)})}),(0,de.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,de.jsx)(hl,{size:14,className:"wf-assets-drawer__search-icon"}),(0,de.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:x=>s(x.target.value)}),i&&(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,de.jsx)(Lt,{size:12})})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__body",children:[f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(Cr,{size:20,className:"wf-spin"}),(0,de.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),p&&!f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,de.jsx)("span",{children:p}),(0,de.jsx)("button",{type:"button",onClick:y,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!f&&!p&&h.length===0&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(xr,{size:32,strokeWidth:1.2}),(0,de.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,de.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!f&&!p&&h.length>0&&(0,de.jsx)("div",{className:"wf-assets-drawer__grid",children:h.map(x=>(0,de.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(x),title:`\u70B9\u51FB\u5C06\u300C${x.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,de.jsxs)("div",{className:"wf-assets-card__preview",children:[x.type==="scene"||x.type==="character"||x.type==="artifacts"?(0,de.jsx)("img",{src:x.previewUrl,alt:x.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,de.jsx)(Kt,{size:24,className:"wf-assets-card__file-icon"}),(0,de.jsx)("span",{className:"wf-assets-card__type-tag",children:x.type})]}),(0,de.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,de.jsx)("div",{className:"wf-assets-card__name",children:x.name}),x.description&&(0,de.jsx)("div",{className:"wf-assets-card__desc",children:x.description})]}),(0,de.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(x)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,de.jsx)(Ke,{size:14}),(0,de.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},x.id))})]})]}):null},XL=xR;var kt=R(X(),1),bR=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],yR=({isOpen:e,onClose:t})=>e?(0,kt.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:ao,onMouseDown:ao,onClick:t,children:(0,kt.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,kt.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,kt.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,kt.jsx)(Zu,{size:18}),(0,kt.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,kt.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,kt.jsx)(Lt,{size:16})})]}),(0,kt.jsx)("div",{className:"wf-shortcuts-modal__body",children:bR.map(a=>(0,kt.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,kt.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,kt.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,kt.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,kt.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,kt.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,kt.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,YL=yR;var oo=R(J(),1),WL=R(_o(),1);var It=R(X(),1),jL=278,Sl=12,wR=8,Cx=160,Cl=18,vR={AudioLines:(0,It.jsx)(cl,{size:Cl}),ImageGen:(0,It.jsx)(yn,{size:Cl}),Mic:(0,It.jsx)(ml,{size:Cl}),PersonStanding:(0,It.jsx)(td,{size:Cl}),TextGen:(0,It.jsx)(wn,{size:Cl}),VideoGen:(0,It.jsx)(ho,{size:Cl})},CR={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function ZL(e){return e?CR[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function SR(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-jL:e;return Math.min(Math.max(Sl,o),Math.max(Sl,a-jL-Sl))}var LR=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,oo.useRef)(null),[u,d]=(0,oo.useState)({left:t,top:a,maxHeight:Cx});(0,oo.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?Cx:window.innerHeight,p=SR(t,i),g=a+wR,y=Math.max(Sl,c-Sl-Cx),w=Math.min(Math.max(Sl,g),y);d({left:p,top:w,maxHeight:Math.max(0,c-w-Sl)})},[i,e,t,a]),(0,oo.useEffect)(()=>{if(!e)return;let c=g=>{s.current&&!s.current.contains(g.target)&&l()},p=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[l,e]);let f=(0,oo.useMemo)(()=>n.map(c=>(0,It.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,It.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,It.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:ZL(c.icon).bg,color:ZL(c.icon).color},children:vR[c.icon]??(0,It.jsx)(Ta,{size:Cl})}):null,(0,It.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,It.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,It.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,WL.createPortal)((0,It.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,It.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,It.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},pp=(0,oo.memo)(LR);var no=R(J(),1),KL=R(_o(),1);var Re=R(X(),1),_R=210,kR=230,IR=260,MR=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:d=!1})=>{let f=(0,no.useRef)(null),[c,p]=(0,no.useState)("main"),g=ie();(0,no.useEffect)(()=>{a&&p("main")},[a]),(0,no.useEffect)(()=>{if(!a)return;let b=C=>{f.current&&!f.current.contains(C.target)&&n()},S=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",S)}},[a,n]);let y=(0,no.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!d},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!d},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,Re.jsx)(Ke,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,u,d,g]),w=(0,no.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Re.jsx)(wn,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Re.jsx)(go,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Re.jsx)(ho,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Re.jsx)(cl,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,Re.jsx)(Aa,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,Re.jsx)(Ut,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?kR:_R,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-IR-8);return(0,KL.createPortal)((0,Re.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:b=>b.preventDefault(),children:c==="main"?y.map(b=>(0,Re.jsxs)(no.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Re.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:S=>{S.stopPropagation(),b.action==="open-add-node"?p("add-node"):r(b.action,o)},children:[b.icon?(0,Re.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,Re.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,Re.jsx)(Xi,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,Re.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,Re.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Re.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Re.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),p("main")},title:g("menu.back"),children:(0,Re.jsx)(Pu,{size:16})}),(0,Re.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Re.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(b=>(0,Re.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:S=>{S.stopPropagation(),l?.(b.type),n()},children:[(0,Re.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,Re.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,Re.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,Re.jsx)(Xi,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},$L=MR;var QL=R(J(),1),JL=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:u,onToggleShortcuts:d,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:y,onCategoryKey:w,isAssetsOpen:h=!1,enabled:x=!0})=>{(0,QL.useEffect)(()=>{if(!x)return;let m=b=>{let S=b.target;if(["INPUT","TEXTAREA"].includes(S.tagName)||S.isContentEditable)return;let C=b.metaKey||b.ctrlKey,v=b.key.toLowerCase();if(!C&&h&&/^[1-6]$/.test(b.key)){b.preventDefault(),w?.(parseInt(b.key,10));return}if(!C&&v==="a"){b.preventDefault(),u?.();return}if(!C&&v==="v"){b.preventDefault(),p?.("select");return}if(!C&&v==="h"){b.preventDefault(),p?.("pan");return}if(!C&&v==="n"){b.preventDefault(),c?.();return}if(!C&&v==="m"){b.preventDefault(),f?.();return}if(b.key==="?"||b.shiftKey&&b.key==="/"){b.preventDefault(),d?.();return}if(C&&b.key==="1"){b.preventDefault(),g?.();return}if(C&&b.key==="0"){b.preventDefault(),y?.();return}if((b.key==="Delete"||b.key==="Backspace")&&l&&!C){b.preventDefault(),o?.();return}if(b.key==="Escape"){b.preventDefault(),h?u?.():l&&n?.();return}if(C&&v==="d"&&l){b.preventDefault(),r?.();return}if(C&&v==="c"&&!b.shiftKey){b.preventDefault(),e?.();return}if(C&&v==="v"){b.preventDefault(),t?.();return}if(C&&v==="a"){b.preventDefault(),a?.();return}if(C&&v==="z"&&!b.shiftKey){b.preventDefault(),i?.();return}C&&v==="z"&&b.shiftKey&&(b.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,e,t,a,o,n,r,l,i,s,u,d,f,c,p,g,y,w,h])};var bo=R(J(),1);function mp(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function e_(e,t,a){return Sx(e,t,a).valid}function Sx(e,t,a){let o=op(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var Lx={minZoom:.23,maxZoom:1.29,defaultZoom:1},NR={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},t_={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},ER={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},TR={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},a_={portrait:NR,square:t_,video_landscape:ER,audio_compact:TR};function _x(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function o_(e){return a_[_x(e)]}function n_(e,t){let a=a_[t]||t_;return Math.round(e/a.aspectRatio)}function kr(e){return o_(e).default.width}function r_(e){return o_(e).default.height}function gp(e,t,a){let o=tp(e,{status:"empty",nodeWidth:kr(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function Ll(e,t,a){return{nodes:[gp(e,t,a)],edges:[]}}function kx(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function AR(e,t){return`${e}-${t}`}function hp(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function xp(e){return LL(e).map(t=>{let a=String(t.targetTool);return{key:AR(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function l_(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var RR={visible:!1,x:0,y:0,options:[]};function i_(e){let t=ie(),{screenToFlowPosition:a}=Na(),o=ue(p=>p.applyCanvasInputMutation),n=(0,bo.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,bo.useState)(RR),i=(0,bo.useRef)(null),s=(0,bo.useRef)(null),u=(0,bo.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let y=ue.getState().nodes.find(h=>h.id===g.nodeId),w=y?.data?.materialType;if(!y||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),d=(0,bo.useCallback)((p,g)=>{let y=g.fromNode?.id??null,w=g.toNode?.id??null,h=i.current,x=h?xp(h.materialType):[],m=null;if(!g.isValid&&y&&w){let S=ue.getState(),C=Sx({source:y,target:w,sourceHandle:null,targetHandle:null},S.nodes,S.edges);m=C.valid?null:t(mp(C.reasonCode))}let b=l_({isValid:g.isValid??null,fromNodeId:y,toNodeId:w,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),$t.warning(b.reason),i.current=null;return}if(b.type==="menu"&&h){let S="changedTouches"in p?p.changedTouches[0]:p;if(!S){i.current=null;return}let{clientX:C,clientY:v}=S;s.current=a({x:C,y:v}),l({visible:!0,x:C,y:v,options:x.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),f=(0,bo.useCallback)(p=>{let g=i.current,y=s.current,w=hp(p);if(g&&y&&w){let h=Ll(w.targetMaterialType,y),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}l(h=>({...h,visible:!1})),i.current=null,s.current=null},[o]),c=(0,bo.useCallback)(()=>{l(p=>({...p,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:d,onMenuSelect:f,onMenuClose:c}}var qo=R(J(),1);var zt=[];for(let e=0;e<256;++e)zt.push((e+256).toString(16).slice(1));function s_(e,t=0){return(zt[e[t+0]]+zt[e[t+1]]+zt[e[t+2]]+zt[e[t+3]]+"-"+zt[e[t+4]]+zt[e[t+5]]+"-"+zt[e[t+6]]+zt[e[t+7]]+"-"+zt[e[t+8]]+zt[e[t+9]]+"-"+zt[e[t+10]]+zt[e[t+11]]+zt[e[t+12]]+zt[e[t+13]]+zt[e[t+14]]+zt[e[t+15]]).toLowerCase()}var Ix,DR=new Uint8Array(16);function Mx(){if(!Ix){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ix=crypto.getRandomValues.bind(crypto)}return Ix(DR)}var zR=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Nx={randomUUID:zR};function PR(e,t,a){e=e||{};let o=e.random??e.rng?.()??Mx();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return s_(o)}function OR(e,t,a){return Nx.randomUUID&&!t&&!e?Nx.randomUUID():PR(e,t,a)}var bp=OR;function u_(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function BR(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function d_(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=BR(o),l,i;if(t)l=t.x,i=t.y;else{let f=a?50:30;l=r.x+f,i=r.y+f}let s=new Map,u=o.map(f=>{let c=bp();return s.set(f.id,c),{...f,id:c,position:{x:l+(f.position.x-r.x),y:i+(f.position.y-r.y)},selected:!0}}),d=n.map(f=>({...f,id:bp(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:d,newPastePosition:{x:l,y:i}}}function c_(e,t){let a=(0,qo.useRef)({nodes:[],edges:[]}),o=(0,qo.useRef)(null),n=a.current.nodes.length>0,r=(0,qo.useCallback)(()=>{let f=ue.getState(),c=u_(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),l=(0,qo.useCallback)(f=>{let c=d_(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=ue.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,qo.useCallback)(()=>{r(),l()},[r,l]),s=(0,qo.useCallback)(()=>{let f=ue.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),u=(0,qo.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),d=(0,qo.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:d}}var Vo=R(J(),1);function f_(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:u,redo:d,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,Vo.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),y=(0,Vo.useCallback)((C,v)=>{C.preventDefault();let _={type:"pane"};v?_={type:"node",nodeId:v.id}:ue.getState().nodes.filter(T=>T.selected).length>1&&(_={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:_})},[]),w=(0,Vo.useCallback)((C,v)=>{y(C,v)},[y]),h=(0,Vo.useCallback)(C=>{y(C)},[y]),x=(0,Vo.useCallback)(C=>{y(C)},[y]),m=(0,Vo.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),b=(0,Vo.useCallback)((C,v)=>{let _=t({x:p.x,y:p.y});switch(C){case"copy":{if(v.type==="node"){let T=ue.getState().nodes.find(N=>N.id===v.nodeId);T&&!T.selected&&(s(),a(N=>N.map(U=>U.id===v.nodeId?{...U,selected:!0}:U)))}o();break}case"paste":n(_);break;case"duplicate":r();break;case"delete":{if(v.type==="node"){let k=ue.getState();k.nodes.find(N=>N.id===v.nodeId)?.selected?l():k.applyCanvasInputMutation({removeNodeIds:[v.nodeId]})}else l();break}case"undo":u();break;case"redo":d();break;case"select-all":i();break;case"execute-selection":{let k=ue.getState().nodes.filter(T=>T.selected).map(T=>T.id);k.length>0&&f?.(k);break}case"execute-node":{v.type==="node"&&f?.([v.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,l,u,d,i,m,f]),S=(0,Vo.useCallback)(C=>{let v=t({x:p.x,y:p.y});c?.(C,v),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:w,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:S}}var HR=R(J(),1),Ex=new Map;function yp(e){Ex.set(e.type,e)}function p_(){let e={};for(let[t,a]of Ex)e[t]=a.component;return e}function m_(e,t,a){let o=Ex.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var et=R(J(),1);var Ve=R(J(),1);function g_(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var yo=R(X(),1),UR=4,FR=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=ie(),[l,i]=(0,Ve.useState)(!1),[s,u]=(0,Ve.useState)(!1),[d,f]=(0,Ve.useState)(null),c=(0,Ve.useRef)(null),p=(0,Ve.useRef)(null),g=(0,Ve.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),y=e==="left",w=a==="plus"&&!!o&&o.length>0,h=fx(I=>I.inProgress),{screenToFlowPosition:x}=Na(),m=(0,Ve.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Ve.useEffect)(()=>{if(a!=="plus"){m();return}let I=c.current,A=p.current;if(!I||!A)return;let z=V=>{if(s)return;let D=I.getBoundingClientRect(),F=D.left+D.width/2,Z=D.top+D.height/2,{x:K,y:W}=g_(e,V.clientX-F,V.clientY-Z);A.style.setProperty("--wf-handle-offset-x",`${K}px`),A.style.setProperty("--wf-handle-offset-y",`${W}px`)};return I.addEventListener("pointermove",z),()=>{I.removeEventListener("pointermove",z)}},[s,m,e,a]),(0,Ve.useEffect)(()=>{if(!s){m(),f(null);return}let I=()=>{let A=c.current;if(!A)return;let z=A.getBoundingClientRect();f({x:y?z.right:z.left,y:z.bottom})};return I(),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),()=>{window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)}},[s,y,m]);let b=(0,Ve.useCallback)(()=>{i(!0)},[]),S=(0,Ve.useCallback)(()=>{i(!1),m()},[m]),C=(0,Ve.useCallback)(I=>{let A=c.current;!A||I===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(I)||A.releasePointerCapture(I)},[]),v=(0,Ve.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),_=(0,Ve.useCallback)(I=>{I.button===0&&(typeof I.currentTarget.setPointerCapture=="function"&&I.currentTarget.setPointerCapture(I.pointerId),g.current.pointerId=I.pointerId,g.current.startX=I.clientX,g.current.startY=I.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),k=(0,Ve.useCallback)(I=>{if(g.current.pointerId!==I.pointerId)return;Math.hypot(I.clientX-g.current.startX,I.clientY-g.current.startY)>=UR&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),T=(0,Ve.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),N=(0,Ve.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.suppressClick=!1,v())},[v]),U=(0,Ve.useCallback)(I=>{if(I.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&u(A=>!A)},[w]),O=(0,Ve.useCallback)(()=>{let I=d;if(!I){let A=c.current;if(!A)return;let z=A.getBoundingClientRect();I={x:y?z.right:z.left,y:z.bottom}}return{screenPosition:I,flowPosition:x(I)}},[y,d,x]),L=(0,Ve.useCallback)(I=>{n?.(I,O()),u(!1)},[n,O]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,yo.jsxs)(Vi,{id:y?"in":"out",type:y?"target":"source",position:y?ae.Left:ae.Right,isConnectable:!0,className:M,style:E,children:[(0,yo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,yo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,yo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,yo.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:S,onPointerDown:_,onPointerMove:k,onPointerUp:T,onPointerCancel:N,onClick:U,children:(0,yo.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,yo.jsx)("div",{className:"wf-handle__plus-button",children:(0,yo.jsx)(Ke,{size:24,strokeWidth:2.5})})})}):null,w&&d?(0,yo.jsx)(pp,{visible:s,x:d.x,y:d.y,align:y?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},Cn=(0,Ve.memo)(FR);var wo=R(J(),1);var Pt=R(X(),1);function qR(e){let t=ie();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var VR=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=ie(),u=(0,wo.useRef)(e),[d,f]=(0,wo.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,wo.useState)(1),[g,y]=(0,wo.useState)(e==="completed"?1:0),[w,h]=(0,wo.useState)(e==="pending"||e==="generating");(0,wo.useEffect)(()=>{let U=u.current;if(u.current=e,(U==="pending"||U==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),y(1)});let O=setTimeout(()=>{f("complete"),h(!1)},i+50);return()=>clearTimeout(O)}U==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),y(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),y(0),f("idle")),e==="failed"&&(h(!1),f("idle")),U===e&&e==="completed"&&(f("complete"),y(1),h(!1))},[e,i]);let x=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",S=s(e==="pending"?"node.preparing":"node.generating"),C=qR(a),v=(0,wo.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,k=()=>(0,Pt.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:c},children:(0,Pt.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,Pt.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,Pt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,Pt.jsx)("span",{className:"wf-gsc__progress-text",children:S})})]})}),T=()=>(0,Pt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,Pt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,Pt.jsx)(Lt,{size:24})}),(0,Pt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),C?(0,Pt.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,Pt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,Pt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,Pt.jsx)(Cr,{size:14}),s("node.regenerate")]}):null]}),N=U=>(0,Pt.jsx)("div",{className:`${l} ${U?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,Pt.jsxs)("div",{className:`wf-gsc ${x?_:""} ${l}`,children:[(x||w)&&k(),m&&T(),(b||d==="crossfading")&&N(d==="crossfading")]})},md=VR;var gt=R(J(),1);function ro(e){return e>0?1/e:1}function h_(e,t,a){return!!e&&!t&&a!=="running"}function x_(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var Ir=R(X(),1),b_=24,y_=30,w_={text:Kt,image:yn,video:ho,audio:eo,table:Aa,video_composition:Ut},GR=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=ie(),l=t?r(`node.type.${t}`):"\u8282\u70B9",i=e||l,{zoom:s}=Qa(),[u,d]=(0,gt.useState)(!1),[f,c]=(0,gt.useState)(i),p=(0,gt.useRef)(null),g=(0,gt.useMemo)(()=>ro(s),[s]);(0,gt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,gt.useEffect)(()=>{u||c(i)},[i,u]);let y=(0,gt.useCallback)(C=>{C.stopPropagation(),d(!0),c(i)},[i]),w=(0,gt.useCallback)(()=>{let v=f.trim()||l;d(!1),v!==e&&o&&o(v)},[f,l,e,o]),h=(0,gt.useCallback)(()=>{d(!1),c(i)},[i]),x=(0,gt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),w()):C.key==="Escape"&&(C.preventDefault(),h())},[w,h]),m=(0,gt.useCallback)(C=>{let v=C.target.value;v.length<=y_&&c(v)},[]),b=()=>{if(a)return gt.default.isValidElement(a)?a:(0,Ir.jsx)(a,{size:14});let C=(t in w_?w_[t]:null)||Kt;return(0,Ir.jsx)(C,{size:14})};return(0,Ir.jsxs)("div",{className:"wf-node-header",style:{top:-(b_+4*g),height:b_,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Ir.jsx)("span",{className:"wf-node-header__icon",children:b()}),u?(0,Ir.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:w,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:y_}):(0,Ir.jsx)("span",{onDoubleClick:y,className:"wf-node-header__label",title:i.length>20?i:r("node.renameHint"),children:i}),n]})},$i=(0,gt.memo)(GR);var wp=R(J(),1);var Sn=R(X(),1),XR=({executionStatus:e,status:t})=>{let a=ie();return(0,wp.useMemo)(()=>{switch(e){case"running":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Sn.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});default:return null}},[e,t,a])},vp=(0,wp.memo)(XR);var _l=R(J(),1);function Ln(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var gd=R(X(),1);var YR=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,_l.useMemo)(()=>Ln(e,t,a),[e,t,a]),l=(0,_l.useCallback)(s=>{let u=s.currentTarget;u.naturalWidth>0&&u.naturalHeight>0&&n?.(u.naturalWidth,u.naturalHeight)},[n]),i=(0,_l.useCallback)(s=>{let u=s.currentTarget;u.videoWidth>0&&u.videoHeight>0&&n?.(u.videoWidth,u.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,gd.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,gd.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,gd.jsx)("div",{className:"wf-media-preview__audio",children:(0,gd.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},v_=(0,_l.memo)(YR);var C_=R(J(),1);var Oe=R(X(),1),jR=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=ie();return e==="text"?(0,Oe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Oe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Oe.jsx)(Kt,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Oe.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,Oe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,Oe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,Oe.jsx)(Oo,{size:14,className:"wf-node-empty__pill-icon"}),(0,Oe.jsx)("span",{children:o("pills.writePrompt")})]}),(0,Oe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,Oe.jsx)(Bu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Oe.jsx)("span",{children:o("pills.scriptGen")})]}),(0,Oe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,Oe.jsx)(zo,{size:14,className:"wf-node-empty__pill-icon"}),(0,Oe.jsx)("span",{children:o("pills.planningGen")})]}),(0,Oe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,Oe.jsx)(Ta,{size:14,className:"wf-node-empty__pill-icon"}),(0,Oe.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,Oe.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Oe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Oe.jsx)(go,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Oe.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Oe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Oe.jsx)(Ea,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Oe.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Oe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Oe.jsx)(eo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},Cp=(0,C_.memo)(jR);var _n=R(J(),1);var Mt=R(X(),1),ZR=({materialType:e,selected:t,onOpenResourcePicker:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=ie(),{zoom:i}=Qa(),[s,u]=_n.default.useState(!1),d=(0,_n.useMemo)(()=>ro(i),[i]),f=(0,_n.useCallback)(()=>{n&&(n(),u(!0),setTimeout(()=>u(!1),1500))},[n]),c=(0,_n.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,Mt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*d),transform:`translate(-50%, -100%) scale(${d})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,Mt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Mt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,Mt.jsx)(zo,{size:13,className:"wf-floating-top-pill__icon"}),(0,Mt.jsx)("span",{children:l("pill.textEdit")})]}),(0,Mt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Mt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:f,title:l("pill.copy"),children:s?(0,Mt.jsx)(Ja,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Mt.jsx)(Hu,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Mt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Mt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,Mt.jsx)(Po,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,Mt.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Mt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,children:[(0,Mt.jsx)(yl,{size:13,className:"wf-floating-top-pill__icon"}),(0,Mt.jsx)("span",{children:c})]})})})},S_=(0,_n.memo)(ZR);var Qi=R(J(),1);var L_=R(J(),1),__=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function WR(e,t,a=__){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function k_({refs:e,excludeSelectors:t=__,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,L_.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=d=>{let f=d.target;WR(f,r.map(c=>c.current),t)&&a()},i=d=>{d.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var Tx=R(X(),1),KR=480,$R=({children:e,onClose:t,width:a=KR})=>{let{zoom:o}=Qa(),n=(0,Qi.useRef)(null),r=(0,Qi.useMemo)(()=>ro(o),[o]);return k_({refs:n,onClose:t}),(0,Tx.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,Tx.jsx)("div",{className:"wf-panel-shell__card",children:e})})},I_=(0,Qi.memo)($R);var Ra=R(J(),1);var M_=R(J(),1),Ji=R(X(),1),Ax={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},QR=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function JR(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Ax[t])return t;for(let a of QR)if(a.regex.test(t))return a.brand;return null}var N_=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,M_.useMemo)(()=>t&&Ax[t.toLowerCase()]?t.toLowerCase():JR(e),[t,e]),i=l?Ax[l]:null;if(!i){if(r)return(0,Ji.jsx)(Ji.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,Ji.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,Ji.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var E_=R(J(),1);function T_(e){let t=YS(),a=jS();return(0,E_.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(d=>d.id===n);if(!r)return[];let l=r.data||{},i=Ln(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",u=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:u,textContent:s}]}),[t,a,e])}var A_=R(J(),1),R_="wf_capabilities_catalog_v1",eD={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function hd(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(R_);return e?JSON.parse(e):null}catch{return null}}function D_(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(R_,JSON.stringify(e))}catch{}}function z_(e,t,a){return(0,A_.useMemo)(()=>{let n=(a??hd())?.[e]??[],r=n.find(b=>b.id===t)??n[0],l=eD[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",d=b=>b?s.some(S=>S.value===b):!1,f=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],c=i.duration?.defaultValue??f[0]?.value??5,p=b=>typeof b!="number"?!1:f.some(S=>S.value===b),g=i.resolution?.options??[],y=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],h=i.quality?.defaultValue??w[0]?.value??"",x=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:d,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:y,qualityOptions:w,defaultQuality:h,hasSoundSupport:x,defaultSound:m}},[e,t,a])}var P_=R(J(),1);var kn=R(X(),1),tD=({onClick:e,disabled:t,isGenerating:a})=>{let o=ie();return(0,kn.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,kn.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,kn.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,kn.jsx)(yr,{size:14,className:"wf-generate-btn__spin"}):(0,kn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,kn.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,kn.jsx)("path",{d:"M12 19V5"})]})})]})},O_=(0,P_.memo)(tD);var Q=R(X(),1);function aD(e){let t=(0,Q.jsx)(N_,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var oD=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:l})=>{let i=ie(),{materialType:s,selectedTool:u,params:d,prompt:f}=t,[c,p]=(0,Ra.useState)(!1),[g,y]=(0,Ra.useState)(!1),w=T_(e),h=u==="text-to-music"?"music":"speech",x=(0,Ra.useCallback)(D=>{o({selectedTool:D==="music"?"text-to-music":"text-to-audio"})},[o]),m=(0,Ra.useMemo)(()=>{let D=a?.[s]??[];return D.length===0&&(s==="text"?D=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?D=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?D=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(D=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),D.map(F=>{let Z=aD(F.id),K=Z.icon,W=F.badge??Z.badge,ne=F.subtitle??Z.subtitle;return{value:F.id,label:F.label,triggerLabel:(0,Q.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[K?(0,Q.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:K}):null,(0,Q.jsx)("span",{children:F.label})]}),icon:K,badge:W,subtitle:ne}})},[a,s]),b=typeof d.model=="string"?d.model:m[0]?.value,{aspectRatioOptions:S,defaultAspectRatio:C,isAspectRatioValid:v,durationOptions:_,defaultDuration:k,isDurationValid:T,resolutionOptions:N,defaultResolution:U}=z_(s,b,a),O=(0,Ra.useCallback)((D,F)=>{o({params:{...d,[D]:F}})},[o,d]),L=(0,Ra.useCallback)(D=>{let W=((a??hd())?.[s]??[]).find(ee=>ee.id===D)?.parameters,ne={...d,model:D};d.aspectRatio&&W?.aspectRatio?.options&&(W.aspectRatio.options.some(q=>q.value===d.aspectRatio)||(ne.aspectRatio=W.aspectRatio.defaultValue||"16:9")),typeof d.duration=="number"&&W?.duration?.options&&(W.duration.options.some(q=>q.value===d.duration)||(ne.duration=W.duration.defaultValue||W.duration.options[0]?.value||5)),d.resolution&&W?.resolution?.options?W.resolution.options.some(q=>q.value===d.resolution)||(ne.resolution=W.resolution.defaultValue||W.resolution.options[0]?.value):d.resolution&&W&&!W.resolution?.options&&delete ne.resolution,o({params:ne})},[a,s,o,d]),M=(0,Ra.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),E=(0,Ra.useMemo)(()=>{switch(s){case"text":return i("panel.textPromptPlaceholder");case"image":return i("panel.imagePromptPlaceholder");case"video":return i("panel.videoPromptPlaceholder");case"audio":return i(h==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return i("panel.promptPlaceholder")}},[s,h,i]),I=typeof d.aspectRatio=="string"&&v(d.aspectRatio)?d.aspectRatio:C,A=typeof d.duration=="number"&&T(d.duration)?d.duration:k,z=D=>!!D&&N.some(F=>F.value===D),V=typeof d.resolution=="string"&&z(d.resolution)?d.resolution:U;return(0,Q.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,Q.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${h==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>x("speech"),children:[(0,Q.jsx)(ml,{size:13}),(0,Q.jsx)("span",{children:i("panel.audioGen")})]}),(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${h==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>x("music"),children:[(0,Q.jsx)(eo,{size:13}),(0,Q.jsx)("span",{children:i("panel.musicGen")})]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[w.length>0||l?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[w.map(D=>(0,Q.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${D.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${D.label} (${D.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[D.url&&D.materialType==="image"?(0,Q.jsx)("img",{src:D.url,alt:D.label,className:"wf-config-panel__ref-thumb-media"}):D.url&&D.materialType==="video"?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,Q.jsx)("video",{src:D.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,Q.jsx)(Ea,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):D.materialType==="audio"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,Q.jsx)(eo,{size:13})}):D.materialType==="text"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,Q.jsx)(Kt,{size:13})}):(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,Q.jsx)(go,{size:13})}),D.hasMedia&&(0,Q.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},D.nodeId)),l?(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:l,title:i("picker.addRef"),children:(0,Q.jsx)(Ke,{size:14})}):null]}):(0,Q.jsx)("span",{}),(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>p(!0),title:i("header.fitView"),children:(0,Q.jsx)(wr,{size:13})})]}),(0,Q.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:E,rows:3,onChange:D=>o({prompt:D.target.value})}),(0,Q.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",M]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,Q.jsx)(fa,{className:"wf-param-bar__select wf-param-bar__select--model",value:b,options:m,popupMatchSelectWidth:!1,onChange:D=>L(D)}),s==="image"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,Q.jsx)(fa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:D=>O("aspectRatio",D)})})]}),s==="video"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,Q.jsx)(fa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:D=>O("aspectRatio",D)}),(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(fa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:_,popupMatchSelectWidth:!1,onChange:D=>O("duration",D)}),N.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(fa,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:V,options:N,popupMatchSelectWidth:!1,onChange:D=>O("resolution",D)})]})]})]}),s==="audio"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!g),title:i("panel.advanced"),children:(0,Q.jsx)(nd,{size:13})})]})]}),(0,Q.jsx)("div",{className:"wf-config-panel__action-group",children:(0,Q.jsx)(O_,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),g&&(0,Q.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,Q.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,Q.jsx)("span",{className:"wf-config-panel__advanced-label",children:i("panel.duration")}),(0,Q.jsx)(hx,{style:{flex:1},min:1,max:s==="video"?20:60,value:A,onChange:D=>O("duration",D)})]})}),(0,Q.jsx)(wl,{title:i("panel.promptPlaceholder"),open:c,onCancel:()=>p(!1),width:680,children:(0,Q.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:E,rows:10,onChange:D=>o({prompt:D.target.value})})})]})},B_=(0,Ra.memo)(oD);var pa=R(J(),1);var Rx=["image","video","audio"],nD=80,rD=40;function q_(e){return!!e&&typeof e=="object"}function V_(e){return q_(e.data)?e.data:{}}function G_(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function lD(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function X_(e,t=""){let a=(e||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=lD(t);return["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"].includes(o)?"image":["mp4","webm","mov","mkv","avi","m4v"].includes(o)?"video":["mp3","wav","m4a","aac","flac","ogg","opus"].includes(o)?"audio":null}function Y_(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function iD(e){let t=e.dimensions;if(q_(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function sD(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function uD(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function j_(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function dD(e,t){if(!Rx.includes(e))return!1;if(Ln(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function Z_(e,t,a){let o=j_(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let l=V_(r),i=G_(l.materialType);if(!i||!dD(i,l))continue;let s=sD(l,r.id),u=iD(l);n.push({nodeId:r.id,materialType:i,title:s,previewUrl:Ln(i,l.mediaAssets,typeof l.mediaUrl=="string"?l.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:uD(l,s,r.id,u),width:u.width,height:u.height})}return n}function W_(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function H_(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function U_(e,t){return ap(e,t)}function F_(e){return{mediaUrl:e.objectUrl,status:"ready",content:e.name,mediaAssets:[{type:e.materialType,url:e.objectUrl}]}}function cD(e,t,a){let o=kr(a),n=r_(a);return{x:e.position.x-o-nD,y:e.position.y+t*(n+rD)}}function fD(e){return G_(V_(e).materialType)}function K_(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(y=>y.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let l=j_(e.edges,e.targetNodeId),i=new Set(l);for(let y of e.selectedCanvasNodeIds){if(y===e.targetNodeId){t.push({id:y,reason:"self"});continue}if(l.has(y)||i.has(y)){t.push({id:y,reason:"already_connected"});continue}let w=e.nodes.find(h=>h.id===y);if(!w){t.push({id:y,reason:"missing"});continue}if(!U_(w,r)){t.push({id:y,reason:"type_contract"});continue}a.push(H_(y,e.targetNodeId)),i.add(y)}let s=e.localFiles.filter(y=>!y.objectUrl||!Rx.includes(y.materialType)?(t.push({id:y.id,reason:"unsupported"}),!1):!0),u=fD(r),d=s[0],f=!!u&&Rx.includes(u)&&!!d&&d.materialType===u,c=0,p=f?s.slice(1):s;f&&d&&n.push({nodeId:e.targetNodeId,data:F_(d)});for(let y of p){let w=cD(r,c,y.materialType),h=gp(y.materialType,w,{...F_(y),label:y.name.replace(/\.[^.]+$/,"")||y.name});if(!U_(h,r)){t.push({id:y.id,reason:"type_contract"});continue}o.push(h),a.push(H_(h.id,e.targetNodeId)),i.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}var kl=R(J(),1);var xe=R(X(),1);function Sp(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var pD=({items:e,selectedIds:t,onToggle:a})=>{let o=ie(),[n,r]=(0,kl.useState)(""),[l,i]=(0,kl.useState)("all"),[s,u]=(0,kl.useState)("grid"),d=(0,kl.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,kl.useMemo)(()=>W_(e,n,l),[e,n,l]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,xe.jsxs)("div",{className:"wf-picker-pane",children:[(0,xe.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,xe.jsxs)("label",{className:"wf-picker-search",children:[(0,xe.jsx)(hl,{size:14,className:"wf-picker-search__icon"}),(0,xe.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,xe.jsx)(fa,{className:"wf-picker-filter",variant:"standard",value:l,options:d,onChange:p=>i(p)}),(0,xe.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,xe.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>u("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,xe.jsx)(pl,{size:14})}),(0,xe.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>u("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,xe.jsx)(Wu,{size:14})})]})]}),f.length===0?(0,xe.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,xe.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,xe.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,xe.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,xe.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,xe.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,xe.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(Sp(p.materialType))}),p.alreadyConnected?(0,xe.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,xe.jsx)(Ja,{size:11}),o("picker.added")]}):(0,xe.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,xe.jsx)(Ja,{size:11}):null})]}),(0,xe.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,xe.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,xe.jsx)("span",{className:"wf-picker-type-tag",children:o(Sp(p.materialType))})]})]},p.nodeId)})}):(0,xe.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,xe.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,xe.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,xe.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,xe.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,xe.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(Sp(p.materialType))})}),(0,xe.jsxs)("div",{className:"wf-picker-row__body",children:[(0,xe.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,xe.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(Sp(p.materialType))]})]}),p.alreadyConnected?(0,xe.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,xe.jsx)(Ja,{size:11}),o("picker.added")]}):(0,xe.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,xe.jsx)(Ja,{size:11}):null})]},p.nodeId)})})]})},$_=pD;var Il=R(J(),1);var dt=R(X(),1);function mD(e){let t=X_(e.type,e.name);return t?{id:`${e.name}-${e.size}-${e.lastModified}-${Math.random().toString(36).slice(2,8)}`,name:e.name,mime:e.type,size:e.size,objectUrl:URL.createObjectURL(e),materialType:t}:null}var gD=({files:e,onAddFiles:t,onRemove:a})=>{let o=ie(),n=(0,Il.useRef)(null),[r,l]=(0,Il.useState)(!1),i=(0,Il.useCallback)(u=>{let d=Array.from(u),f=[],c=0;for(let p of d){let g=mD(p);g?f.push(g):c+=1}f.length>0&&t(f),c>0&&$t.warning(o("picker.unsupported"))},[t,o]),s=(0,Il.useCallback)(u=>{u.preventDefault(),u.stopPropagation(),l(!1),u.dataTransfer.files?.length&&i(u.dataTransfer.files)},[i]);return(0,dt.jsxs)("div",{className:"wf-picker-pane",children:[(0,dt.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${r?"wf-picker-dropzone--active":""}`,onClick:()=>n.current?.click(),onDragOver:u=>{u.preventDefault(),u.stopPropagation(),l(!0)},onDragLeave:u=>{u.preventDefault(),u.stopPropagation(),l(!1)},onDrop:s,children:[(0,dt.jsx)(yl,{size:22,className:"wf-picker-dropzone__icon"}),(0,dt.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,dt.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,dt.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,dt.jsx)(Vu,{size:14}),o("picker.chooseFiles")]})]}),(0,dt.jsx)("input",{ref:n,type:"file",multiple:!0,accept:"image/*,video/*,audio/*",className:"wf-picker-file-input",onChange:u=>{u.target.files?.length&&i(u.target.files),u.target.value=""}}),e.length>0?(0,dt.jsx)("ul",{className:"wf-picker-file-list",children:e.map(u=>(0,dt.jsxs)("li",{className:"wf-picker-file-item",children:[(0,dt.jsx)("div",{className:"wf-picker-file-item__thumb",children:u.materialType==="image"?(0,dt.jsx)("img",{src:u.objectUrl,alt:"",className:"wf-picker-card__media"}):u.materialType==="video"?(0,dt.jsx)("video",{src:u.objectUrl,className:"wf-picker-card__media",muted:!0}):(0,dt.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,dt.jsxs)("div",{className:"wf-picker-row__body",children:[(0,dt.jsx)("span",{className:"wf-picker-card__name",children:u.name}),(0,dt.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${u.materialType}`),u.size?` \xB7 ${Y_(u.size)}`:""]})]}),(0,dt.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(u.id),title:o("picker.removeFile"),children:(0,dt.jsx)(xl,{size:14})})]},u.id))}):null]})},Q_=gD;var vo=R(X(),1),hD=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=ie(),l=ue(v=>v.nodes),i=ue(v=>v.edges),[s,u]=(0,pa.useState)(a),[d,f]=(0,pa.useState)([]),[c,p]=(0,pa.useState)([]),g=(0,pa.useMemo)(()=>Z_(l,i,t),[l,i,t]);(0,pa.useEffect)(()=>{e&&(u(a),f([]),p(v=>{for(let _ of v)URL.revokeObjectURL(_.objectUrl);return[]}))},[e,a]);let y=(0,pa.useCallback)(()=>{p(v=>{for(let _ of v)URL.revokeObjectURL(_.objectUrl);return[]}),o()},[o]),w=(0,pa.useCallback)((v,_)=>{_||f(k=>k.includes(v)?k.filter(T=>T!==v):[...k,v])},[]),h=(0,pa.useCallback)(v=>{p(_=>[..._,...v])},[]),x=(0,pa.useCallback)(v=>{p(_=>{let k=_.filter(N=>N.id!==v),T=_.find(N=>N.id===v);return T&&URL.revokeObjectURL(T.objectUrl),k})},[]),b=d.filter(v=>{let _=g.find(k=>k.nodeId===v);return _&&!_.alreadyConnected}).length+c.length,S=(0,pa.useCallback)(()=>{if(b===0)return;n({selectedCanvasNodeIds:d,localFiles:c})&&(p([]),f([]))},[c,n,b,d]),C=(0,vo.jsxs)("div",{className:"wf-picker-footer",children:[(0,vo.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:y,children:r("picker.cancel")}),(0,vo.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:b===0,onClick:S,children:[r("picker.use")," ",b," ",r("picker.items")]})]});return(0,vo.jsxs)(wl,{open:e,onCancel:y,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,vo.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,vo.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>u("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,vo.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>u("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,vo.jsx)($_,{items:g,selectedIds:d,onToggle:w}):(0,vo.jsx)(Q_,{files:c,onAddFiles:h,onRemove:x})]})},Lp=hD;var Ml=R(J(),1);function J_(e){let t=ie(),[a,o]=(0,Ml.useState)(!1),[n,r]=(0,Ml.useState)("canvas"),l=(0,Ml.useCallback)((u="canvas")=>{r(u),o(!0)},[]),i=(0,Ml.useCallback)(()=>{o(!1)},[]),s=(0,Ml.useCallback)(u=>{let d=ue.getState(),f=K_({nodes:d.nodes,edges:d.edges,targetNodeId:e,selectedCanvasNodeIds:u.selectedCanvasNodeIds,localFiles:u.localFiles});return f.hasWork?d.applyCanvasInputMutation({addNodes:f.addNodes,addEdges:f.addEdges,nodePatches:f.nodePatches}).status!=="allowed"?($t.error(t("picker.commitFailed")),!1):(f.rejected.length>0?$t.warning(t("picker.commitPartial")):$t.success(t("picker.commitOk")),o(!1),!0):($t.warning(t("picker.commitEmpty")),!1)},[e,t]);return{open:a,initialTab:n,openPicker:l,closePicker:i,commit:s}}var De=R(X(),1),xD=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:u,errorMessage:d}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[y,w]=(0,et.useState)(!1),[h,x]=(0,et.useState)(!1),[m,b]=(0,et.useState)(!1),[S,C]=(0,et.useState)(!1),[v,_]=(0,et.useState)(null),{setNodes:k}=Na(),T=qe(j=>j.status==="pending"||j.status==="running"),N=o.nodeWidth??kr(n),U=_x(n),O=n_(N,U),L=v??o.nodeHeight??O,M=(0,et.useCallback)(j=>{k(me=>me.map(_e=>_e.id===e?{..._e,data:{..._e.data,...j}}:_e))},[e,k]),E=(0,et.useCallback)((j,me)=>{if(j>0&&me>0){let _e=j/me,it=Math.max(80,Math.min(800,Math.round(N/_e)));_(it),o.nodeHeight!==it&&M({nodeHeight:it})}},[o.nodeHeight,N,M]),I=(0,et.useCallback)(()=>{let j=o.selectedTool;(!j||j==="text-editor"||j==="import")&&M({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]}),qe.getState().startNodeExecution?.(e)},[e,n,o.selectedTool,M]),A=ie(),z=ue(j=>j.applyCanvasInputMutation),V=J_(e),D=(0,et.useMemo)(()=>xp(n).map(j=>({key:j.key,label:A(j.labelKey),description:A(j.descKey),icon:j.icon})),[n,A]),F=(0,et.useCallback)((j,me)=>{let _e=hp(j),it=me?.flowPosition;if(!_e||!it)return;let Vt=Ll(_e.targetMaterialType,it),ta=Vt.nodes[0];ta&&z({addNodes:Vt.nodes,addEdges:[{source:e,sourceHandle:"out",target:ta.id,targetHandle:"in"}]})},[z,e]),Z=u||i||"",K=(0,et.useCallback)(j=>{if(n==="text"){let me="";j==="script"?me=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

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
`)})},[Z,M]);(0,et.useEffect)(()=>{a||(b(!1),C(!1))},[a]);let se=h_(a,m,f),te=Ln(n,p,s),oe=x_(f,r,!!te),be=n==="video"?"video":n==="audio"?"audio":"square";return(0,De.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:N},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(y||a)&&(0,De.jsx)(S_,{materialType:n,selected:a,onOpenResourcePicker:()=>V.openPicker("local"),onStartTextEdit:()=>C(!0),onCopyText:Y,onSplitText:re}),(0,De.jsx)(Cn,{side:"left",nodeHovered:y}),(0,De.jsx)($i,{label:l,materialType:n,onLabelChange:j=>M({label:j}),trailing:(0,De.jsx)(vp,{executionStatus:f,status:r})}),(0,De.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:N,height:L},onDragOver:ne,onDragLeave:ee,onDrop:q,children:[a&&(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,De.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,De.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,De.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,De.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:Z||S?(0,De.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${S?" nodrag":""}`,readOnly:!S,value:Z,placeholder:A("node.textPlaceholder"),autoFocus:S,onMouseDown:j=>{S||j.preventDefault()},onDoubleClick:j=>{j.stopPropagation(),C(!0),j.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:j=>M({content:j.target.value,status:j.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,De.jsx)(Cp,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:K})}),n!=="text"&&(oe?(0,De.jsx)("div",{className:"wf-material-node__media",children:(0,De.jsx)(md,{status:oe,loadingAspectRatio:be,errorMessage:c??d,taskId:o.taskId,onRetry:I,children:te?(0,De.jsx)(v_,{materialType:n,mediaAssets:p,mediaUrl:s,label:l,onMediaSizeChange:E}):(0,De.jsx)(Cp,{materialType:n,onApplyPreset:K})})}):(0,De.jsx)("div",{className:"wf-material-node__media",children:(0,De.jsx)(Cp,{materialType:n,onApplyPreset:K})})),n==="text"&&(d||c)&&(0,De.jsx)("div",{className:"wf-material-node__error",children:c??d})]}),se&&(0,De.jsx)(I_,{onClose:()=>b(!0),children:(0,De.jsx)(B_,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:I,execBusy:T,onOpenResourcePicker:()=>V.openPicker("canvas")})}),(0,De.jsx)(Cn,{side:"right",nodeHovered:y,options:D,onSelect:F}),(0,De.jsx)(Lp,{open:V.open,nodeId:e,initialTab:V.initialTab,onCancel:V.closePicker,onCommit:V.commit})]})},ek=(0,et.memo)(xD);var tk={type:"material",component:ek,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>tp("text",{status:"empty",nodeWidth:kr("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var es=R(J(),1);var Dx=50;function Nl(e){return JSON.parse(JSON.stringify(e))}var bD={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},qt=Zi((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Nl(o)].slice(-Dx),redoStack:[]}};return{document:bD,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Nl(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Nl(l),undoStack:i,redoStack:[...r,Nl(n)].slice(-Dx)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Nl(l),redoStack:i,undoStack:[...r,Nl(n)].slice(-Dx)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let l=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:l.title,initialType:l.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:l}=t(),i=l.rows[o];if(!i)return;let s=a(l),u=[...l.rows],d={...i,cells:[...i.cells]};d.cells[n]=r,u[o]=d,e({document:{...l,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),l=o||n.columns.map(i=>i.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:l}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),l=n.rows.filter((i,s)=>s!==o);e({document:{...n,rows:l},...r})},addColumn:(o,n,r=240)=>{let{document:l}=t(),i=a(l),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=l.rows.map(d=>({...d,cells:[...d.cells,n==="attachment"?[]:""]}));e({document:{...l,columns:[...l.columns,s],rows:u},...i})},updateColumn:(o,n,r)=>{let{document:l}=t(),i=l.columns[o];if(!i)return;let s=a(l),u=[...l.columns];u[o]={...i,title:n,type:r},e({document:{...l,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),l=n.columns.filter((s,u)=>u!==o),i=n.rows.map(s=>({...s,cells:s.cells.filter((u,d)=>d!==o)}));e({document:{...n,columns:l,rows:i},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let l=a(n),i=[...n.columns];i[o]={...r,visible:!r.visible},e({document:{...n,columns:i},...l})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let i=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let d=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:d},...i})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Nl(o),undoStack:[],redoStack:[]})}});var fe=R(X(),1),ak=380,yD=280,ok=(0,es.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=qt(),[l,i]=(0,es.useState)(!1),{zoom:s}=Qa(),u=(0,es.useMemo)(()=>ro(s),[s]),d=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,fe.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:ak},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(l||a)&&(0,fe.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*u,transform:`translateX(-50%) scale(${u})`,transformOrigin:"bottom center"},children:(0,fe.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,fe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:g=>{g.stopPropagation(),r()},children:[(0,fe.jsx)(Ke,{size:14}),(0,fe.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:g=>{g.stopPropagation(),n()},children:[(0,fe.jsx)(wr,{size:13}),(0,fe.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,fe.jsx)(Cn,{side:"left",nodeHovered:l}),(0,fe.jsx)($i,{label:c,materialType:"table"}),(0,fe.jsxs)("div",{className:"wf-material-node__card",style:{width:ak,height:yD},onDoubleClick:()=>n(),children:[a&&(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),d.length===0?(0,fe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,fe.jsx)(Aa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,fe.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,fe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:g=>g.stopPropagation(),children:[(0,fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,fe.jsx)(Ke,{size:14,className:"wf-node-empty__pill-icon"}),(0,fe.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,fe.jsx)(wr,{size:13,className:"wf-node-empty__pill-icon"}),(0,fe.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,fe.jsx)(qu,{size:14}),(0,fe.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,fe.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",d.length," \u884C"]})]}),(0,fe.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[d.slice(0,3).map((g,y)=>{let w=g.cells[0],h=typeof w=="string"&&w?w:typeof w=="number"?String(w):Array.isArray(w)&&w.length>0?`\u{1F4CE} \u9644\u4EF6 (${w.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,fe.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,fe.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:h}),(0,fe.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),d.length>3&&(0,fe.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,fe.jsx)(Cn,{side:"right",nodeHovered:l})]})});var nk={type:"table",component:ok,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var Mr=R(J(),1);var ma=R(J(),1);var Da=R(X(),1),wD=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:l,nodeWidth:i,nodeHeight:s,showLeftHandle:u=!0,showRightHandle:d=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:y,onLeftHandleSelect:w,onFileDrop:h,onFilesDrop:x,onDragOver:m,onDragLeave:b,onDrop:S,onMouseEnter:C,onMouseLeave:v,onCardClick:_,onCardDoubleClick:k,renderFloatingPill:T,renderHeader:N,children:U,renderConfigPanel:O})=>{let[L,M]=(0,ma.useState)(!1),[E,I]=(0,ma.useState)(!1),{zoom:A}=Qa(),z=(0,ma.useMemo)(()=>ro(A),[A]),V=(0,ma.useMemo)(()=>({inverseScale:z,hovered:L,selected:t}),[z,L,t]),D=(0,ma.useCallback)(Y=>{M(!0),C?.(Y)},[C]),F=(0,ma.useCallback)(Y=>{M(!1),v?.(Y)},[v]),Z=(0,ma.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!0),m?.(Y)},[m]),K=(0,ma.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!1),b?.(Y)},[b]),W=(0,ma.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!1);let re=Y.dataTransfer.files;re&&re.length>0&&(x?.(re),re[0]&&h?.(re[0])),S?.(Y)},[S,h,x]),ne=typeof T=="function"?T(V):T,ee=typeof N=="function"?N(V):N,q=typeof O=="function"?O(V):O;return(0,Da.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:i,...n},onMouseEnter:D,onMouseLeave:F,"data-node-id":e,children:[ne,u&&(0,Da.jsx)(Cn,{side:"left",nodeHovered:L,variant:f,options:y,onSelect:w}),ee,(0,Da.jsxs)("div",{className:`wf-material-node__card ${E?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:i,height:s,...r},"data-node-type":l,onClick:_,onDoubleClick:k,onDragOver:Z,onDragLeave:K,onDrop:W,children:[t&&(0,Da.jsxs)(Da.Fragment,{children:[(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Da.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),U]}),q,d&&(0,Da.jsx)(Cn,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},rk=(0,ma.memo)(wD);var El=R(J(),1);var In=R(X(),1),vD=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:l}=Qa(),i=(0,El.useMemo)(()=>ro(l),[l]),s=a??i,u=d=>d?El.default.isValidElement(d)?d:(0,In.jsx)(d,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,In.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation(),children:t||(e&&e.length>0?(0,In.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((d,f)=>{let p=["wf-floating-top-pill__btn",d.variant==="primary"?"wf-floating-top-pill__btn--primary":"",d.className||""].filter(Boolean).join(" ");return(0,In.jsxs)(El.default.Fragment,{children:[f>0&&(0,In.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,In.jsxs)("button",{type:"button",className:p,onClick:d.onClick,disabled:d.disabled,title:d.title,children:[u(d.icon),d.label?(0,In.jsx)("span",{children:d.label}):null]})]},d.key)})}):null)})},lk=(0,El.memo)(vD);var _p=R(J(),1);var ga=R(X(),1),CD=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:l,className:i="",style:s})=>{let u=ie(),d=(f,c,p)=>f?_p.default.isValidElement(f)?f:(0,ga.jsx)(f,{size:c,className:p}):null;return(0,ga.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${i}`.trim(),style:s,children:[(e||t)&&(0,ga.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[d(e,36,"wf-node-empty__icon"),t&&(0,ga.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:d(t,14)})]}),a&&(0,ga.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,ga.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,ga.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,ga.jsx)("div",{className:"wf-node-empty__try-label",children:u("pills.tryLabel")}):null,r&&r.length>0&&(0,ga.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,ga.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,ga.jsx)("span",{className:"wf-node-empty__pill-icon",children:d(f.icon,14)}),(0,ga.jsx)("span",{children:f.label})]},f.key)})}),l]})},ik=(0,_p.memo)(CD);var Tl=R(J(),1);function sk(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function uk(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function dk(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function ck(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function fk(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var Ge=R(X(),1),SD=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:l,onDownload:i})=>{let s=ie(),[u,d]=(0,Tl.useState)(!1),f=(0,Tl.useCallback)(g=>{g.stopPropagation(),d(y=>!y)},[]),c=(0,Tl.useCallback)(()=>{d(!1)},[]),p=u&&e?(0,Ge.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,Ge.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,Ge.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":s("clip.openEditorTitle"),children:[t?(0,Ge.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,Ge.jsx)("span",{className:"wf-vc-result__fallback",children:(0,Ge.jsx)(Ut,{size:36,strokeWidth:1.5})}),(0,Ge.jsx)("span",{className:"wf-vc-result__play",children:(0,Ge.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,Ge.jsx)(Ea,{size:22,fill:"currentColor"})})})]});return(0,Ge.jsxs)("div",{className:"wf-vc-result",children:[p,(0,Ge.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,Ge.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Ge.jsx)("dt",{children:s("clip.duration")}),(0,Ge.jsx)("dd",{className:"wf-vc-result__mono",children:dk(a)})]}),(0,Ge.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Ge.jsx)("dt",{children:s("clip.resolution")}),(0,Ge.jsx)("dd",{className:"wf-vc-result__mono",children:ck(o,n)})]})]}),(0,Ge.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,Ge.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:g=>{g.stopPropagation(),l?.()},children:[(0,Ge.jsx)(vr,{size:14}),(0,Ge.jsx)("span",{children:s("clip.reEdit")})]}),(0,Ge.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:g=>{g.stopPropagation(),i?.()},disabled:!e,title:e?s("clip.downloadTitle"):void 0,children:[(0,Ge.jsx)(fl,{size:14}),(0,Ge.jsx)("span",{children:s("clip.download")})]})]})]})},pk=(0,Tl.memo)(SD);var mk="omnimux-clip-open",zx="omnimux-clip-save",Px="omnimux-clip-close",Ox="omnimux-clip-progress";function gk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function hk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function xk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var Jt=R(X(),1),LD=350,_D=440;function bk(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function za(e){return typeof e=="string"&&e.trim()?e:void 0}function Bx(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function kD(e){return za(e.mediaUrl)||za(e.outputVideoUrl)||za(e.path)||za(e.url)||za(e.real_path)||za(e.filePath)}function ID(e){let{nodes:t,edges:a}=ue.getState(),o=[],n=[],r=[],l=[];for(let i of a){if(i.target!==e)continue;let s=t.find(g=>g.id===i.source);if(!s)continue;let u=bk(s.data)?s.data:{},d=za(u.materialType)||(s.type==="material"?void 0:s.type),f=za(u.label)||za(u.title)||s.id,c=kD(u)||"",p=Bx(u.duration)??Bx(u.outputDurationMs)??Bx(u.durationMs);if(d==="video"||s.type==="video_composition"){let g=c||za(u.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(d==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(d==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(d==="text"){let g=za(u.content)||za(u.generatedContent)||za(u.prompt);g&&l.push({text:g,startTimeMs:l.reduce((y,w)=>y+w.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:l}}function MD(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function ND(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var ED=({id:e,data:t,selected:a})=>{let o=bk(t)?t:{},n=ue(g=>g.setNodes),r=ie(),l=o.status??"idle",i=!!o.outputVideoUrl,s=o.thumbnailUrl||o.outputThumbnailUrl,u=o.title||o.label||r("node.type.video_composition"),d=uk(l,i),f=(0,Mr.useCallback)(g=>{n(y=>y.map(w=>w.id===e?{...w,data:{...w.data,...g}}:w))},[e,n]);(0,Mr.useEffect)(()=>{if(typeof window>"u")return;let g=h=>{let x=h instanceof CustomEvent?h.detail:void 0;if(!gk(x)||x.nodeId&&x.nodeId!==e)return;let m=x.output;f({schema:x.schema,projectId:x.projectId||o.projectId,outputVideoUrl:m?.videoPath,thumbnailUrl:m?.thumbnailPath,outputThumbnailUrl:m?.thumbnailPath,outputDurationMs:m?.durationMs,outputWidth:m?.width,outputHeight:m?.height,status:m?.videoPath?"completed":"idle",renderProgress:m?.videoPath?100:void 0,errorMessage:void 0})},y=h=>{let x=h instanceof CustomEvent?h.detail:void 0;if(!xk(x)||x.nodeId&&x.nodeId!==e)return;let m=x.status??"rendering";f({status:m,renderProgress:x.renderProgress})},w=h=>{let x=h instanceof CustomEvent?h.detail:void 0;hk(x)&&(x.nodeId&&x.nodeId!==e||o.status==="editing"&&f({status:i?"completed":"idle"}))};return window.addEventListener(zx,g),window.addEventListener(Ox,y),window.addEventListener(Px,w),()=>{window.removeEventListener(zx,g),window.removeEventListener(Ox,y),window.removeEventListener(Px,w)}},[i,e,o.projectId,o.status,f]);let c=(0,Mr.useCallback)(()=>{if(typeof window>"u")return;let g=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,y={source:"canvas",nodeId:e,nodeTitle:u,projectId:g,draftSchema:o.schema,upstreamInputs:ID(e)};f({status:"editing",projectId:g}),window.dispatchEvent(new CustomEvent(mk,{detail:y,bubbles:!0})),window.setTimeout(()=>{MD()||$t.warning(r("clip.needPlugin"))},400)},[e,o.projectId,o.schema,r,u,f]),p=(0,Mr.useCallback)(()=>{let g=o.outputVideoUrl;if(!g)return;let y=document.createElement("a");y.href=g,y.download=`${fk(u)}.mp4`,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove()},[o.outputVideoUrl,u]);return(0,Jt.jsxs)(rk,{id:e,selected:a,nodeWidth:LD,nodeHeight:_D,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:g=>{g.stopPropagation(),c()},renderFloatingPill:({hovered:g,selected:y})=>{if(!g&&!y)return null;let w=[{key:"open_clip",label:r("clip.openEditor"),icon:vr,variant:"primary",onClick:h=>{h.stopPropagation(),c()},title:r("clip.openEditorTitle")}];return i&&w.push({key:"download_video",label:r("clip.download"),icon:fl,onClick:p,title:r("clip.downloadTitle")}),(0,Jt.jsx)(lk,{actions:w})},renderHeader:()=>(0,Jt.jsx)($i,{label:u,materialType:"video_composition",customIcon:(0,Jt.jsx)(Ut,{size:14}),onLabelChange:g=>f({label:g,title:g}),trailing:(0,Jt.jsx)(vp,{status:sk(l)})}),children:[d==="result"&&(0,Jt.jsx)(pk,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:s,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:u,onReEdit:c,onDownload:p}),d==="rendering"&&(0,Jt.jsx)("div",{className:"wf-material-node__media",children:(0,Jt.jsx)(md,{status:"generating",loadingAspectRatio:"video",children:null})}),d==="error"&&(0,Jt.jsx)("div",{className:"wf-material-node__media",children:(0,Jt.jsx)(md,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:c,children:null})}),d==="launcher"&&(0,Jt.jsx)(ik,{mainIcon:(0,Jt.jsx)(Ut,{size:36,strokeWidth:1.5}),secondaryIcon:(0,Jt.jsx)(Po,{size:14}),title:r("clip.launcherTitle"),blurb:r("clip.launcherBlurb"),actions:[{key:"open_clip",label:r("clip.openClip"),icon:vr,variant:"primary",onClick:()=>c()}]})]})},yk={type:"video_composition",component:(0,Mr.memo)(ED),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>ND(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var Ik=R(J(),1),Mk=R(_o(),1);var kp=R(J(),1),wk=R(_o(),1);var Ee=R(X(),1),Hx=e=>e==="text"?(0,Ee.jsx)(wn,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Ee.jsx)(Yu,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Ee.jsx)(Ju,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Ee.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),vk=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=qt(),[l,i]=(0,kp.useState)(null);(0,kp.useEffect)(()=>{if(o===null){i(null);return}let u=()=>{n(null)},d=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",u),window.addEventListener("scroll",u,!0),window.addEventListener("keydown",d),()=>{window.removeEventListener("pointerdown",u),window.removeEventListener("scroll",u,!0),window.removeEventListener("keydown",d)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,Ee.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:u=>u.stopPropagation(),children:[(0,Ee.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Ee.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((u,d)=>(0,Ee.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Ee.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Ee.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Ee.jsx)(Xu,{size:14})}),Hx(u.type),(0,Ee.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.title})]}),(0,Ee.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Ee.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:u.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(d),children:u.visible?(0,Ee.jsx)(Fu,{size:15}):(0,Ee.jsx)(Uu,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Ee.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===d?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===d)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,x=Math.max(8,c.right-p);i({top:h,left:x}),n(d)}},children:(0,Ee.jsx)(hr,{size:15})})]})]},u.id))}),(0,Ee.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Ee.jsx)(Ke,{size:14}),(0,Ee.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&l&&typeof document<"u"&&(0,wk.createPortal)((0,Ee.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:l.top,left:l.left,zIndex:10010},onClick:u=>u.stopPropagation(),children:[(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let u=o;n(null),a("edit",u)},children:[(0,Ee.jsx)(Oo,{size:13}),(0,Ee.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let u=o,d=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${d.title}" \u5417\uFF1F`)&&r(u)},children:[(0,Ee.jsx)(xl,{size:13}),(0,Ee.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var Ot=R(X(),1),TD=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],Ck=()=>{let{document:e,setFilterConditions:t}=qt(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((i,s)=>({value:s,label:i.title||`\u5217 ${s+1}`})),n=(i,s)=>{let u=a.map((d,f)=>f===i?{...d,...s}:d);t(u)},r=()=>{let i=[...a,{columnIndex:0,op:"equals",value:""}];t(i)},l=i=>{let s=a.filter((u,d)=>d!==i);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,Ot.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:i=>i.stopPropagation(),children:[(0,Ot.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,Ot.jsxs)("div",{className:"wf-filter-body",children:[a.map((i,s)=>(0,Ot.jsxs)("div",{className:"wf-filter-row",children:[(0,Ot.jsx)("div",{style:{width:130,flexShrink:0},children:(0,Ot.jsx)(fa,{value:i.columnIndex,options:o,onChange:u=>n(s,{columnIndex:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ot.jsx)("div",{style:{width:110,flexShrink:0},children:(0,Ot.jsx)(fa,{value:i.op,options:TD,onChange:u=>n(s,{op:u}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ot.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:i.value??"",disabled:i.op==="empty"||i.op==="notEmpty",onChange:u=>n(s,{value:u.target.value})}),(0,Ot.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>l(s),children:(0,Ot.jsx)(Lt,{size:15})})]},s)),(0,Ot.jsx)("div",{style:{paddingTop:4},children:(0,Ot.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,Ot.jsx)(Ke,{size:14}),(0,Ot.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Mn=R(X(),1),AD=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],Sk=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=qt(),o=e.rowHeight||"low";return(0,Mn.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Mn.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Mn.jsx)("div",{style:{padding:"6px"},children:AD.map(n=>{let r=o===n.id;return(0,Mn.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Mn.jsx)("span",{children:n.label}),r&&(0,Mn.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Mn.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var Ie=R(X(),1),Lk=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:l,canRedo:i,closeStage:s}=qt(),u=a==="field-config",d=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,Ie.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,Ie.jsx)("div",{className:"wf-stage-topbar__left",children:(0,Ie.jsxs)("div",{className:"wf-stage-title-group",children:[(0,Ie.jsx)(Aa,{size:16,className:"wf-stage-title-icon"}),(0,Ie.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,Ie.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,Ie.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ie.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,Ie.jsx)(od,{size:15}),(0,Ie.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,Ie.jsx)(vk,{})]}),(0,Ie.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ie.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"filter")},children:[(0,Ie.jsx)(br,{size:15}),(0,Ie.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,Ie.jsx)("span",{className:"wf-stage-dot-badge"})]}),d&&(0,Ie.jsx)(Ck,{})]}),(0,Ie.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ie.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,Ie.jsx)(Lr,{size:15}),(0,Ie.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,Ie.jsx)(Sk,{})]}),(0,Ie.jsx)("div",{className:"wf-stage-divider"}),(0,Ie.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,Ie.jsx)(bl,{size:16})}),(0,Ie.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,Ie.jsx)(gl,{size:16})}),(0,Ie.jsx)("div",{className:"wf-stage-divider"}),(0,Ie.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,Ie.jsx)(Lt,{size:16})})]})]})};var Se=R(X(),1),_k=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=qt(),n=e.columns.filter(i=>i.visible),l=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Se.jsx)("div",{className:"wf-grid-container",children:(0,Se.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,Se.jsxs)("table",{className:"wf-grid-table",children:[(0,Se.jsxs)("colgroup",{children:[(0,Se.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(i=>(0,Se.jsx)("col",{style:{width:i.width||220,minWidth:120}},i.id)),(0,Se.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,Se.jsx)("col",{style:{width:"auto"}})]}),(0,Se.jsx)("thead",{children:(0,Se.jsxs)("tr",{children:[(0,Se.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Se.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(i=>(0,Se.jsx)("th",{className:"wf-grid-th",children:(0,Se.jsxs)("div",{className:"wf-grid-th-content",children:[(0,Se.jsx)("span",{className:"wf-grid-th-icon",children:Hx(i.type)}),(0,Se.jsx)("span",{className:"wf-grid-th-title",children:i.title})]})},i.id)),(0,Se.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Se.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,Se.jsx)(Ke,{size:15})})}),(0,Se.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,Se.jsx)("tbody",{children:e.rows.map((i,s)=>(0,Se.jsxs)("tr",{className:l,children:[(0,Se.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,Se.jsx)("span",{children:s+1})}),n.map(u=>{let d=e.columns.findIndex(p=>p.id===u.id),f=i.cells[d];return(0,Se.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,Se.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((y,w)=>(0,Se.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",y.name]},w)),g.length===0&&(0,Se.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,Se.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(s,d,g.target.value)})})()},u.id)}),(0,Se.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,Se.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,Se.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,Se.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,Se.jsx)(Ke,{size:14}),(0,Se.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Al=R(J(),1);var ha=R(X(),1),RD=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],kk=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=qt(),[n,r]=(0,Al.useState)(e.initialTitle),[l,i]=(0,Al.useState)(e.initialType),s=(0,Al.useRef)(null);(0,Al.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),i(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let u=d=>{d&&d.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,l):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,l),t()};return(0,ha.jsx)(wl,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,ha.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,ha.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,ha.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>u(),children:"\u786E\u5B9A"})]}),children:(0,ha.jsxs)("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,ha.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,ha.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,ha.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:d=>r(d.target.value)})]}),(0,ha.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,ha.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,ha.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,ha.jsx)(fa,{value:l,options:RD,onChange:d=>i(d),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var ts=R(X(),1),Nk=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=qt();return(0,Ik.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,Mk.createPortal)((0,ts.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,ts.jsx)(Lk,{}),(0,ts.jsx)(_k,{}),(0,ts.jsx)(kk,{})]}),document.body)};var Bt=R(X(),1);yp(tk);yp(nk);yp(yk);var DD=p_(),zD={animated:qL},Ek={maxZoom:1},PD={x:0,y:0,zoom:1},OD=[1,2],BD=96,HD=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:u}=Na(),{nodes:d,edges:f,onNodesChange:c,onEdgesChange:p}=NL(),g=ue($=>$.applyCanvasInputMutation),y=ue($=>$.setNodes),w=ue($=>$.setSelectedElement),h=ue($=>$.pushHistory),x=ue($=>$.undo),m=ue($=>$.redo),b=EL(),S=TL(),[C,v]=(0,tt.useState)(null),[_,k]=(0,tt.useState)(!1),[T,N]=(0,tt.useState)(!1),[U,O]=(0,tt.useState)(!1),[L,M]=(0,tt.useState)(!1),[E,I]=(0,tt.useState)(void 0),[A,z]=(0,tt.useState)("select"),V=(0,tt.useRef)(0),D=(0,tt.useMemo)(()=>d.some($=>$.selected),[d]),F=c_(y,w),Z=ie(),K=Z("menu.generateFromNode"),{menuState:W,onConnectStart:ne,onConnectEnd:ee,onMenuSelect:q,onMenuClose:Y}=i_({onReject:v});(0,tt.useEffect)(()=>{h()},[d,f,h]);let re=(0,tt.useMemo)(()=>e?d.map($=>({...$,data:{...$.data,__catalog:e}})):d,[d,e]),se=(0,tt.useCallback)($=>{let Ue=g({addEdges:[$]});if(Ue.status==="rejected"){let at=Z(mp(Ue.reasonCode));v(at),$t.warning(at)}else v(null)},[g,Z]),te=(0,tt.useCallback)($=>{let Ue=ue.getState();return e_($,Ue.nodes,Ue.edges)},[]),oe=(0,tt.useCallback)(($,Ue)=>{let at=V.current,Oa=Ue??{x:120+at%3*420,y:120+Math.floor(at/3)*360};if($==="table"||$==="video_composition"){let So=m_($,Oa,`node_${$}_${Date.now()}`);if(!So)return;V.current+=1,y(Mp=>kx(Mp,[{...So,selected:!0}]));return}let Er=Ll($,Oa);Er.nodes.length!==0&&(V.current+=1,y(So=>kx(So,Er.nodes)))},[y]),be=(0,tt.useCallback)($=>{let Ue=$.nodes.map(Oa=>Oa.id),at=$.edges.map(Oa=>Oa.id);Ue.length===0&&at.length===0||g({removeNodeIds:Ue,removeEdgeIds:at})},[g]),{menu:we,handleNodeContextMenu:j,handlePaneContextMenu:me,handleSelectionContextMenu:_e,closeMenu:it,handleMenuAction:Vt,handleAddNodeFromMenu:ta}=f_({screenToFlowPosition:i,setNodes:y,copySelectedNodes:F.copySelectedNodes,pasteNodes:F.pasteNodes,duplicateSelectedNodes:F.duplicateSelectedNodes,deleteSelectedNodes:F.deleteSelectedNodes,selectAllNodes:F.selectAllNodes,clearSelection:F.clearSelection,undo:x,redo:m,onExecuteNodeIds:t,onAddNode:oe}),Nr=(0,tt.useCallback)($=>{let Ue=$.type==="video"?"video":$.type==="image"?"image":"text",at=V.current++,Oa={x:200+at%4*50,y:200+at%4*40},So=Ll(Ue,Oa,{title:$.name,content:$.path,previewUrl:$.previewUrl,status:"ready"}).nodes[0];So&&(g({addNodes:[So]}),w("node",So.id),$t.success(Z("toolbar.assets")+": "+$.name))},[g,w,Z]);JL({onCopy:F.copySelectedNodes,onPaste:()=>F.pasteNodes(),onSelectAll:F.selectAllNodes,onDeleteSelected:F.deleteSelectedNodes,onClearSelection:F.clearSelection,onDuplicate:F.duplicateSelectedNodes,onUndo:x,onRedo:m,hasSelection:D,onToggleAssets:()=>N($=>!$),onToggleShortcuts:()=>O($=>!$),onToggleMinimap:()=>k($=>!$),onToggleAddMenu:()=>M($=>!$),onSetPointerMode:$=>z($),onFitView:()=>s(Ek),onResetZoom:()=>u(1),onCategoryKey:$=>{N(!0),I($)}});let Xo=(0,tt.useCallback)(($,Ue)=>{w("node",Ue.id)},[w]),Yo=(0,tt.useCallback)(()=>{w("none",null),it()},[w,it]),xa=(0,tt.useCallback)(()=>{y($=>$.map((Ue,at)=>({...Ue,position:{x:120+at%3*440,y:120+Math.floor(at/3)*360}})))},[y]);return(0,Bt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Bt.jsx)(XS,{nodes:re,edges:f,onNodesChange:c,onEdgesChange:p,onConnect:se,isValidConnection:te,onConnectStart:ne,onConnectEnd:ee,onNodeClick:Xo,onPaneClick:Yo,onNodeContextMenu:j,onPaneContextMenu:me,onSelectionContextMenu:_e,onDelete:be,nodeTypes:DD,edgeTypes:zD,fitView:!0,fitViewOptions:Ek,defaultViewport:PD,minZoom:Lx.minZoom,maxZoom:Lx.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:A==="pan"?!0:OD,panOnScroll:!0,panOnScrollMode:po.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:A==="select",selectionMode:bn.Partial,defaultEdgeOptions:ep,connectOnClick:!1,connectionRadius:BD,onlyRenderVisibleElements:!0,children:(0,Bt.jsx)(WS,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:Do.Dots})}),(0,Bt.jsx)(GL,{isMinimapOpen:_,onToggleMinimap:()=>k($=>!$),onAlignGrid:xa,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Bt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Bt.jsx)(QS,{pannable:!0,zoomable:!0})}),(0,Bt.jsx)(VL,{onAddNode:oe,onUndo:x,onRedo:m,canUndo:b,canRedo:S,pointerMode:A,onPointerModeChange:z,onToggleAssets:()=>N($=>!$),onToggleShortcuts:()=>O($=>!$),isAssetsOpen:T,isShortcutsOpen:U,isAddMenuOpen:L,onToggleAddMenu:()=>M($=>!$)}),(0,Bt.jsx)(XL,{isOpen:T,onClose:()=>N(!1),onInsertAsset:Nr,selectedCategoryIndex:E}),(0,Bt.jsx)(YL,{isOpen:U,onClose:()=>O(!1)}),(0,Bt.jsx)($L,{x:we.x,y:we.y,visible:we.visible,context:we.context,onClose:it,onAction:Vt,onAddNode:ta,canUndo:b,canRedo:S,hasClipboard:F.hasClipboard,hasSelection:D}),(0,Bt.jsx)(pp,{visible:W.visible,x:W.x,y:W.y,title:K,options:W.options,onSelect:q,onClose:Y}),(0,Bt.jsx)(Nk,{}),C&&(0,Bt.jsx)("div",{className:"wf-rejected-toast",children:C})]})},UD=e=>(0,Bt.jsx)(px,{children:(0,Bt.jsx)(HD,{...e})}),Tk=UD;var ht=R(J(),1);var Co="/omnimux-workflow";var Pa={manifest:`${Co}/api/manifest`,canvasJs:`${Co}/canvas.js`,workspaces:`${Co}/api/workspaces`,workspace:e=>`${Co}/api/workspaces/${e}`,workspaceVersion:e=>`${Co}/api/workspaces/${e}/version`,capabilities:`${Co}/api/capabilities`,media:`${Co}/media`,executions:e=>`${Co}/api/workspaces/${e}/executions`,execution:(e,t)=>`${Co}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${Co}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${Co}/api/workspaces/${e}/executions/${t}/events`};async function Go(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function Ak(){return Go(Pa.capabilities)}function Rk(){return Go(Pa.workspaces)}function Ux(e,t){return Go(Pa.workspaces,{method:"POST",body:{name:e,id:t}})}function xd(e){return Go(Pa.workspace(encodeURIComponent(e)))}function Dk(e){return Go(Pa.workspaceVersion(encodeURIComponent(e)))}function zk(e,t){return Go(Pa.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function Pk(e,t={}){return Go(Pa.executions(encodeURIComponent(e)),{method:"POST",body:t})}function Ok(e){return Go(Pa.executions(encodeURIComponent(e)))}function Bk(e,t){return Go(Pa.execution(encodeURIComponent(e),encodeURIComponent(t)))}function Hk(e,t,a){return Go(Pa.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var Uk=new Set(["pending","running","paused"]),FD=new Set(["completed","error","cancelled"]);function as(e,t){let a=ue.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function Fk(e,t){let a=(0,ht.useRef)(null),o=(0,ht.useRef)(e);o.current=e;let n=(0,ht.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,ht.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),l=(0,ht.useCallback)((w,h)=>{qe.getState().setExecution({status:w,error:h,progress:{...qe.getState().progress,percentage:w==="completed"?100:qe.getState().progress.percentage}})},[]),i=(0,ht.useCallback)((w,h)=>{let x;try{x=JSON.parse(h)}catch{return}let m=qe.getState();switch(w){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:x.totalNodes??0,completed:0,running:0,pending:x.totalNodes??0,percentage:0}});break}case"node_start":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),as(x.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:x.progress??m.progress.percentage}});let b=x.output??{},S={executionStatus:"completed",executionError:void 0};if(b.text&&(S.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let C=b.mediaAssets[0];S.mediaAssets=b.mediaAssets,C.type==="image"&&(S.mediaUrl=C.url),S.taskId=`exec-${x.executionId??""}`}as(x.nodeId,S);break}case"node_error":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),as(x.nodeId,{executionStatus:"error",executionError:x.error??vn("error.nodeExecutionFailed")});break}case"node_skipped":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"skipped"),as(x.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{l("completed",null),r();break}case"execution_error":{l("error",x.error??vn("error.executionFailed")),r();break}case"execution_cancelled":{l("cancelled",null),r();break}default:break}},[l,r]),s=(0,ht.useCallback)(w=>{r();let h=o.current;if(!h)return;let x=new EventSource(Pa.executionEvents(encodeURIComponent(h),encodeURIComponent(w)));a.current=x;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)x.addEventListener(b,S=>{i(b,S.data)});x.onerror=()=>{let b=qe.getState().status;FD.has(b)&&r()}},[r,i]),u=(0,ht.useCallback)(w=>{let h=qe.getState();h.setExecution({executionId:w.id,status:w.status,error:w.error,progress:{total:w.progress.total,completed:w.progress.completed,running:w.progress.running,pending:w.progress.pending,percentage:w.progress.percentage}});for(let[x,m]of Object.entries(w.nodeStates??{})){h.setNodeStatus(x,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let S=w.nodeOutputs?.[x];S&&(S.text&&(b.generatedContent=S.text),S.mediaAssets&&S.mediaAssets.length>0&&(b.mediaAssets=S.mediaAssets,S.mediaAssets[0]&&S.mediaAssets[0].type==="image"&&(b.mediaUrl=S.mediaAssets[0].url))),as(x,b)}},[]),d=(0,ht.useCallback)(async(w={})=>{let h=o.current;if(!h)return;if(r(),qe.getState().resetExecution(),qe.getState().setExecution({status:"pending"}),w.mode==="single"&&w.nodeIds&&w.nodeIds[0]&&(qe.getState().setNodeStatus(w.nodeIds[0],"pending"),as(w.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let x=await Pk(h,{mode:w.mode??"full",nodeIds:w.nodeIds});if(!x.ok||!x.body.execution){qe.getState().setExecution({status:"error",error:x.body.message??vn("error.createExecutionFailed")});return}qe.getState().setExecution({executionId:x.body.execution.id}),s(x.body.execution.id)},[r,s]),f=(0,ht.useCallback)(async w=>{let h=o.current,{executionId:x}=qe.getState();if(!h||!x)return;let m=await Hk(h,x,w);!m.ok&&m.body.message&&qe.getState().setExecution({error:m.body.message})},[]),c=(0,ht.useCallback)(()=>f("pause"),[f]),p=(0,ht.useCallback)(()=>f("resume"),[f]),g=(0,ht.useCallback)(()=>f("cancel"),[f]),y=(0,ht.useCallback)(()=>{r(),qe.getState().resetExecution()},[r]);return(0,ht.useEffect)(()=>{if(!e)return;let w=!1;return(async()=>{try{let h=await Ok(e);if(w||!h.ok)return;let x=(h.body.executions??[]).find(b=>Uk.has(b.status));if(!x)return;let m=await Bk(e,x.id);if(w||!m.ok||!m.body.execution)return;u(m.body.execution),Uk.has(m.body.execution.status)&&s(x.id)}catch{}})(),()=>{w=!0}},[e,u,s]),(0,ht.useEffect)(()=>(qe.getState().setStartNodeExecution(h=>{d({mode:"single",nodeIds:[h]})}),()=>{qe.getState().setStartNodeExecution(null)}),[d]),(0,ht.useEffect)(()=>r,[r]),{startExecution:d,pause:c,resume:p,cancel:g,reset:y}}var Rl=R(J(),1);function qk(e={}){let t=e.workspaceId,[a,o]=(0,Rl.useState)({phase:"loading"}),[n,r]=(0,Rl.useState)(()=>hd()),l=ue(d=>d.hydrateGraph),i=ue(d=>d.resetStore),s=ue(d=>d.nodes.length),u=(0,Rl.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Rl.useEffect)(()=>{let d=!1;return o({phase:"loading"}),(async()=>{try{if(Ak().then(g=>{!d&&g.ok&&(r(g.body),D_(g.body))}),t){let g=await xd(t);if(d)return;if(g.ok&&g.body.workspace){l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace});return}let y=await Ux("\u5DE5\u4F5C\u6D41",t);if(d)return;if(!y.ok||!y.body.workspace)throw new Error(y.body.message??vn("error.createWorkspaceFailed"));l(y.body.workspace.nodes,y.body.workspace.edges),o({phase:"ready",workspace:y.body.workspace});return}let f=await Rk();if(d)return;let c=f.body.workspaces?.[0]?.id;if(!c){let g=await Ux("\u6211\u7684\u5DE5\u4F5C\u6D41");if(d)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??vn("error.createWorkspaceFailed"));c=g.body.workspace.id}let p=await xd(c);if(d)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??vn("error.loadWorkspaceFailed"));l(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(f){d||o({phase:"error",message:f instanceof Error?f.message:String(f)})}})(),()=>{d=!0,u.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var $e=R(J(),1);function Ip(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function Fx(e){return e.map(t=>{let a=t,o=Ip(a.data);delete o.__catalog;let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=Ip(a.style)),n})}function qx(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=Ip(a.data)),a.style&&typeof a.style=="object"&&(o.style=Ip(a.style)),o})}function Nn(e,t){return JSON.stringify({nodes:Fx(e),edges:qx(t)})}var qD=1e3,VD=2500,GD=3e3;function os(){let{nodes:e,edges:t}=ue.getState(),a=bx(e,t);return{nodes:a.nodes,edges:a.edges}}function Vk(e,t={}){let a=t.enabled!==!1,[o,n]=(0,$e.useState)("idle"),[r,l]=(0,$e.useState)(!1),i=(0,$e.useRef)(e),s=(0,$e.useRef)(0),u=(0,$e.useRef)(""),d=(0,$e.useRef)(0),f=(0,$e.useRef)(""),c=(0,$e.useRef)(null),p=(0,$e.useRef)(null),g=(0,$e.useRef)(!1),y=(0,$e.useRef)(a);y.current=a;let w=(0,$e.useRef)(t.onSaved);w.current=t.onSaved,(0,$e.useEffect)(()=>{i.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=Nn(e.nodes,e.edges),d.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,$e.useCallback)(async(v,_,k=!1)=>{let T=i.current;if(!T||!k&&!y.current||g.current)return;let N=sp({lastSavedNodeCount:d.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:u.current,nextSignature:Nn(v.nodes,v.edges)});if(!N.persist||!N.snapshot)return;let{nodes:U,edges:O}=N.snapshot,L=T.name;g.current=!0,n("saving");try{let M=await zk(T.id,{name:L,nodes:Fx(U),edges:qx(O),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,u.current=Nn(U,O),d.current=U.length,l(!1),n("saved"),h(),p.current=setTimeout(()=>{n(E=>E==="saved"?"idle":E)},VD),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,$e.useEffect)(()=>{if(!a)return;let v=(k="autosave")=>{if(!i.current||!y.current)return;let N=os(),O=Nn(N.nodes,N.edges)!==u.current;if(l(O),!O){c.current&&(clearTimeout(c.current),c.current=null),n(I=>I==="pending"?"idle":I);return}let L=cd(N.nodes.length,k);if(!xx({lastSavedNodeCount:d.current,nextNodeCount:N.nodes.length,cause:L})){c.current&&(clearTimeout(c.current),c.current=null),l(!1),n(I=>I==="pending"?"idle":I);return}n(I=>I==="saving"||I==="conflict"?I:"pending"),c.current&&clearTimeout(c.current);let M={nodes:N.nodes,edges:N.edges},E=L;c.current=setTimeout(()=>{c.current=null,x(M,E)},qD)},_=ue.subscribe(()=>{v("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[x,a]),(0,$e.useEffect)(()=>{if(!a)return;let v=()=>{if(!y.current||!i.current)return;let k=os(),T=cd(k.nodes.length,"flush"),N=sp({lastSavedNodeCount:d.current,nextNodes:k.nodes,nextEdges:k.edges,cause:T,lastSavedSignature:u.current,nextSignature:Nn(k.nodes,k.edges)});!N.persist||!N.snapshot||x(N.snapshot,T)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),h()}},[x,a]);let m=(0,$e.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let v=os();await x(v,cd(v.nodes.length,"autosave"))},[x]),b=(0,$e.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!i.current)return;let _=os(),k="flush",T=sp({lastSavedNodeCount:d.current,nextNodes:_.nodes,nextEdges:_.edges,cause:k,lastSavedSignature:u.current,nextSignature:Nn(_.nodes,_.edges)});!T.persist||!T.snapshot||x(T.snapshot,k,!0)},[x]),S=(0,$e.useCallback)(async()=>{let v=os();await x(v,cd(v.nodes.length,"autosave"))},[x]),C=(0,$e.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await xd(v.id);if(!_.ok||!_.body.workspace){n("error");return}let k=_.body.workspace;s.current=k.version,u.current=Nn(k.nodes,k.edges),d.current=k.nodes.length,ue.getState().hydrateGraph(k.nodes,k.edges),l(!1),n("idle"),w.current?.(k)},[]);return(0,$e.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!y.current||typeof document<"u"&&document.visibilityState==="hidden")return;let T=i.current;if(!(!T||g.current)){v=!0;try{let N=await Dk(T.id);if(!N.ok||typeof N.body.version!="number"||N.body.version<=s.current)return;let U=os();if(Nn(U.nodes,U.edges)!==u.current){s.current=N.body.version,n("conflict");return}await C()}catch{}finally{v=!1}}},k=setInterval(()=>{_()},GD);return()=>clearInterval(k)},[a,C]),{status:o,isDirty:r,saveNow:m,flushPendingSave:b,resolveConflict:S,reloadFromServer:C}}var ea=R(X(),1),XD=({locale:e,workspaceId:t})=>{let a=ie(),o=(0,ns.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=qk({workspaceId:t,beforeReset:()=>{o.current()}});(0,ns.useEffect)(()=>{UL(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=(0,ns.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),u=Vk(i,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let d=Fk(i?i.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,ea.jsx)("div",{className:"wf-canvas-root",children:(0,ea.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,ea.jsx)("div",{className:"wf-canvas-root",children:(0,ea.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,ea.jsx)("span",{children:n.message}),(0,ea.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,ea.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,ea.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,ea.jsx)("span",{children:a("app.conflictBanner")}),(0,ea.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,ea.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,ea.jsx)("main",{className:"wf-canvas-main",children:(0,ea.jsx)(Tk,{catalog:l,onExecuteNodeIds:f=>{d.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{d.startExecution({mode:"full"})},onPauseExecution:()=>{d.pause()},onResumeExecution:()=>{d.resume()},onCancelExecution:()=>{d.cancel()},onResetExecution:d.reset})})]})},Vx=XD;var Gk=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Xk=`/**
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

`;var Yk=`/**
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




`;var jk=`/**
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
`;var KD=[{id:"omnimux-workflow-xyflow-base",css:Gk},{id:"omnimux-workflow-theme",css:Xk},{id:"omnimux-workflow-components",css:Yk},{id:"omnimux-workflow-table-node",css:jk}];function Zk(){for(let{id:e,css:t}of KD){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Gx=R(X(),1),bd=new WeakMap;function $D(e,t){if(!e||bd.has(e))return;Zk();let a=(0,Wk.createRoot)(e);bd.set(e,{root:a,lastProps:t}),a.render((0,Gx.jsx)(Vx,{...t}))}function QD(e,t){let a=bd.get(e);a&&(a.lastProps=t,a.root.render((0,Gx.jsx)(Vx,{...t})))}function JD(e){let t=bd.get(e);t&&(t.root.unmount(),bd.delete(e))}return o5(ez);})();
