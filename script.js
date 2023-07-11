// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // save text
  $(".saveBtn").click(function () {
    // get parent id
    let timeBlockId = $(this).parent().attr("id");

    // get the value of the textarea
    let textAreaValue = $(this).parent().find("textarea").val();

    //  save textarea to local storage
    localStorage.setItem(timeBlockId, textAreaValue);
  });

  $(".time-block").each(function () {
    // get the time from id
    let timeBlock = $(this).attr("id").split("-")[1];

    // get the current hour
    let hour = dayjs().hour();

    //  get the correct class based on the time relative to the block
    if (hour > timeBlock) {
      $(this).addClass("past");
    } else if (hour == timeBlock) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // set value of each time block textarea to the stored description
  $(".description").each(function () {
    // get id
    let parentId = $(this).parent().attr("id");
    // get the stored text
    let description = localStorage.getItem(parentId);

    // set the textarea value
    $(this).val(description);
  });

  //  display current date in header
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
