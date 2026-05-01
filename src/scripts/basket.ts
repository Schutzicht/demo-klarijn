// Klarijn - basket logic (vanilla TS, runs in browser)
// Persists in localStorage. Wires up:
// - .add-btn[data-slug] toggles items
// - [data-basket-count] shows count
// - [data-basket-list] renders items on /mandje
// - [data-basket-form] submit bouwt structured XML voor bestelling@klarijn.nl

const KEY = 'klarijn_basket';

type Item = { slug: string; title: string; tagline?: string };

const escapeHtml = (s: unknown) =>
  String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

function read(): Item[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}
function write(items: Item[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

function buildSelectionXml(items: Item[]) {
  const lines = ['<selectie>'];
  for (const it of items) {
    lines.push(`  <product slug="${escapeHtml(it.slug)}">`);
    lines.push(`    <titel>${escapeHtml(it.title)}</titel>`);
    if (it.tagline) lines.push(`    <korte-omschrijving>${escapeHtml(it.tagline)}</korte-omschrijving>`);
    lines.push(`  </product>`);
  }
  lines.push('</selectie>');
  return lines.join('\n');
}

function render() {
  const items = read();

  // FAB count
  document.querySelectorAll<HTMLElement>('[data-basket-count]').forEach((el) => {
    el.textContent = String(items.length);
    el.dataset.count = String(items.length);
  });

  // FAB visibility - alleen tonen als er items zijn
  document.querySelectorAll<HTMLElement>('[data-basket-fab]').forEach((el) => {
    if (items.length > 0) el.setAttribute('data-active', '');
    else el.removeAttribute('data-active');
  });

  // Add buttons state
  document.querySelectorAll<HTMLButtonElement>('.add-btn[data-slug]').forEach((btn) => {
    const inList = items.some((i) => i.slug === btn.dataset.slug);
    btn.dataset.added = String(inList);
    const lbl = btn.querySelector<HTMLElement>('.add-btn__label');
    if (lbl) lbl.textContent = inList ? 'In je lijst' : 'In lijst';
  });

  // Basket page list
  const list = document.querySelector<HTMLElement>('[data-basket-list]');
  const empty = document.querySelector<HTMLElement>('[data-basket-empty]');
  const formWrap = document.querySelector<HTMLElement>('[data-basket-form]');
  if (list) {
    list.innerHTML = '';
    if (items.length === 0) {
      if (empty) empty.style.display = 'block';
      if (formWrap) formWrap.style.display = 'none';
    } else {
      if (empty) empty.style.display = 'none';
      if (formWrap) formWrap.style.display = 'block';
      for (const item of items) {
        const li = document.createElement('article');
        li.className = 'grid grid-cols-[64px_1fr_auto] gap-4 items-center p-4 bg-white rounded-2xl shadow-sm';
        li.innerHTML = `
          <div class="w-16 h-16 bg-aubergine rounded-xl grid place-items-center text-magenta">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div>
            <h3 class="font-display-soft text-lg font-semibold mb-0.5 leading-tight">${escapeHtml(item.title)}</h3>
            <p class="text-ink-soft text-sm m-0">${escapeHtml(item.tagline || '')}</p>
          </div>
          <button class="bg-transparent border-[1.5px] border-ink/15 text-ink-soft w-9 h-9 rounded-full cursor-pointer text-xl hover:bg-magenta hover:text-white hover:border-magenta transition-all"
                  aria-label="Verwijder ${escapeHtml(item.title)}" data-remove="${escapeHtml(item.slug)}">×</button>
        `;
        list.appendChild(li);
      }
      list.querySelectorAll<HTMLButtonElement>('[data-remove]').forEach((b) => {
        b.addEventListener('click', () => removeItem(b.dataset.remove!));
      });
    }
    const xmlInput = document.querySelector<HTMLInputElement>('[name="selectie_xml"]');
    if (xmlInput) xmlInput.value = items.length ? buildSelectionXml(items) : '';
  }
}

function addItem(item: Item) {
  const items = read();
  if (!items.find((i) => i.slug === item.slug)) {
    items.push(item);
    write(items);
    render();
  }
}
function removeItem(slug: string) {
  const items = read().filter((i) => i.slug !== slug);
  write(items);
  render();
}
function clearBasket() {
  write([]);
  render();
}
function hasItem(slug: string) {
  return read().some((i) => i.slug === slug);
}

function stampBurst(x: number, y: number, text: string) {
  const el = document.createElement('div');
  el.className = 'stamp-burst';
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

// Subtiel geluidje bij toevoegen — twee-toon "ping" via Web Audio API.
let audioCtx: AudioContext | null = null;
function playAddSound() {
  try {
    const win = window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext };
    const Ctor = win.AudioContext || win.webkitAudioContext;
    if (!Ctor) return;
    if (!audioCtx) audioCtx = new Ctor();
    const ctx = audioCtx;
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;

    // Twee-toon chord: kwint omhoog (helder, kort)
    const tone = (freq: number, start: number, dur: number, vol: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now + start);
      gain.gain.exponentialRampToValueAtTime(vol, now + start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + start);
      osc.stop(now + start + dur + 0.02);
    };
    // Eerste tik: heldere C6 (1047 Hz)
    tone(1046.5, 0, 0.18, 0.06);
    // Iets later: G6 (1568 Hz) - subtiel kwint hoger, geeft "klik" gevoel
    tone(1567.98, 0.06, 0.16, 0.04);
  } catch {
    /* fail silently */
  }
}

function init() {
  // Wire add buttons
  document.querySelectorAll<HTMLButtonElement>('.add-btn[data-slug]').forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const slug = btn.dataset.slug!;
      if (hasItem(slug)) {
        removeItem(slug);
        return;
      }
      addItem({
        slug,
        title: btn.dataset.title || slug,
        tagline: btn.dataset.tagline || '',
      });
      const r = btn.getBoundingClientRect();
      stampBurst(r.left + r.width / 2, r.top + r.height / 2, btn.dataset.stamp || 'Genoteerd');
      playAddSound();
      const fab = document.querySelector<HTMLElement>('.basket-fab');
      if (fab) {
        fab.classList.remove('bump');
        void fab.offsetWidth;
        fab.classList.add('bump');
      }
    });
  });

  // Basket form submit
  const form = document.querySelector<HTMLFormElement>('[data-basket-form] form');
  if (form && !form.dataset.bound) {
    form.dataset.bound = '1';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const items = read();
      if (items.length === 0) return;
      const fd = new FormData(form);
      const payload = {
        verstuurd_naar: 'bestelling@klarijn.nl',
        klant: Object.fromEntries(fd.entries()),
        selectie: items,
      };
      console.log('[Klarijn demo] Verzonden offerte-aanvraag:', payload);
      const wrap = form.closest<HTMLElement>('[data-basket-form]')!;
      wrap.innerHTML = `
        <div class="text-center bg-white rounded-3xl shadow-sm p-12">
          <div class="w-16 h-16 mx-auto mb-4 bg-magenta rounded-full grid place-items-center text-white text-3xl">✓</div>
          <h3 class="text-2xl font-semibold text-aubergine mb-3">We gaan ermee aan de slag.</h3>
          <p class="text-ink-soft">Je aanvraag is verzonden naar <strong>bestelling@klarijn.nl</strong>.</p>
          <p class="text-ink-soft">Een rayonhouder neemt binnen 1 werkdag contact met je op.</p>
          <a class="btn btn-ghost mt-4" href="/">Terug naar de website</a>
        </div>`;
      clearBasket();
    });
  }

  render();
}

// Run on load + on Astro view-transitions
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
document.addEventListener('astro:page-load', init);
