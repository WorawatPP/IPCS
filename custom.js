// Toggle Show/Hide DIV 2

$('#paraquat').on('click', function () {
    $('#detail_paraquat').toggle('slide');
    $('#detail_glyphosate').hide('slow');
    $('#detail_chlorpyrifos').hide('slow');

})

$('#paraquat-res').on('click', function () {
    $('#detail_paraquat').toggle('slow');
    $('#detail_glyphosate').hide('slow');
    $('#detail_chlorpyrifos').hide('slow');

})

$('#glyphosate').on('click', function () {
    $('#detail_glyphosate').toggle('slow');
    $('#detail_paraquat').hide('slow');
    $('#detail_chlorpyrifos').hide('slow');

})

$('#glyphosate-res').on('click', function () {
    $('#detail_glyphosate').toggle('slow');
    $('#detail_paraquat').hide('slow');
    $('#detail_chlorpyrifos').hide('slow');

})

$('#chlorpyrifos').on('click', function () {
    $('#detail_chlorpyrifos').toggle('slow');
    $('#detail_glyphosate').hide('slow');
    $('#detail_paraquat').hide('slow');

})

$('#58').on('click', function () {
    $('#detail_58').toggle('slow');
    $('#detail_59').hide('slow');
    $('#detail_60').hide('slow');
    $('#detail_61').hide('slow');
    $('#detail_62').hide('slow');
    $('#detail_63').hide('slow');
})

$('#59').on('click', function () {
    $('#detail_58').hide('slow');
    $('#detail_59').toggle('slow');
    $('#detail_60').hide('slow');
    $('#detail_61').hide('slow');
    $('#detail_62').hide('slow');
    $('#detail_63').hide('slow');
})

$('#60').on('click', function () {
    $('#detail_58').hide('slow');
    $('#detail_59').hide('slow');
    $('#detail_60').toggle('slow');
    $('#detail_61').hide('slow');
    $('#detail_62').hide('slow');
    $('#detail_63').hide('slow');
})

$('#61').on('click', function () {
    $('#detail_58').hide('slow');
    $('#detail_59').hide('slow');
    $('#detail_60').hide('slow');
    $('#detail_61').toggle('slow');
    $('#detail_62').hide('slow');
    $('#detail_63').hide('slow');
})

$('#62').on('click', function () {
    $('#detail_58').hide('slow');
    $('#detail_59').hide('slow');
    $('#detail_60').hide('slow');
    $('#detail_61').hide('slow');
    $('#detail_62').toggle('slow');
    $('#detail_63').hide('slow');
})

$('#63').on('click', function () {
    $('#detail_58').hide('slow');
    $('#detail_59').hide('slow');
    $('#detail_60').hide('slow');
    $('#detail_61').hide('slow');
    $('#detail_62').hide('slow');
    $('#detail_63').toggle('slow');
})

$('#sec2, #sec3, #sec4, #sec5, #sec6').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

$('#chaingmai').on('click', function () {
    $('#detail_all').hide('slow');
    $('#detail_chaingmai').toggle('slow');
    $('#detail_chaingrai').hide('slow');
    $('#detail_nan').hide('slow');
    $('#detail_phayao').hide('slow');
    $('#detail_lampang').hide('slow');
})

$('#chaingrai').on('click', function () {
    $('#detail_all').hide('slow');
    $('#detail_chaingmai').hide('slow');
    $('#detail_chaingrai').toggle('slow');
    $('#detail_nan').hide('slow');
    $('#detail_phayao').hide('slow');
    $('#detail_lampang').hide('slow');
})

$('#nan').on('click', function () {
    $('#detail_all').hide('slow');
    $('#detail_chaingmai').hide('slow');
    $('#detail_chaingrai').hide('slow');
    $('#detail_nan').toggle('slow');
    $('#detail_phayao').hide('slow');
    $('#detail_lampang').hide('slow');
})

$('#phayao').on('click', function () {
    $('#detail_all').hide('slow');
    $('#detail_chaingmai').hide('slow');
    $('#detail_chaingrai').hide('slow');
    $('#detail_nan').hide('slow');
    $('#detail_phayao').toggle('slow');
    $('#detail_lampang').hide('slow');
})

$('#lampang').on('click', function () {
    $('#detail_all').hide('slow');
    $('#detail_chaingmai').hide('slow');
    $('#detail_chaingrai').hide('slow');
    $('#detail_nan').hide('slow');
    $('#detail_phayao').hide('slow');
    $('#detail_lampang').toggle('slow');
})

$('.nav-link').on('click', function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log("Work");

})