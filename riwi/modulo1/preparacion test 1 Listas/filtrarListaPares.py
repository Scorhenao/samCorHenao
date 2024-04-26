def filtrar_pares(lista):
    return [num for num in lista if num % 2 == 0]

# Ejemplo de uso
lista = [1, 2, 3, 4, 5]
print("Números pares de la lista:", filtrar_pares(lista))  # Salida: [2, 4]
