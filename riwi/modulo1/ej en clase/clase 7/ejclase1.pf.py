#elabore un algoritm que capture una frase ingresada por el usuario y:

# => calcule cuantas vocales tiene una frase
# => muestre cual vocal aparece mas veces y cual menos
# => muestre el porcentaje de aparicion de la letra "a"

frase = input("ingrese una frase: ")
frase.lower()


for letra in frase:
    print(letra)
    
a = frase.count("a")
e = frase.count("e")
i = frase.count("i")
o = frase.count("o")
u = frase.count("u")

print(f"la cantidad de a son: {a}")
print(f"la de e son:{e}")
print(f"la de i son: {i}")
print(f"la de o son: {o}")
print(f"la de u son:{u}")

suma_vocales = a + e + i + o + u 
porcentaje_a = (a/suma_vocales) * 100 

if a > e >i >o > u:
    print(f"la vocal a {a} es la q mas aparece")
elif  e > a  > i  > o  > u:
    print(f"la vocal e {e} es la q mas aparece")
elif i > e and i > a and i > o and i > u:
    print(f"la vocal i {i} es la q mas aparece")
elif o > e and o > i and o > a and o > u:
    print(f"la vocal o {o} es la q mas aparece")
elif u > e and u > i and u > o and u > a:
    print(f"la vocal u {u} es la q mas aparece")
    

if a < e and a < i and a < o and a < u:
    print(f"la vocal a {a} es la q menos aparece")
elif  e < a and e < i and e < o and e < u:
    print(f"la vocal e {e} es la q menos aparece")
elif i < e and i < a and i < o and i < u:
    print(f"la vocal i {i} es la q menos aparece")
elif o < e and o < i and o < a and o < u:
    print(f"la vocal o {o} es la q menos aparece")
elif u < e and u < i and u < o and u < a:
    print(f"la vocal u {u} es la q menos aparece")

print(f"porcentaje de veces que aparece a es: {porcentaje_a}%")