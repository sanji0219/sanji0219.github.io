$(function(){
    $(".one").addClass("active");
    var a=1;
    $(".r").click(function(){
        if(a==1){
            a=3;
            $(".one").removeClass("active");
            $(".thr").addClass("active");
        }
        else if(a==2){
            a=1;
            $(".two").removeClass("active");
            $(".one").addClass("active");
        }else{
            a=2;
            $(".thr").removeClass("active");
            $(".two").addClass("active");
        }
    })
    $(".l").click(function(){
        if(a==1){
            a=2;
            $(".one").removeClass("active");
            $(".two").addClass("active");
        }
        else if(a==2){
            a=3;
            $(".two").removeClass("active");
            $(".thr").addClass("active");
        }else{
            a=1;
            $(".thr").removeClass("active");
            $(".one").addClass("active");
        }
    })
})