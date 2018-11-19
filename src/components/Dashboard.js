import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tweet from './Tweet';

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props;
    console.log('From Dashboard');

    return (
      <ul className="list">
        <h2 className="heading-secondary">Your Timeline</h2>
        {tweetIds.map((id) => {
          return (
            <Tweet key={id} id={id}/>
          )
        })}
      </ul>
    )

  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets)
      .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);