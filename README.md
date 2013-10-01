jquery.socially
=====
A tiny jQuery plugin for dynamically adding social media share links to images

![screenshot](screenshot.png)

Usage:
-----

    $('img').socially();

    // default options
    var settings = $.extend({
        service: ['facebook', 'twitter', 'google', 'pinterest'],
        itemClass: '',
        shareText: 'Share This!',
        popup: true,  // popup or direct link 
        html5: false  // wrap with <figure> tag if true
    }, options);


Dependencies:
-----

- jQuery
- [jQuery-URL-shortener](https://github.com/hayageek/jQuery-URL-shortener)


Credits:
-----

- [Simple Icons](http://simpleicons.org/) by Dan Leech under the Free Art License.


Todos:
-----

- Supporting more social medias 
