window.onscroll = function ()
{
    var scroll_height = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scroll_progress = (scrollTop/scroll_height)*100;
    $('.progress-bar').css('width', scroll_progress + '%');
}
$(function () {
    $('[data-toggle="popover"]').popover({
        'placement': 'right',
        //'template': '<div class="popover" role="tooltip"><div class="arrow"></div><span class="close btn float-right pop-close">&times;</span><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
    const hideHandler = function(){
        $('[data-toggle="popover"]').popover("hide")
    }
    $('[data-toggle="popover"]').on('shown.bs.popover', function () {
        $(".close").on("click", hideHandler)
    })
    $('[data-toggle="popover"]').on('hidden.bs.popover', function () {
        $(".close").off("click", hideHandler)
    })
})

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});