// MENU
$('.js-menu-btn').click(function(e){
    $('.js-menu-root').slideToggle(450);
});

$('.js-menu-item').click(function(e){
	var id = $( this ).attr('href');
	e.preventDefault();

    $('html, body').stop().animate({ 
    	scrollTop: $( id ).offset().top - 125
    }, 1000);

    $('.js-menu-item').removeClass('active');
	$(this).addClass('active');
});