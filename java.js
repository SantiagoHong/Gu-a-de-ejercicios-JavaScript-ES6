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
    let password = document.getElementById("password").value
    if(password.length >= 8 && /\d/.test(password))
    {
        console.log("Contraseña válida");
    }
    else
    {
        console.log("Contraseña no válida");
    }
}

function sumarArray(){
    let numeros = [1, 2, 3, 4, 5];
    let suma = 0;

    for(let i = 0; i < numeros.length; i++)
    {
        suma += numeros[i];
    }
}

function mayorNumero(){
    let numeros = [10, 5, 8, 20, 3];
    let mayor = numeros[0];

    for(let i = 1; i < numeros.length; i++)
    {
        if(numeros[i] > mayor)
        {
            mayor = numeros[i];
        }
    }

    console.log(mayor);
}

function obtenerPares(){
    let numeros = [1, 2, 3, 4, 5, 6];
    let pares = [];

    for(let i = 0; i < numeros.length; i++)
    {
        if(numeros[i] % 2 === 0)
        {
            pares.push(numeros[i]);
        }
    }
    console.log(pares);
}


const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

}

function descripcionUsuario(){
    if ( usuario.activo ) {

        console.log(`${usuario.nombre} tiene ${usuario.edad} años y está activo.`);
    }
}

function activarUsuario(){
    
    if (usuario.activo) {
        console.log("El usuario ya está activo");
    } else {
        usuario.activo = true;
        console.log("Usuario activado");
    }
}

const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200},

{ nombre:"Impresora", precio:150}
]

function calcularTotal(){
    let total = 0;

    for(let i = 0; i < productos.length; i++)
    {
        total += productos[i].precio;
    }
    console.log(total);
}

const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

function separarNombresMap(){
    const nombres = usuarios.map(usuario => usuario.nombre);

    console.log(nombres);
}

function obtenerMayores18(){
    const mayores18 = usuarios.filter(usuario => usuario.edad >= 18);
    console.log(mayores18);
}

function calcularEdadTotal(){
    const edadTotal = usuarios.reduce((total, usuario) => total + usuario.edad, 0);
    console.log(edadTotal);
}

const producto = {

nombre:"Notebook",

precio:1000

}

function extraerNombrePrecio(){
    const {nombre, precio} = producto;
    console.log(`Nombre: ${nombre}, Precio: ${precio}`);
}

function copiarProductoNuevaPropiedad(){
    const nuevoProducto = {...producto, stock: 10 };
    console.log(nuevoProducto);
}

function buscarProducto(){
    let nombre = document.getElementById("nombre").value;
    
    let productoEncontrado = productos.find(p => p.nombre === nombre);

    if (productoEncontrado) {
        console.log(`Producto encontrado: ${productoEncontrado.nombre}, Precio: ${productoEncontrado.precio}`);
    } else {
        console.log("Producto no encontrado");
    }
}

function buscarTodosPrecioMayor50(){
    let productoEncontrado = [...productos.filter(p => p.precio > 50)];

    if (productoEncontrado.length > 0) {
        console.log("Productos encontrados:");
        productoEncontrado.forEach(p => console.log(`Nombre: ${p.nombre}, Precio: ${p.precio}`));
    } else {
        console.log("No se encontraron productos con precio mayor a 50");
    }
}

function promedioPrecio(){
    let total = productos.reduce((suma, p) => suma + p.precio, 0);
    let promedio = total / productos.length;
    console.log(`El precio promedio es: ${promedio}`);
}

const usuarioss = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

function obtenerUsuarios(){
    console.log("Usuarios:");
    usuarioss.forEach(usuario => console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`));
}

function obtenerUsuarioPorId(){
    let id = parseInt(document.getElementById("id").value);

    let usuarioEncontrado = usuarioss.find(u => u.id === id);
    if (usuarioEncontrado) {
        console.log(`Usuario encontrado: ID: ${usuarioEncontrado.id}, Nombre: ${usuarioEncontrado.nombre}, Edad: ${usuarioEncontrado.edad}`);
    } else {
        console.log("Usuario no encontrado");
    }
}

function obtenerMayores(){
    let mayores = usuarioss.filter(u => u.edad >= 18);
    console.log("Usuarios mayores de edad:");
    mayores.forEach(u => console.log(`ID: ${u.id}, Nombre: ${u.nombre}, Edad: ${u.edad}`));
}

function crearUsuario(){
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let nuevoId = usuarioss.length > 0 ? Math.max(...usuarioss.map(u => u.id)) + 1 : 1;

    let nuevoUsuario = {id: nuevoId, nombre: nombre, edad: edad};
    usuarioss.push(nuevoUsuario);
    console.log("Usuario creado:", nuevoUsuario);
}
