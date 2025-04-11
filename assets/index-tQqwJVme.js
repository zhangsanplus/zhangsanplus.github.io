import{_ as k}from"./index.vue_vue_type_style_index_0_lang-BwiYcMwn.js";import{_ as V}from"./index-CWNvzK1C.js";import{m as w,af as x,ad as C,ak as E,Q as F,j as U,k as B,o as $,c as A,w as L,aF as N,e as j,aG as I}from"./index-BEcxWQo9.js";import{v as _,r as S,c as g,a as P,w as R,x as b,y as d,F as h,z as X,J as z,u as l,G as v,S as O,I as D,L as y,O as G,e as M,j as T,k as q}from"./vue-Bp-VKo72.js";import"./raf-CoFzbMNT.js";import"./isEqual-DDMOfOHw.js";import"./index-CePrSitK.js";import"./index-jgl_rwKe.js";import"./index-DXyvSvzW.js";import"./index-CwX5VMi2.js";import"./dayjs.min-Cjuo-oDZ.js";import"./index-C5DVn9In.js";import"./index-DQNWtGWz.js";const J=w({size:{type:[Number,String],values:F,default:"",validator:t=>E(t)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:C},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:x(String),default:"cover"}}),Q={error:t=>t instanceof Event},H=_({name:"ElAvatar"}),K=_({...H,props:J,emits:Q,setup(t,{emit:c}){const r=t,s=B("avatar"),i=S(!1),u=g(()=>{const{size:e,icon:p,shape:m}=r,f=[s.b()];return P(e)&&f.push(s.m(e)),p&&f.push(s.m("icon")),m&&f.push(s.m(m)),f}),a=g(()=>{const{size:e}=r;return E(e)?s.cssVarBlock({size:$(e)||""}):void 0}),o=g(()=>({objectFit:r.fit}));R(()=>r.src,()=>i.value=!1);function n(e){i.value=!0,c("error",e)}return(e,p)=>(d(),b("span",{class:D(l(u)),style:z(l(a))},[(e.src||e.srcSet)&&!i.value?(d(),b("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:z(l(o)),onError:n},null,44,["src","alt","srcset"])):e.icon?(d(),h(l(A),{key:1},{default:v(()=>[(d(),h(O(e.icon)))]),_:1})):X(e.$slots,"default",{key:2})],6))}});var W=U(K,[["__file","avatar.vue"]]);const Y=L(W),Z=_({name:"XUpload",props:{modelValue:{type:[File,Array],default:()=>null},multiple:{type:Boolean,default:!1},accept:{type:String,default:"*/*"},maxSize:{type:Number,default:10*1024*1024},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","error","change"],setup(t,{emit:c,slots:r}){const{open:s,onChange:i}=N({multiple:t.multiple,accept:t.accept}),u=a=>{if(a.size>t.maxSize)return{type:"size",file:a,message:"".concat(a.name," 超过").concat(t.maxSize/1024/1024,"MB限制")};const o=a.type.match(new RegExp(t.accept.replace("*",".*")));return t.accept!=="*/*"&&!o?{type:"type",file:a,message:"".concat(a.name," 格式不符合要求 (").concat(t.accept,")")}:null};return i(a=>{if(!a)return;const o=[],n=[];if(Array.from(a).forEach(e=>{const p=u(e);p?o.push(p):n.push(e)}),o.length>0&&c("error",o),n.length>0){const e=t.multiple?n:n[0];c("update:modelValue",e),c("change",e)}}),()=>{var a;return y("div",{class:["x-upload",{"is-disabled":t.disabled}],onClick:()=>!t.disabled&&s()},[((a=r.default)==null?void 0:a.call(r))||"点击上传"])}}}),de=_({__name:"index",setup(t){const c=j(),r=S(I),s=S({username:"",role:1,avatar:null}),i=G([{label:"头像",prop:"avatar",type:"custom"},{label:"姓名",prop:"username",type:"input"},{label:"角色",prop:"role",type:"select",props:{options:[{label:"管理员",value:1},{label:"普通用户",value:2}]}}]);return M(()=>{s.value.avatar&&(r.value=URL.createObjectURL(s.value.avatar))}),T(()=>{const u=c.userinfo;s.value.username=u.username,s.value.role=u.role}),(u,a)=>{const o=Y,n=Z,e=V,p=k;return d(),h(p,{title:"个人信息",full:""},{default:v(()=>[y(e,{modelValue:l(s),"onUpdate:modelValue":a[1]||(a[1]=m=>q(s)?s.value=m:null),columns:l(i),"col-props":{span:24},"label-width":"80px","label-suffix":"：",style:{"max-width":"460px",margin:"50px 0"}},{avatar:v(()=>[y(n,{modelValue:l(s).avatar,"onUpdate:modelValue":a[0]||(a[0]=m=>l(s).avatar=m),accept:"image/*",style:{cursor:"pointer"}},{default:v(()=>[y(o,{size:60,src:l(r)},null,8,["src"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue","columns"])]),_:1})}}});export{de as default};
