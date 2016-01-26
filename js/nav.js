/**
 * Created by Administrator on 2016/1/24.
 */
$(
    function(){
        $("#list li:first").click(
            function(){
                $("#list li").css({backgroundColor:"#fff"})
                $(this).css({backgroundColor:"blue"})
                $("#img").show(2000);
                $("#img1").hide(2000);
                $("#img2").hide(2000);
            }
        )
        $("#list li:first+li").click(
            function(){
                $("#list li").css({backgroundColor:"#fff"});
                $(this).css({backgroundColor:"blue"});
                $("#img1").show(2000);
                $("#img").hide(2000);
                $("#img2").hide(2000);
            }
        )
        $("#list li:last").click(
            function(){
                $("#list li").css({backgroundColor:"#fff"});
                $(this).css({backgroundColor:"blue"});
                $("#img2").show(2000);
                $("#img").hide(2000);
                $("#img1").hide(2000);
            }
        )
    }
)