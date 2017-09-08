jQuery(document).ready(function($) 
{
	var $overlay =('.overlay');
	var tlIntro = new TimelineMax();

	tlIntro
		.to($overlay, 1, {backgroundColor: '#FCCC04'}, '+=1.5')
		.to($overlay, 0.5, {yPercent: '-100'});

		

	// $(".logo").on('click', function(e) {
	// 	$('html, body').animate({
	// 	   scrollTop:$('#intro').offset().top
	// 	}, 1000);
	// });
	
	
	// MENU MOBILE
	$(".hamburger").on('click', function(e) {
		$(this).fadeOut();
		$('.cross').fadeIn();
		$('.nav-mobile').fadeIn(); 
	});

	$(".cross, .nav-mobile ul li a").on('click', function(e) {
		$('.cross').fadeOut();
		$('.hamburger').fadeIn();
		$('.nav-mobile').fadeOut();
	});

	


	var tlProjectOpening =  new TimelineMax();
	var $body = $('body');
	var $wrapper = $('#wrapper');
	var $articleReader = $('.article-reader');
	
	var dataUrl;
	



	$(".spotlights .brick").on('click', function(e) {
		
		dataUrl = $(this).attr('data-url');
		//alert(dataUrl);
		$articleReader.load('../../load/' + dataUrl + '?' + Date.now(), function(){
			fireAnimChecker();
		});
		event.preventDefault();
	});

	function fireAnimChecker(){
		if($body.hasClass('is-animating'))
		{

		}
		else
		{
			fireAnim();
		}
	}

	function fireAnim(){

		var $articleReaderHeader = $articleReader.find('.article-reader-header');
		var $articleReaderBody = $articleReader.find('.article-reader-body');
		var $articleReaderHeaderInner = $articleReaderHeader.find('.article-reader-header-inner');
		var $articleReaderBodyInner = $articleReaderBody.find('.article-reader-body-inner');
		var $articleBack = $('.article-back');
		var $articleBackMobile = $('.article-back-mobile');

		if ($(window).width() > 1000) {
			
			if($wrapper.hasClass('is-faded'))
			{
				$wrapper.removeClass('is-faded');
				tlProjectOpening
					
					//.to([$articleBack], 0.3, {scale: 0, ease: Back.easeIn.config(5)})
					.to($body, 0, {css:{className:'+=is-animating'}})
					.to([$articleReaderHeaderInner, $articleReaderBodyInner], 0.75, {autoAlpha:0, ease: Power4.easeOut})
					//.to([$articleReaderHeaderInner], 0.75, {autoAlpha: 0, ease: Power4.easeOut})
					.to($articleReaderBody, 0, {css:{className:'-=is-scrollable'}})
					.to($articleReader, 0, {css:{className:'-=is-scrollable'}})
					.to([$articleReaderHeader], 0.75, {yPercent: '100', ease: Power4.easeOut})
					.to([$articleReaderBody], 0.75, {yPercent: '-100', ease: Power4.easeOut}, '-=0.75')
					.to([$wrapper], 0.75, {autoAlpha: 1, scale: 1, ease: Power4.easeOut})
					.to([$articleReader], 0, {zIndex: 0})
					.to($body, 0, {css:{className:'-=is-overflow-hidden'}})
					.to($body, 0, {css:{className:'-=is-animating'}});
			}
			else
			{
				tlProjectOpening
					.set([$articleReaderHeader], {yPercent: '100'})
					.set([$articleReaderBody], {yPercent: '-100'})
					.set([$articleReaderHeaderInner], {autoAlpha: 0})
					.set([$articleReaderBodyInner], {autoAlpha: 0})
					//.set([$articleBack], {scale: 0});

				$wrapper.addClass('is-faded');
				tlProjectOpening
					.to($body, 0, {css:{className:'+=is-animating'}})
					.to($body, 0, {css:{className:'+=is-overflow-hidden'}})
					.to([$articleReader], 0, {zIndex: 2})
					.to([$wrapper], 0.75, {autoAlpha: 0.75, scale: 0.9, ease: Power4.easeOut})
					.to([$articleReaderHeader, $articleReaderBody], 0.75, {yPercent: '0', ease: Power4.easeOut})
					.to([$articleReaderHeaderInner], 0.75, {autoAlpha: 1, ease: Power4.easeOut})
					.to([$articleReaderBodyInner], 0.75, {autoAlpha: 1, ease: Power4.easeOut})
					//.to([$articleBack], 0.75, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)})
					.to($articleReader, 0, {css:{className:'+=is-scrollable'}})
					.to($articleReaderBody, 0, {css:{className:'+=is-scrollable'}})
					.to($body, 0, {css:{className:'-=is-animating'}});
			}
		}
		else
		{
			if($wrapper.hasClass('is-faded'))
			{
				$wrapper.removeClass('is-faded');
				tlProjectOpening
					
					//.to([$articleBack], 0.3, {scale: 0, ease: Back.easeIn.config(5)})
					.to($body, 0, {css:{className:'+=is-animating'}})
					.to([$articleReaderHeaderInner, $articleReaderBodyInner], 0.75, {autoAlpha:0, ease: Power4.easeOut})
					//.to([$articleReaderHeaderInner], 0.75, {autoAlpha: 0, ease: Power4.easeOut})
					.to($articleReaderBody, 0, {css:{className:'-=is-scrollable'}})
					.to($articleReader, 0, {css:{className:'-=is-scrollable'}})
					.to([$articleReaderHeader], 0.75, {xPercent: '100', ease: Power4.easeOut})
					.to([$articleReaderBody], 0.75, {xPercent: '-100', ease: Power4.easeOut}, '-=0.75')
					.to([$wrapper], 0.75, {autoAlpha: 1, scale: 1, ease: Power4.easeOut})
					.to([$articleReader], 0, {zIndex: 0})
					.to($body, 0, {css:{className:'-=is-overflow-hidden'}})
					.to($body, 0, {css:{className:'-=is-animating'}});
			}
			else
			{
				tlProjectOpening
				.set([$articleReaderHeader], {xPercent: '-100', yPercent: '0'})
				.set([$articleReaderBody], {xPercent: '100', yPercent: '0'})
				.set([$articleReaderHeaderInner], {autoAlpha: 0})
				.set([$articleReaderBodyInner], {autoAlpha: 0})
				//.set([$articleBack], {scale: 0});;

				$wrapper.addClass('is-faded');
				tlProjectOpening
					.to($body, 0, {css:{className:'+=is-animating'}})
					.to($body, 0, {css:{className:'+=is-overflow-hidden'}})
					.to([$articleReader], 0, {zIndex: 2})
					.to([$wrapper], 0.75, {autoAlpha: 0.75, scale: 0.9, ease: Power4.easeOut})
					.to([$articleReaderHeader, $articleReaderBody], 0.75, {xPercent: '0', ease: Power4.easeOut})
					.to([$articleReaderHeaderInner], 0.75, {autoAlpha: 1, ease: Power4.easeOut})
					.to([$articleReaderBodyInner], 0.75, {autoAlpha: 1, ease: Power4.easeOut})
					//.to([$articleBack], 0.75, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)})
					.to($articleReader, 0, {css:{className:'+=is-scrollable'}})
					.to($articleReaderBody, 0, {css:{className:'+=is-scrollable'}})
					.to($body, 0, {css:{className:'-=is-animating'}});
			}
		}

		$articleBack.on('click', function(e) {
			fireAnim();
		});

		// $articleBackMobile.on('click', function(e) {
		// 	fireAnim();
		// 	event.preventDefault();
		// });
		event.preventDefault();
	}

	//BOUTONS PROJETS
	// $(".spotlights .button").on('click', function(e) {
		

	// 	var $isPresent = $('.is-present');
	// 	if($isPresent.length > 0)
	// 	{
	// 		console.log('supérieur à 0');
	// 		var $openProject = $('.is-present').parent(),
	// 			$openprojectDesc = $openProject.find('p'),
	// 			$openProjectActions = $openProject.find('.actions'),
	// 			$openProjectUl = $openProject.find('.details'),
	// 			$openProjectUlLi = $openProject.find('.details li'),
	// 			$openProjectCloseDetails = $('.is-present');

	// 		var $project = $(this).parent().parent().parent().parent().parent();
	// 		$projectDesc = $project.find('p');
	// 		$projectActions = $project.find('.actions');
	// 		$projectUl = $project.find('.details.is-hidden');
	// 		$projectUlLi = $project.find('.details li');
	// 		$projectCloseDetails = $project.find('.close-details');

	// 			tlProjectOpening
	// 				.set($openProject, {className: '-=is-open'})
	// 				.to($openProjectCloseDetails, 0.3, {autoAlpha: 0})
	// 				.staggerTo($openProjectUlLi, 0.1, {autoAlpha: 0}, 0)
	// 				.set($openProjectCloseDetails, {className: '-=is-present'})
	// 				.set($openProjectUl, {className: '+=is-hidden'})
	// 				.to($openprojectDesc, 0.3, {autoAlpha: 1, y: '0px'})
	// 				.to($openProjectActions, 0.3, {autoAlpha: 1, y: '0px'})

	// 				.set([$projectUlLi], {autoAlpha: 0})
	// 				.to($projectActions, 0.3, {autoAlpha: 0, y: '15px'})
	// 				.to($projectDesc, 0.3, {autoAlpha: 0, y: '15px'})
	// 				.set($project, {className: '+=is-open'})
	// 				.set($projectUl, {className: '-=is-hidden'})
	// 				.set($projectCloseDetails, {className: '+=is-present'})
	// 				.staggerTo($projectUlLi, 0.3, {autoAlpha: 1}, 0.2, '+=0.7')
	// 				.to($projectCloseDetails, 0.3, {autoAlpha: 1}, '+=1.0');
	// 				;

	// 		$isPresent = null;		

	// 		event.preventDefault();
	// 	}
	// 	else
	// 	{
	// 		var $project = $(this).parent().parent().parent().parent().parent();
	// 		$projectDesc = $project.find('p');
	// 		$projectActions = $project.find('.actions');
	// 		$projectUl = $project.find('.details.is-hidden');
	// 		$projectUlLi = $project.find('.details li');
	// 		$projectCloseDetails = $project.find('.close-details');

	// 		console.log('égale à 0');
	// 		tlProjectOpening
	// 			.set([$projectUlLi], {autoAlpha: 0})
	// 			.to($projectActions, 0.3, {autoAlpha: 0, y: '15px'})
	// 			.to($projectDesc, 0.3, {autoAlpha: 0, y: '15px'})
	// 			.set($project, {className: '+=is-open'})
	// 			.set($projectUl, {className: '-=is-hidden'})
	// 			.set($projectCloseDetails, {className: '+=is-present'})
	// 			.staggerTo($projectUlLi, 0.3, {autoAlpha: 1}, 0.2, '+=0.7')
	// 			.to($projectCloseDetails, 0.3, {autoAlpha: 1}, '+=1.0');

	// 		$isPresent = null;		

	// 		event.preventDefault();
	// 	}
	// });

	// $(".close-details").on('click', function(e) {
	// 	closeProject($(this));
	// 	var $project = $(this).parent();
	// 	$projectDesc = $project.find('p');
	// 	$projectActions = $project.find('.actions');
	// 	$projectUl = $project.find('.details');
	// 	$projectUlLi = $project.find('.details li');
	// 	$projectCloseDetails = $(this);

	// 	tlProjectOpening
	// 		.set($project, {className: '-=is-open'})
	// 		.to($projectCloseDetails, 0.3, {autoAlpha: 0})
	// 		.staggerTo($projectUlLi, 0.1, {autoAlpha: 0}, 0)
	// 		.set($projectCloseDetails, {className: '-=is-present'})
	// 		.set($projectUl, {className: '+=is-hidden'})
	// 		.to($projectDesc, 0.3, {autoAlpha: 1, y: '0px'})
	// 		.to($projectActions, 0.3, {autoAlpha: 1, y: '0px'});

	// 	event.preventDefault();
	// });

	function closeProject(e){

	}

	// // CLIGNOTEMENT DU SCROLLSIGNAL
	// var $scrollIndicator = $('.scroll-indicator-inner'),
	// 	tlScrollIndicatorInnerBLink;

	// tlScrollIndicatorInnerBLink =  new TimelineMax({repeat: -1, repeatDelay: 0});

	// tlScrollIndicatorInnerBLink
	// 	//.set($scrollIndicator, {autoAlpha: 0})
	// 	.to($scrollIndicator, 0.3, {autoAlpha: 1, ease: Power4.easeInOut})
	// 	.to($scrollIndicator, 1.5, {autoAlpha: 0.65, ease: Linear.easeNone});
		
	var $numbers = $('.numbers'),
		numbersDone = false;
	

	$(window).scroll(function(){
    	if ( $numbers.is(':in-viewport') && numbersDone ==false) {
		  	$('.numbers h4 span').counterUp({
				delay: 10, // the delay time in ms
				time: 1500 // the speed time in ms
			});
			numbersDone = true;
		}
		
	});

	// VIDEO CONTROL
	// starts header video automatically
	// $videoHeader = $('#intro video');
	// setTimeout(function() 
	// {
	// 	$videoHeader[0].play();
	// }, 1000);

	$("a.image").on('click', function(e) {
		//event.preventDefault();
	});



	$("[data-fancybox]").fancybox({
		// Options will go here
	});
	
	// init controller
	//var controller = new ScrollMagic.Controller();
	//var scene = new ScrollMagic.Scene({
	//	triggerElement: ".content",
	//	offset: -140
	//})
	//.setTween(".content", 0.5, {backgroundColor: "green"}) // trigger a TweenMax.to tween
	////.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
	//.addTo(controller);

	
	
	
    

	// // AUTO START VIDEOS OLD WORK FIN WITH ONE VID BUT NOT MORE
	// // My test video in a var
	// var $videoSection = $('section.video');
	// var $video = $videoSection.find('video');
	// // Storing video height to calculate trigger position
	// var $videoH = $videoSection.height();
	// //console.log($video);


	// // Creating controller
	// var ctrl = new ScrollMagic.Controller({
 //        globalSceneOptions: {
 //            triggerHook: 'onCenter',
 //            triggerElement: "section.video"
 //        }
 //    });

	// // Video starts (from top)
	// new ScrollMagic.Scene({
	//   offset: $videoH/2.3
	// })
	// //.setClassToggle("video", "is-active")
	// //.addIndicators({name: "video starts"}) // add indicators (requires plugin)
	// .addTo(ctrl)
	// .on("enter", function (e) {
	// 	$video[0].play();	
	// });

	// // Video starts (from bottom)
	// new ScrollMagic.Scene({
	//   offset: $videoH/1.7
	// })
	// //.setClassToggle("video", "is-active")
	// //.addIndicators({name: "video starts"}) // add indicators (requires plugin)
	// .addTo(ctrl)
	// .on("leave", function (e) {
	// 	$video[0].play();	
	// });

	// // Video Stops
	// new ScrollMagic.Scene({
	//   offset: 0
	// })
	// //.addIndicators({name: "video stops"}) // add indicators (requires plugin)
	// .addTo(ctrl)
	// .on("leave", function (e) {
	// 	$video[0].pause();	
	// });

	// // Video Stops
	// new ScrollMagic.Scene({
	//   offset: $videoH
	// })
	// //.setClassToggle("video", "is-active")
	// //.addIndicators({name: "video stops"}) // add indicators (requires plugin)
	// .addTo(ctrl)
	// .on("enter", function (e) {
	// 	$video[0].pause();	
	// });
	


	


	
	

	

	










	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.test(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".hamburger").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
