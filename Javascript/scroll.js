$('#textarea').scroll(function(){
var pos=$(this).scrollTop();
$('#feedback').html('Your cusror is at position'+pos);
});