(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{4363:function(e,t,r){Promise.resolve().then(r.bind(r,7565)),Promise.resolve().then(r.bind(r,2145)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.t.bind(r,3388,23))},7565:function(e,t,r){"use strict";r.r(t);var a=r(6705),n=r(1865),s=r(3023),i=r(459),o=r(8110),l=r(5771),d=r(7431),c=r(1977);r(8877);var u=r(4033),f=r(6669);t.default=function(e){let{userId:t}=e,r=(0,u.useRouter)(),m=(0,u.usePathname)(),b=(0,d.o8)(),x=(0,n.cI)({resolver:(0,o.F)(c.A),defaultValues:{thread:"",accountId:t}}),h=async e=>{await (0,f.gK)({text:e.thread,author:t,communityId:b?b.id:null,path:m}),r.push("/")};return(0,a.jsx)(i.l0,{...x,children:(0,a.jsxs)("form",{onSubmit:x.handleSubmit(h),className:"flex flex-col justify-start gap-10",children:[(0,a.jsx)(i.Wi,{control:x.control,name:"thread",render:e=>{let{field:t}=e;return(0,a.jsxs)(i.xJ,{className:"flex w-full flex-col gap-3",children:[(0,a.jsx)(i.lX,{className:"text-base-semibold text-light-2",children:"Content"}),(0,a.jsx)(i.NI,{className:"no-focus border border-dark-4 bg-dark-3 text-light-1",children:(0,a.jsx)(l.g,{rows:15,...t})}),(0,a.jsx)(i.zG,{})]})}}),(0,a.jsx)(s.z,{type:"submit",className:"bg-primary-500",children:"Post Thread"})]})})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(6705),n=r(955),s=r(7256),i=r(6061),o=r(9311);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:n,size:i,className:r})),ref:t,...c})});d.displayName="Button"},459:function(e,t,r){"use strict";r.d(t,{l0:function(){return f},NI:function(){return p},Wi:function(){return b},xJ:function(){return g},lX:function(){return v},zG:function(){return y}});var a=r(6705),n=r(955),s=r(7256),i=r(1865),o=r(9311),l=r(6743),d=r(6061);let c=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.f,{ref:t,className:(0,o.cn)(c(),r),...n})});u.displayName=l.f.displayName;let f=i.RV,m=n.createContext({}),b=e=>{let{...t}=e;return(0,a.jsx)(m.Provider,{value:{name:t.name},children:(0,a.jsx)(i.Qr,{...t})})},x=()=>{let e=n.useContext(m),t=n.useContext(h),{getFieldState:r,formState:a}=(0,i.Gc)(),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},h=n.createContext({}),g=n.forwardRef((e,t)=>{let{className:r,...s}=e,i=n.useId();return(0,a.jsx)(h.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...s})})});g.displayName="FormItem";let v=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:s,formItemId:i}=x();return(0,a.jsx)(u,{ref:t,className:(0,o.cn)(s&&"text-red-500 dark:text-red-900",r),htmlFor:i,...n})});v.displayName="FormLabel";let p=n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:i,formDescriptionId:o,formMessageId:l}=x();return(0,a.jsx)(s.g7,{ref:t,id:i,"aria-describedby":n?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!n,...r})});p.displayName="FormControl";let k=n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:s}=x();return(0,a.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-sm text-slate-500 dark:text-slate-400",r),...n})});k.displayName="FormDescription";let y=n.forwardRef((e,t)=>{let{className:r,children:n,...s}=e,{error:i,formMessageId:l}=x(),d=i?String(null==i?void 0:i.message):n;return d?(0,a.jsx)("p",{ref:t,id:l,className:(0,o.cn)("text-sm font-medium text-red-500 dark:text-red-900",r),...s,children:d}):null});y.displayName="FormMessage"},5771:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var a=r(6705),n=r(955),s=r(9311);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",r),ref:t,...n})});i.displayName="Textarea"},6669:function(e,t,r){"use strict";r.d(t,{Ho:function(){return s},gK:function(){return n}}),r(2655),r(470);var a=r(1162);(0,a.$)("38d2d7a0a35de985e321f749280c69191b8c2814");var n=(0,a.$)("78e111e9dc41efac987bd5e8ac51b19043c9068a");(0,a.$)("b5742e553fecb2b810f82b514ddc398a21ae6ac0"),(0,a.$)("39784508112122b2d6fe16b8d277c4cb71a3d20d");var s=(0,a.$)("e5fb2a651b5b7a205c654d5be1a786f5e317b9d1")},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return s},dY:function(){return i}});var a=r(7042),n=r(3986);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,a.W)(t))}function i(e){return/^data:image\/(png|jpe?g|gif|webp);base64,/.test(e)}},1977:function(e,t,r){"use strict";r.d(t,{A:function(){return n},C:function(){return s}});var a=r(4578);let n=a.Ry({thread:a.Z_().nonempty().min(3,{message:"Minimum 3 characters"}),accountId:a.Z_()}),s=a.Ry({thread:a.Z_().nonempty().min(3,{message:"Minimum 3 characters"})})},8877:function(){}},function(e){e.O(0,[583,600,87,404,121,26,744],function(){return e(e.s=4363)}),_N_E=e.O()}]);