def print_full_name(first, last):
    name =first
    lastName = last
    result = print(f"Hello {name} {lastName}! You just delved into python")
    return result

nombre = input("ingrese su nombre: ")
apellido = input("ingrese su apellido: ")


print_full_name(nombre,apellido)