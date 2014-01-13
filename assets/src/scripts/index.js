/**
 * Main JS file for Supernova behaviours
 */

/*globals jQuery, document */
var disqus_shortname = 'theaqua'; // required: replace example with your forum shortname

(function() {
  if(document.getElementById('disqus_thread') !== null) {
    var dsq = document.createElement('script'); dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
})();