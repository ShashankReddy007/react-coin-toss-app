// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossResultImage: true,
    headsCount: 0,
    tailsCount: 0,
  }

  makeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState({tossResultImage: true})
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState({tossResultImage: false})
    }
  }

  getHeadsImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
      alt="toss result"
      className="toss-result-img"
    />
  )

  getTailsImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
      alt="toss result"
      className="toss-result-img"
    />
  )

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {tossResultImage ? this.getHeadsImage() : this.getTailsImage()}
          <button type="button" className="button" onClick={this.makeToss}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
