// Alternate the order of the two partners' names each day, so each of
// them is first exactly half the time. Both names are in the static HTML,
// so search engines always see them; this only swaps their display order
// in the browser. The order depends on the parity of the day of the year.
(function () {
  var now = new Date();
  var startOfYear = Date.UTC(now.getFullYear(), 0, 0);
  var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  var dayOfYear = Math.floor((today - startOfYear) / 86400000);
  if (dayOfYear % 2 === 0) return;
  var first = document.getElementById('partner-first');
  var second = document.getElementById('partner-second');
  if (!first || !second) return;
  var tmp = first.innerHTML;
  first.innerHTML = second.innerHTML;
  second.innerHTML = tmp;
})();
