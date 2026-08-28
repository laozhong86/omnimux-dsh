var __omnimuxWorkflowCanvas=(()=>{var u5=Object.create;var Ld=Object.defineProperty;var d5=Object.getOwnPropertyDescriptor;var c5=Object.getOwnPropertyNames;var f5=Object.getPrototypeOf,p5=Object.prototype.hasOwnProperty;var na=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},m5=(e,t)=>{for(var a in t)Ld(e,a,{get:t[a],enumerable:!0})},sb=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of c5(t))!p5.call(e,n)&&n!==a&&Ld(e,n,{get:()=>t[n],enumerable:!(o=d5(t,n))||o.enumerable});return e};var R=(e,t,a)=>(a=e!=null?u5(f5(e)):{},sb(t||!e||!e.__esModule?Ld(a,"default",{value:e,enumerable:!0}):a,e)),g5=e=>sb(Ld({},"__esModule",{value:!0}),e);var bb=na(et=>{"use strict";function Up(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<_d(n,t))e[o]=t,e[a]=n,a=o;else break e}}function ko(e){return e.length===0?null:e[0]}function Id(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,d=e[s];if(0>_d(i,a))s<n&&0>_d(d,i)?(e[o]=d,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>_d(d,a))e[o]=d,e[s]=a,o=s;else break e}}return t}function _d(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}et.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(ub=performance,et.unstable_now=function(){return ub.now()}):(Bp=Date,db=Bp.now(),et.unstable_now=function(){return Bp.now()-db});var ub,Bp,db,Wo=[],Rn=[],h5=1,Ha=null,Ut=3,qp=!1,is=!1,ss=!1,Vp=!1,pb=typeof setTimeout=="function"?setTimeout:null,mb=typeof clearTimeout=="function"?clearTimeout:null,cb=typeof setImmediate<"u"?setImmediate:null;function kd(e){for(var t=ko(Rn);t!==null;){if(t.callback===null)Id(Rn);else if(t.startTime<=e)Id(Rn),t.sortIndex=t.expirationTime,Up(Wo,t);else break;t=ko(Rn)}}function Gp(e){if(ss=!1,kd(e),!is)if(ko(Wo)!==null)is=!0,Pl||(Pl=!0,zl());else{var t=ko(Rn);t!==null&&Xp(Gp,t.startTime-e)}}var Pl=!1,us=-1,gb=5,hb=-1;function xb(){return Vp?!0:!(et.unstable_now()-hb<gb)}function Hp(){if(Vp=!1,Pl){var e=et.unstable_now();hb=e;var t=!0;try{e:{is=!1,ss&&(ss=!1,mb(us),us=-1),qp=!0;var a=Ut;try{t:{for(kd(e),Ha=ko(Wo);Ha!==null&&!(Ha.expirationTime>e&&xb());){var o=Ha.callback;if(typeof o=="function"){Ha.callback=null,Ut=Ha.priorityLevel;var n=o(Ha.expirationTime<=e);if(e=et.unstable_now(),typeof n=="function"){Ha.callback=n,kd(e),t=!0;break t}Ha===ko(Wo)&&Id(Wo),kd(e)}else Id(Wo);Ha=ko(Wo)}if(Ha!==null)t=!0;else{var r=ko(Rn);r!==null&&Xp(Gp,r.startTime-e),t=!1}}break e}finally{Ha=null,Ut=a,qp=!1}t=void 0}}finally{t?zl():Pl=!1}}}var zl;typeof cb=="function"?zl=function(){cb(Hp)}:typeof MessageChannel<"u"?(Fp=new MessageChannel,fb=Fp.port2,Fp.port1.onmessage=Hp,zl=function(){fb.postMessage(null)}):zl=function(){pb(Hp,0)};var Fp,fb;function Xp(e,t){us=pb(function(){e(et.unstable_now())},t)}et.unstable_IdlePriority=5;et.unstable_ImmediatePriority=1;et.unstable_LowPriority=4;et.unstable_NormalPriority=3;et.unstable_Profiling=null;et.unstable_UserBlockingPriority=2;et.unstable_cancelCallback=function(e){e.callback=null};et.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gb=0<e?Math.floor(1e3/e):5};et.unstable_getCurrentPriorityLevel=function(){return Ut};et.unstable_next=function(e){switch(Ut){case 1:case 2:case 3:var t=3;break;default:t=Ut}var a=Ut;Ut=t;try{return e()}finally{Ut=a}};et.unstable_requestPaint=function(){Vp=!0};et.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Ut;Ut=e;try{return t()}finally{Ut=a}};et.unstable_scheduleCallback=function(e,t,a){var o=et.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:h5++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Up(Rn,e),ko(Wo)===null&&e===ko(Rn)&&(ss?(mb(us),us=-1):ss=!0,Xp(Gp,a-o))):(e.sortIndex=n,Up(Wo,e),is||qp||(is=!0,Pl||(Pl=!0,zl()))),e};et.unstable_shouldYield=xb;et.unstable_wrapCallback=function(e){var t=Ut;return function(){var a=Ut;Ut=t;try{return e.apply(this,arguments)}finally{Ut=a}}}});var wb=na((yz,yb)=>{"use strict";yb.exports=bb()});var Tb=na(pe=>{"use strict";var jp=Symbol.for("react.transitional.element"),x5=Symbol.for("react.portal"),b5=Symbol.for("react.fragment"),y5=Symbol.for("react.strict_mode"),w5=Symbol.for("react.profiler"),v5=Symbol.for("react.consumer"),C5=Symbol.for("react.context"),S5=Symbol.for("react.forward_ref"),L5=Symbol.for("react.suspense"),_5=Symbol.for("react.memo"),_b=Symbol.for("react.lazy"),k5=Symbol.for("react.activity"),vb=Symbol.iterator;function I5(e){return e===null||typeof e!="object"?null:(e=vb&&e[vb]||e["@@iterator"],typeof e=="function"?e:null)}var kb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ib=Object.assign,Mb={};function Bl(e,t,a){this.props=e,this.context=t,this.refs=Mb,this.updater=a||kb}Bl.prototype.isReactComponent={};Bl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nb(){}Nb.prototype=Bl.prototype;function Wp(e,t,a){this.props=e,this.context=t,this.refs=Mb,this.updater=a||kb}var Kp=Wp.prototype=new Nb;Kp.constructor=Wp;Ib(Kp,Bl.prototype);Kp.isPureReactComponent=!0;var Cb=Array.isArray;function Zp(){}var Ze={H:null,A:null,T:null,S:null},Eb=Object.prototype.hasOwnProperty;function $p(e,t,a){var o=a.ref;return{$$typeof:jp,type:e,key:t,ref:o!==void 0?o:null,props:a}}function M5(e,t){return $p(e.type,t,e.props)}function Qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===jp}function N5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Sb=/\/+/g;function Yp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N5(""+e.key):t.toString(36)}function E5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Zp,Zp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ol(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case jp:case x5:l=!0;break;case _b:return l=e._init,Ol(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+Yp(e,0):o,Cb(n)?(a="",l!=null&&(a=l.replace(Sb,"$&/")+"/"),Ol(n,t,a,"",function(d){return d})):n!=null&&(Qp(n)&&(n=M5(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Sb,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(Cb(e))for(var s=0;s<e.length;s++)o=e[s],r=i+Yp(o,s),l+=Ol(o,t,a,r,n);else if(s=I5(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+Yp(o,s++),l+=Ol(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Ol(E5(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function Md(e,t,a){if(e==null)return e;var o=[],n=0;return Ol(e,o,"","",function(r){return t.call(a,r,n++)}),o}function T5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Lb=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},A5={map:Md,forEach:function(e,t,a){Md(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Md(e,function(){t++}),t},toArray:function(e){return Md(e,function(t){return t})||[]},only:function(e){if(!Qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Activity=k5;pe.Children=A5;pe.Component=Bl;pe.Fragment=b5;pe.Profiler=w5;pe.PureComponent=Wp;pe.StrictMode=y5;pe.Suspense=L5;pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ze;pe.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ze.H.useMemoCache(e)}};pe.cache=function(e){return function(){return e.apply(null,arguments)}};pe.cacheSignal=function(){return null};pe.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=Ib({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!Eb.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return $p(e.type,n,o)};pe.createContext=function(e){return e={$$typeof:C5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:v5,_context:e},e};pe.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)Eb.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return $p(e,r,n)};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:S5,render:e}};pe.isValidElement=Qp;pe.lazy=function(e){return{$$typeof:_b,_payload:{_status:-1,_result:e},_init:T5}};pe.memo=function(e,t){return{$$typeof:_5,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Ze.T,a={};Ze.T=a;try{var o=e(),n=Ze.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(Zp,Lb)}catch(r){Lb(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Ze.T=t}};pe.unstable_useCacheRefresh=function(){return Ze.H.useCacheRefresh()};pe.use=function(e){return Ze.H.use(e)};pe.useActionState=function(e,t,a){return Ze.H.useActionState(e,t,a)};pe.useCallback=function(e,t){return Ze.H.useCallback(e,t)};pe.useContext=function(e){return Ze.H.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e,t){return Ze.H.useDeferredValue(e,t)};pe.useEffect=function(e,t){return Ze.H.useEffect(e,t)};pe.useEffectEvent=function(e){return Ze.H.useEffectEvent(e)};pe.useId=function(){return Ze.H.useId()};pe.useImperativeHandle=function(e,t,a){return Ze.H.useImperativeHandle(e,t,a)};pe.useInsertionEffect=function(e,t){return Ze.H.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Ze.H.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Ze.H.useMemo(e,t)};pe.useOptimistic=function(e,t){return Ze.H.useOptimistic(e,t)};pe.useReducer=function(e,t,a){return Ze.H.useReducer(e,t,a)};pe.useRef=function(e){return Ze.H.useRef(e)};pe.useState=function(e){return Ze.H.useState(e)};pe.useSyncExternalStore=function(e,t,a){return Ze.H.useSyncExternalStore(e,t,a)};pe.useTransition=function(){return Ze.H.useTransition()};pe.version="19.2.8"});var J=na((vz,Ab)=>{"use strict";Ab.exports=Tb()});var Db=na(Zt=>{"use strict";var R5=J();function Rb(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Dn(){}var Yt={d:{f:Dn,r:function(){throw Error(Rb(522))},D:Dn,C:Dn,L:Dn,m:Dn,X:Dn,S:Dn,M:Dn},p:0,findDOMNode:null},D5=Symbol.for("react.portal");function z5(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D5,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var ds=R5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Nd(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Yt;Zt.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Rb(299));return z5(e,t,null,a)};Zt.flushSync=function(e){var t=ds.T,a=Yt.p;try{if(ds.T=null,Yt.p=2,e)return e()}finally{ds.T=t,Yt.p=a,Yt.d.f()}};Zt.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Yt.d.C(e,t))};Zt.prefetchDNS=function(e){typeof e=="string"&&Yt.d.D(e)};Zt.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=Nd(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Yt.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Yt.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Zt.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Nd(t.as,t.crossOrigin);Yt.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Yt.d.M(e)};Zt.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=Nd(a,t.crossOrigin);Yt.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Zt.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Nd(t.as,t.crossOrigin);Yt.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Yt.d.m(e)};Zt.requestFormReset=function(e){Yt.d.r(e)};Zt.unstable_batchedUpdates=function(e,t){return e(t)};Zt.useFormState=function(e,t,a){return ds.H.useFormState(e,t,a)};Zt.useFormStatus=function(){return ds.H.useHostTransitionStatus()};Zt.version="19.2.8"});var Io=na((Sz,Pb)=>{"use strict";function zb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zb)}catch(e){console.error(e)}}zb(),Pb.exports=Db()});var jv=na(ef=>{"use strict";var wt=wb(),sy=J(),P5=Io();function G(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function uy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ks(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function dy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ob(e){if(Ks(e)!==e)throw Error(G(188))}function O5(e){var t=e.alternate;if(!t){if(t=Ks(e),t===null)throw Error(G(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Ob(n),e;if(r===o)return Ob(n),t;r=r.sibling}throw Error(G(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(G(189))}}if(a.alternate!==o)throw Error(G(190))}if(a.tag!==3)throw Error(G(188));return a.stateNode.current===a?e:t}function fy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=fy(e),t!==null)return t;e=e.sibling}return null}var Ke=Object.assign,B5=Symbol.for("react.element"),Ed=Symbol.for("react.transitional.element"),bs=Symbol.for("react.portal"),Gl=Symbol.for("react.fragment"),py=Symbol.for("react.strict_mode"),Am=Symbol.for("react.profiler"),my=Symbol.for("react.consumer"),on=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Dm=Symbol.for("react.suspense_list"),Mg=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),zm=Symbol.for("react.activity"),H5=Symbol.for("react.memo_cache_sentinel"),Bb=Symbol.iterator;function cs(e){return e===null||typeof e!="object"?null:(e=Bb&&e[Bb]||e["@@iterator"],typeof e=="function"?e:null)}var F5=Symbol.for("react.client.reference");function Pm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F5?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gl:return"Fragment";case Am:return"Profiler";case py:return"StrictMode";case Rm:return"Suspense";case Dm:return"SuspenseList";case zm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case bs:return"Portal";case on:return e.displayName||"Context";case my:return(e._context.displayName||"Context")+".Consumer";case Ig:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mg:return t=e.displayName||null,t!==null?t:Pm(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return Pm(e(t))}catch{}}return null}var ys=Array.isArray,le=sy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne=P5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Br={pending:!1,data:null,method:null,action:null},Om=[],Xl=-1;function Ao(e){return{current:e}}function Lt(e){0>Xl||(e.current=Om[Xl],Om[Xl]=null,Xl--)}function Ve(e,t){Xl++,Om[Xl]=e.current,e.current=t}var To=Ao(null),Ps=Ao(null),Yn=Ao(null),uc=Ao(null);function dc(e,t){switch(Ve(Yn,t),Ve(Ps,e),Ve(To,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?X0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=X0(t),e=Dv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Lt(To),Ve(To,e)}function ui(){Lt(To),Lt(Ps),Lt(Yn)}function Bm(e){e.memoizedState!==null&&Ve(uc,e);var t=To.current,a=Dv(t,e.type);t!==a&&(Ve(Ps,e),Ve(To,a))}function cc(e){Ps.current===e&&(Lt(To),Lt(Ps)),uc.current===e&&(Lt(uc),Zs._currentValue=Br)}var Jp,Hb;function Dr(e){if(Jp===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Jp=t&&t[1]||"",Hb=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jp+e+Hb}var em=!1;function tm(e,t){if(!e||em)return"";em=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var c=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){c=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){c=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&c&&typeof p.stack=="string")return[p.stack,c.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),d=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===d.length)for(o=s.length-1,n=d.length-1;1<=o&&0<=n&&s[o]!==d[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==d[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==d[n]){var u=`
`+s[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=n);break}}}finally{em=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Dr(a):""}function U5(e,t){switch(e.tag){case 26:case 27:case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return e.child!==t&&t!==null?Dr("Suspense Fallback"):Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 15:return tm(e.type,!1);case 11:return tm(e.type.render,!1);case 1:return tm(e.type,!0);case 31:return Dr("Activity");default:return""}}function Fb(e){try{var t="",a=null;do t+=U5(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Hm=Object.prototype.hasOwnProperty,Ng=wt.unstable_scheduleCallback,am=wt.unstable_cancelCallback,q5=wt.unstable_shouldYield,V5=wt.unstable_requestPaint,La=wt.unstable_now,G5=wt.unstable_getCurrentPriorityLevel,gy=wt.unstable_ImmediatePriority,hy=wt.unstable_UserBlockingPriority,fc=wt.unstable_NormalPriority,X5=wt.unstable_LowPriority,xy=wt.unstable_IdlePriority,Y5=wt.log,Z5=wt.unstable_setDisableYieldValue,$s=null,_a=null;function Un(e){if(typeof Y5=="function"&&Z5(e),_a&&typeof _a.setStrictMode=="function")try{_a.setStrictMode($s,e)}catch{}}var ka=Math.clz32?Math.clz32:K5,j5=Math.log,W5=Math.LN2;function K5(e){return e>>>=0,e===0?32:31-(j5(e)/W5|0)|0}var Td=256,Ad=262144,Rd=4194304;function zr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bc(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=zr(o):(l&=i,l!==0?n=zr(l):a||(a=i&~e,a!==0&&(n=zr(a))))):(i=o&~r,i!==0?n=zr(i):l!==0?n=zr(l):a||(a=o&~e,a!==0&&(n=zr(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Qs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $5(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function by(){var e=Rd;return Rd<<=1,(Rd&62914560)===0&&(Rd=4194304),e}function om(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Js(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Q5(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,d=e.hiddenUpdates;for(a=l&~a;0<a;){var u=31-ka(a),f=1<<u;i[u]=0,s[u]=-1;var c=d[u];if(c!==null)for(d[u]=null,u=0;u<c.length;u++){var p=c[u];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&yy(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function yy(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ka(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wy(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-ka(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function vy(e,t){var a=t&-t;return a=(a&42)!==0?1:Eg(a),(a&(e.suspendedLanes|t))!==0?0:a}function Eg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cy(){var e=Ne.p;return e!==0?e:(e=window.event,e===void 0?32:Xv(e.type))}function Ub(e,t){var a=Ne.p;try{return Ne.p=e,t()}finally{Ne.p=a}}var rr=Math.random().toString(36).slice(2),At="__reactFiber$"+rr,da="__reactProps$"+rr,wi="__reactContainer$"+rr,Fm="__reactEvents$"+rr,J5="__reactListeners$"+rr,eM="__reactHandles$"+rr,qb="__reactResources$"+rr,eu="__reactMarker$"+rr;function Ag(e){delete e[At],delete e[da],delete e[Fm],delete e[J5],delete e[eM]}function Yl(e){var t=e[At];if(t)return t;for(var a=e.parentNode;a;){if(t=a[wi]||a[At]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=K0(e);e!==null;){if(a=e[At])return a;e=K0(e)}return t}e=a,a=e.parentNode}return null}function vi(e){if(e=e[At]||e[wi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ws(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(G(33))}function ai(e){var t=e[qb];return t||(t=e[qb]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function St(e){e[eu]=!0}var Sy=new Set,Ly={};function jr(e,t){di(e,t),di(e+"Capture",t)}function di(e,t){for(Ly[e]=t,e=0;e<t.length;e++)Sy.add(t[e])}var tM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vb={},Gb={};function aM(e){return Hm.call(Gb,e)?!0:Hm.call(Vb,e)?!1:tM.test(e)?Gb[e]=!0:(Vb[e]=!0,!1)}function jd(e,t,a){if(aM(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Dd(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ko(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ua(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _y(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oM(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Um(e){if(!e._valueTracker){var t=_y(e)?"checked":"value";e._valueTracker=oM(e,t,""+e[t])}}function ky(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=_y(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function pc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nM=/[\n"\\]/g;function Ga(e){return e.replace(nM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qm(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ua(t)):e.value!==""+Ua(t)&&(e.value=""+Ua(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Vm(e,l,Ua(t)):a!=null?Vm(e,l,Ua(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Ua(i):e.removeAttribute("name")}function Iy(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Um(e);return}a=a!=null?""+Ua(a):"",t=t!=null?""+Ua(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Um(e)}function Vm(e,t,a){t==="number"&&pc(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function oi(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ua(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function My(e,t,a){if(t!=null&&(t=""+Ua(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ua(a):""}function Ny(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(G(92));if(ys(o)){if(1<o.length)throw Error(G(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ua(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Um(e)}function ci(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var rM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xb(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||rM.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ey(e,t,a){if(t!=null&&typeof t!="object")throw Error(G(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Xb(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Xb(e,r,t[r])}function Rg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wd(e){return iM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var Gm=null;function Dg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,ni=null;function Yb(e){var t=vi(e);if(t&&(e=t.stateNode)){var a=e[da]||null;e:switch(e=t.stateNode,t.type){case"input":if(qm(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ga(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[da]||null;if(!n)throw Error(G(90));qm(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&ky(o)}break e;case"textarea":My(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&oi(e,!!a.multiple,t,!1)}}}var nm=!1;function Ty(e,t,a){if(nm)return e(t,a);nm=!0;try{var o=e(t);return o}finally{if(nm=!1,(Zl!==null||ni!==null)&&(Kc(),Zl&&(t=Zl,e=ni,ni=Zl=null,Yb(t),e)))for(t=0;t<e.length;t++)Yb(e[t])}}function Os(e,t){var a=e.stateNode;if(a===null)return null;var o=a[da]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(G(231,t,typeof a));return a}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xm=!1;if(dn)try{Hl={},Object.defineProperty(Hl,"passive",{get:function(){Xm=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{Xm=!1}var Hl,qn=null,zg=null,Kd=null;function Ay(){if(Kd)return Kd;var e,t=zg,a=t.length,o,n="value"in qn?qn.value:qn.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return Kd=n.slice(e,1<o?1-o:void 0)}function $d(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zd(){return!0}function Zb(){return!1}function ca(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?zd:Zb,this.isPropagationStopped=Zb,this}return Ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zd)},persist:function(){},isPersistent:zd}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=ca(Wr),tu=Ke({},Wr,{view:0,detail:0}),sM=ca(tu),rm,lm,fs,Fc=Ke({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fs&&(fs&&e.type==="mousemove"?(rm=e.screenX-fs.screenX,lm=e.screenY-fs.screenY):lm=rm=0,fs=e),rm)},movementY:function(e){return"movementY"in e?e.movementY:lm}}),jb=ca(Fc),uM=Ke({},Fc,{dataTransfer:0}),dM=ca(uM),cM=Ke({},tu,{relatedTarget:0}),im=ca(cM),fM=Ke({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),pM=ca(fM),mM=Ke({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gM=ca(mM),hM=Ke({},Wr,{data:0}),Wb=ca(hM),xM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yM[e])?!!t[e]:!1}function Pg(){return wM}var vM=Ke({},tu,{key:function(e){if(e.key){var t=xM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$d(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pg,charCode:function(e){return e.type==="keypress"?$d(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$d(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CM=ca(vM),SM=Ke({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kb=ca(SM),LM=Ke({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pg}),_M=ca(LM),kM=Ke({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=ca(kM),MM=Ke({},Fc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NM=ca(MM),EM=Ke({},Wr,{newState:0,oldState:0}),TM=ca(EM),AM=[9,13,27,32],Og=dn&&"CompositionEvent"in window,Ss=null;dn&&"documentMode"in document&&(Ss=document.documentMode);var RM=dn&&"TextEvent"in window&&!Ss,Ry=dn&&(!Og||Ss&&8<Ss&&11>=Ss),$b=" ",Qb=!1;function Dy(e,t){switch(e){case"keyup":return AM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function DM(e,t){switch(e){case"compositionend":return zy(t);case"keypress":return t.which!==32?null:(Qb=!0,$b);case"textInput":return e=t.data,e===$b&&Qb?null:e;default:return null}}function zM(e,t){if(jl)return e==="compositionend"||!Og&&Dy(e,t)?(e=Ay(),Kd=zg=qn=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ry&&t.locale!=="ko"?null:t.data;default:return null}}var PM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!PM[e.type]:t==="textarea"}function Py(e,t,a,o){Zl?ni?ni.push(o):ni=[o]:Zl=o,t=Tc(t,"onChange"),0<t.length&&(a=new Hc("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ls=null,Bs=null;function OM(e){Tv(e,0)}function Uc(e){var t=ws(e);if(ky(t))return e}function e0(e,t){if(e==="change")return t}var Oy=!1;dn&&(dn?(Od="oninput"in document,Od||(sm=document.createElement("div"),sm.setAttribute("oninput","return;"),Od=typeof sm.oninput=="function"),Pd=Od):Pd=!1,Oy=Pd&&(!document.documentMode||9<document.documentMode));var Pd,Od,sm;function t0(){Ls&&(Ls.detachEvent("onpropertychange",By),Bs=Ls=null)}function By(e){if(e.propertyName==="value"&&Uc(Bs)){var t=[];Py(t,Bs,e,Dg(e)),Ty(OM,t)}}function BM(e,t,a){e==="focusin"?(t0(),Ls=t,Bs=a,Ls.attachEvent("onpropertychange",By)):e==="focusout"&&t0()}function HM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uc(Bs)}function FM(e,t){if(e==="click")return Uc(t)}function UM(e,t){if(e==="input"||e==="change")return Uc(t)}function qM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ma=typeof Object.is=="function"?Object.is:qM;function Hs(e,t){if(Ma(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Hm.call(t,n)||!Ma(e[n],t[n]))return!1}return!0}function a0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o0(e,t){var a=a0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=a0(a)}}function Hy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pc(e.document)}return t}function Bg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var VM=dn&&"documentMode"in document&&11>=document.documentMode,Wl=null,Ym=null,_s=null,Zm=!1;function n0(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zm||Wl==null||Wl!==pc(o)||(o=Wl,"selectionStart"in o&&Bg(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_s&&Hs(_s,o)||(_s=o,o=Tc(Ym,"onSelect"),0<o.length&&(t=new Hc("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Wl)))}function Rr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Kl={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},um={},Uy={};dn&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete Kl.animationend.animation,delete Kl.animationiteration.animation,delete Kl.animationstart.animation),"TransitionEvent"in window||delete Kl.transitionend.transition);function Kr(e){if(um[e])return um[e];if(!Kl[e])return e;var t=Kl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Uy)return um[e]=t[a];return e}var qy=Kr("animationend"),Vy=Kr("animationiteration"),Gy=Kr("animationstart"),GM=Kr("transitionrun"),XM=Kr("transitionstart"),YM=Kr("transitioncancel"),Xy=Kr("transitionend"),Yy=new Map,jm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jm.push("scrollEnd");function co(e,t){Yy.set(e,t),jr(t,[e])}var mc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fa=[],$l=0,Hg=0;function qc(){for(var e=$l,t=Hg=$l=0;t<e;){var a=Fa[t];Fa[t++]=null;var o=Fa[t];Fa[t++]=null;var n=Fa[t];Fa[t++]=null;var r=Fa[t];if(Fa[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&Zy(a,n,r)}}function Vc(e,t,a,o){Fa[$l++]=e,Fa[$l++]=t,Fa[$l++]=a,Fa[$l++]=o,Hg|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Fg(e,t,a,o){return Vc(e,t,a,o),gc(e)}function $r(e,t){return Vc(e,null,null,t),gc(e)}function Zy(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-ka(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function gc(e){if(50<Ds)throw Ds=0,gg=null,Error(G(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ql={};function ZM(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ca(e,t,a,o){return new ZM(e,t,a,o)}function Ug(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ln(e,t){var a=e.alternate;return a===null?(a=Ca(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jy(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qd(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Ug(e)&&(l=1);else if(typeof e=="string")l=K4(e,a,To.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case zm:return e=Ca(31,a,t,n),e.elementType=zm,e.lanes=r,e;case Gl:return Hr(a.children,n,r,t);case py:l=8,n|=24;break;case Am:return e=Ca(12,a,t,n|2),e.elementType=Am,e.lanes=r,e;case Rm:return e=Ca(13,a,t,n),e.elementType=Rm,e.lanes=r,e;case Dm:return e=Ca(19,a,t,n),e.elementType=Dm,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case on:l=10;break e;case my:l=9;break e;case Ig:l=11;break e;case Mg:l=14;break e;case zn:l=16,o=null;break e}l=29,a=Error(G(130,e===null?"null":typeof e,"")),o=null}return t=Ca(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function Hr(e,t,a,o){return e=Ca(7,e,o,t),e.lanes=a,e}function dm(e,t,a){return e=Ca(6,e,null,t),e.lanes=a,e}function Wy(e){var t=Ca(18,null,null,0);return t.stateNode=e,t}function cm(e,t,a){return t=Ca(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var r0=new WeakMap;function Xa(e,t){if(typeof e=="object"&&e!==null){var a=r0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Fb(t)},r0.set(e,t),t)}return{value:e,source:t,stack:Fb(t)}}var Jl=[],ei=0,hc=null,Fs=0,qa=[],Va=0,tr=null,Mo=1,No="";function tn(e,t){Jl[ei++]=Fs,Jl[ei++]=hc,hc=e,Fs=t}function Ky(e,t,a){qa[Va++]=Mo,qa[Va++]=No,qa[Va++]=tr,tr=e;var o=Mo;e=No;var n=32-ka(o)-1;o&=~(1<<n),a+=1;var r=32-ka(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,Mo=1<<32-ka(t)+n|a<<n|o,No=r+e}else Mo=1<<r|a<<n|o,No=e}function qg(e){e.return!==null&&(tn(e,1),Ky(e,1,0))}function Vg(e){for(;e===hc;)hc=Jl[--ei],Jl[ei]=null,Fs=Jl[--ei],Jl[ei]=null;for(;e===tr;)tr=qa[--Va],qa[Va]=null,No=qa[--Va],qa[Va]=null,Mo=qa[--Va],qa[Va]=null}function $y(e,t){qa[Va++]=Mo,qa[Va++]=No,qa[Va++]=tr,Mo=t.id,No=t.overflow,tr=e}var Rt=null,We=null,Le=!1,Zn=null,Ya=!1,Wm=Error(G(519));function ar(e){var t=Error(G(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Us(Xa(t,e)),Wm}function l0(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[At]=e,t[da]=o,a){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(a=0;a<Xs.length;a++)we(Xs[a],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),Iy(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),Ny(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Rv(t.textContent,a)?(o.popover!=null&&(we("beforetoggle",t),we("toggle",t)),o.onScroll!=null&&we("scroll",t),o.onScrollEnd!=null&&we("scrollend",t),o.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||ar(e,!0)}function i0(e){for(Rt=e.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:Ya=!1;return;case 27:case 3:Ya=!0;return;default:Rt=Rt.return}}function Fl(e){if(e!==Rt)return!1;if(!Le)return i0(e),Le=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wg(e.type,e.memoizedProps)),a=!a),a&&We&&ar(e),i0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));We=W0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));We=W0(e)}else t===27?(t=We,lr(e.type)?(e=Lg,Lg=null,We=e):We=t):We=Rt?ja(e.stateNode.nextSibling):null;return!0}function Vr(){We=Rt=null,Le=!1}function fm(){var e=Zn;return e!==null&&(sa===null?sa=e:sa.push.apply(sa,e),Zn=null),e}function Us(e){Zn===null?Zn=[e]:Zn.push(e)}var Km=Ao(null),Qr=null,rn=null;function On(e,t,a){Ve(Km,t._currentValue),t._currentValue=a}function sn(e){e._currentValue=Km.current,Lt(Km)}function $m(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Qm(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),$m(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(G(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),$m(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function Ci(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(G(387));if(l=l.memoizedProps,l!==null){var i=n.type;Ma(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===uc.current){if(l=n.alternate,l===null)throw Error(G(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Zs):e=[Zs])}n=n.return}e!==null&&Qm(t,e,a,o),t.flags|=262144}function xc(e){for(e=e.firstContext;e!==null;){if(!Ma(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gr(e){Qr=e,rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dt(e){return Qy(Qr,e)}function Bd(e,t){return Qr===null&&Gr(e),Qy(e,t)}function Qy(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},rn===null){if(e===null)throw Error(G(308));rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rn=rn.next=t;return a}var jM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},WM=wt.unstable_scheduleCallback,KM=wt.unstable_NormalPriority,pt={$$typeof:on,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gg(){return{controller:new jM,data:new Map,refCount:0}}function au(e){e.refCount--,e.refCount===0&&WM(KM,function(){e.controller.abort()})}var ks=null,Jm=0,fi=0,ri=null;function $M(e,t){if(ks===null){var a=ks=[];Jm=0,fi=gh(),ri={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Jm++,t.then(s0,s0),t}function s0(){if(--Jm===0&&ks!==null){ri!==null&&(ri.status="fulfilled");var e=ks;ks=null,fi=0,ri=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function QM(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var u0=le.S;le.S=function(e,t){fv=La(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$M(e,t),u0!==null&&u0(e,t)};var Fr=Ao(null);function Xg(){var e=Fr.current;return e!==null?e:Fe.pooledCache}function Jd(e,t){t===null?Ve(Fr,Fr.current):Ve(Fr,t.pool)}function Jy(){var e=Xg();return e===null?null:{parent:pt._currentValue,pool:e}}var Si=Error(G(460)),Yg=Error(G(474)),Gc=Error(G(542)),bc={then:function(){}};function d0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ew(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(nn,nn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f0(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(G(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f0(e),e}throw Ur=t,Si}}function Pr(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,Si):a}}var Ur=null;function c0(){if(Ur===null)throw Error(G(459));var e=Ur;return Ur=null,e}function f0(e){if(e===Si||e===Gc)throw Error(G(483))}var li=null,qs=0;function Hd(e){var t=qs;return qs+=1,li===null&&(li=[]),ew(li,e,t)}function ps(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fd(e,t){throw t.$$typeof===B5?Error(G(525)):(e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tw(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=ln(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function i(h,x,m,b){return x===null||x.tag!==6?(x=dm(m,h.mode,b),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,b){var S=m.type;return S===Gl?u(h,x,m.props.children,b,m.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zn&&Pr(S)===x.type)?(x=n(x,m.props),ps(x,m),x.return=h,x):(x=Qd(m.type,m.key,m.props,null,h.mode,b),ps(x,m),x.return=h,x)}function d(h,x,m,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=cm(m,h.mode,b),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function u(h,x,m,b,S){return x===null||x.tag!==7?(x=Hr(m,h.mode,b,S),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=dm(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ed:return m=Qd(x.type,x.key,x.props,null,h.mode,m),ps(m,x),m.return=h,m;case bs:return x=cm(x,h.mode,m),x.return=h,x;case zn:return x=Pr(x),f(h,x,m)}if(ys(x)||cs(x))return x=Hr(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,Hd(x),m);if(x.$$typeof===on)return f(h,Bd(h,x),m);Fd(h,x)}return null}function c(h,x,m,b){var S=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return S!==null?null:i(h,x,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ed:return m.key===S?s(h,x,m,b):null;case bs:return m.key===S?d(h,x,m,b):null;case zn:return m=Pr(m),c(h,x,m,b)}if(ys(m)||cs(m))return S!==null?null:u(h,x,m,b,null);if(typeof m.then=="function")return c(h,x,Hd(m),b);if(m.$$typeof===on)return c(h,x,Bd(h,m),b);Fd(h,m)}return null}function p(h,x,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return h=h.get(m)||null,i(x,h,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ed:return h=h.get(b.key===null?m:b.key)||null,s(x,h,b,S);case bs:return h=h.get(b.key===null?m:b.key)||null,d(x,h,b,S);case zn:return b=Pr(b),p(h,x,m,b,S)}if(ys(b)||cs(b))return h=h.get(m)||null,u(x,h,b,S,null);if(typeof b.then=="function")return p(h,x,m,Hd(b),S);if(b.$$typeof===on)return p(h,x,m,Bd(x,b),S);Fd(x,b)}return null}function g(h,x,m,b){for(var S=null,C=null,v=x,_=x=0,k=null;v!==null&&_<m.length;_++){v.index>_?(k=v,v=null):k=v.sibling;var T=c(h,v,m[_],b);if(T===null){v===null&&(v=k);break}e&&v&&T.alternate===null&&t(h,v),x=r(T,x,_),C===null?S=T:C.sibling=T,C=T,v=k}if(_===m.length)return a(h,v),Le&&tn(h,_),S;if(v===null){for(;_<m.length;_++)v=f(h,m[_],b),v!==null&&(x=r(v,x,_),C===null?S=v:C.sibling=v,C=v);return Le&&tn(h,_),S}for(v=o(v);_<m.length;_++)k=p(v,h,_,m[_],b),k!==null&&(e&&k.alternate!==null&&v.delete(k.key===null?_:k.key),x=r(k,x,_),C===null?S=k:C.sibling=k,C=k);return e&&v.forEach(function(E){return t(h,E)}),Le&&tn(h,_),S}function y(h,x,m,b){if(m==null)throw Error(G(151));for(var S=null,C=null,v=x,_=x=0,k=null,T=m.next();v!==null&&!T.done;_++,T=m.next()){v.index>_?(k=v,v=null):k=v.sibling;var E=c(h,v,T.value,b);if(E===null){v===null&&(v=k);break}e&&v&&E.alternate===null&&t(h,v),x=r(E,x,_),C===null?S=E:C.sibling=E,C=E,v=k}if(T.done)return a(h,v),Le&&tn(h,_),S;if(v===null){for(;!T.done;_++,T=m.next())T=f(h,T.value,b),T!==null&&(x=r(T,x,_),C===null?S=T:C.sibling=T,C=T);return Le&&tn(h,_),S}for(v=o(v);!T.done;_++,T=m.next())T=p(v,h,_,T.value,b),T!==null&&(e&&T.alternate!==null&&v.delete(T.key===null?_:T.key),x=r(T,x,_),C===null?S=T:C.sibling=T,C=T);return e&&v.forEach(function(F){return t(h,F)}),Le&&tn(h,_),S}function w(h,x,m,b){if(typeof m=="object"&&m!==null&&m.type===Gl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ed:e:{for(var S=m.key;x!==null;){if(x.key===S){if(S=m.type,S===Gl){if(x.tag===7){a(h,x.sibling),b=n(x,m.props.children),b.return=h,h=b;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zn&&Pr(S)===x.type){a(h,x.sibling),b=n(x,m.props),ps(b,m),b.return=h,h=b;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===Gl?(b=Hr(m.props.children,h.mode,b,m.key),b.return=h,h=b):(b=Qd(m.type,m.key,m.props,null,h.mode,b),ps(b,m),b.return=h,h=b)}return l(h);case bs:e:{for(S=m.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),b=n(x,m.children||[]),b.return=h,h=b;break e}else{a(h,x);break}else t(h,x);x=x.sibling}b=cm(m,h.mode,b),b.return=h,h=b}return l(h);case zn:return m=Pr(m),w(h,x,m,b)}if(ys(m))return g(h,x,m,b);if(cs(m)){if(S=cs(m),typeof S!="function")throw Error(G(150));return m=S.call(m),y(h,x,m,b)}if(typeof m.then=="function")return w(h,x,Hd(m),b);if(m.$$typeof===on)return w(h,x,Bd(h,m),b);Fd(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),b=n(x,m),b.return=h,h=b):(a(h,x),b=dm(m,h.mode,b),b.return=h,h=b),l(h)):a(h,x)}return function(h,x,m,b){try{qs=0;var S=w(h,x,m,b);return li=null,S}catch(v){if(v===Si||v===Gc)throw v;var C=Ca(29,v,null,h.mode);return C.lanes=b,C.return=h,C}}}var Xr=tw(!0),aw=tw(!1),Pn=!1;function Zg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Me&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=gc(e),Zy(e,null,a),t}return Vc(e,o,t,a),gc(e)}function Is(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,wy(e,a)}}function pm(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var tg=!1;function Ms(){if(tg){var e=ri;if(e!==null)throw e}}function Ns(e,t,a,o){tg=!1;var n=e.updateQueue;Pn=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,d=s.next;s.next=null,l===null?r=d:l.next=d,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;l=0,u=d=s=null,i=r;do{var c=i.lane&-536870913,p=c!==i.lane;if(p?(Se&c)===c:(o&c)===c){c!==0&&c===fi&&(tg=!0),u!==null&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,y=i;c=t;var w=a;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(w,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,c=typeof g=="function"?g.call(w,f,c):g,c==null)break e;f=Ke({},f,c);break e;case 2:Pn=!0}}c=i.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[c]:p.push(c))}else p={lane:c,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=p,s=f):u=u.next=p,l|=c;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);u===null&&(s=f),n.baseState=s,n.firstBaseUpdate=d,n.lastBaseUpdate=u,r===null&&(n.shared.lanes=0),nr|=l,e.lanes=l,e.memoizedState=f}}function ow(e,t){if(typeof e!="function")throw Error(G(191,e));e.call(t)}function nw(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ow(a[e],t)}var pi=Ao(null),yc=Ao(0);function p0(e,t){e=mn,Ve(yc,e),Ve(pi,t),mn=e|t.baseLanes}function ag(){Ve(yc,mn),Ve(pi,pi.current)}function jg(){mn=yc.current,Lt(pi),Lt(yc)}var Na=Ao(null),Za=null;function Bn(e){var t=e.alternate;Ve(ut,ut.current&1),Ve(Na,e),Za===null&&(t===null||pi.current!==null||t.memoizedState!==null)&&(Za=e)}function og(e){Ve(ut,ut.current),Ve(Na,e),Za===null&&(Za=e)}function rw(e){e.tag===22?(Ve(ut,ut.current),Ve(Na,e),Za===null&&(Za=e)):Hn(e)}function Hn(){Ve(ut,ut.current),Ve(Na,Na.current)}function va(e){Lt(Na),Za===e&&(Za=null),Lt(ut)}var ut=Ao(0);function wc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cg(a)||Sg(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,me=null,Oe=null,ct=null,vc=!1,ii=!1,Yr=!1,Cc=0,Vs=0,si=null,JM=0;function rt(){throw Error(G(321))}function Wg(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ma(e[a],t[a]))return!1;return!0}function Kg(e,t,a,o,n,r){return cn=r,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?Pw:ih,Yr=!1,r=a(o,n),Yr=!1,ii&&(r=iw(t,a,o,n)),lw(e),r}function lw(e){le.H=Gs;var t=Oe!==null&&Oe.next!==null;if(cn=0,ct=Oe=me=null,vc=!1,Vs=0,si=null,t)throw Error(G(300));e===null||mt||(e=e.dependencies,e!==null&&xc(e)&&(mt=!0))}function iw(e,t,a,o){me=e;var n=0;do{if(ii&&(si=null),Vs=0,ii=!1,25<=n)throw Error(G(301));if(n+=1,ct=Oe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}le.H=Ow,r=t(a,o)}while(ii);return r}function e4(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?ou(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(me.flags|=1024),t}function $g(){var e=Cc!==0;return Cc=0,e}function Qg(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Jg(e){if(vc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vc=!1}cn=0,ct=Oe=me=null,ii=!1,Vs=Cc=0,si=null}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?me.memoizedState=ct=e:ct=ct.next=e,ct}function dt(){if(Oe===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=ct===null?me.memoizedState:ct.next;if(t!==null)ct=t,Oe=e;else{if(e===null)throw me.alternate===null?Error(G(467)):Error(G(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ct===null?me.memoizedState=ct=e:ct=ct.next=e}return ct}function Xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ou(e){var t=Vs;return Vs+=1,si===null&&(si=[]),e=ew(si,e,t),t=me,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?Pw:ih),e}function Yc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ou(e);if(e.$$typeof===on)return Dt(e)}throw Error(G(438,String(e)))}function eh(e){var t=null,a=me.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Xc(),me.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=H5;return t.index++,a}function fn(e,t){return typeof t=="function"?t(e):t}function ec(e){var t=dt();return th(t,Oe,e)}function th(e,t,a){var o=e.queue;if(o===null)throw Error(G(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,d=t,u=!1;do{var f=d.lane&-536870913;if(f!==d.lane?(Se&f)===f:(cn&f)===f){var c=d.revertLane;if(c===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),f===fi&&(u=!0);else if((cn&c)===c){d=d.next,c===fi&&(u=!0);continue}else f={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(i=s=f,l=r):s=s.next=f,me.lanes|=c,nr|=c;f=d.action,Yr&&a(r,f),r=d.hasEagerState?d.eagerState:a(r,f)}else c={lane:f,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(i=s=c,l=r):s=s.next=c,me.lanes|=f,nr|=f;d=d.next}while(d!==null&&d!==t);if(s===null?l=r:s.next=i,!Ma(r,e.memoizedState)&&(mt=!0,u&&(a=ri,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function mm(e){var t=dt(),a=t.queue;if(a===null)throw Error(G(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);Ma(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function sw(e,t,a){var o=me,n=dt(),r=Le;if(r){if(a===void 0)throw Error(G(407));a=a()}else a=t();var l=!Ma((Oe||n).memoizedState,a);if(l&&(n.memoizedState=a,mt=!0),n=n.queue,ah(cw.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,mi(9,{destroy:void 0},dw.bind(null,o,n,a,t),null),Fe===null)throw Error(G(349));r||(cn&127)!==0||uw(o,t,a)}return a}function uw(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=me.updateQueue,t===null?(t=Xc(),me.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function dw(e,t,a,o){t.value=a,t.getSnapshot=o,fw(t)&&pw(e)}function cw(e,t,a){return a(function(){fw(t)&&pw(e)})}function fw(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ma(e,a)}catch{return!0}}function pw(e){var t=$r(e,2);t!==null&&ua(t,e,2)}function ng(e){var t=jt();if(typeof e=="function"){var a=e;if(e=a(),Yr){Un(!0);try{a()}finally{Un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:e},t}function mw(e,t,a,o){return e.baseState=a,th(e,Oe,typeof o=="function"?o:fn)}function t4(e,t,a,o,n){if(jc(e))throw Error(G(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};le.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,gw(t,r)):(r.next=a.next,t.pending=a.next=r)}}function gw(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=le.T,l={};le.T=l;try{var i=a(n,o),s=le.S;s!==null&&s(l,i),m0(e,t,i)}catch(d){rg(e,t,d)}finally{r!==null&&l.types!==null&&(r.types=l.types),le.T=r}}else try{r=a(n,o),m0(e,t,r)}catch(d){rg(e,t,d)}}function m0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){g0(e,t,o)},function(o){return rg(e,t,o)}):g0(e,t,a)}function g0(e,t,a){t.status="fulfilled",t.value=a,hw(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,gw(e,a)))}function rg(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,hw(t),t=t.next;while(t!==o)}e.action=null}function hw(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xw(e,t){return t}function h0(e,t){if(Le){var a=Fe.formState;if(a!==null){e:{var o=me;if(Le){if(We){t:{for(var n=We,r=Ya;n.nodeType!==8;){if(!r){n=null;break t}if(n=ja(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){We=ja(n.nextSibling),o=n.data==="F!";break e}}ar(o)}o=!1}o&&(t=a[0])}}return a=jt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xw,lastRenderedState:t},a.queue=o,a=Rw.bind(null,me,o),o.dispatch=a,o=ng(!1),r=lh.bind(null,me,!1,o.queue),o=jt(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=t4.bind(null,me,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function x0(e){var t=dt();return bw(t,Oe,e)}function bw(e,t,a){if(t=th(e,t,xw)[0],e=ec(fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ou(t)}catch(l){throw l===Si?Gc:l}else o=t;t=dt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(me.flags|=2048,mi(9,{destroy:void 0},a4.bind(null,n,a),null)),[o,r,e]}function a4(e,t){e.action=t}function b0(e){var t=dt(),a=Oe;if(a!==null)return bw(t,a,e);dt(),t=t.memoizedState,a=dt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function mi(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=me.updateQueue,t===null&&(t=Xc(),me.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function yw(){return dt().memoizedState}function tc(e,t,a,o){var n=jt();me.flags|=e,n.memoizedState=mi(1|t,{destroy:void 0},a,o===void 0?null:o)}function Zc(e,t,a,o){var n=dt();o=o===void 0?null:o;var r=n.memoizedState.inst;Oe!==null&&o!==null&&Wg(o,Oe.memoizedState.deps)?n.memoizedState=mi(t,r,a,o):(me.flags|=e,n.memoizedState=mi(1|t,r,a,o))}function y0(e,t){tc(8390656,8,e,t)}function ah(e,t){Zc(2048,8,e,t)}function o4(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Xc(),me.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ww(e){var t=dt().memoizedState;return o4({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(G(440));return t.impl.apply(void 0,arguments)}}function vw(e,t){return Zc(4,2,e,t)}function Cw(e,t){return Zc(4,4,e,t)}function Sw(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lw(e,t,a){a=a!=null?a.concat([e]):null,Zc(4,4,Sw.bind(null,t,e),a)}function oh(){}function _w(e,t){var a=dt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Wg(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function kw(e,t){var a=dt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Wg(t,o[1]))return o[0];if(o=e(),Yr){Un(!0);try{e()}finally{Un(!1)}}return a.memoizedState=[o,t],o}function nh(e,t,a){return a===void 0||(cn&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=mv(),me.lanes|=e,nr|=e,a)}function Iw(e,t,a,o){return Ma(a,t)?a:pi.current!==null?(e=nh(e,a,o),Ma(e,t)||(mt=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(Se&261930)===0?(mt=!0,e.memoizedState=a):(e=mv(),me.lanes|=e,nr|=e,t)}function Mw(e,t,a,o,n){var r=Ne.p;Ne.p=r!==0&&8>r?r:8;var l=le.T,i={};le.T=i,lh(e,!1,t,a);try{var s=n(),d=le.S;if(d!==null&&d(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=QM(s,o);Es(e,t,u,Ia(e))}else Es(e,t,o,Ia(e))}catch(f){Es(e,t,{then:function(){},status:"rejected",reason:f},Ia())}finally{Ne.p=r,l!==null&&i.types!==null&&(l.types=i.types),le.T=l}}function n4(){}function lg(e,t,a,o){if(e.tag!==5)throw Error(G(476));var n=Nw(e).queue;Mw(e,n,t,Br,a===null?n4:function(){return Ew(e),a(o)})}function Nw(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Br,baseState:Br,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:Br},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ew(e){var t=Nw(e);t.next===null&&(t=e.alternate.memoizedState),Es(e,t.next.queue,{},Ia())}function rh(){return Dt(Zs)}function Tw(){return dt().memoizedState}function Aw(){return dt().memoizedState}function r4(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ia();e=jn(a);var o=Wn(t,e,a);o!==null&&(ua(o,t,a),Is(o,t,a)),t={cache:Gg()},e.payload=t;return}t=t.return}}function l4(e,t,a){var o=Ia();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jc(e)?Dw(t,a):(a=Fg(e,t,a,o),a!==null&&(ua(a,e,o),zw(a,t,o)))}function Rw(e,t,a){var o=Ia();Es(e,t,a,o)}function Es(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jc(e))Dw(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,Ma(i,l))return Vc(e,t,n,0),Fe===null&&qc(),!1}catch{}if(a=Fg(e,t,n,o),a!==null)return ua(a,e,o),zw(a,t,o),!0}return!1}function lh(e,t,a,o){if(o={lane:2,revertLane:gh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jc(e)){if(t)throw Error(G(479))}else t=Fg(e,a,o,2),t!==null&&ua(t,e,2)}function jc(e){var t=e.alternate;return e===me||t!==null&&t===me}function Dw(e,t){ii=vc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function zw(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,wy(e,a)}}var Gs={readContext:Dt,use:Yc,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};Gs.useEffectEvent=rt;var Pw={readContext:Dt,use:Yc,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:y0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,tc(4194308,4,Sw.bind(null,t,e),a)},useLayoutEffect:function(e,t){return tc(4194308,4,e,t)},useInsertionEffect:function(e,t){tc(4,2,e,t)},useMemo:function(e,t){var a=jt();t=t===void 0?null:t;var o=e();if(Yr){Un(!0);try{e()}finally{Un(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=jt();if(a!==void 0){var n=a(t);if(Yr){Un(!0);try{a(t)}finally{Un(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=l4.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:function(e){e=ng(e);var t=e.queue,a=Rw.bind(null,me,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:oh,useDeferredValue:function(e,t){var a=jt();return nh(a,e,t)},useTransition:function(){var e=ng(!1);return e=Mw.bind(null,me,e.queue,!0,!1),jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=me,n=jt();if(Le){if(a===void 0)throw Error(G(407));a=a()}else{if(a=t(),Fe===null)throw Error(G(349));(Se&127)!==0||uw(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,y0(cw.bind(null,o,r,e),[e]),o.flags|=2048,mi(9,{destroy:void 0},dw.bind(null,o,r,a,t),null),a},useId:function(){var e=jt(),t=Fe.identifierPrefix;if(Le){var a=No,o=Mo;a=(o&~(1<<32-ka(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Cc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=JM++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:rh,useFormState:h0,useActionState:h0,useOptimistic:function(e){var t=jt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lh.bind(null,me,!0,a),a.dispatch=t,[e,t]},useMemoCache:eh,useCacheRefresh:function(){return jt().memoizedState=r4.bind(null,me)},useEffectEvent:function(e){var t=jt(),a={impl:e};return t.memoizedState=a,function(){if((Me&2)!==0)throw Error(G(440));return a.impl.apply(void 0,arguments)}}},ih={readContext:Dt,use:Yc,useCallback:_w,useContext:Dt,useEffect:ah,useImperativeHandle:Lw,useInsertionEffect:vw,useLayoutEffect:Cw,useMemo:kw,useReducer:ec,useRef:yw,useState:function(){return ec(fn)},useDebugValue:oh,useDeferredValue:function(e,t){var a=dt();return Iw(a,Oe.memoizedState,e,t)},useTransition:function(){var e=ec(fn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:ou(e),t]},useSyncExternalStore:sw,useId:Tw,useHostTransitionStatus:rh,useFormState:x0,useActionState:x0,useOptimistic:function(e,t){var a=dt();return mw(a,Oe,e,t)},useMemoCache:eh,useCacheRefresh:Aw};ih.useEffectEvent=ww;var Ow={readContext:Dt,use:Yc,useCallback:_w,useContext:Dt,useEffect:ah,useImperativeHandle:Lw,useInsertionEffect:vw,useLayoutEffect:Cw,useMemo:kw,useReducer:mm,useRef:yw,useState:function(){return mm(fn)},useDebugValue:oh,useDeferredValue:function(e,t){var a=dt();return Oe===null?nh(a,e,t):Iw(a,Oe.memoizedState,e,t)},useTransition:function(){var e=mm(fn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:ou(e),t]},useSyncExternalStore:sw,useId:Tw,useHostTransitionStatus:rh,useFormState:b0,useActionState:b0,useOptimistic:function(e,t){var a=dt();return Oe!==null?mw(a,Oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:eh,useCacheRefresh:Aw};Ow.useEffectEvent=ww;function gm(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ke({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ig={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Ia(),n=jn(o);n.payload=t,a!=null&&(n.callback=a),t=Wn(e,n,o),t!==null&&(ua(t,e,o),Is(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Ia(),n=jn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Wn(e,n,o),t!==null&&(ua(t,e,o),Is(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ia(),o=jn(a);o.tag=2,t!=null&&(o.callback=t),t=Wn(e,o,a),t!==null&&(ua(t,e,a),Is(t,e,a))}};function w0(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!Hs(a,o)||!Hs(n,r):!0}function v0(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&ig.enqueueReplaceState(t,t.state,null)}function Zr(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ke({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Bw(e){mc(e)}function Hw(e){console.error(e)}function Fw(e){mc(e)}function Sc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function C0(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function sg(e,t,a){return a=jn(a),a.tag=3,a.payload={element:null},a.callback=function(){Sc(e,t)},a}function Uw(e){return e=jn(e),e.tag=3,e}function qw(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){C0(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){C0(t,a,o),typeof n!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function i4(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Ci(t,a,n,!0),a=Na.current,a!==null){switch(a.tag){case 31:case 13:return Za===null?Mc():a.alternate===null&&lt===0&&(lt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===bc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),km(e,o,n)),!1;case 22:return a.flags|=65536,o===bc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),km(e,o,n)),!1}throw Error(G(435,a.tag))}return km(e,o,n),Mc(),!1}if(Le)return t=Na.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Wm&&(e=Error(G(422),{cause:o}),Us(Xa(e,a)))):(o!==Wm&&(t=Error(G(423),{cause:o}),Us(Xa(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Xa(o,a),n=sg(e.stateNode,o,n),pm(e,n),lt!==4&&(lt=2)),!1;var r=Error(G(520),{cause:o});if(r=Xa(r,a),Rs===null?Rs=[r]:Rs.push(r),lt!==4&&(lt=2),t===null)return!0;o=Xa(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=sg(a.stateNode,o,e),pm(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Uw(n),qw(n,e,a,o),pm(a,n),!1}a=a.return}while(a!==null);return!1}var sh=Error(G(461)),mt=!1;function Tt(e,t,a,o){t.child=e===null?aw(t,null,a,o):Xr(t,e.child,a,o)}function S0(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return Gr(t),o=Kg(e,t,a,l,r,n),i=$g(),e!==null&&!mt?(Qg(e,t,n),pn(e,t,n)):(Le&&i&&qg(t),t.flags|=1,Tt(e,t,o,n),t.child)}function L0(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Ug(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Vw(e,t,r,o,n)):(e=Qd(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!uh(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(l,o)&&e.ref===t.ref)return pn(e,t,n)}return t.flags|=1,e=ln(r,o),e.ref=t.ref,e.return=t,t.child=e}function Vw(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(Hs(r,o)&&e.ref===t.ref)if(mt=!1,t.pendingProps=o=r,uh(e,n))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,pn(e,t,n)}return ug(e,t,a,o,n)}function Gw(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return _0(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jd(t,r!==null?r.cachePool:null),r!==null?p0(t,r):ag(),rw(t);else return o=t.lanes=536870912,_0(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(Jd(t,r.cachePool),p0(t,r),Hn(t),t.memoizedState=null):(e!==null&&Jd(t,null),ag(),Hn(t));return Tt(e,t,n,a),t.child}function vs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _0(e,t,a,o,n){var r=Xg();return r=r===null?null:{parent:pt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Jd(t,null),ag(),rw(t),e!==null&&Ci(e,t,o,!0),t.childLanes=n,null}function ac(e,t){return t=Lc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function k0(e,t,a){return Xr(t,e.child,null,a),e=ac(t,t.pendingProps),e.flags|=2,va(t),t.memoizedState=null,e}function s4(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Le){if(o.mode==="hidden")return e=ac(t,o),t.lanes=536870912,vs(null,e);if(og(t),(e=We)?(e=Pv(e,Ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tr!==null?{id:Mo,overflow:No}:null,retryLane:536870912,hydrationErrors:null},a=Wy(e),a.return=t,t.child=a,Rt=t,We=null)):e=null,e===null)throw ar(t);return t.lanes=536870912,null}return ac(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(og(t),n)if(t.flags&256)t.flags&=-257,t=k0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(G(558));else if(mt||Ci(e,t,a,!1),n=(a&e.childLanes)!==0,mt||n){if(o=Fe,o!==null&&(l=vy(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,$r(e,l),ua(o,e,l),sh;Mc(),t=k0(e,t,a)}else e=r.treeContext,We=ja(l.nextSibling),Rt=t,Le=!0,Zn=null,Ya=!1,e!==null&&$y(t,e),t=ac(t,o),t.flags|=4096;return t}return e=ln(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oc(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(G(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ug(e,t,a,o,n){return Gr(t),a=Kg(e,t,a,o,void 0,n),o=$g(),e!==null&&!mt?(Qg(e,t,n),pn(e,t,n)):(Le&&o&&qg(t),t.flags|=1,Tt(e,t,a,n),t.child)}function I0(e,t,a,o,n,r){return Gr(t),t.updateQueue=null,a=iw(t,o,a,n),lw(e),o=$g(),e!==null&&!mt?(Qg(e,t,r),pn(e,t,r)):(Le&&o&&qg(t),t.flags|=1,Tt(e,t,a,r),t.child)}function M0(e,t,a,o,n){if(Gr(t),t.stateNode===null){var r=Ql,l=a.contextType;typeof l=="object"&&l!==null&&(r=Dt(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ig,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},Zg(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?Dt(l):Ql,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(gm(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&ig.enqueueReplaceState(r,r.state,null),Ns(t,o,r,n),Ms(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=Zr(a,i);r.props=s;var d=r.context,u=a.contextType;l=Ql,typeof u=="object"&&u!==null&&(l=Dt(u));var f=a.getDerivedStateFromProps;u=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||d!==l)&&v0(t,r,o,l),Pn=!1;var c=t.memoizedState;r.state=c,Ns(t,o,r,n),Ms(),d=t.memoizedState,i||c!==d||Pn?(typeof f=="function"&&(gm(t,a,f,o),d=t.memoizedState),(s=Pn||w0(t,a,s,o,c,d,l))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),r.props=o,r.state=d,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,eg(e,t),l=t.memoizedProps,u=Zr(a,l),r.props=u,f=t.pendingProps,c=r.context,d=a.contextType,s=Ql,typeof d=="object"&&d!==null&&(s=Dt(d)),i=a.getDerivedStateFromProps,(d=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==f||c!==s)&&v0(t,r,o,s),Pn=!1,c=t.memoizedState,r.state=c,Ns(t,o,r,n),Ms();var p=t.memoizedState;l!==f||c!==p||Pn||e!==null&&e.dependencies!==null&&xc(e.dependencies)?(typeof i=="function"&&(gm(t,a,i,o),p=t.memoizedState),(u=Pn||w0(t,a,u,o,c,p,s)||e!==null&&e.dependencies!==null&&xc(e.dependencies))?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=u):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,oc(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=Xr(t,e.child,null,n),t.child=Xr(t,null,a,n)):Tt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=pn(e,t,n),e}function N0(e,t,a,o){return Vr(),t.flags|=256,Tt(e,t,a,o),t.child}var hm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xm(e){return{baseLanes:e,cachePool:Jy()}}function bm(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Sa),e}function Xw(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Le){if(n?Bn(t):Hn(t),(e=We)?(e=Pv(e,Ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tr!==null?{id:Mo,overflow:No}:null,retryLane:536870912,hydrationErrors:null},a=Wy(e),a.return=t,t.child=a,Rt=t,We=null)):e=null,e===null)throw ar(t);return Sg(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(Hn(t),n=t.mode,i=Lc({mode:"hidden",children:i},n),o=Hr(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=xm(a),o.childLanes=bm(e,l,a),t.memoizedState=hm,vs(null,o)):(Bn(t),dg(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(Bn(t),t.flags&=-257,t=ym(e,t,a)):t.memoizedState!==null?(Hn(t),t.child=e.child,t.flags|=128,t=null):(Hn(t),i=o.fallback,n=t.mode,o=Lc({mode:"visible",children:o.children},n),i=Hr(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,Xr(t,e.child,null,a),o=t.child,o.memoizedState=xm(a),o.childLanes=bm(e,l,a),t.memoizedState=hm,t=vs(null,o));else if(Bn(t),Sg(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var d=l.dgst;l=d,o=Error(G(419)),o.stack="",o.digest=l,Us({value:o,source:null,stack:null}),t=ym(e,t,a)}else if(mt||Ci(e,t,a,!1),l=(a&e.childLanes)!==0,mt||l){if(l=Fe,l!==null&&(o=vy(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,$r(e,o),ua(l,e,o),sh;Cg(i)||Mc(),t=ym(e,t,a)}else Cg(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,We=ja(i.nextSibling),Rt=t,Le=!0,Zn=null,Ya=!1,e!==null&&$y(t,e),t=dg(t,o.children),t.flags|=4096);return t}return n?(Hn(t),i=o.fallback,n=t.mode,s=e.child,d=s.sibling,o=ln(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,d!==null?i=ln(d,i):(i=Hr(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,vs(null,o),o=t.child,i=e.child.memoizedState,i===null?i=xm(a):(n=i.cachePool,n!==null?(s=pt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Jy(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=bm(e,l,a),t.memoizedState=hm,vs(e.child,o)):(Bn(t),a=e.child,e=a.sibling,a=ln(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function dg(e,t){return t=Lc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Lc(e,t){return e=Ca(22,e,null,t),e.lanes=0,e}function ym(e,t,a){return Xr(t,e.child,null,a),e=dg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E0(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),$m(e.return,t,a)}function wm(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Yw(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=ut.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,Ve(ut,l),Tt(e,t,o,a),o=Le?Fs:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&E0(e,a,t);else if(e.tag===19)E0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&wc(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),wm(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&wc(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}wm(t,!0,a,null,r,o);break;case"together":wm(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function pn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ci(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,a=ln(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ln(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function uh(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xc(e)))}function u4(e,t,a){switch(t.tag){case 3:dc(t,t.stateNode.containerInfo),On(t,pt,e.memoizedState.cache),Vr();break;case 27:case 5:Bm(t);break;case 4:dc(t,t.stateNode.containerInfo);break;case 10:On(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,og(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Bn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Xw(e,t,a):(Bn(t),e=pn(e,t,a),e!==null?e.sibling:null);Bn(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Ci(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Yw(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Ve(ut,ut.current),o)break;return null;case 22:return t.lanes=0,Gw(e,t,a,t.pendingProps);case 24:On(t,pt,e.memoizedState.cache)}return pn(e,t,a)}function Zw(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!uh(e,a)&&(t.flags&128)===0)return mt=!1,u4(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,Le&&(t.flags&1048576)!==0&&Ky(t,Fs,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Pr(t.elementType),t.type=e,typeof e=="function")Ug(e)?(o=Zr(e,o),t.tag=1,t=M0(null,t,e,o,a)):(t.tag=0,t=ug(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Ig){t.tag=11,t=S0(null,t,e,o,a);break e}else if(n===Mg){t.tag=14,t=L0(null,t,e,o,a);break e}}throw t=Pm(e)||e,Error(G(306,t,""))}}return t;case 0:return ug(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=Zr(o,t.pendingProps),M0(e,t,o,n,a);case 3:e:{if(dc(t,t.stateNode.containerInfo),e===null)throw Error(G(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,eg(e,t),Ns(t,o,null,a);var l=t.memoizedState;if(o=l.cache,On(t,pt,o),o!==r.cache&&Qm(t,[pt],a,!0),Ms(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=N0(e,t,o,a);break e}else if(o!==n){n=Xa(Error(G(424)),t),Us(n),t=N0(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ja(e.firstChild),Rt=t,Le=!0,Zn=null,Ya=!0,a=aw(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vr(),o===n){t=pn(e,t,a);break e}Tt(e,t,o,a)}t=t.child}return t;case 26:return oc(e,t),e===null?(a=Q0(t.type,null,t.pendingProps,null))?t.memoizedState=a:Le||(a=t.type,e=t.pendingProps,o=Ac(Yn.current).createElement(a),o[At]=t,o[da]=e,zt(o,a,e),St(o),t.stateNode=o):t.memoizedState=Q0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bm(t),e===null&&Le&&(o=t.stateNode=Ov(t.type,t.pendingProps,Yn.current),Rt=t,Ya=!0,n=We,lr(t.type)?(Lg=n,We=ja(o.firstChild)):We=n),Tt(e,t,t.pendingProps.children,a),oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Le&&((n=o=We)&&(o=O4(o,t.type,t.pendingProps,Ya),o!==null?(t.stateNode=o,Rt=t,We=ja(o.firstChild),Ya=!1,n=!0):n=!1),n||ar(t)),Bm(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,wg(n,r)?o=null:l!==null&&wg(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=Kg(e,t,e4,null,null,a),Zs._currentValue=n),oc(e,t),Tt(e,t,o,a),t.child;case 6:return e===null&&Le&&((e=a=We)&&(a=B4(a,t.pendingProps,Ya),a!==null?(t.stateNode=a,Rt=t,We=null,e=!0):e=!1),e||ar(t)),null;case 13:return Xw(e,t,a);case 4:return dc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Xr(t,null,o,a):Tt(e,t,o,a),t.child;case 11:return S0(e,t,t.type,t.pendingProps,a);case 7:return Tt(e,t,t.pendingProps,a),t.child;case 8:return Tt(e,t,t.pendingProps.children,a),t.child;case 12:return Tt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,On(t,t.type,o.value),Tt(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,Gr(t),n=Dt(n),o=o(n),t.flags|=1,Tt(e,t,o,a),t.child;case 14:return L0(e,t,t.type,t.pendingProps,a);case 15:return Vw(e,t,t.type,t.pendingProps,a);case 19:return Yw(e,t,a);case 31:return s4(e,t,a);case 22:return Gw(e,t,a,t.pendingProps);case 24:return Gr(t),o=Dt(pt),e===null?(n=Xg(),n===null&&(n=Fe,r=Gg(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},Zg(t),On(t,pt,n)):((e.lanes&a)!==0&&(eg(e,t),Ns(t,null,null,a),Ms()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),On(t,pt,o)):(o=r.cache,On(t,pt,o),o!==n.cache&&Qm(t,[pt],a,!0))),Tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(G(156,t.tag))}function $o(e){e.flags|=4}function vm(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(xv())e.flags|=8192;else throw Ur=bc,Yg}else e.flags&=-16777217}function T0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fv(t))if(xv())e.flags|=8192;else throw Ur=bc,Yg}function Ud(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?by():536870912,e.lanes|=t,gi|=t)}function ms(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function d4(e,t,a){var o=t.pendingProps;switch(Vg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),sn(pt),ui(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?$o(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fm())),je(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?($o(t),r!==null?(je(t),T0(t,r)):(je(t),vm(t,n,null,o,a))):r?r!==e.memoizedState?($o(t),je(t),T0(t,r)):(je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&$o(t),je(t),vm(t,n,e,o,a)),null;case 27:if(cc(t),a=Yn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&$o(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return je(t),null}e=To.current,Fl(t)?l0(t,e):(e=Ov(n,o,a),t.stateNode=e,$o(t))}return je(t),null;case 5:if(cc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&$o(t);else{if(!o){if(t.stateNode===null)throw Error(G(166));return je(t),null}if(r=To.current,Fl(t))l0(t,r);else{var l=Ac(Yn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[At]=t,r[da]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(zt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&$o(t)}}return je(t),vm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&$o(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(G(166));if(e=Yn.current,Fl(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Rt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[At]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rv(e.nodeValue,a)),e||ar(t,!0)}else e=Ac(e).createTextNode(o),e[At]=t,t.stateNode=e}return je(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Fl(t),a!==null){if(e===null){if(!o)throw Error(G(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(557));e[At]=t}else Vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),e=!1}else a=fm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(va(t),t):(va(t),null);if((t.flags&128)!==0)throw Error(G(558))}return je(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Fl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(G(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(G(317));n[At]=t}else Vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=fm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(va(t),t):(va(t),null)}return va(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ud(t,t.updateQueue),je(t),null);case 4:return ui(),e===null&&hh(t.stateNode.containerInfo),je(t),null;case 10:return sn(t.type),je(t),null;case 19:if(Lt(ut),o=t.memoizedState,o===null)return je(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)ms(o,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=wc(e),r!==null){for(t.flags|=128,ms(o,!1),e=r.updateQueue,t.updateQueue=e,Ud(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)jy(a,e),a=a.sibling;return Ve(ut,ut.current&1|2),Le&&tn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&La()>kc&&(t.flags|=128,n=!0,ms(o,!1),t.lanes=4194304)}else{if(!n)if(e=wc(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ud(t,e),ms(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Le)return je(t),null}else 2*La()-o.renderingStartTime>kc&&a!==536870912&&(t.flags|=128,n=!0,ms(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=La(),e.sibling=null,a=ut.current,Ve(ut,n?a&1|2:a&1),Le&&tn(t,o.treeForkCount),e):(je(t),null);case 22:case 23:return va(t),jg(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ud(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&Lt(Fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sn(pt),je(t),null;case 25:return null;case 30:return null}throw Error(G(156,t.tag))}function c4(e,t){switch(Vg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(pt),ui(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return cc(t),null;case 31:if(t.memoizedState!==null){if(va(t),t.alternate===null)throw Error(G(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(va(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Lt(ut),null;case 4:return ui(),null;case 10:return sn(t.type),null;case 22:case 23:return va(t),jg(),e!==null&&Lt(Fr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sn(pt),null;case 25:return null;default:return null}}function jw(e,t){switch(Vg(t),t.tag){case 3:sn(pt),ui();break;case 26:case 27:case 5:cc(t);break;case 4:ui();break;case 31:t.memoizedState!==null&&va(t);break;case 13:va(t);break;case 19:Lt(ut);break;case 10:sn(t.type);break;case 22:case 23:va(t),jg(),e!==null&&Lt(Fr);break;case 24:sn(pt)}}function nu(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){De(t,t.return,i)}}function or(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,d=i;try{d()}catch(u){De(n,s,u)}}}o=o.next}while(o!==r)}}catch(u){De(t,t.return,u)}}function Ww(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{nw(t,a)}catch(o){De(e,e.return,o)}}}function Kw(e,t,a){a.props=Zr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){De(e,t,o)}}function Ts(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){De(e,t,n)}}function Eo(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){De(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){De(e,t,n)}else a.current=null}function $w(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){De(e,e.return,n)}}function Cm(e,t,a){try{var o=e.stateNode;T4(o,e.type,a,t),o[da]=t}catch(n){De(e,e.return,n)}}function Qw(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&lr(e.type)||e.tag===4}function Sm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cg(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=nn));else if(o!==4&&(o===27&&lr(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(cg(e,t,a),e=e.sibling;e!==null;)cg(e,t,a),e=e.sibling}function _c(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&lr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_c(e,t,a),e=e.sibling;e!==null;)_c(e,t,a),e=e.sibling}function Jw(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zt(t,o,a),t[At]=e,t[da]=a}catch(r){De(e,e.return,r)}}var an=!1,ft=!1,Lm=!1,A0=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function f4(e,t){if(e=e.containerInfo,bg=Pc,e=Fy(e),Bg(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,d=0,u=0,f=e,c=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(i=l+n),f!==r||o!==0&&f.nodeType!==3||(s=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===e)break t;if(c===a&&++d===n&&(i=l),c===r&&++u===o&&(s=l),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(yg={focusedElem:e,selectionRange:a},Pc=!1,Ct=t;Ct!==null;)if(t=Ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ct=e;else for(;Ct!==null;){switch(t=Ct,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=Zr(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(y){De(a,a.return,y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)vg(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vg(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(G(163))}if(e=t.sibling,e!==null){e.return=t.return,Ct=e;break}Ct=t.return}}function ev(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Jo(e,a),o&4&&nu(5,a);break;case 1:if(Jo(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){De(a,a.return,l)}else{var n=Zr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){De(a,a.return,l)}}o&64&&Ww(a),o&512&&Ts(a,a.return);break;case 3:if(Jo(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{nw(e,t)}catch(l){De(a,a.return,l)}}break;case 27:t===null&&o&4&&Jw(a);case 26:case 5:Jo(e,a),t===null&&o&4&&$w(a),o&512&&Ts(a,a.return);break;case 12:Jo(e,a);break;case 31:Jo(e,a),o&4&&ov(e,a);break;case 13:Jo(e,a),o&4&&nv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=v4.bind(null,a),H4(e,a))));break;case 22:if(o=a.memoizedState!==null||an,!o){t=t!==null&&t.memoizedState!==null||ft,n=an;var r=ft;an=o,(ft=t)&&!r?en(e,a,(a.subtreeFlags&8772)!==0):Jo(e,a),an=n,ft=r}break;case 30:break;default:Jo(e,a)}}function tv(e){var t=e.alternate;t!==null&&(e.alternate=null,tv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ag(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,ia=!1;function Qo(e,t,a){for(a=a.child;a!==null;)av(e,t,a),a=a.sibling}function av(e,t,a){if(_a&&typeof _a.onCommitFiberUnmount=="function")try{_a.onCommitFiberUnmount($s,a)}catch{}switch(a.tag){case 26:ft||Eo(a,t),Qo(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ft||Eo(a,t);var o=tt,n=ia;lr(a.type)&&(tt=a.stateNode,ia=!1),Qo(e,t,a),zs(a.stateNode),tt=o,ia=n;break;case 5:ft||Eo(a,t);case 6:if(o=tt,n=ia,tt=null,Qo(e,t,a),tt=o,ia=n,tt!==null)if(ia)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(a.stateNode)}catch(r){De(a,t,r)}else try{tt.removeChild(a.stateNode)}catch(r){De(a,t,r)}break;case 18:tt!==null&&(ia?(e=tt,Z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yi(e)):Z0(tt,a.stateNode));break;case 4:o=tt,n=ia,tt=a.stateNode.containerInfo,ia=!0,Qo(e,t,a),tt=o,ia=n;break;case 0:case 11:case 14:case 15:or(2,a,t),ft||or(4,a,t),Qo(e,t,a);break;case 1:ft||(Eo(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Kw(a,t,o)),Qo(e,t,a);break;case 21:Qo(e,t,a);break;case 22:ft=(o=ft)||a.memoizedState!==null,Qo(e,t,a),ft=o;break;default:Qo(e,t,a)}}function ov(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yi(e)}catch(a){De(t,t.return,a)}}}function nv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yi(e)}catch(a){De(t,t.return,a)}}function p4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new A0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new A0),t;default:throw Error(G(435,e.tag))}}function qd(e,t){var a=p4(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=C4.bind(null,e,o);o.then(n,n)}})}function ra(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(lr(i.type)){tt=i.stateNode,ia=!1;break e}break;case 5:tt=i.stateNode,ia=!1;break e;case 3:case 4:tt=i.stateNode.containerInfo,ia=!0;break e}i=i.return}if(tt===null)throw Error(G(160));av(r,l,n),tt=null,ia=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rv(t,e),t=t.sibling}var uo=null;function rv(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ra(t,e),la(e),o&4&&(or(3,e,e.return),nu(3,e),or(5,e,e.return));break;case 1:ra(t,e),la(e),o&512&&(ft||a===null||Eo(a,a.return)),o&64&&an&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=uo;if(ra(t,e),la(e),o&512&&(ft||a===null||Eo(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[eu]||r[At]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),zt(r,o,a),r[At]=e,St(r),o=r;break e;case"link":var l=ey("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),zt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=ey("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),zt(r,o,a),n.head.appendChild(r);break;default:throw Error(G(468,o))}r[At]=e,St(r),o=r}e.stateNode=o}else ty(n,e.type,e.stateNode);else e.stateNode=J0(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?ty(n,e.type,e.stateNode):J0(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cm(e,e.memoizedProps,a.memoizedProps)}break;case 27:ra(t,e),la(e),o&512&&(ft||a===null||Eo(a,a.return)),a!==null&&o&4&&Cm(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ra(t,e),la(e),o&512&&(ft||a===null||Eo(a,a.return)),e.flags&32){n=e.stateNode;try{ci(n,"")}catch(g){De(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,Cm(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Lm=!0);break;case 6:if(ra(t,e),la(e),o&4){if(e.stateNode===null)throw Error(G(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){De(e,e.return,g)}}break;case 3:if(lc=null,n=uo,uo=Rc(t.containerInfo),ra(t,e),uo=n,la(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(g){De(e,e.return,g)}Lm&&(Lm=!1,lv(e));break;case 4:o=uo,uo=Rc(e.stateNode.containerInfo),ra(t,e),la(e),uo=o;break;case 12:ra(t,e),la(e);break;case 31:ra(t,e),la(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qd(e,o)));break;case 13:ra(t,e),la(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=La()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qd(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,d=an,u=ft;if(an=d||n,ft=u||s,ra(t,e),ft=u,an=d,la(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||an||ft||Or(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var f=s.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null;i.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(g){De(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){De(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?j0(p,!0):j0(s.stateNode,!1)}catch(g){De(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,qd(e,a))));break;case 19:ra(t,e),la(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qd(e,o)));break;case 30:break;case 21:break;default:ra(t,e),la(e)}}function la(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Qw(o)){a=o;break}o=o.return}if(a==null)throw Error(G(160));switch(a.tag){case 27:var n=a.stateNode,r=Sm(e);_c(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(ci(l,""),a.flags&=-33);var i=Sm(e);_c(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,d=Sm(e);cg(e,d,s);break;default:throw Error(G(161))}}catch(u){De(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ev(e,t.alternate,t),t=t.sibling}function Or(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:or(4,t,t.return),Or(t);break;case 1:Eo(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Kw(t,t.return,a),Or(t);break;case 27:zs(t.stateNode);case 26:case 5:Eo(t,t.return),Or(t);break;case 22:t.memoizedState===null&&Or(t);break;case 30:Or(t);break;default:Or(t)}e=e.sibling}}function en(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:en(n,r,a),nu(4,r);break;case 1:if(en(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){De(o,o.return,d)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)ow(s[n],i)}catch(d){De(o,o.return,d)}}a&&l&64&&Ww(r),Ts(r,r.return);break;case 27:Jw(r);case 26:case 5:en(n,r,a),a&&o===null&&l&4&&$w(r),Ts(r,r.return);break;case 12:en(n,r,a);break;case 31:en(n,r,a),a&&l&4&&ov(n,r);break;case 13:en(n,r,a),a&&l&4&&nv(n,r);break;case 22:r.memoizedState===null&&en(n,r,a),Ts(r,r.return);break;case 30:break;default:en(n,r,a)}t=t.sibling}}function dh(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&au(a))}function ch(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&au(e))}function so(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iv(e,t,a,o),t=t.sibling}function iv(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:so(e,t,a,o),n&2048&&nu(9,t);break;case 1:so(e,t,a,o);break;case 3:so(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&au(e)));break;case 12:if(n&2048){so(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){De(t,t.return,s)}}else so(e,t,a,o);break;case 31:so(e,t,a,o);break;case 13:so(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?so(e,t,a,o):As(e,t):r._visibility&2?so(e,t,a,o):(r._visibility|=2,ql(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&dh(l,t);break;case 24:so(e,t,a,o),n&2048&&ch(t.alternate,t);break;default:so(e,t,a,o)}}function ql(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,d=l.flags;switch(l.tag){case 0:case 11:case 15:ql(r,l,i,s,n),nu(8,l);break;case 23:break;case 22:var u=l.stateNode;l.memoizedState!==null?u._visibility&2?ql(r,l,i,s,n):As(r,l):(u._visibility|=2,ql(r,l,i,s,n)),n&&d&2048&&dh(l.alternate,l);break;case 24:ql(r,l,i,s,n),n&&d&2048&&ch(l.alternate,l);break;default:ql(r,l,i,s,n)}t=t.sibling}}function As(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:As(a,o),n&2048&&dh(o.alternate,o);break;case 24:As(a,o),n&2048&&ch(o.alternate,o);break;default:As(a,o)}t=t.sibling}}var Cs=8192;function Ul(e,t,a){if(e.subtreeFlags&Cs)for(e=e.child;e!==null;)sv(e,t,a),e=e.sibling}function sv(e,t,a){switch(e.tag){case 26:Ul(e,t,a),e.flags&Cs&&e.memoizedState!==null&&$4(a,uo,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,a);break;case 3:case 4:var o=uo;uo=Rc(e.stateNode.containerInfo),Ul(e,t,a),uo=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Cs,Cs=16777216,Ul(e,t,a),Cs=o):Ul(e,t,a));break;default:Ul(e,t,a)}}function uv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ct=o,cv(o,e)}uv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dv(e),e=e.sibling}function dv(e){switch(e.tag){case 0:case 11:case 15:gs(e),e.flags&2048&&or(9,e,e.return);break;case 3:gs(e);break;case 12:gs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,nc(e)):gs(e);break;default:gs(e)}}function nc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ct=o,cv(o,e)}uv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:or(8,t,t.return),nc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,nc(t));break;default:nc(t)}e=e.sibling}}function cv(e,t){for(;Ct!==null;){var a=Ct;switch(a.tag){case 0:case 11:case 15:or(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:au(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ct=o;else e:for(a=e;Ct!==null;){o=Ct;var n=o.sibling,r=o.return;if(tv(o),o===a){Ct=null;break e}if(n!==null){n.return=r,Ct=n;break e}Ct=r}}}var m4={getCacheForType:function(e){var t=Dt(pt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Dt(pt).controller.signal}},g4=typeof WeakMap=="function"?WeakMap:Map,Me=0,Fe=null,ve=null,Se=0,Re=0,wa=null,Vn=!1,Li=!1,fh=!1,mn=0,lt=0,nr=0,qr=0,ph=0,Sa=0,gi=0,Rs=null,sa=null,fg=!1,Wc=0,fv=0,kc=1/0,Ic=null,Kn=null,yt=0,$n=null,hi=null,un=0,pg=0,mg=null,pv=null,Ds=0,gg=null;function Ia(){return(Me&2)!==0&&Se!==0?Se&-Se:le.T!==null?gh():Cy()}function mv(){if(Sa===0)if((Se&536870912)===0||Le){var e=Ad;Ad<<=1,(Ad&3932160)===0&&(Ad=262144),Sa=e}else Sa=536870912;return e=Na.current,e!==null&&(e.flags|=32),Sa}function ua(e,t,a){(e===Fe&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(xi(e,0),Gn(e,Se,Sa,!1)),Js(e,a),((Me&2)===0||e!==Fe)&&(e===Fe&&((Me&2)===0&&(qr|=a),lt===4&&Gn(e,Se,Sa,!1)),Ro(e))}function gv(e,t,a){if((Me&6)!==0)throw Error(G(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Qs(e,t),n=o?b4(e,t):_m(e,t,!0),r=o;do{if(n===0){Li&&!o&&Gn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!h4(a)){n=_m(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Rs;var s=i.current.memoizedState.isDehydrated;if(s&&(xi(i,l).flags|=256),l=_m(i,l,!1),l!==2){if(fh&&!s){i.errorRecoveryDisabledLanes|=r,qr|=r,n=4;break e}r=sa,sa=n,r!==null&&(sa===null?sa=r:sa.push.apply(sa,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){xi(e,0),Gn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(G(345));case 4:if((t&4194048)!==t)break;case 6:Gn(o,t,Sa,!Vn);break e;case 2:sa=null;break;case 3:case 5:break;default:throw Error(G(329))}if((t&62914560)===t&&(n=Wc+300-La(),10<n)){if(Gn(o,t,Sa,!Vn),Bc(o,0,!0)!==0)break e;un=t,o.timeoutHandle=zv(R0.bind(null,o,a,sa,Ic,fg,t,Sa,qr,gi,Vn,r,"Throttled",-0,0),n);break e}R0(o,a,sa,Ic,fg,t,Sa,qr,gi,Vn,r,null,-0,0)}}break}while(!0);Ro(e)}function R0(e,t,a,o,n,r,l,i,s,d,u,f,c,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},sv(t,r,f);var g=(r&62914560)===r?Wc-La():(r&4194048)===r?fv-La():0;if(g=Q4(f,g),g!==null){un=r,e.cancelPendingCommit=g(z0.bind(null,e,t,r,a,o,n,l,i,s,u,f,null,c,p)),Gn(e,r,l,!d);return}}z0(e,t,r,a,o,n,l,i,s)}function h4(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!Ma(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t,a,o){t&=~ph,t&=~qr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-ka(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&yy(e,a,t)}function Kc(){return(Me&6)===0?(ru(0,!1),!1):!0}function mh(){if(ve!==null){if(Re===0)var e=ve.return;else e=ve,rn=Qr=null,Jg(e),li=null,qs=0,e=ve;for(;e!==null;)jw(e.alternate,e),e=e.return;ve=null}}function xi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,D4(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),un=0,mh(),Fe=e,ve=a=ln(e.current,null),Se=t,Re=0,wa=null,Vn=!1,Li=Qs(e,t),fh=!1,gi=Sa=ph=qr=nr=lt=0,sa=Rs=null,fg=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-ka(o),r=1<<n;t|=e[n],o&=~r}return mn=t,qc(),a}function hv(e,t){me=null,le.H=Gs,t===Si||t===Gc?(t=c0(),Re=3):t===Yg?(t=c0(),Re=4):Re=t===sh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wa=t,ve===null&&(lt=1,Sc(e,Xa(t,e.current)))}function xv(){var e=Na.current;return e===null?!0:(Se&4194048)===Se?Za===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Za:!1}function bv(){var e=le.H;return le.H=Gs,e===null?Gs:e}function yv(){var e=le.A;return le.A=m4,e}function Mc(){lt=4,Vn||(Se&4194048)!==Se&&Na.current!==null||(Li=!0),(nr&134217727)===0&&(qr&134217727)===0||Fe===null||Gn(Fe,Se,Sa,!1)}function _m(e,t,a){var o=Me;Me|=2;var n=bv(),r=yv();(Fe!==e||Se!==t)&&(Ic=null,xi(e,t)),t=!1;var l=lt;e:do try{if(Re!==0&&ve!==null){var i=ve,s=wa;switch(Re){case 8:mh(),l=6;break e;case 3:case 2:case 9:case 6:Na.current===null&&(t=!0);var d=Re;if(Re=0,wa=null,ti(e,i,s,d),a&&Li){l=0;break e}break;default:d=Re,Re=0,wa=null,ti(e,i,s,d)}}x4(),l=lt;break}catch(u){hv(e,u)}while(!0);return t&&e.shellSuspendCounter++,rn=Qr=null,Me=o,le.H=n,le.A=r,ve===null&&(Fe=null,Se=0,qc()),l}function x4(){for(;ve!==null;)wv(ve)}function b4(e,t){var a=Me;Me|=2;var o=bv(),n=yv();Fe!==e||Se!==t?(Ic=null,kc=La()+500,xi(e,t)):Li=Qs(e,t);e:do try{if(Re!==0&&ve!==null){t=ve;var r=wa;t:switch(Re){case 1:Re=0,wa=null,ti(e,t,r,1);break;case 2:case 9:if(d0(r)){Re=0,wa=null,D0(t);break}t=function(){Re!==2&&Re!==9||Fe!==e||(Re=7),Ro(e)},r.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:d0(r)?(Re=0,wa=null,D0(t)):(Re=0,wa=null,ti(e,t,r,7));break;case 5:var l=null;switch(ve.tag){case 26:l=ve.memoizedState;case 5:case 27:var i=ve;if(l?Fv(l):i.stateNode.complete){Re=0,wa=null;var s=i.sibling;if(s!==null)ve=s;else{var d=i.return;d!==null?(ve=d,$c(d)):ve=null}break t}}Re=0,wa=null,ti(e,t,r,5);break;case 6:Re=0,wa=null,ti(e,t,r,6);break;case 8:mh(),lt=6;break e;default:throw Error(G(462))}}y4();break}catch(u){hv(e,u)}while(!0);return rn=Qr=null,le.H=o,le.A=n,Me=a,ve!==null?0:(Fe=null,Se=0,qc(),lt)}function y4(){for(;ve!==null&&!q5();)wv(ve)}function wv(e){var t=Zw(e.alternate,e,mn);e.memoizedProps=e.pendingProps,t===null?$c(e):ve=t}function D0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=I0(a,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=I0(a,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:Jg(t);default:jw(a,t),t=ve=jy(t,mn),t=Zw(a,t,mn)}e.memoizedProps=e.pendingProps,t===null?$c(e):ve=t}function ti(e,t,a,o){rn=Qr=null,Jg(t),li=null,qs=0;var n=t.return;try{if(i4(e,n,t,a,Se)){lt=1,Sc(e,Xa(a,e.current)),ve=null;return}}catch(r){if(n!==null)throw ve=n,r;lt=1,Sc(e,Xa(a,e.current)),ve=null;return}t.flags&32768?(Le||o===1?e=!0:Li||(Se&536870912)!==0?e=!1:(Vn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Na.current,o!==null&&o.tag===13&&(o.flags|=16384))),vv(t,e)):$c(t)}function $c(e){var t=e;do{if((t.flags&32768)!==0){vv(t,Vn);return}e=t.return;var a=d4(t.alternate,t,mn);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);lt===0&&(lt=5)}function vv(e,t){do{var a=c4(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);lt=6,ve=null}function z0(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do Qc();while(yt!==0);if((Me&6)!==0)throw Error(G(327));if(t!==null){if(t===e.current)throw Error(G(177));if(r=t.lanes|t.childLanes,r|=Hg,Q5(e,a,r,l,i,s),e===Fe&&(ve=Fe=null,Se=0),hi=t,$n=e,un=a,pg=r,mg=n,pv=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,S4(fc,function(){return kv(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=le.T,le.T=null,n=Ne.p,Ne.p=2,l=Me,Me|=4;try{f4(e,t,a)}finally{Me=l,Ne.p=n,le.T=o}}yt=1,Cv(),Sv(),Lv()}}function Cv(){if(yt===1){yt=0;var e=$n,t=hi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=le.T,le.T=null;var o=Ne.p;Ne.p=2;var n=Me;Me|=4;try{rv(t,e);var r=yg,l=Fy(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&Hy(i.ownerDocument.documentElement,i)){if(s!==null&&Bg(i)){var d=s.start,u=s.end;if(u===void 0&&(u=d),"selectionStart"in i)i.selectionStart=d,i.selectionEnd=Math.min(u,i.value.length);else{var f=i.ownerDocument||document,c=f&&f.defaultView||window;if(c.getSelection){var p=c.getSelection(),g=i.textContent.length,y=Math.min(s.start,g),w=s.end===void 0?y:Math.min(s.end,g);!p.extend&&y>w&&(l=w,w=y,y=l);var h=o0(i,y),x=o0(i,w);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),y>w?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=i;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<f.length;i++){var b=f[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Pc=!!bg,yg=bg=null}finally{Me=n,Ne.p=o,le.T=a}}e.current=t,yt=2}}function Sv(){if(yt===2){yt=0;var e=$n,t=hi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var o=Ne.p;Ne.p=2;var n=Me;Me|=4;try{ev(e,t.alternate,t)}finally{Me=n,Ne.p=o,le.T=a}}yt=3}}function Lv(){if(yt===4||yt===3){yt=0,V5();var e=$n,t=hi,a=un,o=pv;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,hi=$n=null,_v(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Kn=null),Tg(a),t=t.stateNode,_a&&typeof _a.onCommitFiberRoot=="function")try{_a.onCommitFiberRoot($s,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=le.T,n=Ne.p,Ne.p=2,le.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{le.T=t,Ne.p=n}}(un&3)!==0&&Qc(),Ro(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===gg?Ds++:(Ds=0,gg=e):Ds=0,ru(0,!1)}}function _v(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,au(t)))}function Qc(){return Cv(),Sv(),Lv(),kv()}function kv(){if(yt!==5)return!1;var e=$n,t=pg;pg=0;var a=Tg(un),o=le.T,n=Ne.p;try{Ne.p=32>a?32:a,le.T=null,a=mg,mg=null;var r=$n,l=un;if(yt=0,hi=$n=null,un=0,(Me&6)!==0)throw Error(G(331));var i=Me;if(Me|=4,dv(r.current),iv(r,r.current,l,a),Me=i,ru(0,!1),_a&&typeof _a.onPostCommitFiberRoot=="function")try{_a.onPostCommitFiberRoot($s,r)}catch{}return!0}finally{Ne.p=n,le.T=o,_v(e,t)}}function P0(e,t,a){t=Xa(a,t),t=sg(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(Js(e,2),Ro(e))}function De(e,t,a){if(e.tag===3)P0(e,e,a);else for(;t!==null;){if(t.tag===3){P0(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kn===null||!Kn.has(o))){e=Xa(a,e),a=Uw(2),o=Wn(t,a,2),o!==null&&(qw(a,o,t,e),Js(o,2),Ro(o));break}}t=t.return}}function km(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new g4;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(fh=!0,n.add(a),e=w4.bind(null,e,t,a),t.then(e,e))}function w4(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(Se&a)===a&&(lt===4||lt===3&&(Se&62914560)===Se&&300>La()-Wc?(Me&2)===0&&xi(e,0):ph|=a,gi===Se&&(gi=0)),Ro(e)}function Iv(e,t){t===0&&(t=by()),e=$r(e,t),e!==null&&(Js(e,t),Ro(e))}function v4(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Iv(e,a)}function C4(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(G(314))}o!==null&&o.delete(t),Iv(e,a)}function S4(e,t){return Ng(e,t)}var Nc=null,Vl=null,hg=!1,Ec=!1,Im=!1,Xn=0;function Ro(e){e!==Vl&&e.next===null&&(Vl===null?Nc=Vl=e:Vl=Vl.next=e),Ec=!0,hg||(hg=!0,_4())}function ru(e,t){if(!Im&&Ec){Im=!0;do for(var a=!1,o=Nc;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-ka(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,O0(o,r))}else r=Se,r=Bc(o,o===Fe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Qs(o,r)||(a=!0,O0(o,r));o=o.next}while(a);Im=!1}}function L4(){Mv()}function Mv(){Ec=hg=!1;var e=0;Xn!==0&&R4()&&(e=Xn);for(var t=La(),a=null,o=Nc;o!==null;){var n=o.next,r=Nv(o,t);r===0?(o.next=null,a===null?Nc=n:a.next=n,n===null&&(Vl=a)):(a=o,(e!==0||(r&3)!==0)&&(Ec=!0)),o=n}yt!==0&&yt!==5||ru(e,!1),Xn!==0&&(Xn=0)}function Nv(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-ka(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=$5(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=Fe,a=Se,a=Bc(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&am(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&am(o),Tg(a)){case 2:case 8:a=hy;break;case 32:a=fc;break;case 268435456:a=xy;break;default:a=fc}return o=Ev.bind(null,e),a=Ng(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&am(o),e.callbackPriority=2,e.callbackNode=null,2}function Ev(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qc()&&e.callbackNode!==a)return null;var o=Se;return o=Bc(e,e===Fe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(gv(e,o,t),Nv(e,La()),e.callbackNode!=null&&e.callbackNode===a?Ev.bind(null,e):null)}function O0(e,t){if(Qc())return null;gv(e,t,!0)}function _4(){z4(function(){(Me&6)!==0?Ng(gy,L4):Mv()})}function gh(){if(Xn===0){var e=fi;e===0&&(e=Td,Td<<=1,(Td&261888)===0&&(Td=256)),Xn=e}return Xn}function B0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wd(""+e)}function H0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function k4(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=B0((n[da]||null).action),l=o.submitter;l&&(t=(t=l[da]||null)?B0(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new Hc("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xn!==0){var s=l?H0(n,l):new FormData(n);lg(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?H0(n,l):new FormData(n),lg(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Vd=0;Vd<jm.length;Vd++)Gd=jm[Vd],F0=Gd.toLowerCase(),U0=Gd[0].toUpperCase()+Gd.slice(1),co(F0,"on"+U0);var Gd,F0,U0,Vd;co(qy,"onAnimationEnd");co(Vy,"onAnimationIteration");co(Gy,"onAnimationStart");co("dblclick","onDoubleClick");co("focusin","onFocus");co("focusout","onBlur");co(GM,"onTransitionRun");co(XM,"onTransitionStart");co(YM,"onTransitionCancel");co(Xy,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xs));function Tv(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,d=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=d;try{r(n)}catch(u){mc(u)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,d=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=d;try{r(n)}catch(u){mc(u)}n.currentTarget=null,r=s}}}}function we(e,t){var a=t[Fm];a===void 0&&(a=t[Fm]=new Set);var o=e+"__bubble";a.has(o)||(Av(t,e,2,!1),a.add(o))}function Mm(e,t,a){var o=0;t&&(o|=4),Av(a,e,o,t)}var Xd="_reactListening"+Math.random().toString(36).slice(2);function hh(e){if(!e[Xd]){e[Xd]=!0,Sy.forEach(function(a){a!=="selectionchange"&&(I4.has(a)||Mm(a,!1,e),Mm(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xd]||(t[Xd]=!0,Mm("selectionchange",!1,t))}}function Av(e,t,a,o){switch(Xv(t)){case 2:var n=tN;break;case 8:n=aN;break;default:n=wh}a=n.bind(null,t,a,e),n=void 0,!Xm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Nm(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=Yl(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}Ty(function(){var d=r,u=Dg(a),f=[];e:{var c=Yy.get(e);if(c!==void 0){var p=Hc,g=e;switch(e){case"keypress":if($d(a)===0)break e;case"keydown":case"keyup":p=CM;break;case"focusin":g="focus",p=im;break;case"focusout":g="blur",p=im;break;case"beforeblur":case"afterblur":p=im;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_M;break;case qy:case Vy:case Gy:p=pM;break;case Xy:p=IM;break;case"scroll":case"scrollend":p=sM;break;case"wheel":p=NM;break;case"copy":case"cut":case"paste":p=gM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kb;break;case"toggle":case"beforetoggle":p=TM}var y=(t&4)!==0,w=!y&&(e==="scroll"||e==="scrollend"),h=y?c!==null?c+"Capture":null:c;y=[];for(var x=d,m;x!==null;){var b=x;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||h===null||(b=Os(x,h),b!=null&&y.push(Ys(x,b,m))),w)break;x=x.return}0<y.length&&(c=new p(c,g,null,a,u),f.push({event:c,listeners:y}))}}if((t&7)===0){e:{if(c=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",c&&a!==Gm&&(g=a.relatedTarget||a.fromElement)&&(Yl(g)||g[wi]))break e;if((p||c)&&(c=u.window===u?u:(c=u.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=d,g=g?Yl(g):null,g!==null&&(w=Ks(g),y=g.tag,g!==w||y!==5&&y!==27&&y!==6)&&(g=null)):(p=null,g=d),p!==g)){if(y=jb,b="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Kb,b="onPointerLeave",h="onPointerEnter",x="pointer"),w=p==null?c:ws(p),m=g==null?c:ws(g),c=new y(b,x+"leave",p,a,u),c.target=w,c.relatedTarget=m,b=null,Yl(u)===d&&(y=new y(h,x+"enter",g,a,u),y.target=m,y.relatedTarget=w,b=y),w=b,p&&g)t:{for(y=M4,h=p,x=g,m=0,b=h;b;b=y(b))m++;b=0;for(var S=x;S;S=y(S))b++;for(;0<m-b;)h=y(h),m--;for(;0<b-m;)x=y(x),b--;for(;m--;){if(h===x||x!==null&&h===x.alternate){y=h;break t}h=y(h),x=y(x)}y=null}else y=null;p!==null&&q0(f,c,p,y,!1),g!==null&&w!==null&&q0(f,w,g,y,!0)}}e:{if(c=d?ws(d):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var C=e0;else if(Jb(c))if(Oy)C=UM;else{C=HM;var v=BM}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?d&&Rg(d.elementType)&&(C=e0):C=FM;if(C&&(C=C(e,d))){Py(f,C,a,u);break e}v&&v(e,c,d),e==="focusout"&&d&&c.type==="number"&&d.memoizedProps.value!=null&&Vm(c,"number",c.value)}switch(v=d?ws(d):window,e){case"focusin":(Jb(v)||v.contentEditable==="true")&&(Wl=v,Ym=d,_s=null);break;case"focusout":_s=Ym=Wl=null;break;case"mousedown":Zm=!0;break;case"contextmenu":case"mouseup":case"dragend":Zm=!1,n0(f,a,u);break;case"selectionchange":if(VM)break;case"keydown":case"keyup":n0(f,a,u)}var _;if(Og)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else jl?Dy(e,a)&&(k="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(k="onCompositionStart");k&&(Ry&&a.locale!=="ko"&&(jl||k!=="onCompositionStart"?k==="onCompositionEnd"&&jl&&(_=Ay()):(qn=u,zg="value"in qn?qn.value:qn.textContent,jl=!0)),v=Tc(d,k),0<v.length&&(k=new Wb(k,e,null,a,u),f.push({event:k,listeners:v}),_?k.data=_:(_=zy(a),_!==null&&(k.data=_)))),(_=RM?DM(e,a):zM(e,a))&&(k=Tc(d,"onBeforeInput"),0<k.length&&(v=new Wb("onBeforeInput","beforeinput",null,a,u),f.push({event:v,listeners:k}),v.data=_)),k4(f,e,d,a,u)}Tv(f,t)})}function Ys(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tc(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Os(e,a),n!=null&&o.unshift(Ys(e,n,r)),n=Os(e,t),n!=null&&o.push(Ys(e,n,r))),e.tag===3)return o;e=e.return}return[]}function M4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function q0(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,d=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||d===null||(s=d,n?(d=Os(a,r),d!=null&&l.unshift(Ys(a,d,s))):n||(d=Os(a,r),d!=null&&l.push(Ys(a,d,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var N4=/\r\n?/g,E4=/\u0000|\uFFFD/g;function V0(e){return(typeof e=="string"?e:""+e).replace(N4,`
`).replace(E4,"")}function Rv(e,t){return t=V0(t),V0(e)===t}function Pe(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ci(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ci(e,""+o);break;case"className":Dd(e,"class",o);break;case"tabIndex":Dd(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dd(e,a,o);break;case"style":Ey(e,o,r);break;case"data":if(t!=="object"){Dd(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wd(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Pe(e,t,"name",n.name,n,null),Pe(e,t,"formEncType",n.formEncType,n,null),Pe(e,t,"formMethod",n.formMethod,n,null),Pe(e,t,"formTarget",n.formTarget,n,null)):(Pe(e,t,"encType",n.encType,n,null),Pe(e,t,"method",n.method,n,null),Pe(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wd(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=nn);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Wd(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),jd(e,"popover",o);break;case"xlinkActuate":Ko(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ko(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ko(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ko(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ko(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ko(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ko(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ko(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ko(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jd(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lM.get(a)||a,jd(e,a,o))}}function xg(e,t,a,o,n,r){switch(a){case"style":Ey(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(G(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(G(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ci(e,o):(typeof o=="number"||typeof o=="bigint")&&ci(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ly.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[da]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jd(e,a,o)}}}function zt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:Pe(e,t,r,l,a,null)}}n&&Pe(e,t,"srcSet",a.srcSet,a,null),o&&Pe(e,t,"src",a.src,a,null);return;case"input":we("invalid",e);var i=r=l=n=null,s=null,d=null;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];if(u!=null)switch(o){case"name":n=u;break;case"type":l=u;break;case"checked":s=u;break;case"defaultChecked":d=u;break;case"value":r=u;break;case"defaultValue":i=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(G(137,t));break;default:Pe(e,t,o,u,a,null)}}Iy(e,r,i,s,d,l,n,!1);return;case"select":we("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:Pe(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?oi(e,!!o,t,!1):a!=null&&oi(e,!!o,a,!0);return;case"textarea":we("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(G(91));break;default:Pe(e,t,l,i,a,null)}Ny(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Pe(e,t,s,o,a,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Xs.length;o++)we(Xs[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(o=a[d],o!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(G(137,t));default:Pe(e,t,d,o,a,null)}return;default:if(Rg(t)){for(u in a)a.hasOwnProperty(u)&&(o=a[u],o!==void 0&&xg(e,t,u,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Pe(e,t,i,o,a,null))}function T4(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,d=null,u=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Pe(e,t,p,null,o,f)}}for(var c in o){var p=o[c];if(f=a[c],o.hasOwnProperty(c)&&(p!=null||f!=null))switch(c){case"type":r=p;break;case"name":n=p;break;case"checked":d=p;break;case"defaultChecked":u=p;break;case"value":l=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(G(137,t));break;default:p!==f&&Pe(e,t,c,p,o,f)}}qm(e,l,i,s,d,u,r,n);return;case"select":p=l=i=c=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Pe(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":c=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&Pe(e,t,n,r,o,s)}t=i,a=l,o=p,c!=null?oi(e,!!a,c,!1):!!o!=!!a&&(t!=null?oi(e,!!a,t,!0):oi(e,!!a,a?[]:"",!1));return;case"textarea":p=c=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Pe(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":c=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(G(91));break;default:n!==r&&Pe(e,t,l,n,o,r)}My(e,c,p);return;case"option":for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Pe(e,t,g,null,o,c));for(s in o)c=o[s],p=a[s],o.hasOwnProperty(s)&&c!==p&&(c!=null||p!=null)&&(s==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":Pe(e,t,s,c,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in a)c=a[y],a.hasOwnProperty(y)&&c!=null&&!o.hasOwnProperty(y)&&Pe(e,t,y,null,o,c);for(d in o)if(c=o[d],p=a[d],o.hasOwnProperty(d)&&c!==p&&(c!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(G(137,t));break;default:Pe(e,t,d,c,o,p)}return;default:if(Rg(t)){for(var w in a)c=a[w],a.hasOwnProperty(w)&&c!==void 0&&!o.hasOwnProperty(w)&&xg(e,t,w,void 0,o,c);for(u in o)c=o[u],p=a[u],!o.hasOwnProperty(u)||c===p||c===void 0&&p===void 0||xg(e,t,u,c,o,p);return}}for(var h in a)c=a[h],a.hasOwnProperty(h)&&c!=null&&!o.hasOwnProperty(h)&&Pe(e,t,h,null,o,c);for(f in o)c=o[f],p=a[f],!o.hasOwnProperty(f)||c===p||c==null&&p==null||Pe(e,t,f,c,o,p)}function G0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function A4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&G0(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],d=s.startTime;if(d>i)break;var u=s.transferSize,f=s.initiatorType;u&&G0(f)&&(s=s.responseEnd,l+=u*(s<i?1:(i-d)/(s-d)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bg=null,yg=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function X0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Em=null;function R4(){var e=window.event;return e&&e.type==="popstate"?e===Em?!1:(Em=e,!0):(Em=null,!1)}var zv=typeof setTimeout=="function"?setTimeout:void 0,D4=typeof clearTimeout=="function"?clearTimeout:void 0,Y0=typeof Promise=="function"?Promise:void 0,z4=typeof queueMicrotask=="function"?queueMicrotask:typeof Y0<"u"?function(e){return Y0.resolve(null).then(e).catch(P4)}:zv;function P4(e){setTimeout(function(){throw e})}function lr(e){return e==="head"}function Z0(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),yi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zs(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[eu]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&zs(e.ownerDocument.body);a=n}while(a);yi(t)}function j0(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function vg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vg(a),Ag(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function O4(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[eu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ja(e.nextSibling),e===null)break}return null}function B4(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ja(e.nextSibling),e===null))return null;return e}function Pv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ja(e.nextSibling),e===null))return null;return e}function Cg(e){return e.data==="$?"||e.data==="$~"}function Sg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function H4(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ja(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lg=null;function W0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ja(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function K0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ov(e,t,a){switch(t=Ac(a),e){case"html":if(e=t.documentElement,!e)throw Error(G(452));return e;case"head":if(e=t.head,!e)throw Error(G(453));return e;case"body":if(e=t.body,!e)throw Error(G(454));return e;default:throw Error(G(451))}}function zs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ag(e)}var Wa=new Map,$0=new Set;function Rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gn=Ne.d;Ne.d={f:F4,r:U4,D:q4,C:V4,L:G4,m:X4,X:Z4,S:Y4,M:j4};function F4(){var e=gn.f(),t=Kc();return e||t}function U4(e){var t=vi(e);t!==null&&t.tag===5&&t.type==="form"?Ew(t):gn.r(e)}var _i=typeof document>"u"?null:document;function Bv(e,t,a){var o=_i;if(o&&typeof t=="string"&&t){var n=Ga(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$0.has(n)||($0.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),zt(t,"link",e),St(t),o.head.appendChild(t)))}}function q4(e){gn.D(e),Bv("dns-prefetch",e,null)}function V4(e,t){gn.C(e,t),Bv("preconnect",e,t)}function G4(e,t,a){gn.L(e,t,a);var o=_i;if(o&&e&&t){var n='link[rel="preload"][as="'+Ga(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ga(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ga(a.imageSizes)+'"]')):n+='[href="'+Ga(e)+'"]';var r=n;switch(t){case"style":r=bi(e);break;case"script":r=ki(e)}Wa.has(r)||(e=Ke({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Wa.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(lu(r))||t==="script"&&o.querySelector(iu(r))||(t=o.createElement("link"),zt(t,"link",e),St(t),o.head.appendChild(t)))}}function X4(e,t){gn.m(e,t);var a=_i;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Ga(o)+'"][href="'+Ga(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ki(e)}if(!Wa.has(r)&&(e=Ke({rel:"modulepreload",href:e},t),Wa.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(iu(r)))return}o=a.createElement("link"),zt(o,"link",e),St(o),a.head.appendChild(o)}}}function Y4(e,t,a){gn.S(e,t,a);var o=_i;if(o&&e){var n=ai(o).hoistableStyles,r=bi(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(lu(r)))i.loading=5;else{e=Ke({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Wa.get(r))&&xh(e,a);var s=l=o.createElement("link");St(s),zt(s,"link",e),s._p=new Promise(function(d,u){s.onload=d,s.onerror=u}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,rc(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function Z4(e,t){gn.X(e,t);var a=_i;if(a&&e){var o=ai(a).hoistableScripts,n=ki(e),r=o.get(n);r||(r=a.querySelector(iu(n)),r||(e=Ke({src:e,async:!0},t),(t=Wa.get(n))&&bh(e,t),r=a.createElement("script"),St(r),zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function j4(e,t){gn.M(e,t);var a=_i;if(a&&e){var o=ai(a).hoistableScripts,n=ki(e),r=o.get(n);r||(r=a.querySelector(iu(n)),r||(e=Ke({src:e,async:!0,type:"module"},t),(t=Wa.get(n))&&bh(e,t),r=a.createElement("script"),St(r),zt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function Q0(e,t,a,o){var n=(n=Yn.current)?Rc(n):null;if(!n)throw Error(G(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=bi(a.href),a=ai(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=bi(a.href);var r=ai(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(lu(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Wa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wa.set(e,a),r||W4(n,e,a,l.state))),t&&o===null)throw Error(G(528,""));return l}if(t&&o!==null)throw Error(G(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ki(a),a=ai(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(G(444,e))}}function bi(e){return'href="'+Ga(e)+'"'}function lu(e){return'link[rel="stylesheet"]['+e+"]"}function Hv(e){return Ke({},e,{"data-precedence":e.precedence,precedence:null})}function W4(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),zt(t,"link",a),St(t),e.head.appendChild(t))}function ki(e){return'[src="'+Ga(e)+'"]'}function iu(e){return"script[async]"+e}function J0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ga(a.href)+'"]');if(o)return t.instance=o,St(o),o;var n=Ke({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),zt(o,"style",n),rc(o,a.precedence,e),t.instance=o;case"stylesheet":n=bi(a.href);var r=e.querySelector(lu(n));if(r)return t.state.loading|=4,t.instance=r,St(r),r;o=Hv(a),(n=Wa.get(n))&&xh(o,n),r=(e.ownerDocument||e).createElement("link"),St(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),zt(r,"link",o),t.state.loading|=4,rc(r,a.precedence,e),t.instance=r;case"script":return r=ki(a.src),(n=e.querySelector(iu(r)))?(t.instance=n,St(n),n):(o=a,(n=Wa.get(r))&&(o=Ke({},a),bh(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),St(n),zt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(G(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,rc(o,a.precedence,e));return t.instance}function rc(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function xh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lc=null;function ey(e,t,a){if(lc===null){var o=new Map,n=lc=new Map;n.set(a,o)}else n=lc,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[eu]||r[At]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function ty(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function K4(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $4(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=bi(o.href),r=t.querySelector(lu(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Dc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,St(r);return}r=t.ownerDocument||t,o=Hv(o),(n=Wa.get(n))&&xh(o,n),r=r.createElement("link"),St(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),zt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Dc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Tm=0;function Q4(e,t){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Tm===0&&(Tm=62500*A4());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Tm?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zc=null;function ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zc=new Map,t.forEach(J4,e),zc=null,Dc.call(e))}function J4(e,t){if(!(t.state.loading&4)){var a=zc.get(e);if(a)var o=a.get(null);else{a=new Map,zc.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=Dc.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Zs={$$typeof:on,Provider:null,Consumer:null,_currentValue:Br,_currentValue2:Br,_threadCount:0};function eN(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=om(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=om(0),this.hiddenUpdates=om(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Uv(e,t,a,o,n,r,l,i,s,d,u,f){return e=new eN(e,t,a,l,s,d,u,f,i),t=1,r===!0&&(t|=24),r=Ca(3,null,null,t),e.current=r,r.stateNode=e,t=Gg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},Zg(r),e}function qv(e){return e?(e=Ql,e):Ql}function Vv(e,t,a,o,n,r){n=qv(n),o.context===null?o.context=n:o.pendingContext=n,o=jn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Wn(e,o,t),a!==null&&(ua(a,e,t),Is(a,e,t))}function ay(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function yh(e,t){ay(e,t),(e=e.alternate)&&ay(e,t)}function Gv(e){if(e.tag===13||e.tag===31){var t=$r(e,67108864);t!==null&&ua(t,e,67108864),yh(e,67108864)}}function oy(e){if(e.tag===13||e.tag===31){var t=Ia();t=Eg(t);var a=$r(e,t);a!==null&&ua(a,e,t),yh(e,t)}}var Pc=!0;function tN(e,t,a,o){var n=le.T;le.T=null;var r=Ne.p;try{Ne.p=2,wh(e,t,a,o)}finally{Ne.p=r,le.T=n}}function aN(e,t,a,o){var n=le.T;le.T=null;var r=Ne.p;try{Ne.p=8,wh(e,t,a,o)}finally{Ne.p=r,le.T=n}}function wh(e,t,a,o){if(Pc){var n=_g(o);if(n===null)Nm(e,t,o,Oc,a),ny(e,o);else if(nN(n,e,t,a,o))o.stopPropagation();else if(ny(e,o),t&4&&-1<oN.indexOf(e)){for(;n!==null;){var r=vi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=zr(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-ka(l);i.entanglements[1]|=s,l&=~s}Ro(r),(Me&6)===0&&(kc=La()+500,ru(0,!1))}}break;case 31:case 13:i=$r(r,2),i!==null&&ua(i,r,2),Kc(),yh(r,2)}if(r=_g(o),r===null&&Nm(e,t,o,Oc,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Nm(e,t,o,null,a)}}function _g(e){return e=Dg(e),vh(e)}var Oc=null;function vh(e){if(Oc=null,e=Yl(e),e!==null){var t=Ks(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=dy(t),e!==null)return e;e=null}else if(a===31){if(e=cy(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Oc=e,null}function Xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G5()){case gy:return 2;case hy:return 8;case fc:case X5:return 32;case xy:return 268435456;default:return 32}default:return 32}}var kg=!1,Qn=null,Jn=null,er=null,js=new Map,Ws=new Map,Fn=[],oN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ny(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(t.pointerId)}}function hs(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=vi(t),t!==null&&Gv(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function nN(e,t,a,o,n){switch(t){case"focusin":return Qn=hs(Qn,e,t,a,o,n),!0;case"dragenter":return Jn=hs(Jn,e,t,a,o,n),!0;case"mouseover":return er=hs(er,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return js.set(r,hs(js.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,Ws.set(r,hs(Ws.get(r)||null,e,t,a,o,n)),!0}return!1}function Yv(e){var t=Yl(e.target);if(t!==null){var a=Ks(t);if(a!==null){if(t=a.tag,t===13){if(t=dy(a),t!==null){e.blockedOn=t,Ub(e.priority,function(){oy(a)});return}}else if(t===31){if(t=cy(a),t!==null){e.blockedOn=t,Ub(e.priority,function(){oy(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_g(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gm=o,a.target.dispatchEvent(o),Gm=null}else return t=vi(a),t!==null&&Gv(t),e.blockedOn=a,!1;t.shift()}return!0}function ry(e,t,a){sc(e)&&a.delete(t)}function rN(){kg=!1,Qn!==null&&sc(Qn)&&(Qn=null),Jn!==null&&sc(Jn)&&(Jn=null),er!==null&&sc(er)&&(er=null),js.forEach(ry),Ws.forEach(ry)}function Yd(e,t){e.blockedOn===t&&(e.blockedOn=null,kg||(kg=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,rN)))}var Zd=null;function ly(e){Zd!==e&&(Zd=e,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,function(){Zd===e&&(Zd=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(vh(o||a)===null)continue;break}var r=vi(a);r!==null&&(e.splice(t,3),t-=3,lg(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function yi(e){function t(s){return Yd(s,e)}Qn!==null&&Yd(Qn,e),Jn!==null&&Yd(Jn,e),er!==null&&Yd(er,e),js.forEach(t),Ws.forEach(t);for(var a=0;a<Fn.length;a++){var o=Fn[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fn.length&&(a=Fn[0],a.blockedOn===null);)Yv(a),a.blockedOn===null&&Fn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[da]||null;if(typeof r=="function")l||ly(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[da]||null)i=l.formAction;else if(vh(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),ly(a)}}}function Zv(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ch(e){this._internalRoot=e}Jc.prototype.render=Ch.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));var a=t.current,o=Ia();Vv(a,o,e,t,null,null)};Jc.prototype.unmount=Ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vv(e.current,2,null,e,null,null),Kc(),t[wi]=null}};function Jc(e){this._internalRoot=e}Jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cy();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Fn.length&&t!==0&&t<Fn[a].priority;a++);Fn.splice(a,0,e),a===0&&Yv(e)}};var iy=sy.version;if(iy!=="19.2.8")throw Error(G(527,iy,"19.2.8"));Ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=O5(t),e=e!==null?fy(e):null,e=e===null?null:e.stateNode,e};var lN={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(xs=__REACT_DEVTOOLS_GLOBAL_HOOK__,!xs.isDisabled&&xs.supportsFiber))try{$s=xs.inject(lN),_a=xs}catch{}var xs;ef.createRoot=function(e,t){if(!uy(e))throw Error(G(299));var a=!1,o="",n=Bw,r=Hw,l=Fw;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Uv(e,1,!1,null,null,a,o,null,n,r,l,Zv),e[wi]=t.current,hh(e),new Ch(t)};ef.hydrateRoot=function(e,t,a){if(!uy(e))throw Error(G(299));var o=!1,n="",r=Bw,l=Hw,i=Fw,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Uv(e,1,!0,t,a??null,o,n,s,r,l,i,Zv),t.context=qv(null),a=t.current,o=Ia(),o=Eg(o),n=jn(o),n.callback=null,Wn(a,n,o),a=o,t.current.lanes=a,Js(t,a),Ro(t),e[wi]=t.current,hh(e),new Jc(t)};ef.version="19.2.8"});var Sh=na((_z,Kv)=>{"use strict";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(e){console.error(e)}}Wv(),Kv.exports=jv()});var Qv=na(tf=>{"use strict";var iN=Symbol.for("react.transitional.element"),sN=Symbol.for("react.fragment");function $v(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:iN,type:e,key:o,ref:t!==void 0?t:null,props:a}}tf.Fragment=sN;tf.jsx=$v;tf.jsxs=$v});var X=na((Iz,Jv)=>{"use strict";Jv.exports=Qv()});var OC=na(PC=>{"use strict";var qi=J();function a3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var o3=typeof Object.is=="function"?Object.is:a3,n3=qi.useState,r3=qi.useEffect,l3=qi.useLayoutEffect,i3=qi.useDebugValue;function s3(e,t){var a=t(),o=n3({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return l3(function(){n.value=a,n.getSnapshot=t,fx(n)&&r({inst:n})},[e,a,t]),r3(function(){return fx(n)&&r({inst:n}),e(function(){fx(n)&&r({inst:n})})},[e]),i3(a),a}function fx(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!o3(e,a)}catch{return!0}}function u3(e,t){return t()}var d3=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u3:s3;PC.useSyncExternalStore=qi.useSyncExternalStore!==void 0?qi.useSyncExternalStore:d3});var HC=na((wH,BC)=>{"use strict";BC.exports=OC()});var UC=na(FC=>{"use strict";var Zf=J(),c3=HC();function f3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p3=typeof Object.is=="function"?Object.is:f3,m3=c3.useSyncExternalStore,g3=Zf.useRef,h3=Zf.useEffect,x3=Zf.useMemo,b3=Zf.useDebugValue;FC.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=g3(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=x3(function(){function s(p){if(!d){if(d=!0,u=p,p=o(p),n!==void 0&&l.hasValue){var g=l.value;if(n(g,p))return f=g}return f=p}if(g=f,p3(u,p))return g;var y=o(p);return n!==void 0&&n(g,y)?(u=p,g):(u=p,f=y)}var d=!1,u,f,c=a===void 0?null:a;return[function(){return s(t())},c===null?void 0:function(){return s(c())}]},[t,a,o,n]);var i=m3(e,r[0],r[1]);return h3(function(){l.hasValue=!0,l.value=i},[i]),b3(i),i}});var VC=na((CH,qC)=>{"use strict";qC.exports=UC()});var hz={};m5(hz,{mountCanvas:()=>pz,unmountCanvas:()=>gz,updateCanvas:()=>mz});var iI=R(Sh(),1);var ls=R(J(),1);var ot=R(J(),1);var P=R(X()),B=R(J());function it(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=it(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var uN={value:()=>{}};function t1(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new af(a)}function af(e){this._=e}function dN(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}af.prototype=t1.prototype={constructor:af,on:function(e,t){var a=this._,o=dN(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=cN(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=e1(a[n],e.name,t);else if(t==null)for(n in a)a[n]=e1(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new af(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function cN(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function e1(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=uN,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Jr=t1;var of="http://www.w3.org/1999/xhtml",Lh={svg:"http://www.w3.org/2000/svg",xhtml:of,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function hn(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),Lh.hasOwnProperty(t)?{space:Lh[t],local:e}:e}function fN(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===of&&t.documentElement.namespaceURI===of?t.createElement(e):t.createElementNS(a,e)}}function pN(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function nf(e){var t=hn(e);return(t.local?pN:fN)(t)}function mN(){}function el(e){return e==null?mN:function(){return this.querySelector(e)}}function a1(e){typeof e!="function"&&(e=el(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,d,u=0;u<l;++u)(s=r[u])&&(d=e.call(s,s.__data__,u,r))&&("__data__"in s&&(d.__data__=s.__data__),i[u]=d);return new st(o,this._parents)}function _h(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function gN(){return[]}function su(e){return e==null?gN:function(){return this.querySelectorAll(e)}}function hN(e){return function(){return _h(e.apply(this,arguments))}}function o1(e){typeof e=="function"?e=hN(e):e=su(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,d=0;d<i;++d)(s=l[d])&&(o.push(e.call(s,s.__data__,d,l)),n.push(s));return new st(o,n)}function uu(e){return function(){return this.matches(e)}}function rf(e){return function(t){return t.matches(e)}}var xN=Array.prototype.find;function bN(e){return function(){return xN.call(this.children,e)}}function yN(){return this.firstElementChild}function n1(e){return this.select(e==null?yN:bN(typeof e=="function"?e:rf(e)))}var wN=Array.prototype.filter;function vN(){return Array.from(this.children)}function CN(e){return function(){return wN.call(this.children,e)}}function r1(e){return this.selectAll(e==null?vN:CN(typeof e=="function"?e:rf(e)))}function l1(e){typeof e!="function"&&(e=uu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,d=0;d<l;++d)(s=r[d])&&e.call(s,s.__data__,d,r)&&i.push(s);return new st(o,this._parents)}function lf(e){return new Array(e.length)}function i1(){return new st(this._enter||this._groups.map(lf),this._parents)}function du(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}du.prototype={constructor:du,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function s1(e){return function(){return e}}function SN(e,t,a,o,n,r){for(var l=0,i,s=t.length,d=r.length;l<d;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new du(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function LN(e,t,a,o,n,r,l){var i,s,d=new Map,u=t.length,f=r.length,c=new Array(u),p;for(i=0;i<u;++i)(s=t[i])&&(c[i]=p=l.call(s,s.__data__,i,t)+"",d.has(p)?n[i]=s:d.set(p,s));for(i=0;i<f;++i)p=l.call(e,r[i],i,r)+"",(s=d.get(p))?(o[i]=s,s.__data__=r[i],d.delete(p)):a[i]=new du(e,r[i]);for(i=0;i<u;++i)(s=t[i])&&d.get(c[i])===s&&(n[i]=s)}function _N(e){return e.__data__}function u1(e,t){if(!arguments.length)return Array.from(this,_N);var a=t?LN:SN,o=this._parents,n=this._groups;typeof e!="function"&&(e=s1(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),d=0;d<r;++d){var u=o[d],f=n[d],c=f.length,p=kN(e.call(u,u&&u.__data__,d,o)),g=p.length,y=i[d]=new Array(g),w=l[d]=new Array(g),h=s[d]=new Array(c);a(u,f,y,w,h,p,t);for(var x=0,m=0,b,S;x<g;++x)if(b=y[x]){for(x>=m&&(m=x+1);!(S=w[m])&&++m<g;);b._next=S||null}}return l=new st(l,o),l._enter=i,l._exit=s,l}function kN(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function d1(){return new st(this._exit||this._groups.map(lf),this._parents)}function c1(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function f1(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var d=a[s],u=o[s],f=d.length,c=i[s]=new Array(f),p,g=0;g<f;++g)(p=d[g]||u[g])&&(c[g]=p);for(;s<n;++s)i[s]=a[s];return new st(i,this._parents)}function p1(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function m1(e){e||(e=IN);function t(f,c){return f&&c?e(f.__data__,c.__data__):!f-!c}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),d,u=0;u<i;++u)(d=l[u])&&(s[u]=d);s.sort(t)}return new st(n,this._parents).order()}function IN(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function g1(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function h1(){return Array.from(this)}function x1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function b1(){let e=0;for(let t of this)++e;return e}function y1(){return!this.node()}function w1(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function MN(e){return function(){this.removeAttribute(e)}}function NN(e){return function(){this.removeAttributeNS(e.space,e.local)}}function EN(e,t){return function(){this.setAttribute(e,t)}}function TN(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function AN(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function RN(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function v1(e,t){var a=hn(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?NN:MN:typeof t=="function"?a.local?RN:AN:a.local?TN:EN)(a,t))}function sf(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function DN(e){return function(){this.style.removeProperty(e)}}function zN(e,t,a){return function(){this.style.setProperty(e,t,a)}}function PN(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function C1(e,t,a){return arguments.length>1?this.each((t==null?DN:typeof t=="function"?PN:zN)(e,t,a??"")):ir(this.node(),e)}function ir(e,t){return e.style.getPropertyValue(t)||sf(e).getComputedStyle(e,null).getPropertyValue(t)}function ON(e){return function(){delete this[e]}}function BN(e,t){return function(){this[e]=t}}function HN(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function S1(e,t){return arguments.length>1?this.each((t==null?ON:typeof t=="function"?HN:BN)(e,t)):this.node()[e]}function L1(e){return e.trim().split(/^|\s+/)}function kh(e){return e.classList||new _1(e)}function _1(e){this._node=e,this._names=L1(e.getAttribute("class")||"")}_1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function k1(e,t){for(var a=kh(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function I1(e,t){for(var a=kh(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function FN(e){return function(){k1(this,e)}}function UN(e){return function(){I1(this,e)}}function qN(e,t){return function(){(t.apply(this,arguments)?k1:I1)(this,e)}}function M1(e,t){var a=L1(e+"");if(arguments.length<2){for(var o=kh(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?qN:t?FN:UN)(a,t))}function VN(){this.textContent=""}function GN(e){return function(){this.textContent=e}}function XN(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function N1(e){return arguments.length?this.each(e==null?VN:(typeof e=="function"?XN:GN)(e)):this.node().textContent}function YN(){this.innerHTML=""}function ZN(e){return function(){this.innerHTML=e}}function jN(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function E1(e){return arguments.length?this.each(e==null?YN:(typeof e=="function"?jN:ZN)(e)):this.node().innerHTML}function WN(){this.nextSibling&&this.parentNode.appendChild(this)}function T1(){return this.each(WN)}function KN(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function A1(){return this.each(KN)}function R1(e){var t=typeof e=="function"?e:nf(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function $N(){return null}function D1(e,t){var a=typeof e=="function"?e:nf(e),o=t==null?$N:typeof t=="function"?t:el(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function QN(){var e=this.parentNode;e&&e.removeChild(this)}function z1(){return this.each(QN)}function JN(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function eE(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function P1(e){return this.select(e?eE:JN)}function O1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function tE(e){return function(t){e.call(this,t,this.__data__)}}function aE(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function oE(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function nE(e,t,a){return function(){var o=this.__on,n,r=tE(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function B1(e,t,a){var o=aE(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,d=i.length,u;s<d;++s)for(n=0,u=i[s];n<r;++n)if((l=o[n]).type===u.type&&l.name===u.name)return u.value}return}for(i=t?nE:oE,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function H1(e,t,a){var o=sf(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function rE(e,t){return function(){return H1(this,e,t)}}function lE(e,t){return function(){return H1(this,e,t.apply(this,arguments))}}function F1(e,t){return this.each((typeof t=="function"?lE:rE)(e,t))}function*U1(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var Ih=[null];function st(e,t){this._groups=e,this._parents=t}function q1(){return new st([[document.documentElement]],Ih)}function iE(){return this}st.prototype=q1.prototype={constructor:st,select:a1,selectAll:o1,selectChild:n1,selectChildren:r1,filter:l1,data:u1,enter:i1,exit:d1,join:c1,merge:f1,selection:iE,order:p1,sort:m1,call:g1,nodes:h1,node:x1,size:b1,empty:y1,each:w1,attr:v1,style:C1,property:S1,classed:M1,text:N1,html:E1,raise:T1,lower:A1,append:R1,insert:D1,remove:z1,clone:P1,datum:O1,on:B1,dispatch:F1,[Symbol.iterator]:U1};var xn=q1;function _t(e){return typeof e=="string"?new st([[document.querySelector(e)]],[document.documentElement]):new st([[e]],Ih)}function V1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Wt(e,t){if(e=V1(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var G1={passive:!1},tl={capture:!0,passive:!1};function uf(e){e.stopImmediatePropagation()}function sr(e){e.preventDefault(),e.stopImmediatePropagation()}function cu(e){var t=e.document.documentElement,a=_t(e).on("dragstart.drag",sr,tl);"onselectstart"in t?a.on("selectstart.drag",sr,tl):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function fu(e,t){var a=e.document.documentElement,o=_t(e).on("dragstart.drag",null);t&&(o.on("click.drag",sr,tl),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var pu=e=>()=>e;function mu(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:d,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:d,enumerable:!0,configurable:!0},_:{value:u}})}mu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function sE(e){return!e.ctrlKey&&!e.button}function uE(){return this.parentNode}function dE(e,t){return t??{x:e.x,y:e.y}}function cE(){return navigator.maxTouchPoints||"ontouchstart"in this}function df(){var e=sE,t=uE,a=dE,o=cE,n={},r=Jr("start","drag","end"),l=0,i,s,d,u,f=0;function c(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",h,G1).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,S){if(!(u||!e.call(this,b,S))){var C=m(this,t.call(this,b,S),b,S,"mouse");C&&(_t(b.view).on("mousemove.drag",g,tl).on("mouseup.drag",y,tl),cu(b.view),uf(b),d=!1,i=b.clientX,s=b.clientY,C("start",b))}}function g(b){if(sr(b),!d){var S=b.clientX-i,C=b.clientY-s;d=S*S+C*C>f}n.mouse("drag",b)}function y(b){_t(b.view).on("mousemove.drag mouseup.drag",null),fu(b.view,d),sr(b),n.mouse("end",b)}function w(b,S){if(e.call(this,b,S)){var C=b.changedTouches,v=t.call(this,b,S),_=C.length,k,T;for(k=0;k<_;++k)(T=m(this,v,b,S,C[k].identifier,C[k]))&&(uf(b),T("start",b,C[k]))}}function h(b){var S=b.changedTouches,C=S.length,v,_;for(v=0;v<C;++v)(_=n[S[v].identifier])&&(sr(b),_("drag",b,S[v]))}function x(b){var S=b.changedTouches,C=S.length,v,_;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),v=0;v<C;++v)(_=n[S[v].identifier])&&(uf(b),_("end",b,S[v]))}function m(b,S,C,v,_,k){var T=r.copy(),E=Wt(k||C,S),F,O,L;if((L=a.call(b,new mu("beforestart",{sourceEvent:C,target:c,identifier:_,active:l,x:E[0],y:E[1],dx:0,dy:0,dispatch:T}),v))!=null)return F=L.x-E[0]||0,O=L.y-E[1]||0,function M(N,I,A){var z=E,V;switch(N){case"start":n[_]=M,V=l++;break;case"end":delete n[_],--l;case"drag":E=Wt(A||I,S),V=l;break}T.call(N,b,new mu(N,{sourceEvent:I,subject:L,target:c,identifier:_,active:V,x:E[0]+F,y:E[1]+O,dx:E[0]-z[0],dy:E[1]-z[1],dispatch:T}),v)}}return c.filter=function(b){return arguments.length?(e=typeof b=="function"?b:pu(!!b),c):e},c.container=function(b){return arguments.length?(t=typeof b=="function"?b:pu(b),c):t},c.subject=function(b){return arguments.length?(a=typeof b=="function"?b:pu(b),c):a},c.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:pu(!!b),c):o},c.on=function(){var b=r.on.apply(r,arguments);return b===r?c:b},c.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,c):Math.sqrt(f)},c}function cf(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Mh(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function xu(){}var gu=.7,mf=1/gu,Ii="\\s*([+-]?\\d+)\\s*",hu="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Do="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",fE=/^#([0-9a-f]{3,8})$/,pE=new RegExp(`^rgb\\(${Ii},${Ii},${Ii}\\)$`),mE=new RegExp(`^rgb\\(${Do},${Do},${Do}\\)$`),gE=new RegExp(`^rgba\\(${Ii},${Ii},${Ii},${hu}\\)$`),hE=new RegExp(`^rgba\\(${Do},${Do},${Do},${hu}\\)$`),xE=new RegExp(`^hsl\\(${hu},${Do},${Do}\\)$`),bE=new RegExp(`^hsla\\(${hu},${Do},${Do},${hu}\\)$`),X1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};cf(xu,po,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Y1,formatHex:Y1,formatHex8:yE,formatHsl:wE,formatRgb:Z1,toString:Z1});function Y1(){return this.rgb().formatHex()}function yE(){return this.rgb().formatHex8()}function wE(){return J1(this).formatHsl()}function Z1(){return this.rgb().formatRgb()}function po(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=fE.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?j1(t):a===3?new fa(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?ff(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?ff(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=pE.exec(e))?new fa(t[1],t[2],t[3],1):(t=mE.exec(e))?new fa(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=gE.exec(e))?ff(t[1],t[2],t[3],t[4]):(t=hE.exec(e))?ff(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=xE.exec(e))?$1(t[1],t[2]/100,t[3]/100,1):(t=bE.exec(e))?$1(t[1],t[2]/100,t[3]/100,t[4]):X1.hasOwnProperty(e)?j1(X1[e]):e==="transparent"?new fa(NaN,NaN,NaN,0):null}function j1(e){return new fa(e>>16&255,e>>8&255,e&255,1)}function ff(e,t,a,o){return o<=0&&(e=t=a=NaN),new fa(e,t,a,o)}function vE(e){return e instanceof xu||(e=po(e)),e?(e=e.rgb(),new fa(e.r,e.g,e.b,e.opacity)):new fa}function Mi(e,t,a,o){return arguments.length===1?vE(e):new fa(e,t,a,o??1)}function fa(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}cf(fa,Mi,Mh(xu,{brighter(e){return e=e==null?mf:Math.pow(mf,e),new fa(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?gu:Math.pow(gu,e),new fa(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new fa(ol(this.r),ol(this.g),ol(this.b),gf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:W1,formatHex:W1,formatHex8:CE,formatRgb:K1,toString:K1}));function W1(){return`#${al(this.r)}${al(this.g)}${al(this.b)}`}function CE(){return`#${al(this.r)}${al(this.g)}${al(this.b)}${al((isNaN(this.opacity)?1:this.opacity)*255)}`}function K1(){let e=gf(this.opacity);return`${e===1?"rgb(":"rgba("}${ol(this.r)}, ${ol(this.g)}, ${ol(this.b)}${e===1?")":`, ${e})`}`}function gf(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function ol(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function al(e){return e=ol(e),(e<16?"0":"")+e.toString(16)}function $1(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new fo(e,t,a,o)}function J1(e){if(e instanceof fo)return new fo(e.h,e.s,e.l,e.opacity);if(e instanceof xu||(e=po(e)),!e)return new fo;if(e instanceof fo)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new fo(l,i,s,e.opacity)}function e2(e,t,a,o){return arguments.length===1?J1(e):new fo(e,t,a,o??1)}function fo(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}cf(fo,e2,Mh(xu,{brighter(e){return e=e==null?mf:Math.pow(mf,e),new fo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?gu:Math.pow(gu,e),new fo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new fa(Nh(e>=240?e-240:e+120,n,o),Nh(e,n,o),Nh(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new fo(Q1(this.h),pf(this.s),pf(this.l),gf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=gf(this.opacity);return`${e===1?"hsl(":"hsla("}${Q1(this.h)}, ${pf(this.s)*100}%, ${pf(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Q1(e){return e=(e||0)%360,e<0?e+360:e}function pf(e){return Math.max(0,Math.min(1,e||0))}function Nh(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Eh(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function t2(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return Eh((a-o/t)*t,l,n,r,i)}}function a2(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return Eh((a-o/t)*t,n,r,l,i)}}var bu=e=>()=>e;function SE(e,t){return function(a){return e+a*t}}function LE(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function o2(e){return(e=+e)==1?hf:function(t,a){return a-t?LE(t,a,e):bu(isNaN(t)?a:t)}}function hf(e,t){var a=t-e;return a?SE(e,a):bu(isNaN(e)?t:e)}var nl=(function e(t){var a=o2(t);function o(n,r){var l=a((n=Mi(n)).r,(r=Mi(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),d=hf(n.opacity,r.opacity);return function(u){return n.r=l(u),n.g=i(u),n.b=s(u),n.opacity=d(u),n+""}}return o.gamma=e,o})(1);function n2(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=Mi(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var _E=n2(t2),kE=n2(a2);function r2(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function l2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function i2(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=bn(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function s2(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Kt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function u2(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=bn(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Ah=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Th=new RegExp(Ah.source,"g");function IE(e){return function(){return e}}function ME(e){return function(t){return e(t)+""}}function yu(e,t){var a=Ah.lastIndex=Th.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=Ah.exec(e))&&(n=Th.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:Kt(o,n)})),a=Th.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?ME(s[0].x):IE(t):(t=s.length,function(d){for(var u=0,f;u<t;++u)i[(f=s[u]).i]=f.x(d);return i.join("")})}function bn(e,t){var a=typeof t,o;return t==null||a==="boolean"?bu(t):(a==="number"?Kt:a==="string"?(o=po(t))?(t=o,nl):yu:t instanceof po?nl:t instanceof Date?s2:l2(t)?r2:Array.isArray(t)?i2:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?u2:Kt)(e,t)}var d2=180/Math.PI,xf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Rh(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*d2,skewX:Math.atan(s)*d2,scaleX:l,scaleY:i}}var bf;function c2(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?xf:Rh(t.a,t.b,t.c,t.d,t.e,t.f)}function f2(e){return e==null?xf:(bf||(bf=document.createElementNS("http://www.w3.org/2000/svg","g")),bf.setAttribute("transform",e),(e=bf.transform.baseVal.consolidate())?(e=e.matrix,Rh(e.a,e.b,e.c,e.d,e.e,e.f)):xf)}function p2(e,t,a,o){function n(d){return d.length?d.pop()+" ":""}function r(d,u,f,c,p,g){if(d!==f||u!==c){var y=p.push("translate(",null,t,null,a);g.push({i:y-4,x:Kt(d,f)},{i:y-2,x:Kt(u,c)})}else(f||c)&&p.push("translate("+f+t+c+a)}function l(d,u,f,c){d!==u?(d-u>180?u+=360:u-d>180&&(d+=360),c.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Kt(d,u)})):u&&f.push(n(f)+"rotate("+u+o)}function i(d,u,f,c){d!==u?c.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Kt(d,u)}):u&&f.push(n(f)+"skewX("+u+o)}function s(d,u,f,c,p,g){if(d!==f||u!==c){var y=p.push(n(p)+"scale(",null,",",null,")");g.push({i:y-4,x:Kt(d,f)},{i:y-2,x:Kt(u,c)})}else(f!==1||c!==1)&&p.push(n(p)+"scale("+f+","+c+")")}return function(d,u){var f=[],c=[];return d=e(d),u=e(u),r(d.translateX,d.translateY,u.translateX,u.translateY,f,c),l(d.rotate,u.rotate,f,c),i(d.skewX,u.skewX,f,c),s(d.scaleX,d.scaleY,u.scaleX,u.scaleY,f,c),d=u=null,function(p){for(var g=-1,y=c.length,w;++g<y;)f[(w=c[g]).i]=w.x(p);return f.join("")}}}var Dh=p2(c2,"px, ","px)","deg)"),zh=p2(f2,", ",")",")");var NE=1e-12;function m2(e){return((e=Math.exp(e))+1/e)/2}function EE(e){return((e=Math.exp(e))-1/e)/2}function TE(e){return((e=Math.exp(2*e))-1)/(e+1)}var rl=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],d=r[2],u=l[0],f=l[1],c=l[2],p=u-i,g=f-s,y=p*p+g*g,w,h;if(y<NE)h=Math.log(c/d)/t,w=function(v){return[i+v*p,s+v*g,d*Math.exp(t*v*h)]};else{var x=Math.sqrt(y),m=(c*c-d*d+o*y)/(2*d*a*x),b=(c*c-d*d-o*y)/(2*c*a*x),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(b*b+1)-b);h=(C-S)/t,w=function(v){var _=v*h,k=m2(S),T=d/(a*x)*(k*TE(t*_+S)-EE(S));return[i+T*p,s+T*g,d*k/m2(t*_+S)]}}return w.duration=h*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var Ni=0,vu=0,wu=0,h2=1e3,yf,Cu,wf=0,ll=0,vf=0,Su=typeof performance=="object"&&performance.now?performance:Date,x2=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function _u(){return ll||(x2(AE),ll=Su.now()+vf)}function AE(){ll=0}function Lu(){this._call=this._time=this._next=null}Lu.prototype=Cf.prototype={constructor:Lu,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?_u():+a)+(t==null?0:+t),!this._next&&Cu!==this&&(Cu?Cu._next=this:yf=this,Cu=this),this._call=e,this._time=a,Ph()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ph())}};function Cf(e,t,a){var o=new Lu;return o.restart(e,t,a),o}function b2(){_u(),++Ni;for(var e=yf,t;e;)(t=ll-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ni}function g2(){ll=(wf=Su.now())+vf,Ni=vu=0;try{b2()}finally{Ni=0,DE(),ll=0}}function RE(){var e=Su.now(),t=e-wf;t>h2&&(vf-=t,wf=e)}function DE(){for(var e,t=yf,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:yf=a);Cu=e,Ph(o)}function Ph(e){if(!Ni){vu&&(vu=clearTimeout(vu));var t=e-ll;t>24?(e<1/0&&(vu=setTimeout(g2,e-Su.now()-vf)),wu&&(wu=clearInterval(wu))):(wu||(wf=Su.now(),wu=setInterval(RE,h2)),Ni=1,x2(g2))}}function Sf(e,t,a){var o=new Lu;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var zE=Jr("start","end","cancel","interrupt"),PE=[],v2=0,y2=1,_f=2,Lf=3,w2=4,kf=5,ku=6;function ur(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;OE(e,a,{name:t,index:o,group:n,on:zE,tween:PE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:v2})}function Iu(e,t){var a=vt(e,t);if(a.state>v2)throw new Error("too late; already scheduled");return a}function Pt(e,t){var a=vt(e,t);if(a.state>Lf)throw new Error("too late; already running");return a}function vt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function OE(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=Cf(r,0,a.time);function r(d){a.state=y2,a.timer.restart(l,a.delay,a.time),a.delay<=d&&l(d-a.delay)}function l(d){var u,f,c,p;if(a.state!==y2)return s();for(u in o)if(p=o[u],p.name===a.name){if(p.state===Lf)return Sf(l);p.state===w2?(p.state=ku,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=ku,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(Sf(function(){a.state===Lf&&(a.state=w2,a.timer.restart(i,a.delay,a.time),i(d))}),a.state=_f,a.on.call("start",e,e.__data__,a.index,a.group),a.state===_f){for(a.state=Lf,n=new Array(c=a.tween.length),u=0,f=-1;u<c;++u)(p=a.tween[u].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function i(d){for(var u=d<a.duration?a.ease.call(null,d/a.duration):(a.timer.restart(s),a.state=kf,1),f=-1,c=n.length;++f<c;)n[f].call(e,u);a.state===kf&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=ku,a.timer.stop(),delete o[t];for(var d in o)return;delete e.__transition}}function il(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>_f&&o.state<kf,o.state=ku,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function C2(e){return this.each(function(){il(this,e)})}function BE(e,t){var a,o;return function(){var n=Pt(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function HE(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=Pt(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,d=n.length;s<d;++s)if(n[s].name===t){n[s]=i;break}s===d&&n.push(i)}r.tween=n}}function S2(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=vt(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?BE:HE)(a,e,t))}function Ei(e,t,a){var o=e._id;return e.each(function(){var n=Pt(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return vt(n,o).value[t]}}function If(e,t){var a;return(typeof t=="number"?Kt:t instanceof po?nl:(a=po(t))?(t=a,nl):yu)(e,t)}function FE(e){return function(){this.removeAttribute(e)}}function UE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function qE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function VE(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function GE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function XE(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function L2(e,t){var a=hn(e),o=a==="transform"?zh:If;return this.attrTween(e,typeof t=="function"?(a.local?XE:GE)(a,o,Ei(this,"attr."+e,t)):t==null?(a.local?UE:FE)(a):(a.local?VE:qE)(a,o,t))}function YE(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function ZE(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function jE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&ZE(e,r)),a}return n._value=t,n}function WE(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&YE(e,r)),a}return n._value=t,n}function _2(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=hn(e);return this.tween(a,(o.local?jE:WE)(o,t))}function KE(e,t){return function(){Iu(this,e).delay=+t.apply(this,arguments)}}function $E(e,t){return t=+t,function(){Iu(this,e).delay=t}}function k2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?KE:$E)(t,e)):vt(this.node(),t).delay}function QE(e,t){return function(){Pt(this,e).duration=+t.apply(this,arguments)}}function JE(e,t){return t=+t,function(){Pt(this,e).duration=t}}function I2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?QE:JE)(t,e)):vt(this.node(),t).duration}function eT(e,t){if(typeof t!="function")throw new Error;return function(){Pt(this,e).ease=t}}function M2(e){var t=this._id;return arguments.length?this.each(eT(t,e)):vt(this.node(),t).ease}function tT(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;Pt(this,e).ease=a}}function N2(e){if(typeof e!="function")throw new Error;return this.each(tT(this._id,e))}function E2(e){typeof e!="function"&&(e=uu(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,d=0;d<l;++d)(s=r[d])&&e.call(s,s.__data__,d,r)&&i.push(s);return new $t(o,this._parents,this._name,this._id)}function T2(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],d=a[i],u=s.length,f=l[i]=new Array(u),c,p=0;p<u;++p)(c=s[p]||d[p])&&(f[p]=c);for(;i<o;++i)l[i]=t[i];return new $t(l,this._parents,this._name,this._id)}function aT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function oT(e,t,a){var o,n,r=aT(t)?Iu:Pt;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function A2(e,t){var a=this._id;return arguments.length<2?vt(this.node(),a).on.on(e):this.each(oT(a,e,t))}function nT(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function R2(){return this.on("end.remove",nT(this._id))}function D2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=el(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,d=r[l]=new Array(s),u,f,c=0;c<s;++c)(u=i[c])&&(f=e.call(u,u.__data__,c,i))&&("__data__"in u&&(f.__data__=u.__data__),d[c]=f,ur(d[c],t,a,c,d,vt(u,a)));return new $t(r,this._parents,t,a)}function z2(e){var t=this._name,a=this._id;typeof e!="function"&&(e=su(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],d=s.length,u,f=0;f<d;++f)if(u=s[f]){for(var c=e.call(u,u.__data__,f,s),p,g=vt(u,a),y=0,w=c.length;y<w;++y)(p=c[y])&&ur(p,t,a,y,c,g);r.push(c),l.push(u)}return new $t(r,l,t,a)}var rT=xn.prototype.constructor;function P2(){return new rT(this._groups,this._parents)}function lT(e,t){var a,o,n;return function(){var r=ir(this,e),l=(this.style.removeProperty(e),ir(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function O2(e){return function(){this.style.removeProperty(e)}}function iT(e,t,a){var o,n=a+"",r;return function(){var l=ir(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function sT(e,t,a){var o,n,r;return function(){var l=ir(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),ir(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function uT(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=Pt(this,e),d=s.on,u=s.value[r]==null?i||(i=O2(t)):void 0;(d!==a||n!==u)&&(o=(a=d).copy()).on(l,n=u),s.on=o}}function B2(e,t,a){var o=(e+="")=="transform"?Dh:If;return t==null?this.styleTween(e,lT(e,o)).on("end.style."+e,O2(e)):typeof t=="function"?this.styleTween(e,sT(e,o,Ei(this,"style."+e,t))).each(uT(this._id,e)):this.styleTween(e,iT(e,o,t),a).on("end.style."+e,null)}function dT(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function cT(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&dT(e,l,a)),o}return r._value=t,r}function H2(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,cT(e,t,a??""))}function fT(e){return function(){this.textContent=e}}function pT(e){return function(){var t=e(this);this.textContent=t??""}}function F2(e){return this.tween("text",typeof e=="function"?pT(Ei(this,"text",e)):fT(e==null?"":e+""))}function mT(e){return function(t){this.textContent=e.call(this,t)}}function gT(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&mT(n)),t}return o._value=e,o}function U2(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,gT(e))}function q2(){for(var e=this._name,t=this._id,a=Mf(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,d=0;d<i;++d)if(s=l[d]){var u=vt(s,t);ur(s,e,a,d,l,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new $t(o,this._parents,e,a)}function V2(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var d=Pt(this,o),u=d.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),d.on=t}),n===0&&r()})}var hT=0;function $t(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function G2(e){return xn().transition(e)}function Mf(){return++hT}var yn=xn.prototype;$t.prototype=G2.prototype={constructor:$t,select:D2,selectAll:z2,selectChild:yn.selectChild,selectChildren:yn.selectChildren,filter:E2,merge:T2,selection:P2,transition:q2,call:yn.call,nodes:yn.nodes,node:yn.node,size:yn.size,empty:yn.empty,each:yn.each,on:A2,attr:L2,attrTween:_2,style:B2,styleTween:H2,text:F2,textTween:U2,remove:R2,tween:S2,delay:k2,duration:I2,ease:M2,easeVarying:N2,end:V2,[Symbol.iterator]:yn[Symbol.iterator]};function Nf(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var xT={time:null,delay:0,duration:250,ease:Nf};function bT(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function X2(e){var t,a;e instanceof $t?(t=e._id,e=e._name):(t=Mf(),(a=xT).time=_u(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,d=0;d<i;++d)(s=l[d])&&ur(s,e,t,d,l,a||bT(s,t));return new $t(o,this._parents,e,t)}xn.prototype.interrupt=C2;xn.prototype.transition=X2;var Mu=e=>()=>e;function Oh(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function mo(e,t,a){this.k=e,this.x=t,this.y=a}mo.prototype={constructor:mo,scale:function(e){return e===1?this:new mo(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new mo(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var sl=new mo(1,0,0);Nu.prototype=mo.prototype;function Nu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return sl;return e.__zoom}function Ef(e){e.stopImmediatePropagation()}function Ti(e){e.preventDefault(),e.stopImmediatePropagation()}function yT(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function wT(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Y2(){return this.__zoom||sl}function vT(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function CT(){return navigator.maxTouchPoints||"ontouchstart"in this}function ST(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function Tf(){var e=yT,t=wT,a=ST,o=vT,n=CT,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=rl,d=Jr("start","zoom","end"),u,f,c,p=500,g=150,y=0,w=10;function h(L){L.property("__zoom",Y2).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",k).on("dblclick.zoom",T).filter(n).on("touchstart.zoom",E).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",O).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,M,N,I){var A=L.selection?L.selection():L;A.property("__zoom",Y2),L!==A?S(L,M,N,I):A.interrupt().each(function(){C(this,arguments).event(I).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},h.scaleBy=function(L,M,N,I){h.scaleTo(L,function(){var A=this.__zoom.k,z=typeof M=="function"?M.apply(this,arguments):M;return A*z},N,I)},h.scaleTo=function(L,M,N,I){h.transform(L,function(){var A=t.apply(this,arguments),z=this.__zoom,V=N==null?b(A):typeof N=="function"?N.apply(this,arguments):N,D=z.invert(V),U=typeof M=="function"?M.apply(this,arguments):M;return a(m(x(z,U),V,D),A,l)},N,I)},h.translateBy=function(L,M,N,I){h.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof N=="function"?N.apply(this,arguments):N),t.apply(this,arguments),l)},null,I)},h.translateTo=function(L,M,N,I,A){h.transform(L,function(){var z=t.apply(this,arguments),V=this.__zoom,D=I==null?b(z):typeof I=="function"?I.apply(this,arguments):I;return a(sl.translate(D[0],D[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof N=="function"?-N.apply(this,arguments):-N),z,l)},I,A)};function x(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new mo(M,L.x,L.y)}function m(L,M,N){var I=M[0]-N[0]*L.k,A=M[1]-N[1]*L.k;return I===L.x&&A===L.y?L:new mo(L.k,I,A)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function S(L,M,N,I){L.on("start.zoom",function(){C(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(I).end()}).tween("zoom",function(){var A=this,z=arguments,V=C(A,z).event(I),D=t.apply(A,z),U=N==null?b(D):typeof N=="function"?N.apply(A,z):N,Z=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),W=A.__zoom,j=typeof M=="function"?M.apply(A,z):M,ne=s(W.invert(U).concat(Z/W.k),j.invert(U).concat(Z/j.k));return function(ee){if(ee===1)ee=j;else{var q=ne(ee),Y=Z/q[2];ee=new mo(Y,U[0]-q[0]*Y,U[1]-q[1]*Y)}V.zoom(null,ee)}})}function C(L,M,N){return!N&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=_t(this.that).datum();d.call(L,this.that,new Oh(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:d}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var N=C(this,M).event(L),I=this.__zoom,A=Math.max(r[0],Math.min(r[1],I.k*Math.pow(2,o.apply(this,arguments)))),z=Wt(L);if(N.wheel)(N.mouse[0][0]!==z[0]||N.mouse[0][1]!==z[1])&&(N.mouse[1]=I.invert(N.mouse[0]=z)),clearTimeout(N.wheel);else{if(I.k===A)return;N.mouse=[z,I.invert(z)],il(this),N.start()}Ti(L),N.wheel=setTimeout(V,g),N.zoom("mouse",a(m(x(I,A),N.mouse[0],N.mouse[1]),N.extent,l));function V(){N.wheel=null,N.end()}}function k(L,...M){if(c||!e.apply(this,arguments))return;var N=L.currentTarget,I=C(this,M,!0).event(L),A=_t(L.view).on("mousemove.zoom",U,!0).on("mouseup.zoom",Z,!0),z=Wt(L,N),V=L.clientX,D=L.clientY;cu(L.view),Ef(L),I.mouse=[z,this.__zoom.invert(z)],il(this),I.start();function U(W){if(Ti(W),!I.moved){var j=W.clientX-V,ne=W.clientY-D;I.moved=j*j+ne*ne>y}I.event(W).zoom("mouse",a(m(I.that.__zoom,I.mouse[0]=Wt(W,N),I.mouse[1]),I.extent,l))}function Z(W){A.on("mousemove.zoom mouseup.zoom",null),fu(W.view,I.moved),Ti(W),I.event(W).end()}}function T(L,...M){if(e.apply(this,arguments)){var N=this.__zoom,I=Wt(L.changedTouches?L.changedTouches[0]:L,this),A=N.invert(I),z=N.k*(L.shiftKey?.5:2),V=a(m(x(N,z),I,A),t.apply(this,M),l);Ti(L),i>0?_t(this).transition().duration(i).call(S,V,I,L):_t(this).call(h.transform,V,I,L)}}function E(L,...M){if(e.apply(this,arguments)){var N=L.touches,I=N.length,A=C(this,M,L.changedTouches.length===I).event(L),z,V,D,U;for(Ef(L),V=0;V<I;++V)D=N[V],U=Wt(D,this),U=[U,this.__zoom.invert(U),D.identifier],A.touch0?!A.touch1&&A.touch0[2]!==U[2]&&(A.touch1=U,A.taps=0):(A.touch0=U,z=!0,A.taps=1+!!u);u&&(u=clearTimeout(u)),z&&(A.taps<2&&(f=U[0],u=setTimeout(function(){u=null},p)),il(this),A.start())}}function F(L,...M){if(this.__zooming){var N=C(this,M).event(L),I=L.changedTouches,A=I.length,z,V,D,U;for(Ti(L),z=0;z<A;++z)V=I[z],D=Wt(V,this),N.touch0&&N.touch0[2]===V.identifier?N.touch0[0]=D:N.touch1&&N.touch1[2]===V.identifier&&(N.touch1[0]=D);if(V=N.that.__zoom,N.touch1){var Z=N.touch0[0],W=N.touch0[1],j=N.touch1[0],ne=N.touch1[1],ee=(ee=j[0]-Z[0])*ee+(ee=j[1]-Z[1])*ee,q=(q=ne[0]-W[0])*q+(q=ne[1]-W[1])*q;V=x(V,Math.sqrt(ee/q)),D=[(Z[0]+j[0])/2,(Z[1]+j[1])/2],U=[(W[0]+ne[0])/2,(W[1]+ne[1])/2]}else if(N.touch0)D=N.touch0[0],U=N.touch0[1];else return;N.zoom("touch",a(m(V,D,U),N.extent,l))}}function O(L,...M){if(this.__zooming){var N=C(this,M).event(L),I=L.changedTouches,A=I.length,z,V;for(Ef(L),c&&clearTimeout(c),c=setTimeout(function(){c=null},p),z=0;z<A;++z)V=I[z],N.touch0&&N.touch0[2]===V.identifier?delete N.touch0:N.touch1&&N.touch1[2]===V.identifier&&delete N.touch1;if(N.touch1&&!N.touch0&&(N.touch0=N.touch1,delete N.touch1),N.touch0)N.touch0[1]=this.__zoom.invert(N.touch0[0]);else if(N.end(),N.taps===2&&(V=Wt(V,this),Math.hypot(f[0]-V[0],f[1]-V[1])<w)){var D=_t(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:Mu(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:Mu(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:Mu(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:Mu([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],h):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(i=+L,h):i},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=d.on.apply(d,arguments);return L===d?h:L},h.clickDistance=function(L){return arguments.length?(y=(L=+L)*L,h):Math.sqrt(y)},h.tapDistance=function(L){return arguments.length?(w=+L,h):w},h}var Ea={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},zi=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],qh=["Enter"," ","Escape"],Vh={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},pr;(function(e){e.Strict="strict",e.Loose="loose"})(pr||(pr={}));var go;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(go||(go={}));var wn;(function(e){e.Partial="partial",e.Full="full"})(wn||(wn={}));var Gh={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},zo;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(zo||(zo={}));var Ri;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ri||(Ri={}));var ae;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ae||(ae={}));var Z2={[ae.Left]:ae.Right,[ae.Right]:ae.Left,[ae.Top]:ae.Bottom,[ae.Bottom]:ae.Top};function Xh(e){return e===null?null:e?"valid":"invalid"}var Yh=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,lC=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Zh=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),jh=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Tu=(e,t=[0,0])=>{let{width:a,height:o}=Qa(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Wh=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):Zh(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,Of(n,Df(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?Bf(o):{x:0,y:0,width:0,height:0}},Pi=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Of(a,Df(n)),o=!0)}),o?Bf(a):{x:0,y:0,width:0,height:0}},zf=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,d=t.width/n,u=t.height/n,f=[];for(let c of e.values()){let{measured:p,selectable:g=!0,hidden:y=!1}=c;if(l&&!g||y)continue;let w=p.width??c.width??c.initialWidth??0,h=p.height??c.height??c.initialHeight??0,{x,y:m}=c.internals.positionAbsolute,b=cC(i,s,d,u,x,m,w,h),S=w*h,C=r&&b>0;(!c.internals.handleBounds||C||b>=S||c.dragging)&&f.push(c)}return f},iC=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function LT(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=Qa(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function sC({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=LT(e,l),s=Pi(i),d=Ru(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(d,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function Kh({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:d}=i?i.internals.positionAbsolute:{x:0,y:0},u=l.origin??o,f=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",Ea.error005());else{let{width:p,height:g}=Qa(i);p&&g&&(f=[[s,d],[s+p,d+g]])}else i&&cl(l.extent)&&(f=[[l.extent[0][0]+s,l.extent[0][1]+d],[l.extent[1][0]+s,l.extent[1][1]+d]]);let c=cl(f)?ul(t,f,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",Ea.error015()),{position:{x:c.x-s+(l.measured.width??0)*u[0],y:c.y-d+(l.measured.height??0)*u[1]},positionAbsolute:c}}async function uC({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(c=>c.id)),l=[];for(let c of a){if(c.deletable===!1)continue;let p=r.has(c.id),g=!p&&c.parentId&&l.find(y=>y.id===c.parentId);(p||g)&&l.push(c)}let i=new Set(t.map(c=>c.id)),s=o.filter(c=>c.deletable!==!1),u=iC(l,s);for(let c of s)i.has(c.id)&&!u.find(g=>g.id===c.id)&&u.push(c);if(!n)return{edges:u,nodes:l};let f=await n({nodes:l,edges:u});return typeof f=="boolean"?f?{edges:u,nodes:l}:{edges:[],nodes:[]}:f}var Di=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),ul=(e={x:0,y:0},t,a)=>({x:Di(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Di(e.y,t[0][1],t[1][1]-(a?.height??0))});function dC(e,t,a){let{width:o,height:n}=Qa(a),{x:r,y:l}=a.internals.positionAbsolute;return ul(e,[[r,l],[r+o,l+n]],t)}var j2=(e,t,a)=>e<t?Di(Math.abs(e-t),1,t)/t:e>a?-Di(Math.abs(e-a),1,t)/t:0,Pf=(e,t,a=15,o=40)=>{let n=j2(e.x,o,t.width-o)*a,r=j2(e.y,o,t.height-o)*a;return[n,r]},Of=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Uh=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),Bf=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),Oi=(e,t=[0,0])=>{let{x:a,y:o}=Zh(e)?e.internals.positionAbsolute:Tu(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Df=(e,t=[0,0])=>{let{x:a,y:o}=Zh(e)?e.internals.positionAbsolute:Tu(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},$h=(e,t)=>Bf(Of(Uh(e),Uh(t))),cC=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),d=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*d)},Au=(e,t)=>cC(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Qh=e=>Ka(e.width)&&Ka(e.height)&&Ka(e.x)&&Ka(e.y),Ka=e=>!isNaN(e)&&isFinite(e),Jh=(e,t)=>(a,o)=>{},Bi=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Hi=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?Bi(i,l):i},dl=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function Ai(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function _T(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=Ai(e,a),n=Ai(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=Ai(e.top??e.y??0,a),n=Ai(e.bottom??e.y??0,a),r=Ai(e.left??e.x??0,t),l=Ai(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function kT(e,t,a,o,n,r){let{x:l,y:i}=dl(e,[t,a,o]),{x:s,y:d}=dl({x:e.x+e.width,y:e.y+e.height},[t,a,o]),u=n-s,f=r-d;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(u),bottom:Math.floor(f)}}var Ru=(e,t,a,o,n,r)=>{let l=_T(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,d=Math.min(i,s),u=Di(d,o,n),f=e.x+e.width/2,c=e.y+e.height/2,p=t/2-f*u,g=a/2-c*u,y=kT(e,p,g,u,t,a),w={left:Math.min(y.left-l.left,0),top:Math.min(y.top-l.top,0),right:Math.min(y.right-l.right,0),bottom:Math.min(y.bottom-l.bottom,0)};return{x:p-w.left+w.right,y:g-w.top+w.bottom,zoom:u}},Fi=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function cl(e){return e!=null&&e!=="parent"}function Qa(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ex(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function tx(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function ax(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function fC(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function pC(e){return{...Vh,...e||{}}}function Eu(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=$a(e),i=Hi({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:d}=a?Bi(i,t):i;return{xSnapped:s,ySnapped:d,...i}}var Hf=e=>({width:e.offsetWidth,height:e.offsetHeight}),ox=e=>e?.getRootNode?.()||window?.document,IT=["INPUT","SELECT","TEXTAREA"];function nx(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:IT.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var rx=e=>"clientX"in e,$a=(e,t)=>{let a=rx(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},W2=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,...Hf(l)}})};function Ff({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,d=t*.125+r*.375+i*.375+o*.125,u=Math.abs(s-e),f=Math.abs(d-t);return[s,d,u,f]}function Af(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function K2({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ae.Left:return[t-Af(t-o,r),a];case ae.Right:return[t+Af(o-t,r),a];case ae.Top:return[t,a-Af(a-n,r)];case ae.Bottom:return[t,a+Af(n-a,r)]}}function Ui({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,curvature:l=.25}){let[i,s]=K2({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[d,u]=K2({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[f,c,p,g]=Ff({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:d,targetControlY:u});return[`M${e},${t} C${i},${s} ${d},${u} ${o},${n}`,f,c,p,g]}function lx({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function mC({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function gC({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Of(Df(e),Df(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return Au(l,Bf(r))>0}var MT=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,NT=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),hC=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",Ea.error006()),t;let o=a.getEdgeId||MT,n;return Yh(e)?n={...e}:n={...e,id:o(e)},NT(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function Uf({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=lx({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var $2={[ae.Left]:{x:-1,y:0},[ae.Right]:{x:1,y:0},[ae.Top]:{x:0,y:-1},[ae.Bottom]:{x:0,y:1}},ET=({source:e,sourcePosition:t=ae.Bottom,target:a})=>t===ae.Left||t===ae.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},Q2=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function TT({source:e,sourcePosition:t=ae.Bottom,target:a,targetPosition:o=ae.Top,center:n,offset:r,stepPosition:l}){let i=$2[t],s=$2[o],d={x:e.x+i.x*r,y:e.y+i.y*r},u={x:a.x+s.x*r,y:a.y+s.y*r},f=ET({source:d,sourcePosition:t,target:u}),c=f.x!==0?"x":"y",p=f[c],g=[],y,w,h={x:0,y:0},x={x:0,y:0},[,,m,b]=lx({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[c]*s[c]===-1){c==="x"?(y=n.x??d.x+(u.x-d.x)*l,w=n.y??(d.y+u.y)/2):(y=n.x??(d.x+u.x)/2,w=n.y??d.y+(u.y-d.y)*l);let _=[{x:y,y:d.y},{x:y,y:u.y}],k=[{x:d.x,y:w},{x:u.x,y:w}];i[c]===p?g=c==="x"?_:k:g=c==="x"?k:_}else{let _=[{x:d.x,y:u.y}],k=[{x:u.x,y:d.y}];if(c==="x"?g=i.x===p?k:_:g=i.y===p?_:k,t===o){let L=Math.abs(e[c]-a[c]);if(L<=r){let M=Math.min(r-1,r-L);i[c]===p?h[c]=(d[c]>e[c]?-1:1)*M:x[c]=(u[c]>a[c]?-1:1)*M}}if(t!==o){let L=c==="x"?"y":"x",M=i[c]===s[L],N=d[L]>u[L],I=d[L]<u[L];(i[c]===1&&(!M&&N||M&&I)||i[c]!==1&&(!M&&I||M&&N))&&(g=c==="x"?_:k)}let T={x:d.x+h.x,y:d.y+h.y},E={x:u.x+x.x,y:u.y+x.y},F=Math.max(Math.abs(T.x-g[0].x),Math.abs(E.x-g[0].x)),O=Math.max(Math.abs(T.y-g[0].y),Math.abs(E.y-g[0].y));F>=O?(y=(T.x+E.x)/2,w=g[0].y):(y=g[0].x,w=(T.y+E.y)/2)}let S={x:d.x+h.x,y:d.y+h.y},C={x:u.x+x.x,y:u.y+x.y};return[[e,...S.x!==g[0].x||S.y!==g[0].y?[S]:[],...g,...C.x!==g[g.length-1].x||C.y!==g[g.length-1].y?[C]:[],a],y,w,m,b]}function AT(e,t,a,o){let n=Math.min(Q2(e,t)/2,Q2(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let d=e.x<a.x?-1:1,u=e.y<a.y?1:-1;return`L ${r+n*d},${l}Q ${r},${l} ${r},${l+n*u}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function Du({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top,borderRadius:l=5,centerX:i,centerY:s,offset:d=20,stepPosition:u=.5}){let[f,c,p,g,y]=TT({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:d,stepPosition:u}),w=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)w+=AT(f[h-1],f[h],f[h+1],l);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,c,p,g,y]}function J2(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function xC(e){let{sourceNode:t,targetNode:a}=e;if(!J2(t)||!J2(a))return null;let o=t.internals.handleBounds||eC(t.handles),n=a.internals.handleBounds||eC(a.handles),r=tC(o?.source??[],e.sourceHandle),l=tC(e.connectionMode===pr.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",Ea.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||ae.Bottom,s=l?.position||ae.Top,d=mr(t,r,i),u=mr(a,l,s);return{sourceX:d.x,sourceY:d.y,targetX:u.x,targetY:u.y,sourcePosition:i,targetPosition:s}}function eC(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function mr(e,t,a=ae.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??Qa(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case ae.Top:return{x:n+l/2,y:r};case ae.Right:return{x:n+l,y:r+i/2};case ae.Bottom:return{x:n+l/2,y:r+i};case ae.Left:return{x:n,y:r+i/2}}}function tC(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function qf(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function bC(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let d=qf(s,t);r.has(d)||(l.push({id:d,color:s.color||a,...s}),r.add(d))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var yC=1e3,RT=10,ix={nodeOrigin:[0,0],nodeExtent:zi,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},DT={...ix,checkEquality:!0};function sx(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function wC(e,t,a){let o=sx(ix,a);for(let n of e.values())if(n.parentId)dx(n,e,t,o);else{let r=Tu(n,o.nodeOrigin),l=cl(n.extent)?n.extent:o.nodeExtent,i=ul(r,l,Qa(n));n.internals.positionAbsolute=i}}function zT(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function ux(e){return e==="manual"}function Vf(e,t,a,o={}){let n=sx(DT,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!ux(n.zIndexMode)?yC:0,s=e.length>0,d=!1;t.clear(),a.clear();for(let u of e){let f=l.get(u.id);if(n.checkEquality&&u===f?.internals.userNode)t.set(u.id,f);else{let c=Tu(u,n.nodeOrigin),p=cl(u.extent)?u.extent:n.nodeExtent,g=ul(c,p,Qa(u));f={...n.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:g,handleBounds:zT(u,f),z:vC(u,i,n.zIndexMode),userNode:u}},t.set(u.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),u.parentId&&dx(f,t,a,o,r),d||(d=u.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:d}}function PT(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function dx(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=sx(ix,o),d=e.parentId,u=t.get(d);if(!u){console.warn(`Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}PT(e,a),n&&!u.parentId&&u.internals.rootParentIndex===void 0&&s==="auto"&&(u.internals.rootParentIndex=++n.i,u.internals.z=u.internals.z+n.i*RT),n&&u.internals.rootParentIndex!==void 0&&(n.i=u.internals.rootParentIndex);let f=r&&!ux(s)?yC:0,{x:c,y:p,z:g}=OT(e,u,l,i,f,s),{positionAbsolute:y}=e.internals,w=c!==y.x||p!==y.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:c,y:p}:y,z:g}})}function vC(e,t,a){let o=Ka(e.zIndex)?e.zIndex:0;return ux(a)?o:o+(e.selected?t:0)}function OT(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=Qa(e),d=Tu(e,a),u=cl(e.extent)?ul(d,e.extent,s):d,f=ul({x:l+u.x,y:i+u.y},o,s);e.extent==="parent"&&(f=dC(f,s,t));let c=vC(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=c?p+1:c}}function Gf(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??Oi(i),d=$h(s,l.rect);r.set(l.parentId,{expandedRect:d,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let d=i.internals.positionAbsolute,u=Qa(i),f=i.origin??o,c=l.x<d.x?Math.round(Math.abs(d.x-l.x)):0,p=l.y<d.y?Math.round(Math.abs(d.y-l.y)):0,g=Math.max(u.width,Math.round(l.width)),y=Math.max(u.height,Math.round(l.height)),w=(g-u.width)*f[0],h=(y-u.height)*f[1];(c>0||p>0||w||h)&&(n.push({id:s,type:"position",position:{x:i.position.x-c+w,y:i.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+c,y:x.position.y+p}})})),(u.width<l.width||u.height<l.height||c||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(c?f[0]*c-w:0),height:y+(p?f[1]*p-h:0)}})}),n}function CC(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let d=[],u=window.getComputedStyle(i),{m22:f}=new window.DOMMatrixReadOnly(u.transform),c=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let y=Hf(p.nodeElement),w=g.measured.width!==y.width||g.measured.height!==y.height;if(!!(y.width&&y.height&&(w||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=cl(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let C=t.get(g.parentId);C&&(b=dC(b,y,C))}else m&&(b=ul(b,m,y));let S={...g,measured:y,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:W2("source",p.nodeElement,x,f,g.id),target:W2("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,S),g.parentId&&dx(S,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(d.push({id:g.id,type:"dimensions",dimensions:y}),g.expandParent&&g.parentId&&c.push({id:g.id,parentId:g.parentId,rect:Oi(S,n)}))}}if(c.length>0){let p=Gf(c,t,a,n);d.push(...p)}return{changes:d,updatedInternals:s}}async function SC({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function aC(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let d=o.get(l)||new Map;o.set(l,d.set(a,t))}}function cx(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},d=`${n}-${l}--${r}-${i}`,u=`${r}-${i}--${n}-${l}`;aC("source",s,u,e,n,l),aC("target",s,d,e,r,i),t.set(o.id,o)}}function LC(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:LC(a,t):!1}function oC(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function BT(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!LC(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function Bh({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function HT({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=Bi(r,t);return{x:l.x-r.x,y:l.y-r.y}}function _C({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,d={x:0,y:0},u=null,f=!1,c=null,p=!1,g=!1,y=null;function w({noDragClassName:x,handleSelector:m,domNode:b,isSelectable:S,nodeId:C,nodeClickDistance:v=0}){c=_t(b);function _({x:F,y:O}){let{nodeLookup:L,nodeExtent:M,snapGrid:N,snapToGrid:I,nodeOrigin:A,onNodeDrag:z,onSelectionDrag:V,onError:D,updateNodePositions:U}=t();r={x:F,y:O};let Z=!1,W=i.size>1,j=W&&M?Uh(Pi(i)):null,ne=W&&I?HT({dragItems:i,snapGrid:N,x:F,y:O}):null;for(let[ee,q]of i){if(!L.has(ee))continue;let Y={x:F-q.distance.x,y:O-q.distance.y};I&&(Y=ne?{x:Math.round(Y.x+ne.x),y:Math.round(Y.y+ne.y)}:Bi(Y,N));let re=null;if(W&&M&&!q.extent&&j){let{positionAbsolute:oe}=q.internals,xe=oe.x-j.x+M[0][0],be=oe.x+q.measured.width-j.x2+M[1][0],He=oe.y-j.y+M[0][1],K=oe.y+q.measured.height-j.y2+M[1][1];re=[[xe,He],[be,K]]}let{position:ue,positionAbsolute:te}=Kh({nodeId:ee,nextPosition:Y,nodeLookup:L,nodeExtent:re||M,nodeOrigin:A,onError:D});Z=Z||q.position.x!==ue.x||q.position.y!==ue.y,q.position=ue,q.internals.positionAbsolute=te}if(g=g||Z,!!Z&&(U(i,!0),y&&(o||z||!C&&V))){let[ee,q]=Bh({nodeId:C,dragItems:i,nodeLookup:L});o?.(y,i,ee,q),z?.(y,ee,q),C||V?.(y,q)}}async function k(){if(!u)return;let{transform:F,panBy:O,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[N,I]=Pf(d,u,L);(N!==0||I!==0)&&(r.x=(r.x??0)-N/F[2],r.y=(r.y??0)-I/F[2],await O({x:N,y:I})&&_(r)),l=requestAnimationFrame(k)}function T(F){let{nodeLookup:O,multiSelectionActive:L,nodesDraggable:M,transform:N,snapGrid:I,snapToGrid:A,selectNodesOnDrag:z,onNodeDragStart:V,onSelectionDragStart:D,unselectNodesAndEdges:U}=t();f=!0,(!z||!S)&&!L&&C&&(O.get(C)?.selected||U()),S&&z&&C&&e?.(C);let Z=Eu(F.sourceEvent,{transform:N,snapGrid:I,snapToGrid:A,containerBounds:u});if(r=Z,i=BT(O,M,Z,C),i.size>0&&(a||V||!C&&D)){let[W,j]=Bh({nodeId:C,dragItems:i,nodeLookup:O});a?.(F.sourceEvent,i,W,j),V?.(F.sourceEvent,W,j),C||D?.(F.sourceEvent,j)}}let E=df().clickDistance(v).on("start",F=>{let{domNode:O,nodeDragThreshold:L,transform:M,snapGrid:N,snapToGrid:I}=t();u=O?.getBoundingClientRect()||null,p=!1,g=!1,y=F.sourceEvent,L===0&&T(F),r=Eu(F.sourceEvent,{transform:M,snapGrid:N,snapToGrid:I,containerBounds:u}),d=$a(F.sourceEvent,u)}).on("drag",F=>{let{autoPanOnNodeDrag:O,transform:L,snapGrid:M,snapToGrid:N,nodeDragThreshold:I,nodeLookup:A}=t(),z=Eu(F.sourceEvent,{transform:L,snapGrid:M,snapToGrid:N,containerBounds:u});if(y=F.sourceEvent,(F.sourceEvent.type==="touchmove"&&F.sourceEvent.touches.length>1||C&&!A.has(C))&&(p=!0),!p){if(!s&&O&&f&&(s=!0,k()),!f){let V=$a(F.sourceEvent,u),D=V.x-d.x,U=V.y-d.y;Math.sqrt(D*D+U*U)>I&&T(F)}(r.x!==z.xSnapped||r.y!==z.ySnapped)&&i&&f&&(d=$a(F.sourceEvent,u),_(z))}}).on("end",F=>{if(!f||p){p&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,f=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:O,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:N}=t();if(g&&(L(i,!1),g=!1),n||M||!C&&N){let[I,A]=Bh({nodeId:C,dragItems:i,nodeLookup:O,dragging:!1});n?.(F.sourceEvent,i,I,A),M?.(F.sourceEvent,I,A),C||N?.(F.sourceEvent,A)}}}).filter(F=>{let O=F.target;return!F.button&&(!x||!oC(O,`.${x}`,b))&&(!m||oC(O,m,b))});c.call(E)}function h(){c?.on(".drag",null)}return{update:w,destroy:h}}function FT(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())Au(n,Oi(r))>0&&o.push(r);return o}var UT=250;function qT(e,t,a,o){let n=[],r=1/0,l=FT(e,a,t+UT);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let d of s){if(o.nodeId===d.nodeId&&o.type===d.type&&o.id===d.id)continue;let{x:u,y:f}=mr(i,d,d.position,!0),c=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(f-e.y,2));c>t||(c<r?(n=[{...d,x:u,y:f}],r=c):c===r&&n.push({...d,x:u,y:f}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function kC(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(d=>d.id===a):i?.[0])??null;return s&&r?{...s,...mr(l,s,s.position,!0)}:s}function IC(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function VT(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var MC=()=>!0;function GT(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:d,autoPanOnConnect:u,flowId:f,panBy:c,cancelConnection:p,onConnectStart:g,onConnect:y,onConnectEnd:w,isValidConnection:h=MC,onReconnectEnd:x,updateConnection:m,getTransform:b,getFromHandle:S,autoPanSpeed:C,dragThreshold:v=1,handleDomNode:_}){let k=ox(e.target),T=0,E,{x:F,y:O}=$a(e),L=IC(r,_),M=i?.getBoundingClientRect(),N=!1;if(!M||!L)return;let I=kC(n,L,o,s,t);if(!I)return;let A=$a(e,M),z=!1,V=null,D=!1,U=null;function Z(){if(!u||!M)return;let[ue,te]=Pf(A,M,C);c({x:ue,y:te}),T=requestAnimationFrame(Z)}let W={...I,nodeId:n,type:L,position:I.position},j=s.get(n),ee={inProgress:!0,isValid:null,from:mr(j,W,ae.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:j,to:A,toHandle:null,toPosition:Z2[W.position],toNode:null,pointer:A};function q(){N=!0,m(ee),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&q();function Y(ue){if(!N){let{x:K,y:_e}=$a(ue),Ae=K-F,bt=_e-O;if(!(Ae*Ae+bt*bt>v*v))return;q()}if(!S()||!W){re(ue);return}let te=b();A=$a(ue,M),E=qT(Hi(A,te,!1,[1,1]),a,s,W),z||(Z(),z=!0);let oe=NC(ue,{handle:E,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:h,doc:k,lib:d,flowId:f,nodeLookup:s});U=oe.handleDomNode,V=oe.connection,D=VT(!!E,oe.isValid);let xe=s.get(n),be=xe?mr(xe,W,ae.Left,!0):ee.from,He={...ee,from:be,isValid:D,to:oe.toHandle&&D?dl({x:oe.toHandle.x,y:oe.toHandle.y},te):A,toHandle:oe.toHandle,toPosition:D&&oe.toHandle?oe.toHandle.position:Z2[W.position],toNode:oe.toHandle?s.get(oe.toHandle.nodeId):null,pointer:A};m(He),ee=He}function re(ue){if(!("touches"in ue&&ue.touches.length>0)){if(N){(E||U)&&V&&D&&y?.(V);let{inProgress:te,...oe}=ee,xe={...oe,toPosition:ee.toHandle?ee.toPosition:null};w?.(ue,xe),r&&x?.(ue,xe)}p(),cancelAnimationFrame(T),z=!1,D=!1,V=null,U=null,k.removeEventListener("mousemove",Y),k.removeEventListener("mouseup",re),k.removeEventListener("touchmove",Y),k.removeEventListener("touchend",re)}}k.addEventListener("mousemove",Y),k.addEventListener("mouseup",re),k.addEventListener("touchmove",Y),k.addEventListener("touchend",re)}function NC(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:d=MC,nodeLookup:u}){let f=r==="target",c=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=$a(e),y=l.elementFromPoint(p,g),w=y?.classList.contains(`${i}-flow__handle`)?y:c,h={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let x=IC(void 0,w),m=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),S=w.classList.contains("connectable"),C=w.classList.contains("connectableend");if(!m||!x)return h;let v={source:f?m:o,sourceHandle:f?b:n,target:f?o:m,targetHandle:f?n:b};h.connection=v;let k=S&&C&&(a===pr.Strict?f&&x==="source"||!f&&x==="target":m!==o||b!==n);h.isValid=k&&d(v),h.toHandle=kC(m,x,b,u,a,!0)}return h}var Xf={onPointerDown:GT,isValid:NC};function EC({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=_t(e);function r({translateExtent:i,width:s,height:d,zoomStep:u=1,pannable:f=!0,zoomable:c=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),S=m.sourceEvent.ctrlKey&&Fi()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*u,v=b[2]*Math.pow(2,C*S);t.scaleTo(v)},y=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(y=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-y[0],S[1]-y[1]];y=S;let v=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),_={x:b[0]-C[0]*v,y:b[1]-C[1]*v},k=[[0,0],[s,d]];t.setViewportConstrained({x:_.x,y:_.y,zoom:b[2]},k,i)},x=Tf().on("start",w).on("zoom",f?h:null).on("zoom.wheel",c?g:null);n.call(x,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:Wt}}var Yf=e=>({x:e.x,y:e.y,zoom:e.k}),Hh=({x:e,y:t,zoom:a})=>sl.translate(e,t).scale(a),fr=(e,t)=>e.target.closest(`.${t}`),TC=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),XT=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Fh=(e,t=0,a=XT,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},AC=e=>{let t=e.ctrlKey&&Fi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function YT({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:d}){return u=>{if(fr(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(u.ctrlKey&&l){let w=Wt(u),h=AC(u),x=f*Math.pow(2,h);o.scaleTo(a,x,w,u);return}let c=u.deltaMode===1?20:1,p=n===go.Vertical?0:u.deltaX*c,g=n===go.Horizontal?0:u.deltaY*c;!Fi()&&u.shiftKey&&n!==go.Vertical&&(p=u.deltaY*c,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let y=Yf(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(u,y):(e.isPanScrolling=!0,i?.(u,y)),e.panScrollTimeout=setTimeout(()=>{d?.(u,y),e.isPanScrolling=!1},150)}}function ZT({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=fr(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function jT({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=Yf(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function WT({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&TC(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,Yf(r.transform))}}function KT({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&TC(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=Yf(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function $T({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:d,lib:u,connectionInProgress:f}){return c=>{let p=t||a,g=o&&c.ctrlKey,y=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(fr(c,`${u}-flow__node`)||fr(c,`${u}-flow__edge`)||fr(c,`${u}-flow__selection`)||fr(c,`${u}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!l&&!o||i||f&&!y||fr(c,s)&&y||fr(c,d)&&(!y||r&&y&&!t)||!o&&c.ctrlKey&&y)return!1;if(!o&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!g&&y||!n&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(n)&&!n.includes(c.button)&&c.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||y||e)&&w}}function RC({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let d={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),f=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(O=>{let L=O[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=Tf().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=_t(e).call(p);b({x:n.x,y:n.y,zoom:Di(n.zoom,t,a)},[[0,0],[u.width,u.height]],o);let y=g.on("wheel.zoom"),w=g.on("dblclick.zoom");p.wheelDelta(AC);async function h(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?bn:rl).transform(Fh(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}function x({noWheelClassName:O,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:N,panOnScroll:I,panOnDrag:A,panOnScrollMode:z,panOnScrollSpeed:V,preventScrolling:D,zoomOnPinch:U,zoomOnScroll:Z,zoomOnDoubleClick:W,panActivationKeyPressed:j=!1,zoomActivationKeyPressed:ne,lib:ee,onTransformChange:q,connectionInProgress:Y,paneClickDistance:re,selectionOnDrag:ue}){N&&!d.isZoomingOrPanning&&m();let te=I&&!ne&&!N;p.clickDistance(ue?1/0:!Ka(re)||re<0?0:re);let oe=te?YT({zoomPanValues:d,noWheelClassName:O,d3Selection:g,d3Zoom:p,panOnScrollMode:z,panOnScrollSpeed:V,zoomOnPinch:U,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):ZT({noWheelClassName:O,preventScrolling:D,d3ZoomHandler:y});g.on("wheel.zoom",oe,{passive:!1});let xe=jT({zoomPanValues:d,onDraggingChange:s,onPanZoomStart:l});p.on("start",xe);let be=WT({zoomPanValues:d,panOnDrag:A,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:q});p.on("zoom",be);let He=KT({zoomPanValues:d,panOnDrag:A,panOnScroll:I,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});p.on("end",He);let K=$T({panActivationKeyPressed:j,zoomActivationKeyPressed:ne,panOnDrag:A,zoomOnScroll:Z,panOnScroll:I,zoomOnDoubleClick:W,zoomOnPinch:U,userSelectionActive:N,noPanClassName:L,noWheelClassName:O,lib:ee,connectionInProgress:Y});p.filter(K),W?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(O,L,M){let N=Hh(O),I=p?.constrain()(N,L,M);return I&&await h(I),I}async function S(O,L){let M=Hh(O);return await h(M,L),M}function C(O){if(g){let L=Hh(O),M=g.property("__zoom");(M.k!==O.zoom||M.x!==O.x||M.y!==O.y)&&p?.transform(g,L,null,{sync:!0})}}function v(){let O=g?Nu(g.node()):{x:0,y:0,k:1};return{x:O.x,y:O.y,zoom:O.k}}async function _(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?bn:rl).scaleTo(Fh(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}async function k(O,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?bn:rl).scaleBy(Fh(g,L?.duration,L?.ease,()=>M(!0)),O)}):!1}function T(O){p?.scaleExtent(O)}function E(O){p?.translateExtent(O)}function F(O){let L=!Ka(O)||O<0?0:O;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:S,setViewportConstrained:b,getViewport:v,scaleTo:_,scaleBy:k,setScaleExtent:T,setTranslateExtent:E,syncViewport:C,setClickDistance:F}}var gr;(function(e){e.Line="line",e.Handle="handle"})(gr||(gr={}));function QT({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function nC(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function dr(e,t){return Math.max(0,t-e)}function cr(e,t){return Math.max(0,e-t)}function Rf(e,t,a){return Math.max(0,t-e,e-a)}function rC(e,t){return e?!t:t}function JT(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:d}=t,{isHorizontal:u,isVertical:f}=t,c=u&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:y,maxWidth:w,minHeight:h,maxHeight:x}=o,{x:m,y:b,width:S,height:C,aspectRatio:v}=e,_=Math.floor(u?p-e.pointerX:0),k=Math.floor(f?g-e.pointerY:0),T=S+(s?-_:_),E=C+(d?-k:k),F=-r[0]*S,O=-r[1]*C,L=Rf(T,y,w),M=Rf(E,h,x);if(l){let A=0,z=0;s&&_<0?A=dr(m+_+F,l[0][0]):!s&&_>0&&(A=cr(m+T+F,l[1][0])),d&&k<0?z=dr(b+k+O,l[0][1]):!d&&k>0&&(z=cr(b+E+O,l[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(i){let A=0,z=0;s&&_>0?A=cr(m+_,i[0][0]):!s&&_<0&&(A=dr(m+T,i[1][0])),d&&k>0?z=cr(b+k,i[0][1]):!d&&k<0&&(z=dr(b+E,i[1][1])),L=Math.max(L,A),M=Math.max(M,z)}if(n){if(u){let A=Rf(T/v,h,x)*v;if(L=Math.max(L,A),l){let z=0;!s&&!d||s&&!d&&c?z=cr(b+O+T/v,l[1][1])*v:z=dr(b+O+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,z)}if(i){let z=0;!s&&!d||s&&!d&&c?z=dr(b+T/v,i[1][1])*v:z=cr(b+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,z)}}if(f){let A=Rf(E*v,y,w)/v;if(M=Math.max(M,A),l){let z=0;!s&&!d||d&&!s&&c?z=cr(m+E*v+F,l[1][0])/v:z=dr(m+(d?k:-k)*v+F,l[0][0])/v,M=Math.max(M,z)}if(i){let z=0;!s&&!d||d&&!s&&c?z=dr(m+E*v,i[1][0])/v:z=cr(m+(d?k:-k)*v,i[0][0])/v,M=Math.max(M,z)}}}k=k+(k<0?M:-M),_=_+(_<0?L:-L),n&&(c?T>E*v?k=(rC(s,d)?-_:_)/v:_=(rC(s,d)?-k:k)*v:u?(k=_/v,d=s):(_=k*v,s=d));let N=s?m+_:m,I=d?b+k:b;return{width:S+(s?-_:_),height:C+(d?-k:k),x:r[0]*_*(s?-1:1)+N,y:r[1]*k*(d?-1:1)+I}}var DC={width:0,height:0,x:0,y:0},e3={...DC,pointerX:0,pointerY:0,aspectRatio:1};function t3(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function zC({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=_t(e),l={controlDirection:nC("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:d,boundaries:u,keepAspectRatio:f,resizeDirection:c,onResizeStart:p,onResize:g,onResizeEnd:y,shouldResize:w}){let h={...DC},x={...e3};l={boundaries:u,resizeDirection:c,keepAspectRatio:f,controlDirection:nC(d)};let m,b=null,S=[],C,v,_,k=!1,T=df().on("start",E=>{let{nodeLookup:F,transform:O,snapGrid:L,snapToGrid:M,nodeOrigin:N,paneDomNode:I}=a();if(m=F.get(t),!m)return;b=I?.getBoundingClientRect()??null;let{xSnapped:A,ySnapped:z}=Eu(E.sourceEvent,{transform:O,snapGrid:L,snapToGrid:M,containerBounds:b});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:A,pointerY:z,aspectRatio:h.width/h.height},C=void 0,v=cl(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=F.get(m.parentId)),C&&m.extent==="parent"&&(v=[[0,0],[C.measured.width,C.measured.height]]),S=[],_=void 0;for(let[V,D]of F)if(D.parentId===t&&(S.push({id:V,position:{...D.position},extent:D.extent}),D.extent==="parent"||D.expandParent)){let U=t3(D,m,D.origin??N);_?_=[[Math.min(U[0][0],_[0][0]),Math.min(U[0][1],_[0][1])],[Math.max(U[1][0],_[1][0]),Math.max(U[1][1],_[1][1])]]:_=U}p?.(E,{...h})}).on("drag",E=>{let{transform:F,snapGrid:O,snapToGrid:L,nodeOrigin:M}=a(),N=Eu(E.sourceEvent,{transform:F,snapGrid:O,snapToGrid:L,containerBounds:b}),I=[];if(!m)return;let{x:A,y:z,width:V,height:D}=h,U={},Z=m.origin??M,{width:W,height:j,x:ne,y:ee}=JT(x,l.controlDirection,N,l.boundaries,l.keepAspectRatio,Z,v,_),q=W!==V,Y=j!==D,re=ne!==A&&q,ue=ee!==z&&Y;if(!re&&!ue&&!q&&!Y)return;if((re||ue||Z[0]===1||Z[1]===1)&&(U.x=re?ne:h.x,U.y=ue?ee:h.y,h.x=U.x,h.y=U.y,S.length>0)){let be=ne-A,He=ee-z;for(let K of S)K.position={x:K.position.x-be+Z[0]*(W-V),y:K.position.y-He+Z[1]*(j-D)},I.push(K)}if((q||Y)&&(U.width=q&&(!l.resizeDirection||l.resizeDirection==="horizontal")?W:h.width,U.height=Y&&(!l.resizeDirection||l.resizeDirection==="vertical")?j:h.height,h.width=U.width,h.height=U.height),C&&m.expandParent){let be=Z[0]*(U.width??0);U.x&&U.x<be&&(h.x=be,x.x=x.x-(U.x-be));let He=Z[1]*(U.height??0);U.y&&U.y<He&&(h.y=He,x.y=x.y-(U.y-He))}let te=QT({width:h.width,prevWidth:V,height:h.height,prevHeight:D,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),oe={...h,direction:te};w?.(E,oe)!==!1&&(k=!0,g?.(E,oe),o(U,I))}).on("end",E=>{k&&(y?.(E,{...h}),n?.({...h}),k=!1)});r.call(T)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var jC=R(J(),1),WC=R(VC(),1);var XC={},GC=e=>{let t,a=new Set,o=(u,f)=>{let c=typeof u=="function"?u(t):u;if(!Object.is(c,t)){let p=t;t=f??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>d,subscribe:u=>(a.add(u),()=>a.delete(u)),destroy:()=>{(XC.env?XC.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},d=t=e(o,n,s);return s},YC=e=>e?GC(e):GC;var{useDebugValue:y3}=jC.default,{useSyncExternalStoreWithSelector:w3}=WC.default,v3=e=>e;function px(e,t=v3,a){let o=w3(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return y3(o),o}var ZC=(e,t)=>{let a=YC(e),o=(n,r=t)=>px(a,n,r);return Object.assign(o,a),o},KC=(e,t)=>e?ZC(e,t):ZC;function Ue(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var C3=R(Io()),$f=(0,B.createContext)(null),S3=$f.Provider,SS=Ea.error001("react");function ye(e,t){let a=(0,B.useContext)($f);if(a===null)throw new Error(SS);return px(a,e,t)}function $e(){let e=(0,B.useContext)($f);if(e===null)throw new Error(SS);return(0,B.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var $C={display:"none"},L3={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},LS="react-flow__node-desc",_S="react-flow__edge-desc",_3="react-flow__aria-live",k3=e=>e.ariaLiveMessage,I3=e=>e.ariaLabelConfig;function M3({rfId:e}){let t=ye(k3);return(0,P.jsx)("div",{id:`${_3}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:L3,children:t})}function N3({rfId:e,disableKeyboardA11y:t}){let a=ye(I3);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{id:`${LS}-${e}`,style:$C,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,P.jsx)("div",{id:`${_S}-${e}`,style:$C,children:a["edge.a11yDescription.default"]}),!t&&(0,P.jsx)(M3,{rfId:e})]})}var Qf=(0,B.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,P.jsx)("div",{className:it(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});Qf.displayName="Panel";var QC="https://reactflow.dev?utm_source=attribution";function E3({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,P.jsx)(Qf,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${QC}`,children:(0,P.jsx)("a",{href:QC,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var T3=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},jf=e=>e.id;function A3(e,t){return Ue(e.selectedNodes.map(jf),t.selectedNodes.map(jf))&&Ue(e.selectedEdges.map(jf),t.selectedEdges.map(jf))}function R3({onSelectionChange:e}){let t=$e(),{selectedNodes:a,selectedEdges:o}=ye(T3,A3);return(0,B.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var D3=e=>!!e.onSelectionChangeHandlers;function z3({onSelectionChange:e}){let t=ye(D3);return e||t?(0,P.jsx)(R3,{onSelectionChange:e}):null}var kS=[0,0],P3={x:0,y:0,zoom:1},O3=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],JC=[...O3,"rfId"],B3=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),eS={translateExtent:zi,nodeOrigin:kS,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function H3(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=ye(B3,Ue),d=$e();(0,B.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{u.current=eS,i()}),[]);let u=(0,B.useRef)(eS);return(0,B.useEffect)(()=>{for(let f of JC){let c=e[f],p=u.current[f];c!==p&&(typeof e[f]>"u"||(f==="nodes"?t(c):f==="edges"?a(c):f==="minZoom"?o(c):f==="maxZoom"?n(c):f==="translateExtent"?r(c):f==="nodeExtent"?l(c):f==="ariaLabelConfig"?d.setState({ariaLabelConfig:pC(c)}):f==="fitView"?d.setState({fitViewQueued:c}):f==="fitViewOptions"?d.setState({fitViewOptions:c}):d.setState({[f]:c})))}u.current=e},JC.map(f=>e[f])),null}function tS(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function F3(e){let[t,a]=(0,B.useState)(e==="system"?null:e);return(0,B.useEffect)(()=>{if(e!=="system"){a(e);return}let o=tS(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:tS()?.matches?"dark":"light"}var aS=typeof document<"u"?document:null;function zu(e=null,t={target:aS,actInsideInputWithModifier:!0}){let[a,o]=(0,B.useState)(!1),n=(0,B.useRef)(!1),r=(0,B.useRef)(new Set([])),[l,i]=(0,B.useMemo)(()=>{if(e!==null){let d=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),u=d.reduce((f,c)=>f.concat(...c),[]);return[d,u]}return[[],[]]},[e]);return(0,B.useEffect)(()=>{let s=t?.target??aS,d=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!d)&&nx(p))return!1;let y=nS(p.code,i);if(r.current.add(p[y]),oS(l,r.current,!1)){let w=p.composedPath?.()?.[0]||p.target,h=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=nS(p.code,i);oS(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},c=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",u),s?.addEventListener("keyup",f),window.addEventListener("blur",c),window.addEventListener("contextmenu",c),()=>{s?.removeEventListener("keydown",u),s?.removeEventListener("keyup",f),window.removeEventListener("blur",c),window.removeEventListener("contextmenu",c)}}},[e,o]),a}function oS(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function nS(e,t){return t.includes(e)?"code":"key"}var U3=()=>{let e=$e();return(0,B.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Ru(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),d={x:t.x-i,y:t.y-s},u=a.snapGrid??n,f=a.snapToGrid??r;return Hi(d,o,f,u)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=dl(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function IS(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)q3(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function q3(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function xx(e,t){return IS(e,t)}function bx(e,t){return IS(e,t)}function fl(e,t){return{id:e,type:"select",selected:t}}function Vi(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(fl(r.id,l)))}return o}function rS({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function lS(e){return{id:e.id,type:"remove"}}var V3=Jh("React Flow","https://reactflow.dev/");function G3(e,t,a={}){return hC(e,t,{...a,onError:a.onError??V3})}var iS=e=>lC(e),X3=e=>Yh(e);function MS(e){return(0,B.forwardRef)(e)}var NS=typeof window<"u"?B.useLayoutEffect:B.useEffect;function sS(e){let[t,a]=(0,B.useState)(BigInt(0)),[o]=(0,B.useState)(()=>Y3(()=>a(n=>n+BigInt(1))));return NS(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function Y3(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var ES=(0,B.createContext)(null);function Z3({children:e}){let t=$e(),a=(0,B.useCallback)(i=>{let{nodes:s=[],setNodes:d,hasDefaultNodes:u,onNodesChange:f,nodeLookup:c,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),y=s;for(let h of i)y=typeof h=="function"?h(y):h;let w=rS({items:y,lookup:c});for(let h of g.values())w=h(w);u&&d(y),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=sS(a),n=(0,B.useCallback)(i=>{let{edges:s=[],setEdges:d,hasDefaultEdges:u,onEdgesChange:f,edgeLookup:c}=t.getState(),p=s;for(let g of i)p=typeof g=="function"?g(p):g;u?d(p):f&&f(rS({items:p,lookup:c}))},[]),r=sS(n),l=(0,B.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,P.jsx)(ES.Provider,{value:l,children:e})}function j3(){let e=(0,B.useContext)(ES);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var W3=e=>!!e.panZoom;function Ta(){let e=U3(),t=$e(),a=j3(),o=ye(W3),n=(0,B.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),l=f=>{a.nodeQueue.push(f)},i=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState(),g=iS(f)?f:c.get(f.id),y=g.parentId?tx(g.position,g.measured,g.parentId,c,p):g.position,w={...g,position:y,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return Oi(w)},d=(f,c,p={replace:!1})=>{l(g=>g.map(y=>{if(y.id===f){let w=typeof c=="function"?c(y):c;return p.replace&&iS(w)?w:{...y,...w}}return y}))},u=(f,c,p={replace:!1})=>{i(g=>g.map(y=>{if(y.id===f){let w=typeof c=="function"?c(y):c;return p.replace&&X3(w)?w:{...y,...w}}return y}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(c=>({...c}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:l,setEdges:i,addNodes:f=>{let c=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...c])},addEdges:f=>{let c=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...c])},toObject:()=>{let{nodes:f=[],edges:c=[],transform:p}=t.getState(),[g,y,w]=p;return{nodes:f.map(h=>({...h})),edges:c.map(h=>({...h})),viewport:{x:g,y,zoom:w}}},deleteElements:async({nodes:f=[],edges:c=[]})=>{let{nodes:p,edges:g,onNodesDelete:y,onEdgesDelete:w,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:S,edges:C}=await uC({nodesToRemove:f,edgesToRemove:c,nodes:p,edges:g,onBeforeDelete:b}),v=C.length>0,_=S.length>0;if(v){let k=C.map(lS);w?.(C),x(k)}if(_){let k=S.map(lS);y?.(S),h(k)}return(_||v)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(f,c=!0,p)=>{let g=Qh(f),y=g?f:s(f),w=p!==void 0;return y?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=Oi(w?h:x),b=Au(m,y);return c&&b>0||b>=m.width*m.height||b>=y.width*y.height}):[]},isNodeIntersecting:(f,c,p=!0)=>{let y=Qh(f)?f:s(f);if(!y)return!1;let w=Au(y,c);return p&&w>0||w>=c.width*c.height||w>=y.width*y.height},updateNode:d,updateNodeData:(f,c,p={replace:!1})=>{d(f,g=>{let y=typeof c=="function"?c(g):c;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},updateEdge:u,updateEdgeData:(f,c,p={replace:!1})=>{u(f,g=>{let y=typeof c=="function"?c(g):c;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},getNodesBounds:f=>{let{nodeLookup:c,nodeOrigin:p}=t.getState();return Wh(f,{nodeLookup:c,nodeOrigin:p})},getHandleConnections:({type:f,id:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${c?`-${c}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:c,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?c?`-${f}-${c}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let c=t.getState().fitViewResolver??fC();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:c}),a.nodeQueue.push(p=>[...p]),c.promise}}},[]);return(0,B.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var uS=e=>e.selected,K3=typeof window<"u"?window:void 0;function $3({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=$e(),{deleteElements:o}=Ta(),n=zu(e,{actInsideInputWithModifier:!1}),r=zu(t,{target:K3});(0,B.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter(uS),edges:l.filter(uS)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,B.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function Q3(e){let t=$e();(0,B.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Hf(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ea.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var Jf={position:"absolute",width:"100%",height:"100%",top:0,left:0},J3=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function e6({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=go.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:d,translateExtent:u,minZoom:f,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:g=!0,children:y,noWheelClassName:w,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:S}){let C=$e(),v=(0,B.useRef)(null),{userSelectionActive:_,lib:k,connectionInProgress:T}=ye(J3,Ue),E=zu(p),F=(0,B.useRef)();Q3(v);let O=(0,B.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||C.setState({transform:L})},[x,m]);return(0,B.useEffect)(()=>{if(v.current){F.current=RC({domNode:v.current,minZoom:f,maxZoom:c,translateExtent:u,viewport:d,onDraggingChange:I=>C.setState(A=>A.paneDragging===I?A:{paneDragging:I}),onPanZoomStart:(I,A)=>{let{onViewportChangeStart:z,onMoveStart:V}=C.getState();V?.(I,A),z?.(A)},onPanZoom:(I,A)=>{let{onViewportChange:z,onMove:V}=C.getState();V?.(I,A),z?.(A)},onPanZoomEnd:(I,A)=>{let{onViewportChangeEnd:z,onMoveEnd:V}=C.getState();V?.(I,A),z?.(A)}});let{x:L,y:M,zoom:N}=F.current.getViewport();return C.setState({panZoom:F.current,transform:[L,M,N],domNode:v.current.closest(".react-flow")}),()=>{F.current?.destroy()}}},[]),(0,B.useEffect)(()=>{F.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:E,preventScrolling:g,noPanClassName:h,userSelectionActive:_,noWheelClassName:w,lib:k,onTransformChange:O,connectionInProgress:T,selectionOnDrag:S,paneClickDistance:b})},[e,t,a,o,n,r,l,i,s,E,g,h,_,w,k,O,T,S,b]),(0,P.jsx)("div",{className:"react-flow__renderer",ref:v,style:Jf,children:y})}var t6=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function a6(){let{userSelectionActive:e,userSelectionRect:t}=ye(t6,Ue);return e&&t?(0,P.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var mx=(e,t)=>a=>{a.target===t.current&&e?.(a)},o6=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function n6({isSelecting:e,selectionKeyPressed:t,selectionMode:a=wn.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:d,onPaneContextMenu:u,onPaneScroll:f,onPaneMouseEnter:c,onPaneMouseMove:p,onPaneMouseLeave:g,children:y}){let w=(0,B.useRef)(0),h=$e(),{userSelectionActive:x,elementsSelectable:m,dragging:b,panBy:S,autoPanSpeed:C}=ye(o6,Ue),v=m&&(e||x),_=(0,B.useRef)(null),k=(0,B.useRef)(),T=(0,B.useRef)(new Set),E=(0,B.useRef)(new Set),F=(0,B.useRef)(!1),O=(0,B.useRef)(!1),L=(0,B.useRef)({x:0,y:0}),M=(0,B.useRef)(!1),N=q=>{if(O.current||F.current||h.getState().connection.inProgress){O.current=!1,F.current=!1;return}d?.(q),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},I=q=>{if(Array.isArray(o)&&o?.includes(2)){q.preventDefault();return}u?.(q)},A=f?q=>f(q):void 0,z=q=>{O.current&&(q.stopPropagation(),O.current=!1)},V=q=>{if(q.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Y,transform:re}=h.getState();if(k.current=Y?.getBoundingClientRect(),!k.current)return;let ue=q.target===_.current;if(!ue&&!!q.target.closest(".nokey")||!e||!(l&&ue||t)||q.button!==0||!q.isPrimary)return;q.target?.setPointerCapture?.(q.pointerId),O.current=!1;let{x:xe,y:be}=$a(q.nativeEvent,k.current),He=Hi({x:xe,y:be},re);h.setState({userSelectionRect:{width:0,height:0,startX:He.x,startY:He.y,x:xe,y:be}}),ue||(q.stopPropagation(),q.preventDefault())};function D(q,Y){let{userSelectionRect:re}=h.getState();if(!re)return;let{transform:ue,nodeLookup:te,edgeLookup:oe,connectionLookup:xe,triggerNodeChanges:be,triggerEdgeChanges:He,defaultEdgeOptions:K}=h.getState(),_e={x:re.startX,y:re.startY},{x:Ae,y:bt}=dl(_e,ue),oa={startX:_e.x,startY:_e.y,x:q<Ae?q:Ae,y:Y<bt?Y:bt,width:Math.abs(q-Ae),height:Math.abs(Y-bt)},Lo=T.current,Zo=E.current;T.current=new Set(zf(te,oa,ue,a===wn.Partial,!0).map(ya=>ya.id)),E.current=new Set;let jo=K?.selectable??!0;for(let ya of T.current){let $=xe.get(ya);if($)for(let{edgeId:qe}of $.values()){let nt=oe.get(qe);nt&&(nt.selectable??jo)&&E.current.add(qe)}}if(!ax(Lo,T.current)){let ya=Vi(te,T.current,!0);be(ya)}if(!ax(Zo,E.current)){let ya=Vi(oe,E.current);He(ya)}h.setState({userSelectionRect:oa,userSelectionActive:!0,nodesSelectionActive:!1})}function U(){if(!n||!k.current)return;let[q,Y]=Pf(L.current,k.current,C);S({x:q,y:Y}).then(re=>{if(!O.current||!re){w.current=requestAnimationFrame(U);return}let{x:ue,y:te}=L.current;D(ue,te),w.current=requestAnimationFrame(U)})}let Z=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,B.useEffect)(()=>()=>Z(),[]);let W=q=>{let{userSelectionRect:Y,transform:re,resetSelectedElements:ue}=h.getState();if(!k.current||!Y)return;let{x:te,y:oe}=$a(q.nativeEvent,k.current);L.current={x:te,y:oe};let xe=dl({x:Y.startX,y:Y.startY},re);if(!O.current){let be=t?0:r;if(Math.hypot(te-xe.x,oe-xe.y)<=be)return;ue(),i?.(q)}O.current=!0,M.current||(U(),M.current=!0),D(te,oe)},j=q=>{if(!v){q.target===_.current&&h.getState().connection.inProgress&&(F.current=!0);return}q.button===0&&(q.target?.releasePointerCapture?.(q.pointerId),!x&&q.target===_.current&&h.getState().userSelectionRect&&N?.(q),h.setState({userSelectionActive:!1,userSelectionRect:null}),O.current&&(s?.(q),h.setState({nodesSelectionActive:T.current.size>0})),Z())},ne=q=>{q.target?.releasePointerCapture?.(q.pointerId),Z()},ee=o===!0||Array.isArray(o)&&o.includes(0);return(0,P.jsxs)("div",{className:it(["react-flow__pane",{draggable:ee,dragging:b,selection:e}]),onClick:v?void 0:mx(N,_),onContextMenu:mx(I,_),onWheel:mx(A,_),onPointerEnter:v?void 0:c,onPointerMove:v?W:p,onPointerUp:j,onPointerCancel:v?ne:void 0,onPointerDownCapture:v?V:void 0,onClickCapture:v?z:void 0,onPointerLeave:g,ref:_,style:Jf,children:[y,(0,P.jsx)(a6,{})]})}function hx({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),d=i.get(e);if(!d){s?.("012",Ea.error012(e));return}t.setState({nodesSelectionActive:!1}),d.selected?(a||d.selected&&l)&&(r({nodes:[d],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function TS({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=$e(),[s,d]=(0,B.useState)(!1),u=(0,B.useRef)();return(0,B.useEffect)(()=>{if(!t)return u.current=_C({getStoreItems:()=>i.getState(),onNodeMouseDown:f=>{hx({id:f,store:i,nodeRef:e})},onDragStart:()=>{d(!0)},onDragStop:()=>{d(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,i,e]),(0,B.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var r6=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function AS(){let e=$e();return(0,B.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:d,nodeOrigin:u}=e.getState(),f=new Map,c=r6(l),p=n?r[0]:5,g=n?r[1]:5,y=a.direction.x*p*a.factor,w=a.direction.y*g*a.factor;for(let[,h]of d){if(!c(h))continue;let x={x:h.internals.positionAbsolute.x+y,y:h.internals.positionAbsolute.y+w};n&&(x=Bi(x,r));let{position:m,positionAbsolute:b}=Kh({nodeId:h.id,nextPosition:x,nodeLookup:d,nodeExtent:o,nodeOrigin:u,onError:i});h.position=m,h.internals.positionAbsolute=b,f.set(h.id,h)}s(f)},[])}var yx=(0,B.createContext)(null),l6=yx.Provider;yx.Consumer;var RS=()=>(0,B.useContext)(yx),i6=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),DS=(0,B.createContext)(null);function s6({children:e}){let t=ye(i6,Ue);return(0,P.jsx)(DS.Provider,{value:t,children:e})}function u6(){let e=(0,B.useContext)(DS);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var d6={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},c6=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:d}=l;if(!i&&!n)return d6;let u=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:u,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===pr.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:u&&d}};function f6({type:e="source",position:t=ae.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:d,onMouseDown:u,onTouchStart:f,...c},p){let g=l||null,y=e==="target",w=$e(),h=RS(),{connectOnClick:x,noPanClassName:m,rfId:b}=u6(),{connectingFrom:S,connectingTo:C,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:k,clickConnectionInProcess:T,valid:E}=ye(c6(h,g,e),Ue);h||w.getState().onError?.("010",Ea.error010());let F=M=>{let{defaultEdgeOptions:N,onConnect:I,hasDefaultEdges:A}=w.getState(),z={...N,...M};if(A){let{edges:V,setEdges:D,onError:U}=w.getState();D(G3(z,V,{onError:U}))}I?.(z),i?.(z)},O=M=>{if(!h)return;let N=rx(M.nativeEvent);if(n&&(N&&M.button===0||!N)){let I=w.getState();Xf.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:g,nodeId:h,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...A)=>w.getState().onConnectEnd?.(...A),updateConnection:I.updateConnection,onConnect:F,isValidConnection:a||((...A)=>w.getState().isValidConnection?.(...A)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}N?u?.(M):f?.(M)},L=M=>{let{onClickConnectStart:N,onClickConnectEnd:I,connectionClickStartHandle:A,connectionMode:z,isValidConnection:V,lib:D,rfId:U,nodeLookup:Z,connection:W}=w.getState();if(!h||!A&&!n)return;if(!A){N?.(M.nativeEvent,{nodeId:h,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let j=ox(M.target),ne=a||V,{connection:ee,isValid:q}=Xf.isValid(M.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:z,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:ne,flowId:U,doc:j,lib:D,nodeLookup:Z});q&&ee&&F(ee);let Y=structuredClone(W);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,I?.(M,Y),w.setState({connectionClickStartHandle:null})};return(0,P.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${b}-${h}-${g}-${e}`,className:it(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,d,{source:!y,target:y,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:S,connectingto:C,valid:E,connectionindicator:o&&(!k||_)&&(k||T?r:n)}]),onMouseDown:O,onTouchStart:O,onClick:x?L:void 0,ref:p,...c,children:s})}var Gi=(0,B.memo)(MS(f6));function p6({data:e,isConnectable:t,sourcePosition:a=ae.Bottom}){return(0,P.jsxs)(P.Fragment,{children:[e?.label,(0,P.jsx)(Gi,{type:"source",position:a,isConnectable:t})]})}function m6({data:e,isConnectable:t,targetPosition:a=ae.Top,sourcePosition:o=ae.Bottom}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Gi,{type:"target",position:a,isConnectable:t}),e?.label,(0,P.jsx)(Gi,{type:"source",position:o,isConnectable:t})]})}function g6(){return null}function h6({data:e,isConnectable:t,targetPosition:a=ae.Top}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Gi,{type:"target",position:a,isConnectable:t}),e?.label]})}var Kf={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},dS={input:p6,default:m6,output:h6,group:g6};function x6(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var b6=e=>{let{width:t,height:a,x:o,y:n}=Pi(e.nodeLookup,{filter:r=>!!r.selected});return{width:Ka(t)?t:null,height:Ka(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function y6({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=$e(),{width:n,height:r,transformString:l,userSelectionActive:i}=ye(b6,Ue),s=AS(),d=(0,B.useRef)(null);(0,B.useEffect)(()=>{a||d.current?.focus({preventScroll:!0})},[a]);let u=!i&&n!==null&&r!==null;if(TS({nodeRef:d,disabled:!u}),!u)return null;let f=e?p=>{let g=o.getState().nodes.filter(y=>y.selected);e(p,g)}:void 0,c=p=>{Object.prototype.hasOwnProperty.call(Kf,p.key)&&(p.preventDefault(),s({direction:Kf[p.key],factor:p.shiftKey?4:1}))};return(0,P.jsx)("div",{className:it(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,P.jsx)("div",{ref:d,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:c,style:{width:n,height:r}})})}var cS=typeof window<"u"?window:void 0,w6=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function zS({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:d,selectionOnDrag:u,selectionMode:f,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:y,zoomActivationKeyCode:w,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:k,defaultViewport:T,translateExtent:E,minZoom:F,maxZoom:O,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:N,noPanClassName:I,disableKeyboardA11y:A,onViewportChange:z,isControlledViewport:V}){let{nodesSelectionActive:D,userSelectionActive:U}=ye(w6,Ue),Z=zu(d,{target:cS}),W=zu(y,{target:cS}),j=W||_,ne=W||b,ee=u&&j!==!0,q=Z||U||ee;return $3({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,P.jsx)(e6,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:ne,panActivationKeyPressed:W,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:!Z&&j,defaultViewport:T,translateExtent:E,minZoom:F,maxZoom:O,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:N,noPanClassName:I,onViewportChange:z,isControlledViewport:V,paneClickDistance:i,selectionOnDrag:ee,children:(0,P.jsxs)(n6,{onSelectionStart:c,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:j,autoPanOnSelection:k,isSelecting:!!q,selectionMode:f,selectionKeyPressed:Z,paneClickDistance:i,selectionOnDrag:ee,children:[e,D&&(0,P.jsx)(y6,{onSelectionContextMenu:M,noPanClassName:I,disableKeyboardA11y:A})]})})}zS.displayName="FlowRenderer";var v6=(0,B.memo)(zS),C6=e=>t=>e?zf(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function S6(e){return ye((0,B.useCallback)(C6(e),[e]),Ue)}var L6=e=>e.updateNodeInternals;function _6(){let e=ye(L6),[t]=(0,B.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,B.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function k6({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=$e(),r=(0,B.useRef)(null),l=(0,B.useRef)(null),i=(0,B.useRef)(e.sourcePosition),s=(0,B.useRef)(e.targetPosition),d=(0,B.useRef)(t),u=a&&!!e.internals.handleBounds;return(0,B.useEffect)(()=>{r.current&&!e.hidden&&(!u||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[u,e.hidden]),(0,B.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,B.useEffect)(()=>{if(r.current){let f=d.current!==t,c=i.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||c||p)&&(d.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function I6({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:d,nodesFocusable:u,resizeObserver:f,noDragClassName:c,noPanClassName:p,disableKeyboardA11y:g,rfId:y,nodeTypes:w,nodeClickDistance:h,onError:x}){let{node:m,internals:b,isParent:S}=ye(q=>{let Y=q.nodeLookup.get(e),re=q.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:re}},Ue),C=m.type||"default",v=w?.[C]||dS[C];v===void 0&&(x?.("003",Ea.error003(C)),C="default",v=w?.default||dS.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),k=!!(m.selectable||s&&typeof m.selectable>"u"),T=!!(m.connectable||d&&typeof m.connectable>"u"),E=!!(m.focusable||u&&typeof m.focusable>"u"),F=$e(),O=ex(m),L=k6({node:m,nodeType:C,hasDimensions:O,resizeObserver:f}),M=TS({nodeRef:L,disabled:m.hidden||!_,noDragClassName:c,handleSelector:m.dragHandle,nodeId:e,isSelectable:k,nodeClickDistance:h}),N=AS();if(m.hidden)return null;let I=Qa(m),A=x6(m),z=k||_||t||a||o||n,V=a?q=>a(q,{...b.userNode}):void 0,D=o?q=>o(q,{...b.userNode}):void 0,U=n?q=>n(q,{...b.userNode}):void 0,Z=r?q=>r(q,{...b.userNode}):void 0,W=l?q=>l(q,{...b.userNode}):void 0,j=q=>{let{selectNodesOnDrag:Y,nodeDragThreshold:re}=F.getState();k&&(!Y||!_||re>0)&&hx({id:e,store:F,nodeRef:L}),t&&t(q,{...b.userNode})},ne=q=>{if(!(nx(q.nativeEvent)||g)){if(qh.includes(q.key)&&k){let Y=q.key==="Escape";hx({id:e,store:F,unselect:Y,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(Kf,q.key)){q.preventDefault();let{ariaLabelConfig:Y}=F.getState();F.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:q.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),N({direction:Kf[q.key],factor:q.shiftKey?4:1})}}},ee=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:q,width:Y,height:re,autoPanOnNodeFocus:ue,setCenter:te}=F.getState();if(!ue)return;zf(new Map([[e,m]]),{x:0,y:0,width:Y,height:re},q,!0).length>0||te(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:q[2]})};return(0,P.jsx)("div",{className:it(["react-flow__node",`react-flow__node-${C}`,{[p]:_},m.className,{selected:m.selected,selectable:k,parent:S,draggable:_,dragging:M}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:z?"all":"none",visibility:O?"visible":"hidden",...m.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:D,onMouseLeave:U,onContextMenu:Z,onClick:j,onDoubleClick:W,onKeyDown:E?ne:void 0,tabIndex:E?0:void 0,onFocus:E?ee:void 0,role:m.ariaRole??(E?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${LS}-${y}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,P.jsx)(l6,{value:e,children:(0,P.jsx)(v,{id:e,data:m.data,type:C,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:k,draggable:_,deletable:m.deletable??!0,isConnectable:T,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...I})})})}var M6=(0,B.memo)(I6),N6=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function PS(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=ye(N6,Ue),r=S6(e.onlyRenderVisibleElements),l=_6();return(0,P.jsx)("div",{className:"react-flow__nodes",style:Jf,children:r.map(i=>(0,P.jsx)(M6,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}PS.displayName="NodeRenderer";var E6=(0,B.memo)(PS);function T6(e){return ye((0,B.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&gC({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),Ue)}var A6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,P.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},R6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,P.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},fS={[Ri.Arrow]:A6,[Ri.ArrowClosed]:R6};function D6(e){let t=$e();return(0,B.useMemo)(()=>Object.prototype.hasOwnProperty.call(fS,e)?fS[e]:(t.getState().onError?.("009",Ea.error009(e)),null),[e])}var z6=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=D6(t);return s?(0,P.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,P.jsx)(s,{color:a,strokeWidth:l})}):null},OS=({defaultColor:e,rfId:t})=>{let a=ye(r=>r.edges),o=ye(r=>r.defaultEdgeOptions),n=(0,B.useMemo)(()=>bC(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,P.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,P.jsx)("defs",{children:n.map(r=>(0,P.jsx)(z6,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};OS.displayName="MarkerDefinitions";var P6=(0,B.memo)(OS);function BS({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:d,...u}){let[f,c]=(0,B.useState)({x:1,y:0,width:0,height:0}),p=it(["react-flow__edge-textwrapper",d]),g=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(g.current){let y=g.current.getBBox();c({x:y.x,y:y.y,width:y.width,height:y.height})}},[a]),a?(0,P.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...u,children:[n&&(0,P.jsx)("rect",{width:f.width+2*l[0],x:-l[0],y:-l[1],height:f.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,P.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}BS.displayName="EdgeText";var O6=(0,B.memo)(BS);function hr({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:d=20,...u}){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("path",{...u,d:e,fill:"none",className:it(["react-flow__edge-path",u.className])}),d?(0,P.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:d,className:"react-flow__edge-interaction"}):null,o&&Ka(t)&&Ka(a)?(0,P.jsx)(O6,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function pS({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ae.Left||e===ae.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function HS({sourceX:e,sourceY:t,sourcePosition:a=ae.Bottom,targetX:o,targetY:n,targetPosition:r=ae.Top}){let[l,i]=pS({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,d]=pS({pos:r,x1:o,y1:n,x2:e,y2:t}),[u,f,c,p]=Ff({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:d});return[`M${e},${t} C${l},${i} ${s},${d} ${o},${n}`,u,f,c,p]}function FS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:d,labelShowBg:u,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})=>{let[x,m,b]=HS({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),S=e.isInternal?void 0:t;return(0,P.jsx)(hr,{id:S,path:x,labelX:m,labelY:b,label:s,labelStyle:d,labelShowBg:u,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})})}var B6=FS({isInternal:!1}),US=FS({isInternal:!0});B6.displayName="SimpleBezierEdge";US.displayName="SimpleBezierEdgeInternal";function qS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:f,style:c,sourcePosition:p=ae.Bottom,targetPosition:g=ae.Top,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,S]=Du({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,P.jsx)(hr,{id:C,path:m,labelX:b,labelY:S,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:f,style:c,markerEnd:y,markerStart:w,interactionWidth:x})})}var VS=qS({isInternal:!1}),GS=qS({isInternal:!0});VS.displayName="SmoothStepEdge";GS.displayName="SmoothStepEdgeInternal";function XS(e){return(0,B.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,P.jsx)(VS,{...a,id:o,pathOptions:(0,B.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var H6=XS({isInternal:!1}),YS=XS({isInternal:!0});H6.displayName="StepEdge";YS.displayName="StepEdgeInternal";function ZS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:y})=>{let[w,h,x]=Uf({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,P.jsx)(hr,{id:m,path:w,labelX:h,labelY:x,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:f,style:c,markerEnd:p,markerStart:g,interactionWidth:y})})}var F6=ZS({isInternal:!1}),jS=ZS({isInternal:!0});F6.displayName="StraightEdge";jS.displayName="StraightEdgeInternal";function WS(e){return(0,B.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=ae.Bottom,targetPosition:i=ae.Top,label:s,labelStyle:d,labelShowBg:u,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,S]=Ui({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,P.jsx)(hr,{id:C,path:m,labelX:b,labelY:S,label:s,labelStyle:d,labelShowBg:u,labelBgStyle:f,labelBgPadding:c,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:x})})}var U6=WS({isInternal:!1}),KS=WS({isInternal:!0});U6.displayName="BezierEdge";KS.displayName="BezierEdgeInternal";var mS={default:KS,straight:jS,step:YS,smoothstep:GS,simplebezier:US},gS={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},q6=(e,t,a)=>a===ae.Left?e-t:a===ae.Right?e+t:e,V6=(e,t,a)=>a===ae.Top?e-t:a===ae.Bottom?e+t:e,hS="react-flow__edgeupdater";function xS({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,P.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:it([hS,`${hS}-${i}`]),cx:q6(t,o,e),cy:V6(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function G6({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:d,onReconnectStart:u,onReconnectEnd:f,setReconnecting:c,setUpdateHover:p}){let g=$e(),y=(b,S)=>{if(b.button!==0)return;let{autoPanOnConnect:C,domNode:v,connectionMode:_,connectionRadius:k,lib:T,onConnectStart:E,cancelConnection:F,nodeLookup:O,rfId:L,panBy:M,updateConnection:N}=g.getState(),I=S.type==="target",A=(D,U)=>{c(!1),f?.(D,a,S.type,U)},z=D=>d?.(a,D),V=(D,U)=>{c(!0),u?.(b,a,S.type),E?.(D,U)};Xf.onPointerDown(b.nativeEvent,{autoPanOnConnect:C,connectionMode:_,connectionRadius:k,domNode:v,handleId:S.id,nodeId:S.nodeId,nodeLookup:O,isTarget:I,edgeUpdaterType:S.type,lib:T,flowId:L,cancelConnection:F,panBy:M,isValidConnection:(...D)=>g.getState().isValidConnection?.(...D)??!0,onConnect:z,onConnectStart:V,onConnectEnd:(...D)=>g.getState().onConnectEnd?.(...D),onReconnectEnd:A,updateConnection:N,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>y(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=b=>y(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,P.jsxs)(P.Fragment,{children:[(e===!0||e==="source")&&(0,P.jsx)(xS,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,P.jsx)(xS,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function X6({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:d,reconnectRadius:u,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,rfId:g,edgeTypes:y,noPanClassName:w,onError:h,disableKeyboardA11y:x}){let m=ye(te=>te.edgeLookup.get(e)),b=ye(te=>te.defaultEdgeOptions);m=b?{...b,...m}:m;let S=m.type||"default",C=y?.[S]||mS[S];C===void 0&&(h?.("011",Ea.error011(S)),S="default",C=y?.default||mS.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),k=!!(m.selectable||o&&typeof m.selectable>"u"),T=(0,B.useRef)(null),[E,F]=(0,B.useState)(!1),[O,L]=(0,B.useState)(!1),M=$e(),{zIndex:N=m.zIndex,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:U}=ye((0,B.useCallback)(te=>{let oe=te.nodeLookup.get(m.source),xe=te.nodeLookup.get(m.target);if(!oe||!xe)return gS;let be=xC({id:e,sourceNode:oe,targetNode:xe,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:te.connectionMode,onError:h}),He=mC({selected:m.selected,zIndex:m.zIndex,sourceNode:oe,targetNode:xe,elevateOnSelect:te.elevateEdgesOnSelect,zIndexMode:te.zIndexMode});return{...be||gS,zIndex:He}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),Ue),Z=(0,B.useMemo)(()=>m.markerStart?`url('#${qf(m.markerStart,g)}')`:void 0,[m.markerStart,g]),W=(0,B.useMemo)(()=>m.markerEnd?`url('#${qf(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||I===null||A===null||z===null||V===null)return null;let j=te=>{let{addSelectedEdges:oe,unselectNodesAndEdges:xe,multiSelectionActive:be}=M.getState();k&&(M.setState({nodesSelectionActive:!1}),m.selected&&be?(xe({nodes:[],edges:[m]}),T.current?.blur()):oe([e])),n&&n(te,m)},ne=r?te=>{r(te,{...m})}:void 0,ee=l?te=>{l(te,{...m})}:void 0,q=i?te=>{i(te,{...m})}:void 0,Y=s?te=>{s(te,{...m})}:void 0,re=d?te=>{d(te,{...m})}:void 0,ue=te=>{if(!x&&qh.includes(te.key)&&k){let{unselectNodesAndEdges:oe,addSelectedEdges:xe}=M.getState();te.key==="Escape"?(T.current?.blur(),oe({edges:[m]})):xe([e])}};return(0,P.jsx)("svg",{style:{zIndex:N},children:(0,P.jsxs)("g",{className:it(["react-flow__edge",`react-flow__edge-${S}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!k&&!n,updating:E,selectable:k}]),onClick:j,onDoubleClick:ne,onContextMenu:ee,onMouseEnter:q,onMouseMove:Y,onMouseLeave:re,onKeyDown:v?ue:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${_S}-${g}`:void 0,ref:T,...m.domAttributes,children:[!O&&(0,P.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:k,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:U,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Z,markerEnd:W,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,P.jsx)(G6,{edge:m,isReconnectable:_,reconnectRadius:u,onReconnect:f,onReconnectStart:c,onReconnectEnd:p,sourceX:I,sourceY:A,targetX:z,targetY:V,sourcePosition:D,targetPosition:U,setUpdateHover:F,setReconnecting:L})]})})}var Y6=(0,B.memo)(X6),Z6=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function $S({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:d,onEdgeClick:u,reconnectRadius:f,onEdgeDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:y}){let{edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,onError:m}=ye(Z6,Ue),b=T6(t);return(0,P.jsxs)("div",{className:"react-flow__edges",children:[(0,P.jsx)(P6,{defaultColor:e,rfId:a}),b.map(S=>(0,P.jsx)(Y6,{id:S,edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:d,onClick:u,reconnectRadius:f,onDoubleClick:c,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:y},S))]})}$S.displayName="EdgeRenderer";var j6=(0,B.memo)($S),bS=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function W6({children:e}){let t=$e(),a=(0,B.useRef)(null),[o]=(0,B.useState)(()=>t.getState().transform);return NS(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=bS(l)))};return r(),t.subscribe(r)},[t]),(0,P.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:bS(o)},children:e})}function K6(e){let t=Ta(),a=(0,B.useRef)(!1);(0,B.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var $6=e=>e.panZoom?.syncViewport;function Q6(e){let t=ye($6),a=$e();return(0,B.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function yS(e){return e.connection.inProgress?{...e.connection,to:Hi(e.connection.to,e.transform)}:{...e.connection}}function J6(e){return e?a=>{let o=yS(a);return e(o)}:yS}function wx(e){let t=J6(e);return ye(t,Ue)}var eA=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function tA({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=ye(eA,Ue);return!(r&&n&&s)?null:(0,P.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,P.jsx)("g",{className:it(["react-flow__connection",Xh(i)]),children:(0,P.jsx)(QS,{style:t,type:a,CustomComponent:o,isValid:i})})})}var QS=({style:e,type:t=zo.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:d,toNode:u,toHandle:f,toPosition:c,pointer:p}=wx();if(!n)return;if(a)return(0,P.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:d.x,toY:d.y,fromPosition:s,toPosition:c,connectionStatus:Xh(o),toNode:u,toHandle:f,pointer:p});let g="",y={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:d.x,targetY:d.y,targetPosition:c};switch(t){case zo.Bezier:[g]=Ui(y);break;case zo.SimpleBezier:[g]=HS(y);break;case zo.Step:[g]=Du({...y,borderRadius:0});break;case zo.SmoothStep:[g]=Du(y);break;default:[g]=Uf(y)}return(0,P.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};QS.displayName="ConnectionLine";var aA={};function wS(e=aA){let t=(0,B.useRef)(e),a=$e();(0,B.useEffect)(()=>{},[e])}function oA(){let e=$e(),t=(0,B.useRef)(!1);(0,B.useEffect)(()=>{},[])}function JS({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:d,onNodeContextMenu:u,onSelectionContextMenu:f,onSelectionStart:c,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:y,connectionLineComponent:w,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:k,elementsSelectable:T,defaultViewport:E,translateExtent:F,minZoom:O,maxZoom:L,preventScrolling:M,defaultMarkerColor:N,zoomOnScroll:I,zoomOnPinch:A,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:D,zoomOnDoubleClick:U,panOnDrag:Z,autoPanOnSelection:W,onPaneClick:j,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneScroll:Y,onPaneContextMenu:re,paneClickDistance:ue,nodeClickDistance:te,onEdgeContextMenu:oe,onEdgeMouseEnter:xe,onEdgeMouseMove:be,onEdgeMouseLeave:He,reconnectRadius:K,onReconnect:_e,onReconnectStart:Ae,onReconnectEnd:bt,noDragClassName:oa,noWheelClassName:Lo,noPanClassName:Zo,disableKeyboardA11y:jo,nodeExtent:ya,rfId:$,viewport:qe,onViewportChange:nt,nodesDraggable:Ba}){return wS(e),wS(t),oA(),K6(a),Q6(qe),(0,P.jsx)(v6,{onPaneClick:j,onPaneMouseEnter:ne,onPaneMouseMove:ee,onPaneMouseLeave:q,onPaneContextMenu:re,onPaneScroll:Y,paneClickDistance:ue,deleteKeyCode:_,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,onSelectionStart:c,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,elementsSelectable:T,zoomOnScroll:I,zoomOnPinch:A,zoomOnDoubleClick:U,panOnScroll:z,panOnScrollSpeed:V,panOnScrollMode:D,panOnDrag:Z,autoPanOnSelection:W,defaultViewport:E,translateExtent:F,minZoom:O,maxZoom:L,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:oa,noWheelClassName:Lo,noPanClassName:Zo,disableKeyboardA11y:jo,onViewportChange:nt,isControlledViewport:!!qe,children:(0,P.jsxs)(W6,{children:[(0,P.jsx)(j6,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:_e,onReconnectStart:Ae,onReconnectEnd:bt,onlyRenderVisibleElements:k,onEdgeContextMenu:oe,onEdgeMouseEnter:xe,onEdgeMouseMove:be,onEdgeMouseLeave:He,reconnectRadius:K,defaultMarkerColor:N,noPanClassName:Zo,disableKeyboardA11y:jo,rfId:$}),(0,P.jsx)(tA,{style:y,type:g,component:w,containerStyle:h}),(0,P.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,P.jsx)(E6,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:d,onNodeContextMenu:u,nodeClickDistance:te,onlyRenderVisibleElements:k,noPanClassName:Zo,noDragClassName:oa,disableKeyboardA11y:jo,nodeExtent:ya,rfId:$,nodesDraggable:Ba}),(0,P.jsx)("div",{className:"react-flow__viewport-portal"})]})})}JS.displayName="GraphView";var nA=(0,B.memo)(JS),rA=Jh("React Flow","https://reactflow.dev/"),vS=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:d=2,nodeOrigin:u,nodeExtent:f,zIndexMode:c="basic"}={})=>{let p=new Map,g=new Map,y=new Map,w=new Map,h=o??t??[],x=a??e??[],m=u??[0,0],b=f??zi;cx(y,w,h);let{nodesInitialized:S}=Vf(x,p,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:c}),C=[0,0,1];if(l&&n&&r){let v=Pi(p,{filter:E=>!!((E.width||E.initialWidth)&&(E.height||E.initialHeight))}),{x:_,y:k,zoom:T}=Ru(v,n,r,s,d,i?.padding??.1);C=[_,k,T]}return{rfId:"1",width:n??0,height:r??0,transform:C,nodes:x,nodesInitialized:S,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:w,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:d,translateExtent:zi,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:pr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...Gh},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:rA,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Vh,zIndexMode:c,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},lA=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:d,nodeOrigin:u,nodeExtent:f,zIndexMode:c})=>KC((p,g)=>{async function y(){let{nodeLookup:w,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:b,height:S,minZoom:C,maxZoom:v}=g();h&&(await sC({nodes:w,width:b,height:S,panZoom:h,minZoom:C,maxZoom:v},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...vS({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:d,nodeOrigin:u,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:c}),setNodes:w=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,fitViewQueued:C,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:k,hasSelectedNodes:T}=Vf(w,h,x,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:v}),E=_&&T;C&&k?(y(),p({nodes:w,nodesInitialized:k,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:E})):p({nodes:w,nodesInitialized:k,nodesSelectionActive:E})},setEdges:w=>{let{connectionLookup:h,edgeLookup:x}=g();cx(h,x,w),p({edges:w})},setDefaultNodesAndEdges:(w,h)=>{if(w){let{setNodes:x}=g();x(w),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:b,nodeOrigin:S,nodeExtent:C,debug:v,fitViewQueued:_,zIndexMode:k}=g(),{changes:T,updatedInternals:E}=CC(w,x,m,b,S,C,k);E&&(wC(x,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:k}),_?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),T?.length>0&&(v&&console.log("React Flow: trigger node changes",T),h?.(T)))},updateNodePositions:(w,h=!1)=>{let x=[],m=[],{nodeLookup:b,triggerNodeChanges:S,connection:C,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[k,T]of w){let E=b.get(k),F=!!(E?.expandParent&&E?.parentId&&T?.position),O={id:k,type:"position",position:F?{x:Math.max(0,T.position.x),y:Math.max(0,T.position.y)}:T.position,dragging:h};if(E&&C.inProgress&&C.fromNode.id===E.id){let L=mr(E,C.fromHandle,ae.Left,!0);v({...C,from:L})}F&&E.parentId&&x.push({id:k,parentId:E.parentId,rect:{...T.internals.positionAbsolute,width:T.measured.width??0,height:T.measured.height??0}}),m.push(O)}if(x.length>0){let{parentLookup:k,nodeOrigin:T}=g(),E=Gf(x,b,k,T);m.push(...E)}for(let k of _.values())m=k(m);S(m)},triggerNodeChanges:w=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:b,debug:S}=g();if(w?.length){if(b){let C=xx(w,m);x(C)}S&&console.log("React Flow: trigger node changes",w),h?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:b,debug:S}=g();if(w?.length){if(b){let C=bx(w,m);x(C)}S&&console.log("React Flow: trigger edge changes",w),h?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>fl(v,!0));b(C);return}b(Vi(m,new Set([...w]),!0)),S(Vi(x))},addSelectedEdges:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=g();if(h){let C=w.map(v=>fl(v,!0));S(C);return}S(Vi(x,new Set([...w]))),b(Vi(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:b,triggerNodeChanges:S,triggerEdgeChanges:C}=g(),v=w||m,_=h||x,k=[];for(let E of v){if(!E.selected)continue;let F=b.get(E.id);F&&(F.selected=!1),k.push(fl(E.id,!1))}let T=[];for(let E of _)E.selected&&T.push(fl(E.id,!1));S(k),C(T)},setMinZoom:w=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([w,x]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,w]),p({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let S=h.reduce((v,_)=>_.selected?[...v,fl(_.id,!1)]:v,[]),C=w.reduce((v,_)=>_.selected?[...v,fl(_.id,!1)]:v,[]);x(S),m(C)},setNodeExtent:w=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:v}=g();w[0][0]===C[0][0]&&w[0][1]===C[0][1]&&w[1][0]===C[1][0]&&w[1][1]===C[1][1]||(Vf(h,x,m,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:v}),p({nodeExtent:w}))},panBy:w=>{let{transform:h,width:x,height:m,panZoom:b,translateExtent:S}=g();return SC({delta:w,panZoom:b,transform:h,translateExtent:S,width:x,height:m})},setCenter:async(w,h,x)=>{let{width:m,height:b,maxZoom:S,panZoom:C}=g();if(!C)return!1;let v=typeof x?.zoom<"u"?x.zoom:S;return await C.setViewport({x:m/2-w*v,y:b/2-h*v,zoom:v},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Gh}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...vS()})}},Object.is);function vx({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:d,nodeOrigin:u,nodeExtent:f,zIndexMode:c,children:p}){let[g]=(0,B.useState)(()=>lA({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:d,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:u,nodeExtent:f,zIndexMode:c}));return(0,P.jsx)(S3,{value:g,children:(0,P.jsx)(Z3,{children:(0,P.jsx)(s6,{children:p})})})}function iA({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:d,maxZoom:u,nodeOrigin:f,nodeExtent:c,zIndexMode:p}){return(0,B.useContext)($f)?(0,P.jsx)(P.Fragment,{children:e}):(0,P.jsx)(vx,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:d,initialMaxZoom:u,nodeOrigin:f,nodeExtent:c,zIndexMode:p,children:e})}var sA={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function uA({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:d,onMove:u,onMoveStart:f,onMoveEnd:c,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onNodesDelete:T,onEdgesDelete:E,onDelete:F,onSelectionChange:O,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:N,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onBeforeDelete:V,connectionMode:D,connectionLineType:U=zo.Bezier,connectionLineStyle:Z,connectionLineComponent:W,connectionLineContainerStyle:j,deleteKeyCode:ne="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:q=!1,selectionMode:Y=wn.Full,panActivationKeyCode:re="Space",multiSelectionKeyCode:ue=Fi()?"Meta":"Control",zoomActivationKeyCode:te=Fi()?"Meta":"Control",snapToGrid:oe,snapGrid:xe,onlyRenderVisibleElements:be=!1,selectNodesOnDrag:He,nodesDraggable:K,autoPanOnNodeFocus:_e,nodesConnectable:Ae,nodesFocusable:bt,nodeOrigin:oa=kS,edgesFocusable:Lo,edgesReconnectable:Zo,elementsSelectable:jo=!0,defaultViewport:ya=P3,minZoom:$=.5,maxZoom:qe=2,translateExtent:nt=zi,preventScrolling:Ba=!0,nodeExtent:Ar,defaultMarkerColor:_o="#b1b1b7",zoomOnScroll:Pp=!0,zoomOnPinch:sI=!0,panOnScroll:uI=!1,panOnScrollSpeed:dI=.5,panOnScrollMode:cI=go.Free,zoomOnDoubleClick:fI=!0,panOnDrag:pI=!0,onPaneClick:mI,onPaneMouseEnter:gI,onPaneMouseMove:hI,onPaneMouseLeave:xI,onPaneScroll:bI,onPaneContextMenu:yI,paneClickDistance:wI=1,nodeClickDistance:vI=0,children:CI,onReconnect:SI,onReconnectStart:LI,onReconnectEnd:_I,onEdgeContextMenu:kI,onEdgeDoubleClick:II,onEdgeMouseEnter:MI,onEdgeMouseMove:NI,onEdgeMouseLeave:EI,reconnectRadius:TI=10,onNodesChange:AI,onEdgesChange:RI,noDragClassName:DI="nodrag",noWheelClassName:zI="nowheel",noPanClassName:eb="nopan",fitView:tb,fitViewOptions:ab,connectOnClick:PI,attributionPosition:OI,proOptions:BI,defaultEdgeOptions:HI,elevateNodesOnSelect:FI=!0,elevateEdgesOnSelect:UI=!1,disableKeyboardA11y:ob=!1,autoPanOnConnect:qI,autoPanOnNodeDrag:VI,autoPanOnSelection:GI=!0,autoPanSpeed:XI,connectionRadius:YI,isValidConnection:ZI,onError:jI,style:WI,id:nb,nodeDragThreshold:KI,connectionDragThreshold:$I,viewport:QI,onViewportChange:JI,width:e5,height:t5,colorMode:a5="light",debug:o5,onScroll:rb,ariaLabelConfig:n5,zIndexMode:lb="basic",...r5},l5){let Op=nb||"1",i5=F3(a5),s5=(0,B.useCallback)(ib=>{ib.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),rb?.(ib)},[rb]);return(0,P.jsx)("div",{"data-testid":"rf__wrapper",...r5,onScroll:s5,style:{...WI,...sA},ref:l5,className:it(["react-flow",n,i5]),id:nb,role:"application",children:(0,P.jsxs)(iA,{nodes:e,edges:t,width:e5,height:t5,fitView:tb,fitViewOptions:ab,minZoom:$,maxZoom:qe,nodeOrigin:oa,nodeExtent:Ar,zIndexMode:lb,children:[(0,P.jsx)(H3,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,nodesDraggable:K,autoPanOnNodeFocus:_e,nodesConnectable:Ae,nodesFocusable:bt,edgesFocusable:Lo,edgesReconnectable:Zo,elementsSelectable:jo,elevateNodesOnSelect:FI,elevateEdgesOnSelect:UI,minZoom:$,maxZoom:qe,nodeExtent:Ar,onNodesChange:AI,onEdgesChange:RI,snapToGrid:oe,snapGrid:xe,connectionMode:D,translateExtent:nt,connectOnClick:PI,defaultEdgeOptions:HI,fitView:tb,fitViewOptions:ab,onNodesDelete:T,onEdgesDelete:E,onDelete:F,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:k,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:N,onMove:u,onMoveStart:f,onMoveEnd:c,noPanClassName:eb,nodeOrigin:oa,rfId:Op,autoPanOnConnect:qI,autoPanOnNodeDrag:VI,autoPanSpeed:XI,onError:jI,connectionRadius:YI,isValidConnection:ZI,selectNodesOnDrag:He,nodeDragThreshold:KI,connectionDragThreshold:$I,onBeforeDelete:V,debug:o5,ariaLabelConfig:n5,zIndexMode:lb}),(0,P.jsx)(nA,{onInit:d,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:r,edgeTypes:l,connectionLineType:U,connectionLineStyle:Z,connectionLineComponent:W,connectionLineContainerStyle:j,selectionKeyCode:ee,selectionOnDrag:q,selectionMode:Y,deleteKeyCode:ne,multiSelectionKeyCode:ue,panActivationKeyCode:re,zoomActivationKeyCode:te,onlyRenderVisibleElements:be,defaultViewport:ya,translateExtent:nt,minZoom:$,maxZoom:qe,preventScrolling:Ba,zoomOnScroll:Pp,zoomOnPinch:sI,zoomOnDoubleClick:fI,panOnScroll:uI,panOnScrollSpeed:dI,panOnScrollMode:cI,panOnDrag:pI,autoPanOnSelection:GI,onPaneClick:mI,onPaneMouseEnter:gI,onPaneMouseMove:hI,onPaneMouseLeave:xI,onPaneScroll:bI,onPaneContextMenu:yI,paneClickDistance:wI,nodeClickDistance:vI,onSelectionContextMenu:I,onSelectionStart:A,onSelectionEnd:z,onReconnect:SI,onReconnectStart:LI,onReconnectEnd:_I,onEdgeContextMenu:kI,onEdgeDoubleClick:II,onEdgeMouseEnter:MI,onEdgeMouseMove:NI,onEdgeMouseLeave:EI,reconnectRadius:TI,defaultMarkerColor:_o,noDragClassName:DI,noWheelClassName:zI,noPanClassName:eb,rfId:Op,disableKeyboardA11y:ob,nodeExtent:Ar,viewport:QI,onViewportChange:JI,nodesDraggable:K}),(0,P.jsx)(z3,{onSelectionChange:O}),CI,(0,P.jsx)(E3,{proOptions:BI,position:OI}),(0,P.jsx)(N3,{rfId:Op,disableKeyboardA11y:ob})]})})}var eL=MS(uA);var dA=e=>e.nodes;function tL(){return ye(dA,Ue)}var cA=e=>e.edges;function aL(){return ye(cA,Ue)}var fA=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function Ja(){return ye(fA,Ue)}var FH=Ea.error014();function pA({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,P.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:it(["react-flow__background-pattern",a,o])})}function mA({radius:e,className:t}){return(0,P.jsx)("circle",{cx:e,cy:e,r:e,className:it(["react-flow__background-pattern","dots",t])})}var Po;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Po||(Po={}));var gA={[Po.Dots]:1,[Po.Lines]:1,[Po.Cross]:6},hA=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function oL({id:e,variant:t=Po.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:d,patternClassName:u}){let f=(0,B.useRef)(null),{transform:c,patternId:p}=ye(hA,Ue),g=o||gA[t],y=t===Po.Dots,w=t===Po.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*c[2]||1,h[1]*c[2]||1],m=g*c[2],b=Array.isArray(r)?r:[r,r],S=w?[m,m]:x,C=[b[0]*c[2]+S[0]/2,b[1]*c[2]+S[1]/2],v=`${p}${e||""}`;return(0,P.jsxs)("svg",{className:it(["react-flow__background",d]),style:{...s,...Jf,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:f,"data-testid":"rf__background",children:[(0,P.jsx)("pattern",{id:v,x:c[0]%x[0],y:c[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:y?(0,P.jsx)(mA,{radius:m/2,className:u}):(0,P.jsx)(pA,{dimensions:S,lineWidth:n,variant:t,className:u})}),(0,P.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}oL.displayName="Background";var nL=(0,B.memo)(oL);function xA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,P.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function bA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,P.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function yA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,P.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function wA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,P.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function vA(){return(0,P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,P.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Wf({children:e,className:t,...a}){return(0,P.jsx)("button",{type:"button",className:it(["react-flow__controls-button",t]),...a,children:e})}var CA=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function rL({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:d,children:u,position:f="bottom-left",orientation:c="vertical","aria-label":p}){let g=$e(),{isInteractive:y,minZoomReached:w,maxZoomReached:h,ariaLabelConfig:x}=ye(CA,Ue),{zoomIn:m,zoomOut:b,fitView:S}=Ta(),C=()=>{m(),r?.()},v=()=>{b(),l?.()},_=()=>{S(n),i?.()},k=()=>{g.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),s?.(!y)};return(0,P.jsxs)(Qf,{className:it(["react-flow__controls",c==="horizontal"?"horizontal":"vertical",d]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Wf,{onClick:C,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,P.jsx)(xA,{})}),(0,P.jsx)(Wf,{onClick:v,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:w,children:(0,P.jsx)(bA,{})})]}),a&&(0,P.jsx)(Wf,{className:"react-flow__controls-fitview",onClick:_,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,P.jsx)(yA,{})}),o&&(0,P.jsx)(Wf,{className:"react-flow__controls-interactive",onClick:k,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:y?(0,P.jsx)(vA,{}):(0,P.jsx)(wA,{})}),u]})}rL.displayName="Controls";var UH=(0,B.memo)(rL);function SA({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:d,borderRadius:u,shapeRendering:f,selected:c,onClick:p}){let{background:g,backgroundColor:y}=r||{},w=l||g||y;return(0,P.jsx)("rect",{className:it(["react-flow__minimap-node",{selected:c},d]),x:t,y:a,rx:u,ry:u,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var LA=(0,B.memo)(SA),_A=e=>e.nodes.map(t=>t.id),gx=e=>e instanceof Function?e:()=>e;function kA({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=LA,onClick:l}){let i=ye(_A,Ue),s=gx(t),d=gx(e),u=gx(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,P.jsx)(P.Fragment,{children:i.map(c=>(0,P.jsx)(MA,{id:c,nodeColorFunc:s,nodeStrokeColorFunc:d,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:f},c))})}function IA({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:d,x:u,y:f,width:c,height:p}=ye(g=>{let y=g.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let w=y.internals.userNode,{x:h,y:x}=y.internals.positionAbsolute,{width:m,height:b}=Qa(w);return{node:w,x:h,y:x,width:m,height:b}},Ue);return!d||d.hidden||!ex(d)?null:(0,P.jsx)(i,{x:u,y:f,width:c,height:p,style:d.style,selected:!!d.selected,className:o(d),color:t(d),borderRadius:n,strokeColor:a(d),strokeWidth:r,shapeRendering:l,onClick:s,id:d.id})}var MA=(0,B.memo)(IA),NA=(0,B.memo)(kA),EA=200,TA=150,AA=e=>!e.hidden,RA=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?$h(Pi(e.nodeLookup,{filter:AA}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},CS=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,DA=(e,t)=>CS(e.viewBB,t.viewBB)&&CS(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,zA="react-flow__minimap-desc";function lL({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:d,maskStrokeColor:u,maskStrokeWidth:f,position:c="bottom-right",onClick:p,onNodeClick:g,pannable:y=!1,zoomable:w=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:b=5}){let S=$e(),C=(0,B.useRef)(null),{boundingRect:v,viewBB:_,rfId:k,panZoom:T,translateExtent:E,flowWidth:F,flowHeight:O,ariaLabelConfig:L}=ye(RA,DA),M=e?.width??EA,N=e?.height??TA,I=v.width/M,A=v.height/N,z=Math.max(I,A),V=z*M,D=z*N,U=b*z,Z=v.x-(V-v.width)/2-U,W=v.y-(D-v.height)/2-U,j=V+U*2,ne=D+U*2,ee=`${zA}-${k}`,q=(0,B.useRef)(0),Y=(0,B.useRef)();q.current=z,(0,B.useEffect)(()=>{if(C.current&&T)return Y.current=EC({domNode:C.current,panZoom:T,getTransform:()=>S.getState().transform,getViewScale:()=>q.current}),()=>{Y.current?.destroy()}},[T]),(0,B.useEffect)(()=>{Y.current?.update({translateExtent:E,width:F,height:O,inversePan:x,pannable:y,zoomStep:m,zoomable:w})},[y,w,x,m,E,F,O]);let re=p?oe=>{let[xe,be]=Y.current?.pointer(oe)||[0,0];p(oe,{x:xe,y:be})}:void 0,ue=g?(0,B.useCallback)((oe,xe)=>{let be=S.getState().nodeLookup.get(xe).internals.userNode;g(oe,be)},[]):void 0,te=h??L["minimap.ariaLabel"];return(0,P.jsx)(Qf,{position:c,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*z:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:it(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,P.jsxs)("svg",{width:M,height:N,viewBox:`${Z} ${W} ${j} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:C,onClick:re,children:[te&&(0,P.jsx)("title",{id:ee,children:te}),(0,P.jsx)(NA,{onClick:ue,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,P.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Z-U},${W-U}h${j+U*2}v${ne+U*2}h${-j-U*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}lL.displayName="MiniMap";var iL=(0,B.memo)(lL),PA=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,OA={[gr.Line]:"right",[gr.Handle]:"bottom-right"};function BA({nodeId:e,position:t,variant:a=gr.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:d=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:c,autoScale:p=!0,shouldResize:g,onResizeStart:y,onResize:w,onResizeEnd:h}){let x=RS(),m=typeof e=="string"?e:x,b=$e(),S=(0,B.useRef)(null),C=a===gr.Handle,v=ye((0,B.useCallback)(PA(C&&p),[C,p]),Ue),_=(0,B.useRef)(null),k=t??OA[a];(0,B.useEffect)(()=>{if(!(!S.current||!m))return _.current||(_.current=zC({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:E,transform:F,snapGrid:O,snapToGrid:L,nodeOrigin:M,domNode:N}=b.getState();return{nodeLookup:E,transform:F,snapGrid:O,snapToGrid:L,nodeOrigin:M,paneDomNode:N}},onChange:(E,F)=>{let{triggerNodeChanges:O,nodeLookup:L,parentLookup:M,nodeOrigin:N}=b.getState(),I=[],A={x:E.x,y:E.y},z=L.get(m);if(z&&z.expandParent&&z.parentId){let V=z.origin??N,D=E.width??z.measured.width??0,U=E.height??z.measured.height??0,Z={id:z.id,parentId:z.parentId,rect:{width:D,height:U,...tx({x:E.x??z.position.x,y:E.y??z.position.y},{width:D,height:U},z.parentId,L,V)}},W=Gf([Z],L,M,N);I.push(...W),A.x=E.x?Math.max(V[0]*D,E.x):void 0,A.y=E.y?Math.max(V[1]*U,E.y):void 0}if(A.x!==void 0&&A.y!==void 0){let V={id:m,type:"position",position:{...A}};I.push(V)}if(E.width!==void 0&&E.height!==void 0){let D={id:m,type:"dimensions",resizing:!0,setAttributes:c?c==="horizontal"?"width":"height":!0,dimensions:{width:E.width,height:E.height}};I.push(D)}for(let V of F){let D={...V,type:"position"};I.push(D)}O(I)},onEnd:({width:E,height:F})=>{let O={id:m,type:"dimensions",resizing:!1,dimensions:{width:E,height:F}};b.getState().triggerNodeChanges([O])}})),_.current.update({controlPosition:k,boundaries:{minWidth:i,minHeight:s,maxWidth:d,maxHeight:u},keepAspectRatio:f,resizeDirection:c,onResizeStart:y,onResize:w,onResizeEnd:h,shouldResize:g}),()=>{_.current?.destroy()}},[k,i,s,d,u,f,y,w,h,g]);let T=k.split("-");return(0,P.jsx)("div",{className:it(["react-flow__resize-control","nodrag",...T,a,o]),ref:S,style:{...n,scale:v,...l&&{[C?"backgroundColor":"borderColor"]:l}},children:r})}var qH=(0,B.memo)(BA);var pa=R(J(),1),pL=R(Io(),1);var ap=R(J(),1);var ep=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var sL=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var uL=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var Cx=e=>{let t=uL(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Pu=R(J(),1);var tp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var dL=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Xi=R(J(),1);var HA=(0,Xi.createContext)({});var cL=()=>(0,Xi.useContext)(HA);var fL=(0,Pu.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:c="currentColor",className:p=""}=cL()??{},g=o??f?Number(a??u)*24/Number(t??d):a??u;return(0,Pu.createElement)("svg",{ref:s,...tp,width:t??d??tp.width,height:t??d??tp.height,stroke:e??c,strokeWidth:g,className:ep("lucide",p,n),...!r&&!dL(i)&&{"aria-hidden":"true"},...i},[...l.map(([y,w])=>(0,Pu.createElement)(y,w)),...Array.isArray(r)?r:[r]])});var H=(e,t)=>{let a=(0,ap.forwardRef)(({className:o,...n},r)=>(0,ap.createElement)(fL,{ref:r,iconNode:t,className:ep(`lucide-${sL(Cx(e))}`,`lucide-${e}`,o),...n}));return a.displayName=Cx(e),a};var FA=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],pl=H("audio-lines",FA);var UA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],eo=H("check",UA);var qA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ou=H("chevron-down",qA);var VA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Yi=H("chevron-right",VA);var GA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Bu=H("chevron-left",GA);var XA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Hu=H("chevron-up",XA);var YA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],xr=H("circle-alert",YA);var ZA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],br=H("circle-check",ZA);var jA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ho=H("circle-question-mark",jA);var WA=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],Fu=H("clapperboard",WA);var KA=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Uu=H("copy",KA);var $A=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ml=H("download",$A);var QA=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],yr=H("ellipsis",QA);var JA=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],qu=H("eye-off",JA);var e8=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vu=H("eye",e8);var t8=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],Oo=H("file-pen",t8);var a8=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Gu=H("file-spreadsheet",a8);var o8=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qt=H("file-text",o8);var n8=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],Xu=H("file-up",n8);var r8=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],qt=H("film",r8);var l8=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Yu=H("folder-open",l8);var i8=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],wr=H("folder",i8);var s8=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],vr=H("funnel",s8);var u8=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Zu=H("grip-vertical",u8);var d8=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Zi=H("hand",d8);var c8=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],ju=H("hash",c8);var f8=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],vn=H("image-plus",f8);var p8=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],xo=H("image",p8);var m8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Wu=H("info",m8);var g8=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Ku=H("keyboard",g8);var h8=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bo=H("layers",h8);var x8=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],gl=H("layout-grid",x8);var b8=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],$u=H("list",b8);var y8=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Cr=H("loader-circle",y8);var w8=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Qu=H("map",w8);var v8=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Sr=H("maximize-2",v8);var C8=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ju=H("maximize",C8);var S8=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],hl=H("mic",S8);var L8=[["path",{d:"M5 12h14",key:"1ays0h"}]],ed=H("minus",L8);var _8=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ji=H("mouse-pointer",_8);var k8=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],to=H("music",k8);var I8=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],td=H("paperclip",I8);var M8=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ad=H("pause",M8);var N8=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Ho=H("pen-line",N8);var E8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Lr=H("pencil",E8);var T8=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],od=H("person-standing",T8);var A8=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Aa=H("play",A8);var R8=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Qe=H("plus",R8);var D8=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],xl=H("redo-2",D8);var z8=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],_r=H("refresh-cw",z8);var P8=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],nd=H("rotate-ccw",P8);var O8=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bl=H("search",O8);var B8=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],rd=H("settings-2",B8);var H8=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],ld=H("sliders-horizontal",H8);var F8=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ra=H("sparkles",F8);var U8=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],kr=H("square-split-vertical",U8);var q8=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Da=H("table",q8);var V8=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],id=H("tag",V8);var G8=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],Ir=H("text-align-justify",G8);var X8=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],yl=H("trash-2",X8);var Y8=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Mr=H("triangle-alert",Y8);var Z8=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Cn=H("type",Z8);var j8=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],wl=H("undo-2",j8);var W8=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],sd=H("unlink",W8);var K8=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],vl=H("upload",K8);var $8=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],bo=H("video",$8);var Q8=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],ud=H("waypoints",Q8);var J8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kt=H("x",J8);var It=R(X(),1);function ma({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,d]=(0,pa.useState)(!1),u=(0,pa.useRef)(null),f=(0,pa.useRef)(null),[c,p]=(0,pa.useState)({top:0,left:0,placement:"bottom"}),g=(0,pa.useMemo)(()=>t.find(m=>m.value===e),[t,e]),y=(0,pa.useCallback)(()=>{if(!u.current)return;let m=u.current.getBoundingClientRect(),b=window.innerHeight,S=Math.min(t.length*34+16,260),v=b-m.bottom<S&&m.top>S,_=v?m.top-6:m.bottom+6,k=r?m.width:void 0;p({top:_,left:m.left,width:k,placement:v?"top":"bottom"})},[t.length,r]);(0,pa.useEffect)(()=>{if(!s)return;y();let m=C=>{let v=C.target;u.current?.contains(v)||f.current?.contains(v)||d(!1)},b=C=>{C.key==="Escape"&&d(!1)},S=()=>{y()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",S,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",y)}},[s,y]);let w=(0,pa.useCallback)(m=>{m.stopPropagation(),!n&&d(b=>!b)},[n]),h=(0,pa.useCallback)((m,b)=>{b||(a?.(m),d(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,It.jsxs)(It.Fragment,{children:[(0,It.jsxs)("button",{ref:u,type:"button",className:x,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,It.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,It.jsx)(Ou,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,pL.createPortal)((0,It.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${c.placement}`,style:{position:"fixed",top:c.placement==="top"?void 0:c.top,bottom:c.placement==="top"?window.innerHeight-c.top:void 0,left:c.left,minWidth:c.width?Math.max(c.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,It.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,S=!!m.subtitle||!!m.badge||!!m.icon;return(0,It.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${S?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,It.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,It.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,It.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,It.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,It.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,It.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,It.jsx)(eo,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var Fo=R(J(),1),mL=R(Io(),1),yo=R(X(),1),dd=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,Fo.useState)(!1),i=(0,Fo.useRef)(null),s=(0,Fo.useRef)(null),[d,u]=(0,Fo.useState)({left:0}),f=(0,Fo.useCallback)(()=>{if(!i.current)return;let p=i.current.getBoundingClientRect(),g=a.startsWith("top"),y=a.endsWith("Right"),w=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=y?p.right-140:Math.max(10,p.left+p.width/2-70);u({top:w,bottom:h,left:x})},[a]);(0,Fo.useEffect)(()=>{if(!r)return;f();let p=y=>{let w=y.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=y=>{y.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let c=p=>{p.stopPropagation(),l(g=>!g)};return(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?c:void 0,children:n}),r&&typeof document<"u"?(0,mL.createPortal)((0,yo.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:d.top,bottom:d.bottom,left:d.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,yo.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,yo.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),l(!1))},children:[p.icon?(0,yo.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,yo.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var gL=R(J(),1),Sx=R(X(),1),Lx=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),d=(0,gL.useCallback)(u=>{n(Number(u.target.value))},[n]);return(0,Sx.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,Sx.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:d,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var hL=R(J(),1),xL=R(Io(),1);var Uo=R(X(),1),Cl=({open:e,onCancel:t,title:a,footer:o,width:n=640,className:r,bodyClassName:l,children:i})=>((0,hL.useEffect)(()=>{if(!e)return;let s=d=>{d.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]),!e||typeof document>"u"?null:(0,xL.createPortal)((0,Uo.jsx)("div",{className:"wf-modal-overlay wf-canvas-root",onClick:t,children:(0,Uo.jsxs)("div",{className:["wf-modal-card",r].filter(Boolean).join(" "),style:{width:n},onClick:s=>s.stopPropagation(),children:[(0,Uo.jsxs)("div",{className:"wf-modal-header",children:[(0,Uo.jsx)("div",{className:"wf-modal-title",children:a}),(0,Uo.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,Uo.jsx)(kt,{size:16})})]}),(0,Uo.jsx)("div",{className:["wf-modal-body",l].filter(Boolean).join(" "),children:i}),o?(0,Uo.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var np=R(J(),1),bL=R(Sh(),1);var Sl=R(X(),1),cd=null,eR=()=>{let[e,t]=(0,np.useState)([]);return(0,np.useEffect)(()=>(cd=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{cd=null}),[]),e.length===0?null:(0,Sl.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=Wu,n="#60a5fa";return a.type==="success"?(o=br,n="#34d399"):a.type==="warning"?(o=Mr,n="#fb923c"):a.type==="error"&&(o=xr,n="#f87171"),(0,Sl.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Sl.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Sl.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function tR(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,bL.createRoot)(t).render((0,Sl.jsx)(eR,{}))}function op(e,t,a=2500){tR();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;cd?cd({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{cd?.({id:o,type:e,content:t,durationMs:a})},50)}var Te={success:(e,t)=>op("success",e,t),warning:(e,t)=>op("warning",e,t),error:(e,t)=>op("error",e,t),info:(e,t)=>op("info",e,t)};var yL=e=>{let t,a=new Set,o=(d,u)=>{let f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){let c=t;t=u??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,c))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:d=>(a.add(d),()=>a.delete(d))},s=t=e(o,n,i);return i},wL=(e=>e?yL(e):yL);var fd=R(J(),1);var aR=e=>e;function oR(e,t=aR){let a=fd.default.useSyncExternalStore(e.subscribe,fd.default.useCallback(()=>t(e.getState()),[e,t]),fd.default.useCallback(()=>t(e.getInitialState()),[e,t]));return fd.default.useDebugValue(a),a}var vL=e=>{let t=wL(e),a=o=>oR(t,o);return Object.assign(a,t),a},Wi=(e=>e?vL(e):vL);var kL=R(J(),1);var CL=e=>Symbol.iterator in e,SL=e=>"entries"in e,LL=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},nR=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function _L(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:CL(e)&&CL(t)?SL(e)&&SL(t)?LL(e,t):nR(e,t):LL({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function IL(e){let t=kL.default.useRef(void 0);return a=>{let o=e(a);return _L(t.current,o)?t.current:t.current=o}}var NL={stroke:"#b1b1b7",strokeWidth:2},rp={type:"animated",style:NL,animated:!1};function ML(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function rR(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function EL(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:rR(e),...rp,...e,data:{...t,createdAt:a},animated:e.animated??rp.animated,style:{...NL,...e.style??{}},sourceHandle:ML(e.sourceHandle),targetHandle:ML(e.targetHandle)}}var TL={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},lR={text:"text-editor",image:"import",video:"import",audio:"import"};var AL={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function lp(e,t){return{label:"",materialType:e,status:"empty",selectedTool:lR[e],params:{},failStrategy:"abort",...t}}var iR={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function RL(e){return iR[e]??[]}function sR(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}if(t==="video_composition"){let o=typeof a.outputVideoUrl=="string"?a.outputVideoUrl:"";return{nodeType:t,materialType:"video",hasOutput:!!o||a.status==="completed"}}return{nodeType:t,hasOutput:!0}}function uR(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=TL[n];if(l)for(let i of l){let s=AL[i];s&&s.forEach(d=>r.add(d))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return t==="video_composition"?{nodeType:t,acceptedTypes:["text","image","video","audio"]}:{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function ip(e,t){let a=sR(e),o=uR(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function sp(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!ip(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of jh(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function up(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function dR(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function DL(e,t){let a=new Set;for(let u of t.addNodes??[]){if(a.has(u.id)||e.nodes.some(f=>f.id===u.id))return up(e,"rejected","duplicate_node");a.add(u.id)}let o=dR([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return up(e,"rejected","duplicate_node_patch");let n=new Set(o.map(u=>u.id));if((t.nodePatches??[]).some(u=>!n.has(u.nodeId)))return up(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(u=>!l.has(u.id)),d=[...e.edges.filter(u=>!r.has(u.id)&&!l.has(u.source)&&!l.has(u.target))];for(let u of t.addEdges??[]){let f=EL(u),c=sp(f,i,d);if(!c.valid)return up(e,"rejected",c.reasonCode??"invalid_connection");d.push(f)}return{nodes:i,edges:d,status:"allowed"}}function zL(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var dp=!1,cp=!1;function fp(){dp=!0}function PL(){cp=!0,dp=!1}function OL(){dp=!1,cp=!1}function cR(){cp=!1}function _x(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function kx(e,t){return{nodes:e.slice(),edges:t.slice()}}function pd(e,t){return t||(cp&&e===0?"reset":dp&&e===0?"user-delete":"autosave")}function pp(e){let t=kx(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:_x({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(cR(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var fR=50,pR=300;function md(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Jt={current:null,lastPushAt:0},ie=Wi()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&fp(),e({nodes:xx(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:bx(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&fp();let o=t(),n=DL({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return zL(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&fp(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{OL(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Jt.current=md(a,o),Jt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=md(t().nodes,t().edges);if(Jt.current&&Jt.current.sig===a.sig)return;let o=Date.now();if(Jt.current&&o-Jt.lastPushAt>=pR){let n=Jt.current;e(r=>({past:[...r.past,n].slice(-fR),future:[]})),Jt.lastPushAt=o}Jt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=md(o,n);Jt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=md(o,n);Jt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Jt.current=md(a,o),Jt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{PL(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Jt.current=null,Jt.lastPushAt=0}})),BL=()=>ie(IL(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var HL=()=>ie(e=>e.past.length>0),FL=()=>ie(e=>e.future.length>0);var KL=R(J(),1);var UL={total:0,completed:0,running:0,pending:0,percentage:0},Ge=Wi()(e=>({executionId:null,status:"idle",error:null,progress:UL,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:UL,nodeStatuses:{}})}));var qL=R(J(),1),VL="(prefers-reduced-motion: reduce)";function mR(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(VL);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function gR(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(VL).matches}function GL(){return(0,qL.useSyncExternalStore)(mR,gR)}var qo=R(J(),1),Vt=R(X(),1),hR=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:d})=>{let f=(0,qo.useId)().replace(/:/g,""),c=`${f}-glow`,p=`${f}-grad`,g=`beam-flow-${f}`,y=(0,qo.useRef)(null),[w,h]=(0,qo.useState)(0);(0,qo.useEffect)(()=>{y.current&&h(y.current.getTotalLength())},[e]);let{dashSize:x,gapSize:m,offsetRange:b}=(0,qo.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,k=_*(1/3),T=_*(2/3);return{dashSize:k,gapSize:T,offsetRange:_}},[w]),S=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-b:0}px; }
            to { stroke-dashoffset: ${s?0:-b}px; }
        }
    `;return(0,Vt.jsxs)("g",{className:d,children:[(0,Vt.jsxs)("defs",{children:[(0,Vt.jsx)("style",{children:S}),(0,Vt.jsxs)("filter",{id:c,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,Vt.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,Vt.jsxs)("feMerge",{children:[(0,Vt.jsx)("feMergeNode",{in:"blur"}),(0,Vt.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,Vt.jsxs)("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",children:[(0,Vt.jsx)("stop",{offset:"0%",stopColor:n}),(0,Vt.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,Vt.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,Vt.jsx)("path",{ref:y,d:e,fill:"none",stroke:"none"}),w>0&&(0,Vt.jsx)("path",{d:e,stroke:`url(#${p})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${x} ${m}`,fill:"none",filter:`url(#${c})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},XL=hR;var gd=R(J(),1);var jL=R(J(),1);var xR={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u8868\u683C","node.type.video_composition":"\u89C6\u9891\u5408\u6210","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.offline":"\u5A92\u4F53\u5DF2\u8131\u673A","node.offlineHint":"\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u79FB\u52A8\uFF0C\u53EF\u91CD\u65B0\u94FE\u63A5\u3002","node.relink":"\u91CD\u65B0\u94FE\u63A5","node.relinkOk":"\u5DF2\u91CD\u65B0\u94FE\u63A5\u6E90\u6587\u4EF6","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u8868\u683C\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u7ED3\u6784\u5316\u6570\u636E\u3001\u591A\u6A21\u6001\u5206\u955C\u4E0E\u6279\u91CF\u8BB0\u5F55","toolbar.add.video_composition":"\u6DFB\u52A0\u89C6\u9891\u5408\u6210\u8282\u70B9","toolbar.add.video_compositionDesc":"\u591A\u8F68\u526A\u8F91\u3001\u5B57\u5E55\u4E0E\u6210\u7247\u5BFC\u51FA","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u5185\u5BB9\u51B2\u7A81\uFF08\u5DE5\u4F5C\u6D41\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u5185\u5BB9\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u6D41\u5DF2\u5728\u540E\u53F0\u6216\u5176\u4ED6\u4F1A\u8BDD\u88AB\u66F4\u65B0\u3002","app.conflictOverwrite":"\u4FDD\u7559\u5F53\u524D\u753B\u5E03\u4FEE\u6539","app.conflictReload":"\u653E\u5F03\u672A\u5B58\u6539\u52A8\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","palette.node.video_composition":"\u89C6\u9891\u5408\u6210","clip.needPlugin":"\u9700\u8981\u5B89\u88C5\u526A\u8F91\u5DE5\u574A\u63D2\u4EF6","clip.openEditor":"\u6253\u5F00\u526A\u8F91","clip.openEditorTitle":"\u6253\u5F00\u89C6\u9891\u526A\u8F91\u7F16\u8F91\u5668","clip.download":"\u4E0B\u8F7D","clip.downloadTitle":"\u4E0B\u8F7D\u5408\u6210\u89C6\u9891","clip.reEdit":"\u91CD\u65B0\u7F16\u8F91","clip.duration":"\u65F6\u957F","clip.resolution":"\u5206\u8FA8\u7387","clip.openClip":"\u6253\u5F00\u89C6\u9891\u526A\u8F91","clip.launcherTitle":"\u5F00\u59CB\u89C6\u9891\u5408\u6210","clip.launcherBlurb":"\u5F00\u6E90 AI \u89C6\u9891\u526A\u8F91\u5DE5\u5177\uFF0C\u652F\u6301\u81EA\u52A8\u526A\u8F91\u4E0E\u5B57\u5E55\u751F\u6210\u3002","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210","picker.title":"\u9009\u62E9\u8D44\u6E90","picker.tab.canvas":"\u753B\u5E03\u4E0A\u7684\u8D44\u6E90","picker.tab.local":"\u672C\u5730\u5BFC\u5165","picker.search":"\u641C\u7D22\u8D44\u6E90...","picker.filter.all":"\u5168\u90E8","picker.filter.image":"\u56FE\u7247","picker.filter.video":"\u89C6\u9891","picker.filter.audio":"\u97F3\u9891","picker.view.grid":"\u7F51\u683C\u89C6\u56FE","picker.view.list":"\u5217\u8868\u89C6\u56FE","picker.added":"\u5DF2\u6DFB\u52A0","picker.empty":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u53EF\u5F15\u7528\u7684\u5A92\u4F53\u8D44\u6E90","picker.emptyFilter":"\u6CA1\u6709\u5339\u914D\u7684\u8D44\u6E90","picker.dropTitle":"\u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u9009\u62E9","picker.dropHint":"\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\uFF0C\u53EF\u4E00\u6B21\u9009\u62E9\u591A\u4E2A\u6587\u4EF6","picker.chooseFiles":"\u9009\u62E9\u6587\u4EF6","picker.removeFile":"\u79FB\u9664\u6587\u4EF6","picker.unsupported":"\u90E8\u5206\u6587\u4EF6\u7C7B\u578B\u4E0D\u53D7\u652F\u6301\uFF0C\u5DF2\u8DF3\u8FC7","picker.cancel":"\u53D6\u6D88","picker.use":"\u4F7F\u7528","picker.items":"\u9879","picker.addRef":"\u6DFB\u52A0\u53C2\u8003\u8D44\u6E90","picker.commitOk":"\u5DF2\u6DFB\u52A0\u6240\u9009\u8D44\u6E90","picker.commitPartial":"\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u6DFB\u52A0\uFF08\u5DF2\u8FDE\u63A5\u6216\u7C7B\u578B\u4E0D\u5339\u914D\uFF09","picker.commitEmpty":"\u6CA1\u6709\u53EF\u6DFB\u52A0\u7684\u8D44\u6E90","picker.commitFailed":"\u6DFB\u52A0\u8D44\u6E90\u5931\u8D25","picker.needPath":"\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u9009\u62E9\u5668\u5BFC\u5165\uFF0C\u5F53\u524D\u73AF\u5883\u62FF\u4E0D\u5230\u672C\u5730\u8DEF\u5F84\u3002","picker.pickFailed":"\u6253\u5F00\u7CFB\u7EDF\u6587\u4EF6\u9009\u62E9\u5668\u5931\u8D25\u3002"},YL=xR;var bR={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Table","node.type.video_composition":"Video Composition","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.offline":"Media offline","node.offlineHint":"The source file is missing or moved. Relink to restore preview.","node.relink":"Relink","node.relinkOk":"Source file relinked","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Structured records & multimodal batch datasets","toolbar.add.video_composition":"Add Video Composition node","toolbar.add.video_compositionDesc":"Multi-track edit, captions, and export","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Content conflict (updated elsewhere)","app.conflictBanner":"Content conflict: This workflow was updated in background or another session.","app.conflictOverwrite":"Keep Current Changes","app.conflictReload":"Discard and Reload Latest","palette.group.material":"Material","palette.node.material":"Material Node","palette.node.video_composition":"Video Composition","clip.needPlugin":"Clip Studio plugin is required","clip.openEditor":"Open Clip Editor","clip.openEditorTitle":"Open the video clip editor","clip.download":"Download","clip.downloadTitle":"Download composed video","clip.reEdit":"Re-edit","clip.duration":"Duration","clip.resolution":"Resolution","clip.openClip":"Open Video Clip","clip.launcherTitle":"Start Video Composition","clip.launcherBlurb":"Open-source AI video clip studio with auto-cutting and subtitle generation.","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation","picker.title":"Select resources","picker.tab.canvas":"Canvas resources","picker.tab.local":"Local import","picker.search":"Search resources...","picker.filter.all":"All","picker.filter.image":"Images","picker.filter.video":"Videos","picker.filter.audio":"Audio","picker.view.grid":"Grid view","picker.view.list":"List view","picker.added":"Added","picker.empty":"No media resources on the canvas yet","picker.emptyFilter":"No matching resources","picker.dropTitle":"Drop files here, or click to choose","picker.dropHint":"Images, videos, and audio. Multiple files allowed.","picker.chooseFiles":"Choose files","picker.removeFile":"Remove file","picker.unsupported":"Some files were skipped because the type is not supported","picker.cancel":"Cancel","picker.use":"Use","picker.items":"items","picker.addRef":"Add reference resources","picker.commitOk":"Resources added","picker.commitPartial":"Some resources could not be added (already connected or type mismatch)","picker.commitEmpty":"Nothing to add","picker.commitFailed":"Failed to add resources","picker.needPath":"Use the system file picker; this environment cannot read a local path.","picker.pickFailed":"Could not open the system file picker."},ZL=bR;var Ix={zh:YL,en:ZL},mp="zh",Mx=new Set;function yR(e){return Mx.add(e),()=>Mx.delete(e)}function wR(){return mp}function WL(e){let t=e==="en"?"en":"zh";if(t!==mp){mp=t;for(let a of Mx)a()}}function Sn(e){return Ix[mp][e]??Ix.zh[e]??Ix.en[e]??e}function se(){return(0,jL.useSyncExternalStore)(yR,wR),Sn}var hp=R(X(),1),gp=28,vR=({edgeId:e,x:t,y:a})=>{let o=se(),n=ie(i=>i.applyCanvasInputMutation),r=(0,gd.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,gd.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,hp.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-gp/2,y:a-gp/2,width:gp,height:gp,children:(0,hp.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,hp.jsx)(sd,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},xp=(0,gd.memo)(vR);var ao=R(X(),1),CR=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[d,u,f]=Ui({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),c=Ge(w=>w.nodeStatuses[s]==="running"),p=GL(),g=i?"var(--wb-accent)":"var(--wb-edge)",y=i?2.5:2;return c&&p?(0,ao.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,ao.jsx)(hr,{id:e,path:d,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:y}}),(0,ao.jsx)(xp,{edgeId:e,x:u,y:f})]}):c?(0,ao.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,ao.jsx)(hr,{id:e,path:d,style:{stroke:g,strokeWidth:y,opacity:0}}),(0,ao.jsx)(XL,{pathD:d,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:y}),(0,ao.jsx)(xp,{edgeId:e,x:u,y:f})]}):(0,ao.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,ao.jsx)(hr,{id:e,path:d,style:{stroke:g,strokeWidth:y}}),(0,ao.jsx)(xp,{edgeId:e,x:u,y:f})]})},$L=(0,KL.memo)(CR);var Ki=R(J(),1);function oo(e){e.stopPropagation()}function Nx(e){e.preventDefault(),e.stopPropagation()}var ce=R(X(),1),SR=[{type:"text",Icon:Qt,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:vn,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:bo,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:to,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Da,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"},{type:"video_composition",Icon:qt,color:"#f472b6",bg:"rgba(244, 114, 182, 0.16)"}],LR=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:d,onToggleAddMenu:u,isAssetsOpen:f=!1})=>{let c=se(),[p,g]=(0,Ki.useState)(!1),y=d!==void 0?d:p,w=u||(()=>g(m=>!m)),h=(0,Ki.useCallback)(m=>{e(m),u?u():g(!1)},[e,u]),x=[{key:"select",icon:(0,ce.jsx)(ji,{size:15}),label:c("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,ce.jsx)(Zi,{size:15}),label:c("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,ce.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:oo,onMouseDown:oo,children:[(0,ce.jsxs)("div",{style:{position:"relative"},children:[(0,ce.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${y?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:Nx,title:c("toolbar.addNode"),children:(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(Qe,{size:20})})}),y&&(0,ce.jsx)("div",{className:"wf-dock-add-popover",children:SR.map(m=>(0,ce.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:Nx,children:[(0,ce.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,ce.jsx)(m.Icon,{size:18})}),(0,ce.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,ce.jsx)("span",{className:"wf-dock-add-popover__label",children:c(`node.type.${m.type}`)}),(0,ce.jsx)("span",{className:"wf-dock-add-popover__desc",children:c(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ce.jsx)(dd,{items:x,selectedKeys:[r],placement:"topCenter",children:(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:c(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,ce.jsx)(ji,{size:16}):(0,ce.jsx)(Zi,{size:16})}),(0,ce.jsx)(Hu,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,ce.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:c("toolbar.assets"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(Yu,{size:17})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.assets")})]}),(t||a)&&(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:c("toolbar.undoTitle"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(wl,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.undo")})]}),a&&(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:c("toolbar.redoTitle"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(xl,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.redo")})]}),s&&(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,ce.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:c("toolbar.help"),children:[(0,ce.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,ce.jsx)(ho,{size:16})}),(0,ce.jsx)("span",{className:"wf-canvas-toolbar__label",children:c("toolbar.help")})]})]})]})},QL=(0,Ki.memo)(LR);var $i=R(J(),1);var ge=R(X(),1),_R={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},kR=e=>Math.round(e.transform[2]*100),IR=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:d})=>{let u=se(),{zoomIn:f,zoomOut:c,fitView:p}=Ta(),g=ye(kR),y=Ge(T=>T.status),w=Ge(T=>T.progress),h=Ge(T=>T.error),x=y==="pending"||y==="running",m=y==="paused",b=y==="completed"||y==="error"||y==="cancelled",S=w.total>0,C=(0,$i.useCallback)(()=>{p({duration:250,padding:.1})},[p]),v=(0,$i.useCallback)(()=>{f({duration:150})},[f]),_=(0,$i.useCallback)(()=>{c({duration:150})},[c]),k=[{key:"split-left",label:u("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:u("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:u("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:u("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,ge.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:oo,onMouseDown:oo,children:[r&&(x||m||b&&d?(0,ge.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[x||m?(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${y}`,children:[u(_R[y]),S&&` (${w.completed}/${w.total})`]}),x?(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:u("exec.pauseTitle"),children:(0,ge.jsx)(ad,{size:14})}):(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:u("exec.resumeTitle"),children:(0,ge.jsx)(Aa,{size:14})}),(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:u("exec.cancelTitle"),children:(0,ge.jsx)(kt,{size:14})})]}):(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||u("exec.runAll"),"aria-label":u("exec.runAll"),children:(0,ge.jsx)(Aa,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&d&&(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:d,title:u("exec.resetTitle"),children:(0,ge.jsx)(nd,{size:14})})]}):(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||u("exec.runAll"),"aria-label":u("exec.runAll"),children:(0,ge.jsx)(Aa,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,ge.jsxs)("div",{className:"wf-header-capsule",children:[(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:C,title:u("header.fitView"),children:(0,ge.jsx)(Ju,{size:15})}),(0,ge.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:u("header.zoomOut"),children:(0,ge.jsx)(ed,{size:15})}),(0,ge.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:C,title:u("header.fitView"),children:[g,"%"]}),(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:u("header.zoomIn"),children:(0,ge.jsx)(Qe,{size:15})})]}),(0,ge.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:u("header.alignGrid"),children:(0,ge.jsx)(gl,{size:15})}),(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:u("header.routingCurved"),children:(0,ge.jsx)(ud,{size:15})}),(0,ge.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:u("header.minimap"),children:(0,ge.jsx)(Qu,{size:15})}),n&&(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("div",{className:"wf-header-capsule__divider"}),(0,ge.jsx)(dd,{items:k,selectedKeys:[o],placement:"bottomRight",children:(0,ge.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:u("header.splitLayout"),children:(0,ge.jsx)(kr,{size:15})})})]})]})]})},JL=(0,$i.memo)(IR);var Vo=R(J(),1);var de=R(X(),1),MR=[{key:"all",label:"\u5168\u90E8",icon:wr},{key:"character",label:"\u89D2\u8272 (1)",icon:Ra},{key:"scene",label:"\u573A\u666F (2)",icon:xo},{key:"prop",label:"\u9053\u5177 (3)",icon:id},{key:"style",label:"\u98CE\u683C (4)",icon:Ra},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:Qt},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:wr},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:qt}],NR=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,Vo.useState)(o),[i,s]=(0,Vo.useState)(""),[d,u]=(0,Vo.useState)([]),[f,c]=(0,Vo.useState)(!1),[p,g]=(0,Vo.useState)(null),y=(0,Vo.useCallback)(async()=>{c(!0),g(null);try{let x=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${x}`),b=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(b=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let S=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(S=_.artifacts.map(k=>({id:k.id,name:k.name||k.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:k.prompt||k.agent,real_path:k.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(k.id)}`,tags:[k.type||"artifact"],updatedAt:k.createdAt})))}}let C=[...b,...S];u(C)}catch(x){g(x.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{c(!1)}},[r]);(0,Vo.useEffect)(()=>{e&&y()},[e,y]);let w=x=>{l(x),n?.(x)},h=d.filter(x=>{if(!i.trim())return!0;let m=i.toLowerCase();return x.name.toLowerCase().includes(m)||x.description&&x.description.toLowerCase().includes(m)||x.tags&&x.tags.some(b=>b.toLowerCase().includes(m))});return e?(0,de.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:oo,onMouseDown:oo,onClick:x=>x.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,de.jsx)(wr,{size:18}),(0,de.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,de.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:y,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,de.jsx)(_r,{size:14,className:f?"wf-spin":""})}),(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,de.jsx)(kt,{size:16})})]})]}),(0,de.jsx)("div",{className:"wf-assets-drawer__categories",children:MR.map(x=>{let m=x.icon,b=r===x.key;return(0,de.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${b?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(x.key),children:[(0,de.jsx)(m,{size:13}),(0,de.jsx)("span",{children:x.label})]},x.key)})}),(0,de.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,de.jsx)(bl,{size:14,className:"wf-assets-drawer__search-icon"}),(0,de.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:x=>s(x.target.value)}),i&&(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,de.jsx)(kt,{size:12})})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__body",children:[f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(_r,{size:20,className:"wf-spin"}),(0,de.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),p&&!f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,de.jsx)("span",{children:p}),(0,de.jsx)("button",{type:"button",onClick:y,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!f&&!p&&h.length===0&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(wr,{size:32,strokeWidth:1.2}),(0,de.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,de.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!f&&!p&&h.length>0&&(0,de.jsx)("div",{className:"wf-assets-drawer__grid",children:h.map(x=>(0,de.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(x),title:`\u70B9\u51FB\u5C06\u300C${x.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,de.jsxs)("div",{className:"wf-assets-card__preview",children:[x.type==="scene"||x.type==="character"||x.type==="artifacts"?(0,de.jsx)("img",{src:x.previewUrl,alt:x.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,de.jsx)(Qt,{size:24,className:"wf-assets-card__file-icon"}),(0,de.jsx)("span",{className:"wf-assets-card__type-tag",children:x.type})]}),(0,de.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,de.jsx)("div",{className:"wf-assets-card__name",children:x.name}),x.description&&(0,de.jsx)("div",{className:"wf-assets-card__desc",children:x.description})]}),(0,de.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(x)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,de.jsx)(Qe,{size:14}),(0,de.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},x.id))})]})]}):null},e_=NR;var Mt=R(X(),1),ER=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],TR=({isOpen:e,onClose:t})=>e?(0,Mt.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:oo,onMouseDown:oo,onClick:t,children:(0,Mt.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,Mt.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,Mt.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,Mt.jsx)(Ku,{size:18}),(0,Mt.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,Mt.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,Mt.jsx)(kt,{size:16})})]}),(0,Mt.jsx)("div",{className:"wf-shortcuts-modal__body",children:ER.map(a=>(0,Mt.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,Mt.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,Mt.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,Mt.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,Mt.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,Mt.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,Mt.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,t_=TR;var no=R(J(),1),n_=R(Io(),1);var Nt=R(X(),1),a_=278,_l=12,AR=8,Ex=160,Ll=18,RR={AudioLines:(0,Nt.jsx)(pl,{size:Ll}),ImageGen:(0,Nt.jsx)(vn,{size:Ll}),Mic:(0,Nt.jsx)(hl,{size:Ll}),PersonStanding:(0,Nt.jsx)(od,{size:Ll}),TextGen:(0,Nt.jsx)(Cn,{size:Ll}),VideoGen:(0,Nt.jsx)(bo,{size:Ll})},DR={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function o_(e){return e?DR[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function zR(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-a_:e;return Math.min(Math.max(_l,o),Math.max(_l,a-a_-_l))}var PR=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,no.useRef)(null),[d,u]=(0,no.useState)({left:t,top:a,maxHeight:Ex});(0,no.useLayoutEffect)(()=>{if(!e)return;let c=typeof window>"u"?Ex:window.innerHeight,p=zR(t,i),g=a+AR,y=Math.max(_l,c-_l-Ex),w=Math.min(Math.max(_l,g),y);u({left:p,top:w,maxHeight:Math.max(0,c-w-_l)})},[i,e,t,a]),(0,no.useEffect)(()=>{if(!e)return;let c=g=>{s.current&&!s.current.contains(g.target)&&l()},p=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",c,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",c,!0),document.removeEventListener("keydown",p)}},[l,e]);let f=(0,no.useMemo)(()=>n.map(c=>(0,Nt.jsx)("button",{type:"button","data-testid":`menu-item-${c.key}`,className:"wf-action-menu__item",onClick:()=>r(c.key),children:(0,Nt.jsxs)("div",{className:"wf-action-menu__item-inner",children:[c.icon?(0,Nt.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:o_(c.icon).bg,color:o_(c.icon).color},children:RR[c.icon]??(0,Nt.jsx)(Ra,{size:Ll})}):null,(0,Nt.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,Nt.jsx)("span",{className:"wf-action-menu__item-label",children:c.label}),c.description?(0,Nt.jsx)("span",{className:"wf-action-menu__item-desc",children:c.description}):null]})]})},c.key)),[r,n]);return!e||n.length===0?null:(0,n_.createPortal)((0,Nt.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:d.left,top:d.top,maxHeight:d.maxHeight},children:[(0,Nt.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,Nt.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},bp=(0,no.memo)(PR);var ro=R(J(),1),r_=R(Io(),1);var ze=R(X(),1),OR=210,BR=230,HR=260,FR=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:d=!1,hasSelection:u=!1})=>{let f=(0,ro.useRef)(null),[c,p]=(0,ro.useState)("main"),g=se();(0,ro.useEffect)(()=>{a&&p("main")},[a]),(0,ro.useEffect)(()=>{if(!a)return;let b=C=>{f.current&&!f.current.contains(C.target)&&n()},S=C=>{C.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",S)}},[a,n]);let y=(0,ro.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!d},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!u},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!u},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!d},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,ze.jsx)(Qe,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!d},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,d,u,g]),w=(0,ro.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,ze.jsx)(Cn,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,ze.jsx)(xo,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,ze.jsx)(bo,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,ze.jsx)(pl,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,ze.jsx)(Da,{size:18}),badge:{text:"HTable",variant:"primary"}},{key:"video_composition",type:"video_composition",label:g("node.type.video_composition"),icon:(0,ze.jsx)(qt,{size:18}),badge:{text:"Clip",variant:"new"}}],[g]);if(!a)return null;let h=c==="add-node"?BR:OR,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-HR-8);return(0,r_.createPortal)((0,ze.jsx)("div",{ref:f,className:`wf-context-menu ${c==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:b=>b.preventDefault(),children:c==="main"?y.map(b=>(0,ze.jsxs)(ro.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,ze.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,ze.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,ze.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:S=>{S.stopPropagation(),b.action==="open-add-node"?p("add-node"):r(b.action,o)},children:[b.icon?(0,ze.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,ze.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,ze.jsx)(Yi,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,ze.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,ze.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,ze.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,ze.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),p("main")},title:g("menu.back"),children:(0,ze.jsx)(Bu,{size:16})}),(0,ze.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,ze.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(b=>(0,ze.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:S=>{S.stopPropagation(),l?.(b.type),n()},children:[(0,ze.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,ze.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,ze.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,ze.jsx)(Yi,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},l_=FR;var i_=R(J(),1),s_=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:d,onToggleShortcuts:u,onToggleMinimap:f,onToggleAddMenu:c,onSetPointerMode:p,onFitView:g,onResetZoom:y,onCategoryKey:w,isAssetsOpen:h=!1,enabled:x=!0})=>{(0,i_.useEffect)(()=>{if(!x)return;let m=b=>{let S=b.target;if(["INPUT","TEXTAREA"].includes(S.tagName)||S.isContentEditable)return;let C=b.metaKey||b.ctrlKey,v=b.key.toLowerCase();if(!C&&h&&/^[1-6]$/.test(b.key)){b.preventDefault(),w?.(parseInt(b.key,10));return}if(!C&&v==="a"){b.preventDefault(),d?.();return}if(!C&&v==="v"){b.preventDefault(),p?.("select");return}if(!C&&v==="h"){b.preventDefault(),p?.("pan");return}if(!C&&v==="n"){b.preventDefault(),c?.();return}if(!C&&v==="m"){b.preventDefault(),f?.();return}if(b.key==="?"||b.shiftKey&&b.key==="/"){b.preventDefault(),u?.();return}if(C&&b.key==="1"){b.preventDefault(),g?.();return}if(C&&b.key==="0"){b.preventDefault(),y?.();return}if((b.key==="Delete"||b.key==="Backspace")&&l&&!C){b.preventDefault(),o?.();return}if(b.key==="Escape"){b.preventDefault(),h?d?.():l&&n?.();return}if(C&&v==="d"&&l){b.preventDefault(),r?.();return}if(C&&v==="c"&&!b.shiftKey){b.preventDefault(),e?.();return}if(C&&v==="v"){b.preventDefault(),t?.();return}if(C&&v==="a"){b.preventDefault(),a?.();return}if(C&&v==="z"&&!b.shiftKey){b.preventDefault(),i?.();return}C&&v==="z"&&b.shiftKey&&(b.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,e,t,a,o,n,r,l,i,s,d,u,f,c,p,g,y,w,h])};var wo=R(J(),1);function yp(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function u_(e,t,a){return Tx(e,t,a).valid}function Tx(e,t,a){let o=sp(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var Ax={minZoom:.23,maxZoom:1.29,defaultZoom:1},UR={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},d_={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},qR={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},VR={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},c_={portrait:UR,square:d_,video_landscape:qR,audio_compact:VR};function Rx(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function f_(e){return c_[Rx(e)]}function p_(e,t){let a=c_[t]||d_;return Math.round(e/a.aspectRatio)}function Nr(e){return f_(e).default.width}function m_(e){return f_(e).default.height}function wp(e,t,a){let o=lp(e,{status:"empty",nodeWidth:Nr(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function kl(e,t,a){return{nodes:[wp(e,t,a)],edges:[]}}function Dx(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function GR(e,t){return`${e}-${t}`}function vp(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function Cp(e){return RL(e).map(t=>{let a=String(t.targetTool);return{key:GR(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function g_(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var XR={visible:!1,x:0,y:0,options:[]};function h_(e){let t=se(),{screenToFlowPosition:a}=Ta(),o=ie(p=>p.applyCanvasInputMutation),n=(0,wo.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,wo.useState)(XR),i=(0,wo.useRef)(null),s=(0,wo.useRef)(null),d=(0,wo.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let y=ie.getState().nodes.find(h=>h.id===g.nodeId),w=y?.data?.materialType;if(!y||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),u=(0,wo.useCallback)((p,g)=>{let y=g.fromNode?.id??null,w=g.toNode?.id??null,h=i.current,x=h?Cp(h.materialType):[],m=null;if(!g.isValid&&y&&w){let S=ie.getState(),C=Tx({source:y,target:w,sourceHandle:null,targetHandle:null},S.nodes,S.edges);m=C.valid?null:t(yp(C.reasonCode))}let b=g_({isValid:g.isValid??null,fromNodeId:y,toNodeId:w,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),Te.warning(b.reason),i.current=null;return}if(b.type==="menu"&&h){let S="changedTouches"in p?p.changedTouches[0]:p;if(!S){i.current=null;return}let{clientX:C,clientY:v}=S;s.current=a({x:C,y:v}),l({visible:!0,x:C,y:v,options:x.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),f=(0,wo.useCallback)(p=>{let g=i.current,y=s.current,w=vp(p);if(g&&y&&w){let h=kl(w.targetMaterialType,y),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}l(h=>({...h,visible:!1})),i.current=null,s.current=null},[o]),c=(0,wo.useCallback)(()=>{l(p=>({...p,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:d,onConnectEnd:u,onMenuSelect:f,onMenuClose:c}}var Go=R(J(),1);var Ot=[];for(let e=0;e<256;++e)Ot.push((e+256).toString(16).slice(1));function x_(e,t=0){return(Ot[e[t+0]]+Ot[e[t+1]]+Ot[e[t+2]]+Ot[e[t+3]]+"-"+Ot[e[t+4]]+Ot[e[t+5]]+"-"+Ot[e[t+6]]+Ot[e[t+7]]+"-"+Ot[e[t+8]]+Ot[e[t+9]]+"-"+Ot[e[t+10]]+Ot[e[t+11]]+Ot[e[t+12]]+Ot[e[t+13]]+Ot[e[t+14]]+Ot[e[t+15]]).toLowerCase()}var zx,YR=new Uint8Array(16);function Px(){if(!zx){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");zx=crypto.getRandomValues.bind(crypto)}return zx(YR)}var ZR=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ox={randomUUID:ZR};function jR(e,t,a){e=e||{};let o=e.random??e.rng?.()??Px();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return x_(o)}function WR(e,t,a){return Ox.randomUUID&&!t&&!e?Ox.randomUUID():jR(e,t,a)}var Sp=WR;function b_(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function KR(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function y_(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=KR(o),l,i;if(t)l=t.x,i=t.y;else{let f=a?50:30;l=r.x+f,i=r.y+f}let s=new Map,d=o.map(f=>{let c=Sp();return s.set(f.id,c),{...f,id:c,position:{x:l+(f.position.x-r.x),y:i+(f.position.y-r.y)},selected:!0}}),u=n.map(f=>({...f,id:Sp(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:d,edges:u,newPastePosition:{x:l,y:i}}}function w_(e,t){let a=(0,Go.useRef)({nodes:[],edges:[]}),o=(0,Go.useRef)(null),n=a.current.nodes.length>0,r=(0,Go.useCallback)(()=>{let f=ie.getState(),c=b_(f.nodes,f.edges);c.nodes.length>0&&(a.current=c,o.current=null)},[]),l=(0,Go.useCallback)(f=>{let c=y_(a.current,f,o.current);if(!c)return;o.current=c.newPastePosition;let p=ie.getState();p.applyCanvasInputMutation({addNodes:c.nodes,addEdges:c.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,Go.useCallback)(()=>{r(),l()},[r,l]),s=(0,Go.useCallback)(()=>{let f=ie.getState(),c=f.nodes.filter(p=>p.selected).map(p=>p.id);c.length!==0&&f.applyCanvasInputMutation({removeNodeIds:c})},[]),d=(0,Go.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!0})))},[e]),u=(0,Go.useCallback)(()=>{e(f=>f.map(c=>({...c,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:d,clearSelection:u}}var Xo=R(J(),1);function v_(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:d,redo:u,onExecuteNodeIds:f,onAddNode:c}=e,[p,g]=(0,Xo.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),y=(0,Xo.useCallback)((C,v)=>{C.preventDefault();let _={type:"pane"};v?_={type:"node",nodeId:v.id}:ie.getState().nodes.filter(T=>T.selected).length>1&&(_={type:"selection"}),g({visible:!0,x:C.clientX,y:C.clientY,context:_})},[]),w=(0,Xo.useCallback)((C,v)=>{y(C,v)},[y]),h=(0,Xo.useCallback)(C=>{y(C)},[y]),x=(0,Xo.useCallback)(C=>{y(C)},[y]),m=(0,Xo.useCallback)(()=>{g(C=>({...C,visible:!1}))},[]),b=(0,Xo.useCallback)((C,v)=>{let _=t({x:p.x,y:p.y});switch(C){case"copy":{if(v.type==="node"){let T=ie.getState().nodes.find(E=>E.id===v.nodeId);T&&!T.selected&&(s(),a(E=>E.map(F=>F.id===v.nodeId?{...F,selected:!0}:F)))}o();break}case"paste":n(_);break;case"duplicate":r();break;case"delete":{if(v.type==="node"){let k=ie.getState();k.nodes.find(E=>E.id===v.nodeId)?.selected?l():k.applyCanvasInputMutation({removeNodeIds:[v.nodeId]})}else l();break}case"undo":d();break;case"redo":u();break;case"select-all":i();break;case"execute-selection":{let k=ie.getState().nodes.filter(T=>T.selected).map(T=>T.id);k.length>0&&f?.(k);break}case"execute-node":{v.type==="node"&&f?.([v.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,l,d,u,i,m,f]),S=(0,Xo.useCallback)(C=>{let v=t({x:p.x,y:p.y});c?.(C,v),m()},[p.x,p.y,t,c,m]);return{menu:p,handleNodeContextMenu:w,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:S}}var $R=R(J(),1),Bx=new Map;function Lp(e){Bx.set(e.type,e)}function C_(){let e={};for(let[t,a]of Bx)e[t]=a.component;return e}function S_(e,t,a){let o=Bx.get(e);return o?{id:a,type:e,position:t,data:o.defaultData()}:null}var at=R(J(),1);var Xe=R(J(),1);function L_(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var vo=R(X(),1),QR=4,JR=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=se(),[l,i]=(0,Xe.useState)(!1),[s,d]=(0,Xe.useState)(!1),[u,f]=(0,Xe.useState)(null),c=(0,Xe.useRef)(null),p=(0,Xe.useRef)(null),g=(0,Xe.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),y=e==="left",w=a==="plus"&&!!o&&o.length>0,h=wx(I=>I.inProgress),{screenToFlowPosition:x}=Ta(),m=(0,Xe.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,Xe.useEffect)(()=>{if(a!=="plus"){m();return}let I=c.current,A=p.current;if(!I||!A)return;let z=V=>{if(s)return;let D=I.getBoundingClientRect(),U=D.left+D.width/2,Z=D.top+D.height/2,{x:W,y:j}=L_(e,V.clientX-U,V.clientY-Z);A.style.setProperty("--wf-handle-offset-x",`${W}px`),A.style.setProperty("--wf-handle-offset-y",`${j}px`)};return I.addEventListener("pointermove",z),()=>{I.removeEventListener("pointermove",z)}},[s,m,e,a]),(0,Xe.useEffect)(()=>{if(!s){m(),f(null);return}let I=()=>{let A=c.current;if(!A)return;let z=A.getBoundingClientRect();f({x:y?z.right:z.left,y:z.bottom})};return I(),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),()=>{window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)}},[s,y,m]);let b=(0,Xe.useCallback)(()=>{i(!0)},[]),S=(0,Xe.useCallback)(()=>{i(!1),m()},[m]),C=(0,Xe.useCallback)(I=>{let A=c.current;!A||I===null||typeof A.hasPointerCapture!="function"||typeof A.releasePointerCapture!="function"||!A.hasPointerCapture(I)||A.releasePointerCapture(I)},[]),v=(0,Xe.useCallback)(()=>{C(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[C]),_=(0,Xe.useCallback)(I=>{I.button===0&&(typeof I.currentTarget.setPointerCapture=="function"&&I.currentTarget.setPointerCapture(I.pointerId),g.current.pointerId=I.pointerId,g.current.startX=I.clientX,g.current.startY=I.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),k=(0,Xe.useCallback)(I=>{if(g.current.pointerId!==I.pointerId)return;Math.hypot(I.clientX-g.current.startX,I.clientY-g.current.startY)>=QR&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&d(!1))},[s]),T=(0,Xe.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),E=(0,Xe.useCallback)(I=>{g.current.pointerId===I.pointerId&&(g.current.suppressClick=!1,v())},[v]),F=(0,Xe.useCallback)(I=>{if(I.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&d(A=>!A)},[w]),O=(0,Xe.useCallback)(()=>{let I=u;if(!I){let A=c.current;if(!A)return;let z=A.getBoundingClientRect();I={x:y?z.right:z.left,y:z.bottom}}return{screenPosition:I,flowPosition:x(I)}},[y,u,x]),L=(0,Xe.useCallback)(I=>{n?.(I,O()),d(!1)},[n,O]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),N={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,vo.jsxs)(Gi,{id:y?"in":"out",type:y?"target":"source",position:y?ae.Left:ae.Right,isConnectable:!0,className:M,style:N,children:[(0,vo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,vo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,vo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,vo.jsx)("div",{ref:c,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:S,onPointerDown:_,onPointerMove:k,onPointerUp:T,onPointerCancel:E,onClick:F,children:(0,vo.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,vo.jsx)("div",{className:"wf-handle__plus-button",children:(0,vo.jsx)(Qe,{size:24,strokeWidth:2.5})})})}):null,w&&u?(0,vo.jsx)(bp,{visible:s,x:u.x,y:u.y,align:y?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>d(!1)}):null]})},Ln=(0,Xe.memo)(JR);var Co=R(J(),1);var Bt=R(X(),1);function eD(e){let t=se();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var tD=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=se(),d=(0,Co.useRef)(e),[u,f]=(0,Co.useState)(e==="completed"?"complete":"idle"),[c,p]=(0,Co.useState)(1),[g,y]=(0,Co.useState)(e==="completed"?1:0),[w,h]=(0,Co.useState)(e==="pending"||e==="generating");(0,Co.useEffect)(()=>{let F=d.current;if(d.current=e,(F==="pending"||F==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),y(1)});let O=setTimeout(()=>{f("complete"),h(!1)},i+50);return()=>clearTimeout(O)}F==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),y(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),y(0),f("idle")),e==="failed"&&(h(!1),f("idle")),F===e&&e==="completed"&&(f("complete"),y(1),h(!1))},[e,i]);let x=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",S=s(e==="pending"?"node.preparing":"node.generating"),C=eD(a),v=(0,Co.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,k=()=>(0,Bt.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:c},children:(0,Bt.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,Bt.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,Bt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,Bt.jsx)("span",{className:"wf-gsc__progress-text",children:S})})]})}),T=()=>(0,Bt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,Bt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,Bt.jsx)(kt,{size:24})}),(0,Bt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),C?(0,Bt.jsx)("span",{className:"wf-gsc__failed-message",children:C}):null,o?(0,Bt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,Bt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,Bt.jsx)(_r,{size:14}),s("node.regenerate")]}):null]}),E=F=>(0,Bt.jsx)("div",{className:`${l} ${F?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,Bt.jsxs)("div",{className:`wf-gsc ${x?_:""} ${l}`,children:[(x||w)&&k(),m&&T(),(b||u==="crossfading")&&E(u==="crossfading")]})},hd=tD;var gt=R(J(),1);function lo(e){return e>0?1/e:1}function __(e,t,a){return!!e&&!t&&a!=="running"}function k_(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var Er=R(X(),1),I_=24,M_=30,N_={text:Qt,image:vn,video:bo,audio:to,table:Da,video_composition:qt},aD=({label:e,materialType:t="text",customIcon:a,onLabelChange:o,trailing:n})=>{let r=se(),l=t?r(`node.type.${t}`):"\u8282\u70B9",i=e||l,{zoom:s}=Ja(),[d,u]=(0,gt.useState)(!1),[f,c]=(0,gt.useState)(i),p=(0,gt.useRef)(null),g=(0,gt.useMemo)(()=>lo(s),[s]);(0,gt.useEffect)(()=>{d&&p.current&&(p.current.focus(),p.current.select())},[d]),(0,gt.useEffect)(()=>{d||c(i)},[i,d]);let y=(0,gt.useCallback)(C=>{C.stopPropagation(),u(!0),c(i)},[i]),w=(0,gt.useCallback)(()=>{let v=f.trim()||l;u(!1),v!==e&&o&&o(v)},[f,l,e,o]),h=(0,gt.useCallback)(()=>{u(!1),c(i)},[i]),x=(0,gt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),w()):C.key==="Escape"&&(C.preventDefault(),h())},[w,h]),m=(0,gt.useCallback)(C=>{let v=C.target.value;v.length<=M_&&c(v)},[]),b=()=>{if(a)return gt.default.isValidElement(a)?a:(0,Er.jsx)(a,{size:14});let C=(t in N_?N_[t]:null)||Qt;return(0,Er.jsx)(C,{size:14})};return(0,Er.jsxs)("div",{className:"wf-node-header",style:{top:-(I_+4*g),height:I_,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Er.jsx)("span",{className:"wf-node-header__icon",children:b()}),d?(0,Er.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:w,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:M_}):(0,Er.jsx)("span",{onDoubleClick:y,className:"wf-node-header__label",title:i.length>20?i:r("node.renameHint"),children:i}),n]})},Qi=(0,gt.memo)(aD);var _p=R(J(),1);var Yo=R(X(),1),oD=({executionStatus:e,status:t})=>{let a=se();return(0,_p.useMemo)(()=>{switch(e){case"running":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"offline":return(0,Yo.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--offline",title:a("node.offline")});default:return null}},[e,t,a])},kp=(0,_p.memo)(oD);var Il=R(J(),1);function _n(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var xd=R(X(),1);var nD=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,Il.useMemo)(()=>_n(e,t,a),[e,t,a]),l=(0,Il.useCallback)(s=>{let d=s.currentTarget;d.naturalWidth>0&&d.naturalHeight>0&&n?.(d.naturalWidth,d.naturalHeight)},[n]),i=(0,Il.useCallback)(s=>{let d=s.currentTarget;d.videoWidth>0&&d.videoHeight>0&&n?.(d.videoWidth,d.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,xd.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,xd.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,xd.jsx)("div",{className:"wf-media-preview__audio",children:(0,xd.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},E_=(0,Il.memo)(nD);var T_=R(J(),1);var Be=R(X(),1),rD=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=se();return e==="text"?(0,Be.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(Qt,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,Be.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,Be.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,Be.jsx)(Ho,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.writePrompt")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,Be.jsx)(Fu,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.scriptGen")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,Be.jsx)(Oo,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.planningGen")})]}),(0,Be.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,Be.jsx)(Ra,{size:14,className:"wf-node-empty__pill-icon"}),(0,Be.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(xo,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(Aa,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,Be.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,Be.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,Be.jsx)(to,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},Ip=(0,T_.memo)(rD);var kn=R(J(),1);var Et=R(X(),1),lD=({materialType:e,selected:t,onOpenResourcePicker:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=se(),{zoom:i}=Ja(),[s,d]=kn.default.useState(!1),u=(0,kn.useMemo)(()=>lo(i),[i]),f=(0,kn.useCallback)(()=>{n&&(n(),d(!0),setTimeout(()=>d(!1),1500))},[n]),c=(0,kn.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,Et.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*u),transform:`translate(-50%, -100%) scale(${u})`,transformOrigin:"bottom center"},onClick:g=>g.stopPropagation(),children:e==="text"?(0,Et.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,Et.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,Et.jsx)(Oo,{size:13,className:"wf-floating-top-pill__icon"}),(0,Et.jsx)("span",{children:l("pill.textEdit")})]}),(0,Et.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Et.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:f,title:l("pill.copy"),children:s?(0,Et.jsx)(eo,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,Et.jsx)(Uu,{size:13,className:"wf-floating-top-pill__icon"})}),(0,Et.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,Et.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,Et.jsx)(Bo,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,Et.jsx)("div",{className:"wf-floating-top-pill__single",children:(0,Et.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:a,children:[(0,Et.jsx)(vl,{size:13,className:"wf-floating-top-pill__icon"}),(0,Et.jsx)("span",{children:c})]})})})},A_=(0,kn.memo)(lD);var Ji=R(J(),1);var R_=R(J(),1),D_=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function iD(e,t,a=D_){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function z_({refs:e,excludeSelectors:t=D_,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,R_.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=u=>{let f=u.target;iD(f,r.map(c=>c.current),t)&&a()},i=u=>{u.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},d=null;return n?d=requestAnimationFrame(s):s(),()=>{d!==null&&cancelAnimationFrame(d),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var Hx=R(X(),1),sD=480,uD=({children:e,onClose:t,width:a=sD})=>{let{zoom:o}=Ja(),n=(0,Ji.useRef)(null),r=(0,Ji.useMemo)(()=>lo(o),[o]);return z_({refs:n,onClose:t}),(0,Hx.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,Hx.jsx)("div",{className:"wf-panel-shell__card",children:e})})},P_=(0,Ji.memo)(uD);var za=R(J(),1);var O_=R(J(),1),es=R(X(),1),Fx={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},dD=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function cD(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Fx[t])return t;for(let a of dD)if(a.regex.test(t))return a.brand;return null}var B_=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,O_.useMemo)(()=>t&&Fx[t.toLowerCase()]?t.toLowerCase():cD(e),[t,e]),i=l?Fx[l]:null;if(!i){if(r)return(0,es.jsx)(es.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,es.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,es.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var H_=R(J(),1);function F_(e){let t=tL(),a=aL();return(0,H_.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(u=>u.id===n);if(!r)return[];let l=r.data||{},i=_n(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",d=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:d,textContent:s}]}),[t,a,e])}var U_=R(J(),1),q_="wf_capabilities_catalog_v1",fD={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function bd(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(q_);return e?JSON.parse(e):null}catch{return null}}function V_(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(q_,JSON.stringify(e))}catch{}}function G_(e,t,a){return(0,U_.useMemo)(()=>{let n=(a??bd())?.[e]??[],r=n.find(b=>b.id===t)??n[0],l=fD[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],d=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",u=b=>b?s.some(S=>S.value===b):!1,f=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],c=i.duration?.defaultValue??f[0]?.value??5,p=b=>typeof b!="number"?!1:f.some(S=>S.value===b),g=i.resolution?.options??[],y=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],h=i.quality?.defaultValue??w[0]?.value??"",x=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:d,isAspectRatioValid:u,durationOptions:f,defaultDuration:c,isDurationValid:p,resolutionOptions:g,defaultResolution:y,qualityOptions:w,defaultQuality:h,hasSoundSupport:x,defaultSound:m}},[e,t,a])}var X_=R(J(),1);var In=R(X(),1),pD=({onClick:e,disabled:t,isGenerating:a})=>{let o=se();return(0,In.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,In.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,In.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,In.jsx)(Cr,{size:14,className:"wf-generate-btn__spin"}):(0,In.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,In.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,In.jsx)("path",{d:"M12 19V5"})]})})]})},Y_=(0,X_.memo)(pD);var Q=R(X(),1);function mD(e){let t=(0,Q.jsx)(B_,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var gD=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r,onOpenResourcePicker:l})=>{let i=se(),{materialType:s,selectedTool:d,params:u,prompt:f}=t,[c,p]=(0,za.useState)(!1),[g,y]=(0,za.useState)(!1),w=F_(e),h=d==="text-to-music"?"music":"speech",x=(0,za.useCallback)(D=>{o({selectedTool:D==="music"?"text-to-music":"text-to-audio"})},[o]),m=(0,za.useMemo)(()=>{let D=a?.[s]??[];return D.length===0&&(s==="text"?D=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:s==="image"?D=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:s==="video"?D=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:s==="audio"&&(D=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),D.map(U=>{let Z=mD(U.id),W=Z.icon,j=U.badge??Z.badge,ne=U.subtitle??Z.subtitle;return{value:U.id,label:U.label,triggerLabel:(0,Q.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[W?(0,Q.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:W}):null,(0,Q.jsx)("span",{children:U.label})]}),icon:W,badge:j,subtitle:ne}})},[a,s]),b=typeof u.model=="string"?u.model:m[0]?.value,{aspectRatioOptions:S,defaultAspectRatio:C,isAspectRatioValid:v,durationOptions:_,defaultDuration:k,isDurationValid:T,resolutionOptions:E,defaultResolution:F}=G_(s,b,a),O=(0,za.useCallback)((D,U)=>{o({params:{...u,[D]:U}})},[o,u]),L=(0,za.useCallback)(D=>{let j=((a??bd())?.[s]??[]).find(ee=>ee.id===D)?.parameters,ne={...u,model:D};u.aspectRatio&&j?.aspectRatio?.options&&(j.aspectRatio.options.some(q=>q.value===u.aspectRatio)||(ne.aspectRatio=j.aspectRatio.defaultValue||"16:9")),typeof u.duration=="number"&&j?.duration?.options&&(j.duration.options.some(q=>q.value===u.duration)||(ne.duration=j.duration.defaultValue||j.duration.options[0]?.value||5)),u.resolution&&j?.resolution?.options?j.resolution.options.some(q=>q.value===u.resolution)||(ne.resolution=j.resolution.defaultValue||j.resolution.options[0]?.value):u.resolution&&j&&!j.resolution?.options&&delete ne.resolution,o({params:ne})},[a,s,o,u]),M=(0,za.useMemo)(()=>{switch(s){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[s]),N=(0,za.useMemo)(()=>{switch(s){case"text":return i("panel.textPromptPlaceholder");case"image":return i("panel.imagePromptPlaceholder");case"video":return i("panel.videoPromptPlaceholder");case"audio":return i(h==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return i("panel.promptPlaceholder")}},[s,h,i]),I=typeof u.aspectRatio=="string"&&v(u.aspectRatio)?u.aspectRatio:C,A=typeof u.duration=="number"&&T(u.duration)?u.duration:k,z=D=>!!D&&E.some(U=>U.value===D),V=typeof u.resolution=="string"&&z(u.resolution)?u.resolution:F;return(0,Q.jsxs)("div",{className:"wf-config-panel",children:[s==="audio"&&(0,Q.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${h==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>x("speech"),children:[(0,Q.jsx)(hl,{size:13}),(0,Q.jsx)("span",{children:i("panel.audioGen")})]}),(0,Q.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${h==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>x("music"),children:[(0,Q.jsx)(to,{size:13}),(0,Q.jsx)("span",{children:i("panel.musicGen")})]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[w.length>0||l?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-slots-group",children:[w.map(D=>(0,Q.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${D.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${D.label} (${D.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[D.url&&D.materialType==="image"?(0,Q.jsx)("img",{src:D.url,alt:D.label,className:"wf-config-panel__ref-thumb-media"}):D.url&&D.materialType==="video"?(0,Q.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,Q.jsx)("video",{src:D.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,Q.jsx)(Aa,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):D.materialType==="audio"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,Q.jsx)(to,{size:13})}):D.materialType==="text"?(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,Q.jsx)(Qt,{size:13})}):(0,Q.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,Q.jsx)(xo,{size:13})}),D.hasMedia&&(0,Q.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},D.nodeId)),l?(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__add-ref-btn",onClick:l,title:i("picker.addRef"),children:(0,Q.jsx)(Qe,{size:14})}):null]}):(0,Q.jsx)("span",{}),(0,Q.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>p(!0),title:i("header.fitView"),children:(0,Q.jsx)(Sr,{size:13})})]}),(0,Q.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:f??"",placeholder:N,rows:3,onChange:D=>o({prompt:D.target.value})}),(0,Q.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(f||"").length," / ",M]})]}),(0,Q.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,Q.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,Q.jsx)(ma,{className:"wf-param-bar__select wf-param-bar__select--model",value:b,options:m,popupMatchSelectWidth:!1,onChange:D=>L(D)}),s==="image"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,Q.jsx)(ma,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:D=>O("aspectRatio",D)})})]}),s==="video"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,Q.jsx)(ma,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:I,options:S,popupMatchSelectWidth:!1,onChange:D=>O("aspectRatio",D)}),(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(ma,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:A,options:_,popupMatchSelectWidth:!1,onChange:D=>O("duration",D)}),E.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,Q.jsx)(ma,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:V,options:E,popupMatchSelectWidth:!1,onChange:D=>O("resolution",D)})]})]})]}),s==="audio"&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,Q.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>y(!g),title:i("panel.advanced"),children:(0,Q.jsx)(ld,{size:13})})]})]}),(0,Q.jsx)("div",{className:"wf-config-panel__action-group",children:(0,Q.jsx)(Y_,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),g&&(0,Q.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,Q.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,Q.jsx)("span",{className:"wf-config-panel__advanced-label",children:i("panel.duration")}),(0,Q.jsx)(Lx,{style:{flex:1},min:1,max:s==="video"?20:60,value:A,onChange:D=>O("duration",D)})]})}),(0,Q.jsx)(Cl,{title:i("panel.promptPlaceholder"),open:c,onCancel:()=>p(!1),width:680,children:(0,Q.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:f??"",placeholder:N,rows:10,onChange:D=>o({prompt:D.target.value})})})]})},Z_=(0,za.memo)(gD);var ga=R(J(),1);var Gt="/omnimux-workflow";var ea={manifest:`${Gt}/api/manifest`,canvasJs:`${Gt}/canvas.js`,workspaces:`${Gt}/api/workspaces`,workspace:e=>`${Gt}/api/workspaces/${e}`,workspaceVersion:e=>`${Gt}/api/workspaces/${e}/version`,capabilities:`${Gt}/api/capabilities`,media:`${Gt}/media`,pick:`${Gt}/api/pick`,localFile:`${Gt}/api/local-file`,localFileProbe:`${Gt}/api/local-file/probe`,executions:e=>`${Gt}/api/workspaces/${e}/executions`,execution:(e,t)=>`${Gt}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${Gt}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${Gt}/api/workspaces/${e}/executions/${t}/events`};var hD=new Set(["png","jpg","jpeg","gif","webp","bmp","svg","avif","heic"]),xD=new Set(["mp4","webm","mov","mkv","avi","m4v"]),bD=new Set(["mp3","wav","m4a","aac","flac","ogg","opus"]),yD={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",avif:"image/avif",heic:"image/heic",mp4:"video/mp4",webm:"video/webm",mov:"video/quicktime",mkv:"video/x-matroska",avi:"video/x-msvideo",m4v:"video/mp4",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",aac:"audio/aac",flac:"audio/flac",ogg:"audio/ogg",opus:"audio/opus"};function j_(e){let t=e.split(/[/\\]/).pop()??e,a=t.lastIndexOf(".");return a<=0||a===t.length-1?"":t.slice(a+1).toLowerCase()}function yd(e){return yD[j_(e)]}function Mp(e,t=""){let a=(t||"").toLowerCase().trim();if(a.startsWith("image/"))return"image";if(a.startsWith("video/"))return"video";if(a.startsWith("audio/"))return"audio";let o=j_(e);return hD.has(o)?"image":xD.has(o)?"video":bD.has(o)?"audio":null}function Np(e){return typeof e=="string"&&e.startsWith("blob:")}function Mn(e){return`${Gt}/api/local-file?path=${encodeURIComponent(e)}`}function ts(e){let t=Mn(e.realPath);return{mediaUrl:t,status:"ready",content:e.name,originalName:e.name,realPath:e.realPath,fileSize:e.size,mimeType:e.mime||yd(e.name)||yd(e.realPath),isMissing:!1,mediaAssets:[{type:e.materialType,url:t,path:e.realPath}]}}function W_(e,t){let a=new Map(t.map(o=>[o.path,o]));return e.map(o=>{let n=o.data&&typeof o.data=="object"?{...o.data}:{},r=typeof n.realPath=="string"?n.realPath:"";if(!r)return o;let l=a.get(r);return l?l.exists?n.status==="offline"||n.isMissing===!0?(n.status="ready",n.isMissing=!1,n.mediaUrl=Mn(r),{...o,data:n}):o:(n.status="offline",n.isMissing=!0,{...o,data:n}):o})}function K_(e){let t=[],a=new Set;for(let o of e){let n=typeof o.data?.realPath=="string"?o.data.realPath:"";!n||a.has(n)||(a.add(n),t.push(n))}return t}var Ux=["image","video","audio"],wD=80,vD=40;function ek(e){return!!e&&typeof e=="object"}function tk(e){return ek(e.data)?e.data:{}}function ak(e){return e==="text"||e==="image"||e==="video"||e==="audio"?e:null}function ok(e){return!Number.isFinite(e)||e<0?"":e<1024?`${Math.round(e)} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function CD(e){let t=e.dimensions;if(ek(t)&&typeof t.width=="number"&&typeof t.height=="number")return{width:t.width,height:t.height};let a=typeof e.nodeWidth=="number"?e.nodeWidth:void 0,o=typeof e.nodeHeight=="number"?e.nodeHeight:void 0;return{width:a,height:o}}function SD(e,t){let a=typeof e.label=="string"?e.label.trim():"";if(a)return a;let o=typeof e.content=="string"?e.content.trim():"";return o||t}function LD(e,t,a,o){let n=[];return o?.width&&o?.height&&n.push(`${Math.round(o.width)} \xD7 ${Math.round(o.height)}`),t&&t!==a&&n.push(a),n.join(" \xB7 ")}function nk(e,t){let a=new Set;for(let o of e)o.target===t&&o.source&&a.add(o.source);return a}function _D(e,t){if(!Ux.includes(e))return!1;if(_n(e,t.mediaAssets,typeof t.mediaUrl=="string"?t.mediaUrl:void 0))return!0;let o=t.status;return o==="ready"||o==="completed"}function rk(e,t,a){let o=nk(t,a),n=[];for(let r of e){if(r.id===a||r.type&&r.type!=="material")continue;let l=tk(r),i=ak(l.materialType);if(!i||!_D(i,l))continue;let s=SD(l,r.id),d=CD(l);n.push({nodeId:r.id,materialType:i,title:s,previewUrl:_n(i,l.mediaAssets,typeof l.mediaUrl=="string"?l.mediaUrl:void 0),alreadyConnected:o.has(r.id),subtitle:LD(l,s,r.id,d),width:d.width,height:d.height})}return n}function lk(e,t,a){let o=t.trim().toLowerCase();return e.filter(n=>a!=="all"&&n.materialType!==a?!1:o?n.title.toLowerCase().includes(o)||n.nodeId.toLowerCase().includes(o)||n.subtitle.toLowerCase().includes(o):!0)}function $_(e,t){return{source:e,sourceHandle:"out",target:t,targetHandle:"in"}}function Q_(e,t){return ip(e,t)}function J_(e){return ts({realPath:e.realPath,name:e.name,materialType:e.materialType,mime:e.mime,size:e.size})}function kD(e,t,a){let o=Nr(a),n=m_(a);return{x:e.position.x-o-wD,y:e.position.y+t*(n+vD)}}function ID(e){return ak(tk(e).materialType)}function ik(e){let t=[],a=[],o=[],n=[],r=e.nodes.find(y=>y.id===e.targetNodeId);if(!r)return{hasWork:!1,rejected:[{id:e.targetNodeId,reason:"missing"}]};let l=nk(e.edges,e.targetNodeId),i=new Set(l);for(let y of e.selectedCanvasNodeIds){if(y===e.targetNodeId){t.push({id:y,reason:"self"});continue}if(l.has(y)||i.has(y)){t.push({id:y,reason:"already_connected"});continue}let w=e.nodes.find(h=>h.id===y);if(!w){t.push({id:y,reason:"missing"});continue}if(!Q_(w,r)){t.push({id:y,reason:"type_contract"});continue}a.push($_(y,e.targetNodeId)),i.add(y)}let s=e.localFiles.filter(y=>!y.realPath||!Ux.includes(y.materialType)?(t.push({id:y.id,reason:"unsupported"}),!1):!0),d=ID(r),u=s[0],f=!!d&&Ux.includes(d)&&!!u&&u.materialType===d,c=0,p=f?s.slice(1):s;f&&u&&n.push({nodeId:e.targetNodeId,data:J_(u)});for(let y of p){let w=kD(r,c,y.materialType),h=wp(y.materialType,w,{...J_(y),label:y.name.replace(/\.[^.]+$/,"")||y.name});if(!Q_(h,r)){t.push({id:y.id,reason:"type_contract"});continue}o.push(h),a.push($_(h.id,e.targetNodeId)),i.add(h.id),c+=1}return{hasWork:o.length>0||a.length>0||n.length>0,rejected:t,addNodes:o.length>0?o:void 0,addEdges:a.length>0?a:void 0,nodePatches:n.length>0?n:void 0}}var Ml=R(J(),1);var he=R(X(),1);function Ep(e){switch(e){case"image":return"node.type.image";case"video":return"node.type.video";case"audio":return"node.type.audio";default:return"node.type.text"}}var MD=({items:e,selectedIds:t,onToggle:a})=>{let o=se(),[n,r]=(0,Ml.useState)(""),[l,i]=(0,Ml.useState)("all"),[s,d]=(0,Ml.useState)("grid"),u=(0,Ml.useMemo)(()=>[{value:"all",label:o("picker.filter.all")},{value:"image",label:o("picker.filter.image")},{value:"video",label:o("picker.filter.video")},{value:"audio",label:o("picker.filter.audio")}],[o]),f=(0,Ml.useMemo)(()=>lk(e,n,l),[e,n,l]),c=e.length===0?"picker.empty":"picker.emptyFilter";return(0,he.jsxs)("div",{className:"wf-picker-pane",children:[(0,he.jsxs)("div",{className:"wf-picker-toolbar",children:[(0,he.jsxs)("label",{className:"wf-picker-search",children:[(0,he.jsx)(bl,{size:14,className:"wf-picker-search__icon"}),(0,he.jsx)("input",{type:"text",className:"wf-picker-search__input",value:n,placeholder:o("picker.search"),onChange:p=>r(p.target.value)})]}),(0,he.jsx)(ma,{className:"wf-picker-filter",variant:"standard",value:l,options:u,onChange:p=>i(p)}),(0,he.jsxs)("div",{className:"wf-picker-view-toggle",role:"group","aria-label":o("picker.view.grid"),children:[(0,he.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="grid"?"wf-picker-view-btn--active":""}`,onClick:()=>d("grid"),title:o("picker.view.grid"),"aria-pressed":s==="grid",children:(0,he.jsx)(gl,{size:14})}),(0,he.jsx)("button",{type:"button",className:`wf-picker-view-btn ${s==="list"?"wf-picker-view-btn--active":""}`,onClick:()=>d("list"),title:o("picker.view.list"),"aria-pressed":s==="list",children:(0,he.jsx)($u,{size:14})})]})]}),f.length===0?(0,he.jsx)("div",{className:"wf-picker-empty",children:o(c)}):s==="grid"?(0,he.jsx)("div",{className:"wf-picker-grid",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,he.jsxs)("button",{type:"button",className:`wf-picker-card ${g?"wf-picker-card--selected":""} ${p.alreadyConnected?"wf-picker-card--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,title:p.title,children:[(0,he.jsxs)("div",{className:"wf-picker-card__thumb",children:[p.previewUrl&&p.materialType==="image"?(0,he.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,he.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,he.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(Ep(p.materialType))}),p.alreadyConnected?(0,he.jsxs)("span",{className:"wf-picker-added-badge",children:[(0,he.jsx)(eo,{size:11}),o("picker.added")]}):(0,he.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,he.jsx)(eo,{size:11}):null})]}),(0,he.jsxs)("div",{className:"wf-picker-card__meta",children:[(0,he.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,he.jsx)("span",{className:"wf-picker-type-tag",children:o(Ep(p.materialType))})]})]},p.nodeId)})}):(0,he.jsx)("div",{className:"wf-picker-list",children:f.map(p=>{let g=t.includes(p.nodeId);return(0,he.jsxs)("button",{type:"button",className:`wf-picker-row ${g?"wf-picker-row--selected":""} ${p.alreadyConnected?"wf-picker-row--added":""}`,onClick:()=>a(p.nodeId,p.alreadyConnected),disabled:p.alreadyConnected,children:[(0,he.jsx)("div",{className:"wf-picker-row__thumb",children:p.previewUrl&&p.materialType==="image"?(0,he.jsx)("img",{src:p.previewUrl,alt:"",className:"wf-picker-card__media"}):p.previewUrl&&p.materialType==="video"?(0,he.jsx)("video",{src:p.previewUrl,className:"wf-picker-card__media",muted:!0}):(0,he.jsx)("span",{className:`wf-picker-card__fallback wf-picker-card__fallback--${p.materialType}`,children:o(Ep(p.materialType))})}),(0,he.jsxs)("div",{className:"wf-picker-row__body",children:[(0,he.jsx)("span",{className:"wf-picker-card__name",children:p.title}),(0,he.jsxs)("span",{className:"wf-picker-row__sub",children:[p.subtitle||p.nodeId," \xB7 ",o(Ep(p.materialType))]})]}),p.alreadyConnected?(0,he.jsxs)("span",{className:"wf-picker-added-badge wf-picker-added-badge--inline",children:[(0,he.jsx)(eo,{size:11}),o("picker.added")]}):(0,he.jsx)("span",{className:`wf-picker-check ${g?"wf-picker-check--on":""}`,children:g?(0,he.jsx)(eo,{size:11}):null})]},p.nodeId)})})]})},sk=MD;var Nl=R(J(),1);async function io(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function uk(){return io(ea.capabilities)}function dk(){return io(ea.workspaces)}function qx(e,t){return io(ea.workspaces,{method:"POST",body:{name:e,id:t}})}function wd(e){return io(ea.workspace(encodeURIComponent(e)))}function ck(e){return io(ea.workspaceVersion(encodeURIComponent(e)))}function fk(e,t){return io(ea.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function pk(e,t={}){return io(ea.executions(encodeURIComponent(e)),{method:"POST",body:t})}function mk(e){return io(ea.executions(encodeURIComponent(e)))}function gk(e,t){return io(ea.execution(encodeURIComponent(e),encodeURIComponent(t)))}function vd(){return io(ea.pick,{method:"POST",body:{kind:"file"}})}function hk(e){return io(ea.localFileProbe,{method:"POST",body:{paths:e}})}function xk(e,t,a){return io(ea.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}function Tp(e){let t=e.path;return typeof t=="string"?t:""}function ND(e){let a=e.replace(/[/\\]+$/,"").split(/[/\\]/);return a[a.length-1]||e}function Vx(e,t={}){if(!e)return null;let a=t.name||ND(e),o=t.mime||yd(a)||yd(e)||"",n=Mp(a,o);return n?{id:`${e}-${t.size??0}-${Math.random().toString(36).slice(2,8)}`,name:a,mime:o,size:t.size??0,realPath:e,materialType:n,previewUrl:Mn(e)}:null}function Cd(e){let t=[];for(let a of e){let o=Vx(a);o&&t.push(o)}return t}var ht=R(X(),1),ED=({files:e,onAddFiles:t,onRemove:a})=>{let o=se(),[n,r]=(0,Nl.useState)(!1),l=(0,Nl.useCallback)(u=>{let f=Cd(u);f.length>0&&t(f),f.length<u.length&&Te.warning(o("picker.unsupported")),u.length>0&&f.length===0&&Te.warning(o("picker.unsupported"))},[t,o]),i=(0,Nl.useCallback)(async()=>{let u=await vd();if(!u.ok){u.body.error==="picker-unsupported"?Te.warning(o("picker.needPath")):Te.error(o("picker.pickFailed"));return}let f=u.body.paths??[];f.length!==0&&l(f)},[l,o]),s=(0,Nl.useCallback)(u=>{let f=Array.from(u),c=[],p=0,g=0;for(let y of f){let w=Tp(y);if(!w){p+=1;continue}let h=Vx(w,{name:y.name,mime:y.type,size:y.size});h?c.push(h):g+=1}c.length>0&&t(c),p>0&&Te.warning(o("picker.needPath")),g>0&&Te.warning(o("picker.unsupported"))},[t,o]),d=(0,Nl.useCallback)(u=>{u.preventDefault(),u.stopPropagation(),r(!1),u.dataTransfer.files?.length&&s(u.dataTransfer.files)},[s]);return(0,ht.jsxs)("div",{className:"wf-picker-pane",children:[(0,ht.jsxs)("button",{type:"button",className:`wf-picker-dropzone ${n?"wf-picker-dropzone--active":""}`,onClick:()=>{i()},onDragOver:u=>{u.preventDefault(),u.stopPropagation(),r(!0)},onDragLeave:u=>{u.preventDefault(),u.stopPropagation(),r(!1)},onDrop:d,children:[(0,ht.jsx)(vl,{size:22,className:"wf-picker-dropzone__icon"}),(0,ht.jsx)("span",{className:"wf-picker-dropzone__title",children:o("picker.dropTitle")}),(0,ht.jsx)("span",{className:"wf-picker-dropzone__hint",children:o("picker.dropHint")}),(0,ht.jsxs)("span",{className:"wf-picker-dropzone__cta",children:[(0,ht.jsx)(Xu,{size:14}),o("picker.chooseFiles")]})]}),e.length>0?(0,ht.jsx)("ul",{className:"wf-picker-file-list",children:e.map(u=>{let f=u.previewUrl||Mn(u.realPath);return(0,ht.jsxs)("li",{className:"wf-picker-file-item",children:[(0,ht.jsx)("div",{className:"wf-picker-file-item__thumb",children:u.materialType==="image"?(0,ht.jsx)("img",{src:f,alt:"",className:"wf-picker-card__media"}):u.materialType==="video"?(0,ht.jsx)("video",{src:f,className:"wf-picker-card__media",muted:!0}):(0,ht.jsx)("span",{className:"wf-picker-card__fallback wf-picker-card__fallback--audio",children:o("node.type.audio")})}),(0,ht.jsxs)("div",{className:"wf-picker-row__body",children:[(0,ht.jsx)("span",{className:"wf-picker-card__name",children:u.name}),(0,ht.jsxs)("span",{className:"wf-picker-row__sub",children:[o(`node.type.${u.materialType}`),u.size?` \xB7 ${ok(u.size)}`:""]})]}),(0,ht.jsx)("button",{type:"button",className:"wf-picker-file-remove",onClick:()=>a(u.id),title:o("picker.removeFile"),children:(0,ht.jsx)(yl,{size:14})})]},u.id)})}):null]})},bk=ED;var So=R(X(),1),TD=({open:e,nodeId:t,initialTab:a="canvas",onCancel:o,onCommit:n})=>{let r=se(),l=ie(v=>v.nodes),i=ie(v=>v.edges),[s,d]=(0,ga.useState)(a),[u,f]=(0,ga.useState)([]),[c,p]=(0,ga.useState)([]),g=(0,ga.useMemo)(()=>rk(l,i,t),[l,i,t]);(0,ga.useEffect)(()=>{e&&(d(a),f([]),p([]))},[e,a]);let y=(0,ga.useCallback)(()=>{p([]),o()},[o]),w=(0,ga.useCallback)((v,_)=>{_||f(k=>k.includes(v)?k.filter(T=>T!==v):[...k,v])},[]),h=(0,ga.useCallback)(v=>{p(_=>[..._,...v])},[]),x=(0,ga.useCallback)(v=>{p(_=>_.filter(k=>k.id!==v))},[]),b=u.filter(v=>{let _=g.find(k=>k.nodeId===v);return _&&!_.alreadyConnected}).length+c.length,S=(0,ga.useCallback)(()=>{if(b===0)return;n({selectedCanvasNodeIds:u,localFiles:c})&&(p([]),f([]))},[c,n,b,u]),C=(0,So.jsxs)("div",{className:"wf-picker-footer",children:[(0,So.jsx)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--ghost",onClick:y,children:r("picker.cancel")}),(0,So.jsxs)("button",{type:"button",className:"wf-picker-btn wf-picker-btn--primary",disabled:b===0,onClick:S,children:[r("picker.use")," ",b," ",r("picker.items")]})]});return(0,So.jsxs)(Cl,{open:e,onCancel:y,title:r("picker.title"),width:720,className:"wf-picker-modal",bodyClassName:"wf-picker-modal__body",footer:C,children:[(0,So.jsxs)("div",{className:"wf-picker-tabs",role:"tablist",children:[(0,So.jsxs)("button",{type:"button",role:"tab","aria-selected":s==="canvas",className:`wf-picker-tab ${s==="canvas"?"wf-picker-tab--active":""}`,onClick:()=>d("canvas"),children:[r("picker.tab.canvas")," (",g.length,")"]}),(0,So.jsx)("button",{type:"button",role:"tab","aria-selected":s==="local",className:`wf-picker-tab ${s==="local"?"wf-picker-tab--active":""}`,onClick:()=>d("local"),children:r("picker.tab.local")})]}),s==="canvas"?(0,So.jsx)(sk,{items:g,selectedIds:u,onToggle:w}):(0,So.jsx)(bk,{files:c,onAddFiles:h,onRemove:x})]})},Ap=TD;var Nn=R(J(),1);function yk(e){let t=se(),[a,o]=(0,Nn.useState)(!1),[n,r]=(0,Nn.useState)("canvas"),l=(0,Nn.useCallback)((f="canvas")=>{r(f),o(!0)},[]),i=(0,Nn.useCallback)(()=>{o(!1)},[]),s=(0,Nn.useCallback)(f=>{let c=ie.getState(),p=ik({nodes:c.nodes,edges:c.edges,targetNodeId:e,selectedCanvasNodeIds:f.selectedCanvasNodeIds,localFiles:f.localFiles});return p.hasWork?c.applyCanvasInputMutation({addNodes:p.addNodes,addEdges:p.addEdges,nodePatches:p.nodePatches}).status!=="allowed"?(Te.error(t("picker.commitFailed")),!1):(p.rejected.length>0?Te.warning(t("picker.commitPartial")):Te.success(t("picker.commitOk")),o(!1),!0):(Te.warning(t("picker.commitEmpty")),!1)},[e,t]),d=(0,Nn.useCallback)(async()=>{let f=await vd();if(!f.ok)return f.body.error==="picker-unsupported"?Te.warning(t("picker.needPath")):Te.error(t("picker.pickFailed")),!1;let c=f.body.paths??[];if(c.length===0)return!1;let p=Cd(c);return p.length===0?(Te.warning(t("picker.unsupported")),!1):s({selectedCanvasNodeIds:[],localFiles:p})},[s,t]),u=(0,Nn.useCallback)(async f=>{let c=await vd();if(!c.ok)return Te.error(t("picker.pickFailed")),!1;let p=c.body.path;if(!p)return!1;let y=Cd([p])[0];if(!y||y.materialType!==f)return Te.warning(t("picker.unsupported")),!1;let w=ts({realPath:y.realPath,name:y.name,materialType:y.materialType,mime:y.mime,size:y.size});return ie.getState().applyCanvasInputMutation({nodePatches:[{nodeId:e,data:w}]}).status!=="allowed"?(Te.error(t("picker.commitFailed")),!1):(Te.success(t("node.relinkOk")),!0)},[e,t]);return{open:a,initialTab:n,openPicker:l,closePicker:i,importLocalFiles:d,relinkLocalFile:u,commit:s}}var ke=R(X(),1),AD=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:d,errorMessage:u}=o,f=o.executionStatus,c=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[y,w]=(0,at.useState)(!1),[h,x]=(0,at.useState)(!1),[m,b]=(0,at.useState)(!1),[S,C]=(0,at.useState)(!1),[v,_]=(0,at.useState)(null),{setNodes:k}=Ta(),T=Ge(K=>K.status==="pending"||K.status==="running"),E=o.nodeWidth??Nr(n),F=Rx(n),O=p_(E,F),L=v??o.nodeHeight??O,M=(0,at.useCallback)(K=>{k(_e=>_e.map(Ae=>Ae.id===e?{...Ae,data:{...Ae.data,...K}}:Ae))},[e,k]),N=(0,at.useCallback)((K,_e)=>{if(K>0&&_e>0){let Ae=K/_e,bt=Math.max(80,Math.min(800,Math.round(E/Ae)));_(bt),o.nodeHeight!==bt&&M({nodeHeight:bt})}},[o.nodeHeight,E,M]),I=(0,at.useCallback)(()=>{let K=o.selectedTool;(!K||K==="text-editor"||K==="import")&&M({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]}),Ge.getState().startNodeExecution?.(e)},[e,n,o.selectedTool,M]),A=se(),z=ie(K=>K.applyCanvasInputMutation),V=yk(e),D=(0,at.useMemo)(()=>Cp(n).map(K=>({key:K.key,label:A(K.labelKey),description:A(K.descKey),icon:K.icon})),[n,A]),U=(0,at.useCallback)((K,_e)=>{let Ae=vp(K),bt=_e?.flowPosition;if(!Ae||!bt)return;let oa=kl(Ae.targetMaterialType,bt),Lo=oa.nodes[0];Lo&&z({addNodes:oa.nodes,addEdges:[{source:e,sourceHandle:"out",target:Lo.id,targetHandle:"in"}]})},[z,e]),Z=d||i||"",W=(0,at.useCallback)(K=>{if(n==="text"){let _e="";K==="script"?_e=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:K==="planning"?_e=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:K==="prompt"?_e=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:K==="storyboard"&&(_e=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({prompt:_e,selectedTool:"text-to-text"})}},[n,M]),j=(0,at.useCallback)(K=>{let _e=Tp(K);if(!_e){Te.warning(A("picker.needPath"));return}let Ae=Mp(K.name,K.type)??n;if(Ae!=="image"&&Ae!=="video"&&Ae!=="audio"){Te.warning(A("picker.unsupported"));return}M(ts({realPath:_e,name:K.name,materialType:Ae,mime:K.type,size:K.size}))},[n,A,M]),ne=(0,at.useCallback)(K=>{K.preventDefault(),K.stopPropagation(),x(!0)},[]),ee=(0,at.useCallback)(K=>{K.preventDefault(),K.stopPropagation(),x(!1)},[]),q=(0,at.useCallback)(K=>{K.preventDefault(),K.stopPropagation(),x(!1);let _e=K.dataTransfer.files?.[0];_e&&j(_e)},[j]),Y=(0,at.useCallback)(()=>{Z&&navigator.clipboard.writeText(Z).catch(()=>{})},[Z]),re=(0,at.useCallback)(()=>{if(!Z)return;let K=Z.split(`

`).filter(_e=>_e.trim().length>0);K.length>1&&M({content:K.join(`
---
`)})},[Z,M]);(0,at.useEffect)(()=>{a||(b(!1),C(!1))},[a]);let ue=__(a,m,f),te=r==="offline"||o.isMissing===!0,oe=_n(n,p,s),xe=te?null:k_(f,r,!!oe),be=n==="video"?"video":n==="audio"?"audio":"square";return(0,ke.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:E},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(y||a)&&(0,ke.jsx)(A_,{materialType:n,selected:a,onOpenResourcePicker:()=>{V.importLocalFiles()},onStartTextEdit:()=>C(!0),onCopyText:Y,onSplitText:re}),(0,ke.jsx)(Ln,{side:"left",nodeHovered:y}),(0,ke.jsx)(Qi,{label:l,materialType:n,onLabelChange:K=>M({label:K}),trailing:(0,ke.jsx)(kp,{executionStatus:f,status:r})}),(0,ke.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:E,height:L},onDragOver:ne,onDragLeave:ee,onDrop:q,children:[a&&(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,ke.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,ke.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,ke.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,ke.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:Z||S?(0,ke.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${S?" nodrag":""}`,readOnly:!S,value:Z,placeholder:A("node.textPlaceholder"),autoFocus:S,onMouseDown:K=>{S||K.preventDefault()},onDoubleClick:K=>{K.stopPropagation(),C(!0),K.currentTarget.focus()},onFocus:()=>C(!0),onBlur:()=>C(!1),onChange:K=>M({content:K.target.value,status:K.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,ke.jsx)(Ip,{materialType:"text",onStartEdit:()=>C(!0),onApplyPreset:W})}),n!=="text"&&te&&(0,ke.jsxs)("div",{className:"wf-material-node__media wf-media-offline",children:[(0,ke.jsx)("div",{className:"wf-media-offline__title",children:A("node.offline")}),(0,ke.jsx)("div",{className:"wf-media-offline__hint",children:A("node.offlineHint")}),(0,ke.jsx)("button",{type:"button",className:"wf-media-offline__relink nodrag",onClick:()=>{V.relinkLocalFile(n)},children:A("node.relink")})]}),n!=="text"&&!te&&(xe?(0,ke.jsx)("div",{className:"wf-material-node__media",children:(0,ke.jsx)(hd,{status:xe,loadingAspectRatio:be,errorMessage:c??u,taskId:o.taskId,onRetry:I,children:oe?(0,ke.jsx)(E_,{materialType:n,mediaAssets:p,mediaUrl:s,label:l,onMediaSizeChange:N}):(0,ke.jsx)(Ip,{materialType:n,onApplyPreset:W})})}):(0,ke.jsx)("div",{className:"wf-material-node__media",children:(0,ke.jsx)(Ip,{materialType:n,onApplyPreset:W})})),n==="text"&&(u||c)&&(0,ke.jsx)("div",{className:"wf-material-node__error",children:c??u})]}),ue&&(0,ke.jsx)(P_,{onClose:()=>b(!0),children:(0,ke.jsx)(Z_,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:I,execBusy:T,onOpenResourcePicker:()=>V.openPicker("canvas")})}),(0,ke.jsx)(Ln,{side:"right",nodeHovered:y,options:D,onSelect:U}),(0,ke.jsx)(Ap,{open:V.open,nodeId:e,initialTab:V.initialTab,onCancel:V.closePicker,onCommit:V.commit})]})},wk=(0,at.memo)(AD);var vk={type:"material",component:wk,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>lp("text",{status:"empty",nodeWidth:Nr("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var as=R(J(),1);var Gx=50;function El(e){return JSON.parse(JSON.stringify(e))}var RD={version:1,title:"\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Xt=Wi((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,El(o)].slice(-Gx),redoStack:[]}};return{document:RD,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:El(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:El(l),undoStack:i,redoStack:[...r,El(n)].slice(-Gx)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:El(l),redoStack:i,undoStack:[...r,El(n)].slice(-Gx)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let l=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:l.title,initialType:l.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:l}=t(),i=l.rows[o];if(!i)return;let s=a(l),d=[...l.rows],u={...i,cells:[...i.cells]};u.cells[n]=r,d[o]=u,e({document:{...l,rows:d},...s})},addRow:o=>{let{document:n}=t(),r=a(n),l=o||n.columns.map(i=>i.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:l}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),l=n.rows.filter((i,s)=>s!==o);e({document:{...n,rows:l},...r})},addColumn:(o,n,r=240)=>{let{document:l}=t(),i=a(l),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},d=l.rows.map(u=>({...u,cells:[...u.cells,n==="attachment"?[]:""]}));e({document:{...l,columns:[...l.columns,s],rows:d},...i})},updateColumn:(o,n,r)=>{let{document:l}=t(),i=l.columns[o];if(!i)return;let s=a(l),d=[...l.columns];d[o]={...i,title:n,type:r},e({document:{...l,columns:d},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),l=n.columns.filter((s,d)=>d!==o),i=n.rows.map(s=>({...s,cells:s.cells.filter((d,u)=>u!==o)}));e({document:{...n,columns:l,rows:i},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let l=a(n),i=[...n.columns];i[o]={...r,visible:!r.visible},e({document:{...n,columns:i},...l})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let i=a(r),s=[...r.columns],[d]=s.splice(o,1);d&&s.splice(n,0,d);let u=r.rows.map(f=>{let c=[...f.cells],[p]=c.splice(o,1);return p!==void 0&&c.splice(n,0,p),{...f,cells:c}});e({document:{...r,columns:s,rows:u},...i})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:El(o),undoStack:[],redoStack:[]})}});var fe=R(X(),1),Ck=380,DD=280,Sk=(0,as.memo)(({id:e,data:t,selected:a})=>{let{document:o,openStage:n,addRow:r}=Xt(),[l,i]=(0,as.useState)(!1),{zoom:s}=Ja(),d=(0,as.useMemo)(()=>lo(s),[s]),u=o.rows||[],f=o.columns[0],c=t?.label||o.title||"\u8868\u683C";return(0,fe.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:Ck},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(l||a)&&(0,fe.jsx)("div",{className:"wf-floating-top-pill",style:{top:-38*d,transform:`translateX(-50%) scale(${d})`,transformOrigin:"bottom center"},children:(0,fe.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,fe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:g=>{g.stopPropagation(),r()},children:[(0,fe.jsx)(Qe,{size:14}),(0,fe.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",title:"\u5168\u5C4F\u8868\u683C\u7F16\u8F91",onClick:g=>{g.stopPropagation(),n()},children:[(0,fe.jsx)(Sr,{size:13}),(0,fe.jsx)("span",{children:"\u5168\u5C4F\u7F16\u8F91"})]})]})}),(0,fe.jsx)(Ln,{side:"left",nodeHovered:l}),(0,fe.jsx)(Qi,{label:c,materialType:"table"}),(0,fe.jsxs)("div",{className:"wf-material-node__card",style:{width:Ck,height:DD},onDoubleClick:()=>n(),children:[a&&(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,fe.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),u.length===0?(0,fe.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",style:{padding:"24px 16px",height:"100%",boxSizing:"border-box"},children:[(0,fe.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,fe.jsx)(Da,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,fe.jsx)("div",{className:"wf-node-empty__try-label",children:"\u8BD5\u8BD5:"}),(0,fe.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:g=>g.stopPropagation(),children:[(0,fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>r(),children:[(0,fe.jsx)(Qe,{size:14,className:"wf-node-empty__pill-icon"}),(0,fe.jsx)("span",{children:"\u6DFB\u52A0\u9996\u884C\u6570\u636E"})]}),(0,fe.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>n(),children:[(0,fe.jsx)(Sr,{size:13,className:"wf-node-empty__pill-icon"}),(0,fe.jsx)("span",{children:"\u53CC\u51FB\u5168\u5C4F\u7F16\u8F91\u8868\u683C"})]})]})]}):(0,fe.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--wb-border)",background:"color-mix(in srgb, var(--wb-surface) 60%, transparent)",fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,fe.jsx)(Gu,{size:14}),(0,fe.jsx)("span",{children:f?.title||"\u6587\u672C"})]}),(0,fe.jsxs)("span",{style:{fontSize:11,color:"var(--wb-text-muted)",fontFamily:"monospace"},children:["\u5171 ",u.length," \u884C"]})]}),(0,fe.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6,overflowY:"auto"},children:[u.slice(0,3).map((g,y)=>{let w=g.cells[0],h=typeof w=="string"&&w?w:typeof w=="number"?String(w):Array.isArray(w)&&w.length>0?`\u{1F4CE} \u9644\u4EF6 (${w.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,fe.jsxs)("div",{style:{padding:"8px 12px",background:"color-mix(in srgb, var(--wb-surface) 40%, transparent)",border:"1px solid var(--wb-border)",borderRadius:8,fontSize:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:"var(--wb-text-primary)"},children:[(0,fe.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:280},children:h}),(0,fe.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",y+1]})]},y)}),u.length>3&&(0,fe.jsx)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:2},children:"... \u66F4\u591A\u8BB0\u5F55\u53CC\u51FB\u5361\u7247\u67E5\u770B"})]})]})]}),(0,fe.jsx)(Ln,{side:"right",nodeHovered:l})]})});var Lk={type:"table",component:Sk,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({label:"\u8868\u683C",title:"\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u8868\u683C",icon:"table"}};var Tr=R(J(),1);var ha=R(J(),1);var Pa=R(X(),1),zD=({id:e,selected:t=!1,className:a="",cardClassName:o="",style:n,cardStyle:r,dataNodeType:l,nodeWidth:i,nodeHeight:s,showLeftHandle:d=!0,showRightHandle:u=!0,leftHandleVariant:f="plain",rightHandleVariant:c="plus",rightHandleOptions:p,onRightHandleSelect:g,leftHandleOptions:y,onLeftHandleSelect:w,onFileDrop:h,onFilesDrop:x,onDragOver:m,onDragLeave:b,onDrop:S,onMouseEnter:C,onMouseLeave:v,onCardClick:_,onCardDoubleClick:k,renderFloatingPill:T,renderHeader:E,children:F,renderConfigPanel:O})=>{let[L,M]=(0,ha.useState)(!1),[N,I]=(0,ha.useState)(!1),{zoom:A}=Ja(),z=(0,ha.useMemo)(()=>lo(A),[A]),V=(0,ha.useMemo)(()=>({inverseScale:z,hovered:L,selected:t}),[z,L,t]),D=(0,ha.useCallback)(Y=>{M(!0),C?.(Y)},[C]),U=(0,ha.useCallback)(Y=>{M(!1),v?.(Y)},[v]),Z=(0,ha.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!0),m?.(Y)},[m]),W=(0,ha.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!1),b?.(Y)},[b]),j=(0,ha.useCallback)(Y=>{Y.preventDefault(),Y.stopPropagation(),I(!1);let re=Y.dataTransfer.files;re&&re.length>0&&(x?.(re),re[0]&&h?.(re[0])),S?.(Y)},[S,h,x]),ne=typeof T=="function"?T(V):T,ee=typeof E=="function"?E(V):E,q=typeof O=="function"?O(V):O;return(0,Pa.jsxs)("div",{className:`wf-node-shell wf-material-node ${t?"wf-material-node--selected":""} ${a}`.trim(),style:{width:i,...n},onMouseEnter:D,onMouseLeave:U,"data-node-id":e,children:[ne,d&&(0,Pa.jsx)(Ln,{side:"left",nodeHovered:L,variant:f,options:y,onSelect:w}),ee,(0,Pa.jsxs)("div",{className:`wf-material-node__card ${N?"wf-material-node__card--dragover":""} ${o}`.trim(),style:{width:i,height:s,...r},"data-node-type":l,onClick:_,onDoubleClick:k,onDragOver:Z,onDragLeave:W,onDrop:j,children:[t&&(0,Pa.jsxs)(Pa.Fragment,{children:[(0,Pa.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Pa.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Pa.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Pa.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),F]}),q,u&&(0,Pa.jsx)(Ln,{side:"right",nodeHovered:L,variant:c,options:p,onSelect:g})]})},_k=(0,ha.memo)(zD);var Tl=R(J(),1);var En=R(X(),1),PD=({actions:e,children:t,inverseScale:a,topOffset:o=30,className:n="",style:r})=>{let{zoom:l}=Ja(),i=(0,Tl.useMemo)(()=>lo(l),[l]),s=a??i,d=u=>u?Tl.default.isValidElement(u)?u:(0,En.jsx)(u,{size:13,className:"wf-floating-top-pill__icon"}):null;return(0,En.jsx)("div",{className:`wf-floating-top-pill nodrag nowheel ${n}`.trim(),style:{top:-(o*s),transform:`translate(-50%, -100%) scale(${s})`,transformOrigin:"bottom center",...r},onClick:u=>u.stopPropagation(),onMouseDown:u=>u.stopPropagation(),children:t||(e&&e.length>0?(0,En.jsx)("div",{className:"wf-floating-top-pill__group",children:e.map((u,f)=>{let p=["wf-floating-top-pill__btn",u.variant==="primary"?"wf-floating-top-pill__btn--primary":"",u.className||""].filter(Boolean).join(" ");return(0,En.jsxs)(Tl.default.Fragment,{children:[f>0&&(0,En.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,En.jsxs)("button",{type:"button",className:p,onClick:u.onClick,disabled:u.disabled,title:u.title,children:[d(u.icon),u.label?(0,En.jsx)("span",{children:u.label}):null]})]},u.key)})}):null)})},kk=(0,Tl.memo)(PD);var Rp=R(J(),1);var xa=R(X(),1),OD=({mainIcon:e,secondaryIcon:t,title:a,blurb:o,suggestionsTitle:n,actions:r,children:l,className:i="",style:s})=>{let d=se(),u=(f,c,p)=>f?Rp.default.isValidElement(f)?f:(0,xa.jsx)(f,{size:c,className:p}):null;return(0,xa.jsxs)("div",{className:`wf-node-empty wf-node-launcher-state ${i}`.trim(),style:s,children:[(e||t)&&(0,xa.jsxs)("div",{className:"wf-node-empty__icon-box wf-node-launcher-state__icon-box",children:[u(e,36,"wf-node-empty__icon"),t&&(0,xa.jsx)("span",{className:"wf-node-launcher-state__sub-icon",children:u(t,14)})]}),a&&(0,xa.jsx)("h4",{className:"wf-node-launcher-state__title",children:a}),o&&(0,xa.jsx)("p",{className:"wf-node-launcher-state__blurb",children:o}),n!==void 0?n?(0,xa.jsx)("div",{className:"wf-node-empty__try-label",children:n}):null:r&&r.length>0?(0,xa.jsx)("div",{className:"wf-node-empty__try-label",children:d("pills.tryLabel")}):null,r&&r.length>0&&(0,xa.jsx)("div",{className:"wf-node-empty__actions wf-node-launcher-state__actions nodrag",onMouseDown:f=>f.stopPropagation(),children:r.map(f=>{let p=["wf-node-empty__pill-btn","wf-node-launcher-state__pill-btn",f.variant==="primary"?"wf-node-empty__pill-btn--primary wf-node-launcher-state__pill-btn--primary":"",f.className||""].filter(Boolean).join(" ");return(0,xa.jsxs)("button",{type:"button",className:p,onClick:g=>{g.stopPropagation(),f.onClick?.(g)},disabled:f.disabled,title:f.title,children:[f.icon&&(0,xa.jsx)("span",{className:"wf-node-empty__pill-icon",children:u(f.icon,14)}),(0,xa.jsx)("span",{children:f.label})]},f.key)})}),l]})},Ik=(0,Rp.memo)(OD);var Al=R(J(),1);function Mk(e){switch(e){case"completed":return"completed";case"rendering":case"editing":return"generating";case"error":return"failed";case"idle":return}}function Nk(e,t){return e==="error"?"error":e==="rendering"?"rendering":t?"result":"launcher"}function Ek(e){if(e==null||!Number.isFinite(e)||e<0)return"\u2014";let t=Math.round(e),a=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=t%1e3;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function Tk(e,t){return!e||!t?"\u2014":`${e}\xD7${t}`}function Ak(e){return e.replace(/[^\w\u4e00-\u9fff.-]+/g,"_").slice(0,48)||"clip"}var Ye=R(X(),1),BD=({outputVideoUrl:e,thumbnailUrl:t,durationMs:a,width:o,height:n,title:r="",onReEdit:l,onDownload:i})=>{let s=se(),[d,u]=(0,Al.useState)(!1),f=(0,Al.useCallback)(g=>{g.stopPropagation(),u(y=>!y)},[]),c=(0,Al.useCallback)(()=>{u(!1)},[]),p=d&&e?(0,Ye.jsx)("div",{className:"wf-vc-result__preview nodrag nopan",onClick:f,children:(0,Ye.jsx)("video",{src:e,controls:!0,autoPlay:!0,className:"wf-vc-result__video",title:r,onEnded:c})}):(0,Ye.jsxs)("button",{type:"button",className:"wf-vc-result__preview nodrag nopan",onClick:f,"aria-label":s("clip.openEditorTitle"),children:[t?(0,Ye.jsx)("img",{src:t,alt:r,className:"wf-vc-result__thumb"}):(0,Ye.jsx)("span",{className:"wf-vc-result__fallback",children:(0,Ye.jsx)(qt,{size:36,strokeWidth:1.5})}),(0,Ye.jsx)("span",{className:"wf-vc-result__play",children:(0,Ye.jsx)("span",{className:"wf-vc-result__play-chip",children:(0,Ye.jsx)(Aa,{size:22,fill:"currentColor"})})})]});return(0,Ye.jsxs)("div",{className:"wf-vc-result",children:[p,(0,Ye.jsxs)("dl",{className:"wf-vc-result__meta",children:[(0,Ye.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Ye.jsx)("dt",{children:s("clip.duration")}),(0,Ye.jsx)("dd",{className:"wf-vc-result__mono",children:Ek(a)})]}),(0,Ye.jsxs)("div",{className:"wf-vc-result__meta-item",children:[(0,Ye.jsx)("dt",{children:s("clip.resolution")}),(0,Ye.jsx)("dd",{className:"wf-vc-result__mono",children:Tk(o,n)})]})]}),(0,Ye.jsxs)("div",{className:"wf-vc-result__actions nodrag nopan",children:[(0,Ye.jsxs)("button",{type:"button",className:"wf-vc-result__btn wf-vc-result__btn--primary",onClick:g=>{g.stopPropagation(),l?.()},children:[(0,Ye.jsx)(Lr,{size:14}),(0,Ye.jsx)("span",{children:s("clip.reEdit")})]}),(0,Ye.jsxs)("button",{type:"button",className:"wf-vc-result__btn",onClick:g=>{g.stopPropagation(),i?.()},disabled:!e,title:e?s("clip.downloadTitle"):void 0,children:[(0,Ye.jsx)(ml,{size:14}),(0,Ye.jsx)("span",{children:s("clip.download")})]})]})]})},Rk=(0,Al.memo)(BD);var Dk="omnimux-clip-open",Xx="omnimux-clip-save",Yx="omnimux-clip-close",Zx="omnimux-clip-progress";function zk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.projectId!=null&&typeof t.projectId!="string"||t.schema!=null&&(typeof t.schema!="object"||Array.isArray(t.schema))||t.output!=null&&(typeof t.output!="object"||t.output===null||typeof t.output.videoPath!="string"))}function Pk(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return t.nodeId==null||typeof t.nodeId=="string"}function Ok(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;let t=e;return!(t.nodeId!=null&&typeof t.nodeId!="string"||t.status!=null&&typeof t.status!="string"||t.renderProgress!=null&&typeof t.renderProgress!="number")}var ta=R(X(),1),HD=350,FD=440;function Bk(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Oa(e){return typeof e=="string"&&e.trim()?e:void 0}function jx(e){return typeof e=="number"&&Number.isFinite(e)?e:void 0}function UD(e){return Oa(e.mediaUrl)||Oa(e.outputVideoUrl)||Oa(e.path)||Oa(e.url)||Oa(e.real_path)||Oa(e.filePath)}function qD(e){let{nodes:t,edges:a}=ie.getState(),o=[],n=[],r=[],l=[];for(let i of a){if(i.target!==e)continue;let s=t.find(g=>g.id===i.source);if(!s)continue;let d=Bk(s.data)?s.data:{},u=Oa(d.materialType)||(s.type==="material"?void 0:s.type),f=Oa(d.label)||Oa(d.title)||s.id,c=UD(d)||"",p=jx(d.duration)??jx(d.outputDurationMs)??jx(d.durationMs);if(u==="video"||s.type==="video_composition"){let g=c||Oa(d.outputVideoUrl)||"";g&&o.push({path:g,name:f,durationMs:p,url:g})}else if(u==="image")c&&r.push({path:c,name:f,displayDurationMs:p??3e3,url:c});else if(u==="audio")c&&n.push({path:c,name:f,durationMs:p,url:c});else if(u==="text"){let g=Oa(d.content)||Oa(d.generatedContent)||Oa(d.prompt);g&&l.push({text:g,startTimeMs:l.reduce((y,w)=>y+w.durationMs,0),durationMs:3e3})}}return{videos:o,audios:n,images:r,captions:l}}function VD(){return typeof document>"u"?!1:!!(document.querySelector('[data-plugin="omnimux-clip"]')||document.querySelector('[data-stage="clip-editor"]')||typeof window<"u"&&window.__omnimuxClipReady)}function GD(){return{title:"\u89C6\u9891\u5408\u6210",label:"\u89C6\u9891\u5408\u6210",status:"idle",schemaVersion:"1.0",projectId:`clip_node_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}var XD=({id:e,data:t,selected:a})=>{let o=Bk(t)?t:{},n=ie(g=>g.setNodes),r=se(),l=o.status??"idle",i=!!o.outputVideoUrl,s=o.thumbnailUrl||o.outputThumbnailUrl,d=o.title||o.label||r("node.type.video_composition"),u=Nk(l,i),f=(0,Tr.useCallback)(g=>{n(y=>y.map(w=>w.id===e?{...w,data:{...w.data,...g}}:w))},[e,n]);(0,Tr.useEffect)(()=>{if(typeof window>"u")return;let g=h=>{let x=h instanceof CustomEvent?h.detail:void 0;if(!zk(x)||x.nodeId&&x.nodeId!==e)return;let m=x.output;f({schema:x.schema,projectId:x.projectId||o.projectId,outputVideoUrl:m?.videoPath,thumbnailUrl:m?.thumbnailPath,outputThumbnailUrl:m?.thumbnailPath,outputDurationMs:m?.durationMs,outputWidth:m?.width,outputHeight:m?.height,status:m?.videoPath?"completed":"idle",renderProgress:m?.videoPath?100:void 0,errorMessage:void 0})},y=h=>{let x=h instanceof CustomEvent?h.detail:void 0;if(!Ok(x)||x.nodeId&&x.nodeId!==e)return;let m=x.status??"rendering";f({status:m,renderProgress:x.renderProgress})},w=h=>{let x=h instanceof CustomEvent?h.detail:void 0;Pk(x)&&(x.nodeId&&x.nodeId!==e||o.status==="editing"&&f({status:i?"completed":"idle"}))};return window.addEventListener(Xx,g),window.addEventListener(Zx,y),window.addEventListener(Yx,w),()=>{window.removeEventListener(Xx,g),window.removeEventListener(Zx,y),window.removeEventListener(Yx,w)}},[i,e,o.projectId,o.status,f]);let c=(0,Tr.useCallback)(()=>{if(typeof window>"u")return;let g=o.projectId||`clip_${e.replace(/[^A-Za-z0-9._-]/g,"_").slice(0,80)}`,y={source:"canvas",nodeId:e,nodeTitle:d,projectId:g,draftSchema:o.schema,upstreamInputs:qD(e)};f({status:"editing",projectId:g}),window.dispatchEvent(new CustomEvent(Dk,{detail:y,bubbles:!0})),window.setTimeout(()=>{VD()||Te.warning(r("clip.needPlugin"))},400)},[e,o.projectId,o.schema,r,d,f]),p=(0,Tr.useCallback)(()=>{let g=o.outputVideoUrl;if(!g)return;let y=document.createElement("a");y.href=g,y.download=`${Ak(d)}.mp4`,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove()},[o.outputVideoUrl,d]);return(0,ta.jsxs)(_k,{id:e,selected:a,nodeWidth:HD,nodeHeight:FD,dataNodeType:"video_composition",showLeftHandle:!0,showRightHandle:!0,leftHandleVariant:"plain",rightHandleVariant:"plain",onCardDoubleClick:g=>{g.stopPropagation(),c()},renderFloatingPill:({hovered:g,selected:y})=>{if(!g&&!y)return null;let w=[{key:"open_clip",label:r("clip.openEditor"),icon:Lr,variant:"primary",onClick:h=>{h.stopPropagation(),c()},title:r("clip.openEditorTitle")}];return i&&w.push({key:"download_video",label:r("clip.download"),icon:ml,onClick:p,title:r("clip.downloadTitle")}),(0,ta.jsx)(kk,{actions:w})},renderHeader:()=>(0,ta.jsx)(Qi,{label:d,materialType:"video_composition",customIcon:(0,ta.jsx)(qt,{size:14}),onLabelChange:g=>f({label:g,title:g}),trailing:(0,ta.jsx)(kp,{status:Mk(l)})}),children:[u==="result"&&(0,ta.jsx)(Rk,{outputVideoUrl:o.outputVideoUrl,thumbnailUrl:s,durationMs:o.outputDurationMs,width:o.outputWidth,height:o.outputHeight,title:d,onReEdit:c,onDownload:p}),u==="rendering"&&(0,ta.jsx)("div",{className:"wf-material-node__media",children:(0,ta.jsx)(hd,{status:"generating",loadingAspectRatio:"video",children:null})}),u==="error"&&(0,ta.jsx)("div",{className:"wf-material-node__media",children:(0,ta.jsx)(hd,{status:"failed",loadingAspectRatio:"video",errorMessage:o.errorMessage,onRetry:c,children:null})}),u==="launcher"&&(0,ta.jsx)(Ik,{mainIcon:(0,ta.jsx)(qt,{size:36,strokeWidth:1.5}),secondaryIcon:(0,ta.jsx)(Bo,{size:14}),title:r("clip.launcherTitle"),blurb:r("clip.launcherBlurb"),actions:[{key:"open_clip",label:r("clip.openClip"),icon:Lr,variant:"primary",onClick:()=>c()}]})]})},Hk={type:"video_composition",component:(0,Tr.memo)(XD),ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["video"]}],defaultData:()=>GD(),configSpec:{promptEnabled:!1,modelCategory:"video"},executorKey:"video_composition",palette:{group:"palette.group.material",label:"palette.node.video_composition",icon:"film"}};var Zk=R(J(),1),jk=R(Io(),1);var Dp=R(J(),1),Fk=R(Io(),1);var Ee=R(X(),1),Wx=e=>e==="text"?(0,Ee.jsx)(Cn,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="number"?(0,Ee.jsx)(ju,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):e==="attachment"?(0,Ee.jsx)(td,{size:15,style:{color:"var(--wb-text-secondary, #a1a1aa)",flexShrink:0}}):(0,Ee.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted, #71717a)"}}),Uk=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Xt(),[l,i]=(0,Dp.useState)(null);(0,Dp.useEffect)(()=>{if(o===null){i(null);return}let d=()=>{n(null)},u=f=>{f.key==="Escape"&&n(null)};return window.addEventListener("pointerdown",d),window.addEventListener("scroll",d,!0),window.addEventListener("keydown",u),()=>{window.removeEventListener("pointerdown",d),window.removeEventListener("scroll",d,!0),window.removeEventListener("keydown",u)}},[o,n]);let s=o!==null?e.columns[o]:null;return(0,Ee.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:d=>d.stopPropagation(),children:[(0,Ee.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,Ee.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((d,u)=>(0,Ee.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,Ee.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[(0,Ee.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted, #71717a)",display:"flex",alignItems:"center"},children:(0,Ee.jsx)(Zu,{size:14})}),Wx(d.type),(0,Ee.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--wb-text-primary, #f4f4f5)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.title})]}),(0,Ee.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,Ee.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:d.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(u),children:d.visible?(0,Ee.jsx)(Vu,{size:15}):(0,Ee.jsx)(qu,{size:15,style:{color:"var(--wb-text-muted, #71717a)"}})}),(0,Ee.jsx)("button",{type:"button",className:`wf-field-config-subtle-btn ${o===u?"wf-field-config-subtle-btn--active":""}`,onClick:f=>{if(f.stopPropagation(),o===u)n(null);else{let c=f.currentTarget.getBoundingClientRect(),p=100,g=72,h=window.innerHeight-c.bottom<g+10?c.top-g-4:c.bottom+4,x=Math.max(8,c.right-p);i({top:h,left:x}),n(u)}},children:(0,Ee.jsx)(yr,{size:15})})]})]},d.id))}),(0,Ee.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border, rgba(255, 255, 255, 0.08))"},children:(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent, #4176E6)",justifyContent:"center",gap:6},onClick:()=>a("add"),children:[(0,Ee.jsx)(Qe,{size:14}),(0,Ee.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})}),o!==null&&s&&l&&typeof document<"u"&&(0,Fk.createPortal)((0,Ee.jsxs)("div",{className:"wf-popover-context-bubble",style:{position:"fixed",top:l.top,left:l.left,zIndex:10010},onClick:d=>d.stopPropagation(),children:[(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{let d=o;n(null),a("edit",d)},children:[(0,Ee.jsx)(Ho,{size:13}),(0,Ee.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{let d=o,u=s;n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${u.title}" \u5417\uFF1F`)&&r(d)},children:[(0,Ee.jsx)(yl,{size:13}),(0,Ee.jsx)("span",{children:"\u5220\u9664"})]})]}),document.body)]})};var Ht=R(X(),1),YD=[{value:"equals",label:"\u7B49\u4E8E"},{value:"notEquals",label:"\u4E0D\u7B49\u4E8E"},{value:"contains",label:"\u5305\u542B"},{value:"notContains",label:"\u4E0D\u5305\u542B"},{value:"gt",label:"\u5927\u4E8E"},{value:"gte",label:"\u5927\u4E8E\u7B49\u4E8E"},{value:"lt",label:"\u5C0F\u4E8E"},{value:"lte",label:"\u5C0F\u4E8E\u7B49\u4E8E"},{value:"empty",label:"\u4E3A\u7A7A"},{value:"notEmpty",label:"\u4E0D\u4E3A\u7A7A"}],qk=()=>{let{document:e,setFilterConditions:t}=Xt(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],o=e.columns.map((i,s)=>({value:s,label:i.title||`\u5217 ${s+1}`})),n=(i,s)=>{let d=a.map((u,f)=>f===i?{...u,...s}:u);t(d)},r=()=>{let i=[...a,{columnIndex:0,op:"equals",value:""}];t(i)},l=i=>{let s=a.filter((d,u)=>u!==i);t(s.length===0?[{columnIndex:0,op:"equals",value:""}]:s)};return(0,Ht.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:i=>i.stopPropagation(),children:[(0,Ht.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,Ht.jsxs)("div",{className:"wf-filter-body",children:[a.map((i,s)=>(0,Ht.jsxs)("div",{className:"wf-filter-row",children:[(0,Ht.jsx)("div",{style:{width:130,flexShrink:0},children:(0,Ht.jsx)(ma,{value:i.columnIndex,options:o,onChange:d=>n(s,{columnIndex:d}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ht.jsx)("div",{style:{width:110,flexShrink:0},children:(0,Ht.jsx)(ma,{value:i.op,options:YD,onChange:d=>n(s,{op:d}),variant:"standard",className:"wf-filter-capsule-select"})}),(0,Ht.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165\u7B5B\u9009\u503C...",value:i.value??"",disabled:i.op==="empty"||i.op==="notEmpty",onChange:d=>n(s,{value:d.target.value})}),(0,Ht.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>l(s),children:(0,Ht.jsx)(kt,{size:15})})]},s)),(0,Ht.jsx)("div",{style:{paddingTop:4},children:(0,Ht.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent, #4176E6)",display:"inline-flex",gap:6},onClick:r,children:[(0,Ht.jsx)(Qe,{size:14}),(0,Ht.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var Tn=R(X(),1),ZD=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],Vk=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Xt(),o=e.rowHeight||"low";return(0,Tn.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,Tn.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,Tn.jsx)("div",{style:{padding:"6px"},children:ZD.map(n=>{let r=o===n.id;return(0,Tn.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,Tn.jsx)("span",{children:n.label}),r&&(0,Tn.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,Tn.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var Ie=R(X(),1),Gk=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:l,canRedo:i,closeStage:s}=Xt(),d=a==="field-config",u=a==="filter",f=a==="row-height",c=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,Ie.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,Ie.jsx)("div",{className:"wf-stage-topbar__left",children:(0,Ie.jsxs)("div",{className:"wf-stage-title-group",children:[(0,Ie.jsx)(Da,{size:16,className:"wf-stage-title-icon"}),(0,Ie.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u8868\u683C",placeholder:"\u8F93\u5165\u8868\u683C\u540D\u79F0...",onChange:p=>t(p.target.value)})]})}),(0,Ie.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,Ie.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ie.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${d?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(d?null:"field-config")},children:[(0,Ie.jsx)(rd,{size:15}),(0,Ie.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),d&&(0,Ie.jsx)(Uk,{})]}),(0,Ie.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ie.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"filter")},children:[(0,Ie.jsx)(vr,{size:15}),(0,Ie.jsx)("span",{children:"\u7B5B\u9009"}),c&&(0,Ie.jsx)("span",{className:"wf-stage-dot-badge"})]}),u&&(0,Ie.jsx)(qk,{})]}),(0,Ie.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,Ie.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,Ie.jsx)(Ir,{size:15}),(0,Ie.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,Ie.jsx)(Vk,{})]}),(0,Ie.jsx)("div",{className:"wf-stage-divider"}),(0,Ie.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,Ie.jsx)(wl,{size:16})}),(0,Ie.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,Ie.jsx)(xl,{size:16})}),(0,Ie.jsx)("div",{className:"wf-stage-divider"}),(0,Ie.jsx)("button",{type:"button",className:"wf-stage-icon-btn wf-stage-close-btn",title:"\u5173\u95ED\u5168\u5C4F\u7F16\u8F91 (Esc)",onClick:p=>{p.stopPropagation(),s()},children:(0,Ie.jsx)(kt,{size:16})})]})]})};var Ce=R(X(),1),Xk=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Xt(),n=e.columns.filter(i=>i.visible),l=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Ce.jsx)("div",{className:"wf-grid-container",children:(0,Ce.jsxs)("div",{className:"wf-grid-scroll-pane",children:[(0,Ce.jsxs)("table",{className:"wf-grid-table",children:[(0,Ce.jsxs)("colgroup",{children:[(0,Ce.jsx)("col",{style:{width:48,minWidth:48,maxWidth:48}}),n.map(i=>(0,Ce.jsx)("col",{style:{width:i.width||220,minWidth:120}},i.id)),(0,Ce.jsx)("col",{style:{width:44,minWidth:44,maxWidth:44}}),(0,Ce.jsx)("col",{style:{width:"auto"}})]}),(0,Ce.jsx)("thead",{children:(0,Ce.jsxs)("tr",{children:[(0,Ce.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Ce.jsx)("input",{type:"checkbox",className:"wf-grid-checkbox"})}),n.map(i=>(0,Ce.jsx)("th",{className:"wf-grid-th",children:(0,Ce.jsxs)("div",{className:"wf-grid-th-content",children:[(0,Ce.jsx)("span",{className:"wf-grid-th-icon",children:Wx(i.type)}),(0,Ce.jsx)("span",{className:"wf-grid-th-title",children:i.title})]})},i.id)),(0,Ce.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Ce.jsx)("div",{className:"wf-grid-th-plus-btn",children:(0,Ce.jsx)(Qe,{size:15})})}),(0,Ce.jsx)("th",{className:"wf-grid-th wf-grid-th--filler"})]})}),(0,Ce.jsx)("tbody",{children:e.rows.map((i,s)=>(0,Ce.jsxs)("tr",{className:l,children:[(0,Ce.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:(0,Ce.jsx)("span",{children:s+1})}),n.map(d=>{let u=e.columns.findIndex(p=>p.id===d.id),f=i.cells[u];return(0,Ce.jsx)("td",{className:"wf-grid-td",children:(()=>{if(d.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,Ce.jsxs)("div",{className:"wf-grid-cell-attachment",children:[g.map((y,w)=>(0,Ce.jsxs)("span",{className:"wf-grid-attachment-tag",children:["\u{1F4CE} ",y.name]},w)),g.length===0&&(0,Ce.jsx)("span",{className:"wf-grid-attachment-empty",children:"+ \u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,Ce.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,placeholder:"\u70B9\u51FB\u8F93\u5165...",onChange:g=>t(s,u,g.target.value)})})()},d.id)}),(0,Ce.jsx)("td",{className:"wf-grid-td wf-grid-td--plus-col"}),(0,Ce.jsx)("td",{className:"wf-grid-td wf-grid-td--filler"})]},s))})]}),(0,Ce.jsx)("div",{className:"wf-grid-add-row-bar",children:(0,Ce.jsxs)("button",{type:"button",className:"wf-grid-add-row-btn",onClick:()=>a(),children:[(0,Ce.jsx)(Qe,{size:14}),(0,Ce.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})})};var Rl=R(J(),1);var ba=R(X(),1),jD=[{value:"text",label:"\u6587\u672C (Text)"},{value:"number",label:"\u6570\u5B57 (Number)"},{value:"attachment",label:"\u9644\u4EF6 (Attachment)"}],Yk=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Xt(),[n,r]=(0,Rl.useState)(e.initialTitle),[l,i]=(0,Rl.useState)(e.initialType),s=(0,Rl.useRef)(null);(0,Rl.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),i(e.initialType),setTimeout(()=>s.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]);let d=u=>{u&&u.preventDefault();let f=n.trim();if(!f){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(f,l):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,f,l),t()};return(0,ba.jsx)(Cl,{open:e.isOpen,onCancel:t,title:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217",width:420,footer:(0,ba.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10},children:[(0,ba.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,ba.jsx)("button",{type:"button",className:"wf-modal-btn-primary",onClick:()=>d(),children:"\u786E\u5B9A"})]}),children:(0,ba.jsxs)("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,ba.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,ba.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u540D"}),(0,ba.jsx)("input",{ref:s,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D...",value:n,onChange:u=>r(u.target.value)})]}),(0,ba.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[(0,ba.jsx)("label",{style:{fontSize:13,fontWeight:500,color:"#a1a1aa"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,ba.jsx)("div",{className:"wf-modal-select-wrapper",children:(0,ba.jsx)(ma,{value:l,options:jD,onChange:u=>i(u),variant:"standard",className:"wf-modal-custom-select"})})]})]})})};var os=R(X(),1),Wk=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Xt();return(0,Zk.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),!e||typeof document>"u"?null:(0,jk.createPortal)((0,os.jsxs)("div",{className:"wf-stage-overlay wf-canvas-root",onClick:()=>a(null),children:[(0,os.jsx)(Gk,{}),(0,os.jsx)(Xk,{}),(0,os.jsx)(Yk,{})]}),document.body)};var Ft=R(X(),1);Lp(vk);Lp(Lk);Lp(Hk);var WD=C_(),KD={animated:$L},Kk={maxZoom:1},$D={x:0,y:0,zoom:1},QD=[1,2],JD=96,ez=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:d}=Ta(),{nodes:u,edges:f,onNodesChange:c,onEdgesChange:p}=BL(),g=ie($=>$.applyCanvasInputMutation),y=ie($=>$.setNodes),w=ie($=>$.setSelectedElement),h=ie($=>$.pushHistory),x=ie($=>$.undo),m=ie($=>$.redo),b=HL(),S=FL(),[C,v]=(0,ot.useState)(null),[_,k]=(0,ot.useState)(!1),[T,E]=(0,ot.useState)(!1),[F,O]=(0,ot.useState)(!1),[L,M]=(0,ot.useState)(!1),[N,I]=(0,ot.useState)(void 0),[A,z]=(0,ot.useState)("select"),V=(0,ot.useRef)(0),D=(0,ot.useMemo)(()=>u.some($=>$.selected),[u]),U=w_(y,w),Z=se(),W=Z("menu.generateFromNode"),{menuState:j,onConnectStart:ne,onConnectEnd:ee,onMenuSelect:q,onMenuClose:Y}=h_({onReject:v});(0,ot.useEffect)(()=>{h()},[u,f,h]);let re=(0,ot.useMemo)(()=>e?u.map($=>({...$,data:{...$.data,__catalog:e}})):u,[u,e]),ue=(0,ot.useCallback)($=>{let qe=g({addEdges:[$]});if(qe.status==="rejected"){let nt=Z(yp(qe.reasonCode));v(nt),Te.warning(nt)}else v(null)},[g,Z]),te=(0,ot.useCallback)($=>{let qe=ie.getState();return u_($,qe.nodes,qe.edges)},[]),oe=(0,ot.useCallback)(($,qe)=>{let nt=V.current,Ba=qe??{x:120+nt%3*420,y:120+Math.floor(nt/3)*360};if($==="table"||$==="video_composition"){let _o=S_($,Ba,`node_${$}_${Date.now()}`);if(!_o)return;V.current+=1,y(Pp=>Dx(Pp,[{..._o,selected:!0}]));return}let Ar=kl($,Ba);Ar.nodes.length!==0&&(V.current+=1,y(_o=>Dx(_o,Ar.nodes)))},[y]),xe=(0,ot.useCallback)($=>{let qe=$.nodes.map(Ba=>Ba.id),nt=$.edges.map(Ba=>Ba.id);qe.length===0&&nt.length===0||g({removeNodeIds:qe,removeEdgeIds:nt})},[g]),{menu:be,handleNodeContextMenu:He,handlePaneContextMenu:K,handleSelectionContextMenu:_e,closeMenu:Ae,handleMenuAction:bt,handleAddNodeFromMenu:oa}=v_({screenToFlowPosition:i,setNodes:y,copySelectedNodes:U.copySelectedNodes,pasteNodes:U.pasteNodes,duplicateSelectedNodes:U.duplicateSelectedNodes,deleteSelectedNodes:U.deleteSelectedNodes,selectAllNodes:U.selectAllNodes,clearSelection:U.clearSelection,undo:x,redo:m,onExecuteNodeIds:t,onAddNode:oe}),Lo=(0,ot.useCallback)($=>{let qe=$.type==="video"?"video":$.type==="image"?"image":"text",nt=V.current++,Ba={x:200+nt%4*50,y:200+nt%4*40},_o=kl(qe,Ba,{title:$.name,content:$.path,previewUrl:$.previewUrl,status:"ready"}).nodes[0];_o&&(g({addNodes:[_o]}),w("node",_o.id),Te.success(Z("toolbar.assets")+": "+$.name))},[g,w,Z]);s_({onCopy:U.copySelectedNodes,onPaste:()=>U.pasteNodes(),onSelectAll:U.selectAllNodes,onDeleteSelected:U.deleteSelectedNodes,onClearSelection:U.clearSelection,onDuplicate:U.duplicateSelectedNodes,onUndo:x,onRedo:m,hasSelection:D,onToggleAssets:()=>E($=>!$),onToggleShortcuts:()=>O($=>!$),onToggleMinimap:()=>k($=>!$),onToggleAddMenu:()=>M($=>!$),onSetPointerMode:$=>z($),onFitView:()=>s(Kk),onResetZoom:()=>d(1),onCategoryKey:$=>{E(!0),I($)}});let Zo=(0,ot.useCallback)(($,qe)=>{w("node",qe.id)},[w]),jo=(0,ot.useCallback)(()=>{w("none",null),Ae()},[w,Ae]),ya=(0,ot.useCallback)(()=>{y($=>$.map((qe,nt)=>({...qe,position:{x:120+nt%3*440,y:120+Math.floor(nt/3)*360}})))},[y]);return(0,Ft.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Ft.jsx)(eL,{nodes:re,edges:f,onNodesChange:c,onEdgesChange:p,onConnect:ue,isValidConnection:te,onConnectStart:ne,onConnectEnd:ee,onNodeClick:Zo,onPaneClick:jo,onNodeContextMenu:He,onPaneContextMenu:K,onSelectionContextMenu:_e,onDelete:xe,nodeTypes:WD,edgeTypes:KD,fitView:!0,fitViewOptions:Kk,defaultViewport:$D,minZoom:Ax.minZoom,maxZoom:Ax.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:A==="pan"?!0:QD,panOnScroll:!0,panOnScrollMode:go.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:A==="select",selectionMode:wn.Partial,defaultEdgeOptions:rp,connectOnClick:!1,connectionRadius:JD,onlyRenderVisibleElements:!0,children:(0,Ft.jsx)(nL,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:Po.Dots})}),(0,Ft.jsx)(JL,{isMinimapOpen:_,onToggleMinimap:()=>k($=>!$),onAlignGrid:ya,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Ft.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Ft.jsx)(iL,{pannable:!0,zoomable:!0})}),(0,Ft.jsx)(QL,{onAddNode:oe,onUndo:x,onRedo:m,canUndo:b,canRedo:S,pointerMode:A,onPointerModeChange:z,onToggleAssets:()=>E($=>!$),onToggleShortcuts:()=>O($=>!$),isAssetsOpen:T,isShortcutsOpen:F,isAddMenuOpen:L,onToggleAddMenu:()=>M($=>!$)}),(0,Ft.jsx)(e_,{isOpen:T,onClose:()=>E(!1),onInsertAsset:Lo,selectedCategoryIndex:N}),(0,Ft.jsx)(t_,{isOpen:F,onClose:()=>O(!1)}),(0,Ft.jsx)(l_,{x:be.x,y:be.y,visible:be.visible,context:be.context,onClose:Ae,onAction:bt,onAddNode:oa,canUndo:b,canRedo:S,hasClipboard:U.hasClipboard,hasSelection:D}),(0,Ft.jsx)(bp,{visible:j.visible,x:j.x,y:j.y,title:W,options:j.options,onSelect:q,onClose:Y}),(0,Ft.jsx)(Wk,{}),C&&(0,Ft.jsx)("div",{className:"wf-rejected-toast",children:C})]})},tz=e=>(0,Ft.jsx)(vx,{children:(0,Ft.jsx)(ez,{...e})}),$k=tz;var xt=R(J(),1);var Qk=new Set(["pending","running","paused"]),az=new Set(["completed","error","cancelled"]);function ns(e,t){let a=ie.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function Jk(e,t){let a=(0,xt.useRef)(null),o=(0,xt.useRef)(e);o.current=e;let n=(0,xt.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,xt.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),l=(0,xt.useCallback)((w,h)=>{Ge.getState().setExecution({status:w,error:h,progress:{...Ge.getState().progress,percentage:w==="completed"?100:Ge.getState().progress.percentage}})},[]),i=(0,xt.useCallback)((w,h)=>{let x;try{x=JSON.parse(h)}catch{return}let m=Ge.getState();switch(w){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:x.totalNodes??0,completed:0,running:0,pending:x.totalNodes??0,percentage:0}});break}case"node_start":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),ns(x.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:x.progress??m.progress.percentage}});let b=x.output??{},S={executionStatus:"completed",executionError:void 0};if(b.text&&(S.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let C=b.mediaAssets[0];S.mediaAssets=b.mediaAssets,C.type==="image"&&(S.mediaUrl=C.url),S.taskId=`exec-${x.executionId??""}`}ns(x.nodeId,S);break}case"node_error":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),ns(x.nodeId,{executionStatus:"error",executionError:x.error??Sn("error.nodeExecutionFailed")});break}case"node_skipped":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"skipped"),ns(x.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{l("completed",null),r();break}case"execution_error":{l("error",x.error??Sn("error.executionFailed")),r();break}case"execution_cancelled":{l("cancelled",null),r();break}default:break}},[l,r]),s=(0,xt.useCallback)(w=>{r();let h=o.current;if(!h)return;let x=new EventSource(ea.executionEvents(encodeURIComponent(h),encodeURIComponent(w)));a.current=x;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)x.addEventListener(b,S=>{i(b,S.data)});x.onerror=()=>{let b=Ge.getState().status;az.has(b)&&r()}},[r,i]),d=(0,xt.useCallback)(w=>{let h=Ge.getState();h.setExecution({executionId:w.id,status:w.status,error:w.error,progress:{total:w.progress.total,completed:w.progress.completed,running:w.progress.running,pending:w.progress.pending,percentage:w.progress.percentage}});for(let[x,m]of Object.entries(w.nodeStates??{})){h.setNodeStatus(x,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let S=w.nodeOutputs?.[x];S&&(S.text&&(b.generatedContent=S.text),S.mediaAssets&&S.mediaAssets.length>0&&(b.mediaAssets=S.mediaAssets,S.mediaAssets[0]&&S.mediaAssets[0].type==="image"&&(b.mediaUrl=S.mediaAssets[0].url))),ns(x,b)}},[]),u=(0,xt.useCallback)(async(w={})=>{let h=o.current;if(!h)return;if(r(),Ge.getState().resetExecution(),Ge.getState().setExecution({status:"pending"}),w.mode==="single"&&w.nodeIds&&w.nodeIds[0]&&(Ge.getState().setNodeStatus(w.nodeIds[0],"pending"),ns(w.nodeIds[0],{executionStatus:"pending",executionError:void 0})),n.current)try{await n.current()}catch{}let x=await pk(h,{mode:w.mode??"full",nodeIds:w.nodeIds});if(!x.ok||!x.body.execution){Ge.getState().setExecution({status:"error",error:x.body.message??Sn("error.createExecutionFailed")});return}Ge.getState().setExecution({executionId:x.body.execution.id}),s(x.body.execution.id)},[r,s]),f=(0,xt.useCallback)(async w=>{let h=o.current,{executionId:x}=Ge.getState();if(!h||!x)return;let m=await xk(h,x,w);!m.ok&&m.body.message&&Ge.getState().setExecution({error:m.body.message})},[]),c=(0,xt.useCallback)(()=>f("pause"),[f]),p=(0,xt.useCallback)(()=>f("resume"),[f]),g=(0,xt.useCallback)(()=>f("cancel"),[f]),y=(0,xt.useCallback)(()=>{r(),Ge.getState().resetExecution()},[r]);return(0,xt.useEffect)(()=>{if(!e)return;let w=!1;return(async()=>{try{let h=await mk(e);if(w||!h.ok)return;let x=(h.body.executions??[]).find(b=>Qk.has(b.status));if(!x)return;let m=await gk(e,x.id);if(w||!m.ok||!m.body.execution)return;d(m.body.execution),Qk.has(m.body.execution.status)&&s(x.id)}catch{}})(),()=>{w=!0}},[e,d,s]),(0,xt.useEffect)(()=>(Ge.getState().setStartNodeExecution(h=>{u({mode:"single",nodeIds:[h]})}),()=>{Ge.getState().setStartNodeExecution(null)}),[u]),(0,xt.useEffect)(()=>r,[r]),{startExecution:u,pause:c,resume:p,cancel:g,reset:y}}var Dl=R(J(),1);function eI(e={}){let t=e.workspaceId,[a,o]=(0,Dl.useState)({phase:"loading"}),[n,r]=(0,Dl.useState)(()=>bd()),l=ie(f=>f.hydrateGraph),i=ie(f=>f.resetStore),s=ie(f=>f.nodes.length),d=(0,Dl.useRef)(e.beforeReset);d.current=e.beforeReset;async function u(){let f=ie.getState(),c=K_(f.nodes);if(c.length===0)return;let p=await hk(c);if(!p.ok||!Array.isArray(p.body.items))return;let g=W_(f.nodes,p.body.items);g.some((w,h)=>w!==f.nodes[h])&&f.setNodes(g)}return(0,Dl.useEffect)(()=>{let f=!1;return o({phase:"loading"}),(async()=>{try{if(uk().then(y=>{!f&&y.ok&&(r(y.body),V_(y.body))}),t){let y=await wd(t);if(f)return;if(y.ok&&y.body.workspace){let h=y.body.workspace;l(h.nodes,h.edges),o({phase:"ready",workspace:h}),u();return}let w=await qx("\u5DE5\u4F5C\u6D41",t);if(f)return;if(!w.ok||!w.body.workspace)throw new Error(w.body.message??Sn("error.createWorkspaceFailed"));l(w.body.workspace.nodes,w.body.workspace.edges),o({phase:"ready",workspace:w.body.workspace});return}let c=await dk();if(f)return;let p=c.body.workspaces?.[0]?.id;if(!p){let y=await qx("\u6211\u7684\u5DE5\u4F5C\u6D41");if(f)return;if(!y.ok||!y.body.workspace)throw new Error(y.body.message??Sn("error.createWorkspaceFailed"));p=y.body.workspace.id}let g=await wd(p);if(f)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??Sn("error.loadWorkspaceFailed"));l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace}),u()}catch(c){f||o({phase:"error",message:c instanceof Error?c.message:String(c)})}})(),()=>{f=!0,d.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var Je=R(J(),1);function zp(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function oz(e){let t=typeof e.realPath=="string"?e.realPath:"";if(t){let a=Mn(t);e.mediaUrl=a,Array.isArray(e.mediaAssets)&&(e.mediaAssets=e.mediaAssets.map(o=>{if(!o||typeof o!="object")return o;let n={...o};return(Np(n.url)||!n.url)&&(n.url=a),n.path||(n.path=t),n}))}else Np(e.mediaUrl)&&delete e.mediaUrl;if(Array.isArray(e.mediaAssets)){let a=e.mediaAssets.map(o=>{if(!o||typeof o!="object")return null;let n={...o};return Np(n.url)&&(typeof n.path=="string"&&n.path?n.url=Mn(n.path):delete n.url),n.url||n.path?n:null}).filter(Boolean);a.length===0?delete e.mediaAssets:e.mediaAssets=a}}function Kx(e){return e.map(t=>{let a=t,o=zp(a.data);delete o.__catalog,oz(o);let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=zp(a.style)),n})}function $x(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=zp(a.data)),a.style&&typeof a.style=="object"&&(o.style=zp(a.style)),o})}function An(e,t){return JSON.stringify({nodes:Kx(e),edges:$x(t)})}var nz=1e3,rz=2500,lz=3e3;function rs(){let{nodes:e,edges:t}=ie.getState(),a=kx(e,t);return{nodes:a.nodes,edges:a.edges}}function tI(e,t={}){let a=t.enabled!==!1,[o,n]=(0,Je.useState)("idle"),[r,l]=(0,Je.useState)(!1),i=(0,Je.useRef)(e),s=(0,Je.useRef)(0),d=(0,Je.useRef)(""),u=(0,Je.useRef)(0),f=(0,Je.useRef)(""),c=(0,Je.useRef)(null),p=(0,Je.useRef)(null),g=(0,Je.useRef)(!1),y=(0,Je.useRef)(a);y.current=a;let w=(0,Je.useRef)(t.onSaved);w.current=t.onSaved,(0,Je.useEffect)(()=>{i.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,d.current=An(e.nodes,e.edges),u.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,Je.useCallback)(async(v,_,k=!1)=>{let T=i.current;if(!T||!k&&!y.current||g.current)return;let E=pp({lastSavedNodeCount:u.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:d.current,nextSignature:An(v.nodes,v.edges)});if(!E.persist||!E.snapshot)return;let{nodes:F,edges:O}=E.snapshot,L=T.name;g.current=!0,n("saving");try{let M=await fk(T.id,{name:L,nodes:Kx(F),edges:$x(O),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,d.current=An(F,O),u.current=F.length,l(!1),n("saved"),h(),p.current=setTimeout(()=>{n(N=>N==="saved"?"idle":N)},rz),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,Je.useEffect)(()=>{if(!a)return;let v=(k="autosave")=>{if(!i.current||!y.current)return;let E=rs(),O=An(E.nodes,E.edges)!==d.current;if(l(O),!O){c.current&&(clearTimeout(c.current),c.current=null),n(I=>I==="pending"?"idle":I);return}let L=pd(E.nodes.length,k);if(!_x({lastSavedNodeCount:u.current,nextNodeCount:E.nodes.length,cause:L})){c.current&&(clearTimeout(c.current),c.current=null),l(!1),n(I=>I==="pending"?"idle":I);return}n(I=>I==="saving"||I==="conflict"?I:"pending"),c.current&&clearTimeout(c.current);let M={nodes:E.nodes,edges:E.edges},N=L;c.current=setTimeout(()=>{c.current=null,x(M,N)},nz)},_=ie.subscribe(()=>{v("autosave")});return()=>{_(),c.current&&(clearTimeout(c.current),c.current=null)}},[x,a]),(0,Je.useEffect)(()=>{if(!a)return;let v=()=>{if(!y.current||!i.current)return;let k=rs(),T=pd(k.nodes.length,"flush"),E=pp({lastSavedNodeCount:u.current,nextNodes:k.nodes,nextEdges:k.edges,cause:T,lastSavedSignature:d.current,nextSignature:An(k.nodes,k.edges)});!E.persist||!E.snapshot||x(E.snapshot,T)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),h()}},[x,a]);let m=(0,Je.useCallback)(async()=>{c.current&&(clearTimeout(c.current),c.current=null);let v=rs();await x(v,pd(v.nodes.length,"autosave"))},[x]),b=(0,Je.useCallback)(()=>{if(c.current&&(clearTimeout(c.current),c.current=null),!i.current)return;let _=rs(),k="flush",T=pp({lastSavedNodeCount:u.current,nextNodes:_.nodes,nextEdges:_.edges,cause:k,lastSavedSignature:d.current,nextSignature:An(_.nodes,_.edges)});!T.persist||!T.snapshot||x(T.snapshot,k,!0)},[x]),S=(0,Je.useCallback)(async()=>{let v=rs();await x(v,pd(v.nodes.length,"autosave"))},[x]),C=(0,Je.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await wd(v.id);if(!_.ok||!_.body.workspace){n("error");return}let k=_.body.workspace;s.current=k.version,d.current=An(k.nodes,k.edges),u.current=k.nodes.length,ie.getState().hydrateGraph(k.nodes,k.edges),l(!1),n("idle"),w.current?.(k)},[]);return(0,Je.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!y.current||typeof document<"u"&&document.visibilityState==="hidden")return;let T=i.current;if(!(!T||g.current)){v=!0;try{let E=await ck(T.id);if(!E.ok||typeof E.body.version!="number"||E.body.version<=s.current)return;let F=rs();if(An(F.nodes,F.edges)!==d.current){s.current=E.body.version,n("conflict");return}await C()}catch{}finally{v=!1}}},k=setInterval(()=>{_()},lz);return()=>clearInterval(k)},[a,C]),{status:o,isDirty:r,saveNow:m,flushPendingSave:b,resolveConflict:S,reloadFromServer:C}}var aa=R(X(),1),iz=({locale:e,workspaceId:t})=>{let a=se(),o=(0,ls.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=eI({workspaceId:t,beforeReset:()=>{o.current()}});(0,ls.useEffect)(()=>{WL(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=(0,ls.useCallback)(f=>{r(c=>c.phase==="ready"?{phase:"ready",workspace:f}:c)},[r]),d=tI(i,{onSaved:s,enabled:n.phase==="ready"});o.current=d.flushPendingSave;let u=Jk(i?i.id:null,{onBeforeStart:d.saveNow});return n.phase==="loading"?(0,aa.jsx)("div",{className:"wf-canvas-root",children:(0,aa.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,aa.jsx)("div",{className:"wf-canvas-root",children:(0,aa.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,aa.jsx)("span",{children:n.message}),(0,aa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,aa.jsxs)("div",{className:"wf-canvas-root",children:[d.status==="conflict"?(0,aa.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,aa.jsx)("span",{children:a("app.conflictBanner")}),(0,aa.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{d.resolveConflict()},children:a("app.conflictOverwrite")}),(0,aa.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{d.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,aa.jsx)("main",{className:"wf-canvas-main",children:(0,aa.jsx)($k,{catalog:l,onExecuteNodeIds:f=>{u.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{u.startExecution({mode:"full"})},onPauseExecution:()=>{u.pause()},onResumeExecution:()=>{u.resume()},onCancelExecution:()=>{u.cancel()},onResetExecution:u.reset})})]})},Qx=iz;var aI=`/* this gets exported as style.css and can be used for the default theming */
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
`;var oI=`/**
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

`;var nI=`/**
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
  background: var(--dsw-alias-warning, var(--wb-warning, #d97706));
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
}

.wf-media-offline__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, var(--wb-node-text));
}

.wf-media-offline__hint {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--wb-node-text-muted));
}

.wf-media-offline__relink {
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l1, var(--wb-border));
  background: var(--dsw-alias-bg-elevated, var(--wb-surface));
  color: var(--dsw-alias-label-primary, var(--wb-node-text));
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




`;var rI=`/**
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
`;var fz=[{id:"omnimux-workflow-xyflow-base",css:aI},{id:"omnimux-workflow-theme",css:oI},{id:"omnimux-workflow-components",css:nI},{id:"omnimux-workflow-table-node",css:rI}];function lI(){for(let{id:e,css:t}of fz){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Jx=R(X(),1),Sd=new WeakMap;function pz(e,t){if(!e||Sd.has(e))return;lI();let a=(0,iI.createRoot)(e);Sd.set(e,{root:a,lastProps:t}),a.render((0,Jx.jsx)(Qx,{...t}))}function mz(e,t){let a=Sd.get(e);a&&(a.lastProps=t,a.root.render((0,Jx.jsx)(Qx,{...t})))}function gz(e){let t=Sd.get(e);t&&(t.root.unmount(),Sd.delete(e))}return g5(hz);})();
