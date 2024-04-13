document.addEventListener('DOMContentLoaded', function() {
    var botonCalcular = document.getElementById('calcular');
    var resultadoDosTercios = document.getElementById('resultadoDosTercios');
    var resultadoMedia = document.getElementById('resultadoMedia');
    var resultadoCuarto = document.getElementById('resultadoCuarto');

    botonCalcular.addEventListener('click', function() {
        var frecuencia = parseFloat(document.getElementById('frecuencia').value);

        if (isNaN(frecuencia) || frecuencia <= 0) {
            resultadoDosTercios.textContent = '';
            resultadoMedia.textContent = '';
            resultadoCuarto.textContent = 'Por favor ingresa una frecuencia válida.';
        } else {
            var velocidadDelSonido = 343; // Velocidad del sonido en el aire en metros por segundo
            var longitudDeOnda = velocidadDelSonido / frecuencia;

            var longitudDosTercios = (2 / 3) * longitudDeOnda;
            var longitudMedia = (1 / 2) * longitudDeOnda;
            var longitudCuarto = (1 / 4) * longitudDeOnda;

            resultadoDosTercios.textContent = 'Dos tercios de la longitud de onda: ' + longitudDosTercios.toFixed(2) + ' metros.';
            resultadoMedia.textContent = 'Media longitud de onda: ' + longitudMedia.toFixed(2) + ' metros.';
            resultadoCuarto.textContent = 'Un cuarto de la longitud de onda: ' + longitudCuarto.toFixed(2) + ' metros.';
        }
    });
});
