import{useState as Pt,useEffect as ur,useCallback as pt,useRef as ut}from"react";var me=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),_=me;var de=t=>_(t)==="array",C=de;var he=t=>_(t)==="object",y=he;var ge=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,B=ge;var be=t=>t?.__v_isVNode,Tt=be;var xe=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),et=xe;var It=t=>{if(!C(t)&&!y(t))return t;let e=C(t)?[]:{};for(let o in t)if(et(t,o)){let n=t[o];e[o]=B(n)||Tt(n)||typeof n!="object"?n:n!==t?It(n):"cyclic"}else Object.setPrototypeOf(e,{[o]:t[o]});return e},L=It;var ye=t=>_(t)==="function",V=ye;var we=t=>_(t)==="promise"||y(t)&&V(t.then),A=we;var ke=(t,e=12e4,o="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!A(t))return{};let n=null,r=null;return{promiseFn:new Promise((c,l)=>{n=(s="canceled")=>{clearTimeout(r),c({canceled:!0,errMsg:s})},e&&(e=typeof e!="number"?12e4:e,r=setTimeout(()=>n(o),e)),t.then(s=>{clearTimeout(r),c({result:s,errMsg:!1})}).catch(s=>{clearTimeout(r),l(s)})}),cancelFn:n}},rt=ke;var Se=t=>(t||"").length<2?"/":t.endsWith("/")?t.slice(0,-1):t,nt=Se;import{jsx as Re}from"react/jsx-runtime";var Ce=(t,e)=>Re("div",{dangerouslySetInnerHTML:{__html:t},...e}),Lt=Ce;import{jsxs as Ht}from"react/jsx-runtime";var ve=t=>{let{error:e={},info:o=""}=t||{},{message:n,stack:r,errMsg:a}=e,c=a||r||e.toString();c=`${c}
${o}`.replace(/\r|\n|\r\n/g,"<br/>"),c=c.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),c=c.replace(/\s/g,"&nbsp;");let l=n?.slice(0,120).split(". ").slice(0,2).join(". ");return Ht("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Lt(c,{style:{color:"red"}}),l&&Ht("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${l}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},F=ve;var $e=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),M=$e;var Ee=()=>{let t={};return{on:(r,a)=>{t[r]||(t[r]=[]),t[r].indexOf(a)===-1&&t[r].push(a)},emit:(r,a)=>{t[r]&&t[r].map(c=>c(a))},off:(r,a=null)=>{if(t[r]){if(typeof a!="function")return delete t[r];let c=t[r].indexOf(a);c>-1&&(t[r].splice(c,1),t[r].length||delete t[r])}}}},O=Ee;var jt=t=>{let e={};for(let o in t)et(t,o)||(e[o]=t[o]);return e},Oe=(t,e)=>{if(!y(t))return e;if(!y(e))return t;let o={...jt(t),...jt(e)},n={...t,...e};return Object.keys(o).map(r=>{Object.setPrototypeOf(n,{[r]:o[r]})}),n},Ut=Oe;var Pe=(t=O())=>{let{on:e,emit:o,off:n}=t,r={};return{getState:f=>L(r[f]),setState:(f,i=!1)=>{if(typeof f=="function"&&(f=f(L(r))),!y(f))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");let h=L(f);Object.keys(h).map(g=>{let p=r[g],m=h[g],x=y(m)&&y(p)?Ut(p,m):m;!i&&o(g,x),r[g]=x})},subscribe:(f,i)=>(e(f,i),()=>n(f,i)),unsubscribe:n,clean:f=>{typeof f=="string"?r[f]=void 0:Array.isArray(f)?f.map(i=>r[i]=void 0):Object.keys(r).map(i=>r[i]=void 0)}}},T=Pe;import{useState as _e,useEffect as Ae,useCallback as bt}from"react";var Me=t=>(e,o)=>{let[n,r]=_e(()=>{let s=t?.getState(e);return s!==void 0?s:(o!==void 0&&t?.setState({[e]:o},!0),o)}),a=bt(s=>t?.setState({[e]:typeof s=="function"?s(t?.getState(e)):s}),[]),c=bt(s=>t?.subscribe(e,s),[]),l=bt((s=s)=>t?.clean(s),[]);return Ae(()=>{t?.subscribe(e,s=>r(s))},[]),[n,a,c,l]},ot=Me;var Te=T(),hn=ot(Te),gn=O(),bn=O();var st={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},W="/404",Bt={getState:()=>history.state,go:t=>history.go(t),forward:()=>history.forward(),back:()=>history.back()};var Ft=(t,e,o,n,r=[])=>{let a=s=>{for(let f=0,i=s.length;f<i;f++){let h=s[f],g=h[n].split("?")[0];if(new RegExp("^"+g.replace(/:[^/]+/g,"[^/]+")+"$").test(e)&&!h.childSameRouteLevel)return h;if(C(h[o])){let m=a(h[o]);if(m)return m}}},c=a(t);if(!c)return W;let{redirect:l}=c;return l?M(l)?l:r.includes(l)?r:(r.push(l),Ft(t,l.split("?")[0],o,n,r)):r[r.length-1]},Ie=(t,e,o,n,r)=>{if(!C(t))return null;let a=i=>{let h=i.split("/"),g=e.split("/"),p={};return h.map((m,x)=>m.indexOf(":")===0&&(p[m.slice(1)]=g[x])),p},c=(i,h)=>{let g=[],p=h.split("/:")[0];for(let m=0,x=i.length;m<x;m++){let d=i[m];if(d[r]===p){d.active=!0;let{name:u,title:b,icon:k,params:w}=d;g.push({name:u,title:b,icon:k,params:w,[r]:p})}else if(h.indexOf(`${d[r]}/`)===0){d.active=!0;let u=a(d[r]),b=Object.keys(u).map(P=>u[P]).join("/"),{name:k,title:w,icon:S}=d,R=b?`${p}/${b}`:d[r];g.push({name:k,title:w,icon:S,[r]:R,params:{...d.params,...u}})}else if(d[r]===h){d.active=!0;let u=a(d[r]),{[n]:b,...k}=d;g.push({...k,[r]:e,params:{...k.params,...o,...u}})}}return g},l=(i,h)=>{for(let g=0,p=i.length;g<p;g++){let m=i[g];if(h.indexOf(`${m[r]}/`)===0){m.active=!0;return}}},s=i=>{for(let h=0,g=i.length;h<g;h++){let p=i[h],m=(p[r]||"").split("?")[0];if(m===e){if(p.childSameRouteLevel){p.active=!0,p.open=!0;let{[n]:b,...k}=p;return[k,...s(p[n])]}p.hideMenu&&l(i,p.parentPath||m),p.active=!0;let{[n]:d,...u}=p;return[{...u,params:{...u.params,...o}}]}if(new RegExp("^"+m.replace(/:[^/]+/g,"[^/]+")+"$").test(e))return c(i,m);if(C(p[n])){let d=s(p[n]);if(d){p.active=!0,p.open=!0;let{[n]:u,...b}=p;return[b,...d]}}}},f=s(t)||[];return{result:t,current:f}},Nt=(t,e,o)=>t.filter(n=>n.hideMenu||n[o].indexOf("/:")>-1?!1:(C(n[e])&&(n[e]=Nt(n[e],e,o)),!0)),Le=(t,e,o,n="children",r="path")=>{let a=Ft(t,e,n,r);if(a)return{redirect:a};let{result:c,current:l}=Ie(t,e,o,n,r),s=Nt(c,n,r);return{current:l,menu:s}},Dt=Le;var He=t=>C(t)&&!!t.length,xt=He;var it=(t,e)=>t?e?t:(t.startsWith("#")&&(t=`/${t}`),t.indexOf("/#/")>-1?t:`/#${t}`):["/#/","/"][!!e-0],H=(t,e,o,n=!1)=>{let r=it(e,o);return n?r:`${t}/${r}`.replace(/\/+/g,"/")},qt=(t,e,o,n,r,a)=>{if(!xt(t))return t;let c=(l,s="",f=0)=>l.filter(i=>!i.denied).map(i=>{if(!a&&!i.exact&&!M(i[n])){(!i[n]||i[n]==="javascript:;")&&(i[n]="");let h=i[n].charAt(0)==="/"&&s.charAt(s.length-1)==="/"?i[n].slice(1):i[n].charAt(0)!=="/"&&s.charAt(s.length-1)!=="/"?`/${i[n]}`:i[n];i[n]=s?`${s}${h}`:H(r,h,e)}if(i.redirect&&!M(i.redirect)&&(i.redirect=H(r,i.redirect,e)),xt(i[o])&&(i[o]=c(i[o],i[n],f+1),!i.redirect)){let h=i[o].findIndex(g=>g[n]===i[n]);h&&(i.redirect=i[o][0][n]),h>-1&&(i.childSameRouteLevel=f+1)}return i});return c(t)};var je=t=>{if(!y(t))return"";let e=[];return Object.keys(t).map((o,n)=>{let r=n>0?"&":"?";e.push(`${r}${o}=${t[o]}`)}),e.join("")},yt=je;var Ue=(t="")=>{let[e,o]=t.split("?");if(o){let n={};return o.split("&").map(a=>{let[c,l]=a.split("=");n[c]=l}),{path:e,params:n}}return{path:e}},ct=Ue;var Xt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Yt=(t,e,o={})=>{let n=o.description??"";for(let r=t.length-1,a;a=t[r--];){let{title:c,name:l}=a;if(c?.length)return document.title=c,document.getElementsByTagName("meta").description.content=`${n??""}${c}`,c;if((c==null||c===!0)&&l){let s=e?`${l}-${e}`:l;return document.title=s,document.getElementsByTagName("meta").description.content=`${n??""}${s}`,s}if(e)return document.title=e,document.getElementsByTagName("meta").description.content=`${n??""}${e}`,e}},wt=t=>t&&!["/","/#/"].includes(t)&&t.endsWith("/")?t.slice(0,-1):t,Vt=t=>{let{pathname:e,search:o,hash:n}=location;if(t){let s=it(e,t),f=decodeURIComponent(`${s}${o}`),{params:i}=ct(f);return{path:wt(f),params:i}}let r=decodeURIComponent(it(n,t)),{params:a}=ct(r),l=`${nt(e)}/${r}`.replace(/\/+/g,"/");return{path:wt(l),params:a}},at=(t,e,o)=>{typeof t=="function"&&t({...e,stay:new Date-o})},kt=(t,e,o,n)=>{let r=typeof t=="string"?t:t.path??"",a=yt(t.query);M(r)||(r=H(o,r,n,t.exact)),window?.open(`${r}${a}`,e)},Wt=(t,e,o,n)=>{if(t.target||M(t.path)){kt(t,t.target,e,o);return}let r,a,c;if(typeof t=="string")r=t;else if(y(t))r=t.path,a=t.params,c=t.query;else return;!r||r==="."||r==="./"?r=n:r.indexOf("./")===0?r=`${n.split("?")[0]}${r.replace("./","/")}`:r.indexOf("../")===0&&(r=`${n.split("?")[0].split("/").slice(0,-1).join("/")}${r.replace("../","/")}`),r=H(e,r,o,t?.exact);let l=ct(r);r=wt(l.path);let s={...l.params,...c},f=yt(s);return r=`${r}${f}`,a={...a,...s},r===n?!1:{path:r,params:a}},St=(t,e)=>{let o=t.split(e);return o.length>1?["","/"].includes(o[1].slice(0,1)):!1};var Be=O(),Fe=t=>{let{on:e,emit:o,off:n}=Be;return{on:r=>e(t,r),emit:r=>o(t,r),off:r=>n(t,r)}},Ct=Fe;var Ne=(t=T())=>(e,o)=>{let{getState:n,setState:r,subscribe:a,unsubscribe:c,clean:l}=t;return o!==void 0&&r({[e]:o},!0),{getState:()=>n(e),setState:(s,f)=>r({[e]:s},f),subscribe:s=>a(e,s),unsubscribe:()=>c(e),clean:()=>l(e)}},ft=Ne;var De=T(),qe=ft(De),zt=qe;var z=Ct("push-emitter"),Rt=Ct("replace-emitter"),$=zt("route-store"),Jt=O(),Gt=T(Jt),J=ft(Gt),Xe=ot(Gt);var Ye=()=>![typeof window,typeof document].includes("undefined"),Qt=Ye;var Ve=t=>{if(!Qt())return;let e=document.createElement("div");return e.innerHTML=t,e.children[0]},Zt=Ve;import{Suspense as sr}from"react";import We from"react";var G=class extends We.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,o){let{errorReport:n}=this.props;typeof n=="function"&&n({error:e,info:o.componentStack})}componentDidUpdate(e,o){o.error&&this.setState({error:null})}render(){let{error:e}=this.state,{fallback:o,children:n}=this.props;return e?o?.(e)??e:n}};import{jsx as Je}from"react/jsx-runtime";var ze=({children:t,report:e})=>Je(G,{fallback:(o,n)=>F({error:o,info:n}),errorReport:e,children:t}),Kt=ze;if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes before {
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
`,document.head.appendChild(t),window.__HUXY__.add("cab66a")}import{jsx as te}from"react/jsx-runtime";var Ge=({global:t,absolute:e})=>te("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:te("figure",{className:"spinning"})}),ee=Ge;import{useEffect as se}from"react";import{useState as er,useRef as ne,useCallback as oe}from"react";import{useEffect as Qe,useRef as Ze,useCallback as Ke}from"react";var tr=()=>{let t=Ze([]);return Qe(()=>()=>{t.current.map(e=>e.cancelFn()),t.current=[]},[]),Ke((e,o=!0)=>{let n=rt(e,o);return t.current.indexOf(n)===-1&&t.current.push(n),n.promiseFn},[])},re=tr;var rr=(t={})=>{let e=re(),[o,n]=er(t),r=ne({}),a=ne({}),c=oe((s=null)=>{Array.isArray(s)&&s.length?s.map(f=>r.current[f]=t[f]):r.current=t},[]),l=oe((s,f,i=!1)=>{let h=Object.keys(s),g=JSON.stringify(h.sort());if(!a.current[g]){a.current[g]=!0,i&&c(Array.isArray(i)?i:h),h.map(p=>{r.current[p]||(r.current[p]={}),r.current[p].pending=!0}),n({...r.current});for(let p=0,m=h.length;p<m;p++){let x=h[p];e(s[x]).then(d=>{let{result:u,errMsg:b}=d;p===m-1&&(a.current[g]=!1),typeof f=="function"&&(u=f(u)||u),r.current[x]={...u,pending:!1},b===!1&&n({...r.current})}).catch(d=>{throw p===m-1&&(a.current[g]=!1),r.current[x]={error:d,pending:!1},n({...r.current}),d})}}},[]);return[o,l,c]},vt=rr;import{jsx as or}from"react/jsx-runtime";var lt=t=>Object.keys(t).length,nr=t=>{let{Comp:e,restResolve:o,loadPromise:n,params:r,children:a}=t,[c,l]=vt(),[s,f]=vt();return se(()=>{lt(o)&&l(o),lt(n)&&f(n)},[o,n]),se(()=>{let i=lt(c);i&&i===lt(o)&&J.setState(c)},[c]),or(e,{...r,...c,...s,children:a})},ie=nr;import{jsx as N}from"react/jsx-runtime";var ir=t=>t===!1?null:B(t)?t:V(t)?N(t,{}):N(ee,{}),cr=({Loading:t,ErrorBoundary:e,loadedComp:o})=>{let n=N(sr,{fallback:ir(t),children:o});return e===!1?n:V(e)?N(e,{children:n}):N(Kt,{children:n})},ar=({Comp:t,routerProps:e,children:o})=>{let{params:n,...r}=e,{loading:a,errorBoundary:c,...l}=n,s=N(ie,{Comp:t,...r,params:l,children:o});return cr({Loading:a,ErrorBoundary:c,loadedComp:s})},$t=ar;var Et={},Ot=(t,e,o,n)=>A(o)?o.then(r=>$t({Comp:t,routerProps:e,children:r.default??r})):$t({Comp:t,routerProps:e,children:o}),fr=(t,e)=>{let o={},n={};return y(t)?(Object.keys(t).map(r=>{let a=J.getState(r);a==null?n[r]=t[r](e):o[r]=a}),{cachedResolve:o,restResolve:n}):{cachedResolve:o,restResolve:n}},lr=(t,e)=>{if(!y(t))return{};let o={};return Object.keys(t).map(n=>o[n]=t[n](e)),o},pr=t=>{let{current:e,menu:o,...n}=t,r=e.map(l=>{let{component:s,resolve:f,loadData:i,loading:h,errorBoundary:g,icon:p,...m}=l;return m}),a=[...e].filter(l=>l.component),c=(l=0)=>{if(!a.length)return null;let s=a.shift(),{component:f,resolve:i,loadData:h,icon:g,key:p,...m}=s;if(typeof f=="function"||A(f)){let x=`${m.path}${m.childSameRouteLevel??""}`,d=Et[x],{cachedResolve:u,restResolve:b}=fr(i,m),w={loadPromise:lr(h,m),restResolve:b,params:{current:r,...n,...m,...u}},S=c(l+1);if(d)return Ot(d,w,S,x);try{d=f(),d=B(d)?f:d}catch{d=f}return A(d)?d.then(R=>(d=R.default??R,Et[x]=d,Ot(d,w,S,x))):(Et[x]=d,Ot(d,w,S,x))}return typeof f=="string"?Zt(f):f};return c()},ce=pr;var mr=t=>{let[e,o]=Pt(t),[n,r]=Pt(),[a,c]=Pt(),l=ut(),s=ut(),f=ut(),i=ut(),h=()=>{typeof l.current=="function"&&(l.current({cancel:st.cancelMsg}),l.current=null)},g=pt(u=>{typeof u=="function"?o(b=>({...b,...u(b)})):y(u)&&o(b=>({...b,...u}))},[]),p=(u,b="pushState")=>{let{basepath:k,browserRouter:w}=i.current,S=f.current,R=Wt(u,k,w,S);if(!R)return;let{path:P,params:j}=R;d({inputPath:P,inputParams:j},()=>history[b](u?.state,"",P))},m=pt(u=>p(u),[]),x=pt(u=>p(u,"replaceState"),[]),d=pt(({inputPath:u="",inputParams:b={}},k)=>{let w=+new Date,{browserRouter:S,childKey:R,idKey:P,title:j,metas:Q,routers:Z,beforeRender:D,afterRender:q,basepath:X,allowedNotFound:E,...le}=i.current;if(!u){let{path:v,params:I}=Vt(S);u=v,b={...b,...I}}let mt=f.current;new Promise((v,I)=>{Z?.length||I("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),u!==f.current&&typeof D=="function"?D({path:u,params:b,prevPath:mt},v,I):v()}).then(v=>{if(v===!1)return;let I=v?.path;if(I&&H(X,I,S)!==u){x(v);return}s.current=s.current??u;let{redirect:U,current:Y,menu:pe}=Dt(L(Z),u.split("?")[0],b,R,P);if(U)return E&&U===W&&(typeof E=="boolean"||typeof E=="string"&&St(s.current,E)||C(E)&&E.find(ht=>St(s.current,ht)))||C(U)?void 0:U===W?x({path:U}):m({path:U,exact:!0});k?.(),u?.split("?")[0]!==f.current?.split("?")[0]&&Xt(),Yt(Y,j,Q);let At={...le,updateRouter:g,router:{push:m,replace:x},current:Y,menu:pe,inputPath:s.current,prevPath:mt,browserRouter:S,basepath:X,title:j,history:{...Bt,goBack:K=>m({...K,path:mt})}};$.setState(At);let dt=ce(At);if(f.current=u,s.current=null,h(),A(dt)){let{promiseFn:K,cancelFn:ht}=rt(dt,{delay:st.delay,msg:{timeout:st.timeoutMsg}});return l.current=ht,c(!0),K.then(tt=>{l.current=null;let{result:ue,errMsg:gt}=tt,Mt=gt===!1?ue:gt?.timeout?F({error:{errMsg:`${u} ${gt.timeout}`}}):null;Mt&&(c(!1),at(q,Y.slice(-1)[0],w),r(Mt))}).catch(tt=>{throw l.current=null,c(!1),at(q,Y.slice(-1)[0],w),r(F({error:tt})),tt})}at(q,Y.slice(-1)[0],w),r(dt)}).catch(v=>{throw r(F({error:v})),v})},[]);return ur(()=>{let u={description:document.getElementsByTagName("meta").description.content??""},{childKey:b="children",idKey:k="path",browserRouter:w=!1,routers:S=[],basepath:R="",exact:P=!1,inputPath:j="",inputParams:Q={},...Z}=e,D=nt(R),q=qt(L(S),w,b,k,D,P);i.current={...Z,childKey:b,idKey:k,browserRouter:w,routers:q,basepath:D,metas:u};let X=w?"popstate":"hashchange",E=()=>d({});return d({inputPath:j,inputParams:Q}),z.on(m),Rt.on(x),window.addEventListener(X,E,!1),()=>{h(),z.off(m),Rt.off(x),window.removeEventListener(X,E,!1)}},[e]),{updateRouter:g,output:n,loading:a}},dr=mr;var hr=t=>{let{to:e,onClick:o,preventDefault:n,stopPropagation:r=!0,exact:a=!0,target:c,disabled:l,...s}=t,f=typeof e=="string"?{exact:a,path:e,...s}:{exact:a,...e,...s},i=()=>{z.emit(f)};return g=>{if(g.preventDefault(),r&&g.stopPropagation(),!l){if(!n){if(c){let{browserRouter:p,basepath:m}=$.getState();kt(f,c,m,p);return}i()}typeof o=="function"&&o()}}},ae=hr;if(typeof document<"u"&&!window.__HUXY__?.has("5c4655")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-5c4655-link {
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
`,document.head.appendChild(t),window.__HUXY__.add("5c4655")}var _t="hy-5c4655-link",fe="hy-5c4655-active";import{jsx as wr}from"react/jsx-runtime";var br=t=>{if(!t)return _t;let e=t.trim().split(" ").filter(Boolean),n=e.find(r=>r==="active")?[fe]:[];return[_t,...n,...e].join(" ")},xr=t=>{let{to:e,onClick:o,preventDefault:n,stopPropagation:r,exact:a,target:c,className:l,...s}=t;return wr("span",{onClick:ae(t),className:br(l),...s})},yr=xr;import{useState as kr,useEffect as Sr}from"react";var Cr=()=>{let[t,e]=kr($.getState());return Sr(()=>$.subscribe(o=>e(o)),[]),t},Rr=Cr;var us=$.getState,ms=$.subscribe;export{yr as Link,ms as emitRoute,us as getRoute,Jt as huxyBus,J as huxyStore,Xe as useHuxyStore,Rr as useRoute,dr as useRouter};
