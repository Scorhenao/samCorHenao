
#c = capital
#i = tasa de x.intersection(y)
#t = tiempo en años

def algoritmo_simple (c,i,t):
    resultado = c*i*t
    return resultado 

i = 1
suma = 0

empezar = (input("ingrese 'si' para ingresar"))

while empezar == 'si':
    c = float(input("ingrese el capital "))
    t = int (input("ingrese el tiempo en años: "))
    
    valor_final = c*(1+i*t)

    suma += valor_final

    if t>=1 and t<=2:
        print(f"la tasa de interes es del 7%: {algoritmo_simple(c,0.07,t)}")
    
    elif t>2 and t<=5:
        print(f"la tasa de interes es del 10%: {algoritmo_simple(c,0.1,t)}")
    
    elif t>5:
        print(f"la tasa de interes es del 15%: {algoritmo_simple(c,0.15,t)}")

    terminar = input("si quiere terminar diga 'no' y si quieres seguir diga 'si':")
    
    if terminar == 'no':
        print(f"el total de los certificados es: {suma} ")
        break 
    



