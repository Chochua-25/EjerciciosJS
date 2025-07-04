// Manipulación de Texto (Strings)   //

// 1. Invertir una palabra
function revertirTexto(texto) {
  let partes = texto.split('');              // Convierte el texto en un arreglo de caracteres
  let partesInvertidas = partes.reverse();   // Invierte el orden del arreglo
  let resultado = partesInvertidas.join(''); // Une los caracteres en un solo string
  return resultado;                          // Devuelve el texto invertido
}
console.log("1:", revertirTexto("hola"));     // Imprime el resultado de invertir "hola"

// 2. Contar cuántas veces aparece una letra
function contarCaracter(cadena, caracter) {
  let letrasSeparadas = cadena.split('');     // Convierte la cadena en un arreglo de letras
  let total = 0;                               // Inicializa el contador
  for (let j = 0; j < letrasSeparadas.length; j++) {  // Recorre el arreglo
    if (letrasSeparadas[j] === caracter) {    // Si la letra coincide con el carácter buscado
      total++;                                // Aumenta el contador
    }
  }
  return total;                               // Devuelve el total de coincidencias
}
console.log("2:", contarCaracter("banana", "a")); // Cuenta cuántas "a" hay en "banana"

// 3. Extraer el dominio de un correo electrónico
function obtenerDominio(email) {
  let secciones = email.split('@');      // Divide el correo en 2 partes usando '@'
  let zona = secciones[1];               // Toma la parte después del '@'
  return zona;                           // Devuelve el dominio
}
console.log("3:", obtenerDominio("usuario@gmail.com")); // Imprime "gmail.com"

// 4. Validar si una palabra es palíndromo
function verificarPalindromo(texto) {
  let letras = texto.split('');               // Convierte el texto en un arreglo
  let alReves = letras.reverse().join('');    // Invierte y vuelve a unir el texto
  return texto === alReves;                   // Compara si es igual al original
}
console.log("4:", verificarPalindromo("oso")); // Verifica si "oso" es un palíndromo

// 5. Reemplazar espacios por guiones
function guionizar(textoOriginal) {
  let cambiado = textoOriginal.replace(/ /g, '-'); // Reemplaza todos los espacios por guiones
  return cambiado;
}
console.log("5:", guionizar("hola mundo js")); // Imprime "hola-mundo-js"


//   Arreglos y Transformaciones  //

// 6. Sumar todos los valores de un array
function totalizarArray(valores) {
  let sumaTotal = 0;                         // Inicializa la suma
  for (let k = 0; k < valores.length; k++) {
    sumaTotal += valores[k];                // Suma cada valor
  }
  return sumaTotal;                         // Devuelve el total
}
console.log("6:", totalizarArray([1, 2, 3])); // Imprime 6

// 7. Eliminar elementos duplicados de un array
function quitarRepetidos(lista) {
  let unico = [];                              // Arreglo para almacenar únicos
  for (let i = 0; i < lista.length; i++) {
    if (!unico.includes(lista[i])) {           // Si no está en el nuevo arreglo
      unico.push(lista[i]);                    // Lo agrega
    }
  }
  return unico;                                // Devuelve la lista sin duplicados
}
console.log("7:", quitarRepetidos([1, 2, 2, 3])); // Imprime [1, 2, 3]

// 8. Mostrar los elementos en orden inverso (sin usar reverse)
function invertirElementos(arreglo) {
  let invertido = [];                           // Arreglo para el resultado
  for (let i = arreglo.length - 1; i >= 0; i--) {
    invertido.push(arreglo[i]);                // Agrega los elementos de atrás hacia adelante
  }
  return invertido;
}
console.log("8:", invertirElementos([1, 2, 3])); // Imprime [3, 2, 1]

// 9. Contar cuántos elementos son mayores a 10
function contarMayoresA10(numeros) {
  let cantidad = 0;                             // Inicializa el contador
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {                      // Verifica si el número es mayor a 10
      cantidad++;
    }
  }
  return cantidad;
}
console.log("9:", contarMayoresA10([5, 15, 25, 3])); // Imprime 2

