// js/app.js — ナビゲーション・サイドバー・トークスクリプト

(function () {
  const stage        = document.getElementById('slideStage');
  const counter      = document.getElementById('slideCounter');
  const statusEl     = document.getElementById('slideStatus');
  const menuBtn      = document.getElementById('menuBtn');
  const sidebar      = document.getElementById('sidebar');
  const overlay      = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarNav   = document.getElementById('sidebarNav');
  const notesPanel   = document.getElementById('notesPanel');
  const notesContent = document.getElementById('notesContent');

  const total = window.slideFactories.length;
  let current = 0;
  const rendered = new Set();
  let notesTimer = null;

  // ── クイズ初期化（選択肢シャッフル + 正解ハイライト隠し + 答えオーバーレイ） ──
  function initQuizSlide(slideEl) {
    if (!slideEl.classList.contains('slide-quiz')) return;
    if (slideEl.dataset.quizInit) return;
    slideEl.dataset.quizInit = '1';

    // ── 選択肢カードを収集（選択肢を囲むラッパーを特定）──
    const cards = Array.from(slideEl.querySelectorAll('.card'));
    if (cards.length === 0) return;
    const choiceWrap = cards[0].parentNode;

    // ── 正解カードを特定（style属性に 22c55e が含まれる）──
    let correctCard = null;
    cards.forEach(card => {
      const styleAttr = card.getAttribute('style') || '';
      if (styleAttr.includes('22c55e')) correctCard = card;
    });

    // ── 正解カードの視覚的ハイライトをすべて除去（正解・不正解を均一化）──
    cards.forEach(card => {
      // カード自体の green border-left を除去
      card.style.borderLeft = '';
      // カード内の num-pill の色を全部グレーに統一
      const pill = card.querySelector('[style]');
      if (pill) pill.style.background = '#94a3b8';
    });

    // ── 選択肢をシャッフルして番号を振り直す ──
    const nums = ['①', '②', '③', '④'];
    const shuffled = cards.slice().sort(() => Math.random() - 0.5);
    shuffled.forEach((card, i) => {
      choiceWrap.appendChild(card); // 並び替え
      const pill = card.querySelector('[style]');
      if (pill) pill.textContent = nums[i]; // 番号を振り直す
    });

    // ── ✅ 答え要素を特定してオーバーレイに移動 ──
    const allDivs = slideEl.querySelectorAll('div');
    let answerEl = null;
    allDivs.forEach(div => {
      if (div.textContent.trim().startsWith('✅')) answerEl = div;
    });
    if (!answerEl) return;

    const answerHTML = answerEl.innerHTML;
    answerEl.remove();

    const answerOverlay = document.createElement('div');
    answerOverlay.className = 'quiz-overlay';
    answerOverlay.innerHTML = '<div class="quiz-overlay-inner">' + answerHTML + '</div>';
    slideEl.appendChild(answerOverlay);

    // ── 「答えを見る」ボタン ──
    const btn = document.createElement('button');
    btn.className = 'quiz-reveal-btn';
    btn.textContent = '👀 答えを見る';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      // 正解カードだけハイライト復元
      if (correctCard) {
        correctCard.style.borderLeft = '4px solid #22c55e';
        const pill = correctCard.querySelector('[style]');
        if (pill) pill.style.background = '#22c55e';
      }
      answerOverlay.classList.add('visible');
      btn.classList.add('hidden');
    });
    slideEl.appendChild(btn);
  }

  // ── レンダリング ──
  function ensureRendered(index) {
    if (rendered.has(index) || index < 0 || index >= total) return;
    const frag = document.createRange().createContextualFragment(slideFactories[index]());
    stage.appendChild(frag);
    rendered.add(index);
    // クイズスライドなら初期化
    const slideEl = stage.querySelectorAll('.slide')[index];
    if (slideEl) initQuizSlide(slideEl);
  }

  // ── スライド移動 ──
  function goTo(index) {
    if (index < 0 || index >= total) return;
    [index - 1, index, index + 1].forEach(i => ensureRendered(i));

    stage.querySelectorAll('.slide').forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });

    current = index;
    updateUI();
    history.replaceState(null, '', '#' + (index + 1));
  }

  // ── UI更新 ──
  function updateUI() {
    counter.textContent = (current + 1) + ' / ' + total;

    const item = agendaItems[current];
    statusEl.textContent = item ? (item.section || item.label) : '';

    sidebarNav.querySelectorAll('.sidebar-item').forEach((el, i) => {
      el.classList.toggle('current', i === current);
    });
    const cur = sidebarNav.querySelector('.sidebar-item.current');
    if (cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // ── サイドバー構築 ──
  function buildSidebar() {
    let html = '';
    let lastSection = null;
    agendaItems.forEach((item, i) => {
      if (item.section !== lastSection) {
        if (lastSection !== null) html += '</div>';
        if (item.section) {
          html += '<div class="sidebar-section"><p class="sidebar-section-title">' + item.section + '</p>';
        } else {
          html += '<div class="sidebar-section">';
        }
        lastSection = item.section;
      }
      html += '<button class="sidebar-item" data-index="' + i + '">' + item.label + '</button>';
    });
    if (lastSection !== null) html += '</div>';
    sidebarNav.innerHTML = html;

    sidebarNav.querySelectorAll('.sidebar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        goTo(parseInt(btn.dataset.index, 10));
        closeSidebar();
      });
    });
  }

  // ── サイドバー開閉 ──
  function openSidebar()  { sidebar.classList.add('open'); overlay.classList.add('open'); }
  function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }

  menuBtn.addEventListener('click', openSidebar);
  sidebarClose.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', e => {
    if (!e.target.closest('.sidebar')) closeSidebar();
  });

  // ── キーボードナビ ──
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ')         { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowLeft'  || e.key === 'Backspace') { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'Home')   goTo(0);
    if (e.key === 'End')    goTo(total - 1);
    if (e.key === 'Escape') closeSidebar();
  });

  // ── クリックナビ ──
  stage.addEventListener('click', e => {
    if (e.target.closest('.sidebar') ||
        e.target.closest('.notes-panel')) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width / 2) goTo(current + 1);
    else goTo(current - 1);
  });

  // ── トークスクリプト（下端ホバー） ──
  function showNotes() {
    const slides = stage.querySelectorAll('.slide');
    const active = slides[current];
    if (!active) return;
    const notes = active.getAttribute('data-notes');
    if (!notes) return;
    notesContent.textContent = notes;
    notesPanel.classList.add('visible');
  }
  function hideNotes() {
    notesPanel.classList.remove('visible');
  }

  document.addEventListener('mousemove', e => {
    const threshold = window.innerHeight - 52;
    if (e.clientY > threshold) {
      clearTimeout(notesTimer);
      showNotes();
    } else {
      clearTimeout(notesTimer);
      notesTimer = setTimeout(hideNotes, 250);
    }
  });

  // ── URLハッシュ ──
  function hashIndex() {
    const n = parseInt(window.location.hash.replace('#', ''), 10) - 1;
    return isNaN(n) ? 0 : Math.max(0, Math.min(total - 1, n));
  }

  window.addEventListener('hashchange', () => {
    const idx = hashIndex();
    if (idx !== current) goTo(idx);
  });

  // ── 初期化 ──
  buildSidebar();
  [0, 1, 2].forEach(i => ensureRendered(i));
  goTo(hashIndex());
})();
