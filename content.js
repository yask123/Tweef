/**
 * Created by yasksrivastava on 20/02/16.
 */
function start_playing_with_dom() {
    var test = $('.dropdown-menu ul');
    test.each(function (i, el) {
        try {
            if (el.children.length === 8) {
                var new_node = $(el).prepend('<li> <button id="link" type="button" class="dropdown-link fb_tweet">Share on Facebook</button> </li>');
                new_node.click(function () {
                    var content_node = $(this).parents().eq(7).find('.tweet-timestamp').attr("href");
                    fb_share_url = 'https://twitter.com' + content_node;
                    console.log(fb_share_url);
                    window.open('http://www.facebook.com/sharer/sharer.php?u=' + fb_share_url);
                });

            }

        }
        catch (el) {
            console.log('something is wrong');
        }

    });

}
setInterval(start_playing_with_dom, 3000);