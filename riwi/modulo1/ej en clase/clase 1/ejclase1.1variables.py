#calcule el subtotal de una venta y calcule el total (subt+iva)
sub_total = float(input("ingrese el sub total de ventas: "))
iva = 0.19
total = (sub_total * iva) + sub_total
print("el total de es de:",total)  