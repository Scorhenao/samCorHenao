def lista_vacia(lista):
    return len(lista) == 0

# Ejemplo de uso
lista1 = []
lista2 = [1, 2, 3]
print("¿lista1 está vacía?", lista_vacia(lista1))  # Salida: True
print("¿lista2 está vacía?", lista_vacia(lista2))  # Salida: False
