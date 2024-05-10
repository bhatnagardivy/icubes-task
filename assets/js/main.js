$(document).ready(() => {

  // On click of popup button
  $("#popupButton").on("click", () => {
    $("#popup").css("display", "block");
    $("#firstScreen").css("display", "block");
    $("#secondScreen").css("display", "none");
    $("#lastScreen").css("display", "none");
  });

  // On click of upload button
  $("#uploadDesign").on("click", () => {
    $("#popup").css("display", "block");
    $("#firstScreen").css("display", "none");
    $("#secondScreen").css("display", "block");
    $("#lastScreen").css("display", "none");
  });

  // On click of close button or back button 
  $("#closeButton, #backButton").on("click", () => {
    $("#popup").css("display", "block");
    $("#firstScreen").css("display", "none");
    $("#secondScreen").css("display", "none");
    $("#lastScreen").css("display", "block");
  });

  // On click of proceed button
  $("#proceedButton").on("click", () => {
    $("#popup").css("display", "none");
    $("#firstScreen").css("display", "none");
    $("#secondScreen").css("display", "none");
    $("#lastScreen").css("display", "none");
  })
});

