moment().format();

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
    frequency = $("#add-frequency").val().trim();

    time = $("#add-time").val().trim();
  
    var timeDisplay =  moment(time, "hmm").format("HH:mm");
    console.log(timeDisplay);
    //calculate difference between times
    var difference =  moment().diff(moment(timeDisplay),"minutes");

    //time apart(remainder)
    var trainRemain = difference % frequency;

    //minutes until arrival
    var minUntil = frequency - trainRemain;

    //next arrival time
    var nextArrival = moment().add(minUntil, "minutes").format('hh:mm');

    //;
    
    dataRef.ref().push({
        name,
        destination,
        time,
        timeDisplay,
        nextArrival,
        frequency,
    });
});

dataRef.ref().on(
    "child_added",
    function(childSnapshot) {       

        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainArrival = childSnapshot.val().nextArrival;
        var trainFrequency = childSnapshot.val().frequency;

        $(".table-div").prepend('<tr><td>'+trainName+'</td><td>'+trainDestination+'</td><td>'+trainFrequency+'</td><td>'+trainArrival+'</td><td>'+" Comming Up"+'</td><td><input type="button" value="X"></td></tr>');
    });


    // $("button").click(
    //     $(this).closest('tr').remove()
    //  );

