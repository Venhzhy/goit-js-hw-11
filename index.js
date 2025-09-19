import{a as u,S as p,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="52370866-f56fe6e7c04694f1b916d2ffa",m="https://pixabay.com/api/";async function d(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(m,{params:o})).data.hits}catch(e){throw new Error("Error fetching images: "+e.message)}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(){c.innerHTML=""}function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p><span>Likes</span>${e.likes}</p>
        <p><span>Views</span>${e.views}</p>
        <p><span>Comments</span>${e.comments}</p>
        <p><span>Downloads</span>${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Please enter a search term!",position:"topRight",class:"custom-toast custom-error"});return}y(),L();try{const e=await d(o);e.length===0?n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"custom-toast custom-warning"}):h(e)}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight",class:"custom-toast custom-error"})}finally{w()}});
//# sourceMappingURL=index.js.map
