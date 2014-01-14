##  Supernova.ghost
My design for Ghost.js.
Started as [Starter.ghost][3]

![Supernova.ghost][1]

### Features
 - Twitter Bootstrap 3, normalize.css, Font Awesome
 - SCSS with [lib-sass][2] (written on C)
 - Grunt.js, Bower
 
### Install and use
 - Clone this repository to `/content/themes`: ``git clone https://github.com/theaqua/Supernova.ghost.git Supernova`` (**important:** Ghost.js have bug with dots in theme's name, you must not use ``Supernova.ghost`` name, only ``Supernova``)
 - In Ghost's settings change "Theme" preference, restart Ghost (yes, I'm serious)
 - Go to ``/content/themes/Supernova.ghost``, make ``npm install && bower install``
 - Run ``grunt serve`` (for live compiling ``.scss`` files and concat ``.js`` files) or ``grunt`` for build
 — Don't forget change Twitter username in ``default.hbs`` (footer)
 
### License
Creative Commons Attribution NonCommercial NoDerivs (CC-NC-ND)
I will change license when I finished.

  [1]: http://gm4.in/i/fgy.png
  [2]: http://libsass.org/
  [3]: https://github.com/theaqua/Starter.ghost