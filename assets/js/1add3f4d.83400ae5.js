(self.webpackChunk=self.webpackChunk||[]).push([[35085],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?r.createElement(y,o(o({ref:t},u),{},{components:a})):r.createElement(y,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),o=["components"],l={id:"community-learning-resources",title:"Community Learning Resources"},s=void 0,c={unversionedId:"community-learning-resources",id:"version-v1.5.0/community-learning-resources",isDocsHomePage:!1,title:"Community Learning Resources",description:"Relay example projects",source:"@site/versioned_docs/version-v1.5.0/Community-LearningResources.md",sourceDirName:".",slug:"/community-learning-resources",permalink:"/docs/v1.5.0/community-learning-resources",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.5.0/Community-LearningResources.md",version:"v1.5.0",lastUpdatedBy:"Saintmalik",lastUpdatedAt:1630506599,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"community-learning-resources",title:"Community Learning Resources"}},u=[{value:"Relay example projects",id:"relay-example-projects",children:[]},{value:"Learn basics",id:"learn-basics",children:[]},{value:"About Relay Store",id:"about-relay-store",children:[]},{value:"Network Layer",id:"network-layer",children:[]},{value:"Relay Configuration",id:"relay-configuration",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],m={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"relay-example-projects"},"Relay example projects"),(0,i.kt)("p",null,"These projects serve as an example of how to use Relay in real world applications. Some of them are even with educational videos."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/relayjs/relay-examples"},"github.com/relayjs/relay-examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adeira/relay-example"},"github.com/adeira/relay-example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/juffalow/react-relay-example"},"github.com/juffalow/react-relay-example"))),(0,i.kt)("h2",{id:"learn-basics"},"Learn basics"),(0,i.kt)("p",null,"Here, you will find articles written by Relay community. They are touching basic topic which are necessary for your daily work."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-what-is-a-fragment-c70f164c2469"},"What is a fragment? Basic explanation of what is a fragment and what it is used for")," (by @sibelius)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/relay-apollo-anti-pattern-d9f4dea47738"},"Relay anti-patterns. What you should avoid doing when using Relay concepts")," (by Entria)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/relay-is-just-getting-better-54112ffc1a9e"},"Insights of how Relay Modern has improved a lot since Relay Classic")," (by Entria)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-argumentdefinitions-d53769dbb95d"},"How to use @argumentsDefinitions to define local variables to your fragments")," (by Entria)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-pagination-using-refetch-container-editing-a07c6b33ae4e"},"How to paginate using a Refetch Container. You can use a refetch container to paginate as well, just use renderVariables correctly")," (by Entria)")),(0,i.kt)("h2",{id:"about-relay-store"},"About Relay Store"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-the-relay-store-8984cd148798"},"How Relay Modern stores your data")," (by @sibelius)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/wrangling-the-client-store-with-the-relay-modern-updater-function-5c32149a71ac"},"Deep Dive of Updater Relay Store function. How to update your store properly after a mutation or subscription")," (by Entria)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-optimistic-update-a09ba22d83c9"},"Optimistic Update: how to update your UI before server responds")," (by Entria)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://babangsund.com/relay_local_state_management/"},"Local State Management, part 1 - how to create a controlled input using Relay")," (by @babangsund)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://babangsund.com/relay_local_state_management_2/"},"Local State Management, part 2 - how to manage global state and localStorage persistence on the client, using Relay")," (by @babangsund)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://babangsund.com/relay_local_state_management_3/"},"Local State Management, part 3 - using LocalQueryRenderer and local state to manage nested fragments")," (by @babangsund)")),(0,i.kt)("h2",{id:"network-layer"},"Network Layer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3"},"Relay Network Deep Dive - how to incrementally improve your network layer to manage complex data fetching requirements")," (by Entria)")),(0,i.kt)("h2",{id:"relay-configuration"},"Relay Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-migration-to-typescript-c26ab0ee749c"},"Relay Modern with TypeScript - how to configure Relay Modern to make it with TypeScript")," (by @sibelius)")),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/sseraphini/status/1078595758801203202"},"Relay Modern Learning Blog Posts Thread on Twitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mrtnzlml.com/docs/relay"},"Collection of random thoughts and discoveries around Relay"))))}p.isMDXComponent=!0}}]);