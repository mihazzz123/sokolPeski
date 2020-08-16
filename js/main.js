$(document).ready(function () {

  $('.second-button').on('click', function () {
    // $('.animated-icon2').toggleClass('open');
    $('.modal__wrap').addClass('modal__wrap_active');
    $('.header-nav-left').addClass('header-nav-left_active');
  });
  // $('.modal__wrap').on('click', function() {
  // })

  $(document).mouseup(function (e) {
    var elem1 = $('.header-nav-left');
    var elem2 = $('.popup');
    if (!elem1.is(e.target) && elem1.has(e.target).length === 0 && !elem2.is(e.target) && elem2.has(e.target).length === 0) {
      $('.modal__wrap').removeClass('modal__wrap_active');
      $('.header-nav-left').removeClass('header-nav-left_active');
      $('.popup').removeClass('popup_active');
      $('.popup-form__btn').fadeIn(300);
      $('.popup-form__load').fadeOut(300);
      $('.popup-form__check').fadeOut(300);
      $('.popup-form__input-wrap').removeClass('popup-form__input-wrap-true popup-form__input-wrap-load');
    } else {}
  });

  $('.call-form').on('click', function (e) {
    e.preventDefault();
    $('.modal__wrap').addClass('modal__wrap_active');
    $('.popup').addClass('popup_active');

  })

  $('.popup-form__input').focusout(function () {
    if ($(this).val() === '') {
      $(this).parents('.popup-form__input-wrap').removeClass('popup-form__input-wrap-true');
      $(this).parents('.popup-form__input-wrap').addClass('popup-form__input-wrap-false');
    } else {
      $(this).parents('.popup-form__input-wrap').removeClass('popup-form__input-wrap-false');
      $(this).parents('.popup-form__input-wrap').addClass('popup-form__input-wrap-true');
    }
  });


  $('#feedbackSlider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.feedback-slider__arrows'),
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [{
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 740,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  })

  jQuery(function ($) {
    $("#phone").mask("+7 (999) 99-999-99");
  });

  $('form').submit(function (e) {
    e.preventDefault();
    var data = $('form').serializeArray();
    $('.popup-form__btn').fadeOut(10);
    $('.popup-form__load').fadeIn(300);
    $('.popup-form__input-wrap').addClass('popup-form__input-wrap-load');

    $.ajax({
      type: "POST",
      url: 'mail.php',
      data: data,
      success: function () {
        $('.popup-form__btn').fadeOut(10);
        $('.popup-form__load').fadeOut(300);
        $('.popup-form__check').fadeIn(300);
        $('.popup-form__input-wrap').removeClass('popup-form__input-wrap-load');
        $('.popup-form__input').val('');
      }
    });
  });

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });



});