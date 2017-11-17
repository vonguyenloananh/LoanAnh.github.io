$(document).ready(function(){	
	var date = new Date().getDate();
	var month = new Date().getMonth();
	var year = new Date().getFullYear();
	$("#day-present").val((month + 1) + "/" + date + "/" + year);
	//$("#day-present") calen({
		//showAmin: "slide"
	//});

	var checkInputUsername = false;
	var checkIntputPassword = false;
	var checkIntputEmail = false;
	var checkIntputBirthday = false;
	
	var username = $("#username");
	var password = $("#password");
	var email = $("#email");
	var birthday = $("#day-present")
	
	var errorUsername = $("#validate_user");
	var errorPassword = $("#validate_pass");
	var errorEmail = $("#validate_email");
	var errorBirthday = $("#validate_day");
	var date = $("#day-present").val();

	$("#btn_sbm").click(function(){
		if (username.val() == "" || username.val() == null) {				/* Check Format Username*/					
			errorUsername.html("Please enter username");
			checkInputUsername = false;
		} else if (username.val().length < 8) {
			errorUsername.html("Username min length 8 letter");
			checkInputUsername = false;
		} else if (!checkValidate(username.val())) {
			errorUsername.html("Username have some special character!");
			checkInputUsername = false;
		} else {
			errorUsername.html("OK");
			checkInputUsername = true;
		}

		if (password.val() == "" || password.val() == null) {				/* Check Format Password*/	
			errorPassword.html("Please enter password");
			checkInputPassword = false;
		} else if (password.val().length < 8) {
			errorPassword.html("Password min length 8 letter");
			checkInputPassword = false;
		} else if (!checkValidate(password.val())) {
			errorPassword.html("Password wrong format");
			checkInputPassword = false;
		} else {
			errorPassword.html("OK");
			checkInputPassword = true;
		}


		if (email.val() == "" || email.val() == null) {						/* Check Format Email*/	
			errorEmail.html("Please enter email");
			checkInputEmail = false;
		} else if (!checkValidateEmail(email.val())) {
			errorEmail.html("Email wrong format");
			checkInputEmail = false;
		} else {
			errorEmail.html("OK");
			checkInputEmail = true;
		}
		
		if (!checkValidateBirthday(birthday.val())) {						/* Check Format Birthday*/	
			errorBirthday.html("Birthday wrong format");
			checkIntputBirthday  = false;
		} else {
			errorBirthday.html("OK");
			checkIntputBirthday = true;
		}
		
		if (checkInputUsername && checkInputPassword && checkInputEmail && checkIntputBirthday) {
			$.ajax({
				method: "GET",
				url: "test.php?username=" + username.val(),
				dateType: "html"
			}).done(function(messenger) {
				if (messenger == "true") {
					$("#results").html("Username is Emplty");
					$("#results").css({
						color: "rgb(249,127,127)",
						fontsize: "20px;"
					});
				} else {
					$("#results").html("Successful!!!");
					$("#results").css({
						color: "rgb(49,171,70)",
						fontsize: "20px;"
					});
				}
			});
		}
	});
	
	$("#btn_ref").click(function() {
		$("#day-present").val("");
		$("#username").val("");
		$("#password").val("");
		$("#email").val("");
		
		$("#validate_day").html("");
		$("#validate_user").html("");
		$("#validate_pass").html("");
		$("#validate_email").html("");
		$("#validate_day").html("");
	});
	
function checkValidateEmail(email) {
	var results = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,6}$/;
	return results.test(email);
}

function checkValidateBirthday (date) {
	var results = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	return results.test(date);
}

function checkValidate(text) {
	var results = /^([0-9a-zA-Z])+$/;
	return results.test(text);
}

});