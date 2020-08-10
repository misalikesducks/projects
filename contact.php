<?php
$servername = "localhost";
$username = "misaki";
$password = "hello";
$dbname = "users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$nameErr = $emailErr = $majorErr = "";
$name = $email = $major = "";


$name = $_POST["name"];
$email = $_POST["email"];
$major = $_POST["major"];
$year = $_POST["year"];
$cloud = $_POST["cloud"];
$matched = 0;

$sql = "INSERT INTO people (name, email, major, year, cloud, matched)
VALUES ('$name', '$email', '$major', '$year', '$cloud', '$matched')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>
