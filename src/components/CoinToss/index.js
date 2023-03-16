// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  makeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState({tossResultImage: HEADS_IMG_URL})
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState({tossResultImage: TAILS_IMG_URL})
    }
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button onClick={this.makeToss}>Toss Coin</button>
        </div>
      </div>
    )
  }
}

export default CoinToss
