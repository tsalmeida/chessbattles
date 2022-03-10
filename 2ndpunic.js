//SECOND PUNIC WAR

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

function spawn(mode) {
	if (mode == "knights") {
		var count = 0;
		while (count < 4) {
			count++;
			var random = randomspawn(2);
			if (count == 1) {
				var option1 = "#08u03";
				var option2 = "#08u04";
			}
			else if (count == 2) {
				var option1 = "#08u05";
				var option2 = "#08u06";
			}
			else if (count == 3) {
				var option1 = "#01u03";
				var option2 = "#01u04";
			}
			else if (count == 4) {
				var option1 = "#01u05";
				var option2 = "#01u06";
			}
			if (random == 1) {
				$(option1).text("\u2658\uFE0E");
			}
			else if (random == 2) {
				$(option2).text("\u2658\uFE0E");
			}
		}
	}
	else if (mode == "carthaginians") {
		var count = 0;
		var limit = 0;
		while (count < 4) {
			limit++;
			if (limit == 10) { return; }
			count++;
			var random = randomspawn(4);
			if (count == 1) {
				var option1 = "#01t14";
				var option2 = "#02t14";
				var option3 = "#01t13";
				var option4 = "#02t13";
			}
			else if (count == 2) {
				var option1 = "#03t14";
				var option2 = "#04t14";
				var option3 = "#03t13";
				var option4 = "#04t13";
			}
			else if (count == 3) {
				var option1 = "#05t14";
				var option2 = "#06t14";
				var option3 = "#05t13";
				var option4 = "#06t13";
			}
			else if (count == 4) {
				var option1 = "#07t14";
				var option2 = "#08t14";
				var option3 = "#07t13";
				var option4 = "#08t13";
			}
			var piece = "\u2658\uFE0E";
			if (random == 1) {
				var check = emptycheck(option1);
				if (check == true) {
					$(option1).text(piece);
				}
				else {
					random = 2;
				}
			}
			if (random == 2) {
				var check = emptycheck(option2);
				if (check == true) {
					$(option2).text(piece);
				}
				else {
					random = 3;
				}
			}
			if (random == 3) {
				var check = emptycheck(option3);
				if (check == true) {
					$(option3).text(piece);
				}
				else {
					random = 4;
				}
			}
			if (random == 4) {
				var check = emptycheck(option4);
				if (check == true) {
					$(option4).text(piece);
				}
				else {
					count = 0;
				}
			}
		}
	}
}

function emptycheck(square) {
	square = square.replace("t", "u");
	square = $(square).text();
	if (square == false) { return true; }
	else { return false; }
}

