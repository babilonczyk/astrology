import{r as i}from"./index.DiEladB3.js";var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function v(){if(h)return c;h=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(r,n,o){var l=null;if(o!==void 0&&(l=""+o),n.key!==void 0&&(l=""+n.key),"key"in n){o={};for(var s in n)s!=="key"&&(o[s]=n[s])}else o=n;return n=o.ref,{$$typeof:e,type:r,key:l,ref:n!==void 0?n:null,props:o}}return c.Fragment=t,c.jsx=a,c.jsxs=a,c}var k;function A(){return k||(k=1,u.exports=v()),u.exports}var Z=A();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>{const t=N(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},P=i.createContext({}),R=()=>i.useContext(P),T=i.forwardRef(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:r,className:n="",children:o,iconNode:l,...s},y)=>{const{size:d=24,strokeWidth:m=2,absoluteStrokeWidth:w=!1,color:x="currentColor",className:C=""}=R()??{},b=r??w?Number(a??m)*24/Number(t??d):a??m;return i.createElement("svg",{ref:y,...p,width:t??d??p.width,height:t??d??p.height,stroke:e??x,strokeWidth:b,className:f("lucide",C,n),...!o&&!W(s)&&{"aria-hidden":"true"},...s},[...l.map(([j,S])=>i.createElement(j,S)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const a=i.forwardRef(({className:r,...n},o)=>i.createElement(T,{ref:o,iconNode:t,className:f(`lucide-${E(g(e))}`,`lucide-${e}`,r),...n}));return a.displayName=g(e),a},z={"nav.home":{en:"Home",pl:"Strona główna"},"nav.tools":{en:"Tools",pl:"Narzędzia"},"hub.title":{en:"Astrologia",pl:"Astrologia"},"hub.subtitle":{en:"Your Astrology Learning Hub",pl:"Twoje centrum nauki astrologii"},"hub.tools":{en:"Tools",pl:"Narzędzia"},"hub.flashcards":{en:"Flashcards",pl:"Fiszki"},"hub.flashcards.desc":{en:"Master zodiac signs, ruling planets, house sectors, and elements with infinite flashcards. Track your streak and challenge yourself.",pl:"Opanuj znaki zodiaku, planety władające, sektory domów i żywioły za pomocą nieskończonych fiszek. Śledź swoją serię i rzucaj sobie wyzwania."},"hub.start":{en:"Start Learning",pl:"Zacznij naukę"},"hub.comingSoon":{en:"More tools coming soon...",pl:"Więcej narzędzi już wkrótce..."},"game.title":{en:"Flashcards",pl:"Fiszki"},"game.chooseMode":{en:"Choose Your Challenge",pl:"Wybierz poziom trudności"},"game.hidden1":{en:"1 hidden",pl:"1 ukryte"},"game.hidden2":{en:"2 hidden",pl:"2 ukryte"},"game.hidden3":{en:"3 hidden",pl:"3 ukryte"},"game.hidden4":{en:"4 hidden",pl:"4 ukryte"},"game.hidden5":{en:"5 hidden",pl:"5 ukrytych"},"game.difficulty1":{en:"Beginner",pl:"Początkujący"},"game.difficulty2":{en:"Easy",pl:"Łatwy"},"game.difficulty3":{en:"Medium",pl:"Średni"},"game.difficulty4":{en:"Expert",pl:"Ekspert"},"game.difficulty5":{en:"Master",pl:"Mistrz"},"game.streak":{en:"Streak",pl:"Seria"},"game.best":{en:"Best",pl:"Najlepsza"},"game.check":{en:"Check Answer",pl:"Sprawdź odpowiedź"},"game.next":{en:"Next Card",pl:"Następna karta"},"game.correct":{en:"Correct!",pl:"Dobrze!"},"game.wrong":{en:"Wrong!",pl:"Źle!"},"game.back":{en:"Back to Hub",pl:"Powrót"},"game.tapToAnswer":{en:"Tap to answer",pl:"Kliknij, aby odpowiedzieć"},"game.typeAnswer":{en:"Type your answer...",pl:"Wpisz odpowiedź..."},"game.enterSector":{en:"Enter sector (1–12)",pl:"Wpisz sektor (1–12)"},"game.tryAgain":{en:"Try Again",pl:"Spróbuj ponownie"},"field.zodiacName":{en:"Zodiac Name",pl:"Nazwa zodiaku"},"field.zodiacSign":{en:"Zodiac Sign",pl:"Znak zodiaku"},"field.planetName":{en:"Planet Name",pl:"Nazwa planety"},"field.planetIcon":{en:"Planet Icon",pl:"Ikona planety"},"field.sector":{en:"Sector Number",pl:"Numer sektora"},"field.element":{en:"Element",pl:"Żywioł"},"modal.chooseZodiac":{en:"Choose Zodiac Sign",pl:"Wybierz znak zodiaku"},"modal.choosePlanet":{en:"Choose Planet Icon",pl:"Wybierz ikonę planety"},"modal.chooseZodiacName":{en:"Choose Zodiac Name",pl:"Wybierz nazwę zodiaku"},"modal.choosePlanetName":{en:"Choose Planet Name",pl:"Wybierz nazwę planety"},"modal.chooseElement":{en:"Choose Element",pl:"Wybierz żywioł"},"modal.chooseProperty":{en:"Choose Property",pl:"Wybierz właściwość"},"fuzzy.title":{en:"Are you sure?",pl:"Czy jesteś pewien?"},"fuzzy.message":{en:"It looks like you might have a spelling mistake somewhere.",pl:"Wygląda na to, że gdzieś mógł się wkraść błąd w pisowni."},"fuzzy.confirm":{en:"Yes, I'm sure",pl:"Tak, jestem pewien"},"fuzzy.fix":{en:"Let me fix it",pl:"Poprawię"}};function M(e,t){return z[e]?.[t]||z[e]?.en||e}function _(){return typeof document>"u"?"en":document.cookie.match(/(?:^|;\s*)locale=(\w+)/)?.[1]==="pl"?"pl":"en"}function $(e){document.cookie=`locale=${e};path=/;max-age=${365*24*60*60};SameSite=Lax`}export{I as c,_ as g,Z as j,$ as s,M as t};
