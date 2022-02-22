//WRITE YOUR jQUERY CODE HERE
$('#each_ex').click(function(){
    console.log("clicked")
    $('*[class^="men_ex"]').children().children().children().css({"background-color":"red"})
     $('#msg_ex').append('<ul>Home</ul><ul>Products</ul><ul>Services</ul><ul>About</ul><ul>Contact</ul>');

});
