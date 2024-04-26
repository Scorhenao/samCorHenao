#Problema de Contar Vocales:
'''
Enunciado: Escribe una función en Python que tome una cadena como entrada y devuelva un diccionario con la cantidad de ocurrencias de cada vocal (a, e, i, o, u) en la cadena.'''

def contar_vocales(cadena):
    vocales = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}
    for char in cadena.lower():
        if char in vocales:
            vocales[char] += 1
    return vocales

# Ejemplo de uso
cadena = "Python es genial"
print(contar_vocales(cadena))  # Salida: {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 0}
