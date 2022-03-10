//ALEXANDERS TOUR

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return false;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function turn() {
	movepawns();
}

function spawn(piece) {
	if (piece != "player") {
		var check = player1("u16");
		var spawn = randomspawn();
		if (check != undefined) {
			var check = check.substr(2, 1);
			while (spawn == check) {
				spawn = randomspawn();
			}
		}
		var spawn = "#0" + spawn + "t16";
		if (piece == "pawn") {
			$(spawn).text("\u2659\uFE0E");
		}
	}
	else {
		var spawn = randomspawn();
		var spawn = "#0" + spawn + "u03";
		$(spawn).text("\u2658\uFE0E");
	}
}

function randomspawn() {
	var random = Math.floor((Math.random() * 8) + 1);
	return random;	
}

function identify(location) {
	var column = location.substring(1, 3);
	var row = location.substring(4, 6);
	var check = "#" + column + "t" + row;
	var check = $(check).text();
	if (check != false) {
		return check + "cpctrl";
	}
	var check = "#" + column + "u" + row;
	var check = $(check).text();
	if (check != false) {
		return check + "player";
	}
	return false;
}

function movepawns() {
	// this checks the entire board for pawns, then moves them as necessary;
	// for some reason a while loop on these values was too much for the server;
	var check = pawn1("t01");
	pawn1("t02");
	pawn1("t03");
	pawn1("t04");
	pawn1("t05");
	pawn1("t06");
	pawn1("t07");
	pawn1("t08");
	pawn1("t09");
	pawn1("t10");
	pawn1("t11");
	pawn1("t12");
	pawn1("t13");
	pawn1("t14");
	pawn1("t15");
	pawn1("t16");
	if (check == "none") {
		spawn("pawn");
	}
}

function pawn1(loc) {
	// this function sends orders to check for pawns;
	i = 0;
	var spawn = false;
	while (i < 9) {
		i++;
		var check = "#0" + i + loc;
		spawn = pawn2(check);
	}
	if (spawn == false) {
		return "none";
	}
}

function pawn2(loc) {
	// this function actually checks for pawns, and sends orders to move them when found;
	var check = $(loc).text();
	if (check == "\u2659\uFE0E") {
		var row = loc.substring(4, 6);
		if (row > 1) {
			var dest = loc.substring(0,3);
			var row2 = row - 1;
			row2 = two(row2);
			dest = dest + "t" + row2;
		}
		else {
			$(loc).text("");
			return;
		}
		check = pawn3(dest);
		if (check == false) {
			$(loc).text("");
			$(dest).text("\u2659\uFE0E");
		}
		else {
			if ((check == "left") || (check == "right")) {
				$(loc).css('color', '#ecd25f');
				//console.log("highscore command fired from the pawn2 command.");
				highscore();
				$("#finalscreen").show();
				createCookie("score", "x", 10);
			}
		}
	}
	return false;
}

function pawn3(dest) {
	// this function checks if a pawn will kill the user or be halted from moving by another piece;
	var column = dest.substring(1, 3);
	var row = dest.substring(4, 6);
	if (column != "01") {
		//this checks left of destination;
		column = column - 1;
		column = two(column);
		var location = "#" + column + "c" + row;
		var result = identify(location);
		if (result != false) {
			check = result.substr(-6);
			if (check == "player") {
				return "left";
			}
		}
	}
	var column = dest.substring(1, 3);
	var row = dest.substring(4, 6);
	if (column != "08") {
		//this checks right of destination;
		column++;
		column = two(column);
		var location = "#" + column + "c" + row;
		var result = identify(location);
		if (result != false) {
			check = result.substr(-6);
			if (check == "player") {
				return "right";
			}
		}
	}
	var result = identify(dest);
	if (result != false) {
		return result;
	}
	return false;
}

// this function adds a zero before single numbers;
function two(n){
    return n > 9 ? "" + n: "0" + n;
}

