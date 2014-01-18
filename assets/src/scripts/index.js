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

// Post cover
var postCover = $('img[alt="image-cover"]');
if (postCover.length > 0) {
  // Add image and class .covered
  $('#blog-cover').css('background-image', 'url(' + postCover.attr('src') + ')');
  $("#blog-cover").addClass("covered");

  // Replace old content
  $("#blog-image").hide();
  $("#blog-title").text($("#post-title").hide().text());
  $("#blog-subtitle").text($("#post-date").hide().text());
  postCover.remove();
}