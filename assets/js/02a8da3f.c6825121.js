"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l="Golang-Backend",i={unversionedId:"webevaluator/go-backend",id:"webevaluator/go-backend",title:"Golang-Backend",description:"Introduction",source:"@site/docs/webevaluator/go-backend.md",sourceDirName:"webevaluator",slug:"/webevaluator/go-backend",permalink:"/documentation/docs/webevaluator/go-backend",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flask-Backend",permalink:"/documentation/docs/webevaluator/flask-backend"},next:{title:"Node-Backend",permalink:"/documentation/docs/webevaluator/node-backend"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Deployed Link",id:"deployed-link",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setting up the repository locally",id:"setting-up-the-repository-locally",level:2},{value:"Run locally",id:"run-locally",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golang-backend"},"Golang-Backend"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This repo contains the Go backend server code which by default runs locally on the port 8080."),(0,o.kt)("h2",{id:"deployed-link"},"Deployed Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gowebevaluator.onrender.com/status"},"https://gowebevaluator.onrender.com/status")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"Your machine should have golang version 1.17 or above, Npm(or Yarn) and Node.js installed to use it locally."),(0,o.kt)("h2",{id:"setting-up-the-repository-locally"},"Setting up the repository locally"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fork the repo to your account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone your forked repo to your local machine:\nReplace ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR_GITHUB_USERNAME>")," with your actual GitHub username in the below command. This will clone the code to your local machine."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/<YOUR_GITHUB_USERNAME>/gobackend.git (https)\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:<YOUR_GITHUB_USERNAME>/gobackend.git (ssh)\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Change directory to ",(0,o.kt)("inlineCode",{parentName:"li"},"gobackend"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd gobackend\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the remote of your local repo by:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote -v\n")),(0,o.kt)("p",null,"It should output the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"origin  https://github.com/<YOUR_GITHUB_USERNAME>/gobackend.git (fetch)\norigin  https://github.com/<YOUR_GITHUB_USERNAME>/gobackend.git (push)\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"origin  git@github.com:<YOUR_GITHUB_USERNAME>/gobackend.git (fetch)\norigin  git@github.com:<YOUR_GITHUB_USERNAME>/gobackend.git (push)\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Add remote upstream by running the below command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/webevaluator/gobackend.git (https)\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote add upstream git@github.com:webevaluator/gobackend.git (ssh)\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"git remote -v")," should then print the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"origin  https://github.com/<username>/gobackend.git (fetch)\norigin  https://github.com/<username>/gobackend.git (push)\nupstream    https://github.com/webevaluator/gobackend.git (fetch)\nupstream    https://github.com/webevaluator/gobackend.git (push)\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"origin  git@github.com:<username>/gobackend.git (fetch)\norigin  git@github.com:<username>/gobackend.git (push)\nupstream    git@github.com:webevaluator/gobackend.git (fetch)\nupstream    git@github.com:webevaluator/gobackend.git (push)\n")),(0,o.kt)("h2",{id:"run-locally"},"Run locally"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For installing dependencies run")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go install\nnpm install -g nodemon \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For starting the server run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nodemon --exec go run main.go --signal SIGTERM\n")),(0,o.kt)("p",null,"It will start the server at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080"),". You can check the server status at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080/status"),"."))}s.isMDXComponent=!0}}]);