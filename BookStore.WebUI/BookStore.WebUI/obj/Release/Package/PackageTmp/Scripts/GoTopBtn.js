$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('#back-top').addClass('show-back-top');
    } else {
        $('#back-top').removeClass('show-back-top');
    }
});


$('#back-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});


