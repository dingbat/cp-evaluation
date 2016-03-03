$(document).ready(function() {
    $.getJSON("https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/master/weather.json", function( data ) {
        var total = 0;
        for (var i = 0; i < data.length; i++)
        {
            total += parseInt(data[i].TemperatureF);
            $('#weather').append("<li>"+data[i].TimeEST+" "+data[i].TemperatureF+"</li>");
        }
        total /= data.length;
        $('#average').html("Average "+total);
    });
});

