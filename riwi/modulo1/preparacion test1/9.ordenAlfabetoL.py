#Problema de Ordenamiento de Palabras:
'''
Enunciado: Escribe una función en Python que tome una lista de palabras como entrada y devuelva la lista ordenada alfabéticamente.'''

def ordenar_palabras(lista_palabras):
    return sorted(lista_palabras)

# Ejemplo de uso
palabras = ["perro", "gato", "elefante", "tigre", "leon"]
print(ordenar_palabras(palabras))  # Salida: ['elefante', 'gato', 'leon', 'perro', 'tigre']
