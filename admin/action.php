<?php
  include '../lib/database.php';
  $db = new Database();
  if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = 'delete from vir_sunglasses where id=:id';
    $query = $db->link->prepare($sql);
    $query->bindValue(':id',$id);
    $result = $query->execute();
    if ($result) {
      Header('Location:all_virtual_glasses.php?success=1');
    }
    else{
      Header('Location:all_virtual_glasses.php?fail=1');
    }

  }
 ?>
