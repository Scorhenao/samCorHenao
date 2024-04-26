#escribe un programa que pida al usuario la hora actual (en formato de 24 horas) y luego determine si es am o pm
hora = int(input("digite una hora en un formato de 24h: "))

if hora>=12 and hora<24:
    print(f"la hora {hora} es {hora}pm")
    
if hora<12 and hora>0:
    print(f"la hora {hora} es {hora}am")
    
if hora>24:
    print(f"la hora {hora} no existe en el formato de 24h")
    
if hora<0:
    print(f"la hora {hora} no existe en el formato de 24h")
    
if hora==0:
    print(f"la hora {hora} no existe en el formato de 24h")