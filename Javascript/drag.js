$(document).ready(function(){
$('#drag').draggable({containment:[0,0,200,300],cursor:'pointer',opacity:0.40,revert:true,revertDuration:3000,
start:function(){
	$('#write').text('Dragging started');
},
drag:function(){
	$('#write').text('Dragging now');
},
stop:function(){
	$('#write').text('Done with Dragging');
}

});
});