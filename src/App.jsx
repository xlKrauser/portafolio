import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Info from "./componentes/Info"
import Habilidades from "./componentes/Habilidades"
import Proyectos from "./componentes/Proyectos"
import Contacto from "./componentes/Contacto"
import Error404 from "./componentes/Error404"
import Navbar from "./componentes/Navbar"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/acerca-de-mi" element={<Info/>}/>
          <Route path="/habilidades" element={<Habilidades/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