function respawn() {
	//console.log("respawn command starts");
	var check1 = $("#08u03").text();
	var check2 = $("#08u04").text();
	var check3 = $("#08u05").text();
	var check4 = $("#08u06").text();
	var check5 = $("#01u03").text();
	var check6 = $("#01u04").text();
	var check7 = $("#01u05").text();
	var check8 = $("#01u06").text();
	var checka = $("#08t03").text();
	var checkb = $("#08t04").text();
	var checkc = $("#08t05").text();
	var checkd = $("#08t06").text();
	var checke = $("#01t03").text();
	var checkf = $("#01t04").text();
	var checkg = $("#01t05").text();
	var checkh = $("#01t06").text();
	done = 0;
	count = 0;
	while (done == 0) {
		count++;
		random = randomspawn(8);
		//console.log("random in respawn command is " + random);
		if (count < 6) {
			if (check1 == false && checka == false && random == 1) { $("#08u03").text("\u2658\uFE0E"); $("#08s03").show(); done = 1; }
			if (check2 == false && checkb == false && random == 2) { $("#08u04").text("\u2658\uFE0E"); $("#08s04").show(); done = 1; }
			if (check3 == false && checkc == false && random == 3) { $("#08u05").text("\u2658\uFE0E"); $("#08s05").show(); done = 1; }
			if (check4 == false && checkd == false && random == 4) { $("#08u06").text("\u2658\uFE0E"); $("#08s06").show(); done = 1; }
			if (check5 == false && checke == false && random == 5) { $("#01u03").text("\u2658\uFE0E"); $("#01s03").show(); done = 1; }
			if (check6 == false && checkf == false && random == 6) { $("#01u04").text("\u2658\uFE0E"); $("#01s04").show(); done = 1; }
			if (check7 == false && checkg == false && random == 7) { $("#01u05").text("\u2658\uFE0E"); $("#01s05").show(); done = 1; }
			if (check8 == false && checkh == false && random == 8) { $("#01u06").text("\u2658\uFE0E"); $("#01s06").show(); done = 1; }
		}
		if (count > 5) {
			if (check1 == false && random == 1) { $("#08u03").text("\u2658\uFE0E"); $("#08t03").text(""); $("#08s03").show(); done = 1; }
			if (check2 == false && random == 2) { $("#08u04").text("\u2658\uFE0E"); $("#08t04").text(""); $("#08s04").show(); done = 1; }
			if (check3 == false && random == 3) { $("#08u05").text("\u2658\uFE0E"); $("#08t05").text(""); $("#08s05").show(); done = 1; }
			if (check4 == false && random == 4) { $("#08u06").text("\u2658\uFE0E"); $("#08t06").text(""); $("#08s06").show(); done = 1; }
			if (check5 == false && random == 5) { $("#01u03").text("\u2658\uFE0E"); $("#01t03").text(""); $("#01s03").show(); done = 1; }
			if (check6 == false && random == 6) { $("#01u04").text("\u2658\uFE0E"); $("#01t04").text(""); $("#01s04").show(); done = 1; }
			if (check7 == false && random == 7) { $("#01u05").text("\u2658\uFE0E"); $("#01t05").text(""); $("#01s05").show(); done = 1; }
			if (check8 == false && random == 8) { $("#01u06").text("\u2658\uFE0E"); $("#01t06").text(""); $("#01s06").show(); done = 1; }
		}
	}
	$(".u").css('color', '#5f80ec');
}

function turn() {
	var month = readCookie("month");
	if (month == 4 || month == 8 || month == 12) {
		spawn("carthaginians");
	}
	if (month == 3 || month == 6 || month == 9 || month == 12) {
		moveenemies();
		clearpieces();
	}
	if (month == 4 || month == 7 || month == 10 || month == 1) {
		clearpieces("redshade");
	}
	if (month != 12) {
		month++;
		createCookie("month", month, 10);
		$(".month").text(month);
	}
	else {
		createCookie("month", 1, 10);
		$(".month").text(1);
		var year = readCookie("year");
		year++;
		createCookie("year", year, 10);
		$(".year").text(year);
	}
	var score = calcscore("monthly");
	$(".score").text(score);
}

function clearpieces(mode) {
	var row = 0;
	while (row < 16) {
		row++;
		row = two(row);
		clearpieces2(row, mode);
	}

}

function clearpieces2(row, mode) {
	var column = 0;
	while (column < 8) {
		column++;
		column = two(column);
		check = column + "t" + row;
		check = fix(check);
		var enemy = $(check).text()
		if (enemy == "\u2658\uFE0E") {
			$(check).text("\u2658\uFE0E");
		}
		if (row < 3 && enemy != false) {
			$(check).text("");
		}
		if (mode == "redshade") {
			check = check.replace("t", "s");
			color = $(check).css("border-top-color");
			if (color == "rgb(236, 98, 95)" || color == "rgb(236, 210, 95)") {
				$(check).css("border-top-color", "#85ec5f");
				$(check).hide();
			}
		}
	}
}

function moveenemies() {
	var row = 1;
	while (row < 16) {
		row++;
		row = two(row);
		checkenemy(row);
	}
}

function checkenemy(row) {
	var column = 0;
	while (column < 8) {
		column++;
		column = two(column);
		check = column + "t" + row;
		check = fix(check);
		var enemy = $(check).text()
		if (enemy != 0) {
			turnenemy(check, enemy);
		}
	}
}

