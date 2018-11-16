import React from 'react';
import { formatDate } from '../utils/helpers';

const Tweet = (props) => {
  const { tweet } = props;

  const { author, text, avatarURL, timestamp, replyingTo } = tweet;

  return (
    <li className="tweet">
      <div className="tweet__left">
        <img className="avatar" src={avatarURL} alt="Avatar" />
      </div>
      <div className="tweet__right">
        <p className="tweet__author">{author}</p>
        <p className="tweet__date">{formatDate(timestamp)}</p>
        {replyingTo ? <p className="tweet__reply">Replying to {replyingTo}</p> : null}
        <p className="tweet__text">{text}</p>
        <div className="tweet__buttons">
          <i className="fas fa-reply" />
          <i className="far fa-heart" />
        </div>
        
      </div>
      
      
    </li>
  )
}



export default Tweet;