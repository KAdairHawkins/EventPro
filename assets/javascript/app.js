

$(document).ready(function(){
  $("#plan").on("click", function(){
    $("#events").css("display", "block");
  $('#attraction').append(`<div class="card" style="width: 20rem;">
 <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
 <div class="card-block">
   <h4 class="card-title">Card title</h4>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
</div>`);
$('#dayEvents').append(`<div class="card" style="width: 20rem;">
<img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
<div class="card-block">
 <h4 class="card-title">Card title</h4>
 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`);
$('#restaurants').append(`<div class="card" style="width: 20rem;">
<img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
<div class="card-block">
 <h4 class="card-title">Card title</h4>
 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`);
  });

var config = {
   apiKey: "AIzaSyAMUimYAFDg4Bw-b3hLlYtPYCZW2QGtNE0",
   authDomain: "event-guru-13a23.firebaseapp.com",
   databaseURL: "https://event-guru-13a23.firebaseio.com",
   projectId: "event-guru-13a23",
   storageBucket: "",
   messagingSenderId: "924347251636"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 var name = "";
 var location = "";
 var date = "";

$("#start").on("click", function(){
 event.preventDefault();
 name = $("#name").val().trim();
 location = $("#location").val().trim();
 date = $("#date").val().trim();

 var userToAdd = {
   username: name,
   location: location,
   date: date
 }

 database.ref().push(userToAdd);

});


function newEvent (place, time, date) {
 this.place = place;
 this.time = time;
 this.date = date;
}

$("#create-event").on("click", function(){
var calEvent = new newEvent(x,y,z);
});
});
