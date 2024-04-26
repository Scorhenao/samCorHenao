#Problema de Palíndromo:
'''
Enunciado: Escribe una función en Python que tome una cadena como entrada y devuelva True si la cadena es un palíndromo (es decir, se lee igual de adelante hacia atrás que de atrás hacia adelante), y False en caso contrario.'''

def es_palindromo(cadena):
    # Convertir la cadena a minúsculas y eliminar los espacios en blanco
    cadena = cadena.lower().replace(" ", "")
    # Comparar la cadena original con su inversa
    return cadena == cadena[::-1]

# Ejemplo de uso
cadena = "Anita lava la tina"
print(es_palindromo(cadena))  # Salida: True
