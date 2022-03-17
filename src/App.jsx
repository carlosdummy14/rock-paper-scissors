import { useState } from 'react'
import Landing from './components/Landing'
import Main from './components/Main'

function App() {
  const [gameStatus, setGameStatus] = useState('start')
  return (
    <div className="container">
      {gameStatus === 'start' && <Landing setGameStatus={setGameStatus} />}
      {gameStatus === 'play' && <Main setGameStatus={setGameStatus} />}
    </div>
  )
}

export default App
