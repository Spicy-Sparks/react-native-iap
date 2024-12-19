"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2822],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=i,f=l["".concat(d,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8663:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6540);function i(e){let{className:t="adfit",style:n,unit:i,height:o,width:a}=e;return(0,r.useEffect)((()=>{let e=document.createElement("ins"),n=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",n.async="true",n.type="text/javascript",n.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",a.toString()),e.setAttribute("data-ad-height",o.toString()),e.setAttribute("data-ad-unit",i.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(n)}),[]),r.createElement("div",{style:n},r.createElement("div",{className:t}))}},1748:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),i=n(8663);function o(){return r.createElement(i.A,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},4490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(8168),i=(n(6540),n(5680)),o=n(1748);const a={title:"Deep link to subscriptions",sidebar_label:"deepLinkToSubscriptionsAndroid"},s=void 0,d={unversionedId:"api-reference/methods/android/deep-link-to-subscriptions-android",id:"api-reference/methods/android/deep-link-to-subscriptions-android",title:"Deep link to subscriptions",description:"Deep link to subscriptions screen.",source:"@site/docs/api-reference/methods/android/deep-link-to-subscriptions-android.mdx",sourceDirName:"api-reference/methods/android",slug:"/api-reference/methods/android/deep-link-to-subscriptions-android",permalink:"/docs/api-reference/methods/android/deep-link-to-subscriptions-android",draft:!1,editUrl:"https://github.com/hyochan/react-native-iap/edit/main/docs/docs/api-reference/methods/android/deep-link-to-subscriptions-android.mdx",tags:[],version:"current",frontMatter:{title:"Deep link to subscriptions",sidebar_label:"deepLinkToSubscriptionsAndroid"},sidebar:"tutorialSidebar",previous:{title:"acknowledgePurchaseAndroid",permalink:"/docs/api-reference/methods/android/acknowledge-purchase-android"},next:{title:"flushFailedPurchasesCachedAsPendingAndroid",permalink:"/docs/api-reference/methods/android/flush-failed-purchases-cached-as-pending-android"}},c={},p=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{mdxType:"AdFitTopFixed"}),(0,i.yg)("h1",{id:"deeplinktosubscriptionsandroid"},(0,i.yg)("inlineCode",{parentName:"h1"},"deepLinkToSubscriptionsAndroid")),(0,i.yg)("p",null,"Deep link to subscriptions screen."),(0,i.yg)("h2",{id:"signature"},"Signature"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"deepLinkToSubscriptionsAndroid(\n  /** The product's SKU */\n  sku: Sku,\n): Promise<void>;\n")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Button} from 'react-native';\nimport {deepLinkToSubscriptionsAndroid} from 'react-native-iap';\n\nconst App = () => {\n  const handleSubscriptions = async () => {\n    await deepLinkToSubscriptionsAndroid({sku: 'sku-id'});\n  };\n\n  return <Button title=\"Manage subscriptions\" onPress={handleSubscriptions} />;\n};\n")))}m.isMDXComponent=!0}}]);