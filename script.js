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
var saveBtn9= $('#hour-9').children('button');
var saveBtn10= $('#hour-10').children('button');
var saveBtn11= $('#hour-11').children('button');
var saveBtn12= $('#hour-12').children('button');
var saveBtn13= $('#hour-13').children('button');
var saveBtn14= $('#hour-14').children('button');
var saveBtn15= $('#hour-15').children('button');
var saveBtn16= $('#hour-16').children('button');
var saveBtn17= $('#hour-17').children('button');

//schedule input variables
var nineInput= $('#hour-9').children('textarea');
var tenInput= $('#hour-10').children('textarea');
var elevenInput= $('#hour-11').children('textarea');
var twelveInput= $('#hour-12').children('textarea');
var thirteenEl = $('#hour-13').children('textarea');
var fourteenEl = $('#hour-14').children('textarea');
var fifteenEl = $('#hour-15').children('textarea');
var sixteenEl = $('#hour-16').children('textarea');
var seventeenEl = $('#hour-17').children('textarea');

//dayjs for hour blocks
var hourNine= dayjs().hour(9).minute(00).format('HH:mm');
var hourTen= dayjs().hour(10).minute(00).format('HH:mm');
var hourEleven= dayjs().hour(11).minute(00).format('HH:mm');
var hourTwelve= dayjs().hour(12).minute(00).format('HH:mm');
var hourThirteen= dayjs().hour(13).minute(00).format('HH:mm');
var hourFourteen= dayjs().hour(14).minute(00).format('HH:mm');
var hourFifteen= dayjs().hour(15).minute(00).format('HH:mm');
var hourSixteen= dayjs().hour(16).minute(00).format('HH:mm');
var hourSeventeen= dayjs().hour(17).minute(00).format('HH:mm');

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

// //variable for localStorage
var localEvents= {
  nineEvent: "",
  tenEvent: "",
  elevenEvent: "",
  twelveEvent: "",
  thirteenEvent: "",
  fourteenEvent: "",
  fifteenEvent: "",
  sixteenEvent: "",
  seventeenEvent: ""
}

// setInterval to display current date and time in header
setInterval(function(){
  var dateTime= dayjs().format('MMMM D, YYYY [at] HH:mm:ss');
  $('#currentDay').text(dateTime);
}, 1000);
  
//event listener for each save button and save to localStorage
saveBtn9.on("click",function(event){
  event.preventDefault();
  localEvents.nineEvent= nineInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn10.on("click",function(event){
  event.preventDefault();
  localEvents.tenEvent= tenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn11.on("click",function(event){
  event.preventDefault();
  localEvents.elevenEvent= elevenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn12.on("click",function(event){
  event.preventDefault();
  localEvents.twelveEvent= twelveInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn13.on("click",function(event){
  event.preventDefault();
  localEvents.thirteenEvent= thireenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn14.on("click",function(event){
  event.preventDefault();
  localEvents.fourteenEvent= fourteenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn15.on("click",function(event){
  event.preventDefault();
  localEvents.fifteenEvent= fifteenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn16.on("click",function(event){
  event.preventDefault();
  localEvents.sixteenEvent= sixteenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

saveBtn17.on("click",function(event){
  event.preventDefault();
  localEvents.seventeenEvent= seventeenInput.val();
  localStorage.setItem("stored-event",JSON.stringify(localEvents))
});

//render saved events


// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?