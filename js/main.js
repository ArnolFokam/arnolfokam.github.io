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
    anchor();
    totop();
    totop_myhide();
    contact_form();

    jQuery(window).on('scroll',function(){
        //e.preventDefault();
        totop_myhide();
        
    });

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

function anchor(){
    
    "use strict";
    
    jQuery('.anchor_nav').onePageNav();
    
    var scrollOffset = 0;
    
    jQuery(".anchor a").on('click', function(evn){
        evn.preventDefault();
        jQuery('html,body').scrollTo(this.hash, this.hash, {
            gap: { y: -scrollOffset-85 },
            animation:{
                duration: 1500,
                easing: "easeInOutExpo"
            }
        });
        return false;   
    });
}

function animate_text() {

    "use strict";

    var animateSpan = jQuery('.animation_text_word');

    animateSpan.typed({
        strings: [ "Tech lover", "Web Developer", "Anti-coffee coder"],
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

function totop(){
    
    "use strict";
    
    jQuery(".totop").on('click', function(e) {
        e.preventDefault();     
        jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
        return false;
    });
}

function totop_myhide(){
    
    "use strict";
    
    var toTop       =jQuery(".totop");
    if(toTop.length){
        var topOffSet   =toTop.offset().top;
        
        if(topOffSet > 1000){
            toTop.addClass('opened');   
        }else{
            toTop.removeClass('opened');
        }
    }
}



function contact_form(){
    
    "use strict";
    
    jQuery(".contact_form #send_message").on('click', function(){
        
        var name        = jQuery(".contact_form #name").val();
        var email       = jQuery(".contact_form #email").val();
        var message     = jQuery(".contact_form #message").val();
        var subject     = jQuery(".contact_form #subject").val();
        var success     = jQuery(".contact_form .returnmessage").data('success');
    
        jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
        //checking for blank fields 
        if(name===''||email===''||message===''){
            
            jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
        }
        else{
            // Returns successful data submission message when the entered information is stored in database.
            jQuery.post("https://formspree.io/mvookdob",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
                
                jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
                
                
                if(jQuery(".contact_form .returnmessage span.contact_error").length){
                    jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);     
                }else{
                    jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                    jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
                }
                
                if(data===""){
                    jQuery("#contact_form")[0].reset();//To reset form fields on success
                }
                
            });
        }
        return false; 
    });
}