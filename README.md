## [Supernova](http://theaqua.im/supernova)
Pure design for Ghost.js.
Current version: 0.3

Based on [Starter.ghost](https://github.com/theaqua/Starter.ghost)

![image-cover](http://theaqua.im/content/images/2014/Jan/supernova_wallpaper_1.jpg)

#### Features
- Pure design with smooth animations
- Mobile first and full responsive layout
![no-border](http://theaqua.im/content/images/2014/Mar/Eugene_Rodionov_2014_03_10_17_03_19_2014_03_10_17_04_09.jpg)
- Post cover image
![no-border](http://theaqua.im/content/images/2014/Mar/Supernova_2014_03_10_16_58_34_2014_03_10_16_59_29.jpg)
- Navbar with hidden link to control panel
![no-border](http://theaqua.im/content/images/2014/Mar/Supernova_2014_03_10_16_57_12_2014_03_10_16_57_39.jpg)
- InstantClick for better UX: when user hovers a link, [InstantClick](http://instantclick.io) will preload its content to improve a speed of loading
- Integration with Disqus
- highlight.js for highliting the syntax of code
- Support of all Ghost 0.4 features: static pages, featured posts and other
- **[Open source](https://github.com/theaqua/Supernova)** and CC-NC-SA license. Not for sale. Only for commercial needs (advertising is supported).
- General development features:
 - Bootstrap 3, Font Awesome
 - Sass (with libsass, no Ruby), CoffeeScript
 - Grunt.js, Bower

#### Installation
- [Download](https://github.com/theaqua/Supernova/releases/download/0.3/Supernova.0.3.zip) or [Buy](https://gum.co/supernova) ($5).
- Change Twitter username and Disqus shortname in `default.hbs` (just find **justusebrain** for Twitter and **theaqua** for Disqus)
- Drop theme to `/content/themes` and change Ghost settings.

#### Usage
- Post cover image: `![image-cover](http://url/to/picture.png)`
- [Big quote](http://theaqua.im/supernova/#blockquotes): `<blockquote class="quote-lg">quote</blockquote>`
- Image without border: `![no-border](http://url/to/picture.png)`

### Installation of development version
- **You must install Grunt, Bower and CoffeeScript: `npm install -g grunt-cli bower coffee-script`**
- Clone repository to `/content/themes`: `git clone https://github.com/theaqua/Supernova.git Supernova`
- Go to `/content/themes/Supernova`, run `npm install && bower install`
- Run `grunt serve` (for live compiling SCSS and CoffeeScript) or `grunt` for build
- In Ghost's settings change "Theme" preference, restart Ghost (yes, I'm serious)