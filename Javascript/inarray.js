var arr=['Sam','Billy','Jon'];
$('#button').click(function(){
var text=$('#text').val();
if(jQuery.inArray(text,arr)!=-1){
	alert('found');
}

});