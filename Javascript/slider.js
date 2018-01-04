var min=1;
var max=100;
$('#slider').slider({min:min,max:max,step:5,slide:function(event,ui){
$('#slider_value').text("%"+ui.value);
},
});