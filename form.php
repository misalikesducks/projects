<?php
  $conn = mysqli_connect('localhost', 'misaki', 'hello', 'users');
  if(!$conn)
  {
    echo "Connection error: ".mysqli_connect_error();
  }
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Find a Buddy</title>
    <link rel = "stylesheet" href = "styles/form.css">
    <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet">
  </head>
  <body>
    <h2> The next step... </h2>
    <h5> Let's find your friend </h5>
    <div>
      <form class = "contact-form" action = "contact.php" method ="post">
        <p>
          <label for = "inputName">Name:</label>
          <input type = "text" name = "name" id = "inputName" placeholder = "Display Name">
        </p>
        <p>
          <label for = "inputEmail">Email:</label>
          <input type = "text" name = "email" id = "inputEmail" placeholder = "School or Personal">
        </p>
        <p>
          <label for = "inputMajor">Major:</label>
          <input type = "text" name = "major" id = "inputMajor" placeholder = "Major">
        </p>
        <p>
          <label for = "inputCloud">Cloud:</label>
          <input type = "text" name = "cloud" id = "inputCloud" placeholder = "Cloud">
        </p>
        <p>
          <label for = "inputYear">Year:</label>
          <input type = "text" name = "year" id = "inputYear" placeholder = "Year of graduation">
        </p>
        <button type = "submit" name = "submit">Submit</button>
      </form>
    </div>
  </body>
</html>
