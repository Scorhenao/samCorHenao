#elabore un algoritmo que lea tres numeros y que imprima el ayor, el medio y el menor
a = int(input("digite un numero"))
b = int(input("digite otro numero"))
c = int(input("digite denuevo un numero"))

if a>b and a>c and b>c:
    print (f"el numero mayor es {a} el numero del medio es {b} y el numero menor es {c} ")

if a>b and a>c and c>b:
    print (f"el numero mayor es {a} el numero del medio es {c} y el numero menor es {b} ")

if b>a and b>c and a>c:
    print (f"el numero mayor es {b} el numero del medio es {a} y el numero menor es {c} ")
    
if b>a and b>c and c>a:
    print (f"el numero mayor es {b} el numero del medio es {c} y el numero menor es {a} ")
    
if c>a and c>b and a<b:
    print (f"el numero mayor es {c} el numero del medio es {b} y el numero menor es {a} ")
    
if c>a and c>b and b<a:
    print (f"el numero mayor es {c} el numero del medio es {a} y el numero menor es {b} ")