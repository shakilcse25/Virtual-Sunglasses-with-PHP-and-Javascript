<?php
	include 'inc/header.php';
	// Session::checkAdmin();
	include 'inc/sidebar.php';
 ?>
 <?php
 if (isset($_POST['logout'])) {
   Session::sessionDestroyadmin();
 }
  ?>
<div class="main-panel" style="width: calc(100% - 300px);">
<?php
	include 'inc/topnav.php';
	if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['addvir'])){
		$price = $_POST['price'];
		$description = $_POST['description'];

		$files = $_FILES;

		$permited = array('jpg', 'jpeg', 'png', 'gif');
		$file_name = $files['img']['name'];
    $file_size = $files['img']['size'];
    $file_temp = $files['img']['tmp_name'];

    $file_ext = pathinfo($file_name, PATHINFO_EXTENSION);

    if ($file_size>(10*1024*1024)){
        echo "<h4> Please upload less 10MB File! </h4>";
    }
    else if(in_array($file_ext, $permited) === false) {
        echo "<h4> Please upload Image file Format! </h4>";
    }
    else{
        $unique_image = substr(md5(microtime()), 0, 10) . '.' . $file_ext;
        $uploaded_image = "uploads/static/" . $unique_image;
        move_uploaded_file($file_temp, $uploaded_image);
    }
		$sql = "INSERT INTO static_sunglasses(img,price,description) VALUES(:img,:price,:description)";
      $query = $db->link->prepare($sql);
      $query->bindValue(':img',$uploaded_image);
      $query->bindValue(':price',$price);
      $query->bindValue(':description',$description);

      $result = $query->execute();
      if($result){
        echo "<h4 style='color:green;'>Data Added Successfully!</h4>";
      }
      else{
        echo "<h4 style='color:red;'>Data Added Successfully!</h4>";
      }
	 }
 ?>
<div class="content">
  <h3>Add a Virtual Sunglass Here.</h3>
  <form enctype="multipart/form-data" class="addsun" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label for="">Price:</label>
    <input type="text" class="form-control" name="price">

    <label for="">Image:</label>
    <input type="file" class="form-control-file" name="img">

		<label for="" style="vertical-align:top;">Description:</label>
		<textarea name="description" style="width:80%;height:200px;"></textarea>

    <input type="submit" style="width:170px !important;margin-top:20px;" class="btn btn-success" name="addvir" value="Add Sunglass">

  </form>
</div>
<?php
	include 'inc/footer.php';
 ?>
</div>
<?php
	include 'inc/jsarea.php';
 ?>
