"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[458],{458:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(848),s=n(540);const i=e=>parseFloat(e.substring(0,e.length-2)),l=({children:e,tooltipText:t,draggable:n=!1})=>{const[l,o]=(0,s.useState)(!1),a=(0,s.useRef)(null);let f;return(0,s.useEffect)((()=>{if(l&&a.current){const e=a.current;requestAnimationFrame((()=>{const t=e.getBoundingClientRect(),n=i(e.style.left);if(t.right>window.innerWidth){const r=t.right-window.innerWidth;e.style.left=n-r+"px"}else if(t.left<0)e.style.left=n-t.left+"px";else if(0!==n&&(t.left>0||t.right<window.innerWidth)){let r;switch(n>0?"left":"right"){case"left":r=Math.max(n-t.left,0),e.style.left=`${r}px`;break;case"right":const s=t.right-window.innerWidth;r=Math.min(n-s,0),e.style.left=`${r}px`}}}))}if(n){const e=e=>{if(l&&a.current){const e=a.current;requestAnimationFrame((()=>{const t=e.getBoundingClientRect(),n=i(e.style.left);if(t.right>window.innerWidth){const r=t.right-window.innerWidth;e.style.left=n-r+"px"}else if(t.left<0)e.style.left=n-t.left+"px";else if(0!==n&&(t.left>0||t.right<window.innerWidth)){let r;switch(n>0?"left":"right"){case"left":r=Math.max(n-t.left,0),e.style.left=`${r}px`;break;case"right":const s=t.right-window.innerWidth;r=Math.min(n-s,0),e.style.left=`${r}px`}}}))}};return document.addEventListener("mousemove",e),l||document.removeEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)}}),[l]),(0,r.jsxs)("div",Object.assign({className:"relative",onMouseEnter:()=>{f=setTimeout((()=>{o(!0)}),500)},onMouseLeave:()=>{clearTimeout(f),o(!1)}},{children:[e,l&&(0,r.jsxs)("div",Object.assign({ref:a,className:"absolute bottom-full mb-2 w-32 text-center p-2 bg-black text-white text-xs rounded",style:{left:"0px",transform:"translateX(-40.5%)"}},{children:[t,(0,r.jsx)("div",{className:"absolute w-0 h-0 border-black border-l-2 border-t-2 border-r-2 bottom-full left-1/2 transform -translate-x-1/2",style:{borderColor:"transparent transparent black transparent"}})]}))]}))}}}]);