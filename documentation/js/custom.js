var currentActiveSection='start-installation';$(document).ready(function(){var $buythemediv='<div class="buy-theme alt-font sm-display-none"><a href="https://1.envato.market/R53mL2" target="_blank"><i class="ti-shopping-cart"></i><span>Buy now</span></a></div><div class="all-demo alt-font sm-display-none"><a href="mailto:info@Syed J..com?subject=Crafto – The Multipurpose HTML5 Template - Quick Question"><i class="ti-email"></i><span>Quick Question?</span></a></div>';$('body').append($buythemediv);$('#leftCol').affix({offset:{top:245}});$("a.inner-link").not(".sec-link").click(function(){var divScrollToAnchor=$(this).attr('href');var topOffsetScroll=40;$('html, body').stop().animate({'scrollTop':$(divScrollToAnchor).offset().top},750,'easeOutQuint');return false;});if($('.docs-navigation').length){var el=$('.docs-navigation'),stickyTop=el.offset().top,footerHeight=$('#footer').outerHeight();$(window).scroll(function(){var stickyHeight=el.children('ul').outerHeight(),limit=$('#footer').offset().top-stickyHeight,windowTop=$(window).scrollTop(),windowHeight=$(window).height();if(stickyTop<windowTop){el.css({position:'fixed',top:0});}else{el.css({position:'absolute',top:0});}
if(limit<windowTop){var diff=limit-windowTop;el.css({height:windowHeight-diff-footerHeight,top:diff});}else{el.css({height:'100%'});}
$('.docs-content').find('section').not('.hidden').find('.docs-content-inner').each(function(){var h=$(this).offset().top;var y=$(window).scrollTop();if(y+500>=h&&y<h+$(this).height()&&$(this).attr('id')!=currentActiveSection){currentActiveSection=$(this).attr('id');}})
$('.docs-navigation').find('.inner-link[href="#'+currentActiveSection+'"]').parent('li').parent('ul').find('li').removeClass('active');$('.docs-navigation').find('.inner-link[href="#'+currentActiveSection+'"]').parent('li').addClass('active');});}
$('a.sec-link').click(function(){var currentSection=$(this).attr('href');$('.docs-content section').each(function(index){var _this=$(this).attr('id');});var divScrollToAnchor=$(this).attr('href');var _this=$(this);$('.docs-content section').addClass('hidden');$('.docs-content section'+currentSection).removeClass('hidden');$(_this).parent('li').parent('ul').find('li').removeClass('active');$(_this).parent('li').addClass('active');$(_this).parent('li').find('ul>li:first-child').addClass('active');var topOffsetScroll=40;$('html, body').stop().animate({'scrollTop':$(divScrollToAnchor).offset().top},750,'easeOutQuint');});$('a.sec-link').each(function(){if($(this).parent('li').hasClass('active')){$(this).parent('li').find('ul li:first-child').addClass('active');}});});$('.inner-link').smoothScroll({speed:900,offset:-0});$('.sec-link').smoothScroll({speed:900,offset:-0});(function($){$(window).load(function(){$("#leftCol").mCustomScrollbar({set_width:false,set_height:false,horizontalScroll:false,scrollInertia:0,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:80},advanced:{updateOnBrowserResize:true,updateOnContentResize:true,autoExpandHorizontalScroll:false,autoScrollOnFocus:false,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"dark-2"});});})(jQuery);$(window).scroll(function(){if($(this).scrollTop()>100){$('.scrollToTop').fadeIn();}else{$('.scrollToTop').fadeOut();}});$('.scrollToTop').click(function(){$('html, body').animate({scrollTop:0},1000);return false;});$('pre').each(function(){$(this).prev('.copy-clipboard').on('click',function(){var code=$(this).siblings('pre').text();$(this).siblings('pre').append(`<textarea readonly class="clipboard"></textarea>`);$(this).siblings('pre').find('textarea.clipboard').val(code);$(this).siblings('pre').find('textarea.clipboard').select();document.execCommand('copy');$(this).text('Copied');$(this).siblings('pre').find('textarea.clipboard').remove();setTimeout(function(){$('.copy-clipboard').text('Copy');},2000);});});