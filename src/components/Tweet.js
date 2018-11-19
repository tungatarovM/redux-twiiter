import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti'
import {TiHeartOutline} from 'react-icons/ti'
import {TiHeartFullOutline} from 'react-icons/ti'

import { handleToggleTweet } from '../actions/tweets';
import { formatDate, formatTweet } from '../utils/helpers';

class Tweet extends Component {

  handleClickLike = (e) => {
    e.preventDefault()

    const { dispatch, tweet, authedUser } = this.props

    dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
    console.log('like is clicked');
  }

  render() {
    const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } = this.props.tweet;

    return (
      <li className="tweet">
        <div className="tweet__left">
          <img className="avatar" src={avatar} alt="Avatar" />
        </div>
        <div className="tweet__right">
          <p className="tweet__author">{name}</p>
          <p className="tweet__date">{formatDate(timestamp)}</p>
          {parent ? <p className="tweet__reply">Replying to {parent.author}</p> : null}
          <p className="tweet__text">{text}</p>
          <div className="tweet__buttons">
            <TiArrowBackOutline className='tweet__icon' />
            <span className="tweet__replies-count">{replies !== 0 && replies}</span>
            <button onClick={this.handleClickLike} className="tweet__like"> 
              {hasLiked 
                ? <TiHeartFullOutline onClick={this.handleClickLike} color="#e0245e" className="tweet__icon"/> 
                : <TiHeartOutline className="tweet__icon"/>}
            </button>  
            <span className="tweet__likes-count">{likes !== 0 && likes}</span>
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ tweets, users, authedUser}, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  
  return {
    authedUser,
    tweet: tweet ?
      formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
  }
}

export default connect(mapStateToProps)(Tweet);