$(function(){
	$('.faq-ask').on('click', function(){
		/*$('.faq-ask').removeClass('faq-ask--active');
		$('.faq-answer').slideUp();
	*/
		$(this).toggleClass('faq-ask--active');
		$(this).next().slideToggle();
	});

	$('.nav-button').on('click', function(){
		$(this).toggleClass('nav-button--active');
		$('.menu-list').slideToggle(300, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});

	});
});