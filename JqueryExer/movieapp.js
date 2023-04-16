$(document).ready(function () {
    console.log("We are ready baby!");
    $('form').submit(function(event) {
        event.preventDefault();
        const movie = $('#movie').val();
        console.log("Title:", movie)
        const rating = $('#rating').val();
        console.log("Rating:", rating)
        $('#4ner').append('<div id="Final">' + movie + '--' + rating + '<button class="removeButton">Remove</button></div>');
    
        $('#movie').val('');
        $('#rating').val('');
    });
    
    $(document).on('click', '.removeButton', function() {
        $(this).parent().remove();
    });
});
