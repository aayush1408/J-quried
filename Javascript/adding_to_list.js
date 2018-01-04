$(document).ready(function(){
$('.link').click(function(){
	var text=$(this).text();
$('#list').append('<option>'+ text +'</option>');
});

});