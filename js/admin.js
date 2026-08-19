/* ============================================================
   熊猫资讯 - 后台 CMS admin.js
   纯前端 localStorage 实现，正式上线建议替换为真实后端 API
   ============================================================ */
(function () {
  'use strict';
  var DB = PandaDB, U = PandaUI, $ = U.$, $$ = U.$$;
  var sec = 'dashboard';

  /* ---------- 登录 ---------- */
  function initAuth() {
    if (DB.isAdmin()) { showCms(); } else { $('#loginView').style.display = ''; $('#cmsView').style.display = 'none'; }
    $('#btnLogin').addEventListener('click', function () {
      if (DB.login($('#pwd').value)) { $('#pwd').value = ''; showCms(); U.toast('登录成功'); }
      else { U.toast('密码错误'); }
    });
    $('#pwd').addEventListener('keydown', function (e) { if (e.key === 'Enter') $('#btnLogin').click(); });
    $('#btnLogout').addEventListener('click', function () { DB.logout(); location.reload(); });
  }
  function showCms() {
    $('#loginView').style.display = 'none';
    $('#cmsView').style.display = '';
    $('#btnLogout').style.display = '';
    route();
  }

  /* ---------- 路由 ---------- */
  function route() {
    var h = (location.hash || '#dashboard').replace('#', '');
    var valid = ['dashboard', 'subs', 'comments', 'articles', 'events', 'culture', 'venues', 'pandas', 'star', 'settings'];
    if (valid.indexOf(h) < 0) h = 'dashboard';
    sec = h;
    $$('#sideNav a').forEach(function (a) { a.classList.toggle('active', a.dataset.sec === sec); });
    renderSec();
  }
  window.addEventListener('hashchange', function () { if (DB.isAdmin()) route(); });

  /* ---------- 通用：表格行、表单 ---------- */
  function th(label) { return '<th>' + label + '</th>'; }
  function td(s) { return '<td>' + (s == null ? '' : s) + '</td>'; }
  function actionBtns(item, onEdit, onDel, extra) {
    var h = '<div class="row-actions">' + (onEdit ? '<button data-edit="' + item.id + '">编辑</button>' : '') +
      (extra || '') +
      (onDel ? '<button class="danger" data-del="' + item.id + '">删除</button>' : '') + '</div>';
    return td(h);
  }
  function bindTableActions(scope, onEdit, onDel, onExtra) {
    $$(scope + ' [data-edit]').forEach(function (b) { b.addEventListener('click', function () { onEdit(b.dataset.edit); }); });
    $$(scope + ' [data-del]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (confirm('确认删除该记录？')) onDel(b.dataset.del);
      });
    });
    $$(scope + ' [data-x]').forEach(function (b) {
      b.addEventListener('click', function () { if (onExtra) onExtra(b); });
    });
  }
  function select(name, opts, val, ph) {
    var h = '<select class="select" id="f_' + name + '">' + (ph ? '<option value="">' + ph + '</option>' : '');
    (opts || []).forEach(function (o) {
      var v = typeof o === 'object' ? o.v : o, l = typeof o === 'object' ? o.l : o;
      h += '<option value="' + v + '"' + (String(val) === String(v) ? ' selected' : '') + '>' + l + '</option>';
    });
    return h + '</select>';
  }
  function input(name, val, ph, type) {
    return '<input class="input" id="f_' + name + '" type="' + (type || 'text') + '" value="' + U.esc(val == null ? '' : val) + '" placeholder="' + (ph || '') + '">';
  }
  function textarea(name, val, ph) {
    return '<textarea class="textarea" id="f_' + name + '" placeholder="' + (ph || '') + '">' + U.esc(val || '') + '</textarea>';
  }
  function checkbox(name, val, label) {
    return '<label class="check-item" style="margin-top:6px"><input type="checkbox" id="f_' + name + '"' + (val ? ' checked' : '') + '> ' + label + '</label>';
  }
  function formRow(label, inner) {
    return '<div class="form-item"><label class="form-label">' + label + '</label>' + inner + '</div>';
  }
  function fieldVal(name) { var el = $('#f_' + name); if (!el) return ''; return el.type === 'checkbox' ? el.checked : el.value.trim(); }

  function openForm(title, bodyHtml, onSubmit) {
    U.openModal('<h3>' + title + '</h3>' + bodyHtml +
      '<div style="display:flex;gap:8px;margin-top:16px">' +
      '<button class="btn btn-primary" id="f_save">保存</button>' +
      '<button class="btn btn-ghost" onclick="document.getElementById(\'modalMask\').classList.remove(\'show\')">取消</button></div>');
    $('#f_save').addEventListener('click', onSubmit);
  }

  /* ---------- 各集合常量 ---------- */
  var ART_CATS = ['基础认知', '圈养专项', '谣言辟谣', '科研保护', '冷知识', '粉丝问答'];
  var DIFFS = ['新手入门', '进阶干货', '硬核科研'];
  var EV_TAGS = ['繁育', '命名', '回国租借', '科研成果', '公益活动', '离世纪念'];
  var CUL_CATS = ['官方上新', '限量文创', '绝版回顾', '正版测评', '盗版避雷'];
  var SUB_TYPES = ['实拍作品', '观展游记', '科普短文', '手绘二创', '提问问答'];
  var STATUSES = { official: '官方实锤', rumor: '网传待证实' };
  var SUB_STATUS = { pending: '待审核', approved: '已通过', rejected: '已驳回', banned: '已拉黑' };

  function pandaOptions() {
    return DB.all('pandas').map(function (p) { return { v: p.id, l: p.name }; });
  }
  function venueOptions() {
    return DB.all('venues').map(function (v) { return { v: v.id, l: v.name }; });
  }
  function tagList(v) { return (v || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean); }

  /* ---------- 仪表盘 ---------- */
  function renderDashboard() {
    var counts = {
      articles: DB.all('articles').length, events: DB.all('events').length,
      culture: DB.all('culture').length, venues: DB.all('venues').length,
      pandas: DB.all('pandas').length,
      subsPending: DB.all('subs').filter(function (s) { return s.status === 'pending'; }).length,
      commentsPending: DB.all('comments').filter(function (c) { return c.status === 'pending'; }).length,
      subsTotal: DB.all('subs').length
    };
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:16px">📊 仪表盘</h2>' +
      '<div class="grid grid-4">' +
      statCard('📚 科普文章', counts.articles, 'articles') +
      statCard('📅 大事件', counts.events, 'events') +
      statCard('🎁 文创内容', counts.culture, 'culture') +
      statCard('🏛️ 场馆', counts.venues, 'venues') +
      statCard('📖 熊猫档案', counts.pandas, 'pandas') +
      statCard('📥 待审投稿', counts.subsPending, 'subs') +
      statCard('💬 待审评论', counts.commentsPending, 'comments') +
      statCard('📝 全部投稿', counts.subsTotal, 'subs') +
      '</div>' +
      '<div class="card card-pad" style="margin-top:18px;background:var(--bg-soft)">' +
      '<b>💡 说明</b><p style="font-size:13.5px;color:var(--ink-2);margin-top:6px">本后台为纯前端实现（localStorage 存储），适合静态部署演示。<br>' +
      '正式上线时请将 <code>js/store.js</code> 的读写替换为真实后端 API 并增加服务端鉴权与风控。</p>' +
      '<div style="font-size:12.5px;color:var(--ink-3);margin-top:8px">修改内容后，前台页面（刷新即可）会立即读取最新数据。</div></div>';
    function statCard(icon, n, target) {
      return '<a class="card card-pad" href="#' + target + '" style="color:inherit">' +
        '<div style="font-size:22px">' + icon + '</div><div style="font-size:26px;font-weight:800;color:var(--green-700);margin-top:6px">' + n + '</div>' +
        '<div style="font-size:12.5px;color:var(--ink-3)">点击管理</div></a>';
    }
  }

  /* ---------- 投稿审核 ---------- */
  function renderSubs() {
    var list = DB.all('subs').slice().sort(function (a, b) { return (a.status === 'pending' ? -1 : 1) || (a.date < b.date ? 1 : -1); });
    var filter = '';
    var rows = list.map(function (s) {
      return '<tr>' +
        td('<b>' + U.esc(s.title) + '</b><div style="font-size:12px;color:var(--ink-3)">' + U.esc(U.chunk(s.content, 46)) + '</div>') +
        td(U.esc(s.nickname) + '<br><span style="font-size:12px;color:var(--ink-3)">' + s.date + '</span>') +
        td('<span class="tag gray">' + U.esc(s.type) + '</span>') +
        td((s.images && s.images.length) ? '有图' : '—') +
        td('<span class="tag ' + (s.status === 'approved' ? 'green' : s.status === 'pending' ? 'orange' : s.status === 'rejected' ? 'gray' : 'red') + '">' + SUB_STATUS[s.status] + '</span>' + (s.featured ? '<br><span class="pin-tag">★精选</span>' : '')) +
        actionBtns(s, null, null,
          (s.status === 'pending' ? '<button data-x="approve" data-id="' + s.id + '">通过</button><button data-x="reject" data-id="' + s.id + '">驳回</button>' : '') +
          (s.status !== 'banned' ? '<button data-x="ban" data-id="' + s.id + '">拉黑</button>' : '') +
          '<button data-x="feature" data-id="' + s.id + '">' + (s.featured ? '取消精选' : '设精选') + '</button>') +
        '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">📥 投稿审核</h2>' +
      '<p style="font-size:13px;color:var(--ink-3);margin-bottom:14px">审核规则：通过后前台展示；驳回需附备注；拉黑后投稿不再展示。盗图/引战/造谣内容请直接拉黑删除。</p>' +
      tableWrap('subs', ['内容', '投稿人', '类型', '配图', '状态', '操作'], rows, filter);
    bindTableActions('#secContent', null, function (id) {
      var list = DB.all('subs'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('subs', list); renderSubs(); U.toast('已删除'); }
    }, function (btn) {
      var id = btn.dataset.id, act = btn.dataset.x;
      var s = DB.find('subs', id); if (!s) return;
      if (act === 'approve') { s.status = 'approved'; U.toast('已通过'); }
      if (act === 'reject') {
        openForm('驳回投稿', formRow('驳回备注（将展示给投稿人参考）', input('note', '', '如：内容与主题无关')) + '<input type="hidden" id="f_rejId" value="' + id + '">', function () {
          var s2 = DB.find('subs', $('#f_rejId').value);
          if (s2) { s2.status = 'rejected'; s2.rejectReason = fieldVal('note'); DB.saveKind('subs', DB.all('subs')); U.closeModal(); renderSubs(); U.toast('已驳回'); }
        });
        return;
      }
      if (act === 'ban') { if (!confirm('确认拉黑该作者并隐藏其投稿？')) return; s.status = 'banned'; U.toast('已拉黑'); }
      if (act === 'feature') { s.featured = !s.featured; U.toast(s.featured ? '已设为月度精选' : '已取消精选'); }
      DB.saveKind('subs', DB.all('subs'));
      renderSubs();
    });
  }

  /* ---------- 评论审核 ---------- */
  function renderComments() {
    var list = DB.all('comments').slice().sort(function (a, b) { return (a.status === 'pending' ? -1 : 1) || (a.date < b.date ? 1 : -1); });
    var rows = list.map(function (c) {
      var sub = DB.find('subs', c.subId);
      return '<tr>' +
        td(U.esc(c.content)) +
        td(U.esc(c.nickname) + '<br><span style="font-size:12px;color:var(--ink-3)">' + c.date + '</span>') +
        td(sub ? U.esc(U.chunk(sub.title, 24)) : '—') +
        td('<span class="tag ' + (c.status === 'approved' ? 'green' : c.status === 'pending' ? 'orange' : 'gray') + '">' + (c.status === 'approved' ? '已通过' : c.status === 'pending' ? '待审核' : '已驳回') + '</span>') +
        actionBtns(c, null, null,
          (c.status === 'pending' ? '<button data-x="ok" data-id="' + c.id + '">通过</button><button data-x="no" data-id="' + c.id + '">驳回</button>' : '') +
          (c.status !== 'approved' ? '<button data-x="ok" data-id="' + c.id + '">重新通过</button>' : '')) +
        '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:14px">💬 评论审核</h2>' + tableWrap('comments', ['内容', '评论人', '所属投稿', '状态', '操作'], rows, '');
    bindTableActions('#secContent', null, function (id) {
      var list = DB.all('comments'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('comments', list); renderComments(); U.toast('已删除'); }
    }, function (btn) {
      var c = DB.find('comments', btn.dataset.id); if (!c) return;
      c.status = btn.dataset.x === 'ok' ? 'approved' : 'rejected';
      DB.saveKind('comments', DB.all('comments'));
      renderComments();
      U.toast(c.status === 'approved' ? '评论已通过' : '评论已驳回');
    });
  }

  /* ---------- 科普文章 ---------- */
  function renderArticles() {
    var rows = DB.all('articles').slice().sort(function (a, b) { return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (a.date < b.date ? 1 : -1); }).map(function (a) {
      return '<tr>' + td((a.pinned ? '<span class="pin-tag">置顶</span> ' : '') + U.esc(a.title)) +
        td('<span class="tag green">' + U.esc(a.category) + '</span>') +
        td('<span class="tag gray">' + U.esc(a.difficulty) + '</span>') +
        td(a.date) +
        actionBtns(a, true, true, '<button data-x="pin" data-id="' + a.id + '">' + (a.pinned ? '取消置顶' : '置顶') + '</button>') + '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">📚 科普文章</h2>' +
      '<div class="cms-toolbar"><button class="btn btn-primary btn-sm" data-new>＋ 新增科普文章</button></div>' +
      tableWrap('articles', ['标题', '分类', '难度', '日期', '操作'], rows, '');
    $('#secContent [data-new]').addEventListener('click', function () { articleForm(null); });
    bindTableActions('#secContent', function (id) { articleForm(DB.find('articles', id)); }, function (id) {
      var list = DB.all('articles'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('articles', list); renderArticles(); U.toast('已删除'); }
    }, function (btn) {
      var a = DB.find('articles', btn.dataset.id); if (!a) return;
      a.pinned = !a.pinned; DB.saveKind('articles', DB.all('articles')); renderArticles();
    });
  }
  function articleForm(a) {
    openForm(a ? '编辑科普文章' : '新增科普文章',
      formRow('标题', input('title', a && a.title)) +
      formRow('分类', select('category', ART_CATS, a && a.category)) +
      formRow('难度', select('difficulty', DIFFS, a && a.difficulty)) +
      formRow('发布日期', input('date', a && a.date, '', 'date')) +
      formRow('来源', input('source', a && a.source)) +
      formRow('关联熊猫档案', select('relatedPanda', pandaOptions(), a && a.relatedPanda, '不关联')) +
      formRow('关联场馆', select('relatedVenue', venueOptions(), a && a.relatedVenue, '不关联')) +
      formRow('正文（支持 p/h3/ul 等简单 HTML）', textarea('content', a && a.content)) +
      checkbox('pinned', a && a.pinned, '置顶展示'),
      function () {
        var obj = {
          id: a ? a.id : DB.uid('a'),
          title: fieldVal('title'), category: fieldVal('category'), difficulty: fieldVal('difficulty'),
          date: fieldVal('date') || DB.todayStr(), source: fieldVal('source'),
          relatedPanda: fieldVal('relatedPanda'), relatedVenue: fieldVal('relatedVenue'),
          content: fieldVal('content'), pinned: fieldVal('pinned')
        };
        if (!obj.title) return U.toast('标题不能为空');
        var list = DB.all('articles'); DB.upsert(list, obj); DB.saveKind('articles', list);
        U.closeModal(); renderArticles(); U.toast('已保存');
      });
  }

  /* ---------- 大事件 ---------- */
  function renderEvents() {
    var rows = DB.all('events').slice().sort(function (a, b) { return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (a.date < b.date ? 1 : -1); }).map(function (e) {
      return '<tr>' + td((e.pinned ? '<span class="pin-tag">置顶</span> ' : '') + U.esc(e.title)) +
        td(e.date) +
        td('<span class="tag gray">' + U.esc(e.tag) + '</span>') +
        td('<span class="badge-status ' + (e.status === 'official' ? 'badge-official' : 'badge-rumor') + '">' + STATUSES[e.status] + '</span>') +
        actionBtns(e, true, true, '<button data-x="pin" data-id="' + e.id + '">' + (e.pinned ? '取消置顶' : '置顶') + '</button>') + '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">📅 大事件</h2>' +
      '<p style="font-size:13px;color:var(--ink-3);margin-bottom:10px">重要提示：事件状态请如实标注【官方实锤】或【网传待证实】。</p>' +
      '<div class="cms-toolbar"><button class="btn btn-primary btn-sm" data-new>＋ 新增大事件</button></div>' +
      tableWrap('events', ['标题', '日期', '分类', '状态', '操作'], rows, '');
    $('#secContent [data-new]').addEventListener('click', function () { eventForm(null); });
    bindTableActions('#secContent', function (id) { eventForm(DB.find('events', id)); }, function (id) {
      var list = DB.all('events'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('events', list); renderEvents(); U.toast('已删除'); }
    }, function (btn) {
      var e = DB.find('events', btn.dataset.id); if (!e) return;
      e.pinned = !e.pinned; DB.saveKind('events', DB.all('events')); renderEvents();
    });
  }
  function eventForm(e) {
    openForm(e ? '编辑大事件' : '新增大事件',
      formRow('标题', input('title', e && e.title)) +
      formRow('发生日期', input('date', e && e.date, '', 'date')) +
      formRow('分类', select('tag', EV_TAGS, e && e.tag)) +
      formRow('状态', select('status', [{ v: 'official', l: '官方实锤' }, { v: 'rumor', l: '网传待证实' }], e && e.status)) +
      formRow('来源', input('source', e && e.source)) +
      formRow('正文', textarea('content', e && e.content)) +
      checkbox('pinned', e && e.pinned, '首页置顶快讯'),
      function () {
        var obj = {
          id: e ? e.id : DB.uid('e'),
          title: fieldVal('title'), date: fieldVal('date') || DB.todayStr(),
          year: parseInt((fieldVal('date') || DB.todayStr()).slice(0, 4), 10),
          tag: fieldVal('tag'), status: fieldVal('status'), source: fieldVal('source'),
          content: fieldVal('content'), pinned: fieldVal('pinned'), image: ''
        };
        if (!obj.title) return U.toast('标题不能为空');
        var list = DB.all('events'); DB.upsert(list, obj); DB.saveKind('events', list);
        U.closeModal(); renderEvents(); U.toast('已保存');
      });
  }

  /* ---------- 文创 ---------- */
  function renderCulture() {
    var rows = DB.all('culture').slice().map(function (c) {
      return '<tr>' + td(U.esc(c.title)) +
        td('<span class="tag ' + (c.category === '盗版避雷' ? 'red' : 'blue') + '">' + U.esc(c.category) + '</span>') +
        td(U.esc(c.brand)) +
        td(c.licensed ? '<span class="tag green">官方授权</span>' : '<span class="tag red">非授权</span>') +
        actionBtns(c, true, true) + '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">🎁 文创内容</h2>' +
      '<p style="font-size:13px;color:var(--ink-3);margin-bottom:10px">本站仅展示文创资讯，不承接交易。购买链接只能放官方渠道。</p>' +
      '<div class="cms-toolbar"><button class="btn btn-primary btn-sm" data-new>＋ 新增文创</button></div>' +
      tableWrap('culture', ['名称', '分类', '出品方', '授权', '操作'], rows, '');
    $('#secContent [data-new]').addEventListener('click', function () { cultureForm(null); });
    bindTableActions('#secContent', function (id) { cultureForm(DB.find('culture', id)); }, function (id) {
      var list = DB.all('culture'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('culture', list); renderCulture(); U.toast('已删除'); }
    });
  }
  function cultureForm(c) {
    openForm(c ? '编辑文创' : '新增文创',
      formRow('标题', input('title', c && c.title)) +
      formRow('分类', select('category', CUL_CATS, c && c.category)) +
      formRow('出品方', input('brand', c && c.brand)) +
      formRow('授权状态', select('licensed', [{ v: '1', l: '官方授权' }, { v: '0', l: '非授权/盗版风险' }], c ? (c.licensed ? '1' : '0') : '1')) +
      formRow('简介', textarea('intro', c && c.intro)) +
      formRow('发售时间', input('saleTime', c && c.saleTime)) +
      formRow('官方购买链接（仅官方渠道）', input('link', c && c.link)) +
      formRow('标签（逗号分隔）', input('tags', c && (c.tags || []).join(','))),
      function () {
        var obj = {
          id: c ? c.id : DB.uid('c'),
          title: fieldVal('title'), category: fieldVal('category'), brand: fieldVal('brand'),
          licensed: fieldVal('licensed') === '1', intro: fieldVal('intro'),
          saleTime: fieldVal('saleTime'), link: fieldVal('link'), tags: tagList(fieldVal('tags'))
        };
        if (!obj.title) return U.toast('标题不能为空');
        var list = DB.all('culture'); DB.upsert(list, obj); DB.saveKind('culture', list);
        U.closeModal(); renderCulture(); U.toast('已保存');
      });
  }

  /* ---------- 场馆管理 ---------- */
  function renderVenues() {
    var rows = DB.all('venues').slice().map(function (v) {
      return '<tr>' + td(U.esc(v.name)) +
        td('<span class="tag ' + (v.region === 'domestic' ? 'green' : 'blue') + '">' + (v.region === 'domestic' ? '国内' : '海外') + '</span> ' + U.esc(v.location)) +
        td(U.esc(v.pandaCount || '')) +
        td((v.dynamics || []).length + ' 条') +
        actionBtns(v, true, true) + '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">🏛️ 场馆管理</h2>' +
      '<p style="font-size:13px;color:var(--ink-3);margin-bottom:10px">动态以 JSON 数组维护：[{title,date,source,text,tags:[]}]</p>' +
      '<div class="cms-toolbar"><button class="btn btn-primary btn-sm" data-new>＋ 新增场馆</button></div>' +
      tableWrap('venues', ['场馆', '地区', '熊猫数量', '动态数', '操作'], rows, '');
    $('#secContent [data-new]').addEventListener('click', function () { venueForm(null); });
    bindTableActions('#secContent', function (id) { venueForm(DB.find('venues', id)); }, function (id) {
      var list = DB.all('venues'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('venues', list); renderVenues(); U.toast('已删除'); }
    });
  }
  function venueForm(v) {
    openForm(v ? '编辑场馆' : '新增场馆',
      formRow('场馆名称', input('name', v && v.name)) +
      formRow('地区', select('region', [{ v: 'domestic', l: '国内场馆' }, { v: 'overseas', l: '海外场馆' }], v && v.region)) +
      formRow('所在地', input('location', v && v.location)) +
      formRow('熊猫数量（约）', input('pandaCount', v && v.pandaCount)) +
      formRow('更新时间', input('updatedAt', v && v.updatedAt)) +
      formRow('官方网址', input('officialUrl', v && v.officialUrl)) +
      formRow('简介', textarea('intro', v && v.intro)) +
      formRow('馆内熊猫名单（逗号分隔，需与档案库姓名一致）', input('pandas', v && (v.pandas || []).join(','))) +
      formRow('动态 JSON', textarea('dynamics', v ? JSON.stringify(v.dynamics || [], null, 1) : '[]')),
      function () {
        var dyn = [];
        try { dyn = JSON.parse(fieldVal('dynamics') || '[]'); } catch (e) { return U.toast('动态 JSON 格式错误'); }
        var obj = {
          id: v ? v.id : DB.uid('v'),
          name: fieldVal('name'), region: fieldVal('region'), location: fieldVal('location'),
          pandaCount: fieldVal('pandaCount'), updatedAt: fieldVal('updatedAt') || DB.todayStr(),
          officialUrl: fieldVal('officialUrl'), intro: fieldVal('intro'),
          pandas: tagList(fieldVal('pandas')), dynamics: dyn
        };
        if (!obj.name) return U.toast('场馆名称不能为空');
        var list = DB.all('venues'); DB.upsert(list, obj); DB.saveKind('venues', list);
        U.closeModal(); renderVenues(); U.toast('已保存');
      });
  }

  /* ---------- 熊猫档案 ---------- */
  function renderPandas() {
    var rows = DB.all('pandas').slice().map(function (p) {
      var v = DB.find('venues', p.venue);
      return '<tr>' + td('<b>' + U.esc(p.name) + '</b> <span style="color:var(--ink-3)">' + U.esc(p.nick || '') + '</span>') +
        td(U.esc(p.gender) + ' · ' + p.birthday) +
        td('谱系号 ' + U.esc(p.studbook)) +
        td(v ? U.esc(v.name) : '—') +
        td((p.timeline || []).length + ' 件事') +
        actionBtns(p, true, true) + '</tr>';
    }).join('');
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">📖 熊猫档案库管理</h2>' +
      '<p style="font-size:13px;color:var(--ink-3);margin-bottom:10px">谱系号为档案核心唯一编号，请以官方公布为准。timeline/stories 以 JSON 维护。</p>' +
      '<div class="cms-toolbar"><button class="btn btn-primary btn-sm" data-new>＋ 新增档案</button></div>' +
      tableWrap('pandas', ['姓名', '性别/生日', '谱系号', '场馆', '大事记', '操作'], rows, '');
    $('#secContent [data-new]').addEventListener('click', function () { pandaForm(null); });
    bindTableActions('#secContent', function (id) { pandaForm(DB.find('pandas', id)); }, function (id) {
      var list = DB.all('pandas'); var i = list.findIndex(function (x) { return x.id === id; });
      if (i >= 0) { list.splice(i, 1); DB.saveKind('pandas', list); renderPandas(); U.toast('已删除'); }
    });
  }
  function pandaForm(p) {
    openForm(p ? '编辑熊猫档案' : '新增熊猫档案',
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
      formRow('姓名', input('name', p && p.name)) +
      formRow('昵称', input('nick', p && p.nick)) + '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
      formRow('性别', select('gender', ['♀', '♂'], p && p.gender)) +
      formRow('出生日期', input('birthday', p && p.birthday, '', 'date')) + '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
      formRow('谱系号（唯一ID）', input('studbook', p && p.studbook)) +
      formRow('现居场馆', select('venue', venueOptions(), p && p.venue, '未录入')) + '</div>' +
      formRow('父母信息', input('parents', p && p.parents)) +
      formRow('性格特点', textarea('personality', p && p.personality)) +
      formRow('标志性特征', textarea('feature', p && p.feature)) +
      formRow('简介', textarea('intro', p && p.intro)) +
      formRow('成长大事记 JSON：[{date,text}]', textarea('timeline', p ? JSON.stringify(p.timeline || [], null, 1) : '[]')) +
      formRow('名场面趣闻 JSON：[{title,text}]', textarea('stories', p ? JSON.stringify(p.stories || [], null, 1) : '[]')),
      function () {
        var tl, st;
        try { tl = JSON.parse(fieldVal('timeline') || '[]'); } catch (e) { return U.toast('大事记 JSON 格式错误'); }
        try { st = JSON.parse(fieldVal('stories') || '[]'); } catch (e) { return U.toast('趣闻 JSON 格式错误'); }
        var obj = {
          id: p ? p.id : DB.uid('p'),
          name: fieldVal('name'), nick: fieldVal('nick'), gender: fieldVal('gender'),
          birthday: fieldVal('birthday'), studbook: fieldVal('studbook'),
          parents: fieldVal('parents'), venue: fieldVal('venue'),
          personality: fieldVal('personality'), feature: fieldVal('feature'), intro: fieldVal('intro'),
          timeline: tl, stories: st
        };
        if (!obj.name) return U.toast('姓名不能为空');
        var list = DB.all('pandas'); DB.upsert(list, obj); DB.saveKind('pandas', list);
        U.closeModal(); renderPandas(); U.toast('已保存');
      });
  }

  /* ---------- 今日主角 ---------- */
  function renderStar() {
    var settings = DB.getSettings();
    var star = DB.todayStar();
    var p = star && star.panda;
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:6px">⭐ 今日主角设置</h2>' +
      '<p style="font-size:13px;color:var(--ink-3);margin-bottom:14px">默认「自动模式」：每日0点按日期自动轮换档案库中的熊猫。可切换手动模式指定今日主角，或配置轮换名单。</p>' +
      '<div class="grid grid-2">' +
      '<div class="card card-pad">' +
      '<b>当前展示</b>' +
      (p ? '<div style="display:flex;gap:12px;align-items:center;margin-top:10px">' +
        '<div class="panda-avatar small" style="width:64px;height:64px">' + U.pandaSVG(p.name, p.id, { w: 128, name: false }) + '</div>' +
        '<div><div style="font-weight:700">' + U.esc(p.name) + '（谱系号 ' + U.esc(p.studbook) + '）</div>' +
        '<div style="font-size:12.5px;color:var(--ink-3)">' + star.date + (star.manual ? ' · 手动指定' : ' · 自动轮换') + '</div></div></div>'
        : '<div style="color:var(--ink-3);margin-top:8px">档案库为空</div>') +
      '</div>' +
      '<div class="card card-pad">' +
      '<b>模式与名单</b>' +
      '<div style="margin-top:10px">' + select('mode', [{ v: 'auto', l: '自动轮换（每日0点切换）' }, { v: 'manual', l: '手动固定（每天手动指定）' }], settings.starMode || 'auto') + '</div>' +
      '<div style="margin-top:10px" id="manualRow" style="display:' + (settings.starMode === 'manual' ? '' : 'none') + '">' +
      formRow('指定今日熊猫', select('manualPanda', pandaOptions(), (settings.starOverride || {}).pandaId, '选择熊猫')) +
      '</div>' +
      '<div style="margin-top:8px"><button class="btn btn-primary btn-sm" id="saveStar">保存设置</button></div>' +
      '</div></div>' +
      '<div class="card card-pad" style="margin-top:14px">' +
      '<b>轮换名单（可选，多选，留空=全部档案参与轮换）</b>' +
      '<div class="form-radio-row" style="margin-top:10px" id="rosterBox">' +
      DB.all('pandas').map(function (x) {
        var on = settings.starRoster && settings.starRoster.indexOf(x.id) >= 0;
        return '<span class="radio-chip roster-chip' + (on ? ' active' : '') + '" data-id="' + x.id + '">' + U.esc(x.name) + '</span>';
      }).join('') +
      '</div><div style="font-size:12.5px;color:var(--ink-3);margin-top:6px">点击芯片切换是否参与每日轮换。</div></div>';
    $('#f_mode').addEventListener('change', function () {
      $('#manualRow').style.display = this.value === 'manual' ? '' : 'none';
    });
    $('#manualRow').style.display = (settings.starMode === 'manual') ? '' : 'none';
    var roster = [];
    $$('.roster-chip').forEach(function (c) {
      c.addEventListener('click', function () {
        this.classList.toggle('active');
        var id = this.dataset.id;
        var i = roster.indexOf(id);
        if (i >= 0) roster.splice(i, 1); else roster.push(id);
      });
    });
    $('#saveStar').addEventListener('click', function () {
      var mode = $('#f_mode').value;
      var patch = { starMode: mode };
      if (mode === 'manual') {
        var pid = $('#f_manualPanda').value;
        if (!pid) return U.toast('请选择手动指定的熊猫');
        patch.starOverride = { date: DB.todayStr(), pandaId: pid };
      } else {
        patch.starOverride = null;
      }
      patch.starRoster = roster.length ? roster : null;
      DB.saveSettings(patch);
      U.toast('今日主角设置已保存');
      renderStar();
    });
  }

  /* ---------- 站点设置 ---------- */
  function renderSettings() {
    var s = DB.getSettings();
    $('#secContent').innerHTML =
      '<h2 style="font-size:20px;margin-bottom:14px">⚙️ 站点设置</h2>' +
      '<div class="card card-pad" style="max-width:560px">' +
      formRow('站点名称', input('siteName', s.siteName)) +
      formRow('站内公告（首页横幅展示）', textarea('notice', s.notice)) +
      formRow('修改管理密码', input('adminPwd', '', '留空则不修改', 'password')) +
      '<button class="btn btn-primary" id="saveSettings">保存设置</button>' +
      '</div>' +
      '<div class="card card-pad" style="max-width:560px;margin-top:14px;background:var(--bg-soft)">' +
      '<b>数据管理</b>' +
      '<p style="font-size:13px;color:var(--ink-2);margin:6px 0">当前数据存储在浏览器 localStorage（键名前缀 wb_panda_v1_）。</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="btn btn-outline btn-sm" id="btnExport">导出数据 JSON</button>' +
      '<button class="btn btn-ghost btn-sm" id="btnReset">恢复种子数据</button>' +
      '</div></div>';
    $('#saveSettings').addEventListener('click', function () {
      var patch = { siteName: $('#f_siteName').value };
      patch.notice = $('#f_notice').value;
      var pwd = $('#f_adminPwd').value;
      if (pwd) {
        if (pwd.length < 6) return U.toast('密码至少6位');
        patch.adminPwd = pwd;
      }
      DB.saveSettings(patch);
      U.toast('设置已保存');
    });
    $('#btnExport').addEventListener('click', function () {
      var data = {};
      ['venues', 'events', 'culture', 'pandas', 'articles', 'subs', 'comments'].forEach(function (k) {
        data[k] = DB.all(k);
      });
      data.settings = DB.getSettings();
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'panda-news-export-' + DB.todayStr() + '.json';
      a.click();
      URL.revokeObjectURL(a.href);
      U.toast('已导出');
    });
    $('#btnReset').addEventListener('click', function () {
      if (!confirm('确认恢复种子数据？当前所有修改（含投稿/评论）将被重置。')) return;
      ['venues', 'events', 'culture', 'pandas', 'articles', 'subs', 'comments'].forEach(function (k) {
        localStorage.removeItem(DB.KEYS[k]);
      });
      U.toast('已恢复种子数据');
      setTimeout(function () { location.reload(); }, 800);
    });
  }

  /* ---------- 工具 ---------- */
  function tableWrap(id, heads, rows, filter) {
    return '<div class="card" style="overflow:auto"><table class="cms-table"><thead><tr>' +
      heads.map(th).join('') + '</tr></thead><tbody>' + (rows || '<tr><td colspan="' + heads.length + '" style="text-align:center;color:var(--ink-3);padding:24px">暂无数据</td></tr>') + '</tbody></table></div>';
  }

  function renderSec() {
    if (!DB.isAdmin()) return;
    if (sec === 'dashboard') renderDashboard();
    else if (sec === 'subs') renderSubs();
    else if (sec === 'comments') renderComments();
    else if (sec === 'articles') renderArticles();
    else if (sec === 'events') renderEvents();
    else if (sec === 'culture') renderCulture();
    else if (sec === 'venues') renderVenues();
    else if (sec === 'pandas') renderPandas();
    else if (sec === 'star') renderStar();
    else if (sec === 'settings') renderSettings();
  }

  initAuth();
})();
