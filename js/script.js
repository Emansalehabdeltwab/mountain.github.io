/*
--------------------------------------------------------

[ MOUNTAIN , Javscript file ]

  Template Name :  MOUNTAIN - Corporate & Business Startup Template

  Version       :  1.0

  Author        :  Pixel_Factory

  Author URI    :  http://themeforest.net/user/Pixel_Factory

  Author Email  : h.nafees.anwar@gmail.com

--------------------------------------------------------
*/

$(window).load(function () {

	//Remove Loader
	$('.loader, .pace').delay(700).fadeOut(500);

});

$(document).ready(function () {

	'use strict';

	//function makes header static on scroll
	var headerStatic = function () {

		if ($(window).scrollTop() > 50) {
			$('.page-head').addClass('fixed');
		} else {
			$('.page-head').removeClass('fixed');
		}

	};
	//header static END

	$(window).on('scroll', headerStatic); // headerStatic called on scroll

	//function to fix responsiveness issues like navigation on small screens
	var responsive = function () {

		var wWidth = $(window).width();

		if (wWidth <= 768) {
			$('.navigation').addClass('nav-xs');
			$('.page-head').addClass('fixed');
			$(window).off('scroll', headerStatic);

		} else {

			$('.navigation').removeClass('nav-xs');
			if ($(window).scrollTop() < 100) {
				$('.page-head').removeClass('fixed');
			}

			$(window).on('scroll', headerStatic);

		}

	};
	// responsive END

	$(window).on('resize load', responsive); //responsive called on resize and load

	// navigation toggle button
	$('.nav-btn button').on('click', function () {
		$('.navigation.nav-xs').slideToggle();
	});

	//-----------------------------------
	//      Plugins Configurations
	//-----------------------------------

	//Sliders
	if ($('#slider-home').length) {

		//Slider Home 1
		$('.home-1 #slider-home').sliderPro({
			width: '100%',
			height: 600,
			buttons: false,
			arrows: true,
			slideDistance: 0,
			imageScaleMode: 'cover',
			breakpoints: {
				768: {
					height: '500px'
				},

				480: {
					height: '450px'
				}
			}

		});

		var windowHeight = $('#vH').height();

		//Slider Home 2
		$('.home-2 #slider-home').sliderPro({
			width: '100%',
			height: windowHeight,
			buttons: false,
			arrows: true,
			slideDistance: 0,
			imageScaleMode: 'cover',
			breakpoints: {
				768: {
					height: '500px'
				},

				480: {
					height: '450px'
				}
			}

		});

	}

	//one page navigation
	$('.navigation nav ul').onePageNav({
		currentClass: 'active',
		scrollThreshold: 0.1,
		scrollSpeed: 1500,
		easing: 'easeInOutCirc',
		changeHash: false
	});

	//parallax (testimonials)
	$('.section-testimonials').parallax({
		imageSrc: 'images/testimonials_bg.jpg',
		position: 'left center',
	});

	//parallax (phone no)
	$('.section-phone-no').parallax({
		imageSrc: 'images/phone_no_bg.jpg',
		position: 'left center'
	});

	//parallax (facts)
	$('.section-facts').parallax({
		imageSrc: 'images/facts_bg.jpg',
		position: 'left center'
	});

	//parallax (subscribe)
	$('.section-subscribe').parallax({
		imageSrc: 'images/subscribe_bg.jpg',
		position: 'left center'
	});

	//carousel (testimonials)
	$('.carousel-container').slick({
		arrows: false,
		dots: false,
		adaptiveHeight: true
	});

	//carousel (news)
	$('.carousel-news').slick({
		arrows: false,
		dots: false,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 992,
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

	//popup (about video)
	$('.popup-video').magnificPopup({

		type: 'iframe',

		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe width="854" height="480" src="https://www.youtube.com/embed/BXyfCGDnuWs?autoplay=1" frameborder="0" allowfullscreen></iframe>' +
				'</div>' //paste you video embed video URL in src attribute
		}

	});

	//popup (gallery)
	$('.items-container-portfolio').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,

			preload: [0, 2],

			navigateByImgClick: true,

			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
		}
	});

	//google map initialization
	function initGoogleMap() {

		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(31.540554, 74.334259),
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e9e9e9"
                }, {
					"lightness": 17
                }]
            }, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
                }, {
					"lightness": 20
                }]
            }, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
                }, {
					"lightness": 17
                }]
            }, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#ffffff"
                }, {
					"lightness": 29
                }, {
					"weight": 0.2
                }]
            }, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
                }, {
					"lightness": 18
                }]
            }, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
                }, {
					"lightness": 16
                }]
            }, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
                }, {
					"lightness": 21
                }]
            }, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dedede"
                }, {
					"lightness": 21
                }]
            }, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
                }, {
					"color": "#ffffff"
                }, {
					"lightness": 16
                }]
            }, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
                }, {
					"color": "#333333"
                }, {
					"lightness": 40
                }]
            }, {
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
                }]
            }, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f2f2f2"
                }, {
					"lightness": 19
                }]
            }, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#fefefe"
                }, {
					"lightness": 20
                }]
            }, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#fefefe"
                }, {
					"lightness": 17
                }, {
					"weight": 1.2
                }]
            }]
		};

		var mapElement = document.getElementById('gMap');

		var map = new google.maps.Map(mapElement, mapOptions);

		var marker = new google.maps.Marker({

			position: new google.maps.LatLng(31.540554, 74.334259),
			map: map,
			icon: 'images/marker.png',
			title: 'I am here.'
		});
	}

	if ($('#gMap').length) {
		initGoogleMap();
	}

});
