$(document).ready(function() {
	var alex = readCookie("highscorealex");
	var ana = readCookie("highscoreana");
	var troy = readCookie("highscoretroy");
	var second = readCookie("highscore2nd");
	if (alex == 1 || alex == false) { alex = "0"; }
	if (ana == false) { ana = "0"; }
	if (troy == false) { troy = "0"; }
	if (second == false) { second = "0"; }
	$("#alex").text(alex);
	$("#ana").text(ana);
	$("#troy").text(troy);
	$("#2nd").text(second);
});

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