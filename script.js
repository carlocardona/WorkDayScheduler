var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

$(document).ready(function () {
    //check the time change colors of rows
})

$(".saveBtn").on("click", function () {
    //get value then save in row

    let userChoice = $(this).val();
    console.log("User Clicked Button: " + userChoice);
})