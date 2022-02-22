//WRITE YOUR jQUERY CODE HERE
$('*[class^="add-row"]').click( function(){
    var str = $("#name").val();
    $('*[class^="table"]').append('<tr><td><input type="checkbox" name="record">'+'</td><td>'+str+'</td></tr>');
});
$('*[class^="delete-row"]').click(function(){

  var row = $('*[class^="table"]').find('input[type="checkbox"]:checked');
   //$($(row).closest("tr"))
   row.parent().parent().remove();
     // console.log($('*[class^="table"]').find('input[type="checkbox"]:checked'));
});
