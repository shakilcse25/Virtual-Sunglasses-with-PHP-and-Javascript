<?php include "inc/header.php"; ?>
<?php include "inc/navbar.php"; ?>
  <!--================Home Banner Area =================-->
  <section class="home_banner_area mb-40">
    <div class="banner_inner d-flex align-items-center">
      <div class="container">
        <div class="banner_content row">
          <div class="col-lg-12">
            <p class="sub text-uppercase">Sunglasses Collection</p>
            <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
            <h4>Fowl saw dry which a above together place.</h4>
            <a class="main_btn mt-40" href="shop.php">View Collection</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Home Banner Area =================-->

  <!-- Start feature Area -->
  <section class="feature-area section_gap_bottom_custom">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-money"></i>
              <h3>Money back gurantee</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-truck"></i>
              <h3>Free Delivery</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-support"></i>
              <h3>Alway support</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-blockchain"></i>
              <h3>Secure payment</h3>
            </a>
            <p>Shall open divide a one</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End feature Area -->

  <!--================ Feature Product Area =================-->
  <section class="feature_product_area section_gap_bottom_custom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h2><span>Featured product</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <?php
        $sql = 'select * from vir_sunglasses order by id DESC limit 3';
        $query = $db->link->prepare($sql);
        $query->execute();
        $result = $query->fetchAll();
       ?>

      <div class="row">
        <?php
        if(count($result) > 0) {
          foreach ($result as $data){
         ?>
        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img style="height:200px;" class="img-fluid w-100" src="<?php  if(strstr($data['sku'], 'rayban')){
                     echo 'https://productimage.jeeliz.com/US_';
                }
                elseif (strstr($data['sku'], 'carrera')) {
                      echo 'https://productimage.jeeliz.com/US_';
                }
                else{
                  echo("https://productimagesglassesdb.jeeliz.com/_custom_");
                }
                echo $data['sku'];?>.jpg" alt="" />
              <div class="p_icon">
                <a href="liveview.php?id=<?php echo $data['id']; ?>" target="_blank"  style="border-radius: 3px;padding:4px 10px;width:100px;display:initial;">
                  TRY IT
                </a>
                <a href="single-product.php?id=<?php echo $data['id']; ?>">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4><?php echo str_replace('_', ' ', $data['sku']); ?></h4>
              </a>
              <div class="mt-3">
                <span class="mr-4"><?php echo $data['price']; ?></span>
              </div>
            </div>
          </div>
        </div>
      <?php } } ?>

      </div>
    </div>
  </section>
  <!--================ End Feature Product Area =================-->

  <!--================ Offer Area =================-->
  <!-- <section class="offer_area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="offset-lg-4 col-lg-6 text-center">
          <div class="offer_content">
            <h3 class="text-uppercase mb-40">all men’s Sunglasses</h3>
            <h2 class="text-uppercase">50% off</h2>
            <a href="#" class="main_btn mb-20 mt-5">Discover Now</a>
            <p>Limited Time Offer</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!--================ End Offer Area =================-->

  <!--================ New Product Area =================-->
  <section class="new_product_area section_gap_top section_gap_bottom_custom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h2><span>new products</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div class="row">
        <?php
          $sqls = 'select * from vir_sunglasses order by id DESC limit 1';
          $querys = $db->link->prepare($sqls);
          $querys->execute();
          $results = $querys->fetchAll();
           if(count($results) > 0) {
           foreach ($results as $datas){
          ?>
        <div class="col-lg-6">
          <div class="new_product">
            <h5 class="text-uppercase">collection of 2019</h5>
            <h3 class="text-uppercase">Men’s summer Sunglasses</h3>
            <div class="product-img">
              <img class="img-fluid" src="<?php  if(strstr($data['sku'], 'rayban')){
                     echo 'https://productimage.jeeliz.com/US_';
                }
                elseif (strstr($data['sku'], 'carrera')) {
                      echo 'https://productimage.jeeliz.com/US_';
                }
                else{
                  echo("https://productimagesglassesdb.jeeliz.com/_custom_");
                }
                echo $data['sku'];?>.jpg" alt="" />
            </div>
            <h4><?php echo $datas['price']; ?></h4>
            <a href="#" class="main_btn">Add to cart</a>
          </div>
        </div>
      <?php } } ?>

        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="row">

            <?php
              $sql = "SELECT * FROM vir_sunglasses WHERE id NOT IN (SELECT MAX(id) FROM vir_sunglasses) ORDER BY id DESC limit 4";
              $query = $db->link->prepare($sql);
              $query->execute();
              $result = $query->fetchAll();
               if(count($result) > 0) {
               foreach ($result as $data){
             ?>

            <div class="col-lg-6 col-md-6">
              <div class="single-product">
                <div class="product-img">
                  <img  style="min-height:180px;max-height:180px;" class="img-fluid w-100" src="<?php  if(strstr($data['sku'], 'rayban')){
                         echo 'https://productimage.jeeliz.com/US_';
                    }
                    elseif (strstr($data['sku'], 'carrera')) {
                          echo 'https://productimage.jeeliz.com/US_';
                    }
                    else{
                      echo("https://productimagesglassesdb.jeeliz.com/_custom_");
                    }
                    echo $data['sku'];?>.jpg" alt="" />
                  <div class="p_icon">
                    <a href="liveview.php?id=<?php echo $data['id']; ?>" target="_blank"  style="border-radius: 3px;padding:4px 10px;width:100px;display:initial;">
                      TRY IT
                    </a>
                    <a href="single-product.php?id=<?php echo $data['id']; ?>">
                      <i class="ti-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div class="product-btm">
                  <a href="#" class="d-block">
                    <h4><?php echo str_replace('_', ' ', $data['sku']); ?></h4>
                  </a>
                  <div class="mt-3">
                    <span class="mr-4"><?php echo $data['price']; ?></span>
                  </div>
                </div>
              </div>
            </div>
          <?php } } ?>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ End New Product Area =================-->

<?php include "inc/footer.php"; ?>
