import{r as l,ay as O,j as c,at as T,ar as j,aa as A,az as d,aA as o}from"./index-FCNiT-C2.js";var I=a=>a!=null&&parseInt(a.toString(),10)>0,x={exit:{height:{duration:.2,ease:o.ease},opacity:{duration:.3,ease:o.ease}},enter:{height:{duration:.3,ease:o.ease},opacity:{duration:.4,ease:o.ease}}},b={exit:({animateOpacity:a,startingHeight:n,transition:i,transitionEnd:e,delay:r})=>{var t;return{...a&&{opacity:I(n)?1:0},height:n,transitionEnd:e==null?void 0:e.exit,transition:(t=i==null?void 0:i.exit)!=null?t:d.exit(x.exit,r)}},enter:({animateOpacity:a,endingHeight:n,transition:i,transitionEnd:e,delay:r})=>{var t;return{...a&&{opacity:1},height:n,transitionEnd:e==null?void 0:e.enter,transition:(t=i==null?void 0:i.enter)!=null?t:d.enter(x.enter,r)}}},k=l.forwardRef((a,n)=>{const{in:i,unmountOnExit:e,animateOpacity:r=!0,startingHeight:t=0,endingHeight:m="auto",style:h,className:p,transition:v,transitionEnd:s,...g}=a,[y,f]=l.useState(!1);l.useEffect(()=>{const w=setTimeout(()=>{f(!0)});return()=>clearTimeout(w)},[]),O({condition:Number(t)>0&&!!e,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const E=parseFloat(t.toString())>0,u={startingHeight:t,endingHeight:m,animateOpacity:r,transition:y?v:{enter:{duration:0}},transitionEnd:{enter:s==null?void 0:s.enter,exit:e?s==null?void 0:s.exit:{...s==null?void 0:s.exit,display:E?"block":"none"}}},N=e?i:!0,S=i||e?"enter":"exit";return c.jsx(T,{initial:!1,custom:u,children:N&&c.jsx(j.div,{ref:n,...g,className:A("chakra-collapse",p),style:{overflow:"hidden",display:"block",...h},custom:u,variants:b,initial:e?"exit":!1,animate:S,exit:"exit"})})});k.displayName="Collapse";export{k as C};
