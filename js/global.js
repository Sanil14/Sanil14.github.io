$(() => {

    new WOW().init();

    $(".burger").click(function (e) {
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
        $(".burger").removeClass('open')
    }
})