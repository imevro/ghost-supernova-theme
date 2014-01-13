module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
         '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
         '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
         '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> -' +
         ' Licensed under the <%= pkg.license %> License\n*/\n\n',

    // JSHint JavaScript files
    jshint: {
      files: ['Gruntfile.js', 'package.json']
    },

    // Concatenate all JavaScript files
    concat: {
      options: {
        stripBanners: true,
        separator: ';',
      },
      dist: {
        src: ['assets/src/scripts/{,*/}*.js'],
        dest: 'assets/dist/scripts/starter.js'
      },
    },

    // Minify JavaScript with Uglify
    uglify: {
      options: {
        mangle: false
      },
      dist: {
          files: {
            'assets/dist/scripts/starter.js': ['<%= concat.dist.dest %>']
          }
        }
    },

    // Compile Sass to CSS -  destination : source
    sass: {
      server: {
        files: {
          'assets/dist/styles/supernova.css': 'assets/src/styles/supernova.scss'
        },
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceComments: 'normal'
        },
        files: {
          'assets/dist/styles/supernova.css': 'assets/src/styles/supernova.scss'
        },
      },
    },

    // Simple config to run sass, jshint and uglify any time a js or sass file is added, modified or deleted
    watch: {
      sass: {
        files: ['assets/src/styles/{,*/}*.scss'],
        tasks: ['sass:server']
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      concat: {
        files : ['<%= concat.dist.src %>'],
        tasks: ['concat']
      },
    },
  });

  // Load the plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default tasks
  grunt.registerTask('default', ['jshint', 'concat', 'sass:dist', 'uglify']);
  grunt.registerTask('serve', ['sass:server', 'concat', 'watch']);
};
