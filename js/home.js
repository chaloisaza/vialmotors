(function ($) {
    $(document).ready(function () {
        //init vars
        $('#bannerImage').hide();
        $('.divCategories').hide();
        $('#parentSearchDiv').hide();



        //start scroll back top function
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        //start owl owlCarousel
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 6,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1320: {
                    items: 5,
                },
                1440: {
                    items: 6,
                }
            }
        });


        //logic for nav menu
        $('.navbarList').click(function (e) {


            //hide search div
            $('#parentSearchDiv').hide();

            //remove nav active class
            $('.navbarList').removeClass('active');
            //add nav specific class
            $('#' + e.target.id).parent().addClass('active');

            //remove list-group-item active class
            $('.list-group-item').removeClass('active');


            //hide all categorie div and show specif div

            $('.divCategories').hide();
            $('#div' + e.target.id).show();

            //show carousel if home else hide
            if (e.target.id == "home") {
                $('#divInicio').show();
                $('#carouselExampleIndicators').show();
            }
            else {
                $('#carouselExampleIndicators').hide();
            }

            //hide banner categories
            $('#bannerImage').hide();
        });

        //logic for categories menu
        $('.list-group-item').click(function (e) {

            //show search div
            $('#parentSearchDiv').show();

            //remove categories active class
            $('.list-group-item').removeClass('active');

            //add categories specific class
            $('#' + e.target.id).addClass('active');

            //remove navbar active class
            $('.navbarList').removeClass('active');

            //change carousel for specific banner
            $('#carouselExampleIndicators').hide();
            $('#bannerImage').show();
            $('#bannerImage').css("background", "url(images/categories/" + e.target.id + ".jpg)");

            //hide all categorie div and show specif div
            $('#divInicio').hide();
            $('.divCategories').hide();
            $('#div' + e.target.id).show();


            $('body,html').animate({
                scrollTop: $('#div' + e.target.id).offset().top
            }, 800);
        });
    });
})(jQuery);

