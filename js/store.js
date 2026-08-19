/* ============================================================
   熊猫资讯 - 数据层 store.js
   localStorage 为唯一可写层，种子数据(seed-data.js)只做首次初始化兜底
   ============================================================ */
(function (global) {
  'use strict';

  var VER = 'wb_panda_v1_';
  var KEYS = {
    venues: VER + 'venues',
    events: VER + 'events',
    culture: VER + 'culture',
    pandas: VER + 'pandas',
    articles: VER + 'articles',
    subs: VER + 'subs',
    comments: VER + 'comments',
    settings: VER + 'settings',
    likes: VER + 'likes',
    follows: VER + 'follows',
    session: VER + 'session'
  };

  function safeParse(raw, fallback) {
    try { var v = JSON.parse(raw); return v === null || v === undefined ? fallback : v; }
    catch (e) { return fallback; }
  }

  function load(key, seedFn) {
    var raw = null;
    try { raw = localStorage.getItem(key); } catch (e) {}
    if (raw) {
      var list = safeParse(raw, null);
      if (list && list.length) return list;
    }
    // 首次初始化：用种子数据播种并写入
    var seeded = seedFn ? seedFn() : [];
    try { localStorage.setItem(key, JSON.stringify(seeded)); } catch (e) {}
    return seeded;
  }

  function save(key, list) {
    try { localStorage.setItem(key, JSON.stringify(list || [])); } catch (e) {}
  }

  function uid(prefix) {
    return (prefix || 'id') + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
  }

  function upsert(list, item) {
    var idx = list.findIndex(function (x) { return x.id === item.id; });
    if (idx >= 0) list[idx] = item; else list.unshift(item);
    return list;
  }

  function todayStr(offsetDays) {
    var d = new Date();
    if (offsetDays) d.setDate(d.getDate() + offsetDays);
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  function hashString(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h;
  }

  function pickByDate(list, dateStr, salt) {
    if (!list || !list.length) return null;
    var sorted = list.slice().sort(function (a, b) { return (a.id < b.id ? -1 : 1); });
    var h = hashString(dateStr + '_' + (salt || 'star'));
    return sorted[h % sorted.length];
  }

  /* ---------------- 今日主角：每日0点自动切换 ----------------
     逻辑：settings.starOverride 里若记录 date===今天 且有 pandaId，优先手动指定；
     否则按日期哈希从档案库轮换（0点后日期变化即自动切换）。
  */
  function todayStar() {
    var now = new Date();
    var dateStr = todayStr();
    var hour = now.getHours(), min = now.getMinutes();
    var todayKey = dateStr;
    var settings = getSettings();
    // 0点刚过且昨天曾手动指定过：不沿用昨天指定
    if (settings.starOverride && settings.starOverride.date === todayKey && settings.starOverride.pandaId) {
      var p = findById('pandas', settings.starOverride.pandaId);
      if (p) return { panda: p, date: todayKey, manual: true };
    }
    var pandas = all('pandas');
    var panda = pickByDate(pandas, todayKey, 'star');
    if (settings.starRoster && settings.starRoster.length) {
      var only = [];
      settings.starRoster.forEach(function (id) {
        var pp = findById('pandas', id);
        if (pp) only.push(pp);
      });
      if (only.length) panda = pickByDate(only, todayKey, 'star2');
    }
    return { panda: panda, date: dateKey(), manual: false, hour: hour, min: min };
  }
  function dateKey() { return todayStr(); }

  function findById(kind, id) {
    var list = all(kind);
    return list.find(function (x) { return String(x.id) === String(id); }) || null;
  }

  function getSettings() {
    var def = { siteName: '熊猫资讯 PandaDaily', starMode: 'auto', starOverride: null, starRoster: [], adminPwd: 'panda2024', notice: '' };
    try {
      var raw = localStorage.getItem(KEYS.settings);
      if (raw) { var s = safeParse(raw, {}); for (var k in def) if (!(k in s)) s[k] = def[k]; return s; }
    } catch (e) {}
    return def;
  }

  function saveSettings(patch) {
    var s = getSettings();
    for (var k in (patch || {})) s[k] = patch[k];
    try { localStorage.setItem(KEYS.settings, JSON.stringify(s)); } catch (e) {}
    return s;
  }

  /* ---------------- 各类数据集合 ---------------- */
  var DB = {
    KEYS: KEYS,
    all: all,
    load: load,
    save: save,
    uid: uid,
    upsert: upsert,
    find: findById,
    todayStr: todayStr,
    hashString: hashString,
    pickByDate: pickByDate,
    getSettings: getSettings,
    saveSettings: saveSettings,
    todayStar: todayStar,
    /* 关注场馆 id 列表 */
    getFollows: function () {
      return safeParse(localStorage.getItem(KEYS.follows), []);
    },
    toggleFollow: function (venueId) {
      var list = this.getFollows();
      var i = list.indexOf(venueId);
      if (i >= 0) list.splice(i, 1); else list.push(venueId);
      localStorage.setItem(KEYS.follows, JSON.stringify(list));
      return i < 0;
    },
    /* 点赞：key = kind:id */
    getLikes: function () {
      return safeParse(localStorage.getItem(KEYS.likes), {});
    },
    toggleLike: function (key) {
      var map = this.getLikes();
      var v = map[key] ? 0 : 1;
      map[key] = v;
      localStorage.setItem(KEYS.likes, JSON.stringify(map));
      return !!v;
    },
    isLiked: function (key) { return !!this.getLikes()[key]; },
    /* 后台登录会话 */
    login: function (pwd) {
      if (pwd === this.getSettings().adminPwd) {
        localStorage.setItem(KEYS.session, JSON.stringify({ at: Date.now() }));
        return true;
      }
      return false;
    },
    logout: function () { localStorage.removeItem(KEYS.session); },
    isAdmin: function () {
      try { var s = safeParse(localStorage.getItem(KEYS.session), null); return !!(s && s.at); } catch (e) { return false; }
    }
  };

  function all(kind) {
    var seeds = global.__PANDA_SEED__ || {};
    var map = {
      venues: ['venues', function () { return seeds.venues || []; }],
      events: ['events', function () { return seeds.events || []; }],
      culture: ['culture', function () { return seeds.culture || []; }],
      pandas: ['pandas', function () { return seeds.pandas || []; }],
      articles: ['articles', function () { return seeds.articles || []; }],
      subs: ['subs', function () { return seeds.subs || []; }],
      comments: ['comments', function () { return seeds.comments || []; }]
    };
    var entry = map[kind];
    return entry ? load(KEYS[kind] || kind, entry[1]) : [];
  }

  /* 数据变更统一入口（CMS 用） */
  DB.saveKind = function (kind, list) {
    var key = KEYS[kind];
    if (key) save(key, list);
  };

  global.PandaDB = DB;
})(window);
