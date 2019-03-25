$(function() {

  // CSS
  if($(window).width() <= 740) {
    $('.float-gift').css('top', $('.m-header').height() + 20 + 'px');
  } else {
    $('.float-gift').css('top', $('.l-header').height() + 'px');
  }
  $('#id-bonus, #id-notice').css('padding-top', $('.l-header').height() + 'px');

  $('.b-col-xs-4 a').click(function() {
      let insureNum = $(this).data('insure');
      $('.b-col-xs-4 a').removeClass('is-select');
      $(this).addClass('is-select');
      $('.product-insure').hide();
      $('.product-insure-' + insureNum).show();
      $('.insure-highlight').removeClass('is-hl');
      $('.insure-highlight-' + insureNum).addClass('is-hl');
  })

  $('.sheet-detail-wrap').hide();
  let firstClick = true;
  let isClicked = false;

  $('.sheet-block').click(function() {
    let sheetNum = $(this).data('sheet');
    if(!isClicked && !$(this).hasClass('clicked')) {
      isClicked = true;
      $('.sheet-block').removeClass('clicked');
      $('.sheet-block').addClass('hoverable');
      $(this).addClass('clicked');
      $(this).removeClass('hoverable');
      $('.sheet-caption').removeClass('clicked');
      $(this).children('.sheet-caption').addClass('clicked');

      if($(window).width() > 740) {
        $('.sheet-detail-wrap').slideUp(250);
        if(firstClick) {
          $('#sheet-detail-' + sheetNum).slideDown();
          firstClick = false;
        } else {
          $('#sheet-detail-' + sheetNum).delay(250).slideDown();
        }
      } else if($(window).width() <= 740) {
        $('.sheet-block').css('height', 'auto');
        $(this).css('height', $(this).height() + 10 + 'px');
        $('.sheet-detail-wrap').slideUp(250);

        if(firstClick) {
          $('#sheet-detail-m-' + sheetNum).slideDown();
          firstClick = false;
        } else {
          $('#sheet-detail-m-' + sheetNum).delay(250).slideDown();
        }
      }
      setTimeout(function() {
        isClicked = false;
      }, 500);
    }
  })

  $('#sheet-btn, .gift-little-words').click(function() {
    $('body, html').animate({ scrollTop: $('#page-bonus').offset().top - $('.l-header').height() }, 500);
  })
  $('#insure-btn').click(function() {
    $('body, html').animate({ scrollTop: $('#page-question').offset().top - $('.l-header').height() }, 1000);
  })
  $('#bonus-btn').click(function() {
	goWI('icarry');
    //window.location = 'https://www.cathaylife.com.tw/oc/OCWeb/html/OC/Login/Login.jsp';
  })



  $(window).scroll(function() {
    if($(window).width() > 740) {
      if($(window).scrollTop() > $('#accident-insurance').offset().top) {
        $('.sheet-block').addClass('show');
      }
      if($(window).scrollTop() > $('.sheet-title-2').offset().top - $(window).height()) {
        $('.sheet-block-2').addClass('show');
      }
    } else if ($(window).width() <= 740) {
      if($(window).scrollTop() > $('.sheet-title-1').offset().top - $(window).height()*0.75) {
        $('.sheet-block').addClass('show');
      }
      if($(window).scrollTop() > $('.sheet-title-2').offset().top - $(window).height()*0.75) {
        $('.sheet-block-2').addClass('show');
      }
    }
    if($(window).scrollTop() > $('#page-bonus').offset().top - $(window).height()*0.25) {
      $('.insure-content-block').addClass('show');
    }
  })

  $('.sugarfunbox-bd').css('max-height', $(window).height()*0.8);
})