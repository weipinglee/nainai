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

          /*首页滚动到底部*/
            $(window).scroll(function(){
                // 获得div的高度
                var h = $(".container").offset().top+500;
                var wt = $(this).scrollTop();
                wt>h?$(".yb_conct").show():$(".yb_conct").hide()
                //这个判断两种写法
                //  if($(this).scrollTop()>h){
                //     // 滚动到指定位置
                //     $("#btn").show();
                // } else {
                //     $("#btn").hide();
                // }
            });
           /*首页滚动到底部*/
        });