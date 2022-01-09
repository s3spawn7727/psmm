(function ($) {
    "use strict";

    $(document).on("ready", function () {
        var nav_menu = $("#nav_menu");
        var testi_carousel = $(".testi_carousel");

        testi_carousel.owlCarousel({
            items: 1,
            loop: true,	
            dots: true,
            margin: 30,
        });

        nav_menu.slicknav({
            prependTo: ".mobile_menu",
        });

        function fixed_nav() {
            window.onscroll = function () {
                myFunction();
            };

            var header = document.getElementById("header");
            var sticky = header.offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
        fixed_nav();

        new WOW().init();
    });
	var d = new Date();
	jQuery('#year').text(d.getFullYear());

    jQuery('.read-more').on("click", function () {
		$(this).parent('.content').toggleClass('full')
    });
})(jQuery);