/*
 * Created by tom on 17/01/2017.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    $('#loading').fadeOut('slow', function () {
        $('#afterLoading').fadeIn('slow', function () {
           console.log('Loading ready');
        });
    })
});