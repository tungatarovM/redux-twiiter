import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tweet from './Tweet';

class Dashboard extends Component {
  render() {
    const { tweets, tweetIds } = this.props;
    console.log('From Dashboard');
    console.log(tweetIds);

    return (
      <ul className="list">
        <h2 className="heading-secondary">Your Timeline</h2>
        {tweets.map((tweet) => {
          return (
            <Tweet tweet={tweet} key={tweet.id}/>
          )
        })}
      </ul>
    )

  }
}

const mapStateToProps = ({ tweets, users }) => {
  const modifiedTweets = Object.keys(tweets)
    .map((key) => tweets[key])
    .map((tweet) => {
      const author = tweet.author;
      const avatarURL = users[author].avatarURL;
      const authorName = users[author].name;
      const replyId = tweet.replyingTo;
      const replyAuthor = replyId ? tweets[replyId].author : null;
    
      return {
        ...tweet, author: authorName, avatarURL, replyingTo: replyAuthor
      }
    })

  const tweetIds = Object.keys(tweets)
    .map((key) => tweets[key].id)
  
  return {
    tweetIds,
    tweets: modifiedTweets
  }
}

export default connect(mapStateToProps)(Dashboard);