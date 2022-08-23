// Write your code here

import './index.css'

const CommentItem = props => {
  const {item, profileimageBGcolor, togglelikestatus, deletecomment} = props
  const {id, name, comment, isliked, timestamp} = item
  const imgurl = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClassName = isliked ? 'filled' : 'non-filled'

  const likeclicked = () => {
    togglelikestatus(id)
  }

  const enabledelete = () => {
    deletecomment(id)
  }

  return (
    <li className="single-comment-container">
      <div className="profile-image-name-container">
        <div className={`profile-image-container ${profileimageBGcolor}`}>
          <p className="pofile-image">{name[0]}</p>
        </div>
        <div className="name-comment-container">
          <div className="name-time-stamp-container">
            <p className="name">{name}</p>
            <p className="time-stamp">{timestamp}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="actions-container">
        <div className="like-container">
          <img
            className="like-image"
            src={imgurl}
            alt="like"
            onClick={likeclicked}
          />
          <button
            className={likeTextClassName}
            onClick={likeclicked}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          className="delete-container"
          type="button"
          testid="delete"
          onClick={enabledelete}
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            onClick={enabledelete}
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
