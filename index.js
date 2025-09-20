import{a as l,S as u,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="52370866-f56fe6e7c04694f1b916d2ffa",p="https://pixabay.com/api/";async function m(r){const s={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await l.get(p,{params:s})).data.hits}catch(e){throw new Error("Error fetching images: "+e.message)}}const c=document.querySelector(".gallery");let d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(){c.innerHTML=""}function y(r){const s=r.map(e=>`
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
  `).join("");c.insertAdjacentHTML("beforeend",s),d.refresh()}function h(){const r=document.querySelector(".loader");r&&r.classList.add("show")}function w(){const r=document.querySelector(".loader");r&&r.classList.remove("show")}const L=document.querySelector(".form");L.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(!s){n.error({message:"Please enter a search term!",position:"topRight",class:"custom-toast custom-error"});return}g(),h();try{const e=await m(s);e.length===0?n.warning({message:"Sorry, no images found!",position:"topRight",class:"custom-toast custom-warning"}):y(e)}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight",class:"custom-toast custom-error"})}finally{w()}});
//# sourceMappingURL=index.js.map
