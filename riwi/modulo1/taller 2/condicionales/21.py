#cre un programa que solicite al usuario ingresar su peso (en kilogramos) y altura (en metros) y luego calcule sun indice de masa corporal (IMC) indicando si esta por debajo del peso, en peso normal, con sobrepeso u obeso

p = float(input("digite su peso: "))
a = float(input("digite su altura: "))
imc = p / a ** 2

if imc < 18.5:
    print(f"tu imc es: {imc} indica que estas desnutrico o flaquito :C ")
else:
    if imc > 18.5 and imc <= 24.9:
        print(f"tu imc es: {imc} indica que tu peso es normal ") 
    else:
        if imc >= 25.0 and imc<=29.9:
            print(f"tu imc es: {imc} indica que tienes sobrepeso")
        else:
            if imc > 29.9:
                print(f"tu imc es: {imc} indica que estas obeso :c")
            
        