-- INSERTS CATEGORIAS --
INSERT INTO Categorias (Nombre) VALUES
('Infantil'),     
('Aventura'),      
('Literatura Clásica'),
('Fantasía'),          
('Épica'),             
('Ciencia Ficción'),
('Policial'),
('Novela'),
('Cuentos'),
('Terror');
USE NetflixLibrosBD;
-- INSERTS LIBROS --
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Harry Potter y la Cámara Secreta', 'J.K. Rowling', 'https://picsum.photos/200/300?random=11', 'https://example.com/pdf_hp2.pdf', 'Harry regresa a Hogwarts y descubre la cámara secreta.', 4),
('Harry Potter y el Prisionero de Azkaban', 'J.K. Rowling', 'https://picsum.photos/200/300?random=12', 'https://example.com/pdf_hp3.pdf', 'Sirius Black escapa de Azkaban y Harry conoce nuevos secretos.', 4),
('Harry Potter y el Cáliz de Fuego', 'J.K. Rowling', 'https://picsum.photos/200/300?random=13', 'https://example.com/pdf_hp4.pdf', 'Harry participa en el Torneo de los Tres Magos.', 4),
('Harry Potter y la Orden del Fénix', 'J.K. Rowling', 'https://picsum.photos/200/300?random=14', 'https://example.com/pdf_hp5.pdf', 'Harry y sus amigos forman la Orden del Fénix contra Voldemort.', 4),
('Harry Potter y el Misterio del Príncipe', 'J.K. Rowling', 'https://picsum.photos/200/300?random=15', 'https://example.com/pdf_hp6.pdf', 'Se revelan secretos del pasado de Voldemort y Harry enfrenta grandes desafíos.', 4),
('Harry Potter y las Reliquias de la Muerte', 'J.K. Rowling', 'https://picsum.photos/200/300?random=16', 'https://example.com/pdf_hp7.pdf', 'Harry y sus amigos buscan las Reliquias de la Muerte y enfrentan la batalla final.', 4);

SELECT * FROM `Libros`

UPDATE `Libros`
SET `UrlPortada` = '/Archivos/Portadas/HPcamaraSecreta.jpg'
WHERE `Id` = 11