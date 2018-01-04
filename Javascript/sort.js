$(document).ready(function(){
$('#names,#places').sortable({containment:'document',cursor:'pointer',tolerance:'pointer',opacity:0.60,revert:true,connectWith:'#places , #names',
update:function(){
	content=$(this).text();
	$('#write').text(content);
 }
 });

});