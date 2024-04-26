def rotar_lista(lista, cantidad):
    cantidad %= len(lista)
    return lista[-cantidad:] + lista[:-cantidad]

# Ejemplo de uso
lista = [1, 2, 3, 4, 5]
cantidad = 2
print("Lista rotada a la izquierda:", rotar_lista(lista, cantidad))  # Salida: [3, 4, 5, 1, 2]
