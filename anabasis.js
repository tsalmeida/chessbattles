 //THE ANABASIS

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

function turn(dest, ppiece) {
	$(".p").css('color', '#ec625f');
	//Checking if the player will be attacked in his most recent movement;
	var columndest = dest.substr(1, 2);
	var rowdest = dest.substr(4, 2);
	//checking for attacking pawns;
	var checkcolumn = columndest - 1;
	checkcolumn = two(checkcolumn);
	var checkcolumn2 = +columndest + 1;
	checkcolumn2 = two(checkcolumn2);
	var checkrow = +rowdest + 1;
	checkrow = two(checkrow);
	var check = "#" + checkcolumn + "t" + checkrow;
	var check2 = "#" + checkcolumn2 + "t" + checkrow;
	var checkt = $(check).text();
	var check2t = $(check2).text();
	if (checkt == "\u2659\uFE0E") {
		pawnAttack(ppiece, check);
	}
	if (check2t == "\u2659\uFE0E") {
		pawnAttack(ppiece, check2);
	}

	//checking for attacking bishops;
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while ((checkcolumn > 0) && (checkrow > 0)) {
		var checkcolumn = checkcolumn - 1;
		checkcolumn = two(checkcolumn);
		var checkrow = checkrow - 1;
		checkrow = two(checkrow);
		check = "#" + checkcolumn + "t" + checkrow;
		var checkt = $(check).text();
		if (checkt == "\u2657\uFE0E") {
			bishopAttack(ppiece, check);
		}
		if (checkt != false) {
			checkcolumn = 0;
			checkrow = 0;
		}
	}
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while ((checkcolumn < 9) && (checkrow < 17)) {
		var checkcolumn = +checkcolumn + 1;
		checkcolumn = two(checkcolumn);
		var checkrow = +checkrow + 1;
		checkrow = two(checkrow);
		check = "#" + checkcolumn + "t" + checkrow;
		var checkt = $(check).text();
		if (checkt == "\u2657\uFE0E") {
			bishopAttack(ppiece, check);
		}
		if (checkt != false) {
			checkcolumn = 9;
			checkrow = 17;
		}
	}
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while ((checkcolumn < 9) && (checkrow > 0)) {
		var checkcolumn = +checkcolumn + 1;
		checkcolumn = two(checkcolumn);
		var checkrow = checkrow - 1;
		checkrow = two(checkrow);
		check = "#" + checkcolumn + "t" + checkrow;
		var checkt = $(check).text();
		if (checkt == "\u2657\uFE0E") {
			bishopAttack(ppiece, check);
		}
		if (checkt != false) {
			checkcolumn = 9;
			checkrow = 0;
		}
	}
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while ((checkcolumn > 0) && (checkrow < 17)) {
		var checkcolumn = checkcolumn - 1;
		checkcolumn = two(checkcolumn);
		var checkrow = +checkrow + 1;
		checkrow = two(checkrow);
		check = "#" + checkcolumn + "t" + checkrow;
		var checkt = $(check).text();
		if (checkt == "\u2657\uFE0E") {
			bishopAttack(ppiece, check);
		}
		if (checkt != false) {
			checkcolumn = 0;
			checkrow = 17;
		}
	}
	
	//checking for attacking rooks;
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while (checkrow < 17) {
		checkrow++;
		checkrow = two(checkrow);
		check = "#" + checkcolumn + "t" + checkrow;
		checkt = $(check).text();
		if (checkt == "\u2656\uFE0E") {
			rookAttack(ppiece, check);
		}
		if (checkt != false) {
			checkrow = 17;
		}
	}
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while (checkrow > 0) {
		checkrow = checkrow - 1;
		checkrow = two(checkrow);
		check = "#" + checkcolumn + "t" + checkrow;
		checkt = $(check).text();
		if (checkt == "\u2656\uFE0E") {
			rookAttack(ppiece, check);
		}
		if (checkt != false) {
			checkrow = 0;
		}
	}
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while (checkcolumn < 9) {
		checkcolumn++;
		checkcolumn = two(checkcolumn);
		check = "#" + checkcolumn + "t" + checkrow;
		checkt = $(check).text();
		if (checkt == "\u2656\uFE0E") {
			rookAttack(ppiece, check);
		}
		if (checkt != false) {
			checkcolumn = 9;
		}
	}
	var checkcolumn = columndest;
	var checkrow = rowdest;
	while (checkcolumn > 0) {
		checkcolumn = checkcolumn - 1;
		checkcolumn = two(checkcolumn);
		check = "#" + checkcolumn + "t" + checkrow;
		checkt = $(check).text();
		if (checkt == "\u2656\uFE0E") {
			rookAttack(ppiece, check);
		}
		if (checkt != false) {
			checkcolumn = 0;
		}
	}
	
	//checking for attacking knights;

	var checkcolumn = columndest;
	var checkrow = rowdest;
	var check1 = +checkcolumn - 2;
	check1 = two(check1);
	var check2 = +checkrow - 1;
	check2 = two(check2);
	var check3 = +checkrow + 1;
	check3 = two(check3);
	var pos1 = "#" + check1 + "t" + check2;
	var check = $(pos1).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos1);
	}
	var pos2 = "#" + check1 + "t" + check3;
	var check = $(pos2).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos2);
	}
	var check4 = +checkcolumn - 1;
	check4 = two(check4);
	var check5 = +checkrow - 2;
	check5 = two(check5);
	var check6 = +checkrow + 2;
	check6 = two(check6);
	var pos3 = "#" + check4 + "t" + check5;
	var check = $(pos3).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos3);
	}
	var pos4 = "#" + check4 + "t" + check6;
	var check = $(pos4).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos4);
	}
	var check7 = +checkcolumn + 1;
	check7 = two(check7);
	var check8 = +checkrow - 2;
	check8 = two(check8);
	var check9 = +checkrow + 2;
	check9 = two(check9);

	var pos5 = "#" + check7 + "t" + check8;
	var check = $(pos5).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos5);
	}
	var pos6 = "#" + check7 + "t" + check9;
	var check = $(pos6).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos6);
	}
	var check10 = +checkcolumn + 2;
	check10 = two(check10);
	var check11 = +checkrow - 1;
	check11 = two(check11);
	var check12 = +checkrow + 1;
	check12 = two(check12);
	
	var pos7 = "#" + check10 + "t" + check11;
	var check = $(pos7).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos7);
	}
	var pos8 = "#" + check10 + "t" + check12;
	var check = $(pos8).text();
	if (check == "\u2658\uFE0E") {
		knightAttack(ppiece, pos8);
	}
	//This refreshes the battlefield if the player has reached the last row;
	var check = dest.substr(4, 2);
	if (check == "16") {
		level = readCookie("level");
		if (level != 5) {
			createCookie("block", 1, 10);
			setTimeout(function(){
				spawn("battlefield");
				var state = $(dest).text();
				level++;
				createCookie("level", level, 10);
				$(".level").text(level);
				spawn("progress", dest, state);
				createCookie("block", 0, 10);
			}, 1500);

		}
		else {
			endgame("thesea");
		}
	}
	army = readCookie("army");
	if (army < 1) {
		endgame("alldead");	
	}
}

