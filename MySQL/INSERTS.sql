USE NetflixLibrosBD;

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
('Terror'),
('Educativo'),
('Misterio'),
('Suspenso'),
('Biografía'),
('Historia'),
('Filosofía'),
('Poesía'),
('Cómic'),
('Arte'),
('Autoayuda');

-- INSERTS LIBROS --
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Harry Potter y la Cámara Secreta', 'J.K. Rowling', '/Archivos/Portadas/HarryPotteryLaCamaraSecreta.jpg', '/Archivos/PDFS/HarryPotteryLaCamaraSecreta.pdf', 'Harry regresa a Hogwarts y descubre la cámara secreta.', 4),
('Harry Potter y el Prisionero de Azkaban', 'J.K. Rowling', '/Archivos/Portadas/HarryPotterYelPrisioneroDeAzkaban.jpg', '/Archivos/PDFS/HarryPotteryElPrisioneroDeAzkaban.pdf', 'Sirius Black escapa de Azkaban y Harry conoce nuevos secretos.', 4),
('Harry Potter y el Cáliz de Fuego', 'J.K. Rowling', '/Archivos/Portadas/HarryPotteryElCalizDeFuego.jpg', '/Archivos/PDFS/HarryPotteryElCalizDeFuego.pdf', 'Harry participa en el Torneo de los Tres Magos.', 4),
('Harry Potter y la Orden del Fénix', 'J.K. Rowling', '/Archivos/Portadas/harry-potter-y-la-orden-del-fenix.jpg', '/Archivos/PDFS/HarryPotteryLaOrdenDelFenix.pdf', 'Harry y sus amigos forman la Orden del Fénix contra Voldemort.', 4),
('Harry Potter y el Misterio del Príncipe', 'J.K. Rowling', '/Archivos/Portadas/HarryPotteryElMisterioDelPrincipe.jpg', '/Archivos/PDFS/HarryPotteryElMisterioDelPrincipe.pdf', 'Se revelan secretos del pasado de Voldemort y Harry enfrenta grandes desafíos.', 4),
('Harry Potter y las Reliquias de la Muerte', 'J.K. Rowling', '/Archivos/Portadas/HarryPotteryLasReliquiasDeLaMuerte.jpg', '/Archivos/PDFS/HarryPotteryLasReliquiasDeLaMuerte.pdf', 'Harry y sus amigos buscan las Reliquias de la Muerte y enfrentan la batalla final.', 4);

-- Educativo
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Breve Historia del Tiempo', 'Stephen Hawking', '/Archivos/Portadas/breve_historia_tiempo.jpg', '/Archivos/PDFS/breve_historia_tiempo.pdf', 'Explica los conceptos fundamentales de la física y el universo.', 10),
('El Cerebro Autista', 'Temple Grandin', '/Archivos/Portadas/cerebro_autista.jpg', '/Archivos/PDFS/cerebro_autista.pdf', 'Cómo funciona la mente de las personas con autismo.', 10),
('La Matemática de la Vida', 'Ian Stewart', '/Archivos/Portadas/matematica_vida.jpg', '/Archivos/PDFS/matematica_vida.pdf', 'Aplicaciones de las matemáticas en la vida cotidiana.', 10),
('Biología para Jóvenes', 'Neil A. Campbell', '/Archivos/Portadas/biologia_jovenes.jpg', '/Archivos/PDFS/biologia_jovenes.pdf', 'Conceptos básicos de biología explicados de forma sencilla.', 10);

-- Misterio
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Asesinato en el Orient Express', 'Agatha Christie', '/Archivos/Portadas/orient_express.jpg', '/Archivos/PDFS/orient_express.pdf', 'El detective Hércules Poirot debe resolver un asesinato en un tren en pleno invierno.', 16),
('El Nombre de la Rosa', 'Umberto Eco', '/Archivos/Portadas/nombre_rosa.jpg', '/Archivos/PDFS/nombre_rosa.pdf', 'Un monje franciscano investiga misteriosas muertes en una abadía medieval.', 16),
('La Chica del Tren', 'Paula Hawkins', '/Archivos/Portadas/chica_tren.jpg', '/Archivos/PDFS/chica_tren.pdf', 'Una mujer cree haber presenciado un crimen desde la ventana del tren.', 16);

-- Terror
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('It', 'Stephen King', '/Archivos/Portadas/it.jpg', '/Archivos/PDFS/it.pdf', 'Un grupo de amigos enfrenta a una entidad maligna que adopta la forma de un payaso.', 20),
('El Resplandor', 'Stephen King', '/Archivos/Portadas/resplandor.jpg', '/Archivos/PDFS/resplandor.pdf', 'Un hombre se vuelve loco mientras cuida un hotel aislado con su familia.', 20),
('Drácula', 'Bram Stoker', '/Archivos/Portadas/dracula.jpg', '/Archivos/PDFS/dracula.pdf', 'El conde Drácula viaja desde Transilvania para propagar su maldición.', 20),
('Frankenstein', 'Mary Shelley', '/Archivos/Portadas/frankenstein.jpg', '/Archivos/PDFS/frankenstein.pdf', 'Un científico crea un ser que se vuelve en su contra.', 20);

