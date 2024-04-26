#cree un programa que capture una venta y le calcule el IVA a dicha venta
venta = int(input("digite la cantidad de su venta: "))
iva = 0.19
ivatotal = venta//iva
print(f"el iva de la venta es de: {iva}")
print(f"el su venta menos iva es de: {ivatotal}")