#Problema de Generación de Contraseñas Aleatorias:
'''
Enunciado: Escribe una función en Python que genere una contraseña aleatoria de longitud n, que consista en letras mayúsculas, minúsculas y números.'''

import random
import string

def generar_contrasena(n):
    caracteres = string.ascii_letters + string.digits
    contrasena = ''.join(random.choice(caracteres) for _ in range(n))
    return contrasena

# Ejemplo de uso
longitud = 8
print(generar_contrasena(longitud))  # Salida: '7XfwJ3Yp'
