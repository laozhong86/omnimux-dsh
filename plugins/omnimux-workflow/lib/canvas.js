var __omnimuxWorkflowCanvas=(()=>{var TI=Object.create;var Ou=Object.defineProperty;var AI=Object.getOwnPropertyDescriptor;var NI=Object.getOwnPropertyNames;var DI=Object.getPrototypeOf,RI=Object.prototype.hasOwnProperty;var Zt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},zI=(e,t)=>{for(var a in t)Ou(e,a,{get:t[a],enumerable:!0})},lx=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of NI(t))!RI.call(e,n)&&n!==a&&Ou(e,n,{get:()=>t[n],enumerable:!(o=AI(t,n))||o.enumerable});return e};var B=(e,t,a)=>(a=e!=null?TI(DI(e)):{},lx(t||!e||!e.__esModule?Ou(a,"default",{value:e,enumerable:!0}):a,e)),OI=e=>lx(Ou({},"__esModule",{value:!0}),e);var hx=Zt(Ke=>{"use strict";function Vf(e,t){var a=e.length;e.push(t);e:for(;0<a;){var o=a-1>>>1,n=e[o];if(0<Bu(n,t))e[o]=t,e[a]=n,a=o;else break e}}function lo(e){return e.length===0?null:e[0]}function Hu(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var o=0,n=e.length,r=n>>>1;o<r;){var l=2*(o+1)-1,i=e[l],s=l+1,u=e[s];if(0>Bu(i,a))s<n&&0>Bu(u,i)?(e[o]=u,e[s]=a,o=s):(e[o]=i,e[l]=a,o=l);else if(s<n&&0>Bu(u,a))e[o]=u,e[s]=a,o=s;else break e}}return t}function Bu(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}Ke.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(ix=performance,Ke.unstable_now=function(){return ix.now()}):(Uf=Date,sx=Uf.now(),Ke.unstable_now=function(){return Uf.now()-sx});var ix,Uf,sx,ko=[],rn=[],BI=1,La=null,zt=3,Gf=!1,Li=!1,_i=!1,Xf=!1,cx=typeof setTimeout=="function"?setTimeout:null,fx=typeof clearTimeout=="function"?clearTimeout:null,ux=typeof setImmediate<"u"?setImmediate:null;function Pu(e){for(var t=lo(rn);t!==null;){if(t.callback===null)Hu(rn);else if(t.startTime<=e)Hu(rn),t.sortIndex=t.expirationTime,Vf(ko,t);else break;t=lo(rn)}}function Yf(e){if(_i=!1,Pu(e),!Li)if(lo(ko)!==null)Li=!0,Jr||(Jr=!0,$r());else{var t=lo(rn);t!==null&&Zf(Yf,t.startTime-e)}}var Jr=!1,Ii=-1,px=5,mx=-1;function gx(){return Xf?!0:!(Ke.unstable_now()-mx<px)}function Ff(){if(Xf=!1,Jr){var e=Ke.unstable_now();mx=e;var t=!0;try{e:{Li=!1,_i&&(_i=!1,fx(Ii),Ii=-1),Gf=!0;var a=zt;try{t:{for(Pu(e),La=lo(ko);La!==null&&!(La.expirationTime>e&&gx());){var o=La.callback;if(typeof o=="function"){La.callback=null,zt=La.priorityLevel;var n=o(La.expirationTime<=e);if(e=Ke.unstable_now(),typeof n=="function"){La.callback=n,Pu(e),t=!0;break t}La===lo(ko)&&Hu(ko),Pu(e)}else Hu(ko);La=lo(ko)}if(La!==null)t=!0;else{var r=lo(rn);r!==null&&Zf(Yf,r.startTime-e),t=!1}}break e}finally{La=null,zt=a,Gf=!1}t=void 0}}finally{t?$r():Jr=!1}}}var $r;typeof ux=="function"?$r=function(){ux(Ff)}:typeof MessageChannel<"u"?(qf=new MessageChannel,dx=qf.port2,qf.port1.onmessage=Ff,$r=function(){dx.postMessage(null)}):$r=function(){cx(Ff,0)};var qf,dx;function Zf(e,t){Ii=cx(function(){e(Ke.unstable_now())},t)}Ke.unstable_IdlePriority=5;Ke.unstable_ImmediatePriority=1;Ke.unstable_LowPriority=4;Ke.unstable_NormalPriority=3;Ke.unstable_Profiling=null;Ke.unstable_UserBlockingPriority=2;Ke.unstable_cancelCallback=function(e){e.callback=null};Ke.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):px=0<e?Math.floor(1e3/e):5};Ke.unstable_getCurrentPriorityLevel=function(){return zt};Ke.unstable_next=function(e){switch(zt){case 1:case 2:case 3:var t=3;break;default:t=zt}var a=zt;zt=t;try{return e()}finally{zt=a}};Ke.unstable_requestPaint=function(){Xf=!0};Ke.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=zt;zt=e;try{return t()}finally{zt=a}};Ke.unstable_scheduleCallback=function(e,t,a){var o=Ke.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?o+a:o):a=o,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:BI++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>o?(e.sortIndex=a,Vf(rn,e),lo(ko)===null&&e===lo(rn)&&(_i?(fx(Ii),Ii=-1):_i=!0,Zf(Yf,a-o))):(e.sortIndex=n,Vf(ko,e),Li||Gf||(Li=!0,Jr||(Jr=!0,$r()))),e};Ke.unstable_shouldYield=gx;Ke.unstable_wrapCallback=function(e){var t=zt;return function(){var a=zt;zt=t;try{return e.apply(this,arguments)}finally{zt=a}}}});var bx=Zt((Q8,xx)=>{"use strict";xx.exports=hx()});var Ex=Zt(me=>{"use strict";var Kf=Symbol.for("react.transitional.element"),PI=Symbol.for("react.portal"),HI=Symbol.for("react.fragment"),UI=Symbol.for("react.strict_mode"),FI=Symbol.for("react.profiler"),qI=Symbol.for("react.consumer"),VI=Symbol.for("react.context"),GI=Symbol.for("react.forward_ref"),XI=Symbol.for("react.suspense"),YI=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),ZI=Symbol.for("react.activity"),yx=Symbol.iterator;function WI(e){return e===null||typeof e!="object"?null:(e=yx&&e[yx]||e["@@iterator"],typeof e=="function"?e:null)}var Lx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_x=Object.assign,Ix={};function tl(e,t,a){this.props=e,this.context=t,this.refs=Ix,this.updater=a||Lx}tl.prototype.isReactComponent={};tl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kx(){}kx.prototype=tl.prototype;function Qf(e,t,a){this.props=e,this.context=t,this.refs=Ix,this.updater=a||Lx}var $f=Qf.prototype=new kx;$f.constructor=Qf;_x($f,tl.prototype);$f.isPureReactComponent=!0;var wx=Array.isArray;function jf(){}var Ve={H:null,A:null,T:null,S:null},Mx=Object.prototype.hasOwnProperty;function Jf(e,t,a){var o=a.ref;return{$$typeof:Kf,type:e,key:t,ref:o!==void 0?o:null,props:a}}function jI(e,t){return Jf(e.type,t,e.props)}function ep(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kf}function KI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var vx=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?KI(""+e.key):t.toString(36)}function QI(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(jf,jf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function el(e,t,a,o,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Kf:case PI:l=!0;break;case Sx:return l=e._init,el(l(e._payload),t,a,o,n)}}if(l)return n=n(e),l=o===""?"."+Wf(e,0):o,wx(n)?(a="",l!=null&&(a=l.replace(vx,"$&/")+"/"),el(n,t,a,"",function(u){return u})):n!=null&&(ep(n)&&(n=jI(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(vx,"$&/")+"/")+l)),t.push(n)),1;l=0;var i=o===""?".":o+":";if(wx(e))for(var s=0;s<e.length;s++)o=e[s],r=i+Wf(o,s),l+=el(o,t,a,r,n);else if(s=WI(e),typeof s=="function")for(e=s.call(e),s=0;!(o=e.next()).done;)o=o.value,r=i+Wf(o,s++),l+=el(o,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return el(QI(e),t,a,o,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function Uu(e,t,a){if(e==null)return e;var o=[],n=0;return el(e,o,"","",function(r){return t.call(a,r,n++)}),o}function $I(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Cx=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},JI={map:Uu,forEach:function(e,t,a){Uu(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Uu(e,function(){t++}),t},toArray:function(e){return Uu(e,function(t){return t})||[]},only:function(e){if(!ep(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Activity=ZI;me.Children=JI;me.Component=tl;me.Fragment=HI;me.Profiler=FI;me.PureComponent=Qf;me.StrictMode=UI;me.Suspense=XI;me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;me.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ve.H.useMemoCache(e)}};me.cache=function(e){return function(){return e.apply(null,arguments)}};me.cacheSignal=function(){return null};me.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var o=_x({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!Mx.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(o[r]=t[r]);var r=arguments.length-2;if(r===1)o.children=a;else if(1<r){for(var l=Array(r),i=0;i<r;i++)l[i]=arguments[i+2];o.children=l}return Jf(e.type,n,o)};me.createContext=function(e){return e={$$typeof:VI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:qI,_context:e},e};me.createElement=function(e,t,a){var o,n={},r=null;if(t!=null)for(o in t.key!==void 0&&(r=""+t.key),t)Mx.call(t,o)&&o!=="key"&&o!=="__self"&&o!=="__source"&&(n[o]=t[o]);var l=arguments.length-2;if(l===1)n.children=a;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)n[o]===void 0&&(n[o]=l[o]);return Jf(e,r,n)};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:GI,render:e}};me.isValidElement=ep;me.lazy=function(e){return{$$typeof:Sx,_payload:{_status:-1,_result:e},_init:$I}};me.memo=function(e,t){return{$$typeof:YI,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Ve.T,a={};Ve.T=a;try{var o=e(),n=Ve.S;n!==null&&n(a,o),typeof o=="object"&&o!==null&&typeof o.then=="function"&&o.then(jf,Cx)}catch(r){Cx(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),Ve.T=t}};me.unstable_useCacheRefresh=function(){return Ve.H.useCacheRefresh()};me.use=function(e){return Ve.H.use(e)};me.useActionState=function(e,t,a){return Ve.H.useActionState(e,t,a)};me.useCallback=function(e,t){return Ve.H.useCallback(e,t)};me.useContext=function(e){return Ve.H.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e,t){return Ve.H.useDeferredValue(e,t)};me.useEffect=function(e,t){return Ve.H.useEffect(e,t)};me.useEffectEvent=function(e){return Ve.H.useEffectEvent(e)};me.useId=function(){return Ve.H.useId()};me.useImperativeHandle=function(e,t,a){return Ve.H.useImperativeHandle(e,t,a)};me.useInsertionEffect=function(e,t){return Ve.H.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Ve.H.useLayoutEffect(e,t)};me.useMemo=function(e,t){return Ve.H.useMemo(e,t)};me.useOptimistic=function(e,t){return Ve.H.useOptimistic(e,t)};me.useReducer=function(e,t,a){return Ve.H.useReducer(e,t,a)};me.useRef=function(e){return Ve.H.useRef(e)};me.useState=function(e){return Ve.H.useState(e)};me.useSyncExternalStore=function(e,t,a){return Ve.H.useSyncExternalStore(e,t,a)};me.useTransition=function(){return Ve.H.useTransition()};me.version="19.2.8"});var oe=Zt((J8,Tx)=>{"use strict";Tx.exports=Ex()});var Nx=Zt(Ut=>{"use strict";var ek=oe();function Ax(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ln(){}var Ht={d:{f:ln,r:function(){throw Error(Ax(522))},D:ln,C:ln,L:ln,m:ln,X:ln,S:ln,M:ln},p:0,findDOMNode:null},tk=Symbol.for("react.portal");function ak(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tk,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}var ki=ek.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Fu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ht;Ut.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ax(299));return ak(e,t,null,a)};Ut.flushSync=function(e){var t=ki.T,a=Ht.p;try{if(ki.T=null,Ht.p=2,e)return e()}finally{ki.T=t,Ht.p=a,Ht.d.f()}};Ut.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ht.d.C(e,t))};Ut.prefetchDNS=function(e){typeof e=="string"&&Ht.d.D(e)};Ut.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,o=Fu(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Ht.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:n,fetchPriority:r}):a==="script"&&Ht.d.X(e,{crossOrigin:o,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ut.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Fu(t.as,t.crossOrigin);Ht.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ht.d.M(e)};Ut.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,o=Fu(a,t.crossOrigin);Ht.d.L(e,a,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ut.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Fu(t.as,t.crossOrigin);Ht.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ht.d.m(e)};Ut.requestFormReset=function(e){Ht.d.r(e)};Ut.unstable_batchedUpdates=function(e,t){return e(t)};Ut.useFormState=function(e,t,a){return ki.H.useFormState(e,t,a)};Ut.useFormStatus=function(){return ki.H.useHostTransitionStatus()};Ut.version="19.2.8"});var sn=Zt((tD,Rx)=>{"use strict";function Dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dx)}catch(e){console.error(e)}}Dx(),Rx.exports=Nx()});var Y1=Zt(fc=>{"use strict";var pt=bx(),lb=oe(),ok=sn();function V(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ib(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ps(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function sb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ub(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zx(e){if(ps(e)!==e)throw Error(V(188))}function nk(e){var t=e.alternate;if(!t){if(t=ps(e),t===null)throw Error(V(188));return t!==e?null:e}for(var a=e,o=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(o=n.return,o!==null){a=o;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return zx(n),e;if(r===o)return zx(n),t;r=r.sibling}throw Error(V(188))}if(a.return!==o.return)a=n,o=r;else{for(var l=!1,i=n.child;i;){if(i===a){l=!0,a=n,o=r;break}if(i===o){l=!0,o=n,a=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===a){l=!0,a=r,o=n;break}if(i===o){l=!0,o=r,a=n;break}i=i.sibling}if(!l)throw Error(V(189))}}if(a.alternate!==o)throw Error(V(190))}if(a.tag!==3)throw Error(V(188));return a.stateNode.current===a?e:t}function db(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=db(e),t!==null)return t;e=e.sibling}return null}var Ye=Object.assign,rk=Symbol.for("react.element"),qu=Symbol.for("react.transitional.element"),zi=Symbol.for("react.portal"),il=Symbol.for("react.fragment"),cb=Symbol.for("react.strict_mode"),Rp=Symbol.for("react.profiler"),fb=Symbol.for("react.consumer"),zo=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Op=Symbol.for("react.suspense_list"),Tm=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Bp=Symbol.for("react.activity"),lk=Symbol.for("react.memo_cache_sentinel"),Ox=Symbol.iterator;function Mi(e){return e===null||typeof e!="object"?null:(e=Ox&&e[Ox]||e["@@iterator"],typeof e=="function"?e:null)}var ik=Symbol.for("react.client.reference");function Pp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ik?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case il:return"Fragment";case Rp:return"Profiler";case cb:return"StrictMode";case zp:return"Suspense";case Op:return"SuspenseList";case Bp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zi:return"Portal";case zo:return e.displayName||"Context";case fb:return(e._context.displayName||"Context")+".Consumer";case Em:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tm:return t=e.displayName||null,t!==null?t:Pp(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Pp(e(t))}catch{}}return null}var Oi=Array.isArray,le=lb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Me=ok.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ur={pending:!1,data:null,method:null,action:null},Hp=[],sl=-1;function fo(e){return{current:e}}function yt(e){0>sl||(e.current=Hp[sl],Hp[sl]=null,sl--)}function Fe(e,t){sl++,Hp[sl]=e.current,e.current=t}var co=fo(null),Ji=fo(null),wn=fo(null),vd=fo(null);function Cd(e,t){switch(Fe(wn,t),Fe(Ji,e),Fe(co,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?V0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=V0(t),e=N1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(co),Fe(co,e)}function Il(){yt(co),yt(Ji),yt(wn)}function Up(e){e.memoizedState!==null&&Fe(vd,e);var t=co.current,a=N1(t,e.type);t!==a&&(Fe(Ji,e),Fe(co,a))}function Sd(e){Ji.current===e&&(yt(co),yt(Ji)),vd.current===e&&(yt(vd),ds._currentValue=ur)}var tp,Bx;function rr(e){if(tp===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);tp=t&&t[1]||"",Bx=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tp+e+Bx}var ap=!1;function op(e,t){if(!e||ap)return"";ap=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var d=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){d=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){d=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],i=r[1];if(l&&i){var s=l.split(`
`),u=i.split(`
`);for(n=o=0;o<s.length&&!s[o].includes("DetermineComponentFrameRoot");)o++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(o===s.length||n===u.length)for(o=s.length-1,n=u.length-1;1<=o&&0<=n&&s[o]!==u[n];)n--;for(;1<=o&&0<=n;o--,n--)if(s[o]!==u[n]){if(o!==1||n!==1)do if(o--,n--,0>n||s[o]!==u[n]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=n);break}}}finally{ap=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rr(a):""}function sk(e,t){switch(e.tag){case 26:case 27:case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return e.child!==t&&t!==null?rr("Suspense Fallback"):rr("Suspense");case 19:return rr("SuspenseList");case 0:case 15:return op(e.type,!1);case 11:return op(e.type.render,!1);case 1:return op(e.type,!0);case 31:return rr("Activity");default:return""}}function Px(e){try{var t="",a=null;do t+=sk(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fp=Object.prototype.hasOwnProperty,Am=pt.unstable_scheduleCallback,np=pt.unstable_cancelCallback,uk=pt.unstable_shouldYield,dk=pt.unstable_requestPaint,da=pt.unstable_now,ck=pt.unstable_getCurrentPriorityLevel,pb=pt.unstable_ImmediatePriority,mb=pt.unstable_UserBlockingPriority,Ld=pt.unstable_NormalPriority,fk=pt.unstable_LowPriority,gb=pt.unstable_IdlePriority,pk=pt.log,mk=pt.unstable_setDisableYieldValue,ms=null,ca=null;function gn(e){if(typeof pk=="function"&&mk(e),ca&&typeof ca.setStrictMode=="function")try{ca.setStrictMode(ms,e)}catch{}}var fa=Math.clz32?Math.clz32:xk,gk=Math.log,hk=Math.LN2;function xk(e){return e>>>=0,e===0?32:31-(gk(e)/hk|0)|0}var Vu=256,Gu=262144,Xu=4194304;function lr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kd(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var n=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=o&134217727;return i!==0?(o=i&~r,o!==0?n=lr(o):(l&=i,l!==0?n=lr(l):a||(a=i&~e,a!==0&&(n=lr(a))))):(i=o&~r,i!==0?n=lr(i):l!==0?n=lr(l):a||(a=o&~e,a!==0&&(n=lr(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function gs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bk(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hb(){var e=Xu;return Xu<<=1,(Xu&62914560)===0&&(Xu=4194304),e}function rp(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function hs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yk(e,t,a,o,n,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(a=l&~a;0<a;){var c=31-fa(a),f=1<<c;i[c]=0,s[c]=-1;var d=u[c];if(d!==null)for(u[c]=null,c=0;c<d.length;c++){var p=d[c];p!==null&&(p.lane&=-536870913)}a&=~f}o!==0&&xb(e,o,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function xb(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-fa(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function bb(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-fa(a),n=1<<o;n&t|e[o]&t&&(e[o]|=t),a&=~n}}function yb(e,t){var a=t&-t;return a=(a&42)!==0?1:Nm(a),(a&(e.suspendedLanes|t))!==0?0:a}function Nm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wb(){var e=Me.p;return e!==0?e:(e=window.event,e===void 0?32:V1(e.type))}function Hx(e,t){var a=Me.p;try{return Me.p=e,t()}finally{Me.p=a}}var Dn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Dn,Jt="__reactProps$"+Dn,Bl="__reactContainer$"+Dn,qp="__reactEvents$"+Dn,wk="__reactListeners$"+Dn,vk="__reactHandles$"+Dn,Ux="__reactResources$"+Dn,xs="__reactMarker$"+Dn;function Rm(e){delete e[kt],delete e[Jt],delete e[qp],delete e[wk],delete e[vk]}function ul(e){var t=e[kt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Bl]||a[kt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=W0(e);e!==null;){if(a=e[kt])return a;e=W0(e)}return t}e=a,a=e.parentNode}return null}function Pl(e){if(e=e[kt]||e[Bl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(V(33))}function yl(e){var t=e[Ux];return t||(t=e[Ux]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[xs]=!0}var vb=new Set,Cb={};function yr(e,t){kl(e,t),kl(e+"Capture",t)}function kl(e,t){for(Cb[e]=t,e=0;e<t.length;e++)vb.add(t[e])}var Ck=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fx={},qx={};function Sk(e){return Fp.call(qx,e)?!0:Fp.call(Fx,e)?!1:Ck.test(e)?qx[e]=!0:(Fx[e]=!0,!1)}function ld(e,t,a){if(Sk(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yu(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Mo(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ia(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lk(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vp(e){if(!e._valueTracker){var t=Sb(e)?"checked":"value";e._valueTracker=Lk(e,t,""+e[t])}}function Lb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Sb(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function _d(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _k=/[\n"\\]/g;function Ea(e){return e.replace(_k,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gp(e,t,a,o,n,r,l,i){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ia(t)):e.value!==""+Ia(t)&&(e.value=""+Ia(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Xp(e,l,Ia(t)):a!=null?Xp(e,l,Ia(a)):o!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Ia(i):e.removeAttribute("name")}function _b(e,t,a,o,n,r,l,i){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Vp(e);return}a=a!=null?""+Ia(a):"",t=t!=null?""+Ia(t):a,i||t===e.value||(e.value=t),e.defaultValue=t}o=o??n,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=i?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Vp(e)}function Xp(e,t,a){t==="number"&&_d(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wl(e,t,a,o){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ia(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,o&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ib(e,t,a){if(t!=null&&(t=""+Ia(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ia(a):""}function kb(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(V(92));if(Oi(o)){if(1<o.length)throw Error(V(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ia(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Vp(e)}function Ml(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ik=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vx(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||Ik.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Mb(e,t,a){if(t!=null&&typeof t!="object")throw Error(V(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var n in t)o=t[n],t.hasOwnProperty(n)&&a[n]!==o&&Vx(e,n,o)}else for(var r in t)t.hasOwnProperty(r)&&Vx(e,r,t[r])}function zm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kk=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mk=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function id(e){return Mk.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Oo(){}var Yp=null;function Om(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,vl=null;function Gx(e){var t=Pl(e);if(t&&(e=t.stateNode)){var a=e[Jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gp(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ea(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var n=o[Jt]||null;if(!n)throw Error(V(90));Gp(o,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&Lb(o)}break e;case"textarea":Ib(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&wl(e,!!a.multiple,t,!1)}}}var lp=!1;function Eb(e,t,a){if(lp)return e(t,a);lp=!0;try{var o=e(t);return o}finally{if(lp=!1,(dl!==null||vl!==null)&&(sc(),dl&&(t=dl,e=vl,vl=dl=null,Gx(t),e)))for(t=0;t<e.length;t++)Gx(e[t])}}function es(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Jt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(V(231,t,typeof a));return a}var Fo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zp=!1;if(Fo)try{al={},Object.defineProperty(al,"passive",{get:function(){Zp=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{Zp=!1}var al,hn=null,Bm=null,sd=null;function Tb(){if(sd)return sd;var e,t=Bm,a=t.length,o,n="value"in hn?hn.value:hn.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var l=a-e;for(o=1;o<=l&&t[a-o]===n[r-o];o++);return sd=n.slice(e,1<o?1-o:void 0)}function ud(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zu(){return!0}function Xx(){return!1}function ea(e){function t(a,o,n,r,l){this._reactName=a,this._targetInst=n,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zu:Xx,this.isPropagationStopped=Xx,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=ea(wr),bs=Ye({},wr,{view:0,detail:0}),Ek=ea(bs),ip,sp,Ei,$d=Ye({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(ip=e.screenX-Ei.screenX,sp=e.screenY-Ei.screenY):sp=ip=0,Ei=e),ip)},movementY:function(e){return"movementY"in e?e.movementY:sp}}),Yx=ea($d),Tk=Ye({},$d,{dataTransfer:0}),Ak=ea(Tk),Nk=Ye({},bs,{relatedTarget:0}),up=ea(Nk),Dk=Ye({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rk=ea(Dk),zk=Ye({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ok=ea(zk),Bk=Ye({},wr,{data:0}),Zx=ea(Bk),Pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uk[e])?!!t[e]:!1}function Pm(){return Fk}var qk=Ye({},bs,{key:function(e){if(e.key){var t=Pk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ud(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pm,charCode:function(e){return e.type==="keypress"?ud(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ud(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vk=ea(qk),Gk=Ye({},$d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wx=ea(Gk),Xk=Ye({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pm}),Yk=ea(Xk),Zk=Ye({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wk=ea(Zk),jk=Ye({},$d,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kk=ea(jk),Qk=Ye({},wr,{newState:0,oldState:0}),$k=ea(Qk),Jk=[9,13,27,32],Hm=Fo&&"CompositionEvent"in window,Ui=null;Fo&&"documentMode"in document&&(Ui=document.documentMode);var e5=Fo&&"TextEvent"in window&&!Ui,Ab=Fo&&(!Hm||Ui&&8<Ui&&11>=Ui),jx=" ",Kx=!1;function Nb(e,t){switch(e){case"keyup":return Jk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Db(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function t5(e,t){switch(e){case"compositionend":return Db(t);case"keypress":return t.which!==32?null:(Kx=!0,jx);case"textInput":return e=t.data,e===jx&&Kx?null:e;default:return null}}function a5(e,t){if(cl)return e==="compositionend"||!Hm&&Nb(e,t)?(e=Tb(),sd=Bm=hn=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ab&&t.locale!=="ko"?null:t.data;default:return null}}var o5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o5[e.type]:t==="textarea"}function Rb(e,t,a,o){dl?vl?vl.push(o):vl=[o]:dl=o,t=Vd(t,"onChange"),0<t.length&&(a=new Qd("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Fi=null,ts=null;function n5(e){E1(e,0)}function Jd(e){var t=Bi(e);if(Lb(t))return e}function $x(e,t){if(e==="change")return t}var zb=!1;Fo&&(Fo?(ju="oninput"in document,ju||(dp=document.createElement("div"),dp.setAttribute("oninput","return;"),ju=typeof dp.oninput=="function"),Wu=ju):Wu=!1,zb=Wu&&(!document.documentMode||9<document.documentMode));var Wu,ju,dp;function Jx(){Fi&&(Fi.detachEvent("onpropertychange",Ob),ts=Fi=null)}function Ob(e){if(e.propertyName==="value"&&Jd(ts)){var t=[];Rb(t,ts,e,Om(e)),Eb(n5,t)}}function r5(e,t,a){e==="focusin"?(Jx(),Fi=t,ts=a,Fi.attachEvent("onpropertychange",Ob)):e==="focusout"&&Jx()}function l5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jd(ts)}function i5(e,t){if(e==="click")return Jd(t)}function s5(e,t){if(e==="input"||e==="change")return Jd(t)}function u5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ma=typeof Object.is=="function"?Object.is:u5;function as(e,t){if(ma(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var n=a[o];if(!Fp.call(t,n)||!ma(e[n],t[n]))return!1}return!0}function e0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function t0(e,t){var a=e0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=e0(a)}}function Bb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pb(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_d(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_d(e.document)}return t}function Um(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var d5=Fo&&"documentMode"in document&&11>=document.documentMode,fl=null,Wp=null,qi=null,jp=!1;function a0(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jp||fl==null||fl!==_d(o)||(o=fl,"selectionStart"in o&&Um(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qi&&as(qi,o)||(qi=o,o=Vd(Wp,"onSelect"),0<o.length&&(t=new Qd("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=fl)))}function nr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},cp={},Hb={};Fo&&(Hb=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function vr(e){if(cp[e])return cp[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Hb)return cp[e]=t[a];return e}var Ub=vr("animationend"),Fb=vr("animationiteration"),qb=vr("animationstart"),c5=vr("transitionrun"),f5=vr("transitionstart"),p5=vr("transitioncancel"),Vb=vr("transitionend"),Gb=new Map,Kp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kp.push("scrollEnd");function Ya(e,t){Gb.set(e,t),yr(t,[e])}var Id=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_a=[],ml=0,Fm=0;function ec(){for(var e=ml,t=Fm=ml=0;t<e;){var a=_a[t];_a[t++]=null;var o=_a[t];_a[t++]=null;var n=_a[t];_a[t++]=null;var r=_a[t];if(_a[t++]=null,o!==null&&n!==null){var l=o.pending;l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n}r!==0&&Xb(a,n,r)}}function tc(e,t,a,o){_a[ml++]=e,_a[ml++]=t,_a[ml++]=a,_a[ml++]=o,Fm|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qm(e,t,a,o){return tc(e,t,a,o),kd(e)}function Cr(e,t){return tc(e,null,null,t),kd(e)}function Xb(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,o=r.alternate,o!==null&&(o.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-fa(a),e=r.hiddenUpdates,o=e[n],o===null?e[n]=[t]:o.push(t),t.lane=a|536870912),r):null}function kd(e){if(50<Qi)throw Qi=0,xm=null,Error(V(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function m5(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sa(e,t,a,o){return new m5(e,t,a,o)}function Vm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Po(e,t){var a=e.alternate;return a===null?(a=sa(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yb(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function dd(e,t,a,o,n,r){var l=0;if(o=e,typeof e=="function")Vm(e)&&(l=1);else if(typeof e=="string")l=xM(e,a,co.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Bp:return e=sa(31,a,t,n),e.elementType=Bp,e.lanes=r,e;case il:return dr(a.children,n,r,t);case cb:l=8,n|=24;break;case Rp:return e=sa(12,a,t,n|2),e.elementType=Rp,e.lanes=r,e;case zp:return e=sa(13,a,t,n),e.elementType=zp,e.lanes=r,e;case Op:return e=sa(19,a,t,n),e.elementType=Op,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zo:l=10;break e;case fb:l=9;break e;case Em:l=11;break e;case Tm:l=14;break e;case un:l=16,o=null;break e}l=29,a=Error(V(130,e===null?"null":typeof e,"")),o=null}return t=sa(l,a,t,n),t.elementType=e,t.type=o,t.lanes=r,t}function dr(e,t,a,o){return e=sa(7,e,o,t),e.lanes=a,e}function fp(e,t,a){return e=sa(6,e,null,t),e.lanes=a,e}function Zb(e){var t=sa(18,null,null,0);return t.stateNode=e,t}function pp(e,t,a){return t=sa(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var o0=new WeakMap;function Ta(e,t){if(typeof e=="object"&&e!==null){var a=o0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Px(t)},o0.set(e,t),t)}return{value:e,source:t,stack:Px(t)}}var hl=[],xl=0,Md=null,os=0,ka=[],Ma=0,En=null,io=1,so="";function Do(e,t){hl[xl++]=os,hl[xl++]=Md,Md=e,os=t}function Wb(e,t,a){ka[Ma++]=io,ka[Ma++]=so,ka[Ma++]=En,En=e;var o=io;e=so;var n=32-fa(o)-1;o&=~(1<<n),a+=1;var r=32-fa(t)+n;if(30<r){var l=n-n%5;r=(o&(1<<l)-1).toString(32),o>>=l,n-=l,io=1<<32-fa(t)+n|a<<n|o,so=r+e}else io=1<<r|a<<n|o,so=e}function Gm(e){e.return!==null&&(Do(e,1),Wb(e,1,0))}function Xm(e){for(;e===Md;)Md=hl[--xl],hl[xl]=null,os=hl[--xl],hl[xl]=null;for(;e===En;)En=ka[--Ma],ka[Ma]=null,so=ka[--Ma],ka[Ma]=null,io=ka[--Ma],ka[Ma]=null}function jb(e,t){ka[Ma++]=io,ka[Ma++]=so,ka[Ma++]=En,io=t.id,so=t.overflow,En=e}var Mt=null,Xe=null,Le=!1,vn=null,Aa=!1,Qp=Error(V(519));function Tn(e){var t=Error(V(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ns(Ta(t,e)),Qp}function n0(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[kt]=e,t[Jt]=o,a){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(a=0;a<ss.length;a++)we(ss[a],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),_b(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),kb(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||A1(t.textContent,a)?(o.popover!=null&&(we("beforetoggle",t),we("toggle",t)),o.onScroll!=null&&we("scroll",t),o.onScrollEnd!=null&&we("scrollend",t),o.onClick!=null&&(t.onclick=Oo),t=!0):t=!1,t||Tn(e,!0)}function r0(e){for(Mt=e.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:Aa=!1;return;case 27:case 3:Aa=!0;return;default:Mt=Mt.return}}function ol(e){if(e!==Mt)return!1;if(!Le)return r0(e),Le=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cm(e.type,e.memoizedProps)),a=!a),a&&Xe&&Tn(e),r0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Xe=Z0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));Xe=Z0(e)}else t===27?(t=Xe,Rn(e.type)?(e=Im,Im=null,Xe=e):Xe=t):Xe=Mt?Da(e.stateNode.nextSibling):null;return!0}function mr(){Xe=Mt=null,Le=!1}function mp(){var e=vn;return e!==null&&(Qt===null?Qt=e:Qt.push.apply(Qt,e),vn=null),e}function ns(e){vn===null?vn=[e]:vn.push(e)}var $p=fo(null),Sr=null,Bo=null;function cn(e,t,a){Fe($p,t._currentValue),t._currentValue=a}function Ho(e){e._currentValue=$p.current,yt($p)}function Jp(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function em(e,t,a,o){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var l=n.child;r=r.firstContext;e:for(;r!==null;){var i=r;r=n;for(var s=0;s<t.length;s++)if(i.context===t[s]){r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Jp(r.return,a,e),o||(l=null);break e}r=i.next}}else if(n.tag===18){if(l=n.return,l===null)throw Error(V(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Jp(l,a,e),l=null}else l=n.child;if(l!==null)l.return=n;else for(l=n;l!==null;){if(l===e){l=null;break}if(n=l.sibling,n!==null){n.return=l.return,l=n;break}l=l.return}n=l}}function Hl(e,t,a,o){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var l=n.alternate;if(l===null)throw Error(V(387));if(l=l.memoizedProps,l!==null){var i=n.type;ma(n.pendingProps.value,l.value)||(e!==null?e.push(i):e=[i])}}else if(n===vd.current){if(l=n.alternate,l===null)throw Error(V(387));l.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(ds):e=[ds])}n=n.return}e!==null&&em(t,e,a,o),t.flags|=262144}function Ed(e){for(e=e.firstContext;e!==null;){if(!ma(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){Sr=e,Bo=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return Kb(Sr,e)}function Ku(e,t){return Sr===null&&gr(e),Kb(e,t)}function Kb(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bo===null){if(e===null)throw Error(V(308));Bo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bo=Bo.next=t;return a}var g5=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},h5=pt.unstable_scheduleCallback,x5=pt.unstable_NormalPriority,ut={$$typeof:zo,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ym(){return{controller:new g5,data:new Map,refCount:0}}function ys(e){e.refCount--,e.refCount===0&&h5(x5,function(){e.controller.abort()})}var Vi=null,tm=0,El=0,Cl=null;function b5(e,t){if(Vi===null){var a=Vi=[];tm=0,El=xg(),Cl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return tm++,t.then(l0,l0),t}function l0(){if(--tm===0&&Vi!==null){Cl!==null&&(Cl.status="fulfilled");var e=Vi;Vi=null,El=0,Cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function y5(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(o.status="rejected",o.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),o}var i0=le.S;le.S=function(e,t){d1=da(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&b5(e,t),i0!==null&&i0(e,t)};var cr=fo(null);function Zm(){var e=cr.current;return e!==null?e:Pe.pooledCache}function cd(e,t){t===null?Fe(cr,cr.current):Fe(cr,t.pool)}function Qb(){var e=Zm();return e===null?null:{parent:ut._currentValue,pool:e}}var Ul=Error(V(460)),Wm=Error(V(474)),ac=Error(V(542)),Td={then:function(){}};function s0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $b(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Oo,Oo),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,d0(e),e;default:if(typeof t.status=="string")t.then(Oo,Oo);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(V(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=o}},function(o){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,d0(e),e}throw fr=t,Ul}}function ir(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,Ul):a}}var fr=null;function u0(){if(fr===null)throw Error(V(459));var e=fr;return fr=null,e}function d0(e){if(e===Ul||e===ac)throw Error(V(483))}var Sl=null,rs=0;function Qu(e){var t=rs;return rs+=1,Sl===null&&(Sl=[]),$b(Sl,e,t)}function Ti(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $u(e,t){throw t.$$typeof===rk?Error(V(525)):(e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jb(e){function t(h,x){if(e){var m=h.deletions;m===null?(h.deletions=[x],h.flags|=16):m.push(x)}}function a(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function o(h){for(var x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function n(h,x){return h=Po(h,x),h.index=0,h.sibling=null,h}function r(h,x,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<x?(h.flags|=67108866,x):m):(h.flags|=67108866,x)):(h.flags|=1048576,x)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function i(h,x,m,b){return x===null||x.tag!==6?(x=fp(m,h.mode,b),x.return=h,x):(x=n(x,m),x.return=h,x)}function s(h,x,m,b){var C=m.type;return C===il?c(h,x,m.props.children,b,m.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&ir(C)===x.type)?(x=n(x,m.props),Ti(x,m),x.return=h,x):(x=dd(m.type,m.key,m.props,null,h.mode,b),Ti(x,m),x.return=h,x)}function u(h,x,m,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==m.containerInfo||x.stateNode.implementation!==m.implementation?(x=pp(m,h.mode,b),x.return=h,x):(x=n(x,m.children||[]),x.return=h,x)}function c(h,x,m,b,C){return x===null||x.tag!==7?(x=dr(m,h.mode,b,C),x.return=h,x):(x=n(x,m),x.return=h,x)}function f(h,x,m){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=fp(""+x,h.mode,m),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qu:return m=dd(x.type,x.key,x.props,null,h.mode,m),Ti(m,x),m.return=h,m;case zi:return x=pp(x,h.mode,m),x.return=h,x;case un:return x=ir(x),f(h,x,m)}if(Oi(x)||Mi(x))return x=dr(x,h.mode,m,null),x.return=h,x;if(typeof x.then=="function")return f(h,Qu(x),m);if(x.$$typeof===zo)return f(h,Ku(h,x),m);$u(h,x)}return null}function d(h,x,m,b){var C=x!==null?x.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return C!==null?null:i(h,x,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qu:return m.key===C?s(h,x,m,b):null;case zi:return m.key===C?u(h,x,m,b):null;case un:return m=ir(m),d(h,x,m,b)}if(Oi(m)||Mi(m))return C!==null?null:c(h,x,m,b,null);if(typeof m.then=="function")return d(h,x,Qu(m),b);if(m.$$typeof===zo)return d(h,x,Ku(h,m),b);$u(h,m)}return null}function p(h,x,m,b,C){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return h=h.get(m)||null,i(x,h,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qu:return h=h.get(b.key===null?m:b.key)||null,s(x,h,b,C);case zi:return h=h.get(b.key===null?m:b.key)||null,u(x,h,b,C);case un:return b=ir(b),p(h,x,m,b,C)}if(Oi(b)||Mi(b))return h=h.get(m)||null,c(x,h,b,C,null);if(typeof b.then=="function")return p(h,x,m,Qu(b),C);if(b.$$typeof===zo)return p(h,x,m,Ku(x,b),C);$u(x,b)}return null}function g(h,x,m,b){for(var C=null,S=null,v=x,_=x=0,I=null;v!==null&&_<m.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var A=d(h,v,m[_],b);if(A===null){v===null&&(v=I);break}e&&v&&A.alternate===null&&t(h,v),x=r(A,x,_),S===null?C=A:S.sibling=A,S=A,v=I}if(_===m.length)return a(h,v),Le&&Do(h,_),C;if(v===null){for(;_<m.length;_++)v=f(h,m[_],b),v!==null&&(x=r(v,x,_),S===null?C=v:S.sibling=v,S=v);return Le&&Do(h,_),C}for(v=o(v);_<m.length;_++)I=p(v,h,_,m[_],b),I!==null&&(e&&I.alternate!==null&&v.delete(I.key===null?_:I.key),x=r(I,x,_),S===null?C=I:S.sibling=I,S=I);return e&&v.forEach(function(T){return t(h,T)}),Le&&Do(h,_),C}function y(h,x,m,b){if(m==null)throw Error(V(151));for(var C=null,S=null,v=x,_=x=0,I=null,A=m.next();v!==null&&!A.done;_++,A=m.next()){v.index>_?(I=v,v=null):I=v.sibling;var T=d(h,v,A.value,b);if(T===null){v===null&&(v=I);break}e&&v&&T.alternate===null&&t(h,v),x=r(T,x,_),S===null?C=T:S.sibling=T,S=T,v=I}if(A.done)return a(h,v),Le&&Do(h,_),C;if(v===null){for(;!A.done;_++,A=m.next())A=f(h,A.value,b),A!==null&&(x=r(A,x,_),S===null?C=A:S.sibling=A,S=A);return Le&&Do(h,_),C}for(v=o(v);!A.done;_++,A=m.next())A=p(v,h,_,A.value,b),A!==null&&(e&&A.alternate!==null&&v.delete(A.key===null?_:A.key),x=r(A,x,_),S===null?C=A:S.sibling=A,S=A);return e&&v.forEach(function(P){return t(h,P)}),Le&&Do(h,_),C}function w(h,x,m,b){if(typeof m=="object"&&m!==null&&m.type===il&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case qu:e:{for(var C=m.key;x!==null;){if(x.key===C){if(C=m.type,C===il){if(x.tag===7){a(h,x.sibling),b=n(x,m.props.children),b.return=h,h=b;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&ir(C)===x.type){a(h,x.sibling),b=n(x,m.props),Ti(b,m),b.return=h,h=b;break e}a(h,x);break}else t(h,x);x=x.sibling}m.type===il?(b=dr(m.props.children,h.mode,b,m.key),b.return=h,h=b):(b=dd(m.type,m.key,m.props,null,h.mode,b),Ti(b,m),b.return=h,h=b)}return l(h);case zi:e:{for(C=m.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===m.containerInfo&&x.stateNode.implementation===m.implementation){a(h,x.sibling),b=n(x,m.children||[]),b.return=h,h=b;break e}else{a(h,x);break}else t(h,x);x=x.sibling}b=pp(m,h.mode,b),b.return=h,h=b}return l(h);case un:return m=ir(m),w(h,x,m,b)}if(Oi(m))return g(h,x,m,b);if(Mi(m)){if(C=Mi(m),typeof C!="function")throw Error(V(150));return m=C.call(m),y(h,x,m,b)}if(typeof m.then=="function")return w(h,x,Qu(m),b);if(m.$$typeof===zo)return w(h,x,Ku(h,m),b);$u(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,x!==null&&x.tag===6?(a(h,x.sibling),b=n(x,m),b.return=h,h=b):(a(h,x),b=fp(m,h.mode,b),b.return=h,h=b),l(h)):a(h,x)}return function(h,x,m,b){try{rs=0;var C=w(h,x,m,b);return Sl=null,C}catch(v){if(v===Ul||v===ac)throw v;var S=sa(29,v,null,h.mode);return S.lanes=b,S.return=h,S}}}var hr=Jb(!0),ey=Jb(!1),dn=!1;function jm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var n=o.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),o.pending=t,t=kd(e),Xb(e,null,a),t}return tc(e,o,t,a),kd(e)}function Gi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,bb(e,a)}}function gp(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var om=!1;function Xi(){if(om){var e=Cl;if(e!==null)throw e}}function Yi(e,t,a,o){om=!1;var n=e.updateQueue;dn=!1;var r=n.firstBaseUpdate,l=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==l&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(r!==null){var f=n.baseState;l=0,c=u=s=null,i=r;do{var d=i.lane&-536870913,p=d!==i.lane;if(p?(Ce&d)===d:(o&d)===d){d!==0&&d===El&&(om=!0),c!==null&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,y=i;d=t;var w=a;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(w,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(w,f,d):g,d==null)break e;f=Ye({},f,d);break e;case 2:dn=!0}}d=i.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[d]:p.push(d))}else p={lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=p,s=f):c=c.next=p,l|=d;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);c===null&&(s=f),n.baseState=s,n.firstBaseUpdate=u,n.lastBaseUpdate=c,r===null&&(n.shared.lanes=0),Nn|=l,e.lanes=l,e.memoizedState=f}}function ty(e,t){if(typeof e!="function")throw Error(V(191,e));e.call(t)}function ay(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ty(a[e],t)}var Tl=fo(null),Ad=fo(0);function c0(e,t){e=Xo,Fe(Ad,e),Fe(Tl,t),Xo=e|t.baseLanes}function nm(){Fe(Ad,Xo),Fe(Tl,Tl.current)}function Km(){Xo=Ad.current,yt(Tl),yt(Ad)}var ga=fo(null),Na=null;function fn(e){var t=e.alternate;Fe(rt,rt.current&1),Fe(ga,e),Na===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Na=e)}function rm(e){Fe(rt,rt.current),Fe(ga,e),Na===null&&(Na=e)}function oy(e){e.tag===22?(Fe(rt,rt.current),Fe(ga,e),Na===null&&(Na=e)):pn(e)}function pn(){Fe(rt,rt.current),Fe(ga,ga.current)}function ia(e){yt(ga),Na===e&&(Na=null),yt(rt)}var rt=fo(0);function Nd(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lm(a)||_m(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=0,ge=null,De=null,it=null,Dd=!1,Ll=!1,xr=!1,Rd=0,ls=0,_l=null,w5=0;function tt(){throw Error(V(321))}function Qm(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ma(e[a],t[a]))return!1;return!0}function $m(e,t,a,o,n,r){return qo=r,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?Ry:ug,xr=!1,r=a(o,n),xr=!1,Ll&&(r=ry(t,a,o,n)),ny(e),r}function ny(e){le.H=is;var t=De!==null&&De.next!==null;if(qo=0,it=De=ge=null,Dd=!1,ls=0,_l=null,t)throw Error(V(300));e===null||dt||(e=e.dependencies,e!==null&&Ed(e)&&(dt=!0))}function ry(e,t,a,o){ge=e;var n=0;do{if(Ll&&(_l=null),ls=0,Ll=!1,25<=n)throw Error(V(301));if(n+=1,it=De=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}le.H=zy,r=t(a,o)}while(Ll);return r}function v5(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?ws(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ge.flags|=1024),t}function Jm(){var e=Rd!==0;return Rd=0,e}function eg(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function tg(e){if(Dd){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dd=!1}qo=0,it=De=ge=null,Ll=!1,ls=Rd=0,_l=null}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ge.memoizedState=it=e:it=it.next=e,it}function lt(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=it===null?ge.memoizedState:it.next;if(t!==null)it=t,De=e;else{if(e===null)throw ge.alternate===null?Error(V(467)):Error(V(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},it===null?ge.memoizedState=it=e:it=it.next=e}return it}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ws(e){var t=ls;return ls+=1,_l===null&&(_l=[]),e=$b(_l,e,t),t=ge,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?Ry:ug),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ws(e);if(e.$$typeof===zo)return Et(e)}throw Error(V(438,String(e)))}function ag(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=oc(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=lk;return t.index++,a}function Vo(e,t){return typeof t=="function"?t(e):t}function fd(e){var t=lt();return og(t,De,e)}function og(e,t,a){var o=e.queue;if(o===null)throw Error(V(311));o.lastRenderedReducer=a;var n=e.baseQueue,r=o.pending;if(r!==null){if(n!==null){var l=n.next;n.next=r.next,r.next=l}t.baseQueue=n=r,o.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var i=l=null,s=null,u=t,c=!1;do{var f=u.lane&-536870913;if(f!==u.lane?(Ce&f)===f:(qo&f)===f){var d=u.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===El&&(c=!0);else if((qo&d)===d){u=u.next,d===El&&(c=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=f,l=r):s=s.next=f,ge.lanes|=d,Nn|=d;f=u.action,xr&&a(r,f),r=u.hasEagerState?u.eagerState:a(r,f)}else d={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},s===null?(i=s=d,l=r):s=s.next=d,ge.lanes|=f,Nn|=f;u=u.next}while(u!==null&&u!==t);if(s===null?l=r:s.next=i,!ma(r,e.memoizedState)&&(dt=!0,c&&(a=Cl,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=s,o.lastRenderedState=r}return n===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hp(e){var t=lt(),a=t.queue;if(a===null)throw Error(V(311));a.lastRenderedReducer=e;var o=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var l=n=n.next;do r=e(r,l.action),l=l.next;while(l!==n);ma(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,o]}function ly(e,t,a){var o=ge,n=lt(),r=Le;if(r){if(a===void 0)throw Error(V(407));a=a()}else a=t();var l=!ma((De||n).memoizedState,a);if(l&&(n.memoizedState=a,dt=!0),n=n.queue,ng(uy.bind(null,o,n,e),[e]),n.getSnapshot!==t||l||it!==null&&it.memoizedState.tag&1){if(o.flags|=2048,Al(9,{destroy:void 0},sy.bind(null,o,n,a,t),null),Pe===null)throw Error(V(349));r||(qo&127)!==0||iy(o,t,a)}return a}function iy(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=oc(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function sy(e,t,a,o){t.value=a,t.getSnapshot=o,dy(t)&&cy(e)}function uy(e,t,a){return a(function(){dy(t)&&cy(e)})}function dy(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ma(e,a)}catch{return!0}}function cy(e){var t=Cr(e,2);t!==null&&$t(t,e,2)}function lm(e){var t=Ft();if(typeof e=="function"){var a=e;if(e=a(),xr){gn(!0);try{a()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t}function fy(e,t,a,o){return e.baseState=a,og(e,De,typeof o=="function"?o:Vo)}function C5(e,t,a,o,n){if(lc(e))throw Error(V(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};le.T!==null?a(!0):r.isTransition=!1,o(r),a=t.pending,a===null?(r.next=t.pending=r,py(t,r)):(r.next=a.next,t.pending=a.next=r)}}function py(e,t){var a=t.action,o=t.payload,n=e.state;if(t.isTransition){var r=le.T,l={};le.T=l;try{var i=a(n,o),s=le.S;s!==null&&s(l,i),f0(e,t,i)}catch(u){im(e,t,u)}finally{r!==null&&l.types!==null&&(r.types=l.types),le.T=r}}else try{r=a(n,o),f0(e,t,r)}catch(u){im(e,t,u)}}function f0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){p0(e,t,o)},function(o){return im(e,t,o)}):p0(e,t,a)}function p0(e,t,a){t.status="fulfilled",t.value=a,my(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,py(e,a)))}function im(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,my(t),t=t.next;while(t!==o)}e.action=null}function my(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gy(e,t){return t}function m0(e,t){if(Le){var a=Pe.formState;if(a!==null){e:{var o=ge;if(Le){if(Xe){t:{for(var n=Xe,r=Aa;n.nodeType!==8;){if(!r){n=null;break t}if(n=Da(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Xe=Da(n.nextSibling),o=n.data==="F!";break e}}Tn(o)}o=!1}o&&(t=a[0])}}return a=Ft(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gy,lastRenderedState:t},a.queue=o,a=Ay.bind(null,ge,o),o.dispatch=a,o=lm(!1),r=sg.bind(null,ge,!1,o.queue),o=Ft(),n={state:t,dispatch:null,action:e,pending:null},o.queue=n,a=C5.bind(null,ge,n,r,a),n.dispatch=a,o.memoizedState=e,[t,a,!1]}function g0(e){var t=lt();return hy(t,De,e)}function hy(e,t,a){if(t=og(e,t,gy)[0],e=fd(Vo)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ws(t)}catch(l){throw l===Ul?ac:l}else o=t;t=lt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ge.flags|=2048,Al(9,{destroy:void 0},S5.bind(null,n,a),null)),[o,r,e]}function S5(e,t){e.action=t}function h0(e){var t=lt(),a=De;if(a!==null)return hy(t,a,e);lt(),t=t.memoizedState,a=lt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Al(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ge.updateQueue,t===null&&(t=oc(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function xy(){return lt().memoizedState}function pd(e,t,a,o){var n=Ft();ge.flags|=e,n.memoizedState=Al(1|t,{destroy:void 0},a,o===void 0?null:o)}function rc(e,t,a,o){var n=lt();o=o===void 0?null:o;var r=n.memoizedState.inst;De!==null&&o!==null&&Qm(o,De.memoizedState.deps)?n.memoizedState=Al(t,r,a,o):(ge.flags|=e,n.memoizedState=Al(1|t,r,a,o))}function x0(e,t){pd(8390656,8,e,t)}function ng(e,t){rc(2048,8,e,t)}function L5(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=oc(),ge.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function by(e){var t=lt().memoizedState;return L5({ref:t,nextImpl:e}),function(){if((ke&2)!==0)throw Error(V(440));return t.impl.apply(void 0,arguments)}}function yy(e,t){return rc(4,2,e,t)}function wy(e,t){return rc(4,4,e,t)}function vy(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cy(e,t,a){a=a!=null?a.concat([e]):null,rc(4,4,vy.bind(null,t,e),a)}function rg(){}function Sy(e,t){var a=lt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Qm(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Ly(e,t){var a=lt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Qm(t,o[1]))return o[0];if(o=e(),xr){gn(!0);try{e()}finally{gn(!1)}}return a.memoizedState=[o,t],o}function lg(e,t,a){return a===void 0||(qo&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=f1(),ge.lanes|=e,Nn|=e,a)}function _y(e,t,a,o){return ma(a,t)?a:Tl.current!==null?(e=lg(e,a,o),ma(e,t)||(dt=!0),e):(qo&42)===0||(qo&1073741824)!==0&&(Ce&261930)===0?(dt=!0,e.memoizedState=a):(e=f1(),ge.lanes|=e,Nn|=e,t)}function Iy(e,t,a,o,n){var r=Me.p;Me.p=r!==0&&8>r?r:8;var l=le.T,i={};le.T=i,sg(e,!1,t,a);try{var s=n(),u=le.S;if(u!==null&&u(i,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=y5(s,o);Zi(e,t,c,pa(e))}else Zi(e,t,o,pa(e))}catch(f){Zi(e,t,{then:function(){},status:"rejected",reason:f},pa())}finally{Me.p=r,l!==null&&i.types!==null&&(l.types=i.types),le.T=l}}function _5(){}function sm(e,t,a,o){if(e.tag!==5)throw Error(V(476));var n=ky(e).queue;Iy(e,n,t,ur,a===null?_5:function(){return My(e),a(o)})}function ky(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ur,baseState:ur,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:ur},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function My(e){var t=ky(e);t.next===null&&(t=e.alternate.memoizedState),Zi(e,t.next.queue,{},pa())}function ig(){return Et(ds)}function Ey(){return lt().memoizedState}function Ty(){return lt().memoizedState}function I5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pa();e=Cn(a);var o=Sn(t,e,a);o!==null&&($t(o,t,a),Gi(o,t,a)),t={cache:Ym()},e.payload=t;return}t=t.return}}function k5(e,t,a){var o=pa();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(e)?Ny(t,a):(a=qm(e,t,a,o),a!==null&&($t(a,e,o),Dy(a,t,o)))}function Ay(e,t,a){var o=pa();Zi(e,t,a,o)}function Zi(e,t,a,o){var n={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(e))Ny(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,i=r(l,a);if(n.hasEagerState=!0,n.eagerState=i,ma(i,l))return tc(e,t,n,0),Pe===null&&ec(),!1}catch{}if(a=qm(e,t,n,o),a!==null)return $t(a,e,o),Dy(a,t,o),!0}return!1}function sg(e,t,a,o){if(o={lane:2,revertLane:xg(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(t)throw Error(V(479))}else t=qm(e,a,o,2),t!==null&&$t(t,e,2)}function lc(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Ny(e,t){Ll=Dd=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Dy(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,bb(e,a)}}var is={readContext:Et,use:nc,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};is.useEffectEvent=tt;var Ry={readContext:Et,use:nc,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:x0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pd(4194308,4,vy.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pd(4194308,4,e,t)},useInsertionEffect:function(e,t){pd(4,2,e,t)},useMemo:function(e,t){var a=Ft();t=t===void 0?null:t;var o=e();if(xr){gn(!0);try{e()}finally{gn(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Ft();if(a!==void 0){var n=a(t);if(xr){gn(!0);try{a(t)}finally{gn(!1)}}}else n=t;return o.memoizedState=o.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=k5.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:function(e){e=lm(e);var t=e.queue,a=Ay.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:rg,useDeferredValue:function(e,t){var a=Ft();return lg(a,e,t)},useTransition:function(){var e=lm(!1);return e=Iy.bind(null,ge,e.queue,!0,!1),Ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ge,n=Ft();if(Le){if(a===void 0)throw Error(V(407));a=a()}else{if(a=t(),Pe===null)throw Error(V(349));(Ce&127)!==0||iy(o,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,x0(uy.bind(null,o,r,e),[e]),o.flags|=2048,Al(9,{destroy:void 0},sy.bind(null,o,r,a,t),null),a},useId:function(){var e=Ft(),t=Pe.identifierPrefix;if(Le){var a=so,o=io;a=(o&~(1<<32-fa(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Rd++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=w5++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ig,useFormState:m0,useActionState:m0,useOptimistic:function(e){var t=Ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=sg.bind(null,ge,!0,a),a.dispatch=t,[e,t]},useMemoCache:ag,useCacheRefresh:function(){return Ft().memoizedState=I5.bind(null,ge)},useEffectEvent:function(e){var t=Ft(),a={impl:e};return t.memoizedState=a,function(){if((ke&2)!==0)throw Error(V(440));return a.impl.apply(void 0,arguments)}}},ug={readContext:Et,use:nc,useCallback:Sy,useContext:Et,useEffect:ng,useImperativeHandle:Cy,useInsertionEffect:yy,useLayoutEffect:wy,useMemo:Ly,useReducer:fd,useRef:xy,useState:function(){return fd(Vo)},useDebugValue:rg,useDeferredValue:function(e,t){var a=lt();return _y(a,De.memoizedState,e,t)},useTransition:function(){var e=fd(Vo)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ws(e),t]},useSyncExternalStore:ly,useId:Ey,useHostTransitionStatus:ig,useFormState:g0,useActionState:g0,useOptimistic:function(e,t){var a=lt();return fy(a,De,e,t)},useMemoCache:ag,useCacheRefresh:Ty};ug.useEffectEvent=by;var zy={readContext:Et,use:nc,useCallback:Sy,useContext:Et,useEffect:ng,useImperativeHandle:Cy,useInsertionEffect:yy,useLayoutEffect:wy,useMemo:Ly,useReducer:hp,useRef:xy,useState:function(){return hp(Vo)},useDebugValue:rg,useDeferredValue:function(e,t){var a=lt();return De===null?lg(a,e,t):_y(a,De.memoizedState,e,t)},useTransition:function(){var e=hp(Vo)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ws(e),t]},useSyncExternalStore:ly,useId:Ey,useHostTransitionStatus:ig,useFormState:h0,useActionState:h0,useOptimistic:function(e,t){var a=lt();return De!==null?fy(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ag,useCacheRefresh:Ty};zy.useEffectEvent=by;function xp(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Ye({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var um={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=pa(),n=Cn(o);n.payload=t,a!=null&&(n.callback=a),t=Sn(e,n,o),t!==null&&($t(t,e,o),Gi(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=pa(),n=Cn(o);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Sn(e,n,o),t!==null&&($t(t,e,o),Gi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pa(),o=Cn(a);o.tag=2,t!=null&&(o.callback=t),t=Sn(e,o,a),t!==null&&($t(t,e,a),Gi(t,e,a))}};function b0(e,t,a,o,n,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!as(a,o)||!as(n,r):!0}function y0(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&um.enqueueReplaceState(t,t.state,null)}function br(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=Ye({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Oy(e){Id(e)}function By(e){console.error(e)}function Py(e){Id(e)}function zd(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function w0(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function dm(e,t,a){return a=Cn(a),a.tag=3,a.payload={element:null},a.callback=function(){zd(e,t)},a}function Hy(e){return e=Cn(e),e.tag=3,e}function Uy(e,t,a,o){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=o.value;e.payload=function(){return n(r)},e.callback=function(){w0(t,a,o)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){w0(t,a,o),typeof n!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var i=o.stack;this.componentDidCatch(o.value,{componentStack:i!==null?i:""})})}function M5(e,t,a,o,n){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Hl(t,a,n,!0),a=ga.current,a!==null){switch(a.tag){case 31:case 13:return Na===null?Ud():a.alternate===null&&at===0&&(at=3),a.flags&=-257,a.flags|=65536,a.lanes=n,o===Td?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Mp(e,o,n)),!1;case 22:return a.flags|=65536,o===Td?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Mp(e,o,n)),!1}throw Error(V(435,a.tag))}return Mp(e,o,n),Ud(),!1}if(Le)return t=ga.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,o!==Qp&&(e=Error(V(422),{cause:o}),ns(Ta(e,a)))):(o!==Qp&&(t=Error(V(423),{cause:o}),ns(Ta(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,o=Ta(o,a),n=dm(e.stateNode,o,n),gp(e,n),at!==4&&(at=2)),!1;var r=Error(V(520),{cause:o});if(r=Ta(r,a),Ki===null?Ki=[r]:Ki.push(r),at!==4&&(at=2),t===null)return!0;o=Ta(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=dm(a.stateNode,o,e),gp(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Hy(n),Uy(n,e,a,o),gp(a,n),!1}a=a.return}while(a!==null);return!1}var dg=Error(V(461)),dt=!1;function It(e,t,a,o){t.child=e===null?ey(t,null,a,o):hr(t,e.child,a,o)}function v0(e,t,a,o,n){a=a.render;var r=t.ref;if("ref"in o){var l={};for(var i in o)i!=="ref"&&(l[i]=o[i])}else l=o;return gr(t),o=$m(e,t,a,l,r,n),i=Jm(),e!==null&&!dt?(eg(e,t,n),Go(e,t,n)):(Le&&i&&Gm(t),t.flags|=1,It(e,t,o,n),t.child)}function C0(e,t,a,o,n){if(e===null){var r=a.type;return typeof r=="function"&&!Vm(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Fy(e,t,r,o,n)):(e=dd(a.type,null,o,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!cg(e,n)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:as,a(l,o)&&e.ref===t.ref)return Go(e,t,n)}return t.flags|=1,e=Po(r,o),e.ref=t.ref,e.return=t,t.child=e}function Fy(e,t,a,o,n){if(e!==null){var r=e.memoizedProps;if(as(r,o)&&e.ref===t.ref)if(dt=!1,t.pendingProps=o=r,cg(e,n))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,Go(e,t,n)}return cm(e,t,a,o,n)}function qy(e,t,a,o){var n=o.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(o=t.child=e.child,n=0;o!==null;)n=n|o.lanes|o.childLanes,o=o.sibling;o=n&~r}else o=0,t.child=null;return S0(e,t,r,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cd(t,r!==null?r.cachePool:null),r!==null?c0(t,r):nm(),oy(t);else return o=t.lanes=536870912,S0(e,t,r!==null?r.baseLanes|a:a,a,o)}else r!==null?(cd(t,r.cachePool),c0(t,r),pn(t),t.memoizedState=null):(e!==null&&cd(t,null),nm(),pn(t));return It(e,t,n,a),t.child}function Pi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function S0(e,t,a,o,n){var r=Zm();return r=r===null?null:{parent:ut._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&cd(t,null),nm(),oy(t),e!==null&&Hl(e,t,o,!0),t.childLanes=n,null}function md(e,t){return t=Od({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function L0(e,t,a){return hr(t,e.child,null,a),e=md(t,t.pendingProps),e.flags|=2,ia(t),t.memoizedState=null,e}function E5(e,t,a){var o=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Le){if(o.mode==="hidden")return e=md(t,o),t.lanes=536870912,Pi(null,e);if(rm(t),(e=Xe)?(e=R1(e,Aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:En!==null?{id:io,overflow:so}:null,retryLane:536870912,hydrationErrors:null},a=Zb(e),a.return=t,t.child=a,Mt=t,Xe=null)):e=null,e===null)throw Tn(t);return t.lanes=536870912,null}return md(t,o)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(rm(t),n)if(t.flags&256)t.flags&=-257,t=L0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(V(558));else if(dt||Hl(e,t,a,!1),n=(a&e.childLanes)!==0,dt||n){if(o=Pe,o!==null&&(l=yb(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Cr(e,l),$t(o,e,l),dg;Ud(),t=L0(e,t,a)}else e=r.treeContext,Xe=Da(l.nextSibling),Mt=t,Le=!0,vn=null,Aa=!1,e!==null&&jb(t,e),t=md(t,o),t.flags|=4096;return t}return e=Po(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gd(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(V(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cm(e,t,a,o,n){return gr(t),a=$m(e,t,a,o,void 0,n),o=Jm(),e!==null&&!dt?(eg(e,t,n),Go(e,t,n)):(Le&&o&&Gm(t),t.flags|=1,It(e,t,a,n),t.child)}function _0(e,t,a,o,n,r){return gr(t),t.updateQueue=null,a=ry(t,o,a,n),ny(e),o=Jm(),e!==null&&!dt?(eg(e,t,r),Go(e,t,r)):(Le&&o&&Gm(t),t.flags|=1,It(e,t,a,r),t.child)}function I0(e,t,a,o,n){if(gr(t),t.stateNode===null){var r=gl,l=a.contextType;typeof l=="object"&&l!==null&&(r=Et(l)),r=new a(o,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=um,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=o,r.state=t.memoizedState,r.refs={},jm(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?Et(l):gl,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(xp(t,a,l,o),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&um.enqueueReplaceState(r,r.state,null),Yi(t,o,r,n),Xi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){r=t.stateNode;var i=t.memoizedProps,s=br(a,i);r.props=s;var u=r.context,c=a.contextType;l=gl,typeof c=="object"&&c!==null&&(l=Et(c));var f=a.getDerivedStateFromProps;c=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",i=t.pendingProps!==i,c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i||u!==l)&&y0(t,r,o,l),dn=!1;var d=t.memoizedState;r.state=d,Yi(t,o,r,n),Xi(),u=t.memoizedState,i||d!==u||dn?(typeof f=="function"&&(xp(t,a,f,o),u=t.memoizedState),(s=dn||b0(t,a,s,o,d,u,l))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),r.props=o,r.state=u,r.context=l,o=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,am(e,t),l=t.memoizedProps,c=br(a,l),r.props=c,f=t.pendingProps,d=r.context,u=a.contextType,s=gl,typeof u=="object"&&u!==null&&(s=Et(u)),i=a.getDerivedStateFromProps,(u=typeof i=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==f||d!==s)&&y0(t,r,o,s),dn=!1,d=t.memoizedState,r.state=d,Yi(t,o,r,n),Xi();var p=t.memoizedState;l!==f||d!==p||dn||e!==null&&e.dependencies!==null&&Ed(e.dependencies)?(typeof i=="function"&&(xp(t,a,i,o),p=t.memoizedState),(c=dn||b0(t,a,c,o,d,p,s)||e!==null&&e.dependencies!==null&&Ed(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=s,o=c):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,gd(e,t),o=(t.flags&128)!==0,r||o?(r=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&o?(t.child=hr(t,e.child,null,n),t.child=hr(t,null,a,n)):It(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Go(e,t,n),e}function k0(e,t,a,o){return mr(),t.flags|=256,It(e,t,a,o),t.child}var bp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yp(e){return{baseLanes:e,cachePool:Qb()}}function wp(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ua),e}function Vy(e,t,a){var o=t.pendingProps,n=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(rt.current&2)!==0),l&&(n=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Le){if(n?fn(t):pn(t),(e=Xe)?(e=R1(e,Aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:En!==null?{id:io,overflow:so}:null,retryLane:536870912,hydrationErrors:null},a=Zb(e),a.return=t,t.child=a,Mt=t,Xe=null)):e=null,e===null)throw Tn(t);return _m(e)?t.lanes=32:t.lanes=536870912,null}var i=o.children;return o=o.fallback,n?(pn(t),n=t.mode,i=Od({mode:"hidden",children:i},n),o=dr(o,n,a,null),i.return=t,o.return=t,i.sibling=o,t.child=i,o=t.child,o.memoizedState=yp(a),o.childLanes=wp(e,l,a),t.memoizedState=bp,Pi(null,o)):(fn(t),fm(t,i))}var s=e.memoizedState;if(s!==null&&(i=s.dehydrated,i!==null)){if(r)t.flags&256?(fn(t),t.flags&=-257,t=vp(e,t,a)):t.memoizedState!==null?(pn(t),t.child=e.child,t.flags|=128,t=null):(pn(t),i=o.fallback,n=t.mode,o=Od({mode:"visible",children:o.children},n),i=dr(i,n,a,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,hr(t,e.child,null,a),o=t.child,o.memoizedState=yp(a),o.childLanes=wp(e,l,a),t.memoizedState=bp,t=Pi(null,o));else if(fn(t),_m(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var u=l.dgst;l=u,o=Error(V(419)),o.stack="",o.digest=l,ns({value:o,source:null,stack:null}),t=vp(e,t,a)}else if(dt||Hl(e,t,a,!1),l=(a&e.childLanes)!==0,dt||l){if(l=Pe,l!==null&&(o=yb(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,Cr(e,o),$t(l,e,o),dg;Lm(i)||Ud(),t=vp(e,t,a)}else Lm(i)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,Xe=Da(i.nextSibling),Mt=t,Le=!0,vn=null,Aa=!1,e!==null&&jb(t,e),t=fm(t,o.children),t.flags|=4096);return t}return n?(pn(t),i=o.fallback,n=t.mode,s=e.child,u=s.sibling,o=Po(s,{mode:"hidden",children:o.children}),o.subtreeFlags=s.subtreeFlags&65011712,u!==null?i=Po(u,i):(i=dr(i,n,a,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,Pi(null,o),o=t.child,i=e.child.memoizedState,i===null?i=yp(a):(n=i.cachePool,n!==null?(s=ut._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Qb(),i={baseLanes:i.baseLanes|a,cachePool:n}),o.memoizedState=i,o.childLanes=wp(e,l,a),t.memoizedState=bp,Pi(e.child,o)):(fn(t),a=e.child,e=a.sibling,a=Po(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function fm(e,t){return t=Od({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Od(e,t){return e=sa(22,e,null,t),e.lanes=0,e}function vp(e,t,a){return hr(t,e.child,null,a),e=fm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M0(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Jp(e.return,t,a)}function Cp(e,t,a,o,n,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:n,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=a,l.tailMode=n,l.treeForkCount=r)}function Gy(e,t,a){var o=t.pendingProps,n=o.revealOrder,r=o.tail;o=o.children;var l=rt.current,i=(l&2)!==0;if(i?(l=l&1|2,t.flags|=128):l&=1,Fe(rt,l),It(e,t,o,a),o=Le?os:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,t);else if(e.tag===19)M0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Nd(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Cp(t,!1,n,a,r,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Nd(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Cp(t,!0,a,null,r,o);break;case"together":Cp(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Go(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,a=Po(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Po(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function cg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ed(e)))}function T5(e,t,a){switch(t.tag){case 3:Cd(t,t.stateNode.containerInfo),cn(t,ut,e.memoizedState.cache),mr();break;case 27:case 5:Up(t);break;case 4:Cd(t,t.stateNode.containerInfo);break;case 10:cn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rm(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(fn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vy(e,t,a):(fn(t),e=Go(e,t,a),e!==null?e.sibling:null);fn(t);break;case 19:var n=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Hl(e,t,a,!1),o=(a&t.childLanes)!==0),n){if(o)return Gy(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Fe(rt,rt.current),o)break;return null;case 22:return t.lanes=0,qy(e,t,a,t.pendingProps);case 24:cn(t,ut,e.memoizedState.cache)}return Go(e,t,a)}function Xy(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!cg(e,a)&&(t.flags&128)===0)return dt=!1,T5(e,t,a);dt=(e.flags&131072)!==0}else dt=!1,Le&&(t.flags&1048576)!==0&&Wb(t,os,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ir(t.elementType),t.type=e,typeof e=="function")Vm(e)?(o=br(e,o),t.tag=1,t=I0(null,t,e,o,a)):(t.tag=0,t=cm(null,t,e,o,a));else{if(e!=null){var n=e.$$typeof;if(n===Em){t.tag=11,t=v0(null,t,e,o,a);break e}else if(n===Tm){t.tag=14,t=C0(null,t,e,o,a);break e}}throw t=Pp(e)||e,Error(V(306,t,""))}}return t;case 0:return cm(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,n=br(o,t.pendingProps),I0(e,t,o,n,a);case 3:e:{if(Cd(t,t.stateNode.containerInfo),e===null)throw Error(V(387));o=t.pendingProps;var r=t.memoizedState;n=r.element,am(e,t),Yi(t,o,null,a);var l=t.memoizedState;if(o=l.cache,cn(t,ut,o),o!==r.cache&&em(t,[ut],a,!0),Xi(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=k0(e,t,o,a);break e}else if(o!==n){n=Ta(Error(V(424)),t),ns(n),t=k0(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xe=Da(e.firstChild),Mt=t,Le=!0,vn=null,Aa=!0,a=ey(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mr(),o===n){t=Go(e,t,a);break e}It(e,t,o,a)}t=t.child}return t;case 26:return gd(e,t),e===null?(a=K0(t.type,null,t.pendingProps,null))?t.memoizedState=a:Le||(a=t.type,e=t.pendingProps,o=Gd(wn.current).createElement(a),o[kt]=t,o[Jt]=e,Tt(o,a,e),bt(o),t.stateNode=o):t.memoizedState=K0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Up(t),e===null&&Le&&(o=t.stateNode=z1(t.type,t.pendingProps,wn.current),Mt=t,Aa=!0,n=Xe,Rn(t.type)?(Im=n,Xe=Da(o.firstChild)):Xe=n),It(e,t,t.pendingProps.children,a),gd(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Le&&((n=o=Xe)&&(o=nM(o,t.type,t.pendingProps,Aa),o!==null?(t.stateNode=o,Mt=t,Xe=Da(o.firstChild),Aa=!1,n=!0):n=!1),n||Tn(t)),Up(t),n=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,Cm(n,r)?o=null:l!==null&&Cm(n,l)&&(t.flags|=32),t.memoizedState!==null&&(n=$m(e,t,v5,null,null,a),ds._currentValue=n),gd(e,t),It(e,t,o,a),t.child;case 6:return e===null&&Le&&((e=a=Xe)&&(a=rM(a,t.pendingProps,Aa),a!==null?(t.stateNode=a,Mt=t,Xe=null,e=!0):e=!1),e||Tn(t)),null;case 13:return Vy(e,t,a);case 4:return Cd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=hr(t,null,o,a):It(e,t,o,a),t.child;case 11:return v0(e,t,t.type,t.pendingProps,a);case 7:return It(e,t,t.pendingProps,a),t.child;case 8:return It(e,t,t.pendingProps.children,a),t.child;case 12:return It(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,cn(t,t.type,o.value),It(e,t,o.children,a),t.child;case 9:return n=t.type._context,o=t.pendingProps.children,gr(t),n=Et(n),o=o(n),t.flags|=1,It(e,t,o,a),t.child;case 14:return C0(e,t,t.type,t.pendingProps,a);case 15:return Fy(e,t,t.type,t.pendingProps,a);case 19:return Gy(e,t,a);case 31:return E5(e,t,a);case 22:return qy(e,t,a,t.pendingProps);case 24:return gr(t),o=Et(ut),e===null?(n=Zm(),n===null&&(n=Pe,r=Ym(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:o,cache:n},jm(t),cn(t,ut,n)):((e.lanes&a)!==0&&(am(e,t),Yi(t,null,null,a),Xi()),n=e.memoizedState,r=t.memoizedState,n.parent!==o?(n={parent:o,cache:o},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),cn(t,ut,o)):(o=r.cache,cn(t,ut,o),o!==n.cache&&em(t,[ut],a,!0))),It(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(V(156,t.tag))}function Eo(e){e.flags|=4}function Sp(e,t,a,o,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(g1())e.flags|=8192;else throw fr=Td,Wm}else e.flags&=-16777217}function E0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P1(t))if(g1())e.flags|=8192;else throw fr=Td,Wm}function Ju(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hb():536870912,e.lanes|=t,Nl|=t)}function Ai(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags&65011712,o|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,o|=n.subtreeFlags,o|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function A5(e,t,a){var o=t.pendingProps;switch(Xm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ho(ut),Il(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ol(t)?Eo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mp())),Ge(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Eo(t),r!==null?(Ge(t),E0(t,r)):(Ge(t),Sp(t,n,null,o,a))):r?r!==e.memoizedState?(Eo(t),Ge(t),E0(t,r)):(Ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Eo(t),Ge(t),Sp(t,n,e,o,a)),null;case 27:if(Sd(t),a=wn.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Eo(t);else{if(!o){if(t.stateNode===null)throw Error(V(166));return Ge(t),null}e=co.current,ol(t)?n0(t,e):(e=z1(n,o,a),t.stateNode=e,Eo(t))}return Ge(t),null;case 5:if(Sd(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Eo(t);else{if(!o){if(t.stateNode===null)throw Error(V(166));return Ge(t),null}if(r=co.current,ol(t))n0(t,r);else{var l=Gd(wn.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}r[kt]=t,r[Jt]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Tt(r,n,o),n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Eo(t)}}return Ge(t),Sp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Eo(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(V(166));if(e=wn.current,ol(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,n=Mt,n!==null)switch(n.tag){case 27:case 5:o=n.memoizedProps}e[kt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||A1(e.nodeValue,a)),e||Tn(t,!0)}else e=Gd(e).createTextNode(o),e[kt]=t,t.stateNode=e}return Ge(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=ol(t),a!==null){if(e===null){if(!o)throw Error(V(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(557));e[kt]=t}else mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),e=!1}else a=mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ia(t),t):(ia(t),null);if((t.flags&128)!==0)throw Error(V(558))}return Ge(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ol(t),o!==null&&o.dehydrated!==null){if(e===null){if(!n)throw Error(V(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(V(317));n[kt]=t}else mr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),n=!1}else n=mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ia(t),t):(ia(t),null)}return ia(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,n=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(n=o.alternate.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==n&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ju(t,t.updateQueue),Ge(t),null);case 4:return Il(),e===null&&bg(t.stateNode.containerInfo),Ge(t),null;case 10:return Ho(t.type),Ge(t),null;case 19:if(yt(rt),o=t.memoizedState,o===null)return Ge(t),null;if(n=(t.flags&128)!==0,r=o.rendering,r===null)if(n)Ai(o,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Nd(e),r!==null){for(t.flags|=128,Ai(o,!1),e=r.updateQueue,t.updateQueue=e,Ju(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Yb(a,e),a=a.sibling;return Fe(rt,rt.current&1|2),Le&&Do(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&da()>Pd&&(t.flags|=128,n=!0,Ai(o,!1),t.lanes=4194304)}else{if(!n)if(e=Nd(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ju(t,e),Ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!r.alternate&&!Le)return Ge(t),null}else 2*da()-o.renderingStartTime>Pd&&a!==536870912&&(t.flags|=128,n=!0,Ai(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(e=o.last,e!==null?e.sibling=r:t.child=r,o.last=r)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=da(),e.sibling=null,a=rt.current,Fe(rt,n?a&1|2:a&1),Le&&Do(t,o.treeForkCount),e):(Ge(t),null);case 22:case 23:return ia(t),Km(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),a=t.updateQueue,a!==null&&Ju(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&yt(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ho(ut),Ge(t),null;case 25:return null;case 30:return null}throw Error(V(156,t.tag))}function N5(e,t){switch(Xm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ho(ut),Il(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Sd(t),null;case 31:if(t.memoizedState!==null){if(ia(t),t.alternate===null)throw Error(V(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ia(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return yt(rt),null;case 4:return Il(),null;case 10:return Ho(t.type),null;case 22:case 23:return ia(t),Km(),e!==null&&yt(cr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ho(ut),null;case 25:return null;default:return null}}function Yy(e,t){switch(Xm(t),t.tag){case 3:Ho(ut),Il();break;case 26:case 27:case 5:Sd(t);break;case 4:Il();break;case 31:t.memoizedState!==null&&ia(t);break;case 13:ia(t);break;case 19:yt(rt);break;case 10:Ho(t.type);break;case 22:case 23:ia(t),Km(),e!==null&&yt(cr);break;case 24:Ho(ut)}}function vs(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var n=o.next;a=n;do{if((a.tag&e)===e){o=void 0;var r=a.create,l=a.inst;o=r(),l.destroy=o}a=a.next}while(a!==n)}}catch(i){Ae(t,t.return,i)}}function An(e,t,a){try{var o=t.updateQueue,n=o!==null?o.lastEffect:null;if(n!==null){var r=n.next;o=r;do{if((o.tag&e)===e){var l=o.inst,i=l.destroy;if(i!==void 0){l.destroy=void 0,n=t;var s=a,u=i;try{u()}catch(c){Ae(n,s,c)}}}o=o.next}while(o!==r)}}catch(c){Ae(t,t.return,c)}}function Zy(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ay(t,a)}catch(o){Ae(e,e.return,o)}}}function Wy(e,t,a){a.props=br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ae(e,t,o)}}function Wi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(n){Ae(e,t,n)}}function uo(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(n){Ae(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ae(e,t,n)}else a.current=null}function jy(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(n){Ae(e,e.return,n)}}function Lp(e,t,a){try{var o=e.stateNode;$5(o,e.type,a,t),o[Jt]=t}catch(n){Ae(e,e.return,n)}}function Ky(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function _p(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ky(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pm(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Oo));else if(o!==4&&(o===27&&Rn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(pm(e,t,a),e=e.sibling;e!==null;)pm(e,t,a),e=e.sibling}function Bd(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Rn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bd(e,t,a),e=e.sibling;e!==null;)Bd(e,t,a),e=e.sibling}function Qy(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Tt(t,o,a),t[kt]=e,t[Jt]=a}catch(r){Ae(e,e.return,r)}}var Ro=!1,st=!1,Ip=!1,T0=typeof WeakSet=="function"?WeakSet:Set,xt=null;function D5(e,t){if(e=e.containerInfo,wm=Wd,e=Pb(e),Um(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var p;f!==a||n!==0&&f.nodeType!==3||(i=l+n),f!==r||o!==0&&f.nodeType!==3||(s=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break t;if(d===a&&++u===n&&(i=l),d===r&&++c===o&&(s=l),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(vm={focusedElem:e,selectionRange:a},Wd=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,o=a.stateNode;try{var g=br(a.type,n);e=o.getSnapshotBeforeUpdate(g,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(y){Ae(a,a.return,y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Sm(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(V(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function $y(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ao(e,a),o&4&&vs(5,a);break;case 1:if(Ao(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){Ae(a,a.return,l)}else{var n=br(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Ae(a,a.return,l)}}o&64&&Zy(a),o&512&&Wi(a,a.return);break;case 3:if(Ao(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ay(e,t)}catch(l){Ae(a,a.return,l)}}break;case 27:t===null&&o&4&&Qy(a);case 26:case 5:Ao(e,a),t===null&&o&4&&jy(a),o&512&&Wi(a,a.return);break;case 12:Ao(e,a);break;case 31:Ao(e,a),o&4&&t1(e,a);break;case 13:Ao(e,a),o&4&&a1(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=q5.bind(null,a),lM(e,a))));break;case 22:if(o=a.memoizedState!==null||Ro,!o){t=t!==null&&t.memoizedState!==null||st,n=Ro;var r=st;Ro=o,(st=t)&&!r?No(e,a,(a.subtreeFlags&8772)!==0):Ao(e,a),Ro=n,st=r}break;case 30:break;default:Ao(e,a)}}function Jy(e){var t=e.alternate;t!==null&&(e.alternate=null,Jy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Kt=!1;function To(e,t,a){for(a=a.child;a!==null;)e1(e,t,a),a=a.sibling}function e1(e,t,a){if(ca&&typeof ca.onCommitFiberUnmount=="function")try{ca.onCommitFiberUnmount(ms,a)}catch{}switch(a.tag){case 26:st||uo(a,t),To(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||uo(a,t);var o=Qe,n=Kt;Rn(a.type)&&(Qe=a.stateNode,Kt=!1),To(e,t,a),$i(a.stateNode),Qe=o,Kt=n;break;case 5:st||uo(a,t);case 6:if(o=Qe,n=Kt,Qe=null,To(e,t,a),Qe=o,Kt=n,Qe!==null)if(Kt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(r){Ae(a,t,r)}else try{Qe.removeChild(a.stateNode)}catch(r){Ae(a,t,r)}break;case 18:Qe!==null&&(Kt?(e=Qe,X0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ol(e)):X0(Qe,a.stateNode));break;case 4:o=Qe,n=Kt,Qe=a.stateNode.containerInfo,Kt=!0,To(e,t,a),Qe=o,Kt=n;break;case 0:case 11:case 14:case 15:An(2,a,t),st||An(4,a,t),To(e,t,a);break;case 1:st||(uo(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Wy(a,t,o)),To(e,t,a);break;case 21:To(e,t,a);break;case 22:st=(o=st)||a.memoizedState!==null,To(e,t,a),st=o;break;default:To(e,t,a)}}function t1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ol(e)}catch(a){Ae(t,t.return,a)}}}function a1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(a){Ae(t,t.return,a)}}function R5(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new T0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new T0),t;default:throw Error(V(435,e.tag))}}function ed(e,t){var a=R5(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var n=V5.bind(null,e,o);o.then(n,n)}})}function Wt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var n=a[o],r=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 27:if(Rn(i.type)){Qe=i.stateNode,Kt=!1;break e}break;case 5:Qe=i.stateNode,Kt=!1;break e;case 3:case 4:Qe=i.stateNode.containerInfo,Kt=!0;break e}i=i.return}if(Qe===null)throw Error(V(160));e1(r,l,n),Qe=null,Kt=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)o1(t,e),t=t.sibling}var Xa=null;function o1(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wt(t,e),jt(e),o&4&&(An(3,e,e.return),vs(3,e),An(5,e,e.return));break;case 1:Wt(t,e),jt(e),o&512&&(st||a===null||uo(a,a.return)),o&64&&Ro&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var n=Xa;if(Wt(t,e),jt(e),o&512&&(st||a===null||uo(a,a.return)),o&4){var r=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(o){case"title":r=n.getElementsByTagName("title")[0],(!r||r[xs]||r[kt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(o),n.head.insertBefore(r,n.querySelector("head > title"))),Tt(r,o,a),r[kt]=e,bt(r),o=r;break e;case"link":var l=$0("link","href",n).get(o+(a.href||""));if(l){for(var i=0;i<l.length;i++)if(r=l[i],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(i,1);break t}}r=n.createElement(o),Tt(r,o,a),n.head.appendChild(r);break;case"meta":if(l=$0("meta","content",n).get(o+(a.content||""))){for(i=0;i<l.length;i++)if(r=l[i],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(i,1);break t}}r=n.createElement(o),Tt(r,o,a),n.head.appendChild(r);break;default:throw Error(V(468,o))}r[kt]=e,bt(r),o=r}e.stateNode=o}else J0(n,e.type,e.stateNode);else e.stateNode=Q0(n,o,e.memoizedProps);else r!==o?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,o===null?J0(n,e.type,e.stateNode):Q0(n,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Lp(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wt(t,e),jt(e),o&512&&(st||a===null||uo(a,a.return)),a!==null&&o&4&&Lp(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wt(t,e),jt(e),o&512&&(st||a===null||uo(a,a.return)),e.flags&32){n=e.stateNode;try{Ml(n,"")}catch(g){Ae(e,e.return,g)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,Lp(e,n,a!==null?a.memoizedProps:n)),o&1024&&(Ip=!0);break;case 6:if(Wt(t,e),jt(e),o&4){if(e.stateNode===null)throw Error(V(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(g){Ae(e,e.return,g)}}break;case 3:if(bd=null,n=Xa,Xa=Xd(t.containerInfo),Wt(t,e),Xa=n,jt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(t.containerInfo)}catch(g){Ae(e,e.return,g)}Ip&&(Ip=!1,n1(e));break;case 4:o=Xa,Xa=Xd(e.stateNode.containerInfo),Wt(t,e),jt(e),Xa=o;break;case 12:Wt(t,e),jt(e);break;case 31:Wt(t,e),jt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ed(e,o)));break;case 13:Wt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=da()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ed(e,o)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,u=Ro,c=st;if(Ro=u||n,st=c||s,Wt(t,e),st=c,Ro=u,jt(e),o&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Ro||st||sr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{i=s.stateNode;var f=s.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null;i.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(g){Ae(s,s.return,g)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(g){Ae(s,s.return,g)}}}else if(t.tag===18){if(a===null){s=t;try{var p=s.stateNode;n?Y0(p,!0):Y0(s.stateNode,!1)}catch(g){Ae(s,s.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ed(e,a))));break;case 19:Wt(t,e),jt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ed(e,o)));break;case 30:break;case 21:break;default:Wt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Ky(o)){a=o;break}o=o.return}if(a==null)throw Error(V(160));switch(a.tag){case 27:var n=a.stateNode,r=_p(e);Bd(e,r,n);break;case 5:var l=a.stateNode;a.flags&32&&(Ml(l,""),a.flags&=-33);var i=_p(e);Bd(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,u=_p(e);pm(e,u,s);break;default:throw Error(V(161))}}catch(c){Ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;n1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ao(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$y(e,t.alternate,t),t=t.sibling}function sr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:An(4,t,t.return),sr(t);break;case 1:uo(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Wy(t,t.return,a),sr(t);break;case 27:$i(t.stateNode);case 26:case 5:uo(t,t.return),sr(t);break;case 22:t.memoizedState===null&&sr(t);break;case 30:sr(t);break;default:sr(t)}e=e.sibling}}function No(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,n=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:No(n,r,a),vs(4,r);break;case 1:if(No(n,r,a),o=r,n=o.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){Ae(o,o.return,u)}if(o=r,n=o.updateQueue,n!==null){var i=o.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)ty(s[n],i)}catch(u){Ae(o,o.return,u)}}a&&l&64&&Zy(r),Wi(r,r.return);break;case 27:Qy(r);case 26:case 5:No(n,r,a),a&&o===null&&l&4&&jy(r),Wi(r,r.return);break;case 12:No(n,r,a);break;case 31:No(n,r,a),a&&l&4&&t1(n,r);break;case 13:No(n,r,a),a&&l&4&&a1(n,r);break;case 22:r.memoizedState===null&&No(n,r,a),Wi(r,r.return);break;case 30:break;default:No(n,r,a)}t=t.sibling}}function fg(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ys(a))}function pg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ys(e))}function Ga(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r1(e,t,a,o),t=t.sibling}function r1(e,t,a,o){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ga(e,t,a,o),n&2048&&vs(9,t);break;case 1:Ga(e,t,a,o);break;case 3:Ga(e,t,a,o),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ys(e)));break;case 12:if(n&2048){Ga(e,t,a,o),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,i=r.onPostCommit;typeof i=="function"&&i(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Ae(t,t.return,s)}}else Ga(e,t,a,o);break;case 31:Ga(e,t,a,o);break;case 13:Ga(e,t,a,o);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Ga(e,t,a,o):ji(e,t):r._visibility&2?Ga(e,t,a,o):(r._visibility|=2,rl(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),n&2048&&fg(l,t);break;case 24:Ga(e,t,a,o),n&2048&&pg(t.alternate,t);break;default:Ga(e,t,a,o)}}function rl(e,t,a,o,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,i=a,s=o,u=l.flags;switch(l.tag){case 0:case 11:case 15:rl(r,l,i,s,n),vs(8,l);break;case 23:break;case 22:var c=l.stateNode;l.memoizedState!==null?c._visibility&2?rl(r,l,i,s,n):ji(r,l):(c._visibility|=2,rl(r,l,i,s,n)),n&&u&2048&&fg(l.alternate,l);break;case 24:rl(r,l,i,s,n),n&&u&2048&&pg(l.alternate,l);break;default:rl(r,l,i,s,n)}t=t.sibling}}function ji(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,n=o.flags;switch(o.tag){case 22:ji(a,o),n&2048&&fg(o.alternate,o);break;case 24:ji(a,o),n&2048&&pg(o.alternate,o);break;default:ji(a,o)}t=t.sibling}}var Hi=8192;function nl(e,t,a){if(e.subtreeFlags&Hi)for(e=e.child;e!==null;)l1(e,t,a),e=e.sibling}function l1(e,t,a){switch(e.tag){case 26:nl(e,t,a),e.flags&Hi&&e.memoizedState!==null&&bM(a,Xa,e.memoizedState,e.memoizedProps);break;case 5:nl(e,t,a);break;case 3:case 4:var o=Xa;Xa=Xd(e.stateNode.containerInfo),nl(e,t,a),Xa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Hi,Hi=16777216,nl(e,t,a),Hi=o):nl(e,t,a));break;default:nl(e,t,a)}}function i1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];xt=o,u1(o,e)}i1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)s1(e),e=e.sibling}function s1(e){switch(e.tag){case 0:case 11:case 15:Ni(e),e.flags&2048&&An(9,e,e.return);break;case 3:Ni(e);break;case 12:Ni(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hd(e)):Ni(e);break;default:Ni(e)}}function hd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];xt=o,u1(o,e)}i1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:An(8,t,t.return),hd(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,hd(t));break;default:hd(t)}e=e.sibling}}function u1(e,t){for(;xt!==null;){var a=xt;switch(a.tag){case 0:case 11:case 15:An(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ys(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xt=o;else e:for(a=e;xt!==null;){o=xt;var n=o.sibling,r=o.return;if(Jy(o),o===a){xt=null;break e}if(n!==null){n.return=r,xt=n;break e}xt=r}}}var z5={getCacheForType:function(e){var t=Et(ut),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Et(ut).controller.signal}},O5=typeof WeakMap=="function"?WeakMap:Map,ke=0,Pe=null,ve=null,Ce=0,Te=0,la=null,xn=!1,Fl=!1,mg=!1,Xo=0,at=0,Nn=0,pr=0,gg=0,ua=0,Nl=0,Ki=null,Qt=null,mm=!1,ic=0,d1=0,Pd=1/0,Hd=null,Ln=null,ft=0,_n=null,Dl=null,Uo=0,gm=0,hm=null,c1=null,Qi=0,xm=null;function pa(){return(ke&2)!==0&&Ce!==0?Ce&-Ce:le.T!==null?xg():wb()}function f1(){if(ua===0)if((Ce&536870912)===0||Le){var e=Gu;Gu<<=1,(Gu&3932160)===0&&(Gu=262144),ua=e}else ua=536870912;return e=ga.current,e!==null&&(e.flags|=32),ua}function $t(e,t,a){(e===Pe&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),bn(e,Ce,ua,!1)),hs(e,a),((ke&2)===0||e!==Pe)&&(e===Pe&&((ke&2)===0&&(pr|=a),at===4&&bn(e,Ce,ua,!1)),po(e))}function p1(e,t,a){if((ke&6)!==0)throw Error(V(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||gs(e,t),n=o?H5(e,t):kp(e,t,!0),r=o;do{if(n===0){Fl&&!o&&bn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!B5(a)){n=kp(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var i=e;n=Ki;var s=i.current.memoizedState.isDehydrated;if(s&&(Rl(i,l).flags|=256),l=kp(i,l,!1),l!==2){if(mg&&!s){i.errorRecoveryDisabledLanes|=r,pr|=r,n=4;break e}r=Qt,Qt=n,r!==null&&(Qt===null?Qt=r:Qt.push.apply(Qt,r))}n=l}if(r=!1,n!==2)continue}}if(n===1){Rl(e,0),bn(e,t,0,!0);break}e:{switch(o=e,r=n,r){case 0:case 1:throw Error(V(345));case 4:if((t&4194048)!==t)break;case 6:bn(o,t,ua,!xn);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(V(329))}if((t&62914560)===t&&(n=ic+300-da(),10<n)){if(bn(o,t,ua,!xn),Kd(o,0,!0)!==0)break e;Uo=t,o.timeoutHandle=D1(A0.bind(null,o,a,Qt,Hd,mm,t,ua,pr,Nl,xn,r,"Throttled",-0,0),n);break e}A0(o,a,Qt,Hd,mm,t,ua,pr,Nl,xn,r,null,-0,0)}}break}while(!0);po(e)}function A0(e,t,a,o,n,r,l,i,s,u,c,f,d,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oo},l1(t,r,f);var g=(r&62914560)===r?ic-da():(r&4194048)===r?d1-da():0;if(g=yM(f,g),g!==null){Uo=r,e.cancelPendingCommit=g(D0.bind(null,e,t,r,a,o,n,l,i,s,c,f,null,d,p)),bn(e,r,l,!u);return}}D0(e,t,r,a,o,n,l,i,s)}function B5(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var n=a[o],r=n.getSnapshot;n=n.value;try{if(!ma(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t,a,o){t&=~gg,t&=~pr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var n=t;0<n;){var r=31-fa(n),l=1<<r;o[r]=-1,n&=~l}a!==0&&xb(e,a,t)}function sc(){return(ke&6)===0?(Cs(0,!1),!1):!0}function hg(){if(ve!==null){if(Te===0)var e=ve.return;else e=ve,Bo=Sr=null,tg(e),Sl=null,rs=0,e=ve;for(;e!==null;)Yy(e.alternate,e),e=e.return;ve=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Uo=0,hg(),Pe=e,ve=a=Po(e.current,null),Ce=t,Te=0,la=null,xn=!1,Fl=gs(e,t),mg=!1,Nl=ua=gg=pr=Nn=at=0,Qt=Ki=null,mm=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var n=31-fa(o),r=1<<n;t|=e[n],o&=~r}return Xo=t,ec(),a}function m1(e,t){ge=null,le.H=is,t===Ul||t===ac?(t=u0(),Te=3):t===Wm?(t=u0(),Te=4):Te=t===dg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,la=t,ve===null&&(at=1,zd(e,Ta(t,e.current)))}function g1(){var e=ga.current;return e===null?!0:(Ce&4194048)===Ce?Na===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Na:!1}function h1(){var e=le.H;return le.H=is,e===null?is:e}function x1(){var e=le.A;return le.A=z5,e}function Ud(){at=4,xn||(Ce&4194048)!==Ce&&ga.current!==null||(Fl=!0),(Nn&134217727)===0&&(pr&134217727)===0||Pe===null||bn(Pe,Ce,ua,!1)}function kp(e,t,a){var o=ke;ke|=2;var n=h1(),r=x1();(Pe!==e||Ce!==t)&&(Hd=null,Rl(e,t)),t=!1;var l=at;e:do try{if(Te!==0&&ve!==null){var i=ve,s=la;switch(Te){case 8:hg(),l=6;break e;case 3:case 2:case 9:case 6:ga.current===null&&(t=!0);var u=Te;if(Te=0,la=null,bl(e,i,s,u),a&&Fl){l=0;break e}break;default:u=Te,Te=0,la=null,bl(e,i,s,u)}}P5(),l=at;break}catch(c){m1(e,c)}while(!0);return t&&e.shellSuspendCounter++,Bo=Sr=null,ke=o,le.H=n,le.A=r,ve===null&&(Pe=null,Ce=0,ec()),l}function P5(){for(;ve!==null;)b1(ve)}function H5(e,t){var a=ke;ke|=2;var o=h1(),n=x1();Pe!==e||Ce!==t?(Hd=null,Pd=da()+500,Rl(e,t)):Fl=gs(e,t);e:do try{if(Te!==0&&ve!==null){t=ve;var r=la;t:switch(Te){case 1:Te=0,la=null,bl(e,t,r,1);break;case 2:case 9:if(s0(r)){Te=0,la=null,N0(t);break}t=function(){Te!==2&&Te!==9||Pe!==e||(Te=7),po(e)},r.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:s0(r)?(Te=0,la=null,N0(t)):(Te=0,la=null,bl(e,t,r,7));break;case 5:var l=null;switch(ve.tag){case 26:l=ve.memoizedState;case 5:case 27:var i=ve;if(l?P1(l):i.stateNode.complete){Te=0,la=null;var s=i.sibling;if(s!==null)ve=s;else{var u=i.return;u!==null?(ve=u,uc(u)):ve=null}break t}}Te=0,la=null,bl(e,t,r,5);break;case 6:Te=0,la=null,bl(e,t,r,6);break;case 8:hg(),at=6;break e;default:throw Error(V(462))}}U5();break}catch(c){m1(e,c)}while(!0);return Bo=Sr=null,le.H=o,le.A=n,ke=a,ve!==null?0:(Pe=null,Ce=0,ec(),at)}function U5(){for(;ve!==null&&!uk();)b1(ve)}function b1(e){var t=Xy(e.alternate,e,Xo);e.memoizedProps=e.pendingProps,t===null?uc(e):ve=t}function N0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=_0(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=_0(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:tg(t);default:Yy(a,t),t=ve=Yb(t,Xo),t=Xy(a,t,Xo)}e.memoizedProps=e.pendingProps,t===null?uc(e):ve=t}function bl(e,t,a,o){Bo=Sr=null,tg(t),Sl=null,rs=0;var n=t.return;try{if(M5(e,n,t,a,Ce)){at=1,zd(e,Ta(a,e.current)),ve=null;return}}catch(r){if(n!==null)throw ve=n,r;at=1,zd(e,Ta(a,e.current)),ve=null;return}t.flags&32768?(Le||o===1?e=!0:Fl||(Ce&536870912)!==0?e=!1:(xn=e=!0,(o===2||o===9||o===3||o===6)&&(o=ga.current,o!==null&&o.tag===13&&(o.flags|=16384))),y1(t,e)):uc(t)}function uc(e){var t=e;do{if((t.flags&32768)!==0){y1(t,xn);return}e=t.return;var a=A5(t.alternate,t,Xo);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);at===0&&(at=5)}function y1(e,t){do{var a=N5(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);at=6,ve=null}function D0(e,t,a,o,n,r,l,i,s){e.cancelPendingCommit=null;do dc();while(ft!==0);if((ke&6)!==0)throw Error(V(327));if(t!==null){if(t===e.current)throw Error(V(177));if(r=t.lanes|t.childLanes,r|=Fm,yk(e,a,r,l,i,s),e===Pe&&(ve=Pe=null,Ce=0),Dl=t,_n=e,Uo=a,gm=r,hm=n,c1=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G5(Ld,function(){return L1(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=le.T,le.T=null,n=Me.p,Me.p=2,l=ke,ke|=4;try{D5(e,t,a)}finally{ke=l,Me.p=n,le.T=o}}ft=1,w1(),v1(),C1()}}function w1(){if(ft===1){ft=0;var e=_n,t=Dl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=le.T,le.T=null;var o=Me.p;Me.p=2;var n=ke;ke|=4;try{o1(t,e);var r=vm,l=Pb(e.containerInfo),i=r.focusedElem,s=r.selectionRange;if(l!==i&&i&&i.ownerDocument&&Bb(i.ownerDocument.documentElement,i)){if(s!==null&&Um(i)){var u=s.start,c=s.end;if(c===void 0&&(c=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(c,i.value.length);else{var f=i.ownerDocument||document,d=f&&f.defaultView||window;if(d.getSelection){var p=d.getSelection(),g=i.textContent.length,y=Math.min(s.start,g),w=s.end===void 0?y:Math.min(s.end,g);!p.extend&&y>w&&(l=w,w=y,y=l);var h=t0(i,y),x=t0(i,w);if(h&&x&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var m=f.createRange();m.setStart(h.node,h.offset),p.removeAllRanges(),y>w?(p.addRange(m),p.extend(x.node,x.offset)):(m.setEnd(x.node,x.offset),p.addRange(m))}}}}for(f=[],p=i;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<f.length;i++){var b=f[i];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Wd=!!wm,vm=wm=null}finally{ke=n,Me.p=o,le.T=a}}e.current=t,ft=2}}function v1(){if(ft===2){ft=0;var e=_n,t=Dl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=le.T,le.T=null;var o=Me.p;Me.p=2;var n=ke;ke|=4;try{$y(e,t.alternate,t)}finally{ke=n,Me.p=o,le.T=a}}ft=3}}function C1(){if(ft===4||ft===3){ft=0,dk();var e=_n,t=Dl,a=Uo,o=c1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,Dl=_n=null,S1(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ln=null),Dm(a),t=t.stateNode,ca&&typeof ca.onCommitFiberRoot=="function")try{ca.onCommitFiberRoot(ms,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=le.T,n=Me.p,Me.p=2,le.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var i=o[l];r(i.value,{componentStack:i.stack})}}finally{le.T=t,Me.p=n}}(Uo&3)!==0&&dc(),po(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===xm?Qi++:(Qi=0,xm=e):Qi=0,Cs(0,!1)}}function S1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ys(t)))}function dc(){return w1(),v1(),C1(),L1()}function L1(){if(ft!==5)return!1;var e=_n,t=gm;gm=0;var a=Dm(Uo),o=le.T,n=Me.p;try{Me.p=32>a?32:a,le.T=null,a=hm,hm=null;var r=_n,l=Uo;if(ft=0,Dl=_n=null,Uo=0,(ke&6)!==0)throw Error(V(331));var i=ke;if(ke|=4,s1(r.current),r1(r,r.current,l,a),ke=i,Cs(0,!1),ca&&typeof ca.onPostCommitFiberRoot=="function")try{ca.onPostCommitFiberRoot(ms,r)}catch{}return!0}finally{Me.p=n,le.T=o,S1(e,t)}}function R0(e,t,a){t=Ta(a,t),t=dm(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(hs(e,2),po(e))}function Ae(e,t,a){if(e.tag===3)R0(e,e,a);else for(;t!==null;){if(t.tag===3){R0(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ln===null||!Ln.has(o))){e=Ta(a,e),a=Hy(2),o=Sn(t,a,2),o!==null&&(Uy(a,o,t,e),hs(o,2),po(o));break}}t=t.return}}function Mp(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new O5;var n=new Set;o.set(t,n)}else n=o.get(t),n===void 0&&(n=new Set,o.set(t,n));n.has(a)||(mg=!0,n.add(a),e=F5.bind(null,e,t,a),t.then(e,e))}function F5(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Pe===e&&(Ce&a)===a&&(at===4||at===3&&(Ce&62914560)===Ce&&300>da()-ic?(ke&2)===0&&Rl(e,0):gg|=a,Nl===Ce&&(Nl=0)),po(e)}function _1(e,t){t===0&&(t=hb()),e=Cr(e,t),e!==null&&(hs(e,t),po(e))}function q5(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),_1(e,a)}function V5(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(V(314))}o!==null&&o.delete(t),_1(e,a)}function G5(e,t){return Am(e,t)}var Fd=null,ll=null,bm=!1,qd=!1,Ep=!1,yn=0;function po(e){e!==ll&&e.next===null&&(ll===null?Fd=ll=e:ll=ll.next=e),qd=!0,bm||(bm=!0,Y5())}function Cs(e,t){if(!Ep&&qd){Ep=!0;do for(var a=!1,o=Fd;o!==null;){if(!t)if(e!==0){var n=o.pendingLanes;if(n===0)var r=0;else{var l=o.suspendedLanes,i=o.pingedLanes;r=(1<<31-fa(42|e)+1)-1,r&=n&~(l&~i),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,z0(o,r))}else r=Ce,r=Kd(o,o===Pe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||gs(o,r)||(a=!0,z0(o,r));o=o.next}while(a);Ep=!1}}function X5(){I1()}function I1(){qd=bm=!1;var e=0;yn!==0&&eM()&&(e=yn);for(var t=da(),a=null,o=Fd;o!==null;){var n=o.next,r=k1(o,t);r===0?(o.next=null,a===null?Fd=n:a.next=n,n===null&&(ll=a)):(a=o,(e!==0||(r&3)!==0)&&(qd=!0)),o=n}ft!==0&&ft!==5||Cs(e,!1),yn!==0&&(yn=0)}function k1(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-fa(r),i=1<<l,s=n[l];s===-1?((i&a)===0||(i&o)!==0)&&(n[l]=bk(i,t)):s<=t&&(e.expiredLanes|=i),r&=~i}if(t=Pe,a=Ce,a=Kd(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&np(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||gs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&np(o),Dm(a)){case 2:case 8:a=mb;break;case 32:a=Ld;break;case 268435456:a=gb;break;default:a=Ld}return o=M1.bind(null,e),a=Am(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&np(o),e.callbackPriority=2,e.callbackNode=null,2}function M1(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=Ce;return o=Kd(e,e===Pe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(p1(e,o,t),k1(e,da()),e.callbackNode!=null&&e.callbackNode===a?M1.bind(null,e):null)}function z0(e,t){if(dc())return null;p1(e,t,!0)}function Y5(){aM(function(){(ke&6)!==0?Am(pb,X5):I1()})}function xg(){if(yn===0){var e=El;e===0&&(e=Vu,Vu<<=1,(Vu&261888)===0&&(Vu=256)),yn=e}return yn}function O0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:id(""+e)}function B0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Z5(e,t,a,o,n){if(t==="submit"&&a&&a.stateNode===n){var r=O0((n[Jt]||null).action),l=o.submitter;l&&(t=(t=l[Jt]||null)?O0(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var i=new Qd("action","action",null,o,n);e.push({event:i,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(yn!==0){var s=l?B0(n,l):new FormData(n);sm(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(i.preventDefault(),s=l?B0(n,l):new FormData(n),sm(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(td=0;td<Kp.length;td++)ad=Kp[td],P0=ad.toLowerCase(),H0=ad[0].toUpperCase()+ad.slice(1),Ya(P0,"on"+H0);var ad,P0,H0,td;Ya(Ub,"onAnimationEnd");Ya(Fb,"onAnimationIteration");Ya(qb,"onAnimationStart");Ya("dblclick","onDoubleClick");Ya("focusin","onFocus");Ya("focusout","onBlur");Ya(c5,"onTransitionRun");Ya(f5,"onTransitionStart");Ya(p5,"onTransitionCancel");Ya(Vb,"onTransitionEnd");kl("onMouseEnter",["mouseout","mouseover"]);kl("onMouseLeave",["mouseout","mouseover"]);kl("onPointerEnter",["pointerout","pointerover"]);kl("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ss));function E1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],n=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(c){Id(c)}n.currentTarget=null,r=s}else for(l=0;l<o.length;l++){if(i=o[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==r&&n.isPropagationStopped())break e;r=i,n.currentTarget=u;try{r(n)}catch(c){Id(c)}n.currentTarget=null,r=s}}}}function we(e,t){var a=t[qp];a===void 0&&(a=t[qp]=new Set);var o=e+"__bubble";a.has(o)||(T1(t,e,2,!1),a.add(o))}function Tp(e,t,a){var o=0;t&&(o|=4),T1(a,e,o,t)}var od="_reactListening"+Math.random().toString(36).slice(2);function bg(e){if(!e[od]){e[od]=!0,vb.forEach(function(a){a!=="selectionchange"&&(W5.has(a)||Tp(a,!1,e),Tp(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[od]||(t[od]=!0,Tp("selectionchange",!1,t))}}function T1(e,t,a,o){switch(V1(t)){case 2:var n=CM;break;case 8:n=SM;break;default:n=Cg}a=n.bind(null,t,a,e),n=void 0,!Zp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),o?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ap(e,t,a,o,n){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===n)break;if(l===4)for(l=o.return;l!==null;){var s=l.tag;if((s===3||s===4)&&l.stateNode.containerInfo===n)return;l=l.return}for(;i!==null;){if(l=ul(i),l===null)return;if(s=l.tag,s===5||s===6||s===26||s===27){o=r=l;continue e}i=i.parentNode}}o=o.return}Eb(function(){var u=r,c=Om(a),f=[];e:{var d=Gb.get(e);if(d!==void 0){var p=Qd,g=e;switch(e){case"keypress":if(ud(a)===0)break e;case"keydown":case"keyup":p=Vk;break;case"focusin":g="focus",p=up;break;case"focusout":g="blur",p=up;break;case"beforeblur":case"afterblur":p=up;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ak;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Yk;break;case Ub:case Fb:case qb:p=Rk;break;case Vb:p=Wk;break;case"scroll":case"scrollend":p=Ek;break;case"wheel":p=Kk;break;case"copy":case"cut":case"paste":p=Ok;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wx;break;case"toggle":case"beforetoggle":p=$k}var y=(t&4)!==0,w=!y&&(e==="scroll"||e==="scrollend"),h=y?d!==null?d+"Capture":null:d;y=[];for(var x=u,m;x!==null;){var b=x;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||h===null||(b=es(x,h),b!=null&&y.push(us(x,b,m))),w)break;x=x.return}0<y.length&&(d=new p(d,g,null,a,c),f.push({event:d,listeners:y}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&a!==Yp&&(g=a.relatedTarget||a.fromElement)&&(ul(g)||g[Bl]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=a.relatedTarget||a.toElement,p=u,g=g?ul(g):null,g!==null&&(w=ps(g),y=g.tag,g!==w||y!==5&&y!==27&&y!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Yx,b="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wx,b="onPointerLeave",h="onPointerEnter",x="pointer"),w=p==null?d:Bi(p),m=g==null?d:Bi(g),d=new y(b,x+"leave",p,a,c),d.target=w,d.relatedTarget=m,b=null,ul(c)===u&&(y=new y(h,x+"enter",g,a,c),y.target=m,y.relatedTarget=w,b=y),w=b,p&&g)t:{for(y=j5,h=p,x=g,m=0,b=h;b;b=y(b))m++;b=0;for(var C=x;C;C=y(C))b++;for(;0<m-b;)h=y(h),m--;for(;0<b-m;)x=y(x),b--;for(;m--;){if(h===x||x!==null&&h===x.alternate){y=h;break t}h=y(h),x=y(x)}y=null}else y=null;p!==null&&U0(f,d,p,y,!1),g!==null&&w!==null&&U0(f,w,g,y,!0)}}e:{if(d=u?Bi(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=$x;else if(Qx(d))if(zb)S=s5;else{S=l5;var v=r5}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&zm(u.elementType)&&(S=$x):S=i5;if(S&&(S=S(e,u))){Rb(f,S,a,c);break e}v&&v(e,d,u),e==="focusout"&&u&&d.type==="number"&&u.memoizedProps.value!=null&&Xp(d,"number",d.value)}switch(v=u?Bi(u):window,e){case"focusin":(Qx(v)||v.contentEditable==="true")&&(fl=v,Wp=u,qi=null);break;case"focusout":qi=Wp=fl=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,a0(f,a,c);break;case"selectionchange":if(d5)break;case"keydown":case"keyup":a0(f,a,c)}var _;if(Hm)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else cl?Nb(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Ab&&a.locale!=="ko"&&(cl||I!=="onCompositionStart"?I==="onCompositionEnd"&&cl&&(_=Tb()):(hn=c,Bm="value"in hn?hn.value:hn.textContent,cl=!0)),v=Vd(u,I),0<v.length&&(I=new Zx(I,e,null,a,c),f.push({event:I,listeners:v}),_?I.data=_:(_=Db(a),_!==null&&(I.data=_)))),(_=e5?t5(e,a):a5(e,a))&&(I=Vd(u,"onBeforeInput"),0<I.length&&(v=new Zx("onBeforeInput","beforeinput",null,a,c),f.push({event:v,listeners:I}),v.data=_)),Z5(f,e,u,a,c)}E1(f,t)})}function us(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vd(e,t){for(var a=t+"Capture",o=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=es(e,a),n!=null&&o.unshift(us(e,n,r)),n=es(e,t),n!=null&&o.push(us(e,n,r))),e.tag===3)return o;e=e.return}return[]}function j5(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U0(e,t,a,o,n){for(var r=t._reactName,l=[];a!==null&&a!==o;){var i=a,s=i.alternate,u=i.stateNode;if(i=i.tag,s!==null&&s===o)break;i!==5&&i!==26&&i!==27||u===null||(s=u,n?(u=es(a,r),u!=null&&l.unshift(us(a,u,s))):n||(u=es(a,r),u!=null&&l.push(us(a,u,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var K5=/\r\n?/g,Q5=/\u0000|\uFFFD/g;function F0(e){return(typeof e=="string"?e:""+e).replace(K5,`
`).replace(Q5,"")}function A1(e,t){return t=F0(t),F0(e)===t}function Ne(e,t,a,o,n,r){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ml(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ml(e,""+o);break;case"className":Yu(e,"class",o);break;case"tabIndex":Yu(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yu(e,a,o);break;case"style":Mb(e,o,r);break;case"data":if(t!=="object"){Yu(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=id(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",n.name,n,null),Ne(e,t,"formEncType",n.formEncType,n,null),Ne(e,t,"formMethod",n.formMethod,n,null),Ne(e,t,"formTarget",n.formTarget,n,null)):(Ne(e,t,"encType",n.encType,n,null),Ne(e,t,"method",n.method,n,null),Ne(e,t,"target",n.target,n,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=id(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Oo);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(V(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(V(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=id(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),ld(e,"popover",o);break;case"xlinkActuate":Mo(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Mo(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Mo(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Mo(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Mo(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Mo(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Mo(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Mo(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Mo(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ld(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kk.get(a)||a,ld(e,a,o))}}function ym(e,t,a,o,n,r){switch(a){case"style":Mb(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(V(61));if(a=o.__html,a!=null){if(n.children!=null)throw Error(V(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ml(e,o):(typeof o=="number"||typeof o=="bigint")&&Ml(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cb.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Jt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof o=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,n);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ld(e,a,o)}}}function Tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(V(137,t));default:Ne(e,t,r,l,a,null)}}n&&Ne(e,t,"srcSet",a.srcSet,a,null),o&&Ne(e,t,"src",a.src,a,null);return;case"input":we("invalid",e);var i=r=l=n=null,s=null,u=null;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];if(c!=null)switch(o){case"name":n=c;break;case"type":l=c;break;case"checked":s=c;break;case"defaultChecked":u=c;break;case"value":r=c;break;case"defaultValue":i=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(V(137,t));break;default:Ne(e,t,o,c,a,null)}}_b(e,r,i,s,u,l,n,!1);return;case"select":we("invalid",e),o=l=r=null;for(n in a)if(a.hasOwnProperty(n)&&(i=a[n],i!=null))switch(n){case"value":r=i;break;case"defaultValue":l=i;break;case"multiple":o=i;default:Ne(e,t,n,i,a,null)}t=r,a=l,e.multiple=!!o,t!=null?wl(e,!!o,t,!1):a!=null&&wl(e,!!o,a,!0);return;case"textarea":we("invalid",e),r=n=o=null;for(l in a)if(a.hasOwnProperty(l)&&(i=a[l],i!=null))switch(l){case"value":o=i;break;case"defaultValue":n=i;break;case"children":r=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(V(91));break;default:Ne(e,t,l,i,a,null)}kb(e,o,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(o=a[s],o!=null)&&(s==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ne(e,t,s,o,a,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<ss.length;o++)we(ss[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(V(137,t));default:Ne(e,t,u,o,a,null)}return;default:if(zm(t)){for(c in a)a.hasOwnProperty(c)&&(o=a[c],o!==void 0&&ym(e,t,c,o,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(o=a[i],o!=null&&Ne(e,t,i,o,a,null))}function $5(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,l=null,i=null,s=null,u=null,c=null;for(p in a){var f=a[p];if(a.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=f;default:o.hasOwnProperty(p)||Ne(e,t,p,null,o,f)}}for(var d in o){var p=o[d];if(f=a[d],o.hasOwnProperty(d)&&(p!=null||f!=null))switch(d){case"type":r=p;break;case"name":n=p;break;case"checked":u=p;break;case"defaultChecked":c=p;break;case"value":l=p;break;case"defaultValue":i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(V(137,t));break;default:p!==f&&Ne(e,t,d,p,o,f)}}Gp(e,l,i,s,u,c,r,n);return;case"select":p=l=i=d=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":p=s;default:o.hasOwnProperty(r)||Ne(e,t,r,null,o,s)}for(n in o)if(r=o[n],s=a[n],o.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":d=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:r!==s&&Ne(e,t,n,r,o,s)}t=i,a=l,o=p,d!=null?wl(e,!!a,d,!1):!!o!=!!a&&(t!=null?wl(e,!!a,t,!0):wl(e,!!a,a?[]:"",!1));return;case"textarea":p=d=null;for(i in a)if(n=a[i],a.hasOwnProperty(i)&&n!=null&&!o.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:Ne(e,t,i,null,o,n)}for(l in o)if(n=o[l],r=a[l],o.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":d=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(V(91));break;default:n!==r&&Ne(e,t,l,n,o,r)}Ib(e,d,p);return;case"option":for(var g in a)d=a[g],a.hasOwnProperty(g)&&d!=null&&!o.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ne(e,t,g,null,o,d));for(s in o)d=o[s],p=a[s],o.hasOwnProperty(s)&&d!==p&&(d!=null||p!=null)&&(s==="selected"?e.selected=d&&typeof d!="function"&&typeof d!="symbol":Ne(e,t,s,d,o,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in a)d=a[y],a.hasOwnProperty(y)&&d!=null&&!o.hasOwnProperty(y)&&Ne(e,t,y,null,o,d);for(u in o)if(d=o[u],p=a[u],o.hasOwnProperty(u)&&d!==p&&(d!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(V(137,t));break;default:Ne(e,t,u,d,o,p)}return;default:if(zm(t)){for(var w in a)d=a[w],a.hasOwnProperty(w)&&d!==void 0&&!o.hasOwnProperty(w)&&ym(e,t,w,void 0,o,d);for(c in o)d=o[c],p=a[c],!o.hasOwnProperty(c)||d===p||d===void 0&&p===void 0||ym(e,t,c,d,o,p);return}}for(var h in a)d=a[h],a.hasOwnProperty(h)&&d!=null&&!o.hasOwnProperty(h)&&Ne(e,t,h,null,o,d);for(f in o)d=o[f],p=a[f],!o.hasOwnProperty(f)||d===p||d==null&&p==null||Ne(e,t,f,d,o,p)}function q0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function J5(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var n=a[o],r=n.transferSize,l=n.initiatorType,i=n.duration;if(r&&i&&q0(l)){for(l=0,i=n.responseEnd,o+=1;o<a.length;o++){var s=a[o],u=s.startTime;if(u>i)break;var c=s.transferSize,f=s.initiatorType;c&&q0(f)&&(s=s.responseEnd,l+=c*(s<i?1:(i-u)/(s-u)))}if(--o,t+=8*(r+l)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wm=null,vm=null;function Gd(e){return e.nodeType===9?e:e.ownerDocument}function V0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Np=null;function eM(){var e=window.event;return e&&e.type==="popstate"?e===Np?!1:(Np=e,!0):(Np=null,!1)}var D1=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,aM=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(e){return G0.resolve(null).then(e).catch(oM)}:D1;function oM(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function X0(e,t){var a=t,o=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(n),Ol(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")$i(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,$i(a);for(var r=a.firstChild;r;){var l=r.nextSibling,i=r.nodeName;r[xs]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&$i(e.ownerDocument.body);a=n}while(a);Ol(t)}function Y0(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sm(a),Rm(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nM(e,t,a,o){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[xs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Da(e.nextSibling),e===null)break}return null}function rM(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Da(e.nextSibling),e===null))return null;return e}function R1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Da(e.nextSibling),e===null))return null;return e}function Lm(e){return e.data==="$?"||e.data==="$~"}function _m(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lM(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Im=null;function Z0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Da(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function W0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function z1(e,t,a){switch(t=Gd(a),e){case"html":if(e=t.documentElement,!e)throw Error(V(452));return e;case"head":if(e=t.head,!e)throw Error(V(453));return e;case"body":if(e=t.body,!e)throw Error(V(454));return e;default:throw Error(V(451))}}function $i(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rm(e)}var Ra=new Map,j0=new Set;function Xd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yo=Me.d;Me.d={f:iM,r:sM,D:uM,C:dM,L:cM,m:fM,X:mM,S:pM,M:gM};function iM(){var e=Yo.f(),t=sc();return e||t}function sM(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?My(t):Yo.r(e)}var ql=typeof document>"u"?null:document;function O1(e,t,a){var o=ql;if(o&&typeof t=="string"&&t){var n=Ea(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),j0.has(n)||(j0.add(n),e={rel:e,crossOrigin:a,href:t},o.querySelector(n)===null&&(t=o.createElement("link"),Tt(t,"link",e),bt(t),o.head.appendChild(t)))}}function uM(e){Yo.D(e),O1("dns-prefetch",e,null)}function dM(e,t){Yo.C(e,t),O1("preconnect",e,t)}function cM(e,t,a){Yo.L(e,t,a);var o=ql;if(o&&e&&t){var n='link[rel="preload"][as="'+Ea(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ea(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ea(a.imageSizes)+'"]')):n+='[href="'+Ea(e)+'"]';var r=n;switch(t){case"style":r=zl(e);break;case"script":r=Vl(e)}Ra.has(r)||(e=Ye({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ra.set(r,e),o.querySelector(n)!==null||t==="style"&&o.querySelector(Ss(r))||t==="script"&&o.querySelector(Ls(r))||(t=o.createElement("link"),Tt(t,"link",e),bt(t),o.head.appendChild(t)))}}function fM(e,t){Yo.m(e,t);var a=ql;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Ea(o)+'"][href="'+Ea(e)+'"]',r=n;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Vl(e)}if(!Ra.has(r)&&(e=Ye({rel:"modulepreload",href:e},t),Ra.set(r,e),a.querySelector(n)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ls(r)))return}o=a.createElement("link"),Tt(o,"link",e),bt(o),a.head.appendChild(o)}}}function pM(e,t,a){Yo.S(e,t,a);var o=ql;if(o&&e){var n=yl(o).hoistableStyles,r=zl(e);t=t||"default";var l=n.get(r);if(!l){var i={loading:0,preload:null};if(l=o.querySelector(Ss(r)))i.loading=5;else{e=Ye({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ra.get(r))&&yg(e,a);var s=l=o.createElement("link");bt(s),Tt(s,"link",e),s._p=new Promise(function(u,c){s.onload=u,s.onerror=c}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,xd(l,t,o)}l={type:"stylesheet",instance:l,count:1,state:i},n.set(r,l)}}}function mM(e,t){Yo.X(e,t);var a=ql;if(a&&e){var o=yl(a).hoistableScripts,n=Vl(e),r=o.get(n);r||(r=a.querySelector(Ls(n)),r||(e=Ye({src:e,async:!0},t),(t=Ra.get(n))&&wg(e,t),r=a.createElement("script"),bt(r),Tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function gM(e,t){Yo.M(e,t);var a=ql;if(a&&e){var o=yl(a).hoistableScripts,n=Vl(e),r=o.get(n);r||(r=a.querySelector(Ls(n)),r||(e=Ye({src:e,async:!0,type:"module"},t),(t=Ra.get(n))&&wg(e,t),r=a.createElement("script"),bt(r),Tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(n,r))}}function K0(e,t,a,o){var n=(n=wn.current)?Xd(n):null;if(!n)throw Error(V(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zl(a.href),a=yl(n).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zl(a.href);var r=yl(n).hoistableStyles,l=r.get(e);if(l||(n=n.ownerDocument||n,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=n.querySelector(Ss(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Ra.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ra.set(e,a),r||hM(n,e,a,l.state))),t&&o===null)throw Error(V(528,""));return l}if(t&&o!==null)throw Error(V(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vl(a),a=yl(n).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(V(444,e))}}function zl(e){return'href="'+Ea(e)+'"'}function Ss(e){return'link[rel="stylesheet"]['+e+"]"}function B1(e){return Ye({},e,{"data-precedence":e.precedence,precedence:null})}function hM(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Tt(t,"link",a),bt(t),e.head.appendChild(t))}function Vl(e){return'[src="'+Ea(e)+'"]'}function Ls(e){return"script[async]"+e}function Q0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ea(a.href)+'"]');if(o)return t.instance=o,bt(o),o;var n=Ye({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),bt(o),Tt(o,"style",n),xd(o,a.precedence,e),t.instance=o;case"stylesheet":n=zl(a.href);var r=e.querySelector(Ss(n));if(r)return t.state.loading|=4,t.instance=r,bt(r),r;o=B1(a),(n=Ra.get(n))&&yg(o,n),r=(e.ownerDocument||e).createElement("link"),bt(r);var l=r;return l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Tt(r,"link",o),t.state.loading|=4,xd(r,a.precedence,e),t.instance=r;case"script":return r=Vl(a.src),(n=e.querySelector(Ls(r)))?(t.instance=n,bt(n),n):(o=a,(n=Ra.get(r))&&(o=Ye({},a),wg(o,n)),e=e.ownerDocument||e,n=e.createElement("script"),bt(n),Tt(n,"link",o),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(V(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,xd(o,a.precedence,e));return t.instance}function xd(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=o.length?o[o.length-1]:null,r=n,l=0;l<o.length;l++){var i=o[l];if(i.dataset.precedence===t)r=i;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var bd=null;function $0(e,t,a){if(bd===null){var o=new Map,n=bd=new Map;n.set(a,o)}else n=bd,o=n.get(a),o||(o=new Map,n.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[xs]||r[kt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var i=o.get(l);i?i.push(r):o.set(l,[r])}}return o}function J0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function xM(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function P1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bM(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=zl(o.href),r=t.querySelector(Ss(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yd.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,bt(r);return}r=t.ownerDocument||t,o=B1(o),(n=Ra.get(n))&&yg(o,n),r=r.createElement("link"),bt(r);var l=r;l._p=new Promise(function(i,s){l.onload=i,l.onerror=s}),Tt(r,"link",o),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yd.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Dp=0;function yM(e,t){return e.stylesheets&&e.count===0&&yd(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&yd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Dp===0&&(Dp=62500*J5());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yd(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Dp?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(n)}}:null}function Yd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zd=null;function yd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zd=new Map,t.forEach(wM,e),Zd=null,Yd.call(e))}function wM(e,t){if(!(t.state.loading&4)){var a=Zd.get(e);if(a)var o=a.get(null);else{a=new Map,Zd.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var l=n[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),o=l)}o&&a.set(null,o)}n=t.instance,l=n.getAttribute("data-precedence"),r=a.get(l)||o,r===o&&a.set(null,n),a.set(l,n),this.count++,o=Yd.bind(this),n.addEventListener("load",o),n.addEventListener("error",o),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var ds={$$typeof:zo,Provider:null,Consumer:null,_currentValue:ur,_currentValue2:ur,_threadCount:0};function vM(e,t,a,o,n,r,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.hiddenUpdates=rp(null),this.identifierPrefix=o,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function H1(e,t,a,o,n,r,l,i,s,u,c,f){return e=new vM(e,t,a,l,s,u,c,f,i),t=1,r===!0&&(t|=24),r=sa(3,null,null,t),e.current=r,r.stateNode=e,t=Ym(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:a,cache:t},jm(r),e}function U1(e){return e?(e=gl,e):gl}function F1(e,t,a,o,n,r){n=U1(n),o.context===null?o.context=n:o.pendingContext=n,o=Cn(t),o.payload={element:a},r=r===void 0?null:r,r!==null&&(o.callback=r),a=Sn(e,o,t),a!==null&&($t(a,e,t),Gi(a,e,t))}function eb(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function vg(e,t){eb(e,t),(e=e.alternate)&&eb(e,t)}function q1(e){if(e.tag===13||e.tag===31){var t=Cr(e,67108864);t!==null&&$t(t,e,67108864),vg(e,67108864)}}function tb(e){if(e.tag===13||e.tag===31){var t=pa();t=Nm(t);var a=Cr(e,t);a!==null&&$t(a,e,t),vg(e,t)}}var Wd=!0;function CM(e,t,a,o){var n=le.T;le.T=null;var r=Me.p;try{Me.p=2,Cg(e,t,a,o)}finally{Me.p=r,le.T=n}}function SM(e,t,a,o){var n=le.T;le.T=null;var r=Me.p;try{Me.p=8,Cg(e,t,a,o)}finally{Me.p=r,le.T=n}}function Cg(e,t,a,o){if(Wd){var n=km(o);if(n===null)Ap(e,t,o,jd,a),ab(e,o);else if(_M(n,e,t,a,o))o.stopPropagation();else if(ab(e,o),t&4&&-1<LM.indexOf(e)){for(;n!==null;){var r=Pl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=lr(r.pendingLanes);if(l!==0){var i=r;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-fa(l);i.entanglements[1]|=s,l&=~s}po(r),(ke&6)===0&&(Pd=da()+500,Cs(0,!1))}}break;case 31:case 13:i=Cr(r,2),i!==null&&$t(i,r,2),sc(),vg(r,2)}if(r=km(o),r===null&&Ap(e,t,o,jd,a),r===n)break;n=r}n!==null&&o.stopPropagation()}else Ap(e,t,o,null,a)}}function km(e){return e=Om(e),Sg(e)}var jd=null;function Sg(e){if(jd=null,e=ul(e),e!==null){var t=ps(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=sb(t),e!==null)return e;e=null}else if(a===31){if(e=ub(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jd=e,null}function V1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ck()){case pb:return 2;case mb:return 8;case Ld:case fk:return 32;case gb:return 268435456;default:return 32}default:return 32}}var Mm=!1,In=null,kn=null,Mn=null,cs=new Map,fs=new Map,mn=[],LM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ab(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":cs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(t.pointerId)}}function Di(e,t,a,o,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Pl(t),t!==null&&q1(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function _M(e,t,a,o,n){switch(t){case"focusin":return In=Di(In,e,t,a,o,n),!0;case"dragenter":return kn=Di(kn,e,t,a,o,n),!0;case"mouseover":return Mn=Di(Mn,e,t,a,o,n),!0;case"pointerover":var r=n.pointerId;return cs.set(r,Di(cs.get(r)||null,e,t,a,o,n)),!0;case"gotpointercapture":return r=n.pointerId,fs.set(r,Di(fs.get(r)||null,e,t,a,o,n)),!0}return!1}function G1(e){var t=ul(e.target);if(t!==null){var a=ps(t);if(a!==null){if(t=a.tag,t===13){if(t=sb(a),t!==null){e.blockedOn=t,Hx(e.priority,function(){tb(a)});return}}else if(t===31){if(t=ub(a),t!==null){e.blockedOn=t,Hx(e.priority,function(){tb(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=km(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yp=o,a.target.dispatchEvent(o),Yp=null}else return t=Pl(a),t!==null&&q1(t),e.blockedOn=a,!1;t.shift()}return!0}function ob(e,t,a){wd(e)&&a.delete(t)}function IM(){Mm=!1,In!==null&&wd(In)&&(In=null),kn!==null&&wd(kn)&&(kn=null),Mn!==null&&wd(Mn)&&(Mn=null),cs.forEach(ob),fs.forEach(ob)}function nd(e,t){e.blockedOn===t&&(e.blockedOn=null,Mm||(Mm=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,IM)))}var rd=null;function nb(e){rd!==e&&(rd=e,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,function(){rd===e&&(rd=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],n=e[t+2];if(typeof o!="function"){if(Sg(o||a)===null)continue;break}var r=Pl(a);r!==null&&(e.splice(t,3),t-=3,sm(r,{pending:!0,data:n,method:a.method,action:o},o,n))}}))}function Ol(e){function t(s){return nd(s,e)}In!==null&&nd(In,e),kn!==null&&nd(kn,e),Mn!==null&&nd(Mn,e),cs.forEach(t),fs.forEach(t);for(var a=0;a<mn.length;a++){var o=mn[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<mn.length&&(a=mn[0],a.blockedOn===null);)G1(a),a.blockedOn===null&&mn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var n=a[o],r=a[o+1],l=n[Jt]||null;if(typeof r=="function")l||nb(a);else if(l){var i=null;if(r&&r.hasAttribute("formAction")){if(n=r,l=r[Jt]||null)i=l.formAction;else if(Sg(n)!==null)continue}else i=l.action;typeof i=="function"?a[o+1]=i:(a.splice(o,3),o-=3),nb(a)}}}function X1(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return n=l})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Lg(e){this._internalRoot=e}cc.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));var a=t.current,o=pa();F1(a,o,e,t,null,null)};cc.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;F1(e.current,2,null,e,null,null),sc(),t[Bl]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var t=wb();e={blockedOn:null,target:e,priority:t};for(var a=0;a<mn.length&&t!==0&&t<mn[a].priority;a++);mn.splice(a,0,e),a===0&&G1(e)}};var rb=lb.version;if(rb!=="19.2.8")throw Error(V(527,rb,"19.2.8"));Me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=nk(t),e=e!==null?db(e):null,e=e===null?null:e.stateNode,e};var kM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ri.isDisabled&&Ri.supportsFiber))try{ms=Ri.inject(kM),ca=Ri}catch{}var Ri;fc.createRoot=function(e,t){if(!ib(e))throw Error(V(299));var a=!1,o="",n=Oy,r=By,l=Py;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=H1(e,1,!1,null,null,a,o,null,n,r,l,X1),e[Bl]=t.current,bg(e),new Lg(t)};fc.hydrateRoot=function(e,t,a){if(!ib(e))throw Error(V(299));var o=!1,n="",r=Oy,l=By,i=Py,s=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=H1(e,1,!0,t,a??null,o,n,s,r,l,i,X1),t.context=U1(null),a=t.current,o=pa(),o=Nm(o),n=Cn(o),n.callback=null,Sn(a,n,o),a=o,t.current.lanes=a,hs(t,a),po(t),e[Bl]=t.current,bg(e),new cc(t)};fc.version="19.2.8"});var _g=Zt((oD,W1)=>{"use strict";function Z1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z1)}catch(e){console.error(e)}}Z1(),W1.exports=Y1()});var K1=Zt(pc=>{"use strict";var MM=Symbol.for("react.transitional.element"),EM=Symbol.for("react.fragment");function j1(e,t,a){var o=null;if(a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:MM,type:e,key:o,ref:t!==void 0?t:null,props:a}}pc.Fragment=EM;pc.jsx=j1;pc.jsxs=j1});var Z=Zt((rD,Q1)=>{"use strict";Q1.exports=K1()});var z2=Zt(R2=>{"use strict";var ri=oe();function SE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var LE=typeof Object.is=="function"?Object.is:SE,_E=ri.useState,IE=ri.useEffect,kE=ri.useLayoutEffect,ME=ri.useDebugValue;function EE(e,t){var a=t(),o=_E({inst:{value:a,getSnapshot:t}}),n=o[0].inst,r=o[1];return kE(function(){n.value=a,n.getSnapshot=t,mh(n)&&r({inst:n})},[e,a,t]),IE(function(){return mh(n)&&r({inst:n}),e(function(){mh(n)&&r({inst:n})})},[e]),ME(a),a}function mh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!LE(e,a)}catch{return!0}}function TE(e,t){return t()}var AE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TE:EE;R2.useSyncExternalStore=ri.useSyncExternalStore!==void 0?ri.useSyncExternalStore:AE});var B2=Zt(($7,O2)=>{"use strict";O2.exports=z2()});var H2=Zt(P2=>{"use strict";var nf=oe(),NE=B2();function DE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var RE=typeof Object.is=="function"?Object.is:DE,zE=NE.useSyncExternalStore,OE=nf.useRef,BE=nf.useEffect,PE=nf.useMemo,HE=nf.useDebugValue;P2.useSyncExternalStoreWithSelector=function(e,t,a,o,n){var r=OE(null);if(r.current===null){var l={hasValue:!1,value:null};r.current=l}else l=r.current;r=PE(function(){function s(p){if(!u){if(u=!0,c=p,p=o(p),n!==void 0&&l.hasValue){var g=l.value;if(n(g,p))return f=g}return f=p}if(g=f,RE(c,p))return g;var y=o(p);return n!==void 0&&n(g,y)?(c=p,g):(c=p,f=y)}var u=!1,c,f,d=a===void 0?null:a;return[function(){return s(t())},d===null?void 0:function(){return s(d())}]},[t,a,o,n]);var i=zE(e,r[0],r[1]);return BE(function(){l.hasValue=!0,l.value=i},[i]),HE(i),i}});var F2=Zt((eB,U2)=>{"use strict";U2.exports=H2()});var W8={};zI(W8,{mountCanvas:()=>X8,unmountCanvas:()=>Z8,updateCanvas:()=>Y8});var E_=B(_g(),1);var Si=B(oe(),1);var Je=B(oe(),1);var z=B(Z()),O=B(oe());function ot(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let a=0,o;a<e.length;a++)(o=ot(e[a]))!==""&&(t+=(t&&" ")+o);else for(let a in e)e[a]&&(t+=(t&&" ")+a);return t}var TM={value:()=>{}};function J1(){for(var e=0,t=arguments.length,a={},o;e<t;++e){if(!(o=arguments[e]+"")||o in a||/[\s.]/.test(o))throw new Error("illegal type: "+o);a[o]=[]}return new mc(a)}function mc(e){this._=e}function AM(e,t){return e.trim().split(/^|\s+/).map(function(a){var o="",n=a.indexOf(".");if(n>=0&&(o=a.slice(n+1),a=a.slice(0,n)),a&&!t.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:o}})}mc.prototype=J1.prototype={constructor:mc,on:function(e,t){var a=this._,o=AM(e+"",a),n,r=-1,l=o.length;if(arguments.length<2){for(;++r<l;)if((n=(e=o[r]).type)&&(n=NM(a[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<l;)if(n=(e=o[r]).type)a[n]=$1(a[n],e.name,t);else if(t==null)for(n in a)a[n]=$1(a[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var a in t)e[a]=t[a].slice();return new mc(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var a=new Array(n),o=0,n,r;o<n;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,a)},apply:function(e,t,a){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,r=o.length;n<r;++n)o[n].value.apply(t,a)}};function NM(e,t){for(var a=0,o=e.length,n;a<o;++a)if((n=e[a]).name===t)return n.value}function $1(e,t,a){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=TM,e=e.slice(0,o).concat(e.slice(o+1));break}return a!=null&&e.push({name:t,value:a}),e}var Lr=J1;var gc="http://www.w3.org/1999/xhtml",Ig={svg:"http://www.w3.org/2000/svg",xhtml:gc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Zo(e){var t=e+="",a=t.indexOf(":");return a>=0&&(t=e.slice(0,a))!=="xmlns"&&(e=e.slice(a+1)),Ig.hasOwnProperty(t)?{space:Ig[t],local:e}:e}function DM(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===gc&&t.documentElement.namespaceURI===gc?t.createElement(e):t.createElementNS(a,e)}}function RM(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function hc(e){var t=Zo(e);return(t.local?RM:DM)(t)}function zM(){}function _r(e){return e==null?zM:function(){return this.querySelector(e)}}function ew(e){typeof e!="function"&&(e=_r(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=new Array(l),s,u,c=0;c<l;++c)(s=r[c])&&(u=e.call(s,s.__data__,c,r))&&("__data__"in s&&(u.__data__=s.__data__),i[c]=u);return new nt(o,this._parents)}function kg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function OM(){return[]}function _s(e){return e==null?OM:function(){return this.querySelectorAll(e)}}function BM(e){return function(){return kg(e.apply(this,arguments))}}function tw(e){typeof e=="function"?e=BM(e):e=_s(e);for(var t=this._groups,a=t.length,o=[],n=[],r=0;r<a;++r)for(var l=t[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&(o.push(e.call(s,s.__data__,u,l)),n.push(s));return new nt(o,n)}function Is(e){return function(){return this.matches(e)}}function xc(e){return function(t){return t.matches(e)}}var PM=Array.prototype.find;function HM(e){return function(){return PM.call(this.children,e)}}function UM(){return this.firstElementChild}function aw(e){return this.select(e==null?UM:HM(typeof e=="function"?e:xc(e)))}var FM=Array.prototype.filter;function qM(){return Array.from(this.children)}function VM(e){return function(){return FM.call(this.children,e)}}function ow(e){return this.selectAll(e==null?qM:VM(typeof e=="function"?e:xc(e)))}function nw(e){typeof e!="function"&&(e=Is(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new nt(o,this._parents)}function bc(e){return new Array(e.length)}function rw(){return new nt(this._enter||this._groups.map(bc),this._parents)}function ks(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}ks.prototype={constructor:ks,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function lw(e){return function(){return e}}function GM(e,t,a,o,n,r){for(var l=0,i,s=t.length,u=r.length;l<u;++l)(i=t[l])?(i.__data__=r[l],o[l]=i):a[l]=new ks(e,r[l]);for(;l<s;++l)(i=t[l])&&(n[l]=i)}function XM(e,t,a,o,n,r,l){var i,s,u=new Map,c=t.length,f=r.length,d=new Array(c),p;for(i=0;i<c;++i)(s=t[i])&&(d[i]=p=l.call(s,s.__data__,i,t)+"",u.has(p)?n[i]=s:u.set(p,s));for(i=0;i<f;++i)p=l.call(e,r[i],i,r)+"",(s=u.get(p))?(o[i]=s,s.__data__=r[i],u.delete(p)):a[i]=new ks(e,r[i]);for(i=0;i<c;++i)(s=t[i])&&u.get(d[i])===s&&(n[i]=s)}function YM(e){return e.__data__}function iw(e,t){if(!arguments.length)return Array.from(this,YM);var a=t?XM:GM,o=this._parents,n=this._groups;typeof e!="function"&&(e=lw(e));for(var r=n.length,l=new Array(r),i=new Array(r),s=new Array(r),u=0;u<r;++u){var c=o[u],f=n[u],d=f.length,p=ZM(e.call(c,c&&c.__data__,u,o)),g=p.length,y=i[u]=new Array(g),w=l[u]=new Array(g),h=s[u]=new Array(d);a(c,f,y,w,h,p,t);for(var x=0,m=0,b,C;x<g;++x)if(b=y[x]){for(x>=m&&(m=x+1);!(C=w[m])&&++m<g;);b._next=C||null}}return l=new nt(l,o),l._enter=i,l._exit=s,l}function ZM(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function sw(){return new nt(this._exit||this._groups.map(bc),this._parents)}function uw(e,t,a){var o=this.enter(),n=this,r=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),a==null?r.remove():a(r),o&&n?o.merge(n).order():n}function dw(e){for(var t=e.selection?e.selection():e,a=this._groups,o=t._groups,n=a.length,r=o.length,l=Math.min(n,r),i=new Array(n),s=0;s<l;++s)for(var u=a[s],c=o[s],f=u.length,d=i[s]=new Array(f),p,g=0;g<f;++g)(p=u[g]||c[g])&&(d[g]=p);for(;s<n;++s)i[s]=a[s];return new nt(i,this._parents)}function cw(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var o=e[t],n=o.length-1,r=o[n],l;--n>=0;)(l=o[n])&&(r&&l.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(l,r),r=l);return this}function fw(e){e||(e=WM);function t(f,d){return f&&d?e(f.__data__,d.__data__):!f-!d}for(var a=this._groups,o=a.length,n=new Array(o),r=0;r<o;++r){for(var l=a[r],i=l.length,s=n[r]=new Array(i),u,c=0;c<i;++c)(u=l[c])&&(s[c]=u);s.sort(t)}return new nt(n,this._parents).order()}function WM(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function pw(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function mw(){return Array.from(this)}function gw(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length;n<r;++n){var l=o[n];if(l)return l}return null}function hw(){let e=0;for(let t of this)++e;return e}function xw(){return!this.node()}function bw(e){for(var t=this._groups,a=0,o=t.length;a<o;++a)for(var n=t[a],r=0,l=n.length,i;r<l;++r)(i=n[r])&&e.call(i,i.__data__,r,n);return this}function jM(e){return function(){this.removeAttribute(e)}}function KM(e){return function(){this.removeAttributeNS(e.space,e.local)}}function QM(e,t){return function(){this.setAttribute(e,t)}}function $M(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function JM(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttribute(e):this.setAttribute(e,a)}}function e4(e,t){return function(){var a=t.apply(this,arguments);a==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function yw(e,t){var a=Zo(e);if(arguments.length<2){var o=this.node();return a.local?o.getAttributeNS(a.space,a.local):o.getAttribute(a)}return this.each((t==null?a.local?KM:jM:typeof t=="function"?a.local?e4:JM:a.local?$M:QM)(a,t))}function yc(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function t4(e){return function(){this.style.removeProperty(e)}}function a4(e,t,a){return function(){this.style.setProperty(e,t,a)}}function o4(e,t,a){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,a)}}function ww(e,t,a){return arguments.length>1?this.each((t==null?t4:typeof t=="function"?o4:a4)(e,t,a??"")):zn(this.node(),e)}function zn(e,t){return e.style.getPropertyValue(t)||yc(e).getComputedStyle(e,null).getPropertyValue(t)}function n4(e){return function(){delete this[e]}}function r4(e,t){return function(){this[e]=t}}function l4(e,t){return function(){var a=t.apply(this,arguments);a==null?delete this[e]:this[e]=a}}function vw(e,t){return arguments.length>1?this.each((t==null?n4:typeof t=="function"?l4:r4)(e,t)):this.node()[e]}function Cw(e){return e.trim().split(/^|\s+/)}function Mg(e){return e.classList||new Sw(e)}function Sw(e){this._node=e,this._names=Cw(e.getAttribute("class")||"")}Sw.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Lw(e,t){for(var a=Mg(e),o=-1,n=t.length;++o<n;)a.add(t[o])}function _w(e,t){for(var a=Mg(e),o=-1,n=t.length;++o<n;)a.remove(t[o])}function i4(e){return function(){Lw(this,e)}}function s4(e){return function(){_w(this,e)}}function u4(e,t){return function(){(t.apply(this,arguments)?Lw:_w)(this,e)}}function Iw(e,t){var a=Cw(e+"");if(arguments.length<2){for(var o=Mg(this.node()),n=-1,r=a.length;++n<r;)if(!o.contains(a[n]))return!1;return!0}return this.each((typeof t=="function"?u4:t?i4:s4)(a,t))}function d4(){this.textContent=""}function c4(e){return function(){this.textContent=e}}function f4(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function kw(e){return arguments.length?this.each(e==null?d4:(typeof e=="function"?f4:c4)(e)):this.node().textContent}function p4(){this.innerHTML=""}function m4(e){return function(){this.innerHTML=e}}function g4(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Mw(e){return arguments.length?this.each(e==null?p4:(typeof e=="function"?g4:m4)(e)):this.node().innerHTML}function h4(){this.nextSibling&&this.parentNode.appendChild(this)}function Ew(){return this.each(h4)}function x4(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Tw(){return this.each(x4)}function Aw(e){var t=typeof e=="function"?e:hc(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function b4(){return null}function Nw(e,t){var a=typeof e=="function"?e:hc(e),o=t==null?b4:typeof t=="function"?t:_r(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),o.apply(this,arguments)||null)})}function y4(){var e=this.parentNode;e&&e.removeChild(this)}function Dw(){return this.each(y4)}function w4(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function v4(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Rw(e){return this.select(e?v4:w4)}function zw(e){return arguments.length?this.property("__data__",e):this.node().__data__}function C4(e){return function(t){e.call(this,t,this.__data__)}}function S4(e){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");return o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),{type:t,name:a}})}function L4(e){return function(){var t=this.__on;if(t){for(var a=0,o=-1,n=t.length,r;a<n;++a)r=t[a],(!e.type||r.type===e.type)&&r.name===e.name?this.removeEventListener(r.type,r.listener,r.options):t[++o]=r;++o?t.length=o:delete this.__on}}}function _4(e,t,a){return function(){var o=this.__on,n,r=C4(t);if(o){for(var l=0,i=o.length;l<i;++l)if((n=o[l]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=r,n.options=a),n.value=t;return}}this.addEventListener(e.type,r,a),n={type:e.type,name:e.name,value:t,listener:r,options:a},o?o.push(n):this.__on=[n]}}function Ow(e,t,a){var o=S4(e+""),n,r=o.length,l;if(arguments.length<2){var i=this.node().__on;if(i){for(var s=0,u=i.length,c;s<u;++s)for(n=0,c=i[s];n<r;++n)if((l=o[n]).type===c.type&&l.name===c.name)return c.value}return}for(i=t?_4:L4,n=0;n<r;++n)this.each(i(o[n],t,a));return this}function Bw(e,t,a){var o=yc(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,a):(n=o.document.createEvent("Event"),a?(n.initEvent(t,a.bubbles,a.cancelable),n.detail=a.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function I4(e,t){return function(){return Bw(this,e,t)}}function k4(e,t){return function(){return Bw(this,e,t.apply(this,arguments))}}function Pw(e,t){return this.each((typeof t=="function"?k4:I4)(e,t))}function*Hw(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var o=e[t],n=0,r=o.length,l;n<r;++n)(l=o[n])&&(yield l)}var Eg=[null];function nt(e,t){this._groups=e,this._parents=t}function Uw(){return new nt([[document.documentElement]],Eg)}function M4(){return this}nt.prototype=Uw.prototype={constructor:nt,select:ew,selectAll:tw,selectChild:aw,selectChildren:ow,filter:nw,data:iw,enter:rw,exit:sw,join:uw,merge:dw,selection:M4,order:cw,sort:fw,call:pw,nodes:mw,node:gw,size:hw,empty:xw,each:bw,attr:yw,style:ww,property:vw,classed:Iw,text:kw,html:Mw,raise:Ew,lower:Tw,append:Aw,insert:Nw,remove:Dw,clone:Rw,datum:zw,on:Ow,dispatch:Pw,[Symbol.iterator]:Hw};var Wo=Uw;function wt(e){return typeof e=="string"?new nt([[document.querySelector(e)]],[document.documentElement]):new nt([[e]],Eg)}function Fw(e){let t;for(;t=e.sourceEvent;)e=t;return e}function qt(e,t){if(e=Fw(e),t===void 0&&(t=e.currentTarget),t){var a=t.ownerSVGElement||t;if(a.createSVGPoint){var o=a.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var qw={passive:!1},Ir={capture:!0,passive:!1};function wc(e){e.stopImmediatePropagation()}function On(e){e.preventDefault(),e.stopImmediatePropagation()}function Ms(e){var t=e.document.documentElement,a=wt(e).on("dragstart.drag",On,Ir);"onselectstart"in t?a.on("selectstart.drag",On,Ir):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Es(e,t){var a=e.document.documentElement,o=wt(e).on("dragstart.drag",null);t&&(o.on("click.drag",On,Ir),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in a?o.on("selectstart.drag",null):(a.style.MozUserSelect=a.__noselect,delete a.__noselect)}var Ts=e=>()=>e;function As(e,{sourceEvent:t,subject:a,target:o,identifier:n,active:r,x:l,y:i,dx:s,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:a,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:l,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}As.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function E4(e){return!e.ctrlKey&&!e.button}function T4(){return this.parentNode}function A4(e,t){return t??{x:e.x,y:e.y}}function N4(){return navigator.maxTouchPoints||"ontouchstart"in this}function vc(){var e=E4,t=T4,a=A4,o=N4,n={},r=Lr("start","drag","end"),l=0,i,s,u,c,f=0;function d(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",h,qw).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,C){if(!(c||!e.call(this,b,C))){var S=m(this,t.call(this,b,C),b,C,"mouse");S&&(wt(b.view).on("mousemove.drag",g,Ir).on("mouseup.drag",y,Ir),Ms(b.view),wc(b),u=!1,i=b.clientX,s=b.clientY,S("start",b))}}function g(b){if(On(b),!u){var C=b.clientX-i,S=b.clientY-s;u=C*C+S*S>f}n.mouse("drag",b)}function y(b){wt(b.view).on("mousemove.drag mouseup.drag",null),Es(b.view,u),On(b),n.mouse("end",b)}function w(b,C){if(e.call(this,b,C)){var S=b.changedTouches,v=t.call(this,b,C),_=S.length,I,A;for(I=0;I<_;++I)(A=m(this,v,b,C,S[I].identifier,S[I]))&&(wc(b),A("start",b,S[I]))}}function h(b){var C=b.changedTouches,S=C.length,v,_;for(v=0;v<S;++v)(_=n[C[v].identifier])&&(On(b),_("drag",b,C[v]))}function x(b){var C=b.changedTouches,S=C.length,v,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),v=0;v<S;++v)(_=n[C[v].identifier])&&(wc(b),_("end",b,C[v]))}function m(b,C,S,v,_,I){var A=r.copy(),T=qt(I||S,C),P,H,L;if((L=a.call(b,new As("beforestart",{sourceEvent:S,target:d,identifier:_,active:l,x:T[0],y:T[1],dx:0,dy:0,dispatch:A}),v))!=null)return P=L.x-T[0]||0,H=L.y-T[1]||0,function M(E,k,N){var R=T,D;switch(E){case"start":n[_]=M,D=l++;break;case"end":delete n[_],--l;case"drag":T=qt(N||k,C),D=l;break}A.call(E,b,new As(E,{sourceEvent:k,subject:L,target:d,identifier:_,active:D,x:T[0]+P,y:T[1]+H,dx:T[0]-R[0],dy:T[1]-R[1],dispatch:A}),v)}}return d.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Ts(!!b),d):e},d.container=function(b){return arguments.length?(t=typeof b=="function"?b:Ts(b),d):t},d.subject=function(b){return arguments.length?(a=typeof b=="function"?b:Ts(b),d):a},d.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:Ts(!!b),d):o},d.on=function(){var b=r.on.apply(r,arguments);return b===r?d:b},d.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,d):Math.sqrt(f)},d}function Cc(e,t,a){e.prototype=t.prototype=a,a.constructor=e}function Tg(e,t){var a=Object.create(e.prototype);for(var o in t)a[o]=t[o];return a}function Rs(){}var Ns=.7,_c=1/Ns,Gl="\\s*([+-]?\\d+)\\s*",Ds="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",D4=/^#([0-9a-f]{3,8})$/,R4=new RegExp(`^rgb\\(${Gl},${Gl},${Gl}\\)$`),z4=new RegExp(`^rgb\\(${mo},${mo},${mo}\\)$`),O4=new RegExp(`^rgba\\(${Gl},${Gl},${Gl},${Ds}\\)$`),B4=new RegExp(`^rgba\\(${mo},${mo},${mo},${Ds}\\)$`),P4=new RegExp(`^hsl\\(${Ds},${mo},${mo}\\)$`),H4=new RegExp(`^hsla\\(${Ds},${mo},${mo},${Ds}\\)$`),Vw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Cc(Rs,Wa,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Gw,formatHex:Gw,formatHex8:U4,formatHsl:F4,formatRgb:Xw,toString:Xw});function Gw(){return this.rgb().formatHex()}function U4(){return this.rgb().formatHex8()}function F4(){return Qw(this).formatHsl()}function Xw(){return this.rgb().formatRgb()}function Wa(e){var t,a;return e=(e+"").trim().toLowerCase(),(t=D4.exec(e))?(a=t[1].length,t=parseInt(t[1],16),a===6?Yw(t):a===3?new ta(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):a===8?Sc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):a===4?Sc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=R4.exec(e))?new ta(t[1],t[2],t[3],1):(t=z4.exec(e))?new ta(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=O4.exec(e))?Sc(t[1],t[2],t[3],t[4]):(t=B4.exec(e))?Sc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=P4.exec(e))?jw(t[1],t[2]/100,t[3]/100,1):(t=H4.exec(e))?jw(t[1],t[2]/100,t[3]/100,t[4]):Vw.hasOwnProperty(e)?Yw(Vw[e]):e==="transparent"?new ta(NaN,NaN,NaN,0):null}function Yw(e){return new ta(e>>16&255,e>>8&255,e&255,1)}function Sc(e,t,a,o){return o<=0&&(e=t=a=NaN),new ta(e,t,a,o)}function q4(e){return e instanceof Rs||(e=Wa(e)),e?(e=e.rgb(),new ta(e.r,e.g,e.b,e.opacity)):new ta}function Xl(e,t,a,o){return arguments.length===1?q4(e):new ta(e,t,a,o??1)}function ta(e,t,a,o){this.r=+e,this.g=+t,this.b=+a,this.opacity=+o}Cc(ta,Xl,Tg(Rs,{brighter(e){return e=e==null?_c:Math.pow(_c,e),new ta(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ns:Math.pow(Ns,e),new ta(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ta(Mr(this.r),Mr(this.g),Mr(this.b),Ic(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Zw,formatHex:Zw,formatHex8:V4,formatRgb:Ww,toString:Ww}));function Zw(){return`#${kr(this.r)}${kr(this.g)}${kr(this.b)}`}function V4(){return`#${kr(this.r)}${kr(this.g)}${kr(this.b)}${kr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ww(){let e=Ic(this.opacity);return`${e===1?"rgb(":"rgba("}${Mr(this.r)}, ${Mr(this.g)}, ${Mr(this.b)}${e===1?")":`, ${e})`}`}function Ic(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Mr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function kr(e){return e=Mr(e),(e<16?"0":"")+e.toString(16)}function jw(e,t,a,o){return o<=0?e=t=a=NaN:a<=0||a>=1?e=t=NaN:t<=0&&(e=NaN),new Za(e,t,a,o)}function Qw(e){if(e instanceof Za)return new Za(e.h,e.s,e.l,e.opacity);if(e instanceof Rs||(e=Wa(e)),!e)return new Za;if(e instanceof Za)return e;e=e.rgb();var t=e.r/255,a=e.g/255,o=e.b/255,n=Math.min(t,a,o),r=Math.max(t,a,o),l=NaN,i=r-n,s=(r+n)/2;return i?(t===r?l=(a-o)/i+(a<o)*6:a===r?l=(o-t)/i+2:l=(t-a)/i+4,i/=s<.5?r+n:2-r-n,l*=60):i=s>0&&s<1?0:l,new Za(l,i,s,e.opacity)}function $w(e,t,a,o){return arguments.length===1?Qw(e):new Za(e,t,a,o??1)}function Za(e,t,a,o){this.h=+e,this.s=+t,this.l=+a,this.opacity=+o}Cc(Za,$w,Tg(Rs,{brighter(e){return e=e==null?_c:Math.pow(_c,e),new Za(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ns:Math.pow(Ns,e),new Za(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,o=a+(a<.5?a:1-a)*t,n=2*a-o;return new ta(Ag(e>=240?e-240:e+120,n,o),Ag(e,n,o),Ag(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Za(Kw(this.h),Lc(this.s),Lc(this.l),Ic(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Ic(this.opacity);return`${e===1?"hsl(":"hsla("}${Kw(this.h)}, ${Lc(this.s)*100}%, ${Lc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Kw(e){return e=(e||0)%360,e<0?e+360:e}function Lc(e){return Math.max(0,Math.min(1,e||0))}function Ag(e,t,a){return(e<60?t+(a-t)*e/60:e<180?a:e<240?t+(a-t)*(240-e)/60:t)*255}function Ng(e,t,a,o,n){var r=e*e,l=r*e;return((1-3*e+3*r-l)*t+(4-6*r+3*l)*a+(1+3*e+3*r-3*l)*o+l*n)/6}function Jw(e){var t=e.length-1;return function(a){var o=a<=0?a=0:a>=1?(a=1,t-1):Math.floor(a*t),n=e[o],r=e[o+1],l=o>0?e[o-1]:2*n-r,i=o<t-1?e[o+2]:2*r-n;return Ng((a-o/t)*t,l,n,r,i)}}function ev(e){var t=e.length;return function(a){var o=Math.floor(((a%=1)<0?++a:a)*t),n=e[(o+t-1)%t],r=e[o%t],l=e[(o+1)%t],i=e[(o+2)%t];return Ng((a-o/t)*t,n,r,l,i)}}var zs=e=>()=>e;function G4(e,t){return function(a){return e+a*t}}function X4(e,t,a){return e=Math.pow(e,a),t=Math.pow(t,a)-e,a=1/a,function(o){return Math.pow(e+o*t,a)}}function tv(e){return(e=+e)==1?kc:function(t,a){return a-t?X4(t,a,e):zs(isNaN(t)?a:t)}}function kc(e,t){var a=t-e;return a?G4(e,a):zs(isNaN(e)?t:e)}var Er=(function e(t){var a=tv(t);function o(n,r){var l=a((n=Xl(n)).r,(r=Xl(r)).r),i=a(n.g,r.g),s=a(n.b,r.b),u=kc(n.opacity,r.opacity);return function(c){return n.r=l(c),n.g=i(c),n.b=s(c),n.opacity=u(c),n+""}}return o.gamma=e,o})(1);function av(e){return function(t){var a=t.length,o=new Array(a),n=new Array(a),r=new Array(a),l,i;for(l=0;l<a;++l)i=Xl(t[l]),o[l]=i.r||0,n[l]=i.g||0,r[l]=i.b||0;return o=e(o),n=e(n),r=e(r),i.opacity=1,function(s){return i.r=o(s),i.g=n(s),i.b=r(s),i+""}}}var Y4=av(Jw),Z4=av(ev);function ov(e,t){t||(t=[]);var a=e?Math.min(t.length,e.length):0,o=t.slice(),n;return function(r){for(n=0;n<a;++n)o[n]=e[n]*(1-r)+t[n]*r;return o}}function nv(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rv(e,t){var a=t?t.length:0,o=e?Math.min(a,e.length):0,n=new Array(o),r=new Array(a),l;for(l=0;l<o;++l)n[l]=jo(e[l],t[l]);for(;l<a;++l)r[l]=t[l];return function(i){for(l=0;l<o;++l)r[l]=n[l](i);return r}}function lv(e,t){var a=new Date;return e=+e,t=+t,function(o){return a.setTime(e*(1-o)+t*o),a}}function Vt(e,t){return e=+e,t=+t,function(a){return e*(1-a)+t*a}}function iv(e,t){var a={},o={},n;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(n in t)n in e?a[n]=jo(e[n],t[n]):o[n]=t[n];return function(r){for(n in a)o[n]=a[n](r);return o}}var Rg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Dg=new RegExp(Rg.source,"g");function W4(e){return function(){return e}}function j4(e){return function(t){return e(t)+""}}function Os(e,t){var a=Rg.lastIndex=Dg.lastIndex=0,o,n,r,l=-1,i=[],s=[];for(e=e+"",t=t+"";(o=Rg.exec(e))&&(n=Dg.exec(t));)(r=n.index)>a&&(r=t.slice(a,r),i[l]?i[l]+=r:i[++l]=r),(o=o[0])===(n=n[0])?i[l]?i[l]+=n:i[++l]=n:(i[++l]=null,s.push({i:l,x:Vt(o,n)})),a=Dg.lastIndex;return a<t.length&&(r=t.slice(a),i[l]?i[l]+=r:i[++l]=r),i.length<2?s[0]?j4(s[0].x):W4(t):(t=s.length,function(u){for(var c=0,f;c<t;++c)i[(f=s[c]).i]=f.x(u);return i.join("")})}function jo(e,t){var a=typeof t,o;return t==null||a==="boolean"?zs(t):(a==="number"?Vt:a==="string"?(o=Wa(t))?(t=o,Er):Os:t instanceof Wa?Er:t instanceof Date?lv:nv(t)?ov:Array.isArray(t)?rv:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?iv:Vt)(e,t)}var sv=180/Math.PI,Mc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function zg(e,t,a,o,n,r){var l,i,s;return(l=Math.sqrt(e*e+t*t))&&(e/=l,t/=l),(s=e*a+t*o)&&(a-=e*s,o-=t*s),(i=Math.sqrt(a*a+o*o))&&(a/=i,o/=i,s/=i),e*o<t*a&&(e=-e,t=-t,s=-s,l=-l),{translateX:n,translateY:r,rotate:Math.atan2(t,e)*sv,skewX:Math.atan(s)*sv,scaleX:l,scaleY:i}}var Ec;function uv(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Mc:zg(t.a,t.b,t.c,t.d,t.e,t.f)}function dv(e){return e==null?Mc:(Ec||(Ec=document.createElementNS("http://www.w3.org/2000/svg","g")),Ec.setAttribute("transform",e),(e=Ec.transform.baseVal.consolidate())?(e=e.matrix,zg(e.a,e.b,e.c,e.d,e.e,e.f)):Mc)}function cv(e,t,a,o){function n(u){return u.length?u.pop()+" ":""}function r(u,c,f,d,p,g){if(u!==f||c!==d){var y=p.push("translate(",null,t,null,a);g.push({i:y-4,x:Vt(u,f)},{i:y-2,x:Vt(c,d)})}else(f||d)&&p.push("translate("+f+t+d+a)}function l(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(n(f)+"rotate(",null,o)-2,x:Vt(u,c)})):c&&f.push(n(f)+"rotate("+c+o)}function i(u,c,f,d){u!==c?d.push({i:f.push(n(f)+"skewX(",null,o)-2,x:Vt(u,c)}):c&&f.push(n(f)+"skewX("+c+o)}function s(u,c,f,d,p,g){if(u!==f||c!==d){var y=p.push(n(p)+"scale(",null,",",null,")");g.push({i:y-4,x:Vt(u,f)},{i:y-2,x:Vt(c,d)})}else(f!==1||d!==1)&&p.push(n(p)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=e(u),c=e(c),r(u.translateX,u.translateY,c.translateX,c.translateY,f,d),l(u.rotate,c.rotate,f,d),i(u.skewX,c.skewX,f,d),s(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(p){for(var g=-1,y=d.length,w;++g<y;)f[(w=d[g]).i]=w.x(p);return f.join("")}}}var Og=cv(uv,"px, ","px)","deg)"),Bg=cv(dv,", ",")",")");var K4=1e-12;function fv(e){return((e=Math.exp(e))+1/e)/2}function Q4(e){return((e=Math.exp(e))-1/e)/2}function $4(e){return((e=Math.exp(2*e))-1)/(e+1)}var Tr=(function e(t,a,o){function n(r,l){var i=r[0],s=r[1],u=r[2],c=l[0],f=l[1],d=l[2],p=c-i,g=f-s,y=p*p+g*g,w,h;if(y<K4)h=Math.log(d/u)/t,w=function(v){return[i+v*p,s+v*g,u*Math.exp(t*v*h)]};else{var x=Math.sqrt(y),m=(d*d-u*u+o*y)/(2*u*a*x),b=(d*d-u*u-o*y)/(2*d*a*x),C=Math.log(Math.sqrt(m*m+1)-m),S=Math.log(Math.sqrt(b*b+1)-b);h=(S-C)/t,w=function(v){var _=v*h,I=fv(C),A=u/(a*x)*(I*$4(t*_+C)-Q4(C));return[i+A*p,s+A*g,u*I/fv(t*_+C)]}}return w.duration=h*1e3*t/Math.SQRT2,w}return n.rho=function(r){var l=Math.max(.001,+r),i=l*l,s=i*i;return e(l,i,s)},n})(Math.SQRT2,2,4);var Yl=0,Ps=0,Bs=0,mv=1e3,Tc,Hs,Ac=0,Ar=0,Nc=0,Us=typeof performance=="object"&&performance.now?performance:Date,gv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function qs(){return Ar||(gv(J4),Ar=Us.now()+Nc)}function J4(){Ar=0}function Fs(){this._call=this._time=this._next=null}Fs.prototype=Dc.prototype={constructor:Fs,restart:function(e,t,a){if(typeof e!="function")throw new TypeError("callback is not a function");a=(a==null?qs():+a)+(t==null?0:+t),!this._next&&Hs!==this&&(Hs?Hs._next=this:Tc=this,Hs=this),this._call=e,this._time=a,Pg()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pg())}};function Dc(e,t,a){var o=new Fs;return o.restart(e,t,a),o}function hv(){qs(),++Yl;for(var e=Tc,t;e;)(t=Ar-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Yl}function pv(){Ar=(Ac=Us.now())+Nc,Yl=Ps=0;try{hv()}finally{Yl=0,t3(),Ar=0}}function e3(){var e=Us.now(),t=e-Ac;t>mv&&(Nc-=t,Ac=e)}function t3(){for(var e,t=Tc,a,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(a=t._next,t._next=null,t=e?e._next=a:Tc=a);Hs=e,Pg(o)}function Pg(e){if(!Yl){Ps&&(Ps=clearTimeout(Ps));var t=e-Ar;t>24?(e<1/0&&(Ps=setTimeout(pv,e-Us.now()-Nc)),Bs&&(Bs=clearInterval(Bs))):(Bs||(Ac=Us.now(),Bs=setInterval(e3,mv)),Yl=1,gv(pv))}}function Rc(e,t,a){var o=new Fs;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,a),o}var a3=Lr("start","end","cancel","interrupt"),o3=[],yv=0,xv=1,Oc=2,zc=3,bv=4,Bc=5,Vs=6;function Bn(e,t,a,o,n,r){var l=e.__transition;if(!l)e.__transition={};else if(a in l)return;n3(e,a,{name:t,index:o,group:n,on:a3,tween:o3,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:yv})}function Gs(e,t){var a=mt(e,t);if(a.state>yv)throw new Error("too late; already scheduled");return a}function At(e,t){var a=mt(e,t);if(a.state>zc)throw new Error("too late; already running");return a}function mt(e,t){var a=e.__transition;if(!a||!(a=a[t]))throw new Error("transition not found");return a}function n3(e,t,a){var o=e.__transition,n;o[t]=a,a.timer=Dc(r,0,a.time);function r(u){a.state=xv,a.timer.restart(l,a.delay,a.time),a.delay<=u&&l(u-a.delay)}function l(u){var c,f,d,p;if(a.state!==xv)return s();for(c in o)if(p=o[c],p.name===a.name){if(p.state===zc)return Rc(l);p.state===bv?(p.state=Vs,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[c]):+c<t&&(p.state=Vs,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[c])}if(Rc(function(){a.state===zc&&(a.state=bv,a.timer.restart(i,a.delay,a.time),i(u))}),a.state=Oc,a.on.call("start",e,e.__data__,a.index,a.group),a.state===Oc){for(a.state=zc,n=new Array(d=a.tween.length),c=0,f=-1;c<d;++c)(p=a.tween[c].value.call(e,e.__data__,a.index,a.group))&&(n[++f]=p);n.length=f+1}}function i(u){for(var c=u<a.duration?a.ease.call(null,u/a.duration):(a.timer.restart(s),a.state=Bc,1),f=-1,d=n.length;++f<d;)n[f].call(e,c);a.state===Bc&&(a.on.call("end",e,e.__data__,a.index,a.group),s())}function s(){a.state=Vs,a.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function Nr(e,t){var a=e.__transition,o,n,r=!0,l;if(a){t=t==null?null:t+"";for(l in a){if((o=a[l]).name!==t){r=!1;continue}n=o.state>Oc&&o.state<Bc,o.state=Vs,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete a[l]}r&&delete e.__transition}}function wv(e){return this.each(function(){Nr(this,e)})}function r3(e,t){var a,o;return function(){var n=At(this,e),r=n.tween;if(r!==a){o=a=r;for(var l=0,i=o.length;l<i;++l)if(o[l].name===t){o=o.slice(),o.splice(l,1);break}}n.tween=o}}function l3(e,t,a){var o,n;if(typeof a!="function")throw new Error;return function(){var r=At(this,e),l=r.tween;if(l!==o){n=(o=l).slice();for(var i={name:t,value:a},s=0,u=n.length;s<u;++s)if(n[s].name===t){n[s]=i;break}s===u&&n.push(i)}r.tween=n}}function vv(e,t){var a=this._id;if(e+="",arguments.length<2){for(var o=mt(this.node(),a).tween,n=0,r=o.length,l;n<r;++n)if((l=o[n]).name===e)return l.value;return null}return this.each((t==null?r3:l3)(a,e,t))}function Zl(e,t,a){var o=e._id;return e.each(function(){var n=At(this,o);(n.value||(n.value={}))[t]=a.apply(this,arguments)}),function(n){return mt(n,o).value[t]}}function Pc(e,t){var a;return(typeof t=="number"?Vt:t instanceof Wa?Er:(a=Wa(t))?(t=a,Er):Os)(e,t)}function i3(e){return function(){this.removeAttribute(e)}}function s3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function u3(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttribute(e);return l===n?null:l===o?r:r=t(o=l,a)}}function d3(e,t,a){var o,n=a+"",r;return function(){var l=this.getAttributeNS(e.space,e.local);return l===n?null:l===o?r:r=t(o=l,a)}}function c3(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttribute(e):(l=this.getAttribute(e),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function f3(e,t,a){var o,n,r;return function(){var l,i=a(this),s;return i==null?void this.removeAttributeNS(e.space,e.local):(l=this.getAttributeNS(e.space,e.local),s=i+"",l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i)))}}function Cv(e,t){var a=Zo(e),o=a==="transform"?Bg:Pc;return this.attrTween(e,typeof t=="function"?(a.local?f3:c3)(a,o,Zl(this,"attr."+e,t)):t==null?(a.local?s3:i3)(a):(a.local?d3:u3)(a,o,t))}function p3(e,t){return function(a){this.setAttribute(e,t.call(this,a))}}function m3(e,t){return function(a){this.setAttributeNS(e.space,e.local,t.call(this,a))}}function g3(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&m3(e,r)),a}return n._value=t,n}function h3(e,t){var a,o;function n(){var r=t.apply(this,arguments);return r!==o&&(a=(o=r)&&p3(e,r)),a}return n._value=t,n}function Sv(e,t){var a="attr."+e;if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;var o=Zo(e);return this.tween(a,(o.local?g3:h3)(o,t))}function x3(e,t){return function(){Gs(this,e).delay=+t.apply(this,arguments)}}function b3(e,t){return t=+t,function(){Gs(this,e).delay=t}}function Lv(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?x3:b3)(t,e)):mt(this.node(),t).delay}function y3(e,t){return function(){At(this,e).duration=+t.apply(this,arguments)}}function w3(e,t){return t=+t,function(){At(this,e).duration=t}}function _v(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?y3:w3)(t,e)):mt(this.node(),t).duration}function v3(e,t){if(typeof t!="function")throw new Error;return function(){At(this,e).ease=t}}function Iv(e){var t=this._id;return arguments.length?this.each(v3(t,e)):mt(this.node(),t).ease}function C3(e,t){return function(){var a=t.apply(this,arguments);if(typeof a!="function")throw new Error;At(this,e).ease=a}}function kv(e){if(typeof e!="function")throw new Error;return this.each(C3(this._id,e))}function Mv(e){typeof e!="function"&&(e=Is(e));for(var t=this._groups,a=t.length,o=new Array(a),n=0;n<a;++n)for(var r=t[n],l=r.length,i=o[n]=[],s,u=0;u<l;++u)(s=r[u])&&e.call(s,s.__data__,u,r)&&i.push(s);return new Gt(o,this._parents,this._name,this._id)}function Ev(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,a=e._groups,o=t.length,n=a.length,r=Math.min(o,n),l=new Array(o),i=0;i<r;++i)for(var s=t[i],u=a[i],c=s.length,f=l[i]=new Array(c),d,p=0;p<c;++p)(d=s[p]||u[p])&&(f[p]=d);for(;i<o;++i)l[i]=t[i];return new Gt(l,this._parents,this._name,this._id)}function S3(e){return(e+"").trim().split(/^|\s+/).every(function(t){var a=t.indexOf(".");return a>=0&&(t=t.slice(0,a)),!t||t==="start"})}function L3(e,t,a){var o,n,r=S3(t)?Gs:At;return function(){var l=r(this,e),i=l.on;i!==o&&(n=(o=i).copy()).on(t,a),l.on=n}}function Tv(e,t){var a=this._id;return arguments.length<2?mt(this.node(),a).on.on(e):this.each(L3(a,e,t))}function _3(e){return function(){var t=this.parentNode;for(var a in this.__transition)if(+a!==e)return;t&&t.removeChild(this)}}function Av(){return this.on("end.remove",_3(this._id))}function Nv(e){var t=this._name,a=this._id;typeof e!="function"&&(e=_r(e));for(var o=this._groups,n=o.length,r=new Array(n),l=0;l<n;++l)for(var i=o[l],s=i.length,u=r[l]=new Array(s),c,f,d=0;d<s;++d)(c=i[d])&&(f=e.call(c,c.__data__,d,i))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,Bn(u[d],t,a,d,u,mt(c,a)));return new Gt(r,this._parents,t,a)}function Dv(e){var t=this._name,a=this._id;typeof e!="function"&&(e=_s(e));for(var o=this._groups,n=o.length,r=[],l=[],i=0;i<n;++i)for(var s=o[i],u=s.length,c,f=0;f<u;++f)if(c=s[f]){for(var d=e.call(c,c.__data__,f,s),p,g=mt(c,a),y=0,w=d.length;y<w;++y)(p=d[y])&&Bn(p,t,a,y,d,g);r.push(d),l.push(c)}return new Gt(r,l,t,a)}var I3=Wo.prototype.constructor;function Rv(){return new I3(this._groups,this._parents)}function k3(e,t){var a,o,n;return function(){var r=zn(this,e),l=(this.style.removeProperty(e),zn(this,e));return r===l?null:r===a&&l===o?n:n=t(a=r,o=l)}}function zv(e){return function(){this.style.removeProperty(e)}}function M3(e,t,a){var o,n=a+"",r;return function(){var l=zn(this,e);return l===n?null:l===o?r:r=t(o=l,a)}}function E3(e,t,a){var o,n,r;return function(){var l=zn(this,e),i=a(this),s=i+"";return i==null&&(s=i=(this.style.removeProperty(e),zn(this,e))),l===s?null:l===o&&s===n?r:(n=s,r=t(o=l,i))}}function T3(e,t){var a,o,n,r="style."+t,l="end."+r,i;return function(){var s=At(this,e),u=s.on,c=s.value[r]==null?i||(i=zv(t)):void 0;(u!==a||n!==c)&&(o=(a=u).copy()).on(l,n=c),s.on=o}}function Ov(e,t,a){var o=(e+="")=="transform"?Og:Pc;return t==null?this.styleTween(e,k3(e,o)).on("end.style."+e,zv(e)):typeof t=="function"?this.styleTween(e,E3(e,o,Zl(this,"style."+e,t))).each(T3(this._id,e)):this.styleTween(e,M3(e,o,t),a).on("end.style."+e,null)}function A3(e,t,a){return function(o){this.style.setProperty(e,t.call(this,o),a)}}function N3(e,t,a){var o,n;function r(){var l=t.apply(this,arguments);return l!==n&&(o=(n=l)&&A3(e,l,a)),o}return r._value=t,r}function Bv(e,t,a){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,N3(e,t,a??""))}function D3(e){return function(){this.textContent=e}}function R3(e){return function(){var t=e(this);this.textContent=t??""}}function Pv(e){return this.tween("text",typeof e=="function"?R3(Zl(this,"text",e)):D3(e==null?"":e+""))}function z3(e){return function(t){this.textContent=e.call(this,t)}}function O3(e){var t,a;function o(){var n=e.apply(this,arguments);return n!==a&&(t=(a=n)&&z3(n)),t}return o._value=e,o}function Hv(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,O3(e))}function Uv(){for(var e=this._name,t=this._id,a=Hc(),o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)if(s=l[u]){var c=mt(s,t);Bn(s,e,a,u,l,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Gt(o,this._parents,e,a)}function Fv(){var e,t,a=this,o=a._id,n=a.size();return new Promise(function(r,l){var i={value:l},s={value:function(){--n===0&&r()}};a.each(function(){var u=At(this,o),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(i),t._.interrupt.push(i),t._.end.push(s)),u.on=t}),n===0&&r()})}var B3=0;function Gt(e,t,a,o){this._groups=e,this._parents=t,this._name=a,this._id=o}function qv(e){return Wo().transition(e)}function Hc(){return++B3}var Ko=Wo.prototype;Gt.prototype=qv.prototype={constructor:Gt,select:Nv,selectAll:Dv,selectChild:Ko.selectChild,selectChildren:Ko.selectChildren,filter:Mv,merge:Ev,selection:Rv,transition:Uv,call:Ko.call,nodes:Ko.nodes,node:Ko.node,size:Ko.size,empty:Ko.empty,each:Ko.each,on:Tv,attr:Cv,attrTween:Sv,style:Ov,styleTween:Bv,text:Pv,textTween:Hv,remove:Av,tween:vv,delay:Lv,duration:_v,ease:Iv,easeVarying:kv,end:Fv,[Symbol.iterator]:Ko[Symbol.iterator]};function Uc(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var P3={time:null,delay:0,duration:250,ease:Uc};function H3(e,t){for(var a;!(a=e.__transition)||!(a=a[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return a}function Vv(e){var t,a;e instanceof Gt?(t=e._id,e=e._name):(t=Hc(),(a=P3).time=qs(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,r=0;r<n;++r)for(var l=o[r],i=l.length,s,u=0;u<i;++u)(s=l[u])&&Bn(s,e,t,u,l,a||H3(s,t));return new Gt(o,this._parents,e,t)}Wo.prototype.interrupt=wv;Wo.prototype.transition=Vv;var Xs=e=>()=>e;function Hg(e,{sourceEvent:t,target:a,transform:o,dispatch:n}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:n}})}function ja(e,t,a){this.k=e,this.x=t,this.y=a}ja.prototype={constructor:ja,scale:function(e){return e===1?this:new ja(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new ja(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Dr=new ja(1,0,0);Ys.prototype=ja.prototype;function Ys(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Dr;return e.__zoom}function Fc(e){e.stopImmediatePropagation()}function Wl(e){e.preventDefault(),e.stopImmediatePropagation()}function U3(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function F3(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Gv(){return this.__zoom||Dr}function q3(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function V3(){return navigator.maxTouchPoints||"ontouchstart"in this}function G3(e,t,a){var o=e.invertX(t[0][0])-a[0][0],n=e.invertX(t[1][0])-a[1][0],r=e.invertY(t[0][1])-a[0][1],l=e.invertY(t[1][1])-a[1][1];return e.translate(n>o?(o+n)/2:Math.min(0,o)||Math.max(0,n),l>r?(r+l)/2:Math.min(0,r)||Math.max(0,l))}function qc(){var e=U3,t=F3,a=G3,o=q3,n=V3,r=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],i=250,s=Tr,u=Lr("start","zoom","end"),c,f,d,p=500,g=150,y=0,w=10;function h(L){L.property("__zoom",Gv).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",A).filter(n).on("touchstart.zoom",T).on("touchmove.zoom",P).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(L,M,E,k){var N=L.selection?L.selection():L;N.property("__zoom",Gv),L!==N?C(L,M,E,k):N.interrupt().each(function(){S(this,arguments).event(k).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},h.scaleBy=function(L,M,E,k){h.scaleTo(L,function(){var N=this.__zoom.k,R=typeof M=="function"?M.apply(this,arguments):M;return N*R},E,k)},h.scaleTo=function(L,M,E,k){h.transform(L,function(){var N=t.apply(this,arguments),R=this.__zoom,D=E==null?b(N):typeof E=="function"?E.apply(this,arguments):E,q=R.invert(D),U=typeof M=="function"?M.apply(this,arguments):M;return a(m(x(R,U),D,q),N,l)},E,k)},h.translateBy=function(L,M,E,k){h.transform(L,function(){return a(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),l)},null,k)},h.translateTo=function(L,M,E,k,N){h.transform(L,function(){var R=t.apply(this,arguments),D=this.__zoom,q=k==null?b(R):typeof k=="function"?k.apply(this,arguments):k;return a(Dr.translate(q[0],q[1]).scale(D.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof E=="function"?-E.apply(this,arguments):-E),R,l)},k,N)};function x(L,M){return M=Math.max(r[0],Math.min(r[1],M)),M===L.k?L:new ja(M,L.x,L.y)}function m(L,M,E){var k=M[0]-E[0]*L.k,N=M[1]-E[1]*L.k;return k===L.x&&N===L.y?L:new ja(L.k,k,N)}function b(L){return[(+L[0][0]+ +L[1][0])/2,(+L[0][1]+ +L[1][1])/2]}function C(L,M,E,k){L.on("start.zoom",function(){S(this,arguments).event(k).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(k).end()}).tween("zoom",function(){var N=this,R=arguments,D=S(N,R).event(k),q=t.apply(N,R),U=E==null?b(q):typeof E=="function"?E.apply(N,R):E,W=Math.max(q[1][0]-q[0][0],q[1][1]-q[0][1]),Y=N.__zoom,j=typeof M=="function"?M.apply(N,R):M,ie=s(Y.invert(U).concat(W/Y.k),j.invert(U).concat(W/j.k));return function(J){if(J===1)J=j;else{var F=ie(J),$=W/F[2];J=new ja($,U[0]-F[0]*$,U[1]-F[1]*$)}D.zoom(null,J)}})}function S(L,M,E){return!E&&L.__zooming||new v(L,M)}function v(L,M){this.that=L,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(L,M),this.taps=0}v.prototype={event:function(L){return L&&(this.sourceEvent=L),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(L,M){return this.mouse&&L!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&L!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&L!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(L){var M=wt(this.that).datum();u.call(L,this.that,new Hg(L,{sourceEvent:this.sourceEvent,target:h,type:L,transform:this.that.__zoom,dispatch:u}),M)}};function _(L,...M){if(!e.apply(this,arguments))return;var E=S(this,M).event(L),k=this.__zoom,N=Math.max(r[0],Math.min(r[1],k.k*Math.pow(2,o.apply(this,arguments)))),R=qt(L);if(E.wheel)(E.mouse[0][0]!==R[0]||E.mouse[0][1]!==R[1])&&(E.mouse[1]=k.invert(E.mouse[0]=R)),clearTimeout(E.wheel);else{if(k.k===N)return;E.mouse=[R,k.invert(R)],Nr(this),E.start()}Wl(L),E.wheel=setTimeout(D,g),E.zoom("mouse",a(m(x(k,N),E.mouse[0],E.mouse[1]),E.extent,l));function D(){E.wheel=null,E.end()}}function I(L,...M){if(d||!e.apply(this,arguments))return;var E=L.currentTarget,k=S(this,M,!0).event(L),N=wt(L.view).on("mousemove.zoom",U,!0).on("mouseup.zoom",W,!0),R=qt(L,E),D=L.clientX,q=L.clientY;Ms(L.view),Fc(L),k.mouse=[R,this.__zoom.invert(R)],Nr(this),k.start();function U(Y){if(Wl(Y),!k.moved){var j=Y.clientX-D,ie=Y.clientY-q;k.moved=j*j+ie*ie>y}k.event(Y).zoom("mouse",a(m(k.that.__zoom,k.mouse[0]=qt(Y,E),k.mouse[1]),k.extent,l))}function W(Y){N.on("mousemove.zoom mouseup.zoom",null),Es(Y.view,k.moved),Wl(Y),k.event(Y).end()}}function A(L,...M){if(e.apply(this,arguments)){var E=this.__zoom,k=qt(L.changedTouches?L.changedTouches[0]:L,this),N=E.invert(k),R=E.k*(L.shiftKey?.5:2),D=a(m(x(E,R),k,N),t.apply(this,M),l);Wl(L),i>0?wt(this).transition().duration(i).call(C,D,k,L):wt(this).call(h.transform,D,k,L)}}function T(L,...M){if(e.apply(this,arguments)){var E=L.touches,k=E.length,N=S(this,M,L.changedTouches.length===k).event(L),R,D,q,U;for(Fc(L),D=0;D<k;++D)q=E[D],U=qt(q,this),U=[U,this.__zoom.invert(U),q.identifier],N.touch0?!N.touch1&&N.touch0[2]!==U[2]&&(N.touch1=U,N.taps=0):(N.touch0=U,R=!0,N.taps=1+!!c);c&&(c=clearTimeout(c)),R&&(N.taps<2&&(f=U[0],c=setTimeout(function(){c=null},p)),Nr(this),N.start())}}function P(L,...M){if(this.__zooming){var E=S(this,M).event(L),k=L.changedTouches,N=k.length,R,D,q,U;for(Wl(L),R=0;R<N;++R)D=k[R],q=qt(D,this),E.touch0&&E.touch0[2]===D.identifier?E.touch0[0]=q:E.touch1&&E.touch1[2]===D.identifier&&(E.touch1[0]=q);if(D=E.that.__zoom,E.touch1){var W=E.touch0[0],Y=E.touch0[1],j=E.touch1[0],ie=E.touch1[1],J=(J=j[0]-W[0])*J+(J=j[1]-W[1])*J,F=(F=ie[0]-Y[0])*F+(F=ie[1]-Y[1])*F;D=x(D,Math.sqrt(J/F)),q=[(W[0]+j[0])/2,(W[1]+j[1])/2],U=[(Y[0]+ie[0])/2,(Y[1]+ie[1])/2]}else if(E.touch0)q=E.touch0[0],U=E.touch0[1];else return;E.zoom("touch",a(m(D,q,U),E.extent,l))}}function H(L,...M){if(this.__zooming){var E=S(this,M).event(L),k=L.changedTouches,N=k.length,R,D;for(Fc(L),d&&clearTimeout(d),d=setTimeout(function(){d=null},p),R=0;R<N;++R)D=k[R],E.touch0&&E.touch0[2]===D.identifier?delete E.touch0:E.touch1&&E.touch1[2]===D.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(D=qt(D,this),Math.hypot(f[0]-D[0],f[1]-D[1])<w)){var q=wt(this).on("dblclick.zoom");q&&q.apply(this,arguments)}}}return h.wheelDelta=function(L){return arguments.length?(o=typeof L=="function"?L:Xs(+L),h):o},h.filter=function(L){return arguments.length?(e=typeof L=="function"?L:Xs(!!L),h):e},h.touchable=function(L){return arguments.length?(n=typeof L=="function"?L:Xs(!!L),h):n},h.extent=function(L){return arguments.length?(t=typeof L=="function"?L:Xs([[+L[0][0],+L[0][1]],[+L[1][0],+L[1][1]]]),h):t},h.scaleExtent=function(L){return arguments.length?(r[0]=+L[0],r[1]=+L[1],h):[r[0],r[1]]},h.translateExtent=function(L){return arguments.length?(l[0][0]=+L[0][0],l[1][0]=+L[1][0],l[0][1]=+L[0][1],l[1][1]=+L[1][1],h):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},h.constrain=function(L){return arguments.length?(a=L,h):a},h.duration=function(L){return arguments.length?(i=+L,h):i},h.interpolate=function(L){return arguments.length?(s=L,h):s},h.on=function(){var L=u.on.apply(u,arguments);return L===u?h:L},h.clickDistance=function(L){return arguments.length?(y=(L=+L)*L,h):Math.sqrt(y)},h.tapDistance=function(L){return arguments.length?(w=+L,h):w},h}var ha={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:a,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?a:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},$l=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Gg=["Enter"," ","Escape"],Xg={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:a})=>`Moved selected node ${e}. New position, x: ${t}, y: ${a}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Fn;(function(e){e.Strict="strict",e.Loose="loose"})(Fn||(Fn={}));var Ka;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ka||(Ka={}));var Qo;(function(e){e.Partial="partial",e.Full="full"})(Qo||(Qo={}));var Yg={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},go;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(go||(go={}));var Kl;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Kl||(Kl={}));var ee;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ee||(ee={}));var Xv={[ee.Left]:ee.Right,[ee.Right]:ee.Left,[ee.Top]:ee.Bottom,[ee.Bottom]:ee.Top};function Zg(e){return e===null?null:e?"valid":"invalid"}var Wg=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,n2=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),jg=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Kg=(e,t,a)=>{if(!e.id)return[];let o=new Set;return a.forEach(n=>{n.source===e.id&&o.add(n.target)}),t.filter(n=>o.has(n.id))};var Ws=(e,t=[0,0])=>{let{width:a,height:o}=Ba(e),n=e.origin??t,r=a*n[0],l=o*n[1];return{x:e.position.x-r,y:e.position.y-l}},Qg=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let a=!1,o=e.reduce((n,r)=>{let l=typeof r=="string",i=!t.nodeLookup&&!l?r:void 0;return t.nodeLookup&&(i=l?t.nodeLookup.get(r):jg(r)?r:t.nodeLookup.get(r.id)),i?(a=!0,Wc(n,Xc(i,t.nodeOrigin))):n},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return a?jc(o):{x:0,y:0,width:0,height:0}},Jl=(e,t={})=>{let a={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(n=>{(t.filter===void 0||t.filter(n))&&(a=Wc(a,Xc(n)),o=!0)}),o?jc(a):{x:0,y:0,width:0,height:0}},Yc=(e,t,[a,o,n]=[0,0,1],r=!1,l=!1)=>{let i=(t.x-a)/n,s=(t.y-o)/n,u=t.width/n,c=t.height/n,f=[];for(let d of e.values()){let{measured:p,selectable:g=!0,hidden:y=!1}=d;if(l&&!g||y)continue;let w=p.width??d.width??d.initialWidth??0,h=p.height??d.height??d.initialHeight??0,{x,y:m}=d.internals.positionAbsolute,b=u2(i,s,u,c,x,m,w,h),C=w*h,S=r&&b>0;(!d.internals.handleBounds||S||b>=C||d.dragging)&&f.push(d)}return f},r2=(e,t)=>{let a=new Set;return e.forEach(o=>{a.add(o.id)}),t.filter(o=>a.has(o.source)||a.has(o.target))};function X3(e,t){let a=new Map,o=t?.nodes?new Set(t.nodes.map(n=>n.id)):null;return e.forEach(n=>{let r;if(t?.includeHiddenNodes){let{width:l,height:i}=Ba(n);r=l>0&&i>0}else r=!!(n.measured.width&&n.measured.height&&!n.hidden);r&&(!o||o.has(n.id))&&a.set(n.id,n)}),a}async function l2({nodes:e,width:t,height:a,panZoom:o,minZoom:n,maxZoom:r},l){if(e.size===0)return!0;let i=X3(e,l),s=Jl(i),u=Ks(s,t,a,l?.minZoom??n,l?.maxZoom??r,l?.padding??.1);return await o.setViewport(u,{duration:l?.duration,ease:l?.ease,interpolate:l?.interpolate}),!0}function $g({nodeId:e,nextPosition:t,nodeLookup:a,nodeOrigin:o=[0,0],nodeExtent:n,onError:r}){let l=a.get(e),i=l.parentId?a.get(l.parentId):void 0,{x:s,y:u}=i?i.internals.positionAbsolute:{x:0,y:0},c=l.origin??o,f=l.extent||n;if(l.extent==="parent"&&!l.expandParent)if(!i)r?.("005",ha.error005());else{let{width:p,height:g}=Ba(i);p&&g&&(f=[[s,u],[s+p,u+g]])}else i&&Or(l.extent)&&(f=[[l.extent[0][0]+s,l.extent[0][1]+u],[l.extent[1][0]+s,l.extent[1][1]+u]]);let d=Or(f)?Rr(t,f,l.measured):t;return(l.measured.width===void 0||l.measured.height===void 0)&&r?.("015",ha.error015()),{position:{x:d.x-s+(l.measured.width??0)*c[0],y:d.y-u+(l.measured.height??0)*c[1]},positionAbsolute:d}}async function i2({nodesToRemove:e=[],edgesToRemove:t=[],nodes:a,edges:o,onBeforeDelete:n}){let r=new Set(e.map(d=>d.id)),l=[];for(let d of a){if(d.deletable===!1)continue;let p=r.has(d.id),g=!p&&d.parentId&&l.find(y=>y.id===d.parentId);(p||g)&&l.push(d)}let i=new Set(t.map(d=>d.id)),s=o.filter(d=>d.deletable!==!1),c=r2(l,s);for(let d of s)i.has(d.id)&&!c.find(g=>g.id===d.id)&&c.push(d);if(!n)return{edges:c,nodes:l};let f=await n({nodes:l,edges:c});return typeof f=="boolean"?f?{edges:c,nodes:l}:{edges:[],nodes:[]}:f}var Ql=(e,t=0,a=1)=>Math.min(Math.max(e,t),a),Rr=(e={x:0,y:0},t,a)=>({x:Ql(e.x,t[0][0],t[1][0]-(a?.width??0)),y:Ql(e.y,t[0][1],t[1][1]-(a?.height??0))});function s2(e,t,a){let{width:o,height:n}=Ba(a),{x:r,y:l}=a.internals.positionAbsolute;return Rr(e,[[r,l],[r+o,l+n]],t)}var Yv=(e,t,a)=>e<t?Ql(Math.abs(e-t),1,t)/t:e>a?-Ql(Math.abs(e-a),1,t)/t:0,Zc=(e,t,a=15,o=40)=>{let n=Yv(e.x,o,t.width-o)*a,r=Yv(e.y,o,t.height-o)*a;return[n,r]},Wc=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Vg=({x:e,y:t,width:a,height:o})=>({x:e,y:t,x2:e+a,y2:t+o}),jc=({x:e,y:t,x2:a,y2:o})=>({x:e,y:t,width:a-e,height:o-t}),ei=(e,t=[0,0])=>{let{x:a,y:o}=jg(e)?e.internals.positionAbsolute:Ws(e,t);return{x:a,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Xc=(e,t=[0,0])=>{let{x:a,y:o}=jg(e)?e.internals.positionAbsolute:Ws(e,t);return{x:a,y:o,x2:a+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Jg=(e,t)=>jc(Wc(Vg(e),Vg(t))),u2=(e,t,a,o,n,r,l,i)=>{let s=Math.max(0,Math.min(e+a,n+l)-Math.max(e,n)),u=Math.max(0,Math.min(t+o,r+i)-Math.max(t,r));return Math.ceil(s*u)},js=(e,t)=>u2(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),eh=e=>za(e.width)&&za(e.height)&&za(e.x)&&za(e.y),za=e=>!isNaN(e)&&isFinite(e),th=(e,t)=>(a,o)=>{},ti=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),ai=({x:e,y:t},[a,o,n],r=!1,l=[1,1])=>{let i={x:(e-a)/n,y:(t-o)/n};return r?ti(i,l):i},zr=({x:e,y:t},[a,o,n])=>({x:e*n+a,y:t*n+o});function jl(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(a)}if(typeof e=="string"&&e.endsWith("%")){let a=parseFloat(e);if(!Number.isNaN(a))return Math.floor(t*a*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Y3(e,t,a){if(typeof e=="string"||typeof e=="number"){let o=jl(e,a),n=jl(e,t);return{top:o,right:n,bottom:o,left:n,x:n*2,y:o*2}}if(typeof e=="object"){let o=jl(e.top??e.y??0,a),n=jl(e.bottom??e.y??0,a),r=jl(e.left??e.x??0,t),l=jl(e.right??e.x??0,t);return{top:o,right:l,bottom:n,left:r,x:r+l,y:o+n}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Z3(e,t,a,o,n,r){let{x:l,y:i}=zr(e,[t,a,o]),{x:s,y:u}=zr({x:e.x+e.width,y:e.y+e.height},[t,a,o]),c=n-s,f=r-u;return{left:Math.floor(l),top:Math.floor(i),right:Math.floor(c),bottom:Math.floor(f)}}var Ks=(e,t,a,o,n,r)=>{let l=Y3(r,t,a),i=(t-l.x)/e.width,s=(a-l.y)/e.height,u=Math.min(i,s),c=Ql(u,o,n),f=e.x+e.width/2,d=e.y+e.height/2,p=t/2-f*c,g=a/2-d*c,y=Z3(e,p,g,c,t,a),w={left:Math.min(y.left-l.left,0),top:Math.min(y.top-l.top,0),right:Math.min(y.right-l.right,0),bottom:Math.min(y.bottom-l.bottom,0)};return{x:p-w.left+w.right,y:g-w.top+w.bottom,zoom:c}},oi=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function Or(e){return e!=null&&e!=="parent"}function Ba(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ah(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function oh(e,t={width:0,height:0},a,o,n){let r={...e},l=o.get(a);if(l){let i=l.origin||n;r.x+=l.internals.positionAbsolute.x-(t.width??0)*i[0],r.y+=l.internals.positionAbsolute.y-(t.height??0)*i[1]}return r}function nh(e,t){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}function d2(){let e,t;return{promise:new Promise((o,n)=>{e=o,t=n}),resolve:e,reject:t}}function c2(e){return{...Xg,...e||{}}}function Zs(e,{snapGrid:t=[0,0],snapToGrid:a=!1,transform:o,containerBounds:n}){let{x:r,y:l}=Oa(e),i=ai({x:r-(n?.left??0),y:l-(n?.top??0)},o),{x:s,y:u}=a?ti(i,t):i;return{xSnapped:s,ySnapped:u,...i}}var Kc=e=>({width:e.offsetWidth,height:e.offsetHeight}),rh=e=>e?.getRootNode?.()||window?.document,W3=["INPUT","SELECT","TEXTAREA"];function lh(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:W3.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var ih=e=>"clientX"in e,Oa=(e,t)=>{let a=ih(e),o=a?e.clientX:e.touches?.[0].clientX,n=a?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:n-(t?.top??0)}},Zv=(e,t,a,o,n)=>{let r=t.querySelectorAll(`.${e}`);return!r||!r.length?null:Array.from(r).map(l=>{let i=l.getBoundingClientRect();return{id:l.getAttribute("data-handleid"),type:e,nodeId:n,position:l.getAttribute("data-handlepos"),x:(i.left-a.left)/o,y:(i.top-a.top)/o,...Kc(l)}})};function Qc({sourceX:e,sourceY:t,targetX:a,targetY:o,sourceControlX:n,sourceControlY:r,targetControlX:l,targetControlY:i}){let s=e*.125+n*.375+l*.375+a*.125,u=t*.125+r*.375+i*.375+o*.125,c=Math.abs(s-e),f=Math.abs(u-t);return[s,u,c,f]}function Vc(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Wv({pos:e,x1:t,y1:a,x2:o,y2:n,c:r}){switch(e){case ee.Left:return[t-Vc(t-o,r),a];case ee.Right:return[t+Vc(o-t,r),a];case ee.Top:return[t,a-Vc(a-n,r)];case ee.Bottom:return[t,a+Vc(n-a,r)]}}function ni({sourceX:e,sourceY:t,sourcePosition:a=ee.Bottom,targetX:o,targetY:n,targetPosition:r=ee.Top,curvature:l=.25}){let[i,s]=Wv({pos:a,x1:e,y1:t,x2:o,y2:n,c:l}),[u,c]=Wv({pos:r,x1:o,y1:n,x2:e,y2:t,c:l}),[f,d,p,g]=Qc({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:i,sourceControlY:s,targetControlX:u,targetControlY:c});return[`M${e},${t} C${i},${s} ${u},${c} ${o},${n}`,f,d,p,g]}function sh({sourceX:e,sourceY:t,targetX:a,targetY:o}){let n=Math.abs(a-e)/2,r=a<e?a+n:a-n,l=Math.abs(o-t)/2,i=o<t?o+l:o-l;return[r,i,n,l]}function f2({sourceNode:e,targetNode:t,selected:a=!1,zIndex:o=0,elevateOnSelect:n=!1,zIndexMode:r="basic"}){if(r==="manual")return o;let l=n&&a?o+1e3:o,i=Math.max(e.parentId||n&&e.selected?e.internals.z:0,t.parentId||n&&t.selected?t.internals.z:0);return l+i}function p2({sourceNode:e,targetNode:t,width:a,height:o,transform:n}){let r=Wc(Xc(e),Xc(t));r.x===r.x2&&(r.x2+=1),r.y===r.y2&&(r.y2+=1);let l={x:-n[0]/n[2],y:-n[1]/n[2],width:a/n[2],height:o/n[2]};return js(l,jc(r))>0}var j3=({source:e,sourceHandle:t,target:a,targetHandle:o})=>`xy-edge__${e}${t||""}-${a}${o||""}`,K3=(e,t)=>t.some(a=>a.source===e.source&&a.target===e.target&&(a.sourceHandle===e.sourceHandle||!a.sourceHandle&&!e.sourceHandle)&&(a.targetHandle===e.targetHandle||!a.targetHandle&&!e.targetHandle)),m2=(e,t,a={})=>{if(!e.source||!e.target)return a.onError?.("006",ha.error006()),t;let o=a.getEdgeId||j3,n;return Wg(e)?n={...e}:n={...e,id:o(e)},K3(n,t)?t:(n.sourceHandle===null&&delete n.sourceHandle,n.targetHandle===null&&delete n.targetHandle,t.concat(n))};function $c({sourceX:e,sourceY:t,targetX:a,targetY:o}){let[n,r,l,i]=sh({sourceX:e,sourceY:t,targetX:a,targetY:o});return[`M ${e},${t}L ${a},${o}`,n,r,l,i]}var jv={[ee.Left]:{x:-1,y:0},[ee.Right]:{x:1,y:0},[ee.Top]:{x:0,y:-1},[ee.Bottom]:{x:0,y:1}},Q3=({source:e,sourcePosition:t=ee.Bottom,target:a})=>t===ee.Left||t===ee.Right?e.x<a.x?{x:1,y:0}:{x:-1,y:0}:e.y<a.y?{x:0,y:1}:{x:0,y:-1},Kv=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function $3({source:e,sourcePosition:t=ee.Bottom,target:a,targetPosition:o=ee.Top,center:n,offset:r,stepPosition:l}){let i=jv[t],s=jv[o],u={x:e.x+i.x*r,y:e.y+i.y*r},c={x:a.x+s.x*r,y:a.y+s.y*r},f=Q3({source:u,sourcePosition:t,target:c}),d=f.x!==0?"x":"y",p=f[d],g=[],y,w,h={x:0,y:0},x={x:0,y:0},[,,m,b]=sh({sourceX:e.x,sourceY:e.y,targetX:a.x,targetY:a.y});if(i[d]*s[d]===-1){d==="x"?(y=n.x??u.x+(c.x-u.x)*l,w=n.y??(u.y+c.y)/2):(y=n.x??(u.x+c.x)/2,w=n.y??u.y+(c.y-u.y)*l);let _=[{x:y,y:u.y},{x:y,y:c.y}],I=[{x:u.x,y:w},{x:c.x,y:w}];i[d]===p?g=d==="x"?_:I:g=d==="x"?I:_}else{let _=[{x:u.x,y:c.y}],I=[{x:c.x,y:u.y}];if(d==="x"?g=i.x===p?I:_:g=i.y===p?_:I,t===o){let L=Math.abs(e[d]-a[d]);if(L<=r){let M=Math.min(r-1,r-L);i[d]===p?h[d]=(u[d]>e[d]?-1:1)*M:x[d]=(c[d]>a[d]?-1:1)*M}}if(t!==o){let L=d==="x"?"y":"x",M=i[d]===s[L],E=u[L]>c[L],k=u[L]<c[L];(i[d]===1&&(!M&&E||M&&k)||i[d]!==1&&(!M&&k||M&&E))&&(g=d==="x"?_:I)}let A={x:u.x+h.x,y:u.y+h.y},T={x:c.x+x.x,y:c.y+x.y},P=Math.max(Math.abs(A.x-g[0].x),Math.abs(T.x-g[0].x)),H=Math.max(Math.abs(A.y-g[0].y),Math.abs(T.y-g[0].y));P>=H?(y=(A.x+T.x)/2,w=g[0].y):(y=g[0].x,w=(A.y+T.y)/2)}let C={x:u.x+h.x,y:u.y+h.y},S={x:c.x+x.x,y:c.y+x.y};return[[e,...C.x!==g[0].x||C.y!==g[0].y?[C]:[],...g,...S.x!==g[g.length-1].x||S.y!==g[g.length-1].y?[S]:[],a],y,w,m,b]}function J3(e,t,a,o){let n=Math.min(Kv(e,t)/2,Kv(t,a)/2,o),{x:r,y:l}=t;if(e.x===r&&r===a.x||e.y===l&&l===a.y)return`L${r} ${l}`;if(e.y===l){let u=e.x<a.x?-1:1,c=e.y<a.y?1:-1;return`L ${r+n*u},${l}Q ${r},${l} ${r},${l+n*c}`}let i=e.x<a.x?1:-1,s=e.y<a.y?-1:1;return`L ${r},${l+n*s}Q ${r},${l} ${r+n*i},${l}`}function Qs({sourceX:e,sourceY:t,sourcePosition:a=ee.Bottom,targetX:o,targetY:n,targetPosition:r=ee.Top,borderRadius:l=5,centerX:i,centerY:s,offset:u=20,stepPosition:c=.5}){let[f,d,p,g,y]=$3({source:{x:e,y:t},sourcePosition:a,target:{x:o,y:n},targetPosition:r,center:{x:i,y:s},offset:u,stepPosition:c}),w=`M${f[0].x} ${f[0].y}`;for(let h=1;h<f.length-1;h++)w+=J3(f[h-1],f[h],f[h+1],l);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,d,p,g,y]}function Qv(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function g2(e){let{sourceNode:t,targetNode:a}=e;if(!Qv(t)||!Qv(a))return null;let o=t.internals.handleBounds||$v(t.handles),n=a.internals.handleBounds||$v(a.handles),r=Jv(o?.source??[],e.sourceHandle),l=Jv(e.connectionMode===Fn.Strict?n?.target??[]:(n?.target??[]).concat(n?.source??[]),e.targetHandle);if(!r||!l)return e.onError?.("008",ha.error008(r?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let i=r?.position||ee.Bottom,s=l?.position||ee.Top,u=qn(t,r,i),c=qn(a,l,s);return{sourceX:u.x,sourceY:u.y,targetX:c.x,targetY:c.y,sourcePosition:i,targetPosition:s}}function $v(e){if(!e)return null;let t=[],a=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&a.push(o);return{source:t,target:a}}function qn(e,t,a=ee.Left,o=!1){let n=(t?.x??0)+e.internals.positionAbsolute.x,r=(t?.y??0)+e.internals.positionAbsolute.y,{width:l,height:i}=t??Ba(e);if(o)return{x:n+l/2,y:r+i/2};switch(t?.position??a){case ee.Top:return{x:n+l/2,y:r};case ee.Right:return{x:n+l,y:r+i/2};case ee.Bottom:return{x:n+l/2,y:r+i};case ee.Left:return{x:n,y:r+i/2}}}function Jv(e,t){return e&&(t?e.find(a=>a.id===t):e[0])||null}function Jc(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function h2(e,{id:t,defaultColor:a,defaultMarkerStart:o,defaultMarkerEnd:n}){let r=new Set;return e.reduce((l,i)=>([i.markerStart||o,i.markerEnd||n].forEach(s=>{if(s&&typeof s=="object"){let u=Jc(s,t);r.has(u)||(l.push({id:u,color:s.color||a,...s}),r.add(u))}}),l),[]).sort((l,i)=>l.id.localeCompare(i.id))}var x2=1e3,eE=10,uh={nodeOrigin:[0,0],nodeExtent:$l,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},tE={...uh,checkEquality:!0};function dh(e,t){let a={...e};for(let o in t)t[o]!==void 0&&(a[o]=t[o]);return a}function b2(e,t,a){let o=dh(uh,a);for(let n of e.values())if(n.parentId)fh(n,e,t,o);else{let r=Ws(n,o.nodeOrigin),l=Or(n.extent)?n.extent:o.nodeExtent,i=Rr(r,l,Ba(n));n.internals.positionAbsolute=i}}function aE(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let a=[],o=[];for(let n of e.handles){let r={id:n.id,width:n.width??1,height:n.height??1,nodeId:e.id,x:n.x,y:n.y,position:n.position,type:n.type};n.type==="source"?a.push(r):n.type==="target"&&o.push(r)}return{source:a,target:o}}function ch(e){return e==="manual"}function ef(e,t,a,o={}){let n=dh(tE,o),r={i:0},l=new Map(t),i=n?.elevateNodesOnSelect&&!ch(n.zIndexMode)?x2:0,s=e.length>0,u=!1;t.clear(),a.clear();for(let c of e){let f=l.get(c.id);if(n.checkEquality&&c===f?.internals.userNode)t.set(c.id,f);else{let d=Ws(c,n.nodeOrigin),p=Or(c.extent)?c.extent:n.nodeExtent,g=Rr(d,p,Ba(c));f={...n.defaults,...c,measured:{width:c.measured?.width,height:c.measured?.height},internals:{positionAbsolute:g,handleBounds:aE(c,f),z:y2(c,i,n.zIndexMode),userNode:c}},t.set(c.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(s=!1),c.parentId&&fh(f,t,a,o,r),u||(u=c.selected??!1)}return{nodesInitialized:s,hasSelectedNodes:u}}function oE(e,t){if(!e.parentId)return;let a=t.get(e.parentId);a?a.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function fh(e,t,a,o,n){let{elevateNodesOnSelect:r,nodeOrigin:l,nodeExtent:i,zIndexMode:s}=dh(uh,o),u=e.parentId,c=t.get(u);if(!c){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}oE(e,a),n&&!c.parentId&&c.internals.rootParentIndex===void 0&&s==="auto"&&(c.internals.rootParentIndex=++n.i,c.internals.z=c.internals.z+n.i*eE),n&&c.internals.rootParentIndex!==void 0&&(n.i=c.internals.rootParentIndex);let f=r&&!ch(s)?x2:0,{x:d,y:p,z:g}=nE(e,c,l,i,f,s),{positionAbsolute:y}=e.internals,w=d!==y.x||p!==y.y;(w||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:d,y:p}:y,z:g}})}function y2(e,t,a){let o=za(e.zIndex)?e.zIndex:0;return ch(a)?o:o+(e.selected?t:0)}function nE(e,t,a,o,n,r){let{x:l,y:i}=t.internals.positionAbsolute,s=Ba(e),u=Ws(e,a),c=Or(e.extent)?Rr(u,e.extent,s):u,f=Rr({x:l+c.x,y:i+c.y},o,s);e.extent==="parent"&&(f=s2(f,s,t));let d=y2(e,n,r),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=d?p+1:d}}function tf(e,t,a,o=[0,0]){let n=[],r=new Map;for(let l of e){let i=t.get(l.parentId);if(!i)continue;let s=r.get(l.parentId)?.expandedRect??ei(i),u=Jg(s,l.rect);r.set(l.parentId,{expandedRect:u,parent:i})}return r.size>0&&r.forEach(({expandedRect:l,parent:i},s)=>{let u=i.internals.positionAbsolute,c=Ba(i),f=i.origin??o,d=l.x<u.x?Math.round(Math.abs(u.x-l.x)):0,p=l.y<u.y?Math.round(Math.abs(u.y-l.y)):0,g=Math.max(c.width,Math.round(l.width)),y=Math.max(c.height,Math.round(l.height)),w=(g-c.width)*f[0],h=(y-c.height)*f[1];(d>0||p>0||w||h)&&(n.push({id:s,type:"position",position:{x:i.position.x-d+w,y:i.position.y-p+h}}),a.get(s)?.forEach(x=>{e.some(m=>m.id===x.id)||n.push({id:x.id,type:"position",position:{x:x.position.x+d,y:x.position.y+p}})})),(c.width<l.width||c.height<l.height||d||p)&&n.push({id:s,type:"dimensions",setAttributes:!0,dimensions:{width:g+(d?f[0]*d-w:0),height:y+(p?f[1]*p-h:0)}})}),n}function w2(e,t,a,o,n,r,l){let i=o?.querySelector(".xyflow__viewport"),s=!1;if(!i)return{changes:[],updatedInternals:s};let u=[],c=window.getComputedStyle(i),{m22:f}=new window.DOMMatrixReadOnly(c.transform),d=[];for(let p of e.values()){let g=t.get(p.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),s=!0;continue}let y=Kc(p.nodeElement),w=g.measured.width!==y.width||g.measured.height!==y.height;if(!!(y.width&&y.height&&(w||!g.internals.handleBounds||p.force))){let x=p.nodeElement.getBoundingClientRect(),m=Or(g.extent)?g.extent:r,{positionAbsolute:b}=g.internals;if(g.parentId&&g.extent==="parent"){let S=t.get(g.parentId);S&&(b=s2(b,y,S))}else m&&(b=Rr(b,m,y));let C={...g,measured:y,internals:{...g.internals,positionAbsolute:b,handleBounds:{source:Zv("source",p.nodeElement,x,f,g.id),target:Zv("target",p.nodeElement,x,f,g.id)}}};t.set(g.id,C),g.parentId&&fh(C,t,a,{nodeOrigin:n,zIndexMode:l}),s=!0,w&&(u.push({id:g.id,type:"dimensions",dimensions:y}),g.expandParent&&g.parentId&&d.push({id:g.id,parentId:g.parentId,rect:ei(C,n)}))}}if(d.length>0){let p=tf(d,t,a,n);u.push(...p)}return{changes:u,updatedInternals:s}}async function v2({delta:e,panZoom:t,transform:a,translateExtent:o,width:n,height:r}){if(!t||!e.x&&!e.y)return!1;let l=await t.setViewportConstrained({x:a[0]+e.x,y:a[1]+e.y,zoom:a[2]},[[0,0],[n,r]],o);return!!l&&(l.x!==a[0]||l.y!==a[1]||l.k!==a[2])}function e2(e,t,a,o,n,r){let l=n,i=o.get(l)||new Map;o.set(l,i.set(a,t)),l=`${n}-${e}`;let s=o.get(l)||new Map;if(o.set(l,s.set(a,t)),r){l=`${n}-${e}-${r}`;let u=o.get(l)||new Map;o.set(l,u.set(a,t))}}function ph(e,t,a){e.clear(),t.clear();for(let o of a){let{source:n,target:r,sourceHandle:l=null,targetHandle:i=null}=o,s={edgeId:o.id,source:n,target:r,sourceHandle:l,targetHandle:i},u=`${n}-${l}--${r}-${i}`,c=`${r}-${i}--${n}-${l}`;e2("source",s,c,e,n,l),e2("target",s,u,e,r,i),t.set(o.id,o)}}function C2(e,t){if(!e.parentId)return!1;let a=t.get(e.parentId);return a?a.selected?!0:C2(a,t):!1}function t2(e,t,a){let o=e;do{if(o?.matches?.(t))return!0;if(o===a)return!1;o=o?.parentElement}while(o);return!1}function rE(e,t,a,o){let n=new Map;for(let[r,l]of e)if((l.selected||l.id===o)&&(!l.parentId||!C2(l,e))&&(l.draggable||t&&typeof l.draggable>"u")){let i=e.get(r);i&&n.set(r,{id:r,position:i.position||{x:0,y:0},distance:{x:a.x-i.internals.positionAbsolute.x,y:a.y-i.internals.positionAbsolute.y},extent:i.extent,parentId:i.parentId,origin:i.origin,expandParent:i.expandParent,internals:{positionAbsolute:i.internals.positionAbsolute||{x:0,y:0}},measured:{width:i.measured.width??0,height:i.measured.height??0}})}return n}function Ug({nodeId:e,dragItems:t,nodeLookup:a,dragging:o=!0}){let n=[];for(let[l,i]of t){let s=a.get(l)?.internals.userNode;s&&n.push({...s,position:i.position,dragging:o})}if(!e)return[n[0],n];let r=a.get(e)?.internals.userNode;return[r?{...r,position:t.get(e)?.position||r.position,dragging:o}:n[0],n]}function lE({dragItems:e,snapGrid:t,x:a,y:o}){let n=e.values().next().value;if(!n)return null;let r={x:a-n.distance.x,y:o-n.distance.y},l=ti(r,t);return{x:l.x-r.x,y:l.y-r.y}}function S2({onNodeMouseDown:e,getStoreItems:t,onDragStart:a,onDrag:o,onDragStop:n}){let r={x:null,y:null},l=0,i=new Map,s=!1,u={x:0,y:0},c=null,f=!1,d=null,p=!1,g=!1,y=null;function w({noDragClassName:x,handleSelector:m,domNode:b,isSelectable:C,nodeId:S,nodeClickDistance:v=0}){d=wt(b);function _({x:P,y:H}){let{nodeLookup:L,nodeExtent:M,snapGrid:E,snapToGrid:k,nodeOrigin:N,onNodeDrag:R,onSelectionDrag:D,onError:q,updateNodePositions:U}=t();r={x:P,y:H};let W=!1,Y=i.size>1,j=Y&&M?Vg(Jl(i)):null,ie=Y&&k?lE({dragItems:i,snapGrid:E,x:P,y:H}):null;for(let[J,F]of i){if(!L.has(J))continue;let $={x:P-F.distance.x,y:H-F.distance.y};k&&($=ie?{x:Math.round($.x+ie.x),y:Math.round($.y+ie.y)}:ti($,E));let ue=null;if(Y&&M&&!F.extent&&j){let{positionAbsolute:ne}=F.internals,ye=ne.x-j.x+M[0][0],X=ne.x+F.measured.width-j.x2+M[1][0],re=ne.y-j.y+M[0][1],pe=ne.y+F.measured.height-j.y2+M[1][1];ue=[[ye,re],[X,pe]]}let{position:se,positionAbsolute:te}=$g({nodeId:J,nextPosition:$,nodeLookup:L,nodeExtent:ue||M,nodeOrigin:N,onError:q});W=W||F.position.x!==se.x||F.position.y!==se.y,F.position=se,F.internals.positionAbsolute=te}if(g=g||W,!!W&&(U(i,!0),y&&(o||R||!S&&D))){let[J,F]=Ug({nodeId:S,dragItems:i,nodeLookup:L});o?.(y,i,J,F),R?.(y,J,F),S||D?.(y,F)}}async function I(){if(!c)return;let{transform:P,panBy:H,autoPanSpeed:L,autoPanOnNodeDrag:M}=t();if(!M){s=!1,cancelAnimationFrame(l);return}let[E,k]=Zc(u,c,L);(E!==0||k!==0)&&(r.x=(r.x??0)-E/P[2],r.y=(r.y??0)-k/P[2],await H({x:E,y:k})&&_(r)),l=requestAnimationFrame(I)}function A(P){let{nodeLookup:H,multiSelectionActive:L,nodesDraggable:M,transform:E,snapGrid:k,snapToGrid:N,selectNodesOnDrag:R,onNodeDragStart:D,onSelectionDragStart:q,unselectNodesAndEdges:U}=t();f=!0,(!R||!C)&&!L&&S&&(H.get(S)?.selected||U()),C&&R&&S&&e?.(S);let W=Zs(P.sourceEvent,{transform:E,snapGrid:k,snapToGrid:N,containerBounds:c});if(r=W,i=rE(H,M,W,S),i.size>0&&(a||D||!S&&q)){let[Y,j]=Ug({nodeId:S,dragItems:i,nodeLookup:H});a?.(P.sourceEvent,i,Y,j),D?.(P.sourceEvent,Y,j),S||q?.(P.sourceEvent,j)}}let T=vc().clickDistance(v).on("start",P=>{let{domNode:H,nodeDragThreshold:L,transform:M,snapGrid:E,snapToGrid:k}=t();c=H?.getBoundingClientRect()||null,p=!1,g=!1,y=P.sourceEvent,L===0&&A(P),r=Zs(P.sourceEvent,{transform:M,snapGrid:E,snapToGrid:k,containerBounds:c}),u=Oa(P.sourceEvent,c)}).on("drag",P=>{let{autoPanOnNodeDrag:H,transform:L,snapGrid:M,snapToGrid:E,nodeDragThreshold:k,nodeLookup:N}=t(),R=Zs(P.sourceEvent,{transform:L,snapGrid:M,snapToGrid:E,containerBounds:c});if(y=P.sourceEvent,(P.sourceEvent.type==="touchmove"&&P.sourceEvent.touches.length>1||S&&!N.has(S))&&(p=!0),!p){if(!s&&H&&f&&(s=!0,I()),!f){let D=Oa(P.sourceEvent,c),q=D.x-u.x,U=D.y-u.y;Math.sqrt(q*q+U*U)>k&&A(P)}(r.x!==R.xSnapped||r.y!==R.ySnapped)&&i&&f&&(u=Oa(P.sourceEvent,c),_(R))}}).on("end",P=>{if(!f||p){p&&i.size>0&&t().updateNodePositions(i,!1);return}if(s=!1,f=!1,cancelAnimationFrame(l),i.size>0){let{nodeLookup:H,updateNodePositions:L,onNodeDragStop:M,onSelectionDragStop:E}=t();if(g&&(L(i,!1),g=!1),n||M||!S&&E){let[k,N]=Ug({nodeId:S,dragItems:i,nodeLookup:H,dragging:!1});n?.(P.sourceEvent,i,k,N),M?.(P.sourceEvent,k,N),S||E?.(P.sourceEvent,N)}}}).filter(P=>{let H=P.target;return!P.button&&(!x||!t2(H,`.${x}`,b))&&(!m||t2(H,m,b))});d.call(T)}function h(){d?.on(".drag",null)}return{update:w,destroy:h}}function iE(e,t,a){let o=[],n={x:e.x-a,y:e.y-a,width:a*2,height:a*2};for(let r of t.values())js(n,ei(r))>0&&o.push(r);return o}var sE=250;function uE(e,t,a,o){let n=[],r=1/0,l=iE(e,a,t+sE);for(let i of l){let s=[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]];for(let u of s){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:c,y:f}=qn(i,u,u.position,!0),d=Math.sqrt(Math.pow(c-e.x,2)+Math.pow(f-e.y,2));d>t||(d<r?(n=[{...u,x:c,y:f}],r=d):d===r&&n.push({...u,x:c,y:f}))}}if(!n.length)return null;if(n.length>1){let i=o.type==="source"?"target":"source";return n.find(s=>s.type===i)??n[0]}return n[0]}function L2(e,t,a,o,n,r=!1){let l=o.get(e);if(!l)return null;let i=n==="strict"?l.internals.handleBounds?.[t]:[...l.internals.handleBounds?.source??[],...l.internals.handleBounds?.target??[]],s=(a?i?.find(u=>u.id===a):i?.[0])??null;return s&&r?{...s,...qn(l,s,s.position,!0)}:s}function _2(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function dE(e,t){let a=null;return t?a=!0:e&&!t&&(a=!1),a}var I2=()=>!0;function cE(e,{connectionMode:t,connectionRadius:a,handleId:o,nodeId:n,edgeUpdaterType:r,isTarget:l,domNode:i,nodeLookup:s,lib:u,autoPanOnConnect:c,flowId:f,panBy:d,cancelConnection:p,onConnectStart:g,onConnect:y,onConnectEnd:w,isValidConnection:h=I2,onReconnectEnd:x,updateConnection:m,getTransform:b,getFromHandle:C,autoPanSpeed:S,dragThreshold:v=1,handleDomNode:_}){let I=rh(e.target),A=0,T,{x:P,y:H}=Oa(e),L=_2(r,_),M=i?.getBoundingClientRect(),E=!1;if(!M||!L)return;let k=L2(n,L,o,s,t);if(!k)return;let N=Oa(e,M),R=!1,D=null,q=!1,U=null;function W(){if(!c||!M)return;let[se,te]=Zc(N,M,S);d({x:se,y:te}),A=requestAnimationFrame(W)}let Y={...k,nodeId:n,type:L,position:k.position},j=s.get(n),J={inProgress:!0,isValid:null,from:qn(j,Y,ee.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:j,to:N,toHandle:null,toPosition:Xv[Y.position],toNode:null,pointer:N};function F(){E=!0,m(J),g?.(e,{nodeId:n,handleId:o,handleType:L})}v===0&&F();function $(se){if(!E){let{x:pe,y:ht}=Oa(se),_t=pe-P,Pt=ht-H;if(!(_t*_t+Pt*Pt>v*v))return;F()}if(!C()||!Y){ue(se);return}let te=b();N=Oa(se,M),T=uE(ai(N,te,!1,[1,1]),a,s,Y),R||(W(),R=!0);let ne=k2(se,{handle:T,connectionMode:t,fromNodeId:n,fromHandleId:o,fromType:l?"target":"source",isValidConnection:h,doc:I,lib:u,flowId:f,nodeLookup:s});U=ne.handleDomNode,D=ne.connection,q=dE(!!T,ne.isValid);let ye=s.get(n),X=ye?qn(ye,Y,ee.Left,!0):J.from,re={...J,from:X,isValid:q,to:ne.toHandle&&q?zr({x:ne.toHandle.x,y:ne.toHandle.y},te):N,toHandle:ne.toHandle,toPosition:q&&ne.toHandle?ne.toHandle.position:Xv[Y.position],toNode:ne.toHandle?s.get(ne.toHandle.nodeId):null,pointer:N};m(re),J=re}function ue(se){if(!("touches"in se&&se.touches.length>0)){if(E){(T||U)&&D&&q&&y?.(D);let{inProgress:te,...ne}=J,ye={...ne,toPosition:J.toHandle?J.toPosition:null};w?.(se,ye),r&&x?.(se,ye)}p(),cancelAnimationFrame(A),R=!1,q=!1,D=null,U=null,I.removeEventListener("mousemove",$),I.removeEventListener("mouseup",ue),I.removeEventListener("touchmove",$),I.removeEventListener("touchend",ue)}}I.addEventListener("mousemove",$),I.addEventListener("mouseup",ue),I.addEventListener("touchmove",$),I.addEventListener("touchend",ue)}function k2(e,{handle:t,connectionMode:a,fromNodeId:o,fromHandleId:n,fromType:r,doc:l,lib:i,flowId:s,isValidConnection:u=I2,nodeLookup:c}){let f=r==="target",d=t?l.querySelector(`.${i}-flow__handle[data-id="${s}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:g}=Oa(e),y=l.elementFromPoint(p,g),w=y?.classList.contains(`${i}-flow__handle`)?y:d,h={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let x=_2(void 0,w),m=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),C=w.classList.contains("connectable"),S=w.classList.contains("connectableend");if(!m||!x)return h;let v={source:f?m:o,sourceHandle:f?b:n,target:f?o:m,targetHandle:f?n:b};h.connection=v;let I=C&&S&&(a===Fn.Strict?f&&x==="source"||!f&&x==="target":m!==o||b!==n);h.isValid=I&&u(v),h.toHandle=L2(m,x,b,c,a,!0)}return h}var af={onPointerDown:cE,isValid:k2};function M2({domNode:e,panZoom:t,getTransform:a,getViewScale:o}){let n=wt(e);function r({translateExtent:i,width:s,height:u,zoomStep:c=1,pannable:f=!0,zoomable:d=!0,inversePan:p=!1}){let g=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=a(),C=m.sourceEvent.ctrlKey&&oi()?10:1,S=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*c,v=b[2]*Math.pow(2,S*C);t.scaleTo(v)},y=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(y=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},h=m=>{let b=a();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let C=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],S=[C[0]-y[0],C[1]-y[1]];y=C;let v=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),_={x:b[0]-S[0]*v,y:b[1]-S[1]*v},I=[[0,0],[s,u]];t.setViewportConstrained({x:_.x,y:_.y,zoom:b[2]},I,i)},x=qc().on("start",w).on("zoom",f?h:null).on("zoom.wheel",d?g:null);n.call(x,{})}function l(){n.on("zoom",null)}return{update:r,destroy:l,pointer:qt}}var of=e=>({x:e.x,y:e.y,zoom:e.k}),Fg=({x:e,y:t,zoom:a})=>Dr.translate(e,t).scale(a),Un=(e,t)=>e.target.closest(`.${t}`),E2=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),fE=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,qg=(e,t=0,a=fE,o=()=>{})=>{let n=typeof t=="number"&&t>0;return n||o(),n?e.transition().duration(t).ease(a).on("end",o):e},T2=e=>{let t=e.ctrlKey&&oi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function pE({zoomPanValues:e,noWheelClassName:t,d3Selection:a,d3Zoom:o,panOnScrollMode:n,panOnScrollSpeed:r,zoomOnPinch:l,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:u}){return c=>{if(Un(c,t))return c.ctrlKey&&c.preventDefault(),!1;c.preventDefault(),c.stopImmediatePropagation();let f=a.property("__zoom").k||1;if(c.ctrlKey&&l){let w=qt(c),h=T2(c),x=f*Math.pow(2,h);o.scaleTo(a,x,w,c);return}let d=c.deltaMode===1?20:1,p=n===Ka.Vertical?0:c.deltaX*d,g=n===Ka.Horizontal?0:c.deltaY*d;!oi()&&c.shiftKey&&n!==Ka.Vertical&&(p=c.deltaY*d,g=0),o.translateBy(a,-(p/f)*r,-(g/f)*r,{internal:!0});let y=of(a.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?s?.(c,y):(e.isPanScrolling=!0,i?.(c,y)),e.panScrollTimeout=setTimeout(()=>{u?.(c,y),e.isPanScrolling=!1},150)}}function mE({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:a}){return function(o,n){let r=o.type==="wheel",l=!t&&r&&!o.ctrlKey,i=Un(o,e);if(o.ctrlKey&&r&&i&&o.preventDefault(),l||i)return null;o.preventDefault(),a.call(this,o,n)}}function gE({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:a}){return o=>{if(o.sourceEvent?.internal)return;let n=of(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=n,o.sourceEvent?.type==="mousedown"&&t(!0),a&&a?.(o.sourceEvent,n)}}function hE({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:a,onTransformChange:o,onPanZoom:n}){return r=>{e.usedRightMouseButton=!!(a&&E2(t,e.mouseButton??0)),r.sourceEvent?.sync||o([r.transform.x,r.transform.y,r.transform.k]),n&&!r.sourceEvent?.internal&&n?.(r.sourceEvent,of(r.transform))}}function xE({zoomPanValues:e,panOnDrag:t,panOnScroll:a,onDraggingChange:o,onPanZoomEnd:n,onPaneContextMenu:r}){return l=>{if(!l.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,r&&E2(t,e.mouseButton??0)&&!e.usedRightMouseButton&&l.sourceEvent&&r(l.sourceEvent),e.usedRightMouseButton=!1,o(!1),n)){let i=of(l.transform);e.prevViewport=i,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{n?.(l.sourceEvent,i)},a?150:0)}}}function bE({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:a,zoomOnPinch:o,panOnDrag:n,panOnScroll:r,zoomOnDoubleClick:l,userSelectionActive:i,noWheelClassName:s,noPanClassName:u,lib:c,connectionInProgress:f}){return d=>{let p=t||a,g=o&&d.ctrlKey,y=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Un(d,`${c}-flow__node`)||Un(d,`${c}-flow__edge`)||Un(d,`${c}-flow__selection`)||Un(d,`${c}-flow__nodesselection`)))return!0;if(!n&&!p&&!r&&!l&&!o||i||f&&!y||Un(d,s)&&y||Un(d,u)&&(!y||r&&y&&!t)||!o&&d.ctrlKey&&y)return!1;if(!o&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!p&&!r&&!g&&y||!n&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(n)&&!n.includes(d.button)&&d.type==="mousedown")return!1;let w=Array.isArray(n)&&n.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||y||e)&&w}}function A2({domNode:e,minZoom:t,maxZoom:a,translateExtent:o,viewport:n,onPanZoom:r,onPanZoomStart:l,onPanZoomEnd:i,onDraggingChange:s}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},c=e.getBoundingClientRect(),f=[[0,0],[c.width,c.height]];(typeof ResizeObserver<"u"?new ResizeObserver(H=>{let L=H[0];L&&(f=[[0,0],[L.contentRect.width,L.contentRect.height]])}):null)?.observe(e);let p=qc().extent(()=>f).scaleExtent([t,a]).translateExtent(o),g=wt(e).call(p);b({x:n.x,y:n.y,zoom:Ql(n.zoom,t,a)},[[0,0],[c.width,c.height]],o);let y=g.on("wheel.zoom"),w=g.on("dblclick.zoom");p.wheelDelta(T2);async function h(H,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?jo:Tr).transform(qg(g,L?.duration,L?.ease,()=>M(!0)),H)}):!1}function x({noWheelClassName:H,noPanClassName:L,onPaneContextMenu:M,userSelectionActive:E,panOnScroll:k,panOnDrag:N,panOnScrollMode:R,panOnScrollSpeed:D,preventScrolling:q,zoomOnPinch:U,zoomOnScroll:W,zoomOnDoubleClick:Y,panActivationKeyPressed:j=!1,zoomActivationKeyPressed:ie,lib:J,onTransformChange:F,connectionInProgress:$,paneClickDistance:ue,selectionOnDrag:se}){E&&!u.isZoomingOrPanning&&m();let te=k&&!ie&&!E;p.clickDistance(se?1/0:!za(ue)||ue<0?0:ue);let ne=te?pE({zoomPanValues:u,noWheelClassName:H,d3Selection:g,d3Zoom:p,panOnScrollMode:R,panOnScrollSpeed:D,zoomOnPinch:U,onPanZoomStart:l,onPanZoom:r,onPanZoomEnd:i}):mE({noWheelClassName:H,preventScrolling:q,d3ZoomHandler:y});g.on("wheel.zoom",ne,{passive:!1});let ye=gE({zoomPanValues:u,onDraggingChange:s,onPanZoomStart:l});p.on("start",ye);let X=hE({zoomPanValues:u,panOnDrag:N,onPaneContextMenu:!!M,onPanZoom:r,onTransformChange:F});p.on("zoom",X);let re=xE({zoomPanValues:u,panOnDrag:N,panOnScroll:k,onPaneContextMenu:M,onPanZoomEnd:i,onDraggingChange:s});p.on("end",re);let pe=bE({panActivationKeyPressed:j,zoomActivationKeyPressed:ie,panOnDrag:N,zoomOnScroll:W,panOnScroll:k,zoomOnDoubleClick:Y,zoomOnPinch:U,userSelectionActive:E,noPanClassName:L,noWheelClassName:H,lib:J,connectionInProgress:$});p.filter(pe),Y?g.on("dblclick.zoom",w):g.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(H,L,M){let E=Fg(H),k=p?.constrain()(E,L,M);return k&&await h(k),k}async function C(H,L){let M=Fg(H);return await h(M,L),M}function S(H){if(g){let L=Fg(H),M=g.property("__zoom");(M.k!==H.zoom||M.x!==H.x||M.y!==H.y)&&p?.transform(g,L,null,{sync:!0})}}function v(){let H=g?Ys(g.node()):{x:0,y:0,k:1};return{x:H.x,y:H.y,zoom:H.k}}async function _(H,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?jo:Tr).scaleTo(qg(g,L?.duration,L?.ease,()=>M(!0)),H)}):!1}async function I(H,L){return g?new Promise(M=>{p?.interpolate(L?.interpolate==="linear"?jo:Tr).scaleBy(qg(g,L?.duration,L?.ease,()=>M(!0)),H)}):!1}function A(H){p?.scaleExtent(H)}function T(H){p?.translateExtent(H)}function P(H){let L=!za(H)||H<0?0:H;p?.clickDistance(L)}return{update:x,destroy:m,setViewport:C,setViewportConstrained:b,getViewport:v,scaleTo:_,scaleBy:I,setScaleExtent:A,setTranslateExtent:T,syncViewport:S,setClickDistance:P}}var Vn;(function(e){e.Line="line",e.Handle="handle"})(Vn||(Vn={}));function yE({width:e,prevWidth:t,height:a,prevHeight:o,affectsX:n,affectsY:r}){let l=e-t,i=a-o,s=[l>0?1:l<0?-1:0,i>0?1:i<0?-1:0];return l&&n&&(s[0]=s[0]*-1),i&&r&&(s[1]=s[1]*-1),s}function a2(e){let t=e.includes("right")||e.includes("left"),a=e.includes("bottom")||e.includes("top"),o=e.includes("left"),n=e.includes("top");return{isHorizontal:t,isVertical:a,affectsX:o,affectsY:n}}function Pn(e,t){return Math.max(0,t-e)}function Hn(e,t){return Math.max(0,e-t)}function Gc(e,t,a){return Math.max(0,t-e,e-a)}function o2(e,t){return e?!t:t}function wE(e,t,a,o,n,r,l,i){let{affectsX:s,affectsY:u}=t,{isHorizontal:c,isVertical:f}=t,d=c&&f,{xSnapped:p,ySnapped:g}=a,{minWidth:y,maxWidth:w,minHeight:h,maxHeight:x}=o,{x:m,y:b,width:C,height:S,aspectRatio:v}=e,_=Math.floor(c?p-e.pointerX:0),I=Math.floor(f?g-e.pointerY:0),A=C+(s?-_:_),T=S+(u?-I:I),P=-r[0]*C,H=-r[1]*S,L=Gc(A,y,w),M=Gc(T,h,x);if(l){let N=0,R=0;s&&_<0?N=Pn(m+_+P,l[0][0]):!s&&_>0&&(N=Hn(m+A+P,l[1][0])),u&&I<0?R=Pn(b+I+H,l[0][1]):!u&&I>0&&(R=Hn(b+T+H,l[1][1])),L=Math.max(L,N),M=Math.max(M,R)}if(i){let N=0,R=0;s&&_>0?N=Hn(m+_,i[0][0]):!s&&_<0&&(N=Pn(m+A,i[1][0])),u&&I>0?R=Hn(b+I,i[0][1]):!u&&I<0&&(R=Pn(b+T,i[1][1])),L=Math.max(L,N),M=Math.max(M,R)}if(n){if(c){let N=Gc(A/v,h,x)*v;if(L=Math.max(L,N),l){let R=0;!s&&!u||s&&!u&&d?R=Hn(b+H+A/v,l[1][1])*v:R=Pn(b+H+(s?_:-_)/v,l[0][1])*v,L=Math.max(L,R)}if(i){let R=0;!s&&!u||s&&!u&&d?R=Pn(b+A/v,i[1][1])*v:R=Hn(b+(s?_:-_)/v,i[0][1])*v,L=Math.max(L,R)}}if(f){let N=Gc(T*v,y,w)/v;if(M=Math.max(M,N),l){let R=0;!s&&!u||u&&!s&&d?R=Hn(m+T*v+P,l[1][0])/v:R=Pn(m+(u?I:-I)*v+P,l[0][0])/v,M=Math.max(M,R)}if(i){let R=0;!s&&!u||u&&!s&&d?R=Pn(m+T*v,i[1][0])/v:R=Hn(m+(u?I:-I)*v,i[0][0])/v,M=Math.max(M,R)}}}I=I+(I<0?M:-M),_=_+(_<0?L:-L),n&&(d?A>T*v?I=(o2(s,u)?-_:_)/v:_=(o2(s,u)?-I:I)*v:c?(I=_/v,u=s):(_=I*v,s=u));let E=s?m+_:m,k=u?b+I:b;return{width:C+(s?-_:_),height:S+(u?-I:I),x:r[0]*_*(s?-1:1)+E,y:r[1]*I*(u?-1:1)+k}}var N2={width:0,height:0,x:0,y:0},vE={...N2,pointerX:0,pointerY:0,aspectRatio:1};function CE(e,t,a){let o=t.position.x+e.position.x,n=t.position.y+e.position.y,r=e.measured.width??0,l=e.measured.height??0,i=a[0]*r,s=a[1]*l;return[[o-i,n-s],[o+r-i,n+l-s]]}function D2({domNode:e,nodeId:t,getStoreItems:a,onChange:o,onEnd:n}){let r=wt(e),l={controlDirection:a2("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function i({controlPosition:u,boundaries:c,keepAspectRatio:f,resizeDirection:d,onResizeStart:p,onResize:g,onResizeEnd:y,shouldResize:w}){let h={...N2},x={...vE};l={boundaries:c,resizeDirection:d,keepAspectRatio:f,controlDirection:a2(u)};let m,b=null,C=[],S,v,_,I=!1,A=vc().on("start",T=>{let{nodeLookup:P,transform:H,snapGrid:L,snapToGrid:M,nodeOrigin:E,paneDomNode:k}=a();if(m=P.get(t),!m)return;b=k?.getBoundingClientRect()??null;let{xSnapped:N,ySnapped:R}=Zs(T.sourceEvent,{transform:H,snapGrid:L,snapToGrid:M,containerBounds:b});h={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},x={...h,pointerX:N,pointerY:R,aspectRatio:h.width/h.height},S=void 0,v=Or(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(S=P.get(m.parentId)),S&&m.extent==="parent"&&(v=[[0,0],[S.measured.width,S.measured.height]]),C=[],_=void 0;for(let[D,q]of P)if(q.parentId===t&&(C.push({id:D,position:{...q.position},extent:q.extent}),q.extent==="parent"||q.expandParent)){let U=CE(q,m,q.origin??E);_?_=[[Math.min(U[0][0],_[0][0]),Math.min(U[0][1],_[0][1])],[Math.max(U[1][0],_[1][0]),Math.max(U[1][1],_[1][1])]]:_=U}p?.(T,{...h})}).on("drag",T=>{let{transform:P,snapGrid:H,snapToGrid:L,nodeOrigin:M}=a(),E=Zs(T.sourceEvent,{transform:P,snapGrid:H,snapToGrid:L,containerBounds:b}),k=[];if(!m)return;let{x:N,y:R,width:D,height:q}=h,U={},W=m.origin??M,{width:Y,height:j,x:ie,y:J}=wE(x,l.controlDirection,E,l.boundaries,l.keepAspectRatio,W,v,_),F=Y!==D,$=j!==q,ue=ie!==N&&F,se=J!==R&&$;if(!ue&&!se&&!F&&!$)return;if((ue||se||W[0]===1||W[1]===1)&&(U.x=ue?ie:h.x,U.y=se?J:h.y,h.x=U.x,h.y=U.y,C.length>0)){let X=ie-N,re=J-R;for(let pe of C)pe.position={x:pe.position.x-X+W[0]*(Y-D),y:pe.position.y-re+W[1]*(j-q)},k.push(pe)}if((F||$)&&(U.width=F&&(!l.resizeDirection||l.resizeDirection==="horizontal")?Y:h.width,U.height=$&&(!l.resizeDirection||l.resizeDirection==="vertical")?j:h.height,h.width=U.width,h.height=U.height),S&&m.expandParent){let X=W[0]*(U.width??0);U.x&&U.x<X&&(h.x=X,x.x=x.x-(U.x-X));let re=W[1]*(U.height??0);U.y&&U.y<re&&(h.y=re,x.y=x.y-(U.y-re))}let te=yE({width:h.width,prevWidth:D,height:h.height,prevHeight:q,affectsX:l.controlDirection.affectsX,affectsY:l.controlDirection.affectsY}),ne={...h,direction:te};w?.(T,ne)!==!1&&(I=!0,g?.(T,ne),o(U,k))}).on("end",T=>{I&&(y?.(T,{...h}),n?.({...h}),I=!1)});r.call(A)}function s(){r.on(".drag",null)}return{update:i,destroy:s}}var Y2=B(oe(),1),Z2=B(F2(),1);var V2={},q2=e=>{let t,a=new Set,o=(c,f)=>{let d=typeof c=="function"?c(t):c;if(!Object.is(d,t)){let p=t;t=f??(typeof d!="object"||d===null)?d:Object.assign({},t,d),a.forEach(g=>g(t,p))}},n=()=>t,s={setState:o,getState:n,getInitialState:()=>u,subscribe:c=>(a.add(c),()=>a.delete(c)),destroy:()=>{(V2.env?V2.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},u=t=e(o,n,s);return s},G2=e=>e?q2(e):q2;var{useDebugValue:UE}=Y2.default,{useSyncExternalStoreWithSelector:FE}=Z2.default,qE=e=>e;function gh(e,t=qE,a){let o=FE(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,a);return UE(o),o}var X2=(e,t)=>{let a=G2(e),o=(n,r=t)=>gh(a,n,r);return Object.assign(o,a),o},W2=(e,t)=>e?X2(e,t):X2;function He(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,n]of e)if(!Object.is(n,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let o of a)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var VE=B(sn()),uf=(0,O.createContext)(null),GE=uf.Provider,vC=ha.error001("react");function xe(e,t){let a=(0,O.useContext)(uf);if(a===null)throw new Error(vC);return gh(a,e,t)}function Ze(){let e=(0,O.useContext)(uf);if(e===null)throw new Error(vC);return(0,O.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var j2={display:"none"},XE={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},CC="react-flow__node-desc",SC="react-flow__edge-desc",YE="react-flow__aria-live",ZE=e=>e.ariaLiveMessage,WE=e=>e.ariaLabelConfig;function jE({rfId:e}){let t=xe(ZE);return(0,z.jsx)("div",{id:`${YE}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:XE,children:t})}function KE({rfId:e,disableKeyboardA11y:t}){let a=xe(WE);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{id:`${CC}-${e}`,style:j2,children:t?a["node.a11yDescription.default"]:a["node.a11yDescription.keyboardDisabled"]}),(0,z.jsx)("div",{id:`${SC}-${e}`,style:j2,children:a["edge.a11yDescription.default"]}),!t&&(0,z.jsx)(jE,{rfId:e})]})}var df=(0,O.forwardRef)(({position:e="top-left",children:t,className:a,style:o,...n},r)=>{let l=`${e}`.split("-");return(0,z.jsx)("div",{className:ot(["react-flow__panel",a,...l]),style:o,ref:r,...n,children:t})});df.displayName="Panel";var K2="https://reactflow.dev?utm_source=attribution";function QE({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,z.jsx)(df,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${K2}`,children:(0,z.jsx)("a",{href:K2,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var $E=e=>{let t=[],a=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&a.push(o);return{selectedNodes:t,selectedEdges:a}},rf=e=>e.id;function JE(e,t){return He(e.selectedNodes.map(rf),t.selectedNodes.map(rf))&&He(e.selectedEdges.map(rf),t.selectedEdges.map(rf))}function e6({onSelectionChange:e}){let t=Ze(),{selectedNodes:a,selectedEdges:o}=xe($E,JE);return(0,O.useEffect)(()=>{let n={nodes:a,edges:o};e?.(n),t.getState().onSelectionChangeHandlers.forEach(r=>r(n))},[a,o,e]),null}var t6=e=>!!e.onSelectionChangeHandlers;function a6({onSelectionChange:e}){let t=xe(t6);return e||t?(0,z.jsx)(e6,{onSelectionChange:e}):null}var LC=[0,0],o6={x:0,y:0,zoom:1},n6=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Q2=[...n6,"rfId"],r6=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),$2={translateExtent:$l,nodeOrigin:LC,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function l6(e){let{setNodes:t,setEdges:a,setMinZoom:o,setMaxZoom:n,setTranslateExtent:r,setNodeExtent:l,reset:i,setDefaultNodesAndEdges:s}=xe(r6,He),u=Ze();(0,O.useEffect)(()=>(s(e.defaultNodes,e.defaultEdges),()=>{c.current=$2,i()}),[]);let c=(0,O.useRef)($2);return(0,O.useEffect)(()=>{for(let f of Q2){let d=e[f],p=c.current[f];d!==p&&(typeof e[f]>"u"||(f==="nodes"?t(d):f==="edges"?a(d):f==="minZoom"?o(d):f==="maxZoom"?n(d):f==="translateExtent"?r(d):f==="nodeExtent"?l(d):f==="ariaLabelConfig"?u.setState({ariaLabelConfig:c2(d)}):f==="fitView"?u.setState({fitViewQueued:d}):f==="fitViewOptions"?u.setState({fitViewOptions:d}):u.setState({[f]:d})))}c.current=e},Q2.map(f=>e[f])),null}function J2(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function i6(e){let[t,a]=(0,O.useState)(e==="system"?null:e);return(0,O.useEffect)(()=>{if(e!=="system"){a(e);return}let o=J2(),n=()=>a(o?.matches?"dark":"light");return n(),o?.addEventListener("change",n),()=>{o?.removeEventListener("change",n)}},[e]),t!==null?t:J2()?.matches?"dark":"light"}var eC=typeof document<"u"?document:null;function $s(e=null,t={target:eC,actInsideInputWithModifier:!0}){let[a,o]=(0,O.useState)(!1),n=(0,O.useRef)(!1),r=(0,O.useRef)(new Set([])),[l,i]=(0,O.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),c=u.reduce((f,d)=>f.concat(...d),[]);return[u,c]}return[[],[]]},[e]);return(0,O.useEffect)(()=>{let s=t?.target??eC,u=t?.actInsideInputWithModifier??!0;if(e!==null){let c=p=>{if(n.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!n.current||n.current&&!u)&&lh(p))return!1;let y=aC(p.code,i);if(r.current.add(p[y]),tC(l,r.current,!1)){let w=p.composedPath?.()?.[0]||p.target,h=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(n.current||!h)&&p.preventDefault(),o(!0)}},f=p=>{let g=aC(p.code,i);tC(l,r.current,!0)?(o(!1),r.current.clear()):r.current.delete(p[g]),p.key==="Meta"&&r.current.clear(),n.current=!1},d=()=>{r.current.clear(),o(!1)};return s?.addEventListener("keydown",c),s?.addEventListener("keyup",f),window.addEventListener("blur",d),window.addEventListener("contextmenu",d),()=>{s?.removeEventListener("keydown",c),s?.removeEventListener("keyup",f),window.removeEventListener("blur",d),window.removeEventListener("contextmenu",d)}}},[e,o]),a}function tC(e,t,a){return e.filter(o=>a||o.length===t.size).some(o=>o.every(n=>t.has(n)))}function aC(e,t){return t.includes(e)?"code":"key"}var s6=()=>{let e=Ze();return(0,O.useMemo)(()=>({zoomIn:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:a}=e.getState();return a?a.scaleBy(1/1.2,t):!1},zoomTo:async(t,a)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,a):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,a)=>{let{transform:[o,n,r],panZoom:l}=e.getState();return l?(await l.setViewport({x:t.x??o,y:t.y??n,zoom:t.zoom??r},a),!0):!1},getViewport:()=>{let[t,a,o]=e.getState().transform;return{x:t,y:a,zoom:o}},setCenter:async(t,a,o)=>e.getState().setCenter(t,a,o),fitBounds:async(t,a)=>{let{width:o,height:n,minZoom:r,maxZoom:l,panZoom:i}=e.getState(),s=Ks(t,o,n,r,l,a?.padding??.1);return i?(await i.setViewport(s,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0):!1},screenToFlowPosition:(t,a={})=>{let{transform:o,snapGrid:n,snapToGrid:r,domNode:l}=e.getState();if(!l)return t;let{x:i,y:s}=l.getBoundingClientRect(),u={x:t.x-i,y:t.y-s},c=a.snapGrid??n,f=a.snapToGrid??r;return ai(u,o,f,c)},flowToScreenPosition:t=>{let{transform:a,domNode:o}=e.getState();if(!o)return t;let{x:n,y:r}=o.getBoundingClientRect(),l=zr(t,a);return{x:l.x+n,y:l.y+r}}}),[])};function _C(e,t){let a=[],o=new Map,n=[];for(let r of e)if(r.type==="add"){n.push(r);continue}else if(r.type==="remove"||r.type==="replace")o.set(r.id,[r]);else{let l=o.get(r.id);l?l.push(r):o.set(r.id,[r])}for(let r of t){let l=o.get(r.id);if(!l){a.push(r);continue}if(l[0].type==="remove")continue;if(l[0].type==="replace"){a.push({...l[0].item});continue}let i={...r};for(let s of l)u6(s,i);a.push(i)}return n.length&&n.forEach(r=>{r.index!==void 0?a.splice(r.index,0,{...r.item}):a.push({...r.item})}),a}function u6(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function yh(e,t){return _C(e,t)}function wh(e,t){return _C(e,t)}function Br(e,t){return{id:e,type:"select",selected:t}}function li(e,t=new Set,a=!1){let o=[];for(let[n,r]of e){let l=t.has(n);!(r.selected===void 0&&!l)&&r.selected!==l&&(a&&(r.selected=l),o.push(Br(r.id,l)))}return o}function oC({items:e=[],lookup:t}){let a=[],o=new Map(e.map(n=>[n.id,n]));for(let[n,r]of e.entries()){let l=t.get(r.id),i=l?.internals?.userNode??l;i!==void 0&&i!==r&&a.push({id:r.id,item:r,type:"replace"}),i===void 0&&a.push({item:r,type:"add",index:n})}for(let[n]of t)o.get(n)===void 0&&a.push({id:n,type:"remove"});return a}function nC(e){return{id:e.id,type:"remove"}}var d6=th("React Flow","https://reactflow.dev/");function c6(e,t,a={}){return m2(e,t,{...a,onError:a.onError??d6})}var rC=e=>n2(e),f6=e=>Wg(e);function IC(e){return(0,O.forwardRef)(e)}var kC=typeof window<"u"?O.useLayoutEffect:O.useEffect;function lC(e){let[t,a]=(0,O.useState)(BigInt(0)),[o]=(0,O.useState)(()=>p6(()=>a(n=>n+BigInt(1))));return kC(()=>{let n=o.get();n.length&&(e(n),o.reset())},[t]),o}function p6(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:a=>{t.push(a),e()}}}var MC=(0,O.createContext)(null);function m6({children:e}){let t=Ze(),a=(0,O.useCallback)(i=>{let{nodes:s=[],setNodes:u,hasDefaultNodes:c,onNodesChange:f,nodeLookup:d,fitViewQueued:p,onNodesChangeMiddlewareMap:g}=t.getState(),y=s;for(let h of i)y=typeof h=="function"?h(y):h;let w=oC({items:y,lookup:d});for(let h of g.values())w=h(w);c&&u(y),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:x,setNodes:m}=t.getState();h&&m(x)})},[]),o=lC(a),n=(0,O.useCallback)(i=>{let{edges:s=[],setEdges:u,hasDefaultEdges:c,onEdgesChange:f,edgeLookup:d}=t.getState(),p=s;for(let g of i)p=typeof g=="function"?g(p):g;c?u(p):f&&f(oC({items:p,lookup:d}))},[]),r=lC(n),l=(0,O.useMemo)(()=>({nodeQueue:o,edgeQueue:r}),[]);return(0,z.jsx)(MC.Provider,{value:l,children:e})}function g6(){let e=(0,O.useContext)(MC);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var h6=e=>!!e.panZoom;function xa(){let e=s6(),t=Ze(),a=g6(),o=xe(h6),n=(0,O.useMemo)(()=>{let r=f=>t.getState().nodeLookup.get(f),l=f=>{a.nodeQueue.push(f)},i=f=>{a.edgeQueue.push(f)},s=f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState(),g=rC(f)?f:d.get(f.id),y=g.parentId?oh(g.position,g.measured,g.parentId,d,p):g.position,w={...g,position:y,width:g.measured?.width??g.width,height:g.measured?.height??g.height};return ei(w)},u=(f,d,p={replace:!1})=>{l(g=>g.map(y=>{if(y.id===f){let w=typeof d=="function"?d(y):d;return p.replace&&rC(w)?w:{...y,...w}}return y}))},c=(f,d,p={replace:!1})=>{i(g=>g.map(y=>{if(y.id===f){let w=typeof d=="function"?d(y):d;return p.replace&&f6(w)?w:{...y,...w}}return y}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>r(f)?.internals.userNode,getInternalNode:r,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(d=>({...d}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:l,setEdges:i,addNodes:f=>{let d=Array.isArray(f)?f:[f];a.nodeQueue.push(p=>[...p,...d])},addEdges:f=>{let d=Array.isArray(f)?f:[f];a.edgeQueue.push(p=>[...p,...d])},toObject:()=>{let{nodes:f=[],edges:d=[],transform:p}=t.getState(),[g,y,w]=p;return{nodes:f.map(h=>({...h})),edges:d.map(h=>({...h})),viewport:{x:g,y,zoom:w}}},deleteElements:async({nodes:f=[],edges:d=[]})=>{let{nodes:p,edges:g,onNodesDelete:y,onEdgesDelete:w,triggerNodeChanges:h,triggerEdgeChanges:x,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:C,edges:S}=await i2({nodesToRemove:f,edgesToRemove:d,nodes:p,edges:g,onBeforeDelete:b}),v=S.length>0,_=C.length>0;if(v){let I=S.map(nC);w?.(S),x(I)}if(_){let I=C.map(nC);y?.(C),h(I)}return(_||v)&&m?.({nodes:C,edges:S}),{deletedNodes:C,deletedEdges:S}},getIntersectingNodes:(f,d=!0,p)=>{let g=eh(f),y=g?f:s(f),w=p!==void 0;return y?(p||t.getState().nodes).filter(h=>{let x=t.getState().nodeLookup.get(h.id);if(x&&!g&&(h.id===f.id||!x.internals.positionAbsolute))return!1;let m=ei(w?h:x),b=js(m,y);return d&&b>0||b>=m.width*m.height||b>=y.width*y.height}):[]},isNodeIntersecting:(f,d,p=!0)=>{let y=eh(f)?f:s(f);if(!y)return!1;let w=js(y,d);return p&&w>0||w>=d.width*d.height||w>=y.width*y.height},updateNode:u,updateNodeData:(f,d,p={replace:!1})=>{u(f,g=>{let y=typeof d=="function"?d(g):d;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},updateEdge:c,updateEdgeData:(f,d,p={replace:!1})=>{c(f,g=>{let y=typeof d=="function"?d(g):d;return p.replace?{...g,data:y}:{...g,data:{...g.data,...y}}},p)},getNodesBounds:f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState();return Qg(f,{nodeLookup:d,nodeOrigin:p})},getHandleConnections:({type:f,id:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${d?`-${d}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?d?`-${f}-${d}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let d=t.getState().fitViewResolver??d2();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:d}),a.nodeQueue.push(p=>[...p]),d.promise}}},[]);return(0,O.useMemo)(()=>({...n,...e,viewportInitialized:o}),[o])}var iC=e=>e.selected,x6=typeof window<"u"?window:void 0;function b6({deleteKeyCode:e,multiSelectionKeyCode:t}){let a=Ze(),{deleteElements:o}=xa(),n=$s(e,{actInsideInputWithModifier:!1}),r=$s(t,{target:x6});(0,O.useEffect)(()=>{if(n){let{edges:l,nodes:i}=a.getState();o({nodes:i.filter(iC),edges:l.filter(iC)}),a.setState({nodesSelectionActive:!1})}},[n]),(0,O.useEffect)(()=>{a.setState({multiSelectionActive:r})},[r])}function y6(e){let t=Ze();(0,O.useEffect)(()=>{let a=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Kc(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",ha.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){a(),window.addEventListener("resize",a);let o=new ResizeObserver(()=>a());return o.observe(e.current),()=>{window.removeEventListener("resize",a),o&&e.current&&o.unobserve(e.current)}}},[])}var cf={position:"absolute",width:"100%",height:"100%",top:0,left:0},w6=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function v6({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:a=!0,panOnScroll:o=!1,panActivationKeyPressed:n,panOnScrollSpeed:r=.5,panOnScrollMode:l=Ka.Free,zoomOnDoubleClick:i=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:c,minZoom:f,maxZoom:d,zoomActivationKeyCode:p,preventScrolling:g=!0,children:y,noWheelClassName:w,noPanClassName:h,onViewportChange:x,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:C}){let S=Ze(),v=(0,O.useRef)(null),{userSelectionActive:_,lib:I,connectionInProgress:A}=xe(w6,He),T=$s(p),P=(0,O.useRef)();y6(v);let H=(0,O.useCallback)(L=>{x?.({x:L[0],y:L[1],zoom:L[2]}),m||S.setState({transform:L})},[x,m]);return(0,O.useEffect)(()=>{if(v.current){P.current=A2({domNode:v.current,minZoom:f,maxZoom:d,translateExtent:c,viewport:u,onDraggingChange:k=>S.setState(N=>N.paneDragging===k?N:{paneDragging:k}),onPanZoomStart:(k,N)=>{let{onViewportChangeStart:R,onMoveStart:D}=S.getState();D?.(k,N),R?.(N)},onPanZoom:(k,N)=>{let{onViewportChange:R,onMove:D}=S.getState();D?.(k,N),R?.(N)},onPanZoomEnd:(k,N)=>{let{onViewportChangeEnd:R,onMoveEnd:D}=S.getState();D?.(k,N),R?.(N)}});let{x:L,y:M,zoom:E}=P.current.getViewport();return S.setState({panZoom:P.current,transform:[L,M,E],domNode:v.current.closest(".react-flow")}),()=>{P.current?.destroy()}}},[]),(0,O.useEffect)(()=>{P.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:a,panOnScroll:o,panActivationKeyPressed:n,panOnScrollSpeed:r,panOnScrollMode:l,zoomOnDoubleClick:i,panOnDrag:s,zoomActivationKeyPressed:T,preventScrolling:g,noPanClassName:h,userSelectionActive:_,noWheelClassName:w,lib:I,onTransformChange:H,connectionInProgress:A,selectionOnDrag:C,paneClickDistance:b})},[e,t,a,o,n,r,l,i,s,T,g,h,_,w,I,H,A,C,b]),(0,z.jsx)("div",{className:"react-flow__renderer",ref:v,style:cf,children:y})}var C6=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function S6(){let{userSelectionActive:e,userSelectionRect:t}=xe(C6,He);return e&&t?(0,z.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var hh=(e,t)=>a=>{a.target===t.current&&e?.(a)},L6=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function _6({isSelecting:e,selectionKeyPressed:t,selectionMode:a=Qo.Full,panOnDrag:o,autoPanOnSelection:n,paneClickDistance:r,selectionOnDrag:l,onSelectionStart:i,onSelectionEnd:s,onPaneClick:u,onPaneContextMenu:c,onPaneScroll:f,onPaneMouseEnter:d,onPaneMouseMove:p,onPaneMouseLeave:g,children:y}){let w=(0,O.useRef)(0),h=Ze(),{userSelectionActive:x,elementsSelectable:m,dragging:b,panBy:C,autoPanSpeed:S}=xe(L6,He),v=m&&(e||x),_=(0,O.useRef)(null),I=(0,O.useRef)(),A=(0,O.useRef)(new Set),T=(0,O.useRef)(new Set),P=(0,O.useRef)(!1),H=(0,O.useRef)(!1),L=(0,O.useRef)({x:0,y:0}),M=(0,O.useRef)(!1),E=F=>{if(H.current||P.current||h.getState().connection.inProgress){H.current=!1,P.current=!1;return}u?.(F),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},k=F=>{if(Array.isArray(o)&&o?.includes(2)){F.preventDefault();return}c?.(F)},N=f?F=>f(F):void 0,R=F=>{H.current&&(F.stopPropagation(),H.current=!1)},D=F=>{if(F.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:$,transform:ue}=h.getState();if(I.current=$?.getBoundingClientRect(),!I.current)return;let se=F.target===_.current;if(!se&&!!F.target.closest(".nokey")||!e||!(l&&se||t)||F.button!==0||!F.isPrimary)return;F.target?.setPointerCapture?.(F.pointerId),H.current=!1;let{x:ye,y:X}=Oa(F.nativeEvent,I.current),re=ai({x:ye,y:X},ue);h.setState({userSelectionRect:{width:0,height:0,startX:re.x,startY:re.y,x:ye,y:X}}),se||(F.stopPropagation(),F.preventDefault())};function q(F,$){let{userSelectionRect:ue}=h.getState();if(!ue)return;let{transform:se,nodeLookup:te,edgeLookup:ne,connectionLookup:ye,triggerNodeChanges:X,triggerEdgeChanges:re,defaultEdgeOptions:pe}=h.getState(),ht={x:ue.startX,y:ue.startY},{x:_t,y:Pt}=zr(ht,se),Va={startX:ht.x,startY:ht.y,x:F<_t?F:_t,y:$<Pt?$:Pt,width:Math.abs(F-_t),height:Math.abs($-Pt)},ar=A.current,_o=T.current;A.current=new Set(Yc(te,Va,se,a===Qo.Partial,!0).map(ra=>ra.id)),T.current=new Set;let Io=pe?.selectable??!0;for(let ra of A.current){let Q=ye.get(ra);if(Q)for(let{edgeId:Ue}of Q.values()){let et=ne.get(Ue);et&&(et.selectable??Io)&&T.current.add(Ue)}}if(!nh(ar,A.current)){let ra=li(te,A.current,!0);X(ra)}if(!nh(_o,T.current)){let ra=li(ne,T.current);re(ra)}h.setState({userSelectionRect:Va,userSelectionActive:!0,nodesSelectionActive:!1})}function U(){if(!n||!I.current)return;let[F,$]=Zc(L.current,I.current,S);C({x:F,y:$}).then(ue=>{if(!H.current||!ue){w.current=requestAnimationFrame(U);return}let{x:se,y:te}=L.current;q(se,te),w.current=requestAnimationFrame(U)})}let W=()=>{cancelAnimationFrame(w.current),w.current=0,M.current=!1};(0,O.useEffect)(()=>()=>W(),[]);let Y=F=>{let{userSelectionRect:$,transform:ue,resetSelectedElements:se}=h.getState();if(!I.current||!$)return;let{x:te,y:ne}=Oa(F.nativeEvent,I.current);L.current={x:te,y:ne};let ye=zr({x:$.startX,y:$.startY},ue);if(!H.current){let X=t?0:r;if(Math.hypot(te-ye.x,ne-ye.y)<=X)return;se(),i?.(F)}H.current=!0,M.current||(U(),M.current=!0),q(te,ne)},j=F=>{if(!v){F.target===_.current&&h.getState().connection.inProgress&&(P.current=!0);return}F.button===0&&(F.target?.releasePointerCapture?.(F.pointerId),!x&&F.target===_.current&&h.getState().userSelectionRect&&E?.(F),h.setState({userSelectionActive:!1,userSelectionRect:null}),H.current&&(s?.(F),h.setState({nodesSelectionActive:A.current.size>0})),W())},ie=F=>{F.target?.releasePointerCapture?.(F.pointerId),W()},J=o===!0||Array.isArray(o)&&o.includes(0);return(0,z.jsxs)("div",{className:ot(["react-flow__pane",{draggable:J,dragging:b,selection:e}]),onClick:v?void 0:hh(E,_),onContextMenu:hh(k,_),onWheel:hh(N,_),onPointerEnter:v?void 0:d,onPointerMove:v?Y:p,onPointerUp:j,onPointerCancel:v?ie:void 0,onPointerDownCapture:v?D:void 0,onClickCapture:v?R:void 0,onPointerLeave:g,ref:_,style:cf,children:[y,(0,z.jsx)(S6,{})]})}function bh({id:e,store:t,unselect:a=!1,nodeRef:o}){let{addSelectedNodes:n,unselectNodesAndEdges:r,multiSelectionActive:l,nodeLookup:i,onError:s}=t.getState(),u=i.get(e);if(!u){s?.("012",ha.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(a||u.selected&&l)&&(r({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):n([e])}function EC({nodeRef:e,disabled:t=!1,noDragClassName:a,handleSelector:o,nodeId:n,isSelectable:r,nodeClickDistance:l}){let i=Ze(),[s,u]=(0,O.useState)(!1),c=(0,O.useRef)();return(0,O.useEffect)(()=>{if(!t)return c.current=S2({getStoreItems:()=>i.getState(),onNodeMouseDown:f=>{bh({id:f,store:i,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{c.current?.destroy(),c.current=void 0}},[t,i,e]),(0,O.useEffect)(()=>{t||!e.current||!c.current||c.current.update({noDragClassName:a,handleSelector:o,domNode:e.current,isSelectable:r,nodeId:n,nodeClickDistance:l})},[a,o,t,r,e,n,l]),s}var I6=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function TC(){let e=Ze();return(0,O.useCallback)(a=>{let{nodeExtent:o,snapToGrid:n,snapGrid:r,nodesDraggable:l,onError:i,updateNodePositions:s,nodeLookup:u,nodeOrigin:c}=e.getState(),f=new Map,d=I6(l),p=n?r[0]:5,g=n?r[1]:5,y=a.direction.x*p*a.factor,w=a.direction.y*g*a.factor;for(let[,h]of u){if(!d(h))continue;let x={x:h.internals.positionAbsolute.x+y,y:h.internals.positionAbsolute.y+w};n&&(x=ti(x,r));let{position:m,positionAbsolute:b}=$g({nodeId:h.id,nextPosition:x,nodeLookup:u,nodeExtent:o,nodeOrigin:c,onError:i});h.position=m,h.internals.positionAbsolute=b,f.set(h.id,h)}s(f)},[])}var vh=(0,O.createContext)(null),k6=vh.Provider;vh.Consumer;var AC=()=>(0,O.useContext)(vh),M6=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),NC=(0,O.createContext)(null);function E6({children:e}){let t=xe(M6,He);return(0,z.jsx)(NC.Provider,{value:t,children:e})}function T6(){let e=(0,O.useContext)(NC);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var A6={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},N6=(e,t,a)=>o=>{let{connectionClickStartHandle:n,connectionMode:r,connection:l}=o,{fromHandle:i,toHandle:s,isValid:u}=l;if(!i&&!n)return A6;let c=s?.nodeId===e&&s?.id===t&&s?.type===a;return{connectingFrom:i?.nodeId===e&&i?.id===t&&i?.type===a,connectingTo:c,clickConnecting:n?.nodeId===e&&n?.id===t&&n?.type===a,isPossibleEndHandle:r===Fn.Strict?i?.type!==a:e!==i?.nodeId||t!==i?.id,connectionInProcess:!!i,clickConnectionInProcess:!!n,valid:c&&u}};function D6({type:e="source",position:t=ee.Top,isValidConnection:a,isConnectable:o=!0,isConnectableStart:n=!0,isConnectableEnd:r=!0,id:l,onConnect:i,children:s,className:u,onMouseDown:c,onTouchStart:f,...d},p){let g=l||null,y=e==="target",w=Ze(),h=AC(),{connectOnClick:x,noPanClassName:m,rfId:b}=T6(),{connectingFrom:C,connectingTo:S,clickConnecting:v,isPossibleEndHandle:_,connectionInProcess:I,clickConnectionInProcess:A,valid:T}=xe(N6(h,g,e),He);h||w.getState().onError?.("010",ha.error010());let P=M=>{let{defaultEdgeOptions:E,onConnect:k,hasDefaultEdges:N}=w.getState(),R={...E,...M};if(N){let{edges:D,setEdges:q,onError:U}=w.getState();q(c6(R,D,{onError:U}))}k?.(R),i?.(R)},H=M=>{if(!h)return;let E=ih(M.nativeEvent);if(n&&(E&&M.button===0||!E)){let k=w.getState();af.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:k.autoPanOnConnect,connectionMode:k.connectionMode,connectionRadius:k.connectionRadius,domNode:k.domNode,nodeLookup:k.nodeLookup,lib:k.lib,isTarget:y,handleId:g,nodeId:h,flowId:k.rfId,panBy:k.panBy,cancelConnection:k.cancelConnection,onConnectStart:k.onConnectStart,onConnectEnd:(...N)=>w.getState().onConnectEnd?.(...N),updateConnection:k.updateConnection,onConnect:P,isValidConnection:a||((...N)=>w.getState().isValidConnection?.(...N)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:k.autoPanSpeed,dragThreshold:k.connectionDragThreshold})}E?c?.(M):f?.(M)},L=M=>{let{onClickConnectStart:E,onClickConnectEnd:k,connectionClickStartHandle:N,connectionMode:R,isValidConnection:D,lib:q,rfId:U,nodeLookup:W,connection:Y}=w.getState();if(!h||!N&&!n)return;if(!N){E?.(M.nativeEvent,{nodeId:h,handleId:g,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:h,type:e,id:g}});return}let j=rh(M.target),ie=a||D,{connection:J,isValid:F}=af.isValid(M.nativeEvent,{handle:{nodeId:h,id:g,type:e},connectionMode:R,fromNodeId:N.nodeId,fromHandleId:N.id||null,fromType:N.type,isValidConnection:ie,flowId:U,doc:j,lib:q,nodeLookup:W});F&&J&&P(J);let $=structuredClone(Y);delete $.inProgress,$.toPosition=$.toHandle?$.toHandle.position:null,k?.(M,$),w.setState({connectionClickStartHandle:null})};return(0,z.jsx)("div",{"data-handleid":g,"data-nodeid":h,"data-handlepos":t,"data-id":`${b}-${h}-${g}-${e}`,className:ot(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!y,target:y,connectable:o,connectablestart:n,connectableend:r,clickconnecting:v,connectingfrom:C,connectingto:S,valid:T,connectionindicator:o&&(!I||_)&&(I||A?r:n)}]),onMouseDown:H,onTouchStart:H,onClick:x?L:void 0,ref:p,...d,children:s})}var Gn=(0,O.memo)(IC(D6));function R6({data:e,isConnectable:t,sourcePosition:a=ee.Bottom}){return(0,z.jsxs)(z.Fragment,{children:[e?.label,(0,z.jsx)(Gn,{type:"source",position:a,isConnectable:t})]})}function z6({data:e,isConnectable:t,targetPosition:a=ee.Top,sourcePosition:o=ee.Bottom}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Gn,{type:"target",position:a,isConnectable:t}),e?.label,(0,z.jsx)(Gn,{type:"source",position:o,isConnectable:t})]})}function O6(){return null}function B6({data:e,isConnectable:t,targetPosition:a=ee.Top}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Gn,{type:"target",position:a,isConnectable:t}),e?.label]})}var sf={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},sC={input:R6,default:z6,output:B6,group:O6};function P6(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var H6=e=>{let{width:t,height:a,x:o,y:n}=Jl(e.nodeLookup,{filter:r=>!!r.selected});return{width:za(t)?t:null,height:za(a)?a:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${n}px)`}};function U6({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:a}){let o=Ze(),{width:n,height:r,transformString:l,userSelectionActive:i}=xe(H6,He),s=TC(),u=(0,O.useRef)(null);(0,O.useEffect)(()=>{a||u.current?.focus({preventScroll:!0})},[a]);let c=!i&&n!==null&&r!==null;if(EC({nodeRef:u,disabled:!c}),!c)return null;let f=e?p=>{let g=o.getState().nodes.filter(y=>y.selected);e(p,g)}:void 0,d=p=>{Object.prototype.hasOwnProperty.call(sf,p.key)&&(p.preventDefault(),s({direction:sf[p.key],factor:p.shiftKey?4:1}))};return(0,z.jsx)("div",{className:ot(["react-flow__nodesselection","react-flow__container",t]),style:{transform:l},children:(0,z.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:a?void 0:-1,onKeyDown:a?void 0:d,style:{width:n,height:r}})})}var uC=typeof window<"u"?window:void 0,F6=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function DC({children:e,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,paneClickDistance:i,deleteKeyCode:s,selectionKeyCode:u,selectionOnDrag:c,selectionMode:f,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:g,panActivationKeyCode:y,zoomActivationKeyCode:w,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:C,panOnScrollMode:S,zoomOnDoubleClick:v,panOnDrag:_,autoPanOnSelection:I,defaultViewport:A,translateExtent:T,minZoom:P,maxZoom:H,preventScrolling:L,onSelectionContextMenu:M,noWheelClassName:E,noPanClassName:k,disableKeyboardA11y:N,onViewportChange:R,isControlledViewport:D}){let{nodesSelectionActive:q,userSelectionActive:U}=xe(F6,He),W=$s(u,{target:uC}),Y=$s(y,{target:uC}),j=Y||_,ie=Y||b,J=c&&j!==!0,F=W||U||J;return b6({deleteKeyCode:s,multiSelectionKeyCode:g}),(0,z.jsx)(v6,{onPaneContextMenu:r,elementsSelectable:h,zoomOnScroll:x,zoomOnPinch:m,panOnScroll:ie,panActivationKeyPressed:Y,panOnScrollSpeed:C,panOnScrollMode:S,zoomOnDoubleClick:v,panOnDrag:!W&&j,defaultViewport:A,translateExtent:T,minZoom:P,maxZoom:H,zoomActivationKeyCode:w,preventScrolling:L,noWheelClassName:E,noPanClassName:k,onViewportChange:R,isControlledViewport:D,paneClickDistance:i,selectionOnDrag:J,children:(0,z.jsxs)(_6,{onSelectionStart:d,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:a,onPaneMouseMove:o,onPaneMouseLeave:n,onPaneContextMenu:r,onPaneScroll:l,panOnDrag:j,autoPanOnSelection:I,isSelecting:!!F,selectionMode:f,selectionKeyPressed:W,paneClickDistance:i,selectionOnDrag:J,children:[e,q&&(0,z.jsx)(U6,{onSelectionContextMenu:M,noPanClassName:k,disableKeyboardA11y:N})]})})}DC.displayName="FlowRenderer";var q6=(0,O.memo)(DC),V6=e=>t=>e?Yc(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(a=>a.id):Array.from(t.nodeLookup.keys());function G6(e){return xe((0,O.useCallback)(V6(e),[e]),He)}var X6=e=>e.updateNodeInternals;function Y6(){let e=xe(X6),[t]=(0,O.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(a=>{let o=new Map;a.forEach(n=>{let r=n.target.getAttribute("data-id");o.set(r,{id:r,nodeElement:n.target,force:!0})}),e(o)}));return(0,O.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Z6({node:e,nodeType:t,hasDimensions:a,resizeObserver:o}){let n=Ze(),r=(0,O.useRef)(null),l=(0,O.useRef)(null),i=(0,O.useRef)(e.sourcePosition),s=(0,O.useRef)(e.targetPosition),u=(0,O.useRef)(t),c=a&&!!e.internals.handleBounds;return(0,O.useEffect)(()=>{r.current&&!e.hidden&&(!c||l.current!==r.current)&&(l.current&&o?.unobserve(l.current),o?.observe(r.current),l.current=r.current)},[c,e.hidden]),(0,O.useEffect)(()=>()=>{l.current&&(o?.unobserve(l.current),l.current=null)},[]),(0,O.useEffect)(()=>{if(r.current){let f=u.current!==t,d=i.current!==e.sourcePosition,p=s.current!==e.targetPosition;(f||d||p)&&(u.current=t,i.current=e.sourcePosition,s.current=e.targetPosition,n.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:r.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),r}function W6({id:e,onClick:t,onMouseEnter:a,onMouseMove:o,onMouseLeave:n,onContextMenu:r,onDoubleClick:l,nodesDraggable:i,elementsSelectable:s,nodesConnectable:u,nodesFocusable:c,resizeObserver:f,noDragClassName:d,noPanClassName:p,disableKeyboardA11y:g,rfId:y,nodeTypes:w,nodeClickDistance:h,onError:x}){let{node:m,internals:b,isParent:C}=xe(F=>{let $=F.nodeLookup.get(e),ue=F.parentLookup.has(e);return{node:$,internals:$.internals,isParent:ue}},He),S=m.type||"default",v=w?.[S]||sC[S];v===void 0&&(x?.("003",ha.error003(S)),S="default",v=w?.default||sC.default);let _=!!(m.draggable||i&&typeof m.draggable>"u"),I=!!(m.selectable||s&&typeof m.selectable>"u"),A=!!(m.connectable||u&&typeof m.connectable>"u"),T=!!(m.focusable||c&&typeof m.focusable>"u"),P=Ze(),H=ah(m),L=Z6({node:m,nodeType:S,hasDimensions:H,resizeObserver:f}),M=EC({nodeRef:L,disabled:m.hidden||!_,noDragClassName:d,handleSelector:m.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:h}),E=TC();if(m.hidden)return null;let k=Ba(m),N=P6(m),R=I||_||t||a||o||n,D=a?F=>a(F,{...b.userNode}):void 0,q=o?F=>o(F,{...b.userNode}):void 0,U=n?F=>n(F,{...b.userNode}):void 0,W=r?F=>r(F,{...b.userNode}):void 0,Y=l?F=>l(F,{...b.userNode}):void 0,j=F=>{let{selectNodesOnDrag:$,nodeDragThreshold:ue}=P.getState();I&&(!$||!_||ue>0)&&bh({id:e,store:P,nodeRef:L}),t&&t(F,{...b.userNode})},ie=F=>{if(!(lh(F.nativeEvent)||g)){if(Gg.includes(F.key)&&I){let $=F.key==="Escape";bh({id:e,store:P,unselect:$,nodeRef:L})}else if(_&&m.selected&&Object.prototype.hasOwnProperty.call(sf,F.key)){F.preventDefault();let{ariaLabelConfig:$}=P.getState();P.setState({ariaLiveMessage:$["node.a11yDescription.ariaLiveMessage"]({direction:F.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),E({direction:sf[F.key],factor:F.shiftKey?4:1})}}},J=()=>{if(g||!L.current?.matches(":focus-visible"))return;let{transform:F,width:$,height:ue,autoPanOnNodeFocus:se,setCenter:te}=P.getState();if(!se)return;Yc(new Map([[e,m]]),{x:0,y:0,width:$,height:ue},F,!0).length>0||te(m.position.x+k.width/2,m.position.y+k.height/2,{zoom:F[2]})};return(0,z.jsx)("div",{className:ot(["react-flow__node",`react-flow__node-${S}`,{[p]:_},m.className,{selected:m.selected,selectable:I,parent:C,draggable:_,dragging:M}]),ref:L,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:R?"all":"none",visibility:H?"visible":"hidden",...m.style,...N},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:D,onMouseMove:q,onMouseLeave:U,onContextMenu:W,onClick:j,onDoubleClick:Y,onKeyDown:T?ie:void 0,tabIndex:T?0:void 0,onFocus:T?J:void 0,role:m.ariaRole??(T?"group":void 0),"aria-roledescription":"node","aria-describedby":g?void 0:`${CC}-${y}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,z.jsx)(k6,{value:e,children:(0,z.jsx)(v,{id:e,data:m.data,type:S,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:I,draggable:_,deletable:m.deletable??!0,isConnectable:A,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:M,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...k})})})}var j6=(0,O.memo)(W6),K6=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function RC(e){let{nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,onError:n}=xe(K6,He),r=G6(e.onlyRenderVisibleElements),l=Y6();return(0,z.jsx)("div",{className:"react-flow__nodes",style:cf,children:r.map(i=>(0,z.jsx)(j6,{id:i,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:a,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:n},i))})}RC.displayName="NodeRenderer";var Q6=(0,O.memo)(RC);function $6(e){return xe((0,O.useCallback)(a=>{if(!e)return a.edges.map(n=>n.id);let o=[];if(a.width&&a.height)for(let n of a.edges){let r=a.nodeLookup.get(n.source),l=a.nodeLookup.get(n.target);r&&l&&p2({sourceNode:r,targetNode:l,width:a.width,height:a.height,transform:a.transform})&&o.push(n.id)}return o},[e]),He)}var J6=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e}};return(0,z.jsx)("polyline",{className:"arrow",style:a,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},eT=({color:e="none",strokeWidth:t=1})=>{let a={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,z.jsx)("polyline",{className:"arrowclosed",style:a,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},dC={[Kl.Arrow]:J6,[Kl.ArrowClosed]:eT};function tT(e){let t=Ze();return(0,O.useMemo)(()=>Object.prototype.hasOwnProperty.call(dC,e)?dC[e]:(t.getState().onError?.("009",ha.error009(e)),null),[e])}var aT=({id:e,type:t,color:a,width:o=12.5,height:n=12.5,markerUnits:r="strokeWidth",strokeWidth:l,orient:i="auto-start-reverse"})=>{let s=tT(t);return s?(0,z.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${n}`,viewBox:"-10 -10 20 20",markerUnits:r,orient:i,refX:"0",refY:"0",children:(0,z.jsx)(s,{color:a,strokeWidth:l})}):null},zC=({defaultColor:e,rfId:t})=>{let a=xe(r=>r.edges),o=xe(r=>r.defaultEdgeOptions),n=(0,O.useMemo)(()=>h2(a,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[a,o,t,e]);return n.length?(0,z.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,z.jsx)("defs",{children:n.map(r=>(0,z.jsx)(aT,{id:r.id,type:r.type,color:r.color,width:r.width,height:r.height,markerUnits:r.markerUnits,strokeWidth:r.strokeWidth,orient:r.orient},r.id))})}):null};zC.displayName="MarkerDefinitions";var oT=(0,O.memo)(zC);function OC({x:e,y:t,label:a,labelStyle:o,labelShowBg:n=!0,labelBgStyle:r,labelBgPadding:l=[2,4],labelBgBorderRadius:i=2,children:s,className:u,...c}){let[f,d]=(0,O.useState)({x:1,y:0,width:0,height:0}),p=ot(["react-flow__edge-textwrapper",u]),g=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(g.current){let y=g.current.getBBox();d({x:y.x,y:y.y,width:y.width,height:y.height})}},[a]),a?(0,z.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...c,children:[n&&(0,z.jsx)("rect",{width:f.width+2*l[0],x:-l[0],y:-l[1],height:f.height+2*l[1],className:"react-flow__edge-textbg",style:r,rx:i,ry:i}),(0,z.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:g,style:o,children:a}),s]}):null}OC.displayName="EdgeText";var nT=(0,O.memo)(OC);function Xn({path:e,labelX:t,labelY:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s,interactionWidth:u=20,...c}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("path",{...c,d:e,fill:"none",className:ot(["react-flow__edge-path",c.className])}),u?(0,z.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&za(t)&&za(a)?(0,z.jsx)(nT,{x:t,y:a,label:o,labelStyle:n,labelShowBg:r,labelBgStyle:l,labelBgPadding:i,labelBgBorderRadius:s}):null]})}function cC({pos:e,x1:t,y1:a,x2:o,y2:n}){return e===ee.Left||e===ee.Right?[.5*(t+o),a]:[t,.5*(a+n)]}function BC({sourceX:e,sourceY:t,sourcePosition:a=ee.Bottom,targetX:o,targetY:n,targetPosition:r=ee.Top}){let[l,i]=cC({pos:a,x1:e,y1:t,x2:o,y2:n}),[s,u]=cC({pos:r,x1:o,y1:n,x2:e,y2:t}),[c,f,d,p]=Qc({sourceX:e,sourceY:t,targetX:o,targetY:n,sourceControlX:l,sourceControlY:i,targetControlX:s,targetControlY:u});return[`M${e},${t} C${l},${i} ${s},${u} ${o},${n}`,c,f,d,p]}function PC(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l,targetPosition:i,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})=>{let[x,m,b]=BC({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i}),C=e.isInternal?void 0:t;return(0,z.jsx)(Xn,{id:C,path:x,labelX:m,labelY:b,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:h})})}var rT=PC({isInternal:!1}),HC=PC({isInternal:!0});rT.displayName="SimpleBezierEdge";HC.displayName="SimpleBezierEdgeInternal";function UC(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,sourcePosition:p=ee.Bottom,targetPosition:g=ee.Top,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,C]=Qs({sourceX:a,sourceY:o,sourcePosition:p,targetX:n,targetY:r,targetPosition:g,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),S=e.isInternal?void 0:t;return(0,z.jsx)(Xn,{id:S,path:m,labelX:b,labelY:C,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:y,markerStart:w,interactionWidth:x})})}var FC=UC({isInternal:!1}),qC=UC({isInternal:!0});FC.displayName="SmoothStepEdge";qC.displayName="SmoothStepEdgeInternal";function VC(e){return(0,O.memo)(({id:t,...a})=>{let o=e.isInternal?void 0:t;return(0,z.jsx)(FC,{...a,id:o,pathOptions:(0,O.useMemo)(()=>({borderRadius:0,offset:a.pathOptions?.offset}),[a.pathOptions?.offset])})})}var lT=VC({isInternal:!1}),GC=VC({isInternal:!0});lT.displayName="StepEdge";GC.displayName="StepEdgeInternal";function XC(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:g,interactionWidth:y})=>{let[w,h,x]=$c({sourceX:a,sourceY:o,targetX:n,targetY:r}),m=e.isInternal?void 0:t;return(0,z.jsx)(Xn,{id:m,path:w,labelX:h,labelY:x,label:l,labelStyle:i,labelShowBg:s,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:g,interactionWidth:y})})}var iT=XC({isInternal:!1}),YC=XC({isInternal:!0});iT.displayName="StraightEdge";YC.displayName="StraightEdgeInternal";function ZC(e){return(0,O.memo)(({id:t,sourceX:a,sourceY:o,targetX:n,targetY:r,sourcePosition:l=ee.Bottom,targetPosition:i=ee.Top,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,pathOptions:h,interactionWidth:x})=>{let[m,b,C]=ni({sourceX:a,sourceY:o,sourcePosition:l,targetX:n,targetY:r,targetPosition:i,curvature:h?.curvature}),S=e.isInternal?void 0:t;return(0,z.jsx)(Xn,{id:S,path:m,labelX:b,labelY:C,label:s,labelStyle:u,labelShowBg:c,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:g,markerEnd:y,markerStart:w,interactionWidth:x})})}var sT=ZC({isInternal:!1}),WC=ZC({isInternal:!0});sT.displayName="BezierEdge";WC.displayName="BezierEdgeInternal";var fC={default:WC,straight:YC,step:GC,smoothstep:qC,simplebezier:HC},pC={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},uT=(e,t,a)=>a===ee.Left?e-t:a===ee.Right?e+t:e,dT=(e,t,a)=>a===ee.Top?e-t:a===ee.Bottom?e+t:e,mC="react-flow__edgeupdater";function gC({position:e,centerX:t,centerY:a,radius:o=10,onMouseDown:n,onMouseEnter:r,onMouseOut:l,type:i}){return(0,z.jsx)("circle",{onMouseDown:n,onMouseEnter:r,onMouseOut:l,className:ot([mC,`${mC}-${i}`]),cx:uT(t,o,e),cy:dT(a,o,e),r:o,stroke:"transparent",fill:"transparent"})}function cT({isReconnectable:e,reconnectRadius:t,edge:a,sourceX:o,sourceY:n,targetX:r,targetY:l,sourcePosition:i,targetPosition:s,onReconnect:u,onReconnectStart:c,onReconnectEnd:f,setReconnecting:d,setUpdateHover:p}){let g=Ze(),y=(b,C)=>{if(b.button!==0)return;let{autoPanOnConnect:S,domNode:v,connectionMode:_,connectionRadius:I,lib:A,onConnectStart:T,cancelConnection:P,nodeLookup:H,rfId:L,panBy:M,updateConnection:E}=g.getState(),k=C.type==="target",N=(q,U)=>{d(!1),f?.(q,a,C.type,U)},R=q=>u?.(a,q),D=(q,U)=>{d(!0),c?.(b,a,C.type),T?.(q,U)};af.onPointerDown(b.nativeEvent,{autoPanOnConnect:S,connectionMode:_,connectionRadius:I,domNode:v,handleId:C.id,nodeId:C.nodeId,nodeLookup:H,isTarget:k,edgeUpdaterType:C.type,lib:A,flowId:L,cancelConnection:P,panBy:M,isValidConnection:(...q)=>g.getState().isValidConnection?.(...q)??!0,onConnect:R,onConnectStart:D,onConnectEnd:(...q)=>g.getState().onConnectEnd?.(...q),onReconnectEnd:N,updateConnection:E,getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,dragThreshold:g.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>y(b,{nodeId:a.target,id:a.targetHandle??null,type:"target"}),h=b=>y(b,{nodeId:a.source,id:a.sourceHandle??null,type:"source"}),x=()=>p(!0),m=()=>p(!1);return(0,z.jsxs)(z.Fragment,{children:[(e===!0||e==="source")&&(0,z.jsx)(gC,{position:i,centerX:o,centerY:n,radius:t,onMouseDown:w,onMouseEnter:x,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,z.jsx)(gC,{position:s,centerX:r,centerY:l,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:m,type:"target"})]})}function fT({id:e,edgesFocusable:t,edgesReconnectable:a,elementsSelectable:o,onClick:n,onDoubleClick:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,reconnectRadius:c,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,rfId:g,edgeTypes:y,noPanClassName:w,onError:h,disableKeyboardA11y:x}){let m=xe(te=>te.edgeLookup.get(e)),b=xe(te=>te.defaultEdgeOptions);m=b?{...b,...m}:m;let C=m.type||"default",S=y?.[C]||fC[C];S===void 0&&(h?.("011",ha.error011(C)),C="default",S=y?.default||fC.default);let v=!!(m.focusable||t&&typeof m.focusable>"u"),_=typeof f<"u"&&(m.reconnectable||a&&typeof m.reconnectable>"u"),I=!!(m.selectable||o&&typeof m.selectable>"u"),A=(0,O.useRef)(null),[T,P]=(0,O.useState)(!1),[H,L]=(0,O.useState)(!1),M=Ze(),{zIndex:E=m.zIndex,sourceX:k,sourceY:N,targetX:R,targetY:D,sourcePosition:q,targetPosition:U}=xe((0,O.useCallback)(te=>{let ne=te.nodeLookup.get(m.source),ye=te.nodeLookup.get(m.target);if(!ne||!ye)return pC;let X=g2({id:e,sourceNode:ne,targetNode:ye,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:te.connectionMode,onError:h}),re=f2({selected:m.selected,zIndex:m.zIndex,sourceNode:ne,targetNode:ye,elevateOnSelect:te.elevateEdgesOnSelect,zIndexMode:te.zIndexMode});return{...X||pC,zIndex:re}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,h]),He),W=(0,O.useMemo)(()=>m.markerStart?`url('#${Jc(m.markerStart,g)}')`:void 0,[m.markerStart,g]),Y=(0,O.useMemo)(()=>m.markerEnd?`url('#${Jc(m.markerEnd,g)}')`:void 0,[m.markerEnd,g]);if(m.hidden||k===null||N===null||R===null||D===null)return null;let j=te=>{let{addSelectedEdges:ne,unselectNodesAndEdges:ye,multiSelectionActive:X}=M.getState();I&&(M.setState({nodesSelectionActive:!1}),m.selected&&X?(ye({nodes:[],edges:[m]}),A.current?.blur()):ne([e])),n&&n(te,m)},ie=r?te=>{r(te,{...m})}:void 0,J=l?te=>{l(te,{...m})}:void 0,F=i?te=>{i(te,{...m})}:void 0,$=s?te=>{s(te,{...m})}:void 0,ue=u?te=>{u(te,{...m})}:void 0,se=te=>{if(!x&&Gg.includes(te.key)&&I){let{unselectNodesAndEdges:ne,addSelectedEdges:ye}=M.getState();te.key==="Escape"?(A.current?.blur(),ne({edges:[m]})):ye([e])}};return(0,z.jsx)("svg",{style:{zIndex:E},children:(0,z.jsxs)("g",{className:ot(["react-flow__edge",`react-flow__edge-${C}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!I&&!n,updating:T,selectable:I}]),onClick:j,onDoubleClick:ie,onContextMenu:J,onMouseEnter:F,onMouseMove:$,onMouseLeave:ue,onKeyDown:v?se:void 0,tabIndex:v?0:void 0,role:m.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":v?`${SC}-${g}`:void 0,ref:A,...m.domAttributes,children:[!H&&(0,z.jsx)(S,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:I,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:k,sourceY:N,targetX:R,targetY:D,sourcePosition:q,targetPosition:U,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:W,markerEnd:Y,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),_&&(0,z.jsx)(cT,{edge:m,isReconnectable:_,reconnectRadius:c,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,sourceX:k,sourceY:N,targetX:R,targetY:D,sourcePosition:q,targetPosition:U,setUpdateHover:P,setReconnecting:L})]})})}var pT=(0,O.memo)(fT),mT=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function jC({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:a,edgeTypes:o,noPanClassName:n,onReconnect:r,onEdgeContextMenu:l,onEdgeMouseEnter:i,onEdgeMouseMove:s,onEdgeMouseLeave:u,onEdgeClick:c,reconnectRadius:f,onEdgeDoubleClick:d,onReconnectStart:p,onReconnectEnd:g,disableKeyboardA11y:y}){let{edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,onError:m}=xe(mT,He),b=$6(t);return(0,z.jsxs)("div",{className:"react-flow__edges",children:[(0,z.jsx)(oT,{defaultColor:e,rfId:a}),b.map(C=>(0,z.jsx)(pT,{id:C,edgesFocusable:w,edgesReconnectable:h,elementsSelectable:x,noPanClassName:n,onReconnect:r,onContextMenu:l,onMouseEnter:i,onMouseMove:s,onMouseLeave:u,onClick:c,reconnectRadius:f,onDoubleClick:d,onReconnectStart:p,onReconnectEnd:g,rfId:a,onError:m,edgeTypes:o,disableKeyboardA11y:y},C))]})}jC.displayName="EdgeRenderer";var gT=(0,O.memo)(jC),hC=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function hT({children:e}){let t=Ze(),a=(0,O.useRef)(null),[o]=(0,O.useState)(()=>t.getState().transform);return kC(()=>{let n=null,r=()=>{let l=t.getState().transform;n&&l[0]===n[0]&&l[1]===n[1]&&l[2]===n[2]||(n=l,a.current&&(a.current.style.transform=hC(l)))};return r(),t.subscribe(r)},[t]),(0,z.jsx)("div",{ref:a,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:hC(o)},children:e})}function xT(e){let t=xa(),a=(0,O.useRef)(!1);(0,O.useEffect)(()=>{!a.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),a.current=!0)},[e,t.viewportInitialized])}var bT=e=>e.panZoom?.syncViewport;function yT(e){let t=xe(bT),a=Ze();return(0,O.useEffect)(()=>{e&&(t?.(e),a.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function xC(e){return e.connection.inProgress?{...e.connection,to:ai(e.connection.to,e.transform)}:{...e.connection}}function wT(e){return e?a=>{let o=xC(a);return e(o)}:xC}function Ch(e){let t=wT(e);return xe(t,He)}var vT=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function CT({containerStyle:e,style:t,type:a,component:o}){let{nodesConnectable:n,width:r,height:l,isValid:i,inProgress:s}=xe(vT,He);return!(r&&n&&s)?null:(0,z.jsx)("svg",{style:e,width:r,height:l,className:"react-flow__connectionline react-flow__container",children:(0,z.jsx)("g",{className:ot(["react-flow__connection",Zg(i)]),children:(0,z.jsx)(KC,{style:t,type:a,CustomComponent:o,isValid:i})})})}var KC=({style:e,type:t=go.Bezier,CustomComponent:a,isValid:o})=>{let{inProgress:n,from:r,fromNode:l,fromHandle:i,fromPosition:s,to:u,toNode:c,toHandle:f,toPosition:d,pointer:p}=Ch();if(!n)return;if(a)return(0,z.jsx)(a,{connectionLineType:t,connectionLineStyle:e,fromNode:l,fromHandle:i,fromX:r.x,fromY:r.y,toX:u.x,toY:u.y,fromPosition:s,toPosition:d,connectionStatus:Zg(o),toNode:c,toHandle:f,pointer:p});let g="",y={sourceX:r.x,sourceY:r.y,sourcePosition:s,targetX:u.x,targetY:u.y,targetPosition:d};switch(t){case go.Bezier:[g]=ni(y);break;case go.SimpleBezier:[g]=BC(y);break;case go.Step:[g]=Qs({...y,borderRadius:0});break;case go.SmoothStep:[g]=Qs(y);break;default:[g]=$c(y)}return(0,z.jsx)("path",{d:g,fill:"none",className:"react-flow__connection-path",style:e})};KC.displayName="ConnectionLine";var ST={};function bC(e=ST){let t=(0,O.useRef)(e),a=Ze();(0,O.useEffect)(()=>{},[e])}function LT(){let e=Ze(),t=(0,O.useRef)(!1);(0,O.useEffect)(()=>{},[])}function QC({nodeTypes:e,edgeTypes:t,onInit:a,onNodeClick:o,onEdgeClick:n,onNodeDoubleClick:r,onEdgeDoubleClick:l,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:c,onSelectionContextMenu:f,onSelectionStart:d,onSelectionEnd:p,connectionLineType:g,connectionLineStyle:y,connectionLineComponent:w,connectionLineContainerStyle:h,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:C,panActivationKeyCode:S,zoomActivationKeyCode:v,deleteKeyCode:_,onlyRenderVisibleElements:I,elementsSelectable:A,defaultViewport:T,translateExtent:P,minZoom:H,maxZoom:L,preventScrolling:M,defaultMarkerColor:E,zoomOnScroll:k,zoomOnPinch:N,panOnScroll:R,panOnScrollSpeed:D,panOnScrollMode:q,zoomOnDoubleClick:U,panOnDrag:W,autoPanOnSelection:Y,onPaneClick:j,onPaneMouseEnter:ie,onPaneMouseMove:J,onPaneMouseLeave:F,onPaneScroll:$,onPaneContextMenu:ue,paneClickDistance:se,nodeClickDistance:te,onEdgeContextMenu:ne,onEdgeMouseEnter:ye,onEdgeMouseMove:X,onEdgeMouseLeave:re,reconnectRadius:pe,onReconnect:ht,onReconnectStart:_t,onReconnectEnd:Pt,noDragClassName:Va,noWheelClassName:ar,noPanClassName:_o,disableKeyboardA11y:Io,nodeExtent:ra,rfId:Q,viewport:Ue,onViewportChange:et,nodesDraggable:Sa}){return bC(e),bC(t),LT(),xT(a),yT(Ue),(0,z.jsx)(q6,{onPaneClick:j,onPaneMouseEnter:ie,onPaneMouseMove:J,onPaneMouseLeave:F,onPaneContextMenu:ue,onPaneScroll:$,paneClickDistance:se,deleteKeyCode:_,selectionKeyCode:x,selectionOnDrag:m,selectionMode:b,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:C,panActivationKeyCode:S,zoomActivationKeyCode:v,elementsSelectable:A,zoomOnScroll:k,zoomOnPinch:N,zoomOnDoubleClick:U,panOnScroll:R,panOnScrollSpeed:D,panOnScrollMode:q,panOnDrag:W,autoPanOnSelection:Y,defaultViewport:T,translateExtent:P,minZoom:H,maxZoom:L,onSelectionContextMenu:f,preventScrolling:M,noDragClassName:Va,noWheelClassName:ar,noPanClassName:_o,disableKeyboardA11y:Io,onViewportChange:et,isControlledViewport:!!Ue,children:(0,z.jsxs)(hT,{children:[(0,z.jsx)(gT,{edgeTypes:t,onEdgeClick:n,onEdgeDoubleClick:l,onReconnect:ht,onReconnectStart:_t,onReconnectEnd:Pt,onlyRenderVisibleElements:I,onEdgeContextMenu:ne,onEdgeMouseEnter:ye,onEdgeMouseMove:X,onEdgeMouseLeave:re,reconnectRadius:pe,defaultMarkerColor:E,noPanClassName:_o,disableKeyboardA11y:Io,rfId:Q}),(0,z.jsx)(CT,{style:y,type:g,component:w,containerStyle:h}),(0,z.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,z.jsx)(Q6,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:r,onNodeMouseEnter:i,onNodeMouseMove:s,onNodeMouseLeave:u,onNodeContextMenu:c,nodeClickDistance:te,onlyRenderVisibleElements:I,noPanClassName:_o,noDragClassName:Va,disableKeyboardA11y:Io,nodeExtent:ra,rfId:Q,nodesDraggable:Sa}),(0,z.jsx)("div",{className:"react-flow__viewport-portal"})]})})}QC.displayName="GraphView";var _T=(0,O.memo)(QC),IT=th("React Flow","https://reactflow.dev/"),yC=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s=.5,maxZoom:u=2,nodeOrigin:c,nodeExtent:f,zIndexMode:d="basic"}={})=>{let p=new Map,g=new Map,y=new Map,w=new Map,h=o??t??[],x=a??e??[],m=c??[0,0],b=f??$l;ph(y,w,h);let{nodesInitialized:C}=ef(x,p,g,{nodeOrigin:m,nodeExtent:b,zIndexMode:d}),S=[0,0,1];if(l&&n&&r){let v=Jl(p,{filter:T=>!!((T.width||T.initialWidth)&&(T.height||T.initialHeight))}),{x:_,y:I,zoom:A}=Ks(v,n,r,s,u,i?.padding??.1);S=[_,I,A]}return{rfId:"1",width:n??0,height:r??0,transform:S,nodes:x,nodesInitialized:C,nodeLookup:p,parentLookup:g,edges:h,edgeLookup:w,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:a!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:s,maxZoom:u,translateExtent:$l,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Fn.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:l??!1,fitViewOptions:i,fitViewResolver:null,connection:{...Yg},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:IT,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Xg,zIndexMode:d,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},kT=({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:c,nodeExtent:f,zIndexMode:d})=>W2((p,g)=>{async function y(){let{nodeLookup:w,panZoom:h,fitViewOptions:x,fitViewResolver:m,width:b,height:C,minZoom:S,maxZoom:v}=g();h&&(await l2({nodes:w,width:b,height:C,panZoom:h,minZoom:S,maxZoom:v},x),m?.resolve(!0),p({fitViewResolver:null}))}return{...yC({nodes:e,edges:t,width:n,height:r,fitView:l,fitViewOptions:i,minZoom:s,maxZoom:u,nodeOrigin:c,nodeExtent:f,defaultNodes:a,defaultEdges:o,zIndexMode:d}),setNodes:w=>{let{nodeLookup:h,parentLookup:x,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:C,fitViewQueued:S,zIndexMode:v,nodesSelectionActive:_}=g(),{nodesInitialized:I,hasSelectedNodes:A}=ef(w,h,x,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:C,checkEquality:!0,zIndexMode:v}),T=_&&A;S&&I?(y(),p({nodes:w,nodesInitialized:I,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:T})):p({nodes:w,nodesInitialized:I,nodesSelectionActive:T})},setEdges:w=>{let{connectionLookup:h,edgeLookup:x}=g();ph(h,x,w),p({edges:w})},setDefaultNodesAndEdges:(w,h)=>{if(w){let{setNodes:x}=g();x(w),p({hasDefaultNodes:!0})}if(h){let{setEdges:x}=g();x(h),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:h,nodeLookup:x,parentLookup:m,domNode:b,nodeOrigin:C,nodeExtent:S,debug:v,fitViewQueued:_,zIndexMode:I}=g(),{changes:A,updatedInternals:T}=w2(w,x,m,b,C,S,I);T&&(b2(x,m,{nodeOrigin:C,nodeExtent:S,zIndexMode:I}),_?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),A?.length>0&&(v&&console.log("React Flow: trigger node changes",A),h?.(A)))},updateNodePositions:(w,h=!1)=>{let x=[],m=[],{nodeLookup:b,triggerNodeChanges:C,connection:S,updateConnection:v,onNodesChangeMiddlewareMap:_}=g();for(let[I,A]of w){let T=b.get(I),P=!!(T?.expandParent&&T?.parentId&&A?.position),H={id:I,type:"position",position:P?{x:Math.max(0,A.position.x),y:Math.max(0,A.position.y)}:A.position,dragging:h};if(T&&S.inProgress&&S.fromNode.id===T.id){let L=qn(T,S.fromHandle,ee.Left,!0);v({...S,from:L})}P&&T.parentId&&x.push({id:I,parentId:T.parentId,rect:{...A.internals.positionAbsolute,width:A.measured.width??0,height:A.measured.height??0}}),m.push(H)}if(x.length>0){let{parentLookup:I,nodeOrigin:A}=g(),T=tf(x,b,I,A);m.push(...T)}for(let I of _.values())m=I(m);C(m)},triggerNodeChanges:w=>{let{onNodesChange:h,setNodes:x,nodes:m,hasDefaultNodes:b,debug:C}=g();if(w?.length){if(b){let S=yh(w,m);x(S)}C&&console.log("React Flow: trigger node changes",w),h?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:h,setEdges:x,edges:m,hasDefaultEdges:b,debug:C}=g();if(w?.length){if(b){let S=wh(w,m);x(S)}C&&console.log("React Flow: trigger edge changes",w),h?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:C}=g();if(h){let S=w.map(v=>Br(v,!0));b(S);return}b(li(m,new Set([...w]),!0)),C(li(x))},addSelectedEdges:w=>{let{multiSelectionActive:h,edgeLookup:x,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:C}=g();if(h){let S=w.map(v=>Br(v,!0));C(S);return}C(li(x,new Set([...w]))),b(li(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:h}={})=>{let{edges:x,nodes:m,nodeLookup:b,triggerNodeChanges:C,triggerEdgeChanges:S}=g(),v=w||m,_=h||x,I=[];for(let T of v){if(!T.selected)continue;let P=b.get(T.id);P&&(P.selected=!1),I.push(Br(T.id,!1))}let A=[];for(let T of _)T.selected&&A.push(Br(T.id,!1));C(I),S(A)},setMinZoom:w=>{let{panZoom:h,maxZoom:x}=g();h?.setScaleExtent([w,x]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:h,minZoom:x}=g();h?.setScaleExtent([x,w]),p({maxZoom:w})},setTranslateExtent:w=>{g().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:h,triggerNodeChanges:x,triggerEdgeChanges:m,elementsSelectable:b}=g();if(!b)return;let C=h.reduce((v,_)=>_.selected?[...v,Br(_.id,!1)]:v,[]),S=w.reduce((v,_)=>_.selected?[...v,Br(_.id,!1)]:v,[]);x(C),m(S)},setNodeExtent:w=>{let{nodes:h,nodeLookup:x,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:C,nodeExtent:S,zIndexMode:v}=g();w[0][0]===S[0][0]&&w[0][1]===S[0][1]&&w[1][0]===S[1][0]&&w[1][1]===S[1][1]||(ef(h,x,m,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:C,checkEquality:!1,zIndexMode:v}),p({nodeExtent:w}))},panBy:w=>{let{transform:h,width:x,height:m,panZoom:b,translateExtent:C}=g();return v2({delta:w,panZoom:b,transform:h,translateExtent:C,width:x,height:m})},setCenter:async(w,h,x)=>{let{width:m,height:b,maxZoom:C,panZoom:S}=g();if(!S)return!1;let v=typeof x?.zoom<"u"?x.zoom:C;return await S.setViewport({x:m/2-w*v,y:b/2-h*v,zoom:v},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Yg}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...yC()})}},Object.is);function Sh({initialNodes:e,initialEdges:t,defaultNodes:a,defaultEdges:o,initialWidth:n,initialHeight:r,initialMinZoom:l,initialMaxZoom:i,initialFitViewOptions:s,fitView:u,nodeOrigin:c,nodeExtent:f,zIndexMode:d,children:p}){let[g]=(0,O.useState)(()=>kT({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,width:n,height:r,fitView:u,minZoom:l,maxZoom:i,fitViewOptions:s,nodeOrigin:c,nodeExtent:f,zIndexMode:d}));return(0,z.jsx)(GE,{value:g,children:(0,z.jsx)(m6,{children:(0,z.jsx)(E6,{children:p})})})}function MT({children:e,nodes:t,edges:a,defaultNodes:o,defaultEdges:n,width:r,height:l,fitView:i,fitViewOptions:s,minZoom:u,maxZoom:c,nodeOrigin:f,nodeExtent:d,zIndexMode:p}){return(0,O.useContext)(uf)?(0,z.jsx)(z.Fragment,{children:e}):(0,z.jsx)(Sh,{initialNodes:t,initialEdges:a,defaultNodes:o,defaultEdges:n,initialWidth:r,initialHeight:l,fitView:i,initialFitViewOptions:s,initialMinZoom:u,initialMaxZoom:c,nodeOrigin:f,nodeExtent:d,zIndexMode:p,children:e})}var ET={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function TT({nodes:e,edges:t,defaultNodes:a,defaultEdges:o,className:n,nodeTypes:r,edgeTypes:l,onNodeClick:i,onEdgeClick:s,onInit:u,onMove:c,onMoveStart:f,onMoveEnd:d,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:C,onNodeDoubleClick:S,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:I,onNodesDelete:A,onEdgesDelete:T,onDelete:P,onSelectionChange:H,onSelectionDragStart:L,onSelectionDrag:M,onSelectionDragStop:E,onSelectionContextMenu:k,onSelectionStart:N,onSelectionEnd:R,onBeforeDelete:D,connectionMode:q,connectionLineType:U=go.Bezier,connectionLineStyle:W,connectionLineComponent:Y,connectionLineContainerStyle:j,deleteKeyCode:ie="Backspace",selectionKeyCode:J="Shift",selectionOnDrag:F=!1,selectionMode:$=Qo.Full,panActivationKeyCode:ue="Space",multiSelectionKeyCode:se=oi()?"Meta":"Control",zoomActivationKeyCode:te=oi()?"Meta":"Control",snapToGrid:ne,snapGrid:ye,onlyRenderVisibleElements:X=!1,selectNodesOnDrag:re,nodesDraggable:pe,autoPanOnNodeFocus:ht,nodesConnectable:_t,nodesFocusable:Pt,nodeOrigin:Va=LC,edgesFocusable:ar,edgesReconnectable:_o,elementsSelectable:Io=!0,defaultViewport:ra=o6,minZoom:Q=.5,maxZoom:Ue=2,translateExtent:et=$l,preventScrolling:Sa=!0,nodeExtent:or,defaultMarkerColor:nn="#b1b1b7",zoomOnScroll:Bf=!0,zoomOnPinch:Pf=!0,panOnScroll:T_=!1,panOnScrollSpeed:A_=.5,panOnScrollMode:N_=Ka.Free,zoomOnDoubleClick:D_=!0,panOnDrag:R_=!0,onPaneClick:z_,onPaneMouseEnter:O_,onPaneMouseMove:B_,onPaneMouseLeave:P_,onPaneScroll:H_,onPaneContextMenu:U_,paneClickDistance:F_=1,nodeClickDistance:q_=0,children:V_,onReconnect:G_,onReconnectStart:X_,onReconnectEnd:Y_,onEdgeContextMenu:Z_,onEdgeDoubleClick:W_,onEdgeMouseEnter:j_,onEdgeMouseMove:K_,onEdgeMouseLeave:Q_,reconnectRadius:$_=10,onNodesChange:J_,onEdgesChange:eI,noDragClassName:tI="nodrag",noWheelClassName:aI="nowheel",noPanClassName:$h="nopan",fitView:Jh,fitViewOptions:ex,connectOnClick:oI,attributionPosition:nI,proOptions:rI,defaultEdgeOptions:lI,elevateNodesOnSelect:iI=!0,elevateEdgesOnSelect:sI=!1,disableKeyboardA11y:tx=!1,autoPanOnConnect:uI,autoPanOnNodeDrag:dI,autoPanOnSelection:cI=!0,autoPanSpeed:fI,connectionRadius:pI,isValidConnection:mI,onError:gI,style:hI,id:ax,nodeDragThreshold:xI,connectionDragThreshold:bI,viewport:yI,onViewportChange:wI,width:vI,height:CI,colorMode:SI="light",debug:LI,onScroll:ox,ariaLabelConfig:_I,zIndexMode:nx="basic",...II},kI){let Hf=ax||"1",MI=i6(SI),EI=(0,O.useCallback)(rx=>{rx.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),ox?.(rx)},[ox]);return(0,z.jsx)("div",{"data-testid":"rf__wrapper",...II,onScroll:EI,style:{...hI,...ET},ref:kI,className:ot(["react-flow",n,MI]),id:ax,role:"application",children:(0,z.jsxs)(MT,{nodes:e,edges:t,width:vI,height:CI,fitView:Jh,fitViewOptions:ex,minZoom:Q,maxZoom:Ue,nodeOrigin:Va,nodeExtent:or,zIndexMode:nx,children:[(0,z.jsx)(l6,{nodes:e,edges:t,defaultNodes:a,defaultEdges:o,onConnect:p,onConnectStart:g,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:h,nodesDraggable:pe,autoPanOnNodeFocus:ht,nodesConnectable:_t,nodesFocusable:Pt,edgesFocusable:ar,edgesReconnectable:_o,elementsSelectable:Io,elevateNodesOnSelect:iI,elevateEdgesOnSelect:sI,minZoom:Q,maxZoom:Ue,nodeExtent:or,onNodesChange:J_,onEdgesChange:eI,snapToGrid:ne,snapGrid:ye,connectionMode:q,translateExtent:et,connectOnClick:oI,defaultEdgeOptions:lI,fitView:Jh,fitViewOptions:ex,onNodesDelete:A,onEdgesDelete:T,onDelete:P,onNodeDragStart:v,onNodeDrag:_,onNodeDragStop:I,onSelectionDrag:M,onSelectionDragStart:L,onSelectionDragStop:E,onMove:c,onMoveStart:f,onMoveEnd:d,noPanClassName:$h,nodeOrigin:Va,rfId:Hf,autoPanOnConnect:uI,autoPanOnNodeDrag:dI,autoPanSpeed:fI,onError:gI,connectionRadius:pI,isValidConnection:mI,selectNodesOnDrag:re,nodeDragThreshold:xI,connectionDragThreshold:bI,onBeforeDelete:D,debug:LI,ariaLabelConfig:_I,zIndexMode:nx}),(0,z.jsx)(_T,{onInit:u,onNodeClick:i,onEdgeClick:s,onNodeMouseEnter:x,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:C,onNodeDoubleClick:S,nodeTypes:r,edgeTypes:l,connectionLineType:U,connectionLineStyle:W,connectionLineComponent:Y,connectionLineContainerStyle:j,selectionKeyCode:J,selectionOnDrag:F,selectionMode:$,deleteKeyCode:ie,multiSelectionKeyCode:se,panActivationKeyCode:ue,zoomActivationKeyCode:te,onlyRenderVisibleElements:X,defaultViewport:ra,translateExtent:et,minZoom:Q,maxZoom:Ue,preventScrolling:Sa,zoomOnScroll:Bf,zoomOnPinch:Pf,zoomOnDoubleClick:D_,panOnScroll:T_,panOnScrollSpeed:A_,panOnScrollMode:N_,panOnDrag:R_,autoPanOnSelection:cI,onPaneClick:z_,onPaneMouseEnter:O_,onPaneMouseMove:B_,onPaneMouseLeave:P_,onPaneScroll:H_,onPaneContextMenu:U_,paneClickDistance:F_,nodeClickDistance:q_,onSelectionContextMenu:k,onSelectionStart:N,onSelectionEnd:R,onReconnect:G_,onReconnectStart:X_,onReconnectEnd:Y_,onEdgeContextMenu:Z_,onEdgeDoubleClick:W_,onEdgeMouseEnter:j_,onEdgeMouseMove:K_,onEdgeMouseLeave:Q_,reconnectRadius:$_,defaultMarkerColor:nn,noDragClassName:tI,noWheelClassName:aI,noPanClassName:$h,rfId:Hf,disableKeyboardA11y:tx,nodeExtent:or,viewport:yI,onViewportChange:wI,nodesDraggable:pe}),(0,z.jsx)(a6,{onSelectionChange:H}),V_,(0,z.jsx)(QE,{proOptions:rI,position:nI}),(0,z.jsx)(KE,{rfId:Hf,disableKeyboardA11y:tx})]})})}var $C=IC(TT);var AT=e=>e.nodes;function JC(){return xe(AT,He)}var NT=e=>e.edges;function eS(){return xe(NT,He)}var DT=e=>({x:e.transform[0],y:e.transform[1],zoom:e.transform[2]});function ii(){return xe(DT,He)}var bB=ha.error014();function RT({dimensions:e,lineWidth:t,variant:a,className:o}){return(0,z.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:ot(["react-flow__background-pattern",a,o])})}function zT({radius:e,className:t}){return(0,z.jsx)("circle",{cx:e,cy:e,r:e,className:ot(["react-flow__background-pattern","dots",t])})}var ho;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(ho||(ho={}));var OT={[ho.Dots]:1,[ho.Lines]:1,[ho.Cross]:6},BT=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function tS({id:e,variant:t=ho.Dots,gap:a=20,size:o,lineWidth:n=1,offset:r=0,color:l,bgColor:i,style:s,className:u,patternClassName:c}){let f=(0,O.useRef)(null),{transform:d,patternId:p}=xe(BT,He),g=o||OT[t],y=t===ho.Dots,w=t===ho.Cross,h=Array.isArray(a)?a:[a,a],x=[h[0]*d[2]||1,h[1]*d[2]||1],m=g*d[2],b=Array.isArray(r)?r:[r,r],C=w?[m,m]:x,S=[b[0]*d[2]+C[0]/2,b[1]*d[2]+C[1]/2],v=`${p}${e||""}`;return(0,z.jsxs)("svg",{className:ot(["react-flow__background",u]),style:{...s,...cf,"--xy-background-color-props":i,"--xy-background-pattern-color-props":l},ref:f,"data-testid":"rf__background",children:[(0,z.jsx)("pattern",{id:v,x:d[0]%x[0],y:d[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:y?(0,z.jsx)(zT,{radius:m/2,className:c}):(0,z.jsx)(RT,{dimensions:C,lineWidth:n,variant:t,className:c})}),(0,z.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}tS.displayName="Background";var aS=(0,O.memo)(tS);function PT(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,z.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function HT(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,z.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function UT(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,z.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function FT(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,z.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function qT(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,z.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function lf({children:e,className:t,...a}){return(0,z.jsx)("button",{type:"button",className:ot(["react-flow__controls-button",t]),...a,children:e})}var VT=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function oS({style:e,showZoom:t=!0,showFitView:a=!0,showInteractive:o=!0,fitViewOptions:n,onZoomIn:r,onZoomOut:l,onFitView:i,onInteractiveChange:s,className:u,children:c,position:f="bottom-left",orientation:d="vertical","aria-label":p}){let g=Ze(),{isInteractive:y,minZoomReached:w,maxZoomReached:h,ariaLabelConfig:x}=xe(VT,He),{zoomIn:m,zoomOut:b,fitView:C}=xa(),S=()=>{m(),r?.()},v=()=>{b(),l?.()},_=()=>{C(n),i?.()},I=()=>{g.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),s?.(!y)};return(0,z.jsxs)(df,{className:ot(["react-flow__controls",d==="horizontal"?"horizontal":"vertical",u]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??x["controls.ariaLabel"],children:[t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(lf,{onClick:S,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:h,children:(0,z.jsx)(PT,{})}),(0,z.jsx)(lf,{onClick:v,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:w,children:(0,z.jsx)(HT,{})})]}),a&&(0,z.jsx)(lf,{className:"react-flow__controls-fitview",onClick:_,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,z.jsx)(UT,{})}),o&&(0,z.jsx)(lf,{className:"react-flow__controls-interactive",onClick:I,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:y?(0,z.jsx)(qT,{}):(0,z.jsx)(FT,{})}),c]})}oS.displayName="Controls";var yB=(0,O.memo)(oS);function GT({id:e,x:t,y:a,width:o,height:n,style:r,color:l,strokeColor:i,strokeWidth:s,className:u,borderRadius:c,shapeRendering:f,selected:d,onClick:p}){let{background:g,backgroundColor:y}=r||{},w=l||g||y;return(0,z.jsx)("rect",{className:ot(["react-flow__minimap-node",{selected:d},u]),x:t,y:a,rx:c,ry:c,width:o,height:n,style:{fill:w,stroke:i,strokeWidth:s},shapeRendering:f,onClick:p?h=>p(h,e):void 0})}var XT=(0,O.memo)(GT),YT=e=>e.nodes.map(t=>t.id),xh=e=>e instanceof Function?e:()=>e;function ZT({nodeStrokeColor:e,nodeColor:t,nodeClassName:a="",nodeBorderRadius:o=5,nodeStrokeWidth:n,nodeComponent:r=XT,onClick:l}){let i=xe(YT,He),s=xh(t),u=xh(e),c=xh(a),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,z.jsx)(z.Fragment,{children:i.map(d=>(0,z.jsx)(jT,{id:d,nodeColorFunc:s,nodeStrokeColorFunc:u,nodeClassNameFunc:c,nodeBorderRadius:o,nodeStrokeWidth:n,NodeComponent:r,onClick:l,shapeRendering:f},d))})}function WT({id:e,nodeColorFunc:t,nodeStrokeColorFunc:a,nodeClassNameFunc:o,nodeBorderRadius:n,nodeStrokeWidth:r,shapeRendering:l,NodeComponent:i,onClick:s}){let{node:u,x:c,y:f,width:d,height:p}=xe(g=>{let y=g.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let w=y.internals.userNode,{x:h,y:x}=y.internals.positionAbsolute,{width:m,height:b}=Ba(w);return{node:w,x:h,y:x,width:m,height:b}},He);return!u||u.hidden||!ah(u)?null:(0,z.jsx)(i,{x:c,y:f,width:d,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:n,strokeColor:a(u),strokeWidth:r,shapeRendering:l,onClick:s,id:u.id})}var jT=(0,O.memo)(WT),KT=(0,O.memo)(ZT),QT=200,$T=150,JT=e=>!e.hidden,eA=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Jg(Jl(e.nodeLookup,{filter:JT}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},wC=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,tA=(e,t)=>wC(e.viewBB,t.viewBB)&&wC(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,aA="react-flow__minimap-desc";function nS({style:e,className:t,nodeStrokeColor:a,nodeColor:o,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:l,nodeComponent:i,bgColor:s,maskColor:u,maskStrokeColor:c,maskStrokeWidth:f,position:d="bottom-right",onClick:p,onNodeClick:g,pannable:y=!1,zoomable:w=!1,ariaLabel:h,inversePan:x,zoomStep:m=1,offsetScale:b=5}){let C=Ze(),S=(0,O.useRef)(null),{boundingRect:v,viewBB:_,rfId:I,panZoom:A,translateExtent:T,flowWidth:P,flowHeight:H,ariaLabelConfig:L}=xe(eA,tA),M=e?.width??QT,E=e?.height??$T,k=v.width/M,N=v.height/E,R=Math.max(k,N),D=R*M,q=R*E,U=b*R,W=v.x-(D-v.width)/2-U,Y=v.y-(q-v.height)/2-U,j=D+U*2,ie=q+U*2,J=`${aA}-${I}`,F=(0,O.useRef)(0),$=(0,O.useRef)();F.current=R,(0,O.useEffect)(()=>{if(S.current&&A)return $.current=M2({domNode:S.current,panZoom:A,getTransform:()=>C.getState().transform,getViewScale:()=>F.current}),()=>{$.current?.destroy()}},[A]),(0,O.useEffect)(()=>{$.current?.update({translateExtent:T,width:P,height:H,inversePan:x,pannable:y,zoomStep:m,zoomable:w})},[y,w,x,m,T,P,H]);let ue=p?ne=>{let[ye,X]=$.current?.pointer(ne)||[0,0];p(ne,{x:ye,y:X})}:void 0,se=g?(0,O.useCallback)((ne,ye)=>{let X=C.getState().nodeLookup.get(ye).internals.userNode;g(ne,X)},[]):void 0,te=h??L["minimap.ariaLabel"];return(0,z.jsx)(df,{position:d,style:{...e,"--xy-minimap-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*R:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof a=="string"?a:void 0,"--xy-minimap-node-stroke-width-props":typeof l=="number"?l:void 0},className:ot(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,z.jsxs)("svg",{width:M,height:E,viewBox:`${W} ${Y} ${j} ${ie}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":J,ref:S,onClick:ue,children:[te&&(0,z.jsx)("title",{id:J,children:te}),(0,z.jsx)(KT,{onClick:se,nodeColor:o,nodeStrokeColor:a,nodeBorderRadius:r,nodeClassName:n,nodeStrokeWidth:l,nodeComponent:i}),(0,z.jsx)("path",{className:"react-flow__minimap-mask",d:`M${W-U},${Y-U}h${j+U*2}v${ie+U*2}h${-j-U*2}z
        M${_.x},${_.y}h${_.width}v${_.height}h${-_.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}nS.displayName="MiniMap";var rS=(0,O.memo)(nS),oA=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,nA={[Vn.Line]:"right",[Vn.Handle]:"bottom-right"};function rA({nodeId:e,position:t,variant:a=Vn.Handle,className:o,style:n=void 0,children:r,color:l,minWidth:i=10,minHeight:s=10,maxWidth:u=Number.MAX_VALUE,maxHeight:c=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:d,autoScale:p=!0,shouldResize:g,onResizeStart:y,onResize:w,onResizeEnd:h}){let x=AC(),m=typeof e=="string"?e:x,b=Ze(),C=(0,O.useRef)(null),S=a===Vn.Handle,v=xe((0,O.useCallback)(oA(S&&p),[S,p]),He),_=(0,O.useRef)(null),I=t??nA[a];(0,O.useEffect)(()=>{if(!(!C.current||!m))return _.current||(_.current=D2({domNode:C.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:T,transform:P,snapGrid:H,snapToGrid:L,nodeOrigin:M,domNode:E}=b.getState();return{nodeLookup:T,transform:P,snapGrid:H,snapToGrid:L,nodeOrigin:M,paneDomNode:E}},onChange:(T,P)=>{let{triggerNodeChanges:H,nodeLookup:L,parentLookup:M,nodeOrigin:E}=b.getState(),k=[],N={x:T.x,y:T.y},R=L.get(m);if(R&&R.expandParent&&R.parentId){let D=R.origin??E,q=T.width??R.measured.width??0,U=T.height??R.measured.height??0,W={id:R.id,parentId:R.parentId,rect:{width:q,height:U,...oh({x:T.x??R.position.x,y:T.y??R.position.y},{width:q,height:U},R.parentId,L,D)}},Y=tf([W],L,M,E);k.push(...Y),N.x=T.x?Math.max(D[0]*q,T.x):void 0,N.y=T.y?Math.max(D[1]*U,T.y):void 0}if(N.x!==void 0&&N.y!==void 0){let D={id:m,type:"position",position:{...N}};k.push(D)}if(T.width!==void 0&&T.height!==void 0){let q={id:m,type:"dimensions",resizing:!0,setAttributes:d?d==="horizontal"?"width":"height":!0,dimensions:{width:T.width,height:T.height}};k.push(q)}for(let D of P){let q={...D,type:"position"};k.push(q)}H(k)},onEnd:({width:T,height:P})=>{let H={id:m,type:"dimensions",resizing:!1,dimensions:{width:T,height:P}};b.getState().triggerNodeChanges([H])}})),_.current.update({controlPosition:I,boundaries:{minWidth:i,minHeight:s,maxWidth:u,maxHeight:c},keepAspectRatio:f,resizeDirection:d,onResizeStart:y,onResize:w,onResizeEnd:h,shouldResize:g}),()=>{_.current?.destroy()}},[I,i,s,u,c,f,y,w,h,g]);let A=I.split("-");return(0,z.jsx)("div",{className:ot(["react-flow__resize-control","nodrag",...A,a,o]),ref:C,style:{...n,scale:v,...l&&{[S?"backgroundColor":"borderColor"]:l}},children:r})}var wB=(0,O.memo)(rA);var na=B(oe(),1),cS=B(sn(),1);var mf=B(oe(),1);var ff=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var lS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var iS=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var Lh=e=>{let t=iS(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Js=B(oe(),1);var pf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var sS=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var si=B(oe(),1);var lA=(0,si.createContext)({});var uS=()=>(0,si.useContext)(lA);var dS=(0,Js.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:n="",children:r,iconNode:l,...i},s)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:p=""}=uS()??{},g=o??f?Number(a??c)*24/Number(t??u):a??c;return(0,Js.createElement)("svg",{ref:s,...pf,width:t??u??pf.width,height:t??u??pf.height,stroke:e??d,strokeWidth:g,className:ff("lucide",p,n),...!r&&!sS(i)&&{"aria-hidden":"true"},...i},[...l.map(([y,w])=>(0,Js.createElement)(y,w)),...Array.isArray(r)?r:[r]])});var G=(e,t)=>{let a=(0,mf.forwardRef)(({className:o,...n},r)=>(0,mf.createElement)(dS,{ref:r,iconNode:t,className:ff(`lucide-${lS(Lh(e))}`,`lucide-${e}`,o),...n}));return a.displayName=Lh(e),a};var iA=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],Pr=G("audio-lines",iA);var sA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Hr=G("check",sA);var uA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],eu=G("chevron-down",uA);var dA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ui=G("chevron-right",dA);var cA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],tu=G("chevron-left",cA);var fA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],au=G("chevron-up",fA);var pA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Yn=G("circle-alert",pA);var mA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zn=G("circle-check",mA);var gA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Qa=G("circle-question-mark",gA);var hA=[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]],ou=G("clapperboard",hA);var xA=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],nu=G("copy",xA);var bA=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],xo=G("file-pen",bA);var yA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],aa=G("file-text",yA);var wA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],ru=G("film",wA);var vA=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],lu=G("folder-open",vA);var CA=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Wn=G("folder",CA);var SA=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],di=G("hand",SA);var LA=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],$o=G("image-plus",LA);var _A=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],$a=G("image",_A);var IA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],iu=G("info",IA);var kA=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],su=G("keyboard",kA);var MA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],jn=G("layers",MA);var EA=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],uu=G("layout-grid",EA);var TA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Kn=G("loader-circle",TA);var AA=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],du=G("map",AA);var NA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],cu=G("maximize-2",NA);var DA=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],fu=G("maximize",DA);var RA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Ur=G("mic",RA);var zA=[["path",{d:"M5 12h14",key:"1ays0h"}]],pu=G("minus",zA);var OA=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],ci=G("mouse-pointer",OA);var BA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Pa=G("music",BA);var PA=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],mu=G("pause",PA);var HA=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Qn=G("pen-line",HA);var UA=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],gu=G("person-standing",UA);var FA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ja=G("play",FA);var qA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ba=G("plus",qA);var VA=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],hu=G("redo-2",VA);var GA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$n=G("refresh-cw",GA);var XA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xu=G("rotate-ccw",XA);var YA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bu=G("search",YA);var ZA=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],yu=G("sliders-horizontal",ZA);var WA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ya=G("sparkles",WA);var jA=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],Jn=G("square-split-vertical",jA);var KA=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Fr=G("table",KA);var QA=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],wu=G("tag",QA);var $A=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],er=G("triangle-alert",$A);var JA=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],qr=G("type",JA);var eN=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],vu=G("undo-2",eN);var tN=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],Cu=G("unlink",tN);var aN=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Su=G("upload",aN);var oN=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],eo=G("video",oN);var nN=[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]],Lu=G("waypoints",nN);var rN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oa=G("x",rN);var vt=B(Z(),1);function Vr({value:e,options:t,onChange:a,className:o="",disabled:n=!1,popupMatchSelectWidth:r=!0,placeholder:l,variant:i="pill"}){let[s,u]=(0,na.useState)(!1),c=(0,na.useRef)(null),f=(0,na.useRef)(null),[d,p]=(0,na.useState)({top:0,left:0,placement:"bottom"}),g=(0,na.useMemo)(()=>t.find(m=>m.value===e),[t,e]),y=(0,na.useCallback)(()=>{if(!c.current)return;let m=c.current.getBoundingClientRect(),b=window.innerHeight,C=Math.min(t.length*34+16,260),v=b-m.bottom<C&&m.top>C,_=v?m.top-6:m.bottom+6,I=r?m.width:void 0;p({top:_,left:m.left,width:I,placement:v?"top":"bottom"})},[t.length,r]);(0,na.useEffect)(()=>{if(!s)return;y();let m=S=>{let v=S.target;c.current?.contains(v)||f.current?.contains(v)||u(!1)},b=S=>{S.key==="Escape"&&u(!1)},C=()=>{y()};return window.addEventListener("mousedown",m,!0),window.addEventListener("keydown",b),window.addEventListener("scroll",C,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("mousedown",m,!0),window.removeEventListener("keydown",b),window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",y)}},[s,y]);let w=(0,na.useCallback)(m=>{m.stopPropagation(),!n&&u(b=>!b)},[n]),h=(0,na.useCallback)((m,b)=>{b||(a?.(m),u(!1))},[a]),x=["wf-custom-select-trigger",`wf-custom-select-trigger--${i}`,s?"wf-custom-select-trigger--open":"",n?"wf-custom-select-trigger--disabled":"",o].filter(Boolean).join(" ");return(0,vt.jsxs)(vt.Fragment,{children:[(0,vt.jsxs)("button",{ref:c,type:"button",className:x,disabled:n,onClick:w,"aria-haspopup":"listbox","aria-expanded":s,children:[(0,vt.jsx)("span",{className:"wf-custom-select-label",children:g?g.triggerLabel??g.label:l??String(e??"")}),(0,vt.jsx)(eu,{size:12,className:"wf-custom-select-chevron"})]}),s&&typeof document<"u"?(0,cS.createPortal)((0,vt.jsx)("div",{ref:f,className:`wf-custom-select-dropdown wf-custom-select-dropdown--${d.placement}`,style:{position:"fixed",top:d.placement==="top"?void 0:d.top,bottom:d.placement==="top"?window.innerHeight-d.top:void 0,left:d.left,minWidth:d.width?Math.max(d.width,140):180,zIndex:9999},role:"listbox",onClick:m=>m.stopPropagation(),children:(0,vt.jsx)("div",{className:"wf-custom-select-list",children:t.map(m=>{let b=m.value===e,C=!!m.subtitle||!!m.badge||!!m.icon;return(0,vt.jsxs)("button",{type:"button",role:"option","aria-selected":b,disabled:m.disabled,className:`wf-custom-select-option ${C?"wf-custom-select-option--rich":""} ${b?"wf-custom-select-option--selected":""} ${m.disabled?"wf-custom-select-option--disabled":""}`,onClick:()=>h(m.value,m.disabled),children:[m.icon?(0,vt.jsx)("span",{className:"wf-custom-select-option-icon",children:m.icon}):null,(0,vt.jsxs)("div",{className:"wf-custom-select-option-main",children:[(0,vt.jsxs)("div",{className:"wf-custom-select-option-top",children:[(0,vt.jsx)("span",{className:"wf-custom-select-option-text",children:m.label}),m.badge?(0,vt.jsx)("span",{className:"wf-custom-select-badge",children:m.badge}):null]}),m.subtitle?(0,vt.jsx)("div",{className:"wf-custom-select-subtitle",children:m.subtitle}):null]}),b?(0,vt.jsx)(Hr,{size:14,className:"wf-custom-select-option-check"}):null]},String(m.value))})})}),document.body):null]})}var bo=B(oe(),1),fS=B(sn(),1),to=B(Z(),1),_u=({items:e,selectedKeys:t=[],placement:a="bottomCenter",trigger:o=["click"],children:n})=>{let[r,l]=(0,bo.useState)(!1),i=(0,bo.useRef)(null),s=(0,bo.useRef)(null),[u,c]=(0,bo.useState)({left:0}),f=(0,bo.useCallback)(()=>{if(!i.current)return;let p=i.current.getBoundingClientRect(),g=a.startsWith("top"),y=a.endsWith("Right"),w=g?void 0:p.bottom+6,h=g?window.innerHeight-p.top+6:void 0,x=y?p.right-140:Math.max(10,p.left+p.width/2-70);c({top:w,bottom:h,left:x})},[a]);(0,bo.useEffect)(()=>{if(!r)return;f();let p=y=>{let w=y.target;i.current?.contains(w)||s.current?.contains(w)||l(!1)},g=y=>{y.key==="Escape"&&l(!1)};return window.addEventListener("mousedown",p,!0),window.addEventListener("keydown",g),window.addEventListener("resize",f),()=>{window.removeEventListener("mousedown",p,!0),window.removeEventListener("keydown",g),window.removeEventListener("resize",f)}},[r,f]);let d=p=>{p.stopPropagation(),l(g=>!g)};return(0,to.jsxs)(to.Fragment,{children:[(0,to.jsx)("div",{ref:i,style:{display:"inline-flex"},onClick:o.includes("click")?d:void 0,children:n}),r&&typeof document<"u"?(0,fS.createPortal)((0,to.jsx)("div",{ref:s,className:"wf-custom-dropdown-menu",style:{position:"fixed",top:u.top,bottom:u.bottom,left:u.left,minWidth:140,zIndex:9999},onClick:p=>p.stopPropagation(),children:(0,to.jsx)("div",{className:"wf-custom-dropdown-list",children:e.map(p=>{let g=t.includes(p.key);return(0,to.jsxs)("button",{type:"button",disabled:p.disabled,className:`wf-custom-dropdown-item ${g?"wf-custom-dropdown-item--selected":""} ${p.disabled?"wf-custom-dropdown-item--disabled":""}`,onClick:()=>{p.disabled||(p.onClick?.(),l(!1))},children:[p.icon?(0,to.jsx)("span",{className:"wf-custom-dropdown-item-icon",children:p.icon}):null,(0,to.jsx)("span",{className:"wf-custom-dropdown-item-text",children:p.label})]},p.key)})})}),document.body):null]})};var pS=B(oe(),1),_h=B(Z(),1),Ih=({value:e,min:t=0,max:a=100,step:o=1,onChange:n,disabled:r=!1,style:l,className:i=""})=>{let s=Math.min(100,Math.max(0,(e-t)/(a-t)*100)),u=(0,pS.useCallback)(c=>{n(Number(c.target.value))},[n]);return(0,_h.jsx)("div",{className:`wf-custom-slider ${i}`,style:l,children:(0,_h.jsx)("input",{type:"range",min:t,max:a,step:o,value:e,disabled:r,onChange:u,className:"wf-custom-slider__input",style:{background:`linear-gradient(to right, var(--wb-accent, #679EFE) 0%, var(--wb-accent, #679EFE) ${s}%, rgba(255,255,255,0.12) ${s}%, rgba(255,255,255,0.12) 100%)`}})})};var mS=B(oe(),1),gS=B(sn(),1);var yo=B(Z(),1),kh=({open:e,onCancel:t,title:a,footer:o,width:n=640,children:r})=>((0,mS.useEffect)(()=>{if(!e)return;let l=i=>{i.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e,t]),!e||typeof document>"u"?null:(0,gS.createPortal)((0,yo.jsx)("div",{className:"wf-modal-overlay",onClick:t,children:(0,yo.jsxs)("div",{className:"wf-modal-card",style:{width:n},onClick:l=>l.stopPropagation(),children:[(0,yo.jsxs)("div",{className:"wf-modal-header",children:[(0,yo.jsx)("div",{className:"wf-modal-title",children:a}),(0,yo.jsx)("button",{type:"button",className:"wf-modal-close",onClick:t,"aria-label":"Close",children:(0,yo.jsx)(oa,{size:16})})]}),(0,yo.jsx)("div",{className:"wf-modal-body",children:r}),o?(0,yo.jsx)("div",{className:"wf-modal-footer",children:o}):null]})}),document.body));var hf=B(oe(),1),hS=B(_g(),1);var Gr=B(Z(),1),Iu=null,lN=()=>{let[e,t]=(0,hf.useState)([]);return(0,hf.useEffect)(()=>(Iu=a=>{t(o=>[...o,a]),setTimeout(()=>{t(o=>o.filter(n=>n.id!==a.id))},a.durationMs)},()=>{Iu=null}),[]),e.length===0?null:(0,Gr.jsx)("div",{className:"wf-toast-container",children:e.map(a=>{let o=iu,n="#60a5fa";return a.type==="success"?(o=Zn,n="#34d399"):a.type==="warning"?(o=er,n="#fb923c"):a.type==="error"&&(o=Yn,n="#f87171"),(0,Gr.jsxs)("div",{className:`wf-toast wf-toast--${a.type}`,children:[(0,Gr.jsx)(o,{size:16,color:n,className:"wf-toast__icon"}),(0,Gr.jsx)("span",{className:"wf-toast__text",children:a.content})]},a.id)})})};function iN(){if(typeof document>"u"||document.getElementById("wf-toast-root"))return;let t=document.createElement("div");t.id="wf-toast-root",document.body.appendChild(t),(0,hS.createRoot)(t).render((0,Gr.jsx)(lN,{}))}function gf(e,t,a=2500){iN();let o=`toast_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;Iu?Iu({id:o,type:e,content:t,durationMs:a}):setTimeout(()=>{Iu?.({id:o,type:e,content:t,durationMs:a})},50)}var fi={success:(e,t)=>gf("success",e,t),warning:(e,t)=>gf("warning",e,t),error:(e,t)=>gf("error",e,t),info:(e,t)=>gf("info",e,t)};var xS=e=>{let t,a=new Set,o=(u,c)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let d=t;t=c??(typeof f!="object"||f===null)?f:Object.assign({},t,f),a.forEach(p=>p(t,d))}},n=()=>t,i={setState:o,getState:n,getInitialState:()=>s,subscribe:u=>(a.add(u),()=>a.delete(u))},s=t=e(o,n,i);return i},bS=(e=>e?xS(e):xS);var ku=B(oe(),1);var sN=e=>e;function uN(e,t=sN){let a=ku.default.useSyncExternalStore(e.subscribe,ku.default.useCallback(()=>t(e.getState()),[e,t]),ku.default.useCallback(()=>t(e.getInitialState()),[e,t]));return ku.default.useDebugValue(a),a}var yS=e=>{let t=bS(e),a=o=>uN(t,o);return Object.assign(a,t),a},pi=(e=>e?yS(e):yS);var LS=B(oe(),1);var wS=e=>Symbol.iterator in e,vS=e=>"entries"in e,CS=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),o=t instanceof Map?t:new Map(t.entries());if(a.size!==o.size)return!1;for(let[n,r]of a)if(!o.has(n)||!Object.is(r,o.get(n)))return!1;return!0},dN=(e,t)=>{let a=e[Symbol.iterator](),o=t[Symbol.iterator](),n=a.next(),r=o.next();for(;!n.done&&!r.done;){if(!Object.is(n.value,r.value))return!1;n=a.next(),r=o.next()}return!!n.done&&!!r.done};function SS(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:wS(e)&&wS(t)?vS(e)&&vS(t)?CS(e,t):dN(e,t):CS({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function _S(e){let t=LS.default.useRef(void 0);return a=>{let o=e(a);return SS(t.current,o)?t.current:t.current=o}}var kS={stroke:"#b1b1b7",strokeWidth:2},xf={type:"animated",style:kS,animated:!1};function IS(e){if(typeof e!="string")return;let t=e.trim();if(!(!t||t==="null"||t==="undefined"))return t}function cN(e){return typeof e.id=="string"&&e.id.trim()?e.id:`e-${e.source}-${e.target}-${Math.random().toString(36).slice(2,10)}`}function MS(e){let t=e.data&&typeof e.data=="object"&&!Array.isArray(e.data)?e.data:{},a=typeof t.createdAt=="number"&&Number.isFinite(t.createdAt)?t.createdAt:Date.now();return{id:cN(e),...xf,...e,data:{...t,createdAt:a},animated:e.animated??xf.animated,style:{...kS,...e.style??{}},sourceHandle:IS(e.sourceHandle),targetHandle:IS(e.targetHandle)}}var ES={text:["text-editor","text-to-text","link-extract","audio-transcription"],image:["import","text-to-image","image-to-image"],video:["import","video-generation","motion-mimicry","subtitle-render","digital-human"],audio:["import","text-to-audio","text-to-music","video-to-audio","voice-clone","audio-extract"]},fN={text:"text-editor",image:"import",video:"import",audio:"import"};var TS={"text-editor":[],"text-to-text":["text","image","video"],"link-extract":["text"],"audio-transcription":["audio"],import:[],"text-to-image":["text"],"image-to-image":["text","image"],"video-generation":["text","image","video","audio"],"digital-human":["text","image","video","audio"],"motion-mimicry":["text","image","video"],"subtitle-render":["text","video"],"text-to-audio":["text"],"video-to-audio":["video"],"voice-clone":["text","audio"],"audio-extract":["video"],"text-to-music":["text"]};function bf(e,t){return{label:"",materialType:e,status:"empty",selectedTool:fN[e],params:{},failStrategy:"abort",...t}}var pN={text:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"image",targetTool:"text-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"text-to-audio",icon:"AudioLines"}],image:[{targetMaterialType:"image",targetTool:"image-to-image",icon:"ImageGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"}],video:[{targetMaterialType:"text",targetTool:"text-to-text",icon:"TextGen"},{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"video",targetTool:"motion-mimicry",icon:"PersonStanding"}],audio:[{targetMaterialType:"video",targetTool:"video-generation",icon:"VideoGen"},{targetMaterialType:"audio",targetTool:"voice-clone",icon:"Mic"},{targetMaterialType:"text",targetTool:"audio-transcription",icon:"TextGen"}]};function AS(e){return pN[e]??[]}function mN(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.materialType,n=a.status,r=a.mediaUrl,l=a.content,i=a.generatedContent,s=!1;return o==="text"?s=!!(l?.trim()||i):o==="image"?s=!!r:s=!!r||n==="completed"||n==="ready",{nodeType:t,materialType:o,hasOutput:s}}return{nodeType:t,hasOutput:!0}}function gN(e){let t=e.type??"",a=e.data??{};if(t==="material"){let o=a.selectedTool,n=a.materialType,r=new Set;if(n){let l=ES[n];if(l)for(let i of l){let s=TS[i];s&&s.forEach(u=>r.add(u))}}return{nodeType:t,selectedTool:o,acceptedTypes:[...r]}}return{nodeType:t,acceptedTypes:["text","image","video","audio"]}}function NS(e,t){let a=mN(e),o=gN(t);return a.nodeType==="group"&&!a.hasOutput||o.acceptedTypes.length===0?!1:a.materialTypes&&a.materialTypes.length>0?a.materialTypes.some(n=>o.acceptedTypes.includes(n)):a.materialType?o.acceptedTypes.includes(a.materialType):!0}function yf(e,t,a){if(e.source===e.target)return{valid:!1,reasonCode:"self_connection"};if(a.some(i=>i.source===e.source&&i.target===e.target))return{valid:!1,reasonCode:"duplicate_edge"};let o=t.find(i=>i.id===e.source),n=t.find(i=>i.id===e.target);if(!o||!n)return{valid:!1,reasonCode:"missing_node"};if(!NS(o,n))return{valid:!1,reasonCode:"type_contract"};let r=new Set,l=[n];for(;l.length>0;){let i=l.shift();if(!(!i||r.has(i.id))){r.add(i.id);for(let s of Kg(i,t,a)){if(s.id===e.source)return{valid:!1,reasonCode:"cycle"};l.push(s)}}}return{valid:!0}}function wf(e,t,a){return{nodes:e.nodes,edges:e.edges,status:t,reasonCode:a}}function hN(e,t){let a=new Map;for(let o of t){if(a.has(o.nodeId))return null;a.set(o.nodeId,o)}return e.map(o=>{let n=a.get(o.id);return n?{...o,...n.node??{},data:{...o.data,...n.data}}:o})}function DS(e,t){let a=new Set;for(let c of t.addNodes??[]){if(a.has(c.id)||e.nodes.some(f=>f.id===c.id))return wf(e,"rejected","duplicate_node");a.add(c.id)}let o=hN([...e.nodes,...t.addNodes??[]],t.nodePatches??[]);if(!o)return wf(e,"rejected","duplicate_node_patch");let n=new Set(o.map(c=>c.id));if((t.nodePatches??[]).some(c=>!n.has(c.nodeId)))return wf(e,"rejected","missing_node");let r=new Set(t.removeEdgeIds??[]),l=new Set(t.removeNodeIds??[]),i=o.filter(c=>!l.has(c.id)),u=[...e.edges.filter(c=>!r.has(c.id)&&!l.has(c.source)&&!l.has(c.target))];for(let c of t.addEdges??[]){let f=MS(c),d=yf(f,i,u);if(!d.valid)return wf(e,"rejected",d.reasonCode??"invalid_connection");u.push(f)}return{nodes:i,edges:u,status:"allowed"}}function RS(e){let t=globalThis;if(typeof t.dispatchEvent=="function")for(let a of e)queueMicrotask(()=>{t.dispatchEvent(new CustomEvent("canvas:connection",{detail:{source:a.source,target:a.target,sourceHandle:a.sourceHandle,targetHandle:a.targetHandle}}))})}var vf=!1,Cf=!1;function Sf(){vf=!0}function zS(){Cf=!0,vf=!1}function OS(){vf=!1,Cf=!1}function xN(){Cf=!1}function Mh(e){return!(e.lastSavedNodeCount>0&&e.nextNodeCount===0&&e.cause!=="user-delete")}function Eh(e,t){return{nodes:e.slice(),edges:t.slice()}}function Mu(e,t){return t||(Cf&&e===0?"reset":vf&&e===0?"user-delete":"autosave")}function Lf(e){let t=Eh(e.nextNodes,e.nextEdges);return e.nextSignature===e.lastSavedSignature?{persist:!1,reason:"unchanged",snapshot:null}:Mh({lastSavedNodeCount:e.lastSavedNodeCount,nextNodeCount:e.nextNodes.length,cause:e.cause})?{persist:!0,reason:"save",snapshot:t}:(xN(),{persist:!1,reason:"skip-empty-overwrite",snapshot:null})}var bN=50,yN=300;function Eu(e,t){let a=JSON.stringify({nodes:e,edges:t}),o=JSON.parse(a);return{nodes:o.nodes,edges:o.edges,sig:a}}var Xt={current:null,lastPushAt:0},be=pi()((e,t)=>({nodes:[],edges:[],onNodesChange:a=>{a.some(o=>o.type==="remove")&&Sf(),e({nodes:yh(a,t().nodes)})},onEdgesChange:a=>{let o=a.filter(r=>r.type==="remove").map(r=>r.id);o.length>0&&t().applyCanvasInputMutation({removeEdgeIds:o});let n=a.filter(r=>r.type!=="remove");n.length>0&&e({edges:wh(n,t().edges)})},onConnect:a=>{t().applyCanvasInputMutation({addEdges:[a]})},applyCanvasInputMutation:a=>{a.removeNodeIds&&a.removeNodeIds.length>0&&Sf();let o=t(),n=DS({nodes:o.nodes,edges:o.edges},a);if(n.status!=="allowed")return n;e({nodes:n.nodes,edges:n.edges});let r=n.edges.filter(l=>!o.edges.some(i=>i.id===l.id));return RS(r),n},setNodes:a=>{e(o=>({nodes:typeof a=="function"?a(o.nodes):a}))},setEdges:a=>{e(o=>({edges:typeof a=="function"?a(o.edges):a}))},removeEdge:a=>{t().applyCanvasInputMutation({removeEdgeIds:[a]})},deleteElements:(a,o)=>{a.length>0&&Sf(),t().applyCanvasInputMutation({removeNodeIds:a,removeEdgeIds:o});let n=t().selectedElement;n.type==="node"&&n.id&&a.includes(n.id)&&e({selectedElement:{type:"none",id:null}})},hydrateGraph:(a,o)=>{OS(),e({nodes:a,edges:o,selectedElement:{type:"none",id:null},past:[],future:[]}),Xt.current=Eu(a,o),Xt.lastPushAt=0},past:[],future:[],pushHistory:()=>{let a=Eu(t().nodes,t().edges);if(Xt.current&&Xt.current.sig===a.sig)return;let o=Date.now();if(Xt.current&&o-Xt.lastPushAt>=yN){let n=Xt.current;e(r=>({past:[...r.past,n].slice(-bN),future:[]})),Xt.lastPushAt=o}Xt.current=a},undo:()=>{let{past:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=Eu(o,n);Xt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:a.slice(0,-1),future:[...i.future,l]}))},redo:()=>{let{future:a,nodes:o,edges:n}=t();if(a.length===0)return;let r=a[a.length-1];if(!r)return;let l=Eu(o,n);Xt.current=r,e(i=>({nodes:r.nodes,edges:r.edges,past:[...i.past,l],future:a.slice(0,-1)}))},clearHistory:()=>{let{nodes:a,edges:o}=t();e({past:[],future:[]}),Xt.current=Eu(a,o),Xt.lastPushAt=0},selectedElement:{type:"none",id:null},setSelectedElement:(a,o)=>{e({selectedElement:{type:a,id:o}})},resetStore:()=>{zS(),e({nodes:[],edges:[],selectedElement:{type:"none",id:null},past:[],future:[]}),Xt.current=null,Xt.lastPushAt=0}})),BS=()=>be(_S(e=>({nodes:e.nodes,edges:e.edges,setNodes:e.setNodes,setEdges:e.setEdges,onNodesChange:e.onNodesChange,onEdgesChange:e.onEdgesChange,onConnect:e.onConnect})));var PS=()=>be(e=>e.past.length>0),HS=()=>be(e=>e.future.length>0);var jS=B(oe(),1);var US={total:0,completed:0,running:0,pending:0,percentage:0},We=pi()(e=>({executionId:null,status:"idle",error:null,progress:US,nodeStatuses:{},startNodeExecution:null,setStartNodeExecution:t=>e({startNodeExecution:t}),setExecution:t=>e(t),setNodeStatus:(t,a)=>e(o=>({nodeStatuses:{...o.nodeStatuses,[t]:a}})),resetExecution:()=>e({executionId:null,status:"idle",error:null,progress:US,nodeStatuses:{}})}));var FS=B(oe(),1),qS="(prefers-reduced-motion: reduce)";function wN(e){if(typeof window>"u"||typeof window.matchMedia!="function")return()=>{};let t=window.matchMedia(qS);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function vN(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia(qS).matches}function VS(){return(0,FS.useSyncExternalStore)(wN,vN)}var wo=B(oe(),1),Ot=B(Z(),1),CN=({pathD:e,pathColor:t="var(--wb-edge, #b1b1b7)",pathWidth:a=2,pathOpacity:o=.2,gradientStartColor:n="var(--wb-beam-start, #4176E6)",gradientStopColor:r="var(--wb-beam-end, #679EFE)",duration:l=1.5,delay:i=0,reverse:s=!1,className:u})=>{let f=(0,wo.useId)().replace(/:/g,""),d=`${f}-glow`,p=`${f}-grad`,g=`beam-flow-${f}`,y=(0,wo.useRef)(null),[w,h]=(0,wo.useState)(0);(0,wo.useEffect)(()=>{y.current&&h(y.current.getTotalLength())},[e]);let{dashSize:x,gapSize:m,offsetRange:b}=(0,wo.useMemo)(()=>{if(!w)return{dashSize:8,gapSize:16,offsetRange:24};let v=Math.max(1,Math.round(w/24)),_=w/v,I=_*(1/3),A=_*(2/3);return{dashSize:I,gapSize:A,offsetRange:_}},[w]),C=`
        @keyframes ${g} {
            from { stroke-dashoffset: ${s?-b:0}px; }
            to { stroke-dashoffset: ${s?0:-b}px; }
        }
    `;return(0,Ot.jsxs)("g",{className:u,children:[(0,Ot.jsxs)("defs",{children:[(0,Ot.jsx)("style",{children:C}),(0,Ot.jsxs)("filter",{id:d,x:"-20%",y:"-20%",width:"140%",height:"140%",children:[(0,Ot.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2",result:"blur"}),(0,Ot.jsxs)("feMerge",{children:[(0,Ot.jsx)("feMergeNode",{in:"blur"}),(0,Ot.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),(0,Ot.jsxs)("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",children:[(0,Ot.jsx)("stop",{offset:"0%",stopColor:n}),(0,Ot.jsx)("stop",{offset:"100%",stopColor:r})]})]}),(0,Ot.jsx)("path",{d:e,stroke:t,strokeWidth:a,strokeOpacity:o,strokeLinecap:"round",fill:"none"}),(0,Ot.jsx)("path",{ref:y,d:e,fill:"none",stroke:"none"}),w>0&&(0,Ot.jsx)("path",{d:e,stroke:`url(#${p})`,strokeWidth:a+1,strokeLinecap:"round",strokeDasharray:`${x} ${m}`,fill:"none",filter:`url(#${d})`,style:{animation:`${g} ${l}s linear ${i}s infinite`,willChange:"stroke-dashoffset"}})]})},GS=CN;var Tu=B(oe(),1);var ZS=B(oe(),1);var SN={"node.type.text":"\u6587\u672C","node.type.image":"\u56FE\u7247","node.type.video":"\u89C6\u9891","node.type.audio":"\u97F3\u9891","node.type.table":"\u7ED3\u6784\u5316\u6570\u636E\u8868","node.renameHint":"\u53CC\u51FB\u91CD\u547D\u540D","node.preparing":"\u51C6\u5907\u4E2D\u2026","node.generating":"\u751F\u6210\u4E2D\u2026","node.generationFailed":"\u751F\u6210\u5931\u8D25","node.taskIdLabel":"\u4EFB\u52A1 ID\uFF1A","node.regenerate":"\u91CD\u65B0\u751F\u6210","node.emptyMedia":"\u672A\u914D\u7F6E\u7D20\u6750\u8F93\u5165\u3002\u9009\u4E2D\u8282\u70B9\u5728\u5C5E\u6027\u9762\u677F\u4E2D\u914D\u7F6E\u53C2\u6570\u3002","node.tryMiniMaxH3":"\u63A2\u7D22\u63A8\u8350\u751F\u6210\u6A21\u578B","node.h3Guide":"\u6A21\u578B\u6700\u4F73\u5B9E\u8DF5\u6307\u5357","pill.import":"\u5BFC\u5165","pill.importImage":"\u5BFC\u5165\u56FE\u7247","pill.importVideo":"\u5BFC\u5165\u89C6\u9891","pill.importAudio":"\u5BFC\u5165\u97F3\u9891","pill.textEdit":"\u6587\u672C\u7F16\u8F91","pill.copy":"\u590D\u5236","pill.structureSplit":"\u7ED3\u6784\u5316\u62C6\u5206","pill.copied":"\u5DF2\u590D\u5236","panel.generate":"\u751F\u6210","panel.promptPlaceholder":"\u8F93\u5165\u63D0\u793A\u8BCD\u2026","panel.textPromptPlaceholder":"\u5199\u4E0B\u4F60\u60F3\u8BB2\u7684\u6545\u4E8B\u3001\u573A\u666F\u6216\u89D2\u8272\u8BBE\u5B9A\u3002\u4F8B\u5982\uFF1A\u843D\u9B44\u8D58\u5A7F\u88AB\u4E08\u6BCD\u5A18\u5F53\u4F17\u7F9E\u8FB1\uFF0C\u8F6C\u8EAB\u4EAE\u51FA\u9690\u85CF\u7684\u4EBF\u4E07\u5BCC\u8C6A\u8EAB\u4EFD\u3002","panel.imagePromptPlaceholder":"\u63CF\u8FF0\u4F60\u60F3\u8981\u751F\u6210\u7684\u5185\u5BB9","panel.videoPromptPlaceholder":"\u63CF\u8FF0\u4F60\u8981\u751F\u6210\u7684\u5185\u5BB9\u6216\u63A2\u7D22 H3\u521B\u4F5C\u6307\u5357 \u2197","panel.audioPromptPlaceholder":"\u8F93\u5165\u8981\u6717\u8BFB\u7684\u6587\u5B57\u2026","panel.musicPromptPlaceholder":"\u63CF\u8FF0\u97F3\u4E50\u98CE\u683C\u3001\u60C5\u7EEA\u3001\u4E50\u5668\u3001BPM\u2026","panel.audioGen":"\u97F3\u9891\u751F\u6210","panel.musicGen":"\u97F3\u4E50\u751F\u6210","panel.aspectAdaptive":"\u81EA\u9002\u5E94","panel.batchCount":"\xD7 1","panel.getFreeChance":"\u9886\u53D6\u514D\u8D39\u673A\u4F1A","panel.dropToImport":"\u677E\u624B\u7ACB\u5373\u5BFC\u5165","panel.duration":"\u65F6\u957F\uFF08\u79D2\uFF09","panel.failAbort":"\u51FA\u9519\u5373\u4E2D\u6B62","panel.failSkip":"\u8DF3\u8FC7\u8BE5\u8282\u70B9","panel.advanced":"\u9AD8\u7EA7","panel.modelEmpty":"\u80FD\u529B\u76EE\u5F55\u4E3A\u7A7A\uFF08stub\uFF09","panel.runHint":"\u6267\u884C\u6B64\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","panel.hintTextNode":"\u6587\u672C\u7F16\u8F91\u8282\u70B9\u76F4\u63A5\u5728\u5361\u7247\u5185\u7F16\u8F91\u5185\u5BB9\uFF1B\u4E0A\u6E38\u8F93\u5165\u53EF\u901A\u8FC7\u6587\u751F\u7C7B\u5DE5\u5177\u5F15\u7528","panel.hintImportNode":"\u5BFC\u5165\u7D20\u6750\u8282\u70B9\u7531\u4E0A\u6E38\u8FDE\u7EBF\u8F93\u5165\u586B\u5145","error.contentPolicyViolation":"\u5185\u5BB9\u5B89\u5168\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u8BF7\u8C03\u6574\u63D0\u793A\u8BCD\u6216\u53C2\u8003\u56FE\u540E\u91CD\u8BD5\u3002","error.generationProviderFailed":"\u751F\u6210\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","edge.disconnect":"\u53D6\u6D88\u8FDE\u63A5","menu.generateFromNode":"\u4ECE\u8BE5\u8282\u70B9\u751F\u6210","edge.reject.selfConnection":"\u4E0D\u80FD\u8FDE\u63A5\u5230\u81EA\u5DF1","edge.reject.duplicateEdge":"\u8FD9\u4E24\u4E2A\u8282\u70B9\u5DF2\u7ECF\u8FDE\u63A5\u8FC7\u4E86","edge.reject.missingNode":"\u8FDE\u63A5\u76EE\u6807\u4E0D\u5B58\u5728","edge.reject.cycle":"\u8FD9\u6761\u8FDE\u7EBF\u4F1A\u5F62\u6210\u5FAA\u73AF\u4F9D\u8D56","edge.reject.typeContract":"\u76EE\u6807\u8282\u70B9\u5F53\u524D\u4E0D\u63A5\u53D7\u8FD9\u79CD\u7D20\u6750\u7C7B\u578B","edge.reject.invalid":"\u8FDE\u63A5\u65E0\u6548","node.textPlaceholder":"\u8F93\u5165\u6587\u672C\u5185\u5BB9\u2026","node.skipped":"\u8282\u70B9\u88AB\u8DF3\u8FC7","toolbar.add.text":"\u6DFB\u52A0\u6587\u672C\u8282\u70B9","toolbar.add.image":"\u6DFB\u52A0\u56FE\u7247\u8282\u70B9","toolbar.add.video":"\u6DFB\u52A0\u89C6\u9891\u8282\u70B9","toolbar.add.audio":"\u6DFB\u52A0\u97F3\u9891\u8282\u70B9","toolbar.add.table":"\u6DFB\u52A0\u6570\u636E\u8868\u8282\u70B9","toolbar.add.textDesc":"\u5267\u672C\u3001\u6587\u6848\u3001\u5206\u955C\u63CF\u8FF0","toolbar.add.imageDesc":"\u6587\u751F\u56FE\u3001\u53C2\u8003\u56FE\u3001\u753B\u98CE\u63A7\u5236","toolbar.add.videoDesc":"\u6587\u751F\u89C6\u9891\u3001\u9996\u5C3E\u5E27\u3001\u52A8\u4F5C\u9A71\u52A8","toolbar.add.audioDesc":"\u8BED\u97F3\u5408\u6210\u3001\u80CC\u666F\u97F3\u4E50\u3001\u97F3\u6548","toolbar.add.tableDesc":"\u6279\u91CF\u5206\u955C\u5267\u672C\u3001\u591A\u6A21\u6001\u7ED3\u6784\u5316\u8868\u683C","toolbar.addNode":"\u6DFB\u52A0\u8282\u70B9\uFF08N\uFF09","toolbar.selectMode":"\u9009\u62E9\u6A21\u5F0F\uFF08V\uFF09","toolbar.panMode":"\u6293\u624B\u6A21\u5F0F\uFF08H\uFF09","toolbar.assets":"\u9879\u76EE\u8D44\u4EA7","toolbar.help":"\u5FEB\u6377\u952E\u5E2E\u52A9","toolbar.undo":"\u64A4\u9500","toolbar.redo":"\u91CD\u505A","toolbar.undoTitle":"\u64A4\u9500\uFF08\u2318Z\uFF09","toolbar.redoTitle":"\u91CD\u505A\uFF08\u21E7\u2318Z\uFF09","header.fitView":"\u81EA\u9002\u5E94\u89C6\u56FE","header.zoomIn":"\u653E\u5927","header.zoomOut":"\u7F29\u5C0F","header.minimap":"\u5C0F\u5730\u56FE","header.alignGrid":"\u6574\u7406\u5BF9\u9F50","header.routingCurved":"\u5E73\u6ED1\u8D1D\u585E\u5C14\u66F2\u7EBF","header.splitLayout":"\u5E03\u5C40\u5207\u6362\uFF08\u2318\\\uFF09","header.splitLeft":"\u5BF9\u8BDD\u5728\u5DE6","header.splitRight":"\u5BF9\u8BDD\u5728\u53F3","header.canvasOnly":"\u4EC5\u753B\u5E03","header.chatOnly":"\u4EC5\u5BF9\u8BDD","pills.tryLabel":"\u8BD5\u8BD5:","pills.writePrompt":"\u81EA\u5DF1\u7F16\u5199\u5185\u5BB9","pills.scriptGen":"\u5267\u672C\u751F\u6210","pills.planningGen":"\u7B56\u5212\u6848\u751F\u6210","pills.promptExpand":"\u63D0\u793A\u8BCD\u751F\u6210","pills.storyboard":"\u5206\u955C\u811A\u672C","exec.ariaLabel":"\u6267\u884C\u63A7\u5236","exec.status.idle":"\u672A\u6267\u884C","exec.status.pending":"\u542F\u52A8\u4E2D\u2026","exec.status.running":"\u6267\u884C\u4E2D","exec.status.paused":"\u5DF2\u6682\u505C","exec.status.completed":"\u5DF2\u5B8C\u6210","exec.status.error":"\u6267\u884C\u5931\u8D25","exec.status.cancelled":"\u5DF2\u53D6\u6D88","exec.pause":"\u6682\u505C","exec.pauseTitle":"\u6682\u505C\u6267\u884C","exec.resume":"\u6062\u590D","exec.resumeTitle":"\u6062\u590D\u6267\u884C","exec.cancel":"\u53D6\u6D88","exec.cancelTitle":"\u53D6\u6D88\u6267\u884C","exec.runAll":"\u6267\u884C\u5168\u90E8","exec.runAllTitle":"\u6267\u884C\u6574\u4E2A\u5DE5\u4F5C\u6D41\uFF08\u6309\u62D3\u6251\u5206\u5C42\u5E76\u884C\uFF09","exec.reset":"\u91CD\u7F6E","exec.resetTitle":"\u6E05\u9664\u6267\u884C\u72B6\u6001","menu.addNode":"\u6DFB\u52A0\u8282\u70B9","menu.back":"\u8FD4\u56DE","menu.executeSelection":"\u6267\u884C\u9009\u4E2D\u8282\u70B9\uFF08\u542B\u4E0A\u6E38\uFF09","menu.copy":"\u590D\u5236","menu.duplicate":"\u521B\u5EFA\u526F\u672C","menu.paste":"\u7C98\u8D34","menu.delete":"\u5220\u9664","menu.selectAll":"\u5168\u9009","tool.text-editor":"\u6587\u672C\u7F16\u8F91","tool.text-to-text":"\u6587\u672C\u751F\u6210","tool.link-extract":"\u94FE\u63A5\u63D0\u53D6","tool.audio-transcription":"\u97F3\u9891\u8F6C\u5199","tool.import":"\u5BFC\u5165\u7D20\u6750","tool.text-to-image":"\u6587\u751F\u56FE","tool.image-to-image":"\u56FE\u751F\u56FE","tool.video-generation":"\u89C6\u9891\u751F\u6210","tool.motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","tool.subtitle-render":"\u5B57\u5E55\u6E32\u67D3","tool.digital-human":"\u6570\u5B57\u4EBA","tool.text-to-audio":"\u6587\u672C\u8F6C\u8BED\u97F3","tool.text-to-music":"\u6587\u672C\u914D\u4E50","tool.video-to-audio":"\u89C6\u9891\u8F6C\u97F3\u9891","tool.voice-clone":"\u58F0\u97F3\u514B\u9686","tool.audio-extract":"\u97F3\u9891\u63D0\u53D6","app.loading":"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026","app.retry":"\u91CD\u8BD5","app.nodes":"\u8282\u70B9","app.saveNow":"\u7ACB\u5373\u4FDD\u5B58","app.saveNowTitle":"\u7ACB\u5373\u4FDD\u5B58\uFF08\u7CFB\u7EDF\u5DF2\u5F00\u542F\u5B9E\u65F6\u81EA\u52A8\u4FDD\u5B58\uFF09","app.close":"\u5173\u95ED","app.autosave.pending":"\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u2026","app.autosave.saving":"\u81EA\u52A8\u4FDD\u5B58\u4E2D\u2026","app.autosave.saved":"\u5DF2\u4FDD\u5B58","app.autosave.error":"\u4FDD\u5B58\u5931\u8D25\uFF0C\u5C06\u5728\u4E0B\u6B21\u66F4\u6539\u540E\u91CD\u8BD5","app.autosave.conflict":"\u7248\u672C\u51B2\u7A81\uFF08\u5DE5\u4F5C\u533A\u5DF2\u5728\u522B\u5904\u66F4\u65B0\uFF09","app.conflictBanner":"\u7248\u672C\u51B2\u7A81\uFF1A\u8BE5\u5DE5\u4F5C\u533A\u5DF2\u5728\u5176\u4ED6\u4F1A\u8BDD\u88AB\u4FEE\u6539\u3002","app.conflictOverwrite":"\u5F3A\u5236\u8986\u76D6\u8FDC\u7AEF\u7248\u672C","app.conflictReload":"\u653E\u5F03\u672C\u5730\uFF0C\u8F7D\u5165\u6700\u65B0","palette.group.material":"\u7D20\u6750","palette.node.material":"\u7D20\u6750\u8282\u70B9","error.createWorkspaceFailed":"\u521B\u5EFA\u5DE5\u4F5C\u533A\u5931\u8D25","error.loadWorkspaceFailed":"\u8BFB\u53D6\u5DE5\u4F5C\u533A\u5931\u8D25","error.nodeExecutionFailed":"\u8282\u70B9\u6267\u884C\u5931\u8D25","error.executionFailed":"\u6267\u884C\u5931\u8D25","error.createExecutionFailed":"\u521B\u5EFA\u6267\u884C\u5931\u8D25","menu.option.text.text-text-to-text":"AI \u6587\u672C\u751F\u6210","menu.option.text.text-text-to-text.desc":"\u57FA\u4E8E\u6587\u672C\u751F\u6210\u65B0\u6587\u672C","menu.option.text.image-text-to-image":"\u6587\u751F\u56FE","menu.option.text.image-text-to-image.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u56FE\u7247","menu.option.text.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.text.video-video-generation.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u89C6\u9891","menu.option.text.audio-text-to-audio":"\u97F3\u9891\u751F\u6210","menu.option.text.audio-text-to-audio.desc":"\u6839\u636E\u6587\u672C\u751F\u6210\u97F3\u6548","menu.option.image.image-image-to-image":"\u56FE\u751F\u56FE","menu.option.image.image-image-to-image.desc":"\u4EE5\u56FE\u751F\u56FE\u3001\u98CE\u683C\u8FC1\u79FB","menu.option.image.video-video-generation":"\u56FE\u751F\u89C6\u9891","menu.option.image.video-video-generation.desc":"\u56FE\u7247\u8F6C\u89C6\u9891\u3001\u52A8\u6001\u6548\u679C","menu.option.video.text-text-to-text":"\u6587\u672C","menu.option.video.text-text-to-text.desc":"\u57FA\u4E8E\u89C6\u9891\u751F\u6210\u6587\u672C","menu.option.video.video-video-generation":"\u89C6\u9891","menu.option.video.video-video-generation.desc":"\u57FA\u4E8E\u89C6\u9891\u53C2\u8003\u751F\u6210\u65B0\u89C6\u9891","menu.option.video.video-motion-mimicry":"\u52A8\u4F5C\u6A21\u4EFF","menu.option.video.video-motion-mimicry.desc":"\u52A8\u4F5C\u8FC1\u79FB\u3001\u59FF\u6001\u590D\u5236","menu.option.audio.video-video-generation":"\u89C6\u9891\u751F\u6210","menu.option.audio.video-video-generation.desc":"\u4E3A\u89C6\u9891\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50","menu.option.audio.audio-voice-clone":"\u58F0\u97F3\u514B\u9686","menu.option.audio.audio-voice-clone.desc":"\u590D\u5236\u97F3\u8272\u3001\u8BED\u97F3\u5408\u6210","menu.option.audio.text-audio-transcription":"\u8BED\u97F3\u8F6C\u6587\u5B57","menu.option.audio.text-audio-transcription.desc":"\u8BED\u97F3\u8BC6\u522B\u3001\u5B57\u5E55\u751F\u6210"},XS=SN;var LN={"node.type.text":"Text","node.type.image":"Image","node.type.video":"Video","node.type.audio":"Audio","node.type.table":"Data Table","node.renameHint":"Double-click to rename","node.preparing":"Preparing...","node.generating":"Generating...","node.generationFailed":"Generation Failed","node.taskIdLabel":"Task ID:","node.regenerate":"Regenerate","node.emptyMedia":"No media configured. Select node to configure parameters in the inspector panel.","node.tryMiniMaxH3":"Explore recommended models","node.h3Guide":"Best Practice Guide","pill.import":"Import","pill.importImage":"Import Image","pill.importVideo":"Import Video","pill.importAudio":"Import Audio","pill.textEdit":"Edit Text","pill.copy":"Copy","pill.structureSplit":"Split Text","pill.copied":"Copied","panel.generate":"Generate","panel.promptPlaceholder":"Describe what you want to generate...","panel.textPromptPlaceholder":"Write your story, scene, or character idea...","panel.imagePromptPlaceholder":"Describe what you want to generate","panel.videoPromptPlaceholder":"Describe what you want to generate or explore H3 Guide \u2197","panel.audioPromptPlaceholder":"Enter the text you want to read aloud...","panel.musicPromptPlaceholder":"Describe music style, mood, instruments, BPM...","panel.audioGen":"Speech Gen","panel.musicGen":"Music Gen","panel.aspectAdaptive":"Adaptive","panel.batchCount":"\xD7 1","panel.getFreeChance":"Get Free Chance","panel.dropToImport":"Drop to import","panel.duration":"Duration (s)","panel.failAbort":"Abort on error","panel.failSkip":"Skip this node","panel.advanced":"Advanced","panel.modelEmpty":"Capability catalog empty (stub)","panel.runHint":"Run this node (with upstream)","panel.hintTextNode":"Text editor nodes edit content directly in the card; upstream input can be referenced by text-generation tools","panel.hintImportNode":"Import nodes are filled by upstream connections","error.contentPolicyViolation":"Content safety review did not pass. Please adjust the prompt or reference image and try again.","error.generationProviderFailed":"Generation service failed. Please try again later.","edge.disconnect":"Disconnect","menu.generateFromNode":"Generate from this node","edge.reject.selfConnection":"Cannot connect a node to itself","edge.reject.duplicateEdge":"These two nodes are already connected","edge.reject.missingNode":"Connection target does not exist","edge.reject.cycle":"This connection would create a cycle","edge.reject.typeContract":"The target node does not accept this material type","edge.reject.invalid":"Invalid connection","node.textPlaceholder":"Enter text content...","node.skipped":"Node skipped","toolbar.add.text":"Add Text node","toolbar.add.image":"Add Image node","toolbar.add.video":"Add Video node","toolbar.add.audio":"Add Audio node","toolbar.add.table":"Add Data Table node","toolbar.add.textDesc":"Script, copy, and prompt drafts","toolbar.add.imageDesc":"Text to image & reference frames","toolbar.add.videoDesc":"Text to video & frame interpolation","toolbar.add.audioDesc":"Speech synthesis & sound effects","toolbar.add.tableDesc":"Batch storyboard & structured multimodal records","toolbar.addNode":"Add Node (N)","toolbar.selectMode":"Select Mode (V)","toolbar.panMode":"Hand/Pan Mode (H)","toolbar.assets":"Project Assets","toolbar.help":"Keyboard Shortcuts","toolbar.undo":"Undo","toolbar.redo":"Redo","toolbar.undoTitle":"Undo (\u2318Z)","toolbar.redoTitle":"Redo (\u21E7\u2318Z)","header.fitView":"Fit View","header.zoomIn":"Zoom In","header.zoomOut":"Zoom Out","header.minimap":"Minimap","header.alignGrid":"Align Grid","header.routingCurved":"Smooth Bezier Edges","header.splitLayout":"Switch Layout (\u2318\\)","header.splitLeft":"Chat on Left","header.splitRight":"Chat on Right","header.canvasOnly":"Canvas Only","header.chatOnly":"Chat Only","pills.tryLabel":"Try:","pills.writePrompt":"Write Draft","pills.scriptGen":"Script Gen","pills.planningGen":"Plan Gen","pills.promptExpand":"Prompt Gen","pills.storyboard":"Storyboard","exec.ariaLabel":"Execution controls","exec.status.idle":"Idle","exec.status.pending":"Starting...","exec.status.running":"Running","exec.status.paused":"Paused","exec.status.completed":"Completed","exec.status.error":"Failed","exec.status.cancelled":"Cancelled","exec.pause":"Pause","exec.pauseTitle":"Pause execution","exec.resume":"Resume","exec.resumeTitle":"Resume execution","exec.cancel":"Cancel","exec.cancelTitle":"Cancel execution","exec.runAll":"Run all","exec.runAllTitle":"Run the whole workflow (parallel by topological layers)","exec.reset":"Reset","exec.resetTitle":"Clear execution state","menu.addNode":"Add Node","menu.back":"Back","menu.executeSelection":"Run selected nodes (with upstream)","menu.copy":"Copy","menu.duplicate":"Duplicate","menu.paste":"Paste","menu.delete":"Delete","menu.selectAll":"Select all","tool.text-editor":"Text Editor","tool.text-to-text":"Text Generation","tool.link-extract":"Link Extract","tool.audio-transcription":"Audio Transcription","tool.import":"Import","tool.text-to-image":"Text to Image","tool.image-to-image":"Image to Image","tool.video-generation":"Video Generation","tool.motion-mimicry":"Motion Mimicry","tool.subtitle-render":"Subtitle Render","tool.digital-human":"Digital Human","tool.text-to-audio":"Text to Speech","tool.text-to-music":"Text to Music","tool.video-to-audio":"Video to Audio","tool.voice-clone":"Voice Clone","tool.audio-extract":"Audio Extract","app.loading":"Loading workspace...","app.retry":"Retry","app.nodes":"nodes","app.saveNow":"Save now","app.saveNowTitle":"Save now (Real-time autosave enabled)","app.close":"Close","app.autosave.pending":"Unsaved changes\u2026","app.autosave.saving":"Saving\u2026","app.autosave.saved":"Saved","app.autosave.error":"Save failed; will retry on next change","app.autosave.conflict":"Version conflict (modified elsewhere)","app.conflictBanner":"Conflict detected: Workspace was updated in another session.","app.conflictOverwrite":"Overwrite Remote","app.conflictReload":"Discard and Reload","palette.group.material":"Material","palette.node.material":"Material Node","error.createWorkspaceFailed":"Failed to create workspace","error.loadWorkspaceFailed":"Failed to load workspace","error.nodeExecutionFailed":"Node execution failed","error.executionFailed":"Execution failed","error.createExecutionFailed":"Failed to create execution","menu.option.text.text-text-to-text":"AI Text Generation","menu.option.text.text-text-to-text.desc":"Generate new text from text","menu.option.text.image-text-to-image":"Text to Image","menu.option.text.image-text-to-image.desc":"Generate images from text","menu.option.text.video-video-generation":"Video Generation","menu.option.text.video-video-generation.desc":"Generate videos from text","menu.option.text.audio-text-to-audio":"Audio Generation","menu.option.text.audio-text-to-audio.desc":"Generate sound effects from text","menu.option.image.image-image-to-image":"Image to Image","menu.option.image.image-image-to-image.desc":"Image-to-image, style transfer","menu.option.image.video-video-generation":"Image to Video","menu.option.image.video-video-generation.desc":"Turn images into videos with motion","menu.option.video.text-text-to-text":"Text","menu.option.video.text-text-to-text.desc":"Generate text from video","menu.option.video.video-video-generation":"Video","menu.option.video.video-video-generation.desc":"Generate new videos with video reference","menu.option.video.video-motion-mimicry":"Motion Mimicry","menu.option.video.video-motion-mimicry.desc":"Motion transfer, pose copy","menu.option.audio.video-video-generation":"Video Generation","menu.option.audio.video-video-generation.desc":"Add background music to videos","menu.option.audio.audio-voice-clone":"Voice Clone","menu.option.audio.audio-voice-clone.desc":"Clone timbre, speech synthesis","menu.option.audio.text-audio-transcription":"Speech to Text","menu.option.audio.text-audio-transcription.desc":"Speech recognition, subtitle generation"},YS=LN;var Th={zh:XS,en:YS},_f="zh",Ah=new Set;function _N(e){return Ah.add(e),()=>Ah.delete(e)}function IN(){return _f}function WS(e){let t=e==="en"?"en":"zh";if(t!==_f){_f=t;for(let a of Ah)a()}}function Jo(e){return Th[_f][e]??Th.zh[e]??Th.en[e]??e}function _e(){return(0,ZS.useSyncExternalStore)(_N,IN),Jo}var kf=B(Z(),1),If=28,kN=({edgeId:e,x:t,y:a})=>{let o=_e(),n=be(i=>i.applyCanvasInputMutation),r=(0,Tu.useCallback)(i=>{i.preventDefault(),i.stopPropagation()},[]),l=(0,Tu.useCallback)(i=>{i.preventDefault(),i.stopPropagation(),n({removeEdgeIds:[e]})},[e,n]);return(0,kf.jsx)("foreignObject",{className:"wf-edge-disconnect",x:t-If/2,y:a-If/2,width:If,height:If,children:(0,kf.jsx)("button",{type:"button",className:"wf-edge-disconnect__button","aria-label":o("edge.disconnect"),title:o("edge.disconnect"),onPointerDown:r,onClick:l,children:(0,kf.jsx)(Cu,{"aria-hidden":"true",size:14,strokeWidth:2.2})})})},Mf=(0,Tu.memo)(kN);var Ha=B(Z(),1),MN=({id:e,sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l,selected:i,target:s})=>{let[u,c,f]=ni({sourceX:t,sourceY:a,targetX:o,targetY:n,sourcePosition:r,targetPosition:l}),d=We(w=>w.nodeStatuses[s]==="running"),p=VS(),g=i?"var(--wb-accent)":"var(--wb-edge)",y=i?2.5:2;return d&&p?(0,Ha.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Ha.jsx)(Xn,{id:e,path:u,className:"wf-edge--flowing",style:{stroke:g,strokeWidth:y}}),(0,Ha.jsx)(Mf,{edgeId:e,x:c,y:f})]}):d?(0,Ha.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Ha.jsx)(Xn,{id:e,path:u,style:{stroke:g,strokeWidth:y,opacity:0}}),(0,Ha.jsx)(GS,{pathD:u,startPoint:{x:t,y:a},endPoint:{x:o,y:n},pathColor:g,pathWidth:y}),(0,Ha.jsx)(Mf,{edgeId:e,x:c,y:f})]}):(0,Ha.jsxs)("g",{className:"wf-edge-with-disconnect",children:[(0,Ha.jsx)(Xn,{id:e,path:u,style:{stroke:g,strokeWidth:y}}),(0,Ha.jsx)(Mf,{edgeId:e,x:c,y:f})]})},KS=(0,jS.memo)(MN);var mi=B(oe(),1);function Ua(e){e.stopPropagation()}function Nh(e){e.preventDefault(),e.stopPropagation()}var fe=B(Z(),1),EN=[{type:"text",Icon:aa,color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},{type:"image",Icon:$o,color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},{type:"video",Icon:eo,color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},{type:"audio",Icon:Pa,color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},{type:"table",Icon:Fr,color:"#10b981",bg:"rgba(16, 185, 129, 0.16)"}],TN=({onAddNode:e,onUndo:t,onRedo:a,canUndo:o=!1,canRedo:n=!1,pointerMode:r="select",onPointerModeChange:l,onOpenAssets:i,onOpenHelp:s,isAddMenuOpen:u,onToggleAddMenu:c,isAssetsOpen:f=!1})=>{let d=_e(),[p,g]=(0,mi.useState)(!1),y=u!==void 0?u:p,w=c||(()=>g(m=>!m)),h=(0,mi.useCallback)(m=>{e(m),c?c():g(!1)},[e,c]),x=[{key:"select",icon:(0,fe.jsx)(ci,{size:15}),label:d("toolbar.selectMode"),onClick:()=>l?.("select")},{key:"pan",icon:(0,fe.jsx)(di,{size:15}),label:d("toolbar.panMode"),onClick:()=>l?.("pan")}];return(0,fe.jsxs)("div",{className:"wf-canvas-toolbar nodrag nopan",onPointerDown:Ua,onMouseDown:Ua,children:[(0,fe.jsxs)("div",{style:{position:"relative"},children:[(0,fe.jsx)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${y?"wf-canvas-toolbar__item--primary-add-open":""}`,onClick:w,onContextMenu:Nh,title:d("toolbar.addNode"),children:(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(ba,{size:20})})}),y&&(0,fe.jsx)("div",{className:"wf-dock-add-popover",children:EN.map(m=>(0,fe.jsxs)("button",{type:"button",className:"wf-dock-add-popover__item",onClick:()=>h(m.type),onContextMenu:Nh,children:[(0,fe.jsx)("div",{className:"wf-dock-add-popover__icon",style:{background:m.bg,color:m.color},children:(0,fe.jsx)(m.Icon,{size:18})}),(0,fe.jsxs)("div",{className:"wf-dock-add-popover__content",children:[(0,fe.jsx)("span",{className:"wf-dock-add-popover__label",children:d(`node.type.${m.type}`)}),(0,fe.jsx)("span",{className:"wf-dock-add-popover__desc",children:d(`toolbar.add.${m.type}Desc`)})]})]},m.type))})]}),(0,fe.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,fe.jsx)(_u,{items:x,selectedKeys:[r],placement:"topCenter",children:(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item",title:d(r==="select"?"toolbar.selectMode":"toolbar.panMode"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:r==="select"?(0,fe.jsx)(ci,{size:16}):(0,fe.jsx)(di,{size:16})}),(0,fe.jsx)(au,{size:12,style:{opacity:.6,marginLeft:2}})]})}),(0,fe.jsxs)("button",{type:"button",className:`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${f?"wf-canvas-toolbar__item--active":""}`,onClick:i,title:d("toolbar.assets"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(lu,{size:17})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.assets")})]}),(t||a)&&(0,fe.jsx)("div",{className:"wf-canvas-toolbar__divider"}),t&&(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>t(),disabled:!o,title:d("toolbar.undoTitle"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(vu,{size:16})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.undo")})]}),a&&(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:()=>a(),disabled:!n,title:d("toolbar.redoTitle"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(hu,{size:16})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.redo")})]}),s&&(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("div",{className:"wf-canvas-toolbar__divider"}),(0,fe.jsxs)("button",{type:"button",className:"wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only",onClick:s,title:d("toolbar.help"),children:[(0,fe.jsx)("span",{className:"wf-canvas-toolbar__icon",children:(0,fe.jsx)(Qa,{size:16})}),(0,fe.jsx)("span",{className:"wf-canvas-toolbar__label",children:d("toolbar.help")})]})]})]})},QS=(0,mi.memo)(TN);var gi=B(oe(),1);var he=B(Z(),1),AN={idle:"exec.status.idle",pending:"exec.status.pending",running:"exec.status.running",paused:"exec.status.paused",completed:"exec.status.completed",error:"exec.status.error",cancelled:"exec.status.cancelled"},NN=e=>Math.round(e.transform[2]*100),DN=({isMinimapOpen:e,onToggleMinimap:t,onAlignGrid:a,layoutMode:o="split-left",onLayoutModeChange:n,onStartExecution:r,onPauseExecution:l,onResumeExecution:i,onCancelExecution:s,onResetExecution:u})=>{let c=_e(),{zoomIn:f,zoomOut:d,fitView:p}=xa(),g=xe(NN),y=We(A=>A.status),w=We(A=>A.progress),h=We(A=>A.error),x=y==="pending"||y==="running",m=y==="paused",b=y==="completed"||y==="error"||y==="cancelled",C=w.total>0,S=(0,gi.useCallback)(()=>{p({duration:250,padding:.1})},[p]),v=(0,gi.useCallback)(()=>{f({duration:150})},[f]),_=(0,gi.useCallback)(()=>{d({duration:150})},[d]),I=[{key:"split-left",label:c("header.splitLeft"),onClick:()=>n?.("split-left")},{key:"split-right",label:c("header.splitRight"),onClick:()=>n?.("split-right")},{key:"canvas-only",label:c("header.canvasOnly"),onClick:()=>n?.("canvas-only")},{key:"chat-only",label:c("header.chatOnly"),onClick:()=>n?.("chat-only")}];return(0,he.jsxs)("div",{className:"wf-header-controls nodrag nopan",onPointerDown:Ua,onMouseDown:Ua,children:[r&&(x||m||b&&u?(0,he.jsxs)("div",{className:`wf-header-capsule wf-header-capsule--exec ${x||m?"wf-header-capsule--busy":"wf-header-capsule--terminal"}`,children:[x||m?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)("span",{className:`wf-header-capsule__status-pill wf-header-capsule__status-pill--${y}`,children:[c(AN[y]),C&&` (${w.completed}/${w.total})`]}),x?(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:l,title:c("exec.pauseTitle"),children:(0,he.jsx)(mu,{size:14})}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--active",onClick:i,title:c("exec.resumeTitle"),children:(0,he.jsx)(Ja,{size:14})}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--danger",onClick:s,title:c("exec.cancelTitle"),children:(0,he.jsx)(oa,{size:14})})]}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn wf-header-capsule__btn--run-all",onClick:r,title:h||c("exec.runAll"),"aria-label":c("exec.runAll"),children:(0,he.jsx)(Ja,{size:14,fill:"currentColor",style:{marginLeft:2}})}),b&&u&&(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:u,title:c("exec.resetTitle"),children:(0,he.jsx)(xu,{size:14})})]}):(0,he.jsx)("button",{type:"button",className:"wf-header-capsule wf-header-capsule--exec-standalone",onClick:r,title:h||c("exec.runAll"),"aria-label":c("exec.runAll"),children:(0,he.jsx)(Ja,{size:14,fill:"currentColor",style:{marginLeft:2}})})),(0,he.jsxs)("div",{className:"wf-header-capsule",children:[(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:S,title:c("header.fitView"),children:(0,he.jsx)(fu,{size:15})}),(0,he.jsx)("div",{className:"wf-header-capsule__divider"}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:_,title:c("header.zoomOut"),children:(0,he.jsx)(pu,{size:15})}),(0,he.jsxs)("span",{className:"wf-header-capsule__zoom-text",onClick:S,title:c("header.fitView"),children:[g,"%"]}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:v,title:c("header.zoomIn"),children:(0,he.jsx)(ba,{size:15})})]}),(0,he.jsxs)("div",{className:"wf-header-capsule",children:[a&&(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",onClick:a,title:c("header.alignGrid"),children:(0,he.jsx)(uu,{size:15})}),(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:c("header.routingCurved"),children:(0,he.jsx)(Lu,{size:15})}),(0,he.jsx)("button",{type:"button",className:`wf-header-capsule__btn ${e?"wf-header-capsule__btn--active":""}`,onClick:t,title:c("header.minimap"),children:(0,he.jsx)(du,{size:15})}),n&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{className:"wf-header-capsule__divider"}),(0,he.jsx)(_u,{items:I,selectedKeys:[o],placement:"bottomRight",children:(0,he.jsx)("button",{type:"button",className:"wf-header-capsule__btn",title:c("header.splitLayout"),children:(0,he.jsx)(Jn,{size:15})})})]})]})]})},$S=(0,gi.memo)(DN);var vo=B(oe(),1);var de=B(Z(),1),RN=[{key:"all",label:"\u5168\u90E8",icon:Wn},{key:"character",label:"\u89D2\u8272 (1)",icon:ya},{key:"scene",label:"\u573A\u666F (2)",icon:$a},{key:"prop",label:"\u9053\u5177 (3)",icon:wu},{key:"style",label:"\u98CE\u683C (4)",icon:ya},{key:"knowledge",label:"\u77E5\u8BC6 (5)",icon:aa},{key:"custom",label:"\u81EA\u5B9A\u4E49 (6)",icon:Wn},{key:"artifacts",label:"\u4EA7\u7269\u5E93",icon:ru}],zN=({isOpen:e,onClose:t,onInsertAsset:a,activeCategory:o="all",onCategoryChange:n})=>{let[r,l]=(0,vo.useState)(o),[i,s]=(0,vo.useState)(""),[u,c]=(0,vo.useState)([]),[f,d]=(0,vo.useState)(!1),[p,g]=(0,vo.useState)(null),y=(0,vo.useCallback)(async()=>{d(!0),g(null);try{let x=r!=="all"&&r!=="artifacts"?`?type=${r}`:"",m=await fetch(`/omnimux/assets/library${x}`),b=[];if(m.ok){let v=await m.json();Array.isArray(v.assets)&&(b=v.assets.map(_=>({id:_.id,name:_.name,type:_.type||"custom",description:_.description,real_path:_.real_path,previewUrl:`/omnimux/assets/library/preview?id=${encodeURIComponent(_.id)}`,tags:_.tags||[],updatedAt:_.updatedAt})))}let C=[];if(r==="all"||r==="artifacts"){let v=await fetch("/omnimux/assets/artifacts");if(v.ok){let _=await v.json();Array.isArray(_.artifacts)&&(C=_.artifacts.map(I=>({id:I.id,name:I.name||I.filename||"\u672A\u547D\u540D\u4EA7\u7269",type:"artifacts",description:I.prompt||I.agent,real_path:I.real_path,previewUrl:`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(I.id)}`,tags:[I.type||"artifact"],updatedAt:I.createdAt})))}}let S=[...b,...C];c(S)}catch(x){g(x.message||"\u52A0\u8F7D\u8D44\u4EA7\u5E93\u5931\u8D25")}finally{d(!1)}},[r]);(0,vo.useEffect)(()=>{e&&y()},[e,y]);let w=x=>{l(x),n?.(x)},h=u.filter(x=>{if(!i.trim())return!0;let m=i.toLowerCase();return x.name.toLowerCase().includes(m)||x.description&&x.description.toLowerCase().includes(m)||x.tags&&x.tags.some(b=>b.toLowerCase().includes(m))});return e?(0,de.jsxs)("div",{className:"wf-assets-drawer nodrag nopan",onPointerDown:Ua,onMouseDown:Ua,onClick:x=>x.stopPropagation(),children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__header",children:[(0,de.jsxs)("div",{className:"wf-assets-drawer__title",children:[(0,de.jsx)(Wn,{size:18}),(0,de.jsx)("span",{children:"\u9879\u76EE\u8D44\u4EA7\u5E93"}),(0,de.jsx)("span",{className:"wf-assets-drawer__badge",children:"\u5FEB\u6377\u952E A"})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__actions",children:[(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:y,title:"\u5237\u65B0\u8D44\u4EA7",children:(0,de.jsx)($n,{size:14,className:f?"wf-spin":""})}),(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__icon-btn",onClick:t,title:"\u5173\u95ED (Esc / A)",children:(0,de.jsx)(oa,{size:16})})]})]}),(0,de.jsx)("div",{className:"wf-assets-drawer__categories",children:RN.map(x=>{let m=x.icon,b=r===x.key;return(0,de.jsxs)("button",{type:"button",className:`wf-assets-drawer__cat-btn ${b?"wf-assets-drawer__cat-btn--active":""}`,onClick:()=>w(x.key),children:[(0,de.jsx)(m,{size:13}),(0,de.jsx)("span",{children:x.label})]},x.key)})}),(0,de.jsxs)("div",{className:"wf-assets-drawer__search",children:[(0,de.jsx)(bu,{size:14,className:"wf-assets-drawer__search-icon"}),(0,de.jsx)("input",{type:"text",className:"wf-assets-drawer__search-input",placeholder:"\u641C\u7D22\u8D44\u4EA7\u6216\u6807\u7B7E...",value:i,onChange:x=>s(x.target.value)}),i&&(0,de.jsx)("button",{type:"button",className:"wf-assets-drawer__search-clear",onClick:()=>s(""),children:(0,de.jsx)(oa,{size:12})})]}),(0,de.jsxs)("div",{className:"wf-assets-drawer__body",children:[f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)($n,{size:20,className:"wf-spin"}),(0,de.jsx)("span",{children:"\u52A0\u8F7D\u8D44\u4EA7\u4E2D..."})]}),p&&!f&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty wf-assets-drawer__empty--error",children:[(0,de.jsx)("span",{children:p}),(0,de.jsx)("button",{type:"button",onClick:y,className:"wf-assets-drawer__retry-btn",children:"\u91CD\u8BD5"})]}),!f&&!p&&h.length===0&&(0,de.jsxs)("div",{className:"wf-assets-drawer__empty",children:[(0,de.jsx)(Wn,{size:32,strokeWidth:1.2}),(0,de.jsx)("span",{children:"\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8D44\u4EA7"}),(0,de.jsx)("p",{className:"wf-assets-drawer__empty-hint",children:"\u5728\u8D44\u4EA7\u5E93\u4E00\u7EA7\u9875\u6DFB\u52A0\u89D2\u8272\u3001\u573A\u666F\u6216\u9053\u5177\u540E\u5373\u53EF\u5728\u6B64\u76F4\u63A5\u5F15\u7528"})]}),!f&&!p&&h.length>0&&(0,de.jsx)("div",{className:"wf-assets-drawer__grid",children:h.map(x=>(0,de.jsxs)("div",{className:"wf-assets-card",onClick:()=>a(x),title:`\u70B9\u51FB\u5C06\u300C${x.name}\u300D\u63D2\u5165\u5230\u753B\u5E03`,children:[(0,de.jsxs)("div",{className:"wf-assets-card__preview",children:[x.type==="scene"||x.type==="character"||x.type==="artifacts"?(0,de.jsx)("img",{src:x.previewUrl,alt:x.name,onError:m=>{m.currentTarget.style.display="none"}}):(0,de.jsx)(aa,{size:24,className:"wf-assets-card__file-icon"}),(0,de.jsx)("span",{className:"wf-assets-card__type-tag",children:x.type})]}),(0,de.jsxs)("div",{className:"wf-assets-card__meta",children:[(0,de.jsx)("div",{className:"wf-assets-card__name",children:x.name}),x.description&&(0,de.jsx)("div",{className:"wf-assets-card__desc",children:x.description})]}),(0,de.jsxs)("button",{type:"button",className:"wf-assets-card__insert-btn",onClick:m=>{m.stopPropagation(),a(x)},title:"\u63D2\u5165\u753B\u5E03",children:[(0,de.jsx)(ba,{size:14}),(0,de.jsx)("span",{children:"\u653E\u5165\u753B\u5E03"})]})]},x.id))})]})]}):null},JS=zN;var Ct=B(Z(),1),ON=[{title:"\u6A21\u5F0F\u4E0E\u5DE5\u5177",items:[{keys:["V"],description:"\u5207\u6362\u4E3A\u6307\u9488\u9009\u62E9\u6A21\u5F0F",category:"tools"},{keys:["H"],description:"\u5207\u6362\u4E3A\u6293\u624B\u5E73\u79FB\u6A21\u5F0F",category:"tools"},{keys:["Space + \u62D6\u62FD"],description:"\u4E34\u65F6\u5E73\u79FB\u753B\u5E03",category:"tools"},{keys:["N"],description:"\u6253\u5F00\u65B0\u5EFA\u8282\u70B9\u83DC\u5355",category:"tools"},{keys:["A","Shift + A"],description:"\u6253\u5F00 / \u5207\u6362\u9879\u76EE\u8D44\u4EA7\u5E93\u62BD\u5C49",category:"tools"},{keys:["1 ~ 6"],description:"\u5728\u8D44\u4EA7\u5E93\u4E2D\u5FEB\u901F\u5207\u6362\u5206\u7C7B",category:"tools"},{keys:["M"],description:"\u5C55\u5F00 / \u6536\u8D77\u5C0F\u5730\u56FE\u6D6E\u7A97",category:"tools"},{keys:["?"],description:"\u67E5\u770B\u5FEB\u6377\u952E\u6307\u5357",category:"tools"}]},{title:"\u8282\u70B9\u64CD\u4F5C",items:[{keys:["\u2318","C"],description:"\u590D\u5236\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","V"],description:"\u7C98\u8D34\u8282\u70B9",category:"node"},{keys:["\u2318","D"],description:"\u5FEB\u901F\u5236\u4F5C\u526F\u672C (Duplicate)",category:"node"},{keys:["Delete / Backspace"],description:"\u5220\u9664\u9009\u4E2D\u8282\u70B9",category:"node"},{keys:["\u2318","A"],description:"\u5168\u9009\u6240\u6709\u8282\u70B9",category:"node"},{keys:["Esc"],description:"\u53D6\u6D88\u9009\u62E9 / \u5173\u95ED\u6D6E\u5C42",category:"node"}]},{title:"\u89C6\u56FE\u4E0E\u5E03\u5C40",items:[{keys:["\u2318","1"],description:"\u81EA\u9002\u5E94\u5168\u56FE (Fit View)",category:"view"},{keys:["\u2318","0"],description:"\u91CD\u7F6E\u4E3A 100% \u7F29\u653E",category:"view"},{keys:["\u2318","\\"],description:"\u5207\u6362\u5206\u5C4F\u6A21\u5F0F (\u5BF9\u8BDD+\u753B\u5E03 / \u4EC5\u753B\u5E03)",category:"view"},{keys:["\u2318","Z"],description:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",category:"view"},{keys:["\u21E7","\u2318","Z"],description:"\u91CD\u505A\u64CD\u4F5C",category:"view"}]}],BN=({isOpen:e,onClose:t})=>e?(0,Ct.jsx)("div",{className:"wf-shortcuts-overlay nodrag nopan",onPointerDown:Ua,onMouseDown:Ua,onClick:t,children:(0,Ct.jsxs)("div",{className:"wf-shortcuts-modal",onClick:a=>a.stopPropagation(),children:[(0,Ct.jsxs)("div",{className:"wf-shortcuts-modal__header",children:[(0,Ct.jsxs)("div",{className:"wf-shortcuts-modal__title",children:[(0,Ct.jsx)(su,{size:18}),(0,Ct.jsx)("span",{children:"\u753B\u5E03\u5FEB\u6377\u952E\u6307\u5357"})]}),(0,Ct.jsx)("button",{type:"button",className:"wf-shortcuts-modal__close-btn",onClick:t,title:"\u5173\u95ED (Esc / ?)",children:(0,Ct.jsx)(oa,{size:16})})]}),(0,Ct.jsx)("div",{className:"wf-shortcuts-modal__body",children:ON.map(a=>(0,Ct.jsxs)("div",{className:"wf-shortcuts-group",children:[(0,Ct.jsx)("div",{className:"wf-shortcuts-group__title",children:a.title}),(0,Ct.jsx)("div",{className:"wf-shortcuts-group__list",children:a.items.map((o,n)=>(0,Ct.jsxs)("div",{className:"wf-shortcuts-row",children:[(0,Ct.jsx)("span",{className:"wf-shortcuts-row__desc",children:o.description}),(0,Ct.jsx)("div",{className:"wf-shortcuts-row__keys",children:o.keys.map((r,l)=>(0,Ct.jsx)("kbd",{className:"wf-kbd",children:r},l))})]},n))})]},a.title))})]})}):null,eL=BN;var Fa=B(oe(),1),oL=B(sn(),1);var St=B(Z(),1),tL=278,Yr=12,PN=8,Dh=160,Xr=18,HN={AudioLines:(0,St.jsx)(Pr,{size:Xr}),ImageGen:(0,St.jsx)($o,{size:Xr}),Mic:(0,St.jsx)(Ur,{size:Xr}),PersonStanding:(0,St.jsx)(gu,{size:Xr}),TextGen:(0,St.jsx)(qr,{size:Xr}),VideoGen:(0,St.jsx)(eo,{size:Xr})},UN={TextGen:{color:"#60a5fa",bg:"rgba(59, 130, 246, 0.16)"},ImageGen:{color:"#c084fc",bg:"rgba(168, 85, 247, 0.16)"},VideoGen:{color:"#fb923c",bg:"rgba(249, 115, 22, 0.16)"},AudioLines:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},Mic:{color:"#34d399",bg:"rgba(16, 185, 129, 0.16)"},PersonStanding:{color:"#f43f5e",bg:"rgba(244, 63, 94, 0.16)"}};function aL(e){return e?UN[e]??{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}:{color:"#e4e4e7",bg:"rgba(255, 255, 255, 0.06)"}}function FN(e,t){let a=typeof window>"u"?0:window.innerWidth,o=t==="end"?e-tL:e;return Math.min(Math.max(Yr,o),Math.max(Yr,a-tL-Yr))}var qN=({visible:e,x:t,y:a,title:o,options:n,onSelect:r,onClose:l,align:i="start"})=>{let s=(0,Fa.useRef)(null),[u,c]=(0,Fa.useState)({left:t,top:a,maxHeight:Dh});(0,Fa.useLayoutEffect)(()=>{if(!e)return;let d=typeof window>"u"?Dh:window.innerHeight,p=FN(t,i),g=a+PN,y=Math.max(Yr,d-Yr-Dh),w=Math.min(Math.max(Yr,g),y);c({left:p,top:w,maxHeight:Math.max(0,d-w-Yr)})},[i,e,t,a]),(0,Fa.useEffect)(()=>{if(!e)return;let d=g=>{s.current&&!s.current.contains(g.target)&&l()},p=g=>{g.key==="Escape"&&l()};return document.addEventListener("mousedown",d,!0),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",d,!0),document.removeEventListener("keydown",p)}},[l,e]);let f=(0,Fa.useMemo)(()=>n.map(d=>(0,St.jsx)("button",{type:"button","data-testid":`menu-item-${d.key}`,className:"wf-action-menu__item",onClick:()=>r(d.key),children:(0,St.jsxs)("div",{className:"wf-action-menu__item-inner",children:[d.icon?(0,St.jsx)("span",{className:"wf-action-menu__item-icon",style:{background:aL(d.icon).bg,color:aL(d.icon).color},children:HN[d.icon]??(0,St.jsx)(ya,{size:Xr})}):null,(0,St.jsxs)("div",{className:"wf-action-menu__item-text",children:[(0,St.jsx)("span",{className:"wf-action-menu__item-label",children:d.label}),d.description?(0,St.jsx)("span",{className:"wf-action-menu__item-desc",children:d.description}):null]})]})},d.key)),[r,n]);return!e||n.length===0?null:(0,oL.createPortal)((0,St.jsxs)("div",{ref:s,"data-testid":"canvas-node-action-menu",className:"wf-action-menu",style:{position:"fixed",left:u.left,top:u.top,maxHeight:u.maxHeight},children:[(0,St.jsx)("div",{className:"wf-action-menu__title",children:o}),(0,St.jsx)("div",{className:"wf-action-menu__list",children:f})]}),document.body)},Ef=(0,Fa.memo)(qN);var qa=B(oe(),1),nL=B(sn(),1);var Re=B(Z(),1),VN=210,GN=230,XN=260,YN=({x:e,y:t,visible:a,context:o,onClose:n,onAction:r,onAddNode:l,canUndo:i=!1,canRedo:s=!1,hasClipboard:u=!1,hasSelection:c=!1})=>{let f=(0,qa.useRef)(null),[d,p]=(0,qa.useState)("main"),g=_e();(0,qa.useEffect)(()=>{a&&p("main")},[a]),(0,qa.useEffect)(()=>{if(!a)return;let b=S=>{f.current&&!f.current.contains(S.target)&&n()},C=S=>{S.key==="Escape"&&n()};return document.addEventListener("mousedown",b),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",C)}},[a,n]);let y=(0,qa.useMemo)(()=>o.type==="node"?[{action:"execute-node",label:g("panel.runHint")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C"},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D"},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:o.type==="selection"?[{action:"execute-selection",label:g("menu.executeSelection")},{action:"copy",label:g("menu.copy"),shortcut:"\u2318C",disabled:!c},{action:"duplicate",label:g("menu.duplicate"),shortcut:"\u2318D",disabled:!c},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"delete",label:g("menu.delete"),shortcut:"Del"}]:[{action:"open-add-node",label:g("menu.addNode"),icon:(0,Re.jsx)(ba,{size:15})},{action:"undo",label:g("toolbar.undo"),shortcut:"\u2318Z",disabled:!i},{action:"redo",label:g("toolbar.redo"),shortcut:"\u21E7\u2318Z",disabled:!s},{action:"paste",label:g("menu.paste"),shortcut:"\u2318V",disabled:!u},{action:"select-all",label:g("menu.selectAll"),shortcut:"\u2318A"}],[o,i,s,u,c,g]),w=(0,qa.useMemo)(()=>[{key:"text",type:"text",label:g("node.type.text"),icon:(0,Re.jsx)(qr,{size:18})},{key:"image",type:"image",label:g("node.type.image"),icon:(0,Re.jsx)($a,{size:18})},{key:"video",type:"video",label:g("node.type.video"),icon:(0,Re.jsx)(eo,{size:18}),badge:{text:"MiniMax H3",variant:"primary"}},{key:"audio",type:"audio",label:g("node.type.audio"),icon:(0,Re.jsx)(Pr,{size:18})},{key:"table",type:"table",label:g("node.type.table"),icon:(0,Re.jsx)(Fr,{size:18}),badge:{text:"HTable",variant:"primary"}}],[g]);if(!a)return null;let h=d==="add-node"?GN:VN,x=Math.min(e,window.innerWidth-h-8),m=Math.min(t,window.innerHeight-XN-8);return(0,nL.createPortal)((0,Re.jsx)("div",{ref:f,className:`wf-context-menu ${d==="add-node"?"wf-add-node-menu":""}`,style:{left:x,top:m},onContextMenu:b=>b.preventDefault(),children:d==="main"?y.map(b=>(0,Re.jsxs)(qa.default.Fragment,{children:[o.type==="pane"&&b.action==="undo"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,o.type!=="pane"&&b.action==="paste"?(0,Re.jsx)("div",{className:"wf-context-menu__separator"}):null,(0,Re.jsxs)("button",{type:"button",className:`wf-context-menu__item${b.disabled?" wf-context-menu__item--disabled":""}`,disabled:b.disabled,onClick:C=>{C.stopPropagation(),b.action==="open-add-node"?p("add-node"):r(b.action,o)},children:[b.icon?(0,Re.jsx)("span",{style:{display:"inline-flex",alignItems:"center",marginRight:6,opacity:.85},children:b.icon}):null,(0,Re.jsx)("span",{className:"wf-context-menu__label",children:b.label}),b.action==="open-add-node"?(0,Re.jsx)(ui,{size:14,className:"wf-add-node-menu__arrow"}):b.shortcut?(0,Re.jsx)("span",{className:"wf-context-menu__shortcut",children:b.shortcut}):null]})]},b.action)):(0,Re.jsxs)("div",{className:"wf-add-node-menu__container",children:[(0,Re.jsxs)("div",{className:"wf-add-node-menu__header",children:[(0,Re.jsx)("button",{type:"button",className:"wf-add-node-menu__back-btn",onClick:b=>{b.stopPropagation(),p("main")},title:g("menu.back"),children:(0,Re.jsx)(tu,{size:16})}),(0,Re.jsx)("span",{className:"wf-add-node-menu__title",children:g("menu.addNode")})]}),(0,Re.jsx)("div",{className:"wf-add-node-menu__list",children:w.map(b=>(0,Re.jsxs)("button",{type:"button",className:"wf-add-node-menu__item",onClick:C=>{C.stopPropagation(),l?.(b.type),n()},children:[(0,Re.jsx)("div",{className:"wf-add-node-menu__icon-box",children:b.icon}),(0,Re.jsx)("span",{className:"wf-add-node-menu__label",children:b.label}),b.badge?(0,Re.jsx)("span",{className:`wf-add-node-menu__badge wf-add-node-menu__badge--${b.badge.variant}`,children:b.badge.text}):null,b.hasSubmenu?(0,Re.jsx)(ui,{size:14,className:"wf-add-node-menu__arrow"}):null]},b.key))})]})}),document.body)},rL=YN;var lL=B(oe(),1),iL=({onCopy:e,onPaste:t,onSelectAll:a,onDeleteSelected:o,onClearSelection:n,onDuplicate:r,hasSelection:l=!1,onUndo:i,onRedo:s,onToggleAssets:u,onToggleShortcuts:c,onToggleMinimap:f,onToggleAddMenu:d,onSetPointerMode:p,onFitView:g,onResetZoom:y,onCategoryKey:w,isAssetsOpen:h=!1,enabled:x=!0})=>{(0,lL.useEffect)(()=>{if(!x)return;let m=b=>{let C=b.target;if(["INPUT","TEXTAREA"].includes(C.tagName)||C.isContentEditable)return;let S=b.metaKey||b.ctrlKey,v=b.key.toLowerCase();if(!S&&h&&/^[1-6]$/.test(b.key)){b.preventDefault(),w?.(parseInt(b.key,10));return}if(!S&&v==="a"){b.preventDefault(),u?.();return}if(!S&&v==="v"){b.preventDefault(),p?.("select");return}if(!S&&v==="h"){b.preventDefault(),p?.("pan");return}if(!S&&v==="n"){b.preventDefault(),d?.();return}if(!S&&v==="m"){b.preventDefault(),f?.();return}if(b.key==="?"||b.shiftKey&&b.key==="/"){b.preventDefault(),c?.();return}if(S&&b.key==="1"){b.preventDefault(),g?.();return}if(S&&b.key==="0"){b.preventDefault(),y?.();return}if((b.key==="Delete"||b.key==="Backspace")&&l&&!S){b.preventDefault(),o?.();return}if(b.key==="Escape"){b.preventDefault(),h?u?.():l&&n?.();return}if(S&&v==="d"&&l){b.preventDefault(),r?.();return}if(S&&v==="c"&&!b.shiftKey){b.preventDefault(),e?.();return}if(S&&v==="v"){b.preventDefault(),t?.();return}if(S&&v==="a"){b.preventDefault(),a?.();return}if(S&&v==="z"&&!b.shiftKey){b.preventDefault(),i?.();return}S&&v==="z"&&b.shiftKey&&(b.preventDefault(),s?.())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[x,e,t,a,o,n,r,l,i,s,u,c,f,d,p,g,y,w,h])};var ao=B(oe(),1);function Tf(e){switch(e){case"self_connection":return"edge.reject.selfConnection";case"duplicate_edge":return"edge.reject.duplicateEdge";case"missing_node":return"edge.reject.missingNode";case"cycle":return"edge.reject.cycle";case"type_contract":return"edge.reject.typeContract";default:return"edge.reject.invalid"}}function sL(e,t,a){return Rh(e,t,a).valid}function Rh(e,t,a){let o=yf(e,t,a);return o.valid?{valid:!0}:{valid:!1,blockedBy:o.reasonCode==="type_contract"?"type-contract":"structure",reasonCode:o.reasonCode}}var zh={minZoom:.23,maxZoom:1.29,defaultZoom:1},ZN={min:{width:200,height:286},default:{width:350,height:500},max:{width:450,height:643},aspectRatio:350/500},uL={min:{width:100,height:100},default:{width:350,height:350},max:{width:450,height:450},aspectRatio:1},WN={min:{width:150,height:120},default:{width:350,height:280},max:{width:500,height:400},aspectRatio:350/280},jN={min:{width:200,height:86},default:{width:350,height:150},max:{width:450,height:193},aspectRatio:350/150},dL={portrait:ZN,square:uL,video_landscape:WN,audio_compact:jN};function Oh(e){switch(e){case"text":return"portrait";case"image":return"square";case"video":return"video_landscape";case"audio":return"audio_compact";default:return"square"}}function KN(e){return dL[Oh(e)]}function cL(e,t){let a=dL[t]||uL;return Math.round(e/a.aspectRatio)}function hi(e){return KN(e).default.width}function fL(e,t,a){let o=bf(e,{status:"empty",nodeWidth:hi(e),...a});return{id:globalThis.crypto.randomUUID(),type:"material",position:t,data:o}}function Zr(e,t,a){return{nodes:[fL(e,t,a)],edges:[]}}function Bh(e,t){return[...e.map(o=>({...o,selected:!1})),...t]}function QN(e,t){return`${e}-${t}`}function Af(e){let t=e.indexOf("-");return t<=0||t===e.length-1?null:{targetMaterialType:e.slice(0,t),targetTool:e.slice(t+1)}}function Nf(e){return AS(e).map(t=>{let a=String(t.targetTool);return{key:QN(t.targetMaterialType,a),labelKey:`menu.option.${e}.${t.targetMaterialType}-${a}`,descKey:`menu.option.${e}.${t.targetMaterialType}-${a}.desc`,icon:t.icon,targetMaterialType:t.targetMaterialType,targetTool:a}})}function pL(e){return e.isValid?{type:"connected"}:e.fromNodeId?e.toNodeId?e.rejectReason?{type:"reject",reason:e.rejectReason}:{type:"noop"}:e.startedFromSource&&e.hasOptions?{type:"menu"}:{type:"noop"}:{type:"noop"}}var $N={visible:!1,x:0,y:0,options:[]};function mL(e){let t=_e(),{screenToFlowPosition:a}=xa(),o=be(p=>p.applyCanvasInputMutation),n=(0,ao.useRef)(e?.onReject);n.current=e?.onReject;let[r,l]=(0,ao.useState)($N),i=(0,ao.useRef)(null),s=(0,ao.useRef)(null),u=(0,ao.useCallback)((p,g)=>{if(!g.nodeId||g.handleType!=="source"){i.current=null;return}let y=be.getState().nodes.find(h=>h.id===g.nodeId),w=y?.data?.materialType;if(!y||!w){i.current=null;return}i.current={nodeId:g.nodeId,materialType:w}},[]),c=(0,ao.useCallback)((p,g)=>{let y=g.fromNode?.id??null,w=g.toNode?.id??null,h=i.current,x=h?Nf(h.materialType):[],m=null;if(!g.isValid&&y&&w){let C=be.getState(),S=Rh({source:y,target:w,sourceHandle:null,targetHandle:null},C.nodes,C.edges);m=S.valid?null:t(Tf(S.reasonCode))}let b=pL({isValid:g.isValid??null,fromNodeId:y,toNodeId:w,startedFromSource:!!h,hasOptions:x.length>0,rejectReason:m});if(b.type==="reject"){n.current?.(b.reason),fi.warning(b.reason),i.current=null;return}if(b.type==="menu"&&h){let C="changedTouches"in p?p.changedTouches[0]:p;if(!C){i.current=null;return}let{clientX:S,clientY:v}=C;s.current=a({x:S,y:v}),l({visible:!0,x:S,y:v,options:x.map(_=>({key:_.key,label:t(_.labelKey),description:t(_.descKey),icon:_.icon}))});return}i.current=null},[a,t]),f=(0,ao.useCallback)(p=>{let g=i.current,y=s.current,w=Af(p);if(g&&y&&w){let h=Zr(w.targetMaterialType,y),x=h.nodes[0];x&&o({addNodes:h.nodes,addEdges:[{source:g.nodeId,sourceHandle:"out",target:x.id,targetHandle:"in"}]})}l(h=>({...h,visible:!1})),i.current=null,s.current=null},[o]),d=(0,ao.useCallback)(()=>{l(p=>({...p,visible:!1})),i.current=null,s.current=null},[]);return{menuState:r,onConnectStart:u,onConnectEnd:c,onMenuSelect:f,onMenuClose:d}}var Co=B(oe(),1);var Nt=[];for(let e=0;e<256;++e)Nt.push((e+256).toString(16).slice(1));function gL(e,t=0){return(Nt[e[t+0]]+Nt[e[t+1]]+Nt[e[t+2]]+Nt[e[t+3]]+"-"+Nt[e[t+4]]+Nt[e[t+5]]+"-"+Nt[e[t+6]]+Nt[e[t+7]]+"-"+Nt[e[t+8]]+Nt[e[t+9]]+"-"+Nt[e[t+10]]+Nt[e[t+11]]+Nt[e[t+12]]+Nt[e[t+13]]+Nt[e[t+14]]+Nt[e[t+15]]).toLowerCase()}var Ph,JN=new Uint8Array(16);function Hh(){if(!Ph){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ph=crypto.getRandomValues.bind(crypto)}return Ph(JN)}var e8=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Uh={randomUUID:e8};function t8(e,t,a){e=e||{};let o=e.random??e.rng?.()??Hh();if(o.length<16)throw new Error("Random bytes length must be >= 16");if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let n=0;n<16;++n)t[a+n]=o[n];return t}return gL(o)}function a8(e,t,a){return Uh.randomUUID&&!t&&!e?Uh.randomUUID():t8(e,t,a)}var Df=a8;function hL(e,t){let a=e.filter(r=>r.selected);if(a.length===0)return{nodes:[],edges:[]};let o=new Set(a.map(r=>r.id)),n=t.filter(r=>o.has(r.source)&&o.has(r.target));return{nodes:a,edges:n}}function o8(e){let t=Math.min(...e.map(r=>r.position.x)),a=Math.min(...e.map(r=>r.position.y)),o=Math.max(...e.map(r=>r.position.x)),n=Math.max(...e.map(r=>r.position.y));return{x:(t+o)/2,y:(a+n)/2}}function xL(e,t,a){let{nodes:o,edges:n}=e;if(o.length===0)return null;let r=o8(o),l,i;if(t)l=t.x,i=t.y;else{let f=a?50:30;l=r.x+f,i=r.y+f}let s=new Map,u=o.map(f=>{let d=Df();return s.set(f.id,d),{...f,id:d,position:{x:l+(f.position.x-r.x),y:i+(f.position.y-r.y)},selected:!0}}),c=n.map(f=>({...f,id:Df(),source:s.get(f.source)||f.source,target:s.get(f.target)||f.target,selected:!1}));return{nodes:u,edges:c,newPastePosition:{x:l,y:i}}}function bL(e,t){let a=(0,Co.useRef)({nodes:[],edges:[]}),o=(0,Co.useRef)(null),n=a.current.nodes.length>0,r=(0,Co.useCallback)(()=>{let f=be.getState(),d=hL(f.nodes,f.edges);d.nodes.length>0&&(a.current=d,o.current=null)},[]),l=(0,Co.useCallback)(f=>{let d=xL(a.current,f,o.current);if(!d)return;o.current=d.newPastePosition;let p=be.getState();p.applyCanvasInputMutation({addNodes:d.nodes,addEdges:d.edges,nodePatches:p.nodes.map(g=>({nodeId:g.id,data:{},node:{selected:!1}}))})},[]),i=(0,Co.useCallback)(()=>{r(),l()},[r,l]),s=(0,Co.useCallback)(()=>{let f=be.getState(),d=f.nodes.filter(p=>p.selected).map(p=>p.id);d.length!==0&&f.applyCanvasInputMutation({removeNodeIds:d})},[]),u=(0,Co.useCallback)(()=>{e(f=>f.map(d=>({...d,selected:!0})))},[e]),c=(0,Co.useCallback)(()=>{e(f=>f.map(d=>({...d,selected:!1}))),t("none",null)},[e,t]);return{clipboardRef:a,hasClipboard:n,copySelectedNodes:r,pasteNodes:l,duplicateSelectedNodes:i,deleteSelectedNodes:s,selectAllNodes:u,clearSelection:c}}var So=B(oe(),1);function yL(e){let{screenToFlowPosition:t,setNodes:a,copySelectedNodes:o,pasteNodes:n,duplicateSelectedNodes:r,deleteSelectedNodes:l,selectAllNodes:i,clearSelection:s,undo:u,redo:c,onExecuteNodeIds:f,onAddNode:d}=e,[p,g]=(0,So.useState)({x:0,y:0,visible:!1,context:{type:"pane"}}),y=(0,So.useCallback)((S,v)=>{S.preventDefault();let _={type:"pane"};v?_={type:"node",nodeId:v.id}:be.getState().nodes.filter(A=>A.selected).length>1&&(_={type:"selection"}),g({visible:!0,x:S.clientX,y:S.clientY,context:_})},[]),w=(0,So.useCallback)((S,v)=>{y(S,v)},[y]),h=(0,So.useCallback)(S=>{y(S)},[y]),x=(0,So.useCallback)(S=>{y(S)},[y]),m=(0,So.useCallback)(()=>{g(S=>({...S,visible:!1}))},[]),b=(0,So.useCallback)((S,v)=>{let _=t({x:p.x,y:p.y});switch(S){case"copy":{if(v.type==="node"){let A=be.getState().nodes.find(T=>T.id===v.nodeId);A&&!A.selected&&(s(),a(T=>T.map(P=>P.id===v.nodeId?{...P,selected:!0}:P)))}o();break}case"paste":n(_);break;case"duplicate":r();break;case"delete":{if(v.type==="node"){let I=be.getState();I.nodes.find(T=>T.id===v.nodeId)?.selected?l():I.applyCanvasInputMutation({removeNodeIds:[v.nodeId]})}else l();break}case"undo":u();break;case"redo":c();break;case"select-all":i();break;case"execute-selection":{let I=be.getState().nodes.filter(A=>A.selected).map(A=>A.id);I.length>0&&f?.(I);break}case"execute-node":{v.type==="node"&&f?.([v.nodeId]);break}}m()},[p.x,p.y,t,s,a,o,n,r,l,u,c,i,m,f]),C=(0,So.useCallback)(S=>{let v=t({x:p.x,y:p.y});d?.(S,v),m()},[p.x,p.y,t,d,m]);return{menu:p,handleNodeContextMenu:w,handlePaneContextMenu:h,handleSelectionContextMenu:x,closeMenu:m,handleMenuAction:b,handleAddNodeFromMenu:C}}var n8=B(oe(),1),wL=new Map;function Fh(e){wL.set(e.type,e)}function vL(){let e={};for(let[t,a]of wL)e[t]=a.component;return e}var $e=B(oe(),1);var qe=B(oe(),1);function CL(e,t,a){let n=e==="left"?Math.max(-14,Math.min(4,t)):Math.max(-4,Math.min(14,t)),r=Math.max(-14,Math.min(14,a));return{x:n,y:r}}var oo=B(Z(),1),r8=4,l8=({side:e,nodeHovered:t,variant:a="plus",options:o,onSelect:n})=>{let r=_e(),[l,i]=(0,qe.useState)(!1),[s,u]=(0,qe.useState)(!1),[c,f]=(0,qe.useState)(null),d=(0,qe.useRef)(null),p=(0,qe.useRef)(null),g=(0,qe.useRef)({pointerId:null,startX:0,startY:0,dragIntent:!1,suppressClick:!1}),y=e==="left",w=a==="plus"&&!!o&&o.length>0,h=Ch(k=>k.inProgress),{screenToFlowPosition:x}=xa(),m=(0,qe.useCallback)(()=>{p.current&&(p.current.style.setProperty("--wf-handle-offset-x","0px"),p.current.style.setProperty("--wf-handle-offset-y","0px"))},[]);(0,qe.useEffect)(()=>{if(a!=="plus"){m();return}let k=d.current,N=p.current;if(!k||!N)return;let R=D=>{if(s)return;let q=k.getBoundingClientRect(),U=q.left+q.width/2,W=q.top+q.height/2,{x:Y,y:j}=CL(e,D.clientX-U,D.clientY-W);N.style.setProperty("--wf-handle-offset-x",`${Y}px`),N.style.setProperty("--wf-handle-offset-y",`${j}px`)};return k.addEventListener("pointermove",R),()=>{k.removeEventListener("pointermove",R)}},[s,m,e,a]),(0,qe.useEffect)(()=>{if(!s){m(),f(null);return}let k=()=>{let N=d.current;if(!N)return;let R=N.getBoundingClientRect();f({x:y?R.right:R.left,y:R.bottom})};return k(),window.addEventListener("resize",k),window.addEventListener("scroll",k,!0),()=>{window.removeEventListener("resize",k),window.removeEventListener("scroll",k,!0)}},[s,y,m]);let b=(0,qe.useCallback)(()=>{i(!0)},[]),C=(0,qe.useCallback)(()=>{i(!1),m()},[m]),S=(0,qe.useCallback)(k=>{let N=d.current;!N||k===null||typeof N.hasPointerCapture!="function"||typeof N.releasePointerCapture!="function"||!N.hasPointerCapture(k)||N.releasePointerCapture(k)},[]),v=(0,qe.useCallback)(()=>{S(g.current.pointerId),g.current.pointerId=null,g.current.startX=0,g.current.startY=0,g.current.dragIntent=!1},[S]),_=(0,qe.useCallback)(k=>{k.button===0&&(typeof k.currentTarget.setPointerCapture=="function"&&k.currentTarget.setPointerCapture(k.pointerId),g.current.pointerId=k.pointerId,g.current.startX=k.clientX,g.current.startY=k.clientY,g.current.dragIntent=!1,g.current.suppressClick=!1)},[]),I=(0,qe.useCallback)(k=>{if(g.current.pointerId!==k.pointerId)return;Math.hypot(k.clientX-g.current.startX,k.clientY-g.current.startY)>=r8&&(g.current.dragIntent=!0,g.current.suppressClick=!0,s&&u(!1))},[s]),A=(0,qe.useCallback)(k=>{g.current.pointerId===k.pointerId&&(g.current.dragIntent||(g.current.suppressClick=!1),v())},[v]),T=(0,qe.useCallback)(k=>{g.current.pointerId===k.pointerId&&(g.current.suppressClick=!1,v())},[v]),P=(0,qe.useCallback)(k=>{if(k.stopPropagation(),g.current.suppressClick){g.current.suppressClick=!1;return}w&&u(N=>!N)},[w]),H=(0,qe.useCallback)(()=>{let k=c;if(!k){let N=d.current;if(!N)return;let R=N.getBoundingClientRect();k={x:y?R.right:R.left,y:R.bottom}}return{screenPosition:k,flowPosition:x(k)}},[y,c,x]),L=(0,qe.useCallback)(k=>{n?.(k,H()),u(!1)},[n,H]),M=["wf-handle",`wf-handle--${a}`,`wf-handle--${e}`,t?"wf-handle--node-hovered":"",l?"wf-handle--surface-hovered":"",s?"wf-handle--open":"",h?"wf-handle--connection-active":""].filter(Boolean).join(" "),E={width:1,height:1,minWidth:1,minHeight:1,background:"transparent",border:"none"};return(0,oo.jsxs)(Gn,{id:y?"in":"out",type:y?"target":"source",position:y?ee.Left:ee.Right,isConnectable:!0,className:M,style:E,children:[(0,oo.jsx)("div",{className:`wf-handle__anchor-layer wf-handle__anchor-layer--${e}`,"aria-hidden":"true",children:(0,oo.jsx)("div",{className:"wf-handle__anchor","data-visible":"false",children:(0,oo.jsx)("span",{className:"wf-handle__dot"})})}),a==="plus"?(0,oo.jsx)("div",{ref:d,className:`wf-handle__plus-hit-area wf-handle__plus-hit-area--${e}`,onPointerEnter:b,onPointerLeave:C,onPointerDown:_,onPointerMove:I,onPointerUp:A,onPointerCancel:T,onClick:P,children:(0,oo.jsx)("div",{ref:p,className:"wf-handle__plus",children:(0,oo.jsx)("div",{className:"wf-handle__plus-button",children:(0,oo.jsx)(ba,{size:24,strokeWidth:2.5})})})}):null,w&&c?(0,oo.jsx)(Ef,{visible:s,x:c.x,y:c.y,align:y?"end":"start",title:r("menu.generateFromNode"),options:o,onSelect:L,onClose:()=>u(!1)}):null]})},qh=(0,qe.memo)(l8);var no=B(oe(),1);var Dt=B(Z(),1);function i8(e){let t=_e();if(!e)return;let a=e.toLowerCase();return a.includes("content_policy_violation")||a.includes("inappropriate content")||a.includes("suggestive or explicit material")?t("error.contentPolicyViolation"):a.includes("[image-routing] all channels failed")||a.includes("all channels failed")?t("error.generationProviderFailed"):e}var s8=({status:e,loadingAspectRatio:t="square",errorMessage:a,taskId:o,onRetry:n,children:r,className:l="",transitionDuration:i=400})=>{let s=_e(),u=(0,no.useRef)(e),[c,f]=(0,no.useState)(e==="completed"?"complete":"idle"),[d,p]=(0,no.useState)(1),[g,y]=(0,no.useState)(e==="completed"?1:0),[w,h]=(0,no.useState)(e==="pending"||e==="generating");(0,no.useEffect)(()=>{let P=u.current;if(u.current=e,(P==="pending"||P==="generating")&&e==="completed"){f("crossfading"),h(!0),requestAnimationFrame(()=>{p(0),y(1)});let H=setTimeout(()=>{f("complete"),h(!1)},i+50);return()=>clearTimeout(H)}P==="completed"&&(e==="pending"||e==="generating")&&(f("idle"),h(!0),p(1),y(0)),(e==="pending"||e==="generating")&&(h(!0),p(1),y(0),f("idle")),e==="failed"&&(h(!1),f("idle")),P===e&&e==="completed"&&(f("complete"),y(1),h(!1))},[e,i]);let x=e==="pending"||e==="generating",m=e==="failed",b=e==="completed",C=s(e==="pending"?"node.preparing":"node.generating"),S=i8(a),v=(0,no.useCallback)(()=>({transition:`opacity ${i}ms ease-out`}),[i]),_=`wf-gsc__box--${t}`,I=()=>(0,Dt.jsx)("div",{className:"wf-gsc__skeleton",style:{...v(),opacity:d},children:(0,Dt.jsxs)("div",{className:`wf-gsc__box wf-gsc__skeleton-card ${_}`,children:[(0,Dt.jsx)("div",{className:"wf-gsc__loading-overlay"}),(0,Dt.jsx)("div",{className:"wf-gsc__skeleton-body",children:(0,Dt.jsx)("span",{className:"wf-gsc__progress-text",children:C})})]})}),A=()=>(0,Dt.jsxs)("div",{className:`wf-gsc__box wf-gsc__failed ${_} ${l}`,children:[(0,Dt.jsx)("div",{className:"wf-gsc__failed-icon",children:(0,Dt.jsx)(oa,{size:24})}),(0,Dt.jsx)("span",{className:"wf-gsc__failed-label",children:s("node.generationFailed")}),S?(0,Dt.jsx)("span",{className:"wf-gsc__failed-message",children:S}):null,o?(0,Dt.jsxs)("span",{className:"wf-gsc__failed-task",children:[s("node.taskIdLabel")," ",o.slice(0,8),"..."]}):null,n?(0,Dt.jsxs)("button",{type:"button",onClick:n,className:"wf-gsc__retry",children:[(0,Dt.jsx)($n,{size:14}),s("node.regenerate")]}):null]}),T=P=>(0,Dt.jsx)("div",{className:`${l} ${P?"wf-gsc__content--blur":""}`,style:{...v(),opacity:g},children:r});return(0,Dt.jsxs)("div",{className:`wf-gsc ${x?_:""} ${l}`,children:[(x||w)&&I(),m&&A(),(b||c==="crossfading")&&T(c==="crossfading")]})},SL=s8;var Lt=B(oe(),1);function xi(e){return e>0?1/e:1}function LL(e,t,a){return!!e&&!t&&a!=="running"}function _L(e,t,a){switch(e){case"running":return"generating";case"error":return"failed";case"completed":return"completed";default:break}switch(t){case"generating":return"generating";case"failed":return"failed";case"completed":return"completed";default:break}return a?"completed":null}var Wr=B(Z(),1),IL=24,kL=30,u8={text:aa,image:$o,video:eo,audio:Pa},d8=({label:e,materialType:t,onLabelChange:a,trailing:o})=>{let n=_e(),r=n(`node.type.${t}`),l=e||r,i=u8[t],{zoom:s}=ii(),[u,c]=(0,Lt.useState)(!1),[f,d]=(0,Lt.useState)(l),p=(0,Lt.useRef)(null),g=(0,Lt.useMemo)(()=>xi(s),[s]);(0,Lt.useEffect)(()=>{u&&p.current&&(p.current.focus(),p.current.select())},[u]),(0,Lt.useEffect)(()=>{u||d(l)},[l,u]);let y=(0,Lt.useCallback)(C=>{C.stopPropagation(),c(!0),d(l)},[l]),w=(0,Lt.useCallback)(()=>{let S=f.trim()||r;c(!1),S!==e&&a&&a(S)},[f,r,e,a]),h=(0,Lt.useCallback)(()=>{c(!1),d(l)},[l]),x=(0,Lt.useCallback)(C=>{C.key==="Enter"?(C.preventDefault(),w()):C.key==="Escape"&&(C.preventDefault(),h())},[w,h]),m=(0,Lt.useCallback)(C=>{let S=C.target.value;S.length<=kL&&d(S)},[]);return(0,Wr.jsxs)("div",{className:"wf-node-header",style:{top:-(IL+4*g),height:IL,transform:`scale(${g})`,transformOrigin:"bottom left",pointerEvents:"auto"},children:[(0,Wr.jsx)("span",{className:"wf-node-header__icon",children:(0,Wr.jsx)(i,{size:14})}),u?(0,Wr.jsx)("input",{ref:p,type:"text",value:f,onChange:m,onBlur:w,onKeyDown:x,className:"wf-node-header__input nodrag",style:{width:`${Math.max(60,f.length*8+10)}px`},maxLength:kL}):(0,Wr.jsx)("span",{onDoubleClick:y,className:"wf-node-header__label",title:l.length>20?l:n("node.renameHint"),children:l}),o]})},ML=(0,Lt.memo)(d8);var Rf=B(oe(),1);var en=B(Z(),1),c8=({executionStatus:e,status:t})=>{let a=_e();return(0,Rf.useMemo)(()=>{switch(e){case"running":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"error":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});case"skipped":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--skipped",title:a("node.skipped")});case"pending":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--pending"});default:break}switch(t){case"generating":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin"});case"completed":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--done"});case"failed":return(0,en.jsx)("span",{className:"wf-material-node__badge wf-material-node__badge--failed"});default:return null}},[e,t,a])},EL=(0,Rf.memo)(c8);var jr=B(oe(),1);function bi(e,t,a){let o=t?.find(r=>r?.type===e&&r.url);if(o?.url)return o.url;let n=t?.find(r=>r?.url);return n?.url?n.url:a}var Au=B(Z(),1);var f8=({materialType:e,mediaAssets:t,mediaUrl:a,label:o,onMediaSizeChange:n})=>{let r=(0,jr.useMemo)(()=>bi(e,t,a),[e,t,a]),l=(0,jr.useCallback)(s=>{let u=s.currentTarget;u.naturalWidth>0&&u.naturalHeight>0&&n?.(u.naturalWidth,u.naturalHeight)},[n]),i=(0,jr.useCallback)(s=>{let u=s.currentTarget;u.videoWidth>0&&u.videoHeight>0&&n?.(u.videoWidth,u.videoHeight)},[n]);if(!r)return null;switch(e){case"image":return(0,Au.jsx)("img",{src:r,alt:o??"",className:"wf-media-preview__media wf-media-preview__media--image",onLoad:l});case"video":return(0,Au.jsx)("video",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__media wf-media-preview__media--video",onLoadedMetadata:i});case"audio":return(0,Au.jsx)("div",{className:"wf-media-preview__audio",children:(0,Au.jsx)("audio",{src:r,controls:!0,preload:"metadata",className:"wf-media-preview__audio-el"})});default:return null}},TL=(0,jr.memo)(f8);var AL=B(oe(),1);var ze=B(Z(),1),p8=({materialType:e,onApplyPreset:t,onStartEdit:a})=>{let o=_e();return e==="text"?(0,ze.jsxs)("div",{className:"wf-node-empty wf-node-empty--text",children:[(0,ze.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ze.jsx)(aa,{size:32,strokeWidth:1.75,className:"wf-node-empty__icon"})}),(0,ze.jsx)("div",{className:"wf-node-empty__try-label",children:o("pills.tryLabel")}),(0,ze.jsxs)("div",{className:"wf-node-empty__actions nodrag",onMouseDown:n=>n.stopPropagation(),children:[(0,ze.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:a,children:[(0,ze.jsx)(Qn,{size:14,className:"wf-node-empty__pill-icon"}),(0,ze.jsx)("span",{children:o("pills.writePrompt")})]}),(0,ze.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("script"),children:[(0,ze.jsx)(ou,{size:14,className:"wf-node-empty__pill-icon"}),(0,ze.jsx)("span",{children:o("pills.scriptGen")})]}),(0,ze.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("planning"),children:[(0,ze.jsx)(xo,{size:14,className:"wf-node-empty__pill-icon"}),(0,ze.jsx)("span",{children:o("pills.planningGen")})]}),(0,ze.jsxs)("button",{type:"button",className:"wf-node-empty__pill-btn",onClick:()=>t?.("prompt"),children:[(0,ze.jsx)(ya,{size:14,className:"wf-node-empty__pill-icon"}),(0,ze.jsx)("span",{children:o("pills.promptExpand")})]})]})]}):e==="image"?(0,ze.jsx)("div",{className:"wf-node-empty wf-node-empty--image",children:(0,ze.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ze.jsx)($a,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="video"?(0,ze.jsx)("div",{className:"wf-node-empty wf-node-empty--video",children:(0,ze.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ze.jsx)(Ja,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):e==="audio"?(0,ze.jsx)("div",{className:"wf-node-empty wf-node-empty--audio",children:(0,ze.jsx)("div",{className:"wf-node-empty__icon-box",children:(0,ze.jsx)(Pa,{size:44,strokeWidth:1.5,className:"wf-node-empty__icon"})})}):null},zf=(0,AL.memo)(p8);var wa=B(oe(),1);var gt=B(Z(),1),m8=({materialType:e,selected:t,onImportFile:a,onStartTextEdit:o,onCopyText:n,onSplitText:r})=>{let l=_e(),{zoom:i}=ii(),s=(0,wa.useRef)(null),[u,c]=wa.default.useState(!1),f=(0,wa.useMemo)(()=>xi(i),[i]),d=(0,wa.useCallback)(h=>{let x=h.target.files?.[0];x&&a&&a(x),h.target.value=""},[a]),p=(0,wa.useCallback)(()=>{n&&(n(),c(!0),setTimeout(()=>c(!1),1500))},[n]),g=(0,wa.useMemo)(()=>{switch(e){case"image":return"image/*";case"video":return"video/*";case"audio":return"audio/*";default:return"*/*"}},[e]),y=(0,wa.useMemo)(()=>{switch(e){case"image":return l("pill.importImage");case"video":return l("pill.importVideo");case"audio":return l("pill.importAudio");default:return l("pill.import")}},[e,l]);return(0,gt.jsx)("div",{className:"wf-floating-top-pill nodrag nowheel",style:{top:-(30*f),transform:`translate(-50%, -100%) scale(${f})`,transformOrigin:"bottom center"},onClick:h=>h.stopPropagation(),children:e==="text"?(0,gt.jsxs)("div",{className:"wf-floating-top-pill__group",children:[(0,gt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:o,title:l("pill.textEdit"),children:[(0,gt.jsx)(xo,{size:13,className:"wf-floating-top-pill__icon"}),(0,gt.jsx)("span",{children:l("pill.textEdit")})]}),(0,gt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,gt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:p,title:l("pill.copy"),children:u?(0,gt.jsx)(Hr,{size:13,className:"wf-floating-top-pill__icon wf-floating-top-pill__icon--success"}):(0,gt.jsx)(nu,{size:13,className:"wf-floating-top-pill__icon"})}),(0,gt.jsx)("span",{className:"wf-floating-top-pill__divider"}),(0,gt.jsx)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:r,title:l("pill.structureSplit"),children:(0,gt.jsx)(jn,{size:13,className:"wf-floating-top-pill__icon"})})]}):(0,gt.jsxs)("div",{className:"wf-floating-top-pill__single",children:[(0,gt.jsx)("input",{ref:s,type:"file",accept:g,style:{display:"none"},onChange:d}),(0,gt.jsxs)("button",{type:"button",className:"wf-floating-top-pill__btn",onClick:()=>s.current?.click(),children:[(0,gt.jsx)(Su,{size:13,className:"wf-floating-top-pill__icon"}),(0,gt.jsx)("span",{children:y})]})]})})},NL=(0,wa.memo)(m8);var yi=B(oe(),1);var DL=B(oe(),1),RL=[".wf-custom-select-dropdown",".wf-custom-dropdown-menu",".wf-custom-slider",".wf-modal-overlay",".ant-select-dropdown",".ant-slider-thumb"];function g8(e,t,a=RL){if(!e)return!1;for(let o of t)if(o?.contains(e))return!1;for(let o of a)if(e.closest?.(o))return!1;return!0}function zL({refs:e,excludeSelectors:t=RL,onClose:a,enabled:o=!0,deferRegistration:n=!0}){(0,DL.useEffect)(()=>{if(!o)return;let r=Array.isArray(e)?e:[e],l=c=>{let f=c.target;g8(f,r.map(d=>d.current),t)&&a()},i=c=>{c.key==="Escape"&&a()},s=()=>{document.addEventListener("mousedown",l),document.addEventListener("keydown",i)},u=null;return n?u=requestAnimationFrame(s):s(),()=>{u!==null&&cancelAnimationFrame(u),document.removeEventListener("mousedown",l),document.removeEventListener("keydown",i)}},[e,t,a,o,n])}var Vh=B(Z(),1),h8=480,x8=({children:e,onClose:t,width:a=h8})=>{let{zoom:o}=ii(),n=(0,yi.useRef)(null),r=(0,yi.useMemo)(()=>xi(o),[o]);return zL({refs:n,onClose:t}),(0,Vh.jsx)("div",{ref:n,className:"wf-panel-shell nodrag nowheel",style:{width:a,top:"calc(100% + 12px)",left:"50%",marginLeft:-a/2,transform:`scale(${r})`,transformOrigin:"top center"},onClick:l=>l.stopPropagation(),children:(0,Vh.jsx)("div",{className:"wf-panel-shell__card",children:e})})},OL=(0,yi.memo)(x8);var va=B(oe(),1);var BL=B(oe(),1),wi=B(Z(),1),Gh={openai:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5765 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg>',anthropic:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.528h6.468l1.344 3.528h3.78l-6.696-16.918h-3.324zm-.372 10.362l2.172-5.676 2.172 5.676h-4.344z"/></svg>',google:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',veo:'<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99805 2.38477C9.53893 3.90621 10.4105 5.29349 11.5566 6.44238L11.5586 6.44336C12.5481 7.43013 13.7171 8.21841 15.0029 8.76562C15.2029 8.8518 15.4064 8.9289 15.6113 9.00195C14.0914 9.54303 12.7055 10.4153 11.5576 11.5605L11.5566 11.5615C10.412 12.7102 9.5406 14.0963 8.99902 15.6162C8.45764 14.0958 7.58633 12.7095 6.44043 11.5615L6.43945 11.5605L6.17578 11.3066C5.08059 10.2858 3.78911 9.50275 2.38281 9.00195C3.90333 8.45997 5.29032 7.58857 6.43945 6.44336L6.44043 6.44238C7.58587 5.29322 8.45678 3.90579 8.99805 2.38477Z" stroke="currentColor" stroke-width="1.33"/></svg>',kling:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7246 1.68961C13.6779 1.39563 16.7164 2.23209 18.9405 4.27831C21.5718 6.69902 19.8346 9.81153 18.5014 12.4294L22.3499 16.5265C19.4865 23.1738 10.5256 25.7602 5.05933 20.731C2.42803 18.3103 4.16516 15.1977 5.49845 12.5799L1.6499 8.48276C3.147 4.93161 6.95004 2.06526 10.7246 1.68961ZM16.7767 3.99016C11.8861 1.12614 5.4609 3.33336 2.91607 8.34627L6.25496 11.8029C8.49606 8.80475 11.2457 6.20905 14.6528 4.66796L16.7767 3.99016ZM17.8017 11.6886C18.8165 10.4158 20.0508 7.20183 19.102 5.74707C17.7721 3.70784 14.2114 5.50792 12.6813 6.4972C13.9179 6.45287 14.9372 6.34204 16.06 7.00001C16.6823 7.36399 17.8017 8.69042 17.8017 9.41371V11.6886ZM13.4549 7.17266C9.96016 7.47015 6.02402 11.8648 6.93298 15.5419C7.95 19.6507 13.2183 17.4645 15.1875 15.2491C17.6436 12.4866 18.4479 6.74802 13.4538 7.17266H13.4549ZM6.19808 15.5967C6.10593 15.0333 6.19808 14.0101 6.19808 13.3802C6.19808 13.3347 6.59624 12.9054 6.14347 13.2064C5.22883 14.7253 3.65324 18.1889 5.22883 19.6239C6.80443 21.0588 9.81682 19.4337 11.3196 18.5121C10.2116 18.4841 9.14108 18.6486 8.09675 18.0828C7.35958 17.6838 6.338 16.4449 6.19922 15.5956L6.19808 15.5967ZM19.3546 19.114C19.6447 18.8166 21.1406 16.9628 21.0837 16.6642L17.7448 13.2075C15.5754 16.131 12.8622 18.6871 9.57451 20.2258L7.22307 21.0203C11.2252 23.2823 16.1636 22.3875 19.3546 19.114Z" fill="currentColor"/></svg>',alibaba:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3746 20.1092L5.16567 20.1062C5.04656 20.1039 4.94147 20.0419 4.85439 19.9666L3.4196 17.4835C3.34553 17.3048 3.33903 17.2085 3.41084 17.0267C3.72813 16.3438 4.29864 15.6458 4.59266 14.9689C4.61142 14.9256 4.6427 14.888 4.62468 14.8358L2.04987 10.351C1.95954 10.1332 2.00132 10.0117 2.10016 9.81354C2.50302 9.0051 3.06378 8.21279 3.49091 7.41191C3.588 7.3194 3.70561 7.26697 3.84098 7.26092L6.30019 7.25764L8.95533 2.64194C9.04466 2.57237 9.12649 2.53632 9.24034 2.52598C10.1537 2.4438 11.1886 2.58825 12.1144 2.5285C12.239 2.56455 12.3501 2.63766 12.4245 2.74505L13.6708 4.88929L18.8415 4.89307C18.9691 4.90189 19.0967 4.95786 19.1773 5.05844C19.5929 5.85554 20.1662 6.64381 20.557 7.44595C20.6321 7.59997 20.6796 7.68543 20.6416 7.86718L19.3815 10.1385L21.9971 14.7338L22.0006 14.9778C21.598 15.7376 21.1793 16.5127 20.7322 17.2508C20.5875 17.4896 20.5097 17.7099 20.1914 17.7386C19.4285 17.8074 18.5632 17.6864 17.789 17.7361L17.7157 17.7631L15.0668 22.3473C14.9838 22.4277 14.9062 22.4622 14.7918 22.473C13.8893 22.5585 12.8563 22.406 11.9398 22.4733C11.8124 22.4637 11.6805 22.3863 11.608 22.2787L10.3746 20.109V20.1092ZM9.27862 7.76509L10.6266 5.38514L9.30339 3.03066L6.73458 7.50468L8.22017 10.1032L8.89002 10.1334L18.7864 10.1284L20.1527 7.76509H9.27862ZM6.57894 7.76509H3.87926L9.27862 17.2591H6.55392L5.22898 19.601C5.57454 19.6073 5.9216 19.5937 6.26741 19.6003C6.33297 19.6015 6.39378 19.6265 6.46509 19.6277C7.7565 19.6474 9.05242 19.6252 10.3416 19.6033L10.3806 19.5851L11.8482 17.0161L6.57894 7.76509ZM18.8152 14.8669H21.5024L18.9486 10.3883L15.9524 10.3964L10.6631 19.6013L12.0278 21.9684L17.428 12.4995L18.815 14.8666L18.8152 14.8669Z" fill="currentColor"/></svg>',bytedance:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 4.62844L18.542 3.75781V21.2425L22.0004 20.3278V4.62844Z" fill="currentColor"/><path d="M1.99902 20.1939L5.42937 19.3073L5.44542 5.56984L1.99902 4.69922V20.1939Z" fill="currentColor"/><path d="M16.1213 9.26561C15.2507 9.43412 14.2998 9.75509 13.4252 9.97174C13.3048 10.0038 13.0962 9.93563 13.0521 10.068L13.04 17.5947L16.4985 18.4613V9.27765C16.4985 9.17735 16.1895 9.25358 16.1213 9.26561Z" fill="currentColor"/><path d="M7.49609 11.582V20.7336L7.60041 20.7657L10.9264 19.9312L10.9465 12.3925L7.80904 11.6583L7.49609 11.582Z" fill="currentColor"/></svg>',deepseek:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 4.927c-.245-.12-.34.108-.482.224c-.049.038-.09.087-.131.13c-.357.384-.773.634-1.315.604c-.796-.044-1.474.207-2.074.818c-.127-.754-.551-1.203-1.195-1.492c-.338-.15-.68-.3-.915-.626c-.165-.231-.21-.49-.293-.744c-.052-.153-.105-.31-.28-.337c-.192-.03-.266.13-.341.265c-.3.55-.416 1.158-.406 1.772c.027 1.382.608 2.482 1.762 3.266c.132.09.166.18.124.311c-.079.27-.172.531-.255.8c-.052.173-.13.211-.314.135A5.3 5.3 0 0 1 15.97 8.92c-.82-.797-1.563-1.677-2.489-2.366a11 11 0 0 0-.66-.454c-.944-.922.125-1.679.372-1.768c.259-.093.09-.416-.747-.412c-.835.004-1.6.285-2.574.659c-.143.057-.326.153-.446.13a9.2 9.2 0 0 0-2.763-.096c-1.806.203-3.25 1.06-4.31 2.525c-1.275 1.76-1.574 3.759-1.207 5.846c.385 2.197 1.502 4.019 3.22 5.442c1.78 1.474 3.83 2.197 6.169 2.058c1.42-.081 3.003-.273 4.786-1.789c.45.224.922.313 1.707.381c.603.057 1.184-.03 1.634-.123c.704-.15.655-.804.4-.926c-2.065-.966-1.612-.573-2.024-.89c1.05-1.248 2.632-2.544 3.25-6.741c.049-.334.007-.543 0-.814c-.003-.163.034-.228.22-.247a4 4 0 0 0 1.482-.457c1.338-.734 1.867-1.939 1.995-3.385c.019-.22-.004-.45-.236-.565m-11.652 13.01c-2.002-1.58-2.972-2.1-3.373-2.078c-.375.021-.308.452-.225.733c.086.277.198.468.356.711c.109.162.184.402-.108.58c-.645.403-1.766-.134-1.82-.16c-1.303-.77-2.394-1.79-3.163-3.182c-.741-1.342-1.172-2.78-1.243-4.315c-.02-.372.09-.503.456-.57a4.5 4.5 0 0 1 1.466-.037c2.043.3 3.782 1.218 5.24 2.67c.832.829 1.462 1.817 2.11 2.783c.69 1.027 1.432 2.004 2.377 2.804c.333.281.6.495.854.653c-.768.085-2.05.104-2.927-.592"/></svg>',midjourney:'<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1503 20.9512C21.2695 20.5085 20.9352 19.5915 19.6703 19.8084C18.6449 19.9845 17.8001 21.8276 16.6527 20.8157C18.1208 20.0162 19.9413 19.1533 21.1656 17.9969C21.3101 17.8614 21.8341 17.4277 21.4592 17.256C21.1701 17.125 19.8013 17.3464 19.3767 17.369C13.7842 17.6762 8.16907 18.0285 2.5856 18.4622C2.12483 18.67 3.09606 19.7496 3.05541 19.9123L1 21.3036V21.6605H1.44722C2.08869 21.5069 3.41228 20.0749 3.9905 20.1381C4.22992 20.1607 5.01143 20.9964 5.35475 21.1952C5.72066 21.412 6.07301 21.4978 6.45247 21.6605H6.89969C7.76251 21.525 8.52143 20.2872 9.35714 20.3143C10.1974 20.3414 10.8479 21.5204 11.7288 21.6605H12.2663C13.1472 21.5204 13.7977 20.3414 14.638 20.3143C15.4737 20.2872 16.2281 21.525 17.0954 21.6605H17.633C18.4913 21.5159 19.1734 20.3414 20.0046 20.3143C20.8222 20.2872 21.5992 21.5295 22.462 21.6605H22.9996V21.3036C22.8054 21.0371 22.4756 21.1139 22.1458 20.9467L22.1503 20.9512ZM16.0925 20.3956C15.8802 20.3504 15.4646 19.9123 15.049 19.8264C13.5944 19.5238 13.0388 21.0777 12.0405 21.1229C10.9202 21.1726 10.3239 19.1895 8.57112 19.9755C7.47791 20.4679 7.27463 21.5927 5.80197 20.8428C5.02498 20.4453 4.49645 19.3024 3.51166 19.6954L3.2361 19.0268L20.4066 17.8207C19.9549 18.286 19.3405 18.6745 18.7894 19.0178C18.4145 19.2527 16.3546 20.4498 16.0925 20.3956Z" fill="currentColor"/></svg>',minimax:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#10B981"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">M</text></svg>',grok:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.94 4.96a9.97 9.97 0 0 1 10.835-2.182a8.7 8.7 0 0 1 2.033 1.11l-3.006 1.39C12.003 4.101 8.797 4.9 6.84 6.86c-2.564 2.565-3.146 6.954-.36 9.922l.278.284L.124 23c1.875-1.973 3.771-4.427 2.636-7.19c-1.52-3.698-.635-8.03 2.18-10.85M23.9.1c-2.264 3.174-3.184 5.389-2.197 9.64l-.007-.007c.753 3.201-.052 6.75-2.653 9.355c-3.279 3.285-8.526 4.016-12.847 1.06L9.21 18.75c2.758 1.084 5.775.607 7.943-1.564c2.169-2.17 2.655-5.332 1.566-7.963c-.207-.5-.828-.625-1.263-.304L8.59 15.472l12.7-12.77v.01z"/></svg>',vidu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.23986 7.09139C4.18634 5.25751 7.43179 5.75665 8.71506 8.01943C9.56273 9.51315 10.0219 11.4469 10.7636 13.0071C10.587 14.0794 10.0847 15.0666 9.55095 16.0131C9.4293 16.1092 9.2841 15.7025 9.24878 15.6323C8.32655 13.6357 7.65941 11.3766 6.68616 9.41702C5.77571 7.59053 3.51135 8.30412 3.48781 10.0197C3.48388 10.2896 3.6644 10.7037 3.75859 10.9699C4.33547 12.6004 5.21453 15.0333 5.99548 16.5418C6.61553 17.7397 7.74967 18.6308 9.23308 18.1575C10.5046 17.7508 11.2306 16.3421 11.6583 15.2403C12.7101 12.5154 13.3419 9.38005 14.4643 6.71796C16.4264 2.0704 24.44 4.13352 22.7721 9.65735C22.1913 11.58 21.4104 13.6209 20.7119 15.5213C20.2919 16.6712 20.029 17.6214 19.2402 18.6382C17.9059 20.3612 15.41 21.511 13.2595 20.424C14.0561 19.7955 14.5349 18.9081 14.9705 18.0392C15.308 17.9616 15.6023 17.9727 15.9516 17.8876C17.5841 17.4883 18.1767 15.366 18.6633 14.035C19.3383 12.2048 19.8799 10.3266 20.5117 8.48159C20.7864 6.44066 17.6312 5.67901 16.8228 7.60902C15.7004 10.2822 15.0843 13.388 13.9973 16.1129C12.9102 18.8378 11.2306 20.8418 7.90272 20.583C5.86205 20.424 4.43358 18.8933 3.63693 17.2443C2.84813 15.6175 1.83957 13.2401 1.26661 11.5467C0.736825 9.96423 0.964438 8.29303 2.23986 7.09139Z" fill="currentColor"/></svg>',runway:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor"/><path d="M7 10L10 12L7 14V10Z" fill="white"/><rect x="12" y="10" width="5" height="1" fill="white"/><rect x="12" y="13" width="5" height="1" fill="white"/></svg>',elevenlabs:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#000"/><rect x="7" y="6" width="2" height="12" fill="white"/><rect x="11" y="6" width="2" height="12" fill="white"/><rect x="15" y="6" width="2" height="12" fill="white"/></svg>',stability:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#7C3AED"/><path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/></svg>'},b8=[{brand:"veo",regex:/(^veo|\bveo\b|omni[- ]?flash)/i},{brand:"google",regex:/(^gemini|\bgemini\b|google|nano[- ]?banana)/i},{brand:"anthropic",regex:/(^claude|\bclaude\b|anthropic)/i},{brand:"kling",regex:/(^kling|\bkling\b|可灵)/i},{brand:"alibaba",regex:/(^wan|\bwan\b|wanxiang|万相|通义|qwen|happyhorse)/i},{brand:"deepseek",regex:/(^deepseek|\bdeepseek\b|深度求索)/i},{brand:"bytedance",regex:/(^seed|seedance|seedream|doubao|豆包|即梦)/i},{brand:"openai",regex:/(^gpt|^o1|^o3|openai|sora|dall[- ]?e|chatgpt)/i},{brand:"midjourney",regex:/(^midjourney|\bmidjourney\b|\bmj\b|niji)/i},{brand:"minimax",regex:/(^minimax|\bminimax\b|hailuo|海螺)/i},{brand:"grok",regex:/(^grok|\bgrok\b|xai)/i},{brand:"vidu",regex:/(^vidu|\bvidu\b|生数)/i},{brand:"runway",regex:/(^runway|\brunway\b|^gen-[23])/i},{brand:"elevenlabs",regex:/(^eleven|elevenlabs|11labs|speech)/i},{brand:"stability",regex:/(^sd|stability|stable[- ]?diffusion|sdxl)/i}];function y8(e){if(!e||typeof e!="string")return null;let t=e.trim().toLowerCase();if(Gh[t])return t;for(let a of b8)if(a.regex.test(t))return a.brand;return null}var PL=({modelId:e,brand:t,size:a=16,className:o="",style:n,fallback:r=null})=>{let l=(0,BL.useMemo)(()=>t&&Gh[t.toLowerCase()]?t.toLowerCase():y8(e),[t,e]),i=l?Gh[l]:null;if(!i){if(r)return(0,wi.jsx)(wi.Fragment,{children:r});let s=(e||t||"M").charAt(0).toUpperCase();return(0,wi.jsx)("span",{className:`wf-brand-icon wf-brand-icon--fallback ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:Math.max(3,Math.floor(a/4)),background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontSize:Math.max(9,Math.floor(a*.65)),fontWeight:700,userSelect:"none",...n},children:s})}return(0,wi.jsx)("span",{className:`wf-brand-icon wf-brand-icon--${l} ${o}`,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a,height:a,flexShrink:0,...n},dangerouslySetInnerHTML:{__html:i.replace(/width="(\d+)"/i,`width="${a}"`).replace(/height="(\d+)"/i,`height="${a}"`)}})};var HL=B(oe(),1);function UL(e){let t=JC(),a=eS();return(0,HL.useMemo)(()=>!e||!a||!t?[]:a.filter(n=>n.target===e).map(n=>n.source).flatMap(n=>{let r=t.find(c=>c.id===n);if(!r)return[];let l=r.data||{},i=bi(l.materialType,l.mediaAssets,l.mediaUrl),s=l.content||l.generatedContent||"",u=!!(i||l.materialType==="text"&&s.trim().length>0);return[{nodeId:r.id,label:l.label||r.id,materialType:l.materialType||"image",url:i,hasMedia:u,textContent:s}]}),[t,a,e])}var FL=B(oe(),1),qL="wf_capabilities_catalog_v1",w8={image:{aspectRatio:{options:[{value:"auto",label:"\u81EA\u9002\u5E94"},{value:"1:1",label:"1:1"},{value:"4:3",label:"4:3"},{value:"3:4",label:"3:4"},{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"21:9",label:"21:9"}],defaultValue:"16:9"},resolution:{options:[{value:"2K",label:"2K"},{value:"1K",label:"1K"}],defaultValue:"2K"}},video:{aspectRatio:{options:[{value:"16:9",label:"16:9"},{value:"9:16",label:"9:16"},{value:"1:1",label:"1:1"}],defaultValue:"16:9"},duration:{options:[{value:5,label:"5s"},{value:10,label:"10s"}],defaultValue:5,unit:"s"},resolution:{options:[{value:"1080P",label:"1080P"}],defaultValue:"1080P"}},audio:{},text:{}};function Nu(){try{if(typeof window>"u"||!window.localStorage)return null;let e=window.localStorage.getItem(qL);return e?JSON.parse(e):null}catch{return null}}function VL(e){try{typeof window<"u"&&window.localStorage&&window.localStorage.setItem(qL,JSON.stringify(e))}catch{}}function GL(e,t,a){return(0,FL.useMemo)(()=>{let n=(a??Nu())?.[e]??[],r=n.find(b=>b.id===t)??n[0],l=w8[e]??{},i=r?.parameters??l,s=i.aspectRatio?.options&&i.aspectRatio.options.length>0?i.aspectRatio.options:l.aspectRatio?.options??[{value:"16:9",label:"16:9"}],u=i.aspectRatio?.defaultValue??s[0]?.value??"16:9",c=b=>b?s.some(C=>C.value===b):!1,f=i.duration?.options&&i.duration.options.length>0?i.duration.options:l.duration?.options??[{value:5,label:"5s"}],d=i.duration?.defaultValue??f[0]?.value??5,p=b=>typeof b!="number"?!1:f.some(C=>C.value===b),g=i.resolution?.options??[],y=i.resolution?.defaultValue??g[0]?.value??"",w=i.quality?.options??[],h=i.quality?.defaultValue??w[0]?.value??"",x=!!i.sound?.supported,m=!!i.sound?.defaultValue;return{schema:i,modelItem:r,aspectRatioOptions:s,defaultAspectRatio:u,isAspectRatioValid:c,durationOptions:f,defaultDuration:d,isDurationValid:p,resolutionOptions:g,defaultResolution:y,qualityOptions:w,defaultQuality:h,hasSoundSupport:x,defaultSound:m}},[e,t,a])}var XL=B(oe(),1);var tn=B(Z(),1),v8=({onClick:e,disabled:t,isGenerating:a})=>{let o=_e();return(0,tn.jsxs)("div",{className:`wf-generate-btn ${t?"wf-generate-btn--disabled":""}`,onClick:t||a?void 0:e,style:{cursor:t||a?"default":"pointer"},role:"button",tabIndex:0,children:[(0,tn.jsx)("span",{className:"wf-generate-btn__label",children:o("panel.generate")}),(0,tn.jsx)("button",{type:"button",onClick:n=>{n.stopPropagation(),!t&&!a&&e()},disabled:t||a,className:"wf-generate-btn__send","aria-label":o("panel.generate"),title:o("panel.generate"),children:a?(0,tn.jsx)(Kn,{size:14,className:"wf-generate-btn__spin"}):(0,tn.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,tn.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,tn.jsx)("path",{d:"M12 19V5"})]})})]})},YL=(0,XL.memo)(v8);var K=B(Z(),1);function C8(e){let t=(0,K.jsx)(PL,{modelId:e,size:15});if(e.startsWith("nanobanana"))return{icon:t,badge:"Yearly -20%",subtitle:"auto-4K"};if(e.startsWith("seedream")){let a=e.includes("5.0")||e.includes("5-0")?"1K-2K":"2K-4K";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("midjourney")){let a=e.includes("8.1")||e.includes("8-1")?"2K":"1080P";return{icon:t,badge:"Yearly -20%",subtitle:a}}if(e.startsWith("gpt-image")||e.startsWith("openai"))return{icon:t,badge:"Yearly -20%",subtitle:"1k-4k"};if(e.startsWith("kling")){let a="1080P \xB7 \u23F1 3-10s";return e==="kling-o3"?a="4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}":e==="kling-avatar"?a="Digital Human":e==="kling-motion-control"&&(a="1080P"),{icon:t,subtitle:a}}return e.startsWith("wan")?{icon:t,subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"}:e.startsWith("veo")?{icon:t,subtitle:"720p-1080p \xB7 \u23F1 8s"}:{icon:t}}var S8=({nodeId:e,nodeData:t,catalog:a,onUpdateNodeData:o,onGenerate:n,execBusy:r})=>{let l=_e(),{materialType:i,selectedTool:s,params:u,prompt:c}=t,[f,d]=(0,va.useState)(!1),[p,g]=(0,va.useState)(!1),y=UL(e),w=s==="text-to-music"?"music":"speech",h=(0,va.useCallback)(D=>{o({selectedTool:D==="music"?"text-to-music":"text-to-audio"})},[o]),x=(0,va.useMemo)(()=>{let D=a?.[i]??[];return D.length===0&&(i==="text"?D=[{id:"claude-opus-4-6",label:"Claude 4.6"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview"},{id:"gemini-3.7-flash",label:"Gemini 3.7 Flash"},{id:"gpt-5.5",label:"GPT-5.5"},{id:"deepseek-v4-flash-vision-exp",label:"DeepSeek 4 Flash"}]:i==="image"?D=[{id:"nanobanana-2",label:"NanoBanana 2",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"nanobanana-pro",label:"NanoBanana Pro",badge:"Yearly -20%",subtitle:"auto-4K"},{id:"seedream-5.0-pro",label:"Seedream 5.0 Pro",badge:"Yearly -20%",subtitle:"1K-2K"},{id:"seedream-4.5",label:"Seedream 4.5",badge:"Yearly -20%",subtitle:"2K-4K"},{id:"midjourney-8.1",label:"Midjourney 8.1",badge:"Yearly -20%",subtitle:"2K"},{id:"midjourney-7",label:"Midjourney 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"midjourney-niji-7",label:"Midjourney Niji 7",badge:"Yearly -20%",subtitle:"1080P"},{id:"gpt-image-2",label:"GPT Image 2",badge:"Yearly -20%",subtitle:"1k-4k"}]:i==="video"?D=[{id:"kling-o1",label:"Kling O1",subtitle:"1080P \xB7 \u23F1 3-10s"},{id:"kling-o3",label:"Kling O3",subtitle:"4K \xB7 \u23F1 3-15s \xB7 \u{1F50A}"},{id:"kling-avatar",label:"Kling Avatar"},{id:"kling-motion-control",label:"Kling Motion Control",subtitle:"1080P"},{id:"wan-2.6",label:"Wan 2.6",subtitle:"720P-1080P \xB7 \u23F1 5-15s \xB7 \u{1F50A}"},{id:"veo-3.1-fast",label:"Veo3.1 Fast",subtitle:"720p-1080p \xB7 \u23F1 8s"},{id:"veo-3.1",label:"Veo3.1",subtitle:"720p-1080p \xB7 \u23F1 8s"}]:i==="audio"&&(D=[{id:"speech-2.8-hd",label:"Speech-2.8-HD"},{id:"music-gen-v1",label:"MusicGen V1"}])),D.map(q=>{let U=C8(q.id),W=U.icon,Y=q.badge??U.badge,j=q.subtitle??U.subtitle;return{value:q.id,label:q.label,triggerLabel:(0,K.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[W?(0,K.jsx)("span",{style:{display:"inline-flex",opacity:.8},children:W}):null,(0,K.jsx)("span",{children:q.label})]}),icon:W,badge:Y,subtitle:j}})},[a,i]),m=typeof u.model=="string"?u.model:x[0]?.value,{aspectRatioOptions:b,defaultAspectRatio:C,isAspectRatioValid:S,durationOptions:v,defaultDuration:_,isDurationValid:I,resolutionOptions:A,defaultResolution:T}=GL(i,m,a),P=(0,va.useCallback)((D,q)=>{o({params:{...u,[D]:q}})},[o,u]),H=(0,va.useCallback)(D=>{let Y=((a??Nu())?.[i]??[]).find(ie=>ie.id===D)?.parameters,j={...u,model:D};u.aspectRatio&&Y?.aspectRatio?.options&&(Y.aspectRatio.options.some(J=>J.value===u.aspectRatio)||(j.aspectRatio=Y.aspectRatio.defaultValue||"16:9")),typeof u.duration=="number"&&Y?.duration?.options&&(Y.duration.options.some(J=>J.value===u.duration)||(j.duration=Y.duration.defaultValue||Y.duration.options[0]?.value||5)),u.resolution&&Y?.resolution?.options?Y.resolution.options.some(J=>J.value===u.resolution)||(j.resolution=Y.resolution.defaultValue||Y.resolution.options[0]?.value):u.resolution&&Y&&!Y.resolution?.options&&delete j.resolution,o({params:j})},[a,i,o,u]),L=(0,va.useMemo)(()=>{switch(i){case"audio":return 1e4;case"video":return 7e3;default:return 7500}},[i]),M=(0,va.useMemo)(()=>{switch(i){case"text":return l("panel.textPromptPlaceholder");case"image":return l("panel.imagePromptPlaceholder");case"video":return l("panel.videoPromptPlaceholder");case"audio":return l(w==="music"?"panel.musicPromptPlaceholder":"panel.audioPromptPlaceholder");default:return l("panel.promptPlaceholder")}},[i,w,l]),E=typeof u.aspectRatio=="string"&&S(u.aspectRatio)?u.aspectRatio:C,k=typeof u.duration=="number"&&I(u.duration)?u.duration:_,N=D=>!!D&&A.some(q=>q.value===D),R=typeof u.resolution=="string"&&N(u.resolution)?u.resolution:T;return(0,K.jsxs)("div",{className:"wf-config-panel",children:[i==="audio"&&(0,K.jsxs)("div",{className:"wf-config-panel__audio-tabs",children:[(0,K.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${w==="speech"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>h("speech"),children:[(0,K.jsx)(Ur,{size:13}),(0,K.jsx)("span",{children:l("panel.audioGen")})]}),(0,K.jsxs)("button",{type:"button",className:`wf-config-panel__tab-btn ${w==="music"?"wf-config-panel__tab-btn--active":""}`,onClick:()=>h("music"),children:[(0,K.jsx)(Pa,{size:13}),(0,K.jsx)("span",{children:l("panel.musicGen")})]})]}),(0,K.jsxs)("div",{className:"wf-config-panel__prompt-container",children:[(0,K.jsxs)("div",{className:"wf-config-panel__prompt-header",children:[y.length>0?(0,K.jsx)("div",{className:"wf-config-panel__ref-slots-group",children:y.map(D=>(0,K.jsxs)("div",{className:`wf-config-panel__ref-thumb-slot ${D.hasMedia?"wf-config-panel__ref-thumb-slot--ready":""}`,title:`${D.label} (${D.hasMedia?"\u7D20\u6750\u5DF2\u5C31\u7EEA":"\u7B49\u5F85\u7D20\u6750"})`,children:[D.url&&D.materialType==="image"?(0,K.jsx)("img",{src:D.url,alt:D.label,className:"wf-config-panel__ref-thumb-media"}):D.url&&D.materialType==="video"?(0,K.jsxs)("div",{className:"wf-config-panel__ref-thumb-video-box",children:[(0,K.jsx)("video",{src:D.url,className:"wf-config-panel__ref-thumb-media",muted:!0}),(0,K.jsx)(Ja,{size:10,className:"wf-config-panel__ref-thumb-overlay-icon"})]}):D.materialType==="audio"?(0,K.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio",children:(0,K.jsx)(Pa,{size:13})}):D.materialType==="text"?(0,K.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text",children:(0,K.jsx)(aa,{size:13})}):(0,K.jsx)("div",{className:"wf-config-panel__ref-thumb-icon-box",children:(0,K.jsx)($a,{size:13})}),D.hasMedia&&(0,K.jsx)("span",{className:"wf-config-panel__ref-thumb-dot"})]},D.nodeId))}):(0,K.jsx)("span",{}),(0,K.jsx)("button",{type:"button",className:"wf-config-panel__expand-btn",onClick:()=>d(!0),title:l("header.fitView"),children:(0,K.jsx)(cu,{size:13})})]}),(0,K.jsx)("textarea",{className:"wf-config-panel__prompt-input nowheel nodrag",value:c??"",placeholder:M,rows:3,onChange:D=>o({prompt:D.target.value})}),(0,K.jsxs)("div",{className:"wf-config-panel__char-counter",children:[(c||"").length," / ",L]})]}),(0,K.jsxs)("div",{className:"wf-config-panel__bottom-bar",children:[(0,K.jsxs)("div",{className:"wf-config-panel__params-group",children:[(0,K.jsx)(Vr,{className:"wf-param-bar__select wf-param-bar__select--model",value:m,options:x,popupMatchSelectWidth:!1,onChange:D=>H(D)}),i==="image"&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,K.jsx)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:(0,K.jsx)(Vr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:E,options:b,popupMatchSelectWidth:!1,onChange:D=>P("aspectRatio",D)})})]}),i==="video"&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,K.jsxs)("div",{className:"wf-param-pill wf-param-pill--video-summary",children:[(0,K.jsx)(Vr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:E,options:b,popupMatchSelectWidth:!1,onChange:D=>P("aspectRatio",D)}),(0,K.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,K.jsx)(Vr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:k,options:v,popupMatchSelectWidth:!1,onChange:D=>P("duration",D)}),A.length>0&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__dot",children:"\xB7"}),(0,K.jsx)(Vr,{className:"wf-param-bar__select wf-param-bar__select--ghost",variant:"ghost",value:R,options:A,popupMatchSelectWidth:!1,onChange:D=>P("resolution",D)})]})]})]}),i==="audio"&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("span",{className:"wf-param-pill__divider",children:"|"}),(0,K.jsx)("button",{type:"button",className:"wf-param-pill wf-param-pill--btn",onClick:()=>g(!p),title:l("panel.advanced"),children:(0,K.jsx)(yu,{size:13})})]})]}),(0,K.jsx)("div",{className:"wf-config-panel__action-group",children:(0,K.jsx)(YL,{onClick:n,disabled:r,isGenerating:t.executionStatus==="running"})})]}),p&&(0,K.jsx)("div",{className:"wf-config-panel__advanced-drawer",children:(0,K.jsxs)("div",{className:"wf-config-panel__advanced-row",children:[(0,K.jsx)("span",{className:"wf-config-panel__advanced-label",children:l("panel.duration")}),(0,K.jsx)(Ih,{style:{flex:1},min:1,max:i==="video"?20:60,value:k,onChange:D=>P("duration",D)})]})}),(0,K.jsx)(kh,{title:l("panel.promptPlaceholder"),open:f,onCancel:()=>d(!1),width:680,children:(0,K.jsx)("textarea",{className:"wf-config-panel__modal-textarea",value:c??"",placeholder:M,rows:10,onChange:D=>o({prompt:D.target.value})})})]})},ZL=(0,va.memo)(S8);var Oe=B(Z(),1),L8=({id:e,data:t,selected:a})=>{let o=t,{materialType:n,status:r,label:l,content:i,mediaUrl:s,generatedContent:u,errorMessage:c}=o,f=o.executionStatus,d=o.executionError,p=o.mediaAssets,g=t.__catalog??null,[y,w]=(0,$e.useState)(!1),[h,x]=(0,$e.useState)(!1),[m,b]=(0,$e.useState)(!1),[C,S]=(0,$e.useState)(!1),[v,_]=(0,$e.useState)(null),{setNodes:I}=xa(),A=We(X=>X.status==="pending"||X.status==="running"),T=o.nodeWidth??hi(n),P=Oh(n),H=cL(T,P),L=v??o.nodeHeight??H,M=(0,$e.useCallback)(X=>{I(re=>re.map(pe=>pe.id===e?{...pe,data:{...pe.data,...X}}:pe))},[e,I]),E=(0,$e.useCallback)((X,re)=>{if(X>0&&re>0){let pe=X/re,ht=Math.max(80,Math.min(800,Math.round(T/pe)));_(ht),o.nodeHeight!==ht&&M({nodeHeight:ht})}},[o.nodeHeight,T,M]),k=(0,$e.useCallback)(()=>{let X=o.selectedTool;(!X||X==="text-editor"||X==="import")&&M({selectedTool:{text:"text-to-text",image:"text-to-image",video:"video-generation",audio:"text-to-audio"}[n]}),We.getState().startNodeExecution?.(e)},[e,n,o.selectedTool,M]),N=_e(),R=be(X=>X.applyCanvasInputMutation),D=(0,$e.useMemo)(()=>Nf(n).map(X=>({key:X.key,label:N(X.labelKey),description:N(X.descKey),icon:X.icon})),[n,N]),q=(0,$e.useCallback)((X,re)=>{let pe=Af(X),ht=re?.flowPosition;if(!pe||!ht)return;let _t=Zr(pe.targetMaterialType,ht),Pt=_t.nodes[0];Pt&&R({addNodes:_t.nodes,addEdges:[{source:e,sourceHandle:"out",target:Pt.id,targetHandle:"in"}]})},[R,e]),U=u||i||"",W=(0,$e.useCallback)(X=>{if(n==="text"){let re="";X==="script"?re=`\u8BF7\u521B\u4F5C\u4E00\u4E2A[\u65F6\u957F]\u7684[\u7C7B\u578B]\u5267\u672C\u3002

\u4E3B\u9898\uFF1A[\u4E00\u53E5\u8BDD\u63CF\u8FF0]

\u60C5\u7EEA\u57FA\u8C03\uFF1A[\u6E29\u6696/\u60AC\u7591/\u641E\u7B11/\u70ED\u8840]

\u7279\u6B8A\u8981\u6C42\uFF1A[\u5982\u6709]`:X==="planning"?re=`\u8BF7\u64B0\u5199\u4E00\u4EFD[\u9879\u76EE\u7C7B\u578B]\u7B56\u5212\u6848\u3002

\u9879\u76EE\u80CC\u666F\uFF1A[\u7B80\u8FF0]

\u6838\u5FC3\u76EE\u6807\uFF1A[\u5E0C\u671B\u8FBE\u6210\u4EC0\u4E48]

\u76EE\u6807\u53D7\u4F17\uFF1A[\u4EBA\u7FA4\u63CF\u8FF0]`:X==="prompt"?re=`\u6839\u636E\u4EE5\u4E0B\u521B\u610F\u9700\u6C42\uFF0C\u751F\u6210\u4E00\u7EC4\u9002\u7528\u4E8E[\u76EE\u6807\u5DE5\u5177]\u7684\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD\u3002

\u521B\u610F\u9700\u6C42\uFF1A[\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u753B\u9762/\u97F3\u4E50/\u89C6\u9891]

\u98CE\u683C\u504F\u597D\uFF1A[\u5199\u5B9E/\u63D2\u753B/3D/\u52A8\u6F2B/\u5176\u4ED6]`:X==="storyboard"&&(re=`\u955C\u59341\uFF1A\u5168\u666F\uFF0C\u57CE\u5E02\u5929\u9645\u7EBF\u9E1F\u77B0\uFF08\u7F13\u6162\u4E0B\u63A8 3s\uFF09
\u955C\u59342\uFF1A\u4E2D\u666F\uFF0C\u4E3B\u89D2\u63A8\u95E8\u8D70\u8FDB\u5496\u5561\u9986\uFF08\u7279\u5199\u624B\u90E8 2s\uFF09
\u955C\u59343\uFF1A\u7279\u5199\uFF0C\u684C\u4E0A\u7684\u8001\u5F0F\u9ED1\u767D\u7167\u7247\uFF08\u9759\u6B62 2s\uFF09`),M({content:re,prompt:re,status:re.trim()?"ready":"empty",generatedContent:void 0})}},[n,M]),Y=(0,$e.useCallback)(X=>{let re=URL.createObjectURL(X);if(X.type.startsWith("image/")){let pe=new Image;pe.src=re,pe.onload=()=>{pe.naturalWidth>0&&pe.naturalHeight>0&&E(pe.naturalWidth,pe.naturalHeight)}}else if(X.type.startsWith("video/")){let pe=document.createElement("video");pe.src=re,pe.onloadedmetadata=()=>{pe.videoWidth>0&&pe.videoHeight>0&&E(pe.videoWidth,pe.videoHeight)}}M({mediaUrl:re,status:"ready",content:X.name})},[E,M]),j=(0,$e.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!0)},[]),ie=(0,$e.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!1)},[]),J=(0,$e.useCallback)(X=>{X.preventDefault(),X.stopPropagation(),x(!1);let re=X.dataTransfer.files?.[0];re&&Y(re)},[Y]),F=(0,$e.useCallback)(()=>{U&&navigator.clipboard.writeText(U).catch(()=>{})},[U]),$=(0,$e.useCallback)(()=>{if(!U)return;let X=U.split(`

`).filter(re=>re.trim().length>0);X.length>1&&M({content:X.join(`
---
`)})},[U,M]);(0,$e.useEffect)(()=>{a||(b(!1),S(!1))},[a]);let ue=LL(a,m,f),se=bi(n,p,s),te=_L(f,r,!!se),ne=n==="video"?"video":n==="audio"?"audio":"square";return(0,Oe.jsxs)("div",{className:`wf-material-node ${a?"wf-material-node--selected":""}`,style:{width:T},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:[(y||a)&&(0,Oe.jsx)(NL,{materialType:n,selected:a,onImportFile:Y,onStartTextEdit:()=>S(!0),onCopyText:F,onSplitText:$}),(0,Oe.jsx)(qh,{side:"left",nodeHovered:y}),(0,Oe.jsx)(ML,{label:l,materialType:n,onLabelChange:X=>M({label:X}),trailing:(0,Oe.jsx)(EL,{executionStatus:f,status:r})}),(0,Oe.jsxs)("div",{className:`wf-material-node__card ${h?"wf-material-node__card--dragover":""}`,style:{width:T,height:L},onDragOver:j,onDragLeave:ie,onDrop:J,children:[a&&(0,Oe.jsxs)(Oe.Fragment,{children:[(0,Oe.jsx)("span",{className:"wf-node-corner wf-node-corner--tl"}),(0,Oe.jsx)("span",{className:"wf-node-corner wf-node-corner--tr"}),(0,Oe.jsx)("span",{className:"wf-node-corner wf-node-corner--bl"}),(0,Oe.jsx)("span",{className:"wf-node-corner wf-node-corner--br"})]}),n==="text"&&(0,Oe.jsx)("div",{className:"wf-material-node__text-shell",style:{padding:"12px 14px"},children:U||C?(0,Oe.jsx)("textarea",{className:`wf-material-node__text-editor nowheel${C?" nodrag":""}`,readOnly:!C,value:U,placeholder:N("node.textPlaceholder"),autoFocus:C,onMouseDown:X=>{C||X.preventDefault()},onDoubleClick:X=>{X.stopPropagation(),S(!0),X.currentTarget.focus()},onFocus:()=>S(!0),onBlur:()=>S(!1),onChange:X=>M({content:X.target.value,status:X.target.value.trim()?"ready":"empty",generatedContent:void 0})}):(0,Oe.jsx)(zf,{materialType:"text",onStartEdit:()=>S(!0),onApplyPreset:W})}),n!=="text"&&(te?(0,Oe.jsx)("div",{className:"wf-material-node__media",children:(0,Oe.jsx)(SL,{status:te,loadingAspectRatio:ne,errorMessage:d??c,taskId:o.taskId,onRetry:k,children:se?(0,Oe.jsx)(TL,{materialType:n,mediaAssets:p,mediaUrl:s,label:l,onMediaSizeChange:E}):(0,Oe.jsx)(zf,{materialType:n,onApplyPreset:W})})}):(0,Oe.jsx)("div",{className:"wf-material-node__media",children:(0,Oe.jsx)(zf,{materialType:n,onApplyPreset:W})})),n==="text"&&(c||d)&&(0,Oe.jsx)("div",{className:"wf-material-node__error",children:d??c})]}),ue&&(0,Oe.jsx)(OL,{onClose:()=>b(!0),children:(0,Oe.jsx)(ZL,{nodeId:e,nodeData:o,catalog:g,onUpdateNodeData:M,onGenerate:k,execBusy:A})}),(0,Oe.jsx)(qh,{side:"right",nodeHovered:y,options:D,onSelect:q})]})},WL=(0,$e.memo)(L8);var jL={type:"material",component:WL,ports:[{side:"in",acceptedTypes:["text","image","video","audio"]},{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>bf("text",{status:"empty",nodeWidth:hi("text")}),configSpec:{promptEnabled:!0,modelCategory:"text"},executorKey:"material",palette:{group:"palette.group.material",label:"palette.node.material",icon:"box"}};var KL=B(oe(),1);var Xh=50;function Kr(e){return JSON.parse(JSON.stringify(e))}var _8={version:1,title:"\u672A\u547D\u540D\u8868\u683C",rowHeight:"low",columns:[{id:"col_text",title:"\u6587\u672C",type:"text",visible:!0,width:280}],rows:[],filter:{match:"all",conditions:[{columnIndex:0,op:"equals",value:""}]}},Bt=pi((e,t)=>{let a=o=>{let{undoStack:n}=t();return{undoStack:[...n,Kr(o)].slice(-Xh),redoStack:[]}};return{document:_8,isStageOpen:!1,undoStack:[],redoStack:[],activePopover:null,activeContextMenuColIdx:null,modalState:{isOpen:!1,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"},openStage:o=>{e(o?{document:Kr(o),isStageOpen:!0,undoStack:[],redoStack:[],activePopover:null}:{isStageOpen:!0,activePopover:null})},closeStage:()=>e({isStageOpen:!1,activePopover:null,activeContextMenuColIdx:null}),undo:()=>{let{undoStack:o,document:n,redoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Kr(l),undoStack:i,redoStack:[...r,Kr(n)].slice(-Xh)})},redo:()=>{let{redoStack:o,document:n,undoStack:r}=t();if(o.length===0)return;let l=o[o.length-1];if(!l)return;let i=o.slice(0,-1);e({document:Kr(l),redoStack:i,undoStack:[...r,Kr(n)].slice(-Xh)})},canUndo:()=>t().undoStack.length>0,canRedo:()=>t().redoStack.length>0,setActivePopover:o=>e({activePopover:o}),setContextMenuColIdx:o=>e({activeContextMenuColIdx:o}),openColumnModal:(o,n)=>{let{document:r}=t();if(o==="edit"&&n!==void 0&&r.columns[n]){let l=r.columns[n];e({activePopover:null,modalState:{isOpen:!0,mode:"edit",targetColumnIndex:n,initialTitle:l.title,initialType:l.type}})}else e({activePopover:null,modalState:{isOpen:!0,mode:"add",targetColumnIndex:null,initialTitle:"",initialType:"text"}})},closeColumnModal:()=>e(o=>({modalState:{...o.modalState,isOpen:!1}})),setTitle:o=>{let{document:n}=t();if(n.title===o)return;let r=a(n);e({document:{...n,title:o},...r})},updateCell:(o,n,r)=>{let{document:l}=t(),i=l.rows[o];if(!i)return;let s=a(l),u=[...l.rows],c={...i,cells:[...i.cells]};c.cells[n]=r,u[o]=c,e({document:{...l,rows:u},...s})},addRow:o=>{let{document:n}=t(),r=a(n),l=o||n.columns.map(i=>i.type==="attachment"?[]:"");e({document:{...n,rows:[...n.rows,{cells:l}]},...r})},deleteRow:o=>{let{document:n}=t();if(!n.rows[o])return;let r=a(n),l=n.rows.filter((i,s)=>s!==o);e({document:{...n,rows:l},...r})},addColumn:(o,n,r=240)=>{let{document:l}=t(),i=a(l),s={id:`col_${Math.random().toString(36).substring(2,9)}`,title:o,type:n,visible:!0,width:r},u=l.rows.map(c=>({...c,cells:[...c.cells,n==="attachment"?[]:""]}));e({document:{...l,columns:[...l.columns,s],rows:u},...i})},updateColumn:(o,n,r)=>{let{document:l}=t(),i=l.columns[o];if(!i)return;let s=a(l),u=[...l.columns];u[o]={...i,title:n,type:r},e({document:{...l,columns:u},...s})},deleteColumn:o=>{let{document:n}=t();if(!n.columns[o])return;let r=a(n),l=n.columns.filter((s,u)=>u!==o),i=n.rows.map(s=>({...s,cells:s.cells.filter((u,c)=>c!==o)}));e({document:{...n,columns:l,rows:i},...r})},toggleColumnVisibility:o=>{let{document:n}=t(),r=n.columns[o];if(!r)return;let l=a(n),i=[...n.columns];i[o]={...r,visible:!r.visible},e({document:{...n,columns:i},...l})},reorderColumns:(o,n)=>{let{document:r}=t();if(o===n||!r.columns[o])return;let i=a(r),s=[...r.columns],[u]=s.splice(o,1);u&&s.splice(n,0,u);let c=r.rows.map(f=>{let d=[...f.cells],[p]=d.splice(o,1);return p!==void 0&&d.splice(n,0,p),{...f,cells:d}});e({document:{...r,columns:s,rows:c},...i})},setFilterConditions:o=>{let{document:n}=t(),r=a(n);e({document:{...n,filter:{match:n.filter?.match||"all",conditions:o}},...r})},setRowHeight:o=>{let{document:n}=t();if(n.rowHeight===o)return;let r=a(n);e({document:{...n,rowHeight:o},...r})},loadDocument:o=>e({document:Kr(o),undoStack:[],redoStack:[]})}});var Se=B(Z(),1),QL=(0,KL.memo)(({id:e,selected:t})=>{let{document:a,openStage:o,addRow:n}=Bt(),r=a.rows||[],l=a.columns[0];return(0,Se.jsxs)("div",{className:"wf-table-node",children:[(0,Se.jsxs)("div",{className:"wf-table-node__header",children:[(0,Se.jsxs)("svg",{className:"wf-table-node__header-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Se.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,Se.jsx)("path",{d:"M3 9h18M3 15h18M9 3v18"})]}),(0,Se.jsx)("span",{children:a.title||"\u672A\u547D\u540D\u8868\u683C"})]}),(0,Se.jsxs)("div",{className:"wf-table-node__actions",children:[(0,Se.jsx)("button",{type:"button",className:"wf-table-node__action-btn",title:"\u6DFB\u52A0\u6570\u636E\u884C",onClick:i=>{i.stopPropagation(),n()},children:(0,Se.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Se.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),(0,Se.jsx)("path",{d:"M9 12h6M12 9v6"})]})}),(0,Se.jsx)("button",{type:"button",className:"wf-table-node__action-btn",title:"\u5168\u5C4F\u72EC\u7ACB\u7F16\u8F91\u8868\u683C",onClick:i=>{i.stopPropagation(),o()},children:(0,Se.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,Se.jsx)("path",{d:"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"})})})]}),(0,Se.jsxs)("div",{className:`wf-table-node__card ${t?"wf-table-node__card--selected":""}`,onDoubleClick:()=>o(),children:[(0,Se.jsxs)("div",{className:"wf-table-node__card-head",children:[(0,Se.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{color:"var(--wb-text-secondary)"},children:(0,Se.jsx)("path",{d:"M4 6h16M4 12h10M4 18h16"})}),(0,Se.jsx)("span",{children:l?.title||"\u6587\u672C"})]}),(0,Se.jsx)("div",{className:"wf-table-node__card-body",children:r.length===0?(0,Se.jsx)("div",{className:"wf-table-node__empty-state",children:"\u6682\u65E0\u6570\u636E \u2014 \u70B9\u51FB\u4E0B\u65B9 + \u6DFB\u52A0\u4E00\u884C"}):(0,Se.jsxs)("div",{className:"wf-table-node__preview-list",children:[r.slice(0,3).map((i,s)=>{let u=i.cells[0],c=typeof u=="string"&&u?u:typeof u=="number"?String(u):Array.isArray(u)&&u.length>0?`\u{1F4CE} \u9644\u4EF6 (${u.length})`:"\uFF08\u7A7A\u8BB0\u5F55\uFF09";return(0,Se.jsxs)("div",{className:"wf-table-node__preview-item",children:[(0,Se.jsx)("span",{style:{fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:420},children:c}),(0,Se.jsxs)("span",{style:{color:"var(--wb-text-muted)",fontFamily:"monospace",fontSize:11},children:["#",s+1]})]},s)}),r.length>3&&(0,Se.jsxs)("div",{style:{fontSize:11,color:"var(--wb-text-muted)",textAlign:"center",marginTop:4},children:["... \u5171 ",r.length," \u6761\u8BB0\u5F55"]})]})})]}),(0,Se.jsx)("div",{className:"wf-table-node__corner-handle wf-table-node__corner-handle--nw"}),(0,Se.jsx)("div",{className:"wf-table-node__corner-handle wf-table-node__corner-handle--ne"}),(0,Se.jsx)("div",{className:"wf-table-node__corner-handle wf-table-node__corner-handle--sw"}),(0,Se.jsx)("div",{className:"wf-table-node__corner-handle wf-table-node__corner-handle--se"}),(0,Se.jsx)(Gn,{type:"source",position:ee.Right,id:"table-batch-out",className:"!w-8 !h-8 !bg-white !border-2 !border-slate-300 hover:!border-blue-600 !rounded-full !shadow-sm !flex !items-center !justify-center !text-slate-600 hover:!text-blue-600 !transition-transform hover:!scale-110 !-right-10 !top-1/2 !-translate-y-1/2",children:(0,Se.jsxs)("svg",{width:"15",height:"15",pointerEvents:"none",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,Se.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Se.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})});var $L={type:"table",component:QL,ports:[{side:"out",acceptedTypes:["text","image","video","audio"]}],defaultData:()=>({title:"\u672A\u547D\u540D\u8868\u683C",path:"",columnCount:1,rowCount:0}),palette:{group:"palette.group.data",label:"\u7ED3\u6784\u5316\u6570\u636E\u8868",icon:"table"}};var s_=B(oe(),1);var ae=B(Z(),1),Yh=e=>e==="text"?(0,ae.jsxs)("svg",{className:"wf-node-header__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ae.jsx)("path",{d:"M4 18l4-12h2l4 12M5.5 14h7"}),(0,ae.jsx)("line",{x1:"16",y1:"9",x2:"22",y2:"9"}),(0,ae.jsx)("line",{x1:"16",y1:"13",x2:"20",y2:"13"}),(0,ae.jsx)("line",{x1:"16",y1:"17",x2:"22",y2:"17"})]}):e==="number"?(0,ae.jsxs)("svg",{className:"wf-node-header__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ae.jsx)("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),(0,ae.jsx)("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),(0,ae.jsx)("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),(0,ae.jsx)("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]}):e==="attachment"?(0,ae.jsx)("svg",{className:"wf-node-header__icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,ae.jsx)("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})}):(0,ae.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",background:"var(--wb-text-muted)"}}),JL=()=>{let{document:e,toggleColumnVisibility:t,openColumnModal:a,activeContextMenuColIdx:o,setContextMenuColIdx:n,deleteColumn:r}=Bt();return(0,ae.jsxs)("div",{className:"wf-popover-card wf-popover-field-config",onClick:l=>l.stopPropagation(),children:[(0,ae.jsx)("div",{className:"wf-popover-title",children:"\u5B57\u6BB5\u914D\u7F6E"}),(0,ae.jsx)("div",{className:"wf-field-config-list",children:e.columns.map((l,i)=>(0,ae.jsxs)("div",{className:"wf-field-config-item relative",children:[(0,ae.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[(0,ae.jsx)("div",{style:{cursor:"grab",color:"var(--wb-text-muted)",display:"flex",alignItems:"center"},children:(0,ae.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,ae.jsx)("circle",{cx:"8",cy:"6",r:"1.5"}),(0,ae.jsx)("circle",{cx:"8",cy:"12",r:"1.5"}),(0,ae.jsx)("circle",{cx:"8",cy:"18",r:"1.5"}),(0,ae.jsx)("circle",{cx:"16",cy:"6",r:"1.5"}),(0,ae.jsx)("circle",{cx:"16",cy:"12",r:"1.5"}),(0,ae.jsx)("circle",{cx:"16",cy:"18",r:"1.5"})]})}),Yh(l.type),(0,ae.jsx)("span",{style:{fontSize:"var(--wb-fs-body)",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.title})]}),(0,ae.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[(0,ae.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:l.visible?"\u9690\u85CF\u5B57\u6BB5":"\u663E\u793A\u5B57\u6BB5",onClick:()=>t(i),children:l.visible?(0,ae.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,ae.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,ae.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}):(0,ae.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",style:{color:"var(--wb-text-muted)"},children:[(0,ae.jsx)("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),(0,ae.jsx)("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}),(0,ae.jsxs)("div",{style:{position:"relative"},children:[(0,ae.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",onClick:s=>{s.stopPropagation(),n(o===i?null:i)},children:(0,ae.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,ae.jsx)("circle",{cx:"12",cy:"12",r:"1.5"}),(0,ae.jsx)("circle",{cx:"19",cy:"12",r:"1.5"}),(0,ae.jsx)("circle",{cx:"5",cy:"12",r:"1.5"})]})}),o===i&&(0,ae.jsxs)("div",{className:"wf-popover-context-bubble",onClick:s=>s.stopPropagation(),children:[(0,ae.jsxs)("button",{type:"button",className:"wf-context-menu-item",onClick:()=>{n(null),a("edit",i)},children:[(0,ae.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,ae.jsx)("path",{d:"M12 20h9"}),(0,ae.jsx)("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),(0,ae.jsx)("span",{children:"\u7F16\u8F91"})]}),(0,ae.jsxs)("button",{type:"button",className:"wf-context-menu-item wf-context-menu-item--danger",onClick:()=>{n(null),confirm(`\u786E\u5B9A\u5220\u9664\u5B57\u6BB5 "${l.title}" \u5417\uFF1F`)&&r(i)},children:[(0,ae.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,ae.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,ae.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),(0,ae.jsx)("span",{children:"\u5220\u9664"})]})]})]})]})]},l.id))}),(0,ae.jsx)("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--wb-border)"},children:(0,ae.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"100%",color:"var(--wb-accent)"},onClick:()=>a("add"),children:[(0,ae.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,ae.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,ae.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),(0,ae.jsx)("span",{children:"\u65B0\u589E\u5B57\u6BB5"})]})})]})};var t_=B(oe(),1);var Ee=B(Z(),1),e_={equals:"\u7B49\u4E8E",notEquals:"\u4E0D\u7B49\u4E8E",contains:"\u5305\u542B",notContains:"\u4E0D\u5305\u542B",gt:"\u5927\u4E8E",gte:"\u5927\u4E8E\u7B49\u4E8E",lt:"\u5C0F\u4E8E",lte:"\u5C0F\u4E8E\u7B49\u4E8E",empty:"\u4E3A\u7A7A",notEmpty:"\u4E0D\u4E3A\u7A7A"},I8=["equals","notEquals","contains","notContains","empty","notEmpty"],a_=()=>{let{document:e,setFilterConditions:t}=Bt(),a=e.filter?.conditions||[{columnIndex:0,op:"equals",value:""}],[o,n]=(0,t_.useState)(null),r=(s,u)=>{let c=a.map((f,d)=>d===s?{...f,...u}:f);t(c)},l=()=>{let s=[...a,{columnIndex:0,op:"equals",value:""}];t(s)},i=s=>{let u=a.filter((c,f)=>f!==s);t(u.length===0?[{columnIndex:0,op:"equals",value:""}]:u)};return(0,Ee.jsxs)("div",{className:"wf-popover-card wf-popover-filter",onClick:s=>{s.stopPropagation(),n(null)},children:[(0,Ee.jsx)("div",{className:"wf-popover-title",children:"\u8BBE\u7F6E\u7B5B\u9009\u6761\u4EF6"}),(0,Ee.jsxs)("div",{className:"wf-filter-body",children:[a.map((s,u)=>{let c=e.columns[s.columnIndex]||e.columns[0],f=o===u;return(0,Ee.jsxs)("div",{className:"wf-filter-row",children:[(0,Ee.jsxs)("div",{className:"wf-filter-capsule-select",style:{width:110,flexShrink:0},children:[(0,Ee.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c?.title||"\u5B57\u6BB5"}),(0,Ee.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{color:"var(--wb-text-muted)"},children:(0,Ee.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,Ee.jsxs)("div",{style:{position:"relative",flexShrink:0},children:[(0,Ee.jsxs)("button",{type:"button",className:"wf-filter-capsule-select",style:{width:110},onClick:d=>{d.stopPropagation(),n(f?null:u)},children:[(0,Ee.jsx)("span",{children:e_[s.op]||"\u7B49\u4E8E"}),(0,Ee.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{color:"var(--wb-text-muted)"},children:(0,Ee.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),f&&(0,Ee.jsx)("div",{className:"wf-popover-context-bubble",style:{width:140,left:0,top:40},onClick:d=>d.stopPropagation(),children:I8.map(d=>(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:s.op===d?{fontWeight:600,color:"var(--wb-accent)",background:"var(--wb-accent-soft)"}:{},onClick:()=>{r(u,{op:d}),n(null)},children:[(0,Ee.jsx)("span",{style:{flex:1},children:e_[d]}),s.op===d&&(0,Ee.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{color:"var(--wb-accent)"},children:(0,Ee.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},d))})]}),(0,Ee.jsx)("input",{type:"text",className:"wf-filter-capsule-input",placeholder:"\u8BF7\u8F93\u5165",value:s.value??"",disabled:s.op==="empty"||s.op==="notEmpty",onChange:d=>r(u,{value:d.target.value})}),(0,Ee.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",title:"\u5220\u9664\u6761\u4EF6",onClick:()=>i(u),children:(0,Ee.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ee.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,Ee.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},u)}),(0,Ee.jsx)("div",{style:{paddingTop:4},children:(0,Ee.jsxs)("button",{type:"button",className:"wf-context-menu-item",style:{width:"auto",color:"var(--wb-accent)",display:"inline-flex"},onClick:l,children:[(0,Ee.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ee.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ee.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),(0,Ee.jsx)("span",{children:"\u6DFB\u52A0\u6761\u4EF6"})]})})]})]})};var an=B(Z(),1),k8=[{id:"low",label:"\u4F4E"},{id:"medium",label:"\u4E2D\u7B49"},{id:"tall",label:"\u9AD8"},{id:"extraTall",label:"\u8D85\u9AD8"}],o_=()=>{let{document:e,setRowHeight:t,setActivePopover:a}=Bt(),o=e.rowHeight||"low";return(0,an.jsxs)("div",{className:"wf-popover-card wf-popover-row-height",onClick:n=>n.stopPropagation(),children:[(0,an.jsx)("div",{className:"wf-popover-title",children:"\u884C\u9AD8"}),(0,an.jsx)("div",{style:{padding:"6px"},children:k8.map(n=>{let r=o===n.id;return(0,an.jsxs)("button",{type:"button",className:`wf-row-height-item ${r?"wf-row-height-item--selected":""}`,style:r?{color:"var(--wb-accent)"}:{},onClick:()=>{t(n.id),a(null)},children:[(0,an.jsx)("span",{children:n.label}),r&&(0,an.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"var(--wb-accent)"},children:(0,an.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},n.id)})})]})};var ce=B(Z(),1),n_=()=>{let{document:e,setTitle:t,activePopover:a,setActivePopover:o,undo:n,redo:r,canUndo:l,canRedo:i,closeStage:s}=Bt(),u=a==="field-config",c=a==="filter",f=a==="row-height",d=!!(e.filter?.conditions&&e.filter.conditions.length>0&&e.filter.conditions.some(p=>p.value!==void 0&&p.value!==""));return(0,ce.jsxs)("header",{className:"wf-stage-topbar",onClick:p=>{p.stopPropagation(),o(null)},children:[(0,ce.jsx)("div",{className:"wf-stage-topbar__left",children:(0,ce.jsx)("input",{type:"text",className:"wf-stage-title-input",value:e.title||"\u672A\u547D\u540D\u8868\u683C",onChange:p=>t(p.target.value)})}),(0,ce.jsxs)("div",{className:"wf-stage-topbar__right",children:[(0,ce.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,ce.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${u?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(u?null:"field-config")},children:[(0,ce.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ce.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,ce.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),(0,ce.jsx)("span",{children:"\u5B57\u6BB5\u914D\u7F6E"})]}),u&&(0,ce.jsx)(JL,{})]}),(0,ce.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,ce.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${c?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(c?null:"filter")},children:[(0,ce.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,ce.jsx)("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),(0,ce.jsx)("span",{children:"\u7B5B\u9009"}),d&&(0,ce.jsx)("span",{className:"wf-stage-dot-badge"})]}),c&&(0,ce.jsx)(a_,{})]}),(0,ce.jsxs)("div",{className:"wf-stage-btn-wrapper",children:[(0,ce.jsxs)("button",{type:"button",className:`wf-stage-pill-btn ${f?"wf-stage-pill-btn--active":""}`,onClick:p=>{p.stopPropagation(),o(f?null:"row-height")},children:[(0,ce.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ce.jsx)("line",{x1:"4",y1:"6",x2:"14",y2:"6"}),(0,ce.jsx)("line",{x1:"4",y1:"12",x2:"10",y2:"12"}),(0,ce.jsx)("line",{x1:"4",y1:"18",x2:"14",y2:"18"}),(0,ce.jsx)("polyline",{points:"18 4 21 7 18 10"}),(0,ce.jsx)("line",{x1:"21",y1:"7",x2:"21",y2:"17"}),(0,ce.jsx)("polyline",{points:"18 14 21 17 18 20"})]}),(0,ce.jsx)("span",{children:"\u884C\u9AD8"})]}),f&&(0,ce.jsx)(o_,{})]}),(0,ce.jsx)("div",{className:"wf-stage-divider"}),(0,ce.jsx)("button",{type:"button",disabled:!l(),className:"wf-stage-icon-btn",title:"\u64A4\u9500 (Cmd+Z)",onClick:n,children:(0,ce.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ce.jsx)("path",{d:"M3 7v6h6"}),(0,ce.jsx)("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]})}),(0,ce.jsx)("button",{type:"button",disabled:!i(),className:"wf-stage-icon-btn",title:"\u91CD\u505A (Cmd+Shift+Z)",onClick:r,children:(0,ce.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ce.jsx)("path",{d:"M21 7v6h-6"}),(0,ce.jsx)("path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"})]})}),(0,ce.jsx)("div",{className:"wf-stage-divider"}),(0,ce.jsx)("button",{type:"button",className:"wf-stage-icon-btn",title:"\u5173\u95ED (Esc)",onClick:s,children:(0,ce.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,ce.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,ce.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]})};var Ie=B(Z(),1),r_=()=>{let{document:e,updateCell:t,addRow:a,openColumnModal:o}=Bt(),n=e.columns.filter(i=>i.visible),l=`wf-grid-row--${e.rowHeight||"low"}`;return(0,Ie.jsxs)("div",{className:"wf-grid-container",children:[(0,Ie.jsxs)("table",{className:"wf-grid-table",children:[(0,Ie.jsx)("thead",{children:(0,Ie.jsxs)("tr",{children:[(0,Ie.jsx)("th",{className:"wf-grid-th wf-grid-th--select",children:(0,Ie.jsx)("input",{type:"checkbox",style:{cursor:"pointer"}})}),n.map(i=>(0,Ie.jsx)("th",{style:{width:`${i.width||240}px`},className:"wf-grid-th",children:(0,Ie.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,minWidth:0},children:[Yh(i.type),(0,Ie.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.title})]})},i.id)),(0,Ie.jsx)("th",{className:"wf-grid-th wf-grid-th--plus",title:"\u6DFB\u52A0\u5217",onClick:()=>o("add"),children:(0,Ie.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Ie.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ie.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ie.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})}),(0,Ie.jsx)("th",{className:"wf-grid-th",style:{borderRight:"none"}})]})}),(0,Ie.jsx)("tbody",{children:e.rows.map((i,s)=>(0,Ie.jsxs)("tr",{className:l,children:[(0,Ie.jsx)("td",{className:"wf-grid-td wf-grid-td--select",children:s+1}),n.map(u=>{let c=e.columns.findIndex(p=>p.id===u.id),f=i.cells[c];return(0,Ie.jsx)("td",{className:"wf-grid-td",children:(()=>{if(u.type==="attachment"){let g=Array.isArray(f)?f:[];return(0,Ie.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,overflowX:"auto"},children:[g.map((y,w)=>(0,Ie.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:4,background:"var(--wb-pill-bg)",fontSize:12},children:["\u{1F4CE} ",y.name]},w)),g.length===0&&(0,Ie.jsx)("span",{style:{color:"var(--wb-text-muted)",fontStyle:"italic",fontSize:11},children:"+ \u62D6\u62FD\u6216\u4E0A\u4F20\u9644\u4EF6"})]})}let p=typeof f=="string"||typeof f=="number"?String(f):"";return(0,Ie.jsx)("input",{type:"text",className:"wf-grid-cell-input",value:p,onChange:g=>t(s,c,g.target.value)})})()},u.id)}),(0,Ie.jsx)("td",{className:"wf-grid-td",style:{background:"var(--wb-bg)"}}),(0,Ie.jsx)("td",{className:"wf-grid-td",style:{borderRight:"none"}})]},s))})]}),(0,Ie.jsx)("div",{style:{padding:"10px 16px",borderBottom:"1px solid var(--wb-border)",background:"var(--wb-surface)"},children:(0,Ie.jsxs)("button",{type:"button",className:"wf-stage-pill-btn",onClick:()=>a(),children:[(0,Ie.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ie.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ie.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),(0,Ie.jsx)("span",{children:"\u6DFB\u52A0\u884C"})]})})]})};var tr=B(oe(),1);var Be=B(Z(),1),l_=[{type:"text",label:"\u6587\u672C"},{type:"number",label:"\u6570\u5B57"},{type:"attachment",label:"\u9644\u4EF6"}],i_=()=>{let{modalState:e,closeColumnModal:t,addColumn:a,updateColumn:o}=Bt(),[n,r]=(0,tr.useState)(e.initialTitle),[l,i]=(0,tr.useState)(e.initialType),[s,u]=(0,tr.useState)(!1),c=(0,tr.useRef)(null);if((0,tr.useEffect)(()=>{e.isOpen&&(r(e.initialTitle),i(e.initialType),u(!1),setTimeout(()=>c.current?.focus(),50))},[e.isOpen,e.initialTitle,e.initialType]),!e.isOpen)return null;let f=p=>{p&&p.preventDefault();let g=n.trim();if(!g){alert("\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D");return}e.mode==="add"?a(g,l):e.mode==="edit"&&e.targetColumnIndex!==null&&o(e.targetColumnIndex,g,l),t()},d=l_.find(p=>p.type===l)?.label||"\u6587\u672C";return(0,Be.jsx)("div",{className:"wf-modal-backdrop",onClick:p=>{p.target===p.currentTarget&&t()},children:(0,Be.jsxs)("div",{className:"wf-modal-dialog",onClick:p=>p.stopPropagation(),children:[(0,Be.jsxs)("div",{className:"wf-modal-header",children:[(0,Be.jsx)("h3",{className:"wf-modal-title",children:e.mode==="add"?"\u6DFB\u52A0\u5217":"\u7F16\u8F91\u5217"}),(0,Be.jsx)("button",{type:"button",className:"wf-field-config-subtle-btn",style:{width:28,height:28},onClick:t,children:(0,Be.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Be.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,Be.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,Be.jsxs)("form",{onSubmit:f,style:{display:"flex",flexDirection:"column",gap:16},children:[(0,Be.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[(0,Be.jsx)("label",{style:{fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:"\u5B57\u6BB5\u540D"}),(0,Be.jsx)("input",{ref:c,type:"text",className:"wf-modal-input",placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",value:n,onChange:p=>r(p.target.value)})]}),(0,Be.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,position:"relative"},children:[(0,Be.jsx)("label",{style:{fontSize:12,fontWeight:500,color:"var(--wb-text-secondary)"},children:"\u5B57\u6BB5\u7C7B\u578B"}),(0,Be.jsxs)("div",{className:"wf-filter-capsule-select",style:{height:42,padding:"0 14px"},onClick:()=>u(!s),children:[(0,Be.jsx)("span",{style:{fontSize:"var(--wb-fs-title)"},children:d}),(0,Be.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{color:"var(--wb-text-muted)"},children:(0,Be.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),s&&(0,Be.jsx)("div",{className:"wf-popover-context-bubble",style:{width:"100%",top:72,left:0},children:l_.map(p=>(0,Be.jsxs)("button",{type:"button",className:"wf-row-height-item",style:l===p.type?{fontWeight:600,color:"var(--wb-accent)"}:{},onClick:()=>{i(p.type),u(!1)},children:[(0,Be.jsx)("span",{children:p.label}),l===p.type&&(0,Be.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{color:"var(--wb-accent)"},children:(0,Be.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},p.type))})]}),(0,Be.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:10,marginTop:12},children:[(0,Be.jsx)("button",{type:"button",className:"wf-modal-btn-cancel",onClick:t,children:"\u53D6\u6D88"}),(0,Be.jsx)("button",{type:"submit",className:"wf-modal-btn-primary",children:"\u786E\u5B9A"})]})]})]})})};var vi=B(Z(),1),u_=()=>{let{isStageOpen:e,closeStage:t,setActivePopover:a}=Bt();return(0,s_.useEffect)(()=>{let o=n=>{n.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e,t]),e?(0,vi.jsxs)("div",{className:"wf-stage-overlay",onClick:()=>a(null),children:[(0,vi.jsx)(n_,{}),(0,vi.jsx)(r_,{}),(0,vi.jsx)(i_,{})]}):null};var Rt=B(Z(),1);Fh(jL);Fh($L);var M8=vL(),E8={animated:KS},d_={maxZoom:1},T8={x:0,y:0,zoom:1},A8=[1,2],N8=96,D8=({catalog:e,onExecuteNodeIds:t,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l})=>{let{screenToFlowPosition:i,fitView:s,zoomTo:u}=xa(),{nodes:c,edges:f,onNodesChange:d,onEdgesChange:p}=BS(),g=be(Q=>Q.applyCanvasInputMutation),y=be(Q=>Q.setNodes),w=be(Q=>Q.setSelectedElement),h=be(Q=>Q.pushHistory),x=be(Q=>Q.undo),m=be(Q=>Q.redo),b=PS(),C=HS(),[S,v]=(0,Je.useState)(null),[_,I]=(0,Je.useState)(!1),[A,T]=(0,Je.useState)(!1),[P,H]=(0,Je.useState)(!1),[L,M]=(0,Je.useState)(!1),[E,k]=(0,Je.useState)(void 0),[N,R]=(0,Je.useState)("select"),D=(0,Je.useRef)(0),q=(0,Je.useMemo)(()=>c.some(Q=>Q.selected),[c]),U=bL(y,w),W=_e(),Y=W("menu.generateFromNode"),{menuState:j,onConnectStart:ie,onConnectEnd:J,onMenuSelect:F,onMenuClose:$}=mL({onReject:v});(0,Je.useEffect)(()=>{h()},[c,f,h]);let ue=(0,Je.useMemo)(()=>e?c.map(Q=>({...Q,data:{...Q.data,__catalog:e}})):c,[c,e]),se=(0,Je.useCallback)(Q=>{let Ue=g({addEdges:[Q]});if(Ue.status==="rejected"){let et=W(Tf(Ue.reasonCode));v(et),fi.warning(et)}else v(null)},[g,W]),te=(0,Je.useCallback)(Q=>{let Ue=be.getState();return sL(Q,Ue.nodes,Ue.edges)},[]),ne=(0,Je.useCallback)((Q,Ue)=>{let et=D.current,Sa=Ue??{x:120+et%3*420,y:120+Math.floor(et/3)*360};if(Q==="table"){let Bf={id:`node_tbl_${Date.now()}`,type:"table",position:Sa,data:{title:"\u672A\u547D\u540D\u8868\u683C",status:"idle"},selected:!0};D.current+=1,y(Pf=>Bh(Pf,[Bf]));return}let or=Zr(Q,Sa);or.nodes.length!==0&&(D.current+=1,y(nn=>Bh(nn,or.nodes)))},[y]),ye=(0,Je.useCallback)(Q=>{let Ue=Q.nodes.map(Sa=>Sa.id),et=Q.edges.map(Sa=>Sa.id);Ue.length===0&&et.length===0||g({removeNodeIds:Ue,removeEdgeIds:et})},[g]),{menu:X,handleNodeContextMenu:re,handlePaneContextMenu:pe,handleSelectionContextMenu:ht,closeMenu:_t,handleMenuAction:Pt,handleAddNodeFromMenu:Va}=yL({screenToFlowPosition:i,setNodes:y,copySelectedNodes:U.copySelectedNodes,pasteNodes:U.pasteNodes,duplicateSelectedNodes:U.duplicateSelectedNodes,deleteSelectedNodes:U.deleteSelectedNodes,selectAllNodes:U.selectAllNodes,clearSelection:U.clearSelection,undo:x,redo:m,onExecuteNodeIds:t,onAddNode:ne}),ar=(0,Je.useCallback)(Q=>{let Ue=Q.type==="video"?"video":Q.type==="image"?"image":"text",et=D.current++,Sa={x:200+et%4*50,y:200+et%4*40},nn=Zr(Ue,Sa,{title:Q.name,content:Q.path,previewUrl:Q.previewUrl,status:"ready"}).nodes[0];nn&&(g({addNodes:[nn]}),w("node",nn.id),fi.success(W("toolbar.assets")+": "+Q.name))},[g,w,W]);iL({onCopy:U.copySelectedNodes,onPaste:()=>U.pasteNodes(),onSelectAll:U.selectAllNodes,onDeleteSelected:U.deleteSelectedNodes,onClearSelection:U.clearSelection,onDuplicate:U.duplicateSelectedNodes,onUndo:x,onRedo:m,hasSelection:q,onToggleAssets:()=>T(Q=>!Q),onToggleShortcuts:()=>H(Q=>!Q),onToggleMinimap:()=>I(Q=>!Q),onToggleAddMenu:()=>M(Q=>!Q),onSetPointerMode:Q=>R(Q),onFitView:()=>s(d_),onResetZoom:()=>u(1),onCategoryKey:Q=>{T(!0),k(Q)}});let _o=(0,Je.useCallback)((Q,Ue)=>{w("node",Ue.id)},[w]),Io=(0,Je.useCallback)(()=>{w("none",null),_t()},[w,_t]),ra=(0,Je.useCallback)(()=>{y(Q=>Q.map((Ue,et)=>({...Ue,position:{x:120+et%3*440,y:120+Math.floor(et/3)*360}})))},[y]);return(0,Rt.jsxs)("div",{className:"wf-canvas-editor",style:{position:"relative",height:"100%"},children:[(0,Rt.jsx)($C,{nodes:ue,edges:f,onNodesChange:d,onEdgesChange:p,onConnect:se,isValidConnection:te,onConnectStart:ie,onConnectEnd:J,onNodeClick:_o,onPaneClick:Io,onNodeContextMenu:re,onPaneContextMenu:pe,onSelectionContextMenu:ht,onDelete:ye,nodeTypes:M8,edgeTypes:E8,fitView:!0,fitViewOptions:d_,defaultViewport:T8,minZoom:zh.minZoom,maxZoom:zh.maxZoom,selectionKeyCode:null,multiSelectionKeyCode:"Meta",panOnDrag:N==="pan"?!0:A8,panOnScroll:!0,panOnScrollMode:Ka.Free,zoomOnScroll:!0,zoomOnPinch:!0,selectionOnDrag:N==="select",selectionMode:Qo.Partial,defaultEdgeOptions:xf,connectOnClick:!1,connectionRadius:N8,onlyRenderVisibleElements:!0,children:(0,Rt.jsx)(aS,{color:"var(--wb-grid-dot, #C9CBD6)",gap:48,size:3.5,variant:ho.Dots})}),(0,Rt.jsx)($S,{isMinimapOpen:_,onToggleMinimap:()=>I(Q=>!Q),onAlignGrid:ra,onStartExecution:a,onPauseExecution:o,onResumeExecution:n,onCancelExecution:r,onResetExecution:l}),_&&(0,Rt.jsx)("div",{className:"wf-minimap-popover nodrag nopan",children:(0,Rt.jsx)(rS,{pannable:!0,zoomable:!0})}),(0,Rt.jsx)(QS,{onAddNode:ne,onUndo:x,onRedo:m,canUndo:b,canRedo:C,pointerMode:N,onPointerModeChange:R,onToggleAssets:()=>T(Q=>!Q),onToggleShortcuts:()=>H(Q=>!Q),isAssetsOpen:A,isShortcutsOpen:P,isAddMenuOpen:L,onToggleAddMenu:()=>M(Q=>!Q)}),(0,Rt.jsx)(JS,{isOpen:A,onClose:()=>T(!1),onInsertAsset:ar,selectedCategoryIndex:E}),(0,Rt.jsx)(eL,{isOpen:P,onClose:()=>H(!1)}),(0,Rt.jsx)(rL,{x:X.x,y:X.y,visible:X.visible,context:X.context,onClose:_t,onAction:Pt,onAddNode:Va,canUndo:b,canRedo:C,hasClipboard:U.hasClipboard,hasSelection:q}),(0,Rt.jsx)(Ef,{visible:j.visible,x:j.x,y:j.y,title:Y,options:j.options,onSelect:F,onClose:$}),(0,Rt.jsx)(u_,{}),S&&(0,Rt.jsx)("div",{className:"wf-rejected-toast",children:S})]})},R8=e=>(0,Rt.jsx)(Sh,{children:(0,Rt.jsx)(D8,{...e})}),c_=R8;var ct=B(oe(),1);var ro="/omnimux-workflow";var Ca={manifest:`${ro}/api/manifest`,canvasJs:`${ro}/canvas.js`,workspaces:`${ro}/api/workspaces`,workspace:e=>`${ro}/api/workspaces/${e}`,workspaceVersion:e=>`${ro}/api/workspaces/${e}/version`,capabilities:`${ro}/api/capabilities`,media:`${ro}/media`,executions:e=>`${ro}/api/workspaces/${e}/executions`,execution:(e,t)=>`${ro}/api/workspaces/${e}/executions/${t}`,executionAction:(e,t,a)=>`${ro}/api/workspaces/${e}/executions/${t}/${a}`,executionEvents:(e,t)=>`${ro}/api/workspaces/${e}/executions/${t}/events`};async function Lo(e,t={}){let a=await fetch(e,{method:t.method??"GET",headers:t.body===void 0?void 0:{"Content-Type":"application/json"},body:t.body===void 0?void 0:JSON.stringify(t.body)}),o={};try{o=await a.json()}catch{o={error:`HTTP ${String(a.status)}`}}return{ok:a.ok,status:a.status,body:o}}function f_(){return Lo(Ca.capabilities)}function p_(){return Lo(Ca.workspaces)}function Zh(e,t){return Lo(Ca.workspaces,{method:"POST",body:{name:e,id:t}})}function Du(e){return Lo(Ca.workspace(encodeURIComponent(e)))}function m_(e){return Lo(Ca.workspaceVersion(encodeURIComponent(e)))}function g_(e,t){return Lo(Ca.workspace(encodeURIComponent(e)),{method:"PUT",body:t})}function h_(e,t={}){return Lo(Ca.executions(encodeURIComponent(e)),{method:"POST",body:t})}function x_(e){return Lo(Ca.executions(encodeURIComponent(e)))}function b_(e,t){return Lo(Ca.execution(encodeURIComponent(e),encodeURIComponent(t)))}function y_(e,t,a){return Lo(Ca.executionAction(encodeURIComponent(e),encodeURIComponent(t),a),{method:"POST",body:{}})}var w_=new Set(["pending","running","paused"]),z8=new Set(["completed","error","cancelled"]);function Ru(e,t){let a=be.getState();a.nodes.find(n=>n.id===e)&&a.setNodes(n=>n.map(r=>r.id===e?{...r,data:{...r.data,...t}}:r))}function v_(e,t){let a=(0,ct.useRef)(null),o=(0,ct.useRef)(e);o.current=e;let n=(0,ct.useRef)(t?.onBeforeStart);n.current=t?.onBeforeStart;let r=(0,ct.useCallback)(()=>{a.current&&(a.current.close(),a.current=null)},[]),l=(0,ct.useCallback)((w,h)=>{We.getState().setExecution({status:w,error:h,progress:{...We.getState().progress,percentage:w==="completed"?100:We.getState().progress.percentage}})},[]),i=(0,ct.useCallback)((w,h)=>{let x;try{x=JSON.parse(h)}catch{return}let m=We.getState();switch(w){case"execution_start":{m.setExecution({status:"running",error:null,progress:{total:x.totalNodes??0,completed:0,running:0,pending:x.totalNodes??0,percentage:0}});break}case"node_start":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"running"),m.setExecution({progress:{...m.progress,running:m.progress.running+1,pending:Math.max(0,m.progress.pending-1)}}),Ru(x.nodeId,{executionStatus:"running",executionError:void 0});break}case"node_complete":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"completed"),m.setExecution({progress:{...m.progress,completed:m.progress.completed+1,running:Math.max(0,m.progress.running-1),percentage:x.progress??m.progress.percentage}});let b=x.output??{},C={executionStatus:"completed",executionError:void 0};if(b.text&&(C.generatedContent=b.text),b.mediaAssets&&b.mediaAssets.length>0){let S=b.mediaAssets[0];C.mediaAssets=b.mediaAssets,S.type==="image"&&(C.mediaUrl=S.url),C.taskId=`exec-${x.executionId??""}`}Ru(x.nodeId,C);break}case"node_error":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"error"),m.setExecution({progress:{...m.progress,running:Math.max(0,m.progress.running-1)}}),Ru(x.nodeId,{executionStatus:"error",executionError:x.error??Jo("error.nodeExecutionFailed")});break}case"node_skipped":{if(!x.nodeId)break;m.setNodeStatus(x.nodeId,"skipped"),Ru(x.nodeId,{executionStatus:"skipped",executionError:void 0});break}case"execution_paused":{m.setExecution({status:"paused"});break}case"execution_resumed":{m.setExecution({status:"running"});break}case"execution_complete":{l("completed",null),r();break}case"execution_error":{l("error",x.error??Jo("error.executionFailed")),r();break}case"execution_cancelled":{l("cancelled",null),r();break}default:break}},[l,r]),s=(0,ct.useCallback)(w=>{r();let h=o.current;if(!h)return;let x=new EventSource(Ca.executionEvents(encodeURIComponent(h),encodeURIComponent(w)));a.current=x;let m=["execution_start","node_start","node_progress","node_complete","node_error","node_skipped","execution_paused","execution_resumed","execution_complete","execution_error","execution_cancelled"];for(let b of m)x.addEventListener(b,C=>{i(b,C.data)});x.onerror=()=>{let b=We.getState().status;z8.has(b)&&r()}},[r,i]),u=(0,ct.useCallback)(w=>{let h=We.getState();h.setExecution({executionId:w.id,status:w.status,error:w.error,progress:{total:w.progress.total,completed:w.progress.completed,running:w.progress.running,pending:w.progress.pending,percentage:w.progress.percentage}});for(let[x,m]of Object.entries(w.nodeStates??{})){h.setNodeStatus(x,m.status);let b={executionStatus:m.status};m.status==="error"&&m.error&&(b.executionError=m.error);let C=w.nodeOutputs?.[x];C&&(C.text&&(b.generatedContent=C.text),C.mediaAssets&&C.mediaAssets.length>0&&(b.mediaAssets=C.mediaAssets,C.mediaAssets[0]&&C.mediaAssets[0].type==="image"&&(b.mediaUrl=C.mediaAssets[0].url))),Ru(x,b)}},[]),c=(0,ct.useCallback)(async(w={})=>{let h=o.current;if(!h)return;if(r(),We.getState().resetExecution(),We.getState().setExecution({status:"pending"}),n.current)try{await n.current()}catch{}let x=await h_(h,{mode:w.mode??"full",nodeIds:w.nodeIds});if(!x.ok||!x.body.execution){We.getState().setExecution({status:"error",error:x.body.message??Jo("error.createExecutionFailed")});return}We.getState().setExecution({executionId:x.body.execution.id}),s(x.body.execution.id)},[r,s]),f=(0,ct.useCallback)(async w=>{let h=o.current,{executionId:x}=We.getState();if(!h||!x)return;let m=await y_(h,x,w);!m.ok&&m.body.message&&We.getState().setExecution({error:m.body.message})},[]),d=(0,ct.useCallback)(()=>f("pause"),[f]),p=(0,ct.useCallback)(()=>f("resume"),[f]),g=(0,ct.useCallback)(()=>f("cancel"),[f]),y=(0,ct.useCallback)(()=>{r(),We.getState().resetExecution()},[r]);return(0,ct.useEffect)(()=>{if(!e)return;let w=!1;return(async()=>{try{let h=await x_(e);if(w||!h.ok)return;let x=(h.body.executions??[]).find(b=>w_.has(b.status));if(!x)return;let m=await b_(e,x.id);if(w||!m.ok||!m.body.execution)return;u(m.body.execution),w_.has(m.body.execution.status)&&s(x.id)}catch{}})(),()=>{w=!0}},[e,u,s]),(0,ct.useEffect)(()=>(We.getState().setStartNodeExecution(h=>{c({mode:"subset",nodeIds:[h]})}),()=>{We.getState().setStartNodeExecution(null)}),[c]),(0,ct.useEffect)(()=>r,[r]),{startExecution:c,pause:d,resume:p,cancel:g,reset:y}}var Qr=B(oe(),1);function C_(e={}){let t=e.workspaceId,[a,o]=(0,Qr.useState)({phase:"loading"}),[n,r]=(0,Qr.useState)(()=>Nu()),l=be(c=>c.hydrateGraph),i=be(c=>c.resetStore),s=be(c=>c.nodes.length),u=(0,Qr.useRef)(e.beforeReset);return u.current=e.beforeReset,(0,Qr.useEffect)(()=>{let c=!1;return o({phase:"loading"}),(async()=>{try{if(f_().then(g=>{!c&&g.ok&&(r(g.body),VL(g.body))}),t){let g=await Du(t);if(c)return;if(g.ok&&g.body.workspace){l(g.body.workspace.nodes,g.body.workspace.edges),o({phase:"ready",workspace:g.body.workspace});return}let y=await Zh("\u5DE5\u4F5C\u6D41",t);if(c)return;if(!y.ok||!y.body.workspace)throw new Error(y.body.message??Jo("error.createWorkspaceFailed"));l(y.body.workspace.nodes,y.body.workspace.edges),o({phase:"ready",workspace:y.body.workspace});return}let f=await p_();if(c)return;let d=f.body.workspaces?.[0]?.id;if(!d){let g=await Zh("\u6211\u7684\u5DE5\u4F5C\u6D41");if(c)return;if(!g.ok||!g.body.workspace)throw new Error(g.body.message??Jo("error.createWorkspaceFailed"));d=g.body.workspace.id}let p=await Du(d);if(c)return;if(!p.ok||!p.body.workspace)throw new Error(p.body.message??Jo("error.loadWorkspaceFailed"));l(p.body.workspace.nodes,p.body.workspace.edges),o({phase:"ready",workspace:p.body.workspace})}catch(f){c||o({phase:"error",message:f instanceof Error?f.message:String(f)})}})(),()=>{c=!0,u.current?.(),i()}},[t,l,i]),{boot:a,setBoot:o,catalog:n,nodeCount:s}}var je=B(oe(),1);function Of(e){return e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{}}function Wh(e){return e.map(t=>{let a=t,o=Of(a.data);delete o.__catalog;let n={id:a.id,type:a.type,position:a.position,data:o,selected:!1};return typeof a.draggable=="boolean"&&(n.draggable=a.draggable),typeof a.selectable=="boolean"&&(n.selectable=a.selectable),typeof a.deletable=="boolean"&&(n.deletable=a.deletable),typeof a.width=="number"&&(n.width=a.width),typeof a.height=="number"&&(n.height=a.height),typeof a.parentId=="string"&&(n.parentId=a.parentId),typeof a.zIndex=="number"&&(n.zIndex=a.zIndex),a.style&&typeof a.style=="object"&&(n.style=Of(a.style)),n})}function jh(e){return e.map(t=>{let a=t,o={id:a.id,source:a.source,target:a.target};return a.sourceHandle!==void 0&&(o.sourceHandle=a.sourceHandle),a.targetHandle!==void 0&&(o.targetHandle=a.targetHandle),typeof a.type=="string"&&(o.type=a.type),typeof a.animated=="boolean"&&(o.animated=a.animated),a.data&&typeof a.data=="object"&&(o.data=Of(a.data)),a.style&&typeof a.style=="object"&&(o.style=Of(a.style)),o})}function on(e,t){return JSON.stringify({nodes:Wh(e),edges:jh(t)})}var O8=1e3,B8=2500,P8=3e3;function Ci(){let{nodes:e,edges:t}=be.getState(),a=Eh(e,t);return{nodes:a.nodes,edges:a.edges}}function S_(e,t={}){let a=t.enabled!==!1,[o,n]=(0,je.useState)("idle"),[r,l]=(0,je.useState)(!1),i=(0,je.useRef)(e),s=(0,je.useRef)(0),u=(0,je.useRef)(""),c=(0,je.useRef)(0),f=(0,je.useRef)(""),d=(0,je.useRef)(null),p=(0,je.useRef)(null),g=(0,je.useRef)(!1),y=(0,je.useRef)(a);y.current=a;let w=(0,je.useRef)(t.onSaved);w.current=t.onSaved,(0,je.useEffect)(()=>{i.current=e,e&&(s.current=e.version,f.current!==e.id&&(f.current=e.id,u.current=on(e.nodes,e.edges),c.current=e.nodes.length,l(!1),n("idle")))},[e?.id,e?.version]);let h=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=(0,je.useCallback)(async(v,_,I=!1)=>{let A=i.current;if(!A||!I&&!y.current||g.current)return;let T=Lf({lastSavedNodeCount:c.current,nextNodes:v.nodes,nextEdges:v.edges,cause:_,lastSavedSignature:u.current,nextSignature:on(v.nodes,v.edges)});if(!T.persist||!T.snapshot)return;let{nodes:P,edges:H}=T.snapshot,L=A.name;g.current=!0,n("saving");try{let M=await g_(A.id,{name:L,nodes:Wh(P),edges:jh(H),expectedVersion:s.current});if(M.status===409){typeof M.body.current=="number"&&(s.current=M.body.current),n("conflict");return}M.ok&&M.body.workspace?(s.current=M.body.workspace.version,u.current=on(P,H),c.current=P.length,l(!1),n("saved"),h(),p.current=setTimeout(()=>{n(E=>E==="saved"?"idle":E)},B8),w.current?.(M.body.workspace)):M.status===409?n("conflict"):n("error")}catch{n("error")}finally{g.current=!1}},[]);(0,je.useEffect)(()=>{if(!a)return;let v=(I="autosave")=>{if(!i.current||!y.current)return;let T=Ci(),H=on(T.nodes,T.edges)!==u.current;if(l(H),!H){d.current&&(clearTimeout(d.current),d.current=null),n(k=>k==="pending"?"idle":k);return}let L=Mu(T.nodes.length,I);if(!Mh({lastSavedNodeCount:c.current,nextNodeCount:T.nodes.length,cause:L})){d.current&&(clearTimeout(d.current),d.current=null),l(!1),n(k=>k==="pending"?"idle":k);return}n(k=>k==="saving"||k==="conflict"?k:"pending"),d.current&&clearTimeout(d.current);let M={nodes:T.nodes,edges:T.edges},E=L;d.current=setTimeout(()=>{d.current=null,x(M,E)},O8)},_=be.subscribe(()=>{v("autosave")});return()=>{_(),d.current&&(clearTimeout(d.current),d.current=null)}},[x,a]),(0,je.useEffect)(()=>{if(!a)return;let v=()=>{if(!y.current||!i.current)return;let I=Ci(),A=Mu(I.nodes.length,"flush"),T=Lf({lastSavedNodeCount:c.current,nextNodes:I.nodes,nextEdges:I.edges,cause:A,lastSavedSignature:u.current,nextSignature:on(I.nodes,I.edges)});!T.persist||!T.snapshot||x(T.snapshot,A)};return window.addEventListener("pagehide",v),()=>{window.removeEventListener("pagehide",v),v(),h()}},[x,a]);let m=(0,je.useCallback)(async()=>{d.current&&(clearTimeout(d.current),d.current=null);let v=Ci();await x(v,Mu(v.nodes.length,"autosave"))},[x]),b=(0,je.useCallback)(()=>{if(d.current&&(clearTimeout(d.current),d.current=null),!i.current)return;let _=Ci(),I="flush",A=Lf({lastSavedNodeCount:c.current,nextNodes:_.nodes,nextEdges:_.edges,cause:I,lastSavedSignature:u.current,nextSignature:on(_.nodes,_.edges)});!A.persist||!A.snapshot||x(A.snapshot,I,!0)},[x]),C=(0,je.useCallback)(async()=>{let v=Ci();await x(v,Mu(v.nodes.length,"autosave"))},[x]),S=(0,je.useCallback)(async()=>{let v=i.current;if(!v)return;let _=await Du(v.id);if(!_.ok||!_.body.workspace){n("error");return}let I=_.body.workspace;s.current=I.version,u.current=on(I.nodes,I.edges),c.current=I.nodes.length,be.getState().hydrateGraph(I.nodes,I.edges),l(!1),n("idle"),w.current?.(I)},[]);return(0,je.useEffect)(()=>{if(!a)return;let v=!1,_=async()=>{if(v||!y.current||typeof document<"u"&&document.visibilityState==="hidden")return;let A=i.current;if(!(!A||g.current)){v=!0;try{let T=await m_(A.id);if(!T.ok||typeof T.body.version!="number"||T.body.version<=s.current)return;let P=Ci();if(on(P.nodes,P.edges)!==u.current){s.current=T.body.version,n("conflict");return}await S()}catch{}finally{v=!1}}},I=setInterval(()=>{_()},P8);return()=>clearInterval(I)},[a,S]),{status:o,isDirty:r,saveNow:m,flushPendingSave:b,resolveConflict:C,reloadFromServer:S}}var Yt=B(Z(),1),H8=({locale:e,workspaceId:t})=>{let a=_e(),o=(0,Si.useRef)(()=>{}),{boot:n,setBoot:r,catalog:l}=C_({workspaceId:t,beforeReset:()=>{o.current()}});(0,Si.useEffect)(()=>{WS(e)},[e]);let i=n.phase==="ready"?n.workspace:null,s=(0,Si.useCallback)(f=>{r(d=>d.phase==="ready"?{phase:"ready",workspace:f}:d)},[r]),u=S_(i,{onSaved:s,enabled:n.phase==="ready"});o.current=u.flushPendingSave;let c=v_(i?i.id:null,{onBeforeStart:u.saveNow});return n.phase==="loading"?(0,Yt.jsx)("div",{className:"wf-canvas-root",children:(0,Yt.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--wb-text-muted)"},children:a("app.loading")})}):n.phase==="error"?(0,Yt.jsx)("div",{className:"wf-canvas-root",children:(0,Yt.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,fontSize:13,color:"var(--wb-text-muted)"},children:[(0,Yt.jsx)("span",{children:n.message}),(0,Yt.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>window.location.reload(),children:a("app.retry")})]})}):(0,Yt.jsxs)("div",{className:"wf-canvas-root",children:[u.status==="conflict"?(0,Yt.jsxs)("div",{className:"wf-canvas-conflict-banner",role:"alert",children:[(0,Yt.jsx)("span",{children:a("app.conflictBanner")}),(0,Yt.jsx)("button",{type:"button",className:"wf-canvas-header__button",onClick:()=>{u.resolveConflict()},children:a("app.conflictOverwrite")}),(0,Yt.jsx)("button",{type:"button",className:"wf-canvas-header__button wf-canvas-header__button--ghost",onClick:()=>{u.reloadFromServer()},children:a("app.conflictReload")})]}):null,(0,Yt.jsx)("main",{className:"wf-canvas-main",children:(0,Yt.jsx)(c_,{catalog:l,onExecuteNodeIds:f=>{c.startExecution({mode:"subset",nodeIds:f})},onStartExecution:()=>{c.startExecution({mode:"full"})},onPauseExecution:()=>{c.pause()},onResumeExecution:()=>{c.resume()},onCancelExecution:()=>{c.cancel()},onResetExecution:c.reset})})]})},Kh=H8;var L_=`/* this gets exported as style.css and can be used for the default theming */
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
`;var __=`/**
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

`;var I_=`/**
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
  background: #10b981;
  box-shadow: 0 0 4px #10b981;
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




`;var k_=`/**
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
  z-index: 300;
  background: var(--wb-surface, #ffffff);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  font-family: var(--wb-font-family);
}

.wf-stage-topbar {
  height: 52px;
  border-bottom: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  background: var(--wb-surface, #ffffff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  position: relative;
  z-index: 40;
}

.wf-stage-topbar__left {
  display: flex;
  align-items: center;
}

.wf-stage-title-input {
  font-size: 16px;
  font-weight: 600;
  color: var(--wb-text-primary, #1a1d26);
  border: 1px solid transparent;
  padding: 4px 8px;
  border-radius: var(--wb-pill-radius, 8px);
  background: transparent;
  outline: none;
  transition: all 120ms ease;
  font-family: inherit;
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
  top: 40px;
  background: var(--wb-surface, #ffffff);
  border: 1px solid var(--wb-border-strong, rgba(15, 20, 32, 0.12));
  border-radius: var(--wb-header-radius, 16px);
  box-shadow: var(--wb-shadow-pop, 0 12px 32px rgba(15, 20, 32, 0.16));
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: wf-popover-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-popover-in {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.wf-popover-title {
  padding: 14px 18px 12px 18px;
  font-size: var(--wb-fs-title, 14px);
  font-weight: 600;
  color: var(--wb-text-primary, #1a1d26);
  border-bottom: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
}

/* \u5B57\u6BB5\u914D\u7F6E\u9762\u677F */
.wf-popover-field-config {
  left: 0;
  width: 320px;
}

.wf-field-config-list {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 360px;
  overflow-y: auto;
}

.wf-field-config-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: var(--wb-pill-bg, #f2f3f5);
  border-radius: var(--wb-pill-radius, 8px);
  transition: background 120ms ease;
}

.wf-field-config-item:hover {
  background: var(--wb-pill-hover, #e8eaed);
}

.wf-field-config-subtle-btn {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--wb-text-secondary, #5f6472);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 120ms ease, color 120ms ease;
}

.wf-field-config-subtle-btn:hover {
  background: rgba(0, 0, 0, 0.08);
  color: var(--wb-text-primary, #1a1d26);
}

.wf-popover-context-bubble {
  position: absolute;
  right: 0;
  top: 28px;
  width: 110px;
  background: var(--wb-surface, #ffffff);
  border: 1px solid var(--wb-border-strong, rgba(15, 20, 32, 0.12));
  border-radius: var(--wb-pill-radius, 12px);
  box-shadow: var(--wb-shadow-pop, 0 8px 24px rgba(15, 20, 32, 0.12));
  z-index: 120;
  padding: 4px;
  display: flex;
  flex-direction: column;
}

.wf-context-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 500;
  color: var(--wb-text-primary, #1a1d26);
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background 120ms ease;
}

.wf-context-menu-item:hover {
  background: var(--wb-pill-bg, #f2f3f5);
}

.wf-context-menu-item--danger {
  color: var(--wb-danger, #ef4444);
}
.wf-context-menu-item--danger:hover {
  background: var(--wb-danger-soft, rgba(239, 68, 68, 0.1));
}

/* \u7B5B\u9009\u9762\u677F */
.wf-popover-filter {
  left: -80px;
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

.wf-filter-capsule-select {
  height: 36px;
  padding: 0 12px;
  border-radius: var(--wb-pill-radius, 8px);
  border: 1px solid var(--wb-border-strong, rgba(15, 20, 32, 0.12));
  background: var(--wb-surface, #ffffff);
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-primary, #1a1d26);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  outline: none;
  transition: border-color 120ms ease, box-shadow 120ms ease;
}

.wf-filter-capsule-select:hover {
  border-color: var(--wb-border-strong, rgba(15, 20, 32, 0.24));
}

.wf-filter-capsule-input {
  flex: 1;
  height: 36px;
  padding: 0 12px;
  border-radius: var(--wb-pill-radius, 8px);
  border: 1px solid var(--wb-border-strong, rgba(15, 20, 32, 0.12));
  background: var(--wb-surface, #ffffff);
  font-size: var(--wb-fs-body, 13px);
  color: var(--wb-text-primary, #1a1d26);
  outline: none;
  transition: border-color 120ms ease, box-shadow 120ms ease;
  min-width: 0;
}

.wf-filter-capsule-input:focus {
  border-color: var(--wb-accent, #165dff);
  box-shadow: 0 0 0 2px var(--wb-accent-soft, rgba(22, 93, 255, 0.15));
}

/* \u884C\u9AD8\u9762\u677F */
.wf-popover-row-height {
  right: 0;
  width: 180px;
}

.wf-row-height-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  font-size: var(--wb-fs-title, 14px);
  color: var(--wb-text-primary, #1a1d26);
  border-radius: var(--wb-pill-radius, 8px);
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background 120ms ease;
}

.wf-row-height-item:hover {
  background: var(--wb-pill-bg, #f2f3f5);
}

.wf-row-height-item--selected {
  font-weight: 600;
  background: var(--wb-pill-bg, #f2f3f5);
}


/* ==================== 4. \u7535\u5B50\u8868\u683C\u7F51\u683C\u533A (DataGrid) ==================== */

.wf-grid-container {
  flex: 1;
  overflow: auto;
  background: var(--wb-surface, #ffffff);
  position: relative;
}

.wf-grid-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: var(--wb-fs-body, 13px);
}

.wf-grid-table thead {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--wb-bg, #f7f8fa);
}

.wf-grid-th {
  border-bottom: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  border-right: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  height: 38px;
  padding: 0 12px;
  text-align: left;
  font-weight: 500;
  color: var(--wb-text-secondary, #5f6472);
  background: var(--wb-bg, #f7f8fa);
  position: relative;
  user-select: none;
}

.wf-grid-th--select {
  width: 44px;
  text-align: center;
  padding: 0;
}

.wf-grid-th--plus {
  width: 50px;
  text-align: center;
  cursor: pointer;
  color: var(--wb-text-muted, #9aa0ae);
}
.wf-grid-th--plus:hover {
  background: var(--wb-pill-bg, #f2f3f5);
  color: var(--wb-text-primary, #1a1d26);
}

.wf-grid-td {
  border-bottom: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  border-right: 1px solid var(--wb-border, rgba(15, 20, 32, 0.08));
  padding: 4px 10px;
  color: var(--wb-text-primary, #1a1d26);
  vertical-align: middle;
  background: var(--wb-surface, #ffffff);
  transition: background 100ms ease;
}

.wf-grid-table tr:hover .wf-grid-td {
  background: var(--wb-bg, #fafbfc);
}

.wf-grid-td--select {
  text-align: center;
  color: var(--wb-text-muted, #9aa0ae);
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background: var(--wb-surface-raised, #fcfdfe);
}

/* 4 \u6863\u884C\u9AD8\u9AD8\u5EA6 */
.wf-grid-row--low .wf-grid-td { height: 34px; padding: 2px 10px; }
.wf-grid-row--medium .wf-grid-td { height: 48px; padding: 6px 10px; }
.wf-grid-row--tall .wf-grid-td { height: 72px; padding: 10px 10px; }
.wf-grid-row--extraTall .wf-grid-td { height: 120px; padding: 12px 10px; }

.wf-grid-cell-input {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: var(--wb-fs-body, 13px);
  font-family: inherit;
  color: inherit;
  background: transparent;
  outline: none;
  transition: border-color 100ms ease, background 100ms ease;
}

.wf-grid-cell-input:hover {
  border-color: var(--wb-border-strong, rgba(15, 20, 32, 0.16));
}

.wf-grid-cell-input:focus {
  border-color: var(--wb-accent, #165dff);
  background: var(--wb-surface, #ffffff);
  box-shadow: 0 0 0 2px var(--wb-accent-soft, rgba(22, 93, 255, 0.15));
}


/* ==================== 5. \u3010\u6DFB\u52A0/\u7F16\u8F91\u5217\u3011\u6A21\u6001\u5F39\u7A97 (Modal) ==================== */

.wf-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: wf-modal-fade 150ms ease-out;
}

@keyframes wf-modal-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wf-modal-dialog {
  width: 440px;
  background: var(--wb-surface, #ffffff);
  border-radius: var(--wb-node-radius, 20px);
  box-shadow: var(--wb-shadow-pop, 0 20px 48px rgba(15, 20, 32, 0.16));
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  animation: wf-modal-pop 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes wf-modal-pop {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.wf-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.wf-modal-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--wb-text-primary, #1a1d26);
}

.wf-modal-input {
  width: 100%;
  height: 42px;
  border-radius: var(--wb-pill-radius, 12px);
  border: 1px solid var(--wb-border-strong, rgba(15, 20, 32, 0.16));
  background: var(--wb-surface, #ffffff);
  padding: 0 14px;
  font-size: var(--wb-fs-title, 14px);
  color: var(--wb-text-primary, #1a1d26);
  outline: none;
  transition: border-color 120ms ease, box-shadow 120ms ease;
  box-sizing: border-box;
}

.wf-modal-input:focus {
  border-color: var(--wb-accent, #165dff);
  box-shadow: 0 0 0 2px var(--wb-accent-soft, rgba(22, 93, 255, 0.15));
}

.wf-modal-btn-primary {
  height: 38px;
  padding: 0 18px;
  background: var(--wb-accent, #165dff);
  color: #ffffff;
  font-size: var(--wb-fs-title, 14px);
  font-weight: 500;
  border-radius: var(--wb-pill-radius, 8px);
  border: none;
  cursor: pointer;
  transition: opacity 120ms ease;
}

.wf-modal-btn-primary:hover {
  opacity: 0.9;
}

.wf-modal-btn-cancel {
  height: 38px;
  padding: 0 14px;
  background: var(--wb-pill-bg, #f2f3f5);
  color: var(--wb-text-primary, #1a1d26);
  font-size: var(--wb-fs-title, 14px);
  font-weight: 500;
  border-radius: var(--wb-pill-radius, 8px);
  border: none;
  cursor: pointer;
  transition: background 120ms ease;
}

.wf-modal-btn-cancel:hover {
  background: var(--wb-pill-hover, #e5e6eb);
}
`;var G8=[{id:"omnimux-workflow-xyflow-base",css:L_},{id:"omnimux-workflow-theme",css:__},{id:"omnimux-workflow-components",css:I_},{id:"omnimux-workflow-table-node",css:k_}];function M_(){for(let{id:e,css:t}of G8){let a=document.getElementById(e);if(a instanceof HTMLStyleElement)a.textContent!==t&&(a.textContent=t);else{let o=document.createElement("style");o.id=e,o.textContent=t,document.head.append(o)}}}var Qh=B(Z(),1),zu=new WeakMap;function X8(e,t){if(!e||zu.has(e))return;M_();let a=(0,E_.createRoot)(e);zu.set(e,{root:a,lastProps:t}),a.render((0,Qh.jsx)(Kh,{...t}))}function Y8(e,t){let a=zu.get(e);a&&(a.lastProps=t,a.root.render((0,Qh.jsx)(Kh,{...t})))}function Z8(e){let t=zu.get(e);t&&(t.root.unmount(),zu.delete(e))}return OI(W8);})();
