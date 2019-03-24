$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,((top+300)/-10));     /*+100 - это высота на которой скрипт начинает замедлятся вверху.*/
        t = setTimeout('up()',30);      /*-10 - это количество пикселей, которое прокручивается при движении на верх.*/
    } else clearTimeout(t);                             /*20 - это 0,02 секунды за которые прокручиваются те 10 пикселей что указаны как (-10)*/
    return false;
}