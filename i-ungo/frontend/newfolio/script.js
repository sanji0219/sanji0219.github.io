$(function(){
    var a=1;
    $(".menubar").click(function(){
        a=a*(-1);
        if(a==-1){
            $(".headmenu").slideDown();
        }else{
            $(".headmenu").slideUp();
        }
    });
    $(".headmenu").hover(
        function(){
        },
        function(){
            a=1;
            $(".headmenu").slideUp();
        });
    $(window).scroll(function () {
        // 目的のスクロール量を設定(px)
        var TargetPos = 300;
        // 現在のスクロール位置を取得
        var ScrollPos = $(window).scrollTop();
        // 現在位置が目的のスクロール量に達しているかどうかを判断
        if( ScrollPos >= TargetPos) {
           // 達していれば表示
            $("#topbutton").fadeIn();
        }else {
           // 達していなければ非表示
            $("#topbutton").fadeOut();
        }
        if(ScrollPos>=300){
            $(".two").fadeIn(1500);
        }
        if(ScrollPos>=900){
            $(".thr").fadeIn(1500);
        }
        if(ScrollPos>=1500){
            $(".fou").fadeIn(1500);
        }
        if(ScrollPos>=2100){
            $(".fiv").fadeIn(1500);
        }
        if(ScrollPos>=2700){
            $(".six").fadeIn(1500);
        }
        if(ScrollPos>=3300){
            $(".foot").fadeIn(1500)
        }
    });
    $("#topbutton").click(function(){
        $("html,body").animate({
            "scrollTop":0
        },"slow");
    });
});