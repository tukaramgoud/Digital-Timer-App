// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="timer-heading">Digital Timer</h1>
        <div className="sub-container">
          <div className="image-container">
            <div className="white-round-container">
              <h1 className="timer">25:00</h1>
              <p className="all-heading">Paused</p>
            </div>
          </div>
          <div className="timer-container">
            <div className="pause-start-container">
              <div className="button-container">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="icon-size"
                  />
                </button>
                <p className="all-heading">Play</p>
              </div>
              <div className="button-container">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset"
                    className="icon-size"
                  />
                </button>
                <p className="all-heading">Reset</p>
              </div>
            </div>
            <p className="all-heading two">Set Timer Limit</p>
            <div className="inc-dec-container">
              <button type="button" className="button-2">
                -
              </button>
              <div className="number">25</div>
              <button type="button" className="button-2">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
