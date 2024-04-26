#Descripción del problema:

#Una tienda de electrónicos necesita un programa para gestionar su inventario. El inventario contiene una lista de productos con su nombre, precio y cantidad disponible en stock.


'''
Requerimientos:

El programa debe permitir al usuario realizar las siguientes acciones mediante un menú:

a) Agregar un nuevo producto al inventario. READY

b) Ver la lista de productos en el inventario. READY 

c) Realizar una venta de un producto.READY

d) Salir del programa.READY


El programa debe utilizar un ciclo for para mostrar la lista de productos en el inventario. READY

El programa debe utilizar un ciclo while para permitir al usuario realizar ventas de productos. El ciclo debe continuar hasta que el usuario decida salir.READY

Para agregar un nuevo producto al inventario, el programa debe solicitar al usuario ingresar el nombre, precio y cantidad disponible del producto. READY

Para realizar una venta de un producto, el programa debe solicitar al usuario el nombre del producto y la cantidad que desea vender. Debe verificar si hay suficiente cantidad en stock para realizar la venta. Si la venta es posible, debe actualizar la cantidad disponible en stock y mostrar el monto total de la venta.READY

El programa debe manejar correctamente las entradas del usuario y validar la información ingresada para evitar errores.

El programa debe mantener un registro de todas las ventas realizadas y mostrar un resumen al usuario al salir del programa. READY


'''
#Funcion para agregar productos
def add_inventory(name,price,stock):
    list_inventory.append(name)
    list_inventory.append(price)
    list_inventory.append(stock)

#Funcion para vender productos
def sell_product(nameP,cant):
    
    #comprobamos si hay suficiente cantidad de producto para la venta
    comprovePositionStock = list_inventory.index(nameP)
    comproveStock = list_inventory[comprovePositionStock +2]
    
    comprovePositionPrice = list_inventory.index(nameP)
    comprovePrice = list_inventory[comprovePositionStock +1]
    venta = comprovePrice*cant
    
    if comproveStock >= cant:
        list_inventory[comprovePositionStock +2] -= cant
        print("*************")
        print(f"el precio total de la venta segun la cantidad de productos es: {venta}")
        print("*************")
    else:
        print("*************")
        print("no hay suficiente stock, para la cantidad que usted desea vender")
        print("*************")
    


list_inventory = [] #inventario de tienda

#opciones del programa para realizar
opccion = int(input("seleccione un numero para cada eleccion \n '1' agregar: \n '2' ver productos: \n '3' realizar venta de producto: \n =>"))

i = 1
#cosas a hacer segun las funciones
while opccion:
    if opccion == 1:
        nameU = input("ingrese el nombre del producto: ")
        priceU = float(input("ingrese el precio del producto: "))
        stockU = int (input("ingrese un entero de la cantidad del producto: "))
        call_add = add_inventory(nameU,priceU,stockU)
        
        print("*************")
        print(f"el producto {nameU} se ha agregado exitosamente al inventario ")
        print("*************")
        
        opccion = int(input("seleccione un numero para cada eleccion \n '1' agregar: \n '2' ver productos: \n '3' realizar venta de producto \n '4' si desea salir: "))
        

    elif opccion == 2:
        print("*************")
        print(f"su inventario es: {list_inventory}")
        print("*************")
        
        opccion = int(input("seleccione un numero para cada eleccion \n '1' agregar: \n '2' ver productos: \n '3' realizar venta de producto \n '4' si desea salir: "))  
        
    elif opccion == 3:
        nameUpdate = input("digite el nombre del producto que desea vender: ")
        cantUpdate = int(input("digite la cantidad del producto que desea vender: "))
        call_sell = sell_product(nameUpdate,cantUpdate)
        
        opccion = int(input("seleccione un numero para cada eleccion \n '1' agregar: \n '2' ver productos: \n '3' realizar venta de producto \n '4' si desea salir: "))  
        
    if opccion == 4:
        break
    
    elif opccion != 1 and opccion != 2 and opccion != 3:
        print("ingreso una eleccion no valida")
i += 1

#mostrar lista de productos de inventario
for i in range(1):
    print("*************")
    print("El inventario actual es: ")
    print(list_inventory)
    print("*************")
    break


