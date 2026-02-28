// Variables
let palabraSecreta = "";
let letrasAdivinadas = [];
let intentos = 6;

// Inicio del juego
function configurarJuego() {
    console.log("Bienvenidos al Juego del Ahorcado");
    palabraSecreta = prompt("hola, ingresa la palabra: ").toLowerCase();
    
    // Limpieza de pantalla
    console.clear(); 

    // Lista de progreso con los guiones
    for (let i = 0; i < palabraSecreta.length; i++) {
        letrasAdivinadas.push("_");
    }

    console.log(`La palabra tiene ${palabraSecreta.length} letras.`);
    console.log(`Tienes ${intentos} oportunidades.`);
}

// Los intentos
function procesarIntento(letra) {
    let acierto = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            letrasAdivinadas[i] = letra;
            acierto = true;
        }
    }

    if (acierto) {
        let faltantes = 0;

        for (let l of letrasAdivinadas) {
            if (l === "_") faltantes++;
        }
        console.log(`¡Palabra correcta! Te faltan ${faltantes} letras.`);
    } else {
        intentos = intentos - 1;
        console.log(`Letra incorrecta. Pierdes una oportunidad.`);
        console.log(`Te quedan: ${intentos} intentos.`);
    }
}

// El bucle del juego
function jugar() {
    configurarJuego();

    while (intentos > 0 && letrasAdivinadas.includes("_")) {
        console.log("Estado actual: " + letrasAdivinadas.join(" "));
        let letraUsuario = prompt("¿Qué letra desea poner?: ").toLowerCase();

        // Validación
        if (letraUsuario.length === 1) {
            procesarIntento(letraUsuario);
        } else {
            console.log("Por favor, ingresa solo una letra a la vez.");
        }
    }

    // Final para victoria o derrota
    if (!letrasAdivinadas.includes("_")) {
        console.log(`¡GANASTE! La palabra era: ${palabraSecreta}`);
    } else {
        console.log(`PERDISTE. Te has quedado sin vidas. La palabra era: ${palabraSecreta}`);
    }
}

// Ejecución
jugar();