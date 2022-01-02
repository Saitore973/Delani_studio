$(document).ready(function () {
  $("#mouse").click(function () {
    $("#mouse").fadeOut();("slow");
  });
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

$(document).ready(function () {
  $("#develop").click(function () {
    $(".design-show").toggle();
    $("#develop").toggle();
  });
});

$(document).ready(function () {
  $(".design-show").click(function () {
    $(".design-show").toggle();
    $("#develop").toggle();
  });
});

$(document).ready(function () {
  $("#product").click(function () {
    $(".product-hide").toggle();
    $("#product").toggle();
  });
});

$(document).ready(function () {
  $(".product-hide").click(function () {
    $(".product-hide").toggle();
    $("#product").toggle();
  });
});

$(".photo1").hover(() => {
  $(".work1").toggle();
});

$(".photo2").hover(() => {
  $(".work2").toggle();
});

