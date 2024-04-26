#crea un programa que determine si un numero ingresado por el usuario es un numero de armstrong o no
# Python program to check if the number is an Armstrong number or not

num = int(input("digite un numero: "))

sum = 0
temp = num

while temp > 0:
   digit = temp % 10
   sum += digit ** 3
   temp //= 10

# display the result
if num == sum:
   print(num,"es un numero de armstrong")
else:
   print(num,"no es un numero de armstrong ")
