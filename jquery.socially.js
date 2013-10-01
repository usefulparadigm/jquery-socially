// jquery.socially.js

;(function($) {
    "use strict";
    
    $.fn.socially = function(options) {
        
        // default options
        var settings = $.extend({
            service: ['facebook', 'twitter', 'google', 'pinterest'],
            itemClass: '',
            shareText: 'Share This!',
            popup: true,  // popup or direct link 
            html5: false  // wrap with <figure> tag if true
        }, options);
        
        // console.log(settings);

        var shareHtml = '<ul class="socially">';
        if (settings.html5) shareHtml = '<figcaption>' + shareHtml;
        $.each(settings.service, function(index, s) {
            shareHtml += '<li><a href="#" class="'+s+' '+settings.itemClass+'" data-share="'+s+'" target="_blank" alt="'+s+'">'+s+'</a></li>';
        });
        shareHtml += '</ul>';
        if (settings.html5) shareHtml += '</figcaption>';
        
        var shareLinks = {
            twitter: {
                link: 'http://twitter.com/share?text={text}&url={url}',
                shortUrl: true
            },
            facebook: {
                link: 'http://www.facebook.com/sharer.php?u={url}&t={text}',
            },
            google: {
                link: 'https://plus.google.com/share?url={url}'
            },
            pinterest: {
                link: 'http://www.pinterest.com/pin/create/button/?url={url}&media={url}&description={text}',    
            }
        };                    
        
        var popupWindow = function(url, title, width, height) {
            var title = title || 'Share', width = width || 600, height = height || 600;
            window.open(url,title,'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+width+',height='+height);
        };
        
        var shortenUrl = function(url) {
            if ($.urlShortener && $.isFunction($.urlShortener)) {
                // https://github.com/hayageek/jQuery-URL-shortener
                url = $.urlShortener({longUrl: url});
            }
            return url;
        };                
        
        $(function() {

            $('.socially a').on('click', document, function() {
                var $this = $(this);
                var imageUrl = $this.closest('.socially-wrap').find('img').attr('src');
                // console.log(imageUrl);
                var shareLink = shareLinks[$(this).data('share')];
                var shareUrl = shareLink.link;
                var shareText = settings.shareText || '';
                if (shareLink.shortUrl) { imageUrl = shortenUrl(imageUrl); }
                // console.log(imageUrl);
                shareUrl = shareUrl.replace(/{url}/gi, imageUrl);
                shareUrl = shareUrl.replace(/{text}/gi, shareText);
            
                // console.log(shareUrl);

                if (settings.popup) {
                    popupWindow(shareUrl, 'Share', shareLink.width, shareLink.height);
                    return false;
                    
                } else {
                    $this.attr('href', shareUrl);
                }
            });

        });

        return this.each(function() {
            // $(this).after(shareHtml); 
            var wrap = settings.html5 ? 'figure' : 'div';
            $(this).wrap('<'+wrap+' class="socially-wrap" />').after(shareHtml);
        });
    };

}(jQuery));


