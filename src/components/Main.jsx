import { useState } from 'react'
import HandRock from './HandRock'
import HandScissors from './HandScissors'
import HandPaper from './HandPaper'
import checkScore from '../utils/checkScore'
import winImage from '../assets/WIN.png'
import './Main.css'

const imageLeft = [<HandPaper />, <HandRock />, <HandScissors />]
const imageRight = [
  <HandPaper right />,
  <HandRock right />,
  <HandScissors right />
]

let intervalControl = null
const MAXROUNDS = 10
const ROLLMS = 50

const Main = ({ setGameStatus }) => {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState({
    left: 0,
    right: 0
  })
  const [randomNumber, setRandomNumber] = useState({
    left: 0,
    right: 0
  })
  const [isRoll, setIsRoll] = useState(true)
  const [winner, setWinner] = useState('')

  const handleRoll = () => {
    setIsRoll(false)
    intervalControl = setInterval(() => {
      setRandomNumber({
        left: Math.floor(Math.random() * 3),
        right: Math.floor(Math.random() * 3)
      })
    }, ROLLMS)
    setRound(prevRound => {
      return prevRound + 1
    })
  }

  const handleStop = () => {
    setIsRoll(true)
    clearInterval(intervalControl)
    const calculateScore = checkScore(
      randomNumber.left,
      randomNumber.right,
      score
    )
    setScore(calculateScore)
    if (round === MAXROUNDS) {
      if (calculateScore.left === calculateScore.right) {
        setWinner('tie')
      } else if (calculateScore.left > calculateScore.right) {
        setWinner('left')
      } else {
        setWinner('right')
      }
    }
  }

  return (
    <div className="main">
      <p className="round">
        ROUND
        <br />
        {round}
      </p>
      <div className="game-container">
        <div className="panel">
          <span className="score">SCORE: {score.left}</span>
          <div className="item">
            {imageLeft[randomNumber.left]}
            {winner === 'left' && <img className="winner" src={winImage} />}
          </div>
        </div>
        <div className="panel">
          <span className="score">SCORE: {score.right}</span>
          <div className="item">
            {imageRight[randomNumber.right]}
            {winner === 'right' && <img className="winner" src={winImage} />}
          </div>
        </div>
      </div>
      <div className="buttons">
        {winner === '' ? (
          isRoll ? (
            <button className="btn btn-roll" onClick={handleRoll}>
              ROLL
            </button>
          ) : (
            <button className="btn btn-stop" onClick={handleStop}>
              STOP
            </button>
          )
        ) : (
          <button
            className="btn btn-large"
            onClick={() => setGameStatus('start')}
          >
            PLAY AGAIN
          </button>
        )}
      </div>
    </div>
  )
}

export default Main