// 10. Convertir un array de strings a mayúsculas
function aMayusculas(cadenas) {
  let resultado = [];                           // Arreglo para el resultado
  for (let i = 0; i < cadenas.length; i++) {
    resultado.push(cadenas[i].toUpperCase());   // Convierte y agrega en mayúsculas
  }
  return resultado;
}
console.log("10:", aMayusculas(["js", "es", "genial"])); // Imprime ["JS", "ES", "GENIAL"]


//     Funciones y Lógica          //

// 11. Generar un número aleatorio del 1 al 100
function aleatorio100() {
  let r = Math.floor(Math.random() * 100) + 1;  // Genera número aleatorio entre 1 y 100
  return r;
}
console.log("11:", aleatorio100()); // Imprime un número aleatorio

// 12. Verificar si un número es par o impar
function evaluarParidad(numero) {
  return numero % 2 === 0 ? "par" : "impar";    // Devuelve "par" si es divisible por 2, si no "impar"
}
console.log("12:", evaluarParidad(8)); // Imprime "par"

// 13. Multiplicar todos los valores de un array
function productoTotal(listaNumeros) {
  let acumulado = 1;                            // Inicializa multiplicador
  for (let i = 0; i < listaNumeros.length; i++) {
    acumulado *= listaNumeros[i];              // Multiplica cada valor
  }
  return acumulado;
}
console.log("13:", productoTotal([2, 3, 4])); // Imprime 24

// 14. Devolver solo los números de un array
function filtrarNumeros(elementos) {
  let soloNums = [];                            // Arreglo para almacenar números
  for (let i = 0; i < elementos.length; i++) {
    if (typeof elementos[i] === "number") {     // Verifica si es tipo número
      soloNums.push(elementos[i]);              // Agrega al arreglo
    }
  }
  return soloNums;
}
console.log("14:", filtrarNumeros([1, "a", 2, true])); // Imprime [1, 2]

// 15. Redondear un número a 2 decimales
function redondeo2(num) {
  return Math.floor(num * 100) / 100;           // Multiplica por 100, redondea hacia abajo, luego divide
}
console.log("15:", redondeo2(3.14159)); // Imprime 3.14


//      Objetos y Estructuras           //

// 16. Mostrar las claves de un objeto como lista
function listarClaves(datos) {
  let claves = Object.keys(datos);              // Obtiene un arreglo con las claves del objeto
  return claves;
}
console.log("16:", listarClaves({nombre: "Ana", edad: 20})); // Imprime ["nombre", "edad"]

// 17. Combinar dos objetos en uno solo
function unirObjetos(objA, objB) {
  let fusion = Object.assign({}, objA, objB);   // Une ambos objetos en uno nuevo
  return fusion;
}
console.log("17:", unirObjetos({a:1}, {b:2})); // Imprime {a: 1, b: 2}

// 18. Contar cuántas propiedades tiene un objeto
function contarCampos(objeto) {
  return Object.keys(objeto).length;            // Devuelve la cantidad de claves (propiedades)
}
console.log("18:", contarCampos({a:1, b:2, c:3})); // Imprime 3

// 19. Crear un array de nombres a partir de un array de objetos
function sacarNombres(usuarios) {
  let resultado = [];                            // Arreglo para nombres
  for (let i = 0; i < usuarios.length; i++) {
    resultado.push(usuarios[i].nombre);          // Extrae y agrega el nombre
  }
  return resultado;
}
console.log("19:", sacarNombres([{nombre: "Luis"}, {nombre: "Ana"}])); // Imprime ["Luis", "Ana"]

// 20. Buscar el objeto con mayor valor en propiedad "p"
function obtenerMayorObjeto(lista) {
  let mayor = lista[0].p;                        // Inicializa con el valor de la primera propiedad "p"
  let mayorObj = lista[0];                       // Inicializa con el primer objeto
  for (let i = 1; i < lista.length; i++) {
    if (lista[i].p > mayor) {                    // Si encuentra uno mayor
      mayor = lista[i].p;                        // Actualiza el valor mayor
      mayorObj = lista[i];                       // Guarda el objeto correspondiente
    }
  }
  return mayorObj;
}
console.log("20:", obtenerMayorObjeto([{p:5}, {p:9}, {p:3}])); // Imprime el objeto con p más alto

