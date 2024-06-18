CREATE DATABASE BASEBASICADEDATOS;/*Crear base de datos*/
/*Crear tablas dentro de la bd*/
USE Auteco;
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

/*CRUD*/
CREATE TABLE MOTOS (
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO MOTOS VALUES ("F2");
SELECT FROM MOTOS;
DELETE FROM MOTOS WHERE id =2;
UPDATE `MOTOS`
SET nombre= "NKD"
WHERE id = 1;