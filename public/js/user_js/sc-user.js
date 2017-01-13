/**
 * Created by sashcash on 6/1/17.
 */
$(window).load(function(){$.isInVisibleArea=function(elem){var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+ $(window).height();var elemHeight=$(elem).height();var elemTop=$(elem).offset().top;var elemBottom=elemTop+ elemHeight;return((elemTop+ elemHeight/2<=docViewBottom)&&(elemBottom- elemHeight/2>=docViewTop));}
    jQuery.fn.changesVisibility=function(callback_visible,callback_invisible,trigger_at_loading){if(trigger_at_loading==null)
        trigger_at_loading=false;var elem=$(this);var isVisible=$.isInVisibleArea(elem);elem.data('is_visible',isVisible);if(trigger_at_loading){if(isVisible&&callback_visible!=null)
        callback_visible.call(elem);else if(!isVisible&&callback_invisible!=null)
        callback_invisible.call(elem);}
        $(window).scroll(function(){var wasVisible=elem.data('is_visible');var isVisible=$.isInVisibleArea(elem);if(wasVisible!=isVisible){elem.data('is_visible',isVisible);if(isVisible&&callback_visible!=null)
            callback_visible.call(elem);else if(!isVisible&&callback_invisible!=null)
            callback_invisible.call(elem);}});};function ctrheight(){$(".isometric,.sc-openlink-main-div").css("height",$("#iso1").height()),$("#sc-iso1").height(),$("#sc-opnlink").height();}
        ctrheight();$(window).resize(function(){ctrheight();});$(".isometric .anim_starter, .sc-main-img-div .sc-image-img,.sc-openlink-main-div ").changesVisibility
        (function(){$(".isometric #iso3, .isometric #iso2, .isometric #iso4,.sc-main-img-div #sc-iso1,.sc-main-img-div #sc-iso2,.sc-main-img-div #sc-iso3,.sc-main-img-div #sc-iso4,.sc-openlink-main-div #sc-opnnl1,.sc-openlink-main-div #sc-opnnl2,.sc-openlink-main-div #sc-opnnl3")
                .animate({bottom:'0px',top:'0px'},1300,'easeOutQuad');},

        function(){$(".isometric #iso2, .sc-main-img-div #sc-iso2,.sc-openlink-main-div #sc-opnnl1").animate({bottom:'-15'+'%', top:'-10'+'%'},1300,'easeOutQuad');
        $(".isometric #iso3, .sc-main-img-div #sc-iso3,.sc-openlink-main-div #sc-opnnl2").animate({bottom:'-30'+'%',top:'-17'+'%'},1300,'easeOutQuad');
        $(".isometric #iso4,.sc-main-img-div #sc-iso4,.sc-openlink-main-div #sc-opnnl3").animate({bottom:'-45'+'%' ,top:'-26'+'%'},1300,'easeOutQuad');},true);});

