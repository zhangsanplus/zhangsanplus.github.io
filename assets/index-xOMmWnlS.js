var v=Object.defineProperty;var w=(n,e,t)=>e in n?v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>w(n,typeof e!="symbol"?e+"":e,t);import{_ as V}from"./index.vue_vue_type_style_index_0_lang-BwiYcMwn.js";import{S as R,a as q,E as S}from"./index-DQNWtGWz.js";import{v as N,af as $,r as L,O as U,F as P,y as W,G as o,L as i,u as d,$ as C}from"./vue-Bp-VKo72.js";import{E as I}from"./index-CePrSitK.js";import{E as M,b as O}from"./index-CwX5VMi2.js";import{a as j,E as Z}from"./index-jgl_rwKe.js";import{E as z}from"./index-BEcxWQo9.js";import"./isEqual-DDMOfOHw.js";function G(){return{default:"验证失败",required:"必填","types.number":"必须为数字","types.array":"必须为数组","number.integer":"必须为整数","number.decimal":"最多保留{0}位小数","number.range":"输入范围为 {0} 到 {1}","number.min":"最小值为 {0}","number.max":"最大值为 {0}","number.gt":"必须大于 {0}","number.gte":"必须大于等于 {0}","number.lt":"必须小于 {0}","number.lte":"必须小于等于 {0}","number.equal":"必须等于 {0}","number.positive":"必须为正数","number.negative":"必须为负数","number.nonnegative":"必须为非负数","number.nonpositive":"必须为非正数","string.regex":"请输入正确的格式","string.range":"字符串长度为 {0} 到 {1}","string.min":"字符串长度最小值为 {0}","string.max":"字符串长度最大值为 {0}","string.equal":"字符串必须等于 {0}","string.contain":"字符串必须包含 {0}","string.len":"字符串长度必须等于 {0}","string.byteLen":"字符串长度为 {0} 到 {1} 个字节","string.startsWith":"字符串必须以 {0} 开头","string.endsWith":"字符串必须以 {0} 结尾","string.uppercase":"字符串必须全部为大写字母","string.lowercase":"字符串必须全部为小写字母","string.alphanumeric":"字符串必须全部为字母或数字","string.phone":"手机号格式不正确","string.email":"邮箱格式不正确","string.url":"链接格式不正确","string.ip":"IP格式不正确","string.password":"密码格式不正确","array.range":"数组长度为 {0} 到 {1}","array.min":"数组长度最小为 {0}","array.max":"数组长度最大为 {0}","array.len":"数组长度必须等于 {0}"}}function T(n,e=[]){return Array.isArray(e)?n.replace(/\{(\d+)\}/g,(t,u)=>{var a,l;const r=Number(u);return(l=(a=e[r])==null?void 0:a.toString())!=null?l:t}):n.replace(/\{(\w+)\}/g,(t,u)=>{var r,a;return(a=(r=e[u])==null?void 0:r.toString())!=null?a:t})}const X=G();function H(n,e){return n.map(t=>{const{validator:u,...r}=t;return u?{...r,validator:(a,l,m)=>{u(l,s=>{s?m(new Error(s)):m()})}}:t}).map(t=>({trigger:e,...t}))}class _{constructor(e){c(this,"_type");c(this,"_messages");c(this,"_descriptors",[]);c(this,"_optional",null);this._type=e.type,this._messages=e.messages}_getMessage(e){const{kind:t,message:u,value:r}=e;if(typeof u=="function")return u(e);if(u)return u;const a="".concat(this._type,".").concat(t),l=this._messages[a]||this._messages.default;return T(l,Array.isArray(r)?r:[r])}_addDescriptor(e){this._descriptors.push(e)}_convertValue(e){if(this._type==="string")return{converted:String(e)};if(this._type==="number"){const t=Number(e);return Number.isNaN(t)?{error:this._messages["types.number"],converted:t}:{converted:t}}return this._type==="array"&&!Array.isArray(e)?{error:this._messages["types.array"],converted:e}:{converted:e}}_validator(e,t){var a;if((a=this._optional)!=null&&a.call(this,t))return;const{converted:u,error:r}=this._convertValue(t);if(r)return r;for(const l of e)if(l.kind==="custom"){const m=l.validator(u,t);if(m)return m}else if(!this._test(l,u,t))return this._getMessage(l)}_toRule(e){return{type:this._type,validator:(t,u)=>{u(this._validator(e,t))}}}_rules(){const e=[];let t=[];return this._descriptors.forEach(u=>{"kind"in u?t.push(u):(t.length&&(e.push(this._toRule(t)),t=[]),e.push(u))}),t.length&&e.push(this._toRule(t)),e}getRules(){return this._rules()}getElRules(e){return H(this._rules(),e)}validate(e,t){const u=this.getElRules(),r=new R({value:u});return new Promise(l=>{r.validate({value:e},{firstFields:!0},m=>{var h;const s=!!m,p=(h=m==null?void 0:m[0])==null?void 0:h.message;l({error:s,message:p}),t&&t(s,p)})})}concat(...e){return this._descriptors.push(...e),this}custom(e){return this._addDescriptor({kind:"custom",validator:e}),this}required(e){return this._addDescriptor({required:!0,message:e||this._messages.required}),this}optional(e=["",void 0,null]){return this._optional=typeof e=="function"?e:t=>e.includes(t),this}}class J extends _{constructor(e){super({type:"array",messages:e.messages})}_test(e,t){if(e.kind==="range"){const[u,r]=e.value;return t.length>=u&&t.length<=r}else{if(e.kind==="min")return t.length>=e.value;if(e.kind==="max")return t.length<=e.value;if(e.kind==="len")return t.length===e.value}return!0}len(e,t){return this._addDescriptor({kind:"len",value:e,message:t}),this}min(e,t){return this._addDescriptor({kind:"min",value:e,message:t}),this}max(e,t){return this._addDescriptor({kind:"max",value:e,message:t}),this}range(e,t){return this._addDescriptor({kind:"range",value:e,message:t}),this}}function K(n,e){const t=n.toString().split(".")[1];return t?t.length>e:!1}const y=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&Number.isFinite(n)&&Math.floor(n)===n;function Q(n){return y(n)&&Number(n)>=0&&Number(n)<=65535}class Y extends _{constructor(e){super({type:"number",messages:e.messages})}_test(e,t){if(e.kind==="integer")return y(t);if(e.kind==="decimal")return K(t,e.value);if(e.kind==="range"){const[u,r]=e.value;return t>=u&&t<=r}else{if(e.kind==="min")return t>=e.value;if(e.kind==="max")return t<=e.value;if(e.kind==="gt")return t>e.value;if(e.kind==="lt")return t<e.value;if(e.kind==="equal")return t===e.value;if(e.kind==="positive")return t>0;if(e.kind==="nonnegative")return t>=0;if(e.kind==="negative")return t<0;if(e.kind==="nonpositive")return t<=0;if(e.kind==="port")return Q(t)}return!0}integer(e){return this._addDescriptor({kind:"integer",message:e}),this}decimal(e,t){return this._addDescriptor({kind:"decimal",value:e,message:t}),this}range(e,t){return this._addDescriptor({kind:"range",value:e,message:t}),this}min(e,t){return this._addDescriptor({kind:"min",value:e,message:t}),this}max(e,t){return this._addDescriptor({kind:"max",value:e,message:t}),this}gt(e,t){return this._addDescriptor({kind:"gt",value:e,message:t}),this}gte(e,t){return this._addDescriptor({kind:"min",value:e,message:t}),this}lt(e,t){return this._addDescriptor({kind:"lt",value:e,message:t}),this}lte(e,t){return this._addDescriptor({kind:"max",value:e,message:t}),this}equal(e,t){return this._addDescriptor({kind:"equal",value:e,message:t}),this}positive(e){return this._addDescriptor({kind:"positive",message:e}),this}nonnegative(e){return this._addDescriptor({kind:"nonnegative",message:e}),this}negative(e){return this._addDescriptor({kind:"negative",message:e}),this}nonpositive(e){return this._addDescriptor({kind:"nonpositive",message:e}),this}port(e){return this._addDescriptor({kind:"port",message:e}),this}}function ee(n,e){const[t,u]=e,a=new TextEncoder().encode(n);return a.length<t||a.length>u}const te=/^(?!\.)(?!.+\.\.)([\w'+\-.]*)[\w+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;function ue(n){return te.test(n)}const ne=/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/,re=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d))$/;function se(n,e){return!!((e==="v4"||!e)&&ne.test(n)||(e==="v6"||!e)&&re.test(n))}function ie(n,e){if(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const u=e[t];typeof u=="object"&&typeof n[t]=="object"?n[t]={...n[t],...u}:n[t]=u}}return n}const ae=/^[A-Z]$/,le=/^[a-z]$/,oe=/^\d$/,de=/^[-#!$@£%^&*()_+|~=`{}[\]:";'<>?,./\\ ]$/,me={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1};function fe(n){const e={};return Array.from(n).forEach(t=>{e[t]?e[t]+=1:e[t]=1}),e}function he(n){const e=fe(n),t={length:n.length,uniqueChars:Object.keys(e).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(e).forEach(u=>{ae.test(u)?t.uppercaseCount+=e[u]:le.test(u)?t.lowercaseCount+=e[u]:oe.test(u)?t.numberCount+=e[u]:de.test(u)&&(t.symbolCount+=e[u])}),t}function pe(n,e){const t=ie(me,e||{}),u=he(n);return u.length>=t.minLength&&u.lowercaseCount>=t.minLowercase&&u.uppercaseCount>=t.minUppercase&&u.numberCount>=t.minNumbers&&u.symbolCount>=t.minSymbols}function ce(n){try{return new URL(n),!0}catch(e){return!1}}class ge extends _{constructor(e){super({type:"string",messages:e.messages})}_test(e,t){if(e.kind==="regex")return e.regex.test(t);if(e.kind==="range"){const[u,r]=e.value;return t.length>=u&&t.length<=r}else{if(e.kind==="min")return t.length>=e.value;if(e.kind==="max")return t.length<=e.value;if(e.kind==="equal")return t===e.value;if(e.kind==="contain")return t.includes(e.value);if(e.kind==="len")return t.length===e.value;if(e.kind==="byteLen")return ee(t,e.value);if(e.kind==="uppercase")return t===t.toUpperCase();if(e.kind==="lowercase")return t===t.toLowerCase();if(e.kind==="alphanumeric")return/^[a-z0-9]+$/i.test(t);if(e.kind==="startsWith")return t.startsWith(e.value);if(e.kind==="endsWith")return t.endsWith(e.value);if(e.kind==="phone")return/^1[3-9]\d{9}$/.test(t);if(e.kind==="email")return ue(t);if(e.kind==="url")return ce(t);if(e.kind==="ip")return se(t,e.value);if(e.kind==="password")return pe(t,e.value)}return!0}regex(e,t){return this._addDescriptor({kind:"regex",regex:e,message:t}),this}range(e,t){return this._addDescriptor({kind:"range",value:e,message:t}),this}min(e,t){return this._addDescriptor({kind:"min",value:e,message:t}),this}max(e,t){return this._addDescriptor({kind:"max",value:e,message:t}),this}equal(e,t){return this._addDescriptor({kind:"equal",value:e,message:t}),this}contain(e,t){return this._addDescriptor({kind:"contain",value:e,message:t}),this}len(e,t){return this._addDescriptor({kind:"len",value:e,message:t}),this}byteLen(e,t){return this._addDescriptor({kind:"byteLen",value:e,message:t}),this}startsWith(e,t){return this._addDescriptor({kind:"startsWith",value:e,message:t}),this}endsWith(e,t){return this._addDescriptor({kind:"endsWith",value:e,message:t}),this}uppercase(e){return this._addDescriptor({kind:"uppercase",message:e}),this}lowercase(e){return this._addDescriptor({kind:"lowercase",message:e}),this}alphanumeric(e){return this._addDescriptor({kind:"alphanumeric",message:e}),this}phone(e){return this._addDescriptor({kind:"phone",message:e}),this}email(e){return this._addDescriptor({kind:"email",message:e}),this}url(e){return this._addDescriptor({kind:"url",message:e}),this}ip(e){return this._addDescriptor({kind:"ip",message:e}),this}password(e,t){return this._addDescriptor({kind:"password",message:t,value:e}),this}}const E={messages:X};class g{static string(){return new ge(E)}static number(){return new Y(E)}static array(){return new J(E)}}const De=N({__name:"index",setup(n){const e=$(),t=L(),u=U({name:"",phone:"",email:"",sex:1,role:2,desc:""}),r={name:g.string().required().getElRules(),phone:g.string().required().phone().getElRules("blur"),email:g.string().required().email().getElRules("blur"),desc:g.string().max(200,"个人简介最多不超过200字").getElRules()};function a(){t.value.validate(m=>{})}function l(){e.go(-1)}return(m,s)=>{const p=I,h=S,F=O,A=M,k=Z,b=j,B=z,D=q,x=V;return W(),P(x,{title:"新增用户",full:""},{default:o(()=>[i(D,{ref_key:"formRef",ref:t,model:d(u),rules:r,"label-width":"120px",style:{"max-width":"460px"}},{default:o(()=>[i(h,{label:"姓名",prop:"name"},{default:o(()=>[i(p,{modelValue:d(u).name,"onUpdate:modelValue":s[0]||(s[0]=f=>d(u).name=f),placeholder:"请填写用户姓名"},null,8,["modelValue"])]),_:1}),i(h,{label:"手机号码",prop:"phone"},{default:o(()=>[i(p,{modelValue:d(u).phone,"onUpdate:modelValue":s[1]||(s[1]=f=>d(u).phone=f),placeholder:"请输入手机号码"},null,8,["modelValue"])]),_:1}),i(h,{label:"邮箱",prop:"email"},{default:o(()=>[i(p,{modelValue:d(u).email,"onUpdate:modelValue":s[2]||(s[2]=f=>d(u).email=f),placeholder:"请填写邮箱地址"},null,8,["modelValue"])]),_:1}),i(h,{label:"性别",prop:"sex"},{default:o(()=>[i(A,{modelValue:d(u).sex,"onUpdate:modelValue":s[3]||(s[3]=f=>d(u).sex=f)},{default:o(()=>[i(F,{label:"男",value:1}),i(F,{label:"女",value:2})]),_:1},8,["modelValue"])]),_:1}),i(h,{label:"角色",prop:"role"},{default:o(()=>[i(b,{modelValue:d(u).role,"onUpdate:modelValue":s[4]||(s[4]=f=>d(u).role=f),placeholder:"请选择用户角色",style:{width:"100%"}},{default:o(()=>[i(k,{label:"管理员",value:1}),i(k,{label:"普通用户",value:2})]),_:1},8,["modelValue"])]),_:1}),i(h,{label:"个人简介",prop:"desc"},{default:o(()=>[i(p,{modelValue:d(u).desc,"onUpdate:modelValue":s[5]||(s[5]=f=>d(u).desc=f),type:"textarea",placeholder:"请输入个人简介，最多不超过200字"},null,8,["modelValue"])]),_:1}),i(h,null,{default:o(()=>[i(B,{type:"primary",onClick:a},{default:o(()=>s[6]||(s[6]=[C(" 创建 ")])),_:1}),i(B,{onClick:l},{default:o(()=>s[7]||(s[7]=[C(" 取消 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}});export{De as default};
