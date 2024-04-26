#Problema de Fibonacci:
'''
Enunciado: Escribe una función en Python que genere la secuencia de Fibonacci hasta un número dado n.'''

def fibonacci(n):
    fib = [0, 1]
    while fib[-1] + fib[-2] <= n:
        fib.append(fib[-1] + fib[-2])
    return fib

# Ejemplo de uso
n = 50
print(fibonacci(n))  # Salida: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
