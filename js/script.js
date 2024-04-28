!(function (e) {
	'use strict';
	new WOW().init();
	var t = e('#main-nav'),
		s = {
			disableAt: !1,
			customToggle: e('.toggle'),
			levelSpacing: 10,
			navTitle: 'Aekute Technologies',
			levelTitles: !0,
			levelTitles: !0,
			labelClose: !1,
			levelTitleAsBack: !0,
			levelOpen: 'expand',
			closeOnClick: !0,
			insertClose: !0,
			closeActiveLevel: !0,
			insertBack: !0,
		};
	t.hcOffcanvasNav(s);
	function a() {
		e(window).scrollTop() >= 80
			? e('.navfix').addClass('sticky')
			: e('.navfix').removeClass('sticky');
	}
	e(function () {
		e(window).scroll(a), a();
	}),
		e('li.sbmenu').hover(
			function () {
				e(this).addClass('hover');
			},
			function () {
				e(this).removeClass('hover');
			}
		),
		e('.video-link').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
		}),
		e('[data-toggle="tooltip"]').tooltip(),
		e('.service-card-prb').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			margin: 20,
			nav: !1,
			dots: !1,
			autoplayTimeout: 3500,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
				},
				520: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 3,
				},
				1400: {
					items: 3,
				},
				1600: {
					items: 3,
				},
			},
		}),
		e('.testimonial-card-a').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			autoplayTimeout: 6e3,
			autoplayHoverPause: !0,
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				1024: {
					items: 1,
				},
				1400: {
					items: 1,
				},
			},
		}),
		e('.video-testimonials').owlCarousel({
			items: 2,
			nav: !1,
			dots: !1,
			autoplay: !1,
			autoplayTimeout: 3500,
			smartSpeed: 1500,
			margin: 20,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1024: {
					items: 2,
				},
				1400: {
					items: 2,
				},
			},
		}),
		e('.project-screens').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			margin: 20,
			nav: !1,
			dots: !1,
			autoplayTimeout: 3500,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
				},
				520: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 3,
				},
				1400: {
					items: 3,
				},
				1600: {
					items: 3,
				},
			},
		}),
		e('.porto-slide').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			margin: 10,
			nav: !1,
			dots: !0,
			stagePadding: 50,
			autoplayTimeout: 35e4,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
					stagePadding: 0,
				},
				520: {
					items: 1,
					stagePadding: 0,
				},
				768: {
					items: 1,
					stagePadding: 0,
				},
				1200: {
					items: 1,
				},
				1400: {
					items: 1,
				},
				1600: {
					items: 1,
				},
			},
		}),
		e('.single-slide').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			margin: 10,
			nav: !1,
			dots: !0,
			stagePadding: 100,
			autoplayTimeout: 3500,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
					stagePadding: 0,
				},
				520: {
					items: 1,
					stagePadding: 0,
				},
				768: {
					items: 1,
					stagePadding: 0,
				},
				1200: {
					items: 1,
				},
				1400: {
					items: 1,
				},
				1600: {
					items: 1,
				},
			},
		}),
		e('.bages-slider').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			centre: !0,
			margin: 20,
			nav: !1,
			dots: !1,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 2,
				},
				520: {
					items: 3,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 3,
				},
				1400: {
					items: 4,
				},
				1600: {
					items: 4,
				},
			},
		}),
		e('.logo-weworkfor').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			margin: 10,
			nav: !1,
			dots: !1,
			autoplayTimeout: 1800,
			autoplayHoverPause: !1,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 3,
				},
				520: {
					items: 3,
				},
				768: {
					items: 4,
				},
				1200: {
					items: 4,
				},
				1400: {
					items: 5,
				},
				1600: {
					items: 6,
				},
			},
		}),
		e('.testimonial-card-b').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			autoplayTimeout: 3e3,
			autoplayHoverPause: !0,
			dots: !0,
			dotsContainer: '#testimonials-avatar',
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				1024: {
					items: 1,
				},
				1400: {
					items: 1,
				},
			},
		}),
		e('.zoomowl').owlCarousel({
			stagePadding: 200,
			loop: !0,
			margin: 10,
			nav: !1,
			items: 1,
			lazyLoad: !0,
			responsive: {
				0: {
					items: 1,
					stagePadding: 60,
				},
				600: {
					items: 1,
					stagePadding: 100,
				},
				1e3: {
					items: 1,
					stagePadding: 200,
				},
				1200: {
					items: 1,
					stagePadding: 250,
				},
				1400: {
					items: 1,
					stagePadding: 300,
				},
				1600: {
					items: 1,
					stagePadding: 350,
				},
				1800: {
					items: 1,
					stagePadding: 400,
				},
			},
		}),
		e('.owl-review-slider').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			autoplayTimeout: 3e3,
			autoplayHoverPause: !0,
			dots: !0,
			margin: 15,
			dotsContainer: '#testimonials-avatar',
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1024: {
					items: 2,
				},
				1400: {
					items: 3,
				},
			},
		}),
		e('.counter').counterUp({
			delay: 10,
			time: 2500,
		}),
		e.scrollUp({
			animation: 'fade',
			scrollImg: {
				active: !0,
				type: 'background',
			},
		}),
		e('.card-list').imagesLoaded(function () {
			var t = e('.card-list').isotope({
				itemSelector: '.single-card-item',
				percentPosition: !0,
				masonry: {
					columnWidth: '.grid-sizer',
				},
			});
			e('.filter-menu').on('click', 'li', function () {
				var s = e(this).attr('data-filter');
				t.isotope({
					filter: s,
				});
			});
		}),
		e('.filter-menu li').on('click', function (t) {
			e(this).siblings('.is-checked').removeClass('is-checked'),
				e(this).addClass('is-checked'),
				t.preventDefault();
		}),
		e('[data-background]').each(function () {
			e(this).css(
				'background-image',
				'url(' + e(this).attr('data-background') + ')'
			);
		});
})(jQuery);



