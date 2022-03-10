<?php

/**
 * Class OneFileLoginApplication
 *
 * An entire php application with user registration, login and logout in one file.
 * Uses very modern password hashing via the PHP 5.5 password hashing functions.
 * This project includes a compatibility file to make these functions available in PHP 5.3.7+ and PHP 5.4+.
 *
 * @author Panique
 * @link https://github.com/panique/php-login-one-file/
 * @license http://opensource.org/licenses/MIT MIT License
 */

function loadWallpaper($mode) {
	$args = func_get_args();
	$mode = $args[0];
	if (!isset($args[1])) { $args[1] == false; }
	$mobile = $args[1];
	if ($mode == "login") {
		//if ($mobile == "mobile") {
			$file = '../st/mobilewallpapers/options.txt';
		//}
		//else {
			//$file = '../nxst/presets/standard/options.txt';
		//}
	}
	elseif ($mode == "root") {
		//if ($mobile == "mobile") {
			$file = 'st/mobilewallpapers/options.txt';
		//}
		//else {
		//	$file = 'nxst/presets/standard/options.txt';
		//}
	}
	$fopen = fopen($file, 'a+');
	$array = file($file);
	$result = array();
	$result2 = array();
	foreach($array as $key => $line) {
		$instance = unserialize($line);
		if (($instance[0] == "linkBM") && ($instance[2] == "bm30")) {
			array_push($result, $instance);
		}
		elseif ($instance[0] == "color") {
			array_push($result2, $instance[1]);
		}
	}
	$count = count($result);
	$random = rand(1,$count);
	$chosen = $result[$random];
	if ($result2 != false) {
		$count = count($result2);
		$random = rand(1,$count);
		$chosen2 = $result2[$random];
	}
	else {
		$chosen2 = "#191919";
	}
	$chosen[3] = str_replace("battlestation.rocks", "www.nexustation.com", $chosen[3]);
	$chosen[3] = str_replace("tekhnexos.com", "nexustation.com", $chosen[3]);
	$chosen[3] = str_replace("bsrx", "nxst", $chosen[3]);
	return array($chosen[3],$chosen2);
}

function loadWallpaper2() {
	$file = '../nexus/options.txt';
	$fopen = fopen($file, 'a+');
	$array = file($file);
	$result2 = array();
	foreach($array as $key => $line) {
		$instance = unserialize($line);
		if ($instance[0] == "color") {
			array_push($result2, $instance[1]);
		}
	}
	$count = count($result2);
	$random = rand(1,$count);
	$chosen2 = $result2[$random];
	return array('../nxst/images/dots2.gif',$chosen2);
}



function loadTop() {
	$args = func_get_args();
	if (!isset($args[0])) { $args[0] = false; }
	$mode = $args[0];

	require_once '../nxst/engine_files/Mobile-Detect-2.8.26/Mobile_Detect.php';
	$detect = new Mobile_Detect;
	if ( $detect->isMobile() ) { $mobile = true; }
	else { $mobile = false; }
	echo '<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<link rel="stylesheet" href="../nxst/css/s.php/simple.scss"/>
			<link rel="icon" type="image/vnd.microsoft.icon" href="../nxst/favicons/simple.scss.ico"/>
			<title>Chess Battles</title>
			<style>
				p, h1, h2, h3 {
					width: auto;
					max-width: 60ch;
					text-align: center;
				}
				p {
				    text-align: left;
				}
				p + p {
					margin: 0;
					margin-top: 0.3em;
				}
				html {
						background-color: #191919;
				}
				.ssl-div {
					float: right;
					margin-top: 0;
				}
				html {
						background-color: #191919;
				}
				#screenFiller {';

					if ($mobile == false) {
						$image = loadWallpaper("login", "desktop", $mode);
					}
					else {
						$image = loadWallpaper("login", "mobile", $mode);
					}
						
					echo "background-image: url($image[0]);";
					echo "background-color: $image[1];";
					echo 'background-size: cover;
					background-position: center center;
					position: fixed;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
				}
			</style>
		</head>
		<body>
			<div id="screenFiller">
				<div id="textDiv">';
}

function loadBottom() {
	echo
				'</div>
			</div>
		</body>
	</html>';
}
 
class OneFileLoginApplication
{

