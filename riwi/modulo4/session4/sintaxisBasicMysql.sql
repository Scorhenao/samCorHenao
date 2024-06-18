CREATE DATABASE BASEBASICADEDATOS;/*Crear base de datos*/
/*Crear tablas dentro de la bd*/
CREATE TABLE ACTOR (
    id_actor int PRIMARY KEY,
    nombre VARCHAR(100)
)
/*Decir que BD se va a usar*/
USE Auteco;

/*Leer datos de una tabla*/
SELECT * FROM ACTOR;

/*Insertar datos en una tabla*/
INSERT INTO ACTOR VALUES
(1, "samuel"),
(2, "henao"),


/*crear tablas*/
CREATE TABLE MOTOS (
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

/*CRUD*/
INSERT INTO MOTOS VALUES ("F2");
SELECT FROM MOTOS;
DELETE FROM MOTOS WHERE id =2;
UPDATE `MOTOS`
SET nombre= "NKD"
WHERE id = 1;

/*borrar base de datos*/
DROP DATABASE BASEBASICADEDATOS;

/*borrar tabla*/
DROP TABLE ACTOR
DROP TABLE MOTOS

/*modificar tabla*/
ALTER TABLE ACTOR
ADD COLUMN apellido VARCHAR(100);

/*relacion con clave foranea*/
CREATE TABLE PELICULAS (
    ID_PELICULA INT PRIMARY KEY AUTO_INCREMENT,
    TITULO VARCHAR(100) NOT NULL,
    ID_ACTOR_FK INT,
    FOREIGN KEY (ID_ACTOR_FK) REFERENCES ACTOR(ID_ACTOR)
)
CREATE TABLE CATEGORIAS (
    ID_CATEGORIA INT PRIMARY KEY AUTO_INCREMENT,
    NOMBRE VARCHAR(100) NOT NULL
);

CREATE TABLE ACTOR(
    ID_ACTOR INT PRIMARY KEY AUTO_INCREMENT,
    NOMBRE_ACTOR VARCHAR(100) NOT NULL,
    ID_PELICULA_FK INT,
    FOREIGN KEY (ID_PELICULA_FK) REFERENCES PELICULAS(ID_PELICULA)
);

CREATE TABLE CATEGORIAPELICULAS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_PELICULA_FK INT,
    FOREIGN KEY (ID_PELICULA_FK) REFERENCES PELICULAS(ID_PELICULA),
    ID_CATEGORIA_FK INT,
    FOREIGN KEY (ID_CATEGORIA_FK) REFERENCES CATEGORIAS(ID_CATEGORIA)
)
/*insert varios values*/
INSERT INTO PELICULAS VALUES(NOMBRE,DURACION) VALUES ("BAD BOYS", "2H 50M"),("INTENSAMENTE", "3H 05M");

INSERT INTO CATEGORIAS (nombre) VALUES ("FICCION"),("COMEDIA"),("ANIMADOS");

INSERT INTO ACTOR (NOMBRE_ACTOR) VALUES ("Will Smith"),("Brad Pitt"),("Adam Sandler");

/*insert en tabla intermedia*/
INSERT INTO CATEGORIAPELICULAS (ID_PELICULA_FK,ID_CATEGORIA_FK) VALUES (1,2),(1,1),(1,,3);