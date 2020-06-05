/*
    if (navigator.userAgent.indexOf('MSIE') > 0 || navigator.userAgent.indexOf('Trident') > 0) {
        alert("internet Explorer");
    }
    else {
        alert("Non Ie")
    }
*/
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-168669240-1', 'auto');
ga('send', 'pageview');
</script>

var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

$(document).ready(function(){
    $.fn.center = function () {		// 레이어팝업 센터 정렬
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        return this;
    }

    $(".Menu").mouseover(function(){
        $(this).addClass("LiSelected");
    }).mouseout(function(){
        $(".Menu").removeClass("LiSelected");
    }).click(function(){
        if( $(this).text() == "BACK" ){
            history.back(-1);
        };
        var Mindex = $(this).index() + 1;
        var offNum;
        var pos = $(".outDiv.Num" + Mindex).find(".Title").offset().top;
        if (isMobile) {
            offNum = 160;
        } else {
            offNum = 100;
        }
        $( 'html, body' ).animate( { scrollTop : pos - offNum }, 400 );
    });



    $(".bg_layer").click(function(){
        $(".bg_layer,.PopContent").hide();
        $("body").css("overflow-y","scroll");
    });


    $( window ).scroll( function() {
        if ( $(this).scrollTop() > 100 ) {
            $( '.btn_top' ).fadeIn();
        } else {
            $( '.btn_top' ).fadeOut();
        }
    } );

    $( '.btn_top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );

    fnSkillSwipe();

});



function fnMakeSwipe(name, num)
{

    var html;
    html = '<div class="swiper-container">';
    html += ' <div class="swiper-wrapper">';
    //for (var i of eval(name + num))
    for (var i = 0; i < eval(name + num).length; i++)
    {
        html += '  <div class="swiper-slide">';
        //for (var j of i )
        for (var j = 0; j < eval(name + num)[i].length; j++)
        {
            //alert(eval(name + num)[i][j]);
            html += eval(name + num)[i][j];
        }
        html += '  </div>';
    }
    html += ' </div>';
    //html += ' <div class="swiper-scrollbar"></div>';
    html += ' <div class="swiper-pagination"></div>';
    html += '</div>';
    html += '<div class="swiper-button-next"></div>';
    html += '<div class="swiper-button-prev"></div>';

    return html;
}

function fnSkillSwipe()
{
    var html = fnMakeSwipe("SkillContent", "");

    $(".outDiv.Num3").find(".Content").html(html);

    var skillSwiper = new Swiper(".Content>.swiper-container", {
        //centeredSlides: true,
        //slidesPerView: '3',
        spaceBetween: 0,
        effect: 'slide',
        //loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: { el: '.swiper-pagination',
            clickable: true,
        },
        //autoplay: {
        //    delay: 4000,
        //    disableOnInteraction: false,
        //},
    });
}



function fnDetail(num)
{
    $(".DeContent").innerHeight($(window).innerHeight() - $(".outDiv.MenuDiv").innerHeight());
    //$(".DeContent").css("padding-top", $(".outDiv.MenuDiv").innerHeight() + 10);
    var swipe = fnMakeSwipe("PopContent", num);
    var Title = eval("PopTitle" + num);
    $(".MMid").append(Title);
    $(".DeContent").append(swipe);

    var popSwiper = new Swiper(".DeContent>.swiper-container", {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        effect: 'slide',
        //loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            //type: 'progressbar',
        },
        //scrollbar: {
            //el: '.swiper-scrollbar',
            //hide: false,
        //},
    });
}

/*
function fnPopLayer(num)
{

    $(".bg_layer").width($(document).width());
    $(".bg_layer").height($(document).height());
    $(".PopContent").height($(window).height() * 0.7);
    //alert(num);
    var ord = eval("PopDescript" + num);

    var html = fnMakeSwipe("PopContent", num);
    var PopTitle = '<div class="deTitle">' + ord[0] + '</div>';
    $(".PopContent").append(PopTitle);
    $(".PopContent").append(html);

    var Cont = '<div class="descript">';
    Cont += '  <ul>';
    for (var i = 1; i < ord.length; i++) {
        Cont += '<li>' + ord[i] + '</li>'
    }
    Cont += '  </ul>';
    Cont += '</div>';





    $(".PopContent").append(Cont);

    $(".bg_layer,.PopContent").show();
    $(".PopContent").center();
    $("body").css("overflow-y","hidden");


    var popSwiper = new Swiper(".PopContent>.swiper-container", {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        effect: 'slide',
        //loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            //clickable: true,
            type: 'progressbar',
        },
    });
}

*/
