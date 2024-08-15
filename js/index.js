$(document).ready(function () {
    $("#toForm2").click(function () {
      $("#form1").removeClass("active");
      $("#form2").addClass("active");
    });

    $("#toForm3").click(function () {
      $("#form2").removeClass("active");
      $("#form3").addClass("active");
    });
  });