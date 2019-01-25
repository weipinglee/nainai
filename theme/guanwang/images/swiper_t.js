 $(document).ready(function(){
          $('.slider9').bxSlider({ 
            slideWidth: 200,
			minSlides: 6,
			maxSlides: 8,
			ticker: true,
			speed: 12000,
			startSlides: 0, 
            slideMargin: 10
          });
          //首页视频专区
          $(".video_l p").each(function(index){
		    $(".video_l p").eq(index).addClass("video"+(index+1))
		    $(".video_l p").not(".video1").hide()
		  });
          $(".videoTitle .videodiv").click(function(){
          	 $(".videoTitle .videodiv").find("span").removeClass("cur")
          	 $(this).find("span").addClass("cur")
          	 if($(this).hasClass("one")){
          	 	$(".video_l p.video1").show()
          	 	$("p").not(".video1").hide()

          	 }
          	 if($(this).hasClass("two")){
          	 	$(".video_l p.video2").show()
          	 	$("p").not(".video2").hide()
          	 }
          	 if($(this).hasClass("three")){
          	 	$(".video_l p.video3").show()
          	 	$("p").not(".video3").hide()
          	 }

          }) //首页视频专区end
        });