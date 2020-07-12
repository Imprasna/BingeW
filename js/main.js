$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2800) {
           $("#yy").text("DC Movies")
        } else {
            $("#yy").text("Marvel Movies")
        }
    });
    });