    /**
     * @var string Type of used database (currently only SQLite, but feel free to expand this with mysql etc)
     */
    private $db_type = "sqlite"; //

    /**
     * @var string Path of the database file (create this with _install.php)
     */
    private $db_sqlite_path = "../nxst/engine_files/users.db";

    /**
     * @var object Database connection
     */
    private $db_connection = null;

    /**
     * @var bool Login status of user
     */
    private $user_is_logged_in = false;

    /**
     * @var string System messages, likes errors, notices, etc.
     */
    public $feedback = "";


    /**
     * Does necessary checks for PHP version and PHP password compatibility library and runs the application
     */
    public function __construct()
    {
        if ($this->performMinimumRequirementsCheck()) {
            $this->runApplication();
        }
    }

    /**
     * Performs a check for minimum requirements to run this application.
     * Does not run the further application when PHP version is lower than 5.3.7
     * Does include the PHP password compatibility library when PHP version lower than 5.5.0
     * (this library adds the PHP 5.5 password hashing functions to older versions of PHP)
     * @return bool Success status of minimum requirements check, default is false
     */
    private function performMinimumRequirementsCheck()
    {
	return true;
    }

    /**
     * This is basically the controller that handles the entire flow of the application.
     */
    public function runApplication()
    {
        // check is user wants to see register page (etc.)
        if (isset($_GET["action"]) && $_GET["action"] == "register") {
            $this->doRegistration();
            $this->showPageRegistration();
        } else {
            // start the session, always needed!
            $this->doStartSession();
            // check for possible user interactions (login with session/post data or logout)
            $this->performUserLoginAction();
            // show "page", according to user's login status
            if ($this->getUserLoginStatus()) {
                $this->showPageLoggedIn();
            } else {
                $this->showPageLoginForm();
            }
        }
    }

    /**
     * Creates a PDO database connection (in this case to a SQLite flat-file database)
     * @return bool Database creation success status, false by default
     */
    private function createDatabaseConnection()
    {
        try {
            $this->db_connection = new PDO($this->db_type . ':' . $this->db_sqlite_path);
            return true;
        } catch (PDOException $e) {
            $this->feedback = "PDO database connection problem: " . $e->getMessage();
        } catch (Exception $e) {
            $this->feedback = "General problem: " . $e->getMessage();
        }
        return false;
    }

    /**
     * Handles the flow of the login/logout process. According to the circumstances, a logout, a login with session
     * data or a login with post data will be performed
     */
    private function performUserLoginAction()
    {
        if (isset($_GET["action"]) && $_GET["action"] == "logout") {
            $this->doLogout();
        } elseif (!empty($_SESSION['user_name']) && ($_SESSION['user_is_logged_in'])) {
            $this->doLoginWithSessionData();
        } elseif (isset($_POST["login"])) {
            $this->doLoginWithPostData();
        }
    }

    /**
     * Simply starts the session.
     * It's cleaner to put this into a method than writing it directly into runApplication()
     */
    private function doStartSession()
    {
        if(session_status() == PHP_SESSION_NONE) session_start();
    }

    /**
     * Set a marker (NOTE: is this method necessary ?)
     */
    private function doLoginWithSessionData()
    {
        $this->user_is_logged_in = true; // ?
    }

    /**
     * Process flow of login with POST data
     */
    private function doLoginWithPostData()
    {
        if ($this->checkLoginFormDataNotEmpty()) {
            if ($this->createDatabaseConnection()) {
                $this->checkPasswordCorrectnessAndLogin();
            }
        }
    }

    /**
     * Logs the user out
     */
    private function doLogout()
    {
        $_SESSION = array();
        session_destroy();
        $this->user_is_logged_in = false;
        $this->feedback = "You&rsquo;re out.";
    }

    /**
     * The registration flow
     * @return bool
     */
    private function doRegistration()
    {
        if ($this->checkRegistrationData()) {
            if ($this->createDatabaseConnection()) {
                $this->createNewUser();
            }
        }
        // default return
        return false;
    }

    /**
     * Validates the login form data, checks if username and password are provided
     * @return bool Login form data check success state
     */
    private function checkLoginFormDataNotEmpty()
    {
        if (!empty($_POST['user_name']) && !empty($_POST['user_password'])) {
            return true;
        } elseif (empty($_POST['user_name'])) {
            $this->feedback = "Username field was empty.";
        } elseif (empty($_POST['user_password'])) {
            $this->feedback = "Password field was empty.";
        }
        // default return
        return false;
    }

