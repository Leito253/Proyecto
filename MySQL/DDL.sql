DROP DATABASE  IF EXISTS NetflixLibrosBD;

CREATE DATABASE NetflixLibrosBD;
USE NetflixLibrosBD;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Usuario VARCHAR(50) NOT NULL UNIQUE,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL,
    Rol ENUM('Usuario','Admin') DEFAULT 'Usuario',
    FechaRegistro DATETIME DEFAULT NOW(),
    Activo TINYINT(1) DEFAULT 1
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
    AñoPublicacion INT,
    ISBN VARCHAR(20),
    Idioma VARCHAR(50) DEFAULT 'Español',
    NumeroPaginas INT,
    Disponible TINYINT(1) DEFAULT 1,
    FechaIngreso DATETIME DEFAULT NOW(),
    Visitas INT DEFAULT 0,
    Descargas INT DEFAULT 0,

    FOREIGN KEY (CategoriaId) REFERENCES Categorias(Id)
);

CREATE TABLE Favoritos (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioId INT NOT NULL,
    LibroId INT NOT NULL,
    FechaFavorito DATETIME DEFAULT NOW(),
    FOREIGN KEY (UsuarioId) REFERENCES Usuarios(Id),
    FOREIGN KEY (LibroId) REFERENCES Libros(Id),
    UNIQUE (UsuarioId, LibroId)
);

CREATE TABLE Reseñas (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioId INT NOT NULL,
    LibroId INT NOT NULL,
    Comentario VARCHAR(1000),
    Calificacion INT CHECK (Calificacion BETWEEN 1 AND 5),
    FechaReseña DATETIME DEFAULT NOW(),
    FOREIGN KEY (UsuarioId) REFERENCES Usuarios(Id),
    FOREIGN KEY (LibroId) REFERENCES Libros(Id)
);

