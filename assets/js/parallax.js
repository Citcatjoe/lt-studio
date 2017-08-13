jQuery(document).ready(function($) 
{
	
	var $headerBgImg = $('.intro-bg');
	var controller = new ScrollMagic.Controller({});

	setIntroDone();
	function setIntroDone(){
		var scenef = new ScrollMagic.Scene({
			triggerHook: 'onEnter',
			duration: '100%',
			offset: 0
		})
			.setTween($headerBgImg, {yPercent: '30%', ease: Power0.easeInOut}) 
			//.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
			.addTo(controller);
	}


	var $parallaxBgOne = $('.parallax-bg-one');
	var controller1 = new ScrollMagic.Controller({});

	initParallax();
	function initParallax(){
		var scenefd = new ScrollMagic.Scene({
			triggerElement: '.parallax-trigger-one',
			triggerHook: 'onEnter',
			duration: '200%',
			offset: 0
		})
			//.set([$parallaxBgOne], {top: '-1000px'})
			.setTween($parallaxBgOne, {bottom: '-60%', ease: Power0.easeInOut}) 
			.addIndicators({name: "2 (DIV PARALLAX MEC)"}) // add indicators (requires plugin)
			.addTo(controller1);
	}


	var $parallaxBgTwo = $('.parallax-bg-two');
	var controller2 = new ScrollMagic.Controller({});

	initParallax2();
	function initParallax2(){
		var scenefd = new ScrollMagic.Scene({
			triggerElement: '.parallax-trigger-two',
			triggerHook: 'onEnter',
			duration: '200%',
			offset: 0
		})
			//.set([$parallaxBgTwo], {top: '-1000px'})
			.setTween($parallaxBgTwo, {bottom: '-60%', ease: Power0.easeInOut}) 
			.addIndicators({name: "2 (DIV PARALLAX MEC)"}) // add indicators (requires plugin)
			.addTo(controller2);
	}


	// var $parallaxBgThree = $('.parallax-bg-three');
	// var controller3 = new ScrollMagic.Controller({});

	// initParallax3();
	// function initParallax3(){
	// 	var scenefd = new ScrollMagic.Scene({
	// 		triggerElement: '.parallax-trigger-three',
	// 		triggerHook: 'onEnter',
	// 		duration: '170%',
	// 		offset: 0
	// 	})
	// 		//.set([$parallaxBgThree], {top: '-1000px'})
	// 		.setTween($parallaxBgThree, {bottom: '-60%', ease: Power0.easeInOut}) 
	// 		.addIndicators({name: "2 (DIV PARALLAX MEC)"}) // add indicators (requires plugin)
	// 		.addTo(controller2);
	// }







});
