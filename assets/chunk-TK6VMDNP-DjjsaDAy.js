import{an as $,r,aH as le,a1 as ce,a2 as ue,X as K,a8 as de,a9 as I,a7 as B,$ as S,af as pe,Z as fe,aI as ge,ab as me,ac as ve,aJ as we,j as i,aK as Pe,aL as he}from"./index-DRg3D0on.js";function je(e){const{value:t,defaultValue:o,onChange:s,shouldUpdate:l=(p,k)=>p!==k}=e,P=$(s),f=$(l),[g,C]=r.useState(o),h=t!==void 0,d=h?t:g,y=$(p=>{const c=typeof p=="function"?p(d):p;f(d,c)&&(h||C(c),P(c))},[h,P,d,f]);return[d,y]}function be(e){const t=e.ownerDocument.defaultView||window,{overflow:o,overflowX:s,overflowY:l}=t.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(o+l+s)}function Ce(e){return e.localName==="html"?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}function Q(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:le(e)&&be(e)?e:Q(Ce(e))}var ye={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},J=e=>{var t;return((t=e.current)==null?void 0:t.ownerDocument)||document},F=e=>{var t,o;return((o=(t=e.current)==null?void 0:t.ownerDocument)==null?void 0:o.defaultView)||window};function ke(e={}){const{openDelay:t=0,closeDelay:o=0,closeOnClick:s=!0,closeOnMouseDown:l,closeOnScroll:P,closeOnPointerDown:f=l,closeOnEsc:g=!0,onOpen:C,onClose:h,placement:d,id:y,isOpen:p,defaultIsOpen:k,arrowSize:c=10,arrowShadowColor:R,arrowPadding:H,modifiers:M,isDisabled:E,gutter:_,offset:b,direction:U,...T}=e,{isOpen:a,onOpen:x,onClose:O}=ce({isOpen:p,defaultIsOpen:k,onOpen:C,onClose:h}),{referenceRef:N,getPopperProps:m,getArrowInnerProps:ee,getArrowProps:oe}=ue({enabled:a,placement:d,arrowPadding:H,modifiers:M,gutter:_,offset:b,direction:U}),te=r.useId(),V=`tooltip-${y??te}`,v=r.useRef(null),j=r.useRef(),D=r.useCallback(()=>{j.current&&(clearTimeout(j.current),j.current=void 0)},[]),L=r.useRef(),A=r.useCallback(()=>{L.current&&(clearTimeout(L.current),L.current=void 0)},[]),W=r.useCallback(()=>{A(),O()},[O,A]),Y=Ee(v,W),z=r.useCallback(()=>{if(!E&&!j.current){a&&Y();const n=F(v);j.current=n.setTimeout(x,t)}},[Y,E,a,x,t]),u=r.useCallback(()=>{D();const n=F(v);L.current=n.setTimeout(W,o)},[o,W,D]),Z=r.useCallback(()=>{a&&s&&u()},[s,u,a]),q=r.useCallback(()=>{a&&f&&u()},[f,u,a]),ne=r.useCallback(n=>{a&&n.key==="Escape"&&u()},[a,u]);K(()=>J(v),"keydown",g?ne:void 0),K(()=>{if(!P)return null;const n=v.current;if(!n)return null;const w=Q(n);return w.localName==="body"?F(v):w},"scroll",()=>{a&&P&&W()},{passive:!0,capture:!0}),r.useEffect(()=>{E&&(D(),a&&O())},[E,a,O,D]),r.useEffect(()=>()=>{D(),A()},[D,A]),K(()=>v.current,"pointerleave",u);const re=r.useCallback((n={},w=null)=>({...n,ref:de(v,w,N),onPointerEnter:I(n.onPointerEnter,ie=>{ie.pointerType!=="touch"&&z()}),onClick:I(n.onClick,Z),onPointerDown:I(n.onPointerDown,q),onFocus:I(n.onFocus,z),onBlur:I(n.onBlur,u),"aria-describedby":a?V:void 0}),[z,u,q,a,V,Z,N]),se=r.useCallback((n={},w=null)=>m({...n,style:{...n.style,[B.arrowSize.var]:c?`${c}px`:void 0,[B.arrowShadowColor.var]:R}},w),[m,c,R]),ae=r.useCallback((n={},w=null)=>{const G={...n.style,position:"relative",transformOrigin:B.transformOrigin.varRef};return{ref:w,...T,...n,id:V,role:"tooltip",style:G}},[T,V]);return{isOpen:a,show:z,hide:u,getTriggerProps:re,getTooltipProps:ae,getTooltipPositionerProps:se,getArrowProps:oe,getArrowInnerProps:ee}}var X="chakra-ui:close-tooltip";function Ee(e,t){return r.useEffect(()=>{const o=J(e);return o.addEventListener(X,t),()=>o.removeEventListener(X,t)},[t,e]),()=>{const o=J(e),s=F(e);o.dispatchEvent(new s.CustomEvent(X))}}function Te(e,t=[]){const o=Object.assign({},e);for(const s of t)s in o&&delete o[s];return o}function xe(e,t){const o={};for(const s of t)s in e&&(o[s]=e[s]);return o}var Oe=S(pe.div),De=fe((e,t)=>{var o,s;const l=ge("Tooltip",e),P=me(e),f=ve(),{children:g,label:C,shouldWrapChildren:h,"aria-label":d,hasArrow:y,bg:p,portalProps:k,background:c,backgroundColor:R,bgColor:H,motionProps:M,...E}=P,_=(s=(o=c??R)!=null?o:p)!=null?s:H;if(_){l.bg=_;const m=we(f,"colors",_);l[B.arrowBg.var]=m}const b=ke({...E,direction:f.direction}),U=typeof g=="string"||h;let T;if(U)T=i.jsx(S.span,{display:"inline-block",tabIndex:0,...b.getTriggerProps(),children:g});else{const m=r.Children.only(g);T=r.cloneElement(m,b.getTriggerProps(m.props,m.ref))}const a=!!d,x=b.getTooltipProps({},t),O=a?Te(x,["role","id"]):x,N=xe(x,["role","id"]);return C?i.jsxs(i.Fragment,{children:[T,i.jsx(Pe,{children:b.isOpen&&i.jsx(he,{...k,children:i.jsx(S.div,{...b.getTooltipPositionerProps(),__css:{zIndex:l.zIndex,pointerEvents:"none"},children:i.jsxs(Oe,{variants:ye,initial:"exit",animate:"enter",exit:"exit",...M,...O,__css:l,children:[C,a&&i.jsx(S.span,{srOnly:!0,...N,children:d}),y&&i.jsx(S.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:i.jsx(S.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:l.bg}})})]})})})})]}):i.jsx(i.Fragment,{children:g})});De.displayName="Tooltip";export{De as T,je as u};
