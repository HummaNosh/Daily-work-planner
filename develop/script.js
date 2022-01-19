console.log("hello");

var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

var times = ["9 am", "10am"];
var myTEXT = document.querySelector("#myText");
var saveBtn = document.querySelector(".saveBtn");
var hour9 = document.querySelector("#hr9");

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("button clicked");
  var texting = document.querySelector("#myText").value;
  localStorage.setItem("myText", myTEXT);
  var txt = localStorage.getItem("myText");
  myTEXT.textContent = txt;
});
