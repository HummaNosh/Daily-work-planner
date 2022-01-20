console.log("hello");

// VARIABLES

var myTEXT = document.querySelector("#myText");
var saveBtn = $(".saveBtn");
var deleteBtn = document.querySelector(".deleteBtn");

// Todays Date

var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

// LOCAL STORAGE FUNCTION ------------------------------------------------------------------------------

$(document).ready(function () {
  // Save buttons job
  $(".saveBtn").on("click", function () {
    // Catch the value of 3rd 'dom' down, which is the user input value called description
    var myText = $(this).siblings(".description").val();

    // Catch the id of the 1st 'dom', which is the times, explained in the lines below
    var timings = $(this).parent().attr("id");

    // Below saves users input on the planner even after refreshing
    localStorage.setItem(timings, myText);
    // Log the activity
    console.log("button is clicked");
    console.log(myText);
    console.log(timings);
  });

  // Below are timing lines, without these each value wont save

  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));
  $("#6pm .description").val(localStorage.getItem("6pm"));
});

// -----------------------------------------------------------------------------------------------------------

// $(".deleteBtn").on("click", deleteitem());

// console.log("deletings");

// function deleteitem() {
//   localStorage.removeItem(timings, myText);
// }
var hourago = moment().hour();

console.log(hourago);
