/**
 * Created by yasksrivastava on 20/02/16.
 */
$('.dropdown-menu ul').append('<li> <button id="link" type="button" class="dropdown-link fb_tweet">Share on Facebook</button> </li>');
console.log('running');

$('.fb_tweet').click(function(){
    var content_node =  $(this).parents().eq(7).find('.tweet-timestamp').attr("href");
    fb_share_url = 'https://twitter.com'+content_node;
    console.log(fb_share_url);
    window.open('http://www.facebook.com/sharer/sharer.php?u='+fb_share_url);
});
