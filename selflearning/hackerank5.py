n = int(input("digite un numero: "))
lista = map(int,input("digite un numero: ").split())
t = tuple(lista)
result = hash(t) #genera numero aleatorios con los numero designados y separados u ordenados
print(result)