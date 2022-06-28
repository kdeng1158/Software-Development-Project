// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close_button = document.getElementById("close_changeprof");

var logout_button = document.getElementById("logout");
var delete_button = document.getElementById("delete_account");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

close_button.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var delete_modal = document.getElementById("deleteModal");

// Get the button that opens the modal
var btn_modal = document.getElementById("delete");

var close_delete = document.getElementById("cancel_delete");
// When the user clicks on the button, open the modal
btn_modal.onclick = function() {
  delete_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close_delete.onclick = function() {
  console.log("inside");
delete_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    delete_modal.style.display = "none";
  }
}

//log out
logout_button.onclick = function(){
  console.log("inside log out");
  location.replace("LoginPage.html");
} 
delete_button.onclick = function(){
  console.log("inside log out");
  location.replace("LoginPage.html");
} 