// npm imports
import { combineReducers } from 'redux';

// local imports
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';

export default combineReducers({
  authedUser,
  users,
  tweets
})