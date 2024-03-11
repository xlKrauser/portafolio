import "../styles/contacto.css"

function Contacto() {
  return (
    <>
      <div className='conCont'>
        <h1 className='titulo'>Contacto</h1>
        <span className="resCont">Llena el formulario o enviame un mensaje - diego980411@gmail.com</span>
        <form>
          <div className="pregunta">
            <span className="campo"> 
            <ion-icon name="person-sharp"></ion-icon>
            </span>
              <input className="agrupar" type="text" placeholder='Name' />
          </div>
          <div className="pregunta">
            <span className="campo"> 
            <ion-icon name="mail-sharp"></ion-icon>
            </span>
              <input className="agrupar" type="email" placeholder='Email' />
          </div>
          <div className="cajaMensaje">
              <textarea className="mensaje" placeholder="Mensaje" rows={12} maxLength={500}/>
          </div>
          <div className="cajaBoton">
            <input type="submit" value="Enviar mensaje" className="boton" />
          </div>
   
        </form>
      </div>
    </>
  )
}

export default Contacto
