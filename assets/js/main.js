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
                // swiper_tab();
            });
        });
    };


    

    // Dom Ready
    $(function () {
        buttonHeart();
        avatar_popup1();
        avatar_popup2();
        tabs();
        buttonfollow();
        tabs1();
    });

})(jQuery);
