jQuery(document).ready(function($) {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        //Checkbox Validator
        jQuery('input#sib-email-checkbox').on("click", function() {
            var sibcheckbox = jQuery('input#sib-email-checkbox').is(':checked');
            if (sibcheckbox) {
                // it is checked
                jQuery('.sib-default-btn').prop("disabled", false);
                jQuery('.sib-default-btn').removeClass('disabled');
            } else {
                // it isn't checked	
                jQuery('.sib-default-btn').prop("disabled", true);
                jQuery('.sib-default-btn').addClass('disabled');
            }
        });

        //Rearrange blurb position in html
        jQuery('#chaque__besoin .et_pb_module').each(function() {
            var currentColumn = jQuery(this);
            currentColumn.find('.et_pb_image_wrap').append(currentColumn.find('.et_pb_blurb_container'));
        });

        //Dynamic Width contact left section
        let imgWidth = (jQuery('#contact_dynamic__image img').width());
        jQuery('#contact_dynamic__infos').css('max-width', imgWidth);

        //Dynamic Width page a propos
        let imgWidth2 = (jQuery('#module-img-section2 img').width());
        jQuery('#module-text-hover').css('width', imgWidth2);

        // Product modal popup
        if (jQuery("#detail-produit").length) {
            jQuery("span.close").click(function() {
                jQuery("#myModal").css("display", "none");
                jQuery('.et_pb_all_tabs .et_pb_tab ').hide();
                jQuery("#myBtn").css("opacity", "0");
                jQuery(".single-product,html").removeClass("autorizescoll");
                jQuery('#et-main-area').removeClass('higher-index');
                jQuery('header').removeClass('lower-index');
                jQuery("button#myBtn").css("display", "none");
                history.pushState("", document.title, window.location.pathname);
                // parent.location.hash = ''
            });

            $(window).click(function(e) {
                if (e.target == "#myModal") {
                    jQuery("#myModal").css("display", "none");
                    jQuery('.et_pb_all_tabs .et_pb_tab ').hide();
                }
            });


            jQuery('.single-product .et_pb_all_tabs .et_pb_tab ').hide();
            jQuery(".single-product .et_pb_tabs_controls  li").click(function() {
                jQuery("button#myBtn").css("display", "block");
                jQuery("#myModal").css("display", "block");
                jQuery("#myModal").css("display", "block");
                jQuery("#myBtn").css("opacity", "1");
                jQuery(".single-product,html").addClass("autorizescoll");
                jQuery('#et-main-area').addClass('higher-index');
                jQuery('header').addClass('lower-index');
                jQuery('.modal-content p').empty();

                var index = jQuery(".single-product .et_pb_tabs_controls  li").index(this);
                var tab0 = jQuery('.single-product .et_pb_all_tabs .et_pb_tab ').eq(index).first("div").get(0).outerHTML;
                jQuery('.modal-content p').append(tab0);

                jQuery('.modal-content p .et_pb_tab ').css("opacity", "1");
                jQuery('#myModal .modal-content p .et_pb_tab').css("display", "block");

            });

        }
        // carousel mobile gallerie product
        if (jQuery("#detail-produit").length) {

            $(".carsouselfullproduct").owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoplay: true,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        }

        //Trigger input click when label click
        jQuery('#filtre-left-section .wpf_item_pa_matieres .wpf_column_vertical >li,#filtre-left-section .wpf_item_pa_collections .wpf_column_vertical >li').each(function() {
            var $this = jQuery(this);
            var currentLabel = $this.find('label');
            var currentInput = $this.find('input');
            currentLabel.click(function() {
                currentInput.click();
            });
        });
        // order_review
        jQuery('#order_review').prepend(jQuery('h3#order_review_heading'));

        // Wrap two prodcuts in one div homepage
        jQuery('.home__products__right .et_pb_shop_2, .home__products__right .et_pb_shop_3').wrapAll('<div class="wraped__products" />');

        // Wrap section1/section2 home
        jQuery('#tissus__extraordinaires, #bene__specialty').wrapAll('<div class="wraped__sections" />');

        // Home Carrousel a chaque besoin
        jQuery('.section__besoin__mobile > div').addClass('owl-carousel owl-theme');
        var ElWidth = jQuery(window).width();
        if (ElWidth < 981) {
            setInterval(function() {
                if ((".section__besoin__mobile > div.owl-carousel").length > 0) {
                    jQuery('.section__besoin__mobile > div.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: false,
                        autoplay: false,
                        autoplayTimeout: 10000,
                        autoplayHoverPause: false,
                        dots: true,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            500: {
                                items: 2,
                            },
                            768: {
                                items: 2,
                            }
                        }
                    })
                }
            }, 1000);
        }

        // Single Product Carrousel
        jQuery('#vous-aimerez-aussi section.related.products > .products').addClass('owl-carousel owl-theme');
        setInterval(function() {
            if (("#vous-aimerez-aussi section.related.products > .products.owl-carousel").length > 0) {
                jQuery('#vous-aimerez-aussi section.related.products > .products.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    autoplay: false,
                    autoplayTimeout: 10000,
                    autoplayHoverPause: false,
                    dots: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        500: {
                            items: 2,
                        },
                        768: {
                            items: 2,
                        },
                        981: {
                            items: 4,
                        }
                    }
                })
            }
        }, 1000);
        // FAQ Carrousel Page Contact
        jQuery('#faq__carrousel > div').addClass('owl-carousel owl-theme');
        if (ElWidth < 981) {
            setInterval(function() {
                if (("#faq__carrousel > div.owl-carousel").length > 0) {
                    jQuery('#faq__carrousel > div.owl-carousel').owlCarousel({
                        loop: false,
                        margin: 10,
                        nav: false,
                        autoplay: false,
                        autoplayTimeout: 4000,
                        autoplayHoverPause: false,
                        dots: true,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            500: {
                                items: 1,
                            },
                            768: {
                                items: 2,
                            },
                            981: {
                                items: 2,
                            }
                        }
                    })
                }
            }, 1000);
        }

        // Rearrange Title Place in html product Section Home
        jQuery('#page-container #et-boc #main-content .home__products .products .product').each(function() {
            let $this = jQuery(this);
            let theDistination = $this.find('.et_shop_image');
            let productTitle = $this.find('.woocommerce-loop-product__title');
            theDistination.prepend(productTitle);
        });

        // Wrap two prodcuts in one div homepage
        jQuery('.blog-1,#section-blog,.blog-3').wrapAll('<div class="wraped__blog global_bottom_background" />');
        jQuery('#contact ,#faq').wrapAll('<div class="wraped__contact" />');
    }



});