function pawnAttack(ppiece, attacker) {
	var army = readCookie("army");
	if (ppiece == "knight") {
		var army = +army - (40 * 8);
	}
	else if (ppiece == "bishop") {
		var army = +army - (30 * 8);
	}
	else if (ppiece == "rook") {
		var army = +army - (20 * 8);
	}
	if (attacker == "player") {
		var army = +army + (17 * 8);
	}
	else {
		$(attacker).css('color', '#ecd25f');
		var ambushes = readCookie("ambushes");
		ambushes++;
		createCookie("ambushes", ambushes, 10);
		$("#ambushes").text(ambushes);
	}
	if (army > 0) {
		createCookie("army", army, 10);
		$(".army").text(army);
	}
	else {
		createCookie("army", 0, 10);
		$(".army").text("0");
	}
}

function knightAttack(ppiece, attacker) {
	var army = readCookie("army");
	if (ppiece == "knight") {
		var army = +army - (50 * 8);
	}
	else if (ppiece == "bishop") {
		var army = +army - (40 * 8);
	}
	else if (ppiece == "rook") {
		var army = +army - (30 * 8);
	}
	if (attacker == "player") {
		var army = +army + (17 * 8);
	}
	else {
		$(attacker).css('color', '#ecd25f');
		var ambushes = readCookie("ambushes");
		ambushes++;
		createCookie("ambushes", ambushes, 10);
		$("#ambushes").text(ambushes);
	}
	if (army > 0) {
		createCookie("army", army, 10);
		$(".army").text(army);
	}
	else {
		createCookie("army", 0, 10);
		$(".army").text("0");
	}
}

