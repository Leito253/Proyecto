import "./PaginaPrincipal.css";

export default function PaginaPrincipal() {
  return (
    <main>
      <div className="grid">
        <a
          href="/Cuentos/20MilLenguasDeViajeSubmarino/20MilLenguasdeViajeSubmarino.html"
          className="book"
          title="Ver detalles de 20 Mil Leguas de Viaje Submarino"
        >
          <img
            src="/Cuentos/20MilLenguasDeViajeSubmarino/COVER-Ventimila-Leghe-Sotto-i-Mari-SPA-CC2022-FRONTAL.jpg"
            alt="20 Mil Leguas de Viaje Submarino"
          />
          <div className="book-info">
            <div className="book-title">20 Mil Leguas de Viaje Submarino</div>
            <div className="book-author">Julio Verne</div>
          </div>
        </a>

        <a
          href="/Cuentos/El Principito/El principito.html"
          className="book"
          title="Ver detalles de El principito"
        >
          <img
            src="/Cuentos/El Principito/el principito.jpeg"
            alt="El principito"
          />
          <div className="book-info">
            <div className="book-title">El principito</div>
            <div className="book-author">Antoine de Saint-Exupéry</div>
          </div>
        </a>

        <a
          href="/Cuentos/El extraño caso del Dr. Jekyll y Mr. Hyde/ElextrañocasodelDr.Jekyll.html"
          className="book"
          title="Ver detalles de El extraño caso del Dr.Jekyll y Mr. Hyde"
        >
          <img
            src="/Cuentos/El extraño caso del Dr. Jekyll y Mr. Hyde/ElExtrañoCaso.jpg"
            alt="El extraño caso del Dr.Jekyll y Mr.Hyde"
          />
          <div className="book-info">
            <div className="book-title">
              El extraño caso del Dr.Jekyll y Mr.Hyde
            </div>
            <div className="book-author">Robert Louis Stevenson</div>
          </div>
        </a>

        <a
          href="/Cuentos/Tres Portugueses Bajo un paraguas/3PortuguesesBajounParaguas.html"
          className="book"
          title="Ver detalles de Tres Portugueses Bajo un paraguas"
        >
          <img
            src="/Cuentos/Tres Portugueses Bajo un paraguas/portugueses.jpg"
            alt="Tres Portugueses Bajo un Paraguas"
          />
          <div className="book-info">
            <div className="book-title">
              Tres Portugueses Bajo un Paraguas
            </div>
            <div className="book-author">Rodolfo Walsh</div>
          </div>
        </a>

        {/* acá podés agregar más libros */}
      </div>
    </main>
  );
}