    /**
     * Checks if user exits, if so: check if provided password matches the one in the database
     * @return bool User login success status
     */
    private function checkPasswordCorrectnessAndLogin()
    {
        // remember: the user can log in with username or email address
        $sql = 'SELECT user_name, user_email, user_password_hash
                FROM users
                WHERE user_name = :user_name OR user_email = :user_name
                LIMIT 1';
        $query = $this->db_connection->prepare($sql);
        $query->bindValue(':user_name', $_POST['user_name']);
        $query->execute();

        // Btw that's the weird way to get num_rows in PDO with SQLite:
        // if (count($query->fetchAll(PDO::FETCH_NUM)) == 1) {
        // Holy! But that's how it is. $result->numRows() works with SQLite pure, but not with SQLite PDO.
        // This is so crappy, but that's how PDO works.
        // As there is no numRows() in SQLite/PDO (!!) we have to do it this way:
        // If you meet the inventor of PDO, punch him. Seriously.
        $result_row = $query->fetchObject();
        if ($result_row) {
            // using PHP 5.5's password_verify() function to check password
            if (password_verify($_POST['user_password'], $result_row->user_password_hash)) {
                // write user data into PHP SESSION [a file on your server]
                $_SESSION['user_name'] = $result_row->user_name;
                $_SESSION['user_email'] = $result_row->user_email;
                $_SESSION['user_is_logged_in'] = true;
                $this->user_is_logged_in = true;
                return true;
            } else {
                $this->feedback = "Wrong password.";
            }
        } else {
            $this->feedback = "This user does not exist.";
        }
        // default return
        return false;
    }