function bishopAttack(ppiece, attacker) {
	var army = readCookie("army");
	if (ppiece == "knight") {
		var army = +army - (60 * 8);
	}
	else if (ppiece == "bishop") {
		var army = +army - (50 * 8);
	}
	else if (ppiece == "rook") {
		var army = +army - (40 * 8);
	}
	if (attacker == "player") {
		var army = +army + (17 * 8);
	}
	else {
		$(attacker).css('color', '#ecd25f');
		var ambushes = readCookie("ambushes");
		ambushes++;
		createCookie("ambushes", ambushes, 10);
		$("#ambushes").text(ambushes);
	}
	if (army > 0) {
		createCookie("army", army, 10);
		$(".army").text(army);
	}
	else {
		createCookie("army", 0, 10);
		$(".army").text("0");
	}
}

function rookAttack(ppiece, attacker) {
	var army = readCookie("army");
	if (ppiece == "knight") {
		var army = +army - (30 * 8);
	}
	else if (ppiece == "bishop") {
		var army = +army - (40 * 8);
	}
	else if (ppiece == "rook") {
		var army = +army - (50 * 8);
	}
	if (attacker == "player") {
		var army = +army + (17 * 8);
	}
	else {
		$(attacker).css('color', '#ecd25f');
		var ambushes = readCookie("ambushes");
		ambushes++;
		createCookie("ambushes", ambushes, 10);
		$("#ambushes").text(ambushes);
	}
	if (army > 0) {
		createCookie("army", army, 10);
		$(".army").text(army);
	}
	else {
		createCookie("army", 0, 10);
		$(".army").text("0");
	}
}

function spawn(mode, location, state) {
	if (mode == "battlefield") {
		var row = 17;
		while (row > 2) {
			row = row - 1;
			row = two(row);
			var column = 0;
			while (column < 9) {
				column++;
				column = two(column);
				var square = "#" + column + "t" + row;
				var chance = randomspawn(15);
				$(square).text("");
				if (chance < 4) {
					$(square).text("\u2659\uFE0E");
				}
				else if (chance == 4) {
					$(square).text("\u2657\uFE0E");
				}
				else if (chance == 5) {
					$(square).text("\u2656\uFE0E");
				}
				else if (chance == 6) {
					$(square).text("\u2658\uFE0E");
				}
			}
		}
	}
	else if (mode == "initial") {
		var spawn = randomspawn(8);
		var spawn = "#0" + spawn + "u01";
		$(spawn).text("\u2658\uFE0E");
	}
	else if (mode == "progress") {
		$(".p").css('color', '#ec625f');
		$(".shade").hide();
		$(location).text("");
		var location = location.replace("u16", "u01");
		$(location).text(state);
	}
}

function randomspawn(order) {
	var random = Math.floor((Math.random() * order) + 1);
	return random;	
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
	attack(dest, "knight");
	turn(dest, "knight");
}

function attack(pos, ppiece) {
	var check1 = pos.substr(1, 2);
	var check2 = pos.substr(4, 2);
	var invade = "#" + check1 + "t" + check2;
	var prisoner = $(invade).text();
	if (prisoner != false) {
		if (prisoner == "\u2658\uFE0E") {
			knightAttack(ppiece, "player");
		}
		else if (prisoner == "\u2657\uFE0E") {
			bishopAttack(ppiece, "player");
		}
		else if (prisoner == "\u2656\uFE0E") {
			rookAttack(ppiece, "player");
		}
		else if (prisoner == "\u2659\uFE0E") {
			pawnAttack(ppiece, "player");
		}
		$(invade).text("");
		var attacks = readCookie("attacks");
		var attacks = +attacks + 1;
		createCookie("attacks", attacks, 10);
		$("#attacks").text(attacks);
		var newgreen = "#" + check1 + "s" + check2;
		var visible = $(newgreen).is(":visible");
		if (visible == false) {
			$(newgreen).show();
		}
	}
	//Now to calculate the score
	var army = readCookie("army");
	if (army < 1) {
		createCookie("army", 0, 10);
		var army = 0;
		$(".army").text(army);
		endgame("alldead");
	}
	if (attacks == undefined) {
		var attacks = readCookie("attacks");
		attacks = parseInt(attacks, 10);
	}
	var score = calcscore(attacks, "x");
}

function endgame(type) {
	//THE PLAYER FINISHES THE GAME
	if (type == "thesea") {
		$("#finished").show();
	}
	else if (type == "alldead") {
		createCookie("army", 0, 10);
		var army = 0;
		$(".army").text(army);
	}
	highscore();
	$("#finalscreen").show();
	createCookie("score", "x", 10);
}

