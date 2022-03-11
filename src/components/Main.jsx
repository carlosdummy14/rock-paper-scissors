import { useState } from 'react'
import HandRock from './HandRock'
import HandScissors from './HandScissors'
import HandPaper from './HandPaper'
import './Main.css'

const imageLeft = [<HandPaper />, <HandRock />, <HandScissors />]
const imageRight = [
  <HandPaper right />,
  <HandRock right />,
  <HandScissors right />
]

let intervalControl = null

const Main = props => {
  const [round, setRound] = useState(1)
  const [score, setScore] = useState({
    left: 0,
    right: 0
  })
  const [randomNumber, setRandomNumber] = useState({
    left: 0,
    right: 0
  })

  const handleRoll = () => {
    intervalControl = setInterval(() => {
      setRandomNumber({
        left: Math.floor(Math.random() * 3),
        right: Math.floor(Math.random() * 3)
      })
    }, 50)
    setRound(prevRound => {
      return prevRound + 1
    })
  }

  const checkScore = () => {
    if (randomNumber.left !== randomNumber.right) {
      // paper vs rock
      if (randomNumber.left === 0 && randomNumber.right === 1)
        setScore(prevScore => {
          return {
            ...prevScore,
            left: prevScore.left + 1
          }
        })
      // paper vs scissors
      if (randomNumber.left === 0 && randomNumber.right === 2)
        setScore(prevScore => {
          return {
            ...prevScore,
            right: prevScore.right + 1
          }
        })
      // rock vs paper
      if (randomNumber.left === 1 && randomNumber.right === 0)
        setScore(prevScore => {
          return {
            ...prevScore,
            right: prevScore.right + 1
          }
        })
      // rock vs scissors
      if (randomNumber.left === 1 && randomNumber.right === 2)
        setScore(prevScore => {
          return {
            ...prevScore,
            left: prevScore.left + 1
          }
        })
      // scissors vs paper
      if (randomNumber.left === 2 && randomNumber.right === 0)
        setScore(prevScore => {
          return {
            ...prevScore,
            left: prevScore.left + 1
          }
        })
      // scissors vs rock
      if (randomNumber.left === 2 && randomNumber.right === 1)
        setScore(prevScore => {
          return {
            ...prevScore,
            right: prevScore.right + 1
          }
        })
      // paper(0) rock(1) scissors(2)
    }
  }

  const handleStop = () => {
    clearInterval(intervalControl)
    checkScore()
  }

  console.log('render')
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
          <div className="item">{imageLeft[randomNumber.left]}</div>
          <button className="btn btn-fight" onClick={handleRoll}>
            ROLL
          </button>
        </div>
        <div className="panel">
          <span className="score">SCORE: {score.right}</span>
          <div className="item">{imageRight[randomNumber.right]}</div>
          <button className="btn btn-stop" onClick={handleStop}>
            STOP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
