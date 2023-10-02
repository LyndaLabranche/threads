"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{3388:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return o},NoSSR:function(){return u}}),n(1024),n(955);let r=n(4922);function o(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function u(e){let{children:t}=e;return t}},9381:function(e,t,n){n.d(t,{WV:function(){return a}});var r=n(3428),o=n(955);n(3190);var u=n(7256);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,o.forwardRef)((e,n)=>{let{asChild:a,...l}=e,i=a?u.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(i,(0,r.Z)({},l,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{})},8904:function(e,t,n){n.d(t,{VY:function(){return J},aV:function(){return X},fC:function(){return q},xz:function(){return H}});var r=n(3428),o=n(955),u=n.t(o,2);function a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function l(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,o.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,o.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let u=(0,o.createContext)(r),a=n.length;function l(t){let{scope:n,children:r,...l}=t,i=(null==n?void 0:n[e][a])||u,c=(0,o.useMemo)(()=>l,Object.values(l));return(0,o.createElement)(i.Provider,{value:c},r)}return n=[...n,r],l.displayName=t+"Provider",[l,function(n,l){let i=(null==l?void 0:l[e][a])||u,c=(0,o.useContext)(i);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,o.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}var i=n(2210),c=n(7256);let s=(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{},f=u["useId".toString()]||(()=>void 0),d=0;function m(e){let[t,n]=o.useState(f());return s(()=>{e||n(e=>null!=e?e:String(d++))},[e]),e||(t?`radix-${t}`:"")}var p=n(9381);function v(e){let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}function b({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,u]=function({defaultProp:e,onChange:t}){let n=(0,o.useState)(e),[r]=n,u=(0,o.useRef)(r),a=v(t);return(0,o.useEffect)(()=>{u.current!==r&&(a(r),u.current=r)},[r,u,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:r,i=v(n),c=(0,o.useCallback)(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&i(n)}else u(t)},[a,e,u,i]);return[l,c]}let E=(0,o.createContext)(void 0);function g(e){let t=(0,o.useContext)(E);return e||t||"ltr"}let h="rovingFocusGroup.onEntryFocus",w={bubbles:!1,cancelable:!0},C="RovingFocusGroup",[N,R,_]=function(e){let t=e+"CollectionProvider",[n,r]=l(t),[u,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,u=a(s,n),l=(0,i.e)(t,u.collectionRef);return o.createElement(c.g7,{ref:l},r)}),d=e+"CollectionItemSlot",m="data-radix-collection-item",p=o.forwardRef((e,t)=>{let{scope:n,children:r,...u}=e,l=o.useRef(null),s=(0,i.e)(t,l),f=a(d,n);return o.useEffect(()=>(f.itemMap.set(l,{ref:l,...u}),()=>void f.itemMap.delete(l))),o.createElement(c.g7,{[m]:"",ref:s},r)});return[{Provider:e=>{let{scope:t,children:n}=e,r=o.useRef(null),a=o.useRef(new Map).current;return o.createElement(u,{scope:t,itemMap:a,collectionRef:r},n)},Slot:f,ItemSlot:p},function(t){let n=a(e+"CollectionConsumer",t),r=o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return r},r]}(C),[I,T]=l(C,[_]),[M,S]=I(C),y=(0,o.forwardRef)((e,t)=>(0,o.createElement)(N.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(N.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(A,(0,r.Z)({},e,{ref:t}))))),A=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:u,loop:l=!1,dir:c,currentTabStopId:s,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:d,onEntryFocus:m,...E}=e,C=(0,o.useRef)(null),N=(0,i.e)(t,C),_=g(c),[I=null,T]=b({prop:s,defaultProp:f,onChange:d}),[S,y]=(0,o.useState)(!1),A=v(m),D=R(n),F=(0,o.useRef)(!1),[P,x]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(h,A),()=>e.removeEventListener(h,A)},[A]),(0,o.createElement)(M,{scope:n,orientation:u,dir:_,loop:l,currentTabStopId:I,onItemFocus:(0,o.useCallback)(e=>T(e),[T]),onItemShiftTab:(0,o.useCallback)(()=>y(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>x(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>x(e=>e-1),[])},(0,o.createElement)(p.WV.div,(0,r.Z)({tabIndex:S||0===P?-1:0,"data-orientation":u},E,{ref:N,style:{outline:"none",...e.style},onMouseDown:a(e.onMouseDown,()=>{F.current=!0}),onFocus:a(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!S){let t=new CustomEvent(h,w);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=D().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===I),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);O(o)}}F.current=!1}),onBlur:a(e.onBlur,()=>y(!1))})))}),D=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:l=!1,tabStopId:i,...c}=e,s=m(),f=i||s,d=S("RovingFocusGroupItem",n),v=d.currentTabStopId===f,b=R(n),{onFocusableItemAdd:E,onFocusableItemRemove:g}=d;return(0,o.useEffect)(()=>{if(u)return E(),()=>g()},[u,E,g]),(0,o.createElement)(N.ItemSlot,{scope:n,id:f,focusable:u,active:l},(0,o.createElement)(p.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":d.orientation},c,{ref:t,onMouseDown:a(e.onMouseDown,e=>{u?d.onItemFocus(f):e.preventDefault()}),onFocus:a(e.onFocus,()=>d.onItemFocus(f)),onKeyDown:a(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){d.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return F[o]}(e,d.orientation,d.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=d.loop?(n=u,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):u.slice(o+1)}setTimeout(()=>O(u))}})})))}),F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function O(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}var P=n(3190);let x=e=>{let{present:t,children:n}=e,r=function(e){var t;let[n,r]=(0,o.useState)(),u=(0,o.useRef)({}),a=(0,o.useRef)(e),l=(0,o.useRef)("none"),i=e?"mounted":"unmounted",[c,f]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,o.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},i));return(0,o.useEffect)(()=>{let e=k(u.current);l.current="mounted"===c?e:"none"},[c]),s(()=>{let t=u.current,n=a.current,r=n!==e;if(r){let r=l.current,o=k(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),a.current=e}},[e,f]),s(()=>{if(n){let e=e=>{let t=k(u.current),r=t.includes(e.animationName);e.target===n&&r&&(0,P.flushSync)(()=>f("ANIMATION_END"))},t=e=>{e.target===n&&(l.current=k(u.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:(0,o.useCallback)(e=>{e&&(u.current=getComputedStyle(e)),r(e)},[])}}(t),u="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),a=(0,i.e)(r.ref,u.ref),l="function"==typeof n;return l||r.isPresent?(0,o.cloneElement)(u,{ref:a}):null};function k(e){return(null==e?void 0:e.animationName)||"none"}x.displayName="Presence";let V="Tabs",[L,U]=l(V,[T]),$=T(),[Z,G]=L(V),W=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,onValueChange:a,defaultValue:l,orientation:i="horizontal",dir:c,activationMode:s="automatic",...f}=e,d=g(c),[v,E]=b({prop:u,onChange:a,defaultProp:l});return(0,o.createElement)(Z,{scope:n,baseId:m(),value:v,onValueChange:E,orientation:i,dir:d,activationMode:s},(0,o.createElement)(p.WV.div,(0,r.Z)({dir:d,"data-orientation":i},f,{ref:t})))}),K=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:u=!0,...a}=e,l=G("TabsList",n),i=$(n);return(0,o.createElement)(y,(0,r.Z)({asChild:!0},i,{orientation:l.orientation,dir:l.dir,loop:u}),(0,o.createElement)(p.WV.div,(0,r.Z)({role:"tablist","aria-orientation":l.orientation},a,{ref:t})))}),j=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,disabled:l=!1,...i}=e,c=G("TabsTrigger",n),s=$(n),f=B(c.baseId,u),d=Y(c.baseId,u),m=u===c.value;return(0,o.createElement)(D,(0,r.Z)({asChild:!0},s,{focusable:!l,active:m}),(0,o.createElement)(p.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:f},i,{ref:t,onMouseDown:a(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():c.onValueChange(u)}),onKeyDown:a(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&c.onValueChange(u)}),onFocus:a(e.onFocus,()=>{let e="manual"!==c.activationMode;m||l||!e||c.onValueChange(u)})})))}),z=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,forceMount:a,children:l,...i}=e,c=G("TabsContent",n),s=B(c.baseId,u),f=Y(c.baseId,u),d=u===c.value,m=(0,o.useRef)(d);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(x,{present:a||d},({present:n})=>(0,o.createElement)(p.WV.div,(0,r.Z)({"data-state":d?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":s,hidden:!n,id:f,tabIndex:0},i,{ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0}}),n&&l))});function B(e,t){return`${e}-trigger-${t}`}function Y(e,t){return`${e}-content-${t}`}let q=W,X=K,H=j,J=z}}]);