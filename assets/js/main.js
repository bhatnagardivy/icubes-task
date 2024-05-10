$(document).ready(() => {

  // To open the popup box

  $("#popupButton").on("click", () => {
    $("#popup").css("display", "block");
  });

  // To close the popup box
  $("#closeButton").on("click", () => {
    $("#popup").css("display", "none");
  });

});