//js modal tabs product*/

jQuery(document).mousedown(function(e) {
    if (jQuery("#detail-produit").length) {

        var element = jQuery("#myModal");
        if (!element.is(e.target) && element.has(e.target).length === 0) {
            jQuery("#myModal").css("display", "none");
            jQuery("button#myBtn").css("display", "none");
            jQuery(".single-product,html").removeClass("autorizescoll");
            jQuery('#et-main-area').removeClass('higher-index');
            jQuery('header').removeClass('lower-index');
            jQuery('.et_pb_all_tabs .et_pb_tab ').hide();
            parent.location.hash = '';
        }
    }
});

jQuery(window).resize(function() {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        let imgWidth = (jQuery('#contact_dynamic__image img').width());
        jQuery('#contact_dynamic__infos').css('max-width', imgWidth);
    }
});

// Position product in middle 
jQuery(document).ready(function() {
    adjustElement(jQuery(window).width() > 980);
});
jQuery(window).resize(function() {
    adjustElement(jQuery(window).width() > 980);
});


function adjustElement(bool) {
    if (bool) {
        let imgHeight = (jQuery('.product-gallery.addclasscarousel a.view-gallery:first-child > img').outerHeight() / 2);
        let prodShare = (jQuery('.product-share'));
        let pnButtons = (jQuery('.prev_next_buttons').outerHeight() / 2);
        let newTop = imgHeight - pnButtons;
        let newShareTop = (imgHeight * 2) - 80;
        jQuery('.prev_next_buttons').css('top', newTop);
        prodShare.css('top', newShareTop);
    } else {
        let imgHeight = (jQuery('.product-gallery.owl-carousel a.view-gallery:first-child > img').outerHeight() / 2);
        let prodShare = (jQuery('.product-share'));
        let pnButtons = (jQuery('.prev_next_buttons').outerHeight() / 2);
        let newTop = imgHeight - pnButtons;
        let newShareTop = (imgHeight * 2) - 80;
        jQuery('.prev_next_buttons').css('top', newTop);
        prodShare.css('top', newShareTop);
    }
}
// Position product in middle 

jQuery(document).ready(function($) {
    // Rearrange wishlist & viewbutton place in HTML
    jQuery('.products .product').each(function() {
        let singleProduct = jQuery(this);
        let locationPoint = singleProduct.find('.et_shop_image');
        let addButton = singleProduct.find('a.button.add_to_cart_button');
        let wishlistButton = singleProduct.find('.yith-wcwl-add-to-wishlist');
        locationPoint.append(addButton, wishlistButton);
    });
})

jQuery(document).ajaxComplete(function(event, request, settings) {
    // Rearrange wishlist & viewbutton place in HTML When Ajax change with Check!
    if (jQuery('.products .product .et_shop_image > a.button.yith-wcqv-button').length <= 0) {
        // Rearrange wishlist & viewbutton place in HTML
        jQuery('.products .product').each(function() {
            let singleProduct = jQuery(this);
            let locationPoint = singleProduct.find('.et_shop_image');
            let addButton = singleProduct.find('a.button.add_to_cart_button');
            let wishlistButton = singleProduct.find('.yith-wcwl-add-to-wishlist');
            locationPoint.append(addButton, wishlistButton);
        });
    }

    // 
    jQuery('#customer_details').prepend(jQuery('.woocommerce-NoticeGroup-checkout'));
});

jQuery(document).ready(function($) {
    //Images for filtre boutique
    if (jQuery('.woocommerce')[0]) {
        jQuery("#filtre-right-section .wpf_item > .wpf_column_horizontal > li").each(function() {
            var styleLabel = jQuery(this).find('label').attr('style');
            console.log(styleLabel);
            styleLabel = jQuery.trim(styleLabel.split(";")[0]);
            var urlpicture = "" + styleLabel.split(":")[1] + ':' + styleLabel.split(":")[2] + "";
            var tempId = jQuery(this).find('input').attr('id');
            var htmlTemp = "#filtre-right-section #" + tempId + ":before{background-image: " + urlpicture + " !important;}";
            jQuery("<style>")
                .prop("type", "text/css")
                .html(htmlTemp)
                .appendTo("head");
        });
    }

    //Trigger Click on input when click on label
    jQuery('#filtre-left-section .wpf_item_pa_matieres .wpf_column_horizontal >li').each(function() {
        var $this = jQuery(this);
        var currentLabel = jQuery(this).find('label');
        var currentInput = jQuery(this).find('input');
        currentLabel.click(function() {
            currentInput.click();
        });
    });
});