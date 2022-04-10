import './App.css';
import logo from './imagenes/freecodecamp-logo.png'
import Button from "./components/Button"
import Counter from "./components/Counter"
import { useState } from 'react'

function App() {

  const [ numClics, setNumClics ] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo"
        src={logo}
        alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter numClics={numClics}/>

        <Button texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />

        <Button texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
