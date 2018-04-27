$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

$('ul li a').click(function() {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
});
