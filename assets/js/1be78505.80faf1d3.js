"use strict";(self.webpackChunkekg_gniebel_ruebgarten_documentation=self.webpackChunkekg_gniebel_ruebgarten_documentation||[]).push([[514,972],{9963:function(e,t,a){a.r(t),a.d(t,{default:function(){return Se}});var n=a(7294),l=a(4334),r=a(1944),o=a(5281),i=a(3320),c=a(2802),s=a(4477),d=a(1116),m=a(9055),u=a(5999),b=a(2466),p=a(5936);var h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:o,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const o=null==a?void 0:a.scrollY;o&&(r.current?r.current=!1:n>=o?(i(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:a,scrollToTop:()=>o(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var f=a(1442),g=a(6775),_=a(7524),k=a(6668),C=a(1327),S=a(7462);function I(e){return n.createElement("svg",(0,S.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var N="collapseSidebarButton_PEFL",Z="collapseSidebarButtonIcon_kv0_";function T(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},n.createElement(I,{className:Z}))}var y=a(9689),x=a(902);const w=Symbol("EmptyContext"),L=n.createContext(w);function A(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),r=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(L.Provider,{value:r},t)}var M=a(6043),B=a(8596),F=a(9960),H=a(2389);function P(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function W(e){let{item:t,onItemClick:a,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),v=function(e){const t=(0,H.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),f=(0,c._F)(t,r),g=(0,B.Mg)(h,r),{collapsed:_,setCollapsed:C}=(0,M.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,n.useContext)(L);if(e===w)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!_),N(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const r=(0,x.D9)(t);(0,n.useEffect)((()=>{t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:f,collapsed:_,updateCollapsed:Z}),(0,n.useEffect)((()=>{b&&null!=I&&I!==s&&E&&C(!0)}),[b,I,s,C,E]),n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":_},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(F.Z,(0,S.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{null==a||a(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!_:void 0,href:b?v??"#":v},d),u),h&&b&&n.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),n.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.createElement(Y,{items:m,tabIndex:_?-1:0,onItemClick:a,activePath:r,level:i+1})))}var D=a(3919),R=a(9471),V="menuExternalLink_NmtK";function z(e){let{item:t,onItemClick:a,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,r),E=(0,D.Z)(m);return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},n.createElement(F.Z,(0,S.Z)({className:(0,l.Z)("menu__link",!E&&V,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(R.Z,null)))}var U="menuHtmlItem_M9Kj";function K(e){let{item:t,level:a,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[U,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function j(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(W,(0,S.Z)({item:t},a));case"html":return n.createElement(K,(0,S.Z)({item:t},a));default:return n.createElement(z,(0,S.Z)({item:t},a))}}function G(e){let{items:t,...a}=e;return n.createElement(A,null,t.map(((e,t)=>n.createElement(j,(0,S.Z)({key:t,item:e,index:t},a)))))}var Y=(0,n.memo)(G),q="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function X(e){let{path:t,sidebar:a,className:r}=e;const i=function(){const{isActive:e}=(0,y.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",q,i&&O,r)},n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(Y,{items:a,activePath:t,level:1})))}var J="sidebar_njMd",Q="sidebarWithHideableNavbar_wUlq",$="sidebarHidden_VK0M",ee="sidebarLogo_isFc";function te(e){let{path:t,sidebar:a,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,k.L)();return n.createElement("div",{className:(0,l.Z)(J,i&&Q,o&&$)},i&&n.createElement(C.Z,{tabIndex:-1,className:ee}),n.createElement(X,{path:t,sidebar:a}),c&&n.createElement(T,{onClick:r}))}var ae=n.memo(te),ne=a(3102),le=a(2961);const re=e=>{let{sidebar:t,path:a}=e;const r=(0,le.e)();return n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(Y,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function oe(e){return n.createElement(ne.Zo,{component:re,props:e})}var ie=n.memo(oe);function ce(e){const t=(0,_.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ae,e),l&&n.createElement(ie,e))}var se="expandButton_m80_",de="expandButtonIcon_BlDH";function me(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:se,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(I,{className:de}))}var ue={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function be(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:(null==a?void 0:a.name)??"noSidebar"},t)}function pe(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,g.TH)(),[c,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{c&&s(!1),!c&&(0,f.n)()&&s(!0),r((e=>!e))}),[r,c]);return n.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,ue.docSidebarContainer,a&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&a&&s(!0)}},n.createElement(be,null,n.createElement("div",{className:(0,l.Z)(ue.sidebarViewport,c&&ue.sidebarViewportHidden)},n.createElement(ce,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&n.createElement(me,{toggleSidebar:d}))))}var he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:a}=e;const r=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!r)&&he.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},a))}var ve="docPage__5DB",fe="docsWrapper_BCFX";function ge(e){let{children:t}=e;const a=(0,d.V)(),[l,r]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:fe},n.createElement(v,null),n.createElement("div",{className:ve},a&&n.createElement(pe,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),n.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=a(4972),ke=a(197);function Ce(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(ke.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(r.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Se(e){const{versionMetadata:t}=e,a=(0,c.hI)(e);if(!a)return n.createElement(_e.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(Ce,e),n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(ge,null,i)))))}},4972:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),l=a(5999),r=a(1944),o=a(9055);function i(){return n.createElement(n.Fragment,null,n.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);