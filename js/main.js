/*
 * Copyright (c) 2018 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
 */


jQuery(document).ready(function() {

    "use strict";

    // here all ready functions
    hamburger();
    switcher();
    animate_text();
    about_animation();
    miniboxes();
    isotope();
    jarallax();
    data_images();

    jQuery(window).on('resize', function() {
        miniboxes();
        isotope();

    });

    jQuery(window).load('body', function() {
        setTimeout(function() {
            jQuery('.page_preloader').addClass('loaded');
        }, 1000);
    });

});

function miniboxes() {

    "use strict";

    var el = jQuery('.miniboxes');

    if (el.length) {
        el.each(function(index, element) {

            var child = jQuery(element).find('.minibox');

            child.css({
                height: 'auto'
            });
            // Get an array of all element heights

            var W = jQuery(window).width();
            if (W > 480) {
                var elementHeights = child.map(function() {
                    return jQuery(this).outerHeight();
                }).get();

                // Math.max takes a variable number of arguments
                // `apply` is equivalent to passing each height as an argument
                var maxHeight = Math.max.apply(null, elementHeights);

                // Set each height to the max height
                child.css({
                    height: maxHeight + 'px'
                });
            }
        });
    }
}

function animate_text() {

    "use strict";

    var animateSpan = jQuery('.animation_text_word');

    animateSpan.typed({
        strings: ["Freelancer", "French/English Translator", "Web Developer"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
}

function hamburger() {

    "use strict";

    var hamburger = jQuery('.hamburger');
    var mobileMenu = jQuery('.mobile_menu_wrap');

    hamburger.on('click', function() {
        var element = jQuery(this);

        if (element.hasClass('is-active')) {
            element.removeClass('is-active');
            mobileMenu.slideUp();
        } else {
            element.addClass('is-active');
            mobileMenu.slideDown();
        }
        return false;
    });
}

function switcher() {

    "use strict";

    var switcherOpener = jQuery('.resize');
    var switcherIcon = jQuery('.leftpart_wrap .resize i');
    var leftPart = jQuery('.leftpart_wrap');
    var rightPart = jQuery('.rightpart');

    switcherOpener.on('click', function() {
        if (switcherOpener.hasClass('opened')) {
            switcherOpener.removeClass('opened');
            switcherIcon.removeClass('opened');
            leftPart.removeClass('opened');
            rightPart.removeClass('opened');
        } else {
            switcherOpener.addClass('opened');
            switcherIcon.addClass('opened');
            leftPart.addClass('opened');
            rightPart.addClass('opened');
        }
        //setTimeout(function(){jQuery('#ripple').ripples('updateSize');},101);
        //setTimeout(function(){jQuery('#ripple').ripples('updateSize');},201);
        //setTimeout(function(){jQuery('#ripple').ripples('updateSize');},301);

        if (jQuery('.jarallax').length) {
            jQuery('.jarallax').jarallax('destroy');
            setTimeout(function() {
                jarallax();
            }, 300);

        }
        return false;

    });


}

function jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

function isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}


function about_animation() {

    "use strict";

    if ($('.parallax').length > 0) {
        var scene = $('.parallax').get(0);
        var parallax = new Parallax(scene, {
            relativeInput: true,
            onReady: function() {
                console.log('ready!');
            }
        });
    }
}

function data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}