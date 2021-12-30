//  ===================================
//      Smooth Scroll Part Start
//  ===================================
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
//  ===================================
//      Navbar Part Start
//  ===================================
$(".srch").click(function(){
	$(".totalClose").fadeIn()
})
$(".close").click(function(){
	$(".totalClose").fadeOut()
})
// =============================
// 		Banner Part Start
// ==============================
$('.banner_slider').slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
    autoplaySpeed: 1500,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
// =============================
// 		Menu Part Start
// ==============================
$('.menu_slider').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left left_arrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right right_arrow" aria-hidden="true"></i>',
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
// ===============================
// 		Popular Menu Part Start
// ===============================
var mixer = mixitup('.popularmenu_mixitup');
mixer.filter('.item1');
// =============================
// 		Booking Part Start
// ==============================
$('.venobox').venobox(); 
// =============================
// 		Gallery Part Start
// ==============================
$('.gallery_slider').slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 1500,
	autoplay: true,
    autoplaySpeed: 1500,
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
//  ==============================
//  Go To Top Button Part Start
//  ==============================
$("#backTotop").click(function(){
	$('html,body').animate({
		scrollTop: 0
	},2000)
})

$(window).on('scroll', function () {

	var scrollPos = $(window).scrollTop();
	
if (scrollPos > 100) {
		$(".menu_bg").addClass("new_bg");
	} else {
		$(".menu_bg").removeClass("new_bg");
	}

	//bacto top
	if (scrollPos > 150) {
		$("#backTotop").fadeIn();
	} else {
		$("#backTotop").fadeOut();
	}
});