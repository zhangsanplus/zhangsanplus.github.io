System.register(["./index-legacy-B9SpKe9x.js","./vue-legacy-Cm9okHmH.js"],(function(t,n){"use strict";var e,u,r,i,l,o,f,c,a,d,p,s,y,_,E,v,D,m,g,h,T,L,x;return{setters:[function(t){e=t.c,u=t.j,r=t.t,i=t.E,l=t.a,o=t.e},function(t){f=t.d,c=t.aw,a=t.e,d=t.a8,p=t.ae,s=t.o,y=t.c,_=t.P,E=t.R,v=t.b,D=t.V,m=t.t,g=t.u,h=t.Z,T=t.S,L=t.B,x=t.F}],execute:function(){var n=function(t){return t.ADD="ADD",t.EDIT="EDIT",t.DELETE="DELETE",t.DETAILS="DETAILS",t}(n||{}),A=v("p",{style:{color:"#888"}}," 失焦后自动移除两端空格，并触发一次input事件 ",-1);t("default",f({__name:"index",setup:function(t){var f=e(),I=c(f).userinfo,S=a("");function w(){i.success("我是防抖按钮的点击事件")}function V(){i.warning("我是节流按钮的点击事件")}function j(){i.info("我是普通的点击事件")}function b(t){t.length}return function(t,e){var i=l,f=d("x-card"),c=o,a=p("auth"),k=p("copy"),C=p("input-trim");return s(),y(x,null,[_(f,{title:"v-auth 按钮权限指令"},{default:E((function(){return[v("div",null,[D(" 当前用户权限："+m(g(I).authList)+" ",1),v("p",null,[h((s(),T(i,{type:"primary"},{default:E((function(){return[D(" 新增 ")]})),_:1})),[[a,g(n).ADD]]),h((s(),T(i,{type:"danger"},{default:E((function(){return[D(" 删除 ")]})),_:1})),[[a,g(n).DELETE]]),h((s(),T(i,{type:"info"},{default:E((function(){return[D(" 查看 ")]})),_:1})),[[a,g(n).DETAILS]])])])]})),_:1}),_(f,{title:"v-copy 复制指令"},{default:E((function(){return[h((s(),T(i,{type:"primary"},{default:E((function(){return[D(" 左键点击复制 ")]})),_:1})),[[k,"我是点击左键复制的内容"]]),h((s(),T(i,{type:"primary",plain:""},{default:E((function(){return[D(" 右键点击复制 ")]})),_:1})),[[k,"我是点击右键复制的内容",void 0,{contextmenu:!0,prevent:!0}]])]})),_:1}),_(f,{title:"v-debounce 防抖指令"},{default:E((function(){return[h((s(),T(i,{type:"success"},{default:E((function(){return[D(" 点击结束 0.5秒后执行 ")]})),_:1})),[[g(u),w]]),_(i,{type:"info",onClick:j},{default:E((function(){return[D(" 普通点击事件 ")]})),_:1})]})),_:1}),_(f,{title:"v-throttle 节流指令"},{default:E((function(){return[h((s(),T(i,{type:"warning"},{default:E((function(){return[D(" 连续点击 每隔1秒执行 ")]})),_:1})),[[g(r),V]]),_(i,{type:"info",onClick:j},{default:E((function(){return[D(" 普通点击事件 ")]})),_:1})]})),_:1}),_(f,{title:"v-input-trim 指令"},{default:E((function(){return[A,v("p",null,"当前输入长度为: "+m(g(S).length),1),h(_(c,{modelValue:g(S),"onUpdate:modelValue":e[0]||(e[0]=function(t){return L(S)?S.value=t:null}),placeholder:"输入一些文字和空格试试吧~",style:{width:"260px"},onInput:b},null,8,["modelValue"]),[[C]])]})),_:1})],64)}}}))}}}));