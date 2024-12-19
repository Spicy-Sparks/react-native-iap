"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9386],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),u=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,y=s["".concat(d,".").concat(m)]||s[m]||l[m]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8663:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(6540);function n(e){let{className:t="adfit",style:r,unit:n,height:a,width:i}=e;return(0,o.useEffect)((()=>{let e=document.createElement("ins"),r=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",r.async="true",r.type="text/javascript",r.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",i.toString()),e.setAttribute("data-ad-height",a.toString()),e.setAttribute("data-ad-unit",n.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(r)}),[]),o.createElement("div",{style:r},o.createElement("div",{className:t}))}},1748:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(6540),n=r(8663);function a(){return o.createElement(n.A,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},6639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var o=r(8168),n=(r(6540),r(5680)),a=r(1748);const i={title:"Buy Promoted Product",sidebar_label:"buyPromotedProductIOS"},c=void 0,d={unversionedId:"api-reference/methods/ios/buy-promoted-product",id:"api-reference/methods/ios/buy-promoted-product",title:"Buy Promoted Product",description:"Buy the currently selected promoted product.",source:"@site/docs/api-reference/methods/ios/buy-promoted-product.mdx",sourceDirName:"api-reference/methods/ios",slug:"/api-reference/methods/ios/buy-promoted-product",permalink:"/docs/api-reference/methods/ios/buy-promoted-product",draft:!1,editUrl:"https://github.com/hyochan/react-native-iap/edit/main/docs/docs/api-reference/methods/ios/buy-promoted-product.mdx",tags:[],version:"current",frontMatter:{title:"Buy Promoted Product",sidebar_label:"buyPromotedProductIOS"},sidebar:"tutorialSidebar",previous:{title:"promotedProductListener",permalink:"/docs/api-reference/methods/listeners/promoted-product-listener"},next:{title:"clearProductsIOS",permalink:"/docs/api-reference/methods/ios/clear-products-ios"}},u={},p=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],s={toc:p},l="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(l,(0,o.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(a.A,{mdxType:"AdFitTopFixed"}),(0,n.yg)("h1",{id:"buypromotedproductios"},(0,n.yg)("inlineCode",{parentName:"h1"},"buyPromotedProductIOS")),(0,n.yg)("p",null,"Buy the currently selected promoted product."),(0,n.yg)("p",null,"Initiates the payment process for a promoted product."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Should only be called in response to the ",(0,n.yg)("inlineCode",{parentName:"p"},"iap-promoted-product")," event.")),(0,n.yg)("h2",{id:"signature"},"Signature"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"buyPromotedProductIOS(): Promise<void>\n")),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Button} from 'react-native';\nimport {buyPromotedProductIOS} from 'react-native-iap';\n\nconst App = () => {\n  const handleBuy = async () => await buyPromotedProductIOS();\n\n  return (\n    <Button title=\"Buy\" onPress={handleBuy} />\n  );\n}\n")))}m.isMDXComponent=!0}}]);