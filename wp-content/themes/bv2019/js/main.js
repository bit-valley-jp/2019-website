// smooth scroll

// var urlHash = location.hash;
// if(urlHash) {
//     $('body,html').stop().scrollTop(0);
//     setTimeout(function(){
//         var target = $(urlHash);
//         var position = target.offset().top;
//         $('body,html').stop().animate({scrollTop:position}, 1000);   
//     }, 100);
// }
// $('a[href^="#"]').click(function() {
//     var href= $(this).not('[data-filter]').attr("href");
//     var target = $(href);
//     var position = target.offset().top;
//     $('body,html').stop().animate({scrollTop:position}, 1000);   
// });


$(function(){
    $('a[href*="#"]').not(".no-scroll").click(function() {

        var speed = 1000,
            href = $(this).prop("href"),
            hrefPageUrl = href.split("#")[0],
            currentUrl = location.href,
            currentUrl = currentUrl.split("#")[0];

        if(hrefPageUrl == currentUrl){

            href = href.split("#");
            href = href.pop();
            href = "#" + href;

            var target = $(href == "#" || href == "" ? 'html' : href),
                position = target.offset().top;
            $('body,html').stop().animate({scrollTop:position}, 1000); 
        }

    });
});


//filter animation
var $filters1 = $('.day1 [data-filter]'),
	$boxes1 = $('.day1 [data-category]');

$filters1.on('click', function(e) {
	e.preventDefault();
	var $this = $(this);
	$filters1.removeClass('active');
	$this.addClass('active');

	var $filterCategory = $this.attr('data-filter');

	if ($filterCategory == 'all') {
		$boxes1.removeClass('is-animated')
		.fadeOut().promise().done(function() {
			$boxes1.addClass('is-animated').fadeIn();
		});
	} else {
		$boxes1.removeClass('is-animated')
		.fadeOut().promise().done(function() {
			$boxes1.filter('[data-category = "' + $filterCategory + '"]')
			.addClass('is-animated').fadeIn();
		});
	}
});

var $filters2 = $('.day2 [data-filter]'),
	$boxes2 = $('.day2 [data-category]');

$filters2.on('click', function(e) {
	e.preventDefault();
	var $this = $(this);
	$filters2.removeClass('active');
	$this.addClass('active');

	var $filterCategory = $this.attr('data-filter');

	if ($filterCategory == 'all') {
		$boxes2.removeClass('is-animated')
		.fadeOut().promise().done(function() {
			$boxes2.addClass('is-animated').fadeIn();
		});
	} else {
		$boxes2.removeClass('is-animated')
		.fadeOut().promise().done(function() {
			$boxes2.filter('[data-category = "' + $filterCategory + '"]')
			.addClass('is-animated').fadeIn();
		});
	}
});

// load animation
window.addEventListener('load', function () {  
    setTimeout( () => {

window.sr = ScrollReveal();

sr.reveal( '.animf', { duration: 700 ,delay :100, scale: 1.0 ,opacity: 0,});


sr.reveal( '.anim-lead-main', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :800 ,opacity: 0,});
sr.reveal( '.anim-lead-sub', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :900 ,opacity: 0,});

sr.reveal('.anim-parent', {
	duration: 1,
	distance: '30px',
	easing: 'ease-in',
	origin: 'left',
	viewFactor: 0.5,
	opacity: 0,
	afterReveal: function (el) { el.classList.add('is-visible') },
	afterReset: function (el) { el.classList.remove('is-visible') },
}, 150)

sr.reveal( '.anim1', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :0 ,opacity: 0,});
sr.reveal( '.anim2', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :100 ,opacity: 0,});
sr.reveal( '.anim3', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :200 ,opacity: 0,});
sr.reveal( '.anim4', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :300 ,opacity: 0,});
sr.reveal( '.anim5', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :400 ,opacity: 0,});
sr.reveal( '.anim6', { origin: 'left' , distance: '30px', duration: 1000 , scale: 1.0, delay :500 ,opacity: 0,});

sr.reveal( '.animf1', { duration: 1000 , scale: 1.0, delay :300 ,opacity: 0,});
sr.reveal( '.animf2', { duration: 1000 , scale: 1.0, delay :400 ,opacity: 0,});
sr.reveal( '.animf3', { duration: 1000 , scale: 1.0, delay :500 ,opacity: 0,});
sr.reveal( '.animf4', { duration: 1000 , scale: 1.0, delay :600 ,opacity: 0,});
sr.reveal( '.animf5', { duration: 1000 , scale: 1.0, delay :700 ,opacity: 0,});
sr.reveal( '.animf6', { duration: 1000 , scale: 1.0, delay :800 ,opacity: 0,});


    }, 100);
  });
