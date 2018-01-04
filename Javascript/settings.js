$('#button').click(function(){
	trying('Your settings have been saved');
});
function trying(text){
	$('#menu').html('<h3>'+text+'</h3>');
	$('#menu').slideDown('slow');
}
