var max_length=55;
$('#feedback').html('Chracters remaining '+max_length);
$('#text').keyup(function(){
var new_length=$(this).val().length;
var final=max_length-new_length
$('#feedback').html('Chracters remaining '+final);
});