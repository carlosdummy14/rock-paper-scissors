import './Main.css'
import HandRock from './HandRock'
import HandScissors from './HandScissors'
import HandPaper from './HandPaper'

const imageLeft = [<HandPaper />, <HandRock />, <HandScissors />]
const imageRight = [
  <HandPaper right />,
  <HandRock right />,
  <HandScissors right />
]

const Main = props => {
  return (
    <div className="main">
      <p className="round">
        ROUND
        <br />1
      </p>
      <div className="game-container">
        <div className="panel">
          <span className="score">SCORE: 5</span>
          <div className="item">{imageLeft[Math.floor(Math.random() * 3)]}</div>
          <button className="btn btn-fight">FIGHT</button>
        </div>
        <div className="panel">
          <span className="score">SCORE:15</span>
          <div className="item">
            {imageRight[Math.floor(Math.random() * 3)]}
          </div>
          <button className="btn btn-stop">STOP</button>
        </div>
      </div>
    </div>
  )
}

export default Main
