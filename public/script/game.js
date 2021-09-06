const good=function(){
    $(function(){
        $(".collect").slideDown();
    })
}

$(function(){
    var a=function(){
        $(".thr").fadeIn(500);
        $(".thr").fadeOut(500);
    }
    var b=function(){
        $(".two").fadeIn(500);
        $(".two").fadeOut(500);
    }
    var c=function(){
        $(".one").fadeIn(500);
        $(".one").fadeOut(500);
    }
    var contents=[".fir",".sec",".thi"];
    var colors=["red","blue","green"];
    var fants=["yellow","pink","white"];
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    

    var x=function(){
        var t=contents[getRandomInt(3)];
        var s=colors[getRandomInt(3)];
        var f=fants[getRandomInt(3)]

        var aa=function(){
            $(t).addClass(s)
            $(t).addClass(f)
        };
        var bb=function(){
            $(t).slideDown(1);
            $(t).slideUp(2);
        };
        var cc=function(){
            $(t).removeClass(s);
            $(t).removeClass(f);
        };
        aa();
        setTimeout(bb,10);
        setTimeout(cc,1111);
        console.log(s)
        console.log(f)

        var d=function(){
            $(".answers").slideDown();
        }
        setTimeout(d,1200);
        $(".enter").click(function(){
            $(".answers").slideUp();
            $(".collect").slideDown();
        })
    }

    $(".btn").click(function(){
        setTimeout(a,200);
        setTimeout(b,1200);
        setTimeout(c,2200);
        setTimeout(x,3200);
    })
})