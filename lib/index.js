import{useState as Pt,useEffect as ur,useCallback as pt,useRef as ut}from"react";var me=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),_=me;var de=t=>_(t)==="array",C=de;var he=t=>_(t)==="object",y=he;var ge=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,B=ge;var be=t=>t?.__v_isVNode,Tt=be;var xe=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),et=xe;var It=t=>{if(!C(t)&&!y(t))return t;let e=C(t)?[]:{};for(let o in t)if(et(t,o)){let n=t[o];e[o]=B(n)||Tt(n)||typeof n!="object"?n:n!==t?It(n):"cyclic"}else Object.setPrototypeOf(e,{[o]:t[o]});return e},L=It;var ye=t=>_(t)==="function",V=ye;var we=t=>_(t)==="promise"||y(t)&&V(t.then),A=we;var Se=(t,e=12e4,o="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!A(t))return{};let n=null,r=null;return{promiseFn:new Promise((f,a)=>{n=(s="canceled")=>{clearTimeout(r),f({canceled:!0,errMsg:s})},e&&(e=typeof e!="number"?12e4:e,r=setTimeout(()=>n(o),e)),t.then(s=>{clearTimeout(r),f({result:s,errMsg:!1})}).catch(s=>{clearTimeout(r),a(s)})}),cancelFn:n}},rt=Se;var ke=t=>(t||"").length<2?"/":t.endsWith("/")?t.slice(0,-1):t,nt=ke;import{jsx as Re}from"react/jsx-runtime";var Ce=(t,e)=>Re("div",{dangerouslySetInnerHTML:{__html:t},...e}),Lt=Ce;import{jsxs as Ht}from"react/jsx-runtime";var $e=t=>{let{error:e={},info:o="",searchUrl:n="https://google.com/search?q="}=t||{},{message:r,stack:c,errMsg:f}=e,a=f||c||e.toString();a=`${a}
${o}`.replace(/\r|\n|\r\n/g,"<br/>"),a=a.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),a=a.replace(/\s/g,"&nbsp;");let s=r?.slice(0,120).split(". ").slice(0,2).join(". ");return Ht("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Lt(a,{style:{color:"red"}}),s&&Ht("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`${n}${s}&udm=50`,target:"_blank",children:[" ","--> \u53BB\u95EE AI \uFF1F"]})]})},N=$e;var ve=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),M=ve;var Oe=()=>{let t={};return{on:(r,c)=>{t[r]||(t[r]=[]),t[r].indexOf(c)===-1&&t[r].push(c)},emit:(r,c)=>{t[r]&&t[r].map(f=>f(c))},off:(r,c=null)=>{if(t[r]){if(typeof c!="function")return delete t[r];let f=t[r].indexOf(c);f>-1&&(t[r].splice(f,1),t[r].length||delete t[r])}}}},E=Oe;var jt=t=>{let e={};for(let o in t)et(t,o)||(e[o]=t[o]);return e},Ee=(t,e)=>{if(!y(t))return e;if(!y(e))return t;let o={...jt(t),...jt(e)},n={...t,...e};return Object.keys(o).map(r=>{Object.setPrototypeOf(n,{[r]:o[r]})}),n},Ut=Ee;var Pe=(t=E())=>{let{on:e,emit:o,off:n}=t,r={};return{getState:l=>L(r[l]),setState:(l,i=!1)=>{if(typeof l=="function"&&(l=l(L(r))),!y(l))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");let h=L(l);Object.keys(h).map(g=>{let p=r[g],m=h[g],x=y(m)&&y(p)?Ut(p,m):m;!i&&o(g,x),r[g]=x})},subscribe:(l,i)=>(e(l,i),()=>n(l,i)),unsubscribe:n,clean:l=>{typeof l=="string"?r[l]=void 0:Array.isArray(l)?l.map(i=>r[i]=void 0):Object.keys(r).map(i=>r[i]=void 0)}}},T=Pe;import{useState as _e,useEffect as Ae,useCallback as bt}from"react";var Me=t=>(e,o)=>{let[n,r]=_e(()=>{let s=t?.getState(e);return s!==void 0?s:(o!==void 0&&t?.setState({[e]:o},!0),o)}),c=bt(s=>t?.setState({[e]:typeof s=="function"?s(t?.getState(e)):s}),[]),f=bt(s=>t?.subscribe(e,s),[]),a=bt((s=s)=>t?.clean(s),[]);return Ae(()=>{t?.subscribe(e,s=>r(s))},[]),[n,c,f,a]},ot=Me;var Te=T(),hn=ot(Te),gn=E(),bn=E();var st={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},W="/404",Bt={getState:()=>history.state,go:t=>history.go(t),forward:()=>history.forward(),back:()=>history.back()};var Nt=(t,e,o,n,r=[])=>{let c=s=>{for(let l=0,i=s.length;l<i;l++){let h=s[l],g=h[n].split("?")[0];if(new RegExp("^"+g.replace(/:[^/]+/g,"[^/]+")+"$").test(e)&&!h.childSameRouteLevel)return h;if(C(h[o])){let m=c(h[o]);if(m)return m}}},f=c(t);if(!f)return W;let{redirect:a}=f;return a?M(a)?a:r.includes(a)?r:(r.push(a),Nt(t,a.split("?")[0],o,n,r)):r[r.length-1]},Ie=(t,e,o,n,r)=>{if(!C(t))return null;let c=i=>{let h=i.split("/"),g=e.split("/"),p={};return h.map((m,x)=>m.indexOf(":")===0&&(p[m.slice(1)]=g[x])),p},f=(i,h)=>{let g=[],p=h.split("/:")[0];for(let m=0,x=i.length;m<x;m++){let d=i[m];if(d[r]===p){d.active=!0;let{name:u,title:b,icon:S,params:w}=d;g.push({name:u,title:b,icon:S,params:w,[r]:p})}else if(h.indexOf(`${d[r]}/`)===0){d.active=!0;let u=c(d[r]),b=Object.keys(u).map(P=>u[P]).join("/"),{name:S,title:w,icon:k}=d,R=b?`${p}/${b}`:d[r];g.push({name:S,title:w,icon:k,[r]:R,params:{...d.params,...u}})}else if(d[r]===h){d.active=!0;let u=c(d[r]),{[n]:b,...S}=d;g.push({...S,[r]:e,params:{...S.params,...o,...u}})}}return g},a=(i,h)=>{for(let g=0,p=i.length;g<p;g++){let m=i[g];if(h.indexOf(`${m[r]}/`)===0){m.active=!0;return}}},s=i=>{for(let h=0,g=i.length;h<g;h++){let p=i[h],m=(p[r]||"").split("?")[0];if(m===e){if(p.childSameRouteLevel){p.active=!0,p.open=!0;let{[n]:b,...S}=p;return[S,...s(p[n])]}p.hideMenu&&a(i,p.parentPath||m),p.active=!0;let{[n]:d,...u}=p;return[{...u,params:{...u.params,...o}}]}if(new RegExp("^"+m.replace(/:[^/]+/g,"[^/]+")+"$").test(e))return f(i,m);if(C(p[n])){let d=s(p[n]);if(d){p.active=!0,p.open=!0;let{[n]:u,...b}=p;return[b,...d]}}}},l=s(t)||[];return{result:t,current:l}},Ft=(t,e,o)=>t.filter(n=>n.hideMenu||n[o].indexOf("/:")>-1?!1:(C(n[e])&&(n[e]=Ft(n[e],e,o)),!0)),Le=(t,e,o,n="children",r="path")=>{let c=Nt(t,e,n,r);if(c)return{redirect:c};let{result:f,current:a}=Ie(t,e,o,n,r),s=Ft(f,n,r);return{current:a,menu:s}},Dt=Le;var He=t=>C(t)&&!!t.length,xt=He;var it=(t,e)=>t?e?t:(t.startsWith("#")&&(t=`/${t}`),t.indexOf("/#/")>-1?t:`/#${t}`):["/#/","/"][!!e-0],H=(t,e,o,n=!1)=>{let r=it(e,o);return n?r:`${t}/${r}`.replace(/\/+/g,"/")},qt=(t,e,o,n,r,c)=>{if(!xt(t))return t;let f=(a,s="",l=0)=>a.filter(i=>!i.denied).map(i=>{if(!c&&!i.exact&&!M(i[n])){(!i[n]||i[n]==="javascript:;")&&(i[n]="");let h=i[n].charAt(0)==="/"&&s.charAt(s.length-1)==="/"?i[n].slice(1):i[n].charAt(0)!=="/"&&s.charAt(s.length-1)!=="/"?`/${i[n]}`:i[n];i[n]=s?`${s}${h}`:H(r,h,e)}if(i.redirect&&!M(i.redirect)&&(i.redirect=H(r,i.redirect,e)),xt(i[o])&&(i[o]=f(i[o],i[n],l+1),!i.redirect)){let h=i[o].findIndex(g=>g[n]===i[n]);h&&(i.redirect=i[o][0][n]),h>-1&&(i.childSameRouteLevel=l+1)}return i});return f(t)};var je=t=>{if(!y(t))return"";let e=[];return Object.keys(t).map((o,n)=>{let r=n>0?"&":"?",c=y(t[o])?JSON.stringify(t[o]):t[o];e.push(`${r}${o}=${c}`)}),e.join("")},yt=je;var Ue=(t="")=>{let[e,o]=t.split("?");if(o){let n={};return o.split("&").map(c=>{let[f,a]=c.split("=");n[f]=a}),{path:e,params:n}}return{path:e}},ct=Ue;var Xt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Yt=(t,e,o={})=>{let n=o.description??"";for(let r=t.length-1,c;c=t[r--];){let{title:f,name:a}=c;if(f?.length)return document.title=f,document.getElementsByTagName("meta").description.content=`${n??""}${f}`,f;if((f==null||f===!0)&&a){let s=e?`${a}-${e}`:a;return document.title=s,document.getElementsByTagName("meta").description.content=`${n??""}${s}`,s}if(e)return document.title=e,document.getElementsByTagName("meta").description.content=`${n??""}${e}`,e}},wt=t=>t&&!["/","/#/"].includes(t)&&t.endsWith("/")?t.slice(0,-1):t,Vt=t=>{let{pathname:e,search:o,hash:n}=location;if(t){let s=it(e,t),l=decodeURIComponent(`${s}${o}`),{params:i}=ct(l);return{path:wt(l),params:i}}let r=decodeURIComponent(it(n,t)),{params:c}=ct(r),a=`${nt(e)}/${r}`.replace(/\/+/g,"/");return{path:wt(a),params:c}},at=(t,e,o)=>{typeof t=="function"&&t({...e,stay:new Date-o})},St=(t,e,o,n)=>{let r=typeof t=="string"?t:t.path??"",c=yt(t.query);M(r)||(r=H(o,r,n,t.exact)),window?.open(`${r}${c}`,e)},Wt=(t,e,o,n)=>{if(t.target||M(t.path)){St(t,t.target,e,o);return}let r,c,f;if(typeof t=="string")r=t;else if(y(t))r=t.path,c=t.params,f=t.query;else return;!r||r==="."||r==="./"?r=n:r.indexOf("./")===0?r=`${n.split("?")[0]}${r.replace("./","/")}`:r.indexOf("../")===0&&(r=`${n.split("?")[0].split("/").slice(0,-1).join("/")}${r.replace("../","/")}`),r=H(e,r,o,t?.exact);let a=ct(r);r=wt(a.path);let s={...a.params,...f},l=yt(s);return r=`${r}${l}`,c={...c,...s},r===n?!1:{path:r,params:c}},kt=(t,e)=>{let o=t.split(e);return o.length>1?["","/"].includes(o[1].slice(0,1)):!1};var Be=E(),Ne=t=>{let{on:e,emit:o,off:n}=Be;return{on:r=>e(t,r),emit:r=>o(t,r),off:r=>n(t,r)}},Ct=Ne;var Fe=(t=T())=>(e,o)=>{let{getState:n,setState:r,subscribe:c,unsubscribe:f,clean:a}=t;return o!==void 0&&r({[e]:o},!0),{getState:()=>n(e),setState:(s,l)=>r({[e]:s},l),subscribe:s=>c(e,s),unsubscribe:()=>f(e),clean:()=>a(e)}},ft=Fe;var De=T(),qe=ft(De),zt=qe;var z=Ct("push-emitter"),Rt=Ct("replace-emitter"),v=zt("route-store"),Jt=E(),Gt=T(Jt),J=ft(Gt),Xe=ot(Gt);var Ye=()=>![typeof window,typeof document].includes("undefined"),Qt=Ye;var Ve=t=>{if(!Qt())return;let e=document.createElement("div");return e.innerHTML=t,e.children[0]},Zt=Ve;import{Suspense as sr}from"react";import We from"react";var G=class extends We.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,o){let{errorReport:n}=this.props;typeof n=="function"&&n({error:e,info:o.componentStack})}componentDidUpdate(e,o){o.error&&this.setState({error:null})}render(){let{error:e}=this.state,{fallback:o,children:n}=this.props;return e?o?.(e)??e:n}};import{jsx as Je}from"react/jsx-runtime";var ze=({children:t,report:e})=>Je(G,{fallback:(o,n)=>N({error:o,info:n}),errorReport:e,children:t}),Kt=ze;if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes before {
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
`,document.head.appendChild(t),window.__HUXY__.add("cab66a")}import{jsx as te}from"react/jsx-runtime";var Ge=({global:t,absolute:e})=>te("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:te("figure",{className:"spinning"})}),ee=Ge;import{useEffect as se}from"react";import{useState as er,useRef as ne,useCallback as oe}from"react";import{useEffect as Qe,useRef as Ze,useCallback as Ke}from"react";var tr=()=>{let t=Ze([]);return Qe(()=>()=>{t.current.map(e=>e.cancelFn()),t.current=[]},[]),Ke((e,o=!0)=>{let n=rt(e,o);return t.current.indexOf(n)===-1&&t.current.push(n),n.promiseFn},[])},re=tr;var rr=(t={})=>{let e=re(),[o,n]=er(t),r=ne({}),c=ne({}),f=oe((s=null)=>{Array.isArray(s)&&s.length?s.map(l=>r.current[l]=t[l]):r.current=t},[]),a=oe((s,l,i=!1)=>{let h=Object.keys(s),g=JSON.stringify(h.sort());if(!c.current[g]){c.current[g]=!0,i&&f(Array.isArray(i)?i:h),h.map(p=>{r.current[p]||(r.current[p]={}),r.current[p].pending=!0}),n({...r.current});for(let p=0,m=h.length;p<m;p++){let x=h[p];e(s[x]).then(d=>{let{result:u,errMsg:b}=d;p===m-1&&(c.current[g]=!1),typeof l=="function"&&(u=l(u)||u),r.current[x]={...u,pending:!1},b===!1&&n({...r.current})}).catch(d=>{throw p===m-1&&(c.current[g]=!1),r.current[x]={error:d,pending:!1},n({...r.current}),d})}}},[]);return[o,a,f]},$t=rr;import{jsx as or}from"react/jsx-runtime";var lt=t=>Object.keys(t).length,nr=t=>{let{Comp:e,restResolve:o,loadPromise:n,params:r,children:c}=t,[f,a]=$t(),[s,l]=$t();return se(()=>{lt(o)&&a(o),lt(n)&&l(n)},[o,n]),se(()=>{let i=lt(f);i&&i===lt(o)&&J.setState(f)},[f]),or(e,{...r,...f,...s,children:c})},ie=nr;import{jsx as F}from"react/jsx-runtime";var ir=t=>t===!1?null:B(t)?t:V(t)?F(t,{}):F(ee,{}),cr=({Loading:t,ErrorBoundary:e,loadedComp:o})=>{let n=F(sr,{fallback:ir(t),children:o});return e===!1?n:V(e)?F(e,{children:n}):F(Kt,{children:n})},ar=({Comp:t,routerProps:e,children:o})=>{let{params:n,...r}=e,{loading:c,errorBoundary:f,...a}=n,s=F(ie,{Comp:t,...r,params:a,children:o});return cr({Loading:c,ErrorBoundary:f,loadedComp:s})},vt=ar;var Ot={},Et=(t,e,o,n)=>A(o)?o.then(r=>vt({Comp:t,routerProps:e,children:r.default??r})):vt({Comp:t,routerProps:e,children:o}),fr=(t,e)=>{let o={},n={};return y(t)?(Object.keys(t).map(r=>{let c=J.getState(r);c==null?n[r]=t[r](e):o[r]=c}),{cachedResolve:o,restResolve:n}):{cachedResolve:o,restResolve:n}},lr=(t,e)=>{if(!y(t))return{};let o={};return Object.keys(t).map(n=>o[n]=t[n](e)),o},pr=t=>{let{current:e,menu:o,...n}=t,r=e.map(a=>{let{component:s,resolve:l,loadData:i,loading:h,errorBoundary:g,icon:p,...m}=a;return m}),c=[...e].filter(a=>a.component),f=(a=0)=>{if(!c.length)return null;let s=c.shift(),{component:l,resolve:i,loadData:h,icon:g,key:p,...m}=s;if(typeof l=="function"||A(l)){let x=`${m.path}${m.childSameRouteLevel??""}`,d=Ot[x],{cachedResolve:u,restResolve:b}=fr(i,m),w={loadPromise:lr(h,m),restResolve:b,params:{current:r,...n,...m,...u}},k=f(a+1);if(d)return Et(d,w,k,x);try{d=l(),d=B(d)?l:d}catch{d=l}return A(d)?d.then(R=>(d=R.default??R,Ot[x]=d,Et(d,w,k,x))):(Ot[x]=d,Et(d,w,k,x))}return typeof l=="string"?Zt(l):l};return f()},ce=pr;var mr=t=>{let[e,o]=Pt(t),[n,r]=Pt(),[c,f]=Pt(),a=ut(),s=ut(),l=ut(),i=ut(),h=()=>{typeof a.current=="function"&&(a.current({cancel:st.cancelMsg}),a.current=null)},g=pt(u=>{typeof u=="function"?o(b=>({...b,...u(b)})):y(u)&&o(b=>({...b,...u}))},[]),p=(u,b="pushState")=>{let{basepath:S,browserRouter:w}=i.current,k=l.current,R=Wt(u,S,w,k);if(!R)return;let{path:P,params:j}=R;d({inputPath:P,inputParams:j},()=>history[b](u?.state,"",P))},m=pt(u=>p(u),[]),x=pt(u=>p(u,"replaceState"),[]),d=pt(({inputPath:u="",inputParams:b={}},S)=>{let w=+new Date,{browserRouter:k,childKey:R,idKey:P,title:j,metas:Q,routers:Z,beforeRender:D,afterRender:q,basepath:X,allowedNotFound:O,...le}=i.current;if(!u){let{path:$,params:I}=Vt(k);u=$,b={...b,...I}}let mt=l.current;new Promise(($,I)=>{Z?.length||I("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),u!==l.current&&typeof D=="function"?D({path:u,params:b,prevPath:mt},$,I):$()}).then($=>{if($===!1)return;let I=$?.path;if(I&&H(X,I,k)!==u){x($);return}s.current=s.current??u;let{redirect:U,current:Y,menu:pe}=Dt(L(Z),u.split("?")[0],b,R,P);if(U)return O&&U===W&&(typeof O=="boolean"||typeof O=="string"&&kt(s.current,O)||C(O)&&O.find(ht=>kt(s.current,ht)))||C(U)?void 0:U===W?x({path:U}):m({path:U,exact:!0});S?.(),u?.split("?")[0]!==l.current?.split("?")[0]&&Xt(),Yt(Y,j,Q);let At={...le,updateRouter:g,router:{push:m,replace:x},current:Y,menu:pe,inputPath:s.current,prevPath:mt,browserRouter:k,basepath:X,title:j,history:{...Bt,goBack:K=>m({...K,path:mt})}};v.setState(At);let dt=ce(At);if(l.current=u,s.current=null,h(),A(dt)){let{promiseFn:K,cancelFn:ht}=rt(dt,{delay:st.delay,msg:{timeout:st.timeoutMsg}});return a.current=ht,f(!0),K.then(tt=>{a.current=null;let{result:ue,errMsg:gt}=tt,Mt=gt===!1?ue:gt?.timeout?N({error:{errMsg:`${u} ${gt.timeout}`}}):null;Mt&&(f(!1),at(q,Y.slice(-1)[0],w),r(Mt))}).catch(tt=>{throw a.current=null,f(!1),at(q,Y.slice(-1)[0],w),r(N({error:tt})),tt})}at(q,Y.slice(-1)[0],w),r(dt)}).catch($=>{throw r(N({error:$})),$})},[]);return ur(()=>{let u={description:document.getElementsByTagName("meta").description.content??""},{childKey:b="children",idKey:S="path",browserRouter:w=!1,routers:k=[],basepath:R="",exact:P=!1,inputPath:j="",inputParams:Q={},...Z}=e,D=nt(R),q=qt(L(k),w,b,S,D,P);i.current={...Z,childKey:b,idKey:S,browserRouter:w,routers:q,basepath:D,metas:u};let X=w?"popstate":"hashchange",O=()=>d({});return d({inputPath:j,inputParams:Q}),z.on(m),Rt.on(x),window.addEventListener(X,O,!1),()=>{h(),z.off(m),Rt.off(x),window.removeEventListener(X,O,!1)}},[e]),{updateRouter:g,output:n,loading:c}},dr=mr;var hr=t=>{let{to:e,onClick:o,preventDefault:n,stopPropagation:r=!0,exact:c=!0,target:f,disabled:a,...s}=t,l=typeof e=="string"?{exact:c,path:e,...s}:{exact:c,...e,...s},i=()=>{z.emit(l)};return g=>{if(g.preventDefault(),r&&g.stopPropagation(),!a){if(!n){if(f){let{browserRouter:p,basepath:m}=v.getState();St(l,f,m,p);return}i()}typeof o=="function"&&o()}}},ae=hr;if(typeof document<"u"&&!window.__HUXY__?.has("5c4655")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-5c4655-link {
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
`,document.head.appendChild(t),window.__HUXY__.add("5c4655")}var _t="hy-5c4655-link",fe="hy-5c4655-active";import{jsx as wr}from"react/jsx-runtime";var br=t=>{if(!t)return _t;let e=t.trim().split(" ").filter(Boolean),n=e.find(r=>r==="active")?[fe]:[];return[_t,...n,...e].join(" ")},xr=t=>{let{to:e,onClick:o,preventDefault:n,stopPropagation:r,exact:c,target:f,className:a,...s}=t;return wr("span",{onClick:ae(t),className:br(a),...s})},yr=xr;import{useState as Sr,useEffect as kr}from"react";var Cr=()=>{let[t,e]=Sr(v.getState());return kr(()=>v.subscribe(o=>e(o)),[]),t},Rr=Cr;var us=v.getState,ms=v.subscribe;export{yr as Link,ms as emitRoute,us as getRoute,Jt as huxyBus,J as huxyStore,Xe as useHuxyStore,Rr as useRoute,dr as useRouter};
