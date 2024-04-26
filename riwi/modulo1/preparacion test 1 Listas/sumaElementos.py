def suma_elementos(lista):
    suma = 0
    for elemento in lista:
        suma += elemento
    return suma

# Ejemplo de uso
lista = [1, 2, 3, 4, 5]
print("La suma de los elementos es:", suma_elementos(lista))  # Salida: 15
