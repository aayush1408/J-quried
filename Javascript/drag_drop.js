$('.drag').draggable({revert:true,
start:function(){
var contents=$(this).text();
 }
 });
$('#drop').droppable({
	drop:function(){
		//alert('Sasa');
		$('#drop').append(contents);
	}
});
