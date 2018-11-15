// Npm imports
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Local imports
import logger from './logger';

export default applyMiddleware(thunk, logger);
