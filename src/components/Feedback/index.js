// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {loveEmoji: ''}

  feedbackGiven = () => {
    const {loveEmojiUrl} = this.props
    this.setState({loveEmoji: loveEmojiUrl})
  }

  render() {
    const {loveEmoji} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg">
        <div className="card">
          {loveEmoji === '' ? (
            <h1 className="heading">
              How satisfied are you with our customer support performance ?
            </h1>
          ) : null}
          <ul className="list-container">
            {loveEmoji === '' ? (
              emojis.map(eachItem => (
                <FeedbackItem
                  key={eachItem.id}
                  feedbackItem={eachItem}
                  feedbackGiven={this.feedbackGiven}
                />
              ))
            ) : (
              <li className="list-item">
                <img
                  className="emoji-heart"
                  src={loveEmojiUrl}
                  alt="love emoji"
                />
                <h1 className="heading">Thank You</h1>
                <p className="para">
                  We will use you feedback to improve our service
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const FeedbackItem = props => {
  const {feedbackItem, feedbackGiven} = props
  const {name, imageUrl} = feedbackItem
  const feedback = () => {
    feedbackGiven()
  }

  return (
    <li className="list-item">
      <img onClick={feedback} className="emoji" src={imageUrl} alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default Feedback
