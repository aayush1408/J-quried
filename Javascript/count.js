
function counter(time,url)
{
var Interval=setInterval(function(){
$('#counter').text(time);
time=time-1;
if(time==0){
	clearInterval(Interval);
	window.location=url;
	//alert('ef');

}
},1000);



}


$(document).ready(function(){
counter(10,'http://www.google.com/');
});