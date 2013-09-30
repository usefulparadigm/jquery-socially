// jquery.socially.js

;(function($) {
    "use strict";
    
    $.fn.socially = function(option, settings) {

        var shareHTML = '<ul class="image-share">'
                        +'<li><a href="#" class="twitter" data-share="twitter" target="_blank" alt="twitter">Twitter</a></li>'        
                        +'<li><a href="#" class="facebook" data-share="facebook" target="_blank" alt="facebook">Facebook</a></li>'        
                        +'<li><a href="#" class="google" data-share="google" target="_blank" alt="google">Google</a></li>'        
                        +'<li><a href="#" class="pinterest" data-share="pinterest" target="_blank" alt="pinterest">Pinterest</a></li>'        
                        +'</ul>';
        
        var shareLinks = {
            twitter: {
                link: 'http://twitter.com/share?text={text}&url={url}',
                shortUrl: true,
                text: 'Shrare This! '
            },
            facebook: {
                link: 'http://www.facebook.com/sharer.php?u={url}&t={text}',
                text: 'Shrare This! '
            },
            google: {
                link: 'https://plus.google.com/share?url={url}'
            },
            pinterest: {
                link: 'http://www.pinterest.com/pin/create/button/?url={url}&media={url}&description={text}',    
                text: 'Shrare This! '
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

            $('.image-share a').on('click', document, function() {
                var $this = $(this);
                var imageUrl = $this.closest('ul').siblings('img').attr('src');
                var shareLink = shareLinks[$(this).data('share')];
                var shareUrl = shareLink.link;
                var shareText = shareLink.text || '';
                if (shareLink.shortUrl) { imageUrl = shortenUrl(imageUrl); }
                // console.log(imageUrl);
                shareUrl = shareUrl.replace(/{url}/gi, imageUrl);
                shareUrl = shareUrl.replace(/{text}/gi, shareText);
            
                // console.log(shareUrl);
                // $this.attr('href', shareUrl);
                popupWindow(shareUrl, 'Share', shareLink.width, shareLink.height);
                return false;
            });

        });

        return this.each(function() {
            $(this).after(shareHTML); 
            // $(this).wrap('<figure />').append(shareHTML);
        });
    };

}(jQuery));


