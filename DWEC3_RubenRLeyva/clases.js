/* 
 * Desarrollo web en estorno cliente.
 * Unidad 3 - Estructuras definidas por el usuario en JavaScript.
 * Tarea 3: Bienvenidos a Mejor No Compres... a los demás.
 * @author : Rubén Ángel Rodriguez Leyva
 */

/**
 * Clase encargada de las categorias de los diferentes productos.
 * 
 * @returns {Categorias} La categoría creada.
 */
function Categorias(){
	
    // Las diferentes variables/propiedades del producto.
    this.ArrayListado = []; // Array en el que se encuentran las categorías en formato de cadena.
        
    // Método que añade una cadena que define una categoría al array.
    this.crearCategoria = function(nombreCategoriategoria){
        
        // Comprobamos la longitud del array
        var longitud = this.ArrayListado.length;
        
        // Añadimos la nueva categoría al array.
        this.ArrayListado[longitud] = nombreCategoriategoria;
    };
        
    // Método que elimina una categoría del array. 
    this.eliminarCategoria = function(nombreCategoriategoria){
        
        // Recorremos el array mediante el bucle for
        for(var i = 0; i < this.ArrayListado.length; i++){
            
            // Si el nombre de la categoría a borrar es el mismo que
            // el encontrado lo borramos mediante splice.
            if(this.ArrayListado[i] == nombreCategoriategoria){
                this.ArrayListado.splice(i, 1);
            }
        }
    };
	 
    // Método toString que muestra todas las categorías, separadas por líneas.
    this.toString = function(){
        
        // Creamos la variable que contiene el mensaje a mostrar.
        var mensaje = "";
        
        // Mediante bucle for mostramos las diferentes categorías que 
        // hay en el array
        for(var i = 0; i < this.ArrayListado.length; i++){
            mensaje += "*"+this.ArrayListado[i]+"<br>";
        }
        
        // Retornamos las categorías.
        return mensaje;
    };		
}
	

/**
 * Clase encargada del Item/Producto.
 * 
 * @param {type} nombre El nombre del producto.
 * @param {type} precio El precio de producto.
 * @param {type} descripcion La descripción del producto.
 * @param {type} categoria La categoría del producto.
 * @param {type} nuevo Si el nuevo o usado.
 * @returns {Item} El objeto del producto creado.
 */
function Item(nombre, precio, descripcion, categoria, nuevo){
	
    // Las diferentes variables/propiedades del producto
    this.nombre = nombre; // Para el nombre del producto
    this.precio = precio; // Para el precio del producto.
    this.descripcion = descripcion; // Para la descripción del producto.
    this.categoria = categoria; // Para la categoría del producto.
    this.nuevo = nuevo; // Para saber si es nuevo o no.
	
    // Método getter encargado de retornar el valor del nombre.
    this.getNombre = function(){
	return this.nombre;
    };
	
    // Método getter encargado de retornar el valor del precio.
    this.getPrecio = function(){
	return this.precio;
    };
	
    // Método getter encargado de retornar el valor de la descripción.
    this.getDescripcion = function(){
	return this.descripcion;
    };
	
    // Método getter encargado de retornar el valor de la categoría.
    this.getCategoria = function(){
	return this.categoria;
    };
    
    // Método getter encargado de retornar si es nuevo o no.
    this.getNuevo = function(){
        return this.nuevo;
    };
	
    // Método setter encargado de poner el valor del nombre.
    this.setNombre = function(nombre){
	this.nombre = nombre;
    };

    // Método setter encargado de poner el valor del precio.
    this.setPrecio = function(precio){
	this.precio = precio;
    };

    // Método setter encargado de poner el valor de la descripción.
    this.setDescripcion = function(descripcion){
        this.descripcion = descripcion;
    };

    // Método setter encargado de poner el valor de la categoría.
    this.setCategoria = function(categoria){
        this.categoria = categoria;
    };

    // Método setter encargado de poner el valor booleano true o false.
    this.setNuevo = function(nuevo){
	this.nuevo = nuevo;
    };

    // Método toString encargado de mostrar los diferentes datos
    this.toString = function(){ 

        // Comprobamos si es true el valor de nuevo
        var mensajeNuevo = "";
        if(this.nuevo){        
            // en dicho caso retornamos el string nuevo.
            mensajeNuevo = "nuevo";
            
        // en caso contrario
        }else{
            
            // retornamos el string que indica que es usado.
            mensajeNuevo =  "usado";
        }

        // Retornamos el valor del método toString
	return("-*El producto es, "+this.nombre+" para un "+this.descripcion+" vale "+this.precio+
		"€, su categoría es: "+this.categoria+" y su estado es "+mensajeNuevo+".<br>");
    };	
}


