<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST["name"] ?? "");
    $rollNumber = trim($_POST["rollNumber"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $mobile = trim($_POST["mobile"] ?? "");
    $password = $_POST["password"] ?? "";
    $confirmPassword = $_POST["confirmPassword"] ?? "";
    $semester = trim($_POST["semester"] ?? "");
    $course = trim($_POST["course"] ?? "");
    $year = trim($_POST["year"] ?? "");
    $gender = trim($_POST["gender"] ?? "");
    $terms = isset($_POST["terms"]);
    $event = trim($_POST["event"] ?? "");
    $reason = trim($_POST["reason"] ?? "");

    $errors = [];

    if ($name == "" || !preg_match("/^[A-Za-z ]+$/", $name)) {
        $errors[] = "Invalid name.";
    }

    if ($rollNumber == "" || !preg_match("/^[A-Za-z0-9]+$/", $rollNumber)) {
        $errors[] = "Invalid roll number.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    if (!preg_match("/^[0-9]{10}$/", $mobile)) {
        $errors[] = "Mobile number must contain 10 digits.";
    }

    if (!preg_match("/^(?=.*[A-Za-z])(?=.*\d).{6,}$/", $password)) {
        $errors[] = "Password must be at least 6 characters with letters and numbers.";
    }

    if ($password !== $confirmPassword) {
        $errors[] = "Passwords do not match.";
    }

    if ($semester == "") {
        $errors[] = "Semester is required.";
    }

    if ($course == "") {
        $errors[] = "Please select a course.";
    }

    if ($year == "") {
        $errors[] = "Please select a year.";
    }

    if (!in_array($gender, ["Male", "Female", "Other"])) {
        $errors[] = "Please select a valid gender.";
    }

    if (!$terms) {
        $errors[] = "Please accept the Terms and Conditions.";
    }

    if ($event == "") {
        $errors[] = "Please select an event.";
    }

    if ($reason == "") {
        $errors[] = "Please enter your reason for participation.";
    }

    if (!empty($errors)) {

        echo "<h2>❌ Registration Failed</h2>";

        echo "<ul>";

        foreach ($errors as $error) {
            echo "<li>" . htmlspecialchars($error) . "</li>";
        }

        echo "</ul>";

        echo '<a href="register2.html">⬅️ Go Back</a>';

    } else {

        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        $file = "registrations.csv";

        $newFile = !file_exists($file);

        $handle = fopen($file, "a");

        if ($handle) {

            if ($newFile) {
                fputcsv($handle, [
                    "Name",
                    "Roll Number",
                    "Email",
                    "Mobile",
                    "Password Hash",
                    "Semester",
                    "Course",
                    "Year",
                    "Gender",
                    "Event",
                    "Reason",
                    "Date"
                ]);
            }

            fputcsv($handle, [
                $name,
                $rollNumber,
                $email,
                $mobile,
                $passwordHash,
                $semester,
                $course,
                $year,
                $gender,
                $event,
                $reason,
                date("Y-m-d H:i:s")
            ]);

            fclose($handle);

            echo "<h2>🎉 Registration Successful!</h2>";
            echo "<p>Your registration has been saved successfully.</p>";
            echo '<a href="register2.html">⬅️ Register Another Student</a>';

        } else {

            echo "<h2>❌ Error</h2>";
            echo "<p>Unable to save registration data.</p>";
            echo '<a href="register2.html">⬅️ Go Back</a>';
        }
    }

} else {

    echo "<h2>❌ Invalid Request</h2>";
    echo '<a href="register2.html">⬅️ Go Back</a>';

}

?>