###
Main JS file for Supernova behaviours
###

## Load disqus
disqus_shortname = "theaqua" # required: replace example with your forum shortname
(->
  if document.getElementById("disqus_thread") isnt null
    dsq = document.createElement("script")
    dsq.async = true
    dsq.src = "//#{disqus_shortname}.disqus.com/embed.js"
    (document.getElementsByTagName("head")[0] or document.getElementsByTagName("body")[0]).appendChild dsq
)()

# Post cover. God, forgive me for jQuery, but Ghost don't have blog post cover feature
postCover = $("img[alt='image-cover']")
blogCover = $("#blog-cover")

if postCover.length > 0
  # Replace old content
  $("#blog-image").hide()
  $("#blog-title").text $("#post-title").hide().text()
  $("#blog-subtitle").text $("#post-date").hide().text()
  postCover.remove()

  # Add image and class .covered
  blogCover.css("background-image", "url(#{postCover.attr('src')})").addClass "covered"

## Load highlight
hljs.initHighlightingOnLoad();