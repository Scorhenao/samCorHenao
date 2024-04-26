def esta_ordenada_ascendente(lista):
    return all(lista[i] <= lista[i+1] for i in range(len(lista)-1))

def esta_ordenada_descendente(lista):
    return all(lista[i] >= lista[i+1] for i in range(len(lista)-1))

# Ejemplo de uso
lista_ascendente = [1, 2, 3, 4, 5]
lista_descendente = [5, 4, 3, 2, 1]
print("¿La lista_ascendente está ordenada ascendentemente?", esta_ordenada_ascendente(lista_ascendente))  # Salida: True
print("¿La lista_descendente está ordenada descendentemente?", esta_ordenada_descendente(lista_descendente))  # Salida: True
