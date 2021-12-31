$(".mouse").hover(function () {
  alert("This is a heading tag");
});


$(document).ready(function () {
  $("#design").click(function () {
    $(".design-hide").toggle();
    $("#design").toggle();
    
  });
});

$(document).ready(function () {
  $(".design-hide").click(function () {
    $(".design-hide").toggle();
    $("#design").toggle();
  });
});


