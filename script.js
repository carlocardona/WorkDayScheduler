var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

$(document).ready(function () {
    //check the time change colors of rows
    $("#button9").click(function () {
        let userInput = $("#input9").val();
        console.log(userInput);
    })
})

