#en una fabrica de computadoras planea ofrecer a los clientes un descuento que dependera del numero de computadoras que compre. si las computadoras son menos de 5 se les dara un 10% de descuento sobre el total de la compra; si el numero de computadoras es mayor o igual a cinco pero menos de 10 se le otorga un 20%; y si son 10 o mas se les dara un 40% de descuento. El precio de cada computadoras es de USD$1100

c = int(input("digite la cantidad de computadoras que desea comprar: "))

computadoras = c

precio = 1100
total = computadoras * 1100

descuento_de_10 = total * (10/100)
descuento_de_20 = total * (20/100)
descuento_de_40 = total * (40/100)

less_5 = total - descuento_de_10
less_20 = total - descuento_de_20
less_40 = total - descuento_de_40

if computadoras < 5:
    print (f"la cantidad de computadoras que ust desea valen: {total}USD y con el descuento le queda en: {less_5}USD ")
else:
    if computadoras >= 5 and computadoras < 10:
        print (f"la cantidad de computadoras que ust desea valen: {total}USD y con el descuento le queda en: {less_20}USD ")
    else:
        if computadoras > 10:
            print (f"la cantidad de computadoras que ust desea valen: {total}USD y con el descuento le queda en: {less_40}USD ")

