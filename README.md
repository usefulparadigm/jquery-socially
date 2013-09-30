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
        popup: true
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

- Html5 figure tag support (for easy caption integration)    

