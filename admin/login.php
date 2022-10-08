<?php
include_once '../lib/Session.php';
include_once '../lib/Helper.php';
include_once '../lib/Database.php';
$hp = new Helper();
$db = new Database();
Session::init();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
</head>
<style>
  input{
    margin-bottom: 15px;
  }
  form{
    margin: 0px auto;
    width: 460px;
    background-color: aliceblue;
    margin-top: 100px;
    box-shadow: 0px 0px 5px 1px grey;
  }
  .house_image{
    width: 100%;
    height: 200px;
    margin: 0px auto;
    margin-bottom: 40px;
  }
  .house_image img{
    width: 100%;
    height: 100%;
  }
  body{
    background-color: lightgray;
  }
  .login_main{
    padding-top: 20px;
  }
  .login input{
    width: 90%;
    margin: 0px auto;
    margin-bottom: 15px;
  }
</style>
<script>
  if(window.history.replaceState){
    window.history.replaceState( null, null, window.location.href );
  }
</script>
<body>
  <div class="main">
    <div class="login_area">
      <div class="login_main container">


<?php
    if(($_SERVER["REQUEST_METHOD"] === "POST") && isset($_POST['login'])) {
      $username = $hp->validation($_POST['username']);
      $password = $hp->validation($_POST['password']);

      if(empty($username) || empty($password)){
        echo " <p style='red'>Username or Password is empty.</p> ";
      }
      else{
        // $password = md5($password);

        $sql = "select * from admin where username = :username and password = :password limit 1";
        $query = $db->link->prepare($sql);
        $query->bindValue(':username',$username);
        $query->bindValue(':password',$password);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_OBJ);

        if($result){
          Session::set('login',true);
          Session::set('username',$result->username);
          Header('Location:index.php');
        }
        else{
          echo " <p style='red'>No User Found!</p> ";
        }

      }
    }

 ?>

        <form class="login" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
          <div class="house_image">
            <img src="../img/sunglass.jpg" alt="" style="width:100%;">
          </div>
          <div class="main_input" style="padding-bottom: 10px;">
            <input type="text" name="username" class="form-control" value="" placeholder="Username">
            <input type="text" name="password" class="form-control" value="" placeholder="Password">
            <p class="text-center"><input type="submit" class="btn btn-success" name="login" class="from-control" value="Login"></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <script src="assets/js/jquery.min.js" charset="utf-8"></script>
  <script src="assets/js/bootstrap.min.js" charset="utf-8"></script>
</body>
</html>
