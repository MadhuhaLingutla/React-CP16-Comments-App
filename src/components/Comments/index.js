import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  togglelikestatus = id => {
    this.setState(prevstate => ({
      commentsList: prevstate.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isliked: !each.isliked}
        }
        return each
      }),
    }))
  }

  deletecomment = id => {
    const {commentsList} = this.state
    const updatedcommentsList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: updatedcommentsList})
  }

  updatename = event => {
    this.setState({name: event.target.value})
  }

  updatecomment = event => {
    this.setState({comment: event.target.value})
  }

  addcomment = event => {
    event.preventDefault()
    const {commentsList, name, comment} = this.state

    const newcomment = {
      id: uuidv4(),
      name,
      comment,
      isliked: false,
      timestamp: formatDistanceToNow(new Date()),
    }

    const newCommentList = [...commentsList, newcomment]
    this.setState({commentsList: newCommentList, name: '', comment: ''})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const randombackgroundcolor =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Comments</h1>
          <div className="form-container">
            <form className="input-form" onSubmit={this.addcomment}>
              <p className="instruction">
                Say something about 4.0 Technologies
              </p>
              <input
                className="name-field"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.updatename}
              />
              <textarea
                className="comment-field"
                type="textarea"
                rows="4"
                cols="50"
                placeholder="Your Comment"
                value={comment}
                onChange={this.updatecomment}
              />
              <button className="submit-button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <hr />
        <div className="comment-container">
          <div className="comments-count">
            <p className="count">{commentsList.length}</p>
            <p className="comments-count-name">Comments</p>
          </div>
          <div className="comments-addition-container">
            <ul className="ul-comment-container">
              {commentsList.map(each => (
                <CommentItem
                  item={each}
                  profileimageBGcolor={randombackgroundcolor}
                  togglelikestatus={this.togglelikestatus}
                  deletecomment={this.deletecomment}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
