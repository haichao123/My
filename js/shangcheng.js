/**
 * Created by Administrator on 2016/1/20.
 */
$(
    function(){
        $(".header_li").hover(
            function(){
                $("#nav_a").css({left:"271px"}).show()
            },function(){
                $("#nav_a").hide()
            }
        )
        $(".header_li_a").hover(
            function(){
                $("#nav_a").css({left:"343px"}).show();
            },function(){
                $("#nav_a").hide()
            }
        )
        $(".header_li_b").hover(
            function(){
                $("#nav_a").css({left:"412px"}).show();
            },function(){
                $("#nav_a").hide()
            }
        )
        $(".header_li_c").hover(
            function(){
                $("#nav_a").css({left:"485px"}).show();
            },function(){
                $("#nav_a").hide()
            }
        );
        $("#aside_wrapper a").hover(
            function(){
                $(this).css({color:"#5badd9"})
            },function(){
                $(this).css({color:"#444"})}
        )
        $("#img a").hover(
            function(){
                $(this).css({color:"#5badd9"})
            },function(){
                $(this).css({color:"azure"})}
        )
        $("#img a:first").hover(
            function(){
                $("#img img:first").fadeIn(500);
                $("#img img:not(:first)").fadeOut(500);
            }
        )
        $("#img a:first+a").hover(
            function(){
                $("#img img:first+img").fadeIn(500);
                $("#img img:not(:first+img)").fadeOut(500);
            }
        )
        $("#img a:first+a+a").hover(
            function(){
                $("#img img:first+img+img").fadeIn(500);
                $("#img img:not(:first+img+img)").fadeOut(500);
            }
        )
        $("#img a:first+a+a+a").hover(
            function(){
                $("#img img:first+img+img+img").fadeIn(500);
                $("#img img:not(:first+img+img+img)").fadeOut(500);
            }
        )
        $("#img a:last").hover(
            function(){
                $("#img img:last").fadeIn(500);
                $("#img img:not(:last)").fadeOut(500);
            }
        )
    }
)