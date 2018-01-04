
$('input[type="text"]').focusin(function(){
	$(this).css('background-color','yellow');
}),blur(function(){
$(this).css('background-color','#fff');
});


$(':button').click(function(){
	$(this).attr('disabled',true);
});
