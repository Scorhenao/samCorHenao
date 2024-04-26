#Problema de Multiplicación de Matrices:
'''
Enunciado: Escribe una función en Python que tome dos matrices como entrada y devuelva la matriz resultante de su multiplicación.'''

def multiplicar_matrices(matriz1, matriz2):
    result = [[0] * len(matriz2[0]) for _ in range(len(matriz1))]
    for i in range(len(matriz1)):
        for j in range(len(matriz2[0])):
            for k in range(len(matriz2)):
                result[i][j] += matriz1[i][k] * matriz2[k][j]
    return result

# Ejemplo de uso
matriz1 = [[1, 2, 3], [4, 5, 6]]
matriz2 = [[7, 8], [9, 10], [11, 12]]
print(multiplicar_matrices(matriz1, matriz2))  # Salida: [[58, 64], [139, 154]]
