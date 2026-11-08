/* BRANALL 소개서 뷰어
 * - 각 HTML 파일의 <body data-doc="..."> 값으로 어떤 소개서를 보여줄지 정한다.
 * - 페이지 이미지: img/{doc}-{번호}.webp, 썸네일: img/{doc}-t{번호}.jpg
 * - 링크 위치/대상은 assets/docs.js 에서 관리한다.
 */
(function () {
  var slug = document.body.getAttribute('data-doc') || 'main';
  var D = window.DOCS[slug];
  var N = D.n, AR = D.w / D.h;
  var isFile = location.protocol === 'file:';
  var docUrl = function (s) { return s === 'main' ? (isFile ? 'index.html' : './') : (isFile ? s + '.html' : './' + s); };
  var VER = window.DOCS_VERSION ? '?v=' + window.DOCS_VERSION : '';
  var big = function (i) { return 'img/' + slug + '-' + i + '.webp' + VER; };
  var small = function (i) { return 'img/' + slug + '-t' + i + '.jpg' + VER; };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var HTML = window.DECK_HTML && window.DECK_HTML[slug];
  var canvasHtml = function (i) {
    return '<div class="canvas">' + HTML(i).replace(/\{\{DOC:([\w-]+)\}\}/g, function (m, s) { return docUrl(s); }) + '</div>';
  };
  // .fit 요소 안의 1920x1080 캔버스를 요소 너비에 맞게 축소
  var ro = window.ResizeObserver ? new ResizeObserver(function (es) {
    es.forEach(function (e) { e.target.style.setProperty('--s', e.target.clientWidth / 1920); });
  }) : null;
  var watchFit = function (el) { el.style.setProperty('--s', (el.clientWidth || 960) / 1920); if (ro) ro.observe(el); };
  var $ = function (s) { return document.querySelector(s); };
  if (/[?&]debug=1/.test(location.search)) document.body.classList.add('debug');
  document.documentElement.style.setProperty('--ar', D.w + ' / ' + D.h);

  var ICON = {
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M15 18l-6-6 6-6"/></svg>'
  };

  /* ---------- 화면 뼈대 ---------- */
  var app = document.createElement('div');
  app.className = 'app';
  app.innerHTML =
    '<aside class="side">' +
      '<div class="brand"><span class="logo">BRANALL</span><span class="count" id="cnt"></span></div>' +
      '<div class="doc-title"></div>' +
      (slug !== 'main' ? '<a class="back" href="' + docUrl('main') + '">' + ICON.home + '브랜올 매체 인프라 전체 보기</a>' : '') +
      '<nav class="thumbs" id="thumbs" aria-label="페이지 목록"></nav>' +
    '</aside>' +
    '<div class="scrim" id="scrim"></div>' +
    '<main class="main">' +
      '<div class="mtop"><button id="mmenu" aria-label="목차">' + ICON.menu + '</button><div class="t"></div><span class="count" id="mcnt"></span></div>' +
      '<div class="stage" id="stage"><div class="slide" id="slide"><img class="pg" id="pg" alt=""></div></div>' +
      '<div class="scroll-list" id="list"></div>' +
      '<div class="bar">' +
        '<button id="prev" aria-label="이전 페이지">' + ICON.prev + '</button>' +
        '<div class="num" id="num"></div>' +
        '<button id="next" aria-label="다음 페이지">' + ICON.next + '</button>' +
        '<span class="sep"></span>' +
        '<button id="full" aria-label="전체화면">' + ICON.full + '</button>' +
      '</div>' +
      '<div class="foot">© BRANALL Co., Ltd.</div>' +
    '</main>';
  document.body.appendChild(app);
  Array.prototype.forEach.call(document.querySelectorAll('.doc-title,.mtop .t'), function (el) { el.textContent = D.title; });

  /* ---------- 링크(핫스팟) ---------- */
  function hotspots(page, holder) {
    (D.links && D.links[page] || []).forEach(function (L) {
      var a = document.createElement('a');
      a.className = 'hot' + (L.doc ? ' ext' : '');
      a.style.left = L.x + '%'; a.style.top = L.y + '%'; a.style.width = L.w + '%'; a.style.height = L.h + '%';
      if (L.doc) {
        a.href = docUrl(L.doc); a.target = '_blank'; a.rel = 'noopener';
        a.title = (window.DOCS[L.doc] || {}).title || '상품소개서';
      } else {
        a.href = '#' + L.page; a.title = (L.label || (pad(L.page) + ' 페이지로 이동'));
        a.addEventListener('click', function (e) { e.preventDefault(); go(L.page); });
      }
      a.setAttribute('aria-label', a.title);
      holder.appendChild(a);
    });
  }

  /* ---------- 움직이는 요소 (GIF를 변환한 짧은 영상) ---------- */
  function motions(page, holder, still) {
    (D.motion && D.motion[page] || []).forEach(function (m) {
      var el;
      if (still) { el = document.createElement('img'); el.src = m.poster + VER; el.alt = ''; el.loading = 'lazy'; }
      else {
        el = document.createElement('video');
        el.muted = true; el.loop = true; el.autoplay = true; el.playsInline = true;
        el.setAttribute('muted', ''); el.setAttribute('playsinline', ''); el.setAttribute('preload', 'metadata');
        el.poster = m.poster + VER; el.src = m.src + VER;
      }
      el.className = 'mo';
      el.style.left = m.x + '%'; el.style.top = m.y + '%'; el.style.width = m.w + '%'; el.style.height = m.h + '%';
      holder.appendChild(el);
      if (!still && el.play) { var p = el.play(); if (p && p.catch) p.catch(function () {}); }
    });
  }

  /* ---------- 썸네일 ---------- */
  var thumbs = $('#thumbs');
  for (var i = 1; i <= N; i++) (function (i) {
    var b = document.createElement('button');
    b.className = 'thumb'; b.setAttribute('aria-label', i + '페이지');
    b.innerHTML = (HTML ? '<div class="fit">' + canvasHtml(i) + '</div>' : '<img loading="lazy" src="' + small(i) + '" alt="">') + '<span><b>' + pad(i) + '</b>&nbsp; PAGE</span>';
    b.addEventListener('click', function () { go(i); document.body.classList.remove('drawer'); });
    thumbs.appendChild(b);
    if (HTML) watchFit(b.querySelector('.fit'));
    else if (D.motion && D.motion[i]) { var tw = document.createElement('div'); tw.className = 'tmo'; b.insertBefore(tw, b.firstChild); tw.appendChild(b.querySelector('img')); motions(i, tw, true); }
  })(i);

  var mobile = window.matchMedia('(max-width: 820px)');
  var cur = 1;

  /* ---------- PC: 한 장씩 넘기기 ---------- */
  var slideEl = $('#slide'), pgImg = $('#pg'), stage = $('#stage');
  function fit() {
    var cs = getComputedStyle(stage);
    var w = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var h = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    var sw = Math.min(w, h * AR);
    slideEl.style.width = sw + 'px'; slideEl.style.height = (sw / AR) + 'px';
    slideEl.style.setProperty('--s', sw / 1920);
  }
  var preloaded = {};
  function preload(i) { if (i < 1 || i > N || preloaded[i]) return; preloaded[i] = 1; var im = new Image(); im.src = big(i); }

  /* ---------- 모바일: 세로로 이어보기 ---------- */
  var list = $('#list'), listBuilt = false, io;
  function buildList() {
    if (listBuilt) return; listBuilt = true;
    for (var i = 1; i <= N; i++) {
      var s = document.createElement('div');
      s.className = 'slide'; s.id = 'p' + i; s.style.aspectRatio = D.w + ' / ' + D.h;
      if (HTML) { s.className = 'slide fit'; s.innerHTML = canvasHtml(i); }
      else { s.innerHTML = '<img class="pg" loading="' + (i <= 2 ? 'eager' : 'lazy') + '" src="' + big(i) + '" alt="' + i + '페이지">'; hotspots(i, s); motions(i, s); }
      list.appendChild(s);
      if (HTML) watchFit(s);
      var no = document.createElement('div'); no.className = 'pno'; no.textContent = pad(i) + ' / ' + pad(N); list.appendChild(no);
    }
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) setCur(+e.target.id.slice(1)); });
    }, { rootMargin: '-18% 0px -78% 0px' });
    Array.prototype.forEach.call(list.querySelectorAll('.slide'), function (el) { io.observe(el); });
  }

  function setCur(n) {
    cur = n;
    $('#num').innerHTML = pad(n) + ' <i>/ ' + pad(N) + '</i>';
    $('#cnt').textContent = $('#mcnt').textContent = pad(n) + ' | ' + pad(N);
    $('#prev').disabled = n <= 1; $('#next').disabled = n >= N;
    Array.prototype.forEach.call(thumbs.children, function (t, idx) { t.classList.toggle('on', idx + 1 === n); });
    var on = thumbs.children[n - 1];
    if (on && on.scrollIntoView && !mobile.matches) {
      var r = on.getBoundingClientRect(), pr = thumbs.getBoundingClientRect();
      if (r.top < pr.top || r.bottom > pr.bottom) on.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    if (history.replaceState) history.replaceState(null, '', n > 1 ? '#' + n : location.pathname + location.search);
  }

  function go(n) {
    n = Math.max(1, Math.min(N, n | 0));
    if (mobile.matches) {
      buildList();
      var el = document.getElementById('p' + n);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
      setCur(n);
      return;
    }
    if (HTML) {
      slideEl.classList.add('fit');
      slideEl.innerHTML = canvasHtml(n);
      slideEl.style.setProperty('--s', slideEl.clientWidth / 1920);
      setCur(n);
      return;
    }
    pgImg.classList.add('loading');
    pgImg.src = small(n);
    var hi = new Image();
    hi.onload = function () { if (cur === n) { pgImg.src = hi.src; pgImg.classList.remove('loading'); } };
    hi.src = big(n);
    pgImg.alt = n + '페이지';
    Array.prototype.forEach.call(slideEl.querySelectorAll('.hot,.mo'), function (h) { h.remove(); });
    hotspots(n, slideEl);
    motions(n, slideEl);
    setCur(n);
    preload(n + 1); preload(n - 1);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.go');
    if (!a || a.closest('.thumb')) return;
    e.preventDefault(); go(+a.getAttribute('data-go'));
  });
  $('#prev').addEventListener('click', function () { go(cur - 1); });
  $('#next').addEventListener('click', function () { go(cur + 1); });
  $('#full').addEventListener('click', function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  });
  $('#mmenu').addEventListener('click', function () {
    document.body.classList.add('drawer');
    var on = thumbs.children[cur - 1]; if (on) on.scrollIntoView({ block: 'center' });
  });
  $('#scrim').addEventListener('click', function () { document.body.classList.remove('drawer'); });

  document.addEventListener('keydown', function (e) {
    if (mobile.matches || e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ') { e.preventDefault(); go(cur + 1); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); go(cur - 1); }
    else if (k === 'Home') go(1); else if (k === 'End') go(N);
  });

  // 마우스 휠로 넘기기 (트랙패드 연속 입력은 한 번으로 처리)
  var wheelAcc = 0, wheelLock = 0;
  stage.addEventListener('wheel', function (e) {
    if (e.ctrlKey) return;
    e.preventDefault();
    var now = Date.now();
    if (now < wheelLock) return;
    wheelAcc += e.deltaY;
    if (Math.abs(wheelAcc) > 40) { go(cur + (wheelAcc > 0 ? 1 : -1)); wheelAcc = 0; wheelLock = now + 450; }
  }, { passive: false });

  // 태블릿 가로 등 터치 스와이프
  var tx = null, ty = null;
  stage.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    if (tx === null) return;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
    tx = null;
  });

  function layout() {
    if (mobile.matches) { buildList(); }
    else { fit(); }
  }
  window.addEventListener('resize', layout);
  if (mobile.addEventListener) mobile.addEventListener('change', function () { layout(); go(cur); });

  var start = parseInt((location.hash || '').replace('#', ''), 10) || 1;
  layout();
  if (mobile.matches) { setCur(start); if (start > 1) setTimeout(function () { go(start); }, 50); }
  else go(start);
})();
