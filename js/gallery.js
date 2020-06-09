
    var imageIndex = 1;
    showImages(imageIndex);
    /*document.getElementsByClassName("container").addEventListener("focus", function(){
        document.getElementsByClassName("column").style.display = "block";	
    });*/
    //$(".container").on("click", function(){
    //$(".column").css("display", "block");
    //});
    function plusImages(n) {
      showImages(imageIndex += n);
    }
    
    function currentImage(n) {
      showImages(imageIndex = n);
    }

    $(".prev").on("click", function() {
      plusImages(-1);
      });
    $(".next").on("click", function(){
      plusImages(1);
      });
    
    function showImages(n) {
      var i;
      var images = document.getElementsByClassName("place-images");
    
      if (n > images.length) {imageIndex = 1}
      if (n < 1) {imageIndex = images.length}
      for (i = 0; i < images.length; i++) {
          images[i].style.display = "none";
      }

      images[imageIndex-1].style.display = "block";

    }
    