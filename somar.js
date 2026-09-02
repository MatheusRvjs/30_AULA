function calcularSoma(){
    const campoA = document.getElementById("ValorA").value;
    const campoB = document.getElementById("ValorB").value;

    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);

    const total = numeroA + numeroB;


    document.getElementById("resultado").innerText = `Total: ${total}`;

    console.log(`Cálculo efetuado: ${numeroA} + ${numeroB} = ${total}`);
}