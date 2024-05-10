$(document).ready(() => {
  let imageFile;
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

  // Image browse button click
  $(".browse-button").on("click", () => {
    $("input").click();
  });

  $("input").on("change", (e) => {
    e.preventDefault();

    // Access files directly from the input element
    let imageFile = e.target.files[0];

    if (imageFile) {
      let validExtensions = ["jpeg", "jpg", "png", "webp"];
      let fileExtension = imageFile.name.split('.').pop().toLowerCase();

      if (validExtensions.includes(fileExtension)) {
        let fileName = imageFile.name;
        let filenameSpan = $("<span>").addClass("file-name").text(fileName);

        let removeButton = $("<button>").addClass("remove-button").html("&times;");
        removeButton.on("click", function () {

          filenameSpan.remove();
          removeButton.remove();

          if ($(".image-area .file-name").length === 0) {
            $(".image-area").css("display", "none");
          }
        });

        $(".image-area").append(filenameSpan, removeButton);
        $(".image-area").css("display", "block");
        $(".label-content").css("display", "block");
      } else {
        alert("This is not an image file. Please upload a valid image file.");
      }
    }
  });

  // Image drag and upload section
  $("#imageArea").on("dragover", (e) => {
    e.preventDefault();
    $(".label-content").css("display", "none");
  });

  $("#imageArea").on("drop", (e) => {
    e.preventDefault();
    imageFile = e.originalEvent.dataTransfer.files[0];

    let validExtensions = ["jpeg", "jpg", "png", "webp"];
    let fileExtension = imageFile.name.split('.').pop().toLowerCase();

    if (validExtensions.includes(fileExtension)) {
      let fileName = imageFile.name;
      let filenameSpan = $("<span>").addClass("file-name").text(fileName);

      let removeButton = $("<button>").addClass("remove-button").html("&times;");
      removeButton.on("click", function () {

        filenameSpan.remove();
        removeButton.remove();

        if ($(".image-area .file-name").length === 0) {
          $(".image-area").css("display", "none");
        }
      });

      $(".image-area").append(filenameSpan, removeButton);
      $(".image-area").css("display", "block");
      $(".label-content").css("display", "block");
    } else {
      alert("This is not an image file. Please upload a valid image file.");
    }
  });

  $("#imageArea").on("dragleave", (e) => {
    e.preventDefault();
    $(".label-content").css("display", "block");
  });

  $("#proceedContinueButton").on("click", (e) => {
    e.preventDefault();
    $("#popup").css("display", "none");
    $("#firstScreen").css("display", "none");
    $("#secondScreen").css("display", "none");
    $("#lastScreen").css("display", "none");
  });
});

