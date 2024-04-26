#la empresa de productos de belleza  "El acne" otorga descuento a sus clientes segun la siguiete clasificacion:

#si es mayorista, tiene una antiguedad de mas de dos años y el valor de la compra es mayor que 2000000 de pesos le da un descuento del 25%;

#si es mayorista, tiene una antiguedad menor o igual que dos años y el valor de la compra esta entre 1500000 y 2000000 millones de pesos le da un descuento de 20%

#si es minoritario, tiene una anntiguedad superior a 5 años y el valor de la compra es superior a 2000000 de pesos le da un descuento del 18%

#si es ocasional y el valor de la compra es superior a 2000000 de pesos se le da e un descuento del 10%.

#en cualquier otro caso, la compañia no da ningun descuento.

#Elabore un algoritmo que lea: clase de cliente, antiguedad y valor de compra, y determine el valor a pagar por la compra

print("seleccione el tipo de ciente: \n1.mayorista. \n2.minorista. \n3.ocasional. ")
clase_ciente = str(input("seleccione '1', '2', '3': "))

antiguedad = int(input("digite cuantos años lleva el cliente: "))
valor_compra = int(input("digite el valor de la compra: "))

#condicion 1
des_25_compra = valor_compra * (25/100)
total1 = valor_compra - des_25_compra 

#condicion 2
des_20_compra = valor_compra * (20/100)
total2 = valor_compra - des_20_compra

#condicion 3
des_18_compra = valor_compra * (18/100)
total3 = valor_compra - des_18_compra

#condicion 4
des_10_compra = valor_compra * (10/100)
total4 = valor_compra - des_10_compra


if clase_ciente == '1' and antiguedad > 2 and valor_compra > 2000000:
    print (f"el valor de la compra es: {valor_compra} de pesos y por ser mayorista, con una antiguedad mayor a 2 años  y comprar > de 2000000 se le da un descuento del 25% lo cual seria un: {des_25_compra} de pesos menos dando en total a pagar de: {total1} de pesos")
else:
    if clase_ciente == '1' and antiguedad <= 2 and valor_compra > 1500000 and valor_compra < 2000000:
        print (f"el valor de la compra es: {valor_compra} de pesos y por ser mayorista, con una antiguedad de menor o igual a 2 años  y comprar entre 1,5 o 2 millones de pesos se le da un descuento del 20% lo cual seria un: {des_20_compra} de pesos menos dando en total a pagar de: {total2} de pesos")
    else:
        if clase_ciente == '2' and antiguedad > 5 and valor_compra > 2000000:
            print (f"el valor de la compra es: {valor_compra} de pesos y por ser minorista, con una antiguedad mayor a 5 años y comprar mas de 2 millones de pesos se le da un descuento del 18% lo cual seria un: {des_18_compra} de pesos menos dando en total a pagar de: {total3} de pesos")
        else:
            if clase_ciente == '3' and valor_compra > 2000000:
                print (f"el valor de la compra es: {valor_compra} de pesos y por ser ocasional y comprar mas de 2 millones de pesos se le da un descuento del 10% lo cual seria un: {des_10_compra} de pesos menos dando en total a pagar de: {total4} de pesos")
            else:
                if clase_ciente == '1' or clase_ciente == '2' or clase_ciente == '3':
                    print (f"el valor de la compra es: {valor_compra} sin descuento porque no cumples las condiciones de descuento de la empresa")