/**
 * Created by Administrator on 2016/1/22.
 */
$(
    function(){
        $(".section-1 img").animate({width:"200px",height:"200px",borderRadius:"100px",marginTop:"120px"},2000);
        setTimeout(
            function(){
                $(".section-1 h2").fadeIn(500);
            },2000
        )
        setTimeout(
            function(){
                $(".section-1 p").fadeIn(500);
            },3000
        )
        $(".section-4 li").mouseout(
            function(){
                $(this).css({backgroundColor:"#1bb498",opacity:"0.5"})
            }
        )
        $(".section-4 li a").attr("target","_blank")
    }
)