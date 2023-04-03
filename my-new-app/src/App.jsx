import { useState } from 'react'
import './App.css'
import HelloWild from './components/HelloWild'
import Lumos from './components/Lumos'

function App() {
  const [count, setCount] = useState(0)
  const [lumos, setLumos] = useState(0)

  return (
    <div className="App">
      {/* <PokemonCard /> */}
      <HelloWild />

      <Lumos
      type={lumos}
      />
    </div>

    
  )
}

export default App
