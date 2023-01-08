//time variables
var nineEl = $('#hour-9');
var tenEl = $('#hour-10');
var elevenEl = $('#hour-11');
var twelveEl = $('#hour-12');
var thirteenEl = $('#hour-13');
var fourteenEl = $('#hour-14');
var fifteenEl = $('#hour-15');
var sixteenEl = $('#hour-16');
var seventeenEl = $('#hour-17');

//button variables
var saveBtn9= $(".saveBtn9")
var saveBtn10= $(".saveBtn10")
var saveBtn11= $(".saveBtn11")
var saveBtn12= $(".saveBtn12")
var saveBtn13= $(".saveBtn13")
var saveBtn14= $(".saveBtn14")
var saveBtn15= $(".saveBtn15")
var saveBtn16= $(".saveBtn16")
var saveBtn17= $(".saveBtn17")

//dayjs for hour blocks
var hourNine= dayjs().hour(9).minute(00).format('HH:mm')
var hourTen= dayjs().hour(10).minute(00).format('HH:mm')
var hourEleven= dayjs().hour(11).minute(00).format('HH:mm')
var hourTwelve= dayjs().hour(12).minute(00).format('HH:mm')
var hourThirteen= dayjs().hour(13).minute(00).format('HH:mm')
var hourFourteen= dayjs().hour(14).minute(00).format('HH:mm')
var hourFifteen= dayjs().hour(15).minute(00).format('HH:mm')
var hourSixteen= dayjs().hour(16).minute(00).format('HH:mm')
var hourSeventeen= dayjs().hour(17).minute(00).format('HH:mm')

//display dayjs in the hour block div
nineEl.children('div').text(hourNine);
tenEl.children('div').text(hourTen);
elevenEl.children('div').text(hourEleven);
twelveEl.children('div').text(hourTwelve);
thirteenEl.children('div').text(hourThirteen);
fourteenEl.children('div').text(hourFourteen);
fifteenEl.children('div').text(hourFifteen);
sixteenEl.children('div').text(hourSixteen);
seventeenEl.children('div').text(hourSeventeen);

// setInterval to display current date and time in header
setInterval(function(){
  var dateTime= dayjs().format('MMMM D, YYYY [at] HH:mm:ss');
  $('#currentDay').text(dateTime);
}, 1000);

//saveInput function localStorage


//event listenter for save button
saveBtn.addEventListener("click",saveInput);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

 
});