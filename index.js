import{a as m,S as d,i}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",y="49355528-35596c2c6a34b438a74657cc9";async function g(o){try{return(await m.get(`${f}`,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images")}}const p=document.querySelector(".gallery");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:c,downloads:u})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${s}</p>
            <p><b>Comments:</b> ${c}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");p.innerHTML=t,h.refresh()}const L=document.querySelector(".form"),w=document.querySelector(".gallery"),l=document.querySelector(".loader-container");console.log(l);L.addEventListener("submit",S);async function S(o){o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search term!"});return}w.innerHTML="",l.style.display="block",console.log("Loader is shown");try{const a=await g(t);if(a.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(a)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{l.style.display="none",console.log("Loader is hidden")}}
//# sourceMappingURL=index.js.map
