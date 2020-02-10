var bg = $('.dark_bg');
var submenu2IsOpen = false;
var submenu4IsOpen = false;
var subsubmenu22IsOpen = false;
var subsubmenu24IsOpen = false;
var menuIsShown = false;

$('.hoverable.hov2').on('mouseenter', function () {
    if(window.innerWidth > 1017){
        bg.fadeIn(200);
    }
});

$('.hoverable.hov2').on('mouseleave', function () {
    if(window.innerWidth > 1017){
        bg.fadeOut(200);
    }
});

$('.hoverable.hov4').on('mouseenter', function () {
    if(window.innerWidth > 1017){
        bg.fadeIn(200);
    }
});

$('.hoverable.hov4').on('mouseleave', function () {
    if(window.innerWidth > 1017){
        bg.fadeOut(200);
    }
});

$('.down.d2').on('click', function() {
    if(submenu2IsOpen === false){
        $('.submenu.s2').fadeIn(0);
        $('.down.d2 img').css({'transform':'rotate(180deg)'});
        submenu2IsOpen = true;
        if(submenu4IsOpen === true){
            $('.submenu.s4').fadeOut(0);
            submenu4IsOpen = false;
            $('.down.d4 img').css({'transform':'rotate(0deg)'});
        }
        $('.menu_bar > ul').scrollTop(Number($('.submenu.s2 > ul').offset().top) - 88);
        console.log($('.down.d2_2').offset().top - 88);
    }
    else {
        $('.submenu.s2').fadeOut(0);
        submenu2IsOpen = false;
        if(subsubmenu22IsOpen === true || subsubmenu24IsOpen === true){
            $('.subsubmenu').fadeOut(0);
            subsubmenu22IsOpen = false;
            subsubmenu24IsOpen = false;
            $('.down.d2_2 img').css({'transform':'rotate(0deg)'});
            $('.down.d2_4 img').css({'transform':'rotate(0deg)'});
        }
        $('.down.d2 img').css({'transform':'rotate(0deg)'});
    }
});

$('.down.d4').on('click', function() {
    if(submenu4IsOpen === false){
        $('.submenu.s4').fadeIn(0);
        $('.down.d4 img').css({'transform':'rotate(180deg)'});
        submenu4IsOpen = true;
        if(submenu2IsOpen === true){
            $('.submenu.s2').fadeOut(0);
            submenu2IsOpen = false;
            if(subsubmenu22IsOpen === true || subsubmenu24IsOpen === true){
                $('.subsubmenu').fadeOut(0);
                subsubmenu22IsOpen = false;
                subsubmenu24IsOpen = false;
                $('.down.d2_2 img').css({'transform':'rotate(0deg)'});
                $('.down.d2_4 img').css({'transform':'rotate(0deg)'});
            }
            $('.down.d2 img').css({'transform':'rotate(0deg)'});
        }
    }
    else {
        $('.submenu.s4').fadeOut(0);
        submenu4IsOpen = false;
        $('.down.d4 img').css({'transform':'rotate(0deg)'});
    }
});

$('.down.d2_2').on('click', function() {
    if(subsubmenu22IsOpen === false){
        $('.subsubmenu.s2_2').fadeIn(0);
        $('.down.d2_2 img').css({'transform':'rotate(180deg)'});
        subsubmenu22IsOpen = true;
        if(subsubmenu24IsOpen === true){
            $('.subsubmenu.s2_4').fadeOut(0);
            subsubmenu24IsOpen = false;
            $('.down.d2_4 img').css({'transform':'rotate(0deg)'});
        }
    }
    else {
        $('.subsubmenu.s2_2').fadeOut(0);
        subsubmenu22IsOpen = false;
        $('.down.d2_2 img').css({'transform':'rotate(0deg)'});
    }
});

$('.down.d2_4').on('click', function() {
    if(subsubmenu24IsOpen === false){
        $('.subsubmenu.s2_4').fadeIn(0);
        $('.down.d2_4 img').css({'transform':'rotate(180deg)'});
        subsubmenu24IsOpen = true;
        if(subsubmenu22IsOpen === true){
            $('.subsubmenu.s2_2').fadeOut(0);
            subsubmenu22IsOpen = false;
            $('.down.d2_2 img').css({'transform':'rotate(0deg)'});
        }
    }
    else {
        $('.subsubmenu.s2_4').fadeOut(0);
        subsubmenu24IsOpen = false;
        $('.down.d2_4 img').css({'transform':'rotate(0deg)'});
    }
});

$('.burger').on('click', function() {
    if(menuIsShown === false){
        $('.burger img').attr('src', 'icons/cross.png');
        $('.menu_bar > ul').fadeIn(0);
        bg.fadeIn(0);
        menuIsShown = true;
    }
    else {
        $('.burger img').attr('src', 'icons/burger.png');
        $('.menu_bar > ul').fadeOut(0);
        bg.fadeOut(0);
        menuIsShown = false;
    }
})