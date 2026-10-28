import{n as e,r as t,t as n}from"./templateBinding-BLZMp-A8.js";var r=document.getElementById(`letter-list`);function i(){r&&[...t].reverse().forEach(e=>{let t=n(e),i=document.createElement(`a`);i.href=`./src/views/letters.html?id=${e.id}`,i.className=`envelope-link`,i.innerHTML=`
      <div class="envelope-wrap">
        <div class="envelope-shadow"></div>
        <div class="envelope" style="background:${t.envelope}; --envelope-shadow:${t.shadow};">
          <div class="env-body-svg">
            <svg viewBox="0 0 100 63" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 0,63 50,31" fill="${t.shadow}" />
              <polygon points="100,0 100,63 50,31" fill="${t.shadow}" />
              <polygon points="0,63 100,63 50,31" fill="${t.base}" />
            </svg>
          </div>

          <div class="env-flap" style="border-top-color:${t.flap};">
            <svg viewBox="0 0 100 44" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 100,0 50,44" fill="${t.flap}" />
            </svg>
            <div class="env-seal" style="background:${t.seal};">♡</div>
          </div>

          <div class="envelope-center">
            <span class="envelope-date" style="color:${t.text};">${e.date}</span>
            <span class="envelope-title" style="color:${t.text};">${e.title}</span>
            <span class="envelope-hint" style="color:${t.text};">Picale para abrirlo :) </span>
          </div>
          <div class="envelope-corner tl"></div>
          <div class="envelope-corner tr"></div>
          <div class="envelope-corner bl"></div>
          <div class="envelope-corner br"></div>
        </div>
      </div>
    `,r.appendChild(i)})}if(i(),e.SHOW_BRANDING){let e=document.getElementById(`footer-link`);e.textContent=`Made with 💌 Moracarta`}