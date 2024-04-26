# Capture una cantidad de numeros y muestre aquellos que sean primos
# Definición de una función llamada "es_primo" que verifica si un número es primo o no.
def es_primo(numero):
    # Verifica si el número es menor o igual a 1, en cuyo caso no es primo.
    if numero <= 1:
        return False
    # Itera sobre todos los números desde 2 hasta la raíz cuadrada del número dado.
    # La raíz cuadrada del número es suficiente para verificar si es primo.
    for i in range(2, int(numero**0.5) + 1):
        # Si el número es divisible por algún número en este rango, no es primo.
        if numero % i == 0:
            return False
    # Si no se encontró ningún divisor entre 2 y la raíz cuadrada del número, entonces es primo.
    return True

# Definición de una función llamada "mostrar_primos" que solicita números al usuario y muestra los primos.
def mostrar_primos(cantidad):
    # Lista para almacenar los números primos encontrados.
    numeros_primos = []
    # Ciclo para solicitar "cantidad" números al usuario.
    for _ in range(cantidad):
        # Solicita al usuario ingresar un número y lo convierte a entero.
        numero = int(input("Ingrese un número: "))
        # Llama a la función "es_primo" para verificar si el número es primo.
        if es_primo(numero):
            # Si el número es primo, lo agrega a la lista de números primos.
            numeros_primos.append(numero)
    # Muestra los números primos encontrados.
    print("Los números primos son:", numeros_primos)

# Solicita al usuario ingresar la cantidad de números que desea verificar.
cantidad_numeros = int(input("Ingrese la cantidad de números que desea verificar: "))
# Llama a la función "mostrar_primos" con la cantidad ingresada por el usuario.
mostrar_primos(cantidad_numeros)