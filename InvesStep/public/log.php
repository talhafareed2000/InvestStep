<?php


session_start();

$servername = "localhost";
$username = "fareedt_UserData";
$password = "littletrees";
$dbname = "fareedt_UserData";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$message="";
if(count($_POST)>0) {
	$result = mysqli_query($conn,"SELECT * FROM login WHERE username='" . $_POST["userName"] . "' and password = '". $_POST["password"]."'");
	$count  = mysqli_num_rows($result);
	if($count==0) {
		$message = "Invalid Username or Password!";
	} else {
		$message = "You are successfully authenticated!";
	}
}



if (isset($_POST["Cre"])){
  
  
  $name = $_REQUEST['name'];
$username = $_REQUEST['uname'];
$password = $_REQUEST['pass'];


$sql = 'INSERT INTO login (name, username, password) VALUES( "'.$name.'", "'.$username.'", "'.$password.'")';

  
  if ($conn->query($sql)) {
            printf("New User Created.<br />");
         }
         if ($mysqli->errno) {
            printf("Could not create New User<br />", $mysqli->error);
         }

} 



?>
<html>
<head>
<title>Investep Login</title>
  
</head>
<body>

  
  
  
  
  
  
<div class="container" id="container">
	<div class="form-container sign-up-container">
		 <form  method="post">
     <h1>Create New Account</h1>
			<span>Create an account so you can join this wonderful community A.S.A.P </span>
    

  <input type="text"  id="fname" name="name" placeholder="Full Name" class="login-input">


  <input type="text"  id="uname" name="uname" placeholder="Username" class="login-input">

  <input type="text"  id="pass" name="pass" placeholder="Password" class="login-input">

    
      <input type="submit" name="Cre" value="Create user">

    
    
    

    
    



  </form>
	</div>
	<div class="form-container sign-in-container">
      
      
      
		<form  name="frmUser" method="post" action="">
			<div class="message"><?php if($message!="") { echo $message; } ?></div>
			<h1>Login</h1>
			<span>User your username and password for authentication</span>
			<input type="text" name="userName" placeholder="User Name" class="login-input">
			<input type="password" name="password" placeholder="Password" class="login-input">
			<input type="submit" name="submit" value="Submit" class="btnSubmit">
		</form>
	</div>
  
  
  
  
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Have an Account?</h1>
				<p>Please sign in</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Don't have an Account?</h1>
				<p>Sign up now to start your investing journey</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

  
  
  
  
  
  
</body></html>





<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
    color: #000000;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
    color: #000000;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #EDDFEF;
	background-color: #EDDFEF;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #EDDFEF;
	background: -webkit-linear-gradient(to right, #EDDFEF, #EDDFEF);
	background: linear-gradient(to right, #EDDFEF, #EDDFEF);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}




</style>


<script>
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
</script>
