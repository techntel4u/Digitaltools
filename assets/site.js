// Same Lesson, Every Learner — small helpers shared by every page.
(function () {
  // Safe localStorage (can throw in private windows or locked-down browsers)
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  };

  // Toast
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  document.body.appendChild(toast);
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(say.t);
    say.t = setTimeout(function () { toast.classList.remove('show'); }, 1800);
  }

  // Copy buttons: <button data-copy="text">
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () { say('Copied: ' + text); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { say('Code: ' + text); });
      } else { say('Code: ' + text); }
    });
  });

  // "I've done this" ticks: <input type="checkbox" data-done="key"> inside a .card
  function paint(key, on) {
    document.querySelectorAll('[data-done="' + key + '"]').forEach(function (cb) {
      cb.checked = on;
      var card = cb.closest('.card');
      if (card) card.classList.toggle('is-done', on);
    });
    document.querySelectorAll('[data-tile="' + key + '"]').forEach(function (t) { t.classList.toggle('built', on); });
  }
  document.querySelectorAll('[data-done]').forEach(function (cb) {
    var key = cb.getAttribute('data-done');
    if (store.get('slel-' + key) === '1') paint(key, true);
    cb.addEventListener('change', function () {
      store.set('slel-' + key, cb.checked ? '1' : '0');
      paint(key, cb.checked);
      if (cb.checked) say('Nice one, ticked off');
    });
  });
  document.querySelectorAll('[data-tile]').forEach(function (t) {
    if (store.get('slel-' + t.getAttribute('data-tile')) === '1') t.classList.add('built');
  });

  // Resource filters + search (explore page)
  var filters = document.querySelectorAll('.filter');
  var search = document.getElementById('res-search');
  var groups = document.querySelectorAll('.res-group');
  var empty = document.querySelector('.no-results');
  var active = 'all';
  function applyFilters() {
    var q = search ? search.value.trim().toLowerCase() : '';
    var shown = 0;
    groups.forEach(function (g) {
      var inTool = active === 'all' || (g.getAttribute('data-topic') || '').split(' ').indexOf(active) > -1;
      var anyInGroup = 0;
      g.querySelectorAll('.res').forEach(function (r) {
        var match = !q || r.textContent.toLowerCase().indexOf(q) > -1;
        r.hidden = !(inTool && match);
        if (!r.hidden) anyInGroup++;
      });
      g.hidden = anyInGroup === 0;
      shown += anyInGroup;
    });
    if (empty) empty.style.display = shown ? 'none' : 'block';
  }
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      filters.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      f.setAttribute('aria-pressed', 'true');
      active = f.getAttribute('data-filter');
      applyFilters();
    });
  });
  if (search) search.addEventListener('input', applyFilters);
})();
