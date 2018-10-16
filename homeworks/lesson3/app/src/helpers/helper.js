import {createStore} from 'redux';
import {authentication as reducer} from '../reducers/reducer';

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enable Redux dev tool
  );

export { store };