/**
 * Clase encargada del comprador/cliente
 *
 * @param {type} nombre El nombre del comprador.
 * @param {type} apellido1 El primer apellido del comprador.
 * @param {type} apellido2 El segundo apellido del comprador.
 * @param {type} direccion La dirección del comprador.
 * @param {type} nif El nif del comprador.
 * @returns {Comprador} EL objeto comprador.
 */
function Comprador(nombre, apellido1, apellido2, direccion, nif){
		
    // Las diferentes variables/propiedades del comprador.
    this.nombre = nombre; // Para el nombre del comprador.
    this.apellido1 = apellido1; // Para el primer apaellido del comprador.
    this.apellido2 = apellido2; // Para el segundo apellido del comprador.
    this.direccion = direccion; // Para la dirección del comprador.
    this.NIF = nif; // Para el NIF/DNI del comprador    
        
    // Método getter encargado de retornar el valor del nombre.
    this.getNombre = function(){
	return this.nombre;
    };
	
    // Método getter encargado de retornar el valor del primer apellido.    
    this.getApellido1= function(){
        return this.apellido1;
    };
	
    // Método getter encargado de retornar el valor del segundo apellido.
    this.getApellido2 = function(){
        return this.apellido2;
    };
	
    // Método getter encargado de retornar el valor de la dirección.
    this.getDireccion = function(){
	return this.direccion;
    };
	
    // Método getter encargado de retornar el valor del NIF.
    this.getNif = function(){
        return this.NIF;  
    };
	
    // Método setter encargado de poner el valor del nombre.
    this.setNombre = function(nombre){
        this.nombre = nombre;
    };
	
    // Método setter encargado de poner el valor del primer apellido.
    this.setApellido1 = function(apellido1){
	this.apellido1 = apellido1;
    };
	
    // Método setter encargado de poner el valor del segundo apellido.
    this.setApellido2 = function(apellido2){
	this.apellido2 = apellido2;
    };
    
    // Método setter encargado de poner el valor de la dirección.
    this.setDireccion = function(direccion){
	this.direccion = direccion;
    };
	
    // Método setter encargado de poner el valor del NIF.
    this.setNif = function(nif){
        
        // Comprobamos si el nif del usuario no está vacío o que contiene nueve caracteres.
        if(nif.length < 9 || nif == null || nif.length > 9){
            // Alertamos de ello y cambiamos el valor a incorrecto.
            this.NIF = "<strong>no se encuentra</strong>";
            
        // en caso de que sea correcto    
        }else{
            
            // Comprobamos mediante la clase comprobarNIF que es correcto.
            if(comprobarNIF(nif)){
                this.NIF = nif;
                
            // en caso contrario cambiamos el valor de nif.    
            }else{
                
                this.NIF = "<strong>es incorrecto</strong>";
            }
        }
    };

    // Método encargado de reescribir el método toString
    this.toString = function(){
        
        // Retornamos el valor del método toString
	return("*El nombre del cliente es "+this.nombre+", de primer apellido "+this.apellido1+
		", con segundo apellido "+this.apellido2+", con dirección en "+this.direccion+", y con número de NIF "
		+this.NIF+".<br>");
    };		
}


/**
 * Clase encargada del carro
 * 
 * @param {type} Cliente El cliente.
 * @returns {Carro} Los diferentes valores de los que dispone el carro.
 */
