import{u as S,r as h,A as k,l as D,j as e,n as T,S as i,o as f,p as _,Q as W,s as C,q as F,T as x,v as B,i as I,k as q,X as E,w as H,x as L,H as g,L as O,C as b,f as R,O as $,E as A,G,J as N,I as v,K as V,$ as P,h as K,y as M,a0 as X}from"./index-BXoWWcJE.js";function J(a){var t,o;const s=S(),l=h.useContext(k),{register:r,handleSubmit:m,formState:{errors:n,isSubmitting:c},reset:j,watch:d}=D({defaultValues:{condition_type:"greater_and_equal"}}),p=async u=>{var y;const w=await I.post("/dashboard/widgets/create",{...u,condition_amount:(u.condition_amount*100).toFixed(0)},(y=l.props.auth)==null?void 0:y.token);if(w.errors){q(w.errors,s);return}await a.refreshData(),j(),a.onClose()};return e.jsx(T,{title:"создать виджет",...a,children:e.jsx("form",{onSubmit:m(p),children:e.jsxs(i,{direction:"column",spacing:2,children:[e.jsxs(f,{isInvalid:!!n.condition_type,children:[e.jsx(_,{children:"условие"}),e.jsxs(W,{isDisabled:c,_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...r("condition_type",{required:!0}),children:[e.jsx("option",{value:"greater",children:"больше"}),e.jsx("option",{value:"greater_and_equal",children:"больше или равно"}),e.jsx("option",{value:"equal",children:"равно"})]}),e.jsx(C,{error:n.condition_type})]}),e.jsxs(f,{isInvalid:!!n.condition_type,children:[e.jsxs(_,{children:["сумма в ",(t=l.props.auth)==null?void 0:t.profile.default_currency]}),e.jsx(F,{isDisabled:c,placeholder:"введите сумму",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...r("condition_amount",{required:!0,valueAsNumber:!0,validate:u=>u>0||"bad_number"})}),e.jsx(C,{error:n.condition_type})]}),e.jsxs(x,{fontSize:"sm",children:["виджет сработает только если сумма доната"," ",z[d("condition_type")]," ",d("condition_amount")||0," ",(o=l.props.auth)==null?void 0:o.profile.default_currency]}),e.jsx(B,{type:"submit",isDisabled:c,children:"создать"})]})})})}const z={equal:"равна",greater_and_equal:"больше или равна",greater:"больше"};function U(){var p;const a=S(),s=h.useContext(k),l=E(),[r,m]=h.useState(),n=async()=>{var o;const t=await I.get("/dashboard/widgets",void 0,(o=s.props.auth)==null?void 0:o.token);if(t.errors){q(t.errors,a);return}m(t.widgets)};h.useEffect(()=>{n()},[]);const[c,j]=H(),d=L();return e.jsxs(i,{direction:"column",spacing:4,children:[e.jsxs(i,{direction:"column",spacing:2,children:[e.jsx(g,{children:"виджет оповещений"}),e.jsxs(i,{direction:["column","row"],justifyContent:"space-between",alignItems:["start","center"],spacing:2,children:[e.jsx(x,{opacity:"0.5",fontSize:"sm",pr:["0px","100px"],children:"виджет оповещений служит для отображения новых донатов. виджет оповещений о сообщениях можно встроить двумя способами: открыв через браузер или запустив его через OBS, XSplit или Kast с использованием специальной ссылки."}),(r==null?void 0:r.length)!==0?e.jsx(O,{flexShrink:"0",userSelect:"none",onClick:j.toggle,children:c?"скрыть ссылку для встраивания":"показать ссылку для встраивания"}):e.jsx(e.Fragment,{})]})]}),r?e.jsxs(e.Fragment,{children:[r.length===0?e.jsx(b,{children:e.jsx(x,{opacity:"0.5",children:"виджеты не найдены (это как вообще? обратитесь в поддержку)"})}):e.jsx($,{in:c,animateOpacity:!0,children:e.jsxs(f,{children:[e.jsx(_,{children:"ссылка для встраивания"}),e.jsxs(A,{children:[e.jsx(F,{color:"brand.300",value:`https://widget.tipmeadollar.com/?key=${(p=s.props.auth)==null?void 0:p.profile.api_token}`,isReadOnly:!0,_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},cursor:"pointer",onFocus:()=>{var t;G(`https://widget.tipmeadollar.com/?key=${(t=s.props.auth)==null?void 0:t.profile.api_token}`)}}),e.jsx(N,{width:"3rem",children:e.jsx(v,{"aria-label":"copy",icon:e.jsx(V,{}),maxW:"1.75rem",minW:"1.75rem",variant:"ghost",h:"1.75rem",size:"sm",onClick:()=>{var t;window.navigator.clipboard.writeText(`https://widget.tipmeadollar.com/?key=${(t=s.props.auth)==null?void 0:t.profile.api_token}`),a({title:"cсылка скопирована"})}})})]}),e.jsx(P,{fontWeight:"bold",children:"никому не показывайте ссылку!"})]})}),e.jsxs(K,{columns:[1,2,3],spacing:2,children:[e.jsx(b,{cursor:"pointer",bgColor:"#202020",borderRadius:"lg",p:3,border:"1px solid",borderColor:"transparent",transitionProperty:"var(--aithercol-transition-property-common)",transitionDuration:"var(--aithercol-transition-duration-fast)",transitionTimingFunction:"var(--aithercol-transition-easing-ease-out)",_hover:{borderColor:"brand.500"},onClick:d.onOpen,children:e.jsxs(i,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(M,{}),e.jsx(g,{size:"sm",children:"новый виджет"})]})}),r.map(t=>{var o;return e.jsxs(i,{bgColor:"#202020",borderRadius:"lg",p:3,direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,children:[e.jsxs(i,{direction:"column",spacing:0,children:[e.jsx(g,{size:"sm",children:t.is_default?"стандартный виджет":"дополнительный виджет"}),e.jsxs(x,{fontSize:"sm",children:["если сумма доната ",z[t.condition_type]," ",(t.condition_amount/100).toFixed(2)," ",(o=s.props.auth)==null?void 0:o.profile.default_currency]})]}),e.jsx(v,{"aria-label":"settings",icon:e.jsx(X,{}),size:"sm",onClick:()=>l(`/dashboard/widgets/notifications/${t.id}`),variant:"ghost"})]})})]})]}):e.jsx(b,{children:e.jsx(R,{color:"brand.300",size:"xl"})}),e.jsx(J,{...d,refreshData:n})]})}export{z as condition,U as default};
