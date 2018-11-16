// Npm imports
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Local imports
import { handleInitialData } from '../actions/shared';
// Components
import Dashboard from './Dashboard';

// Styles
import '../index.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const loading = this.props.loading;

    return (
      <div className="container">
        {loading === true 
        ? <h3>Loading</h3>
        : <Dashboard /> }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => (
  {
    loading: authedUser === null,
  }
)

export default connect(mapStateToProps)(App);