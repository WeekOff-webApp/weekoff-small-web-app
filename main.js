//===============================================================
            // Sign Up //
var array = [];
$("#signUp").one("click", function() {
	$("body").css("background-image", "url('images/grey.jpg')").css("background-repeat", "repeat");
	$("#text5").append("<p id='welc'>Welcome to MAAB Jobs</p>");
	$("#text5").append("<label>Username</label> <br> <input type='text' placeholder='Enter Username' id='input1'> <br><br>",
		                    "<label>Password</label> <br> <input type='password' placeholder='Enter Password' required id='input2'> <br><br>",
		                    "<label><input type='checkbox' checked='checked' name='remember' style='margin-bottom:15px'> Remember me</label> <br>",
		                    "<label>Gender:</label> <br> <input type='checkbox'>male <input type='checkbox'>female <br><br>",
		                    "<button id='click'>Sign Up</button> <br><br>"
		                    );
	$("#click").one("click", function() {
		$("body").css("background-image", "url('images/p.png')").css("background-repeat", "repeat");
		$("#text5").hide();
	                       });
              }); 

function valuesOfSignUpInputs() {
	array.push($("#input1").val(), $("#input2").val());
	return array;
} 



//=================================================================
           // Home Button // 

$("#refresh").click( function() {
	window.location.reload();
});

//==================================================================
         // About Us //  

$("#about").one("click", function() {
	$("body").css("background-image", "url('images/grey.jpg')").css("background-repeat", "repeat");
	$("#text6").append("<h1>Find Your Job Now...</h1>",
                       "<p>You can easily find your dream job by this website!</p>",
                       "<p>Connect the world's professionals to make them more productive and successful. Finding and getting a job can be a challenging process. Posting your CV on MAAB Jobs is the first step for finding all over the world.</p>",
                       "<p>It`s free and easy! posting your CV is simple... upload it and you`re so closer to your JOB.</p>");
}); 

//====================================================================
        // Upload Your CV here //

