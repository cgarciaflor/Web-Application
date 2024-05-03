$(document).ready(function() {
    $(window).scroll(function() {
        $('.section').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(document).scrollTop();
            var windowHeight = $(window).height();

            if (position < scrollPosition + windowHeight - 100) {
                $(this).addClass('visible');
            }
        });

        var textSectionPosition = $('.text-section').offset().top;
        if (textSectionPosition < $(document).scrollTop() + $(window).height() - 100) {
            $('.text-section').addClass('visible');
        }
    });
});

$(document).ready(function() {
    $("#tabs").tabs();
});

$(document).ready(function() {
    $('.popup-link').magnificPopup({
        type: 'image', // Other types include 'iframe', 'inline', 'ajax'
        gallery:{
            enabled:true // Enable gallery mode
        },
        closeOnBgClick: true // Close popup when clicking on background
    });
});

$(document).ready(function(){
    $('.your-class').slick();
  });