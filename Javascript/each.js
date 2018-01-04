$('#button').click(function(){
var combined_text='';
$('input[type="text"]').each(function(){
combined_text+=$(this).val()+' ';
$('#text').html(combined_text);
});
});