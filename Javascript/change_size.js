$('#small').click(function(){
change_size($('p'),'smaller')
});
$('#large').click(function(){
change_size($('p'),'bigger')
});
function change_size(e,size){
	var font_size=parseInt(e.css('font-size'));
	if(size=='smaller'){
		//var new_size=pareseInt(font_size);
	var new_size=font_size-1;
	var final=new_size+"px";
	e.css('font-size',final);
}
	if(size=='bigger'){
		//var new_size=pareseInt(font_size);
	var new_size=font_size+1;
	var final=new_size+"px";
	e.css('font-size',final);
}
}