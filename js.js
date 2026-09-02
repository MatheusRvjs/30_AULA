const  soma = 10 +5;
const subtra = 20 - 8;
const mult = 4 * 3;
const divis = 50 / 2;

//console.log(divis);

const ptext = "10";
const seguntext = "5";

const resultado = ptext - seguntext;
//console.log(resultado);

const textopreco = "25.75";
const numpreco = parseFloat(textopreco);

//console.log(typeof numpreco);

const textida= "16";
const numida = parseFloat(textida);

//console.log(typeof numida);

const textval = "42.5";
const valnum = Number(textval);

console.log(typeof valnum)

//exemplo capturando valores de inputs
// <input id="CampoPrimeironumero">
const valorDigitado = document.getElementById("CampoPrimeironumero").value;
const numeroCovertido = parseFloat(valorDigitado);

// Exibir resultado na tela
// <span id="textoResultado">30</span>
document.getElementById("textoResultado").innerText = `resultado ${numeroCovertido}`;
document.getElementById("CampoSegundonumero").innerText = `resultado ${numeroCovertido}`;

function somarNr() {
    document.getElementById("textoResultado").innerText = `resultado ${numeroCovertido}`
}

//Adicionando Funções
// <button onclick="SomarNumeros()">Somar</button>