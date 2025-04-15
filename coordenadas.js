function obterCoordenada(texto) {
    const regex = /(\d+)(\.\d+)?/g;
    const valores = [];
    let match;

    while ((match = regex.exec(texto)) !== null) {
        valores.push(parseFloat(match[0]));
    }

    const grau = valores[0] || 0;
    const minuto = valores[1] || 0;
    const segundo = valores[2] || 0;
    return grau + (minuto / 60) + (segundo / 3600);
}

function aplicarDirecao(valor, direcao) {
    switch (direcao.toUpperCase()) {
        case 'N':
        case 'L':
            return valor;
        case 'S':
        case 'O':
            return -valor;
        default:
            alert("Opção inválida!");
            return null;
    }
}

// Latitude
const latitudeStr = prompt("Insira a latitude:");
let latitude = obterCoordenada(latitudeStr);

const direcaoLat = prompt("Digite a direção (N, S, O, L):");
latitude = aplicarDirecao(latitude, direcaoLat);
if (latitude === null) return;

// Longitude
const longitudeStr = prompt("Insira a longitude:");
let longitude = obterCoordenada(longitudeStr);

const direcaoLong = prompt("Digite a direção (N, S, O, L):");
longitude = aplicarDirecao(longitude, direcaoLong);
if (longitude === null) return;

alert(`Latitude: ${latitude}\nLongitude: ${longitude}\nLatitude x Longitude: ${latitude},${longitude}`);
