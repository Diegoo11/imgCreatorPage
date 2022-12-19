import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Creador de imagenes</h1>
      <div className="card">
        <input className='inputSearch' type="text"></input>
        <button type="button" className='btnSearch'>
          Generar
        </button>
        <p>
          Creador de imagenes a traves de <code>OPENIA</code>
        </p>
      </div>
      <p className="read-the-docs">
        For Diegoo11
      </p>
    </div>
  )
}

export default App
