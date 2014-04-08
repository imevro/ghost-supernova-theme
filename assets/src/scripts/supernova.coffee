###
Main JS file for Supernova behaviours
###

# Post cover. God, forgive me for jQuery, but Ghost don't have blog post cover feature
postCover = $("img[alt='image-cover']")
blogCover = $("#blog-cover")

if postCover.length > 0
  # Replace old content
  $("#blog-image").hide()
  $("#blog-title").text $("#post-title").addClass("post-title-hidden").text()
  $("#blog-subtitle").hide()
  postCover.remove()

  # Add image and class .covered
  blogCover.css("background-image", "url(#{postCover.attr('src')})").addClass "covered"

disqus_shortname = "theaqua" # required: replace example with your forum shortname
(->
  dsq = document.createElement("script")
  dsq.type = "text/javascript"
  dsq.async = true
  dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js"
  (document.getElementsByTagName("head")[0] or document.getElementsByTagName("body")[0]).appendChild dsq
  return
)()