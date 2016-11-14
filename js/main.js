$(document).ready(function () {
	
	 // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

     // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

      // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.section-heading', {
        duration: 2000,
        origin: 'left',
        distance: '100px',
        reset:true,
    });

    sr.reveal('.left-section-heading', {
        duration: 2000,
        origin: 'right',
        distance: '10px',
        reset:true,
    });

    sr.reveal('.text-faded',{
        duration:2000,
        origin:'right',
        distance:'20px',
        rotate: { x: 10, y: 40, z: 0 },
    });

     sr.reveal('.lead',{
        duration:2000,
        origin:'right',
        distance:'20px',
    });
     sr.reveal('.img-responsive',{
        duration:2000,
        origin:'right',
        distance:'20px',
    });

     sr.reveal('.sn-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);

});