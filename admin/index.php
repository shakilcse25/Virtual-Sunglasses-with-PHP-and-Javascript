<?php
	include 'inc/header.php';
	Session::checkLogin();
	include 'inc/sidebar.php';
 ?>
 <?php
 if (isset($_POST['logout'])) {
   Session::sessionDestroy();
 }
  ?>
<div class="main-panel" style="width: calc(100% - 300px);">
<?php
	include 'inc/topnav.php';
	include 'inc/main_content.php';
	include 'inc/footer.php';
 ?>
</div>
<?php
	include 'inc/jsarea.php';
 ?>
