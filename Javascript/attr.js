$(document).ready(function(){
	var element='Please enter something';
$('input[type="email"]').attr('value',element);
$('input[type="email"]').focusin(function(){
	if($(this).val()==element){
$(this).attr('value','');
}
}).blur(function(){
if($(this).val() ==''){
	$(this).attr('value',element);
}
});
});