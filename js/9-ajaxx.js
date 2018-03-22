$(document).ready(function () {
    console.log('test');
    $('button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);
            $('body').append('<div id="dane-programisty">');
            $('#dane-programisty').append('<p> Imię to ' + data.imie + '</p>');
            $('#dane-programisty').append('<p> Zawod to ' + data.zawod + '</p>');
            $('#dane-programisty').append('<p> Firma to ' + data.firma + '</p>');

        })


    })
})


