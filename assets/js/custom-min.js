jQuery(document).ready(function($){function e(){n[0].play()}function a(){d.hasClass("is-animating")||s()}function s(){var e=w.find(".article-reader-header"),s=w.find(".article-reader-body"),t=e.find(".article-reader-header-inner"),o=s.find(".article-reader-body-inner"),l=$(".article-back"),n=$(".article-back-mobile");$(window).width()>1e3?m.hasClass("is-faded")?(m.removeClass("is-faded"),u.to(d,0,{css:{className:"+=is-animating"}}).to([r],.75,{autoAlpha:0,ease:Power4.easeOut}).to([c],.75,{autoAlpha:1,ease:Power4.easeOut},"-=0.75").to([t,o],.75,{autoAlpha:0,ease:Power4.easeOut},"-=0.75").to(s,0,{css:{className:"-=is-scrollable"}}).to(w,0,{css:{className:"-=is-scrollable"}}).to([e],.75,{yPercent:"100",ease:Power4.easeOut}).to([s],.75,{yPercent:"-100",ease:Power4.easeOut},"-=0.75").to([m],.75,{autoAlpha:1,scale:1,ease:Power4.easeOut},"-=0.5").to([w],0,{zIndex:0}).to(d,0,{css:{className:"-=is-overflow-hidden"}}).to(d,0,{css:{className:"-=is-animating"}})):(u.set([e],{yPercent:"100"}).set([s],{yPercent:"-100"}).set([t],{autoAlpha:0}).set([o],{autoAlpha:0}),m.addClass("is-faded"),u.to(d,0,{css:{className:"+=is-animating"}}).to(d,0,{css:{className:"+=is-overflow-hidden"}}).to([w],0,{zIndex:2}).to([m],.75,{autoAlpha:.75,scale:.9,ease:Power4.easeOut}).to([e,s],.75,{yPercent:"0",ease:Power4.easeOut},"-=0.5").to([t],.5,{autoAlpha:1,ease:Power4.easeOut}).to([o],.5,{autoAlpha:1,ease:Power4.easeOut},"-=0.5").to([c],.75,{autoAlpha:0,ease:Power4.easeOut},"-=0.5").to([r],.75,{autoAlpha:1,ease:Power4.easeOut},"-=0.75").to(w,0,{css:{className:"+=is-scrollable"}}).to(s,0,{css:{className:"+=is-scrollable"}}).to(d,0,{css:{className:"-=is-animating"}})):m.hasClass("is-faded")?(m.removeClass("is-faded"),u.to(d,0,{css:{className:"+=is-animating"}}).to(d,0,{css:{className:"-=is-overflow-hidden"}}).to([r],.75,{autoAlpha:0,ease:Power4.easeOut}).to([i],.75,{autoAlpha:1,ease:Power4.easeOut},"-=0.75").to([t,o],.75,{autoAlpha:0,ease:Power4.easeOut},"-=0.75").to(s,0,{css:{className:"-=is-scrollable"}}).to(w,0,{css:{className:"-=is-scrollable"}}).to([e],.75,{xPercent:"100",ease:Power4.easeOut}).to([s],.75,{xPercent:"-100",ease:Power4.easeOut},"-=0.75").to([m],.75,{autoAlpha:1,scale:1,ease:Power4.easeOut},"-=0.5").to([w],0,{zIndex:0}).to(d,0,{css:{className:"-=is-animating"}}),f>0&&window.setTimeout(function(){window.scrollTo(0,f),f=0},200)):(f=window.pageYOffset,u.set([e],{xPercent:"-100",yPercent:"0"}).set([s],{xPercent:"100",yPercent:"0"}).set([t],{autoAlpha:0}).set([o],{autoAlpha:0}),m.addClass("is-faded"),u.to(d,0,{css:{className:"+=is-animating"}}).to([w],0,{zIndex:2}).to([m],.75,{autoAlpha:.75,scale:.9,ease:Power4.easeOut}).to([e,s],.75,{xPercent:"0",ease:Power4.easeOut},"-=0.5").to([t],.75,{autoAlpha:1,ease:Power4.easeOut}).to([o],.75,{autoAlpha:1,ease:Power4.easeOut},"-=0.75").to([i],.75,{autoAlpha:0,ease:Power4.easeOut},"-=0.75").to([r],.75,{autoAlpha:1,ease:Power4.easeOut},"-=0.75").to(w,0,{css:{className:"+=is-scrollable"}}).to(s,0,{css:{className:"+=is-scrollable"}}).to(d,0,{css:{className:"+=is-overflow-hidden"}}).to(d,0,{css:{className:"-=is-animating"}})),l.on("click",function(e){a(),e.preventDefault()}),event.preventDefault()}function t(){alert("test")}function o(e){}var l=$(".overlay"),n=$("#intro .intro-bg video"),c=$("nav"),i=$(".hamburger"),r=$(".cross2");(new TimelineMax).to(l,1,{backgroundColor:"#FCCC04",onComplete:e},"+=1.5").to(l,.5,{yPercent:"-100"}),$(".hamburger").on("click",function(e){$(this).fadeOut(),$(".cross").fadeIn(),$(".nav-mobile").fadeIn()}),$(".cross, .nav-mobile ul li a").on("click",function(e){$(".cross").fadeOut(),$(".hamburger").fadeIn(),$(".nav-mobile").fadeOut()});var u=new TimelineMax,d=$("body"),m=$("#wrapper"),w=$(".article-reader"),f=0,h;$(".spotlights .brick").on("click",function(e){h=$(this).attr("data-url"),w.load("../../load/"+h+"?"+Date.now(),function(){a()}),e.preventDefault()}),$(r).on("click",function(e){a()});var P=$(".numbers"),p=!1;$(window).scroll(function(){P.is(":in-viewport")&&0==p&&($(".numbers h4 span").counterUp({delay:10,time:1500}),p=!0)}),$("a.image").on("click",function(e){}),$("[data-fancybox]").fancybox({})});