
// Local imports
import { getInitialData } from "../utils/api";
import { setAuthedUser } from './authedUser';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';

const HANDLE_INITIAL_DATA = 'HANDLE_INITIAL_DATA';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets, }) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_ID));
      })
  }
}