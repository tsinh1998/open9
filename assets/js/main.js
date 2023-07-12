/**
  * isMobile
  * Parallax
  * flatContentBox
  * flatCounter
  * flatIsotopeCase
  * flatAccordion
  * swClick
  * buttonHeart
  * goTop
  * WOW
  * toggleMenu
  * topSearch
  * flatProgressBar
  * popUpLightBox
  * donatProgress
  * Preloader
  * clearcheckbox
  * flatAccordions
  * dropdown
  * no_link
  * flcustominput
  * tabs
  * copycode
  * fasterPreview
  * viewShop
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var headerFixed = function () {
        if ($("header").hasClass("header-fixed")) {
          var nav = $("#header_main");
    
          if (nav.length) {
            var offsetTop = nav.offset().top,
              headerHeight = nav.height(),
              injectSpace = $("<div>", {
                height: headerHeight,
              });
            injectSpace.hide();
    
            if ($("header").hasClass("style-absolute")) {
              injectSpace.hide();
            } else {
              injectSpace.insertAfter(nav);
            }
    
            $(window).on("load scroll", function () {
              if ($(window).scrollTop() > offsetTop + headerHeight) {
                nav.addClass("is-fixed");
                injectSpace.show();
              } else {
                nav.removeClass("is-fixed");
                injectSpace.hide();
              }
    
              if ($(window).scrollTop() > 150) {
                nav.addClass("is-small");
              } else {
                nav.removeClass("is-small");
              }
            });
          }
        }
      };

    var buttonHeart = function () { 
        $(".wishlist-button").on("click", function() {
            var iteration = $(this).data('iteration') || 1;
            
            switch (iteration) {
                case 1:
                    $(this).addClass("active");
                    var val = parseInt($(this).find("span").text())+1;
                    $(this).find("span").text(val);
                    break;
                case 2:
                    $(this).removeClass("active");
                    var val = parseInt($(this).find("span").text())-1;
                    $(this).find("span").text(val);                   
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1;
            $(this).data('iteration', iteration);
        });
    };

    var avatar_popup1 = function(){
        $('.popup-notification').find('.notification').on('click',function(event){
            event.stopPropagation();});
        $('.popup-notification').find('.notification').on('click', function(event){
            if(!$('.avatar_popup').hasClass('visible')){
                $('.avatar_popup').addClass('visible');
                    event.preventDefault();
                }
            else
                $('.avatar_popup').removeClass('visible');
        })    
    };

    var avatar_popup2 = function(){
        $('.popup-user').find('.user').on('click',function(event){
            event.stopPropagation();});
        $('.popup-user').find('.user').on('click', function(event){
            if(!$('.avatar_popup2').hasClass('visible')){
                $('.avatar_popup2').toggleClass('visible');
                    event.preventDefault();
                }
            else
                $('.avatar_popup2').removeClass('visible');
        })
    };

    var tabs = function() {
        if ($('div').hasClass('flat-tabs')) {
            var tabLinks = document.querySelectorAll(".tablinks");
            var tabContent =document.querySelectorAll(".tabcontent");
        
            tabLinks.forEach(function(el) {
            el.addEventListener("click", openTabs);
            });
        
            function openTabs(el) {
                var btn = el.currentTarget; 
                var tabs = btn.dataset.tabs; 
                
                tabContent.forEach(function(el) {
                    el.classList.remove("active");
                });
        
                tabLinks.forEach(function(el) {
                    el.classList.remove("active");
                });
        
                document.querySelector("#" + tabs).classList.add("active");
                
                btn.classList.add("active");
            }
        }
    }

    var buttonfollow = function () { 
        $("button.follow").on("click", function() {
            var iteration = $(this).data('iteration') || 1;
            
            switch (iteration) {
                case 1:
                    $(this).addClass("active");
                    $(this).text('Following');
                    var val = parseInt($(this).find("span").text())+1;
                    $(this).find("span").text(val);
                    break;
                case 2:
                    $(this).removeClass("active");
                    $(this).text('Follow');
                    var val = parseInt($(this).find("span").text())-1;
                    $(this).find("span").text(val);                   
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1;
            $(this).data('iteration', iteration);
        });
    };

    var tabs1 = function(){
        $('.widget-tabs').each(function(){
            $(this).find('.widget-content-tab').children().hide();
            $(this).find('.widget-content-tab').children(".active").show();
            $(this).find('.widget-menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
            });
        });
    };

    var termcondition = function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children(".active").show();
            $(this).find('.menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
            });
        });
    };

    var connectwallet = function() {
        if ($('span').hasClass('button-connect-wallet')) {
            $('.button-connect-wallet').on('click',function() {
                $('#connect-wallet-grid').addClass('hidden');
                $('#connect-wallet-list').addClass('active');
            })
        }
    };

    var flcustominput = function () {
        $("input[type=file]").change(function (e) {
            $(this).parents(".uploadfile").find(".filename").text(e.target.files[0].name);
          });          
    };

    var flatAccordion = function () {
        var args = { duration: 600 };
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle.enable .toggle-title').on('click', function () {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        });
        $('.flat-accordion .toggle-title').on('click', function () {
            if (!$(this).is('.active')) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var flatAccordion2 = function() {
        var args = {duration: 600};
        $('.flat-toggle2 .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle2.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle2').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 
      
        $('.flat-accordion2 .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion2').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion

        // arow
        $('flat-toggle2').on('click', function(){
            $(this).addClass('active');
        });
    }; 

    var password = function() {
        if ($('fieldset').hasClass('password')) {
            Array.from(document.querySelectorAll(".password")).forEach(function (e) {
                Array.from(e.querySelectorAll(".password-addon")).forEach(function (r) {
                  r.addEventListener("click", function (r) {
                    var o = e.querySelector(".password-input");
                    "password" === o.type ? (o.type = "text") : (o.type = "password");
                  });
                });
            });
        }
    }

    var btnmenu = function() {
        if ($('header').hasClass('header_1')) {
            $('.canvas').on('click', function () {
                $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
            });
            $('.canvas-nav-close').on('click', function () {
                $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
            });
            $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function () {
                $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
            });

            $('.mobile-button').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-close').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-wrap .overlay-mobile-nav').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });

            $(document).on("click", ".menu-item-has-children-mobile", function () {
                var args = { duration: 600 };
                if ($(this).hasClass("active")) {
                  $(this).children(".sub-menu-mobile").slideUp(args);
                  $(this).removeClass("active");
                } else {
                  $(".sub-menu-mobile").slideUp(args);
                  $(this).children(".sub-menu-mobile").slideDown(args);
                  $(".menu-item-has-children-mobile").removeClass("active");
                  $(this).addClass("active");
                }
              });
        }
    }
    
    

    // Dom Ready
    $(function () {
        headerFixed();
        buttonHeart();
        avatar_popup1();
        avatar_popup2();
        tabs();
        buttonfollow();
        tabs1();
        termcondition();
        connectwallet();
        flcustominput();
        flatAccordion();
        flatAccordion2();
        password();
        btnmenu();
    });

})(jQuery);
