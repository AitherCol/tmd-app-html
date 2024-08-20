import{u as F,r as u,A as v,h as _,j as r,i as k,S as p,k as f,l as C,n as S,o as y,p as I,q as g,f as B,g as D,s as L,t as A,H as q,v as H,w as E,C as w,d as M,T as P,R,m as V}from"./index-DRg3D0on.js";import{T as W,a as $,b as z,c as T,d as x,e as N,f as h,g as O}from"./chunk-MGVPL3OH-D4SbIbHx.js";function G(n){const m=F(),i=u.useContext(v),{register:c,handleSubmit:s,formState:{errors:o,isSubmitting:d},reset:b}=_(),j=async a=>{var t;const e=await B.post("/dashboard/donations/test",{...a,amount:(a.amount*100).toFixed(0)},(t=i.props.auth)==null?void 0:t.token);if(e.errors){D(e.errors,m);return}await n.refreshData(),b(),n.onClose()};return r.jsx(k,{title:"добавить донат",...n,children:r.jsx("form",{onSubmit:s(j),children:r.jsxs(p,{direction:"column",spacing:2,children:[r.jsxs(f,{isInvalid:!!o.name,children:[r.jsx(C,{children:"имя"}),r.jsx(S,{isDisabled:d,placeholder:"введите имя пользователя",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...c("name",{required:!1,maxLength:40})}),r.jsx(y,{error:o.name})]}),r.jsxs(f,{isInvalid:!!o.amount,children:[r.jsx(C,{children:"сумма"}),r.jsx(S,{isDisabled:d,placeholder:"введите сумму",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...c("amount",{required:!0,valueAsNumber:!0,validate:a=>a>0||"bad_number"})}),r.jsx(y,{error:o.amount})]}),r.jsxs(f,{isInvalid:!!o.message,children:[r.jsx(C,{children:"сообщение"}),r.jsx(I,{isDisabled:d,placeholder:"введите сообщение",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...c("message",{required:!1,maxLength:200})}),r.jsx(y,{error:o.message})]}),r.jsx(g,{type:"submit",isDisabled:d,children:"добавить"})]})})})}function Q(){const n=F(),m=u.useContext(v),[i,c]=u.useState(),[s,o]=u.useState(),[d,b]=L(),j=A(),a=async e=>{var t;b.on();try{const l=await B.get("/dashboard/donations",{page:e||1,limit:25},(t=m.props.auth)==null?void 0:t.token);if(l.errors){D(l.errors,n);return}c(e?[...i||[],...l.donations.data]:l.donations.data),o(l.donations.meta)}catch(l){console.error(l)}finally{b.off()}};return u.useEffect(()=>{a()},[]),r.jsxs(p,{direction:"column",spacing:4,children:[r.jsxs(p,{direction:["column","row"],justifyContent:"space-between",alignItems:["start","center"],spacing:2,children:[r.jsx(q,{children:"донаты"}),r.jsxs(p,{direction:["column","row"],spacing:2,children:[r.jsx(g,{onClick:j.onOpen,leftIcon:r.jsx(H,{}),children:"добавить донат"}),r.jsx(g,{onClick:async()=>{var t;const e=await B.post("/dashboard/donations/skip_current",void 0,(t=m.props.auth)==null?void 0:t.token);if(e.errors){D(e.errors,n);return}n({title:"успешно!",description:"донат был пропущен.",status:"success"})},leftIcon:r.jsx(E,{}),children:"пропустить текущий донат"})]})]}),i?r.jsxs(r.Fragment,{children:[i.length===0&&r.jsx(w,{children:r.jsx(P,{opacity:"0.5",children:"донаты не найдены"})}),i.length!==0&&r.jsx(W,{children:r.jsxs($,{variant:"simple",children:[r.jsx(z,{children:r.jsxs(T,{children:[r.jsx(x,{borderBottomColor:"rgba(255, 255, 255, 0.3)",color:"white",opacity:"0.5",children:"имя пользователя"}),r.jsx(x,{borderBottomColor:"rgba(255, 255, 255, 0.3)",color:"white",opacity:"0.5",children:"сумма"}),r.jsx(x,{borderBottomColor:"rgba(255, 255, 255, 0.3)"}),r.jsx(x,{maxW:"300px",borderBottomColor:"rgba(255, 255, 255, 0.3)",color:"white",opacity:"0.5",children:"сообщение"}),r.jsx(x,{borderBottomColor:"rgba(255, 255, 255, 0.3)",color:"white",opacity:"0.5",children:"дата и время"})]})}),r.jsx(N,{children:i.map(e=>r.jsxs(T,{children:[r.jsx(h,{borderBottomColor:"rgba(255, 255, 255, 0.3)",children:e.name||"аноним"}),r.jsxs(h,{borderBottomColor:"rgba(255, 255, 255, 0.3)",children:[(e.amount/100).toFixed(2)," ",e.currency]}),r.jsx(h,{opacity:"0.5",borderBottomColor:"rgba(255, 255, 255, 0.3)",children:e.commission_amount!==0?`-${(e.commission_amount/100).toFixed(2)} ${e.currency}`:""}),r.jsx(h,{maxW:"300px",css:{textWrap:"balance"},borderBottomColor:"rgba(255, 255, 255, 0.3)",children:e.audio?r.jsx(R,{style:{width:"280px"},controls:!0,src:e.audio}):r.jsx(r.Fragment,{children:e.message||""})}),r.jsx(h,{borderBottomColor:"rgba(255, 255, 255, 0.3)",children:V(e.paid_at).format("LLL")})]}))}),(s==null?void 0:s.current_page)!==(s==null?void 0:s.last_page)&&r.jsx(O,{mt:0,children:r.jsx(w,{children:r.jsx(g,{isDisabled:d,onClick:()=>a((s==null?void 0:s.current_page)+1),children:"показать еще"})})})]})})]}):r.jsx(w,{children:r.jsx(M,{color:"brand.300",size:"xl"})}),r.jsx(G,{refreshData:()=>a(),...j})]})}export{Q as default};
