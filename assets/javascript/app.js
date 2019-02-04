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
    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    next = $("#next").val().trim();
    frequency = $("#frequency").val().trim();

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
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().next);
        console.log(childSnapshot.val().frequency);

        // $("#current-train-name").append(
        //     "<div class='well'><span class='member-name'> " +
        //     childSnapshot.val().name +
        //     " </span><span class='member-email'> " +
        //     childSnapshot.val().destination +
        //     " </span><span class='member-age'> " +
        //     childSnapshot.val().next +
        //     " </span><span class='member-comment'> " +
        //     childSnapshot.val().frequency +
        //     " </span></div>"
        //   );

        $("#current-train-name").prepend(childSnapshot.val().name);
        $("#current-train-destination").prepend(childSnapshot.val().destination);
        $("#current-train-frequency").prepend(childSnapshot.val().frequency);
        $("#current-train-next").prepend(childSnapshot.val().next);


    
    });