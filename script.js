// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //var saveButtonToStorage = localStorage.getItem

  var saveButton = $('.saveBtn');
  saveButton.on('click', function () {
    var text = $(this).siblings(".description").val()
    var id = $(this).parent().attr("id")
    console.log(id,text)
    localStorage.setItem(id, text)
  })

  //var projects = readProjectsFromStorage();
  //projects.push(newProject);
  // saveProjectsToStorage(projects);
  //----------------------------------------------------------------------------------
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // get date/time for start of today
  //var today = dayjs().startOf('day');

  // add class to row by comparing project date to today's date
  //if (projectDate.isBefore(today)) {
  //rowEl.addClass('project-late');
  //} else if (projectDate.isSame(today)) {
  //rowEl.addClass('project-today');
  //}
  var past = $('.row time-block past');
  var present = $('.row time-block present');
  var future = $('.row time-block future');
  var timeblock = $('.time-block');

$('.time-block').each(function() {
  var currentTime = dayjs().hour()
  var rowTime =parseInt($(this).attr('id').split("-")[1])

  if (rowTime < currentTime) {
    $(this).addClass("past")
  } else if(rowTime === currentTime) {
    $(this).addClass("present")
  }else{
    $(this).addClass("future")
  }
}) 

  //----------------------------------------------------------------------------------
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  //HINT: How can the id
  // attribute of each time-block be used to do this?
  //
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

  //-------------------------------------------------------------------------
  // TODO: Add code to display the current date in the header of the page.

  var timeDisplayEl = $("#currentDay");
  //var rightNow = dayjs().format('MMM DD, YYYY');
  //timeDisplayEl.text(rightNow);
  // handle displaying the time
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
displayTime()

});




//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist