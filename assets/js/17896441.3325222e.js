(self.webpackChunkekg_gniebel_ruebgarten_documentation=self.webpackChunkekg_gniebel_ruebgarten_documentation||[]).push([[918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3410:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return jt}});var a=n(7294),r=n(6010),l=n(1944),o=n(7524),c=n(5281),i=n(3117),s=n(5999),u=n(9960);function m(e){var t=e.permalink,n=e.title,l=e.subLabel,o=e.isNext;return a.createElement(u.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function d(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(m,(0,i.Z)({},t,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(m,(0,i.Z)({},n,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=n(2263),v=n(4104),f=n(373),g=n(4477);var h={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=h[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(u.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){var t,n=e.className,l=e.versionMetadata,o=(0,p.Z)().siteConfig.title,i=(0,v.gA)({failfast:!0}).pluginId,s=(0,f.J)(i).savePreferredVersionName,u=(0,v.Jo)(i),m=u.latestDocSuggestion,d=u.latestVersionSuggestion,g=null!=m?m:(t=d).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(b,{siteTitle:o,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:d.label,to:g.path,onClick:function(){return s(d.name)}})))}function k(e){var t=e.className,n=(0,g.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function N(e){var t=e.className,n=(0,g.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function L(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function C(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function Z(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:c.k.common.lastUpdated},a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(C,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var _=n(102),T="iconEdit_eYIM",w=["className"];function x(e){var t=e.className,n=(0,_.Z)(e,w);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function B(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},a.createElement(x,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var O="tag_zVej",j="tagRegular_sFm0",A="tagWithCount_h2kH";function H(e){var t=e.permalink,n=e.label,l=e.count;return a.createElement(u.Z,{href:t,className:(0,r.Z)(O,l?A:j)},n,l&&a.createElement("span",null,l))}var S="tags_jXut",I="tag_QGVx";function P(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(S,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:I},a.createElement(H,{label:t,permalink:n}))}))))}var U="lastUpdated_vbeJ";function M(e){return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(P,e)))}function V(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(B,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",U)},(n||l)&&a.createElement(Z,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function D(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,s=t.tags,u=s.length>0,m=!!(n||l||i);return u||m?a.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},u&&a.createElement(M,{tags:s}),m&&a.createElement(V,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var R=n(6668),z=["parentIndex"];function W(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,_.Z)(e,z);n>=0?t[n].children.push(r):a.push(r)})),a}function F(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function q(e){var t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function G(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return q(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function J(){var e=(0,a.useRef)(0),t=(0,R.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){var t=(0,a.useRef)(void 0),n=J();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=G(c,{anchorTopOffset:n.current}),s=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function $(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement($,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var X=a.memo($),K=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function Q(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,s=void 0===c?void 0:c,u=e.minHeadingLevel,m=e.maxHeadingLevel,d=(0,_.Z)(e,K),p=(0,R.L)(),v=null!=u?u:p.tableOfContents.minHeadingLevel,f=null!=m?m:p.tableOfContents.maxHeadingLevel,g=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return F({toc:W(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return Y((0,a.useMemo)((function(){if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:f}}),[o,s,v,f])),a.createElement(X,(0,i.Z)({toc:g,className:r,linkClassName:o},d))}var ee="tableOfContents_bqdL",te=["className"];function ne(e){var t=e.className,n=(0,_.Z)(e,te);return a.createElement("div",{className:(0,r.Z)(ee,"thin-scrollbar",t)},a.createElement(Q,(0,i.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var ae=n(6043),re="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E",oe=["collapsed"];function ce(e){var t=e.collapsed,n=(0,_.Z)(e,oe);return a.createElement("button",(0,i.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",re,!t&&le,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var ie="tocCollapsible_ETCw",se="tocCollapsibleContent_vkbj",ue="tocCollapsibleExpanded_sAul";function me(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,ae.u)({initialState:!0}),i=c.collapsed,s=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(ie,!i&&ue,n)},a.createElement(ce,{collapsed:i,onClick:s}),a.createElement(ae.z,{lazy:!0,className:se,collapsed:i},a.createElement(Q,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var de="anchorWithStickyNavbar_LWe7",pe="anchorWithHideOnScrollNavbar_WYt5",ve=["as","id"];function fe(e){var t=e.as,n=e.id,l=(0,_.Z)(e,ve),o=(0,R.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,i.Z)({},l,{className:(0,r.Z)("anchor",o?pe:de),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,i.Z)({},l,{id:void 0}))}var ge=n(3651),he=n(8596),be=n(4996);function Ee(e){return a.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ye={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ke(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(u.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Ne(e){var t=e.children,n=e.active,l=e.index,o=e.addMicrodata;return a.createElement("li",(0,i.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Le(){var e=(0,be.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(u.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",ye.breadcrumbsItemLink),href:e},a.createElement(Ee,{className:ye.breadcrumbHomeIcon})))}function Ce(){var e=(0,ge.s1)(),t=(0,he.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,ye.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Le,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(Ne,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(ke,{href:t.href,isLast:r},t.label))})))):null}var Ze=n(3905),_e=n(5742),Te=["mdxType","originalType"];var we=n(2389),xe=n(2949);function Be(){var e=(0,R.L)().prism,t=(0,xe.I)().colorMode,n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var Oe=n(7802),je=n(7594),Ae=n.n(je),He=(0,Oe.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),Se=(0,Oe.Z)(/\{([\d,-]+)\}/,{range:1}),Ie={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Pe(e,t){var n=e.map((function(e){var n=Ie[e],a=n.start,r=n.end;return"(?:"+a+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function Ue(e,t){var n=e.replace(/\n$/,""),a=t.language,r=t.magicComments,l=t.metastring;if(l&&Se.test(l)){var o=l.match(Se).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=r[0].className,i=Ae()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===a)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Pe(["js","jsBlock"],t);case"jsx":case"tsx":return Pe(["js","jsBlock","jsx"],t);case"html":return Pe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Pe(["bash"],t);case"markdown":case"md":return Pe(["html","jsx","bash"],t);default:return Pe(Object.keys(Ie),t)}}(a,r),u=n.split("\n"),m=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),f=0;f<u.length;){var g=u[f].match(s);if(g){var h=g.slice(1).find((function(e){return void 0!==e}));d[h]?m[d[h]].range+=f+",":p[h]?m[p[h]].start=f:v[h]&&(m[v[h]].range+=m[v[h]].start+"-"+(f-1)+","),u.splice(f,1)}else f+=1}n=u.join("\n");var b={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;Ae()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}var Me="codeBlockContainer_Ckt0",Ve=["as"];function De(e){var t=e.as,n=(0,_.Z)(e,Ve),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var a=e[0],r=e[1],l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(Be());return a.createElement(t,(0,i.Z)({},n,{style:l,className:(0,r.Z)(n.className,Me,c.k.common.codeBlock)}))}var Re={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function ze(e){var t=e.children,n=e.className;return a.createElement(De,{as:"pre",tabIndex:0,className:(0,r.Z)(Re.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Re.codeBlockLines},t))}var We={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Fe={Prism:n(1205).Z,theme:We};function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ge(){return Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ge.apply(this,arguments)}var Je=/\r\n|\r|\n/,Ye=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},$e=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Xe=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Ge({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=Ge({},n,{backgroundColor:null}),r};function Ke(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var Qe=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),qe(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Xe(e.theme,e.language):void 0;return t.themeDict=n})),qe(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=Ge({},Ke(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?Ge({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),qe(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),qe(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=Ge({},Ke(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?Ge({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),qe(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,u=t[o],m=n[o][l];if("string"==typeof m?(u=o>0?u:["plain"],s=m):(u=$e(u,m.type),m.alias&&(u=$e(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(Je),p=d.length;c.push({types:u,content:d[0]});for(var v=1;v<p;v++)Ye(c),i.push(c=[]),c.push({types:u,content:d[v]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return Ye(c),i}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),et=Qe,tt="codeLine_lJS_",nt="codeLineNumber_Tfdd",at="codeLineContent_feaV";function rt(e){var t=e.line,n=e.classNames,l=e.showLineNumbers,o=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=o({line:t,className:(0,r.Z)(n,l&&tt)}),u=t.map((function(e,t){return a.createElement("span",(0,i.Z)({key:t},c({token:e,key:t})))}));return a.createElement("span",s,l?a.createElement(a.Fragment,null,a.createElement("span",{className:nt}),a.createElement("span",{className:at},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var lt={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function ot(e){var t=e.code,n=e.className,l=(0,a.useState)(!1),o=l[0],c=l[1],i=(0,a.useRef)(void 0),u=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),c=!1;o.rangeCount>0&&(c=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(o.removeAllRanges(),o.addRange(c)),l&&l.focus()}(t),c(!0),i.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,lt.copyButton,o&&lt.copyButtonCopied),onClick:u},a.createElement("span",{className:lt.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:lt.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:lt.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var ct="wordWrapButtonIcon_Bwma",it="wordWrapButtonEnabled_EoeP";function st(e){var t=e.className,n=e.onClick,l=e.isEnabled,o=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,l&&it),"aria-label":o,title:o},a.createElement("svg",{className:ct,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function ut(e){var t,n,l,o,c,s,u,m,d,p,v,f=e.children,g=e.className,h=void 0===g?"":g,b=e.metastring,E=e.title,y=e.showLineNumbers,k=e.language,N=(0,R.L)().prism,L=N.defaultLanguage,C=N.magicComments,Z=null!=(t=null!=k?k:null==(n=h.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,_=Be(),T=(l=(0,a.useState)(!1),o=l[0],c=l[1],s=(0,a.useState)(!1),u=s[0],m=s[1],d=(0,a.useRef)(null),p=(0,a.useCallback)((function(){var e=d.current.querySelector("code");o?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[d,o]),v=(0,a.useCallback)((function(){var e=d.current,t=e.scrollWidth>e.clientWidth||d.current.querySelector("code").hasAttribute("style");m(t)}),[d]),(0,a.useEffect)((function(){v()}),[o,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:d,isEnabled:o,isCodeScrollable:u,toggle:p}),w=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(He))?void 0:n.groups.title)?t:""}(b)||E,x=Ue(f,{metastring:b,language:Z,magicComments:C}),B=x.lineClassNames,O=x.code,j=null!=y?y:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(b);return a.createElement(De,{as:"div",className:(0,r.Z)(h,Z&&!h.includes("language-"+Z)&&"language-"+Z)},w&&a.createElement("div",{className:Re.codeBlockTitle},w),a.createElement("div",{className:Re.codeBlockContent},a.createElement(et,(0,i.Z)({},Fe,{theme:_,code:O,language:null!=Z?Z:"text"}),(function(e){var t=e.className,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,r.Z)(t,Re.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(Re.codeBlockLines,j&&Re.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(rt,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:B[t],showLineNumbers:j})}))))})),a.createElement("div",{className:Re.buttonGroup},(T.isEnabled||T.isCodeScrollable)&&a.createElement(st,{className:Re.codeButton,onClick:function(){return T.toggle()},isEnabled:T.isEnabled}),a.createElement(ot,{className:Re.codeButton,code:O}))))}var mt=["children"];function dt(e){var t=e.children,n=(0,_.Z)(e,mt),r=(0,we.Z)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?ut:ze;return a.createElement(o,(0,i.Z)({key:String(r)},n),l)}var pt="details_lb9f",vt="isBrowser_bmU9",ft="collapsibleContent_i85q",gt=["summary","children"];function ht(e){return!!e&&("SUMMARY"===e.tagName||ht(e.parentElement))}function bt(e,t){return!!e&&(e===t||bt(e.parentElement,t))}function Et(e){var t=e.summary,n=e.children,l=(0,_.Z)(e,gt),o=(0,we.Z)(),c=(0,a.useRef)(null),s=(0,ae.u)({initialState:!l.open}),u=s.collapsed,m=s.setCollapsed,d=(0,a.useState)(l.open),p=d[0],v=d[1];return a.createElement("details",(0,i.Z)({},l,{ref:c,open:p,"data-collapsed":u,className:(0,r.Z)(pt,o&&vt,l.className),onMouseDown:function(e){ht(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ht(t)&&bt(t,c.current)&&(e.preventDefault(),u?(m(!1),v(!0)):m(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(ae.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),v(!e)}},a.createElement("div",{className:ft},n)))}var yt="details_b_Ee";function kt(e){var t=Object.assign({},e);return a.createElement(Et,(0,i.Z)({},t,{className:(0,r.Z)("alert alert--info",yt,t.className)}))}function Nt(e){return a.createElement(fe,e)}var Lt="containsTaskList_mC6p";var Ct="img_ev3q";var Zt={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,_.Z)(n,Te));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(_e.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(dt,e)},a:function(e){return a.createElement(u.Z,e)},pre:function(e){var t;return a.createElement(dt,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(kt,(0,i.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,i.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Lt))}));var t},img:function(e){return a.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,Ct))}));var t},h1:function(e){return a.createElement(Nt,(0,i.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Nt,(0,i.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Nt,(0,i.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Nt,(0,i.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Nt,(0,i.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Nt,(0,i.Z)({as:"h6"},e))}};function _t(e){var t=e.children;return a.createElement(Ze.Zo,{components:Zt},t)}var Tt="docItemContainer_Adtb",wt="docItemCol_GujU",xt="tocMobile_aoJ5";function Bt(e){var t,n=e.content,r=n.metadata,o=n.frontMatter,c=n.assets,i=o.keywords,s=r.description,u=r.title,m=null!=(t=c.image)?t:o.image;return a.createElement(l.d,{title:u,description:s,keywords:i,image:m})}function Ot(e){var t=e.content,n=t.metadata,l=t.frontMatter,i=l.hide_title,s=l.hide_table_of_contents,u=l.toc_min_heading_level,m=l.toc_max_heading_level,p=n.title,v=!i&&void 0===t.contentTitle,f=(0,o.i)(),g=!s&&t.toc&&t.toc.length>0,h=g&&("desktop"===f||"ssr"===f);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!s&&wt)},a.createElement(k,null),a.createElement("div",{className:Tt},a.createElement("article",null,a.createElement(Ce,null),a.createElement(N,null),g&&a.createElement(me,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:m,className:(0,r.Z)(c.k.docs.docTocMobile,xt)}),a.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},v&&a.createElement("header",null,a.createElement(fe,{as:"h1"},p)),a.createElement(_t,null,a.createElement(t,null))),a.createElement(D,e)),a.createElement(d,{previous:n.previous,next:n.next}))),h&&a.createElement("div",{className:"col col--3"},a.createElement(ne,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:m,className:c.k.docs.docTocDesktop})))}function jt(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(Bt,e),a.createElement(Ot,e))}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);