-- Fantasía
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('El Señor de los Anillos: La Comunidad del Anillo', 'J.R.R. Tolkien', '/Archivos/Portadas/senor_anillos1.jpg', '/Archivos/PDFS/senor_anillos1.pdf', 'Frodo inicia su viaje para destruir el Anillo Único.', 3),
('Eragon', 'Christopher Paolini', '/Archivos/Portadas/eragon.jpg', '/Archivos/PDFS/eragon.pdf', 'Un joven granjero descubre un huevo de dragón que cambiará su destino.', 3),
('La Historia Interminable', 'Michael Ende', '/Archivos/Portadas/historia_interminable.jpg', '/Archivos/PDFS/   .pdf', 'Un niño se adentra en un libro mágico que narra un mundo en peligro.', 3),
('Lavinia', 'Ursula K. Le Guin', '/Archivos/Portadas/Lavinia.jpg', '/Archivos/PDFS/Lavinia.pdf', 'Lavinia desafía su destino y cuenta su propia historia en la antigua Italia', 4);
-- Aventura
INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Los Tres Mosqueteros', 'Alexandre Dumas', '/Archivos/Portadas/tres_mosqueteros.jpg', '/Archivos/PDFS/tres_mosqueteros.pdf', 'D’Artagnan se une a los mosqueteros del rey en una vida de aventuras.', 5),
('Moby Dick', 'Herman Melville', '/Archivos/Portadas/moby_dick.jpg', '/Archivos/PDFS/moby_dick.pdf', 'El capitán Ahab persigue obsesivamente a la gran ballena blanca.', 5),
('Viaje al Centro de la Tierra', 'Julio Verne', '/Archivos/Portadas/viaje_centro_tierra.jpg', '/Archivos/PDFS/viaje_centro_tierra.pdf', 'Una expedición desciende a las profundidades del planeta en busca de un mundo perdido.', 5);

SELECT * FROM Libros;

INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Alas De Hierro', 'Rebecca Yarros', '/Archivos/Portadas/AlasDeHierro.jpg', '/Archivos/PDFS/AlasDeHierro.pdf', 'Una historia de amor y aventura en un mundo lleno de magia y peligro.', 4),
('Alas De Sangre', 'Rebecca Yarros', '/Archivos/Portadas/AlasDeSangre1.jpg', '/Archivos/PDFS/AlasDeSangre.pdf', 'La continuación de la épica saga de amor y valentía en un reino en guerra.', 4),
('Cuentos Inconclusos','J. R. R. Tolkien','/Archivos/Portadas/CuentosInconclusos.jpg','/Archivos/PDFS/CuentosInclusos.pdf','Relatos y fragmentos que amplían el mundo de El Silmarillion, El Hobbit y El Señor de los Anillos, mostrando historias, personajes y leyendas que quedaron incompletas',4),
('Dragones de la Eternidad', 'Margaret Weis Y Tracy Hickman','/Archivos/Portadas/Dragones.jpg','/Archivos/PDFS/DragonesDeLaEternidad.pdf','Historia de amor, magia y poder donde los dragones y la eternidad se entrelazan en una gran aventura.',4),
('El Caballero Muerte','Cassandra Clare','/Archivos/Portadas/ElCaballeroMuerte.jpg','/Archivos/PDFS/ElCaballeroMuerte.pdf','En un mundo donde la oscuridad amenaza con consumirlo todo, un caballero solitario se alza para enfrentar su destino y proteger a los inocentes.',4);


INSERT INTO Libros (Titulo, Autor, UrlPortada, UrlPdf, Descripcion, CategoriaId) VALUES
('Kybalión',' Walker Atkinson','/Archivos/Portadas/Kybalion.jpg','/Archivos/PDFS/Kybalion.pdf','libro de filosofía hermética que resume las enseñanzas de Hermes Trismegisto y expone los siete principios universales.',4);

UPDATE Libros
SET UrlPortada = '/Archivos/Portadas/HPcamaraSecreta.jpg'
WHERE id = 11

SELECT Titulo, COUNT(*)
FROM Libros
GROUP BY Titulo
HAVING COUNT(*) > 1;

DELETE FROM Libros
WHERE id NOT IN (
    SELECT * FROM (
        SELECT MIN(id)
        FROM Libros
        GROUP BY Titulo
    ) AS subquery
);

SELECT Titulo, COUNT(*)
FROM Libros
GROUP BY Titulo
HAVING COUNT(*) > 1;