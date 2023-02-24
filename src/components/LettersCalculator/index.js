// Write your code here.

import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state
    const lengthOfText = textInput.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
        <div className="container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="letters">Enter the phrase</label>
          <input
            type="text"
            onChange={this.onChangeTextInput}
            className="input"
            id="letters"
            placeholder="Enter the phrase"
          />
          <p className="result">No.of letters: {lengthOfText} </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
