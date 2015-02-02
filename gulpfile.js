"use strict"

var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    sequence = require("run-sequence"),
    del = require("del");

gulp.task("clean", function() {
  return del("assets");
});

gulp.task("sass", function() {
  return gulp.src("_src/assets/styles/app.scss")
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe(gulp.dest("assets/styles"))
});

gulp.task("coffee", function() {
  return gulp.src("_src/assets/scripts/**/*.coffee")
    .pipe($.sourcemaps.init())
    .pipe($.coffee())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest("assets/scripts"))
});

gulp.task("concat", function() {
  return gulp.src(["_src/assets/components/instantclick/instantclick.js", "_src/assets/components/highlightjs/highlight.pack.js", "_src/assets/components/bootstrap/js/transition.js", "_src/assets/components/bootstrap/js/collapse.js", "assets/scripts/supernova.js"])
    .pipe($.concat("supernova.js"))
    .pipe($.uglify())
    .pipe(gulp.dest("assets/scripts"))
});

gulp.task("livereload", function(ev, data) {
  return gulp.src("*.hbs")
    .pipe($.connect.reload());
});

gulp.task("livereload:sass", function() {
  sequence("sass", "livereload");
});

gulp.task("livereload:coffee", function() {
  sequence("coffee", "livereload");
});

gulp.task("watch", function() {
  sequence("clean", "sass", "coffee", "concat", function() {    
    $.connect.server({
      livereload: true,
      root: ["."],
      port: 3000,
      host: "0.0.0.0"
    });

    gulp.watch("*.hbs", ["livereload"]);
    gulp.watch("_src/assets/styles/**/*.scss", ["livereload:sass"]);
    gulp.watch("_src/assets/scripts/**/*.coffee", ["livereload:coffee"]);
  });
});

gulp.task("build", function() {
  sequence("clean", "sass", ["coffee", "concat"]);
});