const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarMenu = document.getElementsByClassName('navbar-menu')[0];

toggleButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('menu-active');
  toggleButton.classList.toggle('active');
});

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let backtotop = document.querySelector('.back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}


let selectHeader = document.querySelector('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


  (function () {
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
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
  
    var fullHeight = function () {
      if (!isMobile.any()) {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
          $(".js-fullheight").css("height", $(window).height());
        });
      }
    };
  
    var counter = function () {
      $(".js-counter").countTo({
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        },
      });
    };
  
    var counterWayPoint = function () {
      if ($("#colorlib-counter").length > 0) {
        $("#colorlib-counter").waypoint(
          function (direction) {
            if (direction === "down" && !$(this.element).hasClass("animated")) {
              setTimeout(counter, 400);
              $(this.element).addClass("animated");
            }
          },
          { offset: "90%" }
        );
      }
    };
  
    // Animations
    var contentWayPoint = function () {
      var i = 0;
      $(".animate-box").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            i++;
  
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .animate-box.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight animated");
                    } else {
                      el.addClass("fadeInUp animated");
                    }
  
                    el.removeClass("item-animate");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "85%" }
      );
    };
  
    var burgerMenu = function () {
      $(".js-colorlib-nav-toggle").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
  
        if ($("body").hasClass("offcanvas")) {
          $this.removeClass("active");
          $("body").removeClass("offcanvas");
        } else {
          $this.addClass("active");
          $("body").addClass("offcanvas");
        }
      });
    };
  
    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
      $(document).click(function (e) {
        var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("offcanvas")) {
            $("body").removeClass("offcanvas");
            $(".js-colorlib-nav-toggle").removeClass("active");
          }
        }
      });
  
      $(window).scroll(function () {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
      });
    };
  
    var clickMenu = function () {
      $('#navbar a:not([class="external"])').click(function (event) {
        var section = $(this).data("nav-section"),
          navbar = $("#navbar");
  
        if ($('[data-section="' + section + '"]').length) {
          $("html, body").animate(
            {
              scrollTop: $('[data-section="' + section + '"]').offset().top - 55,
            },
            500
          );
        }
  
        if (navbar.is(":visible")) {
          navbar.removeClass("in");
          navbar.attr("aria-expanded", "false");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
  
        event.preventDefault();
        return false;
      });
    };
  
    // Reflect scrolling in navigation
    var navActive = function (section) {
      var $el = $("#navbar > ul");
      $el.find("li").removeClass("active");
      $el.each(function () {
        $(this)
          .find('a[data-nav-section="' + section + '"]')
          .closest("li")
          .addClass("active");
      });
    };
  
    var navigationSection = function () {
      var $section = $("section[data-section]");
  
      $section.waypoint(
        function (direction) {
          if (direction === "down") {
            navActive($(this.element).data("section"));
          }
        },
        {
          offset: "150px",
        }
      );
  
      $section.waypoint(
        function (direction) {
          if (direction === "up") {
            navActive($(this.element).data("section"));
          }
        },
        {
          offset: function () {
            return -$(this.element).height() + 155;
          },
        }
      );
    };
  
    var sliderMain = function () {
      $("#colorlib-hero .flexslider").flexslider({
        animation: "fade",
        slideshowSpeed: 5000,
        directionNav: true,
        start: function () {
          setTimeout(function () {
            $(".slider-text").removeClass("animated fadeInUp");
            $(".flex-active-slide")
              .find(".slider-text")
              .addClass("animated fadeInUp");
          }, 500);
        },
        before: function () {
          setTimeout(function () {
            $(".slider-text").removeClass("animated fadeInUp");
            $(".flex-active-slide")
              .find(".slider-text")
              .addClass("animated fadeInUp");
          }, 500);
        },
      });
    };
  
    var stickyFunction = function () {
      var h = $(".image-content").outerHeight();
  
      if ($(window).width() <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach");
      } else {
        $(".sticky-parent").removeClass("stick-detach");
        $("#sticky_item").trigger("sticky_kit:detach");
        $("#sticky_item").trigger("sticky_kit:unstick");
      }
  
      $(window).resize(function () {
        var h = $(".image-content").outerHeight();
        $(".sticky-parent").css("height", h);
  
        if ($(window).width() <= 992) {
          $("#sticky_item").trigger("sticky_kit:detach");
        } else {
          $(".sticky-parent").removeClass("stick-detach");
          $("#sticky_item").trigger("sticky_kit:detach");
          $("#sticky_item").trigger("sticky_kit:unstick");
  
          $("#sticky_item").stick_in_parent();
        }
      });
  
      $(".sticky-parent").css("height", h);
    };
  
    // Document on load.
    $(function () {
      fullHeight();
      counter();
      counterWayPoint();
      contentWayPoint();
      burgerMenu();
  
      clickMenu();
      navigationSection();
  
      mobileMenuOutsideClick();
      sliderMain();
      stickyFunction();
      detectDayNightMode();
    });
  })();
  
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    // Variables privadas
    var links = this.el.find(".link");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };
  
  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());
  
    $next.slideToggle();
    $this.parent().toggleClass("open");
  
    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };
  
  var accordion = new Accordion($("#accordion"), false);
  
  function enableDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function detectDayNightMode() {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    if (isDayTime === true) {
      // do nothing
    } else {
      enableDarkMode();
    }
  }
  
  


  