/* ============================================================
   熊猫资讯 - 公共 UI ui.js
   ============================================================ */
(function (global) {
  'use strict';
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  var NAV = [
    ['index.html', '首页'],
    ['zoo.html', '场馆动态'],
    ['events.html', '大事件'],
    ['culture.html', '文创'],
    ['science.html', '科普'],
    ['community.html', '社区投稿'],
    ['star.html', '今日主角'],
    ['archive.html', '档案库'],
    ['about.html', '关于']
  ];

  function currentPage() {
    var p = location.pathname.split('/').pop() || 'index.html';
    return p;
  }

  function renderHeader() {
    var host = $('#site-header');
    if (!host) return;
    var cur = currentPage();
    var links = NAV.map(function (n) {
      var active = n[0] === cur ? ' class="active"' : '';
      return '<a href="' + n[0] + '"' + active + '>' + n[1] + '</a>';
    }).join('');
    host.innerHTML =
      '<div class="wrap navbar">' +
      '<a class="logo" href="index.html"><span class="logo-icon">🐼</span>熊猫资讯</a>' +
      '<nav class="nav-links" id="navLinks">' + links +
      '<a class="nav-admin" href="admin.html" title="内容管理">管理</a>' +
      '</nav>' +
      '<button class="nav-burger" id="navBurger" aria-label="菜单">☰</button>' +
      '</div>';
    var burger = $('#navBurger');
    var navEl = $('#navLinks');
    if (burger) burger.addEventListener('click', function () { navEl.classList.toggle('open'); });
  }

  function renderFooter() {
    var host = $('#site-footer');
    if (!host) return;
    host.innerHTML =
      '<div class="wrap">' +
      '<div class="footer-grid">' +
      '<div>' +
      '<h4>🐼 熊猫资讯 PandaDaily</h4>' +
      '<p style="font-size:13px;color:#8aa096;line-height:1.8">圈养大熊猫垂直资讯科普公益站，为猫粉与科普学习者提供权威资讯、熊猫档案与交流社区。</p>' +
      '</div>' +
      '<div>' +
      '<h4>内容板块</h4>' +
      '<a href="zoo.html">全球熊猫馆动态</a>' +
      '<a href="events.html">熊猫圈大事件</a>' +
      '<a href="science.html">熊猫科普专栏</a>' +
      '<a href="archive.html">熊猫档案库</a>' +
      '</div>' +
      '<div>' +
      '<h4>参与互动</h4>' +
      '<a href="submit.html">投稿作品</a>' +
      '<a href="community.html">猫粉社区</a>' +
      '<a href="culture.html#guard">文创避雷专区</a>' +
      '<a href="about.html">关于我们 / 免责声明</a>' +
      '</div>' +
      '</div>' +
      '<div class="footer-disclaimer">' +
      '本站为熊猫爱好者公益资讯科普站，非官方机构。所有权威信息以成都大熊猫繁育研究基地、中国大熊猫保护研究中心（卧龙）、国家林草局及各场馆官方公告为准；' +
      '站内【网传待证实】内容仅供参考，请勿作为权威依据；站内内容仅供爱好者交流参考，杜绝造谣、引战、侵权；所有投稿作品版权归原作者所有，本站仅做非商业公益展示。' +
      '</div>' +
      '<div class="footer-copy">© 2026 熊猫资讯 PandaDaily · 非营利公益站 · 无广告无交易</div>' +
      '</div>';
  }

  /* ---------------- 工具函数 ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function toast(msg) {
    var t = $('#toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._tm);
    t._tm = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  function openModal(html) {
    var m = $('#modalMask');
    if (!m) { m = document.createElement('div'); m.id = 'modalMask'; m.className = 'modal-mask'; document.body.appendChild(m); }
    m.innerHTML = '<div class="modal"><button class="m-close" onclick="document.getElementById(\'modalMask\').classList.remove(\'show\')">✕</button>' + html + '</div>';
    m.classList.add('show');
    m.addEventListener('click', function (e) { if (e.target === m) m.classList.remove('show'); });
  }

  function closeModal() { var m = $('#modalMask'); if (m) m.classList.remove('show'); }

  function fmtDate(s) {
    if (!s) return '';
    var d = new Date(s.replace(/-/g, '/'));
    if (isNaN(d.getTime())) return s;
    var m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  function timeAgo(s) {
    var d = new Date(s.replace(/-/g, '/')).getTime();
    if (isNaN(d)) return s;
    var diff = Date.now() - d;
    if (diff < 0) return '刚刚';
    var min = Math.floor(diff / 60000);
    if (min < 1) return '刚刚';
    if (min < 60) return min + ' 分钟前';
    var h = Math.floor(min / 60);
    if (h < 24) return h + ' 小时前';
    var day = Math.floor(h / 24);
    if (day < 30) return day + ' 天前';
    return fmtDate(s);
  }

  function chunk(s, n) { return s && s.length > n ? s.slice(0, n) + '…' : s; }

  /* ---------------- SVG 熊猫头像生成器（零外部图片依赖） ---------------- */
  var PALETTES = [
    ['#2e7d32', '#66bb6a', '#e8f5e9'],
    ['#1b5e20', '#43a047', '#f1f8e9'],
    ['#33691e', '#7cb342', '#f4faf4'],
    ['#00695c', '#26a69a', '#e0f2f1'],
    ['#4e342e', '#8d6e63', '#efebe9']
  ];
  function pandaSVG(name, seed, opts) {
    opts = opts || {};
    var h = hashStr(name + '_' + (seed || ''));
    var pal = PALETTES[h % PALETTES.length];
    var eye = (h >> 3) % 3; // 0 圆眼 1 眯眼 2 星星眼
    var mouth = (h >> 5) % 3; // 0 微笑 1 张嘴 2 呆萌
    var blush = (h >> 7) % 2 === 0;
    var bgc = opts.bg || pal[2];
    var w = opts.w || 240, hh = opts.h || 240;
    return (
      '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(name) + '">' +
      '<rect width="240" height="240" rx="18" fill="' + bgc + '"/>' +
      '<circle cx="120" cy="126" r="66" fill="#fff" stroke="#263238" stroke-width="3"/>' +
      '<ellipse cx="120" cy="168" rx="52" ry="36" fill="#fff" stroke="#263238" stroke-width="3"/>' +
      '<circle cx="83" cy="104" r="21" fill="#263238"/>' +
      '<circle cx="157" cy="104" r="21" fill="#263238"/>' +
      '<circle cx="83" cy="104" r="8" fill="#fff"/>' +
      '<circle cx="157" cy="104" r="8" fill="#fff"/>' +
      (eye === 1 ? '<path d="M74 104 q9 -8 18 0" stroke="#263238" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M148 104 q9 -8 18 0" stroke="#263238" stroke-width="3.5" fill="none" stroke-linecap="round"/>' : '') +
      (eye === 2 ? '<path d="M78 100 l5 5 l10 -10 M152 100 l5 5 l10 -10" stroke="#f9a825" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' : '') +
      '<circle cx="83" cy="120" r="5" fill="#263238"/>' +
      '<circle cx="157" cy="120" r="5" fill="#263238"/>' +
      '<ellipse cx="120" cy="122" rx="24" ry="14" fill="#263238"/>' +
      '<ellipse cx="120" cy="126" rx="12" ry="6" fill="#000"/>' +
      '<circle cx="112" cy="124" r="2.6" fill="#fff"/>' +
      '<path d="M102 124 q6 -3 10 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      (mouth === 0 ? '<path d="M106 142 q14 10 28 0" stroke="#263238" stroke-width="3" fill="none" stroke-linecap="round"/>' : '') +
      (mouth === 1 ? '<path d="M104 140 q16 16 32 0 q-16 8 -32 0" fill="#d64545" stroke="#263238" stroke-width="2.5"/>' : '') +
      (mouth === 2 ? '<circle cx="120" cy="146" r="6" fill="#263238"/><path d="M110 141 q10 8 20 0" stroke="#263238" stroke-width="2.5" fill="none" stroke-linecap="round"/>' : '') +
      (blush ? '<ellipse cx="98" cy="136" rx="9" ry="5" fill="#ffcdd2" opacity=".75"/><ellipse cx="142" cy="136" rx="9" ry="5" fill="#ffcdd2" opacity=".75"/>' : '') +
      '<path d="M62 122 q-14 -6 -14 -20 q0 -14 12 -16" fill="#263238"/>' +
      '<path d="M178 122 q14 -6 14 -20 q0 -14 -12 -16" fill="#263238"/>' +
      '<circle cx="63" cy="94" r="11" fill="#263238"/>' +
      '<circle cx="177" cy="94" r="11" fill="#263238"/>' +
      '<circle cx="120" cy="70" r="12" fill="#263238"/>' +
      (opts.name !== false ? '<text x="120" y="215" text-anchor="middle" font-size="17" font-weight="700" fill="' + pal[0] + '" font-family="sans-serif">' + esc(chunk(name, 10)) + '</text>' : '') +
      '</svg>'
    );
  }

  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }

  /* 懒加载：图片容器 data-src */
  function initLazy() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.src = en.target.dataset.src; io.unobserve(en.target); }
      });
    }, { rootMargin: '200px' });
    $$('img[data-src]').forEach(function (img) { io.observe(img); });
  }

  global.PandaUI = { $: $, $$: $$, esc: esc, toast: toast, openModal: openModal, closeModal: closeModal, fmtDate: fmtDate, timeAgo: timeAgo, chunk: chunk, pandaSVG: pandaSVG, initLazy: initLazy, NAV: NAV, currentPage: currentPage };

  document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderFooter();
  });
})(window);
