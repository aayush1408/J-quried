$('#button').click(function(){
$('#area').attr('title','Saved').text('Settings were saved').dialog({buttons:{'ok':function(){ 
$(this).dialog('close');
}
},
closeonEscape:true,draggable:false,resizable:false,modal:true, 
});
});