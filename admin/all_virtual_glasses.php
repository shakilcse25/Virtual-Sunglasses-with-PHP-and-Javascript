<?php
	include 'inc/header.php';
		Session::checkLogin();
	include 'inc/sidebar.php';
 ?>
<div class="main-panel">
<?php
	include 'inc/topnav.php';
?>

<?php
if(isset($_GET['success'])){
	echo "<h4 style='green'>Successfully Data Deleted!<h4>";
}
else if(isset($_GET['fail'])){
	echo "<h4 style='red'>Data Not Deleted!<h4>";
 }
$sql = "select * from vir_sunglasses";
$query = $db->link->prepare($sql);
$query->execute();
$result = $query->fetchAll();
 ?>

  <div class="content">
    <div class="container-fluid">
      <div class="card" style="padding: 20px 5px;">
        <div class="card-body">
          <table id="table_id" class="display">
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>SKU</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              <?php
                if($result){
                  $i = 0;
                  foreach($result as $data){
                    $i++;
               ?>
                <tr>
                    <td><?php echo $i; ?></td>
                    <td><?php echo $data['sku']; ?></td>
                    <td> <img style="height:70px;width:130px;" src="<?php echo $data['img']; ?>" alt=""> </td>
                    <td> <a class="btn btn-info" href="action.php?id=<?php echo $data['id']; ?>" >Update</a> <a class="btn btn-danger" href="action.php?id=<?php echo $data['id']; ?>" >Delete</a> </td>
                </tr>
              <?php } }else{ echo "<p>There is no user!</p>"; } ?>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>

 <?php
	include 'inc/footer.php';
 ?>
</div>
<?php
	include 'inc/jsarea.php';
 ?>
