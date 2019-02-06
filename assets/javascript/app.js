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
let next = "";
let frequency = 0;

$("#add-train").on("click", function(event) {
    event.preventDefault();
    name = $("#add-name").val().trim();
    destination = $("#add-destination").val().trim();
    next = $("#add-next").val().trim();
    frequency = $("#add-frequency").val().trim();

    dataRef.ref().push({
        name,
        destination,
        next,
        frequency,
    });
});

dataRef.ref().on(
    "child_added",
    function(childSnapshot) {       
       
        const trainName = childSnapshot.val().name;
        const trainDestination = childSnapshot.val().destination;
        const trainNext = childSnapshot.val().next;
        const trainFrequency = childSnapshot.val().frequency;

        $(".table-div").prepend('<tr><td>'+trainName+'</td><td>'+trainDestination+'</td><td>'+trainNext+'</td><td>'+trainFrequency+'</td></tr><br>');

        console.log(trainName);
    
    });