import{useState as Et,useEffect as lr,useCallback as lt,useRef as ut}from"react";var ue=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),_=ue;var me=t=>_(t)==="array",C=me;var de=t=>_(t)==="object",y=de;var he=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,B=he;var ge=t=>t?.__v_isVNode,Mt=ge;var be=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),et=be;var Tt=t=>{if(!C(t)&&!y(t))return t;let e=C(t)?[]:{};for(let o in t)if(et(t,o)){let n=t[o];e[o]=B(n)||Mt(n)||typeof n!="object"?n:n!==t?Tt(n):"cyclic"}else Object.setPrototypeOf(e,{[o]:t[o]});return e},L=Tt;var xe=t=>_(t)==="function",V=xe;var ye=t=>_(t)==="promise"||y(t)&&V(t.then),A=ye;var we=(t,e=12e4,o="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!A(t))return{};let n=null,r=null;return{promiseFn:new Promise((c,p)=>{n=(s="canceled")=>{clearTimeout(r),c({canceled:!0,errMsg:s})},e&&(e=typeof e!="number"?12e4:e,r=setTimeout(()=>n(o),e)),t.then(s=>{clearTimeout(r),c({result:s,errMsg:!1})}).catch(s=>{clearTimeout(r),p(s)})}),cancelFn:n}},rt=we;var ke=t=>(t||"").length<2?"/":t.endsWith("/")?t.slice(0,-1):t,nt=ke;import{jsx as Ce}from"react/jsx-runtime";var Se=(t,e)=>Ce("div",{dangerouslySetInnerHTML:{__html:t},...e}),It=Se;import{jsxs as Lt}from"react/jsx-runtime";var Re=t=>{let{error:e={},info:o=""}=t||{},{message:n,stack:r,errMsg:a}=e,c=a||r||e.toString();c=`${c}
${o}`.replace(/\r|\n|\r\n/g,"<br/>"),c=c.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),c=c.replace(/\s/g,"&nbsp;");let p=n?.slice(0,120).split(". ").slice(0,2).join(". ");return Lt("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[It(c,{style:{color:"red"}}),p&&Lt("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${p}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},F=Re;var ve=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),M=ve;var $e=()=>{let t={};return{on:(r,a)=>{t[r]||(t[r]=[]),t[r].indexOf(a)===-1&&t[r].push(a)},emit:(r,a)=>{t[r]&&t[r].map(c=>c(a))},off:(r,a=null)=>{if(t[r]){if(typeof a!="function")return delete t[r];let c=t[r].indexOf(a);c>-1&&(t[r].splice(c,1),t[r].length||delete t[r])}}}},E=$e;var Ht=t=>{let e={};for(let o in t)et(t,o)||(e[o]=t[o]);return e},Oe=(t,e)=>{if(!y(t))return e;if(!y(e))return t;let o={...Ht(t),...Ht(e)},n={...t,...e};return Object.keys(o).map(r=>{Object.setPrototypeOf(n,{[r]:o[r]})}),n},jt=Oe;var Ee=(t=E())=>{let{on:e,emit:o,off:n}=t,r={};return{getState:f=>L(r[f]),setState:(f,i=!1)=>{if(typeof f=="function"&&(f=f(L(r))),!y(f))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");let u=L(f);Object.keys(u).map(g=>{let l=r[g],h=u[g],x=y(h)&&y(l)?jt(l,h):h;!i&&o(g,x),r[g]=x})},subscribe:(f,i)=>(e(f,i),()=>n(f,i)),unsubscribe:n,clean:f=>{typeof f=="string"?r[f]=void 0:Array.isArray(f)?f.map(i=>r[i]=void 0):Object.keys(r).map(i=>r[i]=void 0)}}},T=Ee;import{useState as Pe,useEffect as _e,useCallback as bt}from"react";var Ae=t=>(e,o)=>{let[n,r]=Pe(()=>{let s=t?.getState(e);return s!==void 0?s:(o!==void 0&&t?.setState({[e]:o},!0),o)}),a=bt(s=>t?.setState({[e]:typeof s=="function"?s(t?.getState(e)):s}),[]),c=bt(s=>t?.subscribe(e,s),[]),p=bt((s=s)=>t?.clean(s),[]);return _e(()=>{t?.subscribe(e,s=>r(s))},[]),[n,a,c,p]},ot=Ae;var Me=T(),dn=ot(Me),hn=E(),gn=E();var st={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},W="/404",Ut={getState:()=>history.state,go:t=>history.go(t),forward:()=>history.forward(),back:()=>history.back()};var Bt=(t,e,o,n,r=[])=>{let a=s=>{for(let f=0,i=s.length;f<i;f++){let u=s[f],g=u[n].split("?")[0];if(new RegExp("^"+g.replace(/:[^/]+/g,"[^/]+")+"$").test(e)&&!u.childSameRouteLevel)return u;if(C(u[o])){let h=a(u[o]);if(h)return h}}},c=a(t);if(!c)return W;let{redirect:p}=c;return p?M(p)?p:r.includes(p)?r:(r.push(p),Bt(t,p.split("?")[0],o,n,r)):r[r.length-1]},Te=(t,e,o,n,r)=>{if(!C(t))return null;let a=i=>{let u=i.split("/"),g=e.split("/"),l={};return u.map((h,x)=>h.indexOf(":")===0&&(l[h.slice(1)]=g[x])),l},c=(i,u)=>{let g=[],l=u.split("/:")[0];for(let h=0,x=i.length;h<x;h++){let d=i[h];if(d[r]===l){d.active=!0;let{name:m,title:b,icon:k,params:w}=d;g.push({name:m,title:b,icon:k,params:w,[r]:l})}else if(u.indexOf(`${d[r]}/`)===0){d.active=!0;let m=a(d[r]),b=Object.keys(m).map(P=>m[P]).join("/"),{name:k,title:w,icon:S}=d,R=b?`${l}/${b}`:d[r];g.push({name:k,title:w,icon:S,[r]:R,params:{...d.params,...m}})}else if(d[r]===u){d.active=!0;let m=a(d[r]),{[n]:b,...k}=d;g.push({...k,[r]:e,params:{...k.params,...o,...m}})}}return g},p=(i,u)=>{for(let g=0,l=i.length;g<l;g++){let h=i[g];if(u.indexOf(`${h[r]}/`)===0){h.active=!0;return}}},s=i=>{for(let u=0,g=i.length;u<g;u++){let l=i[u],h=(l[r]||"").split("?")[0];if(h===e){if(l.childSameRouteLevel){l.active=!0,l.open=!0;let{[n]:b,...k}=l;return[k,...s(l[n])]}l.hideMenu&&p(i,l.parentPath||h),l.active=!0;let{[n]:d,...m}=l;return[{...m,params:{...m.params,...o}}]}if(new RegExp("^"+h.replace(/:[^/]+/g,"[^/]+")+"$").test(e))return c(i,h);if(C(l[n])){let d=s(l[n]);if(d){l.active=!0,l.open=!0;let{[n]:m,...b}=l;return[b,...d]}}}},f=s(t)||[];return{result:t,current:f}},Ft=(t,e,o)=>t.filter(n=>n.hideMenu||n[o].indexOf("/:")>-1?!1:(C(n[e])&&(n[e]=Ft(n[e],e,o)),!0)),Ie=(t,e,o,n="children",r="path")=>{let a=Bt(t,e,n,r);if(a)return{redirect:a};let{result:c,current:p}=Te(t,e,o,n,r),s=Ft(c,n,r);return{current:p,menu:s}},Nt=Ie;var Le=t=>C(t)&&!!t.length,xt=Le;var it=(t,e)=>t?e?t:(t.startsWith("#")&&(t=`/${t}`),t.indexOf("/#/")>-1?t:`/#${t}`):["/#/","/"][!!e-0],H=(t,e,o,n=!1)=>{let r=it(e,o);return n?r:`${t}/${r}`.replace(/\/+/g,"/")},Dt=(t,e,o,n,r,a)=>{if(!xt(t))return t;let c=(p,s="",f=0)=>p.filter(i=>!i.denied).map(i=>{if(!a&&!i.exact&&!M(i[n])){(!i[n]||i[n]==="javascript:;")&&(i[n]="");let u=i[n].charAt(0)==="/"&&s.charAt(s.length-1)==="/"?i[n].slice(1):i[n].charAt(0)!=="/"&&s.charAt(s.length-1)!=="/"?`/${i[n]}`:i[n];i[n]=s?`${s}${u}`:H(r,u,e)}if(i.redirect&&!M(i.redirect)&&(i.redirect=H(r,i.redirect,e)),xt(i[o])&&(i[o]=c(i[o],i[n],f+1),!i.redirect)){let u=i[o].findIndex(g=>g[n]===i[n]);u&&(i.redirect=i[o][0][n]),u>-1&&(i.childSameRouteLevel=f+1)}return i});return c(t)};var He=t=>{if(!y(t))return"";let e=[];return Object.keys(t).map((o,n)=>{let r=n>0?"&":"?";e.push(`${r}${o}=${t[o]}`)}),e.join("")},yt=He;var je=(t="")=>{let[e,o]=t.split("?");if(o){let n={};return o.split("&").map(a=>{let[c,p]=a.split("=");n[c]=p}),{path:e,params:n}}return{path:e}},ct=je;var qt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Xt=(t,e,o={})=>{let n=o.description??"";for(let r=t.length-1,a;a=t[r--];){let{title:c,name:p}=a;if(c?.length)return document.title=c,document.getElementsByTagName("meta").description.content=`${n??""}${c}`,c;if((c==null||c===!0)&&p){let s=e?`${p}-${e}`:p;return document.title=s,document.getElementsByTagName("meta").description.content=`${n??""}${s}`,s}if(e)return document.title=e,document.getElementsByTagName("meta").description.content=`${n??""}${e}`,e}},Yt=t=>{let{pathname:e,search:o,hash:n}=location;if(t){let s=it(e,t),f=decodeURIComponent(`${s}${o}`),{params:i}=ct(f);return{path:f,params:i}}let r=decodeURIComponent(it(n,t)),{params:a}=ct(r);return{path:`${nt(e)}/${r}`.replace(/\/+/g,"/"),params:a}},at=(t,e,o)=>{typeof t=="function"&&t({...e,stay:new Date-o})},wt=(t,e,o,n)=>{let r=typeof t=="string"?t:t.path??"",a=yt(t.query);M(r)||(r=H(o,r,n,t.exact)),window?.open(`${r}${a}`,e)},Vt=(t,e,o,n)=>{if(t.target||M(t.path)){wt(t,t.target,e,o);return}let r,a,c;if(typeof t=="string")r=t;else if(y(t))r=t.path,a=t.params,c=t.query;else return;!r||r==="."||r==="./"?r=n:r.indexOf("./")===0?r=`${n.split("?")[0]}${r.replace("./","/")}`:r.indexOf("../")===0&&(r=`${n.split("?")[0].split("/").slice(0,-1).join("/")}${r.replace("../","/")}`),r=H(e,r,o,t?.exact);let p=ct(r);r=p.path;let s={...p.params,...c},f=yt(s);return r=`${r}${f}`,a={...a,...s},r===n?!1:{path:r,params:a}},kt=(t,e)=>{let o=t.split(e);return o.length>1?["","/"].includes(o[1].slice(0,1)):!1};var Ue=E(),Be=t=>{let{on:e,emit:o,off:n}=Ue;return{on:r=>e(t,r),emit:r=>o(t,r),off:r=>n(t,r)}},St=Be;var Fe=(t=T())=>(e,o)=>{let{getState:n,setState:r,subscribe:a,unsubscribe:c,clean:p}=t;return o!==void 0&&r({[e]:o},!0),{getState:()=>n(e),setState:(s,f)=>r({[e]:s},f),subscribe:s=>a(e,s),unsubscribe:()=>c(e),clean:()=>p(e)}},ft=Fe;var Ne=T(),De=ft(Ne),Wt=De;var z=St("push-emitter"),Ct=St("replace-emitter"),$=Wt("route-store"),zt=E(),Jt=T(zt),J=ft(Jt),qe=ot(Jt);var Xe=()=>![typeof window,typeof document].includes("undefined"),Gt=Xe;var Ye=t=>{if(!Gt())return;let e=document.createElement("div");return e.innerHTML=t,e.children[0]},Qt=Ye;import{Suspense as or}from"react";import Ve from"react";var G=class extends Ve.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,o){let{errorReport:n}=this.props;typeof n=="function"&&n({error:e,info:o.componentStack})}componentDidUpdate(e,o){o.error&&this.setState({error:null})}render(){let{error:e}=this.state,{fallback:o,children:n}=this.props;return e?o?.(e)??e:n}};import{jsx as ze}from"react/jsx-runtime";var We=({children:t,report:e})=>ze(G,{fallback:(o,n)=>F({error:o,info:n}),errorReport:e,children:t}),Zt=We;if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes before {
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
`,document.head.appendChild(t),window.__HUXY__.add("cab66a")}import{jsx as Kt}from"react/jsx-runtime";var Je=({global:t,absolute:e})=>Kt("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:Kt("figure",{className:"spinning"})}),te=Je;import{useEffect as oe}from"react";import{useState as tr,useRef as re,useCallback as ne}from"react";import{useEffect as Ge,useRef as Qe,useCallback as Ze}from"react";var Ke=()=>{let t=Qe([]);return Ge(()=>()=>{t.current.map(e=>e.cancelFn()),t.current=[]},[]),Ze((e,o=!0)=>{let n=rt(e,o);return t.current.indexOf(n)===-1&&t.current.push(n),n.promiseFn},[])},ee=Ke;var er=(t={})=>{let e=ee(),[o,n]=tr(t),r=re({}),a=re({}),c=ne((s=null)=>{Array.isArray(s)&&s.length?s.map(f=>r.current[f]=t[f]):r.current=t},[]),p=ne((s,f,i=!1)=>{let u=Object.keys(s),g=JSON.stringify(u.sort());if(!a.current[g]){a.current[g]=!0,i&&c(Array.isArray(i)?i:u),u.map(l=>{r.current[l]||(r.current[l]={}),r.current[l].pending=!0}),n({...r.current});for(let l=0,h=u.length;l<h;l++){let x=u[l];e(s[x]).then(d=>{let{result:m,errMsg:b}=d;l===h-1&&(a.current[g]=!1),typeof f=="function"&&(m=f(m)||m),r.current[x]={...m,pending:!1},b===!1&&n({...r.current})}).catch(d=>{throw l===h-1&&(a.current[g]=!1),r.current[x]={error:d,pending:!1},n({...r.current}),d})}}},[]);return[o,p,c]},Rt=er;import{jsx as nr}from"react/jsx-runtime";var pt=t=>Object.keys(t).length,rr=t=>{let{Comp:e,restResolve:o,loadPromise:n,params:r,children:a}=t,[c,p]=Rt(),[s,f]=Rt();return oe(()=>{pt(o)&&p(o),pt(n)&&f(n)},[o,n]),oe(()=>{let i=pt(c);i&&i===pt(o)&&J.setState(c)},[c]),nr(e,{...r,...c,...s,children:a})},se=rr;import{jsx as N}from"react/jsx-runtime";var sr=t=>t===!1?null:B(t)?t:V(t)?N(t,{}):N(te,{}),ir=({Loading:t,ErrorBoundary:e,loadedComp:o})=>{let n=N(or,{fallback:sr(t),children:o});return e===!1?n:V(e)?N(e,{children:n}):N(Zt,{children:n})},cr=({Comp:t,routerProps:e,children:o})=>{let{params:n,...r}=e,{loading:a,errorBoundary:c,...p}=n,s=N(se,{Comp:t,...r,params:p,children:o});return ir({Loading:a,ErrorBoundary:c,loadedComp:s})},vt=cr;var $t={},Ot=(t,e,o,n)=>A(o)?o.then(r=>vt({Comp:t,routerProps:e,children:r.default??r})):vt({Comp:t,routerProps:e,children:o}),ar=(t,e)=>{let o={},n={};return y(t)?(Object.keys(t).map(r=>{let a=J.getState(r);a==null?n[r]=t[r](e):o[r]=a}),{cachedResolve:o,restResolve:n}):{cachedResolve:o,restResolve:n}},fr=(t,e)=>{if(!y(t))return{};let o={};return Object.keys(t).map(n=>o[n]=t[n](e)),o},pr=t=>{let{current:e,menu:o,...n}=t,r=e.map(p=>{let{component:s,resolve:f,loadData:i,loading:u,errorBoundary:g,icon:l,...h}=p;return h}),a=[...e].filter(p=>p.component),c=(p=0)=>{if(!a.length)return null;let s=a.shift(),{component:f,resolve:i,loadData:u,icon:g,key:l,...h}=s;if(typeof f=="function"||A(f)){let x=`${h.path}${h.childSameRouteLevel??""}`,d=$t[x],{cachedResolve:m,restResolve:b}=ar(i,h),w={loadPromise:fr(u,h),restResolve:b,params:{current:r,...n,...h,...m}},S=c(p+1);if(d)return Ot(d,w,S,x);try{d=f(),d=B(d)?f:d}catch{d=f}return A(d)?d.then(R=>(d=R.default??R,$t[x]=d,Ot(d,w,S,x))):($t[x]=d,Ot(d,w,S,x))}return typeof f=="string"?Qt(f):f};return c()},ie=pr;var ur=t=>{let[e,o]=Et(t),[n,r]=Et(),[a,c]=Et(),p=ut(),s=ut(),f=ut(),i=ut(),u=()=>{typeof p.current=="function"&&(p.current({cancel:st.cancelMsg}),p.current=null)},g=lt(m=>{typeof m=="function"?o(b=>({...b,...m(b)})):y(m)&&o(b=>({...b,...m}))},[]),l=(m,b="pushState")=>{let{basepath:k,browserRouter:w}=i.current,S=f.current,R=Vt(m,k,w,S);if(!R)return;let{path:P,params:j}=R;d({inputPath:P,inputParams:j},()=>history[b](m?.state,"",P))},h=lt(m=>l(m),[]),x=lt(m=>l(m,"replaceState"),[]),d=lt(({inputPath:m="",inputParams:b={}},k)=>{let w=+new Date,{browserRouter:S,childKey:R,idKey:P,title:j,metas:Q,routers:Z,beforeRender:D,afterRender:q,basepath:X,allowedNotFound:O,...fe}=i.current;if(!m){let{path:v,params:I}=Yt(S);m=v,b={...b,...I}}let mt=f.current;new Promise((v,I)=>{Z?.length||I("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),m!==f.current&&typeof D=="function"?D({path:m,params:b,prevPath:mt},v,I):v()}).then(v=>{if(v===!1)return;let I=v?.path;if(I&&H(X,I,S)!==m){x(v);return}s.current=s.current??m;let{redirect:U,current:Y,menu:pe}=Nt(L(Z),m.split("?")[0],b,R,P);if(U)return O&&U===W&&(typeof O=="boolean"||typeof O=="string"&&kt(s.current,O)||C(O)&&O.find(ht=>kt(s.current,ht)))||C(U)?void 0:U===W?x({path:U}):h({path:U,exact:!0});k?.(),m?.split("?")[0]!==f.current?.split("?")[0]&&qt(),Xt(Y,j,Q);let _t={...fe,updateRouter:g,router:{push:h,replace:x},current:Y,menu:pe,inputPath:s.current,prevPath:mt,browserRouter:S,basepath:X,title:j,history:{...Ut,goBack:K=>h({...K,path:mt})}};$.setState(_t);let dt=ie(_t);if(f.current=m,s.current=null,u(),A(dt)){let{promiseFn:K,cancelFn:ht}=rt(dt,{delay:st.delay,msg:{timeout:st.timeoutMsg}});return p.current=ht,c(!0),K.then(tt=>{p.current=null;let{result:le,errMsg:gt}=tt,At=gt===!1?le:gt?.timeout?F({error:{errMsg:`${m} ${gt.timeout}`}}):null;At&&(c(!1),at(q,Y.slice(-1)[0],w),r(At))}).catch(tt=>{throw p.current=null,c(!1),at(q,Y.slice(-1)[0],w),r(F({error:tt})),tt})}at(q,Y.slice(-1)[0],w),r(dt)}).catch(v=>{throw r(F({error:v})),v})},[]);return lr(()=>{let m={description:document.getElementsByTagName("meta").description.content??""},{childKey:b="children",idKey:k="path",browserRouter:w=!1,routers:S=[],basepath:R="",exact:P=!1,inputPath:j="",inputParams:Q={},...Z}=e,D=nt(R),q=Dt(L(S),w,b,k,D,P);i.current={...Z,childKey:b,idKey:k,browserRouter:w,routers:q,basepath:D,metas:m};let X=w?"popstate":"hashchange",O=()=>d({});return d({inputPath:j,inputParams:Q}),z.on(h),Ct.on(x),window.addEventListener(X,O,!1),()=>{u(),z.off(h),Ct.off(x),window.removeEventListener(X,O,!1)}},[e]),{updateRouter:g,output:n,loading:a}},mr=ur;var dr=t=>{let{to:e,onClick:o,preventDefault:n,stopPropagation:r=!0,exact:a=!0,target:c,disabled:p,...s}=t,f=()=>{let u=typeof e=="string"?{path:e}:e;z.emit({exact:a,...s,...u})};return u=>{if(u.preventDefault(),r&&u.stopPropagation(),!p){if(!n){if(c){let{browserRouter:g,basepath:l}=$.getState();wt(e,c,l,g);return}f()}typeof o=="function"&&o()}}},ce=dr;if(typeof document<"u"&&!window.__HUXY__?.has("5c4655")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-5c4655-link {
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
`,document.head.appendChild(t),window.__HUXY__.add("5c4655")}var Pt="hy-5c4655-link",ae="hy-5c4655-active";import{jsx as yr}from"react/jsx-runtime";var gr=t=>{if(!t)return Pt;let e=t.trim().split(" ").filter(Boolean),n=e.find(r=>r==="active")?[ae]:[];return[Pt,...n,...e].join(" ")},br=t=>{let{to:e,onClick:o,preventDefault:n,stopPropagation:r,exact:a,target:c,className:p,...s}=t;return yr("span",{onClick:ce(t),className:gr(p),...s})},xr=br;import{useState as wr,useEffect as kr}from"react";var Sr=()=>{let[t,e]=wr($.getState());return kr(()=>$.subscribe(o=>e(o)),[]),t},Cr=Sr;var ls=$.getState,us=$.subscribe;export{xr as Link,us as emitRoute,ls as getRoute,zt as huxyBus,J as huxyStore,qe as useHuxyStore,Cr as useRoute,mr as useRouter};
