/* =========================================================
   Klarijn — Frontend JS (vanilla, no build step)
   - Mobile menu
   - Sticky basket (localStorage)
   - "Voeg toe aan mijn lijst" met stempel-animatie
   - "Dirk vraagt Klarijn" carousel
   - Beslisboom (10 vragen, native)
   - Form rendering: gestructureerde tekst (XML)
   ========================================================= */

(() => {
  'use strict';

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  /* ---------- Basket (mandje) ---------- */
  const BASKET_KEY = 'klarijn_basket';

  const Basket = {
    get items() {
      try { return JSON.parse(localStorage.getItem(BASKET_KEY) || '[]'); }
      catch { return []; }
    },
    set items(arr) {
      localStorage.setItem(BASKET_KEY, JSON.stringify(arr));
      this.render();
    },
    add(product) {
      const items = this.items;
      if (!items.find(i => i.slug === product.slug)) {
        items.push(product);
        this.items = items;
      }
    },
    remove(slug) {
      this.items = this.items.filter(i => i.slug !== slug);
    },
    clear() { this.items = []; },
    has(slug) { return this.items.some(i => i.slug === slug); },
    render() {
      const items = this.items;
      // Update FAB count
      document.querySelectorAll('[data-basket-count]').forEach(el => {
        el.textContent = items.length;
        el.dataset.count = items.length;
      });
      // Update buttons (mark as added)
      document.querySelectorAll('.add-btn[data-slug]').forEach(btn => {
        const isAdded = items.some(i => i.slug === btn.dataset.slug);
        btn.dataset.added = isAdded;
        const lbl = btn.querySelector('.add-btn__label');
        if (lbl) lbl.textContent = isAdded ? 'In je lijst' : 'Voeg toe aan lijst';
      });
      // Render basket page if present
      const list = document.querySelector('[data-basket-list]');
      const empty = document.querySelector('[data-basket-empty]');
      const formWrap = document.querySelector('[data-basket-form]');
      if (list) {
        list.innerHTML = '';
        if (items.length === 0) {
          if (empty) empty.style.display = 'block';
          if (formWrap) formWrap.style.display = 'none';
        } else {
          if (empty) empty.style.display = 'none';
          if (formWrap) formWrap.style.display = 'block';
          items.forEach(item => {
            const li = document.createElement('article');
            li.className = 'basket-item';
            li.innerHTML = `
              <div class="basket-item__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div>
                <h3 class="basket-item__title">${escapeHtml(item.title)}</h3>
                <p class="basket-item__sub">${escapeHtml(item.tagline || '')}</p>
              </div>
              <button class="basket-item__remove" aria-label="Verwijder ${escapeHtml(item.title)}" data-remove="${escapeHtml(item.slug)}">×</button>
            `;
            list.appendChild(li);
          });
          list.querySelectorAll('[data-remove]').forEach(b => {
            b.addEventListener('click', () => Basket.remove(b.dataset.remove));
          });
        }
        // Update hidden form input with structured data
        const xmlInput = document.querySelector('[name="selectie_xml"]');
        if (xmlInput) {
          xmlInput.value = items.length
            ? buildSelectionXml(items)
            : '';
        }
      }
    }
  };

  function escapeHtml(s) {
    return String(s ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function buildSelectionXml(items) {
    const lines = ['<selectie>'];
    items.forEach(it => {
      lines.push(`  <product slug="${escapeHtml(it.slug)}">`);
      lines.push(`    <titel>${escapeHtml(it.title)}</titel>`);
      if (it.tagline) lines.push(`    <korte-omschrijving>${escapeHtml(it.tagline)}</korte-omschrijving>`);
      lines.push(`  </product>`);
    });
    lines.push('</selectie>');
    return lines.join('\n');
  }

  // Wire up "Voeg toe aan lijst" buttons
  document.querySelectorAll('.add-btn[data-slug]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const slug = btn.dataset.slug;
      const product = {
        slug,
        title: btn.dataset.title || slug,
        tagline: btn.dataset.tagline || '',
      };
      if (Basket.has(slug)) {
        Basket.remove(slug);
        return;
      }
      Basket.add(product);
      // Stamp burst animation at click position
      const rect = btn.getBoundingClientRect();
      stampBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, btn.dataset.stamp || 'Genoteerd');
      // Bump FAB
      const fab = document.querySelector('.basket-fab');
      if (fab) {
        fab.classList.remove('bump');
        // force reflow
        void fab.offsetWidth;
        fab.classList.add('bump');
      }
    });
  });

  function stampBurst(x, y, text) {
    const el = document.createElement('div');
    el.className = 'stamp-burst';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  // Initial render
  Basket.render();

  /* ---------- Dirk vraagt — carousel ---------- */
  const dvData = [
    {
      who: 'Dirk',
      role: 'Aannemer · Apeldoorn',
      q: 'Mijn opdrachtgever betaalt al 4 maanden de factuur niet. Wat doe ik?',
      a: 'Begin met een formele aanmaning met termijn van 14 dagen. Werkt dat niet, dan starten wij een incassoprocedure op no-cure-no-pay basis. Je hebt binnen 6 weken duidelijkheid.'
    },
    {
      who: 'Eline',
      role: 'Cateraar · Goes',
      q: 'Een medewerker is langdurig ziek. Mag ik na 2 jaar ontslag aanvragen?',
      a: 'Ja, dat kan via UWV. Maar er moet wél een goed re-integratiedossier liggen. We checken samen of jullie alles correct hebben vastgelegd, anders is een ontslag aanvraag kansloos.'
    },
    {
      who: 'Joris',
      role: 'Mkb-directeur · Zwolle',
      q: 'Ik wil mijn zaak overdragen aan mijn dochter. Waar moet ik aan denken?',
      a: 'Drie sporen: bedrijfsstructuur (BV/holding), fiscale faciliteiten (BOR) en de menselijke kant (rolverdeling, broers en zussen). We maken een tijdslijn van 18 maanden zodat je niets vergeet.'
    },
    {
      who: 'Sandra',
      role: 'Schoonheidsspecialiste · Breda',
      q: 'Ik huur een pand maar de verhuurder wil mijn huur fors verhogen. Mag dat?',
      a: 'Niet zomaar. Voor middenstandsbedrijfsruimte gelden strikte regels. We checken je contract, peilen de markthuur en onderhandelen. In 80% van de gevallen vinden we ruimte.'
    },
    {
      who: 'Kees',
      role: 'Loonwerker · Friesland',
      q: 'Mijn compagnon wil eruit stappen. Hoe regel ik dat zonder ruzie?',
      a: 'Met een uittredingsregeling op basis van wat in jullie aandeelhoudersovereenkomst staat — of, als die er niet is, een nieuwe afspraak. We zorgen dat de waardering klopt en dat jij verder kunt.'
    },
    {
      who: 'Mariska',
      role: 'Webshop-eigenaar · Tilburg',
      q: 'Een concurrent gebruikt mijn productfoto\'s. Wat zijn mijn opties?',
      a: 'Auteursrecht is sterk in Nederland. We sturen een sommatie met schadebedrag. Werkt vaak direct. Zo niet, dan kort geding — maar in 9 van 10 keren is het na de brief al opgelost.'
    }
  ];

  const dvPanel = document.querySelector('[data-dv-panel]');
  if (dvPanel) {
    let idx = 0;
    const initials = (n) => n.split(' ').map(p => p[0]).join('').slice(0,2).toUpperCase();
    const render = () => {
      const d = dvData[idx];
      dvPanel.querySelector('[data-dv-avatar]').textContent = initials(d.who);
      dvPanel.querySelector('[data-dv-name]').innerHTML = `<strong>${d.who}</strong>${d.role}`;
      dvPanel.querySelector('[data-dv-q]').textContent = '"' + d.q + '"';
      dvPanel.querySelector('[data-dv-a]').innerHTML = '<strong>Klarijn antwoordt</strong>' + d.a;
      const dotsEl = dvPanel.querySelector('[data-dv-dots]');
      dotsEl.innerHTML = '';
      dvData.forEach((_, i) => {
        const b = document.createElement('button');
        b.className = 'dv-panel__dot' + (i === idx ? ' is-active' : '');
        b.setAttribute('aria-label', `Vraag ${i+1}`);
        b.addEventListener('click', () => { idx = i; render(); reset(); });
        dotsEl.appendChild(b);
      });
    };
    const next = () => { idx = (idx + 1) % dvData.length; render(); };
    const prev = () => { idx = (idx - 1 + dvData.length) % dvData.length; render(); };
    let interval;
    const start = () => { interval = setInterval(next, 7000); };
    const reset = () => { clearInterval(interval); start(); };

    dvPanel.querySelector('[data-dv-next]').addEventListener('click', () => { next(); reset(); });
    dvPanel.querySelector('[data-dv-prev]').addEventListener('click', () => { prev(); reset(); });
    dvPanel.addEventListener('mouseenter', () => clearInterval(interval));
    dvPanel.addEventListener('mouseleave', () => start());

    render();
    start();
  }

  /* ---------- Beslisboom (Franchise) ---------- */
  const treeEl = document.querySelector('[data-tree]');
  if (treeEl) {
    const questions = [
      {
        q: 'Heb je minimaal 3 jaar werkervaring als jurist of bedrijfsjurist?',
        a: [
          { label: 'Ja', score: 1 },
          { label: 'Nog niet, maar wel verwante ervaring', score: 0 },
          { label: 'Nee', score: -2 }
        ]
      },
      {
        q: 'Wat past het beste bij jou?',
        a: [
          { label: 'Ik wil ondernemen, mijn eigen praktijk opbouwen', score: 2 },
          { label: 'Ik wil zelfstandig werken, maar liever zonder de hele last', score: 1 },
          { label: 'Ik werk liever in loondienst', score: -2 }
        ]
      },
      {
        q: 'Hoeveel uur per week wil je in je praktijk steken?',
        a: [
          { label: '32+ uur (volwaardig)', score: 2 },
          { label: '20–32 uur', score: 1 },
          { label: 'Minder dan 20 uur', score: -1 }
        ]
      },
      {
        q: 'Welke werkwijze spreekt jou aan?',
        a: [
          { label: 'Praktisch, direct, no-nonsense', score: 2 },
          { label: 'Gemixt — soms strategisch, soms uitvoerend', score: 1 },
          { label: 'Vooral procederen en juridische geschillen', score: -1 }
        ]
      },
      {
        q: 'Hoe sta je tegenover een franchiseformule?',
        a: [
          { label: 'Top: gedeelde merknaam, eigen rayon, samen sterk', score: 2 },
          { label: 'Open, mits ik genoeg vrijheid hou', score: 1 },
          { label: 'Liever volledig onafhankelijk', score: -2 }
        ]
      },
      {
        q: 'Heb je affiniteit met ondernemers in mkb / familiebedrijven / maakindustrie?',
        a: [
          { label: 'Ja, mijn voorkeursdoelgroep', score: 2 },
          { label: 'Beetje, ik werk breder', score: 1 },
          { label: 'Niet echt', score: -1 }
        ]
      },
      {
        q: 'Wat vind je van marketing & acquisitie?',
        a: [
          { label: 'Leuk, daar draai ik graag aan', score: 1 },
          { label: 'Niet mijn favoriet — graag ondersteuning', score: 1 },
          { label: 'Heb er geen affiniteit mee', score: -1 }
        ]
      },
      {
        q: 'Heb je interesse in een specialisatie naast generieke ondernemerszaken?',
        a: [
          { label: 'Ja: arbeidsrecht / contracten / IE / privacy', score: 2 },
          { label: 'Misschien — eerst breed beginnen', score: 1 },
          { label: 'Geen sterke voorkeur', score: 0 }
        ]
      },
      {
        q: 'Hoe sta je tegenover een vaste backoffice voor automatisering en ondersteuning?',
        a: [
          { label: 'Onmisbaar — daar wil ik mijn tijd niet aan kwijt', score: 2 },
          { label: 'Handig, mits ik er invloed op heb', score: 1 },
          { label: 'Liever zelf alles regelen', score: -1 }
        ]
      },
      {
        q: 'In welke regio wil je een rayon opbouwen?',
        a: [
          { label: 'Ik heb een specifieke regio voor ogen', score: 2 },
          { label: 'Ik ben flexibel', score: 1 },
          { label: 'Weet ik nog niet', score: 0 }
        ]
      }
    ];

    let step = 0;
    let score = 0;
    let history = [];

    const progress = treeEl.querySelector('[data-tree-progress]');
    const body = treeEl.querySelector('[data-tree-body]');

    const renderProgress = () => {
      progress.innerHTML = '';
      questions.forEach((_, i) => {
        const sp = document.createElement('span');
        if (i < step) sp.classList.add('is-done');
        if (i === step) sp.classList.add('is-current');
        progress.appendChild(sp);
      });
    };

    const renderQuestion = () => {
      renderProgress();
      const q = questions[step];
      body.innerHTML = `
        <div class="tree__qhead">Vraag ${step + 1} van ${questions.length}</div>
        <h2 class="tree__q">${q.q}</h2>
        <div class="tree__answers"></div>
        <div class="tree__nav">
          <button class="tree__back" data-back ${step === 0 ? 'disabled' : ''}>← Terug</button>
          <span>${Math.round(((step) / questions.length) * 100)}% voltooid</span>
        </div>
      `;
      const ans = body.querySelector('.tree__answers');
      q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'tree__answer';
        btn.innerHTML = `<span>${opt.label}</span><span class="tree__answer__arrow" aria-hidden="true">→</span>`;
        btn.addEventListener('click', () => {
          history.push({ step, score: opt.score });
          score += opt.score;
          step++;
          if (step >= questions.length) renderResult();
          else renderQuestion();
        });
        ans.appendChild(btn);
      });
      body.querySelector('[data-back]')?.addEventListener('click', () => {
        if (history.length === 0) return;
        const last = history.pop();
        score -= last.score;
        step = last.step;
        renderQuestion();
      });
    };

    const renderResult = () => {
      const isMatch = score >= 8;
      progress.innerHTML = '';
      questions.forEach(() => {
        const sp = document.createElement('span'); sp.classList.add('is-done'); progress.appendChild(sp);
      });
      body.innerHTML = `
        <div class="tree__result ${isMatch ? 'is-match' : ''}">
          <div class="tree__result__icon">${isMatch ? '✓' : '!'}</div>
          <h2>${isMatch ? 'Match. Laten we kennismaken.' : 'Klarijn lijkt nu nog niet de beste pasvorm.'}</h2>
          <p class="lead" style="margin: 0 auto 1.6rem;">${isMatch
            ? 'Op basis van je antwoorden lijkt het Klarijn-model bij jou te passen. We nodigen je uit voor een vrijblijvend gesprek waarin we je vragen beantwoorden en samen kijken naar de mogelijkheden in jouw rayon.'
            : 'Op basis van je antwoorden zien we niet direct een wederzijdse match. Wil je toch even sparren? We staan altijd open voor een goed gesprek.'}</p>
          ${isMatch ? `
            <form class="form" style="max-width:480px;margin:0 auto;text-align:left;" onsubmit="event.preventDefault(); this.innerHTML='<p style=\\'text-align:center;font-size:1.2rem;font-family:var(--display);\\'>Bedankt — we nemen binnen 2 werkdagen contact op.</p>';">
              <div class="form__row">
                <label>Voornaam<input required name="first" /></label>
                <label>Achternaam<input required name="last" /></label>
              </div>
              <label>E-mail<input required type="email" name="email" /></label>
              <label>Telefoon<input type="tel" name="phone" /></label>
              <label>Voorkeursregio<input name="region" placeholder="Bijv. Twente, Zuid-Limburg, regio Zwolle" /></label>
              <button type="submit" class="btn btn--accent">Plan een kennismakingsgesprek <span class="arrow">→</span></button>
            </form>
          ` : `
            <a class="btn btn--ghost" href="contact.html">Toch contact opnemen</a>
          `}
          <div style="margin-top:2rem;">
            <button class="tree__back" data-restart>↺ Opnieuw beginnen</button>
          </div>
        </div>
      `;
      body.querySelector('[data-restart]')?.addEventListener('click', () => {
        step = 0; score = 0; history = [];
        renderQuestion();
      });
    };

    renderQuestion();
  }

  /* ---------- Basket form submit (demo) ---------- */
  const basketForm = document.querySelector('[data-basket-form] form');
  if (basketForm) {
    basketForm.addEventListener('submit', e => {
      e.preventDefault();
      const items = Basket.items;
      if (items.length === 0) return;
      const fd = new FormData(basketForm);
      // Demo: log structured payload that would be emailed to bestelling@klarijn.nl
      const payload = {
        verstuurd_naar: 'bestelling@klarijn.nl',
        klant: Object.fromEntries(fd.entries()),
        selectie: items
      };
      console.log('[Klarijn demo] Verzonden offerte-aanvraag:', payload);
      // Show confirmation
      const wrap = basketForm.closest('[data-basket-form]');
      wrap.innerHTML = `
        <div class="basket-empty" style="border-color: var(--leaf); border-style: solid;">
          <div class="step__num" style="color: var(--leaf);">✓</div>
          <h3>We gaan ermee aan de slag.</h3>
          <p class="muted">Je aanvraag is verzonden naar <strong>bestelling@klarijn.nl</strong>. Je ontvangt direct een bevestiging in je inbox.</p>
          <p class="muted">Een rayonhouder neemt binnen 1 werkdag contact met je op om de vervolgstappen te bespreken.</p>
          <a class="btn btn--ghost" href="index.html">Terug naar de website</a>
        </div>`;
      Basket.clear();
    });
  }

  /* ---------- Smooth reveal on scroll (lichte animatie) ---------- */
  const reveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveal.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'none';
          io.unobserve(en.target);
        }
      });
    }, { threshold: .12 });
    reveal.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .7s var(--ease, ease), transform .7s var(--ease, ease)';
      io.observe(el);
    });
  }

})();
