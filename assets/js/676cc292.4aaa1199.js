"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8225],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8663:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540);function o(e){let{className:t="adfit",style:r,unit:o,height:i,width:a}=e;return(0,n.useEffect)((()=>{let e=document.createElement("ins"),r=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",r.async="true",r.type="text/javascript",r.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",a.toString()),e.setAttribute("data-ad-height",i.toString()),e.setAttribute("data-ad-unit",o.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(r)}),[]),n.createElement("div",{style:r},n.createElement("div",{className:t}))}},1748:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(6540),o=r(8663);function i(){return n.createElement(o.A,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(8168),o=(r(6540),r(5680)),i=r(1748);const a={title:"Present Code Redemption Sheet IOS",sidebar_label:"presentCodeRedemptionSheetIOS"},s=void 0,c={unversionedId:"api-reference/methods/ios/present-code-redemption-sheet-ios",id:"api-reference/methods/ios/present-code-redemption-sheet-ios",title:"Present Code Redemption Sheet IOS",description:"Displays a sheet that enables users to redeem subscription offer codes that you generated in App Store Connect.",source:"@site/docs/api-reference/methods/ios/present-code-redemption-sheet-ios.mdx",sourceDirName:"api-reference/methods/ios",slug:"/api-reference/methods/ios/present-code-redemption-sheet-ios",permalink:"/docs/api-reference/methods/ios/present-code-redemption-sheet-ios",draft:!1,editUrl:"https://github.com/hyochan/react-native-iap/edit/main/docs/docs/api-reference/methods/ios/present-code-redemption-sheet-ios.mdx",tags:[],version:"current",frontMatter:{title:"Present Code Redemption Sheet IOS",sidebar_label:"presentCodeRedemptionSheetIOS"},sidebar:"tutorialSidebar",previous:{title:"getPromotedProductIOS",permalink:"/docs/api-reference/methods/ios/get-promoted-product-ios"},next:{title:"requestPurchaseWithOfferIOS",permalink:"/docs/api-reference/methods/ios/request-purchase-with-offer"}},p={},d=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],l={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{mdxType:"AdFitTopFixed"}),(0,o.yg)("h1",{id:"presentcoderedemptionsheetios"},(0,o.yg)("inlineCode",{parentName:"h1"},"presentCodeRedemptionSheetIOS")),(0,o.yg)("p",null,"Displays a sheet that enables users to redeem subscription offer codes that you generated in App Store Connect."),(0,o.yg)("p",null,"Availability: ",(0,o.yg)("inlineCode",{parentName:"p"},"iOS 14.0+")),(0,o.yg)("h2",{id:"signature"},"Signature"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"presentCodeRedemptionSheetIOS(): Promise<null>;\n")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Button} from 'react-native';\nimport {presentCodeRedemptionSheetIOS} from 'react-native-iap';\n\nconst App = () => {\n  const handleRedemption = async () => {\n    await presentCodeRedemptionSheetIOS();\n  }\n\n  return (\n    <Button title=\"Redeem\" onPress={handleRedemption} />\n  )\n}\n")))}m.isMDXComponent=!0}}]);