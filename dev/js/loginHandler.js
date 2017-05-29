var Users = [];
var one = {firstName:"Rangel", lastName:"Ivanov", username:"radito3", password:"12345"};
var two = {firstName:"Boyan", lastName:"Dimitov", username:"bobi24"};
var three = {firstName:"Lachezar", lastName:"Zahariev", username:"lycezar"};
Users.push(one); Users.push(two); Users.push(three);

$("#submit").click(function () {
	for (var i = 0; i < Users.length; i++) {
		if (Users[i].username == $("#userName").val() && Users[i].password == $("#ipassword").val()) {
			window.location.replace("home.html");
		} else {
			alert("Incorrect username or password!");
			$("#userName").text("");
			$("#ipassword").text("");
		}
	}
})



/*if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    $("result").text(localStorage.getItem("lastname"));
} else {
    $("result").text("Sorry, your browser does not support Web Storage...");
}*/