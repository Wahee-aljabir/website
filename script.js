function scrollToSection(sectionClass) {
    document.querySelector('.' + sectionClass).scrollIntoView({ behavior: 'smooth' });
};

$(document).ready(function(){

    $('.buttons').hide()
    $('.toggle').click(display)

    var click = 0

    function display () {
        $(".buttons").show('slow')
        click = click + 1

        if (click === 1)
            $(".buttons").show('slow')

        if (click === 2)
            $(".buttons").hide('slow')

        if (click > 2)
            click = 1
        console.log(click)
    };
});