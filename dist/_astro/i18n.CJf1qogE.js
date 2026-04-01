import{r as i}from"./index.DiEladB3.js";var d={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function N(){if(h)return u;h=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,a,o){var s=null;if(o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),"key"in a){o={};for(var l in a)l!=="key"&&(o[l]=a[l])}else o=a;return a=o.ref,{$$typeof:e,type:r,key:s,ref:a!==void 0?a:null,props:o}}return u.Fragment=n,u.jsx=t,u.jsxs=t,u}var y;function R(){return y||(y=1,d.exports=N()),d.exports}var F=R();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=e=>{const n=j(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1},A=i.createContext({}),T=()=>i.useContext(A),L=i.forwardRef(({color:e,size:n,strokeWidth:t,absoluteStrokeWidth:r,className:a="",children:o,iconNode:s,...l},f)=>{const{size:c=24,strokeWidth:p=2,absoluteStrokeWidth:w=!1,color:b="currentColor",className:C=""}=T()??{},S=r??w?Number(t??p)*24/Number(n??c):t??p;return i.createElement("svg",{ref:f,...m,width:n??c??m.width,height:n??c??m.height,stroke:e??b,strokeWidth:S,className:g("lucide",C,a),...!o&&!v(l)&&{"aria-hidden":"true"},...l},[...s.map(([x,E])=>i.createElement(x,E)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,n)=>{const t=i.forwardRef(({className:r,...a},o)=>i.createElement(L,{ref:o,iconNode:n,className:g(`lucide-${W(z(e))}`,`lucide-${e}`,r),...a}));return t.displayName=z(e),t},k={"nav.home":{en:"Home",pl:"Strona główna"},"nav.tools":{en:"Tools",pl:"Narzędzia"},"hub.title":{en:"Esoterica",pl:"Ezoteryka"},"hub.subtitle":{en:"Your Esoteric Learning Hub",pl:"Twoje centrum nauki ezoteryki"},"hub.tools":{en:"Learning Tools",pl:"Narzędzia do nauki"},"hub.flashcards":{en:"Astrology Flashcards",pl:"Fiszki astrologiczne"},"hub.flashcards.desc":{en:"Master zodiac signs, ruling planets, house sectors, and elements with infinite flashcards. Track your streak and challenge yourself.",pl:"Opanuj znaki zodiaku, planety władające, sektory domów i żywioły za pomocą nieskończonych fiszek. Śledź swoją serię i rzucaj sobie wyzwania."},"hub.start":{en:"Start Learning",pl:"Zacznij naukę"},"hub.comingSoon":{en:"More tools coming soon...",pl:"Więcej narzędzi już wkrótce..."},"game.title":{en:"Astrology Flashcards",pl:"Fiszki astrologiczne"},"game.chooseMode":{en:"Choose Your Challenge",pl:"Wybierz poziom trudności"},"game.hidden1":{en:"1 hidden",pl:"1 ukryte"},"game.hidden2":{en:"2 hidden",pl:"2 ukryte"},"game.hidden3":{en:"3 hidden",pl:"3 ukryte"},"game.hidden4":{en:"4 hidden",pl:"4 ukryte"},"game.hidden5":{en:"5 hidden",pl:"5 ukrytych"},"game.hidden6":{en:"6 hidden",pl:"6 ukrytych"},"game.hidden7":{en:"7 hidden",pl:"7 ukrytych"},"game.difficulty1":{en:"Beginner",pl:"Początkujący"},"game.difficulty2":{en:"Easy",pl:"Łatwy"},"game.difficulty3":{en:"Medium",pl:"Średni"},"game.difficulty4":{en:"Expert",pl:"Ekspert"},"game.difficulty5":{en:"Master",pl:"Mistrz"},"game.difficulty6":{en:"Grandmaster",pl:"Arcymistrz"},"game.difficulty7":{en:"Legend",pl:"Legenda"},"game.streak":{en:"Streak",pl:"Seria"},"game.best":{en:"Best",pl:"Najlepsza"},"game.check":{en:"Check Answer",pl:"Sprawdź odpowiedź"},"game.next":{en:"Next Card",pl:"Następna karta"},"game.correct":{en:"Correct!",pl:"Dobrze!"},"game.wrong":{en:"Wrong!",pl:"Źle!"},"game.back":{en:"Back",pl:"Powrót"},"game.tapToAnswer":{en:"Tap to answer",pl:"Kliknij, aby odpowiedzieć"},"game.typeAnswer":{en:"Type your answer...",pl:"Wpisz odpowiedź..."},"game.enterSector":{en:"Enter sector (1–12)",pl:"Wpisz sektor (1–12)"},"game.tryAgain":{en:"Try Again",pl:"Spróbuj ponownie"},"field.zodiacName":{en:"Zodiac Name",pl:"Nazwa zodiaku"},"field.zodiacSign":{en:"Zodiac Sign",pl:"Znak zodiaku"},"field.planetName":{en:"Planet Name",pl:"Nazwa planety"},"field.planetIcon":{en:"Planet Icon",pl:"Ikona planety"},"field.sector":{en:"Sector Number",pl:"Numer sektora"},"field.element":{en:"Element",pl:"Żywioł"},"modal.chooseZodiac":{en:"Choose Zodiac Sign",pl:"Wybierz znak zodiaku"},"modal.choosePlanet":{en:"Choose Planet Icon",pl:"Wybierz ikonę planety"},"modal.chooseZodiacName":{en:"Choose Zodiac Name",pl:"Wybierz nazwę zodiaku"},"modal.choosePlanetName":{en:"Choose Planet Name",pl:"Wybierz nazwę planety"},"modal.chooseElement":{en:"Choose Element",pl:"Wybierz żywioł"},"modal.chooseProperty":{en:"Choose Property",pl:"Wybierz właściwość"},"hub.runes":{en:"Rune Flashcards",pl:"Fiszki runiczne"},"hub.runes.desc":{en:"Learn the Elder Futhark runes – names, symbols, meanings, elements, key sentences and shadow signs through infinite flashcards.",pl:"Poznaj runy Starszego Futharku – nazwy, symbole, znaczenia, żywioły, zdania klucz i znaki w cieniu za pomocą nieskończonych fiszek."},"rune.game.title":{en:"Rune Flashcards",pl:"Fiszki runiczne"},"rune.game.enterNumber":{en:"Enter number (1–24)",pl:"Wpisz numer (1–24)"},"rune.field.runeName":{en:"Rune Name",pl:"Nazwa runy"},"rune.field.runeIcon":{en:"Rune Symbol",pl:"Ikona runy"},"rune.field.runeNumber":{en:"Rune Number",pl:"Numer runy"},"rune.field.translation":{en:"Translation",pl:"Tłumaczenie"},"rune.field.symbolRoot":{en:"Root Symbol",pl:"Symbol rdzeń"},"rune.field.element":{en:"Element",pl:"Żywioł"},"rune.field.keySentence":{en:"Key Sentence",pl:"Zdanie klucz"},"rune.field.shadowSign":{en:"Shadow Sign",pl:"Znak w cieniu"},"rune.modal.chooseName":{en:"Choose Rune Name",pl:"Wybierz nazwę runy"},"rune.modal.chooseIcon":{en:"Choose Rune Symbol",pl:"Wybierz ikonę runy"},"rune.modal.chooseTranslation":{en:"Choose Translation",pl:"Wybierz tłumaczenie"},"rune.modal.chooseSymbolRoot":{en:"Choose Root Symbol",pl:"Wybierz symbol rdzeń"},"rune.modal.chooseElement":{en:"Choose Element",pl:"Wybierz żywioł"},"rune.modal.chooseKeySentence":{en:"Choose Key Sentence",pl:"Wybierz zdanie klucz"},"rune.modal.chooseShadowSign":{en:"Choose Shadow Sign",pl:"Wybierz znak w cieniu"},"fuzzy.title":{en:"Are you sure?",pl:"Czy jesteś pewien?"},"fuzzy.message":{en:"It looks like you might have a spelling mistake somewhere.",pl:"Wygląda na to, że gdzieś mógł się wkraść błąd w pisowni."},"fuzzy.confirm":{en:"Yes, I'm sure",pl:"Tak, jestem pewien"},"fuzzy.fix":{en:"Let me fix it",pl:"Poprawię"}};function I(e,n){return k[e]?.[n]||k[e]?.en||e}function M(){return typeof document>"u"?"en":document.cookie.match(/(?:^|;\s*)locale=(\w+)/)?.[1]==="pl"?"pl":"en"}function _(e){document.cookie=`locale=${e};path=/;max-age=${365*24*60*60};SameSite=Lax`}export{Z as c,M as g,F as j,_ as s,I as t};
