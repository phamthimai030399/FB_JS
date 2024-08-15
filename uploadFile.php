<?php
// Đường dẫn đến thư mục lưu trữ file
$target_dir = "uploads/";

// Kiểm tra xem có file nào được gửi lên không
if (isset($_FILES['file'])) {
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));


    // Thêm các kiểm tra về kích thước file, định dạng file, v.v. ở đây
    // Ví dụ: kiểm tra kích thước file
    if ($_FILES["file"]["size"] > 500000) {
        echo json_encode(['message' => 'Sorry, your file is too large.']);
        $uploadOk = 0;
    }

    // Kiểm tra định dạng file
    if (
        $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif"
    ) {
        echo json_encode(['message' => 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.']);
        $uploadOk = 0;
    }

    // Nếu không có lỗi, tiến hành upload file
    if ($uploadOk == 0) {
        echo json_encode(['message' => 'Sorry, your file was not uploaded.']);
    } else {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo
            json_encode(['message' => 'File uploaded successfully']);
        } else {
            echo json_encode(['message' => 'Sorry, there was an error uploading your file.']);
        }
    }
} else {
    echo json_encode(['message' => 'No file uploaded']);
}
