<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $message = trim($_POST["message"] ?? "");

    $errors = [];

    // Validation
    if ($name == "") {
        $errors[] = "Name is required.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    if ($message == "") {
        $errors[] = "Message is required.";
    }

    // Error message
    if (!empty($errors)) {

        echo "<h2>❌ Submission Failed</h2>";

        foreach ($errors as $error) {
            echo "<p>" . htmlspecialchars($error) . "</p>";
        }

        echo '<a href="contact2.html">⬅️ Go Back</a>';

    } else {

        // Sanitize data
        $name = htmlspecialchars($name);
        $email = htmlspecialchars($email);
        $message = htmlspecialchars($message);

        // CSV file
        $file = "contact.csv";

        $newFile = !file_exists($file);

        $handle = fopen($file, "a");

        if ($handle) {

            if ($newFile) {
                fputcsv($handle, ["Name", "Email", "Message", "Date"]);
            }

            fputcsv($handle, [
                $name,
                $email,
                $message,
                date("Y-m-d H:i:s")
            ]);

            fclose($handle);

            echo "<h2>✅ Message Sent Successfully!</h2>";
            echo "<p>Your message has been saved.</p>";
            echo '<a href="contact2.html">⬅️ Back to Contact</a>';

        } else {

            echo "<h2>❌ Error</h2>";
            echo "<p>Unable to save your message.</p>";
        }
    }

} else {

    echo "<h2>❌ Invalid Request</h2>";
    echo '<a href="contact2.html">⬅️ Go Back</a>';
}

?>