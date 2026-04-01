import{c as $,j as M}from"./i18n.CJf1qogE.js";import{r as o}from"./index.DiEladB3.js";import{M as F,i as S,u as H,P as T,a as U,b as q,L as D}from"./proxy.D-MeCQvY.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],se=$("check",K);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],re=$("chevron-left",V);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],ie=$("flame",W);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ce=$("star",X);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],ae=$("trophy",B);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fe=$("x",G);function z(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Y(...e){return n=>{let t=!1;const s=e.map(f=>{const c=z(f,n);return!t&&typeof c=="function"&&(t=!0),c});if(t)return()=>{for(let f=0;f<s.length;f++){const c=s[f];typeof c=="function"?c():z(e[f],null)}}}}function J(...e){return o.useCallback(Y(...e),e)}class O extends o.Component{getSnapshotBeforeUpdate(n){const t=this.props.childRef.current;if(S(t)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=t.offsetParent,f=S(s)&&s.offsetWidth||0,c=S(s)&&s.offsetHeight||0,d=getComputedStyle(t),r=this.props.sizeRef.current;r.height=parseFloat(d.height),r.width=parseFloat(d.width),r.top=t.offsetTop,r.left=t.offsetLeft,r.right=f-r.width-r.left,r.bottom=c-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Q({children:e,isPresent:n,anchorX:t,anchorY:s,root:f,pop:c}){const d=o.useId(),r=o.useRef(null),x=o.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=o.useContext(F),u=e.props?.ref??e?.ref,v=J(r,u);return o.useInsertionEffect(()=>{const{width:a,height:p,top:h,left:C,right:y,bottom:w}=x.current;if(n||c===!1||!r.current||!a||!p)return;const _=t==="left"?`left: ${C}`:`right: ${y}`,b=s==="bottom"?`bottom: ${w}`:`top: ${h}`;r.current.dataset.motionPopId=d;const l=document.createElement("style");g&&(l.nonce=g);const k=f??document.head;return k.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${p}px !important;
            ${_}px !important;
            ${b}px !important;
          }
        `),()=>{r.current?.removeAttribute("data-motion-pop-id"),k.contains(l)&&k.removeChild(l)}},[n]),M.jsx(O,{isPresent:n,childRef:r,sizeRef:x,pop:c,children:c===!1?e:o.cloneElement(e,{ref:v})})}const Z=({children:e,initial:n,isPresent:t,onExitComplete:s,custom:f,presenceAffectsLayout:c,mode:d,anchorX:r,anchorY:x,root:g})=>{const u=H(ee),v=o.useId();let a=!0,p=o.useMemo(()=>(a=!1,{id:v,initial:n,isPresent:t,custom:f,onExitComplete:h=>{u.set(h,!0);for(const C of u.values())if(!C)return;s&&s()},register:h=>(u.set(h,!1),()=>u.delete(h))}),[t,u,s]);return c&&a&&(p={...p}),o.useMemo(()=>{u.forEach((h,C)=>u.set(C,!1))},[t]),o.useEffect(()=>{!t&&!u.size&&s&&s()},[t]),e=M.jsx(Q,{pop:d==="popLayout",isPresent:t,anchorX:r,anchorY:x,root:g,children:e}),M.jsx(T.Provider,{value:p,children:e})};function ee(){return new Map}const E=e=>e.key||"";function I(e){const n=[];return o.Children.forEach(e,t=>{o.isValidElement(t)&&n.push(t)}),n}const le=({children:e,custom:n,initial:t=!0,onExitComplete:s,presenceAffectsLayout:f=!0,mode:c="sync",propagate:d=!1,anchorX:r="left",anchorY:x="top",root:g})=>{const[u,v]=U(d),a=o.useMemo(()=>I(e),[e]),p=d&&!u?[]:a.map(E),h=o.useRef(!0),C=o.useRef(a),y=H(()=>new Map),w=o.useRef(new Set),[_,b]=o.useState(a),[l,k]=o.useState(a);q(()=>{h.current=!1,C.current=a;for(let m=0;m<l.length;m++){const i=E(l[m]);p.includes(i)?(y.delete(i),w.current.delete(i)):y.get(i)!==!0&&y.set(i,!1)}},[l,p.length,p.join("-")]);const L=[];if(a!==_){let m=[...a];for(let i=0;i<l.length;i++){const R=l[i],P=E(R);p.includes(P)||(m.splice(i,0,R),L.push(R))}return c==="wait"&&L.length&&(m=L),k(I(m)),b(a),null}const{forceRender:A}=o.useContext(D);return M.jsx(M.Fragment,{children:l.map(m=>{const i=E(m),R=d&&!u?!1:a===l||p.includes(i),P=()=>{if(w.current.has(i))return;if(y.has(i))w.current.add(i),y.set(i,!0);else return;let j=!0;y.forEach(N=>{N||(j=!1)}),j&&(A?.(),k(C.current),d&&v?.(),s&&s())};return M.jsx(Z,{isPresent:R,initial:!h.current||t?void 0:!1,custom:n,presenceAffectsLayout:f,mode:c,root:g,onExitComplete:R?void 0:P,anchorX:r,anchorY:x,children:m},i)})})};function ue(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp(`(?:^|;\\s*)${e}=([^;]*)`));return n?decodeURIComponent(n[1]):null}function de(e,n,t=365){const s=t*24*60*60;document.cookie=`${e}=${encodeURIComponent(n)};path=/;max-age=${s};SameSite=Lax`}export{le as A,re as C,ie as F,ce as S,ae as T,fe as X,se as a,ue as g,de as s};
