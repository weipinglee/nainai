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
		  });
          $(".videoTitle .videodiv").click(function(){
          	 $(".videoTitle .videodiv").find("span").removeClass("cur")
          	 $(this).find("span").addClass("cur")
          	 if($(this).hasClass("one")){
          	 	$(".video_l p.video1").show()
          	 	$(".video_l p.video2").hide()
          	 	$(".video_l p.video3").hide()

          	 }
          	 if($(this).hasClass("two")){
          	 	$(".video_l p.video1").hide()
          	 	$(".video_l p.video2").show()
          	 	$(".video_l p.video3").hide()

          	 }
          	 if($(this).hasClass("three")){
          	 	$(".video_l p.video1").hide()
          	 	$(".video_l p.video2").hide()
          	 	$(".video_l p.video3").show()
          	 }

          }) //首页视频专区end
        });