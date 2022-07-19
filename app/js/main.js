
$(function () {
  $('.blog-page__slider').slick({
    infinite: false,
    prevArrow:'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="11px" height="17px" viewBox="0 0 11 17" version="1.1"><g><path  d="M 8.25 14.875 C 7.898438 14.875 7.546875 14.769531 7.277344 14.5625 L 0.402344 9.25 C -0.132812 8.835938 -0.132812 8.164062 0.402344 7.75 L 7.277344 2.4375 C 7.816406 2.019531 8.683594 2.019531 9.222656 2.4375 C 9.757812 2.851562 9.757812 3.523438 9.222656 3.9375 L 3.320312 8.5 L 9.222656 13.0625 C 9.761719 13.476562 9.761719 14.148438 9.222656 14.566406 C 8.953125 14.773438 8.601562 14.875 8.25 14.875 Z M 8.25 14.875 "/></g></svg></button>',
    nextArrow:'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"  width="11px" height="17px" viewBox="0 0 11 17" version="1.1"><g><path  d="M 2.75 14.875 C 2.398438 14.875 2.046875 14.769531 1.777344 14.5625 C 1.242188 14.148438 1.242188 13.476562 1.777344 13.0625 L 7.683594 8.5 L 1.777344 3.9375 C 1.242188 3.523438 1.242188 2.851562 1.777344 2.433594 C 2.316406 2.019531 3.183594 2.019531 3.722656 2.433594 L 10.597656 7.746094 C 11.132812 8.164062 11.132812 8.835938 10.597656 9.25 L 3.722656 14.5625 C 3.453125 14.773438 3.101562 14.875 2.75 14.875 Z M 2.75 14.875 "/></g></svg></button>',
    infinite: false
    

  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');



  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable:false
  });

  
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });


  $('.shop-content__filter-button').on('click' ,function () {
    $('.shop-content__filter-button').removeClass('shop-content__filter-button--active');
    $(this).addClass('shop-content__filter-button--active')
  });
  $('.button-list').on('click' ,function() {
    $('.product-item').addClass('product-item--list');
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });
  
  


  $('.select-style, .product-one__item-num').styler();

$('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: "$",
  onStart: function (data){
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  },
  onChange: function (data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  },
});


  $('.top-slider__inner').slick({
    dots:true,
    arrows: false,
    fade:true,
    autoplay: true,
    autoplaySpeed: 2000

  })

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly:true,
    starSvg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px"height="18px" viewBox="0 0 20 18" version="1.1"><g id="surface1"><path d="M 13.234375 5.285156 L 18.226562 6.03125 C 18.640625 6.089844 18.984375 6.382812 19.117188 6.789062 C 19.25 7.195312 19.140625 7.640625 18.84375 7.941406 L 15.226562 11.535156 L 16.078125 16.6875 C 16.148438 17.109375 15.980469 17.539062 15.632812 17.789062 C 15.289062 18.039062 14.832031 18.070312 14.460938 17.871094 L 10.003906 15.460938 L 5.546875 17.871094 C 5.171875 18.070312 4.71875 18.039062 4.375 17.789062 C 4.03125 17.539062 3.859375 17.109375 3.929688 16.6875 L 4.785156 11.535156 L 1.164062 7.941406 C 0.867188 7.640625 0.761719 7.195312 0.890625 6.789062 C 1.023438 6.382812 1.367188 6.089844 1.785156 6.03125 L 6.769531 5.285156 L 9.007812 0.632812 C 9.191406 0.246094 9.578125 0 10.003906 0 C 10.429688 0 10.820312 0.246094 11.003906 0.632812 Z M 13.234375 5.285156 " /></g></svg>'
  });


  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);

});
