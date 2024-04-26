#escribe un programa que pida el peso al usuario, altura y calcule el IMC(indice de masa corporal)
p = float(input("digite su peso: "))
a = float(input("digite su altura: "))
imc = p / a ** 2
print(f"su IMC es: {imc} ")