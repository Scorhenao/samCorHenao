CREATE DATABASE BASEBASICADEDATOS;/*Crear base de datos*/
/*Crear tablas dentro de la bd*/
CREATE TABLE ACTOR (
    id_actor int PRIMARY KEY,
    nombre VARCHAR(100)
)
/*Leer datos de una tabla*/
SELECT * FROM ACTOR;

/*Insertar datos en una tabla*/
INSERT INTO ACTOR VALUES
(1, "samuel"),
(2, "henao"),

