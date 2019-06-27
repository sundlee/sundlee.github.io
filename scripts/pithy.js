$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        }, 500);
    });
    $(window).load(function() {
		$('#gotop').hide();
    })

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

    var $footer = $('.footer');
    var h_html = $('html').height();
    var h_body = $('body').height();

    if(h_body > h_html){
      $footer.css('position', 'relative');
    }
});
