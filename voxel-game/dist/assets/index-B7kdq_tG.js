var __=Object.defineProperty;var x_=(t,e,n)=>e in t?__(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>x_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m0={exports:{}},dc={},g0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),S_=Symbol.for("react.portal"),M_=Symbol.for("react.fragment"),E_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),C_=Symbol.for("react.suspense"),b_=Symbol.for("react.memo"),L_=Symbol.for("react.lazy"),mh=Symbol.iterator;function P_(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,x0={};function Js(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||v0}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y0(){}y0.prototype=Js.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||v0}var rd=id.prototype=new y0;rd.constructor=id;_0(rd,Js.prototype);rd.isPureReactComponent=!0;var gh=Array.isArray,S0=Object.prototype.hasOwnProperty,sd={current:null},M0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)S0.call(e,i)&&!M0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:s,ref:o,props:r,_owner:sd.current}}function D_(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function N_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vh=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N_(""+t.key):e.toString(36)}function yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case S_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Oc(o,0):i,gh(r)?(n="",t!=null&&(n=t.replace(vh,"$&/")+"/"),yl(r,e,n,"",function(c){return c})):r!=null&&(od(r)&&(r=D_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Oc(s,a);o+=yl(s,e,n,l,r)}else if(l=P_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Oc(s,a++),o+=yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function I_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Sl={transition:null},O_={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:sd};function T0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Js;$e.Fragment=M_;$e.Profiler=T_;$e.PureComponent=id;$e.StrictMode=E_;$e.Suspense=C_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;$e.act=T0;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)S0.call(e,l)&&!M0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:A_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w_,_context:t},t.Consumer=t};$e.createElement=E0;$e.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:R_,render:t}};$e.isValidElement=od;$e.lazy=function(t){return{$$typeof:L_,_payload:{_status:-1,_result:t},_init:I_}};$e.memo=function(t,e){return{$$typeof:b_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};$e.unstable_act=T0;$e.useCallback=function(t,e){return vn.current.useCallback(t,e)};$e.useContext=function(t){return vn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return vn.current.useEffect(t,e)};$e.useId=function(){return vn.current.useId()};$e.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return vn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};$e.useRef=function(t){return vn.current.useRef(t)};$e.useState=function(t){return vn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return vn.current.useTransition()};$e.version="18.3.1";g0.exports=$e;var Pt=g0.exports;const U_=y_(Pt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=Pt,k_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),B_=Object.prototype.hasOwnProperty,G_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)B_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k_,type:t,key:s,ref:o,props:r,_owner:G_.current}}dc.Fragment=z_;dc.jsx=w0;dc.jsxs=w0;m0.exports=dc;var U=m0.exports,qu={},A0={exports:{}},zn={},R0={exports:{}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,k){var B=D.length;D.push(k);e:for(;0<B;){var Q=B-1>>>1,J=D[Q];if(0<r(J,k))D[Q]=k,D[B]=J,B=Q;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],B=D.pop();if(B!==k){D[0]=B;e:for(var Q=0,J=D.length,X=J>>>1;Q<X;){var $=2*(Q+1)-1,le=D[$],me=$+1,ge=D[me];if(0>r(le,B))me<J&&0>r(ge,le)?(D[Q]=ge,D[me]=B,Q=me):(D[Q]=le,D[$]=B,Q=$);else if(me<J&&0>r(ge,B))D[Q]=ge,D[me]=B,Q=me;else break e}}return k}function r(D,k){var B=D.sortIndex-k.sortIndex;return B!==0?B:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=D)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(D){if(x=!1,v(D),!_)if(n(l)!==null)_=!0,q(C);else{var k=n(c);k!==null&&Z(y,k.startTime-D)}}function C(D,k){_=!1,x&&(x=!1,f(N),N=-1),p=!0;var B=h;try{for(v(k),d=n(l);d!==null&&(!(d.expirationTime>k)||D&&!z());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var J=Q(d.expirationTime<=k);k=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),v(k)}else i(l);d=n(l)}if(d!==null)var X=!0;else{var $=n(c);$!==null&&Z(y,$.startTime-k),X=!1}return X}finally{d=null,h=B,p=!1}}var w=!1,A=null,N=-1,M=5,E=-1;function z(){return!(t.unstable_now()-E<M)}function Y(){if(A!==null){var D=t.unstable_now();E=D;var k=!0;try{k=A(!0,D)}finally{k?K():(w=!1,A=null)}}else w=!1}var K;if(typeof g=="function")K=function(){g(Y)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,F=L.port2;L.port1.onmessage=Y,K=function(){F.postMessage(null)}}else K=function(){m(Y,0)};function q(D){A=D,w||(w=!0,K())}function Z(D,k){N=m(function(){D(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var B=h;h=k;try{return D()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=h;h=D;try{return k()}finally{h=B}},t.unstable_scheduleCallback=function(D,k,B){var Q=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,D){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=B+J,D={id:u++,callback:k,priorityLevel:D,startTime:B,expirationTime:J,sortIndex:-1},B>Q?(D.sortIndex=B,e(c,D),n(l)===null&&D===n(c)&&(x?(f(N),N=-1):x=!0,Z(y,B-Q))):(D.sortIndex=J,e(l,D),_||p||(_=!0,q(C))),D},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(D){var k=h;return function(){var B=h;h=k;try{return D.apply(this,arguments)}finally{h=B}}}})(C0);R0.exports=C0;var V_=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=Pt,kn=V_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,Bo={};function Qr(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Bo[t]=e,t=0;t<e.length;t++)b0.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,X_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},xh={};function j_(t){return Ku.call(xh,t)?!0:Ku.call(_h,t)?!1:X_.test(t)?xh[t]=!0:(_h[t]=!0,!1)}function Y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q_(t,e,n,i){if(e===null||typeof e>"u"||Y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,ld);Zt[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,ld);Zt[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,ld);Zt[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q_(e,n,r,i)&&(n=null),i||r===null?j_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),yh=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Uc;function Mo(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function kc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function K_(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function Ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case $u:return"Profiler";case ud:return"StrictMode";case Zu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Ju(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return Ju(t(e))}catch{}}return null}function $_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z_(t){var e=N0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=Z_(t))}function I0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=N0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O0(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function tf(t,e){O0(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Eo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function U0(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,k0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q_=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){Q_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function B0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=z0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var J_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(J_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cf=null,Os=null,Us=null;function wh(t){if(t=fa(t)){if(typeof cf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=vc(e),cf(t.stateNode,t.type,e))}}function G0(t){Os?Us?Us.push(t):Us=[t]:Os=t}function H0(){if(Os){var t=Os,e=Us;if(Us=Os=null,wh(t),e)for(t=0;t<e.length;t++)wh(e[t])}}function V0(t,e){return t(e)}function W0(){}var zc=!1;function X0(t,e,n){if(zc)return t(e,n);zc=!0;try{return V0(t,e,n)}finally{zc=!1,(Os!==null||Us!==null)&&(W0(),H0())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=vc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var uf=!1;if(ki)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){uf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{uf=!1}function ex(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Co=!1,Ul=null,Fl=!1,ff=null,tx={onError:function(t){Co=!0,Ul=t}};function nx(t,e,n,i,r,s,o,a,l){Co=!1,Ul=null,ex.apply(tx,arguments)}function ix(t,e,n,i,r,s,o,a,l){if(nx.apply(this,arguments),Co){if(Co){var c=Ul;Co=!1,Ul=null}else throw Error(se(198));Fl||(Fl=!0,ff=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(Jr(t)!==t)throw Error(se(188))}function rx(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ah(r),t;if(s===i)return Ah(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Y0(t){return t=rx(t),t!==null?q0(t):null}function q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q0(t);if(e!==null)return e;t=t.sibling}return null}var K0=kn.unstable_scheduleCallback,Rh=kn.unstable_cancelCallback,sx=kn.unstable_shouldYield,ox=kn.unstable_requestPaint,Rt=kn.unstable_now,ax=kn.unstable_getCurrentPriorityLevel,pd=kn.unstable_ImmediatePriority,$0=kn.unstable_UserBlockingPriority,kl=kn.unstable_NormalPriority,lx=kn.unstable_LowPriority,Z0=kn.unstable_IdlePriority,hc=null,Si=null;function cx(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:dx,ux=Math.log,fx=Math.LN2;function dx(t){return t>>>=0,t===0?32:31-(ux(t)/fx|0)|0}var wa=64,Aa=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function hx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function px(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q0(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eg,gd,tg,ng,ig,hf=!1,Ra=[],or=null,ar=null,lr=null,Vo=new Map,Wo=new Map,er=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vx(t,e,n,i,r){switch(e){case"focusin":return or=ao(or,t,e,n,i,r),!0;case"dragenter":return ar=ao(ar,t,e,n,i,r),!0;case"mouseover":return lr=ao(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Vo.set(s,ao(Vo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,ao(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function rg(t){var e=Fr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=j0(n),e!==null){t.blockedOn=e,ig(t.priority,function(){tg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lf=i,n.target.dispatchEvent(i),lf=null}else return e=fa(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){Ml(t)&&n.delete(e)}function _x(){hf=!1,or!==null&&Ml(or)&&(or=null),ar!==null&&Ml(ar)&&(ar=null),lr!==null&&Ml(lr)&&(lr=null),Vo.forEach(bh),Wo.forEach(bh)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,_x)))}function Xo(t){function e(r){return lo(r,t)}if(0<Ra.length){lo(Ra[0],t);for(var n=1;n<Ra.length;n++){var i=Ra[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&lo(or,t),ar!==null&&lo(ar,t),lr!==null&&lo(lr,t),Vo.forEach(e),Wo.forEach(e),n=0;n<er.length;n++)i=er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)rg(n),n.blockedOn===null&&er.shift()}var Fs=Vi.ReactCurrentBatchConfig,Bl=!0;function xx(t,e,n,i){var r=nt,s=Fs.transition;Fs.transition=null;try{nt=1,vd(t,e,n,i)}finally{nt=r,Fs.transition=s}}function yx(t,e,n,i){var r=nt,s=Fs.transition;Fs.transition=null;try{nt=4,vd(t,e,n,i)}finally{nt=r,Fs.transition=s}}function vd(t,e,n,i){if(Bl){var r=pf(t,e,n,i);if(r===null)$c(t,e,i,Gl,n),Ch(t,i);else if(vx(r,t,e,n,i))i.stopPropagation();else if(Ch(t,i),e&4&&-1<gx.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&eg(s),s=pf(t,e,n,i),s===null&&$c(t,e,i,Gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var Gl=null;function pf(t,e,n,i){if(Gl=null,t=hd(i),t=Fr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ax()){case pd:return 1;case $0:return 4;case kl:case lx:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var nr=null,_d=null,El=null;function og(){if(El)return El;var t,e=_d,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Lh(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:Lh,this.isPropagationStopped=Lh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=Bn(eo),ua=xt({},eo,{view:0,detail:0}),Sx=Bn(ua),Gc,Hc,co,pc=xt({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Gc=t.screenX-co.screenX,Hc=t.screenY-co.screenY):Hc=Gc=0,co=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Ph=Bn(pc),Mx=xt({},pc,{dataTransfer:0}),Ex=Bn(Mx),Tx=xt({},ua,{relatedTarget:0}),Vc=Bn(Tx),wx=xt({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Bn(wx),Rx=xt({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=Bn(Rx),bx=xt({},eo,{data:0}),Dh=Bn(bx),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dx[t])?!!e[t]:!1}function yd(){return Nx}var Ix=xt({},ua,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=Bn(Ix),Ux=xt({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=Bn(Ux),Fx=xt({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),kx=Bn(Fx),zx=xt({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=Bn(zx),Gx=xt({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=Bn(Gx),Vx=[9,13,27,32],Sd=ki&&"CompositionEvent"in window,bo=null;ki&&"documentMode"in document&&(bo=document.documentMode);var Wx=ki&&"TextEvent"in window&&!bo,ag=ki&&(!Sd||bo&&8<bo&&11>=bo),Ih=" ",Oh=!1;function lg(t,e){switch(t){case"keyup":return Vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function Xx(t,e){switch(t){case"compositionend":return cg(e);case"keypress":return e.which!==32?null:(Oh=!0,Ih);case"textInput":return t=e.data,t===Ih&&Oh?null:t;default:return null}}function jx(t,e){if(Ms)return t==="compositionend"||!Sd&&lg(t,e)?(t=og(),El=_d=nr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ag&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function ug(t,e,n,i){G0(i),e=Hl(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,jo=null;function qx(t){Sg(t,0)}function mc(t){var e=ws(t);if(I0(e))return t}function Kx(t,e){if(t==="change")return e}var fg=!1;if(ki){var Wc;if(ki){var Xc="oninput"in document;if(!Xc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),Xc=typeof Fh.oninput=="function"}Wc=Xc}else Wc=!1;fg=Wc&&(!document.documentMode||9<document.documentMode)}function kh(){Lo&&(Lo.detachEvent("onpropertychange",dg),jo=Lo=null)}function dg(t){if(t.propertyName==="value"&&mc(jo)){var e=[];ug(e,jo,t,hd(t)),X0(qx,e)}}function $x(t,e,n){t==="focusin"?(kh(),Lo=e,jo=n,Lo.attachEvent("onpropertychange",dg)):t==="focusout"&&kh()}function Zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(jo)}function Qx(t,e){if(t==="click")return mc(e)}function Jx(t,e){if(t==="input"||t==="change")return mc(e)}function ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:ey;function Yo(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ku.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bh(t,e){var n=zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zh(n)}}function hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pg(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ty(t){var e=pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hg(n.ownerDocument.documentElement,n)){if(i!==null&&Md(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bh(n,s);var o=Bh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ny=ki&&"documentMode"in document&&11>=document.documentMode,Es=null,mf=null,Po=null,gf=!1;function Gh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||Es==null||Es!==Ol(i)||(i=Es,"selectionStart"in i&&Md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Po&&Yo(Po,i)||(Po=i,i=Hl(mf,"onSelect"),0<i.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},jc={},mg={};ki&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function gc(t){if(jc[t])return jc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mg)return jc[t]=e[n];return t}var gg=gc("animationend"),vg=gc("animationiteration"),_g=gc("animationstart"),xg=gc("transitionend"),yg=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){yg.set(t,e),Qr(e,[t])}for(var Yc=0;Yc<Hh.length;Yc++){var qc=Hh[Yc],iy=qc.toLowerCase(),ry=qc[0].toUpperCase()+qc.slice(1);yr(iy,"on"+ry)}yr(gg,"onAnimationEnd");yr(vg,"onAnimationIteration");yr(_g,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(xg,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ix(i,e,void 0,t),t.currentTarget=null}function Sg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,c),s=l}}}if(Fl)throw t=ff,Fl=!1,ff=null,t}function ut(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var i=t+"__bubble";n.has(i)||(Mg(e,t,2,!1),n.add(i))}function Kc(t,e,n){var i=0;e&&(i|=4),Mg(n,t,i,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[La]){t[La]=!0,b0.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,Kc("selectionchange",!1,e))}}function Mg(t,e,n,i){switch(sg(e)){case 1:var r=xx;break;case 4:r=yx;break;default:r=vd}n=r.bind(null,e,n,t),r=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}X0(function(){var c=s,u=hd(n),d=[];e:{var h=yg.get(t);if(h!==void 0){var p=xd,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":p=Ox;break;case"focusin":_="focus",p=Vc;break;case"focusout":_="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kx;break;case gg:case vg:case _g:p=Ax;break;case xg:p=Bx;break;case"scroll":p=Sx;break;case"wheel":p=Hx;break;case"copy":case"cut":case"paste":p=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nh}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Ho(g,f),y!=null&&x.push(Ko(g,y,v)))),m)break;g=g.return}0<x.length&&(h=new p(h,_,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==lf&&(_=n.relatedTarget||n.fromElement)&&(Fr(_)||_[zi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Fr(_):null,_!==null&&(m=Jr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Ph,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Nh,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:ws(p),v=_==null?h:ws(_),h=new x(y,g+"leave",p,n,u),h.target=m,h.relatedTarget=v,y=null,Fr(u)===c&&(x=new x(f,g+"enter",_,n,u),x.target=v,x.relatedTarget=m,y=x),m=y,p&&_)t:{for(x=p,f=_,g=0,v=x;v;v=ts(v))g++;for(v=0,y=f;y;y=ts(y))v++;for(;0<g-v;)x=ts(x),g--;for(;0<v-g;)f=ts(f),v--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=ts(x),f=ts(f)}x=null}else x=null;p!==null&&Wh(d,h,p,x,!1),_!==null&&m!==null&&Wh(d,m,_,x,!0)}}e:{if(h=c?ws(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Kx;else if(Uh(h))if(fg)C=Jx;else{C=Zx;var w=$x}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Qx);if(C&&(C=C(t,c))){ug(d,C,n,u);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&nf(h,"number",h.value)}switch(w=c?ws(c):window,t){case"focusin":(Uh(w)||w.contentEditable==="true")&&(Es=w,mf=c,Po=null);break;case"focusout":Po=mf=Es=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Gh(d,n,u);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Gh(d,n,u)}var A;if(Sd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ms?lg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ag&&n.locale!=="ko"&&(Ms||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ms&&(A=og()):(nr=u,_d="value"in nr?nr.value:nr.textContent,Ms=!0)),w=Hl(c,N),0<w.length&&(N=new Dh(N,t,null,n,u),d.push({event:N,listeners:w}),A?N.data=A:(A=cg(n),A!==null&&(N.data=A)))),(A=Wx?Xx(t,n):jx(t,n))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(u=new Dh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}Sg(d,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Ho(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ho(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ay,"")}function Pa(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(se(425))}function Vl(){}var vf=null,_f=null;function xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(t){return jh.resolve(null).then(t).catch(uy)}:yf;function uy(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),xi="__reactFiber$"+to,$o="__reactProps$"+to,zi="__reactContainer$"+to,Sf="__reactEvents$"+to,fy="__reactListeners$"+to,dy="__reactHandles$"+to;function Fr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yh(t);t!==null;){if(n=t[xi])return n;t=Yh(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[xi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function vc(t){return t[$o]||null}var Mf=[],As=-1;function Sr(t){return{current:t}}function dt(t){0>As||(t.current=Mf[As],Mf[As]=null,As--)}function ct(t,e){As++,Mf[As]=t.current,t.current=e}var _r={},an=Sr(_r),Tn=Sr(!1),Xr=_r;function Vs(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function Wl(){dt(Tn),dt(an)}function qh(t,e,n){if(an.current!==_r)throw Error(se(168));ct(an,e),ct(Tn,n)}function Eg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,$_(t)||"Unknown",r));return xt({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Xr=an.current,ct(an,t),ct(Tn,Tn.current),!0}function Kh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Eg(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,dt(Tn),dt(an),ct(an,t)):dt(Tn),ct(Tn,n)}var Di=null,_c=!1,Qc=!1;function Tg(t){Di===null?Di=[t]:Di.push(t)}function hy(t){_c=!0,Tg(t)}function Mr(){if(!Qc&&Di!==null){Qc=!0;var t=0,e=nt;try{var n=Di;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,_c=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),K0(pd,Mr),r}finally{nt=e,Qc=!1}}return null}var Rs=[],Cs=0,jl=null,Yl=0,Vn=[],Wn=0,jr=null,Ii=1,Oi="";function Lr(t,e){Rs[Cs++]=Yl,Rs[Cs++]=jl,jl=t,Yl=e}function wg(t,e,n){Vn[Wn++]=Ii,Vn[Wn++]=Oi,Vn[Wn++]=jr,jr=t;var i=Ii;t=Oi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-fi(e)+r|n<<r|i,Oi=s+t}else Ii=1<<s|n<<r|i,Oi=t}function Ed(t){t.return!==null&&(Lr(t,1),wg(t,1,0))}function Td(t){for(;t===jl;)jl=Rs[--Cs],Rs[Cs]=null,Yl=Rs[--Cs],Rs[Cs]=null;for(;t===jr;)jr=Vn[--Wn],Vn[Wn]=null,Oi=Vn[--Wn],Vn[Wn]=null,Ii=Vn[--Wn],Vn[Wn]=null}var Fn=null,Un=null,ht=!1,ai=null;function Ag(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Un=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Ii,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Un=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(ht){var e=Un;if(e){var n=e;if(!$h(t,e)){if(Ef(t))throw Error(se(418));e=cr(n.nextSibling);var i=Fn;e&&$h(t,e)?Ag(i,n):(t.flags=t.flags&-4097|2,ht=!1,Fn=t)}}else{if(Ef(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,Fn=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Da(t){if(t!==Fn)return!1;if(!ht)return Zh(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xf(t.type,t.memoizedProps)),e&&(e=Un)){if(Ef(t))throw Rg(),Error(se(418));for(;e;)Ag(t,e),e=cr(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Fn?cr(t.stateNode.nextSibling):null;return!0}function Rg(){for(var t=Un;t;)t=cr(t.nextSibling)}function Ws(){Un=Fn=null,ht=!1}function wd(t){ai===null?ai=[t]:ai.push(t)}var py=Vi.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function Cg(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=hr(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,y){return g===null||g.tag!==6?(g=su(v,f.mode,y),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,y){var C=v.type;return C===Ss?u(f,g,v.props.children,y,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Qi&&Qh(C)===g.type)?(y=r(g,v.props),y.ref=uo(f,g,v),y.return=f,y):(y=Pl(v.type,v.key,v.props,null,f.mode,y),y.ref=uo(f,g,v),y.return=f,y)}function c(f,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ou(v,f.mode,y),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function u(f,g,v,y,C){return g===null||g.tag!==7?(g=Gr(v,f.mode,y,C),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=su(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return v=Pl(g.type,g.key,g.props,null,f.mode,v),v.ref=uo(f,null,g),v.return=f,v;case ys:return g=ou(g,f.mode,v),g.return=f,g;case Qi:var y=g._init;return d(f,y(g._payload),v)}if(Eo(g)||so(g))return g=Gr(g,f.mode,v,null),g.return=f,g;Na(f,g)}return null}function h(f,g,v,y){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(f,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===C?l(f,g,v,y):null;case ys:return v.key===C?c(f,g,v,y):null;case Qi:return C=v._init,h(f,g,C(v._payload),y)}if(Eo(v)||so(v))return C!==null?null:u(f,g,v,y,null);Na(f,v)}return null}function p(f,g,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(g,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ma:return f=f.get(y.key===null?v:y.key)||null,l(g,f,y,C);case ys:return f=f.get(y.key===null?v:y.key)||null,c(g,f,y,C);case Qi:var w=y._init;return p(f,g,v,w(y._payload),C)}if(Eo(y)||so(y))return f=f.get(v)||null,u(g,f,y,C,null);Na(g,y)}return null}function _(f,g,v,y){for(var C=null,w=null,A=g,N=g=0,M=null;A!==null&&N<v.length;N++){A.index>N?(M=A,A=null):M=A.sibling;var E=h(f,A,v[N],y);if(E===null){A===null&&(A=M);break}t&&A&&E.alternate===null&&e(f,A),g=s(E,g,N),w===null?C=E:w.sibling=E,w=E,A=M}if(N===v.length)return n(f,A),ht&&Lr(f,N),C;if(A===null){for(;N<v.length;N++)A=d(f,v[N],y),A!==null&&(g=s(A,g,N),w===null?C=A:w.sibling=A,w=A);return ht&&Lr(f,N),C}for(A=i(f,A);N<v.length;N++)M=p(A,f,N,v[N],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?N:M.key),g=s(M,g,N),w===null?C=M:w.sibling=M,w=M);return t&&A.forEach(function(z){return e(f,z)}),ht&&Lr(f,N),C}function x(f,g,v,y){var C=so(v);if(typeof C!="function")throw Error(se(150));if(v=C.call(v),v==null)throw Error(se(151));for(var w=C=null,A=g,N=g=0,M=null,E=v.next();A!==null&&!E.done;N++,E=v.next()){A.index>N?(M=A,A=null):M=A.sibling;var z=h(f,A,E.value,y);if(z===null){A===null&&(A=M);break}t&&A&&z.alternate===null&&e(f,A),g=s(z,g,N),w===null?C=z:w.sibling=z,w=z,A=M}if(E.done)return n(f,A),ht&&Lr(f,N),C;if(A===null){for(;!E.done;N++,E=v.next())E=d(f,E.value,y),E!==null&&(g=s(E,g,N),w===null?C=E:w.sibling=E,w=E);return ht&&Lr(f,N),C}for(A=i(f,A);!E.done;N++,E=v.next())E=p(A,f,N,E.value,y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?N:E.key),g=s(E,g,N),w===null?C=E:w.sibling=E,w=E);return t&&A.forEach(function(Y){return e(f,Y)}),ht&&Lr(f,N),C}function m(f,g,v,y){if(typeof v=="object"&&v!==null&&v.type===Ss&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var C=v.key,w=g;w!==null;){if(w.key===C){if(C=v.type,C===Ss){if(w.tag===7){n(f,w.sibling),g=r(w,v.props.children),g.return=f,f=g;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Qi&&Qh(C)===w.type){n(f,w.sibling),g=r(w,v.props),g.ref=uo(f,w,v),g.return=f,f=g;break e}n(f,w);break}else e(f,w);w=w.sibling}v.type===Ss?(g=Gr(v.props.children,f.mode,y,v.key),g.return=f,f=g):(y=Pl(v.type,v.key,v.props,null,f.mode,y),y.ref=uo(f,g,v),y.return=f,f=y)}return o(f);case ys:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=ou(v,f.mode,y),g.return=f,f=g}return o(f);case Qi:return w=v._init,m(f,g,w(v._payload),y)}if(Eo(v))return _(f,g,v,y);if(so(v))return x(f,g,v,y);Na(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=su(v,f.mode,y),g.return=f,f=g),o(f)):n(f,g)}return m}var Xs=Cg(!0),bg=Cg(!1),ql=Sr(null),Kl=null,bs=null,Ad=null;function Rd(){Ad=bs=Kl=null}function Cd(t){var e=ql.current;dt(ql),t._currentValue=e}function wf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Kl=t,Ad=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Kl===null)throw Error(se(308));bs=t,Kl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var kr=null;function bd(t){kr===null?kr=[t]:kr.push(t)}function Lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}function Jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=xt({},d,h);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=d}}function ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var da={},Mi=Sr(da),Zo=Sr(da),Qo=Sr(da);function zr(t){if(t===da)throw Error(se(174));return t}function Pd(t,e){switch(ct(Qo,e),ct(Zo,t),ct(Mi,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}dt(Mi),ct(Mi,e)}function js(){dt(Mi),dt(Zo),dt(Qo)}function Dg(t){zr(Qo.current);var e=zr(Mi.current),n=sf(e,t.type);e!==n&&(ct(Zo,t),ct(Mi,n))}function Dd(t){Zo.current===t&&(dt(Mi),dt(Zo))}var vt=Sr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function Nd(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Al=Vi.ReactCurrentDispatcher,eu=Vi.ReactCurrentBatchConfig,Yr=0,_t=null,Dt=null,Ht=null,Ql=!1,Do=!1,Jo=0,my=0;function en(){throw Error(se(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Od(t,e,n,i,r,s){if(Yr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?xy:yy,t=n(i,r),Do){s=0;do{if(Do=!1,Jo=0,25<=s)throw Error(se(301));s+=1,Ht=Dt=null,e.updateQueue=null,Al.current=Sy,t=n(i,r)}while(Do)}if(Al.current=Jl,e=Dt!==null&&Dt.next!==null,Yr=0,Ht=Dt=_t=null,Ql=!1,e)throw Error(se(300));return t}function Ud(){var t=Jo!==0;return Jo=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?_t.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Zn(){if(Dt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ht===null?_t.memoizedState:Ht.next;if(e!==null)Ht=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ht===null?_t.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function ea(t,e){return typeof e=="function"?e(t):e}function tu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=u,qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ng(){}function Ig(t,e){var n=_t,i=Zn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Fd(Fg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ta(9,Ug.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(se(349));Yr&30||Og(n,e,r)}return r}function Og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,i){e.value=n,e.getSnapshot=i,kg(e)&&zg(t)}function Fg(t,e,n){return n(function(){kg(e)&&zg(t)})}function kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function zg(t){var e=Bi(t,1);e!==null&&di(e,t,1,-1)}function tp(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=_y.bind(null,_t,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Bg(){return Zn().memoizedState}function Rl(t,e,n,i){var r=vi();_t.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function xc(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&Id(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function np(t,e){return Rl(8390656,8,t,e)}function Fd(t,e){return xc(2048,8,t,e)}function Gg(t,e){return xc(4,2,t,e)}function Hg(t,e){return xc(4,4,t,e)}function Vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wg(t,e,n){return n=n!=null?n.concat([t]):null,xc(4,4,Vg.bind(null,e,t),n)}function kd(){}function Xg(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jg(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yg(t,e,n){return Yr&21?(hi(n,e)||(n=Q0(),_t.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function gy(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=eu.transition;eu.transition={};try{t(!1),e()}finally{nt=n,eu.transition=i}}function qg(){return Zn().memoizedState}function vy(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))$g(e,n);else if(n=Lg(t,e,n,i),n!==null){var r=mn();di(n,t,i,r),Zg(n,e,i)}}function _y(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))$g(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Lg(t,e,r,i),n!==null&&(r=mn(),di(n,t,i,r),Zg(n,e,i))}}function Kg(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function $g(t,e){Do=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}var Jl={readContext:$n,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},xy={readContext:$n,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,Vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vy.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:tp,useDebugValue:kd,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=tp(!1),e=t[0];return t=gy.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=vi();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Xt===null)throw Error(se(349));Yr&30||Og(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,np(Fg.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,Ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Xt.identifierPrefix;if(ht){var n=Oi,i=Ii;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=my++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yy={readContext:$n,useCallback:Xg,useContext:$n,useEffect:Fd,useImperativeHandle:Wg,useInsertionEffect:Gg,useLayoutEffect:Hg,useMemo:jg,useReducer:tu,useRef:Bg,useState:function(){return tu(ea)},useDebugValue:kd,useDeferredValue:function(t){var e=Zn();return Yg(e,Dt.memoizedState,t)},useTransition:function(){var t=tu(ea)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Ig,useId:qg,unstable_isNewReconciler:!1},Sy={readContext:$n,useCallback:Xg,useContext:$n,useEffect:Fd,useImperativeHandle:Wg,useInsertionEffect:Gg,useLayoutEffect:Hg,useMemo:jg,useReducer:nu,useRef:Bg,useState:function(){return nu(ea)},useDebugValue:kd,useDeferredValue:function(t){var e=Zn();return Dt===null?e.memoizedState=t:Yg(e,Dt.memoizedState,t)},useTransition:function(){var t=nu(ea)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Ig,useId:qg,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Af(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=dr(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(di(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=dr(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(di(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=dr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(di(e,t,i,n),wl(e,t,i))}};function ip(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function Qg(t,e,n){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=wn(e)?Xr:an.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=wn(e)?Xr:an.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Af(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yc.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=K_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var My=typeof WeakMap=="function"?WeakMap:Map;function Jg(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tc||(tc=!0,kf=i),Cf(t,e)},n}function ev(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cf(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new My;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Uy.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var Ey=Vi.ReactCurrentOwner,Mn=!1;function dn(t,e,n,i){e.child=t===null?bg(e,null,n,i):Xs(e,t.child,n,i)}function lp(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Od(t,e,n,i,s,r),n=Ud(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(ht&&n&&Ed(e),e.flags|=1,dn(t,e,i,r),e.child)}function cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tv(t,e,s,i,r)):(t=Pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return bf(t,e,n,i,r)}function nv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Ps,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Ps,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Ps,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Ps,Pn),Pn|=i;return dn(t,e,r,n),e.child}function iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,i,r){var s=wn(n)?Xr:an.current;return s=Vs(e,s),ks(e,r),n=Od(t,e,n,i,s,r),i=Ud(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(ht&&i&&Ed(e),e.flags|=1,dn(t,e,n,r),e.child)}function up(t,e,n,i,r){if(wn(n)){var s=!0;Xl(e)}else s=!1;if(ks(e,r),e.stateNode===null)Cl(t,e),Qg(e,n,i),Rf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=wn(n)?Xr:an.current,c=Vs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rp(e,o,i,c),Ji=!1;var h=e.memoizedState;o.state=h,$l(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Tn.current||Ji?(typeof u=="function"&&(Af(e,n,u,i),l=e.memoizedState),(a=Ji||ip(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Pg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=wn(n)?Xr:an.current,l=Vs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&rp(e,o,i,l),Ji=!1,h=e.memoizedState,o.state=h,$l(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Tn.current||Ji?(typeof p=="function"&&(Af(e,n,p,i),_=e.memoizedState),(c=Ji||ip(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Lf(t,e,n,i,s,r)}function Lf(t,e,n,i,r,s){iv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kh(e,n,!1),Gi(t,e,s);i=e.stateNode,Ey.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&Kh(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qh(t,e.context,!1),Pd(t,e.containerInfo)}function fp(t,e,n,i,r){return Ws(),wd(r),e.flags|=256,dn(t,e,n,i),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function sv(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(vt,r&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=Pf,t):zd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pf,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=Ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&wd(i),Xs(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=iu(Error(se(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ec({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Df(o),e.memoizedState=Pf,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=iu(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,Mn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(t,r),di(i,t,r,-1))}return Xd(),i=iu(Error(se(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Fy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=cr(r.nextSibling),Fn=e,ht=!0,ai=null,t!==null&&(Vn[Wn++]=Ii,Vn[Wn++]=Oi,Vn[Wn++]=jr,Ii=t.id,Oi=t.overflow,jr=e),e=zd(e,i.children),e.flags|=4096,e)}function dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wf(t.return,e,n)}function ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dp(t,n,e);else if(t.tag===19)dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ru(e,!0,n,null,s);break;case"together":ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wy(t,e,n){switch(e.tag){case 3:rv(e),Ws();break;case 5:Dg(e);break;case 1:wn(e.type)&&Xl(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?sv(t,e,n):(ct(vt,vt.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,nv(t,e,n)}return Gi(t,e,n)}var av,Nf,lv,cv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nf=function(){};lv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(Mi.current);var s=null;switch(n){case"input":r=ef(t,r),i=ef(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=rf(t,r),i=rf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}of(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ay(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return wn(e.type)&&Wl(),tn(e),null;case 3:return i=e.stateNode,js(),dt(Tn),dt(an),Nd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Gf(ai),ai=null))),Nf(t,e),tn(e),null;case 5:Dd(e);var r=zr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return tn(e),null}if(t=zr(Mi.current),Da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[$o]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)ut(wo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Sh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Eh(i,s),ut("invalid",i)}of(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ea(i),Mh(i,s,!0);break;case"textarea":Ea(i),Th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[$o]=i,av(t,e,!1,!1),e.stateNode=t;e:{switch(o=af(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)ut(wo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Sh(t,i),r=ef(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Eh(t,i),r=rf(t,i),ut("invalid",t);break;default:r=i}of(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&cd(t,s,l,o))}switch(n){case"input":Ea(t),Mh(t,i,!1);break;case"textarea":Ea(t),Th(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)cv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=zr(Qo.current),zr(Mi.current),Da(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return tn(e),null;case 13:if(dt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Un!==null&&e.mode&1&&!(e.flags&128))Rg(),Ws(),e.flags|=98560,s=!1;else if(s=Da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[xi]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ai!==null&&(Gf(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?It===0&&(It=3):Xd())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return js(),Nf(t,e),t===null&&qo(e.stateNode.containerInfo),tn(e),null;case 10:return Cd(e.type._context),tn(e),null;case 17:return wn(e.type)&&Wl(),tn(e),null;case 19:if(dt(vt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>qs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return tn(e),null}else 2*Rt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=vt.current,ct(vt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Ry(t,e){switch(Td(e),e.tag){case 1:return wn(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),dt(Tn),dt(an),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(dt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(vt),null;case 4:return js(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var Oa=!1,on=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function If(t,e,n){try{n()}catch(i){Et(t,e,i)}}var hp=!1;function by(t,e){if(vf=Bl,t=pg(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},Bl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ii(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=hp,hp=!1,_}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&If(e,n,s)}r=r.next}while(r!==i)}}function Sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[$o],delete e[Sf],delete e[fy],delete e[dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fv(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var qt=null,ri=!1;function Wi(t,e,n){for(n=n.child;n!==null;)dv(t,e,n),n=n.sibling}function dv(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:on||Ls(n,e);case 6:var i=qt,r=ri;qt=null,Wi(t,e,n),qt=i,ri=r,qt!==null&&(ri?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ri?(t=qt,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),Xo(t)):Zc(qt,n.stateNode));break;case 4:i=qt,r=ri,qt=n.stateNode.containerInfo,ri=!0,Wi(t,e,n),qt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&If(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!on&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,Wi(t,e,n),on=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cy),e.forEach(function(i){var r=ky.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ri=!1;break e;case 3:qt=a.stateNode.containerInfo,ri=!0;break e;case 4:qt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(qt===null)throw Error(se(160));dv(s,o,r),qt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,t),e=e.sibling}function hv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),mi(t),i&4){try{No(3,t,t.return),Sc(3,t)}catch(x){Et(t,t.return,x)}try{No(5,t,t.return)}catch(x){Et(t,t.return,x)}}break;case 1:Qn(e,t),mi(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(Qn(e,t),mi(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{Go(r,"")}catch(x){Et(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&O0(r,s),af(a,o);var c=af(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?B0(r,d):u==="dangerouslySetInnerHTML"?k0(r,d):u==="children"?Go(r,d):cd(r,u,d,c)}switch(a){case"input":tf(r,s);break;case"textarea":U0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[$o]=s}catch(x){Et(t,t.return,x)}}break;case 6:if(Qn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Et(t,t.return,x)}}break;case 3:if(Qn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(x){Et(t,t.return,x)}break;case 4:Qn(e,t),mi(t);break;case 13:Qn(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=Rt())),i&4&&mp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,Qn(e,t),on=c):Qn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(d=_e=u;_e!==null;){switch(h=_e,p=h.child,h.tag){case 0:case 11:case 14:case 15:No(4,h,h.return);break;case 1:Ls(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Et(i,n,x)}}break;case 5:Ls(h,h.return);break;case 22:if(h.memoizedState!==null){vp(d);continue}}p!==null?(p.return=h,_e=p):vp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=z0("display",o))}catch(x){Et(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Et(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qn(e,t),mi(t),i&4&&mp(t);break;case 21:break;default:Qn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=pp(t);Ff(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pp(t);Uf(t,a,o);break;default:throw Error(se(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ly(t,e,n){_e=t,pv(t)}function pv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Oa;var c=on;if(Oa=o,(on=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?_p(r):l!==null?(l.return=o,_e=l):_p(r);for(;s!==null;)_e=s,pv(s),s=s.sibling;_e=r,Oa=a,on=c}gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):gp(t)}}function gp(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Xo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}on||e.flags&512&&Of(e)}catch(h){Et(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function vp(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function _p(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Of(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var Py=Math.ceil,ec=Vi.ReactCurrentDispatcher,Bd=Vi.ReactCurrentOwner,Kn=Vi.ReactCurrentBatchConfig,Qe=0,Xt=null,bt=null,$t=0,Pn=0,Ps=Sr(0),It=0,na=null,qr=0,Mc=0,Gd=0,Io=null,yn=null,Hd=0,qs=1/0,Pi=null,tc=!1,kf=null,fr=null,Ua=!1,ir=null,nc=0,Oo=0,zf=null,bl=-1,Ll=0;function mn(){return Qe&6?Rt():bl!==-1?bl:bl=Rt()}function dr(t){return t.mode&1?Qe&2&&$t!==0?$t&-$t:py.transition!==null?(Ll===0&&(Ll=Q0()),Ll):(t=nt,t!==0||(t=window.event,t=t===void 0?16:sg(t.type)),t):1}function di(t,e,n,i){if(50<Oo)throw Oo=0,zf=null,Error(se(185));ca(t,n,i),(!(Qe&2)||t!==Xt)&&(t===Xt&&(!(Qe&2)&&(Mc|=n),It===4&&tr(t,$t)),An(t,i),n===1&&Qe===0&&!(e.mode&1)&&(qs=Rt()+500,_c&&Mr()))}function An(t,e){var n=t.callbackNode;px(t,e);var i=zl(t,t===Xt?$t:0);if(i===0)n!==null&&Rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rh(n),e===1)t.tag===0?hy(xp.bind(null,t)):Tg(xp.bind(null,t)),cy(function(){!(Qe&6)&&Mr()}),n=null;else{switch(J0(i)){case 1:n=pd;break;case 4:n=$0;break;case 16:n=kl;break;case 536870912:n=Z0;break;default:n=kl}n=Mv(n,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mv(t,e){if(bl=-1,Ll=0,Qe&6)throw Error(se(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=zl(t,t===Xt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ic(t,i);else{e=i;var r=Qe;Qe|=2;var s=vv();(Xt!==t||$t!==e)&&(Pi=null,qs=Rt()+500,Br(t,e));do try{Iy();break}catch(a){gv(t,a)}while(!0);Rd(),ec.current=s,Qe=r,bt!==null?e=0:(Xt=null,$t=0,e=It)}if(e!==0){if(e===2&&(r=df(t),r!==0&&(i=r,e=Bf(t,r))),e===1)throw n=na,Br(t,0),tr(t,i),An(t,Rt()),n;if(e===6)tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Dy(r)&&(e=ic(t,i),e===2&&(s=df(t),s!==0&&(i=s,e=Bf(t,s))),e===1))throw n=na,Br(t,0),tr(t,i),An(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Pr(t,yn,Pi);break;case 3:if(tr(t,i),(i&130023424)===i&&(e=Hd+500-Rt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yf(Pr.bind(null,t,yn,Pi),e);break}Pr(t,yn,Pi);break;case 4:if(tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Py(i/1960))-i,10<i){t.timeoutHandle=yf(Pr.bind(null,t,yn,Pi),i);break}Pr(t,yn,Pi);break;case 5:Pr(t,yn,Pi);break;default:throw Error(se(329))}}}return An(t,Rt()),t.callbackNode===n?mv.bind(null,t):null}function Bf(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=ic(t,e),t!==2&&(e=yn,yn=n,e!==null&&Gf(e)),t}function Gf(t){yn===null?yn=t:yn.push.apply(yn,t)}function Dy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Gd,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function xp(t){if(Qe&6)throw Error(se(327));zs();var e=zl(t,0);if(!(e&1))return An(t,Rt()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var i=df(t);i!==0&&(e=i,n=Bf(t,i))}if(n===1)throw n=na,Br(t,0),tr(t,e),An(t,Rt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,yn,Pi),An(t,Rt()),null}function Vd(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(qs=Rt()+500,_c&&Mr())}}function Kr(t){ir!==null&&ir.tag===0&&!(Qe&6)&&zs();var e=Qe;Qe|=1;var n=Kn.transition,i=nt;try{if(Kn.transition=null,nt=1,t)return t()}finally{nt=i,Kn.transition=n,Qe=e,!(Qe&6)&&Mr()}}function Wd(){Pn=Ps.current,dt(Ps)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ly(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:js(),dt(Tn),dt(an),Nd();break;case 5:Dd(i);break;case 4:js();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:Cd(i.type._context);break;case 22:case 23:Wd()}n=n.return}if(Xt=t,bt=t=hr(t.current,null),$t=Pn=e,It=0,na=null,Gd=Mc=qr=0,yn=Io=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function gv(t,e){do{var n=bt;try{if(Rd(),Al.current=Jl,Ql){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Yr=0,Ht=Dt=_t=null,Do=!1,Jo=0,Bd.current=null,n===null||n.return===null){It=1,na=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=op(o);if(p!==null){p.flags&=-257,ap(p,o,a,s,e),p.mode&1&&sp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){sp(s,c,e),Xd();break e}l=Error(se(426))}}else if(ht&&a.mode&1){var m=op(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ap(m,o,a,s,e),wd(Ys(l,a));break e}}s=l=Ys(l,a),It!==4&&(It=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Jg(s,l,e);Jh(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fr===null||!fr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ev(s,a,e);Jh(s,y);break e}}s=s.return}while(s!==null)}xv(n)}catch(C){e=C,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function vv(){var t=ec.current;return ec.current=Jl,t===null?Jl:t}function Xd(){(It===0||It===3||It===2)&&(It=4),Xt===null||!(qr&268435455)&&!(Mc&268435455)||tr(Xt,$t)}function ic(t,e){var n=Qe;Qe|=2;var i=vv();(Xt!==t||$t!==e)&&(Pi=null,Br(t,e));do try{Ny();break}catch(r){gv(t,r)}while(!0);if(Rd(),Qe=n,ec.current=i,bt!==null)throw Error(se(261));return Xt=null,$t=0,It}function Ny(){for(;bt!==null;)_v(bt)}function Iy(){for(;bt!==null&&!sx();)_v(bt)}function _v(t){var e=Sv(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?xv(t):bt=e,Bd.current=null}function xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ry(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,bt=null;return}}else if(n=Ay(n,e,Pn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);It===0&&(It=5)}function Pr(t,e,n){var i=nt,r=Kn.transition;try{Kn.transition=null,nt=1,Oy(t,e,n,i)}finally{Kn.transition=r,nt=i}return null}function Oy(t,e,n,i){do zs();while(ir!==null);if(Qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mx(t,s),t===Xt&&(bt=Xt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,Mv(kl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=nt;nt=1;var a=Qe;Qe|=4,Bd.current=null,by(t,n),hv(n,t),ty(_f),Bl=!!vf,_f=vf=null,t.current=n,Ly(n),ox(),Qe=a,nt=o,Kn.transition=s}else t.current=n;if(Ua&&(Ua=!1,ir=t,nc=r),s=t.pendingLanes,s===0&&(fr=null),cx(n.stateNode),An(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tc)throw tc=!1,t=kf,kf=null,t;return nc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===zf?Oo++:(Oo=0,zf=t):Oo=0,Mr(),null}function zs(){if(ir!==null){var t=J0(nc),e=Kn.transition,n=nt;try{if(Kn.transition=null,nt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,nc=0,Qe&6)throw Error(se(331));var r=Qe;for(Qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:No(8,u,s)}var d=u.child;if(d!==null)d.return=u,_e=d;else for(;_e!==null;){u=_e;var h=u.sibling,p=u.return;if(uv(u),u===c){_e=null;break}if(h!==null){h.return=p,_e=h;break}_e=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,_e=f;break e}_e=s.return}}var g=t.current;for(_e=g;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=g;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if(Qe=r,Mr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(hc,t)}catch{}i=!0}return i}finally{nt=n,Kn.transition=e}}return!1}function yp(t,e,n){e=Ys(n,e),e=Jg(t,e,1),t=ur(t,e,1),e=mn(),t!==null&&(ca(t,1,e),An(t,e))}function Et(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Ys(n,t),t=ev(e,t,1),e=ur(e,t,1),t=mn(),e!==null&&(ca(e,1,t),An(e,t));break}}e=e.return}}function Uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&($t&n)===n&&(It===4||It===3&&($t&130023424)===$t&&500>Rt()-Hd?Br(t,0):Gd|=n),An(t,e)}function yv(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=mn();t=Bi(t,e),t!==null&&(ca(t,e,n),An(t,n))}function Fy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yv(t,n)}function ky(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),yv(t,n)}var Sv;Sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,wy(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,ht&&e.flags&1048576&&wg(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cl(t,e),t=e.pendingProps;var r=Vs(e,an.current);ks(e,n),r=Od(null,e,i,t,r,n);var s=Ud();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=yc,e.stateNode=r,r._reactInternals=e,Rf(e,i,t,n),e=Lf(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Ed(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),t=ii(i,t),r){case 0:e=bf(null,e,i,t,n);break e;case 1:e=up(null,e,i,t,n);break e;case 11:e=lp(null,e,i,t,n);break e;case 14:e=cp(null,e,i,ii(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),up(t,e,i,r,n);case 3:e:{if(rv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Pg(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(se(423)),e),e=fp(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(se(424)),e),e=fp(t,e,i,n,r);break e}else for(Un=cr(e.stateNode.containerInfo.firstChild),Fn=e,ht=!0,ai=null,n=bg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Gi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Dg(e),t===null&&Tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,xf(i,r)?o=null:s!==null&&xf(i,s)&&(e.flags|=32),iv(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return sv(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),lp(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(ql,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=$n(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),cp(t,e,i,r,n);case 15:return tv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Cl(t,e),e.tag=1,wn(i)?(t=!0,Xl(e)):t=!1,ks(e,n),Qg(e,i,r),Rf(e,i,r,n),Lf(null,e,i,!0,t,n);case 19:return ov(t,e,n);case 22:return nv(t,e,n)}throw Error(se(156,e.tag))};function Mv(t,e){return K0(t,e)}function zy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new zy(t,e,n,i)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===dd)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Gr(n.children,r,s,e);case ud:o=8,r|=8;break;case $u:return t=qn(12,n,e,r|2),t.elementType=$u,t.lanes=s,t;case Zu:return t=qn(13,n,e,r),t.elementType=Zu,t.lanes=s,t;case Qu:return t=qn(19,n,e,r),t.elementType=Qu,t.lanes=s,t;case D0:return Ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:o=10;break e;case P0:o=9;break e;case fd:o=11;break e;case dd:o=14;break e;case Qi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function Ec(t,e,n,i){return t=qn(22,t,i,e),t.elementType=D0,t.lanes=n,t.stateNode={isHidden:!1},t}function su(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,o,a,l){return t=new Gy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function Hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ev(t){if(!t)return _r;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(wn(n))return Eg(t,n,e)}return e}function Tv(t,e,n,i,r,s,o,a,l){return t=Yd(n,i,!0,t,r,s,o,a,l),t.context=Ev(null),n=t.current,i=mn(),r=dr(n),s=Fi(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,ca(t,r,i),An(t,i),t}function Tc(t,e,n,i){var r=e.current,s=mn(),o=dr(r);return n=Ev(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(di(t,r,o,s),wl(t,r,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function Vy(){return null}var wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}wc.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Tc(t,e,null,null)};wc.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Tc(null,t,null,null)}),e[zi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&rg(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function Wy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=rc(o);s.call(c)}}var o=Tv(e,i,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[zi]=o.current,qo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=rc(l);a.call(c)}}var l=Yd(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[zi]=l.current,qo(t.nodeType===8?t.parentNode:t),Kr(function(){Tc(e,l,n,i)}),l}function Rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=rc(o);a.call(l)}}Tc(e,o,t,r)}else o=Wy(n,e,t,r,i);return rc(o)}eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(md(e,n|1),An(e,Rt()),!(Qe&6)&&(qs=Rt()+500,Mr()))}break;case 13:Kr(function(){var i=Bi(t,1);if(i!==null){var r=mn();di(i,t,1,r)}}),qd(t,1)}};gd=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=mn();di(e,t,134217728,n)}qd(t,134217728)}};tg=function(t){if(t.tag===13){var e=dr(t),n=Bi(t,e);if(n!==null){var i=mn();di(n,t,e,i)}qd(t,e)}};ng=function(){return nt};ig=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};cf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vc(i);if(!r)throw Error(se(90));I0(i),tf(i,r)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};V0=Vd;W0=Kr;var Xy={usingClientEntryPoint:!1,Events:[fa,ws,vc,G0,H0,Vd]},ho={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{hc=Fa.inject(jy),Si=Fa}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(se(200));return Hy(t,e,null,n)};zn.createRoot=function(t,e){if(!$d(t))throw Error(se(299));var n=!1,i="",r=wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,qo(t.nodeType===8?t.parentNode:t),new Kd(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return Kr(t)};zn.hydrate=function(t,e,n){if(!Ac(e))throw Error(se(200));return Rc(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=wv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};zn.render=function(t,e,n){if(!Ac(e))throw Error(se(200));return Rc(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(se(40));return t._reactRootContainer?(Kr(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};zn.unstable_batchedUpdates=Vd;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ac(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Rc(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),A0.exports=zn;var Yy=A0.exports,Ep=Yy;qu.createRoot=Ep.createRoot,qu.hydrateRoot=Ep.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="160",qy=0,Tp=1,Ky=2,Rv=1,$y=2,Li=3,xr=0,gn=1,li=2,pr=0,Bs=1,wp=2,Ap=3,Rp=4,Zy=5,Ir=100,Qy=101,Jy=102,Cp=103,bp=104,eS=200,tS=201,nS=202,iS=203,Hf=204,Vf=205,rS=206,sS=207,oS=208,aS=209,lS=210,cS=211,uS=212,fS=213,dS=214,hS=0,pS=1,mS=2,sc=3,gS=4,vS=5,_S=6,xS=7,Qd=0,yS=1,SS=2,mr=0,MS=1,ES=2,TS=3,wS=4,AS=5,RS=6,Cv=300,Ks=301,$s=302,Wf=303,Xf=304,Cc=306,jf=1e3,On=1001,Yf=1002,sn=1003,qf=1004,au=1005,Xn=1006,CS=1007,ia=1008,gr=1009,bS=1010,LS=1011,Jd=1012,bv=1013,rr=1014,sr=1015,ra=1016,Lv=1017,Pv=1018,Hr=1020,PS=1021,ci=1023,DS=1024,NS=1025,Vr=1026,Zs=1027,IS=1028,Dv=1029,OS=1030,Nv=1031,Iv=1033,lu=33776,cu=33777,uu=33778,fu=33779,Lp=35840,Pp=35841,Dp=35842,Np=35843,Ov=36196,Ip=37492,Op=37496,Up=37808,Fp=37809,kp=37810,zp=37811,Bp=37812,Gp=37813,Hp=37814,Vp=37815,Wp=37816,Xp=37817,jp=37818,Yp=37819,qp=37820,Kp=37821,du=36492,$p=36494,Zp=36495,US=36283,Qp=36284,Jp=36285,em=36286,Uv=3e3,Wr=3001,FS=3200,kS=3201,Fv=0,zS=1,Yn="",Wt="srgb",Hi="srgb-linear",eh="display-p3",bc="display-p3-linear",oc="linear",ft="srgb",ac="rec709",lc="p3",ns=7680,tm=519,BS=512,GS=513,HS=514,kv=515,VS=516,WS=517,XS=518,jS=519,nm=35044,im="300 es",Kf=1035,Ui=2e3,cc=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=Math.PI/180,$f=180/Math.PI;function ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Sn(t,e,n){return Math.max(e,Math.min(n,t))}function YS(t,e){return(t%e+e)%e}function hu(t,e,n){return(1-n)*t+n*e}function rm(t){return(t&t-1)===0&&t!==0}function Zf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],f=r[6],g=r[1],v=r[4],y=r[7],C=r[2],w=r[5],A=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*m+a*v+l*w,s[6]=o*f+a*y+l*A,s[1]=c*x+u*g+d*C,s[4]=c*m+u*v+d*w,s[7]=c*f+u*y+d*A,s[2]=h*x+p*g+_*C,s[5]=h*m+p*v+_*w,s[8]=h*f+p*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pu.makeScale(e,n)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new Ye;function zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qS(){const t=uc("canvas");return t.style.display="block",t}const sm={};function Uo(t){t in sm||(sm[t]=!0,console.warn(t))}const om=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Hi]:{transfer:oc,primaries:ac,toReference:t=>t,fromReference:t=>t},[Wt]:{transfer:ft,primaries:ac,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bc]:{transfer:oc,primaries:lc,toReference:t=>t.applyMatrix3(am),fromReference:t=>t.applyMatrix3(om)},[eh]:{transfer:ft,primaries:lc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(am),fromReference:t=>t.applyMatrix3(om).convertLinearToSRGB()}},KS=new Set([Hi,bc]),rt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!KS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,r=ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===Yn?oc:ka[t].transfer}};function Gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=uc("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gs(n[i]/255)*255):n[i]=Gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class Gv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ha(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gu(r[o].image)):s.push(gu(r[o]))}else s=gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;class Rn extends no{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,i=On,r=On,s=Xn,o=ia,a=ci,l=gr,c=Rn.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ha(),this.name="",this.source=new Gv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wr?Wt:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Wt?Wr:Uv}set encoding(e){Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?Wt:Yn}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Cv;Rn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(f+1)/2,w=(u+h)/4,A=(d+x)/4,N=(_+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=N/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-x)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wr?Wt:Yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Gv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends QS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hv extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JS extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==_){let m=1-a;const f=l*h+c*p+u*_+d*x,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,f*g);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*g;if(l=l*m+h*y,c=c*m+p*y,u=u*m+_*y,d=d*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*p-c*h,e[n+1]=l*_+u*h+c*d-a*p,e[n+2]=c*_+u*p+a*h-l*d,e[n+3]=u*_-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new P,lm=new pa;class ma{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ba.subVectors(this.max,mo),rs.subVectors(e.a,mo),ss.subVectors(e.b,mo),os.subVectors(e.c,mo),Xi.subVectors(ss,rs),ji.subVectors(os,ss),wr.subVectors(rs,os);let n=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-wr.z,wr.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,wr.z,0,-wr.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-wr.y,wr.x,0];return!_u(n,rs,ss,os,Ba)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,rs,ss,os,Ba))?!1:(Ga.crossVectors(Xi,ji),n=[Ga.x,Ga.y,Ga.z],_u(n,rs,ss,os,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new P,new P,new P,new P,new P,new P,new P,new P],Jn=new P,za=new ma,rs=new P,ss=new P,os=new P,Xi=new P,ji=new P,wr=new P,mo=new P,Ba=new P,Ga=new P,Ar=new P;function _u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const e1=new ma,go=new P,xu=new P;class ga{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):e1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(xu)),this.expandByPoint(go.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new P,yu=new P,Ha=new P,Yi=new P,Su=new P,Va=new P,Mu=new P;class th{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(yu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=Yi.dot(this.direction),l=-Yi.dot(Ha),c=Yi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yu).addScaledVector(Ha,h),p}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),Va.subVectors(i,e),Mu.crossVectors(Su,Va);let o=this.direction.dot(Mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Yi,Va));if(l<0)return null;const c=a*this.direction.dot(Su.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,_,x,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,_,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,_=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,x=c*d;n[0]=h+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,_=a*u,x=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),qi.crossVectors(i,bn),qi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),qi.crossVectors(i,bn)),qi.normalize(),Wa.crossVectors(bn,qi),r[0]=qi.x,r[4]=Wa.x,r[8]=bn.x,r[1]=qi.y,r[5]=Wa.y,r[9]=bn.y,r[2]=qi.z,r[6]=Wa.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],g=i[3],v=i[7],y=i[11],C=i[15],w=r[0],A=r[4],N=r[8],M=r[12],E=r[1],z=r[5],Y=r[9],K=r[13],L=r[2],F=r[6],q=r[10],Z=r[14],D=r[3],k=r[7],B=r[11],Q=r[15];return s[0]=o*w+a*E+l*L+c*D,s[4]=o*A+a*z+l*F+c*k,s[8]=o*N+a*Y+l*q+c*B,s[12]=o*M+a*K+l*Z+c*Q,s[1]=u*w+d*E+h*L+p*D,s[5]=u*A+d*z+h*F+p*k,s[9]=u*N+d*Y+h*q+p*B,s[13]=u*M+d*K+h*Z+p*Q,s[2]=_*w+x*E+m*L+f*D,s[6]=_*A+x*z+m*F+f*k,s[10]=_*N+x*Y+m*q+f*B,s[14]=_*M+x*K+m*Z+f*Q,s[3]=g*w+v*E+y*L+C*D,s[7]=g*A+v*z+y*F+C*k,s[11]=g*N+v*Y+y*q+C*B,s[15]=g*M+v*K+y*Z+C*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],g=d*m*c-x*h*c+x*l*p-a*m*p-d*l*f+a*h*f,v=_*h*c-u*m*c-_*l*p+o*m*p+u*l*f-o*h*f,y=u*x*c-_*d*c+_*a*p-o*x*p-u*a*f+o*d*f,C=_*d*l-u*x*l-_*a*h+o*x*h+u*a*m-o*d*m,w=n*g+i*v+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*f+n*h*f)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*f-n*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(_*d*s-u*x*s-_*i*p+n*x*p+u*i*f-n*d*f)*A,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*x*r-_*d*r+_*i*h-n*x*h-u*i*m+n*d*m)*A,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,_=s*d,x=o*u,m=o*d,f=a*d,g=l*c,v=l*u,y=l*d,C=i.x,w=i.y,A=i.z;return r[0]=(1-(x+f))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/s,u=1/o,d=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ui){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Ui)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===cc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ui){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let _,x;if(a===Ui)_=(o+s)*d,x=-2*d;else if(a===cc)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const as=new P,ei=new Tt,t1=new P(0,0,0),n1=new P(1,1,1),qi=new P,Wa=new P,bn=new P,cm=new Tt,um=new pa;class va{constructor(e=0,n=0,i=0,r=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const fm=new P,ls=new pa,Ai=new Tt,Xa=new P,vo=new P,r1=new P,s1=new pa,dm=new P(1,0,0),hm=new P(0,1,0),pm=new P(0,0,1),o1={type:"added"},a1={type:"removed"};class jt extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new P,n=new va,i=new pa,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ye}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xa.copy(e):Xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(vo,Xa,this.up):Ai.lookAt(Xa,vo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(Ai),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new P(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new P,Ri=new P,Eu=new P,Ci=new P,cs=new P,us=new P,mm=new P,Tu=new P,wu=new P,Au=new P;let ja=!1;class jn{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Ri.subVectors(i,n),Eu.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Ri),l=ti.dot(Eu),c=Ri.dot(Ri),u=Ri.dot(Eu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,n,i,r,s,o,a,l){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Ri.subVectors(e,n),ti.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,i),us.subVectors(s,i),Tu.subVectors(e,i);const l=cs.dot(Tu),c=us.dot(Tu);if(l<=0&&c<=0)return n.copy(i);wu.subVectors(e,r);const u=cs.dot(wu),d=us.dot(wu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(cs,o);Au.subVectors(e,s);const p=cs.dot(Au),_=us.dot(Au);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(us,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return mm.subVectors(s,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(mm,a);const f=1/(m+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Pe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=YS(e,1),n=Sn(n,0,1),i=Sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wt){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=mu(e.r),this.g=mu(e.g),this.b=mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return rt.fromWorkingColorSpace(rn.copy(this),e),Math.round(Sn(rn.r*255,0,255))*65536+Math.round(Sn(rn.g*255,0,255))*256+Math.round(Sn(rn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Wt){rt.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Wt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Ya);const i=hu(Ki.h,Ya.h,n),r=hu(Ki.s,Ya.s,n),s=hu(Ki.l,Ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Pe;Pe.NAMES=Wv;let l1=0;class es extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Bs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Vf,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nh extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new P,qa=new Je;class En{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qa.fromBufferAttribute(this,n),qa.applyMatrix3(e),this.setXY(n,qa.x,qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class Xv extends En{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jv extends En{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kt extends En{constructor(e,n,i){super(new Float32Array(e),n,i)}}let c1=0;const Hn=new Tt,Cu=new jt,fs=new P,Ln=new ma,_o=new ma,zt=new P;class pn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?jv:Xv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Ln.min,_o.min),Ln.expandByPoint(zt),zt.addVectors(Ln.max,_o.max),Ln.expandByPoint(zt)):(Ln.expandByPoint(_o.min),Ln.expandByPoint(_o.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),zt.add(fs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new P,u[E]=new P;const d=new P,h=new P,p=new P,_=new Je,x=new Je,m=new Je,f=new P,g=new P;function v(E,z,Y){d.fromArray(r,E*3),h.fromArray(r,z*3),p.fromArray(r,Y*3),_.fromArray(o,E*2),x.fromArray(o,z*2),m.fromArray(o,Y*2),h.sub(d),p.sub(d),x.sub(_),m.sub(_);const K=1/(x.x*m.y-m.x*x.y);isFinite(K)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(K),g.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(K),c[E].add(f),c[z].add(f),c[Y].add(f),u[E].add(g),u[z].add(g),u[Y].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,z=y.length;E<z;++E){const Y=y[E],K=Y.start,L=Y.count;for(let F=K,q=K+L;F<q;F+=3)v(i[F+0],i[F+1],i[F+2])}const C=new P,w=new P,A=new P,N=new P;function M(E){A.fromArray(s,E*3),N.copy(A);const z=c[E];C.copy(z),C.sub(A.multiplyScalar(A.dot(z))).normalize(),w.crossVectors(N,z);const K=w.dot(u[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=K}for(let E=0,z=y.length;E<z;++E){const Y=y[E],K=Y.start,L=Y.count;for(let F=K,q=K+L;F<q;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new En(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Tt,Rr=new th,Ka=new ga,vm=new P,ds=new P,hs=new P,ps=new P,bu=new P,$a=new P,Za=new Je,Qa=new Je,Ja=new Je,_m=new P,xm=new P,ym=new P,el=new P,tl=new P;class et extends jt{constructor(e=new pn,n=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(bu.fromBufferAttribute(d,e),o?$a.addScaledVector(bu,u):$a.addScaledVector(bu.sub(n),u))}n.add($a)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Ka.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ka,vm)===null||Rr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(gm.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(gm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){const w=a.getX(y),A=a.getX(y+1),N=a.getX(y+2);r=nl(this,f,e,i,c,u,d,w,A,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=nl(this,o,e,i,c,u,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){const w=y,A=y+1,N=y+2;r=nl(this,f,e,i,c,u,d,w,A,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const g=m,v=m+1,y=m+2;r=nl(this,o,e,i,c,u,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function u1(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;tl.copy(a),tl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(tl);return c<n.near||c>n.far?null:{distance:c,point:tl.clone(),object:t}}function nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ds),t.getVertexPosition(l,hs),t.getVertexPosition(c,ps);const u=u1(t,e,n,i,ds,hs,ps,el);if(u){r&&(Za.fromBufferAttribute(r,a),Qa.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,c),u.uv=jn.getInterpolation(el,ds,hs,ps,Za,Qa,Ja,new Je)),s&&(Za.fromBufferAttribute(s,a),Qa.fromBufferAttribute(s,l),Ja.fromBufferAttribute(s,c),u.uv1=jn.getInterpolation(el,ds,hs,ps,Za,Qa,Ja,new Je),u.uv2=u.uv1),o&&(_m.fromBufferAttribute(o,a),xm.fromBufferAttribute(o,l),ym.fromBufferAttribute(o,c),u.normal=jn.getInterpolation(el,ds,hs,ps,_m,xm,ym,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};jn.getNormal(ds,hs,ps,d.normal),u.face=d}return u}class lt extends pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function _(x,m,f,g,v,y,C,w,A,N,M){const E=y/A,z=C/N,Y=y/2,K=C/2,L=w/2,F=A+1,q=N+1;let Z=0,D=0;const k=new P;for(let B=0;B<q;B++){const Q=B*z-K;for(let J=0;J<F;J++){const X=J*E-Y;k[x]=X*g,k[m]=Q*v,k[f]=L,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[f]=w>0?1:-1,u.push(k.x,k.y,k.z),d.push(J/A),d.push(1-B/N),Z+=1}}for(let B=0;B<N;B++)for(let Q=0;Q<A;Q++){const J=h+Q+F*B,X=h+Q+F*(B+1),$=h+(Q+1)+F*(B+1),le=h+(Q+1)+F*B;l.push(J,X,le),l.push(X,$,le),D+=6}a.addGroup(p,D,M),p+=D,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Qs(t[n]);for(const r in i)e[r]=i[r]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yv(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const d1={clone:Qs,merge:fn};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends qv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class m1 extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new In(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new In(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new In(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new In(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new In(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kv extends Rn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g1 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wr?Wt:Yn),this.texture=new Kv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lt(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:pr});s.uniforms.tEquirect.value=n;const o=new et(r,s),a=n.minFilter;return n.minFilter===ia&&(n.minFilter=Xn),new m1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lu=new P,v1=new P,_1=new Ye;class Dr{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lu.subVectors(i,n).cross(v1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_1.getNormalMatrix(e),r=this.coplanarPoint(Lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ga,il=new P;class ih{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,s=new Dr,o=new Dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],f=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-f).normalize(),i[1].setComponents(l+s,h+c,m+p,y+f).normalize(),i[2].setComponents(l+o,h+u,m+_,y+g).normalize(),i[3].setComponents(l-o,h-u,m-_,y-g).normalize(),i[4].setComponents(l-a,h-d,m-x,y-v).normalize(),n===Ui)i[5].setComponents(l+a,h+d,m+x,y+v).normalize();else if(n===cc)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function x1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=d.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const h=u.array,p=u._updateRange,_=u.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,m=_.length;x<m;x++){const f=_[x];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class rh extends pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let v=0;v<c;v++){const y=v*d-s;_.push(y,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+c*f,y=g+c*(f+1),C=g+1+c*(f+1),w=g+1+c*f;p.push(v,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.width,e.height,e.widthSegments,e.heightSegments)}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,V1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,OM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:w1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:b1,begin_vertex:L1,beginnormal_vertex:P1,bsdfs:D1,iridescence_fragment:N1,bumpmap_pars_fragment:I1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:U1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:k1,color_fragment:z1,color_pars_fragment:B1,color_pars_vertex:G1,color_vertex:H1,common:V1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:X1,displacementmap_pars_vertex:j1,displacementmap_vertex:Y1,emissivemap_fragment:q1,emissivemap_pars_fragment:K1,colorspace_fragment:$1,colorspace_pars_fragment:Z1,envmap_fragment:Q1,envmap_common_pars_fragment:J1,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:hM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:aM,lightmap_fragment:lM,lightmap_pars_fragment:cM,lights_lambert_fragment:uM,lights_lambert_pars_fragment:fM,lights_pars_begin:dM,lights_toon_fragment:pM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:vM,lights_physical_fragment:_M,lights_physical_pars_fragment:xM,lights_fragment_begin:yM,lights_fragment_maps:SM,lights_fragment_end:MM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:AM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:bM,map_particle_pars_fragment:LM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:DM,morphcolor_vertex:NM,morphnormal_vertex:IM,morphtarget_pars_vertex:OM,morphtarget_vertex:UM,normal_fragment_begin:FM,normal_fragment_maps:kM,normal_pars_fragment:zM,normal_pars_vertex:BM,normal_vertex:GM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:jM,opaque_fragment:YM,packing:qM,premultiplied_alpha_fragment:KM,project_vertex:$M,dithering_fragment:ZM,dithering_pars_fragment:QM,roughnessmap_fragment:JM,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:aE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:fE,tonemapping_pars_fragment:dE,transmission_fragment:hE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:vE,worldpos_vertex:_E,background_vert:xE,background_frag:yE,backgroundCube_vert:SE,backgroundCube_frag:ME,cube_vert:EE,cube_frag:TE,depth_vert:wE,depth_frag:AE,distanceRGBA_vert:RE,distanceRGBA_frag:CE,equirect_vert:bE,equirect_frag:LE,linedashed_vert:PE,linedashed_frag:DE,meshbasic_vert:NE,meshbasic_frag:IE,meshlambert_vert:OE,meshlambert_frag:UE,meshmatcap_vert:FE,meshmatcap_frag:kE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:GE,meshphong_frag:HE,meshphysical_vert:VE,meshphysical_frag:WE,meshtoon_vert:XE,meshtoon_frag:jE,points_vert:YE,points_frag:qE,shadow_vert:KE,shadow_frag:$E,sprite_vert:ZE,sprite_frag:QE},ue={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},_i={basic:{uniforms:fn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:fn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:fn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:fn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:fn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:fn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:fn([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:fn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:fn([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:fn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:fn([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:fn([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:fn([ue.lights,ue.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};_i.physical={uniforms:fn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const rl={r:0,b:0,g:0};function JE(t,e,n,i,r,s,o){const a=new Pe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(m,f){let g=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cc)?(u===void 0&&(u=new et(new lt(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Qs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=rt.getTransfer(v.colorSpace)!==ft,(d!==v||h!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new et(new rh(2,2),new ui({name:"BackgroundMaterial",uniforms:Qs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=rt.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(rl,Yv(t)),i.buffers.color.setClear(rl.r,rl.g,rl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function eT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(L,F,q,Z,D){let k=!1;if(o){const B=x(Z,q,F);c!==B&&(c=B,p(c.object)),k=f(L,Z,q,D),k&&g(L,Z,q,D)}else{const B=F.wireframe===!0;(c.geometry!==Z.id||c.program!==q.id||c.wireframe!==B)&&(c.geometry=Z.id,c.program=q.id,c.wireframe=B,k=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,N(L,F,q,Z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,F,q){const Z=q.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let k=D[F.id];k===void 0&&(k={},D[F.id]=k);let B=k[Z];return B===void 0&&(B=m(h()),k[Z]=B),B}function m(L){const F=[],q=[],Z=[];for(let D=0;D<r;D++)F[D]=0,q[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Z,object:L,attributes:{},index:null}}function f(L,F,q,Z){const D=c.attributes,k=F.attributes;let B=0;const Q=q.getAttributes();for(const J in Q)if(Q[J].location>=0){const $=D[J];let le=k[J];if(le===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;B++}return c.attributesNum!==B||c.index!==Z}function g(L,F,q,Z){const D={},k=F.attributes;let B=0;const Q=q.getAttributes();for(const J in Q)if(Q[J].location>=0){let $=k[J];$===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const le={};le.attribute=$,$&&$.data&&(le.data=$.data),D[J]=le,B++}c.attributes=D,c.attributesNum=B,c.index=Z}function v(){const L=c.newAttributes;for(let F=0,q=L.length;F<q;F++)L[F]=0}function y(L){C(L,0)}function C(L,F){const q=c.newAttributes,Z=c.enabledAttributes,D=c.attributeDivisors;q[L]=1,Z[L]===0&&(t.enableVertexAttribArray(L),Z[L]=1),D[L]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),D[L]=F)}function w(){const L=c.newAttributes,F=c.enabledAttributes;for(let q=0,Z=F.length;q<Z;q++)F[q]!==L[q]&&(t.disableVertexAttribArray(q),F[q]=0)}function A(L,F,q,Z,D,k,B){B===!0?t.vertexAttribIPointer(L,F,q,D,k):t.vertexAttribPointer(L,F,q,Z,D,k)}function N(L,F,q,Z){if(i.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=Z.attributes,k=q.getAttributes(),B=F.defaultAttributeValues;for(const Q in k){const J=k[Q];if(J.location>=0){let X=D[Q];if(X===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const $=X.normalized,le=X.itemSize,me=n.get(X);if(me===void 0)continue;const ge=me.buffer,Ae=me.type,Re=me.bytesPerElement,xe=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||X.gpuType===bv);if(X.isInterleavedBufferAttribute){const Ze=X.data,G=Ze.stride,ln=X.offset;if(Ze.isInstancedInterleavedBuffer){for(let Ce=0;Ce<J.locationSize;Ce++)C(J.location+Ce,Ze.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let Ce=0;Ce<J.locationSize;Ce++)y(J.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Ce=0;Ce<J.locationSize;Ce++)A(J.location+Ce,le/J.locationSize,Ae,$,G*Re,(ln+le/J.locationSize*Ce)*Re,xe)}else{if(X.isInstancedBufferAttribute){for(let Ze=0;Ze<J.locationSize;Ze++)C(J.location+Ze,X.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ze=0;Ze<J.locationSize;Ze++)y(J.location+Ze);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Ze=0;Ze<J.locationSize;Ze++)A(J.location+Ze,le/J.locationSize,Ae,$,le*Re,le/J.locationSize*Ze*Re,xe)}}else if(B!==void 0){const $=B[Q];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(J.location,$);break;case 3:t.vertexAttrib3fv(J.location,$);break;case 4:t.vertexAttrib4fv(J.location,$);break;default:t.vertexAttrib1fv(J.location,$)}}}}w()}function M(){Y();for(const L in a){const F=a[L];for(const q in F){const Z=F[q];for(const D in Z)_(Z[D].object),delete Z[D];delete F[q]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const q in F){const Z=F[q];for(const D in Z)_(Z[D].object),delete Z[D];delete F[q]}delete a[L.id]}function z(L){for(const F in a){const q=a[F];if(q[L.id]===void 0)continue;const Z=q[L.id];for(const D in Z)_(Z[D].object),delete Z[D];delete q[L.id]}}function Y(){K(),u=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function tT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,h){if(h===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,d,h),n.update(d,s,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(u[_],d[_]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),C=v&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:w}}function iT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Dr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let y=f.clippingState||null;l.value=y,y=u(_,h,v,p);for(let C=0;C!==v;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function rT(t){let e=new WeakMap;function n(o,a){return a===Wf?o.mapping=Ks:a===Xf&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wf||a===Xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new g1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zv extends qv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Sm=[.125,.215,.35,.446,.526,.582],Or=20,Pu=new Zv,Mm=new Pe;let Du=null,Nu=0,Iu=0;const Nr=(1+Math.sqrt(5))/2,vs=1/Nr,Em=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Nr,vs),new P(0,Nr,-vs),new P(vs,0,Nr),new P(-vs,0,Nr),new P(Nr,vs,0),new P(-Nr,vs,0)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Du=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Du,Nu,Iu),e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ra,format:ci,colorSpace:Hi,depthBuffer:!1},r=wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(s)),this._blurMaterial=oT(s,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,Pu)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Mm),u.toneMapping=mr,u.autoClear=!1;const p=new nh({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new et(new lt,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Mm),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;sl(r,g*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Em[(r-1)%Em.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new et(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const f=[];let g=0;for(let A=0;A<Or;++A){const N=A/x,M=Math.exp(-N*N/2);f.push(M),A===0?g+=M:A<m&&(g+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-Ds?r-v+Ds:0),w=4*(this._cubeSize-y);sl(n,C,w,3*y,2*y),l.setRenderTarget(n),l.render(d,Pu)}}function sT(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Sm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=Sm[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,f=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,N=w>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];g.set(M,x*_*w),v.set(h,m*_*w);const E=[w,w,w,w,w,w];y.set(E,f*_*w)}const C=new pn;C.setAttribute("position",new En(g,x)),C.setAttribute("uv",new En(v,m)),C.setAttribute("faceIndex",new En(y,f)),e.push(C),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wm(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oT(t,e,n){const i=new Float32Array(Or),r=new P(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Am(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Rm(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wf||l===Xf,u=l===Ks||l===$s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Tm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function lT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,y=g.length;v<y;v+=3){const C=g[v+0],w=g[v+1],A=g[v+2];h.push(C,w,w,A,A,C)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const C=v+0,w=v+1,A=v+2;h.push(C,w,w,A,A,C)}}else return;const m=new(zv(h)?jv:Xv)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function uT(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function d(p,_,x){if(x===0)return;let m,f;if(r)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,a,p*l,x),n.update(_,s,x)}function h(p,_,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,x);let f=0;for(let g=0;g<x;g++)f+=_[g];n.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function fT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dT(t,e){return t[0]-e[0]}function hT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==x){let F=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let E=u.attributes.position.count*M,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Y=new Float32Array(E*z*4*x),K=new Hv(Y,E,z,x);K.type=sr,K.needsUpdate=!0;const L=M*4;for(let q=0;q<x;q++){const Z=w[q],D=A[q],k=N[q],B=E*z*4*q;for(let Q=0;Q<Z.count;Q++){const J=Q*L;v===!0&&(o.fromBufferAttribute(Z,Q),Y[B+J+0]=o.x,Y[B+J+1]=o.y,Y[B+J+2]=o.z,Y[B+J+3]=0),y===!0&&(o.fromBufferAttribute(D,Q),Y[B+J+4]=o.x,Y[B+J+5]=o.y,Y[B+J+6]=o.z,Y[B+J+7]=0),C===!0&&(o.fromBufferAttribute(k,Q),Y[B+J+8]=o.x,Y[B+J+9]=o.y,Y[B+J+10]=o.z,Y[B+J+11]=k.itemSize===4?o.w:1)}}m={count:x,texture:K,size:new Je(E,z)},s.set(u,m),u.addEventListener("dispose",F)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const g=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<_;y++){const C=x[y];C[0]=y,C[1]=h[y]}x.sort(hT);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(dT);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],w=C[0],A=C[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[w]&&u.setAttribute("morphTarget"+y,m[w]),f&&u.getAttribute("morphNormal"+y)!==f[w]&&u.setAttribute("morphNormal"+y,f[w]),r[y]=A,g+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Qv extends Rn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Vr,u!==Vr&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=rr),i===void 0&&u===Zs&&(i=Hr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jv=new Rn,e_=new Qv(1,1);e_.compareFunction=kv;const t_=new Hv,n_=new JS,i_=new Kv,Cm=[],bm=[],Lm=new Float32Array(16),Pm=new Float32Array(9),Dm=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),Ut(n,i)}}function ST(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,i))return;Pm.set(i),t.uniformMatrix3fv(this.addr,!1,Pm),Ut(n,i)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Ot(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Ut(n,i)}}function ET(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function PT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?e_:Jv;n.setTexture2D(e||s,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||n_,r)}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||i_,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||t_,r)}function OT(t){switch(t){case 5126:return gT;case 35664:return vT;case 35665:return _T;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return wT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return bT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return IT}}function UT(t,e){t.uniform1fv(this.addr,e)}function FT(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function kT(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function zT(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function BT(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GT(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HT(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VT(t,e){t.uniform1iv(this.addr,e)}function WT(t,e){t.uniform2iv(this.addr,e)}function XT(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function YT(t,e){t.uniform1uiv(this.addr,e)}function qT(t,e){t.uniform2uiv(this.addr,e)}function KT(t,e){t.uniform3uiv(this.addr,e)}function $T(t,e){t.uniform4uiv(this.addr,e)}function ZT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jv,s[o])}function QT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||n_,s[o])}function JT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||i_,s[o])}function ew(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||t_,s[o])}function tw(t){switch(t){case 5126:return UT;case 35664:return FT;case 35665:return kT;case 35666:return zT;case 35674:return BT;case 35675:return GT;case 35676:return HT;case 5124:case 35670:return VT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return jT;case 5125:return YT;case 36294:return qT;case 36295:return KT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return ew}}class nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=OT(n.type)}}class iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tw(n.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function Nm(t,e){t.seq.push(e),t.map[e.id]=e}function sw(t,e,n){const i=t.name,r=i.length;for(Ou.lastIndex=0;;){const s=Ou.exec(i),o=Ou.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nm(n,c===void 0?new nw(a,t,e):new iw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new rw(a),Nm(n,d)),n=d}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Im(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ow=37297;let aw=0;function lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function cw(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===lc&&n===ac?i="LinearDisplayP3ToLinearSRGB":e===ac&&n===lc&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case bc:return[i,"LinearTransferOETF"];case Wt:case eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lw(t.getShaderSource(e),o)}else return r}function uw(t,e){const n=cw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fw(t,e){let n;switch(e){case MS:n="Linear";break;case ES:n="Reinhard";break;case TS:n="OptimizedCineon";break;case wS:n="ACESFilmic";break;case RS:n="AgX";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function dw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function hw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function pw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ns(t){return t!==""}function Um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(t){return t.replace(gw,_w)}const vw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _w(t,e){let n=Ge[e];if(n===void 0){const i=vw.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(n)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(xw,yw)}function yw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$y?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Mw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case $s:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ew(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function Tw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case SS:e="ENVMAP_BLENDING_ADD";break}return e}function ww(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Aw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Sw(n),c=Mw(n),u=Ew(n),d=Tw(n),h=ww(n),p=n.isWebGL2?"":dw(n),_=hw(n),x=pw(s),m=r.createProgram();let f,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ns).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ns).join(`
`),g.length>0&&(g+=`
`)):(f=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),g=[p,zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==mr?fw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,uw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Qf(o),o=Um(o,n),o=Fm(o,n),a=Qf(a),a=Um(a,n),a=Fm(a,n),o=km(o),a=km(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+f+o,C=v+g+a,w=Im(r,r.VERTEX_SHADER,y),A=Im(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(Y){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(A).trim();let q=!0,Z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,A);else{const D=Om(r,w,"vertex"),k=Om(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+D+`
`+k)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||F==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:q,programLog:K,vertexShader:{log:L,prefix:f},fragmentShader:{log:F,prefix:g}})}r.deleteShader(w),r.deleteShader(A),M=new Nl(r,m),E=mw(r,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,ow)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Rw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bw(e),n.set(e,i)),i}}class bw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Lw(t,e,n,i,r,s,o){const a=new Vv,l=new Cw,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,z,Y,K){const L=Y.fog,F=K.geometry,q=M.isMeshStandardMaterial?Y.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),D=Z&&Z.mapping===Cc?Z.image.height:null,k=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Q=B!==void 0?B.length:0;let J=0;F.morphAttributes.position!==void 0&&(J=1),F.morphAttributes.normal!==void 0&&(J=2),F.morphAttributes.color!==void 0&&(J=3);let X,$,le,me;if(k){const cn=_i[k];X=cn.vertexShader,$=cn.fragmentShader}else X=M.vertexShader,$=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const ge=t.getRenderTarget(),Ae=K.isInstancedMesh===!0,Re=K.isBatchedMesh===!0,xe=!!M.map,Ze=!!M.matcap,G=!!Z,ln=!!M.aoMap,Ce=!!M.lightMap,Fe=!!M.bumpMap,Me=!!M.normalMap,mt=!!M.displacementMap,He=!!M.emissiveMap,R=!!M.metalnessMap,S=!!M.roughnessMap,V=M.anisotropy>0,oe=M.clearcoat>0,re=M.iridescence>0,ae=M.sheen>0,Ee=M.transmission>0,pe=V&&!!M.anisotropyMap,ye=oe&&!!M.clearcoatMap,De=oe&&!!M.clearcoatNormalMap,Ve=oe&&!!M.clearcoatRoughnessMap,ie=re&&!!M.iridescenceMap,it=re&&!!M.iridescenceThicknessMap,qe=ae&&!!M.sheenColorMap,Ue=ae&&!!M.sheenRoughnessMap,we=!!M.specularMap,Se=!!M.specularColorMap,Be=!!M.specularIntensityMap,tt=Ee&&!!M.transmissionMap,yt=Ee&&!!M.thicknessMap,Xe=!!M.gradientMap,ce=!!M.alphaMap,b=M.alphaTest>0,de=!!M.alphaHash,he=!!M.extensions,Ne=!!F.attributes.uv1,be=!!F.attributes.uv2,st=!!F.attributes.uv3;let ot=mr;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ot=t.toneMapping),{isWebGL2:u,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:$,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Re,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Hi,map:xe,matcap:Ze,envMap:G,envMapMode:G&&Z.mapping,envMapCubeUVHeight:D,aoMap:ln,lightMap:Ce,bumpMap:Fe,normalMap:Me,displacementMap:h&&mt,emissiveMap:He,normalMapObjectSpace:Me&&M.normalMapType===zS,normalMapTangentSpace:Me&&M.normalMapType===Fv,metalnessMap:R,roughnessMap:S,anisotropy:V,anisotropyMap:pe,clearcoat:oe,clearcoatMap:ye,clearcoatNormalMap:De,clearcoatRoughnessMap:Ve,iridescence:re,iridescenceMap:ie,iridescenceThicknessMap:it,sheen:ae,sheenColorMap:qe,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:Se,specularIntensityMap:Be,transmission:Ee,transmissionMap:tt,thicknessMap:yt,gradientMap:Xe,opaque:M.transparent===!1&&M.blending===Bs,alphaMap:ce,alphaTest:b,alphaHash:de,combine:M.combine,mapUv:xe&&x(M.map.channel),aoMapUv:ln&&x(M.aoMap.channel),lightMapUv:Ce&&x(M.lightMap.channel),bumpMapUv:Fe&&x(M.bumpMap.channel),normalMapUv:Me&&x(M.normalMap.channel),displacementMapUv:mt&&x(M.displacementMap.channel),emissiveMapUv:He&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:pe&&x(M.anisotropyMap.channel),clearcoatMapUv:ye&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:Se&&x(M.specularColorMap.channel),specularIntensityMapUv:Be&&x(M.specularIntensityMap.channel),transmissionMapUv:tt&&x(M.transmissionMap.channel),thicknessMapUv:yt&&x(M.thicknessMap.channel),alphaMapUv:ce&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:be,vertexUv3s:st,pointsUvs:K.isPoints===!0&&!!F.attributes.uv&&(xe||ce),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)E.push(z),E.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(g(E,M),v(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function g(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const E=_[M.type];let z;if(E){const Y=_i[E];z=d1.clone(Y.uniforms)}else z=M.uniforms;return z}function C(M,E){let z;for(let Y=0,K=c.length;Y<K;Y++){const L=c[Y];if(L.cacheKey===E){z=L,++z.usedTimes;break}}return z===void 0&&(z=new Aw(t,E,M,s),c.push(z)),z}function w(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:N}}function Pw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Dw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,_,x,m){const f=o(d,h,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,_,x,m){const f=o(d,h,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||Dw),i.length>1&&i.sort(h||Bm),r.length>1&&r.sort(h||Bm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Nw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Gm,t.set(i,[o])):r>=s.length?(o=new Gm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Pe};break;case"SpotLight":n={position:new P,direction:new P,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":n={color:new Pe,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function Ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Uw=0;function Fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kw(t,e){const n=new Iw,i=Ow(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,o=new Tt,a=new Tt;function l(u,d){let h=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,m=0,f=0,g=0,v=0,y=0,C=0,w=0,A=0,N=0,M=0;u.sort(Fw);const E=d===!0?Math.PI:1;for(let Y=0,K=u.length;Y<K;Y++){const L=u[Y],F=L.color,q=L.intensity,Z=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*q*E,p+=F.g*q*E,_+=F.b*q*E;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],q);M++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const B=L.shadow,Q=i.get(L);Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,r.directionalShadow[x]=Q,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=L.shadow.matrix,y++}r.directional[x]=k,x++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(q*E),k.distance=Z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[f]=k;const B=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&N++),r.spotLightMatrix[f]=B.matrix,L.castShadow){const Q=i.get(L);Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=D,w++}f++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy(F).multiplyScalar(q),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=k,g++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*E),k.distance=L.distance,k.decay=L.decay,L.castShadow){const B=L.shadow,Q=i.get(L);Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,C++}r.point[m]=k,m++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar(q*E),k.groundColor.copy(L.groundColor).multiplyScalar(q*E),r.hemi[v]=k,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==g||z.hemiLength!==v||z.numDirectionalShadows!==y||z.numPointShadows!==C||z.numSpotShadows!==w||z.numSpotMaps!==A||z.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+A-N,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=M,z.directionalLength=x,z.pointLength=m,z.spotLength=f,z.rectAreaLength=g,z.hemiLength=v,z.numDirectionalShadows=y,z.numPointShadows=C,z.numSpotShadows=w,z.numSpotMaps=A,z.numLightProbes=M,r.version=Uw++)}function c(u,d){let h=0,p=0,_=0,x=0,m=0;const f=d.matrixWorldInverse;for(let g=0,v=u.length;g<v;g++){const y=u[g];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),h++}else if(y.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Hm(t,e){const n=new kw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Hm(t,e),n.set(s,[l])):o>=a.length?(l=new Hm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Bw extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ww(t,e,n){let i=new ih;const r=new Je,s=new Je,o=new pt,a=new Bw({depthPacking:kS}),l=new Gw,c={},u=n.maxTextureSize,d={[xr]:gn,[gn]:xr,[li]:li},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Hw,fragmentShader:Vw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new et(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let f=this.type;this.render=function(w,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(pr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=f!==Li&&this.type===Li,L=f===Li&&this.type!==Li;for(let F=0,q=w.length;F<q;F++){const Z=w[F],D=Z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||K===!0||L===!0){const Q=this.type!==Li?{minFilter:sn,magFilter:sn}:{};D.map!==null&&D.map.dispose(),D.map=new $r(r.x,r.y,Q),D.map.texture.name=Z.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const B=D.getViewportCount();for(let Q=0;Q<B;Q++){const J=D.getViewport(Q);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),Y.viewport(o),D.updateMatrices(Z,Q),i=D.getFrustum(),y(A,N,D.camera,Z,this.type)}D.isPointLightShadow!==!0&&this.type===Li&&g(D,N),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,z)};function g(w,A){const N=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $r(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,N,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,N,p,x,null)}function v(w,A,N,M){let E=null;const z=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)E=z;else if(E=N.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=E.uuid,K=A.uuid;let L=c[Y];L===void 0&&(L={},c[Y]=L);let F=L[K];F===void 0&&(F=E.clone(),L[K]=F,A.addEventListener("dispose",C)),E=F}if(E.visible=A.visible,E.wireframe=A.wireframe,M===Li?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=t.properties.get(E);Y.light=N}return E}function y(w,A,N,M,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Li)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const K=e.update(w),L=w.material;if(Array.isArray(L)){const F=K.groups;for(let q=0,Z=F.length;q<Z;q++){const D=F[q],k=L[D.materialIndex];if(k&&k.visible){const B=v(w,k,M,E);w.onBeforeShadow(t,w,A,N,K,B,D),t.renderBufferDirect(N,null,K,B,w,D),w.onAfterShadow(t,w,A,N,K,B,D)}}}else if(L.visible){const F=v(w,L,M,E);w.onBeforeShadow(t,w,A,N,K,F,null),t.renderBufferDirect(N,null,K,F,w,null),w.onAfterShadow(t,w,A,N,K,F,null)}}const Y=w.children;for(let K=0,L=Y.length;K<L;K++)y(Y[K],A,N,M,E)}function C(w){w.target.removeEventListener("dispose",C);for(const N in c){const M=c[N],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Xw(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const de=new pt;let he=null;const Ne=new pt(0,0,0,0);return{setMask:function(be){he!==be&&!b&&(t.colorMask(be,be,be,be),he=be)},setLocked:function(be){b=be},setClear:function(be,st,ot,Ft,cn){cn===!0&&(be*=Ft,st*=Ft,ot*=Ft),de.set(be,st,ot,Ft),Ne.equals(de)===!1&&(t.clearColor(be,st,ot,Ft),Ne.copy(de))},reset:function(){b=!1,he=null,Ne.set(-1,0,0,0)}}}function s(){let b=!1,de=null,he=null,Ne=null;return{setTest:function(be){be?Re(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(be){de!==be&&!b&&(t.depthMask(be),de=be)},setFunc:function(be){if(he!==be){switch(be){case hS:t.depthFunc(t.NEVER);break;case pS:t.depthFunc(t.ALWAYS);break;case mS:t.depthFunc(t.LESS);break;case sc:t.depthFunc(t.LEQUAL);break;case gS:t.depthFunc(t.EQUAL);break;case vS:t.depthFunc(t.GEQUAL);break;case _S:t.depthFunc(t.GREATER);break;case xS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=be}},setLocked:function(be){b=be},setClear:function(be){Ne!==be&&(t.clearDepth(be),Ne=be)},reset:function(){b=!1,de=null,he=null,Ne=null}}}function o(){let b=!1,de=null,he=null,Ne=null,be=null,st=null,ot=null,Ft=null,cn=null;return{setTest:function(at){b||(at?Re(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(at){de!==at&&!b&&(t.stencilMask(at),de=at)},setFunc:function(at,un,pi){(he!==at||Ne!==un||be!==pi)&&(t.stencilFunc(at,un,pi),he=at,Ne=un,be=pi)},setOp:function(at,un,pi){(st!==at||ot!==un||Ft!==pi)&&(t.stencilOp(at,un,pi),st=at,ot=un,Ft=pi)},setLocked:function(at){b=at},setClear:function(at){cn!==at&&(t.clearStencil(at),cn=at)},reset:function(){b=!1,de=null,he=null,Ne=null,be=null,st=null,ot=null,Ft=null,cn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,x=[],m=null,f=!1,g=null,v=null,y=null,C=null,w=null,A=null,N=null,M=new Pe(0,0,0),E=0,z=!1,Y=null,K=null,L=null,F=null,q=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=k>=2);let Q=null,J={};const X=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),le=new pt().fromArray(X),me=new pt().fromArray($);function ge(b,de,he,Ne){const be=new Uint8Array(4),st=t.createTexture();t.bindTexture(b,st),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<he;ot++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(de+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return st}const Ae={};Ae[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(t.DEPTH_TEST),l.setFunc(sc),He(!1),R(Tp),Re(t.CULL_FACE),Me(pr);function Re(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function xe(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function Ze(b,de){return p[b]!==de?(t.bindFramebuffer(b,de),p[b]=de,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function G(b,de){let he=x,Ne=!1;if(b)if(he=_.get(de),he===void 0&&(he=[],_.set(de,he)),b.isWebGLMultipleRenderTargets){const be=b.texture;if(he.length!==be.length||he[0]!==t.COLOR_ATTACHMENT0){for(let st=0,ot=be.length;st<ot;st++)he[st]=t.COLOR_ATTACHMENT0+st;he.length=be.length,Ne=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,Ne=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ln(b){return m!==b?(t.useProgram(b),m=b,!0):!1}const Ce={[Ir]:t.FUNC_ADD,[Qy]:t.FUNC_SUBTRACT,[Jy]:t.FUNC_REVERSE_SUBTRACT};if(i)Ce[Cp]=t.MIN,Ce[bp]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Ce[Cp]=b.MIN_EXT,Ce[bp]=b.MAX_EXT)}const Fe={[eS]:t.ZERO,[tS]:t.ONE,[nS]:t.SRC_COLOR,[Hf]:t.SRC_ALPHA,[lS]:t.SRC_ALPHA_SATURATE,[oS]:t.DST_COLOR,[rS]:t.DST_ALPHA,[iS]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[aS]:t.ONE_MINUS_DST_COLOR,[sS]:t.ONE_MINUS_DST_ALPHA,[cS]:t.CONSTANT_COLOR,[uS]:t.ONE_MINUS_CONSTANT_COLOR,[fS]:t.CONSTANT_ALPHA,[dS]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(b,de,he,Ne,be,st,ot,Ft,cn,at){if(b===pr){f===!0&&(xe(t.BLEND),f=!1);return}if(f===!1&&(Re(t.BLEND),f=!0),b!==Zy){if(b!==g||at!==z){if((v!==Ir||w!==Ir)&&(t.blendEquation(t.FUNC_ADD),v=Ir,w=Ir),at)switch(b){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.ONE,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,C=null,A=null,N=null,M.set(0,0,0),E=0,g=b,z=at}return}be=be||de,st=st||he,ot=ot||Ne,(de!==v||be!==w)&&(t.blendEquationSeparate(Ce[de],Ce[be]),v=de,w=be),(he!==y||Ne!==C||st!==A||ot!==N)&&(t.blendFuncSeparate(Fe[he],Fe[Ne],Fe[st],Fe[ot]),y=he,C=Ne,A=st,N=ot),(Ft.equals(M)===!1||cn!==E)&&(t.blendColor(Ft.r,Ft.g,Ft.b,cn),M.copy(Ft),E=cn),g=b,z=!1}function mt(b,de){b.side===li?xe(t.CULL_FACE):Re(t.CULL_FACE);let he=b.side===gn;de&&(he=!he),He(he),b.blending===Bs&&b.transparent===!1?Me(pr):Me(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Ne=b.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),V(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(b){Y!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),Y=b)}function R(b){b!==qy?(Re(t.CULL_FACE),b!==K&&(b===Tp?t.cullFace(t.BACK):b===Ky?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),K=b}function S(b){b!==L&&(D&&t.lineWidth(b),L=b)}function V(b,de,he){b?(Re(t.POLYGON_OFFSET_FILL),(F!==de||q!==he)&&(t.polygonOffset(de,he),F=de,q=he)):xe(t.POLYGON_OFFSET_FILL)}function oe(b){b?Re(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function re(b){b===void 0&&(b=t.TEXTURE0+Z-1),Q!==b&&(t.activeTexture(b),Q=b)}function ae(b,de,he){he===void 0&&(Q===null?he=t.TEXTURE0+Z-1:he=Q);let Ne=J[he];Ne===void 0&&(Ne={type:void 0,texture:void 0},J[he]=Ne),(Ne.type!==b||Ne.texture!==de)&&(Q!==he&&(t.activeTexture(he),Q=he),t.bindTexture(b,de||Ae[b]),Ne.type=b,Ne.texture=de)}function Ee(){const b=J[Q];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ve(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function it(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(b){le.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),le.copy(b))}function tt(b){me.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),me.copy(b))}function yt(b,de){let he=d.get(de);he===void 0&&(he=new WeakMap,d.set(de,he));let Ne=he.get(b);Ne===void 0&&(Ne=t.getUniformBlockIndex(de,b.name),he.set(b,Ne))}function Xe(b,de){const Ne=d.get(de).get(b);u.get(de)!==Ne&&(t.uniformBlockBinding(de,Ne,b.__bindingPointIndex),u.set(de,Ne))}function ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Q=null,J={},p={},_=new WeakMap,x=[],m=null,f=!1,g=null,v=null,y=null,C=null,w=null,A=null,N=null,M=new Pe(0,0,0),E=0,z=!1,Y=null,K=null,L=null,F=null,q=null,le.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:xe,bindFramebuffer:Ze,drawBuffers:G,useProgram:ln,setBlending:Me,setMaterial:mt,setFlipSided:He,setCullFace:R,setLineWidth:S,setPolygonOffset:V,setScissorTest:oe,activeTexture:re,bindTexture:ae,unbindTexture:Ee,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:we,texImage3D:Se,updateUBOMapping:yt,uniformBlockBinding:Xe,texStorage2D:qe,texStorage3D:Ue,texSubImage2D:De,texSubImage3D:Ve,compressedTexSubImage2D:ie,compressedTexSubImage3D:it,scissor:Be,viewport:tt,reset:ce}}function jw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):uc("canvas")}function x(R,S,V,oe){let re=1;if((R.width>oe||R.height>oe)&&(re=oe/Math.max(R.width,R.height)),re<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=S?Zf:Math.floor,Ee=ae(re*R.width),pe=ae(re*R.height);d===void 0&&(d=_(Ee,pe));const ye=V?_(Ee,pe):d;return ye.width=Ee,ye.height=pe,ye.getContext("2d").drawImage(R,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ee+"x"+pe+")."),ye}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return rm(R.width)&&rm(R.height)}function f(R){return a?!1:R.wrapS!==On||R.wrapT!==On||R.minFilter!==sn&&R.minFilter!==Xn}function g(R,S){return R.generateMipmaps&&S&&R.minFilter!==sn&&R.minFilter!==Xn}function v(R){t.generateMipmap(R)}function y(R,S,V,oe,re=!1){if(a===!1)return S;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=S;if(S===t.RED&&(V===t.FLOAT&&(ae=t.R32F),V===t.HALF_FLOAT&&(ae=t.R16F),V===t.UNSIGNED_BYTE&&(ae=t.R8)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.R8UI),V===t.UNSIGNED_SHORT&&(ae=t.R16UI),V===t.UNSIGNED_INT&&(ae=t.R32UI),V===t.BYTE&&(ae=t.R8I),V===t.SHORT&&(ae=t.R16I),V===t.INT&&(ae=t.R32I)),S===t.RG&&(V===t.FLOAT&&(ae=t.RG32F),V===t.HALF_FLOAT&&(ae=t.RG16F),V===t.UNSIGNED_BYTE&&(ae=t.RG8)),S===t.RGBA){const Ee=re?oc:rt.getTransfer(oe);V===t.FLOAT&&(ae=t.RGBA32F),V===t.HALF_FLOAT&&(ae=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ae=Ee===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function C(R,S,V){return g(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){return R===sn||R===qf||R===au?t.NEAREST:t.LINEAR}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&u.delete(S)}function N(R){const S=R.target;S.removeEventListener("dispose",N),z(S)}function M(R){const S=i.get(R);if(S.__webglInit===void 0)return;const V=R.source,oe=h.get(V);if(oe){const re=oe[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(R),Object.keys(oe).length===0&&h.delete(V)}i.remove(R)}function E(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const V=R.source,oe=h.get(V);delete oe[S.__cacheKey],o.memory.textures--}function z(R){const S=R.texture,V=i.get(R),oe=i.get(S);if(oe.__webglTexture!==void 0&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(V.__webglFramebuffer[re]))for(let ae=0;ae<V.__webglFramebuffer[re].length;ae++)t.deleteFramebuffer(V.__webglFramebuffer[re][ae]);else t.deleteFramebuffer(V.__webglFramebuffer[re]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[re])}else{if(Array.isArray(V.__webglFramebuffer))for(let re=0;re<V.__webglFramebuffer.length;re++)t.deleteFramebuffer(V.__webglFramebuffer[re]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let re=0;re<V.__webglColorRenderbuffer.length;re++)V.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,ae=S.length;re<ae;re++){const Ee=i.get(S[re]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(S[re])}i.remove(S),i.remove(R)}let Y=0;function K(){Y=0}function L(){const R=Y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Y+=1,R}function F(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const V=i.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(V,R,S);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function Z(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){le(V,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function D(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){le(V,R,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function k(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){me(V,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const B={[jf]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[Yf]:t.MIRRORED_REPEAT},Q={[sn]:t.NEAREST,[qf]:t.NEAREST_MIPMAP_NEAREST,[au]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[CS]:t.LINEAR_MIPMAP_NEAREST,[ia]:t.LINEAR_MIPMAP_LINEAR},J={[BS]:t.NEVER,[jS]:t.ALWAYS,[GS]:t.LESS,[kv]:t.LEQUAL,[HS]:t.EQUAL,[XS]:t.GEQUAL,[VS]:t.GREATER,[WS]:t.NOTEQUAL};function X(R,S,V){if(V?(t.texParameteri(R,t.TEXTURE_WRAP_S,B[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,B[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,B[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[S.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==On||S.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==sn&&S.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==au&&S.minFilter!==ia||S.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(R,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function $(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const oe=S.source;let re=h.get(oe);re===void 0&&(re={},h.set(oe,re));const ae=F(S);if(ae!==R.__cacheKey){re[ae]===void 0&&(re[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[ae].usedTimes++;const Ee=re[R.__cacheKey];Ee!==void 0&&(re[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(S)),R.__cacheKey=ae,R.__webglTexture=re[ae].texture}return V}function le(R,S,V){let oe=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=t.TEXTURE_3D);const re=$(R,S),ae=S.source;n.bindTexture(oe,R.__webglTexture,t.TEXTURE0+V);const Ee=i.get(ae);if(ae.version!==Ee.__version||re===!0){n.activeTexture(t.TEXTURE0+V);const pe=rt.getPrimaries(rt.workingColorSpace),ye=S.colorSpace===Yn?null:rt.getPrimaries(S.colorSpace),De=S.colorSpace===Yn||pe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ve=f(S)&&m(S.image)===!1;let ie=x(S.image,Ve,!1,r.maxTextureSize);ie=He(S,ie);const it=m(ie)||a,qe=s.convert(S.format,S.colorSpace);let Ue=s.convert(S.type),we=y(S.internalFormat,qe,Ue,S.colorSpace,S.isVideoTexture);X(oe,S,it);let Se;const Be=S.mipmaps,tt=a&&S.isVideoTexture!==!0&&we!==Ov,yt=Ee.__version===void 0||re===!0,Xe=C(S,ie,it);if(S.isDepthTexture)we=t.DEPTH_COMPONENT,a?S.type===sr?we=t.DEPTH_COMPONENT32F:S.type===rr?we=t.DEPTH_COMPONENT24:S.type===Hr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:S.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Vr&&we===t.DEPTH_COMPONENT&&S.type!==Jd&&S.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=rr,Ue=s.convert(S.type)),S.format===Zs&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,S.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Hr,Ue=s.convert(S.type))),yt&&(tt?n.texStorage2D(t.TEXTURE_2D,1,we,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,we,ie.width,ie.height,0,qe,Ue,null));else if(S.isDataTexture)if(Be.length>0&&it){tt&&yt&&n.texStorage2D(t.TEXTURE_2D,Xe,we,Be[0].width,Be[0].height);for(let ce=0,b=Be.length;ce<b;ce++)Se=Be[ce],tt?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Se.width,Se.height,qe,Ue,Se.data):n.texImage2D(t.TEXTURE_2D,ce,we,Se.width,Se.height,0,qe,Ue,Se.data);S.generateMipmaps=!1}else tt?(yt&&n.texStorage2D(t.TEXTURE_2D,Xe,we,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,qe,Ue,ie.data)):n.texImage2D(t.TEXTURE_2D,0,we,ie.width,ie.height,0,qe,Ue,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,we,Be[0].width,Be[0].height,ie.depth);for(let ce=0,b=Be.length;ce<b;ce++)Se=Be[ce],S.format!==ci?qe!==null?tt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,ie.depth,qe,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,we,Se.width,Se.height,ie.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,ie.depth,qe,Ue,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,we,Se.width,Se.height,ie.depth,0,qe,Ue,Se.data)}else{tt&&yt&&n.texStorage2D(t.TEXTURE_2D,Xe,we,Be[0].width,Be[0].height);for(let ce=0,b=Be.length;ce<b;ce++)Se=Be[ce],S.format!==ci?qe!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Se.width,Se.height,qe,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Se.width,Se.height,qe,Ue,Se.data):n.texImage2D(t.TEXTURE_2D,ce,we,Se.width,Se.height,0,qe,Ue,Se.data)}else if(S.isDataArrayTexture)tt?(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,we,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,qe,Ue,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,qe,Ue,ie.data);else if(S.isData3DTexture)tt?(yt&&n.texStorage3D(t.TEXTURE_3D,Xe,we,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,qe,Ue,ie.data)):n.texImage3D(t.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,qe,Ue,ie.data);else if(S.isFramebufferTexture){if(yt)if(tt)n.texStorage2D(t.TEXTURE_2D,Xe,we,ie.width,ie.height);else{let ce=ie.width,b=ie.height;for(let de=0;de<Xe;de++)n.texImage2D(t.TEXTURE_2D,de,we,ce,b,0,qe,Ue,null),ce>>=1,b>>=1}}else if(Be.length>0&&it){tt&&yt&&n.texStorage2D(t.TEXTURE_2D,Xe,we,Be[0].width,Be[0].height);for(let ce=0,b=Be.length;ce<b;ce++)Se=Be[ce],tt?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,qe,Ue,Se):n.texImage2D(t.TEXTURE_2D,ce,we,qe,Ue,Se);S.generateMipmaps=!1}else tt?(yt&&n.texStorage2D(t.TEXTURE_2D,Xe,we,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,qe,Ue,ie)):n.texImage2D(t.TEXTURE_2D,0,we,qe,Ue,ie);g(S,it)&&v(oe),Ee.__version=ae.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function me(R,S,V){if(S.image.length!==6)return;const oe=$(R,S),re=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const ae=i.get(re);if(re.version!==ae.__version||oe===!0){n.activeTexture(t.TEXTURE0+V);const Ee=rt.getPrimaries(rt.workingColorSpace),pe=S.colorSpace===Yn?null:rt.getPrimaries(S.colorSpace),ye=S.colorSpace===Yn||Ee===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,Ve=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let ce=0;ce<6;ce++)!De&&!Ve?ie[ce]=x(S.image[ce],!1,!0,r.maxCubemapSize):ie[ce]=Ve?S.image[ce].image:S.image[ce],ie[ce]=He(S,ie[ce]);const it=ie[0],qe=m(it)||a,Ue=s.convert(S.format,S.colorSpace),we=s.convert(S.type),Se=y(S.internalFormat,Ue,we,S.colorSpace),Be=a&&S.isVideoTexture!==!0,tt=ae.__version===void 0||oe===!0;let yt=C(S,it,qe);X(t.TEXTURE_CUBE_MAP,S,qe);let Xe;if(De){Be&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,Se,it.width,it.height);for(let ce=0;ce<6;ce++){Xe=ie[ce].mipmaps;for(let b=0;b<Xe.length;b++){const de=Xe[b];S.format!==ci?Ue!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b,0,0,de.width,de.height,Ue,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b,0,0,de.width,de.height,Ue,we,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b,Se,de.width,de.height,0,Ue,we,de.data)}}}else{Xe=S.mipmaps,Be&&tt&&(Xe.length>0&&yt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,Se,ie[0].width,ie[0].height));for(let ce=0;ce<6;ce++)if(Ve){Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ie[ce].width,ie[ce].height,Ue,we,ie[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Se,ie[ce].width,ie[ce].height,0,Ue,we,ie[ce].data);for(let b=0;b<Xe.length;b++){const he=Xe[b].image[ce].image;Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b+1,0,0,he.width,he.height,Ue,we,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b+1,Se,he.width,he.height,0,Ue,we,he.data)}}else{Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,we,ie[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Se,Ue,we,ie[ce]);for(let b=0;b<Xe.length;b++){const de=Xe[b];Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b+1,0,0,Ue,we,de.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,b+1,Se,Ue,we,de.image[ce])}}}g(S,qe)&&v(t.TEXTURE_CUBE_MAP),ae.__version=re.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ge(R,S,V,oe,re,ae){const Ee=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),ye=y(V.internalFormat,Ee,pe,V.colorSpace);if(!i.get(S).__hasExternalTextures){const Ve=Math.max(1,S.width>>ae),ie=Math.max(1,S.height>>ae);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ae,ye,Ve,ie,S.depth,0,Ee,pe,null):n.texImage2D(re,ae,ye,Ve,ie,0,Ee,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,re,i.get(V).__webglTexture,0,Fe(S)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,re,i.get(V).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(R,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let oe=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||Me(S)){const re=S.depthTexture;re&&re.isDepthTexture&&(re.type===sr?oe=t.DEPTH_COMPONENT32F:re.type===rr&&(oe=t.DEPTH_COMPONENT24));const ae=Fe(S);Me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,oe,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,oe,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const oe=Fe(S);V&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const oe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0;re<oe.length;re++){const ae=oe[re],Ee=s.convert(ae.format,ae.colorSpace),pe=s.convert(ae.type),ye=y(ae.internalFormat,Ee,pe,ae.colorSpace),De=Fe(S);V&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ye,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const oe=i.get(S.depthTexture).__webglTexture,re=Fe(S);if(S.depthTexture.format===Vr)Me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Zs)Me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function xe(R){const S=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Re(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=t.createRenderbuffer(),Ae(S.__webglDepthbuffer[oe],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ae(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(R,S,V){const oe=i.get(R);S!==void 0&&ge(oe.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&xe(R)}function G(R){const S=R.texture,V=i.get(R),oe=i.get(S);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=S.version,o.memory.textures++);const re=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,Ee=m(R)||a;if(re){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)V.__webglFramebuffer[pe][ye]=t.createFramebuffer()}else V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const pe=R.texture;for(let ye=0,De=pe.length;ye<De;ye++){const Ve=i.get(pe[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Me(R)===!1){const pe=ae?S:[S];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const De=pe[ye];V.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ye]);const Ve=s.convert(De.format,De.colorSpace),ie=s.convert(De.type),it=y(De.internalFormat,Ve,ie,De.colorSpace,R.isXRRenderTarget===!0),qe=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,it,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,V.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),X(t.TEXTURE_CUBE_MAP,S,Ee);for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ge(V.__webglFramebuffer[pe][ye],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else ge(V.__webglFramebuffer[pe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(S,Ee)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const pe=R.texture;for(let ye=0,De=pe.length;ye<De;ye++){const Ve=pe[ye],ie=i.get(Ve);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),X(t.TEXTURE_2D,Ve,Ee),ge(V.__webglFramebuffer,R,Ve,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),g(Ve,Ee)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,oe.__webglTexture),X(pe,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ge(V.__webglFramebuffer[ye],R,S,t.COLOR_ATTACHMENT0,pe,ye);else ge(V.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,pe,0);g(S,Ee)&&v(pe),n.unbindTexture()}R.depthBuffer&&xe(R)}function ln(R){const S=m(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let oe=0,re=V.length;oe<re;oe++){const ae=V[oe];if(g(ae,S)){const Ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(ae).__webglTexture;n.bindTexture(Ee,pe),v(Ee),n.unbindTexture()}}}function Ce(R){if(a&&R.samples>0&&Me(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,oe=R.height;let re=t.COLOR_BUFFER_BIT;const ae=[],Ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(R),ye=R.isWebGLMultipleRenderTargets===!0;if(ye)for(let De=0;De<S.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<S.length;De++){ae.push(t.COLOR_ATTACHMENT0+De),R.depthBuffer&&ae.push(Ee);const Ve=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ve===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[De]),Ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),ye){const ie=i.get(S[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,V,oe,0,0,V,oe,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let De=0;De<S.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const Ve=i.get(S[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const S=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function He(R,S){const V=R.colorSpace,oe=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Kf||V!==Hi&&V!==Yn&&(rt.getTransfer(V)===ft?a===!1?e.has("EXT_sRGB")===!0&&oe===ci?(R.format=Kf,R.minFilter=Xn,R.generateMipmaps=!1):S=Bv.sRGBToLinear(S):(oe!==ci||re!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function Yw(t,e,n){const i=n.isWebGL2;function r(s,o=Yn){let a;const l=rt.getTransfer(o);if(s===gr)return t.UNSIGNED_BYTE;if(s===Lv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Pv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===bS)return t.BYTE;if(s===LS)return t.SHORT;if(s===Jd)return t.UNSIGNED_SHORT;if(s===bv)return t.INT;if(s===rr)return t.UNSIGNED_INT;if(s===sr)return t.FLOAT;if(s===ra)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===PS)return t.ALPHA;if(s===ci)return t.RGBA;if(s===DS)return t.LUMINANCE;if(s===NS)return t.LUMINANCE_ALPHA;if(s===Vr)return t.DEPTH_COMPONENT;if(s===Zs)return t.DEPTH_STENCIL;if(s===Kf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===IS)return t.RED;if(s===Dv)return t.RED_INTEGER;if(s===OS)return t.RG;if(s===Nv)return t.RG_INTEGER;if(s===Iv)return t.RGBA_INTEGER;if(s===lu||s===cu||s===uu||s===fu)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lp||s===Pp||s===Dp||s===Np)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Lp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Np)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ov)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ip||s===Op)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ip)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Op)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Up||s===Fp||s===kp||s===zp||s===Bp||s===Gp||s===Hp||s===Vp||s===Wp||s===Xp||s===jp||s===Yp||s===qp||s===Kp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Up)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===du||s===$p||s===Zp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===du)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===US||s===Qp||s===Jp||s===em)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===du)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===em)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class qw extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kw={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $w extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const x=n.getContextAttributes();let m=null,f=null;const g=[],v=[],y=new Je;let C=null;const w=new In;w.layers.enable(1),w.viewport=new pt;const A=new In;A.layers.enable(2),A.viewport=new pt;const N=[w,A],M=new qw;M.layers.enable(1),M.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=g[X];return $===void 0&&($=new Uu,g[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=g[X];return $===void 0&&($=new Uu,g[X]=$),$.getGripSpace()},this.getHand=function(X){let $=g[X];return $===void 0&&($=new Uu,g[X]=$),$.getHandSpace()};function Y(X){const $=v.indexOf(X.inputSource);if($===-1)return;const le=g[$];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let X=0;X<g.length;X++){const $=v[X];$!==null&&(v[X]=null,g[X].disconnect($))}E=null,z=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new $r(p.framebufferWidth,p.framebufferHeight,{format:ci,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,le=null,me=null;x.depth&&(me=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=x.stencil?Zs:Vr,le=x.stencil?Hr:rr);const ge={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new $r(h.textureWidth,h.textureHeight,{format:ci,type:gr,depthTexture:new Qv(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(X){for(let $=0;$<X.removed.length;$++){const le=X.removed[$],me=v.indexOf(le);me>=0&&(v[me]=null,g[me].disconnect(le))}for(let $=0;$<X.added.length;$++){const le=X.added[$];let me=v.indexOf(le);if(me===-1){for(let Ae=0;Ae<g.length;Ae++)if(Ae>=v.length){v.push(le),me=Ae;break}else if(v[Ae]===null){v[Ae]=le,me=Ae;break}if(me===-1)break}const ge=g[me];ge&&ge.connect(le)}}const F=new P,q=new P;function Z(X,$,le){F.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const me=F.distanceTo(q),ge=$.projectionMatrix.elements,Ae=le.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),xe=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],G=(ge[9]-1)/ge[5],ln=(ge[8]-1)/ge[0],Ce=(Ae[8]+1)/Ae[0],Fe=Re*ln,Me=Re*Ce,mt=me/(-ln+Ce),He=mt*-ln;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(He),X.translateZ(mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Re+mt,S=xe+mt,V=Fe-He,oe=Me+(me-He),re=Ze*xe/S*R,ae=G*xe/S*R;X.projectionMatrix.makePerspective(V,oe,re,ae,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function D(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.near=A.near=w.near=X.near,M.far=A.far=w.far=X.far,(E!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,z=M.far);const $=X.parent,le=M.cameras;D(M,$);for(let me=0;me<le.length;me++)D(le[me],$);le.length===2?Z(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),k(X,M,$)};function k(X,$,le){le===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$f*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let B=null;function Q(X,$){if(u=$.getViewerPose(c||o),_=$,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;le.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let ge=0;ge<le.length;ge++){const Ae=le[ge];let Re=null;if(p!==null)Re=p.getViewport(Ae);else{const Ze=d.getViewSubImage(h,Ae);Re=Ze.viewport,ge===0&&(e.setRenderTargetTextures(f,Ze.colorTexture,h.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(f))}let xe=N[ge];xe===void 0&&(xe=new In,xe.layers.enable(ge),xe.viewport=new pt,N[ge]=xe),xe.matrix.fromArray(Ae.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ae.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(M.matrix.copy(xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(xe)}}for(let le=0;le<g.length;le++){const me=v[le],ge=g[le];me!==null&&ge!==void 0&&ge.update(me,$,c||o)}B&&B(X,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const J=new $v;J.setAnimationLoop(Q),this.setAnimationLoop=function(X){B=X},this.dispose=function(){}}}function Zw(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Yv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(_(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const w=e.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function u(g){const v=d();g.__bindingPointIndex=v;const y=t.createBuffer(),C=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,A=y.length;w<A;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,E=N.length;M<E;M++){const z=N[M];if(p(z,w,M,C)===!0){const Y=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let F=0;F<K.length;F++){const q=K[F],Z=x(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,y,C){const w=g.value,A=v+"_"+y;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const N=C[A];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return C[A]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function _(g){const v=g.uniforms;let y=0;const C=16;for(let A=0,N=v.length;A<N;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,z=M.length;E<z;E++){const Y=M[E],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,F=K.length;L<F;L++){const q=K[L],Z=x(q),D=y%C;D!==0&&C-D<Z.boundary&&(y+=C-D),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=Z.storage}}}const w=y%C;return w>0&&(y+=C-w),g.__size=y,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class r_{constructor(e={}){const{canvas:n=qS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let y=!1,C=0,w=0,A=null,N=-1,M=null;const E=new pt,z=new pt;let Y=null;const K=new Pe(0);let L=0,F=n.width,q=n.height,Z=1,D=null,k=null;const B=new pt(0,0,F,q),Q=new pt(0,0,F,q);let J=!1;const X=new ih;let $=!1,le=!1,me=null;const ge=new Tt,Ae=new Je,Re=new P,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return A===null?Z:1}let G=i;function ln(T,O){for(let W=0;W<T.length;W++){const j=T[W],H=n.getContext(j,O);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zd}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",de,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),G=ln(O,T),G===null)throw ln(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Fe,Me,mt,He,R,S,V,oe,re,ae,Ee,pe,ye,De,Ve,ie,it,qe,Ue,we,Se,Be,tt;function yt(){Ce=new lT(G),Fe=new nT(G,Ce,e),Ce.init(Fe),Se=new Yw(G,Ce,Fe),Me=new Xw(G,Ce,Fe),mt=new fT(G),He=new Pw,R=new jw(G,Ce,Me,He,Fe,Se,mt),S=new rT(v),V=new aT(v),oe=new x1(G,Fe),Be=new eT(G,Ce,oe,Fe),re=new cT(G,oe,mt,Be),ae=new mT(G,re,oe,mt),qe=new pT(G,Fe,R),Ve=new iT(He),Ee=new Lw(v,S,V,Ce,Fe,Be,Ve),pe=new Zw(v,He),ye=new Nw,De=new zw(Ce,Fe),it=new JE(v,S,V,Me,ae,h,l),ie=new Ww(v,ae,Fe),tt=new Qw(G,mt,Fe,Me),Ue=new tT(G,Ce,mt,Fe),we=new uT(G,Ce,mt,Fe),mt.programs=Ee.programs,v.capabilities=Fe,v.extensions=Ce,v.properties=He,v.renderLists=ye,v.shadowMap=ie,v.state=Me,v.info=mt}yt();const Xe=new $w(v,G);this.xr=Xe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(F,q,!1))},this.getSize=function(T){return T.set(F,q)},this.setSize=function(T,O,W=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,q=O,n.width=Math.floor(T*Z),n.height=Math.floor(O*Z),W===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(F*Z,q*Z).floor()},this.setDrawingBufferSize=function(T,O,W){F=T,q=O,Z=W,n.width=Math.floor(T*W),n.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,O,W,j){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,O,W,j),Me.viewport(E.copy(B).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,O,W,j){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,O,W,j),Me.scissor(z.copy(Q).multiplyScalar(Z).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){Me.setScissorTest(J=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){k=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(T=!0,O=!0,W=!0){let j=0;if(T){let H=!1;if(A!==null){const ve=A.texture.format;H=ve===Iv||ve===Nv||ve===Dv}if(H){const ve=A.texture.type,Te=ve===gr||ve===rr||ve===Jd||ve===Hr||ve===Lv||ve===Pv,Le=it.getClearColor(),Ie=it.getClearAlpha(),We=Le.r,ke=Le.g,ze=Le.b;Te?(p[0]=We,p[1]=ke,p[2]=ze,p[3]=Ie,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=We,_[1]=ke,_[2]=ze,_[3]=Ie,G.clearBufferiv(G.COLOR,0,_))}else j|=G.COLOR_BUFFER_BIT}O&&(j|=G.DEPTH_BUFFER_BIT),W&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ye.dispose(),De.dispose(),He.dispose(),S.dispose(),V.dispose(),ae.dispose(),Be.dispose(),tt.dispose(),Ee.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",cn),Xe.removeEventListener("sessionend",at),me&&(me.dispose(),me=null),un.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=mt.autoReset,O=ie.enabled,W=ie.autoUpdate,j=ie.needsUpdate,H=ie.type;yt(),mt.autoReset=T,ie.enabled=O,ie.autoUpdate=W,ie.needsUpdate=j,ie.type=H}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const O=T.target;O.removeEventListener("dispose",he),Ne(O)}function Ne(T){be(T),He.remove(T)}function be(T){const O=He.get(T).programs;O!==void 0&&(O.forEach(function(W){Ee.releaseProgram(W)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,j,H,ve){O===null&&(O=xe);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Le=p_(T,O,W,j,H);Me.setMaterial(j,Te);let Ie=W.index,We=1;if(j.wireframe===!0){if(Ie=re.getWireframeAttribute(W),Ie===void 0)return;We=2}const ke=W.drawRange,ze=W.attributes.position;let At=ke.start*We,Cn=(ke.start+ke.count)*We;ve!==null&&(At=Math.max(At,ve.start*We),Cn=Math.min(Cn,(ve.start+ve.count)*We)),Ie!==null?(At=Math.max(At,0),Cn=Math.min(Cn,Ie.count)):ze!=null&&(At=Math.max(At,0),Cn=Math.min(Cn,ze.count));const kt=Cn-At;if(kt<0||kt===1/0)return;Be.setup(H,j,Le,W,Ie);let Ei,gt=Ue;if(Ie!==null&&(Ei=oe.get(Ie),gt=we,gt.setIndex(Ei)),H.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*Ze()),gt.setMode(G.LINES)):gt.setMode(G.TRIANGLES);else if(H.isLine){let je=j.linewidth;je===void 0&&(je=1),Me.setLineWidth(je*Ze()),H.isLineSegments?gt.setMode(G.LINES):H.isLineLoop?gt.setMode(G.LINE_LOOP):gt.setMode(G.LINE_STRIP)}else H.isPoints?gt.setMode(G.POINTS):H.isSprite&&gt.setMode(G.TRIANGLES);if(H.isBatchedMesh)gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)gt.renderInstances(At,kt,H.count);else if(W.isInstancedBufferGeometry){const je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pc=Math.min(W.instanceCount,je);gt.renderInstances(At,kt,Pc)}else gt.render(At,kt)};function st(T,O,W){T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,ya(T,O,W),T.side=xr,T.needsUpdate=!0,ya(T,O,W),T.side=li):ya(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),m=De.get(W),m.init(),g.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);const j=new Set;return T.traverse(function(H){const ve=H.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Le=ve[Te];st(Le,W,H),j.add(Le)}else st(ve,W,H),j.add(ve)}),g.pop(),m=null,j},this.compileAsync=function(T,O,W=null){const j=this.compile(T,O,W);return new Promise(H=>{function ve(){if(j.forEach(function(Te){He.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){H(T);return}setTimeout(ve,10)}Ce.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ot=null;function Ft(T){ot&&ot(T)}function cn(){un.stop()}function at(){un.start()}const un=new $v;un.setAnimationLoop(Ft),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(T){ot=T,Xe.setAnimationLoop(T),T===null?un.stop():un.start()},Xe.addEventListener("sessionstart",cn),Xe.addEventListener("sessionend",at),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(O),O=Xe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,A),m=De.get(T,g.length),m.init(),g.push(m),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(ge),le=this.localClippingEnabled,$=Ve.init(this.clippingPlanes,le),x=ye.get(T,f.length),x.init(),f.push(x),pi(T,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,k),this.info.render.frame++,$===!0&&Ve.beginShadows();const W=m.state.shadowsArray;if(ie.render(W,T,O),$===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(x,T),m.setupLights(v._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let H=0,ve=j.length;H<ve;H++){const Te=j[H];ch(x,T,Te,Te.viewport)}}else ch(x,T,O);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,O),Be.resetDefaultState(),N=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function pi(T,O,W,j){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){j&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);const Te=ae.update(T),Le=T.material;Le.visible&&x.push(T,Te,Le,W,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Te=ae.update(T),Le=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Re.copy(Te.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(Le)){const Ie=Te.groups;for(let We=0,ke=Ie.length;We<ke;We++){const ze=Ie[We],At=Le[ze.materialIndex];At&&At.visible&&x.push(T,Te,At,W,Re.z,ze)}}else Le.visible&&x.push(T,Te,Le,W,Re.z,null)}}const ve=T.children;for(let Te=0,Le=ve.length;Te<Le;Te++)pi(ve[Te],O,W,j)}function ch(T,O,W,j){const H=T.opaque,ve=T.transmissive,Te=T.transparent;m.setupLightsView(W),$===!0&&Ve.setGlobalState(v.clippingPlanes,W),ve.length>0&&h_(H,ve,O,W),j&&Me.viewport(E.copy(j)),H.length>0&&xa(H,O,W),ve.length>0&&xa(ve,O,W),Te.length>0&&xa(Te,O,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function h_(T,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ve=Fe.isWebGL2;me===null&&(me=new $r(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?ra:gr,minFilter:ia,samples:ve?4:0})),v.getDrawingBufferSize(Ae),ve?me.setSize(Ae.x,Ae.y):me.setSize(Zf(Ae.x),Zf(Ae.y));const Te=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=mr,xa(T,W,j),R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me);let Ie=!1;for(let We=0,ke=O.length;We<ke;We++){const ze=O[We],At=ze.object,Cn=ze.geometry,kt=ze.material,Ei=ze.group;if(kt.side===li&&At.layers.test(j.layers)){const gt=kt.side;kt.side=gn,kt.needsUpdate=!0,uh(At,W,j,Cn,kt,Ei),kt.side=gt,kt.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me)),v.setRenderTarget(Te),v.setClearColor(K,L),v.toneMapping=Le}function xa(T,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ve=T.length;H<ve;H++){const Te=T[H],Le=Te.object,Ie=Te.geometry,We=j===null?Te.material:j,ke=Te.group;Le.layers.test(W.layers)&&uh(Le,O,W,Ie,We,ke)}}function uh(T,O,W,j,H,ve){T.onBeforeRender(v,O,W,j,H,ve),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,O,W,j,T,ve),H.transparent===!0&&H.side===li&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,v.renderBufferDirect(W,O,j,H,T,ve),H.side=xr,H.needsUpdate=!0,v.renderBufferDirect(W,O,j,H,T,ve),H.side=li):v.renderBufferDirect(W,O,j,H,T,ve),T.onAfterRender(v,O,W,j,H,ve)}function ya(T,O,W){O.isScene!==!0&&(O=xe);const j=He.get(T),H=m.state.lights,ve=m.state.shadowsArray,Te=H.state.version,Le=Ee.getParameters(T,H.state,ve,O,W),Ie=Ee.getProgramCacheKey(Le);let We=j.programs;j.environment=T.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(T.isMeshStandardMaterial?V:S).get(T.envMap||j.environment),We===void 0&&(T.addEventListener("dispose",he),We=new Map,j.programs=We);let ke=We.get(Ie);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===Te)return dh(T,Le),ke}else Le.uniforms=Ee.getUniforms(T),T.onBuild(W,Le,v),T.onBeforeCompile(Le,v),ke=Ee.acquireProgram(Le,Ie),We.set(Ie,ke),j.uniforms=Le.uniforms;const ze=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=Ve.uniform),dh(T,Le),j.needsLights=g_(T),j.lightsStateVersion=Te,j.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=ke,j.uniformsList=null,ke}function fh(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Nl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function dh(T,O){const W=He.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function p_(T,O,W,j,H){O.isScene!==!0&&(O=xe),R.resetTextureUnits();const ve=O.fog,Te=j.isMeshStandardMaterial?O.environment:null,Le=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Ie=(j.isMeshStandardMaterial?V:S).get(j.envMap||Te),We=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!W.morphAttributes.position,At=!!W.morphAttributes.normal,Cn=!!W.morphAttributes.color;let kt=mr;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=v.toneMapping);const Ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=Ei!==void 0?Ei.length:0,je=He.get(j),Pc=m.state.lights;if($===!0&&(le===!0||T!==M)){const Gn=T===M&&j.id===N;Ve.setState(j,T,Gn)}let St=!1;j.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Pc.state.version||je.outputColorSpace!==Le||H.isBatchedMesh&&je.batching===!1||!H.isBatchedMesh&&je.batching===!0||H.isInstancedMesh&&je.instancing===!1||!H.isInstancedMesh&&je.instancing===!0||H.isSkinnedMesh&&je.skinning===!1||!H.isSkinnedMesh&&je.skinning===!0||H.isInstancedMesh&&je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&je.instancingColor===!1&&H.instanceColor!==null||je.envMap!==Ie||j.fog===!0&&je.fog!==ve||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ve.numPlanes||je.numIntersection!==Ve.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ke||je.morphTargets!==ze||je.morphNormals!==At||je.morphColors!==Cn||je.toneMapping!==kt||Fe.isWebGL2===!0&&je.morphTargetsCount!==gt)&&(St=!0):(St=!0,je.__version=j.version);let Er=je.currentProgram;St===!0&&(Er=ya(j,O,H));let hh=!1,ro=!1,Dc=!1;const Jt=Er.getUniforms(),Tr=je.uniforms;if(Me.useProgram(Er.program)&&(hh=!0,ro=!0,Dc=!0),j.id!==N&&(N=j.id,ro=!0),hh||M!==T){Jt.setValue(G,"projectionMatrix",T.projectionMatrix),Jt.setValue(G,"viewMatrix",T.matrixWorldInverse);const Gn=Jt.map.cameraPosition;Gn!==void 0&&Gn.setValue(G,Re.setFromMatrixPosition(T.matrixWorld)),Fe.logarithmicDepthBuffer&&Jt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Jt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ro=!0,Dc=!0)}if(H.isSkinnedMesh){Jt.setOptional(G,H,"bindMatrix"),Jt.setOptional(G,H,"bindMatrixInverse");const Gn=H.skeleton;Gn&&(Fe.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),Jt.setValue(G,"boneTexture",Gn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Jt.setOptional(G,H,"batchingTexture"),Jt.setValue(G,"batchingTexture",H._matricesTexture,R));const Nc=W.morphAttributes;if((Nc.position!==void 0||Nc.normal!==void 0||Nc.color!==void 0&&Fe.isWebGL2===!0)&&qe.update(H,W,Er),(ro||je.receiveShadow!==H.receiveShadow)&&(je.receiveShadow=H.receiveShadow,Jt.setValue(G,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Tr.envMap.value=Ie,Tr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ro&&(Jt.setValue(G,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&m_(Tr,Dc),ve&&j.fog===!0&&pe.refreshFogUniforms(Tr,ve),pe.refreshMaterialUniforms(Tr,j,Z,q,me),Nl.upload(G,fh(je),Tr,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Nl.upload(G,fh(je),Tr,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Jt.setValue(G,"center",H.center),Jt.setValue(G,"modelViewMatrix",H.modelViewMatrix),Jt.setValue(G,"normalMatrix",H.normalMatrix),Jt.setValue(G,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Gn=j.uniformsGroups;for(let Ic=0,v_=Gn.length;Ic<v_;Ic++)if(Fe.isWebGL2){const ph=Gn[Ic];tt.update(ph,Er),tt.bind(ph,Er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Er}function m_(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function g_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,O,W){He.get(T.texture).__webglTexture=O,He.get(T.depthTexture).__webglTexture=W;const j=He.get(T);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const W=He.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){A=T,C=O,w=W;let j=!0,H=null,ve=!1,Te=!1;if(T){const Ie=He.get(T);Ie.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(G.FRAMEBUFFER,null),j=!1):Ie.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ie.__hasExternalTextures&&R.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Te=!0);const ke=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?H=ke[O][W]:H=ke[O],ve=!0):Fe.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?H=He.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[W]:H=ke,E.copy(T.viewport),z.copy(T.scissor),Y=T.scissorTest}else E.copy(B).multiplyScalar(Z).floor(),z.copy(Q).multiplyScalar(Z).floor(),Y=J;if(Me.bindFramebuffer(G.FRAMEBUFFER,H)&&Fe.drawBuffers&&j&&Me.drawBuffers(T,H),Me.viewport(E),Me.scissor(z),Me.setScissorTest(Y),ve){const Ie=He.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,W)}else if(Te){const Ie=He.get(T.texture),We=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ie.__webglTexture,W||0,We)}N=-1},this.readRenderTargetPixels=function(T,O,W,j,H,ve,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){Me.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Ie=T.texture,We=Ie.format,ke=Ie.type;if(We!==ci&&Se.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=ke===ra&&(Ce.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ke!==gr&&Se.convert(ke)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===sr&&(Fe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-j&&W>=0&&W<=T.height-H&&G.readPixels(O,W,j,H,Se.convert(We),Se.convert(ke),ve)}finally{const Ie=A!==null?He.get(A).__webglFramebuffer:null;Me.bindFramebuffer(G.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(T,O,W=0){const j=Math.pow(2,-W),H=Math.floor(O.image.width*j),ve=Math.floor(O.image.height*j);R.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,T.x,T.y,H,ve),Me.unbindTexture()},this.copyTextureToTexture=function(T,O,W,j=0){const H=O.image.width,ve=O.image.height,Te=Se.convert(W.format),Le=Se.convert(W.type);R.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,j,T.x,T.y,H,ve,Te,Le,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,j,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,j,T.x,T.y,Te,Le,O.image),j===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W,j,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Ie=Se.convert(j.format),We=Se.convert(j.type);let ke;if(j.isData3DTexture)R.setTexture3D(j,0),ke=G.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),ke=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const ze=G.getParameter(G.UNPACK_ROW_LENGTH),At=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Cn=G.getParameter(G.UNPACK_SKIP_PIXELS),kt=G.getParameter(G.UNPACK_SKIP_ROWS),Ei=G.getParameter(G.UNPACK_SKIP_IMAGES),gt=W.isCompressedTexture?W.mipmaps[H]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,gt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(ke,H,O.x,O.y,O.z,ve,Te,Le,Ie,We,gt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ke,H,O.x,O.y,O.z,ve,Te,Le,Ie,gt.data)):G.texSubImage3D(ke,H,O.x,O.y,O.z,ve,Te,Le,Ie,We,gt),G.pixelStorei(G.UNPACK_ROW_LENGTH,ze),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,At),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Cn),G.pixelStorei(G.UNPACK_SKIP_ROWS,kt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ei),H===0&&j.generateMipmaps&&G.generateMipmap(ke),Me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===eh?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Wt?Wr:Uv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?Wt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jw extends r_{}Jw.prototype.isWebGL1Renderer=!0;class oh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=n,this.far=i}clone(){return new oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eA extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class s_ extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vm=new P,Wm=new P,Xm=new Tt,Fu=new th,ol=new ga;class tA extends jt{constructor(e=new pn,n=new s_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vm.fromBufferAttribute(n,r-1),Wm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vm.distanceTo(Wm);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;Xm.copy(r).invert(),Fu.copy(e.ray).applyMatrix4(Xm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,d=new P,h=new P,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const f=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let v=f,y=g-1;v<y;v+=p){const C=_.getX(v),w=_.getX(v+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,w),Fu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||n.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let v=f,y=g-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Fu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||n.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const jm=new P,Ym=new P;class nA extends tA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)jm.fromBufferAttribute(n,r),Ym.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jm.distanceTo(Ym);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Il extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new Tt,Jf=new th,al=new ga,ll=new P;class ku extends jt{constructor(e=new pn,n=new Il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;qm.copy(r).invert(),Jf.copy(e.ray).applyMatrix4(qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,x=p;_<x;_++){const m=c.getX(_);ll.fromBufferAttribute(d,m),Km(ll,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,x=p;_<x;_++)ll.fromBufferAttribute(d,_),Km(ll,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Km(t,e,n,i,r,s,o){const a=Jf.distanceSqToPoint(t);if(a<n){const l=new P;Jf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class iA extends Rn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const cl=new P,ul=new P,zu=new P,fl=new jn;class rA extends pn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Dl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:f}=fl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),fl.getNormal(zu),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const v=(g+1)%3,y=d[g],C=d[v],w=fl[u[g]],A=fl[u[v]],N=`${y}_${C}`,M=`${C}_${y}`;M in h&&h[M]?(zu.dot(h[M].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(A.x,A.y,A.z)),h[M]=null):N in h||(h[N]={index0:c[g],index1:c[v],normal:zu.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:m}=h[_];cl.fromBufferAttribute(a,x),ul.fromBufferAttribute(a,m),p.push(cl.x,cl.y,cl.z),p.push(ul.x,ul.y,ul.z)}this.setAttribute("position",new Kt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class fc extends pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const w=C/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+y,1-v),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const v=u[f][g+1],y=u[f][g],C=u[f+1][g],w=u[f+1][g+1];(f!==0||o>0)&&p.push(v,y,w),(f!==i-1||l<Math.PI)&&p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bu extends es{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fv,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ah extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Gu=new Tt,$m=new P,Zm=new P;class o_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$m.setFromMatrixPosition(e.matrixWorld),n.position.copy($m),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qm=new Tt,xo=new P,Hu=new P;class sA extends o_{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),Hu.copy(i.position),Hu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Hu),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),Qm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm)}}class oA extends ah{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aA extends o_{constructor(){super(new Zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lA extends ah{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new aA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cA extends ah{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);const Ni=512,te=32,ne={GRASS_TOP:[0,0],GRASS_SIDE:[1,0],DIRT:[2,0],STONE:[3,0],SAND:[4,0],SNOW:[5,0],WOOD_SIDE:[6,0],WOOD_TOP:[7,0],LEAVES:[8,0],COAL_ORE:[9,0],IRON_ORE:[10,0],GOLD_ORE:[11,0],DIAMOND_ORE:[12,0],GLOWSTONE:[13,0],BEDROCK:[14,0],PLANKS:[15,0],COBBLESTONE:[0,1],CRAFTING:[1,1],BRICK:[2,1],MOSS:[3,1],ICE:[4,1],OBSIDIAN:[5,1],CRYSTAL:[6,1],MAGMA:[7,1],CAMPFIRE_TOP:[8,1],CAMPFIRE_SIDE:[9,1],TORCH:[10,1],WATER:[11,1]};function Qt(t){let e=t;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ed(t){const e=t.replace("#","");return[Number.parseInt(e.slice(0,2),16),Number.parseInt(e.slice(2,4),16),Number.parseInt(e.slice(4,6),16)]}function uA(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n]}function Lt(t,e,n,i,r=.18,s=1){const o=Qt(s),a=ed(i),l=t.createImageData(te,te);for(let c=0;c<te;c++)for(let u=0;u<te;u++){const d=(o()-.5)*2*r,h=Math.max(0,Math.min(255,a[0]*(1+d))),p=Math.max(0,Math.min(255,a[1]*(1+d))),_=Math.max(0,Math.min(255,a[2]*(1+d))),x=(c*te+u)*4;l.data[x]=h,l.data[x+1]=p,l.data[x+2]=_,l.data[x+3]=255}t.putImageData(l,e*te,n*te)}function dl(t,e,n,i,r=42){const s=Qt(r);for(const o of i){t.fillStyle=o.color;const a=o.size??2;for(let l=0;l<o.count;l++){const c=e*te+Math.floor(s()*te),u=n*te+Math.floor(s()*te);t.fillRect(c,u,a,a)}}}function fA(t,e,n){Lt(t,e,n,"#7A4E2E",.12,101);const i=e*te,r=n*te,s=Qt(202);for(let o=0;o<10;o++)for(let a=0;a<te;a++)if(s()>.3||o<7){const c=(s()-.5)*.3,u=uA(ed("#4CAF50"),ed("#2E7D32"),s());t.fillStyle=`rgb(${u[0]*(1+c)},${u[1]*(1+c)},${u[2]*(1+c)})`,t.fillRect(i+a,r+o,1,1)}for(let o=0;o<te;o++)if(s()>.6){const a=Math.floor(s()*4)+1;t.fillStyle="#2E7D32",t.fillRect(i+o,r+10,1,a)}}function a_(t,e,n){Lt(t,e,n,"#A47148",.1,555);const i=e*te,r=n*te;t.strokeStyle="#6B4423",t.lineWidth=1;for(const s of[8,16,24])t.beginPath(),t.moveTo(i,r+s),t.lineTo(i+te,r+s),t.stroke();t.beginPath(),t.moveTo(i+10,r),t.lineTo(i+10,r+8),t.stroke(),t.beginPath(),t.moveTo(i+20,r+8),t.lineTo(i+20,r+16),t.stroke(),t.beginPath(),t.moveTo(i+6,r+16),t.lineTo(i+6,r+24),t.stroke(),t.beginPath(),t.moveTo(i+24,r+24),t.lineTo(i+24,r+te),t.stroke()}function dA(t,e,n){a_(t,e,n);const i=e*te,r=n*te;t.strokeStyle="#3E2723",t.lineWidth=1,t.strokeRect(i+4,r+4,24,24);for(let s=1;s<3;s++)t.beginPath(),t.moveTo(i+4+s*8,r+4),t.lineTo(i+4+s*8,r+28),t.stroke(),t.beginPath(),t.moveTo(i+4,r+4+s*8),t.lineTo(i+28,r+4+s*8),t.stroke()}function hA(t,e,n){Lt(t,e,n,"#B84A39",.1,777);const i=e*te,r=n*te;t.strokeStyle="#3E1A10",t.lineWidth=1;for(const s of[0,8,16,24])t.beginPath(),t.moveTo(i,r+s),t.lineTo(i+te,r+s),t.stroke();t.beginPath(),t.moveTo(i+16,r),t.lineTo(i+16,r+8),t.stroke(),t.beginPath(),t.moveTo(i+8,r+8),t.lineTo(i+8,r+16),t.stroke(),t.beginPath(),t.moveTo(i+24,r+8),t.lineTo(i+24,r+16),t.stroke(),t.beginPath(),t.moveTo(i+16,r+16),t.lineTo(i+16,r+24),t.stroke(),t.beginPath(),t.moveTo(i+8,r+24),t.lineTo(i+8,r+32),t.stroke(),t.beginPath(),t.moveTo(i+24,r+24),t.lineTo(i+24,r+32),t.stroke()}function pA(t,e,n){Lt(t,e,n,"#6D4C30",.12,111);const i=e*te,r=n*te,s=Qt(222);t.strokeStyle="#3E2517",t.lineWidth=1;for(let o=0;o<8;o++){const a=Math.floor(s()*te);t.beginPath(),t.moveTo(i+a,r),t.lineTo(i+a+(s()-.5)*4,r+te),t.stroke()}}function mA(t,e,n){Lt(t,e,n,"#A47148",.1,333);const i=e*te,r=n*te;t.strokeStyle="#6B4423",t.lineWidth=1;for(let s=4;s<16;s+=3)t.beginPath(),t.arc(i+16,r+16,s,0,Math.PI*2),t.stroke()}function lh(t,e,n){Lt(t,e,n,"#8A8A8A",.15,444);const i=e*te,r=n*te,s=Qt(555);t.strokeStyle="#5C5C5C",t.lineWidth=1;for(let o=0;o<3;o++){t.beginPath();const a=Math.floor(s()*te),l=Math.floor(s()*te);t.moveTo(i+a,r+l);for(let c=0;c<3;c++)t.lineTo(i+a+(s()-.5)*16,r+l+(s()-.5)*16);t.stroke()}}function gA(t,e,n){Lt(t,e,n,"#707070",.2,666);const i=e*te,r=n*te,s=Qt(777);t.strokeStyle="#3A3A3A",t.lineWidth=1;const o=[[0,0,14,10],[14,0,18,12],[0,10,10,12],[10,12,12,10],[22,12,10,10],[0,22,16,10],[16,22,16,10]];for(const[a,l,c,u]of o){t.strokeRect(i+a,r+l,c,u);for(let d=l+1;d<l+u-1;d++)for(let h=a+1;h<a+c-1;h++){const _=112*(1+(s()-.5)*.2);t.fillStyle=`rgb(${_},${_},${_})`,t.fillRect(i+h,r+d,1,1)}}}function vA(t,e,n){Lt(t,e,n,"#2E7D32",.25,888);const i=e*te,r=n*te,s=Qt(999);for(let o=0;o<60;o++){const a=Math.floor(s()*te),l=Math.floor(s()*te),c=s()>.5?"#1B5E20":"#4CAF50";t.fillStyle=c,t.fillRect(i+a,r+l,1+Math.floor(s()*2),1+Math.floor(s()*2))}}function hl(t,e,n,i,r,s=14,o=1){lh(t,e,n);const a=Qt(o),l=e*te,c=n*te;for(let u=0;u<s;u++){const d=Math.floor(a()*(te-4)),h=Math.floor(a()*(te-4));t.fillStyle=r,t.fillRect(l+d,c+h,3,3),t.fillStyle=i,t.fillRect(l+d+1,c+h+1,2,2)}}function _A(t,e,n){Lt(t,e,n,"#FF8F00",.15,1010);const i=e*te,r=n*te,s=Qt(1111);for(let o=0;o<10;o++){const a=Math.floor(s()*(te-4))+2,l=Math.floor(s()*(te-4))+2,c=t.createRadialGradient(i+a,r+l,0,i+a,r+l,4);c.addColorStop(0,"#FFF59D"),c.addColorStop(.5,"#FFEB3B"),c.addColorStop(1,"rgba(255,235,59,0)"),t.fillStyle=c,t.beginPath(),t.arc(i+a,r+l,4,0,Math.PI*2),t.fill()}}function xA(t,e,n){Lt(t,e,n,"#1A1A1A",.4,1212);const i=e*te,r=n*te,s=Qt(1313);t.fillStyle="#0A0A0A";for(let o=0;o<20;o++)t.fillRect(i+Math.floor(s()*te),r+Math.floor(s()*te),2+Math.floor(s()*3),2+Math.floor(s()*3));t.fillStyle="#2E2E2E";for(let o=0;o<10;o++)t.fillRect(i+Math.floor(s()*te),r+Math.floor(s()*te),1+Math.floor(s()*2),1+Math.floor(s()*2))}function yA(t,e,n){lh(t,e,n);const i=e*te,r=n*te,s=Qt(1414);for(let o=0;o<40;o++){const a=Math.floor(s()*te),l=Math.floor(s()*te);t.fillStyle=s()>.5?"#4E9A3A":"#3A7A2A",t.fillRect(i+a,r+l,1+Math.floor(s()*2),1)}}function SA(t,e,n){const i=e*te,r=n*te,s=t.createLinearGradient(i,r,i+te,r+te);s.addColorStop(0,"#B3E5FC"),s.addColorStop(.5,"#E1F5FE"),s.addColorStop(1,"#81D4FA"),t.fillStyle=s,t.fillRect(i,r,te,te);const o=Qt(1515);t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=1;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(i+o()*te,r+o()*te),t.lineTo(i+o()*te,r+o()*te),t.stroke()}function MA(t,e,n){Lt(t,e,n,"#1A0033",.25,1616);const i=e*te,r=n*te,s=Qt(1717);for(let o=0;o<12;o++){const a=Math.floor(s()*te),l=Math.floor(s()*te);t.fillStyle="#6A1B9A",t.fillRect(i+a,r+l,1,1)}}function EA(t,e,n){Lt(t,e,n,"#9C27B0",.2,1818);const i=e*te,r=n*te;t.strokeStyle="#E1BEE7",t.lineWidth=1;const s=Qt(1919);for(let o=0;o<4;o++){t.beginPath();const a=s()*te,l=s()*te;t.moveTo(i+a,r+l),t.lineTo(i+a+10,r+l+10),t.stroke()}}function TA(t,e,n){Lt(t,e,n,"#BF360C",.2,2020);const i=e*te,r=n*te,s=Qt(2121);for(let o=0;o<8;o++){const a=Math.floor(s()*(te-6)),l=Math.floor(s()*(te-6)),c=t.createRadialGradient(i+a+3,r+l+3,0,i+a+3,r+l+3,4);c.addColorStop(0,"#FFEB3B"),c.addColorStop(.6,"#FF5722"),c.addColorStop(1,"rgba(255,87,34,0)"),t.fillStyle=c,t.fillRect(i+a,r+l,8,8)}}function wA(t,e,n){Lt(t,e,n,"#2E2220",.2,3001);const i=e*te,r=n*te;t.fillStyle="#4A2E1A",t.fillRect(i+4,r+13,24,6),t.fillRect(i+13,r+4,6,24);const s=Qt(3002);for(let a=0;a<22;a++){const l=Math.floor(s()*te),c=Math.floor(s()*te),u=s(),d=u>.66?"#FFEB3B":u>.33?"#FF9800":"#E53935";t.fillStyle=d,t.fillRect(i+l,r+c,2,2)}const o=t.createRadialGradient(i+16,r+16,0,i+16,r+16,10);o.addColorStop(0,"#FFF59D"),o.addColorStop(.5,"#FF6F00"),o.addColorStop(1,"rgba(255,87,34,0)"),t.fillStyle=o,t.fillRect(i,r,te,te)}function AA(t,e,n){Lt(t,e,n,"#3E2723",.15,3003);const i=e*te,r=n*te;t.fillStyle="#424242",t.fillRect(i,r+22,te,10),t.fillStyle="#616161";for(let o=0;o<8;o++)t.fillRect(i+o*4,r+22+(o%2?1:3),3,2);t.fillStyle="#4A2E1A",t.fillRect(i+2,r+14,28,6),t.fillStyle="#3E2417",t.fillRect(i+2,r+14,28,1);const s=Qt(3004);for(let o=0;o<18;o++){const a=Math.floor(s()*te),l=Math.floor(s()*14),c=s(),u=c>.6?"#FFEB3B":c>.3?"#FF6F00":"#D84315";t.fillStyle=u,t.fillRect(i+a,r+l,2,2)}}function RA(t,e,n){const i=e*te,r=n*te;t.fillStyle="#0a0a0a",t.fillRect(i,r,te,te),t.fillStyle="#6D4C41",t.fillRect(i+14,r+10,4,22),t.fillStyle="#8D6E63",t.fillRect(i+14,r+10,1,22);const s=t.createRadialGradient(i+16,r+8,0,i+16,r+8,8);s.addColorStop(0,"#FFF59D"),s.addColorStop(.5,"#FF9800"),s.addColorStop(1,"rgba(255,87,34,0)"),t.fillStyle=s,t.fillRect(i,r,te,18),t.fillStyle="#FFF59D",t.fillRect(i+15,r+5,2,4),t.fillStyle="#FFEB3B",t.fillRect(i+14,r+7,4,3)}function CA(t,e,n){Lt(t,e,n,"#1976D2",.08,4001);const i=e*te,r=n*te;t.strokeStyle="rgba(200,230,255,0.55)",t.lineWidth=1;for(let s=0;s<3;s++){t.beginPath();const o=6+s*10;for(let a=0;a<=te;a+=2){const l=Math.sin((a+s*8)*.5)*1.2+o;a===0?t.moveTo(i+a,r+l):t.lineTo(i+a,r+l)}t.stroke()}}let Vu=null;function bA(){if(Vu)return Vu;const t=document.createElement("canvas");t.width=Ni,t.height=Ni;const e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#000",e.fillRect(0,0,Ni,Ni),Lt(e,ne.GRASS_TOP[0],ne.GRASS_TOP[1],"#4CAF50",.15,1),dl(e,ne.GRASS_TOP[0],ne.GRASS_TOP[1],[{color:"#2E7D32",count:30}],2),fA(e,ne.GRASS_SIDE[0],ne.GRASS_SIDE[1]),Lt(e,ne.DIRT[0],ne.DIRT[1],"#7A4E2E",.15,3),dl(e,ne.DIRT[0],ne.DIRT[1],[{color:"#5C3317",count:15}],4),lh(e,ne.STONE[0],ne.STONE[1]),Lt(e,ne.SAND[0],ne.SAND[1],"#F5DEB3",.08,5),dl(e,ne.SAND[0],ne.SAND[1],[{color:"#E6C88A",count:20,size:1}],6),Lt(e,ne.SNOW[0],ne.SNOW[1],"#F5FAFF",.06,7),dl(e,ne.SNOW[0],ne.SNOW[1],[{color:"#E3F2FD",count:15,size:1}],8),pA(e,ne.WOOD_SIDE[0],ne.WOOD_SIDE[1]),mA(e,ne.WOOD_TOP[0],ne.WOOD_TOP[1]),vA(e,ne.LEAVES[0],ne.LEAVES[1]),hl(e,ne.COAL_ORE[0],ne.COAL_ORE[1],"#2C2C2C","#000",16,10),hl(e,ne.IRON_ORE[0],ne.IRON_ORE[1],"#D4915C","#8B5A2B",12,11),hl(e,ne.GOLD_ORE[0],ne.GOLD_ORE[1],"#FFD700","#B8860B",10,12),hl(e,ne.DIAMOND_ORE[0],ne.DIAMOND_ORE[1],"#00E5FF","#00838F",8,13),_A(e,ne.GLOWSTONE[0],ne.GLOWSTONE[1]),xA(e,ne.BEDROCK[0],ne.BEDROCK[1]),a_(e,ne.PLANKS[0],ne.PLANKS[1]),gA(e,ne.COBBLESTONE[0],ne.COBBLESTONE[1]),dA(e,ne.CRAFTING[0],ne.CRAFTING[1]),hA(e,ne.BRICK[0],ne.BRICK[1]),yA(e,ne.MOSS[0],ne.MOSS[1]),SA(e,ne.ICE[0],ne.ICE[1]),MA(e,ne.OBSIDIAN[0],ne.OBSIDIAN[1]),EA(e,ne.CRYSTAL[0],ne.CRYSTAL[1]),TA(e,ne.MAGMA[0],ne.MAGMA[1]),wA(e,ne.CAMPFIRE_TOP[0],ne.CAMPFIRE_TOP[1]),AA(e,ne.CAMPFIRE_SIDE[0],ne.CAMPFIRE_SIDE[1]),RA(e,ne.TORCH[0],ne.TORCH[1]),CA(e,ne.WATER[0],ne.WATER[1]);const n=new iA(t);return n.magFilter=sn,n.minFilter=qf,n.wrapS=On,n.wrapT=On,n.colorSpace=Wt,n.generateMipmaps=!0,Vu=n,n}function LA(t){const[e,n]=t,i=e*te/Ni,r=1-(n+1)*te/Ni,s=(e+1)*te/Ni,o=1-n*te/Ni,a=.5/Ni;return[i+a,r+a,s-a,o-a]}const Nt=16,Vt=16,hn=64,oi=22,$i=4,I={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,SNOW:5,WOOD:6,LEAVES:7,COAL_ORE:8,IRON_ORE:9,GOLD_ORE:10,DIAMOND_ORE:11,GLOWSTONE:12,BEDROCK:13,PLANKS:14,COBBLESTONE:15,CRAFTING_TABLE:16,BRICK:17,MOSS_STONE:18,ICE:19,OBSIDIAN:20,CRYSTAL:21,MAGMA:22,WATER:23,CAMPFIRE:24,TORCH:25};function Mt(t){return[t,t,t,t,t,t]}function pl(t,e,n){return[n,n,t,e,n,n]}const Zr={[I.AIR]:{id:I.AIR,name:"Air",faces:Mt(ne.STONE),solid:!1,transparent:!0,emissive:0,breakTime:0},[I.GRASS]:{id:I.GRASS,name:"Grass",faces:pl(ne.GRASS_TOP,ne.DIRT,ne.GRASS_SIDE),solid:!0,transparent:!1,emissive:0,breakTime:.5,drops:I.DIRT},[I.DIRT]:{id:I.DIRT,name:"Dirt",faces:Mt(ne.DIRT),solid:!0,transparent:!1,emissive:0,breakTime:.4},[I.STONE]:{id:I.STONE,name:"Stone",faces:Mt(ne.STONE),solid:!0,transparent:!1,emissive:0,breakTime:1.5,drops:I.COBBLESTONE},[I.SAND]:{id:I.SAND,name:"Sand",faces:Mt(ne.SAND),solid:!0,transparent:!1,emissive:0,breakTime:.4},[I.SNOW]:{id:I.SNOW,name:"Snow",faces:Mt(ne.SNOW),solid:!0,transparent:!1,emissive:0,breakTime:.3},[I.WOOD]:{id:I.WOOD,name:"Wood",faces:pl(ne.WOOD_TOP,ne.WOOD_TOP,ne.WOOD_SIDE),solid:!0,transparent:!1,emissive:0,breakTime:.8},[I.LEAVES]:{id:I.LEAVES,name:"Leaves",faces:Mt(ne.LEAVES),solid:!0,transparent:!0,emissive:0,breakTime:.2},[I.COAL_ORE]:{id:I.COAL_ORE,name:"Coal Ore",faces:Mt(ne.COAL_ORE),solid:!0,transparent:!1,emissive:0,breakTime:1.5},[I.IRON_ORE]:{id:I.IRON_ORE,name:"Iron Ore",faces:Mt(ne.IRON_ORE),solid:!0,transparent:!1,emissive:0,breakTime:2},[I.GOLD_ORE]:{id:I.GOLD_ORE,name:"Gold Ore",faces:Mt(ne.GOLD_ORE),solid:!0,transparent:!1,emissive:0,breakTime:2.5},[I.DIAMOND_ORE]:{id:I.DIAMOND_ORE,name:"Diamond Ore",faces:Mt(ne.DIAMOND_ORE),solid:!0,transparent:!1,emissive:0,breakTime:3},[I.GLOWSTONE]:{id:I.GLOWSTONE,name:"Glowstone",faces:Mt(ne.GLOWSTONE),solid:!0,transparent:!1,emissive:15,breakTime:.3},[I.BEDROCK]:{id:I.BEDROCK,name:"Bedrock",faces:Mt(ne.BEDROCK),solid:!0,transparent:!1,emissive:0,breakTime:Number.POSITIVE_INFINITY},[I.PLANKS]:{id:I.PLANKS,name:"Planks",faces:Mt(ne.PLANKS),solid:!0,transparent:!1,emissive:0,breakTime:.6},[I.COBBLESTONE]:{id:I.COBBLESTONE,name:"Cobblestone",faces:Mt(ne.COBBLESTONE),solid:!0,transparent:!1,emissive:0,breakTime:1.5},[I.CRAFTING_TABLE]:{id:I.CRAFTING_TABLE,name:"Crafting Table",faces:pl(ne.CRAFTING,ne.PLANKS,ne.PLANKS),solid:!0,transparent:!1,emissive:0,breakTime:.8},[I.BRICK]:{id:I.BRICK,name:"Brick",faces:Mt(ne.BRICK),solid:!0,transparent:!1,emissive:0,breakTime:1.5},[I.MOSS_STONE]:{id:I.MOSS_STONE,name:"Moss Stone",faces:Mt(ne.MOSS),solid:!0,transparent:!1,emissive:0,breakTime:1.5},[I.ICE]:{id:I.ICE,name:"Ice",faces:Mt(ne.ICE),solid:!0,transparent:!0,emissive:0,breakTime:.5},[I.OBSIDIAN]:{id:I.OBSIDIAN,name:"Obsidian",faces:Mt(ne.OBSIDIAN),solid:!0,transparent:!1,emissive:0,breakTime:5},[I.CRYSTAL]:{id:I.CRYSTAL,name:"Crystal",faces:Mt(ne.CRYSTAL),solid:!0,transparent:!1,emissive:8,breakTime:2},[I.MAGMA]:{id:I.MAGMA,name:"Magma",faces:Mt(ne.MAGMA),solid:!0,transparent:!1,emissive:10,breakTime:1},[I.WATER]:{id:I.WATER,name:"Water",faces:Mt(ne.WATER),solid:!1,transparent:!0,emissive:0,breakTime:0,isLiquid:!0},[I.CAMPFIRE]:{id:I.CAMPFIRE,name:"Campfire",faces:pl(ne.CAMPFIRE_TOP,ne.COBBLESTONE,ne.CAMPFIRE_SIDE),solid:!0,transparent:!1,emissive:14,breakTime:.6},[I.TORCH]:{id:I.TORCH,name:"Torch",faces:Mt(ne.TORCH),solid:!0,transparent:!0,emissive:13,breakTime:.1}},l_=Math.sqrt(3),PA=.5*(l_-1),yo=(3-l_)/6,DA=1/3,gi=1/6,Fo=t=>Math.floor(t)|0,Jm=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Wu=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function So(t=Math.random){const e=c_(t),n=new Float64Array(e).map(r=>Jm[r%12*2]),i=new Float64Array(e).map(r=>Jm[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const u=(s+o)*PA,d=Fo(s+u),h=Fo(o+u),p=(d+h)*yo,_=d-p,x=h-p,m=s-_,f=o-x;let g,v;m>f?(g=1,v=0):(g=0,v=1);const y=m-g+yo,C=f-v+yo,w=m-1+2*yo,A=f-1+2*yo,N=d&255,M=h&255;let E=.5-m*m-f*f;if(E>=0){const K=N+e[M],L=n[K],F=i[K];E*=E,a=E*E*(L*m+F*f)}let z=.5-y*y-C*C;if(z>=0){const K=N+g+e[M+v],L=n[K],F=i[K];z*=z,l=z*z*(L*y+F*C)}let Y=.5-w*w-A*A;if(Y>=0){const K=N+1+e[M+1],L=n[K],F=i[K];Y*=Y,c=Y*Y*(L*w+F*A)}return 70*(a+l+c)}}function e0(t=Math.random){const e=c_(t),n=new Float64Array(e).map(s=>Wu[s%12*3]),i=new Float64Array(e).map(s=>Wu[s%12*3+1]),r=new Float64Array(e).map(s=>Wu[s%12*3+2]);return function(o,a,l){let c,u,d,h;const p=(o+a+l)*DA,_=Fo(o+p),x=Fo(a+p),m=Fo(l+p),f=(_+x+m)*gi,g=_-f,v=x-f,y=m-f,C=o-g,w=a-v,A=l-y;let N,M,E,z,Y,K;C>=w?w>=A?(N=1,M=0,E=0,z=1,Y=1,K=0):C>=A?(N=1,M=0,E=0,z=1,Y=0,K=1):(N=0,M=0,E=1,z=1,Y=0,K=1):w<A?(N=0,M=0,E=1,z=0,Y=1,K=1):C<A?(N=0,M=1,E=0,z=0,Y=1,K=1):(N=0,M=1,E=0,z=1,Y=1,K=0);const L=C-N+gi,F=w-M+gi,q=A-E+gi,Z=C-z+2*gi,D=w-Y+2*gi,k=A-K+2*gi,B=C-1+3*gi,Q=w-1+3*gi,J=A-1+3*gi,X=_&255,$=x&255,le=m&255;let me=.6-C*C-w*w-A*A;if(me<0)c=0;else{const xe=X+e[$+e[le]];me*=me,c=me*me*(n[xe]*C+i[xe]*w+r[xe]*A)}let ge=.6-L*L-F*F-q*q;if(ge<0)u=0;else{const xe=X+N+e[$+M+e[le+E]];ge*=ge,u=ge*ge*(n[xe]*L+i[xe]*F+r[xe]*q)}let Ae=.6-Z*Z-D*D-k*k;if(Ae<0)d=0;else{const xe=X+z+e[$+Y+e[le+K]];Ae*=Ae,d=Ae*Ae*(n[xe]*Z+i[xe]*D+r[xe]*k)}let Re=.6-B*B-Q*Q-J*J;if(Re<0)h=0;else{const xe=X+1+e[$+1+e[le+1]];Re*=Re,h=Re*Re*(n[xe]*B+i[xe]*Q+r[xe]*J)}return 32*(c+u+d+h)}}function c_(t){const n=new Uint8Array(512);for(let i=0;i<512/2;i++)n[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(t()*(256-i)),s=n[i];n[i]=n[r],n[r]=s}for(let i=256;i<512;i++)n[i]=n[i-256];return n}const NA=Nt*hn*Vt;function br(t){let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}const Ur=class Ur{constructor(e){ee(this,"heightNoise");ee(this,"heightNoise2");ee(this,"biomeNoise");ee(this,"biomeBlend");ee(this,"caveNoise");ee(this,"oreNoise");ee(this,"treeNoise");this.seed=e;const n=br(e);this.heightNoise=So(n),this.heightNoise2=So(br(e+1)),this.biomeNoise=So(br(e+2)),this.biomeBlend=So(br(e+7)),this.caveNoise=e0(br(e+3)),this.oreNoise=e0(br(e+4)),this.treeNoise=So(br(e+5))}getBiome(e,n){const i=this.biomeNoise(e*.005,n*.005);return i<-.55?1:i<-.15?0:i<.25?3:i<.6?4:2}biomeWeight(e,n,i){const r=this.biomeNoise(e*.005,n*.005),s=this.biomeBlend(e*.012,n*.012)*.08,o=r+s;switch(i){case 1:return Math.max(0,Math.min(1,(o- -.65)/.15));case 0:return Math.max(0,1-Math.abs(o- -.35)/.22);case 3:return Math.max(0,1-Math.abs(o-.05)/.22);case 4:return Math.max(0,1-Math.abs(o-.42)/.2);case 2:return Math.max(0,Math.min(1,(o-.55)/.15));default:return 0}}getHeight(e,n){const i=this.getBiome(e,n),r=oi,s=this.heightNoise(e*.01,n*.01)*8,o=this.heightNoise(e*.04,n*.04)*3,a=this.heightNoise2(e*.1,n*.1)*1.5;let l=r+s+o+a;if(i===1)l=r+s*.4+o*.3+1;else if(i===4){const c=this.heightNoise(e*.015,n*.015)*18;l=r+8+c+o}else i===2?l=r+s*.7+o+1:i===3&&(l=r+2+s*.9+o);return Math.max(2,Math.min(hn-4,Math.floor(l)))}isCave(e,n,i){if(n<=2||n>26)return!1;const r=this.caveNoise(e*.06,n*.06,i*.06),s=this.caveNoise(e*.12,n*.12,i*.12),o=Math.max(0,(n-20)*.04);return r>.42+o&&s>.3+o}getOreAt(e,n,i){const r=this.oreNoise(e*.15,n*.15,i*.15);return r<.5?null:n<12&&r>.85?I.DIAMOND_ORE:n<25&&r>.78?I.GOLD_ORE:n<40&&r>.72?I.IRON_ORE:n<50&&r>.62?I.COAL_ORE:null}hasTree(e,n,i,r,s){if(i===1||i===2||i===4||r<Ur.TREE_BORDER||r>Nt-1-Ur.TREE_BORDER||s<Ur.TREE_BORDER||s>Vt-1-Ur.TREE_BORDER)return!1;const o=this.treeNoise(e*.6,n*.6),a=(e*73856093^n*19349663)&65535,l=i===3?.38:.18;return o>.6&&a/65535<l}};ee(Ur,"TREE_BORDER",3);let td=Ur;class Dn{constructor(e,n){ee(this,"voxels");ee(this,"dirty",!0);ee(this,"mesh",null);ee(this,"transparentMesh",null);ee(this,"waterMesh",null);this.cx=e,this.cz=n,this.voxels=new Uint8Array(NA)}static index(e,n,i){return e+i*Nt+n*Nt*Vt}get(e,n,i){return e<0||e>=Nt||n<0||n>=hn||i<0||i>=Vt?I.AIR:this.voxels[Dn.index(e,n,i)]}set(e,n,i,r){e<0||e>=Nt||n<0||n>=hn||i<0||i>=Vt||(this.voxels[Dn.index(e,n,i)]=r,this.dirty=!0)}}class IA{constructor(e){ee(this,"chunks",new Map);ee(this,"gen");this.gen=new td(e)}key(e,n){return`${e},${n}`}getChunk(e,n){return this.chunks.get(this.key(e,n))}ensureChunk(e,n){const i=this.key(e,n);let r=this.chunks.get(i);return r||(r=new Dn(e,n),this.generateChunk(r),this.chunks.set(i,r)),r}generateChunk(e){const n=e.cx*Nt,i=e.cz*Vt;for(let r=0;r<Nt;r++)for(let s=0;s<Vt;s++){const o=n+r,a=i+s,l=this.gen.getBiome(o,a),c=this.gen.getHeight(o,a),u=l===1?0:6;for(let d=0;d<hn;d++){let h=I.AIR;if(d===0)h=I.BEDROCK;else if(d<c-u){h=I.STONE;const p=this.gen.getOreAt(o,d,a);if(p!==null&&(h=p),d<c-u-2&&this.gen.isCave(o,d,a)&&(h=I.AIR),d<14&&h===I.STONE){const _=this.gen.caveNoise(o*.3,d*.3,a*.3);_>.88?h=I.GLOWSTONE:_>.85&&(h=I.CRYSTAL)}}else d<c?l===1?h=I.SAND:l===2||l===4&&c>oi+12?h=I.STONE:h=I.DIRT:d===c&&(h=this.getSurfaceBlock(o,a,l,c));h!==I.AIR?e.voxels[Dn.index(r,d,s)]=h:d>c&&d<=oi&&c<oi-1&&(e.voxels[Dn.index(r,d,s)]=I.WATER)}this.gen.hasTree(o,a,l,r,s)&&c<hn-8&&c>oi&&this.plantTree(e,r,c+1,s)}e.dirty=!0}getSurfaceBlock(e,n,i,r){if(r<oi)return I.SAND;switch(i){case 1:return I.SAND;case 2:return I.SNOW;case 4:return r>oi+14?I.SNOW:r>oi+7?I.STONE:I.GRASS;default:return I.GRASS}}plantTree(e,n,i,r){const s=4+(n*13+r*7+e.cx*11+e.cz*17&3);for(let l=0;l<s;l++){const c=i+l;if(c>=hn)break;e.voxels[Dn.index(n,c,r)]=I.WOOD}const o=i+s,a=[{dy:-1,r:2},{dy:0,r:2},{dy:1,r:1},{dy:2,r:0}];for(const{dy:l,r:c}of a){const u=o+l;if(!(u<0||u>=hn))for(let d=-c;d<=c;d++)for(let h=-c;h<=c;h++){if(c===2&&Math.abs(d)===2&&Math.abs(h)===2||d===0&&h===0&&l<2)continue;const p=n+d,_=r+h;p<0||p>=Nt||_<0||_>=Vt||e.voxels[Dn.index(p,u,_)]===I.AIR&&(e.voxels[Dn.index(p,u,_)]=I.LEAVES)}}}getBlock(e,n,i){if(n<0||n>=hn)return I.AIR;const r=Math.floor(e/Nt),s=Math.floor(i/Vt),o=this.chunks.get(this.key(r,s));if(!o)return I.AIR;const a=e-r*Nt,l=i-s*Vt;return o.voxels[Dn.index(a,n,l)]}setBlock(e,n,i,r){if(n<0||n>=hn)return!1;const s=Math.floor(e/Nt),o=Math.floor(i/Vt),a=this.chunks.get(this.key(s,o));if(!a)return!1;const l=e-s*Nt,c=i-o*Vt;if(a.voxels[Dn.index(l,n,c)]=r,a.dirty=!0,l===0){const u=this.chunks.get(this.key(s-1,o));u&&(u.dirty=!0)}if(l===Nt-1){const u=this.chunks.get(this.key(s+1,o));u&&(u.dirty=!0)}if(c===0){const u=this.chunks.get(this.key(s,o-1));u&&(u.dirty=!0)}if(c===Vt-1){const u=this.chunks.get(this.key(s,o+1));u&&(u.dirty=!0)}return!0}isSolid(e,n,i){const r=this.getBlock(e,n,i);return r===I.AIR?!1:Zr[r].solid}}const OA=[{dir:[1,0,0],corners:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],aoNeighbors:[[[1,-1,0],[1,0,-1],[1,-1,-1]],[[1,-1,0],[1,0,1],[1,-1,1]],[[1,1,0],[1,0,1],[1,1,1]],[[1,1,0],[1,0,-1],[1,1,-1]]]},{dir:[-1,0,0],corners:[[0,0,1],[0,0,0],[0,1,0],[0,1,1]],aoNeighbors:[[[-1,-1,0],[-1,0,1],[-1,-1,1]],[[-1,-1,0],[-1,0,-1],[-1,-1,-1]],[[-1,1,0],[-1,0,-1],[-1,1,-1]],[[-1,1,0],[-1,0,1],[-1,1,1]]]},{dir:[0,1,0],corners:[[0,1,0],[1,1,0],[1,1,1],[0,1,1]],aoNeighbors:[[[-1,1,0],[0,1,-1],[-1,1,-1]],[[1,1,0],[0,1,-1],[1,1,-1]],[[1,1,0],[0,1,1],[1,1,1]],[[-1,1,0],[0,1,1],[-1,1,1]]]},{dir:[0,-1,0],corners:[[0,0,1],[1,0,1],[1,0,0],[0,0,0]],aoNeighbors:[[[-1,-1,0],[0,-1,1],[-1,-1,1]],[[1,-1,0],[0,-1,1],[1,-1,1]],[[1,-1,0],[0,-1,-1],[1,-1,-1]],[[-1,-1,0],[0,-1,-1],[-1,-1,-1]]]},{dir:[0,0,1],corners:[[1,0,1],[0,0,1],[0,1,1],[1,1,1]],aoNeighbors:[[[0,-1,1],[1,0,1],[1,-1,1]],[[0,-1,1],[-1,0,1],[-1,-1,1]],[[0,1,1],[-1,0,1],[-1,1,1]],[[0,1,1],[1,0,1],[1,1,1]]]},{dir:[0,0,-1],corners:[[0,0,0],[1,0,0],[1,1,0],[0,1,0]],aoNeighbors:[[[0,-1,-1],[-1,0,-1],[-1,-1,-1]],[[0,-1,-1],[1,0,-1],[1,-1,-1]],[[0,1,-1],[1,0,-1],[1,1,-1]],[[0,1,-1],[-1,0,-1],[-1,1,-1]]]}];function Xu(t){if(t===I.AIR)return!1;const e=Zr[t];return e.solid&&!e.transparent}function UA(t,e){if(t===I.AIR)return!0;const n=Zr[t];return!!(!n.solid||n.transparent&&t!==e)}function FA(t,e){const n={positions:[],normals:[],uvs:[],colors:[],indices:[]},i={positions:[],normals:[],uvs:[],colors:[],indices:[]},r={positions:[],normals:[],uvs:[],colors:[],indices:[]},s=e.cx*Nt,o=e.cz*Vt,a=(l,c,u)=>{if(c<0||c>=hn)return I.AIR;const d=l-s,h=u-o;return d>=0&&d<Nt&&h>=0&&h<Vt?e.voxels[Dn.index(d,c,h)]:t.getBlock(l,c,u)};for(let l=0;l<hn;l++)for(let c=0;c<Vt;c++)for(let u=0;u<Nt;u++){const d=e.voxels[Dn.index(u,l,c)];if(d===I.AIR)continue;const h=s+u,p=o+c,_=Zr[d],x=d===I.WATER,m=x?r:_.transparent?i:n;for(let f=0;f<6;f++){const g=OA[f],v=h+g.dir[0],y=l+g.dir[1],C=p+g.dir[2],w=a(v,y,C);if(w===d)continue;if(x){if(f!==2||w!==I.AIR)continue}else if(!UA(w,d))continue;const A=_.faces[f],[N,M,E,z]=LA(A),Y=[[N,z],[E,z],[E,M],[N,M]],K=m.positions.length/3,L=[];for(let F=0;F<4;F++){const[q,Z,D]=g.corners[F],k=h+q,B=l+Z,Q=p+D,J=x?B-.07:B;m.positions.push(k,J,Q),m.normals.push(g.dir[0],g.dir[1],g.dir[2]),m.uvs.push(Y[F][0],Y[F][1]);const[X,$,le]=g.aoNeighbors[F],me=Xu(a(h+X[0],l+X[1],p+X[2]))?1:0,ge=Xu(a(h+$[0],l+$[1],p+$[2]))?1:0,Ae=me===1&&ge===1||Xu(a(h+le[0],l+le[1],p+le[2]))?1:0,Re=1-(me+ge+Ae)*.18;L.push(Re);const xe=Math.max(.55,_.emissive/15);m.colors.push(Re,xe,1)}L[0]+L[2]<L[1]+L[3]?(m.indices.push(K,K+1,K+2),m.indices.push(K,K+2,K+3)):(m.indices.push(K+1,K+2,K+3),m.indices.push(K+1,K+3,K))}}return{opaque:n,transparent:i,water:r}}let bi=null,yi=null,ko=null,zo=null;const sa=new Map;function _a(){if(typeof window>"u")return null;if(!bi)try{const t=window.AudioContext||window.webkitAudioContext;bi=new t,yi=bi.createGain(),yi.gain.value=.6,yi.connect(bi.destination),ko=bi.createGain(),ko.gain.value=.15,ko.connect(yi)}catch{return null}return bi&&bi.state==="suspended"&&bi.resume().catch(()=>{}),bi}function Oe(t,e,n,i,r=.3,s,o=0){const a=_a();if(!a||!yi)return;const l=()=>{const c=a.currentTime,u=a.createOscillator();u.type=t,u.frequency.setValueAtTime(e,c),u.frequency.exponentialRampToValueAtTime(Math.max(1,n),c+i);const d=a.createGain();if(d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime(r,c+.005),d.gain.exponentialRampToValueAtTime(.001,c+i),s){const h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=s,u.connect(h),h.connect(d)}else u.connect(d);d.connect(yi),u.start(c),u.stop(c+i+.05)};o>0?setTimeout(l,o):l()}function Ke(t,e=.3,n=2e3,i=.5,r=0,s=0){const o=_a();if(!o||!yi)return;const a=()=>{const l=o.currentTime,c=Math.floor(o.sampleRate*t),u=o.createBuffer(1,c,o.sampleRate),d=u.getChannelData(0);for(let x=0;x<c;x++)d[x]=Math.random()*2-1;const h=o.createBufferSource();h.buffer=u;const p=o.createBiquadFilter();p.type="lowpass",p.frequency.value=n,p.Q.value=i;const _=o.createGain();if(_.gain.setValueAtTime(e,l),_.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(p),r>0){const x=o.createBiquadFilter();x.type="highpass",x.frequency.value=r,p.connect(x),x.connect(_)}else p.connect(_);_.connect(yi),h.start(l),h.stop(l+t+.02)};s>0?setTimeout(a,s):a()}function kA(t,e,n,i,r){const o=Math.floor(t.sampleRate*2),a=t.createBuffer(1,o,t.sampleRate),l=a.getChannelData(0);for(let p=0;p<o;p++)l[p]=Math.random()*2-1;const c=t.createBufferSource();c.buffer=a,c.loop=!0;const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=e,u.Q.value=n;const d=t.createBiquadFilter();d.type="highpass",d.frequency.value=i;const h=t.createGain();return h.gain.value=r,c.connect(u),u.connect(d),d.connect(h),h.connect(yi),c.start(),{src:c,gain:h}}function u_(t,e,n=1.5){const i=_a(),r=sa.get(t);!i||!r||(r.gain.gain.cancelScheduledValues(i.currentTime),r.gain.gain.setValueAtTime(r.gain.gain.value,i.currentTime),r.gain.gain.linearRampToValueAtTime(e,i.currentTime+n),e<=.001&&setTimeout(()=>{try{r.src.stop()}catch{}sa.delete(t)},(n+.2)*1e3))}function oa(t,e,n,i,r){const s=_a();if(!s||!yi||sa.has(t))return;const o=kA(s,e,n,i,0);sa.set(t,o),u_(t,r,1.5)}function aa(t){sa.has(t)&&u_(t,0,1.5)}function zA(t,e){const n=e?.22:.14,i=.88+Math.random()*.24;switch(t){case"grass":Ke(.07,n*.8,700*i,.8,200),Oe("triangle",120*i,50,.08,n*.4);break;case"dirt":Ke(.09,n,900*i,1.2,100),Oe("sine",90*i,40,.1,n*.35);break;case"stone":Ke(.05,n*1.1,3e3*i,.4,400),Oe("square",180*i,60,.07,n*.3),Ke(.03,n*.4,4e3*i,.3,80,25);break;case"gravel":Ke(.08,n,2e3*i,1.8,200),Ke(.04,n*.6,3500*i,1.2,400,35),Oe("triangle",140*i,50,.09,n*.3);break;case"sand":Ke(.12,n*.7,1800*i,1.5,300),Ke(.08,n*.4,2400*i,1.2,500,30);break;case"snow":Ke(.08,n*.9,5e3*i,.5,1500),Oe("sawtooth",200*i,80,.06,n*.2,3e3);break;case"wood":Oe("triangle",280*i,100,.1,n*.5),Ke(.06,n*.5,1200*i,1,150);break;case"water":Ke(.14,n*.6,2500*i,2,600),Oe("sine",400*i,180,.12,n*.25),Ke(.06,n*.25,3500,1.5,800,60);break;case"metal":Oe("sine",900*i,200,.18,n*.4),Oe("sine",1400*i,300,.14,n*.2,void 0,10),Ke(.04,n*.3,5e3,.5,2e3);break;case"leaves":Ke(.1,n*.6,4e3*i,2,1e3),Ke(.06,n*.3,6e3*i,1.5,2e3,30);break}}function f_(t){switch(t){case 1:return"grass";case 2:return"dirt";case 3:return"stone";case 4:return"sand";case 5:return"snow";case 6:return"wood";case 7:return"leaves";case 8:case 9:case 10:case 11:case 12:case 13:return"stone";case 14:return"wood";case 15:return"gravel";case 16:return"wood";case 17:return"stone";case 18:return"gravel";case 19:return"snow";case 20:return"stone";case 21:return"stone";case 22:return"stone";case 23:return"water";case 24:return"stone";case 25:return"wood";default:return"stone"}}function BA(){oa("rain",3e3,1.8,400,.28),oa("rain_low",600,2.5,60,.18)}function t0(){aa("rain"),aa("rain_low")}function GA(t=.12){oa("wind",800,4,40,t)}function n0(){aa("wind")}function HA(){oa("cave",200,6,20,.08)}function i0(){aa("cave")}function VA(){const t=.7+Math.random()*.6;Oe("sine",1200*t,600,.25,.12,2e3),Ke(.04,.06,4e3,.5,1500,30)}function WA(){oa("campfire",1200,3.5,200,.14)}function r0(){aa("campfire")}const Bt={break(){Ke(.18,.35,1500),Oe("square",160,60,.1,.1)},breakBlock(t){switch(f_(t)){case"grass":case"dirt":Ke(.2,.3,900,1.5,150),Oe("triangle",100,40,.15,.12);break;case"stone":case"gravel":Ke(.14,.4,2500,.8,300),Oe("square",200,70,.12,.18);break;case"sand":Ke(.22,.28,1400,2,300);break;case"snow":Ke(.1,.25,5e3,.5,1200),Oe("sawtooth",180,60,.1,.1,2500);break;case"wood":case"leaves":Oe("triangle",320,120,.18,.22),Ke(.1,.2,1800,1.2,200);break;default:Ke(.18,.35,1500),Oe("square",160,60,.1,.1)}},place(){Oe("square",440,220,.08,.18),Ke(.04,.1,3e3)},step(t="stone",e=!1){zA(t,e)},hurt(){Oe("sawtooth",400,80,.18,.35,900)},attack(){Oe("triangle",800,200,.12,.18),Ke(.05,.12,4e3)},hit(){Oe("square",300,70,.14,.3),Ke(.08,.25,1600)},jump(){Oe("sine",300,600,.12,.12)},land(t){const e=Math.min(.5,.1+t*.025);Ke(.12,e,1200,2,80),Oe("sine",120,40,.15,e*.5)},splash(){Ke(.2,.3,2500,2.5,500),Oe("sine",500,200,.18,.15),Ke(.08,.15,4e3,1.5,800,60)},pickup(){Oe("square",660,990,.08,.15),Oe("square",990,1320,.08,.12,void 0,80)},death(){Oe("sawtooth",300,40,1,.4,700)},enemyGrowl(){Oe("sawtooth",80,50,.4,.25,500),Oe("square",120,60,.35,.15,400)},enemyDeath(){Oe("sawtooth",200,30,.6,.3,600),Ke(.2,.2,800,3,80)},night(){Oe("sine",220,110,1.5,.08)},dawn(){Oe("triangle",440,880,.4,.1),Oe("triangle",660,1320,.4,.1,void 0,200)},bloodMoonRise(){Oe("sawtooth",60,40,3,.22,300),Oe("sine",80,50,3.5,.18,500,400),Oe("sawtooth",400,200,1.5,.15,600,800),Oe("sine",320,180,2,.1,400,1e3)},thunder(){Ke(1.8,.45,120,5,20),Ke(.08,.6,4e3,.5,500),Ke(2.5,.2,80,8,15,300)},achievement(){Oe("sine",880,1320,.15,.2),Oe("sine",1320,1760,.15,.18,void 0,150),Oe("sine",1760,2200,.12,.14,void 0,300)},eat(){for(let t=0;t<3;t++)Ke(.04,.12,2e3,1.5,400,t*80)},drink(){Oe("sine",600,250,.15,.14,1e3),Ke(.08,.1,1500,2,300,80),Oe("sine",450,180,.12,.1,800,160)},campfirePop(){const t=.8+Math.random()*.5;Ke(.06,.16,2500*t,1,400),Oe("square",300*t,80,.08,.07)},craftComplete(){Oe("triangle",440,660,.12,.15),Oe("triangle",660,880,.1,.12,void 0,100)},portalEnter(){Oe("sawtooth",200,1200,.8,.25,800),Ke(.6,.15,2e3,3,200,100)}},XA=[220,277,330,370,440,370,330,277],jA=[110,138,165,185,220,185,165,138];let s0=0,Ao=!1;function YA(){const t=_a();if(!t||!ko)return;const e=Ao?jA:XA,n=e[s0%e.length];s0++;const i=t.currentTime,r=t.createOscillator();r.type=Ao?"sawtooth":"sine",r.frequency.value=n;const s=t.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.5,i+.3),s.gain.exponentialRampToValueAtTime(.001,i+(Ao?3.5:2.5));const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=Ao?800:1200,r.connect(o),o.connect(s),s.connect(ko),r.start(i),r.stop(i+4)}function o0(t){Ao=t}function qA(){if(zo!==null)return;const t=()=>{YA(),zo=window.setTimeout(t,1800+Math.random()*1200)};t()}function KA(){zo!==null&&(clearTimeout(zo),zo=null)}const fe={STICK:"stick",COAL:"coal",IRON_INGOT:"iron_ingot",GOLD_INGOT:"gold_ingot",DIAMOND:"diamond",PICK_WOOD:"pickaxe_wood",PICK_STONE:"pickaxe_stone",PICK_IRON:"pickaxe_iron",PICK_DIAMOND:"pickaxe_diamond",SWORD_WOOD:"sword_wood",SWORD_STONE:"sword_stone",SWORD_IRON:"sword_iron",SWORD_DIAMOND:"sword_diamond",AXE_WOOD:"axe_wood",AXE_STONE:"axe_stone",MEAT_RAW:"meat_raw",MEAT_COOKED:"meat_cooked",APPLE:"apple",BREAD:"bread",BONE:"bone",LEATHER:"leather"};function $A(t,e=64){const n=Zr[t];return{id:String(t),name:(n==null?void 0:n.name)??"Block",stackSize:e,blockId:t,iconKind:"block"}}const d_={};function wt(t){d_[t.id]=t}const ZA=[I.GRASS,I.DIRT,I.STONE,I.SAND,I.SNOW,I.WOOD,I.LEAVES,I.COAL_ORE,I.IRON_ORE,I.GOLD_ORE,I.DIAMOND_ORE,I.GLOWSTONE,I.PLANKS,I.COBBLESTONE,I.CRAFTING_TABLE,I.BRICK,I.MOSS_STONE,I.ICE,I.OBSIDIAN,I.CRYSTAL,I.MAGMA,I.CAMPFIRE,I.TORCH];for(const t of ZA)wt($A(t));wt({id:fe.PICK_WOOD,name:"Wooden Pickaxe",stackSize:1,tool:"pickaxe",tier:"wood",miningSpeed:2,attack:2,durability:60,iconKind:"svg",color:"#8B5A2B"});wt({id:fe.PICK_STONE,name:"Stone Pickaxe",stackSize:1,tool:"pickaxe",tier:"stone",miningSpeed:4,attack:3,durability:132,iconKind:"svg",color:"#757575"});wt({id:fe.PICK_IRON,name:"Iron Pickaxe",stackSize:1,tool:"pickaxe",tier:"iron",miningSpeed:6,attack:4,durability:251,iconKind:"svg",color:"#D4915C"});wt({id:fe.PICK_DIAMOND,name:"Diamond Pickaxe",stackSize:1,tool:"pickaxe",tier:"diamond",miningSpeed:9,attack:5,durability:1562,iconKind:"svg",color:"#00E5FF"});wt({id:fe.SWORD_WOOD,name:"Wooden Sword",stackSize:1,tool:"sword",tier:"wood",attack:5,durability:60,iconKind:"svg",color:"#8B5A2B"});wt({id:fe.SWORD_STONE,name:"Stone Sword",stackSize:1,tool:"sword",tier:"stone",attack:7,durability:132,iconKind:"svg",color:"#757575"});wt({id:fe.SWORD_IRON,name:"Iron Sword",stackSize:1,tool:"sword",tier:"iron",attack:9,durability:251,iconKind:"svg",color:"#D4915C"});wt({id:fe.SWORD_DIAMOND,name:"Diamond Sword",stackSize:1,tool:"sword",tier:"diamond",attack:12,durability:1562,iconKind:"svg",color:"#00E5FF"});wt({id:fe.AXE_WOOD,name:"Wooden Axe",stackSize:1,tool:"axe",tier:"wood",miningSpeed:2,attack:4,durability:60,iconKind:"svg",color:"#8B5A2B"});wt({id:fe.AXE_STONE,name:"Stone Axe",stackSize:1,tool:"axe",tier:"stone",miningSpeed:4,attack:5,durability:132,iconKind:"svg",color:"#757575"});wt({id:fe.STICK,name:"Stick",stackSize:64,iconKind:"svg",color:"#8D6E63"});wt({id:fe.COAL,name:"Coal",stackSize:64,iconKind:"svg",color:"#212121"});wt({id:fe.IRON_INGOT,name:"Iron Ingot",stackSize:64,iconKind:"svg",color:"#E0E0E0"});wt({id:fe.GOLD_INGOT,name:"Gold Ingot",stackSize:64,iconKind:"svg",color:"#FFC107"});wt({id:fe.DIAMOND,name:"Diamond",stackSize:64,iconKind:"svg",color:"#00E5FF"});wt({id:fe.BONE,name:"Bone",stackSize:64,iconKind:"svg",color:"#ECEFF1"});wt({id:fe.LEATHER,name:"Leather",stackSize:64,iconKind:"svg",color:"#6D4C41"});wt({id:fe.MEAT_RAW,name:"Raw Meat",stackSize:16,food:{hunger:3,health:-1},iconKind:"svg",color:"#E57373"});wt({id:fe.MEAT_COOKED,name:"Cooked Meat",stackSize:16,food:{hunger:8,health:1},iconKind:"svg",color:"#BF6F4A"});wt({id:fe.APPLE,name:"Apple",stackSize:16,food:{hunger:4,thirst:2},iconKind:"svg",color:"#E53935"});wt({id:fe.BREAD,name:"Bread",stackSize:16,food:{hunger:6},iconKind:"svg",color:"#F9A825"});const nd=9,QA=27,JA=nd+QA;function e2(){return new Array(JA).fill(null)}function Nn(t){if(t)return d_[t]}function _s(t,e,n){const i=Nn(e);if(!i)return n;let r=n;for(let s=0;s<t.length&&r>0;s++){const o=t[s];if(o&&o.id===e&&o.count<i.stackSize){const a=i.stackSize-o.count,l=Math.min(a,r);o.count+=l,r-=l}}for(let s=0;s<t.length&&r>0;s++)if(!t[s]){const o=Math.min(i.stackSize,r);t[s]={id:e,count:o},r-=o}return r}function t2(t,e){const n=e?Nn(e):void 0,i=[I.STONE,I.COBBLESTONE,I.COAL_ORE,I.MOSS_STONE,I.BRICK],r=[I.IRON_ORE,I.GOLD_ORE],s=[I.DIAMOND_ORE,I.OBSIDIAN,I.CRYSTAL],o=[I.WOOD,I.PLANKS,I.CRAFTING_TABLE,I.CAMPFIRE],a=n==null?void 0:n.tier,l=(n==null?void 0:n.tool)==="pickaxe",c=(n==null?void 0:n.tool)==="axe";let u=!0,d=1;return r.includes(t)?u=l&&(a==="stone"||a==="iron"||a==="diamond"):s.includes(t)?u=l&&(a==="iron"||a==="diamond"):i.includes(t)&&(u=l),l&&(i.includes(t)||r.includes(t)||s.includes(t))||c&&o.includes(t)?d=(n==null?void 0:n.miningSpeed)??1:(t===I.DIRT||t===I.GRASS||t===I.SAND)&&(d=1.2),{speed:d,canHarvest:u}}function n2(t){switch(t){case I.COAL_ORE:return[{id:fe.COAL,count:1}];case I.DIAMOND_ORE:return[{id:fe.DIAMOND,count:1}];case I.GRASS:return[{id:String(I.DIRT),count:1}];case I.STONE:return[{id:String(I.COBBLESTONE),count:1}];case I.LEAVES:return Math.random()<.08?[{id:fe.APPLE,count:1}]:Math.random()<.25?[{id:fe.STICK,count:1}]:[];default:return[{id:String(t),count:1}]}}function Gt(t){const e=t.pattern?t.pattern.map(n=>n??"_").join("|"):JSON.stringify(t.shapeless);return{...t,id:`${t.result.id}_${e}`}}const Yt=String(I.PLANKS),i2=String(I.WOOD),ni=String(I.COBBLESTONE),r2=String(I.CRAFTING_TABLE),a0=String(I.TORCH),s2=String(I.CAMPFIRE),o2=[Gt({name:"Planks",size:2,shapeless:{[i2]:1},result:{id:Yt,count:4}}),Gt({name:"Sticks",size:2,pattern:[Yt,null,Yt,null],result:{id:fe.STICK,count:4}}),Gt({name:"Sticks",size:2,pattern:[null,Yt,null,Yt],result:{id:fe.STICK,count:4}}),Gt({name:"Crafting Table",size:2,pattern:[Yt,Yt,Yt,Yt],result:{id:r2,count:1}}),Gt({name:"Torch",size:2,pattern:[fe.COAL,null,fe.STICK,null],result:{id:a0,count:4}}),Gt({name:"Torch",size:2,pattern:[null,fe.COAL,null,fe.STICK],result:{id:a0,count:4}}),Gt({name:"Campfire",size:3,pattern:[null,fe.STICK,null,fe.STICK,fe.COAL,fe.STICK,ni,ni,ni],result:{id:s2,count:1}}),Gt({name:"Wooden Pickaxe",size:3,pattern:[Yt,Yt,Yt,null,fe.STICK,null,null,fe.STICK,null],result:{id:fe.PICK_WOOD,count:1}}),Gt({name:"Stone Pickaxe",size:3,pattern:[ni,ni,ni,null,fe.STICK,null,null,fe.STICK,null],result:{id:fe.PICK_STONE,count:1}}),Gt({name:"Iron Pickaxe",size:3,pattern:[fe.IRON_INGOT,fe.IRON_INGOT,fe.IRON_INGOT,null,fe.STICK,null,null,fe.STICK,null],result:{id:fe.PICK_IRON,count:1}}),Gt({name:"Diamond Pickaxe",size:3,pattern:[fe.DIAMOND,fe.DIAMOND,fe.DIAMOND,null,fe.STICK,null,null,fe.STICK,null],result:{id:fe.PICK_DIAMOND,count:1}}),Gt({name:"Wooden Sword",size:2,pattern:[Yt,null,Yt,null],result:{id:fe.SWORD_WOOD,count:1}}),Gt({name:"Stone Sword",size:3,pattern:[null,ni,null,null,ni,null,null,fe.STICK,null],result:{id:fe.SWORD_STONE,count:1}}),Gt({name:"Iron Sword",size:3,pattern:[null,fe.IRON_INGOT,null,null,fe.IRON_INGOT,null,null,fe.STICK,null],result:{id:fe.SWORD_IRON,count:1}}),Gt({name:"Diamond Sword",size:3,pattern:[null,fe.DIAMOND,null,null,fe.DIAMOND,null,null,fe.STICK,null],result:{id:fe.SWORD_DIAMOND,count:1}}),Gt({name:"Wooden Axe",size:3,pattern:[Yt,Yt,null,Yt,fe.STICK,null,null,fe.STICK,null],result:{id:fe.AXE_WOOD,count:1}}),Gt({name:"Stone Axe",size:3,pattern:[ni,ni,null,ni,fe.STICK,null,null,fe.STICK,null],result:{id:fe.AXE_STONE,count:1}}),Gt({name:"Bread",size:2,shapeless:{[fe.APPLE]:3},result:{id:fe.BREAD,count:1}})];function a2(t,e){if(!t.some(i=>i!==null))return null;for(const i of o2)if(!(i.size>e)){if(i.shapeless){if(u2(t,i.shapeless))return i;continue}if(i.pattern){if(i.size===e){if(l2(t,i.pattern,e))return i}else if(i.size<e){for(let r=0;r<=e-i.size;r++)for(let s=0;s<=e-i.size;s++)if(c2(t,i.pattern,i.size,e,s,r))return i}}}return null}function l2(t,e,n){for(let i=0;i<n*n;i++){const r=t[i],s=e[i];if(s==null){if(r!==null)return!1}else if(!r||r.id!==s||r.count<1)return!1}return!0}function c2(t,e,n,i,r,s){for(let o=0;o<i;o++)for(let a=0;a<i;a++){const l=o*i+a,c=a>=r&&a<r+n,u=o>=s&&o<s+n;if(c&&u){const d=e[(o-s)*n+(a-r)],h=t[l];if(d==null){if(h!==null)return!1}else if(!h||h.id!==d||h.count<1)return!1}else if(t[l]!==null)return!1}return!0}function u2(t,e){const n={};for(const s of t)s&&(n[s.id]=(n[s.id]??0)+s.count);const i=Object.keys(n),r=Object.keys(e);for(const s of i)if(!(s in e))return!1;for(const s of r)if((n[s]??0)<e[s])return!1;return!0}function l0(t){for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const ju=`
  attribute vec3 color;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  void main() {
    vUv = uv;
    vColor = color;
    vNormal = normalMatrix * normal;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,c0=`
  uniform sampler2D atlas;
  uniform float uDaylight;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  void main() {
    vec4 tex = texture2D(atlas, vUv);
    if (tex.a < 0.1) discard;
    float ao = vColor.r;
    float light = vColor.g;
    vec3 n = normalize(vNormal);
    float diff = max(dot(n, normalize(vec3(0.4, 1.0, 0.3))), 0.0);
    float sunLight = mix(0.15, 1.0, diff) * uDaylight;
    float finalLight = max(sunLight, light * 0.55);
    vec3 col = tex.rgb * ao * finalLight;
    float fog = smoothstep(uFogNear, uFogFar, vFogDepth);
    gl_FragColor = vec4(mix(col, uFogColor, fog), tex.a);
  }
`,f2=`
  uniform sampler2D atlas;
  uniform float uDaylight;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  void main() {
    vec2 uv2 = vUv + vec2(sin(uTime * 1.5 + vUv.y * 8.0) * 0.005, 0.0);
    vec4 tex = texture2D(atlas, uv2);
    float ao = vColor.r;
    float diff = max(dot(normalize(vNormal), normalize(vec3(0.4, 1.0, 0.3))), 0.0);
    float sunLight = mix(0.15, 1.0, diff) * uDaylight;
    vec3 col = tex.rgb * ao * sunLight;
    float fog = smoothstep(uFogNear, uFogFar, vFogDepth);
    gl_FragColor = vec4(mix(col, uFogColor, fog), 0.55);
  }
`,d2=`
  varying vec3 vWorldPos;
  void main() {
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,h2=`
  uniform float uTime;
  varying vec3 vWorldPos;
  void main() {
    vec3 dir = normalize(vWorldPos);
    float sunAngle = uTime * 6.28318 - 1.5708;
    vec3 sunDir = vec3(cos(sunAngle) * 0.8, sin(sunAngle), cos(sunAngle) * 0.3);
    float sunH = sunDir.y;
    float day = smoothstep(-0.05, 0.25, sunH);
    vec3 dayCol = mix(vec3(0.55, 0.75, 1.0), vec3(0.3, 0.5, 0.95), max(dir.y, 0.0));
    vec3 nightCol = mix(vec3(0.01, 0.01, 0.05), vec3(0.005, 0.005, 0.02), max(dir.y, 0.0));
    vec3 col = mix(nightCol, dayCol, day);
    float hGlow = smoothstep(-0.05, 0.0, sunH) * smoothstep(0.3, 0.0, sunH);
    float sProx = max(dot(dir, sunDir), 0.0);
    col += vec3(0.9, 0.35, 0.1) * hGlow * pow(sProx, 4.0) * 0.7;
    col += vec3(1.0, 0.95, 0.8) * smoothstep(0.997, 0.9995, sProx) * day;
    vec3 moonDir = -sunDir;
    float mProx = max(dot(dir, moonDir), 0.0);
    col += vec3(0.7, 0.75, 0.85) * smoothstep(0.997, 0.9995, mProx) * (1.0 - day);
    float star = (1.0 - day) * step(0.998, fract(sin(dot(floor(dir * 300.0), vec3(12.9898, 78.233, 45.164))) * 43758.5453)) * step(0.1, dir.y);
    col += vec3(1.0) * star * 0.8;
    gl_FragColor = vec4(col, 1.0);
  }
`,u0=.6,f0=1.8,Yu=1.62,xs=-28,p2=9.2,m2=4.3,g2=6.2,v2=2.5,ml=6,_2=1200,x2=20,y2=10,gl=24,d0=48,h0=64,vl=300,p0=60,S2=300,M2=["Plains","Desert","Tundra","Forest","Mountain"];class E2{constructor(e){ee(this,"renderer");ee(this,"scene");ee(this,"camera");ee(this,"container");ee(this,"skyMesh");ee(this,"sunLight");ee(this,"ambientLight");ee(this,"world");ee(this,"chunkGroup");ee(this,"chunkMeshes",new Map);ee(this,"atlas");ee(this,"opaqueMat");ee(this,"transparentMat");ee(this,"waterMat");ee(this,"pos",new P(8,40,8));ee(this,"vel",new P);ee(this,"yaw",0);ee(this,"pitch",0);ee(this,"onGround",!1);ee(this,"inWater",!1);ee(this,"sprinting",!1);ee(this,"keys",new Set);ee(this,"mouseLeft",!1);ee(this,"mouseRight",!1);ee(this,"pointerLocked",!1);ee(this,"rightClickHandled",!1);ee(this,"targetBlock",null);ee(this,"targetNormal",null);ee(this,"highlightMesh");ee(this,"breakOverlay");ee(this,"breakProgress",0);ee(this,"breakTarget",null);ee(this,"inventory",e2());ee(this,"selectedSlot",0);ee(this,"inventoryOpen",!1);ee(this,"craftGrid",new Array(9).fill(null));ee(this,"craftGridSize",2);ee(this,"craftResult",null);ee(this,"cursorItem",null);ee(this,"health",20);ee(this,"maxHealth",20);ee(this,"hunger",20);ee(this,"maxHunger",20);ee(this,"stamina",20);ee(this,"maxStamina",20);ee(this,"thirst",20);ee(this,"maxThirst",20);ee(this,"dead",!1);ee(this,"fallStartY",-1);ee(this,"dayTime",.3);ee(this,"dayCount",1);ee(this,"weather","clear");ee(this,"weatherTimer",120);ee(this,"rainParticles");ee(this,"snowParticles");ee(this,"enemies",[]);ee(this,"animals",[]);ee(this,"enemyGroup");ee(this,"animalGroup");ee(this,"itemDrops",[]);ee(this,"dropGroup");ee(this,"dropGeo");ee(this,"particles",[]);ee(this,"particleMesh");ee(this,"particleGeo");ee(this,"isBloodMoon",!1);ee(this,"bloodMoonChecked",!1);ee(this,"achievements",[]);ee(this,"pointLights",[]);ee(this,"lightGroup");ee(this,"lastFootstep",0);ee(this,"lastCaveDrip",0);ee(this,"wasNight",!1);ee(this,"nearCampfire",!1);ee(this,"campfirePopTimer",0);ee(this,"statsCb",null);ee(this,"toastCb",null);ee(this,"animId",0);ee(this,"lastTime",0);ee(this,"paused",!1);ee(this,"message",null);ee(this,"msgTimer",0);ee(this,"fps",0);ee(this,"frameCount",0);ee(this,"fpsTimer",0);ee(this,"chunksLoadedThisFrame",0);this.container=e,this.setupScene(),this.setupSky(),this.setupLighting(),this.setupWorld(),this.setupMaterials(),this.setupPlayer(),this.setupInput(),this.setupHighlight(),this.setupWeather(),this.setupParticles(),this.setupEntities(),this.setupLights(),this.initInventory(),this.emitStats()}setupScene(){this.renderer=new r_({antialias:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setClearColor(8900331),this.container.appendChild(this.renderer.domElement),this.scene=new eA,this.scene.fog=new oh(8900331,40,80),this.camera=new In(75,this.container.clientWidth/this.container.clientHeight,.1,500),window.addEventListener("resize",()=>{const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)})}setupSky(){const e=new fc(400,32,16),n=new ui({vertexShader:d2,fragmentShader:h2,uniforms:{uTime:{value:.3}},side:gn,depthWrite:!1});this.skyMesh=new et(e,n),this.scene.add(this.skyMesh)}setupLighting(){this.sunLight=new lA(16777215,1),this.sunLight.position.set(50,100,30),this.scene.add(this.sunLight),this.ambientLight=new cA(4210784,.4),this.scene.add(this.ambientLight)}setupWorld(){this.world=new IA(Math.floor(Math.random()*999999)),this.chunkGroup=new si,this.scene.add(this.chunkGroup)}setupMaterials(){this.atlas=bA();const e=new Pe(8900331),n={atlas:{value:this.atlas},uDaylight:{value:1},uFogColor:{value:e},uFogNear:{value:40},uFogFar:{value:80}};this.opaqueMat=new ui({vertexShader:ju,fragmentShader:c0,uniforms:{...n}}),this.transparentMat=new ui({vertexShader:ju,fragmentShader:c0,uniforms:{...n},transparent:!0,side:li,depthWrite:!1}),this.waterMat=new ui({vertexShader:ju,fragmentShader:f2,uniforms:{...n,uTime:{value:0}},transparent:!0,side:li,depthWrite:!1})}setupPlayer(){const e=Math.floor(this.pos.x/Nt),n=Math.floor(this.pos.z/Vt);for(let i=-1;i<=1;i++)for(let r=-1;r<=1;r++)this.world.ensureChunk(e+i,n+r);for(let i=hn-1;i>=0;i--)if(this.world.isSolid(Math.floor(this.pos.x),i,Math.floor(this.pos.z))){this.pos.y=i+1;break}this.vel.set(0,0,0)}setupInput(){const e=this.renderer.domElement;e.addEventListener("click",()=>{this.pointerLocked||e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e,!this.pointerLocked&&this.inventoryOpen}),document.addEventListener("mousemove",n=>{!this.pointerLocked||this.paused||(this.yaw-=n.movementX*.002,this.pitch-=n.movementY*.002,this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)))}),document.addEventListener("keydown",n=>{this.keys.add(n.code),n.code==="KeyE"&&this.toggleInventory(),n.code==="KeyQ"&&this.dropHeldItem(),n.code==="KeyR"&&this.dead&&this.respawn(),n.code>="Digit1"&&n.code<="Digit9"&&(this.selectedSlot=parseInt(n.code[5])-1)}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),e.addEventListener("mousedown",n=>{this.pointerLocked&&(n.button===0&&(this.mouseLeft=!0),n.button===2&&(this.mouseRight=!0,this.rightClickHandled=!1))}),e.addEventListener("mouseup",n=>{n.button===0&&(this.mouseLeft=!1,this.breakProgress=0,this.breakTarget=null),n.button===2&&(this.mouseRight=!1)}),e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("wheel",n=>{this.selectedSlot=(this.selectedSlot+Math.sign(n.deltaY)+nd)%nd})}setupHighlight(){const e=new rA(new lt(1.005,1.005,1.005));this.highlightMesh=new nA(e,new s_({color:0,linewidth:2})),this.highlightMesh.visible=!1,this.scene.add(this.highlightMesh);const n=new lt(1.01,1.01,1.01),i=new nh({color:16777215,transparent:!0,opacity:0,depthWrite:!1});this.breakOverlay=new et(n,i),this.breakOverlay.visible=!1,this.scene.add(this.breakOverlay)}setupWeather(){const n=new Float32Array(12e3);for(let a=0;a<4e3;a++)n[a*3]=(Math.random()-.5)*60,n[a*3+1]=Math.random()*40,n[a*3+2]=(Math.random()-.5)*60;const i=new pn;i.setAttribute("position",new En(n,3)),this.rainParticles=new ku(i,new Il({color:11193599,size:.15,transparent:!0,opacity:.6})),this.rainParticles.visible=!1,this.scene.add(this.rainParticles);const r=2e3,s=new Float32Array(r*3);for(let a=0;a<r;a++)s[a*3]=(Math.random()-.5)*60,s[a*3+1]=Math.random()*40,s[a*3+2]=(Math.random()-.5)*60;const o=new pn;o.setAttribute("position",new En(s,3)),this.snowParticles=new ku(o,new Il({color:16777215,size:.3,transparent:!0,opacity:.8})),this.snowParticles.visible=!1,this.scene.add(this.snowParticles)}setupParticles(){this.particleGeo=new pn;const e=new Float32Array(vl*3),n=new Float32Array(vl*3);this.particleGeo.setAttribute("position",new En(e,3)),this.particleGeo.setAttribute("color",new En(n,3)),this.particleGeo.setDrawRange(0,0),this.particleMesh=new ku(this.particleGeo,new Il({size:.12,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1})),this.scene.add(this.particleMesh)}setupEntities(){this.enemyGroup=new si,this.scene.add(this.enemyGroup),this.animalGroup=new si,this.scene.add(this.animalGroup),this.dropGroup=new si,this.scene.add(this.dropGroup),this.dropGeo=new lt(.3,.3,.3)}setupLights(){this.lightGroup=new si,this.scene.add(this.lightGroup);for(let e=0;e<8;e++){const n=new oA(16746547,0,14,2);n.position.set(0,-999,0),this.lightGroup.add(n),this.pointLights.push(n)}}initInventory(){_s(this.inventory,String(I.TORCH),8),_s(this.inventory,fe.BREAD,3),_s(this.inventory,String(I.PLANKS),16)}start(){this.lastTime=performance.now(),qA();const e=n=>{this.animId=requestAnimationFrame(e);const i=Math.min((n-this.lastTime)/1e3,.1);this.lastTime=n,this.paused||this.update(i),this.renderer.render(this.scene,this.camera),this.frameCount++,this.fpsTimer+=i,this.fpsTimer>=1&&(this.fps=this.frameCount,this.frameCount=0,this.fpsTimer=0)};this.animId=requestAnimationFrame(e)}dispose(){cancelAnimationFrame(this.animId),KA(),t0(),n0(),i0(),r0(),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}onStatsChange(e){this.statsCb=e}onToast(e){this.toastCb=e}getYaw(){return this.yaw}sampleMapColor(e,n){switch(this.world.gen.getBiome(e,n)){case 1:return[.96,.87,.7];case 2:return[.96,.98,1];case 3:return[.18,.49,.2];case 4:return[.54,.54,.54];default:return[.3,.69,.31]}}clickSlot(e,n){const i=e==="inventory"?this.inventory:this.craftGrid,r=i[n];if(this.cursorItem===null)r!==null&&(this.cursorItem=r,i[n]=null);else if(r===null)i[n]=this.cursorItem,this.cursorItem=null;else if(r.id===this.cursorItem.id&&Nn(r.id).stackSize>1){const s=Nn(r.id).stackSize-r.count,o=Math.min(s,this.cursorItem.count);r.count+=o,this.cursorItem.count-=o,this.cursorItem.count<=0&&(this.cursorItem=null)}else{const s=r;i[n]=this.cursorItem,this.cursorItem=s}this.updateCraftResult(),this.emitStats()}clickCraftResult(){if(!this.craftResult)return;const e=this.craftResult;if(this.cursorItem===null)this.cursorItem={id:e.id,count:e.count,durability:e.durability},l0(this.craftGrid),Bt.craftComplete();else if(this.cursorItem.id===e.id){const n=Nn(e.id);n&&this.cursorItem.count+e.count<=n.stackSize&&(this.cursorItem.count+=e.count,l0(this.craftGrid),Bt.craftComplete())}this.updateCraftResult(),this.emitStats()}setCraftGridSize(e){this.craftGridSize=e,this.craftGrid=new Array(e*e).fill(null),this.craftResult=null}getCursorItem(){return this.cursorItem}toggleInventory(){if(this.inventoryOpen=!this.inventoryOpen,this.inventoryOpen)this.setCraftGridSize(this.isNearCraftingTable()?3:2);else{if(this.cursorItem){const e=_s(this.inventory,this.cursorItem.id,this.cursorItem.count);e>0&&this.spawnDrop(this.pos.x,this.pos.y,this.pos.z,this.cursorItem.id,e),this.cursorItem=null}for(let e=0;e<this.craftGrid.length;e++)if(this.craftGrid[e]){const n=_s(this.inventory,this.craftGrid[e].id,this.craftGrid[e].count);n>0&&this.spawnDrop(this.pos.x,this.pos.y,this.pos.z,this.craftGrid[e].id,n),this.craftGrid[e]=null}this.craftResult=null}this.emitStats()}respawn(){this.health=this.maxHealth,this.hunger=this.maxHunger,this.stamina=this.maxStamina,this.thirst=this.maxThirst,this.dead=!1,this.pos.set(8,40,8),this.setupPlayer(),this.vel.set(0,0,0),this.emitStats()}update(e){if(this.dead){this.emitStats();return}this.updateDayNight(e),this.updateWeather(e),this.updatePlayer(e),this.updateCamera(),this.updateChunks(),this.updateTarget(),this.updateBreaking(e),this.updatePlacing(),this.updateEnemies(e),this.updateAnimals(e),this.updateItemDrops(e),this.updateParticles(e),this.updateStats(e),this.updateLights(),this.updateAudio(e),this.updateSky(),this.updateMaterials(),this.emitStats()}updatePlayer(e){if(this.inventoryOpen)return;const n=this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y+Yu),Math.floor(this.pos.z)),i=this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y+.4),Math.floor(this.pos.z));this.inWater=n===I.WATER||i===I.WATER,this.sprinting=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight");let r=0,s=0;this.keys.has("KeyW")&&(s-=1),this.keys.has("KeyS")&&(s+=1),this.keys.has("KeyA")&&(r-=1),this.keys.has("KeyD")&&(r+=1);const o=r!==0||s!==0;let a=m2;this.sprinting&&this.stamina>0&&o&&(a=g2),this.inWater&&(a=v2),this.hunger<=0&&(a*=.5);const l=Math.sin(this.yaw),c=Math.cos(this.yaw),u=(r*c-s*l)*a,d=(r*l+s*c)*a;this.vel.x=u,this.vel.z=d,this.inWater?(this.vel.y*=.85,this.vel.y+=xs*.15*e,this.keys.has("Space")&&(this.vel.y=3.5),this.sprinting&&o&&(this.vel.y=2)):(this.vel.y+=xs*e,this.keys.has("Space")&&this.onGround&&(this.vel.y=p2,this.onGround=!1,Bt.jump())),this.onGround&&this.vel.y<=0&&(this.fallStartY=this.pos.y),!this.onGround&&this.vel.y<0&&this.fallStartY<0&&(this.fallStartY=this.pos.y),this.sprinting&&o&&!this.inWater?(this.stamina=Math.max(0,this.stamina-3*e),this.stamina<=0&&(this.sprinting=!1)):this.stamina=Math.min(this.maxStamina,this.stamina+1.5*e),this.moveWithCollision(e)}moveWithCollision(e){if(this.pos.x+=this.vel.x*e,this.collidesAt(this.pos.x,this.pos.y,this.pos.z)){this.pos.x-=this.vel.x*e;const i=Math.sign(this.vel.x);for(let r=0;r<4;r++)if(this.pos.x+=i*.01,this.collidesAt(this.pos.x,this.pos.y,this.pos.z)){this.pos.x-=i*.01;break}this.vel.x=0}if(this.pos.z+=this.vel.z*e,this.collidesAt(this.pos.x,this.pos.y,this.pos.z)){this.pos.z-=this.vel.z*e;const i=Math.sign(this.vel.z);for(let r=0;r<4;r++)if(this.pos.z+=i*.01,this.collidesAt(this.pos.x,this.pos.y,this.pos.z)){this.pos.z-=i*.01;break}this.vel.z=0}const n=this.pos.y;if(this.pos.y+=this.vel.y*e,this.collidesAt(this.pos.x,this.pos.y,this.pos.z)){if(this.pos.y=n,this.vel.y<0){this.onGround=!0;const i=this.fallStartY-this.pos.y;if(i>3){const r=Math.floor(i-3);this.takeDamage(r),Bt.land(i)}this.fallStartY=this.pos.y}this.vel.y=0}else this.onGround=!1;this.pos.y<-10&&(this.takeDamage(100),this.pos.y=50)}collidesAt(e,n,i){const r=u0/2,s=Math.floor(e-r),o=Math.floor(e+r),a=Math.floor(n),l=Math.floor(n+f0-.01),c=Math.floor(i-r),u=Math.floor(i+r);for(let d=s;d<=o;d++)for(let h=a;h<=l;h++)for(let p=c;p<=u;p++)if(this.world.isSolid(d,h,p))return!0;return!1}updateCamera(){this.camera.position.set(this.pos.x,this.pos.y+Yu,this.pos.z);const e=new va(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(e),this.skyMesh.position.copy(this.camera.position)}updateChunks(){const e=Math.floor(this.pos.x/Nt),n=Math.floor(this.pos.z/Vt);this.chunksLoadedThisFrame=0;for(let i=-$i;i<=$i;i++)for(let r=-$i;r<=$i;r++){if(i*i+r*r>($i+.5)*($i+.5))continue;const s=e+i,o=n+r,a=`${s},${o}`;if(!this.world.chunks.has(a)){this.chunksLoadedThisFrame<3&&(this.world.ensureChunk(s,o),this.chunksLoadedThisFrame++);continue}const l=this.world.getChunk(s,o);l.dirty&&!this.chunkMeshes.has(a)?this.buildChunkMesh(s,o,l):l.dirty&&this.chunkMeshes.has(a)&&this.rebuildChunkMesh(s,o,l)}for(const[i,r]of this.chunkMeshes){const[s,o]=i.split(",").map(Number);(Math.abs(s-e)>$i+2||Math.abs(o-n)>$i+2)&&(this.chunkGroup.remove(r.opaque),this.chunkGroup.remove(r.transparent),this.chunkGroup.remove(r.water),r.opaque.geometry.dispose(),r.transparent.geometry.dispose(),r.water.geometry.dispose(),this.chunkMeshes.delete(i))}}buildChunkMesh(e,n,i){const{opaque:r,transparent:s,water:o}=FA(this.world,i),a=this.makeMesh(r,this.opaqueMat),l=this.makeMesh(s,this.transparentMat),c=this.makeMesh(o,this.waterMat);this.chunkGroup.add(a),this.chunkGroup.add(l),this.chunkGroup.add(c),this.chunkMeshes.set(`${e},${n}`,{opaque:a,transparent:l,water:c}),i.dirty=!1}rebuildChunkMesh(e,n,i){const r=`${e},${n}`,s=this.chunkMeshes.get(r);this.chunkGroup.remove(s.opaque),this.chunkGroup.remove(s.transparent),this.chunkGroup.remove(s.water),s.opaque.geometry.dispose(),s.transparent.geometry.dispose(),s.water.geometry.dispose(),this.buildChunkMesh(e,n,i)}makeMesh(e,n){const i=new pn;return i.setAttribute("position",new Kt(e.positions,3)),i.setAttribute("normal",new Kt(e.normals,3)),i.setAttribute("uv",new Kt(e.uvs,2)),i.setAttribute("color",new Kt(e.colors,3)),i.setIndex(e.indices),new et(i,n)}updateTarget(){const e=new P(0,0,-1).applyQuaternion(this.camera.quaternion),n=this.camera.position.x,i=this.camera.position.y,r=this.camera.position.z;let s=Math.floor(n),o=Math.floor(i),a=Math.floor(r);const l=e.x>=0?1:-1,c=e.y>=0?1:-1,u=e.z>=0?1:-1,d=e.x!==0?Math.abs(1/e.x):1/0,h=e.y!==0?Math.abs(1/e.y):1/0,p=e.z!==0?Math.abs(1/e.z):1/0;let _=e.x!==0?(e.x>0?s+1-n:n-s)*d:1/0,x=e.y!==0?(e.y>0?o+1-i:i-o)*h:1/0,m=e.z!==0?(e.z>0?a+1-r:r-a)*p:1/0,f=0,g=0,v=0;this.targetBlock=null,this.targetNormal=null;for(let y=0;y<ml*3;y++){const C=this.world.getBlock(s,o,a);if(C!==I.AIR&&C!==I.WATER){this.targetBlock={x:s,y:o,z:a},this.targetNormal={x:f,y:g,z:v};break}if(_<x?_<m?(s+=l,_+=d,f=-l,g=0,v=0):(a+=u,m+=p,f=0,g=0,v=-u):x<m?(o+=c,x+=h,f=0,g=-c,v=0):(a+=u,m+=p,f=0,g=0,v=-u),Math.sqrt((s-n+.5)**2+(o-i+.5)**2+(a-r+.5)**2)>ml)break}this.targetBlock?(this.highlightMesh.position.set(this.targetBlock.x+.5,this.targetBlock.y+.5,this.targetBlock.z+.5),this.highlightMesh.visible=!0):this.highlightMesh.visible=!1}updateBreaking(e){if(!this.mouseLeft||!this.pointerLocked||this.inventoryOpen||!this.targetBlock){this.breakProgress=0,this.breakOverlay.visible=!1;return}const n=this.targetBlock;(!this.breakTarget||this.breakTarget.x!==n.x||this.breakTarget.y!==n.y||this.breakTarget.z!==n.z)&&(this.breakProgress=0,this.breakTarget={...n});const i=this.world.getBlock(n.x,n.y,n.z);if(i===I.AIR||i===I.WATER||i===I.BEDROCK)return;const r=Zr[i],s=this.inventory[this.selectedSlot],{speed:o,canHarvest:a}=t2(i,s==null?void 0:s.id),l=r.breakTime/o;this.breakProgress+=e,this.breakOverlay.position.set(n.x+.5,n.y+.5,n.z+.5),this.breakOverlay.visible=!0;const c=Math.min(this.breakProgress/l,1);if(this.breakOverlay.material.opacity=c*.5,this.breakOverlay.material.color.set(c>.6?16711680:c>.3?16755200:16777215),this.breakProgress>=l){if(Bt.breakBlock(i),this.spawnBreakParticles(n.x,n.y,n.z,i),a){const u=n2(i);for(const d of u)this.spawnDrop(n.x+.5,n.y+.5,n.z+.5,d.id,d.count)}this.world.setBlock(n.x,n.y,n.z,I.AIR),this.breakProgress=0,this.breakTarget=null,this.breakOverlay.visible=!1,this.checkAchievement("first_break"),s&&s.durability!==void 0&&(s.durability--,s.durability<=0&&(this.inventory[this.selectedSlot]=null,this.toast("Tool broke!")))}}updatePlacing(){if(!this.mouseRight||!this.pointerLocked||this.inventoryOpen||this.rightClickHandled)return;this.rightClickHandled=!0;const e=this.inventory[this.selectedSlot];if(!e)return;const n=Nn(e.id);if(!n)return;if(n.food){(this.hunger<this.maxHunger||this.health<this.maxHealth)&&(this.hunger=Math.min(this.maxHunger,this.hunger+(n.food.hunger||0)),this.thirst=Math.min(this.maxThirst,this.thirst+(n.food.thirst||0)),n.food.health&&n.food.health>0&&(this.health=Math.min(this.maxHealth,this.health+n.food.health)),e.count--,e.count<=0&&(this.inventory[this.selectedSlot]=null),Bt.eat(),this.toast(`Ate ${n.name}`));return}if(!n.blockId||!this.targetBlock||!this.targetNormal)return;const i=this.targetBlock.x+this.targetNormal.x,r=this.targetBlock.y+this.targetNormal.y,s=this.targetBlock.z+this.targetNormal.z;if(i<0||r<0||r>=hn||s<0||this.world.getBlock(i,r,s)!==I.AIR)return;const o=u0/2;i>=Math.floor(this.pos.x-o)&&i<=Math.floor(this.pos.x+o)&&s>=Math.floor(this.pos.z-o)&&s<=Math.floor(this.pos.z+o)&&r>=Math.floor(this.pos.y)&&r<=Math.floor(this.pos.y+f0)||(this.world.setBlock(i,r,s,n.blockId),e.count--,e.count<=0&&(this.inventory[this.selectedSlot]=null),Bt.place(),this.checkAchievement("first_place"))}updateEnemies(e){var r;const n=this.getSunHeight()<0,i=this.isBloodMoon?3:n?1:0;this.enemies.length<x2&&i>0&&Math.random()<i*e*.3&&this.spawnEnemy();for(let s=this.enemies.length-1;s>=0;s--){const o=this.enemies[s];if(o.position.distanceTo(this.pos)>h0||!n&&!this.isBloodMoon&&Math.random()<e*.3){this.removeEnemy(s);continue}const l=new P().subVectors(this.pos,o.position);l.y=0;const c=l.length();c>.1&&l.normalize();let u=o.type==="slime"?1.5:o.type==="skeleton"?2.5:2;this.isBloodMoon&&(u*=1.3),c>1.5?(o.velocity.x=l.x*u,o.velocity.z=l.z*u):(o.velocity.x*=.8,o.velocity.z*=.8),o.type==="slime"&&o.onGround&&c>1.5&&(o.velocity.y=6,o.onGround=!1),o.velocity.y+=xs*e,o.position.x+=o.velocity.x*e,o.position.z+=o.velocity.z*e,o.position.y+=o.velocity.y*e;const d=this.getGroundY(o.position);if(o.position.y<=d&&(o.position.y=d,o.velocity.y=0,o.onGround=!0),o.attackCooldown-=e,c<1.8&&o.attackCooldown<=0){const h=o.type==="skeleton"?3:o.type==="slime"?1:2;this.isBloodMoon?this.takeDamage(h+1):this.takeDamage(h),o.attackCooldown=1.2,Bt.enemyGrowl()}if(o.mesh.position.copy(o.position),this.mouseLeft&&this.pointerLocked&&!this.inventoryOpen){const h=new P().subVectors(o.position,this.pos);if(h.y=0,h.length()<ml&&c<4){const p=new P(0,0,-1).applyQuaternion(this.camera.quaternion);if(p.y=0,p.normalize(),h.normalize(),p.dot(h)>.5){const _=this.inventory[this.selectedSlot],x=_&&((r=Nn(_.id))==null?void 0:r.attack)||1;o.health-=x,_&&_.durability!==void 0&&(_.durability--,_.durability<=0&&(this.inventory[this.selectedSlot]=null)),Bt.hit(),o.velocity.x+=h.x*-5,o.velocity.z+=h.z*-5,o.velocity.y+=3,o.health<=0&&(Bt.enemyDeath(),this.spawnDrop(o.position.x,o.position.y+.5,o.position.z,fe.BONE,1+Math.floor(Math.random()*2)),Math.random()<.3&&this.spawnDrop(o.position.x,o.position.y+.5,o.position.z,fe.MEAT_RAW,1),this.removeEnemy(s),this.checkAchievement("first_kill"))}}}}}spawnEnemy(){const e=Math.random()*Math.PI*2,n=gl+Math.random()*(d0-gl),i=Math.floor(this.pos.x+Math.cos(e)*n),r=Math.floor(this.pos.z+Math.sin(e)*n),s=this.getGroundY(new P(i,50,r));if(s<oi-1)return;const o=["zombie","skeleton","slime"],a=o[Math.floor(Math.random()*o.length)],l=this.createEnemyMesh(a);l.position.set(i,s,r),this.enemyGroup.add(l);const c=a==="slime"?6:a==="skeleton"?12:16;this.enemies.push({mesh:l,type:a,position:new P(i,s,r),velocity:new P,health:c,maxHealth:c,attackCooldown:2,onGround:!0})}createEnemyMesh(e){const n=new si,i=r=>new Bu({color:r});if(e==="zombie"){const r=new et(new lt(.5,.9,.3),i(2972199));r.position.y=.9,n.add(r);const s=new et(new lt(.45,.45,.45),i(3832370));s.position.y=1.6,n.add(s);const o=new et(new lt(.2,.7,.2),i(2972199));o.position.set(-.35,.9,.15),o.rotation.x=-.8,n.add(o);const a=o.clone();a.position.x=.35,n.add(a);const l=new et(new lt(.22,.6,.22),i(2245666));l.position.set(-.13,.3,0),n.add(l);const c=l.clone();c.position.x=.13,n.add(c)}else if(e==="skeleton"){const r=new et(new lt(.35,.8,.2),i(13684936));r.position.y=.9,n.add(r);const s=new et(new lt(.4,.4,.4),i(14737624));s.position.y=1.55,n.add(s);const o=new et(new lt(.15,.7,.15),i(13158592));o.position.set(-.25,.9,.1),o.rotation.x=-.6,n.add(o);const a=o.clone();a.position.x=.25,n.add(a);const l=new et(new lt(.15,.6,.15),i(12105904));l.position.set(-.1,.3,0),n.add(l);const c=l.clone();c.position.x=.1,n.add(c)}else{const r=new et(new fc(.4,8,6),i(4504388));r.position.y=.4,n.add(r)}return n}removeEnemy(e){this.enemyGroup.remove(this.enemies[e].mesh),this.enemies.splice(e,1)}updateAnimals(e){var i;const n=this.getSunHeight()>0;this.animals.length<y2&&n&&Math.random()<e*.05&&this.spawnAnimal();for(let r=this.animals.length-1;r>=0;r--){const s=this.animals[r];if(s.position.distanceTo(this.pos)>h0){this.removeAnimal(r);continue}const a=new P().subVectors(this.pos,s.position);a.y=0;const l=a.length();l<6&&l>.1&&(s.fleeTimer=3,s.wanderDir.copy(a).normalize().negate()),s.fleeTimer-=e,s.wanderTimer-=e,s.wanderTimer<=0&&(s.wanderDir.set(Math.random()-.5,0,Math.random()-.5).normalize(),s.wanderTimer=3+Math.random()*5);const c=s.fleeTimer>0?s.type==="rabbit"?5:3:s.type==="rabbit"?2:s.type==="cow"?.8:1.5;s.velocity.x=s.wanderDir.x*c,s.velocity.z=s.wanderDir.z*c,s.velocity.y+=xs*e,s.position.x+=s.velocity.x*e,s.position.z+=s.velocity.z*e,s.position.y+=s.velocity.y*e;const u=this.getGroundY(s.position);if(s.position.y<=u&&(s.position.y=u,s.velocity.y=0,s.onGround=!0),s.mesh.position.copy(s.position),Math.abs(s.velocity.x)+Math.abs(s.velocity.z)>.1&&(s.mesh.rotation.y=Math.atan2(s.velocity.x,s.velocity.z)),this.mouseLeft&&this.pointerLocked&&!this.inventoryOpen&&l<ml){const d=new P(0,0,-1).applyQuaternion(this.camera.quaternion),h=new P().subVectors(s.position,this.pos);if(h.y=0,h.normalize(),d.dot(h)>.5){const p=this.inventory[this.selectedSlot];p&&((i=Nn(p.id))!=null&&i.attack),Bt.hit(),this.spawnDrop(s.position.x,s.position.y+.5,s.position.z,fe.MEAT_RAW,1+Math.floor(Math.random()*2)),s.type==="cow"&&this.spawnDrop(s.position.x,s.position.y+.5,s.position.z,fe.LEATHER,1),this.removeAnimal(r)}}}}spawnAnimal(){const e=Math.random()*Math.PI*2,n=gl+Math.random()*(d0-gl),i=Math.floor(this.pos.x+Math.cos(e)*n),r=Math.floor(this.pos.z+Math.sin(e)*n),s=this.getGroundY(new P(i,50,r));if(s<oi)return;const o=["deer","rabbit","cow"],a=o[Math.floor(Math.random()*o.length)],l=this.createAnimalMesh(a);l.position.set(i,s,r),this.animalGroup.add(l),this.animals.push({mesh:l,type:a,position:new P(i,s,r),velocity:new P,wanderDir:new P(Math.random()-.5,0,Math.random()-.5).normalize(),wanderTimer:3+Math.random()*5,fleeTimer:0,onGround:!0})}createAnimalMesh(e){const n=new si,i=r=>new Bu({color:r});if(e==="deer"){const r=new et(new lt(.4,.5,.9),i(9136404));r.position.y=.8,n.add(r);const s=new et(new lt(.3,.35,.3),i(10516520));s.position.set(0,1.1,.5),n.add(s);const o=new et(new lt(.12,.55,.12),i(7032848));o.position.set(-.15,.28,-.25),n.add(o);const a=o.clone();a.position.x=.15,n.add(a);const l=o.clone();l.position.z=.25,n.add(l);const c=o.clone();c.position.set(.15,.28,.25),n.add(c)}else if(e==="rabbit"){const r=new et(new lt(.25,.2,.3),i(13150328));r.position.y=.25,n.add(r);const s=new et(new lt(.2,.18,.2),i(13678728));s.position.set(0,.35,.18),n.add(s);const o=new et(new lt(.06,.18,.04),i(13144208));o.position.set(-.06,.5,.16),n.add(o);const a=o.clone();a.position.x=.06,n.add(a)}else{const r=new et(new lt(.7,.6,1.1),i(16119280));r.position.y=.8,n.add(r);const s=new et(new lt(.35,.3,.5),i(2236962));s.position.set(.1,.85,-.1),n.add(s);const o=new et(new lt(.35,.35,.4),i(15790312));o.position.set(0,1,.6),n.add(o);const a=new et(new lt(.15,.5,.15),i(14737624));a.position.set(-.25,.25,-.35),n.add(a);const l=a.clone();l.position.x=.25,n.add(l);const c=a.clone();c.position.z=.35,n.add(c);const u=a.clone();u.position.set(.25,.25,.35),n.add(u)}return n}removeAnimal(e){this.animalGroup.remove(this.animals[e].mesh),this.animals.splice(e,1)}updateItemDrops(e){for(let n=this.itemDrops.length-1;n>=0;n--){const i=this.itemDrops[n];i.age+=e,i.velocity.y+=xs*.5*e,i.position.add(i.velocity.clone().multiplyScalar(e));const r=this.getGroundY(i.position);if(i.position.y<=r&&(i.position.y=r,i.velocity.y=0,i.velocity.x*=.8,i.velocity.z*=.8,i.onGround=!0),i.position.distanceTo(this.pos)<1.5&&i.age>.5){const o=_s(this.inventory,i.itemId,i.count);if(o===0){Bt.pickup(),this.removeDrop(n);continue}i.count=o}if(i.age>300){this.removeDrop(n);continue}i.mesh.position.copy(i.position),i.mesh.rotation.y+=e*2,i.mesh.position.y+=Math.sin(i.age*3)*.05}}spawnDrop(e,n,i,r,s){if(s<=0)return;const o=Nn(r),a=o!=null&&o.color?new Pe(o.color):new Pe(8947848),l=new Bu({color:a}),c=new et(this.dropGeo,l);c.position.set(e,n,i),this.dropGroup.add(c),this.itemDrops.push({mesh:c,itemId:r,count:s,position:new P(e,n,i),velocity:new P((Math.random()-.5)*2,3+Math.random()*2,(Math.random()-.5)*2),age:0,onGround:!1})}removeDrop(e){this.dropGroup.remove(this.itemDrops[e].mesh),this.itemDrops.splice(e,1)}dropHeldItem(){const e=this.inventory[this.selectedSlot];if(!e)return;const n=new P(0,0,-1).applyQuaternion(this.camera.quaternion);this.spawnDrop(this.pos.x+n.x,this.pos.y+Yu+n.y,this.pos.z+n.z,e.id,1),e.count--,e.count<=0&&(this.inventory[this.selectedSlot]=null)}updateParticles(e){for(let r=this.particles.length-1;r>=0;r--){const s=this.particles[r];if(s.age+=e,s.age>=s.maxAge){this.particles.splice(r,1);continue}s.velocity.y+=xs*.3*e,s.position.add(s.velocity.clone().multiplyScalar(e))}const n=this.particleGeo.attributes.position,i=this.particleGeo.attributes.color;for(let r=0;r<vl;r++)if(r<this.particles.length){const s=this.particles[r];n.setXYZ(r,s.position.x,s.position.y,s.position.z);const o=1-s.age/s.maxAge;i.setXYZ(r,s.color.r*o,s.color.g*o,s.color.b*o)}else n.setXYZ(r,0,-999,0),i.setXYZ(r,0,0,0);n.needsUpdate=!0,i.needsUpdate=!0,this.particleGeo.setDrawRange(0,this.particles.length)}spawnBreakParticles(e,n,i,r){let s=new Pe(8947848);r===I.GRASS?s=new Pe(5025616):r===I.DIRT?s=new Pe(8015406):r===I.STONE?s=new Pe(9079434):r===I.SAND?s=new Pe(16113331):r===I.WOOD?s=new Pe(7162928):r===I.LEAVES?s=new Pe(3046706):r===I.SNOW&&(s=new Pe(15790335));const o=8;for(let a=0;a<o&&this.particles.length<vl;a++)this.particles.push({position:new P(e+.2+Math.random()*.6,n+.2+Math.random()*.6,i+.2+Math.random()*.6),velocity:new P((Math.random()-.5)*4,2+Math.random()*4,(Math.random()-.5)*4),age:0,maxAge:.5+Math.random()*.5,color:s.clone().offsetHSL(0,0,(Math.random()-.5)*.2)})}updateDayNight(e){this.dayTime+=e/_2,this.dayTime>=1&&(this.dayTime-=1,this.dayCount++,this.bloodMoonChecked=!1),!this.bloodMoonChecked&&this.getSunHeight()<-.1&&(this.bloodMoonChecked=!0,this.isBloodMoon=this.dayCount%7===0,this.isBloodMoon&&(Bt.bloodMoonRise(),this.toast("⚠ Blood Moon Rising!"),this.checkAchievement("blood_moon"))),this.getSunHeight()>.1&&(this.isBloodMoon=!1);const n=this.getSunHeight()<0;n&&!this.wasNight&&(o0(!0),this.wasNight=!0),!n&&this.wasNight&&(o0(!1),this.wasNight=!1)}getSunHeight(){const e=this.dayTime*Math.PI*2-Math.PI/2;return Math.sin(e)}updateWeather(e){if(this.weatherTimer-=e,this.weatherTimer<=0){this.weatherTimer=p0+Math.random()*(S2-p0);const n=this.world.gen.getBiome(Math.floor(this.pos.x),Math.floor(this.pos.z)),i=Math.random();n===2?this.weather=i<.5?"snow":"clear":n===1?this.weather="clear":this.weather=i<.35?"rain":"clear",t0(),n0(),this.weather==="rain"&&BA(),this.weather==="snow"&&GA(.08)}if(this.rainParticles.visible=this.weather==="rain",this.snowParticles.visible=this.weather==="snow",this.weather==="rain"){const n=this.rainParticles.geometry.attributes.position;for(let i=0;i<n.count;i++){let r=n.getY(i)-25*e;r<0&&(r+=40),n.setY(i,r)}n.needsUpdate=!0,this.rainParticles.position.set(this.pos.x,0,this.pos.z)}if(this.weather==="snow"){const n=this.snowParticles.geometry.attributes.position;for(let i=0;i<n.count;i++){let r=n.getY(i)-4*e,s=n.getX(i)+Math.sin(i+performance.now()*.001)*.02;r<0&&(r+=40),n.setX(i,s),n.setY(i,r)}n.needsUpdate=!0,this.snowParticles.position.set(this.pos.x,0,this.pos.z)}this.weather==="rain"&&Math.random()<e*.005&&Bt.thunder()}updateStats(e){this.hunger-=.02*e,this.sprinting&&(this.hunger-=.05*e);let n=.025;this.world.gen.getBiome(Math.floor(this.pos.x),Math.floor(this.pos.z))===1&&(n=.06),this.thirst-=n*e,this.sprinting&&(this.thirst-=.04*e),this.inWater&&(this.thirst=Math.min(this.maxThirst,this.thirst+5*e)),this.hunger=Math.max(0,Math.min(this.maxHunger,this.hunger)),this.thirst=Math.max(0,Math.min(this.maxThirst,this.thirst)),this.hunger>16&&this.thirst>16&&(this.health=Math.min(this.maxHealth,this.health+.5*e)),this.hunger<=0&&this.takeDamage(e*.5),this.thirst<=0&&this.takeDamage(e*.3),this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y),Math.floor(this.pos.z))===I.MAGMA&&this.takeDamage(e*3)}takeDamage(e){this.health-=e,this.health<=0&&!this.dead&&(this.health=0,this.dead=!0,Bt.death(),this.toast("You died!"))}updateLights(){const e=Math.floor(this.pos.x),n=Math.floor(this.pos.y),i=Math.floor(this.pos.z);let r=0;const s=12;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++)for(let l=-s;l<=s&&!(r>=this.pointLights.length);l++){const c=e+o,u=n+a,d=i+l,h=this.world.getBlock(c,u,d),p=Zr[h];if(p&&p.emissive>10){const _=this.pointLights[r];_.position.set(c+.5,u+.8,d+.5),_.intensity=p.emissive>13?1.5:.8,_.color.set(p.emissive>13?16737826:16755268),_.distance=p.emissive>13?16:10,r++}}for(let o=r;o<this.pointLights.length;o++)this.pointLights[o].position.set(0,-999,0),this.pointLights[o].intensity=0;this.nearCampfire=!1;for(let o=-4;o<=4;o++){for(let a=-4;a<=4;a++){for(let l=-4;l<=4;l++)if(this.world.getBlock(e+o,n+a,i+l)===I.CAMPFIRE){this.nearCampfire=!0;break}if(this.nearCampfire)break}if(this.nearCampfire)break}}updateSky(){const e=this.skyMesh.material;e.uniforms.uTime.value=this.dayTime}updateMaterials(){const e=this.getSunHeight(),n=Math.max(0,Math.min(1,(e+.1)/.4)),i=new Pe(8900331),r=new Pe(657946),s=new Pe(5583650);let o;n>.6?o=i:n>.1?o=i.clone().lerp(s,1-(n-.1)/.5):o=r.clone().lerp(s,n/.1),this.sunLight.intensity=n*1.2,this.ambientLight.intensity=.15+n*.35,this.sunLight.color.set(n>.3?16777215:4482730);const a=this.scene.fog;a.color.copy(o),a.near=30+n*20,a.far=60+n*30;const l=[this.opaqueMat,this.transparentMat,this.waterMat];for(const c of l)c.uniforms.uDaylight.value=.15+n*.85,c.uniforms.uFogColor.value.copy(o),c.uniforms.uFogNear.value=a.near,c.uniforms.uFogFar.value=a.far;this.waterMat.uniforms.uTime.value=performance.now()/1e3}updateAudio(e){if((this.keys.has("KeyW")||this.keys.has("KeyS")||this.keys.has("KeyA")||this.keys.has("KeyD"))&&this.onGround&&!this.inventoryOpen){const r=this.sprinting?.28:.45;if(this.lastFootstep+=e,this.lastFootstep>=r){this.lastFootstep=0;const s=this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y-.1),Math.floor(this.pos.z));Bt.step(f_(s),this.sprinting)}}else this.lastFootstep=.3;this.pos.y<oi-5?(HA(),this.lastCaveDrip+=e,this.lastCaveDrip>5+Math.random()*10&&(VA(),this.lastCaveDrip=0)):i0(),this.nearCampfire?(WA(),this.campfirePopTimer+=e,this.campfirePopTimer>1+Math.random()*3&&(Bt.campfirePop(),this.campfirePopTimer=0)):r0()}updateCraftResult(){const e=a2(this.craftGrid,this.craftGridSize);e?this.craftResult={id:e.result.id,count:e.result.count}:this.craftResult=null}isNearCraftingTable(){const e=Math.floor(this.pos.x),n=Math.floor(this.pos.y),i=Math.floor(this.pos.z);for(let r=-3;r<=3;r++)for(let s=-3;s<=3;s++)for(let o=-3;o<=3;o++)if(this.world.getBlock(e+r,n+s,i+o)===I.CRAFTING_TABLE)return!0;return!1}checkAchievement(e){if(this.achievements.includes(e))return;this.achievements.push(e),Bt.achievement();const n={first_break:"First Break!",first_place:"Builder!",first_kill:"Monster Hunter!",blood_moon:"Blood Moon Survivor!"};this.toast(`🏆 ${n[e]||e}`)}getGroundY(e){const n=Math.floor(e.x),i=Math.floor(e.z);for(let r=hn-1;r>=0;r--)if(this.world.isSolid(n,r,i))return r+1;return 0}toast(e){this.message=e,this.msgTimer=3,this.toastCb&&this.toastCb(e)}emitStats(){if(!this.statsCb)return;this.msgTimer>0&&(this.msgTimer-=.016,this.msgTimer<=0&&(this.message=null));const e=this.world.gen.getBiome(Math.floor(this.pos.x),Math.floor(this.pos.z));this.statsCb({health:Math.ceil(this.health),maxHealth:this.maxHealth,hunger:Math.ceil(this.hunger),maxHunger:this.maxHunger,stamina:Math.ceil(this.stamina),maxStamina:this.maxStamina,thirst:Math.ceil(this.thirst),maxThirst:this.maxThirst,time:this.dayTime,dayCount:this.dayCount,biome:M2[e]||"Unknown",fps:this.fps,selectedSlot:this.selectedSlot,inventory:[...this.inventory],craftGrid:[...this.craftGrid],craftGridSize:this.craftGridSize,craftResult:this.craftResult,inventoryOpen:this.inventoryOpen,position:{x:Math.floor(this.pos.x),y:Math.floor(this.pos.y),z:Math.floor(this.pos.z)},paused:this.paused,dead:this.dead,message:this.message,enemiesNear:this.enemies.filter(n=>n.position.distanceTo(this.pos)<20).length,weather:this.weather,isBloodMoon:this.isBloodMoon,achievements:[...this.achievements]})}}const T2={Plains:"#4a7c3f",Forest:"#2d5a27",Desert:"#c2a858",Tundra:"#a8b8c8",Mountains:"#6b6b6b",Swamp:"#3a5430",Ocean:"#2a5a8a"};function w2(t){return T2[t]??"#3a5a3a"}function A2({stats:t}){const e=Pt.useRef(null),n=Pt.useRef(0);return Pt.useEffect(()=>{const i=e.current;if(!i)return;const r=i.getContext("2d");if(!r)return;const s=64;i.width=s,i.height=s;const o=()=>{const a=s/2;r.fillStyle="#0a0f0a",r.fillRect(0,0,s,s);const l=w2(t.biome),c=r.createImageData(s,s),u=c.data,[d,h,p]=C2(l),_=t.position.x,x=t.position.z;for(let m=0;m<s;m++)for(let f=0;f<s;f++){const g=_+(f-a)*2,v=x+(m-a)*2,y=Math.sqrt((f-a)**2+(m-a)**2),w=.7+R2(g*.05,v*.05)*.3,A=Math.max(0,1-y/a),N=(m*s+f)*4;u[N]=Math.floor(d*w*A),u[N+1]=Math.floor(h*w*A),u[N+2]=Math.floor(p*w*A),u[N+3]=200}r.putImageData(c,0,0),r.strokeStyle="rgba(255,255,255,0.06)",r.lineWidth=.5;for(let m=16;m<s;m+=16)r.beginPath(),r.moveTo(m,0),r.lineTo(m,s),r.stroke(),r.beginPath(),r.moveTo(0,m),r.lineTo(s,m),r.stroke();r.beginPath(),r.arc(a,a,2.5,0,Math.PI*2),r.fillStyle="#ffffff",r.fill(),r.strokeStyle="rgba(0,0,0,0.8)",r.lineWidth=1,r.stroke(),r.save(),r.translate(a,a),r.beginPath(),r.moveTo(0,-5),r.lineTo(0,-2),r.strokeStyle="#10b981",r.lineWidth=2,r.stroke(),r.restore(),r.fillStyle="#f59e0b",r.font="bold 7px monospace",r.textAlign="center",r.fillText("N",a,8),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.5,r.strokeRect(0,0,s,s),n.current=requestAnimationFrame(o)};return o(),()=>cancelAnimationFrame(n.current)},[t]),U.jsx("div",{className:"overflow-hidden rounded-md border border-white/10 bg-black/60 backdrop-blur-sm",children:U.jsx("canvas",{ref:e,className:"block",style:{imageRendering:"pixelated",width:"112px",height:"112px"}})})}function R2(t,e){const n=Math.sin(t*12.9898+e*78.233)*43758.5453;return n-Math.floor(n)}function C2(t){const e=t.replace("#","");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function b2({stats:t}){return U.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-rose-950/80 backdrop-blur-md",children:U.jsxs("div",{className:"flex max-w-sm flex-col items-center gap-6 rounded-xl border border-rose-500/20 bg-neutral-900/90 p-10 text-center shadow-2xl",children:[U.jsx("svg",{className:"h-16 w-16 text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]",viewBox:"0 0 24 24",fill:"currentColor",children:U.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12c0 3.07 1.39 5.81 3.57 7.63L7 22h2v-2h2v2h2v-2h2v2h1.43l1.43-2.37A9.97 9.97 0 0022 12c0-5.52-4.48-10-10-10zm-4 12a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4zm-4 3c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"})}),U.jsx("h2",{className:"font-mono text-4xl font-black tracking-widest text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]",children:"YOU DIED"}),U.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border border-white/10 bg-black/40 px-6 py-4",children:[U.jsxs("div",{className:"flex items-center justify-between gap-6 font-mono text-sm",children:[U.jsx("span",{className:"text-white/50",children:"Survived"}),U.jsxs("span",{className:"font-semibold text-amber-300",children:[t.dayCount," ",t.dayCount===1?"day":"days"]})]}),U.jsxs("div",{className:"flex items-center justify-between gap-6 font-mono text-sm",children:[U.jsx("span",{className:"text-white/50",children:"Biome"}),U.jsx("span",{className:"font-semibold text-emerald-300",children:t.biome})]}),U.jsxs("div",{className:"flex items-center justify-between gap-6 font-mono text-sm",children:[U.jsx("span",{className:"text-white/50",children:"Position"}),U.jsxs("span",{className:"font-semibold text-white/70",children:[t.position.x.toFixed(0),", ",t.position.z.toFixed(0)]})]})]}),U.jsxs("p",{className:"font-mono text-xs text-white/40",children:["Press"," ",U.jsx("kbd",{className:"rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs font-bold text-white/70",children:"R"})," ","to respawn"]})]})})}function L2({stats:t}){const[e,n]=Pt.useState(null),i=t.inventory.slice(0,9),r=t.inventory.slice(9,36),s=t.craftGridSize,o=(a,l)=>{n(a?{id:a.id,rect:l.currentTarget.getBoundingClientRect()}:null)};return U.jsxs("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm",children:[U.jsxs("div",{className:"flex flex-col gap-4 rounded-xl border border-white/10 bg-neutral-900/95 p-6 shadow-2xl",children:[U.jsx("h2",{className:"text-center font-mono text-lg font-bold tracking-wider text-emerald-300",children:"INVENTORY"}),U.jsxs("div",{className:"flex gap-6",children:[U.jsxs("div",{className:"flex flex-col gap-1",children:[U.jsx("div",{className:"mb-1 flex gap-1 border-b border-white/10 pb-1",children:i.map((a,l)=>U.jsx(_l,{slot:a,index:l,onHover:o,selected:l===t.selectedSlot},`h${l}`))}),U.jsx("div",{className:"flex flex-col gap-1",children:Array.from({length:3},(a,l)=>U.jsx("div",{className:"flex gap-1",children:r.slice(l*9,l*9+9).map((c,u)=>U.jsx(_l,{slot:c,index:l*9+u+9,onHover:o},`m${l*9+u}`))},l))})]}),U.jsxs("div",{className:"flex flex-col items-center gap-2",children:[U.jsx("span",{className:"font-mono text-[10px] tracking-widest text-white/50",children:"CRAFTING"}),U.jsx("div",{className:"flex flex-col gap-1",children:Array.from({length:s},(a,l)=>U.jsx("div",{className:"flex gap-1",children:t.craftGrid.slice(l*s,l*s+s).map((c,u)=>U.jsx(_l,{slot:c,index:l*s+u,onHover:o,isCraft:!0},`c${l*s+u}`))},l))}),U.jsx("svg",{className:"h-4 w-4 text-white/30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:U.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),U.jsx(_l,{slot:t.craftResult,index:0,onHover:o,isResult:!0})]})]}),U.jsxs("div",{className:"mt-1 text-center font-mono text-[10px] text-white/40",children:["Pos: ",t.position.x.toFixed(0),", ",t.position.y.toFixed(0),", ",t.position.z.toFixed(0)," — Press E to close"]})]}),e&&(()=>{const a=Nn(e.id);return a?U.jsxs("div",{className:"pointer-events-none fixed z-50 rounded-md border border-white/15 bg-neutral-800/95 px-3 py-2 shadow-xl backdrop-blur-sm",style:{left:e.rect.right+8,top:e.rect.top},children:[U.jsx("p",{className:"font-mono text-sm font-bold text-white",children:a.name}),a.tool&&U.jsxs("p",{className:"font-mono text-[10px] text-amber-300",children:[a.tool," — ",a.tier," tier"]}),a.attack&&U.jsxs("p",{className:"font-mono text-[10px] text-rose-300",children:["⚔ Attack: ",a.attack]}),a.miningSpeed&&U.jsxs("p",{className:"font-mono text-[10px] text-emerald-300",children:["⛏ Speed: ",a.miningSpeed,"×"]}),a.durability&&U.jsxs("p",{className:"font-mono text-[10px] text-white/50",children:["Durability: ",a.durability]}),a.food&&U.jsxs("p",{className:"font-mono text-[10px] text-green-300",children:["🍗 Hunger: +",a.food.hunger,a.food.thirst?` Thirst: +${a.food.thirst}`:""]}),U.jsxs("p",{className:"mt-1 font-mono text-[9px] text-white/30",children:["Stack: ",a.stackSize]})]}):null})()]})}function _l({slot:t,index:e,onHover:n,selected:i,isCraft:r,isResult:s}){const o=t?Nn(t.id):void 0;return U.jsx("div",{onMouseEnter:a=>n(t,a),onMouseLeave:()=>n(null,null),className:`relative flex h-11 w-11 items-center justify-center rounded border-2 transition-all ${i?"border-white bg-white/20":s?"border-emerald-500/40 bg-emerald-950/30":r?"border-amber-500/20 bg-amber-950/20":"border-white/10 bg-black/30"} hover:border-white/40`,children:t&&o?U.jsxs("div",{className:"flex flex-col items-center",children:[U.jsx("div",{className:"h-7 w-7 rounded-sm",style:{backgroundColor:o.color||"#555"}}),t.count>1&&U.jsx("span",{className:"absolute bottom-0 right-0.5 font-mono text-[9px] font-bold text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]",children:t.count}),t.durability!==void 0&&o.durability&&U.jsx("div",{className:"absolute bottom-0 left-0.5 right-0.5 h-0.5 overflow-hidden rounded-full bg-black/50",children:U.jsx("div",{className:"h-full bg-emerald-400",style:{width:`${t.durability/o.durability*100}%`}})})]}):null})}function P2({stats:t,toasts:e,onStart:n}){var s;const i=Pt.useMemo(()=>{const o=Math.floor(t.time*24),a=Math.floor((t.time*24-o)*60);return`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`},[t.time]),r=t.time>.55||t.time<.1;return t.dead?U.jsx(b2,{stats:t}):t.inventoryOpen?U.jsx(L2,{stats:t}):U.jsxs(U.Fragment,{children:[!t.paused&&U.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",children:U.jsxs("div",{className:"relative h-5 w-5",children:[U.jsx("div",{className:"absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/80 shadow-[0_0_3px_rgba(0,0,0,0.9)]"}),U.jsx("div",{className:"absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-white/80 shadow-[0_0_3px_rgba(0,0,0,0.9)]"})]})}),U.jsxs("div",{className:"pointer-events-none absolute left-3 top-3 z-10 flex flex-col gap-1.5",children:[U.jsx(xl,{icon:"❤",color:"#ef4444",value:t.health,max:t.maxHealth,label:"HP"}),U.jsx(xl,{icon:"🍖",color:"#f59e0b",value:t.hunger,max:t.maxHunger,label:"Hunger"}),U.jsx(xl,{icon:"💧",color:"#3b82f6",value:t.thirst,max:t.maxThirst,label:"Thirst"}),U.jsx(xl,{icon:"⚡",color:"#10b981",value:t.stamina,max:t.maxStamina,label:"Stamina"}),U.jsxs("div",{className:"flex items-center gap-2 rounded bg-black/60 px-2 py-1 backdrop-blur-sm",children:[U.jsxs("span",{className:"font-mono text-[10px] text-white/70",children:[t.weather==="rain"?"🌧":t.weather==="snow"?"❄":"☀"," ",t.weather]}),t.isBloodMoon&&U.jsx("span",{className:"animate-pulse text-xs text-red-400",children:"🩸 BLOOD MOON"})]})]}),U.jsx("div",{className:"pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2",children:U.jsxs("div",{className:"flex items-center gap-3 rounded-md border border-white/10 bg-black/60 px-4 py-1.5 font-mono text-xs backdrop-blur-sm",children:[U.jsx("span",{className:r?"text-indigo-300":"text-amber-300",children:r?"🌙":"☀"}),U.jsxs("span",{className:"text-white/80",children:["Day ",t.dayCount]}),U.jsx("span",{className:"text-white/50",children:"•"}),U.jsx("span",{className:r?"text-indigo-300":"text-amber-300",children:i})]})}),U.jsxs("div",{className:"pointer-events-none absolute right-3 top-3 z-10 flex flex-col items-end gap-2",children:[U.jsxs("div",{className:"flex flex-col gap-1 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-xs backdrop-blur-sm",children:[U.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[U.jsx("span",{className:"text-white/50",children:"FPS"}),U.jsx("span",{className:"tabular-nums font-semibold",children:t.fps})]}),U.jsxs("div",{className:"flex items-center gap-2 text-white/80",children:[U.jsx("span",{children:"💀"}),U.jsx("span",{className:"text-white/50",children:"Nearby"}),U.jsx("span",{className:"tabular-nums font-semibold text-rose-400",children:t.enemiesNear})]})]}),U.jsx(A2,{stats:t})]}),U.jsx("div",{className:"pointer-events-none absolute right-3 top-56 z-10 flex flex-col items-end gap-2",children:e.map(o=>U.jsx(D2,{toast:o},o.id))}),U.jsx("div",{className:"pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2",children:U.jsx("div",{className:"flex gap-1 rounded-lg border border-white/10 bg-black/60 p-1.5 backdrop-blur-sm",children:t.inventory.slice(0,9).map((o,a)=>{const l=a===t.selectedSlot,c=o?Nn(o.id):void 0;return U.jsxs("div",{className:`relative flex h-12 w-12 items-center justify-center rounded border-2 transition-all ${l?"border-white bg-white/20 scale-110 shadow-[0_0_8px_rgba(255,255,255,0.3)]":"border-white/15 bg-black/30"}`,children:[o&&c?U.jsx("div",{className:"h-8 w-8 rounded-sm",style:{backgroundColor:c.color||"#555"},title:c.name}):null,o&&o.count>1&&U.jsx("span",{className:"absolute bottom-0 right-0.5 font-mono text-[10px] font-bold text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]",children:o.count}),o&&o.durability!==void 0&&(c==null?void 0:c.durability)&&U.jsx("div",{className:"absolute bottom-0 left-0.5 right-0.5 h-0.5 overflow-hidden rounded-full bg-black/50",children:U.jsx("div",{className:"h-full bg-emerald-400 transition-all",style:{width:`${o.durability/c.durability*100}%`}})}),U.jsx("span",{className:"absolute left-0.5 top-0 font-mono text-[8px] font-bold text-white/40",children:a+1})]},a)})})}),t.inventory[t.selectedSlot]&&U.jsxs("div",{className:"pointer-events-none absolute bottom-3 right-3 z-10 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-xs text-white/80 backdrop-blur-sm",children:[U.jsx("span",{className:"text-white/50",children:"Equipped:"})," ",U.jsx("span",{className:"font-semibold text-emerald-300",children:((s=Nn(t.inventory[t.selectedSlot].id))==null?void 0:s.name)??"Unknown"})]}),t.paused&&U.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:U.jsxs("div",{className:"flex max-w-sm flex-col items-center gap-5 rounded-lg border border-white/10 bg-neutral-900/90 p-8 text-center text-white shadow-2xl",children:[U.jsx("h2",{className:"font-mono text-2xl font-bold tracking-wider text-emerald-300",children:"PAUSED"}),U.jsx("p",{className:"text-xs text-white/60",children:"Click to resume"}),U.jsx("button",{onClick:n,className:"rounded-md bg-emerald-500 px-6 py-2 font-mono font-semibold text-neutral-900 transition-colors hover:bg-emerald-400",children:"RESUME"})]})}),t.message&&!t.paused&&U.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/3 z-10 -translate-x-1/2",children:U.jsx("p",{className:"animate-pulse font-mono text-sm text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",children:t.message})})]})}function xl({icon:t,color:e,value:n,max:i,label:r}){const s=Math.max(0,Math.min(100,n/i*100)),o=s<20;return U.jsxs("div",{className:`flex items-center gap-2 rounded bg-black/60 px-2 py-1 backdrop-blur-sm ${o?"animate-pulse":""}`,children:[U.jsx("span",{className:"text-xs",children:t}),U.jsxs("div",{className:"flex flex-col gap-0.5",children:[U.jsx("div",{className:"h-1.5 w-24 overflow-hidden rounded-full bg-white/10 sm:w-28",children:U.jsx("div",{className:"h-full rounded-full transition-all duration-300",style:{width:`${s}%`,backgroundColor:e}})}),U.jsxs("span",{className:"font-mono text-[9px] text-white/50",children:[r," ",Math.round(n),"/",i]})]})]})}function D2({toast:t}){const e=t.kind==="danger"?"border-rose-500/40 bg-rose-950/80 text-rose-100":t.kind==="success"?"border-emerald-500/40 bg-emerald-950/80 text-emerald-100":"border-white/10 bg-black/70 text-white";return U.jsxs("div",{className:`flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs shadow-lg backdrop-blur-sm transition-all animate-in slide-in-from-right-2 ${e}`,children:[U.jsx("span",{children:t.kind==="danger"?"⚠":t.kind==="success"?"✨":"ℹ"}),U.jsx("span",{children:t.text})]})}function N2({onStart:t}){const e=Pt.useRef(null);return Pt.useEffect(()=>{const n=e.current;if(!n)return;const i=n.getContext("2d"),r=window.devicePixelRatio||1,s=()=>{n.width=n.offsetWidth*r,n.height=n.offsetHeight*r};s(),window.addEventListener("resize",s);const o=[];for(let u=0;u<60;u++)o.push({x:Math.random()*n.width,y:Math.random()*n.height,s:1.5+Math.random()*3,sp:8+Math.random()*24,o:.15+Math.random()*.35});let a=0,l=performance.now();const c=u=>{const d=Math.min(.1,(u-l)/1e3);l=u;const h=i.createLinearGradient(0,0,0,n.height);h.addColorStop(0,"#0a0f1a"),h.addColorStop(.5,"#111827"),h.addColorStop(1,"#030712"),i.fillStyle=h,i.fillRect(0,0,n.width,n.height);for(const p of o)p.y+=p.sp*d*r,p.y-p.s>n.height&&(p.y=-p.s*2,p.x=Math.random()*n.width),i.beginPath(),i.arc(p.x,p.y,p.s*r,0,Math.PI*2),i.fillStyle=`rgba(16,185,129,${p.o})`,i.fill();a=requestAnimationFrame(c)};return a=requestAnimationFrame(c),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",s)}},[]),U.jsxs("div",{className:"relative w-full h-full overflow-hidden",children:[U.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full"}),U.jsxs("div",{className:"relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-white",children:[U.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[U.jsxs("svg",{className:"h-6 w-6 text-emerald-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),U.jsx("path",{d:"M2 17l10 5 10-5"}),U.jsx("path",{d:"M2 12l10 5 10-5"})]}),U.jsx("span",{className:"font-mono text-xs font-semibold tracking-[0.3em] text-white/50",children:"A VOXEL SURVIVAL GAME"}),U.jsxs("svg",{className:"h-6 w-6 text-emerald-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),U.jsx("path",{d:"M2 17l10 5 10-5"}),U.jsx("path",{d:"M2 12l10 5 10-5"})]})]}),U.jsxs("h1",{className:"mb-2 text-center font-mono text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl",children:["VOXEL",U.jsx("span",{className:"text-emerald-400",children:" SURVIVAL"})]}),U.jsx("p",{className:"mb-10 text-center font-mono text-sm tracking-widest text-white/60 sm:text-base",children:"Explore. Build. Survive."}),U.jsxs("button",{onClick:t,className:"group mb-12 inline-flex items-center gap-3 rounded-lg bg-emerald-500 px-8 py-4 font-mono text-lg font-bold tracking-wider text-neutral-900 shadow-[0_4px_0_#047857,0_8px_24px_rgba(16,185,129,0.3)] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_#047857,0_6px_16px_rgba(16,185,129,0.4)] active:translate-y-1 active:shadow-[0_0px_0_#047857]",children:[U.jsxs("svg",{className:"h-5 w-5 transition-transform group-hover:rotate-[-20deg]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:[U.jsx("path",{d:"M14.531 12.469L6.619 20.38a1 1 0 11-1.414-1.414l7.912-7.912"}),U.jsx("path",{d:"M15.686 4.314A12.5 12.5 0 0121.5 2.5s-1.814 5.814-3.814 7.814"})]}),"CLICK TO PLAY"]}),U.jsxs("div",{className:"grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4",children:[U.jsx(Zi,{title:"WASD",desc:"Move"}),U.jsx(Zi,{title:"SPACE",desc:"Jump"}),U.jsx(Zi,{title:"L-Click",desc:"Break"}),U.jsx(Zi,{title:"R-Click",desc:"Place"}),U.jsx(Zi,{title:"1-9",desc:"Hotbar"}),U.jsx(Zi,{title:"E",desc:"Inventory"}),U.jsx(Zi,{title:"SHIFT",desc:"Sprint"}),U.jsx(Zi,{title:"ESC",desc:"Pause"})]})]})]})}function Zi({title:t,desc:e}){return U.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-md border border-white/10 bg-black/40 px-3 py-2.5 text-center backdrop-blur-sm",children:[U.jsx("kbd",{className:"rounded border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-xs font-bold text-emerald-300",children:t}),U.jsx("span",{className:"font-mono text-[10px] text-white/50",children:e})]})}let I2=0;function O2(){const t=Pt.useRef(null),e=Pt.useRef(null),[n,i]=Pt.useState(null),[r,s]=Pt.useState(!1),[o,a]=Pt.useState(!0),[l,c]=Pt.useState([]);Pt.useEffect(()=>{if(!r||!t.current)return;const d=new E2(t.current);e.current=d,d.onStatsChange(p=>i(p)),d.onToast(p=>{const _=++I2;c(x=>[...x.slice(-4),{id:_,text:p,kind:"info",expiresAt:performance.now()+3e3}])}),d.start(),a(!1);const h=setTimeout(()=>{var _,x;const p=(_=t.current)==null?void 0:_.querySelector("canvas");(x=p==null?void 0:p.requestPointerLock)==null||x.call(p)},120);return()=>{clearTimeout(h),d.dispose(),e.current=null}},[r]),Pt.useEffect(()=>{if(l.length===0)return;const d=setInterval(()=>{const h=performance.now();c(p=>p.filter(_=>_.expiresAt>h))},300);return()=>clearInterval(d)},[l.length]);const u=Pt.useCallback(()=>{var h,p;const d=(h=t.current)==null?void 0:h.querySelector("canvas");(p=d==null?void 0:d.requestPointerLock)==null||p.call(d)},[]);return U.jsx("div",{className:"relative w-full h-full overflow-hidden bg-neutral-950",children:r?U.jsxs(U.Fragment,{children:[U.jsx("div",{ref:t,className:"absolute inset-0"}),o&&U.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-neutral-950 text-white",children:U.jsxs("div",{className:"flex flex-col items-center gap-4",children:[U.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-emerald-500/30 border-t-emerald-400"}),U.jsx("p",{className:"font-mono text-sm tracking-wider text-white/70",children:"FORGING WORLD..."})]})}),n&&U.jsx(P2,{stats:n,toasts:l,onStart:u})]}):U.jsx(N2,{onStart:()=>s(!0)})})}function U2(){return U.jsx(O2,{})}qu.createRoot(document.getElementById("root")).render(U.jsx(U_.StrictMode,{children:U.jsx(U2,{})}));
