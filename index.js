import{a as m,i as l,S as p}from"./assets/vendor-DqB7j7Ix.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function y(r){var o;const s="16531795-762868b1c54a77ec034bf5734",i="https://pixabay.com/api/";try{return(await m.get(i,{params:{key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(e){throw new Error(`HTTP error! Status: ${((o=e.response)==null?void 0:o.status)||"Unknown"}`)}}function g(r,s){const i=r.map(o=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:a,views:u,comments:f,downloads:d}=o;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${e}" alt="${n}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${a}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${u}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${f}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${d}
            </p>
          </div>
        </a>
      </li>
    `}).join("");s.innerHTML=i}function h(r){r.style.display="flex"}function c(r){r.style.display="none"}function b(r){r.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".form"),s=document.querySelector(".gallery"),i=document.querySelector(".loader");let o;function e(){o?o.refresh():o=new p(".gallery a",{captionsData:"alt",captionDelay:250})}r.addEventListener("submit",async t=>{t.preventDefault();const n=t.target.elements.searchQuery.value.trim();if(!n){l.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}b(s),h(i);try{const a=await y(n);if(c(i),a.hits.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(a.hits,s),e()}catch(a){c(i),l.error({title:"Error",message:`An error occurred: ${a.message}`,position:"topRight"})}})});
//# sourceMappingURL=index.js.map
