##  Supernova.ghost
Pure design for Ghost.js.
Started as [Starter.ghost][3]

![Supernova.ghost][1]

### Features
 - Ghost 0.4 support
 - Pure design
 - Smooth animations
 - Covers in blog post: `![image-cover](url/to/picture.jpg)`
 - Link to `/ghost/` in top right position
 - Disqus integration
 - And other:
  - Twitter Bootstrap 3, normalize.css, Font Awesome
  - SCSS with [lib-sass][2] (written on C), CoffeeScript
  - Grunt.js, Bower

### Install stable release
 - Just download latest [stable release][5], drop theme to `/content/themes/Supernova` and change Ghost settings.
 - Don't forget change Twitter username in `default.hbs` (footer) and disqus shortname in `assets/src/supernova.coffee`

### Development install
 - **You must install Grunt, Bower and CoffeeScript: `npm install -g grunt bower coffee-script`**
 - Clone this repository to `/content/themes`: `git clone https://github.com/theaqua/Supernova.ghost.git Supernova` (**important:** Ghost.js have bug with dots in theme's name, you must not use `Supernova.ghost` name, only `Supernova`)
 - Go to `/content/themes/Supernova`, make `npm install && bower install`
 - Change Twitter username in `default.hbs` (footer) and disqus shortname in `supernova.coffee`
 - Run `grunt serve` (for live compiling SCSS and CoffeeScript) or `grunt` for build
 - In Ghost's settings change "Theme" preference, restart Ghost (yes, I'm serious)
 
### Tips
 - For image cover use `![image-cover](url/to/picture.jpg)`
 - For image with no border use `![no-border](url/to/picture.jpg)`
 - Layout: `.col-sm-2+.col-sm-10.col-lg-8`

### License
CC-NC-SA. You can't sell, but you can use in commercial services (ads including).

  [1]: http://gm4.in/i/fis.jpg
  [2]: http://libsass.org/
  [3]: https://github.com/theaqua/Starter.ghost
  [5]: https://github.com/theaqua/Supernova.ghost/releases