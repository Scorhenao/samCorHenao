#elabora un programa que solicite al usuario el nombre de un triangulo (escaleno, isoceles o equilatero) y los lados del triangulo, y luego verifique si el nombre coincide con las clasificacion correcta

print("seleccione un triangulo: \n1.escaleno. \n2.isoceles. \n3.equilatero.")
opcion = str(input("seleccione '1', '2' o '3': "))

lado1 = int(input("ahora ingrese un lado del triangulo"))
lado2 = int(input("ahora ingrese otro lado del triangulo"))
lado3 = int(input("ahora ingrese el ultimo lado triangulo"))

if opcion == '1' and  lado1 != lado2 and lado1 != lado3 and lado2 != lado1 and lado2 != lado3 and lado3 != lado1 and lado3 != lado2:
    print("el triangulo si es escaleno")
else:
    if opcion == '2' and lado1 == lado2 and lado3 != lado1 or lado2 == lado3 and lado1 != lado3 or lado3 == lado1 and lado2 != lado3:
        print("el triangulo si es isoceles")
    else:
        if opcion == '3' and lado1 == lado2 ==lado3:
            print("el triangulo si es equilatero")
        else:
            print("no escogio ninguna opcion o los lados no coinciden con el triangulo escogido")