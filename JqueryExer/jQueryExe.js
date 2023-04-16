$(document).ready(function () {
    console.log("Lets gett ready to party with jQUERY!!!! YESSIIRRRR")
});

$('img').addClass("image-center");

$("p").eq(5).remove();

/// Next code below Represents the font size of the h1!, We can see the actual number in the console! ///

$(document).ready(function () {
    const number = Math.floor(Math.random() * 100)
    console.log("H1 new Font-Size is:", number)
    $('h1').css("font-size", number)
});

// Adding a new line to the list! (Not sure if it was like this)
$('ol').append("<li> Just adding a new Item!");

$('ol').empty();

$('ol').append("<p> I would like to apologize for the previous list!")

$("#button1").click(function () {
    let r = $("input").eq(0).val();
    let g = $("input").eq(1).val();
    let b = $("input").eq(2).val();

    const color = "rgb(" + r + "," + g + "," + b + ")";
    $("body").css("background-color", color)
});

$('img').on('click', function () {
    $(this).fadeOut(1000,function () {
        $(this).remove()
    })
})
