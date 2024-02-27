import CV from "../assets/DiegoCV.pdf"
import "../styles/inicio.css"

function Inicio() {
  return (
    <>      
    <div className="conInicio">
      <div className="cajaInicio">
        <div className="title1">
          <h2 className="presentacion">Hola! Mi nombre es</h2>
        </div>
        <h1 className="nombre">Diego Martinez</h1>
        <h1 className="profesion">Soy desarrollador Full stack</h1>
        <p className="resumen">Hola, mi nombre es Diego Martinez. Soy ingeniero electronico<br/>con un
          (1) año de experiencia en desarrollo web full stack. 
        </p>
        <a download="" href={CV}><button type="button">Descargar CV ↓ </button></a>
        
      </div>
      <div className="cajaImagen">
        <div className='imagen'/>
      </div>
    </div>
    </>
  );
}

export default Inicio


