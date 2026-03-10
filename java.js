function FormatearNombre(){
    let nombre = document.getElementById("nombre");
    let MostrarResultado = document.getElementById("MostrarResultado");

    let resultado

    for(let i = 0; i < nombre.length; i++)
    {
        if(i == 0)
        {
            nombre[i] = nombre[i].toUpperCase;
        }
        else
        {
            nombre[i] = nombre[i].toLowerCase;
        }
    }
    resultado = nombre;
    MostrarResultado.innerText = resultado;
}