function findplayer() {
	//this looks for the player throughout the board
	check = player1("u01");
	if (check != undefined) { return check; }
	check = player1("u02");
	if (check != undefined) { return check; }
	check = player1("u03");
	if (check != undefined) { return check; }
	check = player1("u04");
	if (check != undefined) { return check; }
	check = player1("u05");
	if (check != undefined) { return check; }
	check = player1("u06");
	if (check != undefined) { return check; }
	check = player1("u07");
	if (check != undefined) { return check; }
	check = player1("u08");
	if (check != undefined) { return check; }
	check = player1("u09");
	if (check != undefined) { return check; }
	check = player1("u10");
	if (check != undefined) { return check; }
	check = player1("u11");
	if (check != undefined) { return check; }
	check = player1("u12");
	if (check != undefined) { return check; }
	check = player1("u13");
	if (check != undefined) { return check; }
	check = player1("u14");
	if (check != undefined) { return check; }
	check = player1("u15");
	if (check != undefined) { return check; }
	check = player1("u16");
	if (check != undefined) { return check; }

}

function player1(loc) {
	// this function sends orders to check for the player;
	i = 0;
	while (i < 9) {
		i++;
		var check = "#0" + i + loc;
		result = player2(check);
		if (result != undefined) {
			return result;
		}
	}
}

function player2(loc) {
	// this function actually checks for the player;
	var check = $(loc).text();
	if (check != false) {
		return loc;
	}
}

function checkKnightMovement(location, origin) {
	//original: 04u03;
	//options: 02u02, 02u04, 03u01, 03u05, 05u01, 05u05, 06u02, 06u06;
	var destination1 = location.substr(0, 2);
	var destination2 = location.substr(3, 2);
	var dest = destination1 + "u" + destination2;
	var original1 = origin.substr(1, 2);
	var original2 = origin.substr(4, 2);
	var check1 = +original1 - 2;
	check1 = two(check1);
	var check2 = +original2 - 1;
	check2 = two(check2);
	var check3 = +original2 + 1;
	check3 = two(check3);
	var pos1 = check1 + "u" + check2;
	if (dest == pos1) {
		moveknight(origin, dest);
		return;
	}
	var pos2 = check1 + "u" + check3;
	if (dest == pos2) {
		moveknight(origin, dest);
		return;
	}
	var check4 = +original1 - 1;
	check4 = two(check4);
	var check5 = +original2 - 2;
	check5 = two(check5);
	var check6 = +original2 + 2;
	check6 = two(check6);
	var pos3 = check4 + "u" + check5;
	if (dest == pos3) {
		moveknight(origin, dest);
		return;
	}
	var pos4 = check4 + "u" + check6;
	if (dest == pos4) {
		moveknight(origin, dest);
		return;
	}
	var check7 = +original1 + 1;
	check7 = two(check7);
	var check8 = +original2 - 2;
	check8 = two(check8);
	var check9 = +original2 + 2;
	check9 = two(check9);

	var pos5 = check7 + "u" + check8;
	if (dest == pos5) {
		moveknight(origin, dest);
		return;
	}
	var pos6 = check7 + "u" + check9;
	if (dest == pos6) {
		moveknight(origin, dest);
		return;
	}
	var check10 = +original1 + 2;
	check10 = two(check10);
	var check11 = +original2 - 1;
	check11 = two(check11);
	var check12 = +original2 + 1;
	check12 = two(check12);
	
	var pos7 = check10 + "u" + check11;
	if (dest == pos7) {
		moveknight(origin, dest);
		return;
	}
	var pos8 = check10 + "u" + check12;
	if (dest == pos8) {
		moveknight(origin, dest);
		return;
	}

//	alert("invalid movement");
}

function moveknight(pos, dest) {
	var dest = "#" + dest;
	$(pos).text("");
	$(dest).text("\u2658\uFE0E");
	attack(dest);
	turn();
}

function attack(pos) {
	var check1 = pos.substr(1, 2);
	var check2 = pos.substr(4, 2);
	var invade = "#" + check1 + "t" + check2;
	var prisoner = $(invade).text();
	if (prisoner != false) {
		$(invade).text("");
		var captures = readCookie("captures");
		var captures = +captures + 1;
		createCookie("captures", captures, 10);
		var capturesSpan = "#captures";
		$(capturesSpan).text(captures);
		var newgreen = "#" + check1 + "s" + check2;
		var visible = $(newgreen).is(":visible");
		if (visible == false) {
			var gcover = readCookie("cover");
			var gcover = +gcover + 1;
			createCookie("cover", gcover, 10);
			var coverpoints = parseInt(gcover, 10) / parseInt(128, 10);
			coverpoints = coverpoints * 100;
			var coverpoints = Math.floor(coverpoints);
			var coverSpan = "#cover";
			var percent = coverpoints + "%";
			$(coverSpan).text(percent);
			$(newgreen).show();
			if (gcover == 128) {
				//THE PLAYER FINISHES THE GAME
				highscore();
				$("#finished").show();
				$("#finalscreen").show();
				createCookie("score", "x", 10);
			}
		}
	}
	var moves = readCookie("moves");
	var moves = +moves + 1;
	createCookie("moves", moves, 10);
	var capturesSpan = "#moves";
	$(capturesSpan).text(moves);

	//Now to calculate the score
	if (captures == undefined) {
		var captures = readCookie("captures");
		captures = parseInt(captures, 10);
	}
	if (gcover == undefined) {
		var gcover = readCookie("cover");
		gcover = parseInt(gcover, 10)
	}
	//console.log("calcscore function is fired by the attack function, values:" + captures + " " + gcover + " " + moves);
	var score = calcscore(captures, gcover, moves);
	var scoreSpan = ".score";
	$(scoreSpan).text(score);
}

