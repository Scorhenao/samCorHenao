#capturar el nombre del usuario y el sexo del mismo y saludarlo deacuerdo al sexo

name = input("ingrese el nombre: ")
sexo = input("ingrese 'f' o 'F' si su sexo es femenino o 'm' o 'M' si es masculino: ")

match sexo:     #evalua la variable
    case 'f':
        print(name + "\thola señorita")
    case 'F':
        print(name + "\thola señora")
    case 'm':
        print(name + "\thola señorito")
    case 'M':
        print(name + "\thola señor")
    case _:     #contingencia por valor no valido
        print("ust ah ingresado un valor no valido") 