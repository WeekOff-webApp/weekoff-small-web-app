//===============================================================
            // Sign Up //
$("#signUp").one("click", function() {
	$("body").css("background-image", "url('images/grey.jpg')").css("background-repeat", "repeat");
	$("#text5").append("<p id='welc'>Welcome to MAAB Jobs</p>");
	$("#text5").append("<label>Username</label> <br> <input type='text' placeholder='Enter Username'> <br><br>",
		                    "<label>Password</label> <br> <input type='password' placeholder='Enter Password' required> <br><br>",
		                    "<label><input type='checkbox' checked='checked' name='remember' style='margin-bottom:15px'> Remember me</label> <br>",
		                    "<label>Gender:</label> <br> <input type='checkbox'>male <input type='checkbox'>female <br><br>",
		                    "<button id='click'>Sign Up</button> <br><br>"
		                    );
	$("#click").one("click", function() {
		$("body").css("background-image", "url('images/p.png')").css("background-repeat", "repeat");
		$("#text5").hide();
	                       });
              });  


//=================================================================
           // Home Button // 
       

            
