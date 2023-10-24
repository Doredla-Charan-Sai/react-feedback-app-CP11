// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {status: true}

  onStatus = () => {
    this.setState(prevState => ({status: !prevState}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {status} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          {status && (
            <>
              <h1 className="main-para">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoji-cont">
                {emojis.map(eachItem => (
                  <li key={eachItem.id} className="emoji-name">
                    <img
                      className="emoji"
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      onClick={this.onStatus}
                    />
                    <p className="name">{eachItem.name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {!status && (
            <>
              <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
              <h1 className="main-para">Thank You!</h1>
              <p className="name">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
