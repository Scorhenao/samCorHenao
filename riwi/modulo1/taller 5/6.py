#realize una calculadora donde el usuario escoja la funcion que quiere realizar con funciones

#calculadora de funciones

def sumar (a,b):
  resultadoS = a+b
  return resultadoS

def restar(a,b):
  resultadoR = a-b
  return resultadoR

def multiplicar(a,b):
  resultadoM = a*b
  return resultadoM

def divisionar(a,b):
  resultadoD = a/b
  return resultadoD

def radicar(a,b):
  resultadoRaiz = a** (1/b) 
  return resultadoRaiz

def potenciar(a,b):
  resultadoP = a**b
  return resultadoP


print("seleccione la operacion: \n1.suma. \n2.resta. \n3.multiplicacion. \n4.divicion. \n5.radicacion. \n6.potenciacion.")
opcion = str(input("seleccione '1', '2', '3', '4', '5', '6': "))
    
num1 = float(input("ingrese el primer numero:"))
num2 = float (input("ingrese el segundo numero:"))

if num1 or num2 != 0:
    divicion = divisionar(num1,num2)
else:
  print("la divicion con 0 no es posible")

suma = sumar (num1,num2) #parametros
resta = restar (num1,num2) #parametros
multiplicacion = multiplicar (num1,num2) #parametros
divicion = divisionar (num1,num2) #parametros
raiz = radicar (num1,num2) #parametros
potenciacion = potenciar (num1,num2) #parametros
    
  
if opcion == '1':
    print(f"resultado de la suma es: {suma}")
elif opcion == '2':
    print(f"resultado de la resta es: {resta}")
elif opcion == '3':
    print(f"resultado de la multiplicacion es: {multiplicacion}")
elif opcion == '4':
    print(f"resultado de la division es: {divicion}")
elif opcion == '5':
    print(f"resultado de la raiz es: {raiz}")
elif opcion == '6':
    print(f"resultado de la potenciacion es: {potenciacion}")
    
