(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{3903:function(e,t,n){Promise.resolve().then(n.bind(n,2719))},4406:function(e,t,n){"use strict";n.d(t,{LJ:function(){return u},Rl:function(){return f},Zi:function(){return m},kT:function(){return d},oi:function(){return o},yS:function(){return h}});var a=n(6125),r=n(4362);let s="Ankihon: Master Japanese, One Flashcard at a Time!",i="Ankihon";async function c(){return r.m.services.ankiConnect.createDeck(s)}async function o(){let e=await r.m.services.ankiConnect.deckNamesAndIds();return s in e?e[s]:c()}async function l(){return(await r.m.services.ankiConnect.createModel({modelName:i,inOrderFields:["Translation","Kanji","Kana"],css:'body,html{height:100%}.card{height:95%;display:flex;align-items:center;justify-content:center;font-family:arial;font-size:20px;text-align:center;color:#000;background-color:#fff}.translation_front{font-family:"Arial";font-size:24px;color:#fafafa;font-weight:700}.kana_back,.kanji_back,.translation_back{font-family:"Arial";font-size:16px;color:#d4d4d8;font-weight:700}.kana_back,.kanji_back{font-size:36px;color:#fafafa}.kana_back{font-size:14px;color:#a1a1a1}',isCloze:!1,cardTemplates:[{Name:"Default Template",Front:'<div class="translation_front">{{Translation}}</div>',Back:'<div class="translation_back">{{Translation}}</div><div class="kanji_back">{{Kanji}}</div><div class="kana_back">{{Kana}}</div>'}]})).id}async function u(){let e=await r.m.services.ankiConnect.modelNamesAndIds();return i in e?e[i]:l()}async function d(e,t,n){var c,o,l;return r.m.services.ankiConnect.addNote({deckName:s,modelName:i,fields:{Kana:(null==n?void 0:null===(l=n.translation)||void 0===l?void 0:null===(o=l.from)||void 0===o?void 0:null===(c=o.text)||void 0===c?void 0:c.pronunciation)?(0,a.gY)(n.translation.from.text.pronunciation):"",Kanji:e,Translation:t},options:{allowDuplicate:!1,audio:[],duplicateScope:"deck",duplicateScopeOptions:{deckName:s,checkChildren:!1,checkAllModels:!1},picture:[],tags:["Ankihon"],video:[]}})}async function f(e){return r.m.services.ankiConnect.cardsInfo(e)}async function h(){return r.m.services.ankiConnect.findCards('deck:\\"'.concat(s,'\\" is:learn'))}async function m(e,t){return r.m.services.ankiConnect.answerCards([{cardId:e,ease:"again"===t?1:3}])}},2719:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(7437),r=n(4406),s=n(4362),i=n(4559);function c(e){let{className:t,children:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"".concat(t," border border-zinc-700 rounded-lg h-full bg-zinc-900"),children:n})})}var o=n(9205);let l=(0,o.Z)("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),u=(0,o.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var d=n(3145),f=n(7648);let h=e=>{if(!e||0===e.length)return"";let t=e.toLowerCase();return t.substring(0,1).toUpperCase()+t.substring(1,t.length)};var m=n(2265);function k(){let[e,t]=(0,i.o)();async function n(e){let t=new SpeechSynthesisUtterance(e);t.voice=s.m.japVoices[0],window.speechSynthesis.speak(t)}let[o,k]=(0,m.useState)(!1),[v,g]=(0,m.useState)(0),[p,x]=(0,m.useState)(0),[w,y]=(0,m.useState)("0.6s"),j=(0,m.useRef)(null);function b(e){x(e.targetTouches[0].clientX)}function N(e){g(e.targetTouches[0].clientX)}async function C(n,a){["left","right"].includes(n)&&("left"===n&&await (0,r.Zi)(a,"again"),"right"===n&&await (0,r.Zi)(a,"good"),t(e.slice(0,-1)))}function S(){y("0.6s"),o||n(e[e.length-1].kanji),k(!0)}return(0,a.jsxs)("div",{className:"h-dvh w-dvw",children:[(0,a.jsxs)("div",{className:"flex justify-center h-full items-center relative",children:[e.map((t,r)=>(0,a.jsx)("div",{className:"absolute w-72 max-w-[85dvw] h-[75%] bg-cover bg-center rounded-3xl shadow-2xl flex justify-center items-end text-zinc-50 text-2xl transition-transform ease-in-out duration-300 card ".concat(r===e.length-1?"z-50":"scale-75 opacity-70"),onTouchStart:b,onTouchMove:N,onTouchEnd:()=>(function(e){if(!p||!v||!o)return;let t=p-v;t>100?(C("left",e),y("0s"),k(!1)):t<-100&&(C("right",e),y("0s"),k(!1)),x(0),g(0)})(t.id),ref:r===e.length-1?j:null,children:(0,a.jsx)("div",{className:"h-full w-full perspective-1000",onClick:S,children:(0,a.jsxs)("div",{className:"transform-style-3d h-full w-full relative shadow-md text-center ".concat(o?"transform rotate-y-180":""),style:{transition:"transform ".concat(w," ease")},children:[(0,a.jsx)("div",{className:"h-full w-full absolute backface-hidden",children:(0,a.jsxs)(c,{className:"h-full w-full flex flex-col items-center justify-center",children:[t.image&&(0,a.jsx)(d.default,{width:100,height:100,alt:"icon representing the card",src:t.image}),(0,a.jsx)("p",{className:"font-bold text-4xl text-zinc-50",children:h(t.translation)})]})}),(0,a.jsx)("div",{className:"h-full w-full absolute backface-hidden transform rotate-y-180",children:(0,a.jsxs)(c,{className:"h-full w-full flex flex-col items-center justify-center",children:[t.image&&(0,a.jsx)(d.default,{width:100,height:100,alt:"icon representing the card",src:t.image}),(0,a.jsx)("p",{className:"font-medium p-3 text-zinc-300",children:h(t.translation)}),(0,a.jsxs)("div",{className:"flex items-center relative -left-[22px]",children:[(0,a.jsx)("khk-button",{variant:"quiet",suppressHydrationWarning:!0,full:!0,class:"h-full",onClick:()=>n(t.kanji),children:(0,a.jsx)(l,{size:18})}),(0,a.jsx)("p",{lang:"ja",className:"font-bold text-4xl text-zinc-50",children:t.kanji})]}),(0,a.jsx)("p",{lang:"ja-Kana",className:"font-bold p-1 text-sm text-zinc-400",children:t.kana})]})})]})})},t.translation)),!e.length&&(0,a.jsx)("p",{className:"m-8 font-medium",children:"\uD83C\uDF89 Congratulations! You have finished this deck for now."})]}),(0,a.jsx)("div",{className:"absolute right-0 bottom-0 m-4",children:(0,a.jsx)("div",{className:"h-11 w-11",children:(0,a.jsx)(f.default,{href:"/main/card",children:(0,a.jsx)("khk-button",{variant:"outline",full:!0,shape:"circular",class:"flex h-full w-full",children:(0,a.jsx)(u,{})})})})}),(0,a.jsx)("div",{className:"absolute bottom-0 m-2 left-0 right-0 w-fit ml-auto mr-auto",children:(0,a.jsxs)("p",{className:"text-xs text-zinc-600",children:["Icons designed by"," ",(0,a.jsx)("a",{className:"underline",href:"https://www.freepik.com/",target:"_blank",children:"Freepik"})]})})]})}},4362:function(e,t,n){"use strict";n.d(t,{m:function(){return c}});class a{async fetch(e,t){var n;let a=await fetch(e,t);if(!a.ok)throw Error(a.statusText);return(null===(n=a.headers.get("Content-Type"))||void 0===n?void 0:n.includes("json"))?await a.json():await a.text()}constructor(){}}class r extends a{async invoke(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6,{result:r,error:s}=await this.fetch("http://localhost:8765",{method:"POST",body:JSON.stringify({action:e,params:t,key:n,version:a})});if(s)throw Error(s);return r}async deckNames(){return this.invoke("deckNames")}async deckNamesAndIds(){return this.invoke("deckNamesAndIds")}async createDeck(e){return this.invoke("createDeck",{deck:e})}async modelNames(){return this.invoke("modelNames")}async modelNamesAndIds(){return this.invoke("modelNamesAndIds")}async createModel(e){return this.invoke("createModel",e)}async addNote(e){return this.invoke("addNote",{note:e})}async cardReviews(e){return this.invoke("cardReviews",e)}async getReviewsOfCards(e){return this.invoke("getReviewsOfCards",{cards:e})}async cardsInfo(e){return this.invoke("cardsInfo",{cards:e})}async findNotes(e){return this.invoke("findNotes",{query:e})}async notesInfo(e){return this.invoke("notesInfo",{notes:e})}async answerCards(e){return this.invoke("answerCards",{answers:e})}async findCards(e){return this.invoke("findCards",{query:e})}constructor(){super()}}var s=n(1732);class i extends a{async translate(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return await (0,s.ZP)(e,{from:t?"en":"ja",to:t?"ja":"en",corsUrl:"http://cors-anywhere.herokuapp.com/"})}constructor(){super()}}let c={japVoices:[],services:{ankiConnect:new r,translate:new i}}},4559:function(e,t,n){"use strict";let a;n.d(t,{y:function(){return l},o:function(){return u}});var r=n(2265);let s=e=>{let t;let n=new Set,a=(e,a)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=a?a:"object"!=typeof r||null===r)?r:Object.assign({},t,r),n.forEach(n=>n(t,e))}},r=()=>t,s={setState:a,getState:r,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e))},i=t=e(a,r,s);return s},i=e=>e?s(e):s,c=e=>e,o=e=>{let t=i(e),n=e=>(function(e,t=c){let n=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},l=(a=e=>({cards:[],setCards:t=>e({cards:t})}))?o(a):o,u=()=>[l(e=>e.cards),l(e=>e.setCards)]},9205:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(2265);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,a.forwardRef)((e,t)=>{let{color:n="currentColor",size:r=24,strokeWidth:c=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:d,...f}=e;return(0,a.createElement)("svg",{ref:t,...i,width:r,height:r,stroke:n,strokeWidth:o?24*Number(c)/Number(r):c,className:s("lucide",l),...f},[...d.map(e=>{let[t,n]=e;return(0,a.createElement)(t,n)}),...Array.isArray(u)?u:[u]])}),o=(e,t)=>{let n=(0,a.forwardRef)((n,i)=>{let{className:o,...l}=n;return(0,a.createElement)(c,{ref:i,iconNode:t,className:s("lucide-".concat(r(e)),o),...l})});return n.displayName="".concat(e),n}},3145:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var a=n(8461),r=n.n(a)},7648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var a=n(2972),r=n.n(a)},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return c}});let a=n(7043),r=n(5346),s=n(5878),i=a._(n(5084));function c(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ankihon-core/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=s.Image}},function(e){e.O(0,[609,883,971,117,744],function(){return e(e.s=3903)}),_N_E=e.O()}]);