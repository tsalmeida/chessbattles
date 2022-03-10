<?php

if (isset($_POST['whatgame'])) {
    $station = $_POST['whatstation'];
    $game = $_POST['whatgame'];
    $score = int($_POST['whatscore']);
    $time = time();
    if ($station != "false") {
        $file = fopen("../st/$station/chessbattles.txt", "a+");
        $highscore = serialize(array("chessbattles", $game, $score, $time));
        $newline = "\n";
        $highscore = "$highscore$newline";
        fwrite($file, $highscore);
    }
}

?>