jQuery(document).ready(function($) 
{
	
	////////FORMULAIRE
    $(".infos").fadeOut();
	$("form").submit(function(){
	    var action = $(this).attr('action');
	    var company = $("#company").val();
	    var name = $("#name").val();
	    var job = $("#job").val();
	    var email = $("#email").val();
	    var message = $("#message").val();
	    
	  
	    $('a.button.submit').hide().after('<i class="fa fa-spinner fa-spin fa-2x"></i>');

	    $.post(action, {
			company: company, 
			name: name,
			job: job,
			email: email,
			message: message

	    }, function(data){
	    	if(data.match("bien") != null)
			{
				setTimeout(function (){
					$('a.button.submit').show();
			    	$('.fa-spin').remove();
					$(".infos").html(data).removeClass("error").addClass("success");
					$(".infos").fadeIn();
					setTimeout(function (){
						$("#company").val("");
						$("#name").val("");
						$("#job").val("");
						$("#email").val("");
						$("#message").val("");

					}, 1000);   
					setTimeout(function (){
						$(".infos").fadeOut();
						
					}, 3000);  
				}, 1000);     
			}
			else
			{
		    	$('a.button.submit').show();
		    	$('.fa-spin').remove();
				$(".infos").html(data).removeClass("success").addClass("error");
				$(".infos").fadeIn();
			}
	    });
	    return false;
	});







});
