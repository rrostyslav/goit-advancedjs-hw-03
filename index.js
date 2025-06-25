import{i as c,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function p(r){const o="16531795-762868b1c54a77ec034bf5734",i="https://pixabay.com/api/",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=await fetch(`${i}?${s}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}function y(r,o){const i=r.map(s=>{const{webformatURL:e,largeImageURL:t,tags:a,likes:n,views:u,comments:f,downloads:m}=s;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${e}" alt="${a}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${n}
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
              ${m}
            </p>
          </div>
        </a>
      </li>
    `}).join("");o.innerHTML=i}function g(r){r.style.display="flex"}function l(r){r.style.display="none"}function h(r){r.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#search-form"),o=document.querySelector(".gallery"),i=document.querySelector(".loader");let s;function e(){s?s.refresh():s=new d(".gallery a",{captionsData:"alt",captionDelay:250})}r.addEventListener("submit",async t=>{t.preventDefault();const a=t.target.elements.searchQuery.value.trim();if(!a){c.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}h(o),g(i);try{const n=await p(a);if(l(i),n.hits.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n.hits,o),e()}catch(n){l(i),c.error({title:"Error",message:`An error occurred: ${n.message}`,position:"topRight"})}})});
//# sourceMappingURL=index.js.map
