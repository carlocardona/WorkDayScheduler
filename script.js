// let currentDay = moment().format("MMM Do YY");               // Jun 17th 20
// let currentTime = moment().format('LTS');  //Current Time

var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);