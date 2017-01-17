$( document ).ready(function() {
  console.log( "ready!" );
    	$('#preloading').fadeOut('slow',function(){
        $('#afterloading').fadeIn('slow',function(){
          console.log( "ready!" );
    });
  });
});
