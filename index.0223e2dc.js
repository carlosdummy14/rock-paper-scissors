var P=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var f=(r,t,a)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,c=(r,t)=>{for(var a in t||(t={}))A.call(t,a)&&f(r,a,t[a]);if(u)for(var a of u(t))j.call(t,a)&&f(r,a,t[a]);return r},o=(r,t)=>k(r,I(t));import{j as x,r as m,R as E}from"./vendor.3c37afa2.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}};Z();var p="/fa-regular_hand-rock.5e5c37c9.svg",N="/fa-regular_hand-paper.0cc7436d.svg",v="/fa-regular_hand-scissors.684cacba.svg";const e=x.exports.jsx,n=x.exports.jsxs,B=({setGameStatus:r})=>e("div",{className:"landing",children:n("div",{className:"wrapper",children:[n("div",{className:"img-column",children:[e("img",{className:"landing-image",src:v,alt:"scissors"}),e("img",{className:"landing-image",src:N,alt:"paper"}),e("img",{className:"landing-image",src:p,alt:"rock"})]}),n("div",{className:"center",children:[e("button",{className:"btn btn-large",onClick:()=>r("play"),children:"NEW GAME"}),e("p",{className:"text",children:"Roll 10 times and win"})]}),n("div",{className:"img-column",children:[e("img",{className:"landing-image image-right",src:N,alt:"paper"}),e("img",{className:"landing-image image-right",src:p,alt:"rock"}),e("img",{className:"landing-image image-right",src:v,alt:"scissors"})]})]})}),S=({right:r})=>n("svg",{className:r?"image image-right":"image",width:"256",height:"255",viewBox:"0 0 256 255",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_2_6)",children:e("path",{d:"M209.989 121.292C212.847 107.297 204.064 94.3494 191.288 90.8642C191.784 75.7142 179.343 63.4599 164.363 63.9277C159.356 45.4871 136.082 38.1599 121.735 51.5317C112.945 37.3517 93.1969 34.8031 81.4066 46.5934L67.2485 60.7515C59.1094 68.8906 54.9 80.1998 55.7004 91.7792L58.8399 137.22C58.9766 139.197 58.2276 139.378 51.4336 146.172C47.0402 150.566 47.0402 157.689 51.4336 162.082L114.079 224.727C118.472 229.121 125.595 229.121 129.989 224.727C135.834 218.882 137.379 216.832 141.511 215.184L176.934 201.059C181.973 199.05 186.468 196.09 190.296 192.263L218.745 163.813C231.881 150.678 227.284 128.27 209.989 121.292ZM178.363 180.33C176.175 182.522 173.561 184.242 170.683 185.384L135.261 199.509C130.935 201.235 127.077 203.775 123.793 207.058L122.034 208.817L67.3435 154.127L69.9005 151.57C73.97 147.501 76.0748 141.846 75.6746 136.056L72.5349 90.6161C72.0715 83.9071 74.494 77.3708 79.1812 72.6836L93.3393 58.5256C101.595 50.2703 114.603 63.1153 106.098 71.6206L95.8488 81.8696C95.2803 82.4382 94.8402 83.122 94.5583 83.875C94.2764 84.628 94.1592 85.4327 94.2146 86.2349L94.4396 89.4902C94.514 90.5671 94.8967 91.5999 95.542 92.4652C96.1873 93.3306 97.068 93.9919 98.079 94.3704C99.0899 94.7489 100.188 94.8285 101.243 94.5997C102.298 94.3709 103.265 93.8434 104.029 93.0801L133.007 64.1012C141.235 55.8736 154.318 68.6443 145.766 77.1963L139.116 83.8464C136.919 86.043 136.919 89.6048 139.116 91.8014L140.856 93.5415C143.053 95.7381 146.614 95.7381 148.811 93.5415L159.039 83.3137C167.276 75.0768 180.337 87.8691 171.797 96.4088L161.738 106.468C159.541 108.665 159.541 112.226 161.738 114.423L163.478 116.163C165.675 118.36 169.236 118.36 171.433 116.163L178.251 109.345C186.462 101.134 199.576 113.874 191.01 122.44L184.36 129.09C182.163 131.287 182.163 134.848 184.36 137.045L186.1 138.785C188.297 140.982 191.858 140.982 194.055 138.785C202.295 130.545 215.338 143.356 206.813 151.88L178.363 180.33Z"})}),e("defs",{children:e("clipPath",{id:"clip0_2_6",children:e("rect",{width:"180",height:"180",fill:"white",transform:"translate(128) rotate(45)"})})})]}),R=({right:r})=>n("svg",{className:r?"image image-right":"image",width:"236",height:"255",viewBox:"0 0 236 255",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_2_8)",children:e("path",{d:"M169.466 182.964L153.372 200.362C152.197 201.633 150.886 202.761 149.48 203.712L115.82 226.476C107.234 232.283 96.1411 230.947 89.0741 223.305L41.7886 172.169C36.3073 166.241 34.2209 157.507 36.3441 149.374L46.2622 111.376C49.7443 98.0343 60.3854 93.2074 73.1461 94.6L93.6442 44.7113C99.0021 31.6687 113.032 25.5983 125.101 31.1777C137.224 36.782 142.74 52.0607 137.323 65.2483L123.491 89.4932L142.998 63.8532C152.378 53.7096 167.551 53.6139 176.822 63.6394C186.093 73.6651 186.004 90.0739 176.624 100.217L156.48 122.003C163.357 127.614 166.273 136.916 164.448 145.705C177.3 152.982 179.8 171.788 169.466 182.964ZM158.429 171.028C164.213 164.774 155.798 155.693 150.024 161.938C147.992 164.135 144.699 164.135 142.668 161.938L141.092 160.234C139.06 158.037 139.06 154.475 141.092 152.279L147.528 145.318C153.311 139.064 144.897 129.983 139.122 136.228L132.686 143.188C130.654 145.385 127.361 145.385 125.33 143.188L123.754 141.484C121.722 139.287 121.722 135.726 123.754 133.529L165.591 88.2853C173.505 79.7263 161.934 67.2405 154.032 75.7858L112.195 121.03C110.164 123.226 106.871 123.226 104.84 121.03L102.166 118.138C101.422 117.334 100.922 116.306 100.73 115.188C100.538 114.07 100.663 112.916 101.09 111.877L123.06 58.3941C127.522 47.5326 112.52 40.3177 107.902 51.559L84.3495 108.894C83.9047 109.977 83.1552 110.88 82.2079 111.475C81.2605 112.07 80.1636 112.326 79.0737 112.207L67.9453 110.993C64.9691 110.669 62.1037 112.804 61.2798 115.96L51.3617 153.959C50.7721 156.219 51.3316 158.624 52.8228 160.237L100.108 211.372C102.06 213.483 105.119 213.811 107.546 212.169L141.206 189.405C141.616 189.127 141.996 188.8 142.338 188.43L158.43 171.028L158.429 171.028Z"})}),e("defs",{children:e("clipPath",{id:"clip0_2_8",children:e("rect",{width:"173.356",height:"173.356",fill:"white",transform:"matrix(-0.678924 0.734209 0.678924 0.734209 117.975 0)"})})})]}),M=({right:r})=>n("svg",{className:r?"image image-right":"image",width:"256",height:"255",viewBox:"0 0 256 255",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_2_10)",children:e("path",{d:"M205.847 133.851L208.538 131.16C219.38 120.318 216.091 100.583 201.241 91.2737C206.265 71.6871 186.305 52.7466 167.536 57.9401C158.433 43.5869 138.922 39.731 127.97 50.6827L96.6149 82.0376C92.7924 74.5226 85.5707 68.4737 76.7715 66.6048C63.0133 63.6832 50.8582 72.1796 49.4807 85.6281L41.6979 161.579C41.5061 163.452 41.775 165.404 42.4821 167.273C43.1892 169.142 44.3142 170.873 45.7632 172.322L109.089 235.648C113.324 239.883 119.555 240.999 124.117 238.339L165.247 214.359C169.95 211.616 174.254 208.303 178.075 204.483L210.781 171.777C220.879 161.679 218.586 143.788 205.847 133.851ZM164.438 190.845C161.521 193.761 158.225 196.3 154.639 198.391L117.405 220.098L60.0383 162.732L67.5071 89.8074C68.4438 80.6663 82.409 83.4418 81.4775 92.539L79.7186 109.712C79.1354 115.407 86.4035 119.523 90.2741 115.653L141.607 64.3197C147.982 57.9446 158.164 68.5422 151.825 74.8815L113.714 112.993C111.517 115.19 111.771 119.005 114.282 121.516L116.23 123.464C118.74 125.975 122.556 126.229 124.753 124.032L171.737 77.0482C178.116 70.6686 188.294 81.2707 181.955 87.61L135.143 134.422C132.946 136.619 133.201 140.435 135.711 142.945L137.659 144.893C140.17 147.404 143.985 147.658 146.182 145.461L184.683 106.961C191.065 100.579 201.24 111.183 194.901 117.522L156.572 155.851C154.375 158.048 154.629 161.864 157.14 164.374L159.088 166.322C161.599 168.833 165.415 169.087 167.611 166.891L186.581 147.921C193.105 141.397 203.345 151.937 197.143 158.139L164.437 190.844L164.438 190.845Z"})}),e("defs",{children:e("clipPath",{id:"clip0_2_10",children:e("rect",{width:"180",height:"180",fill:"white",transform:"translate(128) rotate(45)"})})})]}),D=(r,t,a)=>{if(r!==t){if(r===0&&t===1)return o(c({},a),{left:a.left+1});if(r===0&&t===2)return o(c({},a),{right:a.right+1});if(r===1&&t===0)return o(c({},a),{right:a.right+1});if(r===1&&t===2)return o(c({},a),{left:a.left+1});if(r===2&&t===0)return o(c({},a),{left:a.left+1});if(r===2&&t===1)return o(c({},a),{right:a.right+1})}return a};var w="/WIN.488b4343.png";const G=[e(M,{}),e(S,{}),e(R,{})],H=[e(M,{right:!0}),e(S,{right:!0}),e(R,{right:!0})];let b=null;const W=10,U=50,$=({setGameStatus:r})=>{const[t,a]=m.exports.useState(0),[d,i]=m.exports.useState({left:0,right:0}),[s,h]=m.exports.useState({left:0,right:0}),[_,L]=m.exports.useState(!0),[g,C]=m.exports.useState(""),y=()=>{L(!1),b=setInterval(()=>{h({left:Math.floor(Math.random()*3),right:Math.floor(Math.random()*3)})},U),a(l=>l+1)},O=()=>{L(!0),clearInterval(b);const l=D(s.left,s.right,d);i(l),t===W&&(l.left===l.right?C("tie"):l.left>l.right?C("left"):C("right"))};return n("div",{className:"main",children:[n("p",{className:"round",children:["ROUND",e("br",{}),t]}),n("div",{className:"game-container",children:[n("div",{className:"panel",children:[n("span",{className:"score",children:["SCORE: ",d.left]}),n("div",{className:"item",children:[G[s.left],g==="left"&&e("img",{className:"winner",src:w})]})]}),n("div",{className:"panel",children:[n("span",{className:"score",children:["SCORE: ",d.right]}),n("div",{className:"item",children:[H[s.right],g==="right"&&e("img",{className:"winner",src:w})]})]})]}),e("div",{className:"buttons",children:g===""?_?e("button",{className:"btn btn-roll",onClick:y,children:"ROLL"}):e("button",{className:"btn btn-stop",onClick:O,children:"STOP"}):e("button",{className:"btn btn-large",onClick:()=>r("start"),children:"PLAY AGAIN"})})]})};function q(){const[r,t]=m.exports.useState("start");return n("div",{className:"container",children:[r==="start"&&e(B,{setGameStatus:t}),r==="play"&&e($,{setGameStatus:t})]})}E.render(e(q,{}),document.getElementById("root"));
