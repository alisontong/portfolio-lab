window.onload = function() {
var button = document.getElementById("contactButton");
button.addEventListener("click", function(event) {
	event.preventDefault();
  alert("subject:" + subject.value + " email:" + email.value + " message:" + message.value);
});
};