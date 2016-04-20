$( document ).ready(function() {
    
        $("#panelDetailsEdit").hide();
        $("#editedPannelOne").hide();
 
    $("#panelFocus").focus(function( event ) {
        $("#focusPannel").hide();
        $("#panelDetailsEdit").show();
    });
    
    $( "#donebtn" ).on( "click", function() {
       $("#panelDetailsEdit").hide();
       $("#focusPannel").show();
       $("#editedPannelOne").show();     
     });
    
    $( ".mkeHidden" ).on( "click", function() {
     $(this).parent().parent().hide();
    });
    
});