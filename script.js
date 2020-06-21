var update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
setInterval(update, 1000);

$(document).ready(function () {
  //check the time change colors of rows
  $("saveBtn").click(function () {
    let userInput = $(this).val();
    console.log(userInput);
  });
});

// const time = ["09","10","11","12","13","14","15","16","17"];

// for(let x = 0; x < time.length; x++){

//     const newDiv = $("<div>");
//     newDiv.text(time[x]);

// }
