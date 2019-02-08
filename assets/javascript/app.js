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

    var time = $("#add-time").val().trim();
    var timeDisplay =  moment(time, "hh:mm").subtract(1, "years").format("X");
        
    dataRef.ref().push({
        name: name,
        destination: destination,
        time: time,
        timeDisplay: timeDisplay,
        frequency: frequency,
    });
});

dataRef.ref().on("child_added", function(childSnapshot) {       

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().frequency;
    var difference =  moment().diff(timeDisplay, "minutes");
    var timeDisplay =  moment(time, "hh:mm").subtract(1, "years").format("X");
    var trainTime = moment.unix(timeDisplay).format("hh:mm");
    var trainRemain = difference % frequency;
    var minUntil = frequency - trainRemain;
    var nextArrival = moment().add(minUntil, "minutes").format('hh:mm');
    var currentTime = moment();
    var minAway = Math.ceil(moment.duration(nextArrival).asMinutes() - moment.duration(currentTime).asMinutes());

    $(".table-div").prepend('<tr><td>'+trainName+'</td><td>'+trainDestination+'</td><td>'+trainFrequency+'</td><td>'+nextArrival+'</td><td>'+minAway+'</td><td><input type="button" value="X"></td></tr>');
    });

    // ------BONUS DELETE ENTRY ----

    // $("button").click(
    //     $(this).closest('tr').remove()
    //  );

