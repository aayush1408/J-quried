$('.links').click(function(){
var gref=$(this).attr('href');
$('#text').load(gref);
return false;
});