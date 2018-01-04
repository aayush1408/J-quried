$(document).ready(function(){
$('.names,#places').draggable({containment:'document',revert:true});
$('#drop').droppable({ hoverClass: 'border' ,tolerance: 'pointer',accept:'.names',
over:function(){
	$('#drop').text('Hovered');
},
out:function(){
	$('#drop').text('out');
},
drop:function(){
	$('#drop').text('drop');
}

});
});