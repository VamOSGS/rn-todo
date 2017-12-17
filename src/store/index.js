import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { compose } from 'redux';


export default function configureStore(initialState) {
    const store = createStore(reducer, compose(applyMiddleware(thunk)));

  
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }
  
    return store;
  }