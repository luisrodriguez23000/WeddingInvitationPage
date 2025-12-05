document.addEventListener('DOMContentLoaded', function() {
    // 1. Define la fecha y hora del evento
    // Formato: Mes Dia, Año Hora:Minutos:Segundos
    // **IMPORTANTE**: Cambia esta fecha a la fecha de tu boda
    const fechaBoda = new Date("Feb 14, 2026 17:00:00").getTime();

    // 2. Actualiza la cuenta regresiva cada 1 segundo
    const intervalo = setInterval(function() {

        // Obtener la fecha y hora actual
        const ahora = new Date().getTime();

        // Encontrar la distancia entre 'ahora' y la fecha del evento
        const distancia = fechaBoda - ahora;

        // Si la boda ya pasó...
        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById("countdown").innerHTML = "<p>¡Hemos llegado! ¡Es el gran día!</p>";
            return;
        }

        // 3. Cálculos de tiempo
        // Tiempos en milisegundos
        const unDia = 1000 * 60 * 60 * 24;
        const unaHora = 1000 * 60 * 60;
        const unMinuto = 1000 * 60;
        
        // Calcular valores
        const dias = Math.floor(distancia / unDia);
        const horas = Math.floor((distancia % unDia) / unaHora);
        const minutos = Math.floor((distancia % unaHora) / unMinuto);
        const segundos = Math.floor((distancia % unMinuto) / 1000);

        // 4. Mostrar los resultados
        // La función .padStart(2, '0') asegura que siempre haya 2 dígitos (ej: 09, 10, 11)
        document.getElementById("dias").innerHTML = String(dias).padStart(2, '0');
        document.getElementById("horas").innerHTML = String(horas).padStart(2, '0');
        document.getElementById("minutos").innerHTML = String(minutos).padStart(2, '0');
        document.getElementById("segundos").innerHTML = String(segundos).padStart(2, '0');

    }, 1000); // Se actualiza cada 1000 milisegundos (1 segundo)
});