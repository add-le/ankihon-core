(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7170:function(e,t,n){var a={"./app-root.entry.js":[5011,11],"./i-lucide.entry.js":[2261,792,301],"./khk-button.entry.js":[1857,979],"./khk-dialog-root.entry.js":[9221,111,648],"./khk-dialog.entry.js":[5522,522],"./khk-menu-item.entry.js":[6431,431],"./khk-menu-root.entry.js":[1179,669],"./khk-menu.entry.js":[7008,8],"./khk-textfield.entry.js":[8813,813]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(r)})}r.keys=function(){return Object.keys(a)},r.id=7170,e.exports=r},5434:function(e,t,n){Promise.resolve().then(n.t.bind(n,7960,23)),Promise.resolve().then(n.bind(n,4078))},4078:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var a=n(226);let r=()=>{};(()=>{let e={};return e.resourcesUrl=new URL(".","file:///home/laochun/@ankihon/ankihon-core/node_modules/@add-le/ankihon-kohaku/dist/esm/kohaku.js").href,(0,a.p)(e)})().then(async e=>(await r(),(0,a.b)([["khk-button",[[65,"khk-button",{variant:[1],full:[4],size:[1],shape:[1],isLoading:[4,"is-loading"],disabled:[4],type:[513]}]]],["app-root",[[1,"app-root"]]],["khk-dialog",[[1,"khk-dialog"]]],["khk-dialog-root",[[1,"khk-dialog-root"]]],["khk-menu",[[1,"khk-menu",{placement:[1]}]]],["khk-menu-item",[[1,"khk-menu-item"]]],["khk-menu-root",[[1,"khk-menu-root"]]],["khk-textfield",[[65,"khk-textfield",{label:[1],placeholder:[1],value:[1025],size:[1],description:[1],required:[4],name:[513],type:[513]},null,{value:["handleFormData"]}]]],["i-lucide",[[1,"i-lucide",{icon:[1],size:[2]}]]]],e)));var l=n(2265),s=n(4406),o=n(4362),i=n(4559);function c(){let e=(0,i.y)(e=>e.setCards);return(0,l.useEffect)(()=>{(async function(){await (0,s.oi)(),await (0,s.LJ)();let t=await (0,s.yS)();e(Object.values(await (0,s.Rl)(t)).sort((e,t)=>e.due-t.due).map(e=>{var t,n,a,r;return{id:e.cardId,translation:null===(t=e.fields.Translation)||void 0===t?void 0:t.value,kanji:null===(n=e.fields.Kanji)||void 0===n?void 0:n.value,kana:null===(a=e.fields.Kana)||void 0===a?void 0:a.value,image:null===(r=e.fields.Image)||void 0===r?void 0:r.value}}));let n=(await new Promise(function(e){let t=window.speechSynthesis,n=setInterval(()=>{0!==t.getVoices().length&&(e(t.getVoices()),clearInterval(n))},10)})).filter(e=>"ja-JP"===e.lang);o.m.japVoices=n})()}),null}},4406:function(e,t,n){"use strict";n.d(t,{LJ:function(){return $},Rl:function(){return d},Zi:function(){return h},kT:function(){return u},oi:function(){return i},yS:function(){return f}});var a=n(6125),r=n(4362);let l="Ankihon: Master Japanese, One Flashcard at a Time!",s="Ankihon";async function o(){return r.m.services.ankiConnect.createDeck(l)}async function i(){let e=await r.m.services.ankiConnect.deckNamesAndIds();return l in e?e[l]:o()}async function c(){return(await r.m.services.ankiConnect.createModel({modelName:s,inOrderFields:["Translation","Kanji","Kana"],css:'body,html{height:100%}.card{height:95%;display:flex;align-items:center;justify-content:center;font-family:arial;font-size:20px;text-align:center;color:#000;background-color:#fff}.translation_front{font-family:"Arial";font-size:24px;color:#fafafa;font-weight:700}.kana_back,.kanji_back,.translation_back{font-family:"Arial";font-size:16px;color:#d4d4d8;font-weight:700}.kana_back,.kanji_back{font-size:36px;color:#fafafa}.kana_back{font-size:14px;color:#a1a1a1}',isCloze:!1,cardTemplates:[{Name:"Default Template",Front:'<div class="translation_front">{{Translation}}</div>',Back:'<div class="translation_back">{{Translation}}</div><div class="kanji_back">{{Kanji}}</div><div class="kana_back">{{Kana}}</div>'}]})).id}async function $(){let e=await r.m.services.ankiConnect.modelNamesAndIds();return s in e?e[s]:c()}async function u(e,t,n){var o,i,c;return r.m.services.ankiConnect.addNote({deckName:l,modelName:s,fields:{Kana:(null==n?void 0:null===(c=n.translation)||void 0===c?void 0:null===(i=c.from)||void 0===i?void 0:null===(o=i.text)||void 0===o?void 0:o.pronunciation)?(0,a.gY)(n.translation.from.text.pronunciation):"",Kanji:e,Translation:t},options:{allowDuplicate:!1,audio:[],duplicateScope:"deck",duplicateScopeOptions:{deckName:l,checkChildren:!1,checkAllModels:!1},picture:[],tags:["Ankihon"],video:[]}})}async function d(e){return r.m.services.ankiConnect.cardsInfo(e)}async function f(){return r.m.services.ankiConnect.findCards('deck:"'.concat(l,'" is:learn'))}async function h(e,t){return r.m.services.ankiConnect.answerCards([{cardId:e,ease:"again"===t?1:3}])}},4362:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});class a{async fetch(e,t){var n;let a=await fetch(e,t);if(!a.ok)throw Error(a.statusText);return(null===(n=a.headers.get("Content-Type"))||void 0===n?void 0:n.includes("json"))?await a.json():await a.text()}constructor(){}}class r extends a{async invoke(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6,{result:r,error:l}=await this.fetch("http://localhost:8765",{method:"POST",body:JSON.stringify({action:e,params:t,key:n,version:a})});if(l)throw Error(l);return r}async deckNames(){return this.invoke("deckNames")}async deckNamesAndIds(){return this.invoke("deckNamesAndIds")}async createDeck(e){return this.invoke("createDeck",{deck:e})}async modelNames(){return this.invoke("modelNames")}async modelNamesAndIds(){return this.invoke("modelNamesAndIds")}async createModel(e){return this.invoke("createModel",e)}async addNote(e){return this.invoke("addNote",{note:e})}async cardReviews(e){return this.invoke("cardReviews",e)}async getReviewsOfCards(e){return this.invoke("getReviewsOfCards",{cards:e})}async cardsInfo(e){return this.invoke("cardsInfo",{cards:e})}async findNotes(e){return this.invoke("findNotes",{query:e})}async notesInfo(e){return this.invoke("notesInfo",{notes:e})}async answerCards(e){return this.invoke("answerCards",{answers:e})}async findCards(e){return this.invoke("findCards",{query:e})}constructor(){super()}}var l=n(1732);class s extends a{async translate(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return await (0,l.ZP)(e,{from:t?"en":"ja",to:t?"ja":"en",corsUrl:"http://cors-anywhere.herokuapp.com/"})}constructor(){super()}}let o={japVoices:[],services:{ankiConnect:new r,translate:new s}}},4559:function(e,t,n){"use strict";let a;n.d(t,{y:function(){return c},o:function(){return $}});var r=n(2265);let l=e=>{let t;let n=new Set,a=(e,a)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=a?a:"object"!=typeof r||null===r)?r:Object.assign({},t,r),n.forEach(n=>n(t,e))}},r=()=>t,l={setState:a,getState:r,getInitialState:()=>s,subscribe:e=>(n.add(e),()=>n.delete(e))},s=t=e(a,r,l);return l},s=e=>e?l(e):l,o=e=>e,i=e=>{let t=s(e),n=e=>(function(e,t=o){let n=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},c=(a=e=>({cards:[],setCards:t=>e({cards:t})}))?i(a):i,$=()=>[c(e=>e.cards),c(e=>e.setCards)]},7960:function(){},226:function(e,t,n){"use strict";n.d(t,{H:function(){return U},b:function(){return eI},c:function(){return H},g:function(){return J},h:function(){return L},p:function(){return g},r:function(){return c}});let a={hydratedSelectorName:"hydrated",scoped:!1,slotRelocation:!1,updatable:!0};var r,l,s=Object.defineProperty,o=new WeakMap,i=e=>o.get(e),c=(e,t)=>o.set(t.$lazyInstance$=e,t),$=(e,t)=>{let n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[],o.set(e,n)},u=(e,t)=>t in e,d=(e,t)=>(0,console.error)(e,t),f=new Map,h=(e,t,a)=>{let r=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$;if(!l)return;let s=f.get(l);return s?s[r]:n(7170)(`./${l}.entry.js`).then(e=>(f.set(l,e),e[r]),d)},m="http://www.w3.org/1999/xlink",p=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"],k="undefined"!=typeof window?window:{},y=k.document||{head:{}},v={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,a)=>e.addEventListener(t,n,a),rel:(e,t,n,a)=>e.removeEventListener(t,n,a),ce:(e,t)=>new CustomEvent(e,t)},g=e=>Promise.resolve(e),b=!1,w=[],N=[],j=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){d(e)}e.length=0},C=()=>{j(w),j(N),(b=w.length>0)&&v.raf(C)},R=e=>g().then(e),E=e=>{N.push(e),b||(b=!0,4&v.$flags$?R(C):v.raf(C))},x={},O=e=>null!=e,S=e=>"object"==(e=typeof e)||"function"===e;((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})({},{err:()=>P,map:()=>A,ok:()=>I,unwrap:()=>_,unwrapErr:()=>T});var I=e=>({isOk:!0,isErr:!1,value:e}),P=e=>({isOk:!1,isErr:!0,value:e});function A(e,t){if(e.isOk){let n=t(e.value);return n instanceof Promise?n.then(e=>I(e)):I(n)}if(e.isErr)return P(e.value);throw"should never get here"}var _=e=>{if(e.isOk)return e.value;throw e.value},T=e=>{if(e.isErr)return e.value;throw e.value},z=(e,t="")=>()=>{},M=(e,t)=>()=>{},L=(e,t,...n)=>{let a=null,r=null,l=!1,s=!1,o=[],i=t=>{for(let n=0;n<t.length;n++)Array.isArray(a=t[n])?i(a):null!=a&&"boolean"!=typeof a&&((l="function"!=typeof e&&!S(a))&&(a=String(a)),l&&s?o[o.length-1].$text$+=a:o.push(l?D(null,a):a),s=l)};if(i(n),t){t.key&&(r=t.key);{let e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,o,F);let c=D(e,null);return c.$attrs$=t,o.length>0&&(c.$children$=o),c.$key$=r,c},D=(e,t)=>{let n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n.$attrs$=null,n.$key$=null,n},U={},V=e=>e&&e.$tag$===U,F={forEach:(e,t)=>e.map(K).forEach(t),map:(e,t)=>e.map(K).map(t).map(B)},K=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),B=e=>{if("function"==typeof e.vtag){let t={...e.vattrs};return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),L(e.vtag,t,...e.vchildren||[])}let t=D(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},q=(e,t)=>{if(null!=e&&!S(e)){if(4&t)return"false"!==e&&(""===e||!!e);if(2&t)return parseFloat(e);if(1&t)return String(e)}return e},J=e=>i(e).$hostElement$,H=(e,t,n)=>{let a=J(e);return{emit:e=>W(a,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},W=(e,t,n)=>{let a=v.ce(t,n);return e.dispatchEvent(a),a},Z=(e,t,n,a,r,l)=>{if(n!==a){let s=u(e,t),o=t.toLowerCase();if("class"===t){let t=e.classList,r=Y(n),l=Y(a);t.remove(...r.filter(e=>e&&!l.includes(e))),t.add(...l.filter(e=>e&&!r.includes(e)))}else if("style"===t){for(let t in n)a&&null!=a[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(let t in a)n&&a[t]===n[t]||(t.includes("-")?e.style.setProperty(t,a[t]):e.style[t]=a[t])}else if("key"===t);else if("ref"===t)a&&a(e);else if(s||"o"!==t[0]||"n"!==t[1]){let i=S(a);if((s||i&&null!==a)&&!r)try{if(e.tagName.includes("-"))e[t]=a;else{let r=null==a?"":a;"list"===t?s=!1:(null==n||e[t]!=r)&&("function"==typeof e.__lookupSetter__(t)?e[t]=r:e.setAttribute(t,r))}}catch(e){}let c=!1;o!==(o=o.replace(/^xlink\:?/,""))&&(t=o,c=!0),null==a||!1===a?(!1!==a||""===e.getAttribute(t))&&(c?e.removeAttributeNS(m,t):e.removeAttribute(t)):(!s||4&l||r)&&!i&&(a=!0===a?"":a,c?e.setAttributeNS(m,t,a):e.setAttribute(t,a))}else if(t="-"===t[2]?t.slice(3):u(k,o)?o.slice(2):o[2]+t.slice(3),n||a){let r=t.endsWith(Q);t=t.replace(X,""),n&&v.rel(e,t,n,r),a&&v.ael(e,t,a,r)}}},G=/\s/,Y=e=>e?e.split(G):[],Q="Capture",X=RegExp(Q+"$"),ee=(e,t,n)=>{let a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||x,l=t.$attrs$||x;for(let e of et(Object.keys(r)))e in l||Z(a,e,r[e],void 0,n,t.$flags$);for(let e of et(Object.keys(l)))Z(a,e,r[e],l[e],n,t.$flags$)};function et(e){return e.includes("ref")?[...e.filter(e=>"ref"!==e),"ref"]:e}var en=!1,ea=(e,t,n,s)=>{let o,i;let c=t.$children$[n],$=0;if(null!==c.$text$)o=c.$elm$=y.createTextNode(c.$text$);else if(o=c.$elm$=y.createElement(!en&&a.slotRelocation&&2&c.$flags$?"slot-fb":c.$tag$),ee(null,c,!1),o.getRootNode().querySelector("body")&&a.scoped&&O(r)&&o["s-si"]!==r&&o.classList.add(o["s-si"]=r),c.$children$)for($=0;$<c.$children$.length;++$)(i=ea(e,c,$))&&o.appendChild(i);return o["s-hn"]=l,o},er=(e,t,n,a,r,s)=>{let o,i=e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);r<=s;++r)a[r]&&(o=ea(null,n,r))&&(a[r].$elm$=o,e$(i,o,t))},el=(e,t,n)=>{for(let a=t;a<=n;++a){let t=e[a];if(t){let e=t.$elm$;ec(t),e&&e.remove()}}},es=(e,t,n,a,r=!1)=>{let l,s,o=0,i=0,c=0,$=0,u=t.length-1,d=t[0],f=t[u],h=a.length-1,m=a[0],p=a[h];for(;o<=u&&i<=h;)if(null==d)d=t[++o];else if(null==f)f=t[--u];else if(null==m)m=a[++i];else if(null==p)p=a[--h];else if(eo(d,m,r))ei(d,m,r),d=t[++o],m=a[++i];else if(eo(f,p,r))ei(f,p,r),f=t[--u],p=a[--h];else if(eo(d,p,r))ei(d,p,r),e$(e,d.$elm$,f.$elm$.nextSibling),d=t[++o],p=a[--h];else if(eo(f,m,r))ei(f,m,r),e$(e,f.$elm$,d.$elm$),f=t[--u],m=a[++i];else{for(c=-1,$=o;$<=u;++$)if(t[$]&&null!==t[$].$key$&&t[$].$key$===m.$key$){c=$;break}c>=0?(s=t[c]).$tag$!==m.$tag$?l=ea(t&&t[i],n,c):(ei(s,m,r),t[c]=void 0,l=s.$elm$):l=ea(t&&t[i],n,i),m=a[++i],l&&e$(d.$elm$.parentNode,l,d.$elm$)}o>u?er(e,null==a[h+1]?null:a[h+1].$elm$,n,a,i,h):i>h&&el(t,o,u)},eo=(e,t,n=!1)=>e.$tag$===t.$tag$&&(!!n||e.$key$===t.$key$),ei=(e,t,n=!1)=>{let r=t.$elm$=e.$elm$,l=e.$children$,s=t.$children$,o=t.$tag$,i=t.$text$;null===i?(("slot"!==o||en)&&ee(e,t,!1),null!==l&&null!==s?es(r,l,t,s,n):null!==s?(null!==e.$text$&&(r.textContent=""),er(r,null,t,s,0,s.length-1)):!n&&a.updatable&&null!==l&&el(l,0,l.length-1)):e.$text$!==i&&(r.data=i)},ec=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(ec)},e$=(e,t,n)=>null==e?void 0:e.insertBefore(t,n),eu=(e,t,n=!1)=>{let a=e.$hostElement$,s=e.$cmpMeta$,o=e.$vnode$||D(null,null),i=V(t)?t:L(null,null,t);if(l=a.tagName,s.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},s.$attrsToReflect$.map(([e,t])=>i.$attrs$[t]=a[e])),n&&i.$attrs$)for(let e of Object.keys(i.$attrs$))a.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(i.$attrs$[e]=a[e]);i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=o.$elm$=a.shadowRoot||a,r=a["s-sc"],en=(1&s.$flags$)!=0,ei(o,i,n)},ed=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},ef=(e,t)=>{if(e.$flags$|=16,4&e.$flags$){e.$flags$|=512;return}return ed(e,e.$ancestorComponent$),E(()=>eh(e,t))},eh=(e,t)=>{let n;let a=e.$hostElement$,r=z("scheduleUpdate",e.$cmpMeta$.$tagName$),l=e.$lazyInstance$;if(!l)throw Error(`Can't render component <${a.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);return t&&(n=eb(l,"componentWillLoad")),r(),em(n,()=>ek(e,l,t))},em=(e,t)=>ep(e)?e.then(t).catch(e=>{console.error(e),t()}):t(),ep=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,ek=async(e,t,n)=>{var a;let r=e.$hostElement$,l=z("update",e.$cmpMeta$.$tagName$),s=r["s-rc"],o=z("render",e.$cmpMeta$.$tagName$);ey(e,t,r,n),s&&(s.map(e=>e()),r["s-rc"]=void 0),o(),l();{let t=null!=(a=r["s-p"])?a:[],n=()=>ev(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},ey=(e,t,n,a)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,eu(e,t,a)}catch(t){d(t,e.$hostElement$)}return null},ev=e=>{let t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,a=z("postUpdate",t),r=e.$lazyInstance$,l=e.$ancestorComponent$;64&e.$flags$?a():(e.$flags$|=64,ew(n),eb(r,"componentDidLoad"),a(),e.$onReadyResolve$(n),l||eg()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&R(()=>ef(e,!1)),e.$flags$&=-517},eg=e=>{ew(y.documentElement),R(()=>W(k,"appload",{detail:{namespace:"kohaku"}}))},eb=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){d(e)}},ew=e=>{var t;return e.classList.add(null!=(t=a.hydratedSelectorName)?t:"hydrated")},eN=(e,t)=>i(e).$instanceValues$.get(t),ej=(e,t,n,a)=>{let r=i(e);if(!r)throw Error(`Couldn't find host element for "${a.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);let l=r.$hostElement$,s=r.$instanceValues$.get(t),o=r.$flags$,c=r.$lazyInstance$;n=q(n,a.$members$[t][0]);let $=Number.isNaN(s)&&Number.isNaN(n),u=n!==s&&!$;if((!(8&o)||void 0===s)&&u&&(r.$instanceValues$.set(t,n),c)){if(a.$watchers$&&128&o){let e=a.$watchers$[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(e){d(e,l)}})}(18&o)==2&&ef(r,!1)}},eC=(e,t,n)=>{var a,r;let l=e.prototype;if(64&t.$flags$&&1&n&&p.forEach(e=>Object.defineProperty(l,e,{value(...t){let n=i(this),a=n.$lazyInstance$;if(a){let n=a[e];"function"==typeof n&&n.call(a,...t)}else n.$onReadyPromise$.then(n=>{let a=n[e];"function"==typeof a&&a.call(n,...t)})}})),t.$members$||t.$watchers$||e.watchers){e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers);let s=Object.entries(null!=(a=t.$members$)?a:{});if(s.map(([e,[a]])=>{(31&a||2&n&&32&a)&&Object.defineProperty(l,e,{get(){return eN(this,e)},set(n){ej(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){let n=new Map;l.attributeChangedCallback=function(e,a,r){v.jmp(()=>{var s;let o=n.get(e);if(this.hasOwnProperty(o))r=this[o],delete this[o];else if(l.hasOwnProperty(o)&&"number"==typeof this[o]&&this[o]==r)return;else if(null==o){let n=i(this),l=null==n?void 0:n.$flags$;if(l&&!(8&l)&&128&l&&r!==a){let l=n.$lazyInstance$,o=null==(s=t.$watchers$)?void 0:s[e];null==o||o.forEach(t=>{null!=l[t]&&l[t].call(l,r,a,e)})}return}this[o]=(null!==r||"boolean"!=typeof this[o])&&r})},e.observedAttributes=Array.from(new Set([...Object.keys(null!=(r=t.$watchers$)?r:{}),...s.filter(([e,t])=>15&t[0]).map(([e,a])=>{var r;let l=a[1]||e;return n.set(l,e),512&a[0]&&(null==(r=t.$attrsToReflect$)||r.push([e,l])),l})]))}}return e},eR=async(e,t,n,a)=>{let r;if((32&t.$flags$)==0){if(t.$flags$|=32,n.$lazyBundleId$){let e=h(n);if(e&&"then"in e){let t=M();r=await e,t()}else r=e;if(!r)throw Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);r.isProxied||(n.$watchers$=r.watchers,eC(r,n,2),r.isProxied=!0);let a=z("createInstance",n.$tagName$);t.$flags$|=8;try{new r(t)}catch(e){d(e)}t.$flags$&=-9,t.$flags$|=128,a()}else{r=e.constructor;let n=e.localName;customElements.whenDefined(n).then(()=>t.$flags$|=128)}}let l=t.$ancestorComponent$,s=()=>ef(t,!0);l&&l["s-rc"]?l["s-rc"].push(s):s()},eE=e=>{},ex=e=>{if((1&v.$flags$)==0){let t=i(e),n=t.$cmpMeta$,a=z("connectedCallback",n.$tagName$);if(1&t.$flags$)(null==t?void 0:t.$lazyInstance$)||(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then(()=>eE());else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){ed(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){let n=e[t];delete e[t],e[t]=n}}),eR(e,t,n)}a()}},eO=e=>{eb(e,"disconnectedCallback")},eS=async e=>{if((1&v.$flags$)==0){let t=i(e);(null==t?void 0:t.$lazyInstance$)?eO(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then(()=>eO(t.$lazyInstance$))}},eI=(e,t={})=>{var n,a,r,l;let s;let o=z(),c=[],u=t.exclude||[],d=k.customElements,f=y.head,h=f.querySelector("meta[charset]"),m=y.createElement("style"),p=[],g=!0;Object.assign(v,t),v.$resourcesUrl$=new URL(t.resourcesUrl||"./",y.baseURI).href;let b=!1;if(e.map(e=>{e[1].map(t=>{var n;let a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};4&a.$flags$&&(b=!0),a.$members$=t[2],a.$attrsToReflect$=[],a.$watchers$=null!=(n=t[4])?n:{};let r=a.$tagName$,l=class extends HTMLElement{constructor(e){if(super(e),this.hasRegisteredEventListeners=!1,e=this,$(e,a),1&a.$flags$){if(e.shadowRoot){if("open"!==e.shadowRoot.mode)throw Error(`Unable to re-use existing shadow root for ${a.$tagName$}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`)}else e.attachShadow({mode:"open"})}}connectedCallback(){i(this),this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0),s&&(clearTimeout(s),s=null),g?p.push(this):v.jmp(()=>ex(this))}disconnectedCallback(){v.jmp(()=>eS(this))}componentOnReady(){return i(this).$onReadyPromise$}};64&a.$flags$&&(l.formAssociated=!0),a.$lazyBundleId$=e[0],u.includes(r)||d.get(r)||(c.push(r),d.define(r,eC(l,a,1)))})}),c.length>0&&(b&&(m.textContent+="slot-fb{display:contents}slot-fb[hidden]{display:none}"),m.textContent+=c.sort()+"{visibility:hidden}.hydrated{visibility:inherit}",m.innerHTML.length)){m.setAttribute("data-styles","");let e=null!=(n=v.$nonce$)?n:null!=(l=null==(r=null==(a=y.head)?void 0:a.querySelector('meta[name="csp-nonce"]'))?void 0:r.getAttribute("content"))?l:void 0;null!=e&&m.setAttribute("nonce",e),f.insertBefore(m,h?h.nextSibling:f.firstChild)}g=!1,p.length?p.map(e=>e.connectedCallback()):v.jmp(()=>s=setTimeout(eg,30)),o()}}},function(e){e.O(0,[649,883,971,117,744],function(){return e(e.s=5434)}),_N_E=e.O()}]);