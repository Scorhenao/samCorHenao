// Lista de compras del supermercado 

// 1. Definir variables y arreglos 
// • Crea dos variables: nombreLista para almacenar el nombre de la lista y listaCompras para 
// guardar los productos. 
// • Inicializa nombreLista con un valor como "Lista de Compras Semanal". 
// • Inicializa listaCompras como un arreglo vacío READY


// 2. Agregar productos a la lista 
// • Utiliza un ciclo while para preguntar al usuario qué productos quiere agregar a la lista. 
// • Dentro del ciclo, utiliza prompt() para obtener el nombre de cada producto. 
// • Agrega cada producto al arreglo listaCompras utilizando el método push(). 
// • Permite al usuario ingresar "fin" o "salir" para terminar de agregar productos. READY 

// 3. Mostrar la lista de compras 
// • Utiliza un ciclo for para recorrer el arreglo listaCompras. 
// • Dentro del ciclo, muestra cada producto en la consola utilizando console.log(). READY

// 4. Buscar un producto 
// • Pregunta al usuario qué producto busca en la lista. 
// • Utiliza un ciclo for para buscar el producto en el arreglo listaCompras. 
// • Si el producto se encuentra, muestra un mensaje indicando la posición en la lista. 
// • Si el producto no se encuentra, muestra un mensaje indicando que no está en la lista. READY

// 5. Eliminar un producto 
// • Pregunta al usuario qué producto quiere eliminar de la lista. 
// • Utiliza un ciclo for para buscar el producto en el arreglo listaCompras. 
// • Si el producto se encuentra, elimina el elemento del arreglo utilizando el método splice(). 
// • Muestra un mensaje indicando que el producto ha sido eliminado. 
// • Si el producto no se encuentra, muestra un mensaje indicando que no está en la lista. READY

// 6. Calcular el total de la compra 
// • Supón que cada producto tiene un precio asociado. 
// • Crea un objeto literal precios para almacenar los precios de algunos productos. 
// • Por ejemplo: precios = { manzana: 1.500, leche: 3.300, pan: 2.900 }. 
// • Recorre el arreglo listaCompras y calcula el total de la compra sumando los precios de 
// cada producto. 
// • Muestra un mensaje indicando el total de la compra. 
// • Suma el IVA al total de la compra y muestra un mensaje indicando el total de la compra 
// con el IVA. 

// 7. Validar la entrada de datos: 
// • Utiliza condicionales if para validar la entrada del usuario en diferentes partes del 
// programa. 
// • Por ejemplo, verifica que el usuario no ingrese valores vacíos o caracteres no válidos. 
// • Muestra mensajes de error al usuario cuando la entrada no sea válida. 

// 8. Convertir unidades 
// • Supón que algunos productos se miden en unidades no métricas (por ejemplo, libras). 
// • Crea una función que convierta unidades de libras a kilogramos. 
// • Utiliza la función para convertir las cantidades de algunos productos (si es necesario). 

// 9. Ordenar la lista 
// • Ordena el arreglo listaCompras alfabéticamente utilizando el método sort(). 
// • Muestra la lista ordenada en la consola. 


    functionAdd = (arrayToAdd,dataToAdd) =>{
        arrayToAdd.push(dataToAdd);
    }

    functionShow = (array) =>{
        let counter = 0;
        //mostrar productos ingresados
        for (let i = 0; i < array.length; i++) {
            const products = array[i];
            alert(`has ingresado: ${products} exitosamente!`)
            //ordenar la lista de productos
            let count = counter += 1;
            console.log(`producto: ${count} ${products} `)
        }

    }

    functionSearch = (array,dataToSearch) => {
        //buscar productos
        if (array.includes(dataToSearch)) {
            alert(`El producto ${dataToSearch} SI se encuentra en la lista!!!`);
            let positionProduct = array.indexOf(dataToSearch);
            alert(`Y su posicion en la lista es: ${positionProduct}`);
            console.log(`El producto ${dataToSearch} se encuentra en la lista`);
        }
        else {
            alert(`El producto ${dataToSearch} no se encuentra en la lista`);
            console.log(`El producto ${dataToSearch} no se encuentra en la lista`);
        }
        
    }

    functionDelete = (array,dataTodelete) =>{
        if (array.includes(dataTodelete)) {
            let positionProduct = array.indexOf(dataTodelete);
            array.splice(positionProduct);
            alert(`El producto ${dataTodelete} se ha eliminado de la lista!!!`);
            console.log(`El producto ${dataTodelete} se ha eliminado de la lista`);
        }
        else{
            alert(`El producto ${dataTodelete} no se encuentra en la lista`);
            console.log(`El producto ${dataTodelete} no se encuentra en la lista`);
        }
    }
    
    functionTotalShopping = (array,price) =>{
        let total = 0;
        for (let producto of array) {
            total += price[producto];
        }
        console.log(`El total de la compra es: ${total}`);
        let iva = total * 0.19;
        console.log(`El total de la compra con IVA es: $${total + iva}`);

        alert(`El total de su compra es: ${total}`)
        alert(`El total de su compra con IVA es: ${total + iva}`)
    }

    functionValidateData = (dataTovalidate) =>{
        if (dataTovalidate != undefined && dataTovalidate != null && dataTovalidate != Number()) {
            return true;
        }
        else{
            return false;
        }
    }

    functionUnits = () =>{

    }

    functionOrderList = () =>{

    }

    function convertUnids(unidades) {
        return unidades * 0.453592;
    }

