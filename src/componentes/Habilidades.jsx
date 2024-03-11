import {fronted} from "../js/fronted"
import {backend} from "../js/backend"
import "../styles/habilidades.css"



function Habilidades() {
  
  return (
    <div className='conHabilidades'>
      <h1 className="titulo">Habilidades</h1>
      <span className="resumen">Estas son las tecnologias que he trabajado</span>
      {/* <h2>Fronted</h2> */}
      <div className="cajaHabilidad">
      {
        fronted.map((data)=>
          <div key={data.nombre} className="tecnologia">
            <span>{data.nombre}</span>
            <img src={data.icono} alt="" />
            <div className="cajaBarra">
              <div className="miBarra" style={
                {
                  '--ancho': `${data.porcentaje}%`,
                  width: '--ancho',
                }
              }></div>
            </div>
          </div>
        )
      }
      </div>
      {/* <h2>Backend</h2> */}
      <div className="cajaHabilidad">
      {
        backend.map((data)=>
          <div key={data.nombre} className="tecnologia">
            <span>{data.nombre}</span>
            <img src={data.icono} alt="" />
            <div className="cajaBarra">
              <div className="miBarra" style={
                {
                  '--ancho': `${data.porcentaje}%`,
                  width: '--ancho',
                }
              }></div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Habilidades
