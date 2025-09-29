DROP DATABASE  IF EXISTS NetflixLibrosBD;

CREATE DATABASE NetflixLibrosBD;
USE NetflixLibrosBD;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    NombreUsuario VARCHAR(100) NOT NULL UNIQUE,
    Email VARCHAR(200) NOT NULL UNIQUE,
    PasswordHash VARCHAR(200) NOT NULL,
    FechaRegistro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Categorias
CREATE TABLE Categorias (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla Libros
CREATE TABLE Libros (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(200) NOT NULL,
    Autor VARCHAR(200) NOT NULL,
    UrlPortada VARCHAR(500),
    UrlPdf VARCHAR(500),
    Descripcion VARCHAR(1000),
    CategoriaId INT,
    FOREIGN KEY (CategoriaId) REFERENCES Categorias(Id)
);