$(document).ready(function () {
    console.log("ready!");

    $('#isLoading').addClass('blur');
    $('#isLoading').fadeOut('slow', function () {
        console.log('Fading');
        $({blurRadius: 5}).animate({blurRadius: 0}, {
            duration: 500,
            easing: 'swing',
            step: function () {
                $('#blur').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)",
                    "filter": "blur(" + this.blurRadius + "px)"
                });
            }
        });
        console.log('Loading ready');

    })
});