$('#button').click(function(){

//
var count=1;
var Interval=setInterval(function(){
	count=count+1;
$('#pb').progressbar({value:count});
$('#progressbar').html(count+"%");
if(count==100){
	clearInterval(Interval);
}
},50);

});