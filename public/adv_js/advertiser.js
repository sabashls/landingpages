/* menu scrolling */

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
/*menu scrolling ends */


/* benefits & geographical scrolling */
$(window).scroll(function(){

            var a = 400;
            var pos = $(window).scrollTop();
            if(pos > a) {
                $(".top").css({
                    opacity:'1'
                });
		$(".top").find("p").css({
                    opacity:'1'
                });
		
            }
            else {
                $(".top").css({
                    opacity:'0'
                });
            }
            if(pos > 1800 )
            {
                $(".l7").css({
                    opacity:'1'
                });
            }
        });

 $(window).scroll(function(){

            var b = 1500;
            var pos = $(window).scrollTop();
            if(pos > b) {
                $(".bottom_section").css({
                    opacity:'1'
                });
		$(".bottom_section").find("p").css({
                    opacity:'1'
                });
		
            }
            else {
                $(".bottom_section").css({
                    opacity:'0'
                });
            }
            if(pos > 1800 )
            {
                $(".bottom_section").css({
                    opacity:'1'
                });
            }
        });


$(window).scroll(function(){

            var c = 2000;
            var pos = $(window).scrollTop();
            if(pos > c) {
                $(".demographic").css({
                    opacity:'1'
                });
		$(".demographic").find("p").css({
                    opacity:'1'
                });
		
            }
            else {
                $(".demographic").css({
                    opacity:'0'
                });
            }
            if(pos > 2300 )
            {
                $(".demographic").css({
                    opacity:'1'
                });
            }
        });

/* benefits & geographical scrolling ends */

/* menu smooth scrolling */
 class StickyNavigation {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.stickyhero-tab').click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => {
            this.onScroll();
        });
        $(window).resize(() => {
            this.onResize();
        });
    }
    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }
    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }
    checkTabContainerPosition() {
        let offset = $('.stickyhero-tabs').offset().top + $('.stickyhero-tabs').height() - this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
            $('.stickyhero-tabs-container').addClass('stickyhero-tabs-container--top');
        } else {
            $('.stickyhero-tabs-container').removeClass('stickyhero-tabs-container--top');
        }
    }
    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.stickyhero-tab').each(function () {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }
    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.stickyhero-tab-slider').css('width', width);
        $('.stickyhero-tab-slider').css('left', left);
    }
}
new StickyNavigation();

/* menu smooth scrolling ends */

/* mobile view menu slide */
$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $("#myNavbar").slideToggle("slow");
    });
});


/* mobile view menu slide ends */