function turnenemy(pos, enemy) {
	if (enemy == "\u2658\uFE0E") {
	//console.log("knight move command for " + pos);
		var origin = fix(pos);
		var check = checkKnight(origin, "attack");
		if (check == false) {
			//console.log("attack command failed, conquer command started.");
			check = checkKnight(origin, "conquer");
			if (check == false || check == "void") {
				//console.log("conquer command failed, march command started.");
				check = checkKnight(origin, "march");
				if (check == false) {
					//console.log("march command failed, the piece dies.");
					//gets surrounded, dies;
					$(pos).text("");
					//$(pos).text("\u2694\uFE0E");
					//$(pos).css('color', '#ecd25f');
				}
				else {
					//console.log("march command successful for " + check);
					$(pos).text("");
					$(check).text("\u2658\uFE0E");
					$(check).css("color", "#ec625f");
				}
			}
			else {
				//console.log("conquer command successful for " + check);
				$(pos).text("");
				$(check).text("");
				check = check.replace("r", "b");
				$(check).show();
				attacks = readCookie("attacks");
				attacks++;
				if (attacks > 15) {
					endgame("defeat");
				}
				createCookie("attacks", attacks, 10);
				$(".attacks").text(attacks);
			}
		}
		else {
			//console.log("attack command successful for " + check);
			$(pos).text("");
			$(check).text("");
			check = check.replace("u", "s")
			$(check).css("border-top-color", "#ecd25f");
			$(check).show();
			pos = pos.replace("t", "s");
			$(pos).css("border-top-color", "#ec625f");
			$(pos).show();
			respawn();
		}
	}
}

