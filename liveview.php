<?php
include 'lib/Database.php';
$db = new Database();
 ?>
<?php if (isset($_GET['id'])) {
  $id = $_GET['id'];
  $sql = 'select * from vir_sunglasses where id=:id';
  $query = $db->link->prepare($sql);
  $query->bindParam('id',$id,PDO::PARAM_INT);
  $query->execute();
  $result = $query->fetch(PDO::FETCH_ASSOC);
} ?>
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta charset='utf-8' />

    <!-- INCLUDE MAIN SCRIPT -->
    <script type='text/javascript' src='https://appstatic.jeeliz.com/jeewidget/JeelizNNCwidget.js'></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">


    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="vendors/linericon/style.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/themify-icons.css" />
    <link rel="stylesheet" href="css/flaticon.css" />
    <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css" />
    <link rel="stylesheet" href="vendors/lightbox/simpleLightbox.css" />
    <link rel="stylesheet" href="vendors/nice-select/css/nice-select.css" />
    <link rel="stylesheet" href="vendors/animate-css/animate.css" />
    <link rel="stylesheet" href="vendors/jquery-ui/jquery-ui.css" />
    <!-- main css -->
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/responsive.css" />


    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type='text/javascript'>
      // function which are used only for this functionnal test
      function test_resizeCanvas() {
        const wid = document.getElementById('JeeWidget')
        wid.style.width = '1000px'
      }

      // main function, launched with body.onload()
      function main() {
        JEEWIDGET.start({
          sku: '<?php echo $result['sku']; ?>',
          searchImageMask: 'https://appstatic.jeeliz.com/jeewidget/images/target.png',
          searchImageColor: 0xff0000,
          onError: function(errorLabel){ // this function catches errors, so you can display custom integrated messages
            alert('An error happened. errorLabel =' + errorLabel)
            switch(errorLabel) {
              case 'NOFILE':
                // the user send an image, but it is not here
                break

              case 'WRONGFILEFORMAT':
                // the user upload a file which is not an image or corrupted
                break

              case 'INVALIDSKU':
                // the provided SKU does not match with a glasses model
                break

              case 'FALLBACKUNAVAILABLE':
                // we cannot switch to file upload mode. browser too old ?
                break

              case 'FATAL':
              default:
                // a bit error happens :(
                break
            } // end switch
          } // end onError()
        }) // end JEEWIDGET.start call
      } // end main()
    </script>

    <!-- A BIT OF STYLING... -->
    <link rel='stylesheet' href='css/JeeWidgetPublicGit.css' />
  </head>

  <body onload="main()">
    <div class="mynav">
        <?php include 'inc/navbar.php'; ?>
    </div>

    <main>
      <!-- BEGIN JEEWIDGET -->
      <div id='JeeWidget'>
        <!-- MAIN CANVAS : --><canvas id='JeeWidgetCanvas'></canvas>
        <!-- BEGIN UPLOAD PICTURE BUTTON -->
          <div class='JeeWidgetHiddenFileInput'>
             <input type='file' id='JeeWidgetFileInput' />
          </div>

          <button id='JeeWidgetFileInputButton'><div class="buttonIcon"><i class="far fa-image"></i></div>Try on a picture</button>
        <!-- END UPLOAD PICTURE BUTTON -->
        <!-- BACK TO REALTIME VIDEO BUTTON : --><button id='JeeWidgetBackToRealtimeButton'>Back to video</button>
        <!-- ADJUST BUTTON : -->
        <div class='JeeWidgetBottomButton' id='JeeWidgetAdjust'>
          <div class="buttonIcon"><i class="fas fa-arrows-alt"></i></div>Adjust the frame
        </div>
        <button id='buttonResizeCanvas' class='JeeWidgetBottomButton buttonResize' onclick='test_resizeCanvas();'><div class="buttonIcon"><i class="fas fa-sync-alt"></i></div>Resize canvas</button>

        <!-- BEGIN ADJUST NOTICE -->
        <div id='JeeWidgetAdjustNotice'>
          You can move the glasses yeah !
          <button class='JeeWidgetBottomButton' id='JeeWidgetAdjustExit'>Quit</button>
        </div>
        <!-- END AJUST NOTICE -->

        <!-- BEGIN LOADING -->
        <div id='JeeWidgetLoading'>
           <div class='JeeWidgetLoadingWheel'>
              <svg viewBox='0 0 32 32' width='32' height='32'>
                <circle id='spinner' cx='16' cy='16' r='14' fill='none' />
              </svg>
            </div>
        </div>
        <!-- END LOADING -->
        <!-- BEGIN FALLBACK (upload picture) NOTICE -->
        <!--div id='JeeWidgetUploadNotice'>
          Please upload a picture to tryon your glasses
          <div class='JeeWidgetHiddenFileInput'>
             <input type='file' id='JeeWidgetFileInputNotice' />
          </div>
          <button id='JeeWidgetFileInputButtonNotice'>Choose image from file</button>
        </div-->
        <!-- END FALLBACK (upload picture) NOTICE -->



      </div>
      <!-- END JEEWIDGET -->
    </main>
<?php include 'inc/footer.php'; ?>
