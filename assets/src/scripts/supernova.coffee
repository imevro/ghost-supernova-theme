###
Main JS file for Supernova behaviours
###

# Post cover. God, forgive me for jQuery, but Ghost don't have blog post cover feature
postCover = $("img[alt='image-cover']")
blogCover = $("#blog-cover")

$(".newer-posts").html("<i class='fa fa-angle-left'></i> Newer posts")
$(".older-posts").html("Older posts <i class='fa fa-angle-right'></i>")

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