var currentDay = moment().format("dddd" + ", " + "MMMM Do" + ", " + "YYYY" + "," + "HH" + ":" + "mm");

$("#currentDay").append(currentDay);

//change colours
function changeColour(){
    var currentHour = parseInt(moment().format('hh'));
    for(let i = 0; i < 9; i++){
        var hourText = document.getElementsByClassName("col-1 col-xs-1 hour")[i].innerHTML;
        var num = hourText.replace(/[^0-9]/g,'');
        
        // if selected time row is before the current hour, make grey by adding grey class 
        // else if it is the present time make it red
        // else make it green if it hasn't come up yet
        if(num < currentHour){
            //background grey
            $("#" + i + "pm-text").addClass("grey");
        } else if (num == currentHour){
            // background red
            $("#" + i + "pm-text").addClass("red");
        } else if (num > currentHour) {
            // background green
            $("#" + i + "pm-text").addClass("green");
        }
    }
}

changeColour();

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});

// get saved data from local storage (if there is any)
$("#9am-row .description").val(localStorage.getItem("9am-row"));
$("#10am-row .description").val(localStorage.getItem("10am-row"));
$("#11am-row .description").val(localStorage.getItem("11am-row"));
$("#12pm-row .description").val(localStorage.getItem("12pm-row"));
$("#1pm-row .description").val(localStorage.getItem("1pm-row"));
$("#2pm-row .description").val(localStorage.getItem("2pm-row"));
$("#3pm-row .description").val(localStorage.getItem("3pm-row"));
$("#4pm-row .description").val(localStorage.getItem("4pm-row"));
$("#5pm-row .description").val(localStorage.getItem("5pm-row"));