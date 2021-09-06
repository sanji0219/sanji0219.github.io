$(function(){
    var a=1;
    $(".menubar").click(function(){
        a=a*(-1);
        if(a==-1){
            $(".headmenu").slideDown();
        }else{
            $(".headmenu").slideUp();
        }
    })
    $(window).scroll(function () {
        // 目的のスクロール量を設定(px)
        var TargetPos = 350;
        // 現在のスクロール位置を取得
        var ScrollPos = $(window).scrollTop();
        // 現在位置が目的のスクロール量に達しているかどうかを判断
        if( ScrollPos >= TargetPos) {
           // 達していれば表示
            $("#topbutton").fadeIn();
        }
        else {
           // 達していなければ非表示
            $("#topbutton").fadeOut();
        }
        if(ScrollPos>=300){
            $(".two").fadeIn();
        }
        if(ScrollPos>=1060){
            $(".thr").fadeIn();
        }
        if(ScrollPos>=1820){
            $(".fou").fadeIn();
        }
        if(ScrollPos>=2580){
            $(".fiv").fadeIn();
        }
        if(ScrollPos>=3340){
            $(".six").fadeIn();
        }
    });
    $("#topbutton").click(function(){
        $("html,body").animate({
            "scrollTop":0
        },"slow");
    });
});