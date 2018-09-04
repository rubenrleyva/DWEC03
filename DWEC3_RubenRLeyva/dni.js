/* 
 * Desarrollo web en estorno cliente.
 * Unidad 3 - Estructuras definidas por el usuario en JavaScript.
 * Tarea 3: Bienvenidos a Mejor No Compres... a los demás.
 * @author : Rubén Ángel Rodriguez Leyva
 */

/**
 * Se encarga de comprobar el NIF
 * 
 * @param {type} dni El NIF del cliente que le pasamos.
 * @returns {Boolean} El resultado, true si es correcto, false en caso contrario.
 */
function comprobarNIF(dni) {

    // Variable de control booleana
    var correcto = true;
    
    // Comprobamos que no es está vacío que es menor o mayor de 9 caracteres.
    if(dni == null || dni.length < 9 || dni.length > 9){
        correcto = false;
    }else{
        // Sacamos los números
        var numero = dni.substr(0,dni.length-1);
    
        // Sacamos la letra
        var letraDni = dni.substr(dni.length-1,1);
    
        // Lista de letras permitidas en el DNI
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
        // Averiguamos la letra que necesitamos
        var letra = letras.charAt(numero % 23);
    
        // Comparamos la letra que tiene el DNI introducido
        // con la letra que debería de tener
        if(letra != letraDni){
            correcto = false;
        }
    }
    
    // Retornamos el resultado 
    return correcto;
}


