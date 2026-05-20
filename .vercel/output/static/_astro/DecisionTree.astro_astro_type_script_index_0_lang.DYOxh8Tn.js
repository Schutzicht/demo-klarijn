function g(o){if(o.dataset.bound)return;o.dataset.bound="1";const r=JSON.parse(o.dataset.treeData||'{"questions":[],"matchThreshold":8}'),l=o.querySelector("[data-tree-progress]"),s=o.querySelector("[data-tree-body]");let t=0,d=0,c=[];function b(){l.innerHTML="",r.questions.forEach((n,a)=>{const e=document.createElement("span");e.className="flex-1 h-1.5 rounded-full transition-colors "+(a<t?"bg-magenta":a===t?"bg-aubergine":"bg-paper-2"),l.appendChild(e)})}function u(){b();const n=r.questions[t];s.innerHTML=`
        <div class="text-xs font-semibold uppercase tracking-[.1em] text-magenta mb-2">Vraag ${t+1} van ${r.questions.length}</div>
        <h2 class="font-sans font-bold text-2xl md:text-3xl leading-tight text-aubergine mb-6">${n.q}</h2>
        <div class="grid gap-2.5 mb-6" data-answers></div>
        <div class="flex justify-between items-center text-sm text-ink-soft">
          <button class="bg-transparent border-[1.5px] border-ink/15 text-ink px-4 py-2 rounded-full text-xs font-semibold cursor-pointer hover:bg-aubergine hover:text-white hover:border-aubergine transition-all disabled:opacity-30 disabled:cursor-not-allowed" data-back ${t===0?"disabled":""}>← Terug</button>
          <span>${Math.round(t/r.questions.length*100)}% voltooid</span>
        </div>
      `;const a=s.querySelector("[data-answers]");n.a.forEach(e=>{const i=document.createElement("button");i.type="button",i.className="group text-left p-4 md:p-5 bg-paper border-[1.5px] border-ink/10 rounded-2xl text-base font-medium text-ink cursor-pointer flex justify-between items-center gap-4 transition-all hover:border-magenta hover:bg-white hover:translate-x-1 w-full",i.innerHTML=`
          <span>${e.label}</span>
          <span class="w-8 h-8 rounded-full bg-paper-2 text-aubergine grid place-items-center shrink-0 font-bold transition-all group-hover:bg-magenta group-hover:text-white">→</span>
        `,i.addEventListener("click",()=>{c.push({step:t,score:e.score}),d+=e.score,t++,t>=r.questions.length?m():u()}),a.appendChild(i)}),s.querySelector("[data-back]")?.addEventListener("click",()=>{if(c.length===0)return;const e=c.pop();d-=e.score,t=e.step,u()})}function m(){const n=d>=r.matchThreshold;l.innerHTML="",r.questions.forEach(()=>{const e=document.createElement("span");e.className="flex-1 h-1.5 rounded-full bg-magenta",l.appendChild(e)}),s.innerHTML=`
        <div class="text-center py-4">
          <div class="w-24 h-24 mx-auto mb-6 rounded-full grid place-items-center font-display text-4xl border-[5px] border-paper ${n?"bg-emerald-600 text-white":"bg-magenta text-white"}" style="${n?"box-shadow:0 0 0 2px #047857;":"box-shadow:0 0 0 2px #E0277A;"}">${n?'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/><circle cx="12" cy="12" r="10"/></svg>'}</div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-aubergine">${n?"Match. Laten we kennismaken.":"Klarijn lijkt nu nog niet de beste pasvorm."}</h2>
          <p class="text-lg text-ink-soft max-w-prose mx-auto mb-6">
            ${n?"Op basis van je antwoorden lijkt het Klarijn-model bij jou te passen. We nodigen je uit voor een vrijblijvend gesprek waarin we je vragen beantwoorden en samen kijken naar de mogelijkheden in jouw rayon.":"Op basis van je antwoorden zien we niet direct een wederzijdse match. Wil je toch even sparren? We staan altijd open voor een goed gesprek."}
          </p>
          ${n?`<form class="grid gap-4 max-w-md mx-auto text-left" data-result-form>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label class="form-label">Voornaam<input class="form-input" required name="first" /></label>
                  <label class="form-label">Achternaam<input class="form-input" required name="last" /></label>
                </div>
                <label class="form-label">E-mail<input class="form-input" required type="email" name="email" /></label>
                <label class="form-label">Telefoon<input class="form-input" type="tel" name="phone" /></label>
                <label class="form-label">Voorkeursregio<input class="form-input" name="region" placeholder="Bijv. Twente, Zuid-Limburg, regio Zwolle" /></label>
                <button type="submit" class="btn btn-primary justify-center">Plan een kennismakingsgesprek <span class="arrow">→</span></button>
              </form>`:'<a class="btn btn-ghost" href="/franchise/contact">Toch contact opnemen</a>'}
          <div class="mt-8">
            <button class="bg-transparent border-[1.5px] border-ink/15 text-ink px-4 py-2 rounded-full text-xs font-semibold cursor-pointer hover:bg-aubergine hover:text-white hover:border-aubergine transition-all" data-restart>↺ Opnieuw beginnen</button>
          </div>
        </div>
      `;const a=s.querySelector("[data-result-form]");a&&a.addEventListener("submit",e=>{e.preventDefault(),a.innerHTML='<p class="text-center text-xl font-display-soft font-semibold text-aubergine">Bedankt - we nemen binnen 2 werkdagen contact op.</p>'}),s.querySelector("[data-restart]")?.addEventListener("click",()=>{t=0,d=0,c=[],u()})}u()}function p(){document.querySelectorAll("[data-tree]").forEach(g)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p();document.addEventListener("astro:page-load",p);
