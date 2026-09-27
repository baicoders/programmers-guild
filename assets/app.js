(() => {
  'use strict';

  // Adding a language? Create projects/<id>.md and add it here.
  const LANGUAGES = [
    { id: 'html-css', name: 'HTML / CSS', ext: '.html' },
    { id: 'javascript', name: 'JavaScript', ext: '.js' },
    { id: 'python', name: 'Python', ext: '.py' },
    { id: 'java', name: 'Java', ext: '.java' },
    { id: 'csharp', name: 'C#', ext: '.cs' },
    { id: 'cpp', name: 'C++', ext: '.cpp' },
    { id: 'php', name: 'PHP', ext: '.php' },
    { id: 'go', name: 'Go', ext: '.go' },
    { id: 'rust', name: 'Rust', ext: '.rs' },
  ];

  const LEVELS = {
    '🟢': { key: 'beginner', label: 'Beginner' },
    '🟡': { key: 'intermediate', label: 'Intermediate' },
    '🔴': { key: 'challenge', label: 'Challenge' },
  };

  const STATUSES = [
    { key: 'todo', label: 'Not started' },
    { key: 'building', label: 'Building' },
    { key: 'shipped', label: 'Shipped' },
  ];

  const JOURNEY = [
    { label: 'Create a GitHub account', href: 'https://github.com/signup' },
    { label: 'Join the baicoders org', href: 'https://github.com/baicoders' },
    { label: 'Read the guide', href: '#/guide' },
    { label: 'Do the warm-up', href: '#/warm-up' },
    { label: 'Pick a project', href: '#projects' },
    { label: 'Create your repo', href: 'https://github.com/new' },
    { label: 'Build and commit' },
    { label: 'Push and showcase', href: '#/doc/SHOWCASE.md' },
  ];

  const PROJECT_RE = /^## (🟢|🟡|🔴) (\d+)\. (.+?)\s*$/u;
  const META_RE = /^\*\*(Level|Time):\*\*.*$/m;
  const DOC_PATH_RE = /^(?!\/)(?!.*\.\.)[\w\-./]+\.md$/;

  const main = document.getElementById('main');
  const DEFAULT_REPO_URL = 'https://github.com/baicoders/programmers-guild';
  const REPO_URL = detectRepoUrl() || DEFAULT_REPO_URL;

  // ---------- Storage (per-viewer conveniences only) ----------
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem('pg:' + key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('pg:' + key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
    },
  };

  const state = {
    langs: [],
    projects: [],
    warmup: null,
    docs: {},
    filters: Object.assign({ q: '', lang: 'all', level: 'all', status: 'all' }, store.get('filters', {})),
  };

  // ---------- Helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // GitHub-style heading anchor: lowercase, drop punctuation and emoji, spaces to hyphens.
  function slugify(text) {
    return text.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/ /g, '-');
  }

  function plain(md) {
    return md
      .replace(/`([^`]*)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function trimBlock(lines) {
    const junk = l => !l.trim() || /^-{3,}$/.test(l.trim());
    let s = 0, e = lines.length;
    while (s < e && junk(lines[s])) s++;
    while (e > s && junk(lines[e - 1])) e--;
    return lines.slice(s, e).join('\n');
  }

  function section(md, name) {
    const m = new RegExp(`^#{2,3} ${name}\\s*$`, 'm').exec(md);
    if (!m) return '';
    const rest = md.slice(m.index + m[0].length);
    const next = rest.search(/^#{2,3} /m);
    return (next === -1 ? rest : rest.slice(0, next)).trim();
  }

  function detectRepoUrl() {
    const host = location.hostname;
    if (!host.endsWith('.github.io')) return null;
    const owner = host.replace('.github.io', '');
    const first = location.pathname.split('/').filter(Boolean)[0];
    return `https://github.com/${owner}/${first || host}`;
  }

  async function fetchText(path) {
    if (state.docs[path] !== undefined) return state.docs[path];
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`${path} returned HTTP ${res.status}`);
    const text = await res.text();
    state.docs[path] = text;
    return text;
  }

  // ---------- Parsing the Markdown briefs ----------
  function parseBrief(body) {
    const meta = (body.match(META_RE) || [''])[0];
    const levelText = (meta.match(/\*\*Level:\*\*\s*([^·]+)/) || [])[1];
    const time = ((meta.match(/\*\*Time:\*\*\s*([^·]+)/) || [])[1] || '').trim();
    const repo = (meta.match(/\*\*Repo name:\*\*\s*`([^`]+)`/) || [])[1] || '';
    const content = body.replace(META_RE, '').trim();
    const mission = plain(section(content, 'The mission').split(/\n\s*\n/)[0] || '');
    const haystack = plain(content.replace(/<[^>]+>/g, ' ')).toLowerCase();
    return { levelText, time, repo, content, mission, haystack };
  }

  function parseLanguage(md, lang) {
    const lines = md.split(/\r?\n/);
    const heads = [];
    lines.forEach((line, i) => {
      const m = line.match(PROJECT_RE);
      if (m) heads.push({ i, m });
    });
    const introEnd = heads.length ? heads[0].i : lines.length;
    const intro = trimBlock(lines.slice(1, introEnd).filter(l => !l.includes('Back to the board')));
    const parsed = Object.assign({}, lang, { intro, projects: [] });

    parsed.projects = heads.map((h, k) => {
      const end = k + 1 < heads.length ? heads[k + 1].i : lines.length;
      const [heading, emoji, num, title] = h.m;
      const brief = parseBrief(trimBlock(lines.slice(h.i + 1, end)));
      return Object.assign(brief, {
        id: `${lang.id}/${num}`,
        n: Number(num),
        title,
        lang: parsed,
        level: LEVELS[emoji],
        anchor: slugify(heading.replace(/^## /, '')),
        source: `projects/${lang.id}.md`,
      });
    });
    return parsed;
  }

  function parseWarmup(md) {
    const lines = md.split(/\r?\n/);
    const title = (lines[0] || '').replace(/^#\s*(🟢\s*)?/u, '').trim();
    const body = trimBlock(lines.slice(1).filter(l => !l.includes('Back to the board')));
    return Object.assign(parseBrief(body), {
      id: 'warm-up',
      title,
      lang: { id: 'warm-up', name: 'Start here', ext: '.git' },
      level: { key: 'start', label: 'Start here' },
      source: 'projects/warm-up.md',
      intro: '',
    });
  }

  async function loadCatalog() {
    const [texts, warm] = await Promise.all([
      Promise.all(LANGUAGES.map(l => fetchText(`projects/${l.id}.md`))),
      fetchText('projects/warm-up.md'),
    ]);
    LANGUAGES.forEach((lang, i) => {
      const parsed = parseLanguage(texts[i], lang);
      state.langs.push(parsed);
      state.projects.push(...parsed.projects);
    });
    state.warmup = parseWarmup(warm);
  }

  // ---------- Markdown rendering ----------
  function renderMarkdown(src, basePath) {
    const el = document.createElement('div');
    el.innerHTML = DOMPurify.sanitize(marked.parse(src, { gfm: true }));
    el.querySelectorAll('h1, h2, h3, h4').forEach(h => { h.id = slugify(h.textContent); });
    rewriteLinks(el, basePath);
    return el;
  }

  function resolvePath(base, rel) {
    const parts = base.split('/');
    parts.pop();
    rel.split('/').forEach(seg => {
      if (seg === '..') parts.pop();
      else if (seg && seg !== '.') parts.push(seg);
    });
    return parts.join('/');
  }

  function routeFor(path, anchor) {
    if (path === 'README.md') {
      return anchor === '-project-catalog' ? '#/' : '#/guide' + (anchor ? '/' + anchor : '');
    }
    if (path === 'projects/warm-up.md') return '#/warm-up';
    const m = path.match(/^projects\/([a-z-]+)\.md$/);
    const lang = m && state.langs.find(l => l.id === m[1]);
    if (lang) {
      const p = lang.projects.find(x => x.anchor === anchor);
      return p ? `#/p/${p.id}` : `#/lang/${lang.id}`;
    }
    if (path.endsWith('.md')) return '#/doc/' + path + (anchor ? '/' + anchor : '');
    return null;
  }

  function rewriteLinks(root, basePath) {
    root.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) {
        a.target = '_blank';
        a.rel = 'noopener';
        return;
      }
      const hashAt = href.indexOf('#');
      const p = hashAt === -1 ? href : href.slice(0, hashAt);
      const anchor = hashAt === -1 ? '' : href.slice(hashAt + 1);
      const path = p ? resolvePath(basePath, p) : basePath;
      const route = routeFor(path, anchor);
      a.setAttribute('href', route || path + (anchor ? '#' + anchor : ''));
    });
  }

  // Turn "- [ ]" items into real checkboxes. With a storage key, ticks are remembered.
  function wireTasks(root, key, onChange) {
    const saved = new Set(key ? store.get(key, []) : []);
    const boxes = [...root.querySelectorAll('li > input[type="checkbox"]')];
    boxes.forEach((box, i) => {
      const li = box.parentElement;
      li.classList.add('task');
      const label = document.createElement('label');
      const text = document.createElement('span');
      [...li.childNodes].forEach(n => {
        if (n === box || n.nodeName === 'UL' || n.nodeName === 'OL') return;
        text.appendChild(n);
      });
      box.removeAttribute('disabled');
      box.disabled = !key;
      box.checked = saved.has(i);
      li.classList.toggle('checked', box.checked);
      label.append(box, text);
      li.prepend(label);
      box.addEventListener('change', () => {
        li.classList.toggle('checked', box.checked);
        if (box.checked) saved.add(i); else saved.delete(i);
        store.set(key, [...saved]);
        if (onChange) onChange();
      });
    });
    return boxes;
  }

  // ---------- Views ----------
  function statusOf(id) { return store.get('status:' + id, 'todo'); }

  function journeyHTML() {
    const done = store.get('journey', []);
    const head = JOURNEY.findIndex((_, i) => !done.includes(i));
    const items = JOURNEY.map((step, i) => {
      const isDone = done.includes(i);
      const label = step.href ? `<a href="${esc(step.href)}"${step.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(step.label)}</a>` : esc(step.label);
      return `<li class="${isDone ? 'done' : ''}">
        ${i === head ? '<span class="head-tag">HEAD</span>' : ''}
        <button class="node" type="button" data-step="${i}" aria-pressed="${isDone}" aria-label="${esc(step.label)}: mark as ${isDone ? 'not done' : 'done'}"></button>
        <span class="step-label">${label}</span>
      </li>`;
    }).join('');
    const status = head === -1 ? 'All eight steps done. Pick your next project.' : `Tick a step once you’ve done it. <code>HEAD</code> shows where you are.`;
    return `<div class="journey-head"><h2 id="journey-title">Your journey</h2><p>${status}</p></div>
      <ol class="rail" aria-labelledby="journey-title">${items}</ol>`;
  }

  function cardHTML(p) {
    const status = statusOf(p.id);
    const badge = status === 'todo' ? '' : `<span class="status status-${status}">${esc(STATUSES.find(s => s.key === status).label)}</span>`;
    return `<a class="card lvl-${p.level.key}" href="#/p/${p.id}">
      <div class="card-top"><span class="ext">${esc(p.lang.ext)}</span><span class="level">${esc(p.level.label)}</span>${badge}</div>
      <h4>${esc(p.title)}</h4>
      <p>${esc(p.mission)}</p>
      <div class="card-foot"><code>${esc(p.repo)}</code><span class="time">${esc(p.time)}</span></div>
    </a>`;
  }

  function matches(p, f) {
    if (f.lang !== 'all' && p.lang.id !== f.lang) return false;
    if (f.level !== 'all' && p.level.key !== f.level) return false;
    if (f.status !== 'all' && statusOf(p.id) !== f.status) return false;
    const q = f.q.trim().toLowerCase();
    if (!q) return true;
    const hay = [p.title, p.lang.name, p.repo].join(' ').toLowerCase() + ' ' + p.haystack;
    return q.split(/\s+/).every(t => hay.includes(t));
  }

  function renderHome(route) {
    if (route.lang && state.langs.some(l => l.id === route.lang)) {
      state.filters.lang = route.lang;
      store.set('filters', state.filters);
    }
    const f = state.filters;
    const shipped = state.projects.filter(p => statusOf(p.id) === 'shipped').length;
    const building = state.projects.filter(p => statusOf(p.id) === 'building').length;
    const plural = n => `${n} project${n === 1 ? '' : 's'}`;
    const tally = [
      shipped && `${plural(shipped)} shipped`,
      building && `${plural(building)} in progress`,
    ].filter(Boolean).join(' · ') || `${state.projects.length} projects in ${state.langs.length} languages`;

    const chip = (group, value, label, extra = '') =>
      `<button type="button" class="chip ${extra}" data-filter="${group}" data-value="${esc(value)}" aria-pressed="${f[group] === value}">${label}</button>`;

    main.innerHTML = `
      <section class="hero wrap">
        <h1>Pick a project. Own the repo. <span class="push">Push it to GitHub.</span></h1>
        <p class="lede">Each brief tells you what to build, never how. You create the repository on your own account, write every line yourself, and ship it the way developers do at work.</p>
        <div class="journey" id="journey">${journeyHTML()}</div>
      </section>

      <section class="board wrap" id="projects" aria-labelledby="board-title">
        <div class="board-head">
          <h2 id="board-title">Projects</h2>
          <p class="tally">${esc(tally)}</p>
        </div>
        <div class="filters">
          <input class="search" type="search" placeholder="Search by name, language or concept, e.g. “sqlite” or “api”" value="${esc(f.q)}" aria-label="Search projects">
          <div class="filter-row">
            <div class="chips" role="group" aria-label="Language">
              ${chip('lang', 'all', 'All')}
              ${state.langs.map(l => chip('lang', l.id, esc(l.ext), 'ext-chip')).join('')}
            </div>
          </div>
          <div class="filter-row">
            <div class="filter-group" role="group" aria-label="Level">
              <span class="filter-label">Level</span>
              ${chip('level', 'all', 'Any')}
              ${Object.values(LEVELS).map(l => chip('level', l.key, `<i class="dot"></i>${l.label}`, 'lvl-' + l.key)).join('')}
            </div>
            <div class="filter-group" role="group" aria-label="Your progress">
              <span class="filter-label">Progress</span>
              ${chip('status', 'all', 'Any')}
              ${STATUSES.map(s => chip('status', s.key, s.label)).join('')}
            </div>
          </div>
        </div>
        <p class="count" aria-live="polite"></p>
        <div class="results"></div>
      </section>`;

    renderResults();

    main.querySelector('.search').addEventListener('input', e => {
      f.q = e.target.value;
      store.set('filters', f);
      renderResults();
    });
    main.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
      f[btn.dataset.filter] = btn.dataset.value;
      store.set('filters', f);
      main.querySelectorAll(`[data-filter="${btn.dataset.filter}"]`).forEach(b => b.setAttribute('aria-pressed', b === btn));
      renderResults();
    }));
    main.querySelector('#journey').addEventListener('click', e => {
      const node = e.target.closest('.node');
      if (!node) return;
      const i = Number(node.dataset.step);
      const done = new Set(store.get('journey', []));
      if (done.has(i)) done.delete(i); else done.add(i);
      store.set('journey', [...done]);
      main.querySelector('#journey').innerHTML = journeyHTML();
      main.querySelector(`.node[data-step="${i}"]`).focus();
    });
  }

  function renderResults() {
    const f = state.filters;
    const results = main.querySelector('.results');
    const hits = state.projects.filter(p => matches(p, f));
    const filtered = f.q || f.lang !== 'all' || f.level !== 'all' || f.status !== 'all';
    main.querySelector('.count').textContent = filtered
      ? `Showing ${hits.length} of ${state.projects.length} projects`
      : `Showing all ${state.projects.length} projects`;

    const w = state.warmup;
    const showWarmup = !filtered && statusOf('warm-up') !== 'shipped';
    const warmup = showWarmup ? `<a class="start-card" href="#/warm-up">
        <div><span class="kicker">NEW HERE? START WITH THIS</span><h3>${esc(w.title)}</h3><p>${esc(w.mission)}</p></div>
        <span class="go">Open the warm-up</span>
      </a>` : '';

    if (!hits.length) {
      results.innerHTML = `<div class="empty"><p>No projects match these filters.</p><button type="button" class="btn" data-clear>Clear all filters</button></div>`;
      results.querySelector('[data-clear]').addEventListener('click', () => {
        Object.assign(f, { q: '', lang: 'all', level: 'all', status: 'all' });
        store.set('filters', f);
        renderHome({});
      });
      return;
    }

    const groups = state.langs
      .map(l => ({ lang: l, items: hits.filter(p => p.lang.id === l.id) }))
      .filter(g => g.items.length)
      .map(g => `<section class="group" aria-labelledby="g-${g.lang.id}">
          <div class="group-head"><h3 id="g-${g.lang.id}">${esc(g.lang.name)}</h3><span>${g.items.length} of ${g.lang.projects.length}</span></div>
          <div class="grid">${g.items.map(cardHTML).join('')}</div>
        </section>`).join('');
    results.innerHTML = warmup + groups;
  }

  function renderProject(p) {
    const siblings = p.id === 'warm-up' ? [] : p.lang.projects;
    const idx = siblings.indexOf(p);
    const prev = siblings[idx - 1];
    const next = siblings[idx + 1];
    const langCrumb = p.id === 'warm-up' ? '' : `<a href="#/lang/${p.lang.id}">${esc(p.lang.name)}</a><span aria-hidden="true">/</span>`;
    const repoLink = REPO_URL
      ? `<p><a href="${REPO_URL}/issues/new?template=help-request.md" target="_blank" rel="noopener">Stuck? Ask for help</a> · <a href="${REPO_URL}/blob/main/${p.source}" target="_blank" rel="noopener">View this brief on GitHub</a></p>`
      : `<p>Stuck for more than 30 minutes? Open a Help Request issue in the Guild repository.</p>`;

    main.innerHTML = `
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Projects</a><span aria-hidden="true">/</span>${langCrumb}<span>${esc(p.title)}</span></nav>
        <header class="detail-head lvl-${p.level.key}">
          <div class="tags"><span class="ext">${esc(p.lang.ext)}</span><span class="level">${esc(p.level.label)}</span>${p.time ? `<span>${esc(p.time)}</span>` : ''}</div>
          <h1>${esc(p.title)}</h1>
        </header>
        <div class="detail-grid">
          <article class="prose"></article>
          <aside class="aside" aria-label="Your progress on this project">
            <section class="panel">
              <h2>Your progress</h2>
              <div class="seg" role="group" aria-label="Project status">
                ${STATUSES.map(s => `<button type="button" data-status="${s.key}" aria-pressed="${statusOf(p.id) === s.key}">${s.label}</button>`).join('')}
              </div>
              <div class="meter" hidden>
                <div class="meter-label"><span>Requirements</span><span class="meter-count"></span></div>
                <div class="meter-bar"><i></i></div>
              </div>
            </section>
            <section class="panel">
              <h2>Start your repo</h2>
              <div class="repo-name"><code><span class="you">your-username/</span>${esc(p.repo)}</code><button type="button" class="copy-btn">Copy</button></div>
              <ol class="steps">
                <li><span>Create a <strong>public</strong> repo with this name on <a href="https://github.com/new" target="_blank" rel="noopener">your own account</a>.</span></li>
                <li><span>Clone it, build the requirements, and commit as you go.</span></li>
                <li><span>Push, then check the <a href="#/guide/-definition-of-done">Definition of Done</a>.</span></li>
                <li><span>Add it to the <a href="#/doc/SHOWCASE.md">Showcase</a> with a pull request.</span></li>
              </ol>
            </section>
            ${p.lang.intro ? `<section class="panel"><h2>Toolkit</h2><div class="toolkit prose"></div></section>` : ''}
            <section class="panel">${repoLink}</section>
          </aside>
        </div>
        ${prev || next ? `<nav class="pager" aria-label="More ${esc(p.lang.name)} projects">
          ${prev ? `<a class="prev" href="#/p/${prev.id}"><small>← Previous</small><strong>${esc(prev.title)}</strong></a>` : ''}
          ${next ? `<a class="next" href="#/p/${next.id}"><small>Next →</small><strong>${esc(next.title)}</strong></a>` : ''}
        </nav>` : '<div style="height:72px"></div>'}
      </div>`;

    const article = main.querySelector('article');
    article.append(...renderMarkdown(p.content, p.source).childNodes);
    if (p.lang.intro) main.querySelector('.toolkit').append(...renderMarkdown(p.lang.intro, p.source).childNodes);

    const meter = main.querySelector('.meter');
    const boxes = wireTasks(article, 'req:' + p.id, updateMeter);
    function updateMeter() {
      if (!boxes.length) return;
      const done = boxes.filter(b => b.checked).length;
      meter.hidden = false;
      meter.querySelector('.meter-count').textContent = `${done} of ${boxes.length}`;
      meter.querySelector('i').style.width = `${(done / boxes.length) * 100}%`;
    }
    updateMeter();

    main.querySelectorAll('[data-status]').forEach(btn => btn.addEventListener('click', () => {
      store.set('status:' + p.id, btn.dataset.status);
      main.querySelectorAll('[data-status]').forEach(b => b.setAttribute('aria-pressed', b === btn));
    }));

    const copyBtn = main.querySelector('.copy-btn');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(p.repo);
        copyBtn.textContent = 'Copied';
      } catch (e) {
        copyBtn.textContent = 'Select it manually';
      }
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1600);
    });
  }

  async function renderDoc(path, anchor) {
    if (!DOC_PATH_RE.test(path)) return renderNotFound();
    let text;
    try {
      text = await fetchText(path);
    } catch (e) {
      return renderNotFound();
    }
    if (path === 'README.md') {
      // The catalog table is this site's home page, so point to it instead of repeating it.
      text = text.replace(/^## 🗺️ Project Catalog[\s\S]*?(?=^---\s*$)/mu,
        '## 🗺️ Project Catalog\n\nAll projects are on the [Projects page](#-project-catalog), where you can filter them by language and level and track your progress.\n\n');
    }
    main.innerHTML = '<div class="wrap"><article class="prose doc"></article></div>';
    const article = main.querySelector('article');
    article.append(...renderMarkdown(text, path).childNodes);
    wireTasks(article, null);
    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) target.scrollIntoView();
    }
    return true;
  }

  function renderNotFound() {
    main.innerHTML = `<div class="error-box"><h1>This page doesn’t exist</h1><p>The link may be out of date. <a href="#/">Go to all projects</a>.</p></div>`;
    return false;
  }

  function renderLoadError(err) {
    const isFile = location.protocol === 'file:';
    main.innerHTML = `<div class="error-box">
      <h1>The project files didn’t load</h1>
      ${isFile
        ? `<p>This page was opened straight from disk, and browsers block it from reading the Markdown files that way. Serve the folder instead: run <code>python -m http.server</code> in the repository folder and open <code>http://localhost:8000</code>.</p>`
        : `<p>${esc(err.message)}. Check your connection and reload the page.</p>`}
    </div>`;
  }

  // ---------- Router ----------
  function parseRoute() {
    const h = location.hash;
    if (!h || h === '#' || h === '#/') return { name: 'home' };
    if (!h.startsWith('#/')) return null; // in-page anchor, not a route
    const path = decodeURIComponent(h.slice(2));
    let m;
    if ((m = path.match(/^p\/([a-z-]+)\/(\d+)$/))) return { name: 'project', id: `${m[1]}/${m[2]}` };
    if (path === 'warm-up') return { name: 'warmup' };
    if ((m = path.match(/^lang\/([a-z-]+)$/))) return { name: 'home', lang: m[1] };
    if ((m = path.match(/^guide(?:\/(.+))?$/))) return { name: 'doc', path: 'README.md', anchor: m[1], nav: 'guide' };
    if ((m = path.match(/^doc\/(.+?\.md)(?:\/(.+))?$/))) return { name: 'doc', path: m[1], anchor: m[2], nav: m[1] === 'SHOWCASE.md' ? 'showcase' : '' };
    return { name: 'notfound' };
  }

  let lastRoute = '';
  async function router() {
    const route = parseRoute();
    if (!route) {
      // A plain #anchor like #projects: scroll to it without leaving the current view.
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView();
      history.replaceState(null, '', lastRoute || '#/');
      return;
    }
    lastRoute = location.hash || '#/';

    const nav = route.nav || (['home', 'project', 'warmup'].includes(route.name) ? 'home' : '');
    document.querySelectorAll('[data-nav]').forEach(a => {
      if (a.dataset.nav === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });

    let title = 'Programmers Guild';
    if (route.name === 'home') renderHome(route);
    else if (route.name === 'warmup') { renderProject(state.warmup); title = `${state.warmup.title} · ${title}`; }
    else if (route.name === 'project') {
      const p = state.projects.find(x => x.id === route.id);
      if (p) { renderProject(p); title = `${p.title} (${p.lang.name}) · ${title}`; } else renderNotFound();
    } else if (route.name === 'doc') {
      const found = await renderDoc(route.path, route.anchor);
      const name = route.path === 'README.md' ? 'Guide' : route.path.replace(/\.md$/, '').replace(/^.*\//, '');
      if (found) title = `${name} · ${title}`;
    } else renderNotFound();
    document.title = title;

    if (!route.anchor) window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  // ---------- Chrome ----------
  function setupTheme() {
    const btn = document.querySelector('.theme-toggle');
    const current = () => document.documentElement.dataset.theme
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const label = () => btn.setAttribute('aria-label', `Switch to ${current() === 'dark' ? 'light' : 'dark'} theme`);
    label();
    btn.addEventListener('click', () => {
      const nextTheme = current() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      store.set('theme', nextTheme);
      label();
    });
  }

  function setupChrome() {
    document.querySelector('.skip').addEventListener('click', e => {
      e.preventDefault();
      main.focus();
    });
    if (REPO_URL) {
      const links = document.querySelector('.footer-links');
      links.innerHTML = `<a href="${REPO_URL}" target="_blank" rel="noopener">View the repository on GitHub</a>`;
      links.hidden = false;
    }
  }

  async function start() {
    setupTheme();
    setupChrome();
    if (typeof marked === 'undefined' || typeof DOMPurify === 'undefined') {
      renderLoadError(new Error('The Markdown libraries failed to load from the CDN'));
      return;
    }
    try {
      await loadCatalog();
    } catch (err) {
      renderLoadError(err);
      return;
    }
    window.addEventListener('hashchange', router);
    router();
  }

  start();
})();
