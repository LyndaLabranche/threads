"use strict";exports.id=1971,exports.ids=[1971],exports.modules={91971:(l,e,r)=>{r.d(e,{j:()=>u});var t=r(10566);let n=l=>"boolean"==typeof l?"".concat(l):0===l?"0":l,s=t.W,u=(l,e)=>r=>{var t;if((null==e?void 0:e.variants)==null)return s(l,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:u,defaultVariants:i}=e,o=Object.keys(u).map(l=>{let e=null==r?void 0:r[l],t=null==i?void 0:i[l];if(null===e)return null;let s=n(e)||n(t);return u[l][s]}),a=r&&Object.entries(r).reduce((l,e)=>{let[r,t]=e;return void 0===t||(l[r]=t),l},{}),d=null==e?void 0:null===(t=e.compoundVariants)||void 0===t?void 0:t.reduce((l,e)=>{let{class:r,className:t,...n}=e;return Object.entries(n).every(l=>{let[e,r]=l;return Array.isArray(r)?r.includes({...i,...a}[e]):({...i,...a})[e]===r})?[...l,r,t]:l},[]);return s(l,o,d,null==r?void 0:r.class,null==r?void 0:r.className)}}};