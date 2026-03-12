function FormatearNombre(){
    let nombre = document.getElementById("nombre").value;

    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    
    console.log(nombre);
}

function contarLetras(){
    let texto = document.getElementById("texto").value;
    let contador = 0;
    for(let i = 0; i < texto.length; i++)
    {
        if(texto[i] != " ")
        {
            contador++;
        }
    }

    console.log(contador);
}
function maximo(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    let mayor;

    if(num1 > num2){mayor = num1}

    else{ mayor = num2}

    if(mayor < num3){mayor = num3}

    console.log(mayor)
}

function ValidarPassword(){
    let password = document.getElementById("password").Value
    if(password.length >= 8)
    {
        if (/\d/.test(texto)) {
    console.log("La cadena contiene números");
}
    }
}