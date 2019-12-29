<?php include 'inc/header.php'; ?>
<?php include 'inc/navbar.php'; ?>

    <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content d-md-flex justify-content-between align-items-center">
            <div class="mb-3 mb-md-0">
              <h2>Shop Category</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div class="page_link">
              <a href="index.html">Home</a>
              <a href="category.html">Shop</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Category Product Area =================-->
    <section class="cat_product_area section_gap">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <div class="product_top_bar">
              <div class="left_dorp">
                <select class="sorting">
                  <option value="1">Default sorting</option>
                  <option value="2">Default sorting 01</option>
                  <option value="4">Default sorting 02</option>
                </select>
                <select class="show">
                  <option value="1">Show 12</option>
                  <option value="2">Show 14</option>
                  <option value="4">Show 16</option>
                </select>
              </div>
            </div>
<?php
  $sql = 'select * from vir_sunglasses order by id DESC';
  $query = $db->link->prepare($sql);
  $query->execute();
  $result = $query->fetchAll();
 ?>
            <div class="latest_product_inner">
              <div class="row">
                <?php
                if(count($result) > 0) {
                  foreach ($result as $data){
                 ?>
                <div class="col-lg-4 col-md-6">
                  <div class="single-product">
                    <div class="product-img">
                      <img class="card-img" style="min-height:225px;max-height:225px;" src="<?php  if(strstr($data['sku'], 'rayban')){
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
                        <h4><?php echo $data['label']; ?></h4>
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

          <div class="col-lg-3">
            <div class="left_sidebar_area">
              <aside class="left_widgets p_filter_widgets">
                <div class="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div class="widgets_inner">
                  <ul class="list">
                    <li>
                      <a href="#">Men</a>
                    </li>
                    <li>
                      <a href="#">Women</a>
                    </li>
                  </ul>
                </div>
              </aside>


              <aside class="left_widgets p_filter_widgets">
                <div class="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div class="widgets_inner">
                  <div class="range_item">
                    <div id="slider-range"></div>
                    <div class="">
                      <label for="amount">Price : </label>
                      <input type="text" id="amount" readonly />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Category Product Area =================-->



<?php include 'inc/footer.php'; ?>
