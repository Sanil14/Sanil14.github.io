$(document).ready(() => {

    new WOW().init();

    var options = {
        strings: ["Aspiring Web Developer", "Aspiring NodeJS Developer", "Aspiring Backend Developer", "Aspiring Software Engineer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 50,
        showCursor: false,
        loop: true
    };

    new Typed(".namecenter h1", options);

    $(".openbtn").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(".sidepanel").height() > 0) {
            hideNav();
        } else {
            $(".sidepanel").css('height', '100vh');
            $(this).addClass('open')
        }
    })

    $(".sidepanel").click(function (e) {
        e.stopPropagation();
    })

    $(document).click(function () {
        hideNav();
    })

    $(".sidepanel .closebtn").click(function () {
        hideNav();
    })

    function hideNav() {
        $(".sidepanel").css('height', '0px');
        $(".openbtn").removeClass('open')
    }
})