$(function(){
    var a=1;
    $(".bar").click(function(){
        if(a==1){
            $(".ul").slideDown();
        }else{
            $(".ul").slideUp();
        }
        a=a*-1;
});
})