$('document').ready(function(){
    console.log('Lets get ready to party w/ JQuery!')
})

$('img').addClass('image-center');

// $('article').children().last(function(){
//     $(this).remvoe()
// });

// $('#title').css('font-size', (Math.floor(Math.random() * 100) + 1) );

// $('ol').append('<li>HEY THERE</li>');

$('aside').remove();
$('<p> IM SORRY THIS LIST EXISTS</p>').appendTo('article');

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

$('img').on('click', function(){
    $(this).remove();
})