let nameList =["Lista de Compras Semanal"];
let listShopping =[];
let  priceProducts = {
        papitas: 3.000,
        mondongo: 10.000,
        manzana: 1.500,
        leche: 3.300,
        pan: 2.900 
    }

//-----------------------------------------------------------------------------------------------------------
//agregar y ver productos WHILE
let start = String(prompt("Digite 'Si' si quiere iniciar el programa o 'No' si no quiere iniciar el programa")).toLowerCase();
//volver al bucle por posibles errores
//digito algo distinto a si o no
    if (start != "si" && start != "no" ) {
        alert("digitaste un valor no valido");
    }
    else if(start === "no"){
        //no quizo iniciar el programa
        alert("Gracias por usar el programa");
        let back = String(prompt("si quiere volver a usarlo digite 'volver' sino digite 'F'")).toLowerCase();
    
        //quiere volver a usar el programa
        if (back === "volver") {
            start = "si";
        }
        else if(back === "f"){
            //salir del programa
            alert("Gracias por usar el programa!!!");
        }
        else{
            alert("digito un valor no valido");
        }
    }

    while (start === "si") {
        //agregar productos
        let nameProduct = String(prompt("Digite el nombre del producto que desea agregar a la lista")).toLowerCase();

        if (functionValidateData(nameProduct) === true) {
            //funcion agregar productos
            functionAdd(listShopping,nameProduct);
            //funcion ver productos
            functionShow(listShopping);
        }
        else{
            alert("digito un valor no valido para un producto");
        }
        
        //salir del bucle
        let exit = String(prompt("Si quiere TERMINAR de AGREGAR productos digite 'fin' o 'salir' sino digite cualquier cosa")).toLowerCase();

        if (exit === "fin" || exit === "salir") {
            break;
        }
    }

//-----------------------------------------------------------------------------------------------------------
    //buscar productos WHILE
    let search = String(prompt("Si quiere BUSCAR un producto digite 'si' sino digite 'no'")).toLowerCase();
    //volver al bucle por posibles errores
    //digito algo distinto a si o no
    if (search != "si" && search != "no" ) {
        alert("digitaste un valor no valido");
    }
    else if(search === "no"){
        //no quizo iniciar el programa
        alert("Gracias por usar el programa si se equivoco y quiere volver a BUSCAR digite 'volver'");
        let back = String(prompt("si quiere volver a BUSCAR digite 'volver' sino digite 'No' ")).toLowerCase();
    
        //quiere volver a usar el programa
        if (back === "volver") {
            search = "si";
        }
        else if(back === "no"){
            let goToDelete = true;
        }
        else{
            alert("digito un valor no valido");
        }
    }

    while (search === "si") {
        
        let searchProduct = String(prompt("Digite el nombre del producto que desea BUSCAR")).toLowerCase();
        
        if (functionValidateData(searchProduct) === true) {
            //funcion buscar productos
            functionSearch(listShopping,searchProduct);
        }
        else{
            alert("digito un valor no valido para un producto");
        }

        //salir del bucle
        let exit = String(prompt("Si quiere TERMINAR de BUSCAR productos digite 'fin' o 'salir' sino digite cualquier cosa")).toLowerCase();

        if (exit === "fin" || exit === "salir") {
            break;
        }
    }
    
//-----------------------------------------------------------------------------------------------------------
    //eliminar productos WHILE
    let deleteProduct = String(prompt("Si quiere ELIMINAR un producto digite 'si' sino digite 'no'")).toLowerCase();
    //volver al bucle por posibles errores
    //digito algo distinto a si o no
    if (deleteProduct != "si" && deleteProduct != "no" ) {
        alert("digitaste un valor no valido");
    }
    else if(deleteProduct === "no"){
        //no quizo iniciar el programa
        alert("Gracias por usar el programa si se equivoco y quiere volver a ELIMINAR digite 'volver'");
        let back = String(prompt("si quiere volver a ELIMINAR digite 'volver' sino digite 'No'")).toLowerCase();
    
        //quiere volver a usar el programa
        if (back === "volver") {
            deleteProduct = "si";
        }
        else if(back === "no"){
            let goToTotalPrice = true;
        }
        else{
            alert("digito un valor no valido");
        }
    }

    while(deleteProduct === "si" || goToDelete === true && functionValidateData(deleteProduct) === true ){
            //eliminar productos
            let deleteProductName = String(prompt("Digite el nombre del producto que desea ELIMINAR")).toLowerCase();

            if (functionValidateData(deleteProductName) === true) {
                functionDelete(listShopping,deleteProductName);
            }
            else{
                alert("digito un valor no valido para un producto");
            }
            
            //salir del bucle
            let exit = String(prompt("Si quiere TERMINAR de ELIMINAR productos digite 'fin' o 'salir' sino digite cualquier cosa")).toLowerCase();

            if (exit === "fin" || exit === "salir") {
                break;
            }
        }

//-----------------------------------------------------------------------------------------------------------
    //ordenar lista
    listShopping.sort();
    console.log('Lista de compras ordenada:');
    console.log(listShopping);
    //precio productos WHILE
    if (listShopping.length === 0) {
        alert("Nose como pero no pusiste ningun producto RATON!")
        console.log(listShopping.length)
    }
    else{
        functionTotalShopping(listShopping,priceProducts)
    }
    
    if(goToTotalPrice === true){
        
        alert(`El total de su compra es: ${functionTotalShopping(listShopping,priceProducts)}`)

    }
    