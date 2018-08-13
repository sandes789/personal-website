$(function() {
	$("#cont_submit").click(function(e) {
		e.preventDefault();
		$("#cont_form").submit();
	});

	$("#cont_form").validate({
		rules: {
			name: "required",	
			email: {
				required: true,
				email: true
			},
			
			subject:{
				required: true,
			},
			message: {
				required: true
			}
		},
		
		messages: {
			name: "Please Enter Your Name",

			email: {
				required: "Please Enter Valid Email",
				email: "Invalid email",
			},

			
			subject:{
				required: "Please Enter Subject",
				number: "Invalid input",
				minlength: "Invalid input",
				maxlength: "Invalid input",
			},

			message: {
				required: "Please Enter Your Message"
			}
		},

		errorPlacement: function(error, element) {
			element.addClass("error");
			error.insertAfter(element);
		},

		submitHandler: function(form){
			var url = "includes/process_contactus.php" ;
			var data = $(form).serialize();
			$.ajax({
			  url: url,
			  data: data,
			  type: 'POST',
			  
			  beforeSend : function(){
					$("#before").show();
				},

			  success: function(response) {
					
					if( response == 1) {
						$('#success').show();
						$("#before").hide();
							
						$('#cont_form').each(function(){
							this.reset();
						});
						setTimeout(function () {
							$('#success').hide();
						}, 4000);
					}

					else {
						var msg = 'Error sending mail.';
						
						$('#success').hide();
						$("#before").hide();
						$("#errormsg").show();
						$('#cont_form').each(function(){
								this.reset();
						});
						setTimeout(function () {
							$('#errormsg').hide();
						}, 4000);
					}
				}
			});
		},
	});
});