function calcscore(attacks, ambushes) {
	if (attacks == "x") {
		var attacks = readCookie("attacks");
	}
	if (ambushes == "x") {
		var ambushes = readCookie("ambushes");
	}
	var army = readCookie("army");
	var level = readCookie("level");
	var score = +army * +attacks;
	var score2 = +ambushes * 20;
	score2 = +score2 + 1;
	score = +score / +score2;
	score = +level * +score;
	score = Math.floor(score);
	$(".score").text(score);
	return score;
}

function highscore() {
	//console.log("highscore function starts");
	var score1 = calcscore("x", "x", "x");
	var score2 = readCookie("highscoreana");
	//console.log("highscore values: " + score1 + " " + score2);
	if (score1 != 0) {
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
		createCookie("highscoreana", score1, 599);
		$("#newhigh").show();
    	var station = readCookie("station");
        $.post('engine_cb.php', {'whatstation': station, 'whatgame': 'anabasis', 'whatscore': highscore});
	}
	else {
		var highscore = score2;
	}
	$("#highscore").text(highscore);
}

function checkBishopMovement(location, origin) {
	var columndest = location.substr(0, 2);
	var rowdest = location.substr(3, 2);
	var dest = columndest + "u" + rowdest;
	var destcheck = columndest + "t" + rowdest;
	var columnorigin = origin.substr(1, 2);
	var roworigin = origin.substr(4, 2);
	var check1 = roworigin - rowdest;
	var check2 = columnorigin - columndest;
	check1 = Math.abs(check1);
	check2 = Math.abs(check2);
	if (check1 == check2) {
		var check3 = false;
		if (columndest < columnorigin) {
			if (rowdest < roworigin) {
				//southwest
				while ((columnorigin > 0) && (roworigin > 0)) {
					columnorigin = columnorigin - 1;
					roworigin = roworigin - 1;
					columnorigin = two(columnorigin);
					roworigin = two(roworigin);
					check3 = "#" + columnorigin + "t" + roworigin;
					check4 = columnorigin + "t" + roworigin;
					if (check4 != destcheck) {
						var prisoner = $(check3).text();
						if (prisoner != false) {
							return;
						}
					}
					else {
						movebishop(origin, dest);
						return;
					}
				}
			}
			else {
				//northwest
				while ((columnorigin > 0) && (roworigin < 17)) {
					columnorigin = columnorigin - 1;
					roworigin++;
					columnorigin = two(columnorigin);
					roworigin = two(roworigin);
					check3 = "#" + columnorigin + "t" + roworigin;
					check4 = columnorigin + "t" + roworigin;
					if (check4 != destcheck) {
						var prisoner = $(check3).text();
						if (prisoner != false) {
							return;
						}
					}
					else {
						movebishop(origin, dest);
						return;
					}
				}
			}
		}
		else {
			if (rowdest < roworigin) {
				//southeast
				while ((columnorigin < 9) && (roworigin > 0)) {
					columnorigin++;
					roworigin = roworigin - 1;
					columnorigin = two(columnorigin);
					roworigin = two(roworigin);
					check3 = "#" + columnorigin + "t" + roworigin;
					check4 = columnorigin + "t" + roworigin;
					if (check4 != destcheck) {
						var prisoner = $(check3).text();
						if (prisoner != false) {
							return;
						}
					}
					else {
						movebishop(origin, dest);
						return;
					}
				}
			}
			else {
				//northeast
				while ((columnorigin < 9) && (roworigin < 17)) {
					columnorigin++;
					roworigin++;
					columnorigin = two(columnorigin);
					roworigin = two(roworigin);
					check3 = "#" + columnorigin + "t" + roworigin;
					check4 = columnorigin + "t" + roworigin;
					if (check4 != destcheck) {
						var prisoner = $(check3).text();
						if (prisoner != false) {
							return;
						}
					}
					else {
						movebishop(origin, dest);
						return;
					}
				}
			}
		}
		//movebishop(origin, dest);
	}
}

function movebishop(pos, dest) {
	var dest = "#" + dest;
	$(pos).text("");
	$(dest).text("\u2657\uFE0E");
	attack(dest, "bishop");
	turn(dest, "bishop");
}

