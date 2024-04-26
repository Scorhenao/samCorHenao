#el gobierno se ha dado cuenta que la reforestacion es una muy buena medida para disminuir los problemas ambientales en el pais. Se ha encontrado un area apta para reforestar, el gobierno lo hara de la siguiente forma:

#si la superficie es menor q 1 millon de metros  cuadrados sembrara: 10% pino, 30% cedro o 10% arboles medicinales y el resto en plantas varias 

#si es entre 1 millon y 2 millones de hectareas sembrara: 15% pino, 35% cedro, 20% arboles medicinales y el resto en plantas varias

#si es mas de dos millones asi: 20% pino, 39% cedro, 35% arboles medicinales y el resto en plantas varias

#profesor te equivocaste en hectareas

m = float(input("digite el tamaño de la supercicie en metros cuadrados: "))

superficie = m

#condicion 1
pino1 = superficie * (10/100)
cedro1 = superficie * (30/100) 
medicinales1 = superficie * (10/100)
resto1 = superficie - pino1 - cedro1
resto_1_1= superficie - pino1 - medicinales1

#condicion 2
pino2 = superficie * (15/100)
cedro2 = superficie * (35/100) 
medicinales2 = superficie * (20/100)
resto2 = superficie - pino2 - cedro2 -medicinales2

#condicion 3
pino3 = superficie * (20/100)
cedro3 = superficie * (39/100) 
medicinales3 = superficie * (35/100)
resto3 = superficie - pino3 - cedro3 - medicinales3

 
if superficie < 1000000:
    print(f"como la superficie es menor a 1 millon de metros cuadrados se sembrara: {pino1} de pinos y {cedro1} cedros  o {medicinales1} plantas medicinales, y por ultimo {resto1} en plantas varias con pinos y cedros o {resto_1_1} en plantas varias con pinos y arboles medicinales")
else:
    if superficie > 1000000 and superficie < 2000000:
        print (f"como la superficie {superficie} esta entre 1 o 2 millones de metros cuadrados se sembrara: {pino2} de pinos, {cedro2} de cedros, {medicinales2} de plantas medicinales y por ultimo {resto2} en plantas varias")
    else:
        if superficie > 2000000:
            print (f"como la superficie {superficie} es mayor a 2 millones de metros cuadrados se sembrara: {pino3} de pinos, {cedro3} de cedros, {medicinales3} de plantas medicinales y por ultimo {resto3} en plantas varias")
        