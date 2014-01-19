module.exports = (grunt) ->
  
  # Project configuration
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    paths:
      dist: "assets/dist"
      src: "assets/src"

    
    # JSHint JavaScript files
    jshint:
      files: ["Gruntfile.js", "package.json"]

    
    # Minify JavaScript with Uglify
    uglify:
      options:
        mangle: false

      dist:
        files:
          "<%= paths.dist %>/scripts/supernova.js": ["<%= paths.dist %>/scripts/supernova.js"]

    
    # CoffeeScript
    coffee:
      options:
        sourceMap: true
        sourceRoot: ""

      dist:
        files: [
          expand: true
          cwd: "<%= paths.src %>/scripts/"
          src: ["*.coffee", "**/*.coffee", "**/**/*.coffee"]
          dest: "<%= paths.dist %>/scripts"
          ext: ".js"
        ]

    
    # Compile Sass to CSS -  destination : source
    sass:
      server:
        files:
          "<%= paths.dist %>/styles/supernova.css": "<%= paths.src %>/styles/supernova.scss"

      dist:
        options:
          outputStyle: "compressed"
          sourceComments: "normal"

        files:
          "<%= paths.dist %>/styles/supernova.css": "<%= paths.src %>/styles/supernova.scss"

    autoprefixer:
      options: ["last 1 version"]
      dist:
        files: [
          expand: true
          cwd: "<%= paths.dist %>/styles/"
          src: "{,*/}*.css"
          dest: "<%= paths.dist %>/styles/"
        ]

    concurrent:
      serve: ["coffee:dist", "sass:server", "autoprefixer"]
      dist: ["jshint", "coffee:dist", "sass:dist", "autoprefixer"]

    
    # Simple config to run sass, jshint and coffee any time a js or sass file is added, modified or deleted
    watch:
      coffee:
        files: ["<%= paths.src %>/scripts/*.coffee", "<%= paths.src %>/scripts/**/*.coffee", "<%= paths.src %>/scripts/**/**/*.coffee"]
        tasks: ["coffee:dist"]

      sass:
        files: ["<%= paths.src %>/styles/{,*/}*.scss"]
        tasks: ["sass:server", "autoprefixer"]

      jshint:
        files: ["<%= jshint.files %>"]
        tasks: ["jshint"]

  
  # Load the plug-ins
  require("load-grunt-tasks") grunt
  
  # Default tasks
  grunt.registerTask "default", ["concurrent:dist", "uglify"]
  grunt.registerTask "serve", ["concurrent:serve", "watch"]