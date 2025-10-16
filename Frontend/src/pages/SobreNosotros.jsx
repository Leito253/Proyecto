import React from "react";
import "../Styles/SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-page">
      <div className="sobre-nosotros-content">
        <h1>Sobre Nosotros</h1>
        <p>
          Bienvenidos a <strong>Netflix Libros</strong>, un proyecto desarrollado por estudiantes de la
          <strong> ET12 General San Martín</strong>. Este sitio nace con un objetivo claro: unir la tecnología con el mundo de los libros, para que leer sea más accesible, entretenido y moderno.
        </p>

        <h2>📚 Nuestra Historia</h2>
        <p>
          La idea de crear esta plataforma surgió en el aula, como parte de un proyecto educativo orientado a
          la programación y el desarrollo de software. Observamos que muchas personas —especialmente
          estudiantes— no tenían acceso rápido a libros digitales de calidad. Entonces nos propusimos cambiar eso.
        </p>
        <p>
          Lo que comenzó como un simple prototipo se transformó en una herramienta funcional, pensada
          para que cualquier persona pueda descubrir, leer y disfrutar libros desde cualquier lugar y dispositivo.
          Este proyecto representa nuestra pasión por aprender, innovar y compartir conocimiento.
        </p>

        <h2>🚀 Nuestra Misión</h2>
        <p>
          Nuestro propósito es fomentar el hábito de la lectura, acercando historias, conocimiento y cultura a todos.
          Queremos que esta plataforma sea un espacio libre, inclusivo y gratuito, donde estudiantes, docentes y lectores
          puedan encontrar libros de distintos géneros y autores sin barreras.
        </p>
        <p>
          Sabemos que leer abre puertas: mejora la imaginación, fortalece la memoria, desarrolla el pensamiento crítico
          y nos permite conocer mundos nuevos. Por eso, este proyecto no es solo tecnología… es también una forma
          de crear oportunidades.
        </p>

        <h2>🏫 Sobre la ET12 General San Martín</h2>
        <p>
          La <strong>ET12 General San Martín</strong> es una institución técnica pública reconocida por su enfoque en la formación integral de jóvenes en ciencia y tecnología.
          Nuestra escuela promueve el desarrollo de proyectos reales, donde los estudiantes combinan creatividad,
          trabajo en equipo y conocimientos técnicos para resolver problemas concretos.
        </p>
        <p>
          Este proyecto forma parte de esa visión: aprender haciendo. Cada línea de código, cada diseño y cada idea fue construida
          por alumnos que creen en el poder de transformar el conocimiento en soluciones reales.
        </p>

        <h2>👥 Nuestro Equipo</h2>
        <ul className="sobre-nosotros-lista">
          <li>Integrantes: Eric Aguirre, Leonel Fernández, Celeste Zurita y Enzo Luna</li>
          <li>👨‍💻 Jóvenes desarrolladores apasionados por la tecnología</li>
          <li>📚 Lectores curiosos y creativos</li>
          <li>🤝 Compañeros que trabajan en equipo para crecer juntos</li>
          <li>💡 Soñadores que creen que un pequeño proyecto puede generar grandes cambios</li>
        </ul>

        <h2>🌟 Nuestra Visión a Futuro</h2>
        <p>
          Queremos que <strong>Netflix Libros</strong> crezca, evolucione y llegue a más personas.
          En el futuro planeamos integrar funciones como creación de perfiles personalizados, marcadores de lectura, reseñas de usuarios,
          recomendaciones inteligentes y más material educativo.
        </p>
        <p>
          Nuestro sueño es que esta plataforma se convierta en un espacio de aprendizaje colaborativo,
          donde cada lector pueda aportar algo nuevo y formar parte de una comunidad que ama los libros.
        </p>

        <p className="sobre-nosotros-footer">
          © 2025 - Proyecto escolar desarrollado en ET12 General San Martín | Todos los derechos reservados 📖
        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;
