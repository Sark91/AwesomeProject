import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gameReducer from 'AwesomeProject/react/reducers/game';

export default createStore(
  combineReducers({
    routing: routerReducer,
    game: gameReducer,
    // debug: (state, action) => {
    //   console.log(action.type, action);
    //   return state || {};
    // },
  })
);