    /**
     * Validates the user's registration input
     * @return bool Success status of user's registration data validation
     */
    private function checkRegistrationData()
    {
        // if no registration form submitted: exit the method
        if (!isset($_POST["register"])) {
            return false;
        }

        // validating the input
        if (!empty($_POST['user_name'])
            && strlen($_POST['user_name']) <= 64
            && strlen($_POST['user_name']) >= 2
            && preg_match('/^[a-z\d]{2,64}$/i', $_POST['user_name'])
            && !empty($_POST['user_email'])
            && strlen($_POST['user_email']) <= 64
            && filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)
            && !empty($_POST['user_password_new'])
            && strlen($_POST['user_password_new']) >= 6
            && !empty($_POST['user_password_repeat'])
            && ($_POST['user_password_new'] === $_POST['user_password_repeat'])
        ) {
            // only this case return true, only this case is valid
            return true;
        } elseif (empty($_POST['user_name'])) {
            $this->feedback = "Empty Username";
        } elseif (empty($_POST['user_password_new']) || empty($_POST['user_password_repeat'])) {
            $this->feedback = "Empty Password";
        } elseif ($_POST['user_password_new'] !== $_POST['user_password_repeat']) {
            $this->feedback = "Password and password repeat are not the same";
        } elseif (strlen($_POST['user_password_new']) < 6) {
            $this->feedback = "Password has a minimum length of 6 characters";
        } elseif (strlen($_POST['user_name']) > 64 || strlen($_POST['user_name']) < 2) {
            $this->feedback = "Username cannot be shorter than 2 or longer than 64 characters";
        } elseif (!preg_match('/^[a-z\d]{2,64}$/i', $_POST['user_name'])) {
            $this->feedback = "Username does not fit the name scheme: only a-Z and numbers are allowed, 2 to 64 characters";
        } elseif (empty($_POST['user_email'])) {
            $this->feedback = "Email cannot be empty";
        } elseif (strlen($_POST['user_email']) > 64) {
            $this->feedback = "Email cannot be longer than 64 characters";
        } elseif (!filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)) {
            $this->feedback = "Your email address is not in a valid email format";
        } else {
            $this->feedback = "An unknown error occurred.";
        }

        // default return
        return false;
    }

    /**
     * Creates a new user.
     * @return bool Success status of user registration
     */
    private function createNewUser()
    {
        // remove html code etc. from username and email
        $user_name = htmlentities($_POST['user_name'], ENT_QUOTES);
        $user_email = htmlentities($_POST['user_email'], ENT_QUOTES);
        $user_password = $_POST['user_password_new'];
        // crypt the user's password with the PHP 5.5's password_hash() function, results in a 60 char hash string.
        // the constant PASSWORD_DEFAULT comes from PHP 5.5 or the password_compatibility_library
        $user_password_hash = password_hash($user_password, PASSWORD_DEFAULT);

        $sql = 'SELECT * FROM users WHERE user_name = :user_name OR user_email = :user_email';
        $query = $this->db_connection->prepare($sql);
        $query->bindValue(':user_name', $user_name);
        $query->bindValue(':user_email', $user_email);
        $query->execute();

        // As there is no numRows() in SQLite/PDO (!!) we have to do it this way:
        // If you meet the inventor of PDO, punch him. Seriously.
        $result_row = $query->fetchObject();
        if ($result_row) {
            $this->feedback = "Sorry, that username / email is already taken. Please choose another one.";
        } else {
            $sql = 'INSERT INTO users (user_name, user_password_hash, user_email)
                    VALUES(:user_name, :user_password_hash, :user_email)';
            $query = $this->db_connection->prepare($sql);
            $query->bindValue(':user_name', $user_name);
            $query->bindValue(':user_password_hash', $user_password_hash);
            $query->bindValue(':user_email', $user_email);
            // PDO's execute() gives back TRUE when successful, FALSE when not
            // @link http://stackoverflow.com/q/1661863/1114320
            $registration_success_state = $query->execute();

            if ($registration_success_state) {
                $this->feedback = "success";
                return true;
            } else {
                $this->feedback = "Sorry, your registration failed. Please go back and try again.";
            }
        }
        // default return
        return false;
    }

    /**
     * Simply returns the current status of the user's login
     * @return bool User's login status
     */
    public function getUserLoginStatus()
    {
        return $this->user_is_logged_in;
    }

    /**
     * Simple demo-"page" that will be shown when the user is logged in.
     * In a real application you would probably include an html-template here, but for this extremely simple
     * demo the "echo" statements are totally okay.
     */
    private function showPageLoggedIn()
    {

        //echo 'Hello ' . $_SESSION['user_name'] . ', you are logged in.<br/><br/>';
        //echo '<a href="' . $_SERVER['SCRIPT_NAME'] . '?action=logout">Log out</a>';
        include 'index-game.php';
    }
    /**
     * Simple demo-"page" with the login form.
     * In a real application you would probably include an html-template here, but for this extremely simple
     * demo the "echo" statements are totally okay.
     */
    private function showPageLoginForm()
    {
		loadTop();
		echo "<h1>Chess Battles</h1>";
	        if ($this->feedback) {
	            echo $this->feedback . "<br/><br/>";
	        }
	        //echo '<h2>Enter password</h2>';
            echo '<p>To play the game, you need* to create a free <a href="../index.php" target="_blank">nexuspage</a>. There is no paid version.</p>';
            echo '</br>';
	        echo '<form method="post" action="' . $_SERVER['SCRIPT_NAME'] . '" name="loginform">';
	        echo '<p style="text-align:center;" class="monostring"><label for="login_input_username">Nexustation</label> ';
	        echo "<input id='login_input_username' class='textInput generalFormEntry' type='text' name='user_name' required /></p>";
	        echo '<p style="text-align:center;" class="monostring"><label for="login_input_password">&nbsp; &nbsp;Password</label> ';
	        echo '<input id="login_input_password" class="textInput generalFormEntry" type="password" name="user_password" required /></p>';
	        echo '</br>';
	        echo '<p>* <a href="index-game.php">secret link</a> straight to the game.</p>';
	        echo '<input type="submit" name="login" value="Log in" style="opacity:0" />';
	        echo '</form>';
	        loadBottom();

    }

    /**
     * Simple demo-"page" with the registration form.
     * In a real application you would probably include an html-template here, but for this extremely simple
     * demo the "echo" statements are totally okay.
     */
    private function showPageRegistration()
    {

	    loadTop();
	    echo "<h1>Nexustation</h1>";
	    echo "Please go back to the nexustation page and create your own nexustation: https://nexustation.com";
        loadBottom();
    }
}

// run the application
$application = new OneFileLoginApplication();
