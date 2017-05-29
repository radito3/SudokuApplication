var Users = [];
var one = {firstName:"Rangel", lastName:"Ivanov", username:"radito3", password:"12345"};
var two = {firstName:"Boyan", lastName:"Dimitov", username:"bobi24", password:"12345"};
var three = {firstName:"Lachezar", lastName:"Zahariev", username:"lycezar", password:"12345"};
Users.push(one); Users.push(two); Users.push(three);

$(document).ready(function() {
	//$("#User-Name-Placeholder").val("Radito3");
	$("#isubmit").click(function () {
		$("#UserName").css("visibility", "hidden");
		$("#ipassword").css("visibility", "hidden");
	}
})

$("#isubmit").click(function () {
	window.location.replace("home.html");
	for (var i = 0; i < Users.length; i++) {
		if (Users[i].username == $("#UserName").val() && Users[i].password == $("#ipassword").val()) {

		} else {
			alert("Incorrect username or password!");
			$("#UserName").text("");
			$("#ipassword").text("");
		}
	}
})

