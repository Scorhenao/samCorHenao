def eliminar_duplicados(lista):
    return list(set(lista))

# Ejemplo de uso
lista = [1, 2, 2, 3, 4, 4, 5]
print("Lista sin duplicados:", eliminar_duplicados(lista))  # Salida: [1, 2, 3, 4, 5]
