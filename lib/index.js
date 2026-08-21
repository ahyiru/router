import{useState as Ee,useEffect as ur,useCallback as pe,useRef as ue}from"react";var mt=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),_=mt;var dt=e=>_(e)==="array",C=dt;var ht=e=>_(e)==="object",y=ht;var gt=e=>e?.$$typeof&&typeof e.$$typeof=="symbol"&&e.$$typeof.description?.indexOf("react.")===0,B=gt;var bt=e=>e?.__v_isVNode,Te=bt;var xt=(e,t)=>Object.prototype.hasOwnProperty.call(e??{},t),te=xt;var Ie=e=>{if(!C(e)&&!y(e))return e;let t=C(e)?[]:{};for(let o in e)if(te(e,o)){let n=e[o];t[o]=B(n)||Te(n)||typeof n!="object"?n:n!==e?Ie(n):"cyclic"}else Object.setPrototypeOf(t,{[o]:e[o]});return t},L=Ie;var yt=e=>_(e)==="function",V=yt;var wt=e=>_(e)==="promise"||y(e)&&V(e.then),A=wt;var St=(e,t=12e4,o="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!A(e))return{};let n=null,r=null;return{promiseFn:new Promise((f,a)=>{n=(s="canceled")=>{clearTimeout(r),f({canceled:!0,errMsg:s})},t&&(t=typeof t!="number"?12e4:t,r=setTimeout(()=>n(o),t)),e.then(s=>{clearTimeout(r),f({result:s,errMsg:!1})}).catch(s=>{clearTimeout(r),a(s)})}),cancelFn:n}},re=St;var kt=e=>(e||"").length<2?"/":e.endsWith("/")?e.slice(0,-1):e,ne=kt;import{jsx as Rt}from"react/jsx-runtime";var Ct=(e,t)=>Rt("div",{dangerouslySetInnerHTML:{__html:e},...t}),Le=Ct;import{jsxs as He}from"react/jsx-runtime";var $t=e=>{let{error:t={},info:o="",searchUrl:n="https://google.com/search?q="}=e||{},{message:r,stack:c,errMsg:f}=t,a=f||c||t.toString();a=`${a}
${o}`.replace(/\r|\n|\r\n/g,"<br/>"),a=a.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),a=a.replace(/\s/g,"&nbsp;");let s=r?.slice(0,120).split(". ").slice(0,2).join(". ");return He("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Le(a,{style:{color:"red"}}),s&&He("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`${n}${s}&udm=50`,target:"_blank",children:[" ","--> \u53BB\u95EE AI \uFF1F"]})]})},N=$t;var vt=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),M=vt;var Pt=()=>{let e={};return{on:(r,c)=>{e[r]||(e[r]=[]),e[r].indexOf(c)===-1&&e[r].push(c)},emit:(r,c)=>{e[r]&&e[r].map(f=>f(c))},off:(r,c=null)=>{if(e[r]){if(typeof c!="function")return delete e[r];let f=e[r].indexOf(c);f>-1&&(e[r].splice(f,1),e[r].length||delete e[r])}}}},O=Pt;var je=e=>{let t={};for(let o in e)te(e,o)||(t[o]=e[o]);return t},Ot=(e,t)=>{if(!y(e))return t;if(!y(t))return e;let o={...je(e),...je(t)},n={...e,...t};return Object.keys(o).map(r=>{Object.setPrototypeOf(n,{[r]:o[r]})}),n},Ue=Ot;var Et=(e=O())=>{let{on:t,emit:o,off:n}=e,r={};return{getState:l=>L(r[l]),setState:(l,i=!1)=>{if(typeof l=="function"&&(l=l(L(r))),!y(l))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");let h=L(l);Object.keys(h).map(g=>{let m=r[g],p=h[g],x=y(p)&&y(m)?Ue(m,p):p;!i&&o(g,x),r[g]=x})},subscribe:(l,i)=>(t(l,i),()=>n(l,i)),unsubscribe:n,clean:l=>{typeof l=="string"?r[l]=void 0:Array.isArray(l)?l.map(i=>r[i]=void 0):Object.keys(r).map(i=>r[i]=void 0)}}},T=Et;import{useState as _t,useEffect as At,useCallback as be}from"react";var Mt=e=>(t,o)=>{let[n,r]=_t(()=>{let s=e?.getState(t);return s!==void 0?s:(o!==void 0&&e?.setState({[t]:o},!0),o)}),c=be(s=>e?.setState({[t]:typeof s=="function"?s(e?.getState(t)):s}),[]),f=be(s=>e?.subscribe(t,s),[]),a=be((s=s)=>e?.clean(s),[]);return At(()=>{e?.subscribe(t,s=>r(s))},[]),[n,c,f,a]},oe=Mt;var Tt=T(),hn=oe(Tt),gn=O(),bn=O();var se={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},W="/404",Be={getState:()=>history.state,go:e=>history.go(e),forward:()=>history.forward(),back:()=>history.back()};var Ne=(e,t,o,n,r=[])=>{let c=s=>{for(let l=0,i=s.length;l<i;l++){let h=s[l],g=h[n].split("?")[0];if(new RegExp("^"+g.replace(/:[^/]+/g,"[^/]+")+"$").test(t)&&!h.childSameRouteLevel)return h;if(C(h[o])){let p=c(h[o]);if(p)return p}}},f=c(e);if(!f)return W;let{redirect:a}=f;return a?M(a)?a:r.includes(a)?r:(r.push(a),Ne(e,a.split("?")[0],o,n,r)):r[r.length-1]},It=(e,t,o,n,r)=>{if(!C(e))return null;let c=i=>{let h=i.split("/"),g=t.split("/"),m={};return h.map((p,x)=>p.indexOf(":")===0&&(m[p.slice(1)]=g[x])),m},f=(i,h)=>{let g=[],m=h.split("/:")[0];for(let p=0,x=i.length;p<x;p++){let d=i[p];if(d[r]===m){d.active=!0;let{name:u,title:b,icon:w,params:S}=d;g.push({name:u,title:b,icon:w,params:S,[r]:m})}else if(h.indexOf(`${d[r]}/`)===0){d.active=!0;let u=c(d[r]),b=Object.keys(u).map(E=>u[E]).join("/"),{name:w,title:S,icon:k}=d,R=b?`${m}/${b}`:d[r];g.push({name:w,title:S,icon:k,[r]:R,params:{...d.params,...u}})}else if(d[r]===h){d.active=!0;let u=c(d[r]),{[n]:b,...w}=d;g.push({...w,[r]:t,params:{...w.params,...o,...u}})}}return g},a=(i,h)=>{for(let g=0,m=i.length;g<m;g++){let p=i[g];if(h.indexOf(`${p[r]}/`)===0){p.active=!0;return}}},s=i=>{for(let h=0,g=i.length;h<g;h++){let m=i[h],p=(m[r]||"").split("?")[0];if(p===t){if(m.childSameRouteLevel){m.active=!0,m.open=!0;let{[n]:b,...w}=m;return[w,...s(m[n])]}m.hideMenu&&a(i,m.parentPath||p),m.active=!0;let{[n]:d,...u}=m;return[{...u,params:{...u.params,...o}}]}if(new RegExp("^"+p.replace(/:[^/]+/g,"[^/]+")+"$").test(t))return f(i,p);if(C(m[n])){let d=s(m[n]);if(d){m.active=!0,m.open=!0;let{[n]:u,...b}=m;return[b,...d]}}}},l=s(e)||[];return{result:e,current:l}},Fe=(e,t,o)=>e.filter(n=>n.hideMenu||n[o].indexOf("/:")>-1?!1:(C(n[t])&&(n[t]=Fe(n[t],t,o)),!0)),Lt=(e,t,o,n="children",r="path")=>{let c=Ne(e,t,n,r);if(c)return{redirect:c};let{result:f,current:a}=It(e,t,o,n,r),s=Fe(f,n,r);return{current:a,menu:s}},De=Lt;var Ht=e=>C(e)&&!!e.length,xe=Ht;var ie=(e,t)=>e?t?e:(e.startsWith("#")&&(e=`/${e}`),e.indexOf("/#/")>-1?e:`/#${e}`):["/#/","/"][!!t-0],H=(e,t,o,n=!1)=>{let r=ie(t,o);return n?r:`${e}/${r}`.replace(/\/+/g,"/")},qe=(e,t,o,n,r,c)=>{if(!xe(e))return e;let f=(a,s="",l=0)=>a.filter(i=>!i.denied).map(i=>{if(!c&&!i.exact&&!M(i[n])){(!i[n]||i[n]==="javascript:;")&&(i[n]="");let h=i[n].charAt(0)==="/"&&s.charAt(s.length-1)==="/"?i[n].slice(1):i[n].charAt(0)!=="/"&&s.charAt(s.length-1)!=="/"?`/${i[n]}`:i[n];i[n]=s?`${s}${h}`:H(r,h,t)}if(i.redirect&&!M(i.redirect)&&(i.redirect=H(r,i.redirect,t)),xe(i[o])&&(i[o]=f(i[o],i[n],l+1),!i.redirect)){let h=i[o].findIndex(g=>g[n]===i[n]);h&&(i.redirect=i[o][0][n]),h>-1&&(i.childSameRouteLevel=l+1)}return i});return f(e)};var jt=e=>{if(!y(e))return"";let t=[];return Object.keys(e).map((o,n)=>{let r=n>0?"&":"?",c=y(e[o])?JSON.stringify(e[o]):e[o];t.push(`${r}${o}=${c}`)}),t.join("")},ye=jt;var Ut=(e="")=>{let[t,o]=e.split("?");if(o){let n={};return o.split("&").map(c=>{let[f,a]=c.split("=");n[f]=a}),{path:t,params:n}}return{path:t}},ce=Ut;var Xe=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Ye=(e,t,o={})=>{let n=o.description??"";for(let r=e.length-1,c;c=e[r--];){let{title:f,name:a}=c;if(f?.length)return document.title=f,document.getElementsByTagName("meta").description.content=`${n??""}${f}`,f;if((f==null||f===!0)&&a){let s=t?`${a}-${t}`:a;return document.title=s,document.getElementsByTagName("meta").description.content=`${n??""}${s}`,s}if(t)return document.title=t,document.getElementsByTagName("meta").description.content=`${n??""}${t}`,t}},we=e=>e&&!["/","/#/"].includes(e)&&e.endsWith("/")?e.slice(0,-1):e,Ve=e=>{let{pathname:t,search:o,hash:n}=location;if(e){let s=ie(t,e),l=decodeURIComponent(`${s}${o}`),{params:i}=ce(l);return{path:we(l),params:i}}let r=decodeURIComponent(ie(n,e)),{params:c}=ce(r),a=`${ne(t)}/${r}`.replace(/\/+/g,"/");return{path:we(a),params:c}},ae=(e,t,o)=>{typeof e=="function"&&e({...t,stay:new Date-o})},Se=(e,t,o,n)=>{let r=typeof e=="string"?e:e.path??"",c=ye(e.query);M(r)||(r=H(o,r,n,e.exact)),window?.open(`${r}${c}`,t)},We=(e,t,o,n)=>{if(e.target||M(e.path)){Se(e,e.target,t,o);return}let r,c,f;if(typeof e=="string")r=e;else if(y(e))r=e.path,c=e.params,f=e.query;else return;!r||r==="."||r==="./"?r=n:r.indexOf("./")===0?r=`${n.split("?")[0]}${r.replace("./","/")}`:r.indexOf("../")===0&&(r=`${n.split("?")[0].split("/").slice(0,-1).join("/")}${r.replace("../","/")}`),r=H(t,r,o,e?.exact);let a=ce(r);r=we(a.path);let s={...a.params,...f},l=ye(s);return r=`${r}${l}`,c={...c,...s},r===n?!1:{path:r,params:c}},ke=(e,t)=>{let o=e.split(t);return o.length>1?["","/"].includes(o[1].slice(0,1)):!1};var Bt=O(),Nt=e=>{let{on:t,emit:o,off:n}=Bt;return{on:r=>t(e,r),emit:r=>o(e,r),off:r=>n(e,r)}},Ce=Nt;var Ft=(e=T())=>(t,o)=>{let{getState:n,setState:r,subscribe:c,unsubscribe:f,clean:a}=e;return o!==void 0&&r({[t]:o},!0),{getState:()=>n(t),setState:(s,l)=>r({[t]:s},l),subscribe:s=>c(t,s),unsubscribe:()=>f(t),clean:()=>a(t)}},fe=Ft;var Dt=T(),qt=fe(Dt),ze=qt;var z=Ce("push-emitter"),Re=Ce("replace-emitter"),v=ze("route-store"),Je=O(),Ge=T(Je),J=fe(Ge),Xt=oe(Ge);var Yt=()=>![typeof window,typeof document].includes("undefined"),Qe=Yt;var Vt=e=>{if(!Qe())return;let t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ze=Vt;import{Suspense as sr}from"react";import Wt from"react";var G=class extends Wt.Component{state={error:null};static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,o){let{errorReport:n}=this.props;typeof n=="function"&&n({error:t,info:o.componentStack})}componentDidUpdate(t,o){o.error&&this.setState({error:null})}render(){let{error:t}=this.state,{fallback:o,children:n}=this.props;return t?o?.(t)??t:n}};import{jsx as Jt}from"react/jsx-runtime";var zt=({children:e,report:t})=>Jt(G,{fallback:(o,n)=>N({error:o,info:n}),errorReport:t,children:e}),Ke=zt;if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let e=document.createElement("style");e.textContent=`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,document.head.appendChild(e),window.__HUXY__.add("cab66a")}import{jsx as et}from"react/jsx-runtime";var Gt=({global:e,absolute:t})=>et("div",{className:`spinner${e?" global":""}${t?" absolute":""}`,children:et("figure",{className:"spinning"})}),tt=Gt;import{useEffect as st}from"react";import{useState as tr,useRef as nt,useCallback as ot}from"react";import{useEffect as Qt,useRef as Zt,useCallback as Kt}from"react";var er=()=>{let e=Zt([]);return Qt(()=>()=>{e.current.map(t=>t.cancelFn()),e.current=[]},[]),Kt((t,o=!0)=>{let n=re(t,o);return e.current.indexOf(n)===-1&&e.current.push(n),n.promiseFn},[])},rt=er;var rr=(e={})=>{let t=rt(),[o,n]=tr({allPendding:!0,...e}),r=nt({}),c=nt({}),f=ot((s=null)=>{Array.isArray(s)&&s.length?s.map(l=>r.current[l]=e[l]):r.current=e},[]),a=ot((s,l,i=!1)=>{let h=Object.keys(s),g=JSON.stringify(h.sort());if(c.current[g])return;c.current[g]=!0,i&&f(Array.isArray(i)?i:h),h.map(p=>{r.current[p]||(r.current[p]={}),r.current[p].pending=!0}),n({...r.current,allPendding:!0});let m=0;for(let p=0,x=h.length;p<x;p++){let d=h[p];t(s[d]).then(u=>{let{result:b,errMsg:w}=u;m++,m===x&&(c.current[g]=!1),typeof l=="function"&&(b=l(b)||b),r.current[d]={...b,pending:!1},w===!1&&n({...r.current,allPendding:c.current[g]})}).catch(u=>{throw m++,m===x&&(c.current[g]=!1),r.current[d]={error:u,pending:!1},n({...r.current,allPendding:c.current[g]}),u})}},[]);return[o,a,f]},$e=rr;import{jsx as or}from"react/jsx-runtime";var le=e=>Object.keys(e).length,nr=e=>{let{Comp:t,restResolve:o,loadPromise:n,params:r,children:c}=e,[f,a]=$e(),[s,l]=$e();return st(()=>{le(o)&&a(o),le(n)&&l(n)},[o,n]),st(()=>{let i=le(f);i&&i===le(o)&&J.setState(f)},[f]),or(t,{...r,...f,...s,children:c})},it=nr;import{jsx as F}from"react/jsx-runtime";var ir=e=>e===!1?null:B(e)?e:V(e)?F(e,{}):F(tt,{}),cr=({Loading:e,ErrorBoundary:t,loadedComp:o})=>{let n=F(sr,{fallback:ir(e),children:o});return t===!1?n:V(t)?F(t,{children:n}):F(Ke,{children:n})},ar=({Comp:e,routerProps:t,children:o})=>{let{params:n,...r}=t,{loading:c,errorBoundary:f,...a}=n,s=F(it,{Comp:e,...r,params:a,children:o});return cr({Loading:c,ErrorBoundary:f,loadedComp:s})},ve=ar;var Pe={},Oe=(e,t,o,n)=>A(o)?o.then(r=>ve({Comp:e,routerProps:t,children:r.default??r})):ve({Comp:e,routerProps:t,children:o}),fr=(e,t)=>{let o={},n={};return y(e)?(Object.keys(e).map(r=>{let c=J.getState(r);c==null?n[r]=e[r](t):o[r]=c}),{cachedResolve:o,restResolve:n}):{cachedResolve:o,restResolve:n}},lr=(e,t)=>{if(!y(e))return{};let o={};return Object.keys(e).map(n=>o[n]=e[n](t)),o},pr=e=>{let{current:t,menu:o,...n}=e,r=t.map(a=>{let{component:s,resolve:l,loadData:i,loading:h,errorBoundary:g,icon:m,...p}=a;return p}),c=[...t].filter(a=>a.component),f=(a=0)=>{if(!c.length)return null;let s=c.shift(),{component:l,resolve:i,loadData:h,icon:g,key:m,...p}=s;if(typeof l=="function"||A(l)){let x=`${p.path}${p.childSameRouteLevel??""}`,d=Pe[x],{cachedResolve:u,restResolve:b}=fr(i,p),S={loadPromise:lr(h,p),restResolve:b,params:{current:r,...n,...p,...u}},k=f(a+1);if(d)return Oe(d,S,k,x);try{d=l(),d=B(d)?l:d}catch{d=l}return A(d)?d.then(R=>(d=R.default??R,Pe[x]=d,Oe(d,S,k,x))):(Pe[x]=d,Oe(d,S,k,x))}return typeof l=="string"?Ze(l):l};return f()},ct=pr;var mr=e=>{let[t,o]=Ee(e),[n,r]=Ee(),[c,f]=Ee(),a=ue(),s=ue(),l=ue(),i=ue(),h=()=>{typeof a.current=="function"&&(a.current({cancel:se.cancelMsg}),a.current=null)},g=pe(u=>{typeof u=="function"?o(b=>({...b,...u(b)})):y(u)&&o(b=>({...b,...u}))},[]),m=(u,b="pushState")=>{let{basepath:w,browserRouter:S}=i.current,k=l.current,R=We(u,w,S,k);if(!R)return;let{path:E,params:j}=R;d({inputPath:E,inputParams:j},()=>history[b](u?.state,"",E))},p=pe(u=>m(u),[]),x=pe(u=>m(u,"replaceState"),[]),d=pe(({inputPath:u="",inputParams:b={}},w)=>{let S=+new Date,{browserRouter:k,childKey:R,idKey:E,title:j,metas:Q,routers:Z,beforeRender:D,afterRender:q,basepath:X,allowedNotFound:P,...lt}=i.current;if(!u){let{path:$,params:I}=Ve(k);u=$,b={...b,...I}}let me=l.current;new Promise(($,I)=>{Z?.length||I("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),u!==l.current&&typeof D=="function"?D({path:u,params:b,prevPath:me},$,I):$()}).then($=>{if($===!1)return;let I=$?.path;if(I&&H(X,I,k)!==u){x($);return}s.current=s.current??u;let{redirect:U,current:Y,menu:pt}=De(L(Z),u.split("?")[0],b,R,E);if(U)return P&&U===W&&(typeof P=="boolean"||typeof P=="string"&&ke(s.current,P)||C(P)&&P.find(he=>ke(s.current,he)))||C(U)?void 0:U===W?x({path:U}):p({path:U,exact:!0});w?.(),u?.split("?")[0]!==l.current?.split("?")[0]&&Xe(),Ye(Y,j,Q);let Ae={...lt,updateRouter:g,router:{push:p,replace:x},current:Y,menu:pt,inputPath:s.current,prevPath:me,browserRouter:k,basepath:X,title:j,history:{...Be,goBack:K=>p({...K,path:me})}};v.setState(Ae);let de=ct(Ae);if(l.current=u,s.current=null,h(),A(de)){let{promiseFn:K,cancelFn:he}=re(de,{delay:se.delay,msg:{timeout:se.timeoutMsg}});return a.current=he,f(!0),K.then(ee=>{a.current=null;let{result:ut,errMsg:ge}=ee,Me=ge===!1?ut:ge?.timeout?N({error:{errMsg:`${u} ${ge.timeout}`}}):null;Me&&(f(!1),ae(q,Y.slice(-1)[0],S),r(Me))}).catch(ee=>{throw a.current=null,f(!1),ae(q,Y.slice(-1)[0],S),r(N({error:ee})),ee})}ae(q,Y.slice(-1)[0],S),r(de)}).catch($=>{throw r(N({error:$})),$})},[]);return ur(()=>{let u={description:document.getElementsByTagName("meta").description.content??""},{childKey:b="children",idKey:w="path",browserRouter:S=!1,routers:k=[],basepath:R="",exact:E=!1,inputPath:j="",inputParams:Q={},...Z}=t,D=ne(R),q=qe(L(k),S,b,w,D,E);i.current={...Z,childKey:b,idKey:w,browserRouter:S,routers:q,basepath:D,metas:u};let X=S?"popstate":"hashchange",P=()=>d({});return d({inputPath:j,inputParams:Q}),z.on(p),Re.on(x),window.addEventListener(X,P,!1),()=>{h(),z.off(p),Re.off(x),window.removeEventListener(X,P,!1)}},[t]),{updateRouter:g,output:n,loading:c}},dr=mr;var hr=e=>{let{to:t,onClick:o,preventDefault:n,stopPropagation:r=!0,exact:c=!0,target:f,disabled:a,...s}=e,l=typeof t=="string"?{exact:c,path:t,...s}:{exact:c,...t,...s},i=()=>{z.emit(l)};return g=>{if(g.preventDefault(),r&&g.stopPropagation(),!a){if(!n){if(f){let{browserRouter:m,basepath:p}=v.getState();Se(l,f,p,m);return}i()}typeof o=="function"&&o()}}},at=hr;if(typeof document<"u"&&!window.__HUXY__?.has("5c4655")){window.__HUXY__=window.__HUXY__||new Set;let e=document.createElement("style");e.textContent=`.hy-5c4655-link {
  text-decoration: none;
  cursor: pointer;
  color: var(--linkColor);
  background-color: transparent;
  font-weight: 500;
  transition: color 0.3s;
}
.hy-5c4655-link:active,
.hy-5c4655-link.hy-5c4655-active {
  color: var(--linkActiveColor, #42a5f5);
}
.hy-5c4655-link:hover {
  color: var(--linkHoverColor, #2196f3);
}
.hy-5c4655-link[disabled] {
  cursor: not-allowed;
  opacity: 0.7;
}
.hy-5c4655-link[disabled]:active,
.hy-5c4655-link[disabled].hy-5c4655-active,
.hy-5c4655-link[disabled]:hover {
  color: var(--linkColor);
}
`,document.head.appendChild(e),window.__HUXY__.add("5c4655")}var _e="hy-5c4655-link",ft="hy-5c4655-active";import{jsx as wr}from"react/jsx-runtime";var br=e=>{if(!e)return _e;let t=e.trim().split(" ").filter(Boolean),n=t.find(r=>r==="active")?[ft]:[];return[_e,...n,...t].join(" ")},xr=e=>{let{to:t,onClick:o,preventDefault:n,stopPropagation:r,exact:c,target:f,className:a,...s}=e;return wr("span",{onClick:at(e),className:br(a),...s})},yr=xr;import{useState as Sr,useEffect as kr}from"react";var Cr=()=>{let[e,t]=Sr(v.getState());return kr(()=>v.subscribe(o=>t(o)),[]),e},Rr=Cr;var us=v.getState,ms=v.subscribe;export{yr as Link,ms as emitRoute,us as getRoute,Je as huxyBus,J as huxyStore,Xt as useHuxyStore,Rr as useRoute,dr as useRouter};
