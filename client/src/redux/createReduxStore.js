import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const INITIAL_STATE = {};

const createReduxStore = () => {
  const rootReducer = combineReducers(reducers);
  /* eslint-disable no-underscore-dangle */
  const enhancer =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  /* eslint-enable */
  const store = createStore(rootReducer, INITIAL_STATE, enhancer);
  return store;
};

export default createReduxStore;
