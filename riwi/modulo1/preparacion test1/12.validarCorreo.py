#Problema de Validación de Direcciones de Correo Electrónico:
'''
Enunciado: Escribe una función en Python que tome una dirección de correo electrónico como entrada y devuelva True si la dirección es válida y False en caso contrario.'''

import re

def validar_correo(correo):
    patron = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
    return bool(patron.match(correo))

# Ejemplo de uso
correo = "usuario@example.com"
print(validar_correo(correo))  # Salida: True
    