#Problema de Suma de Listas:
'''
Enunciado: Escribe una función en Python que tome dos listas como entrada y devuelva una nueva lista que contenga la suma de los elementos correspondientes de las dos listas.'''

def suma_listas(lista1, lista2):
    return [x + y for x, y in zip(lista1, lista2)]

# Ejemplo de uso
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
print(suma_listas(lista1, lista2))  # Salida: [5, 7, 9]
