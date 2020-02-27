import React, { Component } from 'react'

class Home extends Component {

  handleClickDeposit = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    // TODO navigate
  }

  handleClickRedeem = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    // TODO navigate
  }

  render() {
    // TODO  figure out a better way to handle this styling
    const isMobile = true // OLD: window.innerWidth < 768

    return (
      <div className="home">
        <div className="title">
          Bitcoin,
		      <br />
          On
		      <br />
          Ethereum
		  <div className="subtitle">
            <div className="vertical-aligned">
              { isMobile
                ? <span>
                    No games,
                    <br />
                    just math.
                  </span>
                : <span>No games, just math.</span>
              }
		    </div>
          </div>
        </div>
        <div className="step-by-step">
          <ol>
            <li>
              Deposit BTC
            </li>
            <li>
              Mint TBTC
		        </li>
            <li>
              Lend and earn interest on your BTC.
		        </li>
          </ol>
        </div>
        <div className="mission-statement">
          <div className="hook">
            No middlemen. Period.
		      </div>
          <div className="line-and-sinker">
            Censorship resistant, seizure resistant, inflation resistant.
		      </div>
        </div>
      </div>
    )
  }
}

export default Home
