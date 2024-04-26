#en una fabrica desean calcular las ventas semanales de un articulo particular, ese articulo vendio el lunes: 725 unidades, el martes 383, el miercoles:420,el jueves 645 y el viernes 932

#las ventas fueron reportadas al incio de la semana siguiente, el administrador desea saber:

#el promedio de las ventas por dia, ademas que dia se vendio mas y que dia se vendio menos y que dias estuvieron por debajo del promedio de ventas

lista_ventas = [725,383,420,645,932]

sumatoria = sum(lista_ventas)

promedio_per_dia1 = sum(lista_ventas[0:1]) / 1
promedio_per_dia2 = sum(lista_ventas[1:2]) / 1
promedio_per_dia3 = sum(lista_ventas[2:3]) / 1
promedio_per_dia4 = sum(lista_ventas[3:4]) / 1
promedio_per_dia5 = sum(lista_ventas[4:5]) / 1

promedio = print("promedio de ventas: " + str(sumatoria/len(lista_ventas)))

#dia mas ventas
dia_max_vent = max(lista_ventas)
#dia menos ventas
dia_min_vent = min(lista_ventas)
# Imprimir los promedios
print(f"Promedio de ventas lunes: {promedio_per_dia1}")
print(f"Promedio de ventas martes: {promedio_per_dia2}")
print(f"Promedio de ventas miércoles: {promedio_per_dia3}")
print(f"Promedio de ventas jueves: {promedio_per_dia4}")
print(f"Promedio de ventas viernes: {promedio_per_dia5}")

print(f"el dia con mas ventas fue:  {dia_max_vent}")
print(f"el dia con menos ventas fue: {dia_min_vent}")