function checkKnight(origin, mode, destination) {
	var column = origin.substr(0, 2);
	var row = origin.substr(3, 2);

	var farwest = +column - 2;
	farwest = two(farwest);
	var nearsouth = +row - 1;
	nearsouth = two(nearsouth);
	var nearnorth = +row + 1;
	nearnorth = two(nearnorth);
	var nearwest = +column - 1;
	nearwest = two(nearwest);
	var farsouth = +row - 2;
	farsouth = two(farsouth);
	var farnorth = +row + 2;
	farnorth = two(farnorth);
	var neareast = +column + 1;
	neareast = two(neareast);
	var fareast = +column + 2;
	fareast = two(fareast);

	if (farwest > 0 && nearsouth > 0) {
		var pos1 = farwest + "u" + nearsouth;
	};
	if (farwest > 0 && nearnorth < 17) {
		var pos2 = farwest + "u" + nearnorth;
	};
	if (nearwest > 0 && farsouth > 0) {
		var pos3 = nearwest + "u" + farsouth;
	};
	if (nearwest > 0 && farnorth < 17) {
		var pos4 = nearwest + "u" + farnorth;
	};
	if (neareast < 9 && farsouth > 0) {
		var pos5 = neareast + "u" + farsouth;
	};
	if (neareast < 9 && farnorth < 17) {
		var pos6 = neareast + "u" + farnorth;
	};
	if (fareast < 9 && nearsouth > 0) {
		var pos7 = fareast + "u" + nearsouth;
	};
	if (fareast < 9 && nearnorth < 17) {
		var pos8 = fareast + "u" + nearnorth;
	};
	
	if (mode == "check") {
		var destination1 = destination.substr(0, 2);
		var destination2 = destination.substr(3, 2);
		var dest = destination1 + "u" + destination2;
		if (dest == pos1) {
			return true;
		}
		if (dest == pos2) {
			return true;
		}
		if (dest == pos3) {
			return true;
		}
		if (dest == pos4) {
			return true;
		}
		if (dest == pos5) {
			return true;
		}
		if (dest == pos6) {
			return true;
		}
		if (dest == pos7) {
			return true;
		}
		if (dest == pos8) {
			return true;
		}
	}
	else {
		if (pos1 != undefined) {
			pos1 = fix(pos1);
			var piece1 = $(pos1).text();
		}
		else {
			pos1 = "void";
		}
		if (pos2 != undefined) {
			pos2 = fix(pos2);
			var piece2 = $(pos2).text();
		}
		else {
			pos2 = "void";
		}
		if (pos3 != undefined) {
			pos3 = fix(pos3);
			var piece3 = $(pos3).text();
		}
		else {
			pos3 = "void";
		}
		if (pos4 != undefined) {
			pos4 = fix(pos4);
			var piece4 = $(pos4).text();
		}
		else {
			pos4 = "void";
		}
		if (pos5 != undefined) {
			pos5 = fix(pos5);
			var piece5 = $(pos5).text();
		}
		else {
			pos5 = "void";
		}
		if (pos6 != undefined) {
			pos6 = fix(pos6);
			var piece6 = $(pos6).text();
		}
		else {
			pos6 = "void";
		}
		if (pos7 != undefined) {
			pos7 = fix(pos7);
			var piece7 = $(pos7).text();
		}
		else {
			pos7 = "void";
		}
		if (pos8 != undefined) {
			pos8 = fix(pos8);
			var piece8 = $(pos8).text();
		}
		else {
			pos8 = "void";
		}
		if (piece1 == false) { piece1 = "empty"; };
		if (piece2 == false) { piece2 = "empty"; };
		if (piece3 == false) { piece3 = "empty"; };
		if (piece4 == false) { piece4 = "empty"; };
		if (piece5 == false) { piece5 = "empty"; };
		if (piece6 == false) { piece6 = "empty"; };
		if (piece7 == false) { piece7 = "empty"; };
		if (piece8 == false) { piece8 = "empty"; };
		if (piece1 == undefined) { piece1 = "nothing"; };
		if (piece2 == undefined) { piece2 = "nothing"; };
		if (piece3 == undefined) { piece3 = "nothing"; };
		if (piece4 == undefined) { piece4 = "nothing"; };
		if (piece5 == undefined) { piece5 = "nothing"; };
		if (piece6 == undefined) { piece6 = "nothing"; };
		if (piece7 == undefined) { piece7 = "nothing"; };
		if (piece8 == undefined) { piece8 = "nothing"; };
		var found = 0;
		var limit = 0;
		while (found == 0) {
			limit++;
			if (limit == 7) {
				//console.log("command failed because it has met its limit of random guesses");
				return false;
			}
			//console.log("while found = 0 worked once");
			var random = randomspawn(8);
			//console.log("random is " + random);
			if (mode == "guess") {
				console.log("guess command starts");
				if (piece1 != "empty" && piece1 != "nothing") { return pos1; }
				if (piece2 != "empty" && piece2 != "nothing") { return pos2; }
				if (piece3 != "empty" && piece3 != "nothing") { return pos3; }
				if (piece4 != "empty" && piece4 != "nothing") { return pos4; }
				if (piece5 != "empty" && piece5 != "nothing") { return pos5; }
				if (piece6 != "empty" && piece6 != "nothing") { return pos6; }
				if (piece7 != "empty" && piece7 != "nothing") { return pos7; }
				if (piece8 != "empty" && piece8 != "nothing") { return pos8; }
				return false;
			}
			if (mode == "attack") {
				//console.log("attack command for " + origin + ": on " + pos1 + " we find " + piece1 + "; on " + pos2 + " we find " + piece2 + "; on " + pos3 + " we find " + piece3 + "; on " + pos4 + " we find " + piece4 + "; on " + pos5 + " we find " + piece5 + "; on " + pos6 + " we find " + piece6 + "; on " + pos7 + " we find " + piece7 + "; on " + pos8 + " we find " + piece8);
				var count = 0;
				if (piece1 == "empty" || piece1 == "nothing") { count++; }
				if (piece2 == "empty" || piece2 == "nothing") { count++; }
				if (piece3 == "empty" || piece3 == "nothing") { count++; }
				if (piece4 == "empty" || piece4 == "nothing") { count++; }
				if (piece5 == "empty" || piece5 == "nothing") { count++; }
				if (piece6 == "empty" || piece6 == "nothing") { count++; }
				if (piece7 == "empty" || piece7 == "nothing") { count++; }
				if (piece8 == "empty" || piece8 == "nothing") { count++; }
				if (count == 8) {
					found = 1;
					//console.log("attack command failed because all reachable squares are either empty or non-existing");
				}
				else if (count == 7) { random = 1; }
				if (random == 1) {
					if (piece1 != "nothing" && piece1 != "empty") {
						found = 1;
						random++;
						return pos1;
					}
					random++;
				}
				if (random == 2) {
					if (piece2 != "nothing" && piece2 != "empty") {
						found = 2;
						random++;
						return pos2;
					}
					random++;
				}
				if (random == 3) {
					if (piece3 != "nothing" && piece3 != "empty") {
						found = 3;
						random++;
						return pos3;
					}
					random++;
				}
				if (random == 4) {
					if (piece4 != "nothing" && piece4 != "empty") {
						found = 4;
						random++;
						return pos4;
					}
					random++;
				}
				if (random == 5) {
					if (piece5 != "nothing" && piece5 != "empty") {
						found = 5;
						random++;
						return pos5;
					}
					random++;
				}
				if (random == 6) {
					if (piece6 != "nothing" && piece6 != "empty") {
						found = 6;
						random++;
						return pos6;
					}
					random++;
				}
				if (random == 7) {
					if (piece7 != "nothing" && piece7 != "empty") {
						found = 7;
						random++;
						return pos7;
					}
					random++;
				}
				if (random == 8) {
					if (piece8 != "nothing" && piece8 != "empty") {
						found = 8;
						random++;
						return pos8;
					}
				}

			}
			if (mode == "randomwalk" || mode == "march") {
				//console.log("randomwalk or march preparation starts");
				if (pos1 != "void") {
					var player1 = $(pos1).text();
					var pos1 = pos1.replace("u", "t");
					var piece1 = $(pos1).text();
					if (piece1 == false && player1 == false) { piece1 = "empty"; }
				}
				else {
					var piece1 = "nothing";
				}
				if (pos2 != "void") {
					var player2 = $(pos2).text();
					var pos2 = pos2.replace("u", "t");
					var piece2 = $(pos2).text();
					if (piece2 == false && player2 == false) { piece2 = "empty"; }
				}
				else {
					var piece2 = "nothing";
				}
				if (pos3 != "void") {
					var player3 = $(pos3).text();
					var pos3 = pos3.replace("u", "t");
					var piece3 = $(pos3).text();
					if (piece3 == false && player3 == false) { piece3 = "empty"; }
				}
				else {
					var piece3 = "nothing";
				}
				if (pos4 != "void") {
					var player4 = $(pos4).text();
					var pos4 = pos4.replace("u", "t");
					var piece4 = $(pos4).text();
					if (piece4 == false && player4 == false) { piece4 = "empty"; }
				}
				else {
					var piece4 = "nothing";
				}
				if (pos5 != "void") {
					var player5 = $(pos5).text();
					var pos5 = pos5.replace("u", "t");
					var piece5 = $(pos5).text();
					if (piece5 == false && player5 == false) { piece5 = "empty"; }
				}
				else {
					var piece5 = "nothing";
				}
				if (pos6 != "void") {
					var player6 = $(pos6).text();
					var pos6 = pos6.replace("u", "t");
					var piece6 = $(pos6).text();
					if (piece6 == false && player6 == false) { piece6 = "empty"; }
				}
				else {
					var piece6 = "nothing";
				}
				if (pos7 != "void") {
					var player7 = $(pos7).text();
					var pos7 = pos7.replace("u", "t");
					var piece7 = $(pos7).text();
					if (piece7 == false && player7 == false) { piece7 = "empty"; }
				}
				else {
					var piece7 = "nothing";
				}
				if (pos8 != "void") {
					var player8 = $(pos8).text();
					var pos8 = pos8.replace("u", "t");
					var piece8 = $(pos8).text();
					if (piece8 == false && player8 == false) { piece8 = "empty"; }
				}
				else {
					var piece8 = "nothing";
				}
			}
			if (mode == "march") {
				found = 1;
				//console.log("march command for: " + origin + " on " + pos1 + " we find " + piece1 + "; on " + pos2 + " we find " + piece2 + "; on " + pos3 + " we find " + piece3 + "; on " + pos4 + " we find " + piece4 + "; on " + pos5 + " we find " + piece5 + "; on " + pos6 + " we find " + piece6 + "; on " + pos7 + " we find " + piece7 + "; on " + pos8 + " we find " + piece8);
				random = randomspawn(2);
				count = 0;
				if (piece3 == "empty") { count++; }
				if (piece5 == "empty") { count++; }
				if (piece1 == "empty") { count++; }
				if (piece7 == "empty") { count++; }
				if (count == 4) {
					random2 = randomspawn(4);
					if (random2 == 1) { return pos3; }
					else if (random2 == 2) { return pos5; }
					else if (random2 == 3) { return pos1; }
					else if (random2 == 4) { return pos7; }
				}
				if (piece3 == "empty" && piece5 == "empty") {
					if (piece1 == "empty") {
						random2 = randomspawn(3);
						if (random2 == 1) { return pos3; }
						else if (random2 == 2) { return pos5; }
						else if (random2 == 3) { return pos1; }
					}
					if (piece7 == "empty") {
						random2 = randomspawn(3);
						if (random2 == 1) { return pos3; }
						else if (random2 == 2) { return pos5; }
						else if (random2 == 3) { return pos7; }
					}
					if (random == 1) { return pos3; }
					else { return pos5; }
				}
				if (piece3 == "empty") { return pos3; }
				if (piece5 == "empty") { return pos5; }
				if (piece1 == "empty" && piece7 == "empty") {
					if (random == 1) { return pos1; }
					else { return pos7; }
				}
				if (piece1 == "empty") { return pos1; }
				if (piece7 == "empty") { return pos7; }
				//console.log("march command has failed because no proper squares have been found");
				return false;
			}
			if (mode == "conquer") {
				found = 1;
				//console.log("conquer command starts with the following values for posx and piecex:");
				//console.log(pos1 + pos2 + pos3 + pos5 + pos7 + pos8);
				//console.log(piece1 + piece2 + piece3 + piece5 + piece7 + piece8);
				row = origin.substr(3, 2);
				//console.log(row);
				if (row == 04 || row == 03) {
					//alert("this happened and we are on row " + row);
					if (pos3 != "void" && piece3 == "empty") { 
						pos3 = pos3.replace("u", "r");
						piece3 = $(pos3).text();
					}
					if (pos5 != "void" && piece5 == "empty") {
						pos5 = pos5.replace("u", "r");
						piece5 = $(pos5).text();
					}
					if (piece3 != false && piece5 != false) {
						random = randomspawn(2);
						if (random == 1) { return pos3; }
						else { return pos5; }
					}
					if (piece3 != false) { return pos3; }
					if (piece5 != false) { return pos5; }
				}
				if (row == 03 || row == 02) {
					//alert("this happened and we are on row " + row);
					if (pos1 != "void" && piece1 == "empty") {
						pos1 = pos1.replace("u", "r");
						piece1 = $(pos1).text();
					}
					if (pos7 != "void" && piece7 == "empty") {
						pos7 = pos7.replace("u", "r");
						piece7 = $(pos7).text();
					}
					if (piece1 != false && piece7 != false) {
						random = randomspawn(2);
						if (random == 1) { return pos1; }
						else { return pos7; }
					}
					if (piece1 != false) { return pos1; }
					if (piece7 != false) { return pos7; }
				}
				if (row == 01) {
					//alert("this happened and we are on row " + row);
					if (pos2 != "void" && piece2 == "empty") {
						pos2 = pos2.replace("u", "r");
						piece2 = $(pos2).text();
					}
					if (pos8 != "void" && piece8 == "empty") {
						pos8 = pos8.replace("u", "r");
						piece8 = $(pos8).text();
					}
					if (piece2 != false && piece8 != false) {
						random = randomspawn(2);
						if (random == 1) { return pos2; }
						else { return pos8; }
					}
					if (piece2 != false) { return pos2; }
					if (piece8 != false) { return pos8; }
				}
				//console.log("march command failed, these are the values fro posx and piecex:");
				//console.log(pos1 + pos2 + pos3 + pos5 + pos7 + pos8);
				//console.log(piece1 + piece2 + piece3 + piece5 + piece7 + piece8);
				return false;
			}
			if (mode == "randomwalk") {
				var count = 0;
				if (piece1 != "empty" || piece1 == "nothing") { count++; }
				if (piece2 != "empty" || piece2 == "nothing") { count++; }
				if (piece3 != "empty" || piece3 == "nothing") { count++; }
				if (piece4 != "empty" || piece4 == "nothing") { count++; }
				if (piece5 != "empty" || piece5 == "nothing") { count++; }
				if (piece6 != "empty" || piece6 == "nothing") { count++; }
				if (piece7 != "empty" || piece7 == "nothing") { count++; }
				if (piece8 != "empty" || piece8 == "nothing") { count++; }
				//console.log("randomwalk command: on " + pos1 + " we find " + piece1 + "; on " + pos2 + " we find " + piece2 + "; on " + pos3 + " we find " + piece3 + "; on " + pos4 + " we find " + piece4 + "; on " + pos5 + " we find " + piece5 + "; on " + pos6 + " we find " + piece6 + "; on " + pos7 + " we find " + piece7 + "; on " + pos8 + " we find " + piece8);
				//console.log("count is equal to " + count);
				if (count == 8) { found = 1; }
				else if (count == 1) { random = 1; }
				if (count != 8 && count != 1) {
					if (random == 1) {
						if (piece1 == "empty") {
							found = 1;
							random++;
							return pos1;
						}
						else { random++; }
					}
					else if (random == 2) {
						if (piece2 == "empty") {
							found = 1;
							random++;
							return pos2;
						}
						else { random++; }
					}
					else if (random == 3) {
						if (piece3 == "empty") {
							found = 1;
							random++;
							return pos3;
						}
						else { random++; }
					}
					else if (random == 4) {
						if (piece4 == "empty") {
							found = 1;
							random++;
							return pos4;
						}
						else { random++; }
					}
					else if (random == 5) {
						if (piece5 == "empty") {
							found = 1;
							random++;
							return pos5;
						}
						else { random++; }
					}
					else if (random == 6) {
						if (piece6 == "empty") {
							found = 1;
							random++;
							return pos6;
						}
						else { random++; }
					}
					else if (random == 7) {
						if (piece7 == "empty") {
							found = 1;
							random++;
							return pos7;
						}
						else { random++; }
					}
					else if (random == 8) {
						if (piece8 == "empty") {
							found = 1;
							random++;
							return pos8;
						}
					}

				}
			}

		}
		return false;
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

function endgame(type) {
	//THE PLAYER FINISHES THE GAME
	if (type == "victory") {
		$("#finished").show();
	}
	highscore(type);
	$("#finalscreen").show();
	createCookie("score", "x", 10);
}

function calcscore(type) {
		console.log("calcscore command starts, mode: " + type);
	var month = readCookie("month");
	var year = readCookie("year");
	var destroyed = readCookie("destroyed");
	var attacks = readCookie("attacks");
		console.log("values for all the cookies:" + month + " " + year + " " + destroyed + " " + attacks);
	if (attacks == 0) {
		attacks++;
	}
	var total = year - 1;
		console.log(total);
	total = total * 12;
		console.log(total);
	total = +total + +month;
		console.log(total);
	$(".monthtotal").text(total);
	var score2 = +destroyed * 150;
		console.log(score2);
	var score = score2 / attacks;
		console.log(score);
	score = +score - (total / 2);
	score = Math.floor(score);
	if (type == "victory") {
		if (score < 0) {
			console.log("score is smaller than zero, values before and after treatment follow");
			console.log(score);
			score = score * -1;
			console.log(score);
			score = score * 3;
			console.log(score);
		}
		else {
			console.log("score is larger than than zero, values before and after treatment follow");
			console.log(score);
			score = score * 5;
			console.log(score);
		}
	}
		console.log(score + " final");
	if (type != "monthly") {
		$(".score").text(score);
	}
	return score;
}

function highscore(type) {
	//console.log("highscore function starts");
	var score1 = calcscore(type);
	var score2 = readCookie("highscore2nd");
	//console.log("highscore values: " + score1 + " " + score2);
	if (score1 > score2) {
		var highscore = score1;
		createCookie("highscore2nd", score1, 700);
		$("#newhigh").show();
	}
	if (score2 == 0) {
		createCookie("highscore2nd", score1, 700);
		var highscore = score1;
    	var station = readCookie("station");
        $.post('engine_cb.php', {'whatstation': station, 'whatgame': '2ndpunic', 'whatscore': highscore});
	}
	else {
		var highscore = score2;
	}
	$("#highscore").text(highscore);
}

function movePlayer(origin, destination, mode) {
	if (mode != "pre-checked") {
		var check = checkKnight(origin, "check", destination);
	}
	else {
		var check = true;
	}
	if (check == true) {
		origin = fix(origin);
		destination = fix(destination);
		destination = destination.replace("c", "u");
		check = $(destination).text();
		$(destination).text("\u2658\uFE0E");
		$(origin).text("");
		createCookie("active", 0, 10);
		turn();
	}
}

function attack(origin, destination, mode) {
	if (mode != "pre-checked") {
		var check = checkKnight(origin, "check", destination);
	}
	else {
		var check = true;
	}
	if (check == true) {
		var row = destination.substr(-2);
		if (row < 15) {
			origin = fix(origin);
			destination = fix(destination);
			var epiece = $(destination).text();
			$(destination).text("");
			$(destination).css("color", "#ec625f");
			var destination = destination.replace("t", "u");
			$(destination).text("\u2658\uFE0E");
			$(origin).text("");
			createCookie("active", 0, 10);
			turn();
		}
		else {
			origin = fix(origin);
			destination = fix(destination);
			$(origin).text("");
			$(origin).css("color", "#ec625f");
			$(destination).text("");
			$(destination).hide();
			destination = destination.replace("r", "b");
			$(destination).show();
			destroyed = readCookie("destroyed");
			destroyed++;
			createCookie("destroyed", destroyed, 10);
			$(".destroyed").text(destroyed);
			if (destroyed > 15) {
				endgame("victory");
				return;
			}
			respawn();
			turn();
		}
	}
}

function fix(code) {
	var sign = code.substr(0,1);
	if (sign == "#") {
		var result = code.substr(1,5);
		return result;
	}
	else {
		var result = "#" + code;
		return result;
	}
}

$(document).ready(function() {
	$(".shade").hide();
	$(".b").hide();
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
	createCookie("score", 0, 10);
	createCookie("loot", 0, 10);
	createCookie("month", 1, 10);
	createCookie("year", 1, 10);
	createCookie("destroyed", 0, 10);
	createCookie("attacks", 0, 10);
	var highscore = readCookie("highscore2nd");
	if (highscore == false) {
		createCookie("highscore2nd", 0, 700);
	}
	spawn("knights");
	spawn("carthaginians");
	// this fires when the user clicks on a square;
	// which is important, because that is how the user will move his piece;
	$(".pos").click(function() {
		var check = readCookie("score");
		if (check == "x") {
			return;
		}
		var origin = readCookie("active");
		if (origin != 0) {
			var location = jQuery(this).attr("id");
			var check = fix(location);
			var check = $(check).text();
			if (check == false) {
				movePlayer(origin, location);
			}
		}
		else {
			var location = jQuery(this).attr("id");
			check = location.replace("c", "t");
			check = fix(check);
			check = $(check).text();
			check2 = location.replace("c", "u");
			check2 = fix(check2);
			check2 = $(check2).text();
			check3 = location.substr(-2);
			if (check == false && check2 == false && check3 > 2 && check3 < 15) {
				console.log("guessing routine found nothing and will proceed with moving the piece.");
				var guess = checkKnight(location, "guess", "guess");
				if (guess != false) {
					console.log("guess was not false: " + guess + location);
					guess = fix(guess);
					movePlayer(guess, location);
					var shade = guess;
					var shade = fix(shade);
					var shade = shade.replace("u", "s");
					$(shade).hide();
				}
			}
		}
	});
	$(".u").click(function() {
		var piece = jQuery(this).attr("id");
		createCookie("active", piece, 10);
		$(".u").css('color', '#5f80ec');
		$(this).css('color', '#ecd25f');
		var shade = fix(piece);
		var shade = shade.replace("u", "s");
		$(shade).hide();
	});
	$(".p").click(function() {
		var destination = jQuery(this).attr("id");
		var origin = readCookie("active");
		if (origin != 0) {
			attack(origin, destination);
		}
		else {
			var guess = checkKnight(destination, "guess", "guess");
			if (guess != false) {
				console.log("attack command is starting after guess command returned: " + guess);
				guess = fix(guess);
				attack(guess, destination, "pre-checked");
				var shade = fix(guess);
				var shade = shade.replace("u", "s");
				$(shade).hide();
			}
		}
	});
	$(".r").click(function() {
		var destination = jQuery(this).attr("id");
		var row = destination.substr(-2);
		var origin = readCookie("active");
		if (row > 2) {
			if (origin != 0) {
				if (row > 14) {
					attack(origin, destination);
				}
			}
			else {
				var guess = checkKnight(destination, "guess", "guess");
				if (guess != false) {
					console.log("attack command is starting after guess command returned: " + guess);
					guess = fix(guess);
					attack(guess, destination, "pre-checked");
				}
			}
		}
	});
	$("#restart").click(function() {
		var link = $(this).attr("href");
		window.open(link,'_self');
	});
});