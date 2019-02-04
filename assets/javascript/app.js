var config = {
    apiKey: "AIzaSyA-ZN9T8lIYXrK-n09vek14lhqquxx-MLE",
    authDomain: "fir-62d12.firebaseapp.com",
    databaseURL: "https://fir-62d12.firebaseio.com",
    projectId: "fir-62d12",
    storageBucket: "fir-62d12.appspot.com",
    messagingSenderId: "706269443831"
    };

firebase.initializeApp(config);

var dataRef = firebase.database();
var name = "";
var destination = "";
var next = "";
var frequency = 0;

$("#add-train").on("click", function(event) {
    event.preventDefault();
    name = $("#add-name").val().trim();
    destination = $("#add-destination").val().trim();
    next = $("#add-next").val().trim();
    frequency = $("#add-frequency").val().trim();

    dataRef.ref().push({
        name: name,
        destination: destination,
        next: next,
        frequency: frequency
    });
});

dataRef.ref().on(
    "child_added",
    function(childSnapshot) {       
        console.log(childSnapshot.val().name);

        $("#current-train-name").prepend("<div <p>"+ childSnapshot.val().name);
        $("#current-train-destination").prepend("<div <p>"+ childSnapshot.val().destination);
        $("#current-train-frequency").prepend("<div <p>"+ childSnapshot.val().frequency);
        $("#current-train-next").prepend("<div <p>"+ childSnapshot.val().next);


    
    });