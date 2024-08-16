$(document).ready(function () {
    $("#toForm2").click(function () {
      $("#form1").removeClass("active");
      $("#form2").addClass("active");
    });

    $("#toForm3").click(function () {
      $("#form2").removeClass("active");
      $("#form3").addClass("active");
    });
    $("#toForm4").click(function () {
      $("#form3").removeClass("active");
      $("#form4").addClass("active");
    });

    $(".input-file").on("click", function () {
      $("#input-type-file").trigger("click");
    });
    $("#input-type-file").on("change", function () {
      var file = $(this)[0].files[0];
      var fileName = file.name;
      $(".input-file").val(fileName);
    });
    $(".btn-submit").on("click", function (e) {
      e.preventDefault();
      var file = $("#input-type-file")[0].files[0];
      var formData = new FormData();
      formData.append('file', file);
      $.ajax({
        url: "uploadFile.php",
        method: "POST",
        dataType: "json",
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            // Handle success response
            console.log(response);
            $(".input-file").val("");
            alert('File uploaded successfully');

        },
        error: function(xhr, status, error) {
          // Handle error   
          console.error(error); 
      
          // Kiểm tra xem có response JSON từ server không
          if (xhr.responseJSON && xhr.responseJSON.message) {
              // Show the message from the PHP response
              alert(xhr.responseJSON.message);
          } else {
              // Nếu không có message trong response, show thông báo lỗi mặc định
              alert('File upload failed');
          }
      }
      });
    });
  });