function Carro(Cliente){
	
    // Las propiedades/variables del Carro
    this.ArrayProductos = []; // El array con los diferentes productos
    this.cliente = Cliente; // La variable/propiedad del cliente
	
    // Método getter encargado de retornar el valor del carro
    this.getPrecioFinal = function(){
        
        // Variable encargada del precio final.
        var precioFinal = 0;
        
        // Variable contadora del del bucle for además de ser utilizada
        // para saber la cantidad de € que se deben sumar según el 
        // número de productos que hay en el carro
        var i = 0;
        
        // Bucle encargado de recorrer la lista de productos.
        for(i; i < this.ArrayProductos.length; i++){
            
            // Se suma al precio final el precio del producto.
            precioFinal += this.ArrayProductos[i].getPrecio();
        }
        
        // Retornamos el precio final del producto
        return precioFinal+i;
    };
	
    // Método getter encargado de retornar el valor del cliente
    this.getCliente = function(){
        return this.cliente;
    };
	
    // Método setter encargado de poner el valor al cliente.
    this.setCliente = function(Cliente){
        this.cliente = Cliente;
    };
	
    // Método encargado de añadir un item al array
    this.anadeItem = function(objeto_producto){
        
        // Comprobamos la longitud del array
	var longitud = this.ArrayProductos.length;
        
        // Añadimos el producto al alrray
	this.ArrayProductos[longitud] = objeto_producto;
    };
	
    // Método encargado de eleminar un item del array 
    this.eliminaItem = function(nombre){
        
        // Bucle encargado de recorrer el array
	for(var i = 0; i < this.ArrayProductos.length; i++){
            
            // Comprobamos que existe un item con dicho nombre
            if(this.ArrayProductos[i] == nombre){
                
                // en tal caso se borra dicho item.
                this.ArrayProductos.splice(i, 1);
            }
        }
    };
	
    // Método encargado de reescribir el método toString
    this.toString = function(){
        
        // Variable encargada de almacenar el mensaje.
        var mensaje = "";
        
        // Mostramos los datos personales con las distintas propiedades
        mensaje += "--- Datos Personales: <br>";
        mensaje += "-* Nombre: "+this.cliente.getNombre()+".<br>";
        mensaje += "-* Apellidos: "+this.cliente.getApellido1()+" "+this.cliente.getApellido2()+".<br>";
        mensaje += "-* Dirección de envío: "+this.cliente.getDireccion()+".<br><br>";
        mensaje += "--- Detalle de productos: <br>";
        
        // Si el array de productos se encuentra vacío lo comunicamos.
        if(this.ArrayProductos.length == 0){
            mensaje += "La cesta se encuentra vacía";
         
        // en caso contrario lo mostramos
        }else{
            
            // Recorremos mediante bucle for el array
            for(var i = 0; i < this.ArrayProductos.length; i++){
                
                // añadimos a la varable mensaje dicho item
                mensaje += "-"+this.ArrayProductos[i];
            } 
        }
        
        // Añadimos a la variable mensaje el precio final.
	mensaje += "<br>----- Precio total del carro: "+this.getPrecioFinal()+"€ -----<br>";
        
        // Retornamos el mensaje.
        return mensaje;
    };		
}


/**
 * Función utilizada para comprobar la categoría de los Item.
 * @param {type} categorias El array de categorías.
 * @param {type} categoria El nombre de la categoría.
 * @returns {String} Se retorna el mensaje
 */
function comprobarCategoria(categorias, categoria){
    
    // Variable que se devuelve.
    var mensaje = "Sin Categoría";
    
    // Recorremos el array con las categorías.
    for(var i = 0; i < categorias.length; i++){
        
        // si encontramos la categoría 
        if(categorias[i] == categoria){
            
            // cambiamos el mensaje de retorno con el nombre de la categoría.
            mensaje = categoria;
        }
    }
    
    // Retornamos el String con la categoría.
    return mensaje;
}