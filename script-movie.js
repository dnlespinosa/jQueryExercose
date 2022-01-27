$('button').on('click', function(e){
    e.preventDefault();
    let val = $('#one').val();
    let val2 = $('#two').val();
    $('ul').append(`<li>${val} ${val2}</li>`);
    $('li').append('<input type="checkbox" id="check">');   
    $('#check').on('click', function(){
        $('#check').parent().remove();
    })
})

