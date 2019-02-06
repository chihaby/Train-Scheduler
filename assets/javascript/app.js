var config = {
    apiKey: "AIzaSyA-ZN9T8lIYXrK-n09vek14lhqquxx-MLE",
    authDomain: "fir-62d12.firebaseapp.com",
    databaseURL: "https://fir-62d12.firebaseio.com",
    projectId: "fir-62d12",
    storageBucket: "fir-62d12.appspot.com",
    messagingSenderId: "706269443831"
    };

firebase.initializeApp(config);

let dataRef = firebase.database();
let name = "";
let destination = "";
let time = "";
let frequency = 0;

$("#add-train").on("click", function(event) {
    event.preventDefault();
    name = $("#add-name").val().trim();
    destination = $("#add-destination").val().trim(); 
    time = $("#add-time").val().trim();
    frequency = $("#add-frequency").val().trim();
    dataRef.ref().push({
        name,
        destination,
        time,
        frequency,
    });
});

dataRef.ref().on(
    "child_added",
    function(childSnapshot) {       

        const trainName = childSnapshot.val().name;
        const trainDestination = childSnapshot.val().destination;
        const trainTime = childSnapshot.val().time;
        const trainFrequency = childSnapshot.val().frequency;

        $(".table-div").prepend('<tr><td>'+trainName+'</td><td>'+trainDestination+'</td><td>'+trainFrequency+'</td><td>'+trainTime+'</td><td>'+" Comming Up"+'</td><td><input type="button" value="X"></td></tr>');
    });

function rm() {
    $('input[type="button"]').click(function(e){
        $(this).closest('tr').remove()
     });
}   

rm();
     
  