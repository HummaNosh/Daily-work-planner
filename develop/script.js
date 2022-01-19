console.log("hello");

var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

var times = ["9 am", "10am"];
var myTEXT = document.querySelector("#myText");
var saveBtn = document.querySelector(".saveBtn");
var hour9 = document.querySelector("#hr9");
renderLastRegistered();

function renderLastRegistered() {
  var texting = localStorage.getItem("myText");

  if (!texting) {
    return;
  }
  myTEXT.textContent = texting;
}

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("button clicked");
  var text = document.querySelector("#myText").value;

  localStorage.setItem("myText", text);
  renderLastRegistered();
  console.log(text);
});

// $("#9 #myText").val(localStorage.getItem("9"));

// $("#save").on("click", function () {
//   var text = $("#myText").val();
//   console.log("button cilicked");
//   // localStorage.setItem(text);
//   localStorage.setItem("myText", text);
// });
