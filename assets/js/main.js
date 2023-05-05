$(() => {

    $('#mobile-menu-toggler, #mobile-menu').on('click', (e) => {

        $('#mobile-menu')
            .toggleClass('flex')
            .toggleClass('hidden');
    });
});