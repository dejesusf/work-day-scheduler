//time block variables per hour
//09:00
var nineEl = $('#hour-9');
var hourNine= dayjs().hour(9).minute(00).format('HH:mm')
var setHourNine= nineEl.children('div')
setHourNine.text(hourNine);

//10:00
var tenEl = $('#hour-10');
var hourTen= dayjs().hour(10).minute(00).format('HH:mm')
var setHourTen= tenEl.children('div')
setHourTen.text(hourTen);

//11:00
var elevenEl = $('#hour-11');
var hourEleven= dayjs().hour(11).minute(00).format('HH:mm')
var setHourEleven= elevenEl.children('div')
setHourEleven.text(hourEleven);

//12:00
var twelveEl = $('#hour-12');
var hourTwelve= dayjs().hour(12).minute(00).format('HH:mm')
var setHourTwelve= twelveEl.children('div')
setHourTwelve.text(hourTwelve);

//13:00
var thirteenEl = $('#hour-13');
var hourThirteen= dayjs().hour(13).minute(00).format('HH:mm')
var setHourThirteen= thirteenEl.children('div')
setHourThirteen.text(hourThirteen);

//14:00
var fourteenEl = $('#hour-14');
var hourFourteen= dayjs().hour(14).minute(00).format('HH:mm')
var setHourFourteen= fourteenEl.children('div')
setHourFourteen.text(hourFourteen);

//15:00
var fifteenEl = $('#hour-15');
var hourFifteen= dayjs().hour(15).minute(00).format('HH:mm')
var setHourFifteen= fifteenEl.children('div')
setHourFifteen.text(hourFifteen);

//16:00
var sixteenEl = $('#hour-16');
var hourSixteen= dayjs().hour(16).minute(00).format('HH:mm')
var setHourSixteen= sixteenEl.children('div')
setHourSixteen.text(hourSixteen);

//17:00
var seventeenEl = $('#hour-17');
var hourSeventeen= dayjs().hour(17).minute(00).format('HH:mm')
var setHourSeventeen= seventeenEl.children('div')
setHourSeventeen.text(hourSeventeen);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

 
});

 // Function to display current date and time in header
 function seconds(){
  var currentDate= dayjs().format('MMMM D, YYYY');
  var currentTime= dayjs().format('HH:mm:ss');
  $('#currentDay').text(currentDate + ' at ' + currentTime);
}
//setInterval to refresh function every second
setInterval(seconds,1000);