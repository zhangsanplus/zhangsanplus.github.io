import{m as c,j as p,k as f,w as m}from"./index-BEcxWQo9.js";import{v as r,c as o,F as y,y as g,G as d,z as w,J as _,I as v,u as a,S,q as b}from"./vue-Bp-VKo72.js";const C=Symbol("rowContextKey"),R=["start","center","end","space-around","space-between","space-evenly"],j=["top","middle","bottom"],x=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:R,default:"start"},align:{type:String,values:j}}),h=r({name:"ElRow"}),$=r({...h,props:x,setup(n){const t=n,e=f("row"),l=o(()=>t.gutter);b(C,{gutter:l});const i=o(()=>{const s={};return t.gutter&&(s.marginRight=s.marginLeft="-".concat(t.gutter/2,"px")),s}),u=o(()=>[e.b(),e.is("justify-".concat(t.justify),t.justify!=="start"),e.is("align-".concat(t.align),!!t.align)]);return(s,z)=>(g(),y(S(s.tag),{class:v(a(u)),style:_(a(i))},{default:d(()=>[w(s.$slots,"default")]),_:3},8,["class","style"]))}});var k=p($,[["__file","row.vue"]]);const B=m(k);export{B as E,C as r};