function calcscore(captures, gcover, moves) {
	//console.log("calcscore function starts, values given: " + captures + " " + gcover + " " + moves);
	if (captures == "x") {
		var captures = readCookie("captures");
		captures = parseInt(captures, 10);
	}
	//console.log("captures: " + captures);
	if (gcover == "x") {
		var gcover = readCookie("cover");
		gcover = parseInt(gcover, 10);
	}
	//console.log("gcover: " + gcover);
	if (moves == "x") {
		var moves = readCookie("moves");
		moves = parseInt(moves, 10);
	}
	//console.log("moves: " + moves);
	var score = (captures * 10) * (gcover * 100) / (moves * 20) + 1;
	//console.log("score: " + score);
	return Math.floor(score);
}

function highscore() {
	//console.log("highscore function starts");
	var score1 = calcscore("x", "x", "x");
	var score2 = readCookie("highscorealex");
	//console.log("highscore values: " + score1 + " " + score2);
	if (score1 != 1) {
		if (score2 > score1) {
			var state = "nonewhigh";
		}
		else {
			var state = "newhigh";
		}
	}
	else {
		var state = "nonewhigh";
	}
	if (state == "newhigh") {
		highscore = score1;
		createCookie("highscorealex", score1, 700);
		$("#newhigh").show();
    	var station = readCookie("station");
        $.post('engine_cb.php', {'whatstation': station, 'whatgame': 'alex', 'whatscore': highscore});
	}
	else {
		var highscore = score2;
	}
	$("#highscore").text(highscore);
}

function checkBishopMovement(location, origin) {
	alert("check if bishop can move to " + location);
}

function checkRookMovement(location, origin) {
	alert("check if rook can move to " + location);
}

function checkQueenMovement(location, origin) {
	alert("check if queen can move to " + location);
}

$(document).ready(function() {
	$(".shade").hide();
	$("#finalscreen").hide();
	$("#newhigh").hide();
	$("#finished").hide();
	spawn("pawn");
	spawn("player");
	createCookie("score", 0, 10);
	createCookie("moves", 0, 10);
	createCookie("captures", 0, 10);
	createCookie("cover", 0, 10);
	var highscore = readCookie("highscorealex");
	if (highscore == false) {
		createCookie("highscorealex", 1, 10);
	}
	// this fires when the user clicks on a square;
	// which is important, because that is how the user will move his piece;
	$("#finalscreen").click(function() {
		check = $(this).css("opacity");
		if (check == 1) {
			$(this).css("opacity", "0.2");
		}
		else {
			$(this).css("opacity", 1);
		}
	});
	$(".pos").click(function() {
		var check = readCookie("score");
		if (check == "x") {
			return;
		}
		var location = jQuery(this).attr("id");
		var column = location.substring(0, 2);
		var row = location.substring(3, 5);
		origin = findplayer();
		var plpos = $(origin).text();
		if (plpos == "\u2658\uFE0E") {
			checkKnightMovement(location, origin);
		}
		else if (plpos == "\u2657\uFE0E") {
			checkBishopMovement(location, origin);
		}
		else if (plpos == "\u2656\uFE0E") {
			checkRookMovement(location, origin);
		}
		else if (plpos == "\u265B\uFE0E") {
			checkQueenMovement(location, origin);
		}
		else {
			alert("something went wrong");
		}
	});
	$('.u').bind('contextmenu', function(e) {
		e.preventDefault();
	});
	$("#restart").click(function() {
		var link = $(this).attr("href");
		window.open(link,'_self');
	});

});