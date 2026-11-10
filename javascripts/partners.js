// Randomize the order of the two partners' names on each visit.
// Both names are in the static HTML, so search engines always see them;
// this only swaps their display order in the browser.
(function () {
  if (Math.random() < 0.5) return;
  var first = document.getElementById('partner-first');
  var second = document.getElementById('partner-second');
  if (!first || !second) return;
  var tmp = first.innerHTML;
  first.innerHTML = second.innerHTML;
  second.innerHTML = tmp;
})();
