console.log('JS File loaded successfully.')

$('#createBurger').click(function (event) {
    event.preventDefault();

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

    $.ajax({
        method: "PUT",
        url: "/api/burgers",
        data: {burgerID: $(this).val()}
    }).then(() => {
        location.reload()
    }
    );

});