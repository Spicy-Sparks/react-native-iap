"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4336],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8663:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(6540);function a(e){let{className:t="adfit",style:r,unit:a,height:o,width:i}=e;return(0,n.useEffect)((()=>{let e=document.createElement("ins"),r=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",r.async="true",r.type="text/javascript",r.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",i.toString()),e.setAttribute("data-ad-height",o.toString()),e.setAttribute("data-ad-unit",a.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(r)}),[]),n.createElement("div",{style:r},n.createElement("div",{className:t}))}},1748:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540),a=r(8663);function o(){return n.createElement(a.A,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},7826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(8168),a=(r(6540),r(5680)),o=r(1748);const i={title:"Support",sidebar_label:"Support"},p=void 0,s={unversionedId:"support-us",id:"support-us",title:"Support",description:"react-native-iap is an open source project with MIT license. We are willing to",source:"@site/docs/support-us.mdx",sourceDirName:".",slug:"/support-us",permalink:"/docs/support-us",draft:!1,editUrl:"https://github.com/hyochan/react-native-iap/edit/main/docs/docs/support-us.mdx",tags:[],version:"current",frontMatter:{title:"Support",sidebar_label:"Support"},sidebar:"tutorialSidebar",previous:{title:"Product",permalink:"/docs/old-to-remove-product"}},c={},l=[{value:"Our Sponsors",id:"our-sponsors",level:2},{value:"Gold Tier",id:"gold-tier",level:3},{value:"Past  Sponsors",id:"past--sponsors",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{mdxType:"AdFitTopFixed"}),(0,a.yg)("h1",{id:"support-react-native-iap"},"Support React Native IAP"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"react-native-iap")," is an open source project with MIT license. We are willing to\nmaintain this repository to support devs to monetize around the world."),(0,a.yg)("p",null,"Since ",(0,a.yg)("inlineCode",{parentName:"p"},"IAP")," itself is not perfect on each platform, we desperately need\nthis project to be maintained. If you'd like to help us, please contact the ",(0,a.yg)("a",{parentName:"p",href:"mailto:hyochan.dev@gmail.com"},"maintainer: hyochan.dev@gmail.com"),"."),(0,a.yg)("h2",{id:"our-sponsors"},"Our Sponsors"),(0,a.yg)("h3",{id:"gold-tier"},"Gold Tier"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"th",href:"https://namiml.com"},"NAMI")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{href:"https://namiml.com"},(0,a.yg)("img",{src:"https://github.com/hyochan/react-native-iap/assets/27461460/89d71f61-bb73-400a-83bd-fe0f96eb726e",width:"450"})))))),(0,a.yg)("h2",{id:"past--sponsors"},"Past  Sponsors"),(0,a.yg)("a",{href:"https://www.revenuecat.com"},(0,a.yg)("img",{src:"https://github.com/hyochan/react-native-iap/assets/27461460/1e387a47-afe0-4b85-ad78-1064ca6623fa",width:"200"})),(0,a.yg)("p",null,"After 6 years of maintenance, we finally have an official sponsor. I am deeply grateful. \ud83d\ude47\ud83c\udffb\u200d\u2642\ufe0f"))}m.isMDXComponent=!0}}]);