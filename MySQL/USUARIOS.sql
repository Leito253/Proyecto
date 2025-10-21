CREATE USER 'AdminNL'@'localhost' IDENTIFIED BY 'MiContraseñaSegura123!';
GRANT ALL PRIVILEGES ON NetflixLibrosBD.* TO 'AdminNL'@'localhost';
FLUSH PRIVILEGES;
