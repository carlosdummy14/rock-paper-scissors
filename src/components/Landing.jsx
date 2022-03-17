import './Landing.css'
import handRock from '../assets/fa-regular_hand-rock.svg'
import handPaper from '../assets/fa-regular_hand-paper.svg'
import handScissors from '../assets/fa-regular_hand-scissors.svg'

const Landing = ({ setGameStatus }) => {
  return (
    <div className="landing">
      <div className="wrapper">
        <div className="img-column">
          <img className="landing-image" src={handScissors} alt="scissors" />
          <img className="landing-image" src={handPaper} alt="paper" />
          <img className="landing-image" src={handRock} alt="rock" />
        </div>
        <div className="center">
          <button
            className="btn btn-large"
            onClick={() => setGameStatus('play')}
          >
            NEW GAME
          </button>
          <p className="text">Roll 10 times and win</p>
        </div>
        <div className="img-column">
          <img
            className="landing-image image-right"
            src={handPaper}
            alt="paper"
          />
          <img
            className="landing-image image-right"
            src={handRock}
            alt="rock"
          />
          <img
            className="landing-image image-right"
            src={handScissors}
            alt="scissors"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
