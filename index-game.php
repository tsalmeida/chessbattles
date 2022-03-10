<?php
if (isset($_SESSION['user_name'])) {
    $station = $_SESSION['user_name'];
}
echo "<!DOCTYPE html>

<html>
	<head><meta http-equiv='Content-Type' content='text/html; charset=windows-1252'>
		<link rel='stylesheet' href='style.css'/>
		<link rel='icon' type='image/vnd.microsoft.icon' href='favicon.ico'/>
		<title>Chess Battles: Choose language</title>
		<script type='text/javascript' src='https://code.jquery.com/jquery-latest.min.js'></script>
		<script type='text/javascript' src='engine.js'></script>
		<script type='text/javascript'>
		    $(document).ready(function() {
    		    createCookie('station', '$station', 1);
    		    var station = readCookie('station');
		    });
        	var language = readCookie('language');
        	if (language != false) {
        		window.location.replace(language);
        	}
        	$('.button').click(function() {
        		if ($(this).attr('href')) {
        			var link = $(this).attr('href');
        			window.open(link, '_self');
        			event.preventDefault();
        		}
        	});
        	$('.buttonlang').click(function() {
        		if ($(this).attr('href')) {
        			var link = $(this).attr('href');
        			createCookie('language', link, 700);
        			window.open(link, '_self');
        			event.preventDefault();
        		}
        	});
	    </script>
	</head>
	<body>
		<div id='scoreboard'>
		</div>
		<div id='board' class='board overflow'>
			</br>
			<h2>&#9818;</h2>
			<span class='smaller'>
				<div class='buttonlang' href='index-en.html'>English</div>
				<div class='buttonlang' href='index-pt.html'>Portugu&ecirc;s</div>
			</span>
		</div>
	</body>
</html>";