import{a as q,c as h,g as ke,s as U,r as A,w as Y,p as be,n as T,v as Te,as as Ye,a0 as Xe,j as Ge,C as Je,x as S,y as m,R as g,M as Q,B as k,I as b,u as t,z as j,F as I,G as B,S as _,A as xe,L as Ze,a2 as qe,N as Qe,_ as W,J as we,d as Ce}from"./vue-Bp-VKo72.js";import{$ as Ve,ak as Se,m as et,aN as oe,aJ as tt,ae as ot,af as ee,ad as Ee,an as at,by as nt,aB as te,j as st,k as Ie,R as lt,aY as it,aO as rt,b4 as ut,b5 as ct,bz as dt,bA as pt,aW as ft,aC as vt,c as L,aM as mt,aX as ze,ag as Ne,am as Pe,w as ht}from"./index-BEcxWQo9.js";const gt=()=>Ve&&/firefox/i.test(window.navigator.userAgent);let C;const yt={height:"0",visibility:"hidden",overflow:gt()?"":"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function xt(a){const u=window.getComputedStyle(a),s=u.getPropertyValue("box-sizing"),o=Number.parseFloat(u.getPropertyValue("padding-bottom"))+Number.parseFloat(u.getPropertyValue("padding-top")),i=Number.parseFloat(u.getPropertyValue("border-bottom-width"))+Number.parseFloat(u.getPropertyValue("border-top-width"));return{contextStyle:bt.map(r=>[r,u.getPropertyValue(r)]),paddingSize:o,borderSize:i,boxSizing:s}}function Fe(a,u=1,s){var o;C||(C=document.createElement("textarea"),document.body.appendChild(C));const{paddingSize:i,borderSize:p,boxSizing:r,contextStyle:l}=xt(a);l.forEach(([y,v])=>C==null?void 0:C.style.setProperty(y,v)),Object.entries(yt).forEach(([y,v])=>C==null?void 0:C.style.setProperty(y,v,"important")),C.value=a.value||a.placeholder||"";let c=C.scrollHeight;const x={};r==="border-box"?c=c+p:r==="content-box"&&(c=c-i),C.value="";const f=C.scrollHeight-i;if(Se(u)){let y=f*u;r==="border-box"&&(y=y+i+p),c=Math.max(y,c),x.minHeight="".concat(y,"px")}if(Se(s)){let y=f*s;r==="border-box"&&(y=y+i+p),c=Math.min(y,c)}return x.height="".concat(c,"px"),(o=C.parentNode)==null||o.removeChild(C),C=void 0,x}const wt=et({id:{type:String,default:void 0},size:at,disabled:Boolean,modelValue:{type:ee([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ee([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ee([Object,Array,String]),default:()=>ot({})},autofocus:Boolean,rows:{type:Number,default:2},...tt(["ariaLabel"])}),Ct={[oe]:a=>q(a),input:a=>q(a),change:a=>q(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},St=["class","style"],Et=/^on[A-Z]/,It=(a={})=>{const{excludeListeners:u=!1,excludeKeys:s}=a,o=h(()=>((s==null?void 0:s.value)||[]).concat(St)),i=ke();return i?h(()=>{var p;return nt(Object.entries((p=i.proxy)==null?void 0:p.$attrs).filter(([r])=>!o.value.includes(r)&&!(u&&Et.test(r))))}):h(()=>({}))};function zt(a,{beforeFocus:u,afterFocus:s,beforeBlur:o,afterBlur:i}={}){const p=ke(),{emit:r}=p,l=U(),c=A(!1),x=v=>{be(u)&&u(v)||c.value||(c.value=!0,r("focus",v),s==null||s())},f=v=>{var w;be(o)&&o(v)||v.relatedTarget&&((w=l.value)!=null&&w.contains(v.relatedTarget))||(c.value=!1,r("blur",v),i==null||i())},y=()=>{var v,w;(v=l.value)!=null&&v.contains(document.activeElement)&&l.value!==document.activeElement||(w=a.value)==null||w.focus()};return Y(l,v=>{v&&v.setAttribute("tabindex","-1")}),te(l,"focus",x,!0),te(l,"blur",f,!0),te(l,"click",y,!0),{isFocused:c,wrapperRef:l,handleFocus:x,handleBlur:f}}const Nt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a);function Pt({afterComposition:a,emit:u}){const s=A(!1),o=l=>{u==null||u("compositionstart",l),s.value=!0},i=l=>{var c;u==null||u("compositionupdate",l);const x=(c=l.target)==null?void 0:c.value,f=x[x.length-1]||"";s.value=!Nt(f)},p=l=>{u==null||u("compositionend",l),s.value&&(s.value=!1,T(()=>a(l)))};return{isComposing:s,handleComposition:l=>{l.type==="compositionend"?p(l):i(l)},handleCompositionStart:o,handleCompositionUpdate:i,handleCompositionEnd:p}}function Ft(a){let u;function s(){if(a.value==null)return;const{selectionStart:i,selectionEnd:p,value:r}=a.value;if(i==null||p==null)return;const l=r.slice(0,Math.max(0,i)),c=r.slice(Math.max(0,p));u={selectionStart:i,selectionEnd:p,value:r,beforeTxt:l,afterTxt:c}}function o(){if(a.value==null||u==null)return;const{value:i}=a.value,{beforeTxt:p,afterTxt:r,selectionStart:l}=u;if(p==null||r==null||l==null)return;let c=i.length;if(i.endsWith(r))c=i.length-r.length;else if(i.startsWith(p))c=p.length;else{const x=p[l-1],f=i.indexOf(x,l-1);f!==-1&&(c=f+1)}a.value.setSelectionRange(c,c)}return[s,o]}const kt="ElInput",Tt=Te({name:kt,inheritAttrs:!1}),Vt=Te({...Tt,props:wt,emits:Ct,setup(a,{expose:u,emit:s}){const o=a,i=Ye(),p=It(),r=Xe(),l=h(()=>[o.type==="textarea"?ae.b():n.b(),n.m(v.value),n.is("disabled",w.value),n.is("exceed",Oe.value),{[n.b("group")]:r.prepend||r.append,[n.m("prefix")]:r.prefix||o.prefixIcon,[n.m("suffix")]:r.suffix||o.suffixIcon||o.clearable||o.showPassword,[n.bm("suffix","password-clear")]:K.value&&G.value,[n.b("hidden")]:o.type==="hidden"},i.class]),c=h(()=>[n.e("wrapper"),n.is("focus",D.value)]),{form:x,formItem:f}=rt(),{inputId:y}=ut(o,{formItemContext:f}),v=lt(),w=it(),n=Ie("input"),ae=Ie("textarea"),O=U(),E=U(),X=A(!1),$=A(!1),ne=A(),H=U(o.inputStyle),N=h(()=>O.value||E.value),{wrapperRef:Me,isFocused:D,handleFocus:Re,handleBlur:Be}=zt(N,{beforeFocus(){return w.value},afterBlur(){var e;o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"blur").catch(d=>Pe()))}}),se=h(()=>{var e;return(e=x==null?void 0:x.statusIcon)!=null?e:!1}),V=h(()=>(f==null?void 0:f.validateState)||""),le=h(()=>V.value&&ct[V.value]),Le=h(()=>$.value?dt:pt),Ae=h(()=>[i.style]),ie=h(()=>[o.inputStyle,H.value,{resize:o.resize}]),z=h(()=>ft(o.modelValue)?"":String(o.modelValue)),K=h(()=>o.clearable&&!w.value&&!o.readonly&&!!z.value&&(D.value||X.value)),G=h(()=>o.showPassword&&!w.value&&!!z.value&&(!!z.value||D.value)),P=h(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!w.value&&!o.readonly&&!o.showPassword),J=h(()=>z.value.length),Oe=h(()=>!!P.value&&J.value>Number(o.maxlength)),$e=h(()=>!!r.suffix||!!o.suffixIcon||K.value||o.showPassword||P.value||!!V.value&&se.value),[re,ue]=Ft(O);vt(E,e=>{if(He(),!P.value||o.resize!=="both")return;const d=e[0],{width:F}=d.contentRect;ne.value={right:"calc(100% - ".concat(F+15+6,"px)")}});const M=()=>{const{type:e,autosize:d}=o;if(!(!Ve||e!=="textarea"||!E.value))if(d){const F=Ce(d)?d.minRows:void 0,ge=Ce(d)?d.maxRows:void 0,ye=Fe(E.value,F,ge);H.value={overflowY:"hidden",...ye},T(()=>{E.value.offsetHeight,H.value=ye})}else H.value={minHeight:Fe(E.value).minHeight}},He=(e=>{let d=!1;return()=>{var F;if(d||!o.autosize)return;((F=E.value)==null?void 0:F.offsetParent)===null||(e(),d=!0)}})(M),R=()=>{const e=N.value,d=o.formatter?o.formatter(z.value):z.value;!e||e.value===d||(e.value=d)},Z=async e=>{re();let{value:d}=e.target;if(o.formatter&&o.parser&&(d=o.parser(d)),!de.value){if(d===z.value){R();return}s(oe,d),s(ze,d),await T(),R(),ue()}},ce=e=>{let{value:d}=e.target;o.formatter&&o.parser&&(d=o.parser(d)),s(Ne,d)},{isComposing:de,handleCompositionStart:pe,handleCompositionUpdate:fe,handleCompositionEnd:ve}=Pt({emit:s,afterComposition:Z}),De=()=>{re(),$.value=!$.value,setTimeout(ue)},Ke=()=>{var e;return(e=N.value)==null?void 0:e.focus()},je=()=>{var e;return(e=N.value)==null?void 0:e.blur()},_e=e=>{X.value=!1,s("mouseleave",e)},We=e=>{X.value=!0,s("mouseenter",e)},me=e=>{s("keydown",e)},Ue=()=>{var e;(e=N.value)==null||e.select()},he=()=>{s(oe,""),s(Ne,""),s("clear"),s(ze,"")};return Y(()=>o.modelValue,()=>{var e;T(()=>M()),o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(d=>Pe()))}),Y(z,()=>R()),Y(()=>o.type,async()=>{await T(),R(),M()}),Ge(()=>{!o.formatter&&o.parser,R(),T(M)}),u({input:O,textarea:E,ref:N,textareaStyle:ie,autosize:Je(o,"autosize"),isComposing:de,focus:Ke,blur:je,select:Ue,clear:he,resizeTextarea:M}),(e,d)=>(m(),S("div",{class:b([t(l),{[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend}]),style:we(t(Ae)),onMouseenter:We,onMouseleave:_e},[g(" input "),e.type!=="textarea"?(m(),S(Q,{key:0},[g(" prepend slot "),e.$slots.prepend?(m(),S("div",{key:0,class:b(t(n).be("group","prepend"))},[j(e.$slots,"prepend")],2)):g("v-if",!0),k("div",{ref_key:"wrapperRef",ref:Me,class:b(t(c))},[g(" prefix slot "),e.$slots.prefix||e.prefixIcon?(m(),S("span",{key:0,class:b(t(n).e("prefix"))},[k("span",{class:b(t(n).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(m(),I(t(L),{key:0,class:b(t(n).e("icon"))},{default:B(()=>[(m(),I(_(e.prefixIcon)))]),_:1},8,["class"])):g("v-if",!0)],2)],2)):g("v-if",!0),k("input",xe({id:t(y),ref_key:"input",ref:O,class:t(n).e("inner")},t(p),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?$.value?"text":"password":e.type,disabled:t(w),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,role:e.containerRole,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:Z,onChange:ce,onKeydown:me}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role","onCompositionstart","onCompositionupdate","onCompositionend"]),g(" suffix slot "),t($e)?(m(),S("span",{key:1,class:b(t(n).e("suffix"))},[k("span",{class:b(t(n).e("suffix-inner"))},[!t(K)||!t(G)||!t(P)?(m(),S(Q,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(m(),I(t(L),{key:0,class:b(t(n).e("icon"))},{default:B(()=>[(m(),I(_(e.suffixIcon)))]),_:1},8,["class"])):g("v-if",!0)],64)):g("v-if",!0),t(K)?(m(),I(t(L),{key:1,class:b([t(n).e("icon"),t(n).e("clear")]),onMousedown:qe(t(Qe),["prevent"]),onClick:he},{default:B(()=>[Ze(t(mt))]),_:1},8,["class","onMousedown"])):g("v-if",!0),t(G)?(m(),I(t(L),{key:2,class:b([t(n).e("icon"),t(n).e("password")]),onClick:De},{default:B(()=>[(m(),I(_(t(Le))))]),_:1},8,["class"])):g("v-if",!0),t(P)?(m(),S("span",{key:3,class:b(t(n).e("count"))},[k("span",{class:b(t(n).e("count-inner"))},W(t(J))+" / "+W(e.maxlength),3)],2)):g("v-if",!0),t(V)&&t(le)&&t(se)?(m(),I(t(L),{key:4,class:b([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(V)==="validating")])},{default:B(()=>[(m(),I(_(t(le))))]),_:1},8,["class"])):g("v-if",!0)],2)],2)):g("v-if",!0)],2),g(" append slot "),e.$slots.append?(m(),S("div",{key:1,class:b(t(n).be("group","append"))},[j(e.$slots,"append")],2)):g("v-if",!0)],64)):(m(),S(Q,{key:1},[g(" textarea "),k("textarea",xe({id:t(y),ref_key:"textarea",ref:E,class:[t(ae).e("inner"),t(n).is("focus",t(D))]},t(p),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(w),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ie),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,role:e.containerRole,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:Z,onFocus:t(Re),onBlur:t(Be),onChange:ce,onKeydown:me}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","role","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(P)?(m(),S("span",{key:0,style:we(ne.value),class:b(t(n).e("count"))},W(t(J))+" / "+W(e.maxlength),7)):g("v-if",!0)],64))],38))}});var Mt=st(Vt,[["__file","input.vue"]]);const At=ht(Mt);export{At as E,zt as a,Pt as b,gt as i,It as u};
