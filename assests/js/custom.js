 
      $( document ).ready(function() {
          

          //------ progress bar js -----//
				var wind = $(window);
                $(".loading").fadeOut(500);
            
            
                wind.on('scroll', function () {
                    $(" .skills-progress span").each(function () {
                        var bottom_of_object = 
                        $(this).offset().top + $(this).outerHeight();
                        var bottom_of_window = 
                        $(window).scrollTop() + $(window).height();
                        var myVal = $(this).attr('data-value');
                        if(bottom_of_window > bottom_of_object) {
                            $(this).css({
                              width : myVal
                            });
                        }
                    });
                });
          
          //------ progress bar js -----//
     $(".ps-section-1 .skills-progress span").each(function () {
        var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
        var bottom_of_window =
            $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr('data-value');
        if (bottom_of_window > bottom_of_object) {
            $(this).css({
                width: myVal
            });
        }
    });
    //
    	// -------------------------------------------------------------
   
   
   
   
    //-----progress bar section-12----- //
    (function() {
        $(document).ready(function() {
          $('.skill-box').find('b').each(function(i) {
            return $(this).prop('Counter', 0).animate({
              Counter: $(this).parent().data('percent')
            }, {
              duration: 1000,
              easing: 'swing',
              step: function(now) {
                return $(this).text(Math.ceil(now) + '%');
              }
            });
          });
          return $('.skill-box .skills-circle li').each(function(i) {
            var _left, _percent, _right, deg, full_deg, run_duration;
            _right = $(this).find('.bar-circle-right');
            _left = $(this).find('.bar-circle-left');
            _percent = $(this).attr('data-percent');
            deg = 3.6 * _percent;
            if (_percent <= 50) {
              return _right.animate({
                circle_rotate: deg
              }, {
                step: function(deg) {
                  $(this).css('transform', 'rotate(' + deg + 'deg)');
                },
                duration: 1000
              });
            } else {
              full_deg = 180;
              deg -= full_deg;
              run_duration = 1000 * (50 / _percent);
              return _right.animate({
                circle_rotate: full_deg
              }, {
                step: function(full_deg) {
                  $(this).css('transform', 'rotate(' + full_deg + 'deg)');
                },
                duration: run_duration,
                easing: 'linear',
                complete: function() {
                  run_duration -= 1000;
                  _left.css({
                    'clip': 'rect(0, 150px, 150px, 75px)',
                    'background': '#d79898'
                  });
                  return _left.animate({
                    circle_rotate: deg
                  }, {
                    step: function(deg) {
                      $(this).css('transform', 'rotate(' + deg + 'deg)');
                    },
                    duration: Math.abs(run_duration),
                    easing: 'linear'
                  });
                }
              });
            }
          });
        });
      
      }).call(this);
     //-------------Progress bar section-13-a------------//
     
    //----------animation js of pricing table-------//


   wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
    


     //------------------------ OWL JS Start --------------------//
     
     $('.slider-1 .owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText : ['<i class="fas fa-circle"></i>','<i class="fas fa-circle"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
                margin: 20
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 4
            }
        }
    })
    //------------------------second slider js--------------------//
    
    $('.slider-2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    })
    //------------------------second slider js--------------------//
    
    $('.slider-3 .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
                margin: 20
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
         //------------------------ four slider js--------------------//
     
         $('.slider-5 .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText : ['<i class="fas fa-circle"></i>','<i class="fas fa-circle"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1,
                   
                },
                600: {
                    items: 3,
                    
                },
                1000: {
                    items: 5
                }
            }
        })
      //------------------------ seven slider js--------------------//
     
      $('.slider-7 .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
               
            },
            600: {
                items: 3,
                
            },
            1000: {
                items: 5
            }
        }
    })
      //------------------------ seven slider js--------------------//
     
      $('.slider-9 .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin:20,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
               
            },
            600: {
                items: 2,
                
            },
            1000: {
                items: 4
            }
        }
    })
 //------------------------ seven slider js--------------------//
     
 $('.slider-10 .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1,
           
        },
        600: {
            items: 2,
            
        },
        1000: {
            items: 4
        }
    }
})
//------------- 12 slider js--------------//
$('.slider-12 .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    navText : ['<i class="fas fa-circle"></i>','<i class="fas fa-circle"></i>'],
    responsive:{
        0:{
            items:1
        },
        480: {
            items: 1
           
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
//------------- 13 slider js--------------//
$('.slider-13 .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        480: {
            items: 1
           
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

});


