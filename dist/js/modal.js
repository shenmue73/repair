$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  button.on('click', function(){
    modal.addClass('modal_active');
  });

  close.on('click', function(){
    modal.removeClass('modal_active');
  })
});

var isAddeMap = false;
$(window).scroll(function () {
  var el = $('.map');
  if ($(this).scrollTop() > el.offset().top -800) {
    if (isAddeMap) return;
    isAddeMap = true;
    var script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A36ec8d2112c8c1b8e49ec472eff8b4bfa40f16abbd72d39118e0d470f17c0a4e&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"
    el.append(script);

  };
});
