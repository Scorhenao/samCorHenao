def contar_frecuencia(lista, elemento):
    return lista.count(elemento)

# Ejemplo de uso
lista = [1, 2, 2, 3, 3, 3, 4, 5]
elemento = 3
print(f"Frecuencia de {elemento}:", contar_frecuencia(lista, elemento))  # Salida: 3
