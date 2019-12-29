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
		$sku = $_POST['sku'];
		$price = $_POST['price'];
		$label = $_POST['label'];
		$description = $_POST['description'];


		$sql = "INSERT INTO vir_sunglasses(sku,price,img,description,label) VALUES(:sku,:price,:img,:description,:label)";
      $query = $db->link->prepare($sql);
      $query->bindValue(':sku',$sku);
      $query->bindValue(':price',$price);
      $query->bindValue(':description',$description);
      $query->bindValue(':label',$label);

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
    <label for="">SKU Name:</label>
    <input type="text" class="form-control" name="sku">

    <label for="">Price:</label>
    <input type="text" class="form-control" name="price">

    <!-- <label for="">Image:</label>
    <input type="file" class="form-control-file" name="img"> -->

		<label for="">Label:</label>
		<input type="text" class="form-control" name="label">

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
