class Tarea:
    def __init__(self, id, descripcion):
        self.id = id
        self.descripcion = descripcion

class CRUDTareas:
    def __init__(self):
        self.tareas = []
        self.id_actual = 1

    def agregar_tarea(self, descripcion):
        tarea = Tarea(self.id_actual, descripcion)
        self.tareas.append(tarea)
        self.id_actual += 1
        print("Tarea agregada exitosamente.")

    def mostrar_tareas(self):
        if not self.tareas:
            print("No hay tareas por mostrar.")
        else:
            print("Lista de tareas:")
            for tarea in self.tareas:
                print(f"ID: {tarea.id}, Descripción: {tarea.descripcion}")

    def actualizar_tarea(self, id, nueva_descripcion):
        tarea = next((t for t in self.tareas if t.id == id), None)
        if tarea:
            tarea.descripcion = nueva_descripcion
            print("Tarea actualizada exitosamente.")
        else:
            print("No se encontró la tarea con el ID especificado.")

    def eliminar_tarea(self, id):
        tarea = next((t for t in self.tareas if t.id == id), None)
        if tarea:
            self.tareas.remove(tarea)
            print("Tarea eliminada exitosamente.")
        else:
            print("No se encontró la tarea con el ID especificado.")

def main():
    crud = CRUDTareas()
    while True:
        print("\n1. Ver tareas")
        print("2. Agregar tarea")
        print("3. Actualizar tarea")
        print("4. Eliminar tarea")
        print("5. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            crud.mostrar_tareas()

        elif opcion == '2':
            descripcion = input("Ingrese la descripción de la nueva tarea: ")
            crud.agregar_tarea(descripcion)

        elif opcion == '3':
            id = int(input("Ingrese el ID de la tarea a actualizar: "))
            nueva_descripcion = input("Ingrese la nueva descripción de la tarea: ")
            crud.actualizar_tarea(id, nueva_descripcion)

        elif opcion == '4':
            id = int(input("Ingrese el ID de la tarea a eliminar: "))
            crud.eliminar_tarea(id)

        elif opcion == '5':
            print("¡Adiós!")
            break

        else:
            print("Opción inválida. Por favor, seleccione una opción válida.")

if __name__ == "__main__":
    main()

print(list)