<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="styles/start.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet">
        <title>Start Screen</title>
    </head>
    <body>
        <div id = "music">
          <iframe src="music/Ambient Music.wav" allow="autoplay" id="audio" style="display: none"></iframe>
          <audio autoplay loop id = "music">
            <source src = "music/Ambient Music.wav" type = "audio/wav">
          </audio>
        </div>
        <div id="container">
            <!--This div controls the Title Words-->
            <div id="title">
                <p>Your Adventure Awaits</p>
            </div>
            <!--This div controls the Start Button-->
            <div id="start-button">
                <p><a href="game.html">Start</a></p>
            </div>
            <!--This div controls the Info Bar-->
            <div id="info-bar">
                <ul>
                    <li><a href="aboutus">about us</a></li>
                    <li><a href="aboutgame">about the game</a></li>
                </ul>
            </div>
        </div>
    </body>
</html>
