console.log('JS File loaded successfully.')

$('#createBurger').click(function (event) {
    event.preventDefault();

    console.log('DEBUG: Activated submit function');
    console.log($('#newBurgerIn').val())

    $.ajax({
        method: "POST",
        url: "/api/burgers",
        data: {newBurger: $('#newBurgerIn').val()}
    }).then(() => {
        location.reload()
    }
    );

});

$('.eatBurgerButton').click(function (event) {
    event.preventDefault();

    console.log('DEBUG: Activated eatBurger function')
    console.log($('#newBurgerIn').val())

    $.ajax({
        method: "PUT",
        url: "/api/burgers",
        data: {burgerID: $(this).val()}
    }).then(() => {
        location.reload()
    }
    );

});