

c = float(input("ingrese el capital "))
i = float(input("ingrese la tasa de interes: "))
t = int (input("ingrese el tiempo en años: "))

#c = capital
#i = tasa de x.intersection(y)
#t = tiempo en años

interes_simple = c*i*t
valor_final = c*(1+i*t)

print(f"el interes simple es: {interes_simple}")
print(f"el valor final es: {valor_final}")