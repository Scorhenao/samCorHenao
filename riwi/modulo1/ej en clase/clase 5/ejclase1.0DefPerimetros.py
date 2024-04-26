#realizzar un programa que capture la opcion de calcular el perimetro de

#las siguientes figuras: cuadrado, rectangulo, trapecio, circulo y triangulo

#el programa debe permitir al usuario escoger la figura la cual desea 

#calcular el perimetro

#implemente las funciones necesarias


def per_de_cuadrado (a):
    resultadoC = a + a + a + a
    return resultadoC

def per_de_rectangulo (a,b):
    resultadoS = (a * 2) + (b * 2)
    return resultadoS

def per_de_trapecio (l1,l2,l3,l4):
    resultadoT = l1 + l2 + l3 + l4
    return resultadoT

def per_de_circulo(r):
    py = 3.14159 
    resultadoD = 2 *py *r 
    return resultadoD

def per_de_triangulo(a,b,c):
    resultadoD = a + b + c
    return resultadoD


print("seleccione la operacion: \n1.cuadrado. \n2.rectngulo. \n3.trapecio. \n4.circulo. \n5.triangulo.")
opcion = str(input("seleccione '1', '2', '3', '4', '5': "))


if opcion =='1':
    lado_cuadrado = float (input("ingrese un lado del cuadrado: "))
    perimetro_cuadrado = per_de_cuadrado (lado_cuadrado) #parametros
    print(f"resultado del perimetro de el cuadrado es: {perimetro_cuadrado}")
    
    
elif opcion == '2':
    base_rect = float (input("ingrese un la base del rectangulo: "))
    altura_rect = float (input("ingrese un la altura del rectangulo: "))
    perimetro_rectangulo= per_de_rectangulo (base_rect,altura_rect) #parametros
    print(f"resultado del perimetro de el cuadrado es: {perimetro_rectangulo}")
    
    
elif opcion == '3':
    print("VA A INGRESAR LAS LONGITUDES DE CADA LADO DEL TRAPECIO:")
    lado1_trap = float (input("ingrese la longitud del lado A del trapecio: "))
    lado2_trap = float (input("ngrese la longitud del lado B del trapecio: "))
    lado3_trap = float (input("ngrese la longitud del lado C del trapecio: "))
    lado4_trap = float (input("ngrese la longitud del lado D del trapecio: "))
    perimetro_trapecio = per_de_trapecio (lado1_trap,lado2_trap,lado3_trap, lado4_trap) #parametros
    print(f"resultado del perimetro de el trapecio es: {perimetro_trapecio}")
    
    
elif opcion == '4':
    r_circulo = float (input("ingrese el radio del circulo: "))
    perimetro_circulo = per_de_circulo (r_circulo) #parametros
    print(f"resultado del perimetro de el circulo es: {perimetro_circulo}")


elif opcion == '5':
    l1_triangulo = float (input("ingrese el primer lado del triangulo: "))
    l2_triangulo = float (input("ingrese el segundo lado del triangulo: "))
    l3_triangulo = float (input("ingrese el tercer lado del triangulo: "))

    perimetro_triangulo = per_de_triangulo (l1_triangulo,l2_triangulo,l3_triangulo) #parametros
    print(f"resultado del perimetro de el triangulo es: {perimetro_triangulo}")
