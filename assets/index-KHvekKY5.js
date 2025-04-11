import{v as b,i as B,c as u,x as F,y as i,B as C,R as S,z as n,I as t,u as e,_ as G,L as y,G as r,F as P,S as H,J as z,a0 as U,r as T,T as Y,H as Q,A as W,a8 as X,K as Z,q as _}from"./vue-Bp-VKo72.js";import{j as M,v as x,x as ee,n as oe,F as se,y as ae,C as le,c as te,z as re,A as ne,B as ie,k as de,D as ce,G as fe,H as ue,I as pe,J as ge,w as ve}from"./index-BEcxWQo9.js";import{u as me}from"./index-B1yYrzCp.js";const N=Symbol("dialogInjectionKey"),Ce=b({name:"ElDialogContent"}),ye=b({...Ce,props:ee,emits:x,setup(h,{expose:k}){const l=h,{t:w}=oe(),{Close:d}=le,{dialogRef:c,headerRef:p,bodyId:f,ns:s,style:g}=B(N),{focusTrapRef:v}=B(se),R=u(()=>[s.b(),s.is("fullscreen",l.fullscreen),s.is("draggable",l.draggable),s.is("align-center",l.alignCenter),{[s.m("center")]:l.center}]),E=ae(v,c),m=u(()=>l.draggable),$=u(()=>l.overflow),{resetPosition:A}=me(c,p,m,$);return k({resetPosition:A}),(a,L)=>(i(),F("div",{ref:e(E),class:t(e(R)),style:z(e(g)),tabindex:"-1"},[C("header",{ref_key:"headerRef",ref:p,class:t([e(s).e("header"),a.headerClass,{"show-close":a.showClose}])},[n(a.$slots,"header",{},()=>[C("span",{role:"heading","aria-level":a.ariaLevel,class:t(e(s).e("title"))},G(a.title),11,["aria-level"])]),a.showClose?(i(),F("button",{key:0,"aria-label":e(w)("el.dialog.close"),class:t(e(s).e("headerbtn")),type:"button",onClick:I=>a.$emit("close")},[y(e(te),{class:t(e(s).e("close"))},{default:r(()=>[(i(),P(H(a.closeIcon||e(d))))]),_:1},8,["class"])],10,["aria-label","onClick"])):S("v-if",!0)],2),C("div",{id:e(f),class:t([e(s).e("body"),a.bodyClass])},[n(a.$slots,"default")],10,["id"]),a.$slots.footer?(i(),F("footer",{key:0,class:t([e(s).e("footer"),a.footerClass])},[n(a.$slots,"footer")],2)):S("v-if",!0)],6))}});var be=M(ye,[["__file","dialog-content.vue"]]);const he=b({name:"ElDialog",inheritAttrs:!1}),ke=b({...he,props:ne,emits:re,setup(h,{expose:k}){const l=h,w=U();ie({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},u(()=>!!w.title));const d=de("dialog"),c=T(),p=T(),f=T(),{visible:s,titleId:g,bodyId:v,style:R,overlayDialogStyle:E,rendered:m,zIndex:$,afterEnter:A,afterLeave:a,beforeLeave:L,handleClose:I,onModalClick:K,onOpenAutoFocus:j,onCloseAutoFocus:q,onCloseRequested:O,onFocusoutPrevented:J}=ce(l,c);_(N,{dialogRef:c,headerRef:p,bodyId:v,ns:d,rendered:m,style:R});const D=ue(K),V=u(()=>l.draggable&&!l.fullscreen);return k({visible:s,dialogContentRef:f,resetPosition:()=>{var o;(o=f.value)==null||o.resetPosition()}}),(o,Ee)=>(i(),P(e(ge),{to:o.appendTo,disabled:o.appendTo!=="body"?!1:!o.appendToBody},{default:r(()=>[y(Y,{name:"dialog-fade",onAfterEnter:e(A),onAfterLeave:e(a),onBeforeLeave:e(L),persisted:""},{default:r(()=>[Q(y(e(fe),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e($)},{default:r(()=>[C("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(g),"aria-describedby":e(v),class:t("".concat(e(d).namespace.value,"-overlay-dialog")),style:z(e(E)),onClick:e(D).onClick,onMousedown:e(D).onMousedown,onMouseup:e(D).onMouseup},[y(e(pe),{loop:"",trapped:e(s),"focus-start-el":"container",onFocusAfterTrapped:e(j),onFocusAfterReleased:e(q),onFocusoutPrevented:e(J),onReleaseRequested:e(O)},{default:r(()=>[e(m)?(i(),P(be,W({key:0,ref_key:"dialogContentRef",ref:f},o.$attrs,{center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(V),overflow:o.overflow,fullscreen:o.fullscreen,"header-class":o.headerClass,"body-class":o.bodyClass,"footer-class":o.footerClass,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e(I)}),X({header:r(()=>[o.$slots.title?n(o.$slots,"title",{key:1}):n(o.$slots,"header",{key:0,close:e(I),titleId:e(g),titleClass:e(d).e("title")})]),default:r(()=>[n(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:r(()=>[n(o.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","onClose"])):S("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[Z,e(s)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var we=M(ke,[["__file","dialog.vue"]]);const De=ve(we);export{De as E};