function checkRookMovement(location, origin) {
	var columndest = location.substr(0, 2);
	var rowdest = location.substr(3, 2);
	var dest = columndest + "u" + rowdest;
	var destcheck = columndest + "t" + rowdest;
	var columnorigin = origin.substr(1, 2);
	var roworigin = origin.substr(4, 2);
	if (columnorigin == columndest) {
		if (rowdest < roworigin) {
			//South
			while (roworigin > 0) {
				roworigin = roworigin - 1;
				roworigin = two(roworigin);
				check3 = "#" + columnorigin + "t" + roworigin;
				check4 = columnorigin + "t" + roworigin;
				if (check4 != destcheck) {
					var prisoner = $(check3).text();
					if (prisoner != false) {
						return;
					}
				}
				else {
					moverook(origin, dest);
					return;
				}
			}
		}
		else {
			//North
			while (roworigin < 17) {
				roworigin++;
				roworigin = two(roworigin);
				check3 = "#" + columnorigin + "t" + roworigin;
				check4 = columnorigin + "t" + roworigin;
				if (check4 != destcheck) {
					var prisoner = $(check3).text();
					if (prisoner != false) {
						return;
					}
				}
				else {
					moverook(origin, dest);
					return;
				}
			}
		}
	}
	if (roworigin == rowdest) {
		if (columndest < columnorigin) {
			//West
			while (columnorigin > 0) {
				columnorigin = columnorigin - 1;
				columnorigin = two(columnorigin);
				check3 = "#" + columnorigin + "t" + roworigin;
				check4 = columnorigin + "t" + roworigin;
				if (check4 != destcheck) {
					var prisoner = $(check3).text();
					if (prisoner != false) {
						return;
					}
				}
				else {
					moverook(origin, dest);
					return;
				}
			}
		}
		else {
			//East
			while (columnorigin < 17) {
				columnorigin++;
				columnorigin = two(columnorigin);
				check3 = "#" + columnorigin + "t" + roworigin;
				check4 = columnorigin + "t" + roworigin;
				if (check4 != destcheck) {
					var prisoner = $(check3).text();
					if (prisoner != false) {
						return;
					}
				}
				else {
					moverook(origin, dest);
					return;
				}
			}
		}
	}
//	moverook(origin, dest);
}

function moverook(pos, dest) {
	var dest = "#" + dest;
	$(pos).text("");
	$(dest).text("\u2656\uFE0E");
	attack(dest, "rook");
	turn(dest, "rook");
}

$(document).ready(function() {
	$(".shade").hide();
	$("#finalscreen").hide();
	$("#finalscreen").click(function() {
		check = $(this).css("opacity");
		if (check == 1) {
			$(this).css("opacity", "0.2");
		}
		else {
			$(this).css("opacity", 1);
		}
	});
	$("#newhigh").hide();
	$("#finished").hide();
	spawn("battlefield");
	spawn("initial");
	createCookie("score", 0, 10);
	createCookie("attacks", 0, 10);
	createCookie("ambushes", 0, 10);
	createCookie("army", 10000, 10);
	createCookie("level", 1, 10);
	createCookie("block", 0, 10);
	var highscore = readCookie("highscoreana");
	if (highscore == false) {
		createCookie("highscoreana", 0, 10);
	}
	// this fires when the user clicks on a square;
	// which is important, because that is how the user will move his piece;
	$(".pos").click(function() {
		var check = readCookie("block");
		if (check != 1) {
			var check = readCookie("score");
			if (check == "x") {
				return;
			}
			var location = jQuery(this).attr("id");
			var column = location.substring(0, 2);
			var row = location.substring(3, 5);
			var checkplayer = "#" + column + "u" + row;
			var checkplayer = $(checkplayer).text();
			if (checkplayer != 0) {
				return;
			}
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
		}
	});
	// this alternates the players piece;
	$(".u").click(function() {
		var check = readCookie("block");
		if (check != 1) {
			var player = $(this).text();
			var where = "#";
			where += jQuery(this).attr("id");
			// "\u2658\uFE0E" means knight
			if (player == "\u2658\uFE0E") {
				$(where).text("\u2657\uFE0E");
			}
			// "\u2657\uFE0E" means bishop
			else if (player == "\u2657\uFE0E") {
				$(where).text("\u2656\uFE0E");
			}
			// "\u2656\uFE0E" means rook
			else if (player == "\u2656\uFE0E") {
				$(where).text("\u2658\uFE0E");
			}
			else {
				alert("something went wrong");
			}
		}
	});
	$("#restart").click(function() {
		var link = $(this).attr("href");
		window.open(link,'_self');
	});

});