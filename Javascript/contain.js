$(document).ready(function(){
	$('#search_name').keyup(function(){
      search_name=$(this).val();
      if(jQuery.trim(search_name)!=''){
      $("#names li:contains('"+ search_name +"')").css('background-color','yellow');}
	});
});